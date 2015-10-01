// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async30323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30323 = (function (fn_handler,f,meta30324){
this.fn_handler = fn_handler;
this.f = f;
this.meta30324 = meta30324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30325,meta30324__$1){
var self__ = this;
var _30325__$1 = this;
return (new cljs.core.async.t_cljs$core$async30323(self__.fn_handler,self__.f,meta30324__$1));
});

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30325){
var self__ = this;
var _30325__$1 = this;
return self__.meta30324;
});

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta30324","meta30324",-1888008800,null)], null);
});

cljs.core.async.t_cljs$core$async30323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30323";

cljs.core.async.t_cljs$core$async30323.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async30323");
});

cljs.core.async.__GT_t_cljs$core$async30323 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async30323(fn_handler__$1,f__$1,meta30324){
return (new cljs.core.async.t_cljs$core$async30323(fn_handler__$1,f__$1,meta30324));
});

}

return (new cljs.core.async.t_cljs$core$async30323(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args30328 = [];
var len__20172__auto___30331 = arguments.length;
var i__20173__auto___30332 = (0);
while(true){
if((i__20173__auto___30332 < len__20172__auto___30331)){
args30328.push((arguments[i__20173__auto___30332]));

var G__30333 = (i__20173__auto___30332 + (1));
i__20173__auto___30332 = G__30333;
continue;
} else {
}
break;
}

var G__30330 = args30328.length;
switch (G__30330) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30328.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args30335 = [];
var len__20172__auto___30338 = arguments.length;
var i__20173__auto___30339 = (0);
while(true){
if((i__20173__auto___30339 < len__20172__auto___30338)){
args30335.push((arguments[i__20173__auto___30339]));

var G__30340 = (i__20173__auto___30339 + (1));
i__20173__auto___30339 = G__30340;
continue;
} else {
}
break;
}

var G__30337 = args30335.length;
switch (G__30337) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30335.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30342 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30342);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30342,ret){
return (function (){
return fn1.call(null,val_30342);
});})(val_30342,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30343 = [];
var len__20172__auto___30346 = arguments.length;
var i__20173__auto___30347 = (0);
while(true){
if((i__20173__auto___30347 < len__20172__auto___30346)){
args30343.push((arguments[i__20173__auto___30347]));

var G__30348 = (i__20173__auto___30347 + (1));
i__20173__auto___30347 = G__30348;
continue;
} else {
}
break;
}

var G__30345 = args30343.length;
switch (G__30345) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30343.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20017__auto___30350 = n;
var x_30351 = (0);
while(true){
if((x_30351 < n__20017__auto___30350)){
(a[x_30351] = (0));

var G__30352 = (x_30351 + (1));
x_30351 = G__30352;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30353 = (i + (1));
i = G__30353;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30357 = (function (alt_flag,flag,meta30358){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30358 = meta30358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30359,meta30358__$1){
var self__ = this;
var _30359__$1 = this;
return (new cljs.core.async.t_cljs$core$async30357(self__.alt_flag,self__.flag,meta30358__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30359){
var self__ = this;
var _30359__$1 = this;
return self__.meta30358;
});})(flag))
;

cljs.core.async.t_cljs$core$async30357.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30357.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30358","meta30358",1428802290,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30357";

cljs.core.async.t_cljs$core$async30357.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async30357");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30357 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30357(alt_flag__$1,flag__$1,meta30358){
return (new cljs.core.async.t_cljs$core$async30357(alt_flag__$1,flag__$1,meta30358));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30357(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30363 = (function (alt_handler,flag,cb,meta30364){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30364 = meta30364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30365,meta30364__$1){
var self__ = this;
var _30365__$1 = this;
return (new cljs.core.async.t_cljs$core$async30363(self__.alt_handler,self__.flag,self__.cb,meta30364__$1));
});

cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30365){
var self__ = this;
var _30365__$1 = this;
return self__.meta30364;
});

cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30364","meta30364",753857584,null)], null);
});

cljs.core.async.t_cljs$core$async30363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30363";

cljs.core.async.t_cljs$core$async30363.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async30363");
});

cljs.core.async.__GT_t_cljs$core$async30363 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30363(alt_handler__$1,flag__$1,cb__$1,meta30364){
return (new cljs.core.async.t_cljs$core$async30363(alt_handler__$1,flag__$1,cb__$1,meta30364));
});

}

return (new cljs.core.async.t_cljs$core$async30363(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30366_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30366_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30367_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30367_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19114__auto__ = wport;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30368 = (i + (1));
i = G__30368;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19114__auto__ = ret;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19102__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19102__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19102__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__20179__auto__ = [];
var len__20172__auto___30374 = arguments.length;
var i__20173__auto___30375 = (0);
while(true){
if((i__20173__auto___30375 < len__20172__auto___30374)){
args__20179__auto__.push((arguments[i__20173__auto___30375]));

var G__30376 = (i__20173__auto___30375 + (1));
i__20173__auto___30375 = G__30376;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30371){
var map__30372 = p__30371;
var map__30372__$1 = ((((!((map__30372 == null)))?((((map__30372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30372):map__30372);
var opts = map__30372__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30369){
var G__30370 = cljs.core.first.call(null,seq30369);
var seq30369__$1 = cljs.core.next.call(null,seq30369);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30370,seq30369__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30377 = [];
var len__20172__auto___30427 = arguments.length;
var i__20173__auto___30428 = (0);
while(true){
if((i__20173__auto___30428 < len__20172__auto___30427)){
args30377.push((arguments[i__20173__auto___30428]));

var G__30429 = (i__20173__auto___30428 + (1));
i__20173__auto___30428 = G__30429;
continue;
} else {
}
break;
}

var G__30379 = args30377.length;
switch (G__30379) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30377.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23014__auto___30431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___30431){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___30431){
return (function (state_30403){
var state_val_30404 = (state_30403[(1)]);
if((state_val_30404 === (7))){
var inst_30399 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
var statearr_30405_30432 = state_30403__$1;
(statearr_30405_30432[(2)] = inst_30399);

(statearr_30405_30432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (1))){
var state_30403__$1 = state_30403;
var statearr_30406_30433 = state_30403__$1;
(statearr_30406_30433[(2)] = null);

(statearr_30406_30433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (4))){
var inst_30382 = (state_30403[(7)]);
var inst_30382__$1 = (state_30403[(2)]);
var inst_30383 = (inst_30382__$1 == null);
var state_30403__$1 = (function (){var statearr_30407 = state_30403;
(statearr_30407[(7)] = inst_30382__$1);

return statearr_30407;
})();
if(cljs.core.truth_(inst_30383)){
var statearr_30408_30434 = state_30403__$1;
(statearr_30408_30434[(1)] = (5));

} else {
var statearr_30409_30435 = state_30403__$1;
(statearr_30409_30435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (13))){
var state_30403__$1 = state_30403;
var statearr_30410_30436 = state_30403__$1;
(statearr_30410_30436[(2)] = null);

(statearr_30410_30436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (6))){
var inst_30382 = (state_30403[(7)]);
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30403__$1,(11),to,inst_30382);
} else {
if((state_val_30404 === (3))){
var inst_30401 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30403__$1,inst_30401);
} else {
if((state_val_30404 === (12))){
var state_30403__$1 = state_30403;
var statearr_30411_30437 = state_30403__$1;
(statearr_30411_30437[(2)] = null);

(statearr_30411_30437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (2))){
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30403__$1,(4),from);
} else {
if((state_val_30404 === (11))){
var inst_30392 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
if(cljs.core.truth_(inst_30392)){
var statearr_30412_30438 = state_30403__$1;
(statearr_30412_30438[(1)] = (12));

} else {
var statearr_30413_30439 = state_30403__$1;
(statearr_30413_30439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (9))){
var state_30403__$1 = state_30403;
var statearr_30414_30440 = state_30403__$1;
(statearr_30414_30440[(2)] = null);

(statearr_30414_30440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (5))){
var state_30403__$1 = state_30403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30415_30441 = state_30403__$1;
(statearr_30415_30441[(1)] = (8));

} else {
var statearr_30416_30442 = state_30403__$1;
(statearr_30416_30442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (14))){
var inst_30397 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
var statearr_30417_30443 = state_30403__$1;
(statearr_30417_30443[(2)] = inst_30397);

(statearr_30417_30443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (10))){
var inst_30389 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
var statearr_30418_30444 = state_30403__$1;
(statearr_30418_30444[(2)] = inst_30389);

(statearr_30418_30444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (8))){
var inst_30386 = cljs.core.async.close_BANG_.call(null,to);
var state_30403__$1 = state_30403;
var statearr_30419_30445 = state_30403__$1;
(statearr_30419_30445[(2)] = inst_30386);

(statearr_30419_30445[(1)] = (10));


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
});})(c__23014__auto___30431))
;
return ((function (switch__22949__auto__,c__23014__auto___30431){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_30423 = [null,null,null,null,null,null,null,null];
(statearr_30423[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_30423[(1)] = (1));

return statearr_30423;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_30403){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_30403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e30424){if((e30424 instanceof Object)){
var ex__22953__auto__ = e30424;
var statearr_30425_30446 = state_30403;
(statearr_30425_30446[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30447 = state_30403;
state_30403 = G__30447;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_30403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_30403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___30431))
})();
var state__23016__auto__ = (function (){var statearr_30426 = f__23015__auto__.call(null);
(statearr_30426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___30431);

return statearr_30426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___30431))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30631){
var vec__30632 = p__30631;
var v = cljs.core.nth.call(null,vec__30632,(0),null);
var p = cljs.core.nth.call(null,vec__30632,(1),null);
var job = vec__30632;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23014__auto___30814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___30814,res,vec__30632,v,p,job,jobs,results){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___30814,res,vec__30632,v,p,job,jobs,results){
return (function (state_30637){
var state_val_30638 = (state_30637[(1)]);
if((state_val_30638 === (1))){
var state_30637__$1 = state_30637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30637__$1,(2),res,v);
} else {
if((state_val_30638 === (2))){
var inst_30634 = (state_30637[(2)]);
var inst_30635 = cljs.core.async.close_BANG_.call(null,res);
var state_30637__$1 = (function (){var statearr_30639 = state_30637;
(statearr_30639[(7)] = inst_30634);

return statearr_30639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30637__$1,inst_30635);
} else {
return null;
}
}
});})(c__23014__auto___30814,res,vec__30632,v,p,job,jobs,results))
;
return ((function (switch__22949__auto__,c__23014__auto___30814,res,vec__30632,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0 = (function (){
var statearr_30643 = [null,null,null,null,null,null,null,null];
(statearr_30643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__);

(statearr_30643[(1)] = (1));

return statearr_30643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1 = (function (state_30637){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_30637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e30644){if((e30644 instanceof Object)){
var ex__22953__auto__ = e30644;
var statearr_30645_30815 = state_30637;
(statearr_30645_30815[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30816 = state_30637;
state_30637 = G__30816;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = function(state_30637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1.call(this,state_30637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___30814,res,vec__30632,v,p,job,jobs,results))
})();
var state__23016__auto__ = (function (){var statearr_30646 = f__23015__auto__.call(null);
(statearr_30646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___30814);

return statearr_30646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___30814,res,vec__30632,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30647){
var vec__30648 = p__30647;
var v = cljs.core.nth.call(null,vec__30648,(0),null);
var p = cljs.core.nth.call(null,vec__30648,(1),null);
var job = vec__30648;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20017__auto___30817 = n;
var __30818 = (0);
while(true){
if((__30818 < n__20017__auto___30817)){
var G__30649_30819 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30649_30819) {
case "compute":
var c__23014__auto___30821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30818,c__23014__auto___30821,G__30649_30819,n__20017__auto___30817,jobs,results,process,async){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (__30818,c__23014__auto___30821,G__30649_30819,n__20017__auto___30817,jobs,results,process,async){
return (function (state_30662){
var state_val_30663 = (state_30662[(1)]);
if((state_val_30663 === (1))){
var state_30662__$1 = state_30662;
var statearr_30664_30822 = state_30662__$1;
(statearr_30664_30822[(2)] = null);

(statearr_30664_30822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (2))){
var state_30662__$1 = state_30662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30662__$1,(4),jobs);
} else {
if((state_val_30663 === (3))){
var inst_30660 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30662__$1,inst_30660);
} else {
if((state_val_30663 === (4))){
var inst_30652 = (state_30662[(2)]);
var inst_30653 = process.call(null,inst_30652);
var state_30662__$1 = state_30662;
if(cljs.core.truth_(inst_30653)){
var statearr_30665_30823 = state_30662__$1;
(statearr_30665_30823[(1)] = (5));

} else {
var statearr_30666_30824 = state_30662__$1;
(statearr_30666_30824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (5))){
var state_30662__$1 = state_30662;
var statearr_30667_30825 = state_30662__$1;
(statearr_30667_30825[(2)] = null);

(statearr_30667_30825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (6))){
var state_30662__$1 = state_30662;
var statearr_30668_30826 = state_30662__$1;
(statearr_30668_30826[(2)] = null);

(statearr_30668_30826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30663 === (7))){
var inst_30658 = (state_30662[(2)]);
var state_30662__$1 = state_30662;
var statearr_30669_30827 = state_30662__$1;
(statearr_30669_30827[(2)] = inst_30658);

(statearr_30669_30827[(1)] = (3));


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
});})(__30818,c__23014__auto___30821,G__30649_30819,n__20017__auto___30817,jobs,results,process,async))
;
return ((function (__30818,switch__22949__auto__,c__23014__auto___30821,G__30649_30819,n__20017__auto___30817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0 = (function (){
var statearr_30673 = [null,null,null,null,null,null,null];
(statearr_30673[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__);

(statearr_30673[(1)] = (1));

return statearr_30673;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1 = (function (state_30662){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_30662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e30674){if((e30674 instanceof Object)){
var ex__22953__auto__ = e30674;
var statearr_30675_30828 = state_30662;
(statearr_30675_30828[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30829 = state_30662;
state_30662 = G__30829;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = function(state_30662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1.call(this,state_30662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__;
})()
;})(__30818,switch__22949__auto__,c__23014__auto___30821,G__30649_30819,n__20017__auto___30817,jobs,results,process,async))
})();
var state__23016__auto__ = (function (){var statearr_30676 = f__23015__auto__.call(null);
(statearr_30676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___30821);

return statearr_30676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(__30818,c__23014__auto___30821,G__30649_30819,n__20017__auto___30817,jobs,results,process,async))
);


break;
case "async":
var c__23014__auto___30830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30818,c__23014__auto___30830,G__30649_30819,n__20017__auto___30817,jobs,results,process,async){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (__30818,c__23014__auto___30830,G__30649_30819,n__20017__auto___30817,jobs,results,process,async){
return (function (state_30689){
var state_val_30690 = (state_30689[(1)]);
if((state_val_30690 === (1))){
var state_30689__$1 = state_30689;
var statearr_30691_30831 = state_30689__$1;
(statearr_30691_30831[(2)] = null);

(statearr_30691_30831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (2))){
var state_30689__$1 = state_30689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30689__$1,(4),jobs);
} else {
if((state_val_30690 === (3))){
var inst_30687 = (state_30689[(2)]);
var state_30689__$1 = state_30689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30689__$1,inst_30687);
} else {
if((state_val_30690 === (4))){
var inst_30679 = (state_30689[(2)]);
var inst_30680 = async.call(null,inst_30679);
var state_30689__$1 = state_30689;
if(cljs.core.truth_(inst_30680)){
var statearr_30692_30832 = state_30689__$1;
(statearr_30692_30832[(1)] = (5));

} else {
var statearr_30693_30833 = state_30689__$1;
(statearr_30693_30833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (5))){
var state_30689__$1 = state_30689;
var statearr_30694_30834 = state_30689__$1;
(statearr_30694_30834[(2)] = null);

(statearr_30694_30834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (6))){
var state_30689__$1 = state_30689;
var statearr_30695_30835 = state_30689__$1;
(statearr_30695_30835[(2)] = null);

(statearr_30695_30835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30690 === (7))){
var inst_30685 = (state_30689[(2)]);
var state_30689__$1 = state_30689;
var statearr_30696_30836 = state_30689__$1;
(statearr_30696_30836[(2)] = inst_30685);

(statearr_30696_30836[(1)] = (3));


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
});})(__30818,c__23014__auto___30830,G__30649_30819,n__20017__auto___30817,jobs,results,process,async))
;
return ((function (__30818,switch__22949__auto__,c__23014__auto___30830,G__30649_30819,n__20017__auto___30817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0 = (function (){
var statearr_30700 = [null,null,null,null,null,null,null];
(statearr_30700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__);

(statearr_30700[(1)] = (1));

return statearr_30700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1 = (function (state_30689){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_30689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e30701){if((e30701 instanceof Object)){
var ex__22953__auto__ = e30701;
var statearr_30702_30837 = state_30689;
(statearr_30702_30837[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30838 = state_30689;
state_30689 = G__30838;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = function(state_30689){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1.call(this,state_30689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__;
})()
;})(__30818,switch__22949__auto__,c__23014__auto___30830,G__30649_30819,n__20017__auto___30817,jobs,results,process,async))
})();
var state__23016__auto__ = (function (){var statearr_30703 = f__23015__auto__.call(null);
(statearr_30703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___30830);

return statearr_30703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(__30818,c__23014__auto___30830,G__30649_30819,n__20017__auto___30817,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30839 = (__30818 + (1));
__30818 = G__30839;
continue;
} else {
}
break;
}

var c__23014__auto___30840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___30840,jobs,results,process,async){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___30840,jobs,results,process,async){
return (function (state_30725){
var state_val_30726 = (state_30725[(1)]);
if((state_val_30726 === (1))){
var state_30725__$1 = state_30725;
var statearr_30727_30841 = state_30725__$1;
(statearr_30727_30841[(2)] = null);

(statearr_30727_30841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (2))){
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30725__$1,(4),from);
} else {
if((state_val_30726 === (3))){
var inst_30723 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30725__$1,inst_30723);
} else {
if((state_val_30726 === (4))){
var inst_30706 = (state_30725[(7)]);
var inst_30706__$1 = (state_30725[(2)]);
var inst_30707 = (inst_30706__$1 == null);
var state_30725__$1 = (function (){var statearr_30728 = state_30725;
(statearr_30728[(7)] = inst_30706__$1);

return statearr_30728;
})();
if(cljs.core.truth_(inst_30707)){
var statearr_30729_30842 = state_30725__$1;
(statearr_30729_30842[(1)] = (5));

} else {
var statearr_30730_30843 = state_30725__$1;
(statearr_30730_30843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (5))){
var inst_30709 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30725__$1 = state_30725;
var statearr_30731_30844 = state_30725__$1;
(statearr_30731_30844[(2)] = inst_30709);

(statearr_30731_30844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (6))){
var inst_30706 = (state_30725[(7)]);
var inst_30711 = (state_30725[(8)]);
var inst_30711__$1 = cljs.core.async.chan.call(null,(1));
var inst_30712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30713 = [inst_30706,inst_30711__$1];
var inst_30714 = (new cljs.core.PersistentVector(null,2,(5),inst_30712,inst_30713,null));
var state_30725__$1 = (function (){var statearr_30732 = state_30725;
(statearr_30732[(8)] = inst_30711__$1);

return statearr_30732;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30725__$1,(8),jobs,inst_30714);
} else {
if((state_val_30726 === (7))){
var inst_30721 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30733_30845 = state_30725__$1;
(statearr_30733_30845[(2)] = inst_30721);

(statearr_30733_30845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (8))){
var inst_30711 = (state_30725[(8)]);
var inst_30716 = (state_30725[(2)]);
var state_30725__$1 = (function (){var statearr_30734 = state_30725;
(statearr_30734[(9)] = inst_30716);

return statearr_30734;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30725__$1,(9),results,inst_30711);
} else {
if((state_val_30726 === (9))){
var inst_30718 = (state_30725[(2)]);
var state_30725__$1 = (function (){var statearr_30735 = state_30725;
(statearr_30735[(10)] = inst_30718);

return statearr_30735;
})();
var statearr_30736_30846 = state_30725__$1;
(statearr_30736_30846[(2)] = null);

(statearr_30736_30846[(1)] = (2));


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
});})(c__23014__auto___30840,jobs,results,process,async))
;
return ((function (switch__22949__auto__,c__23014__auto___30840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0 = (function (){
var statearr_30740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__);

(statearr_30740[(1)] = (1));

return statearr_30740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1 = (function (state_30725){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_30725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e30741){if((e30741 instanceof Object)){
var ex__22953__auto__ = e30741;
var statearr_30742_30847 = state_30725;
(statearr_30742_30847[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30848 = state_30725;
state_30725 = G__30848;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = function(state_30725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1.call(this,state_30725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___30840,jobs,results,process,async))
})();
var state__23016__auto__ = (function (){var statearr_30743 = f__23015__auto__.call(null);
(statearr_30743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___30840);

return statearr_30743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___30840,jobs,results,process,async))
);


var c__23014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto__,jobs,results,process,async){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto__,jobs,results,process,async){
return (function (state_30781){
var state_val_30782 = (state_30781[(1)]);
if((state_val_30782 === (7))){
var inst_30777 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30783_30849 = state_30781__$1;
(statearr_30783_30849[(2)] = inst_30777);

(statearr_30783_30849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (20))){
var state_30781__$1 = state_30781;
var statearr_30784_30850 = state_30781__$1;
(statearr_30784_30850[(2)] = null);

(statearr_30784_30850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (1))){
var state_30781__$1 = state_30781;
var statearr_30785_30851 = state_30781__$1;
(statearr_30785_30851[(2)] = null);

(statearr_30785_30851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (4))){
var inst_30746 = (state_30781[(7)]);
var inst_30746__$1 = (state_30781[(2)]);
var inst_30747 = (inst_30746__$1 == null);
var state_30781__$1 = (function (){var statearr_30786 = state_30781;
(statearr_30786[(7)] = inst_30746__$1);

return statearr_30786;
})();
if(cljs.core.truth_(inst_30747)){
var statearr_30787_30852 = state_30781__$1;
(statearr_30787_30852[(1)] = (5));

} else {
var statearr_30788_30853 = state_30781__$1;
(statearr_30788_30853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (15))){
var inst_30759 = (state_30781[(8)]);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30781__$1,(18),to,inst_30759);
} else {
if((state_val_30782 === (21))){
var inst_30772 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30789_30854 = state_30781__$1;
(statearr_30789_30854[(2)] = inst_30772);

(statearr_30789_30854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (13))){
var inst_30774 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30790 = state_30781;
(statearr_30790[(9)] = inst_30774);

return statearr_30790;
})();
var statearr_30791_30855 = state_30781__$1;
(statearr_30791_30855[(2)] = null);

(statearr_30791_30855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (6))){
var inst_30746 = (state_30781[(7)]);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(11),inst_30746);
} else {
if((state_val_30782 === (17))){
var inst_30767 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
if(cljs.core.truth_(inst_30767)){
var statearr_30792_30856 = state_30781__$1;
(statearr_30792_30856[(1)] = (19));

} else {
var statearr_30793_30857 = state_30781__$1;
(statearr_30793_30857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (3))){
var inst_30779 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30781__$1,inst_30779);
} else {
if((state_val_30782 === (12))){
var inst_30756 = (state_30781[(10)]);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(14),inst_30756);
} else {
if((state_val_30782 === (2))){
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(4),results);
} else {
if((state_val_30782 === (19))){
var state_30781__$1 = state_30781;
var statearr_30794_30858 = state_30781__$1;
(statearr_30794_30858[(2)] = null);

(statearr_30794_30858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (11))){
var inst_30756 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30795 = state_30781;
(statearr_30795[(10)] = inst_30756);

return statearr_30795;
})();
var statearr_30796_30859 = state_30781__$1;
(statearr_30796_30859[(2)] = null);

(statearr_30796_30859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (9))){
var state_30781__$1 = state_30781;
var statearr_30797_30860 = state_30781__$1;
(statearr_30797_30860[(2)] = null);

(statearr_30797_30860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (5))){
var state_30781__$1 = state_30781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30798_30861 = state_30781__$1;
(statearr_30798_30861[(1)] = (8));

} else {
var statearr_30799_30862 = state_30781__$1;
(statearr_30799_30862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (14))){
var inst_30761 = (state_30781[(11)]);
var inst_30759 = (state_30781[(8)]);
var inst_30759__$1 = (state_30781[(2)]);
var inst_30760 = (inst_30759__$1 == null);
var inst_30761__$1 = cljs.core.not.call(null,inst_30760);
var state_30781__$1 = (function (){var statearr_30800 = state_30781;
(statearr_30800[(11)] = inst_30761__$1);

(statearr_30800[(8)] = inst_30759__$1);

return statearr_30800;
})();
if(inst_30761__$1){
var statearr_30801_30863 = state_30781__$1;
(statearr_30801_30863[(1)] = (15));

} else {
var statearr_30802_30864 = state_30781__$1;
(statearr_30802_30864[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (16))){
var inst_30761 = (state_30781[(11)]);
var state_30781__$1 = state_30781;
var statearr_30803_30865 = state_30781__$1;
(statearr_30803_30865[(2)] = inst_30761);

(statearr_30803_30865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (10))){
var inst_30753 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30804_30866 = state_30781__$1;
(statearr_30804_30866[(2)] = inst_30753);

(statearr_30804_30866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (18))){
var inst_30764 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30805_30867 = state_30781__$1;
(statearr_30805_30867[(2)] = inst_30764);

(statearr_30805_30867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (8))){
var inst_30750 = cljs.core.async.close_BANG_.call(null,to);
var state_30781__$1 = state_30781;
var statearr_30806_30868 = state_30781__$1;
(statearr_30806_30868[(2)] = inst_30750);

(statearr_30806_30868[(1)] = (10));


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
});})(c__23014__auto__,jobs,results,process,async))
;
return ((function (switch__22949__auto__,c__23014__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0 = (function (){
var statearr_30810 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__);

(statearr_30810[(1)] = (1));

return statearr_30810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1 = (function (state_30781){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_30781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e30811){if((e30811 instanceof Object)){
var ex__22953__auto__ = e30811;
var statearr_30812_30869 = state_30781;
(statearr_30812_30869[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30870 = state_30781;
state_30781 = G__30870;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__ = function(state_30781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1.call(this,state_30781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto__,jobs,results,process,async))
})();
var state__23016__auto__ = (function (){var statearr_30813 = f__23015__auto__.call(null);
(statearr_30813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto__);

return statearr_30813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto__,jobs,results,process,async))
);

return c__23014__auto__;
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
var args30871 = [];
var len__20172__auto___30874 = arguments.length;
var i__20173__auto___30875 = (0);
while(true){
if((i__20173__auto___30875 < len__20172__auto___30874)){
args30871.push((arguments[i__20173__auto___30875]));

var G__30876 = (i__20173__auto___30875 + (1));
i__20173__auto___30875 = G__30876;
continue;
} else {
}
break;
}

var G__30873 = args30871.length;
switch (G__30873) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30871.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args30878 = [];
var len__20172__auto___30881 = arguments.length;
var i__20173__auto___30882 = (0);
while(true){
if((i__20173__auto___30882 < len__20172__auto___30881)){
args30878.push((arguments[i__20173__auto___30882]));

var G__30883 = (i__20173__auto___30882 + (1));
i__20173__auto___30882 = G__30883;
continue;
} else {
}
break;
}

var G__30880 = args30878.length;
switch (G__30880) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30878.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args30885 = [];
var len__20172__auto___30938 = arguments.length;
var i__20173__auto___30939 = (0);
while(true){
if((i__20173__auto___30939 < len__20172__auto___30938)){
args30885.push((arguments[i__20173__auto___30939]));

var G__30940 = (i__20173__auto___30939 + (1));
i__20173__auto___30939 = G__30940;
continue;
} else {
}
break;
}

var G__30887 = args30885.length;
switch (G__30887) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30885.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23014__auto___30942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___30942,tc,fc){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___30942,tc,fc){
return (function (state_30913){
var state_val_30914 = (state_30913[(1)]);
if((state_val_30914 === (7))){
var inst_30909 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
var statearr_30915_30943 = state_30913__$1;
(statearr_30915_30943[(2)] = inst_30909);

(statearr_30915_30943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (1))){
var state_30913__$1 = state_30913;
var statearr_30916_30944 = state_30913__$1;
(statearr_30916_30944[(2)] = null);

(statearr_30916_30944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (4))){
var inst_30890 = (state_30913[(7)]);
var inst_30890__$1 = (state_30913[(2)]);
var inst_30891 = (inst_30890__$1 == null);
var state_30913__$1 = (function (){var statearr_30917 = state_30913;
(statearr_30917[(7)] = inst_30890__$1);

return statearr_30917;
})();
if(cljs.core.truth_(inst_30891)){
var statearr_30918_30945 = state_30913__$1;
(statearr_30918_30945[(1)] = (5));

} else {
var statearr_30919_30946 = state_30913__$1;
(statearr_30919_30946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (13))){
var state_30913__$1 = state_30913;
var statearr_30920_30947 = state_30913__$1;
(statearr_30920_30947[(2)] = null);

(statearr_30920_30947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (6))){
var inst_30890 = (state_30913[(7)]);
var inst_30896 = p.call(null,inst_30890);
var state_30913__$1 = state_30913;
if(cljs.core.truth_(inst_30896)){
var statearr_30921_30948 = state_30913__$1;
(statearr_30921_30948[(1)] = (9));

} else {
var statearr_30922_30949 = state_30913__$1;
(statearr_30922_30949[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (3))){
var inst_30911 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30913__$1,inst_30911);
} else {
if((state_val_30914 === (12))){
var state_30913__$1 = state_30913;
var statearr_30923_30950 = state_30913__$1;
(statearr_30923_30950[(2)] = null);

(statearr_30923_30950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (2))){
var state_30913__$1 = state_30913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30913__$1,(4),ch);
} else {
if((state_val_30914 === (11))){
var inst_30890 = (state_30913[(7)]);
var inst_30900 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30913__$1,(8),inst_30900,inst_30890);
} else {
if((state_val_30914 === (9))){
var state_30913__$1 = state_30913;
var statearr_30924_30951 = state_30913__$1;
(statearr_30924_30951[(2)] = tc);

(statearr_30924_30951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (5))){
var inst_30893 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30894 = cljs.core.async.close_BANG_.call(null,fc);
var state_30913__$1 = (function (){var statearr_30925 = state_30913;
(statearr_30925[(8)] = inst_30893);

return statearr_30925;
})();
var statearr_30926_30952 = state_30913__$1;
(statearr_30926_30952[(2)] = inst_30894);

(statearr_30926_30952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (14))){
var inst_30907 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
var statearr_30927_30953 = state_30913__$1;
(statearr_30927_30953[(2)] = inst_30907);

(statearr_30927_30953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (10))){
var state_30913__$1 = state_30913;
var statearr_30928_30954 = state_30913__$1;
(statearr_30928_30954[(2)] = fc);

(statearr_30928_30954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (8))){
var inst_30902 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
if(cljs.core.truth_(inst_30902)){
var statearr_30929_30955 = state_30913__$1;
(statearr_30929_30955[(1)] = (12));

} else {
var statearr_30930_30956 = state_30913__$1;
(statearr_30930_30956[(1)] = (13));

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
});})(c__23014__auto___30942,tc,fc))
;
return ((function (switch__22949__auto__,c__23014__auto___30942,tc,fc){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_30934 = [null,null,null,null,null,null,null,null,null];
(statearr_30934[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_30934[(1)] = (1));

return statearr_30934;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_30913){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_30913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e30935){if((e30935 instanceof Object)){
var ex__22953__auto__ = e30935;
var statearr_30936_30957 = state_30913;
(statearr_30936_30957[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30958 = state_30913;
state_30913 = G__30958;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_30913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_30913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___30942,tc,fc))
})();
var state__23016__auto__ = (function (){var statearr_30937 = f__23015__auto__.call(null);
(statearr_30937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___30942);

return statearr_30937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___30942,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto__){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto__){
return (function (state_31005){
var state_val_31006 = (state_31005[(1)]);
if((state_val_31006 === (1))){
var inst_30991 = init;
var state_31005__$1 = (function (){var statearr_31007 = state_31005;
(statearr_31007[(7)] = inst_30991);

return statearr_31007;
})();
var statearr_31008_31023 = state_31005__$1;
(statearr_31008_31023[(2)] = null);

(statearr_31008_31023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (2))){
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31005__$1,(4),ch);
} else {
if((state_val_31006 === (3))){
var inst_31003 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31005__$1,inst_31003);
} else {
if((state_val_31006 === (4))){
var inst_30994 = (state_31005[(8)]);
var inst_30994__$1 = (state_31005[(2)]);
var inst_30995 = (inst_30994__$1 == null);
var state_31005__$1 = (function (){var statearr_31009 = state_31005;
(statearr_31009[(8)] = inst_30994__$1);

return statearr_31009;
})();
if(cljs.core.truth_(inst_30995)){
var statearr_31010_31024 = state_31005__$1;
(statearr_31010_31024[(1)] = (5));

} else {
var statearr_31011_31025 = state_31005__$1;
(statearr_31011_31025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (5))){
var inst_30991 = (state_31005[(7)]);
var state_31005__$1 = state_31005;
var statearr_31012_31026 = state_31005__$1;
(statearr_31012_31026[(2)] = inst_30991);

(statearr_31012_31026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (6))){
var inst_30994 = (state_31005[(8)]);
var inst_30991 = (state_31005[(7)]);
var inst_30998 = f.call(null,inst_30991,inst_30994);
var inst_30991__$1 = inst_30998;
var state_31005__$1 = (function (){var statearr_31013 = state_31005;
(statearr_31013[(7)] = inst_30991__$1);

return statearr_31013;
})();
var statearr_31014_31027 = state_31005__$1;
(statearr_31014_31027[(2)] = null);

(statearr_31014_31027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31006 === (7))){
var inst_31001 = (state_31005[(2)]);
var state_31005__$1 = state_31005;
var statearr_31015_31028 = state_31005__$1;
(statearr_31015_31028[(2)] = inst_31001);

(statearr_31015_31028[(1)] = (3));


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
});})(c__23014__auto__))
;
return ((function (switch__22949__auto__,c__23014__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22950__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22950__auto____0 = (function (){
var statearr_31019 = [null,null,null,null,null,null,null,null,null];
(statearr_31019[(0)] = cljs$core$async$reduce_$_state_machine__22950__auto__);

(statearr_31019[(1)] = (1));

return statearr_31019;
});
var cljs$core$async$reduce_$_state_machine__22950__auto____1 = (function (state_31005){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_31005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e31020){if((e31020 instanceof Object)){
var ex__22953__auto__ = e31020;
var statearr_31021_31029 = state_31005;
(statearr_31021_31029[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31030 = state_31005;
state_31005 = G__31030;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22950__auto__ = function(state_31005){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22950__auto____1.call(this,state_31005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22950__auto____0;
cljs$core$async$reduce_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22950__auto____1;
return cljs$core$async$reduce_$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto__))
})();
var state__23016__auto__ = (function (){var statearr_31022 = f__23015__auto__.call(null);
(statearr_31022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto__);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto__))
);

return c__23014__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31031 = [];
var len__20172__auto___31083 = arguments.length;
var i__20173__auto___31084 = (0);
while(true){
if((i__20173__auto___31084 < len__20172__auto___31083)){
args31031.push((arguments[i__20173__auto___31084]));

var G__31085 = (i__20173__auto___31084 + (1));
i__20173__auto___31084 = G__31085;
continue;
} else {
}
break;
}

var G__31033 = args31031.length;
switch (G__31033) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31031.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto__){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto__){
return (function (state_31058){
var state_val_31059 = (state_31058[(1)]);
if((state_val_31059 === (7))){
var inst_31040 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31060_31087 = state_31058__$1;
(statearr_31060_31087[(2)] = inst_31040);

(statearr_31060_31087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (1))){
var inst_31034 = cljs.core.seq.call(null,coll);
var inst_31035 = inst_31034;
var state_31058__$1 = (function (){var statearr_31061 = state_31058;
(statearr_31061[(7)] = inst_31035);

return statearr_31061;
})();
var statearr_31062_31088 = state_31058__$1;
(statearr_31062_31088[(2)] = null);

(statearr_31062_31088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (4))){
var inst_31035 = (state_31058[(7)]);
var inst_31038 = cljs.core.first.call(null,inst_31035);
var state_31058__$1 = state_31058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31058__$1,(7),ch,inst_31038);
} else {
if((state_val_31059 === (13))){
var inst_31052 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31063_31089 = state_31058__$1;
(statearr_31063_31089[(2)] = inst_31052);

(statearr_31063_31089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (6))){
var inst_31043 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
if(cljs.core.truth_(inst_31043)){
var statearr_31064_31090 = state_31058__$1;
(statearr_31064_31090[(1)] = (8));

} else {
var statearr_31065_31091 = state_31058__$1;
(statearr_31065_31091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (3))){
var inst_31056 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31058__$1,inst_31056);
} else {
if((state_val_31059 === (12))){
var state_31058__$1 = state_31058;
var statearr_31066_31092 = state_31058__$1;
(statearr_31066_31092[(2)] = null);

(statearr_31066_31092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (2))){
var inst_31035 = (state_31058[(7)]);
var state_31058__$1 = state_31058;
if(cljs.core.truth_(inst_31035)){
var statearr_31067_31093 = state_31058__$1;
(statearr_31067_31093[(1)] = (4));

} else {
var statearr_31068_31094 = state_31058__$1;
(statearr_31068_31094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (11))){
var inst_31049 = cljs.core.async.close_BANG_.call(null,ch);
var state_31058__$1 = state_31058;
var statearr_31069_31095 = state_31058__$1;
(statearr_31069_31095[(2)] = inst_31049);

(statearr_31069_31095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (9))){
var state_31058__$1 = state_31058;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31070_31096 = state_31058__$1;
(statearr_31070_31096[(1)] = (11));

} else {
var statearr_31071_31097 = state_31058__$1;
(statearr_31071_31097[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (5))){
var inst_31035 = (state_31058[(7)]);
var state_31058__$1 = state_31058;
var statearr_31072_31098 = state_31058__$1;
(statearr_31072_31098[(2)] = inst_31035);

(statearr_31072_31098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (10))){
var inst_31054 = (state_31058[(2)]);
var state_31058__$1 = state_31058;
var statearr_31073_31099 = state_31058__$1;
(statearr_31073_31099[(2)] = inst_31054);

(statearr_31073_31099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31059 === (8))){
var inst_31035 = (state_31058[(7)]);
var inst_31045 = cljs.core.next.call(null,inst_31035);
var inst_31035__$1 = inst_31045;
var state_31058__$1 = (function (){var statearr_31074 = state_31058;
(statearr_31074[(7)] = inst_31035__$1);

return statearr_31074;
})();
var statearr_31075_31100 = state_31058__$1;
(statearr_31075_31100[(2)] = null);

(statearr_31075_31100[(1)] = (2));


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
});})(c__23014__auto__))
;
return ((function (switch__22949__auto__,c__23014__auto__){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_31079 = [null,null,null,null,null,null,null,null];
(statearr_31079[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_31079[(1)] = (1));

return statearr_31079;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_31058){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_31058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e31080){if((e31080 instanceof Object)){
var ex__22953__auto__ = e31080;
var statearr_31081_31101 = state_31058;
(statearr_31081_31101[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31102 = state_31058;
state_31058 = G__31102;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_31058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_31058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto__))
})();
var state__23016__auto__ = (function (){var statearr_31082 = f__23015__auto__.call(null);
(statearr_31082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto__);

return statearr_31082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto__))
);

return c__23014__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19769__auto__ = (((_ == null))?null:_);
var m__19770__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,_);
} else {
var m__19770__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19769__auto__ = (((m == null))?null:m);
var m__19770__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19770__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19769__auto__ = (((m == null))?null:m);
var m__19770__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,m,ch);
} else {
var m__19770__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19769__auto__ = (((m == null))?null:m);
var m__19770__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,m);
} else {
var m__19770__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31324 = (function (mult,ch,cs,meta31325){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31325 = meta31325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31326,meta31325__$1){
var self__ = this;
var _31326__$1 = this;
return (new cljs.core.async.t_cljs$core$async31324(self__.mult,self__.ch,self__.cs,meta31325__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31326){
var self__ = this;
var _31326__$1 = this;
return self__.meta31325;
});})(cs))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31324.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31325","meta31325",-1953329123,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31324";

cljs.core.async.t_cljs$core$async31324.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async31324");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31324 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31324(mult__$1,ch__$1,cs__$1,meta31325){
return (new cljs.core.async.t_cljs$core$async31324(mult__$1,ch__$1,cs__$1,meta31325));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31324(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23014__auto___31545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___31545,cs,m,dchan,dctr,done){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___31545,cs,m,dchan,dctr,done){
return (function (state_31457){
var state_val_31458 = (state_31457[(1)]);
if((state_val_31458 === (7))){
var inst_31453 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31459_31546 = state_31457__$1;
(statearr_31459_31546[(2)] = inst_31453);

(statearr_31459_31546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (20))){
var inst_31358 = (state_31457[(7)]);
var inst_31368 = cljs.core.first.call(null,inst_31358);
var inst_31369 = cljs.core.nth.call(null,inst_31368,(0),null);
var inst_31370 = cljs.core.nth.call(null,inst_31368,(1),null);
var state_31457__$1 = (function (){var statearr_31460 = state_31457;
(statearr_31460[(8)] = inst_31369);

return statearr_31460;
})();
if(cljs.core.truth_(inst_31370)){
var statearr_31461_31547 = state_31457__$1;
(statearr_31461_31547[(1)] = (22));

} else {
var statearr_31462_31548 = state_31457__$1;
(statearr_31462_31548[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (27))){
var inst_31398 = (state_31457[(9)]);
var inst_31405 = (state_31457[(10)]);
var inst_31329 = (state_31457[(11)]);
var inst_31400 = (state_31457[(12)]);
var inst_31405__$1 = cljs.core._nth.call(null,inst_31398,inst_31400);
var inst_31406 = cljs.core.async.put_BANG_.call(null,inst_31405__$1,inst_31329,done);
var state_31457__$1 = (function (){var statearr_31463 = state_31457;
(statearr_31463[(10)] = inst_31405__$1);

return statearr_31463;
})();
if(cljs.core.truth_(inst_31406)){
var statearr_31464_31549 = state_31457__$1;
(statearr_31464_31549[(1)] = (30));

} else {
var statearr_31465_31550 = state_31457__$1;
(statearr_31465_31550[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (1))){
var state_31457__$1 = state_31457;
var statearr_31466_31551 = state_31457__$1;
(statearr_31466_31551[(2)] = null);

(statearr_31466_31551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (24))){
var inst_31358 = (state_31457[(7)]);
var inst_31375 = (state_31457[(2)]);
var inst_31376 = cljs.core.next.call(null,inst_31358);
var inst_31338 = inst_31376;
var inst_31339 = null;
var inst_31340 = (0);
var inst_31341 = (0);
var state_31457__$1 = (function (){var statearr_31467 = state_31457;
(statearr_31467[(13)] = inst_31338);

(statearr_31467[(14)] = inst_31339);

(statearr_31467[(15)] = inst_31375);

(statearr_31467[(16)] = inst_31341);

(statearr_31467[(17)] = inst_31340);

return statearr_31467;
})();
var statearr_31468_31552 = state_31457__$1;
(statearr_31468_31552[(2)] = null);

(statearr_31468_31552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (39))){
var state_31457__$1 = state_31457;
var statearr_31472_31553 = state_31457__$1;
(statearr_31472_31553[(2)] = null);

(statearr_31472_31553[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (4))){
var inst_31329 = (state_31457[(11)]);
var inst_31329__$1 = (state_31457[(2)]);
var inst_31330 = (inst_31329__$1 == null);
var state_31457__$1 = (function (){var statearr_31473 = state_31457;
(statearr_31473[(11)] = inst_31329__$1);

return statearr_31473;
})();
if(cljs.core.truth_(inst_31330)){
var statearr_31474_31554 = state_31457__$1;
(statearr_31474_31554[(1)] = (5));

} else {
var statearr_31475_31555 = state_31457__$1;
(statearr_31475_31555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (15))){
var inst_31338 = (state_31457[(13)]);
var inst_31339 = (state_31457[(14)]);
var inst_31341 = (state_31457[(16)]);
var inst_31340 = (state_31457[(17)]);
var inst_31354 = (state_31457[(2)]);
var inst_31355 = (inst_31341 + (1));
var tmp31469 = inst_31338;
var tmp31470 = inst_31339;
var tmp31471 = inst_31340;
var inst_31338__$1 = tmp31469;
var inst_31339__$1 = tmp31470;
var inst_31340__$1 = tmp31471;
var inst_31341__$1 = inst_31355;
var state_31457__$1 = (function (){var statearr_31476 = state_31457;
(statearr_31476[(13)] = inst_31338__$1);

(statearr_31476[(14)] = inst_31339__$1);

(statearr_31476[(18)] = inst_31354);

(statearr_31476[(16)] = inst_31341__$1);

(statearr_31476[(17)] = inst_31340__$1);

return statearr_31476;
})();
var statearr_31477_31556 = state_31457__$1;
(statearr_31477_31556[(2)] = null);

(statearr_31477_31556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (21))){
var inst_31379 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31481_31557 = state_31457__$1;
(statearr_31481_31557[(2)] = inst_31379);

(statearr_31481_31557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (31))){
var inst_31405 = (state_31457[(10)]);
var inst_31409 = done.call(null,null);
var inst_31410 = cljs.core.async.untap_STAR_.call(null,m,inst_31405);
var state_31457__$1 = (function (){var statearr_31482 = state_31457;
(statearr_31482[(19)] = inst_31409);

return statearr_31482;
})();
var statearr_31483_31558 = state_31457__$1;
(statearr_31483_31558[(2)] = inst_31410);

(statearr_31483_31558[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (32))){
var inst_31399 = (state_31457[(20)]);
var inst_31397 = (state_31457[(21)]);
var inst_31398 = (state_31457[(9)]);
var inst_31400 = (state_31457[(12)]);
var inst_31412 = (state_31457[(2)]);
var inst_31413 = (inst_31400 + (1));
var tmp31478 = inst_31399;
var tmp31479 = inst_31397;
var tmp31480 = inst_31398;
var inst_31397__$1 = tmp31479;
var inst_31398__$1 = tmp31480;
var inst_31399__$1 = tmp31478;
var inst_31400__$1 = inst_31413;
var state_31457__$1 = (function (){var statearr_31484 = state_31457;
(statearr_31484[(20)] = inst_31399__$1);

(statearr_31484[(21)] = inst_31397__$1);

(statearr_31484[(9)] = inst_31398__$1);

(statearr_31484[(12)] = inst_31400__$1);

(statearr_31484[(22)] = inst_31412);

return statearr_31484;
})();
var statearr_31485_31559 = state_31457__$1;
(statearr_31485_31559[(2)] = null);

(statearr_31485_31559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (40))){
var inst_31425 = (state_31457[(23)]);
var inst_31429 = done.call(null,null);
var inst_31430 = cljs.core.async.untap_STAR_.call(null,m,inst_31425);
var state_31457__$1 = (function (){var statearr_31486 = state_31457;
(statearr_31486[(24)] = inst_31429);

return statearr_31486;
})();
var statearr_31487_31560 = state_31457__$1;
(statearr_31487_31560[(2)] = inst_31430);

(statearr_31487_31560[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (33))){
var inst_31416 = (state_31457[(25)]);
var inst_31418 = cljs.core.chunked_seq_QMARK_.call(null,inst_31416);
var state_31457__$1 = state_31457;
if(inst_31418){
var statearr_31488_31561 = state_31457__$1;
(statearr_31488_31561[(1)] = (36));

} else {
var statearr_31489_31562 = state_31457__$1;
(statearr_31489_31562[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (13))){
var inst_31348 = (state_31457[(26)]);
var inst_31351 = cljs.core.async.close_BANG_.call(null,inst_31348);
var state_31457__$1 = state_31457;
var statearr_31490_31563 = state_31457__$1;
(statearr_31490_31563[(2)] = inst_31351);

(statearr_31490_31563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (22))){
var inst_31369 = (state_31457[(8)]);
var inst_31372 = cljs.core.async.close_BANG_.call(null,inst_31369);
var state_31457__$1 = state_31457;
var statearr_31491_31564 = state_31457__$1;
(statearr_31491_31564[(2)] = inst_31372);

(statearr_31491_31564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (36))){
var inst_31416 = (state_31457[(25)]);
var inst_31420 = cljs.core.chunk_first.call(null,inst_31416);
var inst_31421 = cljs.core.chunk_rest.call(null,inst_31416);
var inst_31422 = cljs.core.count.call(null,inst_31420);
var inst_31397 = inst_31421;
var inst_31398 = inst_31420;
var inst_31399 = inst_31422;
var inst_31400 = (0);
var state_31457__$1 = (function (){var statearr_31492 = state_31457;
(statearr_31492[(20)] = inst_31399);

(statearr_31492[(21)] = inst_31397);

(statearr_31492[(9)] = inst_31398);

(statearr_31492[(12)] = inst_31400);

return statearr_31492;
})();
var statearr_31493_31565 = state_31457__$1;
(statearr_31493_31565[(2)] = null);

(statearr_31493_31565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (41))){
var inst_31416 = (state_31457[(25)]);
var inst_31432 = (state_31457[(2)]);
var inst_31433 = cljs.core.next.call(null,inst_31416);
var inst_31397 = inst_31433;
var inst_31398 = null;
var inst_31399 = (0);
var inst_31400 = (0);
var state_31457__$1 = (function (){var statearr_31494 = state_31457;
(statearr_31494[(20)] = inst_31399);

(statearr_31494[(21)] = inst_31397);

(statearr_31494[(9)] = inst_31398);

(statearr_31494[(27)] = inst_31432);

(statearr_31494[(12)] = inst_31400);

return statearr_31494;
})();
var statearr_31495_31566 = state_31457__$1;
(statearr_31495_31566[(2)] = null);

(statearr_31495_31566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (43))){
var state_31457__$1 = state_31457;
var statearr_31496_31567 = state_31457__$1;
(statearr_31496_31567[(2)] = null);

(statearr_31496_31567[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (29))){
var inst_31441 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31497_31568 = state_31457__$1;
(statearr_31497_31568[(2)] = inst_31441);

(statearr_31497_31568[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (44))){
var inst_31450 = (state_31457[(2)]);
var state_31457__$1 = (function (){var statearr_31498 = state_31457;
(statearr_31498[(28)] = inst_31450);

return statearr_31498;
})();
var statearr_31499_31569 = state_31457__$1;
(statearr_31499_31569[(2)] = null);

(statearr_31499_31569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (6))){
var inst_31389 = (state_31457[(29)]);
var inst_31388 = cljs.core.deref.call(null,cs);
var inst_31389__$1 = cljs.core.keys.call(null,inst_31388);
var inst_31390 = cljs.core.count.call(null,inst_31389__$1);
var inst_31391 = cljs.core.reset_BANG_.call(null,dctr,inst_31390);
var inst_31396 = cljs.core.seq.call(null,inst_31389__$1);
var inst_31397 = inst_31396;
var inst_31398 = null;
var inst_31399 = (0);
var inst_31400 = (0);
var state_31457__$1 = (function (){var statearr_31500 = state_31457;
(statearr_31500[(20)] = inst_31399);

(statearr_31500[(30)] = inst_31391);

(statearr_31500[(21)] = inst_31397);

(statearr_31500[(9)] = inst_31398);

(statearr_31500[(29)] = inst_31389__$1);

(statearr_31500[(12)] = inst_31400);

return statearr_31500;
})();
var statearr_31501_31570 = state_31457__$1;
(statearr_31501_31570[(2)] = null);

(statearr_31501_31570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (28))){
var inst_31397 = (state_31457[(21)]);
var inst_31416 = (state_31457[(25)]);
var inst_31416__$1 = cljs.core.seq.call(null,inst_31397);
var state_31457__$1 = (function (){var statearr_31502 = state_31457;
(statearr_31502[(25)] = inst_31416__$1);

return statearr_31502;
})();
if(inst_31416__$1){
var statearr_31503_31571 = state_31457__$1;
(statearr_31503_31571[(1)] = (33));

} else {
var statearr_31504_31572 = state_31457__$1;
(statearr_31504_31572[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (25))){
var inst_31399 = (state_31457[(20)]);
var inst_31400 = (state_31457[(12)]);
var inst_31402 = (inst_31400 < inst_31399);
var inst_31403 = inst_31402;
var state_31457__$1 = state_31457;
if(cljs.core.truth_(inst_31403)){
var statearr_31505_31573 = state_31457__$1;
(statearr_31505_31573[(1)] = (27));

} else {
var statearr_31506_31574 = state_31457__$1;
(statearr_31506_31574[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (34))){
var state_31457__$1 = state_31457;
var statearr_31507_31575 = state_31457__$1;
(statearr_31507_31575[(2)] = null);

(statearr_31507_31575[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (17))){
var state_31457__$1 = state_31457;
var statearr_31508_31576 = state_31457__$1;
(statearr_31508_31576[(2)] = null);

(statearr_31508_31576[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (3))){
var inst_31455 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31457__$1,inst_31455);
} else {
if((state_val_31458 === (12))){
var inst_31384 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31509_31577 = state_31457__$1;
(statearr_31509_31577[(2)] = inst_31384);

(statearr_31509_31577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (2))){
var state_31457__$1 = state_31457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31457__$1,(4),ch);
} else {
if((state_val_31458 === (23))){
var state_31457__$1 = state_31457;
var statearr_31510_31578 = state_31457__$1;
(statearr_31510_31578[(2)] = null);

(statearr_31510_31578[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (35))){
var inst_31439 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31511_31579 = state_31457__$1;
(statearr_31511_31579[(2)] = inst_31439);

(statearr_31511_31579[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (19))){
var inst_31358 = (state_31457[(7)]);
var inst_31362 = cljs.core.chunk_first.call(null,inst_31358);
var inst_31363 = cljs.core.chunk_rest.call(null,inst_31358);
var inst_31364 = cljs.core.count.call(null,inst_31362);
var inst_31338 = inst_31363;
var inst_31339 = inst_31362;
var inst_31340 = inst_31364;
var inst_31341 = (0);
var state_31457__$1 = (function (){var statearr_31512 = state_31457;
(statearr_31512[(13)] = inst_31338);

(statearr_31512[(14)] = inst_31339);

(statearr_31512[(16)] = inst_31341);

(statearr_31512[(17)] = inst_31340);

return statearr_31512;
})();
var statearr_31513_31580 = state_31457__$1;
(statearr_31513_31580[(2)] = null);

(statearr_31513_31580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (11))){
var inst_31338 = (state_31457[(13)]);
var inst_31358 = (state_31457[(7)]);
var inst_31358__$1 = cljs.core.seq.call(null,inst_31338);
var state_31457__$1 = (function (){var statearr_31514 = state_31457;
(statearr_31514[(7)] = inst_31358__$1);

return statearr_31514;
})();
if(inst_31358__$1){
var statearr_31515_31581 = state_31457__$1;
(statearr_31515_31581[(1)] = (16));

} else {
var statearr_31516_31582 = state_31457__$1;
(statearr_31516_31582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (9))){
var inst_31386 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31517_31583 = state_31457__$1;
(statearr_31517_31583[(2)] = inst_31386);

(statearr_31517_31583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (5))){
var inst_31336 = cljs.core.deref.call(null,cs);
var inst_31337 = cljs.core.seq.call(null,inst_31336);
var inst_31338 = inst_31337;
var inst_31339 = null;
var inst_31340 = (0);
var inst_31341 = (0);
var state_31457__$1 = (function (){var statearr_31518 = state_31457;
(statearr_31518[(13)] = inst_31338);

(statearr_31518[(14)] = inst_31339);

(statearr_31518[(16)] = inst_31341);

(statearr_31518[(17)] = inst_31340);

return statearr_31518;
})();
var statearr_31519_31584 = state_31457__$1;
(statearr_31519_31584[(2)] = null);

(statearr_31519_31584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (14))){
var state_31457__$1 = state_31457;
var statearr_31520_31585 = state_31457__$1;
(statearr_31520_31585[(2)] = null);

(statearr_31520_31585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (45))){
var inst_31447 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31521_31586 = state_31457__$1;
(statearr_31521_31586[(2)] = inst_31447);

(statearr_31521_31586[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (26))){
var inst_31389 = (state_31457[(29)]);
var inst_31443 = (state_31457[(2)]);
var inst_31444 = cljs.core.seq.call(null,inst_31389);
var state_31457__$1 = (function (){var statearr_31522 = state_31457;
(statearr_31522[(31)] = inst_31443);

return statearr_31522;
})();
if(inst_31444){
var statearr_31523_31587 = state_31457__$1;
(statearr_31523_31587[(1)] = (42));

} else {
var statearr_31524_31588 = state_31457__$1;
(statearr_31524_31588[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (16))){
var inst_31358 = (state_31457[(7)]);
var inst_31360 = cljs.core.chunked_seq_QMARK_.call(null,inst_31358);
var state_31457__$1 = state_31457;
if(inst_31360){
var statearr_31525_31589 = state_31457__$1;
(statearr_31525_31589[(1)] = (19));

} else {
var statearr_31526_31590 = state_31457__$1;
(statearr_31526_31590[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (38))){
var inst_31436 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31527_31591 = state_31457__$1;
(statearr_31527_31591[(2)] = inst_31436);

(statearr_31527_31591[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (30))){
var state_31457__$1 = state_31457;
var statearr_31528_31592 = state_31457__$1;
(statearr_31528_31592[(2)] = null);

(statearr_31528_31592[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (10))){
var inst_31339 = (state_31457[(14)]);
var inst_31341 = (state_31457[(16)]);
var inst_31347 = cljs.core._nth.call(null,inst_31339,inst_31341);
var inst_31348 = cljs.core.nth.call(null,inst_31347,(0),null);
var inst_31349 = cljs.core.nth.call(null,inst_31347,(1),null);
var state_31457__$1 = (function (){var statearr_31529 = state_31457;
(statearr_31529[(26)] = inst_31348);

return statearr_31529;
})();
if(cljs.core.truth_(inst_31349)){
var statearr_31530_31593 = state_31457__$1;
(statearr_31530_31593[(1)] = (13));

} else {
var statearr_31531_31594 = state_31457__$1;
(statearr_31531_31594[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (18))){
var inst_31382 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31532_31595 = state_31457__$1;
(statearr_31532_31595[(2)] = inst_31382);

(statearr_31532_31595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (42))){
var state_31457__$1 = state_31457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31457__$1,(45),dchan);
} else {
if((state_val_31458 === (37))){
var inst_31425 = (state_31457[(23)]);
var inst_31416 = (state_31457[(25)]);
var inst_31329 = (state_31457[(11)]);
var inst_31425__$1 = cljs.core.first.call(null,inst_31416);
var inst_31426 = cljs.core.async.put_BANG_.call(null,inst_31425__$1,inst_31329,done);
var state_31457__$1 = (function (){var statearr_31533 = state_31457;
(statearr_31533[(23)] = inst_31425__$1);

return statearr_31533;
})();
if(cljs.core.truth_(inst_31426)){
var statearr_31534_31596 = state_31457__$1;
(statearr_31534_31596[(1)] = (39));

} else {
var statearr_31535_31597 = state_31457__$1;
(statearr_31535_31597[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (8))){
var inst_31341 = (state_31457[(16)]);
var inst_31340 = (state_31457[(17)]);
var inst_31343 = (inst_31341 < inst_31340);
var inst_31344 = inst_31343;
var state_31457__$1 = state_31457;
if(cljs.core.truth_(inst_31344)){
var statearr_31536_31598 = state_31457__$1;
(statearr_31536_31598[(1)] = (10));

} else {
var statearr_31537_31599 = state_31457__$1;
(statearr_31537_31599[(1)] = (11));

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
});})(c__23014__auto___31545,cs,m,dchan,dctr,done))
;
return ((function (switch__22949__auto__,c__23014__auto___31545,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22950__auto__ = null;
var cljs$core$async$mult_$_state_machine__22950__auto____0 = (function (){
var statearr_31541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31541[(0)] = cljs$core$async$mult_$_state_machine__22950__auto__);

(statearr_31541[(1)] = (1));

return statearr_31541;
});
var cljs$core$async$mult_$_state_machine__22950__auto____1 = (function (state_31457){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_31457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e31542){if((e31542 instanceof Object)){
var ex__22953__auto__ = e31542;
var statearr_31543_31600 = state_31457;
(statearr_31543_31600[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31601 = state_31457;
state_31457 = G__31601;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22950__auto__ = function(state_31457){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22950__auto____1.call(this,state_31457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22950__auto____0;
cljs$core$async$mult_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22950__auto____1;
return cljs$core$async$mult_$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___31545,cs,m,dchan,dctr,done))
})();
var state__23016__auto__ = (function (){var statearr_31544 = f__23015__auto__.call(null);
(statearr_31544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___31545);

return statearr_31544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___31545,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31602 = [];
var len__20172__auto___31605 = arguments.length;
var i__20173__auto___31606 = (0);
while(true){
if((i__20173__auto___31606 < len__20172__auto___31605)){
args31602.push((arguments[i__20173__auto___31606]));

var G__31607 = (i__20173__auto___31606 + (1));
i__20173__auto___31606 = G__31607;
continue;
} else {
}
break;
}

var G__31604 = args31602.length;
switch (G__31604) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31602.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19769__auto__ = (((m == null))?null:m);
var m__19770__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,m,ch);
} else {
var m__19770__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19769__auto__ = (((m == null))?null:m);
var m__19770__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,m,ch);
} else {
var m__19770__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19769__auto__ = (((m == null))?null:m);
var m__19770__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,m);
} else {
var m__19770__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19769__auto__ = (((m == null))?null:m);
var m__19770__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,m,state_map);
} else {
var m__19770__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19769__auto__ = (((m == null))?null:m);
var m__19770__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,m,mode);
} else {
var m__19770__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20179__auto__ = [];
var len__20172__auto___31619 = arguments.length;
var i__20173__auto___31620 = (0);
while(true){
if((i__20173__auto___31620 < len__20172__auto___31619)){
args__20179__auto__.push((arguments[i__20173__auto___31620]));

var G__31621 = (i__20173__auto___31620 + (1));
i__20173__auto___31620 = G__31621;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((3) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20180__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31613){
var map__31614 = p__31613;
var map__31614__$1 = ((((!((map__31614 == null)))?((((map__31614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31614):map__31614);
var opts = map__31614__$1;
var statearr_31616_31622 = state;
(statearr_31616_31622[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31614,map__31614__$1,opts){
return (function (val){
var statearr_31617_31623 = state;
(statearr_31617_31623[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31614,map__31614__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31618_31624 = state;
(statearr_31618_31624[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31609){
var G__31610 = cljs.core.first.call(null,seq31609);
var seq31609__$1 = cljs.core.next.call(null,seq31609);
var G__31611 = cljs.core.first.call(null,seq31609__$1);
var seq31609__$2 = cljs.core.next.call(null,seq31609__$1);
var G__31612 = cljs.core.first.call(null,seq31609__$2);
var seq31609__$3 = cljs.core.next.call(null,seq31609__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31610,G__31611,G__31612,seq31609__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31788 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31789){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31789 = meta31789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31790,meta31789__$1){
var self__ = this;
var _31790__$1 = this;
return (new cljs.core.async.t_cljs$core$async31788(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31789__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31790){
var self__ = this;
var _31790__$1 = this;
return self__.meta31789;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31788.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31788.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31789","meta31789",758347115,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31788";

cljs.core.async.t_cljs$core$async31788.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async31788");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31788 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31788(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31789){
return (new cljs.core.async.t_cljs$core$async31788(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31789));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31788(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23014__auto___31951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___31951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___31951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31888){
var state_val_31889 = (state_31888[(1)]);
if((state_val_31889 === (7))){
var inst_31806 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31890_31952 = state_31888__$1;
(statearr_31890_31952[(2)] = inst_31806);

(statearr_31890_31952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (20))){
var inst_31818 = (state_31888[(7)]);
var state_31888__$1 = state_31888;
var statearr_31891_31953 = state_31888__$1;
(statearr_31891_31953[(2)] = inst_31818);

(statearr_31891_31953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (27))){
var state_31888__$1 = state_31888;
var statearr_31892_31954 = state_31888__$1;
(statearr_31892_31954[(2)] = null);

(statearr_31892_31954[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (1))){
var inst_31794 = (state_31888[(8)]);
var inst_31794__$1 = calc_state.call(null);
var inst_31796 = (inst_31794__$1 == null);
var inst_31797 = cljs.core.not.call(null,inst_31796);
var state_31888__$1 = (function (){var statearr_31893 = state_31888;
(statearr_31893[(8)] = inst_31794__$1);

return statearr_31893;
})();
if(inst_31797){
var statearr_31894_31955 = state_31888__$1;
(statearr_31894_31955[(1)] = (2));

} else {
var statearr_31895_31956 = state_31888__$1;
(statearr_31895_31956[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (24))){
var inst_31862 = (state_31888[(9)]);
var inst_31841 = (state_31888[(10)]);
var inst_31848 = (state_31888[(11)]);
var inst_31862__$1 = inst_31841.call(null,inst_31848);
var state_31888__$1 = (function (){var statearr_31896 = state_31888;
(statearr_31896[(9)] = inst_31862__$1);

return statearr_31896;
})();
if(cljs.core.truth_(inst_31862__$1)){
var statearr_31897_31957 = state_31888__$1;
(statearr_31897_31957[(1)] = (29));

} else {
var statearr_31898_31958 = state_31888__$1;
(statearr_31898_31958[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (4))){
var inst_31809 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31809)){
var statearr_31899_31959 = state_31888__$1;
(statearr_31899_31959[(1)] = (8));

} else {
var statearr_31900_31960 = state_31888__$1;
(statearr_31900_31960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (15))){
var inst_31835 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31835)){
var statearr_31901_31961 = state_31888__$1;
(statearr_31901_31961[(1)] = (19));

} else {
var statearr_31902_31962 = state_31888__$1;
(statearr_31902_31962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (21))){
var inst_31840 = (state_31888[(12)]);
var inst_31840__$1 = (state_31888[(2)]);
var inst_31841 = cljs.core.get.call(null,inst_31840__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31842 = cljs.core.get.call(null,inst_31840__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31843 = cljs.core.get.call(null,inst_31840__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31888__$1 = (function (){var statearr_31903 = state_31888;
(statearr_31903[(13)] = inst_31842);

(statearr_31903[(12)] = inst_31840__$1);

(statearr_31903[(10)] = inst_31841);

return statearr_31903;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31888__$1,(22),inst_31843);
} else {
if((state_val_31889 === (31))){
var inst_31870 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31870)){
var statearr_31904_31963 = state_31888__$1;
(statearr_31904_31963[(1)] = (32));

} else {
var statearr_31905_31964 = state_31888__$1;
(statearr_31905_31964[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (32))){
var inst_31847 = (state_31888[(14)]);
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31888__$1,(35),out,inst_31847);
} else {
if((state_val_31889 === (33))){
var inst_31840 = (state_31888[(12)]);
var inst_31818 = inst_31840;
var state_31888__$1 = (function (){var statearr_31906 = state_31888;
(statearr_31906[(7)] = inst_31818);

return statearr_31906;
})();
var statearr_31907_31965 = state_31888__$1;
(statearr_31907_31965[(2)] = null);

(statearr_31907_31965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (13))){
var inst_31818 = (state_31888[(7)]);
var inst_31825 = inst_31818.cljs$lang$protocol_mask$partition0$;
var inst_31826 = (inst_31825 & (64));
var inst_31827 = inst_31818.cljs$core$ISeq$;
var inst_31828 = (inst_31826) || (inst_31827);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31828)){
var statearr_31908_31966 = state_31888__$1;
(statearr_31908_31966[(1)] = (16));

} else {
var statearr_31909_31967 = state_31888__$1;
(statearr_31909_31967[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (22))){
var inst_31847 = (state_31888[(14)]);
var inst_31848 = (state_31888[(11)]);
var inst_31846 = (state_31888[(2)]);
var inst_31847__$1 = cljs.core.nth.call(null,inst_31846,(0),null);
var inst_31848__$1 = cljs.core.nth.call(null,inst_31846,(1),null);
var inst_31849 = (inst_31847__$1 == null);
var inst_31850 = cljs.core._EQ_.call(null,inst_31848__$1,change);
var inst_31851 = (inst_31849) || (inst_31850);
var state_31888__$1 = (function (){var statearr_31910 = state_31888;
(statearr_31910[(14)] = inst_31847__$1);

(statearr_31910[(11)] = inst_31848__$1);

return statearr_31910;
})();
if(cljs.core.truth_(inst_31851)){
var statearr_31911_31968 = state_31888__$1;
(statearr_31911_31968[(1)] = (23));

} else {
var statearr_31912_31969 = state_31888__$1;
(statearr_31912_31969[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (36))){
var inst_31840 = (state_31888[(12)]);
var inst_31818 = inst_31840;
var state_31888__$1 = (function (){var statearr_31913 = state_31888;
(statearr_31913[(7)] = inst_31818);

return statearr_31913;
})();
var statearr_31914_31970 = state_31888__$1;
(statearr_31914_31970[(2)] = null);

(statearr_31914_31970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (29))){
var inst_31862 = (state_31888[(9)]);
var state_31888__$1 = state_31888;
var statearr_31915_31971 = state_31888__$1;
(statearr_31915_31971[(2)] = inst_31862);

(statearr_31915_31971[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (6))){
var state_31888__$1 = state_31888;
var statearr_31916_31972 = state_31888__$1;
(statearr_31916_31972[(2)] = false);

(statearr_31916_31972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (28))){
var inst_31858 = (state_31888[(2)]);
var inst_31859 = calc_state.call(null);
var inst_31818 = inst_31859;
var state_31888__$1 = (function (){var statearr_31917 = state_31888;
(statearr_31917[(7)] = inst_31818);

(statearr_31917[(15)] = inst_31858);

return statearr_31917;
})();
var statearr_31918_31973 = state_31888__$1;
(statearr_31918_31973[(2)] = null);

(statearr_31918_31973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (25))){
var inst_31884 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31919_31974 = state_31888__$1;
(statearr_31919_31974[(2)] = inst_31884);

(statearr_31919_31974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (34))){
var inst_31882 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31920_31975 = state_31888__$1;
(statearr_31920_31975[(2)] = inst_31882);

(statearr_31920_31975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (17))){
var state_31888__$1 = state_31888;
var statearr_31921_31976 = state_31888__$1;
(statearr_31921_31976[(2)] = false);

(statearr_31921_31976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (3))){
var state_31888__$1 = state_31888;
var statearr_31922_31977 = state_31888__$1;
(statearr_31922_31977[(2)] = false);

(statearr_31922_31977[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (12))){
var inst_31886 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31888__$1,inst_31886);
} else {
if((state_val_31889 === (2))){
var inst_31794 = (state_31888[(8)]);
var inst_31799 = inst_31794.cljs$lang$protocol_mask$partition0$;
var inst_31800 = (inst_31799 & (64));
var inst_31801 = inst_31794.cljs$core$ISeq$;
var inst_31802 = (inst_31800) || (inst_31801);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31802)){
var statearr_31923_31978 = state_31888__$1;
(statearr_31923_31978[(1)] = (5));

} else {
var statearr_31924_31979 = state_31888__$1;
(statearr_31924_31979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (23))){
var inst_31847 = (state_31888[(14)]);
var inst_31853 = (inst_31847 == null);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31853)){
var statearr_31925_31980 = state_31888__$1;
(statearr_31925_31980[(1)] = (26));

} else {
var statearr_31926_31981 = state_31888__$1;
(statearr_31926_31981[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (35))){
var inst_31873 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31873)){
var statearr_31927_31982 = state_31888__$1;
(statearr_31927_31982[(1)] = (36));

} else {
var statearr_31928_31983 = state_31888__$1;
(statearr_31928_31983[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (19))){
var inst_31818 = (state_31888[(7)]);
var inst_31837 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31818);
var state_31888__$1 = state_31888;
var statearr_31929_31984 = state_31888__$1;
(statearr_31929_31984[(2)] = inst_31837);

(statearr_31929_31984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (11))){
var inst_31818 = (state_31888[(7)]);
var inst_31822 = (inst_31818 == null);
var inst_31823 = cljs.core.not.call(null,inst_31822);
var state_31888__$1 = state_31888;
if(inst_31823){
var statearr_31930_31985 = state_31888__$1;
(statearr_31930_31985[(1)] = (13));

} else {
var statearr_31931_31986 = state_31888__$1;
(statearr_31931_31986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (9))){
var inst_31794 = (state_31888[(8)]);
var state_31888__$1 = state_31888;
var statearr_31932_31987 = state_31888__$1;
(statearr_31932_31987[(2)] = inst_31794);

(statearr_31932_31987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (5))){
var state_31888__$1 = state_31888;
var statearr_31933_31988 = state_31888__$1;
(statearr_31933_31988[(2)] = true);

(statearr_31933_31988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (14))){
var state_31888__$1 = state_31888;
var statearr_31934_31989 = state_31888__$1;
(statearr_31934_31989[(2)] = false);

(statearr_31934_31989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (26))){
var inst_31848 = (state_31888[(11)]);
var inst_31855 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31848);
var state_31888__$1 = state_31888;
var statearr_31935_31990 = state_31888__$1;
(statearr_31935_31990[(2)] = inst_31855);

(statearr_31935_31990[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (16))){
var state_31888__$1 = state_31888;
var statearr_31936_31991 = state_31888__$1;
(statearr_31936_31991[(2)] = true);

(statearr_31936_31991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (38))){
var inst_31878 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31937_31992 = state_31888__$1;
(statearr_31937_31992[(2)] = inst_31878);

(statearr_31937_31992[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (30))){
var inst_31842 = (state_31888[(13)]);
var inst_31841 = (state_31888[(10)]);
var inst_31848 = (state_31888[(11)]);
var inst_31865 = cljs.core.empty_QMARK_.call(null,inst_31841);
var inst_31866 = inst_31842.call(null,inst_31848);
var inst_31867 = cljs.core.not.call(null,inst_31866);
var inst_31868 = (inst_31865) && (inst_31867);
var state_31888__$1 = state_31888;
var statearr_31938_31993 = state_31888__$1;
(statearr_31938_31993[(2)] = inst_31868);

(statearr_31938_31993[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (10))){
var inst_31794 = (state_31888[(8)]);
var inst_31814 = (state_31888[(2)]);
var inst_31815 = cljs.core.get.call(null,inst_31814,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31816 = cljs.core.get.call(null,inst_31814,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31817 = cljs.core.get.call(null,inst_31814,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31818 = inst_31794;
var state_31888__$1 = (function (){var statearr_31939 = state_31888;
(statearr_31939[(16)] = inst_31815);

(statearr_31939[(7)] = inst_31818);

(statearr_31939[(17)] = inst_31817);

(statearr_31939[(18)] = inst_31816);

return statearr_31939;
})();
var statearr_31940_31994 = state_31888__$1;
(statearr_31940_31994[(2)] = null);

(statearr_31940_31994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (18))){
var inst_31832 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31941_31995 = state_31888__$1;
(statearr_31941_31995[(2)] = inst_31832);

(statearr_31941_31995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (37))){
var state_31888__$1 = state_31888;
var statearr_31942_31996 = state_31888__$1;
(statearr_31942_31996[(2)] = null);

(statearr_31942_31996[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (8))){
var inst_31794 = (state_31888[(8)]);
var inst_31811 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31794);
var state_31888__$1 = state_31888;
var statearr_31943_31997 = state_31888__$1;
(statearr_31943_31997[(2)] = inst_31811);

(statearr_31943_31997[(1)] = (10));


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
});})(c__23014__auto___31951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22949__auto__,c__23014__auto___31951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22950__auto__ = null;
var cljs$core$async$mix_$_state_machine__22950__auto____0 = (function (){
var statearr_31947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31947[(0)] = cljs$core$async$mix_$_state_machine__22950__auto__);

(statearr_31947[(1)] = (1));

return statearr_31947;
});
var cljs$core$async$mix_$_state_machine__22950__auto____1 = (function (state_31888){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_31888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e31948){if((e31948 instanceof Object)){
var ex__22953__auto__ = e31948;
var statearr_31949_31998 = state_31888;
(statearr_31949_31998[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31999 = state_31888;
state_31888 = G__31999;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22950__auto__ = function(state_31888){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22950__auto____1.call(this,state_31888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22950__auto____0;
cljs$core$async$mix_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22950__auto____1;
return cljs$core$async$mix_$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___31951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23016__auto__ = (function (){var statearr_31950 = f__23015__auto__.call(null);
(statearr_31950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___31951);

return statearr_31950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___31951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19769__auto__ = (((p == null))?null:p);
var m__19770__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19770__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19769__auto__ = (((p == null))?null:p);
var m__19770__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,p,v,ch);
} else {
var m__19770__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32000 = [];
var len__20172__auto___32003 = arguments.length;
var i__20173__auto___32004 = (0);
while(true){
if((i__20173__auto___32004 < len__20172__auto___32003)){
args32000.push((arguments[i__20173__auto___32004]));

var G__32005 = (i__20173__auto___32004 + (1));
i__20173__auto___32004 = G__32005;
continue;
} else {
}
break;
}

var G__32002 = args32000.length;
switch (G__32002) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32000.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19769__auto__ = (((p == null))?null:p);
var m__19770__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,p);
} else {
var m__19770__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19769__auto__ = (((p == null))?null:p);
var m__19770__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19769__auto__)]);
if(!((m__19770__auto__ == null))){
return m__19770__auto__.call(null,p,v);
} else {
var m__19770__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19770__auto____$1 == null))){
return m__19770__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args32008 = [];
var len__20172__auto___32133 = arguments.length;
var i__20173__auto___32134 = (0);
while(true){
if((i__20173__auto___32134 < len__20172__auto___32133)){
args32008.push((arguments[i__20173__auto___32134]));

var G__32135 = (i__20173__auto___32134 + (1));
i__20173__auto___32134 = G__32135;
continue;
} else {
}
break;
}

var G__32010 = args32008.length;
switch (G__32010) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32008.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19114__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19114__auto__,mults){
return (function (p1__32007_SHARP_){
if(cljs.core.truth_(p1__32007_SHARP_.call(null,topic))){
return p1__32007_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32007_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19114__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32011 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32012){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32012 = meta32012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32013,meta32012__$1){
var self__ = this;
var _32013__$1 = this;
return (new cljs.core.async.t_cljs$core$async32011(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32012__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32013){
var self__ = this;
var _32013__$1 = this;
return self__.meta32012;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32011.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32011.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32011.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32011.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32011.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32012","meta32012",-1434908881,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32011";

cljs.core.async.t_cljs$core$async32011.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32011");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32011 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32011(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32012){
return (new cljs.core.async.t_cljs$core$async32011(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32012));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32011(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23014__auto___32137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___32137,mults,ensure_mult,p){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___32137,mults,ensure_mult,p){
return (function (state_32085){
var state_val_32086 = (state_32085[(1)]);
if((state_val_32086 === (7))){
var inst_32081 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32087_32138 = state_32085__$1;
(statearr_32087_32138[(2)] = inst_32081);

(statearr_32087_32138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (20))){
var state_32085__$1 = state_32085;
var statearr_32088_32139 = state_32085__$1;
(statearr_32088_32139[(2)] = null);

(statearr_32088_32139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (1))){
var state_32085__$1 = state_32085;
var statearr_32089_32140 = state_32085__$1;
(statearr_32089_32140[(2)] = null);

(statearr_32089_32140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (24))){
var inst_32064 = (state_32085[(7)]);
var inst_32073 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32064);
var state_32085__$1 = state_32085;
var statearr_32090_32141 = state_32085__$1;
(statearr_32090_32141[(2)] = inst_32073);

(statearr_32090_32141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (4))){
var inst_32016 = (state_32085[(8)]);
var inst_32016__$1 = (state_32085[(2)]);
var inst_32017 = (inst_32016__$1 == null);
var state_32085__$1 = (function (){var statearr_32091 = state_32085;
(statearr_32091[(8)] = inst_32016__$1);

return statearr_32091;
})();
if(cljs.core.truth_(inst_32017)){
var statearr_32092_32142 = state_32085__$1;
(statearr_32092_32142[(1)] = (5));

} else {
var statearr_32093_32143 = state_32085__$1;
(statearr_32093_32143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (15))){
var inst_32058 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32094_32144 = state_32085__$1;
(statearr_32094_32144[(2)] = inst_32058);

(statearr_32094_32144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (21))){
var inst_32078 = (state_32085[(2)]);
var state_32085__$1 = (function (){var statearr_32095 = state_32085;
(statearr_32095[(9)] = inst_32078);

return statearr_32095;
})();
var statearr_32096_32145 = state_32085__$1;
(statearr_32096_32145[(2)] = null);

(statearr_32096_32145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (13))){
var inst_32040 = (state_32085[(10)]);
var inst_32042 = cljs.core.chunked_seq_QMARK_.call(null,inst_32040);
var state_32085__$1 = state_32085;
if(inst_32042){
var statearr_32097_32146 = state_32085__$1;
(statearr_32097_32146[(1)] = (16));

} else {
var statearr_32098_32147 = state_32085__$1;
(statearr_32098_32147[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (22))){
var inst_32070 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
if(cljs.core.truth_(inst_32070)){
var statearr_32099_32148 = state_32085__$1;
(statearr_32099_32148[(1)] = (23));

} else {
var statearr_32100_32149 = state_32085__$1;
(statearr_32100_32149[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (6))){
var inst_32064 = (state_32085[(7)]);
var inst_32066 = (state_32085[(11)]);
var inst_32016 = (state_32085[(8)]);
var inst_32064__$1 = topic_fn.call(null,inst_32016);
var inst_32065 = cljs.core.deref.call(null,mults);
var inst_32066__$1 = cljs.core.get.call(null,inst_32065,inst_32064__$1);
var state_32085__$1 = (function (){var statearr_32101 = state_32085;
(statearr_32101[(7)] = inst_32064__$1);

(statearr_32101[(11)] = inst_32066__$1);

return statearr_32101;
})();
if(cljs.core.truth_(inst_32066__$1)){
var statearr_32102_32150 = state_32085__$1;
(statearr_32102_32150[(1)] = (19));

} else {
var statearr_32103_32151 = state_32085__$1;
(statearr_32103_32151[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (25))){
var inst_32075 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32104_32152 = state_32085__$1;
(statearr_32104_32152[(2)] = inst_32075);

(statearr_32104_32152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (17))){
var inst_32040 = (state_32085[(10)]);
var inst_32049 = cljs.core.first.call(null,inst_32040);
var inst_32050 = cljs.core.async.muxch_STAR_.call(null,inst_32049);
var inst_32051 = cljs.core.async.close_BANG_.call(null,inst_32050);
var inst_32052 = cljs.core.next.call(null,inst_32040);
var inst_32026 = inst_32052;
var inst_32027 = null;
var inst_32028 = (0);
var inst_32029 = (0);
var state_32085__$1 = (function (){var statearr_32105 = state_32085;
(statearr_32105[(12)] = inst_32027);

(statearr_32105[(13)] = inst_32051);

(statearr_32105[(14)] = inst_32028);

(statearr_32105[(15)] = inst_32026);

(statearr_32105[(16)] = inst_32029);

return statearr_32105;
})();
var statearr_32106_32153 = state_32085__$1;
(statearr_32106_32153[(2)] = null);

(statearr_32106_32153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (3))){
var inst_32083 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32085__$1,inst_32083);
} else {
if((state_val_32086 === (12))){
var inst_32060 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32107_32154 = state_32085__$1;
(statearr_32107_32154[(2)] = inst_32060);

(statearr_32107_32154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (2))){
var state_32085__$1 = state_32085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32085__$1,(4),ch);
} else {
if((state_val_32086 === (23))){
var state_32085__$1 = state_32085;
var statearr_32108_32155 = state_32085__$1;
(statearr_32108_32155[(2)] = null);

(statearr_32108_32155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (19))){
var inst_32066 = (state_32085[(11)]);
var inst_32016 = (state_32085[(8)]);
var inst_32068 = cljs.core.async.muxch_STAR_.call(null,inst_32066);
var state_32085__$1 = state_32085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32085__$1,(22),inst_32068,inst_32016);
} else {
if((state_val_32086 === (11))){
var inst_32026 = (state_32085[(15)]);
var inst_32040 = (state_32085[(10)]);
var inst_32040__$1 = cljs.core.seq.call(null,inst_32026);
var state_32085__$1 = (function (){var statearr_32109 = state_32085;
(statearr_32109[(10)] = inst_32040__$1);

return statearr_32109;
})();
if(inst_32040__$1){
var statearr_32110_32156 = state_32085__$1;
(statearr_32110_32156[(1)] = (13));

} else {
var statearr_32111_32157 = state_32085__$1;
(statearr_32111_32157[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (9))){
var inst_32062 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32112_32158 = state_32085__$1;
(statearr_32112_32158[(2)] = inst_32062);

(statearr_32112_32158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (5))){
var inst_32023 = cljs.core.deref.call(null,mults);
var inst_32024 = cljs.core.vals.call(null,inst_32023);
var inst_32025 = cljs.core.seq.call(null,inst_32024);
var inst_32026 = inst_32025;
var inst_32027 = null;
var inst_32028 = (0);
var inst_32029 = (0);
var state_32085__$1 = (function (){var statearr_32113 = state_32085;
(statearr_32113[(12)] = inst_32027);

(statearr_32113[(14)] = inst_32028);

(statearr_32113[(15)] = inst_32026);

(statearr_32113[(16)] = inst_32029);

return statearr_32113;
})();
var statearr_32114_32159 = state_32085__$1;
(statearr_32114_32159[(2)] = null);

(statearr_32114_32159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (14))){
var state_32085__$1 = state_32085;
var statearr_32118_32160 = state_32085__$1;
(statearr_32118_32160[(2)] = null);

(statearr_32118_32160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (16))){
var inst_32040 = (state_32085[(10)]);
var inst_32044 = cljs.core.chunk_first.call(null,inst_32040);
var inst_32045 = cljs.core.chunk_rest.call(null,inst_32040);
var inst_32046 = cljs.core.count.call(null,inst_32044);
var inst_32026 = inst_32045;
var inst_32027 = inst_32044;
var inst_32028 = inst_32046;
var inst_32029 = (0);
var state_32085__$1 = (function (){var statearr_32119 = state_32085;
(statearr_32119[(12)] = inst_32027);

(statearr_32119[(14)] = inst_32028);

(statearr_32119[(15)] = inst_32026);

(statearr_32119[(16)] = inst_32029);

return statearr_32119;
})();
var statearr_32120_32161 = state_32085__$1;
(statearr_32120_32161[(2)] = null);

(statearr_32120_32161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (10))){
var inst_32027 = (state_32085[(12)]);
var inst_32028 = (state_32085[(14)]);
var inst_32026 = (state_32085[(15)]);
var inst_32029 = (state_32085[(16)]);
var inst_32034 = cljs.core._nth.call(null,inst_32027,inst_32029);
var inst_32035 = cljs.core.async.muxch_STAR_.call(null,inst_32034);
var inst_32036 = cljs.core.async.close_BANG_.call(null,inst_32035);
var inst_32037 = (inst_32029 + (1));
var tmp32115 = inst_32027;
var tmp32116 = inst_32028;
var tmp32117 = inst_32026;
var inst_32026__$1 = tmp32117;
var inst_32027__$1 = tmp32115;
var inst_32028__$1 = tmp32116;
var inst_32029__$1 = inst_32037;
var state_32085__$1 = (function (){var statearr_32121 = state_32085;
(statearr_32121[(17)] = inst_32036);

(statearr_32121[(12)] = inst_32027__$1);

(statearr_32121[(14)] = inst_32028__$1);

(statearr_32121[(15)] = inst_32026__$1);

(statearr_32121[(16)] = inst_32029__$1);

return statearr_32121;
})();
var statearr_32122_32162 = state_32085__$1;
(statearr_32122_32162[(2)] = null);

(statearr_32122_32162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (18))){
var inst_32055 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32123_32163 = state_32085__$1;
(statearr_32123_32163[(2)] = inst_32055);

(statearr_32123_32163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (8))){
var inst_32028 = (state_32085[(14)]);
var inst_32029 = (state_32085[(16)]);
var inst_32031 = (inst_32029 < inst_32028);
var inst_32032 = inst_32031;
var state_32085__$1 = state_32085;
if(cljs.core.truth_(inst_32032)){
var statearr_32124_32164 = state_32085__$1;
(statearr_32124_32164[(1)] = (10));

} else {
var statearr_32125_32165 = state_32085__$1;
(statearr_32125_32165[(1)] = (11));

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
});})(c__23014__auto___32137,mults,ensure_mult,p))
;
return ((function (switch__22949__auto__,c__23014__auto___32137,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_32129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32129[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_32129[(1)] = (1));

return statearr_32129;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_32085){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_32085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e32130){if((e32130 instanceof Object)){
var ex__22953__auto__ = e32130;
var statearr_32131_32166 = state_32085;
(statearr_32131_32166[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32167 = state_32085;
state_32085 = G__32167;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_32085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_32085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___32137,mults,ensure_mult,p))
})();
var state__23016__auto__ = (function (){var statearr_32132 = f__23015__auto__.call(null);
(statearr_32132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___32137);

return statearr_32132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___32137,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32168 = [];
var len__20172__auto___32171 = arguments.length;
var i__20173__auto___32172 = (0);
while(true){
if((i__20173__auto___32172 < len__20172__auto___32171)){
args32168.push((arguments[i__20173__auto___32172]));

var G__32173 = (i__20173__auto___32172 + (1));
i__20173__auto___32172 = G__32173;
continue;
} else {
}
break;
}

var G__32170 = args32168.length;
switch (G__32170) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32168.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32175 = [];
var len__20172__auto___32178 = arguments.length;
var i__20173__auto___32179 = (0);
while(true){
if((i__20173__auto___32179 < len__20172__auto___32178)){
args32175.push((arguments[i__20173__auto___32179]));

var G__32180 = (i__20173__auto___32179 + (1));
i__20173__auto___32179 = G__32180;
continue;
} else {
}
break;
}

var G__32177 = args32175.length;
switch (G__32177) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32175.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args32182 = [];
var len__20172__auto___32253 = arguments.length;
var i__20173__auto___32254 = (0);
while(true){
if((i__20173__auto___32254 < len__20172__auto___32253)){
args32182.push((arguments[i__20173__auto___32254]));

var G__32255 = (i__20173__auto___32254 + (1));
i__20173__auto___32254 = G__32255;
continue;
} else {
}
break;
}

var G__32184 = args32182.length;
switch (G__32184) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32182.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23014__auto___32257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___32257,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___32257,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32223){
var state_val_32224 = (state_32223[(1)]);
if((state_val_32224 === (7))){
var state_32223__$1 = state_32223;
var statearr_32225_32258 = state_32223__$1;
(statearr_32225_32258[(2)] = null);

(statearr_32225_32258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (1))){
var state_32223__$1 = state_32223;
var statearr_32226_32259 = state_32223__$1;
(statearr_32226_32259[(2)] = null);

(statearr_32226_32259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (4))){
var inst_32187 = (state_32223[(7)]);
var inst_32189 = (inst_32187 < cnt);
var state_32223__$1 = state_32223;
if(cljs.core.truth_(inst_32189)){
var statearr_32227_32260 = state_32223__$1;
(statearr_32227_32260[(1)] = (6));

} else {
var statearr_32228_32261 = state_32223__$1;
(statearr_32228_32261[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (15))){
var inst_32219 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32229_32262 = state_32223__$1;
(statearr_32229_32262[(2)] = inst_32219);

(statearr_32229_32262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (13))){
var inst_32212 = cljs.core.async.close_BANG_.call(null,out);
var state_32223__$1 = state_32223;
var statearr_32230_32263 = state_32223__$1;
(statearr_32230_32263[(2)] = inst_32212);

(statearr_32230_32263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (6))){
var state_32223__$1 = state_32223;
var statearr_32231_32264 = state_32223__$1;
(statearr_32231_32264[(2)] = null);

(statearr_32231_32264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (3))){
var inst_32221 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32223__$1,inst_32221);
} else {
if((state_val_32224 === (12))){
var inst_32209 = (state_32223[(8)]);
var inst_32209__$1 = (state_32223[(2)]);
var inst_32210 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32209__$1);
var state_32223__$1 = (function (){var statearr_32232 = state_32223;
(statearr_32232[(8)] = inst_32209__$1);

return statearr_32232;
})();
if(cljs.core.truth_(inst_32210)){
var statearr_32233_32265 = state_32223__$1;
(statearr_32233_32265[(1)] = (13));

} else {
var statearr_32234_32266 = state_32223__$1;
(statearr_32234_32266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (2))){
var inst_32186 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32187 = (0);
var state_32223__$1 = (function (){var statearr_32235 = state_32223;
(statearr_32235[(7)] = inst_32187);

(statearr_32235[(9)] = inst_32186);

return statearr_32235;
})();
var statearr_32236_32267 = state_32223__$1;
(statearr_32236_32267[(2)] = null);

(statearr_32236_32267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (11))){
var inst_32187 = (state_32223[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32223,(10),Object,null,(9));
var inst_32196 = chs__$1.call(null,inst_32187);
var inst_32197 = done.call(null,inst_32187);
var inst_32198 = cljs.core.async.take_BANG_.call(null,inst_32196,inst_32197);
var state_32223__$1 = state_32223;
var statearr_32237_32268 = state_32223__$1;
(statearr_32237_32268[(2)] = inst_32198);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (9))){
var inst_32187 = (state_32223[(7)]);
var inst_32200 = (state_32223[(2)]);
var inst_32201 = (inst_32187 + (1));
var inst_32187__$1 = inst_32201;
var state_32223__$1 = (function (){var statearr_32238 = state_32223;
(statearr_32238[(7)] = inst_32187__$1);

(statearr_32238[(10)] = inst_32200);

return statearr_32238;
})();
var statearr_32239_32269 = state_32223__$1;
(statearr_32239_32269[(2)] = null);

(statearr_32239_32269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (5))){
var inst_32207 = (state_32223[(2)]);
var state_32223__$1 = (function (){var statearr_32240 = state_32223;
(statearr_32240[(11)] = inst_32207);

return statearr_32240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32223__$1,(12),dchan);
} else {
if((state_val_32224 === (14))){
var inst_32209 = (state_32223[(8)]);
var inst_32214 = cljs.core.apply.call(null,f,inst_32209);
var state_32223__$1 = state_32223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32223__$1,(16),out,inst_32214);
} else {
if((state_val_32224 === (16))){
var inst_32216 = (state_32223[(2)]);
var state_32223__$1 = (function (){var statearr_32241 = state_32223;
(statearr_32241[(12)] = inst_32216);

return statearr_32241;
})();
var statearr_32242_32270 = state_32223__$1;
(statearr_32242_32270[(2)] = null);

(statearr_32242_32270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (10))){
var inst_32191 = (state_32223[(2)]);
var inst_32192 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32223__$1 = (function (){var statearr_32243 = state_32223;
(statearr_32243[(13)] = inst_32191);

return statearr_32243;
})();
var statearr_32244_32271 = state_32223__$1;
(statearr_32244_32271[(2)] = inst_32192);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (8))){
var inst_32205 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32245_32272 = state_32223__$1;
(statearr_32245_32272[(2)] = inst_32205);

(statearr_32245_32272[(1)] = (5));


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
});})(c__23014__auto___32257,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22949__auto__,c__23014__auto___32257,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_32249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32249[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_32249[(1)] = (1));

return statearr_32249;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_32223){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_32223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e32250){if((e32250 instanceof Object)){
var ex__22953__auto__ = e32250;
var statearr_32251_32273 = state_32223;
(statearr_32251_32273[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32274 = state_32223;
state_32223 = G__32274;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_32223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_32223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___32257,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23016__auto__ = (function (){var statearr_32252 = f__23015__auto__.call(null);
(statearr_32252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___32257);

return statearr_32252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___32257,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32276 = [];
var len__20172__auto___32332 = arguments.length;
var i__20173__auto___32333 = (0);
while(true){
if((i__20173__auto___32333 < len__20172__auto___32332)){
args32276.push((arguments[i__20173__auto___32333]));

var G__32334 = (i__20173__auto___32333 + (1));
i__20173__auto___32333 = G__32334;
continue;
} else {
}
break;
}

var G__32278 = args32276.length;
switch (G__32278) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32276.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23014__auto___32336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___32336,out){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___32336,out){
return (function (state_32308){
var state_val_32309 = (state_32308[(1)]);
if((state_val_32309 === (7))){
var inst_32287 = (state_32308[(7)]);
var inst_32288 = (state_32308[(8)]);
var inst_32287__$1 = (state_32308[(2)]);
var inst_32288__$1 = cljs.core.nth.call(null,inst_32287__$1,(0),null);
var inst_32289 = cljs.core.nth.call(null,inst_32287__$1,(1),null);
var inst_32290 = (inst_32288__$1 == null);
var state_32308__$1 = (function (){var statearr_32310 = state_32308;
(statearr_32310[(9)] = inst_32289);

(statearr_32310[(7)] = inst_32287__$1);

(statearr_32310[(8)] = inst_32288__$1);

return statearr_32310;
})();
if(cljs.core.truth_(inst_32290)){
var statearr_32311_32337 = state_32308__$1;
(statearr_32311_32337[(1)] = (8));

} else {
var statearr_32312_32338 = state_32308__$1;
(statearr_32312_32338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (1))){
var inst_32279 = cljs.core.vec.call(null,chs);
var inst_32280 = inst_32279;
var state_32308__$1 = (function (){var statearr_32313 = state_32308;
(statearr_32313[(10)] = inst_32280);

return statearr_32313;
})();
var statearr_32314_32339 = state_32308__$1;
(statearr_32314_32339[(2)] = null);

(statearr_32314_32339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (4))){
var inst_32280 = (state_32308[(10)]);
var state_32308__$1 = state_32308;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32308__$1,(7),inst_32280);
} else {
if((state_val_32309 === (6))){
var inst_32304 = (state_32308[(2)]);
var state_32308__$1 = state_32308;
var statearr_32315_32340 = state_32308__$1;
(statearr_32315_32340[(2)] = inst_32304);

(statearr_32315_32340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (3))){
var inst_32306 = (state_32308[(2)]);
var state_32308__$1 = state_32308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32308__$1,inst_32306);
} else {
if((state_val_32309 === (2))){
var inst_32280 = (state_32308[(10)]);
var inst_32282 = cljs.core.count.call(null,inst_32280);
var inst_32283 = (inst_32282 > (0));
var state_32308__$1 = state_32308;
if(cljs.core.truth_(inst_32283)){
var statearr_32317_32341 = state_32308__$1;
(statearr_32317_32341[(1)] = (4));

} else {
var statearr_32318_32342 = state_32308__$1;
(statearr_32318_32342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (11))){
var inst_32280 = (state_32308[(10)]);
var inst_32297 = (state_32308[(2)]);
var tmp32316 = inst_32280;
var inst_32280__$1 = tmp32316;
var state_32308__$1 = (function (){var statearr_32319 = state_32308;
(statearr_32319[(11)] = inst_32297);

(statearr_32319[(10)] = inst_32280__$1);

return statearr_32319;
})();
var statearr_32320_32343 = state_32308__$1;
(statearr_32320_32343[(2)] = null);

(statearr_32320_32343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (9))){
var inst_32288 = (state_32308[(8)]);
var state_32308__$1 = state_32308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32308__$1,(11),out,inst_32288);
} else {
if((state_val_32309 === (5))){
var inst_32302 = cljs.core.async.close_BANG_.call(null,out);
var state_32308__$1 = state_32308;
var statearr_32321_32344 = state_32308__$1;
(statearr_32321_32344[(2)] = inst_32302);

(statearr_32321_32344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (10))){
var inst_32300 = (state_32308[(2)]);
var state_32308__$1 = state_32308;
var statearr_32322_32345 = state_32308__$1;
(statearr_32322_32345[(2)] = inst_32300);

(statearr_32322_32345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32309 === (8))){
var inst_32280 = (state_32308[(10)]);
var inst_32289 = (state_32308[(9)]);
var inst_32287 = (state_32308[(7)]);
var inst_32288 = (state_32308[(8)]);
var inst_32292 = (function (){var cs = inst_32280;
var vec__32285 = inst_32287;
var v = inst_32288;
var c = inst_32289;
return ((function (cs,vec__32285,v,c,inst_32280,inst_32289,inst_32287,inst_32288,state_val_32309,c__23014__auto___32336,out){
return (function (p1__32275_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32275_SHARP_);
});
;})(cs,vec__32285,v,c,inst_32280,inst_32289,inst_32287,inst_32288,state_val_32309,c__23014__auto___32336,out))
})();
var inst_32293 = cljs.core.filterv.call(null,inst_32292,inst_32280);
var inst_32280__$1 = inst_32293;
var state_32308__$1 = (function (){var statearr_32323 = state_32308;
(statearr_32323[(10)] = inst_32280__$1);

return statearr_32323;
})();
var statearr_32324_32346 = state_32308__$1;
(statearr_32324_32346[(2)] = null);

(statearr_32324_32346[(1)] = (2));


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
});})(c__23014__auto___32336,out))
;
return ((function (switch__22949__auto__,c__23014__auto___32336,out){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_32328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32328[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_32328[(1)] = (1));

return statearr_32328;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_32308){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_32308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e32329){if((e32329 instanceof Object)){
var ex__22953__auto__ = e32329;
var statearr_32330_32347 = state_32308;
(statearr_32330_32347[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32348 = state_32308;
state_32308 = G__32348;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_32308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_32308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___32336,out))
})();
var state__23016__auto__ = (function (){var statearr_32331 = f__23015__auto__.call(null);
(statearr_32331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___32336);

return statearr_32331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___32336,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32349 = [];
var len__20172__auto___32398 = arguments.length;
var i__20173__auto___32399 = (0);
while(true){
if((i__20173__auto___32399 < len__20172__auto___32398)){
args32349.push((arguments[i__20173__auto___32399]));

var G__32400 = (i__20173__auto___32399 + (1));
i__20173__auto___32399 = G__32400;
continue;
} else {
}
break;
}

var G__32351 = args32349.length;
switch (G__32351) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32349.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23014__auto___32402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___32402,out){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___32402,out){
return (function (state_32375){
var state_val_32376 = (state_32375[(1)]);
if((state_val_32376 === (7))){
var inst_32357 = (state_32375[(7)]);
var inst_32357__$1 = (state_32375[(2)]);
var inst_32358 = (inst_32357__$1 == null);
var inst_32359 = cljs.core.not.call(null,inst_32358);
var state_32375__$1 = (function (){var statearr_32377 = state_32375;
(statearr_32377[(7)] = inst_32357__$1);

return statearr_32377;
})();
if(inst_32359){
var statearr_32378_32403 = state_32375__$1;
(statearr_32378_32403[(1)] = (8));

} else {
var statearr_32379_32404 = state_32375__$1;
(statearr_32379_32404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (1))){
var inst_32352 = (0);
var state_32375__$1 = (function (){var statearr_32380 = state_32375;
(statearr_32380[(8)] = inst_32352);

return statearr_32380;
})();
var statearr_32381_32405 = state_32375__$1;
(statearr_32381_32405[(2)] = null);

(statearr_32381_32405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (4))){
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32375__$1,(7),ch);
} else {
if((state_val_32376 === (6))){
var inst_32370 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32382_32406 = state_32375__$1;
(statearr_32382_32406[(2)] = inst_32370);

(statearr_32382_32406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (3))){
var inst_32372 = (state_32375[(2)]);
var inst_32373 = cljs.core.async.close_BANG_.call(null,out);
var state_32375__$1 = (function (){var statearr_32383 = state_32375;
(statearr_32383[(9)] = inst_32372);

return statearr_32383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32375__$1,inst_32373);
} else {
if((state_val_32376 === (2))){
var inst_32352 = (state_32375[(8)]);
var inst_32354 = (inst_32352 < n);
var state_32375__$1 = state_32375;
if(cljs.core.truth_(inst_32354)){
var statearr_32384_32407 = state_32375__$1;
(statearr_32384_32407[(1)] = (4));

} else {
var statearr_32385_32408 = state_32375__$1;
(statearr_32385_32408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (11))){
var inst_32352 = (state_32375[(8)]);
var inst_32362 = (state_32375[(2)]);
var inst_32363 = (inst_32352 + (1));
var inst_32352__$1 = inst_32363;
var state_32375__$1 = (function (){var statearr_32386 = state_32375;
(statearr_32386[(8)] = inst_32352__$1);

(statearr_32386[(10)] = inst_32362);

return statearr_32386;
})();
var statearr_32387_32409 = state_32375__$1;
(statearr_32387_32409[(2)] = null);

(statearr_32387_32409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (9))){
var state_32375__$1 = state_32375;
var statearr_32388_32410 = state_32375__$1;
(statearr_32388_32410[(2)] = null);

(statearr_32388_32410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (5))){
var state_32375__$1 = state_32375;
var statearr_32389_32411 = state_32375__$1;
(statearr_32389_32411[(2)] = null);

(statearr_32389_32411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (10))){
var inst_32367 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32390_32412 = state_32375__$1;
(statearr_32390_32412[(2)] = inst_32367);

(statearr_32390_32412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (8))){
var inst_32357 = (state_32375[(7)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32375__$1,(11),out,inst_32357);
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
});})(c__23014__auto___32402,out))
;
return ((function (switch__22949__auto__,c__23014__auto___32402,out){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_32394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32394[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_32394[(1)] = (1));

return statearr_32394;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_32375){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_32375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e32395){if((e32395 instanceof Object)){
var ex__22953__auto__ = e32395;
var statearr_32396_32413 = state_32375;
(statearr_32396_32413[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32414 = state_32375;
state_32375 = G__32414;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_32375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_32375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___32402,out))
})();
var state__23016__auto__ = (function (){var statearr_32397 = f__23015__auto__.call(null);
(statearr_32397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___32402);

return statearr_32397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___32402,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32422 = (function (map_LT_,f,ch,meta32423){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32423 = meta32423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32424,meta32423__$1){
var self__ = this;
var _32424__$1 = this;
return (new cljs.core.async.t_cljs$core$async32422(self__.map_LT_,self__.f,self__.ch,meta32423__$1));
});

cljs.core.async.t_cljs$core$async32422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32424){
var self__ = this;
var _32424__$1 = this;
return self__.meta32423;
});

cljs.core.async.t_cljs$core$async32422.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32422.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32422.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32425 = (function (map_LT_,f,ch,meta32423,_,fn1,meta32426){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32423 = meta32423;
this._ = _;
this.fn1 = fn1;
this.meta32426 = meta32426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32427,meta32426__$1){
var self__ = this;
var _32427__$1 = this;
return (new cljs.core.async.t_cljs$core$async32425(self__.map_LT_,self__.f,self__.ch,self__.meta32423,self__._,self__.fn1,meta32426__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32427){
var self__ = this;
var _32427__$1 = this;
return self__.meta32426;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32415_SHARP_){
return f1.call(null,(((p1__32415_SHARP_ == null))?null:self__.f.call(null,p1__32415_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32425.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32423","meta32423",-1389116324,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32422","cljs.core.async/t_cljs$core$async32422",-102761274,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32426","meta32426",2099204659,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32425";

cljs.core.async.t_cljs$core$async32425.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32425");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32425 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32425(map_LT___$1,f__$1,ch__$1,meta32423__$1,___$2,fn1__$1,meta32426){
return (new cljs.core.async.t_cljs$core$async32425(map_LT___$1,f__$1,ch__$1,meta32423__$1,___$2,fn1__$1,meta32426));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32425(self__.map_LT_,self__.f,self__.ch,self__.meta32423,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19102__auto__ = ret;
if(cljs.core.truth_(and__19102__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19102__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32422.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32423","meta32423",-1389116324,null)], null);
});

cljs.core.async.t_cljs$core$async32422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32422";

cljs.core.async.t_cljs$core$async32422.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32422");
});

cljs.core.async.__GT_t_cljs$core$async32422 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32422(map_LT___$1,f__$1,ch__$1,meta32423){
return (new cljs.core.async.t_cljs$core$async32422(map_LT___$1,f__$1,ch__$1,meta32423));
});

}

return (new cljs.core.async.t_cljs$core$async32422(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32431 = (function (map_GT_,f,ch,meta32432){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32432 = meta32432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32433,meta32432__$1){
var self__ = this;
var _32433__$1 = this;
return (new cljs.core.async.t_cljs$core$async32431(self__.map_GT_,self__.f,self__.ch,meta32432__$1));
});

cljs.core.async.t_cljs$core$async32431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32433){
var self__ = this;
var _32433__$1 = this;
return self__.meta32432;
});

cljs.core.async.t_cljs$core$async32431.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32431.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32431.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32432","meta32432",74172676,null)], null);
});

cljs.core.async.t_cljs$core$async32431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32431";

cljs.core.async.t_cljs$core$async32431.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32431");
});

cljs.core.async.__GT_t_cljs$core$async32431 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32431(map_GT___$1,f__$1,ch__$1,meta32432){
return (new cljs.core.async.t_cljs$core$async32431(map_GT___$1,f__$1,ch__$1,meta32432));
});

}

return (new cljs.core.async.t_cljs$core$async32431(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32437 = (function (filter_GT_,p,ch,meta32438){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32438 = meta32438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32439,meta32438__$1){
var self__ = this;
var _32439__$1 = this;
return (new cljs.core.async.t_cljs$core$async32437(self__.filter_GT_,self__.p,self__.ch,meta32438__$1));
});

cljs.core.async.t_cljs$core$async32437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32439){
var self__ = this;
var _32439__$1 = this;
return self__.meta32438;
});

cljs.core.async.t_cljs$core$async32437.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32437.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32437.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32438","meta32438",-941128260,null)], null);
});

cljs.core.async.t_cljs$core$async32437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32437";

cljs.core.async.t_cljs$core$async32437.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32437");
});

cljs.core.async.__GT_t_cljs$core$async32437 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32437(filter_GT___$1,p__$1,ch__$1,meta32438){
return (new cljs.core.async.t_cljs$core$async32437(filter_GT___$1,p__$1,ch__$1,meta32438));
});

}

return (new cljs.core.async.t_cljs$core$async32437(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32440 = [];
var len__20172__auto___32484 = arguments.length;
var i__20173__auto___32485 = (0);
while(true){
if((i__20173__auto___32485 < len__20172__auto___32484)){
args32440.push((arguments[i__20173__auto___32485]));

var G__32486 = (i__20173__auto___32485 + (1));
i__20173__auto___32485 = G__32486;
continue;
} else {
}
break;
}

var G__32442 = args32440.length;
switch (G__32442) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32440.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23014__auto___32488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___32488,out){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___32488,out){
return (function (state_32463){
var state_val_32464 = (state_32463[(1)]);
if((state_val_32464 === (7))){
var inst_32459 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32465_32489 = state_32463__$1;
(statearr_32465_32489[(2)] = inst_32459);

(statearr_32465_32489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (1))){
var state_32463__$1 = state_32463;
var statearr_32466_32490 = state_32463__$1;
(statearr_32466_32490[(2)] = null);

(statearr_32466_32490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (4))){
var inst_32445 = (state_32463[(7)]);
var inst_32445__$1 = (state_32463[(2)]);
var inst_32446 = (inst_32445__$1 == null);
var state_32463__$1 = (function (){var statearr_32467 = state_32463;
(statearr_32467[(7)] = inst_32445__$1);

return statearr_32467;
})();
if(cljs.core.truth_(inst_32446)){
var statearr_32468_32491 = state_32463__$1;
(statearr_32468_32491[(1)] = (5));

} else {
var statearr_32469_32492 = state_32463__$1;
(statearr_32469_32492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (6))){
var inst_32445 = (state_32463[(7)]);
var inst_32450 = p.call(null,inst_32445);
var state_32463__$1 = state_32463;
if(cljs.core.truth_(inst_32450)){
var statearr_32470_32493 = state_32463__$1;
(statearr_32470_32493[(1)] = (8));

} else {
var statearr_32471_32494 = state_32463__$1;
(statearr_32471_32494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (3))){
var inst_32461 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32463__$1,inst_32461);
} else {
if((state_val_32464 === (2))){
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32463__$1,(4),ch);
} else {
if((state_val_32464 === (11))){
var inst_32453 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32472_32495 = state_32463__$1;
(statearr_32472_32495[(2)] = inst_32453);

(statearr_32472_32495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (9))){
var state_32463__$1 = state_32463;
var statearr_32473_32496 = state_32463__$1;
(statearr_32473_32496[(2)] = null);

(statearr_32473_32496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (5))){
var inst_32448 = cljs.core.async.close_BANG_.call(null,out);
var state_32463__$1 = state_32463;
var statearr_32474_32497 = state_32463__$1;
(statearr_32474_32497[(2)] = inst_32448);

(statearr_32474_32497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (10))){
var inst_32456 = (state_32463[(2)]);
var state_32463__$1 = (function (){var statearr_32475 = state_32463;
(statearr_32475[(8)] = inst_32456);

return statearr_32475;
})();
var statearr_32476_32498 = state_32463__$1;
(statearr_32476_32498[(2)] = null);

(statearr_32476_32498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (8))){
var inst_32445 = (state_32463[(7)]);
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32463__$1,(11),out,inst_32445);
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
});})(c__23014__auto___32488,out))
;
return ((function (switch__22949__auto__,c__23014__auto___32488,out){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_32480 = [null,null,null,null,null,null,null,null,null];
(statearr_32480[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_32480[(1)] = (1));

return statearr_32480;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_32463){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_32463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e32481){if((e32481 instanceof Object)){
var ex__22953__auto__ = e32481;
var statearr_32482_32499 = state_32463;
(statearr_32482_32499[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32500 = state_32463;
state_32463 = G__32500;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_32463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_32463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___32488,out))
})();
var state__23016__auto__ = (function (){var statearr_32483 = f__23015__auto__.call(null);
(statearr_32483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___32488);

return statearr_32483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___32488,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32501 = [];
var len__20172__auto___32504 = arguments.length;
var i__20173__auto___32505 = (0);
while(true){
if((i__20173__auto___32505 < len__20172__auto___32504)){
args32501.push((arguments[i__20173__auto___32505]));

var G__32506 = (i__20173__auto___32505 + (1));
i__20173__auto___32505 = G__32506;
continue;
} else {
}
break;
}

var G__32503 = args32501.length;
switch (G__32503) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32501.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto__){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto__){
return (function (state_32673){
var state_val_32674 = (state_32673[(1)]);
if((state_val_32674 === (7))){
var inst_32669 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32675_32716 = state_32673__$1;
(statearr_32675_32716[(2)] = inst_32669);

(statearr_32675_32716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (20))){
var inst_32639 = (state_32673[(7)]);
var inst_32650 = (state_32673[(2)]);
var inst_32651 = cljs.core.next.call(null,inst_32639);
var inst_32625 = inst_32651;
var inst_32626 = null;
var inst_32627 = (0);
var inst_32628 = (0);
var state_32673__$1 = (function (){var statearr_32676 = state_32673;
(statearr_32676[(8)] = inst_32627);

(statearr_32676[(9)] = inst_32626);

(statearr_32676[(10)] = inst_32625);

(statearr_32676[(11)] = inst_32650);

(statearr_32676[(12)] = inst_32628);

return statearr_32676;
})();
var statearr_32677_32717 = state_32673__$1;
(statearr_32677_32717[(2)] = null);

(statearr_32677_32717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (1))){
var state_32673__$1 = state_32673;
var statearr_32678_32718 = state_32673__$1;
(statearr_32678_32718[(2)] = null);

(statearr_32678_32718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (4))){
var inst_32614 = (state_32673[(13)]);
var inst_32614__$1 = (state_32673[(2)]);
var inst_32615 = (inst_32614__$1 == null);
var state_32673__$1 = (function (){var statearr_32679 = state_32673;
(statearr_32679[(13)] = inst_32614__$1);

return statearr_32679;
})();
if(cljs.core.truth_(inst_32615)){
var statearr_32680_32719 = state_32673__$1;
(statearr_32680_32719[(1)] = (5));

} else {
var statearr_32681_32720 = state_32673__$1;
(statearr_32681_32720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (15))){
var state_32673__$1 = state_32673;
var statearr_32685_32721 = state_32673__$1;
(statearr_32685_32721[(2)] = null);

(statearr_32685_32721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (21))){
var state_32673__$1 = state_32673;
var statearr_32686_32722 = state_32673__$1;
(statearr_32686_32722[(2)] = null);

(statearr_32686_32722[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (13))){
var inst_32627 = (state_32673[(8)]);
var inst_32626 = (state_32673[(9)]);
var inst_32625 = (state_32673[(10)]);
var inst_32628 = (state_32673[(12)]);
var inst_32635 = (state_32673[(2)]);
var inst_32636 = (inst_32628 + (1));
var tmp32682 = inst_32627;
var tmp32683 = inst_32626;
var tmp32684 = inst_32625;
var inst_32625__$1 = tmp32684;
var inst_32626__$1 = tmp32683;
var inst_32627__$1 = tmp32682;
var inst_32628__$1 = inst_32636;
var state_32673__$1 = (function (){var statearr_32687 = state_32673;
(statearr_32687[(8)] = inst_32627__$1);

(statearr_32687[(14)] = inst_32635);

(statearr_32687[(9)] = inst_32626__$1);

(statearr_32687[(10)] = inst_32625__$1);

(statearr_32687[(12)] = inst_32628__$1);

return statearr_32687;
})();
var statearr_32688_32723 = state_32673__$1;
(statearr_32688_32723[(2)] = null);

(statearr_32688_32723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (22))){
var state_32673__$1 = state_32673;
var statearr_32689_32724 = state_32673__$1;
(statearr_32689_32724[(2)] = null);

(statearr_32689_32724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (6))){
var inst_32614 = (state_32673[(13)]);
var inst_32623 = f.call(null,inst_32614);
var inst_32624 = cljs.core.seq.call(null,inst_32623);
var inst_32625 = inst_32624;
var inst_32626 = null;
var inst_32627 = (0);
var inst_32628 = (0);
var state_32673__$1 = (function (){var statearr_32690 = state_32673;
(statearr_32690[(8)] = inst_32627);

(statearr_32690[(9)] = inst_32626);

(statearr_32690[(10)] = inst_32625);

(statearr_32690[(12)] = inst_32628);

return statearr_32690;
})();
var statearr_32691_32725 = state_32673__$1;
(statearr_32691_32725[(2)] = null);

(statearr_32691_32725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (17))){
var inst_32639 = (state_32673[(7)]);
var inst_32643 = cljs.core.chunk_first.call(null,inst_32639);
var inst_32644 = cljs.core.chunk_rest.call(null,inst_32639);
var inst_32645 = cljs.core.count.call(null,inst_32643);
var inst_32625 = inst_32644;
var inst_32626 = inst_32643;
var inst_32627 = inst_32645;
var inst_32628 = (0);
var state_32673__$1 = (function (){var statearr_32692 = state_32673;
(statearr_32692[(8)] = inst_32627);

(statearr_32692[(9)] = inst_32626);

(statearr_32692[(10)] = inst_32625);

(statearr_32692[(12)] = inst_32628);

return statearr_32692;
})();
var statearr_32693_32726 = state_32673__$1;
(statearr_32693_32726[(2)] = null);

(statearr_32693_32726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (3))){
var inst_32671 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32673__$1,inst_32671);
} else {
if((state_val_32674 === (12))){
var inst_32659 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32694_32727 = state_32673__$1;
(statearr_32694_32727[(2)] = inst_32659);

(statearr_32694_32727[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (2))){
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32673__$1,(4),in$);
} else {
if((state_val_32674 === (23))){
var inst_32667 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32695_32728 = state_32673__$1;
(statearr_32695_32728[(2)] = inst_32667);

(statearr_32695_32728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (19))){
var inst_32654 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32696_32729 = state_32673__$1;
(statearr_32696_32729[(2)] = inst_32654);

(statearr_32696_32729[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (11))){
var inst_32639 = (state_32673[(7)]);
var inst_32625 = (state_32673[(10)]);
var inst_32639__$1 = cljs.core.seq.call(null,inst_32625);
var state_32673__$1 = (function (){var statearr_32697 = state_32673;
(statearr_32697[(7)] = inst_32639__$1);

return statearr_32697;
})();
if(inst_32639__$1){
var statearr_32698_32730 = state_32673__$1;
(statearr_32698_32730[(1)] = (14));

} else {
var statearr_32699_32731 = state_32673__$1;
(statearr_32699_32731[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (9))){
var inst_32661 = (state_32673[(2)]);
var inst_32662 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32673__$1 = (function (){var statearr_32700 = state_32673;
(statearr_32700[(15)] = inst_32661);

return statearr_32700;
})();
if(cljs.core.truth_(inst_32662)){
var statearr_32701_32732 = state_32673__$1;
(statearr_32701_32732[(1)] = (21));

} else {
var statearr_32702_32733 = state_32673__$1;
(statearr_32702_32733[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (5))){
var inst_32617 = cljs.core.async.close_BANG_.call(null,out);
var state_32673__$1 = state_32673;
var statearr_32703_32734 = state_32673__$1;
(statearr_32703_32734[(2)] = inst_32617);

(statearr_32703_32734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (14))){
var inst_32639 = (state_32673[(7)]);
var inst_32641 = cljs.core.chunked_seq_QMARK_.call(null,inst_32639);
var state_32673__$1 = state_32673;
if(inst_32641){
var statearr_32704_32735 = state_32673__$1;
(statearr_32704_32735[(1)] = (17));

} else {
var statearr_32705_32736 = state_32673__$1;
(statearr_32705_32736[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (16))){
var inst_32657 = (state_32673[(2)]);
var state_32673__$1 = state_32673;
var statearr_32706_32737 = state_32673__$1;
(statearr_32706_32737[(2)] = inst_32657);

(statearr_32706_32737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32674 === (10))){
var inst_32626 = (state_32673[(9)]);
var inst_32628 = (state_32673[(12)]);
var inst_32633 = cljs.core._nth.call(null,inst_32626,inst_32628);
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32673__$1,(13),out,inst_32633);
} else {
if((state_val_32674 === (18))){
var inst_32639 = (state_32673[(7)]);
var inst_32648 = cljs.core.first.call(null,inst_32639);
var state_32673__$1 = state_32673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32673__$1,(20),out,inst_32648);
} else {
if((state_val_32674 === (8))){
var inst_32627 = (state_32673[(8)]);
var inst_32628 = (state_32673[(12)]);
var inst_32630 = (inst_32628 < inst_32627);
var inst_32631 = inst_32630;
var state_32673__$1 = state_32673;
if(cljs.core.truth_(inst_32631)){
var statearr_32707_32738 = state_32673__$1;
(statearr_32707_32738[(1)] = (10));

} else {
var statearr_32708_32739 = state_32673__$1;
(statearr_32708_32739[(1)] = (11));

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
});})(c__23014__auto__))
;
return ((function (switch__22949__auto__,c__23014__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22950__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22950__auto____0 = (function (){
var statearr_32712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32712[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22950__auto__);

(statearr_32712[(1)] = (1));

return statearr_32712;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22950__auto____1 = (function (state_32673){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_32673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e32713){if((e32713 instanceof Object)){
var ex__22953__auto__ = e32713;
var statearr_32714_32740 = state_32673;
(statearr_32714_32740[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32741 = state_32673;
state_32673 = G__32741;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22950__auto__ = function(state_32673){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22950__auto____1.call(this,state_32673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22950__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22950__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto__))
})();
var state__23016__auto__ = (function (){var statearr_32715 = f__23015__auto__.call(null);
(statearr_32715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto__);

return statearr_32715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto__))
);

return c__23014__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32742 = [];
var len__20172__auto___32745 = arguments.length;
var i__20173__auto___32746 = (0);
while(true){
if((i__20173__auto___32746 < len__20172__auto___32745)){
args32742.push((arguments[i__20173__auto___32746]));

var G__32747 = (i__20173__auto___32746 + (1));
i__20173__auto___32746 = G__32747;
continue;
} else {
}
break;
}

var G__32744 = args32742.length;
switch (G__32744) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32742.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32749 = [];
var len__20172__auto___32752 = arguments.length;
var i__20173__auto___32753 = (0);
while(true){
if((i__20173__auto___32753 < len__20172__auto___32752)){
args32749.push((arguments[i__20173__auto___32753]));

var G__32754 = (i__20173__auto___32753 + (1));
i__20173__auto___32753 = G__32754;
continue;
} else {
}
break;
}

var G__32751 = args32749.length;
switch (G__32751) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32749.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32756 = [];
var len__20172__auto___32807 = arguments.length;
var i__20173__auto___32808 = (0);
while(true){
if((i__20173__auto___32808 < len__20172__auto___32807)){
args32756.push((arguments[i__20173__auto___32808]));

var G__32809 = (i__20173__auto___32808 + (1));
i__20173__auto___32808 = G__32809;
continue;
} else {
}
break;
}

var G__32758 = args32756.length;
switch (G__32758) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32756.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23014__auto___32811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___32811,out){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___32811,out){
return (function (state_32782){
var state_val_32783 = (state_32782[(1)]);
if((state_val_32783 === (7))){
var inst_32777 = (state_32782[(2)]);
var state_32782__$1 = state_32782;
var statearr_32784_32812 = state_32782__$1;
(statearr_32784_32812[(2)] = inst_32777);

(statearr_32784_32812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (1))){
var inst_32759 = null;
var state_32782__$1 = (function (){var statearr_32785 = state_32782;
(statearr_32785[(7)] = inst_32759);

return statearr_32785;
})();
var statearr_32786_32813 = state_32782__$1;
(statearr_32786_32813[(2)] = null);

(statearr_32786_32813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (4))){
var inst_32762 = (state_32782[(8)]);
var inst_32762__$1 = (state_32782[(2)]);
var inst_32763 = (inst_32762__$1 == null);
var inst_32764 = cljs.core.not.call(null,inst_32763);
var state_32782__$1 = (function (){var statearr_32787 = state_32782;
(statearr_32787[(8)] = inst_32762__$1);

return statearr_32787;
})();
if(inst_32764){
var statearr_32788_32814 = state_32782__$1;
(statearr_32788_32814[(1)] = (5));

} else {
var statearr_32789_32815 = state_32782__$1;
(statearr_32789_32815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (6))){
var state_32782__$1 = state_32782;
var statearr_32790_32816 = state_32782__$1;
(statearr_32790_32816[(2)] = null);

(statearr_32790_32816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (3))){
var inst_32779 = (state_32782[(2)]);
var inst_32780 = cljs.core.async.close_BANG_.call(null,out);
var state_32782__$1 = (function (){var statearr_32791 = state_32782;
(statearr_32791[(9)] = inst_32779);

return statearr_32791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32782__$1,inst_32780);
} else {
if((state_val_32783 === (2))){
var state_32782__$1 = state_32782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32782__$1,(4),ch);
} else {
if((state_val_32783 === (11))){
var inst_32762 = (state_32782[(8)]);
var inst_32771 = (state_32782[(2)]);
var inst_32759 = inst_32762;
var state_32782__$1 = (function (){var statearr_32792 = state_32782;
(statearr_32792[(7)] = inst_32759);

(statearr_32792[(10)] = inst_32771);

return statearr_32792;
})();
var statearr_32793_32817 = state_32782__$1;
(statearr_32793_32817[(2)] = null);

(statearr_32793_32817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (9))){
var inst_32762 = (state_32782[(8)]);
var state_32782__$1 = state_32782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32782__$1,(11),out,inst_32762);
} else {
if((state_val_32783 === (5))){
var inst_32759 = (state_32782[(7)]);
var inst_32762 = (state_32782[(8)]);
var inst_32766 = cljs.core._EQ_.call(null,inst_32762,inst_32759);
var state_32782__$1 = state_32782;
if(inst_32766){
var statearr_32795_32818 = state_32782__$1;
(statearr_32795_32818[(1)] = (8));

} else {
var statearr_32796_32819 = state_32782__$1;
(statearr_32796_32819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (10))){
var inst_32774 = (state_32782[(2)]);
var state_32782__$1 = state_32782;
var statearr_32797_32820 = state_32782__$1;
(statearr_32797_32820[(2)] = inst_32774);

(statearr_32797_32820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32783 === (8))){
var inst_32759 = (state_32782[(7)]);
var tmp32794 = inst_32759;
var inst_32759__$1 = tmp32794;
var state_32782__$1 = (function (){var statearr_32798 = state_32782;
(statearr_32798[(7)] = inst_32759__$1);

return statearr_32798;
})();
var statearr_32799_32821 = state_32782__$1;
(statearr_32799_32821[(2)] = null);

(statearr_32799_32821[(1)] = (2));


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
});})(c__23014__auto___32811,out))
;
return ((function (switch__22949__auto__,c__23014__auto___32811,out){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_32803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32803[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_32803[(1)] = (1));

return statearr_32803;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_32782){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_32782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e32804){if((e32804 instanceof Object)){
var ex__22953__auto__ = e32804;
var statearr_32805_32822 = state_32782;
(statearr_32805_32822[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32823 = state_32782;
state_32782 = G__32823;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_32782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_32782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___32811,out))
})();
var state__23016__auto__ = (function (){var statearr_32806 = f__23015__auto__.call(null);
(statearr_32806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___32811);

return statearr_32806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___32811,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32824 = [];
var len__20172__auto___32894 = arguments.length;
var i__20173__auto___32895 = (0);
while(true){
if((i__20173__auto___32895 < len__20172__auto___32894)){
args32824.push((arguments[i__20173__auto___32895]));

var G__32896 = (i__20173__auto___32895 + (1));
i__20173__auto___32895 = G__32896;
continue;
} else {
}
break;
}

var G__32826 = args32824.length;
switch (G__32826) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32824.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23014__auto___32898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___32898,out){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___32898,out){
return (function (state_32864){
var state_val_32865 = (state_32864[(1)]);
if((state_val_32865 === (7))){
var inst_32860 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32866_32899 = state_32864__$1;
(statearr_32866_32899[(2)] = inst_32860);

(statearr_32866_32899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (1))){
var inst_32827 = (new Array(n));
var inst_32828 = inst_32827;
var inst_32829 = (0);
var state_32864__$1 = (function (){var statearr_32867 = state_32864;
(statearr_32867[(7)] = inst_32828);

(statearr_32867[(8)] = inst_32829);

return statearr_32867;
})();
var statearr_32868_32900 = state_32864__$1;
(statearr_32868_32900[(2)] = null);

(statearr_32868_32900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (4))){
var inst_32832 = (state_32864[(9)]);
var inst_32832__$1 = (state_32864[(2)]);
var inst_32833 = (inst_32832__$1 == null);
var inst_32834 = cljs.core.not.call(null,inst_32833);
var state_32864__$1 = (function (){var statearr_32869 = state_32864;
(statearr_32869[(9)] = inst_32832__$1);

return statearr_32869;
})();
if(inst_32834){
var statearr_32870_32901 = state_32864__$1;
(statearr_32870_32901[(1)] = (5));

} else {
var statearr_32871_32902 = state_32864__$1;
(statearr_32871_32902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (15))){
var inst_32854 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32872_32903 = state_32864__$1;
(statearr_32872_32903[(2)] = inst_32854);

(statearr_32872_32903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (13))){
var state_32864__$1 = state_32864;
var statearr_32873_32904 = state_32864__$1;
(statearr_32873_32904[(2)] = null);

(statearr_32873_32904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (6))){
var inst_32829 = (state_32864[(8)]);
var inst_32850 = (inst_32829 > (0));
var state_32864__$1 = state_32864;
if(cljs.core.truth_(inst_32850)){
var statearr_32874_32905 = state_32864__$1;
(statearr_32874_32905[(1)] = (12));

} else {
var statearr_32875_32906 = state_32864__$1;
(statearr_32875_32906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (3))){
var inst_32862 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32864__$1,inst_32862);
} else {
if((state_val_32865 === (12))){
var inst_32828 = (state_32864[(7)]);
var inst_32852 = cljs.core.vec.call(null,inst_32828);
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32864__$1,(15),out,inst_32852);
} else {
if((state_val_32865 === (2))){
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32864__$1,(4),ch);
} else {
if((state_val_32865 === (11))){
var inst_32844 = (state_32864[(2)]);
var inst_32845 = (new Array(n));
var inst_32828 = inst_32845;
var inst_32829 = (0);
var state_32864__$1 = (function (){var statearr_32876 = state_32864;
(statearr_32876[(10)] = inst_32844);

(statearr_32876[(7)] = inst_32828);

(statearr_32876[(8)] = inst_32829);

return statearr_32876;
})();
var statearr_32877_32907 = state_32864__$1;
(statearr_32877_32907[(2)] = null);

(statearr_32877_32907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (9))){
var inst_32828 = (state_32864[(7)]);
var inst_32842 = cljs.core.vec.call(null,inst_32828);
var state_32864__$1 = state_32864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32864__$1,(11),out,inst_32842);
} else {
if((state_val_32865 === (5))){
var inst_32832 = (state_32864[(9)]);
var inst_32837 = (state_32864[(11)]);
var inst_32828 = (state_32864[(7)]);
var inst_32829 = (state_32864[(8)]);
var inst_32836 = (inst_32828[inst_32829] = inst_32832);
var inst_32837__$1 = (inst_32829 + (1));
var inst_32838 = (inst_32837__$1 < n);
var state_32864__$1 = (function (){var statearr_32878 = state_32864;
(statearr_32878[(12)] = inst_32836);

(statearr_32878[(11)] = inst_32837__$1);

return statearr_32878;
})();
if(cljs.core.truth_(inst_32838)){
var statearr_32879_32908 = state_32864__$1;
(statearr_32879_32908[(1)] = (8));

} else {
var statearr_32880_32909 = state_32864__$1;
(statearr_32880_32909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (14))){
var inst_32857 = (state_32864[(2)]);
var inst_32858 = cljs.core.async.close_BANG_.call(null,out);
var state_32864__$1 = (function (){var statearr_32882 = state_32864;
(statearr_32882[(13)] = inst_32857);

return statearr_32882;
})();
var statearr_32883_32910 = state_32864__$1;
(statearr_32883_32910[(2)] = inst_32858);

(statearr_32883_32910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (10))){
var inst_32848 = (state_32864[(2)]);
var state_32864__$1 = state_32864;
var statearr_32884_32911 = state_32864__$1;
(statearr_32884_32911[(2)] = inst_32848);

(statearr_32884_32911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32865 === (8))){
var inst_32837 = (state_32864[(11)]);
var inst_32828 = (state_32864[(7)]);
var tmp32881 = inst_32828;
var inst_32828__$1 = tmp32881;
var inst_32829 = inst_32837;
var state_32864__$1 = (function (){var statearr_32885 = state_32864;
(statearr_32885[(7)] = inst_32828__$1);

(statearr_32885[(8)] = inst_32829);

return statearr_32885;
})();
var statearr_32886_32912 = state_32864__$1;
(statearr_32886_32912[(2)] = null);

(statearr_32886_32912[(1)] = (2));


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
});})(c__23014__auto___32898,out))
;
return ((function (switch__22949__auto__,c__23014__auto___32898,out){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_32890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32890[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_32890[(1)] = (1));

return statearr_32890;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_32864){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_32864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e32891){if((e32891 instanceof Object)){
var ex__22953__auto__ = e32891;
var statearr_32892_32913 = state_32864;
(statearr_32892_32913[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32914 = state_32864;
state_32864 = G__32914;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_32864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_32864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___32898,out))
})();
var state__23016__auto__ = (function (){var statearr_32893 = f__23015__auto__.call(null);
(statearr_32893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___32898);

return statearr_32893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___32898,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32915 = [];
var len__20172__auto___32989 = arguments.length;
var i__20173__auto___32990 = (0);
while(true){
if((i__20173__auto___32990 < len__20172__auto___32989)){
args32915.push((arguments[i__20173__auto___32990]));

var G__32991 = (i__20173__auto___32990 + (1));
i__20173__auto___32990 = G__32991;
continue;
} else {
}
break;
}

var G__32917 = args32915.length;
switch (G__32917) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32915.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23014__auto___32993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___32993,out){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___32993,out){
return (function (state_32959){
var state_val_32960 = (state_32959[(1)]);
if((state_val_32960 === (7))){
var inst_32955 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
var statearr_32961_32994 = state_32959__$1;
(statearr_32961_32994[(2)] = inst_32955);

(statearr_32961_32994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (1))){
var inst_32918 = [];
var inst_32919 = inst_32918;
var inst_32920 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32959__$1 = (function (){var statearr_32962 = state_32959;
(statearr_32962[(7)] = inst_32919);

(statearr_32962[(8)] = inst_32920);

return statearr_32962;
})();
var statearr_32963_32995 = state_32959__$1;
(statearr_32963_32995[(2)] = null);

(statearr_32963_32995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (4))){
var inst_32923 = (state_32959[(9)]);
var inst_32923__$1 = (state_32959[(2)]);
var inst_32924 = (inst_32923__$1 == null);
var inst_32925 = cljs.core.not.call(null,inst_32924);
var state_32959__$1 = (function (){var statearr_32964 = state_32959;
(statearr_32964[(9)] = inst_32923__$1);

return statearr_32964;
})();
if(inst_32925){
var statearr_32965_32996 = state_32959__$1;
(statearr_32965_32996[(1)] = (5));

} else {
var statearr_32966_32997 = state_32959__$1;
(statearr_32966_32997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (15))){
var inst_32949 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
var statearr_32967_32998 = state_32959__$1;
(statearr_32967_32998[(2)] = inst_32949);

(statearr_32967_32998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (13))){
var state_32959__$1 = state_32959;
var statearr_32968_32999 = state_32959__$1;
(statearr_32968_32999[(2)] = null);

(statearr_32968_32999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (6))){
var inst_32919 = (state_32959[(7)]);
var inst_32944 = inst_32919.length;
var inst_32945 = (inst_32944 > (0));
var state_32959__$1 = state_32959;
if(cljs.core.truth_(inst_32945)){
var statearr_32969_33000 = state_32959__$1;
(statearr_32969_33000[(1)] = (12));

} else {
var statearr_32970_33001 = state_32959__$1;
(statearr_32970_33001[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (3))){
var inst_32957 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32959__$1,inst_32957);
} else {
if((state_val_32960 === (12))){
var inst_32919 = (state_32959[(7)]);
var inst_32947 = cljs.core.vec.call(null,inst_32919);
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32959__$1,(15),out,inst_32947);
} else {
if((state_val_32960 === (2))){
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32959__$1,(4),ch);
} else {
if((state_val_32960 === (11))){
var inst_32923 = (state_32959[(9)]);
var inst_32927 = (state_32959[(10)]);
var inst_32937 = (state_32959[(2)]);
var inst_32938 = [];
var inst_32939 = inst_32938.push(inst_32923);
var inst_32919 = inst_32938;
var inst_32920 = inst_32927;
var state_32959__$1 = (function (){var statearr_32971 = state_32959;
(statearr_32971[(7)] = inst_32919);

(statearr_32971[(8)] = inst_32920);

(statearr_32971[(11)] = inst_32937);

(statearr_32971[(12)] = inst_32939);

return statearr_32971;
})();
var statearr_32972_33002 = state_32959__$1;
(statearr_32972_33002[(2)] = null);

(statearr_32972_33002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (9))){
var inst_32919 = (state_32959[(7)]);
var inst_32935 = cljs.core.vec.call(null,inst_32919);
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32959__$1,(11),out,inst_32935);
} else {
if((state_val_32960 === (5))){
var inst_32920 = (state_32959[(8)]);
var inst_32923 = (state_32959[(9)]);
var inst_32927 = (state_32959[(10)]);
var inst_32927__$1 = f.call(null,inst_32923);
var inst_32928 = cljs.core._EQ_.call(null,inst_32927__$1,inst_32920);
var inst_32929 = cljs.core.keyword_identical_QMARK_.call(null,inst_32920,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32930 = (inst_32928) || (inst_32929);
var state_32959__$1 = (function (){var statearr_32973 = state_32959;
(statearr_32973[(10)] = inst_32927__$1);

return statearr_32973;
})();
if(cljs.core.truth_(inst_32930)){
var statearr_32974_33003 = state_32959__$1;
(statearr_32974_33003[(1)] = (8));

} else {
var statearr_32975_33004 = state_32959__$1;
(statearr_32975_33004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (14))){
var inst_32952 = (state_32959[(2)]);
var inst_32953 = cljs.core.async.close_BANG_.call(null,out);
var state_32959__$1 = (function (){var statearr_32977 = state_32959;
(statearr_32977[(13)] = inst_32952);

return statearr_32977;
})();
var statearr_32978_33005 = state_32959__$1;
(statearr_32978_33005[(2)] = inst_32953);

(statearr_32978_33005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (10))){
var inst_32942 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
var statearr_32979_33006 = state_32959__$1;
(statearr_32979_33006[(2)] = inst_32942);

(statearr_32979_33006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (8))){
var inst_32919 = (state_32959[(7)]);
var inst_32923 = (state_32959[(9)]);
var inst_32927 = (state_32959[(10)]);
var inst_32932 = inst_32919.push(inst_32923);
var tmp32976 = inst_32919;
var inst_32919__$1 = tmp32976;
var inst_32920 = inst_32927;
var state_32959__$1 = (function (){var statearr_32980 = state_32959;
(statearr_32980[(14)] = inst_32932);

(statearr_32980[(7)] = inst_32919__$1);

(statearr_32980[(8)] = inst_32920);

return statearr_32980;
})();
var statearr_32981_33007 = state_32959__$1;
(statearr_32981_33007[(2)] = null);

(statearr_32981_33007[(1)] = (2));


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
});})(c__23014__auto___32993,out))
;
return ((function (switch__22949__auto__,c__23014__auto___32993,out){
return (function() {
var cljs$core$async$state_machine__22950__auto__ = null;
var cljs$core$async$state_machine__22950__auto____0 = (function (){
var statearr_32985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32985[(0)] = cljs$core$async$state_machine__22950__auto__);

(statearr_32985[(1)] = (1));

return statearr_32985;
});
var cljs$core$async$state_machine__22950__auto____1 = (function (state_32959){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_32959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e32986){if((e32986 instanceof Object)){
var ex__22953__auto__ = e32986;
var statearr_32987_33008 = state_32959;
(statearr_32987_33008[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33009 = state_32959;
state_32959 = G__33009;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
cljs$core$async$state_machine__22950__auto__ = function(state_32959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22950__auto____1.call(this,state_32959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22950__auto____0;
cljs$core$async$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22950__auto____1;
return cljs$core$async$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___32993,out))
})();
var state__23016__auto__ = (function (){var statearr_32988 = f__23015__auto__.call(null);
(statearr_32988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___32993);

return statearr_32988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___32993,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map