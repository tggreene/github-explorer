// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19114__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19114__auto__){
return or__19114__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19114__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29250_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29250_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29255 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29256 = null;
var count__29257 = (0);
var i__29258 = (0);
while(true){
if((i__29258 < count__29257)){
var n = cljs.core._nth.call(null,chunk__29256,i__29258);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29259 = seq__29255;
var G__29260 = chunk__29256;
var G__29261 = count__29257;
var G__29262 = (i__29258 + (1));
seq__29255 = G__29259;
chunk__29256 = G__29260;
count__29257 = G__29261;
i__29258 = G__29262;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29255);
if(temp__4425__auto__){
var seq__29255__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29255__$1)){
var c__19917__auto__ = cljs.core.chunk_first.call(null,seq__29255__$1);
var G__29263 = cljs.core.chunk_rest.call(null,seq__29255__$1);
var G__29264 = c__19917__auto__;
var G__29265 = cljs.core.count.call(null,c__19917__auto__);
var G__29266 = (0);
seq__29255 = G__29263;
chunk__29256 = G__29264;
count__29257 = G__29265;
i__29258 = G__29266;
continue;
} else {
var n = cljs.core.first.call(null,seq__29255__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29267 = cljs.core.next.call(null,seq__29255__$1);
var G__29268 = null;
var G__29269 = (0);
var G__29270 = (0);
seq__29255 = G__29267;
chunk__29256 = G__29268;
count__29257 = G__29269;
i__29258 = G__29270;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29309_29316 = cljs.core.seq.call(null,deps);
var chunk__29310_29317 = null;
var count__29311_29318 = (0);
var i__29312_29319 = (0);
while(true){
if((i__29312_29319 < count__29311_29318)){
var dep_29320 = cljs.core._nth.call(null,chunk__29310_29317,i__29312_29319);
topo_sort_helper_STAR_.call(null,dep_29320,(depth + (1)),state);

var G__29321 = seq__29309_29316;
var G__29322 = chunk__29310_29317;
var G__29323 = count__29311_29318;
var G__29324 = (i__29312_29319 + (1));
seq__29309_29316 = G__29321;
chunk__29310_29317 = G__29322;
count__29311_29318 = G__29323;
i__29312_29319 = G__29324;
continue;
} else {
var temp__4425__auto___29325 = cljs.core.seq.call(null,seq__29309_29316);
if(temp__4425__auto___29325){
var seq__29309_29326__$1 = temp__4425__auto___29325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29309_29326__$1)){
var c__19917__auto___29327 = cljs.core.chunk_first.call(null,seq__29309_29326__$1);
var G__29328 = cljs.core.chunk_rest.call(null,seq__29309_29326__$1);
var G__29329 = c__19917__auto___29327;
var G__29330 = cljs.core.count.call(null,c__19917__auto___29327);
var G__29331 = (0);
seq__29309_29316 = G__29328;
chunk__29310_29317 = G__29329;
count__29311_29318 = G__29330;
i__29312_29319 = G__29331;
continue;
} else {
var dep_29332 = cljs.core.first.call(null,seq__29309_29326__$1);
topo_sort_helper_STAR_.call(null,dep_29332,(depth + (1)),state);

var G__29333 = cljs.core.next.call(null,seq__29309_29326__$1);
var G__29334 = null;
var G__29335 = (0);
var G__29336 = (0);
seq__29309_29316 = G__29333;
chunk__29310_29317 = G__29334;
count__29311_29318 = G__29335;
i__29312_29319 = G__29336;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29313){
var vec__29315 = p__29313;
var x = cljs.core.nth.call(null,vec__29315,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29315,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29315,x,xs,get_deps__$1){
return (function (p1__29271_SHARP_){
return clojure.set.difference.call(null,p1__29271_SHARP_,x);
});})(vec__29315,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29349 = cljs.core.seq.call(null,provides);
var chunk__29350 = null;
var count__29351 = (0);
var i__29352 = (0);
while(true){
if((i__29352 < count__29351)){
var prov = cljs.core._nth.call(null,chunk__29350,i__29352);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29353_29361 = cljs.core.seq.call(null,requires);
var chunk__29354_29362 = null;
var count__29355_29363 = (0);
var i__29356_29364 = (0);
while(true){
if((i__29356_29364 < count__29355_29363)){
var req_29365 = cljs.core._nth.call(null,chunk__29354_29362,i__29356_29364);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29365,prov);

var G__29366 = seq__29353_29361;
var G__29367 = chunk__29354_29362;
var G__29368 = count__29355_29363;
var G__29369 = (i__29356_29364 + (1));
seq__29353_29361 = G__29366;
chunk__29354_29362 = G__29367;
count__29355_29363 = G__29368;
i__29356_29364 = G__29369;
continue;
} else {
var temp__4425__auto___29370 = cljs.core.seq.call(null,seq__29353_29361);
if(temp__4425__auto___29370){
var seq__29353_29371__$1 = temp__4425__auto___29370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29353_29371__$1)){
var c__19917__auto___29372 = cljs.core.chunk_first.call(null,seq__29353_29371__$1);
var G__29373 = cljs.core.chunk_rest.call(null,seq__29353_29371__$1);
var G__29374 = c__19917__auto___29372;
var G__29375 = cljs.core.count.call(null,c__19917__auto___29372);
var G__29376 = (0);
seq__29353_29361 = G__29373;
chunk__29354_29362 = G__29374;
count__29355_29363 = G__29375;
i__29356_29364 = G__29376;
continue;
} else {
var req_29377 = cljs.core.first.call(null,seq__29353_29371__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29377,prov);

var G__29378 = cljs.core.next.call(null,seq__29353_29371__$1);
var G__29379 = null;
var G__29380 = (0);
var G__29381 = (0);
seq__29353_29361 = G__29378;
chunk__29354_29362 = G__29379;
count__29355_29363 = G__29380;
i__29356_29364 = G__29381;
continue;
}
} else {
}
}
break;
}

var G__29382 = seq__29349;
var G__29383 = chunk__29350;
var G__29384 = count__29351;
var G__29385 = (i__29352 + (1));
seq__29349 = G__29382;
chunk__29350 = G__29383;
count__29351 = G__29384;
i__29352 = G__29385;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29349);
if(temp__4425__auto__){
var seq__29349__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29349__$1)){
var c__19917__auto__ = cljs.core.chunk_first.call(null,seq__29349__$1);
var G__29386 = cljs.core.chunk_rest.call(null,seq__29349__$1);
var G__29387 = c__19917__auto__;
var G__29388 = cljs.core.count.call(null,c__19917__auto__);
var G__29389 = (0);
seq__29349 = G__29386;
chunk__29350 = G__29387;
count__29351 = G__29388;
i__29352 = G__29389;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29349__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29357_29390 = cljs.core.seq.call(null,requires);
var chunk__29358_29391 = null;
var count__29359_29392 = (0);
var i__29360_29393 = (0);
while(true){
if((i__29360_29393 < count__29359_29392)){
var req_29394 = cljs.core._nth.call(null,chunk__29358_29391,i__29360_29393);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29394,prov);

var G__29395 = seq__29357_29390;
var G__29396 = chunk__29358_29391;
var G__29397 = count__29359_29392;
var G__29398 = (i__29360_29393 + (1));
seq__29357_29390 = G__29395;
chunk__29358_29391 = G__29396;
count__29359_29392 = G__29397;
i__29360_29393 = G__29398;
continue;
} else {
var temp__4425__auto___29399__$1 = cljs.core.seq.call(null,seq__29357_29390);
if(temp__4425__auto___29399__$1){
var seq__29357_29400__$1 = temp__4425__auto___29399__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29357_29400__$1)){
var c__19917__auto___29401 = cljs.core.chunk_first.call(null,seq__29357_29400__$1);
var G__29402 = cljs.core.chunk_rest.call(null,seq__29357_29400__$1);
var G__29403 = c__19917__auto___29401;
var G__29404 = cljs.core.count.call(null,c__19917__auto___29401);
var G__29405 = (0);
seq__29357_29390 = G__29402;
chunk__29358_29391 = G__29403;
count__29359_29392 = G__29404;
i__29360_29393 = G__29405;
continue;
} else {
var req_29406 = cljs.core.first.call(null,seq__29357_29400__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29406,prov);

var G__29407 = cljs.core.next.call(null,seq__29357_29400__$1);
var G__29408 = null;
var G__29409 = (0);
var G__29410 = (0);
seq__29357_29390 = G__29407;
chunk__29358_29391 = G__29408;
count__29359_29392 = G__29409;
i__29360_29393 = G__29410;
continue;
}
} else {
}
}
break;
}

var G__29411 = cljs.core.next.call(null,seq__29349__$1);
var G__29412 = null;
var G__29413 = (0);
var G__29414 = (0);
seq__29349 = G__29411;
chunk__29350 = G__29412;
count__29351 = G__29413;
i__29352 = G__29414;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29419_29423 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29420_29424 = null;
var count__29421_29425 = (0);
var i__29422_29426 = (0);
while(true){
if((i__29422_29426 < count__29421_29425)){
var ns_29427 = cljs.core._nth.call(null,chunk__29420_29424,i__29422_29426);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29427);

var G__29428 = seq__29419_29423;
var G__29429 = chunk__29420_29424;
var G__29430 = count__29421_29425;
var G__29431 = (i__29422_29426 + (1));
seq__29419_29423 = G__29428;
chunk__29420_29424 = G__29429;
count__29421_29425 = G__29430;
i__29422_29426 = G__29431;
continue;
} else {
var temp__4425__auto___29432 = cljs.core.seq.call(null,seq__29419_29423);
if(temp__4425__auto___29432){
var seq__29419_29433__$1 = temp__4425__auto___29432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29419_29433__$1)){
var c__19917__auto___29434 = cljs.core.chunk_first.call(null,seq__29419_29433__$1);
var G__29435 = cljs.core.chunk_rest.call(null,seq__29419_29433__$1);
var G__29436 = c__19917__auto___29434;
var G__29437 = cljs.core.count.call(null,c__19917__auto___29434);
var G__29438 = (0);
seq__29419_29423 = G__29435;
chunk__29420_29424 = G__29436;
count__29421_29425 = G__29437;
i__29422_29426 = G__29438;
continue;
} else {
var ns_29439 = cljs.core.first.call(null,seq__29419_29433__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29439);

var G__29440 = cljs.core.next.call(null,seq__29419_29433__$1);
var G__29441 = null;
var G__29442 = (0);
var G__29443 = (0);
seq__29419_29423 = G__29440;
chunk__29420_29424 = G__29441;
count__29421_29425 = G__29442;
i__29422_29426 = G__29443;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19114__auto__ = goog.require__;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29444__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29445__i = 0, G__29445__a = new Array(arguments.length -  0);
while (G__29445__i < G__29445__a.length) {G__29445__a[G__29445__i] = arguments[G__29445__i + 0]; ++G__29445__i;}
  args = new cljs.core.IndexedSeq(G__29445__a,0);
} 
return G__29444__delegate.call(this,args);};
G__29444.cljs$lang$maxFixedArity = 0;
G__29444.cljs$lang$applyTo = (function (arglist__29446){
var args = cljs.core.seq(arglist__29446);
return G__29444__delegate(args);
});
G__29444.cljs$core$IFn$_invoke$arity$variadic = G__29444__delegate;
return G__29444;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29447 = cljs.core._EQ_;
var expr__29448 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29447.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29448))){
return ((function (pred__29447,expr__29448){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29450){if((e29450 instanceof Error)){
var e = e29450;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29450;

}
}})());
});
;})(pred__29447,expr__29448))
} else {
if(cljs.core.truth_(pred__29447.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29448))){
return ((function (pred__29447,expr__29448){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29447,expr__29448){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29447,expr__29448))
);

return deferred.addErrback(((function (deferred,pred__29447,expr__29448){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29447,expr__29448))
);
});
;})(pred__29447,expr__29448))
} else {
return ((function (pred__29447,expr__29448){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29447,expr__29448))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29451,callback){
var map__29454 = p__29451;
var map__29454__$1 = ((((!((map__29454 == null)))?((((map__29454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29454):map__29454);
var file_msg = map__29454__$1;
var request_url = cljs.core.get.call(null,map__29454__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29454,map__29454__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29454,map__29454__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto__){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto__){
return (function (state_29478){
var state_val_29479 = (state_29478[(1)]);
if((state_val_29479 === (7))){
var inst_29474 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29480_29500 = state_29478__$1;
(statearr_29480_29500[(2)] = inst_29474);

(statearr_29480_29500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (1))){
var state_29478__$1 = state_29478;
var statearr_29481_29501 = state_29478__$1;
(statearr_29481_29501[(2)] = null);

(statearr_29481_29501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (4))){
var inst_29458 = (state_29478[(7)]);
var inst_29458__$1 = (state_29478[(2)]);
var state_29478__$1 = (function (){var statearr_29482 = state_29478;
(statearr_29482[(7)] = inst_29458__$1);

return statearr_29482;
})();
if(cljs.core.truth_(inst_29458__$1)){
var statearr_29483_29502 = state_29478__$1;
(statearr_29483_29502[(1)] = (5));

} else {
var statearr_29484_29503 = state_29478__$1;
(statearr_29484_29503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (6))){
var state_29478__$1 = state_29478;
var statearr_29485_29504 = state_29478__$1;
(statearr_29485_29504[(2)] = null);

(statearr_29485_29504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (3))){
var inst_29476 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29478__$1,inst_29476);
} else {
if((state_val_29479 === (2))){
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29478__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29479 === (11))){
var inst_29470 = (state_29478[(2)]);
var state_29478__$1 = (function (){var statearr_29486 = state_29478;
(statearr_29486[(8)] = inst_29470);

return statearr_29486;
})();
var statearr_29487_29505 = state_29478__$1;
(statearr_29487_29505[(2)] = null);

(statearr_29487_29505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (9))){
var inst_29462 = (state_29478[(9)]);
var inst_29464 = (state_29478[(10)]);
var inst_29466 = inst_29464.call(null,inst_29462);
var state_29478__$1 = state_29478;
var statearr_29488_29506 = state_29478__$1;
(statearr_29488_29506[(2)] = inst_29466);

(statearr_29488_29506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (5))){
var inst_29458 = (state_29478[(7)]);
var inst_29460 = figwheel.client.file_reloading.blocking_load.call(null,inst_29458);
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29478__$1,(8),inst_29460);
} else {
if((state_val_29479 === (10))){
var inst_29462 = (state_29478[(9)]);
var inst_29468 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29462);
var state_29478__$1 = state_29478;
var statearr_29489_29507 = state_29478__$1;
(statearr_29489_29507[(2)] = inst_29468);

(statearr_29489_29507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (8))){
var inst_29464 = (state_29478[(10)]);
var inst_29458 = (state_29478[(7)]);
var inst_29462 = (state_29478[(2)]);
var inst_29463 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29464__$1 = cljs.core.get.call(null,inst_29463,inst_29458);
var state_29478__$1 = (function (){var statearr_29490 = state_29478;
(statearr_29490[(9)] = inst_29462);

(statearr_29490[(10)] = inst_29464__$1);

return statearr_29490;
})();
if(cljs.core.truth_(inst_29464__$1)){
var statearr_29491_29508 = state_29478__$1;
(statearr_29491_29508[(1)] = (9));

} else {
var statearr_29492_29509 = state_29478__$1;
(statearr_29492_29509[(1)] = (10));

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
});})(c__23014__auto__))
;
return ((function (switch__22949__auto__,c__23014__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22950__auto__ = null;
var figwheel$client$file_reloading$state_machine__22950__auto____0 = (function (){
var statearr_29496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29496[(0)] = figwheel$client$file_reloading$state_machine__22950__auto__);

(statearr_29496[(1)] = (1));

return statearr_29496;
});
var figwheel$client$file_reloading$state_machine__22950__auto____1 = (function (state_29478){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_29478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e29497){if((e29497 instanceof Object)){
var ex__22953__auto__ = e29497;
var statearr_29498_29510 = state_29478;
(statearr_29498_29510[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29511 = state_29478;
state_29478 = G__29511;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22950__auto__ = function(state_29478){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22950__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22950__auto____1.call(this,state_29478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22950__auto____0;
figwheel$client$file_reloading$state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22950__auto____1;
return figwheel$client$file_reloading$state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto__))
})();
var state__23016__auto__ = (function (){var statearr_29499 = f__23015__auto__.call(null);
(statearr_29499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto__);

return statearr_29499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto__))
);

return c__23014__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29512,callback){
var map__29515 = p__29512;
var map__29515__$1 = ((((!((map__29515 == null)))?((((map__29515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29515):map__29515);
var file_msg = map__29515__$1;
var namespace = cljs.core.get.call(null,map__29515__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29515,map__29515__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29515,map__29515__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29517){
var map__29520 = p__29517;
var map__29520__$1 = ((((!((map__29520 == null)))?((((map__29520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29520):map__29520);
var file_msg = map__29520__$1;
var namespace = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19102__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19102__auto__){
var or__19114__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
var or__19114__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19114__auto____$1)){
return or__19114__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19102__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29522,callback){
var map__29525 = p__29522;
var map__29525__$1 = ((((!((map__29525 == null)))?((((map__29525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29525):map__29525);
var file_msg = map__29525__$1;
var request_url = cljs.core.get.call(null,map__29525__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29525__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23014__auto___29613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___29613,out){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___29613,out){
return (function (state_29595){
var state_val_29596 = (state_29595[(1)]);
if((state_val_29596 === (1))){
var inst_29573 = cljs.core.nth.call(null,files,(0),null);
var inst_29574 = cljs.core.nthnext.call(null,files,(1));
var inst_29575 = files;
var state_29595__$1 = (function (){var statearr_29597 = state_29595;
(statearr_29597[(7)] = inst_29575);

(statearr_29597[(8)] = inst_29573);

(statearr_29597[(9)] = inst_29574);

return statearr_29597;
})();
var statearr_29598_29614 = state_29595__$1;
(statearr_29598_29614[(2)] = null);

(statearr_29598_29614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29596 === (2))){
var inst_29575 = (state_29595[(7)]);
var inst_29578 = (state_29595[(10)]);
var inst_29578__$1 = cljs.core.nth.call(null,inst_29575,(0),null);
var inst_29579 = cljs.core.nthnext.call(null,inst_29575,(1));
var inst_29580 = (inst_29578__$1 == null);
var inst_29581 = cljs.core.not.call(null,inst_29580);
var state_29595__$1 = (function (){var statearr_29599 = state_29595;
(statearr_29599[(10)] = inst_29578__$1);

(statearr_29599[(11)] = inst_29579);

return statearr_29599;
})();
if(inst_29581){
var statearr_29600_29615 = state_29595__$1;
(statearr_29600_29615[(1)] = (4));

} else {
var statearr_29601_29616 = state_29595__$1;
(statearr_29601_29616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29596 === (3))){
var inst_29593 = (state_29595[(2)]);
var state_29595__$1 = state_29595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29595__$1,inst_29593);
} else {
if((state_val_29596 === (4))){
var inst_29578 = (state_29595[(10)]);
var inst_29583 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29578);
var state_29595__$1 = state_29595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29595__$1,(7),inst_29583);
} else {
if((state_val_29596 === (5))){
var inst_29589 = cljs.core.async.close_BANG_.call(null,out);
var state_29595__$1 = state_29595;
var statearr_29602_29617 = state_29595__$1;
(statearr_29602_29617[(2)] = inst_29589);

(statearr_29602_29617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29596 === (6))){
var inst_29591 = (state_29595[(2)]);
var state_29595__$1 = state_29595;
var statearr_29603_29618 = state_29595__$1;
(statearr_29603_29618[(2)] = inst_29591);

(statearr_29603_29618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29596 === (7))){
var inst_29579 = (state_29595[(11)]);
var inst_29585 = (state_29595[(2)]);
var inst_29586 = cljs.core.async.put_BANG_.call(null,out,inst_29585);
var inst_29575 = inst_29579;
var state_29595__$1 = (function (){var statearr_29604 = state_29595;
(statearr_29604[(7)] = inst_29575);

(statearr_29604[(12)] = inst_29586);

return statearr_29604;
})();
var statearr_29605_29619 = state_29595__$1;
(statearr_29605_29619[(2)] = null);

(statearr_29605_29619[(1)] = (2));


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
});})(c__23014__auto___29613,out))
;
return ((function (switch__22949__auto__,c__23014__auto___29613,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto____0 = (function (){
var statearr_29609 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29609[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto__);

(statearr_29609[(1)] = (1));

return statearr_29609;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto____1 = (function (state_29595){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_29595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e29610){if((e29610 instanceof Object)){
var ex__22953__auto__ = e29610;
var statearr_29611_29620 = state_29595;
(statearr_29611_29620[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29621 = state_29595;
state_29595 = G__29621;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto__ = function(state_29595){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto____1.call(this,state_29595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___29613,out))
})();
var state__23016__auto__ = (function (){var statearr_29612 = f__23015__auto__.call(null);
(statearr_29612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___29613);

return statearr_29612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___29613,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29622,opts){
var map__29626 = p__29622;
var map__29626__$1 = ((((!((map__29626 == null)))?((((map__29626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29626):map__29626);
var eval_body__$1 = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29626__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19102__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19102__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19102__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29628){var e = e29628;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29629_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29629_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29634){
var vec__29635 = p__29634;
var k = cljs.core.nth.call(null,vec__29635,(0),null);
var v = cljs.core.nth.call(null,vec__29635,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29636){
var vec__29637 = p__29636;
var k = cljs.core.nth.call(null,vec__29637,(0),null);
var v = cljs.core.nth.call(null,vec__29637,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29641,p__29642){
var map__29889 = p__29641;
var map__29889__$1 = ((((!((map__29889 == null)))?((((map__29889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29889):map__29889);
var opts = map__29889__$1;
var before_jsload = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29890 = p__29642;
var map__29890__$1 = ((((!((map__29890 == null)))?((((map__29890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29890):map__29890);
var msg = map__29890__$1;
var files = cljs.core.get.call(null,map__29890__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29890__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29890__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30043){
var state_val_30044 = (state_30043[(1)]);
if((state_val_30044 === (7))){
var inst_29904 = (state_30043[(7)]);
var inst_29906 = (state_30043[(8)]);
var inst_29907 = (state_30043[(9)]);
var inst_29905 = (state_30043[(10)]);
var inst_29912 = cljs.core._nth.call(null,inst_29905,inst_29907);
var inst_29913 = figwheel.client.file_reloading.eval_body.call(null,inst_29912,opts);
var inst_29914 = (inst_29907 + (1));
var tmp30045 = inst_29904;
var tmp30046 = inst_29906;
var tmp30047 = inst_29905;
var inst_29904__$1 = tmp30045;
var inst_29905__$1 = tmp30047;
var inst_29906__$1 = tmp30046;
var inst_29907__$1 = inst_29914;
var state_30043__$1 = (function (){var statearr_30048 = state_30043;
(statearr_30048[(7)] = inst_29904__$1);

(statearr_30048[(11)] = inst_29913);

(statearr_30048[(8)] = inst_29906__$1);

(statearr_30048[(9)] = inst_29907__$1);

(statearr_30048[(10)] = inst_29905__$1);

return statearr_30048;
})();
var statearr_30049_30135 = state_30043__$1;
(statearr_30049_30135[(2)] = null);

(statearr_30049_30135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (20))){
var inst_29947 = (state_30043[(12)]);
var inst_29955 = figwheel.client.file_reloading.sort_files.call(null,inst_29947);
var state_30043__$1 = state_30043;
var statearr_30050_30136 = state_30043__$1;
(statearr_30050_30136[(2)] = inst_29955);

(statearr_30050_30136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (27))){
var state_30043__$1 = state_30043;
var statearr_30051_30137 = state_30043__$1;
(statearr_30051_30137[(2)] = null);

(statearr_30051_30137[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (1))){
var inst_29896 = (state_30043[(13)]);
var inst_29893 = before_jsload.call(null,files);
var inst_29894 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29895 = (function (){return ((function (inst_29896,inst_29893,inst_29894,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29638_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29638_SHARP_);
});
;})(inst_29896,inst_29893,inst_29894,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29896__$1 = cljs.core.filter.call(null,inst_29895,files);
var inst_29897 = cljs.core.not_empty.call(null,inst_29896__$1);
var state_30043__$1 = (function (){var statearr_30052 = state_30043;
(statearr_30052[(13)] = inst_29896__$1);

(statearr_30052[(14)] = inst_29893);

(statearr_30052[(15)] = inst_29894);

return statearr_30052;
})();
if(cljs.core.truth_(inst_29897)){
var statearr_30053_30138 = state_30043__$1;
(statearr_30053_30138[(1)] = (2));

} else {
var statearr_30054_30139 = state_30043__$1;
(statearr_30054_30139[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (24))){
var state_30043__$1 = state_30043;
var statearr_30055_30140 = state_30043__$1;
(statearr_30055_30140[(2)] = null);

(statearr_30055_30140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (39))){
var inst_29997 = (state_30043[(16)]);
var state_30043__$1 = state_30043;
var statearr_30056_30141 = state_30043__$1;
(statearr_30056_30141[(2)] = inst_29997);

(statearr_30056_30141[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (46))){
var inst_30038 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30057_30142 = state_30043__$1;
(statearr_30057_30142[(2)] = inst_30038);

(statearr_30057_30142[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (4))){
var inst_29941 = (state_30043[(2)]);
var inst_29942 = cljs.core.List.EMPTY;
var inst_29943 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29942);
var inst_29944 = (function (){return ((function (inst_29941,inst_29942,inst_29943,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29639_SHARP_){
var and__19102__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29639_SHARP_);
if(cljs.core.truth_(and__19102__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29639_SHARP_));
} else {
return and__19102__auto__;
}
});
;})(inst_29941,inst_29942,inst_29943,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29945 = cljs.core.filter.call(null,inst_29944,files);
var inst_29946 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29947 = cljs.core.concat.call(null,inst_29945,inst_29946);
var state_30043__$1 = (function (){var statearr_30058 = state_30043;
(statearr_30058[(17)] = inst_29941);

(statearr_30058[(12)] = inst_29947);

(statearr_30058[(18)] = inst_29943);

return statearr_30058;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30059_30143 = state_30043__$1;
(statearr_30059_30143[(1)] = (16));

} else {
var statearr_30060_30144 = state_30043__$1;
(statearr_30060_30144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (15))){
var inst_29931 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30061_30145 = state_30043__$1;
(statearr_30061_30145[(2)] = inst_29931);

(statearr_30061_30145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (21))){
var inst_29957 = (state_30043[(19)]);
var inst_29957__$1 = (state_30043[(2)]);
var inst_29958 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29957__$1);
var state_30043__$1 = (function (){var statearr_30062 = state_30043;
(statearr_30062[(19)] = inst_29957__$1);

return statearr_30062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30043__$1,(22),inst_29958);
} else {
if((state_val_30044 === (31))){
var inst_30041 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30043__$1,inst_30041);
} else {
if((state_val_30044 === (32))){
var inst_29997 = (state_30043[(16)]);
var inst_30002 = inst_29997.cljs$lang$protocol_mask$partition0$;
var inst_30003 = (inst_30002 & (64));
var inst_30004 = inst_29997.cljs$core$ISeq$;
var inst_30005 = (inst_30003) || (inst_30004);
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_30005)){
var statearr_30063_30146 = state_30043__$1;
(statearr_30063_30146[(1)] = (35));

} else {
var statearr_30064_30147 = state_30043__$1;
(statearr_30064_30147[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (40))){
var inst_30018 = (state_30043[(20)]);
var inst_30017 = (state_30043[(2)]);
var inst_30018__$1 = cljs.core.get.call(null,inst_30017,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30019 = cljs.core.get.call(null,inst_30017,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30020 = cljs.core.not_empty.call(null,inst_30018__$1);
var state_30043__$1 = (function (){var statearr_30065 = state_30043;
(statearr_30065[(20)] = inst_30018__$1);

(statearr_30065[(21)] = inst_30019);

return statearr_30065;
})();
if(cljs.core.truth_(inst_30020)){
var statearr_30066_30148 = state_30043__$1;
(statearr_30066_30148[(1)] = (41));

} else {
var statearr_30067_30149 = state_30043__$1;
(statearr_30067_30149[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (33))){
var state_30043__$1 = state_30043;
var statearr_30068_30150 = state_30043__$1;
(statearr_30068_30150[(2)] = false);

(statearr_30068_30150[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (13))){
var inst_29917 = (state_30043[(22)]);
var inst_29921 = cljs.core.chunk_first.call(null,inst_29917);
var inst_29922 = cljs.core.chunk_rest.call(null,inst_29917);
var inst_29923 = cljs.core.count.call(null,inst_29921);
var inst_29904 = inst_29922;
var inst_29905 = inst_29921;
var inst_29906 = inst_29923;
var inst_29907 = (0);
var state_30043__$1 = (function (){var statearr_30069 = state_30043;
(statearr_30069[(7)] = inst_29904);

(statearr_30069[(8)] = inst_29906);

(statearr_30069[(9)] = inst_29907);

(statearr_30069[(10)] = inst_29905);

return statearr_30069;
})();
var statearr_30070_30151 = state_30043__$1;
(statearr_30070_30151[(2)] = null);

(statearr_30070_30151[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (22))){
var inst_29960 = (state_30043[(23)]);
var inst_29965 = (state_30043[(24)]);
var inst_29957 = (state_30043[(19)]);
var inst_29961 = (state_30043[(25)]);
var inst_29960__$1 = (state_30043[(2)]);
var inst_29961__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29960__$1);
var inst_29962 = (function (){var all_files = inst_29957;
var res_SINGLEQUOTE_ = inst_29960__$1;
var res = inst_29961__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29960,inst_29965,inst_29957,inst_29961,inst_29960__$1,inst_29961__$1,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29640_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29640_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29960,inst_29965,inst_29957,inst_29961,inst_29960__$1,inst_29961__$1,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29963 = cljs.core.filter.call(null,inst_29962,inst_29960__$1);
var inst_29964 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29965__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29964);
var inst_29966 = cljs.core.not_empty.call(null,inst_29965__$1);
var state_30043__$1 = (function (){var statearr_30071 = state_30043;
(statearr_30071[(23)] = inst_29960__$1);

(statearr_30071[(24)] = inst_29965__$1);

(statearr_30071[(26)] = inst_29963);

(statearr_30071[(25)] = inst_29961__$1);

return statearr_30071;
})();
if(cljs.core.truth_(inst_29966)){
var statearr_30072_30152 = state_30043__$1;
(statearr_30072_30152[(1)] = (23));

} else {
var statearr_30073_30153 = state_30043__$1;
(statearr_30073_30153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (36))){
var state_30043__$1 = state_30043;
var statearr_30074_30154 = state_30043__$1;
(statearr_30074_30154[(2)] = false);

(statearr_30074_30154[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (41))){
var inst_30018 = (state_30043[(20)]);
var inst_30022 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30023 = cljs.core.map.call(null,inst_30022,inst_30018);
var inst_30024 = cljs.core.pr_str.call(null,inst_30023);
var inst_30025 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30024)].join('');
var inst_30026 = figwheel.client.utils.log.call(null,inst_30025);
var state_30043__$1 = state_30043;
var statearr_30075_30155 = state_30043__$1;
(statearr_30075_30155[(2)] = inst_30026);

(statearr_30075_30155[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (43))){
var inst_30019 = (state_30043[(21)]);
var inst_30029 = (state_30043[(2)]);
var inst_30030 = cljs.core.not_empty.call(null,inst_30019);
var state_30043__$1 = (function (){var statearr_30076 = state_30043;
(statearr_30076[(27)] = inst_30029);

return statearr_30076;
})();
if(cljs.core.truth_(inst_30030)){
var statearr_30077_30156 = state_30043__$1;
(statearr_30077_30156[(1)] = (44));

} else {
var statearr_30078_30157 = state_30043__$1;
(statearr_30078_30157[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (29))){
var inst_29960 = (state_30043[(23)]);
var inst_29965 = (state_30043[(24)]);
var inst_29963 = (state_30043[(26)]);
var inst_29997 = (state_30043[(16)]);
var inst_29957 = (state_30043[(19)]);
var inst_29961 = (state_30043[(25)]);
var inst_29993 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29996 = (function (){var all_files = inst_29957;
var res_SINGLEQUOTE_ = inst_29960;
var res = inst_29961;
var files_not_loaded = inst_29963;
var dependencies_that_loaded = inst_29965;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29960,inst_29965,inst_29963,inst_29997,inst_29957,inst_29961,inst_29993,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29995){
var map__30079 = p__29995;
var map__30079__$1 = ((((!((map__30079 == null)))?((((map__30079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30079):map__30079);
var namespace = cljs.core.get.call(null,map__30079__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29960,inst_29965,inst_29963,inst_29997,inst_29957,inst_29961,inst_29993,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29997__$1 = cljs.core.group_by.call(null,inst_29996,inst_29963);
var inst_29999 = (inst_29997__$1 == null);
var inst_30000 = cljs.core.not.call(null,inst_29999);
var state_30043__$1 = (function (){var statearr_30081 = state_30043;
(statearr_30081[(28)] = inst_29993);

(statearr_30081[(16)] = inst_29997__$1);

return statearr_30081;
})();
if(inst_30000){
var statearr_30082_30158 = state_30043__$1;
(statearr_30082_30158[(1)] = (32));

} else {
var statearr_30083_30159 = state_30043__$1;
(statearr_30083_30159[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (44))){
var inst_30019 = (state_30043[(21)]);
var inst_30032 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30019);
var inst_30033 = cljs.core.pr_str.call(null,inst_30032);
var inst_30034 = [cljs.core.str("not required: "),cljs.core.str(inst_30033)].join('');
var inst_30035 = figwheel.client.utils.log.call(null,inst_30034);
var state_30043__$1 = state_30043;
var statearr_30084_30160 = state_30043__$1;
(statearr_30084_30160[(2)] = inst_30035);

(statearr_30084_30160[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (6))){
var inst_29938 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30085_30161 = state_30043__$1;
(statearr_30085_30161[(2)] = inst_29938);

(statearr_30085_30161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (28))){
var inst_29963 = (state_30043[(26)]);
var inst_29990 = (state_30043[(2)]);
var inst_29991 = cljs.core.not_empty.call(null,inst_29963);
var state_30043__$1 = (function (){var statearr_30086 = state_30043;
(statearr_30086[(29)] = inst_29990);

return statearr_30086;
})();
if(cljs.core.truth_(inst_29991)){
var statearr_30087_30162 = state_30043__$1;
(statearr_30087_30162[(1)] = (29));

} else {
var statearr_30088_30163 = state_30043__$1;
(statearr_30088_30163[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (25))){
var inst_29961 = (state_30043[(25)]);
var inst_29977 = (state_30043[(2)]);
var inst_29978 = cljs.core.not_empty.call(null,inst_29961);
var state_30043__$1 = (function (){var statearr_30089 = state_30043;
(statearr_30089[(30)] = inst_29977);

return statearr_30089;
})();
if(cljs.core.truth_(inst_29978)){
var statearr_30090_30164 = state_30043__$1;
(statearr_30090_30164[(1)] = (26));

} else {
var statearr_30091_30165 = state_30043__$1;
(statearr_30091_30165[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (34))){
var inst_30012 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_30012)){
var statearr_30092_30166 = state_30043__$1;
(statearr_30092_30166[(1)] = (38));

} else {
var statearr_30093_30167 = state_30043__$1;
(statearr_30093_30167[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (17))){
var state_30043__$1 = state_30043;
var statearr_30094_30168 = state_30043__$1;
(statearr_30094_30168[(2)] = recompile_dependents);

(statearr_30094_30168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (3))){
var state_30043__$1 = state_30043;
var statearr_30095_30169 = state_30043__$1;
(statearr_30095_30169[(2)] = null);

(statearr_30095_30169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (12))){
var inst_29934 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30096_30170 = state_30043__$1;
(statearr_30096_30170[(2)] = inst_29934);

(statearr_30096_30170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (2))){
var inst_29896 = (state_30043[(13)]);
var inst_29903 = cljs.core.seq.call(null,inst_29896);
var inst_29904 = inst_29903;
var inst_29905 = null;
var inst_29906 = (0);
var inst_29907 = (0);
var state_30043__$1 = (function (){var statearr_30097 = state_30043;
(statearr_30097[(7)] = inst_29904);

(statearr_30097[(8)] = inst_29906);

(statearr_30097[(9)] = inst_29907);

(statearr_30097[(10)] = inst_29905);

return statearr_30097;
})();
var statearr_30098_30171 = state_30043__$1;
(statearr_30098_30171[(2)] = null);

(statearr_30098_30171[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (23))){
var inst_29960 = (state_30043[(23)]);
var inst_29965 = (state_30043[(24)]);
var inst_29963 = (state_30043[(26)]);
var inst_29957 = (state_30043[(19)]);
var inst_29961 = (state_30043[(25)]);
var inst_29968 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29970 = (function (){var all_files = inst_29957;
var res_SINGLEQUOTE_ = inst_29960;
var res = inst_29961;
var files_not_loaded = inst_29963;
var dependencies_that_loaded = inst_29965;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29960,inst_29965,inst_29963,inst_29957,inst_29961,inst_29968,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29969){
var map__30099 = p__29969;
var map__30099__$1 = ((((!((map__30099 == null)))?((((map__30099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30099):map__30099);
var request_url = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29960,inst_29965,inst_29963,inst_29957,inst_29961,inst_29968,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29971 = cljs.core.reverse.call(null,inst_29965);
var inst_29972 = cljs.core.map.call(null,inst_29970,inst_29971);
var inst_29973 = cljs.core.pr_str.call(null,inst_29972);
var inst_29974 = figwheel.client.utils.log.call(null,inst_29973);
var state_30043__$1 = (function (){var statearr_30101 = state_30043;
(statearr_30101[(31)] = inst_29968);

return statearr_30101;
})();
var statearr_30102_30172 = state_30043__$1;
(statearr_30102_30172[(2)] = inst_29974);

(statearr_30102_30172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (35))){
var state_30043__$1 = state_30043;
var statearr_30103_30173 = state_30043__$1;
(statearr_30103_30173[(2)] = true);

(statearr_30103_30173[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (19))){
var inst_29947 = (state_30043[(12)]);
var inst_29953 = figwheel.client.file_reloading.expand_files.call(null,inst_29947);
var state_30043__$1 = state_30043;
var statearr_30104_30174 = state_30043__$1;
(statearr_30104_30174[(2)] = inst_29953);

(statearr_30104_30174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (11))){
var state_30043__$1 = state_30043;
var statearr_30105_30175 = state_30043__$1;
(statearr_30105_30175[(2)] = null);

(statearr_30105_30175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (9))){
var inst_29936 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30106_30176 = state_30043__$1;
(statearr_30106_30176[(2)] = inst_29936);

(statearr_30106_30176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (5))){
var inst_29906 = (state_30043[(8)]);
var inst_29907 = (state_30043[(9)]);
var inst_29909 = (inst_29907 < inst_29906);
var inst_29910 = inst_29909;
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_29910)){
var statearr_30107_30177 = state_30043__$1;
(statearr_30107_30177[(1)] = (7));

} else {
var statearr_30108_30178 = state_30043__$1;
(statearr_30108_30178[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (14))){
var inst_29917 = (state_30043[(22)]);
var inst_29926 = cljs.core.first.call(null,inst_29917);
var inst_29927 = figwheel.client.file_reloading.eval_body.call(null,inst_29926,opts);
var inst_29928 = cljs.core.next.call(null,inst_29917);
var inst_29904 = inst_29928;
var inst_29905 = null;
var inst_29906 = (0);
var inst_29907 = (0);
var state_30043__$1 = (function (){var statearr_30109 = state_30043;
(statearr_30109[(32)] = inst_29927);

(statearr_30109[(7)] = inst_29904);

(statearr_30109[(8)] = inst_29906);

(statearr_30109[(9)] = inst_29907);

(statearr_30109[(10)] = inst_29905);

return statearr_30109;
})();
var statearr_30110_30179 = state_30043__$1;
(statearr_30110_30179[(2)] = null);

(statearr_30110_30179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (45))){
var state_30043__$1 = state_30043;
var statearr_30111_30180 = state_30043__$1;
(statearr_30111_30180[(2)] = null);

(statearr_30111_30180[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (26))){
var inst_29960 = (state_30043[(23)]);
var inst_29965 = (state_30043[(24)]);
var inst_29963 = (state_30043[(26)]);
var inst_29957 = (state_30043[(19)]);
var inst_29961 = (state_30043[(25)]);
var inst_29980 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29982 = (function (){var all_files = inst_29957;
var res_SINGLEQUOTE_ = inst_29960;
var res = inst_29961;
var files_not_loaded = inst_29963;
var dependencies_that_loaded = inst_29965;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29960,inst_29965,inst_29963,inst_29957,inst_29961,inst_29980,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29981){
var map__30112 = p__29981;
var map__30112__$1 = ((((!((map__30112 == null)))?((((map__30112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30112):map__30112);
var namespace = cljs.core.get.call(null,map__30112__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30112__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29960,inst_29965,inst_29963,inst_29957,inst_29961,inst_29980,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29983 = cljs.core.map.call(null,inst_29982,inst_29961);
var inst_29984 = cljs.core.pr_str.call(null,inst_29983);
var inst_29985 = figwheel.client.utils.log.call(null,inst_29984);
var inst_29986 = (function (){var all_files = inst_29957;
var res_SINGLEQUOTE_ = inst_29960;
var res = inst_29961;
var files_not_loaded = inst_29963;
var dependencies_that_loaded = inst_29965;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29960,inst_29965,inst_29963,inst_29957,inst_29961,inst_29980,inst_29982,inst_29983,inst_29984,inst_29985,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29960,inst_29965,inst_29963,inst_29957,inst_29961,inst_29980,inst_29982,inst_29983,inst_29984,inst_29985,state_val_30044,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29987 = setTimeout(inst_29986,(10));
var state_30043__$1 = (function (){var statearr_30114 = state_30043;
(statearr_30114[(33)] = inst_29980);

(statearr_30114[(34)] = inst_29985);

return statearr_30114;
})();
var statearr_30115_30181 = state_30043__$1;
(statearr_30115_30181[(2)] = inst_29987);

(statearr_30115_30181[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (16))){
var state_30043__$1 = state_30043;
var statearr_30116_30182 = state_30043__$1;
(statearr_30116_30182[(2)] = reload_dependents);

(statearr_30116_30182[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (38))){
var inst_29997 = (state_30043[(16)]);
var inst_30014 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29997);
var state_30043__$1 = state_30043;
var statearr_30117_30183 = state_30043__$1;
(statearr_30117_30183[(2)] = inst_30014);

(statearr_30117_30183[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (30))){
var state_30043__$1 = state_30043;
var statearr_30118_30184 = state_30043__$1;
(statearr_30118_30184[(2)] = null);

(statearr_30118_30184[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (10))){
var inst_29917 = (state_30043[(22)]);
var inst_29919 = cljs.core.chunked_seq_QMARK_.call(null,inst_29917);
var state_30043__$1 = state_30043;
if(inst_29919){
var statearr_30119_30185 = state_30043__$1;
(statearr_30119_30185[(1)] = (13));

} else {
var statearr_30120_30186 = state_30043__$1;
(statearr_30120_30186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (18))){
var inst_29951 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_29951)){
var statearr_30121_30187 = state_30043__$1;
(statearr_30121_30187[(1)] = (19));

} else {
var statearr_30122_30188 = state_30043__$1;
(statearr_30122_30188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (42))){
var state_30043__$1 = state_30043;
var statearr_30123_30189 = state_30043__$1;
(statearr_30123_30189[(2)] = null);

(statearr_30123_30189[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (37))){
var inst_30009 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30124_30190 = state_30043__$1;
(statearr_30124_30190[(2)] = inst_30009);

(statearr_30124_30190[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (8))){
var inst_29904 = (state_30043[(7)]);
var inst_29917 = (state_30043[(22)]);
var inst_29917__$1 = cljs.core.seq.call(null,inst_29904);
var state_30043__$1 = (function (){var statearr_30125 = state_30043;
(statearr_30125[(22)] = inst_29917__$1);

return statearr_30125;
})();
if(inst_29917__$1){
var statearr_30126_30191 = state_30043__$1;
(statearr_30126_30191[(1)] = (10));

} else {
var statearr_30127_30192 = state_30043__$1;
(statearr_30127_30192[(1)] = (11));

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
}
});})(c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22949__auto__,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto____0 = (function (){
var statearr_30131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30131[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto__);

(statearr_30131[(1)] = (1));

return statearr_30131;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto____1 = (function (state_30043){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_30043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e30132){if((e30132 instanceof Object)){
var ex__22953__auto__ = e30132;
var statearr_30133_30193 = state_30043;
(statearr_30133_30193[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30194 = state_30043;
state_30043 = G__30194;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto__ = function(state_30043){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto____1.call(this,state_30043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23016__auto__ = (function (){var statearr_30134 = f__23015__auto__.call(null);
(statearr_30134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto__);

return statearr_30134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto__,map__29889,map__29889__$1,opts,before_jsload,on_jsload,reload_dependents,map__29890,map__29890__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23014__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30197,link){
var map__30200 = p__30197;
var map__30200__$1 = ((((!((map__30200 == null)))?((((map__30200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30200):map__30200);
var file = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30200,map__30200__$1,file){
return (function (p1__30195_SHARP_,p2__30196_SHARP_){
if(cljs.core._EQ_.call(null,p1__30195_SHARP_,p2__30196_SHARP_)){
return p1__30195_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30200,map__30200__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30206){
var map__30207 = p__30206;
var map__30207__$1 = ((((!((map__30207 == null)))?((((map__30207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30207):map__30207);
var match_length = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30207__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30202_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30202_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30209 = [];
var len__20172__auto___30212 = arguments.length;
var i__20173__auto___30213 = (0);
while(true){
if((i__20173__auto___30213 < len__20172__auto___30212)){
args30209.push((arguments[i__20173__auto___30213]));

var G__30214 = (i__20173__auto___30213 + (1));
i__20173__auto___30213 = G__30214;
continue;
} else {
}
break;
}

var G__30211 = args30209.length;
switch (G__30211) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30209.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30216_SHARP_,p2__30217_SHARP_){
return cljs.core.assoc.call(null,p1__30216_SHARP_,cljs.core.get.call(null,p2__30217_SHARP_,key),p2__30217_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30218){
var map__30221 = p__30218;
var map__30221__$1 = ((((!((map__30221 == null)))?((((map__30221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30221):map__30221);
var f_data = map__30221__$1;
var file = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30223,files_msg){
var map__30230 = p__30223;
var map__30230__$1 = ((((!((map__30230 == null)))?((((map__30230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30230):map__30230);
var opts = map__30230__$1;
var on_cssload = cljs.core.get.call(null,map__30230__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30232_30236 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30233_30237 = null;
var count__30234_30238 = (0);
var i__30235_30239 = (0);
while(true){
if((i__30235_30239 < count__30234_30238)){
var f_30240 = cljs.core._nth.call(null,chunk__30233_30237,i__30235_30239);
figwheel.client.file_reloading.reload_css_file.call(null,f_30240);

var G__30241 = seq__30232_30236;
var G__30242 = chunk__30233_30237;
var G__30243 = count__30234_30238;
var G__30244 = (i__30235_30239 + (1));
seq__30232_30236 = G__30241;
chunk__30233_30237 = G__30242;
count__30234_30238 = G__30243;
i__30235_30239 = G__30244;
continue;
} else {
var temp__4425__auto___30245 = cljs.core.seq.call(null,seq__30232_30236);
if(temp__4425__auto___30245){
var seq__30232_30246__$1 = temp__4425__auto___30245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30232_30246__$1)){
var c__19917__auto___30247 = cljs.core.chunk_first.call(null,seq__30232_30246__$1);
var G__30248 = cljs.core.chunk_rest.call(null,seq__30232_30246__$1);
var G__30249 = c__19917__auto___30247;
var G__30250 = cljs.core.count.call(null,c__19917__auto___30247);
var G__30251 = (0);
seq__30232_30236 = G__30248;
chunk__30233_30237 = G__30249;
count__30234_30238 = G__30250;
i__30235_30239 = G__30251;
continue;
} else {
var f_30252 = cljs.core.first.call(null,seq__30232_30246__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30252);

var G__30253 = cljs.core.next.call(null,seq__30232_30246__$1);
var G__30254 = null;
var G__30255 = (0);
var G__30256 = (0);
seq__30232_30236 = G__30253;
chunk__30233_30237 = G__30254;
count__30234_30238 = G__30255;
i__30235_30239 = G__30256;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30230,map__30230__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30230,map__30230__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map