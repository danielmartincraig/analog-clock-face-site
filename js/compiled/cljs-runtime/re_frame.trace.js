goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52525){
var map__52526 = p__52525;
var map__52526__$1 = (((((!((map__52526 == null))))?(((((map__52526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52526):map__52526);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52526__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52526__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52526__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52526__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__52534_52576 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52535_52577 = null;
var count__52536_52578 = (0);
var i__52537_52579 = (0);
while(true){
if((i__52537_52579 < count__52536_52578)){
var vec__52554_52580 = chunk__52535_52577.cljs$core$IIndexed$_nth$arity$2(null,i__52537_52579);
var k_52581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52554_52580,(0),null);
var cb_52582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52554_52580,(1),null);
try{var G__52558_52583 = cljs.core.deref(re_frame.trace.traces);
(cb_52582.cljs$core$IFn$_invoke$arity$1 ? cb_52582.cljs$core$IFn$_invoke$arity$1(G__52558_52583) : cb_52582.call(null,G__52558_52583));
}catch (e52557){var e_52584 = e52557;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52581,"while storing",cljs.core.deref(re_frame.trace.traces),e_52584], 0));
}

var G__52585 = seq__52534_52576;
var G__52586 = chunk__52535_52577;
var G__52587 = count__52536_52578;
var G__52588 = (i__52537_52579 + (1));
seq__52534_52576 = G__52585;
chunk__52535_52577 = G__52586;
count__52536_52578 = G__52587;
i__52537_52579 = G__52588;
continue;
} else {
var temp__5735__auto___52589 = cljs.core.seq(seq__52534_52576);
if(temp__5735__auto___52589){
var seq__52534_52590__$1 = temp__5735__auto___52589;
if(cljs.core.chunked_seq_QMARK_(seq__52534_52590__$1)){
var c__4556__auto___52591 = cljs.core.chunk_first(seq__52534_52590__$1);
var G__52592 = cljs.core.chunk_rest(seq__52534_52590__$1);
var G__52593 = c__4556__auto___52591;
var G__52594 = cljs.core.count(c__4556__auto___52591);
var G__52595 = (0);
seq__52534_52576 = G__52592;
chunk__52535_52577 = G__52593;
count__52536_52578 = G__52594;
i__52537_52579 = G__52595;
continue;
} else {
var vec__52559_52596 = cljs.core.first(seq__52534_52590__$1);
var k_52597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52559_52596,(0),null);
var cb_52598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52559_52596,(1),null);
try{var G__52563_52599 = cljs.core.deref(re_frame.trace.traces);
(cb_52598.cljs$core$IFn$_invoke$arity$1 ? cb_52598.cljs$core$IFn$_invoke$arity$1(G__52563_52599) : cb_52598.call(null,G__52563_52599));
}catch (e52562){var e_52601 = e52562;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52597,"while storing",cljs.core.deref(re_frame.trace.traces),e_52601], 0));
}

var G__52602 = cljs.core.next(seq__52534_52590__$1);
var G__52603 = null;
var G__52604 = (0);
var G__52605 = (0);
seq__52534_52576 = G__52602;
chunk__52535_52577 = G__52603;
count__52536_52578 = G__52604;
i__52537_52579 = G__52605;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
