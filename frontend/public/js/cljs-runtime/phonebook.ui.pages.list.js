goog.provide('phonebook.ui.pages.list');
phonebook.ui.pages.list.tel_href = (function phonebook$ui$pages$list$tel_href(phone){
return (""+"tel:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace((function (){var or__5162__auto__ = phone;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),/[\s()\-.]/,"")));
});
phonebook.ui.pages.list.contact_row = (function phonebook$ui$pages$list$contact_row(p__12006){
var map__12007 = p__12006;
var map__12007__$1 = cljs.core.__destructure_map(map__12007);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12007__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var phoneNumber = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12007__$1,new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12007__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12007__$1,new cljs.core.Keyword(null,"address","address",559499426));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-label","data-label",-355583348),"Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.name-link","a.name-link",-1916657029),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null),(function (){var or__5162__auto__ = name;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "\u2014";
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-label","data-label",-355583348),"Phone"], null),((clojure.string.blank_QMARK_((function (){var or__5162__auto__ = phoneNumber;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.muted","span.muted",643346264),"\u2014"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),phonebook.ui.pages.list.tel_href(phoneNumber)], null),phoneNumber], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-label","data-label",-355583348),"Email"], null),((clojure.string.blank_QMARK_((function (){var or__5162__auto__ = email;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.muted","span.muted",643346264),"\u2014"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(email))], null),email], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-label","data-label",-355583348),"Address"], null),((clojure.string.blank_QMARK_((function (){var or__5162__auto__ = address;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.muted","span.muted",643346264),"\u2014"], null):address)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell-actions","td.cell-actions",-67036452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-label","data-label",-355583348),"Actions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.row-action","a.row-action",-1917496241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))], null),"View"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.row-action","a.row-action",-1917496241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"#/contacts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/edit")], null),"Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.row-action.danger","button.row-action.danger",1526548472),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return phonebook.ui.state.delete_BANG_(id);
})], null),"Delete"], null)], null)], null);
});
phonebook.ui.pages.list.search_box = (function phonebook$ui$pages$list$search_box(p__12012){
var map__12013 = p__12012;
var map__12013__$1 = cljs.core.__destructure_map(map__12013);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12013__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var searching_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12013__$1,new cljs.core.Keyword(null,"searching?","searching?",1889514722));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.google-search","div.google-search",52276310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"search"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.search,"search-icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.search-input","input.search-input",-470560783),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search by name, phone or email\u2026",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Search contacts",new cljs.core.Keyword(null,"value","value",305978217),search,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12011_SHARP_){
return phonebook.ui.state.search_BANG_(p1__12011_SHARP_.target.value);
})], null)], null),(cljs.core.truth_(searching_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.search-spinner","span.search-spinner",-1763697235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null):null),(((((!(clojure.string.blank_QMARK_(search)))) && (cljs.core.not(searching_QMARK_))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.search-clear","button.search-clear",-133243120),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Clear search",new cljs.core.Keyword(null,"title","title",636505583),"Clear search",new cljs.core.Keyword(null,"on-click","on-click",1632826543),phonebook.ui.state.clear_search_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.clear], null)], null):null)], null);
});
phonebook.ui.pages.list.result_meta = (function phonebook$ui$pages$list$result_meta(p__12020){
var map__12021 = p__12020;
var map__12021__$1 = cljs.core.__destructure_map(map__12021);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12021__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12021__$1,new cljs.core.Keyword(null,"page","page",849072397));
var page_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12021__$1,new cljs.core.Keyword(null,"page-size","page-size",223836073));
var shown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12021__$1,new cljs.core.Keyword(null,"shown","shown",-1564457683));
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12021__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var start = ((page_size * (page - (1))) + (1));
var end = ((page_size * (page - (1))) + shown);
var range = (""+"Showing "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"\u2013"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end));
if(clojure.string.blank_QMARK_(search)){
if((total === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.result-meta","p.result-meta",-794279785),"No contacts yet"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.result-meta","p.result-meta",-794279785),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(range)+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)+" contacts")], null);
}
} else {
if((total === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.result-meta","p.result-meta",-794279785),(""+"No results for \u201C"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)+"\u201D")], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.result-meta","p.result-meta",-794279785),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(range)+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)+" results for \u201C"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)+"\u201D")], null);

}
}
});
/**
 * Pages around the current one, e.g. (1 nil 4 5 6 nil 29); nil = gap.
 */
phonebook.ui.pages.list.page_window = (function phonebook$ui$pages$list$page_window(current,total_pages){
if((total_pages > (1))){
var candidates = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12024_SHARP_){
return (((p1__12024_SHARP_ >= (1))) && ((p1__12024_SHARP_ <= total_pages)));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(current - (1)),current,(current + (1)),(1),total_pages], null))));
var G__12028 = candidates;
var vec__12029 = G__12028;
var seq__12030 = cljs.core.seq(vec__12029);
var first__12031 = cljs.core.first(seq__12030);
var seq__12030__$1 = cljs.core.next(seq__12030);
var p = first__12031;
var more = seq__12030__$1;
var prev = null;
var acc = cljs.core.PersistentVector.EMPTY;
var G__12028__$1 = G__12028;
var prev__$1 = prev;
var acc__$1 = acc;
while(true){
var vec__12039 = G__12028__$1;
var seq__12040 = cljs.core.seq(vec__12039);
var first__12041 = cljs.core.first(seq__12040);
var seq__12040__$1 = cljs.core.next(seq__12040);
var p__$1 = first__12041;
var more__$1 = seq__12040__$1;
var prev__$2 = prev__$1;
var acc__$2 = acc__$1;
if((p__$1 == null)){
return acc__$2;
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = prev__$2;
if(cljs.core.truth_(and__5160__auto__)){
return ((p__$1 - prev__$2) > (1));
} else {
return and__5160__auto__;
}
})())){
var G__12062 = more__$1;
var G__12063 = p__$1;
var G__12064 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc__$2,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p__$1], 0));
G__12028__$1 = G__12062;
prev__$1 = G__12063;
acc__$1 = G__12064;
continue;
} else {
var G__12065 = more__$1;
var G__12066 = p__$1;
var G__12067 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,p__$1);
G__12028__$1 = G__12065;
prev__$1 = G__12066;
acc__$1 = G__12067;
continue;

}
}
break;
}
} else {
return null;
}
});
phonebook.ui.pages.list.pagination = (function phonebook$ui$pages$list$pagination(p__12042){
var map__12043 = p__12042;
var map__12043__$1 = cljs.core.__destructure_map(map__12043);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12043__$1,new cljs.core.Keyword(null,"page","page",849072397));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12043__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var page_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12043__$1,new cljs.core.Keyword(null,"page-size","page-size",223836073));
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
if((total_pages > (1))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.pagination","nav.pagination",1341143463),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Pagination"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.page-btn","button.page-btn",-1324017778),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page <= (1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return phonebook.ui.state.goto_page_BANG_((page - (1)));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.chevron_left], null)," Previous"], null),(function (){var iter__5649__auto__ = (function phonebook$ui$pages$list$pagination_$_iter__12044(s__12045){
return (new cljs.core.LazySeq(null,(function (){
var s__12045__$1 = s__12045;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__12045__$1);
if(temp__5823__auto__){
var s__12045__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12045__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__12045__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__12047 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__12046 = (0);
while(true){
if((i__12046 < size__5648__auto__)){
var vec__12048 = cljs.core._nth(c__5647__auto__,i__12046);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12048,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12048,(1),null);
cljs.core.chunk_append(b__12047,(((p == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-gap","span.page-gap",-102158928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gap-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null),"\u2026"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.page-btn","button.page-btn",-1324017778),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,page))?"active":null),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"aria-current","aria-current",1889851611),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,page))?"page":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__12046,vec__12048,i,p,c__5647__auto__,size__5648__auto__,b__12047,s__12045__$2,temp__5823__auto__,total_pages,map__12043,map__12043__$1,page,total,page_size){
return (function (){
return phonebook.ui.state.goto_page_BANG_(p);
});})(i__12046,vec__12048,i,p,c__5647__auto__,size__5648__auto__,b__12047,s__12045__$2,temp__5823__auto__,total_pages,map__12043,map__12043__$1,page,total,page_size))
], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p))], null)));

var G__12068 = (i__12046 + (1));
i__12046 = G__12068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12047),phonebook$ui$pages$list$pagination_$_iter__12044(cljs.core.chunk_rest(s__12045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12047),null);
}
} else {
var vec__12051 = cljs.core.first(s__12045__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12051,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12051,(1),null);
return cljs.core.cons((((p == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-gap","span.page-gap",-102158928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"gap-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null),"\u2026"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.page-btn","button.page-btn",-1324017778),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,page))?"active":null),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"aria-current","aria-current",1889851611),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,page))?"page":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__12051,i,p,s__12045__$2,temp__5823__auto__,total_pages,map__12043,map__12043__$1,page,total,page_size){
return (function (){
return phonebook.ui.state.goto_page_BANG_(p);
});})(vec__12051,i,p,s__12045__$2,temp__5823__auto__,total_pages,map__12043,map__12043__$1,page,total,page_size))
], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p))], null)),phonebook$ui$pages$list$pagination_$_iter__12044(cljs.core.rest(s__12045__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,phonebook.ui.pages.list.page_window(page,total_pages)));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.page-btn","button.page-btn",-1324017778),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(page >= total_pages),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return phonebook.ui.state.goto_page_BANG_((page + (1)));
})], null)," Next ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.chevron_right], null)], null)], null);
} else {
return null;
}
});
phonebook.ui.pages.list.view = (function phonebook$ui$pages$list$view(){
var map__12054 = cljs.core.deref(phonebook.ui.state.app);
var map__12054__$1 = cljs.core.__destructure_map(map__12054);
var contacts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12054__$1,new cljs.core.Keyword(null,"contacts","contacts",333503174));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12054__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12054__$1,new cljs.core.Keyword(null,"page","page",849072397));
var page_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12054__$1,new cljs.core.Keyword(null,"page-size","page-size",223836073));
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12054__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12054__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12054__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var filtered_QMARK_ = (!(clojure.string.blank_QMARK_(search)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Contacts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.sub","p.sub",675587618),((filtered_QMARK_)?"Search results":"Everyone in your phonebook")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-actions","div.header-actions",1368680450),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts/new"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.plus], null)," Add contact"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.list.search_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),search,new cljs.core.Keyword(null,"searching?","searching?",1889514722),new cljs.core.Keyword(null,"searching?","searching?",1889514722).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(phonebook.ui.state.app))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-meta","div.list-meta",1409362537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.list.result_meta,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"page-size","page-size",223836073),page_size,new cljs.core.Keyword(null,"shown","shown",-1564457683),cljs.core.count(contacts),new cljs.core.Keyword(null,"search","search",1564939822),search], null)], null),((filtered_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.link","button.link",-142903972),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),phonebook.ui.state.clear_search_BANG_], null),"Clear search"], null):null)], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.loading-state","div.card.loading-state",872151395),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spinner","span.spinner",-83143153)], null)," Loading contacts\u2026"], null):(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.empty-state","div.card.empty-state",-1882180127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-icon","div.empty-icon",-757811307),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.alert], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Could not load contacts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),error], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-outline","button.btn.btn-outline",83642451),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),phonebook.ui.state.retry_load_BANG_], null),"Try again"], null)], null):(((((total === (0))) && (filtered_QMARK_)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.empty-state","div.card.empty-state",-1882180127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-icon","div.empty-icon",-757811307),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.search], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"No results"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(""+"Nothing matches \u201C"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(search)+"\u201D. Check the spelling or try a part of the name, phone number or email.")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-outline","button.btn.btn-outline",83642451),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),phonebook.ui.state.clear_search_BANG_], null),"Clear search"], null)], null):(((total === (0)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.empty-state","div.card.empty-state",-1882180127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty-icon","div.empty-icon",-757811307),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.users], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"No contacts yet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Add your first contact - it takes a few seconds."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/contacts/new"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.icons.plus], null)," Add contact"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.table-card","div.card.table-card",-144400506),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.contacts-table","table.contacts-table",708505215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Phone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Address"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell-actions","th.cell-actions",984597249),"Actions"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5649__auto__ = (function phonebook$ui$pages$list$view_$_iter__12056(s__12057){
return (new cljs.core.LazySeq(null,(function (){
var s__12057__$1 = s__12057;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__12057__$1);
if(temp__5823__auto__){
var s__12057__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12057__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__12057__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__12059 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__12058 = (0);
while(true){
if((i__12058 < size__5648__auto__)){
var map__12060 = cljs.core._nth(c__5647__auto__,i__12058);
var map__12060__$1 = cljs.core.__destructure_map(map__12060);
var c = map__12060__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12060__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append(b__12059,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.list.contact_row,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__12070 = (i__12058 + (1));
i__12058 = G__12070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12059),phonebook$ui$pages$list$view_$_iter__12056(cljs.core.chunk_rest(s__12057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12059),null);
}
} else {
var map__12061 = cljs.core.first(s__12057__$2);
var map__12061__$1 = cljs.core.__destructure_map(map__12061);
var c = map__12061__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12061__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.list.contact_row,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),phonebook$ui$pages$list$view_$_iter__12056(cljs.core.rest(s__12057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(contacts);
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phonebook.ui.pages.list.pagination,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"page-size","page-size",223836073),page_size], null)], null)], null)
))))], null);
});

//# sourceMappingURL=phonebook.ui.pages.list.js.map
