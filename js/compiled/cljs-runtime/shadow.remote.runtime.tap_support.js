goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__58927,p__58928){
var map__58929 = p__58927;
var map__58929__$1 = (((((!((map__58929 == null))))?(((((map__58929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58929):map__58929);
var svc = map__58929__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__58930 = p__58928;
var map__58930__$1 = (((((!((map__58930 == null))))?(((((map__58930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58930):map__58930);
var msg = map__58930__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58930__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58930__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58930__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58930__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__58938,p__58939){
var map__58941 = p__58938;
var map__58941__$1 = (((((!((map__58941 == null))))?(((((map__58941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58941):map__58941);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58941__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__58942 = p__58939;
var map__58942__$1 = (((((!((map__58942 == null))))?(((((map__58942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58942):map__58942);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58942__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__58949,p__58950){
var map__58951 = p__58949;
var map__58951__$1 = (((((!((map__58951 == null))))?(((((map__58951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58951):map__58951);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__58952 = p__58950;
var map__58952__$1 = (((((!((map__58952 == null))))?(((((map__58952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58952):map__58952);
var msg = map__58952__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58952__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__58968,tid){
var map__58970 = p__58968;
var map__58970__$1 = (((((!((map__58970 == null))))?(((((map__58970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58970):map__58970);
var svc = map__58970__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__58986 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__58987 = null;
var count__58988 = (0);
var i__58989 = (0);
while(true){
if((i__58989 < count__58988)){
var vec__59006 = chunk__58987.cljs$core$IIndexed$_nth$arity$2(null,i__58989);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59006,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59006,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59068 = seq__58986;
var G__59069 = chunk__58987;
var G__59070 = count__58988;
var G__59071 = (i__58989 + (1));
seq__58986 = G__59068;
chunk__58987 = G__59069;
count__58988 = G__59070;
i__58989 = G__59071;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58986);
if(temp__5735__auto__){
var seq__58986__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58986__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58986__$1);
var G__59073 = cljs.core.chunk_rest(seq__58986__$1);
var G__59074 = c__4556__auto__;
var G__59075 = cljs.core.count(c__4556__auto__);
var G__59076 = (0);
seq__58986 = G__59073;
chunk__58987 = G__59074;
count__58988 = G__59075;
i__58989 = G__59076;
continue;
} else {
var vec__59012 = cljs.core.first(seq__58986__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59012,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59012,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59082 = cljs.core.next(seq__58986__$1);
var G__59083 = null;
var G__59084 = (0);
var G__59085 = (0);
seq__58986 = G__59082;
chunk__58987 = G__59083;
count__58988 = G__59084;
i__58989 = G__59085;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__58976_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__58976_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__58978_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__58978_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__58979_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__58979_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__58980_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__58980_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__59022){
var map__59023 = p__59022;
var map__59023__$1 = (((((!((map__59023 == null))))?(((((map__59023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59023):map__59023);
var svc = map__59023__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
