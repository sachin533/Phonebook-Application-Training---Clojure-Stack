/**
 * Headless UI smoke test - boots the compiled app (public/js/main.js) in a
 * jsdom window with a stubbed fetch() and exercises the real user flows:
 *
 *   boot -> login screen -> register screen (+ client validation)
 *        -> login (server 401 then success) -> dashboard
 *        -> contact list (20 of 565) -> debounced search + clear
 *        -> pagination (page 2, range text, disabled buttons)
 *        -> contact detail
 *
 *   node scripts/ui-smoke.js
 */
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const bundle = path.join(__dirname, "..", "public", "js", "main.js");
const html = `<!DOCTYPE html><html><head></head><body><div id="app"></div></body></html>`;

const TOTAL = 565;

function makeContacts() {
  const rows = [];
  for (let id = 1; id <= 40; id++) {
    rows.push({
      id,
      name: id === 1 ? "Alphabet Soup" : `Contact ${id}`,
      phoneNumber: `+1 555 100 ${String(id).padStart(4, "0")}`,
      email: id === 3 ? null : `person${id}@example.com`,
      address: id % 5 === 0 ? null : `${id} Sample Street, Testville`,
      createdAt: `2026-01-${String(id).padStart(2, "0")} 10:00:00`,
    });
  }
  return rows;
}
const all = makeContacts();

const failures = [];
function check(label, cond, extra) {
  const ok = !!cond;
  console.log(`  ${ok ? "PASS" : "FAIL"} - ${label}${extra !== undefined ? ` (${extra})` : ""}`);
  if (!ok) failures.push(label);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const vc = new VirtualConsole();
  for (const ev of ["log", "info", "debug", "warn", "error"]) {
    vc.on(ev, (...a) => console.log(`  [page ${ev}]`, ...a));
  }
  vc.on("jsdomError", (e) => console.log("  [jsdomError]", e.message || e));

  const dom = new JSDOM(html, {
    url: "http://localhost:8080/",
    pretendToBeVisual: true,
    runScripts: "outside-only",
    virtualConsole: vc,
  });
  const w = dom.window;
  w.addEventListener("unhandledrejection", (e) =>
    console.log("  [unhandledrejection]", (e.reason && (e.reason.stack || e.reason.message)) || e.reason));
  w.addEventListener("error", (e) =>
    console.log("  [window error]", e.message, e.filename, e.lineno));

  const fetchCalls = [];
  const respond = (status, payload) =>
    w.Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      // payloads must be created IN the jsdom realm, exactly like a real
      // Response.json() - cross-realm objects fail CLJS type checks
      json: () => w.Promise.resolve(payload === null ? null : w.JSON.parse(JSON.stringify(payload))),
    });

  w.fetch = (url, opts) => {
    const u = new URL(String(url), "http://localhost:8080");
    const method = ((opts && opts.method) || "GET").toUpperCase();
    const body = opts && opts.body ? JSON.parse(opts.body) : null;
    fetchCalls.push({ url: String(url), method, body });

    const p = u.pathname;
    const q = u.searchParams.get("q");
    const page = parseInt(u.searchParams.get("page") || "1", 10);
    const pageSize = parseInt(u.searchParams.get("pageSize") || "20", 10);
    const sort = u.searchParams.get("sort");

    if (p === "/api/auth/login" && method === "POST") {
      if (body.password === "wrongpass") {
        return respond(401, { error: "Invalid email or password" });
      }
      return respond(200, {
        token: "test-token",
        user: { id: 1, email: body.email, createdAt: "2026-01-01 00:00:00" },
      });
    }
    if (p === "/api/auth/register" && method === "POST") {
      return respond(201, {
        token: "test-token",
        user: { id: 1, email: body.email, createdAt: "2026-01-01 00:00:00" },
      });
    }
    if (p === "/api/auth/me") {
      if (u.headers && String(u.headers.get && u.headers.get("Authorization") || "") === "") {
        /* not used - we always send the token once logged in */
      }
      return respond(200, { id: 1, email: "tester@example.com", createdAt: "2026-01-01 00:00:00" });
    }
    if (p === "/api/auth/logout") return respond(204, null);

    if (p === "/api/contacts" && method === "GET") {
      if (sort === "recent") {
        return respond(200, { contacts: all.slice(0, 5), total: TOTAL, page: 1, pageSize: 5 });
      }
      let pool = all;
      let total = TOTAL;
      if (q) {
        if (q === "zzzznope") {
          pool = [];
          total = 0;
        } else {
          const needle = q.toLowerCase();
          pool = all.filter((c) =>
            [c.name, c.phoneNumber, c.email || ""].some((v) => String(v).toLowerCase().includes(needle)));
          total = pool.length;
        }
      }
      const start = (page - 1) * pageSize;
      return respond(200, { contacts: pool.slice(start, start + pageSize), total, page, pageSize });
    }
    const m = p.match(/^\/api\/contacts\/(\d+)$/);
    if (m) {
      const id = parseInt(m[1], 10);
      const c = all.find((x) => x.id === id);
      if (method === "DELETE") return respond(204, null);
      if (method === "PUT") return respond(200, c);
      if (!c) return respond(404, { error: "Contact not found" });
      return respond(200, c);
    }
    return respond(404, { error: "Not found" });
  };
  w.confirm = () => true;

  // --- small helpers ---------------------------------------------------------
  const $ = (sel) => w.document.querySelector(sel);
  const $$ = (sel) => Array.from(w.document.querySelectorAll(sel));
  const text = () => { const r = $("#app"); return r ? r.textContent : ""; };
  const setInput = (input, value) => {
    const setter = Object.getOwnPropertyDescriptor(w.HTMLInputElement.prototype, "value").set;
    setter.call(input, value);
    input.dispatchEvent(new w.Event("input", { bubbles: true }));
  };
  const submitForm = () => {
    const form = $("form");
    if (form) form.dispatchEvent(new w.Event("submit", { bubbles: true, cancelable: true }));
    return !!form;
  };
  const loginPosts = () => fetchCalls.filter((c) => c.url.includes("/api/auth/login"));
  const registerPosts = () => fetchCalls.filter((c) => c.url.includes("/api/auth/register"));

  console.log("Phonebook headless UI smoke test");
  console.log("-".repeat(54));

  try {
    w.eval(fs.readFileSync(bundle, "utf8"));
  } catch (e) {
    check("bundle evaluates without error", false, e.message);
    console.log("-".repeat(54));
    console.log("FAILURES:", failures);
    process.exit(1);
  }
  await sleep(400);

  // --- 1. boot without a token -> login screen -------------------------------
  check("app mounted (root has content)", $("#app").innerHTML.length > 0,
        `html len=${$("#app").innerHTML.length}`);
  check("login screen shown", text().includes("Sign in to Phonebook"));
  check("login has email input", !!$('input[type="email"]'));
  check("login has password input", !!$('input[type="password"]'));
  check("login submit button present", !!$('button[type="submit"]'));
  check("link to register present", !!$('a[href="#/register"]'));
  check("no navbar before login", !$(".navbar"));

  // --- 2. empty form -> client validation, no request ------------------------
  submitForm();
  await sleep(150);
  check("empty login blocked client-side", loginPosts().length === 0,
        `${loginPosts().length} login POSTs`);
  check("client validation shows email error", text().includes("Email is required"));
  check("client validation shows password error", text().includes("Password is required"));

  // --- 3. register screen + mismatched passwords -----------------------------
  $('a[href="#/register"]').dispatchEvent(new w.MouseEvent("click", { bubbles: true, cancelable: true }));
  await sleep(250);
  check("register screen shown", text().includes("Create your account"));
  check("register has confirm password field",
        $$('input[type="password"]').length === 2,
        `${$$('input[type="password"]').length} password fields`);
  setInput($('input[type="email"]'), "new@example.com");
  const pwFields = $$('input[type="password"]');
  setInput(pwFields[0], "abc");           // too short AND != confirm
  setInput(pwFields[1], "secret999");
  submitForm();
  await sleep(200);
  check("mismatched passwords blocked", registerPosts().length === 0,
        `${registerPosts().length} register POSTs`);
  check("confirm error displayed", text().includes("Passwords do not match"));
  check("short password error displayed", text().includes("at least 8 characters"));

  // --- 4. back to login: wrong password -> server 401 banner -----------------
  w.location.hash = "#/login";
  await sleep(250);
  check("back on login screen", text().includes("Sign in to Phonebook"));
  setInput($('input[type="email"]'), "tester@example.com");
  setInput($('input[type="password"]'), "wrongpass");
  submitForm();
  await sleep(300);
  check("login POST sent with credentials",
        loginPosts().length === 1 && loginPosts()[0].body.email === "tester@example.com",
        JSON.stringify((loginPosts()[0] || {}).body));
  check("server 401 shows error banner", text().includes("Invalid email or password"));
  check("still on login after 401", text().includes("Sign in to Phonebook"));
  check("no token stored after 401", !w.sessionStorage.getItem("phonebook.token"));

  // --- 5. successful login -> dashboard --------------------------------------
  setInput($('input[type="password"]'), "correct-horse");
  submitForm();
  await sleep(350);
  check("token stored after login", w.sessionStorage.getItem("phonebook.token") === "test-token");
  check("navbar visible after login", !!$(".navbar"));
  check("dashboard rendered", text().includes("Dashboard"));
  check("total contacts card shows 565", text().includes("565"));
  check("recent list loaded", text().includes("Alphabet Soup"));
  check("logout button present", text().includes("Logout"));

  // --- 6. navigate to the contact list ---------------------------------------
  const contactsLink = $$(".nav-link").find((a) => a.getAttribute("href") === "#/contacts");
  contactsLink.dispatchEvent(new w.MouseEvent("click", { bubbles: true, cancelable: true }));
  await sleep(350);
  check("contacts list rendered", !!$("table.contacts-table"));
  const rowCount = $$("table.contacts-table tbody tr").length;
  check("page 1 has 20 rows", rowCount === 20, `${rowCount} rows`);
  check("range text", text().includes("Showing 1–20 of 565 contacts"),
        (text().match(/Showing .*of \d+[^A-Za-z]*contacts?/) || ["none"])[0]);
  check("search input present", !!$(".search-input"));
  const prevBtn = $$(".page-btn").find((b) => b.textContent.includes("Previous"));
  const nextBtn = $$(".page-btn").find((b) => b.textContent.includes("Next"));
  check("Previous disabled on page 1", prevBtn && prevBtn.disabled);
  check("Next enabled on page 1", nextBtn && !nextBtn.disabled);
  check("page number buttons rendered", $$(".page-btn").some((b) => b.textContent.trim() === "29"),
        `last page = ${Math.ceil(565 / 20)}`);

  // --- 7. debounced search ---------------------------------------------------
  setInput($(".search-input"), "alp");
  await sleep(150);
  check("search waits for debounce (no fetch yet)",
        !fetchCalls.some((c) => c.url.includes("q=alp")),
        fetchCalls.slice(-2).map((c) => c.url).join(" | "));
  await sleep(400);
  const searchCall = fetchCalls.find((c) => c.url.includes("q=alp"));
  check("debounced search sent to API", !!searchCall, searchCall ? searchCall.url : "none");
  check("search hits the server (not client filter)", searchCall && searchCall.url.includes("/api/contacts?q=alp"));
  check("URL syncs the query", w.location.hash.includes("q=alp"), w.location.hash);
  check("search result meta", text().includes("of 1 results for"));
  check("clear button visible", !!$(".search-clear"));

  // --- 8. empty results ------------------------------------------------------
  setInput($(".search-input"), "zzzznope");
  await sleep(450);
  check("empty search state shown", text().includes("No results"));
  check("empty state keeps the query", text().includes("zzzznope"));

  // --- 9. clear button -------------------------------------------------------
  $(".search-clear").dispatchEvent(new w.MouseEvent("click", { bubbles: true, cancelable: true }));
  await sleep(450);
  check("query cleared from URL", !w.location.hash.includes("q="), w.location.hash);
  check("list restored after clear",
        $$("table.contacts-table tbody tr").length === 20,
        `${$$("table.contacts-table tbody tr").length} rows`);

  // --- 10. pagination --------------------------------------------------------
  const page2 = $$(".page-btn").find((b) => b.textContent.trim() === "2");
  check("page 2 button present", !!page2);
  page2.dispatchEvent(new w.MouseEvent("click", { bubbles: true, cancelable: true }));
  await sleep(350);
  check("page 2 in URL", w.location.hash.includes("page=2"), w.location.hash);
  const page2Call = fetchCalls.filter((c) => c.url.includes("page=2"));
  check("page 2 requested from API", page2Call.length > 0,
        page2Call.map((c) => c.url).join(" | "));
  check("range text on page 2", text().includes("Showing 21–40 of 565 contacts"));
  const prev2 = $$(".page-btn").find((b) => b.textContent.includes("Previous"));
  check("Previous enabled on page 2", prev2 && !prev2.disabled);
  const active = $$(".page-btn.active");
  check("current page highlighted", active.length === 1 && active[0].textContent.trim() === "2",
        active.map((b) => b.textContent.trim()).join(","));

  // --- 11. contact detail ----------------------------------------------------
  const firstName = $(".name-link");
  check("name link present", !!firstName);
  firstName.dispatchEvent(new w.MouseEvent("click", { bubbles: true, cancelable: true }));
  await sleep(350);
  check("detail view open", !!$(".detail-card"), w.location.hash);
  check("detail shows contact name", text().includes("Contact 21"),
        text().slice(0, 120));
  check("detail has Edit action", text().includes("Edit"));
  check("detail has Delete action", text().includes("Delete"));
  check("detail shows phone", text().includes("+1 555 100 0021"));
  check("back link to list", !!$('a[href="#/contacts"]'));

  // --- summary ---------------------------------------------------------------
  console.log("-".repeat(54));
  console.log("       fetch calls:", fetchCalls.length);
  if (failures.length) {
    console.log("FAILURES:", JSON.stringify(failures));
    process.exit(1);
  }
  console.log("All headless UI tests passed.");
  process.exit(0);
})();
