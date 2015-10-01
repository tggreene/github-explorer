// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19728__auto__,k__19729__auto__){
var self__ = this;
var this__19728__auto____$1 = this;
return cljs.core._lookup.call(null,this__19728__auto____$1,k__19729__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19730__auto__,k27056,else__19731__auto__){
var self__ = this;
var this__19730__auto____$1 = this;
var G__27058 = (((k27056 instanceof cljs.core.Keyword))?k27056.fqn:null);
switch (G__27058) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27056,else__19731__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__27059,opts){
var self__ = this;
var map__27060 = p__27059;
var map__27060__$1 = ((((!((map__27060 == null)))?((((map__27060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27060):map__27060);
var request__$1 = cljs.core.get.call(null,map__27060__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__27062 = this;
var map__27062__$1 = ((((!((map__27062 == null)))?((((map__27062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27062):map__27062);
var request__$2 = cljs.core.get.call(null,map__27062__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__27064,xhrio){
var self__ = this;
var map__27065 = p__27064;
var map__27065__$1 = ((((!((map__27065 == null)))?((((map__27065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27065):map__27065);
var response__$1 = cljs.core.get.call(null,map__27065__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__27067 = this;
var map__27067__$1 = ((((!((map__27067 == null)))?((((map__27067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27067):map__27067);
var response__$2 = cljs.core.get.call(null,map__27067__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19742__auto__,writer__19743__auto__,opts__19744__auto__){
var self__ = this;
var this__19742__auto____$1 = this;
var pr_pair__19745__auto__ = ((function (this__19742__auto____$1){
return (function (keyval__19746__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,cljs.core.pr_writer,""," ","",opts__19744__auto__,keyval__19746__auto__);
});})(this__19742__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,pr_pair__19745__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__19744__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27055){
var self__ = this;
var G__27055__$1 = this;
return (new cljs.core.RecordIter((0),G__27055__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19726__auto__){
var self__ = this;
var this__19726__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19722__auto__){
var self__ = this;
var this__19722__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19732__auto__){
var self__ = this;
var this__19732__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19723__auto__){
var self__ = this;
var this__19723__auto____$1 = this;
var h__19549__auto__ = self__.__hash;
if(!((h__19549__auto__ == null))){
return h__19549__auto__;
} else {
var h__19549__auto____$1 = cljs.core.hash_imap.call(null,this__19723__auto____$1);
self__.__hash = h__19549__auto____$1;

return h__19549__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19724__auto__,other__19725__auto__){
var self__ = this;
var this__19724__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19102__auto__ = other__19725__auto__;
if(cljs.core.truth_(and__19102__auto__)){
var and__19102__auto____$1 = (this__19724__auto____$1.constructor === other__19725__auto__.constructor);
if(and__19102__auto____$1){
return cljs.core.equiv_map.call(null,this__19724__auto____$1,other__19725__auto__);
} else {
return and__19102__auto____$1;
}
} else {
return and__19102__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19737__auto__,k__19738__auto__){
var self__ = this;
var this__19737__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__19738__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19737__auto____$1),self__.__meta),k__19738__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19738__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19735__auto__,k__19736__auto__,G__27055){
var self__ = this;
var this__19735__auto____$1 = this;
var pred__27069 = cljs.core.keyword_identical_QMARK_;
var expr__27070 = k__19736__auto__;
if(cljs.core.truth_(pred__27069.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__27070))){
return (new ajax.core.StandardInterceptor(G__27055,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27069.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__27070))){
return (new ajax.core.StandardInterceptor(self__.name,G__27055,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27069.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__27070))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__27055,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19736__auto__,G__27055),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19740__auto__){
var self__ = this;
var this__19740__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19727__auto__,G__27055){
var self__ = this;
var this__19727__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__27055,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19733__auto__,entry__19734__auto__){
var self__ = this;
var this__19733__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19734__auto__)){
return cljs.core._assoc.call(null,this__19733__auto____$1,cljs.core._nth.call(null,entry__19734__auto__,(0)),cljs.core._nth.call(null,entry__19734__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19733__auto____$1,entry__19734__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__19762__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__27057){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__27057),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__27057),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__27057),null,cljs.core.dissoc.call(null,G__27057,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__19114__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__27073,xhrio){
var map__27076 = p__27073;
var map__27076__$1 = ((((!((map__27076 == null)))?((((map__27076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27076):map__27076);
var description = cljs.core.get.call(null,map__27076__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27082 = arguments.length;
var i__20173__auto___27083 = (0);
while(true){
if((i__20173__auto___27083 < len__20172__auto___27082)){
args__20179__auto__.push((arguments[i__20173__auto___27083]));

var G__27084 = (i__20173__auto___27083 + (1));
i__20173__auto___27083 = G__27084;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((3) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20180__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq27078){
var G__27079 = cljs.core.first.call(null,seq27078);
var seq27078__$1 = cljs.core.next.call(null,seq27078);
var G__27080 = cljs.core.first.call(null,seq27078__$1);
var seq27078__$2 = cljs.core.next.call(null,seq27078__$1);
var G__27081 = cljs.core.first.call(null,seq27078__$2);
var seq27078__$3 = cljs.core.next.call(null,seq27078__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__27079,G__27080,G__27081,seq27078__$3);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19728__auto__,k__19729__auto__){
var self__ = this;
var this__19728__auto____$1 = this;
return cljs.core._lookup.call(null,this__19728__auto____$1,k__19729__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19730__auto__,k27087,else__19731__auto__){
var self__ = this;
var this__19730__auto____$1 = this;
var G__27089 = (((k27087 instanceof cljs.core.Keyword))?k27087.fqn:null);
switch (G__27089) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27087,else__19731__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__27090,request){
var self__ = this;
var map__27091 = p__27090;
var map__27091__$1 = ((((!((map__27091 == null)))?((((map__27091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27091):map__27091);
var content_type__$1 = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__27093 = this;
var map__27093__$1 = ((((!((map__27093 == null)))?((((map__27093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27093):map__27093);
var content_type__$2 = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__27093,map__27093__$1,content_type__$2,map__27091,map__27091__$1,content_type__$1){
return (function (p1__27085_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",clojure.string.join.call(null,", ",content_type__$2)], null),(function (){var or__19114__auto__ = p1__27085_SHARP_;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__27093,map__27093__$1,content_type__$2,map__27091,map__27091__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__27095,xhrio){
var self__ = this;
var map__27096 = p__27095;
var map__27096__$1 = ((((!((map__27096 == null)))?((((map__27096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27096):map__27096);
var format = map__27096__$1;
var read__$1 = cljs.core.get.call(null,map__27096__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__27098 = this;
var map__27098__$1 = ((((!((map__27098 == null)))?((((map__27098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27098):map__27098);
var format__$1 = map__27098__$1;
var read__$2 = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__27101 = status;
switch (G__27101) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e27102){if((e27102 instanceof Object)){
var e = e27102;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e27102;

}
}
}
}catch (e27100){if((e27100 instanceof Object)){
var e = e27100;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e27100;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19742__auto__,writer__19743__auto__,opts__19744__auto__){
var self__ = this;
var this__19742__auto____$1 = this;
var pr_pair__19745__auto__ = ((function (this__19742__auto____$1){
return (function (keyval__19746__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,cljs.core.pr_writer,""," ","",opts__19744__auto__,keyval__19746__auto__);
});})(this__19742__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,pr_pair__19745__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__19744__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27086){
var self__ = this;
var G__27086__$1 = this;
return (new cljs.core.RecordIter((0),G__27086__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19726__auto__){
var self__ = this;
var this__19726__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19722__auto__){
var self__ = this;
var this__19722__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19732__auto__){
var self__ = this;
var this__19732__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19723__auto__){
var self__ = this;
var this__19723__auto____$1 = this;
var h__19549__auto__ = self__.__hash;
if(!((h__19549__auto__ == null))){
return h__19549__auto__;
} else {
var h__19549__auto____$1 = cljs.core.hash_imap.call(null,this__19723__auto____$1);
self__.__hash = h__19549__auto____$1;

return h__19549__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19724__auto__,other__19725__auto__){
var self__ = this;
var this__19724__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19102__auto__ = other__19725__auto__;
if(cljs.core.truth_(and__19102__auto__)){
var and__19102__auto____$1 = (this__19724__auto____$1.constructor === other__19725__auto__.constructor);
if(and__19102__auto____$1){
return cljs.core.equiv_map.call(null,this__19724__auto____$1,other__19725__auto__);
} else {
return and__19102__auto____$1;
}
} else {
return and__19102__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19737__auto__,k__19738__auto__){
var self__ = this;
var this__19737__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__19738__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19737__auto____$1),self__.__meta),k__19738__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19738__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19735__auto__,k__19736__auto__,G__27086){
var self__ = this;
var this__19735__auto____$1 = this;
var pred__27103 = cljs.core.keyword_identical_QMARK_;
var expr__27104 = k__19736__auto__;
if(cljs.core.truth_(pred__27103.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__27104))){
return (new ajax.core.ResponseFormat(G__27086,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27103.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__27104))){
return (new ajax.core.ResponseFormat(self__.read,G__27086,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27103.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__27104))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__27086,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19736__auto__,G__27086),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19740__auto__){
var self__ = this;
var this__19740__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19727__auto__,G__27086){
var self__ = this;
var this__19727__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__27086,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19733__auto__,entry__19734__auto__){
var self__ = this;
var this__19733__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19734__auto__)){
return cljs.core._assoc.call(null,this__19733__auto____$1,cljs.core._nth.call(null,entry__19734__auto__,(0)),cljs.core._nth.call(null,entry__19734__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19733__auto____$1,entry__19734__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__19762__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__27088){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__27088),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__27088),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__27088),null,cljs.core.dissoc.call(null,G__27088,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args27108 = [];
var len__20172__auto___27111 = arguments.length;
var i__20173__auto___27112 = (0);
while(true){
if((i__20173__auto___27112 < len__20172__auto___27111)){
args27108.push((arguments[i__20173__auto___27112]));

var G__27113 = (i__20173__auto___27112 + (1));
i__20173__auto___27112 = G__27113;
continue;
} else {
}
break;
}

var G__27110 = args27108.length;
switch (G__27110) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27108.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args27115 = [];
var len__20172__auto___27122 = arguments.length;
var i__20173__auto___27123 = (0);
while(true){
if((i__20173__auto___27123 < len__20172__auto___27122)){
args27115.push((arguments[i__20173__auto___27123]));

var G__27124 = (i__20173__auto___27123 + (1));
i__20173__auto___27123 = G__27124;
continue;
} else {
}
break;
}

var G__27117 = args27115.length;
switch (G__27117) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27115.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__27118){
var vec__27119 = p__27118;
var key = cljs.core.nth.call(null,vec__27119,(0),null);
var value = cljs.core.nth.call(null,vec__27119,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__27120){
var vec__27121 = p__27120;
var key = cljs.core.nth.call(null,vec__27121,(0),null);
var value = cljs.core.nth.call(null,vec__27121,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27128){
var vec__27129 = p__27128;
var k = cljs.core.nth.call(null,vec__27129,(0),null);
var v = cljs.core.nth.call(null,vec__27129,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19728__auto__,k__19729__auto__){
var self__ = this;
var this__19728__auto____$1 = this;
return cljs.core._lookup.call(null,this__19728__auto____$1,k__19729__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19730__auto__,k27132,else__19731__auto__){
var self__ = this;
var this__19730__auto____$1 = this;
var G__27134 = k27132;
switch (G__27134) {
default:
return cljs.core.get.call(null,self__.__extmap,k27132,else__19731__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27135){
var self__ = this;
var map__27136 = p__27135;
var map__27136__$1 = ((((!((map__27136 == null)))?((((map__27136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27136):map__27136);
var request = map__27136__$1;
var method = cljs.core.get.call(null,map__27136__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__27136,map__27136__$1,request,method){
return (function (p1__27130_SHARP_){
return ajax.core.uri_with_params.call(null,p1__27130_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__27136,map__27136__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19742__auto__,writer__19743__auto__,opts__19744__auto__){
var self__ = this;
var this__19742__auto____$1 = this;
var pr_pair__19745__auto__ = ((function (this__19742__auto____$1){
return (function (keyval__19746__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,cljs.core.pr_writer,""," ","",opts__19744__auto__,keyval__19746__auto__);
});})(this__19742__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,pr_pair__19745__auto__,"#ajax.core.ProcessGet{",", ","}",opts__19744__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27131){
var self__ = this;
var G__27131__$1 = this;
return (new cljs.core.RecordIter((0),G__27131__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19726__auto__){
var self__ = this;
var this__19726__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19722__auto__){
var self__ = this;
var this__19722__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19732__auto__){
var self__ = this;
var this__19732__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19723__auto__){
var self__ = this;
var this__19723__auto____$1 = this;
var h__19549__auto__ = self__.__hash;
if(!((h__19549__auto__ == null))){
return h__19549__auto__;
} else {
var h__19549__auto____$1 = cljs.core.hash_imap.call(null,this__19723__auto____$1);
self__.__hash = h__19549__auto____$1;

return h__19549__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19724__auto__,other__19725__auto__){
var self__ = this;
var this__19724__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19102__auto__ = other__19725__auto__;
if(cljs.core.truth_(and__19102__auto__)){
var and__19102__auto____$1 = (this__19724__auto____$1.constructor === other__19725__auto__.constructor);
if(and__19102__auto____$1){
return cljs.core.equiv_map.call(null,this__19724__auto____$1,other__19725__auto__);
} else {
return and__19102__auto____$1;
}
} else {
return and__19102__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19737__auto__,k__19738__auto__){
var self__ = this;
var this__19737__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19738__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19737__auto____$1),self__.__meta),k__19738__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19738__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19735__auto__,k__19736__auto__,G__27131){
var self__ = this;
var this__19735__auto____$1 = this;
var pred__27138 = cljs.core.keyword_identical_QMARK_;
var expr__27139 = k__19736__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19736__auto__,G__27131),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19740__auto__){
var self__ = this;
var this__19740__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19727__auto__,G__27131){
var self__ = this;
var this__19727__auto____$1 = this;
return (new ajax.core.ProcessGet(G__27131,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19733__auto__,entry__19734__auto__){
var self__ = this;
var this__19733__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19734__auto__)){
return cljs.core._assoc.call(null,this__19733__auto____$1,cljs.core._nth.call(null,entry__19734__auto__,(0)),cljs.core._nth.call(null,entry__19734__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19733__auto____$1,entry__19734__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__19762__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__27133){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__27133),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19728__auto__,k__19729__auto__){
var self__ = this;
var this__19728__auto____$1 = this;
return cljs.core._lookup.call(null,this__19728__auto____$1,k__19729__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19730__auto__,k27143,else__19731__auto__){
var self__ = this;
var this__19730__auto____$1 = this;
var G__27145 = k27143;
switch (G__27145) {
default:
return cljs.core.get.call(null,self__.__extmap,k27143,else__19731__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27146){
var self__ = this;
var map__27147 = p__27146;
var map__27147__$1 = ((((!((map__27147 == null)))?((((map__27147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27147):map__27147);
var request = map__27147__$1;
var body = cljs.core.get.call(null,map__27147__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__27147__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19742__auto__,writer__19743__auto__,opts__19744__auto__){
var self__ = this;
var this__19742__auto____$1 = this;
var pr_pair__19745__auto__ = ((function (this__19742__auto____$1){
return (function (keyval__19746__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,cljs.core.pr_writer,""," ","",opts__19744__auto__,keyval__19746__auto__);
});})(this__19742__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,pr_pair__19745__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__19744__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27142){
var self__ = this;
var G__27142__$1 = this;
return (new cljs.core.RecordIter((0),G__27142__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19726__auto__){
var self__ = this;
var this__19726__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19722__auto__){
var self__ = this;
var this__19722__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19732__auto__){
var self__ = this;
var this__19732__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19723__auto__){
var self__ = this;
var this__19723__auto____$1 = this;
var h__19549__auto__ = self__.__hash;
if(!((h__19549__auto__ == null))){
return h__19549__auto__;
} else {
var h__19549__auto____$1 = cljs.core.hash_imap.call(null,this__19723__auto____$1);
self__.__hash = h__19549__auto____$1;

return h__19549__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19724__auto__,other__19725__auto__){
var self__ = this;
var this__19724__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19102__auto__ = other__19725__auto__;
if(cljs.core.truth_(and__19102__auto__)){
var and__19102__auto____$1 = (this__19724__auto____$1.constructor === other__19725__auto__.constructor);
if(and__19102__auto____$1){
return cljs.core.equiv_map.call(null,this__19724__auto____$1,other__19725__auto__);
} else {
return and__19102__auto____$1;
}
} else {
return and__19102__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19737__auto__,k__19738__auto__){
var self__ = this;
var this__19737__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19738__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19737__auto____$1),self__.__meta),k__19738__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19738__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19735__auto__,k__19736__auto__,G__27142){
var self__ = this;
var this__19735__auto____$1 = this;
var pred__27149 = cljs.core.keyword_identical_QMARK_;
var expr__27150 = k__19736__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19736__auto__,G__27142),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19740__auto__){
var self__ = this;
var this__19740__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19727__auto__,G__27142){
var self__ = this;
var this__19727__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__27142,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19733__auto__,entry__19734__auto__){
var self__ = this;
var this__19733__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19734__auto__)){
return cljs.core._assoc.call(null,this__19733__auto____$1,cljs.core._nth.call(null,entry__19734__auto__,(0)),cljs.core._nth.call(null,entry__19734__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19733__auto____$1,entry__19734__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__19762__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__27144){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__27144),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__27153_SHARP_){
return [cljs.core.str(p1__27153_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19728__auto__,k__19729__auto__){
var self__ = this;
var this__19728__auto____$1 = this;
return cljs.core._lookup.call(null,this__19728__auto____$1,k__19729__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19730__auto__,k27155,else__19731__auto__){
var self__ = this;
var this__19730__auto____$1 = this;
var G__27157 = k27155;
switch (G__27157) {
default:
return cljs.core.get.call(null,self__.__extmap,k27155,else__19731__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27158){
var self__ = this;
var map__27159 = p__27158;
var map__27159__$1 = ((((!((map__27159 == null)))?((((map__27159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27159):map__27159);
var request = map__27159__$1;
var uri = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__27161 = ajax.core.get_request_format.call(null,format);
var map__27161__$1 = ((((!((map__27161 == null)))?((((map__27161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27161):map__27161);
var write = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__19114__auto__ = headers;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19742__auto__,writer__19743__auto__,opts__19744__auto__){
var self__ = this;
var this__19742__auto____$1 = this;
var pr_pair__19745__auto__ = ((function (this__19742__auto____$1){
return (function (keyval__19746__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,cljs.core.pr_writer,""," ","",opts__19744__auto__,keyval__19746__auto__);
});})(this__19742__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19743__auto__,pr_pair__19745__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__19744__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27154){
var self__ = this;
var G__27154__$1 = this;
return (new cljs.core.RecordIter((0),G__27154__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19726__auto__){
var self__ = this;
var this__19726__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19722__auto__){
var self__ = this;
var this__19722__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19732__auto__){
var self__ = this;
var this__19732__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19723__auto__){
var self__ = this;
var this__19723__auto____$1 = this;
var h__19549__auto__ = self__.__hash;
if(!((h__19549__auto__ == null))){
return h__19549__auto__;
} else {
var h__19549__auto____$1 = cljs.core.hash_imap.call(null,this__19723__auto____$1);
self__.__hash = h__19549__auto____$1;

return h__19549__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19724__auto__,other__19725__auto__){
var self__ = this;
var this__19724__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19102__auto__ = other__19725__auto__;
if(cljs.core.truth_(and__19102__auto__)){
var and__19102__auto____$1 = (this__19724__auto____$1.constructor === other__19725__auto__.constructor);
if(and__19102__auto____$1){
return cljs.core.equiv_map.call(null,this__19724__auto____$1,other__19725__auto__);
} else {
return and__19102__auto____$1;
}
} else {
return and__19102__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19737__auto__,k__19738__auto__){
var self__ = this;
var this__19737__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19738__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19737__auto____$1),self__.__meta),k__19738__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19738__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19735__auto__,k__19736__auto__,G__27154){
var self__ = this;
var this__19735__auto____$1 = this;
var pred__27163 = cljs.core.keyword_identical_QMARK_;
var expr__27164 = k__19736__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19736__auto__,G__27154),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19740__auto__){
var self__ = this;
var this__19740__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19727__auto__,G__27154){
var self__ = this;
var this__19727__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__27154,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19733__auto__,entry__19734__auto__){
var self__ = this;
var this__19733__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19734__auto__)){
return cljs.core._assoc.call(null,this__19733__auto____$1,cljs.core._nth.call(null,entry__19734__auto__,(0)),cljs.core._nth.call(null,entry__19734__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19733__auto____$1,entry__19734__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__19762__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__27156){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__27156),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__27167){
var map__27170 = p__27167;
var map__27170__$1 = ((((!((map__27170 == null)))?((((map__27170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27170):map__27170);
var type = cljs.core.get.call(null,map__27170__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__19114__auto__ = type;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__19114__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args27172 = [];
var len__20172__auto___27175 = arguments.length;
var i__20173__auto___27176 = (0);
while(true){
if((i__20173__auto___27176 < len__20172__auto___27175)){
args27172.push((arguments[i__20173__auto___27176]));

var G__27177 = (i__20173__auto___27176 + (1));
i__20173__auto___27176 = G__27177;
continue;
} else {
}
break;
}

var G__27174 = args27172.length;
switch (G__27174) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27172.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__19114__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args27179 = [];
var len__20172__auto___27182 = arguments.length;
var i__20173__auto___27183 = (0);
while(true){
if((i__20173__auto___27183 < len__20172__auto___27182)){
args27179.push((arguments[i__20173__auto___27183]));

var G__27184 = (i__20173__auto___27183 + (1));
i__20173__auto___27183 = G__27184;
continue;
} else {
}
break;
}

var G__27181 = args27179.length;
switch (G__27181) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27179.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args27186 = [];
var len__20172__auto___27189 = arguments.length;
var i__20173__auto___27190 = (0);
while(true){
if((i__20173__auto___27190 < len__20172__auto___27189)){
args27186.push((arguments[i__20173__auto___27190]));

var G__27191 = (i__20173__auto___27190 + (1));
i__20173__auto___27190 = G__27191;
continue;
} else {
}
break;
}

var G__27188 = args27186.length;
switch (G__27188) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27186.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__19102__auto__ = prefix;
if(cljs.core.truth_(and__19102__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__19102__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args27193 = [];
var len__20172__auto___27196 = arguments.length;
var i__20173__auto___27197 = (0);
while(true){
if((i__20173__auto___27197 < len__20172__auto___27196)){
args27193.push((arguments[i__20173__auto___27197]));

var G__27198 = (i__20173__auto___27197 + (1));
i__20173__auto___27197 = G__27198;
continue;
} else {
}
break;
}

var G__27195 = args27193.length;
switch (G__27195) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27193.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args27200 = [];
var len__20172__auto___27206 = arguments.length;
var i__20173__auto___27207 = (0);
while(true){
if((i__20173__auto___27207 < len__20172__auto___27206)){
args27200.push((arguments[i__20173__auto___27207]));

var G__27208 = (i__20173__auto___27207 + (1));
i__20173__auto___27207 = G__27208;
continue;
} else {
}
break;
}

var G__27202 = args27200.length;
switch (G__27202) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27200.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__27203){
var map__27204 = p__27203;
var map__27204__$1 = ((((!((map__27204 == null)))?((((map__27204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27204):map__27204);
var prefix = cljs.core.get.call(null,map__27204__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__27204__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__27204__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args27210 = [];
var len__20172__auto___27213 = arguments.length;
var i__20173__auto___27214 = (0);
while(true){
if((i__20173__auto___27214 < len__20172__auto___27213)){
args27210.push((arguments[i__20173__auto___27214]));

var G__27215 = (i__20173__auto___27214 + (1));
i__20173__auto___27214 = G__27215;
continue;
} else {
}
break;
}

var G__27212 = args27210.length;
switch (G__27212) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27210.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args27217 = [];
var len__20172__auto___27220 = arguments.length;
var i__20173__auto___27221 = (0);
while(true){
if((i__20173__auto___27221 < len__20172__auto___27220)){
args27217.push((arguments[i__20173__auto___27221]));

var G__27222 = (i__20173__auto___27221 + (1));
i__20173__auto___27221 = G__27222;
continue;
} else {
}
break;
}

var G__27219 = args27217.length;
switch (G__27219) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27217.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args27224 = [];
var len__20172__auto___27227 = arguments.length;
var i__20173__auto___27228 = (0);
while(true){
if((i__20173__auto___27228 < len__20172__auto___27227)){
args27224.push((arguments[i__20173__auto___27228]));

var G__27229 = (i__20173__auto___27228 + (1));
i__20173__auto___27228 = G__27229;
continue;
} else {
}
break;
}

var G__27226 = args27224.length;
switch (G__27226) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27224.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args27231 = [];
var len__20172__auto___27234 = arguments.length;
var i__20173__auto___27235 = (0);
while(true){
if((i__20173__auto___27235 < len__20172__auto___27234)){
args27231.push((arguments[i__20173__auto___27235]));

var G__27236 = (i__20173__auto___27235 + (1));
i__20173__auto___27235 = G__27236;
continue;
} else {
}
break;
}

var G__27233 = args27231.length;
switch (G__27233) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27231.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__27238){
var map__27241 = p__27238;
var map__27241__$1 = ((((!((map__27241 == null)))?((((map__27241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27241):map__27241);
var request = map__27241__$1;
var response_format = cljs.core.get.call(null,map__27241__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args27243 = [];
var len__20172__auto___27246 = arguments.length;
var i__20173__auto___27247 = (0);
while(true){
if((i__20173__auto___27247 < len__20172__auto___27246)){
args27243.push((arguments[i__20173__auto___27247]));

var G__27248 = (i__20173__auto___27247 + (1));
i__20173__auto___27247 = G__27248;
continue;
} else {
}
break;
}

var G__27245 = args27243.length;
switch (G__27245) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27243.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__27250){
var map__27253 = p__27250;
var map__27253__$1 = ((((!((map__27253 == null)))?((((map__27253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27253):map__27253);
var request = map__27253__$1;
var response_format = cljs.core.get.call(null,map__27253__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format));
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args27255 = [];
var len__20172__auto___27258 = arguments.length;
var i__20173__auto___27259 = (0);
while(true){
if((i__20173__auto___27259 < len__20172__auto___27258)){
args27255.push((arguments[i__20173__auto___27259]));

var G__27260 = (i__20173__auto___27259 + (1));
i__20173__auto___27259 = G__27260;
continue;
} else {
}
break;
}

var G__27257 = args27255.length;
switch (G__27257) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27255.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__27262){
var map__27265 = p__27262;
var map__27265__$1 = ((((!((map__27265 == null)))?((((map__27265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27265):map__27265);
var opts = map__27265__$1;
var response_format = cljs.core.get.call(null,map__27265__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args27267 = [];
var len__20172__auto___27270 = arguments.length;
var i__20173__auto___27271 = (0);
while(true){
if((i__20173__auto___27271 < len__20172__auto___27270)){
args27267.push((arguments[i__20173__auto___27271]));

var G__27272 = (i__20173__auto___27271 + (1));
i__20173__auto___27271 = G__27272;
continue;
} else {
}
break;
}

var G__27269 = args27267.length;
switch (G__27269) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27267.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__27274){
var map__27277 = p__27274;
var map__27277__$1 = ((((!((map__27277 == null)))?((((map__27277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27277):map__27277);
var handler = cljs.core.get.call(null,map__27277__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__27279_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__19114__auto__ = p1__27279_SHARP_;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__27280){
var map__27283 = p__27280;
var map__27283__$1 = ((((!((map__27283 == null)))?((((map__27283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27283):map__27283);
var request = map__27283__$1;
var interceptors = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__19114__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__27286 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__27286) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__27289 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__27289) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__27291_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__27291_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args27292 = [];
var len__20172__auto___27305 = arguments.length;
var i__20173__auto___27306 = (0);
while(true){
if((i__20173__auto___27306 < len__20172__auto___27305)){
args27292.push((arguments[i__20173__auto___27306]));

var G__27307 = (i__20173__auto___27306 + (1));
i__20173__auto___27306 = G__27307;
continue;
} else {
}
break;
}

var G__27294 = args27292.length;
switch (G__27294) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27292.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__27295,p__27296){
var map__27297 = p__27295;
var map__27297__$1 = ((((!((map__27297 == null)))?((((map__27297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27297):map__27297);
var handler = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__27298 = p__27296;
var ok = cljs.core.nth.call(null,vec__27298,(0),null);
var result = cljs.core.nth.call(null,vec__27298,(1),null);
var temp__4423__auto___27309 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___27309)){
var h_27310 = temp__4423__auto___27309;
h_27310.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__27300){
var map__27301 = p__27300;
var map__27301__$1 = ((((!((map__27301 == null)))?((((map__27301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27301):map__27301);
var handler = cljs.core.get.call(null,map__27301__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__27301__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__27301__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__27301,map__27301__$1,handler,error_handler,finally$){
return (function (p__27303){
var vec__27304 = p__27303;
var ok = cljs.core.nth.call(null,vec__27304,(0),null);
var result = cljs.core.nth.call(null,vec__27304,(1),null);
var temp__4423__auto___27311 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___27311)){
var h_27312 = temp__4423__auto___27311;
h_27312.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__27301,map__27301__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__27313){
var map__27316 = p__27313;
var map__27316__$1 = ((((!((map__27316 == null)))?((((map__27316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27316):map__27316);
var opts = map__27316__$1;
var method = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__19114__auto__ = format;
if(cljs.core.truth_(or__19114__auto__)){
return or__19114__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27320 = arguments.length;
var i__20173__auto___27321 = (0);
while(true){
if((i__20173__auto___27321 < len__20172__auto___27320)){
args__20179__auto__.push((arguments[i__20173__auto___27321]));

var G__27322 = (i__20173__auto___27321 + (1));
i__20173__auto___27321 = G__27322;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21306__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__21306__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21306__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq27318){
var G__27319 = cljs.core.first.call(null,seq27318);
var seq27318__$1 = cljs.core.next.call(null,seq27318);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__27319,seq27318__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27325 = arguments.length;
var i__20173__auto___27326 = (0);
while(true){
if((i__20173__auto___27326 < len__20172__auto___27325)){
args__20179__auto__.push((arguments[i__20173__auto___27326]));

var G__27327 = (i__20173__auto___27326 + (1));
i__20173__auto___27326 = G__27327;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21306__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__21306__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21306__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq27323){
var G__27324 = cljs.core.first.call(null,seq27323);
var seq27323__$1 = cljs.core.next.call(null,seq27323);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__27324,seq27323__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27330 = arguments.length;
var i__20173__auto___27331 = (0);
while(true){
if((i__20173__auto___27331 < len__20172__auto___27330)){
args__20179__auto__.push((arguments[i__20173__auto___27331]));

var G__27332 = (i__20173__auto___27331 + (1));
i__20173__auto___27331 = G__27332;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21306__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__21306__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21306__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq27328){
var G__27329 = cljs.core.first.call(null,seq27328);
var seq27328__$1 = cljs.core.next.call(null,seq27328);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__27329,seq27328__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27335 = arguments.length;
var i__20173__auto___27336 = (0);
while(true){
if((i__20173__auto___27336 < len__20172__auto___27335)){
args__20179__auto__.push((arguments[i__20173__auto___27336]));

var G__27337 = (i__20173__auto___27336 + (1));
i__20173__auto___27336 = G__27337;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21306__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__21306__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21306__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq27333){
var G__27334 = cljs.core.first.call(null,seq27333);
var seq27333__$1 = cljs.core.next.call(null,seq27333);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__27334,seq27333__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27340 = arguments.length;
var i__20173__auto___27341 = (0);
while(true){
if((i__20173__auto___27341 < len__20172__auto___27340)){
args__20179__auto__.push((arguments[i__20173__auto___27341]));

var G__27342 = (i__20173__auto___27341 + (1));
i__20173__auto___27341 = G__27342;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21306__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__21306__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21306__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq27338){
var G__27339 = cljs.core.first.call(null,seq27338);
var seq27338__$1 = cljs.core.next.call(null,seq27338);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__27339,seq27338__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27345 = arguments.length;
var i__20173__auto___27346 = (0);
while(true){
if((i__20173__auto___27346 < len__20172__auto___27345)){
args__20179__auto__.push((arguments[i__20173__auto___27346]));

var G__27347 = (i__20173__auto___27346 + (1));
i__20173__auto___27346 = G__27347;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21306__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__21306__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21306__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq27343){
var G__27344 = cljs.core.first.call(null,seq27343);
var seq27343__$1 = cljs.core.next.call(null,seq27343);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__27344,seq27343__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27350 = arguments.length;
var i__20173__auto___27351 = (0);
while(true){
if((i__20173__auto___27351 < len__20172__auto___27350)){
args__20179__auto__.push((arguments[i__20173__auto___27351]));

var G__27352 = (i__20173__auto___27351 + (1));
i__20173__auto___27351 = G__27352;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21306__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__21306__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21306__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq27348){
var G__27349 = cljs.core.first.call(null,seq27348);
var seq27348__$1 = cljs.core.next.call(null,seq27348);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__27349,seq27348__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__20179__auto__ = [];
var len__20172__auto___27355 = arguments.length;
var i__20173__auto___27356 = (0);
while(true){
if((i__20173__auto___27356 < len__20172__auto___27355)){
args__20179__auto__.push((arguments[i__20173__auto___27356]));

var G__27357 = (i__20173__auto___27356 + (1));
i__20173__auto___27356 = G__27357;
continue;
} else {
}
break;
}

var argseq__20180__auto__ = ((((1) < args__20179__auto__.length))?(new cljs.core.IndexedSeq(args__20179__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20180__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__21306__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__21306__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21306__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq27353){
var G__27354 = cljs.core.first.call(null,seq27353);
var seq27353__$1 = cljs.core.next.call(null,seq27353);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__27354,seq27353__$1);
});

//# sourceMappingURL=core.js.map