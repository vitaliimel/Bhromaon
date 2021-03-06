(() => {
  var e = {
      1807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      1296: (e, t, r) => {
        var i = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          n = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          a = parseInt,
          l = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          d = l || c || Function("return this")(),
          u = Object.prototype.toString,
          p = Math.max,
          h = Math.min,
          f = function () {
            return d.Date.now();
          };
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function g(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == u.call(e))
              );
            })(e)
          )
            return NaN;
          if (v(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, "");
          var r = n.test(e);
          return r || o.test(e)
            ? a(e.slice(2), r ? 2 : 8)
            : s.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, r) {
          var i,
            s,
            n,
            o,
            a,
            l,
            c = 0,
            d = !1,
            u = !1,
            m = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function b(t) {
            var r = i,
              n = s;
            return (i = s = void 0), (c = t), (o = e.apply(n, r));
          }
          function y(e) {
            return (c = e), (a = setTimeout(x, t)), d ? b(e) : o;
          }
          function w(e) {
            var r = e - l;
            return void 0 === l || r >= t || r < 0 || (u && e - c >= n);
          }
          function x() {
            var e = f();
            if (w(e)) return E(e);
            a = setTimeout(
              x,
              (function (e) {
                var r = t - (e - l);
                return u ? h(r, n - (e - c)) : r;
              })(e)
            );
          }
          function E(e) {
            return (a = void 0), m && i ? b(e) : ((i = s = void 0), o);
          }
          function S() {
            var e = f(),
              r = w(e);
            if (((i = arguments), (s = this), (l = e), r)) {
              if (void 0 === a) return y(l);
              if (u) return (a = setTimeout(x, t)), b(l);
            }
            return void 0 === a && (a = setTimeout(x, t)), o;
          }
          return (
            (t = g(t) || 0),
            v(r) &&
              ((d = !!r.leading),
              (n = (u = "maxWait" in r) ? p(g(r.maxWait) || 0, t) : n),
              (m = "trailing" in r ? !!r.trailing : m)),
            (S.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (c = 0),
                (i = l = s = a = void 0);
            }),
            (S.flush = function () {
              return void 0 === a ? o : E(f());
            }),
            S
          );
        };
      },
      773: (e, t, r) => {
        var i = "__lodash_hash_undefined__",
          s = "[object Function]",
          n = "[object GeneratorFunction]",
          o = /^\[object .+?Constructor\]$/,
          a = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = a || l || Function("return this")();
        var d,
          u = Array.prototype,
          p = Function.prototype,
          h = Object.prototype,
          f = c["__core-js_shared__"],
          v = (d = /[^.]+$/.exec((f && f.keys && f.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + d
            : "",
          g = p.toString,
          m = h.hasOwnProperty,
          b = h.toString,
          y = RegExp(
            "^" +
              g
                .call(m)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          w = u.splice,
          x = k(c, "Map"),
          E = k(Object, "create");
        function S(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function T(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function C(e) {
          var t = -1,
            r = e ? e.length : 0;
          for (this.clear(); ++t < r; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function O(e, t) {
          for (var r, i, s = e.length; s--; )
            if ((r = e[s][0]) === (i = t) || (r != r && i != i)) return s;
          return -1;
        }
        function L(e) {
          if (!_(e) || ((t = e), v && v in t)) return !1;
          var t,
            r =
              (function (e) {
                var t = _(e) ? b.call(e) : "";
                return t == s || t == n;
              })(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
                ? y
                : o;
          return r.test(
            (function (e) {
              if (null != e) {
                try {
                  return g.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          );
        }
        function A(e, t) {
          var r,
            i,
            s = e.__data__;
          return (
            "string" == (i = typeof (r = t)) ||
            "number" == i ||
            "symbol" == i ||
            "boolean" == i
              ? "__proto__" !== r
              : null === r
          )
            ? s["string" == typeof t ? "string" : "hash"]
            : s.map;
        }
        function k(e, t) {
          var r = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return L(r) ? r : void 0;
        }
        function M(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var r = function () {
            var i = arguments,
              s = t ? t.apply(this, i) : i[0],
              n = r.cache;
            if (n.has(s)) return n.get(s);
            var o = e.apply(this, i);
            return (r.cache = n.set(s, o)), o;
          };
          return (r.cache = new (M.Cache || C)()), r;
        }
        function _(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        (S.prototype.clear = function () {
          this.__data__ = E ? E(null) : {};
        }),
          (S.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (S.prototype.get = function (e) {
            var t = this.__data__;
            if (E) {
              var r = t[e];
              return r === i ? void 0 : r;
            }
            return m.call(t, e) ? t[e] : void 0;
          }),
          (S.prototype.has = function (e) {
            var t = this.__data__;
            return E ? void 0 !== t[e] : m.call(t, e);
          }),
          (S.prototype.set = function (e, t) {
            return (this.__data__[e] = E && void 0 === t ? i : t), this;
          }),
          (T.prototype.clear = function () {
            this.__data__ = [];
          }),
          (T.prototype.delete = function (e) {
            var t = this.__data__,
              r = O(t, e);
            return (
              !(r < 0) && (r == t.length - 1 ? t.pop() : w.call(t, r, 1), !0)
            );
          }),
          (T.prototype.get = function (e) {
            var t = this.__data__,
              r = O(t, e);
            return r < 0 ? void 0 : t[r][1];
          }),
          (T.prototype.has = function (e) {
            return O(this.__data__, e) > -1;
          }),
          (T.prototype.set = function (e, t) {
            var r = this.__data__,
              i = O(r, e);
            return i < 0 ? r.push([e, t]) : (r[i][1] = t), this;
          }),
          (C.prototype.clear = function () {
            this.__data__ = {
              hash: new S(),
              map: new (x || T)(),
              string: new S(),
            };
          }),
          (C.prototype.delete = function (e) {
            return A(this, e).delete(e);
          }),
          (C.prototype.get = function (e) {
            return A(this, e).get(e);
          }),
          (C.prototype.has = function (e) {
            return A(this, e).has(e);
          }),
          (C.prototype.set = function (e, t) {
            return A(this, e).set(e, t), this;
          }),
          (M.Cache = C),
          (e.exports = M);
      },
      3096: (e, t, r) => {
        var i = "Expected a function",
          s = /^\s+|\s+$/g,
          n = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          l = parseInt,
          c = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
          d = "object" == typeof self && self && self.Object === Object && self,
          u = c || d || Function("return this")(),
          p = Object.prototype.toString,
          h = Math.max,
          f = Math.min,
          v = function () {
            return u.Date.now();
          };
        function g(e, t, r) {
          var s,
            n,
            o,
            a,
            l,
            c,
            d = 0,
            u = !1,
            p = !1,
            g = !0;
          if ("function" != typeof e) throw new TypeError(i);
          function y(t) {
            var r = s,
              i = n;
            return (s = n = void 0), (d = t), (a = e.apply(i, r));
          }
          function w(e) {
            return (d = e), (l = setTimeout(E, t)), u ? y(e) : a;
          }
          function x(e) {
            var r = e - c;
            return void 0 === c || r >= t || r < 0 || (p && e - d >= o);
          }
          function E() {
            var e = v();
            if (x(e)) return S(e);
            l = setTimeout(
              E,
              (function (e) {
                var r = t - (e - c);
                return p ? f(r, o - (e - d)) : r;
              })(e)
            );
          }
          function S(e) {
            return (l = void 0), g && s ? y(e) : ((s = n = void 0), a);
          }
          function T() {
            var e = v(),
              r = x(e);
            if (((s = arguments), (n = this), (c = e), r)) {
              if (void 0 === l) return w(c);
              if (p) return (l = setTimeout(E, t)), y(c);
            }
            return void 0 === l && (l = setTimeout(E, t)), a;
          }
          return (
            (t = b(t) || 0),
            m(r) &&
              ((u = !!r.leading),
              (o = (p = "maxWait" in r) ? h(b(r.maxWait) || 0, t) : o),
              (g = "trailing" in r ? !!r.trailing : g)),
            (T.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (d = 0),
                (s = c = n = l = void 0);
            }),
            (T.flush = function () {
              return void 0 === l ? a : S(v());
            }),
            T
          );
        }
        function m(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == p.call(e))
              );
            })(e)
          )
            return NaN;
          if (m(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = m(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(s, "");
          var r = o.test(e);
          return r || a.test(e)
            ? l(e.slice(2), r ? 2 : 8)
            : n.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, r) {
          var s = !0,
            n = !0;
          if ("function" != typeof e) throw new TypeError(i);
          return (
            m(r) &&
              ((s = "leading" in r ? !!r.leading : s),
              (n = "trailing" in r ? !!r.trailing : n)),
            g(e, t, { leading: s, maxWait: t, trailing: n })
          );
        };
      },
      5055: (e, t, r) => {
        var i = r(8454),
          s = r(6282),
          n = r(180),
          o = i.TypeError;
        e.exports = function (e) {
          if (s(e)) return e;
          throw o(n(e) + " is not a function");
        };
      },
      2004: (e, t, r) => {
        var i = r(8454),
          s = r(6282),
          n = i.String,
          o = i.TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || s(e)) return e;
          throw o("Can't set " + n(e) + " as a prototype");
        };
      },
      9256: (e, t, r) => {
        var i = r(8149),
          s = r(1525),
          n = r(9168),
          o = i("unscopables"),
          a = Array.prototype;
        null == a[o] && n.f(a, o, { configurable: !0, value: s(null) }),
          (e.exports = function (e) {
            a[o][e] = !0;
          });
      },
      3615: (e, t, r) => {
        "use strict";
        var i = r(7321).charAt;
        e.exports = function (e, t, r) {
          return t + (r ? i(e, t).length : 1);
        };
      },
      3046: (e, t, r) => {
        var i = r(8454),
          s = r(1786),
          n = i.TypeError;
        e.exports = function (e, t) {
          if (s(t, e)) return e;
          throw n("Incorrect invocation");
        };
      },
      1474: (e, t, r) => {
        var i = r(8454),
          s = r(5896),
          n = i.String,
          o = i.TypeError;
        e.exports = function (e) {
          if (s(e)) return e;
          throw o(n(e) + " is not an object");
        };
      },
      8774: (e, t, r) => {
        var i = r(6183);
        e.exports = i(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      1269: (e, t, r) => {
        "use strict";
        var i = r(528).forEach,
          s = r(1923)("forEach");
        e.exports = s
          ? [].forEach
          : function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      5675: (e, t, r) => {
        var i = r(3206),
          s = r(9623),
          n = r(1829),
          o = function (e) {
            return function (t, r, o) {
              var a,
                l = i(t),
                c = n(l),
                d = s(o, c);
              if (e && r != r) {
                for (; c > d; ) if ((a = l[d++]) != a) return !0;
              } else
                for (; c > d; d++)
                  if ((e || d in l) && l[d] === r) return e || d || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      528: (e, t, r) => {
        var i = r(1098),
          s = r(1768),
          n = r(7530),
          o = r(9473),
          a = r(1829),
          l = r(2768),
          c = s([].push),
          d = function (e) {
            var t = 1 == e,
              r = 2 == e,
              s = 3 == e,
              d = 4 == e,
              u = 6 == e,
              p = 7 == e,
              h = 5 == e || u;
            return function (f, v, g, m) {
              for (
                var b,
                  y,
                  w = o(f),
                  x = n(w),
                  E = i(v, g),
                  S = a(x),
                  T = 0,
                  C = m || l,
                  O = t ? C(f, S) : r || p ? C(f, 0) : void 0;
                S > T;
                T++
              )
                if ((h || T in x) && ((y = E((b = x[T]), T, w)), e))
                  if (t) O[T] = y;
                  else if (y)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return b;
                      case 6:
                        return T;
                      case 2:
                        c(O, b);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(O, b);
                    }
              return u ? -1 : s || d ? d : O;
            };
          };
        e.exports = {
          forEach: d(0),
          map: d(1),
          filter: d(2),
          some: d(3),
          every: d(4),
          find: d(5),
          findIndex: d(6),
          filterReject: d(7),
        };
      },
      4820: (e, t, r) => {
        var i = r(6183),
          s = r(8149),
          n = r(4324),
          o = s("species");
        e.exports = function (e) {
          return (
            n >= 51 ||
            !i(function () {
              var t = [];
              return (
                ((t.constructor = {})[o] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      1923: (e, t, r) => {
        "use strict";
        var i = r(6183);
        e.exports = function (e, t) {
          var r = [][e];
          return (
            !!r &&
            i(function () {
              r.call(
                null,
                t ||
                  function () {
                    throw 1;
                  },
                1
              );
            })
          );
        };
      },
      6589: (e, t, r) => {
        var i = r(8454),
          s = r(5055),
          n = r(9473),
          o = r(7530),
          a = r(1829),
          l = i.TypeError,
          c = function (e) {
            return function (t, r, i, c) {
              s(r);
              var d = n(t),
                u = o(d),
                p = a(d),
                h = e ? p - 1 : 0,
                f = e ? -1 : 1;
              if (i < 2)
                for (;;) {
                  if (h in u) {
                    (c = u[h]), (h += f);
                    break;
                  }
                  if (((h += f), e ? h < 0 : p <= h))
                    throw l("Reduce of empty array with no initial value");
                }
              for (; e ? h >= 0 : p > h; h += f)
                h in u && (c = r(c, u[h], h, d));
              return c;
            };
          };
        e.exports = { left: c(!1), right: c(!0) };
      },
      4072: (e, t, r) => {
        var i = r(8454),
          s = r(9623),
          n = r(1829),
          o = r(2759),
          a = i.Array,
          l = Math.max;
        e.exports = function (e, t, r) {
          for (
            var i = n(e),
              c = s(t, i),
              d = s(void 0 === r ? i : r, i),
              u = a(l(d - c, 0)),
              p = 0;
            c < d;
            c++, p++
          )
            o(u, p, e[c]);
          return (u.length = p), u;
        };
      },
      9882: (e, t, r) => {
        var i = r(8454),
          s = r(7931),
          n = r(2240),
          o = r(5896),
          a = r(8149)("species"),
          l = i.Array;
        e.exports = function (e) {
          var t;
          return (
            s(e) &&
              ((t = e.constructor),
              ((n(t) && (t === l || s(t.prototype))) ||
                (o(t) && null === (t = t[a]))) &&
                (t = void 0)),
            void 0 === t ? l : t
          );
        };
      },
      2768: (e, t, r) => {
        var i = r(9882);
        e.exports = function (e, t) {
          return new (i(e))(0 === t ? 0 : t);
        };
      },
      1751: (e, t, r) => {
        var i = r(8149)("iterator"),
          s = !1;
        try {
          var n = 0,
            o = {
              next: function () {
                return { done: !!n++ };
              },
              return: function () {
                s = !0;
              },
            };
          (o[i] = function () {
            return this;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !s) return !1;
          var r = !1;
          try {
            var n = {};
            (n[i] = function () {
              return {
                next: function () {
                  return { done: (r = !0) };
                },
              };
            }),
              e(n);
          } catch (e) {}
          return r;
        };
      },
      1510: (e, t, r) => {
        var i = r(1768),
          s = i({}.toString),
          n = i("".slice);
        e.exports = function (e) {
          return n(s(e), 8, -1);
        };
      },
      9225: (e, t, r) => {
        var i = r(8454),
          s = r(4823),
          n = r(6282),
          o = r(1510),
          a = r(8149)("toStringTag"),
          l = i.Object,
          c =
            "Arguments" ==
            o(
              (function () {
                return arguments;
              })()
            );
        e.exports = s
          ? o
          : function (e) {
              var t, r, i;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (r = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = l(e)), a))
                ? r
                : c
                ? o(t)
                : "Object" == (i = o(t)) && n(t.callee)
                ? "Arguments"
                : i;
            };
      },
      7790: (e, t, r) => {
        "use strict";
        var i = r(1768),
          s = r(9573),
          n = r(6582).getWeakData,
          o = r(1474),
          a = r(5896),
          l = r(3046),
          c = r(1518),
          d = r(528),
          u = r(8281),
          p = r(1030),
          h = p.set,
          f = p.getterFor,
          v = d.find,
          g = d.findIndex,
          m = i([].splice),
          b = 0,
          y = function (e) {
            return e.frozen || (e.frozen = new w());
          },
          w = function () {
            this.entries = [];
          },
          x = function (e, t) {
            return v(e.entries, function (e) {
              return e[0] === t;
            });
          };
        (w.prototype = {
          get: function (e) {
            var t = x(this, e);
            if (t) return t[1];
          },
          has: function (e) {
            return !!x(this, e);
          },
          set: function (e, t) {
            var r = x(this, e);
            r ? (r[1] = t) : this.entries.push([e, t]);
          },
          delete: function (e) {
            var t = g(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && m(this.entries, t, 1), !!~t;
          },
        }),
          (e.exports = {
            getConstructor: function (e, t, r, i) {
              var d = e(function (e, s) {
                  l(e, p),
                    h(e, { type: t, id: b++, frozen: void 0 }),
                    null != s && c(s, e[i], { that: e, AS_ENTRIES: r });
                }),
                p = d.prototype,
                v = f(t),
                g = function (e, t, r) {
                  var i = v(e),
                    s = n(o(t), !0);
                  return !0 === s ? y(i).set(t, r) : (s[i.id] = r), e;
                };
              return (
                s(p, {
                  delete: function (e) {
                    var t = v(this);
                    if (!a(e)) return !1;
                    var r = n(e);
                    return !0 === r
                      ? y(t).delete(e)
                      : r && u(r, t.id) && delete r[t.id];
                  },
                  has: function (e) {
                    var t = v(this);
                    if (!a(e)) return !1;
                    var r = n(e);
                    return !0 === r ? y(t).has(e) : r && u(r, t.id);
                  },
                }),
                s(
                  p,
                  r
                    ? {
                        get: function (e) {
                          var t = v(this);
                          if (a(e)) {
                            var r = n(e);
                            return !0 === r
                              ? y(t).get(e)
                              : r
                              ? r[t.id]
                              : void 0;
                          }
                        },
                        set: function (e, t) {
                          return g(this, e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return g(this, e, !0);
                        },
                      }
                ),
                d
              );
            },
          });
      },
      6645: (e, t, r) => {
        "use strict";
        var i = r(4761),
          s = r(8454),
          n = r(1768),
          o = r(1949),
          a = r(3971),
          l = r(6582),
          c = r(1518),
          d = r(3046),
          u = r(6282),
          p = r(5896),
          h = r(6183),
          f = r(1751),
          v = r(820),
          g = r(7770);
        e.exports = function (e, t, r) {
          var m = -1 !== e.indexOf("Map"),
            b = -1 !== e.indexOf("Weak"),
            y = m ? "set" : "add",
            w = s[e],
            x = w && w.prototype,
            E = w,
            S = {},
            T = function (e) {
              var t = n(x[e]);
              a(
                x,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return b && !p(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, r) {
                      return t(this, 0 === e ? 0 : e, r), this;
                    }
              );
            };
          if (
            o(
              e,
              !u(w) ||
                !(
                  b ||
                  (x.forEach &&
                    !h(function () {
                      new w().entries().next();
                    }))
                )
            )
          )
            (E = r.getConstructor(t, e, m, y)), l.enable();
          else if (o(e, !0)) {
            var C = new E(),
              O = C[y](b ? {} : -0, 1) != C,
              L = h(function () {
                C.has(1);
              }),
              A = f(function (e) {
                new w(e);
              }),
              k =
                !b &&
                h(function () {
                  for (var e = new w(), t = 5; t--; ) e[y](t, t);
                  return !e.has(-0);
                });
            A ||
              (((E = t(function (e, t) {
                d(e, x);
                var r = g(new w(), e, E);
                return null != t && c(t, r[y], { that: r, AS_ENTRIES: m }), r;
              })).prototype = x),
              (x.constructor = E)),
              (L || k) && (T("delete"), T("has"), m && T("get")),
              (k || O) && T(y),
              b && x.clear && delete x.clear;
          }
          return (
            (S[e] = E),
            i({ global: !0, forced: E != w }, S),
            v(E, e),
            b || r.setStrong(E, e, m),
            E
          );
        };
      },
      882: (e, t, r) => {
        var i = r(8281),
          s = r(1441),
          n = r(5663),
          o = r(9168);
        e.exports = function (e, t, r) {
          for (var a = s(t), l = o.f, c = n.f, d = 0; d < a.length; d++) {
            var u = a[d];
            i(e, u) || (r && i(r, u)) || l(e, u, c(t, u));
          }
        };
      },
      7401: (e, t, r) => {
        var i = r(6183);
        e.exports = !i(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      2538: (e, t, r) => {
        "use strict";
        var i = r(6524).IteratorPrototype,
          s = r(1525),
          n = r(9273),
          o = r(820),
          a = r(6126),
          l = function () {
            return this;
          };
        e.exports = function (e, t, r, c) {
          var d = t + " Iterator";
          return (
            (e.prototype = s(i, { next: n(+!c, r) })),
            o(e, d, !1, !0),
            (a[d] = l),
            e
          );
        };
      },
      1501: (e, t, r) => {
        var i = r(723),
          s = r(9168),
          n = r(9273);
        e.exports = i
          ? function (e, t, r) {
              return s.f(e, t, n(1, r));
            }
          : function (e, t, r) {
              return (e[t] = r), e;
            };
      },
      9273: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      2759: (e, t, r) => {
        "use strict";
        var i = r(2988),
          s = r(9168),
          n = r(9273);
        e.exports = function (e, t, r) {
          var o = i(t);
          o in e ? s.f(e, o, n(0, r)) : (e[o] = r);
        };
      },
      7583: (e, t, r) => {
        "use strict";
        var i = r(4761),
          s = r(4552),
          n = r(8977),
          o = r(4530),
          a = r(6282),
          l = r(2538),
          c = r(4204),
          d = r(5900),
          u = r(820),
          p = r(1501),
          h = r(3971),
          f = r(8149),
          v = r(6126),
          g = r(6524),
          m = o.PROPER,
          b = o.CONFIGURABLE,
          y = g.IteratorPrototype,
          w = g.BUGGY_SAFARI_ITERATORS,
          x = f("iterator"),
          E = "keys",
          S = "values",
          T = "entries",
          C = function () {
            return this;
          };
        e.exports = function (e, t, r, o, f, g, O) {
          l(r, t, o);
          var L,
            A,
            k,
            M = function (e) {
              if (e === f && I) return I;
              if (!w && e in $) return $[e];
              switch (e) {
                case E:
                case S:
                case T:
                  return function () {
                    return new r(this, e);
                  };
              }
              return function () {
                return new r(this);
              };
            },
            _ = t + " Iterator",
            P = !1,
            $ = e.prototype,
            z = $[x] || $["@@iterator"] || (f && $[f]),
            I = (!w && z) || M(f),
            N = ("Array" == t && $.entries) || z;
          if (
            (N &&
              (L = c(N.call(new e()))) !== Object.prototype &&
              L.next &&
              (n || c(L) === y || (d ? d(L, y) : a(L[x]) || h(L, x, C)),
              u(L, _, !0, !0),
              n && (v[_] = C)),
            m &&
              f == S &&
              z &&
              z.name !== S &&
              (!n && b
                ? p($, "name", S)
                : ((P = !0),
                  (I = function () {
                    return s(z, this);
                  }))),
            f)
          )
            if (((A = { values: M(S), keys: g ? I : M(E), entries: M(T) }), O))
              for (k in A) (w || P || !(k in $)) && h($, k, A[k]);
            else i({ target: t, proto: !0, forced: w || P }, A);
          return (
            (n && !O) || $[x] === I || h($, x, I, { name: f }), (v[t] = I), A
          );
        };
      },
      723: (e, t, r) => {
        var i = r(6183);
        e.exports = !i(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      7282: (e, t, r) => {
        var i = r(8454),
          s = r(5896),
          n = i.document,
          o = s(n) && s(n.createElement);
        e.exports = function (e) {
          return o ? n.createElement(e) : {};
        };
      },
      6181: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      2387: (e, t, r) => {
        var i = r(7282)("span").classList,
          s = i && i.constructor && i.constructor.prototype;
        e.exports = s === Object.prototype ? void 0 : s;
      },
      7594: (e, t, r) => {
        var i = r(1510),
          s = r(8454);
        e.exports = "process" == i(s.process);
      },
      2543: (e, t, r) => {
        var i = r(4991);
        e.exports = i("navigator", "userAgent") || "";
      },
      4324: (e, t, r) => {
        var i,
          s,
          n = r(8454),
          o = r(2543),
          a = n.process,
          l = n.Deno,
          c = (a && a.versions) || (l && l.version),
          d = c && c.v8;
        d && (s = (i = d.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
          !s &&
            o &&
            (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
            (i = o.match(/Chrome\/(\d+)/)) &&
            (s = +i[1]),
          (e.exports = s);
      },
      8409: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      4761: (e, t, r) => {
        var i = r(8454),
          s = r(5663).f,
          n = r(1501),
          o = r(3971),
          a = r(7852),
          l = r(882),
          c = r(1949);
        e.exports = function (e, t) {
          var r,
            d,
            u,
            p,
            h,
            f = e.target,
            v = e.global,
            g = e.stat;
          if ((r = v ? i : g ? i[f] || a(f, {}) : (i[f] || {}).prototype))
            for (d in t) {
              if (
                ((p = t[d]),
                (u = e.noTargetGet ? (h = s(r, d)) && h.value : r[d]),
                !c(v ? d : f + (g ? "." : "#") + d, e.forced) && void 0 !== u)
              ) {
                if (typeof p == typeof u) continue;
                l(p, u);
              }
              (e.sham || (u && u.sham)) && n(p, "sham", !0), o(r, d, p, e);
            }
        };
      },
      6183: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      9696: (e, t, r) => {
        "use strict";
        r(9989);
        var i = r(1768),
          s = r(3971),
          n = r(5510),
          o = r(6183),
          a = r(8149),
          l = r(1501),
          c = a("species"),
          d = RegExp.prototype;
        e.exports = function (e, t, r, u) {
          var p = a(e),
            h = !o(function () {
              var t = {};
              return (
                (t[p] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            f =
              h &&
              !o(function () {
                var t = !1,
                  r = /a/;
                return (
                  "split" === e &&
                    (((r = {}).constructor = {}),
                    (r.constructor[c] = function () {
                      return r;
                    }),
                    (r.flags = ""),
                    (r[p] = /./[p])),
                  (r.exec = function () {
                    return (t = !0), null;
                  }),
                  r[p](""),
                  !t
                );
              });
          if (!h || !f || r) {
            var v = i(/./[p]),
              g = t(p, ""[e], function (e, t, r, s, o) {
                var a = i(e),
                  l = t.exec;
                return l === n || l === d.exec
                  ? h && !o
                    ? { done: !0, value: v(t, r, s) }
                    : { done: !0, value: a(r, t, s) }
                  : { done: !1 };
              });
            s(String.prototype, e, g[0]), s(d, p, g[1]);
          }
          u && l(d[p], "sham", !0);
        };
      },
      3116: (e, t, r) => {
        var i = r(6183);
        e.exports = !i(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      6218: (e, t, r) => {
        var i = r(160),
          s = Function.prototype,
          n = s.apply,
          o = s.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (i
            ? o.bind(n)
            : function () {
                return o.apply(n, arguments);
              });
      },
      1098: (e, t, r) => {
        var i = r(1768),
          s = r(5055),
          n = r(160),
          o = i(i.bind);
        e.exports = function (e, t) {
          return (
            s(e),
            void 0 === t
              ? e
              : n
              ? o(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      160: (e, t, r) => {
        var i = r(6183);
        e.exports = !i(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      4552: (e, t, r) => {
        var i = r(160),
          s = Function.prototype.call;
        e.exports = i
          ? s.bind(s)
          : function () {
              return s.apply(s, arguments);
            };
      },
      4530: (e, t, r) => {
        var i = r(723),
          s = r(8281),
          n = Function.prototype,
          o = i && Object.getOwnPropertyDescriptor,
          a = s(n, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!i || (i && o(n, "name").configurable));
        e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      1768: (e, t, r) => {
        var i = r(160),
          s = Function.prototype,
          n = s.bind,
          o = s.call,
          a = i && n.bind(o, o);
        e.exports = i
          ? function (e) {
              return e && a(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return o.apply(e, arguments);
                }
              );
            };
      },
      4991: (e, t, r) => {
        var i = r(8454),
          s = r(6282),
          n = function (e) {
            return s(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? n(i[e]) : i[e] && i[e][t];
        };
      },
      650: (e, t, r) => {
        var i = r(9225),
          s = r(9827),
          n = r(6126),
          o = r(8149)("iterator");
        e.exports = function (e) {
          if (null != e) return s(e, o) || s(e, "@@iterator") || n[i(e)];
        };
      },
      7755: (e, t, r) => {
        var i = r(8454),
          s = r(4552),
          n = r(5055),
          o = r(1474),
          a = r(180),
          l = r(650),
          c = i.TypeError;
        e.exports = function (e, t) {
          var r = arguments.length < 2 ? l(e) : t;
          if (n(r)) return o(s(r, e));
          throw c(a(e) + " is not iterable");
        };
      },
      9827: (e, t, r) => {
        var i = r(5055);
        e.exports = function (e, t) {
          var r = e[t];
          return null == r ? void 0 : i(r);
        };
      },
      4742: (e, t, r) => {
        var i = r(1768),
          s = r(9473),
          n = Math.floor,
          o = i("".charAt),
          a = i("".replace),
          l = i("".slice),
          c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          d = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, r, i, u, p) {
          var h = r + e.length,
            f = i.length,
            v = d;
          return (
            void 0 !== u && ((u = s(u)), (v = c)),
            a(p, v, function (s, a) {
              var c;
              switch (o(a, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return l(t, 0, r);
                case "'":
                  return l(t, h);
                case "<":
                  c = u[l(a, 1, -1)];
                  break;
                default:
                  var d = +a;
                  if (0 === d) return s;
                  if (d > f) {
                    var p = n(d / 10);
                    return 0 === p
                      ? s
                      : p <= f
                      ? void 0 === i[p - 1]
                        ? o(a, 1)
                        : i[p - 1] + o(a, 1)
                      : s;
                  }
                  c = i[d - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        };
      },
      8454: (e, t, r) => {
        var i = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          i("object" == typeof globalThis && globalThis) ||
          i("object" == typeof window && window) ||
          i("object" == typeof self && self) ||
          i("object" == typeof r.g && r.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      8281: (e, t, r) => {
        var i = r(1768),
          s = r(9473),
          n = i({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return n(s(e), t);
          };
      },
      4377: (e) => {
        e.exports = {};
      },
      7461: (e, t, r) => {
        var i = r(4991);
        e.exports = i("document", "documentElement");
      },
      4985: (e, t, r) => {
        var i = r(723),
          s = r(6183),
          n = r(7282);
        e.exports =
          !i &&
          !s(function () {
            return (
              7 !=
              Object.defineProperty(n("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      7530: (e, t, r) => {
        var i = r(8454),
          s = r(1768),
          n = r(6183),
          o = r(1510),
          a = i.Object,
          l = s("".split);
        e.exports = n(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == o(e) ? l(e, "") : a(e);
            }
          : a;
      },
      7770: (e, t, r) => {
        var i = r(6282),
          s = r(5896),
          n = r(5900);
        e.exports = function (e, t, r) {
          var o, a;
          return (
            n &&
              i((o = t.constructor)) &&
              o !== r &&
              s((a = o.prototype)) &&
              a !== r.prototype &&
              n(e, a),
            e
          );
        };
      },
      6901: (e, t, r) => {
        var i = r(1768),
          s = r(6282),
          n = r(2047),
          o = i(Function.toString);
        s(n.inspectSource) ||
          (n.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = n.inspectSource);
      },
      6582: (e, t, r) => {
        var i = r(4761),
          s = r(1768),
          n = r(4377),
          o = r(5896),
          a = r(8281),
          l = r(9168).f,
          c = r(6785),
          d = r(6675),
          u = r(6662),
          p = r(9059),
          h = r(3116),
          f = !1,
          v = p("meta"),
          g = 0,
          m = function (e) {
            l(e, v, { value: { objectID: "O" + g++, weakData: {} } });
          },
          b = (e.exports = {
            enable: function () {
              (b.enable = function () {}), (f = !0);
              var e = c.f,
                t = s([].splice),
                r = {};
              (r[v] = 1),
                e(r).length &&
                  ((c.f = function (r) {
                    for (var i = e(r), s = 0, n = i.length; s < n; s++)
                      if (i[s] === v) {
                        t(i, s, 1);
                        break;
                      }
                    return i;
                  }),
                  i(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: d.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!o(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!a(e, v)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                m(e);
              }
              return e[v].objectID;
            },
            getWeakData: function (e, t) {
              if (!a(e, v)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                m(e);
              }
              return e[v].weakData;
            },
            onFreeze: function (e) {
              return h && f && u(e) && !a(e, v) && m(e), e;
            },
          });
        n[v] = !0;
      },
      1030: (e, t, r) => {
        var i,
          s,
          n,
          o = r(4404),
          a = r(8454),
          l = r(1768),
          c = r(5896),
          d = r(1501),
          u = r(8281),
          p = r(2047),
          h = r(8873),
          f = r(4377),
          v = "Object already initialized",
          g = a.TypeError,
          m = a.WeakMap;
        if (o || p.state) {
          var b = p.state || (p.state = new m()),
            y = l(b.get),
            w = l(b.has),
            x = l(b.set);
          (i = function (e, t) {
            if (w(b, e)) throw new g(v);
            return (t.facade = e), x(b, e, t), t;
          }),
            (s = function (e) {
              return y(b, e) || {};
            }),
            (n = function (e) {
              return w(b, e);
            });
        } else {
          var E = h("state");
          (f[E] = !0),
            (i = function (e, t) {
              if (u(e, E)) throw new g(v);
              return (t.facade = e), d(e, E, t), t;
            }),
            (s = function (e) {
              return u(e, E) ? e[E] : {};
            }),
            (n = function (e) {
              return u(e, E);
            });
        }
        e.exports = {
          set: i,
          get: s,
          has: n,
          enforce: function (e) {
            return n(e) ? s(e) : i(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var r;
              if (!c(t) || (r = s(t)).type !== e)
                throw g("Incompatible receiver, " + e + " required");
              return r;
            };
          },
        };
      },
      5859: (e, t, r) => {
        var i = r(8149),
          s = r(6126),
          n = i("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (s.Array === e || o[n] === e);
        };
      },
      7931: (e, t, r) => {
        var i = r(1510);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == i(e);
          };
      },
      6282: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      2240: (e, t, r) => {
        var i = r(1768),
          s = r(6183),
          n = r(6282),
          o = r(9225),
          a = r(4991),
          l = r(6901),
          c = function () {},
          d = [],
          u = a("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          h = i(p.exec),
          f = !p.exec(c),
          v = function (e) {
            if (!n(e)) return !1;
            try {
              return u(c, d, e), !0;
            } catch (e) {
              return !1;
            }
          },
          g = function (e) {
            if (!n(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return f || !!h(p, l(e));
            } catch (e) {
              return !0;
            }
          };
        (g.sham = !0),
          (e.exports =
            !u ||
            s(function () {
              var e;
              return (
                v(v.call) ||
                !v(Object) ||
                !v(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? g
              : v);
      },
      1949: (e, t, r) => {
        var i = r(6183),
          s = r(6282),
          n = /#|\.prototype\./,
          o = function (e, t) {
            var r = l[a(e)];
            return r == d || (r != c && (s(t) ? i(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(n, ".").toLowerCase();
          }),
          l = (o.data = {}),
          c = (o.NATIVE = "N"),
          d = (o.POLYFILL = "P");
        e.exports = o;
      },
      5896: (e, t, r) => {
        var i = r(6282);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : i(e);
        };
      },
      8977: (e) => {
        e.exports = !1;
      },
      1527: (e, t, r) => {
        var i = r(8454),
          s = r(4991),
          n = r(6282),
          o = r(1786),
          a = r(4746),
          l = i.Object;
        e.exports = a
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = s("Symbol");
              return n(t) && o(t.prototype, l(e));
            };
      },
      1518: (e, t, r) => {
        var i = r(8454),
          s = r(1098),
          n = r(4552),
          o = r(1474),
          a = r(180),
          l = r(5859),
          c = r(1829),
          d = r(1786),
          u = r(7755),
          p = r(650),
          h = r(9193),
          f = i.TypeError,
          v = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          g = v.prototype;
        e.exports = function (e, t, r) {
          var i,
            m,
            b,
            y,
            w,
            x,
            E,
            S = r && r.that,
            T = !(!r || !r.AS_ENTRIES),
            C = !(!r || !r.IS_ITERATOR),
            O = !(!r || !r.INTERRUPTED),
            L = s(t, S),
            A = function (e) {
              return i && h(i, "normal", e), new v(!0, e);
            },
            k = function (e) {
              return T
                ? (o(e), O ? L(e[0], e[1], A) : L(e[0], e[1]))
                : O
                ? L(e, A)
                : L(e);
            };
          if (C) i = e;
          else {
            if (!(m = p(e))) throw f(a(e) + " is not iterable");
            if (l(m)) {
              for (b = 0, y = c(e); y > b; b++)
                if ((w = k(e[b])) && d(g, w)) return w;
              return new v(!1);
            }
            i = u(e, m);
          }
          for (x = i.next; !(E = n(x, i)).done; ) {
            try {
              w = k(E.value);
            } catch (e) {
              h(i, "throw", e);
            }
            if ("object" == typeof w && w && d(g, w)) return w;
          }
          return new v(!1);
        };
      },
      9193: (e, t, r) => {
        var i = r(4552),
          s = r(1474),
          n = r(9827);
        e.exports = function (e, t, r) {
          var o, a;
          s(e);
          try {
            if (!(o = n(e, "return"))) {
              if ("throw" === t) throw r;
              return r;
            }
            o = i(o, e);
          } catch (e) {
            (a = !0), (o = e);
          }
          if ("throw" === t) throw r;
          if (a) throw o;
          return s(o), r;
        };
      },
      6524: (e, t, r) => {
        "use strict";
        var i,
          s,
          n,
          o = r(6183),
          a = r(6282),
          l = r(1525),
          c = r(4204),
          d = r(3971),
          u = r(8149),
          p = r(8977),
          h = u("iterator"),
          f = !1;
        [].keys &&
          ("next" in (n = [].keys())
            ? (s = c(c(n))) !== Object.prototype && (i = s)
            : (f = !0)),
          null == i ||
          o(function () {
            var e = {};
            return i[h].call(e) !== e;
          })
            ? (i = {})
            : p && (i = l(i)),
          a(i[h]) ||
            d(i, h, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: f });
      },
      6126: (e) => {
        e.exports = {};
      },
      1829: (e, t, r) => {
        var i = r(3917);
        e.exports = function (e) {
          return i(e.length);
        };
      },
      323: (e, t, r) => {
        var i = r(4324),
          s = r(6183);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !s(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && i && i < 41)
            );
          });
      },
      4404: (e, t, r) => {
        var i = r(8454),
          s = r(6282),
          n = r(6901),
          o = i.WeakMap;
        e.exports = s(o) && /native code/.test(n(o));
      },
      8513: (e, t, r) => {
        var i = r(8454),
          s = r(6183),
          n = r(1768),
          o = r(7655),
          a = r(9749).trim,
          l = r(8342),
          c = i.parseInt,
          d = i.Symbol,
          u = d && d.iterator,
          p = /^[+-]?0x/i,
          h = n(p.exec),
          f =
            8 !== c(l + "08") ||
            22 !== c(l + "0x16") ||
            (u &&
              !s(function () {
                c(Object(u));
              }));
        e.exports = f
          ? function (e, t) {
              var r = a(o(e));
              return c(r, t >>> 0 || (h(p, r) ? 16 : 10));
            }
          : c;
      },
      4727: (e, t, r) => {
        "use strict";
        var i = r(723),
          s = r(1768),
          n = r(4552),
          o = r(6183),
          a = r(1340),
          l = r(8074),
          c = r(4043),
          d = r(9473),
          u = r(7530),
          p = Object.assign,
          h = Object.defineProperty,
          f = s([].concat);
        e.exports =
          !p ||
          o(function () {
            if (
              i &&
              1 !==
                p(
                  { b: 1 },
                  p(
                    h({}, "a", {
                      enumerable: !0,
                      get: function () {
                        h(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              r = Symbol(),
              s = "abcdefghijklmnopqrst";
            return (
              (e[r] = 7),
              s.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != p({}, e)[r] || a(p({}, t)).join("") != s
            );
          })
            ? function (e, t) {
                for (
                  var r = d(e), s = arguments.length, o = 1, p = l.f, h = c.f;
                  s > o;

                )
                  for (
                    var v,
                      g = u(arguments[o++]),
                      m = p ? f(a(g), p(g)) : a(g),
                      b = m.length,
                      y = 0;
                    b > y;

                  )
                    (v = m[y++]), (i && !n(h, g, v)) || (r[v] = g[v]);
                return r;
              }
            : p;
      },
      1525: (e, t, r) => {
        var i,
          s = r(1474),
          n = r(262),
          o = r(8409),
          a = r(4377),
          l = r(7461),
          c = r(7282),
          d = r(8873),
          u = d("IE_PROTO"),
          p = function () {},
          h = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          f = function (e) {
            e.write(h("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          v = function () {
            try {
              i = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            v =
              "undefined" != typeof document
                ? document.domain && i
                  ? f(i)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(h("document.F=Object")),
                    e.close(),
                    e.F)
                : f(i);
            for (var r = o.length; r--; ) delete v.prototype[o[r]];
            return v();
          };
        (a[u] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var r;
              return (
                null !== e
                  ? ((p.prototype = s(e)),
                    (r = new p()),
                    (p.prototype = null),
                    (r[u] = e))
                  : (r = v()),
                void 0 === t ? r : n.f(r, t)
              );
            });
      },
      262: (e, t, r) => {
        var i = r(723),
          s = r(8654),
          n = r(9168),
          o = r(1474),
          a = r(3206),
          l = r(1340);
        t.f =
          i && !s
            ? Object.defineProperties
            : function (e, t) {
                o(e);
                for (var r, i = a(t), s = l(t), c = s.length, d = 0; c > d; )
                  n.f(e, (r = s[d++]), i[r]);
                return e;
              };
      },
      9168: (e, t, r) => {
        var i = r(8454),
          s = r(723),
          n = r(4985),
          o = r(8654),
          a = r(1474),
          l = r(2988),
          c = i.TypeError,
          d = Object.defineProperty,
          u = Object.getOwnPropertyDescriptor,
          p = "enumerable",
          h = "configurable",
          f = "writable";
        t.f = s
          ? o
            ? function (e, t, r) {
                if (
                  (a(e),
                  (t = l(t)),
                  a(r),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in r &&
                    f in r &&
                    !r.writable)
                ) {
                  var i = u(e, t);
                  i &&
                    i.writable &&
                    ((e[t] = r.value),
                    (r = {
                      configurable: h in r ? r.configurable : i.configurable,
                      enumerable: p in r ? r.enumerable : i.enumerable,
                      writable: !1,
                    }));
                }
                return d(e, t, r);
              }
            : d
          : function (e, t, r) {
              if ((a(e), (t = l(t)), a(r), n))
                try {
                  return d(e, t, r);
                } catch (e) {}
              if ("get" in r || "set" in r) throw c("Accessors not supported");
              return "value" in r && (e[t] = r.value), e;
            };
      },
      5663: (e, t, r) => {
        var i = r(723),
          s = r(4552),
          n = r(4043),
          o = r(9273),
          a = r(3206),
          l = r(2988),
          c = r(8281),
          d = r(4985),
          u = Object.getOwnPropertyDescriptor;
        t.f = i
          ? u
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), d))
                try {
                  return u(e, t);
                } catch (e) {}
              if (c(e, t)) return o(!s(n.f, e, t), e[t]);
            };
      },
      6675: (e, t, r) => {
        var i = r(1510),
          s = r(3206),
          n = r(6785).f,
          o = r(4072),
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "Window" == i(e)
            ? (function (e) {
                try {
                  return n(e);
                } catch (e) {
                  return o(a);
                }
              })(e)
            : n(s(e));
        };
      },
      6785: (e, t, r) => {
        var i = r(5113),
          s = r(8409).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return i(e, s);
          };
      },
      8074: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      4204: (e, t, r) => {
        var i = r(8454),
          s = r(8281),
          n = r(6282),
          o = r(9473),
          a = r(8873),
          l = r(7401),
          c = a("IE_PROTO"),
          d = i.Object,
          u = d.prototype;
        e.exports = l
          ? d.getPrototypeOf
          : function (e) {
              var t = o(e);
              if (s(t, c)) return t[c];
              var r = t.constructor;
              return n(r) && t instanceof r
                ? r.prototype
                : t instanceof d
                ? u
                : null;
            };
      },
      6662: (e, t, r) => {
        var i = r(6183),
          s = r(5896),
          n = r(1510),
          o = r(8774),
          a = Object.isExtensible,
          l = i(function () {
            a(1);
          });
        e.exports =
          l || o
            ? function (e) {
                return !!s(e) && (!o || "ArrayBuffer" != n(e)) && (!a || a(e));
              }
            : a;
      },
      1786: (e, t, r) => {
        var i = r(1768);
        e.exports = i({}.isPrototypeOf);
      },
      5113: (e, t, r) => {
        var i = r(1768),
          s = r(8281),
          n = r(3206),
          o = r(5675).indexOf,
          a = r(4377),
          l = i([].push);
        e.exports = function (e, t) {
          var r,
            i = n(e),
            c = 0,
            d = [];
          for (r in i) !s(a, r) && s(i, r) && l(d, r);
          for (; t.length > c; ) s(i, (r = t[c++])) && (~o(d, r) || l(d, r));
          return d;
        };
      },
      1340: (e, t, r) => {
        var i = r(5113),
          s = r(8409);
        e.exports =
          Object.keys ||
          function (e) {
            return i(e, s);
          };
      },
      4043: (e, t) => {
        "use strict";
        var r = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          s = i && !r.call({ 1: 2 }, 1);
        t.f = s
          ? function (e) {
              var t = i(this, e);
              return !!t && t.enumerable;
            }
          : r;
      },
      5900: (e, t, r) => {
        var i = r(1768),
          s = r(1474),
          n = r(2004);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  r = {};
                try {
                  (e = i(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(r, []),
                    (t = r instanceof Array);
                } catch (e) {}
                return function (r, i) {
                  return s(r), n(i), t ? e(r, i) : (r.__proto__ = i), r;
                };
              })()
            : void 0);
      },
      4117: (e, t, r) => {
        "use strict";
        var i = r(4823),
          s = r(9225);
        e.exports = i
          ? {}.toString
          : function () {
              return "[object " + s(this) + "]";
            };
      },
      6891: (e, t, r) => {
        var i = r(8454),
          s = r(4552),
          n = r(6282),
          o = r(5896),
          a = i.TypeError;
        e.exports = function (e, t) {
          var r, i;
          if ("string" === t && n((r = e.toString)) && !o((i = s(r, e))))
            return i;
          if (n((r = e.valueOf)) && !o((i = s(r, e)))) return i;
          if ("string" !== t && n((r = e.toString)) && !o((i = s(r, e))))
            return i;
          throw a("Can't convert object to primitive value");
        };
      },
      1441: (e, t, r) => {
        var i = r(4991),
          s = r(1768),
          n = r(6785),
          o = r(8074),
          a = r(1474),
          l = s([].concat);
        e.exports =
          i("Reflect", "ownKeys") ||
          function (e) {
            var t = n.f(a(e)),
              r = o.f;
            return r ? l(t, r(e)) : t;
          };
      },
      9573: (e, t, r) => {
        var i = r(3971);
        e.exports = function (e, t, r) {
          for (var s in t) i(e, s, t[s], r);
          return e;
        };
      },
      3971: (e, t, r) => {
        var i = r(8454),
          s = r(6282),
          n = r(8281),
          o = r(1501),
          a = r(7852),
          l = r(6901),
          c = r(1030),
          d = r(4530).CONFIGURABLE,
          u = c.get,
          p = c.enforce,
          h = String(String).split("String");
        (e.exports = function (e, t, r, l) {
          var c,
            u = !!l && !!l.unsafe,
            f = !!l && !!l.enumerable,
            v = !!l && !!l.noTargetGet,
            g = l && void 0 !== l.name ? l.name : t;
          s(r) &&
            ("Symbol(" === String(g).slice(0, 7) &&
              (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!n(r, "name") || (d && r.name !== g)) && o(r, "name", g),
            (c = p(r)).source ||
              (c.source = h.join("string" == typeof g ? g : ""))),
            e !== i
              ? (u ? !v && e[t] && (f = !0) : delete e[t],
                f ? (e[t] = r) : o(e, t, r))
              : f
              ? (e[t] = r)
              : a(t, r);
        })(Function.prototype, "toString", function () {
          return (s(this) && u(this).source) || l(this);
        });
      },
      8734: (e, t, r) => {
        var i = r(8454),
          s = r(4552),
          n = r(1474),
          o = r(6282),
          a = r(1510),
          l = r(5510),
          c = i.TypeError;
        e.exports = function (e, t) {
          var r = e.exec;
          if (o(r)) {
            var i = s(r, e, t);
            return null !== i && n(i), i;
          }
          if ("RegExp" === a(e)) return s(l, e, t);
          throw c("RegExp#exec called on incompatible receiver");
        };
      },
      5510: (e, t, r) => {
        "use strict";
        var i,
          s,
          n = r(4552),
          o = r(1768),
          a = r(7655),
          l = r(8383),
          c = r(6558),
          d = r(1748),
          u = r(1525),
          p = r(1030).get,
          h = r(7672),
          f = r(9729),
          v = d("native-string-replace", String.prototype.replace),
          g = RegExp.prototype.exec,
          m = g,
          b = o("".charAt),
          y = o("".indexOf),
          w = o("".replace),
          x = o("".slice),
          E =
            ((s = /b*/g),
            n(g, (i = /a/), "a"),
            n(g, s, "a"),
            0 !== i.lastIndex || 0 !== s.lastIndex),
          S = c.BROKEN_CARET,
          T = void 0 !== /()??/.exec("")[1];
        (E || T || S || h || f) &&
          (m = function (e) {
            var t,
              r,
              i,
              s,
              o,
              c,
              d,
              h = this,
              f = p(h),
              C = a(e),
              O = f.raw;
            if (O)
              return (
                (O.lastIndex = h.lastIndex),
                (t = n(m, O, C)),
                (h.lastIndex = O.lastIndex),
                t
              );
            var L = f.groups,
              A = S && h.sticky,
              k = n(l, h),
              M = h.source,
              _ = 0,
              P = C;
            if (
              (A &&
                ((k = w(k, "y", "")),
                -1 === y(k, "g") && (k += "g"),
                (P = x(C, h.lastIndex)),
                h.lastIndex > 0 &&
                  (!h.multiline ||
                    (h.multiline && "\n" !== b(C, h.lastIndex - 1))) &&
                  ((M = "(?: " + M + ")"), (P = " " + P), _++),
                (r = new RegExp("^(?:" + M + ")", k))),
              T && (r = new RegExp("^" + M + "$(?!\\s)", k)),
              E && (i = h.lastIndex),
              (s = n(g, A ? r : h, P)),
              A
                ? s
                  ? ((s.input = x(s.input, _)),
                    (s[0] = x(s[0], _)),
                    (s.index = h.lastIndex),
                    (h.lastIndex += s[0].length))
                  : (h.lastIndex = 0)
                : E &&
                  s &&
                  (h.lastIndex = h.global ? s.index + s[0].length : i),
              T &&
                s &&
                s.length > 1 &&
                n(v, s[0], r, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (s[o] = void 0);
                }),
              s && L)
            )
              for (s.groups = c = u(null), o = 0; o < L.length; o++)
                c[(d = L[o])[0]] = s[d[1]];
            return s;
          }),
          (e.exports = m);
      },
      8383: (e, t, r) => {
        "use strict";
        var i = r(1474);
        e.exports = function () {
          var e = i(this),
            t = "";
          return (
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      6558: (e, t, r) => {
        var i = r(6183),
          s = r(8454).RegExp,
          n = i(function () {
            var e = s("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          }),
          o =
            n ||
            i(function () {
              return !s("a", "y").sticky;
            }),
          a =
            n ||
            i(function () {
              var e = s("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            });
        e.exports = { BROKEN_CARET: a, MISSED_STICKY: o, UNSUPPORTED_Y: n };
      },
      7672: (e, t, r) => {
        var i = r(6183),
          s = r(8454).RegExp;
        e.exports = i(function () {
          var e = s(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      9729: (e, t, r) => {
        var i = r(6183),
          s = r(8454).RegExp;
        e.exports = i(function () {
          var e = s("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      7431: (e, t, r) => {
        var i = r(8454).TypeError;
        e.exports = function (e) {
          if (null == e) throw i("Can't call method on " + e);
          return e;
        };
      },
      7852: (e, t, r) => {
        var i = r(8454),
          s = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            s(i, e, { value: t, configurable: !0, writable: !0 });
          } catch (r) {
            i[e] = t;
          }
          return t;
        };
      },
      820: (e, t, r) => {
        var i = r(9168).f,
          s = r(8281),
          n = r(8149)("toStringTag");
        e.exports = function (e, t, r) {
          e && !r && (e = e.prototype),
            e && !s(e, n) && i(e, n, { configurable: !0, value: t });
        };
      },
      8873: (e, t, r) => {
        var i = r(1748),
          s = r(9059),
          n = i("keys");
        e.exports = function (e) {
          return n[e] || (n[e] = s(e));
        };
      },
      2047: (e, t, r) => {
        var i = r(8454),
          s = r(7852),
          n = "__core-js_shared__",
          o = i[n] || s(n, {});
        e.exports = o;
      },
      1748: (e, t, r) => {
        var i = r(8977),
          s = r(2047);
        (e.exports = function (e, t) {
          return s[e] || (s[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.21.0",
          mode: i ? "pure" : "global",
          copyright: "?? 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      7321: (e, t, r) => {
        var i = r(1768),
          s = r(8037),
          n = r(7655),
          o = r(7431),
          a = i("".charAt),
          l = i("".charCodeAt),
          c = i("".slice),
          d = function (e) {
            return function (t, r) {
              var i,
                d,
                u = n(o(t)),
                p = s(r),
                h = u.length;
              return p < 0 || p >= h
                ? e
                  ? ""
                  : void 0
                : (i = l(u, p)) < 55296 ||
                  i > 56319 ||
                  p + 1 === h ||
                  (d = l(u, p + 1)) < 56320 ||
                  d > 57343
                ? e
                  ? a(u, p)
                  : i
                : e
                ? c(u, p, p + 2)
                : d - 56320 + ((i - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: d(!1), charAt: d(!0) };
      },
      9749: (e, t, r) => {
        var i = r(1768),
          s = r(7431),
          n = r(7655),
          o = r(8342),
          a = i("".replace),
          l = "[" + o + "]",
          c = RegExp("^" + l + l + "*"),
          d = RegExp(l + l + "*$"),
          u = function (e) {
            return function (t) {
              var r = n(s(t));
              return 1 & e && (r = a(r, c, "")), 2 & e && (r = a(r, d, "")), r;
            };
          };
        e.exports = { start: u(1), end: u(2), trim: u(3) };
      },
      9623: (e, t, r) => {
        var i = r(8037),
          s = Math.max,
          n = Math.min;
        e.exports = function (e, t) {
          var r = i(e);
          return r < 0 ? s(r + t, 0) : n(r, t);
        };
      },
      3206: (e, t, r) => {
        var i = r(7530),
          s = r(7431);
        e.exports = function (e) {
          return i(s(e));
        };
      },
      8037: (e) => {
        var t = Math.ceil,
          r = Math.floor;
        e.exports = function (e) {
          var i = +e;
          return i != i || 0 === i ? 0 : (i > 0 ? r : t)(i);
        };
      },
      3917: (e, t, r) => {
        var i = r(8037),
          s = Math.min;
        e.exports = function (e) {
          return e > 0 ? s(i(e), 9007199254740991) : 0;
        };
      },
      9473: (e, t, r) => {
        var i = r(8454),
          s = r(7431),
          n = i.Object;
        e.exports = function (e) {
          return n(s(e));
        };
      },
      3948: (e, t, r) => {
        var i = r(8454),
          s = r(4552),
          n = r(5896),
          o = r(1527),
          a = r(9827),
          l = r(6891),
          c = r(8149),
          d = i.TypeError,
          u = c("toPrimitive");
        e.exports = function (e, t) {
          if (!n(e) || o(e)) return e;
          var r,
            i = a(e, u);
          if (i) {
            if (
              (void 0 === t && (t = "default"), (r = s(i, e, t)), !n(r) || o(r))
            )
              return r;
            throw d("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), l(e, t);
        };
      },
      2988: (e, t, r) => {
        var i = r(3948),
          s = r(1527);
        e.exports = function (e) {
          var t = i(e, "string");
          return s(t) ? t : t + "";
        };
      },
      4823: (e, t, r) => {
        var i = {};
        (i[r(8149)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(i));
      },
      7655: (e, t, r) => {
        var i = r(8454),
          s = r(9225),
          n = i.String;
        e.exports = function (e) {
          if ("Symbol" === s(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return n(e);
        };
      },
      180: (e, t, r) => {
        var i = r(8454).String;
        e.exports = function (e) {
          try {
            return i(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9059: (e, t, r) => {
        var i = r(1768),
          s = 0,
          n = Math.random(),
          o = i((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++s + n, 36);
        };
      },
      4746: (e, t, r) => {
        var i = r(323);
        e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      8654: (e, t, r) => {
        var i = r(723),
          s = r(6183);
        e.exports =
          i &&
          s(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      8149: (e, t, r) => {
        var i = r(8454),
          s = r(1748),
          n = r(8281),
          o = r(9059),
          a = r(323),
          l = r(4746),
          c = s("wks"),
          d = i.Symbol,
          u = d && d.for,
          p = l ? d : (d && d.withoutSetter) || o;
        e.exports = function (e) {
          if (!n(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && n(d, e) ? (c[e] = d[e]) : (c[e] = l && u ? u(t) : p(t));
          }
          return c[e];
        };
      },
      8342: (e) => {
        e.exports = "\t\n\v\f\r ???????????????????????????????????????????????\u2028\u2029\ufeff";
      },
      8165: (e, t, r) => {
        "use strict";
        var i = r(4761),
          s = r(528).filter;
        i(
          { target: "Array", proto: !0, forced: !r(4820)("filter") },
          {
            filter: function (e) {
              return s(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      9399: (e, t, r) => {
        "use strict";
        var i = r(4761),
          s = r(1269);
        i(
          { target: "Array", proto: !0, forced: [].forEach != s },
          { forEach: s }
        );
      },
      7543: (e, t, r) => {
        "use strict";
        var i = r(3206),
          s = r(9256),
          n = r(6126),
          o = r(1030),
          a = r(9168).f,
          l = r(7583),
          c = r(8977),
          d = r(723),
          u = "Array Iterator",
          p = o.set,
          h = o.getterFor(u);
        e.exports = l(
          Array,
          "Array",
          function (e, t) {
            p(this, { type: u, target: i(e), index: 0, kind: t });
          },
          function () {
            var e = h(this),
              t = e.target,
              r = e.kind,
              i = e.index++;
            return !t || i >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == r
              ? { value: i, done: !1 }
              : "values" == r
              ? { value: t[i], done: !1 }
              : { value: [i, t[i]], done: !1 };
          },
          "values"
        );
        var f = (n.Arguments = n.Array);
        if (
          (s("keys"), s("values"), s("entries"), !c && d && "values" !== f.name)
        )
          try {
            a(f, "name", { value: "values" });
          } catch (e) {}
      },
      7985: (e, t, r) => {
        "use strict";
        var i = r(4761),
          s = r(6589).left,
          n = r(1923),
          o = r(4324),
          a = r(7594);
        i(
          {
            target: "Array",
            proto: !0,
            forced: !n("reduce") || (!a && o > 79 && o < 83),
          },
          {
            reduce: function (e) {
              var t = arguments.length;
              return s(this, e, t, t > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      6618: (e, t, r) => {
        var i = r(723),
          s = r(4530).EXISTS,
          n = r(1768),
          o = r(9168).f,
          a = Function.prototype,
          l = n(a.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          d = n(c.exec);
        i &&
          !s &&
          o(a, "name", {
            configurable: !0,
            get: function () {
              try {
                return d(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      7692: (e, t, r) => {
        var i = r(4761),
          s = r(4727);
        i(
          { target: "Object", stat: !0, forced: Object.assign !== s },
          { assign: s }
        );
      },
      2352: (e, t, r) => {
        var i = r(4823),
          s = r(3971),
          n = r(4117);
        i || s(Object.prototype, "toString", n, { unsafe: !0 });
      },
      4249: (e, t, r) => {
        var i = r(4761),
          s = r(8513);
        i({ global: !0, forced: parseInt != s }, { parseInt: s });
      },
      9989: (e, t, r) => {
        "use strict";
        var i = r(4761),
          s = r(5510);
        i({ target: "RegExp", proto: !0, forced: /./.exec !== s }, { exec: s });
      },
      3344: (e, t, r) => {
        "use strict";
        var i = r(7321).charAt,
          s = r(7655),
          n = r(1030),
          o = r(7583),
          a = "String Iterator",
          l = n.set,
          c = n.getterFor(a);
        o(
          String,
          "String",
          function (e) {
            l(this, { type: a, string: s(e), index: 0 });
          },
          function () {
            var e,
              t = c(this),
              r = t.string,
              s = t.index;
            return s >= r.length
              ? { value: void 0, done: !0 }
              : ((e = i(r, s)), (t.index += e.length), { value: e, done: !1 });
          }
        );
      },
      8307: (e, t, r) => {
        "use strict";
        var i = r(4552),
          s = r(9696),
          n = r(1474),
          o = r(3917),
          a = r(7655),
          l = r(7431),
          c = r(9827),
          d = r(3615),
          u = r(8734);
        s("match", function (e, t, r) {
          return [
            function (t) {
              var r = l(this),
                s = null == t ? void 0 : c(t, e);
              return s ? i(s, t, r) : new RegExp(t)[e](a(r));
            },
            function (e) {
              var i = n(this),
                s = a(e),
                l = r(t, i, s);
              if (l.done) return l.value;
              if (!i.global) return u(i, s);
              var c = i.unicode;
              i.lastIndex = 0;
              for (var p, h = [], f = 0; null !== (p = u(i, s)); ) {
                var v = a(p[0]);
                (h[f] = v),
                  "" === v && (i.lastIndex = d(s, o(i.lastIndex), c)),
                  f++;
              }
              return 0 === f ? null : h;
            },
          ];
        });
      },
      4390: (e, t, r) => {
        "use strict";
        var i = r(6218),
          s = r(4552),
          n = r(1768),
          o = r(9696),
          a = r(6183),
          l = r(1474),
          c = r(6282),
          d = r(8037),
          u = r(3917),
          p = r(7655),
          h = r(7431),
          f = r(3615),
          v = r(9827),
          g = r(4742),
          m = r(8734),
          b = r(8149)("replace"),
          y = Math.max,
          w = Math.min,
          x = n([].concat),
          E = n([].push),
          S = n("".indexOf),
          T = n("".slice),
          C = "$0" === "a".replace(/./, "$0"),
          O = !!/./[b] && "" === /./[b]("a", "$0");
        o(
          "replace",
          function (e, t, r) {
            var n = O ? "$" : "$0";
            return [
              function (e, r) {
                var i = h(this),
                  n = null == e ? void 0 : v(e, b);
                return n ? s(n, e, i, r) : s(t, p(i), e, r);
              },
              function (e, s) {
                var o = l(this),
                  a = p(e);
                if (
                  "string" == typeof s &&
                  -1 === S(s, n) &&
                  -1 === S(s, "$<")
                ) {
                  var h = r(t, o, a, s);
                  if (h.done) return h.value;
                }
                var v = c(s);
                v || (s = p(s));
                var b = o.global;
                if (b) {
                  var C = o.unicode;
                  o.lastIndex = 0;
                }
                for (var O = []; ; ) {
                  var L = m(o, a);
                  if (null === L) break;
                  if ((E(O, L), !b)) break;
                  "" === p(L[0]) && (o.lastIndex = f(a, u(o.lastIndex), C));
                }
                for (var A, k = "", M = 0, _ = 0; _ < O.length; _++) {
                  for (
                    var P = p((L = O[_])[0]),
                      $ = y(w(d(L.index), a.length), 0),
                      z = [],
                      I = 1;
                    I < L.length;
                    I++
                  )
                    E(z, void 0 === (A = L[I]) ? A : String(A));
                  var N = L.groups;
                  if (v) {
                    var j = x([P], z, $, a);
                    void 0 !== N && E(j, N);
                    var R = p(i(s, void 0, j));
                  } else R = g(P, a, $, z, N, s);
                  $ >= M && ((k += T(a, M, $) + R), (M = $ + P.length));
                }
                return k + T(a, M);
              },
            ];
          },
          !!a(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !C ||
            O
        );
      },
      7323: (e, t, r) => {
        "use strict";
        var i,
          s = r(8454),
          n = r(1768),
          o = r(9573),
          a = r(6582),
          l = r(6645),
          c = r(7790),
          d = r(5896),
          u = r(6662),
          p = r(1030).enforce,
          h = r(4404),
          f = !s.ActiveXObject && "ActiveXObject" in s,
          v = function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          g = l("WeakMap", v, c);
        if (h && f) {
          (i = c.getConstructor(v, "WeakMap", !0)), a.enable();
          var m = g.prototype,
            b = n(m.delete),
            y = n(m.has),
            w = n(m.get),
            x = n(m.set);
          o(m, {
            delete: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  b(this, e) || t.frozen.delete(e)
                );
              }
              return b(this, e);
            },
            has: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  y(this, e) || t.frozen.has(e)
                );
              }
              return y(this, e);
            },
            get: function (e) {
              if (d(e) && !u(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  y(this, e) ? w(this, e) : t.frozen.get(e)
                );
              }
              return w(this, e);
            },
            set: function (e, t) {
              if (d(e) && !u(e)) {
                var r = p(this);
                r.frozen || (r.frozen = new i()),
                  y(this, e) ? x(this, e, t) : r.frozen.set(e, t);
              } else x(this, e, t);
              return this;
            },
          });
        }
      },
      3542: (e, t, r) => {
        var i = r(8454),
          s = r(6181),
          n = r(2387),
          o = r(1269),
          a = r(1501),
          l = function (e) {
            if (e && e.forEach !== o)
              try {
                a(e, "forEach", o);
              } catch (t) {
                e.forEach = o;
              }
          };
        for (var c in s) s[c] && l(i[c] && i[c].prototype);
        l(n);
      },
      4079: (e, t, r) => {
        var i = r(8454),
          s = r(6181),
          n = r(2387),
          o = r(7543),
          a = r(1501),
          l = r(8149),
          c = l("iterator"),
          d = l("toStringTag"),
          u = o.values,
          p = function (e, t) {
            if (e) {
              if (e[c] !== u)
                try {
                  a(e, c, u);
                } catch (t) {
                  e[c] = u;
                }
              if ((e[d] || a(e, d, t), s[t]))
                for (var r in o)
                  if (e[r] !== o[r])
                    try {
                      a(e, r, o[r]);
                    } catch (t) {
                      e[r] = o[r];
                    }
            }
          };
        for (var h in s) p(i[h] && i[h].prototype, h);
        p(n, "DOMTokenList");
      },
    },
    t = {};
  function r(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var n = (t[i] = { exports: {} });
    return e[i](n, n.exports, r), n.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var i in t)
        r.o(t, i) &&
          !r.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      class e {
        constructor(e) {
          let t = {
            logging: !0,
            init: !0,
            attributeOpenButton: "data-popup",
            attributeCloseButton: "data-close",
            fixElementSelector: "[data-lp]",
            youtubeAttribute: "data-youtube",
            youtubePlaceAttribute: "data-youtube-place",
            setAutoplayYoutube: !0,
            classes: {
              popup: "popup",
              popupContent: "popup__content",
              popupActive: "popup_show",
              bodyActive: "popup-show",
            },
            focusCatch: !0,
            closeEsc: !0,
            bodyLock: !0,
            bodyLockDelay: 500,
            hashSettings: { location: !0, goHash: !0 },
            on: {
              beforeOpen: function () {},
              afterOpen: function () {},
              beforeClose: function () {},
              afterClose: function () {},
            },
          };
          (this.isOpen = !1),
            (this.targetOpen = { selector: !1, element: !1 }),
            (this.previousOpen = { selector: !1, element: !1 }),
            (this.lastClosed = { selector: !1, element: !1 }),
            (this._dataValue = !1),
            (this.hash = !1),
            (this._reopen = !1),
            (this._selectorOpen = !1),
            (this.lastFocusEl = !1),
            (this._focusEl = [
              "a[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "button:not([disabled]):not([aria-hidden])",
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "area[href]",
              "iframe",
              "object",
              "embed",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this.options = {
              ...t,
              ...e,
              classes: { ...t.classes, ...e?.classes },
              hashSettings: { ...t.hashSettings, ...e?.hashSettings },
              on: { ...t.on, ...e?.on },
            }),
            this.options.init && this.initPopups();
        }
        initPopups() {
          this.popupLogging("??????????????????"), this.eventsPopup();
        }
        eventsPopup() {
          document.addEventListener(
            "click",
            function (e) {
              const t = e.target.closest(
                `[${this.options.attributeOpenButton}]`
              );
              if (t)
                return (
                  e.preventDefault(),
                  (this._dataValue = t.getAttribute(
                    this.options.attributeOpenButton
                  )
                    ? t.getAttribute(this.options.attributeOpenButton)
                    : "error"),
                  "error" !== this._dataValue
                    ? (this.isOpen || (this.lastFocusEl = t),
                      (this.targetOpen.selector = `${this._dataValue}`),
                      (this._selectorOpen = !0),
                      void this.open())
                    : void this.popupLogging(
                        `???? ????, ???? ???????????????? ?????????????? ?? ${t.classList}`
                      )
                );
              return e.target.closest(
                `[${this.options.attributeCloseButton}]`
              ) ||
                (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                  this.isOpen)
                ? (e.preventDefault(), void this.close())
                : void 0;
            }.bind(this)
          ),
            document.addEventListener(
              "keydown",
              function (e) {
                if (
                  this.options.closeEsc &&
                  27 == e.which &&
                  "Escape" === e.code &&
                  this.isOpen
                )
                  return e.preventDefault(), void this.close();
                this.options.focusCatch &&
                  9 == e.which &&
                  this.isOpen &&
                  this._focusCatch(e);
              }.bind(this)
            ),
            document.querySelector("form[data-ajax],form[data-dev]") &&
              document.addEventListener(
                "formSent",
                function (e) {
                  const t = e.detail.form.dataset.popupMessage;
                  t && this.open(t);
                }.bind(this)
              ),
            this.options.hashSettings.goHash &&
              (window.addEventListener(
                "hashchange",
                function () {
                  window.location.hash
                    ? this._openToHash()
                    : this.close(this.targetOpen.selector);
                }.bind(this)
              ),
              window.addEventListener(
                "load",
                function () {
                  window.location.hash && this._openToHash();
                }.bind(this)
              ));
        }
        open(e) {
          if (
            (e &&
              "string" == typeof e &&
              "" !== e.trim() &&
              ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
            this.isOpen && ((this._reopen = !0), this.close()),
            this._selectorOpen ||
              (this.targetOpen.selector = this.lastClosed.selector),
            this._reopen ||
              (this.previousActiveElement = document.activeElement),
            (this.targetOpen.element = document.querySelector(
              this.targetOpen.selector
            )),
            this.targetOpen.element)
          ) {
            if (
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              )
            ) {
              const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                  this.options.youtubeAttribute
                )}?rel=0&showinfo=0&autoplay=1`,
                t = document.createElement("iframe");
              t.setAttribute("allowfullscreen", "");
              const r = this.options.setAutoplayYoutube ? "autoplay;" : "";
              t.setAttribute("allow", `${r}; encrypted-media`),
                t.setAttribute("src", e),
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                  this.targetOpen.element
                    .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                    .appendChild(t);
            }
            this.options.hashSettings.location &&
              (this._getHash(), this._setHash()),
              this.options.on.beforeOpen(this),
              this.targetOpen.element.classList.add(
                this.options.classes.popupActive
              ),
              document.body.classList.add(this.options.classes.bodyActive),
              this._reopen ? (this._reopen = !1) : s(),
              this.targetOpen.element.setAttribute("aria-hidden", "false"),
              (this.previousOpen.selector = this.targetOpen.selector),
              (this.previousOpen.element = this.targetOpen.element),
              (this._selectorOpen = !1),
              (this.isOpen = !0),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              document.dispatchEvent(
                new CustomEvent("afterPopupOpen", { detail: { popup: this } })
              ),
              this.popupLogging("???????????? ??????????");
          } else
            this.popupLogging(
              "???? ????, ???????????? ???????????? ??????. ?????????????????? ???????????????????????? ??????????. "
            );
        }
        close(e) {
          e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            (this.previousOpen.selector = e),
            this.isOpen &&
              i &&
              (this.options.on.beforeClose(this),
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              ) &&
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                (this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ).innerHTML = ""),
              this.previousOpen.element.classList.remove(
                this.options.classes.popupActive
              ),
              this.previousOpen.element.setAttribute("aria-hidden", "true"),
              this._reopen ||
                (document.body.classList.remove(
                  this.options.classes.bodyActive
                ),
                s(),
                (this.isOpen = !1)),
              this._removeHash(),
              this._selectorOpen &&
                ((this.lastClosed.selector = this.previousOpen.selector),
                (this.lastClosed.element = this.previousOpen.element)),
              this.options.on.afterClose(this),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              this.popupLogging("???????????? ??????????"));
        }
        _getHash() {
          this.options.hashSettings.location &&
            (this.hash = this.targetOpen.selector.includes("#")
              ? this.targetOpen.selector
              : this.targetOpen.selector.replace(".", "#"));
        }
        _openToHash() {
          let e = document.querySelector(
            `.${window.location.hash.replace("#", "")}`
          )
            ? `.${window.location.hash.replace("#", "")}`
            : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
          document.querySelector(
            `[${this.options.attributeOpenButton}="${e}"]`
          ) &&
            e &&
            this.open(e);
        }
        _setHash() {
          history.pushState("", "", this.hash);
        }
        _removeHash() {
          history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e) {
          const t = this.targetOpen.element.querySelectorAll(this._focusEl),
            r = Array.prototype.slice.call(t),
            i = r.indexOf(document.activeElement);
          e.shiftKey &&
            0 === i &&
            (r[r.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              i !== r.length - 1 ||
              (r[0].focus(), e.preventDefault());
        }
        _focusTrap() {
          const e = this.previousOpen.element.querySelectorAll(this._focusEl);
          !this.isOpen && this.lastFocusEl
            ? this.lastFocusEl.focus()
            : e[0].focus();
        }
        popupLogging(e) {
          this.options.logging && a(`[??????????????]: ${e}`);
        }
      }
      let t = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
          );
        },
      };
      let i = !0,
        s = (e = 500) => {
          document.documentElement.classList.contains("lock") ? n(e) : o(e);
        },
        n = (e = 500) => {
          let t = document.querySelector("body");
          if (i) {
            let r = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < r.length; e++) {
                r[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (i = !1),
              setTimeout(function () {
                i = !0;
              }, e);
          }
        },
        o = (e = 500) => {
          let t = document.querySelector("body");
          if (i) {
            let r = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < r.length; e++) {
              r[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (i = !1),
              setTimeout(function () {
                i = !0;
              }, e);
          }
        };
      function a(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      function l(e) {
        return e.filter(function (e, t, r) {
          return r.indexOf(e) === t;
        });
      }
      let c = (e, t = !1, r = 500, i = 0) => {
        const s = document.querySelector(e);
        if (s) {
          let o = "",
            l = 0;
          t &&
            ((o = "header.header"),
            (l = document.querySelector(o).offsetHeight));
          let c = {
            speedAsDuration: !0,
            speed: r,
            header: o,
            offset: i,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (n(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(s, "", c);
          else {
            let e = s.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
          }
          a(`[gotoBlock]: ????????...???????? ?? ${e}`);
        } else a(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${e}`);
      };
      const d = { inputMaskModule: null, selectModule: null };
      let u = {
        getErrors(e) {
          let t = 0,
            r = e.querySelectorAll("*[data-required]");
          return (
            r.length &&
              r.forEach((e) => {
                (null === e.offsetParent && "SELECT" !== e.tagName) ||
                  e.disabled ||
                  (t += this.validateInput(e));
              }),
            t
          );
        },
        validateInput(e) {
          let t = 0;
          return (
            "email" === e.dataset.required
              ? ((e.value = e.value.replace(" ", "")),
                this.emailTest(e)
                  ? (this.addError(e), t++)
                  : this.removeError(e))
              : ("checkbox" !== e.type || e.checked) && e.value
              ? this.removeError(e)
              : (this.addError(e), t++),
            t
          );
        },
        addError(e) {
          e.classList.add("_form-error"),
            e.parentElement.classList.add("_form-error");
          let t = e.parentElement.querySelector(".form__error");
          t && e.parentElement.removeChild(t),
            e.dataset.error &&
              e.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="form__error">${e.dataset.error}</div>`
              );
        },
        removeError(e) {
          e.classList.remove("_form-error"),
            e.parentElement.classList.remove("_form-error"),
            e.parentElement.querySelector(".form__error") &&
              e.parentElement.removeChild(
                e.parentElement.querySelector(".form__error")
              );
        },
        formClean(e) {
          e.reset(),
            setTimeout(() => {
              let t = e.querySelectorAll("input,textarea");
              for (let e = 0; e < t.length; e++) {
                const r = t[e];
                r.parentElement.classList.remove("_form-focus"),
                  r.classList.remove("_form-focus"),
                  u.removeError(r),
                  (r.value = r.dataset.placeholder);
              }
              let r = e.querySelectorAll(".checkbox__input");
              if (r.length > 0)
                for (let e = 0; e < r.length; e++) {
                  r[e].checked = !1;
                }
              if (d.selectModule) {
                let t = e.querySelectorAll(".select");
                if (t.length)
                  for (let e = 0; e < t.length; e++) {
                    const r = t[e].querySelector("select");
                    d.selectModule.selectBuild(r);
                  }
              }
            }, 0);
        },
        emailTest: (e) =>
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
      };
      function p(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function h(e = {}, t = {}) {
        Object.keys(t).forEach((r) => {
          void 0 === e[r]
            ? (e[r] = t[r])
            : p(t[r]) &&
              p(e[r]) &&
              Object.keys(t[r]).length > 0 &&
              h(e[r], t[r]);
        });
      }
      const f = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function v() {
        const e = "undefined" != typeof document ? document : {};
        return h(e, f), e;
      }
      const g = {
        document: f,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function m() {
        const e = "undefined" != typeof window ? window : {};
        return h(e, g), e;
      }
      class b extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function y(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...y(e)) : t.push(e);
          }),
          t
        );
      }
      function w(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function x(e, t) {
        const r = m(),
          i = v();
        let s = [];
        if (!t && e instanceof b) return e;
        if (!e) return new b(s);
        if ("string" == typeof e) {
          const r = e.trim();
          if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
            let e = "div";
            0 === r.indexOf("<li") && (e = "ul"),
              0 === r.indexOf("<tr") && (e = "tbody"),
              (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (e = "tr"),
              0 === r.indexOf("<tbody") && (e = "table"),
              0 === r.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = r;
            for (let e = 0; e < t.childNodes.length; e += 1)
              s.push(t.childNodes[e]);
          } else
            s = (function (e, t) {
              if ("string" != typeof e) return [e];
              const r = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) r.push(i[e]);
              return r;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === r || e === i) s.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof b) return e;
          s = e;
        }
        return new b(
          (function (e) {
            const t = [];
            for (let r = 0; r < e.length; r += 1)
              -1 === t.indexOf(e[r]) && t.push(e[r]);
            return t;
          })(s)
        );
      }
      x.fn = b.prototype;
      const E = "resize scroll".split(" ");
      function S(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              E.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : x(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      S("click"),
        S("blur"),
        S("focus"),
        S("focusin"),
        S("focusout"),
        S("keyup"),
        S("keydown"),
        S("keypress"),
        S("submit"),
        S("change"),
        S("mousedown"),
        S("mousemove"),
        S("mouseup"),
        S("mouseenter"),
        S("mouseleave"),
        S("mouseout"),
        S("mouseover"),
        S("touchstart"),
        S("touchend"),
        S("touchmove"),
        S("resize"),
        S("scroll");
      const T = {
        addClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          return (
            w(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = y(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let r = 0; r < this.length; r += 1)
            if (2 === arguments.length) this[r].setAttribute(e, t);
            else
              for (const t in e)
                (this[r][t] = e[t]), this[r].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, r, i, s] = e;
          function n(e) {
            const t = e.target;
            if (!t) return;
            const s = e.target.dom7EventData || [];
            if ((s.indexOf(e) < 0 && s.unshift(e), x(t).is(r))) i.apply(t, s);
            else {
              const e = x(t).parents();
              for (let t = 0; t < e.length; t += 1)
                x(e[t]).is(r) && i.apply(e[t], s);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, s] = e), (r = void 0)),
            s || (s = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (r)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: n,
                  }),
                  t.addEventListener(e, n, s);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                  t.addEventListener(e, o, s);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, r, i, s] = e;
          "function" == typeof e[1] && (([t, i, s] = e), (r = void 0)),
            s || (s = !1);
          const n = t.split(" ");
          for (let e = 0; e < n.length; e += 1) {
            const t = n[e];
            for (let e = 0; e < this.length; e += 1) {
              const n = this[e];
              let o;
              if (
                (!r && n.dom7Listeners
                  ? (o = n.dom7Listeners[t])
                  : r && n.dom7LiveListeners && (o = n.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const r = o[e];
                  (i && r.listener === i) ||
                  (i &&
                    r.listener &&
                    r.listener.dom7proxy &&
                    r.listener.dom7proxy === i)
                    ? (n.removeEventListener(t, r.proxyListener, s),
                      o.splice(e, 1))
                    : i ||
                      (n.removeEventListener(t, r.proxyListener, s),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = m(),
            r = e[0].split(" "),
            i = e[1];
          for (let s = 0; s < r.length; s += 1) {
            const n = r[s];
            for (let r = 0; r < this.length; r += 1) {
              const s = this[r];
              if (t.CustomEvent) {
                const r = new t.CustomEvent(n, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (s.dom7EventData = e.filter((e, t) => t > 0)),
                  s.dispatchEvent(r),
                  (s.dom7EventData = []),
                  delete s.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function r(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", r));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = m();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = m(),
              t = v(),
              r = this[0],
              i = r.getBoundingClientRect(),
              s = t.body,
              n = r.clientTop || s.clientTop || 0,
              o = r.clientLeft || s.clientLeft || 0,
              a = r === e ? e.scrollY : r.scrollTop,
              l = r === e ? e.scrollX : r.scrollLeft;
            return { top: i.top + a - n, left: i.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const r = m();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, r) => {
                e.apply(t, [t, r]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = m(),
            r = v(),
            i = this[0];
          let s, n;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (s = x(e), n = 0; n < s.length; n += 1)
              if (s[n] === i) return !0;
            return !1;
          }
          if (e === r) return i === r;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof b) {
            for (s = e.nodeType ? [e] : e, n = 0; n < s.length; n += 1)
              if (s[n] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return x([]);
          if (e < 0) {
            const r = t + e;
            return x(r < 0 ? [] : [this[r]]);
          }
          return x([this[e]]);
        },
        append: function (...e) {
          let t;
          const r = v();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = r.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof b)
                for (let r = 0; r < t.length; r += 1) this[e].appendChild(t[r]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = v();
          let r, i;
          for (r = 0; r < this.length; r += 1)
            if ("string" == typeof e) {
              const s = t.createElement("div");
              for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
                this[r].insertBefore(s.childNodes[i], this[r].childNodes[0]);
            } else if (e instanceof b)
              for (i = 0; i < e.length; i += 1)
                this[r].insertBefore(e[i], this[r].childNodes[0]);
            else this[r].insertBefore(e, this[r].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                x(this[0].nextElementSibling).is(e)
                ? x([this[0].nextElementSibling])
                : x([])
              : this[0].nextElementSibling
              ? x([this[0].nextElementSibling])
              : x([])
            : x([]);
        },
        nextAll: function (e) {
          const t = [];
          let r = this[0];
          if (!r) return x([]);
          for (; r.nextElementSibling; ) {
            const i = r.nextElementSibling;
            e ? x(i).is(e) && t.push(i) : t.push(i), (r = i);
          }
          return x(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && x(t.previousElementSibling).is(e)
                ? x([t.previousElementSibling])
                : x([])
              : t.previousElementSibling
              ? x([t.previousElementSibling])
              : x([]);
          }
          return x([]);
        },
        prevAll: function (e) {
          const t = [];
          let r = this[0];
          if (!r) return x([]);
          for (; r.previousElementSibling; ) {
            const i = r.previousElementSibling;
            e ? x(i).is(e) && t.push(i) : t.push(i), (r = i);
          }
          return x(t);
        },
        parent: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1)
            null !== this[r].parentNode &&
              (e
                ? x(this[r].parentNode).is(e) && t.push(this[r].parentNode)
                : t.push(this[r].parentNode));
          return x(t);
        },
        parents: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1) {
            let i = this[r].parentNode;
            for (; i; )
              e ? x(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return x(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? x([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1) {
            const i = this[r].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return x(t);
        },
        children: function (e) {
          const t = [];
          for (let r = 0; r < this.length; r += 1) {
            const i = this[r].children;
            for (let r = 0; r < i.length; r += 1)
              (e && !x(i[r]).is(e)) || t.push(i[r]);
          }
          return x(t);
        },
        filter: function (e) {
          return x(w(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(T).forEach((e) => {
        Object.defineProperty(x.fn, e, { value: T[e], writable: !0 });
      });
      const C = x;
      function O(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function L() {
        return Date.now();
      }
      function A(e, t) {
        void 0 === t && (t = "x");
        const r = m();
        let i, s, n;
        const o = (function (e) {
          const t = m();
          let r;
          return (
            t.getComputedStyle && (r = t.getComputedStyle(e, null)),
            !r && e.currentStyle && (r = e.currentStyle),
            r || (r = e.style),
            r
          );
        })(e);
        return (
          r.WebKitCSSMatrix
            ? ((s = o.transform || o.webkitTransform),
              s.split(",").length > 6 &&
                (s = s
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (n = new r.WebKitCSSMatrix("none" === s ? "" : s)))
            : ((n =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = n.toString().split(","))),
          "x" === t &&
            (s = r.WebKitCSSMatrix
              ? n.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (s = r.WebKitCSSMatrix
              ? n.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          s || 0
        );
      }
      function k(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function M(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function _() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (null != i && !M(i)) {
            const r = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, s = r.length; t < s; t += 1) {
              const s = r[t],
                n = Object.getOwnPropertyDescriptor(i, s);
              void 0 !== n &&
                n.enumerable &&
                (k(e[s]) && k(i[s])
                  ? i[s].__swiper__
                    ? (e[s] = i[s])
                    : _(e[s], i[s])
                  : !k(e[s]) && k(i[s])
                  ? ((e[s] = {}),
                    i[s].__swiper__ ? (e[s] = i[s]) : _(e[s], i[s]))
                  : (e[s] = i[s]));
            }
          }
        }
        return e;
      }
      function P(e, t, r) {
        e.style.setProperty(t, r);
      }
      function $(e) {
        let { swiper: t, targetPosition: r, side: i } = e;
        const s = m(),
          n = -t.translate;
        let o,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          s.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > n ? "next" : "prev",
          d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          u = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = n + c * (r - n);
            if ((d(p, r) && (p = r), t.wrapperEl.scrollTo({ [i]: p }), d(p, r)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [i]: p });
                }),
                void s.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = s.requestAnimationFrame(u);
          };
        u();
      }
      let z, I, N;
      function j() {
        return (
          z ||
            (z = (function () {
              const e = m(),
                t = v();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const r = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, r);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          z
        );
      }
      function R(e) {
        return (
          void 0 === e && (e = {}),
          I ||
            (I = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const r = j(),
                i = m(),
                s = i.navigator.platform,
                n = t || i.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = i.screen.width,
                l = i.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
              let d = n.match(/(iPad).*OS\s([\d_]+)/);
              const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === s;
              let f = "MacIntel" === s;
              return (
                !d &&
                  f &&
                  r.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${l}`) >= 0 &&
                  ((d = n.match(/(Version)\/([\d.]+)/)),
                  d || (d = [0, 1, "13_0_0"]),
                  (f = !1)),
                c && !h && ((o.os = "android"), (o.android = !0)),
                (d || p || u) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          I
        );
      }
      function B() {
        return (
          N ||
            (N = (function () {
              const e = m();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          N
        );
      }
      const W = {
        on(e, t, r) {
          const i = this;
          if ("function" != typeof t) return i;
          const s = r ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][s](t);
            }),
            i
          );
        },
        once(e, t, r) {
          const i = this;
          if ("function" != typeof t) return i;
          function s() {
            i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
              n[o] = arguments[o];
            t.apply(i, n);
          }
          return (s.__emitterProxy = t), i.on(e, s, r);
        },
        onAny(e, t) {
          const r = this;
          if ("function" != typeof e) return r;
          const i = t ? "unshift" : "push";
          return (
            r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
        },
        off(e, t) {
          const r = this;
          return r.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (r.eventsListeners[e] = [])
                  : r.eventsListeners[e] &&
                    r.eventsListeners[e].forEach((i, s) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        r.eventsListeners[e].splice(s, 1);
                    });
              }),
              r)
            : r;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners) return e;
          let t, r, i;
          for (var s = arguments.length, n = new Array(s), o = 0; o < s; o++)
            n[o] = arguments[o];
          "string" == typeof n[0] || Array.isArray(n[0])
            ? ((t = n[0]), (r = n.slice(1, n.length)), (i = e))
            : ((t = n[0].events), (r = n[0].data), (i = n[0].context || e)),
            r.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...r]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, r);
                  });
            }),
            e
          );
        },
      };
      const D = {
        updateSize: function () {
          const e = this;
          let t, r;
          const i = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i[0].clientWidth),
            (r =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === r && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (r =
                r -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(r) && (r = 0),
              Object.assign(e, {
                width: t,
                height: r,
                size: e.isHorizontal() ? t : r,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function r(e, r) {
            return parseFloat(e.getPropertyValue(t(r)) || 0);
          }
          const i = e.params,
            { $wrapperEl: s, size: n, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = s.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let p = [];
          const h = [],
            f = [];
          let v = i.slidesOffsetBefore;
          "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
          let g = i.slidesOffsetAfter;
          "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
          const m = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = i.spaceBetween,
            w = -v,
            x = 0,
            E = 0;
          if (void 0 === n) return;
          "string" == typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * n),
            (e.virtualSize = -y),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            i.centeredSlides &&
              i.cssMode &&
              (P(e.wrapperEl, "--swiper-centered-offset-before", ""),
              P(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const S = i.grid && i.grid.rows > 1 && e.grid;
          let T;
          S && e.grid.initSlides(u);
          const C =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let s = 0; s < u; s += 1) {
            T = 0;
            const o = d.eq(s);
            if (
              (S && e.grid.updateSlide(s, o, u, t), "none" !== o.css("display"))
            ) {
              if ("auto" === i.slidesPerView) {
                C && (d[s].style[t("width")] = "");
                const n = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = r(n, "width"),
                    t = r(n, "padding-left"),
                    i = r(n, "padding-right"),
                    s = r(n, "margin-left"),
                    a = r(n, "margin-right"),
                    l = n.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + s + a;
                  else {
                    const { clientWidth: r, offsetWidth: n } = o[0];
                    T = e + t + i + s + a + (n - r);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  i.roundLengths && (T = Math.floor(T));
              } else
                (T = (n - (i.slidesPerView - 1) * y) / i.slidesPerView),
                  i.roundLengths && (T = Math.floor(T)),
                  d[s] && (d[s].style[t("width")] = `${T}px`);
              d[s] && (d[s].swiperSlideSize = T),
                f.push(T),
                i.centeredSlides
                  ? ((w = w + T / 2 + x / 2 + y),
                    0 === x && 0 !== s && (w = w - n / 2 - y),
                    0 === s && (w = w - n / 2 - y),
                    Math.abs(w) < 0.001 && (w = 0),
                    i.roundLengths && (w = Math.floor(w)),
                    E % i.slidesPerGroup == 0 && p.push(w),
                    h.push(w))
                  : (i.roundLengths && (w = Math.floor(w)),
                    (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(w),
                    h.push(w),
                    (w = w + T + y)),
                (e.virtualSize += T + y),
                (x = T),
                (E += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, n) + g),
            o &&
              a &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              s.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
            i.setWrapperSize &&
              s.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
            S && e.grid.updateWrapperSize(T, p, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let r = 0; r < p.length; r += 1) {
              let s = p[r];
              i.roundLengths && (s = Math.floor(s)),
                p[r] <= e.virtualSize - n && t.push(s);
            }
            (p = t),
              Math.floor(e.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - n);
          }
          if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
            const r = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
              [r]: `${y}px`,
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (e -= i.spaceBetween);
            const t = e - n;
            p = p.map((e) => (e < 0 ? -v : e > t ? t + g : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (e -= i.spaceBetween),
              e < n)
            ) {
              const t = (n - e) / 2;
              p.forEach((e, r) => {
                p[r] = e - t;
              }),
                h.forEach((e, r) => {
                  h[r] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: f,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            P(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              P(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + r));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            p.length !== m &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              r = e.$el.hasClass(t);
            u <= i.maxBackfaceHiddenSlides
              ? r || e.$el.addClass(t)
              : r && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            r = [],
            i = t.virtual && t.params.virtual.enabled;
          let s,
            n = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            i
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                r.push(e);
              });
            else
              for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                const e = t.activeIndex + s;
                if (e > t.slides.length && !i) break;
                r.push(o(e));
              }
          else r.push(o(t.activeIndex));
          for (s = 0; s < r.length; s += 1)
            if (void 0 !== r[s]) {
              const e = r[s].offsetHeight;
              n = e > n ? e : n;
            }
          (n || 0 === n) && t.$wrapperEl.css("height", `${n}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let r = 0; r < t.length; r += 1)
            t[r].swiperSlideOffset = e.isHorizontal()
              ? t[r].offsetLeft
              : t[r].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            r = t.params,
            { slides: i, rtlTranslate: s, snapGrid: n } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          s && (o = e),
            i.removeClass(r.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const a = i[e];
            let l = a.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (l -= i[0].swiperSlideOffset);
            const c =
                (o + (r.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + r.spaceBetween),
              d =
                (o - n[0] + (r.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + r.spaceBetween),
              u = -(o - l),
              p = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (u <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(r.slideVisibleClass)),
              (a.progress = s ? -c : c),
              (a.originalProgress = s ? -d : d);
          }
          t.visibleSlides = C(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * r) || 0;
          }
          const r = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: s, isBeginning: n, isEnd: o } = t;
          const a = n,
            l = o;
          0 === i
            ? ((s = 0), (n = !0), (o = !0))
            : ((s = (e - t.minTranslate()) / i), (n = s <= 0), (o = s >= 1)),
            Object.assign(t, { progress: s, isBeginning: n, isEnd: o }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !n) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", s);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: r,
              $wrapperEl: i,
              activeIndex: s,
              realIndex: n,
            } = e,
            o = e.virtual && r.virtual.enabled;
          let a;
          t.removeClass(
            `${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${r.slideClass}[data-swiper-slide-index="${s}"]`
                )
              : t.eq(s)),
            a.addClass(r.slideActiveClass),
            r.loop &&
              (a.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      `.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${n}"]`
                    )
                    .addClass(r.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${n}"]`
                    )
                    .addClass(r.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${r.slideClass}`)
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(r.slideNextClass));
          let c = a
            .prevAll(`.${r.slideClass}`)
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(r.slidePrevClass)),
            r.loop &&
              (l.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      `.${r.slideClass}:not(.${
                        r.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicateNextClass)
                : i
                    .children(
                      `.${r.slideClass}.${
                        r.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicateNextClass),
              c.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      `.${r.slideClass}:not(.${
                        r.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${r.slideClass}.${
                        r.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(r.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: s,
              params: n,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (d = e)
                  : r >= i[e] && r < i[e + 1] && (d = e + 1)
                : r >= i[e] && (d = e);
            n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (s.indexOf(r) >= 0) c = s.indexOf(r);
          else {
            const e = Math.min(n.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / n.slidesPerGroup);
          }
          if ((c >= s.length && (c = s.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            r = t.params,
            i = C(e).closest(`.${r.slideClass}`)[0];
          let s,
            n = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (n = !0), (s = e);
                break;
              }
          if (!i || !n)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  C(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = s),
            r.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const G = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: r,
            translate: i,
            $wrapperEl: s,
          } = this;
          if (t.virtualTranslate) return r ? -i : i;
          if (t.cssMode) return i;
          let n = A(s[0], e);
          return r && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          const r = this,
            {
              rtlTranslate: i,
              params: s,
              $wrapperEl: n,
              wrapperEl: o,
              progress: a,
            } = r;
          let l,
            c = 0,
            d = 0;
          r.isHorizontal() ? (c = i ? -e : e) : (d = e),
            s.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            s.cssMode
              ? (o[r.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  r.isHorizontal() ? -c : -d)
              : s.virtualTranslate ||
                n.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (r.previousTranslate = r.translate),
            (r.translate = r.isHorizontal() ? c : d);
          const u = r.maxTranslate() - r.minTranslate();
          (l = 0 === u ? 0 : (e - r.minTranslate()) / u),
            l !== a && r.updateProgress(e),
            r.emit("setTranslate", r.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, r, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0),
            void 0 === i && (i = !0);
          const n = this,
            { params: o, wrapperEl: a } = n;
          if (n.animating && o.preventInteractionOnTransition) return !1;
          const l = n.minTranslate(),
            c = n.maxTranslate();
          let d;
          if (
            ((d = i && e > l ? l : i && e < c ? c : e),
            n.updateProgress(d),
            o.cssMode)
          ) {
            const e = n.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!n.support.smoothScroll)
                return (
                  $({
                    swiper: n,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(d),
                r &&
                  (n.emit("beforeTransitionStart", t, s),
                  n.emit("transitionEnd")))
              : (n.setTransition(t),
                n.setTranslate(d),
                r &&
                  (n.emit("beforeTransitionStart", t, s),
                  n.emit("transitionStart")),
                n.animating ||
                  ((n.animating = !0),
                  n.onTranslateToWrapperTransitionEnd ||
                    (n.onTranslateToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          n.onTranslateToWrapperTransitionEnd
                        ),
                        n.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          n.onTranslateToWrapperTransitionEnd
                        ),
                        (n.onTranslateToWrapperTransitionEnd = null),
                        delete n.onTranslateToWrapperTransitionEnd,
                        r && n.emit("transitionEnd"));
                    }),
                  n.$wrapperEl[0].addEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    n.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function F(e) {
        let { swiper: t, runCallbacks: r, direction: i, step: s } = e;
        const { activeIndex: n, previousIndex: o } = t;
        let a = i;
        if (
          (a || (a = n > o ? "next" : n < o ? "prev" : "reset"),
          t.emit(`transition${s}`),
          r && n !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${s}`);
          t.emit(`slideChangeTransition${s}`),
            "next" === a
              ? t.emit(`slideNextTransition${s}`)
              : t.emit(`slidePrevTransition${s}`);
        }
      }
      const q = {
        slideTo: function (e, t, r, i, s) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const n = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: f,
          } = n;
          if (
            (n.animating && a.preventInteractionOnTransition) ||
            (!f && !i && !s)
          )
            return !1;
          const v = Math.min(n.params.slidesPerGroupSkip, o);
          let g = v + Math.floor((o - v) / n.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              r &&
              n.emit("beforeSlideChangeStart");
          const m = -l[g];
          if ((n.updateProgress(m), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * m),
                r = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= r && t < i - (i - r) / 2
                  ? (o = e)
                  : t >= r && t < i && (o = e + 1)
                : t >= r && (o = e);
            }
          if (n.initialized && o !== u) {
            if (!n.allowSlideNext && m < n.translate && m < n.minTranslate())
              return !1;
            if (
              !n.allowSlidePrev &&
              m > n.translate &&
              m > n.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            ((b = o > u ? "next" : o < u ? "prev" : "reset"),
            (p && -m === n.translate) || (!p && m === n.translate))
          )
            return (
              n.updateActiveIndex(o),
              a.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              "slide" !== a.effect && n.setTranslate(m),
              "reset" !== b && (n.transitionStart(r, b), n.transitionEnd(r, b)),
              !1
            );
          if (a.cssMode) {
            const e = n.isHorizontal(),
              r = p ? m : -m;
            if (0 === t) {
              const t = n.virtual && n.params.virtual.enabled;
              t &&
                ((n.wrapperEl.style.scrollSnapType = "none"),
                (n._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = r),
                t &&
                  requestAnimationFrame(() => {
                    (n.wrapperEl.style.scrollSnapType = ""),
                      (n._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!n.support.smoothScroll)
                return (
                  $({ swiper: n, targetPosition: r, side: e ? "left" : "top" }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: r, behavior: "smooth" });
            }
            return !0;
          }
          return (
            n.setTransition(t),
            n.setTranslate(m),
            n.updateActiveIndex(o),
            n.updateSlidesClasses(),
            n.emit("beforeTransitionStart", t, i),
            n.transitionStart(r, b),
            0 === t
              ? n.transitionEnd(r, b)
              : n.animating ||
                ((n.animating = !0),
                n.onSlideToWrapperTransitionEnd ||
                  (n.onSlideToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        n.onSlideToWrapperTransitionEnd
                      ),
                      n.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        n.onSlideToWrapperTransitionEnd
                      ),
                      (n.onSlideToWrapperTransitionEnd = null),
                      delete n.onSlideToWrapperTransitionEnd,
                      n.transitionEnd(r, b));
                  }),
                n.$wrapperEl[0].addEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                ),
                n.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  n.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, r, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === r && (r = !0);
          const s = this;
          let n = e;
          return s.params.loop && (n += s.loopedSlides), s.slideTo(n, t, r, i);
        },
        slideNext: function (e, t, r) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { animating: s, enabled: n, params: o } = i;
          if (!n) return i;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (s && o.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return o.rewind && i.isEnd
            ? i.slideTo(0, e, t, r)
            : i.slideTo(i.activeIndex + l, e, t, r);
        },
        slidePrev: function (e, t, r) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: s,
              animating: n,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = i;
          if (!c) return i;
          if (s.loop) {
            if (n && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? i.translate : -i.translate),
            p = o.map((e) => d(e));
          let h = o[p.indexOf(u) - 1];
          if (void 0 === h && s.cssMode) {
            let e;
            o.forEach((t, r) => {
              u >= t && (e = r);
            }),
              void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          if (
            (void 0 !== h &&
              ((f = a.indexOf(h)),
              f < 0 && (f = i.activeIndex - 1),
              "auto" === s.slidesPerView &&
                1 === s.slidesPerGroup &&
                s.slidesPerGroupAuto &&
                ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            s.rewind && i.isBeginning)
          ) {
            const s =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(s, e, t, r);
          }
          return i.slideTo(f, e, t, r);
        },
        slideReset: function (e, t, r) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, r)
          );
        },
        slideToClosest: function (e, t, r, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const s = this;
          let n = s.activeIndex;
          const o = Math.min(s.params.slidesPerGroupSkip, n),
            a = o + Math.floor((n - o) / s.params.slidesPerGroup),
            l = s.rtlTranslate ? s.translate : -s.translate;
          if (l >= s.snapGrid[a]) {
            const e = s.snapGrid[a];
            l - e > (s.snapGrid[a + 1] - e) * i &&
              (n += s.params.slidesPerGroup);
          } else {
            const e = s.snapGrid[a - 1];
            l - e <= (s.snapGrid[a] - e) * i && (n -= s.params.slidesPerGroup);
          }
          return (
            (n = Math.max(n, 0)),
            (n = Math.min(n, s.slidesGrid.length - 1)),
            s.slideTo(n, e, t, r)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: r } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let s,
            n = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (s = parseInt(
              C(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? n < e.loopedSlides - i / 2 ||
                  n > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (n = r
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    O(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n)
                : n > e.slides.length - i
                ? (e.loopFix(),
                  (n = r
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  O(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n);
          } else e.slideTo(n);
        },
      };
      const H = {
        loopCreate: function () {
          const e = this,
            t = v(),
            { params: r, $wrapperEl: i } = e,
            s = i.children().length > 0 ? C(i.children()[0].parentNode) : i;
          s.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();
          let n = s.children(`.${r.slideClass}`);
          if (r.loopFillGroupWithBlank) {
            const e = r.slidesPerGroup - (n.length % r.slidesPerGroup);
            if (e !== r.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = C(t.createElement("div")).addClass(
                  `${r.slideClass} ${r.slideBlankClass}`
                );
                s.append(e);
              }
              n = s.children(`.${r.slideClass}`);
            }
          }
          "auto" !== r.slidesPerView ||
            r.loopedSlides ||
            (r.loopedSlides = n.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(r.loopedSlides || r.slidesPerView, 10)
            )),
            (e.loopedSlides += r.loopAdditionalSlides),
            e.loopedSlides > n.length && (e.loopedSlides = n.length);
          const o = [],
            a = [];
          n.each((t, r) => {
            const i = C(t);
            r < e.loopedSlides && a.push(t),
              r < n.length && r >= n.length - e.loopedSlides && o.push(t),
              i.attr("data-swiper-slide-index", r);
          });
          for (let e = 0; e < a.length; e += 1)
            s.append(C(a[e].cloneNode(!0)).addClass(r.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            s.prepend(C(o[e].cloneNode(!0)).addClass(r.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: r,
            loopedSlides: i,
            allowSlidePrev: s,
            allowSlideNext: n,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < i) {
            (l = r.length - 3 * i + t), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= r.length - i) {
            (l = -r.length + t + i), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = s), (e.allowSlideNext = n), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: r } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function V(e) {
        const t = this,
          r = v(),
          i = m(),
          s = t.touchEventsData,
          { params: n, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && n.preventInteractionOnTransition) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = C(l.target);
        if ("wrapper" === n.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((s.isTouchEvent = "touchstart" === l.type),
          !s.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!s.isTouchEvent && "button" in l && l.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        !!n.noSwipingClass &&
          "" !== n.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = C(e.path[0]));
        const d = n.noSwipingSelector
            ? n.noSwipingSelector
            : `.${n.noSwipingClass}`,
          u = !(!l.target || !l.target.shadowRoot);
        if (
          n.noSwiping &&
          (u
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(r) {
                    return r && r !== v() && r !== m()
                      ? (r.assignedSlot && (r = r.assignedSlot),
                        r.closest(e) || t(r.getRootNode().host))
                      : null;
                  })(t)
                );
              })(d, l.target)
            : c.closest(d)[0])
        )
          return void (t.allowClick = !0);
        if (n.swipeHandler && !c.closest(n.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const p = o.currentX,
          h = o.currentY,
          f = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
          g = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (f && (p <= g || p >= i.innerWidth - g)) {
          if ("prevent" !== f) return;
          e.preventDefault();
        }
        if (
          (Object.assign(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = p),
          (o.startY = h),
          (s.touchStartTime = L()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          n.threshold > 0 && (s.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(s.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (s.isTouched = !1)),
            r.activeElement &&
              C(r.activeElement).is(s.focusableElements) &&
              r.activeElement !== c[0] &&
              r.activeElement.blur();
          const i = e && t.allowTouchMove && n.touchStartPreventDefault;
          (!n.touchStartForcePreventDefault && !i) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !n.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function X(e) {
        const t = v(),
          r = this,
          i = r.touchEventsData,
          { params: s, touches: n, rtlTranslate: o, enabled: a } = r;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            r.emit("touchMoveOpposite", l)
          );
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? c.pageX : l.pageX,
          u = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (n.startX = d), void (n.startY = u);
        if (!r.allowTouchMove)
          return (
            C(l.target).is(i.focusableElements) || (r.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(n, {
                startX: d,
                startY: u,
                currentX: d,
                currentY: u,
              }),
              (i.touchStartTime = L()))
            )
          );
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (r.isVertical()) {
            if (
              (u < n.startY && r.translate <= r.maxTranslate()) ||
              (u > n.startY && r.translate >= r.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (d < n.startX && r.translate <= r.maxTranslate()) ||
            (d > n.startX && r.translate >= r.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          C(l.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (r.allowClick = !1);
        if (
          (i.allowTouchCallbacks && r.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (n.currentX = d), (n.currentY = u);
        const p = n.currentX - n.startX,
          h = n.currentY - n.startY;
        if (
          r.params.threshold &&
          Math.sqrt(p ** 2 + h ** 2) < r.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (r.isHorizontal() && n.currentY === n.startY) ||
          (r.isVertical() && n.currentX === n.startX)
            ? (i.isScrolling = !1)
            : p * p + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
              (i.isScrolling = r.isHorizontal()
                ? e > s.touchAngle
                : 90 - e > s.touchAngle));
        }
        if (
          (i.isScrolling && r.emit("touchMoveOpposite", l),
          void 0 === i.startMoving &&
            ((n.currentX === n.startX && n.currentY === n.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (r.allowClick = !1),
          !s.cssMode && l.cancelable && l.preventDefault(),
          s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
          i.isMoved ||
            (s.loop && !s.cssMode && r.loopFix(),
            (i.startTranslate = r.getTranslate()),
            r.setTransition(0),
            r.animating &&
              r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !s.grabCursor ||
              (!0 !== r.allowSlideNext && !0 !== r.allowSlidePrev) ||
              r.setGrabCursor(!0),
            r.emit("sliderFirstMove", l)),
          r.emit("sliderMove", l),
          (i.isMoved = !0);
        let f = r.isHorizontal() ? p : h;
        (n.diff = f),
          (f *= s.touchRatio),
          o && (f = -f),
          (r.swipeDirection = f > 0 ? "prev" : "next"),
          (i.currentTranslate = f + i.startTranslate);
        let g = !0,
          m = s.resistanceRatio;
        if (
          (s.touchReleaseOnEdges && (m = 0),
          f > 0 && i.currentTranslate > r.minTranslate()
            ? ((g = !1),
              s.resistance &&
                (i.currentTranslate =
                  r.minTranslate() -
                  1 +
                  (-r.minTranslate() + i.startTranslate + f) ** m))
            : f < 0 &&
              i.currentTranslate < r.maxTranslate() &&
              ((g = !1),
              s.resistance &&
                (i.currentTranslate =
                  r.maxTranslate() +
                  1 -
                  (r.maxTranslate() - i.startTranslate - f) ** m)),
          g && (l.preventedByNestedSwiper = !0),
          !r.allowSlideNext &&
            "next" === r.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !r.allowSlidePrev &&
            "prev" === r.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          r.allowSlidePrev ||
            r.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          s.threshold > 0)
        ) {
          if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (n.startX = n.currentX),
              (n.startY = n.currentY),
              (i.currentTranslate = i.startTranslate),
              void (n.diff = r.isHorizontal()
                ? n.currentX - n.startX
                : n.currentY - n.startY)
            );
        }
        s.followFinger &&
          !s.cssMode &&
          (((s.freeMode && s.freeMode.enabled && r.freeMode) ||
            s.watchSlidesProgress) &&
            (r.updateActiveIndex(), r.updateSlidesClasses()),
          r.params.freeMode &&
            s.freeMode.enabled &&
            r.freeMode &&
            r.freeMode.onTouchMove(),
          r.updateProgress(i.currentTranslate),
          r.setTranslate(i.currentTranslate));
      }
      function Y(e) {
        const t = this,
          r = t.touchEventsData,
          {
            params: i,
            touches: s,
            rtlTranslate: n,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          r.allowTouchCallbacks && t.emit("touchEnd", l),
          (r.allowTouchCallbacks = !1),
          !r.isTouched)
        )
          return (
            r.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (r.isMoved = !1),
            void (r.startMoving = !1)
          );
        i.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = L(),
          d = c - r.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - r.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((r.lastClickTime = L()),
          O(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !r.isTouched ||
            !r.isMoved ||
            !t.swipeDirection ||
            0 === s.diff ||
            r.currentTranslate === r.startTranslate)
        )
          return (
            (r.isTouched = !1), (r.isMoved = !1), void (r.startMoving = !1)
          );
        let u;
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (u = i.followFinger
            ? n
              ? t.translate
              : -t.translate
            : -r.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let p = 0,
          h = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t]
            ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
            : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
        }
        const f = (u - o[p]) / h,
          v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (d > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (f >= i.longSwipesRatio ? t.slideTo(p + v) : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (f > 1 - i.longSwipesRatio ? t.slideTo(p + v) : t.slideTo(p));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + v)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(p + v),
              "prev" === t.swipeDirection && t.slideTo(p));
        }
      }
      function U() {
        const e = this,
          { params: t, el: r } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: s, snapGrid: n } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = i),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function K(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function J() {
        const e = this,
          { wrapperEl: t, rtlTranslate: r, enabled: i } = e;
        if (!i) return;
        let s;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        (s = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
          s !== e.progress && e.updateProgress(r ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let Z = !1;
      function Q() {}
      const ee = (e, t) => {
        const r = v(),
          {
            params: i,
            touchEvents: s,
            el: n,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!i.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== s.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          n[d](s.start, e.onTouchStart, t),
            n[d](
              s.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            n[d](s.end, e.onTouchEnd, t),
            s.cancel && n[d](s.cancel, e.onTouchEnd, t);
        } else
          n[d](s.start, e.onTouchStart, !1),
            r[d](s.move, e.onTouchMove, c),
            r[d](s.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          n[d]("click", e.onClick, !0),
          i.cssMode && o[d]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[u](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                U,
                !0
              )
            : e[u]("observerUpdate", U, !0);
      };
      const te = {
          attachEvents: function () {
            const e = this,
              t = v(),
              { params: r, support: i } = e;
            (e.onTouchStart = V.bind(e)),
              (e.onTouchMove = X.bind(e)),
              (e.onTouchEnd = Y.bind(e)),
              r.cssMode && (e.onScroll = J.bind(e)),
              (e.onClick = K.bind(e)),
              i.touch && !Z && (t.addEventListener("touchstart", Q), (Z = !0)),
              ee(e, "on");
          },
          detachEvents: function () {
            ee(this, "off");
          },
        },
        re = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const ie = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: r,
              loopedSlides: i = 0,
              params: s,
              $el: n,
            } = e,
            o = s.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = re(e, s),
            d = re(e, l),
            u = s.enabled;
          c && !d
            ? (n.removeClass(
                `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (n.addClass(`${s.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === s.grid.fill)) &&
                n.addClass(`${s.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const p = l.direction && l.direction !== s.direction,
            h = s.loop && (l.slidesPerView !== s.slidesPerView || p);
          p && r && e.changeDirection(), _(e.params, l);
          const f = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !f ? e.disable() : !u && f && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            h &&
              r &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, r) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !r)))
            return;
          let i = !1;
          const s = m(),
            n = "window" === t ? s.innerHeight : r.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: n, value: a } = o[e];
            "window" === t
              ? s.matchMedia(`(min-width: ${a}px)`).matches && (i = n)
              : a <= r.clientWidth && (i = n);
          }
          return i || "max";
        },
      };
      const se = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: r,
              rtl: i,
              $el: s,
              device: n,
              support: o,
            } = e,
            a = (function (e, t) {
              const r = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && r.push(t + i);
                      })
                    : "string" == typeof e && r.push(t + e);
                }),
                r
              );
            })(
              [
                "initialized",
                r.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && r.freeMode.enabled },
                { autoheight: r.autoHeight },
                { rtl: i },
                { grid: r.grid && r.grid.rows > 1 },
                {
                  "grid-column":
                    r.grid && r.grid.rows > 1 && "column" === r.grid.fill,
                },
                { android: n.android },
                { ios: n.ios },
                { "css-mode": r.cssMode },
                { centered: r.cssMode && r.centeredSlides },
              ],
              r.containerModifierClass
            );
          t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const ne = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function oe(e, t) {
        return function (r) {
          void 0 === r && (r = {});
          const i = Object.keys(r)[0],
            s = r[i];
          "object" == typeof s && null !== s
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in s
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  _(t, r))
                : _(t, r))
            : _(t, r);
        };
      }
      const ae = {
          eventsEmitter: W,
          update: D,
          translate: G,
          transition: {
            setTransition: function (e, t) {
              const r = this;
              r.params.cssMode || r.$wrapperEl.transition(e),
                r.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const r = this,
                { params: i } = r;
              i.cssMode ||
                (i.autoHeight && r.updateAutoHeight(),
                F({ swiper: r, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const r = this,
                { params: i } = r;
              (r.animating = !1),
                i.cssMode ||
                  (r.setTransition(0),
                  F({ swiper: r, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: q,
          loop: H,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const r =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (r.style.cursor = "move"),
                (r.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (r.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (r.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: te,
          breakpoints: ie,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: r } = e,
                { slidesOffsetBefore: i } = r;
              if (i) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > r;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: se,
          images: {
            loadImage: function (e, t, r, i, s, n) {
              const o = m();
              let a;
              function l() {
                n && n();
              }
              C(e).parent("picture")[0] || (e.complete && s)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  i && (a.sizes = i),
                  r && (a.srcset = r),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let r = 0; r < e.imagesToLoad.length; r += 1) {
                const i = e.imagesToLoad[r];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        le = {};
      class ce {
        constructor() {
          let e, t;
          for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
            i[s] = arguments[s];
          if (
            (1 === i.length &&
            i[0].constructor &&
            "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
              ? (t = i[0])
              : ([e, t] = i),
            t || (t = {}),
            (t = _({}, t)),
            e && !t.el && (t.el = e),
            t.el && C(t.el).length > 1)
          ) {
            const e = [];
            return (
              C(t.el).each((r) => {
                const i = _({}, t, { el: r });
                e.push(new ce(i));
              }),
              e
            );
          }
          const n = this;
          (n.__swiper__ = !0),
            (n.support = j()),
            (n.device = R({ userAgent: t.userAgent })),
            (n.browser = B()),
            (n.eventsListeners = {}),
            (n.eventsAnyListeners = []),
            (n.modules = [...n.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              n.modules.push(...t.modules);
          const o = {};
          n.modules.forEach((e) => {
            e({
              swiper: n,
              extendParams: oe(t, o),
              on: n.on.bind(n),
              once: n.once.bind(n),
              off: n.off.bind(n),
              emit: n.emit.bind(n),
            });
          });
          const a = _({}, ne, o);
          return (
            (n.params = _({}, a, le, t)),
            (n.originalParams = _({}, n.params)),
            (n.passedParams = _({}, t)),
            n.params &&
              n.params.on &&
              Object.keys(n.params.on).forEach((e) => {
                n.on(e, n.params.on[e]);
              }),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            (n.$ = C),
            Object.assign(n, {
              enabled: n.params.enabled,
              el: e,
              classNames: [],
              slides: C(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === n.params.direction,
              isVertical: () => "vertical" === n.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (n.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (n.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  n.support.touch || !n.params.simulateTouch
                    ? n.touchEventsTouch
                    : n.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: L(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.emit("_swiper"),
            n.params.init && n.init(),
            n
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = r.minTranslate(),
            s = (r.maxTranslate() - i) * e + i;
          r.translateTo(s, void 0 === t ? 0 : t),
            r.updateActiveIndex(),
            r.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((r) => {
            const i = e.getSlideClasses(r);
            t.push({ slideEl: r, classNames: i }), e.emit("_slideClass", r, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: i,
            slidesGrid: s,
            slidesSizesGrid: n,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (r.centeredSlides) {
            let e,
              t = i[a].swiperSlideSize;
            for (let r = a + 1; r < i.length; r += 1)
              i[r] &&
                !e &&
                ((t += i[r].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let r = a - 1; r >= 0; r -= 1)
              i[r] &&
                !e &&
                ((t += i[r].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1) {
              (t ? s[e] + n[e] - s[a] < o : s[e] - s[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              s[a] - s[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: r } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let s;
          r.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((s =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                s || i()),
            r.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            i = r.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (r.$el
                .removeClass(`${r.params.containerModifierClass}${i}`)
                .addClass(`${r.params.containerModifierClass}${e}`),
              r.emitContainerClasses(),
              (r.params.direction = e),
              r.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              r.emit("changeDirection"),
              t && r.update()),
            r
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const r = C(e || t.params.el);
          if (!(e = r[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let s = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = C(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => r.children(e)), t;
            }
            return r.children(i());
          })();
          if (0 === s.length && t.params.createElements) {
            const e = v().createElement("div");
            (s = C(e)),
              (e.className = t.params.wrapperClass),
              r.append(e),
              r.children(`.${t.params.slideClass}`).each((e) => {
                s.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: r,
              el: e,
              $wrapperEl: s,
              wrapperEl: s[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
              wrongRTL: "-webkit-box" === s.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            { params: i, $el: s, $wrapperEl: n, slides: o } = r;
          return (
            void 0 === r.params ||
              r.destroyed ||
              (r.emit("beforeDestroy"),
              (r.initialized = !1),
              r.detachEvents(),
              i.loop && r.loopDestroy(),
              t &&
                (r.removeClasses(),
                s.removeAttr("style"),
                n.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              r.emit("destroy"),
              Object.keys(r.eventsListeners).forEach((e) => {
                r.off(e);
              }),
              !1 !== e &&
                ((r.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(r)),
              (r.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          _(le, e);
        }
        static get extendedDefaults() {
          return le;
        }
        static get defaults() {
          return ne;
        }
        static installModule(e) {
          ce.prototype.__modules__ || (ce.prototype.__modules__ = []);
          const t = ce.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => ce.installModule(e)), ce)
            : (ce.installModule(e), ce);
        }
      }
      Object.keys(ae).forEach((e) => {
        Object.keys(ae[e]).forEach((t) => {
          ce.prototype[t] = ae[e][t];
        });
      }),
        ce.use([
          function (e) {
            let { swiper: t, on: r, emit: i } = e;
            const s = m();
            let n = null;
            const o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              a = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            r("init", () => {
              t.params.resizeObserver && void 0 !== s.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((n = new ResizeObserver((e) => {
                    const { width: r, height: i } = t;
                    let s = r,
                      n = i;
                    e.forEach((e) => {
                      let { contentBoxSize: r, contentRect: i, target: o } = e;
                      (o && o !== t.el) ||
                        ((s = i ? i.width : (r[0] || r).inlineSize),
                        (n = i ? i.height : (r[0] || r).blockSize));
                    }),
                      (s === r && n === i) || o();
                  })),
                  n.observe(t.el))
                : (s.addEventListener("resize", o),
                  s.addEventListener("orientationchange", a));
            }),
              r("destroy", () => {
                n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                  s.removeEventListener("resize", o),
                  s.removeEventListener("orientationchange", a);
              });
          },
          function (e) {
            let { swiper: t, extendParams: r, on: i, emit: s } = e;
            const n = [],
              o = m(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const r = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void s("observerUpdate", e[0]);
                    const t = function () {
                      s("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                r.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  n.push(r);
              };
            r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      const de = ce;
      function ue(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function pe(e) {
        let { swiper: t, extendParams: r, on: i, emit: s } = e;
        const n = "swiper-pagination";
        let o;
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, r) {
          const { bulletActiveClass: i } = t.params.pagination;
          e[r]().addClass(`${i}-${r}`)[r]().addClass(`${i}-${r}-${r}`);
        }
        function d() {
          const e = t.rtl,
            r = t.params.pagination;
          if (l()) return;
          const i =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            n = t.pagination.$el;
          let d;
          const u = t.params.loop
            ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((d = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                d > i - 1 - 2 * t.loopedSlides && (d -= i - 2 * t.loopedSlides),
                d > u - 1 && (d -= u),
                d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
              : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === r.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const i = t.pagination.bullets;
            let s, l, u;
            if (
              (r.dynamicBullets &&
                ((o = i
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                n.css(
                  t.isHorizontal() ? "width" : "height",
                  o * (r.dynamicMainBullets + 4) + "px"
                ),
                r.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((a += d - (t.previousIndex - t.loopedSlides || 0)),
                  a > r.dynamicMainBullets - 1
                    ? (a = r.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (s = Math.max(d - a, 0)),
                (l = s + (Math.min(i.length, r.dynamicMainBullets) - 1)),
                (u = (l + s) / 2)),
              i.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${r.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              n.length > 1)
            )
              i.each((e) => {
                const t = C(e),
                  i = t.index();
                i === d && t.addClass(r.bulletActiveClass),
                  r.dynamicBullets &&
                    (i >= s &&
                      i <= l &&
                      t.addClass(`${r.bulletActiveClass}-main`),
                    i === s && c(t, "prev"),
                    i === l && c(t, "next"));
              });
            else {
              const e = i.eq(d),
                n = e.index();
              if ((e.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                const e = i.eq(s),
                  o = i.eq(l);
                for (let e = s; e <= l; e += 1)
                  i.eq(e).addClass(`${r.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (n >= i.length) {
                    for (let e = r.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        `${r.bulletActiveClass}-main`
                      );
                    i.eq(i.length - r.dynamicMainBullets - 1).addClass(
                      `${r.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(o, "next");
                else c(e, "prev"), c(o, "next");
              }
            }
            if (r.dynamicBullets) {
              const s = Math.min(i.length, r.dynamicMainBullets + 4),
                n = (o * s - o) / 2 - u * o,
                a = e ? "right" : "left";
              i.css(t.isHorizontal() ? a : "top", `${n}px`);
            }
          }
          if (
            ("fraction" === r.type &&
              (n.find(ue(r.currentClass)).text(r.formatFractionCurrent(d + 1)),
              n.find(ue(r.totalClass)).text(r.formatFractionTotal(u))),
            "progressbar" === r.type)
          ) {
            let e;
            e = r.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (d + 1) / u;
            let s = 1,
              o = 1;
            "horizontal" === e ? (s = i) : (o = i),
              n
                .find(ue(r.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`)
                .transition(t.params.speed);
          }
          "custom" === r.type && r.renderCustom
            ? (n.html(r.renderCustom(t, d + 1, u)), s("paginationRender", n[0]))
            : s("paginationUpdate", n[0]),
            t.params.watchOverflow &&
              t.enabled &&
              n[t.isLocked ? "addClass" : "removeClass"](r.lockClass);
        }
        function u() {
          const e = t.params.pagination;
          if (l()) return;
          const r =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            i = t.pagination.$el;
          let n = "";
          if ("bullets" === e.type) {
            let s = t.params.loop
              ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              s > r &&
              (s = r);
            for (let r = 0; r < s; r += 1)
              e.renderBullet
                ? (n += e.renderBullet.call(t, r, e.bulletClass))
                : (n += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            i.html(n), (t.pagination.bullets = i.find(ue(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((n = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            i.html(n)),
            "progressbar" === e.type &&
              ((n = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              i.html(n)),
            "custom" !== e.type && s("paginationRender", t.pagination.$el[0]);
        }
        function p() {
          t.params.pagination = (function (e, t, r, i) {
            const s = v();
            return (
              e.params.createElements &&
                Object.keys(i).forEach((n) => {
                  if (!r[n] && !0 === r.auto) {
                    let o = e.$el.children(`.${i[n]}`)[0];
                    o ||
                      ((o = s.createElement("div")),
                      (o.className = i[n]),
                      e.$el.append(o)),
                      (r[n] = o),
                      (t[n] = o);
                  }
                }),
              r
            );
          })(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination",
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let r = C(e.el);
          0 !== r.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              r.length > 1 &&
              ((r = t.$el.find(e.el)),
              r.length > 1 &&
                (r = r.filter((e) => C(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && r.addClass(e.clickableClass),
            r.addClass(e.modifierClass + e.type),
            r.addClass(e.modifierClass + t.params.direction),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (r.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (a = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              r.addClass(e.progressbarOppositeClass),
            e.clickable &&
              r.on("click", ue(e.bulletClass), function (e) {
                e.preventDefault();
                let r = C(this).index() * t.params.slidesPerGroup;
                t.params.loop && (r += t.loopedSlides), t.slideTo(r);
              }),
            Object.assign(t.pagination, { $el: r, el: r[0] }),
            t.enabled || r.addClass(e.lockClass));
        }
        function h() {
          const e = t.params.pagination;
          if (l()) return;
          const r = t.pagination.$el;
          r.removeClass(e.hiddenClass),
            r.removeClass(e.modifierClass + e.type),
            r.removeClass(e.modifierClass + t.params.direction),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && r.off("click", ue(e.bulletClass));
        }
        i("init", () => {
          p(), u(), d();
        }),
          i("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && d();
          }),
          i("snapIndexChange", () => {
            t.params.loop || d();
          }),
          i("slidesLengthChange", () => {
            t.params.loop && (u(), d());
          }),
          i("snapGridLengthChange", () => {
            t.params.loop || (u(), d());
          }),
          i("destroy", () => {
            h();
          }),
          i("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          i("lock unlock", () => {
            d();
          }),
          i("click", (e, r) => {
            const i = r.target,
              { $el: n } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              n.length > 0 &&
              !C(i).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                  (t.navigation.prevEl && i === t.navigation.prevEl))
              )
                return;
              const e = n.hasClass(t.params.pagination.hiddenClass);
              s(!0 === e ? "paginationShow" : "paginationHide"),
                n.toggleClass(t.params.pagination.hiddenClass);
            }
          }),
          Object.assign(t.pagination, {
            render: u,
            update: d,
            init: p,
            destroy: h,
          });
      }
      function he() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        he(),
          document.querySelector(".reviews__slider") &&
            new de(".reviews__slider", {
              modules: [pe],
              effect: "fade",
              autoplay: { delay: 5e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 100,
              autoHeight: !0,
              speed: 1e3,
              touchRatio: 1,
              simulateTouch: !1,
              pagination: { el: ".reviews__pagination", clickable: !0 },
            });
      });
      r(9399), r(3542);
      var fe,
        ve = r(1807),
        ge = r.n(ve),
        me =
          (r(8165),
          r(7543),
          r(7692),
          r(2352),
          r(4249),
          r(3344),
          r(7323),
          r(4079),
          r(3096)),
        be = r.n(me),
        ye = r(1296),
        we = r.n(ye),
        xe = r(773),
        Ee = r.n(xe),
        Se = [],
        Te = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(fe || (fe = {}));
      var Ce,
        Oe = function (e) {
          return Object.freeze(e);
        },
        Le = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), Oe(this);
        },
        Ae = (function () {
          function e(e, t, r, i) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = r),
              (this.height = i),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              Oe(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        ke = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        Me = function (e) {
          if (ke(e)) {
            var t = e.getBBox(),
              r = t.width,
              i = t.height;
            return !r && !i;
          }
          var s = e,
            n = s.offsetWidth,
            o = s.offsetHeight;
          return !(n || o || e.getClientRects().length);
        },
        _e = function (e) {
          var t, r;
          if (e instanceof Element) return !0;
          var i =
            null ===
              (r =
                null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
            void 0 === r
              ? void 0
              : r.defaultView;
          return !!(i && e instanceof i.Element);
        },
        Pe = "undefined" != typeof window ? window : {},
        $e = new WeakMap(),
        ze = /auto|scroll/,
        Ie = /^tb|vertical/,
        Ne = /msie|trident/i.test(Pe.navigator && Pe.navigator.userAgent),
        je = function (e) {
          return parseFloat(e || "0");
        },
        Re = function (e, t, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            new Le((r ? t : e) || 0, (r ? e : t) || 0)
          );
        },
        Be = Oe({
          devicePixelContentBoxSize: Re(),
          borderBoxSize: Re(),
          contentBoxSize: Re(),
          contentRect: new Ae(0, 0, 0, 0),
        }),
        We = function (e, t) {
          if ((void 0 === t && (t = !1), $e.has(e) && !t)) return $e.get(e);
          if (Me(e)) return $e.set(e, Be), Be;
          var r = getComputedStyle(e),
            i = ke(e) && e.ownerSVGElement && e.getBBox(),
            s = !Ne && "border-box" === r.boxSizing,
            n = Ie.test(r.writingMode || ""),
            o = !i && ze.test(r.overflowY || ""),
            a = !i && ze.test(r.overflowX || ""),
            l = i ? 0 : je(r.paddingTop),
            c = i ? 0 : je(r.paddingRight),
            d = i ? 0 : je(r.paddingBottom),
            u = i ? 0 : je(r.paddingLeft),
            p = i ? 0 : je(r.borderTopWidth),
            h = i ? 0 : je(r.borderRightWidth),
            f = i ? 0 : je(r.borderBottomWidth),
            v = u + c,
            g = l + d,
            m = (i ? 0 : je(r.borderLeftWidth)) + h,
            b = p + f,
            y = a ? e.offsetHeight - b - e.clientHeight : 0,
            w = o ? e.offsetWidth - m - e.clientWidth : 0,
            x = s ? v + m : 0,
            E = s ? g + b : 0,
            S = i ? i.width : je(r.width) - x - w,
            T = i ? i.height : je(r.height) - E - y,
            C = S + v + w + m,
            O = T + g + y + b,
            L = Oe({
              devicePixelContentBoxSize: Re(
                Math.round(S * devicePixelRatio),
                Math.round(T * devicePixelRatio),
                n
              ),
              borderBoxSize: Re(C, O, n),
              contentBoxSize: Re(S, T, n),
              contentRect: new Ae(u, l, S, T),
            });
          return $e.set(e, L), L;
        },
        De = function (e, t, r) {
          var i = We(e, r),
            s = i.borderBoxSize,
            n = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
          switch (t) {
            case fe.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case fe.BORDER_BOX:
              return s;
            default:
              return n;
          }
        },
        Ge = function (e) {
          var t = We(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = Oe([t.borderBoxSize])),
            (this.contentBoxSize = Oe([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = Oe([
              t.devicePixelContentBoxSize,
            ]));
        },
        Fe = function (e) {
          if (Me(e)) return 1 / 0;
          for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
          return t;
        },
        qe = function () {
          var e = 1 / 0,
            t = [];
          Se.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
              var i = [];
              r.activeTargets.forEach(function (t) {
                var r = new Ge(t.target),
                  s = Fe(t.target);
                i.push(r),
                  (t.lastReportedSize = De(t.target, t.observedBox)),
                  s < e && (e = s);
              }),
                t.push(function () {
                  r.callback.call(r.observer, i, r.observer);
                }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }
          });
          for (var r = 0, i = t; r < i.length; r++) {
            (0, i[r])();
          }
          return e;
        },
        He = function (e) {
          Se.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (r) {
                r.isActive() &&
                  (Fe(r.target) > e
                    ? t.activeTargets.push(r)
                    : t.skippedTargets.push(r));
              });
          });
        },
        Ve = function () {
          var e = 0;
          for (
            He(e);
            Se.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (e = qe()), He(e);
          return (
            Se.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              (function () {
                var e;
                "function" == typeof ErrorEvent
                  ? (e = new ErrorEvent("error", { message: Te }))
                  : ((e = document.createEvent("Event")).initEvent(
                      "error",
                      !1,
                      !1
                    ),
                    (e.message = Te)),
                  window.dispatchEvent(e);
              })(),
            e > 0
          );
        },
        Xe = [],
        Ye = function (e) {
          if (!Ce) {
            var t = 0,
              r = document.createTextNode("");
            new MutationObserver(function () {
              return Xe.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(r, { characterData: !0 }),
              (Ce = function () {
                r.textContent = "" + (t ? t-- : t++);
              });
          }
          Xe.push(e), Ce();
        },
        Ue = 0,
        Ke = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        Je = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        Ze = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        Qe = !1,
        et = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !Qe)) {
                Qe = !0;
                var r,
                  i = Ze(e);
                (r = function () {
                  var r = !1;
                  try {
                    r = Ve();
                  } finally {
                    if (((Qe = !1), (e = i - Ze()), !Ue)) return;
                    r ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  Ye(function () {
                    requestAnimationFrame(r);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, Ke);
                };
              document.body ? t() : Pe.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                Je.forEach(function (t) {
                  return Pe.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                Je.forEach(function (t) {
                  return Pe.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        tt = function (e) {
          !Ue && e > 0 && et.start(), !(Ue += e) && et.stop();
        },
        rt = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || fe.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = De(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                ke(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        it = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        st = new WeakMap(),
        nt = function (e, t) {
          for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
          return -1;
        },
        ot = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var r = new it(e, t);
              st.set(e, r);
            }),
            (e.observe = function (e, t, r) {
              var i = st.get(e),
                s = 0 === i.observationTargets.length;
              nt(i.observationTargets, t) < 0 &&
                (s && Se.push(i),
                i.observationTargets.push(new rt(t, r && r.box)),
                tt(1),
                et.schedule());
            }),
            (e.unobserve = function (e, t) {
              var r = st.get(e),
                i = nt(r.observationTargets, t),
                s = 1 === r.observationTargets.length;
              i >= 0 &&
                (s && Se.splice(Se.indexOf(r), 1),
                r.observationTargets.splice(i, 1),
                tt(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                r = st.get(e);
              r.observationTargets.slice().forEach(function (r) {
                return t.unobserve(e, r.target);
              }),
                r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
          );
        })(),
        at = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            ot.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!_e(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              ot.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!_e(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              ot.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              ot.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        lt =
          (r(7985),
          r(6618),
          r(9989),
          r(8307),
          r(4390),
          function (e) {
            return Array.prototype.reduce.call(
              e,
              function (e, t) {
                var r = t.name.match(/data-simplebar-(.+)/);
                if (r) {
                  var i = r[1].replace(/\W+(.)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                  switch (t.value) {
                    case "true":
                      e[i] = !0;
                      break;
                    case "false":
                      e[i] = !1;
                      break;
                    case void 0:
                      e[i] = !0;
                      break;
                    default:
                      e[i] = t.value;
                  }
                }
                return e;
              },
              {}
            );
          });
      function ct(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function dt(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      var ut = null,
        pt = null;
      function ht(e) {
        if (null === ut) {
          var t = dt(e);
          if (void 0 === t) return (ut = 0);
          var r = t.body,
            i = t.createElement("div");
          i.classList.add("simplebar-hide-scrollbar"), r.appendChild(i);
          var s = i.getBoundingClientRect().right;
          r.removeChild(i), (ut = s);
        }
        return ut;
      }
      ge() &&
        window.addEventListener("resize", function () {
          pt !== window.devicePixelRatio &&
            ((pt = window.devicePixelRatio), (ut = null));
        });
      var ft = (function () {
        function e(t, r) {
          var i = this;
          (this.onScroll = function () {
            var e = ct(i.el);
            i.scrollXTicking ||
              (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
              i.scrollYTicking ||
                (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0));
          }),
            (this.scrollX = function () {
              i.axis.x.isOverflowing &&
                (i.showScrollbar("x"), i.positionScrollbar("x")),
                (i.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              i.axis.y.isOverflowing &&
                (i.showScrollbar("y"), i.positionScrollbar("y")),
                (i.scrollYTicking = !1);
            }),
            (this.onMouseEnter = function () {
              i.showScrollbar("x"), i.showScrollbar("y");
            }),
            (this.onMouseMove = function (e) {
              (i.mouseX = e.clientX),
                (i.mouseY = e.clientY),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseMoveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              i.onMouseMove.cancel(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseLeaveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseLeaveForAxis("y"),
                (i.mouseX = -1),
                (i.mouseY = -1);
            }),
            (this.onWindowResize = function () {
              (i.scrollbarWidth = i.getScrollbarWidth()),
                i.hideNativeScrollbar();
            }),
            (this.hideScrollbars = function () {
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                i.isWithinBounds(i.axis.y.track.rect) ||
                  (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.y.isVisible = !1)),
                i.isWithinBounds(i.axis.x.track.rect) ||
                  (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.x.isVisible = !1));
            }),
            (this.onPointerEvent = function (e) {
              var t, r;
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  (t = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  (r = i.isWithinBounds(i.axis.y.track.rect)),
                (t || r) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousedown" === e.type &&
                    (t &&
                      ((i.axis.x.scrollbar.rect =
                        i.axis.x.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.x.scrollbar.rect)
                        ? i.onDragStart(e, "x")
                        : i.onTrackClick(e, "x")),
                    r &&
                      ((i.axis.y.scrollbar.rect =
                        i.axis.y.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.y.scrollbar.rect)
                        ? i.onDragStart(e, "y")
                        : i.onTrackClick(e, "y"))));
            }),
            (this.drag = function (t) {
              var r = i.axis[i.draggedAxis].track,
                s = r.rect[i.axis[i.draggedAxis].sizeAttr],
                n = i.axis[i.draggedAxis].scrollbar,
                o = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
                a = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var l =
                ((("y" === i.draggedAxis ? t.pageY : t.pageX) -
                  r.rect[i.axis[i.draggedAxis].offsetAttr] -
                  i.axis[i.draggedAxis].dragOffset) /
                  (s - n.size)) *
                (o - a);
              "x" === i.draggedAxis &&
                ((l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                    ? l - (s + n.size)
                    : l),
                (l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollingInverted
                    ? -l
                    : l)),
                (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] =
                  l);
            }),
            (this.onEndDrag = function (e) {
              var t = dt(i.el),
                r = ct(i.el);
              e.preventDefault(),
                e.stopPropagation(),
                i.el.classList.remove(i.classNames.dragging),
                t.removeEventListener("mousemove", i.drag, !0),
                t.removeEventListener("mouseup", i.onEndDrag, !0),
                (i.removePreventClickId = r.setTimeout(function () {
                  t.removeEventListener("click", i.preventClick, !0),
                    t.removeEventListener("dblclick", i.preventClick, !0),
                    (i.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.minScrollbarWidth = 20),
            (this.options = Object.assign({}, e.defaultOptions, {}, r)),
            (this.classNames = Object.assign(
              {},
              e.defaultOptions.classNames,
              {},
              this.options.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
            }),
            (this.removePreventClickId = null),
            e.instances.has(this.el) ||
              ((this.recalculate = be()(this.recalculate.bind(this), 64)),
              (this.onMouseMove = be()(this.onMouseMove.bind(this), 64)),
              (this.hideScrollbars = we()(
                this.hideScrollbars.bind(this),
                this.options.timeout
              )),
              (this.onWindowResize = we()(this.onWindowResize.bind(this), 64, {
                leading: !0,
              })),
              (e.getRtlHelpers = Ee()(e.getRtlHelpers)),
              this.init());
        }
        (e.getRtlHelpers = function () {
          var t = document.createElement("div");
          t.innerHTML =
            '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var r = t.firstElementChild;
          document.body.appendChild(r);
          var i = r.firstElementChild;
          r.scrollLeft = 0;
          var s = e.getOffset(r),
            n = e.getOffset(i);
          r.scrollLeft = 999;
          var o = e.getOffset(i);
          return {
            isRtlScrollingInverted: s.left !== n.left && n.left - o.left != 0,
            isRtlScrollbarInverted: s.left !== n.left,
          };
        }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              r = dt(e),
              i = ct(e);
            return {
              top: t.top + (i.pageYOffset || r.documentElement.scrollTop),
              left: t.left + (i.pageXOffset || r.documentElement.scrollLeft),
            };
          });
        var t = e.prototype;
        return (
          (t.init = function () {
            e.instances.set(this.el, this),
              ge() &&
                (this.initDOM(),
                this.setAccessibilityAttributes(),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
          }),
          (t.initDOM = function () {
            var e = this;
            if (
              Array.prototype.filter.call(this.el.children, function (t) {
                return t.classList.contains(e.classNames.wrapper);
              }).length
            )
              (this.wrapperEl = this.el.querySelector(
                "." + this.classNames.wrapper
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector("." + this.classNames.contentWrapper)),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector("." + this.classNames.contentEl)),
                (this.offsetEl = this.el.querySelector(
                  "." + this.classNames.offset
                )),
                (this.maskEl = this.el.querySelector(
                  "." + this.classNames.mask
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  "." + this.classNames.placeholder
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverWrapperEl
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverEl
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.horizontal
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.vertical
                ));
            else {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  this.wrapperEl.classList.add(this.classNames.wrapper),
                  this.contentWrapperEl.classList.add(
                    this.classNames.contentWrapper
                  ),
                  this.offsetEl.classList.add(this.classNames.offset),
                  this.maskEl.classList.add(this.classNames.mask),
                  this.contentEl.classList.add(this.classNames.contentEl),
                  this.placeholderEl.classList.add(this.classNames.placeholder),
                  this.heightAutoObserverWrapperEl.classList.add(
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  this.heightAutoObserverEl.classList.add(
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var t = document.createElement("div"),
                r = document.createElement("div");
              t.classList.add(this.classNames.track),
                r.classList.add(this.classNames.scrollbar),
                t.appendChild(r),
                (this.axis.x.track.el = t.cloneNode(!0)),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                (this.axis.y.track.el = t.cloneNode(!0)),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
              (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                "." + this.classNames.scrollbar
              )),
              this.options.autoHide ||
                (this.axis.x.scrollbar.el.classList.add(
                  this.classNames.visible
                ),
                this.axis.y.scrollbar.el.classList.add(
                  this.classNames.visible
                )),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.setAccessibilityAttributes = function () {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
              this.contentWrapperEl.setAttribute("role", "region"),
              this.contentWrapperEl.setAttribute("aria-label", e);
          }),
          (t.initListeners = function () {
            var e = this,
              t = ct(this.el);
            this.options.autoHide &&
              this.el.addEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl.addEventListener("scroll", this.onScroll),
              t.addEventListener("resize", this.onWindowResize);
            var r = !1,
              i = t.ResizeObserver || at;
            (this.resizeObserver = new i(function () {
              r && e.recalculate();
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                r = !0;
              }),
              (this.mutationObserver = new t.MutationObserver(
                this.recalculate
              )),
              this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
          }),
          (t.recalculate = function () {
            var e = ct(this.el);
            (this.elStyles = e.getComputedStyle(this.el)),
              (this.isRtl = "rtl" === this.elStyles.direction);
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
              r = this.heightAutoObserverEl.offsetWidth <= 1,
              i = this.contentEl.offsetWidth,
              s = this.contentWrapperEl.offsetWidth,
              n = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding =
              this.elStyles.paddingTop +
              " " +
              this.elStyles.paddingRight +
              " " +
              this.elStyles.paddingBottom +
              " " +
              this.elStyles.paddingLeft),
              (this.wrapperEl.style.margin =
                "-" +
                this.elStyles.paddingTop +
                " -" +
                this.elStyles.paddingRight +
                " -" +
                this.elStyles.paddingBottom +
                " -" +
                this.elStyles.paddingLeft);
            var a = this.contentEl.scrollHeight,
              l = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
              (this.placeholderEl.style.width = r ? i + "px" : "auto"),
              (this.placeholderEl.style.height = a + "px");
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = l > i),
              (this.axis.y.isOverflowing = a > c),
              (this.axis.x.isOverflowing =
                "hidden" !== n && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing =
                "hidden" !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible =
                "x" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              (this.axis.y.forceVisible =
                "y" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing =
              this.axis.x.isOverflowing && l > s - u),
              (this.axis.y.isOverflowing =
                this.axis.y.isOverflowing && a > c - d),
              (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
              (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
              (this.axis.x.scrollbar.el.style.width =
                this.axis.x.scrollbar.size + "px"),
              (this.axis.y.scrollbar.el.style.height =
                this.axis.y.scrollbar.size + "px"),
              this.positionScrollbar("x"),
              this.positionScrollbar("y"),
              this.toggleTrackVisibility("x"),
              this.toggleTrackVisibility("y");
          }),
          (t.getScrollbarSize = function (e) {
            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
              return 0;
            var t,
              r = this.contentEl[this.axis[e].scrollSizeAttr],
              i = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
              s = i / r;
            return (
              (t = Math.max(~~(s * i), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (t = Math.min(t, this.options.scrollbarMaxSize)),
              t
            );
          }),
          (t.positionScrollbar = function (t) {
            if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
              var r = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                s = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                n = this.axis[t].scrollbar,
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  (o =
                    "x" === t &&
                    this.isRtl &&
                    e.getRtlHelpers().isRtlScrollingInverted
                      ? -o
                      : o) /
                  (r - s),
                l = ~~((i - n.size) * a);
              (l =
                "x" === t &&
                this.isRtl &&
                e.getRtlHelpers().isRtlScrollbarInverted
                  ? l + (i - n.size)
                  : l),
                (n.el.style.transform =
                  "x" === t
                    ? "translate3d(" + l + "px, 0, 0)"
                    : "translate3d(0, " + l + "px, 0)");
            }
          }),
          (t.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              r = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = "visible"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "scroll"))
              : ((t.style.visibility = "hidden"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "hidden")),
              this.axis[e].isOverflowing
                ? (r.style.display = "block")
                : (r.style.display = "none");
          }),
          (t.hideNativeScrollbar = function () {
            (this.offsetEl.style[this.isRtl ? "left" : "right"] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-" + this.scrollbarWidth + "px"
                  : 0);
          }),
          (t.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y"),
              (this.axis[e].track.rect =
                this.axis[e].track.el.getBoundingClientRect()),
              (this.axis[e].scrollbar.rect =
                this.axis[e].scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(this.axis[e].scrollbar.rect)
                ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
                : this.axis[e].scrollbar.el.classList.remove(
                    this.classNames.hover
                  ),
              this.isWithinBounds(this.axis[e].track.rect)
                ? (this.showScrollbar(e),
                  this.axis[e].track.el.classList.add(this.classNames.hover))
                : this.axis[e].track.el.classList.remove(this.classNames.hover);
          }),
          (t.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].track.el.classList.remove(this.classNames.hover),
              this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (t.showScrollbar = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible ||
              (t.classList.add(this.classNames.visible),
              (this.axis[e].isVisible = !0)),
              this.options.autoHide && this.hideScrollbars();
          }),
          (t.onDragStart = function (e, t) {
            void 0 === t && (t = "y");
            var r = dt(this.el),
              i = ct(this.el),
              s = this.axis[t].scrollbar,
              n = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset = n - s.rect[this.axis[t].offsetAttr]),
              (this.draggedAxis = t),
              this.el.classList.add(this.classNames.dragging),
              r.addEventListener("mousemove", this.drag, !0),
              r.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (r.addEventListener("click", this.preventClick, !0),
                  r.addEventListener("dblclick", this.preventClick, !0))
                : (i.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (t.onTrackClick = function (e, t) {
            var r = this;
            if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
              var i = ct(this.el);
              this.axis[t].scrollbar.rect =
                this.axis[t].scrollbar.el.getBoundingClientRect();
              var s = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                n = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  ("y" === t ? this.mouseY - s : this.mouseX - s) < 0 ? -1 : 1,
                l = -1 === a ? o - n : o + n;
              !(function e() {
                var s, n;
                -1 === a
                  ? o > l &&
                    ((o -= r.options.clickOnTrackSpeed),
                    r.contentWrapperEl.scrollTo(
                      (((s = {})[r.axis[t].offsetAttr] = o), s)
                    ),
                    i.requestAnimationFrame(e))
                  : o < l &&
                    ((o += r.options.clickOnTrackSpeed),
                    r.contentWrapperEl.scrollTo(
                      (((n = {})[r.axis[t].offsetAttr] = o), n)
                    ),
                    i.requestAnimationFrame(e));
              })();
            }
          }),
          (t.getContentElement = function () {
            return this.contentEl;
          }),
          (t.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (t.getScrollbarWidth = function () {
            try {
              return "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : ht(this.el);
            } catch (e) {
              return ht(this.el);
            }
          }),
          (t.removeListeners = function () {
            var e = this,
              t = ct(this.el);
            this.options.autoHide &&
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              t.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.recalculate.cancel(),
              this.onMouseMove.cancel(),
              this.hideScrollbars.cancel(),
              this.onWindowResize.cancel();
          }),
          (t.unMount = function () {
            this.removeListeners(), e.instances.delete(this.el);
          }),
          (t.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (t.findChild = function (e, t) {
            var r =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return r.call(e, t);
            })[0];
          }),
          e
        );
      })();
      (ft.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
        (ft.instances = new WeakMap()),
        (ft.initDOMLoadedElements = function () {
          document.removeEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements
          ),
            window.removeEventListener("load", this.initDOMLoadedElements),
            Array.prototype.forEach.call(
              document.querySelectorAll("[data-simplebar]"),
              function (e) {
                "init" === e.getAttribute("data-simplebar") ||
                  ft.instances.has(e) ||
                  new ft(e, lt(e.attributes));
              }
            );
        }),
        (ft.removeObserver = function () {
          this.globalObserver.disconnect();
        }),
        (ft.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            "undefined" != typeof MutationObserver &&
              ((this.globalObserver = new MutationObserver(ft.handleMutations)),
              this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0,
              })),
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener(
                  "DOMContentLoaded",
                  this.initDOMLoadedElements
                ),
                window.addEventListener("load", this.initDOMLoadedElements));
        }),
        (ft.handleMutations = function (e) {
          e.forEach(function (e) {
            Array.prototype.forEach.call(e.addedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute("data-simplebar")
                  ? !ft.instances.has(e) &&
                    document.documentElement.contains(e) &&
                    new ft(e, lt(e.attributes))
                  : Array.prototype.forEach.call(
                      e.querySelectorAll("[data-simplebar]"),
                      function (e) {
                        "init" !== e.getAttribute("data-simplebar") &&
                          !ft.instances.has(e) &&
                          document.documentElement.contains(e) &&
                          new ft(e, lt(e.attributes));
                      }
                    ));
            }),
              Array.prototype.forEach.call(e.removedNodes, function (e) {
                1 === e.nodeType &&
                  ("init" === e.getAttribute("data-simplebar")
                    ? ft.instances.has(e) &&
                      !document.documentElement.contains(e) &&
                      ft.instances.get(e).unMount()
                    : Array.prototype.forEach.call(
                        e.querySelectorAll('[data-simplebar="init"]'),
                        function (e) {
                          ft.instances.has(e) &&
                            !document.documentElement.contains(e) &&
                            ft.instances.get(e).unMount();
                        }
                      ));
              });
          });
        }),
        (ft.getOptions = lt),
        ge() && ft.initHtmlApi();
      class vt {
        constructor(e) {
          (this.config = Object.assign({ logging: !0 }, e)),
            this.observer,
            !document.documentElement.classList.contains("watcher") &&
              this.scrollWatcherRun();
        }
        scrollWatcherUpdate() {
          this.scrollWatcherRun();
        }
        scrollWatcherRun() {
          document.documentElement.classList.add("watcher"),
            this.scrollWatcherConstructor(
              document.querySelectorAll("[data-watch]")
            );
        }
        scrollWatcherConstructor(e) {
          if (e.length) {
            this.scrollWatcherLogging(
              `??????????????????, ?????????? ???? ?????????????????? (${e.length})...`
            ),
              l(
                Array.from(e).map(function (e) {
                  return `${
                    e.dataset.watchRoot ? e.dataset.watchRoot : null
                  }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
                })
              ).forEach((t) => {
                let r = t.split("|"),
                  i = { root: r[0], margin: r[1], threshold: r[2] },
                  s = Array.from(e).filter(function (e) {
                    let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                      r = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                      s = e.dataset.watchThreshold
                        ? e.dataset.watchThreshold
                        : 0;
                    if (
                      String(t) === i.root &&
                      String(r) === i.margin &&
                      String(s) === i.threshold
                    )
                      return e;
                  }),
                  n = this.getScrollWatcherConfig(i);
                this.scrollWatcherInit(s, n);
              });
          } else
            this.scrollWatcherLogging(
              "????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz"
            );
        }
        getScrollWatcherConfig(e) {
          let t = {};
          if (
            (document.querySelector(e.root)
              ? (t.root = document.querySelector(e.root))
              : "null" !== e.root &&
                this.scrollWatcherLogging(
                  `??????... ?????????????????????????? ?????????????? ${e.root} ?????? ???? ????????????????`
                ),
            (t.rootMargin = e.margin),
            !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
          ) {
            if ("prx" === e.threshold) {
              e.threshold = [];
              for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
            } else e.threshold = e.threshold.split(",");
            return (t.threshold = e.threshold), t;
          }
          this.scrollWatcherLogging(
            "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
          );
        }
        scrollWatcherCreate(e) {
          this.observer = new IntersectionObserver((e, t) => {
            e.forEach((e) => {
              this.scrollWatcherCallback(e, t);
            });
          }, e);
        }
        scrollWatcherInit(e, t) {
          this.scrollWatcherCreate(t),
            e.forEach((e) => this.observer.observe(e));
        }
        scrollWatcherIntersecting(e, t) {
          e.isIntersecting
            ? (!t.classList.contains("_watcher-view") &&
                t.classList.add("_watcher-view"),
              this.scrollWatcherLogging(
                `?? ???????? ${t.classList}, ?????????????? ?????????? _watcher-view`
              ))
            : (t.classList.contains("_watcher-view") &&
                t.classList.remove("_watcher-view"),
              this.scrollWatcherLogging(
                `?? ???? ???????? ${t.classList}, ?????????? ?????????? _watcher-view`
              ));
        }
        scrollWatcherOff(e, t) {
          t.unobserve(e),
            this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${e.classList}`);
        }
        scrollWatcherLogging(e) {
          this.config.logging && a(`[??????????????????????]: ${e}`);
        }
        scrollWatcherCallback(e, t) {
          const r = e.target;
          this.scrollWatcherIntersecting(e, r),
            r.hasAttribute("data-watch-once") &&
              e.isIntersecting &&
              this.scrollWatcherOff(r, t),
            document.dispatchEvent(
              new CustomEvent("watcherCallback", { detail: { entry: e } })
            );
        }
      }
      let gt = !1;
      setTimeout(() => {
        if (gt) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0),
        document.addEventListener("DOMContentLoaded", () => {
          const e = document.querySelector(".fullscrean"),
            t = document.querySelector(".header"),
            r = document.querySelector(".why-choose-us");
          window.addEventListener("scroll", () => {
            window.scrollY >= e.offsetHeight
              ? (t.classList.add("_fixed"),
                (r.style.marginTop = `${t.offsetHeight}px`))
              : (t.classList.remove("_fixed"), (r.style.marginTop = "0px"));
          });
        }),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        t.any() && document.documentElement.classList.add("touch"),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              i &&
                (s(), document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        (function () {
          if (
            document.querySelectorAll("[data-fullscreen]").length &&
            t.any()
          ) {
            function e() {
              let e = 0.01 * window.innerHeight;
              document.documentElement.style.setProperty("--vh", `${e}px`);
            }
            window.addEventListener("resize", e), e();
          }
        })(),
        new e({}),
        (function () {
          const e = document.querySelectorAll(
            "input[placeholder],textarea[placeholder]"
          );
          e.length &&
            e.forEach((e) => {
              e.dataset.placeholder = e.placeholder;
            }),
            document.body.addEventListener("focusin", function (e) {
              const t = e.target;
              ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
                (t.dataset.placeholder && (t.placeholder = ""),
                t.classList.add("_form-focus"),
                t.parentElement.classList.add("_form-focus"),
                u.removeError(t));
            }),
            document.body.addEventListener("focusout", function (e) {
              const t = e.target;
              ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
                (t.dataset.placeholder &&
                  (t.placeholder = t.dataset.placeholder),
                t.classList.remove("_form-focus"),
                t.parentElement.classList.remove("_form-focus"),
                t.hasAttribute("data-validate") && u.validateInput(t));
            });
        })(),
        (function (e) {
          const t = document.forms;
          if (t.length)
            for (const e of t)
              e.addEventListener("submit", function (e) {
                r(e.target, e);
              }),
                e.addEventListener("reset", function (e) {
                  const t = e.target;
                  u.formClean(t);
                });
          async function r(t, r) {
            if (0 === (e ? u.getErrors(t) : 0)) {
              if (t.hasAttribute("data-ajax")) {
                r.preventDefault();
                const e = t.getAttribute("action")
                    ? t.getAttribute("action").trim()
                    : "#",
                  s = t.getAttribute("method")
                    ? t.getAttribute("method").trim()
                    : "GET",
                  n = new FormData(t);
                t.classList.add("_sending");
                const o = await fetch(e, { method: s, body: n });
                if (o.ok) {
                  await o.json();
                  t.classList.remove("_sending"), i(t);
                } else alert("????????????"), t.classList.remove("_sending");
              } else t.hasAttribute("data-dev") && (r.preventDefault(), i(t));
            } else {
              r.preventDefault();
              const e = t.querySelector("._form-error");
              e && t.hasAttribute("data-goto-error") && c(e, !0, 1e3);
            }
          }
          function i(e) {
            document.dispatchEvent(
              new CustomEvent("formSent", { detail: { form: e } })
            ),
              u.formClean(e),
              a(`[??????????]: ${"?????????? ????????????????????!"}`);
          }
        })(!0),
        new vt({}),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const r = t.closest("[data-goto]"),
                  i = r.dataset.goto ? r.dataset.goto : "",
                  s = !!r.hasAttribute("data-goto-header"),
                  n = r.dataset.gotoSpeed ? r.dataset.gotoSpeed : "800";
                c(i, s, n), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                r = t.target;
              if ("navigator" === r.dataset.watch) {
                const e = r.id,
                  i =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? i && i.classList.add("_navigator-active")
                  : i && i.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })(),
        (function () {
          gt = !0;
          const e = document.querySelector("header.header"),
            t = e.hasAttribute("data-scroll-show"),
            r = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
            i = e.dataset.scroll ? e.dataset.scroll : 1;
          let s,
            n = 0;
          document.addEventListener("windowScroll", function (o) {
            const a = window.scrollY;
            clearTimeout(s),
              a >= i
                ? (!e.classList.contains("_header-scroll") &&
                    e.classList.add("_header-scroll"),
                  t &&
                    (a > n
                      ? e.classList.contains("_header-show") &&
                        e.classList.remove("_header-show")
                      : !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show"),
                    (s = setTimeout(() => {
                      !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show");
                    }, r))))
                : (e.classList.contains("_header-scroll") &&
                    e.classList.remove("_header-scroll"),
                  t &&
                    e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")),
              (n = a <= 0 ? 0 : a);
          });
        })();
    })();
})();
