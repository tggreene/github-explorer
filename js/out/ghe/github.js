// Compiled by ClojureScript 1.7.122 {}
goog.provide('ghe.github');
goog.require('cljs.core');
goog.require('ajax.core');
ghe.github.api = "https://api.github.com";
ghe.github.get_api = (function ghe$github$get_api(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27219 = arguments.length;
var i__20173__auto___27220 = (0);
while(true){
if((i__20173__auto___27220 < len__20172__auto___27219)){
args__20179__auto__.push((arguments[i__20173__auto___27220]));

var G__27221 = (i__20173__auto___27220 + (1));
i__20173__auto___27220 = G__27221;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ghe.github.get_api.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ghe.github.get_api.cljs$core$IFn$_invoke$arity$variadic = (function (url,params){
return null;
});

ghe.github.get_api.cljs$lang$maxFixedArity = (1);

ghe.github.get_api.cljs$lang$applyTo = (function (seq27217){
var G__27218 = cljs.core.first.call(null,seq27217);
var seq27217__$1 = cljs.core.next.call(null,seq27217);
return ghe.github.get_api.cljs$core$IFn$_invoke$arity$variadic(G__27218,seq27217__$1);
});
ghe.github.get_repo = (function ghe$github$get_repo(page,repo,handler){
var url = [cljs.core.str(ghe.github.api),cljs.core.str("/repos/"),cljs.core.str(repo),cljs.core.str("/events")].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"per_page","per_page",1197373210),(100)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});

//# sourceMappingURL=github.js.map