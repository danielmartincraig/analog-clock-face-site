goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_60393 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_60393(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_60397 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_60397(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__59330 = coll;
var G__59331 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__59330,G__59331) : shadow.dom.lazy_native_coll_seq.call(null,G__59330,G__59331));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__59363 = arguments.length;
switch (G__59363) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__59371 = arguments.length;
switch (G__59371) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__59384 = arguments.length;
switch (G__59384) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__59401 = arguments.length;
switch (G__59401) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__59418 = arguments.length;
switch (G__59418) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__59443 = arguments.length;
switch (G__59443) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e59459){if((e59459 instanceof Object)){
var e = e59459;
return console.log("didnt support attachEvent",el,e);
} else {
throw e59459;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__59475 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__59476 = null;
var count__59477 = (0);
var i__59478 = (0);
while(true){
if((i__59478 < count__59477)){
var el = chunk__59476.cljs$core$IIndexed$_nth$arity$2(null,i__59478);
var handler_60421__$1 = ((function (seq__59475,chunk__59476,count__59477,i__59478,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59475,chunk__59476,count__59477,i__59478,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60421__$1);


var G__60422 = seq__59475;
var G__60423 = chunk__59476;
var G__60424 = count__59477;
var G__60425 = (i__59478 + (1));
seq__59475 = G__60422;
chunk__59476 = G__60423;
count__59477 = G__60424;
i__59478 = G__60425;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59475);
if(temp__5735__auto__){
var seq__59475__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59475__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59475__$1);
var G__60426 = cljs.core.chunk_rest(seq__59475__$1);
var G__60427 = c__4556__auto__;
var G__60428 = cljs.core.count(c__4556__auto__);
var G__60429 = (0);
seq__59475 = G__60426;
chunk__59476 = G__60427;
count__59477 = G__60428;
i__59478 = G__60429;
continue;
} else {
var el = cljs.core.first(seq__59475__$1);
var handler_60431__$1 = ((function (seq__59475,chunk__59476,count__59477,i__59478,el,seq__59475__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59475,chunk__59476,count__59477,i__59478,el,seq__59475__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60431__$1);


var G__60432 = cljs.core.next(seq__59475__$1);
var G__60433 = null;
var G__60434 = (0);
var G__60435 = (0);
seq__59475 = G__60432;
chunk__59476 = G__60433;
count__59477 = G__60434;
i__59478 = G__60435;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__59499 = arguments.length;
switch (G__59499) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__59513 = cljs.core.seq(events);
var chunk__59514 = null;
var count__59515 = (0);
var i__59516 = (0);
while(true){
if((i__59516 < count__59515)){
var vec__59540 = chunk__59514.cljs$core$IIndexed$_nth$arity$2(null,i__59516);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59540,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60437 = seq__59513;
var G__60438 = chunk__59514;
var G__60439 = count__59515;
var G__60440 = (i__59516 + (1));
seq__59513 = G__60437;
chunk__59514 = G__60438;
count__59515 = G__60439;
i__59516 = G__60440;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59513);
if(temp__5735__auto__){
var seq__59513__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59513__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59513__$1);
var G__60441 = cljs.core.chunk_rest(seq__59513__$1);
var G__60442 = c__4556__auto__;
var G__60443 = cljs.core.count(c__4556__auto__);
var G__60444 = (0);
seq__59513 = G__60441;
chunk__59514 = G__60442;
count__59515 = G__60443;
i__59516 = G__60444;
continue;
} else {
var vec__59547 = cljs.core.first(seq__59513__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59547,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60446 = cljs.core.next(seq__59513__$1);
var G__60447 = null;
var G__60448 = (0);
var G__60449 = (0);
seq__59513 = G__60446;
chunk__59514 = G__60447;
count__59515 = G__60448;
i__59516 = G__60449;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__59559 = cljs.core.seq(styles);
var chunk__59560 = null;
var count__59561 = (0);
var i__59562 = (0);
while(true){
if((i__59562 < count__59561)){
var vec__59583 = chunk__59560.cljs$core$IIndexed$_nth$arity$2(null,i__59562);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59583,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60451 = seq__59559;
var G__60452 = chunk__59560;
var G__60453 = count__59561;
var G__60454 = (i__59562 + (1));
seq__59559 = G__60451;
chunk__59560 = G__60452;
count__59561 = G__60453;
i__59562 = G__60454;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59559);
if(temp__5735__auto__){
var seq__59559__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59559__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59559__$1);
var G__60456 = cljs.core.chunk_rest(seq__59559__$1);
var G__60457 = c__4556__auto__;
var G__60458 = cljs.core.count(c__4556__auto__);
var G__60459 = (0);
seq__59559 = G__60456;
chunk__59560 = G__60457;
count__59561 = G__60458;
i__59562 = G__60459;
continue;
} else {
var vec__59597 = cljs.core.first(seq__59559__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59597,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60460 = cljs.core.next(seq__59559__$1);
var G__60461 = null;
var G__60462 = (0);
var G__60463 = (0);
seq__59559 = G__60460;
chunk__59560 = G__60461;
count__59561 = G__60462;
i__59562 = G__60463;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__59609_60465 = key;
var G__59609_60466__$1 = (((G__59609_60465 instanceof cljs.core.Keyword))?G__59609_60465.fqn:null);
switch (G__59609_60466__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_60471 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_60471,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_60471,"aria-");
}
})())){
el.setAttribute(ks_60471,value);
} else {
(el[ks_60471] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59646){
var map__59648 = p__59646;
var map__59648__$1 = (((((!((map__59648 == null))))?(((((map__59648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59648):map__59648);
var props = map__59648__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59648__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59654 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59654,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59654,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59654,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59659 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59659,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59659;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59674 = arguments.length;
switch (G__59674) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59698){
var vec__59699 = p__59698;
var seq__59700 = cljs.core.seq(vec__59699);
var first__59701 = cljs.core.first(seq__59700);
var seq__59700__$1 = cljs.core.next(seq__59700);
var nn = first__59701;
var first__59701__$1 = cljs.core.first(seq__59700__$1);
var seq__59700__$2 = cljs.core.next(seq__59700__$1);
var np = first__59701__$1;
var nc = seq__59700__$2;
var node = vec__59699;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59707 = nn;
var G__59708 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59707,G__59708) : create_fn.call(null,G__59707,G__59708));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59711 = nn;
var G__59712 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59711,G__59712) : create_fn.call(null,G__59711,G__59712));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__59718 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59718,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59718,(1),null);
var seq__59723_60498 = cljs.core.seq(node_children);
var chunk__59724_60499 = null;
var count__59725_60500 = (0);
var i__59726_60501 = (0);
while(true){
if((i__59726_60501 < count__59725_60500)){
var child_struct_60502 = chunk__59724_60499.cljs$core$IIndexed$_nth$arity$2(null,i__59726_60501);
var children_60503 = shadow.dom.dom_node(child_struct_60502);
if(cljs.core.seq_QMARK_(children_60503)){
var seq__59807_60504 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60503));
var chunk__59810_60505 = null;
var count__59811_60506 = (0);
var i__59812_60507 = (0);
while(true){
if((i__59812_60507 < count__59811_60506)){
var child_60508 = chunk__59810_60505.cljs$core$IIndexed$_nth$arity$2(null,i__59812_60507);
if(cljs.core.truth_(child_60508)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60508);


var G__60510 = seq__59807_60504;
var G__60511 = chunk__59810_60505;
var G__60512 = count__59811_60506;
var G__60513 = (i__59812_60507 + (1));
seq__59807_60504 = G__60510;
chunk__59810_60505 = G__60511;
count__59811_60506 = G__60512;
i__59812_60507 = G__60513;
continue;
} else {
var G__60514 = seq__59807_60504;
var G__60515 = chunk__59810_60505;
var G__60516 = count__59811_60506;
var G__60517 = (i__59812_60507 + (1));
seq__59807_60504 = G__60514;
chunk__59810_60505 = G__60515;
count__59811_60506 = G__60516;
i__59812_60507 = G__60517;
continue;
}
} else {
var temp__5735__auto___60519 = cljs.core.seq(seq__59807_60504);
if(temp__5735__auto___60519){
var seq__59807_60520__$1 = temp__5735__auto___60519;
if(cljs.core.chunked_seq_QMARK_(seq__59807_60520__$1)){
var c__4556__auto___60521 = cljs.core.chunk_first(seq__59807_60520__$1);
var G__60522 = cljs.core.chunk_rest(seq__59807_60520__$1);
var G__60523 = c__4556__auto___60521;
var G__60524 = cljs.core.count(c__4556__auto___60521);
var G__60525 = (0);
seq__59807_60504 = G__60522;
chunk__59810_60505 = G__60523;
count__59811_60506 = G__60524;
i__59812_60507 = G__60525;
continue;
} else {
var child_60526 = cljs.core.first(seq__59807_60520__$1);
if(cljs.core.truth_(child_60526)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60526);


var G__60529 = cljs.core.next(seq__59807_60520__$1);
var G__60530 = null;
var G__60531 = (0);
var G__60532 = (0);
seq__59807_60504 = G__60529;
chunk__59810_60505 = G__60530;
count__59811_60506 = G__60531;
i__59812_60507 = G__60532;
continue;
} else {
var G__60534 = cljs.core.next(seq__59807_60520__$1);
var G__60535 = null;
var G__60536 = (0);
var G__60537 = (0);
seq__59807_60504 = G__60534;
chunk__59810_60505 = G__60535;
count__59811_60506 = G__60536;
i__59812_60507 = G__60537;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60503);
}


var G__60539 = seq__59723_60498;
var G__60540 = chunk__59724_60499;
var G__60541 = count__59725_60500;
var G__60542 = (i__59726_60501 + (1));
seq__59723_60498 = G__60539;
chunk__59724_60499 = G__60540;
count__59725_60500 = G__60541;
i__59726_60501 = G__60542;
continue;
} else {
var temp__5735__auto___60544 = cljs.core.seq(seq__59723_60498);
if(temp__5735__auto___60544){
var seq__59723_60545__$1 = temp__5735__auto___60544;
if(cljs.core.chunked_seq_QMARK_(seq__59723_60545__$1)){
var c__4556__auto___60546 = cljs.core.chunk_first(seq__59723_60545__$1);
var G__60547 = cljs.core.chunk_rest(seq__59723_60545__$1);
var G__60548 = c__4556__auto___60546;
var G__60549 = cljs.core.count(c__4556__auto___60546);
var G__60550 = (0);
seq__59723_60498 = G__60547;
chunk__59724_60499 = G__60548;
count__59725_60500 = G__60549;
i__59726_60501 = G__60550;
continue;
} else {
var child_struct_60551 = cljs.core.first(seq__59723_60545__$1);
var children_60557 = shadow.dom.dom_node(child_struct_60551);
if(cljs.core.seq_QMARK_(children_60557)){
var seq__59843_60558 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60557));
var chunk__59845_60559 = null;
var count__59846_60560 = (0);
var i__59847_60561 = (0);
while(true){
if((i__59847_60561 < count__59846_60560)){
var child_60563 = chunk__59845_60559.cljs$core$IIndexed$_nth$arity$2(null,i__59847_60561);
if(cljs.core.truth_(child_60563)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60563);


var G__60565 = seq__59843_60558;
var G__60566 = chunk__59845_60559;
var G__60567 = count__59846_60560;
var G__60568 = (i__59847_60561 + (1));
seq__59843_60558 = G__60565;
chunk__59845_60559 = G__60566;
count__59846_60560 = G__60567;
i__59847_60561 = G__60568;
continue;
} else {
var G__60569 = seq__59843_60558;
var G__60570 = chunk__59845_60559;
var G__60571 = count__59846_60560;
var G__60572 = (i__59847_60561 + (1));
seq__59843_60558 = G__60569;
chunk__59845_60559 = G__60570;
count__59846_60560 = G__60571;
i__59847_60561 = G__60572;
continue;
}
} else {
var temp__5735__auto___60574__$1 = cljs.core.seq(seq__59843_60558);
if(temp__5735__auto___60574__$1){
var seq__59843_60575__$1 = temp__5735__auto___60574__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59843_60575__$1)){
var c__4556__auto___60576 = cljs.core.chunk_first(seq__59843_60575__$1);
var G__60577 = cljs.core.chunk_rest(seq__59843_60575__$1);
var G__60578 = c__4556__auto___60576;
var G__60579 = cljs.core.count(c__4556__auto___60576);
var G__60580 = (0);
seq__59843_60558 = G__60577;
chunk__59845_60559 = G__60578;
count__59846_60560 = G__60579;
i__59847_60561 = G__60580;
continue;
} else {
var child_60581 = cljs.core.first(seq__59843_60575__$1);
if(cljs.core.truth_(child_60581)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60581);


var G__60582 = cljs.core.next(seq__59843_60575__$1);
var G__60583 = null;
var G__60584 = (0);
var G__60585 = (0);
seq__59843_60558 = G__60582;
chunk__59845_60559 = G__60583;
count__59846_60560 = G__60584;
i__59847_60561 = G__60585;
continue;
} else {
var G__60587 = cljs.core.next(seq__59843_60575__$1);
var G__60588 = null;
var G__60589 = (0);
var G__60590 = (0);
seq__59843_60558 = G__60587;
chunk__59845_60559 = G__60588;
count__59846_60560 = G__60589;
i__59847_60561 = G__60590;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60557);
}


var G__60592 = cljs.core.next(seq__59723_60545__$1);
var G__60593 = null;
var G__60594 = (0);
var G__60595 = (0);
seq__59723_60498 = G__60592;
chunk__59724_60499 = G__60593;
count__59725_60500 = G__60594;
i__59726_60501 = G__60595;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__59915 = cljs.core.seq(node);
var chunk__59916 = null;
var count__59917 = (0);
var i__59918 = (0);
while(true){
if((i__59918 < count__59917)){
var n = chunk__59916.cljs$core$IIndexed$_nth$arity$2(null,i__59918);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60603 = seq__59915;
var G__60604 = chunk__59916;
var G__60605 = count__59917;
var G__60606 = (i__59918 + (1));
seq__59915 = G__60603;
chunk__59916 = G__60604;
count__59917 = G__60605;
i__59918 = G__60606;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59915);
if(temp__5735__auto__){
var seq__59915__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59915__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59915__$1);
var G__60609 = cljs.core.chunk_rest(seq__59915__$1);
var G__60610 = c__4556__auto__;
var G__60611 = cljs.core.count(c__4556__auto__);
var G__60612 = (0);
seq__59915 = G__60609;
chunk__59916 = G__60610;
count__59917 = G__60611;
i__59918 = G__60612;
continue;
} else {
var n = cljs.core.first(seq__59915__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60616 = cljs.core.next(seq__59915__$1);
var G__60617 = null;
var G__60618 = (0);
var G__60619 = (0);
seq__59915 = G__60616;
chunk__59916 = G__60617;
count__59917 = G__60618;
i__59918 = G__60619;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__59944 = arguments.length;
switch (G__59944) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__59951 = arguments.length;
switch (G__59951) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__59971 = arguments.length;
switch (G__59971) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60637 = arguments.length;
var i__4737__auto___60638 = (0);
while(true){
if((i__4737__auto___60638 < len__4736__auto___60637)){
args__4742__auto__.push((arguments[i__4737__auto___60638]));

var G__60639 = (i__4737__auto___60638 + (1));
i__4737__auto___60638 = G__60639;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__59996_60645 = cljs.core.seq(nodes);
var chunk__59997_60646 = null;
var count__59998_60647 = (0);
var i__59999_60648 = (0);
while(true){
if((i__59999_60648 < count__59998_60647)){
var node_60649 = chunk__59997_60646.cljs$core$IIndexed$_nth$arity$2(null,i__59999_60648);
fragment.appendChild(shadow.dom._to_dom(node_60649));


var G__60650 = seq__59996_60645;
var G__60651 = chunk__59997_60646;
var G__60652 = count__59998_60647;
var G__60653 = (i__59999_60648 + (1));
seq__59996_60645 = G__60650;
chunk__59997_60646 = G__60651;
count__59998_60647 = G__60652;
i__59999_60648 = G__60653;
continue;
} else {
var temp__5735__auto___60654 = cljs.core.seq(seq__59996_60645);
if(temp__5735__auto___60654){
var seq__59996_60656__$1 = temp__5735__auto___60654;
if(cljs.core.chunked_seq_QMARK_(seq__59996_60656__$1)){
var c__4556__auto___60657 = cljs.core.chunk_first(seq__59996_60656__$1);
var G__60658 = cljs.core.chunk_rest(seq__59996_60656__$1);
var G__60659 = c__4556__auto___60657;
var G__60660 = cljs.core.count(c__4556__auto___60657);
var G__60661 = (0);
seq__59996_60645 = G__60658;
chunk__59997_60646 = G__60659;
count__59998_60647 = G__60660;
i__59999_60648 = G__60661;
continue;
} else {
var node_60662 = cljs.core.first(seq__59996_60656__$1);
fragment.appendChild(shadow.dom._to_dom(node_60662));


var G__60663 = cljs.core.next(seq__59996_60656__$1);
var G__60664 = null;
var G__60665 = (0);
var G__60666 = (0);
seq__59996_60645 = G__60663;
chunk__59997_60646 = G__60664;
count__59998_60647 = G__60665;
i__59999_60648 = G__60666;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq59989){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59989));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__60013_60668 = cljs.core.seq(scripts);
var chunk__60014_60669 = null;
var count__60015_60670 = (0);
var i__60016_60671 = (0);
while(true){
if((i__60016_60671 < count__60015_60670)){
var vec__60031_60673 = chunk__60014_60669.cljs$core$IIndexed$_nth$arity$2(null,i__60016_60671);
var script_tag_60674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60031_60673,(0),null);
var script_body_60675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60031_60673,(1),null);
eval(script_body_60675);


var G__60676 = seq__60013_60668;
var G__60677 = chunk__60014_60669;
var G__60678 = count__60015_60670;
var G__60679 = (i__60016_60671 + (1));
seq__60013_60668 = G__60676;
chunk__60014_60669 = G__60677;
count__60015_60670 = G__60678;
i__60016_60671 = G__60679;
continue;
} else {
var temp__5735__auto___60681 = cljs.core.seq(seq__60013_60668);
if(temp__5735__auto___60681){
var seq__60013_60682__$1 = temp__5735__auto___60681;
if(cljs.core.chunked_seq_QMARK_(seq__60013_60682__$1)){
var c__4556__auto___60683 = cljs.core.chunk_first(seq__60013_60682__$1);
var G__60684 = cljs.core.chunk_rest(seq__60013_60682__$1);
var G__60685 = c__4556__auto___60683;
var G__60686 = cljs.core.count(c__4556__auto___60683);
var G__60687 = (0);
seq__60013_60668 = G__60684;
chunk__60014_60669 = G__60685;
count__60015_60670 = G__60686;
i__60016_60671 = G__60687;
continue;
} else {
var vec__60035_60689 = cljs.core.first(seq__60013_60682__$1);
var script_tag_60690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60035_60689,(0),null);
var script_body_60691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60035_60689,(1),null);
eval(script_body_60691);


var G__60692 = cljs.core.next(seq__60013_60682__$1);
var G__60693 = null;
var G__60694 = (0);
var G__60695 = (0);
seq__60013_60668 = G__60692;
chunk__60014_60669 = G__60693;
count__60015_60670 = G__60694;
i__60016_60671 = G__60695;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__60042){
var vec__60043 = p__60042;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60043,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60043,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__60057 = arguments.length;
switch (G__60057) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__60076 = cljs.core.seq(style_keys);
var chunk__60077 = null;
var count__60078 = (0);
var i__60079 = (0);
while(true){
if((i__60079 < count__60078)){
var it = chunk__60077.cljs$core$IIndexed$_nth$arity$2(null,i__60079);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60711 = seq__60076;
var G__60712 = chunk__60077;
var G__60713 = count__60078;
var G__60714 = (i__60079 + (1));
seq__60076 = G__60711;
chunk__60077 = G__60712;
count__60078 = G__60713;
i__60079 = G__60714;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60076);
if(temp__5735__auto__){
var seq__60076__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60076__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60076__$1);
var G__60715 = cljs.core.chunk_rest(seq__60076__$1);
var G__60716 = c__4556__auto__;
var G__60717 = cljs.core.count(c__4556__auto__);
var G__60718 = (0);
seq__60076 = G__60715;
chunk__60077 = G__60716;
count__60078 = G__60717;
i__60079 = G__60718;
continue;
} else {
var it = cljs.core.first(seq__60076__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60720 = cljs.core.next(seq__60076__$1);
var G__60721 = null;
var G__60722 = (0);
var G__60723 = (0);
seq__60076 = G__60720;
chunk__60077 = G__60721;
count__60078 = G__60722;
i__60079 = G__60723;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60090,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60100 = k60090;
var G__60100__$1 = (((G__60100 instanceof cljs.core.Keyword))?G__60100.fqn:null);
switch (G__60100__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60090,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60107){
var vec__60108 = p__60107;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60108,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60108,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60089){
var self__ = this;
var G__60089__$1 = this;
return (new cljs.core.RecordIter((0),G__60089__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60091,other60092){
var self__ = this;
var this60091__$1 = this;
return (((!((other60092 == null)))) && ((this60091__$1.constructor === other60092.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60091__$1.x,other60092.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60091__$1.y,other60092.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60091__$1.__extmap,other60092.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60089){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60122 = cljs.core.keyword_identical_QMARK_;
var expr__60123 = k__4388__auto__;
if(cljs.core.truth_((pred__60122.cljs$core$IFn$_invoke$arity$2 ? pred__60122.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__60123) : pred__60122.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__60123)))){
return (new shadow.dom.Coordinate(G__60089,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60122.cljs$core$IFn$_invoke$arity$2 ? pred__60122.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__60123) : pred__60122.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__60123)))){
return (new shadow.dom.Coordinate(self__.x,G__60089,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60089),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60089){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__60089,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__60093){
var extmap__4419__auto__ = (function (){var G__60127 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60093,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__60093)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60127);
} else {
return G__60127;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__60093),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__60093),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k60133,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__60141 = k60133;
var G__60141__$1 = (((G__60141 instanceof cljs.core.Keyword))?G__60141.fqn:null);
switch (G__60141__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60133,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__60145){
var vec__60147 = p__60145;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60147,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60147,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60132){
var self__ = this;
var G__60132__$1 = this;
return (new cljs.core.RecordIter((0),G__60132__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60134,other60135){
var self__ = this;
var this60134__$1 = this;
return (((!((other60135 == null)))) && ((this60134__$1.constructor === other60135.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60134__$1.w,other60135.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60134__$1.h,other60135.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60134__$1.__extmap,other60135.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__60132){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60168 = cljs.core.keyword_identical_QMARK_;
var expr__60169 = k__4388__auto__;
if(cljs.core.truth_((pred__60168.cljs$core$IFn$_invoke$arity$2 ? pred__60168.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60169) : pred__60168.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60169)))){
return (new shadow.dom.Size(G__60132,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60168.cljs$core$IFn$_invoke$arity$2 ? pred__60168.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60169) : pred__60168.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60169)))){
return (new shadow.dom.Size(self__.w,G__60132,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__60132),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__60132){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__60132,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__60136){
var extmap__4419__auto__ = (function (){var G__60180 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60136,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__60136)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60180);
} else {
return G__60180;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__60136),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__60136),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__60816 = (i + (1));
var G__60817 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60816;
ret = G__60817;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60207){
var vec__60209 = p__60207;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60209,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__60215 = arguments.length;
switch (G__60215) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__60827 = ps;
var G__60828 = (i + (1));
el__$1 = G__60827;
i = G__60828;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__60233 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60233,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60233,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60233,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__60236_60841 = cljs.core.seq(props);
var chunk__60237_60842 = null;
var count__60238_60843 = (0);
var i__60239_60844 = (0);
while(true){
if((i__60239_60844 < count__60238_60843)){
var vec__60246_60845 = chunk__60237_60842.cljs$core$IIndexed$_nth$arity$2(null,i__60239_60844);
var k_60846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60246_60845,(0),null);
var v_60847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60246_60845,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_60846);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60846),v_60847);


var G__60848 = seq__60236_60841;
var G__60849 = chunk__60237_60842;
var G__60850 = count__60238_60843;
var G__60851 = (i__60239_60844 + (1));
seq__60236_60841 = G__60848;
chunk__60237_60842 = G__60849;
count__60238_60843 = G__60850;
i__60239_60844 = G__60851;
continue;
} else {
var temp__5735__auto___60852 = cljs.core.seq(seq__60236_60841);
if(temp__5735__auto___60852){
var seq__60236_60853__$1 = temp__5735__auto___60852;
if(cljs.core.chunked_seq_QMARK_(seq__60236_60853__$1)){
var c__4556__auto___60854 = cljs.core.chunk_first(seq__60236_60853__$1);
var G__60855 = cljs.core.chunk_rest(seq__60236_60853__$1);
var G__60856 = c__4556__auto___60854;
var G__60857 = cljs.core.count(c__4556__auto___60854);
var G__60858 = (0);
seq__60236_60841 = G__60855;
chunk__60237_60842 = G__60856;
count__60238_60843 = G__60857;
i__60239_60844 = G__60858;
continue;
} else {
var vec__60250_60860 = cljs.core.first(seq__60236_60853__$1);
var k_60861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60250_60860,(0),null);
var v_60862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60250_60860,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_60861);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60861),v_60862);


var G__60866 = cljs.core.next(seq__60236_60853__$1);
var G__60867 = null;
var G__60868 = (0);
var G__60869 = (0);
seq__60236_60841 = G__60866;
chunk__60237_60842 = G__60867;
count__60238_60843 = G__60868;
i__60239_60844 = G__60869;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__60262 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60262,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60262,(1),null);
var seq__60265_60872 = cljs.core.seq(node_children);
var chunk__60267_60873 = null;
var count__60268_60874 = (0);
var i__60269_60875 = (0);
while(true){
if((i__60269_60875 < count__60268_60874)){
var child_struct_60876 = chunk__60267_60873.cljs$core$IIndexed$_nth$arity$2(null,i__60269_60875);
if((!((child_struct_60876 == null)))){
if(typeof child_struct_60876 === 'string'){
var text_60877 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60877),child_struct_60876].join(''));
} else {
var children_60878 = shadow.dom.svg_node(child_struct_60876);
if(cljs.core.seq_QMARK_(children_60878)){
var seq__60304_60879 = cljs.core.seq(children_60878);
var chunk__60306_60880 = null;
var count__60307_60881 = (0);
var i__60308_60882 = (0);
while(true){
if((i__60308_60882 < count__60307_60881)){
var child_60883 = chunk__60306_60880.cljs$core$IIndexed$_nth$arity$2(null,i__60308_60882);
if(cljs.core.truth_(child_60883)){
node.appendChild(child_60883);


var G__60884 = seq__60304_60879;
var G__60885 = chunk__60306_60880;
var G__60886 = count__60307_60881;
var G__60887 = (i__60308_60882 + (1));
seq__60304_60879 = G__60884;
chunk__60306_60880 = G__60885;
count__60307_60881 = G__60886;
i__60308_60882 = G__60887;
continue;
} else {
var G__60888 = seq__60304_60879;
var G__60889 = chunk__60306_60880;
var G__60890 = count__60307_60881;
var G__60891 = (i__60308_60882 + (1));
seq__60304_60879 = G__60888;
chunk__60306_60880 = G__60889;
count__60307_60881 = G__60890;
i__60308_60882 = G__60891;
continue;
}
} else {
var temp__5735__auto___60892 = cljs.core.seq(seq__60304_60879);
if(temp__5735__auto___60892){
var seq__60304_60893__$1 = temp__5735__auto___60892;
if(cljs.core.chunked_seq_QMARK_(seq__60304_60893__$1)){
var c__4556__auto___60894 = cljs.core.chunk_first(seq__60304_60893__$1);
var G__60895 = cljs.core.chunk_rest(seq__60304_60893__$1);
var G__60896 = c__4556__auto___60894;
var G__60897 = cljs.core.count(c__4556__auto___60894);
var G__60898 = (0);
seq__60304_60879 = G__60895;
chunk__60306_60880 = G__60896;
count__60307_60881 = G__60897;
i__60308_60882 = G__60898;
continue;
} else {
var child_60899 = cljs.core.first(seq__60304_60893__$1);
if(cljs.core.truth_(child_60899)){
node.appendChild(child_60899);


var G__60903 = cljs.core.next(seq__60304_60893__$1);
var G__60904 = null;
var G__60905 = (0);
var G__60906 = (0);
seq__60304_60879 = G__60903;
chunk__60306_60880 = G__60904;
count__60307_60881 = G__60905;
i__60308_60882 = G__60906;
continue;
} else {
var G__60907 = cljs.core.next(seq__60304_60893__$1);
var G__60908 = null;
var G__60909 = (0);
var G__60910 = (0);
seq__60304_60879 = G__60907;
chunk__60306_60880 = G__60908;
count__60307_60881 = G__60909;
i__60308_60882 = G__60910;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60878);
}
}


var G__60913 = seq__60265_60872;
var G__60914 = chunk__60267_60873;
var G__60915 = count__60268_60874;
var G__60916 = (i__60269_60875 + (1));
seq__60265_60872 = G__60913;
chunk__60267_60873 = G__60914;
count__60268_60874 = G__60915;
i__60269_60875 = G__60916;
continue;
} else {
var G__60917 = seq__60265_60872;
var G__60918 = chunk__60267_60873;
var G__60919 = count__60268_60874;
var G__60920 = (i__60269_60875 + (1));
seq__60265_60872 = G__60917;
chunk__60267_60873 = G__60918;
count__60268_60874 = G__60919;
i__60269_60875 = G__60920;
continue;
}
} else {
var temp__5735__auto___60922 = cljs.core.seq(seq__60265_60872);
if(temp__5735__auto___60922){
var seq__60265_60923__$1 = temp__5735__auto___60922;
if(cljs.core.chunked_seq_QMARK_(seq__60265_60923__$1)){
var c__4556__auto___60924 = cljs.core.chunk_first(seq__60265_60923__$1);
var G__60925 = cljs.core.chunk_rest(seq__60265_60923__$1);
var G__60926 = c__4556__auto___60924;
var G__60927 = cljs.core.count(c__4556__auto___60924);
var G__60928 = (0);
seq__60265_60872 = G__60925;
chunk__60267_60873 = G__60926;
count__60268_60874 = G__60927;
i__60269_60875 = G__60928;
continue;
} else {
var child_struct_60929 = cljs.core.first(seq__60265_60923__$1);
if((!((child_struct_60929 == null)))){
if(typeof child_struct_60929 === 'string'){
var text_60930 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60930),child_struct_60929].join(''));
} else {
var children_60931 = shadow.dom.svg_node(child_struct_60929);
if(cljs.core.seq_QMARK_(children_60931)){
var seq__60320_60932 = cljs.core.seq(children_60931);
var chunk__60322_60933 = null;
var count__60323_60934 = (0);
var i__60324_60935 = (0);
while(true){
if((i__60324_60935 < count__60323_60934)){
var child_60936 = chunk__60322_60933.cljs$core$IIndexed$_nth$arity$2(null,i__60324_60935);
if(cljs.core.truth_(child_60936)){
node.appendChild(child_60936);


var G__60937 = seq__60320_60932;
var G__60938 = chunk__60322_60933;
var G__60939 = count__60323_60934;
var G__60940 = (i__60324_60935 + (1));
seq__60320_60932 = G__60937;
chunk__60322_60933 = G__60938;
count__60323_60934 = G__60939;
i__60324_60935 = G__60940;
continue;
} else {
var G__60941 = seq__60320_60932;
var G__60942 = chunk__60322_60933;
var G__60943 = count__60323_60934;
var G__60944 = (i__60324_60935 + (1));
seq__60320_60932 = G__60941;
chunk__60322_60933 = G__60942;
count__60323_60934 = G__60943;
i__60324_60935 = G__60944;
continue;
}
} else {
var temp__5735__auto___60945__$1 = cljs.core.seq(seq__60320_60932);
if(temp__5735__auto___60945__$1){
var seq__60320_60946__$1 = temp__5735__auto___60945__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60320_60946__$1)){
var c__4556__auto___60947 = cljs.core.chunk_first(seq__60320_60946__$1);
var G__60948 = cljs.core.chunk_rest(seq__60320_60946__$1);
var G__60949 = c__4556__auto___60947;
var G__60950 = cljs.core.count(c__4556__auto___60947);
var G__60951 = (0);
seq__60320_60932 = G__60948;
chunk__60322_60933 = G__60949;
count__60323_60934 = G__60950;
i__60324_60935 = G__60951;
continue;
} else {
var child_60953 = cljs.core.first(seq__60320_60946__$1);
if(cljs.core.truth_(child_60953)){
node.appendChild(child_60953);


var G__60955 = cljs.core.next(seq__60320_60946__$1);
var G__60956 = null;
var G__60957 = (0);
var G__60958 = (0);
seq__60320_60932 = G__60955;
chunk__60322_60933 = G__60956;
count__60323_60934 = G__60957;
i__60324_60935 = G__60958;
continue;
} else {
var G__60959 = cljs.core.next(seq__60320_60946__$1);
var G__60960 = null;
var G__60961 = (0);
var G__60962 = (0);
seq__60320_60932 = G__60959;
chunk__60322_60933 = G__60960;
count__60323_60934 = G__60961;
i__60324_60935 = G__60962;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60931);
}
}


var G__60963 = cljs.core.next(seq__60265_60923__$1);
var G__60964 = null;
var G__60965 = (0);
var G__60966 = (0);
seq__60265_60872 = G__60963;
chunk__60267_60873 = G__60964;
count__60268_60874 = G__60965;
i__60269_60875 = G__60966;
continue;
} else {
var G__60969 = cljs.core.next(seq__60265_60923__$1);
var G__60970 = null;
var G__60971 = (0);
var G__60972 = (0);
seq__60265_60872 = G__60969;
chunk__60267_60873 = G__60970;
count__60268_60874 = G__60971;
i__60269_60875 = G__60972;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60982 = arguments.length;
var i__4737__auto___60983 = (0);
while(true){
if((i__4737__auto___60983 < len__4736__auto___60982)){
args__4742__auto__.push((arguments[i__4737__auto___60983]));

var G__60984 = (i__4737__auto___60983 + (1));
i__4737__auto___60983 = G__60984;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq60341){
var G__60342 = cljs.core.first(seq60341);
var seq60341__$1 = cljs.core.next(seq60341);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60342,seq60341__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__60350 = arguments.length;
switch (G__60350) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__56008__auto___60994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56009__auto__ = (function (){var switch__55813__auto__ = (function (state_60366){
var state_val_60367 = (state_60366[(1)]);
if((state_val_60367 === (1))){
var state_60366__$1 = state_60366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60366__$1,(2),once_or_cleanup);
} else {
if((state_val_60367 === (2))){
var inst_60362 = (state_60366[(2)]);
var inst_60364 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_60366__$1 = (function (){var statearr_60371 = state_60366;
(statearr_60371[(7)] = inst_60362);

return statearr_60371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60366__$1,inst_60364);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55814__auto__ = null;
var shadow$dom$state_machine__55814__auto____0 = (function (){
var statearr_60373 = [null,null,null,null,null,null,null,null];
(statearr_60373[(0)] = shadow$dom$state_machine__55814__auto__);

(statearr_60373[(1)] = (1));

return statearr_60373;
});
var shadow$dom$state_machine__55814__auto____1 = (function (state_60366){
while(true){
var ret_value__55815__auto__ = (function (){try{while(true){
var result__55816__auto__ = switch__55813__auto__(state_60366);
if(cljs.core.keyword_identical_QMARK_(result__55816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55816__auto__;
}
break;
}
}catch (e60374){var ex__55817__auto__ = e60374;
var statearr_60375_61001 = state_60366;
(statearr_60375_61001[(2)] = ex__55817__auto__);


if(cljs.core.seq((state_60366[(4)]))){
var statearr_60376_61002 = state_60366;
(statearr_60376_61002[(1)] = cljs.core.first((state_60366[(4)])));

} else {
throw ex__55817__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61006 = state_60366;
state_60366 = G__61006;
continue;
} else {
return ret_value__55815__auto__;
}
break;
}
});
shadow$dom$state_machine__55814__auto__ = function(state_60366){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55814__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55814__auto____1.call(this,state_60366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55814__auto____0;
shadow$dom$state_machine__55814__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55814__auto____1;
return shadow$dom$state_machine__55814__auto__;
})()
})();
var state__56010__auto__ = (function (){var statearr_60380 = f__56009__auto__();
(statearr_60380[(6)] = c__56008__auto___60994);

return statearr_60380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56010__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
