import {
  __commonJS,
  __spreadProps,
  __spreadValues
} from "./chunk-OXCW2X5T.js";

// node_modules/highcharts/highcharts.js
var require_highcharts = __commonJS({
  "node_modules/highcharts/highcharts.js"(exports, module) {
    !function(t, e) {
      "object" == typeof module && module.exports ? (e.default = e, module.exports = t.document ? e(t) : e) : "function" == typeof define && define.amd ? define("highcharts/highcharts", function() {
        return e(t);
      }) : (t.Highcharts && t.Highcharts.error(16, true), t.Highcharts = e(t));
    }("undefined" != typeof window ? window : exports, function(t) {
      "use strict";
      var e = {};
      function i(e2, i2, s, o) {
        e2.hasOwnProperty(i2) || (e2[i2] = o.apply(null, s), "function" == typeof CustomEvent && t.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: i2, module: e2[i2] } })));
      }
      return i(e, "Core/Globals.js", [], function() {
        var e2, i2;
        return (i2 = e2 || (e2 = {})).SVG_NS = "http://www.w3.org/2000/svg", i2.product = "Highcharts", i2.version = "11.2.0", i2.win = void 0 !== t ? t : {}, i2.doc = i2.win.document, i2.svg = i2.doc && i2.doc.createElementNS && !!i2.doc.createElementNS(i2.SVG_NS, "svg").createSVGRect, i2.userAgent = i2.win.navigator && i2.win.navigator.userAgent || "", i2.isChrome = -1 !== i2.userAgent.indexOf("Chrome"), i2.isFirefox = -1 !== i2.userAgent.indexOf("Firefox"), i2.isMS = /(edge|msie|trident)/i.test(i2.userAgent) && !i2.win.opera, i2.isSafari = !i2.isChrome && -1 !== i2.userAgent.indexOf("Safari"), i2.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(i2.userAgent), i2.isWebKit = -1 !== i2.userAgent.indexOf("AppleWebKit"), i2.deg2rad = 2 * Math.PI / 360, i2.hasBidiBug = i2.isFirefox && 4 > parseInt(i2.userAgent.split("Firefox/")[1], 10), i2.hasTouch = !!i2.win.TouchEvent, i2.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], i2.noop = function() {
        }, i2.supportsPassiveEvents = function() {
          let t2 = false;
          if (!i2.isMS) {
            let e3 = Object.defineProperty({}, "passive", { get: function() {
              t2 = true;
            } });
            i2.win.addEventListener && i2.win.removeEventListener && (i2.win.addEventListener("testPassive", i2.noop, e3), i2.win.removeEventListener("testPassive", i2.noop, e3));
          }
          return t2;
        }(), i2.charts = [], i2.dateFormats = {}, i2.seriesTypes = {}, i2.symbolSizes = {}, i2.chartCount = 0, e2;
      }), i(e, "Core/Utilities.js", [e["Core/Globals.js"]], function(t2) {
        let e2;
        let { charts: i2, doc: s, win: o } = t2;
        function r(e3, i3, s2, n2) {
          let a2 = i3 ? "Highcharts error" : "Highcharts warning";
          32 === e3 && (e3 = `${a2}: Deprecated member`);
          let h2 = p(e3), l2 = h2 ? `${a2} #${e3}: www.highcharts.com/errors/${e3}/` : e3.toString();
          if (void 0 !== n2) {
            let t3 = "";
            h2 && (l2 += "?"), S(n2, function(e4, i4) {
              t3 += `
 - ${i4}: ${e4}`, h2 && (l2 += encodeURI(i4) + "=" + encodeURI(e4));
            }), l2 += t3;
          }
          C(t2, "displayError", { chart: s2, code: e3, message: l2, params: n2 }, function() {
            if (i3)
              throw Error(l2);
            o.console && -1 === r.messages.indexOf(l2) && console.warn(l2);
          }), r.messages.push(l2);
        }
        function n(t3, e3) {
          return parseInt(t3, e3 || 10);
        }
        function a(t3) {
          return "string" == typeof t3;
        }
        function h(t3) {
          let e3 = Object.prototype.toString.call(t3);
          return "[object Array]" === e3 || "[object Array Iterator]" === e3;
        }
        function l(t3, e3) {
          return !!t3 && "object" == typeof t3 && (!e3 || !h(t3));
        }
        function d(t3) {
          return l(t3) && "number" == typeof t3.nodeType;
        }
        function c(t3) {
          let e3 = t3 && t3.constructor;
          return !!(l(t3, true) && !d(t3) && e3 && e3.name && "Object" !== e3.name);
        }
        function p(t3) {
          return "number" == typeof t3 && !isNaN(t3) && t3 < 1 / 0 && t3 > -1 / 0;
        }
        function u(t3) {
          return null != t3;
        }
        function g(t3, e3, i3) {
          let s2;
          let o2 = a(e3) && !u(i3), r2 = (e4, i4) => {
            u(e4) ? t3.setAttribute(i4, e4) : o2 ? (s2 = t3.getAttribute(i4)) || "class" !== i4 || (s2 = t3.getAttribute(i4 + "Name")) : t3.removeAttribute(i4);
          };
          return a(e3) ? r2(i3, e3) : S(e3, r2), s2;
        }
        function f(t3) {
          return h(t3) ? t3 : [t3];
        }
        function m(t3, e3) {
          let i3;
          for (i3 in t3 || (t3 = {}), e3)
            t3[i3] = e3[i3];
          return t3;
        }
        function x() {
          let t3 = arguments, e3 = t3.length;
          for (let i3 = 0; i3 < e3; i3++) {
            let e4 = t3[i3];
            if (null != e4)
              return e4;
          }
        }
        function y(e3, i3) {
          t2.isMS && !t2.svg && i3 && u(i3.opacity) && (i3.filter = `alpha(opacity=${100 * i3.opacity})`), m(e3.style, i3);
        }
        function b(t3) {
          return Math.pow(10, Math.floor(Math.log(t3) / Math.LN10));
        }
        function v(t3, e3) {
          return t3 > 1e14 ? t3 : parseFloat(t3.toPrecision(e3 || 14));
        }
        (r || (r = {})).messages = [], Math.easeInOutSine = function(t3) {
          return -0.5 * (Math.cos(Math.PI * t3) - 1);
        };
        let k = Array.prototype.find ? function(t3, e3) {
          return t3.find(e3);
        } : function(t3, e3) {
          let i3;
          let s2 = t3.length;
          for (i3 = 0; i3 < s2; i3++)
            if (e3(t3[i3], i3))
              return t3[i3];
        };
        function S(t3, e3, i3) {
          for (let s2 in t3)
            Object.hasOwnProperty.call(t3, s2) && e3.call(i3 || t3[s2], t3[s2], s2, t3);
        }
        function M(t3, e3, i3) {
          function s2(e4, i4) {
            let s3 = t3.removeEventListener;
            s3 && s3.call(t3, e4, i4, false);
          }
          function o2(i4) {
            let o3, r3;
            t3.nodeName && (e3 ? (o3 = {})[e3] = true : o3 = i4, S(o3, function(t4, e4) {
              if (i4[e4])
                for (r3 = i4[e4].length; r3--; )
                  s2(e4, i4[e4][r3].fn);
            }));
          }
          let r2 = "function" == typeof t3 && t3.prototype || t3;
          if (Object.hasOwnProperty.call(r2, "hcEvents")) {
            let t4 = r2.hcEvents;
            if (e3) {
              let r3 = t4[e3] || [];
              i3 ? (t4[e3] = r3.filter(function(t5) {
                return i3 !== t5.fn;
              }), s2(e3, i3)) : (o2(t4), t4[e3] = []);
            } else
              o2(t4), delete r2.hcEvents;
          }
        }
        function C(e3, i3, o2, r2) {
          let n2;
          if (o2 = o2 || {}, s.createEvent && (e3.dispatchEvent || e3.fireEvent && e3 !== t2))
            (n2 = s.createEvent("Events")).initEvent(i3, true, true), o2 = m(n2, o2), e3.dispatchEvent ? e3.dispatchEvent(o2) : e3.fireEvent(i3, o2);
          else if (e3.hcEvents) {
            o2.target || m(o2, { preventDefault: function() {
              o2.defaultPrevented = true;
            }, target: e3, type: i3 });
            let t3 = [], s2 = e3, r3 = false;
            for (; s2.hcEvents; )
              Object.hasOwnProperty.call(s2, "hcEvents") && s2.hcEvents[i3] && (t3.length && (r3 = true), t3.unshift.apply(t3, s2.hcEvents[i3])), s2 = Object.getPrototypeOf(s2);
            r3 && t3.sort((t4, e4) => t4.order - e4.order), t3.forEach((t4) => {
              false === t4.fn.call(e3, o2) && o2.preventDefault();
            });
          }
          r2 && !o2.defaultPrevented && r2.call(e3, o2);
        }
        S({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(e3, i3) {
          t2[i3] = function(t3) {
            return r(32, false, void 0, { [`Highcharts.${i3}`]: `use Array.${e3}` }), Array.prototype[e3].apply(t3, [].slice.call(arguments, 1));
          };
        });
        let w = function() {
          let t3 = Math.random().toString(36).substring(2, 9) + "-", i3 = 0;
          return function() {
            return "highcharts-" + (e2 ? "" : t3) + i3++;
          };
        }();
        o.jQuery && (o.jQuery.fn.highcharts = function() {
          let e3 = [].slice.call(arguments);
          if (this[0])
            return e3[0] ? (new t2[a(e3[0]) ? e3.shift() : "Chart"](this[0], e3[0], e3[1]), this) : i2[g(this[0], "data-highcharts-chart")];
        });
        let T = { addEvent: function(e3, i3, s2, o2 = {}) {
          let r2 = "function" == typeof e3 && e3.prototype || e3;
          Object.hasOwnProperty.call(r2, "hcEvents") || (r2.hcEvents = {});
          let n2 = r2.hcEvents;
          t2.Point && e3 instanceof t2.Point && e3.series && e3.series.chart && (e3.series.chart.runTrackerClick = true);
          let a2 = e3.addEventListener;
          a2 && a2.call(e3, i3, s2, !!t2.supportsPassiveEvents && { passive: void 0 === o2.passive ? -1 !== i3.indexOf("touch") : o2.passive, capture: false }), n2[i3] || (n2[i3] = []);
          let h2 = { fn: s2, order: "number" == typeof o2.order ? o2.order : 1 / 0 };
          return n2[i3].push(h2), n2[i3].sort((t3, e4) => t3.order - e4.order), function() {
            M(e3, i3, s2);
          };
        }, arrayMax: function(t3) {
          let e3 = t3.length, i3 = t3[0];
          for (; e3--; )
            t3[e3] > i3 && (i3 = t3[e3]);
          return i3;
        }, arrayMin: function(t3) {
          let e3 = t3.length, i3 = t3[0];
          for (; e3--; )
            t3[e3] < i3 && (i3 = t3[e3]);
          return i3;
        }, attr: g, clamp: function(t3, e3, i3) {
          return t3 > e3 ? t3 < i3 ? t3 : i3 : e3;
        }, clearTimeout: function(t3) {
          u(t3) && clearTimeout(t3);
        }, correctFloat: v, createElement: function(t3, e3, i3, o2, r2) {
          let n2 = s.createElement(t3);
          return e3 && m(n2, e3), r2 && y(n2, { padding: "0", border: "none", margin: "0" }), i3 && y(n2, i3), o2 && o2.appendChild(n2), n2;
        }, css: y, defined: u, destroyObjectProperties: function(t3, e3) {
          S(t3, function(i3, s2) {
            i3 && i3 !== e3 && i3.destroy && i3.destroy(), delete t3[s2];
          });
        }, diffObjects: function(t3, e3, i3, s2) {
          let o2 = {};
          return function t4(e4, o3, r2, n2) {
            let a2 = i3 ? o3 : e4;
            S(e4, function(i4, d2) {
              if (!n2 && s2 && s2.indexOf(d2) > -1 && o3[d2]) {
                i4 = f(i4), r2[d2] = [];
                for (let e5 = 0; e5 < Math.max(i4.length, o3[d2].length); e5++)
                  o3[d2][e5] && (void 0 === i4[e5] ? r2[d2][e5] = o3[d2][e5] : (r2[d2][e5] = {}, t4(i4[e5], o3[d2][e5], r2[d2][e5], n2 + 1)));
              } else
                l(i4, true) && !i4.nodeType ? (r2[d2] = h(i4) ? [] : {}, t4(i4, o3[d2] || {}, r2[d2], n2 + 1), 0 !== Object.keys(r2[d2]).length || "colorAxis" === d2 && 0 === n2 || delete r2[d2]) : (e4[d2] !== o3[d2] || d2 in e4 && !(d2 in o3)) && (r2[d2] = a2[d2]);
            });
          }(t3, e3, o2, 0), o2;
        }, discardElement: function(t3) {
          t3 && t3.parentElement && t3.parentElement.removeChild(t3);
        }, erase: function(t3, e3) {
          let i3 = t3.length;
          for (; i3--; )
            if (t3[i3] === e3) {
              t3.splice(i3, 1);
              break;
            }
        }, error: r, extend: m, extendClass: function(t3, e3) {
          let i3 = function() {
          };
          return i3.prototype = new t3(), m(i3.prototype, e3), i3;
        }, find: k, fireEvent: C, getClosestDistance: function(t3, e3) {
          let i3, s2, o2;
          let r2 = !e3;
          return t3.forEach((t4) => {
            if (t4.length > 1)
              for (o2 = t4.length - 1; o2 > 0; o2--)
                (s2 = t4[o2] - t4[o2 - 1]) < 0 && !r2 ? (e3?.(), e3 = void 0) : s2 && (void 0 === i3 || s2 < i3) && (i3 = s2);
          }), i3;
        }, getMagnitude: b, getNestedProperty: function(t3, e3) {
          let i3 = t3.split(".");
          for (; i3.length && u(e3); ) {
            let t4 = i3.shift();
            if (void 0 === t4 || "__proto__" === t4)
              return;
            if ("this" === t4) {
              let t5;
              return l(e3) && (t5 = e3["@this"]), t5 ?? e3;
            }
            let s2 = e3[t4];
            if (!u(s2) || "function" == typeof s2 || "number" == typeof s2.nodeType || s2 === o)
              return;
            e3 = s2;
          }
          return e3;
        }, getStyle: function t3(e3, i3, s2) {
          let r2;
          if ("width" === i3) {
            let i4 = Math.min(e3.offsetWidth, e3.scrollWidth), s3 = e3.getBoundingClientRect && e3.getBoundingClientRect().width;
            return s3 < i4 && s3 >= i4 - 1 && (i4 = Math.floor(s3)), Math.max(0, i4 - (t3(e3, "padding-left", true) || 0) - (t3(e3, "padding-right", true) || 0));
          }
          if ("height" === i3)
            return Math.max(0, Math.min(e3.offsetHeight, e3.scrollHeight) - (t3(e3, "padding-top", true) || 0) - (t3(e3, "padding-bottom", true) || 0));
          let a2 = o.getComputedStyle(e3, void 0);
          return a2 && (r2 = a2.getPropertyValue(i3), x(s2, "opacity" !== i3) && (r2 = n(r2))), r2;
        }, inArray: function(t3, e3, i3) {
          return r(32, false, void 0, { "Highcharts.inArray": "use Array.indexOf" }), e3.indexOf(t3, i3);
        }, insertItem: function(t3, e3) {
          let i3;
          let s2 = t3.options.index, o2 = e3.length;
          for (i3 = t3.options.isInternal ? o2 : 0; i3 < o2 + 1; i3++)
            if (!e3[i3] || p(s2) && s2 < x(e3[i3].options.index, e3[i3]._i) || e3[i3].options.isInternal) {
              e3.splice(i3, 0, t3);
              break;
            }
          return i3;
        }, isArray: h, isClass: c, isDOMElement: d, isFunction: function(t3) {
          return "function" == typeof t3;
        }, isNumber: p, isObject: l, isString: a, keys: function(t3) {
          return r(32, false, void 0, { "Highcharts.keys": "use Object.keys" }), Object.keys(t3);
        }, merge: function() {
          let t3, e3 = arguments, i3 = {}, s2 = function(t4, e4) {
            return "object" != typeof t4 && (t4 = {}), S(e4, function(i4, o3) {
              "__proto__" !== o3 && "constructor" !== o3 && (!l(i4, true) || c(i4) || d(i4) ? t4[o3] = e4[o3] : t4[o3] = s2(t4[o3] || {}, i4));
            }), t4;
          };
          true === e3[0] && (i3 = e3[1], e3 = Array.prototype.slice.call(e3, 2));
          let o2 = e3.length;
          for (t3 = 0; t3 < o2; t3++)
            i3 = s2(i3, e3[t3]);
          return i3;
        }, normalizeTickInterval: function(t3, e3, i3, s2, o2) {
          let r2, n2 = t3;
          i3 = x(i3, b(t3));
          let a2 = t3 / i3;
          for (!e3 && (e3 = o2 ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], false === s2 && (1 === i3 ? e3 = e3.filter(function(t4) {
            return t4 % 1 == 0;
          }) : i3 <= 0.1 && (e3 = [1 / i3]))), r2 = 0; r2 < e3.length && (n2 = e3[r2], (!o2 || !(n2 * i3 >= t3)) && (o2 || !(a2 <= (e3[r2] + (e3[r2 + 1] || e3[r2])) / 2))); r2++)
            ;
          return v(n2 * i3, -Math.round(Math.log(1e-3) / Math.LN10));
        }, objectEach: S, offset: function(t3) {
          let e3 = s.documentElement, i3 = t3.parentElement || t3.parentNode ? t3.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
          return { top: i3.top + (o.pageYOffset || e3.scrollTop) - (e3.clientTop || 0), left: i3.left + (o.pageXOffset || e3.scrollLeft) - (e3.clientLeft || 0), width: i3.width, height: i3.height };
        }, pad: function(t3, e3, i3) {
          return Array((e3 || 2) + 1 - String(t3).replace("-", "").length).join(i3 || "0") + t3;
        }, pick: x, pInt: n, pushUnique: function(t3, e3) {
          return 0 > t3.indexOf(e3) && !!t3.push(e3);
        }, relativeLength: function(t3, e3, i3) {
          return /%$/.test(t3) ? e3 * parseFloat(t3) / 100 + (i3 || 0) : parseFloat(t3);
        }, removeEvent: M, splat: f, stableSort: function(t3, e3) {
          let i3, s2;
          let o2 = t3.length;
          for (s2 = 0; s2 < o2; s2++)
            t3[s2].safeI = s2;
          for (t3.sort(function(t4, s3) {
            return 0 === (i3 = e3(t4, s3)) ? t4.safeI - s3.safeI : i3;
          }), s2 = 0; s2 < o2; s2++)
            delete t3[s2].safeI;
        }, syncTimeout: function(t3, e3, i3) {
          return e3 > 0 ? setTimeout(t3, e3, i3) : (t3.call(0, i3), -1);
        }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, uniqueKey: w, useSerialIds: function(t3) {
          return e2 = x(t3, e2);
        }, wrap: function(t3, e3, i3) {
          let s2 = t3[e3];
          t3[e3] = function() {
            let t4 = arguments, e4 = this;
            return i3.apply(this, [function() {
              return s2.apply(e4, arguments.length ? arguments : t4);
            }].concat([].slice.call(arguments)));
          };
        } };
        return T;
      }), i(e, "Core/Chart/ChartDefaults.js", [], function() {
        return { alignThresholds: false, panning: { enabled: false, type: "x" }, styledMode: false, borderRadius: 0, colorCount: 10, allowMutatingData: true, ignoreHiddenSeries: true, spacing: [10, 10, 15, 10], resetZoomButton: { theme: {}, position: {} }, reflow: true, type: "line", zooming: { singleTouch: false, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#334eff", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" };
      }), i(e, "Core/Color/Palettes.js", [], function() {
        return { colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"] };
      }), i(e, "Core/Time.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { win: i2 } = t2, { defined: s, error: o, extend: r, isObject: n, merge: a, objectEach: h, pad: l, pick: d, splat: c, timeUnits: p } = e2, u = t2.isSafari && i2.Intl && i2.Intl.DateTimeFormat.prototype.formatRange, g = t2.isSafari && i2.Intl && !i2.Intl.DateTimeFormat.prototype.formatRange;
        return class {
          constructor(t3) {
            this.options = {}, this.useUTC = false, this.variableTimezone = false, this.Date = i2.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(t3);
          }
          get(t3, e3) {
            if (this.variableTimezone || this.timezoneOffset) {
              let i3 = e3.getTime(), s2 = i3 - this.getTimezoneOffset(e3);
              e3.setTime(s2);
              let o2 = e3["getUTC" + t3]();
              return e3.setTime(i3), o2;
            }
            return this.useUTC ? e3["getUTC" + t3]() : e3["get" + t3]();
          }
          set(t3, e3, i3) {
            if (this.variableTimezone || this.timezoneOffset) {
              if ("Milliseconds" === t3 || "Seconds" === t3 || "Minutes" === t3 && this.getTimezoneOffset(e3) % 36e5 == 0)
                return e3["setUTC" + t3](i3);
              let s2 = this.getTimezoneOffset(e3), o2 = e3.getTime() - s2;
              e3.setTime(o2), e3["setUTC" + t3](i3);
              let r2 = this.getTimezoneOffset(e3);
              return o2 = e3.getTime() + r2, e3.setTime(o2);
            }
            return this.useUTC || u && "FullYear" === t3 ? e3["setUTC" + t3](i3) : e3["set" + t3](i3);
          }
          update(t3 = {}) {
            let e3 = d(t3.useUTC, true);
            this.options = t3 = a(true, this.options, t3), this.Date = t3.Date || i2.Date || Date, this.useUTC = e3, this.timezoneOffset = e3 && t3.timezoneOffset || void 0, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = e3 && !!(t3.getTimezoneOffset || t3.timezone);
          }
          makeTime(t3, e3, i3, s2, o2, r2) {
            let n2, a2, h2;
            return this.useUTC ? (n2 = this.Date.UTC.apply(0, arguments), a2 = this.getTimezoneOffset(n2), n2 += a2, a2 !== (h2 = this.getTimezoneOffset(n2)) ? n2 += h2 - a2 : a2 - 36e5 !== this.getTimezoneOffset(n2 - 36e5) || g || (n2 -= 36e5)) : n2 = new this.Date(t3, e3, d(i3, 1), d(s2, 0), d(o2, 0), d(r2, 0)).getTime(), n2;
          }
          timezoneOffsetFunction() {
            let t3 = this, e3 = this.options, s2 = e3.getTimezoneOffset, r2 = e3.moment || i2.moment;
            if (!this.useUTC)
              return function(t4) {
                return 6e4 * new Date(t4.toString()).getTimezoneOffset();
              };
            if (e3.timezone) {
              if (r2)
                return function(t4) {
                  return -(6e4 * r2.tz(t4, e3.timezone).utcOffset());
                };
              o(25);
            }
            return this.useUTC && s2 ? function(t4) {
              return 6e4 * s2(t4.valueOf());
            } : function() {
              return 6e4 * (t3.timezoneOffset || 0);
            };
          }
          dateFormat(e3, i3, o2) {
            if (!s(i3) || isNaN(i3))
              return t2.defaultOptions.lang && t2.defaultOptions.lang.invalidDate || "";
            e3 = d(e3, "%Y-%m-%d %H:%M:%S");
            let n2 = this, a2 = new this.Date(i3), c2 = this.get("Hours", a2), p2 = this.get("Day", a2), u2 = this.get("Date", a2), g2 = this.get("Month", a2), f = this.get("FullYear", a2), m = t2.defaultOptions.lang, x = m && m.weekdays, y = m && m.shortWeekdays, b = r({ a: y ? y[p2] : x[p2].substr(0, 3), A: x[p2], d: l(u2), e: l(u2, 2, " "), w: p2, b: m.shortMonths[g2], B: m.months[g2], m: l(g2 + 1), o: g2 + 1, y: f.toString().substr(2, 2), Y: f, H: l(c2), k: c2, I: l(c2 % 12 || 12), l: c2 % 12 || 12, M: l(this.get("Minutes", a2)), p: c2 < 12 ? "AM" : "PM", P: c2 < 12 ? "am" : "pm", S: l(this.get("Seconds", a2)), L: l(Math.floor(i3 % 1e3), 3) }, t2.dateFormats);
            return h(b, function(t3, s2) {
              for (; -1 !== e3.indexOf("%" + s2); )
                e3 = e3.replace("%" + s2, "function" == typeof t3 ? t3.call(n2, i3) : t3);
            }), o2 ? e3.substr(0, 1).toUpperCase() + e3.substr(1) : e3;
          }
          resolveDTLFormat(t3) {
            return n(t3, true) ? t3 : { main: (t3 = c(t3))[0], from: t3[1], to: t3[2] };
          }
          getTimeTicks(t3, e3, i3, o2) {
            let n2, a2, h2, l2;
            let c2 = this, u2 = c2.Date, g2 = [], f = {}, m = new u2(e3), x = t3.unitRange, y = t3.count || 1;
            if (o2 = d(o2, 1), s(e3)) {
              c2.set("Milliseconds", m, x >= p.second ? 0 : y * Math.floor(c2.get("Milliseconds", m) / y)), x >= p.second && c2.set("Seconds", m, x >= p.minute ? 0 : y * Math.floor(c2.get("Seconds", m) / y)), x >= p.minute && c2.set("Minutes", m, x >= p.hour ? 0 : y * Math.floor(c2.get("Minutes", m) / y)), x >= p.hour && c2.set("Hours", m, x >= p.day ? 0 : y * Math.floor(c2.get("Hours", m) / y)), x >= p.day && c2.set("Date", m, x >= p.month ? 1 : Math.max(1, y * Math.floor(c2.get("Date", m) / y))), x >= p.month && (c2.set("Month", m, x >= p.year ? 0 : y * Math.floor(c2.get("Month", m) / y)), a2 = c2.get("FullYear", m)), x >= p.year && (a2 -= a2 % y, c2.set("FullYear", m, a2)), x === p.week && (l2 = c2.get("Day", m), c2.set("Date", m, c2.get("Date", m) - l2 + o2 + (l2 < o2 ? -7 : 0))), a2 = c2.get("FullYear", m);
              let t4 = c2.get("Month", m), r2 = c2.get("Date", m), d2 = c2.get("Hours", m);
              e3 = m.getTime(), (c2.variableTimezone || !c2.useUTC) && s(i3) && (h2 = i3 - e3 > 4 * p.month || c2.getTimezoneOffset(e3) !== c2.getTimezoneOffset(i3));
              let u3 = m.getTime();
              for (n2 = 1; u3 < i3; )
                g2.push(u3), x === p.year ? u3 = c2.makeTime(a2 + n2 * y, 0) : x === p.month ? u3 = c2.makeTime(a2, t4 + n2 * y) : h2 && (x === p.day || x === p.week) ? u3 = c2.makeTime(a2, t4, r2 + n2 * y * (x === p.day ? 1 : 7)) : h2 && x === p.hour && y > 1 ? u3 = c2.makeTime(a2, t4, r2, d2 + n2 * y) : u3 += x * y, n2++;
              g2.push(u3), x <= p.hour && g2.length < 1e4 && g2.forEach(function(t5) {
                t5 % 18e5 == 0 && "000000000" === c2.dateFormat("%H%M%S%L", t5) && (f[t5] = "day");
              });
            }
            return g2.info = r(t3, { higherRanks: f, totalRange: x * y }), g2;
          }
          getDateFormat(t3, e3, i3, s2) {
            let o2 = this.dateFormat("%m-%d %H:%M:%S.%L", e3), r2 = "01-01 00:00:00.000", n2 = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, a2 = "millisecond", h2 = a2;
            for (a2 in p) {
              if (t3 === p.week && +this.dateFormat("%w", e3) === i3 && o2.substr(6) === r2.substr(6)) {
                a2 = "week";
                break;
              }
              if (p[a2] > t3) {
                a2 = h2;
                break;
              }
              if (n2[a2] && o2.substr(n2[a2]) !== r2.substr(n2[a2]))
                break;
              "week" !== a2 && (h2 = a2);
            }
            return this.resolveDTLFormat(s2[a2]).main;
          }
        };
      }), i(e, "Core/Defaults.js", [e["Core/Chart/ChartDefaults.js"], e["Core/Globals.js"], e["Core/Color/Palettes.js"], e["Core/Time.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let { isTouchDevice: r, svg: n } = e2, { merge: a } = o, h = { colors: i2.colors, symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], decimalPoint: ".", numericSymbols: ["k", "M", "G", "T", "P", "E"], resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: {}, time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: true }, chart: t2, title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, legend: { enabled: true, align: "center", alignColumns: true, className: "highcharts-no-tooltip", layout: "horizontal", itemMarginBottom: 2, itemMarginTop: 2, labelFormatter: function() {
          return this.name;
        }, borderColor: "#999999", borderRadius: 0, navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#666666", textDecoration: "line-through" }, shadow: false, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: true, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontSize: "0.8em", fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: true, animation: n, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %e %b, %H:%M:%S.%L", second: "%A, %e %b, %H:%M:%S", minute: "%A, %e %b, %H:%M", hour: "%A, %e %b, %H:%M", day: "%A, %e %b %Y", week: "Week from %A, %e %b %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: false, snap: r ? 25 : 10, headerFormat: '<span style="font-size: 0.8em">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: "#ffffff", borderWidth: void 0, shadow: true, stickOnContact: false, style: { color: "#333333", cursor: "default", fontSize: "0.8em" }, useHTML: false }, credits: { enabled: true, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" }, text: "Highcharts.com" } };
        h.chart.styledMode = false;
        let l = new s(h.time);
        return { defaultOptions: h, defaultTime: l, getOptions: function() {
          return h;
        }, setOptions: function(t3) {
          return a(true, h, t3), (t3.time || t3.global) && (e2.time ? e2.time.update(a(h.global, h.time, t3.global, t3.time)) : e2.time = l), h;
        } };
      }), i(e, "Core/Color/Color.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { isNumber: i2, merge: s, pInt: o } = e2;
        class r {
          static parse(t3) {
            return t3 ? new r(t3) : r.None;
          }
          constructor(e3) {
            this.rgba = [NaN, NaN, NaN, NaN], this.input = e3;
            let i3 = t2.Color;
            if (i3 && i3 !== r)
              return new i3(e3);
            this.init(e3);
          }
          init(t3) {
            let e3, i3, s2, o2;
            if ("object" == typeof t3 && void 0 !== t3.stops)
              this.stops = t3.stops.map((t4) => new r(t4[1]));
            else if ("string" == typeof t3) {
              if (this.input = t3 = r.names[t3.toLowerCase()] || t3, "#" === t3.charAt(0)) {
                let e4 = t3.length, s3 = parseInt(t3.substr(1), 16);
                7 === e4 ? i3 = [(16711680 & s3) >> 16, (65280 & s3) >> 8, 255 & s3, 1] : 4 === e4 && (i3 = [(3840 & s3) >> 4 | (3840 & s3) >> 8, (240 & s3) >> 4 | 240 & s3, (15 & s3) << 4 | 15 & s3, 1]);
              }
              if (!i3)
                for (s2 = r.parsers.length; s2-- && !i3; )
                  (e3 = (o2 = r.parsers[s2]).regex.exec(t3)) && (i3 = o2.parse(e3));
            }
            i3 && (this.rgba = i3);
          }
          get(t3) {
            let e3 = this.input, o2 = this.rgba;
            if ("object" == typeof e3 && void 0 !== this.stops) {
              let i3 = s(e3);
              return i3.stops = [].slice.call(i3.stops), this.stops.forEach((e4, s2) => {
                i3.stops[s2] = [i3.stops[s2][0], e4.get(t3)];
              }), i3;
            }
            return o2 && i2(o2[0]) ? "rgb" !== t3 && (t3 || 1 !== o2[3]) ? "a" === t3 ? `${o2[3]}` : "rgba(" + o2.join(",") + ")" : "rgb(" + o2[0] + "," + o2[1] + "," + o2[2] + ")" : e3;
          }
          brighten(t3) {
            let e3 = this.rgba;
            if (this.stops)
              this.stops.forEach(function(e4) {
                e4.brighten(t3);
              });
            else if (i2(t3) && 0 !== t3)
              for (let i3 = 0; i3 < 3; i3++)
                e3[i3] += o(255 * t3), e3[i3] < 0 && (e3[i3] = 0), e3[i3] > 255 && (e3[i3] = 255);
            return this;
          }
          setOpacity(t3) {
            return this.rgba[3] = t3, this;
          }
          tweenTo(t3, e3) {
            let s2 = this.rgba, o2 = t3.rgba;
            if (!i2(s2[0]) || !i2(o2[0]))
              return t3.input || "none";
            let r2 = 1 !== o2[3] || 1 !== s2[3];
            return (r2 ? "rgba(" : "rgb(") + Math.round(o2[0] + (s2[0] - o2[0]) * (1 - e3)) + "," + Math.round(o2[1] + (s2[1] - o2[1]) * (1 - e3)) + "," + Math.round(o2[2] + (s2[2] - o2[2]) * (1 - e3)) + (r2 ? "," + (o2[3] + (s2[3] - o2[3]) * (1 - e3)) : "") + ")";
          }
        }
        return r.names = { white: "#ffffff", black: "#000000" }, r.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function(t3) {
          return [o(t3[1]), o(t3[2]), o(t3[3]), parseFloat(t3[4], 10)];
        } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(t3) {
          return [o(t3[1]), o(t3[2]), o(t3[3]), 1];
        } }], r.None = new r(""), r;
      }), i(e, "Core/Animation/Fx.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { parse: s } = t2, { win: o } = e2, { isNumber: r, objectEach: n } = i2;
        class a {
          constructor(t3, e3, i3) {
            this.pos = NaN, this.options = e3, this.elem = t3, this.prop = i3;
          }
          dSetter() {
            let t3 = this.paths, e3 = t3 && t3[0], i3 = t3 && t3[1], s2 = this.now || 0, o2 = [];
            if (1 !== s2 && e3 && i3) {
              if (e3.length === i3.length && s2 < 1)
                for (let t4 = 0; t4 < i3.length; t4++) {
                  let n2 = e3[t4], a2 = i3[t4], h = [];
                  for (let t5 = 0; t5 < a2.length; t5++) {
                    let e4 = n2[t5], i4 = a2[t5];
                    r(e4) && r(i4) && !("A" === a2[0] && (4 === t5 || 5 === t5)) ? h[t5] = e4 + s2 * (i4 - e4) : h[t5] = i4;
                  }
                  o2.push(h);
                }
              else
                o2 = i3;
            } else
              o2 = this.toD || [];
            this.elem.attr("d", o2, void 0, true);
          }
          update() {
            let t3 = this.elem, e3 = this.prop, i3 = this.now, s2 = this.options.step;
            this[e3 + "Setter"] ? this[e3 + "Setter"]() : t3.attr ? t3.element && t3.attr(e3, i3, null, true) : t3.style[e3] = i3 + this.unit, s2 && s2.call(t3, i3, this);
          }
          run(t3, e3, i3) {
            let s2 = this, r2 = s2.options, n2 = function(t4) {
              return !n2.stopped && s2.step(t4);
            }, h = o.requestAnimationFrame || function(t4) {
              setTimeout(t4, 13);
            }, l = function() {
              for (let t4 = 0; t4 < a.timers.length; t4++)
                a.timers[t4]() || a.timers.splice(t4--, 1);
              a.timers.length && h(l);
            };
            t3 !== e3 || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = t3, this.end = e3, this.unit = i3, this.now = this.start, this.pos = 0, n2.elem = this.elem, n2.prop = this.prop, n2() && 1 === a.timers.push(n2) && h(l)) : (delete r2.curAnim[this.prop], r2.complete && 0 === Object.keys(r2.curAnim).length && r2.complete.call(this.elem));
          }
          step(t3) {
            let e3, i3;
            let s2 = +/* @__PURE__ */ new Date(), o2 = this.options, r2 = this.elem, a2 = o2.complete, h = o2.duration, l = o2.curAnim;
            return r2.attr && !r2.element ? e3 = false : t3 || s2 >= h + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), l[this.prop] = true, i3 = true, n(l, function(t4) {
              true !== t4 && (i3 = false);
            }), i3 && a2 && a2.call(r2), e3 = false) : (this.pos = o2.easing((s2 - this.startTime) / h), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e3 = true), e3;
          }
          initPath(t3, e3, i3) {
            let s2 = t3.startX, o2 = t3.endX, n2 = i3.slice(), a2 = t3.isArea, h = a2 ? 2 : 1, l, d, c, p, u = e3 && e3.slice();
            if (!u)
              return [n2, n2];
            function g(t4, e4) {
              for (; t4.length < d; ) {
                let i4 = t4[0], s3 = e4[d - t4.length];
                if (s3 && "M" === i4[0] && ("C" === s3[0] ? t4[0] = ["C", i4[1], i4[2], i4[1], i4[2], i4[1], i4[2]] : t4[0] = ["L", i4[1], i4[2]]), t4.unshift(i4), a2) {
                  let e5 = t4.pop();
                  t4.push(t4[t4.length - 1], e5);
                }
              }
            }
            function f(t4, e4) {
              for (; t4.length < d; ) {
                let e5 = t4[Math.floor(t4.length / h) - 1].slice();
                if ("C" === e5[0] && (e5[1] = e5[5], e5[2] = e5[6]), a2) {
                  let i4 = t4[Math.floor(t4.length / h)].slice();
                  t4.splice(t4.length / 2, 0, e5, i4);
                } else
                  t4.push(e5);
              }
            }
            if (s2 && o2 && o2.length) {
              for (c = 0; c < s2.length; c++) {
                if (s2[c] === o2[0]) {
                  l = c;
                  break;
                }
                if (s2[0] === o2[o2.length - s2.length + c]) {
                  l = c, p = true;
                  break;
                }
                if (s2[s2.length - 1] === o2[o2.length - s2.length + c]) {
                  l = s2.length - c;
                  break;
                }
              }
              void 0 === l && (u = []);
            }
            return u.length && r(l) && (d = n2.length + l * h, p ? (g(u, n2), f(n2, u)) : (g(n2, u), f(u, n2))), [u, n2];
          }
          fillSetter() {
            a.prototype.strokeSetter.apply(this, arguments);
          }
          strokeSetter() {
            this.elem.attr(this.prop, s(this.start).tweenTo(s(this.end), this.pos), void 0, true);
          }
        }
        return a.timers = [], a;
      }), i(e, "Core/Animation/AnimationUtilities.js", [e["Core/Animation/Fx.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { defined: i2, getStyle: s, isArray: o, isNumber: r, isObject: n, merge: a, objectEach: h, pick: l } = e2;
        function d(t3) {
          return n(t3) ? a({ duration: 500, defer: 0 }, t3) : { duration: t3 ? 500 : 0, defer: 0 };
        }
        function c(e3, i3) {
          let s2 = t2.timers.length;
          for (; s2--; )
            t2.timers[s2].elem !== e3 || i3 && i3 !== t2.timers[s2].prop || (t2.timers[s2].stopped = true);
        }
        return { animate: function(e3, i3, l2) {
          let d2, p = "", u, g, f;
          n(l2) || (f = arguments, l2 = { duration: f[2], easing: f[3], complete: f[4] }), r(l2.duration) || (l2.duration = 400), l2.easing = "function" == typeof l2.easing ? l2.easing : Math[l2.easing] || Math.easeInOutSine, l2.curAnim = a(i3), h(i3, function(r2, n2) {
            c(e3, n2), g = new t2(e3, l2, n2), u = void 0, "d" === n2 && o(i3.d) ? (g.paths = g.initPath(e3, e3.pathArray, i3.d), g.toD = i3.d, d2 = 0, u = 1) : e3.attr ? d2 = e3.attr(n2) : (d2 = parseFloat(s(e3, n2)) || 0, "opacity" !== n2 && (p = "px")), u || (u = r2), "string" == typeof u && u.match("px") && (u = u.replace(/px/g, "")), g.run(d2, u, p);
          });
        }, animObject: d, getDeferredAnimation: function(t3, e3, s2) {
          let o2 = d(e3), r2 = s2 ? [s2] : t3.series, n2 = 0, a2 = 0;
          r2.forEach((t4) => {
            let s3 = d(t4.options.animation);
            n2 = e3 && i2(e3.defer) ? o2.defer : Math.max(n2, s3.duration + s3.defer), a2 = Math.min(o2.duration, s3.duration);
          }), t3.renderer.forExport && (n2 = 0);
          let h2 = { defer: Math.max(0, n2 - a2), duration: Math.min(n2, a2) };
          return h2;
        }, setAnimation: function(t3, e3) {
          e3.renderer.globalAnimation = l(t3, e3.options.chart.animation, true);
        }, stop: c };
      }), i(e, "Core/Renderer/HTML/AST.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { SVG_NS: i2, win: s } = t2, { attr: o, createElement: r, css: n, error: a, isFunction: h, isString: l, objectEach: d, splat: c } = e2, { trustedTypes: p } = s, u = p && h(p.createPolicy) && p.createPolicy("highcharts", { createHTML: (t3) => t3 }), g = u ? u.createHTML("") : "", f = function() {
          try {
            return !!new DOMParser().parseFromString(g, "text/html");
          } catch (t3) {
            return false;
          }
        }();
        class m {
          static filterUserAttributes(t3) {
            return d(t3, (e3, i3) => {
              let s2 = true;
              -1 === m.allowedAttributes.indexOf(i3) && (s2 = false), -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i3) && (s2 = l(e3) && m.allowedReferences.some((t4) => 0 === e3.indexOf(t4))), s2 || (a(33, false, void 0, { "Invalid attribute in config": `${i3}` }), delete t3[i3]), l(e3) && t3[i3] && (t3[i3] = e3.replace(/</g, "&lt;"));
            }), t3;
          }
          static parseStyle(t3) {
            return t3.split(";").reduce((t4, e3) => {
              let i3 = e3.split(":").map((t5) => t5.trim()), s2 = i3.shift();
              return s2 && i3.length && (t4[s2.replace(/-([a-z])/g, (t5) => t5[1].toUpperCase())] = i3.join(":")), t4;
            }, {});
          }
          static setElementHTML(t3, e3) {
            if (t3.innerHTML = m.emptyHTML, e3) {
              let i3 = new m(e3);
              i3.addToDOM(t3);
            }
          }
          constructor(t3) {
            this.nodes = "string" == typeof t3 ? this.parseMarkup(t3) : t3;
          }
          addToDOM(e3) {
            return function e4(s2, r2) {
              let h2;
              return c(s2).forEach(function(s3) {
                let l2;
                let c2 = s3.tagName, p2 = s3.textContent ? t2.doc.createTextNode(s3.textContent) : void 0, u2 = m.bypassHTMLFiltering;
                if (c2) {
                  if ("#text" === c2)
                    l2 = p2;
                  else if (-1 !== m.allowedTags.indexOf(c2) || u2) {
                    let a2 = "svg" === c2 ? i2 : r2.namespaceURI || i2, h3 = t2.doc.createElementNS(a2, c2), g2 = s3.attributes || {};
                    d(s3, function(t3, e5) {
                      "tagName" !== e5 && "attributes" !== e5 && "children" !== e5 && "style" !== e5 && "textContent" !== e5 && (g2[e5] = t3);
                    }), o(h3, u2 ? g2 : m.filterUserAttributes(g2)), s3.style && n(h3, s3.style), p2 && h3.appendChild(p2), e4(s3.children || [], h3), l2 = h3;
                  } else
                    a(33, false, void 0, { "Invalid tagName in config": c2 });
                }
                l2 && r2.appendChild(l2), h2 = l2;
              }), h2;
            }(this.nodes, e3);
          }
          parseMarkup(t3) {
            let e3;
            let i3 = [];
            if (t3 = t3.trim().replace(/ style=(["'])/g, " data-style=$1"), f)
              e3 = new DOMParser().parseFromString(u ? u.createHTML(t3) : t3, "text/html");
            else {
              let i4 = r("div");
              i4.innerHTML = t3, e3 = { body: i4 };
            }
            let s2 = (t4, e4) => {
              let i4 = t4.nodeName.toLowerCase(), o2 = { tagName: i4 };
              "#text" === i4 && (o2.textContent = t4.textContent || "");
              let r2 = t4.attributes;
              if (r2) {
                let t5 = {};
                [].forEach.call(r2, (e5) => {
                  "data-style" === e5.name ? o2.style = m.parseStyle(e5.value) : t5[e5.name] = e5.value;
                }), o2.attributes = t5;
              }
              if (t4.childNodes.length) {
                let e5 = [];
                [].forEach.call(t4.childNodes, (t5) => {
                  s2(t5, e5);
                }), e5.length && (o2.children = e5);
              }
              e4.push(o2);
            };
            return [].forEach.call(e3.body.childNodes, (t4) => s2(t4, i3)), i3;
          }
        }
        return m.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "markerHeight", "markerWidth", "offset", "opacity", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], m.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], m.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feDropShadow", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], m.emptyHTML = g, m.bypassHTMLFiltering = false, m;
      }), i(e, "Core/Templating.js", [e["Core/Defaults.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { defaultOptions: i2, defaultTime: s } = t2, { extend: o, getNestedProperty: r, isArray: n, isNumber: a, isObject: h, isString: l, pick: d, pInt: c } = e2, p = { add: (t3, e3) => t3 + e3, divide: (t3, e3) => 0 !== e3 ? t3 / e3 : "", eq: (t3, e3) => t3 == e3, each: function(t3) {
          let e3 = arguments[arguments.length - 1];
          return !!n(t3) && t3.map((i3, s2) => u(e3.body, o(h(i3) ? i3 : { "@this": i3 }, { "@index": s2, "@first": 0 === s2, "@last": s2 === t3.length - 1 }))).join("");
        }, ge: (t3, e3) => t3 >= e3, gt: (t3, e3) => t3 > e3, if: (t3) => !!t3, le: (t3, e3) => t3 <= e3, lt: (t3, e3) => t3 < e3, multiply: (t3, e3) => t3 * e3, ne: (t3, e3) => t3 != e3, subtract: (t3, e3) => t3 - e3, unless: (t3) => !t3 };
        function u(t3 = "", e3, o2) {
          let n2 = /\{([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= #\(\)]+)\}/g, a2 = /\(([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= ]+)\)/g, h2 = [], l2 = /f$/, c2 = /\.([0-9])/, f = i2.lang, m = o2 && o2.time || s, x = o2 && o2.numberFormatter || g, y = (t4 = "") => {
            let i3;
            return "true" === t4 || "false" !== t4 && ((i3 = Number(t4)).toString() === t4 ? i3 : r(t4, e3));
          }, b, v, k = 0, S;
          for (; null !== (b = n2.exec(t3)); ) {
            let i3 = a2.exec(b[1]);
            i3 && (b = i3, S = true), v && v.isBlock || (v = { ctx: e3, expression: b[1], find: b[0], isBlock: "#" === b[1].charAt(0), start: b.index, startInner: b.index + b[0].length, length: b[0].length });
            let s2 = b[1].split(" ")[0].replace("#", "");
            p[s2] && (v.isBlock && s2 === v.fn && k++, v.fn || (v.fn = s2));
            let o3 = "else" === b[1];
            if (v.isBlock && v.fn && (b[1] === `/${v.fn}` || o3)) {
              if (k)
                !o3 && k--;
              else {
                let e4 = v.startInner, i4 = t3.substr(e4, b.index - e4);
                void 0 === v.body ? (v.body = i4, v.startInner = b.index + b[0].length) : v.elseBody = i4, v.find += i4 + b[0], o3 || (h2.push(v), v = void 0);
              }
            } else
              v.isBlock || h2.push(v);
            if (i3 && !v?.isBlock)
              break;
          }
          return h2.forEach((i3) => {
            let s2, o3;
            let { body: r2, elseBody: n3, expression: a3, fn: h3 } = i3;
            if (h3) {
              let t4 = [i3], l3 = a3.split(" ");
              for (o3 = p[h3].length; o3--; )
                t4.unshift(y(l3[o3 + 1]));
              s2 = p[h3].apply(e3, t4), i3.isBlock && "boolean" == typeof s2 && (s2 = u(s2 ? r2 : n3, e3));
            } else {
              let t4 = a3.split(":");
              if (s2 = y(t4.shift() || ""), t4.length && "number" == typeof s2) {
                let e4 = t4.join(":");
                if (l2.test(e4)) {
                  let t5 = parseInt((e4.match(c2) || ["", "-1"])[1], 10);
                  null !== s2 && (s2 = x(s2, t5, f.decimalPoint, e4.indexOf(",") > -1 ? f.thousandsSep : ""));
                } else
                  s2 = m.dateFormat(e4, s2);
              }
            }
            t3 = t3.replace(i3.find, d(s2, ""));
          }), S ? u(t3, e3, o2) : t3;
        }
        function g(t3, e3, s2, o2) {
          let r2, n2;
          t3 = +t3 || 0, e3 = +e3;
          let h2 = i2.lang, l2 = (t3.toString().split(".")[1] || "").split("e")[0].length, p2 = t3.toString().split("e"), u2 = e3;
          -1 === e3 ? e3 = Math.min(l2, 20) : a(e3) ? e3 && p2[1] && p2[1] < 0 && ((n2 = e3 + +p2[1]) >= 0 ? (p2[0] = (+p2[0]).toExponential(n2).split("e")[0], e3 = n2) : (p2[0] = p2[0].split(".")[0] || 0, t3 = e3 < 20 ? (p2[0] * Math.pow(10, p2[1])).toFixed(e3) : 0, p2[1] = 0)) : e3 = 2;
          let g2 = (Math.abs(p2[1] ? p2[0] : t3) + Math.pow(10, -Math.max(e3, l2) - 1)).toFixed(e3), f = String(c(g2)), m = f.length > 3 ? f.length % 3 : 0;
          return s2 = d(s2, h2.decimalPoint), o2 = d(o2, h2.thousandsSep), r2 = (t3 < 0 ? "-" : "") + (m ? f.substr(0, m) + o2 : ""), 0 > +p2[1] && !u2 ? r2 = "0" : r2 += f.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + o2), e3 && (r2 += s2 + g2.slice(-e3)), p2[1] && 0 != +r2 && (r2 += "e" + p2[1]), r2;
        }
        return { dateFormat: function(t3, e3, i3) {
          return s.dateFormat(t3, e3, i3);
        }, format: u, helpers: p, numberFormat: g };
      }), i(e, "Core/Renderer/RendererUtilities.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { clamp: i2, pick: s, pushUnique: o, stableSort: r } = t2;
        return (e2 || (e2 = {})).distribute = function t3(e3, n, a) {
          let h = e3, l = h.reducedLen || n, d = (t4, e4) => t4.target - e4.target, c = [], p = e3.length, u = [], g = c.push, f, m, x, y = true, b, v, k = 0, S;
          for (f = p; f--; )
            k += e3[f].size;
          if (k > l) {
            for (r(e3, (t4, e4) => (e4.rank || 0) - (t4.rank || 0)), x = (S = e3[0].rank === e3[e3.length - 1].rank) ? p / 2 : -1, m = S ? x : p - 1; x && k > l; )
              b = e3[f = Math.floor(m)], o(u, f) && (k -= b.size), m += x, S && m >= e3.length && (x /= 2, m = x);
            u.sort((t4, e4) => e4 - t4).forEach((t4) => g.apply(c, e3.splice(t4, 1)));
          }
          for (r(e3, d), e3 = e3.map((t4) => ({ size: t4.size, targets: [t4.target], align: s(t4.align, 0.5) })); y; ) {
            for (f = e3.length; f--; )
              b = e3[f], v = (Math.min.apply(0, b.targets) + Math.max.apply(0, b.targets)) / 2, b.pos = i2(v - b.size * b.align, 0, n - b.size);
            for (f = e3.length, y = false; f--; )
              f > 0 && e3[f - 1].pos + e3[f - 1].size > e3[f].pos && (e3[f - 1].size += e3[f].size, e3[f - 1].targets = e3[f - 1].targets.concat(e3[f].targets), e3[f - 1].align = 0.5, e3[f - 1].pos + e3[f - 1].size > n && (e3[f - 1].pos = n - e3[f - 1].size), e3.splice(f, 1), y = true);
          }
          return g.apply(h, c), f = 0, e3.some((e4) => {
            let i3 = 0;
            return (e4.targets || []).some(() => (h[f].pos = e4.pos + i3, void 0 !== a && Math.abs(h[f].pos - h[f].target) > a) ? (h.slice(0, f + 1).forEach((t4) => delete t4.pos), h.reducedLen = (h.reducedLen || n) - 0.1 * n, h.reducedLen > 0.1 * n && t3(h, n, a), true) : (i3 += h[f].size, f++, false));
          }), r(h, d), h;
        }, e2;
      }), i(e, "Core/Renderer/SVG/SVGElement.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { animate: o, animObject: r, stop: n } = t2, { deg2rad: a, doc: h, noop: l, svg: d, SVG_NS: c, win: p } = i2, { addEvent: u, attr: g, createElement: f, css: m, defined: x, erase: y, extend: b, fireEvent: v, isArray: k, isFunction: S, isObject: M, isString: C, merge: w, objectEach: T, pick: A, pInt: P, syncTimeout: L, uniqueKey: O } = s;
        class D {
          constructor() {
            this.element = void 0, this.onEvents = {}, this.opacity = 1, this.renderer = void 0, this.SVG_NS = c;
          }
          _defaultGetter(t3) {
            let e3 = A(this[t3 + "Value"], this[t3], this.element ? this.element.getAttribute(t3) : null, 0);
            return /^[\-0-9\.]+$/.test(e3) && (e3 = parseFloat(e3)), e3;
          }
          _defaultSetter(t3, e3, i3) {
            i3.setAttribute(e3, t3);
          }
          add(t3) {
            let e3;
            let i3 = this.renderer, s2 = this.element;
            return t3 && (this.parentGroup = t3), void 0 !== this.textStr && "text" === this.element.nodeName && i3.buildText(this), this.added = true, (!t3 || t3.handleZ || this.zIndex) && (e3 = this.zIndexSetter()), e3 || (t3 ? t3.element : i3.box).appendChild(s2), this.onAdd && this.onAdd(), this;
          }
          addClass(t3, e3) {
            let i3 = e3 ? "" : this.attr("class") || "";
            return (t3 = (t3 || "").split(/ /g).reduce(function(t4, e4) {
              return -1 === i3.indexOf(e4) && t4.push(e4), t4;
            }, i3 ? [i3] : []).join(" ")) !== i3 && this.attr("class", t3), this;
          }
          afterSetters() {
            this.doTransform && (this.updateTransform(), this.doTransform = false);
          }
          align(t3, e3, i3) {
            let s2, o2, r2, n2, a2;
            let h2 = {}, l2 = this.renderer, d2 = l2.alignedObjects;
            t3 ? (this.alignOptions = t3, this.alignByTranslate = e3, (!i3 || C(i3)) && (this.alignTo = r2 = i3 || "renderer", y(d2, this), d2.push(this), i3 = void 0)) : (t3 = this.alignOptions, e3 = this.alignByTranslate, r2 = this.alignTo), i3 = A(i3, l2[r2], "scrollablePlotBox" === r2 ? l2.plotBox : void 0, l2);
            let c2 = t3.align, p2 = t3.verticalAlign;
            return s2 = (i3.x || 0) + (t3.x || 0), o2 = (i3.y || 0) + (t3.y || 0), "right" === c2 ? n2 = 1 : "center" === c2 && (n2 = 2), n2 && (s2 += (i3.width - (t3.width || 0)) / n2), h2[e3 ? "translateX" : "x"] = Math.round(s2), "bottom" === p2 ? a2 = 1 : "middle" === p2 && (a2 = 2), a2 && (o2 += (i3.height - (t3.height || 0)) / a2), h2[e3 ? "translateY" : "y"] = Math.round(o2), this[this.placed ? "animate" : "attr"](h2), this.placed = true, this.alignAttr = h2, this;
          }
          alignSetter(t3) {
            let e3 = { left: "start", center: "middle", right: "end" };
            e3[t3] && (this.alignValue = t3, this.element.setAttribute("text-anchor", e3[t3]));
          }
          animate(t3, e3, i3) {
            let s2 = r(A(e3, this.renderer.globalAnimation, true)), n2 = s2.defer;
            return h.hidden && (s2.duration = 0), 0 !== s2.duration ? (i3 && (s2.complete = i3), L(() => {
              this.element && o(this, t3, s2);
            }, n2)) : (this.attr(t3, void 0, i3 || s2.complete), T(t3, function(t4, e4) {
              s2.step && s2.step.call(this, t4, { prop: e4, pos: 1, elem: this });
            }, this)), this;
          }
          applyTextOutline(t3) {
            let e3 = this.element, s2 = -1 !== t3.indexOf("contrast");
            s2 && (t3 = t3.replace(/contrast/g, this.renderer.getContrast(e3.style.fill)));
            let o2 = t3.split(" "), r2 = o2[o2.length - 1], n2 = o2[0];
            if (n2 && "none" !== n2 && i2.svg) {
              this.fakeTS = true, n2 = n2.replace(/(^[\d\.]+)(.*?)$/g, function(t5, e4, i4) {
                return 2 * Number(e4) + i4;
              }), this.removeTextOutline();
              let t4 = h.createElementNS(c, "tspan");
              g(t4, { class: "highcharts-text-outline", fill: r2, stroke: r2, "stroke-width": n2, "stroke-linejoin": "round" });
              let i3 = e3.querySelector("textPath") || e3;
              [].forEach.call(i3.childNodes, (e4) => {
                let i4 = e4.cloneNode(true);
                i4.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((t5) => i4.removeAttribute(t5)), t4.appendChild(i4);
              });
              let s3 = 0;
              [].forEach.call(i3.querySelectorAll("text tspan"), (t5) => {
                s3 += Number(t5.getAttribute("dy"));
              });
              let o3 = h.createElementNS(c, "tspan");
              o3.textContent = "​", g(o3, { x: Number(e3.getAttribute("x")), dy: -s3 }), t4.appendChild(o3), i3.insertBefore(t4, i3.firstChild);
            }
          }
          attr(t3, e3, i3, s2) {
            let o2 = this.element, r2 = D.symbolCustomAttribs, a2, h2, l2 = this, d2;
            return "string" == typeof t3 && void 0 !== e3 && (a2 = t3, (t3 = {})[a2] = e3), "string" == typeof t3 ? l2 = (this[t3 + "Getter"] || this._defaultGetter).call(this, t3, o2) : (T(t3, function(e4, i4) {
              d2 = false, s2 || n(this, i4), this.symbolName && -1 !== r2.indexOf(i4) && (h2 || (this.symbolAttr(t3), h2 = true), d2 = true), this.rotation && ("x" === i4 || "y" === i4) && (this.doTransform = true), d2 || (this[i4 + "Setter"] || this._defaultSetter).call(this, e4, i4, o2);
            }, this), this.afterSetters()), i3 && i3.call(this), l2;
          }
          clip(t3) {
            return this.attr("clip-path", t3 ? "url(" + this.renderer.url + "#" + t3.id + ")" : "none");
          }
          crisp(t3, e3) {
            e3 = e3 || t3.strokeWidth || 0;
            let i3 = Math.round(e3) % 2 / 2;
            return t3.x = Math.floor(t3.x || this.x || 0) + i3, t3.y = Math.floor(t3.y || this.y || 0) + i3, t3.width = Math.floor((t3.width || this.width || 0) - 2 * i3), t3.height = Math.floor((t3.height || this.height || 0) - 2 * i3), x(t3.strokeWidth) && (t3.strokeWidth = e3), t3;
          }
          complexColor(t3, i3, s2) {
            let o2 = this.renderer, r2, n2, a2, h2, l2, d2, c2, p2, u2, g2, f2 = [], m2;
            v(this.renderer, "complexColor", { args: arguments }, function() {
              if (t3.radialGradient ? n2 = "radialGradient" : t3.linearGradient && (n2 = "linearGradient"), n2) {
                if (a2 = t3[n2], l2 = o2.gradients, d2 = t3.stops, u2 = s2.radialReference, k(a2) && (t3[n2] = a2 = { x1: a2[0], y1: a2[1], x2: a2[2], y2: a2[3], gradientUnits: "userSpaceOnUse" }), "radialGradient" === n2 && u2 && !x(a2.gradientUnits) && (h2 = a2, a2 = w(a2, o2.getRadialAttr(u2, h2), { gradientUnits: "userSpaceOnUse" })), T(a2, function(t4, e3) {
                  "id" !== e3 && f2.push(e3, t4);
                }), T(d2, function(t4) {
                  f2.push(t4);
                }), l2[f2 = f2.join(",")])
                  g2 = l2[f2].attr("id");
                else {
                  a2.id = g2 = O();
                  let t4 = l2[f2] = o2.createElement(n2).attr(a2).add(o2.defs);
                  t4.radAttr = h2, t4.stops = [], d2.forEach(function(i4) {
                    0 === i4[1].indexOf("rgba") ? (c2 = (r2 = e2.parse(i4[1])).get("rgb"), p2 = r2.get("a")) : (c2 = i4[1], p2 = 1);
                    let s3 = o2.createElement("stop").attr({ offset: i4[0], "stop-color": c2, "stop-opacity": p2 }).add(t4);
                    t4.stops.push(s3);
                  });
                }
                m2 = "url(" + o2.url + "#" + g2 + ")", s2.setAttribute(i3, m2), s2.gradient = f2, t3.toString = function() {
                  return m2;
                };
              }
            });
          }
          css(t3) {
            let e3 = this.styles, i3 = {}, s2 = this.element, o2, r2 = !e3;
            if (e3 && T(t3, function(t4, s3) {
              e3 && e3[s3] !== t4 && (i3[s3] = t4, r2 = true);
            }), r2) {
              e3 && (t3 = b(e3, i3)), null === t3.width || "auto" === t3.width ? delete this.textWidth : "text" === s2.nodeName.toLowerCase() && t3.width && (o2 = this.textWidth = P(t3.width)), this.styles = t3, o2 && !d && this.renderer.forExport && delete t3.width;
              let r3 = w(t3);
              s2.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach((t4) => r3 && delete r3[t4]), r3.color && (r3.fill = r3.color)), m(s2, r3);
            }
            return this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t3.textOutline && this.applyTextOutline(t3.textOutline)), this;
          }
          dashstyleSetter(t3) {
            let e3, i3 = this["stroke-width"];
            if ("inherit" === i3 && (i3 = 1), t3 = t3 && t3.toLowerCase()) {
              let s2 = t3.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
              for (e3 = s2.length; e3--; )
                s2[e3] = "" + P(s2[e3]) * A(i3, NaN);
              t3 = s2.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t3);
            }
          }
          destroy() {
            let t3 = this, e3 = t3.element || {}, i3 = t3.renderer, s2 = e3.ownerSVGElement, o2 = "SPAN" === e3.nodeName && t3.parentGroup || void 0, r2, a2;
            if (e3.onclick = e3.onmouseout = e3.onmouseover = e3.onmousemove = e3.point = null, n(t3), t3.clipPath && s2) {
              let e4 = t3.clipPath;
              [].forEach.call(s2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(t4) {
                t4.getAttribute("clip-path").indexOf(e4.element.id) > -1 && t4.removeAttribute("clip-path");
              }), t3.clipPath = e4.destroy();
            }
            if (t3.connector = t3.connector?.destroy(), t3.stops) {
              for (a2 = 0; a2 < t3.stops.length; a2++)
                t3.stops[a2].destroy();
              t3.stops.length = 0, t3.stops = void 0;
            }
            for (t3.safeRemoveChild(e3); o2 && o2.div && 0 === o2.div.childNodes.length; )
              r2 = o2.parentGroup, t3.safeRemoveChild(o2.div), delete o2.div, o2 = r2;
            t3.alignTo && y(i3.alignedObjects, t3), T(t3, function(e4, i4) {
              t3[i4] && t3[i4].parentGroup === t3 && t3[i4].destroy && t3[i4].destroy(), delete t3[i4];
            });
          }
          dSetter(t3, e3, i3) {
            k(t3) && ("string" == typeof t3[0] && (t3 = this.renderer.pathToSegments(t3)), this.pathArray = t3, t3 = t3.reduce((t4, e4, i4) => e4 && e4.join ? (i4 ? t4 + " " : "") + e4.join(" ") : (e4 || "").toString(), "")), /(NaN| {2}|^$)/.test(t3) && (t3 = "M 0 0"), this[e3] !== t3 && (i3.setAttribute(e3, t3), this[e3] = t3);
          }
          fillSetter(t3, e3, i3) {
            "string" == typeof t3 ? i3.setAttribute(e3, t3) : t3 && this.complexColor(t3, e3, i3);
          }
          hrefSetter(t3, e3, i3) {
            i3.setAttributeNS("http://www.w3.org/1999/xlink", e3, t3);
          }
          getBBox(t3, e3) {
            let i3, s2, o2, r2, n2;
            let { alignValue: h2, element: l2, renderer: d2, styles: c2, textStr: p2 } = this, { cache: u2, cacheKeys: g2 } = d2, f2 = l2.namespaceURI === this.SVG_NS, y2 = A(e3, this.rotation, 0), v2 = d2.styledMode ? l2 && D.prototype.getStyle.call(l2, "font-size") : c2 && c2.fontSize;
            if (x(p2) && (-1 === (n2 = p2.toString()).indexOf("<") && (n2 = n2.replace(/[0-9]/g, "0")), n2 += ["", d2.rootFontSize, v2, y2, this.textWidth, h2, c2 && c2.textOverflow, c2 && c2.fontWeight].join(",")), n2 && !t3 && (i3 = u2[n2]), !i3) {
              if (f2 || d2.forExport) {
                try {
                  r2 = this.fakeTS && function(t4) {
                    let e4 = l2.querySelector(".highcharts-text-outline");
                    e4 && m(e4, { display: t4 });
                  }, S(r2) && r2("none"), i3 = l2.getBBox ? b({}, l2.getBBox()) : { width: l2.offsetWidth, height: l2.offsetHeight, x: 0, y: 0 }, S(r2) && r2("");
                } catch (t4) {
                }
                (!i3 || i3.width < 0) && (i3 = { x: 0, y: 0, width: 0, height: 0 });
              } else
                i3 = this.htmlGetBBox();
              if (s2 = i3.width, o2 = i3.height, f2 && (i3.height = o2 = { "11px,17": 14, "13px,20": 16 }[`${v2 || ""},${Math.round(o2)}`] || o2), y2) {
                let t4 = Number(l2.getAttribute("y") || 0) - i3.y, e4 = { right: 1, center: 0.5 }[h2 || 0] || 0, r3 = y2 * a, n3 = (y2 - 90) * a, d3 = s2 * Math.cos(r3), c3 = s2 * Math.sin(r3), p3 = Math.cos(n3), u3 = Math.sin(n3), g3 = i3.x + e4 * (s2 - d3), f3 = i3.y + t4 - e4 * c3, m2 = g3 + t4 * p3, x2 = m2 + d3, b2 = x2 - o2 * p3, v3 = b2 - d3, k2 = f3 + t4 * u3, S2 = k2 + c3, M2 = S2 - o2 * u3, C2 = M2 - c3;
                i3.x = Math.min(m2, x2, b2, v3), i3.y = Math.min(k2, S2, M2, C2), i3.width = Math.max(m2, x2, b2, v3) - i3.x, i3.height = Math.max(k2, S2, M2, C2) - i3.y;
              }
            }
            if (n2 && ("" === p2 || i3.height > 0)) {
              for (; g2.length > 250; )
                delete u2[g2.shift()];
              u2[n2] || g2.push(n2), u2[n2] = i3;
            }
            return i3;
          }
          getStyle(t3) {
            return p.getComputedStyle(this.element || this, "").getPropertyValue(t3);
          }
          hasClass(t3) {
            return -1 !== ("" + this.attr("class")).split(" ").indexOf(t3);
          }
          hide() {
            return this.attr({ visibility: "hidden" });
          }
          htmlGetBBox() {
            return { height: 0, width: 0, x: 0, y: 0 };
          }
          init(t3, e3) {
            this.element = "span" === e3 ? f(e3) : h.createElementNS(this.SVG_NS, e3), this.renderer = t3, v(this, "afterInit");
          }
          on(t3, e3) {
            let { onEvents: i3 } = this;
            return i3[t3] && i3[t3](), i3[t3] = u(this.element, t3, e3), this;
          }
          opacitySetter(t3, e3, i3) {
            let s2 = Number(Number(t3).toFixed(3));
            this.opacity = s2, i3.setAttribute(e3, s2);
          }
          removeClass(t3) {
            return this.attr("class", ("" + this.attr("class")).replace(C(t3) ? RegExp(`(^| )${t3}( |$)`) : t3, " ").replace(/ +/g, " ").trim());
          }
          removeTextOutline() {
            let t3 = this.element.querySelector("tspan.highcharts-text-outline");
            t3 && this.safeRemoveChild(t3);
          }
          safeRemoveChild(t3) {
            let e3 = t3.parentNode;
            e3 && e3.removeChild(t3);
          }
          setRadialReference(t3) {
            let e3 = this.element.gradient && this.renderer.gradients[this.element.gradient];
            return this.element.radialReference = t3, e3 && e3.radAttr && e3.animate(this.renderer.getRadialAttr(t3, e3.radAttr)), this;
          }
          setTextPath(t3, e3) {
            e3 = w(true, { enabled: true, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, e3);
            let i3 = this.renderer.url, s2 = this.text || this, o2 = s2.textPath, { attributes: r2, enabled: n2 } = e3;
            if (t3 = t3 || o2 && o2.path, o2 && o2.undo(), t3 && n2) {
              let e4 = u(s2, "afterModifyTree", (e5) => {
                if (t3 && n2) {
                  let o3 = t3.attr("id");
                  o3 || t3.attr("id", o3 = O());
                  let n3 = { x: 0, y: 0 };
                  x(r2.dx) && (n3.dx = r2.dx, delete r2.dx), x(r2.dy) && (n3.dy = r2.dy, delete r2.dy), s2.attr(n3), this.attr({ transform: "" }), this.box && (this.box = this.box.destroy());
                  let a2 = e5.nodes.slice(0);
                  e5.nodes.length = 0, e5.nodes[0] = { tagName: "textPath", attributes: b(r2, { "text-anchor": r2.textAnchor, href: `${i3}#${o3}` }), children: a2 };
                }
              });
              s2.textPath = { path: t3, undo: e4 };
            } else
              s2.attr({ dx: 0, dy: 0 }), delete s2.textPath;
            return this.added && (s2.textCache = "", this.renderer.buildText(s2)), this;
          }
          shadow(t3) {
            let { renderer: e3 } = this, i3 = w(this.parentGroup?.rotation === 90 ? { offsetX: -1, offsetY: -1 } : {}, M(t3) ? t3 : {}), s2 = e3.shadowDefinition(i3);
            return this.attr({ filter: t3 ? `url(${e3.url}#${s2})` : "none" });
          }
          show(t3 = true) {
            return this.attr({ visibility: t3 ? "inherit" : "visible" });
          }
          "stroke-widthSetter"(t3, e3, i3) {
            this[e3] = t3, i3.setAttribute(e3, t3);
          }
          strokeWidth() {
            if (!this.renderer.styledMode)
              return this["stroke-width"] || 0;
            let t3 = this.getStyle("stroke-width"), e3 = 0, i3;
            return t3.indexOf("px") === t3.length - 2 ? e3 = P(t3) : "" !== t3 && (g(i3 = h.createElementNS(c, "rect"), { width: t3, "stroke-width": 0 }), this.element.parentNode.appendChild(i3), e3 = i3.getBBox().width, i3.parentNode.removeChild(i3)), e3;
          }
          symbolAttr(t3) {
            let e3 = this;
            D.symbolCustomAttribs.forEach(function(i3) {
              e3[i3] = A(t3[i3], e3[i3]);
            }), e3.attr({ d: e3.renderer.symbols[e3.symbolName](e3.x, e3.y, e3.width, e3.height, e3) });
          }
          textSetter(t3) {
            t3 !== this.textStr && (delete this.textPxLength, this.textStr = t3, this.added && this.renderer.buildText(this));
          }
          titleSetter(t3) {
            let e3 = this.element, i3 = e3.getElementsByTagName("title")[0] || h.createElementNS(this.SVG_NS, "title");
            e3.insertBefore ? e3.insertBefore(i3, e3.firstChild) : e3.appendChild(i3), i3.textContent = String(A(t3, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
          }
          toFront() {
            let t3 = this.element;
            return t3.parentNode.appendChild(t3), this;
          }
          translate(t3, e3) {
            return this.attr({ translateX: t3, translateY: e3 });
          }
          updateTransform() {
            let { element: t3, matrix: e3, rotation: i3 = 0, scaleX: s2, scaleY: o2, translateX: r2 = 0, translateY: n2 = 0 } = this, a2 = ["translate(" + r2 + "," + n2 + ")"];
            x(e3) && a2.push("matrix(" + e3.join(",") + ")"), i3 && a2.push("rotate(" + i3 + " " + A(this.rotationOriginX, t3.getAttribute("x"), 0) + " " + A(this.rotationOriginY, t3.getAttribute("y") || 0) + ")"), (x(s2) || x(o2)) && a2.push("scale(" + A(s2, 1) + " " + A(o2, 1) + ")"), a2.length && !(this.text || this).textPath && t3.setAttribute("transform", a2.join(" "));
          }
          visibilitySetter(t3, e3, i3) {
            "inherit" === t3 ? i3.removeAttribute(e3) : this[e3] !== t3 && i3.setAttribute(e3, t3), this[e3] = t3;
          }
          xGetter(t3) {
            return "circle" === this.element.nodeName && ("x" === t3 ? t3 = "cx" : "y" === t3 && (t3 = "cy")), this._defaultGetter(t3);
          }
          zIndexSetter(t3, e3) {
            let i3 = this.renderer, s2 = this.parentGroup, o2 = s2 || i3, r2 = o2.element || i3.box, n2 = this.element, a2 = r2 === i3.box, h2, l2, d2, c2 = false, p2, u2 = this.added, g2;
            if (x(t3) ? (n2.setAttribute("data-z-index", t3), t3 = +t3, this[e3] === t3 && (u2 = false)) : x(this[e3]) && n2.removeAttribute("data-z-index"), this[e3] = t3, u2) {
              for ((t3 = this.zIndex) && s2 && (s2.handleZ = true), g2 = (h2 = r2.childNodes).length - 1; g2 >= 0 && !c2; g2--)
                p2 = !x(d2 = (l2 = h2[g2]).getAttribute("data-z-index")), l2 !== n2 && (t3 < 0 && p2 && !a2 && !g2 ? (r2.insertBefore(n2, h2[g2]), c2 = true) : (P(d2) <= t3 || p2 && (!x(t3) || t3 >= 0)) && (r2.insertBefore(n2, h2[g2 + 1]), c2 = true));
              c2 || (r2.insertBefore(n2, h2[a2 ? 3 : 0]), c2 = true);
            }
            return c2;
          }
        }
        return D.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], D.prototype.strokeSetter = D.prototype.fillSetter, D.prototype.yGetter = D.prototype.xGetter, D.prototype.matrixSetter = D.prototype.rotationOriginXSetter = D.prototype.rotationOriginYSetter = D.prototype.rotationSetter = D.prototype.scaleXSetter = D.prototype.scaleYSetter = D.prototype.translateXSetter = D.prototype.translateYSetter = D.prototype.verticalAlignSetter = function(t3, e3) {
          this[e3] = t3, this.doTransform = true;
        }, D;
      }), i(e, "Core/Renderer/RendererRegistry.js", [e["Core/Globals.js"]], function(t2) {
        var e2, i2;
        let s;
        return (i2 = e2 || (e2 = {})).rendererTypes = {}, i2.getRendererType = function(t3 = s) {
          return i2.rendererTypes[t3] || i2.rendererTypes[s];
        }, i2.registerRendererType = function(e3, o, r) {
          i2.rendererTypes[e3] = o, (!s || r) && (s = e3, t2.Renderer = o);
        }, e2;
      }), i(e, "Core/Renderer/SVG/SVGLabel.js", [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { defined: i2, extend: s, isNumber: o, merge: r, pick: n, removeEvent: a } = e2;
        class h extends t2 {
          constructor(t3, e3, i3, s2, o2, r2, n2, a2, l, d) {
            let c;
            super(), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.init(t3, "g"), this.textStr = e3, this.x = i3, this.y = s2, this.anchorX = r2, this.anchorY = n2, this.baseline = l, this.className = d, this.addClass("button" === d ? "highcharts-no-tooltip" : "highcharts-label"), d && this.addClass("highcharts-" + d), this.text = t3.text(void 0, 0, 0, a2).attr({ zIndex: 1 }), "string" == typeof o2 && ((c = /^url\((.*?)\)$/.test(o2)) || this.renderer.symbols[o2]) && (this.symbolKey = o2), this.bBox = h.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t3.styledMode || c, this.deferredAttr = {}, this.alignFactor = 0;
          }
          alignSetter(t3) {
            let e3 = { left: 0, center: 0.5, right: 1 }[t3];
            e3 !== this.alignFactor && (this.alignFactor = e3, this.bBox && o(this.xSetting) && this.attr({ x: this.xSetting }));
          }
          anchorXSetter(t3, e3) {
            this.anchorX = t3, this.boxAttr(e3, Math.round(t3) - this.getCrispAdjust() - this.xSetting);
          }
          anchorYSetter(t3, e3) {
            this.anchorY = t3, this.boxAttr(e3, t3 - this.ySetting);
          }
          boxAttr(t3, e3) {
            this.box ? this.box.attr(t3, e3) : this.deferredAttr[t3] = e3;
          }
          css(e3) {
            if (e3) {
              let t3 = {};
              e3 = r(e3), h.textProps.forEach((i3) => {
                void 0 !== e3[i3] && (t3[i3] = e3[i3], delete e3[i3]);
              }), this.text.css(t3), "fontSize" in t3 || "fontWeight" in t3 ? this.updateTextPadding() : ("width" in t3 || "textOverflow" in t3) && this.updateBoxSize();
            }
            return t2.prototype.css.call(this, e3);
          }
          destroy() {
            a(this.element, "mouseenter"), a(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), t2.prototype.destroy.call(this);
          }
          fillSetter(t3, e3) {
            t3 && (this.needsBox = true), this.fill = t3, this.boxAttr(e3, t3);
          }
          getBBox() {
            this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
            let t3 = this.padding, e3 = n(this.paddingLeft, t3);
            return { width: this.width || 0, height: this.height || 0, x: this.bBox.x - e3, y: this.bBox.y - t3 };
          }
          getCrispAdjust() {
            return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
          }
          heightSetter(t3) {
            this.heightSetting = t3;
          }
          onAdd() {
            this.text.add(this), this.attr({ text: n(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && i2(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
          }
          paddingSetter(t3, e3) {
            o(t3) ? t3 !== this[e3] && (this[e3] = t3, this.updateTextPadding()) : this[e3] = void 0;
          }
          rSetter(t3, e3) {
            this.boxAttr(e3, t3);
          }
          strokeSetter(t3, e3) {
            this.stroke = t3, this.boxAttr(e3, t3);
          }
          "stroke-widthSetter"(t3, e3) {
            t3 && (this.needsBox = true), this["stroke-width"] = t3, this.boxAttr(e3, t3);
          }
          "text-alignSetter"(t3) {
            this.textAlign = t3;
          }
          textSetter(t3) {
            void 0 !== t3 && this.text.attr({ text: t3 }), this.updateTextPadding();
          }
          updateBoxSize() {
            let t3;
            let e3 = this.text, r2 = {}, n2 = this.padding, a2 = this.bBox = (!o(this.widthSetting) || !o(this.heightSetting) || this.textAlign) && i2(e3.textStr) ? e3.getBBox() : h.emptyBBox;
            this.width = this.getPaddedWidth(), this.height = (this.heightSetting || a2.height || 0) + 2 * n2;
            let l = this.renderer.fontMetrics(e3);
            if (this.baselineOffset = n2 + Math.min((this.text.firstLineMetrics || l).b, a2.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - l.h) / 2), this.needsBox && !e3.textPath) {
              if (!this.box) {
                let t4 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
                t4.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), t4.add(this);
              }
              t3 = this.getCrispAdjust(), r2.x = t3, r2.y = (this.baseline ? -this.baselineOffset : 0) + t3, r2.width = Math.round(this.width), r2.height = Math.round(this.height), this.box.attr(s(r2, this.deferredAttr)), this.deferredAttr = {};
            }
          }
          updateTextPadding() {
            let t3 = this.text;
            if (!t3.textPath) {
              this.updateBoxSize();
              let e3 = this.baseline ? 0 : this.baselineOffset, s2 = n(this.paddingLeft, this.padding);
              i2(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (s2 += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)), (s2 !== t3.x || e3 !== t3.y) && (t3.attr("x", s2), t3.hasBoxWidthChanged && (this.bBox = t3.getBBox(true)), void 0 !== e3 && t3.attr("y", e3)), t3.x = s2, t3.y = e3;
            }
          }
          widthSetter(t3) {
            this.widthSetting = o(t3) ? t3 : void 0;
          }
          getPaddedWidth() {
            let t3 = this.padding, e3 = n(this.paddingLeft, t3), i3 = n(this.paddingRight, t3);
            return (this.widthSetting || this.bBox.width || 0) + e3 + i3;
          }
          xSetter(t3) {
            this.x = t3, this.alignFactor && (t3 -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = true), this.xSetting = Math.round(t3), this.attr("translateX", this.xSetting);
          }
          ySetter(t3) {
            this.ySetting = this.y = Math.round(t3), this.attr("translateY", this.ySetting);
          }
        }
        return h.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, h.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"], h;
      }), i(e, "Core/Renderer/SVG/Symbols.js", [e["Core/Utilities.js"]], function(t2) {
        let { defined: e2, isNumber: i2, pick: s } = t2;
        function o(t3, i3, o2, r2, n2) {
          let a = [];
          if (n2) {
            let h = n2.start || 0, l = s(n2.r, o2), d = s(n2.r, r2 || o2), c = 1e-3 > Math.abs((n2.end || 0) - h - 2 * Math.PI), p = (n2.end || 0) - 1e-3, u = n2.innerR, g = s(n2.open, c), f = Math.cos(h), m = Math.sin(h), x = Math.cos(p), y = Math.sin(p), b = s(n2.longArc, p - h - Math.PI < 1e-3 ? 0 : 1), v = ["A", l, d, 0, b, s(n2.clockwise, 1), t3 + l * x, i3 + d * y];
            v.params = { start: h, end: p, cx: t3, cy: i3 }, a.push(["M", t3 + l * f, i3 + d * m], v), e2(u) && ((v = ["A", u, u, 0, b, e2(n2.clockwise) ? 1 - n2.clockwise : 0, t3 + u * f, i3 + u * m]).params = { start: p, end: h, cx: t3, cy: i3 }, a.push(g ? ["M", t3 + u * x, i3 + u * y] : ["L", t3 + u * x, i3 + u * y], v)), g || a.push(["Z"]);
          }
          return a;
        }
        function r(t3, e3, i3, s2, o2) {
          return o2 && o2.r ? n(t3, e3, i3, s2, o2) : [["M", t3, e3], ["L", t3 + i3, e3], ["L", t3 + i3, e3 + s2], ["L", t3, e3 + s2], ["Z"]];
        }
        function n(t3, e3, i3, s2, o2) {
          let r2 = o2?.r || 0;
          return [["M", t3 + r2, e3], ["L", t3 + i3 - r2, e3], ["A", r2, r2, 0, 0, 1, t3 + i3, e3 + r2], ["L", t3 + i3, e3 + s2 - r2], ["A", r2, r2, 0, 0, 1, t3 + i3 - r2, e3 + s2], ["L", t3 + r2, e3 + s2], ["A", r2, r2, 0, 0, 1, t3, e3 + s2 - r2], ["L", t3, e3 + r2], ["A", r2, r2, 0, 0, 1, t3 + r2, e3], ["Z"]];
        }
        return { arc: o, callout: function(t3, e3, s2, o2, r2) {
          let a = Math.min(r2 && r2.r || 0, s2, o2), h = a + 6, l = r2 && r2.anchorX, d = r2 && r2.anchorY || 0, c = n(t3, e3, s2, o2, { r: a });
          if (!i2(l) || l < s2 && l > 0 && d < o2 && d > 0)
            return c;
          if (t3 + l > s2 - h) {
            if (d > e3 + h && d < e3 + o2 - h)
              c.splice(3, 1, ["L", t3 + s2, d - 6], ["L", t3 + s2 + 6, d], ["L", t3 + s2, d + 6], ["L", t3 + s2, e3 + o2 - a]);
            else if (l < s2) {
              let i3 = d < e3 + h, r3 = i3 ? e3 : e3 + o2;
              c.splice(i3 ? 2 : 5, 0, ["L", l, d], ["L", t3 + s2 - a, r3]);
            } else
              c.splice(3, 1, ["L", t3 + s2, o2 / 2], ["L", l, d], ["L", t3 + s2, o2 / 2], ["L", t3 + s2, e3 + o2 - a]);
          } else if (t3 + l < h) {
            if (d > e3 + h && d < e3 + o2 - h)
              c.splice(7, 1, ["L", t3, d + 6], ["L", t3 - 6, d], ["L", t3, d - 6], ["L", t3, e3 + a]);
            else if (l > 0) {
              let i3 = d < e3 + h, s3 = i3 ? e3 : e3 + o2;
              c.splice(i3 ? 1 : 6, 0, ["L", l, d], ["L", t3 + a, s3]);
            } else
              c.splice(7, 1, ["L", t3, o2 / 2], ["L", l, d], ["L", t3, o2 / 2], ["L", t3, e3 + a]);
          } else
            d > o2 && l < s2 - h ? c.splice(5, 1, ["L", l + 6, e3 + o2], ["L", l, e3 + o2 + 6], ["L", l - 6, e3 + o2], ["L", t3 + a, e3 + o2]) : d < 0 && l > h && c.splice(1, 1, ["L", l - 6, e3], ["L", l, e3 - 6], ["L", l + 6, e3], ["L", s2 - a, e3]);
          return c;
        }, circle: function(t3, e3, i3, s2) {
          return o(t3 + i3 / 2, e3 + s2 / 2, i3 / 2, s2 / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: false });
        }, diamond: function(t3, e3, i3, s2) {
          return [["M", t3 + i3 / 2, e3], ["L", t3 + i3, e3 + s2 / 2], ["L", t3 + i3 / 2, e3 + s2], ["L", t3, e3 + s2 / 2], ["Z"]];
        }, rect: r, roundedRect: n, square: r, triangle: function(t3, e3, i3, s2) {
          return [["M", t3 + i3 / 2, e3], ["L", t3 + i3, e3 + s2], ["L", t3, e3 + s2], ["Z"]];
        }, "triangle-down": function(t3, e3, i3, s2) {
          return [["M", t3, e3], ["L", t3 + i3, e3], ["L", t3 + i3 / 2, e3 + s2], ["Z"]];
        } };
      }), i(e, "Core/Renderer/SVG/TextBuilder.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { doc: s, SVG_NS: o, win: r } = e2, { attr: n, extend: a, fireEvent: h, isString: l, objectEach: d, pick: c } = i2;
        return class {
          constructor(t3) {
            let e3 = t3.styles;
            this.renderer = t3.renderer, this.svgElement = t3, this.width = t3.textWidth, this.textLineHeight = e3 && e3.lineHeight, this.textOutline = e3 && e3.textOutline, this.ellipsis = !!(e3 && "ellipsis" === e3.textOverflow), this.noWrap = !!(e3 && "nowrap" === e3.whiteSpace);
          }
          buildSVG() {
            let e3 = this.svgElement, i3 = e3.element, o2 = e3.renderer, r2 = c(e3.textStr, "").toString(), n2 = -1 !== r2.indexOf("<"), a2 = i3.childNodes, h2 = !e3.added && o2.box, d2 = [r2, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, e3.getStyle("font-size"), this.width].join(",");
            if (d2 !== e3.textCache) {
              e3.textCache = d2, delete e3.actualWidth;
              for (let t3 = a2.length; t3--; )
                i3.removeChild(a2[t3]);
              if (n2 || this.ellipsis || this.width || e3.textPath || -1 !== r2.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(r2))) {
                if ("" !== r2) {
                  h2 && h2.appendChild(i3);
                  let s2 = new t2(r2);
                  this.modifyTree(s2.nodes), s2.addToDOM(i3), this.modifyDOM(), this.ellipsis && -1 !== (i3.textContent || "").indexOf("…") && e3.attr("title", this.unescapeEntities(e3.textStr || "", ["&lt;", "&gt;"])), h2 && h2.removeChild(i3);
                }
              } else
                i3.appendChild(s.createTextNode(this.unescapeEntities(r2)));
              l(this.textOutline) && e3.applyTextOutline && e3.applyTextOutline(this.textOutline);
            }
          }
          modifyDOM() {
            let t3;
            let e3 = this.svgElement, i3 = n(e3.element, "x");
            for (e3.firstLineMetrics = void 0; t3 = e3.element.firstChild; )
              if (/^[\s\u200B]*$/.test(t3.textContent || " "))
                e3.element.removeChild(t3);
              else
                break;
            [].forEach.call(e3.element.querySelectorAll("tspan.highcharts-br"), (t4, s2) => {
              t4.nextSibling && t4.previousSibling && (0 === s2 && 1 === t4.previousSibling.nodeType && (e3.firstLineMetrics = e3.renderer.fontMetrics(t4.previousSibling)), n(t4, { dy: this.getLineHeight(t4.nextSibling), x: i3 }));
            });
            let a2 = this.width || 0;
            if (!a2)
              return;
            let h2 = (t4, r2) => {
              let h3 = t4.textContent || "", l3 = h3.replace(/([^\^])-/g, "$1- ").split(" "), d2 = !this.noWrap && (l3.length > 1 || e3.element.childNodes.length > 1), c2 = this.getLineHeight(r2), p = 0, u = e3.actualWidth;
              if (this.ellipsis)
                h3 && this.truncate(t4, h3, void 0, 0, Math.max(0, a2 - 0.8 * c2), (t5, e4) => t5.substring(0, e4) + "…");
              else if (d2) {
                let h4 = [], d3 = [];
                for (; r2.firstChild && r2.firstChild !== t4; )
                  d3.push(r2.firstChild), r2.removeChild(r2.firstChild);
                for (; l3.length; )
                  l3.length && !this.noWrap && p > 0 && (h4.push(t4.textContent || ""), t4.textContent = l3.join(" ").replace(/- /g, "-")), this.truncate(t4, void 0, l3, 0 === p && u || 0, a2, (t5, e4) => l3.slice(0, e4).join(" ").replace(/- /g, "-")), u = e3.actualWidth, p++;
                d3.forEach((e4) => {
                  r2.insertBefore(e4, t4);
                }), h4.forEach((e4) => {
                  r2.insertBefore(s.createTextNode(e4), t4);
                  let a3 = s.createElementNS(o, "tspan");
                  a3.textContent = "​", n(a3, { dy: c2, x: i3 }), r2.insertBefore(a3, t4);
                });
              }
            }, l2 = (t4) => {
              let i4 = [].slice.call(t4.childNodes);
              i4.forEach((i5) => {
                i5.nodeType === r.Node.TEXT_NODE ? h2(i5, t4) : (-1 !== i5.className.baseVal.indexOf("highcharts-br") && (e3.actualWidth = 0), l2(i5));
              });
            };
            l2(e3.element);
          }
          getLineHeight(t3) {
            let e3 = t3.nodeType === r.Node.TEXT_NODE ? t3.parentElement : t3;
            return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e3 || this.svgElement.element).h;
          }
          modifyTree(t3) {
            let e3 = (i3, s2) => {
              let { attributes: o2 = {}, children: r2, style: n2 = {}, tagName: h2 } = i3, l2 = this.renderer.styledMode;
              if ("b" === h2 || "strong" === h2 ? l2 ? o2.class = "highcharts-strong" : n2.fontWeight = "bold" : ("i" === h2 || "em" === h2) && (l2 ? o2.class = "highcharts-emphasized" : n2.fontStyle = "italic"), n2 && n2.color && (n2.fill = n2.color), "br" === h2) {
                o2.class = "highcharts-br", i3.textContent = "​";
                let e4 = t3[s2 + 1];
                e4 && e4.textContent && (e4.textContent = e4.textContent.replace(/^ +/gm, ""));
              } else
                "a" === h2 && r2 && r2.some((t4) => "#text" === t4.tagName) && (i3.children = [{ children: r2, tagName: "tspan" }]);
              "#text" !== h2 && "a" !== h2 && (i3.tagName = "tspan"), a(i3, { attributes: o2, style: n2 }), r2 && r2.filter((t4) => "#text" !== t4.tagName).forEach(e3);
            };
            t3.forEach(e3), h(this.svgElement, "afterModifyTree", { nodes: t3 });
          }
          truncate(t3, e3, i3, s2, o2, r2) {
            let n2, a2;
            let h2 = this.svgElement, { renderer: l2, rotation: d2 } = h2, c2 = [], p = i3 ? 1 : 0, u = (e3 || i3 || "").length, g = u, f = function(e4, o3) {
              let r3 = o3 || e4, n3 = t3.parentNode;
              if (n3 && void 0 === c2[r3] && n3.getSubStringLength)
                try {
                  c2[r3] = s2 + n3.getSubStringLength(0, i3 ? r3 + 1 : r3);
                } catch (t4) {
                }
              return c2[r3];
            };
            if (h2.rotation = 0, s2 + (a2 = f(t3.textContent.length)) > o2) {
              for (; p <= u; )
                g = Math.ceil((p + u) / 2), i3 && (n2 = r2(i3, g)), a2 = f(g, n2 && n2.length - 1), p === u ? p = u + 1 : a2 > o2 ? u = g - 1 : p = g;
              0 === u ? t3.textContent = "" : e3 && u === e3.length - 1 || (t3.textContent = n2 || r2(e3 || i3, g));
            }
            i3 && i3.splice(0, g), h2.actualWidth = a2, h2.rotation = d2;
          }
          unescapeEntities(t3, e3) {
            return d(this.renderer.escapes, function(i3, s2) {
              e3 && -1 !== e3.indexOf(i3) || (t3 = t3.toString().replace(RegExp(i3, "g"), s2));
            }), t3;
          }
        };
      }), i(e, "Core/Renderer/SVG/SVGRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGLabel.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Renderer/SVG/TextBuilder.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a, h) {
        let l;
        let { charts: d, deg2rad: c, doc: p, isFirefox: u, isMS: g, isWebKit: f, noop: m, SVG_NS: x, symbolSizes: y, win: b } = i2, { addEvent: v, attr: k, createElement: S, css: M, defined: C, destroyObjectProperties: w, extend: T, isArray: A, isNumber: P, isObject: L, isString: O, merge: D, pick: E, pInt: I, uniqueKey: B } = h;
        class j {
          constructor(t3, e3, i3, s2, o2, r2, n2) {
            this.alignedObjects = void 0, this.box = void 0, this.boxWrapper = void 0, this.cache = void 0, this.cacheKeys = void 0, this.chartIndex = void 0, this.defs = void 0, this.globalAnimation = void 0, this.gradients = void 0, this.height = void 0, this.imgCount = void 0, this.style = void 0, this.url = void 0, this.width = void 0, this.init(t3, e3, i3, s2, o2, r2, n2);
          }
          init(t3, e3, i3, s2, o2, r2, n2) {
            let a2, h2;
            let l2 = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), d2 = l2.element;
            n2 || l2.css(this.getStyle(s2)), t3.appendChild(d2), k(t3, "dir", "ltr"), -1 === t3.innerHTML.indexOf("xmlns") && k(d2, "xmlns", this.SVG_NS), this.box = d2, this.boxWrapper = l2, this.alignedObjects = [], this.url = this.getReferenceURL();
            let c2 = this.createElement("desc").add();
            c2.element.appendChild(p.createTextNode("Created with Highcharts 11.2.0")), this.defs = this.createElement("defs").add(), this.allowHTML = r2, this.forExport = o2, this.styledMode = n2, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = l2.getStyle("font-size"), this.setSize(e3, i3, false), u && t3.getBoundingClientRect && ((a2 = function() {
              M(t3, { left: 0, top: 0 }), h2 = t3.getBoundingClientRect(), M(t3, { left: Math.ceil(h2.left) - h2.left + "px", top: Math.ceil(h2.top) - h2.top + "px" });
            })(), this.unSubPixelFix = v(b, "resize", a2));
          }
          definition(e3) {
            let i3 = new t2([e3]);
            return i3.addToDOM(this.defs.element);
          }
          getReferenceURL() {
            if ((u || f) && p.getElementsByTagName("base").length) {
              if (!C(l)) {
                let e3 = B(), i3 = new t2([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: e3 }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${e3})`, fill: "rgba(0,0,0,0.001)" } }] }]), s2 = i3.addToDOM(p.body);
                M(s2, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                let o2 = p.elementFromPoint(6, 6);
                l = "hitme" === (o2 && o2.id), p.body.removeChild(s2);
              }
              if (l)
                return b.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
            }
            return "";
          }
          getStyle(t3) {
            return this.style = T({ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "1rem" }, t3), this.style;
          }
          setStyle(t3) {
            this.boxWrapper.css(this.getStyle(t3));
          }
          isHidden() {
            return !this.boxWrapper.getBBox().width;
          }
          destroy() {
            let t3 = this.defs;
            return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), w(this.gradients || {}), this.gradients = null, this.defs = t3.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null;
          }
          createElement(t3) {
            let e3 = new this.Element();
            return e3.init(this, t3), e3;
          }
          getRadialAttr(t3, e3) {
            return { cx: t3[0] - t3[2] / 2 + (e3.cx || 0) * t3[2], cy: t3[1] - t3[2] / 2 + (e3.cy || 0) * t3[2], r: (e3.r || 0) * t3[2] };
          }
          shadowDefinition(t3) {
            let e3 = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t3).map((e4) => `${e4}-${t3[e4]}`)].join("-").toLowerCase().replace(/[^a-z0-9\-]/g, ""), i3 = D({ color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 5 }, t3);
            return this.defs.element.querySelector(`#${e3}`) || this.definition({ tagName: "filter", attributes: { id: e3, filterUnits: i3.filterUnits }, children: [{ tagName: "feDropShadow", attributes: { dx: i3.offsetX, dy: i3.offsetY, "flood-color": i3.color, "flood-opacity": Math.min(5 * i3.opacity, 1), stdDeviation: i3.width / 2 } }] }), e3;
          }
          buildText(t3) {
            new a(t3).buildSVG();
          }
          getContrast(t3) {
            let i3 = e2.parse(t3).rgba.map((t4) => {
              let e3 = t4 / 255;
              return e3 <= 0.03928 ? e3 / 12.92 : Math.pow((e3 + 0.055) / 1.055, 2.4);
            }), s2 = 0.2126 * i3[0] + 0.7152 * i3[1] + 0.0722 * i3[2];
            return 1.05 / (s2 + 0.05) > (s2 + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
          }
          button(e3, i3, s2, o2, r2 = {}, n2, a2, h2, l2, d2) {
            let c2, p2, u2;
            let f2 = this.label(e3, i3, s2, l2, void 0, void 0, d2, void 0, "button"), m2 = this.styledMode, x2 = r2.states || {}, y2 = 0;
            r2 = D(r2), delete r2.states;
            let b2 = D({ color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, r2.style);
            delete r2.style;
            let k2 = t2.filterUserAttributes(r2);
            return f2.attr(D({ padding: 8, r: 2 }, k2)), m2 || (k2 = D({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, k2), c2 = (n2 = D(k2, { fill: "#e6e6e6" }, t2.filterUserAttributes(n2 || x2.hover || {}))).style, delete n2.style, p2 = (a2 = D(k2, { fill: "#e6e9ff", style: { color: "#000000", fontWeight: "bold" } }, t2.filterUserAttributes(a2 || x2.select || {}))).style, delete a2.style, u2 = (h2 = D(k2, { style: { color: "#cccccc" } }, t2.filterUserAttributes(h2 || x2.disabled || {}))).style, delete h2.style), v(f2.element, g ? "mouseover" : "mouseenter", function() {
              3 !== y2 && f2.setState(1);
            }), v(f2.element, g ? "mouseout" : "mouseleave", function() {
              3 !== y2 && f2.setState(y2);
            }), f2.setState = function(t3) {
              if (1 !== t3 && (f2.state = y2 = t3), f2.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t3 || 0]), !m2) {
                f2.attr([k2, n2, a2, h2][t3 || 0]);
                let e4 = [b2, c2, p2, u2][t3 || 0];
                L(e4) && f2.css(e4);
              }
            }, !m2 && (f2.attr(k2).css(T({ cursor: "default" }, b2)), d2 && f2.text.css({ pointerEvents: "none" })), f2.on("touchstart", (t3) => t3.stopPropagation()).on("click", function(t3) {
              3 !== y2 && o2.call(f2, t3);
            });
          }
          crispLine(t3, e3, i3 = "round") {
            let s2 = t3[0], o2 = t3[1];
            return C(s2[1]) && s2[1] === o2[1] && (s2[1] = o2[1] = Math[i3](s2[1]) - e3 % 2 / 2), C(s2[2]) && s2[2] === o2[2] && (s2[2] = o2[2] = Math[i3](s2[2]) + e3 % 2 / 2), t3;
          }
          path(t3) {
            let e3 = this.styledMode ? {} : { fill: "none" };
            return A(t3) ? e3.d = t3 : L(t3) && T(e3, t3), this.createElement("path").attr(e3);
          }
          circle(t3, e3, i3) {
            let s2 = L(t3) ? t3 : void 0 === t3 ? {} : { x: t3, y: e3, r: i3 }, o2 = this.createElement("circle");
            return o2.xSetter = o2.ySetter = function(t4, e4, i4) {
              i4.setAttribute("c" + e4, t4);
            }, o2.attr(s2);
          }
          arc(t3, e3, i3, s2, o2, r2) {
            let n2;
            L(t3) ? (e3 = (n2 = t3).y, i3 = n2.r, s2 = n2.innerR, o2 = n2.start, r2 = n2.end, t3 = n2.x) : n2 = { innerR: s2, start: o2, end: r2 };
            let a2 = this.symbol("arc", t3, e3, i3, i3, n2);
            return a2.r = i3, a2;
          }
          rect(t3, e3, i3, s2, o2, r2) {
            let n2 = L(t3) ? t3 : void 0 === t3 ? {} : { x: t3, y: e3, r: o2, width: Math.max(i3 || 0, 0), height: Math.max(s2 || 0, 0) }, a2 = this.createElement("rect");
            return this.styledMode || (void 0 !== r2 && (n2["stroke-width"] = r2, T(n2, a2.crisp(n2))), n2.fill = "none"), a2.rSetter = function(t4, e4, i4) {
              a2.r = t4, k(i4, { rx: t4, ry: t4 });
            }, a2.rGetter = function() {
              return a2.r || 0;
            }, a2.attr(n2);
          }
          roundedRect(t3) {
            return this.symbol("roundedRect").attr(t3);
          }
          setSize(t3, e3, i3) {
            this.width = t3, this.height = e3, this.boxWrapper.animate({ width: t3, height: e3 }, { step: function() {
              this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
            }, duration: E(i3, true) ? void 0 : 0 }), this.alignElements();
          }
          g(t3) {
            let e3 = this.createElement("g");
            return t3 ? e3.attr({ class: "highcharts-" + t3 }) : e3;
          }
          image(t3, e3, i3, s2, o2, r2) {
            let n2 = { preserveAspectRatio: "none" };
            P(e3) && (n2.x = e3), P(i3) && (n2.y = i3), P(s2) && (n2.width = s2), P(o2) && (n2.height = o2);
            let a2 = this.createElement("image").attr(n2), h2 = function(e4) {
              a2.attr({ href: t3 }), r2.call(a2, e4);
            };
            if (r2) {
              a2.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
              let e4 = new b.Image();
              v(e4, "load", h2), e4.src = t3, e4.complete && h2({});
            } else
              a2.attr({ href: t3 });
            return a2;
          }
          symbol(t3, e3, i3, s2, o2, r2) {
            let n2, a2, h2, l2;
            let c2 = this, u2 = /^url\((.*?)\)$/, g2 = u2.test(t3), f2 = !g2 && (this.symbols[t3] ? t3 : "circle"), m2 = f2 && this.symbols[f2];
            if (m2)
              "number" == typeof e3 && (a2 = m2.call(this.symbols, Math.round(e3 || 0), Math.round(i3 || 0), s2 || 0, o2 || 0, r2)), n2 = this.path(a2), c2.styledMode || n2.attr("fill", "none"), T(n2, { symbolName: f2 || void 0, x: e3, y: i3, width: s2, height: o2 }), r2 && T(n2, r2);
            else if (g2) {
              h2 = t3.match(u2)[1];
              let s3 = n2 = this.image(h2);
              s3.imgwidth = E(r2 && r2.width, y[h2] && y[h2].width), s3.imgheight = E(r2 && r2.height, y[h2] && y[h2].height), l2 = (t4) => t4.attr({ width: t4.width, height: t4.height }), ["width", "height"].forEach((t4) => {
                s3[`${t4}Setter`] = function(t5, e4) {
                  this[e4] = t5;
                  let { alignByTranslate: i4, element: s4, width: o3, height: n3, imgwidth: a3, imgheight: h3 } = this, l3 = "width" === e4 ? a3 : h3, d2 = 1;
                  r2 && "within" === r2.backgroundSize && o3 && n3 && a3 && h3 ? (d2 = Math.min(o3 / a3, n3 / h3), k(s4, { width: Math.round(a3 * d2), height: Math.round(h3 * d2) })) : s4 && l3 && s4.setAttribute(e4, l3), !i4 && a3 && h3 && this.translate(((o3 || 0) - a3 * d2) / 2, ((n3 || 0) - h3 * d2) / 2);
                };
              }), C(e3) && s3.attr({ x: e3, y: i3 }), s3.isImg = true, C(s3.imgwidth) && C(s3.imgheight) ? l2(s3) : (s3.attr({ width: 0, height: 0 }), S("img", { onload: function() {
                let t4 = d[c2.chartIndex];
                0 === this.width && (M(this, { position: "absolute", top: "-999em" }), p.body.appendChild(this)), y[h2] = { width: this.width, height: this.height }, s3.imgwidth = this.width, s3.imgheight = this.height, s3.element && l2(s3), this.parentNode && this.parentNode.removeChild(this), c2.imgCount--, c2.imgCount || !t4 || t4.hasLoaded || t4.onload();
              }, src: h2 }), this.imgCount++);
            }
            return n2;
          }
          clipRect(t3, e3, i3, s2) {
            let o2 = B() + "-", r2 = this.createElement("clipPath").attr({ id: o2 }).add(this.defs), n2 = this.rect(t3, e3, i3, s2, 0).add(r2);
            return n2.id = o2, n2.clipPath = r2, n2.count = 0, n2;
          }
          text(t3, e3, i3, s2) {
            let o2 = {};
            if (s2 && (this.allowHTML || !this.forExport))
              return this.html(t3, e3, i3);
            o2.x = Math.round(e3 || 0), i3 && (o2.y = Math.round(i3)), C(t3) && (o2.text = t3);
            let r2 = this.createElement("text").attr(o2);
            return s2 && (!this.forExport || this.allowHTML) || (r2.xSetter = function(t4, e4, i4) {
              let s3 = i4.getElementsByTagName("tspan"), o3 = i4.getAttribute(e4);
              for (let i5 = 0, r3; i5 < s3.length; i5++)
                (r3 = s3[i5]).getAttribute(e4) === o3 && r3.setAttribute(e4, t4);
              i4.setAttribute(e4, t4);
            }), r2;
          }
          fontMetrics(t3) {
            let e3 = I(o.prototype.getStyle.call(t3, "font-size") || 0), i3 = e3 < 24 ? e3 + 3 : Math.round(1.2 * e3), s2 = Math.round(0.8 * i3);
            return { h: i3, b: s2, f: e3 };
          }
          rotCorr(t3, e3, i3) {
            let s2 = t3;
            return e3 && i3 && (s2 = Math.max(s2 * Math.cos(e3 * c), 4)), { x: -t3 / 3 * Math.sin(e3 * c), y: s2 };
          }
          pathToSegments(t3) {
            let e3 = [], i3 = [], s2 = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
            for (let o2 = 0; o2 < t3.length; o2++)
              O(i3[0]) && P(t3[o2]) && i3.length === s2[i3[0].toUpperCase()] && t3.splice(o2, 0, i3[0].replace("M", "L").replace("m", "l")), "string" == typeof t3[o2] && (i3.length && e3.push(i3.slice(0)), i3.length = 0), i3.push(t3[o2]);
            return e3.push(i3.slice(0)), e3;
          }
          label(t3, e3, i3, s2, o2, n2, a2, h2, l2) {
            return new r(this, t3, e3, i3, s2, o2, n2, a2, h2, l2);
          }
          alignElements() {
            this.alignedObjects.forEach((t3) => t3.align());
          }
        }
        return T(j.prototype, { Element: o, SVG_NS: x, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: n, draw: m }), s.registerRendererType("svg", j, true), j;
      }), i(e, "Core/Renderer/HTML/HTMLElement.js", [e["Core/Globals.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { isFirefox: s, isMS: o, isWebKit: r, win: n } = t2, { css: a, defined: h, extend: l, pick: d, pInt: c } = i2, p = [];
        class u extends e2 {
          static compose(t3) {
            if (i2.pushUnique(p, t3)) {
              let e3 = u.prototype, i3 = t3.prototype;
              i3.getSpanCorrection = e3.getSpanCorrection, i3.htmlCss = e3.htmlCss, i3.htmlGetBBox = e3.htmlGetBBox, i3.htmlUpdateTransform = e3.htmlUpdateTransform, i3.setSpanRotation = e3.setSpanRotation;
            }
            return t3;
          }
          getSpanCorrection(t3, e3, i3) {
            this.xCorr = -t3 * i3, this.yCorr = -e3;
          }
          htmlCss(t3) {
            let e3;
            let i3 = this.element, s2 = "SPAN" === i3.tagName && t3 && "width" in t3, o2 = d(s2 && t3.width, void 0);
            return s2 && (delete t3.width, this.textWidth = o2, e3 = true), t3 && "ellipsis" === t3.textOverflow && (t3.whiteSpace = "nowrap", t3.overflow = "hidden"), this.styles = l(this.styles, t3), a(this.element, t3), e3 && this.htmlUpdateTransform(), this;
          }
          htmlGetBBox() {
            let t3 = this.element;
            return { x: t3.offsetLeft, y: t3.offsetTop, width: t3.offsetWidth, height: t3.offsetHeight };
          }
          htmlUpdateTransform() {
            if (!this.added) {
              this.alignOnAdd = true;
              return;
            }
            let t3 = this.renderer, e3 = this.element, i3 = this.translateX || 0, s2 = this.translateY || 0, o2 = this.x || 0, r2 = this.y || 0, n2 = this.textAlign || "left", l2 = { left: 0, center: 0.5, right: 1 }[n2], d2 = this.styles, p2 = d2 && d2.whiteSpace;
            if (a(e3, { marginLeft: i3, marginTop: s2 }), "SPAN" === e3.tagName) {
              let i4 = this.rotation, s3 = this.textWidth && c(this.textWidth), d3 = [i4, n2, e3.innerHTML, this.textWidth, this.textAlign].join(","), u2, g = false;
              if (s3 !== this.oldTextWidth) {
                let t4 = this.textPxLength ? this.textPxLength : (a(e3, { width: "", whiteSpace: p2 || "nowrap" }), e3.offsetWidth);
                (s3 > this.oldTextWidth || t4 > s3) && (/[ \-]/.test(e3.textContent || e3.innerText) || "ellipsis" === e3.style.textOverflow) && (a(e3, { width: t4 > s3 || i4 ? s3 + "px" : "auto", display: "block", whiteSpace: p2 || "normal" }), this.oldTextWidth = s3, g = true);
              }
              this.hasBoxWidthChanged = g, d3 !== this.cTT && (u2 = t3.fontMetrics(e3).b, h(i4) && (i4 !== (this.oldRotation || 0) || n2 !== this.oldAlign) && this.setSpanRotation(i4, l2, u2), this.getSpanCorrection(!h(i4) && this.textPxLength || e3.offsetWidth, u2, l2, i4, n2)), a(e3, { left: o2 + (this.xCorr || 0) + "px", top: r2 + (this.yCorr || 0) + "px" }), this.cTT = d3, this.oldRotation = i4, this.oldAlign = n2;
            }
          }
          setSpanRotation(t3, e3, i3) {
            let h2 = {}, l2 = o && !/Edge/.test(n.navigator.userAgent) ? "-ms-transform" : r ? "-webkit-transform" : s ? "MozTransform" : n.opera ? "-o-transform" : void 0;
            l2 && (h2[l2] = h2.transform = "rotate(" + t3 + "deg)", h2[l2 + (s ? "Origin" : "-origin")] = h2.transformOrigin = 100 * e3 + "% " + i3 + "px", a(this.element, h2));
          }
        }
        return u;
      }), i(e, "Core/Renderer/HTML/HTMLRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        let { attr: o, createElement: r, extend: n, pick: a } = s, h = [];
        class l extends i2 {
          static compose(t3) {
            if (s.pushUnique(h, t3)) {
              let e3 = l.prototype, i3 = t3.prototype;
              i3.html = e3.html;
            }
            return t3;
          }
          html(i3, s2, h2) {
            let l2 = this.createElement("span"), d = l2.element, c = l2.renderer, p = function(t3, i4) {
              ["opacity", "visibility"].forEach(function(s3) {
                t3[s3 + "Setter"] = function(o2, r2, n2) {
                  let a2 = t3.div ? t3.div.style : i4;
                  e2.prototype[s3 + "Setter"].call(this, o2, r2, n2), a2 && (a2[r2] = o2);
                };
              }), t3.addedSetters = true;
            };
            return l2.textSetter = function(e3) {
              e3 !== this.textStr && (delete this.bBox, delete this.oldTextWidth, t2.setElementHTML(this.element, a(e3, "")), this.textStr = e3, l2.doTransform = true);
            }, p(l2, l2.element.style), l2.xSetter = l2.ySetter = l2.alignSetter = l2.rotationSetter = function(t3, e3) {
              "align" === e3 ? l2.alignValue = l2.textAlign = t3 : l2[e3] = t3, l2.doTransform = true;
            }, l2.afterSetters = function() {
              this.doTransform && (this.htmlUpdateTransform(), this.doTransform = false);
            }, l2.attr({ text: i3, x: Math.round(s2), y: Math.round(h2) }).css({ position: "absolute" }), c.styledMode || l2.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }), d.style.whiteSpace = "nowrap", l2.css = l2.htmlCss, l2.add = function(t3) {
              let e3, i4;
              let s3 = c.box.parentNode, a2 = [];
              if (this.parentGroup = t3, t3) {
                if (!(e3 = t3.div)) {
                  for (i4 = t3; i4; )
                    a2.push(i4), i4 = i4.parentGroup;
                  a2.reverse().forEach(function(t4) {
                    var i5;
                    let h3 = o(t4.element, "class"), d2 = t4.css;
                    function c2(e4, i6) {
                      t4[i6] = e4, "translateX" === i6 ? g.left = e4 + "px" : g.top = e4 + "px", t4.doTransform = true;
                    }
                    let u = t4.styles || {};
                    e3 = t4.div = t4.div || r("div", h3 ? { className: h3 } : void 0, { position: "absolute", left: (t4.translateX || 0) + "px", top: (t4.translateY || 0) + "px", display: t4.display, opacity: t4.opacity, visibility: t4.visibility }, e3 || s3);
                    let g = e3.style;
                    n(t4, { classSetter: (i5 = e3, function(t5) {
                      this.element.setAttribute("class", t5), i5.className = t5;
                    }), css: function(e4) {
                      return d2.call(t4, e4), ["cursor", "pointerEvents"].forEach((t5) => {
                        e4[t5] && (g[t5] = e4[t5]);
                      }), t4;
                    }, on: function() {
                      return a2[0].div && l2.on.apply({ element: a2[0].div, onEvents: t4.onEvents }, arguments), t4;
                    }, translateXSetter: c2, translateYSetter: c2 }), t4.addedSetters || p(t4), t4.css(u);
                  });
                }
              } else
                e3 = s3;
              return e3.appendChild(d), l2.added = true, l2.alignOnAdd && l2.htmlUpdateTransform(), l2;
            }, l2;
          }
        }
        return l;
      }), i(e, "Core/Axis/AxisDefaults.js", [], function() {
        var t2, e2;
        return (e2 = t2 || (t2 = {})).defaultXAxisOptions = { alignTicks: true, allowDecimals: void 0, panningEnabled: true, zIndex: 2, zoomEnabled: true, dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: false }, second: { main: "%H:%M:%S", range: false }, minute: { main: "%H:%M", range: false }, hour: { main: "%H:%M", range: false }, day: { main: "%e %b" }, week: { main: "%e %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } }, endOnTick: false, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotation: void 0, autoRotationLimit: 80, distance: 15, enabled: true, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: false, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em" } }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minorTicksPerMajor: 5, minPadding: 0.01, offset: void 0, opposite: false, reversed: void 0, reversedStacks: false, showEmpty: true, showFirstLabel: true, showLastLabel: true, startOfWeek: 1, startOnTick: false, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", rotation: 0, useHTML: false, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } }, type: "linear", uniqueNames: true, visible: true, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#333333", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#333333" }, e2.defaultYAxisOptions = { reversedStacks: true, endOnTick: true, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: true, labels: { x: void 0 }, startOnTick: true, title: { rotation: 270, text: "Values" }, stackLabels: { animation: {}, allowOverlap: false, enabled: false, crop: true, overflow: "justify", formatter: function() {
          let { numberFormatter: t3 } = this.axis.chart;
          return t3(this.total || 0, -1);
        }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 }, e2.defaultLeftAxisOptions = { title: { rotation: 270 } }, e2.defaultRightAxisOptions = { title: { rotation: 90 } }, e2.defaultBottomAxisOptions = { labels: { autoRotation: [-45] }, margin: 15, title: { rotation: 0 } }, e2.defaultTopAxisOptions = { labels: { autoRotation: [-45] }, margin: 15, title: { rotation: 0 } }, t2;
      }), i(e, "Core/Foundation.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { addEvent: i2, isFunction: s, objectEach: o, removeEvent: r } = t2;
        return (e2 || (e2 = {})).registerEventOptions = function(t3, e3) {
          t3.eventOptions = t3.eventOptions || {}, o(e3.events, function(e4, o2) {
            t3.eventOptions[o2] !== e4 && (t3.eventOptions[o2] && (r(t3, o2, t3.eventOptions[o2]), delete t3.eventOptions[o2]), s(e4) && (t3.eventOptions[o2] = e4, i2(t3, o2, e4, { order: 0 })));
          });
        }, e2;
      }), i(e, "Core/Axis/Tick.js", [e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { deg2rad: s } = e2, { clamp: o, correctFloat: r, defined: n, destroyObjectProperties: a, extend: h, fireEvent: l, isNumber: d, merge: c, objectEach: p, pick: u } = i2;
        return class {
          constructor(t3, e3, i3, s2, o2) {
            this.isNew = true, this.isNewLabel = true, this.axis = t3, this.pos = e3, this.type = i3 || "", this.parameters = o2 || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, l(this, "init"), i3 || s2 || this.addLabel();
          }
          addLabel() {
            let e3 = this, i3 = e3.axis, s2 = i3.options, o2 = i3.chart, a2 = i3.categories, c2 = i3.logarithmic, p2 = i3.names, g = e3.pos, f = u(e3.options && e3.options.labels, s2.labels), m = i3.tickPositions, x = g === m[0], y = g === m[m.length - 1], b = (!f.step || 1 === f.step) && 1 === i3.tickInterval, v = m.info, k = e3.label, S, M, C, w = this.parameters.category || (a2 ? u(a2[g], p2[g], g) : g);
            c2 && d(w) && (w = r(c2.lin2log(w))), i3.dateTime && (v ? S = (M = o2.time.resolveDTLFormat(s2.dateTimeLabelFormats[!s2.grid && v.higherRanks[g] || v.unitName])).main : d(w) && (S = i3.dateTime.getXDateFormat(w, s2.dateTimeLabelFormats || {}))), e3.isFirst = x, e3.isLast = y;
            let T = { axis: i3, chart: o2, dateTimeLabelFormat: S, isFirst: x, isLast: y, pos: g, tick: e3, tickPositionInfo: v, value: w };
            l(this, "labelFormat", T);
            let A = (e4) => f.formatter ? f.formatter.call(e4, e4) : f.format ? (e4.text = i3.defaultLabelFormatter.call(e4, e4), t2.format(f.format, e4, o2)) : i3.defaultLabelFormatter.call(e4, e4), P = A.call(T, T), L = M && M.list;
            L ? e3.shortenLabel = function() {
              for (C = 0; C < L.length; C++)
                if (h(T, { dateTimeLabelFormat: L[C] }), k.attr({ text: A.call(T, T) }), k.getBBox().width < i3.getSlotWidth(e3) - 2 * f.padding)
                  return;
              k.attr({ text: "" });
            } : e3.shortenLabel = void 0, b && i3._addedPlotLB && e3.moveLabel(P, f), n(k) || e3.movedLabel ? k && k.textStr !== P && !b && (!k.textWidth || f.style.width || k.styles.width || k.css({ width: null }), k.attr({ text: P }), k.textPxLength = k.getBBox().width) : (e3.label = k = e3.createLabel({ x: 0, y: 0 }, P, f), e3.rotation = 0);
          }
          createLabel(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.chart, r2 = n(e3) && i3.enabled ? o2.renderer.text(e3, t3.x, t3.y, i3.useHTML).add(s2.labelGroup) : null;
            return r2 && (o2.styledMode || r2.css(c(i3.style)), r2.textPxLength = r2.getBBox().width), r2;
          }
          destroy() {
            a(this, this.axis);
          }
          getPosition(t3, e3, i3, s2) {
            let n2 = this.axis, a2 = n2.chart, h2 = s2 && a2.oldChartHeight || a2.chartHeight, d2 = { x: t3 ? r(n2.translate(e3 + i3, void 0, void 0, s2) + n2.transB) : n2.left + n2.offset + (n2.opposite ? (s2 && a2.oldChartWidth || a2.chartWidth) - n2.right - n2.left : 0), y: t3 ? h2 - n2.bottom + n2.offset - (n2.opposite ? n2.height : 0) : r(h2 - n2.translate(e3 + i3, void 0, void 0, s2) - n2.transB) };
            return d2.y = o(d2.y, -1e5, 1e5), l(this, "afterGetPosition", { pos: d2 }), d2;
          }
          getLabelPosition(t3, e3, i3, o2, r2, a2, h2, d2) {
            let c2, p2;
            let g = this.axis, f = g.transA, m = g.isLinked && g.linkedParent ? g.linkedParent.reversed : g.reversed, x = g.staggerLines, y = g.tickRotCorr || { x: 0, y: 0 }, b = o2 || g.reserveSpaceDefault ? 0 : -g.labelOffset * ("center" === g.labelAlign ? 0.5 : 1), v = r2.distance, k = {};
            return c2 = 0 === g.side ? i3.rotation ? -v : -i3.getBBox().height : 2 === g.side ? y.y + v : Math.cos(i3.rotation * s) * (y.y - i3.getBBox(false, 0).height / 2), n(r2.y) && (c2 = 0 === g.side && g.horiz ? r2.y + c2 : r2.y), t3 = t3 + u(r2.x, [0, 1, 0, -1][g.side] * v) + b + y.x - (a2 && o2 ? a2 * f * (m ? -1 : 1) : 0), e3 = e3 + c2 - (a2 && !o2 ? a2 * f * (m ? 1 : -1) : 0), x && (p2 = h2 / (d2 || 1) % x, g.opposite && (p2 = x - p2 - 1), e3 += p2 * (g.labelOffset / x)), k.x = t3, k.y = Math.round(e3), l(this, "afterGetLabelPosition", { pos: k, tickmarkOffset: a2, index: h2 }), k;
          }
          getLabelSize() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
          }
          getMarkPath(t3, e3, i3, s2, o2, r2) {
            return r2.crispLine([["M", t3, e3], ["L", t3 + (o2 ? 0 : -i3), e3 + (o2 ? i3 : 0)]], s2);
          }
          handleOverflow(t3) {
            let e3 = this.axis, i3 = e3.options.labels, o2 = t3.x, r2 = e3.chart.chartWidth, n2 = e3.chart.spacing, a2 = u(e3.labelLeft, Math.min(e3.pos, n2[3])), h2 = u(e3.labelRight, Math.max(e3.isRadial ? 0 : e3.pos + e3.len, r2 - n2[1])), l2 = this.label, d2 = this.rotation, c2 = { left: 0, center: 0.5, right: 1 }[e3.labelAlign || l2.attr("align")], p2 = l2.getBBox().width, g = e3.getSlotWidth(this), f = {}, m = g, x = 1, y;
            d2 || "justify" !== i3.overflow ? d2 < 0 && o2 - c2 * p2 < a2 ? y = Math.round(o2 / Math.cos(d2 * s) - a2) : d2 > 0 && o2 + c2 * p2 > h2 && (y = Math.round((r2 - o2) / Math.cos(d2 * s))) : (o2 - c2 * p2 < a2 ? m = t3.x + m * (1 - c2) - a2 : o2 + (1 - c2) * p2 > h2 && (m = h2 - t3.x + m * c2, x = -1), (m = Math.min(g, m)) < g && "center" === e3.labelAlign && (t3.x += x * (g - m - c2 * (g - Math.min(p2, m)))), (p2 > m || e3.autoRotation && (l2.styles || {}).width) && (y = m)), y && (this.shortenLabel ? this.shortenLabel() : (f.width = Math.floor(y) + "px", (i3.style || {}).textOverflow || (f.textOverflow = "ellipsis"), l2.css(f)));
          }
          moveLabel(t3, e3) {
            let i3 = this, s2 = i3.label, o2 = i3.axis, r2 = false, n2;
            s2 && s2.textStr === t3 ? (i3.movedLabel = s2, r2 = true, delete i3.label) : p(o2.ticks, function(e4) {
              r2 || e4.isNew || e4 === i3 || !e4.label || e4.label.textStr !== t3 || (i3.movedLabel = e4.label, r2 = true, e4.labelPos = i3.movedLabel.xy, delete e4.label);
            }), !r2 && (i3.labelPos || s2) && (n2 = i3.labelPos || s2.xy, i3.movedLabel = i3.createLabel(n2, t3, e3), i3.movedLabel && i3.movedLabel.attr({ opacity: 0 }));
          }
          render(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.horiz, r2 = this.pos, n2 = u(this.tickmarkOffset, s2.tickmarkOffset), a2 = this.getPosition(o2, r2, n2, e3), h2 = a2.x, d2 = a2.y, c2 = o2 && h2 === s2.pos + s2.len || !o2 && d2 === s2.pos ? -1 : 1, p2 = u(i3, this.label && this.label.newOpacity, 1);
            i3 = u(i3, 1), this.isActive = true, this.renderGridLine(e3, i3, c2), this.renderMark(a2, i3, c2), this.renderLabel(a2, e3, p2, t3), this.isNew = false, l(this, "afterRender");
          }
          renderGridLine(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.options, r2 = {}, n2 = this.pos, a2 = this.type, h2 = u(this.tickmarkOffset, s2.tickmarkOffset), l2 = s2.chart.renderer, d2 = this.gridLine, c2, p2 = o2.gridLineWidth, g = o2.gridLineColor, f = o2.gridLineDashStyle;
            "minor" === this.type && (p2 = o2.minorGridLineWidth, g = o2.minorGridLineColor, f = o2.minorGridLineDashStyle), d2 || (s2.chart.styledMode || (r2.stroke = g, r2["stroke-width"] = p2 || 0, r2.dashstyle = f), a2 || (r2.zIndex = 1), t3 && (e3 = 0), this.gridLine = d2 = l2.path().attr(r2).addClass("highcharts-" + (a2 ? a2 + "-" : "") + "grid-line").add(s2.gridGroup)), d2 && (c2 = s2.getPlotLinePath({ value: n2 + h2, lineWidth: d2.strokeWidth() * i3, force: "pass", old: t3, acrossPanes: false })) && d2[t3 || this.isNew ? "attr" : "animate"]({ d: c2, opacity: e3 });
          }
          renderMark(t3, e3, i3) {
            let s2 = this.axis, o2 = s2.options, r2 = s2.chart.renderer, n2 = this.type, a2 = s2.tickSize(n2 ? n2 + "Tick" : "tick"), h2 = t3.x, l2 = t3.y, d2 = u(o2["minor" !== n2 ? "tickWidth" : "minorTickWidth"], !n2 && s2.isXAxis ? 1 : 0), c2 = o2["minor" !== n2 ? "tickColor" : "minorTickColor"], p2 = this.mark, g = !p2;
            a2 && (s2.opposite && (a2[0] = -a2[0]), p2 || (this.mark = p2 = r2.path().addClass("highcharts-" + (n2 ? n2 + "-" : "") + "tick").add(s2.axisGroup), s2.chart.styledMode || p2.attr({ stroke: c2, "stroke-width": d2 })), p2[g ? "attr" : "animate"]({ d: this.getMarkPath(h2, l2, a2[0], p2.strokeWidth() * i3, s2.horiz, r2), opacity: e3 }));
          }
          renderLabel(t3, e3, i3, s2) {
            let o2 = this.axis, r2 = o2.horiz, n2 = o2.options, a2 = this.label, h2 = n2.labels, l2 = h2.step, c2 = u(this.tickmarkOffset, o2.tickmarkOffset), p2 = t3.x, g = t3.y, f = true;
            a2 && d(p2) && (a2.xy = t3 = this.getLabelPosition(p2, g, a2, r2, h2, c2, s2, l2), (!this.isFirst || this.isLast || n2.showFirstLabel) && (!this.isLast || this.isFirst || n2.showLastLabel) ? !r2 || h2.step || h2.rotation || e3 || 0 === i3 || this.handleOverflow(t3) : f = false, l2 && s2 % l2 && (f = false), f && d(t3.y) ? (t3.opacity = i3, a2[this.isNewLabel ? "attr" : "animate"](t3).show(true), this.isNewLabel = false) : (a2.hide(), this.isNewLabel = true));
          }
          replaceMovedLabel() {
            let t3 = this.label, e3 = this.axis;
            t3 && !this.isNew && (t3.animate({ opacity: 0 }, void 0, t3.destroy), delete this.label), e3.isDirty = true, this.label = this.movedLabel, delete this.movedLabel;
          }
        };
      }), i(e, "Core/Axis/Axis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/AxisDefaults.js"], e["Core/Color/Color.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Axis/Tick.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a) {
        let { animObject: h } = t2, { defaultOptions: l } = s, { registerEventOptions: d } = o, { deg2rad: c } = r, { arrayMax: p, arrayMin: u, clamp: g, correctFloat: f, defined: m, destroyObjectProperties: x, erase: y, error: b, extend: v, fireEvent: k, getClosestDistance: S, insertItem: M, isArray: C, isNumber: w, isString: T, merge: A, normalizeTickInterval: P, objectEach: L, pick: O, relativeLength: D, removeEvent: E, splat: I, syncTimeout: B } = a, j = (t3, e3) => P(e3, void 0, void 0, O(t3.options.allowDecimals, e3 < 0.5 || void 0 !== t3.tickAmount), !!t3.tickAmount);
        class R {
          constructor(t3, e3, i3) {
            this.alternateBands = void 0, this.bottom = void 0, this.chart = void 0, this.closestPointRange = void 0, this.coll = void 0, this.eventOptions = void 0, this.hasNames = void 0, this.hasVisibleSeries = void 0, this.height = void 0, this.index = void 0, this.isLinked = void 0, this.labelEdge = void 0, this.labelFormatter = void 0, this.left = void 0, this.len = void 0, this.max = void 0, this.maxLabelLength = void 0, this.min = void 0, this.minorTickInterval = void 0, this.minorTicks = void 0, this.minPixelPadding = void 0, this.names = void 0, this.offset = void 0, this.options = void 0, this.overlap = void 0, this.paddedTicks = void 0, this.plotLinesAndBands = void 0, this.plotLinesAndBandsGroups = void 0, this.pointRange = void 0, this.pointRangePadding = void 0, this.pos = void 0, this.positiveValuesOnly = void 0, this.right = void 0, this.series = void 0, this.side = void 0, this.tickAmount = void 0, this.tickInterval = void 0, this.tickmarkOffset = void 0, this.tickPositions = void 0, this.tickRotCorr = void 0, this.ticks = void 0, this.top = void 0, this.transA = void 0, this.transB = void 0, this.translationSlope = void 0, this.userOptions = void 0, this.visible = void 0, this.width = void 0, this.zoomEnabled = void 0, this.init(t3, e3, i3);
          }
          init(t3, e3, i3 = this.coll) {
            let s2 = "xAxis" === i3;
            this.chart = t3, this.horiz = this.isZAxis || (t3.inverted ? !s2 : s2), this.isXAxis = s2, this.coll = i3, k(this, "init", { userOptions: e3 }), this.opposite = O(e3.opposite, this.opposite), this.side = O(e3.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e3);
            let o2 = this.options, r2 = o2.labels, n2 = o2.type;
            this.userOptions = e3, this.minPixelPadding = 0, this.reversed = O(o2.reversed, this.reversed), this.visible = o2.visible, this.zoomEnabled = o2.zoomEnabled, this.hasNames = "category" === n2 || true === o2.categories, this.categories = o2.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = m(o2.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = o2.minRange || o2.maxZoom, this.range = o2.range, this.offset = o2.offset || 0, this.max = null, this.min = null;
            let a2 = O(o2.crosshair, I(t3.options.tooltip.crosshairs)[s2 ? 0 : 1]);
            this.crosshair = true === a2 ? {} : a2, -1 === t3.axes.indexOf(this) && (s2 ? t3.axes.splice(t3.xAxis.length, 0, this) : t3.axes.push(this), M(this, t3[this.coll])), t3.orderItems(this.coll), this.series = this.series || [], t3.inverted && !this.isZAxis && s2 && void 0 === this.reversed && (this.reversed = true), this.labelRotation = w(r2.rotation) ? r2.rotation : void 0, d(this, o2), k(this, "afterInit");
          }
          setOptions(t3) {
            this.options = A(e2.defaultXAxisOptions, "yAxis" === this.coll && e2.defaultYAxisOptions, [e2.defaultTopAxisOptions, e2.defaultRightAxisOptions, e2.defaultBottomAxisOptions, e2.defaultLeftAxisOptions][this.side], A(l[this.coll], t3)), k(this, "afterSetOptions", { userOptions: t3 });
          }
          defaultLabelFormatter(t3) {
            let e3 = this.axis, i3 = this.chart, { numberFormatter: s2 } = i3, o2 = w(this.value) ? this.value : NaN, r2 = e3.chart.time, n2 = e3.categories, a2 = this.dateTimeLabelFormat, h2 = l.lang, d2 = h2.numericSymbols, c2 = h2.numericSymbolMagnitude || 1e3, p2 = e3.logarithmic ? Math.abs(o2) : e3.tickInterval, u2 = d2 && d2.length, g2, f2;
            if (n2)
              f2 = `${this.value}`;
            else if (a2)
              f2 = r2.dateFormat(a2, o2);
            else if (u2 && p2 >= 1e3)
              for (; u2-- && void 0 === f2; )
                p2 >= (g2 = Math.pow(c2, u2 + 1)) && 10 * o2 % g2 == 0 && null !== d2[u2] && 0 !== o2 && (f2 = s2(o2 / g2, -1) + d2[u2]);
            return void 0 === f2 && (f2 = Math.abs(o2) >= 1e4 ? s2(o2, -1) : s2(o2, -1, void 0, "")), f2;
          }
          getSeriesExtremes() {
            let t3;
            let e3 = this;
            e3.chart, k(this, "getSeriesExtremes", null, function() {
              e3.hasVisibleSeries = false, e3.dataMin = e3.dataMax = e3.threshold = null, e3.softThreshold = !e3.isXAxis, e3.series.forEach(function(i3) {
                if (i3.reserveSpace()) {
                  let s2 = i3.options, o2, r2 = s2.threshold, n2, a2;
                  if (e3.hasVisibleSeries = true, e3.positiveValuesOnly && r2 <= 0 && (r2 = null), e3.isXAxis)
                    (o2 = i3.xData) && o2.length && (o2 = e3.logarithmic ? o2.filter((t4) => t4 > 0) : o2, n2 = (t3 = i3.getXExtremes(o2)).min, a2 = t3.max, w(n2) || n2 instanceof Date || (o2 = o2.filter(w), n2 = (t3 = i3.getXExtremes(o2)).min, a2 = t3.max), o2.length && (e3.dataMin = Math.min(O(e3.dataMin, n2), n2), e3.dataMax = Math.max(O(e3.dataMax, a2), a2)));
                  else {
                    let t4 = i3.applyExtremes();
                    w(t4.dataMin) && (n2 = t4.dataMin, e3.dataMin = Math.min(O(e3.dataMin, n2), n2)), w(t4.dataMax) && (a2 = t4.dataMax, e3.dataMax = Math.max(O(e3.dataMax, a2), a2)), m(r2) && (e3.threshold = r2), (!s2.softThreshold || e3.positiveValuesOnly) && (e3.softThreshold = false);
                  }
                }
              });
            }), k(this, "afterGetSeriesExtremes");
          }
          translate(t3, e3, i3, s2, o2, r2) {
            let n2 = this.linkedParent || this, a2 = s2 && n2.old ? n2.old.min : n2.min;
            if (!w(a2))
              return NaN;
            let h2 = n2.minPixelPadding, l2 = (n2.isOrdinal || n2.brokenAxis && n2.brokenAxis.hasBreaks || n2.logarithmic && o2) && n2.lin2val, d2 = 1, c2 = 0, p2 = s2 && n2.old ? n2.old.transA : n2.transA, u2 = 0;
            if (p2 || (p2 = n2.transA), i3 && (d2 *= -1, c2 = n2.len), n2.reversed && (d2 *= -1, c2 -= d2 * (n2.sector || n2.len)), e3)
              u2 = (t3 = t3 * d2 + c2 - h2) / p2 + a2, l2 && (u2 = n2.lin2val(u2));
            else {
              l2 && (t3 = n2.val2lin(t3));
              let e4 = d2 * (t3 - a2) * p2;
              u2 = (n2.isRadial ? e4 : f(e4)) + c2 + d2 * h2 + (w(r2) ? p2 * r2 : 0);
            }
            return u2;
          }
          toPixels(t3, e3) {
            return this.translate(t3, false, !this.horiz, void 0, true) + (e3 ? 0 : this.pos);
          }
          toValue(t3, e3) {
            return this.translate(t3 - (e3 ? 0 : this.pos), true, !this.horiz, void 0, true);
          }
          getPlotLinePath(t3) {
            let e3 = this, i3 = e3.chart, s2 = e3.left, o2 = e3.top, r2 = t3.old, n2 = t3.value, a2 = t3.lineWidth, h2 = r2 && i3.oldChartHeight || i3.chartHeight, l2 = r2 && i3.oldChartWidth || i3.chartWidth, d2 = e3.transB, c2 = t3.translatedValue, p2 = t3.force, u2, f2, m2, x2, y2;
            function b2(t4, e4, i4) {
              return "pass" !== p2 && (t4 < e4 || t4 > i4) && (p2 ? t4 = g(t4, e4, i4) : y2 = true), t4;
            }
            let v2 = { value: n2, lineWidth: a2, old: r2, force: p2, acrossPanes: t3.acrossPanes, translatedValue: c2 };
            return k(this, "getPlotLinePath", v2, function(t4) {
              u2 = m2 = Math.round((c2 = g(c2 = O(c2, e3.translate(n2, void 0, void 0, r2)), -1e5, 1e5)) + d2), f2 = x2 = Math.round(h2 - c2 - d2), w(c2) ? e3.horiz ? (f2 = o2, x2 = h2 - e3.bottom, u2 = m2 = b2(u2, s2, s2 + e3.width)) : (u2 = s2, m2 = l2 - e3.right, f2 = x2 = b2(f2, o2, o2 + e3.height)) : (y2 = true, p2 = false), t4.path = y2 && !p2 ? void 0 : i3.renderer.crispLine([["M", u2, f2], ["L", m2, x2]], a2 || 1);
            }), v2.path || null;
          }
          getLinearTickPositions(t3, e3, i3) {
            let s2, o2, r2;
            let n2 = f(Math.floor(e3 / t3) * t3), a2 = f(Math.ceil(i3 / t3) * t3), h2 = [];
            if (f(n2 + t3) === n2 && (r2 = 20), this.single)
              return [e3];
            for (s2 = n2; s2 <= a2 && (h2.push(s2), (s2 = f(s2 + t3, r2)) !== o2); )
              o2 = s2;
            return h2;
          }
          getMinorTickInterval() {
            let t3 = this.options;
            return true === t3.minorTicks ? O(t3.minorTickInterval, "auto") : false === t3.minorTicks ? null : t3.minorTickInterval;
          }
          getMinorTickPositions() {
            let t3 = this.options, e3 = this.tickPositions, i3 = this.minorTickInterval, s2 = this.pointRangePadding || 0, o2 = this.min - s2, r2 = this.max + s2, n2 = r2 - o2, a2 = [], h2;
            if (n2 && n2 / i3 < this.len / 3) {
              let s3 = this.logarithmic;
              if (s3)
                this.paddedTicks.forEach(function(t4, e4, o3) {
                  e4 && a2.push.apply(a2, s3.getLogTickPositions(i3, o3[e4 - 1], o3[e4], true));
                });
              else if (this.dateTime && "auto" === this.getMinorTickInterval())
                a2 = a2.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i3), o2, r2, t3.startOfWeek));
              else
                for (h2 = o2 + (e3[0] - o2) % i3; h2 <= r2 && h2 !== a2[0]; h2 += i3)
                  a2.push(h2);
            }
            return 0 !== a2.length && this.trimTicks(a2), a2;
          }
          adjustForMinRange() {
            let t3 = this.options, e3 = this.logarithmic, i3 = this.min, s2 = this.max, o2, r2, n2, a2, h2, l2;
            this.isXAxis && void 0 === this.minRange && !e3 && (m(t3.min) || m(t3.max) || m(t3.floor) || m(t3.ceiling) ? this.minRange = null : (n2 = S(this.series.map((t4) => (t4.xIncrement ? t4.xData?.slice(0, 2) : t4.xData) || [])) || 0, this.minRange = Math.min(5 * n2, this.dataMax - this.dataMin))), s2 - i3 < this.minRange && (r2 = this.dataMax - this.dataMin >= this.minRange, o2 = ((l2 = this.minRange) - s2 + i3) / 2, a2 = [i3 - o2, O(t3.min, i3 - o2)], r2 && (a2[2] = e3 ? e3.log2lin(this.dataMin) : this.dataMin), h2 = [(i3 = p(a2)) + l2, O(t3.max, i3 + l2)], r2 && (h2[2] = e3 ? e3.log2lin(this.dataMax) : this.dataMax), (s2 = u(h2)) - i3 < l2 && (a2[0] = s2 - l2, a2[1] = O(t3.min, s2 - l2), i3 = p(a2))), this.min = i3, this.max = s2;
          }
          getClosest() {
            let t3, e3;
            if (this.categories)
              e3 = 1;
            else {
              let i3 = [];
              this.series.forEach(function(t4) {
                let s2 = t4.closestPointRange;
                t4.xData?.length === 1 ? i3.push(t4.xData[0]) : !t4.noSharedTooltip && m(s2) && t4.reserveSpace() && (e3 = m(e3) ? Math.min(e3, s2) : s2);
              }), i3.length && (i3.sort((t4, e4) => t4 - e4), t3 = S([i3]));
            }
            return t3 && e3 ? Math.min(t3, e3) : t3 || e3;
          }
          nameToX(t3) {
            let e3 = C(this.options.categories), i3 = e3 ? this.categories : this.names, s2 = t3.options.x, o2;
            return t3.series.requireSorting = false, m(s2) || (s2 = this.options.uniqueNames && i3 ? e3 ? i3.indexOf(t3.name) : O(i3.keys[t3.name], -1) : t3.series.autoIncrement()), -1 === s2 ? !e3 && i3 && (o2 = i3.length) : o2 = s2, void 0 !== o2 ? (this.names[o2] = t3.name, this.names.keys[t3.name] = o2) : t3.x && (o2 = t3.x), o2;
          }
          updateNames() {
            let t3 = this, e3 = this.names, i3 = e3.length;
            i3 > 0 && (Object.keys(e3.keys).forEach(function(t4) {
              delete e3.keys[t4];
            }), e3.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(e4) {
              e4.xIncrement = null, (!e4.points || e4.isDirtyData) && (t3.max = Math.max(t3.max, e4.xData.length - 1), e4.processData(), e4.generatePoints()), e4.data.forEach(function(i4, s2) {
                let o2;
                i4 && i4.options && void 0 !== i4.name && void 0 !== (o2 = t3.nameToX(i4)) && o2 !== i4.x && (i4.x = o2, e4.xData[s2] = o2);
              });
            }));
          }
          setAxisTranslation() {
            let t3 = this, e3 = t3.max - t3.min, i3 = t3.linkedParent, s2 = !!t3.categories, o2 = t3.isXAxis, r2 = t3.axisPointRange || 0, n2, a2 = 0, h2 = 0, l2, d2 = t3.transA;
            (o2 || s2 || r2) && (n2 = t3.getClosest(), i3 ? (a2 = i3.minPointOffset, h2 = i3.pointRangePadding) : t3.series.forEach(function(e4) {
              let i4 = s2 ? 1 : o2 ? O(e4.options.pointRange, n2, 0) : t3.axisPointRange || 0, l3 = e4.options.pointPlacement;
              if (r2 = Math.max(r2, i4), !t3.single || s2) {
                let t4 = e4.is("xrange") ? !o2 : o2;
                a2 = Math.max(a2, t4 && T(l3) ? 0 : i4 / 2), h2 = Math.max(h2, t4 && "on" === l3 ? 0 : i4);
              }
            }), l2 = t3.ordinal && t3.ordinal.slope && n2 ? t3.ordinal.slope / n2 : 1, t3.minPointOffset = a2 *= l2, t3.pointRangePadding = h2 *= l2, t3.pointRange = Math.min(r2, t3.single && s2 ? 1 : e3), o2 && n2 && (t3.closestPointRange = n2)), t3.translationSlope = t3.transA = d2 = t3.staticScale || t3.len / (e3 + h2 || 1), t3.transB = t3.horiz ? t3.left : t3.bottom, t3.minPixelPadding = d2 * a2, k(this, "afterSetAxisTranslation");
          }
          minFromRange() {
            return this.max - this.range;
          }
          setTickInterval(t3) {
            let e3 = this.chart, i3 = this.logarithmic, s2 = this.options, o2 = this.isXAxis, r2 = this.isLinked, n2 = s2.tickPixelInterval, a2 = this.categories, h2 = this.softThreshold, l2 = s2.maxPadding, d2 = s2.minPadding, c2, p2, u2 = w(s2.tickInterval) && s2.tickInterval >= 0 ? s2.tickInterval : void 0, g2 = w(this.threshold) ? this.threshold : null, x2, y2, v2, S2;
            if (this.dateTime || a2 || r2 || this.getTickAmount(), v2 = O(this.userMin, s2.min), S2 = O(this.userMax, s2.max), r2 ? (this.linkedParent = e3[this.coll][s2.linkedTo], p2 = this.linkedParent.getExtremes(), this.min = O(p2.min, p2.dataMin), this.max = O(p2.max, p2.dataMax), s2.type !== this.linkedParent.options.type && b(11, 1, e3)) : (h2 && m(g2) && (this.dataMin >= g2 ? (x2 = g2, d2 = 0) : this.dataMax <= g2 && (y2 = g2, l2 = 0)), this.min = O(v2, x2, this.dataMin), this.max = O(S2, y2, this.dataMax)), i3 && (this.positiveValuesOnly && !t3 && 0 >= Math.min(this.min, O(this.dataMin, this.min)) && b(10, 1, e3), this.min = f(i3.log2lin(this.min), 16), this.max = f(i3.log2lin(this.max), 16)), this.range && m(this.max) && (this.userMin = this.min = v2 = Math.max(this.dataMin, this.minFromRange()), this.userMax = S2 = this.max, this.range = null), k(this, "foundExtremes"), this.beforePadding && this.beforePadding(), this.adjustForMinRange(), !w(this.userMin) && w(s2.softMin) && s2.softMin < this.min && (this.min = v2 = s2.softMin), !w(this.userMax) && w(s2.softMax) && s2.softMax > this.max && (this.max = S2 = s2.softMax), !a2 && !this.axisPointRange && !(this.stacking && this.stacking.usePercentage) && !r2 && m(this.min) && m(this.max) && (c2 = this.max - this.min) && (!m(v2) && d2 && (this.min -= c2 * d2), !m(S2) && l2 && (this.max += c2 * l2)), !w(this.userMin) && w(s2.floor) && (this.min = Math.max(this.min, s2.floor)), !w(this.userMax) && w(s2.ceiling) && (this.max = Math.min(this.max, s2.ceiling)), h2 && m(this.dataMin) && (g2 = g2 || 0, !m(v2) && this.min < g2 && this.dataMin >= g2 ? this.min = this.options.minRange ? Math.min(g2, this.max - this.minRange) : g2 : !m(S2) && this.max > g2 && this.dataMax <= g2 && (this.max = this.options.minRange ? Math.max(g2, this.min + this.minRange) : g2)), w(this.min) && w(this.max) && !this.chart.polar && this.min > this.max && (m(this.options.min) ? this.max = this.min : m(this.options.max) && (this.min = this.max)), this.min === this.max || void 0 === this.min || void 0 === this.max ? this.tickInterval = 1 : r2 && this.linkedParent && !u2 && n2 === this.linkedParent.options.tickPixelInterval ? this.tickInterval = u2 = this.linkedParent.tickInterval : this.tickInterval = O(u2, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, a2 ? 1 : (this.max - this.min) * n2 / Math.max(this.len, n2)), o2 && !t3) {
              let t4 = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max);
              this.series.forEach(function(e4) {
                e4.forceCrop = e4.forceCropping && e4.forceCropping(), e4.processData(t4);
              }), k(this, "postProcessData", { hasExtremesChanged: t4 });
            }
            this.setAxisTranslation(), k(this, "initialAxisTranslation"), this.pointRange && !u2 && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
            let M2 = O(s2.minTickInterval, this.dateTime && !this.series.some((t4) => t4.noSharedTooltip) ? this.closestPointRange : 0);
            !u2 && this.tickInterval < M2 && (this.tickInterval = M2), this.dateTime || this.logarithmic || u2 || (this.tickInterval = j(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
          }
          setTickPositions() {
            let t3 = this.options, e3 = t3.tickPositions, i3 = t3.tickPositioner, s2 = this.getMinorTickInterval(), o2 = this.hasVerticalPanning(), r2 = "colorAxis" === this.coll, n2 = (r2 || !o2) && t3.startOnTick, a2 = (r2 || !o2) && t3.endOnTick, h2 = [], l2;
            if (this.tickmarkOffset = this.categories && "between" === t3.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0, this.minorTickInterval = "auto" === s2 && this.tickInterval ? this.tickInterval / t3.minorTicksPerMajor : s2, this.single = this.min === this.max && m(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || false !== t3.allowDecimals), e3)
              h2 = e3.slice();
            else if (w(this.min) && w(this.max)) {
              if ((!this.ordinal || !this.ordinal.positions) && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200))
                h2 = [this.min, this.max], b(19, false, this.chart);
              else if (this.dateTime)
                h2 = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t3.units), this.min, this.max, t3.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, true);
              else if (this.logarithmic)
                h2 = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
              else {
                let t4 = this.tickInterval, e4 = t4;
                for (; e4 <= 2 * t4; )
                  if (h2 = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && h2.length > this.tickAmount)
                    this.tickInterval = j(this, e4 *= 1.1);
                  else
                    break;
              }
              h2.length > this.len && (h2 = [h2[0], h2[h2.length - 1]])[0] === h2[1] && (h2.length = 1), i3 && (this.tickPositions = h2, (l2 = i3.apply(this, [this.min, this.max])) && (h2 = l2));
            }
            this.tickPositions = h2, this.paddedTicks = h2.slice(0), this.trimTicks(h2, n2, a2), !this.isLinked && w(this.min) && w(this.max) && (this.single && h2.length < 2 && !this.categories && !this.series.some((t4) => t4.is("heatmap") && "between" === t4.options.pointPlacement) && (this.min -= 0.5, this.max += 0.5), e3 || l2 || this.adjustTickAmount()), k(this, "afterSetTickPositions");
          }
          trimTicks(t3, e3, i3) {
            let s2 = t3[0], o2 = t3[t3.length - 1], r2 = !this.isOrdinal && this.minPointOffset || 0;
            if (k(this, "trimTicks"), !this.isLinked) {
              if (e3 && s2 !== -1 / 0)
                this.min = s2;
              else
                for (; this.min - r2 > t3[0]; )
                  t3.shift();
              if (i3)
                this.max = o2;
              else
                for (; this.max + r2 < t3[t3.length - 1]; )
                  t3.pop();
              0 === t3.length && m(s2) && !this.options.tickPositions && t3.push((o2 + s2) / 2);
            }
          }
          alignToOthers() {
            let t3;
            let e3 = this, i3 = [this], s2 = e3.options, o2 = "yAxis" === this.coll && this.chart.options.chart.alignThresholds, r2 = [];
            if (e3.thresholdAlignment = void 0, (false !== this.chart.options.chart.alignTicks && s2.alignTicks || o2) && false !== s2.startOnTick && false !== s2.endOnTick && !e3.logarithmic) {
              let s3 = (t4) => {
                let { horiz: e4, options: i4 } = t4;
                return [e4 ? i4.left : i4.top, i4.width, i4.height, i4.pane].join(",");
              }, o3 = s3(this);
              this.chart[this.coll].forEach(function(r3) {
                let { series: n2 } = r3;
                n2.length && n2.some((t4) => t4.visible) && r3 !== e3 && s3(r3) === o3 && (t3 = true, i3.push(r3));
              });
            }
            if (t3 && o2) {
              i3.forEach((t5) => {
                let i4 = t5.getThresholdAlignment(e3);
                w(i4) && r2.push(i4);
              });
              let t4 = r2.length > 1 ? r2.reduce((t5, e4) => t5 += e4, 0) / r2.length : void 0;
              i3.forEach((e4) => {
                e4.thresholdAlignment = t4;
              });
            }
            return t3;
          }
          getThresholdAlignment(t3) {
            if ((!w(this.dataMin) || this !== t3 && this.series.some((t4) => t4.isDirty || t4.isDirtyData)) && this.getSeriesExtremes(), w(this.threshold)) {
              let t4 = g((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
              return this.options.reversed && (t4 = 1 - t4), t4;
            }
          }
          getTickAmount() {
            let t3 = this.options, e3 = t3.tickPixelInterval, i3 = t3.tickAmount;
            m(t3.tickInterval) || i3 || !(this.len < e3) || this.isRadial || this.logarithmic || !t3.startOnTick || !t3.endOnTick || (i3 = 2), !i3 && this.alignToOthers() && (i3 = Math.ceil(this.len / e3) + 1), i3 < 4 && (this.finalTickAmt = i3, i3 = 5), this.tickAmount = i3;
          }
          adjustTickAmount() {
            let t3 = this, { finalTickAmt: e3, max: i3, min: s2, options: o2, tickPositions: r2, tickAmount: n2, thresholdAlignment: a2 } = t3, h2 = r2 && r2.length, l2 = O(t3.threshold, t3.softThreshold ? 0 : null), d2, c2, p2 = t3.tickInterval, u2, g2 = () => r2.push(f(r2[r2.length - 1] + p2)), x2 = () => r2.unshift(f(r2[0] - p2));
            if (w(a2) && (u2 = a2 < 0.5 ? Math.ceil(a2 * (n2 - 1)) : Math.floor(a2 * (n2 - 1)), o2.reversed && (u2 = n2 - 1 - u2)), t3.hasData() && w(s2) && w(i3)) {
              let a3 = () => {
                t3.transA *= (h2 - 1) / (n2 - 1), t3.min = o2.startOnTick ? r2[0] : Math.min(s2, r2[0]), t3.max = o2.endOnTick ? r2[r2.length - 1] : Math.max(i3, r2[r2.length - 1]);
              };
              if (w(u2) && w(t3.threshold)) {
                for (; r2[u2] !== l2 || r2.length !== n2 || r2[0] > s2 || r2[r2.length - 1] < i3; ) {
                  for (r2.length = 0, r2.push(t3.threshold); r2.length < n2; )
                    void 0 === r2[u2] || r2[u2] > t3.threshold ? x2() : g2();
                  if (p2 > 8 * t3.tickInterval)
                    break;
                  p2 *= 2;
                }
                a3();
              } else if (h2 < n2) {
                for (; r2.length < n2; )
                  r2.length % 2 || s2 === l2 ? g2() : x2();
                a3();
              }
              if (m(e3)) {
                for (c2 = d2 = r2.length; c2--; )
                  (3 === e3 && c2 % 2 == 1 || e3 <= 2 && c2 > 0 && c2 < d2 - 1) && r2.splice(c2, 1);
                t3.finalTickAmt = void 0;
              }
            }
          }
          setScale() {
            let { coll: t3, stacking: e3 } = this, i3 = false, s2 = false;
            this.series.forEach((t4) => {
              i3 = i3 || t4.isDirtyData || t4.isDirty, s2 = s2 || t4.xAxis && t4.xAxis.isDirty || false;
            }), this.setAxisSize();
            let o2 = this.len !== (this.old && this.old.len);
            o2 || i3 || s2 || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (e3 && "yAxis" === t3 && e3.buildStacks(), this.forceRedraw = false, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e3 && "xAxis" === t3 && e3.buildStacks(), this.isDirty || (this.isDirty = o2 || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : e3 && e3.cleanStacks(), i3 && this.panningState && (this.panningState.isDirty = true), k(this, "afterSetScale");
          }
          setExtremes(t3, e3, i3, s2, o2) {
            let r2 = this, n2 = r2.chart;
            i3 = O(i3, true), r2.series.forEach(function(t4) {
              delete t4.kdTree;
            }), k(r2, "setExtremes", o2 = v(o2, { min: t3, max: e3 }), function() {
              r2.userMin = t3, r2.userMax = e3, r2.eventArgs = o2, i3 && n2.redraw(s2);
            });
          }
          zoom(t3, e3) {
            let i3 = this, s2 = this.dataMin, o2 = this.dataMax, r2 = this.options, n2 = Math.min(s2, O(r2.min, s2)), a2 = Math.max(o2, O(r2.max, o2)), h2 = { newMin: t3, newMax: e3 };
            return k(this, "zoom", h2, function(t4) {
              let e4 = t4.newMin, r3 = t4.newMax;
              (e4 !== i3.min || r3 !== i3.max) && (!i3.allowZoomOutside && (m(s2) && (e4 < n2 && (e4 = n2), e4 > a2 && (e4 = a2)), m(o2) && (r3 < n2 && (r3 = n2), r3 > a2 && (r3 = a2))), i3.displayBtn = void 0 !== e4 || void 0 !== r3, i3.setExtremes(e4, r3, false, void 0, { trigger: "zoom" })), t4.zoomed = true;
            }), h2.zoomed;
          }
          setAxisSize() {
            let t3 = this.chart, e3 = this.options, i3 = e3.offsets || [0, 0, 0, 0], s2 = this.horiz, o2 = this.width = Math.round(D(O(e3.width, t3.plotWidth - i3[3] + i3[1]), t3.plotWidth)), r2 = this.height = Math.round(D(O(e3.height, t3.plotHeight - i3[0] + i3[2]), t3.plotHeight)), n2 = this.top = Math.round(D(O(e3.top, t3.plotTop + i3[0]), t3.plotHeight, t3.plotTop)), a2 = this.left = Math.round(D(O(e3.left, t3.plotLeft + i3[3]), t3.plotWidth, t3.plotLeft));
            this.bottom = t3.chartHeight - r2 - n2, this.right = t3.chartWidth - o2 - a2, this.len = Math.max(s2 ? o2 : r2, 0), this.pos = s2 ? a2 : n2;
          }
          getExtremes() {
            let t3 = this.logarithmic;
            return { min: t3 ? f(t3.lin2log(this.min)) : this.min, max: t3 ? f(t3.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
          }
          getThreshold(t3) {
            let e3 = this.logarithmic, i3 = e3 ? e3.lin2log(this.min) : this.min, s2 = e3 ? e3.lin2log(this.max) : this.max;
            return null === t3 || t3 === -1 / 0 ? t3 = i3 : t3 === 1 / 0 ? t3 = s2 : i3 > t3 ? t3 = i3 : s2 < t3 && (t3 = s2), this.translate(t3, 0, 1, 0, 1);
          }
          autoLabelAlign(t3) {
            let e3 = (O(t3, 0) - 90 * this.side + 720) % 360, i3 = { align: "center" };
            return k(this, "autoLabelAlign", i3, function(t4) {
              e3 > 15 && e3 < 165 ? t4.align = "right" : e3 > 195 && e3 < 345 && (t4.align = "left");
            }), i3.align;
          }
          tickSize(t3) {
            let e3 = this.options, i3 = O(e3["tick" === t3 ? "tickWidth" : "minorTickWidth"], "tick" === t3 && this.isXAxis && !this.categories ? 1 : 0), s2 = e3["tick" === t3 ? "tickLength" : "minorTickLength"], o2;
            i3 && s2 && ("inside" === e3[t3 + "Position"] && (s2 = -s2), o2 = [s2, i3]);
            let r2 = { tickSize: o2 };
            return k(this, "afterTickSize", r2), r2.tickSize;
          }
          labelMetrics() {
            let t3 = this.chart.renderer, e3 = this.ticks, i3 = e3[Object.keys(e3)[0]] || {};
            return this.chart.renderer.fontMetrics(i3.label || i3.movedLabel || t3.box);
          }
          unsquish() {
            let t3 = this.options.labels, e3 = this.horiz, i3 = this.tickInterval, s2 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / i3), o2 = t3.rotation, r2 = 0.75 * this.labelMetrics().h, n2 = Math.max(this.max - this.min, 0), a2 = function(t4) {
              let e4 = t4 / (s2 || 1);
              return (e4 = e4 > 1 ? Math.ceil(e4) : 1) * i3 > n2 && t4 !== 1 / 0 && s2 !== 1 / 0 && n2 && (e4 = Math.ceil(n2 / i3)), f(e4 * i3);
            }, h2 = i3, l2, d2 = Number.MAX_VALUE, p2;
            if (e3) {
              if (!t3.staggerLines && (w(o2) ? p2 = [o2] : s2 < t3.autoRotationLimit && (p2 = t3.autoRotation)), p2) {
                let t4, e4;
                for (let i4 of p2)
                  (i4 === o2 || i4 && i4 >= -90 && i4 <= 90) && (e4 = (t4 = a2(Math.abs(r2 / Math.sin(c * i4)))) + Math.abs(i4 / 360)) < d2 && (d2 = e4, l2 = i4, h2 = t4);
              }
            } else
              h2 = a2(r2);
            return this.autoRotation = p2, this.labelRotation = O(l2, w(o2) ? o2 : 0), t3.step ? i3 : h2;
          }
          getSlotWidth(t3) {
            let e3 = this.chart, i3 = this.horiz, s2 = this.options.labels, o2 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), r2 = e3.margin[3];
            if (t3 && w(t3.slotWidth))
              return t3.slotWidth;
            if (i3 && s2.step < 2)
              return s2.rotation ? 0 : (this.staggerLines || 1) * this.len / o2;
            if (!i3) {
              let t4 = s2.style.width;
              if (void 0 !== t4)
                return parseInt(String(t4), 10);
              if (r2)
                return r2 - e3.spacing[3];
            }
            return 0.33 * e3.chartWidth;
          }
          renderUnsquish() {
            let t3 = this.chart, e3 = t3.renderer, i3 = this.tickPositions, s2 = this.ticks, o2 = this.options.labels, r2 = o2.style, n2 = this.horiz, a2 = this.getSlotWidth(), h2 = Math.max(1, Math.round(a2 - 2 * o2.padding)), l2 = {}, d2 = this.labelMetrics(), c2 = r2.textOverflow, p2, u2, g2 = 0, f2, m2;
            if (T(o2.rotation) || (l2.rotation = o2.rotation || 0), i3.forEach(function(t4) {
              let e4 = s2[t4];
              e4.movedLabel && e4.replaceMovedLabel(), e4 && e4.label && e4.label.textPxLength > g2 && (g2 = e4.label.textPxLength);
            }), this.maxLabelLength = g2, this.autoRotation)
              g2 > h2 && g2 > d2.h ? l2.rotation = this.labelRotation : this.labelRotation = 0;
            else if (a2 && (p2 = h2, !c2))
              for (u2 = "clip", m2 = i3.length; !n2 && m2--; )
                (f2 = s2[i3[m2]].label) && (f2.styles && "ellipsis" === f2.styles.textOverflow ? f2.css({ textOverflow: "clip" }) : f2.textPxLength > a2 && f2.css({ width: a2 + "px" }), f2.getBBox().height > this.len / i3.length - (d2.h - d2.f) && (f2.specificTextOverflow = "ellipsis"));
            l2.rotation && (p2 = g2 > 0.5 * t3.chartHeight ? 0.33 * t3.chartHeight : g2, c2 || (u2 = "ellipsis")), this.labelAlign = o2.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (l2.align = this.labelAlign), i3.forEach(function(t4) {
              let e4 = s2[t4], i4 = e4 && e4.label, o3 = r2.width, n3 = {};
              i4 && (i4.attr(l2), e4.shortenLabel ? e4.shortenLabel() : p2 && !o3 && "nowrap" !== r2.whiteSpace && (p2 < i4.textPxLength || "SPAN" === i4.element.tagName) ? (n3.width = p2 + "px", c2 || (n3.textOverflow = i4.specificTextOverflow || u2), i4.css(n3)) : i4.styles && i4.styles.width && !n3.width && !o3 && i4.css({ width: null }), delete i4.specificTextOverflow, e4.rotation = l2.rotation);
            }, this), this.tickRotCorr = e3.rotCorr(d2.b, this.labelRotation || 0, 0 !== this.side);
          }
          hasData() {
            return this.series.some(function(t3) {
              return t3.hasData();
            }) || this.options.showEmpty && m(this.min) && m(this.max);
          }
          addTitle(t3) {
            let e3;
            let i3 = this.chart.renderer, s2 = this.horiz, o2 = this.opposite, r2 = this.options, n2 = r2.title, a2 = this.chart.styledMode;
            this.axisTitle || ((e3 = n2.textAlign) || (e3 = (s2 ? { low: "left", middle: "center", high: "right" } : { low: o2 ? "right" : "left", middle: "center", high: o2 ? "left" : "right" })[n2.align]), this.axisTitle = i3.text(n2.text || "", 0, 0, n2.useHTML).attr({ zIndex: 7, rotation: n2.rotation, align: e3 }).addClass("highcharts-axis-title"), a2 || this.axisTitle.css(A(n2.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = true), a2 || n2.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[t3 ? "show" : "hide"](t3);
          }
          generateTick(t3) {
            let e3 = this.ticks;
            e3[t3] ? e3[t3].addLabel() : e3[t3] = new n(this, t3);
          }
          getOffset() {
            let t3 = this, { chart: e3, horiz: i3, options: s2, side: o2, ticks: r2, tickPositions: n2, coll: a2, axisParent: h2 } = t3, l2 = e3.renderer, d2 = e3.inverted && !t3.isZAxis ? [1, 0, 3, 2][o2] : o2, c2 = t3.hasData(), p2 = s2.title, u2 = s2.labels, g2 = w(s2.crossing), f2 = e3.axisOffset, x2 = e3.clipOffset, y2 = [-1, 1, 1, -1][o2], b2 = s2.className, v2, S2 = 0, M2, C2 = 0, T2 = 0, A2, P2;
            if (t3.showAxis = v2 = c2 || s2.showEmpty, t3.staggerLines = t3.horiz && u2.staggerLines || void 0, !t3.axisGroup) {
              let e4 = (t4, e5, i4) => l2.g(t4).attr({ zIndex: i4 }).addClass(`highcharts-${a2.toLowerCase()}${e5} ` + (this.isRadial ? `highcharts-radial-axis${e5} ` : "") + (b2 || "")).add(h2);
              t3.gridGroup = e4("grid", "-grid", s2.gridZIndex), t3.axisGroup = e4("axis", "", s2.zIndex), t3.labelGroup = e4("axis-labels", "-labels", u2.zIndex);
            }
            if (c2 || t3.isLinked ? (n2.forEach(function(e4) {
              t3.generateTick(e4);
            }), t3.renderUnsquish(), t3.reserveSpaceDefault = 0 === o2 || 2 === o2 || { 1: "left", 3: "right" }[o2] === t3.labelAlign, O(u2.reserveSpace, !g2 && null, "center" === t3.labelAlign || null, t3.reserveSpaceDefault) && n2.forEach(function(t4) {
              T2 = Math.max(r2[t4].getLabelSize(), T2);
            }), t3.staggerLines && (T2 *= t3.staggerLines), t3.labelOffset = T2 * (t3.opposite ? -1 : 1)) : L(r2, function(t4, e4) {
              t4.destroy(), delete r2[e4];
            }), p2 && p2.text && false !== p2.enabled && (t3.addTitle(v2), v2 && !g2 && false !== p2.reserveSpace && (t3.titleOffset = S2 = t3.axisTitle.getBBox()[i3 ? "height" : "width"], C2 = m(M2 = p2.offset) ? 0 : O(p2.margin, i3 ? 5 : 10))), t3.renderLine(), t3.offset = y2 * O(s2.offset, f2[o2] ? f2[o2] + (s2.margin || 0) : 0), t3.tickRotCorr = t3.tickRotCorr || { x: 0, y: 0 }, P2 = 0 === o2 ? -t3.labelMetrics().h : 2 === o2 ? t3.tickRotCorr.y : 0, A2 = Math.abs(T2) + C2, T2 && (A2 -= P2, A2 += y2 * (i3 ? O(u2.y, t3.tickRotCorr.y + y2 * u2.distance) : O(u2.x, y2 * u2.distance))), t3.axisTitleMargin = O(M2, A2), t3.getMaxLabelDimensions && (t3.maxLabelDimensions = t3.getMaxLabelDimensions(r2, n2)), "colorAxis" !== a2) {
              let e4 = this.tickSize("tick");
              f2[o2] = Math.max(f2[o2], (t3.axisTitleMargin || 0) + S2 + y2 * t3.offset, A2, n2 && n2.length && e4 ? e4[0] + y2 * t3.offset : 0);
              let i4 = !t3.axisLine || s2.offset ? 0 : 2 * Math.floor(t3.axisLine.strokeWidth() / 2);
              x2[d2] = Math.max(x2[d2], i4);
            }
            k(this, "afterGetOffset");
          }
          getLinePath(t3) {
            let e3 = this.chart, i3 = this.opposite, s2 = this.offset, o2 = this.horiz, r2 = this.left + (i3 ? this.width : 0) + s2, n2 = e3.chartHeight - this.bottom - (i3 ? this.height : 0) + s2;
            return i3 && (t3 *= -1), e3.renderer.crispLine([["M", o2 ? this.left : r2, o2 ? n2 : this.top], ["L", o2 ? e3.chartWidth - this.right : r2, o2 ? n2 : e3.chartHeight - this.bottom]], t3);
          }
          renderLine() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
          }
          getTitlePosition(t3) {
            let e3 = this.horiz, i3 = this.left, s2 = this.top, o2 = this.len, r2 = this.options.title, n2 = e3 ? i3 : s2, a2 = this.opposite, h2 = this.offset, l2 = r2.x, d2 = r2.y, c2 = this.chart.renderer.fontMetrics(t3), p2 = t3 ? Math.max(t3.getBBox(false, 0).height - c2.h - 1, 0) : 0, u2 = { low: n2 + (e3 ? 0 : o2), middle: n2 + o2 / 2, high: n2 + (e3 ? o2 : 0) }[r2.align], g2 = (e3 ? s2 + this.height : i3) + (e3 ? 1 : -1) * (a2 ? -1 : 1) * (this.axisTitleMargin || 0) + [-p2, p2, c2.f, -p2][this.side], f2 = { x: e3 ? u2 + l2 : g2 + (a2 ? this.width : 0) + h2 + l2, y: e3 ? g2 + d2 - (a2 ? this.height : 0) + h2 : u2 + d2 };
            return k(this, "afterGetTitlePosition", { titlePosition: f2 }), f2;
          }
          renderMinorTick(t3, e3) {
            let i3 = this.minorTicks;
            i3[t3] || (i3[t3] = new n(this, t3, "minor")), e3 && i3[t3].isNew && i3[t3].render(null, true), i3[t3].render(null, false, 1);
          }
          renderTick(t3, e3, i3) {
            let s2 = this.isLinked, o2 = this.ticks;
            (!s2 || t3 >= this.min && t3 <= this.max || this.grid && this.grid.isColumn) && (o2[t3] || (o2[t3] = new n(this, t3)), i3 && o2[t3].isNew && o2[t3].render(e3, true, -1), o2[t3].render(e3));
          }
          render() {
            let t3, e3;
            let i3 = this, s2 = i3.chart, o2 = i3.logarithmic, a2 = s2.renderer, l2 = i3.options, d2 = i3.isLinked, c2 = i3.tickPositions, p2 = i3.axisTitle, u2 = i3.ticks, g2 = i3.minorTicks, f2 = i3.alternateBands, m2 = l2.stackLabels, x2 = l2.alternateGridColor, y2 = l2.crossing, b2 = i3.tickmarkOffset, v2 = i3.axisLine, S2 = i3.showAxis, M2 = h(a2.globalAnimation);
            if (i3.labelEdge.length = 0, i3.overlap = false, [u2, g2, f2].forEach(function(t4) {
              L(t4, function(t5) {
                t5.isActive = false;
              });
            }), w(y2)) {
              let t4 = this.isXAxis ? s2.yAxis[0] : s2.xAxis[0], e4 = [1, -1, -1, 1][this.side];
              if (t4) {
                let s3 = t4.toPixels(y2, true);
                i3.horiz && (s3 = t4.len - s3), i3.offset = e4 * s3;
              }
            }
            if (i3.hasData() || d2) {
              let a3 = i3.chart.hasRendered && i3.old && w(i3.old.min);
              i3.minorTickInterval && !i3.categories && i3.getMinorTickPositions().forEach(function(t4) {
                i3.renderMinorTick(t4, a3);
              }), c2.length && (c2.forEach(function(t4, e4) {
                i3.renderTick(t4, e4, a3);
              }), b2 && (0 === i3.min || i3.single) && (u2[-1] || (u2[-1] = new n(i3, -1, null, true)), u2[-1].render(-1))), x2 && c2.forEach(function(n2, a4) {
                e3 = void 0 !== c2[a4 + 1] ? c2[a4 + 1] + b2 : i3.max - b2, a4 % 2 == 0 && n2 < i3.max && e3 <= i3.max + (s2.polar ? -b2 : b2) && (f2[n2] || (f2[n2] = new r.PlotLineOrBand(i3)), t3 = n2 + b2, f2[n2].options = { from: o2 ? o2.lin2log(t3) : t3, to: o2 ? o2.lin2log(e3) : e3, color: x2, className: "highcharts-alternate-grid" }, f2[n2].render(), f2[n2].isActive = true);
              }), i3._addedPlotLB || (i3._addedPlotLB = true, (l2.plotLines || []).concat(l2.plotBands || []).forEach(function(t4) {
                i3.addPlotBandOrLine(t4);
              }));
            }
            [u2, g2, f2].forEach(function(t4) {
              let e4 = [], i4 = M2.duration;
              L(t4, function(t5, i5) {
                t5.isActive || (t5.render(i5, false, 0), t5.isActive = false, e4.push(i5));
              }), B(function() {
                let i5 = e4.length;
                for (; i5--; )
                  t4[e4[i5]] && !t4[e4[i5]].isActive && (t4[e4[i5]].destroy(), delete t4[e4[i5]]);
              }, t4 !== f2 && s2.hasRendered && i4 ? i4 : 0);
            }), v2 && (v2[v2.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(v2.strokeWidth()) }), v2.isPlaced = true, v2[S2 ? "show" : "hide"](S2)), p2 && S2 && (p2[p2.isNew ? "attr" : "animate"](i3.getTitlePosition(p2)), p2.isNew = false), m2 && m2.enabled && i3.stacking && i3.stacking.renderStackTotals(), i3.old = { len: i3.len, max: i3.max, min: i3.min, transA: i3.transA, userMax: i3.userMax, userMin: i3.userMin }, i3.isDirty = false, k(this, "afterRender");
          }
          redraw() {
            this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t3) {
              t3.render();
            })), this.series.forEach(function(t3) {
              t3.isDirty = true;
            });
          }
          getKeepProps() {
            return this.keepProps || R.keepProps;
          }
          destroy(t3) {
            let e3 = this, i3 = e3.plotLinesAndBands, s2 = this.eventOptions;
            if (k(this, "destroy", { keepEvents: t3 }), t3 || E(e3), [e3.ticks, e3.minorTicks, e3.alternateBands].forEach(function(t4) {
              x(t4);
            }), i3) {
              let t4 = i3.length;
              for (; t4--; )
                i3[t4].destroy();
            }
            for (let t4 in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(t5) {
              e3[t5] && (e3[t5] = e3[t5].destroy());
            }), e3.plotLinesAndBandsGroups)
              e3.plotLinesAndBandsGroups[t4] = e3.plotLinesAndBandsGroups[t4].destroy();
            L(e3, function(t4, i4) {
              -1 === e3.getKeepProps().indexOf(i4) && delete e3[i4];
            }), this.eventOptions = s2;
          }
          drawCrosshair(t3, e3) {
            let s2 = this.crosshair, o2 = O(s2 && s2.snap, true), r2 = this.chart, n2, a2, h2, l2 = this.cross, d2;
            if (k(this, "drawCrosshair", { e: t3, point: e3 }), t3 || (t3 = this.cross && this.cross.e), s2 && false !== (m(e3) || !o2)) {
              if (o2 ? m(e3) && (a2 = O("colorAxis" !== this.coll ? e3.crosshairPos : null, this.isXAxis ? e3.plotX : this.len - e3.plotY)) : a2 = t3 && (this.horiz ? t3.chartX - this.pos : this.len - t3.chartY + this.pos), m(a2) && (d2 = { value: e3 && (this.isXAxis ? e3.x : O(e3.stackY, e3.y)), translatedValue: a2 }, r2.polar && v(d2, { isCrosshair: true, chartX: t3 && t3.chartX, chartY: t3 && t3.chartY, point: e3 }), n2 = this.getPlotLinePath(d2) || null), !m(n2)) {
                this.hideCrosshair();
                return;
              }
              h2 = this.categories && !this.isRadial, l2 || (this.cross = l2 = r2.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (h2 ? "category " : "thin ") + (s2.className || "")).attr({ zIndex: O(s2.zIndex, 2) }).add(), !r2.styledMode && (l2.attr({ stroke: s2.color || (h2 ? i2.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": O(s2.width, 1) }).css({ "pointer-events": "none" }), s2.dashStyle && l2.attr({ dashstyle: s2.dashStyle }))), l2.show().attr({ d: n2 }), h2 && !s2.width && l2.attr({ "stroke-width": this.transA }), this.cross.e = t3;
            } else
              this.hideCrosshair();
            k(this, "afterDrawCrosshair", { e: t3, point: e3 });
          }
          hideCrosshair() {
            this.cross && this.cross.hide(), k(this, "afterHideCrosshair");
          }
          hasVerticalPanning() {
            let t3 = this.chart.options.chart.panning;
            return !!(t3 && t3.enabled && /y/.test(t3.type));
          }
          update(t3, e3) {
            let i3 = this.chart;
            t3 = A(this.userOptions, t3), this.destroy(true), this.init(i3, t3), i3.isDirtyBox = true, O(e3, true) && i3.redraw();
          }
          remove(t3) {
            let e3 = this.chart, i3 = this.coll, s2 = this.series, o2 = s2.length;
            for (; o2--; )
              s2[o2] && s2[o2].remove(false);
            y(e3.axes, this), y(e3[i3] || [], this), e3.orderItems(i3), this.destroy(), e3.isDirtyBox = true, O(t3, true) && e3.redraw();
          }
          setTitle(t3, e3) {
            this.update({ title: t3 }, e3);
          }
          setCategories(t3, e3) {
            this.update({ categories: t3 }, e3);
          }
        }
        return R.defaultOptions = e2.defaultXAxisOptions, R.keepProps = ["coll", "extKey", "hcEvents", "names", "series", "userMax", "userMin"], R;
      }), i(e, "Core/Axis/DateTimeAxis.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { addEvent: i2, getMagnitude: s, normalizeTickInterval: o, timeUnits: r } = t2;
        return function(e3) {
          let n = [];
          function a() {
            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
          }
          function h(t3) {
            let e4 = t3.userOptions;
            if ("datetime" !== e4.type) {
              this.dateTime = void 0;
              return;
            }
            this.dateTime || (this.dateTime = new l(this));
          }
          e3.compose = function(e4) {
            if (t2.pushUnique(n, e4)) {
              e4.keepProps.push("dateTime");
              let t3 = e4.prototype;
              t3.getTimeTicks = a, i2(e4, "init", h);
            }
            return e4;
          };
          class l {
            constructor(t3) {
              this.axis = t3;
            }
            normalizeTimeTickInterval(t3, e4) {
              let i3 = e4 || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], n2 = i3[i3.length - 1], a2 = r[n2[0]], h2 = n2[1], l2;
              for (l2 = 0; l2 < i3.length; l2++)
                if (a2 = r[(n2 = i3[l2])[0]], h2 = n2[1], i3[l2 + 1]) {
                  let e5 = (a2 * h2[h2.length - 1] + r[i3[l2 + 1][0]]) / 2;
                  if (t3 <= e5)
                    break;
                }
              a2 === r.year && t3 < 5 * a2 && (h2 = [1, 2, 5]);
              let d = o(t3 / a2, h2, "year" === n2[0] ? Math.max(s(t3 / a2), 1) : 1);
              return { unitRange: a2, count: d, unitName: n2[0] };
            }
            getXDateFormat(t3, e4) {
              let { axis: i3 } = this, s2 = i3.chart.time;
              return i3.closestPointRange ? s2.getDateFormat(i3.closestPointRange, t3, i3.options.startOfWeek, e4) || s2.resolveDTLFormat(e4.year).main : s2.resolveDTLFormat(e4.day).main;
            }
          }
          e3.Additions = l;
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Axis/LogarithmicAxis.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { addEvent: i2, normalizeTickInterval: s, pick: o } = t2;
        return function(e3) {
          let r = [];
          function n(t3) {
            let e4 = t3.userOptions, i3 = this.logarithmic;
            "logarithmic" !== e4.type ? this.logarithmic = void 0 : i3 || (i3 = this.logarithmic = new h(this));
          }
          function a() {
            let t3 = this.logarithmic;
            t3 && (this.lin2val = function(e4) {
              return t3.lin2log(e4);
            }, this.val2lin = function(e4) {
              return t3.log2lin(e4);
            });
          }
          e3.compose = function(e4) {
            return t2.pushUnique(r, e4) && (e4.keepProps.push("logarithmic"), i2(e4, "init", n), i2(e4, "afterInit", a)), e4;
          };
          class h {
            constructor(t3) {
              this.axis = t3;
            }
            getLogTickPositions(t3, e4, i3, r2) {
              let n2 = this.axis, a2 = n2.len, h2 = n2.options, l = [];
              if (r2 || (this.minorAutoInterval = void 0), t3 >= 0.5)
                t3 = Math.round(t3), l = n2.getLinearTickPositions(t3, e4, i3);
              else if (t3 >= 0.08) {
                let s2, o2, n3, a3, h3, d, c;
                let p = Math.floor(e4);
                for (s2 = t3 > 0.3 ? [1, 2, 4] : t3 > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], o2 = p; o2 < i3 + 1 && !c; o2++)
                  for (n3 = 0, a3 = s2.length; n3 < a3 && !c; n3++)
                    (h3 = this.log2lin(this.lin2log(o2) * s2[n3])) > e4 && (!r2 || d <= i3) && void 0 !== d && l.push(d), d > i3 && (c = true), d = h3;
              } else {
                let d = this.lin2log(e4), c = this.lin2log(i3), p = r2 ? n2.getMinorTickInterval() : h2.tickInterval, u = "auto" === p ? null : p, g = h2.tickPixelInterval / (r2 ? 5 : 1), f = r2 ? a2 / n2.tickPositions.length : a2;
                t3 = s(t3 = o(u, this.minorAutoInterval, (c - d) * g / (f || 1))), l = n2.getLinearTickPositions(t3, d, c).map(this.log2lin), r2 || (this.minorAutoInterval = t3 / 5);
              }
              return r2 || (n2.tickInterval = t3), l;
            }
            lin2log(t3) {
              return Math.pow(10, t3);
            }
            log2lin(t3) {
              return Math.log(t3) / Math.LN10;
            }
          }
          e3.Additions = h;
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { erase: i2, extend: s, isNumber: o } = t2;
        return function(e3) {
          let r;
          let n = [];
          function a(t3) {
            return this.addPlotBandOrLine(t3, "plotBands");
          }
          function h(t3, e4) {
            let i3 = this.userOptions, s2 = new r(this, t3);
            if (this.visible && (s2 = s2.render()), s2) {
              if (this._addedPlotLB || (this._addedPlotLB = true, (i3.plotLines || []).concat(i3.plotBands || []).forEach((t4) => {
                this.addPlotBandOrLine(t4);
              })), e4) {
                let s3 = i3[e4] || [];
                s3.push(t3), i3[e4] = s3;
              }
              this.plotLinesAndBands.push(s2);
            }
            return s2;
          }
          function l(t3) {
            return this.addPlotBandOrLine(t3, "plotLines");
          }
          function d(t3, e4, i3) {
            i3 = i3 || this.options;
            let s2 = this.getPlotLinePath({ value: e4, force: true, acrossPanes: i3.acrossPanes }), r2 = [], n2 = this.horiz, a2 = !o(this.min) || !o(this.max) || t3 < this.min && e4 < this.min || t3 > this.max && e4 > this.max, h2 = this.getPlotLinePath({ value: t3, force: true, acrossPanes: i3.acrossPanes }), l2, d2 = 1, c2;
            if (h2 && s2)
              for (a2 && (c2 = h2.toString() === s2.toString(), d2 = 0), l2 = 0; l2 < h2.length; l2 += 2) {
                let t4 = h2[l2], e5 = h2[l2 + 1], i4 = s2[l2], o2 = s2[l2 + 1];
                ("M" === t4[0] || "L" === t4[0]) && ("M" === e5[0] || "L" === e5[0]) && ("M" === i4[0] || "L" === i4[0]) && ("M" === o2[0] || "L" === o2[0]) && (n2 && i4[1] === t4[1] ? (i4[1] += d2, o2[1] += d2) : n2 || i4[2] !== t4[2] || (i4[2] += d2, o2[2] += d2), r2.push(["M", t4[1], t4[2]], ["L", e5[1], e5[2]], ["L", o2[1], o2[2]], ["L", i4[1], i4[2]], ["Z"])), r2.isFlat = c2;
              }
            else
              h2 = null;
            return r2;
          }
          function c(t3) {
            this.removePlotBandOrLine(t3);
          }
          function p(t3) {
            let e4 = this.plotLinesAndBands, s2 = this.options, o2 = this.userOptions;
            if (e4) {
              let r2 = e4.length;
              for (; r2--; )
                e4[r2].id === t3 && e4[r2].destroy();
              [s2.plotLines || [], o2.plotLines || [], s2.plotBands || [], o2.plotBands || []].forEach(function(e5) {
                for (r2 = e5.length; r2--; )
                  (e5[r2] || {}).id === t3 && i2(e5, e5[r2]);
              });
            }
          }
          function u(t3) {
            this.removePlotBandOrLine(t3);
          }
          e3.compose = function(e4, i3) {
            return r || (r = e4), t2.pushUnique(n, i3) && s(i3.prototype, { addPlotBand: a, addPlotLine: l, addPlotBandOrLine: h, getPlotBandPath: d, removePlotBand: c, removePlotLine: u, removePlotBandOrLine: p }), i3;
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [e["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { arrayMax: i2, arrayMin: s, defined: o, destroyObjectProperties: r, erase: n, fireEvent: a, merge: h, objectEach: l, pick: d } = e2;
        class c {
          static compose(e3) {
            return t2.compose(c, e3);
          }
          constructor(t3, e3) {
            this.id = void 0, this.axis = t3, e3 && (this.options = e3, this.id = e3.id);
          }
          render() {
            a(this, "render");
            let t3 = this, e3 = t3.axis, i3 = e3.horiz, s2 = e3.logarithmic, r2 = t3.options, n2 = r2.color, c2 = d(r2.zIndex, 0), p = r2.events, u = {}, g = e3.chart.renderer, f = r2.label, m = t3.label, x = r2.to, y = r2.from, b = r2.value, v = t3.svgElem, k = [], S, M = o(y) && o(x), C = o(b), w = !v, T = { class: "highcharts-plot-" + (M ? "band " : "line ") + (r2.className || "") }, A = M ? "bands" : "lines";
            if (s2 && (y = s2.log2lin(y), x = s2.log2lin(x), b = s2.log2lin(b)), !e3.chart.styledMode && (C ? (T.stroke = n2 || "#999999", T["stroke-width"] = d(r2.width, 1), r2.dashStyle && (T.dashstyle = r2.dashStyle)) : M && (T.fill = n2 || "#e6e9ff", r2.borderWidth && (T.stroke = r2.borderColor, T["stroke-width"] = r2.borderWidth))), u.zIndex = c2, A += "-" + c2, (S = e3.plotLinesAndBandsGroups[A]) || (e3.plotLinesAndBandsGroups[A] = S = g.g("plot-" + A).attr(u).add()), w && (t3.svgElem = v = g.path().attr(T).add(S)), C)
              k = e3.getPlotLinePath({ value: b, lineWidth: v.strokeWidth(), acrossPanes: r2.acrossPanes });
            else {
              if (!M)
                return;
              k = e3.getPlotBandPath(y, x, r2);
            }
            return !t3.eventsAdded && p && (l(p, function(e4, i4) {
              v.on(i4, function(e5) {
                p[i4].apply(t3, [e5]);
              });
            }), t3.eventsAdded = true), (w || !v.d) && k && k.length ? v.attr({ d: k }) : v && (k ? (v.show(), v.animate({ d: k })) : v.d && (v.hide(), m && (t3.label = m = m.destroy()))), f && (o(f.text) || o(f.formatter)) && k && k.length && e3.width > 0 && e3.height > 0 && !k.isFlat ? (f = h({ align: i3 && M && "center", x: i3 ? !M && 4 : 10, verticalAlign: !i3 && M && "middle", y: i3 ? M ? 16 : 10 : M ? 6 : -4, rotation: i3 && !M && 90 }, f), this.renderLabel(f, k, M, c2)) : m && m.hide(), t3;
          }
          renderLabel(t3, e3, o2, r2) {
            let n2 = this.axis, a2 = n2.chart.renderer, l2 = this.label;
            l2 || (this.label = l2 = a2.text(this.getLabelText(t3), 0, 0, t3.useHTML).attr({ align: t3.textAlign || t3.align, rotation: t3.rotation, class: "highcharts-plot-" + (o2 ? "band" : "line") + "-label " + (t3.className || ""), zIndex: r2 }), n2.chart.styledMode || l2.css(h({ fontSize: "0.8em", textOverflow: "ellipsis" }, t3.style)), l2.add());
            let d2 = e3.xBounds || [e3[0][1], e3[1][1], o2 ? e3[2][1] : e3[0][1]], c2 = e3.yBounds || [e3[0][2], e3[1][2], o2 ? e3[2][2] : e3[0][2]], p = s(d2), u = s(c2);
            if (l2.align(t3, false, { x: p, y: u, width: i2(d2) - p, height: i2(c2) - u }), !l2.alignValue || "left" === l2.alignValue) {
              let e4 = t3.clip ? n2.width : n2.chart.chartWidth;
              l2.css({ width: (90 === l2.rotation ? n2.height - (l2.alignAttr.y - n2.top) : e4 - (l2.alignAttr.x - n2.left)) + "px" });
            }
            l2.show(true);
          }
          getLabelText(t3) {
            return o(t3.formatter) ? t3.formatter.call(this) : t3.text;
          }
          destroy() {
            n(this.axis.plotLinesAndBands, this), delete this.axis, r(this);
          }
        }
        return c;
      }), i(e, "Core/Tooltip.js", [e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let { format: r } = t2, { doc: n, isSafari: a } = e2, { distribute: h } = i2, { addEvent: l, clamp: d, css: c, discardElement: p, extend: u, fireEvent: g, isArray: f, isNumber: m, isString: x, merge: y, pick: b, splat: v, syncTimeout: k } = o;
        class S {
          constructor(t3, e3) {
            this.allowShared = true, this.crosshairs = [], this.distance = 0, this.isHidden = true, this.isSticky = false, this.now = {}, this.options = {}, this.outside = false, this.chart = t3, this.init(t3, e3);
          }
          bodyFormatter(t3) {
            return t3.map(function(t4) {
              let e3 = t4.series.tooltipOptions;
              return (e3[(t4.point.formatPrefix || "point") + "Formatter"] || t4.point.tooltipFormatter).call(t4.point, e3[(t4.point.formatPrefix || "point") + "Format"] || "");
            });
          }
          cleanSplit(t3) {
            this.chart.series.forEach(function(e3) {
              let i3 = e3 && e3.tt;
              i3 && (!i3.isActive || t3 ? e3.tt = i3.destroy() : i3.isActive = false);
            });
          }
          defaultFormatter(t3) {
            let e3;
            let i3 = this.points || v(this);
            return (e3 = (e3 = [t3.tooltipFooterHeaderFormatter(i3[0])]).concat(t3.bodyFormatter(i3))).push(t3.tooltipFooterHeaderFormatter(i3[0], true)), e3;
          }
          destroy() {
            this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(true), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), p(this.container)), o.clearTimeout(this.hideTimer), o.clearTimeout(this.tooltipTimeout);
          }
          getAnchor(t3, e3) {
            let i3;
            let s2 = this.chart, o2 = s2.pointer, r2 = s2.inverted, n2 = s2.plotTop, a2 = s2.plotLeft;
            if ((t3 = v(t3))[0].series && t3[0].series.yAxis && !t3[0].series.yAxis.options.reversedStacks && (t3 = t3.slice().reverse()), this.followPointer && e3)
              void 0 === e3.chartX && (e3 = o2.normalize(e3)), i3 = [e3.chartX - a2, e3.chartY - n2];
            else if (t3[0].tooltipPos)
              i3 = t3[0].tooltipPos;
            else {
              let s3 = 0, o3 = 0;
              t3.forEach(function(t4) {
                let e4 = t4.pos(true);
                e4 && (s3 += e4[0], o3 += e4[1]);
              }), s3 /= t3.length, o3 /= t3.length, this.shared && t3.length > 1 && e3 && (r2 ? s3 = e3.chartX : o3 = e3.chartY), i3 = [s3 - a2, o3 - n2];
            }
            return i3.map(Math.round);
          }
          getClassName(t3, e3, i3) {
            let s2 = this.options, o2 = t3.series, r2 = o2.options;
            return [s2.className, "highcharts-label", i3 && "highcharts-tooltip-header", e3 ? "highcharts-tooltip-box" : "highcharts-tooltip", !i3 && "highcharts-color-" + b(t3.colorIndex, o2.colorIndex), r2 && r2.className].filter(x).join(" ");
          }
          getLabel() {
            let t3 = this, i3 = this.chart.styledMode, o2 = this.options, r2 = this.split && this.allowShared, n2 = this.container, a2 = this.chart.renderer;
            if (this.label) {
              let t4 = !this.label.hasClass("highcharts-label");
              (!r2 && t4 || r2 && !t4) && this.destroy();
            }
            if (!this.label) {
              if (this.outside) {
                let t4 = this.chart.options.chart.style, i4 = s.getRendererType();
                this.container = n2 = e2.doc.createElement("div"), n2.className = "highcharts-tooltip-container", c(n2, { position: "absolute", top: "1px", pointerEvents: "none", zIndex: Math.max(this.options.style.zIndex || 0, (t4 && t4.zIndex || 0) + 3) }), this.renderer = a2 = new i4(n2, 0, 0, t4, void 0, void 0, a2.styledMode);
              }
              if (r2 ? this.label = a2.g("tooltip") : (this.label = a2.label("", 0, 0, o2.shape, void 0, void 0, o2.useHTML, void 0, "tooltip").attr({ padding: o2.padding, r: o2.borderRadius }), i3 || this.label.attr({ fill: o2.backgroundColor, "stroke-width": o2.borderWidth || 0 }).css(o2.style).css({ pointerEvents: o2.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), t3.outside) {
                let e3 = this.label, { xSetter: i4, ySetter: s2 } = e3;
                e3.xSetter = function(s3) {
                  i4.call(e3, t3.distance), n2 && (n2.style.left = s3 + "px");
                }, e3.ySetter = function(i5) {
                  s2.call(e3, t3.distance), n2 && (n2.style.top = i5 + "px");
                };
              }
              this.label.attr({ zIndex: 8 }).shadow(o2.shadow).add();
            }
            return n2 && !n2.parentElement && e2.doc.body.appendChild(n2), this.label;
          }
          getPlayingField() {
            let { body: t3, documentElement: e3 } = n, { chart: i3, distance: s2, outside: o2 } = this;
            return { width: o2 ? Math.max(t3.scrollWidth, e3.scrollWidth, t3.offsetWidth, e3.offsetWidth, e3.clientWidth) - 2 * s2 : i3.chartWidth, height: o2 ? Math.max(t3.scrollHeight, e3.scrollHeight, t3.offsetHeight, e3.offsetHeight, e3.clientHeight) : i3.chartHeight };
          }
          getPosition(t3, e3, i3) {
            let s2 = this.chart, o2 = this.distance, r2 = {}, n2 = s2.inverted && i3.h || 0, a2 = this.outside, h2 = this.getPlayingField(), l2 = h2.width, d2 = h2.height, c2 = s2.pointer.getChartPosition(), p2 = (t4) => t4 * c2.scaleX, u2 = (t4) => t4 * c2.scaleY, g2 = (r3) => {
              let n3 = "x" === r3;
              return [r3, n3 ? l2 : d2, n3 ? t3 : e3].concat(a2 ? [n3 ? p2(t3) : u2(e3), n3 ? c2.left - o2 + p2(i3.plotX + s2.plotLeft) : c2.top - o2 + u2(i3.plotY + s2.plotTop), 0, n3 ? l2 : d2] : [n3 ? t3 : e3, n3 ? i3.plotX + s2.plotLeft : i3.plotY + s2.plotTop, n3 ? s2.plotLeft : s2.plotTop, n3 ? s2.plotLeft + s2.plotWidth : s2.plotTop + s2.plotHeight]);
            }, f2 = g2("y"), m2 = g2("x"), x2, y2 = !!i3.negative;
            !s2.polar && s2.hoverSeries && s2.hoverSeries.yAxis && s2.hoverSeries.yAxis.reversed && (y2 = !y2);
            let v2 = !this.followPointer && b(i3.ttBelow, !s2.inverted === y2), k2 = function(t4, e4, i4, s3, h3, l3, d3) {
              let c3 = a2 ? "y" === t4 ? u2(o2) : p2(o2) : o2, g3 = (i4 - s3) / 2, f3 = s3 < h3 - o2, m3 = h3 + o2 + s3 < e4, x3 = h3 - c3 - i4 + g3, y3 = h3 + c3 - g3;
              if (v2 && m3)
                r2[t4] = y3;
              else if (!v2 && f3)
                r2[t4] = x3;
              else if (f3)
                r2[t4] = Math.min(d3 - s3, x3 - n2 < 0 ? x3 : x3 - n2);
              else {
                if (!m3)
                  return false;
                r2[t4] = Math.max(l3, y3 + n2 + i4 > e4 ? y3 : y3 + n2);
              }
            }, S2 = function(t4, e4, i4, s3, n3) {
              let a3;
              return n3 < o2 || n3 > e4 - o2 ? a3 = false : n3 < i4 / 2 ? r2[t4] = 1 : n3 > e4 - s3 / 2 ? r2[t4] = e4 - s3 - 2 : r2[t4] = n3 - i4 / 2, a3;
            }, M = function(t4) {
              let e4 = f2;
              f2 = m2, m2 = e4, x2 = t4;
            }, C = function() {
              false !== k2.apply(0, f2) ? false !== S2.apply(0, m2) || x2 || (M(true), C()) : x2 ? r2.x = r2.y = 0 : (M(true), C());
            };
            return (s2.inverted || this.len > 1) && M(), C(), r2;
          }
          hide(t3) {
            let e3 = this;
            o.clearTimeout(this.hideTimer), t3 = b(t3, this.options.hideDelay), this.isHidden || (this.hideTimer = k(function() {
              let i3 = e3.getLabel();
              e3.getLabel().animate({ opacity: 0 }, { duration: t3 ? 150 : t3, complete: () => {
                i3.hide(), e3.container && e3.container.remove();
              } }), e3.isHidden = true;
            }, t3));
          }
          init(t3, e3) {
            this.chart = t3, this.options = e3, this.crosshairs = [], this.now = { x: 0, y: 0 }, this.isHidden = true, this.split = e3.split && !t3.inverted && !t3.polar, this.shared = e3.shared || this.split, this.outside = b(e3.outside, !!(t3.scrollablePixelsX || t3.scrollablePixelsY));
          }
          shouldStickOnContact(t3) {
            return !!(!this.followPointer && this.options.stickOnContact && (!t3 || this.chart.pointer.inClass(t3.target, "highcharts-tooltip")));
          }
          move(t3, e3, i3, s2) {
            let r2 = this, n2 = r2.now, a2 = false !== r2.options.animation && !r2.isHidden && (Math.abs(t3 - n2.x) > 1 || Math.abs(e3 - n2.y) > 1), h2 = r2.followPointer || r2.len > 1;
            u(n2, { x: a2 ? (2 * n2.x + t3) / 3 : t3, y: a2 ? (n2.y + e3) / 2 : e3, anchorX: h2 ? void 0 : a2 ? (2 * n2.anchorX + i3) / 3 : i3, anchorY: h2 ? void 0 : a2 ? (n2.anchorY + s2) / 2 : s2 }), r2.getLabel().attr(n2), r2.drawTracker(), a2 && (o.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
              r2 && r2.move(t3, e3, i3, s2);
            }, 32));
          }
          refresh(t3, e3) {
            let i3 = this.chart, s2 = this.options, n2 = i3.pointer, a2 = v(t3), h2 = a2[0], l2 = [], d2 = s2.format, c2 = s2.formatter || this.defaultFormatter, p2 = this.shared, u2 = i3.styledMode, m2 = {};
            if (!s2.enabled || !h2.series)
              return;
            o.clearTimeout(this.hideTimer), this.allowShared = !(!f(t3) && t3.series && t3.series.noSharedTooltip), this.followPointer = !this.split && h2.series.tooltipOptions.followPointer;
            let y2 = this.getAnchor(t3, e3), k2 = y2[0], S2 = y2[1];
            p2 && this.allowShared ? (n2.applyInactiveState(a2), a2.forEach(function(t4) {
              t4.setState("hover"), l2.push(t4.getLabelConfig());
            }), (m2 = h2.getLabelConfig()).points = l2) : m2 = h2.getLabelConfig(), this.len = l2.length;
            let M = x(d2) ? r(d2, m2, i3) : c2.call(m2, this), C = h2.series;
            if (this.distance = b(C.tooltipOptions.distance, 16), false === M)
              this.hide();
            else {
              if (this.split && this.allowShared)
                this.renderSplit(M, a2);
              else {
                let t4 = k2, o2 = S2;
                if (e3 && n2.isDirectTouch && (t4 = e3.chartX - i3.plotLeft, o2 = e3.chartY - i3.plotTop), i3.polar || false === C.options.clip || a2.some((e4) => n2.isDirectTouch || e4.series.shouldShowTooltip(t4, o2))) {
                  let t5 = this.getLabel();
                  (!s2.style.width || u2) && t5.css({ width: (this.outside ? this.getPlayingField() : i3.spacingBox).width + "px" }), t5.attr({ text: M && M.join ? M.join("") : M }), t5.addClass(this.getClassName(h2), true), u2 || t5.attr({ stroke: s2.borderColor || h2.color || C.color || "#666666" }), this.updatePosition({ plotX: k2, plotY: S2, negative: h2.negative, ttBelow: h2.ttBelow, h: y2[2] || 0 });
                } else {
                  this.hide();
                  return;
                }
              }
              this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = false;
            }
            g(this, "refresh");
          }
          renderSplit(t3, e3) {
            let i3 = this, { chart: s2, chart: { chartWidth: o2, chartHeight: r2, plotHeight: l2, plotLeft: c2, plotTop: p2, pointer: g2, scrollablePixelsY: f2 = 0, scrollablePixelsX: m2, scrollingContainer: { scrollLeft: y2, scrollTop: v2 } = { scrollLeft: 0, scrollTop: 0 }, styledMode: k2 }, distance: S2, options: M, options: { positioner: C } } = i3, w = i3.outside && "number" != typeof m2 ? n.documentElement.getBoundingClientRect() : { left: y2, right: y2 + o2, top: v2, bottom: v2 + r2 }, T = i3.getLabel(), A = this.renderer || s2.renderer, P = !!(s2.xAxis[0] && s2.xAxis[0].opposite), { left: L, top: O } = g2.getChartPosition(), D = p2 + v2, E = 0, I = l2 - f2;
            function B(t4, e4, s3, o3, r3 = true) {
              let n2, a2;
              return s3 ? (n2 = P ? 0 : I, a2 = d(t4 - o3 / 2, w.left, w.right - o3 - (i3.outside ? L : 0))) : (n2 = e4 - D, a2 = d(a2 = r3 ? t4 - o3 - S2 : t4 + S2, r3 ? a2 : w.left, w.right)), { x: a2, y: n2 };
            }
            x(t3) && (t3 = [false, t3]);
            let j = t3.slice(0, e3.length + 1).reduce(function(t4, s3, o3) {
              if (false !== s3 && "" !== s3) {
                let r3 = e3[o3 - 1] || { isHeader: true, plotX: e3[0].plotX, plotY: l2, series: {} }, n2 = r3.isHeader, a2 = n2 ? i3 : r3.series, h2 = a2.tt = function(t5, e4, s4) {
                  let o4 = t5, { isHeader: r4, series: n3 } = e4;
                  if (!o4) {
                    let t6 = { padding: M.padding, r: M.borderRadius };
                    k2 || (t6.fill = M.backgroundColor, t6["stroke-width"] = M.borderWidth ?? 1), o4 = A.label("", 0, 0, M[r4 ? "headerShape" : "shape"], void 0, void 0, M.useHTML).addClass(i3.getClassName(e4, true, r4)).attr(t6).add(T);
                  }
                  return o4.isActive = true, o4.attr({ text: s4 }), k2 || o4.css(M.style).attr({ stroke: M.borderColor || e4.color || n3.color || "#333333" }), o4;
                }(a2.tt, r3, s3.toString()), u2 = h2.getBBox(), g3 = u2.width + h2.strokeWidth();
                n2 && (E = u2.height, I += E, P && (D -= E));
                let { anchorX: f3, anchorY: m3 } = function(t5) {
                  let e4, i4;
                  let { isHeader: s4, plotX: o4 = 0, plotY: r4 = 0, series: n3 } = t5;
                  if (s4)
                    e4 = Math.max(c2 + o4, c2), i4 = p2 + l2 / 2;
                  else {
                    let { xAxis: t6, yAxis: s5 } = n3;
                    e4 = t6.pos + d(o4, -S2, t6.len + S2), n3.shouldShowTooltip(0, s5.pos - p2 + r4, { ignoreX: true }) && (i4 = s5.pos + r4);
                  }
                  return { anchorX: e4 = d(e4, w.left - S2, w.right + S2), anchorY: i4 };
                }(r3);
                if ("number" == typeof m3) {
                  let e4 = u2.height + 1, s4 = C ? C.call(i3, g3, e4, r3) : B(f3, m3, n2, g3);
                  t4.push({ align: C ? 0 : void 0, anchorX: f3, anchorY: m3, boxWidth: g3, point: r3, rank: b(s4.rank, n2 ? 1 : 0), size: e4, target: s4.y, tt: h2, x: s4.x });
                } else
                  h2.isActive = false;
              }
              return t4;
            }, []);
            !C && j.some((t4) => {
              let { outside: e4 } = i3, s3 = (e4 ? L : 0) + t4.anchorX;
              return s3 < w.left && s3 + t4.boxWidth < w.right || s3 < L - w.left + t4.boxWidth && w.right - s3 > s3;
            }) && (j = j.map((t4) => {
              let { x: e4, y: i4 } = B(t4.anchorX, t4.anchorY, t4.point.isHeader, t4.boxWidth, false);
              return u(t4, { target: i4, x: e4 });
            })), i3.cleanSplit(), h(j, I);
            let R = { left: L, right: L };
            j.forEach(function(t4) {
              let { x: e4, boxWidth: s3, isHeader: o3 } = t4;
              !o3 && (i3.outside && L + e4 < R.left && (R.left = L + e4), !o3 && i3.outside && R.left + s3 > R.right && (R.right = L + e4));
            }), j.forEach(function(t4) {
              let { x: e4, anchorX: s3, anchorY: o3, pos: r3, point: { isHeader: n2 } } = t4, a2 = { visibility: void 0 === r3 ? "hidden" : "inherit", x: e4, y: (r3 || 0) + D, anchorX: s3, anchorY: o3 };
              if (i3.outside && e4 < s3) {
                let t5 = L - R.left;
                t5 > 0 && (n2 || (a2.x = e4 + t5, a2.anchorX = s3 + t5), n2 && (a2.x = (R.right - R.left) / 2, a2.anchorX = s3 + t5));
              }
              t4.tt.attr(a2);
            });
            let { container: z, outside: N, renderer: W } = i3;
            if (N && z && W) {
              let { width: t4, height: e4, x: i4, y: s3 } = T.getBBox();
              W.setSize(t4 + i4, e4 + s3, false), z.style.left = R.left + "px", z.style.top = O + "px";
            }
            a && T.attr({ opacity: 1 === T.opacity ? 0.999 : 1 });
          }
          drawTracker() {
            if (!this.shouldStickOnContact()) {
              this.tracker && (this.tracker = this.tracker.destroy());
              return;
            }
            let t3 = this.chart, e3 = this.label, i3 = this.shared ? t3.hoverPoints : t3.hoverPoint;
            if (!e3 || !i3)
              return;
            let s2 = { x: 0, y: 0, width: 0, height: 0 }, o2 = this.getAnchor(i3), r2 = e3.getBBox();
            o2[0] += t3.plotLeft - (e3.translateX || 0), o2[1] += t3.plotTop - (e3.translateY || 0), s2.x = Math.min(0, o2[0]), s2.y = Math.min(0, o2[1]), s2.width = o2[0] < 0 ? Math.max(Math.abs(o2[0]), r2.width - o2[0]) : Math.max(Math.abs(o2[0]), r2.width), s2.height = o2[1] < 0 ? Math.max(Math.abs(o2[1]), r2.height - Math.abs(o2[1])) : Math.max(Math.abs(o2[1]), r2.height), this.tracker ? this.tracker.attr(s2) : (this.tracker = e3.renderer.rect(s2).addClass("highcharts-tracker").add(e3), t3.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
          }
          styledModeFormat(t3) {
            return t3.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"');
          }
          tooltipFooterHeaderFormatter(t3, e3) {
            let i3 = t3.series, s2 = i3.tooltipOptions, o2 = i3.xAxis, n2 = o2 && o2.dateTime, a2 = { isFooter: e3, labelConfig: t3 }, h2 = s2.xDateFormat, l2 = s2[e3 ? "footerFormat" : "headerFormat"];
            return g(this, "headerFormatter", a2, function(e4) {
              n2 && !h2 && m(t3.key) && (h2 = n2.getXDateFormat(t3.key, s2.dateTimeLabelFormats)), n2 && h2 && (t3.point && t3.point.tooltipDateKeys || ["key"]).forEach(function(t4) {
                l2 = l2.replace("{point." + t4 + "}", "{point." + t4 + ":" + h2 + "}");
              }), i3.chart.styledMode && (l2 = this.styledModeFormat(l2)), e4.text = r(l2, { point: t3, series: i3 }, this.chart);
            }), a2.text;
          }
          update(t3) {
            this.destroy(), this.init(this.chart, y(true, this.options, t3));
          }
          updatePosition(t3) {
            let { chart: e3, container: i3, distance: s2, options: o2, renderer: r2 } = this, { height: n2 = 0, width: a2 = 0 } = this.getLabel(), h2 = e3.pointer, { left: l2, top: d2, scaleX: p2, scaleY: u2 } = h2.getChartPosition(), g2 = (o2.positioner || this.getPosition).call(this, a2, n2, t3), f2 = (t3.plotX || 0) + e3.plotLeft, m2 = (t3.plotY || 0) + e3.plotTop, x2;
            r2 && i3 && (o2.positioner && (g2.x += l2 - s2, g2.y += d2 - s2), x2 = (o2.borderWidth || 0) + 2 * s2 + 2, r2.setSize(a2 + x2, n2 + x2, false), (1 !== p2 || 1 !== u2) && (c(i3, { transform: `scale(${p2}, ${u2})` }), f2 *= p2, m2 *= u2), f2 += l2 - g2.x, m2 += d2 - g2.y), this.move(Math.round(g2.x), Math.round(g2.y || 0), f2, m2);
          }
        }
        return function(t3) {
          let e3 = [];
          t3.compose = function(i3) {
            o.pushUnique(e3, i3) && l(i3, "afterInit", function() {
              let e4 = this.chart;
              e4.options.tooltip && (e4.tooltip = new t3(e4, e4.options.tooltip));
            });
          };
        }(S || (S = {})), S;
      }), i(e, "Core/Series/Point.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        let { animObject: r } = e2, { defaultOptions: n } = i2, { format: a } = s, { addEvent: h, defined: l, erase: d, extend: c, fireEvent: p, getNestedProperty: u, isArray: g, isFunction: f, isNumber: m, isObject: x, merge: y, objectEach: b, pick: v, syncTimeout: k, removeEvent: S, uniqueKey: M } = o;
        class C {
          constructor() {
            this.category = void 0, this.destroyed = false, this.formatPrefix = "point", this.id = void 0, this.isNull = false, this.name = void 0, this.options = void 0, this.percentage = void 0, this.selected = false, this.series = void 0, this.shapeArgs = void 0, this.total = void 0, this.visible = true, this.x = void 0;
          }
          animateBeforeDestroy() {
            let t3 = this, e3 = { x: t3.startXPos, opacity: 0 }, i3 = t3.getGraphicalProps();
            i3.singular.forEach(function(i4) {
              t3[i4] = t3[i4].animate("dataLabel" === i4 ? { x: t3[i4].startXPos, y: t3[i4].startYPos, opacity: 0 } : e3);
            }), i3.plural.forEach(function(e4) {
              t3[e4].forEach(function(e5) {
                e5.element && e5.animate(c({ x: t3.startXPos }, e5.startYPos ? { x: e5.startXPos, y: e5.startYPos } : {}));
              });
            });
          }
          applyOptions(t3, e3) {
            let i3 = this.series, s2 = i3.options.pointValKey || i3.pointValKey;
            return c(this, t3 = C.prototype.optionsToObject.call(this, t3)), this.options = this.options ? c(this.options, t3) : t3, t3.group && delete this.group, t3.dataLabels && delete this.dataLabels, s2 && (this.y = C.prototype.getNestedProperty.call(this, s2)), this.selected && (this.state = "select"), "name" in this && void 0 === e3 && i3.xAxis && i3.xAxis.hasNames && (this.x = i3.xAxis.nameToX(this)), void 0 === this.x && i3 ? void 0 === e3 ? this.x = i3.autoIncrement() : this.x = e3 : m(t3.x) && i3.options.relativeXValue && (this.x = i3.autoIncrement(t3.x)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this;
          }
          destroy() {
            if (!this.destroyed) {
              let t3 = this, e3 = t3.series, i3 = e3.chart, s2 = e3.options.dataSorting, o2 = i3.hoverPoints, n2 = t3.series.chart.renderer.globalAnimation, a2 = r(n2), h2 = () => {
                for (let e4 in (t3.graphic || t3.graphics || t3.dataLabel || t3.dataLabels) && (S(t3), t3.destroyElements()), t3)
                  delete t3[e4];
              };
              t3.legendItem && i3.legend.destroyItem(t3), o2 && (t3.setState(), d(o2, t3), o2.length || (i3.hoverPoints = null)), t3 === i3.hoverPoint && t3.onMouseOut(), s2 && s2.enabled ? (this.animateBeforeDestroy(), k(h2, a2.duration)) : h2(), i3.pointCount--;
            }
            this.destroyed = true;
          }
          destroyElements(t3) {
            let e3 = this, i3 = e3.getGraphicalProps(t3);
            i3.singular.forEach(function(t4) {
              e3[t4] = e3[t4].destroy();
            }), i3.plural.forEach(function(t4) {
              e3[t4].forEach(function(t5) {
                t5 && t5.element && t5.destroy();
              }), delete e3[t4];
            });
          }
          firePointEvent(t3, e3, i3) {
            let s2 = this, o2 = this.series, r2 = o2.options;
            (r2.point.events[t3] || s2.options && s2.options.events && s2.options.events[t3]) && s2.importEvents(), "click" === t3 && r2.allowPointSelect && (i3 = function(t4) {
              !s2.destroyed && s2.select && s2.select(null, t4.ctrlKey || t4.metaKey || t4.shiftKey);
            }), p(s2, t3, e3, i3);
          }
          getClassName() {
            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
          }
          getGraphicalProps(t3) {
            let e3, i3;
            let s2 = this, o2 = [], r2 = { singular: [], plural: [] };
            for ((t3 = t3 || { graphic: 1, dataLabel: 1 }).graphic && o2.push("graphic", "connector"), t3.dataLabel && o2.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i3 = o2.length; i3--; )
              s2[e3 = o2[i3]] && r2.singular.push(e3);
            return ["graphic", "dataLabel"].forEach(function(e4) {
              let i4 = e4 + "s";
              t3[e4] && s2[i4] && r2.plural.push(i4);
            }), r2;
          }
          getLabelConfig() {
            return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
          }
          getNestedProperty(t3) {
            return t3 ? 0 === t3.indexOf("custom.") ? u(t3, this.options) : this[t3] : void 0;
          }
          getZone() {
            let t3 = this.series, e3 = t3.zones, i3 = t3.zoneAxis || "y", s2, o2 = 0;
            for (s2 = e3[0]; this[i3] >= s2.value; )
              s2 = e3[++o2];
            return this.nonZonedColor || (this.nonZonedColor = this.color), s2 && s2.color && !this.options.color ? this.color = s2.color : this.color = this.nonZonedColor, s2;
          }
          hasNewShapeType() {
            let t3 = this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName);
            return t3 !== this.shapeType;
          }
          init(t3, e3, i3) {
            return this.series = t3, this.applyOptions(e3, i3), this.id = l(this.id) ? this.id : M(), this.resolveColor(), t3.chart.pointCount++, p(this, "afterInit"), this;
          }
          isValid() {
            return (m(this.x) || this.x instanceof Date) && m(this.y);
          }
          optionsToObject(t3) {
            let e3 = this.series, i3 = e3.options.keys, s2 = i3 || e3.pointArrayMap || ["y"], o2 = s2.length, r2 = {}, n2, a2 = 0, h2 = 0;
            if (m(t3) || null === t3)
              r2[s2[0]] = t3;
            else if (g(t3))
              for (!i3 && t3.length > o2 && ("string" == (n2 = typeof t3[0]) ? r2.name = t3[0] : "number" === n2 && (r2.x = t3[0]), a2++); h2 < o2; )
                i3 && void 0 === t3[a2] || (s2[h2].indexOf(".") > 0 ? C.prototype.setNestedProperty(r2, t3[a2], s2[h2]) : r2[s2[h2]] = t3[a2]), a2++, h2++;
            else
              "object" == typeof t3 && (r2 = t3, t3.dataLabels && (e3.hasDataLabels = () => true), t3.marker && (e3._hasPointMarkers = true));
            return r2;
          }
          pos(t3, e3 = this.plotY) {
            if (!this.destroyed) {
              let { plotX: i3, series: s2 } = this, { chart: o2, xAxis: r2, yAxis: n2 } = s2, a2 = 0, h2 = 0;
              if (m(i3) && m(e3))
                return t3 && (a2 = r2 ? r2.pos : o2.plotLeft, h2 = n2 ? n2.pos : o2.plotTop), o2.inverted && r2 && n2 ? [n2.len - e3 + h2, r2.len - i3 + a2] : [i3 + a2, e3 + h2];
            }
          }
          resolveColor() {
            let t3 = this.series, e3 = t3.chart.options.chart, i3 = t3.chart.styledMode, s2, o2, r2 = e3.colorCount, n2;
            delete this.nonZonedColor, t3.options.colorByPoint ? (i3 || (s2 = (o2 = t3.options.colors || t3.chart.options.colors)[t3.colorCounter], r2 = o2.length), n2 = t3.colorCounter, t3.colorCounter++, t3.colorCounter === r2 && (t3.colorCounter = 0)) : (i3 || (s2 = t3.color), n2 = t3.colorIndex), this.colorIndex = v(this.options.colorIndex, n2), this.color = v(this.options.color, s2);
          }
          setNestedProperty(t3, e3, i3) {
            let s2 = i3.split(".");
            return s2.reduce(function(t4, i4, s3, o2) {
              let r2 = o2.length - 1 === s3;
              return t4[i4] = r2 ? e3 : x(t4[i4], true) ? t4[i4] : {}, t4[i4];
            }, t3), t3;
          }
          shouldDraw() {
            return !this.isNull;
          }
          tooltipFormatter(t3) {
            let e3 = this.series, i3 = e3.tooltipOptions, s2 = v(i3.valueDecimals, ""), o2 = i3.valuePrefix || "", r2 = i3.valueSuffix || "";
            return e3.chart.styledMode && (t3 = e3.chart.tooltip.styledModeFormat(t3)), (e3.pointArrayMap || ["y"]).forEach(function(e4) {
              e4 = "{point." + e4, (o2 || r2) && (t3 = t3.replace(RegExp(e4 + "}", "g"), o2 + e4 + "}" + r2)), t3 = t3.replace(RegExp(e4 + "}", "g"), e4 + ":,." + s2 + "f}");
            }), a(t3, { point: this, series: this.series }, e3.chart);
          }
          update(t3, e3, i3, s2) {
            let o2;
            let r2 = this, n2 = r2.series, a2 = r2.graphic, h2 = n2.chart, l2 = n2.options;
            function d2() {
              r2.applyOptions(t3);
              let s3 = a2 && r2.hasMockGraphic, d3 = null === r2.y ? !s3 : s3;
              a2 && d3 && (r2.graphic = a2.destroy(), delete r2.hasMockGraphic), x(t3, true) && (a2 && a2.element && t3 && t3.marker && void 0 !== t3.marker.symbol && (r2.graphic = a2.destroy()), t3?.dataLabels && r2.dataLabel && (r2.dataLabel = r2.dataLabel.destroy())), o2 = r2.index, n2.updateParallelArrays(r2, o2), l2.data[o2] = x(l2.data[o2], true) || x(t3, true) ? r2.options : v(t3, l2.data[o2]), n2.isDirty = n2.isDirtyData = true, !n2.fixedBox && n2.hasCartesianSeries && (h2.isDirtyBox = true), "point" === l2.legendType && (h2.isDirtyLegend = true), e3 && h2.redraw(i3);
            }
            e3 = v(e3, true), false === s2 ? d2() : r2.firePointEvent("update", { options: t3 }, d2);
          }
          remove(t3, e3) {
            this.series.removePoint(this.series.data.indexOf(this), t3, e3);
          }
          select(t3, e3) {
            let i3 = this, s2 = i3.series, o2 = s2.chart;
            t3 = v(t3, !i3.selected), this.selectedStaging = t3, i3.firePointEvent(t3 ? "select" : "unselect", { accumulate: e3 }, function() {
              i3.selected = i3.options.selected = t3, s2.options.data[s2.data.indexOf(i3)] = i3.options, i3.setState(t3 && "select"), e3 || o2.getSelectedPoints().forEach(function(t4) {
                let e4 = t4.series;
                t4.selected && t4 !== i3 && (t4.selected = t4.options.selected = false, e4.options.data[e4.data.indexOf(t4)] = t4.options, t4.setState(o2.hoverPoints && e4.options.inactiveOtherPoints ? "inactive" : ""), t4.firePointEvent("unselect"));
              });
            }), delete this.selectedStaging;
          }
          onMouseOver(t3) {
            let e3 = this.series, i3 = e3.chart, s2 = i3.pointer;
            t3 = t3 ? s2.normalize(t3) : s2.getChartCoordinatesFromPoint(this, i3.inverted), s2.runPointActions(t3, this);
          }
          onMouseOut() {
            let t3 = this.series.chart;
            this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t3.hoverPoints || []).forEach(function(t4) {
              t4.setState();
            }), t3.hoverPoints = t3.hoverPoint = null;
          }
          importEvents() {
            if (!this.hasImportedEvents) {
              let t3 = this, e3 = y(t3.series.options.point, t3.options), i3 = e3.events;
              t3.events = i3, b(i3, function(e4, i4) {
                f(e4) && h(t3, i4, e4);
              }), this.hasImportedEvents = true;
            }
          }
          setState(e3, i3) {
            let s2 = this.series, o2 = this.state, r2 = s2.options.states[e3 || "normal"] || {}, a2 = n.plotOptions[s2.type].marker && s2.options.marker, h2 = a2 && false === a2.enabled, l2 = a2 && a2.states && a2.states[e3 || "normal"] || {}, d2 = false === l2.enabled, u2 = this.marker || {}, g2 = s2.chart, f2 = a2 && s2.markerAttribs, x2 = s2.halo, y2, b2, k2, S2 = s2.stateMarkerGraphic, M2;
            if ((e3 = e3 || "") === this.state && !i3 || this.selected && "select" !== e3 || false === r2.enabled || e3 && (d2 || h2 && false === l2.enabled) || e3 && u2.states && u2.states[e3] && false === u2.states[e3].enabled)
              return;
            if (this.state = e3, f2 && (y2 = s2.markerAttribs(this, e3)), this.graphic && !this.hasMockGraphic) {
              if (o2 && this.graphic.removeClass("highcharts-point-" + o2), e3 && this.graphic.addClass("highcharts-point-" + e3), !g2.styledMode) {
                b2 = s2.pointAttribs(this, e3), k2 = v(g2.options.chart.animation, r2.animation);
                let t3 = b2.opacity;
                s2.options.inactiveOtherPoints && m(t3) && (this.dataLabels || []).forEach(function(e4) {
                  e4 && !e4.hasClass("highcharts-data-label-hidden") && (e4.animate({ opacity: t3 }, k2), e4.connector && e4.connector.animate({ opacity: t3 }, k2));
                }), this.graphic.animate(b2, k2);
              }
              y2 && this.graphic.animate(y2, v(g2.options.chart.animation, l2.animation, a2.animation)), S2 && S2.hide();
            } else
              e3 && l2 && (M2 = u2.symbol || s2.symbol, S2 && S2.currentSymbol !== M2 && (S2 = S2.destroy()), y2 && (S2 ? S2[i3 ? "animate" : "attr"]({ x: y2.x, y: y2.y }) : M2 && (s2.stateMarkerGraphic = S2 = g2.renderer.symbol(M2, y2.x, y2.y, y2.width, y2.height).add(s2.markerGroup), S2.currentSymbol = M2)), !g2.styledMode && S2 && "inactive" !== this.state && S2.attr(s2.pointAttribs(this, e3))), S2 && (S2[e3 && this.isInside ? "show" : "hide"](), S2.element.point = this, S2.addClass(this.getClassName(), true));
            let C2 = r2.halo, w = this.graphic || S2, T = w && w.visibility || "inherit";
            C2 && C2.size && w && "hidden" !== T && !this.isCluster ? (x2 || (s2.halo = x2 = g2.renderer.path().add(w.parentGroup)), x2.show()[i3 ? "animate" : "attr"]({ d: this.haloPath(C2.size) }), x2.attr({ class: "highcharts-halo highcharts-color-" + v(this.colorIndex, s2.colorIndex) + (this.className ? " " + this.className : ""), visibility: T, zIndex: -1 }), x2.point = this, g2.styledMode || x2.attr(c({ fill: this.color || s2.color, "fill-opacity": C2.opacity }, t2.filterUserAttributes(C2.attributes || {})))) : x2 && x2.point && x2.point.haloPath && x2.animate({ d: x2.point.haloPath(0) }, null, x2.hide), p(this, "afterSetState", { state: e3 });
          }
          haloPath(t3) {
            let e3 = this.pos();
            return e3 ? this.series.chart.renderer.symbols.circle(Math.floor(e3[0]) - t3, e3[1] - t3, 2 * t3, 2 * t3) : [];
          }
        }
        return C;
      }), i(e, "Core/Pointer.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { parse: s } = t2, { charts: o, noop: r } = e2, { addEvent: n, attr: a, css: h, defined: l, extend: d, find: c, fireEvent: p, isNumber: u, isObject: g, objectEach: f, offset: m, pick: x, splat: y } = i2;
        class b {
          constructor(t3, e3) {
            this.lastValidTouch = {}, this.pinchDown = [], this.runChartClick = false, this.eventsToUnbind = [], this.chart = t3, this.hasDragged = false, this.options = e3, this.init(t3, e3);
          }
          applyInactiveState(t3) {
            let e3 = [], i3;
            (t3 || []).forEach(function(t4) {
              i3 = t4.series, e3.push(i3), i3.linkedParent && e3.push(i3.linkedParent), i3.linkedSeries && (e3 = e3.concat(i3.linkedSeries)), i3.navigatorSeries && e3.push(i3.navigatorSeries);
            }), this.chart.series.forEach(function(t4) {
              -1 === e3.indexOf(t4) ? t4.setState("inactive", true) : t4.options.inactiveOtherPoints && t4.setAllPointsToState("inactive");
            });
          }
          destroy() {
            let t3 = this;
            this.eventsToUnbind.forEach((t4) => t4()), this.eventsToUnbind = [], !e2.chartCount && (b.unbindDocumentMouseUp && (b.unbindDocumentMouseUp = b.unbindDocumentMouseUp()), b.unbindDocumentTouchEnd && (b.unbindDocumentTouchEnd = b.unbindDocumentTouchEnd())), clearInterval(t3.tooltipTimeout), f(t3, function(e3, i3) {
              t3[i3] = void 0;
            });
          }
          getSelectionMarkerAttrs(t3, e3) {
            let i3 = { args: { chartX: t3, chartY: e3 }, attrs: {}, shapeType: "rect" };
            return p(this, "getSelectionMarkerAttrs", i3, (i4) => {
              let s2;
              let { chart: o2, mouseDownX: r2 = 0, mouseDownY: n2 = 0, zoomHor: a2, zoomVert: h2 } = this, l2 = i4.attrs;
              l2.x = o2.plotLeft, l2.y = o2.plotTop, l2.width = a2 ? 1 : o2.plotWidth, l2.height = h2 ? 1 : o2.plotHeight, a2 && (s2 = t3 - r2, l2.width = Math.abs(s2), l2.x = (s2 > 0 ? 0 : s2) + r2), h2 && (s2 = e3 - n2, l2.height = Math.abs(s2), l2.y = (s2 > 0 ? 0 : s2) + n2);
            }), i3;
          }
          drag(t3) {
            let e3 = this.chart, i3 = e3.options.chart, o2 = e3.plotLeft, r2 = e3.plotTop, n2 = e3.plotWidth, a2 = e3.plotHeight, h2 = this.mouseDownX || 0, l2 = this.mouseDownY || 0, d2 = g(i3.panning) ? i3.panning && i3.panning.enabled : i3.panning, c2 = i3.panKey && t3[i3.panKey + "Key"], p2 = t3.chartX, u2 = t3.chartY, f2, m2 = this.selectionMarker;
            if ((!m2 || !m2.touch) && (p2 < o2 ? p2 = o2 : p2 > o2 + n2 && (p2 = o2 + n2), u2 < r2 ? u2 = r2 : u2 > r2 + a2 && (u2 = r2 + a2), this.hasDragged = Math.sqrt(Math.pow(h2 - p2, 2) + Math.pow(l2 - u2, 2)), this.hasDragged > 10)) {
              f2 = e3.isInsidePlot(h2 - o2, l2 - r2, { visiblePlotOnly: true });
              let { shapeType: n3, attrs: a3 } = this.getSelectionMarkerAttrs(p2, u2);
              (e3.hasCartesianSeries || e3.mapView) && (this.zoomX || this.zoomY) && f2 && !c2 && !m2 && (this.selectionMarker = m2 = e3.renderer[n3](), m2.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), e3.styledMode || m2.attr({ fill: i3.selectionMarkerFill || s("#334eff").setOpacity(0.25).get() })), m2 && m2.attr(a3), f2 && !m2 && d2 && e3.pan(t3, i3.panning);
            }
          }
          dragStart(t3) {
            let e3 = this.chart;
            e3.mouseIsDown = t3.type, e3.cancelClick = false, e3.mouseDownX = this.mouseDownX = t3.chartX, e3.mouseDownY = this.mouseDownY = t3.chartY;
          }
          getSelectionBox(t3) {
            let e3 = { args: { marker: t3 }, result: {} };
            return p(this, "getSelectionBox", e3, (e4) => {
              e4.result = { x: t3.attr ? +t3.attr("x") : t3.x, y: t3.attr ? +t3.attr("y") : t3.y, width: t3.attr ? t3.attr("width") : t3.width, height: t3.attr ? t3.attr("height") : t3.height };
            }), e3.result;
          }
          drop(t3) {
            let e3 = this, i3 = this.chart, s2 = this.hasPinched;
            if (this.selectionMarker) {
              let { x: o2, y: r2, width: n2, height: a2 } = this.getSelectionBox(this.selectionMarker), h2 = { originalEvent: t3, xAxis: [], yAxis: [], x: o2, y: r2, width: n2, height: a2 }, c2 = !!i3.mapView;
              (this.hasDragged || s2) && (i3.axes.forEach(function(i4) {
                if (i4.zoomEnabled && l(i4.min) && (s2 || e3[{ xAxis: "zoomX", yAxis: "zoomY" }[i4.coll]]) && u(o2) && u(r2) && u(n2) && u(a2)) {
                  let e4 = i4.horiz, s3 = "touchend" === t3.type ? i4.minPixelPadding : 0, l2 = i4.toValue((e4 ? o2 : r2) + s3), d2 = i4.toValue((e4 ? o2 + n2 : r2 + a2) - s3);
                  h2[i4.coll].push({ axis: i4, min: Math.min(l2, d2), max: Math.max(l2, d2) }), c2 = true;
                }
              }), c2 && p(i3, "selection", h2, function(t4) {
                i3.zoom(d(t4, s2 ? { animation: false } : null));
              })), u(i3.index) && (this.selectionMarker = this.selectionMarker.destroy()), s2 && this.scaleGroups();
            }
            i3 && u(i3.index) && (h(i3.container, { cursor: i3._cursor }), i3.cancelClick = +this.hasDragged > 10, i3.mouseIsDown = this.hasDragged = this.hasPinched = false, this.pinchDown = []);
          }
          findNearestKDPoint(t3, e3, i3) {
            let s2;
            return t3.forEach(function(t4) {
              let o2 = t4.noSharedTooltip && e3, r2 = !o2 && 0 > t4.options.findNearestPointBy.indexOf("y"), n2 = t4.searchPoint(i3, r2);
              g(n2, true) && n2.series && (!g(s2, true) || function(t5, i4) {
                let s3 = t5.distX - i4.distX, o3 = t5.dist - i4.dist, r3 = (i4.series.group && i4.series.group.zIndex) - (t5.series.group && t5.series.group.zIndex);
                return 0 !== s3 && e3 ? s3 : 0 !== o3 ? o3 : 0 !== r3 ? r3 : t5.series.index > i4.series.index ? -1 : 1;
              }(s2, n2) > 0) && (s2 = n2);
            }), s2;
          }
          getChartCoordinatesFromPoint(t3, e3) {
            let i3 = t3.series, s2 = i3.xAxis, o2 = i3.yAxis, r2 = t3.shapeArgs;
            if (s2 && o2) {
              let i4 = x(t3.clientX, t3.plotX), n2 = t3.plotY || 0;
              return t3.isNode && r2 && u(r2.x) && u(r2.y) && (i4 = r2.x, n2 = r2.y), e3 ? { chartX: o2.len + o2.pos - n2, chartY: s2.len + s2.pos - i4 } : { chartX: i4 + s2.pos, chartY: n2 + o2.pos };
            }
            if (r2 && r2.x && r2.y)
              return { chartX: r2.x, chartY: r2.y };
          }
          getChartPosition() {
            if (this.chartPosition)
              return this.chartPosition;
            let { container: t3 } = this.chart, e3 = m(t3);
            this.chartPosition = { left: e3.left, top: e3.top, scaleX: 1, scaleY: 1 };
            let i3 = t3.offsetWidth, s2 = t3.offsetHeight;
            return i3 > 2 && s2 > 2 && (this.chartPosition.scaleX = e3.width / i3, this.chartPosition.scaleY = e3.height / s2), this.chartPosition;
          }
          getCoordinates(t3) {
            let e3 = { xAxis: [], yAxis: [] };
            return this.chart.axes.forEach(function(i3) {
              e3[i3.isXAxis ? "xAxis" : "yAxis"].push({ axis: i3, value: i3.toValue(t3[i3.horiz ? "chartX" : "chartY"]) });
            }), e3;
          }
          getHoverData(t3, e3, i3, s2, o2, r2) {
            let n2 = [], a2 = function(t4) {
              return t4.visible && !(!o2 && t4.directTouch) && x(t4.options.enableMouseTracking, true);
            }, h2 = e3, l2, d2 = { chartX: r2 ? r2.chartX : void 0, chartY: r2 ? r2.chartY : void 0, shared: o2 };
            p(this, "beforeGetHoverData", d2);
            let u2 = h2 && !h2.stickyTracking;
            l2 = u2 ? [h2] : i3.filter((t4) => t4.stickyTracking && (d2.filter || a2)(t4));
            let f2 = s2 && t3 || !r2 ? t3 : this.findNearestKDPoint(l2, o2, r2);
            return h2 = f2 && f2.series, f2 && (o2 && !h2.noSharedTooltip ? (l2 = i3.filter(function(t4) {
              return d2.filter ? d2.filter(t4) : a2(t4) && !t4.noSharedTooltip;
            })).forEach(function(t4) {
              let e4 = c(t4.points, function(t5) {
                return t5.x === f2.x && !t5.isNull;
              });
              g(e4) && (t4.boosted && t4.boost && (e4 = t4.boost.getPoint(e4)), n2.push(e4));
            }) : n2.push(f2)), p(this, "afterGetHoverData", d2 = { hoverPoint: f2 }), { hoverPoint: d2.hoverPoint, hoverSeries: h2, hoverPoints: n2 };
          }
          getPointFromEvent(t3) {
            let e3 = t3.target, i3;
            for (; e3 && !i3; )
              i3 = e3.point, e3 = e3.parentNode;
            return i3;
          }
          onTrackerMouseOut(t3) {
            let e3 = this.chart, i3 = t3.relatedTarget, s2 = e3.hoverSeries;
            this.isDirectTouch = false, !s2 || !i3 || s2.stickyTracking || this.inClass(i3, "highcharts-tooltip") || this.inClass(i3, "highcharts-series-" + s2.index) && this.inClass(i3, "highcharts-tracker") || s2.onMouseOut();
          }
          inClass(t3, e3) {
            let i3 = t3, s2;
            for (; i3; ) {
              if (s2 = a(i3, "class")) {
                if (-1 !== s2.indexOf(e3))
                  return true;
                if (-1 !== s2.indexOf("highcharts-container"))
                  return false;
              }
              i3 = i3.parentElement;
            }
          }
          init(t3, e3) {
            this.options = e3, this.chart = t3, this.runChartClick = !!(e3.chart.events && e3.chart.events.click), this.pinchDown = [], this.lastValidTouch = {}, this.setDOMEvents(), p(this, "afterInit");
          }
          normalize(t3, e3) {
            let i3 = t3.touches, s2 = i3 ? i3.length ? i3.item(0) : x(i3.changedTouches, t3.changedTouches)[0] : t3;
            e3 || (e3 = this.getChartPosition());
            let o2 = s2.pageX - e3.left, r2 = s2.pageY - e3.top;
            return d(t3, { chartX: Math.round(o2 /= e3.scaleX), chartY: Math.round(r2 /= e3.scaleY) });
          }
          onContainerClick(t3) {
            let e3 = this.chart, i3 = e3.hoverPoint, s2 = this.normalize(t3), o2 = e3.plotLeft, r2 = e3.plotTop;
            !e3.cancelClick && (i3 && this.inClass(s2.target, "highcharts-tracker") ? (p(i3.series, "click", d(s2, { point: i3 })), e3.hoverPoint && i3.firePointEvent("click", s2)) : (d(s2, this.getCoordinates(s2)), e3.isInsidePlot(s2.chartX - o2, s2.chartY - r2, { visiblePlotOnly: true }) && p(e3, "click", s2)));
          }
          onContainerMouseDown(t3) {
            let i3 = (1 & (t3.buttons || t3.button)) == 1;
            t3 = this.normalize(t3), e2.isFirefox && 0 !== t3.button && this.onContainerMouseMove(t3), (void 0 === t3.button || i3) && (this.zoomOption(t3), i3 && t3.preventDefault && t3.preventDefault(), this.dragStart(t3));
          }
          onContainerMouseLeave(t3) {
            let e3 = o[x(b.hoverChartIndex, -1)];
            t3 = this.normalize(t3), this.onContainerMouseMove(t3), e3 && t3.relatedTarget && !this.inClass(t3.relatedTarget, "highcharts-tooltip") && (e3.pointer.reset(), e3.pointer.chartPosition = void 0);
          }
          onContainerMouseEnter(t3) {
            delete this.chartPosition;
          }
          onContainerMouseMove(t3) {
            let e3 = this.chart, i3 = e3.tooltip, s2 = this.normalize(t3);
            this.setHoverChartIndex(t3), ("mousedown" === e3.mouseIsDown || this.touchSelect(s2)) && this.drag(s2), !e3.openMenu && (this.inClass(s2.target, "highcharts-tracker") || e3.isInsidePlot(s2.chartX - e3.plotLeft, s2.chartY - e3.plotTop, { visiblePlotOnly: true })) && !(i3 && i3.shouldStickOnContact(s2)) && (this.inClass(s2.target, "highcharts-no-tooltip") ? this.reset(false, 0) : this.runPointActions(s2));
          }
          onDocumentTouchEnd(t3) {
            let e3 = o[x(b.hoverChartIndex, -1)];
            e3 && e3.pointer.drop(t3);
          }
          onContainerTouchMove(t3) {
            this.touchSelect(t3) ? this.onContainerMouseMove(t3) : this.touch(t3);
          }
          onContainerTouchStart(t3) {
            this.touchSelect(t3) ? this.onContainerMouseDown(t3) : (this.zoomOption(t3), this.touch(t3, true));
          }
          onDocumentMouseMove(t3) {
            let e3 = this.chart, i3 = e3.tooltip, s2 = this.chartPosition, o2 = this.normalize(t3, s2);
            !s2 || e3.isInsidePlot(o2.chartX - e3.plotLeft, o2.chartY - e3.plotTop, { visiblePlotOnly: true }) || i3 && i3.shouldStickOnContact(o2) || this.inClass(o2.target, "highcharts-tracker") || this.reset();
          }
          onDocumentMouseUp(t3) {
            let e3 = o[x(b.hoverChartIndex, -1)];
            e3 && e3.pointer.drop(t3);
          }
          pinch(t3) {
            let e3 = this, i3 = e3.chart, s2 = e3.pinchDown, o2 = t3.touches || [], n2 = o2.length, a2 = e3.lastValidTouch, h2 = e3.hasZoom, l2 = {}, c2 = 1 === n2 && (e3.inClass(t3.target, "highcharts-tracker") && i3.runTrackerClick || e3.runChartClick), u2 = {}, g2 = e3.chart.tooltip, f2 = 1 === n2 && x(g2 && g2.options.followTouchMove, true), m2 = e3.selectionMarker;
            n2 > 1 ? e3.initiated = true : f2 && (e3.initiated = false), h2 && e3.initiated && !c2 && false !== t3.cancelable && t3.preventDefault(), [].map.call(o2, function(t4) {
              return e3.normalize(t4);
            }), "touchstart" === t3.type ? ([].forEach.call(o2, function(t4, e4) {
              s2[e4] = { chartX: t4.chartX, chartY: t4.chartY };
            }), a2.x = [s2[0].chartX, s2[1] && s2[1].chartX], a2.y = [s2[0].chartY, s2[1] && s2[1].chartY], i3.axes.forEach(function(t4) {
              if (t4.zoomEnabled) {
                let e4 = i3.bounds[t4.horiz ? "h" : "v"], s3 = t4.minPixelPadding, o3 = t4.toPixels(Math.min(x(t4.options.min, t4.dataMin), t4.dataMin)), r2 = t4.toPixels(Math.max(x(t4.options.max, t4.dataMax), t4.dataMax)), n3 = Math.min(o3, r2), a3 = Math.max(o3, r2);
                e4.min = Math.min(t4.pos, n3 - s3), e4.max = Math.max(t4.pos + t4.len, a3 + s3);
              }
            }), e3.res = true) : f2 ? this.runPointActions(e3.normalize(t3)) : s2.length && (p(i3, "touchpan", { originalEvent: t3 }, () => {
              m2 || (e3.selectionMarker = m2 = d({ destroy: r, touch: true }, i3.plotBox)), e3.pinchTranslate(s2, o2, l2, m2, u2, a2), e3.hasPinched = h2, e3.scaleGroups(l2, u2);
            }), e3.res && (e3.res = false, this.reset(false, 0)));
          }
          pinchTranslate(t3, e3, i3, s2, o2, r2) {
            this.zoomHor && this.pinchTranslateDirection(true, t3, e3, i3, s2, o2, r2), this.zoomVert && this.pinchTranslateDirection(false, t3, e3, i3, s2, o2, r2);
          }
          pinchTranslateDirection(t3, e3, i3, s2, o2, r2, n2, a2) {
            let h2 = this.chart, l2 = t3 ? "x" : "y", d2 = t3 ? "X" : "Y", c2 = "chart" + d2, p2 = t3 ? "width" : "height", u2 = h2["plot" + (t3 ? "Left" : "Top")], g2 = h2.inverted, f2 = h2.bounds[t3 ? "h" : "v"], m2 = 1 === e3.length, x2 = e3[0][c2], y2 = !m2 && e3[1][c2], b2 = function() {
              "number" == typeof w && Math.abs(x2 - y2) > 20 && (M = a2 || Math.abs(C - w) / Math.abs(x2 - y2)), S = (u2 - C) / M + x2, v = h2["plot" + (t3 ? "Width" : "Height")] / M;
            }, v, k, S, M = a2 || 1, C = i3[0][c2], w = !m2 && i3[1][c2], T;
            b2(), (k = S) < f2.min ? (k = f2.min, T = true) : k + v > f2.max && (k = f2.max - v, T = true), T ? (C -= 0.8 * (C - n2[l2][0]), "number" == typeof w && (w -= 0.8 * (w - n2[l2][1])), b2()) : n2[l2] = [C, w], g2 || (r2[l2] = S - u2, r2[p2] = v);
            let A = g2 ? t3 ? "scaleY" : "scaleX" : "scale" + d2, P = g2 ? 1 / M : M;
            o2[p2] = v, o2[l2] = k, s2[A] = M * (g2 && !t3 ? -1 : 1), s2["translate" + d2] = P * u2 + (C - P * x2);
          }
          reset(t3, e3) {
            let i3 = this.chart, s2 = i3.hoverSeries, o2 = i3.hoverPoint, r2 = i3.hoverPoints, n2 = i3.tooltip, a2 = n2 && n2.shared ? r2 : o2;
            t3 && a2 && y(a2).forEach(function(e4) {
              e4.series.isCartesian && void 0 === e4.plotX && (t3 = false);
            }), t3 ? n2 && a2 && y(a2).length && (n2.refresh(a2), n2.shared && r2 ? r2.forEach(function(t4) {
              t4.setState(t4.state, true), t4.series.isCartesian && (t4.series.xAxis.crosshair && t4.series.xAxis.drawCrosshair(null, t4), t4.series.yAxis.crosshair && t4.series.yAxis.drawCrosshair(null, t4));
            }) : o2 && (o2.setState(o2.state, true), i3.axes.forEach(function(t4) {
              t4.crosshair && o2.series[t4.coll] === t4 && t4.drawCrosshair(null, o2);
            }))) : (o2 && o2.onMouseOut(), r2 && r2.forEach(function(t4) {
              t4.setState();
            }), s2 && s2.onMouseOut(), n2 && n2.hide(e3), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i3.axes.forEach(function(t4) {
              t4.hideCrosshair();
            }), this.hoverX = i3.hoverPoints = i3.hoverPoint = null);
          }
          runPointActions(t3, e3, i3) {
            let s2 = this.chart, r2 = s2.series, a2 = s2.tooltip && s2.tooltip.options.enabled ? s2.tooltip : void 0, h2 = !!a2 && a2.shared, l2 = e3 || s2.hoverPoint, d2 = l2 && l2.series || s2.hoverSeries, p2 = (!t3 || "touchmove" !== t3.type) && (!!e3 || d2 && d2.directTouch && this.isDirectTouch), u2 = this.getHoverData(l2, d2, r2, p2, h2, t3);
            l2 = u2.hoverPoint, d2 = u2.hoverSeries;
            let g2 = u2.hoverPoints, f2 = d2 && d2.tooltipOptions.followPointer && !d2.tooltipOptions.split, m2 = h2 && d2 && !d2.noSharedTooltip;
            if (l2 && (i3 || l2 !== s2.hoverPoint || a2 && a2.isHidden)) {
              if ((s2.hoverPoints || []).forEach(function(t4) {
                -1 === g2.indexOf(t4) && t4.setState();
              }), s2.hoverSeries !== d2 && d2.onMouseOver(), this.applyInactiveState(g2), (g2 || []).forEach(function(t4) {
                t4.setState("hover");
              }), s2.hoverPoint && s2.hoverPoint.firePointEvent("mouseOut"), !l2.series)
                return;
              s2.hoverPoints = g2, s2.hoverPoint = l2, l2.firePointEvent("mouseOver", void 0, () => {
                a2 && l2 && a2.refresh(m2 ? g2 : l2, t3);
              });
            } else if (f2 && a2 && !a2.isHidden) {
              let e4 = a2.getAnchor([{}], t3);
              s2.isInsidePlot(e4[0], e4[1], { visiblePlotOnly: true }) && a2.updatePosition({ plotX: e4[0], plotY: e4[1] });
            }
            this.unDocMouseMove || (this.unDocMouseMove = n(s2.container.ownerDocument, "mousemove", function(t4) {
              let e4 = o[b.hoverChartIndex];
              e4 && e4.pointer.onDocumentMouseMove(t4);
            }), this.eventsToUnbind.push(this.unDocMouseMove)), s2.axes.forEach(function(e4) {
              let i4;
              let o2 = x((e4.crosshair || {}).snap, true);
              !o2 || (i4 = s2.hoverPoint) && i4.series[e4.coll] === e4 || (i4 = c(g2, (t4) => t4.series && t4.series[e4.coll] === e4)), i4 || !o2 ? e4.drawCrosshair(t3, i4) : e4.hideCrosshair();
            });
          }
          scaleGroups(t3, e3) {
            let i3 = this.chart;
            i3.series.forEach(function(s2) {
              let o2 = t3 || s2.getPlotBox("series");
              s2.group && (s2.xAxis && s2.xAxis.zoomEnabled || i3.mapView) && (s2.group.attr(o2), s2.markerGroup && (s2.markerGroup.attr(t3 || s2.getPlotBox("marker")), s2.markerGroup.clip(e3 ? i3.clipRect : null)), s2.dataLabelsGroup && s2.dataLabelsGroup.attr(o2));
            }), i3.clipRect.attr(e3 || i3.clipBox);
          }
          setDOMEvents() {
            let t3 = this.chart.container, i3 = t3.ownerDocument;
            t3.onmousedown = this.onContainerMouseDown.bind(this), t3.onmousemove = this.onContainerMouseMove.bind(this), t3.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(n(t3, "mouseenter", this.onContainerMouseEnter.bind(this))), this.eventsToUnbind.push(n(t3, "mouseleave", this.onContainerMouseLeave.bind(this))), b.unbindDocumentMouseUp || (b.unbindDocumentMouseUp = n(i3, "mouseup", this.onDocumentMouseUp.bind(this)));
            let s2 = this.chart.renderTo.parentElement;
            for (; s2 && "BODY" !== s2.tagName; )
              this.eventsToUnbind.push(n(s2, "scroll", () => {
                delete this.chartPosition;
              })), s2 = s2.parentElement;
            e2.hasTouch && (this.eventsToUnbind.push(n(t3, "touchstart", this.onContainerTouchStart.bind(this), { passive: false })), this.eventsToUnbind.push(n(t3, "touchmove", this.onContainerTouchMove.bind(this), { passive: false })), b.unbindDocumentTouchEnd || (b.unbindDocumentTouchEnd = n(i3, "touchend", this.onDocumentTouchEnd.bind(this), { passive: false })));
          }
          setHoverChartIndex(t3) {
            let i3 = this.chart, s2 = e2.charts[x(b.hoverChartIndex, -1)];
            s2 && s2 !== i3 && s2.pointer.onContainerMouseLeave(t3 || { relatedTarget: i3.container }), s2 && s2.mouseIsDown || (b.hoverChartIndex = i3.index);
          }
          touch(t3, e3) {
            let i3, s2;
            let o2 = this.chart;
            this.setHoverChartIndex(), 1 === t3.touches.length ? (t3 = this.normalize(t3), o2.isInsidePlot(t3.chartX - o2.plotLeft, t3.chartY - o2.plotTop, { visiblePlotOnly: true }) && !o2.openMenu ? (e3 && this.runPointActions(t3), "touchmove" === t3.type && (i3 = !!(s2 = this.pinchDown)[0] && Math.sqrt(Math.pow(s2[0].chartX - t3.chartX, 2) + Math.pow(s2[0].chartY - t3.chartY, 2)) >= 4), x(i3, true) && this.pinch(t3)) : e3 && this.reset()) : 2 === t3.touches.length && this.pinch(t3);
          }
          touchSelect(t3) {
            return !!(this.chart.zooming.singleTouch && t3.touches && 1 === t3.touches.length);
          }
          zoomOption(t3) {
            let e3 = this.chart, i3 = (e3.options.chart, e3.inverted), s2 = e3.zooming.type || "", o2, r2;
            /touch/.test(t3.type) && (s2 = x(e3.zooming.pinchType, s2)), this.zoomX = o2 = /x/.test(s2), this.zoomY = r2 = /y/.test(s2), this.zoomHor = o2 && !i3 || r2 && i3, this.zoomVert = r2 && !i3 || o2 && i3, this.hasZoom = o2 || r2;
          }
        }
        return function(t3) {
          let e3 = [], s2 = [];
          t3.compose = function(e4) {
            i2.pushUnique(s2, e4) && n(e4, "beforeRender", function() {
              this.pointer = new t3(this, this.options);
            });
          }, t3.dissolve = function() {
            for (let t4 = 0, i3 = e3.length; t4 < i3; ++t4)
              e3[t4]();
            e3.length = 0;
          };
        }(b || (b = {})), b;
      }), i(e, "Core/Legend/Legend.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Series/Point.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        let { animObject: n, setAnimation: a } = t2, { format: h } = e2, { marginNames: l } = i2, { distribute: d } = o, { addEvent: c, createElement: p, css: u, defined: g, discardElement: f, find: m, fireEvent: x, isNumber: y, merge: b, pick: v, relativeLength: k, stableSort: S, syncTimeout: M } = r;
        class C {
          constructor(t3, e3) {
            this.allItems = [], this.box = void 0, this.contentGroup = void 0, this.display = false, this.group = void 0, this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.options = void 0, this.padding = 0, this.pages = [], this.proximate = false, this.scrollGroup = void 0, this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t3, this.init(t3, e3);
          }
          init(t3, e3) {
            this.chart = t3, this.setOptions(e3), e3.enabled && (this.render(), c(this.chart, "endResize", function() {
              this.legend.positionCheckboxes();
            })), c(this.chart, "render", () => {
              this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
            });
          }
          setOptions(t3) {
            let e3 = v(t3.padding, 8);
            this.options = t3, this.chart.styledMode || (this.itemStyle = t3.itemStyle, this.itemHiddenStyle = b(this.itemStyle, t3.itemHiddenStyle)), this.itemMarginTop = t3.itemMarginTop, this.itemMarginBottom = t3.itemMarginBottom, this.padding = e3, this.initialItemY = e3 - 5, this.symbolWidth = v(t3.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t3.layout && !this.chart.inverted, this.baseline = void 0;
          }
          update(t3, e3) {
            let i3 = this.chart;
            this.setOptions(b(true, this.options, t3)), this.destroy(), i3.isDirtyLegend = i3.isDirtyBox = true, v(e3, true) && i3.redraw(), x(this, "afterUpdate", { redraw: e3 });
          }
          colorizeItem(t3, e3) {
            let { group: i3, label: s2, line: o2, symbol: r2 } = t3.legendItem || {};
            if (i3 && i3[e3 ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
              let { itemHiddenStyle: i4 } = this, n2 = i4.color, a2 = e3 && t3.color || n2, h2 = t3.options && t3.options.marker, l2 = { fill: a2 };
              s2?.css(b(e3 ? this.itemStyle : i4)), o2?.attr({ stroke: a2 }), r2 && (h2 && r2.isMarker && (l2 = t3.pointAttribs(), e3 || (l2.stroke = l2.fill = n2)), r2.attr(l2));
            }
            x(this, "afterColorizeItem", { item: t3, visible: e3 });
          }
          positionItems() {
            this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
          }
          positionItem(t3) {
            let { group: e3, x: i3 = 0, y: s2 = 0 } = t3.legendItem || {}, o2 = this.options, r2 = o2.symbolPadding, n2 = !o2.rtl, a2 = t3.checkbox;
            if (e3 && e3.element) {
              let o3 = { translateX: n2 ? i3 : this.legendWidth - i3 - 2 * r2 - 4, translateY: s2 };
              e3[g(e3.translateY) ? "animate" : "attr"](o3, void 0, () => {
                x(this, "afterPositionItem", { item: t3 });
              });
            }
            a2 && (a2.x = i3, a2.y = s2);
          }
          destroyItem(t3) {
            let e3 = t3.checkbox, i3 = t3.legendItem || {};
            for (let t4 of ["group", "label", "line", "symbol"])
              i3[t4] && (i3[t4] = i3[t4].destroy());
            e3 && f(e3), t3.legendItem = void 0;
          }
          destroy() {
            for (let t3 of this.getAllItems())
              this.destroyItem(t3);
            for (let t3 of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"])
              this[t3] && (this[t3] = this[t3].destroy());
            this.display = null;
          }
          positionCheckboxes() {
            let t3;
            let e3 = this.group && this.group.alignAttr, i3 = this.clipHeight || this.legendHeight, s2 = this.titleHeight;
            e3 && (t3 = e3.translateY, this.allItems.forEach(function(o2) {
              let r2;
              let n2 = o2.checkbox;
              n2 && (r2 = t3 + s2 + n2.y + (this.scrollOffset || 0) + 3, u(n2, { left: e3.translateX + o2.checkboxOffset + n2.x - 20 + "px", top: r2 + "px", display: this.proximate || r2 > t3 - 6 && r2 < t3 + i3 - 6 ? "" : "none" }));
            }, this));
          }
          renderTitle() {
            let t3 = this.options, e3 = this.padding, i3 = t3.title, s2, o2 = 0;
            i3.text && (this.title || (this.title = this.chart.renderer.label(i3.text, e3 - 3, e3 - 4, void 0, void 0, void 0, t3.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(i3.style), this.title.add(this.group)), i3.width || this.title.css({ width: this.maxLegendWidth + "px" }), o2 = (s2 = this.title.getBBox()).height, this.offsetWidth = s2.width, this.contentGroup.attr({ translateY: o2 })), this.titleHeight = o2;
          }
          setText(t3) {
            let e3 = this.options;
            t3.legendItem.label.attr({ text: e3.labelFormat ? h(e3.labelFormat, t3, this.chart) : e3.labelFormatter.call(t3) });
          }
          renderItem(t3) {
            let e3 = t3.legendItem = t3.legendItem || {}, i3 = this.chart, s2 = i3.renderer, o2 = this.options, r2 = "horizontal" === o2.layout, n2 = this.symbolWidth, a2 = o2.symbolPadding || 0, h2 = this.itemStyle, l2 = this.itemHiddenStyle, d2 = r2 ? v(o2.itemDistance, 20) : 0, c2 = !o2.rtl, p2 = !t3.series, u2 = !p2 && t3.series.drawLegendSymbol ? t3.series : t3, g2 = u2.options, f2 = !!this.createCheckboxForItem && g2 && g2.showCheckbox, m2 = o2.useHTML, x2 = t3.options.className, y2 = e3.label, k2 = n2 + a2 + d2 + (f2 ? 20 : 0);
            !y2 && (e3.group = s2.g("legend-item").addClass("highcharts-" + u2.type + "-series highcharts-color-" + t3.colorIndex + (x2 ? " " + x2 : "") + (p2 ? " highcharts-series-" + t3.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), e3.label = y2 = s2.text("", c2 ? n2 + a2 : -a2, this.baseline || 0, m2), i3.styledMode || y2.css(b(t3.visible ? h2 : l2)), y2.attr({ align: c2 ? "left" : "right", zIndex: 2 }).add(e3.group), !this.baseline && (this.fontMetrics = s2.fontMetrics(y2), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, y2.attr("y", this.baseline), this.symbolHeight = v(o2.symbolHeight, this.fontMetrics.f), o2.squareSymbol && (this.symbolWidth = v(o2.symbolWidth, Math.max(this.symbolHeight, 16)), k2 = this.symbolWidth + a2 + d2 + (f2 ? 20 : 0), c2 && y2.attr("x", this.symbolWidth + a2))), u2.drawLegendSymbol(this, t3), this.setItemEvents && this.setItemEvents(t3, y2, m2)), f2 && !t3.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t3), this.colorizeItem(t3, t3.visible), (i3.styledMode || !h2.width) && y2.css({ width: (o2.itemWidth || this.widthOption || i3.spacingBox.width) - k2 + "px" }), this.setText(t3);
            let S2 = y2.getBBox(), M2 = this.fontMetrics && this.fontMetrics.h || 0;
            t3.itemWidth = t3.checkboxOffset = o2.itemWidth || e3.labelWidth || S2.width + k2, this.maxItemWidth = Math.max(this.maxItemWidth, t3.itemWidth), this.totalItemWidth += t3.itemWidth, this.itemHeight = t3.itemHeight = Math.round(e3.labelHeight || (S2.height > 1.5 * M2 ? S2.height : M2));
          }
          layoutItem(t3) {
            let e3 = this.options, i3 = this.padding, s2 = "horizontal" === e3.layout, o2 = t3.itemHeight, r2 = this.itemMarginBottom, n2 = this.itemMarginTop, a2 = s2 ? v(e3.itemDistance, 20) : 0, h2 = this.maxLegendWidth, l2 = e3.alignColumns && this.totalItemWidth > h2 ? this.maxItemWidth : t3.itemWidth, d2 = t3.legendItem || {};
            s2 && this.itemX - i3 + l2 > h2 && (this.itemX = i3, this.lastLineHeight && (this.itemY += n2 + this.lastLineHeight + r2), this.lastLineHeight = 0), this.lastItemY = n2 + this.itemY + r2, this.lastLineHeight = Math.max(o2, this.lastLineHeight), d2.x = this.itemX, d2.y = this.itemY, s2 ? this.itemX += l2 : (this.itemY += n2 + o2 + r2, this.lastLineHeight = o2), this.offsetWidth = this.widthOption || Math.max((s2 ? this.itemX - i3 - (t3.checkbox ? 0 : a2) : l2) + i3, this.offsetWidth);
          }
          getAllItems() {
            let t3 = [];
            return this.chart.series.forEach(function(e3) {
              let i3 = e3 && e3.options;
              e3 && v(i3.showInLegend, !g(i3.linkedTo) && void 0, true) && (t3 = t3.concat((e3.legendItem || {}).labels || ("point" === i3.legendType ? e3.data : e3)));
            }), x(this, "afterGetAllItems", { allItems: t3 }), t3;
          }
          getAlignment() {
            let t3 = this.options;
            return this.proximate ? t3.align.charAt(0) + "tv" : t3.floating ? "" : t3.align.charAt(0) + t3.verticalAlign.charAt(0) + t3.layout.charAt(0);
          }
          adjustMargins(t3, e3) {
            let i3 = this.chart, s2 = this.options, o2 = this.getAlignment();
            o2 && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(r2, n2) {
              r2.test(o2) && !g(t3[n2]) && (i3[l[n2]] = Math.max(i3[l[n2]], i3.legend[(n2 + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][n2] * s2[n2 % 2 ? "x" : "y"] + v(s2.margin, 12) + e3[n2] + (i3.titleOffset[n2] || 0)));
            });
          }
          proximatePositions() {
            let t3;
            let e3 = this.chart, i3 = [], s2 = "left" === this.options.align;
            for (let o2 of (this.allItems.forEach(function(t4) {
              let o3, r2, n2 = s2, a2, h2;
              t4.yAxis && (t4.xAxis.options.reversed && (n2 = !n2), t4.points && (o3 = m(n2 ? t4.points : t4.points.slice(0).reverse(), function(t5) {
                return y(t5.plotY);
              })), r2 = this.itemMarginTop + t4.legendItem.label.getBBox().height + this.itemMarginBottom, h2 = t4.yAxis.top - e3.plotTop, a2 = t4.visible ? (o3 ? o3.plotY : t4.yAxis.height) + (h2 - 0.3 * r2) : h2 + t4.yAxis.height, i3.push({ target: a2, size: r2, item: t4 }));
            }, this), d(i3, e3.plotHeight)))
              t3 = o2.item.legendItem || {}, y(o2.pos) && (t3.y = e3.plotTop - e3.spacing[0] + o2.pos);
          }
          render() {
            let t3 = this.chart, e3 = t3.renderer, i3 = this.options, s2 = this.padding, o2 = this.getAllItems(), r2, n2, a2, h2 = this.group, l2, d2 = this.box;
            this.itemX = s2, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = k(i3.width, t3.spacingBox.width - s2), l2 = t3.spacingBox.width - 2 * s2 - i3.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (l2 /= 2), this.maxLegendWidth = this.widthOption || l2, h2 || (this.group = h2 = e3.g("legend").addClass(i3.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = e3.g().attr({ zIndex: 1 }).add(h2), this.scrollGroup = e3.g().add(this.contentGroup)), this.renderTitle(), S(o2, (t4, e4) => (t4.options && t4.options.legendIndex || 0) - (e4.options && e4.options.legendIndex || 0)), i3.reversed && o2.reverse(), this.allItems = o2, this.display = r2 = !!o2.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, o2.forEach(this.renderItem, this), o2.forEach(this.layoutItem, this), n2 = (this.widthOption || this.offsetWidth) + s2, a2 = this.lastItemY + this.lastLineHeight + this.titleHeight, a2 = this.handleOverflow(a2) + s2, d2 || (this.box = d2 = e3.rect().addClass("highcharts-legend-box").attr({ r: i3.borderRadius }).add(h2)), t3.styledMode || d2.attr({ stroke: i3.borderColor, "stroke-width": i3.borderWidth || 0, fill: i3.backgroundColor || "none" }).shadow(i3.shadow), n2 > 0 && a2 > 0 && d2[d2.placed ? "animate" : "attr"](d2.crisp.call({}, { x: 0, y: 0, width: n2, height: a2 }, d2.strokeWidth())), h2[r2 ? "show" : "hide"](), t3.styledMode && "none" === h2.getStyle("display") && (n2 = a2 = 0), this.legendWidth = n2, this.legendHeight = a2, r2 && this.align(), this.proximate || this.positionItems(), x(this, "afterRender");
          }
          align(t3 = this.chart.spacingBox) {
            let e3 = this.chart, i3 = this.options, s2 = t3.y;
            /(lth|ct|rth)/.test(this.getAlignment()) && e3.titleOffset[0] > 0 ? s2 += e3.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e3.titleOffset[2] > 0 && (s2 -= e3.titleOffset[2]), s2 !== t3.y && (t3 = b(t3, { y: s2 })), e3.hasRendered || (this.group.placed = false), this.group.align(b(i3, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : i3.verticalAlign }), true, t3);
          }
          handleOverflow(t3) {
            let e3 = this, i3 = this.chart, s2 = i3.renderer, o2 = this.options, r2 = o2.y, n2 = "top" === o2.verticalAlign, a2 = this.padding, h2 = o2.maxHeight, l2 = o2.navigation, d2 = v(l2.animation, true), c2 = l2.arrowSize || 12, p2 = this.pages, u2 = this.allItems, g2 = function(t4) {
              "number" == typeof t4 ? S2.attr({ height: t4 }) : S2 && (e3.clipRect = S2.destroy(), e3.contentGroup.clip()), e3.contentGroup.div && (e3.contentGroup.div.style.clip = t4 ? "rect(" + a2 + "px,9999px," + (a2 + t4) + "px,0)" : "auto");
            }, f2 = function(t4) {
              return e3[t4] = s2.circle(0, 0, 1.3 * c2).translate(c2 / 2, c2 / 2).add(k2), i3.styledMode || e3[t4].attr("fill", "rgba(0,0,0,0.0001)"), e3[t4];
            }, m2, x2, y2, b2 = i3.spacingBox.height + (n2 ? -r2 : r2) - a2, k2 = this.nav, S2 = this.clipRect;
            return "horizontal" !== o2.layout || "middle" === o2.verticalAlign || o2.floating || (b2 /= 2), h2 && (b2 = Math.min(b2, h2)), p2.length = 0, t3 && b2 > 0 && t3 > b2 && false !== l2.enabled ? (this.clipHeight = m2 = Math.max(b2 - 20 - this.titleHeight - a2, 0), this.currentPage = v(this.currentPage, 1), this.fullHeight = t3, u2.forEach((t4, e4) => {
              y2 = t4.legendItem || {};
              let i4 = y2.y || 0, s3 = Math.round(y2.label.getBBox().height), o3 = p2.length;
              (!o3 || i4 - p2[o3 - 1] > m2 && (x2 || i4) !== p2[o3 - 1]) && (p2.push(x2 || i4), o3++), y2.pageIx = o3 - 1, x2 && ((u2[e4 - 1].legendItem || {}).pageIx = o3 - 1), e4 === u2.length - 1 && i4 + s3 - p2[o3 - 1] > m2 && i4 > p2[o3 - 1] && (p2.push(i4), y2.pageIx = o3), i4 !== x2 && (x2 = i4);
            }), S2 || (S2 = e3.clipRect = s2.clipRect(0, a2 - 2, 9999, 0), e3.contentGroup.clip(S2)), g2(m2), k2 || (this.nav = k2 = s2.g().attr({ zIndex: 1 }).add(this.group), this.up = s2.symbol("triangle", 0, 0, c2, c2).add(k2), f2("upTracker").on("click", function() {
              e3.scroll(-1, d2);
            }), this.pager = s2.text("", 15, 10).addClass("highcharts-legend-navigation"), !i3.styledMode && l2.style && this.pager.css(l2.style), this.pager.add(k2), this.down = s2.symbol("triangle-down", 0, 0, c2, c2).add(k2), f2("downTracker").on("click", function() {
              e3.scroll(1, d2);
            })), e3.scroll(0), t3 = b2) : k2 && (g2(), this.nav = k2.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), t3;
          }
          scroll(t3, e3) {
            let i3 = this.chart, s2 = this.pages, o2 = s2.length, r2 = this.clipHeight, h2 = this.options.navigation, l2 = this.pager, d2 = this.padding, c2 = this.currentPage + t3;
            if (c2 > o2 && (c2 = o2), c2 > 0) {
              void 0 !== e3 && a(e3, i3), this.nav.attr({ translateX: d2, translateY: r2 + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(t5) {
                t5.attr({ class: 1 === c2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
              }), l2.attr({ text: c2 + "/" + o2 }), [this.down, this.downTracker].forEach(function(t5) {
                t5.attr({ x: 18 + this.pager.getBBox().width, class: c2 === o2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
              }, this), i3.styledMode || (this.up.attr({ fill: 1 === c2 ? h2.inactiveColor : h2.activeColor }), this.upTracker.css({ cursor: 1 === c2 ? "default" : "pointer" }), this.down.attr({ fill: c2 === o2 ? h2.inactiveColor : h2.activeColor }), this.downTracker.css({ cursor: c2 === o2 ? "default" : "pointer" })), this.scrollOffset = -s2[c2 - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = c2, this.positionCheckboxes();
              let t4 = n(v(e3, i3.renderer.globalAnimation, true));
              M(() => {
                x(this, "afterScroll", { currentPage: c2 });
              }, t4.duration);
            }
          }
          setItemEvents(t3, e3, i3) {
            let o2 = this, r2 = t3.legendItem || {}, n2 = o2.chart.renderer.boxWrapper, a2 = t3 instanceof s, h2 = "highcharts-legend-" + (a2 ? "point" : "series") + "-active", l2 = o2.chart.styledMode, d2 = i3 ? [e3, r2.symbol] : [r2.group], c2 = (e4) => {
              o2.allItems.forEach((i4) => {
                t3 !== i4 && [i4].concat(i4.linkedSeries || []).forEach((t4) => {
                  t4.setState(e4, !a2);
                });
              });
            };
            for (let i4 of d2)
              i4 && i4.on("mouseover", function() {
                t3.visible && c2("inactive"), t3.setState("hover"), t3.visible && n2.addClass(h2), l2 || e3.css(o2.options.itemHoverStyle);
              }).on("mouseout", function() {
                o2.chart.styledMode || e3.css(b(t3.visible ? o2.itemStyle : o2.itemHiddenStyle)), c2(""), n2.removeClass(h2), t3.setState();
              }).on("click", function(e4) {
                let i5 = "legendItemClick", s2 = function() {
                  t3.setVisible && t3.setVisible(), c2(t3.visible ? "inactive" : "");
                };
                n2.removeClass(h2), e4 = { browserEvent: e4 }, t3.firePointEvent ? t3.firePointEvent(i5, e4, s2) : x(t3, i5, e4, s2);
              });
          }
          createCheckboxForItem(t3) {
            t3.checkbox = p("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: t3.selected, defaultChecked: t3.selected }, this.options.itemCheckboxStyle, this.chart.container), c(t3.checkbox, "click", function(e3) {
              let i3 = e3.target;
              x(t3.series || t3, "checkboxClick", { checked: i3.checked, item: t3 }, function() {
                t3.select();
              });
            });
          }
        }
        return function(t3) {
          let e3 = [];
          t3.compose = function(i3) {
            r.pushUnique(e3, i3) && c(i3, "beforeMargins", function() {
              this.legend = new t3(this, this.options.legend);
            });
          };
        }(C || (C = {})), C;
      }), i(e, "Core/Legend/LegendSymbol.js", [e["Core/Utilities.js"]], function(t2) {
        var e2, i2;
        let { extend: s, merge: o, pick: r } = t2;
        return (i2 = e2 || (e2 = {})).lineMarker = function(t3, e3) {
          let i3 = this.legendItem = this.legendItem || {}, n = this.options, a = t3.symbolWidth, h = t3.symbolHeight, l = this.symbol || "circle", d = h / 2, c = this.chart.renderer, p = i3.group, u = t3.baseline - Math.round(0.3 * t3.fontMetrics.b), g = {}, f, m = n.marker, x = 0;
          if (this.chart.styledMode || (g = { "stroke-width": Math.min(n.lineWidth || 0, 24) }, n.dashStyle ? g.dashstyle = n.dashStyle : "square" === n.linecap || (g["stroke-linecap"] = "round")), i3.line = c.path().addClass("highcharts-graph").attr(g).add(p), g["stroke-linecap"] && (x = Math.min(i3.line.strokeWidth(), a) / 2), a && i3.line.attr({ d: [["M", x, u], ["L", a - x, u]] }), m && false !== m.enabled && a) {
            let t4 = Math.min(r(m.radius, d), d);
            0 === l.indexOf("url") && (m = o(m, { width: h, height: h }), t4 = 0), i3.symbol = f = c.symbol(l, a / 2 - t4, u - t4, 2 * t4, 2 * t4, s({ context: "legend" }, m)).addClass("highcharts-point").add(p), f.isMarker = true;
          }
        }, i2.rectangle = function(t3, e3) {
          let i3 = e3.legendItem || {}, s2 = t3.options, o2 = t3.symbolHeight, n = s2.squareSymbol, a = n ? o2 : t3.symbolWidth;
          i3.symbol = this.chart.renderer.rect(n ? (t3.symbolWidth - o2) / 2 : 0, t3.baseline - o2 + 1, a, o2, r(t3.options.symbolRadius, o2 / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(i3.group);
        }, e2;
      }), i(e, "Core/Series/SeriesDefaults.js", [], function() {
        return { lineWidth: 2, allowPointSelect: false, crisp: true, showCheckbox: false, animation: { duration: 1e3 }, enableMouseTracking: true, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: true }, hover: { animation: { duration: 150 }, enabled: true, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: true, formatter: function() {
          let { numberFormatter: t2 } = this.series.chart;
          return "number" != typeof this.y ? "" : t2(this.y, -1);
        }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: true, states: { normal: { animation: true }, hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 150 }, opacity: 0.2 } }, stickyTracking: true, turboThreshold: 1e3, findNearestPointBy: "x" };
      }), i(e, "Core/Series/SeriesRegistry.js", [e["Core/Globals.js"], e["Core/Defaults.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s) {
        var o;
        let { defaultOptions: r } = e2, { extendClass: n, merge: a } = s;
        return function(e3) {
          function s2(t3, s3) {
            let o2 = r.plotOptions || {}, n2 = s3.defaultOptions, a2 = s3.prototype;
            a2.type = t3, a2.pointClass || (a2.pointClass = i2), n2 && (o2[t3] = n2), e3.seriesTypes[t3] = s3;
          }
          e3.seriesTypes = t2.seriesTypes, e3.registerSeriesType = s2, e3.seriesType = function(t3, o2, h, l, d) {
            let c = r.plotOptions || {};
            return o2 = o2 || "", c[t3] = a(c[o2], h), s2(t3, n(e3.seriesTypes[o2] || function() {
            }, l)), e3.seriesTypes[t3].prototype.type = t3, d && (e3.seriesTypes[t3].prototype.pointClass = n(i2, d)), e3.seriesTypes[t3];
          };
        }(o || (o = {})), o;
      }), i(e, "Core/Series/Series.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a, h, l) {
        let { animObject: d, setAnimation: c } = t2, { defaultOptions: p } = e2, { registerEventOptions: u } = i2, { hasTouch: g, svg: f, win: m } = s, { seriesTypes: x } = a, { addEvent: y, arrayMax: b, arrayMin: v, clamp: k, correctFloat: S, defined: M, diffObjects: C, erase: w, error: T, extend: A, find: P, fireEvent: L, getClosestDistance: O, getNestedProperty: D, insertItem: E, isArray: I, isNumber: B, isString: j, merge: R, objectEach: z, pick: N, removeEvent: W, splat: H, syncTimeout: G } = l;
        class X {
          constructor() {
            this._i = void 0, this.chart = void 0, this.data = void 0, this.eventOptions = void 0, this.eventsToUnbind = void 0, this.index = void 0, this.linkedSeries = void 0, this.options = void 0, this.points = void 0, this.processedXData = void 0, this.processedYData = void 0, this.tooltipOptions = void 0, this.userOptions = void 0, this.xAxis = void 0, this.yAxis = void 0, this.zones = void 0;
          }
          init(t3, e3) {
            let i3;
            L(this, "init", { options: e3 });
            let s2 = this, o2 = t3.series;
            this.eventsToUnbind = [], s2.chart = t3, s2.options = s2.setOptions(e3);
            let r2 = s2.options, n2 = false !== r2.visible;
            s2.linkedSeries = [], s2.bindAxes(), A(s2, { name: r2.name, state: "", visible: n2, selected: true === r2.selected }), u(this, r2);
            let a2 = r2.events;
            (a2 && a2.click || r2.point && r2.point.events && r2.point.events.click || r2.allowPointSelect) && (t3.runTrackerClick = true), s2.getColor(), s2.getSymbol(), s2.parallelArrays.forEach(function(t4) {
              s2[t4 + "Data"] || (s2[t4 + "Data"] = []);
            }), s2.isCartesian && (t3.hasCartesianSeries = true), o2.length && (i3 = o2[o2.length - 1]), s2._i = N(i3 && i3._i, -1) + 1, s2.opacity = s2.options.opacity, t3.orderItems("series", E(this, o2)), r2.dataSorting && r2.dataSorting.enabled ? s2.setDataSortingOptions() : s2.points || s2.data || s2.setData(r2.data, false), L(this, "afterInit");
          }
          is(t3) {
            return x[t3] && this instanceof x[t3];
          }
          bindAxes() {
            let t3;
            let e3 = this, i3 = e3.options, s2 = e3.chart;
            L(this, "bindAxes", null, function() {
              (e3.axisTypes || []).forEach(function(o2) {
                s2[o2].forEach(function(s3) {
                  t3 = s3.options, (N(i3[o2], 0) === s3.index || void 0 !== i3[o2] && i3[o2] === t3.id) && (E(e3, s3.series), e3[o2] = s3, s3.isDirty = true);
                }), e3[o2] || e3.optionalAxis === o2 || T(18, true, s2);
              });
            }), L(this, "afterBindAxes");
          }
          updateParallelArrays(t3, e3, i3) {
            let s2 = t3.series, o2 = B(e3) ? function(i4) {
              let o3 = "y" === i4 && s2.toYData ? s2.toYData(t3) : t3[i4];
              s2[i4 + "Data"][e3] = o3;
            } : function(t4) {
              Array.prototype[e3].apply(s2[t4 + "Data"], i3);
            };
            s2.parallelArrays.forEach(o2);
          }
          hasData() {
            return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && this.yData.length > 0;
          }
          hasMarkerChanged(t3, e3) {
            let i3 = t3.marker, s2 = e3.marker || {};
            return i3 && (s2.enabled && !i3.enabled || s2.symbol !== i3.symbol || s2.height !== i3.height || s2.width !== i3.width);
          }
          autoIncrement(t3) {
            let e3 = this.options, i3 = e3.pointIntervalUnit, s2 = e3.relativeXValue, o2 = this.chart.time, r2 = this.xIncrement, n2, a2;
            return (r2 = N(r2, e3.pointStart, 0), this.pointInterval = a2 = N(this.pointInterval, e3.pointInterval, 1), s2 && B(t3) && (a2 *= t3), i3 && (n2 = new o2.Date(r2), "day" === i3 ? o2.set("Date", n2, o2.get("Date", n2) + a2) : "month" === i3 ? o2.set("Month", n2, o2.get("Month", n2) + a2) : "year" === i3 && o2.set("FullYear", n2, o2.get("FullYear", n2) + a2), a2 = n2.getTime() - r2), s2 && B(t3)) ? r2 + a2 : (this.xIncrement = r2 + a2, r2);
          }
          setDataSortingOptions() {
            let t3 = this.options;
            A(this, { requireSorting: false, sorted: false, enabledDataSorting: true, allowDG: false }), M(t3.pointRange) || (t3.pointRange = 1);
          }
          setOptions(t3) {
            let e3;
            let i3 = this.chart, s2 = i3.options, o2 = s2.plotOptions, r2 = i3.userOptions || {}, n2 = R(t3), a2 = i3.styledMode, h2 = { plotOptions: o2, userOptions: n2 };
            L(this, "setOptions", h2);
            let l2 = h2.plotOptions[this.type], d2 = r2.plotOptions || {}, c2 = d2.series || {}, u2 = p.plotOptions[this.type] || {}, g2 = d2[this.type] || {};
            this.userOptions = h2.userOptions;
            let f2 = R(l2, o2.series, g2, n2);
            this.tooltipOptions = R(p.tooltip, p.plotOptions.series?.tooltip, u2?.tooltip, i3.userOptions.tooltip, d2.series?.tooltip, g2.tooltip, n2.tooltip), this.stickyTracking = N(n2.stickyTracking, g2.stickyTracking, c2.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || f2.stickyTracking), null === l2.marker && delete f2.marker, this.zoneAxis = f2.zoneAxis;
            let m2 = this.zones = (f2.zones || []).slice();
            return (f2.negativeColor || f2.negativeFillColor) && !f2.zones && (e3 = { value: f2[this.zoneAxis + "Threshold"] || f2.threshold || 0, className: "highcharts-negative" }, a2 || (e3.color = f2.negativeColor, e3.fillColor = f2.negativeFillColor), m2.push(e3)), m2.length && M(m2[m2.length - 1].value) && m2.push(a2 ? {} : { color: this.color, fillColor: this.fillColor }), L(this, "afterSetOptions", { options: f2 }), f2;
          }
          getName() {
            return N(this.options.name, "Series " + (this.index + 1));
          }
          getCyclic(t3, e3, i3) {
            let s2, o2;
            let r2 = this.chart, n2 = `${t3}Index`, a2 = `${t3}Counter`, h2 = i3?.length || r2.options.chart.colorCount;
            !e3 && (M(o2 = N("color" === t3 ? this.options.colorIndex : void 0, this[n2])) ? s2 = o2 : (r2.series.length || (r2[a2] = 0), s2 = r2[a2] % h2, r2[a2] += 1), i3 && (e3 = i3[s2])), void 0 !== s2 && (this[n2] = s2), this[t3] = e3;
          }
          getColor() {
            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || p.plotOptions[this.type].color, this.chart.options.colors);
          }
          getPointsCollection() {
            return (this.hasGroupedData ? this.points : this.data) || [];
          }
          getSymbol() {
            let t3 = this.options.marker;
            this.getCyclic("symbol", t3.symbol, this.chart.options.symbols);
          }
          findPointIndex(t3, e3) {
            let i3, s2, o2;
            let n2 = t3.id, a2 = t3.x, h2 = this.points, l2 = this.options.dataSorting;
            if (n2) {
              let t4 = this.chart.get(n2);
              t4 instanceof r && (i3 = t4);
            } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
              let e4 = (e5) => !e5.touched && e5.index === t3.index;
              if (l2 && l2.matchByName ? e4 = (e5) => !e5.touched && e5.name === t3.name : this.options.relativeXValue && (e4 = (e5) => !e5.touched && e5.options.x === t3.x), !(i3 = P(h2, e4)))
                return;
            }
            return i3 && void 0 !== (o2 = i3 && i3.index) && (s2 = true), void 0 === o2 && B(a2) && (o2 = this.xData.indexOf(a2, e3)), -1 !== o2 && void 0 !== o2 && this.cropped && (o2 = o2 >= this.cropStart ? o2 - this.cropStart : o2), !s2 && B(o2) && h2[o2] && h2[o2].touched && (o2 = void 0), o2;
          }
          updateData(t3, e3) {
            let i3 = this.options, s2 = i3.dataSorting, o2 = this.points, r2 = [], n2 = this.requireSorting, a2 = t3.length === o2.length, h2, l2, d2, c2, p2 = true;
            if (this.xIncrement = null, t3.forEach(function(t4, e4) {
              let l3;
              let d3 = M(t4) && this.pointClass.prototype.optionsToObject.call({ series: this }, t4) || {}, p3 = d3.x, u2 = d3.id;
              u2 || B(p3) ? (-1 === (l3 = this.findPointIndex(d3, c2)) || void 0 === l3 ? r2.push(t4) : o2[l3] && t4 !== i3.data[l3] ? (o2[l3].update(t4, false, null, false), o2[l3].touched = true, n2 && (c2 = l3 + 1)) : o2[l3] && (o2[l3].touched = true), (!a2 || e4 !== l3 || s2 && s2.enabled || this.hasDerivedData) && (h2 = true)) : r2.push(t4);
            }, this), h2)
              for (l2 = o2.length; l2--; )
                (d2 = o2[l2]) && !d2.touched && d2.remove && d2.remove(false, e3);
            else
              !a2 || s2 && s2.enabled ? p2 = false : (t3.forEach(function(t4, e4) {
                t4 === o2[e4].y || o2[e4].destroyed || o2[e4].update(t4, false, null, false);
              }), r2.length = 0);
            return o2.forEach(function(t4) {
              t4 && (t4.touched = false);
            }), !!p2 && (r2.forEach(function(t4) {
              this.addPoint(t4, false, null, null, false);
            }, this), null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = b(this.xData), this.autoIncrement()), true);
          }
          setData(t3, e3 = true, i3, s2) {
            let o2 = this, r2 = o2.points, n2 = r2 && r2.length || 0, a2 = o2.options, h2 = o2.chart, l2 = a2.dataSorting, d2 = o2.xAxis, c2 = a2.turboThreshold, p2 = this.xData, u2 = this.yData, g2 = o2.pointArrayMap, f2 = g2 && g2.length, m2 = a2.keys, x2, y2, b2, v2 = 0, k2 = 1, S2 = null, M2;
            h2.options.chart.allowMutatingData || (a2.data && delete o2.options.data, o2.userOptions.data && delete o2.userOptions.data, M2 = R(true, t3)), t3 = M2 || t3 || [];
            let C2 = t3.length;
            if (l2 && l2.enabled && (t3 = this.sortData(t3)), h2.options.chart.allowMutatingData && false !== s2 && C2 && n2 && !o2.cropped && !o2.hasGroupedData && o2.visible && !o2.boosted && (b2 = this.updateData(t3, i3)), !b2) {
              if (o2.xIncrement = null, o2.colorCounter = 0, this.parallelArrays.forEach(function(t4) {
                o2[t4 + "Data"].length = 0;
              }), c2 && C2 > c2) {
                if (B(S2 = o2.getFirstValidPoint(t3)))
                  for (x2 = 0; x2 < C2; x2++)
                    p2[x2] = this.autoIncrement(), u2[x2] = t3[x2];
                else if (I(S2)) {
                  if (f2) {
                    if (S2.length === f2)
                      for (x2 = 0; x2 < C2; x2++)
                        p2[x2] = this.autoIncrement(), u2[x2] = t3[x2];
                    else
                      for (x2 = 0; x2 < C2; x2++)
                        y2 = t3[x2], p2[x2] = y2[0], u2[x2] = y2.slice(1, f2 + 1);
                  } else if (m2 && (v2 = m2.indexOf("x"), k2 = m2.indexOf("y"), v2 = v2 >= 0 ? v2 : 0, k2 = k2 >= 0 ? k2 : 1), 1 === S2.length && (k2 = 0), v2 === k2)
                    for (x2 = 0; x2 < C2; x2++)
                      p2[x2] = this.autoIncrement(), u2[x2] = t3[x2][k2];
                  else
                    for (x2 = 0; x2 < C2; x2++)
                      y2 = t3[x2], p2[x2] = y2[v2], u2[x2] = y2[k2];
                } else
                  T(12, false, h2);
              } else
                for (x2 = 0; x2 < C2; x2++)
                  y2 = { series: o2 }, o2.pointClass.prototype.applyOptions.apply(y2, [t3[x2]]), o2.updateParallelArrays(y2, x2);
              for (u2 && j(u2[0]) && T(14, true, h2), o2.data = [], o2.options.data = o2.userOptions.data = t3, x2 = n2; x2--; )
                r2[x2]?.destroy();
              d2 && (d2.minRange = d2.userMinRange), o2.isDirty = h2.isDirtyBox = true, o2.isDirtyData = !!r2, i3 = false;
            }
            "point" === a2.legendType && (this.processData(), this.generatePoints()), e3 && h2.redraw(i3);
          }
          sortData(t3) {
            let e3 = this, i3 = e3.options, s2 = i3.dataSorting, o2 = s2.sortKey || "y", r2 = function(t4, e4) {
              return M(e4) && t4.pointClass.prototype.optionsToObject.call({ series: t4 }, e4) || {};
            };
            t3.forEach(function(i4, s3) {
              t3[s3] = r2(e3, i4), t3[s3].index = s3;
            }, this);
            let n2 = t3.concat().sort((t4, e4) => {
              let i4 = D(o2, t4), s3 = D(o2, e4);
              return s3 < i4 ? -1 : s3 > i4 ? 1 : 0;
            });
            return n2.forEach(function(t4, e4) {
              t4.x = e4;
            }, this), e3.linkedSeries && e3.linkedSeries.forEach(function(e4) {
              let i4 = e4.options, s3 = i4.data;
              i4.dataSorting && i4.dataSorting.enabled || !s3 || (s3.forEach(function(i5, o3) {
                s3[o3] = r2(e4, i5), t3[o3] && (s3[o3].x = t3[o3].x, s3[o3].index = o3);
              }), e4.setData(s3, false));
            }), t3;
          }
          getProcessedData(t3) {
            let e3 = this, i3 = e3.xAxis, s2 = e3.options, o2 = s2.cropThreshold, r2 = t3 || e3.getExtremesFromAll || s2.getExtremesFromAll, n2 = i3?.logarithmic, a2 = e3.isCartesian, h2, l2, d2 = 0, c2, p2, u2, g2 = e3.xData, f2 = e3.yData, m2 = false, x2 = g2.length;
            i3 && (p2 = (c2 = i3.getExtremes()).min, u2 = c2.max, m2 = !!(i3.categories && !i3.names.length)), a2 && e3.sorted && !r2 && (!o2 || x2 > o2 || e3.forceCrop) && (g2[x2 - 1] < p2 || g2[0] > u2 ? (g2 = [], f2 = []) : e3.yData && (g2[0] < p2 || g2[x2 - 1] > u2) && (g2 = (h2 = this.cropData(e3.xData, e3.yData, p2, u2)).xData, f2 = h2.yData, d2 = h2.start, l2 = true));
            let y2 = O([n2 ? g2.map(n2.log2lin) : g2], () => e3.requireSorting && !m2 && T(15, false, e3.chart));
            return { xData: g2, yData: f2, cropped: l2, cropStart: d2, closestPointRange: y2 };
          }
          processData(t3) {
            let e3 = this.xAxis;
            if (this.isCartesian && !this.isDirty && !e3.isDirty && !this.yAxis.isDirty && !t3)
              return false;
            let i3 = this.getProcessedData();
            this.cropped = i3.cropped, this.cropStart = i3.cropStart, this.processedXData = i3.xData, this.processedYData = i3.yData, this.closestPointRange = this.basePointRange = i3.closestPointRange, L(this, "afterProcessData");
          }
          cropData(t3, e3, i3, s2) {
            let o2 = t3.length, r2, n2, a2 = 0, h2 = o2;
            for (r2 = 0; r2 < o2; r2++)
              if (t3[r2] >= i3) {
                a2 = Math.max(0, r2 - 1);
                break;
              }
            for (n2 = r2; n2 < o2; n2++)
              if (t3[n2] > s2) {
                h2 = n2 + 1;
                break;
              }
            return { xData: t3.slice(a2, h2), yData: e3.slice(a2, h2), start: a2, end: h2 };
          }
          generatePoints() {
            let t3 = this.options, e3 = this.processedData || t3.data, i3 = this.processedXData, s2 = this.processedYData, o2 = this.pointClass, r2 = i3.length, n2 = this.cropStart || 0, a2 = this.hasGroupedData, h2 = t3.keys, l2 = [], d2 = t3.dataGrouping && t3.dataGrouping.groupAll ? n2 : 0, c2, p2, u2, g2, f2 = this.data;
            if (!f2 && !a2) {
              let t4 = [];
              t4.length = e3.length, f2 = this.data = t4;
            }
            for (h2 && a2 && (this.options.keys = false), g2 = 0; g2 < r2; g2++)
              p2 = n2 + g2, a2 ? ((u2 = new o2().init(this, [i3[g2]].concat(H(s2[g2])))).dataGroup = this.groupMap[d2 + g2], u2.dataGroup.options && (u2.options = u2.dataGroup.options, A(u2, u2.dataGroup.options), delete u2.dataLabels)) : (u2 = f2[p2]) || void 0 === e3[p2] || (f2[p2] = u2 = new o2().init(this, e3[p2], i3[g2])), u2 && (u2.index = a2 ? d2 + g2 : p2, l2[g2] = u2);
            if (this.options.keys = h2, f2 && (r2 !== (c2 = f2.length) || a2))
              for (g2 = 0; g2 < c2; g2++)
                g2 !== n2 || a2 || (g2 += r2), f2[g2] && (f2[g2].destroyElements(), f2[g2].plotX = void 0);
            this.data = f2, this.points = l2, L(this, "afterGeneratePoints");
          }
          getXExtremes(t3) {
            return { min: v(t3), max: b(t3) };
          }
          getExtremes(t3, e3) {
            let i3 = this.xAxis, s2 = this.yAxis, o2 = this.processedXData || this.xData, r2 = [], n2 = this.requireSorting && !this.is("column") ? 1 : 0, a2 = !!s2 && s2.positiveValuesOnly, h2, l2, d2, c2, p2, u2, g2, f2 = 0, m2 = 0, x2 = 0;
            t3 = t3 || this.stackedYData || this.processedYData || [];
            let y2 = t3.length;
            for (i3 && (f2 = (h2 = i3.getExtremes()).min, m2 = h2.max), u2 = 0; u2 < y2; u2++)
              if (c2 = o2[u2], l2 = (B(p2 = t3[u2]) || I(p2)) && ((B(p2) ? p2 > 0 : p2.length) || !a2), d2 = e3 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !i3 || (o2[u2 + n2] || c2) >= f2 && (o2[u2 - n2] || c2) <= m2, l2 && d2) {
                if (g2 = p2.length)
                  for (; g2--; )
                    B(p2[g2]) && (r2[x2++] = p2[g2]);
                else
                  r2[x2++] = p2;
              }
            let k2 = { activeYData: r2, dataMin: v(r2), dataMax: b(r2) };
            return L(this, "afterGetExtremes", { dataExtremes: k2 }), k2;
          }
          applyExtremes() {
            let t3 = this.getExtremes();
            return this.dataMin = t3.dataMin, this.dataMax = t3.dataMax, t3;
          }
          getFirstValidPoint(t3) {
            let e3 = t3.length, i3 = 0, s2 = null;
            for (; null === s2 && i3 < e3; )
              s2 = t3[i3], i3++;
            return s2;
          }
          translate() {
            this.processedXData || this.processData(), this.generatePoints();
            let t3 = this.options, e3 = t3.stacking, i3 = this.xAxis, s2 = i3.categories, o2 = this.enabledDataSorting, r2 = this.yAxis, n2 = this.points, a2 = n2.length, h2 = this.pointPlacementToXValue(), l2 = !!h2, d2 = t3.threshold, c2 = t3.startFromThreshold ? d2 : 0, p2, u2, g2, f2, m2 = Number.MAX_VALUE;
            function x2(t4) {
              return k(t4, -1e5, 1e5);
            }
            for (p2 = 0; p2 < a2; p2++) {
              let t4;
              let a3 = n2[p2], y2 = a3.x, b2, v2, k2 = a3.y, C2 = a3.low, w2 = e3 && r2.stacking?.stacks[(this.negStacks && k2 < (c2 ? 0 : d2) ? "-" : "") + this.stackKey];
              u2 = i3.translate(y2, false, false, false, true, h2), a3.plotX = B(u2) ? S(x2(u2)) : void 0, e3 && this.visible && w2 && w2[y2] && (f2 = this.getStackIndicator(f2, y2, this.index), !a3.isNull && f2.key && (v2 = (b2 = w2[y2]).points[f2.key]), b2 && I(v2) && (C2 = v2[0], k2 = v2[1], C2 === c2 && f2.key === w2[y2].base && (C2 = N(B(d2) ? d2 : r2.min)), r2.positiveValuesOnly && M(C2) && C2 <= 0 && (C2 = void 0), a3.total = a3.stackTotal = N(b2.total), a3.percentage = M(a3.y) && b2.total ? a3.y / b2.total * 100 : void 0, a3.stackY = k2, this.irregularWidths || b2.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), a3.yBottom = M(C2) ? x2(r2.translate(C2, false, true, false, true)) : void 0, this.dataModify && (k2 = this.dataModify.modifyValue(k2, p2)), B(k2) && void 0 !== a3.plotX && (t4 = B(t4 = r2.translate(k2, false, true, false, true)) ? x2(t4) : void 0), a3.plotY = t4, a3.isInside = this.isPointInside(a3), a3.clientX = l2 ? S(i3.translate(y2, false, false, false, true, h2)) : u2, a3.negative = (a3.y || 0) < (d2 || 0), a3.category = N(s2 && s2[a3.x], a3.x), a3.isNull || false === a3.visible || (void 0 !== g2 && (m2 = Math.min(m2, Math.abs(u2 - g2))), g2 = u2), a3.zone = this.zones.length ? a3.getZone() : void 0, !a3.graphic && this.group && o2 && (a3.isNew = true);
            }
            this.closestPointRangePx = m2, L(this, "afterTranslate");
          }
          getValidPoints(t3, e3, i3) {
            let s2 = this.chart;
            return (t3 || this.points || []).filter(function(t4) {
              let { plotX: o2, plotY: r2 } = t4, n2 = !i3 && (t4.isNull || !B(r2));
              return !n2 && (!e3 || !!s2.isInsidePlot(o2, r2, { inverted: s2.inverted })) && false !== t4.visible;
            });
          }
          getClipBox() {
            let { chart: t3, xAxis: e3, yAxis: i3 } = this, s2 = R(t3.clipBox);
            return e3 && e3.len !== t3.plotSizeX && (s2.width = e3.len), i3 && i3.len !== t3.plotSizeY && (s2.height = i3.len), s2;
          }
          getSharedClipKey() {
            return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
          }
          setClip() {
            let { chart: t3, group: e3, markerGroup: i3 } = this, s2 = t3.sharedClips, o2 = t3.renderer, r2 = this.getClipBox(), n2 = this.getSharedClipKey(), a2 = s2[n2];
            a2 ? a2.animate(r2) : s2[n2] = a2 = o2.clipRect(r2), e3 && e3.clip(false === this.options.clip ? void 0 : a2), i3 && i3.clip();
          }
          animate(t3) {
            let { chart: e3, group: i3, markerGroup: s2 } = this, o2 = e3.inverted, r2 = d(this.options.animation), n2 = [this.getSharedClipKey(), r2.duration, r2.easing, r2.defer].join(","), a2 = e3.sharedClips[n2], h2 = e3.sharedClips[n2 + "m"];
            if (t3 && i3) {
              let t4 = this.getClipBox();
              if (a2)
                a2.attr("height", t4.height);
              else {
                t4.width = 0, o2 && (t4.x = e3.plotHeight), a2 = e3.renderer.clipRect(t4), e3.sharedClips[n2] = a2;
                let i4 = { x: -99, y: -99, width: o2 ? e3.plotWidth + 199 : 99, height: o2 ? 99 : e3.plotHeight + 199 };
                h2 = e3.renderer.clipRect(i4), e3.sharedClips[n2 + "m"] = h2;
              }
              i3.clip(a2), s2 && s2.clip(h2);
            } else if (a2 && !a2.hasClass("highcharts-animating")) {
              let t4 = this.getClipBox(), e4 = r2.step;
              s2 && s2.element.childNodes.length && (r2.step = function(t5, i4) {
                e4 && e4.apply(i4, arguments), "width" === i4.prop && h2 && h2.element && h2.attr(o2 ? "height" : "width", t5 + 99);
              }), a2.addClass("highcharts-animating").animate(t4, r2);
            }
          }
          afterAnimate() {
            this.setClip(), z(this.chart.sharedClips, (t3, e3, i3) => {
              t3 && !this.chart.container.querySelector(`[clip-path="url(#${t3.id})"]`) && (t3.destroy(), delete i3[e3]);
            }), this.finishedAnimating = true, L(this, "afterAnimate");
          }
          drawPoints(t3 = this.points) {
            let e3, i3, s2, o2, r2, n2, a2;
            let h2 = this.chart, l2 = h2.styledMode, { colorAxis: d2, options: c2 } = this, p2 = c2.marker, u2 = this[this.specialGroup || "markerGroup"], g2 = this.xAxis, f2 = N(p2.enabled, !g2 || !!g2.isRadial || null, this.closestPointRangePx >= p2.enabledThreshold * p2.radius);
            if (false !== p2.enabled || this._hasPointMarkers)
              for (e3 = 0; e3 < t3.length; e3++) {
                o2 = (s2 = (i3 = t3[e3]).graphic) ? "animate" : "attr", r2 = i3.marker || {}, n2 = !!i3.marker;
                let c3 = (f2 && void 0 === r2.enabled || r2.enabled) && !i3.isNull && false !== i3.visible;
                if (c3) {
                  let t4 = N(r2.symbol, this.symbol, "rect");
                  a2 = this.markerAttribs(i3, i3.selected && "select"), this.enabledDataSorting && (i3.startXPos = g2.reversed ? -(a2.width || 0) : g2.width);
                  let e4 = false !== i3.isInside;
                  if (!s2 && e4 && ((a2.width || 0) > 0 || i3.hasImage) && (i3.graphic = s2 = h2.renderer.symbol(t4, a2.x, a2.y, a2.width, a2.height, n2 ? r2 : p2).add(u2), this.enabledDataSorting && h2.hasRendered && (s2.attr({ x: i3.startXPos }), o2 = "animate")), s2 && "animate" === o2 && s2[e4 ? "show" : "hide"](e4).animate(a2), s2) {
                    let t5 = this.pointAttribs(i3, l2 || !i3.selected ? void 0 : "select");
                    l2 ? d2 && s2.css({ fill: t5.fill }) : s2[o2](t5);
                  }
                  s2 && s2.addClass(i3.getClassName(), true);
                } else
                  s2 && (i3.graphic = s2.destroy());
              }
          }
          markerAttribs(t3, e3) {
            let i3 = this.options, s2 = i3.marker, o2 = t3.marker || {}, r2 = o2.symbol || s2.symbol, n2 = {}, a2, h2, l2 = N(o2.radius, s2 && s2.radius);
            e3 && (a2 = s2.states[e3], l2 = N((h2 = o2.states && o2.states[e3]) && h2.radius, a2 && a2.radius, l2 && l2 + (a2 && a2.radiusPlus || 0))), t3.hasImage = r2 && 0 === r2.indexOf("url"), t3.hasImage && (l2 = 0);
            let d2 = t3.pos();
            return B(l2) && d2 && (n2.x = d2[0] - l2, n2.y = d2[1] - l2, i3.crisp && (n2.x = Math.floor(n2.x))), l2 && (n2.width = n2.height = 2 * l2), n2;
          }
          pointAttribs(t3, e3) {
            let i3 = this.options.marker, s2 = t3 && t3.options, o2 = s2 && s2.marker || {}, r2 = s2 && s2.color, n2 = t3 && t3.color, a2 = t3 && t3.zone && t3.zone.color, h2, l2, d2 = this.color, c2, p2, u2 = N(o2.lineWidth, i3.lineWidth), g2 = 1;
            return d2 = r2 || a2 || n2 || d2, c2 = o2.fillColor || i3.fillColor || d2, p2 = o2.lineColor || i3.lineColor || d2, e3 = e3 || "normal", h2 = i3.states[e3] || {}, u2 = N((l2 = o2.states && o2.states[e3] || {}).lineWidth, h2.lineWidth, u2 + N(l2.lineWidthPlus, h2.lineWidthPlus, 0)), c2 = l2.fillColor || h2.fillColor || c2, { stroke: p2 = l2.lineColor || h2.lineColor || p2, "stroke-width": u2, fill: c2, opacity: g2 = N(l2.opacity, h2.opacity, g2) };
          }
          destroy(t3) {
            let e3, i3, s2;
            let o2 = this, r2 = o2.chart, n2 = /AppleWebKit\/533/.test(m.navigator.userAgent), a2 = o2.data || [];
            for (L(o2, "destroy", { keepEventsForUpdate: t3 }), this.removeEvents(t3), (o2.axisTypes || []).forEach(function(t4) {
              (s2 = o2[t4]) && s2.series && (w(s2.series, o2), s2.isDirty = s2.forceRedraw = true);
            }), o2.legendItem && o2.chart.legend.destroyItem(o2), e3 = a2.length; e3--; )
              (i3 = a2[e3]) && i3.destroy && i3.destroy();
            o2.clips && o2.clips.forEach((t4) => t4.destroy()), l.clearTimeout(o2.animationTimeout), z(o2, function(t4, e4) {
              t4 instanceof h && !t4.survive && t4[n2 && "group" === e4 ? "hide" : "destroy"]();
            }), r2.hoverSeries === o2 && (r2.hoverSeries = void 0), w(r2.series, o2), r2.orderItems("series"), z(o2, function(e4, i4) {
              t3 && "hcEvents" === i4 || delete o2[i4];
            });
          }
          applyZones() {
            let t3 = this, e3 = this.chart, i3 = e3.renderer, s2 = this.zones, o2 = this.clips || [], r2 = this.graph, n2 = this.area, a2 = Math.max(e3.plotWidth, e3.plotHeight), h2 = this[(this.zoneAxis || "y") + "Axis"], l2 = e3.inverted, d2, c2, p2, u2, g2, f2, m2, x2, y2, b2, v2, S2 = false;
            s2.length && (r2 || n2) && h2 && void 0 !== h2.min ? (g2 = h2.reversed, f2 = h2.horiz, r2 && !this.showLine && r2.hide(), n2 && n2.hide(), u2 = h2.getExtremes(), s2.forEach(function(s3, M2) {
              d2 = g2 ? f2 ? e3.plotWidth : 0 : f2 ? 0 : h2.toPixels(u2.min) || 0, d2 = k(N(c2, d2), 0, a2), c2 = k(Math.round(h2.toPixels(N(s3.value, u2.max), true) || 0), 0, a2), S2 && (d2 = c2 = h2.toPixels(u2.max)), m2 = Math.abs(d2 - c2), x2 = Math.min(d2, c2), y2 = Math.max(d2, c2), h2.isXAxis ? (p2 = { x: l2 ? y2 : x2, y: 0, width: m2, height: a2 }, f2 || (p2.x = e3.plotHeight - p2.x)) : (p2 = { x: 0, y: l2 ? y2 : x2, width: a2, height: m2 }, f2 && (p2.y = e3.plotWidth - p2.y)), o2[M2] ? o2[M2].animate(p2) : o2[M2] = i3.clipRect(p2), b2 = t3["zone-area-" + M2], v2 = t3["zone-graph-" + M2], r2 && v2 && v2.clip(o2[M2]), n2 && b2 && b2.clip(o2[M2]), S2 = s3.value > u2.max, t3.resetZones && 0 === c2 && (c2 = void 0);
            }), this.clips = o2) : t3.visible && (r2 && r2.show(), n2 && n2.show());
          }
          plotGroup(t3, e3, i3, s2, o2) {
            let r2 = this[t3], n2 = !r2, a2 = { visibility: i3, zIndex: s2 || 0.1 };
            return void 0 === this.opacity || this.chart.styledMode || "inactive" === this.state || (a2.opacity = this.opacity), n2 && (this[t3] = r2 = this.chart.renderer.g().add(o2)), r2.addClass("highcharts-" + e3 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (M(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (r2.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), true), r2.attr(a2)[n2 ? "attr" : "animate"](this.getPlotBox(e3)), r2;
          }
          getPlotBox(t3) {
            let e3 = this.xAxis, i3 = this.yAxis, s2 = this.chart, o2 = s2.inverted && !s2.polar && e3 && false !== this.invertible && "series" === t3;
            return s2.inverted && (e3 = i3, i3 = this.xAxis), { translateX: e3 ? e3.left : s2.plotLeft, translateY: i3 ? i3.top : s2.plotTop, rotation: o2 ? 90 : 0, rotationOriginX: o2 ? (e3.len - i3.len) / 2 : 0, rotationOriginY: o2 ? (e3.len + i3.len) / 2 : 0, scaleX: o2 ? -1 : 1, scaleY: 1 };
          }
          removeEvents(t3) {
            t3 || W(this), this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(t4) {
              t4();
            }), this.eventsToUnbind.length = 0);
          }
          render() {
            let t3 = this, e3 = t3.chart, i3 = t3.options, s2 = d(i3.animation), o2 = t3.visible ? "inherit" : "hidden", r2 = i3.zIndex, n2 = t3.hasRendered, a2 = e3.seriesGroup;
            e3.inverted;
            let h2 = t3.finishedAnimating ? 0 : s2.duration;
            L(this, "render"), t3.plotGroup("group", "series", o2, r2, a2), t3.markerGroup = t3.plotGroup("markerGroup", "markers", o2, r2, a2), false !== i3.clip && t3.setClip(), t3.animate && h2 && t3.animate(true), t3.drawGraph && (t3.drawGraph(), t3.applyZones()), t3.visible && t3.drawPoints(), t3.drawDataLabels && t3.drawDataLabels(), t3.redrawPoints && t3.redrawPoints(), t3.drawTracker && i3.enableMouseTracking && t3.drawTracker(), t3.animate && h2 && t3.animate(), n2 || (h2 && s2.defer && (h2 += s2.defer), t3.animationTimeout = G(function() {
              t3.afterAnimate();
            }, h2 || 0)), t3.isDirty = false, t3.hasRendered = true, L(t3, "afterRender");
          }
          redraw() {
            let t3 = this.isDirty || this.isDirtyData;
            this.translate(), this.render(), t3 && delete this.kdTree;
          }
          reserveSpace() {
            return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
          }
          searchPoint(t3, e3) {
            let i3 = this.xAxis, s2 = this.yAxis, o2 = this.chart.inverted;
            return this.searchKDTree({ clientX: o2 ? i3.len - t3.chartY + i3.pos : t3.chartX - i3.pos, plotY: o2 ? s2.len - t3.chartX + s2.pos : t3.chartY - s2.pos }, e3, t3);
          }
          buildKDTree(t3) {
            this.buildingKdTree = true;
            let e3 = this, i3 = e3.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
            delete e3.kdTree, G(function() {
              e3.kdTree = function t4(i4, s2, o2) {
                let r2, n2;
                let a2 = i4 && i4.length;
                if (a2)
                  return r2 = e3.kdAxisArray[s2 % o2], i4.sort(function(t5, e4) {
                    return t5[r2] - e4[r2];
                  }), { point: i4[n2 = Math.floor(a2 / 2)], left: t4(i4.slice(0, n2), s2 + 1, o2), right: t4(i4.slice(n2 + 1), s2 + 1, o2) };
              }(e3.getValidPoints(null, !e3.directTouch), i3, i3), e3.buildingKdTree = false;
            }, e3.options.kdNow || t3 && "touchstart" === t3.type ? 0 : 1);
          }
          searchKDTree(t3, e3, i3) {
            let s2 = this, [o2, r2] = this.kdAxisArray, n2 = e3 ? "distX" : "dist", a2 = (s2.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, h2 = !!s2.isBubble;
            if (this.kdTree || this.buildingKdTree || this.buildKDTree(i3), this.kdTree)
              return function t4(e4, i4, a3, l2) {
                let d2 = i4.point, c2 = s2.kdAxisArray[a3 % l2], p2, u2, g2 = d2;
                !function(t5, e5) {
                  let i5 = t5[o2], s3 = e5[o2], n3 = M(i5) && M(s3) ? i5 - s3 : null, a4 = t5[r2], l3 = e5[r2], d3 = M(a4) && M(l3) ? a4 - l3 : 0, c3 = h2 && e5.marker?.radius || 0;
                  e5.dist = Math.sqrt((n3 && n3 * n3 || 0) + d3 * d3) - c3, e5.distX = M(n3) ? Math.abs(n3) - c3 : Number.MAX_VALUE;
                }(e4, d2);
                let f2 = (e4[c2] || 0) - (d2[c2] || 0) + (h2 && d2.marker?.radius || 0), m2 = f2 < 0 ? "left" : "right", x2 = f2 < 0 ? "right" : "left";
                return i4[m2] && (g2 = (p2 = t4(e4, i4[m2], a3 + 1, l2))[n2] < g2[n2] ? p2 : d2), i4[x2] && Math.sqrt(f2 * f2) < g2[n2] && (g2 = (u2 = t4(e4, i4[x2], a3 + 1, l2))[n2] < g2[n2] ? u2 : g2), g2;
              }(t3, this.kdTree, a2, a2);
          }
          pointPlacementToXValue() {
            let { options: { pointPlacement: t3, pointRange: e3 }, xAxis: i3 } = this, s2 = t3;
            return "between" === s2 && (s2 = i3.reversed ? -0.5 : 0.5), B(s2) ? s2 * (e3 || i3.pointRange) : 0;
          }
          isPointInside(t3) {
            let { chart: e3, xAxis: i3, yAxis: s2 } = this, o2 = void 0 !== t3.plotY && void 0 !== t3.plotX && t3.plotY >= 0 && t3.plotY <= (s2 ? s2.len : e3.plotHeight) && t3.plotX >= 0 && t3.plotX <= (i3 ? i3.len : e3.plotWidth);
            return o2;
          }
          drawTracker() {
            let t3 = this, e3 = t3.options, i3 = e3.trackByArea, s2 = [].concat(i3 ? t3.areaPath : t3.graphPath), o2 = t3.chart, r2 = o2.pointer, n2 = o2.renderer, a2 = o2.options.tooltip.snap, h2 = t3.tracker, l2 = function(i4) {
              e3.enableMouseTracking && o2.hoverSeries !== t3 && t3.onMouseOver();
            }, d2 = "rgba(192,192,192," + (f ? 1e-4 : 2e-3) + ")";
            h2 ? h2.attr({ d: s2 }) : t3.graph && (t3.tracker = n2.path(s2).attr({ visibility: t3.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(i3 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t3.group), o2.styledMode || t3.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: d2, fill: i3 ? d2 : "none", "stroke-width": t3.graph.strokeWidth() + (i3 ? 0 : 2 * a2) }), [t3.tracker, t3.markerGroup, t3.dataLabelsGroup].forEach(function(t4) {
              t4 && (t4.addClass("highcharts-tracker").on("mouseover", l2).on("mouseout", function(t5) {
                r2.onTrackerMouseOut(t5);
              }), e3.cursor && !o2.styledMode && t4.css({ cursor: e3.cursor }), g && t4.on("touchstart", l2));
            })), L(this, "afterDrawTracker");
          }
          addPoint(t3, e3, i3, s2, o2) {
            let r2, n2;
            let a2 = this.options, h2 = this.data, l2 = this.chart, d2 = this.xAxis, c2 = d2 && d2.hasNames && d2.names, p2 = a2.data, u2 = this.xData;
            e3 = N(e3, true);
            let g2 = { series: this };
            this.pointClass.prototype.applyOptions.apply(g2, [t3]);
            let f2 = g2.x;
            if (n2 = u2.length, this.requireSorting && f2 < u2[n2 - 1])
              for (r2 = true; n2 && u2[n2 - 1] > f2; )
                n2--;
            this.updateParallelArrays(g2, "splice", [n2, 0, 0]), this.updateParallelArrays(g2, n2), c2 && g2.name && (c2[f2] = g2.name), p2.splice(n2, 0, t3), (r2 || this.processedData) && (this.data.splice(n2, 0, null), this.processData()), "point" === a2.legendType && this.generatePoints(), i3 && (h2[0] && h2[0].remove ? h2[0].remove(false) : (h2.shift(), this.updateParallelArrays(g2, "shift"), p2.shift())), false !== o2 && L(this, "addPoint", { point: g2 }), this.isDirty = true, this.isDirtyData = true, e3 && l2.redraw(s2);
          }
          removePoint(t3, e3, i3) {
            let s2 = this, o2 = s2.data, r2 = o2[t3], n2 = s2.points, a2 = s2.chart, h2 = function() {
              n2 && n2.length === o2.length && n2.splice(t3, 1), o2.splice(t3, 1), s2.options.data.splice(t3, 1), s2.updateParallelArrays(r2 || { series: s2 }, "splice", [t3, 1]), r2 && r2.destroy(), s2.isDirty = true, s2.isDirtyData = true, e3 && a2.redraw();
            };
            c(i3, a2), e3 = N(e3, true), r2 ? r2.firePointEvent("remove", null, h2) : h2();
          }
          remove(t3, e3, i3, s2) {
            let o2 = this, r2 = o2.chart;
            function n2() {
              o2.destroy(s2), r2.isDirtyLegend = r2.isDirtyBox = true, r2.linkSeries(s2), N(t3, true) && r2.redraw(e3);
            }
            false !== i3 ? L(o2, "remove", null, n2) : n2();
          }
          update(t3, e3) {
            L(this, "update", { options: t3 = C(t3, this.userOptions) });
            let i3 = this, s2 = i3.chart, o2 = i3.userOptions, r2 = i3.initialType || i3.type, n2 = s2.options.plotOptions, a2 = x[r2].prototype, h2 = i3.finishedAnimating && { animation: false }, l2 = {}, d2, c2, p2 = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], u2 = t3.type || o2.type || s2.options.chart.type, g2 = !(this.hasDerivedData || u2 && u2 !== this.type || void 0 !== t3.pointStart || void 0 !== t3.pointInterval || void 0 !== t3.relativeXValue || t3.joinBy || t3.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((t4) => i3.hasOptionChanged(t4)));
            u2 = u2 || r2, g2 && (p2.push("data", "isDirtyData", "isDirtyCanvas", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "clips", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), false !== t3.visible && p2.push("area", "graph"), i3.parallelArrays.forEach(function(t4) {
              p2.push(t4 + "Data");
            }), t3.data && (t3.dataSorting && A(i3.options.dataSorting, t3.dataSorting), this.setData(t3.data, false))), t3 = R(o2, h2, { index: void 0 === o2.index ? i3.index : o2.index, pointStart: N(n2?.series?.pointStart, o2.pointStart, i3.xData[0]) }, !g2 && { data: i3.options.data }, t3), g2 && t3.data && (t3.data = i3.options.data), (p2 = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(p2)).forEach(function(t4) {
              p2[t4] = i3[t4], delete i3[t4];
            });
            let f2 = false;
            if (x[u2]) {
              if (f2 = u2 !== i3.type, i3.remove(false, false, false, true), f2) {
                if (Object.setPrototypeOf)
                  Object.setPrototypeOf(i3, x[u2].prototype);
                else {
                  let t4 = Object.hasOwnProperty.call(i3, "hcEvents") && i3.hcEvents;
                  for (c2 in a2)
                    i3[c2] = void 0;
                  A(i3, x[u2].prototype), t4 ? i3.hcEvents = t4 : delete i3.hcEvents;
                }
              }
            } else
              T(17, true, s2, { missingModuleFor: u2 });
            if (p2.forEach(function(t4) {
              i3[t4] = p2[t4];
            }), i3.init(s2, t3), g2 && this.points)
              for (let t4 of (false === (d2 = i3.options).visible ? (l2.graphic = 1, l2.dataLabel = 1) : (this.hasMarkerChanged(d2, o2) && (l2.graphic = 1), i3.hasDataLabels?.() || (l2.dataLabel = 1)), this.points))
                t4 && t4.series && (t4.resolveColor(), Object.keys(l2).length && t4.destroyElements(l2), false === d2.showInLegend && t4.legendItem && s2.legend.destroyItem(t4));
            i3.initialType = r2, s2.linkSeries(), f2 && i3.linkedSeries.length && (i3.isDirtyData = true), L(this, "afterUpdate"), N(e3, true) && s2.redraw(!!g2 && void 0);
          }
          setName(t3) {
            this.name = this.options.name = this.userOptions.name = t3, this.chart.isDirtyLegend = true;
          }
          hasOptionChanged(t3) {
            let e3 = this.chart, i3 = this.options[t3], s2 = e3.options.plotOptions, o2 = this.userOptions[t3], r2 = N(s2?.[this.type]?.[t3], s2?.series?.[t3]);
            return o2 && !M(r2) ? i3 !== o2 : i3 !== N(r2, i3);
          }
          onMouseOver() {
            let t3 = this.chart, e3 = t3.hoverSeries, i3 = t3.pointer;
            i3.setHoverChartIndex(), e3 && e3 !== this && e3.onMouseOut(), this.options.events.mouseOver && L(this, "mouseOver"), this.setState("hover"), t3.hoverSeries = this;
          }
          onMouseOut() {
            let t3 = this.options, e3 = this.chart, i3 = e3.tooltip, s2 = e3.hoverPoint;
            e3.hoverSeries = null, s2 && s2.onMouseOut(), this && t3.events.mouseOut && L(this, "mouseOut"), i3 && !this.stickyTracking && (!i3.shared || this.noSharedTooltip) && i3.hide(), e3.series.forEach(function(t4) {
              t4.setState("", true);
            });
          }
          setState(t3, e3) {
            let i3 = this, s2 = i3.options, o2 = i3.graph, r2 = s2.inactiveOtherPoints, n2 = s2.states, a2 = N(n2[t3 || "normal"] && n2[t3 || "normal"].animation, i3.chart.options.chart.animation), h2, l2 = s2.lineWidth, d2 = 0, c2 = s2.opacity;
            if (t3 = t3 || "", i3.state !== t3 && ([i3.group, i3.markerGroup, i3.dataLabelsGroup].forEach(function(e4) {
              e4 && (i3.state && e4.removeClass("highcharts-series-" + i3.state), t3 && e4.addClass("highcharts-series-" + t3));
            }), i3.state = t3, !i3.chart.styledMode)) {
              if (n2[t3] && false === n2[t3].enabled)
                return;
              if (t3 && (l2 = n2[t3].lineWidth || l2 + (n2[t3].lineWidthPlus || 0), c2 = N(n2[t3].opacity, c2)), o2 && !o2.dashstyle && B(l2))
                for (h2 = { "stroke-width": l2 }, o2.animate(h2, a2); i3["zone-graph-" + d2]; )
                  i3["zone-graph-" + d2].animate(h2, a2), d2 += 1;
              r2 || [i3.group, i3.markerGroup, i3.dataLabelsGroup, i3.labelBySeries].forEach(function(t4) {
                t4 && t4.animate({ opacity: c2 }, a2);
              });
            }
            e3 && r2 && i3.points && i3.setAllPointsToState(t3 || void 0);
          }
          setAllPointsToState(t3) {
            this.points.forEach(function(e3) {
              e3.setState && e3.setState(t3);
            });
          }
          setVisible(t3, e3) {
            let i3 = this, s2 = i3.chart, o2 = s2.options.chart.ignoreHiddenSeries, r2 = i3.visible;
            i3.visible = t3 = i3.options.visible = i3.userOptions.visible = void 0 === t3 ? !r2 : t3;
            let n2 = t3 ? "show" : "hide";
            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((t4) => {
              i3[t4]?.[n2]();
            }), (s2.hoverSeries === i3 || s2.hoverPoint?.series === i3) && i3.onMouseOut(), i3.legendItem && s2.legend.colorizeItem(i3, t3), i3.isDirty = true, i3.options.stacking && s2.series.forEach((t4) => {
              t4.options.stacking && t4.visible && (t4.isDirty = true);
            }), i3.linkedSeries.forEach((e4) => {
              e4.setVisible(t3, false);
            }), o2 && (s2.isDirtyBox = true), L(i3, n2), false !== e3 && s2.redraw();
          }
          show() {
            this.setVisible(true);
          }
          hide() {
            this.setVisible(false);
          }
          select(t3) {
            this.selected = t3 = this.options.selected = void 0 === t3 ? !this.selected : t3, this.checkbox && (this.checkbox.checked = t3), L(this, t3 ? "select" : "unselect");
          }
          shouldShowTooltip(t3, e3, i3 = {}) {
            return i3.series = this, i3.visiblePlotOnly = true, this.chart.isInsidePlot(t3, e3, i3);
          }
          drawLegendSymbol(t3, e3) {
            o[this.options.legendSymbol || "rectangle"]?.call(this, t3, e3);
          }
        }
        return X.defaultOptions = n, X.types = a.seriesTypes, X.registerType = a.registerSeriesType, A(X.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, directTouch: false, isCartesian: true, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: r, requireSorting: true, sorted: true }), a.series = X, X;
      }), i(e, "Core/Chart/Chart.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Time.js"], e["Core/Utilities.js"], e["Core/Renderer/HTML/AST.js"]], function(t2, e2, i2, s, o, r, n, a, h, l, d, c, p) {
        let { animate: u, animObject: g, setAnimation: f } = t2, { defaultOptions: m, defaultTime: x } = i2, { numberFormat: y } = s, { registerEventOptions: b } = o, { charts: v, doc: k, marginNames: S, svg: M, win: C } = r, { seriesTypes: w } = h, { addEvent: T, attr: A, createElement: P, css: L, defined: O, diffObjects: D, discardElement: E, erase: I, error: B, extend: j, find: R, fireEvent: z, getStyle: N, isArray: W, isNumber: H, isObject: G, isString: X, merge: Y, objectEach: F, pick: U, pInt: V, relativeLength: q, removeEvent: Z, splat: $, syncTimeout: _, uniqueKey: K } = c;
        class J {
          static chart(t3, e3, i3) {
            return new J(t3, e3, i3);
          }
          constructor(t3, e3, i3) {
            this.axes = void 0, this.axisOffset = void 0, this.bounds = void 0, this.chartHeight = void 0, this.chartWidth = void 0, this.clipBox = void 0, this.colorCounter = void 0, this.container = void 0, this.eventOptions = void 0, this.index = void 0, this.isResizing = void 0, this.labelCollectors = void 0, this.margin = void 0, this.numberFormatter = void 0, this.options = void 0, this.plotBox = void 0, this.plotHeight = void 0, this.plotLeft = void 0, this.plotTop = void 0, this.plotWidth = void 0, this.pointCount = void 0, this.pointer = void 0, this.renderer = void 0, this.renderTo = void 0, this.series = void 0, this.sharedClips = {}, this.spacing = void 0, this.spacingBox = void 0, this.symbolCounter = void 0, this.time = void 0, this.titleOffset = void 0, this.userOptions = void 0, this.xAxis = void 0, this.yAxis = void 0, this.zooming = void 0, this.getArgs(t3, e3, i3);
          }
          getArgs(t3, e3, i3) {
            X(t3) || t3.nodeName ? (this.renderTo = t3, this.init(e3, i3)) : this.init(t3, e3);
          }
          setZoomOptions() {
            let t3 = this.options.chart, e3 = t3.zooming;
            this.zooming = __spreadProps(__spreadValues({}, e3), { type: U(t3.zoomType, e3.type), key: U(t3.zoomKey, e3.key), pinchType: U(t3.pinchType, e3.pinchType), singleTouch: U(t3.zoomBySingleTouch, e3.singleTouch, false), resetButton: Y(e3.resetButton, t3.resetZoomButton) });
          }
          init(t3, e3) {
            z(this, "init", { args: arguments }, function() {
              let i3 = Y(m, t3), s2 = i3.chart;
              this.userOptions = j({}, t3), this.margin = [], this.spacing = [], this.bounds = { h: {}, v: {} }, this.labelCollectors = [], this.callback = e3, this.isResizing = 0, this.options = i3, this.axes = [], this.series = [], this.time = t3.time && Object.keys(t3.time).length ? new d(t3.time) : r.time, this.numberFormatter = s2.numberFormatter || y, this.styledMode = s2.styledMode, this.hasCartesianSeries = s2.showAxes, this.index = v.length, v.push(this), r.chartCount++, b(this, s2), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), z(this, "afterInit"), this.firstRender();
            });
          }
          initSeries(t3) {
            let e3 = this.options.chart, i3 = t3.type || e3.type, s2 = w[i3];
            s2 || B(17, true, this, { missingModuleFor: i3 });
            let o2 = new s2();
            return "function" == typeof o2.init && o2.init(this, t3), o2;
          }
          setSeriesData() {
            this.getSeriesOrderByLinks().forEach(function(t3) {
              t3.points || t3.data || !t3.enabledDataSorting || t3.setData(t3.options.data, false);
            });
          }
          getSeriesOrderByLinks() {
            return this.series.concat().sort(function(t3, e3) {
              return t3.linkedSeries.length || e3.linkedSeries.length ? e3.linkedSeries.length - t3.linkedSeries.length : 0;
            });
          }
          orderItems(t3, e3 = 0) {
            let i3 = this[t3], s2 = this.options[t3] = $(this.options[t3]).slice(), o2 = this.userOptions[t3] = this.userOptions[t3] ? $(this.userOptions[t3]).slice() : [];
            if (this.hasRendered && (s2.splice(e3), o2.splice(e3)), i3)
              for (let t4 = e3, r2 = i3.length; t4 < r2; ++t4) {
                let e4 = i3[t4];
                e4 && (e4.index = t4, e4 instanceof a && (e4.name = e4.getName()), e4.options.isInternal || (s2[t4] = e4.options, o2[t4] = e4.userOptions));
              }
          }
          isInsidePlot(t3, e3, i3 = {}) {
            let { inverted: s2, plotBox: o2, plotLeft: r2, plotTop: n2, scrollablePlotBox: a2 } = this, h2 = 0, l2 = 0;
            i3.visiblePlotOnly && this.scrollingContainer && ({ scrollLeft: h2, scrollTop: l2 } = this.scrollingContainer);
            let d2 = i3.series, c2 = i3.visiblePlotOnly && a2 || o2, p2 = i3.inverted ? e3 : t3, u2 = i3.inverted ? t3 : e3, g2 = { x: p2, y: u2, isInsidePlot: true, options: i3 };
            if (!i3.ignoreX) {
              let t4 = d2 && (s2 && !this.polar ? d2.yAxis : d2.xAxis) || { pos: r2, len: 1 / 0 }, e4 = i3.paneCoordinates ? t4.pos + p2 : r2 + p2;
              e4 >= Math.max(h2 + r2, t4.pos) && e4 <= Math.min(h2 + r2 + c2.width, t4.pos + t4.len) || (g2.isInsidePlot = false);
            }
            if (!i3.ignoreY && g2.isInsidePlot) {
              let t4 = !s2 && i3.axis && !i3.axis.isXAxis && i3.axis || d2 && (s2 ? d2.xAxis : d2.yAxis) || { pos: n2, len: 1 / 0 }, e4 = i3.paneCoordinates ? t4.pos + u2 : n2 + u2;
              e4 >= Math.max(l2 + n2, t4.pos) && e4 <= Math.min(l2 + n2 + c2.height, t4.pos + t4.len) || (g2.isInsidePlot = false);
            }
            return z(this, "afterIsInsidePlot", g2), g2.isInsidePlot;
          }
          redraw(t3) {
            z(this, "beforeRedraw");
            let e3 = this.hasCartesianSeries ? this.axes : this.colorAxis || [], i3 = this.series, s2 = this.pointer, o2 = this.legend, r2 = this.userOptions.legend, n2 = this.renderer, a2 = n2.isHidden(), h2 = [], l2, d2, c2, p2 = this.isDirtyBox, u2 = this.isDirtyLegend, g2;
            for (n2.rootFontSize = n2.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(false), f(!!this.hasRendered && t3, this), a2 && this.temporaryDisplay(), this.layOutTitles(false), c2 = i3.length; c2--; )
              if (((g2 = i3[c2]).options.stacking || g2.options.centerInCategory) && (d2 = true, g2.isDirty)) {
                l2 = true;
                break;
              }
            if (l2)
              for (c2 = i3.length; c2--; )
                (g2 = i3[c2]).options.stacking && (g2.isDirty = true);
            i3.forEach(function(t4) {
              t4.isDirty && ("point" === t4.options.legendType ? ("function" == typeof t4.updateTotals && t4.updateTotals(), u2 = true) : r2 && (r2.labelFormatter || r2.labelFormat) && (u2 = true)), t4.isDirtyData && z(t4, "updatedData");
            }), u2 && o2 && o2.options.enabled && (o2.render(), this.isDirtyLegend = false), d2 && this.getStacks(), e3.forEach(function(t4) {
              t4.updateNames(), t4.setScale();
            }), this.getMargins(), e3.forEach(function(t4) {
              t4.isDirty && (p2 = true);
            }), e3.forEach(function(t4) {
              let e4 = t4.min + "," + t4.max;
              t4.extKey !== e4 && (t4.extKey = e4, h2.push(function() {
                z(t4, "afterSetExtremes", j(t4.eventArgs, t4.getExtremes())), delete t4.eventArgs;
              })), (p2 || d2) && t4.redraw();
            }), p2 && this.drawChartBox(), z(this, "predraw"), i3.forEach(function(t4) {
              (p2 || t4.isDirty) && t4.visible && t4.redraw(), t4.isDirtyData = false;
            }), s2 && s2.reset(true), n2.draw(), z(this, "redraw"), z(this, "render"), a2 && this.temporaryDisplay(true), h2.forEach(function(t4) {
              t4.call();
            });
          }
          get(t3) {
            let e3 = this.series;
            function i3(e4) {
              return e4.id === t3 || e4.options && e4.options.id === t3;
            }
            let s2 = R(this.axes, i3) || R(this.series, i3);
            for (let t4 = 0; !s2 && t4 < e3.length; t4++)
              s2 = R(e3[t4].points || [], i3);
            return s2;
          }
          getAxes() {
            let t3 = this.options;
            for (let i3 of (z(this, "getAxes"), ["xAxis", "yAxis"])) {
              let s2 = t3[i3] = $(t3[i3] || {});
              for (let t4 of s2)
                new e2(this, t4, i3);
            }
            z(this, "afterGetAxes");
          }
          getSelectedPoints() {
            return this.series.reduce((t3, e3) => (e3.getPointsCollection().forEach((e4) => {
              U(e4.selectedStaging, e4.selected) && t3.push(e4);
            }), t3), []);
          }
          getSelectedSeries() {
            return this.series.filter(function(t3) {
              return t3.selected;
            });
          }
          setTitle(t3, e3, i3) {
            this.applyDescription("title", t3), this.applyDescription("subtitle", e3), this.applyDescription("caption", void 0), this.layOutTitles(i3);
          }
          applyDescription(t3, e3) {
            let i3 = this, s2 = this.options[t3] = Y(this.options[t3], e3), o2 = this[t3];
            o2 && e3 && (this[t3] = o2 = o2.destroy()), s2 && !o2 && ((o2 = this.renderer.text(s2.text, 0, 0, s2.useHTML).attr({ align: s2.align, class: "highcharts-" + t3, zIndex: s2.zIndex || 4 }).add()).update = function(e4, s3) {
              i3.applyDescription(t3, e4), i3.layOutTitles(s3);
            }, this.styledMode || o2.css(j("title" === t3 ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, s2.style)), this[t3] = o2);
          }
          layOutTitles(t3 = true) {
            let e3 = [0, 0, 0], i3 = this.renderer, s2 = this.spacingBox;
            ["title", "subtitle", "caption"].forEach(function(t4) {
              let o3 = this[t4], r2 = this.options[t4], n2 = r2.verticalAlign || "top", a2 = "title" === t4 ? "top" === n2 ? -3 : 0 : "top" === n2 ? e3[0] + 2 : 0;
              if (o3) {
                o3.css({ width: (r2.width || s2.width + (r2.widthAdjust || 0)) + "px" });
                let t5 = i3.fontMetrics(o3).b, h2 = Math.round(o3.getBBox(r2.useHTML).height);
                o3.align(j({ y: "bottom" === n2 ? t5 : a2 + t5, height: h2 }, r2), false, "spacingBox"), r2.floating || ("top" === n2 ? e3[0] = Math.ceil(e3[0] + h2) : "bottom" === n2 && (e3[2] = Math.ceil(e3[2] + h2)));
              }
            }, this), e3[0] && "top" === (this.options.title.verticalAlign || "top") && (e3[0] += this.options.title.margin), e3[2] && "bottom" === this.options.caption.verticalAlign && (e3[2] += this.options.caption.margin);
            let o2 = !this.titleOffset || this.titleOffset.join(",") !== e3.join(",");
            this.titleOffset = e3, z(this, "afterLayOutTitles"), !this.isDirtyBox && o2 && (this.isDirtyBox = this.isDirtyLegend = o2, this.hasRendered && t3 && this.isDirtyBox && this.redraw());
          }
          getContainerBox() {
            return { width: N(this.renderTo, "width", true) || 0, height: N(this.renderTo, "height", true) || 0 };
          }
          getChartSize() {
            let t3 = this.options.chart, e3 = t3.width, i3 = t3.height, s2 = this.getContainerBox();
            this.chartWidth = Math.max(0, e3 || s2.width || 600), this.chartHeight = Math.max(0, q(i3, this.chartWidth) || (s2.height > 1 ? s2.height : 400)), this.containerBox = s2;
          }
          temporaryDisplay(t3) {
            let e3 = this.renderTo, i3;
            if (t3)
              for (; e3 && e3.style; )
                e3.hcOrigStyle && (L(e3, e3.hcOrigStyle), delete e3.hcOrigStyle), e3.hcOrigDetached && (k.body.removeChild(e3), e3.hcOrigDetached = false), e3 = e3.parentNode;
            else
              for (; e3 && e3.style && (k.body.contains(e3) || e3.parentNode || (e3.hcOrigDetached = true, k.body.appendChild(e3)), ("none" === N(e3, "display", false) || e3.hcOricDetached) && (e3.hcOrigStyle = { display: e3.style.display, height: e3.style.height, overflow: e3.style.overflow }, i3 = { display: "block", overflow: "hidden" }, e3 !== this.renderTo && (i3.height = 0), L(e3, i3), e3.offsetWidth || e3.style.setProperty("display", "block", "important")), (e3 = e3.parentNode) !== k.body); )
                ;
          }
          setClassName(t3) {
            this.container.className = "highcharts-container " + (t3 || "");
          }
          getContainer() {
            let t3 = this.options, e3 = t3.chart, i3 = "data-highcharts-chart", s2 = K(), o2, r2 = this.renderTo;
            r2 || (this.renderTo = r2 = e3.renderTo), X(r2) && (this.renderTo = r2 = k.getElementById(r2)), r2 || B(13, true, this);
            let a2 = V(A(r2, i3));
            H(a2) && v[a2] && v[a2].hasRendered && v[a2].destroy(), A(r2, i3, this.index), r2.innerHTML = p.emptyHTML, e3.skipClone || r2.offsetWidth || this.temporaryDisplay(), this.getChartSize();
            let h2 = this.chartWidth, d2 = this.chartHeight;
            L(r2, { overflow: "hidden" }), this.styledMode || (o2 = j({ position: "relative", overflow: "hidden", width: h2 + "px", height: d2 + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none" }, e3.style || {}));
            let c2 = P("div", { id: s2 }, o2, r2);
            this.container = c2, this._cursor = c2.style.cursor;
            let u2 = e3.renderer || !M ? n.getRendererType(e3.renderer) : l;
            if (this.renderer = new u2(c2, h2, d2, void 0, e3.forExport, t3.exporting && t3.exporting.allowHTML, this.styledMode), this.containerBox = this.getContainerBox(), f(void 0, this), this.setClassName(e3.className), this.styledMode)
              for (let e4 in t3.defs)
                this.renderer.definition(t3.defs[e4]);
            else
              this.renderer.setStyle(e3.style);
            this.renderer.chartIndex = this.index, z(this, "afterGetContainer");
          }
          getMargins(t3) {
            let { spacing: e3, margin: i3, titleOffset: s2 } = this;
            this.resetMargins(), s2[0] && !O(i3[0]) && (this.plotTop = Math.max(this.plotTop, s2[0] + e3[0])), s2[2] && !O(i3[2]) && (this.marginBottom = Math.max(this.marginBottom, s2[2] + e3[2])), this.legend && this.legend.display && this.legend.adjustMargins(i3, e3), z(this, "getMargins"), t3 || this.getAxisMargins();
          }
          getAxisMargins() {
            let t3 = this, e3 = t3.axisOffset = [0, 0, 0, 0], i3 = t3.colorAxis, s2 = t3.margin, o2 = function(t4) {
              t4.forEach(function(t5) {
                t5.visible && t5.getOffset();
              });
            };
            t3.hasCartesianSeries ? o2(t3.axes) : i3 && i3.length && o2(i3), S.forEach(function(i4, o3) {
              O(s2[o3]) || (t3[i4] += e3[o3]);
            }), t3.setChartSize();
          }
          getOptions() {
            return D(this.userOptions, m);
          }
          reflow(t3) {
            let e3 = this, i3 = e3.containerBox, s2 = e3.getContainerBox();
            delete e3.pointer.chartPosition, !e3.isPrinting && !e3.isResizing && i3 && s2.width && ((s2.width !== i3.width || s2.height !== i3.height) && (c.clearTimeout(e3.reflowTimeout), e3.reflowTimeout = _(function() {
              e3.container && e3.setSize(void 0, void 0, false);
            }, t3 ? 100 : 0)), e3.containerBox = s2);
          }
          setReflow() {
            let t3 = this, e3 = (e4) => {
              t3.options?.chart.reflow && t3.hasLoaded && t3.reflow(e4);
            };
            if ("function" == typeof ResizeObserver)
              new ResizeObserver(e3).observe(t3.renderTo);
            else {
              let t4 = T(C, "resize", e3);
              T(this, "destroy", t4);
            }
          }
          setSize(t3, e3, i3) {
            let s2 = this, o2 = s2.renderer;
            s2.isResizing += 1, f(i3, s2);
            let r2 = o2.globalAnimation;
            s2.oldChartHeight = s2.chartHeight, s2.oldChartWidth = s2.chartWidth, void 0 !== t3 && (s2.options.chart.width = t3), void 0 !== e3 && (s2.options.chart.height = e3), s2.getChartSize(), s2.styledMode || (r2 ? u : L)(s2.container, { width: s2.chartWidth + "px", height: s2.chartHeight + "px" }, r2), s2.setChartSize(true), o2.setSize(s2.chartWidth, s2.chartHeight, r2), s2.axes.forEach(function(t4) {
              t4.isDirty = true, t4.setScale();
            }), s2.isDirtyLegend = true, s2.isDirtyBox = true, s2.layOutTitles(), s2.getMargins(), s2.redraw(r2), s2.oldChartHeight = null, z(s2, "resize"), setTimeout(() => {
              s2 && z(s2, "endResize", void 0, () => {
                s2.isResizing -= 1;
              });
            }, g(r2).duration);
          }
          setChartSize(t3) {
            let e3, i3, s2, o2;
            let r2 = this.inverted, n2 = this.renderer, a2 = this.chartWidth, h2 = this.chartHeight, l2 = this.options.chart, d2 = this.spacing, c2 = this.clipOffset;
            this.plotLeft = e3 = Math.round(this.plotLeft), this.plotTop = i3 = Math.round(this.plotTop), this.plotWidth = s2 = Math.max(0, Math.round(a2 - e3 - this.marginRight)), this.plotHeight = o2 = Math.max(0, Math.round(h2 - i3 - this.marginBottom)), this.plotSizeX = r2 ? o2 : s2, this.plotSizeY = r2 ? s2 : o2, this.plotBorderWidth = l2.plotBorderWidth || 0, this.spacingBox = n2.spacingBox = { x: d2[3], y: d2[0], width: a2 - d2[3] - d2[1], height: h2 - d2[0] - d2[2] }, this.plotBox = n2.plotBox = { x: e3, y: i3, width: s2, height: o2 };
            let p2 = 2 * Math.floor(this.plotBorderWidth / 2), u2 = Math.ceil(Math.max(p2, c2[3]) / 2), g2 = Math.ceil(Math.max(p2, c2[0]) / 2);
            this.clipBox = { x: u2, y: g2, width: Math.floor(this.plotSizeX - Math.max(p2, c2[1]) / 2 - u2), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(p2, c2[2]) / 2 - g2)) }, t3 || (this.axes.forEach(function(t4) {
              t4.setAxisSize(), t4.setAxisTranslation();
            }), n2.alignElements()), z(this, "afterSetChartSize", { skipAxes: t3 });
          }
          resetMargins() {
            z(this, "resetMargins");
            let t3 = this, e3 = t3.options.chart;
            ["margin", "spacing"].forEach(function(i3) {
              let s2 = e3[i3], o2 = G(s2) ? s2 : [s2, s2, s2, s2];
              ["Top", "Right", "Bottom", "Left"].forEach(function(s3, r2) {
                t3[i3][r2] = U(e3[i3 + s3], o2[r2]);
              });
            }), S.forEach(function(e4, i3) {
              t3[e4] = U(t3.margin[i3], t3.spacing[i3]);
            }), t3.axisOffset = [0, 0, 0, 0], t3.clipOffset = [0, 0, 0, 0];
          }
          drawChartBox() {
            let t3 = this.options.chart, e3 = this.renderer, i3 = this.chartWidth, s2 = this.chartHeight, o2 = this.styledMode, r2 = this.plotBGImage, n2 = t3.backgroundColor, a2 = t3.plotBackgroundColor, h2 = t3.plotBackgroundImage, l2 = this.plotLeft, d2 = this.plotTop, c2 = this.plotWidth, p2 = this.plotHeight, u2 = this.plotBox, g2 = this.clipRect, f2 = this.clipBox, m2 = this.chartBackground, x2 = this.plotBackground, y2 = this.plotBorder, b2, v2, k2, S2 = "animate";
            m2 || (this.chartBackground = m2 = e3.rect().addClass("highcharts-background").add(), S2 = "attr"), o2 ? b2 = v2 = m2.strokeWidth() : (v2 = (b2 = t3.borderWidth || 0) + (t3.shadow ? 8 : 0), k2 = { fill: n2 || "none" }, (b2 || m2["stroke-width"]) && (k2.stroke = t3.borderColor, k2["stroke-width"] = b2), m2.attr(k2).shadow(t3.shadow)), m2[S2]({ x: v2 / 2, y: v2 / 2, width: i3 - v2 - b2 % 2, height: s2 - v2 - b2 % 2, r: t3.borderRadius }), S2 = "animate", x2 || (S2 = "attr", this.plotBackground = x2 = e3.rect().addClass("highcharts-plot-background").add()), x2[S2](u2), !o2 && (x2.attr({ fill: a2 || "none" }).shadow(t3.plotShadow), h2 && (r2 ? (h2 !== r2.attr("href") && r2.attr("href", h2), r2.animate(u2)) : this.plotBGImage = e3.image(h2, l2, d2, c2, p2).add())), g2 ? g2.animate({ width: f2.width, height: f2.height }) : this.clipRect = e3.clipRect(f2), S2 = "animate", y2 || (S2 = "attr", this.plotBorder = y2 = e3.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), o2 || y2.attr({ stroke: t3.plotBorderColor, "stroke-width": t3.plotBorderWidth || 0, fill: "none" }), y2[S2](y2.crisp({ x: l2, y: d2, width: c2, height: p2 }, -y2.strokeWidth())), this.isDirtyBox = false, z(this, "afterDrawChartBox");
          }
          propFromSeries() {
            let t3, e3, i3;
            let s2 = this, o2 = s2.options.chart, r2 = s2.options.series;
            ["inverted", "angular", "polar"].forEach(function(n2) {
              for (e3 = w[o2.type], i3 = o2[n2] || e3 && e3.prototype[n2], t3 = r2 && r2.length; !i3 && t3--; )
                (e3 = w[r2[t3].type]) && e3.prototype[n2] && (i3 = true);
              s2[n2] = i3;
            });
          }
          linkSeries(t3) {
            let e3 = this, i3 = e3.series;
            i3.forEach(function(t4) {
              t4.linkedSeries.length = 0;
            }), i3.forEach(function(t4) {
              let i4 = t4.options.linkedTo;
              X(i4) && (i4 = ":previous" === i4 ? e3.series[t4.index - 1] : e3.get(i4)) && i4.linkedParent !== t4 && (i4.linkedSeries.push(t4), t4.linkedParent = i4, i4.enabledDataSorting && t4.setDataSortingOptions(), t4.visible = U(t4.options.visible, i4.options.visible, t4.visible));
            }), z(this, "afterLinkSeries", { isUpdating: t3 });
          }
          renderSeries() {
            this.series.forEach(function(t3) {
              t3.translate(), t3.render();
            });
          }
          render() {
            let t3 = this.axes, e3 = this.colorAxis, i3 = this.renderer, s2 = function(t4) {
              t4.forEach(function(t5) {
                t5.visible && t5.render();
              });
            }, o2 = 0;
            this.setTitle(), z(this, "beforeMargins"), this.getStacks && this.getStacks(), this.getMargins(true), this.setChartSize();
            let r2 = this.plotWidth;
            t3.some(function(t4) {
              if (t4.horiz && t4.visible && t4.options.labels.enabled && t4.series.length)
                return o2 = 21, true;
            }), this.plotHeight = Math.max(this.plotHeight - o2, 0);
            let n2 = this.plotHeight;
            t3.forEach(function(t4) {
              t4.setScale();
            }), this.getAxisMargins();
            let a2 = r2 / this.plotWidth > 1.1, h2 = n2 / this.plotHeight > 1.05;
            (a2 || h2) && (t3.forEach(function(t4) {
              (t4.horiz && a2 || !t4.horiz && h2) && t4.setTickInterval(true);
            }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries ? s2(t3) : e3 && e3.length && s2(e3), this.seriesGroup || (this.seriesGroup = i3.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = true;
          }
          addCredits(t3) {
            let e3 = this, i3 = Y(true, this.options.credits, t3);
            i3.enabled && !this.credits && (this.credits = this.renderer.text(i3.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
              i3.href && (C.location.href = i3.href);
            }).attr({ align: i3.position.align, zIndex: 8 }), e3.styledMode || this.credits.css(i3.style), this.credits.add().align(i3.position), this.credits.update = function(t4) {
              e3.credits = e3.credits.destroy(), e3.addCredits(t4);
            });
          }
          destroy() {
            let t3;
            let e3 = this, i3 = e3.axes, s2 = e3.series, o2 = e3.container, n2 = o2 && o2.parentNode;
            for (z(e3, "destroy"), e3.renderer.forExport ? I(v, e3) : v[e3.index] = void 0, r.chartCount--, e3.renderTo.removeAttribute("data-highcharts-chart"), Z(e3), t3 = i3.length; t3--; )
              i3[t3] = i3[t3].destroy();
            for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t3 = s2.length; t3--; )
              s2[t3] = s2[t3].destroy();
            ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(function(t4) {
              let i4 = e3[t4];
              i4 && i4.destroy && (e3[t4] = i4.destroy());
            }), o2 && (o2.innerHTML = p.emptyHTML, Z(o2), n2 && E(o2)), F(e3, function(t4, i4) {
              delete e3[i4];
            });
          }
          firstRender() {
            let t3 = this, e3 = t3.options;
            t3.getContainer(), t3.resetMargins(), t3.setChartSize(), t3.propFromSeries(), t3.getAxes();
            let i3 = W(e3.series) ? e3.series : [];
            e3.series = [], i3.forEach(function(e4) {
              t3.initSeries(e4);
            }), t3.linkSeries(), t3.setSeriesData(), z(t3, "beforeRender"), t3.render(), t3.pointer.getChartPosition(), t3.renderer.imgCount || t3.hasLoaded || t3.onload(), t3.temporaryDisplay(true);
          }
          onload() {
            this.callbacks.concat([this.callback]).forEach(function(t3) {
              t3 && void 0 !== this.index && t3.apply(this, [this]);
            }, this), z(this, "load"), z(this, "render"), O(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = true;
          }
          warnIfA11yModuleNotLoaded() {
            let { options: t3, title: e3 } = this;
            !t3 || this.accessibility || (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (e3 && e3.element.textContent || "").replace(/</g, "&lt;") }), t3.accessibility && false === t3.accessibility.enabled || B('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', false, this));
          }
          addSeries(t3, e3, i3) {
            let s2;
            let o2 = this;
            return t3 && (e3 = U(e3, true), z(o2, "addSeries", { options: t3 }, function() {
              s2 = o2.initSeries(t3), o2.isDirtyLegend = true, o2.linkSeries(), s2.enabledDataSorting && s2.setData(t3.data, false), z(o2, "afterAddSeries", { series: s2 }), e3 && o2.redraw(i3);
            })), s2;
          }
          addAxis(t3, e3, i3, s2) {
            return this.createAxis(e3 ? "xAxis" : "yAxis", { axis: t3, redraw: i3, animation: s2 });
          }
          addColorAxis(t3, e3, i3) {
            return this.createAxis("colorAxis", { axis: t3, redraw: e3, animation: i3 });
          }
          createAxis(t3, i3) {
            let s2 = new e2(this, i3.axis, t3);
            return U(i3.redraw, true) && this.redraw(i3.animation), s2;
          }
          showLoading(t3) {
            let e3 = this, i3 = e3.options, s2 = i3.loading, o2 = function() {
              r2 && L(r2, { left: e3.plotLeft + "px", top: e3.plotTop + "px", width: e3.plotWidth + "px", height: e3.plotHeight + "px" });
            }, r2 = e3.loadingDiv, n2 = e3.loadingSpan;
            r2 || (e3.loadingDiv = r2 = P("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, e3.container)), n2 || (e3.loadingSpan = n2 = P("span", { className: "highcharts-loading-inner" }, null, r2), T(e3, "redraw", o2)), r2.className = "highcharts-loading", p.setElementHTML(n2, U(t3, i3.lang.loading, "")), e3.styledMode || (L(r2, j(s2.style, { zIndex: 10 })), L(n2, s2.labelStyle), e3.loadingShown || (L(r2, { opacity: 0, display: "" }), u(r2, { opacity: s2.style.opacity || 0.5 }, { duration: s2.showDuration || 0 }))), e3.loadingShown = true, o2();
          }
          hideLoading() {
            let t3 = this.options, e3 = this.loadingDiv;
            e3 && (e3.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || u(e3, { opacity: 0 }, { duration: t3.loading.hideDuration || 100, complete: function() {
              L(e3, { display: "none" });
            } })), this.loadingShown = false;
          }
          update(t3, e3, i3, s2) {
            let o2, r2, n2;
            let a2 = this, h2 = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, l2 = t3.isResponsiveOptions, c2 = [];
            z(a2, "update", { options: t3 }), l2 || a2.setResponsive(false, true), t3 = D(t3, a2.options), a2.userOptions = Y(a2.userOptions, t3);
            let p2 = t3.chart;
            p2 && (Y(true, a2.options.chart, p2), this.setZoomOptions(), "className" in p2 && a2.setClassName(p2.className), ("inverted" in p2 || "polar" in p2 || "type" in p2) && (a2.propFromSeries(), o2 = true), "alignTicks" in p2 && (o2 = true), "events" in p2 && b(this, p2), F(p2, function(t4, e4) {
              -1 !== a2.propsRequireUpdateSeries.indexOf("chart." + e4) && (r2 = true), -1 !== a2.propsRequireDirtyBox.indexOf(e4) && (a2.isDirtyBox = true), -1 !== a2.propsRequireReflow.indexOf(e4) && (l2 ? a2.isDirtyBox = true : n2 = true);
            }), !a2.styledMode && p2.style && a2.renderer.setStyle(a2.options.chart.style || {})), !a2.styledMode && t3.colors && (this.options.colors = t3.colors), t3.time && (this.time === x && (this.time = new d(t3.time)), Y(true, a2.options.time, t3.time)), F(t3, function(e4, i4) {
              a2[i4] && "function" == typeof a2[i4].update ? a2[i4].update(e4, false) : "function" == typeof a2[h2[i4]] ? a2[h2[i4]](e4) : "colors" !== i4 && -1 === a2.collectionsWithUpdate.indexOf(i4) && Y(true, a2.options[i4], t3[i4]), "chart" !== i4 && -1 !== a2.propsRequireUpdateSeries.indexOf(i4) && (r2 = true);
            }), this.collectionsWithUpdate.forEach(function(e4) {
              t3[e4] && ($(t3[e4]).forEach(function(t4, s3) {
                let o3;
                let r3 = O(t4.id);
                r3 && (o3 = a2.get(t4.id)), !o3 && a2[e4] && (o3 = a2[e4][U(t4.index, s3)]) && (r3 && O(o3.options.id) || o3.options.isInternal) && (o3 = void 0), o3 && o3.coll === e4 && (o3.update(t4, false), i3 && (o3.touched = true)), !o3 && i3 && a2.collectionsWithInit[e4] && (a2.collectionsWithInit[e4][0].apply(a2, [t4].concat(a2.collectionsWithInit[e4][1] || []).concat([false])).touched = true);
              }), i3 && a2[e4].forEach(function(t4) {
                t4.touched || t4.options.isInternal ? delete t4.touched : c2.push(t4);
              }));
            }), c2.forEach(function(t4) {
              t4.chart && t4.remove && t4.remove(false);
            }), o2 && a2.axes.forEach(function(t4) {
              t4.update({}, false);
            }), r2 && a2.getSeriesOrderByLinks().forEach(function(t4) {
              t4.chart && t4.update({}, false);
            }, this);
            let u2 = p2 && p2.width, g2 = p2 && (X(p2.height) ? q(p2.height, u2 || a2.chartWidth) : p2.height);
            n2 || H(u2) && u2 !== a2.chartWidth || H(g2) && g2 !== a2.chartHeight ? a2.setSize(u2, g2, s2) : U(e3, true) && a2.redraw(s2), z(a2, "afterUpdate", { options: t3, redraw: e3, animation: s2 });
          }
          setSubtitle(t3, e3) {
            this.applyDescription("subtitle", t3), this.layOutTitles(e3);
          }
          setCaption(t3, e3) {
            this.applyDescription("caption", t3), this.layOutTitles(e3);
          }
          showResetZoom() {
            let t3 = this, e3 = m.lang, i3 = t3.zooming.resetButton, s2 = i3.theme, o2 = "chart" === i3.relativeTo || "spacingBox" === i3.relativeTo ? null : "scrollablePlotBox";
            function r2() {
              t3.zoomOut();
            }
            z(this, "beforeShowResetZoom", null, function() {
              t3.resetZoomButton = t3.renderer.button(e3.resetZoom, null, null, r2, s2).attr({ align: i3.position.align, title: e3.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(i3.position, false, o2);
            }), z(this, "afterShowResetZoom");
          }
          zoomOut() {
            z(this, "selection", { resetSelection: true }, this.zoom);
          }
          zoom(t3) {
            let e3 = this, i3 = e3.pointer, s2 = false, o2;
            !t3 || t3.resetSelection ? (e3.axes.forEach(function(t4) {
              o2 = t4.zoom();
            }), i3.initiated = false) : t3.xAxis.concat(t3.yAxis).forEach(function(t4) {
              let r3 = t4.axis, n2 = r3.isXAxis, { hasPinched: a2, mouseDownX: h2, mouseDownY: l2 } = i3;
              (i3[n2 ? "zoomX" : "zoomY"] && O(h2) && O(l2) && e3.isInsidePlot(h2 - e3.plotLeft, l2 - e3.plotTop, { axis: r3, ignoreX: a2, ignoreY: a2 }) || !O(e3.inverted ? h2 : l2)) && (o2 = r3.zoom(t4.min, t4.max), r3.displayBtn && (s2 = true));
            });
            let r2 = e3.resetZoomButton;
            s2 && !r2 ? e3.showResetZoom() : !s2 && G(r2) && (e3.resetZoomButton = r2.destroy()), o2 && e3.redraw(U(e3.options.chart.animation, t3 && t3.animation, e3.pointCount < 100));
          }
          pan(t3, e3) {
            let i3;
            let s2 = this, o2 = s2.hoverPoints, r2 = "object" == typeof e3 ? e3 : { enabled: e3, type: "x" }, n2 = s2.options.chart;
            n2 && n2.panning && (n2.panning = r2);
            let a2 = r2.type;
            z(this, "pan", { originalEvent: t3 }, function() {
              o2 && o2.forEach(function(t4) {
                t4.setState();
              });
              let e4 = s2.xAxis;
              "xy" === a2 ? e4 = e4.concat(s2.yAxis) : "y" === a2 && (e4 = s2.yAxis);
              let r3 = {};
              e4.forEach(function(e5) {
                if (!e5.options.panningEnabled || e5.options.isInternal)
                  return;
                let o3 = e5.horiz, n3 = t3[o3 ? "chartX" : "chartY"], h2 = o3 ? "mouseDownX" : "mouseDownY", l2 = s2[h2], d2 = e5.minPointOffset || 0, c2 = e5.reversed && !s2.inverted || !e5.reversed && s2.inverted ? -1 : 1, p2 = e5.getExtremes(), u2 = e5.toValue(l2 - n3, true) + d2 * c2, g2 = e5.toValue(l2 + e5.len - n3, true) - (d2 * c2 || e5.isXAxis && e5.pointRangePadding || 0), f2 = g2 < u2, m2 = e5.hasVerticalPanning(), x2 = f2 ? g2 : u2, y2 = f2 ? u2 : g2, b2 = e5.panningState, v2;
                m2 && !e5.isXAxis && (!b2 || b2.isDirty) && e5.series.forEach(function(t4) {
                  let e6 = t4.getProcessedData(true), i4 = t4.getExtremes(e6.yData, true);
                  b2 || (b2 = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE }), H(i4.dataMin) && H(i4.dataMax) && (b2.startMin = Math.min(U(t4.options.threshold, 1 / 0), i4.dataMin, b2.startMin), b2.startMax = Math.max(U(t4.options.threshold, -1 / 0), i4.dataMax, b2.startMax));
                });
                let k2 = Math.min(U(b2 && b2.startMin, p2.dataMin), d2 ? p2.min : e5.toValue(e5.toPixels(p2.min) - e5.minPixelPadding)), S2 = Math.max(U(b2 && b2.startMax, p2.dataMax), d2 ? p2.max : e5.toValue(e5.toPixels(p2.max) + e5.minPixelPadding));
                e5.panningState = b2, e5.isOrdinal || ((v2 = k2 - x2) > 0 && (y2 += v2, x2 = k2), (v2 = y2 - S2) > 0 && (y2 = S2, x2 -= v2), e5.series.length && x2 !== p2.min && y2 !== p2.max && x2 >= k2 && y2 <= S2 && (e5.setExtremes(x2, y2, false, false, { trigger: "pan" }), !s2.resetZoomButton && x2 !== k2 && y2 !== S2 && a2.match("y") && (s2.showResetZoom(), e5.displayBtn = false), i3 = true), r3[h2] = n3);
              }), F(r3, (t4, e5) => {
                s2[e5] = t4;
              }), i3 && s2.redraw(false), L(s2.container, { cursor: "move" });
            });
          }
        }
        return j(J.prototype, { callbacks: [], collectionsWithInit: { xAxis: [J.prototype.addAxis, [true]], yAxis: [J.prototype.addAxis, [false]], series: [J.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"], propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"], propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"] }), J;
      }), i(e, "Extensions/ScrollablePlotArea.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Chart/Chart.js"], e["Core/Series/Series.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r) {
        let { stop: n } = t2, { addEvent: a, createElement: h, defined: l, merge: d, pick: c } = r;
        a(i2, "afterSetChartSize", function(t3) {
          let i3 = this.options.chart.scrollablePlotArea, s2 = i3 && i3.minWidth, o2 = i3 && i3.minHeight, r2, n2, a2;
          this.renderer.forExport || (s2 ? (this.scrollablePixelsX = r2 = Math.max(0, s2 - this.chartWidth), r2 && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = d(this.plotBox), this.plotBox.width = this.plotWidth += r2, this.inverted ? this.clipBox.height += r2 : this.clipBox.width += r2, a2 = { 1: { name: "right", value: r2 } })) : o2 && (this.scrollablePixelsY = n2 = Math.max(0, o2 - this.chartHeight), l(n2) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = d(this.plotBox), this.plotBox.height = this.plotHeight += n2, this.inverted ? this.clipBox.width += n2 : this.clipBox.height += n2, a2 = { 2: { name: "bottom", value: n2 } })), a2 && !t3.skipAxes && this.axes.forEach(function(t4) {
            a2[t4.side] ? t4.getPlotLinePath = function() {
              let i4 = a2[t4.side].name, s3 = a2[t4.side].value, o3 = this[i4], r3;
              return this[i4] = o3 - s3, r3 = e2.prototype.getPlotLinePath.apply(this, arguments), this[i4] = o3, r3;
            } : (t4.setAxisSize(), t4.setAxisTranslation());
          }));
        }), a(i2, "render", function() {
          this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
        }), i2.prototype.setUpScrolling = function() {
          let t3;
          let e3 = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          this.scrollablePixelsX && (e3.overflowX = "auto"), this.scrollablePixelsY && (e3.overflowY = "auto"), this.scrollingParent = h("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo), this.scrollingContainer = h("div", { className: "highcharts-scrolling" }, e3, this.scrollingParent), a(this.scrollingContainer, "scroll", () => {
            this.pointer && (delete this.pointer.chartPosition, this.hoverPoint && (t3 = this.hoverPoint), this.pointer.runPointActions(void 0, t3, true));
          }), this.innerContainer = h("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer), this.innerContainer.appendChild(this.container), this.setUpScrolling = null;
        }, i2.prototype.moveFixedElements = function() {
          let t3 = this.container, e3 = this.fixedRenderer, i3 = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-credits", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-reset-zoom", ".highcharts-drillup-button", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"], s2;
          this.scrollablePixelsX && !this.inverted ? s2 = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? s2 = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? s2 = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (s2 = ".highcharts-yaxis"), s2 && i3.push(`${s2}:not(.highcharts-radial-axis)`, `${s2}-labels:not(.highcharts-radial-axis-labels)`), i3.forEach(function(i4) {
            [].forEach.call(t3.querySelectorAll(i4), function(t4) {
              (t4.namespaceURI === e3.SVG_NS ? e3.box : e3.box.parentNode).appendChild(t4), t4.style.pointerEvents = "auto";
            });
          });
        }, i2.prototype.applyFixed = function() {
          let t3, e3, i3;
          let s2 = !this.fixedDiv, r2 = this.options.chart, l2 = r2.scrollablePlotArea, d2 = o.getRendererType();
          s2 ? (this.fixedDiv = h("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (r2.style && r2.style.zIndex || 0) + 2, top: 0 }, null, true), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = t3 = new d2(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = t3.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": c(l2.opacity, 0.85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), a(this, "afterShowResetZoom", this.moveFixedElements), a(this, "afterApplyDrilldown", this.moveFixedElements), a(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight), (this.scrollableDirty || s2) && (this.scrollableDirty = false, this.moveFixedElements()), e3 = this.chartWidth + (this.scrollablePixelsX || 0), i3 = this.chartHeight + (this.scrollablePixelsY || 0), n(this.container), this.container.style.width = e3 + "px", this.container.style.height = i3 + "px", this.renderer.boxWrapper.attr({ width: e3, height: i3, viewBox: [0, 0, e3, i3].join(" ") }), this.chartBackground.attr({ width: e3, height: i3 }), this.scrollingContainer.style.height = this.chartHeight + "px", s2 && (l2.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * l2.scrollPositionX), l2.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * l2.scrollPositionY));
          let p = this.axisOffset, u = this.plotTop - p[0] - 1, g = this.plotLeft - p[3] - 1, f = this.plotTop + this.plotHeight + p[2] + 1, m = this.plotLeft + this.plotWidth + p[1] + 1, x = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), y = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0), b;
          b = this.scrollablePixelsX ? [["M", 0, u], ["L", this.plotLeft - 1, u], ["L", this.plotLeft - 1, f], ["L", 0, f], ["Z"], ["M", x, u], ["L", this.chartWidth, u], ["L", this.chartWidth, f], ["L", x, f], ["Z"]] : this.scrollablePixelsY ? [["M", g, 0], ["L", g, this.plotTop - 1], ["L", m, this.plotTop - 1], ["L", m, 0], ["Z"], ["M", g, y], ["L", g, this.chartHeight], ["L", m, this.chartHeight], ["L", m, y], ["Z"]] : [["M", 0, 0]], "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: b });
        }, a(e2, "afterInit", function() {
          this.chart.scrollableDirty = true;
        }), a(s, "show", function() {
          this.chart.scrollableDirty = true;
        });
      }), i(e, "Core/Axis/Stacking/StackItem.js", [e["Core/Templating.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { format: s } = t2, { series: o } = e2, { destroyObjectProperties: r, fireEvent: n, isNumber: a, pick: h } = i2;
        return class {
          constructor(t3, e3, i3, s2, o2) {
            let r2 = t3.chart.inverted, n2 = t3.reversed;
            this.axis = t3;
            let a2 = this.isNegative = !!i3 != !!n2;
            this.options = e3 = e3 || {}, this.x = s2, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = false, this.stack = o2, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = { align: e3.align || (r2 ? a2 ? "left" : "right" : "center"), verticalAlign: e3.verticalAlign || (r2 ? "middle" : a2 ? "bottom" : "top"), y: e3.y, x: e3.x }, this.textAlign = e3.textAlign || (r2 ? a2 ? "right" : "left" : "center");
          }
          destroy() {
            r(this, this.axis);
          }
          render(t3) {
            let e3 = this.axis.chart, i3 = this.options, o2 = i3.format, r2 = o2 ? s(o2, this, e3) : i3.formatter.call(this);
            if (this.label)
              this.label.attr({ text: r2, visibility: "hidden" });
            else {
              this.label = e3.renderer.label(r2, null, void 0, i3.shape, void 0, void 0, i3.useHTML, false, "stack-labels");
              let s2 = { r: i3.borderRadius || 0, text: r2, padding: h(i3.padding, 5), visibility: "hidden" };
              e3.styledMode || (s2.fill = i3.backgroundColor, s2.stroke = i3.borderColor, s2["stroke-width"] = i3.borderWidth, this.label.css(i3.style || {})), this.label.attr(s2), this.label.added || this.label.add(t3);
            }
            this.label.labelrank = e3.plotSizeY, n(this, "afterRender");
          }
          setOffset(t3, e3, i3, s2, r2, l) {
            let { alignOptions: d, axis: c, label: p, options: u, textAlign: g } = this, f = c.chart, m = this.getStackBox({ xOffset: t3, width: e3, boxBottom: i3, boxTop: s2, defaultX: r2, xAxis: l }), { verticalAlign: x } = d;
            if (p && m) {
              let t4 = p.getBBox(), e4 = p.padding, i4 = "justify" === h(u.overflow, "justify"), s3;
              d.x = u.x || 0, d.y = u.y || 0;
              let { x: r3, y: n2 } = this.adjustStackPosition({ labelBox: t4, verticalAlign: x, textAlign: g });
              m.x -= r3, m.y -= n2, p.align(d, false, m), (s3 = f.isInsidePlot(p.alignAttr.x + d.x + r3, p.alignAttr.y + d.y + n2)) || (i4 = false), i4 && o.prototype.justifyDataLabel.call(c, p, d, p.alignAttr, t4, m), p.attr({ x: p.alignAttr.x, y: p.alignAttr.y, rotation: u.rotation, rotationOriginX: t4.width / 2, rotationOriginY: t4.height / 2 }), h(!i4 && u.crop, true) && (s3 = a(p.x) && a(p.y) && f.isInsidePlot(p.x - e4 + (p.width || 0), p.y) && f.isInsidePlot(p.x + e4, p.y)), p[s3 ? "show" : "hide"]();
            }
            n(this, "afterSetOffset", { xOffset: t3, width: e3 });
          }
          adjustStackPosition({ labelBox: t3, verticalAlign: e3, textAlign: i3 }) {
            let s2 = { bottom: 0, middle: 1, top: 2, right: 1, center: 0, left: -1 }, o2 = s2[e3], r2 = s2[i3];
            return { x: t3.width / 2 + t3.width / 2 * r2, y: t3.height / 2 * o2 };
          }
          getStackBox(t3) {
            let e3 = this.axis, i3 = e3.chart, { boxTop: s2, defaultX: o2, xOffset: r2, width: n2, boxBottom: l } = t3, d = e3.stacking.usePercentage ? 100 : h(s2, this.total, 0), c = e3.toPixels(d), p = t3.xAxis || i3.xAxis[0], u = h(o2, p.translate(this.x)) + r2, g = e3.toPixels(l || a(e3.min) && e3.logarithmic && e3.logarithmic.lin2log(e3.min) || 0), f = Math.abs(c - g), m = i3.inverted, x = this.isNegative;
            return m ? { x: (x ? c : c - f) - i3.plotLeft, y: p.height - u - n2, width: f, height: n2 } : { x: u + p.transB - i3.plotLeft, y: (x ? c - f : c) - i3.plotTop, width: n2, height: f };
          }
        };
      }), i(e, "Core/Axis/Stacking/StackingAxis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        var r;
        let { getDeferredAnimation: n } = t2, { series: { prototype: a } } = i2, { addEvent: h, correctFloat: l, defined: d, destroyObjectProperties: c, fireEvent: p, isArray: u, isNumber: g, objectEach: f, pick: m } = o;
        function x() {
          let t3 = this.inverted;
          this.axes.forEach((t4) => {
            t4.stacking && t4.stacking.stacks && t4.hasVisibleSeries && (t4.stacking.oldStacks = t4.stacking.stacks);
          }), this.series.forEach((e3) => {
            let i3 = e3.xAxis && e3.xAxis.options || {};
            e3.options.stacking && e3.reserveSpace() && (e3.stackKey = [e3.type, m(e3.options.stack, ""), t3 ? i3.top : i3.left, t3 ? i3.height : i3.width].join(","));
          });
        }
        function y() {
          let t3 = this.stacking;
          if (t3) {
            let e3 = t3.stacks;
            f(e3, (t4, i3) => {
              c(t4), delete e3[i3];
            }), t3.stackTotalGroup?.destroy();
          }
        }
        function b() {
          this.stacking || (this.stacking = new w(this));
        }
        function v(t3, e3, i3, s2) {
          return !d(t3) || t3.x !== e3 || s2 && t3.stackKey !== s2 ? t3 = { x: e3, index: 0, key: s2, stackKey: s2 } : t3.index++, t3.key = [i3, e3, t3.index].join(","), t3;
        }
        function k() {
          let t3;
          let e3 = this, i3 = e3.yAxis, s2 = e3.stackKey || "", o2 = i3.stacking.stacks, r2 = e3.processedXData, n2 = e3.options.stacking, a2 = e3[n2 + "Stacker"];
          a2 && [s2, "-" + s2].forEach((i4) => {
            let s3 = r2.length, n3, h2, l2;
            for (; s3--; )
              n3 = r2[s3], t3 = e3.getStackIndicator(t3, n3, e3.index, i4), h2 = o2[i4]?.[n3], (l2 = h2?.points[t3.key || ""]) && a2.call(e3, l2, h2, s3);
          });
        }
        function S(t3, e3, i3) {
          let s2 = e3.total ? 100 / e3.total : 0;
          t3[0] = l(t3[0] * s2), t3[1] = l(t3[1] * s2), this.stackedYData[i3] = t3[1];
        }
        function M(t3) {
          this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && this.chart.series.length > 1 ? a.setStackedPoints.call(this, t3, "group") : t3.stacking.resetStacks();
        }
        function C(t3, e3) {
          let i3, o2, r2, n2, a2, h2, c2, p2, g2;
          let f2 = e3 || this.options.stacking;
          if (!f2 || !this.reserveSpace() || ({ group: "xAxis" }[f2] || "yAxis") !== t3.coll)
            return;
          let x2 = this.processedXData, y2 = this.processedYData, b2 = [], v2 = y2.length, k2 = this.options, S2 = k2.threshold || 0, M2 = k2.startFromThreshold ? S2 : 0, C2 = k2.stack, w2 = e3 ? `${this.type},${f2}` : this.stackKey || "", T = "-" + w2, A = this.negStacks, P = t3.stacking, L = P.stacks, O = P.oldStacks;
          for (P.stacksTouched += 1, c2 = 0; c2 < v2; c2++) {
            p2 = x2[c2], g2 = y2[c2], h2 = (i3 = this.getStackIndicator(i3, p2, this.index)).key || "", L[a2 = (o2 = A && g2 < (M2 ? 0 : S2)) ? T : w2] || (L[a2] = {}), L[a2][p2] || (O[a2]?.[p2] ? (L[a2][p2] = O[a2][p2], L[a2][p2].total = null) : L[a2][p2] = new s(t3, t3.options.stackLabels, !!o2, p2, C2)), r2 = L[a2][p2], null !== g2 ? (r2.points[h2] = r2.points[this.index] = [m(r2.cumulative, M2)], d(r2.cumulative) || (r2.base = h2), r2.touched = P.stacksTouched, i3.index > 0 && false === this.singleStacks && (r2.points[h2][0] = r2.points[this.index + "," + p2 + ",0"][0])) : (delete r2.points[h2], delete r2.points[this.index]);
            let e4 = r2.total || 0;
            "percent" === f2 ? (n2 = o2 ? w2 : T, e4 = A && L[n2]?.[p2] ? (n2 = L[n2][p2]).total = Math.max(n2.total || 0, e4) + Math.abs(g2) || 0 : l(e4 + (Math.abs(g2) || 0))) : "group" === f2 ? (u(g2) && (g2 = g2[0]), null !== g2 && e4++) : e4 = l(e4 + (g2 || 0)), "group" === f2 ? r2.cumulative = (e4 || 1) - 1 : r2.cumulative = l(m(r2.cumulative, M2) + (g2 || 0)), r2.total = e4, null !== g2 && (r2.points[h2].push(r2.cumulative), b2[c2] = r2.cumulative, r2.hasValidPoints = true);
          }
          "percent" === f2 && (P.usePercentage = true), "group" !== f2 && (this.stackedYData = b2), P.oldStacks = {};
        }
        class w {
          constructor(t3) {
            this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t3;
          }
          buildStacks() {
            let t3, e3;
            let i3 = this.axis, s2 = i3.series, o2 = "xAxis" === i3.coll, r2 = i3.options.reversedStacks, n2 = s2.length;
            for (this.resetStacks(), this.usePercentage = false, e3 = n2; e3--; )
              t3 = s2[r2 ? e3 : n2 - e3 - 1], o2 && t3.setGroupedPoints(i3), t3.setStackedPoints(i3);
            if (!o2)
              for (e3 = 0; e3 < n2; e3++)
                s2[e3].modifyStacks();
            p(i3, "afterBuildStacks");
          }
          cleanStacks() {
            this.oldStacks && (this.stacks = this.oldStacks, f(this.stacks, (t3) => {
              f(t3, (t4) => {
                t4.cumulative = t4.total;
              });
            }));
          }
          resetStacks() {
            f(this.stacks, (t3) => {
              f(t3, (e3, i3) => {
                g(e3.touched) && e3.touched < this.stacksTouched ? (e3.destroy(), delete t3[i3]) : (e3.total = null, e3.cumulative = null);
              });
            });
          }
          renderStackTotals() {
            let t3 = this.axis, e3 = t3.chart, i3 = e3.renderer, s2 = this.stacks, o2 = t3.options.stackLabels?.animation, r2 = n(e3, o2 || false), a2 = this.stackTotalGroup = this.stackTotalGroup || i3.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
            a2.translate(e3.plotLeft, e3.plotTop), f(s2, (t4) => {
              f(t4, (t5) => {
                t5.render(a2);
              });
            }), a2.animate({ opacity: 1 }, r2);
          }
        }
        return function(t3) {
          let e3 = [];
          t3.compose = function(t4, i3, s2) {
            if (o.pushUnique(e3, t4) && (h(t4, "init", b), h(t4, "destroy", y)), o.pushUnique(e3, i3)) {
              let t5 = i3.prototype;
              t5.getStacks = x;
            }
            if (o.pushUnique(e3, s2)) {
              let t5 = s2.prototype;
              t5.getStackIndicator = v, t5.modifyStacks = k, t5.percentStacker = S, t5.setGroupedPoints = M, t5.setStackedPoints = C;
            }
          };
        }(r || (r = {})), r;
      }), i(e, "Series/Line/LineSeries.js", [e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { defined: s, merge: o, isObject: r } = i2;
        class n extends t2 {
          constructor() {
            super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0;
          }
          drawGraph() {
            let t3 = this, e3 = this.options, i3 = (this.gappedPath || this.getGraphPath).call(this), s2 = this.chart.styledMode, n2 = [["graph", "highcharts-graph"]];
            s2 || n2[0].push(e3.lineColor || this.color || "#cccccc", e3.dashStyle), (n2 = t3.getZonesGraphs(n2)).forEach(function(n3, a) {
              let h = n3[0], l, d = t3[h], c = d ? "animate" : "attr";
              d ? (d.endX = t3.preventGraphAnimation ? null : i3.xMap, d.animate({ d: i3 })) : i3.length && (t3[h] = d = t3.chart.renderer.path(i3).addClass(n3[1]).attr({ zIndex: 1 }).add(t3.group)), d && !s2 && (l = { stroke: n3[2], "stroke-width": e3.lineWidth || 0, fill: t3.fillGraph && t3.color || "none" }, n3[3] ? l.dashstyle = n3[3] : "square" !== e3.linecap && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), d[c](l).shadow(a < 2 && e3.shadow && o({ filterUnits: "userSpaceOnUse" }, r(e3.shadow) ? e3.shadow : {}))), d && (d.startX = i3.xMap, d.isArea = i3.isArea);
            });
          }
          getGraphPath(t3, e3, i3) {
            let o2 = this, r2 = o2.options, n2 = [], a = [], h, l = r2.step;
            t3 = t3 || o2.points;
            let d = t3.reversed;
            return d && t3.reverse(), (l = { right: 1, center: 2 }[l] || l && 3) && d && (l = 4 - l), (t3 = this.getValidPoints(t3, false, !(r2.connectNulls && !e3 && !i3))).forEach(function(d2, c) {
              let p;
              let u = d2.plotX, g = d2.plotY, f = t3[c - 1], m = d2.isNull || "number" != typeof g;
              (d2.leftCliff || f && f.rightCliff) && !i3 && (h = true), m && !s(e3) && c > 0 ? h = !r2.connectNulls : m && !e3 ? h = true : (0 === c || h ? p = [["M", d2.plotX, d2.plotY]] : o2.getPointSpline ? p = [o2.getPointSpline(t3, d2, c)] : l ? (p = 1 === l ? [["L", f.plotX, g]] : 2 === l ? [["L", (f.plotX + u) / 2, f.plotY], ["L", (f.plotX + u) / 2, g]] : [["L", u, f.plotY]]).push(["L", u, g]) : p = [["L", u, g]], a.push(d2.x), l && (a.push(d2.x), 2 === l && a.push(d2.x)), n2.push.apply(n2, p), h = false);
            }), n2.xMap = a, o2.graphPath = n2, n2;
          }
          getZonesGraphs(t3) {
            return this.zones.forEach(function(e3, i3) {
              let s2 = ["zone-graph-" + i3, "highcharts-graph highcharts-zone-graph-" + i3 + " " + (e3.className || "")];
              this.chart.styledMode || s2.push(e3.color || this.color, e3.dashStyle || this.options.dashStyle), t3.push(s2);
            }, this), t3;
          }
        }
        return n.defaultOptions = o(t2.defaultOptions, { legendSymbol: "lineMarker" }), e2.registerSeriesType("line", n), n;
      }), i(e, "Series/Area/AreaSeries.js", [e["Core/Color/Color.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { parse: s } = t2, { seriesTypes: { line: o } } = e2, { extend: r, merge: n, objectEach: a, pick: h } = i2;
        class l extends o {
          constructor() {
            super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0;
          }
          drawGraph() {
            this.areaPath = [], super.drawGraph.apply(this);
            let t3 = this, e3 = this.areaPath, i3 = this.options, s2 = this.zones, o2 = [["area", "highcharts-area", this.color, i3.fillColor]];
            s2.forEach(function(e4, s3) {
              o2.push(["zone-area-" + s3, "highcharts-area highcharts-zone-area-" + s3 + " " + e4.className, e4.color || t3.color, e4.fillColor || i3.fillColor]);
            }), o2.forEach(function(s3) {
              let o3 = s3[0], r2 = {}, n2 = t3[o3], a2 = n2 ? "animate" : "attr";
              n2 ? (n2.endX = t3.preventGraphAnimation ? null : e3.xMap, n2.animate({ d: e3 })) : (r2.zIndex = 0, (n2 = t3[o3] = t3.chart.renderer.path(e3).addClass(s3[1]).add(t3.group)).isArea = true), t3.chart.styledMode || (s3[3] ? r2.fill = s3[3] : (r2.fill = s3[2], r2["fill-opacity"] = h(i3.fillOpacity, 0.75))), n2[a2](r2), n2.startX = e3.xMap, n2.shiftUnit = i3.step ? 2 : 1;
            });
          }
          getGraphPath(t3) {
            let e3, i3, s2;
            let r2 = o.prototype.getGraphPath, n2 = this.options, a2 = n2.stacking, l2 = this.yAxis, d = [], c = [], p = this.index, u = l2.stacking.stacks[this.stackKey], g = n2.threshold, f = Math.round(l2.getThreshold(n2.threshold)), m = h(n2.connectNulls, "percent" === a2), x = function(i4, s3, o2) {
              let r3 = t3[i4], n3 = a2 && u[r3.x].points[p], h2 = r3[o2 + "Null"] || 0, m2 = r3[o2 + "Cliff"] || 0, x2, y2, b2 = true;
              m2 || h2 ? (x2 = (h2 ? n3[0] : n3[1]) + m2, y2 = n3[0] + m2, b2 = !!h2) : !a2 && t3[s3] && t3[s3].isNull && (x2 = y2 = g), void 0 !== x2 && (c.push({ plotX: e3, plotY: null === x2 ? f : l2.getThreshold(x2), isNull: b2, isCliff: true }), d.push({ plotX: e3, plotY: null === y2 ? f : l2.getThreshold(y2), doCurve: false }));
            };
            t3 = t3 || this.points, a2 && (t3 = this.getStackPoints(t3));
            for (let o2 = 0, r3 = t3.length; o2 < r3; ++o2)
              a2 || (t3[o2].leftCliff = t3[o2].rightCliff = t3[o2].leftNull = t3[o2].rightNull = void 0), i3 = t3[o2].isNull, e3 = h(t3[o2].rectPlotX, t3[o2].plotX), s2 = a2 ? h(t3[o2].yBottom, f) : f, i3 && !m || (m || x(o2, o2 - 1, "left"), i3 && !a2 && m || (c.push(t3[o2]), d.push({ x: o2, plotX: e3, plotY: s2 })), m || x(o2, o2 + 1, "right"));
            let y = r2.call(this, c, true, true);
            d.reversed = true;
            let b = r2.call(this, d, true, true), v = b[0];
            v && "M" === v[0] && (b[0] = ["L", v[1], v[2]]);
            let k = y.concat(b);
            k.length && k.push(["Z"]);
            let S = r2.call(this, c, false, m);
            return k.xMap = y.xMap, this.areaPath = k, S;
          }
          getStackPoints(t3) {
            let e3 = this, i3 = [], s2 = [], o2 = this.xAxis, r2 = this.yAxis, n2 = r2.stacking.stacks[this.stackKey], l2 = {}, d = r2.series, c = d.length, p = r2.options.reversedStacks ? 1 : -1, u = d.indexOf(e3);
            if (t3 = t3 || this.points, this.options.stacking) {
              for (let e4 = 0; e4 < t3.length; e4++)
                t3[e4].leftNull = t3[e4].rightNull = void 0, l2[t3[e4].x] = t3[e4];
              a(n2, function(t4, e4) {
                null !== t4.total && s2.push(e4);
              }), s2.sort(function(t4, e4) {
                return t4 - e4;
              });
              let g = d.map((t4) => t4.visible);
              s2.forEach(function(t4, a2) {
                let f = 0, m, x;
                if (l2[t4] && !l2[t4].isNull)
                  i3.push(l2[t4]), [-1, 1].forEach(function(i4) {
                    let o3 = 1 === i4 ? "rightNull" : "leftNull", r3 = n2[s2[a2 + i4]], h2 = 0;
                    if (r3) {
                      let i5 = u;
                      for (; i5 >= 0 && i5 < c; ) {
                        let s3 = d[i5].index;
                        !(m = r3.points[s3]) && (s3 === e3.index ? l2[t4][o3] = true : g[i5] && (x = n2[t4].points[s3]) && (h2 -= x[1] - x[0])), i5 += p;
                      }
                    }
                    l2[t4][1 === i4 ? "rightCliff" : "leftCliff"] = h2;
                  });
                else {
                  let e4 = u;
                  for (; e4 >= 0 && e4 < c; ) {
                    let i4 = d[e4].index;
                    if (m = n2[t4].points[i4]) {
                      f = m[1];
                      break;
                    }
                    e4 += p;
                  }
                  f = h(f, 0), f = r2.translate(f, 0, 1, 0, 1), i3.push({ isNull: true, plotX: o2.translate(t4, 0, 0, 0, 1), x: t4, plotY: f, yBottom: f });
                }
              });
            }
            return i3;
          }
        }
        return l.defaultOptions = n(o.defaultOptions, { threshold: 0, legendSymbol: "rectangle" }), r(l.prototype, { singleStacks: false }), e2.registerSeriesType("area", l), l;
      }), i(e, "Series/Spline/SplineSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2) {
        let { line: i2 } = t2.seriesTypes, { merge: s, pick: o } = e2;
        class r extends i2 {
          constructor() {
            super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0;
          }
          getPointSpline(t3, e3, i3) {
            let s2, r2, n, a;
            let h = e3.plotX || 0, l = e3.plotY || 0, d = t3[i3 - 1], c = t3[i3 + 1];
            function p(t4) {
              return t4 && !t4.isNull && false !== t4.doCurve && !e3.isCliff;
            }
            if (p(d) && p(c)) {
              let t4 = d.plotX || 0, i4 = d.plotY || 0, o2 = c.plotX || 0, p2 = c.plotY || 0, u2 = 0;
              s2 = (1.5 * h + t4) / 2.5, r2 = (1.5 * l + i4) / 2.5, n = (1.5 * h + o2) / 2.5, a = (1.5 * l + p2) / 2.5, n !== s2 && (u2 = (a - r2) * (n - h) / (n - s2) + l - a), r2 += u2, a += u2, r2 > i4 && r2 > l ? (r2 = Math.max(i4, l), a = 2 * l - r2) : r2 < i4 && r2 < l && (r2 = Math.min(i4, l), a = 2 * l - r2), a > p2 && a > l ? (a = Math.max(p2, l), r2 = 2 * l - a) : a < p2 && a < l && (a = Math.min(p2, l), r2 = 2 * l - a), e3.rightContX = n, e3.rightContY = a, e3.controlPoints = { low: [s2, r2], high: [n, a] };
            }
            let u = ["C", o(d.rightContX, d.plotX, 0), o(d.rightContY, d.plotY, 0), o(s2, h, 0), o(r2, l, 0), h, l];
            return d.rightContX = d.rightContY = void 0, u;
          }
        }
        return r.defaultOptions = s(i2.defaultOptions), t2.registerSeriesType("spline", r), r;
      }), i(e, "Series/AreaSpline/AreaSplineSeries.js", [e["Series/Spline/SplineSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { area: s, area: { prototype: o } } = e2.seriesTypes, { extend: r, merge: n } = i2;
        class a extends t2 {
          constructor() {
            super(...arguments), this.data = void 0, this.points = void 0, this.options = void 0;
          }
        }
        return a.defaultOptions = n(t2.defaultOptions, s.defaultOptions), r(a.prototype, { getGraphPath: o.getGraphPath, getStackPoints: o.getStackPoints, drawGraph: o.drawGraph }), e2.registerSeriesType("areaspline", a), a;
      }), i(e, "Series/Column/ColumnSeriesDefaults.js", [], function() {
        return { borderRadius: 3, centerInCategory: false, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: false, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: true, stickyTracking: false, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" };
      }), i(e, "Series/Column/ColumnSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Series/Column/ColumnSeriesDefaults.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n) {
        let { animObject: a } = t2, { parse: h } = e2, { hasTouch: l, noop: d } = s, { clamp: c, defined: p, extend: u, fireEvent: g, isArray: f, isNumber: m, merge: x, pick: y, objectEach: b, relativeLength: v } = n;
        class k extends o {
          constructor() {
            super(...arguments), this.borderWidth = void 0, this.data = void 0, this.group = void 0, this.options = void 0, this.points = void 0;
          }
          animate(t3) {
            let e3, i3;
            let s2 = this, o2 = this.yAxis, r2 = o2.pos, n2 = s2.options, h2 = this.chart.inverted, l2 = {}, d2 = h2 ? "translateX" : "translateY";
            t3 ? (l2.scaleY = 1e-3, i3 = c(o2.toPixels(n2.threshold), r2, r2 + o2.len), h2 ? l2.translateX = i3 - o2.len : l2.translateY = i3, s2.clipBox && s2.setClip(), s2.group.attr(l2)) : (e3 = Number(s2.group.attr(d2)), s2.group.animate({ scaleY: 1 }, u(a(s2.options.animation), { step: function(t4, i4) {
              s2.group && (l2[d2] = e3 + i4.pos * (r2 - e3), s2.group.attr(l2));
            } })));
          }
          init(t3, e3) {
            super.init.apply(this, arguments);
            let i3 = this;
            (t3 = i3.chart).hasRendered && t3.series.forEach(function(t4) {
              t4.type === i3.type && (t4.isDirty = true);
            });
          }
          getColumnMetrics() {
            let t3 = this, e3 = t3.options, i3 = t3.xAxis, s2 = t3.yAxis, o2 = i3.options.reversedStacks, r2 = i3.reversed && !o2 || !i3.reversed && o2, n2 = {}, a2, h2 = 0;
            false === e3.grouping ? h2 = 1 : t3.chart.series.forEach(function(e4) {
              let i4;
              let o3 = e4.yAxis, r3 = e4.options;
              e4.type === t3.type && e4.reserveSpace() && s2.len === o3.len && s2.pos === o3.pos && (r3.stacking && "group" !== r3.stacking ? (void 0 === n2[a2 = e4.stackKey] && (n2[a2] = h2++), i4 = n2[a2]) : false !== r3.grouping && (i4 = h2++), e4.columnIndex = i4);
            });
            let l2 = Math.min(Math.abs(i3.transA) * (!i3.brokenAxis?.hasBreaks && i3.ordinal?.slope || e3.pointRange || i3.closestPointRange || i3.tickInterval || 1), i3.len), d2 = l2 * e3.groupPadding, c2 = (l2 - 2 * d2) / (h2 || 1), p2 = Math.min(e3.maxPointWidth || i3.len, y(e3.pointWidth, c2 * (1 - 2 * e3.pointPadding))), u2 = (c2 - p2) / 2, g2 = (t3.columnIndex || 0) + (r2 ? 1 : 0), f2 = u2 + (d2 + g2 * c2 - l2 / 2) * (r2 ? -1 : 1);
            return t3.columnMetrics = { width: p2, offset: f2, paddedWidth: c2, columnCount: h2 }, t3.columnMetrics;
          }
          crispCol(t3, e3, i3, s2) {
            this.chart;
            let o2 = this.borderWidth, r2 = -(o2 % 2 ? 0.5 : 0), n2 = o2 % 2 ? 0.5 : 1;
            this.options.crisp && (i3 = Math.round(t3 + i3) + r2 - (t3 = Math.round(t3) + r2));
            let a2 = Math.round(e3 + s2) + n2, h2 = 0.5 >= Math.abs(e3) && a2 > 0.5;
            return s2 = a2 - (e3 = Math.round(e3) + n2), h2 && s2 && (e3 -= 1, s2 += 1), { x: t3, y: e3, width: i3, height: s2 };
          }
          adjustForMissingColumns(t3, e3, i3, s2) {
            if (!i3.isNull && s2.columnCount > 1) {
              let o2 = this.xAxis.series.filter((t4) => t4.visible).map((t4) => t4.index), r2 = 0, n2 = 0;
              b(this.xAxis.stacking?.stacks, (t4) => {
                if ("number" == typeof i3.x) {
                  let e4 = t4[i3.x.toString()];
                  if (e4) {
                    let t5 = e4.points[this.index];
                    if (f(t5)) {
                      let t6 = Object.keys(e4.points).filter((t7) => !t7.match(",") && e4.points[t7] && e4.points[t7].length > 1).map(parseFloat).filter((t7) => -1 !== o2.indexOf(t7)).sort((t7, e5) => e5 - t7);
                      r2 = t6.indexOf(this.index), n2 = t6.length;
                    }
                  }
                }
              });
              let a2 = (n2 - 1) * s2.paddedWidth + e3;
              t3 = (i3.plotX || 0) + a2 / 2 - e3 - r2 * s2.paddedWidth;
            }
            return t3;
          }
          translate() {
            let t3 = this, e3 = t3.chart, i3 = t3.options, s2 = t3.dense = t3.closestPointRange * t3.xAxis.transA < 2, r2 = t3.borderWidth = y(i3.borderWidth, s2 ? 0 : 1), n2 = t3.xAxis, a2 = t3.yAxis, h2 = i3.threshold, l2 = y(i3.minPointLength, 5), d2 = t3.getColumnMetrics(), u2 = d2.width, f2 = t3.pointXOffset = d2.offset, x2 = t3.dataMin, b2 = t3.dataMax, v2 = t3.barW = Math.max(u2, 1 + 2 * r2), k2 = t3.translatedThreshold = a2.getThreshold(h2);
            e3.inverted && (k2 -= 0.5), i3.pointPadding && (v2 = Math.ceil(v2)), o.prototype.translate.apply(t3), t3.points.forEach(function(s3) {
              let o2 = y(s3.yBottom, k2), r3 = 999 + Math.abs(o2), g2 = s3.plotX || 0, S = c(s3.plotY, -r3, a2.len + r3);
              s3.stackBox;
              let M, C = Math.min(S, o2), w = Math.max(S, o2) - C, T = u2, A = g2 + f2, P = v2;
              l2 && Math.abs(w) < l2 && (w = l2, M = !a2.reversed && !s3.negative || a2.reversed && s3.negative, m(h2) && m(b2) && s3.y === h2 && b2 <= h2 && (a2.min || 0) < h2 && (x2 !== b2 || (a2.max || 0) <= h2) && (M = !M, s3.negative = !s3.negative), C = Math.abs(C - k2) > l2 ? o2 - l2 : k2 - (M ? l2 : 0)), p(s3.options.pointWidth) && (A -= Math.round(((T = P = Math.ceil(s3.options.pointWidth)) - u2) / 2)), i3.centerInCategory && !i3.stacking && (A = t3.adjustForMissingColumns(A, T, s3, d2)), s3.barX = A, s3.pointWidth = T, s3.tooltipPos = e3.inverted ? [c(a2.len + a2.pos - e3.plotLeft - S, a2.pos - e3.plotLeft, a2.len + a2.pos - e3.plotLeft), n2.len + n2.pos - e3.plotTop - A - P / 2, w] : [n2.left - e3.plotLeft + A + P / 2, c(S + a2.pos - e3.plotTop, a2.pos - e3.plotTop, a2.len + a2.pos - e3.plotTop), w], s3.shapeType = t3.pointClass.prototype.shapeType || "roundedRect", s3.shapeArgs = t3.crispCol(A, s3.isNull ? k2 : C, P, s3.isNull ? 0 : w);
            }), g(this, "afterColumnTranslate");
          }
          drawGraph() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
          }
          pointAttribs(t3, e3) {
            let i3 = this.options, s2 = this.pointAttrToOptions || {}, o2 = s2.stroke || "borderColor", r2 = s2["stroke-width"] || "borderWidth", n2, a2, l2, d2 = t3 && t3.color || this.color, c2 = t3 && t3[o2] || i3[o2] || d2, p2 = t3 && t3.options.dashStyle || i3.dashStyle, u2 = t3 && t3[r2] || i3[r2] || this[r2] || 0, g2 = y(t3 && t3.opacity, i3.opacity, 1);
            t3 && this.zones.length && (a2 = t3.getZone(), d2 = t3.options.color || a2 && (a2.color || t3.nonZonedColor) || this.color, a2 && (c2 = a2.borderColor || c2, p2 = a2.dashStyle || p2, u2 = a2.borderWidth || u2)), e3 && t3 && (l2 = (n2 = x(i3.states[e3], t3.options.states && t3.options.states[e3] || {})).brightness, d2 = n2.color || void 0 !== l2 && h(d2).brighten(n2.brightness).get() || d2, c2 = n2[o2] || c2, u2 = n2[r2] || u2, p2 = n2.dashStyle || p2, g2 = y(n2.opacity, g2));
            let f2 = { fill: d2, stroke: c2, "stroke-width": u2, opacity: g2 };
            return p2 && (f2.dashstyle = p2), f2;
          }
          drawPoints(t3 = this.points) {
            let e3;
            let i3 = this, s2 = this.chart, o2 = i3.options, r2 = s2.renderer, n2 = o2.animationLimit || 250;
            t3.forEach(function(t4) {
              let a2 = t4.plotY, h2 = t4.graphic, l2 = !!h2, d2 = h2 && s2.pointCount < n2 ? "animate" : "attr";
              m(a2) && null !== t4.y ? (e3 = t4.shapeArgs, h2 && t4.hasNewShapeType() && (h2 = h2.destroy()), i3.enabledDataSorting && (t4.startXPos = i3.xAxis.reversed ? -(e3 && e3.width || 0) : i3.xAxis.width), !h2 && (t4.graphic = h2 = r2[t4.shapeType](e3).add(t4.group || i3.group), h2 && i3.enabledDataSorting && s2.hasRendered && s2.pointCount < n2 && (h2.attr({ x: t4.startXPos }), l2 = true, d2 = "animate")), h2 && l2 && h2[d2](x(e3)), s2.styledMode || h2[d2](i3.pointAttribs(t4, t4.selected && "select")).shadow(false !== t4.allowShadow && o2.shadow), h2 && (h2.addClass(t4.getClassName(), true), h2.attr({ visibility: t4.visible ? "inherit" : "hidden" }))) : h2 && (t4.graphic = h2.destroy());
            });
          }
          drawTracker(t3 = this.points) {
            let e3;
            let i3 = this, s2 = i3.chart, o2 = s2.pointer, r2 = function(t4) {
              let e4 = o2.getPointFromEvent(t4);
              void 0 !== e4 && i3.options.enableMouseTracking && (o2.isDirectTouch = true, e4.onMouseOver(t4));
            };
            t3.forEach(function(t4) {
              e3 = f(t4.dataLabels) ? t4.dataLabels : t4.dataLabel ? [t4.dataLabel] : [], t4.graphic && (t4.graphic.element.point = t4), e3.forEach(function(e4) {
                e4.div ? e4.div.point = t4 : e4.element.point = t4;
              });
            }), i3._hasTracking || (i3.trackerGroups.forEach(function(t4) {
              i3[t4] && (i3[t4].addClass("highcharts-tracker").on("mouseover", r2).on("mouseout", function(t5) {
                o2.onTrackerMouseOut(t5);
              }), l && i3[t4].on("touchstart", r2), !s2.styledMode && i3.options.cursor && i3[t4].css({ cursor: i3.options.cursor }));
            }), i3._hasTracking = true), g(this, "afterDrawTracker");
          }
          remove() {
            let t3 = this, e3 = t3.chart;
            e3.hasRendered && e3.series.forEach(function(e4) {
              e4.type === t3.type && (e4.isDirty = true);
            }), o.prototype.remove.apply(t3, arguments);
          }
        }
        return k.defaultOptions = x(o.defaultOptions, i2), u(k.prototype, { directTouch: true, getSymbol: d, negStacks: true, trackerGroups: ["group", "dataLabelsGroup"] }), r.registerSeriesType("column", k), k;
      }), i(e, "Core/Series/DataLabel.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let { getDeferredAnimation: o } = t2, { format: r } = e2, { defined: n, extend: a, fireEvent: h, isArray: l, isString: d, merge: c, objectEach: p, pick: u, pInt: g, splat: f } = i2;
        return function(t3) {
          let e3 = [];
          function s2() {
            return f(this.options.dataLabels || {}).some((t4) => t4?.enabled);
          }
          function m(t4, e4, i3, s3, o2) {
            let r2 = this, h2 = this.chart, l2 = this.isCartesian && h2.inverted, d2 = this.enabledDataSorting, c2 = t4.plotX, p2 = t4.plotY, g2 = i3.rotation, f2 = i3.align, m2 = n(c2) && n(p2) && h2.isInsidePlot(c2, Math.round(p2), { inverted: l2, paneCoordinates: true, series: r2 }), x2 = (i4) => {
              d2 && r2.xAxis && !k2 && r2.setDataLabelStartPos(t4, e4, o2, m2, i4);
            }, y2, b2, v2, k2 = "justify" === u(i3.overflow, d2 ? "none" : "justify"), S2 = this.visible && false !== t4.visible && n(c2) && (t4.series.forceDL || d2 && !k2 || m2 || u(i3.inside, !!this.options.stacking) && s3 && h2.isInsidePlot(c2, l2 ? s3.x + 1 : s3.y + s3.height - 1, { inverted: l2, paneCoordinates: true, series: r2 })), M = t4.pos();
            if (S2 && M) {
              g2 && e4.attr({ align: f2 });
              let t5 = e4.getBBox(true), n2 = [0, 0];
              if (y2 = h2.renderer.fontMetrics(e4).b, s3 = a({ x: M[0], y: Math.round(M[1]), width: 0, height: 0 }, s3), a(i3, { width: t5.width, height: t5.height }), g2 ? (k2 = false, b2 = h2.renderer.rotCorr(y2, g2), v2 = { x: s3.x + (i3.x || 0) + s3.width / 2 + b2.x, y: s3.y + (i3.y || 0) + { top: 0, middle: 0.5, bottom: 1 }[i3.verticalAlign] * s3.height }, n2 = [t5.x - Number(e4.attr("x")), t5.y - Number(e4.attr("y"))], x2(v2), e4[o2 ? "attr" : "animate"](v2)) : (x2(s3), e4.align(i3, void 0, s3), v2 = e4.alignAttr), k2 && s3.height >= 0)
                this.justifyDataLabel(e4, i3, v2, t5, s3, o2);
              else if (u(i3.crop, true)) {
                let { x: e5, y: i4 } = v2;
                e5 += n2[0], i4 += n2[1], S2 = h2.isInsidePlot(e5, i4, { paneCoordinates: true, series: r2 }) && h2.isInsidePlot(e5 + t5.width, i4 + t5.height, { paneCoordinates: true, series: r2 });
              }
              i3.shape && !g2 && e4[o2 ? "attr" : "animate"]({ anchorX: M[0], anchorY: M[1] });
            }
            o2 && d2 && (e4.placed = false), S2 || d2 && !k2 ? e4.show() : (e4.hide(), e4.placed = false);
          }
          function x() {
            return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6);
          }
          function y(t4) {
            let e4 = this.hasRendered || 0, i3 = this.initDataLabelsGroup().attr({ opacity: +e4 });
            return !e4 && i3 && (this.visible && i3.show(), this.options.animation ? i3.animate({ opacity: 1 }, t4) : i3.attr({ opacity: 1 })), i3;
          }
          function b(t4) {
            t4 = t4 || this.points;
            let e4 = this, i3 = e4.chart, s3 = e4.options, a2 = i3.renderer, { backgroundColor: l2, plotBackgroundColor: c2 } = i3.options.chart, m2 = i3.options.plotOptions, x2 = a2.getContrast(d(c2) && c2 || d(l2) && l2 || "#000000"), y2 = s3.dataLabels, b2;
            y2 = k(k(m2?.series?.dataLabels, m2?.[e4.type]?.dataLabels), y2);
            let { animation: v2, defer: S2 } = f(y2)[0], M = S2 ? o(i3, v2, e4) : { defer: 0, duration: 0 };
            h(this, "drawDataLabels"), e4.hasDataLabels?.() && (b2 = this.initDataLabels(M), t4.forEach((t5) => {
              let o2 = t5.dataLabels || [];
              f(k(y2, t5.dlOptions || t5.options?.dataLabels)).forEach((h3, l3) => {
                let c3 = h3.enabled && t5.visible && (!t5.isNull || t5.dataLabelOnNull) && function(t6, e5) {
                  let i4 = e5.filter;
                  if (i4) {
                    let e6 = i4.operator, s4 = t6[i4.property], o3 = i4.value;
                    return ">" === e6 && s4 > o3 || "<" === e6 && s4 < o3 || ">=" === e6 && s4 >= o3 || "<=" === e6 && s4 <= o3 || "==" === e6 && s4 == o3 || "===" === e6 && s4 === o3;
                  }
                  return true;
                }(t5, h3), f2 = h3.style || {}, m3 = h3.distance, y3, v3, k2, S3, M2 = {}, C = o2[l3], w = !C;
                if (c3) {
                  if (v3 = u(h3[t5.formatPrefix + "Format"], h3.format), y3 = t5.getLabelConfig(), k2 = n(v3) ? r(v3, y3, i3) : (h3[t5.formatPrefix + "Formatter"] || h3.formatter).call(y3, h3), S3 = h3.rotation, !i3.styledMode && (f2.color = u(h3.color, f2.color, d(e4.color) ? e4.color : void 0, "#000000"), "contrast" === f2.color ? (t5.contrastColor = a2.getContrast(t5.color || e4.color), f2.color = !n(m3) && h3.inside || 0 > g(m3 || 0) || s3.stacking ? t5.contrastColor : x2) : delete t5.contrastColor, s3.cursor && (f2.cursor = s3.cursor)), M2 = { r: h3.borderRadius || 0, rotation: S3, padding: h3.padding, zIndex: 1 }, !i3.styledMode) {
                    let { backgroundColor: e5, borderColor: i4 } = h3;
                    M2.fill = "auto" === e5 ? t5.color : e5, M2.stroke = "auto" === i4 ? t5.color : i4, M2["stroke-width"] = h3.borderWidth;
                  }
                  p(M2, (t6, e5) => {
                    void 0 === t6 && delete M2[e5];
                  });
                }
                if (!C || c3 && n(k2) && !!C.div == !!h3.useHTML && (C.rotation && h3.rotation || C.rotation === h3.rotation) || (C = void 0, w = true), c3 && n(k2) && (C ? M2.text = k2 : (C = S3 ? a2.text(k2, 0, 0, h3.useHTML).addClass("highcharts-data-label") : a2.label(k2, 0, 0, h3.shape, void 0, void 0, h3.useHTML, void 0, "data-label")) && C.addClass(" highcharts-data-label-color-" + t5.colorIndex + " " + (h3.className || "") + (h3.useHTML ? " highcharts-tracker" : "")), C)) {
                  C.options = h3, C.attr(M2), i3.styledMode || C.css(f2).shadow(h3.shadow);
                  let s4 = h3[t5.formatPrefix + "TextPath"] || h3.textPath;
                  s4 && !h3.useHTML && (C.setTextPath(t5.getDataLabelPath?.(C) || t5.graphic, s4), t5.dataLabelPath && !s4.enabled && (t5.dataLabelPath = t5.dataLabelPath.destroy())), C.added || C.add(b2), e4.alignDataLabel(t5, C, h3, void 0, w), C.isActive = true, o2[l3] && o2[l3] !== C && o2[l3].destroy(), o2[l3] = C;
                }
              });
              let h2 = o2.length;
              for (; h2--; )
                o2[h2] && o2[h2].isActive ? o2[h2].isActive = false : (o2[h2]?.destroy(), o2.splice(h2, 1));
              t5.dataLabel = o2[0], t5.dataLabels = o2;
            })), h(this, "afterDrawDataLabels");
          }
          function v(t4, e4, i3, s3, o2, r2) {
            let n2 = this.chart, a2 = e4.align, h2 = e4.verticalAlign, l2 = t4.box ? 0 : t4.padding || 0, { x: d2 = 0, y: c2 = 0 } = e4, p2, u2;
            return (p2 = (i3.x || 0) + l2) < 0 && ("right" === a2 && d2 >= 0 ? (e4.align = "left", e4.inside = true) : d2 -= p2, u2 = true), (p2 = (i3.x || 0) + s3.width - l2) > n2.plotWidth && ("left" === a2 && d2 <= 0 ? (e4.align = "right", e4.inside = true) : d2 += n2.plotWidth - p2, u2 = true), (p2 = i3.y + l2) < 0 && ("bottom" === h2 && c2 >= 0 ? (e4.verticalAlign = "top", e4.inside = true) : c2 -= p2, u2 = true), (p2 = (i3.y || 0) + s3.height - l2) > n2.plotHeight && ("top" === h2 && c2 <= 0 ? (e4.verticalAlign = "bottom", e4.inside = true) : c2 += n2.plotHeight - p2, u2 = true), u2 && (e4.x = d2, e4.y = c2, t4.placed = !r2, t4.align(e4, void 0, o2)), u2;
          }
          function k(t4, e4) {
            let i3 = [], s3;
            if (l(t4) && !l(e4))
              i3 = t4.map(function(t5) {
                return c(t5, e4);
              });
            else if (l(e4) && !l(t4))
              i3 = e4.map(function(e5) {
                return c(t4, e5);
              });
            else if (l(t4) || l(e4)) {
              if (l(t4) && l(e4))
                for (s3 = Math.max(t4.length, e4.length); s3--; )
                  i3[s3] = c(t4[s3], e4[s3]);
            } else
              i3 = c(t4, e4);
            return i3;
          }
          function S(t4, e4, i3, s3, o2) {
            let r2 = this.chart, n2 = r2.inverted, a2 = this.xAxis, h2 = a2.reversed, l2 = ((n2 ? e4.height : e4.width) || 0) / 2, d2 = t4.pointWidth, c2 = d2 ? d2 / 2 : 0;
            e4.startXPos = n2 ? o2.x : h2 ? -l2 - c2 : a2.width - l2 + c2, e4.startYPos = n2 ? h2 ? this.yAxis.height - l2 + c2 : -l2 - c2 : o2.y, s3 ? "hidden" === e4.visibility && (e4.show(), e4.attr({ opacity: 0 }).animate({ opacity: 1 })) : e4.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, e4.hide), r2.hasRendered && (i3 && e4.attr({ x: e4.startXPos, y: e4.startYPos }), e4.placed = true);
          }
          t3.compose = function(t4) {
            if (i2.pushUnique(e3, t4)) {
              let e4 = t4.prototype;
              e4.initDataLabelsGroup = x, e4.initDataLabels = y, e4.alignDataLabel = m, e4.drawDataLabels = b, e4.justifyDataLabel = v, e4.setDataLabelStartPos = S, e4.hasDataLabels = s2;
            }
          };
        }(s || (s = {})), s;
      }), i(e, "Series/Column/ColumnDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s;
        let { series: o } = e2, { merge: r, pick: n } = i2;
        return function(e3) {
          let s2 = [];
          function a(t3, e4, i3, s3, a2) {
            let h = this.chart.inverted, l = t3.series, d = (l.xAxis ? l.xAxis.len : this.chart.plotSizeX) || 0, c = (l.yAxis ? l.yAxis.len : this.chart.plotSizeY) || 0, p = t3.dlBox || t3.shapeArgs, u = n(t3.below, t3.plotY > n(this.translatedThreshold, c)), g = n(i3.inside, !!this.options.stacking);
            if (p) {
              if (s3 = r(p), !("allow" === i3.overflow && false === i3.crop)) {
                s3.y < 0 && (s3.height += s3.y, s3.y = 0);
                let t4 = s3.y + s3.height - c;
                t4 > 0 && t4 < s3.height && (s3.height -= t4);
              }
              h && (s3 = { x: c - s3.y - s3.height, y: d - s3.x - s3.width, width: s3.height, height: s3.width }), g || (h ? (s3.x += u ? 0 : s3.width, s3.width = 0) : (s3.y += u ? s3.height : 0, s3.height = 0));
            }
            i3.align = n(i3.align, !h || g ? "center" : u ? "right" : "left"), i3.verticalAlign = n(i3.verticalAlign, h || g ? "middle" : u ? "top" : "bottom"), o.prototype.alignDataLabel.call(this, t3, e4, i3, s3, a2), i3.inside && t3.contrastColor && e4.css({ color: t3.contrastColor });
          }
          e3.compose = function(e4) {
            t2.compose(o), i2.pushUnique(s2, e4) && (e4.prototype.alignDataLabel = a);
          };
        }(s || (s = {})), s;
      }), i(e, "Series/Bar/BarSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { extend: s, merge: o } = i2;
        class r extends t2 {
          constructor() {
            super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0;
          }
        }
        return r.defaultOptions = o(t2.defaultOptions, {}), s(r.prototype, { inverted: true }), e2.registerSeriesType("bar", r), r;
      }), i(e, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
        return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: true }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } };
      }), i(e, "Series/Scatter/ScatterSeries.js", [e["Series/Scatter/ScatterSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { column: s, line: o } = e2.seriesTypes, { addEvent: r, extend: n, merge: a } = i2;
        class h extends o {
          constructor() {
            super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0;
          }
          applyJitter() {
            let t3 = this, e3 = this.options.jitter, i3 = this.points.length;
            e3 && this.points.forEach(function(s2, o2) {
              ["x", "y"].forEach(function(r2, n2) {
                let a2, h2 = "plot" + r2.toUpperCase(), l, d, c;
                e3[r2] && !s2.isNull && (a2 = t3[r2 + "Axis"], c = e3[r2] * a2.transA, a2 && !a2.isLog && (l = Math.max(0, s2[h2] - c), d = Math.min(a2.len, s2[h2] + c), s2[h2] = l + (d - l) * function(t4) {
                  let e4 = 1e4 * Math.sin(t4);
                  return e4 - Math.floor(e4);
                }(o2 + n2 * i3), "x" === r2 && (s2.clientX = s2.plotX)));
              });
            });
          }
          drawGraph() {
            this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
          }
        }
        return h.defaultOptions = a(o.defaultOptions, t2), n(h.prototype, { drawTracker: s.prototype.drawTracker, sorted: false, requireSorting: false, noSharedTooltip: true, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: false }), r(h, "afterTranslate", function() {
          this.applyJitter();
        }), e2.registerSeriesType("scatter", h), h;
      }), i(e, "Series/CenteredUtilities.js", [e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        var s, o;
        let { deg2rad: r } = t2, { fireEvent: n, isNumber: a, pick: h, relativeLength: l } = i2;
        return (o = s || (s = {})).getCenter = function() {
          let t3 = this.options, i3 = this.chart, s2 = 2 * (t3.slicedOffset || 0), o2 = i3.plotWidth - 2 * s2, r2 = i3.plotHeight - 2 * s2, d = t3.center, c = Math.min(o2, r2), p = t3.thickness, u, g = t3.size, f = t3.innerSize || 0, m, x;
          "string" == typeof g && (g = parseFloat(g)), "string" == typeof f && (f = parseFloat(f));
          let y = [h(d[0], "50%"), h(d[1], "50%"), h(g && g < 0 ? void 0 : t3.size, "100%"), h(f && f < 0 ? void 0 : t3.innerSize || 0, "0%")];
          for (!i3.angular || this instanceof e2 || (y[3] = 0), m = 0; m < 4; ++m)
            x = y[m], u = m < 2 || 2 === m && /%$/.test(x), y[m] = l(x, [o2, r2, c, y[2]][m]) + (u ? s2 : 0);
          return y[3] > y[2] && (y[3] = y[2]), a(p) && 2 * p < y[2] && p > 0 && (y[3] = y[2] - 2 * p), n(this, "afterGetCenter", { positions: y }), y;
        }, o.getStartAndEndRadians = function(t3, e3) {
          let i3 = a(t3) ? t3 : 0, s2 = a(e3) && e3 > i3 && e3 - i3 < 360 ? e3 : i3 + 360;
          return { start: r * (i3 + -90), end: r * (s2 + -90) };
        }, s;
      }), i(e, "Series/Pie/PiePoint.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { setAnimation: s } = t2, { addEvent: o, defined: r, extend: n, isNumber: a, isString: h, pick: l, relativeLength: d } = i2;
        class c extends e2 {
          constructor() {
            super(...arguments), this.half = 0, this.options = void 0, this.series = void 0;
          }
          getConnectorPath(t3) {
            let e3 = t3.dataLabelPosition, i3 = t3.options || {}, s2 = i3.connectorShape, o2 = this.connectorShapes[s2] || s2;
            return e3 && o2.call(this, __spreadProps(__spreadValues({}, e3.computed), { alignment: e3.alignment }), e3.connectorPosition, i3) || [];
          }
          getTranslate() {
            return this.sliced && this.slicedTranslation || { translateX: 0, translateY: 0 };
          }
          haloPath(t3) {
            let e3 = this.shapeArgs;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e3.x, e3.y, e3.r + t3, e3.r + t3, { innerR: e3.r - 1, start: e3.start, end: e3.end, borderRadius: e3.borderRadius });
          }
          init() {
            super.init.apply(this, arguments), this.name = l(this.name, "Slice");
            let t3 = (t4) => {
              this.slice("select" === t4.type);
            };
            return o(this, "select", t3), o(this, "unselect", t3), this;
          }
          isValid() {
            return a(this.y) && this.y >= 0;
          }
          setVisible(t3, e3) {
            let i3 = this.series, s2 = i3.chart, o2 = i3.options.ignoreHiddenPoint;
            e3 = l(e3, o2), t3 !== this.visible && (this.visible = this.options.visible = t3 = void 0 === t3 ? !this.visible : t3, i3.options.data[i3.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector"].forEach((e4) => {
              this[e4] && this[e4][t3 ? "show" : "hide"](t3);
            }), this.legendItem && s2.legend.colorizeItem(this, t3), t3 || "hover" !== this.state || this.setState(""), o2 && (i3.isDirty = true), e3 && s2.redraw());
          }
          slice(t3, e3, i3) {
            let o2 = this.series, n2 = o2.chart;
            s(i3, n2), e3 = l(e3, true), this.sliced = this.options.sliced = t3 = r(t3) ? t3 : !this.sliced, o2.options.data[o2.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
          }
        }
        return n(c.prototype, { connectorShapes: { fixedOffset: function(t3, e3, i3) {
          let s2 = e3.breakAt, o2 = e3.touchingSliceAt, r2 = i3.softConnector ? ["C", t3.x + ("left" === t3.alignment ? -5 : 5), t3.y, 2 * s2.x - o2.x, 2 * s2.y - o2.y, s2.x, s2.y] : ["L", s2.x, s2.y];
          return [["M", t3.x, t3.y], r2, ["L", o2.x, o2.y]];
        }, straight: function(t3, e3) {
          let i3 = e3.touchingSliceAt;
          return [["M", t3.x, t3.y], ["L", i3.x, i3.y]];
        }, crookedLine: function(t3, e3, i3) {
          let { breakAt: s2, touchingSliceAt: o2 } = e3, { series: r2 } = this, [n2, a2, h2] = r2.center, l2 = h2 / 2, { plotLeft: c2, plotWidth: p } = r2.chart, u = "left" === t3.alignment, { x: g, y: f } = t3, m = s2.x;
          if (i3.crookDistance) {
            let t4 = d(i3.crookDistance, 1);
            m = u ? n2 + l2 + (p + c2 - n2 - l2) * (1 - t4) : c2 + (n2 - l2) * t4;
          } else
            m = n2 + (a2 - f) * Math.tan((this.angle || 0) - Math.PI / 2);
          let x = [["M", g, f]];
          return (u ? m <= g && m >= s2.x : m >= g && m <= s2.x) && x.push(["L", m, f]), x.push(["L", s2.x, s2.y], ["L", o2.x, o2.y]), x;
        } } }), c;
      }), i(e, "Series/Pie/PieSeriesDefaults.js", [], function() {
        return { borderRadius: 3, center: [null, null], clip: false, colorByPoint: true, dataLabels: { connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: true, formatter: function() {
          return this.point.isNull ? void 0 : this.point.name;
        }, softConnector: true, x: 0 }, fillColor: void 0, ignoreHiddenPoint: true, inactiveOtherPoints: true, legendType: "point", marker: null, size: null, showInLegend: false, slicedOffset: 10, stickyTracking: false, tooltip: { followPointer: true }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } };
      }), i(e, "Series/Pie/PieSeries.js", [e["Series/CenteredUtilities.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Series/Pie/PiePoint.js"], e["Series/Pie/PieSeriesDefaults.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o, r, n, a, h) {
        let { getStartAndEndRadians: l } = t2, { noop: d } = i2, { clamp: c, extend: p, fireEvent: u, merge: g, pick: f, relativeLength: m, splat: x } = h;
        class y extends r {
          constructor() {
            super(...arguments), this.center = void 0, this.data = void 0, this.options = void 0, this.points = void 0;
          }
          animate(t3) {
            let e3 = this, i3 = e3.points, s2 = e3.startAngleRad;
            t3 || i3.forEach(function(t4) {
              let i4 = t4.graphic, o2 = t4.shapeArgs;
              i4 && o2 && (i4.attr({ r: f(t4.startR, e3.center && e3.center[3] / 2), start: s2, end: s2 }), i4.animate({ r: o2.r, start: o2.start, end: o2.end }, e3.options.animation));
            });
          }
          drawEmpty() {
            let t3, e3;
            let i3 = this.startAngleRad, s2 = this.endAngleRad, o2 = this.options;
            0 === this.total && this.center ? (t3 = this.center[0], e3 = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t3, e3, this.center[1] / 2, 0, i3, s2).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: a.arc(t3, e3, this.center[2] / 2, 0, { start: i3, end: s2, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": o2.borderWidth, fill: o2.fillColor || "none", stroke: o2.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
          }
          drawPoints() {
            let t3 = this.chart.renderer;
            this.points.forEach(function(e3) {
              e3.graphic && e3.hasNewShapeType() && (e3.graphic = e3.graphic.destroy()), e3.graphic || (e3.graphic = t3[e3.shapeType](e3.shapeArgs).add(e3.series.group), e3.delayedRendering = true);
            });
          }
          generatePoints() {
            super.generatePoints(), this.updateTotals();
          }
          getX(t3, e3, i3, s2) {
            let o2 = this.center, r2 = this.radii ? this.radii[i3.index] || 0 : o2[2] / 2, n2 = s2.dataLabelPosition, a2 = n2?.distance || 0, h2 = Math.asin(c((t3 - o2[1]) / (r2 + a2), -1, 1)), l2 = o2[0] + (e3 ? -1 : 1) * (Math.cos(h2) * (r2 + a2)) + (a2 > 0 ? (e3 ? -1 : 1) * (s2.padding || 0) : 0);
            return l2;
          }
          hasData() {
            return !!this.processedXData.length;
          }
          redrawPoints() {
            let t3, e3, i3, s2;
            let o2 = this, r2 = o2.chart;
            this.drawEmpty(), o2.group && !r2.styledMode && o2.group.shadow(o2.options.shadow), o2.points.forEach(function(n2) {
              let a2 = {};
              e3 = n2.graphic, !n2.isNull && e3 ? (s2 = n2.shapeArgs, t3 = n2.getTranslate(), r2.styledMode || (i3 = o2.pointAttribs(n2, n2.selected && "select")), n2.delayedRendering ? (e3.setRadialReference(o2.center).attr(s2).attr(t3), r2.styledMode || e3.attr(i3).attr({ "stroke-linejoin": "round" }), n2.delayedRendering = false) : (e3.setRadialReference(o2.center), r2.styledMode || g(true, a2, i3), g(true, a2, s2, t3), e3.animate(a2)), e3.attr({ visibility: n2.visible ? "inherit" : "hidden" }), e3.addClass(n2.getClassName(), true)) : e3 && (n2.graphic = e3.destroy());
            });
          }
          sortByAngle(t3, e3) {
            t3.sort(function(t4, i3) {
              return void 0 !== t4.angle && (i3.angle - t4.angle) * e3;
            });
          }
          translate(t3) {
            u(this, "translate"), this.generatePoints();
            let e3 = this.options, i3 = e3.slicedOffset, s2 = l(e3.startAngle, e3.endAngle), o2 = this.startAngleRad = s2.start, r2 = this.endAngleRad = s2.end, n2 = r2 - o2, a2 = this.points, h2 = e3.ignoreHiddenPoint, d2 = a2.length, c2, p2, g2, f2, m2, x2, y2, b = 0;
            for (t3 || (this.center = t3 = this.getCenter()), x2 = 0; x2 < d2; x2++) {
              y2 = a2[x2], c2 = o2 + b * n2, y2.isValid() && (!h2 || y2.visible) && (b += y2.percentage / 100), p2 = o2 + b * n2;
              let e4 = { x: t3[0], y: t3[1], r: t3[2] / 2, innerR: t3[3] / 2, start: Math.round(1e3 * c2) / 1e3, end: Math.round(1e3 * p2) / 1e3 };
              y2.shapeType = "arc", y2.shapeArgs = e4, (g2 = (p2 + c2) / 2) > 1.5 * Math.PI ? g2 -= 2 * Math.PI : g2 < -Math.PI / 2 && (g2 += 2 * Math.PI), y2.slicedTranslation = { translateX: Math.round(Math.cos(g2) * i3), translateY: Math.round(Math.sin(g2) * i3) }, f2 = Math.cos(g2) * t3[2] / 2, m2 = Math.sin(g2) * t3[2] / 2, y2.tooltipPos = [t3[0] + 0.7 * f2, t3[1] + 0.7 * m2], y2.half = g2 < -Math.PI / 2 || g2 > Math.PI / 2 ? 1 : 0, y2.angle = g2;
            }
            u(this, "afterTranslate");
          }
          updateTotals() {
            let t3 = this.points, e3 = t3.length, i3 = this.options.ignoreHiddenPoint, s2, o2, r2 = 0;
            for (s2 = 0; s2 < e3; s2++)
              (o2 = t3[s2]).isValid() && (!i3 || o2.visible) && (r2 += o2.y);
            for (s2 = 0, this.total = r2; s2 < e3; s2++)
              (o2 = t3[s2]).percentage = r2 > 0 && (o2.visible || !i3) ? o2.y / r2 * 100 : 0, o2.total = r2;
          }
        }
        return y.defaultOptions = g(r.defaultOptions, o), p(y.prototype, { axisTypes: [], directTouch: true, drawGraph: void 0, drawTracker: e2.prototype.drawTracker, getCenter: t2.getCenter, getSymbol: d, isCartesian: false, noSharedTooltip: true, pointAttribs: e2.prototype.pointAttribs, pointClass: s, requireSorting: false, searchPoint: d, trackerGroups: ["group", "dataLabelsGroup"] }), n.registerSeriesType("pie", y), y;
      }), i(e, "Series/Pie/PieDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(t2, e2, i2, s, o) {
        var r;
        let { noop: n } = e2, { distribute: a } = i2, { series: h } = s, { arrayMax: l, clamp: d, defined: c, pick: p, relativeLength: u } = o;
        return function(e3) {
          let i3 = [], s2 = { radialDistributionY: function(t3, e4) {
            return (e4.dataLabelPosition?.top || 0) + t3.distributeBox.pos;
          }, radialDistributionX: function(t3, e4, i4, s3, o2) {
            let r3 = o2.dataLabelPosition;
            return t3.getX(i4 < (r3?.top || 0) + 2 || i4 > (r3?.bottom || 0) - 2 ? s3 : i4, e4.half, e4, o2);
          }, justify: function(t3, e4, i4, s3) {
            return s3[0] + (t3.half ? -1 : 1) * (i4 + (e4.dataLabelPosition?.distance || 0));
          }, alignToPlotEdges: function(t3, e4, i4, s3) {
            let o2 = t3.getBBox().width;
            return e4 ? o2 + s3 : i4 - o2 - s3;
          }, alignToConnectors: function(t3, e4, i4, s3) {
            let o2 = 0, r3;
            return t3.forEach(function(t4) {
              (r3 = t4.dataLabel.getBBox().width) > o2 && (o2 = r3);
            }), e4 ? o2 + s3 : i4 - o2 - s3;
          } };
          function r2(t3, e4) {
            let { center: i4, options: s3 } = this, o2 = i4[2] / 2, r3 = t3.angle || 0, n2 = Math.cos(r3), a2 = Math.sin(r3), h2 = i4[0] + n2 * o2, l2 = i4[1] + a2 * o2, d2 = Math.min((s3.slicedOffset || 0) + (s3.borderWidth || 0), e4 / 5);
            return { natural: { x: h2 + n2 * e4, y: l2 + a2 * e4 }, computed: {}, alignment: e4 < 0 ? "center" : t3.half ? "right" : "left", connectorPosition: { breakAt: { x: h2 + n2 * d2, y: l2 + a2 * d2 }, touchingSliceAt: { x: h2, y: l2 } }, distance: e4 };
          }
          function g() {
            let t3 = this, e4 = t3.points, i4 = t3.chart, s3 = i4.plotWidth, o2 = i4.plotHeight, r3 = i4.plotLeft, n2 = Math.round(i4.chartWidth / 3), d2 = t3.center, g2 = d2[2] / 2, f2 = d2[1], m2 = [[], []], x = [0, 0, 0, 0], y = t3.dataLabelPositioners, b, v, k, S = 0;
            t3.visible && t3.hasDataLabels?.() && (e4.forEach((t4) => {
              (t4.dataLabels || []).forEach((t5) => {
                t5.shortened && (t5.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), t5.shortened = false);
              });
            }), h.prototype.drawDataLabels.apply(t3), e4.forEach((t4) => {
              (t4.dataLabels || []).forEach((e5, i5) => {
                let s4 = d2[2] / 2, o3 = e5.options, r4 = u(o3?.distance || 0, s4);
                0 === i5 && m2[t4.half].push(t4), !c(o3?.style?.width) && e5.getBBox().width > n2 && (e5.css({ width: Math.round(0.7 * n2) + "px" }), e5.shortened = true), e5.dataLabelPosition = this.getDataLabelPosition(t4, r4), S = Math.max(S, r4);
              });
            }), m2.forEach((e5, n3) => {
              let h2 = e5.length, l2 = [], u2, m3, b2 = 0, M;
              h2 && (t3.sortByAngle(e5, n3 - 0.5), S > 0 && (u2 = Math.max(0, f2 - g2 - S), m3 = Math.min(f2 + g2 + S, i4.plotHeight), e5.forEach((t4) => {
                (t4.dataLabels || []).forEach((e6, s4) => {
                  let o3 = e6.dataLabelPosition;
                  o3 && o3.distance > 0 && (o3.top = Math.max(0, f2 - g2 - o3.distance), o3.bottom = Math.min(f2 + g2 + o3.distance, i4.plotHeight), b2 = e6.getBBox().height || 21, t4.distributeBox = { target: (e6.dataLabelPosition?.natural.y || 0) - o3.top + b2 / 2, size: b2, rank: t4.y }, l2.push(t4.distributeBox));
                });
              }), a(l2, M = m3 + b2 - u2, M / 5)), e5.forEach((i5) => {
                (i5.dataLabels || []).forEach((a2) => {
                  let h3 = a2.options || {}, u3 = i5.distributeBox, f3 = a2.dataLabelPosition, m4 = f3?.natural.y || 0, b3 = h3.connectorPadding || 0, S2 = 0, M2 = m4, C = "inherit";
                  if (f3) {
                    if (l2 && c(u3) && f3.distance > 0 && (void 0 === u3.pos ? C = "hidden" : (k = u3.size, M2 = y.radialDistributionY(i5, a2))), h3.justify)
                      S2 = y.justify(i5, a2, g2, d2);
                    else
                      switch (h3.alignTo) {
                        case "connectors":
                          S2 = y.alignToConnectors(e5, n3, s3, r3);
                          break;
                        case "plotEdges":
                          S2 = y.alignToPlotEdges(a2, n3, s3, r3);
                          break;
                        default:
                          S2 = y.radialDistributionX(t3, i5, M2, m4, a2);
                      }
                    if (f3.attribs = { visibility: C, align: f3.alignment }, f3.posAttribs = { x: S2 + (h3.x || 0) + ({ left: b3, right: -b3 }[f3.alignment] || 0), y: M2 + (h3.y || 0) - a2.getBBox().height / 2 }, f3.computed.x = S2, f3.computed.y = M2, p(h3.crop, true)) {
                      let t4;
                      S2 - (v = a2.getBBox().width) < b3 && 1 === n3 ? (t4 = Math.round(v - S2 + b3), x[3] = Math.max(t4, x[3])) : S2 + v > s3 - b3 && 0 === n3 && (t4 = Math.round(S2 + v - s3 + b3), x[1] = Math.max(t4, x[1])), M2 - k / 2 < 0 ? x[0] = Math.max(Math.round(-M2 + k / 2), x[0]) : M2 + k / 2 > o2 && (x[2] = Math.max(Math.round(M2 + k / 2 - o2), x[2])), f3.sideOverflow = t4;
                    }
                  }
                });
              }));
            }), (0 === l(x) || this.verifyDataLabelOverflow(x)) && (this.placeDataLabels(), this.points.forEach((e5) => {
              (e5.dataLabels || []).forEach((s4) => {
                let { connectorColor: o3, connectorWidth: r4 = 1 } = s4.options || {}, n3 = s4.dataLabelPosition;
                if (r4) {
                  let a2;
                  b = s4.connector, n3 && n3.distance > 0 ? (a2 = !b, b || (s4.connector = b = i4.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + e5.colorIndex + (e5.className ? " " + e5.className : "")).add(t3.dataLabelsGroup)), i4.styledMode || b.attr({ "stroke-width": r4, stroke: o3 || e5.color || "#666666" }), b[a2 ? "attr" : "animate"]({ d: e5.getConnectorPath(s4) }), b.attr({ visibility: n3.attribs?.visibility })) : b && (s4.connector = b.destroy());
                }
              });
            })));
          }
          function f() {
            this.points.forEach((t3) => {
              (t3.dataLabels || []).forEach((t4) => {
                let e4 = t4.dataLabelPosition;
                e4 ? (e4.sideOverflow && (t4.css({ width: Math.max(t4.getBBox().width - e4.sideOverflow, 0) + "px", textOverflow: (t4.options?.style || {}).textOverflow || "ellipsis" }), t4.shortened = true), t4.attr(e4.attribs), t4[t4.moved ? "animate" : "attr"](e4.posAttribs), t4.moved = true) : t4 && t4.attr({ y: -9999 });
              }), delete t3.distributeBox;
            }, this);
          }
          function m(t3) {
            let e4 = this.center, i4 = this.options, s3 = i4.center, o2 = i4.minSize || 80, r3 = o2, n2 = null !== i4.size;
            return !n2 && (null !== s3[0] ? r3 = Math.max(e4[2] - Math.max(t3[1], t3[3]), o2) : (r3 = Math.max(e4[2] - t3[1] - t3[3], o2), e4[0] += (t3[3] - t3[1]) / 2), null !== s3[1] ? r3 = d(r3, o2, e4[2] - Math.max(t3[0], t3[2])) : (r3 = d(r3, o2, e4[2] - t3[0] - t3[2]), e4[1] += (t3[0] - t3[2]) / 2), r3 < e4[2] ? (e4[2] = r3, e4[3] = Math.min(i4.thickness ? Math.max(0, r3 - 2 * i4.thickness) : Math.max(0, u(i4.innerSize || 0, r3)), r3), this.translate(e4), this.drawDataLabels && this.drawDataLabels()) : n2 = true), n2;
          }
          e3.compose = function(e4) {
            if (t2.compose(h), o.pushUnique(i3, e4)) {
              let t3 = e4.prototype;
              t3.dataLabelPositioners = s2, t3.alignDataLabel = n, t3.drawDataLabels = g, t3.getDataLabelPosition = r2, t3.placeDataLabels = f, t3.verifyDataLabelOverflow = m;
            }
          };
        }(r || (r = {})), r;
      }), i(e, "Extensions/OverlappingDataLabels.js", [e["Core/Utilities.js"]], function(t2) {
        let { addEvent: e2, fireEvent: i2, isNumber: s, objectEach: o, pick: r, pushUnique: n } = t2, a = [];
        function h(t3) {
          let e3 = t3.length, o2 = this.renderer, r2 = (t4, e4) => !(e4.x >= t4.x + t4.width || e4.x + e4.width <= t4.x || e4.y >= t4.y + t4.height || e4.y + e4.height <= t4.y), n2 = (t4) => {
            let e4 = t4.box ? 0 : t4.padding || 0, i3, r3, n3, a3 = 0, h3 = 0, l2, d3;
            if (t4 && (!t4.alignAttr || t4.placed))
              return i3 = t4.alignAttr || { x: t4.attr("x"), y: t4.attr("y") }, r3 = t4.parentGroup, t4.width || (n3 = t4.getBBox(), t4.width = n3.width, t4.height = n3.height, a3 = o2.fontMetrics(t4.element).h), l2 = t4.width - 2 * e4, (d3 = { left: "0", center: "0.5", right: "1" }[t4.alignValue]) ? h3 = +d3 * l2 : s(t4.x) && Math.round(t4.x) !== t4.translateX && (h3 = t4.x - (t4.translateX || 0)), { x: i3.x + (r3.translateX || 0) + e4 - (h3 || 0), y: i3.y + (r3.translateY || 0) + e4 - a3, width: t4.width - 2 * e4, height: (t4.height || 0) - 2 * e4 };
          }, a2, h2, d2, c, p, u = false;
          for (let i3 = 0; i3 < e3; i3++)
            (a2 = t3[i3]) && (a2.oldOpacity = a2.opacity, a2.newOpacity = 1, a2.absoluteBox = n2(a2));
          t3.sort((t4, e4) => (e4.labelrank || 0) - (t4.labelrank || 0));
          for (let i3 = 0; i3 < e3; ++i3) {
            c = (h2 = t3[i3]) && h2.absoluteBox;
            for (let s2 = i3 + 1; s2 < e3; ++s2)
              p = (d2 = t3[s2]) && d2.absoluteBox, c && p && h2 !== d2 && 0 !== h2.newOpacity && 0 !== d2.newOpacity && "hidden" !== h2.visibility && "hidden" !== d2.visibility && r2(c, p) && ((h2.labelrank < d2.labelrank ? h2 : d2).newOpacity = 0);
          }
          for (let e4 of t3)
            l(e4, this) && (u = true);
          u && i2(this, "afterHideAllOverlappingLabels");
        }
        function l(t3, e3) {
          let s2, o2 = false;
          return t3 && (s2 = t3.newOpacity, t3.oldOpacity !== s2 && (t3.alignAttr && t3.placed ? (t3[s2 ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), o2 = true, t3.alignAttr.opacity = s2, t3[t3.isOld ? "animate" : "attr"](t3.alignAttr, null, function() {
            e3.styledMode || t3.css({ pointerEvents: s2 ? "auto" : "none" });
          }), i2(e3, "afterHideOverlappingLabel")) : t3.attr({ opacity: s2 })), t3.isOld = true), o2;
        }
        function d() {
          let t3 = this, e3 = [];
          for (let i3 of t3.labelCollectors || [])
            e3 = e3.concat(i3());
          for (let i3 of t3.yAxis || [])
            i3.stacking && i3.options.stackLabels && !i3.options.stackLabels.allowOverlap && o(i3.stacking.stacks, (t4) => {
              o(t4, (t5) => {
                t5.label && e3.push(t5.label);
              });
            });
          for (let i3 of t3.series || [])
            if (i3.visible && i3.hasDataLabels?.()) {
              let s2 = (i4) => {
                for (let s3 of i4)
                  s3.visible && (s3.dataLabels || []).forEach((i5) => {
                    let o2 = i5.options || {};
                    i5.labelrank = r(o2.labelrank, s3.labelrank, s3.shapeArgs?.height), o2.allowOverlap ?? Number(o2.distance) > 0 ? (i5.oldOpacity = i5.opacity, i5.newOpacity = 1, l(i5, t3)) : e3.push(i5);
                  });
              };
              s2(i3.nodes || []), s2(i3.points);
            }
          this.hideOverlappingLabels(e3);
        }
        return { compose: function(t3) {
          if (n(a, t3)) {
            let i3 = t3.prototype;
            i3.hideOverlappingLabels = h, e2(t3, "render", d);
          }
        } };
      }), i(e, "Extensions/BorderRadius.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(t2, e2, i2) {
        let { defaultOptions: s } = t2, { noop: o } = e2, { addEvent: r, extend: n, isObject: a, merge: h, pushUnique: l, relativeLength: d } = i2, c = [], p = { radius: 0, scope: "stack", where: void 0 }, u = o, g = o;
        function f(t3, e3, i3, s2, o2 = {}) {
          let r2 = u(t3, e3, i3, s2, o2), { innerR: n2 = 0, r: a2 = i3, start: h2 = 0, end: l2 = 0 } = o2;
          if (o2.open || !o2.borderRadius)
            return r2;
          let c2 = l2 - h2, p2 = Math.sin(c2 / 2), g2 = Math.max(Math.min(d(o2.borderRadius || 0, a2 - n2), (a2 - n2) / 2, a2 * p2 / (1 + p2)), 0), f2 = Math.min(g2, 2 * (c2 / Math.PI) * n2), m2 = r2.length - 1;
          for (; m2--; )
            !function(t4, e4, i4) {
              let s3, o3, r3;
              let n3 = t4[e4], a3 = t4[e4 + 1];
              if ("Z" === a3[0] && (a3 = t4[0]), ("M" === n3[0] || "L" === n3[0]) && "A" === a3[0] ? (s3 = n3, o3 = a3, r3 = true) : "A" === n3[0] && ("M" === a3[0] || "L" === a3[0]) && (s3 = a3, o3 = n3), s3 && o3 && o3.params) {
                let n4 = o3[1], a4 = o3[5], h3 = o3.params, { start: l3, end: d2, cx: c3, cy: p3 } = h3, u2 = a4 ? n4 - i4 : n4 + i4, g3 = u2 ? Math.asin(i4 / u2) : 0, f3 = a4 ? g3 : -g3, m3 = Math.cos(g3) * u2;
                r3 ? (h3.start = l3 + f3, s3[1] = c3 + m3 * Math.cos(l3), s3[2] = p3 + m3 * Math.sin(l3), t4.splice(e4 + 1, 0, ["A", i4, i4, 0, 0, 1, c3 + n4 * Math.cos(h3.start), p3 + n4 * Math.sin(h3.start)])) : (h3.end = d2 - f3, o3[6] = c3 + n4 * Math.cos(h3.end), o3[7] = p3 + n4 * Math.sin(h3.end), t4.splice(e4 + 1, 0, ["A", i4, i4, 0, 0, 1, c3 + m3 * Math.cos(d2), p3 + m3 * Math.sin(d2)])), o3[4] = Math.abs(h3.end - h3.start) < Math.PI ? 0 : 1;
              }
            }(r2, m2, m2 > 1 ? f2 : g2);
          return r2;
        }
        function m() {
          if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
            let { options: t3, yAxis: e3 } = this, i3 = "percent" === t3.stacking, o2 = s.plotOptions?.[this.type]?.borderRadius, r2 = x(t3.borderRadius, a(o2) ? o2 : {}), h2 = e3.options.reversed;
            for (let s2 of this.points) {
              let { shapeArgs: o3 } = s2;
              if ("roundedRect" === s2.shapeType && o3) {
                let { width: a2 = 0, height: l2 = 0, y: c2 = 0 } = o3, p2 = c2, u2 = l2;
                if ("stack" === r2.scope && s2.stackTotal) {
                  let o4 = e3.translate(i3 ? 100 : s2.stackTotal, false, true, false, true), r3 = e3.translate(t3.threshold || 0, false, true, false, true), n2 = this.crispCol(0, Math.min(o4, r3), 0, Math.abs(o4 - r3));
                  p2 = n2.y, u2 = n2.height;
                }
                let g2 = (s2.negative ? -1 : 1) * (h2 ? -1 : 1) == -1, f2 = r2.where;
                !f2 && this.is("waterfall") && Math.abs((s2.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (f2 = "all"), f2 || (f2 = "end");
                let m2 = Math.min(d(r2.radius, a2), a2 / 2, "all" === f2 ? l2 / 2 : 1 / 0) || 0;
                "end" === f2 && (g2 && (p2 -= m2), u2 += m2), n(o3, { brBoxHeight: u2, brBoxY: p2, r: m2 });
              }
            }
          }
        }
        function x(t3, e3) {
          return a(t3) || (t3 = { radius: t3 || 0 }), h(p, e3, t3);
        }
        function y() {
          let t3 = x(this.options.borderRadius);
          for (let e3 of this.points) {
            let i3 = e3.shapeArgs;
            i3 && (i3.borderRadius = d(t3.radius, (i3.r || 0) - (i3.innerR || 0)));
          }
        }
        function b(t3, e3, i3, s2, o2 = {}) {
          let r2 = g(t3, e3, i3, s2, o2), { r: n2 = 0, brBoxHeight: a2 = s2, brBoxY: h2 = e3 } = o2, l2 = e3 - h2, d2 = h2 + a2 - (e3 + s2), c2 = l2 - n2 > -0.1 ? 0 : n2, p2 = d2 - n2 > -0.1 ? 0 : n2, u2 = Math.max(c2 && l2, 0), f2 = Math.max(p2 && d2, 0), m2 = [t3 + c2, e3], x2 = [t3 + i3 - c2, e3], y2 = [t3 + i3, e3 + c2], b2 = [t3 + i3, e3 + s2 - p2], v = [t3 + i3 - p2, e3 + s2], k = [t3 + p2, e3 + s2], S = [t3, e3 + s2 - p2], M = [t3, e3 + c2], C = (t4, e4) => Math.sqrt(Math.pow(t4, 2) - Math.pow(e4, 2));
          if (u2) {
            let t4 = C(c2, c2 - u2);
            m2[0] -= t4, x2[0] += t4, y2[1] = M[1] = e3 + c2 - u2;
          }
          if (s2 < c2 - u2) {
            let o3 = C(c2, c2 - u2 - s2);
            y2[0] = b2[0] = t3 + i3 - c2 + o3, v[0] = Math.min(y2[0], v[0]), k[0] = Math.max(b2[0], k[0]), S[0] = M[0] = t3 + c2 - o3, y2[1] = M[1] = e3 + s2;
          }
          if (f2) {
            let t4 = C(p2, p2 - f2);
            v[0] += t4, k[0] -= t4, b2[1] = S[1] = e3 + s2 - p2 + f2;
          }
          if (s2 < p2 - f2) {
            let o3 = C(p2, p2 - f2 - s2);
            y2[0] = b2[0] = t3 + i3 - p2 + o3, x2[0] = Math.min(y2[0], x2[0]), m2[0] = Math.max(b2[0], m2[0]), S[0] = M[0] = t3 + p2 - o3, b2[1] = S[1] = e3;
          }
          return r2.length = 0, r2.push(["M", ...m2], ["L", ...x2], ["A", c2, c2, 0, 0, 1, ...y2], ["L", ...b2], ["A", p2, p2, 0, 0, 1, ...v], ["L", ...k], ["A", p2, p2, 0, 0, 1, ...S], ["L", ...M], ["A", c2, c2, 0, 0, 1, ...m2], ["Z"]), r2;
        }
        return { compose: function(t3, e3, i3, s2) {
          if (l(c, t3) && r(t3, "afterColumnTranslate", m, { order: 9 }), l(c, e3) && r(e3, "afterTranslate", y), l(c, i3) && i3.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), l(c, s2)) {
            let t4 = s2.prototype.symbols;
            u = t4.arc, g = t4.roundedRect, t4.arc = f, t4.roundedRect = b;
          }
        }, optionsToObject: x };
      }), i(e, "Core/Responsive.js", [e["Core/Utilities.js"]], function(t2) {
        var e2;
        let { diffObjects: i2, extend: s, find: o, isArray: r, isObject: n, merge: a, objectEach: h, pick: l, splat: d, uniqueKey: c } = t2;
        return function(e3) {
          let r2 = [];
          function n2(t3, e4) {
            let i3 = t3.condition, s2 = i3.callback || function() {
              return this.chartWidth <= l(i3.maxWidth, Number.MAX_VALUE) && this.chartHeight <= l(i3.maxHeight, Number.MAX_VALUE) && this.chartWidth >= l(i3.minWidth, 0) && this.chartHeight >= l(i3.minHeight, 0);
            };
            s2.call(this) && e4.push(t3._id);
          }
          function h2(t3, e4) {
            let s2 = this.options.responsive, r3 = this.currentResponsive, n3 = [], h3;
            !e4 && s2 && s2.rules && s2.rules.forEach((t4) => {
              void 0 === t4._id && (t4._id = c()), this.matchResponsiveRule(t4, n3);
            }, this);
            let l2 = a(...n3.map((t4) => o((s2 || {}).rules || [], (e5) => e5._id === t4)).map((t4) => t4 && t4.chartOptions));
            l2.isResponsiveOptions = true, n3 = n3.toString() || void 0;
            let d2 = r3 && r3.ruleIds;
            n3 !== d2 && (r3 && this.update(r3.undoOptions, t3, true), n3 ? ((h3 = i2(l2, this.options, true, this.collectionsWithUpdate)).isResponsiveOptions = true, this.currentResponsive = { ruleIds: n3, mergedOptions: l2, undoOptions: h3 }, this.update(l2, t3, true)) : this.currentResponsive = void 0);
          }
          e3.compose = function(e4) {
            return t2.pushUnique(r2, e4) && s(e4.prototype, { matchResponsiveRule: n2, setResponsive: h2 }), e4;
          };
        }(e2 || (e2 = {})), e2;
      }), i(e, "masters/highcharts.src.js", [e["Core/Globals.js"], e["Core/Utilities.js"], e["Core/Defaults.js"], e["Core/Animation/Fx.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Templating.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Renderer/HTML/HTMLElement.js"], e["Core/Renderer/HTML/HTMLRenderer.js"], e["Core/Axis/Axis.js"], e["Core/Axis/DateTimeAxis.js"], e["Core/Axis/LogarithmicAxis.js"], e["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], e["Core/Axis/Tick.js"], e["Core/Tooltip.js"], e["Core/Series/Point.js"], e["Core/Pointer.js"], e["Core/Legend/Legend.js"], e["Core/Chart/Chart.js"], e["Core/Axis/Stacking/StackingAxis.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Column/ColumnSeries.js"], e["Series/Column/ColumnDataLabel.js"], e["Series/Pie/PieSeries.js"], e["Series/Pie/PieDataLabel.js"], e["Core/Series/DataLabel.js"], e["Extensions/OverlappingDataLabels.js"], e["Extensions/BorderRadius.js"], e["Core/Responsive.js"], e["Core/Color/Color.js"], e["Core/Time.js"]], function(t2, e2, i2, s, o, r, n, a, h, l, d, c, p, u, g, f, m, x, y, b, v, k, S, M, C, w, T, A, P, L, O, D, E, I, B, j) {
        return t2.animate = o.animate, t2.animObject = o.animObject, t2.getDeferredAnimation = o.getDeferredAnimation, t2.setAnimation = o.setAnimation, t2.stop = o.stop, t2.timers = s.timers, t2.AST = r, t2.Axis = p, t2.Chart = k, t2.chart = k.chart, t2.Fx = s, t2.Legend = v, t2.PlotLineOrBand = f, t2.Point = y, t2.Pointer = b, t2.Series = C, t2.StackItem = M, t2.SVGElement = h, t2.SVGRenderer = l, t2.Templating = n, t2.Tick = m, t2.Time = j, t2.Tooltip = x, t2.Color = B, t2.color = B.parse, c.compose(l), d.compose(h), b.compose(k), v.compose(k), t2.defaultOptions = i2.defaultOptions, t2.getOptions = i2.getOptions, t2.time = i2.defaultTime, t2.setOptions = i2.setOptions, t2.dateFormat = n.dateFormat, t2.format = n.format, t2.numberFormat = n.numberFormat, e2.extend(t2, e2), t2.distribute = a.distribute, t2.seriesType = w.seriesType, A.compose(T), E.compose(C, P, h, l), O.compose(C), u.compose(p), g.compose(p), D.compose(k), L.compose(P), f.compose(p), I.compose(k), S.compose(p, k, C), x.compose(b), t2;
      }), e["masters/highcharts.src.js"]._modules = e, e["masters/highcharts.src.js"];
    });
  }
});
export default require_highcharts();
//# sourceMappingURL=highcharts.js.map
