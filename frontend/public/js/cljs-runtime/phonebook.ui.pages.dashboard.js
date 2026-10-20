goog.provide('phonebook.ui.pages.dashboard');
phonebook.ui.pages.dashboard.stat_card = (function phonebook$ui$pages$dashboard$stat_card(p__11999){
var map__12000 = p__11999;
var map__12000__$1 = cljs.core.__destructure_map(map__12000);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000__$1,new cljs.core.Keyword(null,"value","value",305978217));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12000__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(cljs.core.truth_(href)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.card.stat-card","a.card.stat-card",1014529614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-icon","div.stat-icon",971440445),icon], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-body","div.stat-body",-622598904),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-value","div.stat-value",1336227416),value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-label","div.stat-label",-720687688),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-hint","div.stat-hint",661055138),hint], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.stat-card","div.card.stat-card",223140045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-icon","div.stat-icon",971440445),icon], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-body","div.stat-body",-622598904),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-value","div.stat-value",1336227416),value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-label","div.stat-label",-720687688),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-hint","div.stat-hint",661055138),hint], null)], null)], null);
}
});
phonebook.ui.pages.dashboard.initials = (function phonebook$ui$pages$dashboard$initials(name){
var parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim((function (){var or__5162__auto__ = name;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()),/\s/));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12016 = cljs.core.first(parts);
var G__12016__$1 = (((G__12016 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$3(G__12016,(0),(1)));
if((G__12016__$1 == null)){
return null;
} else {
return clojure.string.upper_case(G__12016__$1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12018 = cljs.core.second(parts);
var G__12018__$1 = (((G__12018 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$3(G__12018,(0),(1)));
if((G__12018__$1 == null)){
return null;
} else {
return clojure.string.upper_case(G__12018__$1);
}
})()));
});
phonebook.ui.pages.dashboard.recent_item = (function phonebook$ui$pages$dashboard$recent_item(p__12019){
var map__12022 = p__12019;
var map__12022__$1 = cljs.core.__destructure_map(map__12022);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12022__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var phoneNumber = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12022__$1,new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12022__$1,new cljs.core.Keyword(null,"email","email",1415816706));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.recent-item","li.recent-item",254351655),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.avatar.avatar-sm","div.avatar.avatar-sm",-1883639718),phonebook.ui.pages.dashboard.initials(name)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.recent-main","div.recent-main",-1587008512),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.recent-name","a.recent-name",588710797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null),(function (){var or__5162__auto__ = name;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "Unnamed";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.recent-detail","span.recent-detail",-827693500),(function (){var or__5162__auto__ = email;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = phoneNumber;
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return "\u2014";
}
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-ghost.btn-sm","a.btn.btn-ghost.btn-sm",380308483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null),"View"], null)], null);
});
phonebook.ui.pages.dashboard.view = (function phonebook$ui$pages$dashboard$view(){
var map__12023 = cljs.core.deref(phonebook.ui.state.app);
var map__12023__$1 = cljs.core.__destructure_map(map__12023);
var recent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,new cljs.core.Keyword(null,"recent","recent",449517715));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(phonebook.ui.state.app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"user","user",1532431356)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Dashboard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.sub","p.sub",675587618),(""+"Signed in as "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-actions","div.header-actions",1368680450),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-outline","a.btn.btn-outline",-901124145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.users], null)," Browse contacts"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts/new"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.plus], null)," Add contact"], null)], null)], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.loading-state","div.card.loading-state",872151395),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spinner","span.spinner",-83143153)], null)," Loading\u2026"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-grid","div.stat-grid",-701729115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.dashboard.stat_card,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Total contacts",new cljs.core.Keyword(null,"value","value",305978217),total,new cljs.core.Keyword(null,"hint","hint",439639918),"Stored in your phonebook",new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.users], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.dashboard.stat_card,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Recently added",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.count(recent),new cljs.core.Keyword(null,"hint","hint",439639918),"Newest entries",new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.check], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.dashboard.stat_card,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Quick search",new cljs.core.Keyword(null,"value","value",305978217),"Find",new cljs.core.Keyword(null,"hint","hint",439639918),"Search name, phone or email",new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.search], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Recently added"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link","a.link",-619461443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts"], null),"View all \u2192"], null)], null),((cljs.core.seq(recent))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.recent-list","ul.recent-list",771733000),(function (){var iter__5649__auto__ = (function phonebook$ui$pages$dashboard$view_$_iter__12035(s__12036){
return (new cljs.core.LazySeq(null,(function (){
var s__12036__$1 = s__12036;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__12036__$1);
if(temp__5823__auto__){
var s__12036__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12036__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__12036__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__12038 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__12037 = (0);
while(true){
if((i__12037 < size__5648__auto__)){
var c = cljs.core._nth(c__5647__auto__,i__12037);
cljs.core.chunk_append(b__12038,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.dashboard.recent_item,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null)));

var G__12055 = (i__12037 + (1));
i__12037 = G__12055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12038),phonebook$ui$pages$dashboard$view_$_iter__12035(cljs.core.chunk_rest(s__12036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12038),null);
}
} else {
var c = cljs.core.first(s__12036__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.dashboard.recent_item,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null)),phonebook$ui$pages$dashboard$view_$_iter__12035(cljs.core.rest(s__12036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(recent);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-state.compact","div.empty-state.compact",-1104712099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"No contacts yet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Add your first contact to get started."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts/new"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.plus], null)," Add contact"], null)], null))], null)], null))], null);
});

//# sourceMappingURL=phonebook.ui.pages.dashboard.js.map
