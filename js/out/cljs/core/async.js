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
if(typeof cljs.core.async.t_cljs$core$async30856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30856 = (function (fn_handler,f,meta30857){
this.fn_handler = fn_handler;
this.f = f;
this.meta30857 = meta30857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30858,meta30857__$1){
var self__ = this;
var _30858__$1 = this;
return (new cljs.core.async.t_cljs$core$async30856(self__.fn_handler,self__.f,meta30857__$1));
});

cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30858){
var self__ = this;
var _30858__$1 = this;
return self__.meta30857;
});

cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta30857","meta30857",181409478,null)], null);
});

cljs.core.async.t_cljs$core$async30856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30856";

cljs.core.async.t_cljs$core$async30856.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async30856");
});

cljs.core.async.__GT_t_cljs$core$async30856 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async30856(fn_handler__$1,f__$1,meta30857){
return (new cljs.core.async.t_cljs$core$async30856(fn_handler__$1,f__$1,meta30857));
});

}

return (new cljs.core.async.t_cljs$core$async30856(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args30861 = [];
var len__20172__auto___30864 = arguments.length;
var i__20173__auto___30865 = (0);
while(true){
if((i__20173__auto___30865 < len__20172__auto___30864)){
args30861.push((arguments[i__20173__auto___30865]));

var G__30866 = (i__20173__auto___30865 + (1));
i__20173__auto___30865 = G__30866;
continue;
} else {
}
break;
}

var G__30863 = args30861.length;
switch (G__30863) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30861.length)].join('')));

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
var args30868 = [];
var len__20172__auto___30871 = arguments.length;
var i__20173__auto___30872 = (0);
while(true){
if((i__20173__auto___30872 < len__20172__auto___30871)){
args30868.push((arguments[i__20173__auto___30872]));

var G__30873 = (i__20173__auto___30872 + (1));
i__20173__auto___30872 = G__30873;
continue;
} else {
}
break;
}

var G__30870 = args30868.length;
switch (G__30870) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30868.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30875 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30875);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30875,ret){
return (function (){
return fn1.call(null,val_30875);
});})(val_30875,ret))
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
var args30876 = [];
var len__20172__auto___30879 = arguments.length;
var i__20173__auto___30880 = (0);
while(true){
if((i__20173__auto___30880 < len__20172__auto___30879)){
args30876.push((arguments[i__20173__auto___30880]));

var G__30881 = (i__20173__auto___30880 + (1));
i__20173__auto___30880 = G__30881;
continue;
} else {
}
break;
}

var G__30878 = args30876.length;
switch (G__30878) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30876.length)].join('')));

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
var n__20017__auto___30883 = n;
var x_30884 = (0);
while(true){
if((x_30884 < n__20017__auto___30883)){
(a[x_30884] = (0));

var G__30885 = (x_30884 + (1));
x_30884 = G__30885;
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

var G__30886 = (i + (1));
i = G__30886;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30890 = (function (alt_flag,flag,meta30891){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30891 = meta30891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30892,meta30891__$1){
var self__ = this;
var _30892__$1 = this;
return (new cljs.core.async.t_cljs$core$async30890(self__.alt_flag,self__.flag,meta30891__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30892){
var self__ = this;
var _30892__$1 = this;
return self__.meta30891;
});})(flag))
;

cljs.core.async.t_cljs$core$async30890.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30890.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30891","meta30891",-59251323,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30890";

cljs.core.async.t_cljs$core$async30890.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async30890");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30890 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30890(alt_flag__$1,flag__$1,meta30891){
return (new cljs.core.async.t_cljs$core$async30890(alt_flag__$1,flag__$1,meta30891));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30890(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30896 = (function (alt_handler,flag,cb,meta30897){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30897 = meta30897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30898,meta30897__$1){
var self__ = this;
var _30898__$1 = this;
return (new cljs.core.async.t_cljs$core$async30896(self__.alt_handler,self__.flag,self__.cb,meta30897__$1));
});

cljs.core.async.t_cljs$core$async30896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30898){
var self__ = this;
var _30898__$1 = this;
return self__.meta30897;
});

cljs.core.async.t_cljs$core$async30896.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30897","meta30897",-433025624,null)], null);
});

cljs.core.async.t_cljs$core$async30896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30896";

cljs.core.async.t_cljs$core$async30896.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async30896");
});

cljs.core.async.__GT_t_cljs$core$async30896 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30896(alt_handler__$1,flag__$1,cb__$1,meta30897){
return (new cljs.core.async.t_cljs$core$async30896(alt_handler__$1,flag__$1,cb__$1,meta30897));
});

}

return (new cljs.core.async.t_cljs$core$async30896(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30899_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30899_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30900_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30900_SHARP_,port], null));
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
var G__30901 = (i + (1));
i = G__30901;
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
var len__20172__auto___30907 = arguments.length;
var i__20173__auto___30908 = (0);
while(true){
if((i__20173__auto___30908 < len__20172__auto___30907)){
args__20179__auto__.push((arguments[i__20173__auto___30908]));

var G__30909 = (i__20173__auto___30908 + (1));
i__20173__auto___30908 = G__30909;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30904){
var map__30905 = p__30904;
var map__30905__$1 = ((((!((map__30905 == null)))?((((map__30905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30905):map__30905);
var opts = map__30905__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30902){
var G__30903 = cljs.core.first.call(null,seq30902);
var seq30902__$1 = cljs.core.next.call(null,seq30902);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30903,seq30902__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30910 = [];
var len__20172__auto___30960 = arguments.length;
var i__20173__auto___30961 = (0);
while(true){
if((i__20173__auto___30961 < len__20172__auto___30960)){
args30910.push((arguments[i__20173__auto___30961]));

var G__30962 = (i__20173__auto___30961 + (1));
i__20173__auto___30961 = G__30962;
continue;
} else {
}
break;
}

var G__30912 = args30910.length;
switch (G__30912) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30910.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22472__auto___30964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___30964){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___30964){
return (function (state_30936){
var state_val_30937 = (state_30936[(1)]);
if((state_val_30937 === (7))){
var inst_30932 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30938_30965 = state_30936__$1;
(statearr_30938_30965[(2)] = inst_30932);

(statearr_30938_30965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (1))){
var state_30936__$1 = state_30936;
var statearr_30939_30966 = state_30936__$1;
(statearr_30939_30966[(2)] = null);

(statearr_30939_30966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (4))){
var inst_30915 = (state_30936[(7)]);
var inst_30915__$1 = (state_30936[(2)]);
var inst_30916 = (inst_30915__$1 == null);
var state_30936__$1 = (function (){var statearr_30940 = state_30936;
(statearr_30940[(7)] = inst_30915__$1);

return statearr_30940;
})();
if(cljs.core.truth_(inst_30916)){
var statearr_30941_30967 = state_30936__$1;
(statearr_30941_30967[(1)] = (5));

} else {
var statearr_30942_30968 = state_30936__$1;
(statearr_30942_30968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (13))){
var state_30936__$1 = state_30936;
var statearr_30943_30969 = state_30936__$1;
(statearr_30943_30969[(2)] = null);

(statearr_30943_30969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (6))){
var inst_30915 = (state_30936[(7)]);
var state_30936__$1 = state_30936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30936__$1,(11),to,inst_30915);
} else {
if((state_val_30937 === (3))){
var inst_30934 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30936__$1,inst_30934);
} else {
if((state_val_30937 === (12))){
var state_30936__$1 = state_30936;
var statearr_30944_30970 = state_30936__$1;
(statearr_30944_30970[(2)] = null);

(statearr_30944_30970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (2))){
var state_30936__$1 = state_30936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30936__$1,(4),from);
} else {
if((state_val_30937 === (11))){
var inst_30925 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
if(cljs.core.truth_(inst_30925)){
var statearr_30945_30971 = state_30936__$1;
(statearr_30945_30971[(1)] = (12));

} else {
var statearr_30946_30972 = state_30936__$1;
(statearr_30946_30972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (9))){
var state_30936__$1 = state_30936;
var statearr_30947_30973 = state_30936__$1;
(statearr_30947_30973[(2)] = null);

(statearr_30947_30973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (5))){
var state_30936__$1 = state_30936;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30948_30974 = state_30936__$1;
(statearr_30948_30974[(1)] = (8));

} else {
var statearr_30949_30975 = state_30936__$1;
(statearr_30949_30975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (14))){
var inst_30930 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30950_30976 = state_30936__$1;
(statearr_30950_30976[(2)] = inst_30930);

(statearr_30950_30976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (10))){
var inst_30922 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30951_30977 = state_30936__$1;
(statearr_30951_30977[(2)] = inst_30922);

(statearr_30951_30977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (8))){
var inst_30919 = cljs.core.async.close_BANG_.call(null,to);
var state_30936__$1 = state_30936;
var statearr_30952_30978 = state_30936__$1;
(statearr_30952_30978[(2)] = inst_30919);

(statearr_30952_30978[(1)] = (10));


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
});})(c__22472__auto___30964))
;
return ((function (switch__22407__auto__,c__22472__auto___30964){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_30956 = [null,null,null,null,null,null,null,null];
(statearr_30956[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_30956[(1)] = (1));

return statearr_30956;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_30936){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_30936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e30957){if((e30957 instanceof Object)){
var ex__22411__auto__ = e30957;
var statearr_30958_30979 = state_30936;
(statearr_30958_30979[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30980 = state_30936;
state_30936 = G__30980;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_30936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_30936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___30964))
})();
var state__22474__auto__ = (function (){var statearr_30959 = f__22473__auto__.call(null);
(statearr_30959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___30964);

return statearr_30959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___30964))
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
return (function (p__31164){
var vec__31165 = p__31164;
var v = cljs.core.nth.call(null,vec__31165,(0),null);
var p = cljs.core.nth.call(null,vec__31165,(1),null);
var job = vec__31165;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22472__auto___31347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___31347,res,vec__31165,v,p,job,jobs,results){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___31347,res,vec__31165,v,p,job,jobs,results){
return (function (state_31170){
var state_val_31171 = (state_31170[(1)]);
if((state_val_31171 === (1))){
var state_31170__$1 = state_31170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31170__$1,(2),res,v);
} else {
if((state_val_31171 === (2))){
var inst_31167 = (state_31170[(2)]);
var inst_31168 = cljs.core.async.close_BANG_.call(null,res);
var state_31170__$1 = (function (){var statearr_31172 = state_31170;
(statearr_31172[(7)] = inst_31167);

return statearr_31172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31170__$1,inst_31168);
} else {
return null;
}
}
});})(c__22472__auto___31347,res,vec__31165,v,p,job,jobs,results))
;
return ((function (switch__22407__auto__,c__22472__auto___31347,res,vec__31165,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0 = (function (){
var statearr_31176 = [null,null,null,null,null,null,null,null];
(statearr_31176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__);

(statearr_31176[(1)] = (1));

return statearr_31176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1 = (function (state_31170){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_31170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e31177){if((e31177 instanceof Object)){
var ex__22411__auto__ = e31177;
var statearr_31178_31348 = state_31170;
(statearr_31178_31348[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31349 = state_31170;
state_31170 = G__31349;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = function(state_31170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1.call(this,state_31170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___31347,res,vec__31165,v,p,job,jobs,results))
})();
var state__22474__auto__ = (function (){var statearr_31179 = f__22473__auto__.call(null);
(statearr_31179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___31347);

return statearr_31179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___31347,res,vec__31165,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31180){
var vec__31181 = p__31180;
var v = cljs.core.nth.call(null,vec__31181,(0),null);
var p = cljs.core.nth.call(null,vec__31181,(1),null);
var job = vec__31181;
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
var n__20017__auto___31350 = n;
var __31351 = (0);
while(true){
if((__31351 < n__20017__auto___31350)){
var G__31182_31352 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31182_31352) {
case "compute":
var c__22472__auto___31354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31351,c__22472__auto___31354,G__31182_31352,n__20017__auto___31350,jobs,results,process,async){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (__31351,c__22472__auto___31354,G__31182_31352,n__20017__auto___31350,jobs,results,process,async){
return (function (state_31195){
var state_val_31196 = (state_31195[(1)]);
if((state_val_31196 === (1))){
var state_31195__$1 = state_31195;
var statearr_31197_31355 = state_31195__$1;
(statearr_31197_31355[(2)] = null);

(statearr_31197_31355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (2))){
var state_31195__$1 = state_31195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31195__$1,(4),jobs);
} else {
if((state_val_31196 === (3))){
var inst_31193 = (state_31195[(2)]);
var state_31195__$1 = state_31195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31195__$1,inst_31193);
} else {
if((state_val_31196 === (4))){
var inst_31185 = (state_31195[(2)]);
var inst_31186 = process.call(null,inst_31185);
var state_31195__$1 = state_31195;
if(cljs.core.truth_(inst_31186)){
var statearr_31198_31356 = state_31195__$1;
(statearr_31198_31356[(1)] = (5));

} else {
var statearr_31199_31357 = state_31195__$1;
(statearr_31199_31357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (5))){
var state_31195__$1 = state_31195;
var statearr_31200_31358 = state_31195__$1;
(statearr_31200_31358[(2)] = null);

(statearr_31200_31358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (6))){
var state_31195__$1 = state_31195;
var statearr_31201_31359 = state_31195__$1;
(statearr_31201_31359[(2)] = null);

(statearr_31201_31359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31196 === (7))){
var inst_31191 = (state_31195[(2)]);
var state_31195__$1 = state_31195;
var statearr_31202_31360 = state_31195__$1;
(statearr_31202_31360[(2)] = inst_31191);

(statearr_31202_31360[(1)] = (3));


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
});})(__31351,c__22472__auto___31354,G__31182_31352,n__20017__auto___31350,jobs,results,process,async))
;
return ((function (__31351,switch__22407__auto__,c__22472__auto___31354,G__31182_31352,n__20017__auto___31350,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0 = (function (){
var statearr_31206 = [null,null,null,null,null,null,null];
(statearr_31206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__);

(statearr_31206[(1)] = (1));

return statearr_31206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1 = (function (state_31195){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_31195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e31207){if((e31207 instanceof Object)){
var ex__22411__auto__ = e31207;
var statearr_31208_31361 = state_31195;
(statearr_31208_31361[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31362 = state_31195;
state_31195 = G__31362;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = function(state_31195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1.call(this,state_31195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__;
})()
;})(__31351,switch__22407__auto__,c__22472__auto___31354,G__31182_31352,n__20017__auto___31350,jobs,results,process,async))
})();
var state__22474__auto__ = (function (){var statearr_31209 = f__22473__auto__.call(null);
(statearr_31209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___31354);

return statearr_31209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(__31351,c__22472__auto___31354,G__31182_31352,n__20017__auto___31350,jobs,results,process,async))
);


break;
case "async":
var c__22472__auto___31363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31351,c__22472__auto___31363,G__31182_31352,n__20017__auto___31350,jobs,results,process,async){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (__31351,c__22472__auto___31363,G__31182_31352,n__20017__auto___31350,jobs,results,process,async){
return (function (state_31222){
var state_val_31223 = (state_31222[(1)]);
if((state_val_31223 === (1))){
var state_31222__$1 = state_31222;
var statearr_31224_31364 = state_31222__$1;
(statearr_31224_31364[(2)] = null);

(statearr_31224_31364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31223 === (2))){
var state_31222__$1 = state_31222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31222__$1,(4),jobs);
} else {
if((state_val_31223 === (3))){
var inst_31220 = (state_31222[(2)]);
var state_31222__$1 = state_31222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31222__$1,inst_31220);
} else {
if((state_val_31223 === (4))){
var inst_31212 = (state_31222[(2)]);
var inst_31213 = async.call(null,inst_31212);
var state_31222__$1 = state_31222;
if(cljs.core.truth_(inst_31213)){
var statearr_31225_31365 = state_31222__$1;
(statearr_31225_31365[(1)] = (5));

} else {
var statearr_31226_31366 = state_31222__$1;
(statearr_31226_31366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31223 === (5))){
var state_31222__$1 = state_31222;
var statearr_31227_31367 = state_31222__$1;
(statearr_31227_31367[(2)] = null);

(statearr_31227_31367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31223 === (6))){
var state_31222__$1 = state_31222;
var statearr_31228_31368 = state_31222__$1;
(statearr_31228_31368[(2)] = null);

(statearr_31228_31368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31223 === (7))){
var inst_31218 = (state_31222[(2)]);
var state_31222__$1 = state_31222;
var statearr_31229_31369 = state_31222__$1;
(statearr_31229_31369[(2)] = inst_31218);

(statearr_31229_31369[(1)] = (3));


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
});})(__31351,c__22472__auto___31363,G__31182_31352,n__20017__auto___31350,jobs,results,process,async))
;
return ((function (__31351,switch__22407__auto__,c__22472__auto___31363,G__31182_31352,n__20017__auto___31350,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0 = (function (){
var statearr_31233 = [null,null,null,null,null,null,null];
(statearr_31233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__);

(statearr_31233[(1)] = (1));

return statearr_31233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1 = (function (state_31222){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_31222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e31234){if((e31234 instanceof Object)){
var ex__22411__auto__ = e31234;
var statearr_31235_31370 = state_31222;
(statearr_31235_31370[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31371 = state_31222;
state_31222 = G__31371;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = function(state_31222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1.call(this,state_31222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__;
})()
;})(__31351,switch__22407__auto__,c__22472__auto___31363,G__31182_31352,n__20017__auto___31350,jobs,results,process,async))
})();
var state__22474__auto__ = (function (){var statearr_31236 = f__22473__auto__.call(null);
(statearr_31236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___31363);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(__31351,c__22472__auto___31363,G__31182_31352,n__20017__auto___31350,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31372 = (__31351 + (1));
__31351 = G__31372;
continue;
} else {
}
break;
}

var c__22472__auto___31373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___31373,jobs,results,process,async){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___31373,jobs,results,process,async){
return (function (state_31258){
var state_val_31259 = (state_31258[(1)]);
if((state_val_31259 === (1))){
var state_31258__$1 = state_31258;
var statearr_31260_31374 = state_31258__$1;
(statearr_31260_31374[(2)] = null);

(statearr_31260_31374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (2))){
var state_31258__$1 = state_31258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31258__$1,(4),from);
} else {
if((state_val_31259 === (3))){
var inst_31256 = (state_31258[(2)]);
var state_31258__$1 = state_31258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31258__$1,inst_31256);
} else {
if((state_val_31259 === (4))){
var inst_31239 = (state_31258[(7)]);
var inst_31239__$1 = (state_31258[(2)]);
var inst_31240 = (inst_31239__$1 == null);
var state_31258__$1 = (function (){var statearr_31261 = state_31258;
(statearr_31261[(7)] = inst_31239__$1);

return statearr_31261;
})();
if(cljs.core.truth_(inst_31240)){
var statearr_31262_31375 = state_31258__$1;
(statearr_31262_31375[(1)] = (5));

} else {
var statearr_31263_31376 = state_31258__$1;
(statearr_31263_31376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (5))){
var inst_31242 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31258__$1 = state_31258;
var statearr_31264_31377 = state_31258__$1;
(statearr_31264_31377[(2)] = inst_31242);

(statearr_31264_31377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (6))){
var inst_31244 = (state_31258[(8)]);
var inst_31239 = (state_31258[(7)]);
var inst_31244__$1 = cljs.core.async.chan.call(null,(1));
var inst_31245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31246 = [inst_31239,inst_31244__$1];
var inst_31247 = (new cljs.core.PersistentVector(null,2,(5),inst_31245,inst_31246,null));
var state_31258__$1 = (function (){var statearr_31265 = state_31258;
(statearr_31265[(8)] = inst_31244__$1);

return statearr_31265;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31258__$1,(8),jobs,inst_31247);
} else {
if((state_val_31259 === (7))){
var inst_31254 = (state_31258[(2)]);
var state_31258__$1 = state_31258;
var statearr_31266_31378 = state_31258__$1;
(statearr_31266_31378[(2)] = inst_31254);

(statearr_31266_31378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (8))){
var inst_31244 = (state_31258[(8)]);
var inst_31249 = (state_31258[(2)]);
var state_31258__$1 = (function (){var statearr_31267 = state_31258;
(statearr_31267[(9)] = inst_31249);

return statearr_31267;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31258__$1,(9),results,inst_31244);
} else {
if((state_val_31259 === (9))){
var inst_31251 = (state_31258[(2)]);
var state_31258__$1 = (function (){var statearr_31268 = state_31258;
(statearr_31268[(10)] = inst_31251);

return statearr_31268;
})();
var statearr_31269_31379 = state_31258__$1;
(statearr_31269_31379[(2)] = null);

(statearr_31269_31379[(1)] = (2));


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
});})(c__22472__auto___31373,jobs,results,process,async))
;
return ((function (switch__22407__auto__,c__22472__auto___31373,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0 = (function (){
var statearr_31273 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__);

(statearr_31273[(1)] = (1));

return statearr_31273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1 = (function (state_31258){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_31258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e31274){if((e31274 instanceof Object)){
var ex__22411__auto__ = e31274;
var statearr_31275_31380 = state_31258;
(statearr_31275_31380[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31381 = state_31258;
state_31258 = G__31381;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = function(state_31258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1.call(this,state_31258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___31373,jobs,results,process,async))
})();
var state__22474__auto__ = (function (){var statearr_31276 = f__22473__auto__.call(null);
(statearr_31276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___31373);

return statearr_31276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___31373,jobs,results,process,async))
);


var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__,jobs,results,process,async){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__,jobs,results,process,async){
return (function (state_31314){
var state_val_31315 = (state_31314[(1)]);
if((state_val_31315 === (7))){
var inst_31310 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31316_31382 = state_31314__$1;
(statearr_31316_31382[(2)] = inst_31310);

(statearr_31316_31382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (20))){
var state_31314__$1 = state_31314;
var statearr_31317_31383 = state_31314__$1;
(statearr_31317_31383[(2)] = null);

(statearr_31317_31383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (1))){
var state_31314__$1 = state_31314;
var statearr_31318_31384 = state_31314__$1;
(statearr_31318_31384[(2)] = null);

(statearr_31318_31384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (4))){
var inst_31279 = (state_31314[(7)]);
var inst_31279__$1 = (state_31314[(2)]);
var inst_31280 = (inst_31279__$1 == null);
var state_31314__$1 = (function (){var statearr_31319 = state_31314;
(statearr_31319[(7)] = inst_31279__$1);

return statearr_31319;
})();
if(cljs.core.truth_(inst_31280)){
var statearr_31320_31385 = state_31314__$1;
(statearr_31320_31385[(1)] = (5));

} else {
var statearr_31321_31386 = state_31314__$1;
(statearr_31321_31386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (15))){
var inst_31292 = (state_31314[(8)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31314__$1,(18),to,inst_31292);
} else {
if((state_val_31315 === (21))){
var inst_31305 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31322_31387 = state_31314__$1;
(statearr_31322_31387[(2)] = inst_31305);

(statearr_31322_31387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (13))){
var inst_31307 = (state_31314[(2)]);
var state_31314__$1 = (function (){var statearr_31323 = state_31314;
(statearr_31323[(9)] = inst_31307);

return statearr_31323;
})();
var statearr_31324_31388 = state_31314__$1;
(statearr_31324_31388[(2)] = null);

(statearr_31324_31388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (6))){
var inst_31279 = (state_31314[(7)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31314__$1,(11),inst_31279);
} else {
if((state_val_31315 === (17))){
var inst_31300 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31300)){
var statearr_31325_31389 = state_31314__$1;
(statearr_31325_31389[(1)] = (19));

} else {
var statearr_31326_31390 = state_31314__$1;
(statearr_31326_31390[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (3))){
var inst_31312 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31314__$1,inst_31312);
} else {
if((state_val_31315 === (12))){
var inst_31289 = (state_31314[(10)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31314__$1,(14),inst_31289);
} else {
if((state_val_31315 === (2))){
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31314__$1,(4),results);
} else {
if((state_val_31315 === (19))){
var state_31314__$1 = state_31314;
var statearr_31327_31391 = state_31314__$1;
(statearr_31327_31391[(2)] = null);

(statearr_31327_31391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (11))){
var inst_31289 = (state_31314[(2)]);
var state_31314__$1 = (function (){var statearr_31328 = state_31314;
(statearr_31328[(10)] = inst_31289);

return statearr_31328;
})();
var statearr_31329_31392 = state_31314__$1;
(statearr_31329_31392[(2)] = null);

(statearr_31329_31392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (9))){
var state_31314__$1 = state_31314;
var statearr_31330_31393 = state_31314__$1;
(statearr_31330_31393[(2)] = null);

(statearr_31330_31393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (5))){
var state_31314__$1 = state_31314;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31331_31394 = state_31314__$1;
(statearr_31331_31394[(1)] = (8));

} else {
var statearr_31332_31395 = state_31314__$1;
(statearr_31332_31395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (14))){
var inst_31292 = (state_31314[(8)]);
var inst_31294 = (state_31314[(11)]);
var inst_31292__$1 = (state_31314[(2)]);
var inst_31293 = (inst_31292__$1 == null);
var inst_31294__$1 = cljs.core.not.call(null,inst_31293);
var state_31314__$1 = (function (){var statearr_31333 = state_31314;
(statearr_31333[(8)] = inst_31292__$1);

(statearr_31333[(11)] = inst_31294__$1);

return statearr_31333;
})();
if(inst_31294__$1){
var statearr_31334_31396 = state_31314__$1;
(statearr_31334_31396[(1)] = (15));

} else {
var statearr_31335_31397 = state_31314__$1;
(statearr_31335_31397[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (16))){
var inst_31294 = (state_31314[(11)]);
var state_31314__$1 = state_31314;
var statearr_31336_31398 = state_31314__$1;
(statearr_31336_31398[(2)] = inst_31294);

(statearr_31336_31398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (10))){
var inst_31286 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31337_31399 = state_31314__$1;
(statearr_31337_31399[(2)] = inst_31286);

(statearr_31337_31399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (18))){
var inst_31297 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31338_31400 = state_31314__$1;
(statearr_31338_31400[(2)] = inst_31297);

(statearr_31338_31400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (8))){
var inst_31283 = cljs.core.async.close_BANG_.call(null,to);
var state_31314__$1 = state_31314;
var statearr_31339_31401 = state_31314__$1;
(statearr_31339_31401[(2)] = inst_31283);

(statearr_31339_31401[(1)] = (10));


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
});})(c__22472__auto__,jobs,results,process,async))
;
return ((function (switch__22407__auto__,c__22472__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0 = (function (){
var statearr_31343 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__);

(statearr_31343[(1)] = (1));

return statearr_31343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1 = (function (state_31314){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_31314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e31344){if((e31344 instanceof Object)){
var ex__22411__auto__ = e31344;
var statearr_31345_31402 = state_31314;
(statearr_31345_31402[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31403 = state_31314;
state_31314 = G__31403;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__ = function(state_31314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1.call(this,state_31314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22408__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__,jobs,results,process,async))
})();
var state__22474__auto__ = (function (){var statearr_31346 = f__22473__auto__.call(null);
(statearr_31346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_31346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__,jobs,results,process,async))
);

return c__22472__auto__;
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
var args31404 = [];
var len__20172__auto___31407 = arguments.length;
var i__20173__auto___31408 = (0);
while(true){
if((i__20173__auto___31408 < len__20172__auto___31407)){
args31404.push((arguments[i__20173__auto___31408]));

var G__31409 = (i__20173__auto___31408 + (1));
i__20173__auto___31408 = G__31409;
continue;
} else {
}
break;
}

var G__31406 = args31404.length;
switch (G__31406) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31404.length)].join('')));

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
var args31411 = [];
var len__20172__auto___31414 = arguments.length;
var i__20173__auto___31415 = (0);
while(true){
if((i__20173__auto___31415 < len__20172__auto___31414)){
args31411.push((arguments[i__20173__auto___31415]));

var G__31416 = (i__20173__auto___31415 + (1));
i__20173__auto___31415 = G__31416;
continue;
} else {
}
break;
}

var G__31413 = args31411.length;
switch (G__31413) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31411.length)].join('')));

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
var args31418 = [];
var len__20172__auto___31471 = arguments.length;
var i__20173__auto___31472 = (0);
while(true){
if((i__20173__auto___31472 < len__20172__auto___31471)){
args31418.push((arguments[i__20173__auto___31472]));

var G__31473 = (i__20173__auto___31472 + (1));
i__20173__auto___31472 = G__31473;
continue;
} else {
}
break;
}

var G__31420 = args31418.length;
switch (G__31420) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31418.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22472__auto___31475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___31475,tc,fc){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___31475,tc,fc){
return (function (state_31446){
var state_val_31447 = (state_31446[(1)]);
if((state_val_31447 === (7))){
var inst_31442 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
var statearr_31448_31476 = state_31446__$1;
(statearr_31448_31476[(2)] = inst_31442);

(statearr_31448_31476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (1))){
var state_31446__$1 = state_31446;
var statearr_31449_31477 = state_31446__$1;
(statearr_31449_31477[(2)] = null);

(statearr_31449_31477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (4))){
var inst_31423 = (state_31446[(7)]);
var inst_31423__$1 = (state_31446[(2)]);
var inst_31424 = (inst_31423__$1 == null);
var state_31446__$1 = (function (){var statearr_31450 = state_31446;
(statearr_31450[(7)] = inst_31423__$1);

return statearr_31450;
})();
if(cljs.core.truth_(inst_31424)){
var statearr_31451_31478 = state_31446__$1;
(statearr_31451_31478[(1)] = (5));

} else {
var statearr_31452_31479 = state_31446__$1;
(statearr_31452_31479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (13))){
var state_31446__$1 = state_31446;
var statearr_31453_31480 = state_31446__$1;
(statearr_31453_31480[(2)] = null);

(statearr_31453_31480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (6))){
var inst_31423 = (state_31446[(7)]);
var inst_31429 = p.call(null,inst_31423);
var state_31446__$1 = state_31446;
if(cljs.core.truth_(inst_31429)){
var statearr_31454_31481 = state_31446__$1;
(statearr_31454_31481[(1)] = (9));

} else {
var statearr_31455_31482 = state_31446__$1;
(statearr_31455_31482[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (3))){
var inst_31444 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31446__$1,inst_31444);
} else {
if((state_val_31447 === (12))){
var state_31446__$1 = state_31446;
var statearr_31456_31483 = state_31446__$1;
(statearr_31456_31483[(2)] = null);

(statearr_31456_31483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (2))){
var state_31446__$1 = state_31446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31446__$1,(4),ch);
} else {
if((state_val_31447 === (11))){
var inst_31423 = (state_31446[(7)]);
var inst_31433 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31446__$1,(8),inst_31433,inst_31423);
} else {
if((state_val_31447 === (9))){
var state_31446__$1 = state_31446;
var statearr_31457_31484 = state_31446__$1;
(statearr_31457_31484[(2)] = tc);

(statearr_31457_31484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (5))){
var inst_31426 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31427 = cljs.core.async.close_BANG_.call(null,fc);
var state_31446__$1 = (function (){var statearr_31458 = state_31446;
(statearr_31458[(8)] = inst_31426);

return statearr_31458;
})();
var statearr_31459_31485 = state_31446__$1;
(statearr_31459_31485[(2)] = inst_31427);

(statearr_31459_31485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (14))){
var inst_31440 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
var statearr_31460_31486 = state_31446__$1;
(statearr_31460_31486[(2)] = inst_31440);

(statearr_31460_31486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (10))){
var state_31446__$1 = state_31446;
var statearr_31461_31487 = state_31446__$1;
(statearr_31461_31487[(2)] = fc);

(statearr_31461_31487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31447 === (8))){
var inst_31435 = (state_31446[(2)]);
var state_31446__$1 = state_31446;
if(cljs.core.truth_(inst_31435)){
var statearr_31462_31488 = state_31446__$1;
(statearr_31462_31488[(1)] = (12));

} else {
var statearr_31463_31489 = state_31446__$1;
(statearr_31463_31489[(1)] = (13));

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
});})(c__22472__auto___31475,tc,fc))
;
return ((function (switch__22407__auto__,c__22472__auto___31475,tc,fc){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_31467 = [null,null,null,null,null,null,null,null,null];
(statearr_31467[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_31467[(1)] = (1));

return statearr_31467;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_31446){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_31446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e31468){if((e31468 instanceof Object)){
var ex__22411__auto__ = e31468;
var statearr_31469_31490 = state_31446;
(statearr_31469_31490[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31491 = state_31446;
state_31446 = G__31491;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_31446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_31446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___31475,tc,fc))
})();
var state__22474__auto__ = (function (){var statearr_31470 = f__22473__auto__.call(null);
(statearr_31470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___31475);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___31475,tc,fc))
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
var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__){
return (function (state_31538){
var state_val_31539 = (state_31538[(1)]);
if((state_val_31539 === (1))){
var inst_31524 = init;
var state_31538__$1 = (function (){var statearr_31540 = state_31538;
(statearr_31540[(7)] = inst_31524);

return statearr_31540;
})();
var statearr_31541_31556 = state_31538__$1;
(statearr_31541_31556[(2)] = null);

(statearr_31541_31556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31539 === (2))){
var state_31538__$1 = state_31538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31538__$1,(4),ch);
} else {
if((state_val_31539 === (3))){
var inst_31536 = (state_31538[(2)]);
var state_31538__$1 = state_31538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31538__$1,inst_31536);
} else {
if((state_val_31539 === (4))){
var inst_31527 = (state_31538[(8)]);
var inst_31527__$1 = (state_31538[(2)]);
var inst_31528 = (inst_31527__$1 == null);
var state_31538__$1 = (function (){var statearr_31542 = state_31538;
(statearr_31542[(8)] = inst_31527__$1);

return statearr_31542;
})();
if(cljs.core.truth_(inst_31528)){
var statearr_31543_31557 = state_31538__$1;
(statearr_31543_31557[(1)] = (5));

} else {
var statearr_31544_31558 = state_31538__$1;
(statearr_31544_31558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31539 === (5))){
var inst_31524 = (state_31538[(7)]);
var state_31538__$1 = state_31538;
var statearr_31545_31559 = state_31538__$1;
(statearr_31545_31559[(2)] = inst_31524);

(statearr_31545_31559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31539 === (6))){
var inst_31524 = (state_31538[(7)]);
var inst_31527 = (state_31538[(8)]);
var inst_31531 = f.call(null,inst_31524,inst_31527);
var inst_31524__$1 = inst_31531;
var state_31538__$1 = (function (){var statearr_31546 = state_31538;
(statearr_31546[(7)] = inst_31524__$1);

return statearr_31546;
})();
var statearr_31547_31560 = state_31538__$1;
(statearr_31547_31560[(2)] = null);

(statearr_31547_31560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31539 === (7))){
var inst_31534 = (state_31538[(2)]);
var state_31538__$1 = state_31538;
var statearr_31548_31561 = state_31538__$1;
(statearr_31548_31561[(2)] = inst_31534);

(statearr_31548_31561[(1)] = (3));


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
});})(c__22472__auto__))
;
return ((function (switch__22407__auto__,c__22472__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22408__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22408__auto____0 = (function (){
var statearr_31552 = [null,null,null,null,null,null,null,null,null];
(statearr_31552[(0)] = cljs$core$async$reduce_$_state_machine__22408__auto__);

(statearr_31552[(1)] = (1));

return statearr_31552;
});
var cljs$core$async$reduce_$_state_machine__22408__auto____1 = (function (state_31538){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_31538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e31553){if((e31553 instanceof Object)){
var ex__22411__auto__ = e31553;
var statearr_31554_31562 = state_31538;
(statearr_31554_31562[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31563 = state_31538;
state_31538 = G__31563;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22408__auto__ = function(state_31538){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22408__auto____1.call(this,state_31538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22408__auto____0;
cljs$core$async$reduce_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22408__auto____1;
return cljs$core$async$reduce_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__))
})();
var state__22474__auto__ = (function (){var statearr_31555 = f__22473__auto__.call(null);
(statearr_31555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__))
);

return c__22472__auto__;
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
var args31564 = [];
var len__20172__auto___31616 = arguments.length;
var i__20173__auto___31617 = (0);
while(true){
if((i__20173__auto___31617 < len__20172__auto___31616)){
args31564.push((arguments[i__20173__auto___31617]));

var G__31618 = (i__20173__auto___31617 + (1));
i__20173__auto___31617 = G__31618;
continue;
} else {
}
break;
}

var G__31566 = args31564.length;
switch (G__31566) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31564.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__){
return (function (state_31591){
var state_val_31592 = (state_31591[(1)]);
if((state_val_31592 === (7))){
var inst_31573 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
var statearr_31593_31620 = state_31591__$1;
(statearr_31593_31620[(2)] = inst_31573);

(statearr_31593_31620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (1))){
var inst_31567 = cljs.core.seq.call(null,coll);
var inst_31568 = inst_31567;
var state_31591__$1 = (function (){var statearr_31594 = state_31591;
(statearr_31594[(7)] = inst_31568);

return statearr_31594;
})();
var statearr_31595_31621 = state_31591__$1;
(statearr_31595_31621[(2)] = null);

(statearr_31595_31621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (4))){
var inst_31568 = (state_31591[(7)]);
var inst_31571 = cljs.core.first.call(null,inst_31568);
var state_31591__$1 = state_31591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31591__$1,(7),ch,inst_31571);
} else {
if((state_val_31592 === (13))){
var inst_31585 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
var statearr_31596_31622 = state_31591__$1;
(statearr_31596_31622[(2)] = inst_31585);

(statearr_31596_31622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (6))){
var inst_31576 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
if(cljs.core.truth_(inst_31576)){
var statearr_31597_31623 = state_31591__$1;
(statearr_31597_31623[(1)] = (8));

} else {
var statearr_31598_31624 = state_31591__$1;
(statearr_31598_31624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (3))){
var inst_31589 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31591__$1,inst_31589);
} else {
if((state_val_31592 === (12))){
var state_31591__$1 = state_31591;
var statearr_31599_31625 = state_31591__$1;
(statearr_31599_31625[(2)] = null);

(statearr_31599_31625[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (2))){
var inst_31568 = (state_31591[(7)]);
var state_31591__$1 = state_31591;
if(cljs.core.truth_(inst_31568)){
var statearr_31600_31626 = state_31591__$1;
(statearr_31600_31626[(1)] = (4));

} else {
var statearr_31601_31627 = state_31591__$1;
(statearr_31601_31627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (11))){
var inst_31582 = cljs.core.async.close_BANG_.call(null,ch);
var state_31591__$1 = state_31591;
var statearr_31602_31628 = state_31591__$1;
(statearr_31602_31628[(2)] = inst_31582);

(statearr_31602_31628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (9))){
var state_31591__$1 = state_31591;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31603_31629 = state_31591__$1;
(statearr_31603_31629[(1)] = (11));

} else {
var statearr_31604_31630 = state_31591__$1;
(statearr_31604_31630[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (5))){
var inst_31568 = (state_31591[(7)]);
var state_31591__$1 = state_31591;
var statearr_31605_31631 = state_31591__$1;
(statearr_31605_31631[(2)] = inst_31568);

(statearr_31605_31631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (10))){
var inst_31587 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
var statearr_31606_31632 = state_31591__$1;
(statearr_31606_31632[(2)] = inst_31587);

(statearr_31606_31632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (8))){
var inst_31568 = (state_31591[(7)]);
var inst_31578 = cljs.core.next.call(null,inst_31568);
var inst_31568__$1 = inst_31578;
var state_31591__$1 = (function (){var statearr_31607 = state_31591;
(statearr_31607[(7)] = inst_31568__$1);

return statearr_31607;
})();
var statearr_31608_31633 = state_31591__$1;
(statearr_31608_31633[(2)] = null);

(statearr_31608_31633[(1)] = (2));


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
});})(c__22472__auto__))
;
return ((function (switch__22407__auto__,c__22472__auto__){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_31612 = [null,null,null,null,null,null,null,null];
(statearr_31612[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_31612[(1)] = (1));

return statearr_31612;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_31591){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_31591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e31613){if((e31613 instanceof Object)){
var ex__22411__auto__ = e31613;
var statearr_31614_31634 = state_31591;
(statearr_31614_31634[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31635 = state_31591;
state_31591 = G__31635;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_31591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_31591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__))
})();
var state__22474__auto__ = (function (){var statearr_31615 = f__22473__auto__.call(null);
(statearr_31615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_31615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__))
);

return c__22472__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async31857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31857 = (function (mult,ch,cs,meta31858){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31858 = meta31858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31859,meta31858__$1){
var self__ = this;
var _31859__$1 = this;
return (new cljs.core.async.t_cljs$core$async31857(self__.mult,self__.ch,self__.cs,meta31858__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31859){
var self__ = this;
var _31859__$1 = this;
return self__.meta31858;
});})(cs))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31857.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31857.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31858","meta31858",805916421,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31857";

cljs.core.async.t_cljs$core$async31857.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async31857");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31857 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31857(mult__$1,ch__$1,cs__$1,meta31858){
return (new cljs.core.async.t_cljs$core$async31857(mult__$1,ch__$1,cs__$1,meta31858));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31857(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22472__auto___32078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___32078,cs,m,dchan,dctr,done){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___32078,cs,m,dchan,dctr,done){
return (function (state_31990){
var state_val_31991 = (state_31990[(1)]);
if((state_val_31991 === (7))){
var inst_31986 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_31992_32079 = state_31990__$1;
(statearr_31992_32079[(2)] = inst_31986);

(statearr_31992_32079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (20))){
var inst_31891 = (state_31990[(7)]);
var inst_31901 = cljs.core.first.call(null,inst_31891);
var inst_31902 = cljs.core.nth.call(null,inst_31901,(0),null);
var inst_31903 = cljs.core.nth.call(null,inst_31901,(1),null);
var state_31990__$1 = (function (){var statearr_31993 = state_31990;
(statearr_31993[(8)] = inst_31902);

return statearr_31993;
})();
if(cljs.core.truth_(inst_31903)){
var statearr_31994_32080 = state_31990__$1;
(statearr_31994_32080[(1)] = (22));

} else {
var statearr_31995_32081 = state_31990__$1;
(statearr_31995_32081[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (27))){
var inst_31862 = (state_31990[(9)]);
var inst_31933 = (state_31990[(10)]);
var inst_31938 = (state_31990[(11)]);
var inst_31931 = (state_31990[(12)]);
var inst_31938__$1 = cljs.core._nth.call(null,inst_31931,inst_31933);
var inst_31939 = cljs.core.async.put_BANG_.call(null,inst_31938__$1,inst_31862,done);
var state_31990__$1 = (function (){var statearr_31996 = state_31990;
(statearr_31996[(11)] = inst_31938__$1);

return statearr_31996;
})();
if(cljs.core.truth_(inst_31939)){
var statearr_31997_32082 = state_31990__$1;
(statearr_31997_32082[(1)] = (30));

} else {
var statearr_31998_32083 = state_31990__$1;
(statearr_31998_32083[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (1))){
var state_31990__$1 = state_31990;
var statearr_31999_32084 = state_31990__$1;
(statearr_31999_32084[(2)] = null);

(statearr_31999_32084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (24))){
var inst_31891 = (state_31990[(7)]);
var inst_31908 = (state_31990[(2)]);
var inst_31909 = cljs.core.next.call(null,inst_31891);
var inst_31871 = inst_31909;
var inst_31872 = null;
var inst_31873 = (0);
var inst_31874 = (0);
var state_31990__$1 = (function (){var statearr_32000 = state_31990;
(statearr_32000[(13)] = inst_31873);

(statearr_32000[(14)] = inst_31871);

(statearr_32000[(15)] = inst_31908);

(statearr_32000[(16)] = inst_31872);

(statearr_32000[(17)] = inst_31874);

return statearr_32000;
})();
var statearr_32001_32085 = state_31990__$1;
(statearr_32001_32085[(2)] = null);

(statearr_32001_32085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (39))){
var state_31990__$1 = state_31990;
var statearr_32005_32086 = state_31990__$1;
(statearr_32005_32086[(2)] = null);

(statearr_32005_32086[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (4))){
var inst_31862 = (state_31990[(9)]);
var inst_31862__$1 = (state_31990[(2)]);
var inst_31863 = (inst_31862__$1 == null);
var state_31990__$1 = (function (){var statearr_32006 = state_31990;
(statearr_32006[(9)] = inst_31862__$1);

return statearr_32006;
})();
if(cljs.core.truth_(inst_31863)){
var statearr_32007_32087 = state_31990__$1;
(statearr_32007_32087[(1)] = (5));

} else {
var statearr_32008_32088 = state_31990__$1;
(statearr_32008_32088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (15))){
var inst_31873 = (state_31990[(13)]);
var inst_31871 = (state_31990[(14)]);
var inst_31872 = (state_31990[(16)]);
var inst_31874 = (state_31990[(17)]);
var inst_31887 = (state_31990[(2)]);
var inst_31888 = (inst_31874 + (1));
var tmp32002 = inst_31873;
var tmp32003 = inst_31871;
var tmp32004 = inst_31872;
var inst_31871__$1 = tmp32003;
var inst_31872__$1 = tmp32004;
var inst_31873__$1 = tmp32002;
var inst_31874__$1 = inst_31888;
var state_31990__$1 = (function (){var statearr_32009 = state_31990;
(statearr_32009[(13)] = inst_31873__$1);

(statearr_32009[(14)] = inst_31871__$1);

(statearr_32009[(16)] = inst_31872__$1);

(statearr_32009[(17)] = inst_31874__$1);

(statearr_32009[(18)] = inst_31887);

return statearr_32009;
})();
var statearr_32010_32089 = state_31990__$1;
(statearr_32010_32089[(2)] = null);

(statearr_32010_32089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (21))){
var inst_31912 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_32014_32090 = state_31990__$1;
(statearr_32014_32090[(2)] = inst_31912);

(statearr_32014_32090[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (31))){
var inst_31938 = (state_31990[(11)]);
var inst_31942 = done.call(null,null);
var inst_31943 = cljs.core.async.untap_STAR_.call(null,m,inst_31938);
var state_31990__$1 = (function (){var statearr_32015 = state_31990;
(statearr_32015[(19)] = inst_31942);

return statearr_32015;
})();
var statearr_32016_32091 = state_31990__$1;
(statearr_32016_32091[(2)] = inst_31943);

(statearr_32016_32091[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (32))){
var inst_31933 = (state_31990[(10)]);
var inst_31931 = (state_31990[(12)]);
var inst_31932 = (state_31990[(20)]);
var inst_31930 = (state_31990[(21)]);
var inst_31945 = (state_31990[(2)]);
var inst_31946 = (inst_31933 + (1));
var tmp32011 = inst_31931;
var tmp32012 = inst_31932;
var tmp32013 = inst_31930;
var inst_31930__$1 = tmp32013;
var inst_31931__$1 = tmp32011;
var inst_31932__$1 = tmp32012;
var inst_31933__$1 = inst_31946;
var state_31990__$1 = (function (){var statearr_32017 = state_31990;
(statearr_32017[(22)] = inst_31945);

(statearr_32017[(10)] = inst_31933__$1);

(statearr_32017[(12)] = inst_31931__$1);

(statearr_32017[(20)] = inst_31932__$1);

(statearr_32017[(21)] = inst_31930__$1);

return statearr_32017;
})();
var statearr_32018_32092 = state_31990__$1;
(statearr_32018_32092[(2)] = null);

(statearr_32018_32092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (40))){
var inst_31958 = (state_31990[(23)]);
var inst_31962 = done.call(null,null);
var inst_31963 = cljs.core.async.untap_STAR_.call(null,m,inst_31958);
var state_31990__$1 = (function (){var statearr_32019 = state_31990;
(statearr_32019[(24)] = inst_31962);

return statearr_32019;
})();
var statearr_32020_32093 = state_31990__$1;
(statearr_32020_32093[(2)] = inst_31963);

(statearr_32020_32093[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (33))){
var inst_31949 = (state_31990[(25)]);
var inst_31951 = cljs.core.chunked_seq_QMARK_.call(null,inst_31949);
var state_31990__$1 = state_31990;
if(inst_31951){
var statearr_32021_32094 = state_31990__$1;
(statearr_32021_32094[(1)] = (36));

} else {
var statearr_32022_32095 = state_31990__$1;
(statearr_32022_32095[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (13))){
var inst_31881 = (state_31990[(26)]);
var inst_31884 = cljs.core.async.close_BANG_.call(null,inst_31881);
var state_31990__$1 = state_31990;
var statearr_32023_32096 = state_31990__$1;
(statearr_32023_32096[(2)] = inst_31884);

(statearr_32023_32096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (22))){
var inst_31902 = (state_31990[(8)]);
var inst_31905 = cljs.core.async.close_BANG_.call(null,inst_31902);
var state_31990__$1 = state_31990;
var statearr_32024_32097 = state_31990__$1;
(statearr_32024_32097[(2)] = inst_31905);

(statearr_32024_32097[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (36))){
var inst_31949 = (state_31990[(25)]);
var inst_31953 = cljs.core.chunk_first.call(null,inst_31949);
var inst_31954 = cljs.core.chunk_rest.call(null,inst_31949);
var inst_31955 = cljs.core.count.call(null,inst_31953);
var inst_31930 = inst_31954;
var inst_31931 = inst_31953;
var inst_31932 = inst_31955;
var inst_31933 = (0);
var state_31990__$1 = (function (){var statearr_32025 = state_31990;
(statearr_32025[(10)] = inst_31933);

(statearr_32025[(12)] = inst_31931);

(statearr_32025[(20)] = inst_31932);

(statearr_32025[(21)] = inst_31930);

return statearr_32025;
})();
var statearr_32026_32098 = state_31990__$1;
(statearr_32026_32098[(2)] = null);

(statearr_32026_32098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (41))){
var inst_31949 = (state_31990[(25)]);
var inst_31965 = (state_31990[(2)]);
var inst_31966 = cljs.core.next.call(null,inst_31949);
var inst_31930 = inst_31966;
var inst_31931 = null;
var inst_31932 = (0);
var inst_31933 = (0);
var state_31990__$1 = (function (){var statearr_32027 = state_31990;
(statearr_32027[(10)] = inst_31933);

(statearr_32027[(27)] = inst_31965);

(statearr_32027[(12)] = inst_31931);

(statearr_32027[(20)] = inst_31932);

(statearr_32027[(21)] = inst_31930);

return statearr_32027;
})();
var statearr_32028_32099 = state_31990__$1;
(statearr_32028_32099[(2)] = null);

(statearr_32028_32099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (43))){
var state_31990__$1 = state_31990;
var statearr_32029_32100 = state_31990__$1;
(statearr_32029_32100[(2)] = null);

(statearr_32029_32100[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (29))){
var inst_31974 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_32030_32101 = state_31990__$1;
(statearr_32030_32101[(2)] = inst_31974);

(statearr_32030_32101[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (44))){
var inst_31983 = (state_31990[(2)]);
var state_31990__$1 = (function (){var statearr_32031 = state_31990;
(statearr_32031[(28)] = inst_31983);

return statearr_32031;
})();
var statearr_32032_32102 = state_31990__$1;
(statearr_32032_32102[(2)] = null);

(statearr_32032_32102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (6))){
var inst_31922 = (state_31990[(29)]);
var inst_31921 = cljs.core.deref.call(null,cs);
var inst_31922__$1 = cljs.core.keys.call(null,inst_31921);
var inst_31923 = cljs.core.count.call(null,inst_31922__$1);
var inst_31924 = cljs.core.reset_BANG_.call(null,dctr,inst_31923);
var inst_31929 = cljs.core.seq.call(null,inst_31922__$1);
var inst_31930 = inst_31929;
var inst_31931 = null;
var inst_31932 = (0);
var inst_31933 = (0);
var state_31990__$1 = (function (){var statearr_32033 = state_31990;
(statearr_32033[(10)] = inst_31933);

(statearr_32033[(12)] = inst_31931);

(statearr_32033[(29)] = inst_31922__$1);

(statearr_32033[(20)] = inst_31932);

(statearr_32033[(21)] = inst_31930);

(statearr_32033[(30)] = inst_31924);

return statearr_32033;
})();
var statearr_32034_32103 = state_31990__$1;
(statearr_32034_32103[(2)] = null);

(statearr_32034_32103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (28))){
var inst_31949 = (state_31990[(25)]);
var inst_31930 = (state_31990[(21)]);
var inst_31949__$1 = cljs.core.seq.call(null,inst_31930);
var state_31990__$1 = (function (){var statearr_32035 = state_31990;
(statearr_32035[(25)] = inst_31949__$1);

return statearr_32035;
})();
if(inst_31949__$1){
var statearr_32036_32104 = state_31990__$1;
(statearr_32036_32104[(1)] = (33));

} else {
var statearr_32037_32105 = state_31990__$1;
(statearr_32037_32105[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (25))){
var inst_31933 = (state_31990[(10)]);
var inst_31932 = (state_31990[(20)]);
var inst_31935 = (inst_31933 < inst_31932);
var inst_31936 = inst_31935;
var state_31990__$1 = state_31990;
if(cljs.core.truth_(inst_31936)){
var statearr_32038_32106 = state_31990__$1;
(statearr_32038_32106[(1)] = (27));

} else {
var statearr_32039_32107 = state_31990__$1;
(statearr_32039_32107[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (34))){
var state_31990__$1 = state_31990;
var statearr_32040_32108 = state_31990__$1;
(statearr_32040_32108[(2)] = null);

(statearr_32040_32108[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (17))){
var state_31990__$1 = state_31990;
var statearr_32041_32109 = state_31990__$1;
(statearr_32041_32109[(2)] = null);

(statearr_32041_32109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (3))){
var inst_31988 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31990__$1,inst_31988);
} else {
if((state_val_31991 === (12))){
var inst_31917 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_32042_32110 = state_31990__$1;
(statearr_32042_32110[(2)] = inst_31917);

(statearr_32042_32110[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (2))){
var state_31990__$1 = state_31990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31990__$1,(4),ch);
} else {
if((state_val_31991 === (23))){
var state_31990__$1 = state_31990;
var statearr_32043_32111 = state_31990__$1;
(statearr_32043_32111[(2)] = null);

(statearr_32043_32111[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (35))){
var inst_31972 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_32044_32112 = state_31990__$1;
(statearr_32044_32112[(2)] = inst_31972);

(statearr_32044_32112[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (19))){
var inst_31891 = (state_31990[(7)]);
var inst_31895 = cljs.core.chunk_first.call(null,inst_31891);
var inst_31896 = cljs.core.chunk_rest.call(null,inst_31891);
var inst_31897 = cljs.core.count.call(null,inst_31895);
var inst_31871 = inst_31896;
var inst_31872 = inst_31895;
var inst_31873 = inst_31897;
var inst_31874 = (0);
var state_31990__$1 = (function (){var statearr_32045 = state_31990;
(statearr_32045[(13)] = inst_31873);

(statearr_32045[(14)] = inst_31871);

(statearr_32045[(16)] = inst_31872);

(statearr_32045[(17)] = inst_31874);

return statearr_32045;
})();
var statearr_32046_32113 = state_31990__$1;
(statearr_32046_32113[(2)] = null);

(statearr_32046_32113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (11))){
var inst_31871 = (state_31990[(14)]);
var inst_31891 = (state_31990[(7)]);
var inst_31891__$1 = cljs.core.seq.call(null,inst_31871);
var state_31990__$1 = (function (){var statearr_32047 = state_31990;
(statearr_32047[(7)] = inst_31891__$1);

return statearr_32047;
})();
if(inst_31891__$1){
var statearr_32048_32114 = state_31990__$1;
(statearr_32048_32114[(1)] = (16));

} else {
var statearr_32049_32115 = state_31990__$1;
(statearr_32049_32115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (9))){
var inst_31919 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_32050_32116 = state_31990__$1;
(statearr_32050_32116[(2)] = inst_31919);

(statearr_32050_32116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (5))){
var inst_31869 = cljs.core.deref.call(null,cs);
var inst_31870 = cljs.core.seq.call(null,inst_31869);
var inst_31871 = inst_31870;
var inst_31872 = null;
var inst_31873 = (0);
var inst_31874 = (0);
var state_31990__$1 = (function (){var statearr_32051 = state_31990;
(statearr_32051[(13)] = inst_31873);

(statearr_32051[(14)] = inst_31871);

(statearr_32051[(16)] = inst_31872);

(statearr_32051[(17)] = inst_31874);

return statearr_32051;
})();
var statearr_32052_32117 = state_31990__$1;
(statearr_32052_32117[(2)] = null);

(statearr_32052_32117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (14))){
var state_31990__$1 = state_31990;
var statearr_32053_32118 = state_31990__$1;
(statearr_32053_32118[(2)] = null);

(statearr_32053_32118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (45))){
var inst_31980 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_32054_32119 = state_31990__$1;
(statearr_32054_32119[(2)] = inst_31980);

(statearr_32054_32119[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (26))){
var inst_31922 = (state_31990[(29)]);
var inst_31976 = (state_31990[(2)]);
var inst_31977 = cljs.core.seq.call(null,inst_31922);
var state_31990__$1 = (function (){var statearr_32055 = state_31990;
(statearr_32055[(31)] = inst_31976);

return statearr_32055;
})();
if(inst_31977){
var statearr_32056_32120 = state_31990__$1;
(statearr_32056_32120[(1)] = (42));

} else {
var statearr_32057_32121 = state_31990__$1;
(statearr_32057_32121[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (16))){
var inst_31891 = (state_31990[(7)]);
var inst_31893 = cljs.core.chunked_seq_QMARK_.call(null,inst_31891);
var state_31990__$1 = state_31990;
if(inst_31893){
var statearr_32058_32122 = state_31990__$1;
(statearr_32058_32122[(1)] = (19));

} else {
var statearr_32059_32123 = state_31990__$1;
(statearr_32059_32123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (38))){
var inst_31969 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_32060_32124 = state_31990__$1;
(statearr_32060_32124[(2)] = inst_31969);

(statearr_32060_32124[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (30))){
var state_31990__$1 = state_31990;
var statearr_32061_32125 = state_31990__$1;
(statearr_32061_32125[(2)] = null);

(statearr_32061_32125[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (10))){
var inst_31872 = (state_31990[(16)]);
var inst_31874 = (state_31990[(17)]);
var inst_31880 = cljs.core._nth.call(null,inst_31872,inst_31874);
var inst_31881 = cljs.core.nth.call(null,inst_31880,(0),null);
var inst_31882 = cljs.core.nth.call(null,inst_31880,(1),null);
var state_31990__$1 = (function (){var statearr_32062 = state_31990;
(statearr_32062[(26)] = inst_31881);

return statearr_32062;
})();
if(cljs.core.truth_(inst_31882)){
var statearr_32063_32126 = state_31990__$1;
(statearr_32063_32126[(1)] = (13));

} else {
var statearr_32064_32127 = state_31990__$1;
(statearr_32064_32127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (18))){
var inst_31915 = (state_31990[(2)]);
var state_31990__$1 = state_31990;
var statearr_32065_32128 = state_31990__$1;
(statearr_32065_32128[(2)] = inst_31915);

(statearr_32065_32128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (42))){
var state_31990__$1 = state_31990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31990__$1,(45),dchan);
} else {
if((state_val_31991 === (37))){
var inst_31862 = (state_31990[(9)]);
var inst_31958 = (state_31990[(23)]);
var inst_31949 = (state_31990[(25)]);
var inst_31958__$1 = cljs.core.first.call(null,inst_31949);
var inst_31959 = cljs.core.async.put_BANG_.call(null,inst_31958__$1,inst_31862,done);
var state_31990__$1 = (function (){var statearr_32066 = state_31990;
(statearr_32066[(23)] = inst_31958__$1);

return statearr_32066;
})();
if(cljs.core.truth_(inst_31959)){
var statearr_32067_32129 = state_31990__$1;
(statearr_32067_32129[(1)] = (39));

} else {
var statearr_32068_32130 = state_31990__$1;
(statearr_32068_32130[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31991 === (8))){
var inst_31873 = (state_31990[(13)]);
var inst_31874 = (state_31990[(17)]);
var inst_31876 = (inst_31874 < inst_31873);
var inst_31877 = inst_31876;
var state_31990__$1 = state_31990;
if(cljs.core.truth_(inst_31877)){
var statearr_32069_32131 = state_31990__$1;
(statearr_32069_32131[(1)] = (10));

} else {
var statearr_32070_32132 = state_31990__$1;
(statearr_32070_32132[(1)] = (11));

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
});})(c__22472__auto___32078,cs,m,dchan,dctr,done))
;
return ((function (switch__22407__auto__,c__22472__auto___32078,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22408__auto__ = null;
var cljs$core$async$mult_$_state_machine__22408__auto____0 = (function (){
var statearr_32074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32074[(0)] = cljs$core$async$mult_$_state_machine__22408__auto__);

(statearr_32074[(1)] = (1));

return statearr_32074;
});
var cljs$core$async$mult_$_state_machine__22408__auto____1 = (function (state_31990){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_31990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e32075){if((e32075 instanceof Object)){
var ex__22411__auto__ = e32075;
var statearr_32076_32133 = state_31990;
(statearr_32076_32133[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32134 = state_31990;
state_31990 = G__32134;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22408__auto__ = function(state_31990){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22408__auto____1.call(this,state_31990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22408__auto____0;
cljs$core$async$mult_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22408__auto____1;
return cljs$core$async$mult_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___32078,cs,m,dchan,dctr,done))
})();
var state__22474__auto__ = (function (){var statearr_32077 = f__22473__auto__.call(null);
(statearr_32077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___32078);

return statearr_32077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___32078,cs,m,dchan,dctr,done))
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
var args32135 = [];
var len__20172__auto___32138 = arguments.length;
var i__20173__auto___32139 = (0);
while(true){
if((i__20173__auto___32139 < len__20172__auto___32138)){
args32135.push((arguments[i__20173__auto___32139]));

var G__32140 = (i__20173__auto___32139 + (1));
i__20173__auto___32139 = G__32140;
continue;
} else {
}
break;
}

var G__32137 = args32135.length;
switch (G__32137) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32135.length)].join('')));

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
var len__20172__auto___32152 = arguments.length;
var i__20173__auto___32153 = (0);
while(true){
if((i__20173__auto___32153 < len__20172__auto___32152)){
args__20179__auto__.push((arguments[i__20173__auto___32153]));

var G__32154 = (i__20173__auto___32153 + (1));
i__20173__auto___32153 = G__32154;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((3) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20180__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32146){
var map__32147 = p__32146;
var map__32147__$1 = ((((!((map__32147 == null)))?((((map__32147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32147):map__32147);
var opts = map__32147__$1;
var statearr_32149_32155 = state;
(statearr_32149_32155[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__32147,map__32147__$1,opts){
return (function (val){
var statearr_32150_32156 = state;
(statearr_32150_32156[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32147,map__32147__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32151_32157 = state;
(statearr_32151_32157[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32142){
var G__32143 = cljs.core.first.call(null,seq32142);
var seq32142__$1 = cljs.core.next.call(null,seq32142);
var G__32144 = cljs.core.first.call(null,seq32142__$1);
var seq32142__$2 = cljs.core.next.call(null,seq32142__$1);
var G__32145 = cljs.core.first.call(null,seq32142__$2);
var seq32142__$3 = cljs.core.next.call(null,seq32142__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32143,G__32144,G__32145,seq32142__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32321 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32322){
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
this.meta32322 = meta32322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32323,meta32322__$1){
var self__ = this;
var _32323__$1 = this;
return (new cljs.core.async.t_cljs$core$async32321(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32322__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32323){
var self__ = this;
var _32323__$1 = this;
return self__.meta32322;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32321.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32322","meta32322",874013488,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32321";

cljs.core.async.t_cljs$core$async32321.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32321");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32321 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32321(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32322){
return (new cljs.core.async.t_cljs$core$async32321(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32322));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32321(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22472__auto___32484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___32484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___32484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32421){
var state_val_32422 = (state_32421[(1)]);
if((state_val_32422 === (7))){
var inst_32339 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
var statearr_32423_32485 = state_32421__$1;
(statearr_32423_32485[(2)] = inst_32339);

(statearr_32423_32485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (20))){
var inst_32351 = (state_32421[(7)]);
var state_32421__$1 = state_32421;
var statearr_32424_32486 = state_32421__$1;
(statearr_32424_32486[(2)] = inst_32351);

(statearr_32424_32486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (27))){
var state_32421__$1 = state_32421;
var statearr_32425_32487 = state_32421__$1;
(statearr_32425_32487[(2)] = null);

(statearr_32425_32487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (1))){
var inst_32327 = (state_32421[(8)]);
var inst_32327__$1 = calc_state.call(null);
var inst_32329 = (inst_32327__$1 == null);
var inst_32330 = cljs.core.not.call(null,inst_32329);
var state_32421__$1 = (function (){var statearr_32426 = state_32421;
(statearr_32426[(8)] = inst_32327__$1);

return statearr_32426;
})();
if(inst_32330){
var statearr_32427_32488 = state_32421__$1;
(statearr_32427_32488[(1)] = (2));

} else {
var statearr_32428_32489 = state_32421__$1;
(statearr_32428_32489[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (24))){
var inst_32374 = (state_32421[(9)]);
var inst_32381 = (state_32421[(10)]);
var inst_32395 = (state_32421[(11)]);
var inst_32395__$1 = inst_32374.call(null,inst_32381);
var state_32421__$1 = (function (){var statearr_32429 = state_32421;
(statearr_32429[(11)] = inst_32395__$1);

return statearr_32429;
})();
if(cljs.core.truth_(inst_32395__$1)){
var statearr_32430_32490 = state_32421__$1;
(statearr_32430_32490[(1)] = (29));

} else {
var statearr_32431_32491 = state_32421__$1;
(statearr_32431_32491[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (4))){
var inst_32342 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
if(cljs.core.truth_(inst_32342)){
var statearr_32432_32492 = state_32421__$1;
(statearr_32432_32492[(1)] = (8));

} else {
var statearr_32433_32493 = state_32421__$1;
(statearr_32433_32493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (15))){
var inst_32368 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
if(cljs.core.truth_(inst_32368)){
var statearr_32434_32494 = state_32421__$1;
(statearr_32434_32494[(1)] = (19));

} else {
var statearr_32435_32495 = state_32421__$1;
(statearr_32435_32495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (21))){
var inst_32373 = (state_32421[(12)]);
var inst_32373__$1 = (state_32421[(2)]);
var inst_32374 = cljs.core.get.call(null,inst_32373__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32375 = cljs.core.get.call(null,inst_32373__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32376 = cljs.core.get.call(null,inst_32373__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32421__$1 = (function (){var statearr_32436 = state_32421;
(statearr_32436[(9)] = inst_32374);

(statearr_32436[(12)] = inst_32373__$1);

(statearr_32436[(13)] = inst_32375);

return statearr_32436;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32421__$1,(22),inst_32376);
} else {
if((state_val_32422 === (31))){
var inst_32403 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
if(cljs.core.truth_(inst_32403)){
var statearr_32437_32496 = state_32421__$1;
(statearr_32437_32496[(1)] = (32));

} else {
var statearr_32438_32497 = state_32421__$1;
(statearr_32438_32497[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (32))){
var inst_32380 = (state_32421[(14)]);
var state_32421__$1 = state_32421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32421__$1,(35),out,inst_32380);
} else {
if((state_val_32422 === (33))){
var inst_32373 = (state_32421[(12)]);
var inst_32351 = inst_32373;
var state_32421__$1 = (function (){var statearr_32439 = state_32421;
(statearr_32439[(7)] = inst_32351);

return statearr_32439;
})();
var statearr_32440_32498 = state_32421__$1;
(statearr_32440_32498[(2)] = null);

(statearr_32440_32498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (13))){
var inst_32351 = (state_32421[(7)]);
var inst_32358 = inst_32351.cljs$lang$protocol_mask$partition0$;
var inst_32359 = (inst_32358 & (64));
var inst_32360 = inst_32351.cljs$core$ISeq$;
var inst_32361 = (inst_32359) || (inst_32360);
var state_32421__$1 = state_32421;
if(cljs.core.truth_(inst_32361)){
var statearr_32441_32499 = state_32421__$1;
(statearr_32441_32499[(1)] = (16));

} else {
var statearr_32442_32500 = state_32421__$1;
(statearr_32442_32500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (22))){
var inst_32380 = (state_32421[(14)]);
var inst_32381 = (state_32421[(10)]);
var inst_32379 = (state_32421[(2)]);
var inst_32380__$1 = cljs.core.nth.call(null,inst_32379,(0),null);
var inst_32381__$1 = cljs.core.nth.call(null,inst_32379,(1),null);
var inst_32382 = (inst_32380__$1 == null);
var inst_32383 = cljs.core._EQ_.call(null,inst_32381__$1,change);
var inst_32384 = (inst_32382) || (inst_32383);
var state_32421__$1 = (function (){var statearr_32443 = state_32421;
(statearr_32443[(14)] = inst_32380__$1);

(statearr_32443[(10)] = inst_32381__$1);

return statearr_32443;
})();
if(cljs.core.truth_(inst_32384)){
var statearr_32444_32501 = state_32421__$1;
(statearr_32444_32501[(1)] = (23));

} else {
var statearr_32445_32502 = state_32421__$1;
(statearr_32445_32502[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (36))){
var inst_32373 = (state_32421[(12)]);
var inst_32351 = inst_32373;
var state_32421__$1 = (function (){var statearr_32446 = state_32421;
(statearr_32446[(7)] = inst_32351);

return statearr_32446;
})();
var statearr_32447_32503 = state_32421__$1;
(statearr_32447_32503[(2)] = null);

(statearr_32447_32503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (29))){
var inst_32395 = (state_32421[(11)]);
var state_32421__$1 = state_32421;
var statearr_32448_32504 = state_32421__$1;
(statearr_32448_32504[(2)] = inst_32395);

(statearr_32448_32504[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (6))){
var state_32421__$1 = state_32421;
var statearr_32449_32505 = state_32421__$1;
(statearr_32449_32505[(2)] = false);

(statearr_32449_32505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (28))){
var inst_32391 = (state_32421[(2)]);
var inst_32392 = calc_state.call(null);
var inst_32351 = inst_32392;
var state_32421__$1 = (function (){var statearr_32450 = state_32421;
(statearr_32450[(7)] = inst_32351);

(statearr_32450[(15)] = inst_32391);

return statearr_32450;
})();
var statearr_32451_32506 = state_32421__$1;
(statearr_32451_32506[(2)] = null);

(statearr_32451_32506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (25))){
var inst_32417 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
var statearr_32452_32507 = state_32421__$1;
(statearr_32452_32507[(2)] = inst_32417);

(statearr_32452_32507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (34))){
var inst_32415 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
var statearr_32453_32508 = state_32421__$1;
(statearr_32453_32508[(2)] = inst_32415);

(statearr_32453_32508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (17))){
var state_32421__$1 = state_32421;
var statearr_32454_32509 = state_32421__$1;
(statearr_32454_32509[(2)] = false);

(statearr_32454_32509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (3))){
var state_32421__$1 = state_32421;
var statearr_32455_32510 = state_32421__$1;
(statearr_32455_32510[(2)] = false);

(statearr_32455_32510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (12))){
var inst_32419 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32421__$1,inst_32419);
} else {
if((state_val_32422 === (2))){
var inst_32327 = (state_32421[(8)]);
var inst_32332 = inst_32327.cljs$lang$protocol_mask$partition0$;
var inst_32333 = (inst_32332 & (64));
var inst_32334 = inst_32327.cljs$core$ISeq$;
var inst_32335 = (inst_32333) || (inst_32334);
var state_32421__$1 = state_32421;
if(cljs.core.truth_(inst_32335)){
var statearr_32456_32511 = state_32421__$1;
(statearr_32456_32511[(1)] = (5));

} else {
var statearr_32457_32512 = state_32421__$1;
(statearr_32457_32512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (23))){
var inst_32380 = (state_32421[(14)]);
var inst_32386 = (inst_32380 == null);
var state_32421__$1 = state_32421;
if(cljs.core.truth_(inst_32386)){
var statearr_32458_32513 = state_32421__$1;
(statearr_32458_32513[(1)] = (26));

} else {
var statearr_32459_32514 = state_32421__$1;
(statearr_32459_32514[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (35))){
var inst_32406 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
if(cljs.core.truth_(inst_32406)){
var statearr_32460_32515 = state_32421__$1;
(statearr_32460_32515[(1)] = (36));

} else {
var statearr_32461_32516 = state_32421__$1;
(statearr_32461_32516[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (19))){
var inst_32351 = (state_32421[(7)]);
var inst_32370 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32351);
var state_32421__$1 = state_32421;
var statearr_32462_32517 = state_32421__$1;
(statearr_32462_32517[(2)] = inst_32370);

(statearr_32462_32517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (11))){
var inst_32351 = (state_32421[(7)]);
var inst_32355 = (inst_32351 == null);
var inst_32356 = cljs.core.not.call(null,inst_32355);
var state_32421__$1 = state_32421;
if(inst_32356){
var statearr_32463_32518 = state_32421__$1;
(statearr_32463_32518[(1)] = (13));

} else {
var statearr_32464_32519 = state_32421__$1;
(statearr_32464_32519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (9))){
var inst_32327 = (state_32421[(8)]);
var state_32421__$1 = state_32421;
var statearr_32465_32520 = state_32421__$1;
(statearr_32465_32520[(2)] = inst_32327);

(statearr_32465_32520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (5))){
var state_32421__$1 = state_32421;
var statearr_32466_32521 = state_32421__$1;
(statearr_32466_32521[(2)] = true);

(statearr_32466_32521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (14))){
var state_32421__$1 = state_32421;
var statearr_32467_32522 = state_32421__$1;
(statearr_32467_32522[(2)] = false);

(statearr_32467_32522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (26))){
var inst_32381 = (state_32421[(10)]);
var inst_32388 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32381);
var state_32421__$1 = state_32421;
var statearr_32468_32523 = state_32421__$1;
(statearr_32468_32523[(2)] = inst_32388);

(statearr_32468_32523[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (16))){
var state_32421__$1 = state_32421;
var statearr_32469_32524 = state_32421__$1;
(statearr_32469_32524[(2)] = true);

(statearr_32469_32524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (38))){
var inst_32411 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
var statearr_32470_32525 = state_32421__$1;
(statearr_32470_32525[(2)] = inst_32411);

(statearr_32470_32525[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (30))){
var inst_32374 = (state_32421[(9)]);
var inst_32381 = (state_32421[(10)]);
var inst_32375 = (state_32421[(13)]);
var inst_32398 = cljs.core.empty_QMARK_.call(null,inst_32374);
var inst_32399 = inst_32375.call(null,inst_32381);
var inst_32400 = cljs.core.not.call(null,inst_32399);
var inst_32401 = (inst_32398) && (inst_32400);
var state_32421__$1 = state_32421;
var statearr_32471_32526 = state_32421__$1;
(statearr_32471_32526[(2)] = inst_32401);

(statearr_32471_32526[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (10))){
var inst_32327 = (state_32421[(8)]);
var inst_32347 = (state_32421[(2)]);
var inst_32348 = cljs.core.get.call(null,inst_32347,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32349 = cljs.core.get.call(null,inst_32347,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32350 = cljs.core.get.call(null,inst_32347,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32351 = inst_32327;
var state_32421__$1 = (function (){var statearr_32472 = state_32421;
(statearr_32472[(16)] = inst_32350);

(statearr_32472[(7)] = inst_32351);

(statearr_32472[(17)] = inst_32349);

(statearr_32472[(18)] = inst_32348);

return statearr_32472;
})();
var statearr_32473_32527 = state_32421__$1;
(statearr_32473_32527[(2)] = null);

(statearr_32473_32527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (18))){
var inst_32365 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
var statearr_32474_32528 = state_32421__$1;
(statearr_32474_32528[(2)] = inst_32365);

(statearr_32474_32528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (37))){
var state_32421__$1 = state_32421;
var statearr_32475_32529 = state_32421__$1;
(statearr_32475_32529[(2)] = null);

(statearr_32475_32529[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32422 === (8))){
var inst_32327 = (state_32421[(8)]);
var inst_32344 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32327);
var state_32421__$1 = state_32421;
var statearr_32476_32530 = state_32421__$1;
(statearr_32476_32530[(2)] = inst_32344);

(statearr_32476_32530[(1)] = (10));


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
});})(c__22472__auto___32484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22407__auto__,c__22472__auto___32484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22408__auto__ = null;
var cljs$core$async$mix_$_state_machine__22408__auto____0 = (function (){
var statearr_32480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32480[(0)] = cljs$core$async$mix_$_state_machine__22408__auto__);

(statearr_32480[(1)] = (1));

return statearr_32480;
});
var cljs$core$async$mix_$_state_machine__22408__auto____1 = (function (state_32421){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_32421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e32481){if((e32481 instanceof Object)){
var ex__22411__auto__ = e32481;
var statearr_32482_32531 = state_32421;
(statearr_32482_32531[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32532 = state_32421;
state_32421 = G__32532;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22408__auto__ = function(state_32421){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22408__auto____1.call(this,state_32421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22408__auto____0;
cljs$core$async$mix_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22408__auto____1;
return cljs$core$async$mix_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___32484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22474__auto__ = (function (){var statearr_32483 = f__22473__auto__.call(null);
(statearr_32483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___32484);

return statearr_32483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___32484,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args32533 = [];
var len__20172__auto___32536 = arguments.length;
var i__20173__auto___32537 = (0);
while(true){
if((i__20173__auto___32537 < len__20172__auto___32536)){
args32533.push((arguments[i__20173__auto___32537]));

var G__32538 = (i__20173__auto___32537 + (1));
i__20173__auto___32537 = G__32538;
continue;
} else {
}
break;
}

var G__32535 = args32533.length;
switch (G__32535) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32533.length)].join('')));

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
var args32541 = [];
var len__20172__auto___32666 = arguments.length;
var i__20173__auto___32667 = (0);
while(true){
if((i__20173__auto___32667 < len__20172__auto___32666)){
args32541.push((arguments[i__20173__auto___32667]));

var G__32668 = (i__20173__auto___32667 + (1));
i__20173__auto___32667 = G__32668;
continue;
} else {
}
break;
}

var G__32543 = args32541.length;
switch (G__32543) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32541.length)].join('')));

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
return (function (p1__32540_SHARP_){
if(cljs.core.truth_(p1__32540_SHARP_.call(null,topic))){
return p1__32540_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32540_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19114__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32544 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32545){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32545 = meta32545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32546,meta32545__$1){
var self__ = this;
var _32546__$1 = this;
return (new cljs.core.async.t_cljs$core$async32544(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32545__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32546){
var self__ = this;
var _32546__$1 = this;
return self__.meta32545;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32544.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32544.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32545","meta32545",-918400377,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32544";

cljs.core.async.t_cljs$core$async32544.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32544");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32544 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32544(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32545){
return (new cljs.core.async.t_cljs$core$async32544(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32545));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32544(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22472__auto___32670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___32670,mults,ensure_mult,p){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___32670,mults,ensure_mult,p){
return (function (state_32618){
var state_val_32619 = (state_32618[(1)]);
if((state_val_32619 === (7))){
var inst_32614 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32620_32671 = state_32618__$1;
(statearr_32620_32671[(2)] = inst_32614);

(statearr_32620_32671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (20))){
var state_32618__$1 = state_32618;
var statearr_32621_32672 = state_32618__$1;
(statearr_32621_32672[(2)] = null);

(statearr_32621_32672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (1))){
var state_32618__$1 = state_32618;
var statearr_32622_32673 = state_32618__$1;
(statearr_32622_32673[(2)] = null);

(statearr_32622_32673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (24))){
var inst_32597 = (state_32618[(7)]);
var inst_32606 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32597);
var state_32618__$1 = state_32618;
var statearr_32623_32674 = state_32618__$1;
(statearr_32623_32674[(2)] = inst_32606);

(statearr_32623_32674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (4))){
var inst_32549 = (state_32618[(8)]);
var inst_32549__$1 = (state_32618[(2)]);
var inst_32550 = (inst_32549__$1 == null);
var state_32618__$1 = (function (){var statearr_32624 = state_32618;
(statearr_32624[(8)] = inst_32549__$1);

return statearr_32624;
})();
if(cljs.core.truth_(inst_32550)){
var statearr_32625_32675 = state_32618__$1;
(statearr_32625_32675[(1)] = (5));

} else {
var statearr_32626_32676 = state_32618__$1;
(statearr_32626_32676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (15))){
var inst_32591 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32627_32677 = state_32618__$1;
(statearr_32627_32677[(2)] = inst_32591);

(statearr_32627_32677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (21))){
var inst_32611 = (state_32618[(2)]);
var state_32618__$1 = (function (){var statearr_32628 = state_32618;
(statearr_32628[(9)] = inst_32611);

return statearr_32628;
})();
var statearr_32629_32678 = state_32618__$1;
(statearr_32629_32678[(2)] = null);

(statearr_32629_32678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (13))){
var inst_32573 = (state_32618[(10)]);
var inst_32575 = cljs.core.chunked_seq_QMARK_.call(null,inst_32573);
var state_32618__$1 = state_32618;
if(inst_32575){
var statearr_32630_32679 = state_32618__$1;
(statearr_32630_32679[(1)] = (16));

} else {
var statearr_32631_32680 = state_32618__$1;
(statearr_32631_32680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (22))){
var inst_32603 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32603)){
var statearr_32632_32681 = state_32618__$1;
(statearr_32632_32681[(1)] = (23));

} else {
var statearr_32633_32682 = state_32618__$1;
(statearr_32633_32682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (6))){
var inst_32597 = (state_32618[(7)]);
var inst_32599 = (state_32618[(11)]);
var inst_32549 = (state_32618[(8)]);
var inst_32597__$1 = topic_fn.call(null,inst_32549);
var inst_32598 = cljs.core.deref.call(null,mults);
var inst_32599__$1 = cljs.core.get.call(null,inst_32598,inst_32597__$1);
var state_32618__$1 = (function (){var statearr_32634 = state_32618;
(statearr_32634[(7)] = inst_32597__$1);

(statearr_32634[(11)] = inst_32599__$1);

return statearr_32634;
})();
if(cljs.core.truth_(inst_32599__$1)){
var statearr_32635_32683 = state_32618__$1;
(statearr_32635_32683[(1)] = (19));

} else {
var statearr_32636_32684 = state_32618__$1;
(statearr_32636_32684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (25))){
var inst_32608 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32637_32685 = state_32618__$1;
(statearr_32637_32685[(2)] = inst_32608);

(statearr_32637_32685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (17))){
var inst_32573 = (state_32618[(10)]);
var inst_32582 = cljs.core.first.call(null,inst_32573);
var inst_32583 = cljs.core.async.muxch_STAR_.call(null,inst_32582);
var inst_32584 = cljs.core.async.close_BANG_.call(null,inst_32583);
var inst_32585 = cljs.core.next.call(null,inst_32573);
var inst_32559 = inst_32585;
var inst_32560 = null;
var inst_32561 = (0);
var inst_32562 = (0);
var state_32618__$1 = (function (){var statearr_32638 = state_32618;
(statearr_32638[(12)] = inst_32562);

(statearr_32638[(13)] = inst_32584);

(statearr_32638[(14)] = inst_32559);

(statearr_32638[(15)] = inst_32560);

(statearr_32638[(16)] = inst_32561);

return statearr_32638;
})();
var statearr_32639_32686 = state_32618__$1;
(statearr_32639_32686[(2)] = null);

(statearr_32639_32686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (3))){
var inst_32616 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32618__$1,inst_32616);
} else {
if((state_val_32619 === (12))){
var inst_32593 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32640_32687 = state_32618__$1;
(statearr_32640_32687[(2)] = inst_32593);

(statearr_32640_32687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (2))){
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32618__$1,(4),ch);
} else {
if((state_val_32619 === (23))){
var state_32618__$1 = state_32618;
var statearr_32641_32688 = state_32618__$1;
(statearr_32641_32688[(2)] = null);

(statearr_32641_32688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (19))){
var inst_32599 = (state_32618[(11)]);
var inst_32549 = (state_32618[(8)]);
var inst_32601 = cljs.core.async.muxch_STAR_.call(null,inst_32599);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32618__$1,(22),inst_32601,inst_32549);
} else {
if((state_val_32619 === (11))){
var inst_32559 = (state_32618[(14)]);
var inst_32573 = (state_32618[(10)]);
var inst_32573__$1 = cljs.core.seq.call(null,inst_32559);
var state_32618__$1 = (function (){var statearr_32642 = state_32618;
(statearr_32642[(10)] = inst_32573__$1);

return statearr_32642;
})();
if(inst_32573__$1){
var statearr_32643_32689 = state_32618__$1;
(statearr_32643_32689[(1)] = (13));

} else {
var statearr_32644_32690 = state_32618__$1;
(statearr_32644_32690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (9))){
var inst_32595 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32645_32691 = state_32618__$1;
(statearr_32645_32691[(2)] = inst_32595);

(statearr_32645_32691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (5))){
var inst_32556 = cljs.core.deref.call(null,mults);
var inst_32557 = cljs.core.vals.call(null,inst_32556);
var inst_32558 = cljs.core.seq.call(null,inst_32557);
var inst_32559 = inst_32558;
var inst_32560 = null;
var inst_32561 = (0);
var inst_32562 = (0);
var state_32618__$1 = (function (){var statearr_32646 = state_32618;
(statearr_32646[(12)] = inst_32562);

(statearr_32646[(14)] = inst_32559);

(statearr_32646[(15)] = inst_32560);

(statearr_32646[(16)] = inst_32561);

return statearr_32646;
})();
var statearr_32647_32692 = state_32618__$1;
(statearr_32647_32692[(2)] = null);

(statearr_32647_32692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (14))){
var state_32618__$1 = state_32618;
var statearr_32651_32693 = state_32618__$1;
(statearr_32651_32693[(2)] = null);

(statearr_32651_32693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (16))){
var inst_32573 = (state_32618[(10)]);
var inst_32577 = cljs.core.chunk_first.call(null,inst_32573);
var inst_32578 = cljs.core.chunk_rest.call(null,inst_32573);
var inst_32579 = cljs.core.count.call(null,inst_32577);
var inst_32559 = inst_32578;
var inst_32560 = inst_32577;
var inst_32561 = inst_32579;
var inst_32562 = (0);
var state_32618__$1 = (function (){var statearr_32652 = state_32618;
(statearr_32652[(12)] = inst_32562);

(statearr_32652[(14)] = inst_32559);

(statearr_32652[(15)] = inst_32560);

(statearr_32652[(16)] = inst_32561);

return statearr_32652;
})();
var statearr_32653_32694 = state_32618__$1;
(statearr_32653_32694[(2)] = null);

(statearr_32653_32694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (10))){
var inst_32562 = (state_32618[(12)]);
var inst_32559 = (state_32618[(14)]);
var inst_32560 = (state_32618[(15)]);
var inst_32561 = (state_32618[(16)]);
var inst_32567 = cljs.core._nth.call(null,inst_32560,inst_32562);
var inst_32568 = cljs.core.async.muxch_STAR_.call(null,inst_32567);
var inst_32569 = cljs.core.async.close_BANG_.call(null,inst_32568);
var inst_32570 = (inst_32562 + (1));
var tmp32648 = inst_32559;
var tmp32649 = inst_32560;
var tmp32650 = inst_32561;
var inst_32559__$1 = tmp32648;
var inst_32560__$1 = tmp32649;
var inst_32561__$1 = tmp32650;
var inst_32562__$1 = inst_32570;
var state_32618__$1 = (function (){var statearr_32654 = state_32618;
(statearr_32654[(12)] = inst_32562__$1);

(statearr_32654[(17)] = inst_32569);

(statearr_32654[(14)] = inst_32559__$1);

(statearr_32654[(15)] = inst_32560__$1);

(statearr_32654[(16)] = inst_32561__$1);

return statearr_32654;
})();
var statearr_32655_32695 = state_32618__$1;
(statearr_32655_32695[(2)] = null);

(statearr_32655_32695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (18))){
var inst_32588 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32656_32696 = state_32618__$1;
(statearr_32656_32696[(2)] = inst_32588);

(statearr_32656_32696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32619 === (8))){
var inst_32562 = (state_32618[(12)]);
var inst_32561 = (state_32618[(16)]);
var inst_32564 = (inst_32562 < inst_32561);
var inst_32565 = inst_32564;
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32565)){
var statearr_32657_32697 = state_32618__$1;
(statearr_32657_32697[(1)] = (10));

} else {
var statearr_32658_32698 = state_32618__$1;
(statearr_32658_32698[(1)] = (11));

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
});})(c__22472__auto___32670,mults,ensure_mult,p))
;
return ((function (switch__22407__auto__,c__22472__auto___32670,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_32662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32662[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_32662[(1)] = (1));

return statearr_32662;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_32618){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_32618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e32663){if((e32663 instanceof Object)){
var ex__22411__auto__ = e32663;
var statearr_32664_32699 = state_32618;
(statearr_32664_32699[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32700 = state_32618;
state_32618 = G__32700;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_32618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_32618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___32670,mults,ensure_mult,p))
})();
var state__22474__auto__ = (function (){var statearr_32665 = f__22473__auto__.call(null);
(statearr_32665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___32670);

return statearr_32665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___32670,mults,ensure_mult,p))
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
var args32701 = [];
var len__20172__auto___32704 = arguments.length;
var i__20173__auto___32705 = (0);
while(true){
if((i__20173__auto___32705 < len__20172__auto___32704)){
args32701.push((arguments[i__20173__auto___32705]));

var G__32706 = (i__20173__auto___32705 + (1));
i__20173__auto___32705 = G__32706;
continue;
} else {
}
break;
}

var G__32703 = args32701.length;
switch (G__32703) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32701.length)].join('')));

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
var args32708 = [];
var len__20172__auto___32711 = arguments.length;
var i__20173__auto___32712 = (0);
while(true){
if((i__20173__auto___32712 < len__20172__auto___32711)){
args32708.push((arguments[i__20173__auto___32712]));

var G__32713 = (i__20173__auto___32712 + (1));
i__20173__auto___32712 = G__32713;
continue;
} else {
}
break;
}

var G__32710 = args32708.length;
switch (G__32710) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32708.length)].join('')));

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
var args32715 = [];
var len__20172__auto___32786 = arguments.length;
var i__20173__auto___32787 = (0);
while(true){
if((i__20173__auto___32787 < len__20172__auto___32786)){
args32715.push((arguments[i__20173__auto___32787]));

var G__32788 = (i__20173__auto___32787 + (1));
i__20173__auto___32787 = G__32788;
continue;
} else {
}
break;
}

var G__32717 = args32715.length;
switch (G__32717) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32715.length)].join('')));

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
var c__22472__auto___32790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___32790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___32790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32756){
var state_val_32757 = (state_32756[(1)]);
if((state_val_32757 === (7))){
var state_32756__$1 = state_32756;
var statearr_32758_32791 = state_32756__$1;
(statearr_32758_32791[(2)] = null);

(statearr_32758_32791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (1))){
var state_32756__$1 = state_32756;
var statearr_32759_32792 = state_32756__$1;
(statearr_32759_32792[(2)] = null);

(statearr_32759_32792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (4))){
var inst_32720 = (state_32756[(7)]);
var inst_32722 = (inst_32720 < cnt);
var state_32756__$1 = state_32756;
if(cljs.core.truth_(inst_32722)){
var statearr_32760_32793 = state_32756__$1;
(statearr_32760_32793[(1)] = (6));

} else {
var statearr_32761_32794 = state_32756__$1;
(statearr_32761_32794[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (15))){
var inst_32752 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
var statearr_32762_32795 = state_32756__$1;
(statearr_32762_32795[(2)] = inst_32752);

(statearr_32762_32795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (13))){
var inst_32745 = cljs.core.async.close_BANG_.call(null,out);
var state_32756__$1 = state_32756;
var statearr_32763_32796 = state_32756__$1;
(statearr_32763_32796[(2)] = inst_32745);

(statearr_32763_32796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (6))){
var state_32756__$1 = state_32756;
var statearr_32764_32797 = state_32756__$1;
(statearr_32764_32797[(2)] = null);

(statearr_32764_32797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (3))){
var inst_32754 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32756__$1,inst_32754);
} else {
if((state_val_32757 === (12))){
var inst_32742 = (state_32756[(8)]);
var inst_32742__$1 = (state_32756[(2)]);
var inst_32743 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32742__$1);
var state_32756__$1 = (function (){var statearr_32765 = state_32756;
(statearr_32765[(8)] = inst_32742__$1);

return statearr_32765;
})();
if(cljs.core.truth_(inst_32743)){
var statearr_32766_32798 = state_32756__$1;
(statearr_32766_32798[(1)] = (13));

} else {
var statearr_32767_32799 = state_32756__$1;
(statearr_32767_32799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (2))){
var inst_32719 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32720 = (0);
var state_32756__$1 = (function (){var statearr_32768 = state_32756;
(statearr_32768[(9)] = inst_32719);

(statearr_32768[(7)] = inst_32720);

return statearr_32768;
})();
var statearr_32769_32800 = state_32756__$1;
(statearr_32769_32800[(2)] = null);

(statearr_32769_32800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (11))){
var inst_32720 = (state_32756[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32756,(10),Object,null,(9));
var inst_32729 = chs__$1.call(null,inst_32720);
var inst_32730 = done.call(null,inst_32720);
var inst_32731 = cljs.core.async.take_BANG_.call(null,inst_32729,inst_32730);
var state_32756__$1 = state_32756;
var statearr_32770_32801 = state_32756__$1;
(statearr_32770_32801[(2)] = inst_32731);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32756__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (9))){
var inst_32720 = (state_32756[(7)]);
var inst_32733 = (state_32756[(2)]);
var inst_32734 = (inst_32720 + (1));
var inst_32720__$1 = inst_32734;
var state_32756__$1 = (function (){var statearr_32771 = state_32756;
(statearr_32771[(7)] = inst_32720__$1);

(statearr_32771[(10)] = inst_32733);

return statearr_32771;
})();
var statearr_32772_32802 = state_32756__$1;
(statearr_32772_32802[(2)] = null);

(statearr_32772_32802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (5))){
var inst_32740 = (state_32756[(2)]);
var state_32756__$1 = (function (){var statearr_32773 = state_32756;
(statearr_32773[(11)] = inst_32740);

return statearr_32773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32756__$1,(12),dchan);
} else {
if((state_val_32757 === (14))){
var inst_32742 = (state_32756[(8)]);
var inst_32747 = cljs.core.apply.call(null,f,inst_32742);
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32756__$1,(16),out,inst_32747);
} else {
if((state_val_32757 === (16))){
var inst_32749 = (state_32756[(2)]);
var state_32756__$1 = (function (){var statearr_32774 = state_32756;
(statearr_32774[(12)] = inst_32749);

return statearr_32774;
})();
var statearr_32775_32803 = state_32756__$1;
(statearr_32775_32803[(2)] = null);

(statearr_32775_32803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (10))){
var inst_32724 = (state_32756[(2)]);
var inst_32725 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32756__$1 = (function (){var statearr_32776 = state_32756;
(statearr_32776[(13)] = inst_32724);

return statearr_32776;
})();
var statearr_32777_32804 = state_32756__$1;
(statearr_32777_32804[(2)] = inst_32725);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32756__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (8))){
var inst_32738 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
var statearr_32778_32805 = state_32756__$1;
(statearr_32778_32805[(2)] = inst_32738);

(statearr_32778_32805[(1)] = (5));


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
});})(c__22472__auto___32790,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22407__auto__,c__22472__auto___32790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_32756){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_32756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e32783){if((e32783 instanceof Object)){
var ex__22411__auto__ = e32783;
var statearr_32784_32806 = state_32756;
(statearr_32784_32806[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32807 = state_32756;
state_32756 = G__32807;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_32756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_32756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___32790,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22474__auto__ = (function (){var statearr_32785 = f__22473__auto__.call(null);
(statearr_32785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___32790);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___32790,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32809 = [];
var len__20172__auto___32865 = arguments.length;
var i__20173__auto___32866 = (0);
while(true){
if((i__20173__auto___32866 < len__20172__auto___32865)){
args32809.push((arguments[i__20173__auto___32866]));

var G__32867 = (i__20173__auto___32866 + (1));
i__20173__auto___32866 = G__32867;
continue;
} else {
}
break;
}

var G__32811 = args32809.length;
switch (G__32811) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32809.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22472__auto___32869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___32869,out){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___32869,out){
return (function (state_32841){
var state_val_32842 = (state_32841[(1)]);
if((state_val_32842 === (7))){
var inst_32821 = (state_32841[(7)]);
var inst_32820 = (state_32841[(8)]);
var inst_32820__$1 = (state_32841[(2)]);
var inst_32821__$1 = cljs.core.nth.call(null,inst_32820__$1,(0),null);
var inst_32822 = cljs.core.nth.call(null,inst_32820__$1,(1),null);
var inst_32823 = (inst_32821__$1 == null);
var state_32841__$1 = (function (){var statearr_32843 = state_32841;
(statearr_32843[(7)] = inst_32821__$1);

(statearr_32843[(8)] = inst_32820__$1);

(statearr_32843[(9)] = inst_32822);

return statearr_32843;
})();
if(cljs.core.truth_(inst_32823)){
var statearr_32844_32870 = state_32841__$1;
(statearr_32844_32870[(1)] = (8));

} else {
var statearr_32845_32871 = state_32841__$1;
(statearr_32845_32871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32842 === (1))){
var inst_32812 = cljs.core.vec.call(null,chs);
var inst_32813 = inst_32812;
var state_32841__$1 = (function (){var statearr_32846 = state_32841;
(statearr_32846[(10)] = inst_32813);

return statearr_32846;
})();
var statearr_32847_32872 = state_32841__$1;
(statearr_32847_32872[(2)] = null);

(statearr_32847_32872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32842 === (4))){
var inst_32813 = (state_32841[(10)]);
var state_32841__$1 = state_32841;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32841__$1,(7),inst_32813);
} else {
if((state_val_32842 === (6))){
var inst_32837 = (state_32841[(2)]);
var state_32841__$1 = state_32841;
var statearr_32848_32873 = state_32841__$1;
(statearr_32848_32873[(2)] = inst_32837);

(statearr_32848_32873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32842 === (3))){
var inst_32839 = (state_32841[(2)]);
var state_32841__$1 = state_32841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32841__$1,inst_32839);
} else {
if((state_val_32842 === (2))){
var inst_32813 = (state_32841[(10)]);
var inst_32815 = cljs.core.count.call(null,inst_32813);
var inst_32816 = (inst_32815 > (0));
var state_32841__$1 = state_32841;
if(cljs.core.truth_(inst_32816)){
var statearr_32850_32874 = state_32841__$1;
(statearr_32850_32874[(1)] = (4));

} else {
var statearr_32851_32875 = state_32841__$1;
(statearr_32851_32875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32842 === (11))){
var inst_32813 = (state_32841[(10)]);
var inst_32830 = (state_32841[(2)]);
var tmp32849 = inst_32813;
var inst_32813__$1 = tmp32849;
var state_32841__$1 = (function (){var statearr_32852 = state_32841;
(statearr_32852[(11)] = inst_32830);

(statearr_32852[(10)] = inst_32813__$1);

return statearr_32852;
})();
var statearr_32853_32876 = state_32841__$1;
(statearr_32853_32876[(2)] = null);

(statearr_32853_32876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32842 === (9))){
var inst_32821 = (state_32841[(7)]);
var state_32841__$1 = state_32841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32841__$1,(11),out,inst_32821);
} else {
if((state_val_32842 === (5))){
var inst_32835 = cljs.core.async.close_BANG_.call(null,out);
var state_32841__$1 = state_32841;
var statearr_32854_32877 = state_32841__$1;
(statearr_32854_32877[(2)] = inst_32835);

(statearr_32854_32877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32842 === (10))){
var inst_32833 = (state_32841[(2)]);
var state_32841__$1 = state_32841;
var statearr_32855_32878 = state_32841__$1;
(statearr_32855_32878[(2)] = inst_32833);

(statearr_32855_32878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32842 === (8))){
var inst_32821 = (state_32841[(7)]);
var inst_32820 = (state_32841[(8)]);
var inst_32813 = (state_32841[(10)]);
var inst_32822 = (state_32841[(9)]);
var inst_32825 = (function (){var cs = inst_32813;
var vec__32818 = inst_32820;
var v = inst_32821;
var c = inst_32822;
return ((function (cs,vec__32818,v,c,inst_32821,inst_32820,inst_32813,inst_32822,state_val_32842,c__22472__auto___32869,out){
return (function (p1__32808_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32808_SHARP_);
});
;})(cs,vec__32818,v,c,inst_32821,inst_32820,inst_32813,inst_32822,state_val_32842,c__22472__auto___32869,out))
})();
var inst_32826 = cljs.core.filterv.call(null,inst_32825,inst_32813);
var inst_32813__$1 = inst_32826;
var state_32841__$1 = (function (){var statearr_32856 = state_32841;
(statearr_32856[(10)] = inst_32813__$1);

return statearr_32856;
})();
var statearr_32857_32879 = state_32841__$1;
(statearr_32857_32879[(2)] = null);

(statearr_32857_32879[(1)] = (2));


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
});})(c__22472__auto___32869,out))
;
return ((function (switch__22407__auto__,c__22472__auto___32869,out){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_32861 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32861[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_32861[(1)] = (1));

return statearr_32861;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_32841){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_32841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e32862){if((e32862 instanceof Object)){
var ex__22411__auto__ = e32862;
var statearr_32863_32880 = state_32841;
(statearr_32863_32880[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32881 = state_32841;
state_32841 = G__32881;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_32841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_32841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___32869,out))
})();
var state__22474__auto__ = (function (){var statearr_32864 = f__22473__auto__.call(null);
(statearr_32864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___32869);

return statearr_32864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___32869,out))
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
var args32882 = [];
var len__20172__auto___32931 = arguments.length;
var i__20173__auto___32932 = (0);
while(true){
if((i__20173__auto___32932 < len__20172__auto___32931)){
args32882.push((arguments[i__20173__auto___32932]));

var G__32933 = (i__20173__auto___32932 + (1));
i__20173__auto___32932 = G__32933;
continue;
} else {
}
break;
}

var G__32884 = args32882.length;
switch (G__32884) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32882.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22472__auto___32935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___32935,out){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___32935,out){
return (function (state_32908){
var state_val_32909 = (state_32908[(1)]);
if((state_val_32909 === (7))){
var inst_32890 = (state_32908[(7)]);
var inst_32890__$1 = (state_32908[(2)]);
var inst_32891 = (inst_32890__$1 == null);
var inst_32892 = cljs.core.not.call(null,inst_32891);
var state_32908__$1 = (function (){var statearr_32910 = state_32908;
(statearr_32910[(7)] = inst_32890__$1);

return statearr_32910;
})();
if(inst_32892){
var statearr_32911_32936 = state_32908__$1;
(statearr_32911_32936[(1)] = (8));

} else {
var statearr_32912_32937 = state_32908__$1;
(statearr_32912_32937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (1))){
var inst_32885 = (0);
var state_32908__$1 = (function (){var statearr_32913 = state_32908;
(statearr_32913[(8)] = inst_32885);

return statearr_32913;
})();
var statearr_32914_32938 = state_32908__$1;
(statearr_32914_32938[(2)] = null);

(statearr_32914_32938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (4))){
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32908__$1,(7),ch);
} else {
if((state_val_32909 === (6))){
var inst_32903 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32915_32939 = state_32908__$1;
(statearr_32915_32939[(2)] = inst_32903);

(statearr_32915_32939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (3))){
var inst_32905 = (state_32908[(2)]);
var inst_32906 = cljs.core.async.close_BANG_.call(null,out);
var state_32908__$1 = (function (){var statearr_32916 = state_32908;
(statearr_32916[(9)] = inst_32905);

return statearr_32916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32908__$1,inst_32906);
} else {
if((state_val_32909 === (2))){
var inst_32885 = (state_32908[(8)]);
var inst_32887 = (inst_32885 < n);
var state_32908__$1 = state_32908;
if(cljs.core.truth_(inst_32887)){
var statearr_32917_32940 = state_32908__$1;
(statearr_32917_32940[(1)] = (4));

} else {
var statearr_32918_32941 = state_32908__$1;
(statearr_32918_32941[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (11))){
var inst_32885 = (state_32908[(8)]);
var inst_32895 = (state_32908[(2)]);
var inst_32896 = (inst_32885 + (1));
var inst_32885__$1 = inst_32896;
var state_32908__$1 = (function (){var statearr_32919 = state_32908;
(statearr_32919[(8)] = inst_32885__$1);

(statearr_32919[(10)] = inst_32895);

return statearr_32919;
})();
var statearr_32920_32942 = state_32908__$1;
(statearr_32920_32942[(2)] = null);

(statearr_32920_32942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (9))){
var state_32908__$1 = state_32908;
var statearr_32921_32943 = state_32908__$1;
(statearr_32921_32943[(2)] = null);

(statearr_32921_32943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (5))){
var state_32908__$1 = state_32908;
var statearr_32922_32944 = state_32908__$1;
(statearr_32922_32944[(2)] = null);

(statearr_32922_32944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (10))){
var inst_32900 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32923_32945 = state_32908__$1;
(statearr_32923_32945[(2)] = inst_32900);

(statearr_32923_32945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (8))){
var inst_32890 = (state_32908[(7)]);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32908__$1,(11),out,inst_32890);
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
});})(c__22472__auto___32935,out))
;
return ((function (switch__22407__auto__,c__22472__auto___32935,out){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_32927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32927[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_32927[(1)] = (1));

return statearr_32927;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_32908){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_32908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e32928){if((e32928 instanceof Object)){
var ex__22411__auto__ = e32928;
var statearr_32929_32946 = state_32908;
(statearr_32929_32946[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32947 = state_32908;
state_32908 = G__32947;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_32908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_32908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___32935,out))
})();
var state__22474__auto__ = (function (){var statearr_32930 = f__22473__auto__.call(null);
(statearr_32930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___32935);

return statearr_32930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___32935,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32955 = (function (map_LT_,f,ch,meta32956){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32956 = meta32956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32957,meta32956__$1){
var self__ = this;
var _32957__$1 = this;
return (new cljs.core.async.t_cljs$core$async32955(self__.map_LT_,self__.f,self__.ch,meta32956__$1));
});

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32957){
var self__ = this;
var _32957__$1 = this;
return self__.meta32956;
});

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32958 = (function (map_LT_,f,ch,meta32956,_,fn1,meta32959){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32956 = meta32956;
this._ = _;
this.fn1 = fn1;
this.meta32959 = meta32959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32960,meta32959__$1){
var self__ = this;
var _32960__$1 = this;
return (new cljs.core.async.t_cljs$core$async32958(self__.map_LT_,self__.f,self__.ch,self__.meta32956,self__._,self__.fn1,meta32959__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32960){
var self__ = this;
var _32960__$1 = this;
return self__.meta32959;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32958.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32948_SHARP_){
return f1.call(null,(((p1__32948_SHARP_ == null))?null:self__.f.call(null,p1__32948_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32958.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32956","meta32956",-1974383156,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32955","cljs.core.async/t_cljs$core$async32955",781864847,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32959","meta32959",-1634693683,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32958.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32958";

cljs.core.async.t_cljs$core$async32958.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32958");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32958 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32958(map_LT___$1,f__$1,ch__$1,meta32956__$1,___$2,fn1__$1,meta32959){
return (new cljs.core.async.t_cljs$core$async32958(map_LT___$1,f__$1,ch__$1,meta32956__$1,___$2,fn1__$1,meta32959));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32958(self__.map_LT_,self__.f,self__.ch,self__.meta32956,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32956","meta32956",-1974383156,null)], null);
});

cljs.core.async.t_cljs$core$async32955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32955";

cljs.core.async.t_cljs$core$async32955.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32955");
});

cljs.core.async.__GT_t_cljs$core$async32955 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32955(map_LT___$1,f__$1,ch__$1,meta32956){
return (new cljs.core.async.t_cljs$core$async32955(map_LT___$1,f__$1,ch__$1,meta32956));
});

}

return (new cljs.core.async.t_cljs$core$async32955(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32964 = (function (map_GT_,f,ch,meta32965){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32965 = meta32965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32966,meta32965__$1){
var self__ = this;
var _32966__$1 = this;
return (new cljs.core.async.t_cljs$core$async32964(self__.map_GT_,self__.f,self__.ch,meta32965__$1));
});

cljs.core.async.t_cljs$core$async32964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32966){
var self__ = this;
var _32966__$1 = this;
return self__.meta32965;
});

cljs.core.async.t_cljs$core$async32964.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32964.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32964.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32965","meta32965",1377406569,null)], null);
});

cljs.core.async.t_cljs$core$async32964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32964";

cljs.core.async.t_cljs$core$async32964.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32964");
});

cljs.core.async.__GT_t_cljs$core$async32964 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32964(map_GT___$1,f__$1,ch__$1,meta32965){
return (new cljs.core.async.t_cljs$core$async32964(map_GT___$1,f__$1,ch__$1,meta32965));
});

}

return (new cljs.core.async.t_cljs$core$async32964(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32970 = (function (filter_GT_,p,ch,meta32971){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32971 = meta32971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32972,meta32971__$1){
var self__ = this;
var _32972__$1 = this;
return (new cljs.core.async.t_cljs$core$async32970(self__.filter_GT_,self__.p,self__.ch,meta32971__$1));
});

cljs.core.async.t_cljs$core$async32970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32972){
var self__ = this;
var _32972__$1 = this;
return self__.meta32971;
});

cljs.core.async.t_cljs$core$async32970.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32970.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32970.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32970.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32971","meta32971",1354800375,null)], null);
});

cljs.core.async.t_cljs$core$async32970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32970";

cljs.core.async.t_cljs$core$async32970.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cljs.core.async/t_cljs$core$async32970");
});

cljs.core.async.__GT_t_cljs$core$async32970 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32970(filter_GT___$1,p__$1,ch__$1,meta32971){
return (new cljs.core.async.t_cljs$core$async32970(filter_GT___$1,p__$1,ch__$1,meta32971));
});

}

return (new cljs.core.async.t_cljs$core$async32970(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32973 = [];
var len__20172__auto___33017 = arguments.length;
var i__20173__auto___33018 = (0);
while(true){
if((i__20173__auto___33018 < len__20172__auto___33017)){
args32973.push((arguments[i__20173__auto___33018]));

var G__33019 = (i__20173__auto___33018 + (1));
i__20173__auto___33018 = G__33019;
continue;
} else {
}
break;
}

var G__32975 = args32973.length;
switch (G__32975) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32973.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22472__auto___33021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___33021,out){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___33021,out){
return (function (state_32996){
var state_val_32997 = (state_32996[(1)]);
if((state_val_32997 === (7))){
var inst_32992 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_32998_33022 = state_32996__$1;
(statearr_32998_33022[(2)] = inst_32992);

(statearr_32998_33022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (1))){
var state_32996__$1 = state_32996;
var statearr_32999_33023 = state_32996__$1;
(statearr_32999_33023[(2)] = null);

(statearr_32999_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (4))){
var inst_32978 = (state_32996[(7)]);
var inst_32978__$1 = (state_32996[(2)]);
var inst_32979 = (inst_32978__$1 == null);
var state_32996__$1 = (function (){var statearr_33000 = state_32996;
(statearr_33000[(7)] = inst_32978__$1);

return statearr_33000;
})();
if(cljs.core.truth_(inst_32979)){
var statearr_33001_33024 = state_32996__$1;
(statearr_33001_33024[(1)] = (5));

} else {
var statearr_33002_33025 = state_32996__$1;
(statearr_33002_33025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (6))){
var inst_32978 = (state_32996[(7)]);
var inst_32983 = p.call(null,inst_32978);
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32983)){
var statearr_33003_33026 = state_32996__$1;
(statearr_33003_33026[(1)] = (8));

} else {
var statearr_33004_33027 = state_32996__$1;
(statearr_33004_33027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (3))){
var inst_32994 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32996__$1,inst_32994);
} else {
if((state_val_32997 === (2))){
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,(4),ch);
} else {
if((state_val_32997 === (11))){
var inst_32986 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33005_33028 = state_32996__$1;
(statearr_33005_33028[(2)] = inst_32986);

(statearr_33005_33028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (9))){
var state_32996__$1 = state_32996;
var statearr_33006_33029 = state_32996__$1;
(statearr_33006_33029[(2)] = null);

(statearr_33006_33029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (5))){
var inst_32981 = cljs.core.async.close_BANG_.call(null,out);
var state_32996__$1 = state_32996;
var statearr_33007_33030 = state_32996__$1;
(statearr_33007_33030[(2)] = inst_32981);

(statearr_33007_33030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (10))){
var inst_32989 = (state_32996[(2)]);
var state_32996__$1 = (function (){var statearr_33008 = state_32996;
(statearr_33008[(8)] = inst_32989);

return statearr_33008;
})();
var statearr_33009_33031 = state_32996__$1;
(statearr_33009_33031[(2)] = null);

(statearr_33009_33031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (8))){
var inst_32978 = (state_32996[(7)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32996__$1,(11),out,inst_32978);
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
});})(c__22472__auto___33021,out))
;
return ((function (switch__22407__auto__,c__22472__auto___33021,out){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_33013 = [null,null,null,null,null,null,null,null,null];
(statearr_33013[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_33013[(1)] = (1));

return statearr_33013;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_32996){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_32996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e33014){if((e33014 instanceof Object)){
var ex__22411__auto__ = e33014;
var statearr_33015_33032 = state_32996;
(statearr_33015_33032[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33033 = state_32996;
state_32996 = G__33033;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_32996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_32996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___33021,out))
})();
var state__22474__auto__ = (function (){var statearr_33016 = f__22473__auto__.call(null);
(statearr_33016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___33021);

return statearr_33016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___33021,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33034 = [];
var len__20172__auto___33037 = arguments.length;
var i__20173__auto___33038 = (0);
while(true){
if((i__20173__auto___33038 < len__20172__auto___33037)){
args33034.push((arguments[i__20173__auto___33038]));

var G__33039 = (i__20173__auto___33038 + (1));
i__20173__auto___33038 = G__33039;
continue;
} else {
}
break;
}

var G__33036 = args33034.length;
switch (G__33036) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33034.length)].join('')));

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
var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__){
return (function (state_33206){
var state_val_33207 = (state_33206[(1)]);
if((state_val_33207 === (7))){
var inst_33202 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33208_33249 = state_33206__$1;
(statearr_33208_33249[(2)] = inst_33202);

(statearr_33208_33249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (20))){
var inst_33172 = (state_33206[(7)]);
var inst_33183 = (state_33206[(2)]);
var inst_33184 = cljs.core.next.call(null,inst_33172);
var inst_33158 = inst_33184;
var inst_33159 = null;
var inst_33160 = (0);
var inst_33161 = (0);
var state_33206__$1 = (function (){var statearr_33209 = state_33206;
(statearr_33209[(8)] = inst_33158);

(statearr_33209[(9)] = inst_33183);

(statearr_33209[(10)] = inst_33160);

(statearr_33209[(11)] = inst_33159);

(statearr_33209[(12)] = inst_33161);

return statearr_33209;
})();
var statearr_33210_33250 = state_33206__$1;
(statearr_33210_33250[(2)] = null);

(statearr_33210_33250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (1))){
var state_33206__$1 = state_33206;
var statearr_33211_33251 = state_33206__$1;
(statearr_33211_33251[(2)] = null);

(statearr_33211_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (4))){
var inst_33147 = (state_33206[(13)]);
var inst_33147__$1 = (state_33206[(2)]);
var inst_33148 = (inst_33147__$1 == null);
var state_33206__$1 = (function (){var statearr_33212 = state_33206;
(statearr_33212[(13)] = inst_33147__$1);

return statearr_33212;
})();
if(cljs.core.truth_(inst_33148)){
var statearr_33213_33252 = state_33206__$1;
(statearr_33213_33252[(1)] = (5));

} else {
var statearr_33214_33253 = state_33206__$1;
(statearr_33214_33253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (15))){
var state_33206__$1 = state_33206;
var statearr_33218_33254 = state_33206__$1;
(statearr_33218_33254[(2)] = null);

(statearr_33218_33254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (21))){
var state_33206__$1 = state_33206;
var statearr_33219_33255 = state_33206__$1;
(statearr_33219_33255[(2)] = null);

(statearr_33219_33255[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (13))){
var inst_33158 = (state_33206[(8)]);
var inst_33160 = (state_33206[(10)]);
var inst_33159 = (state_33206[(11)]);
var inst_33161 = (state_33206[(12)]);
var inst_33168 = (state_33206[(2)]);
var inst_33169 = (inst_33161 + (1));
var tmp33215 = inst_33158;
var tmp33216 = inst_33160;
var tmp33217 = inst_33159;
var inst_33158__$1 = tmp33215;
var inst_33159__$1 = tmp33217;
var inst_33160__$1 = tmp33216;
var inst_33161__$1 = inst_33169;
var state_33206__$1 = (function (){var statearr_33220 = state_33206;
(statearr_33220[(8)] = inst_33158__$1);

(statearr_33220[(10)] = inst_33160__$1);

(statearr_33220[(14)] = inst_33168);

(statearr_33220[(11)] = inst_33159__$1);

(statearr_33220[(12)] = inst_33161__$1);

return statearr_33220;
})();
var statearr_33221_33256 = state_33206__$1;
(statearr_33221_33256[(2)] = null);

(statearr_33221_33256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (22))){
var state_33206__$1 = state_33206;
var statearr_33222_33257 = state_33206__$1;
(statearr_33222_33257[(2)] = null);

(statearr_33222_33257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (6))){
var inst_33147 = (state_33206[(13)]);
var inst_33156 = f.call(null,inst_33147);
var inst_33157 = cljs.core.seq.call(null,inst_33156);
var inst_33158 = inst_33157;
var inst_33159 = null;
var inst_33160 = (0);
var inst_33161 = (0);
var state_33206__$1 = (function (){var statearr_33223 = state_33206;
(statearr_33223[(8)] = inst_33158);

(statearr_33223[(10)] = inst_33160);

(statearr_33223[(11)] = inst_33159);

(statearr_33223[(12)] = inst_33161);

return statearr_33223;
})();
var statearr_33224_33258 = state_33206__$1;
(statearr_33224_33258[(2)] = null);

(statearr_33224_33258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (17))){
var inst_33172 = (state_33206[(7)]);
var inst_33176 = cljs.core.chunk_first.call(null,inst_33172);
var inst_33177 = cljs.core.chunk_rest.call(null,inst_33172);
var inst_33178 = cljs.core.count.call(null,inst_33176);
var inst_33158 = inst_33177;
var inst_33159 = inst_33176;
var inst_33160 = inst_33178;
var inst_33161 = (0);
var state_33206__$1 = (function (){var statearr_33225 = state_33206;
(statearr_33225[(8)] = inst_33158);

(statearr_33225[(10)] = inst_33160);

(statearr_33225[(11)] = inst_33159);

(statearr_33225[(12)] = inst_33161);

return statearr_33225;
})();
var statearr_33226_33259 = state_33206__$1;
(statearr_33226_33259[(2)] = null);

(statearr_33226_33259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (3))){
var inst_33204 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33206__$1,inst_33204);
} else {
if((state_val_33207 === (12))){
var inst_33192 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33227_33260 = state_33206__$1;
(statearr_33227_33260[(2)] = inst_33192);

(statearr_33227_33260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (2))){
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33206__$1,(4),in$);
} else {
if((state_val_33207 === (23))){
var inst_33200 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33228_33261 = state_33206__$1;
(statearr_33228_33261[(2)] = inst_33200);

(statearr_33228_33261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (19))){
var inst_33187 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33229_33262 = state_33206__$1;
(statearr_33229_33262[(2)] = inst_33187);

(statearr_33229_33262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (11))){
var inst_33158 = (state_33206[(8)]);
var inst_33172 = (state_33206[(7)]);
var inst_33172__$1 = cljs.core.seq.call(null,inst_33158);
var state_33206__$1 = (function (){var statearr_33230 = state_33206;
(statearr_33230[(7)] = inst_33172__$1);

return statearr_33230;
})();
if(inst_33172__$1){
var statearr_33231_33263 = state_33206__$1;
(statearr_33231_33263[(1)] = (14));

} else {
var statearr_33232_33264 = state_33206__$1;
(statearr_33232_33264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (9))){
var inst_33194 = (state_33206[(2)]);
var inst_33195 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33206__$1 = (function (){var statearr_33233 = state_33206;
(statearr_33233[(15)] = inst_33194);

return statearr_33233;
})();
if(cljs.core.truth_(inst_33195)){
var statearr_33234_33265 = state_33206__$1;
(statearr_33234_33265[(1)] = (21));

} else {
var statearr_33235_33266 = state_33206__$1;
(statearr_33235_33266[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (5))){
var inst_33150 = cljs.core.async.close_BANG_.call(null,out);
var state_33206__$1 = state_33206;
var statearr_33236_33267 = state_33206__$1;
(statearr_33236_33267[(2)] = inst_33150);

(statearr_33236_33267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (14))){
var inst_33172 = (state_33206[(7)]);
var inst_33174 = cljs.core.chunked_seq_QMARK_.call(null,inst_33172);
var state_33206__$1 = state_33206;
if(inst_33174){
var statearr_33237_33268 = state_33206__$1;
(statearr_33237_33268[(1)] = (17));

} else {
var statearr_33238_33269 = state_33206__$1;
(statearr_33238_33269[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (16))){
var inst_33190 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33239_33270 = state_33206__$1;
(statearr_33239_33270[(2)] = inst_33190);

(statearr_33239_33270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (10))){
var inst_33159 = (state_33206[(11)]);
var inst_33161 = (state_33206[(12)]);
var inst_33166 = cljs.core._nth.call(null,inst_33159,inst_33161);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33206__$1,(13),out,inst_33166);
} else {
if((state_val_33207 === (18))){
var inst_33172 = (state_33206[(7)]);
var inst_33181 = cljs.core.first.call(null,inst_33172);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33206__$1,(20),out,inst_33181);
} else {
if((state_val_33207 === (8))){
var inst_33160 = (state_33206[(10)]);
var inst_33161 = (state_33206[(12)]);
var inst_33163 = (inst_33161 < inst_33160);
var inst_33164 = inst_33163;
var state_33206__$1 = state_33206;
if(cljs.core.truth_(inst_33164)){
var statearr_33240_33271 = state_33206__$1;
(statearr_33240_33271[(1)] = (10));

} else {
var statearr_33241_33272 = state_33206__$1;
(statearr_33241_33272[(1)] = (11));

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
});})(c__22472__auto__))
;
return ((function (switch__22407__auto__,c__22472__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22408__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22408__auto____0 = (function (){
var statearr_33245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33245[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22408__auto__);

(statearr_33245[(1)] = (1));

return statearr_33245;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22408__auto____1 = (function (state_33206){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_33206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e33246){if((e33246 instanceof Object)){
var ex__22411__auto__ = e33246;
var statearr_33247_33273 = state_33206;
(statearr_33247_33273[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33274 = state_33206;
state_33206 = G__33274;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22408__auto__ = function(state_33206){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22408__auto____1.call(this,state_33206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22408__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22408__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__))
})();
var state__22474__auto__ = (function (){var statearr_33248 = f__22473__auto__.call(null);
(statearr_33248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_33248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__))
);

return c__22472__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33275 = [];
var len__20172__auto___33278 = arguments.length;
var i__20173__auto___33279 = (0);
while(true){
if((i__20173__auto___33279 < len__20172__auto___33278)){
args33275.push((arguments[i__20173__auto___33279]));

var G__33280 = (i__20173__auto___33279 + (1));
i__20173__auto___33279 = G__33280;
continue;
} else {
}
break;
}

var G__33277 = args33275.length;
switch (G__33277) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33275.length)].join('')));

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
var args33282 = [];
var len__20172__auto___33285 = arguments.length;
var i__20173__auto___33286 = (0);
while(true){
if((i__20173__auto___33286 < len__20172__auto___33285)){
args33282.push((arguments[i__20173__auto___33286]));

var G__33287 = (i__20173__auto___33286 + (1));
i__20173__auto___33286 = G__33287;
continue;
} else {
}
break;
}

var G__33284 = args33282.length;
switch (G__33284) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33282.length)].join('')));

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
var args33289 = [];
var len__20172__auto___33340 = arguments.length;
var i__20173__auto___33341 = (0);
while(true){
if((i__20173__auto___33341 < len__20172__auto___33340)){
args33289.push((arguments[i__20173__auto___33341]));

var G__33342 = (i__20173__auto___33341 + (1));
i__20173__auto___33341 = G__33342;
continue;
} else {
}
break;
}

var G__33291 = args33289.length;
switch (G__33291) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33289.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22472__auto___33344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___33344,out){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___33344,out){
return (function (state_33315){
var state_val_33316 = (state_33315[(1)]);
if((state_val_33316 === (7))){
var inst_33310 = (state_33315[(2)]);
var state_33315__$1 = state_33315;
var statearr_33317_33345 = state_33315__$1;
(statearr_33317_33345[(2)] = inst_33310);

(statearr_33317_33345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (1))){
var inst_33292 = null;
var state_33315__$1 = (function (){var statearr_33318 = state_33315;
(statearr_33318[(7)] = inst_33292);

return statearr_33318;
})();
var statearr_33319_33346 = state_33315__$1;
(statearr_33319_33346[(2)] = null);

(statearr_33319_33346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (4))){
var inst_33295 = (state_33315[(8)]);
var inst_33295__$1 = (state_33315[(2)]);
var inst_33296 = (inst_33295__$1 == null);
var inst_33297 = cljs.core.not.call(null,inst_33296);
var state_33315__$1 = (function (){var statearr_33320 = state_33315;
(statearr_33320[(8)] = inst_33295__$1);

return statearr_33320;
})();
if(inst_33297){
var statearr_33321_33347 = state_33315__$1;
(statearr_33321_33347[(1)] = (5));

} else {
var statearr_33322_33348 = state_33315__$1;
(statearr_33322_33348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (6))){
var state_33315__$1 = state_33315;
var statearr_33323_33349 = state_33315__$1;
(statearr_33323_33349[(2)] = null);

(statearr_33323_33349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (3))){
var inst_33312 = (state_33315[(2)]);
var inst_33313 = cljs.core.async.close_BANG_.call(null,out);
var state_33315__$1 = (function (){var statearr_33324 = state_33315;
(statearr_33324[(9)] = inst_33312);

return statearr_33324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33315__$1,inst_33313);
} else {
if((state_val_33316 === (2))){
var state_33315__$1 = state_33315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33315__$1,(4),ch);
} else {
if((state_val_33316 === (11))){
var inst_33295 = (state_33315[(8)]);
var inst_33304 = (state_33315[(2)]);
var inst_33292 = inst_33295;
var state_33315__$1 = (function (){var statearr_33325 = state_33315;
(statearr_33325[(7)] = inst_33292);

(statearr_33325[(10)] = inst_33304);

return statearr_33325;
})();
var statearr_33326_33350 = state_33315__$1;
(statearr_33326_33350[(2)] = null);

(statearr_33326_33350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (9))){
var inst_33295 = (state_33315[(8)]);
var state_33315__$1 = state_33315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33315__$1,(11),out,inst_33295);
} else {
if((state_val_33316 === (5))){
var inst_33292 = (state_33315[(7)]);
var inst_33295 = (state_33315[(8)]);
var inst_33299 = cljs.core._EQ_.call(null,inst_33295,inst_33292);
var state_33315__$1 = state_33315;
if(inst_33299){
var statearr_33328_33351 = state_33315__$1;
(statearr_33328_33351[(1)] = (8));

} else {
var statearr_33329_33352 = state_33315__$1;
(statearr_33329_33352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (10))){
var inst_33307 = (state_33315[(2)]);
var state_33315__$1 = state_33315;
var statearr_33330_33353 = state_33315__$1;
(statearr_33330_33353[(2)] = inst_33307);

(statearr_33330_33353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (8))){
var inst_33292 = (state_33315[(7)]);
var tmp33327 = inst_33292;
var inst_33292__$1 = tmp33327;
var state_33315__$1 = (function (){var statearr_33331 = state_33315;
(statearr_33331[(7)] = inst_33292__$1);

return statearr_33331;
})();
var statearr_33332_33354 = state_33315__$1;
(statearr_33332_33354[(2)] = null);

(statearr_33332_33354[(1)] = (2));


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
});})(c__22472__auto___33344,out))
;
return ((function (switch__22407__auto__,c__22472__auto___33344,out){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_33336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33336[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_33336[(1)] = (1));

return statearr_33336;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_33315){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_33315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e33337){if((e33337 instanceof Object)){
var ex__22411__auto__ = e33337;
var statearr_33338_33355 = state_33315;
(statearr_33338_33355[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33356 = state_33315;
state_33315 = G__33356;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_33315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_33315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___33344,out))
})();
var state__22474__auto__ = (function (){var statearr_33339 = f__22473__auto__.call(null);
(statearr_33339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___33344);

return statearr_33339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___33344,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33357 = [];
var len__20172__auto___33427 = arguments.length;
var i__20173__auto___33428 = (0);
while(true){
if((i__20173__auto___33428 < len__20172__auto___33427)){
args33357.push((arguments[i__20173__auto___33428]));

var G__33429 = (i__20173__auto___33428 + (1));
i__20173__auto___33428 = G__33429;
continue;
} else {
}
break;
}

var G__33359 = args33357.length;
switch (G__33359) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33357.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22472__auto___33431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___33431,out){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___33431,out){
return (function (state_33397){
var state_val_33398 = (state_33397[(1)]);
if((state_val_33398 === (7))){
var inst_33393 = (state_33397[(2)]);
var state_33397__$1 = state_33397;
var statearr_33399_33432 = state_33397__$1;
(statearr_33399_33432[(2)] = inst_33393);

(statearr_33399_33432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (1))){
var inst_33360 = (new Array(n));
var inst_33361 = inst_33360;
var inst_33362 = (0);
var state_33397__$1 = (function (){var statearr_33400 = state_33397;
(statearr_33400[(7)] = inst_33362);

(statearr_33400[(8)] = inst_33361);

return statearr_33400;
})();
var statearr_33401_33433 = state_33397__$1;
(statearr_33401_33433[(2)] = null);

(statearr_33401_33433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (4))){
var inst_33365 = (state_33397[(9)]);
var inst_33365__$1 = (state_33397[(2)]);
var inst_33366 = (inst_33365__$1 == null);
var inst_33367 = cljs.core.not.call(null,inst_33366);
var state_33397__$1 = (function (){var statearr_33402 = state_33397;
(statearr_33402[(9)] = inst_33365__$1);

return statearr_33402;
})();
if(inst_33367){
var statearr_33403_33434 = state_33397__$1;
(statearr_33403_33434[(1)] = (5));

} else {
var statearr_33404_33435 = state_33397__$1;
(statearr_33404_33435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (15))){
var inst_33387 = (state_33397[(2)]);
var state_33397__$1 = state_33397;
var statearr_33405_33436 = state_33397__$1;
(statearr_33405_33436[(2)] = inst_33387);

(statearr_33405_33436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (13))){
var state_33397__$1 = state_33397;
var statearr_33406_33437 = state_33397__$1;
(statearr_33406_33437[(2)] = null);

(statearr_33406_33437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (6))){
var inst_33362 = (state_33397[(7)]);
var inst_33383 = (inst_33362 > (0));
var state_33397__$1 = state_33397;
if(cljs.core.truth_(inst_33383)){
var statearr_33407_33438 = state_33397__$1;
(statearr_33407_33438[(1)] = (12));

} else {
var statearr_33408_33439 = state_33397__$1;
(statearr_33408_33439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (3))){
var inst_33395 = (state_33397[(2)]);
var state_33397__$1 = state_33397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33397__$1,inst_33395);
} else {
if((state_val_33398 === (12))){
var inst_33361 = (state_33397[(8)]);
var inst_33385 = cljs.core.vec.call(null,inst_33361);
var state_33397__$1 = state_33397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33397__$1,(15),out,inst_33385);
} else {
if((state_val_33398 === (2))){
var state_33397__$1 = state_33397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33397__$1,(4),ch);
} else {
if((state_val_33398 === (11))){
var inst_33377 = (state_33397[(2)]);
var inst_33378 = (new Array(n));
var inst_33361 = inst_33378;
var inst_33362 = (0);
var state_33397__$1 = (function (){var statearr_33409 = state_33397;
(statearr_33409[(10)] = inst_33377);

(statearr_33409[(7)] = inst_33362);

(statearr_33409[(8)] = inst_33361);

return statearr_33409;
})();
var statearr_33410_33440 = state_33397__$1;
(statearr_33410_33440[(2)] = null);

(statearr_33410_33440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (9))){
var inst_33361 = (state_33397[(8)]);
var inst_33375 = cljs.core.vec.call(null,inst_33361);
var state_33397__$1 = state_33397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33397__$1,(11),out,inst_33375);
} else {
if((state_val_33398 === (5))){
var inst_33362 = (state_33397[(7)]);
var inst_33361 = (state_33397[(8)]);
var inst_33370 = (state_33397[(11)]);
var inst_33365 = (state_33397[(9)]);
var inst_33369 = (inst_33361[inst_33362] = inst_33365);
var inst_33370__$1 = (inst_33362 + (1));
var inst_33371 = (inst_33370__$1 < n);
var state_33397__$1 = (function (){var statearr_33411 = state_33397;
(statearr_33411[(11)] = inst_33370__$1);

(statearr_33411[(12)] = inst_33369);

return statearr_33411;
})();
if(cljs.core.truth_(inst_33371)){
var statearr_33412_33441 = state_33397__$1;
(statearr_33412_33441[(1)] = (8));

} else {
var statearr_33413_33442 = state_33397__$1;
(statearr_33413_33442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (14))){
var inst_33390 = (state_33397[(2)]);
var inst_33391 = cljs.core.async.close_BANG_.call(null,out);
var state_33397__$1 = (function (){var statearr_33415 = state_33397;
(statearr_33415[(13)] = inst_33390);

return statearr_33415;
})();
var statearr_33416_33443 = state_33397__$1;
(statearr_33416_33443[(2)] = inst_33391);

(statearr_33416_33443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (10))){
var inst_33381 = (state_33397[(2)]);
var state_33397__$1 = state_33397;
var statearr_33417_33444 = state_33397__$1;
(statearr_33417_33444[(2)] = inst_33381);

(statearr_33417_33444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (8))){
var inst_33361 = (state_33397[(8)]);
var inst_33370 = (state_33397[(11)]);
var tmp33414 = inst_33361;
var inst_33361__$1 = tmp33414;
var inst_33362 = inst_33370;
var state_33397__$1 = (function (){var statearr_33418 = state_33397;
(statearr_33418[(7)] = inst_33362);

(statearr_33418[(8)] = inst_33361__$1);

return statearr_33418;
})();
var statearr_33419_33445 = state_33397__$1;
(statearr_33419_33445[(2)] = null);

(statearr_33419_33445[(1)] = (2));


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
});})(c__22472__auto___33431,out))
;
return ((function (switch__22407__auto__,c__22472__auto___33431,out){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_33423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33423[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_33423[(1)] = (1));

return statearr_33423;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_33397){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_33397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e33424){if((e33424 instanceof Object)){
var ex__22411__auto__ = e33424;
var statearr_33425_33446 = state_33397;
(statearr_33425_33446[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33447 = state_33397;
state_33397 = G__33447;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_33397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_33397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___33431,out))
})();
var state__22474__auto__ = (function (){var statearr_33426 = f__22473__auto__.call(null);
(statearr_33426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___33431);

return statearr_33426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___33431,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33448 = [];
var len__20172__auto___33522 = arguments.length;
var i__20173__auto___33523 = (0);
while(true){
if((i__20173__auto___33523 < len__20172__auto___33522)){
args33448.push((arguments[i__20173__auto___33523]));

var G__33524 = (i__20173__auto___33523 + (1));
i__20173__auto___33523 = G__33524;
continue;
} else {
}
break;
}

var G__33450 = args33448.length;
switch (G__33450) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33448.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22472__auto___33526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___33526,out){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___33526,out){
return (function (state_33492){
var state_val_33493 = (state_33492[(1)]);
if((state_val_33493 === (7))){
var inst_33488 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33494_33527 = state_33492__$1;
(statearr_33494_33527[(2)] = inst_33488);

(statearr_33494_33527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (1))){
var inst_33451 = [];
var inst_33452 = inst_33451;
var inst_33453 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33492__$1 = (function (){var statearr_33495 = state_33492;
(statearr_33495[(7)] = inst_33453);

(statearr_33495[(8)] = inst_33452);

return statearr_33495;
})();
var statearr_33496_33528 = state_33492__$1;
(statearr_33496_33528[(2)] = null);

(statearr_33496_33528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (4))){
var inst_33456 = (state_33492[(9)]);
var inst_33456__$1 = (state_33492[(2)]);
var inst_33457 = (inst_33456__$1 == null);
var inst_33458 = cljs.core.not.call(null,inst_33457);
var state_33492__$1 = (function (){var statearr_33497 = state_33492;
(statearr_33497[(9)] = inst_33456__$1);

return statearr_33497;
})();
if(inst_33458){
var statearr_33498_33529 = state_33492__$1;
(statearr_33498_33529[(1)] = (5));

} else {
var statearr_33499_33530 = state_33492__$1;
(statearr_33499_33530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (15))){
var inst_33482 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33500_33531 = state_33492__$1;
(statearr_33500_33531[(2)] = inst_33482);

(statearr_33500_33531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (13))){
var state_33492__$1 = state_33492;
var statearr_33501_33532 = state_33492__$1;
(statearr_33501_33532[(2)] = null);

(statearr_33501_33532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (6))){
var inst_33452 = (state_33492[(8)]);
var inst_33477 = inst_33452.length;
var inst_33478 = (inst_33477 > (0));
var state_33492__$1 = state_33492;
if(cljs.core.truth_(inst_33478)){
var statearr_33502_33533 = state_33492__$1;
(statearr_33502_33533[(1)] = (12));

} else {
var statearr_33503_33534 = state_33492__$1;
(statearr_33503_33534[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (3))){
var inst_33490 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33492__$1,inst_33490);
} else {
if((state_val_33493 === (12))){
var inst_33452 = (state_33492[(8)]);
var inst_33480 = cljs.core.vec.call(null,inst_33452);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33492__$1,(15),out,inst_33480);
} else {
if((state_val_33493 === (2))){
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33492__$1,(4),ch);
} else {
if((state_val_33493 === (11))){
var inst_33460 = (state_33492[(10)]);
var inst_33456 = (state_33492[(9)]);
var inst_33470 = (state_33492[(2)]);
var inst_33471 = [];
var inst_33472 = inst_33471.push(inst_33456);
var inst_33452 = inst_33471;
var inst_33453 = inst_33460;
var state_33492__$1 = (function (){var statearr_33504 = state_33492;
(statearr_33504[(11)] = inst_33472);

(statearr_33504[(12)] = inst_33470);

(statearr_33504[(7)] = inst_33453);

(statearr_33504[(8)] = inst_33452);

return statearr_33504;
})();
var statearr_33505_33535 = state_33492__$1;
(statearr_33505_33535[(2)] = null);

(statearr_33505_33535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (9))){
var inst_33452 = (state_33492[(8)]);
var inst_33468 = cljs.core.vec.call(null,inst_33452);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33492__$1,(11),out,inst_33468);
} else {
if((state_val_33493 === (5))){
var inst_33460 = (state_33492[(10)]);
var inst_33456 = (state_33492[(9)]);
var inst_33453 = (state_33492[(7)]);
var inst_33460__$1 = f.call(null,inst_33456);
var inst_33461 = cljs.core._EQ_.call(null,inst_33460__$1,inst_33453);
var inst_33462 = cljs.core.keyword_identical_QMARK_.call(null,inst_33453,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33463 = (inst_33461) || (inst_33462);
var state_33492__$1 = (function (){var statearr_33506 = state_33492;
(statearr_33506[(10)] = inst_33460__$1);

return statearr_33506;
})();
if(cljs.core.truth_(inst_33463)){
var statearr_33507_33536 = state_33492__$1;
(statearr_33507_33536[(1)] = (8));

} else {
var statearr_33508_33537 = state_33492__$1;
(statearr_33508_33537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (14))){
var inst_33485 = (state_33492[(2)]);
var inst_33486 = cljs.core.async.close_BANG_.call(null,out);
var state_33492__$1 = (function (){var statearr_33510 = state_33492;
(statearr_33510[(13)] = inst_33485);

return statearr_33510;
})();
var statearr_33511_33538 = state_33492__$1;
(statearr_33511_33538[(2)] = inst_33486);

(statearr_33511_33538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (10))){
var inst_33475 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33512_33539 = state_33492__$1;
(statearr_33512_33539[(2)] = inst_33475);

(statearr_33512_33539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (8))){
var inst_33460 = (state_33492[(10)]);
var inst_33456 = (state_33492[(9)]);
var inst_33452 = (state_33492[(8)]);
var inst_33465 = inst_33452.push(inst_33456);
var tmp33509 = inst_33452;
var inst_33452__$1 = tmp33509;
var inst_33453 = inst_33460;
var state_33492__$1 = (function (){var statearr_33513 = state_33492;
(statearr_33513[(14)] = inst_33465);

(statearr_33513[(7)] = inst_33453);

(statearr_33513[(8)] = inst_33452__$1);

return statearr_33513;
})();
var statearr_33514_33540 = state_33492__$1;
(statearr_33514_33540[(2)] = null);

(statearr_33514_33540[(1)] = (2));


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
});})(c__22472__auto___33526,out))
;
return ((function (switch__22407__auto__,c__22472__auto___33526,out){
return (function() {
var cljs$core$async$state_machine__22408__auto__ = null;
var cljs$core$async$state_machine__22408__auto____0 = (function (){
var statearr_33518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33518[(0)] = cljs$core$async$state_machine__22408__auto__);

(statearr_33518[(1)] = (1));

return statearr_33518;
});
var cljs$core$async$state_machine__22408__auto____1 = (function (state_33492){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_33492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e33519){if((e33519 instanceof Object)){
var ex__22411__auto__ = e33519;
var statearr_33520_33541 = state_33492;
(statearr_33520_33541[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33542 = state_33492;
state_33492 = G__33542;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
cljs$core$async$state_machine__22408__auto__ = function(state_33492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22408__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22408__auto____1.call(this,state_33492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22408__auto____0;
cljs$core$async$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22408__auto____1;
return cljs$core$async$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___33526,out))
})();
var state__22474__auto__ = (function (){var statearr_33521 = f__22473__auto__.call(null);
(statearr_33521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___33526);

return statearr_33521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___33526,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map