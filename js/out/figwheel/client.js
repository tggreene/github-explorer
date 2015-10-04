// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28613__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28614__i = 0, G__28614__a = new Array(arguments.length -  0);
while (G__28614__i < G__28614__a.length) {G__28614__a[G__28614__i] = arguments[G__28614__i + 0]; ++G__28614__i;}
  args = new cljs.core.IndexedSeq(G__28614__a,0);
} 
return G__28613__delegate.call(this,args);};
G__28613.cljs$lang$maxFixedArity = 0;
G__28613.cljs$lang$applyTo = (function (arglist__28615){
var args = cljs.core.seq(arglist__28615);
return G__28613__delegate(args);
});
G__28613.cljs$core$IFn$_invoke$arity$variadic = G__28613__delegate;
return G__28613;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28616){
var map__28619 = p__28616;
var map__28619__$1 = ((((!((map__28619 == null)))?((((map__28619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28619):map__28619);
var message = cljs.core.get.call(null,map__28619__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28619__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19114__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19102__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19102__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19102__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22472__auto___28767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___28767,ch){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___28767,ch){
return (function (state_28737){
var state_val_28738 = (state_28737[(1)]);
if((state_val_28738 === (7))){
var inst_28733 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28739_28768 = state_28737__$1;
(statearr_28739_28768[(2)] = inst_28733);

(statearr_28739_28768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (1))){
var state_28737__$1 = state_28737;
var statearr_28740_28769 = state_28737__$1;
(statearr_28740_28769[(2)] = null);

(statearr_28740_28769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (4))){
var inst_28696 = (state_28737[(7)]);
var inst_28696__$1 = (state_28737[(2)]);
var state_28737__$1 = (function (){var statearr_28741 = state_28737;
(statearr_28741[(7)] = inst_28696__$1);

return statearr_28741;
})();
if(cljs.core.truth_(inst_28696__$1)){
var statearr_28742_28770 = state_28737__$1;
(statearr_28742_28770[(1)] = (5));

} else {
var statearr_28743_28771 = state_28737__$1;
(statearr_28743_28771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (15))){
var inst_28703 = (state_28737[(8)]);
var inst_28718 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28703);
var inst_28719 = cljs.core.first.call(null,inst_28718);
var inst_28720 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28719);
var inst_28721 = console.warn("Figwheel: Not loading code with warnings - ",inst_28720);
var state_28737__$1 = state_28737;
var statearr_28744_28772 = state_28737__$1;
(statearr_28744_28772[(2)] = inst_28721);

(statearr_28744_28772[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (13))){
var inst_28726 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28745_28773 = state_28737__$1;
(statearr_28745_28773[(2)] = inst_28726);

(statearr_28745_28773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (6))){
var state_28737__$1 = state_28737;
var statearr_28746_28774 = state_28737__$1;
(statearr_28746_28774[(2)] = null);

(statearr_28746_28774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (17))){
var inst_28724 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28747_28775 = state_28737__$1;
(statearr_28747_28775[(2)] = inst_28724);

(statearr_28747_28775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (3))){
var inst_28735 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28737__$1,inst_28735);
} else {
if((state_val_28738 === (12))){
var inst_28702 = (state_28737[(9)]);
var inst_28716 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28702,opts);
var state_28737__$1 = state_28737;
if(cljs.core.truth_(inst_28716)){
var statearr_28748_28776 = state_28737__$1;
(statearr_28748_28776[(1)] = (15));

} else {
var statearr_28749_28777 = state_28737__$1;
(statearr_28749_28777[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (2))){
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28737__$1,(4),ch);
} else {
if((state_val_28738 === (11))){
var inst_28703 = (state_28737[(8)]);
var inst_28708 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28709 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28703);
var inst_28710 = cljs.core.async.timeout.call(null,(1000));
var inst_28711 = [inst_28709,inst_28710];
var inst_28712 = (new cljs.core.PersistentVector(null,2,(5),inst_28708,inst_28711,null));
var state_28737__$1 = state_28737;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28737__$1,(14),inst_28712);
} else {
if((state_val_28738 === (9))){
var state_28737__$1 = state_28737;
var statearr_28750_28778 = state_28737__$1;
(statearr_28750_28778[(2)] = null);

(statearr_28750_28778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (5))){
var inst_28696 = (state_28737[(7)]);
var inst_28698 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28699 = (new cljs.core.PersistentArrayMap(null,2,inst_28698,null));
var inst_28700 = (new cljs.core.PersistentHashSet(null,inst_28699,null));
var inst_28701 = figwheel.client.focus_msgs.call(null,inst_28700,inst_28696);
var inst_28702 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28701);
var inst_28703 = cljs.core.first.call(null,inst_28701);
var inst_28704 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_28737__$1 = (function (){var statearr_28751 = state_28737;
(statearr_28751[(9)] = inst_28702);

(statearr_28751[(8)] = inst_28703);

return statearr_28751;
})();
if(cljs.core.truth_(inst_28704)){
var statearr_28752_28779 = state_28737__$1;
(statearr_28752_28779[(1)] = (8));

} else {
var statearr_28753_28780 = state_28737__$1;
(statearr_28753_28780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (14))){
var inst_28714 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28754_28781 = state_28737__$1;
(statearr_28754_28781[(2)] = inst_28714);

(statearr_28754_28781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (16))){
var state_28737__$1 = state_28737;
var statearr_28755_28782 = state_28737__$1;
(statearr_28755_28782[(2)] = null);

(statearr_28755_28782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (10))){
var inst_28729 = (state_28737[(2)]);
var state_28737__$1 = (function (){var statearr_28756 = state_28737;
(statearr_28756[(10)] = inst_28729);

return statearr_28756;
})();
var statearr_28757_28783 = state_28737__$1;
(statearr_28757_28783[(2)] = null);

(statearr_28757_28783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (8))){
var inst_28702 = (state_28737[(9)]);
var inst_28706 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28702,opts);
var state_28737__$1 = state_28737;
if(cljs.core.truth_(inst_28706)){
var statearr_28758_28784 = state_28737__$1;
(statearr_28758_28784[(1)] = (11));

} else {
var statearr_28759_28785 = state_28737__$1;
(statearr_28759_28785[(1)] = (12));

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
});})(c__22472__auto___28767,ch))
;
return ((function (switch__22407__auto__,c__22472__auto___28767,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22408__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22408__auto____0 = (function (){
var statearr_28763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28763[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22408__auto__);

(statearr_28763[(1)] = (1));

return statearr_28763;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22408__auto____1 = (function (state_28737){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_28737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e28764){if((e28764 instanceof Object)){
var ex__22411__auto__ = e28764;
var statearr_28765_28786 = state_28737;
(statearr_28765_28786[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28787 = state_28737;
state_28737 = G__28787;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22408__auto__ = function(state_28737){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22408__auto____1.call(this,state_28737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22408__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22408__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___28767,ch))
})();
var state__22474__auto__ = (function (){var statearr_28766 = f__22473__auto__.call(null);
(statearr_28766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___28767);

return statearr_28766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___28767,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28788_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28788_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28795 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28795){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28793 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28794 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28793,_STAR_print_newline_STAR_28794,base_path_28795){
return (function() { 
var G__28796__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28797__i = 0, G__28797__a = new Array(arguments.length -  0);
while (G__28797__i < G__28797__a.length) {G__28797__a[G__28797__i] = arguments[G__28797__i + 0]; ++G__28797__i;}
  args = new cljs.core.IndexedSeq(G__28797__a,0);
} 
return G__28796__delegate.call(this,args);};
G__28796.cljs$lang$maxFixedArity = 0;
G__28796.cljs$lang$applyTo = (function (arglist__28798){
var args = cljs.core.seq(arglist__28798);
return G__28796__delegate(args);
});
G__28796.cljs$core$IFn$_invoke$arity$variadic = G__28796__delegate;
return G__28796;
})()
;})(_STAR_print_fn_STAR_28793,_STAR_print_newline_STAR_28794,base_path_28795))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28794;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28793;
}}catch (e28792){if((e28792 instanceof Error)){
var e = e28792;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28795], null));
} else {
var e = e28792;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28795))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28799){
var map__28806 = p__28799;
var map__28806__$1 = ((((!((map__28806 == null)))?((((map__28806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28806):map__28806);
var opts = map__28806__$1;
var build_id = cljs.core.get.call(null,map__28806__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28806,map__28806__$1,opts,build_id){
return (function (p__28808){
var vec__28809 = p__28808;
var map__28810 = cljs.core.nth.call(null,vec__28809,(0),null);
var map__28810__$1 = ((((!((map__28810 == null)))?((((map__28810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28810):map__28810);
var msg = map__28810__$1;
var msg_name = cljs.core.get.call(null,map__28810__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28809,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28809,map__28810,map__28810__$1,msg,msg_name,_,map__28806,map__28806__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28809,map__28810,map__28810__$1,msg,msg_name,_,map__28806,map__28806__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28806,map__28806__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28816){
var vec__28817 = p__28816;
var map__28818 = cljs.core.nth.call(null,vec__28817,(0),null);
var map__28818__$1 = ((((!((map__28818 == null)))?((((map__28818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28818):map__28818);
var msg = map__28818__$1;
var msg_name = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28817,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28820){
var map__28830 = p__28820;
var map__28830__$1 = ((((!((map__28830 == null)))?((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var on_compile_warning = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28830,map__28830__$1,on_compile_warning,on_compile_fail){
return (function (p__28832){
var vec__28833 = p__28832;
var map__28834 = cljs.core.nth.call(null,vec__28833,(0),null);
var map__28834__$1 = ((((!((map__28834 == null)))?((((map__28834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28834):map__28834);
var msg = map__28834__$1;
var msg_name = cljs.core.get.call(null,map__28834__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28833,(1));
var pred__28836 = cljs.core._EQ_;
var expr__28837 = msg_name;
if(cljs.core.truth_(pred__28836.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28837))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28836.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28837))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28830,map__28830__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__,msg_hist,msg_names,msg){
return (function (state_29053){
var state_val_29054 = (state_29053[(1)]);
if((state_val_29054 === (7))){
var inst_28977 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_28977)){
var statearr_29055_29101 = state_29053__$1;
(statearr_29055_29101[(1)] = (8));

} else {
var statearr_29056_29102 = state_29053__$1;
(statearr_29056_29102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (20))){
var inst_29047 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29057_29103 = state_29053__$1;
(statearr_29057_29103[(2)] = inst_29047);

(statearr_29057_29103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (27))){
var inst_29043 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29058_29104 = state_29053__$1;
(statearr_29058_29104[(2)] = inst_29043);

(statearr_29058_29104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (1))){
var inst_28970 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_28970)){
var statearr_29059_29105 = state_29053__$1;
(statearr_29059_29105[(1)] = (2));

} else {
var statearr_29060_29106 = state_29053__$1;
(statearr_29060_29106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (24))){
var inst_29045 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29061_29107 = state_29053__$1;
(statearr_29061_29107[(2)] = inst_29045);

(statearr_29061_29107[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (4))){
var inst_29051 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29053__$1,inst_29051);
} else {
if((state_val_29054 === (15))){
var inst_29049 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29062_29108 = state_29053__$1;
(statearr_29062_29108[(2)] = inst_29049);

(statearr_29062_29108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (21))){
var inst_29008 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29063_29109 = state_29053__$1;
(statearr_29063_29109[(2)] = inst_29008);

(statearr_29063_29109[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (31))){
var inst_29032 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_29032)){
var statearr_29064_29110 = state_29053__$1;
(statearr_29064_29110[(1)] = (34));

} else {
var statearr_29065_29111 = state_29053__$1;
(statearr_29065_29111[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (32))){
var inst_29041 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29066_29112 = state_29053__$1;
(statearr_29066_29112[(2)] = inst_29041);

(statearr_29066_29112[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (33))){
var inst_29030 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29067_29113 = state_29053__$1;
(statearr_29067_29113[(2)] = inst_29030);

(statearr_29067_29113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (13))){
var inst_28991 = figwheel.client.heads_up.clear.call(null);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(16),inst_28991);
} else {
if((state_val_29054 === (22))){
var inst_29012 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29013 = figwheel.client.heads_up.append_message.call(null,inst_29012);
var state_29053__$1 = state_29053;
var statearr_29068_29114 = state_29053__$1;
(statearr_29068_29114[(2)] = inst_29013);

(statearr_29068_29114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (36))){
var inst_29039 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29069_29115 = state_29053__$1;
(statearr_29069_29115[(2)] = inst_29039);

(statearr_29069_29115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (29))){
var inst_29023 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29070_29116 = state_29053__$1;
(statearr_29070_29116[(2)] = inst_29023);

(statearr_29070_29116[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (6))){
var inst_28972 = (state_29053[(7)]);
var state_29053__$1 = state_29053;
var statearr_29071_29117 = state_29053__$1;
(statearr_29071_29117[(2)] = inst_28972);

(statearr_29071_29117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (28))){
var inst_29019 = (state_29053[(2)]);
var inst_29020 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29021 = figwheel.client.heads_up.display_warning.call(null,inst_29020);
var state_29053__$1 = (function (){var statearr_29072 = state_29053;
(statearr_29072[(8)] = inst_29019);

return statearr_29072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(29),inst_29021);
} else {
if((state_val_29054 === (25))){
var inst_29017 = figwheel.client.heads_up.clear.call(null);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(28),inst_29017);
} else {
if((state_val_29054 === (34))){
var inst_29034 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(37),inst_29034);
} else {
if((state_val_29054 === (17))){
var inst_28999 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29073_29118 = state_29053__$1;
(statearr_29073_29118[(2)] = inst_28999);

(statearr_29073_29118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (3))){
var inst_28989 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_28989)){
var statearr_29074_29119 = state_29053__$1;
(statearr_29074_29119[(1)] = (13));

} else {
var statearr_29075_29120 = state_29053__$1;
(statearr_29075_29120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (12))){
var inst_28985 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29076_29121 = state_29053__$1;
(statearr_29076_29121[(2)] = inst_28985);

(statearr_29076_29121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (2))){
var inst_28972 = (state_29053[(7)]);
var inst_28972__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_29053__$1 = (function (){var statearr_29077 = state_29053;
(statearr_29077[(7)] = inst_28972__$1);

return statearr_29077;
})();
if(cljs.core.truth_(inst_28972__$1)){
var statearr_29078_29122 = state_29053__$1;
(statearr_29078_29122[(1)] = (5));

} else {
var statearr_29079_29123 = state_29053__$1;
(statearr_29079_29123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (23))){
var inst_29015 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_29015)){
var statearr_29080_29124 = state_29053__$1;
(statearr_29080_29124[(1)] = (25));

} else {
var statearr_29081_29125 = state_29053__$1;
(statearr_29081_29125[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (35))){
var state_29053__$1 = state_29053;
var statearr_29082_29126 = state_29053__$1;
(statearr_29082_29126[(2)] = null);

(statearr_29082_29126[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (19))){
var inst_29010 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_29010)){
var statearr_29083_29127 = state_29053__$1;
(statearr_29083_29127[(1)] = (22));

} else {
var statearr_29084_29128 = state_29053__$1;
(statearr_29084_29128[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (11))){
var inst_28981 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29085_29129 = state_29053__$1;
(statearr_29085_29129[(2)] = inst_28981);

(statearr_29085_29129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (9))){
var inst_28983 = figwheel.client.heads_up.clear.call(null);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(12),inst_28983);
} else {
if((state_val_29054 === (5))){
var inst_28974 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29053__$1 = state_29053;
var statearr_29086_29130 = state_29053__$1;
(statearr_29086_29130[(2)] = inst_28974);

(statearr_29086_29130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (14))){
var inst_29001 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_29001)){
var statearr_29087_29131 = state_29053__$1;
(statearr_29087_29131[(1)] = (18));

} else {
var statearr_29088_29132 = state_29053__$1;
(statearr_29088_29132[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (26))){
var inst_29025 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29053__$1 = state_29053;
if(cljs.core.truth_(inst_29025)){
var statearr_29089_29133 = state_29053__$1;
(statearr_29089_29133[(1)] = (30));

} else {
var statearr_29090_29134 = state_29053__$1;
(statearr_29090_29134[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (16))){
var inst_28993 = (state_29053[(2)]);
var inst_28994 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28995 = figwheel.client.format_messages.call(null,inst_28994);
var inst_28996 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28997 = figwheel.client.heads_up.display_error.call(null,inst_28995,inst_28996);
var state_29053__$1 = (function (){var statearr_29091 = state_29053;
(statearr_29091[(9)] = inst_28993);

return statearr_29091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(17),inst_28997);
} else {
if((state_val_29054 === (30))){
var inst_29027 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29028 = figwheel.client.heads_up.display_warning.call(null,inst_29027);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(33),inst_29028);
} else {
if((state_val_29054 === (10))){
var inst_28987 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29092_29135 = state_29053__$1;
(statearr_29092_29135[(2)] = inst_28987);

(statearr_29092_29135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (18))){
var inst_29003 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29004 = figwheel.client.format_messages.call(null,inst_29003);
var inst_29005 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29006 = figwheel.client.heads_up.display_error.call(null,inst_29004,inst_29005);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(21),inst_29006);
} else {
if((state_val_29054 === (37))){
var inst_29036 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29093_29136 = state_29053__$1;
(statearr_29093_29136[(2)] = inst_29036);

(statearr_29093_29136[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (8))){
var inst_28979 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(11),inst_28979);
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
});})(c__22472__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22407__auto__,c__22472__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto____0 = (function (){
var statearr_29097 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29097[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto__);

(statearr_29097[(1)] = (1));

return statearr_29097;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto____1 = (function (state_29053){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_29053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e29098){if((e29098 instanceof Object)){
var ex__22411__auto__ = e29098;
var statearr_29099_29137 = state_29053;
(statearr_29099_29137[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29138 = state_29053;
state_29053 = G__29138;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto__ = function(state_29053){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto____1.call(this,state_29053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__,msg_hist,msg_names,msg))
})();
var state__22474__auto__ = (function (){var statearr_29100 = f__22473__auto__.call(null);
(statearr_29100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_29100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__,msg_hist,msg_names,msg))
);

return c__22472__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22472__auto___29201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto___29201,ch){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto___29201,ch){
return (function (state_29184){
var state_val_29185 = (state_29184[(1)]);
if((state_val_29185 === (1))){
var state_29184__$1 = state_29184;
var statearr_29186_29202 = state_29184__$1;
(statearr_29186_29202[(2)] = null);

(statearr_29186_29202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29185 === (2))){
var state_29184__$1 = state_29184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29184__$1,(4),ch);
} else {
if((state_val_29185 === (3))){
var inst_29182 = (state_29184[(2)]);
var state_29184__$1 = state_29184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29184__$1,inst_29182);
} else {
if((state_val_29185 === (4))){
var inst_29172 = (state_29184[(7)]);
var inst_29172__$1 = (state_29184[(2)]);
var state_29184__$1 = (function (){var statearr_29187 = state_29184;
(statearr_29187[(7)] = inst_29172__$1);

return statearr_29187;
})();
if(cljs.core.truth_(inst_29172__$1)){
var statearr_29188_29203 = state_29184__$1;
(statearr_29188_29203[(1)] = (5));

} else {
var statearr_29189_29204 = state_29184__$1;
(statearr_29189_29204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29185 === (5))){
var inst_29172 = (state_29184[(7)]);
var inst_29174 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29172);
var state_29184__$1 = state_29184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29184__$1,(8),inst_29174);
} else {
if((state_val_29185 === (6))){
var state_29184__$1 = state_29184;
var statearr_29190_29205 = state_29184__$1;
(statearr_29190_29205[(2)] = null);

(statearr_29190_29205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29185 === (7))){
var inst_29180 = (state_29184[(2)]);
var state_29184__$1 = state_29184;
var statearr_29191_29206 = state_29184__$1;
(statearr_29191_29206[(2)] = inst_29180);

(statearr_29191_29206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29185 === (8))){
var inst_29176 = (state_29184[(2)]);
var state_29184__$1 = (function (){var statearr_29192 = state_29184;
(statearr_29192[(8)] = inst_29176);

return statearr_29192;
})();
var statearr_29193_29207 = state_29184__$1;
(statearr_29193_29207[(2)] = null);

(statearr_29193_29207[(1)] = (2));


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
});})(c__22472__auto___29201,ch))
;
return ((function (switch__22407__auto__,c__22472__auto___29201,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22408__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22408__auto____0 = (function (){
var statearr_29197 = [null,null,null,null,null,null,null,null,null];
(statearr_29197[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22408__auto__);

(statearr_29197[(1)] = (1));

return statearr_29197;
});
var figwheel$client$heads_up_plugin_$_state_machine__22408__auto____1 = (function (state_29184){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_29184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e29198){if((e29198 instanceof Object)){
var ex__22411__auto__ = e29198;
var statearr_29199_29208 = state_29184;
(statearr_29199_29208[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29209 = state_29184;
state_29184 = G__29209;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22408__auto__ = function(state_29184){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22408__auto____1.call(this,state_29184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22408__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22408__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto___29201,ch))
})();
var state__22474__auto__ = (function (){var statearr_29200 = f__22473__auto__.call(null);
(statearr_29200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto___29201);

return statearr_29200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto___29201,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22472__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22472__auto__){
return (function (){
var f__22473__auto__ = (function (){var switch__22407__auto__ = ((function (c__22472__auto__){
return (function (state_29230){
var state_val_29231 = (state_29230[(1)]);
if((state_val_29231 === (1))){
var inst_29225 = cljs.core.async.timeout.call(null,(3000));
var state_29230__$1 = state_29230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29230__$1,(2),inst_29225);
} else {
if((state_val_29231 === (2))){
var inst_29227 = (state_29230[(2)]);
var inst_29228 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29230__$1 = (function (){var statearr_29232 = state_29230;
(statearr_29232[(7)] = inst_29227);

return statearr_29232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29230__$1,inst_29228);
} else {
return null;
}
}
});})(c__22472__auto__))
;
return ((function (switch__22407__auto__,c__22472__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22408__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22408__auto____0 = (function (){
var statearr_29236 = [null,null,null,null,null,null,null,null];
(statearr_29236[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22408__auto__);

(statearr_29236[(1)] = (1));

return statearr_29236;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22408__auto____1 = (function (state_29230){
while(true){
var ret_value__22409__auto__ = (function (){try{while(true){
var result__22410__auto__ = switch__22407__auto__.call(null,state_29230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22410__auto__;
}
break;
}
}catch (e29237){if((e29237 instanceof Object)){
var ex__22411__auto__ = e29237;
var statearr_29238_29240 = state_29230;
(statearr_29238_29240[(5)] = ex__22411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29241 = state_29230;
state_29230 = G__29241;
continue;
} else {
return ret_value__22409__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22408__auto__ = function(state_29230){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22408__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22408__auto____1.call(this,state_29230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22408__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22408__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22408__auto__;
})()
;})(switch__22407__auto__,c__22472__auto__))
})();
var state__22474__auto__ = (function (){var statearr_29239 = f__22473__auto__.call(null);
(statearr_29239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22472__auto__);

return statearr_29239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22474__auto__);
});})(c__22472__auto__))
);

return c__22472__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29242){
var map__29249 = p__29242;
var map__29249__$1 = ((((!((map__29249 == null)))?((((map__29249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29249):map__29249);
var ed = map__29249__$1;
var formatted_exception = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29251_29255 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29252_29256 = null;
var count__29253_29257 = (0);
var i__29254_29258 = (0);
while(true){
if((i__29254_29258 < count__29253_29257)){
var msg_29259 = cljs.core._nth.call(null,chunk__29252_29256,i__29254_29258);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29259);

var G__29260 = seq__29251_29255;
var G__29261 = chunk__29252_29256;
var G__29262 = count__29253_29257;
var G__29263 = (i__29254_29258 + (1));
seq__29251_29255 = G__29260;
chunk__29252_29256 = G__29261;
count__29253_29257 = G__29262;
i__29254_29258 = G__29263;
continue;
} else {
var temp__4425__auto___29264 = cljs.core.seq.call(null,seq__29251_29255);
if(temp__4425__auto___29264){
var seq__29251_29265__$1 = temp__4425__auto___29264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29251_29265__$1)){
var c__19917__auto___29266 = cljs.core.chunk_first.call(null,seq__29251_29265__$1);
var G__29267 = cljs.core.chunk_rest.call(null,seq__29251_29265__$1);
var G__29268 = c__19917__auto___29266;
var G__29269 = cljs.core.count.call(null,c__19917__auto___29266);
var G__29270 = (0);
seq__29251_29255 = G__29267;
chunk__29252_29256 = G__29268;
count__29253_29257 = G__29269;
i__29254_29258 = G__29270;
continue;
} else {
var msg_29271 = cljs.core.first.call(null,seq__29251_29265__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29271);

var G__29272 = cljs.core.next.call(null,seq__29251_29265__$1);
var G__29273 = null;
var G__29274 = (0);
var G__29275 = (0);
seq__29251_29255 = G__29272;
chunk__29252_29256 = G__29273;
count__29253_29257 = G__29274;
i__29254_29258 = G__29275;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29276){
var map__29279 = p__29276;
var map__29279__$1 = ((((!((map__29279 == null)))?((((map__29279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29279):map__29279);
var w = map__29279__$1;
var message = cljs.core.get.call(null,map__29279__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19102__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19102__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19102__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29287 = cljs.core.seq.call(null,plugins);
var chunk__29288 = null;
var count__29289 = (0);
var i__29290 = (0);
while(true){
if((i__29290 < count__29289)){
var vec__29291 = cljs.core._nth.call(null,chunk__29288,i__29290);
var k = cljs.core.nth.call(null,vec__29291,(0),null);
var plugin = cljs.core.nth.call(null,vec__29291,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29293 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29287,chunk__29288,count__29289,i__29290,pl_29293,vec__29291,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29293.call(null,msg_hist);
});})(seq__29287,chunk__29288,count__29289,i__29290,pl_29293,vec__29291,k,plugin))
);
} else {
}

var G__29294 = seq__29287;
var G__29295 = chunk__29288;
var G__29296 = count__29289;
var G__29297 = (i__29290 + (1));
seq__29287 = G__29294;
chunk__29288 = G__29295;
count__29289 = G__29296;
i__29290 = G__29297;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29287);
if(temp__4425__auto__){
var seq__29287__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29287__$1)){
var c__19917__auto__ = cljs.core.chunk_first.call(null,seq__29287__$1);
var G__29298 = cljs.core.chunk_rest.call(null,seq__29287__$1);
var G__29299 = c__19917__auto__;
var G__29300 = cljs.core.count.call(null,c__19917__auto__);
var G__29301 = (0);
seq__29287 = G__29298;
chunk__29288 = G__29299;
count__29289 = G__29300;
i__29290 = G__29301;
continue;
} else {
var vec__29292 = cljs.core.first.call(null,seq__29287__$1);
var k = cljs.core.nth.call(null,vec__29292,(0),null);
var plugin = cljs.core.nth.call(null,vec__29292,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29302 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29287,chunk__29288,count__29289,i__29290,pl_29302,vec__29292,k,plugin,seq__29287__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29302.call(null,msg_hist);
});})(seq__29287,chunk__29288,count__29289,i__29290,pl_29302,vec__29292,k,plugin,seq__29287__$1,temp__4425__auto__))
);
} else {
}

var G__29303 = cljs.core.next.call(null,seq__29287__$1);
var G__29304 = null;
var G__29305 = (0);
var G__29306 = (0);
seq__29287 = G__29303;
chunk__29288 = G__29304;
count__29289 = G__29305;
i__29290 = G__29306;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29307 = [];
var len__20172__auto___29310 = arguments.length;
var i__20173__auto___29311 = (0);
while(true){
if((i__20173__auto___29311 < len__20172__auto___29310)){
args29307.push((arguments[i__20173__auto___29311]));

var G__29312 = (i__20173__auto___29311 + (1));
i__20173__auto___29311 = G__29312;
continue;
} else {
}
break;
}

var G__29309 = args29307.length;
switch (G__29309) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29307.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20179__auto__ = [];
var len__20172__auto___29318 = arguments.length;
var i__20173__auto___29319 = (0);
while(true){
if((i__20173__auto___29319 < len__20172__auto___29318)){
args__20179__auto__.push((arguments[i__20173__auto___29319]));

var G__29320 = (i__20173__auto___29319 + (1));
i__20173__auto___29319 = G__29320;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((0) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20180__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29315){
var map__29316 = p__29315;
var map__29316__$1 = ((((!((map__29316 == null)))?((((map__29316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29316):map__29316);
var opts = map__29316__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29314){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29314));
});

//# sourceMappingURL=client.js.map