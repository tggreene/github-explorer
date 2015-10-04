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
goog.require('ghe.time');
goog.require('ghe.graph');
ghe.core.sample_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commits",(10),(20),(23),(20),(19),(40),(4),(1),(0),(0),(2),(3)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["watches",(0),(0),(0),(3),(4),(20),(40),(44),(56),(21),(3),(0)], null)], null)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"category",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null)], null)], null)], null);
if(typeof ghe.core.state !== 'undefined'){
} else {
ghe.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
}
if(typeof ghe.core.timer !== 'undefined'){
} else {
ghe.core.timer = reagent.core.atom.call(null,(new Date()));
}
if(typeof ghe.core.time_updater !== 'undefined'){
} else {
ghe.core.time_updater = setInterval((function (){
return cljs.core.reset_BANG_.call(null,ghe.core.timer,(new Date()));
}),(1000));
}
ghe.core.set_value_BANG_ = (function ghe$core$set_value_BANG_(id,value){
cljs.core.swap_BANG_.call(null,ghe.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);

return cljs.core.swap_BANG_.call(null,ghe.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
ghe.core.get_value = (function ghe$core$get_value(id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,ghe.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
ghe.core.activity_history = (function ghe$core$activity_history(events){
var iter__19886__auto__ = (function ghe$core$activity_history_$_iter__28971(s__28972){
return (new cljs.core.LazySeq(null,(function (){
var s__28972__$1 = s__28972;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28972__$1);
if(temp__4425__auto__){
var s__28972__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28972__$2)){
var c__19884__auto__ = cljs.core.chunk_first.call(null,s__28972__$2);
var size__19885__auto__ = cljs.core.count.call(null,c__19884__auto__);
var b__28974 = cljs.core.chunk_buffer.call(null,size__19885__auto__);
if((function (){var i__28973 = (0);
while(true){
if((i__28973 < size__19885__auto__)){
var event = cljs.core._nth.call(null,c__19884__auto__,i__28973);
cljs.core.chunk_append.call(null,b__28974,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,event,"id")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.get.call(null,event,"type")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ghe.time.human_time.call(null,cljs.core.get.call(null,event,"created_at"))], null)], null)], null));

var G__28975 = (i__28973 + (1));
i__28973 = G__28975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28974),ghe$core$activity_history_$_iter__28971.call(null,cljs.core.chunk_rest.call(null,s__28972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28974),null);
}
} else {
var event = cljs.core.first.call(null,s__28972__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,event,"id")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.get.call(null,event,"type")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ghe.time.human_time.call(null,cljs.core.get.call(null,event,"created_at"))], null)], null)], null),ghe$core$activity_history_$_iter__28971.call(null,cljs.core.rest.call(null,s__28972__$2)));
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
ghe.core.plot_activity_history = (function ghe$core$plot_activity_history(events){
return ghe.graph.create_graph.call(null,".graph",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",(1),(2),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b",(2),(3),(5)], null)], null)], null)], null));
});
ghe.core.search_repo = (function ghe$core$search_repo(){
return ghe.github.get_repo.call(null,(1),ghe.core.get_value.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679)),(function (response){
return ghe.core.set_value_BANG_.call(null,new cljs.core.Keyword(null,"events","events",1792552201),response);
}));
});
ghe.core.show_graph = cljs.core.with_meta((function ghe$core$show_graph(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",1891173458)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return ghe.graph.create_graph.call(null,".graph",ghe.core.sample_data);
})], null));
ghe.core.home_page = (function ghe$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Github Explorer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),ghe.core.get_value.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Repo...",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__28976_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__28976_SHARP_.keyCode)){
return ghe.core.search_repo.call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return ghe.core.set_value_BANG_.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),event.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ghe.core.show_graph], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ghe.core.activity_history.call(null,cljs.core.take.call(null,(5),ghe.core.get_value.call(null,new cljs.core.Keyword(null,"events","events",1792552201))))], null)], null);
});
ghe.core.about_page = (function ghe$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About ghe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
ghe.core.current_page = (function ghe$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__21934__auto___28980 = (function (params__21935__auto__){
if(cljs.core.map_QMARK_.call(null,params__21935__auto__)){
var map__28977 = params__21935__auto__;
var map__28977__$1 = ((((!((map__28977 == null)))?((((map__28977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28977):map__28977);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ghe.core.home_page;},new cljs.core.Symbol("ghe.core","home-page","ghe.core/home-page",-988855406,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ghe.core","ghe.core",718648828,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/ghe/core.cljs",16,1,69,69,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ghe.core.home_page)?ghe.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21935__auto__)){
var vec__28979 = params__21935__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ghe.core.home_page;},new cljs.core.Symbol("ghe.core","home-page","ghe.core/home-page",-988855406,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ghe.core","ghe.core",718648828,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/ghe/core.cljs",16,1,69,69,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ghe.core.home_page)?ghe.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21934__auto___28980);

var action__21934__auto___28984 = (function (params__21935__auto__){
if(cljs.core.map_QMARK_.call(null,params__21935__auto__)){
var map__28981 = params__21935__auto__;
var map__28981__$1 = ((((!((map__28981 == null)))?((((map__28981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28981):map__28981);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ghe.core.about_page;},new cljs.core.Symbol("ghe.core","about-page","ghe.core/about-page",1996095622,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ghe.core","ghe.core",718648828,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/ghe/core.cljs",17,1,85,85,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ghe.core.about_page)?ghe.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21935__auto__)){
var vec__28983 = params__21935__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ghe.core.about_page;},new cljs.core.Symbol("ghe.core","about-page","ghe.core/about-page",1996095622,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ghe.core","ghe.core",718648828,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/ghe/core.cljs",17,1,85,85,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ghe.core.about_page)?ghe.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__21934__auto___28984);

ghe.core.hook_browser_navigation_BANG_ = (function ghe$core$hook_browser_navigation_BANG_(){
var G__28986 = (new goog.History());
goog.events.listen(G__28986,goog.history.EventType.NAVIGATE,((function (G__28986){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__28986))
);

G__28986.setEnabled(true);

return G__28986;
});
ghe.core.mount_root = (function ghe$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ghe.core.current_page], null),document.getElementById("app"));
});
ghe.core.init_BANG_ = (function ghe$core$init_BANG_(){
ghe.core.hook_browser_navigation_BANG_.call(null);

return ghe.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map