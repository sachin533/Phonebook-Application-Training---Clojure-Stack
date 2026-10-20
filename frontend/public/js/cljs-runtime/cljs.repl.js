goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16006){
var map__16007 = p__16006;
var map__16007__$1 = cljs.core.__destructure_map(map__16007);
var m = map__16007__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16007__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16013_16365 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16014_16366 = null;
var count__16015_16367 = (0);
var i__16016_16368 = (0);
while(true){
if((i__16016_16368 < count__16015_16367)){
var f_16369 = chunk__16014_16366.cljs$core$IIndexed$_nth$arity$2(null,i__16016_16368);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16369], 0));


var G__16370 = seq__16013_16365;
var G__16371 = chunk__16014_16366;
var G__16372 = count__16015_16367;
var G__16373 = (i__16016_16368 + (1));
seq__16013_16365 = G__16370;
chunk__16014_16366 = G__16371;
count__16015_16367 = G__16372;
i__16016_16368 = G__16373;
continue;
} else {
var temp__5823__auto___16374 = cljs.core.seq(seq__16013_16365);
if(temp__5823__auto___16374){
var seq__16013_16375__$1 = temp__5823__auto___16374;
if(cljs.core.chunked_seq_QMARK_(seq__16013_16375__$1)){
var c__5694__auto___16376 = cljs.core.chunk_first(seq__16013_16375__$1);
var G__16377 = cljs.core.chunk_rest(seq__16013_16375__$1);
var G__16378 = c__5694__auto___16376;
var G__16379 = cljs.core.count(c__5694__auto___16376);
var G__16380 = (0);
seq__16013_16365 = G__16377;
chunk__16014_16366 = G__16378;
count__16015_16367 = G__16379;
i__16016_16368 = G__16380;
continue;
} else {
var f_16383 = cljs.core.first(seq__16013_16375__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16383], 0));


var G__16386 = cljs.core.next(seq__16013_16375__$1);
var G__16387 = null;
var G__16388 = (0);
var G__16389 = (0);
seq__16013_16365 = G__16386;
chunk__16014_16366 = G__16387;
count__16015_16367 = G__16388;
i__16016_16368 = G__16389;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16390 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_16390], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_16390)))?cljs.core.second(arglists_16390):arglists_16390)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16050_16391 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16051_16392 = null;
var count__16052_16393 = (0);
var i__16053_16394 = (0);
while(true){
if((i__16053_16394 < count__16052_16393)){
var vec__16075_16395 = chunk__16051_16392.cljs$core$IIndexed$_nth$arity$2(null,i__16053_16394);
var name_16396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16075_16395,(0),null);
var map__16078_16397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16075_16395,(1),null);
var map__16078_16398__$1 = cljs.core.__destructure_map(map__16078_16397);
var doc_16399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16078_16398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16078_16398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16396], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16400], 0));

if(cljs.core.truth_(doc_16399)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16399], 0));
} else {
}


var G__16401 = seq__16050_16391;
var G__16402 = chunk__16051_16392;
var G__16403 = count__16052_16393;
var G__16404 = (i__16053_16394 + (1));
seq__16050_16391 = G__16401;
chunk__16051_16392 = G__16402;
count__16052_16393 = G__16403;
i__16053_16394 = G__16404;
continue;
} else {
var temp__5823__auto___16405 = cljs.core.seq(seq__16050_16391);
if(temp__5823__auto___16405){
var seq__16050_16406__$1 = temp__5823__auto___16405;
if(cljs.core.chunked_seq_QMARK_(seq__16050_16406__$1)){
var c__5694__auto___16407 = cljs.core.chunk_first(seq__16050_16406__$1);
var G__16408 = cljs.core.chunk_rest(seq__16050_16406__$1);
var G__16409 = c__5694__auto___16407;
var G__16410 = cljs.core.count(c__5694__auto___16407);
var G__16411 = (0);
seq__16050_16391 = G__16408;
chunk__16051_16392 = G__16409;
count__16052_16393 = G__16410;
i__16053_16394 = G__16411;
continue;
} else {
var vec__16092_16413 = cljs.core.first(seq__16050_16406__$1);
var name_16414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16092_16413,(0),null);
var map__16095_16415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16092_16413,(1),null);
var map__16095_16416__$1 = cljs.core.__destructure_map(map__16095_16415);
var doc_16417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16095_16416__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16095_16416__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16414], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16418], 0));

if(cljs.core.truth_(doc_16417)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16417], 0));
} else {
}


var G__16419 = cljs.core.next(seq__16050_16406__$1);
var G__16420 = null;
var G__16421 = (0);
var G__16422 = (0);
seq__16050_16391 = G__16419;
chunk__16051_16392 = G__16420;
count__16052_16393 = G__16421;
i__16053_16394 = G__16422;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__16097 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16098 = null;
var count__16099 = (0);
var i__16100 = (0);
while(true){
if((i__16100 < count__16099)){
var role = chunk__16098.cljs$core$IIndexed$_nth$arity$2(null,i__16100);
var temp__5823__auto___16427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___16427__$1)){
var spec_16428 = temp__5823__auto___16427__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_16428)], 0));
} else {
}


var G__16429 = seq__16097;
var G__16430 = chunk__16098;
var G__16431 = count__16099;
var G__16432 = (i__16100 + (1));
seq__16097 = G__16429;
chunk__16098 = G__16430;
count__16099 = G__16431;
i__16100 = G__16432;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__16097);
if(temp__5823__auto____$1){
var seq__16097__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__16097__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__16097__$1);
var G__16433 = cljs.core.chunk_rest(seq__16097__$1);
var G__16434 = c__5694__auto__;
var G__16435 = cljs.core.count(c__5694__auto__);
var G__16436 = (0);
seq__16097 = G__16433;
chunk__16098 = G__16434;
count__16099 = G__16435;
i__16100 = G__16436;
continue;
} else {
var role = cljs.core.first(seq__16097__$1);
var temp__5823__auto___16437__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___16437__$2)){
var spec_16438 = temp__5823__auto___16437__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_16438)], 0));
} else {
}


var G__16439 = cljs.core.next(seq__16097__$1);
var G__16440 = null;
var G__16441 = (0);
var G__16442 = (0);
seq__16097 = G__16439;
chunk__16098 = G__16440;
count__16099 = G__16441;
i__16100 = G__16442;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__16137 = datafied_throwable;
var map__16137__$1 = cljs.core.__destructure_map(map__16137);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16137__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16137__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16137__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16138 = cljs.core.last(via);
var map__16138__$1 = cljs.core.__destructure_map(map__16138);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16138__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16138__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16138__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16139 = data;
var map__16139__$1 = cljs.core.__destructure_map(map__16139);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16139__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16139__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16139__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16140 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__16140__$1 = cljs.core.__destructure_map(map__16140);
var top_data = map__16140__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16140__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__16148 = phase;
var G__16148__$1 = (((G__16148 instanceof cljs.core.Keyword))?G__16148.fqn:null);
switch (G__16148__$1) {
case "read-source":
var map__16157 = data;
var map__16157__$1 = cljs.core.__destructure_map(map__16157);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16157__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16157__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16158 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__16158__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16158,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16158);
var G__16158__$2 = (cljs.core.truth_((function (){var fexpr__16172 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16172.cljs$core$IFn$_invoke$arity$1 ? fexpr__16172.cljs$core$IFn$_invoke$arity$1(source) : fexpr__16172.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16158__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16158__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16158__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16173 = top_data;
var G__16173__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16173,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16173);
var G__16173__$2 = (cljs.core.truth_((function (){var fexpr__16177 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16177.cljs$core$IFn$_invoke$arity$1 ? fexpr__16177.cljs$core$IFn$_invoke$arity$1(source) : fexpr__16177.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16173__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16173__$1);
var G__16173__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16173__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16173__$2);
var G__16173__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16173__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16173__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16173__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16173__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16182 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182,(3),null);
var G__16188 = top_data;
var G__16188__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16188,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16188);
var G__16188__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16188__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16188__$1);
var G__16188__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16188__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16188__$2);
var G__16188__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16188__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16188__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16188__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16188__$4;
}

break;
case "execution":
var vec__16202 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16202,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16135_SHARP_){
var or__5162__auto__ = (p1__16135_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__16214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16214.cljs$core$IFn$_invoke$arity$1 ? fexpr__16214.cljs$core$IFn$_invoke$arity$1(p1__16135_SHARP_) : fexpr__16214.call(null,p1__16135_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__16233 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16233__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16233,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16233);
var G__16233__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16233__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16233__$1);
var G__16233__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16233__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16233__$2);
var G__16233__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16233__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16233__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16233__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16233__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16148__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16261){
var map__16266 = p__16261;
var map__16266__$1 = cljs.core.__destructure_map(map__16266);
var triage_data = map__16266__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__16293 = phase;
var G__16293__$1 = (((G__16293 instanceof cljs.core.Keyword))?G__16293.fqn:null);
switch (G__16293__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__16294 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__16295 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__16296 = loc;
var G__16297 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16307_16497 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16308_16498 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16309_16499 = true;
var _STAR_print_fn_STAR__temp_val__16310_16500 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16309_16499);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16310_16500);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16257_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16257_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16308_16498);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16307_16497);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__16294,G__16295,G__16296,G__16297) : format.call(null,G__16294,G__16295,G__16296,G__16297));

break;
case "macroexpansion":
var G__16320 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__16321 = cause_type;
var G__16322 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__16323 = loc;
var G__16324 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16320,G__16321,G__16322,G__16323,G__16324) : format.call(null,G__16320,G__16321,G__16322,G__16323,G__16324));

break;
case "compile-syntax-check":
var G__16329 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__16330 = cause_type;
var G__16331 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__16332 = loc;
var G__16333 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16329,G__16330,G__16331,G__16332,G__16333) : format.call(null,G__16329,G__16330,G__16331,G__16332,G__16333));

break;
case "compilation":
var G__16334 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__16335 = cause_type;
var G__16336 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__16337 = loc;
var G__16338 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16334,G__16335,G__16336,G__16337,G__16338) : format.call(null,G__16334,G__16335,G__16336,G__16337,G__16338));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__16348 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__16349 = symbol;
var G__16350 = loc;
var G__16351 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16352_16508 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16353_16509 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16354_16510 = true;
var _STAR_print_fn_STAR__temp_val__16355_16511 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16354_16510);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16355_16511);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16259_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16259_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16353_16509);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16352_16508);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__16348,G__16349,G__16350,G__16351) : format.call(null,G__16348,G__16349,G__16350,G__16351));
} else {
var G__16356 = "Execution error%s at %s(%s).\n%s\n";
var G__16357 = cause_type;
var G__16358 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__16359 = loc;
var G__16360 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16356,G__16357,G__16358,G__16359,G__16360) : format.call(null,G__16356,G__16357,G__16358,G__16359,G__16360));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16293__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
