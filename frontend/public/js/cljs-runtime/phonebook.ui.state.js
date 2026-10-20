goog.provide('phonebook.ui.state');
phonebook.ui.state.default_form = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"address","address",559499426),""], null);
phonebook.ui.state.default_auth_form = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"confirm","confirm",-2004000608),""], null);
phonebook.ui.state.page_size = (20);
if((typeof phonebook !== 'undefined') && (typeof phonebook.ui !== 'undefined') && (typeof phonebook.ui.state !== 'undefined') && (typeof phonebook.ui.state.app !== 'undefined')){
} else {
phonebook.ui.state.app = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"searching?","searching?",1889514722),new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"page-size","page-size",223836073),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"saving?","saving?",1358427024),new cljs.core.Keyword(null,"auth-errors","auth-errors",-779257839),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"recent","recent",449517715),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"route-id","route-id",-1804166443),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"notice","notice",-1121239112),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form-errors","form-errors",-255814982),new cljs.core.Keyword(null,"auth-form","auth-form",-1685749218),new cljs.core.Keyword(null,"view","view",1247994814)],[false,cljs.core.PersistentVector.EMPTY,false,phonebook.ui.state.page_size,(1),"",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"checking?","checking?",2063225887),true], null),false,cljs.core.PersistentArrayMap.EMPTY,(0),cljs.core.PersistentVector.EMPTY,null,null,null,null,phonebook.ui.state.default_form,cljs.core.PersistentArrayMap.EMPTY,phonebook.ui.state.default_auth_form,new cljs.core.Keyword(null,"login","login",55217519)]));
}
/**
 * Change the location hash (triggers handle-route! via hashchange).
 */
phonebook.ui.state.navigate_BANG_ = (function phonebook$ui$state$navigate_BANG_(hash){
var target = ((clojure.string.starts_with_QMARK_(hash,"#"))?hash:(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,(function (){var or__5162__auto__ = location.hash;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})())){
return null;
} else {
return (location.hash = target);
}
});
phonebook.ui.state.dismiss_notices_BANG_ = (function phonebook$ui$state$dismiss_notices_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"notice","notice",-1121239112),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
});
phonebook.ui.state.decode = (function phonebook$ui$state$decode(s){
try{return decodeURIComponent(s);
}catch (e13144){if((e13144 instanceof Error)){
var _ = e13144;
return s;
} else {
throw e13144;

}
}});
phonebook.ui.state.parse_query = (function phonebook$ui$state$parse_query(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,pair){
var vec__13145 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(pair,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13145,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),phonebook.ui.state.decode((function (){var or__5162__auto__ = v;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__5162__auto__ = s;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),/&/)));
});
/**
 * #/contacts?q=x&page=2 -> {:segments ["contacts"] :query {:q "x" :page "2"}}
 */
phonebook.ui.state.parse_hash = (function phonebook$ui$state$parse_hash(hash){
var h = ((clojure.string.starts_with_QMARK_((function (){var or__5162__auto__ = hash;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),"#"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash,(1)):(function (){var or__5162__auto__ = hash;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var vec__13148 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(h,/\?/,(2));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"segments","segments",1937535949),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//))),new cljs.core.Keyword(null,"query","query",-1288509510),phonebook.ui.state.parse_query(query)], null);
});
phonebook.ui.state.safe_page = (function phonebook$ui$state$safe_page(s){
var p = parseInt((function (){var or__5162__auto__ = s;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "1";
}
})(),(10));
if(cljs.core.truth_(isNaN(p))){
return (1);
} else {
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),p);
}
});
/**
 * Build the canonical list URL for a search/page combination.
 */
phonebook.ui.state.contacts_hash = (function phonebook$ui$state$contacts_hash(q,page){
var params = (function (){var G__13151 = cljs.core.PersistentVector.EMPTY;
var G__13151__$1 = (((!(clojure.string.blank_QMARK_(q))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13151,(""+"q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(q)))):G__13151);
if((page > (1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13151__$1,(""+"page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)));
} else {
return G__13151__$1;
}
})();
if(cljs.core.seq(params)){
return (""+"#/contacts?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",params)));
} else {
return "#/contacts";
}
});
/**
 * Fetch the current search/page from the API.
 */
phonebook.ui.state.load_contacts_BANG_ = (function phonebook$ui$state$load_contacts_BANG_(){
var map__13152 = cljs.core.deref(phonebook.ui.state.app);
var map__13152__$1 = cljs.core.__destructure_map(map__13152);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13152__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13152__$1,new cljs.core.Keyword(null,"page","page",849072397));
var page_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13152__$1,new cljs.core.Keyword(null,"page-size","page-size",223836073));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"searching?","searching?",1889514722),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

return phonebook.ui.api.fetch_contacts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"q","q",689001697),((clojure.string.blank_QMARK_(search))?null:search),new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"pageSize","pageSize",732080883),page_size], null),(function (p__13153){
var map__13154 = p__13153;
var map__13154__$1 = cljs.core.__destructure_map(map__13154);
var contacts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13154__$1,new cljs.core.Keyword(null,"contacts","contacts",333503174));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13154__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13154__$1,new cljs.core.Keyword(null,"page","page",849072397));
var pageSize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13154__$1,new cljs.core.Keyword(null,"pageSize","pageSize",732080883));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"contacts","contacts",333503174),cljs.core.vec(contacts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"total","total",1916810418),(function (){var or__5162__auto__ = total;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"page","page",849072397),(function (){var or__5162__auto__ = page__$1;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})(),new cljs.core.Keyword(null,"page-size","page-size",223836073),(function (){var or__5162__auto__ = pageSize;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return page_size;
}
})(),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"searching?","searching?",1889514722),false], 0));
}),(function (payload,status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"contacts","contacts",333503174),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"searching?","searching?",1889514722),false,new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+"Failed to load contacts (HTTP "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+")");
}
})()], 0));
}));
});
/**
 * Dashboard: five newest contacts plus the total count.
 */
phonebook.ui.state.load_recent_BANG_ = (function phonebook$ui$state$load_recent_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

return phonebook.ui.api.fetch_contacts(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"q","q",689001697),null,new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(5),new cljs.core.Keyword(null,"sort","sort",953465918),"recent"], null),(function (p__13155){
var map__13156 = p__13155;
var map__13156__$1 = cljs.core.__destructure_map(map__13156);
var contacts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,new cljs.core.Keyword(null,"contacts","contacts",333503174));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"recent","recent",449517715),cljs.core.vec(contacts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"total","total",1916810418),(function (){var or__5162__auto__ = total;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}),(function (payload,status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+"Failed to load dashboard (HTTP "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+")");
}
})()], 0));
}));
});
/**
 * Fetch one contact for the detail view.
 */
phonebook.ui.state.load_contact_BANG_ = (function phonebook$ui$state$load_contact_BANG_(id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], 0));

return phonebook.ui.api.get_contact(id,(function (contact){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),contact], 0));
}),(function (payload,status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),status)){
return "Contact not found";
} else {
return "Failed to load the contact";
}
}
})()], 0));
}));
});
/**
 * Fetch one contact and prefill the edit form.
 */
phonebook.ui.state.load_contact_into_form_BANG_ = (function phonebook$ui$state$load_contact_into_form_BANG_(id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"form-errors","form-errors",-255814982),cljs.core.PersistentArrayMap.EMPTY], 0));

return phonebook.ui.api.get_contact(id,(function (c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),c,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"email","email",1415816706),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"address","address",559499426),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()], null)], 0));
}),(function (payload,status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),status)){
return "Contact not found";
} else {
return "Failed to load the contact";
}
}
})()], 0));
}));
});
if((typeof phonebook !== 'undefined') && (typeof phonebook.ui !== 'undefined') && (typeof phonebook.ui.state !== 'undefined') && (typeof phonebook.ui.state.search_timer !== 'undefined')){
} else {
phonebook.ui.state.search_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
phonebook.ui.state.cancel_search_timer_BANG_ = (function phonebook$ui$state$cancel_search_timer_BANG_(){
var temp__5823__auto__ = cljs.core.deref(phonebook.ui.state.search_timer);
if(cljs.core.truth_(temp__5823__auto__)){
var t = temp__5823__auto__;
clearTimeout(t);

return cljs.core.reset_BANG_(phonebook.ui.state.search_timer,null);
} else {
return null;
}
});
/**
 * Update the search box (Google style: debounced, resets to page 1).
 *   After 300ms of quiet the URL is updated, which triggers the request -
 *   the search always runs against the full database, not just the loaded
 *   page.
 */
phonebook.ui.state.search_BANG_ = (function phonebook$ui$state$search_BANG_(q){
phonebook.ui.state.cancel_search_timer_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"search","search",1564939822),q);

return cljs.core.reset_BANG_(phonebook.ui.state.search_timer,setTimeout((function (){
cljs.core.reset_BANG_(phonebook.ui.state.search_timer,null);

var target = phonebook.ui.state.contacts_hash(q,(1));
var current = (function (){var or__5162__auto__ = location.hash;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),(1));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,current)){
return phonebook.ui.state.load_contacts_BANG_();
} else {
return (location.hash = target);
}
}),(300)));
});
phonebook.ui.state.clear_search_BANG_ = (function phonebook$ui$state$clear_search_BANG_(){
return phonebook.ui.state.search_BANG_("");
});
/**
 * Go to a page number (clamped to the valid range), keeping the query.
 */
phonebook.ui.state.goto_page_BANG_ = (function phonebook$ui$state$goto_page_BANG_(page){
phonebook.ui.state.cancel_search_timer_BANG_();

var map__13157 = cljs.core.deref(phonebook.ui.state.app);
var map__13157__$1 = cljs.core.__destructure_map(map__13157);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var page_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,new cljs.core.Keyword(null,"page-size","page-size",223836073));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var total_pages = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),Math.ceil(((function (){var or__5162__auto__ = total;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})() / (function (){var or__5162__auto__ = page_size;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (20);
}
})())));
var target = cljs.core.min.cljs$core$IFn$_invoke$arity$2(total_pages,cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),page));
var url = phonebook.ui.state.contacts_hash(search,target);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"searching?","searching?",1889514722),true], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,(function (){var or__5162__auto__ = location.hash;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})())){
return phonebook.ui.state.load_contacts_BANG_();
} else {
return (location.hash = url);
}
});
phonebook.ui.state.handle_contacts_route = (function phonebook$ui$state$handle_contacts_route(segments,query){
var seg2 = cljs.core.second(segments);
var seg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(segments,(2),null);
if((seg2 == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"contacts","contacts",333503174),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"search","search",1564939822),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"page","page",849072397),phonebook.ui.state.safe_page(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(query)),new cljs.core.Keyword(null,"current","current",-1088038603),null,new cljs.core.Keyword(null,"form","form",-1624062471),phonebook.ui.state.default_form,new cljs.core.Keyword(null,"form-errors","form-errors",-255814982),cljs.core.PersistentArrayMap.EMPTY], 0));

return phonebook.ui.state.load_contacts_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("new",seg2)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"new","new",-2085437848),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),null,new cljs.core.Keyword(null,"route-id","route-id",-1804166443),null,new cljs.core.Keyword(null,"form","form",-1624062471),phonebook.ui.state.default_form,new cljs.core.Keyword(null,"form-errors","form-errors",-255814982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
} else {
var id = parseInt(seg2,(10));
if(cljs.core.truth_(isNaN(id))){
return phonebook.ui.state.navigate_BANG_("#/contacts");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("edit",seg3)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"edit","edit",-1641834166),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-id","route-id",-1804166443),id,new cljs.core.Keyword(null,"current","current",-1088038603),null], 0));

return phonebook.ui.state.load_contact_into_form_BANG_(id);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"detail","detail",-1545345025),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-id","route-id",-1804166443),id,new cljs.core.Keyword(null,"current","current",-1088038603),null], 0));

return phonebook.ui.state.load_contact_BANG_(id);
}
}

}
}
});
/**
 * Parse the location hash and switch to the matching view, loading its
 *   data. Also guards: signed-out users only ever see login/register.
 */
phonebook.ui.state.handle_route_BANG_ = (function phonebook$ui$state$handle_route_BANG_(){
var map__13158 = phonebook.ui.state.parse_hash(location.hash);
var map__13158__$1 = cljs.core.__destructure_map(map__13158);
var segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13158__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var authed_QMARK_ = (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(phonebook.ui.state.app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"user","user",1532431356)], null)) == null)));
if((!(authed_QMARK_))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("register",cljs.core.first(segments)))?new cljs.core.Keyword(null,"register","register",1968522516):new cljs.core.Keyword(null,"login","login",55217519)));
} else {
var G__13159 = cljs.core.first(segments);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13159)){
return phonebook.ui.state.navigate_BANG_("#/dashboard");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dashboard",G__13159)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),null], 0));

return phonebook.ui.state.load_recent_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("contacts",G__13159)){
return phonebook.ui.state.handle_contacts_route(segments,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(phonebook.ui.state.parse_hash(location.hash)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("login",G__13159)){
return phonebook.ui.state.navigate_BANG_("#/dashboard");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("register",G__13159)){
return phonebook.ui.state.navigate_BANG_("#/dashboard");
} else {
return phonebook.ui.state.navigate_BANG_("#/dashboard");

}
}
}
}
}

}
});
phonebook.ui.state.set_auth_form_BANG_ = (function phonebook$ui$state$set_auth_form_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phonebook.ui.state.app,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth-form","auth-form",-1685749218),k], null),v);
});
phonebook.ui.state.login_BANG_ = (function phonebook$ui$state$login_BANG_(){
var form = new cljs.core.Keyword(null,"auth-form","auth-form",-1685749218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app));
var payload = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),clojure.string.trim(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(form)),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(form)], null);
var errors = phonebook.ui.validation.validate_login(payload);
if(cljs.core.seq(errors)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth-errors","auth-errors",-779257839),errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth-errors","auth-errors",-779257839),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"auth","auth",1389754926),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"auth","auth",1389754926).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app)),new cljs.core.Keyword(null,"busy?","busy?",1047519572),true)], 0));

return phonebook.ui.api.login_BANG_(payload,(function (p__13160){
var map__13161 = p__13160;
var map__13161__$1 = cljs.core.__destructure_map(map__13161);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13161__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13161__$1,new cljs.core.Keyword(null,"user","user",1532431356));
phonebook.ui.api.set_token_BANG_(token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"checking?","checking?",2063225887),false], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auth-form","auth-form",-1685749218),phonebook.ui.state.default_auth_form,new cljs.core.Keyword(null,"auth-errors","auth-errors",-779257839),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"notice","notice",-1121239112),(""+"Welcome back, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user))+"!")], 0));

return phonebook.ui.state.navigate_BANG_("#/dashboard");
}),(function (payload__$1,status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth","auth",1389754926),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"auth","auth",1389754926).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app)),new cljs.core.Keyword(null,"busy?","busy?",1047519572),false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),status))?(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload__$1);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Invalid email or password";
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status))?"Cannot reach the server - is the API running?":(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload__$1);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Sign in failed";
}
})()
))], 0));
}));
}
});
phonebook.ui.state.register_BANG_ = (function phonebook$ui$state$register_BANG_(){
var form = new cljs.core.Keyword(null,"auth-form","auth-form",-1685749218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app));
var trimmed = cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.Keyword(null,"email","email",1415816706),clojure.string.trim);
var errors = phonebook.ui.validation.validate_register(trimmed);
if(cljs.core.seq(errors)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth-errors","auth-errors",-779257839),errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth-errors","auth-errors",-779257839),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"auth","auth",1389754926),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"auth","auth",1389754926).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app)),new cljs.core.Keyword(null,"busy?","busy?",1047519572),true)], 0));

return phonebook.ui.api.register_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(trimmed),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(trimmed)], null),(function (p__13162){
var map__13163 = p__13162;
var map__13163__$1 = cljs.core.__destructure_map(map__13163);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,new cljs.core.Keyword(null,"user","user",1532431356));
phonebook.ui.api.set_token_BANG_(token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"checking?","checking?",2063225887),false], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auth-form","auth-form",-1685749218),phonebook.ui.state.default_auth_form,new cljs.core.Keyword(null,"auth-errors","auth-errors",-779257839),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"notice","notice",-1121239112),"Account created - welcome!"], 0));

return phonebook.ui.state.navigate_BANG_("#/dashboard");
}),(function (payload,status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth","auth",1389754926),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"auth","auth",1389754926).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app)),new cljs.core.Keyword(null,"busy?","busy?",1047519572),false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((409),status))?(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "An account with this email already exists";
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status))?"Cannot reach the server - is the API running?":(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Registration failed";
}
})()
))], 0));
}));
}
});
/**
 * Revoke the server session, clear local state and go to the login page.
 */
phonebook.ui.state.logout_BANG_ = (function phonebook$ui$state$logout_BANG_(){
var token = phonebook.ui.api.get_token();
phonebook.ui.api.set_token_BANG_(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"checking?","checking?",2063225887),false], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auth-form","auth-form",-1685749218),phonebook.ui.state.default_auth_form,new cljs.core.Keyword(null,"auth-errors","auth-errors",-779257839),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"contacts","contacts",333503174),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"recent","recent",449517715),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"current","current",-1088038603),null,new cljs.core.Keyword(null,"route-id","route-id",-1804166443),null,new cljs.core.Keyword(null,"form","form",-1624062471),phonebook.ui.state.default_form,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"notice","notice",-1121239112),"You have been signed out."], 0));

phonebook.ui.state.navigate_BANG_("#/login");

if(cljs.core.truth_(token)){
return phonebook.ui.api.logout_BANG_(token,(function (){
return null;
}));
} else {
return null;
}
});
/**
 * Global 401 handler wired by core/init!: an expired or revoked token
 *   drops the user back to the login screen.
 */
phonebook.ui.state.on_unauthorized_BANG_ = (function phonebook$ui$state$on_unauthorized_BANG_(_payload){
phonebook.ui.api.set_token_BANG_(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"checking?","checking?",2063225887),false], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"contacts","contacts",333503174),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"recent","recent",449517715),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current","current",-1088038603),null,new cljs.core.Keyword(null,"error","error",-978969032),"Your session has expired - please sign in again."], 0));

return phonebook.ui.state.navigate_BANG_("#/login");
});
/**
 * Validate any stored token against the API, then route.
 */
phonebook.ui.state.check_session_BANG_ = (function phonebook$ui$state$check_session_BANG_(){
if(clojure.string.blank_QMARK_(phonebook.ui.api.get_token())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"checking?","checking?",2063225887),false], null));

return phonebook.ui.state.handle_route_BANG_();
} else {
return phonebook.ui.api.me_BANG_((function (user){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"checking?","checking?",2063225887),false], null));

return phonebook.ui.state.handle_route_BANG_();
}),(function (_payload,status){
phonebook.ui.api.set_token_BANG_(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"checking?","checking?",2063225887),false], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status))?"Cannot reach the server - is the API running?":"Your session has expired - please sign in again.")], 0));

return phonebook.ui.state.handle_route_BANG_();
}));
}
});
if((typeof phonebook !== 'undefined') && (typeof phonebook.ui !== 'undefined') && (typeof phonebook.ui.state !== 'undefined') && (typeof phonebook.ui.state.route_bound_QMARK_ !== 'undefined')){
} else {
phonebook.ui.state.route_bound_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
/**
 * Bind the hash router (once) and validate any stored session.
 */
phonebook.ui.state.init_BANG_ = (function phonebook$ui$state$init_BANG_(){
if(cljs.core.truth_(cljs.core.deref(phonebook.ui.state.route_bound_QMARK_))){
} else {
window.addEventListener("hashchange",phonebook.ui.state.handle_route_BANG_);

cljs.core.reset_BANG_(phonebook.ui.state.route_bound_QMARK_,true);

phonebook.ui.api.set_unauthorized_handler_BANG_(phonebook.ui.state.on_unauthorized_BANG_);
}

return phonebook.ui.state.check_session_BANG_();
});
phonebook.ui.state.set_form_field_BANG_ = (function phonebook$ui$state$set_form_field_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phonebook.ui.state.app,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),k], null),v);
});
phonebook.ui.state.open_contact_BANG_ = (function phonebook$ui$state$open_contact_BANG_(id){
return phonebook.ui.state.navigate_BANG_((""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
phonebook.ui.state.open_create_BANG_ = (function phonebook$ui$state$open_create_BANG_(){
return phonebook.ui.state.navigate_BANG_("#/contacts/new");
});
phonebook.ui.state.start_edit_BANG_ = (function phonebook$ui$state$start_edit_BANG_(id){
return phonebook.ui.state.navigate_BANG_((""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/edit"));
});
phonebook.ui.state.cancel_edit_BANG_ = (function phonebook$ui$state$cancel_edit_BANG_(id){
return phonebook.ui.state.navigate_BANG_((""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
 * Create (view :new) or update (view :edit) the current form.
 */
phonebook.ui.state.save_BANG_ = (function phonebook$ui$state$save_BANG_(){
var map__13164 = cljs.core.deref(phonebook.ui.state.app);
var map__13164__$1 = cljs.core.__destructure_map(map__13164);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13164__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13164__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var route_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13164__$1,new cljs.core.Keyword(null,"route-id","route-id",-1804166443));
var errors = phonebook.ui.validation.validate_contact(form);
if(cljs.core.seq(errors)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"form-errors","form-errors",-255814982),errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"form-errors","form-errors",-255814982),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"saving?","saving?",1358427024),true], 0));

var payload = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908),new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908).cljs$core$IFn$_invoke$arity$1(form),new cljs.core.Keyword(null,"email","email",1415816706),((clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(form)))?null:new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(form)),new cljs.core.Keyword(null,"address","address",559499426),((clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(form)))?null:new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(form))], null);
var on_ok = (function (contact){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"saving?","saving?",1358427024),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),contact,new cljs.core.Keyword(null,"form-errors","form-errors",-255814982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"notice","notice",-1121239112),"Contact saved"], 0));

return phonebook.ui.state.navigate_BANG_((""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(contact))));
});
var on_err = (function (payload__$1,status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"saving?","saving?",1358427024),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form-errors","form-errors",-255814982),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(payload__$1);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"error","error",-978969032),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((409),status))?(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload__$1);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "A contact with this phone number or email already exists";
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),status))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status))?"Cannot reach the server - is the API running?":(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload__$1);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Could not save the contact";
}
})()
)))], 0));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edit","edit",-1641834166),view)){
return phonebook.ui.api.update_contact(route_id,payload,on_ok,on_err);
} else {
return phonebook.ui.api.create_contact(payload,on_ok,on_err);
}
}
});
/**
 * Delete a contact (with confirmation) and return to the list.
 */
phonebook.ui.state.delete_BANG_ = (function phonebook$ui$state$delete_BANG_(id){
if(cljs.core.truth_(confirm("Delete this contact? This cannot be undone."))){
return phonebook.ui.api.delete_contact(id,(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"notice","notice",-1121239112),"Contact deleted",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),null], 0));

return phonebook.ui.state.navigate_BANG_("#/contacts");
}),(function (payload,status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phonebook.ui.state.app,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),status))?"This contact no longer exists":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status))?"Cannot reach the server - is the API running?":(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Could not delete the contact";
}
})()
)));
}));
} else {
return null;
}
});
/**
 * Re-run the load appropriate for the current view.
 */
phonebook.ui.state.retry_load_BANG_ = (function phonebook$ui$state$retry_load_BANG_(){
var G__13165 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app));
var G__13165__$1 = (((G__13165 instanceof cljs.core.Keyword))?G__13165.fqn:null);
switch (G__13165__$1) {
case "dashboard":
return phonebook.ui.state.load_recent_BANG_();

break;
case "contacts":
return phonebook.ui.state.load_contacts_BANG_();

break;
case "detail":
var temp__5823__auto__ = new cljs.core.Keyword(null,"route-id","route-id",-1804166443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app));
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return phonebook.ui.state.load_contact_BANG_(id);
} else {
return null;
}

break;
case "edit":
var temp__5823__auto__ = new cljs.core.Keyword(null,"route-id","route-id",-1804166443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app));
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return phonebook.ui.state.load_contact_into_form_BANG_(id);
} else {
return null;
}

break;
default:
return null;

}
});

//# sourceMappingURL=phonebook.ui.state.js.map
