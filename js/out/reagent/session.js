// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__20179__auto__ = [];
var len__20172__auto___28041 = arguments.length;
var i__20173__auto___28042 = (0);
while(true){
if((i__20173__auto___28042 < len__20172__auto___28041)){
args__20179__auto__.push((arguments[i__20173__auto___28042]));

var G__28043 = (i__20173__auto___28042 + (1));
i__20173__auto___28042 = G__28043;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__28039){
var vec__28040 = p__28039;
var default$ = cljs.core.nth.call(null,vec__28040,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq28037){
var G__28038 = cljs.core.first.call(null,seq28037);
var seq28037__$1 = cljs.core.next.call(null,seq28037);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__28038,seq28037__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__20179__auto__ = [];
var len__20172__auto___28048 = arguments.length;
var i__20173__auto___28049 = (0);
while(true){
if((i__20173__auto___28049 < len__20172__auto___28048)){
args__20179__auto__.push((arguments[i__20173__auto___28049]));

var G__28050 = (i__20173__auto___28049 + (1));
i__20173__auto___28049 = G__28050;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__28046){
var vec__28047 = p__28046;
var default$ = cljs.core.nth.call(null,vec__28047,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq28044){
var G__28045 = cljs.core.first.call(null,seq28044);
var seq28044__$1 = cljs.core.next.call(null,seq28044);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__28045,seq28044__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__20179__auto__ = [];
var len__20172__auto___28053 = arguments.length;
var i__20173__auto___28054 = (0);
while(true){
if((i__20173__auto___28054 < len__20172__auto___28053)){
args__20179__auto__.push((arguments[i__20173__auto___28054]));

var G__28055 = (i__20173__auto___28054 + (1));
i__20173__auto___28054 = G__28055;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq28051){
var G__28052 = cljs.core.first.call(null,seq28051);
var seq28051__$1 = cljs.core.next.call(null,seq28051);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28052,seq28051__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__28056_SHARP_){
return cljs.core.assoc_in.call(null,p1__28056_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__20179__auto__ = [];
var len__20172__auto___28061 = arguments.length;
var i__20173__auto___28062 = (0);
while(true){
if((i__20173__auto___28062 < len__20172__auto___28061)){
args__20179__auto__.push((arguments[i__20173__auto___28062]));

var G__28063 = (i__20173__auto___28062 + (1));
i__20173__auto___28062 = G__28063;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__28059){
var vec__28060 = p__28059;
var default$ = cljs.core.nth.call(null,vec__28060,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq28057){
var G__28058 = cljs.core.first.call(null,seq28057);
var seq28057__$1 = cljs.core.next.call(null,seq28057);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28058,seq28057__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__20179__auto__ = [];
var len__20172__auto___28068 = arguments.length;
var i__20173__auto___28069 = (0);
while(true){
if((i__20173__auto___28069 < len__20172__auto___28068)){
args__20179__auto__.push((arguments[i__20173__auto___28069]));

var G__28070 = (i__20173__auto___28069 + (1));
i__20173__auto___28069 = G__28070;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__28066){
var vec__28067 = p__28066;
var default$ = cljs.core.nth.call(null,vec__28067,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq28064){
var G__28065 = cljs.core.first.call(null,seq28064);
var seq28064__$1 = cljs.core.next.call(null,seq28064);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28065,seq28064__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__20179__auto__ = [];
var len__20172__auto___28075 = arguments.length;
var i__20173__auto___28076 = (0);
while(true){
if((i__20173__auto___28076 < len__20172__auto___28075)){
args__20179__auto__.push((arguments[i__20173__auto___28076]));

var G__28077 = (i__20173__auto___28076 + (1));
i__20173__auto___28076 = G__28077;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((2) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20180__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__28071_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__28071_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq28072){
var G__28073 = cljs.core.first.call(null,seq28072);
var seq28072__$1 = cljs.core.next.call(null,seq28072);
var G__28074 = cljs.core.first.call(null,seq28072__$1);
var seq28072__$2 = cljs.core.next.call(null,seq28072__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28073,G__28074,seq28072__$2);
});

//# sourceMappingURL=session.js.map