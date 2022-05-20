(window.webpackJsonp = window.webpackJsonp || []).push([
    [67, 54, 55, 56], {
        370: function(e) {
            e.exports = JSON.parse('{"a":"https://groovy.bot","b":{"home":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"Groovy has ended its service. We have received legal notice and cooperated accordingly. Thank you everyone for flying with Groovy."},"commands":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"Groovy has ended its service. We have received legal notice and cooperated accordingly. Thank you everyone for flying with Groovy."},"premium":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"Groovy has ended its service. We have received legal notice and cooperated accordingly. Thank you everyone for flying with Groovy."},"guilds":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"Groovy has ended its service. We have received legal notice and cooperated accordingly. Thank you everyone for flying with Groovy."},"guild":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"Groovy has ended its service. We have received legal notice and cooperated accordingly. Thank you everyone for flying with Groovy."},"invite":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"Groovy has ended its service. We have received legal notice and cooperated accordingly. Thank you everyone for flying with Groovy."},"login":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"Groovy has ended its service. We have received legal notice and cooperated accordingly. Thank you everyone for flying with Groovy."}}}')
        },
        391: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = {
                    props: {
                        title: {
                            type: String,
                            required: !0,
                            default: "N/A"
                        },
                        description: {
                            type: String,
                            required: !0,
                            default: "N/A"
                        },
                        init: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        }
                    },
                    data: () => ({
                        active: !1
                    }),
                    computed: {
                        maxActiveHeight() {
                            return this.$refs.content.scrollHeight
                        }
                    },
                    mounted() {
                        this.active = this.init
                    },
                    methods: {
                        toggle() {
                            this.active = !this.active
                        }
                    }
                },
                r = o(9),
                component = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        staticClass: "flex flex-col bg-gray-base max-w-screen-xl p-4 rounded shadow-md overflow-hidden cursor-pointer mb-4 last:mb-0 w-full",
                        on: {
                            click: function(t) {
                                return e.toggle()
                            }
                        }
                    }, [o("div", {
                        ref: "overview",
                        staticClass: "flex items-center"
                    }, [o("fa", {
                        class: (e.active ? "transform origin-center rotate-90 transition duration-200 ease-in-out" : "transform origin-center rotate-0 transition duration-200 ease-in-out") + " text-lg xl:text-xl w-4 h-4 xl:w-6 xl:h-6",
                        attrs: {
                            icon: "angle-right"
                        }
                    }), e._v(" "), o("p", {
                        staticClass: "text-xl lg:text-2xl font-bold ml-2"
                    }, [e._v("\n      " + e._s(e.title) + "\n    ")])], 1), e._v(" "), o("div", {
                        ref: "content",
                        style: "transition: max-height 200ms ease-in-out; " + (e.active ? "max-height: " + e.maxActiveHeight + "px;" : "max-height: 0;")
                    }, [o("p", {
                        staticClass: "mt-4 lg:text-xl"
                    }, [e._v("\n      " + e._s(e.description) + "\n    ")])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        399: function(e) {
            e.exports = JSON.parse('[{"content":"Groovy source code?","answer":"We don\'t plan on open-sourcing Groovy. There have already been cases of copyright owners attacking open-source repositories, and we don\'t want to be involved in that."},{"content":"What about premium users?","answer":"We\'ve initiated refunds for everyone, they can take a while depending on your bank."},{"content":"What are the alternatives?","answer":"We generally discourage you from using any music bot following this."},{"content":"Can\'t you just use a different platform?","answer":"That\'s delaying the inevitable. This has shown us that what we\'re doing is an issue, and other platforms will probably follow suit with YouTube."},{"content":"Is this related to YouTube Together?","answer":"We don\'t know. There have been rumors, but we can\'t confirm nor deny these."},{"content":"Why Groovy?","answer":"We\'re guessing Groovy won\'t be the only one getting such a notification. We were just very quick to respond to it and inform our users and partners."},{"content":"What can I do to help?","answer":"Stay in the community server & follow news - we\'ll be working on other cool things."},{"content":"Will Groovy be deleted?","answer":"No, it will most likely be offline."},{"content":"What\'s happening to the community server?","answer":"We will be keeping the Discord community server indefinitely."}]')
        },
        421: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = {},
                r = o(9),
                component = Object(r.a)(n, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        staticClass: "max-w-full"
                    }, [o("div", {
                        staticClass: "flex flex-col"
                    }, [e._m(0), e._v(" "), o("div", {
                        staticClass: "flex flex-col lg:flex-row items-center lg:justify-center mt-4 lg:mt-6 px-8 mb-8 lg:mb-10"
                    }, [o("nuxt-link", {
                        staticClass: "btn text-center text-lg lg:text-xl font-bold bg-gray-lightest text-gray-dark rounded-full py-2 px-4 lg:py-3 lg:px-6 w-64 mt-4 lg:mt-0 lg:mx-2",
                        attrs: {
                            to: "/support"
                        }
                    }, [e._v("\n        Support Server\n      ")])], 1)])])
                }), [function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        staticClass: "flex flex-col items-center px-8"
                    }, [o("h1", {
                        staticClass: "text-center text-4xl lg:text-6xl font-bold"
                    }, [e._v("\n        Groovy has"), o("br"), e._v("ended its service.\n      ")]), e._v(" "), o("h2", {
                        staticClass: "text-center text-2xl lg:text-3xl opacity-75 max-w-screen-md mt-2 lg:mt-4"
                    }, [e._v("\n        We have received legal notice and cooperated accordingly. Thank you everyone for flying with Groovy.\n      ")])])
                }], !1, null, null, null);
            t.default = component.exports
        },
        422: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(399),
                r = {
                    data: () => ({
                        faq: n
                    })
                },
                l = o(9),
                component = Object(l.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        staticClass: "flex flex-col items-center"
                    }, [o("p", {
                        staticClass: "bg-purple-light bg-opacity-75 transition-colors duration-150 hover:bg-opacity-90 uppercase select-none text-lg text-gray-lightest px-3 py-1 rounded shadow mb-8"
                    }, [e._v("\n    faq\n  ")]), e._v(" "), o("div", {
                        staticClass: "content pb-4 xl:pb-8"
                    }, e._l(e.faq, (function(e, t) {
                        return o("shutdown-collapsible", {
                            key: t + "-" + e.content.split(" ")[0],
                            attrs: {
                                title: e.content,
                                description: e.answer
                            }
                        })
                    })), 1)])
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                ShutdownCollapsible: o(391).default
            })
        },
        434: function(e, t, o) {
            e.exports = o.p + "img/7b5cd20.svg"
        },
        460: function(e, t, o) {
            "use strict";
            o.r(t);
            var meta = o(370),
                {
                    short: n,
                    title: title,
                    description: r
                } = meta.b.home,
                l = {
                    head() {
                        return {
                            title: title,
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: r
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: title
                            }, {
                                hid: "og:site_name",
                                property: "og:site_name",
                                content: n
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: "".concat(meta.a).concat(this.$route.path)
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: r
                            }],
                            link: [{
                                rel: "canonical",
                                href: "".concat(meta.a).concat(this.$route.path)
                            }]
                        }
                    }
                },
                c = o(9),
                component = Object(c.a)(l, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("div", {
                        staticClass: "root overflow-hidden"
                    }, [n("div", {
                        staticClass: "wrapper bg-gray-base bg-center bg-cover bg-clip-border",
                        style: "background-image: url(" + o(434) + ")"
                    }, [n("div", {
                        staticClass: "wrapper pt-40 lg:pt-52 pb-8 lg:pb-16"
                    }, [n("shutdown")], 1)]), e._v(" "), n("div", {
                        staticClass: "wrapper bg-gray-dark"
                    }, [n("div", {
                        staticClass: "wrapper py-8 lg:py-12"
                    }, [n("shutdown-faq")], 1)])])])
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                Shutdown: o(421).default,
                ShutdownFaq: o(422).default
            })
        }
    }
]);