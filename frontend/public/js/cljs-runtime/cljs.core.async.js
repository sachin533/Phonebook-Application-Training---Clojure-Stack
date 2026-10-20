goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12571 = (function (f,blockable,meta12572){
this.f = f;
this.blockable = blockable;
this.meta12572 = meta12572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12573,meta12572__$1){
var self__ = this;
var _12573__$1 = this;
return (new cljs.core.async.t_cljs$core$async12571(self__.f,self__.blockable,meta12572__$1));
}));

(cljs.core.async.t_cljs$core$async12571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12573){
var self__ = this;
var _12573__$1 = this;
return self__.meta12572;
}));

(cljs.core.async.t_cljs$core$async12571.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12572","meta12572",705024773,null)], null);
}));

(cljs.core.async.t_cljs$core$async12571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12571");

(cljs.core.async.t_cljs$core$async12571.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async12571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12571.
 */
cljs.core.async.__GT_t_cljs$core$async12571 = (function cljs$core$async$__GT_t_cljs$core$async12571(f,blockable,meta12572){
return (new cljs.core.async.t_cljs$core$async12571(f,blockable,meta12572));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12559 = arguments.length;
switch (G__12559) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async12571(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12605 = arguments.length;
switch (G__12605) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12615 = arguments.length;
switch (G__12615) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12628 = arguments.length;
switch (G__12628) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15297 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15297) : fn1.call(null,val_15297));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15297) : fn1.call(null,val_15297));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12652 = arguments.length;
switch (G__12652) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___15318 = n;
var x_15319 = (0);
while(true){
if((x_15319 < n__5762__auto___15318)){
(a[x_15319] = x_15319);

var G__15320 = (x_15319 + (1));
x_15319 = G__15320;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12665 = (function (flag,meta12666){
this.flag = flag;
this.meta12666 = meta12666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12667,meta12666__$1){
var self__ = this;
var _12667__$1 = this;
return (new cljs.core.async.t_cljs$core$async12665(self__.flag,meta12666__$1));
}));

(cljs.core.async.t_cljs$core$async12665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12667){
var self__ = this;
var _12667__$1 = this;
return self__.meta12666;
}));

(cljs.core.async.t_cljs$core$async12665.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12666","meta12666",326525980,null)], null);
}));

(cljs.core.async.t_cljs$core$async12665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12665");

(cljs.core.async.t_cljs$core$async12665.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async12665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12665.
 */
cljs.core.async.__GT_t_cljs$core$async12665 = (function cljs$core$async$__GT_t_cljs$core$async12665(flag,meta12666){
return (new cljs.core.async.t_cljs$core$async12665(flag,meta12666));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async12665(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12728 = (function (flag,cb,meta12729){
this.flag = flag;
this.cb = cb;
this.meta12729 = meta12729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12730,meta12729__$1){
var self__ = this;
var _12730__$1 = this;
return (new cljs.core.async.t_cljs$core$async12728(self__.flag,self__.cb,meta12729__$1));
}));

(cljs.core.async.t_cljs$core$async12728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12730){
var self__ = this;
var _12730__$1 = this;
return self__.meta12729;
}));

(cljs.core.async.t_cljs$core$async12728.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12728.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12729","meta12729",374571729,null)], null);
}));

(cljs.core.async.t_cljs$core$async12728.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12728");

(cljs.core.async.t_cljs$core$async12728.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async12728");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12728.
 */
cljs.core.async.__GT_t_cljs$core$async12728 = (function cljs$core$async$__GT_t_cljs$core$async12728(flag,cb,meta12729){
return (new cljs.core.async.t_cljs$core$async12728(flag,cb,meta12729));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async12728(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_15324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_15324)){
if((!(((port_15324.cljs$core$IFn$_invoke$arity$1 ? port_15324.cljs$core$IFn$_invoke$arity$1((1)) : port_15324.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__15325 = (i + (1));
i = G__15325;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__12748_SHARP_){
var G__12762 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12748_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12762) : fret.call(null,G__12762));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__12749_SHARP_){
var G__12763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12749_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12763) : fret.call(null,G__12763));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15333 = (i + (1));
i = G__15333;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___15336 = arguments.length;
var i__5898__auto___15337 = (0);
while(true){
if((i__5898__auto___15337 < len__5897__auto___15336)){
args__5903__auto__.push((arguments[i__5898__auto___15337]));

var G__15338 = (i__5898__auto___15337 + (1));
i__5898__auto___15337 = G__15338;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12772){
var map__12773 = p__12772;
var map__12773__$1 = cljs.core.__destructure_map(map__12773);
var opts = map__12773__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12768){
var G__12769 = cljs.core.first(seq12768);
var seq12768__$1 = cljs.core.next(seq12768);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12769,seq12768__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__12786 = arguments.length;
switch (G__12786) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12347__auto___15344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_12865){
var state_val_12866 = (state_12865[(1)]);
if((state_val_12866 === (7))){
var inst_12861 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
var statearr_12869_15345 = state_12865__$1;
(statearr_12869_15345[(2)] = inst_12861);

(statearr_12869_15345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (1))){
var state_12865__$1 = state_12865;
var statearr_12871_15346 = state_12865__$1;
(statearr_12871_15346[(2)] = null);

(statearr_12871_15346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (4))){
var inst_12819 = (state_12865[(7)]);
var inst_12819__$1 = (state_12865[(2)]);
var inst_12834 = (inst_12819__$1 == null);
var state_12865__$1 = (function (){var statearr_12872 = state_12865;
(statearr_12872[(7)] = inst_12819__$1);

return statearr_12872;
})();
if(cljs.core.truth_(inst_12834)){
var statearr_12873_15347 = state_12865__$1;
(statearr_12873_15347[(1)] = (5));

} else {
var statearr_12874_15348 = state_12865__$1;
(statearr_12874_15348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (13))){
var state_12865__$1 = state_12865;
var statearr_12875_15349 = state_12865__$1;
(statearr_12875_15349[(2)] = null);

(statearr_12875_15349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (6))){
var inst_12819 = (state_12865[(7)]);
var state_12865__$1 = state_12865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12865__$1,(11),to,inst_12819);
} else {
if((state_val_12866 === (3))){
var inst_12863 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12865__$1,inst_12863);
} else {
if((state_val_12866 === (12))){
var state_12865__$1 = state_12865;
var statearr_12895_15353 = state_12865__$1;
(statearr_12895_15353[(2)] = null);

(statearr_12895_15353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (2))){
var state_12865__$1 = state_12865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12865__$1,(4),from);
} else {
if((state_val_12866 === (11))){
var inst_12852 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
if(cljs.core.truth_(inst_12852)){
var statearr_12902_15362 = state_12865__$1;
(statearr_12902_15362[(1)] = (12));

} else {
var statearr_12903_15363 = state_12865__$1;
(statearr_12903_15363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (9))){
var state_12865__$1 = state_12865;
var statearr_12905_15364 = state_12865__$1;
(statearr_12905_15364[(2)] = null);

(statearr_12905_15364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (5))){
var state_12865__$1 = state_12865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12908_15365 = state_12865__$1;
(statearr_12908_15365[(1)] = (8));

} else {
var statearr_12909_15366 = state_12865__$1;
(statearr_12909_15366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (14))){
var inst_12859 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
var statearr_12934_15368 = state_12865__$1;
(statearr_12934_15368[(2)] = inst_12859);

(statearr_12934_15368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (10))){
var inst_12847 = (state_12865[(2)]);
var state_12865__$1 = state_12865;
var statearr_12935_15370 = state_12865__$1;
(statearr_12935_15370[(2)] = inst_12847);

(statearr_12935_15370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12866 === (8))){
var inst_12843 = cljs.core.async.close_BANG_(to);
var state_12865__$1 = state_12865;
var statearr_12945_15372 = state_12865__$1;
(statearr_12945_15372[(2)] = inst_12843);

(statearr_12945_15372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_12961 = [null,null,null,null,null,null,null,null];
(statearr_12961[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_12961[(1)] = (1));

return statearr_12961;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_12865){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_12865);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e12965){var ex__11904__auto__ = e12965;
var statearr_12966_15387 = state_12865;
(statearr_12966_15387[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_12865[(4)]))){
var statearr_12967_15388 = state_12865;
(statearr_12967_15388[(1)] = cljs.core.first((state_12865[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15389 = state_12865;
state_12865 = G__15389;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_12865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_12865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_12988 = f__12348__auto__();
(statearr_12988[(6)] = c__12347__auto___15344);

return statearr_12988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13003){
var vec__13004 = p__13003;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13004,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13004,(1),null);
var job = vec__13004;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12347__auto___15405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_13016){
var state_val_13017 = (state_13016[(1)]);
if((state_val_13017 === (1))){
var state_13016__$1 = state_13016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13016__$1,(2),res,v);
} else {
if((state_val_13017 === (2))){
var inst_13013 = (state_13016[(2)]);
var inst_13014 = cljs.core.async.close_BANG_(res);
var state_13016__$1 = (function (){var statearr_13024 = state_13016;
(statearr_13024[(7)] = inst_13013);

return statearr_13024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13016__$1,inst_13014);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0 = (function (){
var statearr_13026 = [null,null,null,null,null,null,null,null];
(statearr_13026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__);

(statearr_13026[(1)] = (1));

return statearr_13026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1 = (function (state_13016){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13016);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13027){var ex__11904__auto__ = e13027;
var statearr_13028_15415 = state_13016;
(statearr_13028_15415[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13016[(4)]))){
var statearr_13035_15416 = state_13016;
(statearr_13035_15416[(1)] = cljs.core.first((state_13016[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15419 = state_13016;
state_13016 = G__15419;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = function(state_13016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1.call(this,state_13016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_13037 = f__12348__auto__();
(statearr_13037[(6)] = c__12347__auto___15405);

return statearr_13037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13042){
var vec__13043 = p__13042;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13043,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13043,(1),null);
var job = vec__13043;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___15427 = n;
var __15428 = (0);
while(true){
if((__15428 < n__5762__auto___15427)){
var G__13046_15429 = type;
var G__13046_15430__$1 = (((G__13046_15429 instanceof cljs.core.Keyword))?G__13046_15429.fqn:null);
switch (G__13046_15430__$1) {
case "compute":
var c__12347__auto___15435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15428,c__12347__auto___15435,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async){
return (function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = ((function (__15428,c__12347__auto___15435,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async){
return (function (state_13066){
var state_val_13067 = (state_13066[(1)]);
if((state_val_13067 === (1))){
var state_13066__$1 = state_13066;
var statearr_13082_15437 = state_13066__$1;
(statearr_13082_15437[(2)] = null);

(statearr_13082_15437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (2))){
var state_13066__$1 = state_13066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13066__$1,(4),jobs);
} else {
if((state_val_13067 === (3))){
var inst_13063 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13066__$1,inst_13063);
} else {
if((state_val_13067 === (4))){
var inst_13055 = (state_13066[(2)]);
var inst_13056 = process__$1(inst_13055);
var state_13066__$1 = state_13066;
if(cljs.core.truth_(inst_13056)){
var statearr_13087_15445 = state_13066__$1;
(statearr_13087_15445[(1)] = (5));

} else {
var statearr_13088_15446 = state_13066__$1;
(statearr_13088_15446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (5))){
var state_13066__$1 = state_13066;
var statearr_13093_15449 = state_13066__$1;
(statearr_13093_15449[(2)] = null);

(statearr_13093_15449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (6))){
var state_13066__$1 = state_13066;
var statearr_13094_15450 = state_13066__$1;
(statearr_13094_15450[(2)] = null);

(statearr_13094_15450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (7))){
var inst_13061 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
var statearr_13098_15451 = state_13066__$1;
(statearr_13098_15451[(2)] = inst_13061);

(statearr_13098_15451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15428,c__12347__auto___15435,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async))
;
return ((function (__15428,switch__11900__auto__,c__12347__auto___15435,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0 = (function (){
var statearr_13099 = [null,null,null,null,null,null,null];
(statearr_13099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__);

(statearr_13099[(1)] = (1));

return statearr_13099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1 = (function (state_13066){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13066);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13103){var ex__11904__auto__ = e13103;
var statearr_13104_15457 = state_13066;
(statearr_13104_15457[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13066[(4)]))){
var statearr_13105_15458 = state_13066;
(statearr_13105_15458[(1)] = cljs.core.first((state_13066[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15459 = state_13066;
state_13066 = G__15459;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = function(state_13066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1.call(this,state_13066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__;
})()
;})(__15428,switch__11900__auto__,c__12347__auto___15435,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async))
})();
var state__12349__auto__ = (function (){var statearr_13107 = f__12348__auto__();
(statearr_13107[(6)] = c__12347__auto___15435);

return statearr_13107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
});})(__15428,c__12347__auto___15435,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async))
);


break;
case "async":
var c__12347__auto___15460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15428,c__12347__auto___15460,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async){
return (function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = ((function (__15428,c__12347__auto___15460,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async){
return (function (state_13120){
var state_val_13121 = (state_13120[(1)]);
if((state_val_13121 === (1))){
var state_13120__$1 = state_13120;
var statearr_13122_15462 = state_13120__$1;
(statearr_13122_15462[(2)] = null);

(statearr_13122_15462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (2))){
var state_13120__$1 = state_13120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13120__$1,(4),jobs);
} else {
if((state_val_13121 === (3))){
var inst_13118 = (state_13120[(2)]);
var state_13120__$1 = state_13120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13120__$1,inst_13118);
} else {
if((state_val_13121 === (4))){
var inst_13110 = (state_13120[(2)]);
var inst_13111 = async(inst_13110);
var state_13120__$1 = state_13120;
if(cljs.core.truth_(inst_13111)){
var statearr_13123_15470 = state_13120__$1;
(statearr_13123_15470[(1)] = (5));

} else {
var statearr_13124_15471 = state_13120__$1;
(statearr_13124_15471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (5))){
var state_13120__$1 = state_13120;
var statearr_13125_15476 = state_13120__$1;
(statearr_13125_15476[(2)] = null);

(statearr_13125_15476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (6))){
var state_13120__$1 = state_13120;
var statearr_13127_15477 = state_13120__$1;
(statearr_13127_15477[(2)] = null);

(statearr_13127_15477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (7))){
var inst_13116 = (state_13120[(2)]);
var state_13120__$1 = state_13120;
var statearr_13128_15479 = state_13120__$1;
(statearr_13128_15479[(2)] = inst_13116);

(statearr_13128_15479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15428,c__12347__auto___15460,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async))
;
return ((function (__15428,switch__11900__auto__,c__12347__auto___15460,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0 = (function (){
var statearr_13129 = [null,null,null,null,null,null,null];
(statearr_13129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__);

(statearr_13129[(1)] = (1));

return statearr_13129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1 = (function (state_13120){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13120);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13131){var ex__11904__auto__ = e13131;
var statearr_13132_15492 = state_13120;
(statearr_13132_15492[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13120[(4)]))){
var statearr_13133_15493 = state_13120;
(statearr_13133_15493[(1)] = cljs.core.first((state_13120[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15494 = state_13120;
state_13120 = G__15494;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = function(state_13120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1.call(this,state_13120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__;
})()
;})(__15428,switch__11900__auto__,c__12347__auto___15460,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async))
})();
var state__12349__auto__ = (function (){var statearr_13134 = f__12348__auto__();
(statearr_13134[(6)] = c__12347__auto___15460);

return statearr_13134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
});})(__15428,c__12347__auto___15460,G__13046_15429,G__13046_15430__$1,n__5762__auto___15427,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13046_15430__$1))));

}

var G__15497 = (__15428 + (1));
__15428 = G__15497;
continue;
} else {
}
break;
}

var c__12347__auto___15498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_13157){
var state_val_13158 = (state_13157[(1)]);
if((state_val_13158 === (7))){
var inst_13153 = (state_13157[(2)]);
var state_13157__$1 = state_13157;
var statearr_13159_15502 = state_13157__$1;
(statearr_13159_15502[(2)] = inst_13153);

(statearr_13159_15502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (1))){
var state_13157__$1 = state_13157;
var statearr_13160_15503 = state_13157__$1;
(statearr_13160_15503[(2)] = null);

(statearr_13160_15503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (4))){
var inst_13137 = (state_13157[(7)]);
var inst_13137__$1 = (state_13157[(2)]);
var inst_13138 = (inst_13137__$1 == null);
var state_13157__$1 = (function (){var statearr_13161 = state_13157;
(statearr_13161[(7)] = inst_13137__$1);

return statearr_13161;
})();
if(cljs.core.truth_(inst_13138)){
var statearr_13162_15506 = state_13157__$1;
(statearr_13162_15506[(1)] = (5));

} else {
var statearr_13163_15507 = state_13157__$1;
(statearr_13163_15507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (6))){
var inst_13137 = (state_13157[(7)]);
var inst_13142 = (state_13157[(8)]);
var inst_13142__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13144 = [inst_13137,inst_13142__$1];
var inst_13145 = (new cljs.core.PersistentVector(null,2,(5),inst_13143,inst_13144,null));
var state_13157__$1 = (function (){var statearr_13164 = state_13157;
(statearr_13164[(8)] = inst_13142__$1);

return statearr_13164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13157__$1,(8),jobs,inst_13145);
} else {
if((state_val_13158 === (3))){
var inst_13155 = (state_13157[(2)]);
var state_13157__$1 = state_13157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13157__$1,inst_13155);
} else {
if((state_val_13158 === (2))){
var state_13157__$1 = state_13157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13157__$1,(4),from);
} else {
if((state_val_13158 === (9))){
var inst_13150 = (state_13157[(2)]);
var state_13157__$1 = (function (){var statearr_13165 = state_13157;
(statearr_13165[(9)] = inst_13150);

return statearr_13165;
})();
var statearr_13166_15508 = state_13157__$1;
(statearr_13166_15508[(2)] = null);

(statearr_13166_15508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (5))){
var inst_13140 = cljs.core.async.close_BANG_(jobs);
var state_13157__$1 = state_13157;
var statearr_13167_15509 = state_13157__$1;
(statearr_13167_15509[(2)] = inst_13140);

(statearr_13167_15509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13158 === (8))){
var inst_13142 = (state_13157[(8)]);
var inst_13147 = (state_13157[(2)]);
var state_13157__$1 = (function (){var statearr_13168 = state_13157;
(statearr_13168[(10)] = inst_13147);

return statearr_13168;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13157__$1,(9),results,inst_13142);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0 = (function (){
var statearr_13171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__);

(statearr_13171[(1)] = (1));

return statearr_13171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1 = (function (state_13157){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13157);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13173){var ex__11904__auto__ = e13173;
var statearr_13174_15514 = state_13157;
(statearr_13174_15514[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13157[(4)]))){
var statearr_13175_15516 = state_13157;
(statearr_13175_15516[(1)] = cljs.core.first((state_13157[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15517 = state_13157;
state_13157 = G__15517;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = function(state_13157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1.call(this,state_13157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_13176 = f__12348__auto__();
(statearr_13176[(6)] = c__12347__auto___15498);

return statearr_13176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


var c__12347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_13230){
var state_val_13231 = (state_13230[(1)]);
if((state_val_13231 === (7))){
var inst_13226 = (state_13230[(2)]);
var state_13230__$1 = state_13230;
var statearr_13232_15518 = state_13230__$1;
(statearr_13232_15518[(2)] = inst_13226);

(statearr_13232_15518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (20))){
var state_13230__$1 = state_13230;
var statearr_13238_15519 = state_13230__$1;
(statearr_13238_15519[(2)] = null);

(statearr_13238_15519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (1))){
var state_13230__$1 = state_13230;
var statearr_13239_15520 = state_13230__$1;
(statearr_13239_15520[(2)] = null);

(statearr_13239_15520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (4))){
var inst_13187 = (state_13230[(7)]);
var inst_13187__$1 = (state_13230[(2)]);
var inst_13196 = (inst_13187__$1 == null);
var state_13230__$1 = (function (){var statearr_13240 = state_13230;
(statearr_13240[(7)] = inst_13187__$1);

return statearr_13240;
})();
if(cljs.core.truth_(inst_13196)){
var statearr_13241_15524 = state_13230__$1;
(statearr_13241_15524[(1)] = (5));

} else {
var statearr_13242_15525 = state_13230__$1;
(statearr_13242_15525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (15))){
var inst_13208 = (state_13230[(8)]);
var state_13230__$1 = state_13230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13230__$1,(18),to,inst_13208);
} else {
if((state_val_13231 === (21))){
var inst_13221 = (state_13230[(2)]);
var state_13230__$1 = state_13230;
var statearr_13244_15526 = state_13230__$1;
(statearr_13244_15526[(2)] = inst_13221);

(statearr_13244_15526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (13))){
var inst_13223 = (state_13230[(2)]);
var state_13230__$1 = (function (){var statearr_13245 = state_13230;
(statearr_13245[(9)] = inst_13223);

return statearr_13245;
})();
var statearr_13246_15527 = state_13230__$1;
(statearr_13246_15527[(2)] = null);

(statearr_13246_15527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (6))){
var inst_13187 = (state_13230[(7)]);
var state_13230__$1 = state_13230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13230__$1,(11),inst_13187);
} else {
if((state_val_13231 === (17))){
var inst_13216 = (state_13230[(2)]);
var state_13230__$1 = state_13230;
if(cljs.core.truth_(inst_13216)){
var statearr_13248_15528 = state_13230__$1;
(statearr_13248_15528[(1)] = (19));

} else {
var statearr_13249_15529 = state_13230__$1;
(statearr_13249_15529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (3))){
var inst_13228 = (state_13230[(2)]);
var state_13230__$1 = state_13230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13230__$1,inst_13228);
} else {
if((state_val_13231 === (12))){
var inst_13205 = (state_13230[(10)]);
var state_13230__$1 = state_13230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13230__$1,(14),inst_13205);
} else {
if((state_val_13231 === (2))){
var state_13230__$1 = state_13230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13230__$1,(4),results);
} else {
if((state_val_13231 === (19))){
var state_13230__$1 = state_13230;
var statearr_13250_15537 = state_13230__$1;
(statearr_13250_15537[(2)] = null);

(statearr_13250_15537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (11))){
var inst_13205 = (state_13230[(2)]);
var state_13230__$1 = (function (){var statearr_13251 = state_13230;
(statearr_13251[(10)] = inst_13205);

return statearr_13251;
})();
var statearr_13252_15538 = state_13230__$1;
(statearr_13252_15538[(2)] = null);

(statearr_13252_15538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (9))){
var state_13230__$1 = state_13230;
var statearr_13254_15539 = state_13230__$1;
(statearr_13254_15539[(2)] = null);

(statearr_13254_15539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (5))){
var state_13230__$1 = state_13230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13255_15540 = state_13230__$1;
(statearr_13255_15540[(1)] = (8));

} else {
var statearr_13256_15541 = state_13230__$1;
(statearr_13256_15541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (14))){
var inst_13208 = (state_13230[(8)]);
var inst_13210 = (state_13230[(11)]);
var inst_13208__$1 = (state_13230[(2)]);
var inst_13209 = (inst_13208__$1 == null);
var inst_13210__$1 = cljs.core.not(inst_13209);
var state_13230__$1 = (function (){var statearr_13257 = state_13230;
(statearr_13257[(8)] = inst_13208__$1);

(statearr_13257[(11)] = inst_13210__$1);

return statearr_13257;
})();
if(inst_13210__$1){
var statearr_13258_15546 = state_13230__$1;
(statearr_13258_15546[(1)] = (15));

} else {
var statearr_13259_15547 = state_13230__$1;
(statearr_13259_15547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (16))){
var inst_13210 = (state_13230[(11)]);
var state_13230__$1 = state_13230;
var statearr_13261_15548 = state_13230__$1;
(statearr_13261_15548[(2)] = inst_13210);

(statearr_13261_15548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (10))){
var inst_13202 = (state_13230[(2)]);
var state_13230__$1 = state_13230;
var statearr_13262_15551 = state_13230__$1;
(statearr_13262_15551[(2)] = inst_13202);

(statearr_13262_15551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (18))){
var inst_13213 = (state_13230[(2)]);
var state_13230__$1 = state_13230;
var statearr_13263_15552 = state_13230__$1;
(statearr_13263_15552[(2)] = inst_13213);

(statearr_13263_15552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13231 === (8))){
var inst_13199 = cljs.core.async.close_BANG_(to);
var state_13230__$1 = state_13230;
var statearr_13264_15561 = state_13230__$1;
(statearr_13264_15561[(2)] = inst_13199);

(statearr_13264_15561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0 = (function (){
var statearr_13265 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__);

(statearr_13265[(1)] = (1));

return statearr_13265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1 = (function (state_13230){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13230);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13266){var ex__11904__auto__ = e13266;
var statearr_13267_15568 = state_13230;
(statearr_13267_15568[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13230[(4)]))){
var statearr_13269_15569 = state_13230;
(statearr_13269_15569[(1)] = cljs.core.first((state_13230[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15571 = state_13230;
state_13230 = G__15571;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__ = function(state_13230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1.call(this,state_13230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11901__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_13270 = f__12348__auto__();
(statearr_13270[(6)] = c__12347__auto__);

return statearr_13270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));

return c__12347__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13272 = arguments.length;
switch (G__13272) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13279 = arguments.length;
switch (G__13279) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13282 = arguments.length;
switch (G__13282) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12347__auto___15603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_13310){
var state_val_13311 = (state_13310[(1)]);
if((state_val_13311 === (7))){
var inst_13305 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
var statearr_13312_15604 = state_13310__$1;
(statearr_13312_15604[(2)] = inst_13305);

(statearr_13312_15604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (1))){
var state_13310__$1 = state_13310;
var statearr_13313_15605 = state_13310__$1;
(statearr_13313_15605[(2)] = null);

(statearr_13313_15605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (4))){
var inst_13286 = (state_13310[(7)]);
var inst_13286__$1 = (state_13310[(2)]);
var inst_13287 = (inst_13286__$1 == null);
var state_13310__$1 = (function (){var statearr_13315 = state_13310;
(statearr_13315[(7)] = inst_13286__$1);

return statearr_13315;
})();
if(cljs.core.truth_(inst_13287)){
var statearr_13316_15609 = state_13310__$1;
(statearr_13316_15609[(1)] = (5));

} else {
var statearr_13317_15611 = state_13310__$1;
(statearr_13317_15611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (13))){
var state_13310__$1 = state_13310;
var statearr_13318_15613 = state_13310__$1;
(statearr_13318_15613[(2)] = null);

(statearr_13318_15613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (6))){
var inst_13286 = (state_13310[(7)]);
var inst_13292 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13286) : p.call(null,inst_13286));
var state_13310__$1 = state_13310;
if(cljs.core.truth_(inst_13292)){
var statearr_13319_15617 = state_13310__$1;
(statearr_13319_15617[(1)] = (9));

} else {
var statearr_13320_15618 = state_13310__$1;
(statearr_13320_15618[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (3))){
var inst_13307 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13310__$1,inst_13307);
} else {
if((state_val_13311 === (12))){
var state_13310__$1 = state_13310;
var statearr_13325_15619 = state_13310__$1;
(statearr_13325_15619[(2)] = null);

(statearr_13325_15619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (2))){
var state_13310__$1 = state_13310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13310__$1,(4),ch);
} else {
if((state_val_13311 === (11))){
var inst_13286 = (state_13310[(7)]);
var inst_13296 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13310__$1,(8),inst_13296,inst_13286);
} else {
if((state_val_13311 === (9))){
var state_13310__$1 = state_13310;
var statearr_13328_15620 = state_13310__$1;
(statearr_13328_15620[(2)] = tc);

(statearr_13328_15620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (5))){
var inst_13289 = cljs.core.async.close_BANG_(tc);
var inst_13290 = cljs.core.async.close_BANG_(fc);
var state_13310__$1 = (function (){var statearr_13329 = state_13310;
(statearr_13329[(8)] = inst_13289);

return statearr_13329;
})();
var statearr_13330_15621 = state_13310__$1;
(statearr_13330_15621[(2)] = inst_13290);

(statearr_13330_15621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (14))){
var inst_13303 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
var statearr_13331_15622 = state_13310__$1;
(statearr_13331_15622[(2)] = inst_13303);

(statearr_13331_15622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (10))){
var state_13310__$1 = state_13310;
var statearr_13333_15631 = state_13310__$1;
(statearr_13333_15631[(2)] = fc);

(statearr_13333_15631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13311 === (8))){
var inst_13298 = (state_13310[(2)]);
var state_13310__$1 = state_13310;
if(cljs.core.truth_(inst_13298)){
var statearr_13334_15632 = state_13310__$1;
(statearr_13334_15632[(1)] = (12));

} else {
var statearr_13335_15636 = state_13310__$1;
(statearr_13335_15636[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_13337 = [null,null,null,null,null,null,null,null,null];
(statearr_13337[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_13337[(1)] = (1));

return statearr_13337;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_13310){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13310);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13341){var ex__11904__auto__ = e13341;
var statearr_13342_15642 = state_13310;
(statearr_13342_15642[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13310[(4)]))){
var statearr_13343_15643 = state_13310;
(statearr_13343_15643[(1)] = cljs.core.first((state_13310[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15644 = state_13310;
state_13310 = G__15644;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_13310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_13310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_13345 = f__12348__auto__();
(statearr_13345[(6)] = c__12347__auto___15603);

return statearr_13345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_13367){
var state_val_13369 = (state_13367[(1)]);
if((state_val_13369 === (7))){
var inst_13363 = (state_13367[(2)]);
var state_13367__$1 = state_13367;
var statearr_13370_15650 = state_13367__$1;
(statearr_13370_15650[(2)] = inst_13363);

(statearr_13370_15650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (1))){
var inst_13346 = init;
var inst_13347 = inst_13346;
var state_13367__$1 = (function (){var statearr_13371 = state_13367;
(statearr_13371[(7)] = inst_13347);

return statearr_13371;
})();
var statearr_13372_15651 = state_13367__$1;
(statearr_13372_15651[(2)] = null);

(statearr_13372_15651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (4))){
var inst_13350 = (state_13367[(8)]);
var inst_13350__$1 = (state_13367[(2)]);
var inst_13351 = (inst_13350__$1 == null);
var state_13367__$1 = (function (){var statearr_13374 = state_13367;
(statearr_13374[(8)] = inst_13350__$1);

return statearr_13374;
})();
if(cljs.core.truth_(inst_13351)){
var statearr_13375_15653 = state_13367__$1;
(statearr_13375_15653[(1)] = (5));

} else {
var statearr_13376_15654 = state_13367__$1;
(statearr_13376_15654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (6))){
var inst_13347 = (state_13367[(7)]);
var inst_13350 = (state_13367[(8)]);
var inst_13354 = (state_13367[(9)]);
var inst_13354__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13347,inst_13350) : f.call(null,inst_13347,inst_13350));
var inst_13355 = cljs.core.reduced_QMARK_(inst_13354__$1);
var state_13367__$1 = (function (){var statearr_13377 = state_13367;
(statearr_13377[(9)] = inst_13354__$1);

return statearr_13377;
})();
if(inst_13355){
var statearr_13378_15655 = state_13367__$1;
(statearr_13378_15655[(1)] = (8));

} else {
var statearr_13379_15661 = state_13367__$1;
(statearr_13379_15661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (3))){
var inst_13365 = (state_13367[(2)]);
var state_13367__$1 = state_13367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13367__$1,inst_13365);
} else {
if((state_val_13369 === (2))){
var state_13367__$1 = state_13367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13367__$1,(4),ch);
} else {
if((state_val_13369 === (9))){
var inst_13354 = (state_13367[(9)]);
var inst_13347 = inst_13354;
var state_13367__$1 = (function (){var statearr_13385 = state_13367;
(statearr_13385[(7)] = inst_13347);

return statearr_13385;
})();
var statearr_13386_15665 = state_13367__$1;
(statearr_13386_15665[(2)] = null);

(statearr_13386_15665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (5))){
var inst_13347 = (state_13367[(7)]);
var state_13367__$1 = state_13367;
var statearr_13387_15666 = state_13367__$1;
(statearr_13387_15666[(2)] = inst_13347);

(statearr_13387_15666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (10))){
var inst_13361 = (state_13367[(2)]);
var state_13367__$1 = state_13367;
var statearr_13388_15667 = state_13367__$1;
(statearr_13388_15667[(2)] = inst_13361);

(statearr_13388_15667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (8))){
var inst_13354 = (state_13367[(9)]);
var inst_13357 = cljs.core.deref(inst_13354);
var state_13367__$1 = state_13367;
var statearr_13389_15668 = state_13367__$1;
(statearr_13389_15668[(2)] = inst_13357);

(statearr_13389_15668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11901__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11901__auto____0 = (function (){
var statearr_13391 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13391[(0)] = cljs$core$async$reduce_$_state_machine__11901__auto__);

(statearr_13391[(1)] = (1));

return statearr_13391;
});
var cljs$core$async$reduce_$_state_machine__11901__auto____1 = (function (state_13367){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13367);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13392){var ex__11904__auto__ = e13392;
var statearr_13393_15676 = state_13367;
(statearr_13393_15676[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13367[(4)]))){
var statearr_13394_15677 = state_13367;
(statearr_13394_15677[(1)] = cljs.core.first((state_13367[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15678 = state_13367;
state_13367 = G__15678;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11901__auto__ = function(state_13367){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11901__auto____1.call(this,state_13367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11901__auto____0;
cljs$core$async$reduce_$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11901__auto____1;
return cljs$core$async$reduce_$_state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_13396 = f__12348__auto__();
(statearr_13396[(6)] = c__12347__auto__);

return statearr_13396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));

return c__12347__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_13407){
var state_val_13408 = (state_13407[(1)]);
if((state_val_13408 === (1))){
var inst_13398 = cljs.core.async.reduce(f__$1,init,ch);
var state_13407__$1 = state_13407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13407__$1,(2),inst_13398);
} else {
if((state_val_13408 === (2))){
var inst_13400 = (state_13407[(2)]);
var inst_13403 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13400) : f__$1.call(null,inst_13400));
var state_13407__$1 = state_13407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13407__$1,inst_13403);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11901__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11901__auto____0 = (function (){
var statearr_13416 = [null,null,null,null,null,null,null];
(statearr_13416[(0)] = cljs$core$async$transduce_$_state_machine__11901__auto__);

(statearr_13416[(1)] = (1));

return statearr_13416;
});
var cljs$core$async$transduce_$_state_machine__11901__auto____1 = (function (state_13407){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13407);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13418){var ex__11904__auto__ = e13418;
var statearr_13419_15691 = state_13407;
(statearr_13419_15691[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13407[(4)]))){
var statearr_13420_15692 = state_13407;
(statearr_13420_15692[(1)] = cljs.core.first((state_13407[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15693 = state_13407;
state_13407 = G__15693;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11901__auto__ = function(state_13407){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11901__auto____1.call(this,state_13407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11901__auto____0;
cljs$core$async$transduce_$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11901__auto____1;
return cljs$core$async$transduce_$_state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_13421 = f__12348__auto__();
(statearr_13421[(6)] = c__12347__auto__);

return statearr_13421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));

return c__12347__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__13424 = arguments.length;
switch (G__13424) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_13449){
var state_val_13450 = (state_13449[(1)]);
if((state_val_13450 === (7))){
var inst_13431 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13452_15700 = state_13449__$1;
(statearr_13452_15700[(2)] = inst_13431);

(statearr_13452_15700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (1))){
var inst_13425 = cljs.core.seq(coll);
var inst_13426 = inst_13425;
var state_13449__$1 = (function (){var statearr_13453 = state_13449;
(statearr_13453[(7)] = inst_13426);

return statearr_13453;
})();
var statearr_13454_15703 = state_13449__$1;
(statearr_13454_15703[(2)] = null);

(statearr_13454_15703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (4))){
var inst_13426 = (state_13449[(7)]);
var inst_13429 = cljs.core.first(inst_13426);
var state_13449__$1 = state_13449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13449__$1,(7),ch,inst_13429);
} else {
if((state_val_13450 === (13))){
var inst_13443 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13455_15704 = state_13449__$1;
(statearr_13455_15704[(2)] = inst_13443);

(statearr_13455_15704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (6))){
var inst_13434 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
if(cljs.core.truth_(inst_13434)){
var statearr_13456_15705 = state_13449__$1;
(statearr_13456_15705[(1)] = (8));

} else {
var statearr_13457_15706 = state_13449__$1;
(statearr_13457_15706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (3))){
var inst_13447 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13449__$1,inst_13447);
} else {
if((state_val_13450 === (12))){
var state_13449__$1 = state_13449;
var statearr_13458_15707 = state_13449__$1;
(statearr_13458_15707[(2)] = null);

(statearr_13458_15707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (2))){
var inst_13426 = (state_13449[(7)]);
var state_13449__$1 = state_13449;
if(cljs.core.truth_(inst_13426)){
var statearr_13460_15708 = state_13449__$1;
(statearr_13460_15708[(1)] = (4));

} else {
var statearr_13461_15709 = state_13449__$1;
(statearr_13461_15709[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (11))){
var inst_13440 = cljs.core.async.close_BANG_(ch);
var state_13449__$1 = state_13449;
var statearr_13462_15710 = state_13449__$1;
(statearr_13462_15710[(2)] = inst_13440);

(statearr_13462_15710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (9))){
var state_13449__$1 = state_13449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13463_15711 = state_13449__$1;
(statearr_13463_15711[(1)] = (11));

} else {
var statearr_13464_15712 = state_13449__$1;
(statearr_13464_15712[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (5))){
var inst_13426 = (state_13449[(7)]);
var state_13449__$1 = state_13449;
var statearr_13465_15713 = state_13449__$1;
(statearr_13465_15713[(2)] = inst_13426);

(statearr_13465_15713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (10))){
var inst_13445 = (state_13449[(2)]);
var state_13449__$1 = state_13449;
var statearr_13467_15714 = state_13449__$1;
(statearr_13467_15714[(2)] = inst_13445);

(statearr_13467_15714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13450 === (8))){
var inst_13426 = (state_13449[(7)]);
var inst_13436 = cljs.core.next(inst_13426);
var inst_13426__$1 = inst_13436;
var state_13449__$1 = (function (){var statearr_13468 = state_13449;
(statearr_13468[(7)] = inst_13426__$1);

return statearr_13468;
})();
var statearr_13469_15717 = state_13449__$1;
(statearr_13469_15717[(2)] = null);

(statearr_13469_15717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_13473 = [null,null,null,null,null,null,null,null];
(statearr_13473[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_13473[(1)] = (1));

return statearr_13473;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_13449){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13449);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13474){var ex__11904__auto__ = e13474;
var statearr_13475_15718 = state_13449;
(statearr_13475_15718[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13449[(4)]))){
var statearr_13476_15719 = state_13449;
(statearr_13476_15719[(1)] = cljs.core.first((state_13449[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15720 = state_13449;
state_13449 = G__15720;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_13449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_13449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_13477 = f__12348__auto__();
(statearr_13477[(6)] = c__12347__auto__);

return statearr_13477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));

return c__12347__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13480 = arguments.length;
switch (G__13480) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15731 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15731(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15736 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15736(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15742 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15742(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15759 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15759(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13496 = (function (ch,cs,meta13497){
this.ch = ch;
this.cs = cs;
this.meta13497 = meta13497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13498,meta13497__$1){
var self__ = this;
var _13498__$1 = this;
return (new cljs.core.async.t_cljs$core$async13496(self__.ch,self__.cs,meta13497__$1));
}));

(cljs.core.async.t_cljs$core$async13496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13498){
var self__ = this;
var _13498__$1 = this;
return self__.meta13497;
}));

(cljs.core.async.t_cljs$core$async13496.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13496.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13496.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13496.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13496.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13497","meta13497",422935090,null)], null);
}));

(cljs.core.async.t_cljs$core$async13496.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13496");

(cljs.core.async.t_cljs$core$async13496.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async13496");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13496.
 */
cljs.core.async.__GT_t_cljs$core$async13496 = (function cljs$core$async$__GT_t_cljs$core$async13496(ch,cs,meta13497){
return (new cljs.core.async.t_cljs$core$async13496(ch,cs,meta13497));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async13496(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12347__auto___15797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_13654){
var state_val_13655 = (state_13654[(1)]);
if((state_val_13655 === (7))){
var inst_13646 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
var statearr_13656_15798 = state_13654__$1;
(statearr_13656_15798[(2)] = inst_13646);

(statearr_13656_15798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (20))){
var inst_13539 = (state_13654[(7)]);
var inst_13551 = cljs.core.first(inst_13539);
var inst_13552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13551,(0),null);
var inst_13553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13551,(1),null);
var state_13654__$1 = (function (){var statearr_13657 = state_13654;
(statearr_13657[(8)] = inst_13552);

return statearr_13657;
})();
if(cljs.core.truth_(inst_13553)){
var statearr_13658_15799 = state_13654__$1;
(statearr_13658_15799[(1)] = (22));

} else {
var statearr_13659_15800 = state_13654__$1;
(statearr_13659_15800[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (27))){
var inst_13583 = (state_13654[(9)]);
var inst_13585 = (state_13654[(10)]);
var inst_13590 = (state_13654[(11)]);
var inst_13507 = (state_13654[(12)]);
var inst_13590__$1 = cljs.core._nth(inst_13583,inst_13585);
var inst_13591 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13590__$1,inst_13507,done);
var state_13654__$1 = (function (){var statearr_13660 = state_13654;
(statearr_13660[(11)] = inst_13590__$1);

return statearr_13660;
})();
if(cljs.core.truth_(inst_13591)){
var statearr_13661_15802 = state_13654__$1;
(statearr_13661_15802[(1)] = (30));

} else {
var statearr_13662_15803 = state_13654__$1;
(statearr_13662_15803[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (1))){
var state_13654__$1 = state_13654;
var statearr_13663_15805 = state_13654__$1;
(statearr_13663_15805[(2)] = null);

(statearr_13663_15805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (24))){
var inst_13539 = (state_13654[(7)]);
var inst_13558 = (state_13654[(2)]);
var inst_13559 = cljs.core.next(inst_13539);
var inst_13516 = inst_13559;
var inst_13517 = null;
var inst_13518 = (0);
var inst_13519 = (0);
var state_13654__$1 = (function (){var statearr_13664 = state_13654;
(statearr_13664[(13)] = inst_13558);

(statearr_13664[(14)] = inst_13516);

(statearr_13664[(15)] = inst_13517);

(statearr_13664[(16)] = inst_13518);

(statearr_13664[(17)] = inst_13519);

return statearr_13664;
})();
var statearr_13665_15806 = state_13654__$1;
(statearr_13665_15806[(2)] = null);

(statearr_13665_15806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (39))){
var state_13654__$1 = state_13654;
var statearr_13669_15807 = state_13654__$1;
(statearr_13669_15807[(2)] = null);

(statearr_13669_15807[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (4))){
var inst_13507 = (state_13654[(12)]);
var inst_13507__$1 = (state_13654[(2)]);
var inst_13508 = (inst_13507__$1 == null);
var state_13654__$1 = (function (){var statearr_13670 = state_13654;
(statearr_13670[(12)] = inst_13507__$1);

return statearr_13670;
})();
if(cljs.core.truth_(inst_13508)){
var statearr_13672_15809 = state_13654__$1;
(statearr_13672_15809[(1)] = (5));

} else {
var statearr_13673_15810 = state_13654__$1;
(statearr_13673_15810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (15))){
var inst_13519 = (state_13654[(17)]);
var inst_13516 = (state_13654[(14)]);
var inst_13517 = (state_13654[(15)]);
var inst_13518 = (state_13654[(16)]);
var inst_13535 = (state_13654[(2)]);
var inst_13536 = (inst_13519 + (1));
var tmp13666 = inst_13517;
var tmp13667 = inst_13518;
var tmp13668 = inst_13516;
var inst_13516__$1 = tmp13668;
var inst_13517__$1 = tmp13666;
var inst_13518__$1 = tmp13667;
var inst_13519__$1 = inst_13536;
var state_13654__$1 = (function (){var statearr_13675 = state_13654;
(statearr_13675[(18)] = inst_13535);

(statearr_13675[(14)] = inst_13516__$1);

(statearr_13675[(15)] = inst_13517__$1);

(statearr_13675[(16)] = inst_13518__$1);

(statearr_13675[(17)] = inst_13519__$1);

return statearr_13675;
})();
var statearr_13676_15811 = state_13654__$1;
(statearr_13676_15811[(2)] = null);

(statearr_13676_15811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (21))){
var inst_13563 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
var statearr_13681_15812 = state_13654__$1;
(statearr_13681_15812[(2)] = inst_13563);

(statearr_13681_15812[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (31))){
var inst_13590 = (state_13654[(11)]);
var inst_13601 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13590);
var state_13654__$1 = state_13654;
var statearr_13682_15817 = state_13654__$1;
(statearr_13682_15817[(2)] = inst_13601);

(statearr_13682_15817[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (32))){
var inst_13585 = (state_13654[(10)]);
var inst_13582 = (state_13654[(19)]);
var inst_13583 = (state_13654[(9)]);
var inst_13584 = (state_13654[(20)]);
var inst_13603 = (state_13654[(2)]);
var inst_13604 = (inst_13585 + (1));
var tmp13677 = inst_13584;
var tmp13678 = inst_13582;
var tmp13679 = inst_13583;
var inst_13582__$1 = tmp13678;
var inst_13583__$1 = tmp13679;
var inst_13584__$1 = tmp13677;
var inst_13585__$1 = inst_13604;
var state_13654__$1 = (function (){var statearr_13686 = state_13654;
(statearr_13686[(21)] = inst_13603);

(statearr_13686[(19)] = inst_13582__$1);

(statearr_13686[(9)] = inst_13583__$1);

(statearr_13686[(20)] = inst_13584__$1);

(statearr_13686[(10)] = inst_13585__$1);

return statearr_13686;
})();
var statearr_13687_15818 = state_13654__$1;
(statearr_13687_15818[(2)] = null);

(statearr_13687_15818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (40))){
var inst_13616 = (state_13654[(22)]);
var inst_13623 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13616);
var state_13654__$1 = state_13654;
var statearr_13688_15824 = state_13654__$1;
(statearr_13688_15824[(2)] = inst_13623);

(statearr_13688_15824[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (33))){
var inst_13607 = (state_13654[(23)]);
var inst_13609 = cljs.core.chunked_seq_QMARK_(inst_13607);
var state_13654__$1 = state_13654;
if(inst_13609){
var statearr_13689_15825 = state_13654__$1;
(statearr_13689_15825[(1)] = (36));

} else {
var statearr_13690_15826 = state_13654__$1;
(statearr_13690_15826[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (13))){
var inst_13529 = (state_13654[(24)]);
var inst_13532 = cljs.core.async.close_BANG_(inst_13529);
var state_13654__$1 = state_13654;
var statearr_13691_15827 = state_13654__$1;
(statearr_13691_15827[(2)] = inst_13532);

(statearr_13691_15827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (22))){
var inst_13552 = (state_13654[(8)]);
var inst_13555 = cljs.core.async.close_BANG_(inst_13552);
var state_13654__$1 = state_13654;
var statearr_13692_15828 = state_13654__$1;
(statearr_13692_15828[(2)] = inst_13555);

(statearr_13692_15828[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (36))){
var inst_13607 = (state_13654[(23)]);
var inst_13611 = cljs.core.chunk_first(inst_13607);
var inst_13612 = cljs.core.chunk_rest(inst_13607);
var inst_13613 = cljs.core.count(inst_13611);
var inst_13582 = inst_13612;
var inst_13583 = inst_13611;
var inst_13584 = inst_13613;
var inst_13585 = (0);
var state_13654__$1 = (function (){var statearr_13694 = state_13654;
(statearr_13694[(19)] = inst_13582);

(statearr_13694[(9)] = inst_13583);

(statearr_13694[(20)] = inst_13584);

(statearr_13694[(10)] = inst_13585);

return statearr_13694;
})();
var statearr_13695_15833 = state_13654__$1;
(statearr_13695_15833[(2)] = null);

(statearr_13695_15833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (41))){
var inst_13607 = (state_13654[(23)]);
var inst_13625 = (state_13654[(2)]);
var inst_13626 = cljs.core.next(inst_13607);
var inst_13582 = inst_13626;
var inst_13583 = null;
var inst_13584 = (0);
var inst_13585 = (0);
var state_13654__$1 = (function (){var statearr_13699 = state_13654;
(statearr_13699[(25)] = inst_13625);

(statearr_13699[(19)] = inst_13582);

(statearr_13699[(9)] = inst_13583);

(statearr_13699[(20)] = inst_13584);

(statearr_13699[(10)] = inst_13585);

return statearr_13699;
})();
var statearr_13700_15835 = state_13654__$1;
(statearr_13700_15835[(2)] = null);

(statearr_13700_15835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (43))){
var state_13654__$1 = state_13654;
var statearr_13701_15836 = state_13654__$1;
(statearr_13701_15836[(2)] = null);

(statearr_13701_15836[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (29))){
var inst_13634 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
var statearr_13709_15838 = state_13654__$1;
(statearr_13709_15838[(2)] = inst_13634);

(statearr_13709_15838[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (44))){
var inst_13643 = (state_13654[(2)]);
var state_13654__$1 = (function (){var statearr_13711 = state_13654;
(statearr_13711[(26)] = inst_13643);

return statearr_13711;
})();
var statearr_13712_15839 = state_13654__$1;
(statearr_13712_15839[(2)] = null);

(statearr_13712_15839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (6))){
var inst_13574 = (state_13654[(27)]);
var inst_13573 = cljs.core.deref(cs);
var inst_13574__$1 = cljs.core.keys(inst_13573);
var inst_13575 = cljs.core.count(inst_13574__$1);
var inst_13576 = cljs.core.reset_BANG_(dctr,inst_13575);
var inst_13581 = cljs.core.seq(inst_13574__$1);
var inst_13582 = inst_13581;
var inst_13583 = null;
var inst_13584 = (0);
var inst_13585 = (0);
var state_13654__$1 = (function (){var statearr_13716 = state_13654;
(statearr_13716[(27)] = inst_13574__$1);

(statearr_13716[(28)] = inst_13576);

(statearr_13716[(19)] = inst_13582);

(statearr_13716[(9)] = inst_13583);

(statearr_13716[(20)] = inst_13584);

(statearr_13716[(10)] = inst_13585);

return statearr_13716;
})();
var statearr_13718_15855 = state_13654__$1;
(statearr_13718_15855[(2)] = null);

(statearr_13718_15855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (28))){
var inst_13582 = (state_13654[(19)]);
var inst_13607 = (state_13654[(23)]);
var inst_13607__$1 = cljs.core.seq(inst_13582);
var state_13654__$1 = (function (){var statearr_13723 = state_13654;
(statearr_13723[(23)] = inst_13607__$1);

return statearr_13723;
})();
if(inst_13607__$1){
var statearr_13724_15856 = state_13654__$1;
(statearr_13724_15856[(1)] = (33));

} else {
var statearr_13725_15857 = state_13654__$1;
(statearr_13725_15857[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (25))){
var inst_13585 = (state_13654[(10)]);
var inst_13584 = (state_13654[(20)]);
var inst_13587 = (inst_13585 < inst_13584);
var inst_13588 = inst_13587;
var state_13654__$1 = state_13654;
if(cljs.core.truth_(inst_13588)){
var statearr_13726_15858 = state_13654__$1;
(statearr_13726_15858[(1)] = (27));

} else {
var statearr_13727_15859 = state_13654__$1;
(statearr_13727_15859[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (34))){
var state_13654__$1 = state_13654;
var statearr_13729_15860 = state_13654__$1;
(statearr_13729_15860[(2)] = null);

(statearr_13729_15860[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (17))){
var state_13654__$1 = state_13654;
var statearr_13730_15861 = state_13654__$1;
(statearr_13730_15861[(2)] = null);

(statearr_13730_15861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (3))){
var inst_13648 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13654__$1,inst_13648);
} else {
if((state_val_13655 === (12))){
var inst_13569 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
var statearr_13734_15862 = state_13654__$1;
(statearr_13734_15862[(2)] = inst_13569);

(statearr_13734_15862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (2))){
var state_13654__$1 = state_13654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13654__$1,(4),ch);
} else {
if((state_val_13655 === (23))){
var state_13654__$1 = state_13654;
var statearr_13736_15863 = state_13654__$1;
(statearr_13736_15863[(2)] = null);

(statearr_13736_15863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (35))){
var inst_13632 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
var statearr_13739_15864 = state_13654__$1;
(statearr_13739_15864[(2)] = inst_13632);

(statearr_13739_15864[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (19))){
var inst_13539 = (state_13654[(7)]);
var inst_13543 = cljs.core.chunk_first(inst_13539);
var inst_13544 = cljs.core.chunk_rest(inst_13539);
var inst_13545 = cljs.core.count(inst_13543);
var inst_13516 = inst_13544;
var inst_13517 = inst_13543;
var inst_13518 = inst_13545;
var inst_13519 = (0);
var state_13654__$1 = (function (){var statearr_13741 = state_13654;
(statearr_13741[(14)] = inst_13516);

(statearr_13741[(15)] = inst_13517);

(statearr_13741[(16)] = inst_13518);

(statearr_13741[(17)] = inst_13519);

return statearr_13741;
})();
var statearr_13743_15865 = state_13654__$1;
(statearr_13743_15865[(2)] = null);

(statearr_13743_15865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (11))){
var inst_13516 = (state_13654[(14)]);
var inst_13539 = (state_13654[(7)]);
var inst_13539__$1 = cljs.core.seq(inst_13516);
var state_13654__$1 = (function (){var statearr_13746 = state_13654;
(statearr_13746[(7)] = inst_13539__$1);

return statearr_13746;
})();
if(inst_13539__$1){
var statearr_13748_15866 = state_13654__$1;
(statearr_13748_15866[(1)] = (16));

} else {
var statearr_13749_15867 = state_13654__$1;
(statearr_13749_15867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (9))){
var inst_13571 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
var statearr_13751_15868 = state_13654__$1;
(statearr_13751_15868[(2)] = inst_13571);

(statearr_13751_15868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (5))){
var inst_13514 = cljs.core.deref(cs);
var inst_13515 = cljs.core.seq(inst_13514);
var inst_13516 = inst_13515;
var inst_13517 = null;
var inst_13518 = (0);
var inst_13519 = (0);
var state_13654__$1 = (function (){var statearr_13755 = state_13654;
(statearr_13755[(14)] = inst_13516);

(statearr_13755[(15)] = inst_13517);

(statearr_13755[(16)] = inst_13518);

(statearr_13755[(17)] = inst_13519);

return statearr_13755;
})();
var statearr_13756_15875 = state_13654__$1;
(statearr_13756_15875[(2)] = null);

(statearr_13756_15875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (14))){
var state_13654__$1 = state_13654;
var statearr_13758_15876 = state_13654__$1;
(statearr_13758_15876[(2)] = null);

(statearr_13758_15876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (45))){
var inst_13640 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
var statearr_13762_15877 = state_13654__$1;
(statearr_13762_15877[(2)] = inst_13640);

(statearr_13762_15877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (26))){
var inst_13574 = (state_13654[(27)]);
var inst_13636 = (state_13654[(2)]);
var inst_13637 = cljs.core.seq(inst_13574);
var state_13654__$1 = (function (){var statearr_13763 = state_13654;
(statearr_13763[(29)] = inst_13636);

return statearr_13763;
})();
if(inst_13637){
var statearr_13765_15881 = state_13654__$1;
(statearr_13765_15881[(1)] = (42));

} else {
var statearr_13767_15882 = state_13654__$1;
(statearr_13767_15882[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (16))){
var inst_13539 = (state_13654[(7)]);
var inst_13541 = cljs.core.chunked_seq_QMARK_(inst_13539);
var state_13654__$1 = state_13654;
if(inst_13541){
var statearr_13769_15883 = state_13654__$1;
(statearr_13769_15883[(1)] = (19));

} else {
var statearr_13771_15885 = state_13654__$1;
(statearr_13771_15885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (38))){
var inst_13629 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
var statearr_13776_15887 = state_13654__$1;
(statearr_13776_15887[(2)] = inst_13629);

(statearr_13776_15887[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (30))){
var state_13654__$1 = state_13654;
var statearr_13778_15889 = state_13654__$1;
(statearr_13778_15889[(2)] = null);

(statearr_13778_15889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (10))){
var inst_13517 = (state_13654[(15)]);
var inst_13519 = (state_13654[(17)]);
var inst_13528 = cljs.core._nth(inst_13517,inst_13519);
var inst_13529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13528,(0),null);
var inst_13530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13528,(1),null);
var state_13654__$1 = (function (){var statearr_13782 = state_13654;
(statearr_13782[(24)] = inst_13529);

return statearr_13782;
})();
if(cljs.core.truth_(inst_13530)){
var statearr_13783_15890 = state_13654__$1;
(statearr_13783_15890[(1)] = (13));

} else {
var statearr_13784_15891 = state_13654__$1;
(statearr_13784_15891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (18))){
var inst_13567 = (state_13654[(2)]);
var state_13654__$1 = state_13654;
var statearr_13786_15892 = state_13654__$1;
(statearr_13786_15892[(2)] = inst_13567);

(statearr_13786_15892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (42))){
var state_13654__$1 = state_13654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13654__$1,(45),dchan);
} else {
if((state_val_13655 === (37))){
var inst_13607 = (state_13654[(23)]);
var inst_13616 = (state_13654[(22)]);
var inst_13507 = (state_13654[(12)]);
var inst_13616__$1 = cljs.core.first(inst_13607);
var inst_13620 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13616__$1,inst_13507,done);
var state_13654__$1 = (function (){var statearr_13791 = state_13654;
(statearr_13791[(22)] = inst_13616__$1);

return statearr_13791;
})();
if(cljs.core.truth_(inst_13620)){
var statearr_13792_15894 = state_13654__$1;
(statearr_13792_15894[(1)] = (39));

} else {
var statearr_13793_15895 = state_13654__$1;
(statearr_13793_15895[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13655 === (8))){
var inst_13519 = (state_13654[(17)]);
var inst_13518 = (state_13654[(16)]);
var inst_13521 = (inst_13519 < inst_13518);
var inst_13522 = inst_13521;
var state_13654__$1 = state_13654;
if(cljs.core.truth_(inst_13522)){
var statearr_13795_15899 = state_13654__$1;
(statearr_13795_15899[(1)] = (10));

} else {
var statearr_13796_15900 = state_13654__$1;
(statearr_13796_15900[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11901__auto__ = null;
var cljs$core$async$mult_$_state_machine__11901__auto____0 = (function (){
var statearr_13802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13802[(0)] = cljs$core$async$mult_$_state_machine__11901__auto__);

(statearr_13802[(1)] = (1));

return statearr_13802;
});
var cljs$core$async$mult_$_state_machine__11901__auto____1 = (function (state_13654){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13654);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e13804){var ex__11904__auto__ = e13804;
var statearr_13805_15907 = state_13654;
(statearr_13805_15907[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13654[(4)]))){
var statearr_13806_15908 = state_13654;
(statearr_13806_15908[(1)] = cljs.core.first((state_13654[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15909 = state_13654;
state_13654 = G__15909;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11901__auto__ = function(state_13654){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11901__auto____1.call(this,state_13654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11901__auto____0;
cljs$core$async$mult_$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11901__auto____1;
return cljs$core$async$mult_$_state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_13811 = f__12348__auto__();
(statearr_13811[(6)] = c__12347__auto___15797);

return statearr_13811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__13814 = arguments.length;
switch (G__13814) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_15918 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_15918(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_15919 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_15919(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_15921 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_15921(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_15930 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_15930(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_15934 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_15934(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___15945 = arguments.length;
var i__5898__auto___15946 = (0);
while(true){
if((i__5898__auto___15946 < len__5897__auto___15945)){
args__5903__auto__.push((arguments[i__5898__auto___15946]));

var G__15947 = (i__5898__auto___15946 + (1));
i__5898__auto___15946 = G__15947;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13871){
var map__13872 = p__13871;
var map__13872__$1 = cljs.core.__destructure_map(map__13872);
var opts = map__13872__$1;
var statearr_13873_15954 = state;
(statearr_13873_15954[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_13876_15955 = state;
(statearr_13876_15955[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_13878_15956 = state;
(statearr_13878_15956[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13863){
var G__13864 = cljs.core.first(seq13863);
var seq13863__$1 = cljs.core.next(seq13863);
var G__13865 = cljs.core.first(seq13863__$1);
var seq13863__$2 = cljs.core.next(seq13863__$1);
var G__13866 = cljs.core.first(seq13863__$2);
var seq13863__$3 = cljs.core.next(seq13863__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13864,G__13865,G__13866,seq13863__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13894 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13895){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13895 = meta13895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13896,meta13895__$1){
var self__ = this;
var _13896__$1 = this;
return (new cljs.core.async.t_cljs$core$async13894(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13895__$1));
}));

(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13896){
var self__ = this;
var _13896__$1 = this;
return self__.meta13895;
}));

(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13894.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13895","meta13895",906320044,null)], null);
}));

(cljs.core.async.t_cljs$core$async13894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13894");

(cljs.core.async.t_cljs$core$async13894.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async13894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13894.
 */
cljs.core.async.__GT_t_cljs$core$async13894 = (function cljs$core$async$__GT_t_cljs$core$async13894(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13895){
return (new cljs.core.async.t_cljs$core$async13894(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13895));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async13894(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__12347__auto___15978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_13987){
var state_val_13989 = (state_13987[(1)]);
if((state_val_13989 === (7))){
var inst_13943 = (state_13987[(2)]);
var state_13987__$1 = state_13987;
if(cljs.core.truth_(inst_13943)){
var statearr_13993_15979 = state_13987__$1;
(statearr_13993_15979[(1)] = (8));

} else {
var statearr_13994_15980 = state_13987__$1;
(statearr_13994_15980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (20))){
var inst_13934 = (state_13987[(7)]);
var state_13987__$1 = state_13987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13987__$1,(23),out,inst_13934);
} else {
if((state_val_13989 === (1))){
var inst_13916 = calc_state();
var inst_13917 = cljs.core.__destructure_map(inst_13916);
var inst_13918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13917,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13917,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13917,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13921 = inst_13916;
var state_13987__$1 = (function (){var statearr_13999 = state_13987;
(statearr_13999[(8)] = inst_13918);

(statearr_13999[(9)] = inst_13919);

(statearr_13999[(10)] = inst_13920);

(statearr_13999[(11)] = inst_13921);

return statearr_13999;
})();
var statearr_14003_15987 = state_13987__$1;
(statearr_14003_15987[(2)] = null);

(statearr_14003_15987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (24))){
var inst_13925 = (state_13987[(12)]);
var inst_13921 = inst_13925;
var state_13987__$1 = (function (){var statearr_14007 = state_13987;
(statearr_14007[(11)] = inst_13921);

return statearr_14007;
})();
var statearr_14008_15994 = state_13987__$1;
(statearr_14008_15994[(2)] = null);

(statearr_14008_15994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (4))){
var inst_13934 = (state_13987[(7)]);
var inst_13936 = (state_13987[(13)]);
var inst_13933 = (state_13987[(2)]);
var inst_13934__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13933,(0),null);
var inst_13935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13933,(1),null);
var inst_13936__$1 = (inst_13934__$1 == null);
var state_13987__$1 = (function (){var statearr_14016 = state_13987;
(statearr_14016[(7)] = inst_13934__$1);

(statearr_14016[(14)] = inst_13935);

(statearr_14016[(13)] = inst_13936__$1);

return statearr_14016;
})();
if(cljs.core.truth_(inst_13936__$1)){
var statearr_14017_15995 = state_13987__$1;
(statearr_14017_15995[(1)] = (5));

} else {
var statearr_14020_15996 = state_13987__$1;
(statearr_14020_15996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (15))){
var inst_13926 = (state_13987[(15)]);
var inst_13958 = (state_13987[(16)]);
var inst_13958__$1 = cljs.core.empty_QMARK_(inst_13926);
var state_13987__$1 = (function (){var statearr_14021 = state_13987;
(statearr_14021[(16)] = inst_13958__$1);

return statearr_14021;
})();
if(inst_13958__$1){
var statearr_14024_15998 = state_13987__$1;
(statearr_14024_15998[(1)] = (17));

} else {
var statearr_14026_15999 = state_13987__$1;
(statearr_14026_15999[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (21))){
var inst_13925 = (state_13987[(12)]);
var inst_13921 = inst_13925;
var state_13987__$1 = (function (){var statearr_14027 = state_13987;
(statearr_14027[(11)] = inst_13921);

return statearr_14027;
})();
var statearr_14029_16000 = state_13987__$1;
(statearr_14029_16000[(2)] = null);

(statearr_14029_16000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (13))){
var inst_13951 = (state_13987[(2)]);
var inst_13952 = calc_state();
var inst_13921 = inst_13952;
var state_13987__$1 = (function (){var statearr_14030 = state_13987;
(statearr_14030[(17)] = inst_13951);

(statearr_14030[(11)] = inst_13921);

return statearr_14030;
})();
var statearr_14037_16002 = state_13987__$1;
(statearr_14037_16002[(2)] = null);

(statearr_14037_16002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (22))){
var inst_13979 = (state_13987[(2)]);
var state_13987__$1 = state_13987;
var statearr_14042_16004 = state_13987__$1;
(statearr_14042_16004[(2)] = inst_13979);

(statearr_14042_16004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (6))){
var inst_13935 = (state_13987[(14)]);
var inst_13941 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13935,change);
var state_13987__$1 = state_13987;
var statearr_14047_16005 = state_13987__$1;
(statearr_14047_16005[(2)] = inst_13941);

(statearr_14047_16005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (25))){
var state_13987__$1 = state_13987;
var statearr_14050_16008 = state_13987__$1;
(statearr_14050_16008[(2)] = null);

(statearr_14050_16008[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (17))){
var inst_13927 = (state_13987[(18)]);
var inst_13935 = (state_13987[(14)]);
var inst_13960 = (inst_13927.cljs$core$IFn$_invoke$arity$1 ? inst_13927.cljs$core$IFn$_invoke$arity$1(inst_13935) : inst_13927.call(null,inst_13935));
var inst_13961 = cljs.core.not(inst_13960);
var state_13987__$1 = state_13987;
var statearr_14056_16009 = state_13987__$1;
(statearr_14056_16009[(2)] = inst_13961);

(statearr_14056_16009[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (3))){
var inst_13983 = (state_13987[(2)]);
var state_13987__$1 = state_13987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13987__$1,inst_13983);
} else {
if((state_val_13989 === (12))){
var state_13987__$1 = state_13987;
var statearr_14063_16011 = state_13987__$1;
(statearr_14063_16011[(2)] = null);

(statearr_14063_16011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (2))){
var inst_13921 = (state_13987[(11)]);
var inst_13925 = (state_13987[(12)]);
var inst_13925__$1 = cljs.core.__destructure_map(inst_13921);
var inst_13926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13925__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13925__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13925__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13987__$1 = (function (){var statearr_14074 = state_13987;
(statearr_14074[(12)] = inst_13925__$1);

(statearr_14074[(15)] = inst_13926);

(statearr_14074[(18)] = inst_13927);

return statearr_14074;
})();
return cljs.core.async.ioc_alts_BANG_(state_13987__$1,(4),inst_13928);
} else {
if((state_val_13989 === (23))){
var inst_13970 = (state_13987[(2)]);
var state_13987__$1 = state_13987;
if(cljs.core.truth_(inst_13970)){
var statearr_14080_16021 = state_13987__$1;
(statearr_14080_16021[(1)] = (24));

} else {
var statearr_14081_16022 = state_13987__$1;
(statearr_14081_16022[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (19))){
var inst_13964 = (state_13987[(2)]);
var state_13987__$1 = state_13987;
var statearr_14085_16023 = state_13987__$1;
(statearr_14085_16023[(2)] = inst_13964);

(statearr_14085_16023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (11))){
var inst_13935 = (state_13987[(14)]);
var inst_13948 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13935);
var state_13987__$1 = state_13987;
var statearr_14088_16030 = state_13987__$1;
(statearr_14088_16030[(2)] = inst_13948);

(statearr_14088_16030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (9))){
var inst_13926 = (state_13987[(15)]);
var inst_13935 = (state_13987[(14)]);
var inst_13955 = (state_13987[(19)]);
var inst_13955__$1 = (inst_13926.cljs$core$IFn$_invoke$arity$1 ? inst_13926.cljs$core$IFn$_invoke$arity$1(inst_13935) : inst_13926.call(null,inst_13935));
var state_13987__$1 = (function (){var statearr_14090 = state_13987;
(statearr_14090[(19)] = inst_13955__$1);

return statearr_14090;
})();
if(cljs.core.truth_(inst_13955__$1)){
var statearr_14091_16031 = state_13987__$1;
(statearr_14091_16031[(1)] = (14));

} else {
var statearr_14092_16032 = state_13987__$1;
(statearr_14092_16032[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (5))){
var inst_13936 = (state_13987[(13)]);
var state_13987__$1 = state_13987;
var statearr_14100_16033 = state_13987__$1;
(statearr_14100_16033[(2)] = inst_13936);

(statearr_14100_16033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (14))){
var inst_13955 = (state_13987[(19)]);
var state_13987__$1 = state_13987;
var statearr_14105_16034 = state_13987__$1;
(statearr_14105_16034[(2)] = inst_13955);

(statearr_14105_16034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (26))){
var inst_13975 = (state_13987[(2)]);
var state_13987__$1 = state_13987;
var statearr_14107_16036 = state_13987__$1;
(statearr_14107_16036[(2)] = inst_13975);

(statearr_14107_16036[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (16))){
var inst_13966 = (state_13987[(2)]);
var state_13987__$1 = state_13987;
if(cljs.core.truth_(inst_13966)){
var statearr_14111_16038 = state_13987__$1;
(statearr_14111_16038[(1)] = (20));

} else {
var statearr_14112_16039 = state_13987__$1;
(statearr_14112_16039[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (10))){
var inst_13981 = (state_13987[(2)]);
var state_13987__$1 = state_13987;
var statearr_14117_16040 = state_13987__$1;
(statearr_14117_16040[(2)] = inst_13981);

(statearr_14117_16040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (18))){
var inst_13958 = (state_13987[(16)]);
var state_13987__$1 = state_13987;
var statearr_14121_16042 = state_13987__$1;
(statearr_14121_16042[(2)] = inst_13958);

(statearr_14121_16042[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13989 === (8))){
var inst_13934 = (state_13987[(7)]);
var inst_13946 = (inst_13934 == null);
var state_13987__$1 = state_13987;
if(cljs.core.truth_(inst_13946)){
var statearr_14124_16043 = state_13987__$1;
(statearr_14124_16043[(1)] = (11));

} else {
var statearr_14125_16044 = state_13987__$1;
(statearr_14125_16044[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11901__auto__ = null;
var cljs$core$async$mix_$_state_machine__11901__auto____0 = (function (){
var statearr_14129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14129[(0)] = cljs$core$async$mix_$_state_machine__11901__auto__);

(statearr_14129[(1)] = (1));

return statearr_14129;
});
var cljs$core$async$mix_$_state_machine__11901__auto____1 = (function (state_13987){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_13987);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e14133){var ex__11904__auto__ = e14133;
var statearr_14134_16046 = state_13987;
(statearr_14134_16046[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_13987[(4)]))){
var statearr_14136_16047 = state_13987;
(statearr_14136_16047[(1)] = cljs.core.first((state_13987[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16048 = state_13987;
state_13987 = G__16048;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11901__auto__ = function(state_13987){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11901__auto____1.call(this,state_13987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11901__auto____0;
cljs$core$async$mix_$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11901__auto____1;
return cljs$core$async$mix_$_state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_14144 = f__12348__auto__();
(statearr_14144[(6)] = c__12347__auto___15978);

return statearr_14144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16058 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16058(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16062 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16062(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16067 = (function() {
var G__16068 = null;
var G__16068__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16068__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16068 = function(p,v){
switch(arguments.length){
case 1:
return G__16068__1.call(this,p);
case 2:
return G__16068__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16068.cljs$core$IFn$_invoke$arity$1 = G__16068__1;
G__16068.cljs$core$IFn$_invoke$arity$2 = G__16068__2;
return G__16068;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14175 = arguments.length;
switch (G__14175) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16067(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16067(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14202 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14203){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14203 = meta14203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14204,meta14203__$1){
var self__ = this;
var _14204__$1 = this;
return (new cljs.core.async.t_cljs$core$async14202(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14203__$1));
}));

(cljs.core.async.t_cljs$core$async14202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14204){
var self__ = this;
var _14204__$1 = this;
return self__.meta14203;
}));

(cljs.core.async.t_cljs$core$async14202.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14202.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14202.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14202.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14202.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14203","meta14203",777433713,null)], null);
}));

(cljs.core.async.t_cljs$core$async14202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14202");

(cljs.core.async.t_cljs$core$async14202.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14202.
 */
cljs.core.async.__GT_t_cljs$core$async14202 = (function cljs$core$async$__GT_t_cljs$core$async14202(ch,topic_fn,buf_fn,mults,ensure_mult,meta14203){
return (new cljs.core.async.t_cljs$core$async14202(ch,topic_fn,buf_fn,mults,ensure_mult,meta14203));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14197 = arguments.length;
switch (G__14197) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14191_SHARP_){
if(cljs.core.truth_((p1__14191_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14191_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14191_SHARP_.call(null,topic)))){
return p1__14191_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14191_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14202(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__12347__auto___16136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_14283){
var state_val_14284 = (state_14283[(1)]);
if((state_val_14284 === (7))){
var inst_14279 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14285_16141 = state_14283__$1;
(statearr_14285_16141[(2)] = inst_14279);

(statearr_14285_16141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (20))){
var state_14283__$1 = state_14283;
var statearr_14289_16142 = state_14283__$1;
(statearr_14289_16142[(2)] = null);

(statearr_14289_16142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (1))){
var state_14283__$1 = state_14283;
var statearr_14290_16146 = state_14283__$1;
(statearr_14290_16146[(2)] = null);

(statearr_14290_16146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (24))){
var inst_14262 = (state_14283[(7)]);
var inst_14271 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14262);
var state_14283__$1 = state_14283;
var statearr_14291_16147 = state_14283__$1;
(statearr_14291_16147[(2)] = inst_14271);

(statearr_14291_16147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (4))){
var inst_14214 = (state_14283[(8)]);
var inst_14214__$1 = (state_14283[(2)]);
var inst_14215 = (inst_14214__$1 == null);
var state_14283__$1 = (function (){var statearr_14292 = state_14283;
(statearr_14292[(8)] = inst_14214__$1);

return statearr_14292;
})();
if(cljs.core.truth_(inst_14215)){
var statearr_14293_16212 = state_14283__$1;
(statearr_14293_16212[(1)] = (5));

} else {
var statearr_14294_16256 = state_14283__$1;
(statearr_14294_16256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (15))){
var inst_14256 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14295_16260 = state_14283__$1;
(statearr_14295_16260[(2)] = inst_14256);

(statearr_14295_16260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (21))){
var inst_14276 = (state_14283[(2)]);
var state_14283__$1 = (function (){var statearr_14296 = state_14283;
(statearr_14296[(9)] = inst_14276);

return statearr_14296;
})();
var statearr_14297_16292 = state_14283__$1;
(statearr_14297_16292[(2)] = null);

(statearr_14297_16292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (13))){
var inst_14238 = (state_14283[(10)]);
var inst_14240 = cljs.core.chunked_seq_QMARK_(inst_14238);
var state_14283__$1 = state_14283;
if(inst_14240){
var statearr_14298_16306 = state_14283__$1;
(statearr_14298_16306[(1)] = (16));

} else {
var statearr_14299_16311 = state_14283__$1;
(statearr_14299_16311[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (22))){
var inst_14268 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
if(cljs.core.truth_(inst_14268)){
var statearr_14300_16412 = state_14283__$1;
(statearr_14300_16412[(1)] = (23));

} else {
var statearr_14301_16489 = state_14283__$1;
(statearr_14301_16489[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (6))){
var inst_14214 = (state_14283[(8)]);
var inst_14262 = (state_14283[(7)]);
var inst_14264 = (state_14283[(11)]);
var inst_14262__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14214) : topic_fn.call(null,inst_14214));
var inst_14263 = cljs.core.deref(mults);
var inst_14264__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14263,inst_14262__$1);
var state_14283__$1 = (function (){var statearr_14304 = state_14283;
(statearr_14304[(7)] = inst_14262__$1);

(statearr_14304[(11)] = inst_14264__$1);

return statearr_14304;
})();
if(cljs.core.truth_(inst_14264__$1)){
var statearr_14305_16547 = state_14283__$1;
(statearr_14305_16547[(1)] = (19));

} else {
var statearr_14306_16548 = state_14283__$1;
(statearr_14306_16548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (25))){
var inst_14273 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14307_16609 = state_14283__$1;
(statearr_14307_16609[(2)] = inst_14273);

(statearr_14307_16609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (17))){
var inst_14238 = (state_14283[(10)]);
var inst_14247 = cljs.core.first(inst_14238);
var inst_14248 = cljs.core.async.muxch_STAR_(inst_14247);
var inst_14249 = cljs.core.async.close_BANG_(inst_14248);
var inst_14250 = cljs.core.next(inst_14238);
var inst_14224 = inst_14250;
var inst_14225 = null;
var inst_14226 = (0);
var inst_14227 = (0);
var state_14283__$1 = (function (){var statearr_14309 = state_14283;
(statearr_14309[(12)] = inst_14249);

(statearr_14309[(13)] = inst_14224);

(statearr_14309[(14)] = inst_14225);

(statearr_14309[(15)] = inst_14226);

(statearr_14309[(16)] = inst_14227);

return statearr_14309;
})();
var statearr_14310_16792 = state_14283__$1;
(statearr_14310_16792[(2)] = null);

(statearr_14310_16792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (3))){
var inst_14281 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14283__$1,inst_14281);
} else {
if((state_val_14284 === (12))){
var inst_14258 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14311_16793 = state_14283__$1;
(statearr_14311_16793[(2)] = inst_14258);

(statearr_14311_16793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (2))){
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14283__$1,(4),ch);
} else {
if((state_val_14284 === (23))){
var state_14283__$1 = state_14283;
var statearr_14315_16794 = state_14283__$1;
(statearr_14315_16794[(2)] = null);

(statearr_14315_16794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (19))){
var inst_14264 = (state_14283[(11)]);
var inst_14214 = (state_14283[(8)]);
var inst_14266 = cljs.core.async.muxch_STAR_(inst_14264);
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14283__$1,(22),inst_14266,inst_14214);
} else {
if((state_val_14284 === (11))){
var inst_14224 = (state_14283[(13)]);
var inst_14238 = (state_14283[(10)]);
var inst_14238__$1 = cljs.core.seq(inst_14224);
var state_14283__$1 = (function (){var statearr_14316 = state_14283;
(statearr_14316[(10)] = inst_14238__$1);

return statearr_14316;
})();
if(inst_14238__$1){
var statearr_14317_16795 = state_14283__$1;
(statearr_14317_16795[(1)] = (13));

} else {
var statearr_14318_16796 = state_14283__$1;
(statearr_14318_16796[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (9))){
var inst_14260 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14319_16797 = state_14283__$1;
(statearr_14319_16797[(2)] = inst_14260);

(statearr_14319_16797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (5))){
var inst_14221 = cljs.core.deref(mults);
var inst_14222 = cljs.core.vals(inst_14221);
var inst_14223 = cljs.core.seq(inst_14222);
var inst_14224 = inst_14223;
var inst_14225 = null;
var inst_14226 = (0);
var inst_14227 = (0);
var state_14283__$1 = (function (){var statearr_14322 = state_14283;
(statearr_14322[(13)] = inst_14224);

(statearr_14322[(14)] = inst_14225);

(statearr_14322[(15)] = inst_14226);

(statearr_14322[(16)] = inst_14227);

return statearr_14322;
})();
var statearr_14323_16798 = state_14283__$1;
(statearr_14323_16798[(2)] = null);

(statearr_14323_16798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (14))){
var state_14283__$1 = state_14283;
var statearr_14327_16799 = state_14283__$1;
(statearr_14327_16799[(2)] = null);

(statearr_14327_16799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (16))){
var inst_14238 = (state_14283[(10)]);
var inst_14242 = cljs.core.chunk_first(inst_14238);
var inst_14243 = cljs.core.chunk_rest(inst_14238);
var inst_14244 = cljs.core.count(inst_14242);
var inst_14224 = inst_14243;
var inst_14225 = inst_14242;
var inst_14226 = inst_14244;
var inst_14227 = (0);
var state_14283__$1 = (function (){var statearr_14330 = state_14283;
(statearr_14330[(13)] = inst_14224);

(statearr_14330[(14)] = inst_14225);

(statearr_14330[(15)] = inst_14226);

(statearr_14330[(16)] = inst_14227);

return statearr_14330;
})();
var statearr_14331_16804 = state_14283__$1;
(statearr_14331_16804[(2)] = null);

(statearr_14331_16804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (10))){
var inst_14225 = (state_14283[(14)]);
var inst_14227 = (state_14283[(16)]);
var inst_14224 = (state_14283[(13)]);
var inst_14226 = (state_14283[(15)]);
var inst_14232 = cljs.core._nth(inst_14225,inst_14227);
var inst_14233 = cljs.core.async.muxch_STAR_(inst_14232);
var inst_14234 = cljs.core.async.close_BANG_(inst_14233);
var inst_14235 = (inst_14227 + (1));
var tmp14324 = inst_14225;
var tmp14325 = inst_14224;
var tmp14326 = inst_14226;
var inst_14224__$1 = tmp14325;
var inst_14225__$1 = tmp14324;
var inst_14226__$1 = tmp14326;
var inst_14227__$1 = inst_14235;
var state_14283__$1 = (function (){var statearr_14356 = state_14283;
(statearr_14356[(17)] = inst_14234);

(statearr_14356[(13)] = inst_14224__$1);

(statearr_14356[(14)] = inst_14225__$1);

(statearr_14356[(15)] = inst_14226__$1);

(statearr_14356[(16)] = inst_14227__$1);

return statearr_14356;
})();
var statearr_14357_16806 = state_14283__$1;
(statearr_14357_16806[(2)] = null);

(statearr_14357_16806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (18))){
var inst_14253 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14358_16807 = state_14283__$1;
(statearr_14358_16807[(2)] = inst_14253);

(statearr_14358_16807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (8))){
var inst_14227 = (state_14283[(16)]);
var inst_14226 = (state_14283[(15)]);
var inst_14229 = (inst_14227 < inst_14226);
var inst_14230 = inst_14229;
var state_14283__$1 = state_14283;
if(cljs.core.truth_(inst_14230)){
var statearr_14359_16808 = state_14283__$1;
(statearr_14359_16808[(1)] = (10));

} else {
var statearr_14360_16809 = state_14283__$1;
(statearr_14360_16809[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_14361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14361[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_14361[(1)] = (1));

return statearr_14361;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_14283){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_14283);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e14363){var ex__11904__auto__ = e14363;
var statearr_14364_16810 = state_14283;
(statearr_14364_16810[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_14283[(4)]))){
var statearr_14366_16811 = state_14283;
(statearr_14366_16811[(1)] = cljs.core.first((state_14283[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16814 = state_14283;
state_14283 = G__16814;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_14283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_14283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_14371 = f__12348__auto__();
(statearr_14371[(6)] = c__12347__auto___16136);

return statearr_14371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14377 = arguments.length;
switch (G__14377) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14385 = arguments.length;
switch (G__14385) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14394 = arguments.length;
switch (G__14394) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__12347__auto___16824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_14476){
var state_val_14477 = (state_14476[(1)]);
if((state_val_14477 === (7))){
var state_14476__$1 = state_14476;
var statearr_14482_16825 = state_14476__$1;
(statearr_14482_16825[(2)] = null);

(statearr_14482_16825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (1))){
var state_14476__$1 = state_14476;
var statearr_14483_16826 = state_14476__$1;
(statearr_14483_16826[(2)] = null);

(statearr_14483_16826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (4))){
var inst_14417 = (state_14476[(7)]);
var inst_14416 = (state_14476[(8)]);
var inst_14419 = (inst_14417 < inst_14416);
var state_14476__$1 = state_14476;
if(cljs.core.truth_(inst_14419)){
var statearr_14484_16827 = state_14476__$1;
(statearr_14484_16827[(1)] = (6));

} else {
var statearr_14485_16828 = state_14476__$1;
(statearr_14485_16828[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (15))){
var inst_14458 = (state_14476[(9)]);
var inst_14467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14458);
var state_14476__$1 = state_14476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14476__$1,(17),out,inst_14467);
} else {
if((state_val_14477 === (13))){
var inst_14458 = (state_14476[(9)]);
var inst_14458__$1 = (state_14476[(2)]);
var inst_14459 = cljs.core.some(cljs.core.nil_QMARK_,inst_14458__$1);
var state_14476__$1 = (function (){var statearr_14486 = state_14476;
(statearr_14486[(9)] = inst_14458__$1);

return statearr_14486;
})();
if(cljs.core.truth_(inst_14459)){
var statearr_14487_16829 = state_14476__$1;
(statearr_14487_16829[(1)] = (14));

} else {
var statearr_14488_16830 = state_14476__$1;
(statearr_14488_16830[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (6))){
var state_14476__$1 = state_14476;
var statearr_14490_16831 = state_14476__$1;
(statearr_14490_16831[(2)] = null);

(statearr_14490_16831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (17))){
var inst_14469 = (state_14476[(2)]);
var state_14476__$1 = (function (){var statearr_14500 = state_14476;
(statearr_14500[(10)] = inst_14469);

return statearr_14500;
})();
var statearr_14501_16832 = state_14476__$1;
(statearr_14501_16832[(2)] = null);

(statearr_14501_16832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (3))){
var inst_14474 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14476__$1,inst_14474);
} else {
if((state_val_14477 === (12))){
var _ = (function (){var statearr_14502 = state_14476;
(statearr_14502[(4)] = cljs.core.rest((state_14476[(4)])));

return statearr_14502;
})();
var state_14476__$1 = state_14476;
var ex14499 = (state_14476__$1[(2)]);
var statearr_14503_16833 = state_14476__$1;
(statearr_14503_16833[(5)] = ex14499);


if((ex14499 instanceof Object)){
var statearr_14504_16834 = state_14476__$1;
(statearr_14504_16834[(1)] = (11));

(statearr_14504_16834[(5)] = null);

} else {
throw ex14499;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (2))){
var inst_14402 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14416 = cnt;
var inst_14417 = (0);
var state_14476__$1 = (function (){var statearr_14509 = state_14476;
(statearr_14509[(11)] = inst_14402);

(statearr_14509[(8)] = inst_14416);

(statearr_14509[(7)] = inst_14417);

return statearr_14509;
})();
var statearr_14510_16835 = state_14476__$1;
(statearr_14510_16835[(2)] = null);

(statearr_14510_16835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (11))){
var inst_14434 = (state_14476[(2)]);
var inst_14435 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14476__$1 = (function (){var statearr_14511 = state_14476;
(statearr_14511[(12)] = inst_14434);

return statearr_14511;
})();
var statearr_14514_16839 = state_14476__$1;
(statearr_14514_16839[(2)] = inst_14435);

(statearr_14514_16839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (9))){
var inst_14417 = (state_14476[(7)]);
var _ = (function (){var statearr_14515 = state_14476;
(statearr_14515[(4)] = cljs.core.cons((12),(state_14476[(4)])));

return statearr_14515;
})();
var inst_14444 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14417) : chs__$1.call(null,inst_14417));
var inst_14445 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14417) : done.call(null,inst_14417));
var inst_14446 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14444,inst_14445);
var ___$1 = (function (){var statearr_14516 = state_14476;
(statearr_14516[(4)] = cljs.core.rest((state_14476[(4)])));

return statearr_14516;
})();
var state_14476__$1 = state_14476;
var statearr_14517_16847 = state_14476__$1;
(statearr_14517_16847[(2)] = inst_14446);

(statearr_14517_16847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (5))){
var inst_14456 = (state_14476[(2)]);
var state_14476__$1 = (function (){var statearr_14519 = state_14476;
(statearr_14519[(13)] = inst_14456);

return statearr_14519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14476__$1,(13),dchan);
} else {
if((state_val_14477 === (14))){
var inst_14463 = cljs.core.async.close_BANG_(out);
var state_14476__$1 = state_14476;
var statearr_14520_16849 = state_14476__$1;
(statearr_14520_16849[(2)] = inst_14463);

(statearr_14520_16849[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (16))){
var inst_14472 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
var statearr_14522_16850 = state_14476__$1;
(statearr_14522_16850[(2)] = inst_14472);

(statearr_14522_16850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (10))){
var inst_14417 = (state_14476[(7)]);
var inst_14449 = (state_14476[(2)]);
var inst_14450 = (inst_14417 + (1));
var inst_14417__$1 = inst_14450;
var state_14476__$1 = (function (){var statearr_14523 = state_14476;
(statearr_14523[(14)] = inst_14449);

(statearr_14523[(7)] = inst_14417__$1);

return statearr_14523;
})();
var statearr_14524_16851 = state_14476__$1;
(statearr_14524_16851[(2)] = null);

(statearr_14524_16851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (8))){
var inst_14454 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
var statearr_14526_16855 = state_14476__$1;
(statearr_14526_16855[(2)] = inst_14454);

(statearr_14526_16855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_14527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14527[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_14527[(1)] = (1));

return statearr_14527;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_14476){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_14476);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e14531){var ex__11904__auto__ = e14531;
var statearr_14532_16856 = state_14476;
(statearr_14532_16856[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_14476[(4)]))){
var statearr_14533_16861 = state_14476;
(statearr_14533_16861[(1)] = cljs.core.first((state_14476[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16862 = state_14476;
state_14476 = G__16862;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_14476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_14476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_14534 = f__12348__auto__();
(statearr_14534[(6)] = c__12347__auto___16824);

return statearr_14534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14538 = arguments.length;
switch (G__14538) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12347__auto___16865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_14577){
var state_val_14578 = (state_14577[(1)]);
if((state_val_14578 === (7))){
var inst_14550 = (state_14577[(7)]);
var inst_14551 = (state_14577[(8)]);
var inst_14550__$1 = (state_14577[(2)]);
var inst_14551__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14550__$1,(0),null);
var inst_14552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14550__$1,(1),null);
var inst_14554 = (inst_14551__$1 == null);
var state_14577__$1 = (function (){var statearr_14579 = state_14577;
(statearr_14579[(7)] = inst_14550__$1);

(statearr_14579[(8)] = inst_14551__$1);

(statearr_14579[(9)] = inst_14552);

return statearr_14579;
})();
if(cljs.core.truth_(inst_14554)){
var statearr_14580_16866 = state_14577__$1;
(statearr_14580_16866[(1)] = (8));

} else {
var statearr_14581_16867 = state_14577__$1;
(statearr_14581_16867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (1))){
var inst_14540 = cljs.core.vec(chs);
var inst_14541 = inst_14540;
var state_14577__$1 = (function (){var statearr_14582 = state_14577;
(statearr_14582[(10)] = inst_14541);

return statearr_14582;
})();
var statearr_14583_16868 = state_14577__$1;
(statearr_14583_16868[(2)] = null);

(statearr_14583_16868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (4))){
var inst_14541 = (state_14577[(10)]);
var state_14577__$1 = state_14577;
return cljs.core.async.ioc_alts_BANG_(state_14577__$1,(7),inst_14541);
} else {
if((state_val_14578 === (6))){
var inst_14573 = (state_14577[(2)]);
var state_14577__$1 = state_14577;
var statearr_14584_16869 = state_14577__$1;
(statearr_14584_16869[(2)] = inst_14573);

(statearr_14584_16869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (3))){
var inst_14575 = (state_14577[(2)]);
var state_14577__$1 = state_14577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14577__$1,inst_14575);
} else {
if((state_val_14578 === (2))){
var inst_14541 = (state_14577[(10)]);
var inst_14543 = cljs.core.count(inst_14541);
var inst_14544 = (inst_14543 > (0));
var state_14577__$1 = state_14577;
if(cljs.core.truth_(inst_14544)){
var statearr_14586_16870 = state_14577__$1;
(statearr_14586_16870[(1)] = (4));

} else {
var statearr_14587_16871 = state_14577__$1;
(statearr_14587_16871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (11))){
var inst_14541 = (state_14577[(10)]);
var inst_14566 = (state_14577[(2)]);
var tmp14585 = inst_14541;
var inst_14541__$1 = tmp14585;
var state_14577__$1 = (function (){var statearr_14588 = state_14577;
(statearr_14588[(11)] = inst_14566);

(statearr_14588[(10)] = inst_14541__$1);

return statearr_14588;
})();
var statearr_14589_16872 = state_14577__$1;
(statearr_14589_16872[(2)] = null);

(statearr_14589_16872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (9))){
var inst_14551 = (state_14577[(8)]);
var state_14577__$1 = state_14577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14577__$1,(11),out,inst_14551);
} else {
if((state_val_14578 === (5))){
var inst_14571 = cljs.core.async.close_BANG_(out);
var state_14577__$1 = state_14577;
var statearr_14593_16874 = state_14577__$1;
(statearr_14593_16874[(2)] = inst_14571);

(statearr_14593_16874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (10))){
var inst_14569 = (state_14577[(2)]);
var state_14577__$1 = state_14577;
var statearr_14594_16875 = state_14577__$1;
(statearr_14594_16875[(2)] = inst_14569);

(statearr_14594_16875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14578 === (8))){
var inst_14541 = (state_14577[(10)]);
var inst_14550 = (state_14577[(7)]);
var inst_14551 = (state_14577[(8)]);
var inst_14552 = (state_14577[(9)]);
var inst_14556 = (function (){var cs = inst_14541;
var vec__14546 = inst_14550;
var v = inst_14551;
var c = inst_14552;
return (function (p1__14535_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14535_SHARP_);
});
})();
var inst_14557 = cljs.core.filterv(inst_14556,inst_14541);
var inst_14541__$1 = inst_14557;
var state_14577__$1 = (function (){var statearr_14601 = state_14577;
(statearr_14601[(10)] = inst_14541__$1);

return statearr_14601;
})();
var statearr_14602_16879 = state_14577__$1;
(statearr_14602_16879[(2)] = null);

(statearr_14602_16879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_14604 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14604[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_14604[(1)] = (1));

return statearr_14604;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_14577){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_14577);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e14609){var ex__11904__auto__ = e14609;
var statearr_14610_16880 = state_14577;
(statearr_14610_16880[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_14577[(4)]))){
var statearr_14613_16881 = state_14577;
(statearr_14613_16881[(1)] = cljs.core.first((state_14577[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16885 = state_14577;
state_14577 = G__16885;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_14577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_14577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_14615 = f__12348__auto__();
(statearr_14615[(6)] = c__12347__auto___16865);

return statearr_14615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14624 = arguments.length;
switch (G__14624) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12347__auto___16888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_14651){
var state_val_14652 = (state_14651[(1)]);
if((state_val_14652 === (7))){
var inst_14633 = (state_14651[(7)]);
var inst_14633__$1 = (state_14651[(2)]);
var inst_14634 = (inst_14633__$1 == null);
var inst_14635 = cljs.core.not(inst_14634);
var state_14651__$1 = (function (){var statearr_14653 = state_14651;
(statearr_14653[(7)] = inst_14633__$1);

return statearr_14653;
})();
if(inst_14635){
var statearr_14655_16889 = state_14651__$1;
(statearr_14655_16889[(1)] = (8));

} else {
var statearr_14659_16890 = state_14651__$1;
(statearr_14659_16890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (1))){
var inst_14628 = (0);
var state_14651__$1 = (function (){var statearr_14660 = state_14651;
(statearr_14660[(8)] = inst_14628);

return statearr_14660;
})();
var statearr_14661_16891 = state_14651__$1;
(statearr_14661_16891[(2)] = null);

(statearr_14661_16891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (4))){
var state_14651__$1 = state_14651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14651__$1,(7),ch);
} else {
if((state_val_14652 === (6))){
var inst_14646 = (state_14651[(2)]);
var state_14651__$1 = state_14651;
var statearr_14662_16892 = state_14651__$1;
(statearr_14662_16892[(2)] = inst_14646);

(statearr_14662_16892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (3))){
var inst_14648 = (state_14651[(2)]);
var inst_14649 = cljs.core.async.close_BANG_(out);
var state_14651__$1 = (function (){var statearr_14667 = state_14651;
(statearr_14667[(9)] = inst_14648);

return statearr_14667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14651__$1,inst_14649);
} else {
if((state_val_14652 === (2))){
var inst_14628 = (state_14651[(8)]);
var inst_14630 = (inst_14628 < n);
var state_14651__$1 = state_14651;
if(cljs.core.truth_(inst_14630)){
var statearr_14668_16897 = state_14651__$1;
(statearr_14668_16897[(1)] = (4));

} else {
var statearr_14669_16898 = state_14651__$1;
(statearr_14669_16898[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (11))){
var inst_14628 = (state_14651[(8)]);
var inst_14638 = (state_14651[(2)]);
var inst_14639 = (inst_14628 + (1));
var inst_14628__$1 = inst_14639;
var state_14651__$1 = (function (){var statearr_14670 = state_14651;
(statearr_14670[(10)] = inst_14638);

(statearr_14670[(8)] = inst_14628__$1);

return statearr_14670;
})();
var statearr_14671_16900 = state_14651__$1;
(statearr_14671_16900[(2)] = null);

(statearr_14671_16900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (9))){
var state_14651__$1 = state_14651;
var statearr_14673_16901 = state_14651__$1;
(statearr_14673_16901[(2)] = null);

(statearr_14673_16901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (5))){
var state_14651__$1 = state_14651;
var statearr_14674_16902 = state_14651__$1;
(statearr_14674_16902[(2)] = null);

(statearr_14674_16902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (10))){
var inst_14643 = (state_14651[(2)]);
var state_14651__$1 = state_14651;
var statearr_14678_16903 = state_14651__$1;
(statearr_14678_16903[(2)] = inst_14643);

(statearr_14678_16903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14652 === (8))){
var inst_14633 = (state_14651[(7)]);
var state_14651__$1 = state_14651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14651__$1,(11),out,inst_14633);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_14679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14679[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_14679[(1)] = (1));

return statearr_14679;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_14651){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_14651);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e14680){var ex__11904__auto__ = e14680;
var statearr_14681_16908 = state_14651;
(statearr_14681_16908[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_14651[(4)]))){
var statearr_14682_16909 = state_14651;
(statearr_14682_16909[(1)] = cljs.core.first((state_14651[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16910 = state_14651;
state_14651 = G__16910;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_14651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_14651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_14683 = f__12348__auto__();
(statearr_14683[(6)] = c__12347__auto___16888);

return statearr_14683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14704 = (function (f,ch,meta14689,_,fn1,meta14705){
this.f = f;
this.ch = ch;
this.meta14689 = meta14689;
this._ = _;
this.fn1 = fn1;
this.meta14705 = meta14705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14706,meta14705__$1){
var self__ = this;
var _14706__$1 = this;
return (new cljs.core.async.t_cljs$core$async14704(self__.f,self__.ch,self__.meta14689,self__._,self__.fn1,meta14705__$1));
}));

(cljs.core.async.t_cljs$core$async14704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14706){
var self__ = this;
var _14706__$1 = this;
return self__.meta14705;
}));

(cljs.core.async.t_cljs$core$async14704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14687_SHARP_){
var G__14710 = (((p1__14687_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14687_SHARP_) : self__.f.call(null,p1__14687_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14710) : f1.call(null,G__14710));
});
}));

(cljs.core.async.t_cljs$core$async14704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14689","meta14689",2014320018,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14688","cljs.core.async/t_cljs$core$async14688",1616925586,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14705","meta14705",-1618311471,null)], null);
}));

(cljs.core.async.t_cljs$core$async14704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14704");

(cljs.core.async.t_cljs$core$async14704.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14704.
 */
cljs.core.async.__GT_t_cljs$core$async14704 = (function cljs$core$async$__GT_t_cljs$core$async14704(f,ch,meta14689,_,fn1,meta14705){
return (new cljs.core.async.t_cljs$core$async14704(f,ch,meta14689,_,fn1,meta14705));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14688 = (function (f,ch,meta14689){
this.f = f;
this.ch = ch;
this.meta14689 = meta14689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14690,meta14689__$1){
var self__ = this;
var _14690__$1 = this;
return (new cljs.core.async.t_cljs$core$async14688(self__.f,self__.ch,meta14689__$1));
}));

(cljs.core.async.t_cljs$core$async14688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14690){
var self__ = this;
var _14690__$1 = this;
return self__.meta14689;
}));

(cljs.core.async.t_cljs$core$async14688.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14688.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14688.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async14704(self__.f,self__.ch,self__.meta14689,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14711 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14711) : self__.f.call(null,G__14711));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14688.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14689","meta14689",2014320018,null)], null);
}));

(cljs.core.async.t_cljs$core$async14688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14688");

(cljs.core.async.t_cljs$core$async14688.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14688.
 */
cljs.core.async.__GT_t_cljs$core$async14688 = (function cljs$core$async$__GT_t_cljs$core$async14688(f,ch,meta14689){
return (new cljs.core.async.t_cljs$core$async14688(f,ch,meta14689));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14688(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14715 = (function (f,ch,meta14716){
this.f = f;
this.ch = ch;
this.meta14716 = meta14716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14717,meta14716__$1){
var self__ = this;
var _14717__$1 = this;
return (new cljs.core.async.t_cljs$core$async14715(self__.f,self__.ch,meta14716__$1));
}));

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14717){
var self__ = this;
var _14717__$1 = this;
return self__.meta14716;
}));

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14715.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14716","meta14716",-707433743,null)], null);
}));

(cljs.core.async.t_cljs$core$async14715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14715");

(cljs.core.async.t_cljs$core$async14715.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14715.
 */
cljs.core.async.__GT_t_cljs$core$async14715 = (function cljs$core$async$__GT_t_cljs$core$async14715(f,ch,meta14716){
return (new cljs.core.async.t_cljs$core$async14715(f,ch,meta14716));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14715(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14720 = (function (p,ch,meta14721){
this.p = p;
this.ch = ch;
this.meta14721 = meta14721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14722,meta14721__$1){
var self__ = this;
var _14722__$1 = this;
return (new cljs.core.async.t_cljs$core$async14720(self__.p,self__.ch,meta14721__$1));
}));

(cljs.core.async.t_cljs$core$async14720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14722){
var self__ = this;
var _14722__$1 = this;
return self__.meta14721;
}));

(cljs.core.async.t_cljs$core$async14720.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14720.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14720.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14720.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14720.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14720.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14720.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14721","meta14721",816863071,null)], null);
}));

(cljs.core.async.t_cljs$core$async14720.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14720");

(cljs.core.async.t_cljs$core$async14720.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14720");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14720.
 */
cljs.core.async.__GT_t_cljs$core$async14720 = (function cljs$core$async$__GT_t_cljs$core$async14720(p,ch,meta14721){
return (new cljs.core.async.t_cljs$core$async14720(p,ch,meta14721));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async14720(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14728 = arguments.length;
switch (G__14728) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12347__auto___16929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_14750){
var state_val_14751 = (state_14750[(1)]);
if((state_val_14751 === (7))){
var inst_14746 = (state_14750[(2)]);
var state_14750__$1 = state_14750;
var statearr_14752_16930 = state_14750__$1;
(statearr_14752_16930[(2)] = inst_14746);

(statearr_14752_16930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14751 === (1))){
var state_14750__$1 = state_14750;
var statearr_14753_16931 = state_14750__$1;
(statearr_14753_16931[(2)] = null);

(statearr_14753_16931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14751 === (4))){
var inst_14732 = (state_14750[(7)]);
var inst_14732__$1 = (state_14750[(2)]);
var inst_14733 = (inst_14732__$1 == null);
var state_14750__$1 = (function (){var statearr_14754 = state_14750;
(statearr_14754[(7)] = inst_14732__$1);

return statearr_14754;
})();
if(cljs.core.truth_(inst_14733)){
var statearr_14755_16932 = state_14750__$1;
(statearr_14755_16932[(1)] = (5));

} else {
var statearr_14756_16933 = state_14750__$1;
(statearr_14756_16933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14751 === (6))){
var inst_14732 = (state_14750[(7)]);
var inst_14737 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14732) : p.call(null,inst_14732));
var state_14750__$1 = state_14750;
if(cljs.core.truth_(inst_14737)){
var statearr_14760_16934 = state_14750__$1;
(statearr_14760_16934[(1)] = (8));

} else {
var statearr_14761_16935 = state_14750__$1;
(statearr_14761_16935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14751 === (3))){
var inst_14748 = (state_14750[(2)]);
var state_14750__$1 = state_14750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14750__$1,inst_14748);
} else {
if((state_val_14751 === (2))){
var state_14750__$1 = state_14750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14750__$1,(4),ch);
} else {
if((state_val_14751 === (11))){
var inst_14740 = (state_14750[(2)]);
var state_14750__$1 = state_14750;
var statearr_14762_16937 = state_14750__$1;
(statearr_14762_16937[(2)] = inst_14740);

(statearr_14762_16937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14751 === (9))){
var state_14750__$1 = state_14750;
var statearr_14763_16939 = state_14750__$1;
(statearr_14763_16939[(2)] = null);

(statearr_14763_16939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14751 === (5))){
var inst_14735 = cljs.core.async.close_BANG_(out);
var state_14750__$1 = state_14750;
var statearr_14764_16940 = state_14750__$1;
(statearr_14764_16940[(2)] = inst_14735);

(statearr_14764_16940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14751 === (10))){
var inst_14743 = (state_14750[(2)]);
var state_14750__$1 = (function (){var statearr_14765 = state_14750;
(statearr_14765[(8)] = inst_14743);

return statearr_14765;
})();
var statearr_14766_16941 = state_14750__$1;
(statearr_14766_16941[(2)] = null);

(statearr_14766_16941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14751 === (8))){
var inst_14732 = (state_14750[(7)]);
var state_14750__$1 = state_14750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14750__$1,(11),out,inst_14732);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_14771 = [null,null,null,null,null,null,null,null,null];
(statearr_14771[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_14771[(1)] = (1));

return statearr_14771;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_14750){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_14750);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e14772){var ex__11904__auto__ = e14772;
var statearr_14773_16943 = state_14750;
(statearr_14773_16943[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_14750[(4)]))){
var statearr_14774_16947 = state_14750;
(statearr_14774_16947[(1)] = cljs.core.first((state_14750[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16948 = state_14750;
state_14750 = G__16948;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_14750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_14750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_14775 = f__12348__auto__();
(statearr_14775[(6)] = c__12347__auto___16929);

return statearr_14775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14777 = arguments.length;
switch (G__14777) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_14856){
var state_val_14857 = (state_14856[(1)]);
if((state_val_14857 === (7))){
var inst_14852 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14864_16950 = state_14856__$1;
(statearr_14864_16950[(2)] = inst_14852);

(statearr_14864_16950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (20))){
var inst_14808 = (state_14856[(7)]);
var inst_14819 = (state_14856[(2)]);
var inst_14828 = cljs.core.next(inst_14808);
var inst_14794 = inst_14828;
var inst_14795 = null;
var inst_14796 = (0);
var inst_14797 = (0);
var state_14856__$1 = (function (){var statearr_14865 = state_14856;
(statearr_14865[(8)] = inst_14819);

(statearr_14865[(9)] = inst_14794);

(statearr_14865[(10)] = inst_14795);

(statearr_14865[(11)] = inst_14796);

(statearr_14865[(12)] = inst_14797);

return statearr_14865;
})();
var statearr_14866_16951 = state_14856__$1;
(statearr_14866_16951[(2)] = null);

(statearr_14866_16951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (1))){
var state_14856__$1 = state_14856;
var statearr_14867_16952 = state_14856__$1;
(statearr_14867_16952[(2)] = null);

(statearr_14867_16952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (4))){
var inst_14783 = (state_14856[(13)]);
var inst_14783__$1 = (state_14856[(2)]);
var inst_14784 = (inst_14783__$1 == null);
var state_14856__$1 = (function (){var statearr_14868 = state_14856;
(statearr_14868[(13)] = inst_14783__$1);

return statearr_14868;
})();
if(cljs.core.truth_(inst_14784)){
var statearr_14875_16953 = state_14856__$1;
(statearr_14875_16953[(1)] = (5));

} else {
var statearr_14884_16954 = state_14856__$1;
(statearr_14884_16954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (15))){
var state_14856__$1 = state_14856;
var statearr_14894_16955 = state_14856__$1;
(statearr_14894_16955[(2)] = null);

(statearr_14894_16955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (21))){
var state_14856__$1 = state_14856;
var statearr_14898_16956 = state_14856__$1;
(statearr_14898_16956[(2)] = null);

(statearr_14898_16956[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (13))){
var inst_14797 = (state_14856[(12)]);
var inst_14794 = (state_14856[(9)]);
var inst_14795 = (state_14856[(10)]);
var inst_14796 = (state_14856[(11)]);
var inst_14804 = (state_14856[(2)]);
var inst_14805 = (inst_14797 + (1));
var tmp14885 = inst_14796;
var tmp14886 = inst_14795;
var tmp14887 = inst_14794;
var inst_14794__$1 = tmp14887;
var inst_14795__$1 = tmp14886;
var inst_14796__$1 = tmp14885;
var inst_14797__$1 = inst_14805;
var state_14856__$1 = (function (){var statearr_14899 = state_14856;
(statearr_14899[(14)] = inst_14804);

(statearr_14899[(9)] = inst_14794__$1);

(statearr_14899[(10)] = inst_14795__$1);

(statearr_14899[(11)] = inst_14796__$1);

(statearr_14899[(12)] = inst_14797__$1);

return statearr_14899;
})();
var statearr_14900_16957 = state_14856__$1;
(statearr_14900_16957[(2)] = null);

(statearr_14900_16957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (22))){
var state_14856__$1 = state_14856;
var statearr_14901_16958 = state_14856__$1;
(statearr_14901_16958[(2)] = null);

(statearr_14901_16958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (6))){
var inst_14783 = (state_14856[(13)]);
var inst_14792 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14783) : f.call(null,inst_14783));
var inst_14793 = cljs.core.seq(inst_14792);
var inst_14794 = inst_14793;
var inst_14795 = null;
var inst_14796 = (0);
var inst_14797 = (0);
var state_14856__$1 = (function (){var statearr_14902 = state_14856;
(statearr_14902[(9)] = inst_14794);

(statearr_14902[(10)] = inst_14795);

(statearr_14902[(11)] = inst_14796);

(statearr_14902[(12)] = inst_14797);

return statearr_14902;
})();
var statearr_14903_16959 = state_14856__$1;
(statearr_14903_16959[(2)] = null);

(statearr_14903_16959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (17))){
var inst_14808 = (state_14856[(7)]);
var inst_14812 = cljs.core.chunk_first(inst_14808);
var inst_14813 = cljs.core.chunk_rest(inst_14808);
var inst_14814 = cljs.core.count(inst_14812);
var inst_14794 = inst_14813;
var inst_14795 = inst_14812;
var inst_14796 = inst_14814;
var inst_14797 = (0);
var state_14856__$1 = (function (){var statearr_14904 = state_14856;
(statearr_14904[(9)] = inst_14794);

(statearr_14904[(10)] = inst_14795);

(statearr_14904[(11)] = inst_14796);

(statearr_14904[(12)] = inst_14797);

return statearr_14904;
})();
var statearr_14905_16961 = state_14856__$1;
(statearr_14905_16961[(2)] = null);

(statearr_14905_16961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (3))){
var inst_14854 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14856__$1,inst_14854);
} else {
if((state_val_14857 === (12))){
var inst_14842 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14908_16963 = state_14856__$1;
(statearr_14908_16963[(2)] = inst_14842);

(statearr_14908_16963[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (2))){
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14856__$1,(4),in$);
} else {
if((state_val_14857 === (23))){
var inst_14850 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14910_16964 = state_14856__$1;
(statearr_14910_16964[(2)] = inst_14850);

(statearr_14910_16964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (19))){
var inst_14837 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14911_16965 = state_14856__$1;
(statearr_14911_16965[(2)] = inst_14837);

(statearr_14911_16965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (11))){
var inst_14794 = (state_14856[(9)]);
var inst_14808 = (state_14856[(7)]);
var inst_14808__$1 = cljs.core.seq(inst_14794);
var state_14856__$1 = (function (){var statearr_14912 = state_14856;
(statearr_14912[(7)] = inst_14808__$1);

return statearr_14912;
})();
if(inst_14808__$1){
var statearr_14913_16966 = state_14856__$1;
(statearr_14913_16966[(1)] = (14));

} else {
var statearr_14914_16967 = state_14856__$1;
(statearr_14914_16967[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (9))){
var inst_14844 = (state_14856[(2)]);
var inst_14845 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14856__$1 = (function (){var statearr_14915 = state_14856;
(statearr_14915[(15)] = inst_14844);

return statearr_14915;
})();
if(cljs.core.truth_(inst_14845)){
var statearr_14916_16972 = state_14856__$1;
(statearr_14916_16972[(1)] = (21));

} else {
var statearr_14917_16973 = state_14856__$1;
(statearr_14917_16973[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (5))){
var inst_14786 = cljs.core.async.close_BANG_(out);
var state_14856__$1 = state_14856;
var statearr_14924_16978 = state_14856__$1;
(statearr_14924_16978[(2)] = inst_14786);

(statearr_14924_16978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (14))){
var inst_14808 = (state_14856[(7)]);
var inst_14810 = cljs.core.chunked_seq_QMARK_(inst_14808);
var state_14856__$1 = state_14856;
if(inst_14810){
var statearr_14925_16979 = state_14856__$1;
(statearr_14925_16979[(1)] = (17));

} else {
var statearr_14926_16980 = state_14856__$1;
(statearr_14926_16980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (16))){
var inst_14840 = (state_14856[(2)]);
var state_14856__$1 = state_14856;
var statearr_14927_16981 = state_14856__$1;
(statearr_14927_16981[(2)] = inst_14840);

(statearr_14927_16981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14857 === (10))){
var inst_14795 = (state_14856[(10)]);
var inst_14797 = (state_14856[(12)]);
var inst_14802 = cljs.core._nth(inst_14795,inst_14797);
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14856__$1,(13),out,inst_14802);
} else {
if((state_val_14857 === (18))){
var inst_14808 = (state_14856[(7)]);
var inst_14817 = cljs.core.first(inst_14808);
var state_14856__$1 = state_14856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14856__$1,(20),out,inst_14817);
} else {
if((state_val_14857 === (8))){
var inst_14797 = (state_14856[(12)]);
var inst_14796 = (state_14856[(11)]);
var inst_14799 = (inst_14797 < inst_14796);
var inst_14800 = inst_14799;
var state_14856__$1 = state_14856;
if(cljs.core.truth_(inst_14800)){
var statearr_14928_16983 = state_14856__$1;
(statearr_14928_16983[(1)] = (10));

} else {
var statearr_14929_16985 = state_14856__$1;
(statearr_14929_16985[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11901__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11901__auto____0 = (function (){
var statearr_14930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14930[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11901__auto__);

(statearr_14930[(1)] = (1));

return statearr_14930;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11901__auto____1 = (function (state_14856){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_14856);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e14931){var ex__11904__auto__ = e14931;
var statearr_14932_16986 = state_14856;
(statearr_14932_16986[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_14856[(4)]))){
var statearr_14933_16987 = state_14856;
(statearr_14933_16987[(1)] = cljs.core.first((state_14856[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16988 = state_14856;
state_14856 = G__16988;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11901__auto__ = function(state_14856){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11901__auto____1.call(this,state_14856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11901__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11901__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_14934 = f__12348__auto__();
(statearr_14934[(6)] = c__12347__auto__);

return statearr_14934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));

return c__12347__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14936 = arguments.length;
switch (G__14936) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__14941 = arguments.length;
switch (G__14941) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__14943 = arguments.length;
switch (G__14943) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12347__auto___16992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_14977){
var state_val_14978 = (state_14977[(1)]);
if((state_val_14978 === (7))){
var inst_14972 = (state_14977[(2)]);
var state_14977__$1 = state_14977;
var statearr_14985_16993 = state_14977__$1;
(statearr_14985_16993[(2)] = inst_14972);

(statearr_14985_16993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14978 === (1))){
var inst_14952 = null;
var state_14977__$1 = (function (){var statearr_14989 = state_14977;
(statearr_14989[(7)] = inst_14952);

return statearr_14989;
})();
var statearr_14992_16994 = state_14977__$1;
(statearr_14992_16994[(2)] = null);

(statearr_14992_16994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14978 === (4))){
var inst_14957 = (state_14977[(8)]);
var inst_14957__$1 = (state_14977[(2)]);
var inst_14958 = (inst_14957__$1 == null);
var inst_14959 = cljs.core.not(inst_14958);
var state_14977__$1 = (function (){var statearr_14996 = state_14977;
(statearr_14996[(8)] = inst_14957__$1);

return statearr_14996;
})();
if(inst_14959){
var statearr_14997_16995 = state_14977__$1;
(statearr_14997_16995[(1)] = (5));

} else {
var statearr_14998_16996 = state_14977__$1;
(statearr_14998_16996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14978 === (6))){
var state_14977__$1 = state_14977;
var statearr_15005_16998 = state_14977__$1;
(statearr_15005_16998[(2)] = null);

(statearr_15005_16998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14978 === (3))){
var inst_14974 = (state_14977[(2)]);
var inst_14975 = cljs.core.async.close_BANG_(out);
var state_14977__$1 = (function (){var statearr_15006 = state_14977;
(statearr_15006[(9)] = inst_14974);

return statearr_15006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14977__$1,inst_14975);
} else {
if((state_val_14978 === (2))){
var state_14977__$1 = state_14977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14977__$1,(4),ch);
} else {
if((state_val_14978 === (11))){
var inst_14957 = (state_14977[(8)]);
var inst_14966 = (state_14977[(2)]);
var inst_14952 = inst_14957;
var state_14977__$1 = (function (){var statearr_15007 = state_14977;
(statearr_15007[(10)] = inst_14966);

(statearr_15007[(7)] = inst_14952);

return statearr_15007;
})();
var statearr_15008_17001 = state_14977__$1;
(statearr_15008_17001[(2)] = null);

(statearr_15008_17001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14978 === (9))){
var inst_14957 = (state_14977[(8)]);
var state_14977__$1 = state_14977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14977__$1,(11),out,inst_14957);
} else {
if((state_val_14978 === (5))){
var inst_14957 = (state_14977[(8)]);
var inst_14952 = (state_14977[(7)]);
var inst_14961 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14957,inst_14952);
var state_14977__$1 = state_14977;
if(inst_14961){
var statearr_15010_17004 = state_14977__$1;
(statearr_15010_17004[(1)] = (8));

} else {
var statearr_15011_17005 = state_14977__$1;
(statearr_15011_17005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14978 === (10))){
var inst_14969 = (state_14977[(2)]);
var state_14977__$1 = state_14977;
var statearr_15012_17006 = state_14977__$1;
(statearr_15012_17006[(2)] = inst_14969);

(statearr_15012_17006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14978 === (8))){
var inst_14952 = (state_14977[(7)]);
var tmp15009 = inst_14952;
var inst_14952__$1 = tmp15009;
var state_14977__$1 = (function (){var statearr_15013 = state_14977;
(statearr_15013[(7)] = inst_14952__$1);

return statearr_15013;
})();
var statearr_15014_17008 = state_14977__$1;
(statearr_15014_17008[(2)] = null);

(statearr_15014_17008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_15015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15015[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_15015[(1)] = (1));

return statearr_15015;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_14977){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_14977);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e15016){var ex__11904__auto__ = e15016;
var statearr_15017_17009 = state_14977;
(statearr_15017_17009[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_14977[(4)]))){
var statearr_15018_17010 = state_14977;
(statearr_15018_17010[(1)] = cljs.core.first((state_14977[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17011 = state_14977;
state_14977 = G__17011;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_14977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_14977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_15019 = f__12348__auto__();
(statearr_15019[(6)] = c__12347__auto___16992);

return statearr_15019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15024 = arguments.length;
switch (G__15024) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12347__auto___17013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_15064){
var state_val_15065 = (state_15064[(1)]);
if((state_val_15065 === (7))){
var inst_15060 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15071_17014 = state_15064__$1;
(statearr_15071_17014[(2)] = inst_15060);

(statearr_15071_17014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (1))){
var inst_15027 = (new Array(n));
var inst_15028 = inst_15027;
var inst_15029 = (0);
var state_15064__$1 = (function (){var statearr_15072 = state_15064;
(statearr_15072[(7)] = inst_15028);

(statearr_15072[(8)] = inst_15029);

return statearr_15072;
})();
var statearr_15073_17017 = state_15064__$1;
(statearr_15073_17017[(2)] = null);

(statearr_15073_17017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (4))){
var inst_15032 = (state_15064[(9)]);
var inst_15032__$1 = (state_15064[(2)]);
var inst_15033 = (inst_15032__$1 == null);
var inst_15034 = cljs.core.not(inst_15033);
var state_15064__$1 = (function (){var statearr_15076 = state_15064;
(statearr_15076[(9)] = inst_15032__$1);

return statearr_15076;
})();
if(inst_15034){
var statearr_15077_17018 = state_15064__$1;
(statearr_15077_17018[(1)] = (5));

} else {
var statearr_15078_17020 = state_15064__$1;
(statearr_15078_17020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (15))){
var inst_15054 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15079_17021 = state_15064__$1;
(statearr_15079_17021[(2)] = inst_15054);

(statearr_15079_17021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (13))){
var state_15064__$1 = state_15064;
var statearr_15081_17022 = state_15064__$1;
(statearr_15081_17022[(2)] = null);

(statearr_15081_17022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (6))){
var inst_15029 = (state_15064[(8)]);
var inst_15050 = (inst_15029 > (0));
var state_15064__$1 = state_15064;
if(cljs.core.truth_(inst_15050)){
var statearr_15083_17064 = state_15064__$1;
(statearr_15083_17064[(1)] = (12));

} else {
var statearr_15084_17065 = state_15064__$1;
(statearr_15084_17065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (3))){
var inst_15062 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15064__$1,inst_15062);
} else {
if((state_val_15065 === (12))){
var inst_15028 = (state_15064[(7)]);
var inst_15052 = cljs.core.vec(inst_15028);
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15064__$1,(15),out,inst_15052);
} else {
if((state_val_15065 === (2))){
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15064__$1,(4),ch);
} else {
if((state_val_15065 === (11))){
var inst_15044 = (state_15064[(2)]);
var inst_15045 = (new Array(n));
var inst_15028 = inst_15045;
var inst_15029 = (0);
var state_15064__$1 = (function (){var statearr_15088 = state_15064;
(statearr_15088[(10)] = inst_15044);

(statearr_15088[(7)] = inst_15028);

(statearr_15088[(8)] = inst_15029);

return statearr_15088;
})();
var statearr_15089_17066 = state_15064__$1;
(statearr_15089_17066[(2)] = null);

(statearr_15089_17066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (9))){
var inst_15028 = (state_15064[(7)]);
var inst_15042 = cljs.core.vec(inst_15028);
var state_15064__$1 = state_15064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15064__$1,(11),out,inst_15042);
} else {
if((state_val_15065 === (5))){
var inst_15028 = (state_15064[(7)]);
var inst_15029 = (state_15064[(8)]);
var inst_15032 = (state_15064[(9)]);
var inst_15037 = (state_15064[(11)]);
var inst_15036 = (inst_15028[inst_15029] = inst_15032);
var inst_15037__$1 = (inst_15029 + (1));
var inst_15038 = (inst_15037__$1 < n);
var state_15064__$1 = (function (){var statearr_15090 = state_15064;
(statearr_15090[(12)] = inst_15036);

(statearr_15090[(11)] = inst_15037__$1);

return statearr_15090;
})();
if(cljs.core.truth_(inst_15038)){
var statearr_15091_17068 = state_15064__$1;
(statearr_15091_17068[(1)] = (8));

} else {
var statearr_15092_17069 = state_15064__$1;
(statearr_15092_17069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (14))){
var inst_15057 = (state_15064[(2)]);
var inst_15058 = cljs.core.async.close_BANG_(out);
var state_15064__$1 = (function (){var statearr_15094 = state_15064;
(statearr_15094[(13)] = inst_15057);

return statearr_15094;
})();
var statearr_15095_17070 = state_15064__$1;
(statearr_15095_17070[(2)] = inst_15058);

(statearr_15095_17070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (10))){
var inst_15048 = (state_15064[(2)]);
var state_15064__$1 = state_15064;
var statearr_15096_17071 = state_15064__$1;
(statearr_15096_17071[(2)] = inst_15048);

(statearr_15096_17071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15065 === (8))){
var inst_15028 = (state_15064[(7)]);
var inst_15037 = (state_15064[(11)]);
var tmp15093 = inst_15028;
var inst_15028__$1 = tmp15093;
var inst_15029 = inst_15037;
var state_15064__$1 = (function (){var statearr_15097 = state_15064;
(statearr_15097[(7)] = inst_15028__$1);

(statearr_15097[(8)] = inst_15029);

return statearr_15097;
})();
var statearr_15098_17072 = state_15064__$1;
(statearr_15098_17072[(2)] = null);

(statearr_15098_17072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_15099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15099[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_15099[(1)] = (1));

return statearr_15099;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_15064){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_15064);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e15103){var ex__11904__auto__ = e15103;
var statearr_15104_17073 = state_15064;
(statearr_15104_17073[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_15064[(4)]))){
var statearr_15105_17074 = state_15064;
(statearr_15105_17074[(1)] = cljs.core.first((state_15064[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17075 = state_15064;
state_15064 = G__17075;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_15064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_15064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_15106 = f__12348__auto__();
(statearr_15106[(6)] = c__12347__auto___17013);

return statearr_15106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15120 = arguments.length;
switch (G__15120) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12347__auto___17079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12348__auto__ = (function (){var switch__11900__auto__ = (function (state_15188){
var state_val_15189 = (state_15188[(1)]);
if((state_val_15189 === (7))){
var inst_15184 = (state_15188[(2)]);
var state_15188__$1 = state_15188;
var statearr_15190_17081 = state_15188__$1;
(statearr_15190_17081[(2)] = inst_15184);

(statearr_15190_17081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (1))){
var inst_15134 = [];
var inst_15135 = inst_15134;
var inst_15136 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15188__$1 = (function (){var statearr_15191 = state_15188;
(statearr_15191[(7)] = inst_15135);

(statearr_15191[(8)] = inst_15136);

return statearr_15191;
})();
var statearr_15192_17082 = state_15188__$1;
(statearr_15192_17082[(2)] = null);

(statearr_15192_17082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (4))){
var inst_15139 = (state_15188[(9)]);
var inst_15139__$1 = (state_15188[(2)]);
var inst_15140 = (inst_15139__$1 == null);
var inst_15141 = cljs.core.not(inst_15140);
var state_15188__$1 = (function (){var statearr_15196 = state_15188;
(statearr_15196[(9)] = inst_15139__$1);

return statearr_15196;
})();
if(inst_15141){
var statearr_15201_17083 = state_15188__$1;
(statearr_15201_17083[(1)] = (5));

} else {
var statearr_15205_17084 = state_15188__$1;
(statearr_15205_17084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (15))){
var inst_15135 = (state_15188[(7)]);
var inst_15176 = cljs.core.vec(inst_15135);
var state_15188__$1 = state_15188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15188__$1,(18),out,inst_15176);
} else {
if((state_val_15189 === (13))){
var inst_15168 = (state_15188[(2)]);
var state_15188__$1 = state_15188;
var statearr_15209_17085 = state_15188__$1;
(statearr_15209_17085[(2)] = inst_15168);

(statearr_15209_17085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (6))){
var inst_15135 = (state_15188[(7)]);
var inst_15170 = inst_15135.length;
var inst_15171 = (inst_15170 > (0));
var state_15188__$1 = state_15188;
if(cljs.core.truth_(inst_15171)){
var statearr_15210_17086 = state_15188__$1;
(statearr_15210_17086[(1)] = (15));

} else {
var statearr_15215_17087 = state_15188__$1;
(statearr_15215_17087[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (17))){
var inst_15181 = (state_15188[(2)]);
var inst_15182 = cljs.core.async.close_BANG_(out);
var state_15188__$1 = (function (){var statearr_15216 = state_15188;
(statearr_15216[(10)] = inst_15181);

return statearr_15216;
})();
var statearr_15217_17092 = state_15188__$1;
(statearr_15217_17092[(2)] = inst_15182);

(statearr_15217_17092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (3))){
var inst_15186 = (state_15188[(2)]);
var state_15188__$1 = state_15188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15188__$1,inst_15186);
} else {
if((state_val_15189 === (12))){
var inst_15135 = (state_15188[(7)]);
var inst_15157 = cljs.core.vec(inst_15135);
var state_15188__$1 = state_15188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15188__$1,(14),out,inst_15157);
} else {
if((state_val_15189 === (2))){
var state_15188__$1 = state_15188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15188__$1,(4),ch);
} else {
if((state_val_15189 === (11))){
var inst_15135 = (state_15188[(7)]);
var inst_15139 = (state_15188[(9)]);
var inst_15143 = (state_15188[(11)]);
var inst_15151 = inst_15135.push(inst_15139);
var tmp15218 = inst_15135;
var inst_15135__$1 = tmp15218;
var inst_15136 = inst_15143;
var state_15188__$1 = (function (){var statearr_15221 = state_15188;
(statearr_15221[(12)] = inst_15151);

(statearr_15221[(7)] = inst_15135__$1);

(statearr_15221[(8)] = inst_15136);

return statearr_15221;
})();
var statearr_15222_17093 = state_15188__$1;
(statearr_15222_17093[(2)] = null);

(statearr_15222_17093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (9))){
var inst_15136 = (state_15188[(8)]);
var inst_15147 = cljs.core.keyword_identical_QMARK_(inst_15136,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15188__$1 = state_15188;
var statearr_15223_17094 = state_15188__$1;
(statearr_15223_17094[(2)] = inst_15147);

(statearr_15223_17094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (5))){
var inst_15139 = (state_15188[(9)]);
var inst_15143 = (state_15188[(11)]);
var inst_15136 = (state_15188[(8)]);
var inst_15144 = (state_15188[(13)]);
var inst_15143__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15139) : f.call(null,inst_15139));
var inst_15144__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15143__$1,inst_15136);
var state_15188__$1 = (function (){var statearr_15227 = state_15188;
(statearr_15227[(11)] = inst_15143__$1);

(statearr_15227[(13)] = inst_15144__$1);

return statearr_15227;
})();
if(inst_15144__$1){
var statearr_15235_17095 = state_15188__$1;
(statearr_15235_17095[(1)] = (8));

} else {
var statearr_15236_17096 = state_15188__$1;
(statearr_15236_17096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (14))){
var inst_15139 = (state_15188[(9)]);
var inst_15143 = (state_15188[(11)]);
var inst_15160 = (state_15188[(2)]);
var inst_15164 = [];
var inst_15165 = inst_15164.push(inst_15139);
var inst_15135 = inst_15164;
var inst_15136 = inst_15143;
var state_15188__$1 = (function (){var statearr_15240 = state_15188;
(statearr_15240[(14)] = inst_15160);

(statearr_15240[(15)] = inst_15165);

(statearr_15240[(7)] = inst_15135);

(statearr_15240[(8)] = inst_15136);

return statearr_15240;
})();
var statearr_15244_17097 = state_15188__$1;
(statearr_15244_17097[(2)] = null);

(statearr_15244_17097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (16))){
var state_15188__$1 = state_15188;
var statearr_15245_17098 = state_15188__$1;
(statearr_15245_17098[(2)] = null);

(statearr_15245_17098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (10))){
var inst_15149 = (state_15188[(2)]);
var state_15188__$1 = state_15188;
if(cljs.core.truth_(inst_15149)){
var statearr_15246_17099 = state_15188__$1;
(statearr_15246_17099[(1)] = (11));

} else {
var statearr_15247_17100 = state_15188__$1;
(statearr_15247_17100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (18))){
var inst_15178 = (state_15188[(2)]);
var state_15188__$1 = state_15188;
var statearr_15248_17101 = state_15188__$1;
(statearr_15248_17101[(2)] = inst_15178);

(statearr_15248_17101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (8))){
var inst_15144 = (state_15188[(13)]);
var state_15188__$1 = state_15188;
var statearr_15249_17102 = state_15188__$1;
(statearr_15249_17102[(2)] = inst_15144);

(statearr_15249_17102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11901__auto__ = null;
var cljs$core$async$state_machine__11901__auto____0 = (function (){
var statearr_15250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15250[(0)] = cljs$core$async$state_machine__11901__auto__);

(statearr_15250[(1)] = (1));

return statearr_15250;
});
var cljs$core$async$state_machine__11901__auto____1 = (function (state_15188){
while(true){
var ret_value__11902__auto__ = (function (){try{while(true){
var result__11903__auto__ = switch__11900__auto__(state_15188);
if(cljs.core.keyword_identical_QMARK_(result__11903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11903__auto__;
}
break;
}
}catch (e15251){var ex__11904__auto__ = e15251;
var statearr_15252_17104 = state_15188;
(statearr_15252_17104[(2)] = ex__11904__auto__);


if(cljs.core.seq((state_15188[(4)]))){
var statearr_15253_17105 = state_15188;
(statearr_15253_17105[(1)] = cljs.core.first((state_15188[(4)])));

} else {
throw ex__11904__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17106 = state_15188;
state_15188 = G__17106;
continue;
} else {
return ret_value__11902__auto__;
}
break;
}
});
cljs$core$async$state_machine__11901__auto__ = function(state_15188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11901__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11901__auto____1.call(this,state_15188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11901__auto____0;
cljs$core$async$state_machine__11901__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11901__auto____1;
return cljs$core$async$state_machine__11901__auto__;
})()
})();
var state__12349__auto__ = (function (){var statearr_15254 = f__12348__auto__();
(statearr_15254[(6)] = c__12347__auto___17079);

return statearr_15254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12349__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
