goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59487){
var map__59489 = p__59487;
var map__59489__$1 = (((((!((map__59489 == null))))?(((((map__59489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59489):map__59489);
var m = map__59489__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59489__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59489__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59501_59849 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59502_59850 = null;
var count__59503_59851 = (0);
var i__59504_59852 = (0);
while(true){
if((i__59504_59852 < count__59503_59851)){
var f_59853 = chunk__59502_59850.cljs$core$IIndexed$_nth$arity$2(null,i__59504_59852);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59853], 0));


var G__59855 = seq__59501_59849;
var G__59856 = chunk__59502_59850;
var G__59857 = count__59503_59851;
var G__59858 = (i__59504_59852 + (1));
seq__59501_59849 = G__59855;
chunk__59502_59850 = G__59856;
count__59503_59851 = G__59857;
i__59504_59852 = G__59858;
continue;
} else {
var temp__5735__auto___59859 = cljs.core.seq(seq__59501_59849);
if(temp__5735__auto___59859){
var seq__59501_59860__$1 = temp__5735__auto___59859;
if(cljs.core.chunked_seq_QMARK_(seq__59501_59860__$1)){
var c__4556__auto___59861 = cljs.core.chunk_first(seq__59501_59860__$1);
var G__59862 = cljs.core.chunk_rest(seq__59501_59860__$1);
var G__59863 = c__4556__auto___59861;
var G__59864 = cljs.core.count(c__4556__auto___59861);
var G__59865 = (0);
seq__59501_59849 = G__59862;
chunk__59502_59850 = G__59863;
count__59503_59851 = G__59864;
i__59504_59852 = G__59865;
continue;
} else {
var f_59866 = cljs.core.first(seq__59501_59860__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59866], 0));


var G__59867 = cljs.core.next(seq__59501_59860__$1);
var G__59868 = null;
var G__59869 = (0);
var G__59870 = (0);
seq__59501_59849 = G__59867;
chunk__59502_59850 = G__59868;
count__59503_59851 = G__59869;
i__59504_59852 = G__59870;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59872 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_59872], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_59872)))?cljs.core.second(arglists_59872):arglists_59872)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59526_59874 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59527_59875 = null;
var count__59528_59876 = (0);
var i__59529_59877 = (0);
while(true){
if((i__59529_59877 < count__59528_59876)){
var vec__59566_59879 = chunk__59527_59875.cljs$core$IIndexed$_nth$arity$2(null,i__59529_59877);
var name_59880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59566_59879,(0),null);
var map__59569_59881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59566_59879,(1),null);
var map__59569_59882__$1 = (((((!((map__59569_59881 == null))))?(((((map__59569_59881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59569_59881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59569_59881):map__59569_59881);
var doc_59883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59569_59882__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59569_59882__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59880], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59884], 0));

if(cljs.core.truth_(doc_59883)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59883], 0));
} else {
}


var G__59889 = seq__59526_59874;
var G__59890 = chunk__59527_59875;
var G__59891 = count__59528_59876;
var G__59892 = (i__59529_59877 + (1));
seq__59526_59874 = G__59889;
chunk__59527_59875 = G__59890;
count__59528_59876 = G__59891;
i__59529_59877 = G__59892;
continue;
} else {
var temp__5735__auto___59894 = cljs.core.seq(seq__59526_59874);
if(temp__5735__auto___59894){
var seq__59526_59895__$1 = temp__5735__auto___59894;
if(cljs.core.chunked_seq_QMARK_(seq__59526_59895__$1)){
var c__4556__auto___59896 = cljs.core.chunk_first(seq__59526_59895__$1);
var G__59897 = cljs.core.chunk_rest(seq__59526_59895__$1);
var G__59898 = c__4556__auto___59896;
var G__59899 = cljs.core.count(c__4556__auto___59896);
var G__59900 = (0);
seq__59526_59874 = G__59897;
chunk__59527_59875 = G__59898;
count__59528_59876 = G__59899;
i__59529_59877 = G__59900;
continue;
} else {
var vec__59587_59901 = cljs.core.first(seq__59526_59895__$1);
var name_59902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59587_59901,(0),null);
var map__59590_59903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59587_59901,(1),null);
var map__59590_59904__$1 = (((((!((map__59590_59903 == null))))?(((((map__59590_59903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59590_59903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59590_59903):map__59590_59903);
var doc_59905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59590_59904__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59590_59904__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59902], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59906], 0));

if(cljs.core.truth_(doc_59905)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59905], 0));
} else {
}


var G__59907 = cljs.core.next(seq__59526_59895__$1);
var G__59908 = null;
var G__59909 = (0);
var G__59910 = (0);
seq__59526_59874 = G__59907;
chunk__59527_59875 = G__59908;
count__59528_59876 = G__59909;
i__59529_59877 = G__59910;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__59610 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59611 = null;
var count__59612 = (0);
var i__59613 = (0);
while(true){
if((i__59613 < count__59612)){
var role = chunk__59611.cljs$core$IIndexed$_nth$arity$2(null,i__59613);
var temp__5735__auto___59913__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59913__$1)){
var spec_59914 = temp__5735__auto___59913__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59914)], 0));
} else {
}


var G__59919 = seq__59610;
var G__59920 = chunk__59611;
var G__59921 = count__59612;
var G__59922 = (i__59613 + (1));
seq__59610 = G__59919;
chunk__59611 = G__59920;
count__59612 = G__59921;
i__59613 = G__59922;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__59610);
if(temp__5735__auto____$1){
var seq__59610__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59610__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59610__$1);
var G__59923 = cljs.core.chunk_rest(seq__59610__$1);
var G__59924 = c__4556__auto__;
var G__59925 = cljs.core.count(c__4556__auto__);
var G__59926 = (0);
seq__59610 = G__59923;
chunk__59611 = G__59924;
count__59612 = G__59925;
i__59613 = G__59926;
continue;
} else {
var role = cljs.core.first(seq__59610__$1);
var temp__5735__auto___59927__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59927__$2)){
var spec_59928 = temp__5735__auto___59927__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59928)], 0));
} else {
}


var G__59929 = cljs.core.next(seq__59610__$1);
var G__59930 = null;
var G__59931 = (0);
var G__59932 = (0);
seq__59610 = G__59929;
chunk__59611 = G__59930;
count__59612 = G__59931;
i__59613 = G__59932;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__59937 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__59938 = cljs.core.ex_cause(t);
via = G__59937;
t = G__59938;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__59681 = datafied_throwable;
var map__59681__$1 = (((((!((map__59681 == null))))?(((((map__59681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59681):map__59681);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59681__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59681__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59681__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59682 = cljs.core.last(via);
var map__59682__$1 = (((((!((map__59682 == null))))?(((((map__59682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59682):map__59682);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59682__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59682__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59682__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59683 = data;
var map__59683__$1 = (((((!((map__59683 == null))))?(((((map__59683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59683):map__59683);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59683__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59683__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59683__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59684 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59684__$1 = (((((!((map__59684 == null))))?(((((map__59684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59684):map__59684);
var top_data = map__59684__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59684__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59705 = phase;
var G__59705__$1 = (((G__59705 instanceof cljs.core.Keyword))?G__59705.fqn:null);
switch (G__59705__$1) {
case "read-source":
var map__59709 = data;
var map__59709__$1 = (((((!((map__59709 == null))))?(((((map__59709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59709):map__59709);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59714 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59714__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59714,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59714);
var G__59714__$2 = (cljs.core.truth_((function (){var fexpr__59716 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59716.cljs$core$IFn$_invoke$arity$1 ? fexpr__59716.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59716.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59714__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59714__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59714__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59714__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59717 = top_data;
var G__59717__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59717,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59717);
var G__59717__$2 = (cljs.core.truth_((function (){var fexpr__59721 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59721.cljs$core$IFn$_invoke$arity$1 ? fexpr__59721.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59721.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59717__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59717__$1);
var G__59717__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59717__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59717__$2);
var G__59717__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59717__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59717__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59717__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59717__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59729 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59729,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59729,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59729,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59729,(3),null);
var G__59738 = top_data;
var G__59738__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59738,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59738);
var G__59738__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59738__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59738__$1);
var G__59738__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59738__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59738__$2);
var G__59738__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59738__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59738__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59738__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59738__$4;
}

break;
case "execution":
var vec__59742 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59742,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59742,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59742,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59742,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59672_SHARP_){
var or__4126__auto__ = (p1__59672_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__59748 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59748.cljs$core$IFn$_invoke$arity$1 ? fexpr__59748.cljs$core$IFn$_invoke$arity$1(p1__59672_SHARP_) : fexpr__59748.call(null,p1__59672_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__59752 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__59752__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59752,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__59752);
var G__59752__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59752__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59752__$1);
var G__59752__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59752__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__59752__$2);
var G__59752__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59752__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__59752__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59752__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59752__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59705__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__59769){
var map__59770 = p__59769;
var map__59770__$1 = (((((!((map__59770 == null))))?(((((map__59770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59770):map__59770);
var triage_data = map__59770__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__59780 = phase;
var G__59780__$1 = (((G__59780 instanceof cljs.core.Keyword))?G__59780.fqn:null);
switch (G__59780__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__59782 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__59783 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59784 = loc;
var G__59785 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59786_60002 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59787_60003 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59788_60004 = true;
var _STAR_print_fn_STAR__temp_val__59789_60005 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59788_60004);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59789_60005);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59763_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59763_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59787_60003);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59786_60002);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59782,G__59783,G__59784,G__59785) : format.call(null,G__59782,G__59783,G__59784,G__59785));

break;
case "macroexpansion":
var G__59791 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__59792 = cause_type;
var G__59793 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59794 = loc;
var G__59795 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59791,G__59792,G__59793,G__59794,G__59795) : format.call(null,G__59791,G__59792,G__59793,G__59794,G__59795));

break;
case "compile-syntax-check":
var G__59797 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__59798 = cause_type;
var G__59799 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59800 = loc;
var G__59801 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59797,G__59798,G__59799,G__59800,G__59801) : format.call(null,G__59797,G__59798,G__59799,G__59800,G__59801));

break;
case "compilation":
var G__59802 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__59803 = cause_type;
var G__59804 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59805 = loc;
var G__59806 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59802,G__59803,G__59804,G__59805,G__59806) : format.call(null,G__59802,G__59803,G__59804,G__59805,G__59806));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__59815 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__59816 = symbol;
var G__59817 = loc;
var G__59818 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59819_60022 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59820_60023 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59821_60024 = true;
var _STAR_print_fn_STAR__temp_val__59822_60025 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59821_60024);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59822_60025);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59768_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59768_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59820_60023);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59819_60022);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59815,G__59816,G__59817,G__59818) : format.call(null,G__59815,G__59816,G__59817,G__59818));
} else {
var G__59829 = "Execution error%s at %s(%s).\n%s\n";
var G__59830 = cause_type;
var G__59831 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59832 = loc;
var G__59833 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59829,G__59830,G__59831,G__59832,G__59833) : format.call(null,G__59829,G__59830,G__59831,G__59832,G__59833));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59780__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
