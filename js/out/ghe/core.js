// Compiled by ClojureScript 1.7.122 {}
goog.provide('ghe.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('ghe.github');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
ghe.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
ghe.core.set_value_BANG_ = (function ghe$core$set_value_BANG_(id,value){
cljs.core.swap_BANG_.call(null,ghe.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);

return cljs.core.swap_BANG_.call(null,ghe.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
ghe.core.get_value = (function ghe$core$get_value(id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,ghe.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
ghe.core.row = (function ghe$core$row(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27513 = arguments.length;
var i__20173__auto___27514 = (0);
while(true){
if((i__20173__auto___27514 < len__20172__auto___27513)){
args__20179__auto__.push((arguments[i__20173__auto___27514]));

var G__27515 = (i__20173__auto___27514 + (1));
i__20173__auto___27514 = G__27515;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ghe.core.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ghe.core.row.cljs$core$IFn$_invoke$arity$variadic = (function (label,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),body], null)], null);
});

ghe.core.row.cljs$lang$maxFixedArity = (1);

ghe.core.row.cljs$lang$applyTo = (function (seq27511){
var G__27512 = cljs.core.first.call(null,seq27511);
var seq27511__$1 = cljs.core.next.call(null,seq27511);
return ghe.core.row.cljs$core$IFn$_invoke$arity$variadic(G__27512,seq27511__$1);
});
ghe.core.text_input = (function ghe$core$text_input(id,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ghe.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),ghe.core.get_value.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27516_SHARP_){
return ghe.core.set_value_BANG_.call(null,id,p1__27516_SHARP_.target.value);
})], null)], null)], null);
});
ghe.core.activity_history = (function ghe$core$activity_history(events){
var iter__19886__auto__ = (function ghe$core$activity_history_$_iter__27521(s__27522){
return (new cljs.core.LazySeq(null,(function (){
var s__27522__$1 = s__27522;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27522__$1);
if(temp__4425__auto__){
var s__27522__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27522__$2)){
var c__19884__auto__ = cljs.core.chunk_first.call(null,s__27522__$2);
var size__19885__auto__ = cljs.core.count.call(null,c__19884__auto__);
var b__27524 = cljs.core.chunk_buffer.call(null,size__19885__auto__);
if((function (){var i__27523 = (0);
while(true){
if((i__27523 < size__19885__auto__)){
var event = cljs.core._nth.call(null,c__19884__auto__,i__27523);
cljs.core.chunk_append.call(null,b__27524,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,event,"id")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.get.call(null,event,"type")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get.call(null,event,"id")], null)], null)], null));

var G__27525 = (i__27523 + (1));
i__27523 = G__27525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27524),ghe$core$activity_history_$_iter__27521.call(null,cljs.core.chunk_rest.call(null,s__27522__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27524),null);
}
} else {
var event = cljs.core.first.call(null,s__27522__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,event,"id")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.get.call(null,event,"type")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get.call(null,event,"id")], null)], null)], null),ghe$core$activity_history_$_iter__27521.call(null,cljs.core.rest.call(null,s__27522__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19886__auto__.call(null,events);
});
ghe.core.home_page = (function ghe$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Github Explorer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return ghe.github.get_repo.call(null,(1),"facebook","react",(function (response){
return ghe.core.set_value_BANG_.call(null,new cljs.core.Keyword(null,"events","events",1792552201),response);
}));
})], null),"History"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ghe.core.activity_history.call(null,ghe.core.get_value.call(null,new cljs.core.Keyword(null,"events","events",1792552201)))], null)], null);
});
ghe.core.about_page = (function ghe$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About ghe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
ghe.core.current_page = (function ghe$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__21469__auto___27529 = (function (params__21470__auto__){
if(cljs.core.map_QMARK_.call(null,params__21470__auto__)){
var map__27526 = params__21470__auto__;
var map__27526__$1 = ((((!((map__27526 == null)))?((((map__27526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27526):map__27526);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ghe.core.home_page;},new cljs.core.Symbol("ghe.core","home-page","ghe.core/home-page",-988855406,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ghe.core","ghe.core",718648828,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/ghe/core.cljs",16,1,50,50,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ghe.core.home_page)?ghe.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21470__auto__)){
var vec__27528 = params__21470__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ghe.core.home_page;},new cljs.core.Symbol("ghe.core","home-page","ghe.core/home-page",-988855406,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ghe.core","ghe.core",718648828,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/ghe/core.cljs",16,1,50,50,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ghe.core.home_page)?ghe.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21469__auto___27529);

var action__21469__auto___27533 = (function (params__21470__auto__){
if(cljs.core.map_QMARK_.call(null,params__21470__auto__)){
var map__27530 = params__21470__auto__;
var map__27530__$1 = ((((!((map__27530 == null)))?((((map__27530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27530):map__27530);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ghe.core.about_page;},new cljs.core.Symbol("ghe.core","about-page","ghe.core/about-page",1996095622,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ghe.core","ghe.core",718648828,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/ghe/core.cljs",17,1,72,72,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ghe.core.about_page)?ghe.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21470__auto__)){
var vec__27532 = params__21470__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ghe.core.about_page;},new cljs.core.Symbol("ghe.core","about-page","ghe.core/about-page",1996095622,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ghe.core","ghe.core",718648828,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/ghe/core.cljs",17,1,72,72,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ghe.core.about_page)?ghe.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__21469__auto___27533);

ghe.core.hook_browser_navigation_BANG_ = (function ghe$core$hook_browser_navigation_BANG_(){
var G__27535 = (new goog.History());
goog.events.listen(G__27535,goog.history.EventType.NAVIGATE,((function (G__27535){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__27535))
);

G__27535.setEnabled(true);

return G__27535;
});
ghe.core.mount_root = (function ghe$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ghe.core.current_page], null),document.getElementById("app"));
});
ghe.core.init_BANG_ = (function ghe$core$init_BANG_(){
ghe.core.hook_browser_navigation_BANG_.call(null);

return ghe.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map