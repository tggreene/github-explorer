// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20179__auto__ = [];
var len__20172__auto___29458 = arguments.length;
var i__20173__auto___29459 = (0);
while(true){
if((i__20173__auto___29459 < len__20172__auto___29458)){
args__20179__auto__.push((arguments[i__20173__auto___29459]));

var G__29460 = (i__20173__auto___29459 + (1));
i__20173__auto___29459 = G__29460;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((2) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20180__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29450_29461 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29451_29462 = null;
var count__29452_29463 = (0);
var i__29453_29464 = (0);
while(true){
if((i__29453_29464 < count__29452_29463)){
var k_29465 = cljs.core._nth.call(null,chunk__29451_29462,i__29453_29464);
e.setAttribute(cljs.core.name.call(null,k_29465),cljs.core.get.call(null,attrs,k_29465));

var G__29466 = seq__29450_29461;
var G__29467 = chunk__29451_29462;
var G__29468 = count__29452_29463;
var G__29469 = (i__29453_29464 + (1));
seq__29450_29461 = G__29466;
chunk__29451_29462 = G__29467;
count__29452_29463 = G__29468;
i__29453_29464 = G__29469;
continue;
} else {
var temp__4425__auto___29470 = cljs.core.seq.call(null,seq__29450_29461);
if(temp__4425__auto___29470){
var seq__29450_29471__$1 = temp__4425__auto___29470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29450_29471__$1)){
var c__19917__auto___29472 = cljs.core.chunk_first.call(null,seq__29450_29471__$1);
var G__29473 = cljs.core.chunk_rest.call(null,seq__29450_29471__$1);
var G__29474 = c__19917__auto___29472;
var G__29475 = cljs.core.count.call(null,c__19917__auto___29472);
var G__29476 = (0);
seq__29450_29461 = G__29473;
chunk__29451_29462 = G__29474;
count__29452_29463 = G__29475;
i__29453_29464 = G__29476;
continue;
} else {
var k_29477 = cljs.core.first.call(null,seq__29450_29471__$1);
e.setAttribute(cljs.core.name.call(null,k_29477),cljs.core.get.call(null,attrs,k_29477));

var G__29478 = cljs.core.next.call(null,seq__29450_29471__$1);
var G__29479 = null;
var G__29480 = (0);
var G__29481 = (0);
seq__29450_29461 = G__29478;
chunk__29451_29462 = G__29479;
count__29452_29463 = G__29480;
i__29453_29464 = G__29481;
continue;
}
} else {
}
}
break;
}

var seq__29454_29482 = cljs.core.seq.call(null,children);
var chunk__29455_29483 = null;
var count__29456_29484 = (0);
var i__29457_29485 = (0);
while(true){
if((i__29457_29485 < count__29456_29484)){
var ch_29486 = cljs.core._nth.call(null,chunk__29455_29483,i__29457_29485);
e.appendChild(ch_29486);

var G__29487 = seq__29454_29482;
var G__29488 = chunk__29455_29483;
var G__29489 = count__29456_29484;
var G__29490 = (i__29457_29485 + (1));
seq__29454_29482 = G__29487;
chunk__29455_29483 = G__29488;
count__29456_29484 = G__29489;
i__29457_29485 = G__29490;
continue;
} else {
var temp__4425__auto___29491 = cljs.core.seq.call(null,seq__29454_29482);
if(temp__4425__auto___29491){
var seq__29454_29492__$1 = temp__4425__auto___29491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29454_29492__$1)){
var c__19917__auto___29493 = cljs.core.chunk_first.call(null,seq__29454_29492__$1);
var G__29494 = cljs.core.chunk_rest.call(null,seq__29454_29492__$1);
var G__29495 = c__19917__auto___29493;
var G__29496 = cljs.core.count.call(null,c__19917__auto___29493);
var G__29497 = (0);
seq__29454_29482 = G__29494;
chunk__29455_29483 = G__29495;
count__29456_29484 = G__29496;
i__29457_29485 = G__29497;
continue;
} else {
var ch_29498 = cljs.core.first.call(null,seq__29454_29492__$1);
e.appendChild(ch_29498);

var G__29499 = cljs.core.next.call(null,seq__29454_29492__$1);
var G__29500 = null;
var G__29501 = (0);
var G__29502 = (0);
seq__29454_29482 = G__29499;
chunk__29455_29483 = G__29500;
count__29456_29484 = G__29501;
i__29457_29485 = G__29502;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29447){
var G__29448 = cljs.core.first.call(null,seq29447);
var seq29447__$1 = cljs.core.next.call(null,seq29447);
var G__29449 = cljs.core.first.call(null,seq29447__$1);
var seq29447__$2 = cljs.core.next.call(null,seq29447__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29448,G__29449,seq29447__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20027__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20028__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20029__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20030__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20031__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20027__auto__,prefer_table__20028__auto__,method_cache__20029__auto__,cached_hierarchy__20030__auto__,hierarchy__20031__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20027__auto__,prefer_table__20028__auto__,method_cache__20029__auto__,cached_hierarchy__20030__auto__,hierarchy__20031__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20031__auto__,method_table__20027__auto__,prefer_table__20028__auto__,method_cache__20029__auto__,cached_hierarchy__20030__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29503 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29503.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29503.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29503.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29503);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29504,st_map){
var map__29509 = p__29504;
var map__29509__$1 = ((((!((map__29509 == null)))?((((map__29509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29509):map__29509);
var container_el = cljs.core.get.call(null,map__29509__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29509,map__29509__$1,container_el){
return (function (p__29511){
var vec__29512 = p__29511;
var k = cljs.core.nth.call(null,vec__29512,(0),null);
var v = cljs.core.nth.call(null,vec__29512,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29509,map__29509__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29513,dom_str){
var map__29516 = p__29513;
var map__29516__$1 = ((((!((map__29516 == null)))?((((map__29516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29516):map__29516);
var c = map__29516__$1;
var content_area_el = cljs.core.get.call(null,map__29516__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29518){
var map__29521 = p__29518;
var map__29521__$1 = ((((!((map__29521 == null)))?((((map__29521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29521):map__29521);
var content_area_el = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__){
return (function (state_29564){
var state_val_29565 = (state_29564[(1)]);
if((state_val_29565 === (1))){
var inst_29549 = (state_29564[(7)]);
var inst_29549__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29550 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29551 = ["10px","10px","100%","68px","1.0"];
var inst_29552 = cljs.core.PersistentHashMap.fromArrays(inst_29550,inst_29551);
var inst_29553 = cljs.core.merge.call(null,inst_29552,style);
var inst_29554 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29549__$1,inst_29553);
var inst_29555 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29549__$1,msg);
var inst_29556 = cljs.core.async.timeout.call(null,(300));
var state_29564__$1 = (function (){var statearr_29566 = state_29564;
(statearr_29566[(7)] = inst_29549__$1);

(statearr_29566[(8)] = inst_29554);

(statearr_29566[(9)] = inst_29555);

return statearr_29566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29564__$1,(2),inst_29556);
} else {
if((state_val_29565 === (2))){
var inst_29549 = (state_29564[(7)]);
var inst_29558 = (state_29564[(2)]);
var inst_29559 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29560 = ["auto"];
var inst_29561 = cljs.core.PersistentHashMap.fromArrays(inst_29559,inst_29560);
var inst_29562 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29549,inst_29561);
var state_29564__$1 = (function (){var statearr_29567 = state_29564;
(statearr_29567[(10)] = inst_29558);

return statearr_29567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29564__$1,inst_29562);
} else {
return null;
}
}
});})(c__22472__auto__))
;
return ((function (switch__22407__auto__,c__22472__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto____0 = (function (){
var statearr_29571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29571[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto__);

(statearr_29571[(1)] = (1));

return statearr_29571;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto____1 = (function (state_29564){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_29564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e29572){if((e29572 instanceof Object)){
var ex__22411__auto__ = e29572;
var statearr_29573_29575 = state_29564;
(statearr_29573_29575[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29576 = state_29564;
state_29564 = G__29576;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto__ = function(state_29564){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto____1.call(this,state_29564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__))
})();
var state__22474__auto__ = (function (){var statearr_29574 = f__22473__auto__.call(null);
(statearr_29574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_29574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__))
);

return c__22472__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__29578 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__29578,(0),null);
var ln = cljs.core.nth.call(null,vec__29578,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29581 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29581,(0),null);
var file_line = cljs.core.nth.call(null,vec__29581,(1),null);
var file_column = cljs.core.nth.call(null,vec__29581,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29581,file_name,file_line,file_column){
return (function (p1__29579_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29579_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29581,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19114__auto__ = file_line;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
var and__19102__auto__ = cause;
if(cljs.core.truth_(and__19102__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19102__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29584 = figwheel.client.heads_up.ensure_container.call(null);
var map__29584__$1 = ((((!((map__29584 == null)))?((((map__29584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29584):map__29584);
var content_area_el = cljs.core.get.call(null,map__29584__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__){
return (function (state_29632){
var state_val_29633 = (state_29632[(1)]);
if((state_val_29633 === (1))){
var inst_29615 = (state_29632[(7)]);
var inst_29615__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29616 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29617 = ["0.0"];
var inst_29618 = cljs.core.PersistentHashMap.fromArrays(inst_29616,inst_29617);
var inst_29619 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29615__$1,inst_29618);
var inst_29620 = cljs.core.async.timeout.call(null,(300));
var state_29632__$1 = (function (){var statearr_29634 = state_29632;
(statearr_29634[(7)] = inst_29615__$1);

(statearr_29634[(8)] = inst_29619);

return statearr_29634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29632__$1,(2),inst_29620);
} else {
if((state_val_29633 === (2))){
var inst_29615 = (state_29632[(7)]);
var inst_29622 = (state_29632[(2)]);
var inst_29623 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29624 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29625 = cljs.core.PersistentHashMap.fromArrays(inst_29623,inst_29624);
var inst_29626 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29615,inst_29625);
var inst_29627 = cljs.core.async.timeout.call(null,(200));
var state_29632__$1 = (function (){var statearr_29635 = state_29632;
(statearr_29635[(9)] = inst_29622);

(statearr_29635[(10)] = inst_29626);

return statearr_29635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29632__$1,(3),inst_29627);
} else {
if((state_val_29633 === (3))){
var inst_29615 = (state_29632[(7)]);
var inst_29629 = (state_29632[(2)]);
var inst_29630 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29615,"");
var state_29632__$1 = (function (){var statearr_29636 = state_29632;
(statearr_29636[(11)] = inst_29629);

return statearr_29636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29632__$1,inst_29630);
} else {
return null;
}
}
}
});})(c__22472__auto__))
;
return ((function (switch__22407__auto__,c__22472__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22408__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22408__auto____0 = (function (){
var statearr_29640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29640[(0)] = figwheel$client$heads_up$clear_$_state_machine__22408__auto__);

(statearr_29640[(1)] = (1));

return statearr_29640;
});
var figwheel$client$heads_up$clear_$_state_machine__22408__auto____1 = (function (state_29632){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_29632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e29641){if((e29641 instanceof Object)){
var ex__22411__auto__ = e29641;
var statearr_29642_29644 = state_29632;
(statearr_29642_29644[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29645 = state_29632;
state_29632 = G__29645;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22408__auto__ = function(state_29632){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22408__auto____1.call(this,state_29632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22408__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22408__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__))
})();
var state__22474__auto__ = (function (){var statearr_29643 = f__22473__auto__.call(null);
(statearr_29643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_29643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__))
);

return c__22472__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__){
return (function (state_29677){
var state_val_29678 = (state_29677[(1)]);
if((state_val_29678 === (1))){
var inst_29667 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29677__$1 = state_29677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29677__$1,(2),inst_29667);
} else {
if((state_val_29678 === (2))){
var inst_29669 = (state_29677[(2)]);
var inst_29670 = cljs.core.async.timeout.call(null,(400));
var state_29677__$1 = (function (){var statearr_29679 = state_29677;
(statearr_29679[(7)] = inst_29669);

return statearr_29679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29677__$1,(3),inst_29670);
} else {
if((state_val_29678 === (3))){
var inst_29672 = (state_29677[(2)]);
var inst_29673 = figwheel.client.heads_up.clear.call(null);
var state_29677__$1 = (function (){var statearr_29680 = state_29677;
(statearr_29680[(8)] = inst_29672);

return statearr_29680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29677__$1,(4),inst_29673);
} else {
if((state_val_29678 === (4))){
var inst_29675 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29677__$1,inst_29675);
} else {
return null;
}
}
}
}
});})(c__22472__auto__))
;
return ((function (switch__22407__auto__,c__22472__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto____0 = (function (){
var statearr_29684 = [null,null,null,null,null,null,null,null,null];
(statearr_29684[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto__);

(statearr_29684[(1)] = (1));

return statearr_29684;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto____1 = (function (state_29677){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_29677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e29685){if((e29685 instanceof Object)){
var ex__22411__auto__ = e29685;
var statearr_29686_29688 = state_29677;
(statearr_29686_29688[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29689 = state_29677;
state_29677 = G__29689;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto__ = function(state_29677){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto____1.call(this,state_29677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__))
})();
var state__22474__auto__ = (function (){var statearr_29687 = f__22473__auto__.call(null);
(statearr_29687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_29687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__))
);

return c__22472__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map