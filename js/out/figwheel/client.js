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
var G__28080__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28081__i = 0, G__28081__a = new Array(arguments.length -  0);
while (G__28081__i < G__28081__a.length) {G__28081__a[G__28081__i] = arguments[G__28081__i + 0]; ++G__28081__i;}
  args = new cljs.core.IndexedSeq(G__28081__a,0);
} 
return G__28080__delegate.call(this,args);};
G__28080.cljs$lang$maxFixedArity = 0;
G__28080.cljs$lang$applyTo = (function (arglist__28082){
var args = cljs.core.seq(arglist__28082);
return G__28080__delegate(args);
});
G__28080.cljs$core$IFn$_invoke$arity$variadic = G__28080__delegate;
return G__28080;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28083){
var map__28086 = p__28083;
var map__28086__$1 = ((((!((map__28086 == null)))?((((map__28086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28086):map__28086);
var message = cljs.core.get.call(null,map__28086__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28086__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23014__auto___28234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___28234,ch){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___28234,ch){
return (function (state_28204){
var state_val_28205 = (state_28204[(1)]);
if((state_val_28205 === (7))){
var inst_28200 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28206_28235 = state_28204__$1;
(statearr_28206_28235[(2)] = inst_28200);

(statearr_28206_28235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (1))){
var state_28204__$1 = state_28204;
var statearr_28207_28236 = state_28204__$1;
(statearr_28207_28236[(2)] = null);

(statearr_28207_28236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (4))){
var inst_28163 = (state_28204[(7)]);
var inst_28163__$1 = (state_28204[(2)]);
var state_28204__$1 = (function (){var statearr_28208 = state_28204;
(statearr_28208[(7)] = inst_28163__$1);

return statearr_28208;
})();
if(cljs.core.truth_(inst_28163__$1)){
var statearr_28209_28237 = state_28204__$1;
(statearr_28209_28237[(1)] = (5));

} else {
var statearr_28210_28238 = state_28204__$1;
(statearr_28210_28238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (15))){
var inst_28170 = (state_28204[(8)]);
var inst_28185 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28170);
var inst_28186 = cljs.core.first.call(null,inst_28185);
var inst_28187 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28186);
var inst_28188 = console.warn("Figwheel: Not loading code with warnings - ",inst_28187);
var state_28204__$1 = state_28204;
var statearr_28211_28239 = state_28204__$1;
(statearr_28211_28239[(2)] = inst_28188);

(statearr_28211_28239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (13))){
var inst_28193 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28212_28240 = state_28204__$1;
(statearr_28212_28240[(2)] = inst_28193);

(statearr_28212_28240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (6))){
var state_28204__$1 = state_28204;
var statearr_28213_28241 = state_28204__$1;
(statearr_28213_28241[(2)] = null);

(statearr_28213_28241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (17))){
var inst_28191 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28214_28242 = state_28204__$1;
(statearr_28214_28242[(2)] = inst_28191);

(statearr_28214_28242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (3))){
var inst_28202 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28204__$1,inst_28202);
} else {
if((state_val_28205 === (12))){
var inst_28169 = (state_28204[(9)]);
var inst_28183 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28169,opts);
var state_28204__$1 = state_28204;
if(cljs.core.truth_(inst_28183)){
var statearr_28215_28243 = state_28204__$1;
(statearr_28215_28243[(1)] = (15));

} else {
var statearr_28216_28244 = state_28204__$1;
(statearr_28216_28244[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (2))){
var state_28204__$1 = state_28204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28204__$1,(4),ch);
} else {
if((state_val_28205 === (11))){
var inst_28170 = (state_28204[(8)]);
var inst_28175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28176 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28170);
var inst_28177 = cljs.core.async.timeout.call(null,(1000));
var inst_28178 = [inst_28176,inst_28177];
var inst_28179 = (new cljs.core.PersistentVector(null,2,(5),inst_28175,inst_28178,null));
var state_28204__$1 = state_28204;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28204__$1,(14),inst_28179);
} else {
if((state_val_28205 === (9))){
var state_28204__$1 = state_28204;
var statearr_28217_28245 = state_28204__$1;
(statearr_28217_28245[(2)] = null);

(statearr_28217_28245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (5))){
var inst_28163 = (state_28204[(7)]);
var inst_28165 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28166 = (new cljs.core.PersistentArrayMap(null,2,inst_28165,null));
var inst_28167 = (new cljs.core.PersistentHashSet(null,inst_28166,null));
var inst_28168 = figwheel.client.focus_msgs.call(null,inst_28167,inst_28163);
var inst_28169 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28168);
var inst_28170 = cljs.core.first.call(null,inst_28168);
var inst_28171 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_28204__$1 = (function (){var statearr_28218 = state_28204;
(statearr_28218[(8)] = inst_28170);

(statearr_28218[(9)] = inst_28169);

return statearr_28218;
})();
if(cljs.core.truth_(inst_28171)){
var statearr_28219_28246 = state_28204__$1;
(statearr_28219_28246[(1)] = (8));

} else {
var statearr_28220_28247 = state_28204__$1;
(statearr_28220_28247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (14))){
var inst_28181 = (state_28204[(2)]);
var state_28204__$1 = state_28204;
var statearr_28221_28248 = state_28204__$1;
(statearr_28221_28248[(2)] = inst_28181);

(statearr_28221_28248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (16))){
var state_28204__$1 = state_28204;
var statearr_28222_28249 = state_28204__$1;
(statearr_28222_28249[(2)] = null);

(statearr_28222_28249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (10))){
var inst_28196 = (state_28204[(2)]);
var state_28204__$1 = (function (){var statearr_28223 = state_28204;
(statearr_28223[(10)] = inst_28196);

return statearr_28223;
})();
var statearr_28224_28250 = state_28204__$1;
(statearr_28224_28250[(2)] = null);

(statearr_28224_28250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28205 === (8))){
var inst_28169 = (state_28204[(9)]);
var inst_28173 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28169,opts);
var state_28204__$1 = state_28204;
if(cljs.core.truth_(inst_28173)){
var statearr_28225_28251 = state_28204__$1;
(statearr_28225_28251[(1)] = (11));

} else {
var statearr_28226_28252 = state_28204__$1;
(statearr_28226_28252[(1)] = (12));

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
});})(c__23014__auto___28234,ch))
;
return ((function (switch__22949__auto__,c__23014__auto___28234,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22950__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22950__auto____0 = (function (){
var statearr_28230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28230[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22950__auto__);

(statearr_28230[(1)] = (1));

return statearr_28230;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22950__auto____1 = (function (state_28204){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_28204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e28231){if((e28231 instanceof Object)){
var ex__22953__auto__ = e28231;
var statearr_28232_28253 = state_28204;
(statearr_28232_28253[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28254 = state_28204;
state_28204 = G__28254;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22950__auto__ = function(state_28204){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22950__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22950__auto____1.call(this,state_28204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22950__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22950__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___28234,ch))
})();
var state__23016__auto__ = (function (){var statearr_28233 = f__23015__auto__.call(null);
(statearr_28233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___28234);

return statearr_28233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___28234,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28255_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28255_SHARP_));
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
var base_path_28262 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28262){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28260 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28261 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28260,_STAR_print_newline_STAR_28261,base_path_28262){
return (function() { 
var G__28263__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28264__i = 0, G__28264__a = new Array(arguments.length -  0);
while (G__28264__i < G__28264__a.length) {G__28264__a[G__28264__i] = arguments[G__28264__i + 0]; ++G__28264__i;}
  args = new cljs.core.IndexedSeq(G__28264__a,0);
} 
return G__28263__delegate.call(this,args);};
G__28263.cljs$lang$maxFixedArity = 0;
G__28263.cljs$lang$applyTo = (function (arglist__28265){
var args = cljs.core.seq(arglist__28265);
return G__28263__delegate(args);
});
G__28263.cljs$core$IFn$_invoke$arity$variadic = G__28263__delegate;
return G__28263;
})()
;})(_STAR_print_fn_STAR_28260,_STAR_print_newline_STAR_28261,base_path_28262))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28261;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28260;
}}catch (e28259){if((e28259 instanceof Error)){
var e = e28259;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28262], null));
} else {
var e = e28259;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28262))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28266){
var map__28273 = p__28266;
var map__28273__$1 = ((((!((map__28273 == null)))?((((map__28273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28273):map__28273);
var opts = map__28273__$1;
var build_id = cljs.core.get.call(null,map__28273__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28273,map__28273__$1,opts,build_id){
return (function (p__28275){
var vec__28276 = p__28275;
var map__28277 = cljs.core.nth.call(null,vec__28276,(0),null);
var map__28277__$1 = ((((!((map__28277 == null)))?((((map__28277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28277):map__28277);
var msg = map__28277__$1;
var msg_name = cljs.core.get.call(null,map__28277__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28276,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28276,map__28277,map__28277__$1,msg,msg_name,_,map__28273,map__28273__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28276,map__28277,map__28277__$1,msg,msg_name,_,map__28273,map__28273__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28273,map__28273__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28283){
var vec__28284 = p__28283;
var map__28285 = cljs.core.nth.call(null,vec__28284,(0),null);
var map__28285__$1 = ((((!((map__28285 == null)))?((((map__28285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28285):map__28285);
var msg = map__28285__$1;
var msg_name = cljs.core.get.call(null,map__28285__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28284,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28287){
var map__28297 = p__28287;
var map__28297__$1 = ((((!((map__28297 == null)))?((((map__28297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28297):map__28297);
var on_compile_warning = cljs.core.get.call(null,map__28297__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28297__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28297,map__28297__$1,on_compile_warning,on_compile_fail){
return (function (p__28299){
var vec__28300 = p__28299;
var map__28301 = cljs.core.nth.call(null,vec__28300,(0),null);
var map__28301__$1 = ((((!((map__28301 == null)))?((((map__28301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28301):map__28301);
var msg = map__28301__$1;
var msg_name = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28300,(1));
var pred__28303 = cljs.core._EQ_;
var expr__28304 = msg_name;
if(cljs.core.truth_(pred__28303.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28304))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28303.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28304))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28297,map__28297__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto__,msg_hist,msg_names,msg){
return (function (state_28520){
var state_val_28521 = (state_28520[(1)]);
if((state_val_28521 === (7))){
var inst_28444 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
if(cljs.core.truth_(inst_28444)){
var statearr_28522_28568 = state_28520__$1;
(statearr_28522_28568[(1)] = (8));

} else {
var statearr_28523_28569 = state_28520__$1;
(statearr_28523_28569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (20))){
var inst_28514 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28524_28570 = state_28520__$1;
(statearr_28524_28570[(2)] = inst_28514);

(statearr_28524_28570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (27))){
var inst_28510 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28525_28571 = state_28520__$1;
(statearr_28525_28571[(2)] = inst_28510);

(statearr_28525_28571[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (1))){
var inst_28437 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28520__$1 = state_28520;
if(cljs.core.truth_(inst_28437)){
var statearr_28526_28572 = state_28520__$1;
(statearr_28526_28572[(1)] = (2));

} else {
var statearr_28527_28573 = state_28520__$1;
(statearr_28527_28573[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (24))){
var inst_28512 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28528_28574 = state_28520__$1;
(statearr_28528_28574[(2)] = inst_28512);

(statearr_28528_28574[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (4))){
var inst_28518 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28520__$1,inst_28518);
} else {
if((state_val_28521 === (15))){
var inst_28516 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28529_28575 = state_28520__$1;
(statearr_28529_28575[(2)] = inst_28516);

(statearr_28529_28575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (21))){
var inst_28475 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28530_28576 = state_28520__$1;
(statearr_28530_28576[(2)] = inst_28475);

(statearr_28530_28576[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (31))){
var inst_28499 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28520__$1 = state_28520;
if(cljs.core.truth_(inst_28499)){
var statearr_28531_28577 = state_28520__$1;
(statearr_28531_28577[(1)] = (34));

} else {
var statearr_28532_28578 = state_28520__$1;
(statearr_28532_28578[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (32))){
var inst_28508 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28533_28579 = state_28520__$1;
(statearr_28533_28579[(2)] = inst_28508);

(statearr_28533_28579[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (33))){
var inst_28497 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28534_28580 = state_28520__$1;
(statearr_28534_28580[(2)] = inst_28497);

(statearr_28534_28580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (13))){
var inst_28458 = figwheel.client.heads_up.clear.call(null);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(16),inst_28458);
} else {
if((state_val_28521 === (22))){
var inst_28479 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28480 = figwheel.client.heads_up.append_message.call(null,inst_28479);
var state_28520__$1 = state_28520;
var statearr_28535_28581 = state_28520__$1;
(statearr_28535_28581[(2)] = inst_28480);

(statearr_28535_28581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (36))){
var inst_28506 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28536_28582 = state_28520__$1;
(statearr_28536_28582[(2)] = inst_28506);

(statearr_28536_28582[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (29))){
var inst_28490 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28537_28583 = state_28520__$1;
(statearr_28537_28583[(2)] = inst_28490);

(statearr_28537_28583[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (6))){
var inst_28439 = (state_28520[(7)]);
var state_28520__$1 = state_28520;
var statearr_28538_28584 = state_28520__$1;
(statearr_28538_28584[(2)] = inst_28439);

(statearr_28538_28584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (28))){
var inst_28486 = (state_28520[(2)]);
var inst_28487 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28488 = figwheel.client.heads_up.display_warning.call(null,inst_28487);
var state_28520__$1 = (function (){var statearr_28539 = state_28520;
(statearr_28539[(8)] = inst_28486);

return statearr_28539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(29),inst_28488);
} else {
if((state_val_28521 === (25))){
var inst_28484 = figwheel.client.heads_up.clear.call(null);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(28),inst_28484);
} else {
if((state_val_28521 === (34))){
var inst_28501 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(37),inst_28501);
} else {
if((state_val_28521 === (17))){
var inst_28466 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28540_28585 = state_28520__$1;
(statearr_28540_28585[(2)] = inst_28466);

(statearr_28540_28585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (3))){
var inst_28456 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28520__$1 = state_28520;
if(cljs.core.truth_(inst_28456)){
var statearr_28541_28586 = state_28520__$1;
(statearr_28541_28586[(1)] = (13));

} else {
var statearr_28542_28587 = state_28520__$1;
(statearr_28542_28587[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (12))){
var inst_28452 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28543_28588 = state_28520__$1;
(statearr_28543_28588[(2)] = inst_28452);

(statearr_28543_28588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (2))){
var inst_28439 = (state_28520[(7)]);
var inst_28439__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_28520__$1 = (function (){var statearr_28544 = state_28520;
(statearr_28544[(7)] = inst_28439__$1);

return statearr_28544;
})();
if(cljs.core.truth_(inst_28439__$1)){
var statearr_28545_28589 = state_28520__$1;
(statearr_28545_28589[(1)] = (5));

} else {
var statearr_28546_28590 = state_28520__$1;
(statearr_28546_28590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (23))){
var inst_28482 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28520__$1 = state_28520;
if(cljs.core.truth_(inst_28482)){
var statearr_28547_28591 = state_28520__$1;
(statearr_28547_28591[(1)] = (25));

} else {
var statearr_28548_28592 = state_28520__$1;
(statearr_28548_28592[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (35))){
var state_28520__$1 = state_28520;
var statearr_28549_28593 = state_28520__$1;
(statearr_28549_28593[(2)] = null);

(statearr_28549_28593[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (19))){
var inst_28477 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28520__$1 = state_28520;
if(cljs.core.truth_(inst_28477)){
var statearr_28550_28594 = state_28520__$1;
(statearr_28550_28594[(1)] = (22));

} else {
var statearr_28551_28595 = state_28520__$1;
(statearr_28551_28595[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (11))){
var inst_28448 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28552_28596 = state_28520__$1;
(statearr_28552_28596[(2)] = inst_28448);

(statearr_28552_28596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (9))){
var inst_28450 = figwheel.client.heads_up.clear.call(null);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(12),inst_28450);
} else {
if((state_val_28521 === (5))){
var inst_28441 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28520__$1 = state_28520;
var statearr_28553_28597 = state_28520__$1;
(statearr_28553_28597[(2)] = inst_28441);

(statearr_28553_28597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (14))){
var inst_28468 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28520__$1 = state_28520;
if(cljs.core.truth_(inst_28468)){
var statearr_28554_28598 = state_28520__$1;
(statearr_28554_28598[(1)] = (18));

} else {
var statearr_28555_28599 = state_28520__$1;
(statearr_28555_28599[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (26))){
var inst_28492 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28520__$1 = state_28520;
if(cljs.core.truth_(inst_28492)){
var statearr_28556_28600 = state_28520__$1;
(statearr_28556_28600[(1)] = (30));

} else {
var statearr_28557_28601 = state_28520__$1;
(statearr_28557_28601[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (16))){
var inst_28460 = (state_28520[(2)]);
var inst_28461 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28462 = figwheel.client.format_messages.call(null,inst_28461);
var inst_28463 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28464 = figwheel.client.heads_up.display_error.call(null,inst_28462,inst_28463);
var state_28520__$1 = (function (){var statearr_28558 = state_28520;
(statearr_28558[(9)] = inst_28460);

return statearr_28558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(17),inst_28464);
} else {
if((state_val_28521 === (30))){
var inst_28494 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28495 = figwheel.client.heads_up.display_warning.call(null,inst_28494);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(33),inst_28495);
} else {
if((state_val_28521 === (10))){
var inst_28454 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28559_28602 = state_28520__$1;
(statearr_28559_28602[(2)] = inst_28454);

(statearr_28559_28602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (18))){
var inst_28470 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28471 = figwheel.client.format_messages.call(null,inst_28470);
var inst_28472 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28473 = figwheel.client.heads_up.display_error.call(null,inst_28471,inst_28472);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(21),inst_28473);
} else {
if((state_val_28521 === (37))){
var inst_28503 = (state_28520[(2)]);
var state_28520__$1 = state_28520;
var statearr_28560_28603 = state_28520__$1;
(statearr_28560_28603[(2)] = inst_28503);

(statearr_28560_28603[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28521 === (8))){
var inst_28446 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(11),inst_28446);
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
});})(c__23014__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22949__auto__,c__23014__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto____0 = (function (){
var statearr_28564 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28564[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto__);

(statearr_28564[(1)] = (1));

return statearr_28564;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto____1 = (function (state_28520){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_28520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e28565){if((e28565 instanceof Object)){
var ex__22953__auto__ = e28565;
var statearr_28566_28604 = state_28520;
(statearr_28566_28604[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28605 = state_28520;
state_28520 = G__28605;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto__ = function(state_28520){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto____1.call(this,state_28520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto__,msg_hist,msg_names,msg))
})();
var state__23016__auto__ = (function (){var statearr_28567 = f__23015__auto__.call(null);
(statearr_28567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto__);

return statearr_28567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto__,msg_hist,msg_names,msg))
);

return c__23014__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23014__auto___28668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto___28668,ch){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto___28668,ch){
return (function (state_28651){
var state_val_28652 = (state_28651[(1)]);
if((state_val_28652 === (1))){
var state_28651__$1 = state_28651;
var statearr_28653_28669 = state_28651__$1;
(statearr_28653_28669[(2)] = null);

(statearr_28653_28669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (2))){
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28651__$1,(4),ch);
} else {
if((state_val_28652 === (3))){
var inst_28649 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28651__$1,inst_28649);
} else {
if((state_val_28652 === (4))){
var inst_28639 = (state_28651[(7)]);
var inst_28639__$1 = (state_28651[(2)]);
var state_28651__$1 = (function (){var statearr_28654 = state_28651;
(statearr_28654[(7)] = inst_28639__$1);

return statearr_28654;
})();
if(cljs.core.truth_(inst_28639__$1)){
var statearr_28655_28670 = state_28651__$1;
(statearr_28655_28670[(1)] = (5));

} else {
var statearr_28656_28671 = state_28651__$1;
(statearr_28656_28671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (5))){
var inst_28639 = (state_28651[(7)]);
var inst_28641 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28639);
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28651__$1,(8),inst_28641);
} else {
if((state_val_28652 === (6))){
var state_28651__$1 = state_28651;
var statearr_28657_28672 = state_28651__$1;
(statearr_28657_28672[(2)] = null);

(statearr_28657_28672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (7))){
var inst_28647 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28658_28673 = state_28651__$1;
(statearr_28658_28673[(2)] = inst_28647);

(statearr_28658_28673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (8))){
var inst_28643 = (state_28651[(2)]);
var state_28651__$1 = (function (){var statearr_28659 = state_28651;
(statearr_28659[(8)] = inst_28643);

return statearr_28659;
})();
var statearr_28660_28674 = state_28651__$1;
(statearr_28660_28674[(2)] = null);

(statearr_28660_28674[(1)] = (2));


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
});})(c__23014__auto___28668,ch))
;
return ((function (switch__22949__auto__,c__23014__auto___28668,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22950__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22950__auto____0 = (function (){
var statearr_28664 = [null,null,null,null,null,null,null,null,null];
(statearr_28664[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22950__auto__);

(statearr_28664[(1)] = (1));

return statearr_28664;
});
var figwheel$client$heads_up_plugin_$_state_machine__22950__auto____1 = (function (state_28651){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_28651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e28665){if((e28665 instanceof Object)){
var ex__22953__auto__ = e28665;
var statearr_28666_28675 = state_28651;
(statearr_28666_28675[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28676 = state_28651;
state_28651 = G__28676;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22950__auto__ = function(state_28651){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22950__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22950__auto____1.call(this,state_28651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22950__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22950__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto___28668,ch))
})();
var state__23016__auto__ = (function (){var statearr_28667 = f__23015__auto__.call(null);
(statearr_28667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto___28668);

return statearr_28667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto___28668,ch))
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
var c__23014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23014__auto__){
return (function (){
var f__23015__auto__ = (function (){var switch__22949__auto__ = ((function (c__23014__auto__){
return (function (state_28697){
var state_val_28698 = (state_28697[(1)]);
if((state_val_28698 === (1))){
var inst_28692 = cljs.core.async.timeout.call(null,(3000));
var state_28697__$1 = state_28697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28697__$1,(2),inst_28692);
} else {
if((state_val_28698 === (2))){
var inst_28694 = (state_28697[(2)]);
var inst_28695 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28697__$1 = (function (){var statearr_28699 = state_28697;
(statearr_28699[(7)] = inst_28694);

return statearr_28699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28697__$1,inst_28695);
} else {
return null;
}
}
});})(c__23014__auto__))
;
return ((function (switch__22949__auto__,c__23014__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22950__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22950__auto____0 = (function (){
var statearr_28703 = [null,null,null,null,null,null,null,null];
(statearr_28703[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22950__auto__);

(statearr_28703[(1)] = (1));

return statearr_28703;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22950__auto____1 = (function (state_28697){
while(true){
var ret_value__22951__auto__ = (function (){try{while(true){
var result__22952__auto__ = switch__22949__auto__.call(null,state_28697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22952__auto__;
}
break;
}
}catch (e28704){if((e28704 instanceof Object)){
var ex__22953__auto__ = e28704;
var statearr_28705_28707 = state_28697;
(statearr_28705_28707[(5)] = ex__22953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28708 = state_28697;
state_28697 = G__28708;
continue;
} else {
return ret_value__22951__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22950__auto__ = function(state_28697){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22950__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22950__auto____1.call(this,state_28697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22950__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22950__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22950__auto__;
})()
;})(switch__22949__auto__,c__23014__auto__))
})();
var state__23016__auto__ = (function (){var statearr_28706 = f__23015__auto__.call(null);
(statearr_28706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23014__auto__);

return statearr_28706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23016__auto__);
});})(c__23014__auto__))
);

return c__23014__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28709){
var map__28716 = p__28709;
var map__28716__$1 = ((((!((map__28716 == null)))?((((map__28716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28716):map__28716);
var ed = map__28716__$1;
var formatted_exception = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28716__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28718_28722 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28719_28723 = null;
var count__28720_28724 = (0);
var i__28721_28725 = (0);
while(true){
if((i__28721_28725 < count__28720_28724)){
var msg_28726 = cljs.core._nth.call(null,chunk__28719_28723,i__28721_28725);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28726);

var G__28727 = seq__28718_28722;
var G__28728 = chunk__28719_28723;
var G__28729 = count__28720_28724;
var G__28730 = (i__28721_28725 + (1));
seq__28718_28722 = G__28727;
chunk__28719_28723 = G__28728;
count__28720_28724 = G__28729;
i__28721_28725 = G__28730;
continue;
} else {
var temp__4425__auto___28731 = cljs.core.seq.call(null,seq__28718_28722);
if(temp__4425__auto___28731){
var seq__28718_28732__$1 = temp__4425__auto___28731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28718_28732__$1)){
var c__19917__auto___28733 = cljs.core.chunk_first.call(null,seq__28718_28732__$1);
var G__28734 = cljs.core.chunk_rest.call(null,seq__28718_28732__$1);
var G__28735 = c__19917__auto___28733;
var G__28736 = cljs.core.count.call(null,c__19917__auto___28733);
var G__28737 = (0);
seq__28718_28722 = G__28734;
chunk__28719_28723 = G__28735;
count__28720_28724 = G__28736;
i__28721_28725 = G__28737;
continue;
} else {
var msg_28738 = cljs.core.first.call(null,seq__28718_28732__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28738);

var G__28739 = cljs.core.next.call(null,seq__28718_28732__$1);
var G__28740 = null;
var G__28741 = (0);
var G__28742 = (0);
seq__28718_28722 = G__28739;
chunk__28719_28723 = G__28740;
count__28720_28724 = G__28741;
i__28721_28725 = G__28742;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28743){
var map__28746 = p__28743;
var map__28746__$1 = ((((!((map__28746 == null)))?((((map__28746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28746):map__28746);
var w = map__28746__$1;
var message = cljs.core.get.call(null,map__28746__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28754 = cljs.core.seq.call(null,plugins);
var chunk__28755 = null;
var count__28756 = (0);
var i__28757 = (0);
while(true){
if((i__28757 < count__28756)){
var vec__28758 = cljs.core._nth.call(null,chunk__28755,i__28757);
var k = cljs.core.nth.call(null,vec__28758,(0),null);
var plugin = cljs.core.nth.call(null,vec__28758,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28760 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28754,chunk__28755,count__28756,i__28757,pl_28760,vec__28758,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28760.call(null,msg_hist);
});})(seq__28754,chunk__28755,count__28756,i__28757,pl_28760,vec__28758,k,plugin))
);
} else {
}

var G__28761 = seq__28754;
var G__28762 = chunk__28755;
var G__28763 = count__28756;
var G__28764 = (i__28757 + (1));
seq__28754 = G__28761;
chunk__28755 = G__28762;
count__28756 = G__28763;
i__28757 = G__28764;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28754);
if(temp__4425__auto__){
var seq__28754__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28754__$1)){
var c__19917__auto__ = cljs.core.chunk_first.call(null,seq__28754__$1);
var G__28765 = cljs.core.chunk_rest.call(null,seq__28754__$1);
var G__28766 = c__19917__auto__;
var G__28767 = cljs.core.count.call(null,c__19917__auto__);
var G__28768 = (0);
seq__28754 = G__28765;
chunk__28755 = G__28766;
count__28756 = G__28767;
i__28757 = G__28768;
continue;
} else {
var vec__28759 = cljs.core.first.call(null,seq__28754__$1);
var k = cljs.core.nth.call(null,vec__28759,(0),null);
var plugin = cljs.core.nth.call(null,vec__28759,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28769 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28754,chunk__28755,count__28756,i__28757,pl_28769,vec__28759,k,plugin,seq__28754__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28769.call(null,msg_hist);
});})(seq__28754,chunk__28755,count__28756,i__28757,pl_28769,vec__28759,k,plugin,seq__28754__$1,temp__4425__auto__))
);
} else {
}

var G__28770 = cljs.core.next.call(null,seq__28754__$1);
var G__28771 = null;
var G__28772 = (0);
var G__28773 = (0);
seq__28754 = G__28770;
chunk__28755 = G__28771;
count__28756 = G__28772;
i__28757 = G__28773;
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
var args28774 = [];
var len__20172__auto___28777 = arguments.length;
var i__20173__auto___28778 = (0);
while(true){
if((i__20173__auto___28778 < len__20172__auto___28777)){
args28774.push((arguments[i__20173__auto___28778]));

var G__28779 = (i__20173__auto___28778 + (1));
i__20173__auto___28778 = G__28779;
continue;
} else {
}
break;
}

var G__28776 = args28774.length;
switch (G__28776) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28774.length)].join('')));

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
var len__20172__auto___28785 = arguments.length;
var i__20173__auto___28786 = (0);
while(true){
if((i__20173__auto___28786 < len__20172__auto___28785)){
args__20179__auto__.push((arguments[i__20173__auto___28786]));

var G__28787 = (i__20173__auto___28786 + (1));
i__20173__auto___28786 = G__28787;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((0) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20180__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28782){
var map__28783 = p__28782;
var map__28783__$1 = ((((!((map__28783 == null)))?((((map__28783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28783):map__28783);
var opts = map__28783__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28781){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28781));
});

//# sourceMappingURL=client.js.map