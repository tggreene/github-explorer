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
var seq__29173_29187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29174_29188 = null;
var count__29175_29189 = (0);
var i__29176_29190 = (0);
while(true){
if((i__29176_29190 < count__29175_29189)){
var f_29191 = cljs.core._nth.call(null,chunk__29174_29188,i__29176_29190);
cljs.core.println.call(null,"  ",f_29191);

var G__29192 = seq__29173_29187;
var G__29193 = chunk__29174_29188;
var G__29194 = count__29175_29189;
var G__29195 = (i__29176_29190 + (1));
seq__29173_29187 = G__29192;
chunk__29174_29188 = G__29193;
count__29175_29189 = G__29194;
i__29176_29190 = G__29195;
continue;
} else {
var temp__4425__auto___29196 = cljs.core.seq.call(null,seq__29173_29187);
if(temp__4425__auto___29196){
var seq__29173_29197__$1 = temp__4425__auto___29196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29173_29197__$1)){
var c__19917__auto___29198 = cljs.core.chunk_first.call(null,seq__29173_29197__$1);
var G__29199 = cljs.core.chunk_rest.call(null,seq__29173_29197__$1);
var G__29200 = c__19917__auto___29198;
var G__29201 = cljs.core.count.call(null,c__19917__auto___29198);
var G__29202 = (0);
seq__29173_29187 = G__29199;
chunk__29174_29188 = G__29200;
count__29175_29189 = G__29201;
i__29176_29190 = G__29202;
continue;
} else {
var f_29203 = cljs.core.first.call(null,seq__29173_29197__$1);
cljs.core.println.call(null,"  ",f_29203);

var G__29204 = cljs.core.next.call(null,seq__29173_29197__$1);
var G__29205 = null;
var G__29206 = (0);
var G__29207 = (0);
seq__29173_29187 = G__29204;
chunk__29174_29188 = G__29205;
count__29175_29189 = G__29206;
i__29176_29190 = G__29207;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29208 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19114__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29208);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29208)))?cljs.core.second.call(null,arglists_29208):arglists_29208));
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
var seq__29177 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29178 = null;
var count__29179 = (0);
var i__29180 = (0);
while(true){
if((i__29180 < count__29179)){
var vec__29181 = cljs.core._nth.call(null,chunk__29178,i__29180);
var name = cljs.core.nth.call(null,vec__29181,(0),null);
var map__29182 = cljs.core.nth.call(null,vec__29181,(1),null);
var map__29182__$1 = ((((!((map__29182 == null)))?((((map__29182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29182):map__29182);
var doc = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29209 = seq__29177;
var G__29210 = chunk__29178;
var G__29211 = count__29179;
var G__29212 = (i__29180 + (1));
seq__29177 = G__29209;
chunk__29178 = G__29210;
count__29179 = G__29211;
i__29180 = G__29212;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29177);
if(temp__4425__auto__){
var seq__29177__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29177__$1)){
var c__19917__auto__ = cljs.core.chunk_first.call(null,seq__29177__$1);
var G__29213 = cljs.core.chunk_rest.call(null,seq__29177__$1);
var G__29214 = c__19917__auto__;
var G__29215 = cljs.core.count.call(null,c__19917__auto__);
var G__29216 = (0);
seq__29177 = G__29213;
chunk__29178 = G__29214;
count__29179 = G__29215;
i__29180 = G__29216;
continue;
} else {
var vec__29184 = cljs.core.first.call(null,seq__29177__$1);
var name = cljs.core.nth.call(null,vec__29184,(0),null);
var map__29185 = cljs.core.nth.call(null,vec__29184,(1),null);
var map__29185__$1 = ((((!((map__29185 == null)))?((((map__29185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29185):map__29185);
var doc = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29217 = cljs.core.next.call(null,seq__29177__$1);
var G__29218 = null;
var G__29219 = (0);
var G__29220 = (0);
seq__29177 = G__29217;
chunk__29178 = G__29218;
count__29179 = G__29219;
i__29180 = G__29220;
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