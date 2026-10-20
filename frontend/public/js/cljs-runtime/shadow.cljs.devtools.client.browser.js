goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___18494 = arguments.length;
var i__5898__auto___18495 = (0);
while(true){
if((i__5898__auto___18495 < len__5897__auto___18494)){
args__5903__auto__.push((arguments[i__5898__auto___18495]));

var G__18496 = (i__5898__auto___18495 + (1));
i__5898__auto___18495 = G__18496;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq18040){
var G__18041 = cljs.core.first(seq18040);
var seq18040__$1 = cljs.core.next(seq18040);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18041,seq18040__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__18073 = cljs.core.seq(sources);
var chunk__18074 = null;
var count__18075 = (0);
var i__18076 = (0);
while(true){
if((i__18076 < count__18075)){
var map__18098 = chunk__18074.cljs$core$IIndexed$_nth$arity$2(null,i__18076);
var map__18098__$1 = cljs.core.__destructure_map(map__18098);
var src = map__18098__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e18099){var e_18497 = e18099;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_18497);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18497.message))));
}

var G__18498 = seq__18073;
var G__18499 = chunk__18074;
var G__18500 = count__18075;
var G__18501 = (i__18076 + (1));
seq__18073 = G__18498;
chunk__18074 = G__18499;
count__18075 = G__18500;
i__18076 = G__18501;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18073);
if(temp__5823__auto__){
var seq__18073__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18073__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__18073__$1);
var G__18502 = cljs.core.chunk_rest(seq__18073__$1);
var G__18503 = c__5694__auto__;
var G__18504 = cljs.core.count(c__5694__auto__);
var G__18505 = (0);
seq__18073 = G__18502;
chunk__18074 = G__18503;
count__18075 = G__18504;
i__18076 = G__18505;
continue;
} else {
var map__18102 = cljs.core.first(seq__18073__$1);
var map__18102__$1 = cljs.core.__destructure_map(map__18102);
var src = map__18102__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18102__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18102__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18102__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18102__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e18104){var e_18506 = e18104;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_18506);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18506.message))));
}

var G__18507 = cljs.core.next(seq__18073__$1);
var G__18508 = null;
var G__18509 = (0);
var G__18510 = (0);
seq__18073 = G__18507;
chunk__18074 = G__18508;
count__18075 = G__18509;
i__18076 = G__18510;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__18105 = cljs.core.seq(js_requires);
var chunk__18106 = null;
var count__18107 = (0);
var i__18108 = (0);
while(true){
if((i__18108 < count__18107)){
var js_ns = chunk__18106.cljs$core$IIndexed$_nth$arity$2(null,i__18108);
var require_str_18511 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_18511);


var G__18512 = seq__18105;
var G__18513 = chunk__18106;
var G__18514 = count__18107;
var G__18515 = (i__18108 + (1));
seq__18105 = G__18512;
chunk__18106 = G__18513;
count__18107 = G__18514;
i__18108 = G__18515;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18105);
if(temp__5823__auto__){
var seq__18105__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18105__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__18105__$1);
var G__18516 = cljs.core.chunk_rest(seq__18105__$1);
var G__18517 = c__5694__auto__;
var G__18518 = cljs.core.count(c__5694__auto__);
var G__18519 = (0);
seq__18105 = G__18516;
chunk__18106 = G__18517;
count__18107 = G__18518;
i__18108 = G__18519;
continue;
} else {
var js_ns = cljs.core.first(seq__18105__$1);
var require_str_18520 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_18520);


var G__18521 = cljs.core.next(seq__18105__$1);
var G__18522 = null;
var G__18523 = (0);
var G__18524 = (0);
seq__18105 = G__18521;
chunk__18106 = G__18522;
count__18107 = G__18523;
i__18108 = G__18524;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__18112){
var map__18113 = p__18112;
var map__18113__$1 = cljs.core.__destructure_map(map__18113);
var msg = map__18113__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18113__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18113__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18114(s__18115){
return (new cljs.core.LazySeq(null,(function (){
var s__18115__$1 = s__18115;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__18115__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__18120 = cljs.core.first(xs__6383__auto__);
var map__18120__$1 = cljs.core.__destructure_map(map__18120);
var src = map__18120__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18120__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18120__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__18115__$1,map__18120,map__18120__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__18113,map__18113__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18114_$_iter__18116(s__18117){
return (new cljs.core.LazySeq(null,((function (s__18115__$1,map__18120,map__18120__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__18113,map__18113__$1,msg,info,reload_info){
return (function (){
var s__18117__$1 = s__18117;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__18117__$1);
if(temp__5823__auto____$1){
var s__18117__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18117__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__18117__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__18119 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__18118 = (0);
while(true){
if((i__18118 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__18118);
cljs.core.chunk_append(b__18119,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18525 = (i__18118 + (1));
i__18118 = G__18525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18119),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18114_$_iter__18116(cljs.core.chunk_rest(s__18117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18119),null);
}
} else {
var warning = cljs.core.first(s__18117__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18114_$_iter__18116(cljs.core.rest(s__18117__$2)));
}
} else {
return null;
}
break;
}
});})(s__18115__$1,map__18120,map__18120__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__18113,map__18113__$1,msg,info,reload_info))
,null,null));
});})(s__18115__$1,map__18120,map__18120__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__18113,map__18113__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18114(cljs.core.rest(s__18115__$1)));
} else {
var G__18526 = cljs.core.rest(s__18115__$1);
s__18115__$1 = G__18526;
continue;
}
} else {
var G__18527 = cljs.core.rest(s__18115__$1);
s__18115__$1 = G__18527;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__18121_18528 = cljs.core.seq(warnings);
var chunk__18122_18529 = null;
var count__18123_18530 = (0);
var i__18124_18531 = (0);
while(true){
if((i__18124_18531 < count__18123_18530)){
var map__18128_18532 = chunk__18122_18529.cljs$core$IIndexed$_nth$arity$2(null,i__18124_18531);
var map__18128_18533__$1 = cljs.core.__destructure_map(map__18128_18532);
var w_18534 = map__18128_18533__$1;
var msg_18535__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18128_18533__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18128_18533__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18128_18533__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18128_18533__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18538)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18536)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18537)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18535__$1)));


var G__18539 = seq__18121_18528;
var G__18540 = chunk__18122_18529;
var G__18541 = count__18123_18530;
var G__18542 = (i__18124_18531 + (1));
seq__18121_18528 = G__18539;
chunk__18122_18529 = G__18540;
count__18123_18530 = G__18541;
i__18124_18531 = G__18542;
continue;
} else {
var temp__5823__auto___18543 = cljs.core.seq(seq__18121_18528);
if(temp__5823__auto___18543){
var seq__18121_18544__$1 = temp__5823__auto___18543;
if(cljs.core.chunked_seq_QMARK_(seq__18121_18544__$1)){
var c__5694__auto___18545 = cljs.core.chunk_first(seq__18121_18544__$1);
var G__18546 = cljs.core.chunk_rest(seq__18121_18544__$1);
var G__18547 = c__5694__auto___18545;
var G__18548 = cljs.core.count(c__5694__auto___18545);
var G__18549 = (0);
seq__18121_18528 = G__18546;
chunk__18122_18529 = G__18547;
count__18123_18530 = G__18548;
i__18124_18531 = G__18549;
continue;
} else {
var map__18141_18550 = cljs.core.first(seq__18121_18544__$1);
var map__18141_18551__$1 = cljs.core.__destructure_map(map__18141_18550);
var w_18552 = map__18141_18551__$1;
var msg_18553__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18141_18551__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18141_18551__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18141_18551__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18141_18551__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18556)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18554)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18555)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18553__$1)));


var G__18557 = cljs.core.next(seq__18121_18544__$1);
var G__18558 = null;
var G__18559 = (0);
var G__18560 = (0);
seq__18121_18528 = G__18557;
chunk__18122_18529 = G__18558;
count__18123_18530 = G__18559;
i__18124_18531 = G__18560;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__18111_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__18111_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18143 = node_uri;
G__18143.setQuery(null);

G__18143.setPath(new$);

return G__18143;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__18147){
var map__18148 = p__18147;
var map__18148__$1 = cljs.core.__destructure_map(map__18148);
var msg = map__18148__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__18150 = cljs.core.seq(updates);
var chunk__18152 = null;
var count__18153 = (0);
var i__18154 = (0);
while(true){
if((i__18154 < count__18153)){
var path = chunk__18152.cljs$core$IIndexed$_nth$arity$2(null,i__18154);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18313_18561 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18317_18562 = null;
var count__18318_18563 = (0);
var i__18319_18564 = (0);
while(true){
if((i__18319_18564 < count__18318_18563)){
var node_18565 = chunk__18317_18562.cljs$core$IIndexed$_nth$arity$2(null,i__18319_18564);
if(cljs.core.not(node_18565.shadow$old)){
var path_match_18566 = shadow.cljs.devtools.client.browser.match_paths(node_18565.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18566)){
var new_link_18567 = (function (){var G__18345 = node_18565.cloneNode(true);
G__18345.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18566)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__18345;
})();
(node_18565.shadow$old = true);

(new_link_18567.onload = ((function (seq__18313_18561,chunk__18317_18562,count__18318_18563,i__18319_18564,seq__18150,chunk__18152,count__18153,i__18154,new_link_18567,path_match_18566,node_18565,path,map__18148,map__18148__$1,msg,updates,reload_info){
return (function (e){
var seq__18346_18568 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18348_18569 = null;
var count__18349_18570 = (0);
var i__18350_18571 = (0);
while(true){
if((i__18350_18571 < count__18349_18570)){
var map__18354_18572 = chunk__18348_18569.cljs$core$IIndexed$_nth$arity$2(null,i__18350_18571);
var map__18354_18573__$1 = cljs.core.__destructure_map(map__18354_18572);
var task_18574 = map__18354_18573__$1;
var fn_str_18575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18354_18573__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18354_18573__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18577 = goog.getObjectByName(fn_str_18575,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18576)));

(fn_obj_18577.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18577.cljs$core$IFn$_invoke$arity$2(path,new_link_18567) : fn_obj_18577.call(null,path,new_link_18567));


var G__18578 = seq__18346_18568;
var G__18579 = chunk__18348_18569;
var G__18580 = count__18349_18570;
var G__18581 = (i__18350_18571 + (1));
seq__18346_18568 = G__18578;
chunk__18348_18569 = G__18579;
count__18349_18570 = G__18580;
i__18350_18571 = G__18581;
continue;
} else {
var temp__5823__auto___18582 = cljs.core.seq(seq__18346_18568);
if(temp__5823__auto___18582){
var seq__18346_18583__$1 = temp__5823__auto___18582;
if(cljs.core.chunked_seq_QMARK_(seq__18346_18583__$1)){
var c__5694__auto___18584 = cljs.core.chunk_first(seq__18346_18583__$1);
var G__18585 = cljs.core.chunk_rest(seq__18346_18583__$1);
var G__18586 = c__5694__auto___18584;
var G__18587 = cljs.core.count(c__5694__auto___18584);
var G__18588 = (0);
seq__18346_18568 = G__18585;
chunk__18348_18569 = G__18586;
count__18349_18570 = G__18587;
i__18350_18571 = G__18588;
continue;
} else {
var map__18355_18589 = cljs.core.first(seq__18346_18583__$1);
var map__18355_18590__$1 = cljs.core.__destructure_map(map__18355_18589);
var task_18591 = map__18355_18590__$1;
var fn_str_18592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18355_18590__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18355_18590__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18594 = goog.getObjectByName(fn_str_18592,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18593)));

(fn_obj_18594.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18594.cljs$core$IFn$_invoke$arity$2(path,new_link_18567) : fn_obj_18594.call(null,path,new_link_18567));


var G__18595 = cljs.core.next(seq__18346_18583__$1);
var G__18596 = null;
var G__18597 = (0);
var G__18598 = (0);
seq__18346_18568 = G__18595;
chunk__18348_18569 = G__18596;
count__18349_18570 = G__18597;
i__18350_18571 = G__18598;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18565);
});})(seq__18313_18561,chunk__18317_18562,count__18318_18563,i__18319_18564,seq__18150,chunk__18152,count__18153,i__18154,new_link_18567,path_match_18566,node_18565,path,map__18148,map__18148__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18566], 0));

goog.dom.insertSiblingAfter(new_link_18567,node_18565);


var G__18599 = seq__18313_18561;
var G__18600 = chunk__18317_18562;
var G__18601 = count__18318_18563;
var G__18602 = (i__18319_18564 + (1));
seq__18313_18561 = G__18599;
chunk__18317_18562 = G__18600;
count__18318_18563 = G__18601;
i__18319_18564 = G__18602;
continue;
} else {
var G__18603 = seq__18313_18561;
var G__18604 = chunk__18317_18562;
var G__18605 = count__18318_18563;
var G__18606 = (i__18319_18564 + (1));
seq__18313_18561 = G__18603;
chunk__18317_18562 = G__18604;
count__18318_18563 = G__18605;
i__18319_18564 = G__18606;
continue;
}
} else {
var G__18607 = seq__18313_18561;
var G__18608 = chunk__18317_18562;
var G__18609 = count__18318_18563;
var G__18610 = (i__18319_18564 + (1));
seq__18313_18561 = G__18607;
chunk__18317_18562 = G__18608;
count__18318_18563 = G__18609;
i__18319_18564 = G__18610;
continue;
}
} else {
var temp__5823__auto___18611 = cljs.core.seq(seq__18313_18561);
if(temp__5823__auto___18611){
var seq__18313_18612__$1 = temp__5823__auto___18611;
if(cljs.core.chunked_seq_QMARK_(seq__18313_18612__$1)){
var c__5694__auto___18613 = cljs.core.chunk_first(seq__18313_18612__$1);
var G__18614 = cljs.core.chunk_rest(seq__18313_18612__$1);
var G__18615 = c__5694__auto___18613;
var G__18616 = cljs.core.count(c__5694__auto___18613);
var G__18617 = (0);
seq__18313_18561 = G__18614;
chunk__18317_18562 = G__18615;
count__18318_18563 = G__18616;
i__18319_18564 = G__18617;
continue;
} else {
var node_18618 = cljs.core.first(seq__18313_18612__$1);
if(cljs.core.not(node_18618.shadow$old)){
var path_match_18619 = shadow.cljs.devtools.client.browser.match_paths(node_18618.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18619)){
var new_link_18620 = (function (){var G__18356 = node_18618.cloneNode(true);
G__18356.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18619)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__18356;
})();
(node_18618.shadow$old = true);

(new_link_18620.onload = ((function (seq__18313_18561,chunk__18317_18562,count__18318_18563,i__18319_18564,seq__18150,chunk__18152,count__18153,i__18154,new_link_18620,path_match_18619,node_18618,seq__18313_18612__$1,temp__5823__auto___18611,path,map__18148,map__18148__$1,msg,updates,reload_info){
return (function (e){
var seq__18357_18621 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18359_18622 = null;
var count__18360_18623 = (0);
var i__18361_18624 = (0);
while(true){
if((i__18361_18624 < count__18360_18623)){
var map__18365_18625 = chunk__18359_18622.cljs$core$IIndexed$_nth$arity$2(null,i__18361_18624);
var map__18365_18626__$1 = cljs.core.__destructure_map(map__18365_18625);
var task_18627 = map__18365_18626__$1;
var fn_str_18628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18365_18626__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18365_18626__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18630 = goog.getObjectByName(fn_str_18628,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18629)));

(fn_obj_18630.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18630.cljs$core$IFn$_invoke$arity$2(path,new_link_18620) : fn_obj_18630.call(null,path,new_link_18620));


var G__18631 = seq__18357_18621;
var G__18632 = chunk__18359_18622;
var G__18633 = count__18360_18623;
var G__18634 = (i__18361_18624 + (1));
seq__18357_18621 = G__18631;
chunk__18359_18622 = G__18632;
count__18360_18623 = G__18633;
i__18361_18624 = G__18634;
continue;
} else {
var temp__5823__auto___18635__$1 = cljs.core.seq(seq__18357_18621);
if(temp__5823__auto___18635__$1){
var seq__18357_18636__$1 = temp__5823__auto___18635__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18357_18636__$1)){
var c__5694__auto___18637 = cljs.core.chunk_first(seq__18357_18636__$1);
var G__18638 = cljs.core.chunk_rest(seq__18357_18636__$1);
var G__18639 = c__5694__auto___18637;
var G__18640 = cljs.core.count(c__5694__auto___18637);
var G__18641 = (0);
seq__18357_18621 = G__18638;
chunk__18359_18622 = G__18639;
count__18360_18623 = G__18640;
i__18361_18624 = G__18641;
continue;
} else {
var map__18366_18642 = cljs.core.first(seq__18357_18636__$1);
var map__18366_18643__$1 = cljs.core.__destructure_map(map__18366_18642);
var task_18644 = map__18366_18643__$1;
var fn_str_18645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18366_18643__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18366_18643__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18647 = goog.getObjectByName(fn_str_18645,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18646)));

(fn_obj_18647.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18647.cljs$core$IFn$_invoke$arity$2(path,new_link_18620) : fn_obj_18647.call(null,path,new_link_18620));


var G__18648 = cljs.core.next(seq__18357_18636__$1);
var G__18649 = null;
var G__18650 = (0);
var G__18651 = (0);
seq__18357_18621 = G__18648;
chunk__18359_18622 = G__18649;
count__18360_18623 = G__18650;
i__18361_18624 = G__18651;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18618);
});})(seq__18313_18561,chunk__18317_18562,count__18318_18563,i__18319_18564,seq__18150,chunk__18152,count__18153,i__18154,new_link_18620,path_match_18619,node_18618,seq__18313_18612__$1,temp__5823__auto___18611,path,map__18148,map__18148__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18619], 0));

goog.dom.insertSiblingAfter(new_link_18620,node_18618);


var G__18652 = cljs.core.next(seq__18313_18612__$1);
var G__18653 = null;
var G__18654 = (0);
var G__18655 = (0);
seq__18313_18561 = G__18652;
chunk__18317_18562 = G__18653;
count__18318_18563 = G__18654;
i__18319_18564 = G__18655;
continue;
} else {
var G__18656 = cljs.core.next(seq__18313_18612__$1);
var G__18657 = null;
var G__18658 = (0);
var G__18659 = (0);
seq__18313_18561 = G__18656;
chunk__18317_18562 = G__18657;
count__18318_18563 = G__18658;
i__18319_18564 = G__18659;
continue;
}
} else {
var G__18660 = cljs.core.next(seq__18313_18612__$1);
var G__18661 = null;
var G__18662 = (0);
var G__18663 = (0);
seq__18313_18561 = G__18660;
chunk__18317_18562 = G__18661;
count__18318_18563 = G__18662;
i__18319_18564 = G__18663;
continue;
}
}
} else {
}
}
break;
}


var G__18664 = seq__18150;
var G__18665 = chunk__18152;
var G__18666 = count__18153;
var G__18667 = (i__18154 + (1));
seq__18150 = G__18664;
chunk__18152 = G__18665;
count__18153 = G__18666;
i__18154 = G__18667;
continue;
} else {
var G__18668 = seq__18150;
var G__18669 = chunk__18152;
var G__18670 = count__18153;
var G__18671 = (i__18154 + (1));
seq__18150 = G__18668;
chunk__18152 = G__18669;
count__18153 = G__18670;
i__18154 = G__18671;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18150);
if(temp__5823__auto__){
var seq__18150__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18150__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__18150__$1);
var G__18672 = cljs.core.chunk_rest(seq__18150__$1);
var G__18673 = c__5694__auto__;
var G__18674 = cljs.core.count(c__5694__auto__);
var G__18675 = (0);
seq__18150 = G__18672;
chunk__18152 = G__18673;
count__18153 = G__18674;
i__18154 = G__18675;
continue;
} else {
var path = cljs.core.first(seq__18150__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18367_18676 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18371_18677 = null;
var count__18372_18678 = (0);
var i__18373_18679 = (0);
while(true){
if((i__18373_18679 < count__18372_18678)){
var node_18680 = chunk__18371_18677.cljs$core$IIndexed$_nth$arity$2(null,i__18373_18679);
if(cljs.core.not(node_18680.shadow$old)){
var path_match_18681 = shadow.cljs.devtools.client.browser.match_paths(node_18680.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18681)){
var new_link_18682 = (function (){var G__18429 = node_18680.cloneNode(true);
G__18429.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18681)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__18429;
})();
(node_18680.shadow$old = true);

(new_link_18682.onload = ((function (seq__18367_18676,chunk__18371_18677,count__18372_18678,i__18373_18679,seq__18150,chunk__18152,count__18153,i__18154,new_link_18682,path_match_18681,node_18680,path,seq__18150__$1,temp__5823__auto__,map__18148,map__18148__$1,msg,updates,reload_info){
return (function (e){
var seq__18430_18683 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18432_18684 = null;
var count__18433_18685 = (0);
var i__18434_18686 = (0);
while(true){
if((i__18434_18686 < count__18433_18685)){
var map__18451_18687 = chunk__18432_18684.cljs$core$IIndexed$_nth$arity$2(null,i__18434_18686);
var map__18451_18688__$1 = cljs.core.__destructure_map(map__18451_18687);
var task_18689 = map__18451_18688__$1;
var fn_str_18690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451_18688__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451_18688__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18692 = goog.getObjectByName(fn_str_18690,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18691)));

(fn_obj_18692.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18692.cljs$core$IFn$_invoke$arity$2(path,new_link_18682) : fn_obj_18692.call(null,path,new_link_18682));


var G__18693 = seq__18430_18683;
var G__18694 = chunk__18432_18684;
var G__18695 = count__18433_18685;
var G__18696 = (i__18434_18686 + (1));
seq__18430_18683 = G__18693;
chunk__18432_18684 = G__18694;
count__18433_18685 = G__18695;
i__18434_18686 = G__18696;
continue;
} else {
var temp__5823__auto___18697__$1 = cljs.core.seq(seq__18430_18683);
if(temp__5823__auto___18697__$1){
var seq__18430_18698__$1 = temp__5823__auto___18697__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18430_18698__$1)){
var c__5694__auto___18699 = cljs.core.chunk_first(seq__18430_18698__$1);
var G__18700 = cljs.core.chunk_rest(seq__18430_18698__$1);
var G__18701 = c__5694__auto___18699;
var G__18702 = cljs.core.count(c__5694__auto___18699);
var G__18703 = (0);
seq__18430_18683 = G__18700;
chunk__18432_18684 = G__18701;
count__18433_18685 = G__18702;
i__18434_18686 = G__18703;
continue;
} else {
var map__18456_18704 = cljs.core.first(seq__18430_18698__$1);
var map__18456_18705__$1 = cljs.core.__destructure_map(map__18456_18704);
var task_18706 = map__18456_18705__$1;
var fn_str_18707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18456_18705__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18456_18705__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18709 = goog.getObjectByName(fn_str_18707,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18708)));

(fn_obj_18709.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18709.cljs$core$IFn$_invoke$arity$2(path,new_link_18682) : fn_obj_18709.call(null,path,new_link_18682));


var G__18710 = cljs.core.next(seq__18430_18698__$1);
var G__18711 = null;
var G__18712 = (0);
var G__18713 = (0);
seq__18430_18683 = G__18710;
chunk__18432_18684 = G__18711;
count__18433_18685 = G__18712;
i__18434_18686 = G__18713;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18680);
});})(seq__18367_18676,chunk__18371_18677,count__18372_18678,i__18373_18679,seq__18150,chunk__18152,count__18153,i__18154,new_link_18682,path_match_18681,node_18680,path,seq__18150__$1,temp__5823__auto__,map__18148,map__18148__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18681], 0));

goog.dom.insertSiblingAfter(new_link_18682,node_18680);


var G__18714 = seq__18367_18676;
var G__18715 = chunk__18371_18677;
var G__18716 = count__18372_18678;
var G__18717 = (i__18373_18679 + (1));
seq__18367_18676 = G__18714;
chunk__18371_18677 = G__18715;
count__18372_18678 = G__18716;
i__18373_18679 = G__18717;
continue;
} else {
var G__18718 = seq__18367_18676;
var G__18719 = chunk__18371_18677;
var G__18720 = count__18372_18678;
var G__18721 = (i__18373_18679 + (1));
seq__18367_18676 = G__18718;
chunk__18371_18677 = G__18719;
count__18372_18678 = G__18720;
i__18373_18679 = G__18721;
continue;
}
} else {
var G__18722 = seq__18367_18676;
var G__18723 = chunk__18371_18677;
var G__18724 = count__18372_18678;
var G__18725 = (i__18373_18679 + (1));
seq__18367_18676 = G__18722;
chunk__18371_18677 = G__18723;
count__18372_18678 = G__18724;
i__18373_18679 = G__18725;
continue;
}
} else {
var temp__5823__auto___18726__$1 = cljs.core.seq(seq__18367_18676);
if(temp__5823__auto___18726__$1){
var seq__18367_18727__$1 = temp__5823__auto___18726__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18367_18727__$1)){
var c__5694__auto___18728 = cljs.core.chunk_first(seq__18367_18727__$1);
var G__18729 = cljs.core.chunk_rest(seq__18367_18727__$1);
var G__18730 = c__5694__auto___18728;
var G__18731 = cljs.core.count(c__5694__auto___18728);
var G__18732 = (0);
seq__18367_18676 = G__18729;
chunk__18371_18677 = G__18730;
count__18372_18678 = G__18731;
i__18373_18679 = G__18732;
continue;
} else {
var node_18733 = cljs.core.first(seq__18367_18727__$1);
if(cljs.core.not(node_18733.shadow$old)){
var path_match_18734 = shadow.cljs.devtools.client.browser.match_paths(node_18733.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18734)){
var new_link_18735 = (function (){var G__18461 = node_18733.cloneNode(true);
G__18461.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18734)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__18461;
})();
(node_18733.shadow$old = true);

(new_link_18735.onload = ((function (seq__18367_18676,chunk__18371_18677,count__18372_18678,i__18373_18679,seq__18150,chunk__18152,count__18153,i__18154,new_link_18735,path_match_18734,node_18733,seq__18367_18727__$1,temp__5823__auto___18726__$1,path,seq__18150__$1,temp__5823__auto__,map__18148,map__18148__$1,msg,updates,reload_info){
return (function (e){
var seq__18462_18736 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18464_18737 = null;
var count__18465_18738 = (0);
var i__18466_18739 = (0);
while(true){
if((i__18466_18739 < count__18465_18738)){
var map__18470_18740 = chunk__18464_18737.cljs$core$IIndexed$_nth$arity$2(null,i__18466_18739);
var map__18470_18741__$1 = cljs.core.__destructure_map(map__18470_18740);
var task_18742 = map__18470_18741__$1;
var fn_str_18743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470_18741__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18470_18741__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18745 = goog.getObjectByName(fn_str_18743,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18744)));

(fn_obj_18745.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18745.cljs$core$IFn$_invoke$arity$2(path,new_link_18735) : fn_obj_18745.call(null,path,new_link_18735));


var G__18746 = seq__18462_18736;
var G__18747 = chunk__18464_18737;
var G__18748 = count__18465_18738;
var G__18749 = (i__18466_18739 + (1));
seq__18462_18736 = G__18746;
chunk__18464_18737 = G__18747;
count__18465_18738 = G__18748;
i__18466_18739 = G__18749;
continue;
} else {
var temp__5823__auto___18750__$2 = cljs.core.seq(seq__18462_18736);
if(temp__5823__auto___18750__$2){
var seq__18462_18751__$1 = temp__5823__auto___18750__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18462_18751__$1)){
var c__5694__auto___18752 = cljs.core.chunk_first(seq__18462_18751__$1);
var G__18753 = cljs.core.chunk_rest(seq__18462_18751__$1);
var G__18754 = c__5694__auto___18752;
var G__18755 = cljs.core.count(c__5694__auto___18752);
var G__18756 = (0);
seq__18462_18736 = G__18753;
chunk__18464_18737 = G__18754;
count__18465_18738 = G__18755;
i__18466_18739 = G__18756;
continue;
} else {
var map__18471_18757 = cljs.core.first(seq__18462_18751__$1);
var map__18471_18758__$1 = cljs.core.__destructure_map(map__18471_18757);
var task_18759 = map__18471_18758__$1;
var fn_str_18760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471_18758__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471_18758__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18762 = goog.getObjectByName(fn_str_18760,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18761)));

(fn_obj_18762.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18762.cljs$core$IFn$_invoke$arity$2(path,new_link_18735) : fn_obj_18762.call(null,path,new_link_18735));


var G__18763 = cljs.core.next(seq__18462_18751__$1);
var G__18764 = null;
var G__18765 = (0);
var G__18766 = (0);
seq__18462_18736 = G__18763;
chunk__18464_18737 = G__18764;
count__18465_18738 = G__18765;
i__18466_18739 = G__18766;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18733);
});})(seq__18367_18676,chunk__18371_18677,count__18372_18678,i__18373_18679,seq__18150,chunk__18152,count__18153,i__18154,new_link_18735,path_match_18734,node_18733,seq__18367_18727__$1,temp__5823__auto___18726__$1,path,seq__18150__$1,temp__5823__auto__,map__18148,map__18148__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18734], 0));

goog.dom.insertSiblingAfter(new_link_18735,node_18733);


var G__18767 = cljs.core.next(seq__18367_18727__$1);
var G__18768 = null;
var G__18769 = (0);
var G__18770 = (0);
seq__18367_18676 = G__18767;
chunk__18371_18677 = G__18768;
count__18372_18678 = G__18769;
i__18373_18679 = G__18770;
continue;
} else {
var G__18771 = cljs.core.next(seq__18367_18727__$1);
var G__18772 = null;
var G__18773 = (0);
var G__18774 = (0);
seq__18367_18676 = G__18771;
chunk__18371_18677 = G__18772;
count__18372_18678 = G__18773;
i__18373_18679 = G__18774;
continue;
}
} else {
var G__18775 = cljs.core.next(seq__18367_18727__$1);
var G__18776 = null;
var G__18777 = (0);
var G__18778 = (0);
seq__18367_18676 = G__18775;
chunk__18371_18677 = G__18776;
count__18372_18678 = G__18777;
i__18373_18679 = G__18778;
continue;
}
}
} else {
}
}
break;
}


var G__18779 = cljs.core.next(seq__18150__$1);
var G__18780 = null;
var G__18781 = (0);
var G__18782 = (0);
seq__18150 = G__18779;
chunk__18152 = G__18780;
count__18153 = G__18781;
i__18154 = G__18782;
continue;
} else {
var G__18783 = cljs.core.next(seq__18150__$1);
var G__18784 = null;
var G__18785 = (0);
var G__18786 = (0);
seq__18150 = G__18783;
chunk__18152 = G__18784;
count__18153 = G__18785;
i__18154 = G__18786;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),navigator.userAgent,new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__18473 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__18473) : success.call(null,G__18473));
}catch (e18472){var e = e18472;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__18474,success,fail){
var map__18475 = p__18474;
var map__18475__$1 = cljs.core.__destructure_map(map__18475);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18475__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__18477 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__18477) : success.call(null,G__18477));
}catch (e18476){var e = e18476;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18478,done,error){
var map__18479 = p__18478;
var map__18479__$1 = cljs.core.__destructure_map(map__18479);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18479__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18480,done,error){
var map__18481 = p__18480;
var map__18481__$1 = cljs.core.__destructure_map(map__18481);
var msg = map__18481__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18482){
var map__18483 = p__18482;
var map__18483__$1 = cljs.core.__destructure_map(map__18483);
var src = map__18483__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18483__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18484 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18484) : done.call(null,G__18484));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18485){
var map__18486 = p__18485;
var map__18486__$1 = cljs.core.__destructure_map(map__18486);
var msg__$1 = map__18486__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18486__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e18487){var ex = e18487;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18488){
var map__18489 = p__18488;
var map__18489__$1 = cljs.core.__destructure_map(map__18489);
var env = map__18489__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18489__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18490){
var map__18491 = p__18490;
var map__18491__$1 = cljs.core.__destructure_map(map__18491);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18492){
var map__18493 = p__18492;
var map__18493__$1 = cljs.core.__destructure_map(map__18493);
var svc = map__18493__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18493__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
