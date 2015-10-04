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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29783_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29783_SHARP_));
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
var seq__29788 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29789 = null;
var count__29790 = (0);
var i__29791 = (0);
while(true){
if((i__29791 < count__29790)){
var n = cljs.core._nth.call(null,chunk__29789,i__29791);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29792 = seq__29788;
var G__29793 = chunk__29789;
var G__29794 = count__29790;
var G__29795 = (i__29791 + (1));
seq__29788 = G__29792;
chunk__29789 = G__29793;
count__29790 = G__29794;
i__29791 = G__29795;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29788);
if(temp__4425__auto__){
var seq__29788__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29788__$1)){
var c__19917__auto__ = cljs.core.chunk_first.call(null,seq__29788__$1);
var G__29796 = cljs.core.chunk_rest.call(null,seq__29788__$1);
var G__29797 = c__19917__auto__;
var G__29798 = cljs.core.count.call(null,c__19917__auto__);
var G__29799 = (0);
seq__29788 = G__29796;
chunk__29789 = G__29797;
count__29790 = G__29798;
i__29791 = G__29799;
continue;
} else {
var n = cljs.core.first.call(null,seq__29788__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29800 = cljs.core.next.call(null,seq__29788__$1);
var G__29801 = null;
var G__29802 = (0);
var G__29803 = (0);
seq__29788 = G__29800;
chunk__29789 = G__29801;
count__29790 = G__29802;
i__29791 = G__29803;
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

var seq__29842_29849 = cljs.core.seq.call(null,deps);
var chunk__29843_29850 = null;
var count__29844_29851 = (0);
var i__29845_29852 = (0);
while(true){
if((i__29845_29852 < count__29844_29851)){
var dep_29853 = cljs.core._nth.call(null,chunk__29843_29850,i__29845_29852);
topo_sort_helper_STAR_.call(null,dep_29853,(depth + (1)),state);

var G__29854 = seq__29842_29849;
var G__29855 = chunk__29843_29850;
var G__29856 = count__29844_29851;
var G__29857 = (i__29845_29852 + (1));
seq__29842_29849 = G__29854;
chunk__29843_29850 = G__29855;
count__29844_29851 = G__29856;
i__29845_29852 = G__29857;
continue;
} else {
var temp__4425__auto___29858 = cljs.core.seq.call(null,seq__29842_29849);
if(temp__4425__auto___29858){
var seq__29842_29859__$1 = temp__4425__auto___29858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29842_29859__$1)){
var c__19917__auto___29860 = cljs.core.chunk_first.call(null,seq__29842_29859__$1);
var G__29861 = cljs.core.chunk_rest.call(null,seq__29842_29859__$1);
var G__29862 = c__19917__auto___29860;
var G__29863 = cljs.core.count.call(null,c__19917__auto___29860);
var G__29864 = (0);
seq__29842_29849 = G__29861;
chunk__29843_29850 = G__29862;
count__29844_29851 = G__29863;
i__29845_29852 = G__29864;
continue;
} else {
var dep_29865 = cljs.core.first.call(null,seq__29842_29859__$1);
topo_sort_helper_STAR_.call(null,dep_29865,(depth + (1)),state);

var G__29866 = cljs.core.next.call(null,seq__29842_29859__$1);
var G__29867 = null;
var G__29868 = (0);
var G__29869 = (0);
seq__29842_29849 = G__29866;
chunk__29843_29850 = G__29867;
count__29844_29851 = G__29868;
i__29845_29852 = G__29869;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29846){
var vec__29848 = p__29846;
var x = cljs.core.nth.call(null,vec__29848,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29848,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29848,x,xs,get_deps__$1){
return (function (p1__29804_SHARP_){
return clojure.set.difference.call(null,p1__29804_SHARP_,x);
});})(vec__29848,x,xs,get_deps__$1))
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
var seq__29882 = cljs.core.seq.call(null,provides);
var chunk__29883 = null;
var count__29884 = (0);
var i__29885 = (0);
while(true){
if((i__29885 < count__29884)){
var prov = cljs.core._nth.call(null,chunk__29883,i__29885);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29886_29894 = cljs.core.seq.call(null,requires);
var chunk__29887_29895 = null;
var count__29888_29896 = (0);
var i__29889_29897 = (0);
while(true){
if((i__29889_29897 < count__29888_29896)){
var req_29898 = cljs.core._nth.call(null,chunk__29887_29895,i__29889_29897);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29898,prov);

var G__29899 = seq__29886_29894;
var G__29900 = chunk__29887_29895;
var G__29901 = count__29888_29896;
var G__29902 = (i__29889_29897 + (1));
seq__29886_29894 = G__29899;
chunk__29887_29895 = G__29900;
count__29888_29896 = G__29901;
i__29889_29897 = G__29902;
continue;
} else {
var temp__4425__auto___29903 = cljs.core.seq.call(null,seq__29886_29894);
if(temp__4425__auto___29903){
var seq__29886_29904__$1 = temp__4425__auto___29903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29886_29904__$1)){
var c__19917__auto___29905 = cljs.core.chunk_first.call(null,seq__29886_29904__$1);
var G__29906 = cljs.core.chunk_rest.call(null,seq__29886_29904__$1);
var G__29907 = c__19917__auto___29905;
var G__29908 = cljs.core.count.call(null,c__19917__auto___29905);
var G__29909 = (0);
seq__29886_29894 = G__29906;
chunk__29887_29895 = G__29907;
count__29888_29896 = G__29908;
i__29889_29897 = G__29909;
continue;
} else {
var req_29910 = cljs.core.first.call(null,seq__29886_29904__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29910,prov);

var G__29911 = cljs.core.next.call(null,seq__29886_29904__$1);
var G__29912 = null;
var G__29913 = (0);
var G__29914 = (0);
seq__29886_29894 = G__29911;
chunk__29887_29895 = G__29912;
count__29888_29896 = G__29913;
i__29889_29897 = G__29914;
continue;
}
} else {
}
}
break;
}

var G__29915 = seq__29882;
var G__29916 = chunk__29883;
var G__29917 = count__29884;
var G__29918 = (i__29885 + (1));
seq__29882 = G__29915;
chunk__29883 = G__29916;
count__29884 = G__29917;
i__29885 = G__29918;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29882);
if(temp__4425__auto__){
var seq__29882__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29882__$1)){
var c__19917__auto__ = cljs.core.chunk_first.call(null,seq__29882__$1);
var G__29919 = cljs.core.chunk_rest.call(null,seq__29882__$1);
var G__29920 = c__19917__auto__;
var G__29921 = cljs.core.count.call(null,c__19917__auto__);
var G__29922 = (0);
seq__29882 = G__29919;
chunk__29883 = G__29920;
count__29884 = G__29921;
i__29885 = G__29922;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29882__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29890_29923 = cljs.core.seq.call(null,requires);
var chunk__29891_29924 = null;
var count__29892_29925 = (0);
var i__29893_29926 = (0);
while(true){
if((i__29893_29926 < count__29892_29925)){
var req_29927 = cljs.core._nth.call(null,chunk__29891_29924,i__29893_29926);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29927,prov);

var G__29928 = seq__29890_29923;
var G__29929 = chunk__29891_29924;
var G__29930 = count__29892_29925;
var G__29931 = (i__29893_29926 + (1));
seq__29890_29923 = G__29928;
chunk__29891_29924 = G__29929;
count__29892_29925 = G__29930;
i__29893_29926 = G__29931;
continue;
} else {
var temp__4425__auto___29932__$1 = cljs.core.seq.call(null,seq__29890_29923);
if(temp__4425__auto___29932__$1){
var seq__29890_29933__$1 = temp__4425__auto___29932__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29890_29933__$1)){
var c__19917__auto___29934 = cljs.core.chunk_first.call(null,seq__29890_29933__$1);
var G__29935 = cljs.core.chunk_rest.call(null,seq__29890_29933__$1);
var G__29936 = c__19917__auto___29934;
var G__29937 = cljs.core.count.call(null,c__19917__auto___29934);
var G__29938 = (0);
seq__29890_29923 = G__29935;
chunk__29891_29924 = G__29936;
count__29892_29925 = G__29937;
i__29893_29926 = G__29938;
continue;
} else {
var req_29939 = cljs.core.first.call(null,seq__29890_29933__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29939,prov);

var G__29940 = cljs.core.next.call(null,seq__29890_29933__$1);
var G__29941 = null;
var G__29942 = (0);
var G__29943 = (0);
seq__29890_29923 = G__29940;
chunk__29891_29924 = G__29941;
count__29892_29925 = G__29942;
i__29893_29926 = G__29943;
continue;
}
} else {
}
}
break;
}

var G__29944 = cljs.core.next.call(null,seq__29882__$1);
var G__29945 = null;
var G__29946 = (0);
var G__29947 = (0);
seq__29882 = G__29944;
chunk__29883 = G__29945;
count__29884 = G__29946;
i__29885 = G__29947;
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
var seq__29952_29956 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29953_29957 = null;
var count__29954_29958 = (0);
var i__29955_29959 = (0);
while(true){
if((i__29955_29959 < count__29954_29958)){
var ns_29960 = cljs.core._nth.call(null,chunk__29953_29957,i__29955_29959);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29960);

var G__29961 = seq__29952_29956;
var G__29962 = chunk__29953_29957;
var G__29963 = count__29954_29958;
var G__29964 = (i__29955_29959 + (1));
seq__29952_29956 = G__29961;
chunk__29953_29957 = G__29962;
count__29954_29958 = G__29963;
i__29955_29959 = G__29964;
continue;
} else {
var temp__4425__auto___29965 = cljs.core.seq.call(null,seq__29952_29956);
if(temp__4425__auto___29965){
var seq__29952_29966__$1 = temp__4425__auto___29965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29952_29966__$1)){
var c__19917__auto___29967 = cljs.core.chunk_first.call(null,seq__29952_29966__$1);
var G__29968 = cljs.core.chunk_rest.call(null,seq__29952_29966__$1);
var G__29969 = c__19917__auto___29967;
var G__29970 = cljs.core.count.call(null,c__19917__auto___29967);
var G__29971 = (0);
seq__29952_29956 = G__29968;
chunk__29953_29957 = G__29969;
count__29954_29958 = G__29970;
i__29955_29959 = G__29971;
continue;
} else {
var ns_29972 = cljs.core.first.call(null,seq__29952_29966__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29972);

var G__29973 = cljs.core.next.call(null,seq__29952_29966__$1);
var G__29974 = null;
var G__29975 = (0);
var G__29976 = (0);
seq__29952_29956 = G__29973;
chunk__29953_29957 = G__29974;
count__29954_29958 = G__29975;
i__29955_29959 = G__29976;
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
var G__29977__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29978__i = 0, G__29978__a = new Array(arguments.length -  0);
while (G__29978__i < G__29978__a.length) {G__29978__a[G__29978__i] = arguments[G__29978__i + 0]; ++G__29978__i;}
  args = new cljs.core.IndexedSeq(G__29978__a,0);
} 
return G__29977__delegate.call(this,args);};
G__29977.cljs$lang$maxFixedArity = 0;
G__29977.cljs$lang$applyTo = (function (arglist__29979){
var args = cljs.core.seq(arglist__29979);
return G__29977__delegate(args);
});
G__29977.cljs$core$IFn$_invoke$arity$variadic = G__29977__delegate;
return G__29977;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29980 = cljs.core._EQ_;
var expr__29981 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29980.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29981))){
return ((function (pred__29980,expr__29981){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29983){if((e29983 instanceof Error)){
var e = e29983;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29983;

}
}})());
});
;})(pred__29980,expr__29981))
} else {
if(cljs.core.truth_(pred__29980.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29981))){
return ((function (pred__29980,expr__29981){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29980,expr__29981){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29980,expr__29981))
);

return deferred.addErrback(((function (deferred,pred__29980,expr__29981){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29980,expr__29981))
);
});
;})(pred__29980,expr__29981))
} else {
return ((function (pred__29980,expr__29981){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29980,expr__29981))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29984,callback){
var map__29987 = p__29984;
var map__29987__$1 = ((((!((map__29987 == null)))?((((map__29987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29987):map__29987);
var file_msg = map__29987__$1;
var request_url = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29987,map__29987__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29987,map__29987__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__){
return (function (state_30011){
var state_val_30012 = (state_30011[(1)]);
if((state_val_30012 === (7))){
var inst_30007 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
var statearr_30013_30033 = state_30011__$1;
(statearr_30013_30033[(2)] = inst_30007);

(statearr_30013_30033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (1))){
var state_30011__$1 = state_30011;
var statearr_30014_30034 = state_30011__$1;
(statearr_30014_30034[(2)] = null);

(statearr_30014_30034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (4))){
var inst_29991 = (state_30011[(7)]);
var inst_29991__$1 = (state_30011[(2)]);
var state_30011__$1 = (function (){var statearr_30015 = state_30011;
(statearr_30015[(7)] = inst_29991__$1);

return statearr_30015;
})();
if(cljs.core.truth_(inst_29991__$1)){
var statearr_30016_30035 = state_30011__$1;
(statearr_30016_30035[(1)] = (5));

} else {
var statearr_30017_30036 = state_30011__$1;
(statearr_30017_30036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (6))){
var state_30011__$1 = state_30011;
var statearr_30018_30037 = state_30011__$1;
(statearr_30018_30037[(2)] = null);

(statearr_30018_30037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (3))){
var inst_30009 = (state_30011[(2)]);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30011__$1,inst_30009);
} else {
if((state_val_30012 === (2))){
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30012 === (11))){
var inst_30003 = (state_30011[(2)]);
var state_30011__$1 = (function (){var statearr_30019 = state_30011;
(statearr_30019[(8)] = inst_30003);

return statearr_30019;
})();
var statearr_30020_30038 = state_30011__$1;
(statearr_30020_30038[(2)] = null);

(statearr_30020_30038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (9))){
var inst_29995 = (state_30011[(9)]);
var inst_29997 = (state_30011[(10)]);
var inst_29999 = inst_29997.call(null,inst_29995);
var state_30011__$1 = state_30011;
var statearr_30021_30039 = state_30011__$1;
(statearr_30021_30039[(2)] = inst_29999);

(statearr_30021_30039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (5))){
var inst_29991 = (state_30011[(7)]);
var inst_29993 = figwheel.client.file_reloading.blocking_load.call(null,inst_29991);
var state_30011__$1 = state_30011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30011__$1,(8),inst_29993);
} else {
if((state_val_30012 === (10))){
var inst_29995 = (state_30011[(9)]);
var inst_30001 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29995);
var state_30011__$1 = state_30011;
var statearr_30022_30040 = state_30011__$1;
(statearr_30022_30040[(2)] = inst_30001);

(statearr_30022_30040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30012 === (8))){
var inst_29991 = (state_30011[(7)]);
var inst_29997 = (state_30011[(10)]);
var inst_29995 = (state_30011[(2)]);
var inst_29996 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29997__$1 = cljs.core.get.call(null,inst_29996,inst_29991);
var state_30011__$1 = (function (){var statearr_30023 = state_30011;
(statearr_30023[(9)] = inst_29995);

(statearr_30023[(10)] = inst_29997__$1);

return statearr_30023;
})();
if(cljs.core.truth_(inst_29997__$1)){
var statearr_30024_30041 = state_30011__$1;
(statearr_30024_30041[(1)] = (9));

} else {
var statearr_30025_30042 = state_30011__$1;
(statearr_30025_30042[(1)] = (10));

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
});})(c__22472__auto__))
;
return ((function (switch__22407__auto__,c__22472__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22408__auto__ = null;
var figwheel$client$file_reloading$state_machine__22408__auto____0 = (function (){
var statearr_30029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30029[(0)] = figwheel$client$file_reloading$state_machine__22408__auto__);

(statearr_30029[(1)] = (1));

return statearr_30029;
});
var figwheel$client$file_reloading$state_machine__22408__auto____1 = (function (state_30011){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_30011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e30030){if((e30030 instanceof Object)){
var ex__22411__auto__ = e30030;
var statearr_30031_30043 = state_30011;
(statearr_30031_30043[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30044 = state_30011;
state_30011 = G__30044;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22408__auto__ = function(state_30011){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22408__auto____1.call(this,state_30011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22408__auto____0;
figwheel$client$file_reloading$state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22408__auto____1;
return figwheel$client$file_reloading$state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__))
})();
var state__22474__auto__ = (function (){var statearr_30032 = f__22473__auto__.call(null);
(statearr_30032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_30032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__))
);

return c__22472__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30045,callback){
var map__30048 = p__30045;
var map__30048__$1 = ((((!((map__30048 == null)))?((((map__30048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30048):map__30048);
var file_msg = map__30048__$1;
var namespace = cljs.core.get.call(null,map__30048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30048,map__30048__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30048,map__30048__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30050){
var map__30053 = p__30050;
var map__30053__$1 = ((((!((map__30053 == null)))?((((map__30053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30053):map__30053);
var file_msg = map__30053__$1;
var namespace = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30055,callback){
var map__30058 = p__30055;
var map__30058__$1 = ((((!((map__30058 == null)))?((((map__30058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30058):map__30058);
var file_msg = map__30058__$1;
var request_url = cljs.core.get.call(null,map__30058__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30058__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22472__auto___30146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___30146,out){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___30146,out){
return (function (state_30128){
var state_val_30129 = (state_30128[(1)]);
if((state_val_30129 === (1))){
var inst_30106 = cljs.core.nth.call(null,files,(0),null);
var inst_30107 = cljs.core.nthnext.call(null,files,(1));
var inst_30108 = files;
var state_30128__$1 = (function (){var statearr_30130 = state_30128;
(statearr_30130[(7)] = inst_30108);

(statearr_30130[(8)] = inst_30107);

(statearr_30130[(9)] = inst_30106);

return statearr_30130;
})();
var statearr_30131_30147 = state_30128__$1;
(statearr_30131_30147[(2)] = null);

(statearr_30131_30147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (2))){
var inst_30108 = (state_30128[(7)]);
var inst_30111 = (state_30128[(10)]);
var inst_30111__$1 = cljs.core.nth.call(null,inst_30108,(0),null);
var inst_30112 = cljs.core.nthnext.call(null,inst_30108,(1));
var inst_30113 = (inst_30111__$1 == null);
var inst_30114 = cljs.core.not.call(null,inst_30113);
var state_30128__$1 = (function (){var statearr_30132 = state_30128;
(statearr_30132[(10)] = inst_30111__$1);

(statearr_30132[(11)] = inst_30112);

return statearr_30132;
})();
if(inst_30114){
var statearr_30133_30148 = state_30128__$1;
(statearr_30133_30148[(1)] = (4));

} else {
var statearr_30134_30149 = state_30128__$1;
(statearr_30134_30149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (3))){
var inst_30126 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30128__$1,inst_30126);
} else {
if((state_val_30129 === (4))){
var inst_30111 = (state_30128[(10)]);
var inst_30116 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30111);
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30128__$1,(7),inst_30116);
} else {
if((state_val_30129 === (5))){
var inst_30122 = cljs.core.async.close_BANG_.call(null,out);
var state_30128__$1 = state_30128;
var statearr_30135_30150 = state_30128__$1;
(statearr_30135_30150[(2)] = inst_30122);

(statearr_30135_30150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (6))){
var inst_30124 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
var statearr_30136_30151 = state_30128__$1;
(statearr_30136_30151[(2)] = inst_30124);

(statearr_30136_30151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (7))){
var inst_30112 = (state_30128[(11)]);
var inst_30118 = (state_30128[(2)]);
var inst_30119 = cljs.core.async.put_BANG_.call(null,out,inst_30118);
var inst_30108 = inst_30112;
var state_30128__$1 = (function (){var statearr_30137 = state_30128;
(statearr_30137[(7)] = inst_30108);

(statearr_30137[(12)] = inst_30119);

return statearr_30137;
})();
var statearr_30138_30152 = state_30128__$1;
(statearr_30138_30152[(2)] = null);

(statearr_30138_30152[(1)] = (2));


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
});})(c__22472__auto___30146,out))
;
return ((function (switch__22407__auto__,c__22472__auto___30146,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto____0 = (function (){
var statearr_30142 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30142[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto__);

(statearr_30142[(1)] = (1));

return statearr_30142;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto____1 = (function (state_30128){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_30128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e30143){if((e30143 instanceof Object)){
var ex__22411__auto__ = e30143;
var statearr_30144_30153 = state_30128;
(statearr_30144_30153[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30154 = state_30128;
state_30128 = G__30154;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto__ = function(state_30128){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto____1.call(this,state_30128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___30146,out))
})();
var state__22474__auto__ = (function (){var statearr_30145 = f__22473__auto__.call(null);
(statearr_30145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___30146);

return statearr_30145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___30146,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30155,opts){
var map__30159 = p__30155;
var map__30159__$1 = ((((!((map__30159 == null)))?((((map__30159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30159):map__30159);
var eval_body__$1 = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30161){var e = e30161;
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
return (function (p1__30162_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30162_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30167){
var vec__30168 = p__30167;
var k = cljs.core.nth.call(null,vec__30168,(0),null);
var v = cljs.core.nth.call(null,vec__30168,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30169){
var vec__30170 = p__30169;
var k = cljs.core.nth.call(null,vec__30170,(0),null);
var v = cljs.core.nth.call(null,vec__30170,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30174,p__30175){
var map__30422 = p__30174;
var map__30422__$1 = ((((!((map__30422 == null)))?((((map__30422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30422):map__30422);
var opts = map__30422__$1;
var before_jsload = cljs.core.get.call(null,map__30422__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30422__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30422__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30423 = p__30175;
var map__30423__$1 = ((((!((map__30423 == null)))?((((map__30423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30423):map__30423);
var msg = map__30423__$1;
var files = cljs.core.get.call(null,map__30423__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30423__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30423__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30576){
var state_val_30577 = (state_30576[(1)]);
if((state_val_30577 === (7))){
var inst_30438 = (state_30576[(7)]);
var inst_30440 = (state_30576[(8)]);
var inst_30437 = (state_30576[(9)]);
var inst_30439 = (state_30576[(10)]);
var inst_30445 = cljs.core._nth.call(null,inst_30438,inst_30440);
var inst_30446 = figwheel.client.file_reloading.eval_body.call(null,inst_30445,opts);
var inst_30447 = (inst_30440 + (1));
var tmp30578 = inst_30438;
var tmp30579 = inst_30437;
var tmp30580 = inst_30439;
var inst_30437__$1 = tmp30579;
var inst_30438__$1 = tmp30578;
var inst_30439__$1 = tmp30580;
var inst_30440__$1 = inst_30447;
var state_30576__$1 = (function (){var statearr_30581 = state_30576;
(statearr_30581[(7)] = inst_30438__$1);

(statearr_30581[(8)] = inst_30440__$1);

(statearr_30581[(11)] = inst_30446);

(statearr_30581[(9)] = inst_30437__$1);

(statearr_30581[(10)] = inst_30439__$1);

return statearr_30581;
})();
var statearr_30582_30668 = state_30576__$1;
(statearr_30582_30668[(2)] = null);

(statearr_30582_30668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (20))){
var inst_30480 = (state_30576[(12)]);
var inst_30488 = figwheel.client.file_reloading.sort_files.call(null,inst_30480);
var state_30576__$1 = state_30576;
var statearr_30583_30669 = state_30576__$1;
(statearr_30583_30669[(2)] = inst_30488);

(statearr_30583_30669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (27))){
var state_30576__$1 = state_30576;
var statearr_30584_30670 = state_30576__$1;
(statearr_30584_30670[(2)] = null);

(statearr_30584_30670[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (1))){
var inst_30429 = (state_30576[(13)]);
var inst_30426 = before_jsload.call(null,files);
var inst_30427 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30428 = (function (){return ((function (inst_30429,inst_30426,inst_30427,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30171_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30171_SHARP_);
});
;})(inst_30429,inst_30426,inst_30427,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30429__$1 = cljs.core.filter.call(null,inst_30428,files);
var inst_30430 = cljs.core.not_empty.call(null,inst_30429__$1);
var state_30576__$1 = (function (){var statearr_30585 = state_30576;
(statearr_30585[(14)] = inst_30426);

(statearr_30585[(15)] = inst_30427);

(statearr_30585[(13)] = inst_30429__$1);

return statearr_30585;
})();
if(cljs.core.truth_(inst_30430)){
var statearr_30586_30671 = state_30576__$1;
(statearr_30586_30671[(1)] = (2));

} else {
var statearr_30587_30672 = state_30576__$1;
(statearr_30587_30672[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (24))){
var state_30576__$1 = state_30576;
var statearr_30588_30673 = state_30576__$1;
(statearr_30588_30673[(2)] = null);

(statearr_30588_30673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (39))){
var inst_30530 = (state_30576[(16)]);
var state_30576__$1 = state_30576;
var statearr_30589_30674 = state_30576__$1;
(statearr_30589_30674[(2)] = inst_30530);

(statearr_30589_30674[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (46))){
var inst_30571 = (state_30576[(2)]);
var state_30576__$1 = state_30576;
var statearr_30590_30675 = state_30576__$1;
(statearr_30590_30675[(2)] = inst_30571);

(statearr_30590_30675[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (4))){
var inst_30474 = (state_30576[(2)]);
var inst_30475 = cljs.core.List.EMPTY;
var inst_30476 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30475);
var inst_30477 = (function (){return ((function (inst_30474,inst_30475,inst_30476,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30172_SHARP_){
var and__19102__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30172_SHARP_);
if(cljs.core.truth_(and__19102__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30172_SHARP_));
} else {
return and__19102__auto__;
}
});
;})(inst_30474,inst_30475,inst_30476,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30478 = cljs.core.filter.call(null,inst_30477,files);
var inst_30479 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30480 = cljs.core.concat.call(null,inst_30478,inst_30479);
var state_30576__$1 = (function (){var statearr_30591 = state_30576;
(statearr_30591[(12)] = inst_30480);

(statearr_30591[(17)] = inst_30476);

(statearr_30591[(18)] = inst_30474);

return statearr_30591;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30592_30676 = state_30576__$1;
(statearr_30592_30676[(1)] = (16));

} else {
var statearr_30593_30677 = state_30576__$1;
(statearr_30593_30677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (15))){
var inst_30464 = (state_30576[(2)]);
var state_30576__$1 = state_30576;
var statearr_30594_30678 = state_30576__$1;
(statearr_30594_30678[(2)] = inst_30464);

(statearr_30594_30678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (21))){
var inst_30490 = (state_30576[(19)]);
var inst_30490__$1 = (state_30576[(2)]);
var inst_30491 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30490__$1);
var state_30576__$1 = (function (){var statearr_30595 = state_30576;
(statearr_30595[(19)] = inst_30490__$1);

return statearr_30595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30576__$1,(22),inst_30491);
} else {
if((state_val_30577 === (31))){
var inst_30574 = (state_30576[(2)]);
var state_30576__$1 = state_30576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30576__$1,inst_30574);
} else {
if((state_val_30577 === (32))){
var inst_30530 = (state_30576[(16)]);
var inst_30535 = inst_30530.cljs$lang$protocol_mask$partition0$;
var inst_30536 = (inst_30535 & (64));
var inst_30537 = inst_30530.cljs$core$ISeq$;
var inst_30538 = (inst_30536) || (inst_30537);
var state_30576__$1 = state_30576;
if(cljs.core.truth_(inst_30538)){
var statearr_30596_30679 = state_30576__$1;
(statearr_30596_30679[(1)] = (35));

} else {
var statearr_30597_30680 = state_30576__$1;
(statearr_30597_30680[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (40))){
var inst_30551 = (state_30576[(20)]);
var inst_30550 = (state_30576[(2)]);
var inst_30551__$1 = cljs.core.get.call(null,inst_30550,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30552 = cljs.core.get.call(null,inst_30550,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30553 = cljs.core.not_empty.call(null,inst_30551__$1);
var state_30576__$1 = (function (){var statearr_30598 = state_30576;
(statearr_30598[(20)] = inst_30551__$1);

(statearr_30598[(21)] = inst_30552);

return statearr_30598;
})();
if(cljs.core.truth_(inst_30553)){
var statearr_30599_30681 = state_30576__$1;
(statearr_30599_30681[(1)] = (41));

} else {
var statearr_30600_30682 = state_30576__$1;
(statearr_30600_30682[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (33))){
var state_30576__$1 = state_30576;
var statearr_30601_30683 = state_30576__$1;
(statearr_30601_30683[(2)] = false);

(statearr_30601_30683[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (13))){
var inst_30450 = (state_30576[(22)]);
var inst_30454 = cljs.core.chunk_first.call(null,inst_30450);
var inst_30455 = cljs.core.chunk_rest.call(null,inst_30450);
var inst_30456 = cljs.core.count.call(null,inst_30454);
var inst_30437 = inst_30455;
var inst_30438 = inst_30454;
var inst_30439 = inst_30456;
var inst_30440 = (0);
var state_30576__$1 = (function (){var statearr_30602 = state_30576;
(statearr_30602[(7)] = inst_30438);

(statearr_30602[(8)] = inst_30440);

(statearr_30602[(9)] = inst_30437);

(statearr_30602[(10)] = inst_30439);

return statearr_30602;
})();
var statearr_30603_30684 = state_30576__$1;
(statearr_30603_30684[(2)] = null);

(statearr_30603_30684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (22))){
var inst_30494 = (state_30576[(23)]);
var inst_30498 = (state_30576[(24)]);
var inst_30490 = (state_30576[(19)]);
var inst_30493 = (state_30576[(25)]);
var inst_30493__$1 = (state_30576[(2)]);
var inst_30494__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30493__$1);
var inst_30495 = (function (){var all_files = inst_30490;
var res_SINGLEQUOTE_ = inst_30493__$1;
var res = inst_30494__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30494,inst_30498,inst_30490,inst_30493,inst_30493__$1,inst_30494__$1,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30173_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30173_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30494,inst_30498,inst_30490,inst_30493,inst_30493__$1,inst_30494__$1,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30496 = cljs.core.filter.call(null,inst_30495,inst_30493__$1);
var inst_30497 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30498__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30497);
var inst_30499 = cljs.core.not_empty.call(null,inst_30498__$1);
var state_30576__$1 = (function (){var statearr_30604 = state_30576;
(statearr_30604[(23)] = inst_30494__$1);

(statearr_30604[(24)] = inst_30498__$1);

(statearr_30604[(26)] = inst_30496);

(statearr_30604[(25)] = inst_30493__$1);

return statearr_30604;
})();
if(cljs.core.truth_(inst_30499)){
var statearr_30605_30685 = state_30576__$1;
(statearr_30605_30685[(1)] = (23));

} else {
var statearr_30606_30686 = state_30576__$1;
(statearr_30606_30686[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (36))){
var state_30576__$1 = state_30576;
var statearr_30607_30687 = state_30576__$1;
(statearr_30607_30687[(2)] = false);

(statearr_30607_30687[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (41))){
var inst_30551 = (state_30576[(20)]);
var inst_30555 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30556 = cljs.core.map.call(null,inst_30555,inst_30551);
var inst_30557 = cljs.core.pr_str.call(null,inst_30556);
var inst_30558 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30557)].join('');
var inst_30559 = figwheel.client.utils.log.call(null,inst_30558);
var state_30576__$1 = state_30576;
var statearr_30608_30688 = state_30576__$1;
(statearr_30608_30688[(2)] = inst_30559);

(statearr_30608_30688[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (43))){
var inst_30552 = (state_30576[(21)]);
var inst_30562 = (state_30576[(2)]);
var inst_30563 = cljs.core.not_empty.call(null,inst_30552);
var state_30576__$1 = (function (){var statearr_30609 = state_30576;
(statearr_30609[(27)] = inst_30562);

return statearr_30609;
})();
if(cljs.core.truth_(inst_30563)){
var statearr_30610_30689 = state_30576__$1;
(statearr_30610_30689[(1)] = (44));

} else {
var statearr_30611_30690 = state_30576__$1;
(statearr_30611_30690[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (29))){
var inst_30530 = (state_30576[(16)]);
var inst_30494 = (state_30576[(23)]);
var inst_30498 = (state_30576[(24)]);
var inst_30490 = (state_30576[(19)]);
var inst_30496 = (state_30576[(26)]);
var inst_30493 = (state_30576[(25)]);
var inst_30526 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30529 = (function (){var all_files = inst_30490;
var res_SINGLEQUOTE_ = inst_30493;
var res = inst_30494;
var files_not_loaded = inst_30496;
var dependencies_that_loaded = inst_30498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30530,inst_30494,inst_30498,inst_30490,inst_30496,inst_30493,inst_30526,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30528){
var map__30612 = p__30528;
var map__30612__$1 = ((((!((map__30612 == null)))?((((map__30612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30612):map__30612);
var namespace = cljs.core.get.call(null,map__30612__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30530,inst_30494,inst_30498,inst_30490,inst_30496,inst_30493,inst_30526,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30530__$1 = cljs.core.group_by.call(null,inst_30529,inst_30496);
var inst_30532 = (inst_30530__$1 == null);
var inst_30533 = cljs.core.not.call(null,inst_30532);
var state_30576__$1 = (function (){var statearr_30614 = state_30576;
(statearr_30614[(16)] = inst_30530__$1);

(statearr_30614[(28)] = inst_30526);

return statearr_30614;
})();
if(inst_30533){
var statearr_30615_30691 = state_30576__$1;
(statearr_30615_30691[(1)] = (32));

} else {
var statearr_30616_30692 = state_30576__$1;
(statearr_30616_30692[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (44))){
var inst_30552 = (state_30576[(21)]);
var inst_30565 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30552);
var inst_30566 = cljs.core.pr_str.call(null,inst_30565);
var inst_30567 = [cljs.core.str("not required: "),cljs.core.str(inst_30566)].join('');
var inst_30568 = figwheel.client.utils.log.call(null,inst_30567);
var state_30576__$1 = state_30576;
var statearr_30617_30693 = state_30576__$1;
(statearr_30617_30693[(2)] = inst_30568);

(statearr_30617_30693[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (6))){
var inst_30471 = (state_30576[(2)]);
var state_30576__$1 = state_30576;
var statearr_30618_30694 = state_30576__$1;
(statearr_30618_30694[(2)] = inst_30471);

(statearr_30618_30694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (28))){
var inst_30496 = (state_30576[(26)]);
var inst_30523 = (state_30576[(2)]);
var inst_30524 = cljs.core.not_empty.call(null,inst_30496);
var state_30576__$1 = (function (){var statearr_30619 = state_30576;
(statearr_30619[(29)] = inst_30523);

return statearr_30619;
})();
if(cljs.core.truth_(inst_30524)){
var statearr_30620_30695 = state_30576__$1;
(statearr_30620_30695[(1)] = (29));

} else {
var statearr_30621_30696 = state_30576__$1;
(statearr_30621_30696[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (25))){
var inst_30494 = (state_30576[(23)]);
var inst_30510 = (state_30576[(2)]);
var inst_30511 = cljs.core.not_empty.call(null,inst_30494);
var state_30576__$1 = (function (){var statearr_30622 = state_30576;
(statearr_30622[(30)] = inst_30510);

return statearr_30622;
})();
if(cljs.core.truth_(inst_30511)){
var statearr_30623_30697 = state_30576__$1;
(statearr_30623_30697[(1)] = (26));

} else {
var statearr_30624_30698 = state_30576__$1;
(statearr_30624_30698[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (34))){
var inst_30545 = (state_30576[(2)]);
var state_30576__$1 = state_30576;
if(cljs.core.truth_(inst_30545)){
var statearr_30625_30699 = state_30576__$1;
(statearr_30625_30699[(1)] = (38));

} else {
var statearr_30626_30700 = state_30576__$1;
(statearr_30626_30700[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (17))){
var state_30576__$1 = state_30576;
var statearr_30627_30701 = state_30576__$1;
(statearr_30627_30701[(2)] = recompile_dependents);

(statearr_30627_30701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (3))){
var state_30576__$1 = state_30576;
var statearr_30628_30702 = state_30576__$1;
(statearr_30628_30702[(2)] = null);

(statearr_30628_30702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (12))){
var inst_30467 = (state_30576[(2)]);
var state_30576__$1 = state_30576;
var statearr_30629_30703 = state_30576__$1;
(statearr_30629_30703[(2)] = inst_30467);

(statearr_30629_30703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (2))){
var inst_30429 = (state_30576[(13)]);
var inst_30436 = cljs.core.seq.call(null,inst_30429);
var inst_30437 = inst_30436;
var inst_30438 = null;
var inst_30439 = (0);
var inst_30440 = (0);
var state_30576__$1 = (function (){var statearr_30630 = state_30576;
(statearr_30630[(7)] = inst_30438);

(statearr_30630[(8)] = inst_30440);

(statearr_30630[(9)] = inst_30437);

(statearr_30630[(10)] = inst_30439);

return statearr_30630;
})();
var statearr_30631_30704 = state_30576__$1;
(statearr_30631_30704[(2)] = null);

(statearr_30631_30704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (23))){
var inst_30494 = (state_30576[(23)]);
var inst_30498 = (state_30576[(24)]);
var inst_30490 = (state_30576[(19)]);
var inst_30496 = (state_30576[(26)]);
var inst_30493 = (state_30576[(25)]);
var inst_30501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30503 = (function (){var all_files = inst_30490;
var res_SINGLEQUOTE_ = inst_30493;
var res = inst_30494;
var files_not_loaded = inst_30496;
var dependencies_that_loaded = inst_30498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30494,inst_30498,inst_30490,inst_30496,inst_30493,inst_30501,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30502){
var map__30632 = p__30502;
var map__30632__$1 = ((((!((map__30632 == null)))?((((map__30632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30632):map__30632);
var request_url = cljs.core.get.call(null,map__30632__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30494,inst_30498,inst_30490,inst_30496,inst_30493,inst_30501,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30504 = cljs.core.reverse.call(null,inst_30498);
var inst_30505 = cljs.core.map.call(null,inst_30503,inst_30504);
var inst_30506 = cljs.core.pr_str.call(null,inst_30505);
var inst_30507 = figwheel.client.utils.log.call(null,inst_30506);
var state_30576__$1 = (function (){var statearr_30634 = state_30576;
(statearr_30634[(31)] = inst_30501);

return statearr_30634;
})();
var statearr_30635_30705 = state_30576__$1;
(statearr_30635_30705[(2)] = inst_30507);

(statearr_30635_30705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (35))){
var state_30576__$1 = state_30576;
var statearr_30636_30706 = state_30576__$1;
(statearr_30636_30706[(2)] = true);

(statearr_30636_30706[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (19))){
var inst_30480 = (state_30576[(12)]);
var inst_30486 = figwheel.client.file_reloading.expand_files.call(null,inst_30480);
var state_30576__$1 = state_30576;
var statearr_30637_30707 = state_30576__$1;
(statearr_30637_30707[(2)] = inst_30486);

(statearr_30637_30707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (11))){
var state_30576__$1 = state_30576;
var statearr_30638_30708 = state_30576__$1;
(statearr_30638_30708[(2)] = null);

(statearr_30638_30708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (9))){
var inst_30469 = (state_30576[(2)]);
var state_30576__$1 = state_30576;
var statearr_30639_30709 = state_30576__$1;
(statearr_30639_30709[(2)] = inst_30469);

(statearr_30639_30709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (5))){
var inst_30440 = (state_30576[(8)]);
var inst_30439 = (state_30576[(10)]);
var inst_30442 = (inst_30440 < inst_30439);
var inst_30443 = inst_30442;
var state_30576__$1 = state_30576;
if(cljs.core.truth_(inst_30443)){
var statearr_30640_30710 = state_30576__$1;
(statearr_30640_30710[(1)] = (7));

} else {
var statearr_30641_30711 = state_30576__$1;
(statearr_30641_30711[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (14))){
var inst_30450 = (state_30576[(22)]);
var inst_30459 = cljs.core.first.call(null,inst_30450);
var inst_30460 = figwheel.client.file_reloading.eval_body.call(null,inst_30459,opts);
var inst_30461 = cljs.core.next.call(null,inst_30450);
var inst_30437 = inst_30461;
var inst_30438 = null;
var inst_30439 = (0);
var inst_30440 = (0);
var state_30576__$1 = (function (){var statearr_30642 = state_30576;
(statearr_30642[(32)] = inst_30460);

(statearr_30642[(7)] = inst_30438);

(statearr_30642[(8)] = inst_30440);

(statearr_30642[(9)] = inst_30437);

(statearr_30642[(10)] = inst_30439);

return statearr_30642;
})();
var statearr_30643_30712 = state_30576__$1;
(statearr_30643_30712[(2)] = null);

(statearr_30643_30712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (45))){
var state_30576__$1 = state_30576;
var statearr_30644_30713 = state_30576__$1;
(statearr_30644_30713[(2)] = null);

(statearr_30644_30713[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (26))){
var inst_30494 = (state_30576[(23)]);
var inst_30498 = (state_30576[(24)]);
var inst_30490 = (state_30576[(19)]);
var inst_30496 = (state_30576[(26)]);
var inst_30493 = (state_30576[(25)]);
var inst_30513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30515 = (function (){var all_files = inst_30490;
var res_SINGLEQUOTE_ = inst_30493;
var res = inst_30494;
var files_not_loaded = inst_30496;
var dependencies_that_loaded = inst_30498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30494,inst_30498,inst_30490,inst_30496,inst_30493,inst_30513,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30514){
var map__30645 = p__30514;
var map__30645__$1 = ((((!((map__30645 == null)))?((((map__30645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30645):map__30645);
var namespace = cljs.core.get.call(null,map__30645__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30645__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30494,inst_30498,inst_30490,inst_30496,inst_30493,inst_30513,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30516 = cljs.core.map.call(null,inst_30515,inst_30494);
var inst_30517 = cljs.core.pr_str.call(null,inst_30516);
var inst_30518 = figwheel.client.utils.log.call(null,inst_30517);
var inst_30519 = (function (){var all_files = inst_30490;
var res_SINGLEQUOTE_ = inst_30493;
var res = inst_30494;
var files_not_loaded = inst_30496;
var dependencies_that_loaded = inst_30498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30494,inst_30498,inst_30490,inst_30496,inst_30493,inst_30513,inst_30515,inst_30516,inst_30517,inst_30518,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30494,inst_30498,inst_30490,inst_30496,inst_30493,inst_30513,inst_30515,inst_30516,inst_30517,inst_30518,state_val_30577,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30520 = setTimeout(inst_30519,(10));
var state_30576__$1 = (function (){var statearr_30647 = state_30576;
(statearr_30647[(33)] = inst_30518);

(statearr_30647[(34)] = inst_30513);

return statearr_30647;
})();
var statearr_30648_30714 = state_30576__$1;
(statearr_30648_30714[(2)] = inst_30520);

(statearr_30648_30714[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (16))){
var state_30576__$1 = state_30576;
var statearr_30649_30715 = state_30576__$1;
(statearr_30649_30715[(2)] = reload_dependents);

(statearr_30649_30715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (38))){
var inst_30530 = (state_30576[(16)]);
var inst_30547 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30530);
var state_30576__$1 = state_30576;
var statearr_30650_30716 = state_30576__$1;
(statearr_30650_30716[(2)] = inst_30547);

(statearr_30650_30716[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (30))){
var state_30576__$1 = state_30576;
var statearr_30651_30717 = state_30576__$1;
(statearr_30651_30717[(2)] = null);

(statearr_30651_30717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (10))){
var inst_30450 = (state_30576[(22)]);
var inst_30452 = cljs.core.chunked_seq_QMARK_.call(null,inst_30450);
var state_30576__$1 = state_30576;
if(inst_30452){
var statearr_30652_30718 = state_30576__$1;
(statearr_30652_30718[(1)] = (13));

} else {
var statearr_30653_30719 = state_30576__$1;
(statearr_30653_30719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (18))){
var inst_30484 = (state_30576[(2)]);
var state_30576__$1 = state_30576;
if(cljs.core.truth_(inst_30484)){
var statearr_30654_30720 = state_30576__$1;
(statearr_30654_30720[(1)] = (19));

} else {
var statearr_30655_30721 = state_30576__$1;
(statearr_30655_30721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (42))){
var state_30576__$1 = state_30576;
var statearr_30656_30722 = state_30576__$1;
(statearr_30656_30722[(2)] = null);

(statearr_30656_30722[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (37))){
var inst_30542 = (state_30576[(2)]);
var state_30576__$1 = state_30576;
var statearr_30657_30723 = state_30576__$1;
(statearr_30657_30723[(2)] = inst_30542);

(statearr_30657_30723[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30577 === (8))){
var inst_30437 = (state_30576[(9)]);
var inst_30450 = (state_30576[(22)]);
var inst_30450__$1 = cljs.core.seq.call(null,inst_30437);
var state_30576__$1 = (function (){var statearr_30658 = state_30576;
(statearr_30658[(22)] = inst_30450__$1);

return statearr_30658;
})();
if(inst_30450__$1){
var statearr_30659_30724 = state_30576__$1;
(statearr_30659_30724[(1)] = (10));

} else {
var statearr_30660_30725 = state_30576__$1;
(statearr_30660_30725[(1)] = (11));

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
});})(c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22407__auto__,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto____0 = (function (){
var statearr_30664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30664[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto__);

(statearr_30664[(1)] = (1));

return statearr_30664;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto____1 = (function (state_30576){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_30576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e30665){if((e30665 instanceof Object)){
var ex__22411__auto__ = e30665;
var statearr_30666_30726 = state_30576;
(statearr_30666_30726[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30727 = state_30576;
state_30576 = G__30727;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto__ = function(state_30576){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto____1.call(this,state_30576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22474__auto__ = (function (){var statearr_30667 = f__22473__auto__.call(null);
(statearr_30667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_30667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__,map__30422,map__30422__$1,opts,before_jsload,on_jsload,reload_dependents,map__30423,map__30423__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22472__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30730,link){
var map__30733 = p__30730;
var map__30733__$1 = ((((!((map__30733 == null)))?((((map__30733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30733):map__30733);
var file = cljs.core.get.call(null,map__30733__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30733,map__30733__$1,file){
return (function (p1__30728_SHARP_,p2__30729_SHARP_){
if(cljs.core._EQ_.call(null,p1__30728_SHARP_,p2__30729_SHARP_)){
return p1__30728_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30733,map__30733__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30739){
var map__30740 = p__30739;
var map__30740__$1 = ((((!((map__30740 == null)))?((((map__30740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30740):map__30740);
var match_length = cljs.core.get.call(null,map__30740__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30740__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30735_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30735_SHARP_);
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
var args30742 = [];
var len__20172__auto___30745 = arguments.length;
var i__20173__auto___30746 = (0);
while(true){
if((i__20173__auto___30746 < len__20172__auto___30745)){
args30742.push((arguments[i__20173__auto___30746]));

var G__30747 = (i__20173__auto___30746 + (1));
i__20173__auto___30746 = G__30747;
continue;
} else {
}
break;
}

var G__30744 = args30742.length;
switch (G__30744) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30742.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30749_SHARP_,p2__30750_SHARP_){
return cljs.core.assoc.call(null,p1__30749_SHARP_,cljs.core.get.call(null,p2__30750_SHARP_,key),p2__30750_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30751){
var map__30754 = p__30751;
var map__30754__$1 = ((((!((map__30754 == null)))?((((map__30754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30754):map__30754);
var f_data = map__30754__$1;
var file = cljs.core.get.call(null,map__30754__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30756,files_msg){
var map__30763 = p__30756;
var map__30763__$1 = ((((!((map__30763 == null)))?((((map__30763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30763):map__30763);
var opts = map__30763__$1;
var on_cssload = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30765_30769 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30766_30770 = null;
var count__30767_30771 = (0);
var i__30768_30772 = (0);
while(true){
if((i__30768_30772 < count__30767_30771)){
var f_30773 = cljs.core._nth.call(null,chunk__30766_30770,i__30768_30772);
figwheel.client.file_reloading.reload_css_file.call(null,f_30773);

var G__30774 = seq__30765_30769;
var G__30775 = chunk__30766_30770;
var G__30776 = count__30767_30771;
var G__30777 = (i__30768_30772 + (1));
seq__30765_30769 = G__30774;
chunk__30766_30770 = G__30775;
count__30767_30771 = G__30776;
i__30768_30772 = G__30777;
continue;
} else {
var temp__4425__auto___30778 = cljs.core.seq.call(null,seq__30765_30769);
if(temp__4425__auto___30778){
var seq__30765_30779__$1 = temp__4425__auto___30778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30765_30779__$1)){
var c__19917__auto___30780 = cljs.core.chunk_first.call(null,seq__30765_30779__$1);
var G__30781 = cljs.core.chunk_rest.call(null,seq__30765_30779__$1);
var G__30782 = c__19917__auto___30780;
var G__30783 = cljs.core.count.call(null,c__19917__auto___30780);
var G__30784 = (0);
seq__30765_30769 = G__30781;
chunk__30766_30770 = G__30782;
count__30767_30771 = G__30783;
i__30768_30772 = G__30784;
continue;
} else {
var f_30785 = cljs.core.first.call(null,seq__30765_30779__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30785);

var G__30786 = cljs.core.next.call(null,seq__30765_30779__$1);
var G__30787 = null;
var G__30788 = (0);
var G__30789 = (0);
seq__30765_30769 = G__30786;
chunk__30766_30770 = G__30787;
count__30767_30771 = G__30788;
i__30768_30772 = G__30789;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30763,map__30763__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30763,map__30763__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map