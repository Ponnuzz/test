(window.webpackJsonp = window.webpackJsonp || []).push([
    [23], {
        408: function(t, e, n) {
            var content = n(437);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(64).default)("d7f49434", content, !0, {
                sourceMap: !1
            })
        },
        436: function(t, e, n) {
            "use strict";
            n(408)
        },
        437: function(t, e, n) {
            var c = n(63)((function(i) {
                return i[1]
            }));
            c.push([t.i, "/*purgecss start ignore*/\n.fade-enter-active[data-v-659ca8ae],.fade-leave-active[data-v-659ca8ae]{\n  transition:all .25s ease-out;\n  transform:translateY(0)\n}\n.fade-enter[data-v-659ca8ae],.fade-leave-to[data-v-659ca8ae]{\n  opacity:0;\n  transform:translateY(100px)\n}\n\n/*purgecss end ignore*/", ""]), c.locals = {}, t.exports = c
        },
        465: function(t, e, n) {
            "use strict";
            n.r(e);
            var c = {
                    data: () => ({
                        viewed: !0
                    }),
                    mounted() {
                        setTimeout((() => {
                            this.viewed = this.$util.consent.viewed(), this.viewed && this.verify()
                        }), 1e3)
                    },
                    methods: {
                        accept() {
                            this.viewed = !0, this.$util.consent.accept()
                        },
                        manage() {
                            this.viewed = !0, this.$util.modal.popup((() => n.e(0).then(n.bind(null, 469))))
                        },
                        verify() {
                            this.$util.consent.latest() || (this.$util.consent.clear(), this.viewed = !1)
                        }
                    }
                },
                o = (n(436), n(9)),
                component = Object(o.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.viewed ? t._e() : n("div", {
                        staticClass: "flex flex-col fixed z-20 bottom-0 m-4 p-4 lg:p-6 max-w-screen-md rounded-lg bg-gray-dark-mid text-white shadow",
                        staticStyle: {
                            transform: "translateZ(0)"
                        }
                    }, [n("p", {
                        staticClass: "lg:text-xl"
                    }, [t._v("\n      We're using cookies for gathering and analyzing anonymous user statistics in order to improve our products and services. Read more about that in our "), n("a", {
                        attrs: {
                            href: "/privacy",
                            target: "_blank"
                        }
                    }, [t._v("privacy policy")]), t._v(".\n    ")]), t._v(" "), n("p", {
                        staticClass: "lg:text-xl mt-2"
                    }, [t._v('\n      You can customize the usage of these cookies by clicking "Manage Settings". By clicking "Accept All" you\'re automatically accepting the usage of all cookies. You can always change these settings later on.\n    ')]), t._v(" "), n("div", {
                        staticClass: "flex justify-between items-end mt-2 lg:mt-4"
                    }, [n("a", {
                        staticClass: "text-sm lg:text-lg rounded cursor-pointer",
                        on: {
                            click: function(e) {
                                return t.manage()
                            }
                        }
                    }, [t._v("\n        Manage Settings\n      ")]), t._v(" "), n("a", {
                        staticClass: "btn btn-primary text-sm lg:text-lg text-center lg:px-6 py-1.5 w-28 lg:w-auto rounded",
                        on: {
                            click: function(e) {
                                return t.accept()
                            }
                        }
                    }, [t._v("\n        Accept All\n      ")])])])])
                }), [], !1, null, "659ca8ae", null);
            e.default = component.exports
        }
    }
]);