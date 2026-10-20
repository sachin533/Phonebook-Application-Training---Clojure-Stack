goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__12326){
var map__12327 = p__12326;
var map__12327__$1 = cljs.core.__destructure_map(map__12327);
var runtime = map__12327__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12327__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_12634 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_12634)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__12330 = runtime;
var G__12331 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_12634);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__12330,G__12331) : shadow.remote.runtime.shared.process.call(null,G__12330,G__12331));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__12334,res){
var map__12336 = p__12334;
var map__12336__$1 = cljs.core.__destructure_map(map__12336);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12336__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12336__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__12337 = res;
var G__12337__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12337,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__12337);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12337__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__12337__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__12342 = arguments.length;
switch (G__12342) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__12351,msg,handlers,timeout_after_ms){
var map__12352 = p__12351;
var map__12352__$1 = cljs.core.__destructure_map(map__12352);
var runtime = map__12352__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12352__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___12636 = arguments.length;
var i__5898__auto___12637 = (0);
while(true){
if((i__5898__auto___12637 < len__5897__auto___12636)){
args__5903__auto__.push((arguments[i__5898__auto___12637]));

var G__12638 = (i__5898__auto___12637 + (1));
i__5898__auto___12637 = G__12638;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__12389,ev,args){
var map__12390 = p__12389;
var map__12390__$1 = cljs.core.__destructure_map(map__12390);
var runtime = map__12390__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12390__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__12400 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__12403 = null;
var count__12404 = (0);
var i__12405 = (0);
while(true){
if((i__12405 < count__12404)){
var ext = chunk__12403.cljs$core$IIndexed$_nth$arity$2(null,i__12405);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12639 = seq__12400;
var G__12640 = chunk__12403;
var G__12641 = count__12404;
var G__12642 = (i__12405 + (1));
seq__12400 = G__12639;
chunk__12403 = G__12640;
count__12404 = G__12641;
i__12405 = G__12642;
continue;
} else {
var G__12643 = seq__12400;
var G__12644 = chunk__12403;
var G__12645 = count__12404;
var G__12646 = (i__12405 + (1));
seq__12400 = G__12643;
chunk__12403 = G__12644;
count__12404 = G__12645;
i__12405 = G__12646;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12400);
if(temp__5823__auto__){
var seq__12400__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12400__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12400__$1);
var G__12647 = cljs.core.chunk_rest(seq__12400__$1);
var G__12648 = c__5694__auto__;
var G__12649 = cljs.core.count(c__5694__auto__);
var G__12650 = (0);
seq__12400 = G__12647;
chunk__12403 = G__12648;
count__12404 = G__12649;
i__12405 = G__12650;
continue;
} else {
var ext = cljs.core.first(seq__12400__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12653 = cljs.core.next(seq__12400__$1);
var G__12654 = null;
var G__12655 = (0);
var G__12656 = (0);
seq__12400 = G__12653;
chunk__12403 = G__12654;
count__12404 = G__12655;
i__12405 = G__12656;
continue;
} else {
var G__12657 = cljs.core.next(seq__12400__$1);
var G__12658 = null;
var G__12659 = (0);
var G__12660 = (0);
seq__12400 = G__12657;
chunk__12403 = G__12658;
count__12404 = G__12659;
i__12405 = G__12660;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq12367){
var G__12369 = cljs.core.first(seq12367);
var seq12367__$1 = cljs.core.next(seq12367);
var G__12370 = cljs.core.first(seq12367__$1);
var seq12367__$2 = cljs.core.next(seq12367__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12369,G__12370,seq12367__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__12532,p__12533){
var map__12534 = p__12532;
var map__12534__$1 = cljs.core.__destructure_map(map__12534);
var runtime = map__12534__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12534__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__12535 = p__12533;
var map__12535__$1 = cljs.core.__destructure_map(map__12535);
var msg = map__12535__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12535__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__12536 = cljs.core.deref(state_ref);
var map__12536__$1 = cljs.core.__destructure_map(map__12536);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12536__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12536__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__12542,msg){
var map__12543 = p__12542;
var map__12543__$1 = cljs.core.__destructure_map(map__12543);
var runtime = map__12543__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12543__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__12555,key,p__12556){
var map__12557 = p__12555;
var map__12557__$1 = cljs.core.__destructure_map(map__12557);
var state = map__12557__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12557__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__12558 = p__12556;
var map__12558__$1 = cljs.core.__destructure_map(map__12558);
var spec = map__12558__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12558__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12558__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__12579,key,spec){
var map__12589 = p__12579;
var map__12589__$1 = cljs.core.__destructure_map(map__12589);
var runtime = map__12589__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12589__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___12661 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___12661 == null)){
} else {
var on_welcome_12662 = temp__5827__auto___12661;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_12662.cljs$core$IFn$_invoke$arity$0 ? on_welcome_12662.cljs$core$IFn$_invoke$arity$0() : on_welcome_12662.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__12596_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__12596_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__12597_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__12597_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__12598_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__12598_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__12599_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__12599_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__12600_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__12600_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__12606,key){
var map__12607 = p__12606;
var map__12607__$1 = cljs.core.__destructure_map(map__12607);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12607__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__12608,msg){
var map__12609 = p__12608;
var map__12609__$1 = cljs.core.__destructure_map(map__12609);
var runtime = map__12609__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12609__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__12610,p__12611){
var map__12613 = p__12610;
var map__12613__$1 = cljs.core.__destructure_map(map__12613);
var runtime = map__12613__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12613__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__12614 = p__12611;
var map__12614__$1 = cljs.core.__destructure_map(map__12614);
var msg = map__12614__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12614__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12614__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__12620 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__12622 = null;
var count__12623 = (0);
var i__12624 = (0);
while(true){
if((i__12624 < count__12623)){
var map__12630 = chunk__12622.cljs$core$IIndexed$_nth$arity$2(null,i__12624);
var map__12630__$1 = cljs.core.__destructure_map(map__12630);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12630__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12680 = seq__12620;
var G__12681 = chunk__12622;
var G__12682 = count__12623;
var G__12683 = (i__12624 + (1));
seq__12620 = G__12680;
chunk__12622 = G__12681;
count__12623 = G__12682;
i__12624 = G__12683;
continue;
} else {
var G__12684 = seq__12620;
var G__12685 = chunk__12622;
var G__12687 = count__12623;
var G__12688 = (i__12624 + (1));
seq__12620 = G__12684;
chunk__12622 = G__12685;
count__12623 = G__12687;
i__12624 = G__12688;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12620);
if(temp__5823__auto__){
var seq__12620__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12620__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12620__$1);
var G__12691 = cljs.core.chunk_rest(seq__12620__$1);
var G__12692 = c__5694__auto__;
var G__12693 = cljs.core.count(c__5694__auto__);
var G__12694 = (0);
seq__12620 = G__12691;
chunk__12622 = G__12692;
count__12623 = G__12693;
i__12624 = G__12694;
continue;
} else {
var map__12632 = cljs.core.first(seq__12620__$1);
var map__12632__$1 = cljs.core.__destructure_map(map__12632);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12632__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12695 = cljs.core.next(seq__12620__$1);
var G__12696 = null;
var G__12697 = (0);
var G__12698 = (0);
seq__12620 = G__12695;
chunk__12622 = G__12696;
count__12623 = G__12697;
i__12624 = G__12698;
continue;
} else {
var G__12699 = cljs.core.next(seq__12620__$1);
var G__12700 = null;
var G__12701 = (0);
var G__12702 = (0);
seq__12620 = G__12699;
chunk__12622 = G__12700;
count__12623 = G__12701;
i__12624 = G__12702;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
