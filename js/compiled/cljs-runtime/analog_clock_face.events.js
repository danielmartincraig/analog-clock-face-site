goog.provide('analog_clock_face.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("analog-clock-face.events","initialize-db","analog-clock-face.events/initialize-db",-2147160498),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__48029__auto__ = analog_clock_face.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__48029__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__48029__auto__;
}catch (e50739){var e = e50739;
throw e;
}}):(function (_,___$1){
return analog_clock_face.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),(function (db,p__50740){
var vec__50741 = p__50740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50741,(0),null);
var new_color_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50741,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),new_color_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__50744){
var vec__50745 = p__50744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50745,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50745,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));

//# sourceMappingURL=analog_clock_face.events.js.map
