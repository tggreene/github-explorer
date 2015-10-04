// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28103,handler){
var map__28104 = p__28103;
var map__28104__$1 = ((((!((map__28104 == null)))?((((map__28104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28104):map__28104);
var uri = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__28104,map__28104__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__28102_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__28102_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__28104,map__28104__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___28112 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___28112)){
var response_type_28113 = temp__4425__auto___28112;
this$__$1.responseType = cljs.core.name.call(null,response_type_28113);
} else {
}

var seq__28106_28114 = cljs.core.seq.call(null,headers);
var chunk__28107_28115 = null;
var count__28108_28116 = (0);
var i__28109_28117 = (0);
while(true){
if((i__28109_28117 < count__28108_28116)){
var vec__28110_28118 = cljs.core._nth.call(null,chunk__28107_28115,i__28109_28117);
var k_28119 = cljs.core.nth.call(null,vec__28110_28118,(0),null);
var v_28120 = cljs.core.nth.call(null,vec__28110_28118,(1),null);
this$__$1.setRequestHeader(k_28119,v_28120);

var G__28121 = seq__28106_28114;
var G__28122 = chunk__28107_28115;
var G__28123 = count__28108_28116;
var G__28124 = (i__28109_28117 + (1));
seq__28106_28114 = G__28121;
chunk__28107_28115 = G__28122;
count__28108_28116 = G__28123;
i__28109_28117 = G__28124;
continue;
} else {
var temp__4425__auto___28125 = cljs.core.seq.call(null,seq__28106_28114);
if(temp__4425__auto___28125){
var seq__28106_28126__$1 = temp__4425__auto___28125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28106_28126__$1)){
var c__19917__auto___28127 = cljs.core.chunk_first.call(null,seq__28106_28126__$1);
var G__28128 = cljs.core.chunk_rest.call(null,seq__28106_28126__$1);
var G__28129 = c__19917__auto___28127;
var G__28130 = cljs.core.count.call(null,c__19917__auto___28127);
var G__28131 = (0);
seq__28106_28114 = G__28128;
chunk__28107_28115 = G__28129;
count__28108_28116 = G__28130;
i__28109_28117 = G__28131;
continue;
} else {
var vec__28111_28132 = cljs.core.first.call(null,seq__28106_28126__$1);
var k_28133 = cljs.core.nth.call(null,vec__28111_28132,(0),null);
var v_28134 = cljs.core.nth.call(null,vec__28111_28132,(1),null);
this$__$1.setRequestHeader(k_28133,v_28134);

var G__28135 = cljs.core.next.call(null,seq__28106_28126__$1);
var G__28136 = null;
var G__28137 = (0);
var G__28138 = (0);
seq__28106_28114 = G__28135;
chunk__28107_28115 = G__28136;
count__28108_28116 = G__28137;
i__28109_28117 = G__28138;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__19114__auto__ = body;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map