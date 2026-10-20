goog.provide('phonebook.ui.pages.detail');
phonebook.ui.pages.detail.initials = (function phonebook$ui$pages$detail$initials(name){
var parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim((function (){var or__5162__auto__ = name;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()),/\s/));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12004 = cljs.core.first(parts);
var G__12004__$1 = (((G__12004 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$3(G__12004,(0),(1)));
if((G__12004__$1 == null)){
return null;
} else {
return clojure.string.upper_case(G__12004__$1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12005 = cljs.core.second(parts);
var G__12005__$1 = (((G__12005 == null))?null:cljs.core.subs.cljs$core$IFn$_invoke$arity$3(G__12005,(0),(1)));
if((G__12005__$1 == null)){
return null;
} else {
return clojure.string.upper_case(G__12005__$1);
}
})()));
});
phonebook.ui.pages.detail.tel_href = (function phonebook$ui$pages$detail$tel_href(phone){
return (""+"tel:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace((function (){var or__5162__auto__ = phone;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),/[\s()\-.]/,"")));
});
phonebook.ui.pages.detail.field_row = (function phonebook$ui$pages$detail$field_row(icon_el,label,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.detail-row","div.detail-row",-1732054068),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.detail-label","div.detail-label",-1490355189),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon_el], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.detail-value","div.detail-value",73846147),value], null)], null);
});
phonebook.ui.pages.detail.shown = (function phonebook$ui$pages$detail$shown(v){
if(clojure.string.blank_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.muted","span.muted",643346264),"\u2014"], null);
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}
});
phonebook.ui.pages.detail.view = (function phonebook$ui$pages$detail$view(){
var map__12010 = cljs.core.deref(phonebook.ui.state.app);
var map__12010__$1 = cljs.core.__destructure_map(map__12010);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12010__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12010__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.back-link","a.back-link",1485517237),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.chevron_left], null)," All contacts"], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.loading-state","div.card.loading-state",872151395),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spinner","span.spinner",-83143153)], null)," Loading contact\u2026"], null):(((current == null))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.empty-state","div.card.empty-state",-1882180127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-icon","div.empty-icon",-757811307),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.alert], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Contact not found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It may have been deleted."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-outline","a.btn.btn-outline",-901124145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts"], null),"Back to contacts"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.detail-card","div.card.detail-card",-1875084637),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.detail-head","div.detail-head",-285423532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.avatar","div.avatar",-935122004),phonebook.ui.pages.detail.initials(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.detail-title","div.detail-title",505433750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.sub","p.sub",675587618),(""+"Contact #"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.detail-actions","div.detail-actions",579372441),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-outline","a.btn.btn-outline",-901124145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current))+"/edit")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.edit], null)," Edit"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger","button.btn.btn-danger",533883282),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return phonebook.ui.state.delete_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.trash], null)," Delete"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.detail-grid","div.detail-grid",1026370908),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.detail.field_row,phonebook.ui.icons.phone,"Phone",((clojure.string.blank_QMARK_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.muted","span.muted",643346264),"\u2014"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),phonebook.ui.pages.detail.tel_href(new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908).cljs$core$IFn$_invoke$arity$1(current))], null),new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908).cljs$core$IFn$_invoke$arity$1(current)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.detail.field_row,phonebook.ui.icons.mail,"Email",((clojure.string.blank_QMARK_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(current);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.muted","span.muted",643346264),"\u2014"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(current)))], null),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(current)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.detail.field_row,phonebook.ui.icons.pin,"Address",phonebook.ui.pages.detail.shown(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(current))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.detail.field_row,phonebook.ui.icons.user,"Created",phonebook.ui.pages.detail.shown(new cljs.core.Keyword(null,"createdAt","createdAt",-936788).cljs$core$IFn$_invoke$arity$1(current))], null)], null)], null)
))], null);
});

//# sourceMappingURL=phonebook.ui.pages.detail.js.map
