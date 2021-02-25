goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52986 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52987 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52987);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53175 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53175)){
var new_db_53176 = temp__5735__auto___53175;
var fexpr__52996_53177 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52996_53177.cljs$core$IFn$_invoke$arity$1 ? fexpr__52996_53177.cljs$core$IFn$_invoke$arity$1(new_db_53176) : fexpr__52996_53177.call(null,new_db_53176));
} else {
}

var seq__52998 = cljs.core.seq(effects_without_db);
var chunk__52999 = null;
var count__53000 = (0);
var i__53001 = (0);
while(true){
if((i__53001 < count__53000)){
var vec__53022 = chunk__52999.cljs$core$IIndexed$_nth$arity$2(null,i__53001);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53022,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53022,(1),null);
var temp__5733__auto___53181 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53181)){
var effect_fn_53182 = temp__5733__auto___53181;
(effect_fn_53182.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53182.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53182.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53183 = seq__52998;
var G__53184 = chunk__52999;
var G__53185 = count__53000;
var G__53186 = (i__53001 + (1));
seq__52998 = G__53183;
chunk__52999 = G__53184;
count__53000 = G__53185;
i__53001 = G__53186;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52998);
if(temp__5735__auto__){
var seq__52998__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52998__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52998__$1);
var G__53188 = cljs.core.chunk_rest(seq__52998__$1);
var G__53189 = c__4556__auto__;
var G__53190 = cljs.core.count(c__4556__auto__);
var G__53191 = (0);
seq__52998 = G__53188;
chunk__52999 = G__53189;
count__53000 = G__53190;
i__53001 = G__53191;
continue;
} else {
var vec__53031 = cljs.core.first(seq__52998__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53031,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53031,(1),null);
var temp__5733__auto___53193 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53193)){
var effect_fn_53197 = temp__5733__auto___53193;
(effect_fn_53197.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53197.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53197.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53198 = cljs.core.next(seq__52998__$1);
var G__53199 = null;
var G__53200 = (0);
var G__53201 = (0);
seq__52998 = G__53198;
chunk__52999 = G__53199;
count__53000 = G__53200;
i__53001 = G__53201;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52487__auto___53203 = re_frame.interop.now();
var duration__52488__auto___53204 = (end__52487__auto___53203 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52488__auto___53204,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52487__auto___53203);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52986);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53209 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53209)){
var new_db_53210 = temp__5735__auto___53209;
var fexpr__53037_53211 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53037_53211.cljs$core$IFn$_invoke$arity$1 ? fexpr__53037_53211.cljs$core$IFn$_invoke$arity$1(new_db_53210) : fexpr__53037_53211.call(null,new_db_53210));
} else {
}

var seq__53039 = cljs.core.seq(effects_without_db);
var chunk__53040 = null;
var count__53041 = (0);
var i__53042 = (0);
while(true){
if((i__53042 < count__53041)){
var vec__53062 = chunk__53040.cljs$core$IIndexed$_nth$arity$2(null,i__53042);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53062,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53062,(1),null);
var temp__5733__auto___53216 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53216)){
var effect_fn_53217 = temp__5733__auto___53216;
(effect_fn_53217.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53217.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53217.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53220 = seq__53039;
var G__53221 = chunk__53040;
var G__53222 = count__53041;
var G__53223 = (i__53042 + (1));
seq__53039 = G__53220;
chunk__53040 = G__53221;
count__53041 = G__53222;
i__53042 = G__53223;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53039);
if(temp__5735__auto__){
var seq__53039__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53039__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53039__$1);
var G__53227 = cljs.core.chunk_rest(seq__53039__$1);
var G__53228 = c__4556__auto__;
var G__53229 = cljs.core.count(c__4556__auto__);
var G__53230 = (0);
seq__53039 = G__53227;
chunk__53040 = G__53228;
count__53041 = G__53229;
i__53042 = G__53230;
continue;
} else {
var vec__53070 = cljs.core.first(seq__53039__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53070,(1),null);
var temp__5733__auto___53231 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53231)){
var effect_fn_53232 = temp__5733__auto___53231;
(effect_fn_53232.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53232.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53232.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53236 = cljs.core.next(seq__53039__$1);
var G__53237 = null;
var G__53238 = (0);
var G__53239 = (0);
seq__53039 = G__53236;
chunk__53040 = G__53237;
count__53041 = G__53238;
i__53042 = G__53239;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__53078){
var map__53079 = p__53078;
var map__53079__$1 = (((((!((map__53079 == null))))?(((((map__53079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53079):map__53079);
var effect = map__53079__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53079__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53079__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__53092 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53093 = null;
var count__53094 = (0);
var i__53095 = (0);
while(true){
if((i__53095 < count__53094)){
var effect = chunk__53093.cljs$core$IIndexed$_nth$arity$2(null,i__53095);
re_frame.fx.dispatch_later(effect);


var G__53244 = seq__53092;
var G__53245 = chunk__53093;
var G__53246 = count__53094;
var G__53247 = (i__53095 + (1));
seq__53092 = G__53244;
chunk__53093 = G__53245;
count__53094 = G__53246;
i__53095 = G__53247;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53092);
if(temp__5735__auto__){
var seq__53092__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53092__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53092__$1);
var G__53254 = cljs.core.chunk_rest(seq__53092__$1);
var G__53255 = c__4556__auto__;
var G__53256 = cljs.core.count(c__4556__auto__);
var G__53257 = (0);
seq__53092 = G__53254;
chunk__53093 = G__53255;
count__53094 = G__53256;
i__53095 = G__53257;
continue;
} else {
var effect = cljs.core.first(seq__53092__$1);
re_frame.fx.dispatch_later(effect);


var G__53261 = cljs.core.next(seq__53092__$1);
var G__53262 = null;
var G__53263 = (0);
var G__53264 = (0);
seq__53092 = G__53261;
chunk__53093 = G__53262;
count__53094 = G__53263;
i__53095 = G__53264;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__53107 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__53108 = null;
var count__53109 = (0);
var i__53110 = (0);
while(true){
if((i__53110 < count__53109)){
var vec__53132 = chunk__53108.cljs$core$IIndexed$_nth$arity$2(null,i__53110);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53132,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53132,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53274 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53274)){
var effect_fn_53275 = temp__5733__auto___53274;
(effect_fn_53275.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53275.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53275.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53277 = seq__53107;
var G__53278 = chunk__53108;
var G__53279 = count__53109;
var G__53280 = (i__53110 + (1));
seq__53107 = G__53277;
chunk__53108 = G__53278;
count__53109 = G__53279;
i__53110 = G__53280;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53107);
if(temp__5735__auto__){
var seq__53107__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53107__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53107__$1);
var G__53282 = cljs.core.chunk_rest(seq__53107__$1);
var G__53283 = c__4556__auto__;
var G__53284 = cljs.core.count(c__4556__auto__);
var G__53285 = (0);
seq__53107 = G__53282;
chunk__53108 = G__53283;
count__53109 = G__53284;
i__53110 = G__53285;
continue;
} else {
var vec__53138 = cljs.core.first(seq__53107__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53138,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53138,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53288 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53288)){
var effect_fn_53289 = temp__5733__auto___53288;
(effect_fn_53289.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53289.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53289.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53290 = cljs.core.next(seq__53107__$1);
var G__53291 = null;
var G__53292 = (0);
var G__53293 = (0);
seq__53107 = G__53290;
chunk__53108 = G__53291;
count__53109 = G__53292;
i__53110 = G__53293;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53147 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53148 = null;
var count__53149 = (0);
var i__53150 = (0);
while(true){
if((i__53150 < count__53149)){
var event = chunk__53148.cljs$core$IIndexed$_nth$arity$2(null,i__53150);
re_frame.router.dispatch(event);


var G__53297 = seq__53147;
var G__53298 = chunk__53148;
var G__53299 = count__53149;
var G__53300 = (i__53150 + (1));
seq__53147 = G__53297;
chunk__53148 = G__53298;
count__53149 = G__53299;
i__53150 = G__53300;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53147);
if(temp__5735__auto__){
var seq__53147__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53147__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53147__$1);
var G__53306 = cljs.core.chunk_rest(seq__53147__$1);
var G__53307 = c__4556__auto__;
var G__53308 = cljs.core.count(c__4556__auto__);
var G__53309 = (0);
seq__53147 = G__53306;
chunk__53148 = G__53307;
count__53149 = G__53308;
i__53150 = G__53309;
continue;
} else {
var event = cljs.core.first(seq__53147__$1);
re_frame.router.dispatch(event);


var G__53313 = cljs.core.next(seq__53147__$1);
var G__53314 = null;
var G__53315 = (0);
var G__53316 = (0);
seq__53147 = G__53313;
chunk__53148 = G__53314;
count__53149 = G__53315;
i__53150 = G__53316;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53158 = cljs.core.seq(value);
var chunk__53159 = null;
var count__53160 = (0);
var i__53161 = (0);
while(true){
if((i__53161 < count__53160)){
var event = chunk__53159.cljs$core$IIndexed$_nth$arity$2(null,i__53161);
clear_event(event);


var G__53317 = seq__53158;
var G__53318 = chunk__53159;
var G__53319 = count__53160;
var G__53320 = (i__53161 + (1));
seq__53158 = G__53317;
chunk__53159 = G__53318;
count__53160 = G__53319;
i__53161 = G__53320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53158);
if(temp__5735__auto__){
var seq__53158__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53158__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53158__$1);
var G__53321 = cljs.core.chunk_rest(seq__53158__$1);
var G__53322 = c__4556__auto__;
var G__53323 = cljs.core.count(c__4556__auto__);
var G__53324 = (0);
seq__53158 = G__53321;
chunk__53159 = G__53322;
count__53160 = G__53323;
i__53161 = G__53324;
continue;
} else {
var event = cljs.core.first(seq__53158__$1);
clear_event(event);


var G__53325 = cljs.core.next(seq__53158__$1);
var G__53326 = null;
var G__53327 = (0);
var G__53328 = (0);
seq__53158 = G__53325;
chunk__53159 = G__53326;
count__53160 = G__53327;
i__53161 = G__53328;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
