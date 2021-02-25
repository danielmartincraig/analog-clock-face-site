goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__47796 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__47797 = true;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__47797);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__47798 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__47799 = false;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__47799);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__47798);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__47796);
}});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$render(var_args){
var G__47802 = arguments.length;
switch (G__47802) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_();

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_();

var seq__47806_47825 = cljs.core.seq(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots)));
var chunk__47807_47826 = null;
var count__47808_47827 = (0);
var i__47809_47828 = (0);
while(true){
if((i__47809_47828 < count__47808_47827)){
var v_47829 = chunk__47807_47826.cljs$core$IIndexed$_nth$arity$2(null,i__47809_47828);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.re_render_component,v_47829);


var G__47830 = seq__47806_47825;
var G__47831 = chunk__47807_47826;
var G__47832 = count__47808_47827;
var G__47833 = (i__47809_47828 + (1));
seq__47806_47825 = G__47830;
chunk__47807_47826 = G__47831;
count__47808_47827 = G__47832;
i__47809_47828 = G__47833;
continue;
} else {
var temp__5735__auto___47834 = cljs.core.seq(seq__47806_47825);
if(temp__5735__auto___47834){
var seq__47806_47835__$1 = temp__5735__auto___47834;
if(cljs.core.chunked_seq_QMARK_(seq__47806_47835__$1)){
var c__4556__auto___47836 = cljs.core.chunk_first(seq__47806_47835__$1);
var G__47837 = cljs.core.chunk_rest(seq__47806_47835__$1);
var G__47838 = c__4556__auto___47836;
var G__47839 = cljs.core.count(c__4556__auto___47836);
var G__47840 = (0);
seq__47806_47825 = G__47837;
chunk__47807_47826 = G__47838;
count__47808_47827 = G__47839;
i__47809_47828 = G__47840;
continue;
} else {
var v_47841 = cljs.core.first(seq__47806_47835__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.re_render_component,v_47841);


var G__47842 = cljs.core.next(seq__47806_47835__$1);
var G__47843 = null;
var G__47844 = (0);
var G__47845 = (0);
seq__47806_47825 = G__47842;
chunk__47807_47826 = G__47843;
count__47808_47827 = G__47844;
i__47809_47828 = G__47845;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.js.map
