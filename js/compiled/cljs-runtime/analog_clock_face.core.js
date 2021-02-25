goog.provide('analog_clock_face.core');
analog_clock_face.core.dev_setup = (function analog_clock_face$core$dev_setup(){
if(analog_clock_face.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
analog_clock_face.core.mount_root = (function analog_clock_face$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [analog_clock_face.views.main_panel], null),root_el);
});
analog_clock_face.core.init = (function analog_clock_face$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("analog-clock-face.events","initialize-db","analog-clock-face.events/initialize-db",-2147160498)], null));

analog_clock_face.core.dev_setup();

return analog_clock_face.core.mount_root();
});

//# sourceMappingURL=analog_clock_face.core.js.map
