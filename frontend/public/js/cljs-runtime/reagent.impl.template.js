goog.provide('reagent.impl.template');
goog.scope(function(){
  reagent.impl.template.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});

/**
* @constructor
*/
reagent.impl.template.UnsafeHTML = (function (s){
this.s = s;
});

(reagent.impl.template.UnsafeHTML.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
}));

(reagent.impl.template.UnsafeHTML.cljs$lang$type = true);

(reagent.impl.template.UnsafeHTML.cljs$lang$ctorStr = "reagent.impl.template/UnsafeHTML");

(reagent.impl.template.UnsafeHTML.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reagent.impl.template/UnsafeHTML");
}));

/**
 * Positional factory function for reagent.impl.template/UnsafeHTML.
 */
reagent.impl.template.__GT_UnsafeHTML = (function reagent$impl$template$__GT_UnsafeHTML(s){
return (new reagent.impl.template.UnsafeHTML(s));
});

/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

(reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null)], null);
}));

(reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper");

(reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new reagent.impl.template.NativeWrapper(tag,id,className));
});

reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return reagent.impl.template.__GT_NativeWrapper(c,null,null);
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.util.named_QMARK_(x)) || (typeof x === 'string'));
});
reagent.impl.template.reagent_fn_component_QMARK_ = (function reagent$impl$template$reagent_fn_component_QMARK_(x){
return x.reagent_component;
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_(x)) || (((reagent.impl.template.reagent_fn_component_QMARK_(x)) || (((cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper)))))));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return reagent.impl.template.goog$module$goog$object.get(o,k);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5825__auto__ = reagent.impl.template.cache_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5825__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
reagent.impl.template.goog$module$goog$object.set(reagent.impl.template.prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5825__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__8399 = o;
reagent.impl.template.goog$module$goog$object.set(G__8399,reagent.impl.template.cached_prop_name(k),(reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : reagent.impl.template.convert_prop_value.call(null,v)));

return G__8399;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__8457__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__8457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8458__i = 0, G__8458__a = new Array(arguments.length -  0);
while (G__8458__i < G__8458__a.length) {G__8458__a[G__8458__i] = arguments[G__8458__i + 0]; ++G__8458__i;}
  args = new cljs.core.IndexedSeq(G__8458__a,0,null);
} 
return G__8457__delegate.call(this,args);};
G__8457.cljs$lang$maxFixedArity = 0;
G__8457.cljs$lang$applyTo = (function (arglist__8459){
var args = cljs.core.seq(arglist__8459);
return G__8457__delegate(args);
});
G__8457.cljs$core$IFn$_invoke$arity$variadic = G__8457__delegate;
return G__8457;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.custom_prop_name_cache = ({});
reagent.impl.template.cached_custom_prop_name = (function reagent$impl$template$cached_custom_prop_name(k){
if(reagent.impl.util.named_QMARK_(k)){
var temp__5825__auto__ = reagent.impl.template.cache_get(reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5825__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name(k);
reagent.impl.template.goog$module$goog$object.set(reagent.impl.template.custom_prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5825__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.custom_kv_conv = (function reagent$impl$template$custom_kv_conv(o,k,v){
var G__8411 = o;
reagent.impl.template.goog$module$goog$object.set(G__8411,reagent.impl.template.cached_custom_prop_name(k),reagent.impl.template.convert_prop_value(v));

return G__8411;
});
reagent.impl.template.convert_custom_prop_value = (function reagent$impl$template$convert_custom_prop_value(x){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__8465__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__8465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8467__i = 0, G__8467__a = new Array(arguments.length -  0);
while (G__8467__i < G__8467__a.length) {G__8467__a[G__8467__i] = arguments[G__8467__i + 0]; ++G__8467__i;}
  args = new cljs.core.IndexedSeq(G__8467__a,0,null);
} 
return G__8465__delegate.call(this,args);};
G__8465.cljs$lang$maxFixedArity = 0;
G__8465.cljs$lang$applyTo = (function (arglist__8468){
var args = cljs.core.seq(arglist__8468);
return G__8465__delegate(args);
});
G__8465.cljs$core$IFn$_invoke$arity$variadic = G__8465__delegate;
return G__8465;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__8413 = props;
var G__8413__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8413,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__8413);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8413__$1,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class$,(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
}
})()));
} else {
return G__8413__$1;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = reagent.impl.template.set_id_class((function (){var G__8414 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8414,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$));
} else {
return G__8414;
}
})(),id_class);
var js_props = (cljs.core.truth_(id_class.custom)?reagent.impl.template.convert_custom_prop_value(props__$1):reagent.impl.template.convert_prop_value(props__$1));
var temp__5823__auto___8471 = (function (){var and__5160__auto__ = js_props;
if(cljs.core.truth_(and__5160__auto__)){
return js_props.dangerouslySetInnerHTML;
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto___8471)){
var d_8472 = temp__5823__auto___8471;
if((d_8472 instanceof reagent.impl.template.UnsafeHTML)){
(js_props.dangerouslySetInnerHTML = ({"__html": d_8472.s}));
} else {
delete js_props["dangerouslySetInnerHTML"];
}
} else {
}

return js_props;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(this$,argv,component,jsprops,first_child){
var G__8415 = (cljs.core.count(argv) - first_child);
switch (G__8415) {
case (0):
return module$node_modules$react$index.createElement(component,jsprops);

break;
case (1):
return module$node_modules$react$index.createElement(component,jsprops,reagent.impl.protocols.as_element(this$,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null)));

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.protocols.as_element(this$,v));
} else {
}

return a;
}),[component,jsprops],argv));

}
});

/**
* @constructor
*/
reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

(reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null),new cljs.core.Symbol(null,"custom","custom",1980683475,null)], null);
}));

(reagent.impl.template.HiccupTag.cljs$lang$type = true);

(reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "reagent.impl.template/HiccupTag");

(reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reagent.impl.template/HiccupTag");
}));

/**
 * Positional factory function for reagent.impl.template/HiccupTag.
 */
reagent.impl.template.__GT_HiccupTag = (function reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new reagent.impl.template.HiccupTag(tag,id,className,custom));
});

reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__8416 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8416,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8416,(1),null);
var className = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8416,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace(className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Invalid tag: '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag)+"'"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name())))+"\n"+"tag")));
}

return reagent.impl.template.__GT_HiccupTag(tag,id,className__$1,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-")));
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v,compiler){
var c = reagent.impl.component.as_class(tag,compiler);
var jsprops = ({});
(jsprops.argv = v);

var temp__5827__auto___8480 = reagent.impl.util.react_key_from_vec(v);
if((temp__5827__auto___8480 == null)){
} else {
var key_8482 = temp__5827__auto___8480;
(jsprops.key = key_8482);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
/**
 * Tag is a React function component already wrapped
 *   with Reagent function component implementation. This function just
 *   needs to wrap the Hiccup element children into the React element
 *   properties and set up the optional React key if set.
 */
reagent.impl.template.defc_element = (function reagent$impl$template$defc_element(tag,v){
var jsprops = ({});
(jsprops.argv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)));

var temp__5827__auto___8485 = reagent.impl.util.react_key_from_vec(v);
if((temp__5827__auto___8485 == null)){
} else {
var key_8486 = temp__5827__auto___8485;
(jsprops.key = key_8486);
}

return module$node_modules$react$index.createElement(tag,jsprops);
});
reagent.impl.template.function_element = (function reagent$impl$template$function_element(tag,v,first_arg,compiler){
var jsprops = ({});
(jsprops.reagentRender = tag);

(jsprops.argv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_arg));

var temp__5827__auto___8488 = reagent.impl.util.react_key_from_vec(v);
if((temp__5827__auto___8488 == null)){
} else {
var key_8489 = temp__5827__auto___8488;
(jsprops.key = key_8489);
}

return module$node_modules$react$index.createElement(reagent.impl.component.functional_render_fn(compiler,tag),jsprops);
});
/**
 * If given tag is a Class, use it as a class,
 *   else wrap in Reagent function wrapper.
 */
reagent.impl.template.maybe_function_element = (function reagent$impl$template$maybe_function_element(tag,v,compiler){
if(reagent.impl.component.react_class_QMARK_(tag)){
return reagent.impl.template.reag_element(tag,v,compiler);
} else {
return reagent.impl.template.function_element(tag,v,(1),compiler);
}
});
reagent.impl.template.fragment_element = (function reagent$impl$template$fragment_element(argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__5162__auto__ = reagent.impl.template.convert_prop_value(((hasprops)?props:null));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5827__auto___8492 = reagent.impl.util.react_key_from_vec(argv);
if((temp__5827__auto___8492 == null)){
} else {
var key_8494 = temp__5827__auto___8492;
(jsprops.key = key_8494);
}

return reagent.impl.protocols.make_element(compiler,argv,module$node_modules$react$index.Fragment,jsprops,first_child);
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(this$,x,_){
var temp__5825__auto__ = reagent.impl.template.cache_get(reagent.impl.template.tag_name_cache,x);
if((temp__5825__auto__ == null)){
var v = reagent.impl.template.parse_tag(x);
reagent.impl.template.goog$module$goog$object.set(reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5825__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first,compiler){
var component = parsed.tag;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__5162__auto__ = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.input.input_component_QMARK_(component)){
var react_key = reagent.impl.util.get_react_key(props);
var input_class = (function (){var or__5162__auto__ = compiler.reagentInput;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var x = reagent.impl.component.create_class(reagent.impl.input.input_spec,compiler);
(compiler.reagentInput = x);

return x;
}
})();
return reagent.impl.protocols.as_element(compiler,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_class,argv,component,jsprops,first_child,compiler], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(react_key)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),react_key], null):null),cljs.core.meta(argv)], 0))));
} else {
var temp__5827__auto___8509 = reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5827__auto___8509 == null)){
} else {
var key_8511 = temp__5827__auto___8509;
(jsprops.key = key_8511);
}

return reagent.impl.protocols.make_element(compiler,argv,component,jsprops,first_child);
}
});
reagent.impl.template.raw_element = (function reagent$impl$template$raw_element(comp,argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(2),null);
var jsprops = (function (){var or__5162__auto__ = props;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return ({});
}
})();
var temp__5827__auto___8516 = reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5827__auto___8516 == null)){
} else {
var key_8517 = temp__5827__auto___8516;
(jsprops.key = key_8517);
}

return reagent.impl.protocols.make_element(compiler,argv,comp,jsprops,(3));
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8426_SHARP_){
return reagent.impl.protocols.as_element(compiler,p1__8426_SHARP_);
}),s));
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
if(((cljs.core.vector_QMARK_(val)) && ((reagent.impl.util.react_key_from_vec(val) == null)))){
(o.no_key = true);
} else {
}

return reagent.impl.protocols.as_element(compiler,val);
}),s));
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x,compiler){
var ctx = ({});
var vec__8427 = reagent.ratom.check_derefs((function (){
return reagent.impl.template.expand_seq_dev(x,ctx,compiler);
}));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8427,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8427,(1),null);
if(cljs.core.truth_(derefed)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn((""+"Warning: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0)))));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn((""+"Warning: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0)))));
} else {
}
} else {
}

return res;
});
reagent.impl.template.hiccup_element = (function reagent$impl$template$hiccup_element(v,compiler){
while(true){
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__8430 = pos;
switch (G__8430) {
case (-1):
return reagent.impl.template.native_element(reagent.impl.protocols.parse_tag(compiler,n,tag),v,(1),compiler);

break;
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
return null;
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)))+"\n"+"(= \">\" n)")));
}

break;
default:
var G__8532 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
var G__8533 = compiler;
v = G__8532;
compiler = G__8533;
continue;

}
break;
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v,compiler,fn_to_element){
if((compiler == null)){
console.error("vec-to-elem",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
} else {
}

if((cljs.core.count(v) > (0))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)))+"\n"+"(pos? (count v))")));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)))+"\n"+"(valid-tag? tag)")));
}

var G__8438 = tag;
var G__8438__$1 = (((G__8438 instanceof cljs.core.Keyword))?G__8438.fqn:null);
switch (G__8438__$1) {
case ">":
return reagent.impl.template.native_element(reagent.impl.template.__GT_HiccupTag(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),null,null,null),v,(2),compiler);

break;
case "r>":
return reagent.impl.template.raw_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,compiler);

break;
case "f>":
return reagent.impl.template.function_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,(2),compiler);

break;
case "<>":
return reagent.impl.template.fragment_element(v,compiler);

break;
default:
if(reagent.impl.template.reagent_fn_component_QMARK_(tag)){
return reagent.impl.template.defc_element(tag,v);
} else {
if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
return reagent.impl.template.hiccup_element(v,compiler);
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element(tag,v,(1),compiler);
} else {
return (fn_to_element.cljs$core$IFn$_invoke$arity$3 ? fn_to_element.cljs$core$IFn$_invoke$arity$3(tag,v,compiler) : fn_to_element.call(null,tag,v,compiler));

}
}
}

}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(this$,x,fn_to_element){
if(reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x,this$,fn_to_element);
} else {
if(cljs.core.seq_QMARK_(x)){
return reagent.impl.template.expand_seq_check(x,this$);

} else {
if(reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});

/**
* @constructor
 * @implements {reagent.impl.protocols.Compiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagent.impl.template.t_reagent$impl$template8443 = (function (opts,id,fn_to_element,parse_fn,meta8444){
this.opts = opts;
this.id = id;
this.fn_to_element = fn_to_element;
this.parse_fn = parse_fn;
this.meta8444 = meta8444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.template.t_reagent$impl$template8443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8445,meta8444__$1){
var self__ = this;
var _8445__$1 = this;
return (new reagent.impl.template.t_reagent$impl$template8443(self__.opts,self__.id,self__.fn_to_element,self__.parse_fn,meta8444__$1));
}));

(reagent.impl.template.t_reagent$impl$template8443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8445){
var self__ = this;
var _8445__$1 = this;
return self__.meta8444;
}));

(reagent.impl.template.t_reagent$impl$template8443.prototype.reagent$impl$protocols$Compiler$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.impl.template.t_reagent$impl$template8443.prototype.reagent$impl$protocols$Compiler$get_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(reagent.impl.template.t_reagent$impl$template8443.prototype.reagent$impl$protocols$Compiler$parse_tag$arity$3 = (function (this$,tag_name,tag_value){
var self__ = this;
var this$__$1 = this;
return (self__.parse_fn.cljs$core$IFn$_invoke$arity$3 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$3(this$__$1,tag_name,tag_value) : self__.parse_fn.call(null,this$__$1,tag_name,tag_value));
}));

(reagent.impl.template.t_reagent$impl$template8443.prototype.reagent$impl$protocols$Compiler$as_element$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.as_element(this$__$1,x,self__.fn_to_element);
}));

(reagent.impl.template.t_reagent$impl$template8443.prototype.reagent$impl$protocols$Compiler$make_element$arity$5 = (function (this$,argv,component,jsprops,first_child){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.make_element(this$__$1,argv,component,jsprops,first_child);
}));

(reagent.impl.template.t_reagent$impl$template8443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fn-to-element","fn-to-element",-1764467095,null),new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"meta8444","meta8444",-1033121259,null)], null);
}));

(reagent.impl.template.t_reagent$impl$template8443.cljs$lang$type = true);

(reagent.impl.template.t_reagent$impl$template8443.cljs$lang$ctorStr = "reagent.impl.template/t_reagent$impl$template8443");

(reagent.impl.template.t_reagent$impl$template8443.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"reagent.impl.template/t_reagent$impl$template8443");
}));

/**
 * Positional factory function for reagent.impl.template/t_reagent$impl$template8443.
 */
reagent.impl.template.__GT_t_reagent$impl$template8443 = (function reagent$impl$template$__GT_t_reagent$impl$template8443(opts,id,fn_to_element,parse_fn,meta8444){
return (new reagent.impl.template.t_reagent$impl$template8443(opts,id,fn_to_element,parse_fn,meta8444));
});


reagent.impl.template.create_compiler = (function reagent$impl$template$create_compiler(opts){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent-compiler");
var fn_to_element = (cljs.core.truth_(new cljs.core.Keyword(null,"function-components","function-components",1492814963).cljs$core$IFn$_invoke$arity$1(opts))?reagent.impl.template.maybe_function_element:reagent.impl.template.reag_element);
var parse_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"parse-tag","parse-tag",1427313738),reagent.impl.template.cached_parse);
return (new reagent.impl.template.t_reagent$impl$template8443(opts,id,fn_to_element,parse_fn,cljs.core.PersistentArrayMap.EMPTY));
});
reagent.impl.template.class_compiler = reagent.impl.template.create_compiler(cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.template._STAR_current_default_compiler_STAR_ = reagent.impl.template.class_compiler;
reagent.impl.template.set_default_compiler_BANG_ = (function reagent$impl$template$set_default_compiler_BANG_(compiler){
return (reagent.impl.template._STAR_current_default_compiler_STAR_ = compiler);
});

//# sourceMappingURL=reagent.impl.template.js.map
