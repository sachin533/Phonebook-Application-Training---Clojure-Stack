# 📒 Phonebook Application

A full-stack phonebook application built for the *Clojure Stack* training — with
**accounts, secure server-side sessions, Google-like search, SQL pagination and
a responsive blue/white professional UI**.

| Layer | Technology |
|---|---|
| HTTP server | **Ring** with embedded **Jetty** |
| Routing | **Reitit** (data-driven, route-level auth middleware) |
| Database | **MySQL 8** (`phonebook_db`) via **next.jdbc** + **HikariCP** pooling |
| Validation | **Malli** (backend) + mirrored pure fns (frontend) |
| JSON | **Muuntaja** (content negotiation) |
| Passwords | **buddy-hashers** — bcrypt (cost 12) with PBKDF2-HMAC-SHA512 prefix |
| Sessions | opaque 256-bit bearer tokens; only their SHA-256 digest is stored |
| Frontend | **ClojureScript** + **Reagent** (React wrapper) |
| Build | **shadow-cljs** (fast compiles, hot reload) |
| HTTP on the frontend | browser **Fetch API** (global 401 → login screen) |
| CORS | custom middleware in the backend |

Everything runs **natively on the host machine — no Docker**.

```
phonebook/
├── backend/            Clojure API (Ring + Reitit + next.jdbc)
│   ├── deps.edn          aliases: :run (server), :seed (demo data)
│   ├── src/phonebook/    config.clj db.clj validation.clj auth.clj
│   │                     routes.clj core.clj seed.clj
│   └── scripts/          smoke.clj e2e.clj probe.clj genhash.clj (tests/tools)
├── frontend/           ClojureScript UI (Reagent + shadow-cljs)
│   ├── package.json  shadow-cljs.edn
│   ├── public/          index.html + css/style.css (dev-http on :8080)
│   ├── scripts/         ui-smoke.js (headless jsdom UI test)
│   └── src/phonebook/ui/  core.cljs state.cljs api.cljs validation.cljs
│                         icons.cljs  pages/ (login register dashboard list
│                         form detail)
├── db/                 setup.sql seed.sql backup.ps1
│   └── migrations/      001_auth.sql (upgrade an existing Phase-1 DB)
├── .env.example        configuration template
└── README.md
```

---

## 1. Prerequisites

| Tool | Version used | Check |
|---|---|---|
| Java (JDK 17+) | 21 | `java -version` |
| Clojure CLI | 1.12.6+ | `clj --version` |
| Node.js + npm | 25 / 11 | `node -v && npm -v` |
| MySQL Server | 8.0 | `mysql --version` |

**Install the Clojure CLI on Windows** (no admin rights needed, PowerShell):

```powershell
# official tools zip → user PowerShell module path
Invoke-WebRequest https://github.com/clojure/brew-install/releases/download/1.12.6.1673/clojure-tools.zip -OutFile clojure-tools.zip
Expand-Archive clojure-tools.zip -DestinationPath "$env:USERPROFILE\OneDrive\Documents\WindowsPowerShell\Modules"
clj --version
```

Or with Chocolatey: `choco install clojure` (admin shell).
Node: `winget install OpenJS.NodeJS.LTS`. MySQL: mysql.com installer, keep the service running.

## 2. Database setup

As the MySQL `root` user:

```powershell
# fresh install: database + least-privilege user + users/sessions/contacts tables
mysql -u root -p < db\setup.sql

# optional: demo contact rows belonging to the demo user (clj -M:seed does this too)
mysql -u root -p phonebook_db < db\seed.sql
```

`db/setup.sql` creates:

* database `phonebook_db`
* user `phonebook_app`@`localhost` with **only** privileges on `phonebook_db`
* table `users` (id, email unique, password_hash, created_at)
* table `sessions` (token_hash PK, user_id FK, expires_at, created_at)
* table `contacts` (exactly the schema from the training document **plus**
  `user_id` so every contact belongs to exactly one account)

**Upgrading an existing (Phase 1) database** — back up first, then apply the
migration; existing contacts are adopted by the demo user on next startup:

```powershell
powershell -File db\backup.ps1                    # → db/backups/*.sql
mysql -u root -p phonebook_db < db\migrations\001_auth.sql
```

> Edit the `CHANGE_ME` password inside `setup.sql` first, and reuse it in `.env`.

## 3. Configuration

Copy the template and fill in the DB password:

```powershell
Copy-Item .env.example .env
notepad .env
```

| Variable | Default | Meaning |
|---|---|---|
| `DB_HOST` | `localhost` | MySQL host |
| `DB_PORT` | `3306` | MySQL port |
| `DB_NAME` | `phonebook_db` | database name |
| `DB_USER` | `phonebook_app` | database user |
| `DB_PASSWORD` | – | database password |
| `PORT` | `3000` | API port |
| `CORS_ORIGIN` | `http://localhost:8080,...` | allowed browser origins |
| `AUTH_TOKEN_TTL_HOURS` | `168` | lifetime of a login session (7 days) |

Real environment variables always override the `.env` file.
No application password is hardcoded anywhere: credentials live only in the
database as bcrypt hashes, and the API refuses plaintext passwords.

## 4. Seed data (500+ contacts)

```powershell
cd backend
clj -M:seed
```

* creates the demo account **`demo@phonebook.local` / `Demo1234!`**
  (its password is stored **hashed**, never in code),
* inserts **550 realistic fictional contacts** (names, phones, emails,
  addresses — generated data, no real personal information),
* **idempotent**: re-running adds nothing new; existing rows are adopted by
  the demo user if they had no owner,
* created in batches inside transactions; duplicates are skipped safely.

Verify via the API after starting the backend:

```powershell
# login, then list with the returned token
$login = Invoke-RestMethod -Uri http://localhost:3000/api/auth/login -Method Post `
         -ContentType "application/json" -Body '{"email":"demo@phonebook.local","password":"Demo1234!"}'
Invoke-RestMethod -Uri "http://localhost:3000/api/contacts?page=1&pageSize=20" `
         -Headers @{ Authorization = "Bearer $($login.token)" }
# → total: 555  (≥ 500 ✓)
```

Always back up a live database before changing its schema: `powershell -File db\backup.ps1`.

## 5. Run the application

**Terminal 1 — backend** (creates missing tables, then listens):

```powershell
cd backend
clj -M:run
# Phonebook API listening on http://localhost:3000
```

**Terminal 2 — frontend** (shadow-cljs dev server with hot reload):

```powershell
cd frontend
npm install                 # first time only
npx shadow-cljs watch app   # first build compiles everything
# open http://localhost:8080
```

### Sharing the app with others (Cloudflare Tunnel)

The shadow-cljs dev server reverse-proxies any path that is not a local file
(`/api/*`, `/health`) to the Clojure API (see `:dev-http` in
`shadow-cljs.edn`), so UI and API are **same-origin** — locally and behind a
tunnel, with no CORS changes. `cloudflared` comes with the app setup; run:

```powershell
& "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel --url http://localhost:8080
# INF |  https://<random-words>.trycloudflare.com  |
```

Send that `https://…trycloudflare.com` link to anyone — they get the login
screen, can register, or use the demo account. Notes:

* both servers must stay running locally (backend `clj -M:run`, frontend
  `npx shadow-cljs watch app`, and the cloudflared command);
* it is an account-less **quick tunnel**: the URL changes on every restart
  and it is public to anyone who has the link while running — use test data
  only. For a stable address, create a *named tunnel* with a Cloudflare
  account (`cloudflared tunnel create phonebook` + a route on your domain);
* stop sharing by closing the cloudflared process.

## 6. Using the application

| Screen | Route | What it does |
|---|---|---|
| Sign in | `#/login` | email + password → server verifies bcrypt hash |
| Create account | `#/register` | client *and* server validation, 409 on duplicate email |
| Dashboard | `#/dashboard` | stat cards (total contacts, quick actions), recently added |
| Contact list | `#/contacts?q=&page=` | search box + table/cards + numbered pagination |
| Add contact | `#/contacts/new` | rounded form, live field errors |
| Details | `#/contacts/:id` | profile card with tel:/mailto: links, edit/delete |
| Edit contact | `#/contacts/:id/edit` | prefilled form, save/cancel |

* **Login/logout** — the session token lives in `sessionStorage`
  (`phonebook.token`) and is sent as `Authorization: Bearer …`. Logout
  revokes it server-side; an expired/revoked token anywhere in the app
  drops you back to the login screen with a clear message. Visiting any
  protected route while signed out shows the login screen.
* **Search (Google-like)** — type in the pill-shaped search box; after a
  **300 ms debounce** the query hits the server (`?q=`), matches
  **partially and case-insensitively** against **name, phone and email**,
  syncs to the URL (`#/contacts?q=ada`), shows a spinner while loading,
  an × button to clear, a result count and a friendly empty state.
  Changing the query resets to page 1. The SQL uses a parameterized
  `LIKE` — never string concatenation.
* **Pagination** — numbered buttons (20 per page) with an ellipsis window,
  **Previous/Next disabled at the bounds**, a "Showing 1–20 of 555 contacts"
  range line, the page count computed from the *filtered* total, and
  `page`/`q` kept in the URL so reload/deep-links work. Out-of-range pages
  return an empty page with the correct total (the UI clamps to page 1).
* **Responsive** — navbar + stat cards on desktop; on ≤767 px the table
  becomes a stack of cards with data labels, forms go full width and the
  nav collapses to a scrollable strip.

## 7. REST API reference

All `/api/*` routes except register/login require a valid token
(otherwise `401 {"error":"Authentication required"}`), and every user sees
**only their own contacts** (another user's id → `404`, no existence leak).

| Method | Path | Body / query | Success | Errors |
|---|---|---|---|---|
| POST | `/api/auth/register` | `{email, password}` (≥8) | `201 {token, user}` | `400 {errors}`, `409 {error}` |
| POST | `/api/auth/login` | `{email, password}` | `200 {token, user}` | `400`, `401 {error}` |
| POST | `/api/auth/logout` | – (bearer) | `204` | `401` |
| GET | `/api/auth/me` | – (bearer) | `200 {id, email, createdAt}` | `401` |
| GET | `/api/contacts` (`?q=`, `?page=`, `?pageSize≤100`, `?sort=recent`) | – | `200 {contacts, total, page, pageSize}` | `401` |
| POST | `/api/contacts` | `{name, phoneNumber, email?, address?}` | `201` contact | `400`, `401`, `409` |
| GET | `/api/contacts/:id` | – | `200` contact | `400`, `401`, `404` |
| PUT | `/api/contacts/:id` | full contact | `200` contact | `400`, `401`, `404`, `409` |
| DELETE | `/api/contacts/:id` | – | `204` | `400`, `401`, `404` |
| GET | `/health` | – | `200 {status:"ok"}` (public) | – |

Contact JSON shape: `{id, name, phoneNumber, email, address, createdAt}`.

Validation rules (both sides): **name** required (≤255), **phone** required and
matching `^\+?[0-9][0-9\s\-().]{6,19}$` (≤50), **email** optional but valid when
present (unique per user), **address** optional. Register: email required and
valid, password ≥ 8 characters.

Try it with curl:

```powershell
# register / login
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" `
     -d '{"email":"me@example.com","password":"secret123"}'
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" `
     -d '{"email":"me@example.com","password":"secret123"}'

# authenticated list + search + pagination (paste the token)
curl "http://localhost:3000/api/contacts?q=ada&page=2&pageSize=20" `
     -H "Authorization: Bearer TOKEN"
```

## 8. Automated tests

```powershell
# 1) backend: route/CORS/validation/auth smoke tests — no database needed
cd backend
clj -M scripts/smoke.clj            # → 28/28 PASS

# 2) backend: full lifecycle against the RUNNING server (clj -M:run)
clj -M scripts/e2e.clj              # → 86/86 PASS (register/dup/login/CRUD,
                                    #   search variants, seed ≥500, first/middle/
                                    #   last/filtered pagination, scoping, logout)

# 3) frontend: headless UI test — boots the compiled bundle in jsdom with a
#    stubbed fetch and drives the real flows (npm install first)
cd ../frontend
node scripts/ui-smoke.js            # → 46/46 PASS (login/register validation,
                                    #   401 banner, dashboard, 20-row list,
                                    #   debounced search + clear, pagination,
                                    #   detail page)
```

All numbers above are the results of the latest run of each suite.

## 9. Implementation notes

* **Authentication** – passwords are hashed with `buddy-hashers/derive`
  (bcrypt, cost 12, `bcrypt+sha512$…` format) and verified with `check`;
  the API never stores or returns plaintext. Login issues a random 256-bit
  hex token: the client sees the token, the `sessions` table stores only its
  **SHA-256 digest** (a DB leak cannot be replayed), with an expiry checked
  on every request and deletion on logout (revocation).
* **Authorization** – reitit route middleware (`:middleware [auth/wrap-auth]`)
  attaches `:auth-user` to the request or answers `401`; every contact query
  filters by `user_id` in SQL, not in the UI.
* **Transactions** – multi-statement operations (seed batches, contact
  create/update with uniqueness checks) run inside `next.jdbc` transactions;
  SQLState `23000` violations map to `409`, Malli errors to `400`.
* **Connection pool** – `phonebook.db` builds a `HikariDataSource` once
  (`defonce` + `delay`) from the config; every query goes through it.
* **Search & paging** – one endpoint: `WHERE user_id = ? AND (name LIKE ? OR
  phoneNumber LIKE ? OR email LIKE ?)` with `%term%` parameters bound via
  `next.jdbc`, then `ORDER BY … LIMIT ? OFFSET ?`. `total` comes from a
  `COUNT(*)` over the same filter, so page counts follow the query.
* **CORS** – `wrap-cors` short-circuits `OPTIONS` preflights and adds CORS
  headers only to responses whose `Origin` is listed in `CORS_ORIGIN`.
* **Frontend state** – a single Reagent atom (`phonebook.ui.state`) with
  small action fns, a hand-rolled hash router bound once (`defonce`), and a
  debounced search that treats the URL as the source of truth; hot reload
  keeps the state.
* **Shared validation logic** – `phonebook.ui.validation` (ClojureScript)
  and `phonebook.validation` (Clojure) implement the same pure rules, so
  users get instant feedback and the API stays authoritative.

## 10. Troubleshooting

| Symptom | Fix |
|---|---|
| `Cannot reach the server` banner | Start the API (`clj -M:run`) — it must listen on `:3000` |
| `Your session has expired` banner | Token expired/revoked — sign in again (TTL: `AUTH_TOKEN_TTL_HOURS`) |
| Login says invalid credentials | Use the seeded demo account or register a new one |
| CORS error in the browser console | `CORS_ORIGIN` must contain the exact origin, e.g. `http://localhost:8080` |
| `Access denied for user 'phonebook_app'` | Run `db/setup.sql`, check `DB_PASSWORD` in `.env` |
| Table/DB not found | Same as above; backend only creates the *table*, not the database+user |
| `contacts.user_id` missing on an old DB | Apply `db/migrations/001_auth.sql` (backup first) |
| Empty list after seeding | Log in as `demo@phonebook.local` — contacts are per user |
| `clj` not recognized | Restart PowerShell so the ClojureTools module loads (or `Import-Module ClojureTools`) |
| Port 3000 / 8080 already in use | Change `PORT` in `.env` / `:dev-http` in `shadow-cljs.edn` |
