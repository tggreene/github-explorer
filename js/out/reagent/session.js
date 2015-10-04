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
var len__20172__auto___28574 = arguments.length;
var i__20173__auto___28575 = (0);
while(true){
if((i__20173__auto___28575 < len__20172__auto___28574)){
args__20179__auto__.push((arguments[i__20173__auto___28575]));

var G__28576 = (i__20173__auto___28575 + (1));
i__20173__auto___28575 = G__28576;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__28572){
var vec__28573 = p__28572;
var default$ = cljs.core.nth.call(null,vec__28573,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq28570){
var G__28571 = cljs.core.first.call(null,seq28570);
var seq28570__$1 = cljs.core.next.call(null,seq28570);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__28571,seq28570__$1);
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
var len__20172__auto___28581 = arguments.length;
var i__20173__auto___28582 = (0);
while(true){
if((i__20173__auto___28582 < len__20172__auto___28581)){
args__20179__auto__.push((arguments[i__20173__auto___28582]));

var G__28583 = (i__20173__auto___28582 + (1));
i__20173__auto___28582 = G__28583;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__28579){
var vec__28580 = p__28579;
var default$ = cljs.core.nth.call(null,vec__28580,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq28577){
var G__28578 = cljs.core.first.call(null,seq28577);
var seq28577__$1 = cljs.core.next.call(null,seq28577);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__28578,seq28577__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__20179__auto__ = [];
var len__20172__auto___28586 = arguments.length;
var i__20173__auto___28587 = (0);
while(true){
if((i__20173__auto___28587 < len__20172__auto___28586)){
args__20179__auto__.push((arguments[i__20173__auto___28587]));

var G__28588 = (i__20173__auto___28587 + (1));
i__20173__auto___28587 = G__28588;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq28584){
var G__28585 = cljs.core.first.call(null,seq28584);
var seq28584__$1 = cljs.core.next.call(null,seq28584);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28585,seq28584__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__28589_SHARP_){
return cljs.core.assoc_in.call(null,p1__28589_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__20179__auto__ = [];
var len__20172__auto___28594 = arguments.length;
var i__20173__auto___28595 = (0);
while(true){
if((i__20173__auto___28595 < len__20172__auto___28594)){
args__20179__auto__.push((arguments[i__20173__auto___28595]));

var G__28596 = (i__20173__auto___28595 + (1));
i__20173__auto___28595 = G__28596;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__28592){
var vec__28593 = p__28592;
var default$ = cljs.core.nth.call(null,vec__28593,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq28590){
var G__28591 = cljs.core.first.call(null,seq28590);
var seq28590__$1 = cljs.core.next.call(null,seq28590);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28591,seq28590__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__20179__auto__ = [];
var len__20172__auto___28601 = arguments.length;
var i__20173__auto___28602 = (0);
while(true){
if((i__20173__auto___28602 < len__20172__auto___28601)){
args__20179__auto__.push((arguments[i__20173__auto___28602]));

var G__28603 = (i__20173__auto___28602 + (1));
i__20173__auto___28602 = G__28603;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__28599){
var vec__28600 = p__28599;
var default$ = cljs.core.nth.call(null,vec__28600,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq28597){
var G__28598 = cljs.core.first.call(null,seq28597);
var seq28597__$1 = cljs.core.next.call(null,seq28597);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28598,seq28597__$1);
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
var len__20172__auto___28608 = arguments.length;
var i__20173__auto___28609 = (0);
while(true){
if((i__20173__auto___28609 < len__20172__auto___28608)){
args__20179__auto__.push((arguments[i__20173__auto___28609]));

var G__28610 = (i__20173__auto___28609 + (1));
i__20173__auto___28609 = G__28610;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((2) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20180__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__28604_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__28604_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq28605){
var G__28606 = cljs.core.first.call(null,seq28605);
var seq28605__$1 = cljs.core.next.call(null,seq28605);
var G__28607 = cljs.core.first.call(null,seq28605__$1);
var seq28605__$2 = cljs.core.next.call(null,seq28605__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28606,G__28607,seq28605__$2);
});

//# sourceMappingURL=session.js.map