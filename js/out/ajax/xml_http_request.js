// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27570,handler){
var map__27571 = p__27570;
var map__27571__$1 = ((((!((map__27571 == null)))?((((map__27571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27571):map__27571);
var uri = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27571,map__27571__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27569_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__27569_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__27571,map__27571__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___27579 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___27579)){
var response_type_27580 = temp__4425__auto___27579;
this$__$1.responseType = cljs.core.name.call(null,response_type_27580);
} else {
}

var seq__27573_27581 = cljs.core.seq.call(null,headers);
var chunk__27574_27582 = null;
var count__27575_27583 = (0);
var i__27576_27584 = (0);
while(true){
if((i__27576_27584 < count__27575_27583)){
var vec__27577_27585 = cljs.core._nth.call(null,chunk__27574_27582,i__27576_27584);
var k_27586 = cljs.core.nth.call(null,vec__27577_27585,(0),null);
var v_27587 = cljs.core.nth.call(null,vec__27577_27585,(1),null);
this$__$1.setRequestHeader(k_27586,v_27587);

var G__27588 = seq__27573_27581;
var G__27589 = chunk__27574_27582;
var G__27590 = count__27575_27583;
var G__27591 = (i__27576_27584 + (1));
seq__27573_27581 = G__27588;
chunk__27574_27582 = G__27589;
count__27575_27583 = G__27590;
i__27576_27584 = G__27591;
continue;
} else {
var temp__4425__auto___27592 = cljs.core.seq.call(null,seq__27573_27581);
if(temp__4425__auto___27592){
var seq__27573_27593__$1 = temp__4425__auto___27592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27573_27593__$1)){
var c__19917__auto___27594 = cljs.core.chunk_first.call(null,seq__27573_27593__$1);
var G__27595 = cljs.core.chunk_rest.call(null,seq__27573_27593__$1);
var G__27596 = c__19917__auto___27594;
var G__27597 = cljs.core.count.call(null,c__19917__auto___27594);
var G__27598 = (0);
seq__27573_27581 = G__27595;
chunk__27574_27582 = G__27596;
count__27575_27583 = G__27597;
i__27576_27584 = G__27598;
continue;
} else {
var vec__27578_27599 = cljs.core.first.call(null,seq__27573_27593__$1);
var k_27600 = cljs.core.nth.call(null,vec__27578_27599,(0),null);
var v_27601 = cljs.core.nth.call(null,vec__27578_27599,(1),null);
this$__$1.setRequestHeader(k_27600,v_27601);

var G__27602 = cljs.core.next.call(null,seq__27573_27593__$1);
var G__27603 = null;
var G__27604 = (0);
var G__27605 = (0);
seq__27573_27581 = G__27602;
chunk__27574_27582 = G__27603;
count__27575_27583 = G__27604;
i__27576_27584 = G__27605;
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