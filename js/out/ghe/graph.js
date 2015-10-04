// Compiled by ClojureScript 1.7.122 {}
goog.provide('ghe.graph');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('cljsjs.c3');
ghe.graph.dangerous = (function ghe$graph$dangerous(var_args){
var args28515 = [];
var len__20172__auto___28518 = arguments.length;
var i__20173__auto___28519 = (0);
while(true){
if((i__20173__auto___28519 < len__20172__auto___28518)){
args28515.push((arguments[i__20173__auto___28519]));

var G__28520 = (i__20173__auto___28519 + (1));
i__20173__auto___28519 = G__28520;
continue;
} else {
}
break;
}

var G__28517 = args28515.length;
switch (G__28517) {
case 2:
return ghe.graph.dangerous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ghe.graph.dangerous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28515.length)].join('')));

}
});

ghe.graph.dangerous.cljs$core$IFn$_invoke$arity$2 = (function (comp,content){
return ghe.graph.dangerous.call(null,comp,null,content);
});

ghe.graph.dangerous.cljs$core$IFn$_invoke$arity$3 = (function (comp,props,content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),content], null))], null);
});

ghe.graph.dangerous.cljs$lang$maxFixedArity = 3;
ghe.graph.get_graph = (function ghe$graph$get_graph(data){
return ghe.graph.dangerous.call(null,new cljs.core.Keyword(null,"div","div",1057191632),c3.generate(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(320)], null)], null)))).element.outerHTML);
});
ghe.graph.create_graph = (function ghe$graph$create_graph(target,data){
return c3.generate(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindto","bindto",583512213),target], null))));
});

//# sourceMappingURL=graph.js.map