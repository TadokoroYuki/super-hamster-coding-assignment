(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    3403: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(8342);
        },
      ]);
    },
    8342: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => l });
      var n = r(5105);
      r(8101);
      var o = r(4351),
        a = r.n(o);
      let i = (e) => {
        let {
            label: t,
            variant: r = "black",
            onClick: o,
            disabled: i = !1,
            loading: c = !1,
            type: l = "button",
            href: s,
            target: u,
            iconLeft: b,
            iconRight: f,
          } = e,
          p = "\n    "
            .concat(a().button, " \n    ")
            .concat(a()[r], " \n    ")
            .concat(i ? a().disabled : "", " \n    ")
            .concat(c ? a().loading : "", "\n  ");
        return s
          ? (0, n.jsxs)("a", {
              href: s,
              target: u,
              className: p,
              "aria-disabled": i,
              children: [
                b &&
                  (0, n.jsx)("span", { className: a().iconLeft, children: b }),
                (0, n.jsx)("span", { children: t }),
                f &&
                  (0, n.jsx)("span", { className: a().iconRight, children: f }),
              ],
            })
          : (0, n.jsx)("button", {
              type: l,
              onClick: o,
              disabled: i || c,
              className: p,
              children: c
                ? (0, n.jsx)("span", { className: a().spinner })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      b &&
                        (0, n.jsx)("span", {
                          className: a().iconLeft,
                          children: b,
                        }),
                      (0, n.jsx)("span", { children: t }),
                      f &&
                        (0, n.jsx)("span", {
                          className: a().iconRight,
                          children: f,
                        }),
                    ],
                  }),
            });
      };
      var c = r(112);
      function l() {
        return (0, n.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2em",
          },
          children: [
            (0, n.jsx)("h1", { children: "Button Component Demo" }),
            (0, n.jsx)(i, {
              label: "編集",
              variant: "black",
              iconLeft: (0, n.jsx)(c.SG1, {}),
            }),
            (0, n.jsx)(i, {
              label: "編集",
              variant: "border",
              iconLeft: (0, n.jsx)(c.SG1, {}),
            }),
            (0, n.jsx)(i, {
              label: "編集",
              variant: "white",
              iconLeft: (0, n.jsx)(c.SG1, {}),
            }),
          ],
        });
      }
    },
    4351: (e) => {
      e.exports = {
        button: "button_button__XtUFt",
        black: "button_black__DPjHT",
        border: "button_border__nxg15",
        white: "button_white__KWbw5",
        loading: "button_loading__y4jZb",
      };
    },
    3181: (e, t, r) => {
      "use strict";
      r.d(t, { k5: () => u });
      var n = r(8101),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = n.createContext && n.createContext(o),
        i = ["attr", "size", "title"];
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                var n, o;
                (n = t),
                  (o = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function u(e) {
        return (t) =>
          n.createElement(
            b,
            c({ attr: s({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, s({ key: r }, t.attr), e(t.child)),
                )
              );
            })(e.child),
          );
      }
      function b(e) {
        var t = (t) => {
          var r,
            { attr: o, size: a, title: l } = e,
            u = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]);
              }
              return o;
            })(e, i),
            b = a || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              c(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                u,
                {
                  className: r,
                  style: s(s({ color: e.color || t.color }, t.style), e.style),
                  height: b,
                  width: b,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              l && n.createElement("title", null, l),
              e.children,
            )
          );
        };
        return void 0 !== a
          ? n.createElement(a.Consumer, null, (e) => t(e))
          : t(o);
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [979, 636, 593, 792], () => t(3403)), (_N_E = e.O());
  },
]);
