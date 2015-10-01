// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__27419_27423 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27420_27424 = null;
var count__27421_27425 = (0);
var i__27422_27426 = (0);
while(true){
if((i__27422_27426 < count__27421_27425)){
var k_27427 = cljs.core._nth.call(null,chunk__27420_27424,i__27422_27426);
var v_27428 = (b[k_27427]);
(a[k_27427] = v_27428);

var G__27429 = seq__27419_27423;
var G__27430 = chunk__27420_27424;
var G__27431 = count__27421_27425;
var G__27432 = (i__27422_27426 + (1));
seq__27419_27423 = G__27429;
chunk__27420_27424 = G__27430;
count__27421_27425 = G__27431;
i__27422_27426 = G__27432;
continue;
} else {
var temp__4425__auto___27433 = cljs.core.seq.call(null,seq__27419_27423);
if(temp__4425__auto___27433){
var seq__27419_27434__$1 = temp__4425__auto___27433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27419_27434__$1)){
var c__19917__auto___27435 = cljs.core.chunk_first.call(null,seq__27419_27434__$1);
var G__27436 = cljs.core.chunk_rest.call(null,seq__27419_27434__$1);
var G__27437 = c__19917__auto___27435;
var G__27438 = cljs.core.count.call(null,c__19917__auto___27435);
var G__27439 = (0);
seq__27419_27423 = G__27436;
chunk__27420_27424 = G__27437;
count__27421_27425 = G__27438;
i__27422_27426 = G__27439;
continue;
} else {
var k_27440 = cljs.core.first.call(null,seq__27419_27434__$1);
var v_27441 = (b[k_27440]);
(a[k_27440] = v_27441);

var G__27442 = cljs.core.next.call(null,seq__27419_27434__$1);
var G__27443 = null;
var G__27444 = (0);
var G__27445 = (0);
seq__27419_27423 = G__27442;
chunk__27420_27424 = G__27443;
count__27421_27425 = G__27444;
i__27422_27426 = G__27445;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args27446 = [];
var len__20172__auto___27449 = arguments.length;
var i__20173__auto___27450 = (0);
while(true){
if((i__20173__auto___27450 < len__20172__auto___27449)){
args27446.push((arguments[i__20173__auto___27450]));

var G__27451 = (i__20173__auto___27450 + (1));
i__20173__auto___27450 = G__27451;
continue;
} else {
}
break;
}

var G__27448 = args27446.length;
switch (G__27448) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27446.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__27453 = (i + (2));
var G__27454 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27453;
ret = G__27454;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27455_27459 = cljs.core.seq.call(null,v);
var chunk__27456_27460 = null;
var count__27457_27461 = (0);
var i__27458_27462 = (0);
while(true){
if((i__27458_27462 < count__27457_27461)){
var x_27463 = cljs.core._nth.call(null,chunk__27456_27460,i__27458_27462);
ret.push(x_27463);

var G__27464 = seq__27455_27459;
var G__27465 = chunk__27456_27460;
var G__27466 = count__27457_27461;
var G__27467 = (i__27458_27462 + (1));
seq__27455_27459 = G__27464;
chunk__27456_27460 = G__27465;
count__27457_27461 = G__27466;
i__27458_27462 = G__27467;
continue;
} else {
var temp__4425__auto___27468 = cljs.core.seq.call(null,seq__27455_27459);
if(temp__4425__auto___27468){
var seq__27455_27469__$1 = temp__4425__auto___27468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27455_27469__$1)){
var c__19917__auto___27470 = cljs.core.chunk_first.call(null,seq__27455_27469__$1);
var G__27471 = cljs.core.chunk_rest.call(null,seq__27455_27469__$1);
var G__27472 = c__19917__auto___27470;
var G__27473 = cljs.core.count.call(null,c__19917__auto___27470);
var G__27474 = (0);
seq__27455_27459 = G__27471;
chunk__27456_27460 = G__27472;
count__27457_27461 = G__27473;
i__27458_27462 = G__27474;
continue;
} else {
var x_27475 = cljs.core.first.call(null,seq__27455_27469__$1);
ret.push(x_27475);

var G__27476 = cljs.core.next.call(null,seq__27455_27469__$1);
var G__27477 = null;
var G__27478 = (0);
var G__27479 = (0);
seq__27455_27459 = G__27476;
chunk__27456_27460 = G__27477;
count__27457_27461 = G__27478;
i__27458_27462 = G__27479;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27480_27484 = cljs.core.seq.call(null,v);
var chunk__27481_27485 = null;
var count__27482_27486 = (0);
var i__27483_27487 = (0);
while(true){
if((i__27483_27487 < count__27482_27486)){
var x_27488 = cljs.core._nth.call(null,chunk__27481_27485,i__27483_27487);
ret.push(x_27488);

var G__27489 = seq__27480_27484;
var G__27490 = chunk__27481_27485;
var G__27491 = count__27482_27486;
var G__27492 = (i__27483_27487 + (1));
seq__27480_27484 = G__27489;
chunk__27481_27485 = G__27490;
count__27482_27486 = G__27491;
i__27483_27487 = G__27492;
continue;
} else {
var temp__4425__auto___27493 = cljs.core.seq.call(null,seq__27480_27484);
if(temp__4425__auto___27493){
var seq__27480_27494__$1 = temp__4425__auto___27493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27480_27494__$1)){
var c__19917__auto___27495 = cljs.core.chunk_first.call(null,seq__27480_27494__$1);
var G__27496 = cljs.core.chunk_rest.call(null,seq__27480_27494__$1);
var G__27497 = c__19917__auto___27495;
var G__27498 = cljs.core.count.call(null,c__19917__auto___27495);
var G__27499 = (0);
seq__27480_27484 = G__27496;
chunk__27481_27485 = G__27497;
count__27482_27486 = G__27498;
i__27483_27487 = G__27499;
continue;
} else {
var x_27500 = cljs.core.first.call(null,seq__27480_27494__$1);
ret.push(x_27500);

var G__27501 = cljs.core.next.call(null,seq__27480_27494__$1);
var G__27502 = null;
var G__27503 = (0);
var G__27504 = (0);
seq__27480_27484 = G__27501;
chunk__27481_27485 = G__27502;
count__27482_27486 = G__27503;
i__27483_27487 = G__27504;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27505_27509 = cljs.core.seq.call(null,v);
var chunk__27506_27510 = null;
var count__27507_27511 = (0);
var i__27508_27512 = (0);
while(true){
if((i__27508_27512 < count__27507_27511)){
var x_27513 = cljs.core._nth.call(null,chunk__27506_27510,i__27508_27512);
ret.push(x_27513);

var G__27514 = seq__27505_27509;
var G__27515 = chunk__27506_27510;
var G__27516 = count__27507_27511;
var G__27517 = (i__27508_27512 + (1));
seq__27505_27509 = G__27514;
chunk__27506_27510 = G__27515;
count__27507_27511 = G__27516;
i__27508_27512 = G__27517;
continue;
} else {
var temp__4425__auto___27518 = cljs.core.seq.call(null,seq__27505_27509);
if(temp__4425__auto___27518){
var seq__27505_27519__$1 = temp__4425__auto___27518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27505_27519__$1)){
var c__19917__auto___27520 = cljs.core.chunk_first.call(null,seq__27505_27519__$1);
var G__27521 = cljs.core.chunk_rest.call(null,seq__27505_27519__$1);
var G__27522 = c__19917__auto___27520;
var G__27523 = cljs.core.count.call(null,c__19917__auto___27520);
var G__27524 = (0);
seq__27505_27509 = G__27521;
chunk__27506_27510 = G__27522;
count__27507_27511 = G__27523;
i__27508_27512 = G__27524;
continue;
} else {
var x_27525 = cljs.core.first.call(null,seq__27505_27519__$1);
ret.push(x_27525);

var G__27526 = cljs.core.next.call(null,seq__27505_27519__$1);
var G__27527 = null;
var G__27528 = (0);
var G__27529 = (0);
seq__27505_27509 = G__27526;
chunk__27506_27510 = G__27527;
count__27507_27511 = G__27528;
i__27508_27512 = G__27529;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args27530 = [];
var len__20172__auto___27541 = arguments.length;
var i__20173__auto___27542 = (0);
while(true){
if((i__20173__auto___27542 < len__20172__auto___27541)){
args27530.push((arguments[i__20173__auto___27542]));

var G__27543 = (i__20173__auto___27542 + (1));
i__20173__auto___27542 = G__27543;
continue;
} else {
}
break;
}

var G__27532 = args27530.length;
switch (G__27532) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27530.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__27533 = obj;
G__27533.push(kfn.call(null,k),vfn.call(null,v));

return G__27533;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27534 = cljs.core.clone.call(null,handlers);
x27534.forEach = ((function (x27534,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27535 = cljs.core.seq.call(null,coll);
var chunk__27536 = null;
var count__27537 = (0);
var i__27538 = (0);
while(true){
if((i__27538 < count__27537)){
var vec__27539 = cljs.core._nth.call(null,chunk__27536,i__27538);
var k = cljs.core.nth.call(null,vec__27539,(0),null);
var v = cljs.core.nth.call(null,vec__27539,(1),null);
f.call(null,v,k);

var G__27545 = seq__27535;
var G__27546 = chunk__27536;
var G__27547 = count__27537;
var G__27548 = (i__27538 + (1));
seq__27535 = G__27545;
chunk__27536 = G__27546;
count__27537 = G__27547;
i__27538 = G__27548;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27535);
if(temp__4425__auto__){
var seq__27535__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27535__$1)){
var c__19917__auto__ = cljs.core.chunk_first.call(null,seq__27535__$1);
var G__27549 = cljs.core.chunk_rest.call(null,seq__27535__$1);
var G__27550 = c__19917__auto__;
var G__27551 = cljs.core.count.call(null,c__19917__auto__);
var G__27552 = (0);
seq__27535 = G__27549;
chunk__27536 = G__27550;
count__27537 = G__27551;
i__27538 = G__27552;
continue;
} else {
var vec__27540 = cljs.core.first.call(null,seq__27535__$1);
var k = cljs.core.nth.call(null,vec__27540,(0),null);
var v = cljs.core.nth.call(null,vec__27540,(1),null);
f.call(null,v,k);

var G__27553 = cljs.core.next.call(null,seq__27535__$1);
var G__27554 = null;
var G__27555 = (0);
var G__27556 = (0);
seq__27535 = G__27553;
chunk__27536 = G__27554;
count__27537 = G__27555;
i__27538 = G__27556;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27534,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27534;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args27557 = [];
var len__20172__auto___27563 = arguments.length;
var i__20173__auto___27564 = (0);
while(true){
if((i__20173__auto___27564 < len__20172__auto___27563)){
args27557.push((arguments[i__20173__auto___27564]));

var G__27565 = (i__20173__auto___27564 + (1));
i__20173__auto___27564 = G__27565;
continue;
} else {
}
break;
}

var G__27559 = args27557.length;
switch (G__27559) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27557.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit27560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit27560 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta27561){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta27561 = meta27561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit27560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27562,meta27561__$1){
var self__ = this;
var _27562__$1 = this;
return (new cognitect.transit.t_cognitect$transit27560(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta27561__$1));
});

cognitect.transit.t_cognitect$transit27560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27562){
var self__ = this;
var _27562__$1 = this;
return self__.meta27561;
});

cognitect.transit.t_cognitect$transit27560.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27560.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27560.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27560.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta27561","meta27561",505307136,null)], null);
});

cognitect.transit.t_cognitect$transit27560.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit27560.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit27560";

cognitect.transit.t_cognitect$transit27560.cljs$lang$ctorPrWriter = (function (this__19712__auto__,writer__19713__auto__,opt__19714__auto__){
return cljs.core._write.call(null,writer__19713__auto__,"cognitect.transit/t_cognitect$transit27560");
});

cognitect.transit.__GT_t_cognitect$transit27560 = (function cognitect$transit$__GT_t_cognitect$transit27560(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27561){
return (new cognitect.transit.t_cognitect$transit27560(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27561));
});

}

return (new cognitect.transit.t_cognitect$transit27560(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__19114__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map