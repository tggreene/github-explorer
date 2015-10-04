// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29706_29720 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29707_29721 = null;
var count__29708_29722 = (0);
var i__29709_29723 = (0);
while(true){
if((i__29709_29723 < count__29708_29722)){
var f_29724 = cljs.core._nth.call(null,chunk__29707_29721,i__29709_29723);
cljs.core.println.call(null,"  ",f_29724);

var G__29725 = seq__29706_29720;
var G__29726 = chunk__29707_29721;
var G__29727 = count__29708_29722;
var G__29728 = (i__29709_29723 + (1));
seq__29706_29720 = G__29725;
chunk__29707_29721 = G__29726;
count__29708_29722 = G__29727;
i__29709_29723 = G__29728;
continue;
} else {
var temp__4425__auto___29729 = cljs.core.seq.call(null,seq__29706_29720);
if(temp__4425__auto___29729){
var seq__29706_29730__$1 = temp__4425__auto___29729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29706_29730__$1)){
var c__19917__auto___29731 = cljs.core.chunk_first.call(null,seq__29706_29730__$1);
var G__29732 = cljs.core.chunk_rest.call(null,seq__29706_29730__$1);
var G__29733 = c__19917__auto___29731;
var G__29734 = cljs.core.count.call(null,c__19917__auto___29731);
var G__29735 = (0);
seq__29706_29720 = G__29732;
chunk__29707_29721 = G__29733;
count__29708_29722 = G__29734;
i__29709_29723 = G__29735;
continue;
} else {
var f_29736 = cljs.core.first.call(null,seq__29706_29730__$1);
cljs.core.println.call(null,"  ",f_29736);

var G__29737 = cljs.core.next.call(null,seq__29706_29730__$1);
var G__29738 = null;
var G__29739 = (0);
var G__29740 = (0);
seq__29706_29720 = G__29737;
chunk__29707_29721 = G__29738;
count__29708_29722 = G__29739;
i__29709_29723 = G__29740;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29741 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19114__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29741);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29741)))?cljs.core.second.call(null,arglists_29741):arglists_29741));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29710 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29711 = null;
var count__29712 = (0);
var i__29713 = (0);
while(true){
if((i__29713 < count__29712)){
var vec__29714 = cljs.core._nth.call(null,chunk__29711,i__29713);
var name = cljs.core.nth.call(null,vec__29714,(0),null);
var map__29715 = cljs.core.nth.call(null,vec__29714,(1),null);
var map__29715__$1 = ((((!((map__29715 == null)))?((((map__29715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29715):map__29715);
var doc = cljs.core.get.call(null,map__29715__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29715__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29742 = seq__29710;
var G__29743 = chunk__29711;
var G__29744 = count__29712;
var G__29745 = (i__29713 + (1));
seq__29710 = G__29742;
chunk__29711 = G__29743;
count__29712 = G__29744;
i__29713 = G__29745;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29710);
if(temp__4425__auto__){
var seq__29710__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29710__$1)){
var c__19917__auto__ = cljs.core.chunk_first.call(null,seq__29710__$1);
var G__29746 = cljs.core.chunk_rest.call(null,seq__29710__$1);
var G__29747 = c__19917__auto__;
var G__29748 = cljs.core.count.call(null,c__19917__auto__);
var G__29749 = (0);
seq__29710 = G__29746;
chunk__29711 = G__29747;
count__29712 = G__29748;
i__29713 = G__29749;
continue;
} else {
var vec__29717 = cljs.core.first.call(null,seq__29710__$1);
var name = cljs.core.nth.call(null,vec__29717,(0),null);
var map__29718 = cljs.core.nth.call(null,vec__29717,(1),null);
var map__29718__$1 = ((((!((map__29718 == null)))?((((map__29718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29718):map__29718);
var doc = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29750 = cljs.core.next.call(null,seq__29710__$1);
var G__29751 = null;
var G__29752 = (0);
var G__29753 = (0);
seq__29710 = G__29750;
chunk__29711 = G__29751;
count__29712 = G__29752;
i__29713 = G__29753;
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
}
});

//# sourceMappingURL=repl.js.map