goog.provide('phonebook.ui.core');
phonebook.ui.core.banners = (function phonebook$ui$core$banners(){
var map__12069 = cljs.core.deref(phonebook.ui.state.app);
var map__12069__$1 = cljs.core.__destructure_map(map__12069);
var notice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12069__$1,new cljs.core.Keyword(null,"notice","notice",-1121239112));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12069__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_((function (){var or__5162__auto__ = notice;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return error;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banners","div.banners",-1934153834),(cljs.core.truth_(notice)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner.success","div.banner.success",-716848067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"status"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.check], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),notice], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.dismiss","button.dismiss",-1154008466),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Dismiss",new cljs.core.Keyword(null,"on-click","on-click",1632826543),phonebook.ui.state.dismiss_notices_BANG_], null),"\u00D7"], null)], null):null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner.error","div.banner.error",-1350792349),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.alert], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),error], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.dismiss","button.dismiss",-1154008466),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Dismiss",new cljs.core.Keyword(null,"on-click","on-click",1632826543),phonebook.ui.state.dismiss_notices_BANG_], null),"\u00D7"], null)], null):null)], null);
} else {
return null;
}
});
phonebook.ui.core.navbar = (function phonebook$ui$core$navbar(){
var map__12071 = cljs.core.deref(phonebook.ui.state.app);
var map__12071__$1 = cljs.core.__destructure_map(map__12071);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12071__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12071__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(auth);
var contacts_active_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"contacts","contacts",333503174),null,new cljs.core.Keyword(null,"new","new",-2085437848),null,new cljs.core.Keyword(null,"edit","edit",-1641834166),null,new cljs.core.Keyword(null,"detail","detail",-1545345025),null], null), null),view);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.navbar","header.navbar",1036002185),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-inner","div.nav-inner",-1355768860),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.brand","a.brand",1338100077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/dashboard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.brand-mark","span.brand-mark",1553398583),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.book], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.brand-name","span.brand-name",-1078376506),"Phonebook"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.nav-links","nav.nav-links",2094244312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Main"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/dashboard",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)))?"active":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.grid], null)," Dashboard"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts",new cljs.core.Keyword(null,"class","class",-2030961996),((contacts_active_QMARK_)?"active":null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.users], null)," Contacts"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-user","div.nav-user",-2120118290),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.nav-email","span.nav-email",-1464136046),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()], null),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-ghost","button.btn.btn-ghost",-181767023),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),phonebook.ui.state.logout_BANG_,new cljs.core.Keyword(null,"title","title",636505583),"Sign out"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.logout], null)," Logout"], null)], null)], null)], null);
});
phonebook.ui.core.page = (function phonebook$ui$core$page(){
var map__12072 = cljs.core.deref(phonebook.ui.state.app);
var map__12072__$1 = cljs.core.__destructure_map(map__12072);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
if(cljs.core.truth_(new cljs.core.Keyword(null,"checking?","checking?",2063225887).cljs$core$IFn$_invoke$arity$1(auth))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.splash","div.splash",-689554748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spinner","span.spinner",-83143153)], null)," Checking your session\u2026"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),view)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.login.view], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register","register",1968522516),view)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.register.view], null);
} else {
var G__12073 = view;
var G__12073__$1 = (((G__12073 instanceof cljs.core.Keyword))?G__12073.fqn:null);
switch (G__12073__$1) {
case "dashboard":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.dashboard.view], null);

break;
case "contacts":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.list.view], null);

break;
case "new":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.form.create_view], null);

break;
case "edit":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.form.edit_view], null);

break;
case "detail":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.detail.view], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.dashboard.view], null);

}

}
}
}
});
phonebook.ui.core.app_shell = (function phonebook$ui$core$app_shell(){
var map__12074 = cljs.core.deref(phonebook.ui.state.app);
var map__12074__$1 = cljs.core.__destructure_map(map__12074);
var auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12074__$1,new cljs.core.Keyword(null,"auth","auth",1389754926));
var authed_QMARK_ = (!((new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(auth) == null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((authed_QMARK_)?null:"auth-mode")], null),((authed_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.core.navbar], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.core.banners], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),phonebook.ui.core.page()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),"Phonebook \u2014 Clojure (Ring \u00B7 Reitit \u00B7 next.jdbc \u00B7 MySQL) + ClojureScript (Reagent \u00B7 shadow-cljs)"], null)], null);
});
if((typeof phonebook !== 'undefined') && (typeof phonebook.ui !== 'undefined') && (typeof phonebook.ui.core !== 'undefined') && (typeof phonebook.ui.core.root !== 'undefined')){
} else {
phonebook.ui.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Render (or re-render) the app. Called on load and on hot reload.
 */
phonebook.ui.core.mount_BANG_ = (function phonebook$ui$core$mount_BANG_(){
var temp__5823__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
if(cljs.core.truth_(cljs.core.deref(phonebook.ui.core.root))){
} else {
cljs.core.reset_BANG_(phonebook.ui.core.root,reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(node));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(phonebook.ui.core.root),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.core.app_shell], null)));
} else {
return null;
}
});
/**
 * Entry point: bind routing/session handling, then render.
 */
phonebook.ui.core.init = (function phonebook$ui$core$init(){
phonebook.ui.state.init_BANG_();

return phonebook.ui.core.mount_BANG_();
});

//# sourceMappingURL=phonebook.ui.core.js.map
