goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7756__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7757__i = 0, G__7757__a = new Array(arguments.length -  0);
while (G__7757__i < G__7757__a.length) {G__7757__a[G__7757__i] = arguments[G__7757__i + 0]; ++G__7757__i;}
  args = new cljs.core.IndexedSeq(G__7757__a,0,null);
} 
return G__7756__delegate.call(this,args);};
G__7756.cljs$lang$maxFixedArity = 0;
G__7756.cljs$lang$applyTo = (function (arglist__7758){
var args = cljs.core.seq(arglist__7758);
return G__7756__delegate(args);
});
G__7756.cljs$core$IFn$_invoke$arity$variadic = G__7756__delegate;
return G__7756;
})()
);

(o.error = (function() { 
var G__7759__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7760__i = 0, G__7760__a = new Array(arguments.length -  0);
while (G__7760__i < G__7760__a.length) {G__7760__a[G__7760__i] = arguments[G__7760__i + 0]; ++G__7760__i;}
  args = new cljs.core.IndexedSeq(G__7760__a,0,null);
} 
return G__7759__delegate.call(this,args);};
G__7759.cljs$lang$maxFixedArity = 0;
G__7759.cljs$lang$applyTo = (function (arglist__7762){
var args = cljs.core.seq(arglist__7762);
return G__7759__delegate(args);
});
G__7759.cljs$core$IFn$_invoke$arity$variadic = G__7759__delegate;
return G__7759;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
