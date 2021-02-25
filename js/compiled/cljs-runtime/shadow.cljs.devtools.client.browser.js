goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62475 = arguments.length;
var i__4737__auto___62476 = (0);
while(true){
if((i__4737__auto___62476 < len__4736__auto___62475)){
args__4742__auto__.push((arguments[i__4737__auto___62476]));

var G__62477 = (i__4737__auto___62476 + (1));
i__4737__auto___62476 = G__62477;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq62157){
var G__62158 = cljs.core.first(seq62157);
var seq62157__$1 = cljs.core.next(seq62157);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62158,seq62157__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__62177 = cljs.core.seq(sources);
var chunk__62178 = null;
var count__62179 = (0);
var i__62180 = (0);
while(true){
if((i__62180 < count__62179)){
var map__62199 = chunk__62178.cljs$core$IIndexed$_nth$arity$2(null,i__62180);
var map__62199__$1 = (((((!((map__62199 == null))))?(((((map__62199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62199):map__62199);
var src = map__62199__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62199__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62199__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62199__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62199__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62203){var e_62484 = e62203;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62484);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62484.message)].join('')));
}

var G__62485 = seq__62177;
var G__62486 = chunk__62178;
var G__62487 = count__62179;
var G__62488 = (i__62180 + (1));
seq__62177 = G__62485;
chunk__62178 = G__62486;
count__62179 = G__62487;
i__62180 = G__62488;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62177);
if(temp__5735__auto__){
var seq__62177__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62177__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62177__$1);
var G__62489 = cljs.core.chunk_rest(seq__62177__$1);
var G__62490 = c__4556__auto__;
var G__62491 = cljs.core.count(c__4556__auto__);
var G__62492 = (0);
seq__62177 = G__62489;
chunk__62178 = G__62490;
count__62179 = G__62491;
i__62180 = G__62492;
continue;
} else {
var map__62210 = cljs.core.first(seq__62177__$1);
var map__62210__$1 = (((((!((map__62210 == null))))?(((((map__62210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62210):map__62210);
var src = map__62210__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62213){var e_62493 = e62213;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62493);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62493.message)].join('')));
}

var G__62494 = cljs.core.next(seq__62177__$1);
var G__62495 = null;
var G__62496 = (0);
var G__62497 = (0);
seq__62177 = G__62494;
chunk__62178 = G__62495;
count__62179 = G__62496;
i__62180 = G__62497;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__62220 = cljs.core.seq(js_requires);
var chunk__62221 = null;
var count__62222 = (0);
var i__62223 = (0);
while(true){
if((i__62223 < count__62222)){
var js_ns = chunk__62221.cljs$core$IIndexed$_nth$arity$2(null,i__62223);
var require_str_62500 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62500);


var G__62501 = seq__62220;
var G__62502 = chunk__62221;
var G__62503 = count__62222;
var G__62504 = (i__62223 + (1));
seq__62220 = G__62501;
chunk__62221 = G__62502;
count__62222 = G__62503;
i__62223 = G__62504;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62220);
if(temp__5735__auto__){
var seq__62220__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62220__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62220__$1);
var G__62506 = cljs.core.chunk_rest(seq__62220__$1);
var G__62507 = c__4556__auto__;
var G__62508 = cljs.core.count(c__4556__auto__);
var G__62509 = (0);
seq__62220 = G__62506;
chunk__62221 = G__62507;
count__62222 = G__62508;
i__62223 = G__62509;
continue;
} else {
var js_ns = cljs.core.first(seq__62220__$1);
var require_str_62510 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62510);


var G__62514 = cljs.core.next(seq__62220__$1);
var G__62515 = null;
var G__62516 = (0);
var G__62517 = (0);
seq__62220 = G__62514;
chunk__62221 = G__62515;
count__62222 = G__62516;
i__62223 = G__62517;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__62235){
var map__62236 = p__62235;
var map__62236__$1 = (((((!((map__62236 == null))))?(((((map__62236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62236):map__62236);
var msg = map__62236__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62236__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62236__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62238(s__62239){
return (new cljs.core.LazySeq(null,(function (){
var s__62239__$1 = s__62239;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62239__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__62244 = cljs.core.first(xs__6292__auto__);
var map__62244__$1 = (((((!((map__62244 == null))))?(((((map__62244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62244):map__62244);
var src = map__62244__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62244__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62244__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__62239__$1,map__62244,map__62244__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__62236,map__62236__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62238_$_iter__62240(s__62241){
return (new cljs.core.LazySeq(null,((function (s__62239__$1,map__62244,map__62244__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__62236,map__62236__$1,msg,info,reload_info){
return (function (){
var s__62241__$1 = s__62241;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__62241__$1);
if(temp__5735__auto____$1){
var s__62241__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62241__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62241__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62243 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62242 = (0);
while(true){
if((i__62242 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__62242);
cljs.core.chunk_append(b__62243,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__62518 = (i__62242 + (1));
i__62242 = G__62518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62243),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62238_$_iter__62240(cljs.core.chunk_rest(s__62241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62243),null);
}
} else {
var warning = cljs.core.first(s__62241__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62238_$_iter__62240(cljs.core.rest(s__62241__$2)));
}
} else {
return null;
}
break;
}
});})(s__62239__$1,map__62244,map__62244__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__62236,map__62236__$1,msg,info,reload_info))
,null,null));
});})(s__62239__$1,map__62244,map__62244__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__62236,map__62236__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62238(cljs.core.rest(s__62239__$1)));
} else {
var G__62519 = cljs.core.rest(s__62239__$1);
s__62239__$1 = G__62519;
continue;
}
} else {
var G__62521 = cljs.core.rest(s__62239__$1);
s__62239__$1 = G__62521;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__62258_62522 = cljs.core.seq(warnings);
var chunk__62259_62523 = null;
var count__62260_62524 = (0);
var i__62261_62525 = (0);
while(true){
if((i__62261_62525 < count__62260_62524)){
var map__62271_62526 = chunk__62259_62523.cljs$core$IIndexed$_nth$arity$2(null,i__62261_62525);
var map__62271_62527__$1 = (((((!((map__62271_62526 == null))))?(((((map__62271_62526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62271_62526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62271_62526):map__62271_62526);
var w_62528 = map__62271_62527__$1;
var msg_62529__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62271_62527__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62271_62527__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62271_62527__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62271_62527__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62532)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62530),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62531),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62529__$1)].join(''));


var G__62533 = seq__62258_62522;
var G__62534 = chunk__62259_62523;
var G__62535 = count__62260_62524;
var G__62536 = (i__62261_62525 + (1));
seq__62258_62522 = G__62533;
chunk__62259_62523 = G__62534;
count__62260_62524 = G__62535;
i__62261_62525 = G__62536;
continue;
} else {
var temp__5735__auto___62537 = cljs.core.seq(seq__62258_62522);
if(temp__5735__auto___62537){
var seq__62258_62538__$1 = temp__5735__auto___62537;
if(cljs.core.chunked_seq_QMARK_(seq__62258_62538__$1)){
var c__4556__auto___62539 = cljs.core.chunk_first(seq__62258_62538__$1);
var G__62540 = cljs.core.chunk_rest(seq__62258_62538__$1);
var G__62541 = c__4556__auto___62539;
var G__62542 = cljs.core.count(c__4556__auto___62539);
var G__62543 = (0);
seq__62258_62522 = G__62540;
chunk__62259_62523 = G__62541;
count__62260_62524 = G__62542;
i__62261_62525 = G__62543;
continue;
} else {
var map__62278_62544 = cljs.core.first(seq__62258_62538__$1);
var map__62278_62545__$1 = (((((!((map__62278_62544 == null))))?(((((map__62278_62544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62278_62544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62278_62544):map__62278_62544);
var w_62546 = map__62278_62545__$1;
var msg_62547__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278_62545__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278_62545__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278_62545__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278_62545__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62550)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62548),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62549),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62547__$1)].join(''));


var G__62551 = cljs.core.next(seq__62258_62538__$1);
var G__62552 = null;
var G__62553 = (0);
var G__62554 = (0);
seq__62258_62522 = G__62551;
chunk__62259_62523 = G__62552;
count__62260_62524 = G__62553;
i__62261_62525 = G__62554;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__62234_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__62234_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__62291){
var map__62292 = p__62291;
var map__62292__$1 = (((((!((map__62292 == null))))?(((((map__62292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62292):map__62292);
var msg = map__62292__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62292__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__62294 = cljs.core.seq(updates);
var chunk__62296 = null;
var count__62297 = (0);
var i__62298 = (0);
while(true){
if((i__62298 < count__62297)){
var path = chunk__62296.cljs$core$IIndexed$_nth$arity$2(null,i__62298);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62358_62555 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62362_62556 = null;
var count__62363_62557 = (0);
var i__62364_62558 = (0);
while(true){
if((i__62364_62558 < count__62363_62557)){
var node_62559 = chunk__62362_62556.cljs$core$IIndexed$_nth$arity$2(null,i__62364_62558);
if(cljs.core.not(node_62559.shadow$old)){
var path_match_62560 = shadow.cljs.devtools.client.browser.match_paths(node_62559.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62560)){
var new_link_62561 = (function (){var G__62376 = node_62559.cloneNode(true);
G__62376.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62560),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62376;
})();
(node_62559.shadow$old = true);

(new_link_62561.onload = ((function (seq__62358_62555,chunk__62362_62556,count__62363_62557,i__62364_62558,seq__62294,chunk__62296,count__62297,i__62298,new_link_62561,path_match_62560,node_62559,path,map__62292,map__62292__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62559);
});})(seq__62358_62555,chunk__62362_62556,count__62363_62557,i__62364_62558,seq__62294,chunk__62296,count__62297,i__62298,new_link_62561,path_match_62560,node_62559,path,map__62292,map__62292__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62560], 0));

goog.dom.insertSiblingAfter(new_link_62561,node_62559);


var G__62562 = seq__62358_62555;
var G__62563 = chunk__62362_62556;
var G__62564 = count__62363_62557;
var G__62565 = (i__62364_62558 + (1));
seq__62358_62555 = G__62562;
chunk__62362_62556 = G__62563;
count__62363_62557 = G__62564;
i__62364_62558 = G__62565;
continue;
} else {
var G__62566 = seq__62358_62555;
var G__62567 = chunk__62362_62556;
var G__62568 = count__62363_62557;
var G__62569 = (i__62364_62558 + (1));
seq__62358_62555 = G__62566;
chunk__62362_62556 = G__62567;
count__62363_62557 = G__62568;
i__62364_62558 = G__62569;
continue;
}
} else {
var G__62570 = seq__62358_62555;
var G__62571 = chunk__62362_62556;
var G__62572 = count__62363_62557;
var G__62573 = (i__62364_62558 + (1));
seq__62358_62555 = G__62570;
chunk__62362_62556 = G__62571;
count__62363_62557 = G__62572;
i__62364_62558 = G__62573;
continue;
}
} else {
var temp__5735__auto___62574 = cljs.core.seq(seq__62358_62555);
if(temp__5735__auto___62574){
var seq__62358_62575__$1 = temp__5735__auto___62574;
if(cljs.core.chunked_seq_QMARK_(seq__62358_62575__$1)){
var c__4556__auto___62576 = cljs.core.chunk_first(seq__62358_62575__$1);
var G__62577 = cljs.core.chunk_rest(seq__62358_62575__$1);
var G__62578 = c__4556__auto___62576;
var G__62579 = cljs.core.count(c__4556__auto___62576);
var G__62580 = (0);
seq__62358_62555 = G__62577;
chunk__62362_62556 = G__62578;
count__62363_62557 = G__62579;
i__62364_62558 = G__62580;
continue;
} else {
var node_62581 = cljs.core.first(seq__62358_62575__$1);
if(cljs.core.not(node_62581.shadow$old)){
var path_match_62582 = shadow.cljs.devtools.client.browser.match_paths(node_62581.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62582)){
var new_link_62583 = (function (){var G__62379 = node_62581.cloneNode(true);
G__62379.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62582),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62379;
})();
(node_62581.shadow$old = true);

(new_link_62583.onload = ((function (seq__62358_62555,chunk__62362_62556,count__62363_62557,i__62364_62558,seq__62294,chunk__62296,count__62297,i__62298,new_link_62583,path_match_62582,node_62581,seq__62358_62575__$1,temp__5735__auto___62574,path,map__62292,map__62292__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62581);
});})(seq__62358_62555,chunk__62362_62556,count__62363_62557,i__62364_62558,seq__62294,chunk__62296,count__62297,i__62298,new_link_62583,path_match_62582,node_62581,seq__62358_62575__$1,temp__5735__auto___62574,path,map__62292,map__62292__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62582], 0));

goog.dom.insertSiblingAfter(new_link_62583,node_62581);


var G__62584 = cljs.core.next(seq__62358_62575__$1);
var G__62585 = null;
var G__62586 = (0);
var G__62587 = (0);
seq__62358_62555 = G__62584;
chunk__62362_62556 = G__62585;
count__62363_62557 = G__62586;
i__62364_62558 = G__62587;
continue;
} else {
var G__62588 = cljs.core.next(seq__62358_62575__$1);
var G__62589 = null;
var G__62590 = (0);
var G__62591 = (0);
seq__62358_62555 = G__62588;
chunk__62362_62556 = G__62589;
count__62363_62557 = G__62590;
i__62364_62558 = G__62591;
continue;
}
} else {
var G__62592 = cljs.core.next(seq__62358_62575__$1);
var G__62593 = null;
var G__62594 = (0);
var G__62595 = (0);
seq__62358_62555 = G__62592;
chunk__62362_62556 = G__62593;
count__62363_62557 = G__62594;
i__62364_62558 = G__62595;
continue;
}
}
} else {
}
}
break;
}


var G__62596 = seq__62294;
var G__62597 = chunk__62296;
var G__62598 = count__62297;
var G__62599 = (i__62298 + (1));
seq__62294 = G__62596;
chunk__62296 = G__62597;
count__62297 = G__62598;
i__62298 = G__62599;
continue;
} else {
var G__62600 = seq__62294;
var G__62601 = chunk__62296;
var G__62602 = count__62297;
var G__62603 = (i__62298 + (1));
seq__62294 = G__62600;
chunk__62296 = G__62601;
count__62297 = G__62602;
i__62298 = G__62603;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62294);
if(temp__5735__auto__){
var seq__62294__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62294__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62294__$1);
var G__62604 = cljs.core.chunk_rest(seq__62294__$1);
var G__62605 = c__4556__auto__;
var G__62606 = cljs.core.count(c__4556__auto__);
var G__62607 = (0);
seq__62294 = G__62604;
chunk__62296 = G__62605;
count__62297 = G__62606;
i__62298 = G__62607;
continue;
} else {
var path = cljs.core.first(seq__62294__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62381_62608 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62385_62609 = null;
var count__62386_62610 = (0);
var i__62387_62611 = (0);
while(true){
if((i__62387_62611 < count__62386_62610)){
var node_62613 = chunk__62385_62609.cljs$core$IIndexed$_nth$arity$2(null,i__62387_62611);
if(cljs.core.not(node_62613.shadow$old)){
var path_match_62614 = shadow.cljs.devtools.client.browser.match_paths(node_62613.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62614)){
var new_link_62615 = (function (){var G__62403 = node_62613.cloneNode(true);
G__62403.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62614),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62403;
})();
(node_62613.shadow$old = true);

(new_link_62615.onload = ((function (seq__62381_62608,chunk__62385_62609,count__62386_62610,i__62387_62611,seq__62294,chunk__62296,count__62297,i__62298,new_link_62615,path_match_62614,node_62613,path,seq__62294__$1,temp__5735__auto__,map__62292,map__62292__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62613);
});})(seq__62381_62608,chunk__62385_62609,count__62386_62610,i__62387_62611,seq__62294,chunk__62296,count__62297,i__62298,new_link_62615,path_match_62614,node_62613,path,seq__62294__$1,temp__5735__auto__,map__62292,map__62292__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62614], 0));

goog.dom.insertSiblingAfter(new_link_62615,node_62613);


var G__62620 = seq__62381_62608;
var G__62621 = chunk__62385_62609;
var G__62622 = count__62386_62610;
var G__62623 = (i__62387_62611 + (1));
seq__62381_62608 = G__62620;
chunk__62385_62609 = G__62621;
count__62386_62610 = G__62622;
i__62387_62611 = G__62623;
continue;
} else {
var G__62624 = seq__62381_62608;
var G__62625 = chunk__62385_62609;
var G__62626 = count__62386_62610;
var G__62627 = (i__62387_62611 + (1));
seq__62381_62608 = G__62624;
chunk__62385_62609 = G__62625;
count__62386_62610 = G__62626;
i__62387_62611 = G__62627;
continue;
}
} else {
var G__62628 = seq__62381_62608;
var G__62629 = chunk__62385_62609;
var G__62630 = count__62386_62610;
var G__62631 = (i__62387_62611 + (1));
seq__62381_62608 = G__62628;
chunk__62385_62609 = G__62629;
count__62386_62610 = G__62630;
i__62387_62611 = G__62631;
continue;
}
} else {
var temp__5735__auto___62632__$1 = cljs.core.seq(seq__62381_62608);
if(temp__5735__auto___62632__$1){
var seq__62381_62633__$1 = temp__5735__auto___62632__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62381_62633__$1)){
var c__4556__auto___62634 = cljs.core.chunk_first(seq__62381_62633__$1);
var G__62635 = cljs.core.chunk_rest(seq__62381_62633__$1);
var G__62636 = c__4556__auto___62634;
var G__62637 = cljs.core.count(c__4556__auto___62634);
var G__62638 = (0);
seq__62381_62608 = G__62635;
chunk__62385_62609 = G__62636;
count__62386_62610 = G__62637;
i__62387_62611 = G__62638;
continue;
} else {
var node_62639 = cljs.core.first(seq__62381_62633__$1);
if(cljs.core.not(node_62639.shadow$old)){
var path_match_62640 = shadow.cljs.devtools.client.browser.match_paths(node_62639.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62640)){
var new_link_62641 = (function (){var G__62408 = node_62639.cloneNode(true);
G__62408.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62640),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62408;
})();
(node_62639.shadow$old = true);

(new_link_62641.onload = ((function (seq__62381_62608,chunk__62385_62609,count__62386_62610,i__62387_62611,seq__62294,chunk__62296,count__62297,i__62298,new_link_62641,path_match_62640,node_62639,seq__62381_62633__$1,temp__5735__auto___62632__$1,path,seq__62294__$1,temp__5735__auto__,map__62292,map__62292__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62639);
});})(seq__62381_62608,chunk__62385_62609,count__62386_62610,i__62387_62611,seq__62294,chunk__62296,count__62297,i__62298,new_link_62641,path_match_62640,node_62639,seq__62381_62633__$1,temp__5735__auto___62632__$1,path,seq__62294__$1,temp__5735__auto__,map__62292,map__62292__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62640], 0));

goog.dom.insertSiblingAfter(new_link_62641,node_62639);


var G__62644 = cljs.core.next(seq__62381_62633__$1);
var G__62645 = null;
var G__62646 = (0);
var G__62647 = (0);
seq__62381_62608 = G__62644;
chunk__62385_62609 = G__62645;
count__62386_62610 = G__62646;
i__62387_62611 = G__62647;
continue;
} else {
var G__62648 = cljs.core.next(seq__62381_62633__$1);
var G__62649 = null;
var G__62650 = (0);
var G__62651 = (0);
seq__62381_62608 = G__62648;
chunk__62385_62609 = G__62649;
count__62386_62610 = G__62650;
i__62387_62611 = G__62651;
continue;
}
} else {
var G__62652 = cljs.core.next(seq__62381_62633__$1);
var G__62653 = null;
var G__62654 = (0);
var G__62655 = (0);
seq__62381_62608 = G__62652;
chunk__62385_62609 = G__62653;
count__62386_62610 = G__62654;
i__62387_62611 = G__62655;
continue;
}
}
} else {
}
}
break;
}


var G__62656 = cljs.core.next(seq__62294__$1);
var G__62657 = null;
var G__62658 = (0);
var G__62659 = (0);
seq__62294 = G__62656;
chunk__62296 = G__62657;
count__62297 = G__62658;
i__62298 = G__62659;
continue;
} else {
var G__62660 = cljs.core.next(seq__62294__$1);
var G__62661 = null;
var G__62662 = (0);
var G__62663 = (0);
seq__62294 = G__62660;
chunk__62296 = G__62661;
count__62297 = G__62662;
i__62298 = G__62663;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__62417){
var map__62418 = p__62417;
var map__62418__$1 = (((((!((map__62418 == null))))?(((((map__62418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62418):map__62418);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62418__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__62427){
var map__62428 = p__62427;
var map__62428__$1 = (((((!((map__62428 == null))))?(((((map__62428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62428):map__62428);
var _ = map__62428__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62428__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__62430,done,error){
var map__62431 = p__62430;
var map__62431__$1 = (((((!((map__62431 == null))))?(((((map__62431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62431):map__62431);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62431__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__62438,done,error){
var map__62439 = p__62438;
var map__62439__$1 = (((((!((map__62439 == null))))?(((((map__62439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62439):map__62439);
var msg = map__62439__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62439__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62439__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62439__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__62442){
var map__62443 = p__62442;
var map__62443__$1 = (((((!((map__62443 == null))))?(((((map__62443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62443):map__62443);
var src = map__62443__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62443__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__62446 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__62446) : done.call(null,G__62446));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__62447){
var map__62448 = p__62447;
var map__62448__$1 = (((((!((map__62448 == null))))?(((((map__62448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62448):map__62448);
var msg__$1 = map__62448__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62448__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e62450){var ex = e62450;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__62458){
var map__62459 = p__62458;
var map__62459__$1 = (((((!((map__62459 == null))))?(((((map__62459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62459):map__62459);
var env = map__62459__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62459__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__62463){
var map__62464 = p__62463;
var map__62464__$1 = (((((!((map__62464 == null))))?(((((map__62464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62464):map__62464);
var msg = map__62464__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62464__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__62469){
var map__62470 = p__62469;
var map__62470__$1 = (((((!((map__62470 == null))))?(((((map__62470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62470):map__62470);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62470__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62470__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__62472){
var map__62473 = p__62472;
var map__62473__$1 = (((((!((map__62473 == null))))?(((((map__62473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62473):map__62473);
var svc = map__62473__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62473__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
