goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_11925 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_11925(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_11934 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_11934(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__10181 = coll;
var G__10182 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__10181,G__10182) : shadow.dom.lazy_native_coll_seq.call(null,G__10181,G__10182));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__10186 = arguments.length;
switch (G__10186) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__10188 = arguments.length;
switch (G__10188) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__10190 = arguments.length;
switch (G__10190) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__10196 = arguments.length;
switch (G__10196) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__10205 = arguments.length;
switch (G__10205) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__10209 = arguments.length;
switch (G__10209) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e10211){if((e10211 instanceof Object)){
var e = e10211;
return console.log("didnt support attachEvent",el,e);
} else {
throw e10211;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__10274 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__10275 = null;
var count__10276 = (0);
var i__10277 = (0);
while(true){
if((i__10277 < count__10276)){
var el = chunk__10275.cljs$core$IIndexed$_nth$arity$2(null,i__10277);
var handler_12022__$1 = ((function (seq__10274,chunk__10275,count__10276,i__10277,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__10274,chunk__10275,count__10276,i__10277,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12022__$1);


var G__12023 = seq__10274;
var G__12024 = chunk__10275;
var G__12025 = count__10276;
var G__12026 = (i__10277 + (1));
seq__10274 = G__12023;
chunk__10275 = G__12024;
count__10276 = G__12025;
i__10277 = G__12026;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10274);
if(temp__5823__auto__){
var seq__10274__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10274__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__10274__$1);
var G__12027 = cljs.core.chunk_rest(seq__10274__$1);
var G__12028 = c__5694__auto__;
var G__12029 = cljs.core.count(c__5694__auto__);
var G__12030 = (0);
seq__10274 = G__12027;
chunk__10275 = G__12028;
count__10276 = G__12029;
i__10277 = G__12030;
continue;
} else {
var el = cljs.core.first(seq__10274__$1);
var handler_12031__$1 = ((function (seq__10274,chunk__10275,count__10276,i__10277,el,seq__10274__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__10274,chunk__10275,count__10276,i__10277,el,seq__10274__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12031__$1);


var G__12032 = cljs.core.next(seq__10274__$1);
var G__12033 = null;
var G__12034 = (0);
var G__12035 = (0);
seq__10274 = G__12032;
chunk__10275 = G__12033;
count__10276 = G__12034;
i__10277 = G__12035;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__10316 = arguments.length;
switch (G__10316) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__10348 = cljs.core.seq(events);
var chunk__10358 = null;
var count__10359 = (0);
var i__10360 = (0);
while(true){
if((i__10360 < count__10359)){
var vec__10381 = chunk__10358.cljs$core$IIndexed$_nth$arity$2(null,i__10360);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10381,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12040 = seq__10348;
var G__12041 = chunk__10358;
var G__12042 = count__10359;
var G__12043 = (i__10360 + (1));
seq__10348 = G__12040;
chunk__10358 = G__12041;
count__10359 = G__12042;
i__10360 = G__12043;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10348);
if(temp__5823__auto__){
var seq__10348__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10348__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__10348__$1);
var G__12044 = cljs.core.chunk_rest(seq__10348__$1);
var G__12045 = c__5694__auto__;
var G__12046 = cljs.core.count(c__5694__auto__);
var G__12047 = (0);
seq__10348 = G__12044;
chunk__10358 = G__12045;
count__10359 = G__12046;
i__10360 = G__12047;
continue;
} else {
var vec__10434 = cljs.core.first(seq__10348__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10434,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12052 = cljs.core.next(seq__10348__$1);
var G__12053 = null;
var G__12054 = (0);
var G__12055 = (0);
seq__10348 = G__12052;
chunk__10358 = G__12053;
count__10359 = G__12054;
i__10360 = G__12055;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__10464 = cljs.core.seq(styles);
var chunk__10465 = null;
var count__10466 = (0);
var i__10467 = (0);
while(true){
if((i__10467 < count__10466)){
var vec__10483 = chunk__10465.cljs$core$IIndexed$_nth$arity$2(null,i__10467);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12059 = seq__10464;
var G__12060 = chunk__10465;
var G__12061 = count__10466;
var G__12062 = (i__10467 + (1));
seq__10464 = G__12059;
chunk__10465 = G__12060;
count__10466 = G__12061;
i__10467 = G__12062;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10464);
if(temp__5823__auto__){
var seq__10464__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10464__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__10464__$1);
var G__12063 = cljs.core.chunk_rest(seq__10464__$1);
var G__12064 = c__5694__auto__;
var G__12065 = cljs.core.count(c__5694__auto__);
var G__12066 = (0);
seq__10464 = G__12063;
chunk__10465 = G__12064;
count__10466 = G__12065;
i__10467 = G__12066;
continue;
} else {
var vec__10495 = cljs.core.first(seq__10464__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10495,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10495,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12067 = cljs.core.next(seq__10464__$1);
var G__12068 = null;
var G__12069 = (0);
var G__12070 = (0);
seq__10464 = G__12067;
chunk__10465 = G__12068;
count__10466 = G__12069;
i__10467 = G__12070;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__10542_12071 = key;
var G__10542_12072__$1 = (((G__10542_12071 instanceof cljs.core.Keyword))?G__10542_12071.fqn:null);
switch (G__10542_12072__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12077 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_12077,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_12077,"aria-");
}
})())){
el.setAttribute(ks_12077,value);
} else {
(el[ks_12077] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__10565){
var map__10567 = p__10565;
var map__10567__$1 = cljs.core.__destructure_map(map__10567);
var props = map__10567__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10567__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__10570 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10570,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10570,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10570,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__10574 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__10574,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__10574;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__10588 = arguments.length;
switch (G__10588) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__10604){
var vec__10605 = p__10604;
var seq__10606 = cljs.core.seq(vec__10605);
var first__10607 = cljs.core.first(seq__10606);
var seq__10606__$1 = cljs.core.next(seq__10606);
var nn = first__10607;
var first__10607__$1 = cljs.core.first(seq__10606__$1);
var seq__10606__$2 = cljs.core.next(seq__10606__$1);
var np = first__10607__$1;
var nc = seq__10606__$2;
var node = vec__10605;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10610 = nn;
var G__10611 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10610,G__10611) : create_fn.call(null,G__10610,G__10611));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10613 = nn;
var G__10614 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10613,G__10614) : create_fn.call(null,G__10613,G__10614));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__10622 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10622,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10622,(1),null);
var seq__10631_12084 = cljs.core.seq(node_children);
var chunk__10632_12085 = null;
var count__10633_12086 = (0);
var i__10634_12087 = (0);
while(true){
if((i__10634_12087 < count__10633_12086)){
var child_struct_12088 = chunk__10632_12085.cljs$core$IIndexed$_nth$arity$2(null,i__10634_12087);
var children_12089 = shadow.dom.dom_node(child_struct_12088);
if(cljs.core.seq_QMARK_(children_12089)){
var seq__10704_12090 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12089));
var chunk__10706_12091 = null;
var count__10707_12092 = (0);
var i__10708_12093 = (0);
while(true){
if((i__10708_12093 < count__10707_12092)){
var child_12094 = chunk__10706_12091.cljs$core$IIndexed$_nth$arity$2(null,i__10708_12093);
if(cljs.core.truth_(child_12094)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12094);


var G__12095 = seq__10704_12090;
var G__12096 = chunk__10706_12091;
var G__12097 = count__10707_12092;
var G__12098 = (i__10708_12093 + (1));
seq__10704_12090 = G__12095;
chunk__10706_12091 = G__12096;
count__10707_12092 = G__12097;
i__10708_12093 = G__12098;
continue;
} else {
var G__12099 = seq__10704_12090;
var G__12100 = chunk__10706_12091;
var G__12101 = count__10707_12092;
var G__12102 = (i__10708_12093 + (1));
seq__10704_12090 = G__12099;
chunk__10706_12091 = G__12100;
count__10707_12092 = G__12101;
i__10708_12093 = G__12102;
continue;
}
} else {
var temp__5823__auto___12103 = cljs.core.seq(seq__10704_12090);
if(temp__5823__auto___12103){
var seq__10704_12104__$1 = temp__5823__auto___12103;
if(cljs.core.chunked_seq_QMARK_(seq__10704_12104__$1)){
var c__5694__auto___12105 = cljs.core.chunk_first(seq__10704_12104__$1);
var G__12106 = cljs.core.chunk_rest(seq__10704_12104__$1);
var G__12107 = c__5694__auto___12105;
var G__12108 = cljs.core.count(c__5694__auto___12105);
var G__12109 = (0);
seq__10704_12090 = G__12106;
chunk__10706_12091 = G__12107;
count__10707_12092 = G__12108;
i__10708_12093 = G__12109;
continue;
} else {
var child_12110 = cljs.core.first(seq__10704_12104__$1);
if(cljs.core.truth_(child_12110)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12110);


var G__12111 = cljs.core.next(seq__10704_12104__$1);
var G__12112 = null;
var G__12113 = (0);
var G__12114 = (0);
seq__10704_12090 = G__12111;
chunk__10706_12091 = G__12112;
count__10707_12092 = G__12113;
i__10708_12093 = G__12114;
continue;
} else {
var G__12115 = cljs.core.next(seq__10704_12104__$1);
var G__12116 = null;
var G__12117 = (0);
var G__12118 = (0);
seq__10704_12090 = G__12115;
chunk__10706_12091 = G__12116;
count__10707_12092 = G__12117;
i__10708_12093 = G__12118;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12089);
}


var G__12119 = seq__10631_12084;
var G__12120 = chunk__10632_12085;
var G__12121 = count__10633_12086;
var G__12122 = (i__10634_12087 + (1));
seq__10631_12084 = G__12119;
chunk__10632_12085 = G__12120;
count__10633_12086 = G__12121;
i__10634_12087 = G__12122;
continue;
} else {
var temp__5823__auto___12123 = cljs.core.seq(seq__10631_12084);
if(temp__5823__auto___12123){
var seq__10631_12124__$1 = temp__5823__auto___12123;
if(cljs.core.chunked_seq_QMARK_(seq__10631_12124__$1)){
var c__5694__auto___12125 = cljs.core.chunk_first(seq__10631_12124__$1);
var G__12126 = cljs.core.chunk_rest(seq__10631_12124__$1);
var G__12127 = c__5694__auto___12125;
var G__12128 = cljs.core.count(c__5694__auto___12125);
var G__12129 = (0);
seq__10631_12084 = G__12126;
chunk__10632_12085 = G__12127;
count__10633_12086 = G__12128;
i__10634_12087 = G__12129;
continue;
} else {
var child_struct_12130 = cljs.core.first(seq__10631_12124__$1);
var children_12131 = shadow.dom.dom_node(child_struct_12130);
if(cljs.core.seq_QMARK_(children_12131)){
var seq__10737_12132 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12131));
var chunk__10739_12133 = null;
var count__10740_12134 = (0);
var i__10741_12135 = (0);
while(true){
if((i__10741_12135 < count__10740_12134)){
var child_12136 = chunk__10739_12133.cljs$core$IIndexed$_nth$arity$2(null,i__10741_12135);
if(cljs.core.truth_(child_12136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12136);


var G__12137 = seq__10737_12132;
var G__12138 = chunk__10739_12133;
var G__12139 = count__10740_12134;
var G__12140 = (i__10741_12135 + (1));
seq__10737_12132 = G__12137;
chunk__10739_12133 = G__12138;
count__10740_12134 = G__12139;
i__10741_12135 = G__12140;
continue;
} else {
var G__12141 = seq__10737_12132;
var G__12142 = chunk__10739_12133;
var G__12143 = count__10740_12134;
var G__12144 = (i__10741_12135 + (1));
seq__10737_12132 = G__12141;
chunk__10739_12133 = G__12142;
count__10740_12134 = G__12143;
i__10741_12135 = G__12144;
continue;
}
} else {
var temp__5823__auto___12145__$1 = cljs.core.seq(seq__10737_12132);
if(temp__5823__auto___12145__$1){
var seq__10737_12146__$1 = temp__5823__auto___12145__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10737_12146__$1)){
var c__5694__auto___12147 = cljs.core.chunk_first(seq__10737_12146__$1);
var G__12148 = cljs.core.chunk_rest(seq__10737_12146__$1);
var G__12149 = c__5694__auto___12147;
var G__12150 = cljs.core.count(c__5694__auto___12147);
var G__12151 = (0);
seq__10737_12132 = G__12148;
chunk__10739_12133 = G__12149;
count__10740_12134 = G__12150;
i__10741_12135 = G__12151;
continue;
} else {
var child_12152 = cljs.core.first(seq__10737_12146__$1);
if(cljs.core.truth_(child_12152)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12152);


var G__12153 = cljs.core.next(seq__10737_12146__$1);
var G__12154 = null;
var G__12155 = (0);
var G__12156 = (0);
seq__10737_12132 = G__12153;
chunk__10739_12133 = G__12154;
count__10740_12134 = G__12155;
i__10741_12135 = G__12156;
continue;
} else {
var G__12157 = cljs.core.next(seq__10737_12146__$1);
var G__12158 = null;
var G__12159 = (0);
var G__12160 = (0);
seq__10737_12132 = G__12157;
chunk__10739_12133 = G__12158;
count__10740_12134 = G__12159;
i__10741_12135 = G__12160;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12131);
}


var G__12161 = cljs.core.next(seq__10631_12124__$1);
var G__12162 = null;
var G__12163 = (0);
var G__12164 = (0);
seq__10631_12084 = G__12161;
chunk__10632_12085 = G__12162;
count__10633_12086 = G__12163;
i__10634_12087 = G__12164;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__10789 = cljs.core.seq(node);
var chunk__10790 = null;
var count__10791 = (0);
var i__10792 = (0);
while(true){
if((i__10792 < count__10791)){
var n = chunk__10790.cljs$core$IIndexed$_nth$arity$2(null,i__10792);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12166 = seq__10789;
var G__12167 = chunk__10790;
var G__12168 = count__10791;
var G__12169 = (i__10792 + (1));
seq__10789 = G__12166;
chunk__10790 = G__12167;
count__10791 = G__12168;
i__10792 = G__12169;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10789);
if(temp__5823__auto__){
var seq__10789__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10789__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__10789__$1);
var G__12170 = cljs.core.chunk_rest(seq__10789__$1);
var G__12171 = c__5694__auto__;
var G__12172 = cljs.core.count(c__5694__auto__);
var G__12173 = (0);
seq__10789 = G__12170;
chunk__10790 = G__12171;
count__10791 = G__12172;
i__10792 = G__12173;
continue;
} else {
var n = cljs.core.first(seq__10789__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12174 = cljs.core.next(seq__10789__$1);
var G__12175 = null;
var G__12176 = (0);
var G__12177 = (0);
seq__10789 = G__12174;
chunk__10790 = G__12175;
count__10791 = G__12176;
i__10792 = G__12177;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__10796 = arguments.length;
switch (G__10796) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__10801 = arguments.length;
switch (G__10801) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__10822 = arguments.length;
switch (G__10822) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___12187 = arguments.length;
var i__5898__auto___12188 = (0);
while(true){
if((i__5898__auto___12188 < len__5897__auto___12187)){
args__5903__auto__.push((arguments[i__5898__auto___12188]));

var G__12189 = (i__5898__auto___12188 + (1));
i__5898__auto___12188 = G__12189;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__10856_12191 = cljs.core.seq(nodes);
var chunk__10857_12192 = null;
var count__10858_12193 = (0);
var i__10859_12194 = (0);
while(true){
if((i__10859_12194 < count__10858_12193)){
var node_12195 = chunk__10857_12192.cljs$core$IIndexed$_nth$arity$2(null,i__10859_12194);
fragment.appendChild(shadow.dom._to_dom(node_12195));


var G__12197 = seq__10856_12191;
var G__12198 = chunk__10857_12192;
var G__12199 = count__10858_12193;
var G__12200 = (i__10859_12194 + (1));
seq__10856_12191 = G__12197;
chunk__10857_12192 = G__12198;
count__10858_12193 = G__12199;
i__10859_12194 = G__12200;
continue;
} else {
var temp__5823__auto___12204 = cljs.core.seq(seq__10856_12191);
if(temp__5823__auto___12204){
var seq__10856_12205__$1 = temp__5823__auto___12204;
if(cljs.core.chunked_seq_QMARK_(seq__10856_12205__$1)){
var c__5694__auto___12206 = cljs.core.chunk_first(seq__10856_12205__$1);
var G__12207 = cljs.core.chunk_rest(seq__10856_12205__$1);
var G__12208 = c__5694__auto___12206;
var G__12209 = cljs.core.count(c__5694__auto___12206);
var G__12210 = (0);
seq__10856_12191 = G__12207;
chunk__10857_12192 = G__12208;
count__10858_12193 = G__12209;
i__10859_12194 = G__12210;
continue;
} else {
var node_12211 = cljs.core.first(seq__10856_12205__$1);
fragment.appendChild(shadow.dom._to_dom(node_12211));


var G__12229 = cljs.core.next(seq__10856_12205__$1);
var G__12231 = null;
var G__12232 = (0);
var G__12233 = (0);
seq__10856_12191 = G__12229;
chunk__10857_12192 = G__12231;
count__10858_12193 = G__12232;
i__10859_12194 = G__12233;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq10846){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10846));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__10879_12245 = cljs.core.seq(scripts);
var chunk__10880_12246 = null;
var count__10881_12247 = (0);
var i__10882_12248 = (0);
while(true){
if((i__10882_12248 < count__10881_12247)){
var vec__10896_12249 = chunk__10880_12246.cljs$core$IIndexed$_nth$arity$2(null,i__10882_12248);
var script_tag_12250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10896_12249,(0),null);
var script_body_12251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10896_12249,(1),null);
eval(script_body_12251);


var G__12253 = seq__10879_12245;
var G__12254 = chunk__10880_12246;
var G__12255 = count__10881_12247;
var G__12256 = (i__10882_12248 + (1));
seq__10879_12245 = G__12253;
chunk__10880_12246 = G__12254;
count__10881_12247 = G__12255;
i__10882_12248 = G__12256;
continue;
} else {
var temp__5823__auto___12258 = cljs.core.seq(seq__10879_12245);
if(temp__5823__auto___12258){
var seq__10879_12260__$1 = temp__5823__auto___12258;
if(cljs.core.chunked_seq_QMARK_(seq__10879_12260__$1)){
var c__5694__auto___12262 = cljs.core.chunk_first(seq__10879_12260__$1);
var G__12263 = cljs.core.chunk_rest(seq__10879_12260__$1);
var G__12264 = c__5694__auto___12262;
var G__12265 = cljs.core.count(c__5694__auto___12262);
var G__12266 = (0);
seq__10879_12245 = G__12263;
chunk__10880_12246 = G__12264;
count__10881_12247 = G__12265;
i__10882_12248 = G__12266;
continue;
} else {
var vec__10902_12267 = cljs.core.first(seq__10879_12260__$1);
var script_tag_12268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10902_12267,(0),null);
var script_body_12269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10902_12267,(1),null);
eval(script_body_12269);


var G__12270 = cljs.core.next(seq__10879_12260__$1);
var G__12271 = null;
var G__12272 = (0);
var G__12273 = (0);
seq__10879_12245 = G__12270;
chunk__10880_12246 = G__12271;
count__10881_12247 = G__12272;
i__10882_12248 = G__12273;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__10910){
var vec__10911 = p__10910;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10911,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10911,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__10927 = arguments.length;
switch (G__10927) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__10951 = cljs.core.seq(style_keys);
var chunk__10952 = null;
var count__10953 = (0);
var i__10954 = (0);
while(true){
if((i__10954 < count__10953)){
var it = chunk__10952.cljs$core$IIndexed$_nth$arity$2(null,i__10954);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12299 = seq__10951;
var G__12300 = chunk__10952;
var G__12301 = count__10953;
var G__12302 = (i__10954 + (1));
seq__10951 = G__12299;
chunk__10952 = G__12300;
count__10953 = G__12301;
i__10954 = G__12302;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10951);
if(temp__5823__auto__){
var seq__10951__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10951__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__10951__$1);
var G__12303 = cljs.core.chunk_rest(seq__10951__$1);
var G__12304 = c__5694__auto__;
var G__12305 = cljs.core.count(c__5694__auto__);
var G__12306 = (0);
seq__10951 = G__12303;
chunk__10952 = G__12304;
count__10953 = G__12305;
i__10954 = G__12306;
continue;
} else {
var it = cljs.core.first(seq__10951__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12307 = cljs.core.next(seq__10951__$1);
var G__12308 = null;
var G__12309 = (0);
var G__12310 = (0);
seq__10951 = G__12307;
chunk__10952 = G__12308;
count__10953 = G__12309;
i__10954 = G__12310;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k10971,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__10985 = k10971;
var G__10985__$1 = (((G__10985 instanceof cljs.core.Keyword))?G__10985.fqn:null);
switch (G__10985__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10971,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__10990){
var vec__10991 = p__10990;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10991,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10991,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10970){
var self__ = this;
var G__10970__$1 = this;
return (new cljs.core.RecordIter((0),G__10970__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10973,other10975){
var self__ = this;
var this10973__$1 = this;
return (((!((other10975 == null)))) && ((((this10973__$1.constructor === other10975.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10973__$1.x,other10975.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10973__$1.y,other10975.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10973__$1.__extmap,other10975.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k10971){
var self__ = this;
var this__5476__auto____$1 = this;
var G__11030 = k10971;
var G__11030__$1 = (((G__11030 instanceof cljs.core.Keyword))?G__11030.fqn:null);
switch (G__11030__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k10971);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__10970){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__11043 = cljs.core.keyword_identical_QMARK_;
var expr__11044 = k__5478__auto__;
if(cljs.core.truth_((pred__11043.cljs$core$IFn$_invoke$arity$2 ? pred__11043.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__11044) : pred__11043.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__11044)))){
return (new shadow.dom.Coordinate(G__10970,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11043.cljs$core$IFn$_invoke$arity$2 ? pred__11043.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__11044) : pred__11043.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__11044)))){
return (new shadow.dom.Coordinate(self__.x,G__10970,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__10970),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__10970){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__10970,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__10981){
var extmap__5511__auto__ = (function (){var G__11063 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10981,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__10981)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11063);
} else {
return G__11063;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__10981),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__10981),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k11086,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__11103 = k11086;
var G__11103__$1 = (((G__11103 instanceof cljs.core.Keyword))?G__11103.fqn:null);
switch (G__11103__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11086,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__11114){
var vec__11121 = p__11114;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11085){
var self__ = this;
var G__11085__$1 = this;
return (new cljs.core.RecordIter((0),G__11085__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11087,other11088){
var self__ = this;
var this11087__$1 = this;
return (((!((other11088 == null)))) && ((((this11087__$1.constructor === other11088.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11087__$1.w,other11088.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11087__$1.h,other11088.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11087__$1.__extmap,other11088.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k11086){
var self__ = this;
var this__5476__auto____$1 = this;
var G__11247 = k11086;
var G__11247__$1 = (((G__11247 instanceof cljs.core.Keyword))?G__11247.fqn:null);
switch (G__11247__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11086);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__11085){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__11250 = cljs.core.keyword_identical_QMARK_;
var expr__11251 = k__5478__auto__;
if(cljs.core.truth_((pred__11250.cljs$core$IFn$_invoke$arity$2 ? pred__11250.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__11251) : pred__11250.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__11251)))){
return (new shadow.dom.Size(G__11085,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11250.cljs$core$IFn$_invoke$arity$2 ? pred__11250.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__11251) : pred__11250.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__11251)))){
return (new shadow.dom.Size(self__.w,G__11085,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__11085),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__11085){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__11085,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__11090){
var extmap__5511__auto__ = (function (){var G__11294 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11090,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__11090)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11294);
} else {
return G__11294;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__11090),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__11090),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__12339 = (i + (1));
var G__12340 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12339;
ret = G__12340;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11383){
var vec__11384 = p__11383;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11384,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11384,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__11401 = arguments.length;
switch (G__11401) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12362 = ps;
var G__12363 = (i + (1));
el__$1 = G__12362;
i = G__12363;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__11592 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11592,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11592,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11592,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__11603_12382 = cljs.core.seq(props);
var chunk__11604_12383 = null;
var count__11605_12384 = (0);
var i__11606_12385 = (0);
while(true){
if((i__11606_12385 < count__11605_12384)){
var vec__11681_12386 = chunk__11604_12383.cljs$core$IIndexed$_nth$arity$2(null,i__11606_12385);
var k_12387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11681_12386,(0),null);
var v_12388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11681_12386,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_12387);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12387),v_12388);


var G__12408 = seq__11603_12382;
var G__12409 = chunk__11604_12383;
var G__12410 = count__11605_12384;
var G__12411 = (i__11606_12385 + (1));
seq__11603_12382 = G__12408;
chunk__11604_12383 = G__12409;
count__11605_12384 = G__12410;
i__11606_12385 = G__12411;
continue;
} else {
var temp__5823__auto___12417 = cljs.core.seq(seq__11603_12382);
if(temp__5823__auto___12417){
var seq__11603_12419__$1 = temp__5823__auto___12417;
if(cljs.core.chunked_seq_QMARK_(seq__11603_12419__$1)){
var c__5694__auto___12423 = cljs.core.chunk_first(seq__11603_12419__$1);
var G__12424 = cljs.core.chunk_rest(seq__11603_12419__$1);
var G__12425 = c__5694__auto___12423;
var G__12426 = cljs.core.count(c__5694__auto___12423);
var G__12427 = (0);
seq__11603_12382 = G__12424;
chunk__11604_12383 = G__12425;
count__11605_12384 = G__12426;
i__11606_12385 = G__12427;
continue;
} else {
var vec__11697_12429 = cljs.core.first(seq__11603_12419__$1);
var k_12430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11697_12429,(0),null);
var v_12431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11697_12429,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_12430);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12430),v_12431);


var G__12432 = cljs.core.next(seq__11603_12419__$1);
var G__12433 = null;
var G__12434 = (0);
var G__12435 = (0);
seq__11603_12382 = G__12432;
chunk__11604_12383 = G__12433;
count__11605_12384 = G__12434;
i__11606_12385 = G__12435;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__11716 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11716,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11716,(1),null);
var seq__11722_12441 = cljs.core.seq(node_children);
var chunk__11724_12442 = null;
var count__11725_12443 = (0);
var i__11726_12444 = (0);
while(true){
if((i__11726_12444 < count__11725_12443)){
var child_struct_12445 = chunk__11724_12442.cljs$core$IIndexed$_nth$arity$2(null,i__11726_12444);
if((!((child_struct_12445 == null)))){
if(typeof child_struct_12445 === 'string'){
var text_12446 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12446)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_12445)));
} else {
var children_12447 = shadow.dom.svg_node(child_struct_12445);
if(cljs.core.seq_QMARK_(children_12447)){
var seq__11828_12449 = cljs.core.seq(children_12447);
var chunk__11830_12450 = null;
var count__11831_12451 = (0);
var i__11832_12452 = (0);
while(true){
if((i__11832_12452 < count__11831_12451)){
var child_12454 = chunk__11830_12450.cljs$core$IIndexed$_nth$arity$2(null,i__11832_12452);
if(cljs.core.truth_(child_12454)){
node.appendChild(child_12454);


var G__12455 = seq__11828_12449;
var G__12456 = chunk__11830_12450;
var G__12457 = count__11831_12451;
var G__12458 = (i__11832_12452 + (1));
seq__11828_12449 = G__12455;
chunk__11830_12450 = G__12456;
count__11831_12451 = G__12457;
i__11832_12452 = G__12458;
continue;
} else {
var G__12460 = seq__11828_12449;
var G__12461 = chunk__11830_12450;
var G__12462 = count__11831_12451;
var G__12463 = (i__11832_12452 + (1));
seq__11828_12449 = G__12460;
chunk__11830_12450 = G__12461;
count__11831_12451 = G__12462;
i__11832_12452 = G__12463;
continue;
}
} else {
var temp__5823__auto___12464 = cljs.core.seq(seq__11828_12449);
if(temp__5823__auto___12464){
var seq__11828_12465__$1 = temp__5823__auto___12464;
if(cljs.core.chunked_seq_QMARK_(seq__11828_12465__$1)){
var c__5694__auto___12466 = cljs.core.chunk_first(seq__11828_12465__$1);
var G__12467 = cljs.core.chunk_rest(seq__11828_12465__$1);
var G__12468 = c__5694__auto___12466;
var G__12469 = cljs.core.count(c__5694__auto___12466);
var G__12470 = (0);
seq__11828_12449 = G__12467;
chunk__11830_12450 = G__12468;
count__11831_12451 = G__12469;
i__11832_12452 = G__12470;
continue;
} else {
var child_12472 = cljs.core.first(seq__11828_12465__$1);
if(cljs.core.truth_(child_12472)){
node.appendChild(child_12472);


var G__12473 = cljs.core.next(seq__11828_12465__$1);
var G__12474 = null;
var G__12475 = (0);
var G__12476 = (0);
seq__11828_12449 = G__12473;
chunk__11830_12450 = G__12474;
count__11831_12451 = G__12475;
i__11832_12452 = G__12476;
continue;
} else {
var G__12477 = cljs.core.next(seq__11828_12465__$1);
var G__12478 = null;
var G__12479 = (0);
var G__12480 = (0);
seq__11828_12449 = G__12477;
chunk__11830_12450 = G__12478;
count__11831_12451 = G__12479;
i__11832_12452 = G__12480;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12447);
}
}


var G__12481 = seq__11722_12441;
var G__12482 = chunk__11724_12442;
var G__12483 = count__11725_12443;
var G__12484 = (i__11726_12444 + (1));
seq__11722_12441 = G__12481;
chunk__11724_12442 = G__12482;
count__11725_12443 = G__12483;
i__11726_12444 = G__12484;
continue;
} else {
var G__12486 = seq__11722_12441;
var G__12487 = chunk__11724_12442;
var G__12488 = count__11725_12443;
var G__12489 = (i__11726_12444 + (1));
seq__11722_12441 = G__12486;
chunk__11724_12442 = G__12487;
count__11725_12443 = G__12488;
i__11726_12444 = G__12489;
continue;
}
} else {
var temp__5823__auto___12491 = cljs.core.seq(seq__11722_12441);
if(temp__5823__auto___12491){
var seq__11722_12492__$1 = temp__5823__auto___12491;
if(cljs.core.chunked_seq_QMARK_(seq__11722_12492__$1)){
var c__5694__auto___12494 = cljs.core.chunk_first(seq__11722_12492__$1);
var G__12495 = cljs.core.chunk_rest(seq__11722_12492__$1);
var G__12496 = c__5694__auto___12494;
var G__12497 = cljs.core.count(c__5694__auto___12494);
var G__12498 = (0);
seq__11722_12441 = G__12495;
chunk__11724_12442 = G__12496;
count__11725_12443 = G__12497;
i__11726_12444 = G__12498;
continue;
} else {
var child_struct_12500 = cljs.core.first(seq__11722_12492__$1);
if((!((child_struct_12500 == null)))){
if(typeof child_struct_12500 === 'string'){
var text_12501 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12501)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_12500)));
} else {
var children_12502 = shadow.dom.svg_node(child_struct_12500);
if(cljs.core.seq_QMARK_(children_12502)){
var seq__11883_12503 = cljs.core.seq(children_12502);
var chunk__11885_12504 = null;
var count__11886_12505 = (0);
var i__11887_12506 = (0);
while(true){
if((i__11887_12506 < count__11886_12505)){
var child_12549 = chunk__11885_12504.cljs$core$IIndexed$_nth$arity$2(null,i__11887_12506);
if(cljs.core.truth_(child_12549)){
node.appendChild(child_12549);


var G__12550 = seq__11883_12503;
var G__12551 = chunk__11885_12504;
var G__12552 = count__11886_12505;
var G__12553 = (i__11887_12506 + (1));
seq__11883_12503 = G__12550;
chunk__11885_12504 = G__12551;
count__11886_12505 = G__12552;
i__11887_12506 = G__12553;
continue;
} else {
var G__12560 = seq__11883_12503;
var G__12561 = chunk__11885_12504;
var G__12562 = count__11886_12505;
var G__12563 = (i__11887_12506 + (1));
seq__11883_12503 = G__12560;
chunk__11885_12504 = G__12561;
count__11886_12505 = G__12562;
i__11887_12506 = G__12563;
continue;
}
} else {
var temp__5823__auto___12564__$1 = cljs.core.seq(seq__11883_12503);
if(temp__5823__auto___12564__$1){
var seq__11883_12565__$1 = temp__5823__auto___12564__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11883_12565__$1)){
var c__5694__auto___12566 = cljs.core.chunk_first(seq__11883_12565__$1);
var G__12567 = cljs.core.chunk_rest(seq__11883_12565__$1);
var G__12568 = c__5694__auto___12566;
var G__12569 = cljs.core.count(c__5694__auto___12566);
var G__12570 = (0);
seq__11883_12503 = G__12567;
chunk__11885_12504 = G__12568;
count__11886_12505 = G__12569;
i__11887_12506 = G__12570;
continue;
} else {
var child_12574 = cljs.core.first(seq__11883_12565__$1);
if(cljs.core.truth_(child_12574)){
node.appendChild(child_12574);


var G__12575 = cljs.core.next(seq__11883_12565__$1);
var G__12576 = null;
var G__12577 = (0);
var G__12578 = (0);
seq__11883_12503 = G__12575;
chunk__11885_12504 = G__12576;
count__11886_12505 = G__12577;
i__11887_12506 = G__12578;
continue;
} else {
var G__12580 = cljs.core.next(seq__11883_12565__$1);
var G__12581 = null;
var G__12582 = (0);
var G__12583 = (0);
seq__11883_12503 = G__12580;
chunk__11885_12504 = G__12581;
count__11886_12505 = G__12582;
i__11887_12506 = G__12583;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12502);
}
}


var G__12584 = cljs.core.next(seq__11722_12492__$1);
var G__12585 = null;
var G__12586 = (0);
var G__12587 = (0);
seq__11722_12441 = G__12584;
chunk__11724_12442 = G__12585;
count__11725_12443 = G__12586;
i__11726_12444 = G__12587;
continue;
} else {
var G__12588 = cljs.core.next(seq__11722_12492__$1);
var G__12590 = null;
var G__12591 = (0);
var G__12592 = (0);
seq__11722_12441 = G__12588;
chunk__11724_12442 = G__12590;
count__11725_12443 = G__12591;
i__11726_12444 = G__12592;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___12593 = arguments.length;
var i__5898__auto___12594 = (0);
while(true){
if((i__5898__auto___12594 < len__5897__auto___12593)){
args__5903__auto__.push((arguments[i__5898__auto___12594]));

var G__12595 = (i__5898__auto___12594 + (1));
i__5898__auto___12594 = G__12595;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq11911){
var G__11912 = cljs.core.first(seq11911);
var seq11911__$1 = cljs.core.next(seq11911);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11912,seq11911__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
