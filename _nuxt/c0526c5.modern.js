(window.webpackJsonp = window.webpackJsonp || []).push([
    [59], {
        410: function(t, e, r) {
            var content = r(442);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(64).default)("7de2f30a", content, !0, {
                sourceMap: !1
            })
        },
        441: function(t, e, r) {
            "use strict";
            r(410)
        },
        442: function(t, e, r) {
            var n = r(63)((function(i) {
                return i[1]
            }));
            n.push([t.i, "/*purgecss start ignore*/\n.slide-enter-active[data-v-70bc4be3],.slide-leave-active[data-v-70bc4be3]{\n  transition:transform .5s cubic-bezier(1,-.35,0,1.35),opacity .5s\n}\n.slide-enter[data-v-70bc4be3],.slide-leave-to[data-v-70bc4be3]{\n  opacity:0;\n  transform:translateX(640px)\n}\n\n/*purgecss end ignore*/", ""]), n.locals = {}, t.exports = n
        },
        468: function(t, e, r) {
            "use strict";
            r.r(e);
            r(14);
            var n = r(6),
                o = r(22);

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var l = {
                    data: () => ({
                        show: !1
                    }),
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.b)("core/toast", ["list"])),
                    watch: {
                        list(t) {
                            t.length > 0 ? this.show = !0 : setTimeout((() => {
                                this.show = !1
                            }), 500)
                        }
                    }
                },
                f = l,
                d = (r(441), r(9)),
                component = Object(d.a)(f, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return t.show ? r("div", {
                        staticClass: "fixed bottom-0 right-0 m-4 z-40",
                        staticStyle: {
                            transform: "translateZ(0)"
                        }
                    }, [r("transition-group", {
                        attrs: {
                            name: "slide",
                            appear: ""
                        }
                    }, t._l(t.list, (function(e) {
                        return r("div", {
                            key: e.id,
                            ref: e.id,
                            refInFor: !0,
                            staticClass: "flex flex-col items-end"
                        }, [r("p", {
                            staticClass: "mt-2 px-3 py-2 lg:text-lg rounded-lg bg-gray-dark-mid text-white"
                        }, [t._v("\n        " + t._s(e.content) + "\n      ")])])
                    })), 0)], 1) : t._e()
                }), [], !1, null, "70bc4be3", null);
            e.default = component.exports
        }
    }
]);