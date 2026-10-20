goog.provide('phonebook.ui.api');
phonebook.ui.api.base_url = "";
phonebook.ui.api.token_key = "phonebook.token";
phonebook.ui.api.get_token = (function phonebook$ui$api$get_token(){
return sessionStorage.getItem(phonebook.ui.api.token_key);
});
/**
 * Store (or clear, when nil) the session token.
 */
phonebook.ui.api.set_token_BANG_ = (function phonebook$ui$api$set_token_BANG_(token){
if(cljs.core.truth_(token)){
sessionStorage.setItem(phonebook.ui.api.token_key,token);
} else {
sessionStorage.removeItem(phonebook.ui.api.token_key);
}

return token;
});
if((typeof phonebook !== 'undefined') && (typeof phonebook.ui !== 'undefined') && (typeof phonebook.ui.api !== 'undefined') && (typeof phonebook.ui.api.unauthorized_handler !== 'undefined')){
} else {
phonebook.ui.api.unauthorized_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Called with the failing payload whenever the API answers 401, so the
 *   UI can drop the user back to the login screen.
 */
phonebook.ui.api.set_unauthorized_handler_BANG_ = (function phonebook$ui$api$set_unauthorized_handler_BANG_(f){
return cljs.core.reset_BANG_(phonebook.ui.api.unauthorized_handler,f);
});
/**
 * 204 responses have no body - resolve nil instead of calling .json.
 */
phonebook.ui.api.parse_body = (function phonebook$ui$api$parse_body(res){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((204),res.status)){
return (new Promise((function (resolve,_reject){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));
})));
} else {
return res.json();
}
});
/**
 * Perform a fetch request. `on-success` receives the parsed payload
 *   (Clojure data), `on-error` receives [payload status] where status 0
 *   means a network failure. 401 goes to the global handler unless
 *   :ignore-401? is set; :token overrides the stored session token.
 */
phonebook.ui.api.request_BANG_ = (function phonebook$ui$api$request_BANG_(p__13123){
var map__13124 = p__13123;
var map__13124__$1 = cljs.core.__destructure_map(map__13124);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13124__$1,new cljs.core.Keyword(null,"method","method",55703592));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13124__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13124__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13124__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13124__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var ignore_401_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13124__$1,new cljs.core.Keyword(null,"ignore-401?","ignore-401?",-928632255));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13124__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var token__$1 = (function (){var or__5162__auto__ = token;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return phonebook.ui.api.get_token();
}
})();
var headers = (function (){var G__13125 = new cljs.core.PersistentArrayMap(null, 2, ["Content-Type","application/json","Accept","application/json"], null);
if(cljs.core.truth_(token__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13125,"Authorization",(""+"Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token__$1)));
} else {
return G__13125;
}
})();
var opts = cljs.core.clj__GT_js((function (){var G__13126 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),cljs.core.name(method),new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null);
if(cljs.core.truth_(body)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13126,new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(body)));
} else {
return G__13126;
}
})());
return fetch((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(phonebook.ui.api.base_url)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)),opts).then((function (res){
return phonebook.ui.api.parse_body(res).then((function (data){
var payload = (((!((data == null))))?cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)):null);
if(cljs.core.truth_(res.ok)){
if(cljs.core.truth_(on_success)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(payload) : on_success.call(null,payload));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),res.status)){
if(cljs.core.truth_(ignore_401_QMARK_)){
if(cljs.core.truth_(on_error)){
var G__13127 = (function (){var or__5162__auto__ = payload;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__13128 = (401);
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(G__13127,G__13128) : on_error.call(null,G__13127,G__13128));
} else {
return null;
}
} else {
var temp__5823__auto__ = cljs.core.deref(phonebook.ui.api.unauthorized_handler);
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
var G__13129 = (function (){var or__5162__auto__ = payload;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__13129) : handler.call(null,G__13129));
} else {
return null;
}
}
} else {
if(cljs.core.truth_(on_error)){
var G__13130 = (function (){var or__5162__auto__ = payload;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__13131 = res.status;
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(G__13130,G__13131) : on_error.call(null,G__13130,G__13131));
} else {
return null;
}

}
}
}));
})).catch((function (err){
if(cljs.core.truth_(on_error)){
var G__13132 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),(""+"Network error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err))], null);
var G__13133 = (0);
return (on_error.cljs$core$IFn$_invoke$arity$2 ? on_error.cljs$core$IFn$_invoke$arity$2(G__13132,G__13133) : on_error.call(null,G__13132,G__13133));
} else {
return null;
}
}));
});
phonebook.ui.api.query_string = (function phonebook$ui$api$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13134){
var vec__13135 = p__13134;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13135,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__13138){
var vec__13139 = p__13138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(1),null);
return (((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))));
}),params)));
});
/**
 * POST /api/auth/login -> {:token .. :user {..}}. A 401 here means bad
 *   credentials (a form error), not an expired session - never route it to
 *   the global unauthorized handler.
 */
phonebook.ui.api.login_BANG_ = (function phonebook$ui$api$login_BANG_(credentials,on_success,on_error){
return phonebook.ui.api.request_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"path","path",-188191168),"/api/auth/login",new cljs.core.Keyword(null,"body","body",-2049205669),credentials,new cljs.core.Keyword(null,"ignore-401?","ignore-401?",-928632255),true,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
});
/**
 * POST /api/auth/register -> {:token .. :user {..}}
 */
phonebook.ui.api.register_BANG_ = (function phonebook$ui$api$register_BANG_(payload,on_success,on_error){
return phonebook.ui.api.request_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"path","path",-188191168),"/api/auth/register",new cljs.core.Keyword(null,"body","body",-2049205669),payload,new cljs.core.Keyword(null,"ignore-401?","ignore-401?",-928632255),true,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
});
/**
 * POST /api/auth/logout with an explicit token -> 204 (best effort; a
 *   dead session still resolves so the UI can finish signing out).
 */
phonebook.ui.api.logout_BANG_ = (function phonebook$ui$api$logout_BANG_(token,on_done){
return phonebook.ui.api.request_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"path","path",-188191168),"/api/auth/logout",new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"ignore-401?","ignore-401?",-928632255),true,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (_){
if(cljs.core.truth_(on_done)){
return (on_done.cljs$core$IFn$_invoke$arity$0 ? on_done.cljs$core$IFn$_invoke$arity$0() : on_done.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (_,___$1){
if(cljs.core.truth_(on_done)){
return (on_done.cljs$core$IFn$_invoke$arity$0 ? on_done.cljs$core$IFn$_invoke$arity$0() : on_done.call(null));
} else {
return null;
}
})], null));
});
/**
 * GET /api/auth/me -> current user.
 */
phonebook.ui.api.me_BANG_ = (function phonebook$ui$api$me_BANG_(on_success,on_error){
return phonebook.ui.api.request_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"path","path",-188191168),"/api/auth/me",new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
});
/**
 * GET /api/contacts with q / page / pageSize / sort params.
 */
phonebook.ui.api.fetch_contacts = (function phonebook$ui$api$fetch_contacts(p__13142,on_success,on_error){
var map__13143 = p__13142;
var map__13143__$1 = cljs.core.__destructure_map(map__13143);
var params = map__13143__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13143__$1,new cljs.core.Keyword(null,"q","q",689001697));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13143__$1,new cljs.core.Keyword(null,"page","page",849072397));
var pageSize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13143__$1,new cljs.core.Keyword(null,"pageSize","pageSize",732080883));
var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13143__$1,new cljs.core.Keyword(null,"sort","sort",953465918));
var qs = phonebook.ui.api.query_string(cljs.core.select_keys(params,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"sort","sort",953465918)], null)));
return phonebook.ui.api.request_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"path","path",-188191168),((clojure.string.blank_QMARK_(qs))?"/api/contacts":(""+"/api/contacts?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(qs))),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
});
/**
 * GET /api/contacts/:id
 */
phonebook.ui.api.get_contact = (function phonebook$ui$api$get_contact(id,on_success,on_error){
return phonebook.ui.api.request_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"path","path",-188191168),(""+"/api/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
});
/**
 * POST /api/contacts
 */
phonebook.ui.api.create_contact = (function phonebook$ui$api$create_contact(payload,on_success,on_error){
return phonebook.ui.api.request_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"path","path",-188191168),"/api/contacts",new cljs.core.Keyword(null,"body","body",-2049205669),payload,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
});
/**
 * PUT /api/contacts/:id
 */
phonebook.ui.api.update_contact = (function phonebook$ui$api$update_contact(id,payload,on_success,on_error){
return phonebook.ui.api.request_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"path","path",-188191168),(""+"/api/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"body","body",-2049205669),payload,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
});
/**
 * DELETE /api/contacts/:id
 */
phonebook.ui.api.delete_contact = (function phonebook$ui$api$delete_contact(id,on_success,on_error){
return phonebook.ui.api.request_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"path","path",-188191168),(""+"/api/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
});

//# sourceMappingURL=phonebook.ui.api.js.map
