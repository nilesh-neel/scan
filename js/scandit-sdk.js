/*!
 * @license
 *
 * Scandit Barcode Scanner SDK for the Web
 *
 * Copyright © 2018 Scandit AG. All Rights Reserved.
 *
 * The use of this software is governed by the Scandit Terms and Conditions.
 * https://ssl.scandit.com/terms/test.pdf
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.ScanditSDK = {}) }(this, function(e) {
    "use strict";
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function n(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }

    function r(e, t) { return e(t = { exports: {} }, t.exports), t.exports }
    var i = Math.ceil,
        a = Math.floor,
        o = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? a : i)(e) },
        s = function(e) { if (null == e) throw TypeError("Can't call method on  " + e); return e },
        c = r(function(e) { var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = t) }),
        d = r(function(e) { var t = e.exports = { version: "2.5.1" }; "number" == typeof __e && (__e = t) }),
        u = (d.version, function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e }),
        l = function(e, t, n) { if (u(e), void 0 === t) return e; switch (n) {
                case 1:
                    return function(n) { return e.call(t, n) };
                case 2:
                    return function(n, r) { return e.call(t, n, r) };
                case 3:
                    return function(n, r, i) { return e.call(t, n, r, i) } } return function() { return e.apply(t, arguments) } },
        p = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e },
        f = function(e) { if (!p(e)) throw TypeError(e + " is not an object!"); return e },
        m = function(e) { try { return !!e() } catch (e) { return !0 } },
        h = !m(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }),
        v = c.document,
        g = p(v) && p(v.createElement),
        y = function(e) { return g ? v.createElement(e) : {} },
        b = !h && !m(function() { return 7 != Object.defineProperty(y("div"), "a", { get: function() { return 7 } }).a }),
        S = function(e, t) { if (!p(e)) return e; var n, r; if (t && "function" == typeof(n = e.toString) && !p(r = n.call(e))) return r; if ("function" == typeof(n = e.valueOf) && !p(r = n.call(e))) return r; if (!t && "function" == typeof(n = e.toString) && !p(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") },
        w = Object.defineProperty,
        C = { f: h ? Object.defineProperty : function(e, t, n) { if (f(e), t = S(t, !0), f(n), b) try { return w(e, t, n) } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } },
        T = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } },
        E = h ? function(e, t, n) { return C.f(e, t, T(1, n)) } : function(e, t, n) { return e[t] = n, e },
        _ = function(e, t, n) { var r, i, a, o = e & _.F,
                s = e & _.G,
                u = e & _.S,
                p = e & _.P,
                f = e & _.B,
                m = e & _.W,
                h = s ? d : d[t] || (d[t] = {}),
                v = h.prototype,
                g = s ? c : u ? c[t] : (c[t] || {}).prototype; for (r in s && (n = t), n)(i = !o && g && void 0 !== g[r]) && r in h || (a = i ? g[r] : n[r], h[r] = s && "function" != typeof g[r] ? n[r] : f && i ? l(a, c) : m && g[r] == a ? function(e) { var t = function(t, n, r) { if (this instanceof e) { switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n) } return new e(t, n, r) } return e.apply(this, arguments) }; return t.prototype = e.prototype, t }(a) : p && "function" == typeof a ? l(Function.call, a) : a, p && ((h.virtual || (h.virtual = {}))[r] = a, e & _.R && v && !v[r] && E(v, r, a))) };
    _.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128;
    var M = _,
        k = E,
        A = {}.hasOwnProperty,
        V = function(e, t) { return A.call(e, t) },
        I = {},
        P = {}.toString,
        L = function(e) { return P.call(e).slice(8, -1) },
        x = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == L(e) ? e.split("") : Object(e) },
        R = function(e) { return x(s(e)) },
        N = Math.min,
        O = function(e) { return e > 0 ? N(o(e), 9007199254740991) : 0 },
        D = Math.max,
        j = Math.min,
        F = c["__core-js_shared__"] || (c["__core-js_shared__"] = {}),
        U = function(e) { return F[e] || (F[e] = {}) },
        z = 0,
        G = Math.random(),
        B = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++z + G).toString(36)) },
        W = U("keys"),
        Y = function(e) { return W[e] || (W[e] = B(e)) },
        Q = function(e, t, n) { for (var r = R(e), i = O(r.length), a = function(e, t) { return (e = o(e)) < 0 ? D(e + t, 0) : j(e, t) }(n, i); i > a; a++)
                if (a in r && r[a] === t) return a || 0;
            return -1 },
        H = Y("IE_PROTO"),
        Z = function(e, t) { var n, r = R(e),
                i = 0,
                a = []; for (n in r) n != H && V(r, n) && a.push(n); for (; t.length > i;) V(r, n = t[i++]) && (~Q(a, n) || a.push(n)); return a },
        q = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        K = Object.keys || function(e) { return Z(e, q) },
        J = h ? Object.defineProperties : function(e, t) { f(e); for (var n, r = K(t), i = r.length, a = 0; i > a;) C.f(e, n = r[a++], t[n]); return e },
        X = c.document,
        $ = X && X.documentElement,
        ee = Y("IE_PROTO"),
        te = function() {},
        ne = function() { var e, t = y("iframe"),
                n = q.length; for (t.style.display = "none", $.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), ne = e.F; n--;) delete ne.prototype[q[n]]; return ne() },
        re = Object.create || function(e, t) { var n; return null !== e ? (te.prototype = f(e), n = new te, te.prototype = null, n[ee] = e) : n = ne(), void 0 === t ? n : J(n, t) },
        ie = r(function(e) { var t = U("wks"),
                n = c.Symbol,
                r = "function" == typeof n;
            (e.exports = function(e) { return t[e] || (t[e] = r && n[e] || (r ? n : B)("Symbol." + e)) }).store = t }),
        ae = C.f,
        oe = ie("toStringTag"),
        se = function(e, t, n) { e && !V(e = n ? e : e.prototype, oe) && ae(e, oe, { configurable: !0, value: t }) },
        ce = {};
    E(ce, ie("iterator"), function() { return this });
    var de = function(e, t, n) { e.prototype = re(ce, { next: T(1, n) }), se(e, t + " Iterator") },
        ue = function(e) { return Object(s(e)) },
        le = Y("IE_PROTO"),
        pe = Object.prototype,
        fe = Object.getPrototypeOf || function(e) { return e = ue(e), V(e, le) ? e[le] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? pe : null },
        me = ie("iterator"),
        he = !([].keys && "next" in [].keys()),
        ve = function() { return this },
        ge = function(e, t, n, r, i, a, o) { de(n, t, r); var s, c, d, u = function(e) { if (!he && e in m) return m[e]; switch (e) {
                        case "keys":
                        case "values":
                            return function() { return new n(this, e) } } return function() { return new n(this, e) } },
                l = t + " Iterator",
                p = "values" == i,
                f = !1,
                m = e.prototype,
                h = m[me] || m["@@iterator"] || i && m[i],
                v = h || u(i),
                g = i ? p ? u("entries") : v : void 0,
                y = "Array" == t && m.entries || h; if (y && (d = fe(y.call(new e))) !== Object.prototype && d.next && se(d, l, !0), p && h && "values" !== h.name && (f = !0, v = function() { return h.call(this) }), o && (he || f || !m[me]) && E(m, me, v), I[t] = v, I[l] = ve, i)
                if (s = { values: p ? v : u("values"), keys: a ? v : u("keys"), entries: g }, o)
                    for (c in s) c in m || k(m, c, s[c]);
                else M(M.P + M.F * (he || f), t, s);
            return s },
        ye = function(e, t) { var n, r, i = String(s(e)),
                a = o(t),
                c = i.length; return a < 0 || a >= c ? "" : (n = i.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === c || (r = i.charCodeAt(a + 1)) < 56320 || r > 57343 ? i.charAt(a) : i.slice(a, a + 2) };
    ge(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() { var e, t = this._t,
            n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = ye(t, n), this._i += e.length, { value: e, done: !1 }) });
    var be = function(e, t) { return { value: t, done: !!e } };
    ge(Array, "Array", function(e, t) { this._t = R(e), this._i = 0, this._k = t }, function() { var e = this._t,
            t = this._k,
            n = this._i++; return !e || n >= e.length ? (this._t = void 0, be(1)) : be(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]) }, "values"), I.Arguments = I.Array;
    for (var Se = ie("toStringTag"), we = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), Ce = 0; Ce < we.length; Ce++) { var Te = we[Ce],
            Ee = c[Te],
            _e = Ee && Ee.prototype;
        _e && !_e[Se] && E(_e, Se, Te), I[Te] = I.Array }
    var Me, ke, Ae, Ve = ie("toStringTag"),
        Ie = "Arguments" == L(function() { return arguments }()),
        Pe = function(e) { var t, n, r; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (e) {} }(t = Object(e), Ve)) ? n : Ie ? L(t) : "Object" == (r = L(t)) && "function" == typeof t.callee ? "Arguments" : r },
        Le = function(e, t, n, r) { if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!"); return e },
        xe = function(e, t, n, r) { try { return r ? t(f(n)[0], n[1]) : t(n) } catch (t) { var i = e.return; throw void 0 !== i && f(i.call(e)), t } },
        Re = ie("iterator"),
        Ne = Array.prototype,
        Oe = function(e) { return void 0 !== e && (I.Array === e || Ne[Re] === e) },
        De = ie("iterator"),
        je = d.getIteratorMethod = function(e) { if (null != e) return e[De] || e["@@iterator"] || I[Pe(e)] },
        Fe = r(function(e) { var t = {},
                n = {},
                r = e.exports = function(e, r, i, a, o) { var s, c, d, u, p = o ? function() { return e } : je(e),
                        m = l(i, a, r ? 2 : 1),
                        h = 0; if ("function" != typeof p) throw TypeError(e + " is not iterable!"); if (Oe(p)) { for (s = O(e.length); s > h; h++)
                            if ((u = r ? m(f(c = e[h])[0], c[1]) : m(e[h])) === t || u === n) return u } else
                        for (d = p.call(e); !(c = d.next()).done;)
                            if ((u = xe(d, m, c.value, r)) === t || u === n) return u };
            r.BREAK = t, r.RETURN = n }),
        Ue = ie("species"),
        ze = function(e, t) { var n, r = f(e).constructor; return void 0 === r || null == (n = f(r)[Ue]) ? t : u(n) },
        Ge = c.process,
        Be = c.setImmediate,
        We = c.clearImmediate,
        Ye = c.MessageChannel,
        Qe = c.Dispatch,
        He = 0,
        Ze = {},
        qe = function() { var e = +this; if (Ze.hasOwnProperty(e)) { var t = Ze[e];
                delete Ze[e], t() } },
        Ke = function(e) { qe.call(e.data) };
    Be && We || (Be = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return Ze[++He] = function() {! function(e, t, n) { switch (t.length) {
                    case 0:
                        return e();
                    case 1:
                        return e(t[0]);
                    case 2:
                        return e(t[0], t[1]);
                    case 3:
                        return e(t[0], t[1], t[2]);
                    case 4:
                        return e(t[0], t[1], t[2], t[3]) }
                e.apply(void 0, t) }("function" == typeof e ? e : Function(e), t) }, Me(He), He }, We = function(e) { delete Ze[e] }, "process" == L(Ge) ? Me = function(e) { Ge.nextTick(l(qe, e, 1)) } : Qe && Qe.now ? Me = function(e) { Qe.now(l(qe, e, 1)) } : Ye ? (Ae = (ke = new Ye).port2, ke.port1.onmessage = Ke, Me = l(Ae.postMessage, Ae, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (Me = function(e) { c.postMessage(e + "", "*") }, c.addEventListener("message", Ke, !1)) : Me = "onreadystatechange" in y("script") ? function(e) { $.appendChild(y("script")).onreadystatechange = function() { $.removeChild(this), qe.call(e) } } : function(e) { setTimeout(l(qe, e, 1), 0) });
    var Je = { set: Be, clear: We },
        Xe = Je.set,
        $e = c.MutationObserver || c.WebKitMutationObserver,
        et = c.process,
        tt = c.Promise,
        nt = "process" == L(et);

    function rt(e) { var t, n;
        this.promise = new e(function(e, r) { if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = r }), this.resolve = u(t), this.reject = u(n) }
    var it = { f: function(e) { return new rt(e) } },
        at = function(e) { try { return { e: !1, v: e() } } catch (e) { return { e: !0, v: e } } },
        ot = function(e, t) { if (f(e), p(t) && t.constructor === e) return t; var n = it.f(e); return (0, n.resolve)(t), n.promise },
        st = function(e, t, n) { for (var r in t) n && e[r] ? e[r] = t[r] : E(e, r, t[r]); return e },
        ct = ie("species"),
        dt = function(e) { var t = "function" == typeof d[e] ? d[e] : c[e];
            h && t && !t[ct] && C.f(t, ct, { configurable: !0, get: function() { return this } }) },
        ut = ie("iterator"),
        lt = !1;
    try {
        [7][ut]().return = function() { lt = !0 } } catch (e) {}
    var pt, ft, mt, ht, vt = function(e, t) { if (!t && !lt) return !1; var n = !1; try { var r = [7],
                    i = r[ut]();
                i.next = function() { return { done: n = !0 } }, r[ut] = function() { return i }, e(r) } catch (e) {} return n },
        gt = Je.set,
        yt = function() { var e, t, n, r = function() { var r, i; for (nt && (r = et.domain) && r.exit(); e;) { i = e.fn, e = e.next; try { i() } catch (r) { throw e ? n() : t = void 0, r } }
                t = void 0, r && r.enter() }; if (nt) n = function() { et.nextTick(r) };
            else if ($e) { var i = !0,
                    a = document.createTextNode("");
                new $e(r).observe(a, { characterData: !0 }), n = function() { a.data = i = !i } } else if (tt && tt.resolve) { var o = tt.resolve();
                n = function() { o.then(r) } } else n = function() { Xe.call(c, r) }; return function(r) { var i = { fn: r, next: void 0 };
                t && (t.next = i), e || (e = i, n()), t = i } }(),
        bt = c.TypeError,
        St = c.process,
        wt = c.Promise,
        Ct = "process" == Pe(St),
        Tt = function() {},
        Et = ft = it.f,
        _t = !! function() { try { var e = wt.resolve(1),
                    t = (e.constructor = {})[ie("species")] = function(e) { e(Tt, Tt) }; return (Ct || "function" == typeof PromiseRejectionEvent) && e.then(Tt) instanceof t } catch (e) {} }(),
        Mt = function(e) { var t; return !(!p(e) || "function" != typeof(t = e.then)) && t },
        kt = function(e, t) { if (!e._n) { e._n = !0; var n = e._c;
                yt(function() { for (var r = e._v, i = 1 == e._s, a = 0, o = function(t) { var n, a, o = i ? t.ok : t.fail,
                                s = t.resolve,
                                c = t.reject,
                                d = t.domain; try { o ? (i || (2 == e._h && It(e), e._h = 1), !0 === o ? n = r : (d && d.enter(), n = o(r), d && d.exit()), n === t.promise ? c(bt("Promise-chain cycle")) : (a = Mt(n)) ? a.call(n, s, c) : s(n)) : c(r) } catch (e) { c(e) } }; n.length > a;) o(n[a++]);
                    e._c = [], e._n = !1, t && !e._h && At(e) }) } },
        At = function(e) { gt.call(c, function() { var t, n, r, i = e._v,
                    a = Vt(e); if (a && (t = at(function() { Ct ? St.emit("unhandledRejection", i, e) : (n = c.onunhandledrejection) ? n({ promise: e, reason: i }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", i) }), e._h = Ct || Vt(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v }) },
        Vt = function(e) { if (1 == e._h) return !1; for (var t, n = e._a || e._c, r = 0; n.length > r;)
                if ((t = n[r++]).fail || !Vt(t.promise)) return !1;
            return !0 },
        It = function(e) { gt.call(c, function() { var t;
                Ct ? St.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v }) }) },
        Pt = function(e) { var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), kt(t, !0)) },
        Lt = function(e) { var t, n = this; if (!n._d) { n._d = !0, n = n._w || n; try { if (n === e) throw bt("Promise can't be resolved itself");
                    (t = Mt(e)) ? yt(function() { var r = { _w: n, _d: !1 }; try { t.call(e, l(Lt, r, 1), l(Pt, r, 1)) } catch (e) { Pt.call(r, e) } }): (n._v = e, n._s = 1, kt(n, !1)) } catch (e) { Pt.call({ _w: n, _d: !1 }, e) } } };
    _t || (wt = function(e) { Le(this, wt, "Promise", "_h"), u(e), pt.call(this); try { e(l(Lt, this, 1), l(Pt, this, 1)) } catch (e) { Pt.call(this, e) } }, (pt = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = st(wt.prototype, { then: function(e, t) { var n = Et(ze(this, wt)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Ct ? St.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && kt(this, !1), n.promise }, catch: function(e) { return this.then(void 0, e) } }), mt = function() { var e = new pt;
        this.promise = e, this.resolve = l(Lt, e, 1), this.reject = l(Pt, e, 1) }, it.f = Et = function(e) { return e === wt || e === ht ? new mt(e) : ft(e) }), M(M.G + M.W + M.F * !_t, { Promise: wt }), se(wt, "Promise"), dt("Promise"), ht = d.Promise, M(M.S + M.F * !_t, "Promise", { reject: function(e) { var t = Et(this); return (0, t.reject)(e), t.promise } }), M(M.S + !0 * M.F, "Promise", { resolve: function(e) { return ot(this === ht ? wt : this, e) } }), M(M.S + M.F * !(_t && vt(function(e) { wt.all(e).catch(Tt) })), "Promise", { all: function(e) { var t = this,
                n = Et(t),
                r = n.resolve,
                i = n.reject,
                a = at(function() { var n = [],
                        a = 0,
                        o = 1;
                    Fe(e, !1, function(e) { var s = a++,
                            c = !1;
                        n.push(void 0), o++, t.resolve(e).then(function(e) { c || (c = !0, n[s] = e, --o || r(n)) }, i) }), --o || r(n) }); return a.e && i(a.v), n.promise }, race: function(e) { var t = this,
                n = Et(t),
                r = n.reject,
                i = at(function() { Fe(e, !1, function(e) { t.resolve(e).then(n.resolve, r) }) }); return i.e && r(i.v), n.promise } }), M(M.P + M.R, "Promise", { finally: function(e) { var t = ze(this, d.Promise || c.Promise),
                n = "function" == typeof e; return this.then(n ? function(n) { return ot(t, e()).then(function() { return n }) } : e, n ? function(n) { return ot(t, e()).then(function() { throw n }) } : e) } }), M(M.S, "Promise", { try: function(e) { var t = it.f(this),
                n = at(e); return (n.e ? t.reject : t.resolve)(n.v), t.promise } });
    var xt = d.Promise,
        Rt = n(r(function(e) { e.exports = { default: xt, __esModule: !0 } }));
    ! function() { if ("undefined" != typeof window) { var e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = !!e && parseInt(e[1], 10) >= 16; if ("objectFit" in document.documentElement.style != 0 && !t) return void(window.objectFitPolyfill = function() { return !1 }); var n = function(e, t, n) { var r, i, a, o, s; if ((n = n.split(" ")).length < 2 && (n[1] = n[0]), "x" === e) r = n[0], i = n[1], a = "left", o = "right", s = t.clientWidth;
                    else { if ("y" !== e) return;
                        r = n[1], i = n[0], a = "top", o = "bottom", s = t.clientHeight } return r === a || i === a ? void(t.style[a] = "0") : r === o || i === o ? void(t.style[o] = "0") : "center" === r || "50%" === r ? (t.style[a] = "50%", void(t.style["margin-" + a] = s / -2 + "px")) : r.indexOf("%") >= 0 ? void((r = parseInt(r)) < 50 ? (t.style[a] = r + "%", t.style["margin-" + a] = s * (r / -100) + "px") : (r = 100 - r, t.style[o] = r + "%", t.style["margin-" + o] = s * (r / -100) + "px")) : void(t.style[a] = r) },
                r = function(e) { var t = e.dataset ? e.dataset.objectFit : e.getAttribute("data-object-fit"),
                        r = e.dataset ? e.dataset.objectPosition : e.getAttribute("data-object-position");
                    t = t || "cover", r = r || "50% 50%"; var i = e.parentNode;
                    (function(e) { var t = window.getComputedStyle(e, null),
                            n = t.getPropertyValue("position"),
                            r = t.getPropertyValue("overflow"),
                            i = t.getPropertyValue("display");
                        n && "static" !== n || (e.style.position = "relative"), "hidden" !== r && (e.style.overflow = "hidden"), i && "inline" !== i || (e.style.display = "block"), 0 === e.clientHeight && (e.style.height = "100%"), -1 === e.className.indexOf("object-fit-polyfill") && (e.className = e.className + " object-fit-polyfill") })(i),
                    function(e) { var t = window.getComputedStyle(e, null),
                            n = { "max-width": "none", "max-height": "none", "min-width": "0px", "min-height": "0px", top: "auto", right: "auto", bottom: "auto", left: "auto", "margin-top": "0px", "margin-right": "0px", "margin-bottom": "0px", "margin-left": "0px" }; for (var r in n) t.getPropertyValue(r) !== n[r] && (e.style[r] = n[r]) }(e), e.style.position = "absolute", e.style.height = "100%", e.style.width = "auto", "scale-down" === t && (e.style.height = "auto", e.clientWidth < i.clientWidth && e.clientHeight < i.clientHeight ? (n("x", e, r), n("y", e, r)) : (t = "contain", e.style.height = "100%")), "none" === t ? (e.style.width = "auto", e.style.height = "auto", n("x", e, r), n("y", e, r)) : "cover" === t && e.clientWidth > i.clientWidth || "contain" === t && e.clientWidth < i.clientWidth ? (e.style.top = "0", e.style.marginTop = "0", n("x", e, r)) : "scale-down" !== t && (e.style.width = "100%", e.style.height = "auto", e.style.left = "0", e.style.marginLeft = "0", n("y", e, r)) },
                i = function(e) { if (void 0 === e) e = document.querySelectorAll("[data-object-fit]");
                    else if (e && e.nodeName) e = [e];
                    else { if ("object" != typeof e || !e.length || !e[0].nodeName) return !1;
                        e = e } for (var n = 0; n < e.length; n++)
                        if (e[n].nodeName) { var i = e[n].nodeName.toLowerCase(); "img" !== i || t ? "video" === i && (e[n].readyState > 0 ? r(e[n]) : e[n].addEventListener("loadedmetadata", function() { r(this) })) : e[n].complete ? r(e[n]) : e[n].addEventListener("load", function() { r(this) }) }
                    return !0 };
            document.addEventListener("DOMContentLoaded", function() { i() }), window.addEventListener("resize", function() { i() }), window.objectFitPolyfill = i } }();
    var Nt = !0,
        Ot = !0;

    function Dt(e, t, n) { var r = e.match(t); return r && r.length >= n && parseInt(r[n], 10) }
    var jt = { extractVersion: Dt, wrapPeerConnectionEvent: function(e, t, n) { if (e.RTCPeerConnection) { var r = e.RTCPeerConnection.prototype,
                        i = r.addEventListener;
                    r.addEventListener = function(e, r) { if (e !== t) return i.apply(this, arguments); var a = function(e) { var t = n(e);
                            t && r(t) }; return this._eventMap = this._eventMap || {}, this._eventMap[r] = a, i.apply(this, [e, a]) }; var a = r.removeEventListener;
                    r.removeEventListener = function(e, n) { if (e !== t || !this._eventMap || !this._eventMap[n]) return a.apply(this, arguments); var r = this._eventMap[n]; return delete this._eventMap[n], a.apply(this, [e, r]) }, Object.defineProperty(r, "on" + t, { get: function() { return this["_on" + t] }, set: function(e) { this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e) }, enumerable: !0, configurable: !0 }) } }, disableLog: function(e) { return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (Nt = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled") }, disableWarnings: function(e) { return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (Ot = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled")) }, log: function() { if ("object" == typeof window) { if (Nt) return; "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments) } }, deprecated: function(e, t) { Ot && console.warn(e + " is deprecated, please use " + t + " instead.") }, detectBrowser: function(e) { var t = e && e.navigator,
                    n = { browser: null, version: null }; if (void 0 === e || !e.navigator) return n.browser = "Not a browser.", n; if (t.mozGetUserMedia) n.browser = "firefox", n.version = Dt(t.userAgent, /Firefox\/(\d+)\./, 1);
                else if (t.webkitGetUserMedia) n.browser = "chrome", n.version = Dt(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
                else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/)) n.browser = "edge", n.version = Dt(t.userAgent, /Edge\/(\d+).(\d+)$/, 2);
                else { if (!e.RTCPeerConnection || !t.userAgent.match(/AppleWebKit\/(\d+)\./)) return n.browser = "Not a supported browser.", n;
                    n.browser = "safari", n.version = Dt(t.userAgent, /AppleWebKit\/(\d+)\./, 1) } return n } },
        Ft = jt.log,
        Ut = jt.log;

    function zt(e, t, n) { var r = n ? "outbound-rtp" : "inbound-rtp",
            i = new Map; if (null === t) return i; var a = []; return e.forEach(function(e) { "track" === e.type && e.trackIdentifier === t.id && a.push(e) }), a.forEach(function(t) { e.forEach(function(n) { n.type === r && n.trackId === t.id && function e(t, n, r) { n && !r.has(n.id) && (r.set(n.id, n), Object.keys(n).forEach(function(i) { i.endsWith("Id") ? e(t, t.get(n[i]), r) : i.endsWith("Ids") && n[i].forEach(function(n) { e(t, t.get(n), r) }) })) }(e, n, i) }) }), i }
    var Gt = { shimGetUserMedia: function(e) { var t = jt.detectBrowser(e),
                    n = e && e.navigator,
                    r = function(e) { if ("object" != typeof e || e.mandatory || e.optional) return e; var t = {}; return Object.keys(e).forEach(function(n) { if ("require" !== n && "advanced" !== n && "mediaSource" !== n) { var r = "object" == typeof e[n] ? e[n] : { ideal: e[n] };
                                void 0 !== r.exact && "number" == typeof r.exact && (r.min = r.max = r.exact); var i = function(e, t) { return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t }; if (void 0 !== r.ideal) { t.optional = t.optional || []; var a = {}; "number" == typeof r.ideal ? (a[i("min", n)] = r.ideal, t.optional.push(a), (a = {})[i("max", n)] = r.ideal, t.optional.push(a)) : (a[i("", n)] = r.ideal, t.optional.push(a)) }
                                void 0 !== r.exact && "number" != typeof r.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[i("", n)] = r.exact) : ["min", "max"].forEach(function(e) { void 0 !== r[e] && (t.mandatory = t.mandatory || {}, t.mandatory[i(e, n)] = r[e]) }) } }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t },
                    i = function(e, i) { if (t.version >= 61) return i(e); if ((e = JSON.parse(JSON.stringify(e))) && "object" == typeof e.audio) { var a = function(e, t, n) { t in e && !(n in e) && (e[n] = e[t], delete e[t]) };
                            a((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), a(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = r(e.audio) } if (e && "object" == typeof e.video) { var o = e.video.facingMode;
                            o = o && ("object" == typeof o ? o : { ideal: o }); var s, c = t.version < 66; if (o && ("user" === o.exact || "environment" === o.exact || "user" === o.ideal || "environment" === o.ideal) && (!n.mediaDevices.getSupportedConstraints || !n.mediaDevices.getSupportedConstraints().facingMode || c) && (delete e.video.facingMode, "environment" === o.exact || "environment" === o.ideal ? s = ["back", "rear"] : "user" !== o.exact && "user" !== o.ideal || (s = ["front"]), s)) return n.mediaDevices.enumerateDevices().then(function(t) { var n = (t = t.filter(function(e) { return "videoinput" === e.kind })).find(function(e) { return s.some(function(t) { return -1 !== e.label.toLowerCase().indexOf(t) }) }); return !n && t.length && -1 !== s.indexOf("back") && (n = t[t.length - 1]), n && (e.video.deviceId = o.exact ? { exact: n.deviceId } : { ideal: n.deviceId }), e.video = r(e.video), Ft("chrome: " + JSON.stringify(e)), i(e) });
                            e.video = r(e.video) } return Ft("chrome: " + JSON.stringify(e)), i(e) },
                    a = function(e) { return { name: { PermissionDeniedError: "NotAllowedError", PermissionDismissedError: "NotAllowedError", InvalidStateError: "NotAllowedError", DevicesNotFoundError: "NotFoundError", ConstraintNotSatisfiedError: "OverconstrainedError", TrackStartError: "NotReadableError", MediaDeviceFailedDueToShutdown: "NotAllowedError", MediaDeviceKillSwitchOn: "NotAllowedError", TabCaptureError: "AbortError", ScreenCaptureError: "AbortError", DeviceCaptureError: "AbortError" }[e.name] || e.name, message: e.message, constraint: e.constraint || e.constraintName, toString: function() { return this.name + (this.message && ": ") + this.message } } };
                n.getUserMedia = function(e, t, r) { i(e, function(e) { n.webkitGetUserMedia(e, t, function(e) { r && r(a(e)) }) }) }; var o = function(e) { return new Promise(function(t, r) { n.getUserMedia(e, t, r) }) }; if (n.mediaDevices || (n.mediaDevices = { getUserMedia: o, enumerateDevices: function() { return new Promise(function(t) { var n = { audio: "audioinput", video: "videoinput" }; return e.MediaStreamTrack.getSources(function(e) { t(e.map(function(e) { return { label: e.label, kind: n[e.kind], deviceId: e.id, groupId: "" } })) }) }) }, getSupportedConstraints: function() { return { deviceId: !0, echoCancellation: !0, facingMode: !0, frameRate: !0, height: !0, width: !0 } } }), n.mediaDevices.getUserMedia) { var s = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                    n.mediaDevices.getUserMedia = function(e) { return i(e, function(e) { return s(e).then(function(t) { if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function(e) { e.stop() }), new DOMException("", "NotFoundError"); return t }, function(e) { return Promise.reject(a(e)) }) }) } } else n.mediaDevices.getUserMedia = function(e) { return o(e) };
                void 0 === n.mediaDevices.addEventListener && (n.mediaDevices.addEventListener = function() { Ft("Dummy mediaDevices.addEventListener called.") }), void 0 === n.mediaDevices.removeEventListener && (n.mediaDevices.removeEventListener = function() { Ft("Dummy mediaDevices.removeEventListener called.") }) }, shimMediaStream: function(e) { e.MediaStream = e.MediaStream || e.webkitMediaStream }, shimOnTrack: function(e) { if ("object" != typeof e || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype) "RTCRtpTransceiver" in e || jt.wrapPeerConnectionEvent(e, "track", function(e) { return e.transceiver || (e.transceiver = { receiver: e.receiver }), e });
                else { Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", { get: function() { return this._ontrack }, set: function(e) { this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e) }, enumerable: !0, configurable: !0 }); var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function() { var n = this; return n._ontrackpoly || (n._ontrackpoly = function(t) { t.stream.addEventListener("addtrack", function(r) { var i;
                                i = e.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find(function(e) { return e.track && e.track.id === r.track.id }) : { track: r.track }; var a = new Event("track");
                                a.track = r.track, a.receiver = i, a.transceiver = { receiver: i }, a.streams = [t.stream], n.dispatchEvent(a) }), t.stream.getTracks().forEach(function(r) { var i;
                                i = e.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find(function(e) { return e.track && e.track.id === r.id }) : { track: r }; var a = new Event("track");
                                a.track = r, a.receiver = i, a.transceiver = { receiver: i }, a.streams = [t.stream], n.dispatchEvent(a) }) }, n.addEventListener("addstream", n._ontrackpoly)), t.apply(n, arguments) } } }, shimGetSendersWithDtmf: function(e) { if ("object" == typeof e && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) { var t = function(e, t) { return { track: t, get dtmf() { return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf }, _pc: e } }; if (!e.RTCPeerConnection.prototype.getSenders) { e.RTCPeerConnection.prototype.getSenders = function() { return this._senders = this._senders || [], this._senders.slice() }; var n = e.RTCPeerConnection.prototype.addTrack;
                        e.RTCPeerConnection.prototype.addTrack = function(e, r) { var i = n.apply(this, arguments); return i || (i = t(this, e), this._senders.push(i)), i }; var r = e.RTCPeerConnection.prototype.removeTrack;
                        e.RTCPeerConnection.prototype.removeTrack = function(e) { r.apply(this, arguments); var t = this._senders.indexOf(e); - 1 !== t && this._senders.splice(t, 1) } } var i = e.RTCPeerConnection.prototype.addStream;
                    e.RTCPeerConnection.prototype.addStream = function(e) { var n = this;
                        n._senders = n._senders || [], i.apply(n, [e]), e.getTracks().forEach(function(e) { n._senders.push(t(n, e)) }) }; var a = e.RTCPeerConnection.prototype.removeStream;
                    e.RTCPeerConnection.prototype.removeStream = function(e) { var t = this;
                        t._senders = t._senders || [], a.apply(t, [e]), e.getTracks().forEach(function(e) { var n = t._senders.find(function(t) { return t.track === e });
                            n && t._senders.splice(t._senders.indexOf(n), 1) }) } } else if ("object" == typeof e && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) { var o = e.RTCPeerConnection.prototype.getSenders;
                    e.RTCPeerConnection.prototype.getSenders = function() { var e = this,
                            t = o.apply(e, []); return t.forEach(function(t) { t._pc = e }), t }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", { get: function() { return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf } }) } }, shimSenderReceiverGetStats: function(e) { if ("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver) { if (!("getStats" in e.RTCRtpSender.prototype)) { var t = e.RTCPeerConnection.prototype.getSenders;
                        t && (e.RTCPeerConnection.prototype.getSenders = function() { var e = this,
                                n = t.apply(e, []); return n.forEach(function(t) { t._pc = e }), n }); var n = e.RTCPeerConnection.prototype.addTrack;
                        n && (e.RTCPeerConnection.prototype.addTrack = function() { var e = n.apply(this, arguments); return e._pc = this, e }), e.RTCRtpSender.prototype.getStats = function() { var e = this; return this._pc.getStats().then(function(t) { return zt(t, e.track, !0) }) } } if (!("getStats" in e.RTCRtpReceiver.prototype)) { var r = e.RTCPeerConnection.prototype.getReceivers;
                        r && (e.RTCPeerConnection.prototype.getReceivers = function() { var e = this,
                                t = r.apply(e, []); return t.forEach(function(t) { t._pc = e }), t }), jt.wrapPeerConnectionEvent(e, "track", function(e) { return e.receiver._pc = e.srcElement, e }), e.RTCRtpReceiver.prototype.getStats = function() { var e = this; return this._pc.getStats().then(function(t) { return zt(t, e.track, !1) }) } } if ("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype) { var i = e.RTCPeerConnection.prototype.getStats;
                        e.RTCPeerConnection.prototype.getStats = function() { if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) { var t, n, r, a = arguments[0]; return this.getSenders().forEach(function(e) { e.track === a && (t ? r = !0 : t = e) }), this.getReceivers().forEach(function(e) { return e.track === a && (n ? r = !0 : n = e), e.track === a }), r || t && n ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t ? t.getStats() : n ? n.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError")) } return i.apply(this, arguments) } } } }, shimSourceObject: function(e) { var t = e && e.URL; "object" == typeof e && (!e.HTMLMediaElement || "srcObject" in e.HTMLMediaElement.prototype || Object.defineProperty(e.HTMLMediaElement.prototype, "srcObject", { get: function() { return this._srcObject }, set: function(e) { var n = this;
                        this._srcObject = e, this.src && t.revokeObjectURL(this.src), e ? (this.src = t.createObjectURL(e), e.addEventListener("addtrack", function() { n.src && t.revokeObjectURL(n.src), n.src = t.createObjectURL(e) }), e.addEventListener("removetrack", function() { n.src && t.revokeObjectURL(n.src), n.src = t.createObjectURL(e) })) : this.src = "" } })) }, shimAddTrackRemoveTrackWithNative: function(e) { e.RTCPeerConnection.prototype.getLocalStreams = function() { var e = this; return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(function(t) { return e._shimmedLocalStreams[t][0] }) }; var t = e.RTCPeerConnection.prototype.addTrack;
                e.RTCPeerConnection.prototype.addTrack = function(e, n) { if (!n) return t.apply(this, arguments);
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {}; var r = t.apply(this, arguments); return this._shimmedLocalStreams[n.id] ? -1 === this._shimmedLocalStreams[n.id].indexOf(r) && this._shimmedLocalStreams[n.id].push(r) : this._shimmedLocalStreams[n.id] = [n, r], r }; var n = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function(e) { var t = this;
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(function(e) { if (t.getSenders().find(function(t) { return t.track === e })) throw new DOMException("Track already exists.", "InvalidAccessError") }); var r = t.getSenders();
                    n.apply(this, arguments); var i = t.getSenders().filter(function(e) { return -1 === r.indexOf(e) });
                    this._shimmedLocalStreams[e.id] = [e].concat(i) }; var r = e.RTCPeerConnection.prototype.removeStream;
                e.RTCPeerConnection.prototype.removeStream = function(e) { return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], r.apply(this, arguments) }; var i = e.RTCPeerConnection.prototype.removeTrack;
                e.RTCPeerConnection.prototype.removeTrack = function(e) { var t = this; return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach(function(n) { var r = t._shimmedLocalStreams[n].indexOf(e); - 1 !== r && t._shimmedLocalStreams[n].splice(r, 1), 1 === t._shimmedLocalStreams[n].length && delete t._shimmedLocalStreams[n] }), i.apply(this, arguments) } }, shimAddTrackRemoveTrack: function(e) { var t = jt.detectBrowser(e); if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return this.shimAddTrackRemoveTrackWithNative(e); var n = e.RTCPeerConnection.prototype.getLocalStreams;
                e.RTCPeerConnection.prototype.getLocalStreams = function() { var e = this,
                        t = n.apply(this); return e._reverseStreams = e._reverseStreams || {}, t.map(function(t) { return e._reverseStreams[t.id] }) }; var r = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function(t) { var n = this; if (n._streams = n._streams || {}, n._reverseStreams = n._reverseStreams || {}, t.getTracks().forEach(function(e) { if (n.getSenders().find(function(t) { return t.track === e })) throw new DOMException("Track already exists.", "InvalidAccessError") }), !n._reverseStreams[t.id]) { var i = new e.MediaStream(t.getTracks());
                        n._streams[t.id] = i, n._reverseStreams[i.id] = t, t = i }
                    r.apply(n, [t]) }; var i = e.RTCPeerConnection.prototype.removeStream;

                function a(e, t) { var n = t.sdp; return Object.keys(e._reverseStreams || []).forEach(function(t) { var r = e._reverseStreams[t],
                            i = e._streams[r.id];
                        n = n.replace(new RegExp(i.id, "g"), r.id) }), new RTCSessionDescription({ type: t.type, sdp: n }) }
                e.RTCPeerConnection.prototype.removeStream = function(e) { var t = this;
                    t._streams = t._streams || {}, t._reverseStreams = t._reverseStreams || {}, i.apply(t, [t._streams[e.id] || e]), delete t._reverseStreams[t._streams[e.id] ? t._streams[e.id].id : e.id], delete t._streams[e.id] }, e.RTCPeerConnection.prototype.addTrack = function(t, n) { var r = this; if ("closed" === r.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError"); var i = [].slice.call(arguments, 1); if (1 !== i.length || !i[0].getTracks().find(function(e) { return e === t })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError"); if (r.getSenders().find(function(e) { return e.track === t })) throw new DOMException("Track already exists.", "InvalidAccessError");
                    r._streams = r._streams || {}, r._reverseStreams = r._reverseStreams || {}; var a = r._streams[n.id]; if (a) a.addTrack(t), Promise.resolve().then(function() { r.dispatchEvent(new Event("negotiationneeded")) });
                    else { var o = new e.MediaStream([t]);
                        r._streams[n.id] = o, r._reverseStreams[o.id] = n, r.addStream(o) } return r.getSenders().find(function(e) { return e.track === t }) }, ["createOffer", "createAnswer"].forEach(function(t) { var n = e.RTCPeerConnection.prototype[t];
                    e.RTCPeerConnection.prototype[t] = function() { var e = this,
                            t = arguments; return arguments.length && "function" == typeof arguments[0] ? n.apply(e, [function(n) { var r = a(e, n);
                            t[0].apply(null, [r]) }, function(e) { t[1] && t[1].apply(null, e) }, arguments[2]]) : n.apply(e, arguments).then(function(t) { return a(e, t) }) } }); var o = e.RTCPeerConnection.prototype.setLocalDescription;
                e.RTCPeerConnection.prototype.setLocalDescription = function() { return arguments.length && arguments[0].type ? (arguments[0] = function(e, t) { var n = t.sdp; return Object.keys(e._reverseStreams || []).forEach(function(t) { var r = e._reverseStreams[t],
                                i = e._streams[r.id];
                            n = n.replace(new RegExp(r.id, "g"), i.id) }), new RTCSessionDescription({ type: t.type, sdp: n }) }(this, arguments[0]), o.apply(this, arguments)) : o.apply(this, arguments) }; var s = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
                Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", { get: function() { var e = s.get.apply(this); return "" === e.type ? e : a(this, e) } }), e.RTCPeerConnection.prototype.removeTrack = function(e) { var t, n = this; if ("closed" === n.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError"); if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError"); if (e._pc !== n) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                    n._streams = n._streams || {}, Object.keys(n._streams).forEach(function(r) { n._streams[r].getTracks().find(function(t) { return e.track === t }) && (t = n._streams[r]) }), t && (1 === t.getTracks().length ? n.removeStream(n._reverseStreams[t.id]) : t.removeTrack(e.track), n.dispatchEvent(new Event("negotiationneeded"))) } }, shimPeerConnection: function(e) { var t = jt.detectBrowser(e); if (!e.RTCPeerConnection && e.webkitRTCPeerConnection) e.RTCPeerConnection = function(t, n) { return Ut("PeerConnection"), t && t.iceTransportPolicy && (t.iceTransports = t.iceTransportPolicy), new e.webkitRTCPeerConnection(t, n) }, e.RTCPeerConnection.prototype = e.webkitRTCPeerConnection.prototype, e.webkitRTCPeerConnection.generateCertificate && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", { get: function() { return e.webkitRTCPeerConnection.generateCertificate } });
                else { var n = e.RTCPeerConnection;
                    e.RTCPeerConnection = function(e, t) { if (e && e.iceServers) { for (var r = [], i = 0; i < e.iceServers.length; i++) { var a = e.iceServers[i];!a.hasOwnProperty("urls") && a.hasOwnProperty("url") ? (jt.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (a = JSON.parse(JSON.stringify(a))).urls = a.url, r.push(a)) : r.push(e.iceServers[i]) }
                            e.iceServers = r } return new n(e, t) }, e.RTCPeerConnection.prototype = n.prototype, Object.defineProperty(e.RTCPeerConnection, "generateCertificate", { get: function() { return n.generateCertificate } }) } var r = e.RTCPeerConnection.prototype.getStats;
                e.RTCPeerConnection.prototype.getStats = function(e, t, n) { var i = this,
                        a = arguments; if (arguments.length > 0 && "function" == typeof e) return r.apply(this, arguments); if (0 === r.length && (0 === arguments.length || "function" != typeof arguments[0])) return r.apply(this, []); var o = function(e) { var t = {}; return e.result().forEach(function(e) { var n = { id: e.id, timestamp: e.timestamp, type: { localcandidate: "local-candidate", remotecandidate: "remote-candidate" }[e.type] || e.type };
                                e.names().forEach(function(t) { n[t] = e.stat(t) }), t[n.id] = n }), t },
                        s = function(e) { return new Map(Object.keys(e).map(function(t) { return [t, e[t]] })) }; return arguments.length >= 2 ? r.apply(this, [function(e) { a[1](s(o(e))) }, arguments[0]]) : new Promise(function(e, t) { r.apply(i, [function(t) { e(s(o(t))) }, t]) }).then(t, n) }, t.version < 51 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) { var n = e.RTCPeerConnection.prototype[t];
                    e.RTCPeerConnection.prototype[t] = function() { var e = arguments,
                            t = this,
                            r = new Promise(function(r, i) { n.apply(t, [e[0], r, i]) }); return e.length < 2 ? r : r.then(function() { e[1].apply(null, []) }, function(t) { e.length >= 3 && e[2].apply(null, [t]) }) } }), t.version < 52 && ["createOffer", "createAnswer"].forEach(function(t) { var n = e.RTCPeerConnection.prototype[t];
                    e.RTCPeerConnection.prototype[t] = function() { var e = this; if (arguments.length < 1 || 1 === arguments.length && "object" == typeof arguments[0]) { var t = 1 === arguments.length ? arguments[0] : void 0; return new Promise(function(r, i) { n.apply(e, [r, i, t]) }) } return n.apply(this, arguments) } }), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) { var n = e.RTCPeerConnection.prototype[t];
                    e.RTCPeerConnection.prototype[t] = function() { return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments) } }); var i = e.RTCPeerConnection.prototype.addIceCandidate;
                e.RTCPeerConnection.prototype.addIceCandidate = function() { return arguments[0] ? i.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve()) } }, fixNegotiationNeeded: function(e) { jt.wrapPeerConnectionEvent(e, "negotiationneeded", function(e) { if ("stable" === e.target.signalingState) return e }) }, shimGetDisplayMedia: function(e, t) { "getDisplayMedia" in e.navigator || ("function" == typeof t ? navigator.getDisplayMedia = function(e) { return t(e).then(function(t) { return e.video = { mandatory: { chromeMediaSource: "desktop", chromeMediaSourceId: t, maxFrameRate: e.video.frameRate || 3 } }, navigator.mediaDevices.getUserMedia(e) }) } : console.error("shimGetDisplayMedia: getSourceId argument is not a function")) } },
        Bt = r(function(e) { var t = { generateIdentifier: function() { return Math.random().toString(36).substr(2, 10) } };
            t.localCName = t.generateIdentifier(), t.splitLines = function(e) { return e.trim().split("\n").map(function(e) { return e.trim() }) }, t.splitSections = function(e) { return e.split("\nm=").map(function(e, t) { return (t > 0 ? "m=" + e : e).trim() + "\r\n" }) }, t.getDescription = function(e) { var n = t.splitSections(e); return n && n[0] }, t.getMediaSections = function(e) { var n = t.splitSections(e); return n.shift(), n }, t.matchPrefix = function(e, n) { return t.splitLines(e).filter(function(e) { return 0 === e.indexOf(n) }) }, t.parseCandidate = function(e) { for (var t, n = { foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0], component: parseInt(t[1], 10), protocol: t[2].toLowerCase(), priority: parseInt(t[3], 10), ip: t[4], port: parseInt(t[5], 10), type: t[7] }, r = 8; r < t.length; r += 2) switch (t[r]) {
                    case "raddr":
                        n.relatedAddress = t[r + 1]; break;
                    case "rport":
                        n.relatedPort = parseInt(t[r + 1], 10); break;
                    case "tcptype":
                        n.tcpType = t[r + 1]; break;
                    case "ufrag":
                        n.ufrag = t[r + 1], n.usernameFragment = t[r + 1]; break;
                    default:
                        n[t[r]] = t[r + 1] }
                return n }, t.writeCandidate = function(e) { var t = [];
                t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.ip), t.push(e.port); var n = e.type; return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)), "candidate:" + t.join(" ") }, t.parseIceOptions = function(e) { return e.substr(14).split(" ") }, t.parseRtpMap = function(e) { var t = e.substr(9).split(" "),
                    n = { payloadType: parseInt(t.shift(), 10) }; return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.numChannels = 3 === t.length ? parseInt(t[2], 10) : 1, n }, t.writeRtpMap = function(e) { var t = e.payloadType; return void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType), "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== e.numChannels ? "/" + e.numChannels : "") + "\r\n" }, t.parseExtmap = function(e) { var t = e.substr(9).split(" "); return { id: parseInt(t[0], 10), direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv", uri: t[1] } }, t.writeExtmap = function(e) { return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n" }, t.parseFmtp = function(e) { for (var t, n = {}, r = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < r.length; i++) n[(t = r[i].trim().split("="))[0].trim()] = t[1]; return n }, t.writeFmtp = function(e) { var t = "",
                    n = e.payloadType; if (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) { var r = [];
                    Object.keys(e.parameters).forEach(function(t) { r.push(t + "=" + e.parameters[t]) }), t += "a=fmtp:" + n + " " + r.join(";") + "\r\n" } return t }, t.parseRtcpFb = function(e) { var t = e.substr(e.indexOf(" ") + 1).split(" "); return { type: t.shift(), parameter: t.join(" ") } }, t.writeRtcpFb = function(e) { var t = "",
                    n = e.payloadType; return void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function(e) { t += "a=rtcp-fb:" + n + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n" }), t }, t.parseSsrcMedia = function(e) { var t = e.indexOf(" "),
                    n = { ssrc: parseInt(e.substr(7, t - 7), 10) },
                    r = e.indexOf(":", t); return r > -1 ? (n.attribute = e.substr(t + 1, r - t - 1), n.value = e.substr(r + 1)) : n.attribute = e.substr(t + 1), n }, t.getMid = function(e) { var n = t.matchPrefix(e, "a=mid:")[0]; if (n) return n.substr(6) }, t.parseFingerprint = function(e) { var t = e.substr(14).split(" "); return { algorithm: t[0].toLowerCase(), value: t[1] } }, t.getDtlsParameters = function(e, n) { return { role: "auto", fingerprints: t.matchPrefix(e + n, "a=fingerprint:").map(t.parseFingerprint) } }, t.writeDtlsParameters = function(e, t) { var n = "a=setup:" + t + "\r\n"; return e.fingerprints.forEach(function(e) { n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n" }), n }, t.getIceParameters = function(e, n) { var r = t.splitLines(e); return { usernameFragment: (r = r.concat(t.splitLines(n))).filter(function(e) { return 0 === e.indexOf("a=ice-ufrag:") })[0].substr(12), password: r.filter(function(e) { return 0 === e.indexOf("a=ice-pwd:") })[0].substr(10) } }, t.writeIceParameters = function(e) { return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n" }, t.parseRtpParameters = function(e) { for (var n = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] }, r = t.splitLines(e)[0].split(" "), i = 3; i < r.length; i++) { var a = r[i],
                        o = t.matchPrefix(e, "a=rtpmap:" + a + " ")[0]; if (o) { var s = t.parseRtpMap(o),
                            c = t.matchPrefix(e, "a=fmtp:" + a + " "); switch (s.parameters = c.length ? t.parseFmtp(c[0]) : {}, s.rtcpFeedback = t.matchPrefix(e, "a=rtcp-fb:" + a + " ").map(t.parseRtcpFb), n.codecs.push(s), s.name.toUpperCase()) {
                            case "RED":
                            case "ULPFEC":
                                n.fecMechanisms.push(s.name.toUpperCase()) } } } return t.matchPrefix(e, "a=extmap:").forEach(function(e) { n.headerExtensions.push(t.parseExtmap(e)) }), n }, t.writeRtpDescription = function(e, n) { var r = "";
                r += "m=" + e + " ", r += n.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += n.codecs.map(function(e) { return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType }).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", n.codecs.forEach(function(e) { r += t.writeRtpMap(e), r += t.writeFmtp(e), r += t.writeRtcpFb(e) }); var i = 0; return n.codecs.forEach(function(e) { e.maxptime > i && (i = e.maxptime) }), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", n.headerExtensions.forEach(function(e) { r += t.writeExtmap(e) }), r }, t.parseRtpEncodingParameters = function(e) { var n, r = [],
                    i = t.parseRtpParameters(e),
                    a = -1 !== i.fecMechanisms.indexOf("RED"),
                    o = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
                    s = t.matchPrefix(e, "a=ssrc:").map(function(e) { return t.parseSsrcMedia(e) }).filter(function(e) { return "cname" === e.attribute }),
                    c = s.length > 0 && s[0].ssrc,
                    d = t.matchPrefix(e, "a=ssrc-group:FID").map(function(e) { var t = e.split(" "); return t.shift(), t.map(function(e) { return parseInt(e, 10) }) });
                d.length > 0 && d[0].length > 1 && d[0][0] === c && (n = d[0][1]), i.codecs.forEach(function(e) { if ("RTX" === e.name.toUpperCase() && e.parameters.apt) { var t = { ssrc: c, codecPayloadType: parseInt(e.parameters.apt, 10), rtx: { ssrc: n } };
                        r.push(t), a && ((t = JSON.parse(JSON.stringify(t))).fec = { ssrc: n, mechanism: o ? "red+ulpfec" : "red" }, r.push(t)) } }), 0 === r.length && c && r.push({ ssrc: c }); var u = t.matchPrefix(e, "b="); return u.length && (u = 0 === u[0].indexOf("b=TIAS:") ? parseInt(u[0].substr(7), 10) : 0 === u[0].indexOf("b=AS:") ? 1e3 * parseInt(u[0].substr(5), 10) * .95 - 16e3 : void 0, r.forEach(function(e) { e.maxBitrate = u })), r }, t.parseRtcpParameters = function(e) { var n = {},
                    r = t.matchPrefix(e, "a=ssrc:").map(function(e) { return t.parseSsrcMedia(e) }).filter(function(e) { return "cname" === e.attribute })[0];
                r && (n.cname = r.value, n.ssrc = r.ssrc); var i = t.matchPrefix(e, "a=rtcp-rsize");
                n.reducedSize = i.length > 0, n.compound = 0 === i.length; var a = t.matchPrefix(e, "a=rtcp-mux"); return n.mux = a.length > 0, n }, t.parseMsid = function(e) { var n, r = t.matchPrefix(e, "a=msid:"); if (1 === r.length) return { stream: (n = r[0].substr(7).split(" "))[0], track: n[1] }; var i = t.matchPrefix(e, "a=ssrc:").map(function(e) { return t.parseSsrcMedia(e) }).filter(function(e) { return "msid" === e.attribute }); return i.length > 0 ? { stream: (n = i[0].value.split(" "))[0], track: n[1] } : void 0 }, t.generateSessionId = function() { return Math.random().toString().substr(2, 21) }, t.writeSessionBoilerplate = function(e, n) { var r = void 0 !== n ? n : 2; return "v=0\r\no=thisisadapterortc " + (e || t.generateSessionId()) + " " + r + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n" }, t.writeMediaSection = function(e, n, r, i) { var a = t.writeRtpDescription(e.kind, n); if (a += t.writeIceParameters(e.iceGatherer.getLocalParameters()), a += t.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), a += "a=mid:" + e.mid + "\r\n", e.direction ? a += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) { var o = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
                    a += "a=" + o, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + o, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + o, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n") } return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + t.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + t.localCName + "\r\n"), a }, t.getDirection = function(e, n) { for (var r = t.splitLines(e), i = 0; i < r.length; i++) switch (r[i]) {
                    case "a=sendrecv":
                    case "a=sendonly":
                    case "a=recvonly":
                    case "a=inactive":
                        return r[i].substr(2) }
                return n ? t.getDirection(n) : "sendrecv" }, t.getKind = function(e) { return t.splitLines(e)[0].split(" ")[0].substr(2) }, t.isRejected = function(e) { return "0" === e.split(" ", 2)[1] }, t.parseMLine = function(e) { var n = t.splitLines(e)[0].substr(2).split(" "); return { kind: n[0], port: parseInt(n[1], 10), protocol: n[2], fmt: n.slice(3).join(" ") } }, t.parseOLine = function(e) { var n = t.matchPrefix(e, "o=")[0].substr(2).split(" "); return { username: n[0], sessionId: n[1], sessionVersion: parseInt(n[2], 10), netType: n[3], addressType: n[4], address: n[5] } }, e.exports = t });

    function Wt(e, t, n, r, i) { var a = Bt.writeRtpDescription(e.kind, t); if (a += Bt.writeIceParameters(e.iceGatherer.getLocalParameters()), a += Bt.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : i || "active"), a += "a=mid:" + e.mid + "\r\n", e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) { var o = e.rtpSender._initialTrackId || e.rtpSender.track.id;
            e.rtpSender._initialTrackId = o; var s = "msid:" + (r ? r.id : "-") + " " + o + "\r\n";
            a += "a=" + s, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + s, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + s, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n") } return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + Bt.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + Bt.localCName + "\r\n"), a }

    function Yt(e, t) { var n = { codecs: [], headerExtensions: [], fecMechanisms: [] },
            r = function(e, t) { e = parseInt(e, 10); for (var n = 0; n < t.length; n++)
                    if (t[n].payloadType === e || t[n].preferredPayloadType === e) return t[n] },
            i = function(e, t, n, i) { var a = r(e.parameters.apt, n),
                    o = r(t.parameters.apt, i); return a && o && a.name.toLowerCase() === o.name.toLowerCase() }; return e.codecs.forEach(function(r) { for (var a = 0; a < t.codecs.length; a++) { var o = t.codecs[a]; if (r.name.toLowerCase() === o.name.toLowerCase() && r.clockRate === o.clockRate) { if ("rtx" === r.name.toLowerCase() && r.parameters && o.parameters.apt && !i(r, o, e.codecs, t.codecs)) continue;
                    (o = JSON.parse(JSON.stringify(o))).numChannels = Math.min(r.numChannels, o.numChannels), n.codecs.push(o), o.rtcpFeedback = o.rtcpFeedback.filter(function(e) { for (var t = 0; t < r.rtcpFeedback.length; t++)
                            if (r.rtcpFeedback[t].type === e.type && r.rtcpFeedback[t].parameter === e.parameter) return !0;
                        return !1 }); break } } }), e.headerExtensions.forEach(function(e) { for (var r = 0; r < t.headerExtensions.length; r++) { var i = t.headerExtensions[r]; if (e.uri === i.uri) { n.headerExtensions.push(i); break } } }), n }

    function Qt(e, t, n) { return -1 !== { offer: { setLocalDescription: ["stable", "have-local-offer"], setRemoteDescription: ["stable", "have-remote-offer"] }, answer: { setLocalDescription: ["have-remote-offer", "have-local-pranswer"], setRemoteDescription: ["have-local-offer", "have-remote-pranswer"] } }[t][e].indexOf(n) }

    function Ht(e, t) { var n = e.getRemoteCandidates().find(function(e) { return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type }); return n || e.addRemoteCandidate(t), !n }

    function Zt(e, t) { var n = new Error(t); return n.name = e, n.code = { NotSupportedError: 9, InvalidStateError: 11, InvalidAccessError: 15, TypeError: void 0, OperationError: void 0 }[e], n }
    var qt = { shimGetUserMedia: function(e) { var t = e && e.navigator,
                    n = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
                t.mediaDevices.getUserMedia = function(e) { return n(e).catch(function(e) { return Promise.reject(function(e) { return { name: { PermissionDeniedError: "NotAllowedError" }[e.name] || e.name, message: e.message, constraint: e.constraint, toString: function() { return this.name } } }(e)) }) } }, shimPeerConnection: function(e) { var t = jt.detectBrowser(e); if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function(e) { return e }), e.RTCSessionDescription || (e.RTCSessionDescription = function(e) { return e }), t.version < 15025)) { var n = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
                    Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", { set: function(e) { n.set.call(this, e); var t = new Event("enabled");
                            t.enabled = e, this.dispatchEvent(t) } }) }!e.RTCRtpSender || "dtmf" in e.RTCRtpSender.prototype || Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", { get: function() { return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf } }), e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender); var r = function(e, t) {
                    function n(t, n) { n.addTrack(t), n.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", { track: t })) }

                    function r(t, n, r, i) { var a = new Event("track");
                        a.track = n, a.receiver = r, a.transceiver = { receiver: r }, a.streams = i, e.setTimeout(function() { t._dispatchEvent("track", a) }) } var i = function(n) { var r = this,
                            i = document.createDocumentFragment(); if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function(e) { r[e] = i[e].bind(i) }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this.localDescription = null, this.remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.connectionState = "new", this.iceGatheringState = "new", n = JSON.parse(JSON.stringify(n || {})), this.usingBundle = "max-bundle" === n.bundlePolicy, "negotiate" === n.rtcpMuxPolicy) throw Zt("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported"); switch (n.rtcpMuxPolicy || (n.rtcpMuxPolicy = "require"), n.iceTransportPolicy) {
                            case "all":
                            case "relay":
                                break;
                            default:
                                n.iceTransportPolicy = "all" } switch (n.bundlePolicy) {
                            case "balanced":
                            case "max-compat":
                            case "max-bundle":
                                break;
                            default:
                                n.bundlePolicy = "balanced" } if (n.iceServers = function(e, t) { var n = !1; return (e = JSON.parse(JSON.stringify(e))).filter(function(e) { if (e && (e.urls || e.url)) { var r = e.urls || e.url;
                                        e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead."); var i = "string" == typeof r; return i && (r = [r]), r = r.filter(function(e) { return 0 !== e.indexOf("turn:") || -1 === e.indexOf("transport=udp") || -1 !== e.indexOf("turn:[") || n ? 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp") : (n = !0, !0) }), delete e.url, e.urls = i ? r[0] : r, !!r.length } }) }(n.iceServers || [], t), this._iceGatherers = [], n.iceCandidatePoolSize)
                            for (var a = n.iceCandidatePoolSize; a > 0; a--) this._iceGatherers.push(new e.RTCIceGatherer({ iceServers: n.iceServers, gatherPolicy: n.iceTransportPolicy }));
                        else n.iceCandidatePoolSize = 0;
                        this._config = n, this.transceivers = [], this._sdpSessionId = Bt.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1 };
                    i.prototype.onicecandidate = null, i.prototype.onaddstream = null, i.prototype.ontrack = null, i.prototype.onremovestream = null, i.prototype.onsignalingstatechange = null, i.prototype.oniceconnectionstatechange = null, i.prototype.onconnectionstatechange = null, i.prototype.onicegatheringstatechange = null, i.prototype.onnegotiationneeded = null, i.prototype.ondatachannel = null, i.prototype._dispatchEvent = function(e, t) { this._isClosed || (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t)) }, i.prototype._emitGatheringStateChange = function() { var e = new Event("icegatheringstatechange");
                        this._dispatchEvent("icegatheringstatechange", e) }, i.prototype.getConfiguration = function() { return this._config }, i.prototype.getLocalStreams = function() { return this.localStreams }, i.prototype.getRemoteStreams = function() { return this.remoteStreams }, i.prototype._createTransceiver = function(e, t) { var n = this.transceivers.length > 0,
                            r = { track: null, iceGatherer: null, iceTransport: null, dtlsTransport: null, localCapabilities: null, remoteCapabilities: null, rtpSender: null, rtpReceiver: null, kind: e, mid: null, sendEncodingParameters: null, recvEncodingParameters: null, stream: null, associatedRemoteMediaStreams: [], wantReceive: !0 }; if (this.usingBundle && n) r.iceTransport = this.transceivers[0].iceTransport, r.dtlsTransport = this.transceivers[0].dtlsTransport;
                        else { var i = this._createIceAndDtlsTransports();
                            r.iceTransport = i.iceTransport, r.dtlsTransport = i.dtlsTransport } return t || this.transceivers.push(r), r }, i.prototype.addTrack = function(t, n) { if (this._isClosed) throw Zt("InvalidStateError", "Attempted to call addTrack on a closed peerconnection."); var r; if (this.transceivers.find(function(e) { return e.track === t })) throw Zt("InvalidAccessError", "Track already exists."); for (var i = 0; i < this.transceivers.length; i++) this.transceivers[i].track || this.transceivers[i].kind !== t.kind || (r = this.transceivers[i]); return r || (r = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(n) && this.localStreams.push(n), r.track = t, r.stream = n, r.rtpSender = new e.RTCRtpSender(t, r.dtlsTransport), r.rtpSender }, i.prototype.addStream = function(e) { var n = this; if (t >= 15025) e.getTracks().forEach(function(t) { n.addTrack(t, e) });
                        else { var r = e.clone();
                            e.getTracks().forEach(function(e, t) { var n = r.getTracks()[t];
                                e.addEventListener("enabled", function(e) { n.enabled = e.enabled }) }), r.getTracks().forEach(function(e) { n.addTrack(e, r) }) } }, i.prototype.removeTrack = function(t) { if (this._isClosed) throw Zt("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection."); if (!(t instanceof e.RTCRtpSender)) throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender."); var n = this.transceivers.find(function(e) { return e.rtpSender === t }); if (!n) throw Zt("InvalidAccessError", "Sender was not created by this connection."); var r = n.stream;
                        n.rtpSender.stop(), n.rtpSender = null, n.track = null, n.stream = null, -1 === this.transceivers.map(function(e) { return e.stream }).indexOf(r) && this.localStreams.indexOf(r) > -1 && this.localStreams.splice(this.localStreams.indexOf(r), 1), this._maybeFireNegotiationNeeded() }, i.prototype.removeStream = function(e) { var t = this;
                        e.getTracks().forEach(function(e) { var n = t.getSenders().find(function(t) { return t.track === e });
                            n && t.removeTrack(n) }) }, i.prototype.getSenders = function() { return this.transceivers.filter(function(e) { return !!e.rtpSender }).map(function(e) { return e.rtpSender }) }, i.prototype.getReceivers = function() { return this.transceivers.filter(function(e) { return !!e.rtpReceiver }).map(function(e) { return e.rtpReceiver }) }, i.prototype._createIceGatherer = function(t, n) { var r = this; if (n && t > 0) return this.transceivers[0].iceGatherer; if (this._iceGatherers.length) return this._iceGatherers.shift(); var i = new e.RTCIceGatherer({ iceServers: this._config.iceServers, gatherPolicy: this._config.iceTransportPolicy }); return Object.defineProperty(i, "state", { value: "new", writable: !0 }), this.transceivers[t].bufferedCandidateEvents = [], this.transceivers[t].bufferCandidates = function(e) { var n = !e.candidate || 0 === Object.keys(e.candidate).length;
                            i.state = n ? "completed" : "gathering", null !== r.transceivers[t].bufferedCandidateEvents && r.transceivers[t].bufferedCandidateEvents.push(e) }, i.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), i }, i.prototype._gather = function(t, n) { var r = this,
                            i = this.transceivers[n].iceGatherer; if (!i.onlocalcandidate) { var a = this.transceivers[n].bufferedCandidateEvents;
                            this.transceivers[n].bufferedCandidateEvents = null, i.removeEventListener("localcandidate", this.transceivers[n].bufferCandidates), i.onlocalcandidate = function(e) { if (!(r.usingBundle && n > 0)) { var a = new Event("icecandidate");
                                    a.candidate = { sdpMid: t, sdpMLineIndex: n }; var o = e.candidate,
                                        s = !o || 0 === Object.keys(o).length; if (s) "new" !== i.state && "gathering" !== i.state || (i.state = "completed");
                                    else { "new" === i.state && (i.state = "gathering"), o.component = 1, o.ufrag = i.getLocalParameters().usernameFragment; var c = Bt.writeCandidate(o);
                                        a.candidate = Object.assign(a.candidate, Bt.parseCandidate(c)), a.candidate.candidate = c, a.candidate.toJSON = function() { return { candidate: a.candidate.candidate, sdpMid: a.candidate.sdpMid, sdpMLineIndex: a.candidate.sdpMLineIndex, usernameFragment: a.candidate.usernameFragment } } } var d = Bt.getMediaSections(r.localDescription.sdp);
                                    d[a.candidate.sdpMLineIndex] += s ? "a=end-of-candidates\r\n" : "a=" + a.candidate.candidate + "\r\n", r.localDescription.sdp = Bt.getDescription(r.localDescription.sdp) + d.join(""); var u = r.transceivers.every(function(e) { return e.iceGatherer && "completed" === e.iceGatherer.state }); "gathering" !== r.iceGatheringState && (r.iceGatheringState = "gathering", r._emitGatheringStateChange()), s || r._dispatchEvent("icecandidate", a), u && (r._dispatchEvent("icecandidate", new Event("icecandidate")), r.iceGatheringState = "complete", r._emitGatheringStateChange()) } }, e.setTimeout(function() { a.forEach(function(e) { i.onlocalcandidate(e) }) }, 0) } }, i.prototype._createIceAndDtlsTransports = function() { var t = this,
                            n = new e.RTCIceTransport(null);
                        n.onicestatechange = function() { t._updateIceConnectionState(), t._updateConnectionState() }; var r = new e.RTCDtlsTransport(n); return r.ondtlsstatechange = function() { t._updateConnectionState() }, r.onerror = function() { Object.defineProperty(r, "state", { value: "failed", writable: !0 }), t._updateConnectionState() }, { iceTransport: n, dtlsTransport: r } }, i.prototype._disposeIceAndDtlsTransports = function(e) { var t = this.transceivers[e].iceGatherer;
                        t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer); var n = this.transceivers[e].iceTransport;
                        n && (delete n.onicestatechange, delete this.transceivers[e].iceTransport); var r = this.transceivers[e].dtlsTransport;
                        r && (delete r.ondtlsstatechange, delete r.onerror, delete this.transceivers[e].dtlsTransport) }, i.prototype._transceive = function(e, n, r) { var i = Yt(e.localCapabilities, e.remoteCapabilities);
                        n && e.rtpSender && (i.encodings = e.sendEncodingParameters, i.rtcp = { cname: Bt.localCName, compound: e.rtcpParameters.compound }, e.recvEncodingParameters.length && (i.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(i)), r && e.rtpReceiver && i.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && t < 15019 && e.recvEncodingParameters.forEach(function(e) { delete e.rtx }), e.recvEncodingParameters.length ? i.encodings = e.recvEncodingParameters : i.encodings = [{}], i.rtcp = { compound: e.rtcpParameters.compound }, e.rtcpParameters.cname && (i.rtcp.cname = e.rtcpParameters.cname), e.sendEncodingParameters.length && (i.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(i)) }, i.prototype.setLocalDescription = function(e) { var t, n, r = this; if (-1 === ["offer", "answer"].indexOf(e.type)) return Promise.reject(Zt("TypeError", 'Unsupported type "' + e.type + '"')); if (!Qt("setLocalDescription", e.type, r.signalingState) || r._isClosed) return Promise.reject(Zt("InvalidStateError", "Can not set local " + e.type + " in state " + r.signalingState)); if ("offer" === e.type) t = Bt.splitSections(e.sdp), n = t.shift(), t.forEach(function(e, t) { var n = Bt.parseRtpParameters(e);
                            r.transceivers[t].localCapabilities = n }), r.transceivers.forEach(function(e, t) { r._gather(e.mid, t) });
                        else if ("answer" === e.type) { t = Bt.splitSections(r.remoteDescription.sdp), n = t.shift(); var i = Bt.matchPrefix(n, "a=ice-lite").length > 0;
                            t.forEach(function(e, t) { var a = r.transceivers[t],
                                    o = a.iceGatherer,
                                    s = a.iceTransport,
                                    c = a.dtlsTransport,
                                    d = a.localCapabilities,
                                    u = a.remoteCapabilities; if (!(Bt.isRejected(e) && 0 === Bt.matchPrefix(e, "a=bundle-only").length || a.rejected)) { var l = Bt.getIceParameters(e, n),
                                        p = Bt.getDtlsParameters(e, n);
                                    i && (p.role = "server"), r.usingBundle && 0 !== t || (r._gather(a.mid, t), "new" === s.state && s.start(o, l, i ? "controlling" : "controlled"), "new" === c.state && c.start(p)); var f = Yt(d, u);
                                    r._transceive(a, f.codecs.length > 0, !1) } }) } return r.localDescription = { type: e.type, sdp: e.sdp }, "offer" === e.type ? r._updateSignalingState("have-local-offer") : r._updateSignalingState("stable"), Promise.resolve() }, i.prototype.setRemoteDescription = function(i) { var a = this; if (-1 === ["offer", "answer"].indexOf(i.type)) return Promise.reject(Zt("TypeError", 'Unsupported type "' + i.type + '"')); if (!Qt("setRemoteDescription", i.type, a.signalingState) || a._isClosed) return Promise.reject(Zt("InvalidStateError", "Can not set remote " + i.type + " in state " + a.signalingState)); var o = {};
                        a.remoteStreams.forEach(function(e) { o[e.id] = e }); var s = [],
                            c = Bt.splitSections(i.sdp),
                            d = c.shift(),
                            u = Bt.matchPrefix(d, "a=ice-lite").length > 0,
                            l = Bt.matchPrefix(d, "a=group:BUNDLE ").length > 0;
                        a.usingBundle = l; var p = Bt.matchPrefix(d, "a=ice-options:")[0]; return a.canTrickleIceCandidates = !!p && p.substr(14).split(" ").indexOf("trickle") >= 0, c.forEach(function(r, c) { var p = Bt.splitLines(r),
                                f = Bt.getKind(r),
                                m = Bt.isRejected(r) && 0 === Bt.matchPrefix(r, "a=bundle-only").length,
                                h = p[0].substr(2).split(" ")[2],
                                v = Bt.getDirection(r, d),
                                g = Bt.parseMsid(r),
                                y = Bt.getMid(r) || Bt.generateIdentifier(); if ("application" === f && "DTLS/SCTP" === h || m) a.transceivers[c] = { mid: y, kind: f, rejected: !0 };
                            else { var b, S, w, C, T, E, _, M, k;!m && a.transceivers[c] && a.transceivers[c].rejected && (a.transceivers[c] = a._createTransceiver(f, !0)); var A, V, I = Bt.parseRtpParameters(r);
                                m || (A = Bt.getIceParameters(r, d), (V = Bt.getDtlsParameters(r, d)).role = "client"), _ = Bt.parseRtpEncodingParameters(r); var P = Bt.parseRtcpParameters(r),
                                    L = Bt.matchPrefix(r, "a=end-of-candidates", d).length > 0,
                                    x = Bt.matchPrefix(r, "a=candidate:").map(function(e) { return Bt.parseCandidate(e) }).filter(function(e) { return 1 === e.component }); if (("offer" === i.type || "answer" === i.type) && !m && l && c > 0 && a.transceivers[c] && (a._disposeIceAndDtlsTransports(c), a.transceivers[c].iceGatherer = a.transceivers[0].iceGatherer, a.transceivers[c].iceTransport = a.transceivers[0].iceTransport, a.transceivers[c].dtlsTransport = a.transceivers[0].dtlsTransport, a.transceivers[c].rtpSender && a.transceivers[c].rtpSender.setTransport(a.transceivers[0].dtlsTransport), a.transceivers[c].rtpReceiver && a.transceivers[c].rtpReceiver.setTransport(a.transceivers[0].dtlsTransport)), "offer" !== i.type || m) "answer" !== i.type || m || (S = (b = a.transceivers[c]).iceGatherer, w = b.iceTransport, C = b.dtlsTransport, T = b.rtpReceiver, E = b.sendEncodingParameters, M = b.localCapabilities, a.transceivers[c].recvEncodingParameters = _, a.transceivers[c].remoteCapabilities = I, a.transceivers[c].rtcpParameters = P, x.length && "new" === w.state && (!u && !L || l && 0 !== c ? x.forEach(function(e) { Ht(b.iceTransport, e) }) : w.setRemoteCandidates(x)), l && 0 !== c || ("new" === w.state && w.start(S, A, "controlling"), "new" === C.state && C.start(V)), a._transceive(b, "sendrecv" === v || "recvonly" === v, "sendrecv" === v || "sendonly" === v), !T || "sendrecv" !== v && "sendonly" !== v ? delete b.rtpReceiver : (k = T.track, g ? (o[g.stream] || (o[g.stream] = new e.MediaStream), n(k, o[g.stream]), s.push([k, T, o[g.stream]])) : (o.default || (o.default = new e.MediaStream), n(k, o.default), s.push([k, T, o.default]))));
                                else {
                                    (b = a.transceivers[c] || a._createTransceiver(f)).mid = y, b.iceGatherer || (b.iceGatherer = a._createIceGatherer(c, l)), x.length && "new" === b.iceTransport.state && (!L || l && 0 !== c ? x.forEach(function(e) { Ht(b.iceTransport, e) }) : b.iceTransport.setRemoteCandidates(x)), M = e.RTCRtpReceiver.getCapabilities(f), t < 15019 && (M.codecs = M.codecs.filter(function(e) { return "rtx" !== e.name })), E = b.sendEncodingParameters || [{ ssrc: 1001 * (2 * c + 2) }]; var R, N = !1; "sendrecv" === v || "sendonly" === v ? (N = !b.rtpReceiver, T = b.rtpReceiver || new e.RTCRtpReceiver(b.dtlsTransport, f), N && (k = T.track, g && "-" === g.stream || (g ? (o[g.stream] || (o[g.stream] = new e.MediaStream, Object.defineProperty(o[g.stream], "id", { get: function() { return g.stream } })), Object.defineProperty(k, "id", { get: function() { return g.track } }), R = o[g.stream]) : (o.default || (o.default = new e.MediaStream), R = o.default)), R && (n(k, R), b.associatedRemoteMediaStreams.push(R)), s.push([k, T, R]))) : b.rtpReceiver && b.rtpReceiver.track && (b.associatedRemoteMediaStreams.forEach(function(t) { var n, r, i = t.getTracks().find(function(e) { return e.id === b.rtpReceiver.track.id });
                                        i && (n = i, (r = t).removeTrack(n), r.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", { track: n }))) }), b.associatedRemoteMediaStreams = []), b.localCapabilities = M, b.remoteCapabilities = I, b.rtpReceiver = T, b.rtcpParameters = P, b.sendEncodingParameters = E, b.recvEncodingParameters = _, a._transceive(a.transceivers[c], !1, N) } } }), void 0 === a._dtlsRole && (a._dtlsRole = "offer" === i.type ? "active" : "passive"), a.remoteDescription = { type: i.type, sdp: i.sdp }, "offer" === i.type ? a._updateSignalingState("have-remote-offer") : a._updateSignalingState("stable"), Object.keys(o).forEach(function(t) { var n = o[t]; if (n.getTracks().length) { if (-1 === a.remoteStreams.indexOf(n)) { a.remoteStreams.push(n); var i = new Event("addstream");
                                    i.stream = n, e.setTimeout(function() { a._dispatchEvent("addstream", i) }) }
                                s.forEach(function(e) { var t = e[0],
                                        i = e[1];
                                    n.id === e[2].id && r(a, t, i, [n]) }) } }), s.forEach(function(e) { e[2] || r(a, e[0], e[1], []) }), e.setTimeout(function() { a && a.transceivers && a.transceivers.forEach(function(e) { e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({})) }) }, 4e3), Promise.resolve() }, i.prototype.close = function() { this.transceivers.forEach(function(e) { e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop() }), this._isClosed = !0, this._updateSignalingState("closed") }, i.prototype._updateSignalingState = function(e) { this.signalingState = e; var t = new Event("signalingstatechange");
                        this._dispatchEvent("signalingstatechange", t) }, i.prototype._maybeFireNegotiationNeeded = function() { var t = this; "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout(function() { if (t.needNegotiation) { t.needNegotiation = !1; var e = new Event("negotiationneeded");
                                t._dispatchEvent("negotiationneeded", e) } }, 0)) }, i.prototype._updateIceConnectionState = function() { var e, t = { new: 0, closed: 0, checking: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 }; if (this.transceivers.forEach(function(e) { t[e.iceTransport.state]++ }), e = "new", t.failed > 0 ? e = "failed" : t.checking > 0 ? e = "checking" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 ? e = "connected" : t.completed > 0 && (e = "completed"), e !== this.iceConnectionState) { this.iceConnectionState = e; var n = new Event("iceconnectionstatechange");
                            this._dispatchEvent("iceconnectionstatechange", n) } }, i.prototype._updateConnectionState = function() { var e, t = { new: 0, closed: 0, connecting: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 }; if (this.transceivers.forEach(function(e) { t[e.iceTransport.state]++, t[e.dtlsTransport.state]++ }), t.connected += t.completed, e = "new", t.failed > 0 ? e = "failed" : t.connecting > 0 ? e = "connecting" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : t.connected > 0 && (e = "connected"), e !== this.connectionState) { this.connectionState = e; var n = new Event("connectionstatechange");
                            this._dispatchEvent("connectionstatechange", n) } }, i.prototype.createOffer = function() { var n = this; if (n._isClosed) return Promise.reject(Zt("InvalidStateError", "Can not call createOffer after close")); var r = n.transceivers.filter(function(e) { return "audio" === e.kind }).length,
                            i = n.transceivers.filter(function(e) { return "video" === e.kind }).length,
                            a = arguments[0]; if (a) { if (a.mandatory || a.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                            void 0 !== a.offerToReceiveAudio && (r = !0 === a.offerToReceiveAudio ? 1 : !1 === a.offerToReceiveAudio ? 0 : a.offerToReceiveAudio), void 0 !== a.offerToReceiveVideo && (i = !0 === a.offerToReceiveVideo ? 1 : !1 === a.offerToReceiveVideo ? 0 : a.offerToReceiveVideo) } for (n.transceivers.forEach(function(e) { "audio" === e.kind ? --r < 0 && (e.wantReceive = !1) : "video" === e.kind && --i < 0 && (e.wantReceive = !1) }); r > 0 || i > 0;) r > 0 && (n._createTransceiver("audio"), r--), i > 0 && (n._createTransceiver("video"), i--); var o = Bt.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
                        n.transceivers.forEach(function(r, i) { var a = r.track,
                                o = r.kind,
                                s = r.mid || Bt.generateIdentifier();
                            r.mid = s, r.iceGatherer || (r.iceGatherer = n._createIceGatherer(i, n.usingBundle)); var c = e.RTCRtpSender.getCapabilities(o);
                            t < 15019 && (c.codecs = c.codecs.filter(function(e) { return "rtx" !== e.name })), c.codecs.forEach(function(e) { "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1"), r.remoteCapabilities && r.remoteCapabilities.codecs && r.remoteCapabilities.codecs.forEach(function(t) { e.name.toLowerCase() === t.name.toLowerCase() && e.clockRate === t.clockRate && (e.preferredPayloadType = t.payloadType) }) }), c.headerExtensions.forEach(function(e) {
                                (r.remoteCapabilities && r.remoteCapabilities.headerExtensions || []).forEach(function(t) { e.uri === t.uri && (e.id = t.id) }) }); var d = r.sendEncodingParameters || [{ ssrc: 1001 * (2 * i + 1) }];
                            a && t >= 15019 && "video" === o && !d[0].rtx && (d[0].rtx = { ssrc: d[0].ssrc + 1 }), r.wantReceive && (r.rtpReceiver = new e.RTCRtpReceiver(r.dtlsTransport, o)), r.localCapabilities = c, r.sendEncodingParameters = d }), "max-compat" !== n._config.bundlePolicy && (o += "a=group:BUNDLE " + n.transceivers.map(function(e) { return e.mid }).join(" ") + "\r\n"), o += "a=ice-options:trickle\r\n", n.transceivers.forEach(function(e, t) { o += Wt(e, e.localCapabilities, "offer", e.stream, n._dtlsRole), o += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === n.iceGatheringState || 0 !== t && n.usingBundle || (e.iceGatherer.getLocalCandidates().forEach(function(e) { e.component = 1, o += "a=" + Bt.writeCandidate(e) + "\r\n" }), "completed" === e.iceGatherer.state && (o += "a=end-of-candidates\r\n")) }); var s = new e.RTCSessionDescription({ type: "offer", sdp: o }); return Promise.resolve(s) }, i.prototype.createAnswer = function() { var n = this; if (n._isClosed) return Promise.reject(Zt("InvalidStateError", "Can not call createAnswer after close")); if ("have-remote-offer" !== n.signalingState && "have-local-pranswer" !== n.signalingState) return Promise.reject(Zt("InvalidStateError", "Can not call createAnswer in signalingState " + n.signalingState)); var r = Bt.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
                        n.usingBundle && (r += "a=group:BUNDLE " + n.transceivers.map(function(e) { return e.mid }).join(" ") + "\r\n"); var i = Bt.getMediaSections(n.remoteDescription.sdp).length;
                        n.transceivers.forEach(function(e, a) { if (!(a + 1 > i)) { if (e.rejected) return "application" === e.kind ? r += "m=application 0 DTLS/SCTP 5000\r\n" : "audio" === e.kind ? r += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n" : "video" === e.kind && (r += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"), void(r += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n"); var o;
                                e.stream && ("audio" === e.kind ? o = e.stream.getAudioTracks()[0] : "video" === e.kind && (o = e.stream.getVideoTracks()[0]), o && t >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = { ssrc: e.sendEncodingParameters[0].ssrc + 1 })); var s = Yt(e.localCapabilities, e.remoteCapabilities);!s.codecs.filter(function(e) { return "rtx" === e.name.toLowerCase() }).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, r += Wt(e, s, "answer", e.stream, n._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (r += "a=rtcp-rsize\r\n") } }); var a = new e.RTCSessionDescription({ type: "answer", sdp: r }); return Promise.resolve(a) }, i.prototype.addIceCandidate = function(e) { var t, n = this; return e && void 0 === e.sdpMLineIndex && !e.sdpMid ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")) : new Promise(function(r, i) { if (!n.remoteDescription) return i(Zt("InvalidStateError", "Can not add ICE candidate without a remote description")); if (e && "" !== e.candidate) { var a = e.sdpMLineIndex; if (e.sdpMid)
                                    for (var o = 0; o < n.transceivers.length; o++)
                                        if (n.transceivers[o].mid === e.sdpMid) { a = o; break }
                                var s = n.transceivers[a]; if (!s) return i(Zt("OperationError", "Can not add ICE candidate")); if (s.rejected) return r(); var c = Object.keys(e.candidate).length > 0 ? Bt.parseCandidate(e.candidate) : {}; if ("tcp" === c.protocol && (0 === c.port || 9 === c.port)) return r(); if (c.component && 1 !== c.component) return r(); if ((0 === a || a > 0 && s.iceTransport !== n.transceivers[0].iceTransport) && !Ht(s.iceTransport, c)) return i(Zt("OperationError", "Can not add ICE candidate")); var d = e.candidate.trim();
                                0 === d.indexOf("a=") && (d = d.substr(2)), (t = Bt.getMediaSections(n.remoteDescription.sdp))[a] += "a=" + (c.type ? d : "end-of-candidates") + "\r\n", n.remoteDescription.sdp = Bt.getDescription(n.remoteDescription.sdp) + t.join("") } else
                                for (var u = 0; u < n.transceivers.length && (n.transceivers[u].rejected || (n.transceivers[u].iceTransport.addRemoteCandidate({}), (t = Bt.getMediaSections(n.remoteDescription.sdp))[u] += "a=end-of-candidates\r\n", n.remoteDescription.sdp = Bt.getDescription(n.remoteDescription.sdp) + t.join(""), !n.usingBundle)); u++);
                            r() }) }, i.prototype.getStats = function(t) { if (t && t instanceof e.MediaStreamTrack) { var n = null; if (this.transceivers.forEach(function(e) { e.rtpSender && e.rtpSender.track === t ? n = e.rtpSender : e.rtpReceiver && e.rtpReceiver.track === t && (n = e.rtpReceiver) }), !n) throw Zt("InvalidAccessError", "Invalid selector."); return n.getStats() } var r = []; return this.transceivers.forEach(function(e) {
                            ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function(t) { e[t] && r.push(e[t].getStats()) }) }), Promise.all(r).then(function(e) { var t = new Map; return e.forEach(function(e) { e.forEach(function(e) { t.set(e.id, e) }) }), t }) }, ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"].forEach(function(t) { var n = e[t]; if (n && n.prototype && n.prototype.getStats) { var r = n.prototype.getStats;
                            n.prototype.getStats = function() { return r.apply(this).then(function(e) { var t = new Map; return Object.keys(e).forEach(function(n) { var r;
                                        e[n].type = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }[(r = e[n]).type] || r.type, t.set(n, e[n]) }), t }) } } }); var a = ["createOffer", "createAnswer"]; return a.forEach(function(e) { var t = i.prototype[e];
                        i.prototype[e] = function() { var e = arguments; return "function" == typeof e[0] || "function" == typeof e[1] ? t.apply(this, [arguments[2]]).then(function(t) { "function" == typeof e[0] && e[0].apply(null, [t]) }, function(t) { "function" == typeof e[1] && e[1].apply(null, [t]) }) : t.apply(this, arguments) } }), (a = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach(function(e) { var t = i.prototype[e];
                        i.prototype[e] = function() { var e = arguments; return "function" == typeof e[1] || "function" == typeof e[2] ? t.apply(this, arguments).then(function() { "function" == typeof e[1] && e[1].apply(null) }, function(t) { "function" == typeof e[2] && e[2].apply(null, [t]) }) : t.apply(this, arguments) } }), ["getStats"].forEach(function(e) { var t = i.prototype[e];
                        i.prototype[e] = function() { var e = arguments; return "function" == typeof e[1] ? t.apply(this, arguments).then(function() { "function" == typeof e[1] && e[1].apply(null) }) : t.apply(this, arguments) } }), i }(e, t.version);
                e.RTCPeerConnection = function(e) { var t, n; return e && e.iceServers && (e.iceServers = (t = e.iceServers, n = !1, (t = JSON.parse(JSON.stringify(t))).filter(function(e) { if (e && (e.urls || e.url)) { var t = e.urls || e.url;
                            e.url && !e.urls && jt.deprecated("RTCIceServer.url", "RTCIceServer.urls"); var r = "string" == typeof t; return r && (t = [t]), t = t.filter(function(e) { return 0 !== e.indexOf("turn:") || -1 === e.indexOf("transport=udp") || -1 !== e.indexOf("turn:[") || n ? 0 === e.indexOf("stun:") && !1 : (n = !0, !0) }), delete e.url, e.urls = r ? t[0] : t, !!t.length } }))), new r(e) }, e.RTCPeerConnection.prototype = r.prototype }, shimReplaceTrack: function(e) {!e.RTCRtpSender || "replaceTrack" in e.RTCRtpSender.prototype || (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack) } },
        Kt = jt.log,
        Jt = { shimGetUserMedia: function(e) { var t = jt.detectBrowser(e),
                    n = e && e.navigator,
                    r = e && e.MediaStreamTrack,
                    i = function(e) { return { name: { InternalError: "NotReadableError", NotSupportedError: "TypeError", PermissionDeniedError: "NotAllowedError", SecurityError: "NotAllowedError" }[e.name] || e.name, message: { "The operation is insecure.": "The request is not allowed by the user agent or the platform in the current context." }[e.message] || e.message, constraint: e.constraint, toString: function() { return this.name + (this.message && ": ") + this.message } } },
                    a = function(e, r, a) { var o = function(e) { if ("object" != typeof e || e.require) return e; var t = []; return Object.keys(e).forEach(function(n) { if ("require" !== n && "advanced" !== n && "mediaSource" !== n) { var r = e[n] = "object" == typeof e[n] ? e[n] : { ideal: e[n] }; if (void 0 === r.min && void 0 === r.max && void 0 === r.exact || t.push(n), void 0 !== r.exact && ("number" == typeof r.exact ? r.min = r.max = r.exact : e[n] = r.exact, delete r.exact), void 0 !== r.ideal) { e.advanced = e.advanced || []; var i = {}; "number" == typeof r.ideal ? i[n] = { min: r.ideal, max: r.ideal } : i[n] = r.ideal, e.advanced.push(i), delete r.ideal, Object.keys(r).length || delete e[n] } } }), t.length && (e.require = t), e }; return e = JSON.parse(JSON.stringify(e)), t.version < 38 && (Kt("spec: " + JSON.stringify(e)), e.audio && (e.audio = o(e.audio)), e.video && (e.video = o(e.video)), Kt("ff37: " + JSON.stringify(e))), n.mozGetUserMedia(e, r, function(e) { a(i(e)) }) }; if (n.mediaDevices || (n.mediaDevices = { getUserMedia: function(e) { return new Promise(function(t, n) { a(e, t, n) }) }, addEventListener: function() {}, removeEventListener: function() {} }), n.mediaDevices.enumerateDevices = n.mediaDevices.enumerateDevices || function() { return new Promise(function(e) { e([{ kind: "audioinput", deviceId: "default", label: "", groupId: "" }, { kind: "videoinput", deviceId: "default", label: "", groupId: "" }]) }) }, t.version < 41) { var o = n.mediaDevices.enumerateDevices.bind(n.mediaDevices);
                    n.mediaDevices.enumerateDevices = function() { return o().then(void 0, function(e) { if ("NotFoundError" === e.name) return []; throw e }) } } if (t.version < 49) { var s = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                    n.mediaDevices.getUserMedia = function(e) { return s(e).then(function(t) { if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function(e) { e.stop() }), new DOMException("The object can not be found here.", "NotFoundError"); return t }, function(e) { return Promise.reject(i(e)) }) } } if (!(t.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) { var c = function(e, t, n) { t in e && !(n in e) && (e[n] = e[t], delete e[t]) },
                        d = n.mediaDevices.getUserMedia.bind(n.mediaDevices); if (n.mediaDevices.getUserMedia = function(e) { return "object" == typeof e && "object" == typeof e.audio && (e = JSON.parse(JSON.stringify(e)), c(e.audio, "autoGainControl", "mozAutoGainControl"), c(e.audio, "noiseSuppression", "mozNoiseSuppression")), d(e) }, r && r.prototype.getSettings) { var u = r.prototype.getSettings;
                        r.prototype.getSettings = function() { var e = u.apply(this, arguments); return c(e, "mozAutoGainControl", "autoGainControl"), c(e, "mozNoiseSuppression", "noiseSuppression"), e } } if (r && r.prototype.applyConstraints) { var l = r.prototype.applyConstraints;
                        r.prototype.applyConstraints = function(e) { return "audio" === this.kind && "object" == typeof e && (e = JSON.parse(JSON.stringify(e)), c(e, "autoGainControl", "mozAutoGainControl"), c(e, "noiseSuppression", "mozNoiseSuppression")), l.apply(this, [e]) } } }
                n.getUserMedia = function(e, r, i) { if (t.version < 44) return a(e, r, i);
                    jt.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(e).then(r, i) } }, shimOnTrack: function(e) { "object" != typeof e || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", { get: function() { return this._ontrack }, set: function(e) { this._ontrack && (this.removeEventListener("track", this._ontrack), this.removeEventListener("addstream", this._ontrackpoly)), this.addEventListener("track", this._ontrack = e), this.addEventListener("addstream", this._ontrackpoly = function(e) { e.stream.getTracks().forEach(function(t) { var n = new Event("track");
                                n.track = t, n.receiver = { track: t }, n.transceiver = { receiver: n.receiver }, n.streams = [e.stream], this.dispatchEvent(n) }.bind(this)) }.bind(this)) } }), "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", { get: function() { return { receiver: this.receiver } } }) }, shimSourceObject: function(e) { "object" == typeof e && (!e.HTMLMediaElement || "srcObject" in e.HTMLMediaElement.prototype || Object.defineProperty(e.HTMLMediaElement.prototype, "srcObject", { get: function() { return this.mozSrcObject }, set: function(e) { this.mozSrcObject = e } })) }, shimPeerConnection: function(e) { var t = jt.detectBrowser(e); if ("object" == typeof e && (e.RTCPeerConnection || e.mozRTCPeerConnection)) { e.RTCPeerConnection || (e.RTCPeerConnection = function(n, r) { if (t.version < 38 && n && n.iceServers) { for (var i = [], a = 0; a < n.iceServers.length; a++) { var o = n.iceServers[a]; if (o.hasOwnProperty("urls"))
                                    for (var s = 0; s < o.urls.length; s++) { var c = { url: o.urls[s] };
                                        0 === o.urls[s].indexOf("turn") && (c.username = o.username, c.credential = o.credential), i.push(c) } else i.push(n.iceServers[a]) }
                            n.iceServers = i } return new e.mozRTCPeerConnection(n, r) }, e.RTCPeerConnection.prototype = e.mozRTCPeerConnection.prototype, e.mozRTCPeerConnection.generateCertificate && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", { get: function() { return e.mozRTCPeerConnection.generateCertificate } }), e.RTCSessionDescription = e.mozRTCSessionDescription, e.RTCIceCandidate = e.mozRTCIceCandidate), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(t) { var n = e.RTCPeerConnection.prototype[t];
                        e.RTCPeerConnection.prototype[t] = function() { return arguments[0] = new("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments) } }); var n = e.RTCPeerConnection.prototype.addIceCandidate;
                    e.RTCPeerConnection.prototype.addIceCandidate = function() { return arguments[0] ? n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve()) }; var r = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" },
                        i = e.RTCPeerConnection.prototype.getStats;
                    e.RTCPeerConnection.prototype.getStats = function(e, n, a) { return i.apply(this, [e || null]).then(function(e) { if (t.version < 48 && (e = function(e) { var t = new Map; return Object.keys(e).forEach(function(n) { t.set(n, e[n]), t[n] = e[n] }), t }(e)), t.version < 53 && !n) try { e.forEach(function(e) { e.type = r[e.type] || e.type }) } catch (t) { if ("TypeError" !== t.name) throw t;
                                e.forEach(function(t, n) { e.set(n, Object.assign({}, t, { type: r[t.type] || t.type })) }) }
                            return e }).then(n, a) } } }, shimSenderGetStats: function(e) { if ("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && !(e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype)) { var t = e.RTCPeerConnection.prototype.getSenders;
                    t && (e.RTCPeerConnection.prototype.getSenders = function() { var e = this,
                            n = t.apply(e, []); return n.forEach(function(t) { t._pc = e }), n }); var n = e.RTCPeerConnection.prototype.addTrack;
                    n && (e.RTCPeerConnection.prototype.addTrack = function() { var e = n.apply(this, arguments); return e._pc = this, e }), e.RTCRtpSender.prototype.getStats = function() { return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map) } } }, shimReceiverGetStats: function(e) { if ("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && !(e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype)) { var t = e.RTCPeerConnection.prototype.getReceivers;
                    t && (e.RTCPeerConnection.prototype.getReceivers = function() { var e = this,
                            n = t.apply(e, []); return n.forEach(function(t) { t._pc = e }), n }), jt.wrapPeerConnectionEvent(e, "track", function(e) { return e.receiver._pc = e.srcElement, e }), e.RTCRtpReceiver.prototype.getStats = function() { return this._pc.getStats(this.track) } } }, shimRemoveStream: function(e) {!e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) { var t = this;
                    jt.deprecated("removeStream", "removeTrack"), this.getSenders().forEach(function(n) { n.track && -1 !== e.getTracks().indexOf(n.track) && t.removeTrack(n) }) }) }, shimRTCDataChannel: function(e) { e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel) }, shimGetDisplayMedia: function(e, t) { "getDisplayMedia" in e.navigator || (navigator.getDisplayMedia = function(e) { if (!e || !e.video) { var n = new DOMException("getDisplayMedia without video constraints is undefined"); return n.name = "NotFoundError", n.code = 8, Promise.reject(n) } return !0 === e.video ? e.video = { mediaSource: t } : e.video.mediaSource = t, navigator.mediaDevices.getUserMedia(e) }) } },
        Xt = { shimLocalStreamsAPI: function(e) { if ("object" == typeof e && e.RTCPeerConnection) { if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function() { return this._localStreams || (this._localStreams = []), this._localStreams }), "getStreamById" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getStreamById = function(e) { var t = null; return this._localStreams && this._localStreams.forEach(function(n) { n.id === e && (t = n) }), this._remoteStreams && this._remoteStreams.forEach(function(n) { n.id === e && (t = n) }), t }), !("addStream" in e.RTCPeerConnection.prototype)) { var t = e.RTCPeerConnection.prototype.addTrack;
                        e.RTCPeerConnection.prototype.addStream = function(e) { this._localStreams || (this._localStreams = []), -1 === this._localStreams.indexOf(e) && this._localStreams.push(e); var n = this;
                            e.getTracks().forEach(function(r) { t.call(n, r, e) }) }, e.RTCPeerConnection.prototype.addTrack = function(e, n) { return n && (this._localStreams ? -1 === this._localStreams.indexOf(n) && this._localStreams.push(n) : this._localStreams = [n]), t.call(this, e, n) } } "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function(e) { this._localStreams || (this._localStreams = []); var t = this._localStreams.indexOf(e); if (-1 !== t) { this._localStreams.splice(t, 1); var n = this,
                                r = e.getTracks();
                            this.getSenders().forEach(function(e) {-1 !== r.indexOf(e.track) && n.removeTrack(e) }) } }) } }, shimRemoteStreamsAPI: function(e) { "object" == typeof e && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function() { return this._remoteStreams ? this._remoteStreams : [] }), "onaddstream" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", { get: function() { return this._onaddstream }, set: function(e) { var t = this;
                        this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = function(e) { e.streams.forEach(function(e) { if (t._remoteStreams || (t._remoteStreams = []), !(t._remoteStreams.indexOf(e) >= 0)) { t._remoteStreams.push(e); var n = new Event("addstream");
                                    n.stream = e, t.dispatchEvent(n) } }) }) } })) }, shimCallbacksAPI: function(e) { if ("object" == typeof e && e.RTCPeerConnection) { var t = e.RTCPeerConnection.prototype,
                        n = t.createOffer,
                        r = t.createAnswer,
                        i = t.setLocalDescription,
                        a = t.setRemoteDescription,
                        o = t.addIceCandidate;
                    t.createOffer = function(e, t) { var r = arguments.length >= 2 ? arguments[2] : arguments[0],
                            i = n.apply(this, [r]); return t ? (i.then(e, t), Promise.resolve()) : i }, t.createAnswer = function(e, t) { var n = arguments.length >= 2 ? arguments[2] : arguments[0],
                            i = r.apply(this, [n]); return t ? (i.then(e, t), Promise.resolve()) : i }; var s = function(e, t, n) { var r = i.apply(this, [e]); return n ? (r.then(t, n), Promise.resolve()) : r };
                    t.setLocalDescription = s, s = function(e, t, n) { var r = a.apply(this, [e]); return n ? (r.then(t, n), Promise.resolve()) : r }, t.setRemoteDescription = s, s = function(e, t, n) { var r = o.apply(this, [e]); return n ? (r.then(t, n), Promise.resolve()) : r }, t.addIceCandidate = s } }, shimGetUserMedia: function(e) { var t = e && e.navigator;
                t.getUserMedia || (t.webkitGetUserMedia ? t.getUserMedia = t.webkitGetUserMedia.bind(t) : t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function(e, n, r) { t.mediaDevices.getUserMedia(e).then(n, r) }.bind(t))) }, shimRTCIceServerUrls: function(e) { var t = e.RTCPeerConnection;
                e.RTCPeerConnection = function(e, n) { if (e && e.iceServers) { for (var r = [], i = 0; i < e.iceServers.length; i++) { var a = e.iceServers[i];!a.hasOwnProperty("urls") && a.hasOwnProperty("url") ? (jt.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (a = JSON.parse(JSON.stringify(a))).urls = a.url, delete a.url, r.push(a)) : r.push(e.iceServers[i]) }
                        e.iceServers = r } return new t(e, n) }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", { get: function() { return t.generateCertificate } }) }, shimTrackEventTransceiver: function(e) { "object" == typeof e && e.RTCPeerConnection && "receiver" in e.RTCTrackEvent.prototype && !e.RTCTransceiver && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", { get: function() { return { receiver: this.receiver } } }) }, shimCreateOfferLegacy: function(e) { var t = e.RTCPeerConnection.prototype.createOffer;
                e.RTCPeerConnection.prototype.createOffer = function(e) { var n = this; if (e) { void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio); var r = n.getTransceivers().find(function(e) { return e.sender.track && "audio" === e.sender.track.kind });!1 === e.offerToReceiveAudio && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 !== e.offerToReceiveAudio || r || n.addTransceiver("audio"), void 0 !== e.offerToReceiveAudio && (e.offerToReceiveVideo = !!e.offerToReceiveVideo); var i = n.getTransceivers().find(function(e) { return e.sender.track && "video" === e.sender.track.kind });!1 === e.offerToReceiveVideo && i ? "sendrecv" === i.direction ? i.setDirection("sendonly") : "recvonly" === i.direction && i.setDirection("inactive") : !0 !== e.offerToReceiveVideo || i || n.addTransceiver("video") } return t.apply(n, arguments) } } },
        $t = { shimRTCIceCandidate: function(e) { if (e.RTCIceCandidate && !(e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)) { var t = e.RTCIceCandidate;
                    e.RTCIceCandidate = function(e) { if ("object" == typeof e && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length) { var n = new t(e),
                                r = Bt.parseCandidate(e.candidate),
                                i = Object.assign(n, r); return i.toJSON = function() { return { candidate: i.candidate, sdpMid: i.sdpMid, sdpMLineIndex: i.sdpMLineIndex, usernameFragment: i.usernameFragment } }, i } return new t(e) }, e.RTCIceCandidate.prototype = t.prototype, jt.wrapPeerConnectionEvent(e, "icecandidate", function(t) { return t.candidate && Object.defineProperty(t, "candidate", { value: new e.RTCIceCandidate(t.candidate), writable: "false" }), t }) } }, shimCreateObjectURL: function(e) { var t = e && e.URL; if ("object" == typeof e && e.HTMLMediaElement && "srcObject" in e.HTMLMediaElement.prototype && t.createObjectURL && t.revokeObjectURL) { var n = t.createObjectURL.bind(t),
                        r = t.revokeObjectURL.bind(t),
                        i = new Map,
                        a = 0;
                    t.createObjectURL = function(e) { if ("getTracks" in e) { var t = "polyblob:" + ++a; return i.set(t, e), jt.deprecated("URL.createObjectURL(stream)", "elem.srcObject = stream"), t } return n(e) }, t.revokeObjectURL = function(e) { r(e), i.delete(e) }; var o = Object.getOwnPropertyDescriptor(e.HTMLMediaElement.prototype, "src");
                    Object.defineProperty(e.HTMLMediaElement.prototype, "src", { get: function() { return o.get.apply(this) }, set: function(e) { return this.srcObject = i.get(e) || null, o.set.apply(this, [e]) } }); var s = e.HTMLMediaElement.prototype.setAttribute;
                    e.HTMLMediaElement.prototype.setAttribute = function() { return 2 === arguments.length && "src" === ("" + arguments[0]).toLowerCase() && (this.srcObject = i.get(arguments[1]) || null), s.apply(this, arguments) } } }, shimMaxMessageSize: function(e) { if (!e.RTCSctpTransport && e.RTCPeerConnection) { var t = jt.detectBrowser(e); "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", { get: function() { return void 0 === this._sctp ? null : this._sctp } }); var n = e.RTCPeerConnection.prototype.setRemoteDescription;
                    e.RTCPeerConnection.prototype.setRemoteDescription = function() { var e, r, i, a; if (this._sctp = null, i = arguments[0], (a = Bt.splitSections(i.sdp)).shift(), a.some(function(e) { var t = Bt.parseMLine(e); return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP") })) { var o, s = function(e) { var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/); if (null === t || t.length < 2) return -1; var n = parseInt(t[1], 10); return n != n ? -1 : n }(arguments[0]),
                                c = (e = s, r = 65536, "firefox" === t.browser && (r = t.version < 57 ? -1 === e ? 16384 : 2147483637 : t.version < 60 ? 57 === t.version ? 65535 : 65536 : 2147483637), r),
                                d = function(e, n) { var r = 65536; "firefox" === t.browser && 57 === t.version && (r = 65535); var i = Bt.matchPrefix(e.sdp, "a=max-message-size:"); return i.length > 0 ? r = parseInt(i[0].substr(19), 10) : "firefox" === t.browser && -1 !== n && (r = 2147483637), r }(arguments[0], s);
                            o = 0 === c && 0 === d ? Number.POSITIVE_INFINITY : 0 === c || 0 === d ? Math.max(c, d) : Math.min(c, d); var u = {};
                            Object.defineProperty(u, "maxMessageSize", { get: function() { return o } }), this._sctp = u } return n.apply(this, arguments) } } }, shimSendThrowTypeError: function(e) { if (e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype) { var t = e.RTCPeerConnection.prototype.createDataChannel;
                    e.RTCPeerConnection.prototype.createDataChannel = function() { var e = t.apply(this, arguments); return n(e, this), e }, jt.wrapPeerConnectionEvent(e, "datachannel", function(e) { return n(e.channel, e.target), e }) }

                function n(e, t) { var n = e.send;
                    e.send = function() { var r = arguments[0],
                            i = r.length || r.size || r.byteLength; if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)"); return n.apply(e, arguments) } } } },
        en = (function(e, t) { var n = e && e.window,
                r = { shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0 }; for (var i in void 0) hasOwnProperty.call(void 0, i) && (r[i] = (void 0)[i]); var a = jt.log,
                o = jt.detectBrowser(n),
                s = Gt || null,
                c = qt || null,
                d = Jt || null,
                u = Xt || null,
                l = $t || null,
                p = { browserDetails: o, commonShim: l, extractVersion: jt.extractVersion, disableLog: jt.disableLog, disableWarnings: jt.disableWarnings }; switch (o.browser) {
                case "chrome":
                    if (!s || !s.shimPeerConnection || !r.shimChrome) return a("Chrome shim is not included in this adapter release."), p;
                    a("adapter.js shimming chrome."), p.browserShim = s, l.shimCreateObjectURL(n), s.shimGetUserMedia(n), s.shimMediaStream(n), s.shimSourceObject(n), s.shimPeerConnection(n), s.shimOnTrack(n), s.shimAddTrackRemoveTrack(n), s.shimGetSendersWithDtmf(n), s.shimSenderReceiverGetStats(n), s.fixNegotiationNeeded(n), l.shimRTCIceCandidate(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n); break;
                case "firefox":
                    if (!d || !d.shimPeerConnection || !r.shimFirefox) return a("Firefox shim is not included in this adapter release."), p;
                    a("adapter.js shimming firefox."), p.browserShim = d, l.shimCreateObjectURL(n), d.shimGetUserMedia(n), d.shimSourceObject(n), d.shimPeerConnection(n), d.shimOnTrack(n), d.shimRemoveStream(n), d.shimSenderGetStats(n), d.shimReceiverGetStats(n), d.shimRTCDataChannel(n), l.shimRTCIceCandidate(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n); break;
                case "edge":
                    if (!c || !c.shimPeerConnection || !r.shimEdge) return a("MS edge shim is not included in this adapter release."), p;
                    a("adapter.js shimming edge."), p.browserShim = c, l.shimCreateObjectURL(n), c.shimGetUserMedia(n), c.shimPeerConnection(n), c.shimReplaceTrack(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n); break;
                case "safari":
                    if (!u || !r.shimSafari) return a("Safari shim is not included in this adapter release."), p;
                    a("adapter.js shimming safari."), p.browserShim = u, l.shimCreateObjectURL(n), u.shimRTCIceServerUrls(n), u.shimCallbacksAPI(n), u.shimLocalStreamsAPI(n), u.shimRemoteStreamsAPI(n), u.shimTrackEventTransceiver(n), u.shimGetUserMedia(n), u.shimCreateOfferLegacy(n), l.shimRTCIceCandidate(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n); break;
                default:
                    a("Unsupported browser!") } }({ window: t.window }), { f: ie }),
        tn = en.f("iterator"),
        nn = r(function(e) { e.exports = { default: tn, __esModule: !0 } });
    n(nn);
    var rn = r(function(e) { var t = B("meta"),
                n = C.f,
                r = 0,
                i = Object.isExtensible || function() { return !0 },
                a = !m(function() { return i(Object.preventExtensions({})) }),
                o = function(e) { n(e, t, { value: { i: "O" + ++r, w: {} } }) },
                s = e.exports = { KEY: t, NEED: !1, fastKey: function(e, n) { if (!p(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!V(e, t)) { if (!i(e)) return "F"; if (!n) return "E";
                            o(e) } return e[t].i }, getWeak: function(e, n) { if (!V(e, t)) { if (!i(e)) return !0; if (!n) return !1;
                            o(e) } return e[t].w }, onFreeze: function(e) { return a && s.NEED && i(e) && !V(e, t) && o(e), e } } }),
        an = (rn.KEY, rn.NEED, rn.fastKey, rn.getWeak, rn.onFreeze, C.f),
        on = function(e) { var t = d.Symbol || (d.Symbol = {}); "_" == e.charAt(0) || e in t || an(t, e, { value: en.f(e) }) },
        sn = { f: Object.getOwnPropertySymbols },
        cn = { f: {}.propertyIsEnumerable },
        dn = Array.isArray || function(e) { return "Array" == L(e) },
        un = q.concat("length", "prototype"),
        ln = { f: Object.getOwnPropertyNames || function(e) { return Z(e, un) } },
        pn = ln.f,
        fn = {}.toString,
        mn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        hn = { f: function(e) { return mn && "[object Window]" == fn.call(e) ? function(e) { try { return pn(e) } catch (e) { return mn.slice() } }(e) : pn(R(e)) } },
        vn = Object.getOwnPropertyDescriptor,
        gn = { f: h ? vn : function(e, t) { if (e = R(e), t = S(t, !0), b) try { return vn(e, t) } catch (e) {}
                if (V(e, t)) return T(!cn.f.call(e, t), e[t]) } },
        yn = rn.KEY,
        bn = gn.f,
        Sn = C.f,
        wn = hn.f,
        Cn = c.Symbol,
        Tn = c.JSON,
        En = Tn && Tn.stringify,
        _n = ie("_hidden"),
        Mn = ie("toPrimitive"),
        kn = {}.propertyIsEnumerable,
        An = U("symbol-registry"),
        Vn = U("symbols"),
        In = U("op-symbols"),
        Pn = Object.prototype,
        Ln = "function" == typeof Cn,
        xn = c.QObject,
        Rn = !xn || !xn.prototype || !xn.prototype.findChild,
        Nn = h && m(function() { return 7 != re(Sn({}, "a", { get: function() { return Sn(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) { var r = bn(Pn, t);
            r && delete Pn[t], Sn(e, t, n), r && e !== Pn && Sn(Pn, t, r) } : Sn,
        On = function(e) { var t = Vn[e] = re(Cn.prototype); return t._k = e, t },
        Dn = Ln && "symbol" == typeof Cn.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof Cn },
        jn = function(e, t, n) { return e === Pn && jn(In, t, n), f(e), t = S(t, !0), f(n), V(Vn, t) ? (n.enumerable ? (V(e, _n) && e[_n][t] && (e[_n][t] = !1), n = re(n, { enumerable: T(0, !1) })) : (V(e, _n) || Sn(e, _n, T(1, {})), e[_n][t] = !0), Nn(e, t, n)) : Sn(e, t, n) },
        Fn = function(e, t) { f(e); for (var n, r = function(e) { var t = K(e),
                        n = sn.f; if (n)
                        for (var r, i = n(e), a = cn.f, o = 0; i.length > o;) a.call(e, r = i[o++]) && t.push(r); return t }(t = R(t)), i = 0, a = r.length; a > i;) jn(e, n = r[i++], t[n]); return e },
        Un = function(e, t) { if (e = R(e), t = S(t, !0), e !== Pn || !V(Vn, t) || V(In, t)) { var n = bn(e, t); return !n || !V(Vn, t) || V(e, _n) && e[_n][t] || (n.enumerable = !0), n } },
        zn = function(e) { for (var t, n = wn(R(e)), r = [], i = 0; n.length > i;) V(Vn, t = n[i++]) || t == _n || t == yn || r.push(t); return r },
        Gn = function(e) { for (var t, n = e === Pn, r = wn(n ? In : R(e)), i = [], a = 0; r.length > a;) !V(Vn, t = r[a++]) || n && !V(Pn, t) || i.push(Vn[t]); return i };
    Ln || (k((Cn = function() { if (this instanceof Cn) throw TypeError("Symbol is not a constructor!"); var e = B(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) { this === Pn && t.call(In, n), V(this, _n) && V(this[_n], e) && (this[_n][e] = !1), Nn(this, e, T(1, n)) }; return h && Rn && Nn(Pn, e, { configurable: !0, set: t }), On(e) }).prototype, "toString", function() { return this._k }), gn.f = Un, C.f = jn, ln.f = hn.f = zn, cn.f = function(e) { var t = kn.call(this, e = S(e, !0)); return !(this === Pn && V(Vn, e) && !V(In, e)) && (!(t || !V(this, e) || !V(Vn, e) || V(this, _n) && this[_n][e]) || t) }, sn.f = Gn, en.f = function(e) { return On(ie(e)) }), M(M.G + M.W + M.F * !Ln, { Symbol: Cn });
    for (var Bn = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Wn = 0; Bn.length > Wn;) ie(Bn[Wn++]);
    for (var Yn = K(ie.store), Qn = 0; Yn.length > Qn;) on(Yn[Qn++]);
    M(M.S + M.F * !Ln, "Symbol", { for: function(e) { return V(An, e += "") ? An[e] : An[e] = Cn(e) }, keyFor: function(e) { if (!Dn(e)) throw TypeError(e + " is not a symbol!"); for (var t in An)
                if (An[t] === e) return t }, useSetter: function() { Rn = !0 }, useSimple: function() { Rn = !1 } }), M(M.S + M.F * !Ln, "Object", { create: function(e, t) { return void 0 === t ? re(e) : Fn(re(e), t) }, defineProperty: jn, defineProperties: Fn, getOwnPropertyDescriptor: Un, getOwnPropertyNames: zn, getOwnPropertySymbols: Gn }), Tn && M(M.S + M.F * (!Ln || m(function() { var e = Cn(); return "[null]" != En([e]) || "{}" != En({ a: e }) || "{}" != En(Object(e)) })), "JSON", { stringify: function(e) { if (void 0 !== e && !Dn(e)) { for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]); return "function" == typeof(t = r[1]) && (n = t), !n && dn(t) || (t = function(e, t) { if (n && (t = n.call(this, e, t)), !Dn(t)) return t }), r[1] = t, En.apply(Tn, r) } } }), Cn.prototype[Mn] || E(Cn.prototype, Mn, Cn.prototype.valueOf), se(Cn, "Symbol"), se(Math, "Math", !0), se(c.JSON, "JSON", !0), on("asyncIterator"), on("observable");
    var Hn = d.Symbol,
        Zn = r(function(e) { e.exports = { default: Hn, __esModule: !0 } });
    n(Zn);
    var qn, Kn, Jn, Xn = r(function(e, t) { t.__esModule = !0; var n = a(nn),
                r = a(Zn),
                i = "function" == typeof r.default && "symbol" == typeof n.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e };

            function a(e) { return e && e.__esModule ? e : { default: e } }
            t.default = "function" == typeof r.default && "symbol" === i(n.default) ? function(e) { return void 0 === e ? "undefined" : i(e) } : function(e) { return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : void 0 === e ? "undefined" : i(e) } }),
        $n = n(Xn),
        er = r(function(e, n) {
            /*!
             * UAParser.js v0.7.18
             * Lightweight JavaScript-based User-Agent string parser
             * https://github.com/faisalman/ua-parser-js
             *
             * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
             * Dual licensed under GPLv2 or MIT
             */
            ! function(t, r) { var i = "model",
                    a = "name",
                    o = "type",
                    s = "vendor",
                    c = "version",
                    d = "mobile",
                    u = "tablet",
                    l = { extend: function(e, t) { var n = {}; for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r]; return n }, has: function(e, t) { return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase()) }, lowerize: function(e) { return e.toLowerCase() }, major: function(e) { return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0 }, trim: function(e) { return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") } },
                    p = { rgx: function(e, t) { for (var n, r, i, a, o, s, c = 0; c < t.length && !o;) { var d = t[c],
                                    u = t[c + 1]; for (n = r = 0; n < d.length && !o;)
                                    if (o = d[n++].exec(e))
                                        for (i = 0; i < u.length; i++) s = o[++r], "object" == typeof(a = u[i]) && a.length > 0 ? 2 == a.length ? "function" == typeof a[1] ? this[a[0]] = a[1].call(this, s) : this[a[0]] = a[1] : 3 == a.length ? "function" != typeof a[1] || a[1].exec && a[1].test ? this[a[0]] = s ? s.replace(a[1], a[2]) : void 0 : this[a[0]] = s ? a[1].call(this, s, a[2]) : void 0 : 4 == a.length && (this[a[0]] = s ? a[3].call(this, s.replace(a[1], a[2])) : void 0) : this[a] = s || void 0;
                                c += 2 } }, str: function(e, t) { for (var n in t)
                                if ("object" == typeof t[n] && t[n].length > 0) { for (var r = 0; r < t[n].length; r++)
                                        if (l.has(t[n][r], e)) return "?" === n ? void 0 : n } else if (l.has(t[n], e)) return "?" === n ? void 0 : n; return e } },
                    f = { browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2000: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } },
                    m = { browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [a, c],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [
                                [a, "Opera Mini"], c
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [a, "Opera"], c
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                            [a, c],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [
                                [a, "IE"], c
                            ],
                            [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                            [
                                [a, "Edge"], c
                            ],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [a, "Yandex"], c
                            ],
                            [/(puffin)\/([\w\.]+)/i],
                            [
                                [a, "Puffin"], c
                            ],
                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                [a, "UCBrowser"], c
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [a, /_/g, " "], c
                            ],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [
                                [a, "WeChat"], c
                            ],
                            [/(qqbrowserlite)\/([\w\.]+)/i],
                            [a, c],
                            [/(QQ)\/([\d\.]+)/i],
                            [a, c],
                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [a, c],
                            [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                            [a, c],
                            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                            [a, c],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i],
                            [a],
                            [/(LBBROWSER)/i],
                            [a],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [c, [a, "MIUI Browser"]],
                            [/;fbav\/([\w\.]+);/i],
                            [c, [a, "Facebook"]],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [c, [a, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [a, /(.+)/, "$1 WebView"], c
                            ],
                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                            [
                                [a, /(.+(?:g|us))(.+)/, "$1 $2"], c
                            ],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [c, [a, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [a, c],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [a, "Dolphin"], c
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                [a, "Chrome"], c
                            ],
                            [/(coast)\/([\w\.]+)/i],
                            [
                                [a, "Opera Coast"], c
                            ],
                            [/fxios\/([\w\.-]+)/i],
                            [c, [a, "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [c, [a, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [c, a],
                            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [
                                [a, "GSA"], c
                            ],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [a, [c, p.str, f.browser.oldsafari.version]],
                            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                            [a, c],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [a, "Netscape"], c
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [a, c]
                        ], cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                ["architecture", "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                ["architecture", l.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                ["architecture", "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                ["architecture", "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                ["architecture", /ower/, "", l.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                ["architecture", "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                ["architecture", l.lowerize]
                            ]
                        ], device: [
                            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                            [i, s, [o, u]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [i, [s, "Apple"],
                                [o, u]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [i, "Apple TV"],
                                [s, "Apple"]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [s, i, [o, u]],
                            [/(kf[A-z]+)\sbuild\/.+silk\//i],
                            [i, [s, "Amazon"],
                                [o, u]
                            ],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                            [
                                [i, p.str, f.device.amazon.model],
                                [s, "Amazon"],
                                [o, d]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [i, s, [o, d]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [i, [s, "Apple"],
                                [o, d]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [s, i, [o, d]],
                            [/\(bb10;\s(\w+)/i],
                            [i, [s, "BlackBerry"],
                                [o, d]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                            [i, [s, "Asus"],
                                [o, u]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [s, "Sony"],
                                [i, "Xperia Tablet"],
                                [o, u]
                            ],
                            [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                            [i, [s, "Sony"],
                                [o, d]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [s, i, [o, "console"]],
                            [/android.+;\s(shield)\sbuild/i],
                            [i, [s, "Nvidia"],
                                [o, "console"]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            [i, [s, "Sony"],
                                [o, "console"]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                [s, p.str, f.device.sprint.vendor],
                                [i, p.str, f.device.sprint.model],
                                [o, d]
                            ],
                            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                            [s, i, [o, u]],
                            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [s, [i, /_/g, " "],
                                [o, d]
                            ],
                            [/(nexus\s9)/i],
                            [i, [s, "HTC"],
                                [o, u]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                            [i, [s, "Huawei"],
                                [o, d]
                            ],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [s, i, [o, d]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [i, [s, "Microsoft"],
                                [o, "console"]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [i, /\./g, " "],
                                [s, "Microsoft"],
                                [o, d]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [i, [s, "Motorola"],
                                [o, d]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [i, [s, "Motorola"],
                                [o, u]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [s, l.trim],
                                [i, l.trim],
                                [o, "smarttv"]
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [i, /^/, "SmartTV"],
                                [s, "Samsung"],
                                [o, "smarttv"]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [i, [s, "Sharp"],
                                [o, "smarttv"]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                [s, "Samsung"], i, [o, u]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [s, [o, "smarttv"], i],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                            [
                                [s, "Samsung"], i, [o, d]
                            ],
                            [/sie-(\w*)/i],
                            [i, [s, "Siemens"],
                                [o, d]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                            [
                                [s, "Nokia"], i, [o, d]
                            ],
                            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                            [i, [s, "Acer"],
                                [o, u]
                            ],
                            [/android.+([vl]k\-?\d{3})\s+build/i],
                            [i, [s, "LG"],
                                [o, u]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                [s, "LG"], i, [o, u]
                            ],
                            [/(lg) netcast\.tv/i],
                            [s, i, [o, "smarttv"]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                            [i, [s, "LG"],
                                [o, d]
                            ],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [i, [s, "Lenovo"],
                                [o, u]
                            ],
                            [/linux;.+((jolla));/i],
                            [s, i, [o, d]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [s, i, [o, "wearable"]],
                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [s, i, [o, d]],
                            [/crkey/i],
                            [
                                [i, "Chromecast"],
                                [s, "Google"]
                            ],
                            [/android.+;\s(glass)\s\d/i],
                            [i, [s, "Google"],
                                [o, "wearable"]
                            ],
                            [/android.+;\s(pixel c)\s/i],
                            [i, [s, "Google"],
                                [o, u]
                            ],
                            [/android.+;\s(pixel xl|pixel)\s/i],
                            [i, [s, "Google"],
                                [o, d]
                            ],
                            [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                            [
                                [i, /_/g, " "],
                                [s, "Xiaomi"],
                                [o, d]
                            ],
                            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                            [
                                [i, /_/g, " "],
                                [s, "Xiaomi"],
                                [o, u]
                            ],
                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                            [i, [s, "Meizu"],
                                [o, u]
                            ],
                            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                            [i, [s, "OnePlus"],
                                [o, d]
                            ],
                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                            [i, [s, "RCA"],
                                [o, u]
                            ],
                            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                            [i, [s, "Dell"],
                                [o, u]
                            ],
                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                            [i, [s, "Verizon"],
                                [o, u]
                            ],
                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                            [
                                [s, "Barnes & Noble"], i, [o, u]
                            ],
                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                            [i, [s, "NuVision"],
                                [o, u]
                            ],
                            [/android.+;\s(k88)\sbuild/i],
                            [i, [s, "ZTE"],
                                [o, u]
                            ],
                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                            [i, [s, "Swiss"],
                                [o, d]
                            ],
                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                            [i, [s, "Swiss"],
                                [o, u]
                            ],
                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                            [i, [s, "Zeki"],
                                [o, u]
                            ],
                            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                            [
                                [s, "Dragon Touch"], i, [o, u]
                            ],
                            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                            [i, [s, "Insignia"],
                                [o, u]
                            ],
                            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                            [i, [s, "NextBook"],
                                [o, u]
                            ],
                            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                            [
                                [s, "Voice"], i, [o, d]
                            ],
                            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                            [
                                [s, "LvTel"], i, [o, d]
                            ],
                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                            [i, [s, "Envizen"],
                                [o, u]
                            ],
                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                            [s, i, [o, u]],
                            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                            [i, [s, "MachSpeed"],
                                [o, u]
                            ],
                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                            [s, i, [o, u]],
                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                            [i, [s, "Rotor"],
                                [o, u]
                            ],
                            [/android.+(KS(.+))\s+build/i],
                            [i, [s, "Amazon"],
                                [o, u]
                            ],
                            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                            [s, i, [o, u]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [o, l.lowerize], s, i
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [i, [s, "Generic"]]
                        ], engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [c, [a, "EdgeHTML"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [a, c],
                            [/rv\:([\w\.]{1,9}).+(gecko)/i],
                            [c, a]
                        ], os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [a, c],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [a, [c, p.str, f.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [a, "Windows"],
                                [c, p.str, f.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [a, "BlackBerry"], c
                            ],
                            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                            [a, c],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                            [
                                [a, "Symbian"], c
                            ],
                            [/\((series40);/i],
                            [a],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [a, "Firefox OS"], c
                            ],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                            [a, c],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [a, "Chromium OS"], c
                            ],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [a, "Solaris"], c
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                            [a, c],
                            [/(haiku)\s(\w+)/i],
                            [a, c],
                            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                            [
                                [c, /_/g, "."],
                                [a, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [a, "Mac OS"],
                                [c, /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
                            [a, c]
                        ] },
                    h = function(e, n) { if ("object" == typeof e && (n = e, e = void 0), !(this instanceof h)) return new h(e, n).getResult(); var r = e || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : ""),
                            i = n ? l.extend(m, n) : m; return this.getBrowser = function() { var e = { name: void 0, version: void 0 }; return p.rgx.call(e, r, i.browser), e.major = l.major(e.version), e }, this.getCPU = function() { var e = { architecture: void 0 }; return p.rgx.call(e, r, i.cpu), e }, this.getDevice = function() { var e = { vendor: void 0, model: void 0, type: void 0 }; return p.rgx.call(e, r, i.device), e }, this.getEngine = function() { var e = { name: void 0, version: void 0 }; return p.rgx.call(e, r, i.engine), e }, this.getOS = function() { var e = { name: void 0, version: void 0 }; return p.rgx.call(e, r, i.os), e }, this.getResult = function() { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() } }, this.getUA = function() { return r }, this.setUA = function(e) { return r = e, this }, this };
                h.VERSION = "0.7.18", h.BROWSER = { NAME: a, MAJOR: "major", VERSION: c }, h.CPU = { ARCHITECTURE: "architecture" }, h.DEVICE = { MODEL: i, VENDOR: s, TYPE: o, CONSOLE: "console", MOBILE: d, SMARTTV: "smarttv", TABLET: u, WEARABLE: "wearable", EMBEDDED: "embedded" }, h.ENGINE = { NAME: a, VERSION: c }, h.OS = { NAME: a, VERSION: c }, e.exports && (n = e.exports = h), n.UAParser = h; var v = t && (t.jQuery || t.Zepto); if (void 0 !== v) { var g = new h;
                    v.ua = g.getResult(), v.ua.get = function() { return g.getUA() }, v.ua.set = function(e) { g.setUA(e); var t = g.getResult(); for (var n in t) v.ua[n] = t[n] } } }("object" == typeof window ? window : t)
        }).UAParser;
    (qn = (Kn = e.BrowserCompatibility || (e.BrowserCompatibility = {})).Feature || (Kn.Feature = {})).BLOB = "blob", qn.MEDIA_DEVICES = "mediaDevices", qn.URL_OBJECT = "urlObject", qn.WEB_WORKERS = "webWorkers", qn.WEB_ASSEMBLY = "webAssembly", qn.WEB_ASSEMBLY_ERROR_FREE = "webAssemblyErrorFree", (Jn = e.BrowserHelper || (e.BrowserHelper = {})).userAgentInfo = new er(navigator.userAgent), Jn.checkBrowserCompatibility = function() { var t = !0,
            n = !0,
            r = [];
        null != navigator.mediaDevices && "function" == typeof navigator.mediaDevices.getUserMedia || (r.push(e.BrowserCompatibility.Feature.MEDIA_DEVICES), t = !1), window.hasOwnProperty("Worker") && "function" == typeof window.Worker || (r.push(e.BrowserCompatibility.Feature.WEB_WORKERS), t = n = !1), window.hasOwnProperty("WebAssembly") && "object" === $n(window.WebAssembly) || (r.push(e.BrowserCompatibility.Feature.WEB_ASSEMBLY), t = n = !1), window.hasOwnProperty("Blob") && "function" == typeof window.Blob || (r.push(e.BrowserCompatibility.Feature.BLOB), t = n = !1), (!window.hasOwnProperty("URL") || "function" != typeof window.URL && "object" !== $n(window.URL) || "function" != typeof window.URL.createObjectURL) && (r.push(e.BrowserCompatibility.Feature.URL_OBJECT), t = n = !1); var i = Jn.userAgentInfo.getOS(); return "iOS" === i.name && null != i.version && -1 !== ["11.2.2", "11.2.5", "11.2.6"].indexOf(i.version) && (r.push(e.BrowserCompatibility.Feature.WEB_ASSEMBLY_ERROR_FREE), t = n = !1), { fullSupport: t, scannerSupport: n, missingFeatures: r } }, Jn.getDeviceId = function() { var e = function(e) { var t = document.cookie.match("(^|;)\\s*scandit-device-id\\s*=\\s*([^;]+)"); if (null == t) return ""; var n = t.pop(); return null == n ? "" : n }(); if ("" !== e) return e; for (var t, n, r = "", i = 0; i < 40; ++i) r += "0123456789abcdef".charAt(Math.floor(16 * Math.random())); return t = r, (n = new Date).setTime(n.getTime() + 31536e7), document.cookie = "scandit-device-id=" + t + ";expires=" + n.toUTCString(), r };
    var tr = function(e, t, n) { t in e ? C.f(e, t, T(0, n)) : e[t] = n };
    M(M.S + M.F * !vt(function(e) {}), "Array", { from: function(e) { var t, n, r, i, a = ue(e),
                o = "function" == typeof this ? this : Array,
                s = arguments.length,
                c = s > 1 ? arguments[1] : void 0,
                d = void 0 !== c,
                u = 0,
                p = je(a); if (d && (c = l(c, s > 2 ? arguments[2] : void 0, 2)), null == p || o == Array && Oe(p))
                for (n = new o(t = O(a.length)); t > u; u++) tr(n, u, d ? c(a[u], u) : a[u]);
            else
                for (i = p.call(a), n = new o; !(r = i.next()).done; u++) tr(n, u, d ? xe(i, c, [r.value, u], !0) : r.value); return n.length = u, n } });
    var nr = d.Array.from,
        rr = r(function(e) { e.exports = { default: nr, __esModule: !0 } }),
        ir = n(rr),
        ar = n(r(function(e, t) { t.__esModule = !0; var n, r = (n = rr) && n.__esModule ? n : { default: n };
            t.default = function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return (0, r.default)(e) } })),
        or = function(e, t) { if (!p(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!"); return e },
        sr = C.f,
        cr = rn.fastKey,
        dr = h ? "_s" : "size",
        ur = function(e, t) { var n, r = cr(t); if ("F" !== r) return e._i[r]; for (n = e._f; n; n = n.n)
                if (n.k == t) return n },
        lr = { getConstructor: function(e, t, n, r) { var i = e(function(e, a) { Le(e, i, t, "_i"), e._t = t, e._i = re(null), e._f = void 0, e._l = void 0, e[dr] = 0, null != a && Fe(a, n, e[r], e) }); return st(i.prototype, { clear: function() { for (var e = or(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                        e._f = e._l = void 0, e[dr] = 0 }, delete: function(e) { var n = or(this, t),
                            r = ur(n, e); if (r) { var i = r.n,
                                a = r.p;
                            delete n._i[r.i], r.r = !0, a && (a.n = i), i && (i.p = a), n._f == r && (n._f = i), n._l == r && (n._l = a), n[dr]-- } return !!r }, forEach: function(e) { or(this, t); for (var n, r = l(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p }, has: function(e) { return !!ur(or(this, t), e) } }), h && sr(i.prototype, "size", { get: function() { return or(this, t)[dr] } }), i }, def: function(e, t, n) { var r, i, a = ur(e, t); return a ? a.v = n : (e._l = a = { i: i = cr(t, !0), k: t, v: n, p: r = e._l, n: void 0, r: !1 }, e._f || (e._f = a), r && (r.n = a), e[dr]++, "F" !== i && (e._i[i] = a)), e }, getEntry: ur, setStrong: function(e, t, n) { ge(e, t, function(e, n) { this._t = or(e, t), this._k = n, this._l = void 0 }, function() { for (var e = this._k, t = this._l; t && t.r;) t = t.p; return this._t && (this._l = t = t ? t.n : this._t._f) ? be(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, be(1)) }, n ? "entries" : "values", !n, !0), dt(t) } },
        pr = (ie("species"), C.f),
        fr = function(e, t, n, r, i, a) { var o = c[e],
                s = o,
                d = i ? "set" : "add",
                u = s && s.prototype,
                f = {}; return h && "function" == typeof s && (a || u.forEach && !m(function() {
                (new s).entries().next() })) ? (s = t(function(t, n) { Le(t, s, e, "_c"), t._c = new o, null != n && Fe(n, i, t[d], t) }), function(e, t, n) { for (var r = ue(e), i = x(r), a = l(t, n, 3), o = O(i.length), s = 0; o > s; s++) s in i && a(i[s], s, r) }("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) { var t = "add" == e || "set" == e;
                e in u && (!a || "clear" != e) && E(s.prototype, e, function(n, r) { if (Le(this, s, e), !t && a && !p(n)) return "get" == e && void 0; var i = this._c[e](0 === n ? 0 : n, r); return t ? this : i }) }), a || pr(s.prototype, "size", { get: function() { return this._c.size } })) : (s = r.getConstructor(t, e, i, d), st(s.prototype, n), rn.NEED = !0), se(s, e), f[e] = s, M(M.G + M.W + M.F, f), a || r.setStrong(s, e, i), s },
        mr = (fr("Map", function(e) { return function() { return e(this, arguments.length > 0 ? arguments[0] : void 0) } }, { get: function(e) { var t = lr.getEntry(or(this, "Map"), e); return t && t.v }, set: function(e, t) { return lr.def(or(this, "Map"), 0 === e ? 0 : e, t) } }, lr, !0), function(e) { return function() { if (Pe(this) != e) throw TypeError(e + "#toJSON isn't generic"); return Fe(this, !1, (t = []).push, t, void 0), t; var t } });
    M(M.P + M.R, "Map", { toJSON: mr("Map") });
    var hr = function(e) { M(M.S, e, { of: function() { for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e]; return new this(t) } }) };
    hr("Map");
    var vr = function(e) { M(M.S, e, { from: function(e) { var t, n, r, i, a = arguments[1]; return u(this), (t = void 0 !== a) && u(a), null == e ? new this : (n = [], t ? (r = 0, i = l(a, arguments[2], 2), Fe(e, !1, function(e) { n.push(i(e, r++)) })) : Fe(e, !1, n.push, n), new this(n)) } }) };
    vr("Map");
    var gr, yr, br = d.Map,
        Sr = n(r(function(e) { e.exports = { default: br, __esModule: !0 } }));
    (gr = (yr = e.Camera || (e.Camera = {})).Type || (yr.Type = {})).FRONT = "front", gr.BACK = "back";
    var wr = function(e, t) { if (f(e), !p(t) && null !== t) throw TypeError(t + ": can't set as prototype!") },
        Cr = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) { try {
                    (n = l(Function.call, gn.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array) } catch (e) { t = !0 } return function(e, r) { return wr(e, r), t ? e.__proto__ = r : n(e, r), e } }({}, !1) : void 0), check: wr };
    M(M.S, "Object", { setPrototypeOf: Cr.set });
    var Tr = d.Object.setPrototypeOf,
        Er = r(function(e) { e.exports = { default: Tr, __esModule: !0 } }),
        _r = n(Er),
        Mr = function(e, t) { var n = (d.Object || {})[e] || Object[e],
                r = {};
            r[e] = t(n), M(M.S + M.F * m(function() { n(1) }), "Object", r) };
    Mr("getPrototypeOf", function() { return function(e) { return fe(ue(e)) } });
    var kr = d.Object.getPrototypeOf,
        Ar = n(r(function(e) { e.exports = { default: kr, __esModule: !0 } })),
        Vr = n(r(function(e, t) { t.__esModule = !0, t.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } })),
        Ir = n(r(function(e, t) { t.__esModule = !0; var n, r = (n = Xn) && n.__esModule ? n : { default: n };
            t.default = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t } }));
    M(M.S, "Object", { create: re });
    var Pr = d.Object,
        Lr = function(e, t) { return Pr.create(e, t) },
        xr = r(function(e) { e.exports = { default: Lr, __esModule: !0 } });
    n(xr);
    var Rr, Nr, Or, Dr, jr, Fr = n(r(function(e, t) { t.__esModule = !0; var n = a(Er),
                r = a(xr),
                i = a(Xn);

            function a(e) { return e && e.__esModule ? e : { default: e } }
            t.default = function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, i.default)(t)));
                e.prototype = (0, r.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (n.default ? (0, n.default)(e, t) : e.__proto__ = t) } })),
        Ur = function(e) {
            function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.name,
                    r = void 0 === n ? "" : n,
                    i = e.message,
                    a = void 0 === i ? "" : i,
                    o = e.data;
                Vr(this, t); var s = Ir(this, (t.__proto__ || Ar(t)).call(this, a)); return _r(s, t.prototype), s.name = r, s.data = o, s } return Fr(t, e), t }(Error);
    Or = e.CameraAccess || (e.CameraAccess = {}), Dr = ["rear", "back", "rück", "arrière", "trasera", "trás", "traseira", "posteriore", "后面", "後面", "背面", "后置", "後置", "背置", "задней", "الخلفية", "후", "arka", "achterzijde", "หลัง", "baksidan", "bagside", "sau", "bak", "tylny", "takakamera", "belakang", "אחורית", "πίσω", "spate", "hátsó", "zadní", "darrere", "zadná", "задня", "stražnja", "belakang", "बैक"], jr = new Sr, Or.getCameras = function() { return new Rt(function(t, n) { var r = e.BrowserHelper.checkBrowserCompatibility(); if (!r.fullSupport) return n(new Ur({ name: "UnsupportedBrowserError", message: "This OS / Browser has one or more missing features preventing it from working correctly", data: r })); var i = Rt.resolve();
            null == Or.mediaStream && (i = navigator.mediaDevices.getUserMedia({ video: !0, audio: !1 })), i.then(function(r) { return null != r && (Or.mediaStream = r), ("function" == typeof navigator.enumerateDevices ? navigator.enumerateDevices() : "object" === $n(navigator.mediaDevices) && "function" == typeof navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices() : new Rt(function(t, n) { try { window.MediaStreamTrack.getSources(function(e) { t(e.filter(function(e) { return "video" === e.kind.toLowerCase() || "videoinput" === e.kind.toLowerCase() }).map(function(e) { return { deviceId: null != e.deviceId ? e.deviceId : "", groupId: e.groupId, kind: "videoinput", label: e.label } })) }) } catch (t) { var r = { fullSupport: !1, scannerSupport: !0, missingFeatures: [e.BrowserCompatibility.Feature.MEDIA_DEVICES] }; return n(new Ur({ name: "UnsupportedBrowserError", message: "This OS / Browser has one or more missing features preventing it from working correctly", data: r })) } })).then(function(n) { var r, i = n.filter(function(e) { return "videoinput" === e.kind }).map(function(t) { if (jr.has(t.deviceId)) return jr.get(t.deviceId); var n = null != t.label ? t.label : "",
                            r = n.toLowerCase(),
                            i = { deviceId: t.deviceId, label: n, cameraType: Dr.some(function(e) { return -1 !== r.indexOf(e) }) ? e.Camera.Type.BACK : e.Camera.Type.FRONT }; return "" !== n && jr.set(t.deviceId, i), i }); if (i.length > 1 && !i.some(function(t) { return t.cameraType === e.Camera.Type.BACK })) { var a = i.slice(-1)[0];
                        i[i.length - 1] = { deviceId: a.deviceId, label: a.label, cameraType: e.Camera.Type.BACK } } return Or.mediaStream.getVideoTracks().forEach(function(e) { e.stop() }), (r = console).debug.apply(r, ["Camera list: "].concat(ar(i))), t(i) }).catch(function(e) { return Or.mediaStream.getVideoTracks().forEach(function(e) { e.stop() }), n(e) }) }).catch(function(e) { return n(e) }) }) }, Or.accessCameraStream = function(e, t) { var n = { audio: !1, video: {} }; return 0 === e ? n.video = { width: { min: 1400, ideal: 1920, max: 1920 }, height: { min: 900, ideal: 1440, max: 1440 } } : 1 === e ? n.video = { width: { min: 1200, ideal: 1920, max: 1920 }, height: { min: 900, ideal: 1200, max: 1200 } } : 2 === e ? n.video = { width: { min: 1080, ideal: 1920, max: 1920 }, height: { min: 900, ideal: 1080, max: 1080 } } : 3 === e ? n.video = { width: { min: 960, ideal: 1280, max: 1440 }, height: { min: 480, ideal: 960, max: 960 } } : 4 === e ? n.video = { width: { min: 720, ideal: 1280, max: 1440 }, height: { min: 480, ideal: 720, max: 768 } } : 5 === e && (n.video = { width: { min: 640, ideal: 960, max: 1440 }, height: { min: 480, ideal: 720, max: 720 } }), void 0 === t ? n.video = !0 : n.video.deviceId = { exact: t.deviceId }, console.debug("Camera access:", t), navigator.mediaDevices.getUserMedia(n) }, (Rr = (Nr = e.ImageSettings || (e.ImageSettings = {})).Format || (Nr.Format = {}))[Rr.GRAY_8U = 0] = "GRAY_8U", Rr[Rr.RGB_8U = 1] = "RGB_8U", Rr[Rr.RGBA_8U = 2] = "RGBA_8U";
    var zr = d.JSON || (d.JSON = { stringify: JSON.stringify }),
        Gr = function(e) { return zr.stringify.apply(zr, arguments) },
        Br = n(r(function(e) { e.exports = { default: Gr, __esModule: !0 } }));
    M(M.S + M.F * !h, "Object", { defineProperty: C.f });
    var Wr = d.Object,
        Yr = function(e, t, n) { return Wr.defineProperty(e, t, n) },
        Qr = r(function(e) { e.exports = { default: Yr, __esModule: !0 } });
    n(Qr);
    var Hr = n(r(function(e, t) { t.__esModule = !0; var n, r = (n = Qr) && n.__esModule ? n : { default: n };
            t.default = function() {
                function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(e, i.key, i) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }() })),
        Zr = r(function(e) { var t = Object.prototype.hasOwnProperty,
                n = "~";

            function r() {}

            function i(e, t, n) { this.fn = e, this.context = t, this.once = n || !1 }

            function a(e, t, r, a, o) { if ("function" != typeof r) throw new TypeError("The listener must be a function"); var s = new i(r, a || e, o),
                    c = n ? n + t : t; return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e }

            function o(e, t) { 0 == --e._eventsCount ? e._events = new r : delete e._events[t] }

            function s() { this._events = new r, this._eventsCount = 0 }
            Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (n = !1)), s.prototype.eventNames = function() { var e, r, i = []; if (0 === this._eventsCount) return i; for (r in e = this._events) t.call(e, r) && i.push(n ? r.slice(1) : r); return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i }, s.prototype.listeners = function(e) { var t = n ? n + e : e,
                    r = this._events[t]; if (!r) return []; if (r.fn) return [r.fn]; for (var i = 0, a = r.length, o = new Array(a); i < a; i++) o[i] = r[i].fn; return o }, s.prototype.listenerCount = function(e) { var t = n ? n + e : e,
                    r = this._events[t]; return r ? r.fn ? 1 : r.length : 0 }, s.prototype.emit = function(e, t, r, i, a, o) { var s = n ? n + e : e; if (!this._events[s]) return !1; var c, d, u = this._events[s],
                    l = arguments.length; if (u.fn) { switch (u.once && this.removeListener(e, u.fn, void 0, !0), l) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, t), !0;
                        case 3:
                            return u.fn.call(u.context, t, r), !0;
                        case 4:
                            return u.fn.call(u.context, t, r, i), !0;
                        case 5:
                            return u.fn.call(u.context, t, r, i, a), !0;
                        case 6:
                            return u.fn.call(u.context, t, r, i, a, o), !0 } for (d = 1, c = new Array(l - 1); d < l; d++) c[d - 1] = arguments[d];
                    u.fn.apply(u.context, c) } else { var p, f = u.length; for (d = 0; d < f; d++) switch (u[d].once && this.removeListener(e, u[d].fn, void 0, !0), l) {
                        case 1:
                            u[d].fn.call(u[d].context); break;
                        case 2:
                            u[d].fn.call(u[d].context, t); break;
                        case 3:
                            u[d].fn.call(u[d].context, t, r); break;
                        case 4:
                            u[d].fn.call(u[d].context, t, r, i); break;
                        default:
                            if (!c)
                                for (p = 1, c = new Array(l - 1); p < l; p++) c[p - 1] = arguments[p];
                            u[d].fn.apply(u[d].context, c) } } return !0 }, s.prototype.on = function(e, t, n) { return a(this, e, t, n, !1) }, s.prototype.once = function(e, t, n) { return a(this, e, t, n, !0) }, s.prototype.removeListener = function(e, t, r, i) { var a = n ? n + e : e; if (!this._events[a]) return this; if (!t) return o(this, a), this; var s = this._events[a]; if (s.fn) s.fn !== t || i && !s.once || r && s.context !== r || o(this, a);
                else { for (var c = 0, d = [], u = s.length; c < u; c++)(s[c].fn !== t || i && !s[c].once || r && s[c].context !== r) && d.push(s[c]);
                    d.length ? this._events[a] = 1 === d.length ? d[0] : d : o(this, a) } return this }, s.prototype.removeAllListeners = function(e) { var t; return e ? (t = n ? n + e : e, this._events[t] && o(this, t)) : (this._events = new r, this._eventsCount = 0), this }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, e.exports = s }).EventEmitter;

    function qr() { var e = void 0,
            t = void 0,
            n = void 0,
            r = void 0,
            i = !1,
            a = !1,
            o = !1,
            s = [],
            c = [],
            d = !1,
            u = !1,
            l = !1,
            p = !1;

        function f() { if (!d && null != t && i) { var e = Module.lengthBytesUTF8(t) + 1,
                    n = Module._malloc(e);
                Module.stringToUTF8(t, n, e), Module.asm._create_context(n, !1), Module._free(n), d = !0 } }

        function m() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (null != n && d && i)
                if (a = !1, null != t) { var r = JSON.parse(n),
                        o = Module.lengthBytesUTF8(n) + 1,
                        s = Module._malloc(o);
                    Module.stringToUTF8(n, s, o); var c = Module.asm._scanner_settings_new_from_json(s, p ? 1 : 0, r.matrixScanEnabled ? 1 : 0, e);
                    Module._free(s); var u = Module.UTF8ToString(c); "" !== u && (a = !0, postMessage(["status", "scan-settings-updated"]), console.debug(JSON.parse(u))) } else console.error("No license key found, the library must be set up before the scanning engine can be used") }

        function h() { null != r && i && (o = !1, Module.asm._scanner_image_settings_new(r.width, r.height, 1), null != e && (Module._free(e), e = void 0), e = Module._malloc(r.width * r.height), o = !0) }

        function v(t) { return Module.HEAPU8.set(t, e), Module.UTF8ToString(Module.asm._scanner_scan(e)) }

        function g(e, t, n) { var r = Module.lengthBytesUTF8(t) + 1,
                i = Module._malloc(r);
            Module.stringToUTF8(t, i, r); var a = Module.lengthBytesUTF8(n) + 1,
                o = Module._malloc(a);
            Module.stringToUTF8(n, o, a); var s = Module.asm._parser_parse_string(e.valueOf(), i, r - 1, o); return Module._free(i), Module._free(o), Module.UTF8ToString(s) }

        function y() { if (a && o || 0 === s.length || (f(), m(), h()), a && o)
                for (var e = void 0, t = void 0; 0 !== s.length;) {
                    (e = s.shift()).highQualitySingleFrameMode && m(!0), t = 1 === r.format.valueOf() ? v(S(e.data, 3)) : 2 === r.format.valueOf() ? v(S(e.data, 4)) : v(e.data), e.highQualitySingleFrameMode && m(!1); var n = JSON.parse(t);
                    null != n.error ? postMessage(["work-error", { requestId: e.requestId, error: n.error }]) : null != n.scanResult ? postMessage(["work-result", { requestId: e.requestId, result: n }]) : (console.error("Unrecognized Scandit Engine result:", n), postMessage([""], [e.data.buffer])) } }

        function b() { if (d || 0 === c.length || f(), d && i)
                for (var e = void 0, t = void 0; 0 !== c.length;) { t = g((e = c.shift()).dataFormat, e.dataString, e.options); var n = JSON.parse(t);
                    null != n.error ? postMessage(["parse-string-error", { requestId: e.requestId, error: n.error }]) : null != n.result ? postMessage(["parse-string-result", { requestId: e.requestId, result: n.result }]) : (console.error("Unrecognized Scandit Parser result:", n), postMessage(["parse-string-error", { requestId: e.requestId, error: { errorCode: -1, errorMessage: "Unknown Scandit Parser error" } }])) } }

        function S(e, t) { for (var n = new Uint8ClampedArray(e.length / t), r = e.length / t - 1, i = e.length - t; i >= 0;) n[r--] = .299 * e[i] + .587 * e[i + 1] + .114 * e[i + 2], i -= t; return n }
        onmessage = function(e) { var a = e.data; switch (a.type) {
                case "enable-blurry-decoding":
                    p = !0, u && (m(), y()); break;
                case "load-library":
                    (function(e, t) { var n = { arguments: [e], instantiateWasm: function(e, n) { return function(e, t, n, r) { var i = "scandit_wasm_cache",
                                        a = "wasm",
                                        o = void 0;

                                    function s(e) { try { var t = o.transaction([i], "readwrite").objectStore(i).put(e, a);
                                            t.onerror = function(e) { console.debug("Failed to cache scandit-sdk WebAssembly code: " + e) }, t.onsuccess = function() { console.debug("Successfully cached scandit-sdk WebAssembly code") } } catch (e) { "DataCloneError" === e.name ? console.debug("Failed to cache scandit-sdk WebAssembly code: This browser doesn't support this feature yet") : console.debug("Failed to cache scandit-sdk WebAssembly code: " + e) } }! function(e, s) { var c = void 0; try { c = indexedDB.open("scandit_wasm_cache", t) } catch (e) { return s("Failed to open scandit-sdk WebAssembly cache database: " + e) }
                                        c.onerror = function() { return s("Failed to open scandit-sdk WebAssembly cache database") }, c.onsuccess = function() { var e = (o = c.result).transaction([i]).objectStore(i).get(a);
                                            e.onerror = function() { return s("Failed to open scandit-sdk WebAssembly cache database") }, e.onsuccess = function() { return null != e.result ? (t = e.result, console.debug("Found cached scandit-sdk WebAssembly code"), void self.WebAssembly.instantiate(t, n).then(function(e) { r(e) })) : s("No cached version of the scandit-sdk WebAssembly code has been found"); var t } }, c.onupgradeneeded = function() {
                                            (o = c.result).objectStoreNames.contains(i) && o.deleteObjectStore(i), o.createObjectStore(i) } }(0, function(t) {
                                        function i() { fetch(e).then(function(e) { return e.arrayBuffer() }).then(function(e) { self.WebAssembly.instantiate(e, n).then(function(e) { null != o && s(e.module), r(e.instance) }) }) }
                                        console.debug(t), "function" == typeof self.WebAssembly.instantiateStreaming ? self.WebAssembly.instantiateStreaming(fetch(e), n).then(function(e) { null != o && s(e.module), r(e.instance) }).catch(function(e) { console.warn("wasm streaming compile failed: " + e + ", falling back to ArrayBuffer instantiation"), i() }) : i() }) }(t + "scandit-engine-sdk.wasm?v=3.1.2", "3.1.2".split(".").map(function(e, t) { return parseInt(e, 10) * Math.pow(10, 6 - 3 * t) }).reduce(function(e, t) { return e + t }), e, n), {} }, noInitialRun: !0, preRun: function() { try { FS.mkdir("/scandit_sync_folder") } catch (e) { if ("EEXIST" !== e.code) throw e }
                                FS.mount(IDBFS, {}, "/scandit_sync_folder"), FS.syncfs(!0, function() { Module.callMain(), i = !0, postMessage(["status", "ready"]), y(), b() }) } }; if (self.Module = n, "function" == typeof importScripts) try { importScripts(t + "scandit-engine-sdk.min.js?v=3.1.2") } catch (e) { console.warn(e), console.error("Couldn't retrieve Scandit SDK Engine library at " + t + "scandit-engine-sdk.min.js, did you configure the path for it correctly?") } })(a.deviceId, a.libraryLocation), self.path = a.path; break;
                case "license-key":
                    t = a.licenseKey, f(), l && b(); break;
                case "settings":
                    n = a.settings, u && (m(), y()); break;
                case "image-settings":
                    r = a.imageSettings, u && (h(), y()); break;
                case "work":
                    u = !0, s.push({ requestId: a.requestId, data: a.data, highQualitySingleFrameMode: a.highQualitySingleFrameMode }), y(); break;
                case "parse-string":
                    l = !0, c.push({ requestId: a.requestId, dataFormat: a.dataFormat, dataString: a.dataString, options: a.options }), b() } } }
    var Kr, Jr, Xr, $r, ei, ti = new Blob(["(" + qr.toString() + ")()"], { type: "text/javascript" });
    (ei = e.Barcode || (e.Barcode = {})).createFromWASMResult = function(e) { var t = void 0; try { t = decodeURIComponent(escape(String.fromCharCode.apply(null, e.rawData))) } catch (e) { t = "" } return { symbology: e.symbology, data: t, rawData: new Uint8Array(e.rawData), location: { topLeft: { x: e.location[0][0], y: e.location[0][1] }, topRight: { x: e.location[1][0], y: e.location[1][1] }, bottomRight: { x: e.location[2][0], y: e.location[2][1] }, bottomLeft: { x: e.location[3][0], y: e.location[3][1] } }, compositeFlag: e.compositeFlag, isGs1DataCarrier: e.isGs1DataCarrier, encodingArray: e.encodingArray } }, ($r = ei.Symbology || (ei.Symbology = {})).EAN13 = "ean13", $r.EAN8 = "ean8", $r.UPCA = "upca", $r.UPCE = "upce", $r.CODE128 = "code128", $r.CODE39 = "code39", $r.CODE93 = "code93", $r.INTERLEAVED_2_OF_5 = "itf", $r.QR = "qr", $r.DATA_MATRIX = "data-matrix", $r.PDF417 = "pdf417", $r.MSI_PLESSEY = "msi-plessey", $r.GS1_DATABAR = "databar", $r.GS1_DATABAR_EXPANDED = "databar-expanded", $r.CODABAR = "codabar", $r.AZTEC = "aztec", $r.TWO_DIGIT_ADD_ON = "two-digit-add-on", $r.FIVE_DIGIT_ADD_ON = "five-digit-add-on", $r.MAXICODE = "maxicode", $r.CODE11 = "code11", $r.GS1_DATABAR_LIMITED = "databar-limited", $r.CODE25 = "code25", $r.MICRO_PDF417 = "micropdf417", $r.RM4SCC = "rm4scc", $r.KIX = "kix", $r.DOTCODE = "dotcode", (Xr = ei.CompositeFlag || (ei.CompositeFlag = {}))[Xr.NONE = 0] = "NONE", Xr[Xr.UNKNOWN = 1] = "UNKNOWN", Xr[Xr.LINKED = 2] = "LINKED", Xr[Xr.GS1_A = 4] = "GS1_A", Xr[Xr.GS1_B = 8] = "GS1_B", Xr[Xr.GS1_C = 16] = "GS1_C",
        function(e) { e.toHumanizedName = function(t) { switch (t.toLowerCase()) {
                    case e.EAN13:
                        return "EAN-13";
                    case e.EAN8:
                        return "EAN-8";
                    case e.UPCA:
                        return "UPC-A";
                    case e.UPCE:
                        return "UPC-E";
                    case e.CODE128:
                        return "Code 128";
                    case e.CODE39:
                        return "Code 39";
                    case e.CODE93:
                        return "Code 93";
                    case e.INTERLEAVED_2_OF_5:
                        return "Interleaved Two of Five";
                    case e.QR:
                        return "QR";
                    case e.DATA_MATRIX:
                        return "Data Matrix";
                    case e.PDF417:
                        return "PDF417";
                    case e.MSI_PLESSEY:
                        return "MSI-Plessey";
                    case e.GS1_DATABAR:
                        return "GS1 DataBar 14";
                    case e.GS1_DATABAR_EXPANDED:
                        return "GS1 DataBar Expanded";
                    case e.CODABAR:
                        return "Codabar";
                    case e.AZTEC:
                        return "Aztec";
                    case e.TWO_DIGIT_ADD_ON:
                        return "Two-Digit Add-On";
                    case e.FIVE_DIGIT_ADD_ON:
                        return "Five-Digit Add-On";
                    case e.MAXICODE:
                        return "MaxiCode";
                    case e.CODE11:
                        return "Code 11";
                    case e.GS1_DATABAR_LIMITED:
                        return "GS1 DataBar Limited";
                    case e.CODE25:
                        return "Code 25";
                    case e.MICRO_PDF417:
                        return "MicroPDF417";
                    case e.RM4SCC:
                        return "RM4SCC";
                    case e.KIX:
                        return "KIX";
                    case e.DOTCODE:
                        return "DotCode";
                    default:
                        return "Unknown" } }, e.toJSONName = function(t) { switch (t.toLowerCase()) {
                    case e.EAN13:
                        return "ean13";
                    case e.EAN8:
                        return "ean8";
                    case e.UPCA:
                        return "upca";
                    case e.UPCE:
                        return "upce";
                    case e.CODE128:
                        return "code128";
                    case e.CODE39:
                        return "code39";
                    case e.CODE93:
                        return "code93";
                    case e.INTERLEAVED_2_OF_5:
                        return "itf";
                    case e.QR:
                        return "qr";
                    case e.DATA_MATRIX:
                        return "data-matrix";
                    case e.PDF417:
                        return "pdf417";
                    case e.MSI_PLESSEY:
                        return "msi-plessey";
                    case e.GS1_DATABAR:
                        return "databar";
                    case e.GS1_DATABAR_EXPANDED:
                        return "databar-expanded";
                    case e.CODABAR:
                        return "codabar";
                    case e.AZTEC:
                        return "aztec";
                    case e.TWO_DIGIT_ADD_ON:
                        return "two-digit-add-on";
                    case e.FIVE_DIGIT_ADD_ON:
                        return "five-digit-add-on";
                    case e.MAXICODE:
                        return "maxicode";
                    case e.CODE11:
                        return "code11";
                    case e.GS1_DATABAR_LIMITED:
                        return "databar-limited";
                    case e.CODE25:
                        return "code25";
                    case e.MICRO_PDF417:
                        return "micropdf417";
                    case e.RM4SCC:
                        return "rm4scc";
                    case e.KIX:
                        return "kix";
                    case e.DOTCODE:
                        return "dotcode";
                    default:
                        return "unknown" } } }(ei.Symbology || (ei.Symbology = {})), e.Parser = function() {
            function e(t, n) { Vr(this, e), this.scanner = t, this.dataFormat = n } return Hr(e, [{ key: "setOptions", value: function(e) { this.options = e } }, { key: "parseRawData", value: function(e) { var t = void 0; try { t = decodeURIComponent(escape(String.fromCharCode.apply(null, e))) } catch (e) { t = "" } return this.scanner.parseString(this.dataFormat, t, this.options) } }, { key: "parseString", value: function(e) { return this.scanner.parseString(this.dataFormat, e, this.options) } }]), e }(), (Kr = (Jr = e.Parser || (e.Parser = {})).DataFormat || (Jr.DataFormat = {}))[Kr.GS1_AI = 1] = "GS1_AI", Kr[Kr.HIBC = 2] = "HIBC", Kr[Kr.DLID = 3] = "DLID", Kr[Kr.MRTD = 4] = "MRTD", Kr[Kr.SWISSQR = 5] = "SWISSQR";
    var ni = d.getIterator = function(e) { var t = je(e); if ("function" != typeof t) throw TypeError(e + " is not iterable!"); return f(t.call(e)) },
        ri = n(r(function(e) { e.exports = { default: ni, __esModule: !0 } })),
        ii = cn.f,
        ai = function(e) { for (var t, n = R(e), r = K(n), i = r.length, a = 0, o = []; i > a;) ii.call(n, t = r[a++]) && o.push(n[t]); return o };
    M(M.S, "Object", { values: function(e) { return ai(e) } });
    var oi = d.Object.values,
        si = n(r(function(e) { e.exports = { default: oi, __esModule: !0 } }));
    fr("Set", function(e) { return function() { return e(this, arguments.length > 0 ? arguments[0] : void 0) } }, { add: function(e) { return lr.def(or(this, "Set"), e = 0 === e ? 0 : e, e) } }, lr), M(M.P + M.R, "Set", { toJSON: mr("Set") }), hr("Set"), vr("Set");
    var ci, di, ui, li = d.Set,
        pi = n(r(function(e) { e.exports = { default: li, __esModule: !0 } }));
    e.SymbologySettings = function() {
        function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.enabled,
                r = void 0 !== n && n,
                i = t.colorInvertedEnabled,
                a = void 0 !== i && i,
                o = t.activeSymbolCounts,
                s = void 0 === o ? [] : o,
                c = t.extensions,
                d = void 0 === c ? null : c,
                u = t.checksums,
                l = void 0 === u ? null : u;
            Vr(this, e), this.enabled = r, this.colorInvertedEnabled = a, this.activeSymbolCounts = s, this.customExtensions = null != d, this.customChecksums = null != l, null == d && (d = []), null == l && (l = []), this.extensions = new pi(ir(d).filter(function(t) { return t in e.Extension || -1 !== si(e.Extension).indexOf(t.toLowerCase()) })), this.checksums = new pi(ir(l).filter(function(t) { return t in e.Checksum || -1 !== si(e.Checksum).indexOf(t.toLowerCase()) })) } return Hr(e, [{ key: "isEnabled", value: function() { return this.enabled } }, { key: "setEnabled", value: function(e) { return this.enabled = e, this } }, { key: "isColorInvertedEnabled", value: function() { return this.colorInvertedEnabled } }, { key: "setColorInvertedEnabled", value: function(e) { return this.colorInvertedEnabled = e, this } }, { key: "getActiveSymbolCounts", value: function() { return this.activeSymbolCounts } }, { key: "setActiveSymbolCounts", value: function(e) { return this.activeSymbolCounts = e, this } }, { key: "setActiveSymbolCountsRange", value: function(e, t) { return this.activeSymbolCounts = ir({ length: t - e + 1 }, function(t, n) { return n + e }), this } }, { key: "getEnabledExtensions", value: function() { return this.extensions } }, { key: "enableExtensions", value: function(t) { return this.customExtensions = !0, "object" === (void 0 === t ? "undefined" : $n(t)) ? this.extensions = new pi([].concat(ar(this.extensions), ar(ir(t).filter(function(t) { return t in e.Extension || -1 !== si(e.Extension).indexOf(t.toLowerCase()) })))) : (t in e.Extension || -1 !== si(e.Extension).indexOf(t.toLowerCase())) && this.extensions.add(t), this } }, { key: "disableExtensions", value: function(e) { return "object" === (void 0 === e ? "undefined" : $n(e)) ? this.extensions = new pi([].concat(ar(this.extensions)).filter(function(t) { return e instanceof Array ? -1 === e.indexOf(t) : !e.has(t) })) : this.extensions.delete(e), this } }, { key: "getEnabledChecksums", value: function() { return this.checksums } }, { key: "enableChecksums", value: function(t) { return this.customChecksums = !0, "object" === (void 0 === t ? "undefined" : $n(t)) ? this.checksums = new pi([].concat(ar(this.checksums), ar(ir(t).filter(function(t) { return t in e.Checksum || -1 !== si(e.Checksum).indexOf(t.toLowerCase()) })))) : (t in e.Checksum || -1 !== si(e.Checksum).indexOf(t.toLowerCase())) && this.checksums.add(t), this } }, { key: "disableChecksums", value: function(e) { return "object" === (void 0 === e ? "undefined" : $n(e)) ? this.checksums = new pi([].concat(ar(this.checksums)).filter(function(t) { return e instanceof Array ? -1 === e.indexOf(t) : !e.has(t) })) : this.checksums.delete(e), this } }, { key: "toJSON", value: function() { return { enabled: this.enabled, colorInvertedEnabled: this.colorInvertedEnabled, activeSymbolCounts: 0 === this.activeSymbolCounts.length ? void 0 : this.activeSymbolCounts, extensions: this.customExtensions ? ir(this.extensions) : void 0, checksums: this.customChecksums ? ir(this.checksums) : void 0 } } }]), e }(), (di = (ui = e.SymbologySettings || (e.SymbologySettings = {})).Extension || (ui.Extension = {})).DIRECT_PART_MARKING_MODE = "direct_part_marking_mode", di.FULL_ASCII = "full_ascii", di.RELAXED_SHARP_QUIET_ZONE_CHECK = "relaxed_sharp_quiet_zone_check", di.REMOVE_LEADING_ZERO = "remove_leading_zero", di.REMOVE_LEADING_UPCA_ZERO = "remove_leading_upca_zero", di.RETURN_AS_UPCA = "return_as_upca", di.STRIP_LEADING_FNC1 = "strip_leading_fnc1", (ci = ui.Checksum || (ui.Checksum = {})).MOD_10 = "mod10", ci.MOD_11 = "mod11", ci.MOD_16 = "mod16", ci.MOD_43 = "mod43", ci.MOD_47 = "mod47", ci.MOD_103 = "mod103", ci.MOD_1010 = "mod1010", ci.MOD_1110 = "mod1110";
    var fi = function() {
            function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.enabledSymbologies,
                    r = void 0 === n ? [] : n,
                    i = e.codeDuplicateFilter,
                    a = void 0 === i ? 0 : i,
                    o = e.maxNumberOfCodesPerFrame,
                    s = void 0 === o ? 1 : o,
                    c = e.searchArea,
                    d = void 0 === c ? { x: 0, y: 0, width: 1, height: 1 } : c;
                Vr(this, t), this.symbologySettings = new Sr, this.enableSymbologies(r), this.codeDuplicateFilter = a, this.maxNumberOfCodesPerFrame = s, this.baseSearchArea = { x: 0, y: 0, width: 1, height: 1 }, this.searchArea = d } return Hr(t, [{ key: "toJSONString", value: function() { var t = {};
                    this.symbologySettings.forEach(function(n, r) { t[e.Barcode.Symbology.toJSONName(r)] = n }); var n = { x: Math.min(1, this.baseSearchArea.x + this.searchArea.x * this.baseSearchArea.width), y: Math.min(1, this.baseSearchArea.y + this.searchArea.y * this.baseSearchArea.height), width: Math.min(1, this.baseSearchArea.width * this.searchArea.width), height: Math.min(1, this.baseSearchArea.height * this.searchArea.height) },
                        r = 0 === Math.round(100 * n.x) && 0 === Math.round(100 * n.y) && 100 === Math.round(100 * n.width) && 100 === Math.round(100 * n.height); return Br({ symbologies: t, codeDuplicateFilter: this.codeDuplicateFilter, maxNumberOfCodesPerFrame: this.maxNumberOfCodesPerFrame, searchArea: n, codeLocation1d: r ? void 0 : { area: { x: n.x, y: n.y + .75 * n.height / 2, width: n.width, height: .25 * n.height } }, codeLocation2d: r ? void 0 : { area: n } }) } }, { key: "getSymbologySettings", value: function(t) { if (this.symbologySettings.has(t)) return this.symbologySettings.get(t); if (t in e.Barcode.Symbology || -1 !== si(e.Barcode.Symbology).indexOf(t)) return this.symbologySettings.set(t, new e.SymbologySettings), this.symbologySettings.get(t); throw new TypeError('Invalid symbology "' + t + '"') } }, { key: "isSymbologyEnabled", value: function(e) { return this.getSymbologySettings(e).isEnabled() } }, { key: "enableSymbologies", value: function(e) { return this.setSymbologiesEnabled(e, !0) } }, { key: "disableSymbologies", value: function(e) { return this.setSymbologiesEnabled(e, !1) } }, { key: "getCodeDuplicateFilter", value: function() { return this.codeDuplicateFilter } }, { key: "setCodeDuplicateFilter", value: function(e) { return this.codeDuplicateFilter = e, this } }, { key: "getMaxNumberOfCodesPerFrame", value: function() { return this.maxNumberOfCodesPerFrame } }, { key: "setMaxNumberOfCodesPerFrame", value: function(e) { return this.maxNumberOfCodesPerFrame = e, this } }, { key: "getSearchArea", value: function() { return this.searchArea } }, { key: "setSearchArea", value: function(e) { return this.searchArea = e, this } }, { key: "getBaseSearchArea", value: function() { return this.baseSearchArea } }, { key: "setBaseSearchArea", value: function(e) { return this.baseSearchArea = e, this } }, { key: "setSymbologiesEnabled", value: function(t, n) { if ("object" === (void 0 === t ? "undefined" : $n(t))) { var r = !0,
                            i = !1,
                            a = void 0; try { for (var o, s = ri(t); !(r = (o = s.next()).done); r = !0) { var c = o.value; if (!(c in e.Barcode.Symbology || -1 !== si(e.Barcode.Symbology).indexOf(c))) throw new TypeError('Invalid symbology "' + c + '"') } } catch (e) { i = !0, a = e } finally { try {!r && s.return && s.return() } finally { if (i) throw a } } var d = !0,
                            u = !1,
                            l = void 0; try { for (var p, f = ri(t); !(d = (p = f.next()).done); d = !0) { var m = p.value;
                                this.symbologySettings.has(m) ? this.symbologySettings.get(m).setEnabled(n) : this.symbologySettings.set(m, new e.SymbologySettings({ enabled: n })) } } catch (e) { u = !0, l = e } finally { try {!d && f.return && f.return() } finally { if (u) throw l } } } else { if (!(t in e.Barcode.Symbology || -1 !== si(e.Barcode.Symbology).indexOf(t))) throw new TypeError('Invalid symbology "' + t + '"');
                        this.symbologySettings.has(t) ? this.symbologySettings.get(t).setEnabled(n) : this.symbologySettings.set(t, new e.SymbologySettings({ enabled: n })) } return this } }]), t }(),
        mi = (Fr(function e() { return Vr(this, e), Ir(this, (e.__proto__ || Ar(e)).apply(this, arguments)) }, Zr), function() {
            function t() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = n.scanSettings,
                    i = void 0 === r ? new fi : r,
                    a = n.imageSettings;
                Vr(this, t); var o = e.BrowserHelper.checkBrowserCompatibility(); if (!o.scannerSupport) throw new Ur({ name: "UnsupportedBrowserError", message: "This OS / Browser has one or more missing features preventing it from working correctly", data: o }); if (null == e.userLicenseKey || "" === e.userLicenseKey.trim()) throw new Ur({ name: "LibraryNotConfiguredError", message: "The library has not correctly been configured yet, please call 'configure' with valid parameters" });
                this.isReadyToWork = !1, this.workerScanQueueLength = 0, this.engineSDKWorker = new Worker(URL.createObjectURL(ti)), this.engineSDKWorker.onmessage = this.engineWorkerOnMessage.bind(this), this.engineSDKWorker.postMessage({ type: "load-library", deviceId: xi, libraryLocation: e.scanditEngineLocation, path: self.location.pathname }), this.eventEmitter = new Zr, this.workerParseRequestId = 0, this.workerScanRequestId = 0, this.applyLicenseKey(e.userLicenseKey), this.applyScanSettings(i), null != a && this.applyImageSettings(a) } return Hr(t, [{ key: "destroy", value: function() { null != this.engineSDKWorker && this.engineSDKWorker.terminate(), this.eventEmitter.removeAllListeners() } }, { key: "applyScanSettings", value: function(e) { return this.scanSettings = e, this.engineSDKWorker.postMessage({ type: "settings", settings: this.scanSettings.toJSONString() }), this } }, { key: "applyImageSettings", value: function(e) { return this.imageSettings = e, this.engineSDKWorker.postMessage({ type: "image-settings", imageSettings: e }), this } }, { key: "processImage", value: function(t) { var n = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if (null == this.imageSettings) return Rt.reject(new Ur({ name: "NoImageSettings", message: "No image settings set up in the scanner" })); var i = void 0; switch (this.imageSettings.format.valueOf()) {
                        case e.ImageSettings.Format.GRAY_8U:
                            i = 1; break;
                        case e.ImageSettings.Format.RGB_8U:
                            i = 3; break;
                        case e.ImageSettings.Format.RGBA_8U:
                            i = 4; break;
                        default:
                            i = 1 } return this.imageSettings.width * this.imageSettings.height * i !== t.length ? Rt.reject(new Ur({ name: "ImageSettingsDataMismatch", message: "The provided image data doesn't match the previously set image settings" })) : (this.workerScanRequestId++, this.workerScanQueueLength++, new Rt(function(i, a) { var o = "work-result-" + n.workerScanRequestId,
                            s = "work-error-" + n.workerScanRequestId;
                        n.eventEmitter.once(o, function(r) { n.eventEmitter.removeAllListeners(s), i({ barcodes: r.scanResult.map(e.Barcode.createFromWASMResult), imageData: t, imageSettings: n.imageSettings }) }), n.eventEmitter.once(s, function(e) { console.error("Scandit Engine error (" + e.errorCode + "):", e.errorMessage), n.eventEmitter.removeAllListeners(o); var t = new Ur({ name: "ScanditEngineError", message: e.errorMessage + " (" + e.errorCode + ")" });
                            a(t) }), n.engineSDKWorker.postMessage({ type: "work", requestId: n.workerScanRequestId, data: t, highQualitySingleFrameMode: r }) })) } }, { key: "isBusyProcessing", value: function() { return 0 !== this.workerScanQueueLength } }, { key: "isReady", value: function() { return this.isReadyToWork } }, { key: "onReady", value: function(e) { return this.isReadyToWork ? e() : this.eventEmitter.once("ready", e, this), this } }, { key: "createParserForFormat", value: function(t) { return new e.Parser(this, t) } }, { key: "getImageSettings", value: function() { return this.imageSettings } }, { key: "getScanSettings", value: function() { return this.scanSettings } }, { key: "parseString", value: function(e, t, n) { var r = this; return this.workerParseRequestId++, new Rt(function(i, a) { var o = "parse-string-result-" + r.workerParseRequestId,
                            s = "parse-string-error-" + r.workerParseRequestId;
                        r.eventEmitter.once(o, function(e) { r.eventEmitter.removeAllListeners(s); var t = { jsonString: e, fields: [], fieldsByName: {} };
                            JSON.parse(e).forEach(function(e) { t.fields.push(e), t.fieldsByName[e.name] = e }), i(t) }), r.eventEmitter.once(s, function(e) { console.error("Scandit Engine error (" + e.errorCode + "):", e.errorMessage), r.eventEmitter.removeAllListeners(o); var t = new Ur({ name: "ScanditEngineError", message: e.errorMessage + " (" + e.errorCode + ")" });
                            a(t) }), r.engineSDKWorker.postMessage({ type: "parse-string", requestId: r.workerParseRequestId, dataFormat: e, dataString: t, options: null == n ? "{}" : Br(n) }) }) } }, { key: "applyLicenseKey", value: function(e) { return this.engineSDKWorker.postMessage({ type: "license-key", licenseKey: e }), this } }, { key: "engineWorkerOnMessage", value: function(e) { var t = e.data[0],
                        n = e.data[1]; "status" === t ? "ready" === n && (this.isReadyToWork = !0, this.eventEmitter.emit("ready")) : "work-result" === t && null != n ? (this.eventEmitter.emit("work-result-" + n.requestId, n.result), this.workerScanQueueLength--) : "work-error" === t && null != n ? (this.eventEmitter.emit("work-error-" + n.requestId, n.error), this.workerScanQueueLength--) : "parse-string-result" === t && null != n ? this.eventEmitter.emit("parse-string-result-" + n.requestId, n.result) : "parse-string-error" === t && null != n && this.eventEmitter.emit("parse-string-error-" + n.requestId, n.error) } }]), t }());
    ! function(e) { if ("undefined" != typeof window) { var t = document.createElement("style");
            t.setAttribute("type", "text/css"), t.innerHTML = '.scandit.scandit-container{align-items:center;display:flex;height:100%;justify-content:center;overflow:hidden;width:100%}.scandit.scandit-barcode-picker{background-color:#000;height:100%;position:relative;width:100%}.scandit .scandit-video{display:block;height:100%;position:relative;width:100%}.scandit .scandit-video.mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.scandit .scandit-logo{-webkit-transform:translateZ(0);bottom:5%;max-height:12.5%;max-width:35%;pointer-events:none;position:absolute;right:5%;transform:translateZ(0)}.scandit .scandit-laser{max-height:10%;max-width:75%}.scandit .scandit-laser,.scandit .scandit-viewfinder{-webkit-animation-duration:.25s;-webkit-transform:translateZ(0);animation-duration:.25s;bottom:0;left:0;margin:auto;pointer-events:none;position:absolute;right:0;top:0;transform:translateZ(0);transition:opacity .25s ease;z-index:10}.scandit .scandit-viewfinder{border:2px solid #fff;border-radius:10px;box-sizing:border-box;height:60%;width:90%}.scandit .scandit-viewfinder.paused{opacity:.4}.scandit .scandit-camera-switcher,.scandit .scandit-torch-toggle{-webkit-filter:drop-shadow(0 2px 0 grey);-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-transform:translateZ(0);cursor:pointer;filter:drop-shadow(0 2px 0 #808080);max-height:15%;max-width:15%;position:absolute;top:5%;transform:translateZ(0);z-index:10}.scandit .scandit-camera-switcher{left:5%}.scandit .scandit-torch-toggle{right:5%}.scandit .scandit-camera-upload{-webkit-tap-highlight-color:rgba(255,255,255,0);align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%;z-index:5}.scandit .scandit-camera-upload label{-webkit-filter:drop-shadow(0 0 .15rem #000);border-radius:50%;box-sizing:border-box;cursor:pointer;filter:drop-shadow(0 0 .15rem #000);height:224px;margin:4px;min-height:224px;min-width:224px;padding:20px;text-align:center;width:224px;z-index:10}.scandit .scandit-camera-upload label input[type=file]{position:absolute;top:-9999px}.scandit .scandit-camera-upload label img{height:60%;width:60%}.scandit .scandit-camera-upload label div{color:#fff;font-family:sans-serif;font-size:16pt}.scandit .radial-progress{-webkit-animation-duration:.25s;animation-duration:.25s;background-color:transparent;border:4px solid #fff;border-radius:50%;box-shadow:0 0 .3rem #000,inset 0 0 .3rem #000;height:224px;position:absolute;transition:opacity 1s ease,border-color .5s;width:224px;z-index:7}.scandit .radial-progress[data-progress="0"]{border-color:hsla(0,0%,100%,.2)}.scandit .radial-progress[data-progress="5"]{border-color:hsla(0,0%,100%,.24)}.scandit .radial-progress[data-progress="10"]{border-color:hsla(0,0%,100%,.28)}.scandit .radial-progress[data-progress="15"]{border-color:hsla(0,0%,100%,.32)}.scandit .radial-progress[data-progress="20"]{border-color:hsla(0,0%,100%,.36)}.scandit .radial-progress[data-progress="25"]{border-color:hsla(0,0%,100%,.4)}.scandit .radial-progress[data-progress="30"]{border-color:hsla(0,0%,100%,.44)}.scandit .radial-progress[data-progress="35"]{border-color:hsla(0,0%,100%,.48)}.scandit .radial-progress[data-progress="40"]{border-color:hsla(0,0%,100%,.52)}.scandit .radial-progress[data-progress="45"]{border-color:hsla(0,0%,100%,.56)}.scandit .radial-progress[data-progress="50"]{border-color:hsla(0,0%,100%,.6)}.scandit .radial-progress[data-progress="55"]{border-color:hsla(0,0%,100%,.64)}.scandit .radial-progress[data-progress="60"]{border-color:hsla(0,0%,100%,.68)}.scandit .radial-progress[data-progress="65"]{border-color:hsla(0,0%,100%,.72)}.scandit .radial-progress[data-progress="70"]{border-color:hsla(0,0%,100%,.76)}.scandit .radial-progress[data-progress="75"]{border-color:hsla(0,0%,100%,.8)}.scandit .radial-progress[data-progress="80"]{border-color:hsla(0,0%,100%,.84)}.scandit .radial-progress[data-progress="85"]{border-color:hsla(0,0%,100%,.88)}.scandit .radial-progress[data-progress="90"]{border-color:hsla(0,0%,100%,.92)}.scandit .radial-progress[data-progress="95"]{border-color:hsla(0,0%,100%,.96)}.scandit .radial-progress[data-progress="100"]{border-color:#fff}.scandit .scandit-flash-color{-webkit-animation-name:scandit-flash-color;animation-name:scandit-flash-color}.scandit .scandit-flash-white{-webkit-animation-name:scandit-flash-white;animation-name:scandit-flash-white}.scandit .scandit-flash-white-inset{-webkit-animation-name:scandit-flash-white-inset;animation-name:scandit-flash-white-inset}.scandit .scandit-opacity-pulse{-webkit-animation-delay:0s,.333s;-webkit-animation-duration:.333s,1s;-webkit-animation-iteration-count:1,infinite;-webkit-animation-name:scandit-opacity-pulse-before,scandit-opacity-pulse;-webkit-animation-timing-function:cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1);animation-delay:0s,.333s;animation-duration:.333s,1s;animation-iteration-count:1,infinite;animation-name:scandit-opacity-pulse-before,scandit-opacity-pulse;animation-timing-function:cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1)}.scandit .scandit-hidden-opacity{opacity:0}.scandit-hidden{display:none!important}@-webkit-keyframes scandit-flash-color{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2);filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2)}to{-webkit-filter:none;filter:none}}@keyframes scandit-flash-color{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2);filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2)}to{-webkit-filter:none;filter:none}}@-webkit-keyframes scandit-flash-white{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff);filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff)}to{-webkit-filter:none;filter:none}}@keyframes scandit-flash-white{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff);filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff)}to{-webkit-filter:none;filter:none}}@-webkit-keyframes scandit-flash-white-inset{0%{box-shadow:none}50%{box-shadow:inset 0 0 .5rem #fff,inset 0 0 1rem #fff,inset 0 0 2.5rem #fff}to{box-shadow:none}}@keyframes scandit-flash-white-inset{0%{box-shadow:none}50%{box-shadow:inset 0 0 .5rem #fff,inset 0 0 1rem #fff,inset 0 0 2.5rem #fff}to{box-shadow:none}}@-webkit-keyframes scandit-opacity-pulse-before{0%{opacity:1}to{opacity:.4}}@keyframes scandit-opacity-pulse-before{0%{opacity:1}to{opacity:.4}}@-webkit-keyframes scandit-opacity-pulse{0%{opacity:.4}50%{opacity:.6}to{opacity:.4}}@keyframes scandit-opacity-pulse{0%{opacity:.4}50%{opacity:.6}to{opacity:.4}}@-webkit-keyframes scandit-opacity-pulse-after{0%{opacity:.5}to{opacity:1}}@keyframes scandit-opacity-pulse-after{0%{opacity:.5}to{opacity:1}}', document.head.appendChild(t) } }();
    var hi = r(function(e, n) {
            /*! howler.js v2.0.13 | (c) 2013-2018, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
            ! function() { var e = function() { this.init() };
                e.prototype = { init: function() { var e = this || r; return e._counter = 1e3, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e }, volume: function(e) { var t = this || r; if (e = parseFloat(e), t.ctx || l(), void 0 !== e && e >= 0 && e <= 1) { if (t._volume = e, t._muted) return t;
                            t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, r.ctx.currentTime); for (var n = 0; n < t._howls.length; n++)
                                if (!t._howls[n]._webAudio)
                                    for (var i = t._howls[n]._getSoundIds(), a = 0; a < i.length; a++) { var o = t._howls[n]._soundById(i[a]);
                                        o && o._node && (o._node.volume = o._volume * e) }
                                return t } return t._volume }, mute: function(e) { var t = this || r;
                        t.ctx || l(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, r.ctx.currentTime); for (var n = 0; n < t._howls.length; n++)
                            if (!t._howls[n]._webAudio)
                                for (var i = t._howls[n]._getSoundIds(), a = 0; a < i.length; a++) { var o = t._howls[n]._soundById(i[a]);
                                    o && o._node && (o._node.muted = !!e || o._muted) }
                            return t }, unload: function() { for (var e = this || r, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload(); return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, l()), e }, codecs: function(e) { return (this || r)._codecs[e.replace(/^x-/, "")] }, _setup: function() { var e = this || r; if (e.state = e.ctx && e.ctx.state || "running", e._autoSuspend(), !e.usingWebAudio)
                            if ("undefined" != typeof Audio) try { void 0 === (new Audio).oncanplaythrough && (e._canPlayEvent = "canplay") } catch (t) { e.noAudio = !0 } else e.noAudio = !0;
                        try {
                            (new Audio).muted && (e.noAudio = !0) } catch (e) {} return e.noAudio || e._setupCodecs(), e }, _setupCodecs: function() { var e = this || r,
                            t = null; try { t = "undefined" != typeof Audio ? new Audio : null } catch (t) { return e } if (!t || "function" != typeof t.canPlayType) return e; var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                            i = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                            a = i && parseInt(i[0].split("/")[1], 10) < 33; return e._codecs = { mp3: !(a || !n && !t.canPlayType("audio/mp3;").replace(/^no$/, "")), mpeg: !!n, opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), wav: !!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""), caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""), m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""), mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""), weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""), webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""), dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""), flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "") }, e }, _enableMobileAudio: function() { var e = this || r,
                            t = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent),
                            n = !!("ontouchend" in window || e._navigator && e._navigator.maxTouchPoints > 0 || e._navigator && e._navigator.msMaxTouchPoints > 0); if (!e._mobileEnabled && e.ctx && (t || n)) { e._mobileEnabled = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050); var i = function() { r._autoResume(); var t = e.ctx.createBufferSource();
                                t.buffer = e._scratchBuffer, t.connect(e.ctx.destination), void 0 === t.start ? t.noteOn(0) : t.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), t.onended = function() { t.disconnect(0), e._mobileEnabled = !0, e.mobileAutoEnable = !1, document.removeEventListener("touchstart", i, !0), document.removeEventListener("touchend", i, !0) } }; return document.addEventListener("touchstart", i, !0), document.addEventListener("touchend", i, !0), e } }, _autoSuspend: function() { var e = this; if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && r.usingWebAudio) { for (var t = 0; t < e._howls.length; t++)
                                if (e._howls[t]._webAudio)
                                    for (var n = 0; n < e._howls[t]._sounds.length; n++)
                                        if (!e._howls[t]._sounds[n]._paused) return e;
                            return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() { e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function() { e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume()) })) }, 3e4), e } }, _autoResume: function() { var e = this; if (e.ctx && void 0 !== e.ctx.resume && r.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then(function() { e.state = "running"; for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume") }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e } }; var r = new e,
                    i = function(e) { e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.") };
                i.prototype = { init: function(e) { var t = this; return r.ctx || l(), t._autoplay = e.autoplay || !1, t._format = "string" != typeof e.format ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload || e.preload, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._xhrWithCredentials = e.xhrWithCredentials || !1, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{ fn: e.onend }] : [], t._onfade = e.onfade ? [{ fn: e.onfade }] : [], t._onload = e.onload ? [{ fn: e.onload }] : [], t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : [], t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : [], t._onpause = e.onpause ? [{ fn: e.onpause }] : [], t._onplay = e.onplay ? [{ fn: e.onplay }] : [], t._onstop = e.onstop ? [{ fn: e.onstop }] : [], t._onmute = e.onmute ? [{ fn: e.onmute }] : [], t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : [], t._onrate = e.onrate ? [{ fn: e.onrate }] : [], t._onseek = e.onseek ? [{ fn: e.onseek }] : [], t._onresume = [], t._webAudio = r.usingWebAudio && !t._html5, void 0 !== r.ctx && r.ctx && r.mobileAutoEnable && r._enableMobileAudio(), r._howls.push(t), t._autoplay && t._queue.push({ event: "play", action: function() { t.play() } }), t._preload && t.load(), t }, load: function() { var e = this,
                            t = null; if (!r.noAudio) { "string" == typeof e._src && (e._src = [e._src]); for (var n = 0; n < e._src.length; n++) { var i, o; if (e._format && e._format[n]) i = e._format[n];
                                else { if ("string" != typeof(o = e._src[n])) { e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring."); continue }(i = /^data:audio\/([^;,]+);/i.exec(o)) || (i = /\.([^.]+)$/.exec(o.split("?", 1)[0])), i && (i = i[1].toLowerCase()) } if (i || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), i && r.codecs(i)) { t = e._src[n]; break } } return t ? (e._src = t, e._state = "loading", "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new a(e), e._webAudio && s(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources.") }
                        e._emit("loaderror", null, "No audio support.") }, play: function(e, t) { var n = this,
                            i = null; if ("number" == typeof e) i = e, e = null;
                        else { if ("string" == typeof e && "loaded" === n._state && !n._sprite[e]) return null; if (void 0 === e) { e = "__default"; for (var a = 0, o = 0; o < n._sounds.length; o++) n._sounds[o]._paused && !n._sounds[o]._ended && (a++, i = n._sounds[o]._id);
                                1 === a ? e = null : i = null } } var s = i ? n._soundById(i) : n._inactiveSound(); if (!s) return null; if (i && !e && (e = s._sprite || "__default"), "loaded" !== n._state) { s._sprite = e, s._ended = !1; var c = s._id; return n._queue.push({ event: "play", action: function() { n.play(c) } }), c } if (i && !s._paused) return t || n._loadQueue("play"), s._id;
                        n._webAudio && r._autoResume(); var d = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3),
                            u = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - d),
                            l = 1e3 * u / Math.abs(s._rate);
                        s._paused = !1, s._ended = !1, s._sprite = e, s._seek = d, s._start = n._sprite[e][0] / 1e3, s._stop = (n._sprite[e][0] + n._sprite[e][1]) / 1e3, s._loop = !(!s._loop && !n._sprite[e][2]); var p = s._node; if (n._webAudio) { var f = function() { n._refreshBuffer(s); var e = s._muted || n._muted ? 0 : s._volume;
                                p.gain.setValueAtTime(e, r.ctx.currentTime), s._playStart = r.ctx.currentTime, void 0 === p.bufferSource.start ? s._loop ? p.bufferSource.noteGrainOn(0, d, 86400) : p.bufferSource.noteGrainOn(0, d, u) : s._loop ? p.bufferSource.start(0, d, 86400) : p.bufferSource.start(0, d, u), l !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l)), t || setTimeout(function() { n._emit("play", s._id) }, 0) }; "running" === r.state ? f() : (n.once("resume", f), n._clearTimer(s._id)) } else { var m = function() { p.currentTime = d, p.muted = s._muted || n._muted || r._muted || p.muted, p.volume = s._volume * r.volume(), p.playbackRate = s._rate; try { var i = p.play(); if ("undefined" != typeof Promise && i instanceof Promise) { n._playLock = !0; var a = function() { n._playLock = !1, t || n._emit("play", s._id) };
                                            i.then(a, a) } else t || n._emit("play", s._id); if (p.playbackRate = s._rate, p.paused) return void n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction."); "__default" !== e || s._loop ? n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l) : (n._endTimers[s._id] = function() { n._ended(s), p.removeEventListener("ended", n._endTimers[s._id], !1) }, p.addEventListener("ended", n._endTimers[s._id], !1)) } catch (e) { n._emit("playerror", s._id, e) } },
                                h = window && window.ejecta || !p.readyState && r._navigator.isCocoonJS; if (p.readyState >= 3 || h) m();
                            else { var v = function() { m(), p.removeEventListener(r._canPlayEvent, v, !1) };
                                p.addEventListener(r._canPlayEvent, v, !1), n._clearTimer(s._id) } } return s._id }, pause: function(e) { var t = this; if ("loaded" !== t._state || t._playLock) return t._queue.push({ event: "pause", action: function() { t.pause(e) } }), t; for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) { t._clearTimer(n[r]); var i = t._soundById(n[r]); if (i && !i._paused && (i._seek = t.seek(n[r]), i._rateSeek = 0, i._paused = !0, t._stopFade(n[r]), i._node))
                                if (t._webAudio) { if (!i._node.bufferSource) continue;
                                    void 0 === i._node.bufferSource.stop ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0), t._cleanBuffer(i._node) } else isNaN(i._node.duration) && i._node.duration !== 1 / 0 || i._node.pause();
                            arguments[1] || t._emit("pause", i ? i._id : null) } return t }, stop: function(e, t) { var n = this; if ("loaded" !== n._state) return n._queue.push({ event: "stop", action: function() { n.stop(e) } }), n; for (var r = n._getSoundIds(e), i = 0; i < r.length; i++) { n._clearTimer(r[i]); var a = n._soundById(r[i]);
                            a && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, n._stopFade(r[i]), a._node && (n._webAudio ? a._node.bufferSource && (void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), n._cleanBuffer(a._node)) : isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause())), t || n._emit("stop", a._id)) } return n }, mute: function(e, t) { var n = this; if ("loaded" !== n._state) return n._queue.push({ event: "mute", action: function() { n.mute(e, t) } }), n; if (void 0 === t) { if ("boolean" != typeof e) return n._muted;
                            n._muted = e } for (var i = n._getSoundIds(t), a = 0; a < i.length; a++) { var o = n._soundById(i[a]);
                            o && (o._muted = e, o._interval && n._stopFade(o._id), n._webAudio && o._node ? o._node.gain.setValueAtTime(e ? 0 : o._volume, r.ctx.currentTime) : o._node && (o._node.muted = !!r._muted || e), n._emit("mute", o._id)) } return n }, volume: function() { var e, t, n, i = this,
                            a = arguments; if (0 === a.length) return i._volume; if (1 === a.length || 2 === a.length && void 0 === a[1] ? i._getSoundIds().indexOf(a[0]) >= 0 ? t = parseInt(a[0], 10) : e = parseFloat(a[0]) : a.length >= 2 && (e = parseFloat(a[0]), t = parseInt(a[1], 10)), !(void 0 !== e && e >= 0 && e <= 1)) return (n = t ? i._soundById(t) : i._sounds[0]) ? n._volume : 0; if ("loaded" !== i._state) return i._queue.push({ event: "volume", action: function() { i.volume.apply(i, a) } }), i;
                        void 0 === t && (i._volume = e), t = i._getSoundIds(t); for (var o = 0; o < t.length; o++)(n = i._soundById(t[o])) && (n._volume = e, a[2] || i._stopFade(t[o]), i._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(e, r.ctx.currentTime) : n._node && !n._muted && (n._node.volume = e * r.volume()), i._emit("volume", n._id)); return i }, fade: function(e, t, n, i) { var a = this; if ("loaded" !== a._state) return a._queue.push({ event: "fade", action: function() { a.fade(e, t, n, i) } }), a;
                        a.volume(e, i); for (var o = a._getSoundIds(i), s = 0; s < o.length; s++) { var c = a._soundById(o[s]); if (c) { if (i || a._stopFade(o[s]), a._webAudio && !c._muted) { var d = r.ctx.currentTime,
                                        u = d + n / 1e3;
                                    c._volume = e, c._node.gain.setValueAtTime(e, d), c._node.gain.linearRampToValueAtTime(t, u) }
                                a._startFadeInterval(c, e, t, n, o[s], void 0 === i) } } return a }, _startFadeInterval: function(e, t, n, r, i, a) { var o = this,
                            s = t,
                            c = n - t,
                            d = Math.abs(c / .01),
                            u = Math.max(4, d > 0 ? r / d : r),
                            l = Date.now();
                        e._fadeTo = n, e._interval = setInterval(function() { var i = (Date.now() - l) / r;
                            l = Date.now(), s += c * i, s = Math.max(0, s), s = Math.min(1, s), s = Math.round(100 * s) / 100, o._webAudio ? e._volume = s : o.volume(s, e._id, !0), a && (o._volume = s), (n < t && s <= n || n > t && s >= n) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, o.volume(n, e._id), o._emit("fade", e._id)) }, u) }, _stopFade: function(e) { var t = this,
                            n = t._soundById(e); return n && n._interval && (t._webAudio && n._node.gain.cancelScheduledValues(r.ctx.currentTime), clearInterval(n._interval), n._interval = null, t.volume(n._fadeTo, e), n._fadeTo = null, t._emit("fade", e)), t }, loop: function() { var e, t, n, r = this,
                            i = arguments; if (0 === i.length) return r._loop; if (1 === i.length) { if ("boolean" != typeof i[0]) return !!(n = r._soundById(parseInt(i[0], 10))) && n._loop;
                            e = i[0], r._loop = e } else 2 === i.length && (e = i[0], t = parseInt(i[1], 10)); for (var a = r._getSoundIds(t), o = 0; o < a.length; o++)(n = r._soundById(a[o])) && (n._loop = e, r._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = e, e && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop))); return r }, rate: function() { var e, t, n, i = this,
                            a = arguments; if (0 === a.length ? t = i._sounds[0]._id : 1 === a.length ? i._getSoundIds().indexOf(a[0]) >= 0 ? t = parseInt(a[0], 10) : e = parseFloat(a[0]) : 2 === a.length && (e = parseFloat(a[0]), t = parseInt(a[1], 10)), "number" != typeof e) return (n = i._soundById(t)) ? n._rate : i._rate; if ("loaded" !== i._state) return i._queue.push({ event: "rate", action: function() { i.rate.apply(i, a) } }), i;
                        void 0 === t && (i._rate = e), t = i._getSoundIds(t); for (var o = 0; o < t.length; o++)
                            if (n = i._soundById(t[o])) { n._rateSeek = i.seek(t[o]), n._playStart = i._webAudio ? r.ctx.currentTime : n._playStart, n._rate = e, i._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(e, r.ctx.currentTime) : n._node && (n._node.playbackRate = e); var s = i.seek(t[o]),
                                    c = 1e3 * ((i._sprite[n._sprite][0] + i._sprite[n._sprite][1]) / 1e3 - s) / Math.abs(n._rate);!i._endTimers[t[o]] && n._paused || (i._clearTimer(t[o]), i._endTimers[t[o]] = setTimeout(i._ended.bind(i, n), c)), i._emit("rate", n._id) }
                        return i }, seek: function() { var e, t, n = this,
                            i = arguments; if (0 === i.length ? t = n._sounds[0]._id : 1 === i.length ? n._getSoundIds().indexOf(i[0]) >= 0 ? t = parseInt(i[0], 10) : n._sounds.length && (t = n._sounds[0]._id, e = parseFloat(i[0])) : 2 === i.length && (e = parseFloat(i[0]), t = parseInt(i[1], 10)), void 0 === t) return n; if ("loaded" !== n._state) return n._queue.push({ event: "seek", action: function() { n.seek.apply(n, i) } }), n; var a = n._soundById(t); if (a) { if (!("number" == typeof e && e >= 0)) { if (n._webAudio) { var o = n.playing(t) ? r.ctx.currentTime - a._playStart : 0,
                                        s = a._rateSeek ? a._rateSeek - a._seek : 0; return a._seek + (s + o * Math.abs(a._rate)) } return a._node.currentTime } var c = n.playing(t); if (c && n.pause(t, !0), a._seek = e, a._ended = !1, n._clearTimer(t), c && n.play(t, !0), !n._webAudio && a._node && (a._node.currentTime = e), c && !n._webAudio) { var d = function() { n._playLock ? setTimeout(d, 0) : n._emit("seek", t) };
                                setTimeout(d, 0) } else n._emit("seek", t) } return n }, playing: function(e) { var t = this; if ("number" == typeof e) { var n = t._soundById(e); return !!n && !n._paused } for (var r = 0; r < t._sounds.length; r++)
                            if (!t._sounds[r]._paused) return !0;
                        return !1 }, duration: function(e) { var t = this,
                            n = t._duration,
                            r = t._soundById(e); return r && (n = t._sprite[r._sprite][1] / 1e3), n }, state: function() { return this._state }, unload: function() { for (var e = this, t = e._sounds, n = 0; n < t.length; n++) t[n]._paused || e.stop(t[n]._id), e._webAudio || (/MSIE |Trident\//.test(r._navigator && r._navigator.userAgent) || (t[n]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), t[n]._node.removeEventListener("error", t[n]._errorFn, !1), t[n]._node.removeEventListener(r._canPlayEvent, t[n]._loadFn, !1)), delete t[n]._node, e._clearTimer(t[n]._id); var i = r._howls.indexOf(e);
                        i >= 0 && r._howls.splice(i, 1); var a = !0; for (n = 0; n < r._howls.length; n++)
                            if (r._howls[n]._src === e._src) { a = !1; break }
                        return o && a && delete o[e._src], r.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null }, on: function(e, t, n, r) { var i = this["_on" + e]; return "function" == typeof t && i.push(r ? { id: n, fn: t, once: r } : { id: n, fn: t }), this }, off: function(e, t, n) { var r = this,
                            i = r["_on" + e],
                            a = 0; if ("number" == typeof t && (n = t, t = null), t || n)
                            for (a = 0; a < i.length; a++) { var o = n === i[a].id; if (t === i[a].fn && o || !t && o) { i.splice(a, 1); break } } else if (e) r["_on" + e] = [];
                            else { var s = Object.keys(r); for (a = 0; a < s.length; a++) 0 === s[a].indexOf("_on") && Array.isArray(r[s[a]]) && (r[s[a]] = []) }
                        return r }, once: function(e, t, n) { return this.on(e, t, n, 1), this }, _emit: function(e, t, n) { for (var r = this, i = r["_on" + e], a = i.length - 1; a >= 0; a--) i[a].id && i[a].id !== t && "load" !== e || (setTimeout(function(e) { e.call(this, t, n) }.bind(r, i[a].fn), 0), i[a].once && r.off(e, i[a].fn, i[a].id)); return r._loadQueue(e), r }, _loadQueue: function(e) { var t = this; if (t._queue.length > 0) { var n = t._queue[0];
                            n.event === e && (t._queue.shift(), t._loadQueue()), e || n.action() } return t }, _ended: function(e) { var t = this,
                            n = e._sprite; if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100), t; var i = !(!e._loop && !t._sprite[n][2]); if (t._emit("end", e._id), !t._webAudio && i && t.stop(e._id, !0).play(e._id), t._webAudio && i) { t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = r.ctx.currentTime; var a = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                            t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), a) } return t._webAudio && !i && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), r._autoSuspend()), t._webAudio || i || t.stop(e._id, !0), t }, _clearTimer: function(e) { var t = this; if (t._endTimers[e]) { if ("function" != typeof t._endTimers[e]) clearTimeout(t._endTimers[e]);
                            else { var n = t._soundById(e);
                                n && n._node && n._node.removeEventListener("ended", t._endTimers[e], !1) }
                            delete t._endTimers[e] } return t }, _soundById: function(e) { for (var t = this, n = 0; n < t._sounds.length; n++)
                            if (e === t._sounds[n]._id) return t._sounds[n];
                        return null }, _inactiveSound: function() { var e = this;
                        e._drain(); for (var t = 0; t < e._sounds.length; t++)
                            if (e._sounds[t]._ended) return e._sounds[t].reset();
                        return new a(e) }, _drain: function() { var e = this,
                            t = e._pool,
                            n = 0,
                            r = 0; if (!(e._sounds.length < t)) { for (r = 0; r < e._sounds.length; r++) e._sounds[r]._ended && n++; for (r = e._sounds.length - 1; r >= 0; r--) { if (n <= t) return;
                                e._sounds[r]._ended && (e._webAudio && e._sounds[r]._node && e._sounds[r]._node.disconnect(0), e._sounds.splice(r, 1), n--) } } }, _getSoundIds: function(e) { if (void 0 === e) { for (var t = [], n = 0; n < this._sounds.length; n++) t.push(this._sounds[n]._id); return t } return [e] }, _refreshBuffer: function(e) { return e._node.bufferSource = r.ctx.createBufferSource(), e._node.bufferSource.buffer = o[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, r.ctx.currentTime), this }, _cleanBuffer: function(e) { if (r._scratchBuffer && e.bufferSource) { e.bufferSource.onended = null, e.bufferSource.disconnect(0); try { e.bufferSource.buffer = r._scratchBuffer } catch (e) {} } return e.bufferSource = null, this } }; var a = function(e) { this._parent = e, this.init() };
                a.prototype = { init: function() { var e = this,
                            t = e._parent; return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++r._counter, t._sounds.push(e), e.create(), e }, create: function() { var e = this,
                            t = e._parent,
                            n = r._muted || e._muted || e._parent._muted ? 0 : e._volume; return t._webAudio ? (e._node = void 0 === r.ctx.createGain ? r.ctx.createGainNode() : r.ctx.createGain(), e._node.gain.setValueAtTime(n, r.ctx.currentTime), e._node.paused = !0, e._node.connect(r.masterGain)) : (e._node = new Audio, e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(r._canPlayEvent, e._loadFn, !1), e._node.src = t._src, e._node.preload = "auto", e._node.volume = n * r.volume(), e._node.load()), e }, reset: function() { var e = this,
                            t = e._parent; return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++r._counter, e }, _errorListener: function() { var e = this;
                        e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1) }, _loadListener: function() { var e = this,
                            t = e._parent;
                        t._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(t._sprite).length && (t._sprite = { __default: [0, 1e3 * t._duration] }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(r._canPlayEvent, e._loadFn, !1) } }; var o = {},
                    s = function(e) { var t = e._src; if (o[t]) return e._duration = o[t].duration, void u(e); if (/^data:[^;]+;base64,/.test(t)) { for (var n = atob(t.split(",")[1]), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
                            d(r.buffer, e) } else { var a = new XMLHttpRequest;
                            a.open("GET", t, !0), a.withCredentials = e._xhrWithCredentials, a.responseType = "arraybuffer", a.onload = function() { var t = (a.status + "")[0]; "0" === t || "2" === t || "3" === t ? d(a.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + a.status + ".") }, a.onerror = function() { e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete o[t], e.load()) }, c(a) } },
                    c = function(e) { try { e.send() } catch (t) { e.onerror() } },
                    d = function(e, t) { r.ctx.decodeAudioData(e, function(e) { e && t._sounds.length > 0 && (o[t._src] = e, u(t, e)) }, function() { t._emit("loaderror", null, "Decoding audio data failed.") }) },
                    u = function(e, t) { t && !e._duration && (e._duration = t.duration), 0 === Object.keys(e._sprite).length && (e._sprite = { __default: [0, 1e3 * e._duration] }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()) },
                    l = function() { try { "undefined" != typeof AudioContext ? r.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? r.ctx = new webkitAudioContext : r.usingWebAudio = !1 } catch (e) { r.usingWebAudio = !1 } var e = /iP(hone|od|ad)/.test(r._navigator && r._navigator.platform),
                            t = r._navigator && r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                            n = t ? parseInt(t[1], 10) : null; if (e && n && n < 9) { var i = /safari/.test(r._navigator && r._navigator.userAgent.toLowerCase());
                            (r._navigator && r._navigator.standalone && !i || r._navigator && !r._navigator.standalone && !i) && (r.usingWebAudio = !1) }
                        r.usingWebAudio && (r.masterGain = void 0 === r.ctx.createGain ? r.ctx.createGainNode() : r.ctx.createGain(), r.masterGain.gain.setValueAtTime(r._muted ? 0 : 1, r.ctx.currentTime), r.masterGain.connect(r.ctx.destination)), r._setup() };
                n.Howler = r, n.Howl = i, "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = r, window.Howl = i, window.Sound = a) : void 0 !== t && (t.HowlerGlobal = e, t.Howler = r, t.Howl = i, t.Sound = a) }()
        }),
        vi = hi.Howler,
        gi = hi.Howl,
        yi = "data:audio/mp3;base64,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4LAkByw1k3LVZpl+pNlGNZem5stM2Wr6j1Z9AMMBYjily+nv/WqtU3SzFdqLW+g9ay+GvQb2oJMhV52tK+eZCvrd0BNqdIzFngHBYCQQIIaJ1PtUjVq//qP+ohdCZhgRJDlF/////zoi5C6lVAABQCoDYQD4ZCwVB9kTFKkiv9NQcExMLk3ipgtxrzPf8LZgdNYHsgYIPgbIgAEXEAwCgpAie4XVi5BaBlBUxSQfMO7yfQPFcsGReNjIgX0QvmASaIgQc3SJkgpqr+myNNNNJSSX/n1Hw/4CgwqkXN3qSMTVX//U2skkQuTq9JJEy/+ybvT6p1IjCCpfiL/+SuQupVQAAUAqA2EA+GQsFQfZExSpIr/TUHBMTC5N4qYLca8z3/C2YHTWB7IGCD4GyIABFxAMAoKQInuF1YuQWgZQVMUkHzDu8n0DxXLBkXjYyIF9EL5gEmiIEHN0iZIKaq/psjTTTSUkl/59R8P+AoMKpFzd6kjE1V//1NrJJELk6vSSRMv/sm70+qdSIwgqX4i//klMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+7IAAA/wAABpBwAACAAADSDgAAEAAAGkAAAAIAAANIAAAARMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
    Mr("keys", function() { return function(e) { return K(ue(e)) } });
    var bi = d.Object.keys,
        Si = n(r(function(e) { e.exports = { default: bi, __esModule: !0 } })),
        wi = Math.abs;
    M(M.S, "Math", { hypot: function(e, t) { for (var n, r, i = 0, a = 0, o = arguments.length, s = 0; a < o;) s < (n = wi(arguments[a++])) ? (i = i * (r = s / n) * r + 1, s = n) : i += n > 0 ? (r = n / s) * r : n; return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(i) } });
    var Ci, Ti, Ei = d.Math.hypot,
        _i = n(r(function(e) { e.exports = { default: Ei, __esModule: !0 } })),
        Mi = function e() { Vr(this, e) };
    (Ci = (Ti = e.CameraSettings || (e.CameraSettings = {})).ResolutionPreference || (Ti.ResolutionPreference = {}))[Ci.FULL_HD = 0] = "FULL_HD", Ci[Ci.HD = 1] = "HD";
    var ki = function(t) {
        function n(e, t) { Vr(this, n); var r = Ir(this, (n.__proto__ || Ar(n)).call(this)); return r.postStreamInitializationListener = r.postStreamInitialization.bind(r), r.videoTrackUnmuteListener = r.videoTrackUnmuteRecovery.bind(r), r.triggerManualFocusListener = r.triggerManualFocus.bind(r), r.triggerZoomStartListener = r.triggerZoomStart.bind(r), r.triggerZoomMoveListener = r.triggerZoomMove.bind(r), r.triggerFatalError = e, r.barcodePickerGui = t, r } return Fr(n, Mi), Hr(n, [{ key: "setInteractionOptions", value: function(e, t, n, r) { this.cameraSwitcherEnabled = e, this.torchToggleEnabled = t, this.tapToFocusEnabled = n, this.pinchToZoomEnabled = r } }, { key: "isCameraSwitcherEnabled", value: function() { return this.cameraSwitcherEnabled } }, { key: "setCameraSwitcherEnabled", value: function(t) { var n = this;
                this.cameraSwitcherEnabled = t, this.cameraSwitcherEnabled ? e.CameraAccess.getCameras().then(function(e) { e.length > 1 && n.barcodePickerGui.setCameraSwitcherVisible(!0) }) : this.barcodePickerGui.setCameraSwitcherVisible(!1) } }, { key: "isTorchToggleEnabled", value: function() { return this.torchToggleEnabled } }, { key: "setTorchToggleEnabled", value: function(e) { this.torchToggleEnabled = e, this.torchToggleEnabled ? null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.torch && this.barcodePickerGui.setTorchTogglerVisible(!0) : this.barcodePickerGui.setTorchTogglerVisible(!1) } }, { key: "isTapToFocusEnabled", value: function() { return this.tapToFocusEnabled } }, { key: "setTapToFocusEnabled", value: function(e) { this.tapToFocusEnabled = e, null != this.mediaStream && (this.tapToFocusEnabled ? this.enableTapToFocusListeners() : this.disableTapToFocusListeners()) } }, { key: "isPinchToZoomEnabled", value: function() { return this.pinchToZoomEnabled } }, { key: "setPinchToZoomEnabled", value: function(e) { this.pinchToZoomEnabled = e, null != this.mediaStream && (this.pinchToZoomEnabled ? this.enablePinchToZoomListeners() : this.disablePinchToZoomListeners()) } }, { key: "setSelectedCamera", value: function(e) { this.selectedCamera = e } }, { key: "setSelectedCameraSettings", value: function(e) { this.selectedCameraSettings = e } }, { key: "setupCameras", value: function() { var t = this; return e.CameraAccess.getCameras().then(function(n) { if (t.cameraSwitcherEnabled && n.length > 1 && t.barcodePickerGui.setCameraSwitcherVisible(!0), null == t.selectedCamera) { var r = n.find(function(t) { return t.cameraType === e.Camera.Type.BACK }); return void 0 === r && (r = n[0]), void 0 === r ? Rt.reject(new Ur({ name: "NoCameraAvailableError", message: "No camera available" })) : t.initializeCameraWithSettings(r, t.selectedCameraSettings) } return t.initializeCameraWithSettings(t.selectedCamera, t.selectedCameraSettings) }) } }, { key: "stopStream", value: function() { null != this.activeCamera && (this.activeCamera.currentResolution = void 0), this.activeCamera = void 0, null != this.mediaStream && (window.clearTimeout(this.cameraAccessTimeout), window.clearInterval(this.cameraMetadataCheckInterval), window.clearTimeout(this.getCapabilitiesTimeout), window.clearTimeout(this.manualFocusWaitTimeout), window.clearTimeout(this.manualToAutofocusResumeTimeout), window.clearInterval(this.autofocusInterval), this.mediaStream.getVideoTracks().forEach(function(e) { e.stop() }), this.mediaStream = void 0, this.mediaTrackCapabilities = void 0) } }, { key: "applyCameraSettings", value: function(e) { return this.selectedCameraSettings = e, null == this.activeCamera ? Rt.reject(new Ur({ name: "NoCameraAvailableError", message: "No camera available" })) : this.initializeCameraWithSettings(this.activeCamera, e) } }, { key: "reinitializeCamera", value: function(e) { return null == this.activeCamera && null == e ? Rt.reject(new Ur({ name: "NoCameraAvailableError", message: "No camera available" })) : this.initializeCameraWithSettings(null == e ? this.activeCamera : e, this.activeCameraSettings).catch(this.triggerFatalError) } }, { key: "initializeCameraWithSettings", value: function(t, n) { return this.selectedCamera = t, this.selectedCameraSettings = this.activeCameraSettings = n, null != n && n.resolutionPreference === e.CameraSettings.ResolutionPreference.FULL_HD ? this.initializeCameraAndCheckUpdatedSettings(t) : this.initializeCameraAndCheckUpdatedSettings(t, 3) } }, { key: "setTorchEnabled", value: function(e) { if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.torch) { this.torchEnabled = e; var t = this.mediaStream.getVideoTracks();
                    0 !== t.length && "function" == typeof t[0].applyConstraints && t[0].applyConstraints({ advanced: [{ torch: e }] }) } } }, { key: "toggleTorch", value: function() { this.torchEnabled = !this.torchEnabled, this.setTorchEnabled(this.torchEnabled) } }, { key: "setZoom", value: function(e, t) { if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.zoom) { var n = this.mediaStream.getVideoTracks(); if (0 !== n.length && "function" == typeof n[0].applyConstraints) { var r = this.mediaTrackCapabilities.zoom.max - this.mediaTrackCapabilities.zoom.min;
                        null == t && (t = this.mediaTrackCapabilities.zoom.min); var i = Math.max(this.mediaTrackCapabilities.zoom.min, Math.min(t + r * e, this.mediaTrackCapabilities.zoom.max));
                        n[0].applyConstraints({ advanced: [{ zoom: i }] }) } } } }, { key: "postStreamInitialization", value: function() { var e = this;
                window.clearTimeout(this.getCapabilitiesTimeout), this.getCapabilitiesTimeout = window.setTimeout(function() { e.storeStreamCapabilities(), e.setupAutofocus(), e.torchToggleEnabled && null != e.mediaStream && null != e.mediaTrackCapabilities && e.mediaTrackCapabilities.torch && e.barcodePickerGui.setTorchTogglerVisible(!0) }, n.getCapabilitiesTimeoutMs) } }, { key: "videoTrackUnmuteRecovery", value: function() { this.reinitializeCamera() } }, { key: "triggerManualFocus", value: function(e) { var t = this; if (null != e) { if (e.preventDefault(), "touchend" === e.type && 0 !== e.touches.length) return; if (null != this.pinchToZoomDistance) return void(this.pinchToZoomDistance = void 0) } if (window.clearTimeout(this.manualFocusWaitTimeout), window.clearTimeout(this.manualToAutofocusResumeTimeout), null != this.mediaStream && null != this.mediaTrackCapabilities) { var r = this.mediaTrackCapabilities.focusMode;
                    r instanceof Array && -1 !== r.indexOf("single-shot") && (-1 !== r.indexOf("continuous") && -1 !== r.indexOf("manual") ? (this.triggerFocusMode("continuous").then(function() { t.manualFocusWaitTimeout = window.setTimeout(function() { t.triggerFocusMode("manual") }, n.manualFocusWaitTimeoutMs) }).catch(function() {}), this.manualToAutofocusResumeTimeout = window.setTimeout(function() { t.triggerFocusMode("continuous") }, n.manualToAutofocusResumeTimeoutMs)) : -1 === r.indexOf("continuous") && (window.clearInterval(this.autofocusInterval), this.triggerFocusMode("single-shot").catch(function() {}), this.manualToAutofocusResumeTimeout = window.setTimeout(function() { t.autofocusInterval = window.setInterval(t.triggerAutoFocus.bind(t), n.autofocusIntervalMs) }, n.manualToAutofocusResumeTimeoutMs))) } } }, { key: "triggerZoomStart", value: function(e) { if (null != e && 2 === e.touches.length && (e.preventDefault(), this.pinchToZoomDistance = _i((e.touches[1].screenX - e.touches[0].screenX) / screen.width, (e.touches[1].screenY - e.touches[0].screenY) / screen.height), null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.zoom)) { var t = this.mediaStream.getVideoTracks(); if (0 !== t.length && "function" == typeof t[0].getConstraints) { this.pinchToZoomInitialZoom = this.mediaTrackCapabilities.zoom.min; var n = t[0].getConstraints(); if (null != n.advanced) { var r = n.advanced.find(function(e) { return "zoom" in e });
                            null != r && (this.pinchToZoomInitialZoom = r.zoom) } } } } }, { key: "triggerZoomMove", value: function(e) { null != this.pinchToZoomDistance && null != e && 2 === e.touches.length && (e.preventDefault(), this.setZoom(2 * (_i((e.touches[1].screenX - e.touches[0].screenX) / screen.width, (e.touches[1].screenY - e.touches[0].screenY) / screen.height) - this.pinchToZoomDistance), this.pinchToZoomInitialZoom)) } }, { key: "storeStreamCapabilities", value: function() { if (null != this.mediaStream) { var e = this.mediaStream.getVideoTracks();
                    0 !== e.length && "function" == typeof e[0].getCapabilities && (this.mediaTrackCapabilities = e[0].getCapabilities()) } } }, { key: "setupAutofocus", value: function() { if (window.clearTimeout(this.manualFocusWaitTimeout), window.clearTimeout(this.manualToAutofocusResumeTimeout), null != this.mediaStream && null != this.mediaTrackCapabilities) { var e = this.mediaTrackCapabilities.focusMode;
                    e instanceof Array && -1 === e.indexOf("continuous") && -1 !== e.indexOf("single-shot") && (window.clearInterval(this.autofocusInterval), this.autofocusInterval = window.setInterval(this.triggerAutoFocus.bind(this), n.autofocusIntervalMs)) } } }, { key: "triggerAutoFocus", value: function() { this.triggerFocusMode("single-shot").catch(function() {}) } }, { key: "triggerFocusMode", value: function(e) { if (null != this.mediaStream) { var t = this.mediaStream.getVideoTracks(); if (0 !== t.length && "function" == typeof t[0].applyConstraints) return t[0].applyConstraints({ advanced: [{ focusMode: e }] }) } return Rt.reject(void 0) } }, { key: "enableTapToFocusListeners", value: function() { var e = this;
                ["touchend", "mousedown"].forEach(function(t) { e.barcodePickerGui.videoElement.addEventListener(t, e.triggerManualFocusListener) }) } }, { key: "enablePinchToZoomListeners", value: function() { this.barcodePickerGui.videoElement.addEventListener("touchstart", this.triggerZoomStartListener), this.barcodePickerGui.videoElement.addEventListener("touchmove", this.triggerZoomMoveListener) } }, { key: "disableTapToFocusListeners", value: function() { var e = this;
                ["touchend", "mousedown"].forEach(function(t) { e.barcodePickerGui.videoElement.removeEventListener(t, e.triggerManualFocusListener) }) } }, { key: "disablePinchToZoomListeners", value: function() { this.barcodePickerGui.videoElement.removeEventListener("touchstart", this.triggerZoomStartListener), this.barcodePickerGui.videoElement.removeEventListener("touchmove", this.triggerZoomMoveListener) } }, { key: "initializeCameraAndCheckUpdatedSettings", value: function(e, t) { var n = this; return this.initializeCamera(e, t).then(function() { return n.selectedCameraSettings === n.activeCameraSettings || null != n.selectedCameraSettings && null != n.activeCameraSettings && !Si(n.selectedCameraSettings).some(function(e) { return n.selectedCameraSettings[e] !== n.activeCameraSettings[e] }) ? Rt.resolve() : (n.activeCameraSettings = n.selectedCameraSettings, n.initializeCameraAndCheckUpdatedSettings(e, t)) }).catch(function(e) { return Rt.reject(e) }) } }, { key: "retryInitializeCameraIfNeeded", value: function(e, t, n, r, i) { return t < 6 ? this.initializeCamera(e, t + 1).then(n).catch(r) : r(i) } }, { key: "initializeCamera", value: function(t) { var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return null == t ? Rt.reject(new Ur({ name: "NoCameraAvailableError", message: "No camera available" })) : (this.stopStream(), this.torchEnabled = !1, this.barcodePickerGui.setTorchTogglerVisible(!1), new Rt(function(i, a) { e.CameraAccess.accessCameraStream(r, t).then(function(e) { if ("function" == typeof e.getTracks()[0].getSettings) { var o = e.getTracks()[0].getSettings(); if (null != o.width && null != o.height && (2 === o.width || 2 === o.height)) return 6 === r ? a(new Ur({ name: "NotReadableError", message: "Could not initialize camera correctly" })) : n.initializeCamera(t, r + 1).then(i).catch(a) }
                        n.mediaStream = e, n.mediaStream.getVideoTracks().forEach(function(e) { e.addEventListener("unmute", n.videoTrackUnmuteListener) }), n.barcodePickerGui.videoElement.addEventListener("loadedmetadata", n.postStreamInitializationListener), n.tapToFocusEnabled && n.enableTapToFocusListeners(), n.pinchToZoomEnabled && n.enablePinchToZoomListeners(), n.resolveInitializeCamera(t, i, a), n.barcodePickerGui.videoElement.srcObject = e, n.barcodePickerGui.videoElement.load(); var s = n.barcodePickerGui.videoElement.play();
                        null != s && s.catch(function() {}) }).catch(function(o) { return "SourceUnavailableError" === o.name && (o.name = "NotReadableError"), "Invalid constraint" === o.message || "OverconstrainedError" === o.name && "deviceId" === o.constraint ? e.CameraAccess.getCameras().then(function(e) { var s = e.find(function(e) { return e.label === t.label && e.cameraType === t.cameraType && e.deviceId !== t.deviceId }); return null == s ? n.retryInitializeCameraIfNeeded(t, r, i, a, o) : n.initializeCamera(s, r).then(i).catch(a) }) : "PermissionDeniedError" === o.name || "PermissionDismissedError" === o.name || "NotAllowedError" === o.name || "NotFoundError" === o.name || "AbortError" === o.name || "NotReadableError" === o.name ? a(o) : n.retryInitializeCameraIfNeeded(t, r, i, a, o) }) })) } }, { key: "resolveInitializeCamera", value: function(t, r, i) { var a = this,
                    o = new Ur({ name: "NotReadableError", message: "Could not initialize camera correctly" });
                window.clearTimeout(this.cameraAccessTimeout), this.cameraAccessTimeout = window.setTimeout(function() { a.stopStream(), i(o) }, n.cameraAccessTimeoutMs), "iOS" === e.BrowserHelper.userAgentInfo.getOS().name ? this.barcodePickerGui.videoElement.onloadstart = function() { a.barcodePickerGui.videoElement.onloadstart = null, window.clearTimeout(a.cameraAccessTimeout), a.activeCamera = t, a.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay")), r() } : this.barcodePickerGui.videoElement.onloadeddata = function() { if (a.barcodePickerGui.videoElement.onloadeddata = null, window.clearTimeout(a.cameraAccessTimeout), a.barcodePickerGui.videoElement.videoWidth > 2 && a.barcodePickerGui.videoElement.videoHeight > 2 && a.barcodePickerGui.videoElement.currentTime > 0) return a.activeCamera = t, a.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay")), r(); var e = performance.now();
                    window.clearInterval(a.cameraMetadataCheckInterval), a.cameraMetadataCheckInterval = window.setInterval(function() { return 2 === a.barcodePickerGui.videoElement.videoWidth || 2 === a.barcodePickerGui.videoElement.videoHeight || 0 === a.barcodePickerGui.videoElement.currentTime ? performance.now() - e > n.cameraMetadataCheckTimeoutMs ? (window.clearInterval(a.cameraMetadataCheckInterval), a.stopStream(), i(o)) : void 0 : (window.clearInterval(a.cameraMetadataCheckInterval), a.activeCamera = t, a.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay")), r()) }, n.cameraMetadataCheckIntervalMs) } } }]), n }();
    ki.cameraAccessTimeoutMs = 4e3, ki.cameraMetadataCheckTimeoutMs = 4e3, ki.cameraMetadataCheckIntervalMs = 50, ki.getCapabilitiesTimeoutMs = 500, ki.autofocusIntervalMs = 1500, ki.manualToAutofocusResumeTimeoutMs = 5e3, ki.manualFocusWaitTimeoutMs = 400;
    var Ai = function() {
        function t(n, r, i, a, o, s, c, d) { var u = this;
            Vr(this, t), this.scanner = n, this.originElement = r, this.singleImageMode = i, this.scanningPaused = a, this.cameraUploadCallback = d, this.grandParentElement = document.createElement("div"), this.grandParentElement.className = t.grandParentElementClassName, this.originElement.appendChild(this.grandParentElement), this.parentElement = document.createElement("div"), this.parentElement.className = t.parentElementClassName, this.grandParentElement.appendChild(this.parentElement), this.videoImageCanvasContext = document.createElement("canvas").getContext("2d"), this.videoElement = document.createElement("video"), this.cameraSwitcherElement = document.createElement("img"), this.torchTogglerElement = document.createElement("img"), this.laserActiveImageElement = document.createElement("img"), this.laserPausedImageElement = document.createElement("img"), this.viewfinderElement = document.createElement("div"), i ? (this.cameraUploadElement = document.createElement("div"), this.cameraUploadInputElement = document.createElement("input"), this.cameraUploadLabelElement = document.createElement("label"), this.cameraUploadProgressElement = document.createElement("div"), this.setupCameraUploadGuiAssets(), this.guiStyle = e.BarcodePicker.GuiStyle.NONE) : (this.setupVideoElement(), this.setupCameraSwitcher(), this.setupTorchToggler(), this.setupFullGuiAssets(), this.setGuiStyle(s), this.setVideoFit(c), this.visibilityListener = this.checkAndRecoverPlayback.bind(this), document.addEventListener("visibilitychange", this.visibilityListener)), this.resizeInterval = window.setInterval(function() { u.resizeIfNeeded() }, 250), this.setupSharedAssets(), this.setVisible(o) } return Hr(t, [{ key: "destroy", value: function() { null != this.visibilityListener && document.removeEventListener("visibilitychange", this.visibilityListener), window.clearInterval(this.resizeInterval), this.grandParentElement.remove(), this.originElement.classList.remove(t.hiddenClassName) } }, { key: "setCameraManager", value: function(e) { this.cameraManager = e } }, { key: "pauseScanning", value: function() { this.scanningPaused = !0, this.laserActiveImageElement.classList.add(t.hiddenOpacityClassName), this.laserPausedImageElement.classList.remove(t.hiddenOpacityClassName), this.viewfinderElement.classList.add(t.pausedClassName) } }, { key: "resumeScanning", value: function() { this.scanningPaused = !1, this.laserPausedImageElement.classList.add(t.hiddenOpacityClassName), this.laserActiveImageElement.classList.remove(t.hiddenOpacityClassName), this.viewfinderElement.classList.remove(t.pausedClassName) } }, { key: "isVisible", value: function() { return this.visible } }, { key: "setVisible", value: function(e) { this.visible = e, e ? this.originElement.classList.remove(t.hiddenClassName) : this.originElement.classList.add(t.hiddenClassName) } }, { key: "isMirrorImageEnabled", value: function() { return this.mirrorImage } }, { key: "setMirrorImageEnabled", value: function(e) { this.mirrorImage = e, e ? this.videoElement.classList.add(t.mirroredClassName) : this.videoElement.classList.remove(t.mirroredClassName) } }, { key: "setGuiStyle", value: function(n) { if (!this.singleImageMode) switch (this.guiStyle = n, this.guiStyle) {
                    case e.BarcodePicker.GuiStyle.NONE:
                        this.laserActiveImageElement.classList.add(t.hiddenClassName), this.laserPausedImageElement.classList.add(t.hiddenClassName), this.viewfinderElement.classList.add(t.hiddenClassName); break;
                    case e.BarcodePicker.GuiStyle.LASER:
                        this.laserActiveImageElement.classList.remove(t.hiddenClassName), this.laserPausedImageElement.classList.remove(t.hiddenClassName), this.viewfinderElement.classList.add(t.hiddenClassName); break;
                    case e.BarcodePicker.GuiStyle.VIEWFINDER:
                        this.laserActiveImageElement.classList.add(t.hiddenClassName), this.laserPausedImageElement.classList.add(t.hiddenClassName), this.viewfinderElement.classList.remove(t.hiddenClassName) } } }, { key: "setVideoFit", value: function(t) { this.singleImageMode || (this.videoFit = t, t === e.BarcodePicker.ObjectFit.COVER ? (this.videoElement.style.objectFit = "cover", this.videoElement.dataset.objectFit = "cover") : (this.videoElement.style.objectFit = "contain", this.videoElement.dataset.objectFit = "contain", this.scanner.applyScanSettings(this.scanner.getScanSettings().setBaseSearchArea({ x: 0, y: 0, width: 1, height: 1 }))), this.lastKnownElementWidth = 0, this.lastKnownElementHeight = 0, this.resizeIfNeeded(), window.objectFitPolyfill(this.videoElement)) } }, { key: "reassignOriginElement", value: function(e) { this.visible || (this.originElement.classList.remove(t.hiddenClassName), e.classList.add(t.hiddenClassName)), e.appendChild(this.grandParentElement), this.checkAndRecoverPlayback(), this.resizeIfNeeded(), this.originElement = e } }, { key: "flashGUI", value: function() { this.guiStyle === e.BarcodePicker.GuiStyle.LASER ? this.flashLaser() : this.guiStyle === e.BarcodePicker.GuiStyle.VIEWFINDER && this.flashViewfinder() } }, { key: "getVideoImageData", value: function() { if (this.singleImageMode || this.videoImageCanvasContext.drawImage(this.videoElement, 0, 0), !(this.videoImageCanvasContext.canvas.width <= 2 || this.videoImageCanvasContext.canvas.height <= 2)) return this.videoImageCanvasContext.getImageData(0, 0, this.videoImageCanvasContext.canvas.width, this.videoImageCanvasContext.canvas.height).data } }, { key: "getVideoCurrentTime", value: function() { return this.videoElement.currentTime } }, { key: "setCameraSwitcherVisible", value: function(e) { e ? this.cameraSwitcherElement.classList.remove(t.hiddenClassName) : this.cameraSwitcherElement.classList.add(t.hiddenClassName) } }, { key: "setTorchTogglerVisible", value: function(e) { e ? this.torchTogglerElement.classList.remove(t.hiddenClassName) : this.torchTogglerElement.classList.add(t.hiddenClassName) } }, { key: "setCameraUploadGuiAvailable", value: function(e) { e ? (this.cameraUploadProgressElement.classList.add(t.flashWhiteInsetClassName), this.cameraUploadElement.classList.remove(t.opacityPulseClassName)) : (this.cameraUploadProgressElement.classList.remove(t.flashWhiteInsetClassName), this.cameraUploadElement.classList.add(t.opacityPulseClassName)) } }, { key: "setupVideoElement", value: function() { var n = this;
                this.videoElement.setAttribute("autoplay", "autoplay"), this.videoElement.setAttribute("playsinline", "true"), this.videoElement.setAttribute("muted", "muted"), this.videoElement.className = t.videoElementClassName, this.parentElement.appendChild(this.videoElement), this.videoElement.addEventListener("canplay", function() { null != n.cameraManager && null != n.cameraManager.activeCamera && (n.lastKnownElementWidth = 0, n.lastKnownElementHeight = 0, n.resizeIfNeeded(), n.cameraManager.activeCamera.currentResolution = { width: n.videoElement.videoWidth, height: n.videoElement.videoHeight }, n.videoImageCanvasContext.canvas.width = n.videoElement.videoWidth, n.videoImageCanvasContext.canvas.height = n.videoElement.videoHeight, n.scanner.applyImageSettings({ width: n.videoElement.videoWidth, height: n.videoElement.videoHeight, format: e.ImageSettings.Format.RGBA_8U }), n.setMirrorImageEnabled(n.cameraManager.activeCamera.cameraType === e.Camera.Type.FRONT)) }) } }, { key: "setupSharedAssets", value: function() { var e = document.createElement("img");
                e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAAhCAMAAAB9TZmqAAABgFBMVEVHcEyCgoL+/v6Kior///+FhYXW1tbn5+eAgIDp6en+/v6BgYH///////////+BgYH///////////+wsLCCgoL4+PiBgYH///+srKyAgID////s7OyCgoKBgYGDg4P///+BgYH6+vqBgYH////MzMz39/f///+BgYGbm5uDg4OMjIyBgYG+vr6QkJD///////+BgYGDg4P+/v7Hx8eOjo6BgYH09PT7+/v///////+MjIz9/f3////////Y2Nj6+vrPz8+BgYH9/f3///+3t7f///+Ghob///+AgICDg4P///+IiIj///////+CgoL6+vqmpqb////////t7e3////////////b29vj4+PNzc3y8vLl5eXv7+/U1NTDw8O8vLyRkZH////x8fGJiYmZmZnDw8Pf39/S0tLT09PCwsKfn5/4+PjV1dWlpaWwsLCjo6OsrKzj4+OZmZnCwsLq6uqurq7///+AgICfn5+Tk5OFhYXCwsLJycmYmJjU1NS/v79wPZvPAAAAdnRSTlMAcvoPxiTEAsby9L8p/eusNEoJBlEZ2Pb67nz25fVGOv1Eh+RW7oyC/ToXzkALzmqTe8BJHmf9Uu+n/B2Dnt7/+6MvEP2ZKrmzXHIx2dScYv6wkf3o3SL+/uDhqLbnuNrVV4u4ie7LNGlhweeUnrTsZOjkis/PjpWtfQAACfhJREFUaN7tmXlbGksWxtlMEwRUVjUgrSQqEAQccXdQQRUVVYxqoolqjGa9WW7uW25Xv/pUdxe9q2TM88zMM55/aE5V1/Lr03XeqrZYHuzBHuzB/vPmX+hzgdmcyh/sXrIx95LKPQ64/JoG5oaHHVztzya8Ssl0rV1PfO6A03YbR4xdzUBnblbgXphZm2hv+W0z9bW0+H7tjmL9d2w6VDPon7XX/CsuxR2fTcr1hervk+oWBM9KDa0bLqVys5pOn1vTrxfvG6SrCT3HpwNiS3O1Gzt/E8dN5RHVadNAsL6aXB9ch3/9zWyUdDF/Bqh8/ngm2Shpkp+QB49xEdJy3MbgW4UjaVQ42nola73ywDWt5XhKpIcWbP4h9F3CIOuOEOodiwNz4wvdDsDW/N/PMYPhb1GiGOMY82CiSeWWObYgXsI2SWo4tq7jusOco9xC7yAG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", e.className = t.scanditLogoImageElementClassName, this.parentElement.appendChild(e) } }, { key: "setupCameraUploadGuiAssets", value: function() { var e = this;
                this.cameraUploadElement.className = t.cameraUploadElementClassName, this.parentElement.appendChild(this.cameraUploadElement), this.cameraUploadInputElement.type = "file", this.cameraUploadInputElement.accept = "image/*", this.cameraUploadInputElement.setAttribute("capture", "environment"), this.cameraUploadInputElement.addEventListener("change", this.cameraUploadFile.bind(this)), this.cameraUploadInputElement.addEventListener("click", function(t) {
                    (e.scanningPaused || e.scanner.isBusyProcessing()) && t.preventDefault() }), this.cameraUploadLabelElement.appendChild(this.cameraUploadInputElement), this.cameraUploadElement.appendChild(this.cameraUploadLabelElement); var n = document.createElement("img");
                n.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0xNyA1Yy0uOCAwLTEuNC41LTEuOCAxLS40LjUtLjcgMS0xLjEgMS41cy0uNiAxLS44IDEuM2wtLjMuM0gzYy0xLjYgMC0zIDEuNC0zIDN2MjdjMCAxLjYgMS40IDMgMyAzaDQ0YzEuNiAwIDMtMS40IDMtM3YtMjdjMC0xLjYtMS40LTMtMy0zSDM3bC0uMy0uM2MtLjItLjMtLjUtLjctLjgtMS4ycy0uNi0xLTEuMS0xLjVjLS40LS41LTEtMS0xLjgtMXptMCAyaDE2Yy0uMSAwIC4xIDAgLjMuM3MuNS44LjggMS4zLjcgMSAxLjEgMS41IDEgMSAxLjggMWgxMGMuNiAwIDEgLjQgMSAxdjI3YzAgLjYtLjQgMS0xIDFIM2MtLjYgMC0xLS40LTEtMXYtMjdjMC0uNi40LTEgMS0xaDEwYy44IDAgMS40LS41IDEuOC0xcy44LTEgMS4xLTEuNS42LTEgLjgtMS4yLjQtLjMuMy0uM3ptOCA0Yy03LjIgMC0xMyA1LjgtMTMgMTNzNS44IDEzIDEzIDEzIDEzLTUuOCAxMy0xMy01LjgtMTMtMTMtMTN6bTAgMmM2LjEgMCAxMSA0LjkgMTEgMTFzLTQuOSAxMS0xMSAxMS0xMS00LjktMTEtMTEgNC45LTExIDExLTExek04IDE0Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMmgxYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMnptMTcgMWMtNSAwLTkgNC05IDlzNCA5IDkgOSA5LTQgOS05LTQtOS05LTl6bTAgMmMzLjkgMCA3IDMuMSA3IDdzLTMuMSA3LTcgNy03LTMuMS03LTcgMy4xLTcgNy03eiIgY2xhc3M9ImEiLz48L3N2Zz4K", this.cameraUploadLabelElement.appendChild(n); var r = document.createElement("div");
                r.innerText = "Scan from Camera", this.cameraUploadLabelElement.appendChild(r), this.cameraUploadProgressElement.classList.add("radial-progress"), this.cameraUploadElement.appendChild(this.cameraUploadProgressElement) } }, { key: "setupFullGuiAssets", value: function() { this.laserActiveImageElement.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAAvCAMAAACPHW/9AAAAwFBMVEVHcExUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFVydJUyNFUyNFUyNFUyNH8/v5UyNFUyNFUyNFVydJUyNFUyNFUyNFVydJUyNFVydL3/f1YytNUyNFUyNFUyNHx+/ve9fbp+PnR8fNUyNGF2N9009q15+uW3ePD7O+l4+dv0dlv0dj///9Ujp4pAAAAP3RSTlMAiXJnBFsIARM5oA1+UKsuG5W3JEULBishQj5iAm0QkTQZ/h5MF3snWISbSHb8plMFjfjv9Oeyua3Ww9/Nn4y/IgemAAAIrElEQVR42u2da1saOxCAq8jRVuql0qOVIgcvgHhBrBbUYv//vzpzySSTZBeWqo8fOm+E9Vv3eXxnOptNJh8+vD3rhvFC3lHR73/GmmEsxdKKVY+N3ONFN3OT8O+S/GMYnmXtid0rCJAy7b3nrPDyQn5dnk3DiFnaoeJ4Ife98ZnqTnTSPHZ38R0ezWPDMF6BeY6lseK0F+Ej3Vl1MJ1EZ78rmXrmBvxWTLcCO4axU8WUEsk2nIMhJsh6Et75HnQn10l1NB093xB9F9p4UsBBKXuGsQSlIuXSScSQ/Og8Ch9097aT66I6mo6S74i1c++mn7G/v4+fQrYNYymKPWLBEvEkOtD7LhoPvmN+R93R9sR1UR1FR8n7/cqS/oejjI+G8UIyqbb9NQ4NtB6MJ99J99j2deU6q35AnrPDFew99FcY+MN8K6VpGHMpVecwQL5p/1h+dL6/Bwm+i9k92M6yY2IPrpPqaLqT2omrR7hk9l4ETvEHRuAzD8OogNNFgUpd8DeRhgYGACkPvqPuO5jc2XZM7SGxK9dRdRSdknNicIy+Ey/xyDMYDRR1dzGMaihrHKCUxweFhALpD8qj76Q71jLOdknt6y6xB9dZdRCddU4ibpSgdA606q2cWqtWq7VqfDWMUpwk8BVRd99xPHAYkP6oPPkOurPtVMlwaneyU2KHZ1NxHVVvXqDm3uXC0GuR1Nrr+J7bODyr9IGByNUwYtr+wrYEgcClJCZ0FJD6YDz5Drqz7Vi3U2oX2amKgcR+1nWuk+okelmOrmVWB6XxVi9xBHpFNHoNw0gpUkU8WsUfCYoQBLW2uA/Cj0aQ353tBydcyHAdQ8+na5TYsYg52GPXUXUwnbXW2TnC/atKbO+x47xxnrFiGBXIxEGbkoCQAHD2k/CgO2T3JtkOT6ldl9q17JtUxOz1xXXM6WC6N5qVVtm6B2ZfRmrnPo9Xxkxn3InYlWEYGudFDOjDpHEAyin7UXoQnnVn27mQodQusksVw0UMuj6CrM6mU7ZO/6ehIFNZ28uNXjudFUPNJxz8ZRgxw09eDbgEQCEdERwCSn+X+EF48B11B9uxkqFCZmNjk4t2/3xKFTsl9m9Ndh1N7zUa5eWHZO1Y7qFzW+7/GgZ+AVvXW1v0RR/DKMGZgldAFJKAcP7vDhP30fkG6I7ZnWynQoZS+9ev/ISKz6euioHEDkWMdx1UJ8Wdz+NOqEZU1vaJW9ntxBZ+5nzhYRgJJEYBKhQoAjL3wXr0nXRH20+bnNpdHQNPqCQ7VzGS2C9GXnUQncQe+nyNZcjsegZMZ1NgMp0Aj8Av5AF5Qu6RH8wdcctcBY49v42/m6CC8oN8YXnu2CSyivwi01A5dO8RJZxMp+jl8/Pzee+yXasPJLV3pWj3slMVgxV78xTyunN93KG8HWoqjKkZfKZb06A6u462P4DtTyT7Pdn+g3S/I9tvyfYrHInpJPvxbzP+79Qc//BBddEdPLm9cvmRZCfd78t0d7ZP2fbn3mq7VcfU7uqYWPYjnnekKmYAiV1cZ9W5MnGmo+jadQotSuwPvySxR64H1dl2dh1/LLMbLHyku8/sV2z6rU/tJPvTvbhO1cSjtx2E5NzeoNT++SLUMaWy1yPZOZ+L7VtTlP3ndPqFbJ9M0irmKVQxktddYpfMTrofp5ndMNlF9WNnep7ZXWIH2x+C7uT6Y5zaWfZvy8o+lPIF8/oW6z5F3Sec2UNiDxX7vS7Z7+6KqhjU3TK7kVTsKrOz7XeuaM/KGK5iojpmSmU7uT43s0c1Oz2fNs7P8elUlewzrGJwkO6+Yp/oil1ndl2ySxnjXD9OUrv9vU12pzqNUMWEZ9TwiPoUinYpYySzu0dUKmNKa3Y9G0MTj5doO0/G4BzMDAZ+fZrRXEw0FePLmHQu5l5l9rRmvzLZjeLUfhW7ns3GJM+nfj5mqlzHB9Ti2Zh8nr2l5tnjF/67qL9+PxomJYd6ziZ6bVQwz24Y5XPt2SQ7jvDGiebZr7Np9irz7Okb1IvsDeqKjNIXqJ3s/elQvWOS6Rz1psneoRrlL1D16yN+gxpeoPplBLslb1BXy9+ghrUx3cK1Mb2CtTGN4oWMWv6Ol1/nfnkvRStkeJmMrZExooUxTo4E8kjWioXFYdHSsEZj0dqYSqseLwuQNY9h0WMjW0Yz9sTrHnnFY0fu3jCcCR2vc77ocbwyztf/hmWPbtVjbf6qR1nP3o3Xs9fdevaa3yeithz5bRpxMMT6Fy1o53vlj61tN+I17JEX2Xr282SDh9/TIbs5eD37YDRvPXvpTqV6vcI+Jdou5f1XWzr0fwL5ZiW+a9uZY0T7lBpzNioFsfVOJdr9WXGnkt+DulG+B7Vk+3eyZa+m4qCdbEBVwWCbT41Ke1H1/tOgdbtoE6reg3qa7kHd1HtQo+4Ce2l3gfLeAoO4X0YSBfWstUAr7Bo3jMXtBdiatMGA7i5Qj3pshO4C4rokdtVdwPeNOYv7xnD7o6W6xnzWoTBIWsdwRFjrGGNBw5ikT4YyelDaN+ZU+sYcUp+k4r4xlTqCHc7radcsagiWBINvCGYdwYxqHcFO855g1BWMWs2VtwRTHcHQ9aOoI9jcXo/S3NEP/3tOHBSuRV4WGNbq0ajW7DFr+Mg9F2Oy5qfS6/Eg9HpUib2ki+8ed/HtL27iK91PS9ugWhtf4zW6+H7MO/lux518ky6+2vWsZ3VRf/ZqzdnD70l39m1rz268eoN2TML9/Vi90J/9ZE5/9kUnbyx77gYOfdqGHbxhvPLRGycFZ2+EkzfO+LQZOXnjZi0/Z6boTKVFJyrJLy84UcmOVDJefqhSctDYnDOVotPy3GGQ1Q7LO8JhZ+UZ731cHoqojsuT0/Ju1uYeDpmfg/pmp6DaMajGWx2EOvcc1OTg32oHXN+89HxrO+DaeNMjrqsd7M5Huxfy/Y9ZM4wlWVoyZ+mHd2LdMF7Ma5j4P+hE04Z78rHKAAAAAElFTkSuQmCC", this.laserActiveImageElement.className = t.laserImageElementClassName, this.parentElement.appendChild(this.laserActiveImageElement), this.laserPausedImageElement.src = "data:image/png;base64,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", this.laserPausedImageElement.className = t.laserImageElementClassName, this.parentElement.appendChild(this.laserPausedImageElement), this.viewfinderElement.className = t.viewfinderElementClassName, this.parentElement.appendChild(this.viewfinderElement), this.laserActiveImageElement.classList.add(t.hiddenOpacityClassName), this.laserPausedImageElement.classList.remove(t.hiddenOpacityClassName), this.viewfinderElement.classList.add(t.pausedClassName) } }, { key: "flashLaser", value: function() { this.laserActiveImageElement.classList.remove(t.flashColorClassName), this.laserActiveImageElement.offsetHeight, this.laserActiveImageElement.classList.add(t.flashColorClassName) } }, { key: "flashViewfinder", value: function() { this.viewfinderElement.classList.remove(t.flashWhiteClassName), this.viewfinderElement.offsetHeight, this.viewfinderElement.classList.add(t.flashWhiteClassName) } }, { key: "resizeIfNeeded", value: function() { this.lastKnownElementWidth === this.originElement.clientWidth && this.lastKnownElementHeight === this.originElement.clientHeight || (this.singleImageMode ? this.resizeCameraUploadIfNeeded() : this.resizeVideoIfNeeded()) } }, { key: "resizeCameraUploadIfNeeded", value: function() { var e = this.cameraUploadElement.clientWidth,
                    t = this.cameraUploadElement.clientHeight;
                this.lastKnownElementWidth = e, this.lastKnownElementHeight = t, this.cameraUploadLabelElement.style.transform = "scale(" + Math.min(1, e / 500, t / 300) + ")", this.cameraUploadProgressElement.style.transform = "scale(" + Math.min(1, e / 500, t / 300) + ")" } }, { key: "resizeVideoIfNeeded", value: function() { if (!(this.videoElement.videoHeight < 1 || this.originElement.clientHeight < 1 || this.lastKnownElementWidth === this.originElement.clientWidth && this.lastKnownElementHeight === this.originElement.clientHeight)) { this.parentElement.style.maxWidth = null, this.parentElement.style.maxHeight = null; var t = this.videoElement.videoWidth / this.videoElement.videoHeight,
                        n = this.originElement.clientWidth,
                        r = this.originElement.clientHeight; if (this.lastKnownElementWidth = n, this.lastKnownElementHeight = r, this.videoFit === e.BarcodePicker.ObjectFit.COVER) { var i = 1,
                            a = 1; return t < n / r ? a = Math.min(1, r / (n / t)) : i = Math.min(1, n / (r * t)), void this.scanner.applyScanSettings(this.scanner.getScanSettings().setBaseSearchArea({ x: (1 - i) / 2, y: (1 - a) / 2, width: i, height: a })) }
                    t > n / r ? r = n / t : n = r * t, this.parentElement.style.maxWidth = Math.ceil(n) + "px", this.parentElement.style.maxHeight = Math.ceil(r) + "px" } } }, { key: "checkAndRecoverPlayback", value: function() { if (null != this.cameraManager && null != this.cameraManager.activeCamera && null != this.videoElement && null != this.videoElement.srcObject)
                    if (this.videoElement.srcObject.active) { var e = this.videoElement.play();
                        null != e && e.catch(function() {}) } else this.cameraManager.reinitializeCamera() } }, { key: "cameraUploadFileProcess", value: function(t, n, r) { var i = this;
                this.videoImageCanvasContext.canvas.width = n, this.videoImageCanvasContext.canvas.height = r, this.videoImageCanvasContext.drawImage(t, 0, 0, n, r), this.scanner.applyImageSettings({ width: n, height: r, format: e.ImageSettings.Format.RGBA_8U }), this.setCameraUploadGuiAvailable(!1), this.cameraUploadCallback().then(function() { i.setCameraUploadGuiAvailable(!0) }) } }, { key: "cameraUploadFile", value: function() { var e = this,
                    t = this.cameraUploadInputElement.files; if (null != t && 0 !== t.length) { var n = new Image,
                        r = new FileReader;
                    r.onload = function(t) { e.cameraUploadInputElement.value = "", null != t.target && (n.onload = function() { e.cameraUploadProgressElement.setAttribute("data-progress", "100"); var t = void 0,
                                r = void 0;
                            n.naturalWidth <= 1440 && n.naturalHeight <= 1440 ? (t = n.naturalWidth, r = n.naturalHeight) : n.naturalWidth > n.naturalHeight ? (t = 1440, r = Math.round(n.naturalHeight / n.naturalWidth * 1440)) : (t = Math.round(n.naturalWidth / n.naturalHeight * 1440), r = 1440), e.cameraUploadFileProcess(n, t, r) }, n.onprogress = function(t) { if (t.lengthComputable) { var n = 5 * Math.round(t.loaded / t.total * 20);
                                n <= 100 && e.cameraUploadProgressElement.setAttribute("data-progress", n.toString()) } }, n.src = t.target.result) }, this.cameraUploadProgressElement.setAttribute("data-progress", "0"), r.readAsDataURL(t[0]) } } }, { key: "setupCameraSwitcher", value: function() { var n = this;
                this.cameraSwitcherElement.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yNi4xNCA4YTQuOTkgNC45OSAwIDAgMC00LjE2IDIuMjI3bC0yLjIxOCAzLjMyOGExLjAwMyAxLjAwMyAwIDAgMS0uODMyLjQ0NUgxOHYtMmMwLTEuMTAyLS44OTgtMi0yLTJoLTZjLTEuMTAyIDAtMiAuODk4LTIgMnYySDVjLTEuNjUyIDAtMyAxLjM0OC0zIDN2MzZjMCAxLjY1MiAxLjM0OCAzIDMgM2g1NGMxLjY1MiAwIDMtMS4zNDggMy0zVjE3YzAtMS42NTItMS4zNDgtMy0zLTNoLTN2LTFjMC0xLjEwMi0uODk4LTItMi0yaC0yYy0xLjEwMiAwLTIgLjg5OC0yIDJ2MWgtNC45MzhhLjk5Ny45OTcgMCAwIDEtLjgyOC0uNDQxbC0yLjI1NC0zLjM1MkE1LjAwMSA1LjAwMSAwIDAgMCAzNy44MjggOHptMCAyaDExLjY4OGMxIDAgMS45MzQuNDk2IDIuNDkyIDEuMzI0bDIuMjU0IDMuMzUyQTIuOTk4IDIuOTk4IDAgMCAwIDQ1LjA2MyAxNkg1OWMuNTUgMCAxIC40NSAxIDF2MzZjMCAuNTUtLjQ1IDEtMSAxSDVjLS41NSAwLTEtLjQ1LTEtMVYxN2MwLS41NS40NS0xIDEtMWgxMy45M2MxLjAwNCAwIDEuOTM3LS41IDIuNDk2LTEuMzM2bDIuMjE5LTMuMzI4QTIuOTk4IDIuOTk4IDAgMCAxIDI2LjE0IDEwek0xMCAxMmg2djJoLTZ6bTQyIDFoMnYxaC0yem0tMjAgNWMtNS4yOSAwLTEwLjI0NiAyLjgzNi0xMi45MzQgNy4zOThhLjk5Ni45OTYgMCAwIDAgLjM1NiAxLjM2OC45OTcuOTk3IDAgMCAwIDEuMzY3LS4zNTZBMTMuMDY1IDEzLjA2NSAwIDAgMSAzMiAyMGM3LjE2OCAwIDEzIDUuODMyIDEzIDEzIDAgLjE4OC0uMDE2LjM3NS0uMDIzLjU2M2wtMi4yNy0yLjI3YTEgMSAwIDEgMC0xLjQxNCAxLjQxNGw0IDRjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhLjk5My45OTMgMCAwIDAgLjcwNy0uMjkzbDQtNGExIDEgMCAxIDAtMS40MTQtMS40MTRsLTIuMzIgMi4zMTZjLjAxMS0uMjAzLjAyNy0uNDA2LjAyNy0uNjA5IDAtOC4yNy02LjczLTE1LTE1LTE1ek0xOCAyOWExIDEgMCAwIDAtLjcwNy4yOTNsLTQgNGExIDEgMCAxIDAgMS40MTQgMS40MTRsMi4zMTMtMi4zMTZjLS4wMDguMjAzLS4wMi40MDYtLjAyLjYwOSAwIDguMjcgNi43MyAxNSAxNSAxNSA1LjM2NyAwIDEwLjM2LTIuODk4IDEzLjAyNy03LjU2M2EuOTk5Ljk5OSAwIDEgMC0xLjczNC0uOTkyQTEzLjA0MiAxMy4wNDIgMCAwIDEgMzIgNDZjLTcuMTY4IDAtMTMtNS44MzItMTMtMTMgMC0uMTg4LjAxMi0uMzc5LjAyLS41NjZsMi4yNzMgMi4yNzNjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhMSAxIDAgMCAwIC43MDctMS43MDdsLTQtNEExIDEgMCAwIDAgMTggMjl6bTkgMmMtLjU1NSAwLTEgLjQ0NS0xIDF2MmMwIC41NTUuNDQ1IDEgMSAxIC41NTUgMCAxLS40NDUgMS0xdi0yYzAtLjU1NS0uNDQ1LTEtMS0xem01IDBjLS41NTUgMC0xIC40NDUtMSAxdjJjMCAuNTU1LjQ0NSAxIDEgMSAuNTU1IDAgMS0uNDQ1IDEtMXYtMmMwLS41NTUtLjQ0NS0xLTEtMXptNSAwYy0uNTU1IDAtMSAuNDQ1LTEgMXYyYzAgLjU1NS40NDUgMSAxIDEgLjU1NSAwIDEtLjQ0NSAxLTF2LTJjMC0uNTU1LS40NDUtMS0xLTF6Ii8+PC9zdmc+Cg==", this.cameraSwitcherElement.className = t.cameraSwitcherElementClassName, this.cameraSwitcherElement.classList.add(t.hiddenClassName), this.parentElement.appendChild(this.cameraSwitcherElement), ["touchstart", "mousedown"].forEach(function(t) { n.cameraSwitcherElement.addEventListener(t, function(t) { if (null != n.cameraManager) { var r = n.cameraManager;
                            t.preventDefault(), e.CameraAccess.getCameras().then(function(e) { var t = (e.findIndex(function(e) { return e.deviceId === (null == r.activeCamera ? e.deviceId : r.activeCamera.deviceId) }) + 1) % e.length;
                                r.initializeCameraWithSettings(e[t], r.activeCameraSettings).catch(console.error) }).catch(console.error) } }) }) } }, { key: "setupTorchToggler", value: function() { var e = this;
                this.torchTogglerElement.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0zMC45MzggMWMtLjQ0Ni4wMi0xIC4yMy0xLjMxMy42NTZhMS4zMDIgMS4zMDIgMCAwIDAtLjA2My4wOTRsLTYuNzggMTIuMDYzLS4wNjMuMDkzYy0uNTU1Ljc4NS0uNzI3IDEuNzMtLjU5NCAyLjY1NmwtMjAuNSAyMi41NjMtLjAzMS4wMzFjLTEuMDcgMS4yMTktLjY2NCAzLjAxMi40NjggNC4xNTdoLjAzMmw0LjU5NCA0LjU5M2MuNTcuNTcgMS4yNjUuOTUgMiAxLjA2My43MzQuMTEzIDEuNTQ2LS4wNTUgMi4xNTYtLjU5NGguMDMxbDIyLjU2My0yMC41Yy45My4xMjkgMS44Ny0uMDQzIDIuNjU2LS41OTQuMDItLjAxNS4wNDMtLjAxNS4wNjItLjAzMWwuMDYzLS4wMzEgMTIuMDMxLTYuNzgyYy4wMzEtLjAxOS4wNjMtLjAzOS4wOTQtLjA2Mi40MjItLjMxMy42MzYtLjg2Ny42NTYtMS4zMTMuMDItLjQ0NS0uMDk4LS44NC0uMjUtMS4yNS0uMzA1LS44Mi0uODI4LTEuNjktMS41MzEtMi42ODctMS40MDctMS45OTItMy41MTYtNC4zOS01Ljc1LTYuNjI1LTIuMjM1LTIuMjM0LTQuNjAyLTQuMzEzLTYuNTk0LTUuNzE5LS45OTYtLjcwMy0xLjg2Ny0xLjIyNi0yLjY4OC0xLjUzMS0uNDEtLjE1Mi0uODA0LS4yNy0xLjI1LS4yNXptLjIxOCAyLjAzMWMuMDc4LjAxMi4xNTMuMDI0LjM0NC4wOTQuNTIuMTkxIDEuMy42MzMgMi4yMTkgMS4yODEgMS44MzYgMS4yOTcgNC4xNjggMy4zNTYgNi4zNDMgNS41MzIgMi4xNzYgMi4xNzUgNC4yMzUgNC40NzYgNS41MzIgNi4zMTIuNjQ4LjkxOCAxLjA5IDEuNzMgMS4yODEgMi4yNS4wNy4xOTEuMDgyLjI2Ni4wOTQuMzQ0TDM1LjEyNSAyNS41M2EuOTQ5Ljk0OSAwIDAgMC0uMTI1LjA5NGMtLjMxNi4yNDItLjg2LjMyOC0xLjQzOC4yMTlhMS4wNTYgMS4wNTYgMCAwIDAtLjE4Ny0uMDYzIDMuMTEzIDMuMTEzIDAgMCAxLTEuNDM4LS44MTJsLTYuOTA2LTYuOTA3Yy0uOTc2LS45ODQtMS4xMjktMi40MzctLjY1Ni0zLjA2MmEuNTMyLjUzMiAwIDAgMCAuMDk0LS4wOTR6bS04LjIxOCAxNS41OTRjLjE5OS4yOTcuNDMuNTg2LjY4Ny44NDRsNi45MDYgNi45MDZjLjI2Mi4yNjIuNTQzLjQ4OC44NDQuNjg4TDkuNTMxIDQ2LjkwNmMtLjA4Ni4wNzgtLjI1NC4xMzctLjUzMS4wOTQtLjI3Ny0uMDQzLS42MjktLjIyMy0uOTA2LS41TDMuNSA0MS45MDZjLS41NTktLjU2Ni0uNTYzLTEuMjYxLS40MDYtMS40Mzd6bS0yLjg3NSA4LjMxM2MtLjc3IDAtMS41NDMuMjkyLTIuMTI1Ljg3NWwtMi4xMjUgMi4xMjVhMy4wMjMgMy4wMjMgMCAwIDAgMCA0LjI1IDMuMDIzIDMuMDIzIDAgMCAwIDQuMjUgMGwyLjEyNS0yLjEyNmEzLjAyMyAzLjAyMyAwIDAgMCAwLTQuMjUgMy4wMDIgMy4wMDIgMCAwIDAtMi4xMjUtLjg3NXptMCAyYy4yNTMgMCAuNTE5LjA4Mi43MTguMjguMzk5LjQuMzk5IDEuMDQgMCAxLjQzOGwtMi4xMjUgMi4xMjVhMS4wMTQgMS4wMTQgMCAwIDEtMS40MzcgMCAxLjAxNCAxLjAxNCAwIDAgMSAwLTEuNDM3Yy40MjItLjQyMiAxLjY5OS0xLjY5NiAyLjEyNS0yLjEyNS4xOTktLjIuNDY1LS4yODIuNzE4LS4yODJ6Ii8+PC9zdmc+Cg==", this.torchTogglerElement.className = t.torchTogglerElementClassName, this.torchTogglerElement.classList.add(t.hiddenClassName), this.parentElement.appendChild(this.torchTogglerElement), ["touchstart", "mousedown"].forEach(function(t) { e.torchTogglerElement.addEventListener(t, function(t) { null != e.cameraManager && (t.preventDefault(), e.cameraManager.toggleTorch()) }) }) } }]), t }();
    Ai.grandParentElementClassName = "scandit scandit-container", Ai.parentElementClassName = "scandit scandit-barcode-picker", Ai.hiddenClassName = "scandit-hidden", Ai.hiddenOpacityClassName = "scandit-hidden-opacity", Ai.videoElementClassName = "scandit-video", Ai.scanditLogoImageElementClassName = "scandit-logo", Ai.laserImageElementClassName = "scandit-laser", Ai.viewfinderElementClassName = "scandit-viewfinder", Ai.cameraSwitcherElementClassName = "scandit-camera-switcher", Ai.torchTogglerElementClassName = "scandit-torch-toggle", Ai.cameraUploadElementClassName = "scandit-camera-upload", Ai.flashColorClassName = "scandit-flash-color", Ai.flashWhiteClassName = "scandit-flash-white", Ai.flashWhiteInsetClassName = "scandit-flash-white-inset", Ai.opacityPulseClassName = "scandit-opacity-pulse", Ai.mirroredClassName = "mirrored", Ai.pausedClassName = "paused";
    var Vi, Ii, Pi, Li = function(e) {
        function t() { return Vr(this, t), Ir(this, (t.__proto__ || Ar(t)).apply(this, arguments)) } return Fr(t, Mi), Hr(t, [{ key: "setInteractionOptions", value: function(e, t, n, r) {} }, { key: "isCameraSwitcherEnabled", value: function() { return !1 } }, { key: "setCameraSwitcherEnabled", value: function(e) {} }, { key: "isTorchToggleEnabled", value: function() { return !1 } }, { key: "setTorchToggleEnabled", value: function(e) {} }, { key: "isTapToFocusEnabled", value: function() { return !1 } }, { key: "setTapToFocusEnabled", value: function(e) {} }, { key: "isPinchToZoomEnabled", value: function() { return !1 } }, { key: "setPinchToZoomEnabled", value: function(e) {} }, { key: "setSelectedCamera", value: function(e) {} }, { key: "setSelectedCameraSettings", value: function(e) {} }, { key: "setupCameras", value: function() { return Rt.resolve() } }, { key: "stopStream", value: function() {} }, { key: "applyCameraSettings", value: function(e) { return Rt.resolve() } }, { key: "reinitializeCamera", value: function(e) { return Rt.resolve() } }, { key: "initializeCameraWithSettings", value: function(e, t) { return Rt.resolve() } }, { key: "setTorchEnabled", value: function(e) {} }, { key: "toggleTorch", value: function() {} }, { key: "setZoom", value: function(e, t) {} }]), t }();
    Fr(function e() { return Vr(this, e), Ir(this, (e.__proto__ || Ar(e)).apply(this, arguments)) }, Zr), e.BarcodePicker = function() {
        function t(e) { var n = this,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = r.visible,
                a = void 0 === i || i,
                o = r.singleImageMode,
                s = void 0 !== o && o,
                c = r.playSoundOnScan,
                d = void 0 !== c && c,
                u = r.vibrateOnScan,
                l = void 0 !== u && u,
                p = r.scanningPaused,
                f = void 0 !== p && p,
                m = r.guiStyle,
                h = void 0 === m ? t.GuiStyle.LASER : m,
                v = r.videoFit,
                g = void 0 === v ? t.ObjectFit.CONTAIN : v,
                y = r.scanner,
                b = r.scanSettings,
                S = void 0 === b ? new fi : b,
                w = r.targetScanningFPS,
                C = void 0 === w ? 30 : w;
            Vr(this, t), this.isReadyToWork = !1, this.destroyed = !1, this.scanningPaused = f, vi.autoSuspend = !1, this.beepSound = new gi({ src: yi }), this.vibrateFunction = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate, this.eventEmitter = new Zr, this.setPlaySoundOnScanEnabled(d), this.setVibrateOnScanEnabled(l), this.setTargetScanningFPS(C), null == y ? this.scanner = new mi({ scanSettings: S }) : (this.scanner = y, this.scanner.applyScanSettings(S)), this.scanner.onReady(function() { n.isReadyToWork = !0, n.eventEmitter.emit("ready") }), this.barcodePickerGui = new Ai(this.scanner, e, s, f, a, h, g, this.processVideoFrame.bind(this, !0)), s ? this.cameraManager = new Li : (this.scheduleVideoProcessing(), this.cameraManager = new ki(this.triggerFatalError.bind(this), this.barcodePickerGui)), this.barcodePickerGui.setCameraManager(this.cameraManager) } return Hr(t, [{ key: "destroy", value: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.pauseScanning(!0), this.destroyed = !0, e && this.scanner.destroy(), this.barcodePickerGui.destroy(), this.eventEmitter.removeAllListeners() } }, { key: "applyScanSettings", value: function(e) { return this.scanner.applyScanSettings(e), this } }, { key: "isScanningPaused", value: function() { return this.scanningPaused } }, { key: "pauseScanning", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return this.scanningPaused = !0, e && this.cameraManager.stopStream(), this.scanner.isReady() && this.barcodePickerGui.pauseScanning(), this } }, { key: "resumeScanning", value: function() { var e = this; return this.scanningPaused = !1, this.scanner.isReady() && this.barcodePickerGui.resumeScanning(), null == this.cameraManager.activeCamera && this.cameraAccess ? this.cameraManager.setupCameras().then(function() { return e }) : Rt.resolve(this) } }, { key: "getActiveCamera", value: function() { return this.cameraManager.activeCamera } }, { key: "setActiveCamera", value: function(e, t) { var n = this; return null != e && this.cameraAccess ? this.cameraManager.initializeCameraWithSettings(e, t).then(function() { return n }) : (this.cameraManager.setSelectedCamera(e), this.cameraManager.setSelectedCameraSettings(t), this.cameraAccess ? this.cameraManager.setupCameras().then(function() { return n }) : Rt.resolve(this)) } }, { key: "applyCameraSettings", value: function(e) { var t = this; return this.cameraAccess ? this.cameraManager.applyCameraSettings(e).then(function() { return t }) : (this.cameraManager.setSelectedCameraSettings(e), Rt.resolve(this)) } }, { key: "isVisible", value: function() { return this.barcodePickerGui.isVisible() } }, { key: "setVisible", value: function(e) { return this.barcodePickerGui.setVisible(e), this } }, { key: "isMirrorImageEnabled", value: function() { return this.barcodePickerGui.isMirrorImageEnabled() } }, { key: "setMirrorImageEnabled", value: function(e) { return this.barcodePickerGui.setMirrorImageEnabled(e), this } }, { key: "isPlaySoundOnScanEnabled", value: function() { return this.playSoundOnScan } }, { key: "setPlaySoundOnScanEnabled", value: function(e) { return this.playSoundOnScan = e, this } }, { key: "isVibrateOnScanEnabled", value: function() { return this.vibrateOnScan } }, { key: "setVibrateOnScanEnabled", value: function(e) { return this.vibrateOnScan = e, this } }, { key: "isCameraSwitcherEnabled", value: function() { return this.cameraManager.isCameraSwitcherEnabled() } }, { key: "setCameraSwitcherEnabled", value: function(e) { return this.cameraManager.setCameraSwitcherEnabled(e), this } }, { key: "isTorchToggleEnabled", value: function() { return this.cameraManager.isTorchToggleEnabled() } }, { key: "setTorchToggleEnabled", value: function(e) { return this.cameraManager.setTorchToggleEnabled(e), this } }, { key: "isTapToFocusEnabled", value: function() { return this.cameraManager.isTapToFocusEnabled() } }, { key: "setTapToFocusEnabled", value: function(e) { return this.cameraManager.setTapToFocusEnabled(e), this } }, { key: "isPinchToZoomEnabled", value: function() { return this.cameraManager.isPinchToZoomEnabled() } }, { key: "setPinchToZoomEnabled", value: function(e) { return this.cameraManager.setPinchToZoomEnabled(e), this } }, { key: "setTorchEnabled", value: function(e) { return this.cameraManager.setTorchEnabled(e), this } }, { key: "setZoom", value: function(e) { return this.cameraManager.setZoom(e), this } }, { key: "isReady", value: function() { return this.isReadyToWork } }, { key: "onReady", value: function(e) { return this.isReadyToWork ? e() : this.eventEmitter.once("ready", e, this), this } }, { key: "onScan", value: function(e) { return !0 === (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ? this.eventEmitter.once("scan", e, this) : this.eventEmitter.on("scan", e, this), this } }, { key: "removeScanListener", value: function(e) { return this.eventEmitter.removeListener("scan", e), this } }, { key: "removeScanListeners", value: function() { return this.eventEmitter.removeAllListeners("scan"), this } }, { key: "onScanError", value: function(e) { return !0 === (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ? this.eventEmitter.once("scanError", e, this) : this.eventEmitter.on("scanError", e, this), this } }, { key: "removeScanErrorListener", value: function(e) { return this.eventEmitter.removeListener("scanError", e), this } }, { key: "removeScanErrorListeners", value: function() { return this.eventEmitter.removeAllListeners("scanError"), this } }, { key: "onSubmitFrame", value: function(e) { return !0 === (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ? this.eventEmitter.once("submitFrame", e, this) : this.eventEmitter.on("submitFrame", e, this), this } }, { key: "removeSubmitFrameListener", value: function(e) { return this.eventEmitter.removeListener("submitFrame", e), this } }, { key: "removeSubmitFrameListeners", value: function() { return this.eventEmitter.removeAllListeners("submitFrame"), this } }, { key: "onProcessFrame", value: function(e) { return !0 === (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ? this.eventEmitter.once("processFrame", e, this) : this.eventEmitter.on("processFrame", e, this), this } }, { key: "removeProcessFrameListener", value: function(e) { return this.eventEmitter.removeListener("processFrame", e), this } }, { key: "removeProcessFrameListeners", value: function() { return this.eventEmitter.removeAllListeners("processFrame"), this } }, { key: "setGuiStyle", value: function(e) { return this.barcodePickerGui.setGuiStyle(e), this } }, { key: "setVideoFit", value: function(e) { return this.barcodePickerGui.setVideoFit(e), this } }, { key: "accessCamera", value: function() { var e = this; return this.cameraAccess && null != this.cameraManager.activeCamera ? Rt.resolve(this) : new Rt(function(t, n) { e.cameraManager.setupCameras().then(function() { return e.cameraAccess = !0, t(e) }).catch(n) }) } }, { key: "createParserForFormat", value: function(e) { return this.scanner.createParserForFormat(e) } }, { key: "reassignOriginElement", value: function(e) { return this.barcodePickerGui.reassignOriginElement(e), this } }, { key: "setTargetScanningFPS", value: function(e) { return e > 0 && (this.targetScanningFPS = e), this } }, { key: "getScanner", value: function() { return this.scanner } }, { key: "triggerFatalError", value: function(e) { this.fatalError = e, console.error(e) } }, { key: "handleScanResult", value: function(e) { this.eventEmitter.emit("processFrame", e), 0 !== e.barcodes.length && (this.barcodePickerGui.flashGUI(), this.playSoundOnScan && this.beepSound.play(), this.vibrateOnScan && null != this.vibrateFunction && this.vibrateFunction.call(navigator, 300), this.eventEmitter.emit("scan", e)) } }, { key: "scheduleVideoProcessing", value: function() { var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                window.setTimeout(function() { e.videoProcessing() }, t) } }, { key: "scheduleNextVideoProcessing", value: function(e) { if (this.targetScanningFPS < 30) { null == this.averageProcessingTime ? this.averageProcessingTime = performance.now() - e : this.averageProcessingTime = .9 * this.averageProcessingTime + .1 * (performance.now() - e); var t = 1e3 / this.targetScanningFPS - this.averageProcessingTime;
                    t > 16 ? this.scheduleVideoProcessing(t) : this.scheduleVideoProcessing() } else this.scheduleVideoProcessing() } }, { key: "processVideoFrame", value: function(e) { var t = this,
                    n = this.barcodePickerGui.getVideoImageData(); return null == n ? Rt.resolve() : (this.eventEmitter.listenerCount("submitFrame") > 0 && this.eventEmitter.emit("submitFrame", { barcodes: [], imageData: n.slice(), imageSettings: this.scanner.getImageSettings() }), new Rt(function(r) { t.scanner.processImage(n, e).then(function(e) { t.scanningPaused || t.handleScanResult(e), r() }).catch(function(e) { t.scanningPaused || (t.pauseScanning(), t.eventEmitter.emit("scanError", e)), r() }) })) } }, { key: "videoProcessing", value: function() { var e = this; if (!this.destroyed)
                    if (null == this.cameraManager.activeCamera || null == this.cameraManager.activeCamera.currentResolution || null != this.fatalError || this.scanningPaused || !this.scanner.isReady() || this.scanner.isBusyProcessing() || this.latestVideoTimeProcessed === this.barcodePickerGui.getVideoCurrentTime()) this.scheduleVideoProcessing();
                    else { null == this.latestVideoTimeProcessed && this.resumeScanning(); var t = performance.now();
                        this.latestVideoTimeProcessed = this.barcodePickerGui.getVideoCurrentTime(); try { this.processVideoFrame(!1).then(function() { e.scheduleNextVideoProcessing(t) }) } catch (e) { this.triggerFatalError(e) } } } }], [{ key: "create", value: function(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = r.visible,
                    a = void 0 === i || i,
                    o = r.singleImageMode,
                    s = void 0 === o ? { desktop: { always: !1, allowFallback: !0 }, mobile: { always: !1, allowFallback: !0 } } : o,
                    c = r.playSoundOnScan,
                    d = void 0 !== c && c,
                    u = r.vibrateOnScan,
                    l = void 0 !== u && u,
                    p = r.scanningPaused,
                    f = void 0 !== p && p,
                    m = r.guiStyle,
                    h = void 0 === m ? t.GuiStyle.LASER : m,
                    v = r.videoFit,
                    g = void 0 === v ? t.ObjectFit.CONTAIN : v,
                    y = r.scanner,
                    b = r.scanSettings,
                    S = void 0 === b ? new fi : b,
                    w = r.enableCameraSwitcher,
                    C = void 0 === w || w,
                    T = r.enableTorchToggle,
                    E = void 0 === T || T,
                    _ = r.enableTapToFocus,
                    M = void 0 === _ || _,
                    k = r.enablePinchToZoom,
                    A = void 0 === k || k,
                    V = r.accessCamera,
                    I = void 0 === V || V,
                    P = r.camera,
                    L = r.cameraSettings,
                    x = r.targetScanningFPS,
                    R = void 0 === x ? 30 : x,
                    N = void 0,
                    O = void 0,
                    D = e.BrowserHelper.userAgentInfo.getDevice().type; "mobile" === D || "tablet" === D ? (N = s.mobile.always, O = s.mobile.allowFallback) : (N = s.desktop.always, O = s.desktop.allowFallback); var j = e.BrowserHelper.checkBrowserCompatibility(); if (!j.scannerSupport || !N && !O && !j.fullSupport) return Rt.reject(new Ur({ name: "UnsupportedBrowserError", message: "This OS / Browser has one or more missing features preventing it from working correctly", data: j })); if (null == e.userLicenseKey || "" === e.userLicenseKey.trim()) return Rt.reject(new Ur({ name: "LibraryNotConfiguredError", message: "The library has not correctly been configured yet, please call 'configure' with valid parameters" })); if (!(n instanceof HTMLElement)) return Rt.reject(new Ur({ name: "NoOriginElementError", message: "A valid origin HTML element must be given" }));
                R <= 0 && (R = 30); var F = new t(n, { visible: a, singleImageMode: !j.fullSupport || N, playSoundOnScan: d, vibrateOnScan: l, scanningPaused: f, guiStyle: h, videoFit: g, scanner: y, scanSettings: S, targetScanningFPS: R }); return F.cameraManager.setInteractionOptions(C, E, M, A), F.cameraManager.setSelectedCamera(P), F.cameraManager.setSelectedCameraSettings(L), F.cameraAccess = I, F.onScanError(function(e) {-1 !== ["localhost", "127.0.0.1", ""].indexOf(window.location.hostname) && alert(e) }), I && F.cameraManager.setupCameras().then(function() { return F }), Rt.resolve(F) } }]), t }(), (Ii = (Pi = e.BarcodePicker || (e.BarcodePicker = {})).GuiStyle || (Pi.GuiStyle = {})).NONE = "none", Ii.LASER = "laser", Ii.VIEWFINDER = "viewfinder", (Vi = Pi.ObjectFit || (Pi.ObjectFit = {})).CONTAIN = "contain", Vi.COVER = "cover";
    var xi = e.BrowserHelper.getDeviceId();

    function Ri() { try { var t = new mi; return t.applyImageSettings({ width: 2, height: 2, format: e.ImageSettings.Format.GRAY_8U }), t.processImage(new Uint8ClampedArray(4)).then(function() {}) } catch (e) { return Rt.reject(e) } }
    e.userLicenseKey = void 0, e.scanditEngineLocation = void 0, e.deviceId = xi, e.configure = function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.engineLocation,
            i = void 0 === r ? "/" : r,
            a = n.preloadEngineLibrary,
            o = void 0 !== a && a,
            s = n.preloadCameras,
            c = void 0 !== s && s,
            d = e.BrowserHelper.checkBrowserCompatibility(); if (!d.fullSupport && !d.scannerSupport) return Rt.reject(new Ur({ name: "UnsupportedBrowserError", message: "This OS / Browser has one or more missing features preventing it from working correctly", data: d })); if (null == t || "" === t.trim()) return Rt.reject(new Ur({ name: "NoLicenseKeyError", message: "No license key provided" }));
        e.userLicenseKey = t, i += "/" === i.slice(-1) ? "" : "/", /^https?:\/\//.test(i) ? e.scanditEngineLocation = "" + i : (i = "" === (i = i.split("/").filter(function(e) { return e.length > 0 }).join("/")) ? "/" : "/" + i + "/", e.scanditEngineLocation = "" + location.origin + i); var u = []; return o && u.push(Ri()), c && u.push(e.CameraAccess.getCameras()), Rt.all(u).then(function() {}).catch(function(e) { return Rt.reject(e) }) }, e.loadEngineLibrary = Ri, e.UAParser = er, e.CustomError = Ur, e.Scanner = mi, e.ScanSettings = fi, e.engineSDKWorkerFunction = qr, e.engineSDKWorker = ti, Object.defineProperty(e, "__esModule", { value: !0 })
});
//# sourceMappingURL=index.min.js.map