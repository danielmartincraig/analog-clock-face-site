goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56164 = arguments.length;
switch (G__56164) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56166 = (function (f,blockable,meta56167){
this.f = f;
this.blockable = blockable;
this.meta56167 = meta56167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56168,meta56167__$1){
var self__ = this;
var _56168__$1 = this;
return (new cljs.core.async.t_cljs$core$async56166(self__.f,self__.blockable,meta56167__$1));
}));

(cljs.core.async.t_cljs$core$async56166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56168){
var self__ = this;
var _56168__$1 = this;
return self__.meta56167;
}));

(cljs.core.async.t_cljs$core$async56166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56167","meta56167",-1682531306,null)], null);
}));

(cljs.core.async.t_cljs$core$async56166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56166");

(cljs.core.async.t_cljs$core$async56166.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56166.
 */
cljs.core.async.__GT_t_cljs$core$async56166 = (function cljs$core$async$__GT_t_cljs$core$async56166(f__$1,blockable__$1,meta56167){
return (new cljs.core.async.t_cljs$core$async56166(f__$1,blockable__$1,meta56167));
});

}

return (new cljs.core.async.t_cljs$core$async56166(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__56206 = arguments.length;
switch (G__56206) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56225 = arguments.length;
switch (G__56225) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__56264 = arguments.length;
switch (G__56264) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_59292 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59292) : fn1.call(null,val_59292));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59292) : fn1.call(null,val_59292));
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
var G__56301 = arguments.length;
switch (G__56301) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___59303 = n;
var x_59305 = (0);
while(true){
if((x_59305 < n__4613__auto___59303)){
(a[x_59305] = x_59305);

var G__59306 = (x_59305 + (1));
x_59305 = G__59306;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56320 = (function (flag,meta56321){
this.flag = flag;
this.meta56321 = meta56321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56322,meta56321__$1){
var self__ = this;
var _56322__$1 = this;
return (new cljs.core.async.t_cljs$core$async56320(self__.flag,meta56321__$1));
}));

(cljs.core.async.t_cljs$core$async56320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56322){
var self__ = this;
var _56322__$1 = this;
return self__.meta56321;
}));

(cljs.core.async.t_cljs$core$async56320.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56321","meta56321",1427229788,null)], null);
}));

(cljs.core.async.t_cljs$core$async56320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56320");

(cljs.core.async.t_cljs$core$async56320.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56320.
 */
cljs.core.async.__GT_t_cljs$core$async56320 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56320(flag__$1,meta56321){
return (new cljs.core.async.t_cljs$core$async56320(flag__$1,meta56321));
});

}

return (new cljs.core.async.t_cljs$core$async56320(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56339 = (function (flag,cb,meta56340){
this.flag = flag;
this.cb = cb;
this.meta56340 = meta56340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56341,meta56340__$1){
var self__ = this;
var _56341__$1 = this;
return (new cljs.core.async.t_cljs$core$async56339(self__.flag,self__.cb,meta56340__$1));
}));

(cljs.core.async.t_cljs$core$async56339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56341){
var self__ = this;
var _56341__$1 = this;
return self__.meta56340;
}));

(cljs.core.async.t_cljs$core$async56339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56340","meta56340",1851698567,null)], null);
}));

(cljs.core.async.t_cljs$core$async56339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56339");

(cljs.core.async.t_cljs$core$async56339.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async56339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56339.
 */
cljs.core.async.__GT_t_cljs$core$async56339 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56339(flag__$1,cb__$1,meta56340){
return (new cljs.core.async.t_cljs$core$async56339(flag__$1,cb__$1,meta56340));
});

}

return (new cljs.core.async.t_cljs$core$async56339(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56349_SHARP_){
var G__56361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56349_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56361) : fret.call(null,G__56361));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56350_SHARP_){
var G__56363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56350_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56363) : fret.call(null,G__56363));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__59320 = (i + (1));
i = G__59320;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___59327 = arguments.length;
var i__4737__auto___59329 = (0);
while(true){
if((i__4737__auto___59329 < len__4736__auto___59327)){
args__4742__auto__.push((arguments[i__4737__auto___59329]));

var G__59333 = (i__4737__auto___59329 + (1));
i__4737__auto___59329 = G__59333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56375){
var map__56378 = p__56375;
var map__56378__$1 = (((((!((map__56378 == null))))?(((((map__56378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56378):map__56378);
var opts = map__56378__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56369){
var G__56370 = cljs.core.first(seq56369);
var seq56369__$1 = cljs.core.next(seq56369);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56370,seq56369__$1);
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
var G__56394 = arguments.length;
switch (G__56394) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__56008__auto___59348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_56467){
var state_val_56469 = (state_56467[(1)]);
if((state_val_56469 === (7))){
var inst_56457 = (state_56467[(2)]);
var state_56467__$1 = state_56467;
var statearr_56484_59352 = state_56467__$1;
(statearr_56484_59352[(2)] = inst_56457);

(statearr_56484_59352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (1))){
var state_56467__$1 = state_56467;
var statearr_56489_59353 = state_56467__$1;
(statearr_56489_59353[(2)] = null);

(statearr_56489_59353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (4))){
var inst_56414 = (state_56467[(7)]);
var inst_56414__$1 = (state_56467[(2)]);
var inst_56427 = (inst_56414__$1 == null);
var state_56467__$1 = (function (){var statearr_56494 = state_56467;
(statearr_56494[(7)] = inst_56414__$1);

return statearr_56494;
})();
if(cljs.core.truth_(inst_56427)){
var statearr_56495_59357 = state_56467__$1;
(statearr_56495_59357[(1)] = (5));

} else {
var statearr_56500_59359 = state_56467__$1;
(statearr_56500_59359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (13))){
var state_56467__$1 = state_56467;
var statearr_56505_59364 = state_56467__$1;
(statearr_56505_59364[(2)] = null);

(statearr_56505_59364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (6))){
var inst_56414 = (state_56467[(7)]);
var state_56467__$1 = state_56467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56467__$1,(11),to,inst_56414);
} else {
if((state_val_56469 === (3))){
var inst_56460 = (state_56467[(2)]);
var state_56467__$1 = state_56467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56467__$1,inst_56460);
} else {
if((state_val_56469 === (12))){
var state_56467__$1 = state_56467;
var statearr_56518_59365 = state_56467__$1;
(statearr_56518_59365[(2)] = null);

(statearr_56518_59365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (2))){
var state_56467__$1 = state_56467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56467__$1,(4),from);
} else {
if((state_val_56469 === (11))){
var inst_56440 = (state_56467[(2)]);
var state_56467__$1 = state_56467;
if(cljs.core.truth_(inst_56440)){
var statearr_56521_59372 = state_56467__$1;
(statearr_56521_59372[(1)] = (12));

} else {
var statearr_56522_59373 = state_56467__$1;
(statearr_56522_59373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (9))){
var state_56467__$1 = state_56467;
var statearr_56523_59376 = state_56467__$1;
(statearr_56523_59376[(2)] = null);

(statearr_56523_59376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (5))){
var state_56467__$1 = state_56467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56529_59377 = state_56467__$1;
(statearr_56529_59377[(1)] = (8));

} else {
var statearr_56530_59378 = state_56467__$1;
(statearr_56530_59378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (14))){
var inst_56455 = (state_56467[(2)]);
var state_56467__$1 = state_56467;
var statearr_56531_59379 = state_56467__$1;
(statearr_56531_59379[(2)] = inst_56455);

(statearr_56531_59379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (10))){
var inst_56437 = (state_56467[(2)]);
var state_56467__$1 = state_56467;
var statearr_56532_59385 = state_56467__$1;
(statearr_56532_59385[(2)] = inst_56437);

(statearr_56532_59385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56469 === (8))){
var inst_56434 = cljs.core.async.close_BANG_(to);
var state_56467__$1 = state_56467;
var statearr_56533_59387 = state_56467__$1;
(statearr_56533_59387[(2)] = inst_56434);

(statearr_56533_59387[(1)] = (10));


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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_56539 = [null,null,null,null,null,null,null,null];
(statearr_56539[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_56539[(1)] = (1));

return statearr_56539;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_56467){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_56467);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e56544){var ex__55817__auto__ = e56544;
var statearr_56545_59392 = state_56467;
(statearr_56545_59392[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_56467[(4)]))){
var statearr_56546_59393 = state_56467;
(statearr_56546_59393[(1)] = cljs.core.first((state_56467[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59395 = state_56467;
state_56467 = G__59395;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_56467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_56467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_56555 = f__56009__auto__();
(statearr_56555[(6)] = c__56008__auto___59348);

return statearr_56555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
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
var process = (function (p__56568){
var vec__56571 = p__56568;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56571,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56571,(1),null);
var job = vec__56571;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56008__auto___59404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_56584){
var state_val_56585 = (state_56584[(1)]);
if((state_val_56585 === (1))){
var state_56584__$1 = state_56584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56584__$1,(2),res,v);
} else {
if((state_val_56585 === (2))){
var inst_56575 = (state_56584[(2)]);
var inst_56576 = cljs.core.async.close_BANG_(res);
var state_56584__$1 = (function (){var statearr_56590 = state_56584;
(statearr_56590[(7)] = inst_56575);

return statearr_56590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56584__$1,inst_56576);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0 = (function (){
var statearr_56593 = [null,null,null,null,null,null,null,null];
(statearr_56593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__);

(statearr_56593[(1)] = (1));

return statearr_56593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1 = (function (state_56584){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_56584);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e56598){var ex__55817__auto__ = e56598;
var statearr_56599_59409 = state_56584;
(statearr_56599_59409[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_56584[(4)]))){
var statearr_56602_59411 = state_56584;
(statearr_56602_59411[(1)] = cljs.core.first((state_56584[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59414 = state_56584;
state_56584 = G__59414;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = function(state_56584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1.call(this,state_56584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_56607 = f__56009__auto__();
(statearr_56607[(6)] = c__56008__auto___59404);

return statearr_56607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56614){
var vec__56615 = p__56614;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56615,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56615,(1),null);
var job = vec__56615;
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
var n__4613__auto___59421 = n;
var __59423 = (0);
while(true){
if((__59423 < n__4613__auto___59421)){
var G__56618_59424 = type;
var G__56618_59425__$1 = (((G__56618_59424 instanceof cljs.core.Keyword))?G__56618_59424.fqn:null);
switch (G__56618_59425__$1) {
case "compute":
var c__56008__auto___59427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59423,c__56008__auto___59427,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async){
return (function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = ((function (__59423,c__56008__auto___59427,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async){
return (function (state_56633){
var state_val_56634 = (state_56633[(1)]);
if((state_val_56634 === (1))){
var state_56633__$1 = state_56633;
var statearr_56644_59434 = state_56633__$1;
(statearr_56644_59434[(2)] = null);

(statearr_56644_59434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56634 === (2))){
var state_56633__$1 = state_56633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56633__$1,(4),jobs);
} else {
if((state_val_56634 === (3))){
var inst_56631 = (state_56633[(2)]);
var state_56633__$1 = state_56633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56633__$1,inst_56631);
} else {
if((state_val_56634 === (4))){
var inst_56621 = (state_56633[(2)]);
var inst_56624 = process(inst_56621);
var state_56633__$1 = state_56633;
if(cljs.core.truth_(inst_56624)){
var statearr_56650_59436 = state_56633__$1;
(statearr_56650_59436[(1)] = (5));

} else {
var statearr_56655_59437 = state_56633__$1;
(statearr_56655_59437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56634 === (5))){
var state_56633__$1 = state_56633;
var statearr_56656_59438 = state_56633__$1;
(statearr_56656_59438[(2)] = null);

(statearr_56656_59438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56634 === (6))){
var state_56633__$1 = state_56633;
var statearr_56658_59441 = state_56633__$1;
(statearr_56658_59441[(2)] = null);

(statearr_56658_59441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56634 === (7))){
var inst_56629 = (state_56633[(2)]);
var state_56633__$1 = state_56633;
var statearr_56666_59445 = state_56633__$1;
(statearr_56666_59445[(2)] = inst_56629);

(statearr_56666_59445[(1)] = (3));


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
});})(__59423,c__56008__auto___59427,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async))
;
return ((function (__59423,switch__55813__auto__,c__56008__auto___59427,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0 = (function (){
var statearr_56671 = [null,null,null,null,null,null,null];
(statearr_56671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__);

(statearr_56671[(1)] = (1));

return statearr_56671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1 = (function (state_56633){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_56633);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e56672){var ex__55817__auto__ = e56672;
var statearr_56673_59451 = state_56633;
(statearr_56673_59451[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_56633[(4)]))){
var statearr_56678_59452 = state_56633;
(statearr_56678_59452[(1)] = cljs.core.first((state_56633[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59456 = state_56633;
state_56633 = G__59456;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = function(state_56633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1.call(this,state_56633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__;
})()
;})(__59423,switch__55813__auto__,c__56008__auto___59427,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async))
})();
var state__56010__auto__ = (function (){var statearr_56684 = f__56009__auto__();
(statearr_56684[(6)] = c__56008__auto___59427);

return statearr_56684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
});})(__59423,c__56008__auto___59427,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async))
);


break;
case "async":
var c__56008__auto___59458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59423,c__56008__auto___59458,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async){
return (function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = ((function (__59423,c__56008__auto___59458,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async){
return (function (state_56706){
var state_val_56707 = (state_56706[(1)]);
if((state_val_56707 === (1))){
var state_56706__$1 = state_56706;
var statearr_56721_59461 = state_56706__$1;
(statearr_56721_59461[(2)] = null);

(statearr_56721_59461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (2))){
var state_56706__$1 = state_56706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56706__$1,(4),jobs);
} else {
if((state_val_56707 === (3))){
var inst_56704 = (state_56706[(2)]);
var state_56706__$1 = state_56706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56706__$1,inst_56704);
} else {
if((state_val_56707 === (4))){
var inst_56691 = (state_56706[(2)]);
var inst_56692 = async(inst_56691);
var state_56706__$1 = state_56706;
if(cljs.core.truth_(inst_56692)){
var statearr_56734_59468 = state_56706__$1;
(statearr_56734_59468[(1)] = (5));

} else {
var statearr_56739_59469 = state_56706__$1;
(statearr_56739_59469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (5))){
var state_56706__$1 = state_56706;
var statearr_56744_59474 = state_56706__$1;
(statearr_56744_59474[(2)] = null);

(statearr_56744_59474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (6))){
var state_56706__$1 = state_56706;
var statearr_56749_59479 = state_56706__$1;
(statearr_56749_59479[(2)] = null);

(statearr_56749_59479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (7))){
var inst_56701 = (state_56706[(2)]);
var state_56706__$1 = state_56706;
var statearr_56754_59483 = state_56706__$1;
(statearr_56754_59483[(2)] = inst_56701);

(statearr_56754_59483[(1)] = (3));


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
});})(__59423,c__56008__auto___59458,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async))
;
return ((function (__59423,switch__55813__auto__,c__56008__auto___59458,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0 = (function (){
var statearr_56763 = [null,null,null,null,null,null,null];
(statearr_56763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__);

(statearr_56763[(1)] = (1));

return statearr_56763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1 = (function (state_56706){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_56706);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e56764){var ex__55817__auto__ = e56764;
var statearr_56765_59486 = state_56706;
(statearr_56765_59486[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_56706[(4)]))){
var statearr_56770_59488 = state_56706;
(statearr_56770_59488[(1)] = cljs.core.first((state_56706[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59493 = state_56706;
state_56706 = G__59493;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = function(state_56706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1.call(this,state_56706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__;
})()
;})(__59423,switch__55813__auto__,c__56008__auto___59458,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async))
})();
var state__56010__auto__ = (function (){var statearr_56773 = f__56009__auto__();
(statearr_56773[(6)] = c__56008__auto___59458);

return statearr_56773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
});})(__59423,c__56008__auto___59458,G__56618_59424,G__56618_59425__$1,n__4613__auto___59421,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56618_59425__$1)].join('')));

}

var G__59494 = (__59423 + (1));
__59423 = G__59494;
continue;
} else {
}
break;
}

var c__56008__auto___59495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_56823){
var state_val_56824 = (state_56823[(1)]);
if((state_val_56824 === (7))){
var inst_56811 = (state_56823[(2)]);
var state_56823__$1 = state_56823;
var statearr_56827_59498 = state_56823__$1;
(statearr_56827_59498[(2)] = inst_56811);

(statearr_56827_59498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56824 === (1))){
var state_56823__$1 = state_56823;
var statearr_56834_59500 = state_56823__$1;
(statearr_56834_59500[(2)] = null);

(statearr_56834_59500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56824 === (4))){
var inst_56780 = (state_56823[(7)]);
var inst_56780__$1 = (state_56823[(2)]);
var inst_56781 = (inst_56780__$1 == null);
var state_56823__$1 = (function (){var statearr_56845 = state_56823;
(statearr_56845[(7)] = inst_56780__$1);

return statearr_56845;
})();
if(cljs.core.truth_(inst_56781)){
var statearr_56846_59505 = state_56823__$1;
(statearr_56846_59505[(1)] = (5));

} else {
var statearr_56851_59506 = state_56823__$1;
(statearr_56851_59506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56824 === (6))){
var inst_56780 = (state_56823[(7)]);
var inst_56787 = (state_56823[(8)]);
var inst_56787__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56798 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56799 = [inst_56780,inst_56787__$1];
var inst_56800 = (new cljs.core.PersistentVector(null,2,(5),inst_56798,inst_56799,null));
var state_56823__$1 = (function (){var statearr_56858 = state_56823;
(statearr_56858[(8)] = inst_56787__$1);

return statearr_56858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56823__$1,(8),jobs,inst_56800);
} else {
if((state_val_56824 === (3))){
var inst_56813 = (state_56823[(2)]);
var state_56823__$1 = state_56823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56823__$1,inst_56813);
} else {
if((state_val_56824 === (2))){
var state_56823__$1 = state_56823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56823__$1,(4),from);
} else {
if((state_val_56824 === (9))){
var inst_56808 = (state_56823[(2)]);
var state_56823__$1 = (function (){var statearr_56867 = state_56823;
(statearr_56867[(9)] = inst_56808);

return statearr_56867;
})();
var statearr_56869_59509 = state_56823__$1;
(statearr_56869_59509[(2)] = null);

(statearr_56869_59509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56824 === (5))){
var inst_56785 = cljs.core.async.close_BANG_(jobs);
var state_56823__$1 = state_56823;
var statearr_56877_59510 = state_56823__$1;
(statearr_56877_59510[(2)] = inst_56785);

(statearr_56877_59510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56824 === (8))){
var inst_56787 = (state_56823[(8)]);
var inst_56802 = (state_56823[(2)]);
var state_56823__$1 = (function (){var statearr_56879 = state_56823;
(statearr_56879[(10)] = inst_56802);

return statearr_56879;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56823__$1,(9),results,inst_56787);
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
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0 = (function (){
var statearr_56881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__);

(statearr_56881[(1)] = (1));

return statearr_56881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1 = (function (state_56823){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_56823);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e56888){var ex__55817__auto__ = e56888;
var statearr_56889_59523 = state_56823;
(statearr_56889_59523[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_56823[(4)]))){
var statearr_56890_59524 = state_56823;
(statearr_56890_59524[(1)] = cljs.core.first((state_56823[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59525 = state_56823;
state_56823 = G__59525;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = function(state_56823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1.call(this,state_56823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_56892 = f__56009__auto__();
(statearr_56892[(6)] = c__56008__auto___59495);

return statearr_56892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));


var c__56008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_56950){
var state_val_56951 = (state_56950[(1)]);
if((state_val_56951 === (7))){
var inst_56945 = (state_56950[(2)]);
var state_56950__$1 = state_56950;
var statearr_56965_59539 = state_56950__$1;
(statearr_56965_59539[(2)] = inst_56945);

(statearr_56965_59539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (20))){
var state_56950__$1 = state_56950;
var statearr_56974_59545 = state_56950__$1;
(statearr_56974_59545[(2)] = null);

(statearr_56974_59545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (1))){
var state_56950__$1 = state_56950;
var statearr_56979_59546 = state_56950__$1;
(statearr_56979_59546[(2)] = null);

(statearr_56979_59546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (4))){
var inst_56898 = (state_56950[(7)]);
var inst_56898__$1 = (state_56950[(2)]);
var inst_56903 = (inst_56898__$1 == null);
var state_56950__$1 = (function (){var statearr_56988 = state_56950;
(statearr_56988[(7)] = inst_56898__$1);

return statearr_56988;
})();
if(cljs.core.truth_(inst_56903)){
var statearr_56989_59550 = state_56950__$1;
(statearr_56989_59550[(1)] = (5));

} else {
var statearr_56990_59551 = state_56950__$1;
(statearr_56990_59551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (15))){
var inst_56923 = (state_56950[(8)]);
var state_56950__$1 = state_56950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56950__$1,(18),to,inst_56923);
} else {
if((state_val_56951 === (21))){
var inst_56940 = (state_56950[(2)]);
var state_56950__$1 = state_56950;
var statearr_56999_59557 = state_56950__$1;
(statearr_56999_59557[(2)] = inst_56940);

(statearr_56999_59557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (13))){
var inst_56942 = (state_56950[(2)]);
var state_56950__$1 = (function (){var statearr_57008 = state_56950;
(statearr_57008[(9)] = inst_56942);

return statearr_57008;
})();
var statearr_57009_59564 = state_56950__$1;
(statearr_57009_59564[(2)] = null);

(statearr_57009_59564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (6))){
var inst_56898 = (state_56950[(7)]);
var state_56950__$1 = state_56950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56950__$1,(11),inst_56898);
} else {
if((state_val_56951 === (17))){
var inst_56935 = (state_56950[(2)]);
var state_56950__$1 = state_56950;
if(cljs.core.truth_(inst_56935)){
var statearr_57020_59574 = state_56950__$1;
(statearr_57020_59574[(1)] = (19));

} else {
var statearr_57021_59576 = state_56950__$1;
(statearr_57021_59576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (3))){
var inst_56947 = (state_56950[(2)]);
var state_56950__$1 = state_56950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56950__$1,inst_56947);
} else {
if((state_val_56951 === (12))){
var inst_56916 = (state_56950[(10)]);
var state_56950__$1 = state_56950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56950__$1,(14),inst_56916);
} else {
if((state_val_56951 === (2))){
var state_56950__$1 = state_56950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56950__$1,(4),results);
} else {
if((state_val_56951 === (19))){
var state_56950__$1 = state_56950;
var statearr_57026_59580 = state_56950__$1;
(statearr_57026_59580[(2)] = null);

(statearr_57026_59580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (11))){
var inst_56916 = (state_56950[(2)]);
var state_56950__$1 = (function (){var statearr_57032 = state_56950;
(statearr_57032[(10)] = inst_56916);

return statearr_57032;
})();
var statearr_57033_59582 = state_56950__$1;
(statearr_57033_59582[(2)] = null);

(statearr_57033_59582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (9))){
var state_56950__$1 = state_56950;
var statearr_57039_59586 = state_56950__$1;
(statearr_57039_59586[(2)] = null);

(statearr_57039_59586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (5))){
var state_56950__$1 = state_56950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57040_59591 = state_56950__$1;
(statearr_57040_59591[(1)] = (8));

} else {
var statearr_57041_59593 = state_56950__$1;
(statearr_57041_59593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (14))){
var inst_56923 = (state_56950[(8)]);
var inst_56923__$1 = (state_56950[(2)]);
var inst_56924 = (inst_56923__$1 == null);
var inst_56927 = cljs.core.not(inst_56924);
var state_56950__$1 = (function (){var statearr_57047 = state_56950;
(statearr_57047[(8)] = inst_56923__$1);

return statearr_57047;
})();
if(inst_56927){
var statearr_57049_59595 = state_56950__$1;
(statearr_57049_59595[(1)] = (15));

} else {
var statearr_57050_59596 = state_56950__$1;
(statearr_57050_59596[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (16))){
var state_56950__$1 = state_56950;
var statearr_57051_59600 = state_56950__$1;
(statearr_57051_59600[(2)] = false);

(statearr_57051_59600[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (10))){
var inst_56910 = (state_56950[(2)]);
var state_56950__$1 = state_56950;
var statearr_57053_59603 = state_56950__$1;
(statearr_57053_59603[(2)] = inst_56910);

(statearr_57053_59603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (18))){
var inst_56932 = (state_56950[(2)]);
var state_56950__$1 = state_56950;
var statearr_57060_59606 = state_56950__$1;
(statearr_57060_59606[(2)] = inst_56932);

(statearr_57060_59606[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (8))){
var inst_56906 = cljs.core.async.close_BANG_(to);
var state_56950__$1 = state_56950;
var statearr_57062_59608 = state_56950__$1;
(statearr_57062_59608[(2)] = inst_56906);

(statearr_57062_59608[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0 = (function (){
var statearr_57064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__);

(statearr_57064[(1)] = (1));

return statearr_57064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1 = (function (state_56950){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_56950);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e57065){var ex__55817__auto__ = e57065;
var statearr_57066_59617 = state_56950;
(statearr_57066_59617[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_56950[(4)]))){
var statearr_57067_59619 = state_56950;
(statearr_57067_59619[(1)] = cljs.core.first((state_56950[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59622 = state_56950;
state_56950 = G__59622;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__ = function(state_56950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1.call(this,state_56950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_57075 = f__56009__auto__();
(statearr_57075[(6)] = c__56008__auto__);

return statearr_57075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));

return c__56008__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57081 = arguments.length;
switch (G__57081) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__57099 = arguments.length;
switch (G__57099) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__57124 = arguments.length;
switch (G__57124) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__56008__auto___59636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_57159){
var state_val_57160 = (state_57159[(1)]);
if((state_val_57160 === (7))){
var inst_57154 = (state_57159[(2)]);
var state_57159__$1 = state_57159;
var statearr_57169_59637 = state_57159__$1;
(statearr_57169_59637[(2)] = inst_57154);

(statearr_57169_59637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (1))){
var state_57159__$1 = state_57159;
var statearr_57170_59638 = state_57159__$1;
(statearr_57170_59638[(2)] = null);

(statearr_57170_59638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (4))){
var inst_57135 = (state_57159[(7)]);
var inst_57135__$1 = (state_57159[(2)]);
var inst_57136 = (inst_57135__$1 == null);
var state_57159__$1 = (function (){var statearr_57172 = state_57159;
(statearr_57172[(7)] = inst_57135__$1);

return statearr_57172;
})();
if(cljs.core.truth_(inst_57136)){
var statearr_57173_59640 = state_57159__$1;
(statearr_57173_59640[(1)] = (5));

} else {
var statearr_57174_59641 = state_57159__$1;
(statearr_57174_59641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (13))){
var state_57159__$1 = state_57159;
var statearr_57179_59647 = state_57159__$1;
(statearr_57179_59647[(2)] = null);

(statearr_57179_59647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (6))){
var inst_57135 = (state_57159[(7)]);
var inst_57141 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57135) : p.call(null,inst_57135));
var state_57159__$1 = state_57159;
if(cljs.core.truth_(inst_57141)){
var statearr_57181_59650 = state_57159__$1;
(statearr_57181_59650[(1)] = (9));

} else {
var statearr_57184_59651 = state_57159__$1;
(statearr_57184_59651[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (3))){
var inst_57156 = (state_57159[(2)]);
var state_57159__$1 = state_57159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57159__$1,inst_57156);
} else {
if((state_val_57160 === (12))){
var state_57159__$1 = state_57159;
var statearr_57186_59653 = state_57159__$1;
(statearr_57186_59653[(2)] = null);

(statearr_57186_59653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (2))){
var state_57159__$1 = state_57159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57159__$1,(4),ch);
} else {
if((state_val_57160 === (11))){
var inst_57135 = (state_57159[(7)]);
var inst_57145 = (state_57159[(2)]);
var state_57159__$1 = state_57159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57159__$1,(8),inst_57145,inst_57135);
} else {
if((state_val_57160 === (9))){
var state_57159__$1 = state_57159;
var statearr_57195_59658 = state_57159__$1;
(statearr_57195_59658[(2)] = tc);

(statearr_57195_59658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (5))){
var inst_57138 = cljs.core.async.close_BANG_(tc);
var inst_57139 = cljs.core.async.close_BANG_(fc);
var state_57159__$1 = (function (){var statearr_57196 = state_57159;
(statearr_57196[(8)] = inst_57138);

return statearr_57196;
})();
var statearr_57201_59660 = state_57159__$1;
(statearr_57201_59660[(2)] = inst_57139);

(statearr_57201_59660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (14))){
var inst_57152 = (state_57159[(2)]);
var state_57159__$1 = state_57159;
var statearr_57202_59666 = state_57159__$1;
(statearr_57202_59666[(2)] = inst_57152);

(statearr_57202_59666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (10))){
var state_57159__$1 = state_57159;
var statearr_57210_59673 = state_57159__$1;
(statearr_57210_59673[(2)] = fc);

(statearr_57210_59673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57160 === (8))){
var inst_57147 = (state_57159[(2)]);
var state_57159__$1 = state_57159;
if(cljs.core.truth_(inst_57147)){
var statearr_57218_59675 = state_57159__$1;
(statearr_57218_59675[(1)] = (12));

} else {
var statearr_57220_59677 = state_57159__$1;
(statearr_57220_59677[(1)] = (13));

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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_57228 = [null,null,null,null,null,null,null,null,null];
(statearr_57228[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_57228[(1)] = (1));

return statearr_57228;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_57159){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_57159);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e57229){var ex__55817__auto__ = e57229;
var statearr_57240_59686 = state_57159;
(statearr_57240_59686[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_57159[(4)]))){
var statearr_57241_59687 = state_57159;
(statearr_57241_59687[(1)] = cljs.core.first((state_57159[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59693 = state_57159;
state_57159 = G__59693;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_57159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_57159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_57243 = f__56009__auto__();
(statearr_57243[(6)] = c__56008__auto___59636);

return statearr_57243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
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
var c__56008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_57288){
var state_val_57289 = (state_57288[(1)]);
if((state_val_57289 === (7))){
var inst_57277 = (state_57288[(2)]);
var state_57288__$1 = state_57288;
var statearr_57300_59702 = state_57288__$1;
(statearr_57300_59702[(2)] = inst_57277);

(statearr_57300_59702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57289 === (1))){
var inst_57250 = init;
var inst_57251 = inst_57250;
var state_57288__$1 = (function (){var statearr_57304 = state_57288;
(statearr_57304[(7)] = inst_57251);

return statearr_57304;
})();
var statearr_57310_59706 = state_57288__$1;
(statearr_57310_59706[(2)] = null);

(statearr_57310_59706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57289 === (4))){
var inst_57258 = (state_57288[(8)]);
var inst_57258__$1 = (state_57288[(2)]);
var inst_57259 = (inst_57258__$1 == null);
var state_57288__$1 = (function (){var statearr_57316 = state_57288;
(statearr_57316[(8)] = inst_57258__$1);

return statearr_57316;
})();
if(cljs.core.truth_(inst_57259)){
var statearr_57321_59713 = state_57288__$1;
(statearr_57321_59713[(1)] = (5));

} else {
var statearr_57322_59715 = state_57288__$1;
(statearr_57322_59715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57289 === (6))){
var inst_57251 = (state_57288[(7)]);
var inst_57263 = (state_57288[(9)]);
var inst_57258 = (state_57288[(8)]);
var inst_57263__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_57251,inst_57258) : f.call(null,inst_57251,inst_57258));
var inst_57264 = cljs.core.reduced_QMARK_(inst_57263__$1);
var state_57288__$1 = (function (){var statearr_57329 = state_57288;
(statearr_57329[(9)] = inst_57263__$1);

return statearr_57329;
})();
if(inst_57264){
var statearr_57334_59727 = state_57288__$1;
(statearr_57334_59727[(1)] = (8));

} else {
var statearr_57335_59728 = state_57288__$1;
(statearr_57335_59728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57289 === (3))){
var inst_57279 = (state_57288[(2)]);
var state_57288__$1 = state_57288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57288__$1,inst_57279);
} else {
if((state_val_57289 === (2))){
var state_57288__$1 = state_57288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57288__$1,(4),ch);
} else {
if((state_val_57289 === (9))){
var inst_57263 = (state_57288[(9)]);
var inst_57251 = inst_57263;
var state_57288__$1 = (function (){var statearr_57346 = state_57288;
(statearr_57346[(7)] = inst_57251);

return statearr_57346;
})();
var statearr_57347_59739 = state_57288__$1;
(statearr_57347_59739[(2)] = null);

(statearr_57347_59739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57289 === (5))){
var inst_57251 = (state_57288[(7)]);
var state_57288__$1 = state_57288;
var statearr_57348_59741 = state_57288__$1;
(statearr_57348_59741[(2)] = inst_57251);

(statearr_57348_59741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57289 === (10))){
var inst_57275 = (state_57288[(2)]);
var state_57288__$1 = state_57288;
var statearr_57349_59745 = state_57288__$1;
(statearr_57349_59745[(2)] = inst_57275);

(statearr_57349_59745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57289 === (8))){
var inst_57263 = (state_57288[(9)]);
var inst_57270 = cljs.core.deref(inst_57263);
var state_57288__$1 = state_57288;
var statearr_57354_59747 = state_57288__$1;
(statearr_57354_59747[(2)] = inst_57270);

(statearr_57354_59747[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__55814__auto__ = null;
var cljs$core$async$reduce_$_state_machine__55814__auto____0 = (function (){
var statearr_57360 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57360[(0)] = cljs$core$async$reduce_$_state_machine__55814__auto__);

(statearr_57360[(1)] = (1));

return statearr_57360;
});
var cljs$core$async$reduce_$_state_machine__55814__auto____1 = (function (state_57288){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_57288);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e57368){var ex__55817__auto__ = e57368;
var statearr_57369_59753 = state_57288;
(statearr_57369_59753[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_57288[(4)]))){
var statearr_57375_59754 = state_57288;
(statearr_57375_59754[(1)] = cljs.core.first((state_57288[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59757 = state_57288;
state_57288 = G__59757;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__55814__auto__ = function(state_57288){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__55814__auto____1.call(this,state_57288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__55814__auto____0;
cljs$core$async$reduce_$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__55814__auto____1;
return cljs$core$async$reduce_$_state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_57381 = f__56009__auto__();
(statearr_57381[(6)] = c__56008__auto__);

return statearr_57381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));

return c__56008__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_57407){
var state_val_57408 = (state_57407[(1)]);
if((state_val_57408 === (1))){
var inst_57396 = cljs.core.async.reduce(f__$1,init,ch);
var state_57407__$1 = state_57407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57407__$1,(2),inst_57396);
} else {
if((state_val_57408 === (2))){
var inst_57398 = (state_57407[(2)]);
var inst_57405 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_57398) : f__$1.call(null,inst_57398));
var state_57407__$1 = state_57407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57407__$1,inst_57405);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__55814__auto__ = null;
var cljs$core$async$transduce_$_state_machine__55814__auto____0 = (function (){
var statearr_57429 = [null,null,null,null,null,null,null];
(statearr_57429[(0)] = cljs$core$async$transduce_$_state_machine__55814__auto__);

(statearr_57429[(1)] = (1));

return statearr_57429;
});
var cljs$core$async$transduce_$_state_machine__55814__auto____1 = (function (state_57407){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_57407);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e57432){var ex__55817__auto__ = e57432;
var statearr_57434_59778 = state_57407;
(statearr_57434_59778[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_57407[(4)]))){
var statearr_57438_59779 = state_57407;
(statearr_57438_59779[(1)] = cljs.core.first((state_57407[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59781 = state_57407;
state_57407 = G__59781;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__55814__auto__ = function(state_57407){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__55814__auto____1.call(this,state_57407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__55814__auto____0;
cljs$core$async$transduce_$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__55814__auto____1;
return cljs$core$async$transduce_$_state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_57445 = f__56009__auto__();
(statearr_57445[(6)] = c__56008__auto__);

return statearr_57445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));

return c__56008__auto__;
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
var G__57452 = arguments.length;
switch (G__57452) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__56008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_57484){
var state_val_57485 = (state_57484[(1)]);
if((state_val_57485 === (7))){
var inst_57465 = (state_57484[(2)]);
var state_57484__$1 = state_57484;
var statearr_57489_59796 = state_57484__$1;
(statearr_57489_59796[(2)] = inst_57465);

(statearr_57489_59796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (1))){
var inst_57458 = cljs.core.seq(coll);
var inst_57459 = inst_57458;
var state_57484__$1 = (function (){var statearr_57490 = state_57484;
(statearr_57490[(7)] = inst_57459);

return statearr_57490;
})();
var statearr_57491_59809 = state_57484__$1;
(statearr_57491_59809[(2)] = null);

(statearr_57491_59809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (4))){
var inst_57459 = (state_57484[(7)]);
var inst_57463 = cljs.core.first(inst_57459);
var state_57484__$1 = state_57484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57484__$1,(7),ch,inst_57463);
} else {
if((state_val_57485 === (13))){
var inst_57477 = (state_57484[(2)]);
var state_57484__$1 = state_57484;
var statearr_57492_59823 = state_57484__$1;
(statearr_57492_59823[(2)] = inst_57477);

(statearr_57492_59823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (6))){
var inst_57468 = (state_57484[(2)]);
var state_57484__$1 = state_57484;
if(cljs.core.truth_(inst_57468)){
var statearr_57493_59824 = state_57484__$1;
(statearr_57493_59824[(1)] = (8));

} else {
var statearr_57494_59825 = state_57484__$1;
(statearr_57494_59825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (3))){
var inst_57481 = (state_57484[(2)]);
var state_57484__$1 = state_57484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57484__$1,inst_57481);
} else {
if((state_val_57485 === (12))){
var state_57484__$1 = state_57484;
var statearr_57496_59826 = state_57484__$1;
(statearr_57496_59826[(2)] = null);

(statearr_57496_59826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (2))){
var inst_57459 = (state_57484[(7)]);
var state_57484__$1 = state_57484;
if(cljs.core.truth_(inst_57459)){
var statearr_57500_59827 = state_57484__$1;
(statearr_57500_59827[(1)] = (4));

} else {
var statearr_57505_59828 = state_57484__$1;
(statearr_57505_59828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (11))){
var inst_57474 = cljs.core.async.close_BANG_(ch);
var state_57484__$1 = state_57484;
var statearr_57506_59834 = state_57484__$1;
(statearr_57506_59834[(2)] = inst_57474);

(statearr_57506_59834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (9))){
var state_57484__$1 = state_57484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57507_59835 = state_57484__$1;
(statearr_57507_59835[(1)] = (11));

} else {
var statearr_57508_59836 = state_57484__$1;
(statearr_57508_59836[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (5))){
var inst_57459 = (state_57484[(7)]);
var state_57484__$1 = state_57484;
var statearr_57509_59837 = state_57484__$1;
(statearr_57509_59837[(2)] = inst_57459);

(statearr_57509_59837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (10))){
var inst_57479 = (state_57484[(2)]);
var state_57484__$1 = state_57484;
var statearr_57511_59838 = state_57484__$1;
(statearr_57511_59838[(2)] = inst_57479);

(statearr_57511_59838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57485 === (8))){
var inst_57459 = (state_57484[(7)]);
var inst_57470 = cljs.core.next(inst_57459);
var inst_57459__$1 = inst_57470;
var state_57484__$1 = (function (){var statearr_57512 = state_57484;
(statearr_57512[(7)] = inst_57459__$1);

return statearr_57512;
})();
var statearr_57513_59839 = state_57484__$1;
(statearr_57513_59839[(2)] = null);

(statearr_57513_59839[(1)] = (2));


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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_57515 = [null,null,null,null,null,null,null,null];
(statearr_57515[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_57515[(1)] = (1));

return statearr_57515;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_57484){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_57484);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e57516){var ex__55817__auto__ = e57516;
var statearr_57517_59840 = state_57484;
(statearr_57517_59840[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_57484[(4)]))){
var statearr_57518_59841 = state_57484;
(statearr_57518_59841[(1)] = cljs.core.first((state_57484[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59842 = state_57484;
state_57484 = G__59842;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_57484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_57484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_57519 = f__56009__auto__();
(statearr_57519[(6)] = c__56008__auto__);

return statearr_57519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));

return c__56008__auto__;
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
var G__57521 = arguments.length;
switch (G__57521) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_59871 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_59871(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59873 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_59873(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59878 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_59878(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59888 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59888(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57535 = (function (ch,cs,meta57536){
this.ch = ch;
this.cs = cs;
this.meta57536 = meta57536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57537,meta57536__$1){
var self__ = this;
var _57537__$1 = this;
return (new cljs.core.async.t_cljs$core$async57535(self__.ch,self__.cs,meta57536__$1));
}));

(cljs.core.async.t_cljs$core$async57535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57537){
var self__ = this;
var _57537__$1 = this;
return self__.meta57536;
}));

(cljs.core.async.t_cljs$core$async57535.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57535.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57535.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async57535.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async57535.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async57535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57536","meta57536",578588475,null)], null);
}));

(cljs.core.async.t_cljs$core$async57535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57535");

(cljs.core.async.t_cljs$core$async57535.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57535.
 */
cljs.core.async.__GT_t_cljs$core$async57535 = (function cljs$core$async$mult_$___GT_t_cljs$core$async57535(ch__$1,cs__$1,meta57536){
return (new cljs.core.async.t_cljs$core$async57535(ch__$1,cs__$1,meta57536));
});

}

return (new cljs.core.async.t_cljs$core$async57535(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__56008__auto___59933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_57720){
var state_val_57724 = (state_57720[(1)]);
if((state_val_57724 === (7))){
var inst_57715 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
var statearr_57727_59934 = state_57720__$1;
(statearr_57727_59934[(2)] = inst_57715);

(statearr_57727_59934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (20))){
var inst_57599 = (state_57720[(7)]);
var inst_57617 = cljs.core.first(inst_57599);
var inst_57618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57617,(0),null);
var inst_57619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57617,(1),null);
var state_57720__$1 = (function (){var statearr_57731 = state_57720;
(statearr_57731[(8)] = inst_57618);

return statearr_57731;
})();
if(cljs.core.truth_(inst_57619)){
var statearr_57733_59935 = state_57720__$1;
(statearr_57733_59935[(1)] = (22));

} else {
var statearr_57734_59936 = state_57720__$1;
(statearr_57734_59936[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (27))){
var inst_57663 = (state_57720[(9)]);
var inst_57653 = (state_57720[(10)]);
var inst_57655 = (state_57720[(11)]);
var inst_57563 = (state_57720[(12)]);
var inst_57663__$1 = cljs.core._nth(inst_57653,inst_57655);
var inst_57664 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57663__$1,inst_57563,done);
var state_57720__$1 = (function (){var statearr_57740 = state_57720;
(statearr_57740[(9)] = inst_57663__$1);

return statearr_57740;
})();
if(cljs.core.truth_(inst_57664)){
var statearr_57741_59939 = state_57720__$1;
(statearr_57741_59939[(1)] = (30));

} else {
var statearr_57742_59940 = state_57720__$1;
(statearr_57742_59940[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (1))){
var state_57720__$1 = state_57720;
var statearr_57747_59941 = state_57720__$1;
(statearr_57747_59941[(2)] = null);

(statearr_57747_59941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (24))){
var inst_57599 = (state_57720[(7)]);
var inst_57628 = (state_57720[(2)]);
var inst_57629 = cljs.core.next(inst_57599);
var inst_57573 = inst_57629;
var inst_57574 = null;
var inst_57575 = (0);
var inst_57576 = (0);
var state_57720__$1 = (function (){var statearr_57749 = state_57720;
(statearr_57749[(13)] = inst_57574);

(statearr_57749[(14)] = inst_57628);

(statearr_57749[(15)] = inst_57573);

(statearr_57749[(16)] = inst_57575);

(statearr_57749[(17)] = inst_57576);

return statearr_57749;
})();
var statearr_57752_59948 = state_57720__$1;
(statearr_57752_59948[(2)] = null);

(statearr_57752_59948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (39))){
var state_57720__$1 = state_57720;
var statearr_57761_59949 = state_57720__$1;
(statearr_57761_59949[(2)] = null);

(statearr_57761_59949[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (4))){
var inst_57563 = (state_57720[(12)]);
var inst_57563__$1 = (state_57720[(2)]);
var inst_57564 = (inst_57563__$1 == null);
var state_57720__$1 = (function (){var statearr_57762 = state_57720;
(statearr_57762[(12)] = inst_57563__$1);

return statearr_57762;
})();
if(cljs.core.truth_(inst_57564)){
var statearr_57763_59953 = state_57720__$1;
(statearr_57763_59953[(1)] = (5));

} else {
var statearr_57764_59956 = state_57720__$1;
(statearr_57764_59956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (15))){
var inst_57574 = (state_57720[(13)]);
var inst_57573 = (state_57720[(15)]);
var inst_57575 = (state_57720[(16)]);
var inst_57576 = (state_57720[(17)]);
var inst_57595 = (state_57720[(2)]);
var inst_57596 = (inst_57576 + (1));
var tmp57757 = inst_57574;
var tmp57758 = inst_57573;
var tmp57759 = inst_57575;
var inst_57573__$1 = tmp57758;
var inst_57574__$1 = tmp57757;
var inst_57575__$1 = tmp57759;
var inst_57576__$1 = inst_57596;
var state_57720__$1 = (function (){var statearr_57765 = state_57720;
(statearr_57765[(18)] = inst_57595);

(statearr_57765[(13)] = inst_57574__$1);

(statearr_57765[(15)] = inst_57573__$1);

(statearr_57765[(16)] = inst_57575__$1);

(statearr_57765[(17)] = inst_57576__$1);

return statearr_57765;
})();
var statearr_57766_59961 = state_57720__$1;
(statearr_57766_59961[(2)] = null);

(statearr_57766_59961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (21))){
var inst_57632 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
var statearr_57770_59962 = state_57720__$1;
(statearr_57770_59962[(2)] = inst_57632);

(statearr_57770_59962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (31))){
var inst_57663 = (state_57720[(9)]);
var inst_57667 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57663);
var state_57720__$1 = state_57720;
var statearr_57771_59966 = state_57720__$1;
(statearr_57771_59966[(2)] = inst_57667);

(statearr_57771_59966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (32))){
var inst_57653 = (state_57720[(10)]);
var inst_57655 = (state_57720[(11)]);
var inst_57652 = (state_57720[(19)]);
var inst_57654 = (state_57720[(20)]);
var inst_57669 = (state_57720[(2)]);
var inst_57670 = (inst_57655 + (1));
var tmp57767 = inst_57653;
var tmp57768 = inst_57652;
var tmp57769 = inst_57654;
var inst_57652__$1 = tmp57768;
var inst_57653__$1 = tmp57767;
var inst_57654__$1 = tmp57769;
var inst_57655__$1 = inst_57670;
var state_57720__$1 = (function (){var statearr_57772 = state_57720;
(statearr_57772[(10)] = inst_57653__$1);

(statearr_57772[(11)] = inst_57655__$1);

(statearr_57772[(19)] = inst_57652__$1);

(statearr_57772[(20)] = inst_57654__$1);

(statearr_57772[(21)] = inst_57669);

return statearr_57772;
})();
var statearr_57773_59972 = state_57720__$1;
(statearr_57773_59972[(2)] = null);

(statearr_57773_59972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (40))){
var inst_57687 = (state_57720[(22)]);
var inst_57691 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57687);
var state_57720__$1 = state_57720;
var statearr_57774_59976 = state_57720__$1;
(statearr_57774_59976[(2)] = inst_57691);

(statearr_57774_59976[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (33))){
var inst_57674 = (state_57720[(23)]);
var inst_57676 = cljs.core.chunked_seq_QMARK_(inst_57674);
var state_57720__$1 = state_57720;
if(inst_57676){
var statearr_57775_59977 = state_57720__$1;
(statearr_57775_59977[(1)] = (36));

} else {
var statearr_57776_59978 = state_57720__$1;
(statearr_57776_59978[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (13))){
var inst_57589 = (state_57720[(24)]);
var inst_57592 = cljs.core.async.close_BANG_(inst_57589);
var state_57720__$1 = state_57720;
var statearr_57777_59982 = state_57720__$1;
(statearr_57777_59982[(2)] = inst_57592);

(statearr_57777_59982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (22))){
var inst_57618 = (state_57720[(8)]);
var inst_57625 = cljs.core.async.close_BANG_(inst_57618);
var state_57720__$1 = state_57720;
var statearr_57778_59983 = state_57720__$1;
(statearr_57778_59983[(2)] = inst_57625);

(statearr_57778_59983[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (36))){
var inst_57674 = (state_57720[(23)]);
var inst_57678 = cljs.core.chunk_first(inst_57674);
var inst_57680 = cljs.core.chunk_rest(inst_57674);
var inst_57681 = cljs.core.count(inst_57678);
var inst_57652 = inst_57680;
var inst_57653 = inst_57678;
var inst_57654 = inst_57681;
var inst_57655 = (0);
var state_57720__$1 = (function (){var statearr_57781 = state_57720;
(statearr_57781[(10)] = inst_57653);

(statearr_57781[(11)] = inst_57655);

(statearr_57781[(19)] = inst_57652);

(statearr_57781[(20)] = inst_57654);

return statearr_57781;
})();
var statearr_57782_59988 = state_57720__$1;
(statearr_57782_59988[(2)] = null);

(statearr_57782_59988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (41))){
var inst_57674 = (state_57720[(23)]);
var inst_57693 = (state_57720[(2)]);
var inst_57694 = cljs.core.next(inst_57674);
var inst_57652 = inst_57694;
var inst_57653 = null;
var inst_57654 = (0);
var inst_57655 = (0);
var state_57720__$1 = (function (){var statearr_57783 = state_57720;
(statearr_57783[(10)] = inst_57653);

(statearr_57783[(11)] = inst_57655);

(statearr_57783[(19)] = inst_57652);

(statearr_57783[(25)] = inst_57693);

(statearr_57783[(20)] = inst_57654);

return statearr_57783;
})();
var statearr_57784_59990 = state_57720__$1;
(statearr_57784_59990[(2)] = null);

(statearr_57784_59990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (43))){
var state_57720__$1 = state_57720;
var statearr_57785_59993 = state_57720__$1;
(statearr_57785_59993[(2)] = null);

(statearr_57785_59993[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (29))){
var inst_57702 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
var statearr_57790_60000 = state_57720__$1;
(statearr_57790_60000[(2)] = inst_57702);

(statearr_57790_60000[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (44))){
var inst_57711 = (state_57720[(2)]);
var state_57720__$1 = (function (){var statearr_57791 = state_57720;
(statearr_57791[(26)] = inst_57711);

return statearr_57791;
})();
var statearr_57792_60006 = state_57720__$1;
(statearr_57792_60006[(2)] = null);

(statearr_57792_60006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (6))){
var inst_57643 = (state_57720[(27)]);
var inst_57642 = cljs.core.deref(cs);
var inst_57643__$1 = cljs.core.keys(inst_57642);
var inst_57644 = cljs.core.count(inst_57643__$1);
var inst_57645 = cljs.core.reset_BANG_(dctr,inst_57644);
var inst_57650 = cljs.core.seq(inst_57643__$1);
var inst_57652 = inst_57650;
var inst_57653 = null;
var inst_57654 = (0);
var inst_57655 = (0);
var state_57720__$1 = (function (){var statearr_57793 = state_57720;
(statearr_57793[(27)] = inst_57643__$1);

(statearr_57793[(10)] = inst_57653);

(statearr_57793[(11)] = inst_57655);

(statearr_57793[(19)] = inst_57652);

(statearr_57793[(20)] = inst_57654);

(statearr_57793[(28)] = inst_57645);

return statearr_57793;
})();
var statearr_57794_60009 = state_57720__$1;
(statearr_57794_60009[(2)] = null);

(statearr_57794_60009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (28))){
var inst_57674 = (state_57720[(23)]);
var inst_57652 = (state_57720[(19)]);
var inst_57674__$1 = cljs.core.seq(inst_57652);
var state_57720__$1 = (function (){var statearr_57795 = state_57720;
(statearr_57795[(23)] = inst_57674__$1);

return statearr_57795;
})();
if(inst_57674__$1){
var statearr_57796_60011 = state_57720__$1;
(statearr_57796_60011[(1)] = (33));

} else {
var statearr_57797_60012 = state_57720__$1;
(statearr_57797_60012[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (25))){
var inst_57655 = (state_57720[(11)]);
var inst_57654 = (state_57720[(20)]);
var inst_57660 = (inst_57655 < inst_57654);
var inst_57661 = inst_57660;
var state_57720__$1 = state_57720;
if(cljs.core.truth_(inst_57661)){
var statearr_57798_60020 = state_57720__$1;
(statearr_57798_60020[(1)] = (27));

} else {
var statearr_57799_60021 = state_57720__$1;
(statearr_57799_60021[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (34))){
var state_57720__$1 = state_57720;
var statearr_57800_60026 = state_57720__$1;
(statearr_57800_60026[(2)] = null);

(statearr_57800_60026[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (17))){
var state_57720__$1 = state_57720;
var statearr_57801_60030 = state_57720__$1;
(statearr_57801_60030[(2)] = null);

(statearr_57801_60030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (3))){
var inst_57717 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57720__$1,inst_57717);
} else {
if((state_val_57724 === (12))){
var inst_57637 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
var statearr_57802_60034 = state_57720__$1;
(statearr_57802_60034[(2)] = inst_57637);

(statearr_57802_60034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (2))){
var state_57720__$1 = state_57720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57720__$1,(4),ch);
} else {
if((state_val_57724 === (23))){
var state_57720__$1 = state_57720;
var statearr_57803_60038 = state_57720__$1;
(statearr_57803_60038[(2)] = null);

(statearr_57803_60038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (35))){
var inst_57700 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
var statearr_57804_60040 = state_57720__$1;
(statearr_57804_60040[(2)] = inst_57700);

(statearr_57804_60040[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (19))){
var inst_57599 = (state_57720[(7)]);
var inst_57605 = cljs.core.chunk_first(inst_57599);
var inst_57609 = cljs.core.chunk_rest(inst_57599);
var inst_57610 = cljs.core.count(inst_57605);
var inst_57573 = inst_57609;
var inst_57574 = inst_57605;
var inst_57575 = inst_57610;
var inst_57576 = (0);
var state_57720__$1 = (function (){var statearr_57806 = state_57720;
(statearr_57806[(13)] = inst_57574);

(statearr_57806[(15)] = inst_57573);

(statearr_57806[(16)] = inst_57575);

(statearr_57806[(17)] = inst_57576);

return statearr_57806;
})();
var statearr_57809_60046 = state_57720__$1;
(statearr_57809_60046[(2)] = null);

(statearr_57809_60046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (11))){
var inst_57573 = (state_57720[(15)]);
var inst_57599 = (state_57720[(7)]);
var inst_57599__$1 = cljs.core.seq(inst_57573);
var state_57720__$1 = (function (){var statearr_57810 = state_57720;
(statearr_57810[(7)] = inst_57599__$1);

return statearr_57810;
})();
if(inst_57599__$1){
var statearr_57811_60048 = state_57720__$1;
(statearr_57811_60048[(1)] = (16));

} else {
var statearr_57812_60049 = state_57720__$1;
(statearr_57812_60049[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (9))){
var inst_57639 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
var statearr_57814_60050 = state_57720__$1;
(statearr_57814_60050[(2)] = inst_57639);

(statearr_57814_60050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (5))){
var inst_57571 = cljs.core.deref(cs);
var inst_57572 = cljs.core.seq(inst_57571);
var inst_57573 = inst_57572;
var inst_57574 = null;
var inst_57575 = (0);
var inst_57576 = (0);
var state_57720__$1 = (function (){var statearr_57817 = state_57720;
(statearr_57817[(13)] = inst_57574);

(statearr_57817[(15)] = inst_57573);

(statearr_57817[(16)] = inst_57575);

(statearr_57817[(17)] = inst_57576);

return statearr_57817;
})();
var statearr_57825_60055 = state_57720__$1;
(statearr_57825_60055[(2)] = null);

(statearr_57825_60055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (14))){
var state_57720__$1 = state_57720;
var statearr_57829_60058 = state_57720__$1;
(statearr_57829_60058[(2)] = null);

(statearr_57829_60058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (45))){
var inst_57708 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
var statearr_57830_60059 = state_57720__$1;
(statearr_57830_60059[(2)] = inst_57708);

(statearr_57830_60059[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (26))){
var inst_57643 = (state_57720[(27)]);
var inst_57704 = (state_57720[(2)]);
var inst_57705 = cljs.core.seq(inst_57643);
var state_57720__$1 = (function (){var statearr_57833 = state_57720;
(statearr_57833[(29)] = inst_57704);

return statearr_57833;
})();
if(inst_57705){
var statearr_57835_60063 = state_57720__$1;
(statearr_57835_60063[(1)] = (42));

} else {
var statearr_57836_60064 = state_57720__$1;
(statearr_57836_60064[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (16))){
var inst_57599 = (state_57720[(7)]);
var inst_57602 = cljs.core.chunked_seq_QMARK_(inst_57599);
var state_57720__$1 = state_57720;
if(inst_57602){
var statearr_57839_60065 = state_57720__$1;
(statearr_57839_60065[(1)] = (19));

} else {
var statearr_57840_60066 = state_57720__$1;
(statearr_57840_60066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (38))){
var inst_57697 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
var statearr_57842_60067 = state_57720__$1;
(statearr_57842_60067[(2)] = inst_57697);

(statearr_57842_60067[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (30))){
var state_57720__$1 = state_57720;
var statearr_57843_60068 = state_57720__$1;
(statearr_57843_60068[(2)] = null);

(statearr_57843_60068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (10))){
var inst_57574 = (state_57720[(13)]);
var inst_57576 = (state_57720[(17)]);
var inst_57585 = cljs.core._nth(inst_57574,inst_57576);
var inst_57589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57585,(0),null);
var inst_57590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57585,(1),null);
var state_57720__$1 = (function (){var statearr_57846 = state_57720;
(statearr_57846[(24)] = inst_57589);

return statearr_57846;
})();
if(cljs.core.truth_(inst_57590)){
var statearr_57847_60069 = state_57720__$1;
(statearr_57847_60069[(1)] = (13));

} else {
var statearr_57848_60070 = state_57720__$1;
(statearr_57848_60070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (18))){
var inst_57635 = (state_57720[(2)]);
var state_57720__$1 = state_57720;
var statearr_57849_60071 = state_57720__$1;
(statearr_57849_60071[(2)] = inst_57635);

(statearr_57849_60071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (42))){
var state_57720__$1 = state_57720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57720__$1,(45),dchan);
} else {
if((state_val_57724 === (37))){
var inst_57687 = (state_57720[(22)]);
var inst_57674 = (state_57720[(23)]);
var inst_57563 = (state_57720[(12)]);
var inst_57687__$1 = cljs.core.first(inst_57674);
var inst_57688 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57687__$1,inst_57563,done);
var state_57720__$1 = (function (){var statearr_57854 = state_57720;
(statearr_57854[(22)] = inst_57687__$1);

return statearr_57854;
})();
if(cljs.core.truth_(inst_57688)){
var statearr_57855_60074 = state_57720__$1;
(statearr_57855_60074[(1)] = (39));

} else {
var statearr_57856_60075 = state_57720__$1;
(statearr_57856_60075[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57724 === (8))){
var inst_57575 = (state_57720[(16)]);
var inst_57576 = (state_57720[(17)]);
var inst_57578 = (inst_57576 < inst_57575);
var inst_57579 = inst_57578;
var state_57720__$1 = state_57720;
if(cljs.core.truth_(inst_57579)){
var statearr_57857_60080 = state_57720__$1;
(statearr_57857_60080[(1)] = (10));

} else {
var statearr_57858_60081 = state_57720__$1;
(statearr_57858_60081[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__55814__auto__ = null;
var cljs$core$async$mult_$_state_machine__55814__auto____0 = (function (){
var statearr_57859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57859[(0)] = cljs$core$async$mult_$_state_machine__55814__auto__);

(statearr_57859[(1)] = (1));

return statearr_57859;
});
var cljs$core$async$mult_$_state_machine__55814__auto____1 = (function (state_57720){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_57720);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e57860){var ex__55817__auto__ = e57860;
var statearr_57862_60082 = state_57720;
(statearr_57862_60082[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_57720[(4)]))){
var statearr_57864_60083 = state_57720;
(statearr_57864_60083[(1)] = cljs.core.first((state_57720[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60084 = state_57720;
state_57720 = G__60084;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__55814__auto__ = function(state_57720){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__55814__auto____1.call(this,state_57720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__55814__auto____0;
cljs$core$async$mult_$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__55814__auto____1;
return cljs$core$async$mult_$_state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_57867 = f__56009__auto__();
(statearr_57867[(6)] = c__56008__auto___59933);

return statearr_57867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
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
var G__57870 = arguments.length;
switch (G__57870) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var cljs$core$async$Mix$admix_STAR_$dyn_60088 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_60088(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_60094 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_60094(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_60096 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_60096(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_60101 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_60101(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_60106 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_60106(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60112 = arguments.length;
var i__4737__auto___60113 = (0);
while(true){
if((i__4737__auto___60113 < len__4736__auto___60112)){
args__4742__auto__.push((arguments[i__4737__auto___60113]));

var G__60114 = (i__4737__auto___60113 + (1));
i__4737__auto___60113 = G__60114;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57915){
var map__57916 = p__57915;
var map__57916__$1 = (((((!((map__57916 == null))))?(((((map__57916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57916):map__57916);
var opts = map__57916__$1;
var statearr_57918_60115 = state;
(statearr_57918_60115[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_57920_60116 = state;
(statearr_57920_60116[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_57923_60117 = state;
(statearr_57923_60117[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57904){
var G__57908 = cljs.core.first(seq57904);
var seq57904__$1 = cljs.core.next(seq57904);
var G__57909 = cljs.core.first(seq57904__$1);
var seq57904__$2 = cljs.core.next(seq57904__$1);
var G__57910 = cljs.core.first(seq57904__$2);
var seq57904__$3 = cljs.core.next(seq57904__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57908,G__57909,G__57910,seq57904__$3);
}));

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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57952 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57953){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57953 = meta57953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57954,meta57953__$1){
var self__ = this;
var _57954__$1 = this;
return (new cljs.core.async.t_cljs$core$async57952(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57953__$1));
}));

(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57954){
var self__ = this;
var _57954__$1 = this;
return self__.meta57953;
}));

(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57952.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57953","meta57953",316600432,null)], null);
}));

(cljs.core.async.t_cljs$core$async57952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57952");

(cljs.core.async.t_cljs$core$async57952.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57952.
 */
cljs.core.async.__GT_t_cljs$core$async57952 = (function cljs$core$async$mix_$___GT_t_cljs$core$async57952(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57953){
return (new cljs.core.async.t_cljs$core$async57952(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57953));
});

}

return (new cljs.core.async.t_cljs$core$async57952(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56008__auto___60137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_58061){
var state_val_58062 = (state_58061[(1)]);
if((state_val_58062 === (7))){
var inst_57976 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
var statearr_58063_60138 = state_58061__$1;
(statearr_58063_60138[(2)] = inst_57976);

(statearr_58063_60138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (20))){
var inst_57988 = (state_58061[(7)]);
var state_58061__$1 = state_58061;
var statearr_58064_60139 = state_58061__$1;
(statearr_58064_60139[(2)] = inst_57988);

(statearr_58064_60139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (27))){
var state_58061__$1 = state_58061;
var statearr_58065_60140 = state_58061__$1;
(statearr_58065_60140[(2)] = null);

(statearr_58065_60140[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (1))){
var inst_57963 = (state_58061[(8)]);
var inst_57963__$1 = calc_state();
var inst_57965 = (inst_57963__$1 == null);
var inst_57966 = cljs.core.not(inst_57965);
var state_58061__$1 = (function (){var statearr_58066 = state_58061;
(statearr_58066[(8)] = inst_57963__$1);

return statearr_58066;
})();
if(inst_57966){
var statearr_58068_60143 = state_58061__$1;
(statearr_58068_60143[(1)] = (2));

} else {
var statearr_58069_60144 = state_58061__$1;
(statearr_58069_60144[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (24))){
var inst_58021 = (state_58061[(9)]);
var inst_58012 = (state_58061[(10)]);
var inst_58035 = (state_58061[(11)]);
var inst_58035__$1 = (inst_58012.cljs$core$IFn$_invoke$arity$1 ? inst_58012.cljs$core$IFn$_invoke$arity$1(inst_58021) : inst_58012.call(null,inst_58021));
var state_58061__$1 = (function (){var statearr_58070 = state_58061;
(statearr_58070[(11)] = inst_58035__$1);

return statearr_58070;
})();
if(cljs.core.truth_(inst_58035__$1)){
var statearr_58071_60146 = state_58061__$1;
(statearr_58071_60146[(1)] = (29));

} else {
var statearr_58072_60150 = state_58061__$1;
(statearr_58072_60150[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (4))){
var inst_57979 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
if(cljs.core.truth_(inst_57979)){
var statearr_58073_60152 = state_58061__$1;
(statearr_58073_60152[(1)] = (8));

} else {
var statearr_58074_60153 = state_58061__$1;
(statearr_58074_60153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (15))){
var inst_58006 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
if(cljs.core.truth_(inst_58006)){
var statearr_58076_60155 = state_58061__$1;
(statearr_58076_60155[(1)] = (19));

} else {
var statearr_58077_60156 = state_58061__$1;
(statearr_58077_60156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (21))){
var inst_58011 = (state_58061[(12)]);
var inst_58011__$1 = (state_58061[(2)]);
var inst_58012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58011__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58011__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58011__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58061__$1 = (function (){var statearr_58078 = state_58061;
(statearr_58078[(13)] = inst_58013);

(statearr_58078[(10)] = inst_58012);

(statearr_58078[(12)] = inst_58011__$1);

return statearr_58078;
})();
return cljs.core.async.ioc_alts_BANG_(state_58061__$1,(22),inst_58014);
} else {
if((state_val_58062 === (31))){
var inst_58043 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
if(cljs.core.truth_(inst_58043)){
var statearr_58079_60157 = state_58061__$1;
(statearr_58079_60157[(1)] = (32));

} else {
var statearr_58080_60158 = state_58061__$1;
(statearr_58080_60158[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (32))){
var inst_58020 = (state_58061[(14)]);
var state_58061__$1 = state_58061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58061__$1,(35),out,inst_58020);
} else {
if((state_val_58062 === (33))){
var inst_58011 = (state_58061[(12)]);
var inst_57988 = inst_58011;
var state_58061__$1 = (function (){var statearr_58081 = state_58061;
(statearr_58081[(7)] = inst_57988);

return statearr_58081;
})();
var statearr_58082_60160 = state_58061__$1;
(statearr_58082_60160[(2)] = null);

(statearr_58082_60160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (13))){
var inst_57988 = (state_58061[(7)]);
var inst_57995 = inst_57988.cljs$lang$protocol_mask$partition0$;
var inst_57996 = (inst_57995 & (64));
var inst_57997 = inst_57988.cljs$core$ISeq$;
var inst_57998 = (cljs.core.PROTOCOL_SENTINEL === inst_57997);
var inst_57999 = ((inst_57996) || (inst_57998));
var state_58061__$1 = state_58061;
if(cljs.core.truth_(inst_57999)){
var statearr_58083_60162 = state_58061__$1;
(statearr_58083_60162[(1)] = (16));

} else {
var statearr_58084_60163 = state_58061__$1;
(statearr_58084_60163[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (22))){
var inst_58020 = (state_58061[(14)]);
var inst_58021 = (state_58061[(9)]);
var inst_58019 = (state_58061[(2)]);
var inst_58020__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58019,(0),null);
var inst_58021__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58019,(1),null);
var inst_58022 = (inst_58020__$1 == null);
var inst_58023 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58021__$1,change);
var inst_58024 = ((inst_58022) || (inst_58023));
var state_58061__$1 = (function (){var statearr_58085 = state_58061;
(statearr_58085[(14)] = inst_58020__$1);

(statearr_58085[(9)] = inst_58021__$1);

return statearr_58085;
})();
if(cljs.core.truth_(inst_58024)){
var statearr_58090_60164 = state_58061__$1;
(statearr_58090_60164[(1)] = (23));

} else {
var statearr_58091_60165 = state_58061__$1;
(statearr_58091_60165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (36))){
var inst_58011 = (state_58061[(12)]);
var inst_57988 = inst_58011;
var state_58061__$1 = (function (){var statearr_58098 = state_58061;
(statearr_58098[(7)] = inst_57988);

return statearr_58098;
})();
var statearr_58100_60166 = state_58061__$1;
(statearr_58100_60166[(2)] = null);

(statearr_58100_60166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (29))){
var inst_58035 = (state_58061[(11)]);
var state_58061__$1 = state_58061;
var statearr_58113_60167 = state_58061__$1;
(statearr_58113_60167[(2)] = inst_58035);

(statearr_58113_60167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (6))){
var state_58061__$1 = state_58061;
var statearr_58114_60172 = state_58061__$1;
(statearr_58114_60172[(2)] = false);

(statearr_58114_60172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (28))){
var inst_58031 = (state_58061[(2)]);
var inst_58032 = calc_state();
var inst_57988 = inst_58032;
var state_58061__$1 = (function (){var statearr_58115 = state_58061;
(statearr_58115[(7)] = inst_57988);

(statearr_58115[(15)] = inst_58031);

return statearr_58115;
})();
var statearr_58116_60173 = state_58061__$1;
(statearr_58116_60173[(2)] = null);

(statearr_58116_60173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (25))){
var inst_58057 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
var statearr_58117_60174 = state_58061__$1;
(statearr_58117_60174[(2)] = inst_58057);

(statearr_58117_60174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (34))){
var inst_58055 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
var statearr_58120_60175 = state_58061__$1;
(statearr_58120_60175[(2)] = inst_58055);

(statearr_58120_60175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (17))){
var state_58061__$1 = state_58061;
var statearr_58122_60176 = state_58061__$1;
(statearr_58122_60176[(2)] = false);

(statearr_58122_60176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (3))){
var state_58061__$1 = state_58061;
var statearr_58124_60177 = state_58061__$1;
(statearr_58124_60177[(2)] = false);

(statearr_58124_60177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (12))){
var inst_58059 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58061__$1,inst_58059);
} else {
if((state_val_58062 === (2))){
var inst_57963 = (state_58061[(8)]);
var inst_57968 = inst_57963.cljs$lang$protocol_mask$partition0$;
var inst_57969 = (inst_57968 & (64));
var inst_57970 = inst_57963.cljs$core$ISeq$;
var inst_57971 = (cljs.core.PROTOCOL_SENTINEL === inst_57970);
var inst_57972 = ((inst_57969) || (inst_57971));
var state_58061__$1 = state_58061;
if(cljs.core.truth_(inst_57972)){
var statearr_58128_60181 = state_58061__$1;
(statearr_58128_60181[(1)] = (5));

} else {
var statearr_58129_60182 = state_58061__$1;
(statearr_58129_60182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (23))){
var inst_58020 = (state_58061[(14)]);
var inst_58026 = (inst_58020 == null);
var state_58061__$1 = state_58061;
if(cljs.core.truth_(inst_58026)){
var statearr_58131_60183 = state_58061__$1;
(statearr_58131_60183[(1)] = (26));

} else {
var statearr_58133_60184 = state_58061__$1;
(statearr_58133_60184[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (35))){
var inst_58046 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
if(cljs.core.truth_(inst_58046)){
var statearr_58134_60185 = state_58061__$1;
(statearr_58134_60185[(1)] = (36));

} else {
var statearr_58135_60186 = state_58061__$1;
(statearr_58135_60186[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (19))){
var inst_57988 = (state_58061[(7)]);
var inst_58008 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57988);
var state_58061__$1 = state_58061;
var statearr_58136_60187 = state_58061__$1;
(statearr_58136_60187[(2)] = inst_58008);

(statearr_58136_60187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (11))){
var inst_57988 = (state_58061[(7)]);
var inst_57992 = (inst_57988 == null);
var inst_57993 = cljs.core.not(inst_57992);
var state_58061__$1 = state_58061;
if(inst_57993){
var statearr_58140_60192 = state_58061__$1;
(statearr_58140_60192[(1)] = (13));

} else {
var statearr_58141_60193 = state_58061__$1;
(statearr_58141_60193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (9))){
var inst_57963 = (state_58061[(8)]);
var state_58061__$1 = state_58061;
var statearr_58146_60194 = state_58061__$1;
(statearr_58146_60194[(2)] = inst_57963);

(statearr_58146_60194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (5))){
var state_58061__$1 = state_58061;
var statearr_58152_60195 = state_58061__$1;
(statearr_58152_60195[(2)] = true);

(statearr_58152_60195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (14))){
var state_58061__$1 = state_58061;
var statearr_58156_60196 = state_58061__$1;
(statearr_58156_60196[(2)] = false);

(statearr_58156_60196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (26))){
var inst_58021 = (state_58061[(9)]);
var inst_58028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_58021);
var state_58061__$1 = state_58061;
var statearr_58169_60198 = state_58061__$1;
(statearr_58169_60198[(2)] = inst_58028);

(statearr_58169_60198[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (16))){
var state_58061__$1 = state_58061;
var statearr_58170_60199 = state_58061__$1;
(statearr_58170_60199[(2)] = true);

(statearr_58170_60199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (38))){
var inst_58051 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
var statearr_58171_60200 = state_58061__$1;
(statearr_58171_60200[(2)] = inst_58051);

(statearr_58171_60200[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (30))){
var inst_58021 = (state_58061[(9)]);
var inst_58013 = (state_58061[(13)]);
var inst_58012 = (state_58061[(10)]);
var inst_58038 = cljs.core.empty_QMARK_(inst_58012);
var inst_58039 = (inst_58013.cljs$core$IFn$_invoke$arity$1 ? inst_58013.cljs$core$IFn$_invoke$arity$1(inst_58021) : inst_58013.call(null,inst_58021));
var inst_58040 = cljs.core.not(inst_58039);
var inst_58041 = ((inst_58038) && (inst_58040));
var state_58061__$1 = state_58061;
var statearr_58175_60201 = state_58061__$1;
(statearr_58175_60201[(2)] = inst_58041);

(statearr_58175_60201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (10))){
var inst_57963 = (state_58061[(8)]);
var inst_57984 = (state_58061[(2)]);
var inst_57985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57984,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57984,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57984,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57988 = inst_57963;
var state_58061__$1 = (function (){var statearr_58189 = state_58061;
(statearr_58189[(16)] = inst_57986);

(statearr_58189[(17)] = inst_57985);

(statearr_58189[(7)] = inst_57988);

(statearr_58189[(18)] = inst_57987);

return statearr_58189;
})();
var statearr_58195_60212 = state_58061__$1;
(statearr_58195_60212[(2)] = null);

(statearr_58195_60212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (18))){
var inst_58003 = (state_58061[(2)]);
var state_58061__$1 = state_58061;
var statearr_58202_60213 = state_58061__$1;
(statearr_58202_60213[(2)] = inst_58003);

(statearr_58202_60213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (37))){
var state_58061__$1 = state_58061;
var statearr_58208_60216 = state_58061__$1;
(statearr_58208_60216[(2)] = null);

(statearr_58208_60216[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58062 === (8))){
var inst_57963 = (state_58061[(8)]);
var inst_57981 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57963);
var state_58061__$1 = state_58061;
var statearr_58209_60217 = state_58061__$1;
(statearr_58209_60217[(2)] = inst_57981);

(statearr_58209_60217[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__55814__auto__ = null;
var cljs$core$async$mix_$_state_machine__55814__auto____0 = (function (){
var statearr_58220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58220[(0)] = cljs$core$async$mix_$_state_machine__55814__auto__);

(statearr_58220[(1)] = (1));

return statearr_58220;
});
var cljs$core$async$mix_$_state_machine__55814__auto____1 = (function (state_58061){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_58061);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e58227){var ex__55817__auto__ = e58227;
var statearr_58228_60219 = state_58061;
(statearr_58228_60219[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_58061[(4)]))){
var statearr_58234_60221 = state_58061;
(statearr_58234_60221[(1)] = cljs.core.first((state_58061[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60222 = state_58061;
state_58061 = G__60222;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__55814__auto__ = function(state_58061){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__55814__auto____1.call(this,state_58061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__55814__auto____0;
cljs$core$async$mix_$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__55814__auto____1;
return cljs$core$async$mix_$_state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_58235 = f__56009__auto__();
(statearr_58235[(6)] = c__56008__auto___60137);

return statearr_58235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_60223 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_60223(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_60226 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_60226(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_60227 = (function() {
var G__60228 = null;
var G__60228__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__60228__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__60228 = function(p,v){
switch(arguments.length){
case 1:
return G__60228__1.call(this,p);
case 2:
return G__60228__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60228.cljs$core$IFn$_invoke$arity$1 = G__60228__1;
G__60228.cljs$core$IFn$_invoke$arity$2 = G__60228__2;
return G__60228;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58265 = arguments.length;
switch (G__58265) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60227(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60227(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__58275 = arguments.length;
switch (G__58275) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__58273_SHARP_){
if(cljs.core.truth_((p1__58273_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58273_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__58273_SHARP_.call(null,topic)))){
return p1__58273_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58273_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58284 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58285){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58285 = meta58285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58286,meta58285__$1){
var self__ = this;
var _58286__$1 = this;
return (new cljs.core.async.t_cljs$core$async58284(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58285__$1));
}));

(cljs.core.async.t_cljs$core$async58284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58286){
var self__ = this;
var _58286__$1 = this;
return self__.meta58285;
}));

(cljs.core.async.t_cljs$core$async58284.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58284.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58284.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async58284.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async58284.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async58284.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async58284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58285","meta58285",724095962,null)], null);
}));

(cljs.core.async.t_cljs$core$async58284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58284");

(cljs.core.async.t_cljs$core$async58284.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58284.
 */
cljs.core.async.__GT_t_cljs$core$async58284 = (function cljs$core$async$__GT_t_cljs$core$async58284(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58285){
return (new cljs.core.async.t_cljs$core$async58284(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58285));
});

}

return (new cljs.core.async.t_cljs$core$async58284(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56008__auto___60249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_58370){
var state_val_58371 = (state_58370[(1)]);
if((state_val_58371 === (7))){
var inst_58366 = (state_58370[(2)]);
var state_58370__$1 = state_58370;
var statearr_58378_60253 = state_58370__$1;
(statearr_58378_60253[(2)] = inst_58366);

(statearr_58378_60253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (20))){
var state_58370__$1 = state_58370;
var statearr_58381_60254 = state_58370__$1;
(statearr_58381_60254[(2)] = null);

(statearr_58381_60254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (1))){
var state_58370__$1 = state_58370;
var statearr_58382_60255 = state_58370__$1;
(statearr_58382_60255[(2)] = null);

(statearr_58382_60255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (24))){
var inst_58349 = (state_58370[(7)]);
var inst_58358 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_58349);
var state_58370__$1 = state_58370;
var statearr_58383_60256 = state_58370__$1;
(statearr_58383_60256[(2)] = inst_58358);

(statearr_58383_60256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (4))){
var inst_58300 = (state_58370[(8)]);
var inst_58300__$1 = (state_58370[(2)]);
var inst_58301 = (inst_58300__$1 == null);
var state_58370__$1 = (function (){var statearr_58384 = state_58370;
(statearr_58384[(8)] = inst_58300__$1);

return statearr_58384;
})();
if(cljs.core.truth_(inst_58301)){
var statearr_58385_60258 = state_58370__$1;
(statearr_58385_60258[(1)] = (5));

} else {
var statearr_58386_60259 = state_58370__$1;
(statearr_58386_60259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (15))){
var inst_58343 = (state_58370[(2)]);
var state_58370__$1 = state_58370;
var statearr_58388_60260 = state_58370__$1;
(statearr_58388_60260[(2)] = inst_58343);

(statearr_58388_60260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (21))){
var inst_58363 = (state_58370[(2)]);
var state_58370__$1 = (function (){var statearr_58390 = state_58370;
(statearr_58390[(9)] = inst_58363);

return statearr_58390;
})();
var statearr_58391_60261 = state_58370__$1;
(statearr_58391_60261[(2)] = null);

(statearr_58391_60261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (13))){
var inst_58325 = (state_58370[(10)]);
var inst_58327 = cljs.core.chunked_seq_QMARK_(inst_58325);
var state_58370__$1 = state_58370;
if(inst_58327){
var statearr_58392_60271 = state_58370__$1;
(statearr_58392_60271[(1)] = (16));

} else {
var statearr_58393_60272 = state_58370__$1;
(statearr_58393_60272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (22))){
var inst_58355 = (state_58370[(2)]);
var state_58370__$1 = state_58370;
if(cljs.core.truth_(inst_58355)){
var statearr_58394_60273 = state_58370__$1;
(statearr_58394_60273[(1)] = (23));

} else {
var statearr_58395_60274 = state_58370__$1;
(statearr_58395_60274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (6))){
var inst_58300 = (state_58370[(8)]);
var inst_58349 = (state_58370[(7)]);
var inst_58351 = (state_58370[(11)]);
var inst_58349__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_58300) : topic_fn.call(null,inst_58300));
var inst_58350 = cljs.core.deref(mults);
var inst_58351__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58350,inst_58349__$1);
var state_58370__$1 = (function (){var statearr_58398 = state_58370;
(statearr_58398[(7)] = inst_58349__$1);

(statearr_58398[(11)] = inst_58351__$1);

return statearr_58398;
})();
if(cljs.core.truth_(inst_58351__$1)){
var statearr_58399_60281 = state_58370__$1;
(statearr_58399_60281[(1)] = (19));

} else {
var statearr_58400_60282 = state_58370__$1;
(statearr_58400_60282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (25))){
var inst_58360 = (state_58370[(2)]);
var state_58370__$1 = state_58370;
var statearr_58401_60283 = state_58370__$1;
(statearr_58401_60283[(2)] = inst_58360);

(statearr_58401_60283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (17))){
var inst_58325 = (state_58370[(10)]);
var inst_58334 = cljs.core.first(inst_58325);
var inst_58335 = cljs.core.async.muxch_STAR_(inst_58334);
var inst_58336 = cljs.core.async.close_BANG_(inst_58335);
var inst_58337 = cljs.core.next(inst_58325);
var inst_58310 = inst_58337;
var inst_58311 = null;
var inst_58312 = (0);
var inst_58313 = (0);
var state_58370__$1 = (function (){var statearr_58402 = state_58370;
(statearr_58402[(12)] = inst_58312);

(statearr_58402[(13)] = inst_58313);

(statearr_58402[(14)] = inst_58310);

(statearr_58402[(15)] = inst_58311);

(statearr_58402[(16)] = inst_58336);

return statearr_58402;
})();
var statearr_58405_60284 = state_58370__$1;
(statearr_58405_60284[(2)] = null);

(statearr_58405_60284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (3))){
var inst_58368 = (state_58370[(2)]);
var state_58370__$1 = state_58370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58370__$1,inst_58368);
} else {
if((state_val_58371 === (12))){
var inst_58345 = (state_58370[(2)]);
var state_58370__$1 = state_58370;
var statearr_58406_60285 = state_58370__$1;
(statearr_58406_60285[(2)] = inst_58345);

(statearr_58406_60285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (2))){
var state_58370__$1 = state_58370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58370__$1,(4),ch);
} else {
if((state_val_58371 === (23))){
var state_58370__$1 = state_58370;
var statearr_58407_60286 = state_58370__$1;
(statearr_58407_60286[(2)] = null);

(statearr_58407_60286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (19))){
var inst_58300 = (state_58370[(8)]);
var inst_58351 = (state_58370[(11)]);
var inst_58353 = cljs.core.async.muxch_STAR_(inst_58351);
var state_58370__$1 = state_58370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58370__$1,(22),inst_58353,inst_58300);
} else {
if((state_val_58371 === (11))){
var inst_58310 = (state_58370[(14)]);
var inst_58325 = (state_58370[(10)]);
var inst_58325__$1 = cljs.core.seq(inst_58310);
var state_58370__$1 = (function (){var statearr_58408 = state_58370;
(statearr_58408[(10)] = inst_58325__$1);

return statearr_58408;
})();
if(inst_58325__$1){
var statearr_58409_60293 = state_58370__$1;
(statearr_58409_60293[(1)] = (13));

} else {
var statearr_58410_60294 = state_58370__$1;
(statearr_58410_60294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (9))){
var inst_58347 = (state_58370[(2)]);
var state_58370__$1 = state_58370;
var statearr_58411_60295 = state_58370__$1;
(statearr_58411_60295[(2)] = inst_58347);

(statearr_58411_60295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (5))){
var inst_58307 = cljs.core.deref(mults);
var inst_58308 = cljs.core.vals(inst_58307);
var inst_58309 = cljs.core.seq(inst_58308);
var inst_58310 = inst_58309;
var inst_58311 = null;
var inst_58312 = (0);
var inst_58313 = (0);
var state_58370__$1 = (function (){var statearr_58412 = state_58370;
(statearr_58412[(12)] = inst_58312);

(statearr_58412[(13)] = inst_58313);

(statearr_58412[(14)] = inst_58310);

(statearr_58412[(15)] = inst_58311);

return statearr_58412;
})();
var statearr_58413_60296 = state_58370__$1;
(statearr_58413_60296[(2)] = null);

(statearr_58413_60296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (14))){
var state_58370__$1 = state_58370;
var statearr_58417_60297 = state_58370__$1;
(statearr_58417_60297[(2)] = null);

(statearr_58417_60297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (16))){
var inst_58325 = (state_58370[(10)]);
var inst_58329 = cljs.core.chunk_first(inst_58325);
var inst_58330 = cljs.core.chunk_rest(inst_58325);
var inst_58331 = cljs.core.count(inst_58329);
var inst_58310 = inst_58330;
var inst_58311 = inst_58329;
var inst_58312 = inst_58331;
var inst_58313 = (0);
var state_58370__$1 = (function (){var statearr_58419 = state_58370;
(statearr_58419[(12)] = inst_58312);

(statearr_58419[(13)] = inst_58313);

(statearr_58419[(14)] = inst_58310);

(statearr_58419[(15)] = inst_58311);

return statearr_58419;
})();
var statearr_58420_60303 = state_58370__$1;
(statearr_58420_60303[(2)] = null);

(statearr_58420_60303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (10))){
var inst_58312 = (state_58370[(12)]);
var inst_58313 = (state_58370[(13)]);
var inst_58310 = (state_58370[(14)]);
var inst_58311 = (state_58370[(15)]);
var inst_58319 = cljs.core._nth(inst_58311,inst_58313);
var inst_58320 = cljs.core.async.muxch_STAR_(inst_58319);
var inst_58321 = cljs.core.async.close_BANG_(inst_58320);
var inst_58322 = (inst_58313 + (1));
var tmp58414 = inst_58312;
var tmp58415 = inst_58310;
var tmp58416 = inst_58311;
var inst_58310__$1 = tmp58415;
var inst_58311__$1 = tmp58416;
var inst_58312__$1 = tmp58414;
var inst_58313__$1 = inst_58322;
var state_58370__$1 = (function (){var statearr_58425 = state_58370;
(statearr_58425[(17)] = inst_58321);

(statearr_58425[(12)] = inst_58312__$1);

(statearr_58425[(13)] = inst_58313__$1);

(statearr_58425[(14)] = inst_58310__$1);

(statearr_58425[(15)] = inst_58311__$1);

return statearr_58425;
})();
var statearr_58428_60310 = state_58370__$1;
(statearr_58428_60310[(2)] = null);

(statearr_58428_60310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (18))){
var inst_58340 = (state_58370[(2)]);
var state_58370__$1 = state_58370;
var statearr_58431_60311 = state_58370__$1;
(statearr_58431_60311[(2)] = inst_58340);

(statearr_58431_60311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58371 === (8))){
var inst_58312 = (state_58370[(12)]);
var inst_58313 = (state_58370[(13)]);
var inst_58315 = (inst_58313 < inst_58312);
var inst_58316 = inst_58315;
var state_58370__$1 = state_58370;
if(cljs.core.truth_(inst_58316)){
var statearr_58432_60312 = state_58370__$1;
(statearr_58432_60312[(1)] = (10));

} else {
var statearr_58433_60313 = state_58370__$1;
(statearr_58433_60313[(1)] = (11));

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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_58435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58435[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_58435[(1)] = (1));

return statearr_58435;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_58370){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_58370);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e58444){var ex__55817__auto__ = e58444;
var statearr_58445_60314 = state_58370;
(statearr_58445_60314[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_58370[(4)]))){
var statearr_58446_60315 = state_58370;
(statearr_58446_60315[(1)] = cljs.core.first((state_58370[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60316 = state_58370;
state_58370 = G__60316;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_58370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_58370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_58463 = f__56009__auto__();
(statearr_58463[(6)] = c__56008__auto___60249);

return statearr_58463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
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
var G__58465 = arguments.length;
switch (G__58465) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__58467 = arguments.length;
switch (G__58467) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__58469 = arguments.length;
switch (G__58469) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__56008__auto___60331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_58516){
var state_val_58517 = (state_58516[(1)]);
if((state_val_58517 === (7))){
var state_58516__$1 = state_58516;
var statearr_58518_60332 = state_58516__$1;
(statearr_58518_60332[(2)] = null);

(statearr_58518_60332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (1))){
var state_58516__$1 = state_58516;
var statearr_58519_60333 = state_58516__$1;
(statearr_58519_60333[(2)] = null);

(statearr_58519_60333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (4))){
var inst_58475 = (state_58516[(7)]);
var inst_58476 = (state_58516[(8)]);
var inst_58478 = (inst_58476 < inst_58475);
var state_58516__$1 = state_58516;
if(cljs.core.truth_(inst_58478)){
var statearr_58520_60334 = state_58516__$1;
(statearr_58520_60334[(1)] = (6));

} else {
var statearr_58521_60335 = state_58516__$1;
(statearr_58521_60335[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (15))){
var inst_58502 = (state_58516[(9)]);
var inst_58507 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_58502);
var state_58516__$1 = state_58516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58516__$1,(17),out,inst_58507);
} else {
if((state_val_58517 === (13))){
var inst_58502 = (state_58516[(9)]);
var inst_58502__$1 = (state_58516[(2)]);
var inst_58503 = cljs.core.some(cljs.core.nil_QMARK_,inst_58502__$1);
var state_58516__$1 = (function (){var statearr_58522 = state_58516;
(statearr_58522[(9)] = inst_58502__$1);

return statearr_58522;
})();
if(cljs.core.truth_(inst_58503)){
var statearr_58523_60338 = state_58516__$1;
(statearr_58523_60338[(1)] = (14));

} else {
var statearr_58524_60339 = state_58516__$1;
(statearr_58524_60339[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (6))){
var state_58516__$1 = state_58516;
var statearr_58525_60340 = state_58516__$1;
(statearr_58525_60340[(2)] = null);

(statearr_58525_60340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (17))){
var inst_58509 = (state_58516[(2)]);
var state_58516__$1 = (function (){var statearr_58540 = state_58516;
(statearr_58540[(10)] = inst_58509);

return statearr_58540;
})();
var statearr_58544_60343 = state_58516__$1;
(statearr_58544_60343[(2)] = null);

(statearr_58544_60343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (3))){
var inst_58514 = (state_58516[(2)]);
var state_58516__$1 = state_58516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58516__$1,inst_58514);
} else {
if((state_val_58517 === (12))){
var _ = (function (){var statearr_58545 = state_58516;
(statearr_58545[(4)] = cljs.core.rest((state_58516[(4)])));

return statearr_58545;
})();
var state_58516__$1 = state_58516;
var ex58538 = (state_58516__$1[(2)]);
var statearr_58555_60344 = state_58516__$1;
(statearr_58555_60344[(5)] = ex58538);


if((ex58538 instanceof Object)){
var statearr_58558_60345 = state_58516__$1;
(statearr_58558_60345[(1)] = (11));

(statearr_58558_60345[(5)] = null);

} else {
throw ex58538;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (2))){
var inst_58474 = cljs.core.reset_BANG_(dctr,cnt);
var inst_58475 = cnt;
var inst_58476 = (0);
var state_58516__$1 = (function (){var statearr_58562 = state_58516;
(statearr_58562[(11)] = inst_58474);

(statearr_58562[(7)] = inst_58475);

(statearr_58562[(8)] = inst_58476);

return statearr_58562;
})();
var statearr_58563_60346 = state_58516__$1;
(statearr_58563_60346[(2)] = null);

(statearr_58563_60346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (11))){
var inst_58480 = (state_58516[(2)]);
var inst_58481 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_58516__$1 = (function (){var statearr_58564 = state_58516;
(statearr_58564[(12)] = inst_58480);

return statearr_58564;
})();
var statearr_58565_60347 = state_58516__$1;
(statearr_58565_60347[(2)] = inst_58481);

(statearr_58565_60347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (9))){
var inst_58476 = (state_58516[(8)]);
var _ = (function (){var statearr_58569 = state_58516;
(statearr_58569[(4)] = cljs.core.cons((12),(state_58516[(4)])));

return statearr_58569;
})();
var inst_58487 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_58476) : chs__$1.call(null,inst_58476));
var inst_58488 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_58476) : done.call(null,inst_58476));
var inst_58489 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58487,inst_58488);
var ___$1 = (function (){var statearr_58570 = state_58516;
(statearr_58570[(4)] = cljs.core.rest((state_58516[(4)])));

return statearr_58570;
})();
var state_58516__$1 = state_58516;
var statearr_58571_60351 = state_58516__$1;
(statearr_58571_60351[(2)] = inst_58489);

(statearr_58571_60351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (5))){
var inst_58499 = (state_58516[(2)]);
var state_58516__$1 = (function (){var statearr_58572 = state_58516;
(statearr_58572[(13)] = inst_58499);

return statearr_58572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58516__$1,(13),dchan);
} else {
if((state_val_58517 === (14))){
var inst_58505 = cljs.core.async.close_BANG_(out);
var state_58516__$1 = state_58516;
var statearr_58573_60353 = state_58516__$1;
(statearr_58573_60353[(2)] = inst_58505);

(statearr_58573_60353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (16))){
var inst_58512 = (state_58516[(2)]);
var state_58516__$1 = state_58516;
var statearr_58574_60354 = state_58516__$1;
(statearr_58574_60354[(2)] = inst_58512);

(statearr_58574_60354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (10))){
var inst_58476 = (state_58516[(8)]);
var inst_58492 = (state_58516[(2)]);
var inst_58493 = (inst_58476 + (1));
var inst_58476__$1 = inst_58493;
var state_58516__$1 = (function (){var statearr_58576 = state_58516;
(statearr_58576[(14)] = inst_58492);

(statearr_58576[(8)] = inst_58476__$1);

return statearr_58576;
})();
var statearr_58577_60355 = state_58516__$1;
(statearr_58577_60355[(2)] = null);

(statearr_58577_60355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58517 === (8))){
var inst_58497 = (state_58516[(2)]);
var state_58516__$1 = state_58516;
var statearr_58578_60356 = state_58516__$1;
(statearr_58578_60356[(2)] = inst_58497);

(statearr_58578_60356[(1)] = (5));


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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_58580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58580[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_58580[(1)] = (1));

return statearr_58580;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_58516){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_58516);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e58583){var ex__55817__auto__ = e58583;
var statearr_58584_60363 = state_58516;
(statearr_58584_60363[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_58516[(4)]))){
var statearr_58585_60368 = state_58516;
(statearr_58585_60368[(1)] = cljs.core.first((state_58516[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60369 = state_58516;
state_58516 = G__60369;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_58516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_58516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_58586 = f__56009__auto__();
(statearr_58586[(6)] = c__56008__auto___60331);

return statearr_58586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));


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
var G__58592 = arguments.length;
switch (G__58592) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56008__auto___60372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_58629){
var state_val_58630 = (state_58629[(1)]);
if((state_val_58630 === (7))){
var inst_58607 = (state_58629[(7)]);
var inst_58606 = (state_58629[(8)]);
var inst_58606__$1 = (state_58629[(2)]);
var inst_58607__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58606__$1,(0),null);
var inst_58608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58606__$1,(1),null);
var inst_58609 = (inst_58607__$1 == null);
var state_58629__$1 = (function (){var statearr_58634 = state_58629;
(statearr_58634[(7)] = inst_58607__$1);

(statearr_58634[(9)] = inst_58608);

(statearr_58634[(8)] = inst_58606__$1);

return statearr_58634;
})();
if(cljs.core.truth_(inst_58609)){
var statearr_58635_60377 = state_58629__$1;
(statearr_58635_60377[(1)] = (8));

} else {
var statearr_58638_60378 = state_58629__$1;
(statearr_58638_60378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (1))){
var inst_58596 = cljs.core.vec(chs);
var inst_58597 = inst_58596;
var state_58629__$1 = (function (){var statearr_58640 = state_58629;
(statearr_58640[(10)] = inst_58597);

return statearr_58640;
})();
var statearr_58641_60379 = state_58629__$1;
(statearr_58641_60379[(2)] = null);

(statearr_58641_60379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (4))){
var inst_58597 = (state_58629[(10)]);
var state_58629__$1 = state_58629;
return cljs.core.async.ioc_alts_BANG_(state_58629__$1,(7),inst_58597);
} else {
if((state_val_58630 === (6))){
var inst_58625 = (state_58629[(2)]);
var state_58629__$1 = state_58629;
var statearr_58642_60381 = state_58629__$1;
(statearr_58642_60381[(2)] = inst_58625);

(statearr_58642_60381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (3))){
var inst_58627 = (state_58629[(2)]);
var state_58629__$1 = state_58629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58629__$1,inst_58627);
} else {
if((state_val_58630 === (2))){
var inst_58597 = (state_58629[(10)]);
var inst_58599 = cljs.core.count(inst_58597);
var inst_58600 = (inst_58599 > (0));
var state_58629__$1 = state_58629;
if(cljs.core.truth_(inst_58600)){
var statearr_58647_60383 = state_58629__$1;
(statearr_58647_60383[(1)] = (4));

} else {
var statearr_58648_60384 = state_58629__$1;
(statearr_58648_60384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (11))){
var inst_58597 = (state_58629[(10)]);
var inst_58618 = (state_58629[(2)]);
var tmp58644 = inst_58597;
var inst_58597__$1 = tmp58644;
var state_58629__$1 = (function (){var statearr_58649 = state_58629;
(statearr_58649[(11)] = inst_58618);

(statearr_58649[(10)] = inst_58597__$1);

return statearr_58649;
})();
var statearr_58650_60388 = state_58629__$1;
(statearr_58650_60388[(2)] = null);

(statearr_58650_60388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (9))){
var inst_58607 = (state_58629[(7)]);
var state_58629__$1 = state_58629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58629__$1,(11),out,inst_58607);
} else {
if((state_val_58630 === (5))){
var inst_58623 = cljs.core.async.close_BANG_(out);
var state_58629__$1 = state_58629;
var statearr_58652_60389 = state_58629__$1;
(statearr_58652_60389[(2)] = inst_58623);

(statearr_58652_60389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (10))){
var inst_58621 = (state_58629[(2)]);
var state_58629__$1 = state_58629;
var statearr_58655_60390 = state_58629__$1;
(statearr_58655_60390[(2)] = inst_58621);

(statearr_58655_60390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58630 === (8))){
var inst_58607 = (state_58629[(7)]);
var inst_58597 = (state_58629[(10)]);
var inst_58608 = (state_58629[(9)]);
var inst_58606 = (state_58629[(8)]);
var inst_58612 = (function (){var cs = inst_58597;
var vec__58602 = inst_58606;
var v = inst_58607;
var c = inst_58608;
return (function (p1__58590_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__58590_SHARP_);
});
})();
var inst_58614 = cljs.core.filterv(inst_58612,inst_58597);
var inst_58597__$1 = inst_58614;
var state_58629__$1 = (function (){var statearr_58656 = state_58629;
(statearr_58656[(10)] = inst_58597__$1);

return statearr_58656;
})();
var statearr_58657_60391 = state_58629__$1;
(statearr_58657_60391[(2)] = null);

(statearr_58657_60391[(1)] = (2));


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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_58661 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58661[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_58661[(1)] = (1));

return statearr_58661;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_58629){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_58629);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e58662){var ex__55817__auto__ = e58662;
var statearr_58663_60394 = state_58629;
(statearr_58663_60394[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_58629[(4)]))){
var statearr_58665_60395 = state_58629;
(statearr_58665_60395[(1)] = cljs.core.first((state_58629[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60396 = state_58629;
state_58629 = G__60396;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_58629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_58629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_58668 = f__56009__auto__();
(statearr_58668[(6)] = c__56008__auto___60372);

return statearr_58668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
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
var G__58670 = arguments.length;
switch (G__58670) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56008__auto___60399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_58700){
var state_val_58701 = (state_58700[(1)]);
if((state_val_58701 === (7))){
var inst_58679 = (state_58700[(7)]);
var inst_58679__$1 = (state_58700[(2)]);
var inst_58681 = (inst_58679__$1 == null);
var inst_58682 = cljs.core.not(inst_58681);
var state_58700__$1 = (function (){var statearr_58705 = state_58700;
(statearr_58705[(7)] = inst_58679__$1);

return statearr_58705;
})();
if(inst_58682){
var statearr_58706_60402 = state_58700__$1;
(statearr_58706_60402[(1)] = (8));

} else {
var statearr_58707_60403 = state_58700__$1;
(statearr_58707_60403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58701 === (1))){
var inst_58674 = (0);
var state_58700__$1 = (function (){var statearr_58708 = state_58700;
(statearr_58708[(8)] = inst_58674);

return statearr_58708;
})();
var statearr_58709_60404 = state_58700__$1;
(statearr_58709_60404[(2)] = null);

(statearr_58709_60404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58701 === (4))){
var state_58700__$1 = state_58700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58700__$1,(7),ch);
} else {
if((state_val_58701 === (6))){
var inst_58695 = (state_58700[(2)]);
var state_58700__$1 = state_58700;
var statearr_58715_60405 = state_58700__$1;
(statearr_58715_60405[(2)] = inst_58695);

(statearr_58715_60405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58701 === (3))){
var inst_58697 = (state_58700[(2)]);
var inst_58698 = cljs.core.async.close_BANG_(out);
var state_58700__$1 = (function (){var statearr_58716 = state_58700;
(statearr_58716[(9)] = inst_58697);

return statearr_58716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58700__$1,inst_58698);
} else {
if((state_val_58701 === (2))){
var inst_58674 = (state_58700[(8)]);
var inst_58676 = (inst_58674 < n);
var state_58700__$1 = state_58700;
if(cljs.core.truth_(inst_58676)){
var statearr_58717_60406 = state_58700__$1;
(statearr_58717_60406[(1)] = (4));

} else {
var statearr_58718_60407 = state_58700__$1;
(statearr_58718_60407[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58701 === (11))){
var inst_58674 = (state_58700[(8)]);
var inst_58687 = (state_58700[(2)]);
var inst_58688 = (inst_58674 + (1));
var inst_58674__$1 = inst_58688;
var state_58700__$1 = (function (){var statearr_58719 = state_58700;
(statearr_58719[(10)] = inst_58687);

(statearr_58719[(8)] = inst_58674__$1);

return statearr_58719;
})();
var statearr_58720_60409 = state_58700__$1;
(statearr_58720_60409[(2)] = null);

(statearr_58720_60409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58701 === (9))){
var state_58700__$1 = state_58700;
var statearr_58721_60411 = state_58700__$1;
(statearr_58721_60411[(2)] = null);

(statearr_58721_60411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58701 === (5))){
var state_58700__$1 = state_58700;
var statearr_58722_60412 = state_58700__$1;
(statearr_58722_60412[(2)] = null);

(statearr_58722_60412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58701 === (10))){
var inst_58692 = (state_58700[(2)]);
var state_58700__$1 = state_58700;
var statearr_58723_60413 = state_58700__$1;
(statearr_58723_60413[(2)] = inst_58692);

(statearr_58723_60413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58701 === (8))){
var inst_58679 = (state_58700[(7)]);
var state_58700__$1 = state_58700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58700__$1,(11),out,inst_58679);
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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_58724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58724[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_58724[(1)] = (1));

return statearr_58724;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_58700){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_58700);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e58725){var ex__55817__auto__ = e58725;
var statearr_58726_60416 = state_58700;
(statearr_58726_60416[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_58700[(4)]))){
var statearr_58727_60417 = state_58700;
(statearr_58727_60417[(1)] = cljs.core.first((state_58700[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60418 = state_58700;
state_58700 = G__60418;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_58700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_58700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_58731 = f__56009__auto__();
(statearr_58731[(6)] = c__56008__auto___60399);

return statearr_58731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58733 = (function (f,ch,meta58734){
this.f = f;
this.ch = ch;
this.meta58734 = meta58734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58735,meta58734__$1){
var self__ = this;
var _58735__$1 = this;
return (new cljs.core.async.t_cljs$core$async58733(self__.f,self__.ch,meta58734__$1));
}));

(cljs.core.async.t_cljs$core$async58733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58735){
var self__ = this;
var _58735__$1 = this;
return self__.meta58734;
}));

(cljs.core.async.t_cljs$core$async58733.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58733.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58733.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58736 = (function (f,ch,meta58734,_,fn1,meta58737){
this.f = f;
this.ch = ch;
this.meta58734 = meta58734;
this._ = _;
this.fn1 = fn1;
this.meta58737 = meta58737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58738,meta58737__$1){
var self__ = this;
var _58738__$1 = this;
return (new cljs.core.async.t_cljs$core$async58736(self__.f,self__.ch,self__.meta58734,self__._,self__.fn1,meta58737__$1));
}));

(cljs.core.async.t_cljs$core$async58736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58738){
var self__ = this;
var _58738__$1 = this;
return self__.meta58737;
}));

(cljs.core.async.t_cljs$core$async58736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async58736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__58732_SHARP_){
var G__58739 = (((p1__58732_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__58732_SHARP_) : self__.f.call(null,p1__58732_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__58739) : f1.call(null,G__58739));
});
}));

(cljs.core.async.t_cljs$core$async58736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58734","meta58734",-295819853,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58733","cljs.core.async/t_cljs$core$async58733",853552223,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58737","meta58737",1246388747,null)], null);
}));

(cljs.core.async.t_cljs$core$async58736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58736");

(cljs.core.async.t_cljs$core$async58736.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58736.
 */
cljs.core.async.__GT_t_cljs$core$async58736 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58736(f__$1,ch__$1,meta58734__$1,___$2,fn1__$1,meta58737){
return (new cljs.core.async.t_cljs$core$async58736(f__$1,ch__$1,meta58734__$1,___$2,fn1__$1,meta58737));
});

}

return (new cljs.core.async.t_cljs$core$async58736(self__.f,self__.ch,self__.meta58734,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__58747 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__58747) : self__.f.call(null,G__58747));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async58733.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async58733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58734","meta58734",-295819853,null)], null);
}));

(cljs.core.async.t_cljs$core$async58733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58733");

(cljs.core.async.t_cljs$core$async58733.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58733.
 */
cljs.core.async.__GT_t_cljs$core$async58733 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58733(f__$1,ch__$1,meta58734){
return (new cljs.core.async.t_cljs$core$async58733(f__$1,ch__$1,meta58734));
});

}

return (new cljs.core.async.t_cljs$core$async58733(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58749 = (function (f,ch,meta58750){
this.f = f;
this.ch = ch;
this.meta58750 = meta58750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58751,meta58750__$1){
var self__ = this;
var _58751__$1 = this;
return (new cljs.core.async.t_cljs$core$async58749(self__.f,self__.ch,meta58750__$1));
}));

(cljs.core.async.t_cljs$core$async58749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58751){
var self__ = this;
var _58751__$1 = this;
return self__.meta58750;
}));

(cljs.core.async.t_cljs$core$async58749.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58749.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58749.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58749.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58749.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58749.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async58749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58750","meta58750",2091619645,null)], null);
}));

(cljs.core.async.t_cljs$core$async58749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58749");

(cljs.core.async.t_cljs$core$async58749.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58749.
 */
cljs.core.async.__GT_t_cljs$core$async58749 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58749(f__$1,ch__$1,meta58750){
return (new cljs.core.async.t_cljs$core$async58749(f__$1,ch__$1,meta58750));
});

}

return (new cljs.core.async.t_cljs$core$async58749(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58763 = (function (p,ch,meta58764){
this.p = p;
this.ch = ch;
this.meta58764 = meta58764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58765,meta58764__$1){
var self__ = this;
var _58765__$1 = this;
return (new cljs.core.async.t_cljs$core$async58763(self__.p,self__.ch,meta58764__$1));
}));

(cljs.core.async.t_cljs$core$async58763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58765){
var self__ = this;
var _58765__$1 = this;
return self__.meta58764;
}));

(cljs.core.async.t_cljs$core$async58763.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58763.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58763.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58763.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async58763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58764","meta58764",382830462,null)], null);
}));

(cljs.core.async.t_cljs$core$async58763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58763");

(cljs.core.async.t_cljs$core$async58763.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58763.
 */
cljs.core.async.__GT_t_cljs$core$async58763 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58763(p__$1,ch__$1,meta58764){
return (new cljs.core.async.t_cljs$core$async58763(p__$1,ch__$1,meta58764));
});

}

return (new cljs.core.async.t_cljs$core$async58763(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__58776 = arguments.length;
switch (G__58776) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56008__auto___60470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_58803){
var state_val_58804 = (state_58803[(1)]);
if((state_val_58804 === (7))){
var inst_58799 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
var statearr_58809_60472 = state_58803__$1;
(statearr_58809_60472[(2)] = inst_58799);

(statearr_58809_60472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (1))){
var state_58803__$1 = state_58803;
var statearr_58810_60473 = state_58803__$1;
(statearr_58810_60473[(2)] = null);

(statearr_58810_60473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (4))){
var inst_58785 = (state_58803[(7)]);
var inst_58785__$1 = (state_58803[(2)]);
var inst_58786 = (inst_58785__$1 == null);
var state_58803__$1 = (function (){var statearr_58812 = state_58803;
(statearr_58812[(7)] = inst_58785__$1);

return statearr_58812;
})();
if(cljs.core.truth_(inst_58786)){
var statearr_58813_60474 = state_58803__$1;
(statearr_58813_60474[(1)] = (5));

} else {
var statearr_58814_60475 = state_58803__$1;
(statearr_58814_60475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (6))){
var inst_58785 = (state_58803[(7)]);
var inst_58790 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58785) : p.call(null,inst_58785));
var state_58803__$1 = state_58803;
if(cljs.core.truth_(inst_58790)){
var statearr_58815_60476 = state_58803__$1;
(statearr_58815_60476[(1)] = (8));

} else {
var statearr_58816_60477 = state_58803__$1;
(statearr_58816_60477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (3))){
var inst_58801 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58803__$1,inst_58801);
} else {
if((state_val_58804 === (2))){
var state_58803__$1 = state_58803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58803__$1,(4),ch);
} else {
if((state_val_58804 === (11))){
var inst_58793 = (state_58803[(2)]);
var state_58803__$1 = state_58803;
var statearr_58822_60478 = state_58803__$1;
(statearr_58822_60478[(2)] = inst_58793);

(statearr_58822_60478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (9))){
var state_58803__$1 = state_58803;
var statearr_58824_60479 = state_58803__$1;
(statearr_58824_60479[(2)] = null);

(statearr_58824_60479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (5))){
var inst_58788 = cljs.core.async.close_BANG_(out);
var state_58803__$1 = state_58803;
var statearr_58825_60480 = state_58803__$1;
(statearr_58825_60480[(2)] = inst_58788);

(statearr_58825_60480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (10))){
var inst_58796 = (state_58803[(2)]);
var state_58803__$1 = (function (){var statearr_58826 = state_58803;
(statearr_58826[(8)] = inst_58796);

return statearr_58826;
})();
var statearr_58828_60485 = state_58803__$1;
(statearr_58828_60485[(2)] = null);

(statearr_58828_60485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58804 === (8))){
var inst_58785 = (state_58803[(7)]);
var state_58803__$1 = state_58803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58803__$1,(11),out,inst_58785);
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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_58831 = [null,null,null,null,null,null,null,null,null];
(statearr_58831[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_58831[(1)] = (1));

return statearr_58831;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_58803){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_58803);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e58832){var ex__55817__auto__ = e58832;
var statearr_58833_60488 = state_58803;
(statearr_58833_60488[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_58803[(4)]))){
var statearr_58834_60489 = state_58803;
(statearr_58834_60489[(1)] = cljs.core.first((state_58803[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60491 = state_58803;
state_58803 = G__60491;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_58803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_58803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_58835 = f__56009__auto__();
(statearr_58835[(6)] = c__56008__auto___60470);

return statearr_58835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58841 = arguments.length;
switch (G__58841) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__56008__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_58912){
var state_val_58913 = (state_58912[(1)]);
if((state_val_58913 === (7))){
var inst_58908 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58914_60494 = state_58912__$1;
(statearr_58914_60494[(2)] = inst_58908);

(statearr_58914_60494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (20))){
var inst_58875 = (state_58912[(7)]);
var inst_58886 = (state_58912[(2)]);
var inst_58887 = cljs.core.next(inst_58875);
var inst_58858 = inst_58887;
var inst_58859 = null;
var inst_58860 = (0);
var inst_58861 = (0);
var state_58912__$1 = (function (){var statearr_58915 = state_58912;
(statearr_58915[(8)] = inst_58861);

(statearr_58915[(9)] = inst_58859);

(statearr_58915[(10)] = inst_58886);

(statearr_58915[(11)] = inst_58860);

(statearr_58915[(12)] = inst_58858);

return statearr_58915;
})();
var statearr_58916_60509 = state_58912__$1;
(statearr_58916_60509[(2)] = null);

(statearr_58916_60509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (1))){
var state_58912__$1 = state_58912;
var statearr_58917_60518 = state_58912__$1;
(statearr_58917_60518[(2)] = null);

(statearr_58917_60518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (4))){
var inst_58847 = (state_58912[(13)]);
var inst_58847__$1 = (state_58912[(2)]);
var inst_58848 = (inst_58847__$1 == null);
var state_58912__$1 = (function (){var statearr_58918 = state_58912;
(statearr_58918[(13)] = inst_58847__$1);

return statearr_58918;
})();
if(cljs.core.truth_(inst_58848)){
var statearr_58920_60528 = state_58912__$1;
(statearr_58920_60528[(1)] = (5));

} else {
var statearr_58921_60533 = state_58912__$1;
(statearr_58921_60533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (15))){
var state_58912__$1 = state_58912;
var statearr_58925_60538 = state_58912__$1;
(statearr_58925_60538[(2)] = null);

(statearr_58925_60538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (21))){
var state_58912__$1 = state_58912;
var statearr_58926_60543 = state_58912__$1;
(statearr_58926_60543[(2)] = null);

(statearr_58926_60543[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (13))){
var inst_58861 = (state_58912[(8)]);
var inst_58859 = (state_58912[(9)]);
var inst_58860 = (state_58912[(11)]);
var inst_58858 = (state_58912[(12)]);
var inst_58868 = (state_58912[(2)]);
var inst_58870 = (inst_58861 + (1));
var tmp58922 = inst_58859;
var tmp58923 = inst_58860;
var tmp58924 = inst_58858;
var inst_58858__$1 = tmp58924;
var inst_58859__$1 = tmp58922;
var inst_58860__$1 = tmp58923;
var inst_58861__$1 = inst_58870;
var state_58912__$1 = (function (){var statearr_58932 = state_58912;
(statearr_58932[(8)] = inst_58861__$1);

(statearr_58932[(9)] = inst_58859__$1);

(statearr_58932[(14)] = inst_58868);

(statearr_58932[(11)] = inst_58860__$1);

(statearr_58932[(12)] = inst_58858__$1);

return statearr_58932;
})();
var statearr_58934_60564 = state_58912__$1;
(statearr_58934_60564[(2)] = null);

(statearr_58934_60564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (22))){
var state_58912__$1 = state_58912;
var statearr_58935_60573 = state_58912__$1;
(statearr_58935_60573[(2)] = null);

(statearr_58935_60573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (6))){
var inst_58847 = (state_58912[(13)]);
var inst_58856 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58847) : f.call(null,inst_58847));
var inst_58857 = cljs.core.seq(inst_58856);
var inst_58858 = inst_58857;
var inst_58859 = null;
var inst_58860 = (0);
var inst_58861 = (0);
var state_58912__$1 = (function (){var statearr_58936 = state_58912;
(statearr_58936[(8)] = inst_58861);

(statearr_58936[(9)] = inst_58859);

(statearr_58936[(11)] = inst_58860);

(statearr_58936[(12)] = inst_58858);

return statearr_58936;
})();
var statearr_58937_60586 = state_58912__$1;
(statearr_58937_60586[(2)] = null);

(statearr_58937_60586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (17))){
var inst_58875 = (state_58912[(7)]);
var inst_58879 = cljs.core.chunk_first(inst_58875);
var inst_58880 = cljs.core.chunk_rest(inst_58875);
var inst_58881 = cljs.core.count(inst_58879);
var inst_58858 = inst_58880;
var inst_58859 = inst_58879;
var inst_58860 = inst_58881;
var inst_58861 = (0);
var state_58912__$1 = (function (){var statearr_58940 = state_58912;
(statearr_58940[(8)] = inst_58861);

(statearr_58940[(9)] = inst_58859);

(statearr_58940[(11)] = inst_58860);

(statearr_58940[(12)] = inst_58858);

return statearr_58940;
})();
var statearr_58944_60596 = state_58912__$1;
(statearr_58944_60596[(2)] = null);

(statearr_58944_60596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (3))){
var inst_58910 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58912__$1,inst_58910);
} else {
if((state_val_58913 === (12))){
var inst_58896 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58946_60597 = state_58912__$1;
(statearr_58946_60597[(2)] = inst_58896);

(statearr_58946_60597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (2))){
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58912__$1,(4),in$);
} else {
if((state_val_58913 === (23))){
var inst_58906 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58947_60601 = state_58912__$1;
(statearr_58947_60601[(2)] = inst_58906);

(statearr_58947_60601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (19))){
var inst_58890 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58948_60602 = state_58912__$1;
(statearr_58948_60602[(2)] = inst_58890);

(statearr_58948_60602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (11))){
var inst_58875 = (state_58912[(7)]);
var inst_58858 = (state_58912[(12)]);
var inst_58875__$1 = cljs.core.seq(inst_58858);
var state_58912__$1 = (function (){var statearr_58954 = state_58912;
(statearr_58954[(7)] = inst_58875__$1);

return statearr_58954;
})();
if(inst_58875__$1){
var statearr_58955_60608 = state_58912__$1;
(statearr_58955_60608[(1)] = (14));

} else {
var statearr_58956_60614 = state_58912__$1;
(statearr_58956_60614[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (9))){
var inst_58898 = (state_58912[(2)]);
var inst_58899 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_58912__$1 = (function (){var statearr_58958 = state_58912;
(statearr_58958[(15)] = inst_58898);

return statearr_58958;
})();
if(cljs.core.truth_(inst_58899)){
var statearr_58959_60620 = state_58912__$1;
(statearr_58959_60620[(1)] = (21));

} else {
var statearr_58960_60621 = state_58912__$1;
(statearr_58960_60621[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (5))){
var inst_58850 = cljs.core.async.close_BANG_(out);
var state_58912__$1 = state_58912;
var statearr_58965_60623 = state_58912__$1;
(statearr_58965_60623[(2)] = inst_58850);

(statearr_58965_60623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (14))){
var inst_58875 = (state_58912[(7)]);
var inst_58877 = cljs.core.chunked_seq_QMARK_(inst_58875);
var state_58912__$1 = state_58912;
if(inst_58877){
var statearr_58967_60624 = state_58912__$1;
(statearr_58967_60624[(1)] = (17));

} else {
var statearr_58969_60625 = state_58912__$1;
(statearr_58969_60625[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (16))){
var inst_58893 = (state_58912[(2)]);
var state_58912__$1 = state_58912;
var statearr_58973_60627 = state_58912__$1;
(statearr_58973_60627[(2)] = inst_58893);

(statearr_58973_60627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58913 === (10))){
var inst_58861 = (state_58912[(8)]);
var inst_58859 = (state_58912[(9)]);
var inst_58866 = cljs.core._nth(inst_58859,inst_58861);
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58912__$1,(13),out,inst_58866);
} else {
if((state_val_58913 === (18))){
var inst_58875 = (state_58912[(7)]);
var inst_58884 = cljs.core.first(inst_58875);
var state_58912__$1 = state_58912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58912__$1,(20),out,inst_58884);
} else {
if((state_val_58913 === (8))){
var inst_58861 = (state_58912[(8)]);
var inst_58860 = (state_58912[(11)]);
var inst_58863 = (inst_58861 < inst_58860);
var inst_58864 = inst_58863;
var state_58912__$1 = state_58912;
if(cljs.core.truth_(inst_58864)){
var statearr_58981_60628 = state_58912__$1;
(statearr_58981_60628[(1)] = (10));

} else {
var statearr_58983_60630 = state_58912__$1;
(statearr_58983_60630[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__55814__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__55814__auto____0 = (function (){
var statearr_58990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58990[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__55814__auto__);

(statearr_58990[(1)] = (1));

return statearr_58990;
});
var cljs$core$async$mapcat_STAR__$_state_machine__55814__auto____1 = (function (state_58912){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_58912);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e58994){var ex__55817__auto__ = e58994;
var statearr_58995_60634 = state_58912;
(statearr_58995_60634[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_58912[(4)]))){
var statearr_58998_60635 = state_58912;
(statearr_58998_60635[(1)] = cljs.core.first((state_58912[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60636 = state_58912;
state_58912 = G__60636;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__55814__auto__ = function(state_58912){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__55814__auto____1.call(this,state_58912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__55814__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__55814__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_58999 = f__56009__auto__();
(statearr_58999[(6)] = c__56008__auto__);

return statearr_58999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));

return c__56008__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59011 = arguments.length;
switch (G__59011) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__59021 = arguments.length;
switch (G__59021) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__59030 = arguments.length;
switch (G__59030) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56008__auto___60672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_59057){
var state_val_59058 = (state_59057[(1)]);
if((state_val_59058 === (7))){
var inst_59052 = (state_59057[(2)]);
var state_59057__$1 = state_59057;
var statearr_59059_60680 = state_59057__$1;
(statearr_59059_60680[(2)] = inst_59052);

(statearr_59059_60680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59058 === (1))){
var inst_59034 = null;
var state_59057__$1 = (function (){var statearr_59060 = state_59057;
(statearr_59060[(7)] = inst_59034);

return statearr_59060;
})();
var statearr_59061_60688 = state_59057__$1;
(statearr_59061_60688[(2)] = null);

(statearr_59061_60688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59058 === (4))){
var inst_59037 = (state_59057[(8)]);
var inst_59037__$1 = (state_59057[(2)]);
var inst_59038 = (inst_59037__$1 == null);
var inst_59039 = cljs.core.not(inst_59038);
var state_59057__$1 = (function (){var statearr_59062 = state_59057;
(statearr_59062[(8)] = inst_59037__$1);

return statearr_59062;
})();
if(inst_59039){
var statearr_59063_60700 = state_59057__$1;
(statearr_59063_60700[(1)] = (5));

} else {
var statearr_59064_60701 = state_59057__$1;
(statearr_59064_60701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59058 === (6))){
var state_59057__$1 = state_59057;
var statearr_59065_60702 = state_59057__$1;
(statearr_59065_60702[(2)] = null);

(statearr_59065_60702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59058 === (3))){
var inst_59054 = (state_59057[(2)]);
var inst_59055 = cljs.core.async.close_BANG_(out);
var state_59057__$1 = (function (){var statearr_59067 = state_59057;
(statearr_59067[(9)] = inst_59054);

return statearr_59067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59057__$1,inst_59055);
} else {
if((state_val_59058 === (2))){
var state_59057__$1 = state_59057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59057__$1,(4),ch);
} else {
if((state_val_59058 === (11))){
var inst_59037 = (state_59057[(8)]);
var inst_59046 = (state_59057[(2)]);
var inst_59034 = inst_59037;
var state_59057__$1 = (function (){var statearr_59072 = state_59057;
(statearr_59072[(7)] = inst_59034);

(statearr_59072[(10)] = inst_59046);

return statearr_59072;
})();
var statearr_59077_60704 = state_59057__$1;
(statearr_59077_60704[(2)] = null);

(statearr_59077_60704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59058 === (9))){
var inst_59037 = (state_59057[(8)]);
var state_59057__$1 = state_59057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59057__$1,(11),out,inst_59037);
} else {
if((state_val_59058 === (5))){
var inst_59034 = (state_59057[(7)]);
var inst_59037 = (state_59057[(8)]);
var inst_59041 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59037,inst_59034);
var state_59057__$1 = state_59057;
if(inst_59041){
var statearr_59086_60705 = state_59057__$1;
(statearr_59086_60705[(1)] = (8));

} else {
var statearr_59087_60706 = state_59057__$1;
(statearr_59087_60706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59058 === (10))){
var inst_59049 = (state_59057[(2)]);
var state_59057__$1 = state_59057;
var statearr_59088_60710 = state_59057__$1;
(statearr_59088_60710[(2)] = inst_59049);

(statearr_59088_60710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59058 === (8))){
var inst_59034 = (state_59057[(7)]);
var tmp59081 = inst_59034;
var inst_59034__$1 = tmp59081;
var state_59057__$1 = (function (){var statearr_59089 = state_59057;
(statearr_59089[(7)] = inst_59034__$1);

return statearr_59089;
})();
var statearr_59090_60719 = state_59057__$1;
(statearr_59090_60719[(2)] = null);

(statearr_59090_60719[(1)] = (2));


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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_59091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59091[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_59091[(1)] = (1));

return statearr_59091;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_59057){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_59057);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e59092){var ex__55817__auto__ = e59092;
var statearr_59093_60728 = state_59057;
(statearr_59093_60728[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_59057[(4)]))){
var statearr_59094_60732 = state_59057;
(statearr_59094_60732[(1)] = cljs.core.first((state_59057[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60733 = state_59057;
state_59057 = G__60733;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_59057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_59057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_59095 = f__56009__auto__();
(statearr_59095[(6)] = c__56008__auto___60672);

return statearr_59095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59097 = arguments.length;
switch (G__59097) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56008__auto___60737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_59135){
var state_val_59136 = (state_59135[(1)]);
if((state_val_59136 === (7))){
var inst_59131 = (state_59135[(2)]);
var state_59135__$1 = state_59135;
var statearr_59137_60738 = state_59135__$1;
(statearr_59137_60738[(2)] = inst_59131);

(statearr_59137_60738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (1))){
var inst_59098 = (new Array(n));
var inst_59099 = inst_59098;
var inst_59100 = (0);
var state_59135__$1 = (function (){var statearr_59138 = state_59135;
(statearr_59138[(7)] = inst_59099);

(statearr_59138[(8)] = inst_59100);

return statearr_59138;
})();
var statearr_59139_60744 = state_59135__$1;
(statearr_59139_60744[(2)] = null);

(statearr_59139_60744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (4))){
var inst_59103 = (state_59135[(9)]);
var inst_59103__$1 = (state_59135[(2)]);
var inst_59104 = (inst_59103__$1 == null);
var inst_59105 = cljs.core.not(inst_59104);
var state_59135__$1 = (function (){var statearr_59140 = state_59135;
(statearr_59140[(9)] = inst_59103__$1);

return statearr_59140;
})();
if(inst_59105){
var statearr_59141_60747 = state_59135__$1;
(statearr_59141_60747[(1)] = (5));

} else {
var statearr_59142_60748 = state_59135__$1;
(statearr_59142_60748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (15))){
var inst_59125 = (state_59135[(2)]);
var state_59135__$1 = state_59135;
var statearr_59143_60749 = state_59135__$1;
(statearr_59143_60749[(2)] = inst_59125);

(statearr_59143_60749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (13))){
var state_59135__$1 = state_59135;
var statearr_59144_60750 = state_59135__$1;
(statearr_59144_60750[(2)] = null);

(statearr_59144_60750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (6))){
var inst_59100 = (state_59135[(8)]);
var inst_59121 = (inst_59100 > (0));
var state_59135__$1 = state_59135;
if(cljs.core.truth_(inst_59121)){
var statearr_59145_60751 = state_59135__$1;
(statearr_59145_60751[(1)] = (12));

} else {
var statearr_59146_60752 = state_59135__$1;
(statearr_59146_60752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (3))){
var inst_59133 = (state_59135[(2)]);
var state_59135__$1 = state_59135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59135__$1,inst_59133);
} else {
if((state_val_59136 === (12))){
var inst_59099 = (state_59135[(7)]);
var inst_59123 = cljs.core.vec(inst_59099);
var state_59135__$1 = state_59135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59135__$1,(15),out,inst_59123);
} else {
if((state_val_59136 === (2))){
var state_59135__$1 = state_59135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59135__$1,(4),ch);
} else {
if((state_val_59136 === (11))){
var inst_59115 = (state_59135[(2)]);
var inst_59116 = (new Array(n));
var inst_59099 = inst_59116;
var inst_59100 = (0);
var state_59135__$1 = (function (){var statearr_59147 = state_59135;
(statearr_59147[(10)] = inst_59115);

(statearr_59147[(7)] = inst_59099);

(statearr_59147[(8)] = inst_59100);

return statearr_59147;
})();
var statearr_59148_60753 = state_59135__$1;
(statearr_59148_60753[(2)] = null);

(statearr_59148_60753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (9))){
var inst_59099 = (state_59135[(7)]);
var inst_59113 = cljs.core.vec(inst_59099);
var state_59135__$1 = state_59135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59135__$1,(11),out,inst_59113);
} else {
if((state_val_59136 === (5))){
var inst_59103 = (state_59135[(9)]);
var inst_59108 = (state_59135[(11)]);
var inst_59099 = (state_59135[(7)]);
var inst_59100 = (state_59135[(8)]);
var inst_59107 = (inst_59099[inst_59100] = inst_59103);
var inst_59108__$1 = (inst_59100 + (1));
var inst_59109 = (inst_59108__$1 < n);
var state_59135__$1 = (function (){var statearr_59149 = state_59135;
(statearr_59149[(12)] = inst_59107);

(statearr_59149[(11)] = inst_59108__$1);

return statearr_59149;
})();
if(cljs.core.truth_(inst_59109)){
var statearr_59150_60757 = state_59135__$1;
(statearr_59150_60757[(1)] = (8));

} else {
var statearr_59151_60758 = state_59135__$1;
(statearr_59151_60758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (14))){
var inst_59128 = (state_59135[(2)]);
var inst_59129 = cljs.core.async.close_BANG_(out);
var state_59135__$1 = (function (){var statearr_59153 = state_59135;
(statearr_59153[(13)] = inst_59128);

return statearr_59153;
})();
var statearr_59154_60762 = state_59135__$1;
(statearr_59154_60762[(2)] = inst_59129);

(statearr_59154_60762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (10))){
var inst_59119 = (state_59135[(2)]);
var state_59135__$1 = state_59135;
var statearr_59155_60765 = state_59135__$1;
(statearr_59155_60765[(2)] = inst_59119);

(statearr_59155_60765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59136 === (8))){
var inst_59108 = (state_59135[(11)]);
var inst_59099 = (state_59135[(7)]);
var tmp59152 = inst_59099;
var inst_59099__$1 = tmp59152;
var inst_59100 = inst_59108;
var state_59135__$1 = (function (){var statearr_59156 = state_59135;
(statearr_59156[(7)] = inst_59099__$1);

(statearr_59156[(8)] = inst_59100);

return statearr_59156;
})();
var statearr_59157_60768 = state_59135__$1;
(statearr_59157_60768[(2)] = null);

(statearr_59157_60768[(1)] = (2));


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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_59158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59158[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_59158[(1)] = (1));

return statearr_59158;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_59135){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_59135);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e59159){var ex__55817__auto__ = e59159;
var statearr_59160_60769 = state_59135;
(statearr_59160_60769[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_59135[(4)]))){
var statearr_59161_60770 = state_59135;
(statearr_59161_60770[(1)] = cljs.core.first((state_59135[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60776 = state_59135;
state_59135 = G__60776;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_59135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_59135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_59162 = f__56009__auto__();
(statearr_59162[(6)] = c__56008__auto___60737);

return statearr_59162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59167 = arguments.length;
switch (G__59167) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56008__auto___60792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_59212){
var state_val_59213 = (state_59212[(1)]);
if((state_val_59213 === (7))){
var inst_59208 = (state_59212[(2)]);
var state_59212__$1 = state_59212;
var statearr_59216_60795 = state_59212__$1;
(statearr_59216_60795[(2)] = inst_59208);

(statearr_59216_60795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (1))){
var inst_59168 = [];
var inst_59169 = inst_59168;
var inst_59170 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59212__$1 = (function (){var statearr_59217 = state_59212;
(statearr_59217[(7)] = inst_59170);

(statearr_59217[(8)] = inst_59169);

return statearr_59217;
})();
var statearr_59218_60798 = state_59212__$1;
(statearr_59218_60798[(2)] = null);

(statearr_59218_60798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (4))){
var inst_59173 = (state_59212[(9)]);
var inst_59173__$1 = (state_59212[(2)]);
var inst_59174 = (inst_59173__$1 == null);
var inst_59175 = cljs.core.not(inst_59174);
var state_59212__$1 = (function (){var statearr_59219 = state_59212;
(statearr_59219[(9)] = inst_59173__$1);

return statearr_59219;
})();
if(inst_59175){
var statearr_59220_60802 = state_59212__$1;
(statearr_59220_60802[(1)] = (5));

} else {
var statearr_59222_60803 = state_59212__$1;
(statearr_59222_60803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (15))){
var inst_59202 = (state_59212[(2)]);
var state_59212__$1 = state_59212;
var statearr_59224_60805 = state_59212__$1;
(statearr_59224_60805[(2)] = inst_59202);

(statearr_59224_60805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (13))){
var state_59212__$1 = state_59212;
var statearr_59225_60806 = state_59212__$1;
(statearr_59225_60806[(2)] = null);

(statearr_59225_60806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (6))){
var inst_59169 = (state_59212[(8)]);
var inst_59197 = inst_59169.length;
var inst_59198 = (inst_59197 > (0));
var state_59212__$1 = state_59212;
if(cljs.core.truth_(inst_59198)){
var statearr_59226_60809 = state_59212__$1;
(statearr_59226_60809[(1)] = (12));

} else {
var statearr_59227_60813 = state_59212__$1;
(statearr_59227_60813[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (3))){
var inst_59210 = (state_59212[(2)]);
var state_59212__$1 = state_59212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59212__$1,inst_59210);
} else {
if((state_val_59213 === (12))){
var inst_59169 = (state_59212[(8)]);
var inst_59200 = cljs.core.vec(inst_59169);
var state_59212__$1 = state_59212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59212__$1,(15),out,inst_59200);
} else {
if((state_val_59213 === (2))){
var state_59212__$1 = state_59212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59212__$1,(4),ch);
} else {
if((state_val_59213 === (11))){
var inst_59173 = (state_59212[(9)]);
var inst_59178 = (state_59212[(10)]);
var inst_59190 = (state_59212[(2)]);
var inst_59191 = [];
var inst_59192 = inst_59191.push(inst_59173);
var inst_59169 = inst_59191;
var inst_59170 = inst_59178;
var state_59212__$1 = (function (){var statearr_59228 = state_59212;
(statearr_59228[(7)] = inst_59170);

(statearr_59228[(11)] = inst_59190);

(statearr_59228[(8)] = inst_59169);

(statearr_59228[(12)] = inst_59192);

return statearr_59228;
})();
var statearr_59229_60818 = state_59212__$1;
(statearr_59229_60818[(2)] = null);

(statearr_59229_60818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (9))){
var inst_59169 = (state_59212[(8)]);
var inst_59188 = cljs.core.vec(inst_59169);
var state_59212__$1 = state_59212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59212__$1,(11),out,inst_59188);
} else {
if((state_val_59213 === (5))){
var inst_59170 = (state_59212[(7)]);
var inst_59173 = (state_59212[(9)]);
var inst_59178 = (state_59212[(10)]);
var inst_59178__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59173) : f.call(null,inst_59173));
var inst_59181 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59178__$1,inst_59170);
var inst_59182 = cljs.core.keyword_identical_QMARK_(inst_59170,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59183 = ((inst_59181) || (inst_59182));
var state_59212__$1 = (function (){var statearr_59230 = state_59212;
(statearr_59230[(10)] = inst_59178__$1);

return statearr_59230;
})();
if(cljs.core.truth_(inst_59183)){
var statearr_59232_60823 = state_59212__$1;
(statearr_59232_60823[(1)] = (8));

} else {
var statearr_59233_60824 = state_59212__$1;
(statearr_59233_60824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (14))){
var inst_59205 = (state_59212[(2)]);
var inst_59206 = cljs.core.async.close_BANG_(out);
var state_59212__$1 = (function (){var statearr_59238 = state_59212;
(statearr_59238[(13)] = inst_59205);

return statearr_59238;
})();
var statearr_59239_60825 = state_59212__$1;
(statearr_59239_60825[(2)] = inst_59206);

(statearr_59239_60825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (10))){
var inst_59195 = (state_59212[(2)]);
var state_59212__$1 = state_59212;
var statearr_59240_60826 = state_59212__$1;
(statearr_59240_60826[(2)] = inst_59195);

(statearr_59240_60826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59213 === (8))){
var inst_59173 = (state_59212[(9)]);
var inst_59169 = (state_59212[(8)]);
var inst_59178 = (state_59212[(10)]);
var inst_59185 = inst_59169.push(inst_59173);
var tmp59236 = inst_59169;
var inst_59169__$1 = tmp59236;
var inst_59170 = inst_59178;
var state_59212__$1 = (function (){var statearr_59241 = state_59212;
(statearr_59241[(7)] = inst_59170);

(statearr_59241[(14)] = inst_59185);

(statearr_59241[(8)] = inst_59169__$1);

return statearr_59241;
})();
var statearr_59242_60833 = state_59212__$1;
(statearr_59242_60833[(2)] = null);

(statearr_59242_60833[(1)] = (2));


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
var cljs$core$async$state_machine__55814__auto__ = null;
var cljs$core$async$state_machine__55814__auto____0 = (function (){
var statearr_59245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59245[(0)] = cljs$core$async$state_machine__55814__auto__);

(statearr_59245[(1)] = (1));

return statearr_59245;
});
var cljs$core$async$state_machine__55814__auto____1 = (function (state_59212){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_59212);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e59246){var ex__55817__auto__ = e59246;
var statearr_59247_60836 = state_59212;
(statearr_59247_60836[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_59212[(4)]))){
var statearr_59248_60837 = state_59212;
(statearr_59248_60837[(1)] = cljs.core.first((state_59212[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60840 = state_59212;
state_59212 = G__60840;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
cljs$core$async$state_machine__55814__auto__ = function(state_59212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55814__auto____1.call(this,state_59212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55814__auto____0;
cljs$core$async$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55814__auto____1;
return cljs$core$async$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_59250 = f__56009__auto__();
(statearr_59250[(6)] = c__56008__auto___60792);

return statearr_59250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
