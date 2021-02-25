goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48973 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48974 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48974);

try{try{var seq__48977 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48978 = null;
var count__48979 = (0);
var i__48980 = (0);
while(true){
if((i__48980 < count__48979)){
var vec__48993 = chunk__48978.cljs$core$IIndexed$_nth$arity$2(null,i__48980);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48993,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48993,(1),null);
var temp__5733__auto___49097 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49097)){
var effect_fn_49098 = temp__5733__auto___49097;
(effect_fn_49098.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49098.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49098.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49102 = seq__48977;
var G__49103 = chunk__48978;
var G__49104 = count__48979;
var G__49105 = (i__48980 + (1));
seq__48977 = G__49102;
chunk__48978 = G__49103;
count__48979 = G__49104;
i__48980 = G__49105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48977);
if(temp__5735__auto__){
var seq__48977__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48977__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48977__$1);
var G__49106 = cljs.core.chunk_rest(seq__48977__$1);
var G__49107 = c__4556__auto__;
var G__49108 = cljs.core.count(c__4556__auto__);
var G__49109 = (0);
seq__48977 = G__49106;
chunk__48978 = G__49107;
count__48979 = G__49108;
i__48980 = G__49109;
continue;
} else {
var vec__48998 = cljs.core.first(seq__48977__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48998,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48998,(1),null);
var temp__5733__auto___49110 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49110)){
var effect_fn_49111 = temp__5733__auto___49110;
(effect_fn_49111.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49111.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49111.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49112 = cljs.core.next(seq__48977__$1);
var G__49113 = null;
var G__49114 = (0);
var G__49115 = (0);
seq__48977 = G__49112;
chunk__48978 = G__49113;
count__48979 = G__49114;
i__48980 = G__49115;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48540__auto___49116 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__48541__auto___49117 = (end__48540__auto___49116 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48541__auto___49117,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__48540__auto___49116);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48973);
}} else {
var seq__49002 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49003 = null;
var count__49004 = (0);
var i__49005 = (0);
while(true){
if((i__49005 < count__49004)){
var vec__49018 = chunk__49003.cljs$core$IIndexed$_nth$arity$2(null,i__49005);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49018,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49018,(1),null);
var temp__5733__auto___49118 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49118)){
var effect_fn_49119 = temp__5733__auto___49118;
(effect_fn_49119.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49119.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49119.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49120 = seq__49002;
var G__49121 = chunk__49003;
var G__49122 = count__49004;
var G__49123 = (i__49005 + (1));
seq__49002 = G__49120;
chunk__49003 = G__49121;
count__49004 = G__49122;
i__49005 = G__49123;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49002);
if(temp__5735__auto__){
var seq__49002__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49002__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49002__$1);
var G__49124 = cljs.core.chunk_rest(seq__49002__$1);
var G__49125 = c__4556__auto__;
var G__49126 = cljs.core.count(c__4556__auto__);
var G__49127 = (0);
seq__49002 = G__49124;
chunk__49003 = G__49125;
count__49004 = G__49126;
i__49005 = G__49127;
continue;
} else {
var vec__49022 = cljs.core.first(seq__49002__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49022,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49022,(1),null);
var temp__5733__auto___49131 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49131)){
var effect_fn_49132 = temp__5733__auto___49131;
(effect_fn_49132.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49132.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49132.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49133 = cljs.core.next(seq__49002__$1);
var G__49134 = null;
var G__49135 = (0);
var G__49136 = (0);
seq__49002 = G__49133;
chunk__49003 = G__49134;
count__49004 = G__49135;
i__49005 = G__49136;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49025 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49026 = null;
var count__49027 = (0);
var i__49028 = (0);
while(true){
if((i__49028 < count__49027)){
var map__49039 = chunk__49026.cljs$core$IIndexed$_nth$arity$2(null,i__49028);
var map__49039__$1 = (((((!((map__49039 == null))))?(((((map__49039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49039):map__49039);
var effect = map__49039__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49039__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49039__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__49025,chunk__49026,count__49027,i__49028,map__49039,map__49039__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__49025,chunk__49026,count__49027,i__49028,map__49039,map__49039__$1,effect,ms,dispatch))
,ms);
}


var G__49145 = seq__49025;
var G__49146 = chunk__49026;
var G__49147 = count__49027;
var G__49148 = (i__49028 + (1));
seq__49025 = G__49145;
chunk__49026 = G__49146;
count__49027 = G__49147;
i__49028 = G__49148;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49025);
if(temp__5735__auto__){
var seq__49025__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49025__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49025__$1);
var G__49151 = cljs.core.chunk_rest(seq__49025__$1);
var G__49152 = c__4556__auto__;
var G__49153 = cljs.core.count(c__4556__auto__);
var G__49154 = (0);
seq__49025 = G__49151;
chunk__49026 = G__49152;
count__49027 = G__49153;
i__49028 = G__49154;
continue;
} else {
var map__49049 = cljs.core.first(seq__49025__$1);
var map__49049__$1 = (((((!((map__49049 == null))))?(((((map__49049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49049):map__49049);
var effect = map__49049__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49049__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49049__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__49025,chunk__49026,count__49027,i__49028,map__49049,map__49049__$1,effect,ms,dispatch,seq__49025__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__49025,chunk__49026,count__49027,i__49028,map__49049,map__49049__$1,effect,ms,dispatch,seq__49025__$1,temp__5735__auto__))
,ms);
}


var G__49160 = cljs.core.next(seq__49025__$1);
var G__49161 = null;
var G__49162 = (0);
var G__49163 = (0);
seq__49025 = G__49160;
chunk__49026 = G__49161;
count__49027 = G__49162;
i__49028 = G__49163;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__49064 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49065 = null;
var count__49066 = (0);
var i__49067 = (0);
while(true){
if((i__49067 < count__49066)){
var event = chunk__49065.cljs$core$IIndexed$_nth$arity$2(null,i__49067);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__49165 = seq__49064;
var G__49166 = chunk__49065;
var G__49167 = count__49066;
var G__49168 = (i__49067 + (1));
seq__49064 = G__49165;
chunk__49065 = G__49166;
count__49066 = G__49167;
i__49067 = G__49168;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49064);
if(temp__5735__auto__){
var seq__49064__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49064__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49064__$1);
var G__49169 = cljs.core.chunk_rest(seq__49064__$1);
var G__49170 = c__4556__auto__;
var G__49171 = cljs.core.count(c__4556__auto__);
var G__49172 = (0);
seq__49064 = G__49169;
chunk__49065 = G__49170;
count__49066 = G__49171;
i__49067 = G__49172;
continue;
} else {
var event = cljs.core.first(seq__49064__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__49173 = cljs.core.next(seq__49064__$1);
var G__49174 = null;
var G__49175 = (0);
var G__49176 = (0);
seq__49064 = G__49173;
chunk__49065 = G__49174;
count__49066 = G__49175;
i__49067 = G__49176;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__49076 = cljs.core.seq(value);
var chunk__49077 = null;
var count__49078 = (0);
var i__49079 = (0);
while(true){
if((i__49079 < count__49078)){
var event = chunk__49077.cljs$core$IIndexed$_nth$arity$2(null,i__49079);
clear_event(event);


var G__49179 = seq__49076;
var G__49180 = chunk__49077;
var G__49181 = count__49078;
var G__49182 = (i__49079 + (1));
seq__49076 = G__49179;
chunk__49077 = G__49180;
count__49078 = G__49181;
i__49079 = G__49182;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49076);
if(temp__5735__auto__){
var seq__49076__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49076__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49076__$1);
var G__49185 = cljs.core.chunk_rest(seq__49076__$1);
var G__49186 = c__4556__auto__;
var G__49187 = cljs.core.count(c__4556__auto__);
var G__49188 = (0);
seq__49076 = G__49185;
chunk__49077 = G__49186;
count__49078 = G__49187;
i__49079 = G__49188;
continue;
} else {
var event = cljs.core.first(seq__49076__$1);
clear_event(event);


var G__49189 = cljs.core.next(seq__49076__$1);
var G__49190 = null;
var G__49192 = (0);
var G__49193 = (0);
seq__49076 = G__49189;
chunk__49077 = G__49190;
count__49078 = G__49192;
i__49079 = G__49193;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
