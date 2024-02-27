function Z1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const a in r)
        if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(r, a);
          i &&
            Object.defineProperty(
              e,
              a,
              i.get ? i : { enumerable: !0, get: () => r[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
  new MutationObserver((a) => {
    for (const i of a)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(a) {
    const i = {};
    return (
      a.integrity && (i.integrity = a.integrity),
      a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(a) {
    if (a.ep) return;
    a.ep = !0;
    const i = n(a);
    fetch(a.href, i);
  }
})();
function Go(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _d = { exports: {} },
  ns = {},
  Id = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja = Symbol.for("react.element"),
  J1 = Symbol.for("react.portal"),
  eh = Symbol.for("react.fragment"),
  th = Symbol.for("react.strict_mode"),
  nh = Symbol.for("react.profiler"),
  rh = Symbol.for("react.provider"),
  ah = Symbol.for("react.context"),
  ih = Symbol.for("react.forward_ref"),
  sh = Symbol.for("react.suspense"),
  lh = Symbol.for("react.memo"),
  oh = Symbol.for("react.lazy"),
  Nc = Symbol.iterator;
function uh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nc && e[Nc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ad = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ld = Object.assign,
  Od = {};
function br(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Od),
    (this.updater = n || Ad);
}
br.prototype.isReactComponent = {};
br.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
br.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Md() {}
Md.prototype = br.prototype;
function Xo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Od),
    (this.updater = n || Ad);
}
var qo = (Xo.prototype = new Md());
qo.constructor = Xo;
Ld(qo, br.prototype);
qo.isPureReactComponent = !0;
var kc = Array.isArray,
  Rd = Object.prototype.hasOwnProperty,
  Zo = { current: null },
  zd = { key: !0, ref: !0, __self: !0, __source: !0 };
function $d(e, t, n) {
  var r,
    a = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Rd.call(t, r) && !zd.hasOwnProperty(r) && (a[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) a.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    a.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) a[r] === void 0 && (a[r] = o[r]);
  return {
    $$typeof: ja,
    type: e,
    key: i,
    ref: l,
    props: a,
    _owner: Zo.current,
  };
}
function ch(e, t) {
  return {
    $$typeof: ja,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Jo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ja;
}
function fh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sc = /\/+/g;
function Qs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fh("" + e.key)
    : t.toString(36);
}
function li(e, t, n, r, a) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ja:
          case J1:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (a = a(l)),
      (e = r === "" ? "." + Qs(l, 0) : r),
      kc(a)
        ? ((n = ""),
          e != null && (n = e.replace(Sc, "$&/") + "/"),
          li(a, t, n, "", function (c) {
            return c;
          }))
        : a != null &&
          (Jo(a) &&
            (a = ch(
              a,
              n +
                (!a.key || (l && l.key === a.key)
                  ? ""
                  : ("" + a.key).replace(Sc, "$&/") + "/") +
                e
            )),
          t.push(a)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), kc(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var u = r + Qs(i, o);
      l += li(i, t, n, u, a);
    }
  else if (((u = uh(e)), typeof u == "function"))
    for (e = u.call(e), o = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Qs(i, o++)), (l += li(i, t, n, u, a));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Ia(e, t, n) {
  if (e == null) return e;
  var r = [],
    a = 0;
  return (
    li(e, r, "", "", function (i) {
      return t.call(n, i, a++);
    }),
    r
  );
}
function dh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  oi = { transition: null },
  mh = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: oi,
    ReactCurrentOwner: Zo,
  };
U.Children = {
  map: Ia,
  forEach: function (e, t, n) {
    Ia(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ia(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ia(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Jo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = br;
U.Fragment = eh;
U.Profiler = nh;
U.PureComponent = Xo;
U.StrictMode = th;
U.Suspense = sh;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mh;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ld({}, e.props),
    a = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Zo.current)),
      t.key !== void 0 && (a = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (u in t)
      Rd.call(t, u) &&
        !zd.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: ja, type: e.type, key: a, ref: i, props: r, _owner: l };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: ah,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rh, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = $d;
U.createFactory = function (e) {
  var t = $d.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: ih, render: e };
};
U.isValidElement = Jo;
U.lazy = function (e) {
  return { $$typeof: oh, _payload: { _status: -1, _result: e }, _init: dh };
};
U.memo = function (e, t) {
  return { $$typeof: lh, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = oi.transition;
  oi.transition = {};
  try {
    e();
  } finally {
    oi.transition = t;
  }
};
U.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
U.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Me.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
U.useId = function () {
  return Me.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Me.current.useRef(e);
};
U.useState = function (e) {
  return Me.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Me.current.useTransition();
};
U.version = "18.2.0";
Id.exports = U;
var C = Id.exports;
const F = Go(C),
  Ec = Z1({ __proto__: null, default: F }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ph = C,
  hh = Symbol.for("react.element"),
  vh = Symbol.for("react.fragment"),
  gh = Object.prototype.hasOwnProperty,
  xh = ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fd(e, t, n) {
  var r,
    a = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) gh.call(t, r) && !yh.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) a[r] === void 0 && (a[r] = t[r]);
  return {
    $$typeof: hh,
    type: e,
    key: i,
    ref: l,
    props: a,
    _owner: xh.current,
  };
}
ns.Fragment = vh;
ns.jsx = Fd;
ns.jsxs = Fd;
_d.exports = ns;
var s = _d.exports,
  Ol = {},
  Dd = { exports: {} },
  Xe = {},
  Ud = { exports: {} },
  Hd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, _) {
    var E = I.length;
    I.push(_);
    e: for (; 0 < E; ) {
      var R = (E - 1) >>> 1,
        O = I[R];
      if (0 < a(O, _)) (I[R] = _), (I[E] = O), (E = R);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var _ = I[0],
      E = I.pop();
    if (E !== _) {
      I[0] = E;
      e: for (var R = 0, O = I.length, V = O >>> 1; R < V; ) {
        var B = 2 * (R + 1) - 1,
          ye = I[B],
          ce = B + 1,
          we = I[ce];
        if (0 > a(ye, E))
          ce < O && 0 > a(we, ye)
            ? ((I[R] = we), (I[ce] = E), (R = ce))
            : ((I[R] = ye), (I[B] = E), (R = B));
        else if (ce < O && 0 > a(we, E)) (I[R] = we), (I[ce] = E), (R = ce);
        else break e;
      }
    }
    return _;
  }
  function a(I, _) {
    var E = I.sortIndex - _.sortIndex;
    return E !== 0 ? E : I.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      o = l.now();
    e.unstable_now = function () {
      return l.now() - o;
    };
  }
  var u = [],
    c = [],
    f = 1,
    d = null,
    p = 3,
    g = !1,
    x = !1,
    y = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(I) {
    for (var _ = n(c); _ !== null; ) {
      if (_.callback === null) r(c);
      else if (_.startTime <= I)
        r(c), (_.sortIndex = _.expirationTime), t(u, _);
      else break;
      _ = n(c);
    }
  }
  function w(I) {
    if (((y = !1), h(I), !x))
      if (n(u) !== null) (x = !0), et(b);
      else {
        var _ = n(c);
        _ !== null && Be(w, _.startTime - I);
      }
  }
  function b(I, _) {
    (x = !1), y && ((y = !1), v(T), (T = -1)), (g = !0);
    var E = p;
    try {
      for (
        h(_), d = n(u);
        d !== null && (!(d.expirationTime > _) || (I && !H()));

      ) {
        var R = d.callback;
        if (typeof R == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var O = R(d.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof O == "function" ? (d.callback = O) : d === n(u) && r(u),
            h(_);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var V = !0;
      else {
        var B = n(c);
        B !== null && Be(w, B.startTime - _), (V = !1);
      }
      return V;
    } finally {
      (d = null), (p = E), (g = !1);
    }
  }
  var S = !1,
    k = null,
    T = -1,
    $ = 5,
    M = -1;
  function H() {
    return !(e.unstable_now() - M < $);
  }
  function le() {
    if (k !== null) {
      var I = e.unstable_now();
      M = I;
      var _ = !0;
      try {
        _ = k(!0, I);
      } finally {
        _ ? xe() : ((S = !1), (k = null));
      }
    } else S = !1;
  }
  var xe;
  if (typeof m == "function")
    xe = function () {
      m(le);
    };
  else if (typeof MessageChannel < "u") {
    var pe = new MessageChannel(),
      oe = pe.port2;
    (pe.port1.onmessage = le),
      (xe = function () {
        oe.postMessage(null);
      });
  } else
    xe = function () {
      N(le, 0);
    };
  function et(I) {
    (k = I), S || ((S = !0), xe());
  }
  function Be(I, _) {
    T = N(function () {
      I(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), et(b));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (I) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = p;
      }
      var E = p;
      p = _;
      try {
        return I();
      } finally {
        p = E;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, _) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var E = p;
      p = I;
      try {
        return _();
      } finally {
        p = E;
      }
    }),
    (e.unstable_scheduleCallback = function (I, _, E) {
      var R = e.unstable_now();
      switch (
        (typeof E == "object" && E !== null
          ? ((E = E.delay), (E = typeof E == "number" && 0 < E ? R + E : R))
          : (E = R),
        I)
      ) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return (
        (O = E + O),
        (I = {
          id: f++,
          callback: _,
          priorityLevel: I,
          startTime: E,
          expirationTime: O,
          sortIndex: -1,
        }),
        E > R
          ? ((I.sortIndex = E),
            t(c, I),
            n(u) === null &&
              I === n(c) &&
              (y ? (v(T), (T = -1)) : (y = !0), Be(w, E - R)))
          : ((I.sortIndex = O), t(u, I), x || g || ((x = !0), et(b))),
        I
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (I) {
      var _ = p;
      return function () {
        var E = p;
        p = _;
        try {
          return I.apply(this, arguments);
        } finally {
          p = E;
        }
      };
    });
})(Hd);
Ud.exports = Hd;
var wh = Ud.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bd = C,
  Ge = wh;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wd = new Set(),
  ea = {};
function Fn(e, t) {
  dr(e, t), dr(e + "Capture", t);
}
function dr(e, t) {
  for (ea[e] = t, e = 0; e < t.length; e++) Wd.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ml = Object.prototype.hasOwnProperty,
  bh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cc = {},
  Pc = {};
function jh(e) {
  return Ml.call(Pc, e)
    ? !0
    : Ml.call(Cc, e)
    ? !1
    : bh.test(e)
    ? (Pc[e] = !0)
    : ((Cc[e] = !0), !1);
}
function Nh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kh(e, t, n, r) {
  if (t === null || typeof t > "u" || Nh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Re(e, t, n, r, a, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Re(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Re(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Re(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Re(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Re(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Re(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var eu = /[\-:]([a-z])/g;
function tu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clipRule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fillRule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(eu, tu);
    Se[t] = new Re(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(eu, tu);
    Se[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(eu, tu);
  Se[t] = new Re(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Re(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nu(e, t, n, r) {
  var a = Se.hasOwnProperty(t) ? Se[t] : null;
  (a !== null
    ? a.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (kh(t, n, a, r) && (n = null),
    r || a === null
      ? jh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : a.mustUseProperty
      ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : "") : n)
      : ((t = a.attributeName),
        (r = a.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((a = a.type),
            (n = a === 3 || (a === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Aa = Symbol.for("react.element"),
  Wn = Symbol.for("react.portal"),
  Vn = Symbol.for("react.fragment"),
  ru = Symbol.for("react.strict_mode"),
  Rl = Symbol.for("react.profiler"),
  Vd = Symbol.for("react.provider"),
  Yd = Symbol.for("react.context"),
  au = Symbol.for("react.forward_ref"),
  zl = Symbol.for("react.suspense"),
  $l = Symbol.for("react.suspense_list"),
  iu = Symbol.for("react.memo"),
  Yt = Symbol.for("react.lazy"),
  Qd = Symbol.for("react.offscreen"),
  Tc = Symbol.iterator;
function Pr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tc && e[Tc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  Ks;
function zr(e) {
  if (Ks === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ks = (t && t[1]) || "";
    }
  return (
    `
` +
    Ks +
    e
  );
}
var Gs = !1;
function Xs(e, t) {
  if (!e || Gs) return "";
  Gs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var a = c.stack.split(`
`),
          i = r.stack.split(`
`),
          l = a.length - 1,
          o = i.length - 1;
        1 <= l && 0 <= o && a[l] !== i[o];

      )
        o--;
      for (; 1 <= l && 0 <= o; l--, o--)
        if (a[l] !== i[o]) {
          if (l !== 1 || o !== 1)
            do
              if ((l--, o--, 0 > o || a[l] !== i[o])) {
                var u =
                  `
` + a[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= o);
          break;
        }
    }
  } finally {
    (Gs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zr(e) : "";
}
function Sh(e) {
  switch (e.tag) {
    case 5:
      return zr(e.type);
    case 16:
      return zr("Lazy");
    case 13:
      return zr("Suspense");
    case 19:
      return zr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xs(e.type, !1)), e;
    case 11:
      return (e = Xs(e.type.render, !1)), e;
    case 1:
      return (e = Xs(e.type, !0)), e;
    default:
      return "";
  }
}
function Fl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vn:
      return "Fragment";
    case Wn:
      return "Portal";
    case Rl:
      return "Profiler";
    case ru:
      return "StrictMode";
    case zl:
      return "Suspense";
    case $l:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yd:
        return (e.displayName || "Context") + ".Consumer";
      case Vd:
        return (e._context.displayName || "Context") + ".Provider";
      case au:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case iu:
        return (
          (t = e.displayName || null), t !== null ? t : Fl(e.type) || "Memo"
        );
      case Yt:
        (t = e._payload), (e = e._init);
        try {
          return Fl(e(t));
        } catch {}
    }
  return null;
}
function Eh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fl(t);
    case 8:
      return t === ru ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function cn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Kd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ch(e) {
  var t = Kd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var a = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function La(e) {
  e._valueTracker || (e._valueTracker = Ch(e));
}
function Gd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Kd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ni(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Dl(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _c(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xd(e, t) {
  (t = t.checked), t != null && nu(e, "checked", t, !1);
}
function Ul(e, t) {
  Xd(e, t);
  var n = cn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Hl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hl(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ic(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Hl(e, t, n) {
  (t !== "number" || Ni(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $r = Array.isArray;
function ir(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        (e[a].selected = !0), r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ac(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if ($r(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: cn(n) };
}
function qd(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Lc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Oa,
  Jd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, a);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Oa = Oa || document.createElement("div"),
          Oa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Oa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ta(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ph = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hr).forEach(function (e) {
  Ph.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hr[t] = Hr[e]);
  });
});
function em(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Hr.hasOwnProperty(e) && Hr[e])
    ? ("" + t).trim()
    : t + "px";
}
function tm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        a = em(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
    }
}
var Th = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Vl(e, t) {
  if (t) {
    if (Th[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Yl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ql = null;
function su(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Kl = null,
  sr = null,
  lr = null;
function Oc(e) {
  if ((e = Sa(e))) {
    if (typeof Kl != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = ls(t)), Kl(e.stateNode, e.type, t));
  }
}
function nm(e) {
  sr ? (lr ? lr.push(e) : (lr = [e])) : (sr = e);
}
function rm() {
  if (sr) {
    var e = sr,
      t = lr;
    if (((lr = sr = null), Oc(e), t)) for (e = 0; e < t.length; e++) Oc(t[e]);
  }
}
function am(e, t) {
  return e(t);
}
function im() {}
var qs = !1;
function sm(e, t, n) {
  if (qs) return e(t, n);
  qs = !0;
  try {
    return am(e, t, n);
  } finally {
    (qs = !1), (sr !== null || lr !== null) && (im(), rm());
  }
}
function na(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ls(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Gl = !1;
if (Lt)
  try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", {
      get: function () {
        Gl = !0;
      },
    }),
      window.addEventListener("test", Tr, Tr),
      window.removeEventListener("test", Tr, Tr);
  } catch {
    Gl = !1;
  }
function _h(e, t, n, r, a, i, l, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var Br = !1,
  ki = null,
  Si = !1,
  Xl = null,
  Ih = {
    onError: function (e) {
      (Br = !0), (ki = e);
    },
  };
function Ah(e, t, n, r, a, i, l, o, u) {
  (Br = !1), (ki = null), _h.apply(Ih, arguments);
}
function Lh(e, t, n, r, a, i, l, o, u) {
  if ((Ah.apply(this, arguments), Br)) {
    if (Br) {
      var c = ki;
      (Br = !1), (ki = null);
    } else throw Error(P(198));
    Si || ((Si = !0), (Xl = c));
  }
}
function Dn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Mc(e) {
  if (Dn(e) !== e) throw Error(P(188));
}
function Oh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var a = n.return;
    if (a === null) break;
    var i = a.alternate;
    if (i === null) {
      if (((r = a.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (a.child === i.child) {
      for (i = a.child; i; ) {
        if (i === n) return Mc(a), e;
        if (i === r) return Mc(a), t;
        i = i.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = a), (r = i);
    else {
      for (var l = !1, o = a.child; o; ) {
        if (o === n) {
          (l = !0), (n = a), (r = i);
          break;
        }
        if (o === r) {
          (l = !0), (r = a), (n = i);
          break;
        }
        o = o.sibling;
      }
      if (!l) {
        for (o = i.child; o; ) {
          if (o === n) {
            (l = !0), (n = i), (r = a);
            break;
          }
          if (o === r) {
            (l = !0), (r = i), (n = a);
            break;
          }
          o = o.sibling;
        }
        if (!l) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function om(e) {
  return (e = Oh(e)), e !== null ? um(e) : null;
}
function um(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = um(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cm = Ge.unstable_scheduleCallback,
  Rc = Ge.unstable_cancelCallback,
  Mh = Ge.unstable_shouldYield,
  Rh = Ge.unstable_requestPaint,
  se = Ge.unstable_now,
  zh = Ge.unstable_getCurrentPriorityLevel,
  lu = Ge.unstable_ImmediatePriority,
  fm = Ge.unstable_UserBlockingPriority,
  Ei = Ge.unstable_NormalPriority,
  $h = Ge.unstable_LowPriority,
  dm = Ge.unstable_IdlePriority,
  rs = null,
  bt = null;
function Fh(e) {
  if (bt && typeof bt.onCommitFiberRoot == "function")
    try {
      bt.onCommitFiberRoot(rs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : Hh,
  Dh = Math.log,
  Uh = Math.LN2;
function Hh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Dh(e) / Uh) | 0)) | 0;
}
var Ma = 64,
  Ra = 4194304;
function Fr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ci(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    a = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var o = l & ~a;
    o !== 0 ? (r = Fr(o)) : ((i &= l), i !== 0 && (r = Fr(i)));
  } else (l = n & ~a), l !== 0 ? (r = Fr(l)) : i !== 0 && (r = Fr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & a) &&
    ((a = r & -r), (i = t & -t), a >= i || (a === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (a = 1 << n), (r |= e[n]), (t &= ~a);
  return r;
}
function Bh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Wh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      a = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - pt(i),
      o = 1 << l,
      u = a[l];
    u === -1
      ? (!(o & n) || o & r) && (a[l] = Bh(o, t))
      : u <= t && (e.expiredLanes |= o),
      (i &= ~o);
  }
}
function ql(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function mm() {
  var e = Ma;
  return (Ma <<= 1), !(Ma & 4194240) && (Ma = 64), e;
}
function Zs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Na(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function Vh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - pt(n),
      i = 1 << a;
    (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
  }
}
function ou(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      a = 1 << r;
    (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
  }
}
var Y = 0;
function pm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hm,
  uu,
  vm,
  gm,
  xm,
  Zl = !1,
  za = [],
  en = null,
  tn = null,
  nn = null,
  ra = new Map(),
  aa = new Map(),
  Kt = [],
  Yh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function zc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      ra.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      aa.delete(t.pointerId);
  }
}
function _r(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [a],
      }),
      t !== null && ((t = Sa(t)), t !== null && uu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      a !== null && t.indexOf(a) === -1 && t.push(a),
      e);
}
function Qh(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return (en = _r(en, e, t, n, r, a)), !0;
    case "dragenter":
      return (tn = _r(tn, e, t, n, r, a)), !0;
    case "mouseover":
      return (nn = _r(nn, e, t, n, r, a)), !0;
    case "pointerover":
      var i = a.pointerId;
      return ra.set(i, _r(ra.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return (
        (i = a.pointerId), aa.set(i, _r(aa.get(i) || null, e, t, n, r, a)), !0
      );
  }
  return !1;
}
function ym(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lm(n)), t !== null)) {
          (e.blockedOn = t),
            xm(e.priority, function () {
              vm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ui(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ql = r), n.target.dispatchEvent(r), (Ql = null);
    } else return (t = Sa(n)), t !== null && uu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $c(e, t, n) {
  ui(e) && n.delete(t);
}
function Kh() {
  (Zl = !1),
    en !== null && ui(en) && (en = null),
    tn !== null && ui(tn) && (tn = null),
    nn !== null && ui(nn) && (nn = null),
    ra.forEach($c),
    aa.forEach($c);
}
function Ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zl ||
      ((Zl = !0),
      Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Kh)));
}
function ia(e) {
  function t(a) {
    return Ir(a, e);
  }
  if (0 < za.length) {
    Ir(za[0], e);
    for (var n = 1; n < za.length; n++) {
      var r = za[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    en !== null && Ir(en, e),
      tn !== null && Ir(tn, e),
      nn !== null && Ir(nn, e),
      ra.forEach(t),
      aa.forEach(t),
      n = 0;
    n < Kt.length;
    n++
  )
    (r = Kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && ((n = Kt[0]), n.blockedOn === null); )
    ym(n), n.blockedOn === null && Kt.shift();
}
var or = Ut.ReactCurrentBatchConfig,
  Pi = !0;
function Gh(e, t, n, r) {
  var a = Y,
    i = or.transition;
  or.transition = null;
  try {
    (Y = 1), cu(e, t, n, r);
  } finally {
    (Y = a), (or.transition = i);
  }
}
function Xh(e, t, n, r) {
  var a = Y,
    i = or.transition;
  or.transition = null;
  try {
    (Y = 4), cu(e, t, n, r);
  } finally {
    (Y = a), (or.transition = i);
  }
}
function cu(e, t, n, r) {
  if (Pi) {
    var a = Jl(e, t, n, r);
    if (a === null) ol(e, t, r, Ti, n), zc(e, r);
    else if (Qh(a, e, t, n, r)) r.stopPropagation();
    else if ((zc(e, r), t & 4 && -1 < Yh.indexOf(e))) {
      for (; a !== null; ) {
        var i = Sa(a);
        if (
          (i !== null && hm(i),
          (i = Jl(e, t, n, r)),
          i === null && ol(e, t, r, Ti, n),
          i === a)
        )
          break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else ol(e, t, r, null, n);
  }
}
var Ti = null;
function Jl(e, t, n, r) {
  if (((Ti = null), (e = su(r)), (e = kn(e)), e !== null))
    if (((t = Dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ti = e), null;
}
function wm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zh()) {
        case lu:
          return 1;
        case fm:
          return 4;
        case Ei:
        case $h:
          return 16;
        case dm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  fu = null,
  ci = null;
function bm() {
  if (ci) return ci;
  var e,
    t = fu,
    n = t.length,
    r,
    a = "value" in Xt ? Xt.value : Xt.textContent,
    i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === a[i - r]; r++);
  return (ci = a.slice(e, 1 < r ? 1 - r : void 0));
}
function fi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $a() {
  return !0;
}
function Fc() {
  return !1;
}
function qe(e) {
  function t(n, r, a, i, l) {
    (this._reactName = n),
      (this._targetInst = a),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? $a
        : Fc),
      (this.isPropagationStopped = Fc),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = $a));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = $a));
      },
      persist: function () {},
      isPersistent: $a,
    }),
    t
  );
}
var jr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  du = qe(jr),
  ka = ne({}, jr, { view: 0, detail: 0 }),
  qh = qe(ka),
  Js,
  el,
  Ar,
  as = ne({}, ka, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ar &&
            (Ar && e.type === "mousemove"
              ? ((Js = e.screenX - Ar.screenX), (el = e.screenY - Ar.screenY))
              : (el = Js = 0),
            (Ar = e)),
          Js);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : el;
    },
  }),
  Dc = qe(as),
  Zh = ne({}, as, { dataTransfer: 0 }),
  Jh = qe(Zh),
  e0 = ne({}, ka, { relatedTarget: 0 }),
  tl = qe(e0),
  t0 = ne({}, jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  n0 = qe(t0),
  r0 = ne({}, jr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  a0 = qe(r0),
  i0 = ne({}, jr, { data: 0 }),
  Uc = qe(i0),
  s0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  l0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  o0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function u0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = o0[e]) ? !!t[e] : !1;
}
function mu() {
  return u0;
}
var c0 = ne({}, ka, {
    key: function (e) {
      if (e.key) {
        var t = s0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? l0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mu,
    charCode: function (e) {
      return e.type === "keypress" ? fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  f0 = qe(c0),
  d0 = ne({}, as, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Hc = qe(d0),
  m0 = ne({}, ka, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mu,
  }),
  p0 = qe(m0),
  h0 = ne({}, jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  v0 = qe(h0),
  g0 = ne({}, as, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  x0 = qe(g0),
  y0 = [9, 13, 27, 32],
  pu = Lt && "CompositionEvent" in window,
  Wr = null;
Lt && "documentMode" in document && (Wr = document.documentMode);
var w0 = Lt && "TextEvent" in window && !Wr,
  jm = Lt && (!pu || (Wr && 8 < Wr && 11 >= Wr)),
  Bc = " ",
  Wc = !1;
function Nm(e, t) {
  switch (e) {
    case "keyup":
      return y0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function km(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yn = !1;
function b0(e, t) {
  switch (e) {
    case "compositionend":
      return km(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wc = !0), Bc);
    case "textInput":
      return (e = t.data), e === Bc && Wc ? null : e;
    default:
      return null;
  }
}
function j0(e, t) {
  if (Yn)
    return e === "compositionend" || (!pu && Nm(e, t))
      ? ((e = bm()), (ci = fu = Xt = null), (Yn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return jm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var N0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!N0[e.type] : t === "textarea";
}
function Sm(e, t, n, r) {
  nm(r),
    (t = _i(t, "onChange")),
    0 < t.length &&
      ((n = new du("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vr = null,
  sa = null;
function k0(e) {
  Rm(e, 0);
}
function is(e) {
  var t = Gn(e);
  if (Gd(t)) return e;
}
function S0(e, t) {
  if (e === "change") return t;
}
var Em = !1;
if (Lt) {
  var nl;
  if (Lt) {
    var rl = "oninput" in document;
    if (!rl) {
      var Yc = document.createElement("div");
      Yc.setAttribute("oninput", "return;"),
        (rl = typeof Yc.oninput == "function");
    }
    nl = rl;
  } else nl = !1;
  Em = nl && (!document.documentMode || 9 < document.documentMode);
}
function Qc() {
  Vr && (Vr.detachEvent("onpropertychange", Cm), (sa = Vr = null));
}
function Cm(e) {
  if (e.propertyName === "value" && is(sa)) {
    var t = [];
    Sm(t, sa, e, su(e)), sm(k0, t);
  }
}
function E0(e, t, n) {
  e === "focusin"
    ? (Qc(), (Vr = t), (sa = n), Vr.attachEvent("onpropertychange", Cm))
    : e === "focusout" && Qc();
}
function C0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return is(sa);
}
function P0(e, t) {
  if (e === "click") return is(t);
}
function T0(e, t) {
  if (e === "input" || e === "change") return is(t);
}
function _0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : _0;
function la(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Ml.call(t, a) || !vt(e[a], t[a])) return !1;
  }
  return !0;
}
function Kc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gc(e, t) {
  var n = Kc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Kc(n);
  }
}
function Pm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Pm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Tm() {
  for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ni(e.document);
  }
  return t;
}
function hu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function I0(e) {
  var t = Tm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && hu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var a = n.textContent.length,
          i = Math.min(r.start, a);
        (r = r.end === void 0 ? i : Math.min(r.end, a)),
          !e.extend && i > r && ((a = r), (r = i), (i = a)),
          (a = Gc(n, i));
        var l = Gc(n, r);
        a &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(a.node, a.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var A0 = Lt && "documentMode" in document && 11 >= document.documentMode,
  Qn = null,
  eo = null,
  Yr = null,
  to = !1;
function Xc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  to ||
    Qn == null ||
    Qn !== Ni(r) ||
    ((r = Qn),
    "selectionStart" in r && hu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yr && la(Yr, r)) ||
      ((Yr = r),
      (r = _i(eo, "onSelect")),
      0 < r.length &&
        ((t = new du("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qn))));
}
function Fa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kn = {
    animationend: Fa("Animation", "AnimationEnd"),
    animationiteration: Fa("Animation", "AnimationIteration"),
    animationstart: Fa("Animation", "AnimationStart"),
    transitionend: Fa("Transition", "TransitionEnd"),
  },
  al = {},
  _m = {};
Lt &&
  ((_m = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kn.animationend.animation,
    delete Kn.animationiteration.animation,
    delete Kn.animationstart.animation),
  "TransitionEvent" in window || delete Kn.transitionend.transition);
function ss(e) {
  if (al[e]) return al[e];
  if (!Kn[e]) return e;
  var t = Kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _m) return (al[e] = t[n]);
  return e;
}
var Im = ss("animationend"),
  Am = ss("animationiteration"),
  Lm = ss("animationstart"),
  Om = ss("transitionend"),
  Mm = new Map(),
  qc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vn(e, t) {
  Mm.set(e, t), Fn(t, [e]);
}
for (var il = 0; il < qc.length; il++) {
  var sl = qc[il],
    L0 = sl.toLowerCase(),
    O0 = sl[0].toUpperCase() + sl.slice(1);
  vn(L0, "on" + O0);
}
vn(Im, "onAnimationEnd");
vn(Am, "onAnimationIteration");
vn(Lm, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(Om, "onTransitionEnd");
dr("onMouseEnter", ["mouseout", "mouseover"]);
dr("onMouseLeave", ["mouseout", "mouseover"]);
dr("onPointerEnter", ["pointerout", "pointerover"]);
dr("onPointerLeave", ["pointerout", "pointerover"]);
Fn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Fn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Fn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Fn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  M0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function Zc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lh(r, t, void 0, e), (e.currentTarget = null);
}
function Rm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var o = r[l],
            u = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), u !== i && a.isPropagationStopped())) break e;
          Zc(a, o, c), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((o = r[l]),
            (u = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            u !== i && a.isPropagationStopped())
          )
            break e;
          Zc(a, o, c), (i = u);
        }
    }
  }
  if (Si) throw ((e = Xl), (Si = !1), (Xl = null), e);
}
function G(e, t) {
  var n = t[so];
  n === void 0 && (n = t[so] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zm(t, e, 2, !1), n.add(r));
}
function ll(e, t, n) {
  var r = 0;
  t && (r |= 4), zm(n, e, r, t);
}
var Da = "_reactListening" + Math.random().toString(36).slice(2);
function oa(e) {
  if (!e[Da]) {
    (e[Da] = !0),
      Wd.forEach(function (n) {
        n !== "selectionchange" && (M0.has(n) || ll(n, !1, e), ll(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Da] || ((t[Da] = !0), ll("selectionchange", !1, t));
  }
}
function zm(e, t, n, r) {
  switch (wm(t)) {
    case 1:
      var a = Gh;
      break;
    case 4:
      a = Xh;
      break;
    default:
      a = cu;
  }
  (n = a.bind(null, t, n, e)),
    (a = void 0),
    !Gl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (a = !0),
    r
      ? a !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : a !== void 0
      ? e.addEventListener(t, n, { passive: a })
      : e.addEventListener(t, n, !1);
}
function ol(e, t, n, r, a) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var o = r.stateNode.containerInfo;
        if (o === a || (o.nodeType === 8 && o.parentNode === a)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === a || (u.nodeType === 8 && u.parentNode === a))
            )
              return;
            l = l.return;
          }
        for (; o !== null; ) {
          if (((l = kn(o)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  sm(function () {
    var c = i,
      f = su(n),
      d = [];
    e: {
      var p = Mm.get(e);
      if (p !== void 0) {
        var g = du,
          x = e;
        switch (e) {
          case "keypress":
            if (fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = f0;
            break;
          case "focusin":
            (x = "focus"), (g = tl);
            break;
          case "focusout":
            (x = "blur"), (g = tl);
            break;
          case "beforeblur":
          case "afterblur":
            g = tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Dc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Jh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = p0;
            break;
          case Im:
          case Am:
          case Lm:
            g = n0;
            break;
          case Om:
            g = v0;
            break;
          case "scroll":
            g = qh;
            break;
          case "wheel":
            g = x0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = a0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Hc;
        }
        var y = (t & 4) !== 0,
          N = !y && e === "scroll",
          v = y ? (p !== null ? p + "Capture" : null) : p;
        y = [];
        for (var m = c, h; m !== null; ) {
          h = m;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              v !== null && ((w = na(m, v)), w != null && y.push(ua(m, w, h)))),
            N)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((p = new g(p, x, null, n, f)), d.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Ql &&
            (x = n.relatedTarget || n.fromElement) &&
            (kn(x) || x[Ot]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((x = n.relatedTarget || n.toElement),
              (g = c),
              (x = x ? kn(x) : null),
              x !== null &&
                ((N = Dn(x)), x !== N || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = c)),
          g !== x)
        ) {
          if (
            ((y = Dc),
            (w = "onMouseLeave"),
            (v = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Hc),
              (w = "onPointerLeave"),
              (v = "onPointerEnter"),
              (m = "pointer")),
            (N = g == null ? p : Gn(g)),
            (h = x == null ? p : Gn(x)),
            (p = new y(w, m + "leave", g, n, f)),
            (p.target = N),
            (p.relatedTarget = h),
            (w = null),
            kn(f) === c &&
              ((y = new y(v, m + "enter", x, n, f)),
              (y.target = h),
              (y.relatedTarget = N),
              (w = y)),
            (N = w),
            g && x)
          )
            t: {
              for (y = g, v = x, m = 0, h = y; h; h = Bn(h)) m++;
              for (h = 0, w = v; w; w = Bn(w)) h++;
              for (; 0 < m - h; ) (y = Bn(y)), m--;
              for (; 0 < h - m; ) (v = Bn(v)), h--;
              for (; m--; ) {
                if (y === v || (v !== null && y === v.alternate)) break t;
                (y = Bn(y)), (v = Bn(v));
              }
              y = null;
            }
          else y = null;
          g !== null && Jc(d, p, g, y, !1),
            x !== null && N !== null && Jc(d, N, x, y, !0);
        }
      }
      e: {
        if (
          ((p = c ? Gn(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var b = S0;
        else if (Vc(p))
          if (Em) b = T0;
          else {
            b = C0;
            var S = E0;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (b = P0);
        if (b && (b = b(e, c))) {
          Sm(d, b, n, f);
          break e;
        }
        S && S(e, p, c),
          e === "focusout" &&
            (S = p._wrapperState) &&
            S.controlled &&
            p.type === "number" &&
            Hl(p, "number", p.value);
      }
      switch (((S = c ? Gn(c) : window), e)) {
        case "focusin":
          (Vc(S) || S.contentEditable === "true") &&
            ((Qn = S), (eo = c), (Yr = null));
          break;
        case "focusout":
          Yr = eo = Qn = null;
          break;
        case "mousedown":
          to = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (to = !1), Xc(d, n, f);
          break;
        case "selectionchange":
          if (A0) break;
        case "keydown":
        case "keyup":
          Xc(d, n, f);
      }
      var k;
      if (pu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Yn
          ? Nm(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (jm &&
          n.locale !== "ko" &&
          (Yn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Yn && (k = bm())
            : ((Xt = f),
              (fu = "value" in Xt ? Xt.value : Xt.textContent),
              (Yn = !0))),
        (S = _i(c, T)),
        0 < S.length &&
          ((T = new Uc(T, e, null, n, f)),
          d.push({ event: T, listeners: S }),
          k ? (T.data = k) : ((k = km(n)), k !== null && (T.data = k)))),
        (k = w0 ? b0(e, n) : j0(e, n)) &&
          ((c = _i(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new Uc("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: c }),
            (f.data = k)));
    }
    Rm(d, t);
  });
}
function ua(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _i(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e,
      i = a.stateNode;
    a.tag === 5 &&
      i !== null &&
      ((a = i),
      (i = na(e, n)),
      i != null && r.unshift(ua(e, i, a)),
      (i = na(e, t)),
      i != null && r.push(ua(e, i, a))),
      (e = e.return);
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jc(e, t, n, r, a) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var o = n,
      u = o.alternate,
      c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      a
        ? ((u = na(n, i)), u != null && l.unshift(ua(n, u, o)))
        : a || ((u = na(n, i)), u != null && l.push(ua(n, u, o)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var R0 = /\r\n?/g,
  z0 = /\u0000|\uFFFD/g;
function ef(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      R0,
      `
`
    )
    .replace(z0, "");
}
function Ua(e, t, n) {
  if (((t = ef(t)), ef(e) !== t && n)) throw Error(P(425));
}
function Ii() {}
var no = null,
  ro = null;
function ao(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var io = typeof setTimeout == "function" ? setTimeout : void 0,
  $0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  tf = typeof Promise == "function" ? Promise : void 0,
  F0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof tf < "u"
      ? function (e) {
          return tf.resolve(null).then(e).catch(D0);
        }
      : io;
function D0(e) {
  setTimeout(function () {
    throw e;
  });
}
function ul(e, t) {
  var n = t,
    r = 0;
  do {
    var a = n.nextSibling;
    if ((e.removeChild(n), a && a.nodeType === 8))
      if (((n = a.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(a), ia(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = a;
  } while (n);
  ia(t);
}
function rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Nr = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + Nr,
  ca = "__reactProps$" + Nr,
  Ot = "__reactContainer$" + Nr,
  so = "__reactEvents$" + Nr,
  U0 = "__reactListeners$" + Nr,
  H0 = "__reactHandles$" + Nr;
function kn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nf(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = nf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Sa(e) {
  return (
    (e = e[yt] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function ls(e) {
  return e[ca] || null;
}
var lo = [],
  Xn = -1;
function gn(e) {
  return { current: e };
}
function q(e) {
  0 > Xn || ((e.current = lo[Xn]), (lo[Xn] = null), Xn--);
}
function K(e, t) {
  Xn++, (lo[Xn] = e.current), (e.current = t);
}
var fn = {},
  _e = gn(fn),
  De = gn(!1),
  An = fn;
function mr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    i;
  for (i in n) a[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function Ai() {
  q(De), q(_e);
}
function rf(e, t, n) {
  if (_e.current !== fn) throw Error(P(168));
  K(_e, t), K(De, n);
}
function $m(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(P(108, Eh(e) || "Unknown", a));
  return ne({}, n, r);
}
function Li(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn),
    (An = _e.current),
    K(_e, e),
    K(De, De.current),
    !0
  );
}
function af(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = $m(e, t, An)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(De),
      q(_e),
      K(_e, e))
    : q(De),
    K(De, n);
}
var Et = null,
  os = !1,
  cl = !1;
function Fm(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function B0(e) {
  (os = !0), Fm(e);
}
function xn() {
  if (!cl && Et !== null) {
    cl = !0;
    var e = 0,
      t = Y;
    try {
      var n = Et;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Et = null), (os = !1);
    } catch (a) {
      throw (Et !== null && (Et = Et.slice(e + 1)), cm(lu, xn), a);
    } finally {
      (Y = t), (cl = !1);
    }
  }
  return null;
}
var qn = [],
  Zn = 0,
  Oi = null,
  Mi = 0,
  tt = [],
  nt = 0,
  Ln = null,
  Ct = 1,
  Pt = "";
function jn(e, t) {
  (qn[Zn++] = Mi), (qn[Zn++] = Oi), (Oi = e), (Mi = t);
}
function Dm(e, t, n) {
  (tt[nt++] = Ct), (tt[nt++] = Pt), (tt[nt++] = Ln), (Ln = e);
  var r = Ct;
  e = Pt;
  var a = 32 - pt(r) - 1;
  (r &= ~(1 << a)), (n += 1);
  var i = 32 - pt(t) + a;
  if (30 < i) {
    var l = a - (a % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (a -= l),
      (Ct = (1 << (32 - pt(t) + a)) | (n << a) | r),
      (Pt = i + e);
  } else (Ct = (1 << i) | (n << a) | r), (Pt = e);
}
function vu(e) {
  e.return !== null && (jn(e, 1), Dm(e, 1, 0));
}
function gu(e) {
  for (; e === Oi; )
    (Oi = qn[--Zn]), (qn[Zn] = null), (Mi = qn[--Zn]), (qn[Zn] = null);
  for (; e === Ln; )
    (Ln = tt[--nt]),
      (tt[nt] = null),
      (Pt = tt[--nt]),
      (tt[nt] = null),
      (Ct = tt[--nt]),
      (tt[nt] = null);
}
var Ke = null,
  Ye = null,
  J = !1,
  ft = null;
function Um(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ke = e), (Ye = rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ln !== null ? { id: Ct, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ke = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function oo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uo(e) {
  if (J) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!sf(e, t)) {
        if (oo(e)) throw Error(P(418));
        t = rn(n.nextSibling);
        var r = Ke;
        t && sf(e, t)
          ? Um(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ke = e));
      }
    } else {
      if (oo(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Ke = e);
    }
  }
}
function lf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function Ha(e) {
  if (e !== Ke) return !1;
  if (!J) return lf(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ao(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (oo(e)) throw (Hm(), Error(P(418)));
    for (; t; ) Um(e, t), (t = rn(t.nextSibling));
  }
  if ((lf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Ke ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Hm() {
  for (var e = Ye; e; ) e = rn(e.nextSibling);
}
function pr() {
  (Ye = Ke = null), (J = !1);
}
function xu(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var W0 = Ut.ReactCurrentBatchConfig;
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ri = gn(null),
  zi = null,
  Jn = null,
  yu = null;
function wu() {
  yu = Jn = zi = null;
}
function bu(e) {
  var t = Ri.current;
  q(Ri), (e._currentValue = t);
}
function co(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ur(e, t) {
  (zi = e),
    (yu = Jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function st(e) {
  var t = e._currentValue;
  if (yu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
      if (zi === null) throw Error(P(308));
      (Jn = e), (zi.dependencies = { lanes: 0, firstContext: e });
    } else Jn = Jn.next = e;
  return t;
}
var Sn = null;
function ju(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function Bm(e, t, n, r) {
  var a = t.interleaved;
  return (
    a === null ? ((n.next = n), ju(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    Mt(e, r)
  );
}
function Mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function Nu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var a = r.pending;
    return (
      a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (r.pending = t),
      Mt(e, n)
    );
  }
  return (
    (a = r.interleaved),
    a === null ? ((t.next = t), ju(r)) : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    Mt(e, n)
  );
}
function di(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
function of(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var a = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (a = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (a = i = t) : (i = i.next = t);
    } else a = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function $i(e, t, n, r) {
  var a = e.updateQueue;
  Qt = !1;
  var i = a.firstBaseUpdate,
    l = a.lastBaseUpdate,
    o = a.shared.pending;
  if (o !== null) {
    a.shared.pending = null;
    var u = o,
      c = u.next;
    (u.next = null), l === null ? (i = c) : (l.next = c), (l = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (o = f.lastBaseUpdate),
      o !== l &&
        (o === null ? (f.firstBaseUpdate = c) : (o.next = c),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var d = a.baseState;
    (l = 0), (f = c = u = null), (o = i);
    do {
      var p = o.lane,
        g = o.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var x = e,
            y = o;
          switch (((p = t), (g = n), y.tag)) {
            case 1:
              if (((x = y.payload), typeof x == "function")) {
                d = x.call(g, d, p);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = y.payload),
                (p = typeof x == "function" ? x.call(g, d, p) : x),
                p == null)
              )
                break e;
              d = ne({}, d, p);
              break e;
            case 2:
              Qt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (p = a.effects),
          p === null ? (a.effects = [o]) : p.push(o));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          f === null ? ((c = f = g), (u = d)) : (f = f.next = g),
          (l |= p);
      if (((o = o.next), o === null)) {
        if (((o = a.shared.pending), o === null)) break;
        (p = o),
          (o = p.next),
          (p.next = null),
          (a.lastBaseUpdate = p),
          (a.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = d),
      (a.baseState = u),
      (a.firstBaseUpdate = c),
      (a.lastBaseUpdate = f),
      (t = a.shared.interleaved),
      t !== null)
    ) {
      a = t;
      do (l |= a.lane), (a = a.next);
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    (Mn |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function uf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (a !== null) {
        if (((r.callback = null), (r = n), typeof a != "function"))
          throw Error(P(191, a));
        a.call(r);
      }
    }
}
var Vm = new Bd.Component().refs;
function fo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var us = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      a = ln(e),
      i = Tt(r, a);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = an(e, i, a)),
      t !== null && (ht(t, e, a, r), di(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      a = ln(e),
      i = Tt(r, a);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = an(e, i, a)),
      t !== null && (ht(t, e, a, r), di(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = ln(e),
      a = Tt(n, r);
    (a.tag = 2),
      t != null && (a.callback = t),
      (t = an(e, a, r)),
      t !== null && (ht(t, e, r, n), di(t, e, r));
  },
};
function cf(e, t, n, r, a, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !la(n, r) || !la(a, i)
      : !0
  );
}
function Ym(e, t, n) {
  var r = !1,
    a = fn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = st(i))
      : ((a = Ue(t) ? An : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? mr(e, a) : fn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = us),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ff(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && us.enqueueReplaceState(t, t.state, null);
}
function mo(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = Vm), Nu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (a.context = st(i))
    : ((i = Ue(t) ? An : _e.current), (a.context = mr(e, i))),
    (a.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (fo(e, t, i, n), (a.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function" ||
      (typeof a.UNSAFE_componentWillMount != "function" &&
        typeof a.componentWillMount != "function") ||
      ((t = a.state),
      typeof a.componentWillMount == "function" && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == "function" &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && us.enqueueReplaceState(a, a.state, null),
      $i(e, n, a, r),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var a = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var o = a.refs;
            o === Vm && (o = a.refs = {}),
              l === null ? delete o[i] : (o[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Ba(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function df(e) {
  var t = e._init;
  return t(e._payload);
}
function Qm(e) {
  function t(v, m) {
    if (e) {
      var h = v.deletions;
      h === null ? ((v.deletions = [m]), (v.flags |= 16)) : h.push(m);
    }
  }
  function n(v, m) {
    if (!e) return null;
    for (; m !== null; ) t(v, m), (m = m.sibling);
    return null;
  }
  function r(v, m) {
    for (v = new Map(); m !== null; )
      m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
    return v;
  }
  function a(v, m) {
    return (v = on(v, m)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, m, h) {
    return (
      (v.index = h),
      e
        ? ((h = v.alternate),
          h !== null
            ? ((h = h.index), h < m ? ((v.flags |= 2), m) : h)
            : ((v.flags |= 2), m))
        : ((v.flags |= 1048576), m)
    );
  }
  function l(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function o(v, m, h, w) {
    return m === null || m.tag !== 6
      ? ((m = gl(h, v.mode, w)), (m.return = v), m)
      : ((m = a(m, h)), (m.return = v), m);
  }
  function u(v, m, h, w) {
    var b = h.type;
    return b === Vn
      ? f(v, m, h.props.children, w, h.key)
      : m !== null &&
        (m.elementType === b ||
          (typeof b == "object" &&
            b !== null &&
            b.$$typeof === Yt &&
            df(b) === m.type))
      ? ((w = a(m, h.props)), (w.ref = Lr(v, m, h)), (w.return = v), w)
      : ((w = xi(h.type, h.key, h.props, null, v.mode, w)),
        (w.ref = Lr(v, m, h)),
        (w.return = v),
        w);
  }
  function c(v, m, h, w) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== h.containerInfo ||
      m.stateNode.implementation !== h.implementation
      ? ((m = xl(h, v.mode, w)), (m.return = v), m)
      : ((m = a(m, h.children || [])), (m.return = v), m);
  }
  function f(v, m, h, w, b) {
    return m === null || m.tag !== 7
      ? ((m = _n(h, v.mode, w, b)), (m.return = v), m)
      : ((m = a(m, h)), (m.return = v), m);
  }
  function d(v, m, h) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = gl("" + m, v.mode, h)), (m.return = v), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Aa:
          return (
            (h = xi(m.type, m.key, m.props, null, v.mode, h)),
            (h.ref = Lr(v, null, m)),
            (h.return = v),
            h
          );
        case Wn:
          return (m = xl(m, v.mode, h)), (m.return = v), m;
        case Yt:
          var w = m._init;
          return d(v, w(m._payload), h);
      }
      if ($r(m) || Pr(m))
        return (m = _n(m, v.mode, h, null)), (m.return = v), m;
      Ba(v, m);
    }
    return null;
  }
  function p(v, m, h, w) {
    var b = m !== null ? m.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return b !== null ? null : o(v, m, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Aa:
          return h.key === b ? u(v, m, h, w) : null;
        case Wn:
          return h.key === b ? c(v, m, h, w) : null;
        case Yt:
          return (b = h._init), p(v, m, b(h._payload), w);
      }
      if ($r(h) || Pr(h)) return b !== null ? null : f(v, m, h, w, null);
      Ba(v, h);
    }
    return null;
  }
  function g(v, m, h, w, b) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (v = v.get(h) || null), o(m, v, "" + w, b);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Aa:
          return (v = v.get(w.key === null ? h : w.key) || null), u(m, v, w, b);
        case Wn:
          return (v = v.get(w.key === null ? h : w.key) || null), c(m, v, w, b);
        case Yt:
          var S = w._init;
          return g(v, m, h, S(w._payload), b);
      }
      if ($r(w) || Pr(w)) return (v = v.get(h) || null), f(m, v, w, b, null);
      Ba(m, w);
    }
    return null;
  }
  function x(v, m, h, w) {
    for (
      var b = null, S = null, k = m, T = (m = 0), $ = null;
      k !== null && T < h.length;
      T++
    ) {
      k.index > T ? (($ = k), (k = null)) : ($ = k.sibling);
      var M = p(v, k, h[T], w);
      if (M === null) {
        k === null && (k = $);
        break;
      }
      e && k && M.alternate === null && t(v, k),
        (m = i(M, m, T)),
        S === null ? (b = M) : (S.sibling = M),
        (S = M),
        (k = $);
    }
    if (T === h.length) return n(v, k), J && jn(v, T), b;
    if (k === null) {
      for (; T < h.length; T++)
        (k = d(v, h[T], w)),
          k !== null &&
            ((m = i(k, m, T)), S === null ? (b = k) : (S.sibling = k), (S = k));
      return J && jn(v, T), b;
    }
    for (k = r(v, k); T < h.length; T++)
      ($ = g(k, v, T, h[T], w)),
        $ !== null &&
          (e && $.alternate !== null && k.delete($.key === null ? T : $.key),
          (m = i($, m, T)),
          S === null ? (b = $) : (S.sibling = $),
          (S = $));
    return (
      e &&
        k.forEach(function (H) {
          return t(v, H);
        }),
      J && jn(v, T),
      b
    );
  }
  function y(v, m, h, w) {
    var b = Pr(h);
    if (typeof b != "function") throw Error(P(150));
    if (((h = b.call(h)), h == null)) throw Error(P(151));
    for (
      var S = (b = null), k = m, T = (m = 0), $ = null, M = h.next();
      k !== null && !M.done;
      T++, M = h.next()
    ) {
      k.index > T ? (($ = k), (k = null)) : ($ = k.sibling);
      var H = p(v, k, M.value, w);
      if (H === null) {
        k === null && (k = $);
        break;
      }
      e && k && H.alternate === null && t(v, k),
        (m = i(H, m, T)),
        S === null ? (b = H) : (S.sibling = H),
        (S = H),
        (k = $);
    }
    if (M.done) return n(v, k), J && jn(v, T), b;
    if (k === null) {
      for (; !M.done; T++, M = h.next())
        (M = d(v, M.value, w)),
          M !== null &&
            ((m = i(M, m, T)), S === null ? (b = M) : (S.sibling = M), (S = M));
      return J && jn(v, T), b;
    }
    for (k = r(v, k); !M.done; T++, M = h.next())
      (M = g(k, v, T, M.value, w)),
        M !== null &&
          (e && M.alternate !== null && k.delete(M.key === null ? T : M.key),
          (m = i(M, m, T)),
          S === null ? (b = M) : (S.sibling = M),
          (S = M));
    return (
      e &&
        k.forEach(function (le) {
          return t(v, le);
        }),
      J && jn(v, T),
      b
    );
  }
  function N(v, m, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Vn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Aa:
          e: {
            for (var b = h.key, S = m; S !== null; ) {
              if (S.key === b) {
                if (((b = h.type), b === Vn)) {
                  if (S.tag === 7) {
                    n(v, S.sibling),
                      (m = a(S, h.props.children)),
                      (m.return = v),
                      (v = m);
                    break e;
                  }
                } else if (
                  S.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Yt &&
                    df(b) === S.type)
                ) {
                  n(v, S.sibling),
                    (m = a(S, h.props)),
                    (m.ref = Lr(v, S, h)),
                    (m.return = v),
                    (v = m);
                  break e;
                }
                n(v, S);
                break;
              } else t(v, S);
              S = S.sibling;
            }
            h.type === Vn
              ? ((m = _n(h.props.children, v.mode, w, h.key)),
                (m.return = v),
                (v = m))
              : ((w = xi(h.type, h.key, h.props, null, v.mode, w)),
                (w.ref = Lr(v, m, h)),
                (w.return = v),
                (v = w));
          }
          return l(v);
        case Wn:
          e: {
            for (S = h.key; m !== null; ) {
              if (m.key === S)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === h.containerInfo &&
                  m.stateNode.implementation === h.implementation
                ) {
                  n(v, m.sibling),
                    (m = a(m, h.children || [])),
                    (m.return = v),
                    (v = m);
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else t(v, m);
              m = m.sibling;
            }
            (m = xl(h, v.mode, w)), (m.return = v), (v = m);
          }
          return l(v);
        case Yt:
          return (S = h._init), N(v, m, S(h._payload), w);
      }
      if ($r(h)) return x(v, m, h, w);
      if (Pr(h)) return y(v, m, h, w);
      Ba(v, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        m !== null && m.tag === 6
          ? (n(v, m.sibling), (m = a(m, h)), (m.return = v), (v = m))
          : (n(v, m), (m = gl(h, v.mode, w)), (m.return = v), (v = m)),
        l(v))
      : n(v, m);
  }
  return N;
}
var hr = Qm(!0),
  Km = Qm(!1),
  Ea = {},
  jt = gn(Ea),
  fa = gn(Ea),
  da = gn(Ea);
function En(e) {
  if (e === Ea) throw Error(P(174));
  return e;
}
function ku(e, t) {
  switch ((K(da, t), K(fa, e), K(jt, Ea), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wl(t, e));
  }
  q(jt), K(jt, t);
}
function vr() {
  q(jt), q(fa), q(da);
}
function Gm(e) {
  En(da.current);
  var t = En(jt.current),
    n = Wl(t, e.type);
  t !== n && (K(fa, e), K(jt, n));
}
function Su(e) {
  fa.current === e && (q(jt), q(fa));
}
var ee = gn(0);
function Fi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fl = [];
function Eu() {
  for (var e = 0; e < fl.length; e++)
    fl[e]._workInProgressVersionPrimary = null;
  fl.length = 0;
}
var mi = Ut.ReactCurrentDispatcher,
  dl = Ut.ReactCurrentBatchConfig,
  On = 0,
  te = null,
  fe = null,
  he = null,
  Di = !1,
  Qr = !1,
  ma = 0,
  V0 = 0;
function Ce() {
  throw Error(P(321));
}
function Cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1;
  return !0;
}
function Pu(e, t, n, r, a, i) {
  if (
    ((On = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (mi.current = e === null || e.memoizedState === null ? G0 : X0),
    (e = n(r, a)),
    Qr)
  ) {
    i = 0;
    do {
      if (((Qr = !1), (ma = 0), 25 <= i)) throw Error(P(301));
      (i += 1),
        (he = fe = null),
        (t.updateQueue = null),
        (mi.current = q0),
        (e = n(r, a));
    } while (Qr);
  }
  if (
    ((mi.current = Ui),
    (t = fe !== null && fe.next !== null),
    (On = 0),
    (he = fe = te = null),
    (Di = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Tu() {
  var e = ma !== 0;
  return (ma = 0), e;
}
function xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return he === null ? (te.memoizedState = he = e) : (he = he.next = e), he;
}
function lt() {
  if (fe === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = he === null ? te.memoizedState : he.next;
  if (t !== null) (he = t), (fe = e);
  else {
    if (e === null) throw Error(P(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      he === null ? (te.memoizedState = he = e) : (he = he.next = e);
  }
  return he;
}
function pa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ml(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = fe,
    a = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var l = a.next;
      (a.next = i.next), (i.next = l);
    }
    (r.baseQueue = a = i), (n.pending = null);
  }
  if (a !== null) {
    (i = a.next), (r = r.baseState);
    var o = (l = null),
      u = null,
      c = i;
    do {
      var f = c.lane;
      if ((On & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((o = u = d), (l = r)) : (u = u.next = d),
          (te.lanes |= f),
          (Mn |= f);
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? (l = r) : (u.next = o),
      vt(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    a = e;
    do (i = a.lane), (te.lanes |= i), (Mn |= i), (a = a.next);
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pl(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    a = n.pending,
    i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var l = (a = a.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== a);
    vt(i, t.memoizedState) || (Fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Xm() {}
function qm(e, t) {
  var n = te,
    r = lt(),
    a = t(),
    i = !vt(r.memoizedState, a);
  if (
    (i && ((r.memoizedState = a), (Fe = !0)),
    (r = r.queue),
    _u(ep.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ha(9, Jm.bind(null, n, r, a, t), void 0, null),
      ve === null)
    )
      throw Error(P(349));
    On & 30 || Zm(n, t, a);
  }
  return a;
}
function Zm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), tp(t) && np(e);
}
function ep(e, t, n) {
  return n(function () {
    tp(t) && np(e);
  });
}
function tp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function np(e) {
  var t = Mt(e, 1);
  t !== null && ht(t, e, 1, -1);
}
function mf(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = K0.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function ha(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rp() {
  return lt().memoizedState;
}
function pi(e, t, n, r) {
  var a = xt();
  (te.flags |= e),
    (a.memoizedState = ha(1 | t, n, void 0, r === void 0 ? null : r));
}
function cs(e, t, n, r) {
  var a = lt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (fe !== null) {
    var l = fe.memoizedState;
    if (((i = l.destroy), r !== null && Cu(r, l.deps))) {
      a.memoizedState = ha(t, n, i, r);
      return;
    }
  }
  (te.flags |= e), (a.memoizedState = ha(1 | t, n, i, r));
}
function pf(e, t) {
  return pi(8390656, 8, e, t);
}
function _u(e, t) {
  return cs(2048, 8, e, t);
}
function ap(e, t) {
  return cs(4, 2, e, t);
}
function ip(e, t) {
  return cs(4, 4, e, t);
}
function sp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function lp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), cs(4, 4, sp.bind(null, t, e), n)
  );
}
function Iu() {}
function op(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function up(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cp(e, t, n) {
  return On & 21
    ? (vt(n, t) || ((n = mm()), (te.lanes |= n), (Mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function Y0(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = dl.transition;
  dl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (dl.transition = r);
  }
}
function fp() {
  return lt().memoizedState;
}
function Q0(e, t, n) {
  var r = ln(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dp(e))
  )
    mp(t, n);
  else if (((n = Bm(e, t, n, r)), n !== null)) {
    var a = Oe();
    ht(n, e, r, a), pp(n, t, r);
  }
}
function K0(e, t, n) {
  var r = ln(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dp(e)) mp(t, a);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          o = i(l, n);
        if (((a.hasEagerState = !0), (a.eagerState = o), vt(o, l))) {
          var u = t.interleaved;
          u === null
            ? ((a.next = a), ju(t))
            : ((a.next = u.next), (u.next = a)),
            (t.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bm(e, t, a, r)),
      n !== null && ((a = Oe()), ht(n, e, r, a), pp(n, t, r));
  }
}
function dp(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function mp(e, t) {
  Qr = Di = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
var Ui = {
    readContext: st,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1,
  },
  G0 = {
    readContext: st,
    useCallback: function (e, t) {
      return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: st,
    useEffect: pf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        pi(4194308, 4, sp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return pi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return pi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = xt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Q0.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: mf,
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = mf(!1),
        t = e[0];
      return (e = Y0.bind(null, e[1])), (xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        a = xt();
      if (J) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), ve === null)) throw Error(P(349));
        On & 30 || Zm(r, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (a.queue = i),
        pf(ep.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ha(9, Jm.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = ve.identifierPrefix;
      if (J) {
        var n = Pt,
          r = Ct;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ma++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = V0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  X0 = {
    readContext: st,
    useCallback: op,
    useContext: st,
    useEffect: _u,
    useImperativeHandle: lp,
    useInsertionEffect: ap,
    useLayoutEffect: ip,
    useMemo: up,
    useReducer: ml,
    useRef: rp,
    useState: function () {
      return ml(pa);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = lt();
      return cp(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ml(pa)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xm,
    useSyncExternalStore: qm,
    useId: fp,
    unstable_isNewReconciler: !1,
  },
  q0 = {
    readContext: st,
    useCallback: op,
    useContext: st,
    useEffect: _u,
    useImperativeHandle: lp,
    useInsertionEffect: ap,
    useLayoutEffect: ip,
    useMemo: up,
    useReducer: pl,
    useRef: rp,
    useState: function () {
      return pl(pa);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = lt();
      return fe === null ? (t.memoizedState = e) : cp(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = pl(pa)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xm,
    useSyncExternalStore: qm,
    useId: fp,
    unstable_isNewReconciler: !1,
  };
function gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sh(r)), (r = r.return);
    while (r);
    var a = n;
  } catch (i) {
    a =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function hl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function po(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Z0 = typeof WeakMap == "function" ? WeakMap : Map;
function hp(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Bi || ((Bi = !0), (ko = r)), po(e, t);
    }),
    n
  );
}
function vp(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    (n.payload = function () {
      return r(a);
    }),
      (n.callback = function () {
        po(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        po(e, t),
          typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function hf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Z0();
    var a = new Set();
    r.set(t, a);
  } else (a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a));
  a.has(n) || (a.add(n), (e = dv.bind(null, e, t, n)), t.then(e, e));
}
function vf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gf(e, t, n, r, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tt(-1, 1)), (t.tag = 2), an(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var J0 = Ut.ReactCurrentOwner,
  Fe = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? Km(t, null, n, r) : hr(t, e.child, n, r);
}
function xf(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return (
    ur(t, a),
    (r = Pu(e, t, n, r, i, a)),
    (n = Tu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Rt(e, t, a))
      : (J && n && vu(t), (t.flags |= 1), Ae(e, t, r, a), t.child)
  );
}
function yf(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Fu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gp(e, t, i, r, a))
      : ((e = xi(n.type, null, r, t, t.mode, a)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & a))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : la), n(l, r) && e.ref === t.ref)
    )
      return Rt(e, t, a);
  }
  return (
    (t.flags |= 1),
    (e = on(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gp(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (la(i, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & a) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), Rt(e, t, a);
  }
  return ho(e, t, n, r, a);
}
function xp(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(tr, We),
        (We |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(tr, We),
          (We |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        K(tr, We),
        (We |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(tr, We),
      (We |= r);
  return Ae(e, t, a, n), t.child;
}
function yp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ho(e, t, n, r, a) {
  var i = Ue(n) ? An : _e.current;
  return (
    (i = mr(t, i)),
    ur(t, a),
    (n = Pu(e, t, n, r, i, a)),
    (r = Tu()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Rt(e, t, a))
      : (J && r && vu(t), (t.flags |= 1), Ae(e, t, n, a), t.child)
  );
}
function wf(e, t, n, r, a) {
  if (Ue(n)) {
    var i = !0;
    Li(t);
  } else i = !1;
  if ((ur(t, a), t.stateNode === null))
    hi(e, t), Ym(t, n, r), mo(t, n, r, a), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      o = t.memoizedProps;
    l.props = o;
    var u = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = st(c))
      : ((c = Ue(n) ? An : _e.current), (c = mr(t, c)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== r || u !== c) && ff(t, l, r, c)),
      (Qt = !1);
    var p = t.memoizedState;
    (l.state = p),
      $i(t, r, l, a),
      (u = t.memoizedState),
      o !== r || p !== u || De.current || Qt
        ? (typeof f == "function" && (fo(t, n, f, r), (u = t.memoizedState)),
          (o = Qt || cf(t, n, o, r, p, u, c))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = c),
          (r = o))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Wm(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : ut(t.type, o)),
      (l.props = c),
      (d = t.pendingProps),
      (p = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = st(u))
        : ((u = Ue(n) ? An : _e.current), (u = mr(t, u)));
    var g = n.getDerivedStateFromProps;
    (f =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== d || p !== u) && ff(t, l, r, u)),
      (Qt = !1),
      (p = t.memoizedState),
      (l.state = p),
      $i(t, r, l, a);
    var x = t.memoizedState;
    o !== d || p !== x || De.current || Qt
      ? (typeof g == "function" && (fo(t, n, g, r), (x = t.memoizedState)),
        (c = Qt || cf(t, n, c, r, p, x, u) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, x, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, x, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (l.props = r),
        (l.state = x),
        (l.context = u),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vo(e, t, n, r, i, a);
}
function vo(e, t, n, r, a, i) {
  yp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return a && af(t, n, !1), Rt(e, t, i);
  (r = t.stateNode), (J0.current = t);
  var o =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = hr(t, e.child, null, i)), (t.child = hr(t, null, o, i)))
      : Ae(e, t, o, i),
    (t.memoizedState = r.state),
    a && af(t, n, !0),
    t.child
  );
}
function wp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? rf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && rf(e, t.context, !1),
    ku(e, t.containerInfo);
}
function bf(e, t, n, r, a) {
  return pr(), xu(a), (t.flags |= 256), Ae(e, t, n, r), t.child;
}
var go = { dehydrated: null, treeContext: null, retryLane: 0 };
function xo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bp(e, t, n) {
  var r = t.pendingProps,
    a = ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    o;
  if (
    ((o = l) ||
      (o = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    K(ee, a & 1),
    e === null)
  )
    return (
      uo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = ms(l, r, 0, null)),
              (e = _n(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = xo(n)),
              (t.memoizedState = go),
              e)
            : Au(t, l))
    );
  if (((a = e.memoizedState), a !== null && ((o = a.dehydrated), o !== null)))
    return ev(e, t, l, r, o, a, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (a = e.child), (o = a.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== a
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = on(a, u)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
      o !== null ? (i = on(o, i)) : ((i = _n(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? xo(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = go),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = on(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Au(e, t) {
  return (
    (t = ms({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wa(e, t, n, r) {
  return (
    r !== null && xu(r),
    hr(t, e.child, null, n),
    (e = Au(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ev(e, t, n, r, a, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hl(Error(P(422)))), Wa(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (a = t.mode),
        (r = ms({ mode: "visible", children: r.children }, a, 0, null)),
        (i = _n(i, a, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && hr(t, e.child, null, l),
        (t.child.memoizedState = xo(l)),
        (t.memoizedState = go),
        i);
  if (!(t.mode & 1)) return Wa(e, t, l, null);
  if (a.data === "$!") {
    if (((r = a.nextSibling && a.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(P(419))), (r = hl(i, r, void 0)), Wa(e, t, l, r);
  }
  if (((o = (l & e.childLanes) !== 0), Fe || o)) {
    if (((r = ve), r !== null)) {
      switch (l & -l) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      (a = a & (r.suspendedLanes | l) ? 0 : a),
        a !== 0 &&
          a !== i.retryLane &&
          ((i.retryLane = a), Mt(e, a), ht(r, e, a, -1));
    }
    return $u(), (r = hl(Error(P(421)))), Wa(e, t, l, r);
  }
  return a.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mv.bind(null, e)),
      (a._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = rn(a.nextSibling)),
      (Ke = t),
      (J = !0),
      (ft = null),
      e !== null &&
        ((tt[nt++] = Ct),
        (tt[nt++] = Pt),
        (tt[nt++] = Ln),
        (Ct = e.id),
        (Pt = e.overflow),
        (Ln = t)),
      (t = Au(t, r.children)),
      (t.flags |= 4096),
      t);
}
function jf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), co(e.return, t, n);
}
function vl(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = a));
}
function jp(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    i = r.tail;
  if ((Ae(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jf(e, n, t);
        else if (e.tag === 19) jf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((K(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          (e = n.alternate),
            e !== null && Fi(e) === null && (a = n),
            (n = n.sibling);
        (n = a),
          n === null
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
          vl(t, !1, a, n, i);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Fi(e) === null)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        vl(t, !0, n, null, i);
        break;
      case "together":
        vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = on(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tv(e, t, n) {
  switch (t.tag) {
    case 3:
      wp(t), pr();
      break;
    case 5:
      Gm(t);
      break;
    case 1:
      Ue(t.type) && Li(t);
      break;
    case 4:
      ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        a = t.memoizedProps.value;
      K(Ri, r._currentValue), (r._currentValue = a);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bp(e, t, n)
          : (K(ee, ee.current & 1),
            (e = Rt(e, t, n)),
            e !== null ? e.sibling : null);
      K(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return jp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((a = t.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        K(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xp(e, t, n);
  }
  return Rt(e, t, n);
}
var Np, yo, kp, Sp;
Np = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
yo = function () {};
kp = function (e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    (e = t.stateNode), En(jt.current);
    var i = null;
    switch (n) {
      case "input":
        (a = Dl(e, a)), (r = Dl(e, r)), (i = []);
        break;
      case "select":
        (a = ne({}, a, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (a = Bl(e, a)), (r = Bl(e, r)), (i = []);
        break;
      default:
        typeof a.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ii);
    }
    Vl(n, r);
    var l;
    n = null;
    for (c in a)
      if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && a[c] != null)
        if (c === "style") {
          var o = a[c];
          for (l in o) o.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ea.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((o = a != null ? a[c] : void 0),
        r.hasOwnProperty(c) && u !== o && (u != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (l in o)
              !o.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                o[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (o = o ? o.__html : void 0),
              u != null && o !== u && (i = i || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ea.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && G("scroll", e),
                  i || o === u || (i = []))
                : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Sp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Or(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags & 14680064),
        (r |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags),
        (r |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function nv(e, t, n) {
  var r = t.pendingProps;
  switch ((gu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pe(t), null;
    case 1:
      return Ue(t.type) && Ai(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vr(),
        q(De),
        q(_e),
        Eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ha(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (Co(ft), (ft = null)))),
        yo(e, t),
        Pe(t),
        null
      );
    case 5:
      Su(t);
      var a = En(da.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kp(e, t, n, r, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Pe(t), null;
        }
        if (((e = En(jt.current)), Ha(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[yt] = t), (r[ca] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Dr.length; a++) G(Dr[a], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              _c(r, i), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              Ac(r, i), G("invalid", r);
          }
          Vl(n, i), (a = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var o = i[l];
              l === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ua(r.textContent, o, e),
                    (a = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ua(r.textContent, o, e),
                    (a = ["children", "" + o]))
                : ea.hasOwnProperty(l) &&
                  o != null &&
                  l === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              La(r), Ic(r, i, !0);
              break;
            case "textarea":
              La(r), Lc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ii);
          }
          (r = a), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = a.nodeType === 9 ? a : a.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[yt] = t),
            (e[ca] = r),
            Np(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Yl(n, r)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (a = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (a = r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Dr.length; a++) G(Dr[a], e);
                a = r;
                break;
              case "source":
                G("error", e), (a = r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (a = r);
                break;
              case "details":
                G("toggle", e), (a = r);
                break;
              case "input":
                _c(e, r), (a = Dl(e, r)), G("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = ne({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                Ac(e, r), (a = Bl(e, r)), G("invalid", e);
                break;
              default:
                a = r;
            }
            Vl(n, a), (o = a);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === "style"
                  ? tm(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Jd(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && ta(e, u)
                    : typeof u == "number" && ta(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ea.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && G("scroll", e)
                      : u != null && nu(e, i, u, l));
              }
            switch (n) {
              case "input":
                La(e), Ic(e, r, !1);
                break;
              case "textarea":
                La(e), Lc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ir(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ir(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Ii);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) Sp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = En(da.current)), En(jt.current), Ha(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (i = r.nodeValue !== n) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ua(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ua(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (q(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Ye !== null && t.mode & 1 && !(t.flags & 128))
          Hm(), pr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ha(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(P(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(P(317));
            i[yt] = t;
          } else
            pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (i = !1);
        } else ft !== null && (Co(ft), (ft = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? de === 0 && (de = 3) : $u())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        vr(), yo(e, t), e === null && oa(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return bu(t.type._context), Pe(t), null;
    case 17:
      return Ue(t.type) && Ai(), Pe(t), null;
    case 19:
      if ((q(ee), (i = t.memoizedState), i === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Or(i, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Fi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Or(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            se() > xr &&
            ((t.flags |= 128), (r = !0), Or(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Or(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !J)
            )
              return Pe(t), null;
          } else
            2 * se() - i.renderingStartTime > xr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Or(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = se()),
          (t.sibling = null),
          (n = ee.current),
          K(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        zu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? We & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function rv(e, t) {
  switch ((gu(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && Ai(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vr(),
        q(De),
        q(_e),
        Eu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Su(t), null;
    case 13:
      if ((q(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340));
        pr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(ee), null;
    case 4:
      return vr(), null;
    case 10:
      return bu(t.type._context), null;
    case 22:
    case 23:
      return zu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Va = !1,
  Te = !1,
  av = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function er(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function wo(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var Nf = !1;
function iv(e, t) {
  if (((no = Pi), (e = Tm()), hu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            o = -1,
            u = -1,
            c = 0,
            f = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (a !== 0 && d.nodeType !== 3) || (o = l + a),
                d !== i || (r !== 0 && d.nodeType !== 3) || (u = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (p = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++c === a && (o = l),
                p === i && ++f === r && (u = l),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = g;
          }
          n = o === -1 || u === -1 ? null : { start: o, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ro = { focusedElem: e, selectionRange: n }, Pi = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var y = x.memoizedProps,
                    N = x.memoizedState,
                    v = t.stateNode,
                    m = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : ut(t.type, y),
                      N
                    );
                  v.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (w) {
          re(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (x = Nf), (Nf = !1), x;
}
function Kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var a = (r = r.next);
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        (a.destroy = void 0), i !== void 0 && wo(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function fs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ep(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ep(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[ca], delete t[so], delete t[U0], delete t[H0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Cp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ii));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jo(e, t, n), e = e.sibling; e !== null; ) jo(e, t, n), (e = e.sibling);
}
function No(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (No(e, t, n), e = e.sibling; e !== null; ) No(e, t, n), (e = e.sibling);
}
var be = null,
  ct = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) Pp(e, t, n), (n = n.sibling);
}
function Pp(e, t, n) {
  if (bt && typeof bt.onCommitFiberUnmount == "function")
    try {
      bt.onCommitFiberUnmount(rs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || er(n, t);
    case 6:
      var r = be,
        a = ct;
      (be = null),
        Bt(e, t, n),
        (be = r),
        (ct = a),
        be !== null &&
          (ct
            ? ((e = be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : be.removeChild(n.stateNode));
      break;
    case 18:
      be !== null &&
        (ct
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8
              ? ul(e.parentNode, n)
              : e.nodeType === 1 && ul(e, n),
            ia(e))
          : ul(be, n.stateNode));
      break;
    case 4:
      (r = be),
        (a = ct),
        (be = n.stateNode.containerInfo),
        (ct = !0),
        Bt(e, t, n),
        (be = r),
        (ct = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        a = r = r.next;
        do {
          var i = a,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && wo(n, t, l),
            (a = a.next);
        } while (a !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (er(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          re(n, t, o);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), Bt(e, t, n), (Te = r))
        : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function Sf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new av()),
      t.forEach(function (r) {
        var a = pv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var i = e,
          l = t,
          o = l;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (be = o.stateNode), (ct = !1);
              break e;
            case 3:
              (be = o.stateNode.containerInfo), (ct = !0);
              break e;
            case 4:
              (be = o.stateNode.containerInfo), (ct = !0);
              break e;
          }
          o = o.return;
        }
        if (be === null) throw Error(P(160));
        Pp(i, l, a), (be = null), (ct = !1);
        var u = a.alternate;
        u !== null && (u.return = null), (a.return = null);
      } catch (c) {
        re(a, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tp(t, e), (t = t.sibling);
}
function Tp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), gt(e), r & 4)) {
        try {
          Kr(3, e, e.return), fs(3, e);
        } catch (y) {
          re(e, e.return, y);
        }
        try {
          Kr(5, e, e.return);
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 1:
      ot(t, e), gt(e), r & 512 && n !== null && er(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        gt(e),
        r & 512 && n !== null && er(n, n.return),
        e.flags & 32)
      ) {
        var a = e.stateNode;
        try {
          ta(a, "");
        } catch (y) {
          re(e, e.return, y);
        }
      }
      if (r & 4 && ((a = e.stateNode), a != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          o = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && Xd(a, i),
              Yl(o, l);
            var c = Yl(o, i);
            for (l = 0; l < u.length; l += 2) {
              var f = u[l],
                d = u[l + 1];
              f === "style"
                ? tm(a, d)
                : f === "dangerouslySetInnerHTML"
                ? Jd(a, d)
                : f === "children"
                ? ta(a, d)
                : nu(a, f, d, c);
            }
            switch (o) {
              case "input":
                Ul(a, i);
                break;
              case "textarea":
                qd(a, i);
                break;
              case "select":
                var p = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? ir(a, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ir(a, !!i.multiple, i.defaultValue, !0)
                      : ir(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[ca] = i;
          } catch (y) {
            re(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ot(t, e), gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (a = e.stateNode), (i = e.memoizedProps);
        try {
          a.nodeValue = i;
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ia(t.containerInfo);
        } catch (y) {
          re(e, e.return, y);
        }
      break;
    case 4:
      ot(t, e), gt(e);
      break;
    case 13:
      ot(t, e),
        gt(e),
        (a = e.child),
        a.flags & 8192 &&
          ((i = a.memoizedState !== null),
          (a.stateNode.isHidden = i),
          !i ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (Mu = se())),
        r & 4 && Sf(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (c = Te) || f), ot(t, e), (Te = c)) : ot(t, e),
        gt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (L = e, f = e.child; f !== null; ) {
            for (d = L = f; L !== null; ) {
              switch (((p = L), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, p, p.return);
                  break;
                case 1:
                  er(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (y) {
                      re(r, n, y);
                    }
                  }
                  break;
                case 5:
                  er(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Cf(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (L = g)) : Cf(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (a = d.stateNode),
                  c
                    ? ((i = a.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = d.stateNode),
                      (u = d.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (o.style.display = em("display", l)));
              } catch (y) {
                re(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (y) {
                re(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), gt(e), r & 4 && Sf(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (ta(a, ""), (r.flags &= -33));
          var i = kf(e);
          No(e, i, a);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            o = kf(e);
          jo(e, o, l);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      re(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sv(e, t, n) {
  (L = e), _p(e);
}
function _p(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var a = L,
      i = a.child;
    if (a.tag === 22 && r) {
      var l = a.memoizedState !== null || Va;
      if (!l) {
        var o = a.alternate,
          u = (o !== null && o.memoizedState !== null) || Te;
        o = Va;
        var c = Te;
        if (((Va = l), (Te = u) && !c))
          for (L = a; L !== null; )
            (l = L),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Pf(a)
                : u !== null
                ? ((u.return = l), (L = u))
                : Pf(a);
        for (; i !== null; ) (L = i), _p(i), (i = i.sibling);
        (L = a), (Va = o), (Te = c);
      }
      Ef(e);
    } else
      a.subtreeFlags & 8772 && i !== null ? ((i.return = a), (L = i)) : Ef(e);
  }
}
function Ef(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || fs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var a =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    a,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && uf(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uf(t, l, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && ia(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Te || (t.flags & 512 && bo(t));
      } catch (p) {
        re(t, t.return, p);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Cf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Pf(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fs(4, t);
          } catch (u) {
            re(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              re(t, a, u);
            }
          }
          var i = t.return;
          try {
            bo(t);
          } catch (u) {
            re(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            bo(t);
          } catch (u) {
            re(t, l, u);
          }
      }
    } catch (u) {
      re(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (L = o);
      break;
    }
    L = t.return;
  }
}
var lv = Math.ceil,
  Hi = Ut.ReactCurrentDispatcher,
  Lu = Ut.ReactCurrentOwner,
  at = Ut.ReactCurrentBatchConfig,
  W = 0,
  ve = null,
  ue = null,
  ke = 0,
  We = 0,
  tr = gn(0),
  de = 0,
  va = null,
  Mn = 0,
  ds = 0,
  Ou = 0,
  Gr = null,
  $e = null,
  Mu = 0,
  xr = 1 / 0,
  St = null,
  Bi = !1,
  ko = null,
  sn = null,
  Ya = !1,
  qt = null,
  Wi = 0,
  Xr = 0,
  So = null,
  vi = -1,
  gi = 0;
function Oe() {
  return W & 6 ? se() : vi !== -1 ? vi : (vi = se());
}
function ln(e) {
  return e.mode & 1
    ? W & 2 && ke !== 0
      ? ke & -ke
      : W0.transition !== null
      ? (gi === 0 && (gi = mm()), gi)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wm(e.type))),
        e)
    : 1;
}
function ht(e, t, n, r) {
  if (50 < Xr) throw ((Xr = 0), (So = null), Error(P(185)));
  Na(e, n, r),
    (!(W & 2) || e !== ve) &&
      (e === ve && (!(W & 2) && (ds |= n), de === 4 && Gt(e, ke)),
      He(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((xr = se() + 500), os && xn()));
}
function He(e, t) {
  var n = e.callbackNode;
  Wh(e, t);
  var r = Ci(e, e === ve ? ke : 0);
  if (r === 0)
    n !== null && Rc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Rc(n), t === 1))
      e.tag === 0 ? B0(Tf.bind(null, e)) : Fm(Tf.bind(null, e)),
        F0(function () {
          !(W & 6) && xn();
        }),
        (n = null);
    else {
      switch (pm(r)) {
        case 1:
          n = lu;
          break;
        case 4:
          n = fm;
          break;
        case 16:
          n = Ei;
          break;
        case 536870912:
          n = dm;
          break;
        default:
          n = Ei;
      }
      n = $p(n, Ip.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ip(e, t) {
  if (((vi = -1), (gi = 0), W & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (cr() && e.callbackNode !== n) return null;
  var r = Ci(e, e === ve ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vi(e, r);
  else {
    t = r;
    var a = W;
    W |= 2;
    var i = Lp();
    (ve !== e || ke !== t) && ((St = null), (xr = se() + 500), Tn(e, t));
    do
      try {
        cv();
        break;
      } catch (o) {
        Ap(e, o);
      }
    while (!0);
    wu(),
      (Hi.current = i),
      (W = a),
      ue !== null ? (t = 0) : ((ve = null), (ke = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((a = ql(e)), a !== 0 && ((r = a), (t = Eo(e, a)))), t === 1)
    )
      throw ((n = va), Tn(e, 0), Gt(e, r), He(e, se()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((a = e.current.alternate),
        !(r & 30) &&
          !ov(a) &&
          ((t = Vi(e, r)),
          t === 2 && ((i = ql(e)), i !== 0 && ((r = i), (t = Eo(e, i)))),
          t === 1))
      )
        throw ((n = va), Tn(e, 0), Gt(e, r), He(e, se()), n);
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Nn(e, $e, St);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = Mu + 500 - se()), 10 < t))
          ) {
            if (Ci(e, 0) !== 0) break;
            if (((a = e.suspendedLanes), (a & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = io(Nn.bind(null, e, $e, St), t);
            break;
          }
          Nn(e, $e, St);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var l = 31 - pt(r);
            (i = 1 << l), (l = t[l]), l > a && (a = l), (r &= ~i);
          }
          if (
            ((r = a),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * lv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = io(Nn.bind(null, e, $e, St), r);
            break;
          }
          Nn(e, $e, St);
          break;
        case 5:
          Nn(e, $e, St);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return He(e, se()), e.callbackNode === n ? Ip.bind(null, e) : null;
}
function Eo(e, t) {
  var n = Gr;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = Vi(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Co(t)),
    e
  );
}
function Co(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function ov(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            i = a.getSnapshot;
          a = a.value;
          try {
            if (!vt(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Gt(e, t) {
  for (
    t &= ~Ou,
      t &= ~ds,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Tf(e) {
  if (W & 6) throw Error(P(327));
  cr();
  var t = Ci(e, 0);
  if (!(t & 1)) return He(e, se()), null;
  var n = Vi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ql(e);
    r !== 0 && ((t = r), (n = Eo(e, r)));
  }
  if (n === 1) throw ((n = va), Tn(e, 0), Gt(e, t), He(e, se()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nn(e, $e, St),
    He(e, se()),
    null
  );
}
function Ru(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((xr = se() + 500), os && xn());
  }
}
function Rn(e) {
  qt !== null && qt.tag === 0 && !(W & 6) && cr();
  var t = W;
  W |= 1;
  var n = at.transition,
    r = Y;
  try {
    if (((at.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (at.transition = n), (W = t), !(W & 6) && xn();
  }
}
function zu() {
  (We = tr.current), q(tr);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $0(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((gu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ai();
          break;
        case 3:
          vr(), q(De), q(_e), Eu();
          break;
        case 5:
          Su(r);
          break;
        case 4:
          vr();
          break;
        case 13:
          q(ee);
          break;
        case 19:
          q(ee);
          break;
        case 10:
          bu(r.type._context);
          break;
        case 22:
        case 23:
          zu();
      }
      n = n.return;
    }
  if (
    ((ve = e),
    (ue = e = on(e.current, null)),
    (ke = We = t),
    (de = 0),
    (va = null),
    (Ou = ds = Mn = 0),
    ($e = Gr = null),
    Sn !== null)
  ) {
    for (t = 0; t < Sn.length; t++)
      if (((n = Sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var a = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = a), (r.next = l);
        }
        n.pending = r;
      }
    Sn = null;
  }
  return e;
}
function Ap(e, t) {
  do {
    var n = ue;
    try {
      if ((wu(), (mi.current = Ui), Di)) {
        for (var r = te.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), (r = r.next);
        }
        Di = !1;
      }
      if (
        ((On = 0),
        (he = fe = te = null),
        (Qr = !1),
        (ma = 0),
        (Lu.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (va = t), (ue = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          o = n,
          u = t;
        if (
          ((t = ke),
          (o.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            f = o,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var g = vf(l);
          if (g !== null) {
            (g.flags &= -257),
              gf(g, l, o, i, t),
              g.mode & 1 && hf(i, c, t),
              (t = g),
              (u = c);
            var x = t.updateQueue;
            if (x === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              hf(i, c, t), $u();
              break e;
            }
            u = Error(P(426));
          }
        } else if (J && o.mode & 1) {
          var N = vf(l);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              gf(N, l, o, i, t),
              xu(gr(u, o));
            break e;
          }
        }
        (i = u = gr(u, o)),
          de !== 4 && (de = 2),
          Gr === null ? (Gr = [i]) : Gr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = hp(i, u, t);
              of(i, v);
              break e;
            case 1:
              o = u;
              var m = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (sn === null || !sn.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = vp(i, o, t);
                of(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Mp(n);
    } catch (b) {
      (t = b), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lp() {
  var e = Hi.current;
  return (Hi.current = Ui), e === null ? Ui : e;
}
function $u() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    ve === null || (!(Mn & 268435455) && !(ds & 268435455)) || Gt(ve, ke);
}
function Vi(e, t) {
  var n = W;
  W |= 2;
  var r = Lp();
  (ve !== e || ke !== t) && ((St = null), Tn(e, t));
  do
    try {
      uv();
      break;
    } catch (a) {
      Ap(e, a);
    }
  while (!0);
  if ((wu(), (W = n), (Hi.current = r), ue !== null)) throw Error(P(261));
  return (ve = null), (ke = 0), de;
}
function uv() {
  for (; ue !== null; ) Op(ue);
}
function cv() {
  for (; ue !== null && !Mh(); ) Op(ue);
}
function Op(e) {
  var t = zp(e.alternate, e, We);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mp(e) : (ue = t),
    (Lu.current = null);
}
function Mp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rv(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (ue = null);
        return;
      }
    } else if (((n = nv(n, t, We)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function Nn(e, t, n) {
  var r = Y,
    a = at.transition;
  try {
    (at.transition = null), (Y = 1), fv(e, t, n, r);
  } finally {
    (at.transition = a), (Y = r);
  }
  return null;
}
function fv(e, t, n, r) {
  do cr();
  while (qt !== null);
  if (W & 6) throw Error(P(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Vh(e, i),
    e === ve && ((ue = ve = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ya ||
      ((Ya = !0),
      $p(Ei, function () {
        return cr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = at.transition), (at.transition = null);
    var l = Y;
    Y = 1;
    var o = W;
    (W |= 4),
      (Lu.current = null),
      iv(e, n),
      Tp(n, e),
      I0(ro),
      (Pi = !!no),
      (ro = no = null),
      (e.current = n),
      sv(n),
      Rh(),
      (W = o),
      (Y = l),
      (at.transition = i);
  } else e.current = n;
  if (
    (Ya && ((Ya = !1), (qt = e), (Wi = a)),
    (i = e.pendingLanes),
    i === 0 && (sn = null),
    Fh(n.stateNode),
    He(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Bi) throw ((Bi = !1), (e = ko), (ko = null), e);
  return (
    Wi & 1 && e.tag !== 0 && cr(),
    (i = e.pendingLanes),
    i & 1 ? (e === So ? Xr++ : ((Xr = 0), (So = e))) : (Xr = 0),
    xn(),
    null
  );
}
function cr() {
  if (qt !== null) {
    var e = pm(Wi),
      t = at.transition,
      n = Y;
    try {
      if (((at.transition = null), (Y = 16 > e ? 16 : e), qt === null))
        var r = !1;
      else {
        if (((e = qt), (qt = null), (Wi = 0), W & 6)) throw Error(P(331));
        var a = W;
        for (W |= 4, L = e.current; L !== null; ) {
          var i = L,
            l = i.child;
          if (L.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (L = c; L !== null; ) {
                  var f = L;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kr(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (L = d);
                  else
                    for (; L !== null; ) {
                      f = L;
                      var p = f.sibling,
                        g = f.return;
                      if ((Ep(f), f === c)) {
                        L = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (L = p);
                        break;
                      }
                      L = g;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var y = x.child;
                if (y !== null) {
                  x.child = null;
                  do {
                    var N = y.sibling;
                    (y.sibling = null), (y = N);
                  } while (y !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (L = l);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kr(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (L = v);
                break e;
              }
              L = i.return;
            }
        }
        var m = e.current;
        for (L = m; L !== null; ) {
          l = L;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (L = h);
          else
            e: for (l = m; L !== null; ) {
              if (((o = L), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fs(9, o);
                  }
                } catch (b) {
                  re(o, o.return, b);
                }
              if (o === l) {
                L = null;
                break e;
              }
              var w = o.sibling;
              if (w !== null) {
                (w.return = o.return), (L = w);
                break e;
              }
              L = o.return;
            }
        }
        if (
          ((W = a), xn(), bt && typeof bt.onPostCommitFiberRoot == "function")
        )
          try {
            bt.onPostCommitFiberRoot(rs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (at.transition = t);
    }
  }
  return !1;
}
function _f(e, t, n) {
  (t = gr(n, t)),
    (t = hp(e, t, 1)),
    (e = an(e, t, 1)),
    (t = Oe()),
    e !== null && (Na(e, 1, t), He(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) _f(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _f(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (e = gr(n, e)),
            (e = vp(t, e, 1)),
            (t = an(t, e, 1)),
            (e = Oe()),
            t !== null && (Na(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function dv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ve === e &&
      (ke & n) === n &&
      (de === 4 || (de === 3 && (ke & 130023424) === ke && 500 > se() - Mu)
        ? Tn(e, 0)
        : (Ou |= n)),
    He(e, t);
}
function Rp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ra), (Ra <<= 1), !(Ra & 130023424) && (Ra = 4194304))
      : (t = 1));
  var n = Oe();
  (e = Mt(e, t)), e !== null && (Na(e, t, n), He(e, n));
}
function mv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Rp(e, n);
}
function pv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        a = e.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), Rp(e, n);
}
var zp;
zp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), tv(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), J && t.flags & 1048576 && Dm(t, Mi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      hi(e, t), (e = t.pendingProps);
      var a = mr(t, _e.current);
      ur(t, n), (a = Pu(null, t, r, e, a, n));
      var i = Tu();
      return (
        (t.flags |= 1),
        typeof a == "object" &&
        a !== null &&
        typeof a.render == "function" &&
        a.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((i = !0), Li(t)) : (i = !1),
            (t.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            Nu(t),
            (a.updater = us),
            (t.stateNode = a),
            (a._reactInternals = t),
            mo(t, r, e, n),
            (t = vo(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && vu(t), Ae(null, t, a, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (hi(e, t),
          (e = t.pendingProps),
          (a = r._init),
          (r = a(r._payload)),
          (t.type = r),
          (a = t.tag = vv(r)),
          (e = ut(r, e)),
          a)
        ) {
          case 0:
            t = ho(null, t, r, e, n);
            break e;
          case 1:
            t = wf(null, t, r, e, n);
            break e;
          case 11:
            t = xf(null, t, r, e, n);
            break e;
          case 14:
            t = yf(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : ut(r, a)),
        ho(e, t, r, a, n)
      );
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : ut(r, a)),
        wf(e, t, r, a, n)
      );
    case 3:
      e: {
        if ((wp(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (a = i.element),
          Wm(e, t),
          $i(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (a = gr(Error(P(423)), t)), (t = bf(e, t, r, n, a));
            break e;
          } else if (r !== a) {
            (a = gr(Error(P(424)), t)), (t = bf(e, t, r, n, a));
            break e;
          } else
            for (
              Ye = rn(t.stateNode.containerInfo.firstChild),
                Ke = t,
                J = !0,
                ft = null,
                n = Km(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pr(), r === a)) {
            t = Rt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gm(t),
        e === null && uo(t),
        (r = t.type),
        (a = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = a.children),
        ao(r, a) ? (l = null) : i !== null && ao(r, i) && (t.flags |= 32),
        yp(e, t),
        Ae(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && uo(t), null;
    case 13:
      return bp(e, t, n);
    case 4:
      return (
        ku(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : Ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : ut(r, a)),
        xf(e, t, r, a, n)
      );
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (i = t.memoizedProps),
          (l = a.value),
          K(Ri, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (vt(i.value, l)) {
            if (i.children === a.children && !De.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                l = i.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Tt(-1, n & -n)), (u.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (c.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      co(i.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(P(341));
                (l.lanes |= n),
                  (o = l.alternate),
                  o !== null && (o.lanes |= n),
                  co(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Ae(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        ur(t, n),
        (a = st(a)),
        (r = r(a)),
        (t.flags |= 1),
        Ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (a = ut(r, t.pendingProps)),
        (a = ut(r.type, a)),
        yf(e, t, r, a, n)
      );
    case 15:
      return gp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : ut(r, a)),
        hi(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), Li(t)) : (e = !1),
        ur(t, n),
        Ym(t, r, a),
        mo(t, r, a, n),
        vo(null, t, r, !0, e, n)
      );
    case 19:
      return jp(e, t, n);
    case 22:
      return xp(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function $p(e, t) {
  return cm(e, t);
}
function hv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new hv(e, t, n, r);
}
function Fu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vv(e) {
  if (typeof e == "function") return Fu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === au)) return 11;
    if (e === iu) return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function xi(e, t, n, r, a, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Fu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Vn:
        return _n(n.children, a, i, t);
      case ru:
        (l = 8), (a |= 8);
        break;
      case Rl:
        return (
          (e = rt(12, n, t, a | 2)), (e.elementType = Rl), (e.lanes = i), e
        );
      case zl:
        return (e = rt(13, n, t, a)), (e.elementType = zl), (e.lanes = i), e;
      case $l:
        return (e = rt(19, n, t, a)), (e.elementType = $l), (e.lanes = i), e;
      case Qd:
        return ms(n, a, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vd:
              l = 10;
              break e;
            case Yd:
              l = 9;
              break e;
            case au:
              l = 11;
              break e;
            case iu:
              l = 14;
              break e;
            case Yt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(l, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function _n(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function ms(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = Qd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gl(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function xl(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gv(e, t, n, r, a) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zs(0)),
    (this.expirationTimes = Zs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function Du(e, t, n, r, a, i, l, o, u) {
  return (
    (e = new gv(e, t, n, o, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Nu(i),
    e
  );
}
function xv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fp(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return $m(e, n, t);
  }
  return t;
}
function Dp(e, t, n, r, a, i, l, o, u) {
  return (
    (e = Du(n, r, !0, e, a, i, l, o, u)),
    (e.context = Fp(null)),
    (n = e.current),
    (r = Oe()),
    (a = ln(n)),
    (i = Tt(r, a)),
    (i.callback = t ?? null),
    an(n, i, a),
    (e.current.lanes = a),
    Na(e, a, r),
    He(e, r),
    e
  );
}
function ps(e, t, n, r) {
  var a = t.current,
    i = Oe(),
    l = ln(a);
  return (
    (n = Fp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = an(a, t, l)),
    e !== null && (ht(e, a, l, i), di(e, a, l)),
    l
  );
}
function Yi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function If(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Uu(e, t) {
  If(e, t), (e = e.alternate) && If(e, t);
}
function yv() {
  return null;
}
var Up =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hu(e) {
  this._internalRoot = e;
}
hs.prototype.render = Hu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  ps(e, t, null, null);
};
hs.prototype.unmount = Hu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rn(function () {
      ps(null, e, null, null);
    }),
      (t[Ot] = null);
  }
};
function hs(e) {
  this._internalRoot = e;
}
hs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
    Kt.splice(n, 0, e), n === 0 && ym(e);
  }
};
function Bu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Af() {}
function wv(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Yi(l);
        i.call(c);
      };
    }
    var l = Dp(t, r, e, 0, null, !1, !1, "", Af);
    return (
      (e._reactRootContainer = l),
      (e[Ot] = l.current),
      oa(e.nodeType === 8 ? e.parentNode : e),
      Rn(),
      l
    );
  }
  for (; (a = e.lastChild); ) e.removeChild(a);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var c = Yi(u);
      o.call(c);
    };
  }
  var u = Du(e, 0, !1, null, null, !1, !1, "", Af);
  return (
    (e._reactRootContainer = u),
    (e[Ot] = u.current),
    oa(e.nodeType === 8 ? e.parentNode : e),
    Rn(function () {
      ps(t, u, n, r);
    }),
    u
  );
}
function gs(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof a == "function") {
      var o = a;
      a = function () {
        var u = Yi(l);
        o.call(u);
      };
    }
    ps(t, l, e, a);
  } else l = wv(n, t, e, a, r);
  return Yi(l);
}
hm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fr(t.pendingLanes);
        n !== 0 &&
          (ou(t, n | 1), He(t, se()), !(W & 6) && ((xr = se() + 500), xn()));
      }
      break;
    case 13:
      Rn(function () {
        var r = Mt(e, 1);
        if (r !== null) {
          var a = Oe();
          ht(r, e, 1, a);
        }
      }),
        Uu(e, 1);
  }
};
uu = function (e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = Oe();
      ht(t, e, 134217728, n);
    }
    Uu(e, 134217728);
  }
};
vm = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      n = Mt(e, t);
    if (n !== null) {
      var r = Oe();
      ht(n, e, t, r);
    }
    Uu(e, t);
  }
};
gm = function () {
  return Y;
};
xm = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
Kl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ul(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = ls(r);
            if (!a) throw Error(P(90));
            Gd(r), Ul(r, a);
          }
        }
      }
      break;
    case "textarea":
      qd(e, n);
      break;
    case "select":
      (t = n.value), t != null && ir(e, !!n.multiple, t, !1);
  }
};
am = Ru;
im = Rn;
var bv = { usingClientEntryPoint: !1, Events: [Sa, Gn, ls, nm, rm, Ru] },
  Mr = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  jv = {
    bundleType: Mr.bundleType,
    version: Mr.version,
    rendererPackageName: Mr.rendererPackageName,
    rendererConfig: Mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = om(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mr.findFiberByHostInstance || yv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Qa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qa.isDisabled && Qa.supportsFiber)
    try {
      (rs = Qa.inject(jv)), (bt = Qa);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bv;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bu(t)) throw Error(P(200));
  return xv(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!Bu(e)) throw Error(P(299));
  var n = !1,
    r = "",
    a = Up;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (t = Du(e, 1, !1, null, null, n, !1, r, a)),
    (e[Ot] = t.current),
    oa(e.nodeType === 8 ? e.parentNode : e),
    new Hu(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = om(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return Rn(e);
};
Xe.hydrate = function (e, t, n) {
  if (!vs(t)) throw Error(P(200));
  return gs(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!Bu(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    a = !1,
    i = "",
    l = Up;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Dp(t, null, e, 1, n ?? null, a, !1, i, l)),
    (e[Ot] = t.current),
    oa(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (a = n._getVersion),
        (a = a(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, a])
          : t.mutableSourceEagerHydrationData.push(n, a);
  return new hs(t);
};
Xe.render = function (e, t, n) {
  if (!vs(t)) throw Error(P(200));
  return gs(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!vs(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Rn(function () {
        gs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ot] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = Ru;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vs(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return gs(e, t, n, !1, r);
};
Xe.version = "18.2.0-next-9e3b772b8-20220608";
function Hp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hp);
    } catch (e) {
      console.error(e);
    }
}
Hp(), (Dd.exports = Xe);
var Nv = Dd.exports,
  Lf = Nv;
(Ol.createRoot = Lf.createRoot), (Ol.hydrateRoot = Lf.hydrateRoot);
function Po(e, t) {
  return (
    (Po = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, a) {
          return (r.__proto__ = a), r;
        }),
    Po(e, t)
  );
}
function Nt(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Po(e, t);
}
var Bp = { exports: {} },
  kv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Sv = kv,
  Ev = Sv;
function Wp() {}
function Vp() {}
Vp.resetWarningCache = Wp;
var Cv = function () {
  function e(r, a, i, l, o, u) {
    if (u !== Ev) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Vp,
    resetWarningCache: Wp,
  };
  return (n.PropTypes = n), n;
};
Bp.exports = Cv();
var Pv = Bp.exports;
const D = Go(Pv);
function Ee() {
  return (
    (Ee = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ee.apply(this, arguments)
  );
}
function Ka(e) {
  return e.charAt(0) === "/";
}
function yl(e, t) {
  for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1) e[n] = e[r];
  e.pop();
}
function Tv(e, t) {
  t === void 0 && (t = "");
  var n = (e && e.split("/")) || [],
    r = (t && t.split("/")) || [],
    a = e && Ka(e),
    i = t && Ka(t),
    l = a || i;
  if (
    (e && Ka(e) ? (r = n) : n.length && (r.pop(), (r = r.concat(n))), !r.length)
  )
    return "/";
  var o;
  if (r.length) {
    var u = r[r.length - 1];
    o = u === "." || u === ".." || u === "";
  } else o = !1;
  for (var c = 0, f = r.length; f >= 0; f--) {
    var d = r[f];
    d === "." ? yl(r, f) : d === ".." ? (yl(r, f), c++) : c && (yl(r, f), c--);
  }
  if (!l) for (; c--; c) r.unshift("..");
  l && r[0] !== "" && (!r[0] || !Ka(r[0])) && r.unshift("");
  var p = r.join("/");
  return o && p.substr(-1) !== "/" && (p += "/"), p;
}
function Of(e) {
  return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
}
function yi(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (Array.isArray(e))
    return (
      Array.isArray(t) &&
      e.length === t.length &&
      e.every(function (a, i) {
        return yi(a, t[i]);
      })
    );
  if (typeof e == "object" || typeof t == "object") {
    var n = Of(e),
      r = Of(t);
    return n !== e || r !== t
      ? yi(n, r)
      : Object.keys(Object.assign({}, e, t)).every(function (a) {
          return yi(e[a], t[a]);
        });
  }
  return !1;
}
var _v = "Invariant failed";
function yn(e, t) {
  if (!e) throw new Error(_v);
}
function qr(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Mf(e) {
  return e.charAt(0) === "/" ? e.substr(1) : e;
}
function Iv(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    "/?#".indexOf(e.charAt(t.length)) !== -1
  );
}
function Yp(e, t) {
  return Iv(e, t) ? e.substr(t.length) : e;
}
function Qp(e) {
  return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
}
function Av(e) {
  var t = e || "/",
    n = "",
    r = "",
    a = t.indexOf("#");
  a !== -1 && ((r = t.substr(a)), (t = t.substr(0, a)));
  var i = t.indexOf("?");
  return (
    i !== -1 && ((n = t.substr(i)), (t = t.substr(0, i))),
    { pathname: t, search: n === "?" ? "" : n, hash: r === "#" ? "" : r }
  );
}
function ze(e) {
  var t = e.pathname,
    n = e.search,
    r = e.hash,
    a = t || "/";
  return (
    n && n !== "?" && (a += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (a += r.charAt(0) === "#" ? r : "#" + r),
    a
  );
}
function Le(e, t, n, r) {
  var a;
  typeof e == "string"
    ? ((a = Av(e)), (a.state = t))
    : ((a = Ee({}, e)),
      a.pathname === void 0 && (a.pathname = ""),
      a.search
        ? a.search.charAt(0) !== "?" && (a.search = "?" + a.search)
        : (a.search = ""),
      a.hash
        ? a.hash.charAt(0) !== "#" && (a.hash = "#" + a.hash)
        : (a.hash = ""),
      t !== void 0 && a.state === void 0 && (a.state = t));
  try {
    a.pathname = decodeURI(a.pathname);
  } catch (i) {
    throw i instanceof URIError
      ? new URIError(
          'Pathname "' +
            a.pathname +
            '" could not be decoded. This is likely caused by an invalid percent-encoding.'
        )
      : i;
  }
  return (
    n && (a.key = n),
    r
      ? a.pathname
        ? a.pathname.charAt(0) !== "/" &&
          (a.pathname = Tv(a.pathname, r.pathname))
        : (a.pathname = r.pathname)
      : a.pathname || (a.pathname = "/"),
    a
  );
}
function Lv(e, t) {
  return (
    e.pathname === t.pathname &&
    e.search === t.search &&
    e.hash === t.hash &&
    e.key === t.key &&
    yi(e.state, t.state)
  );
}
function Wu() {
  var e = null;
  function t(l) {
    return (
      (e = l),
      function () {
        e === l && (e = null);
      }
    );
  }
  function n(l, o, u, c) {
    if (e != null) {
      var f = typeof e == "function" ? e(l, o) : e;
      typeof f == "string"
        ? typeof u == "function"
          ? u(f, c)
          : c(!0)
        : c(f !== !1);
    } else c(!0);
  }
  var r = [];
  function a(l) {
    var o = !0;
    function u() {
      o && l.apply(void 0, arguments);
    }
    return (
      r.push(u),
      function () {
        (o = !1),
          (r = r.filter(function (c) {
            return c !== u;
          }));
      }
    );
  }
  function i() {
    for (var l = arguments.length, o = new Array(l), u = 0; u < l; u++)
      o[u] = arguments[u];
    r.forEach(function (c) {
      return c.apply(void 0, o);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: n,
    appendListener: a,
    notifyListeners: i,
  };
}
var Kp = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function Gp(e, t) {
  t(window.confirm(e));
}
function Ov() {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) &&
    e.indexOf("Mobile Safari") !== -1 &&
    e.indexOf("Chrome") === -1 &&
    e.indexOf("Windows Phone") === -1
    ? !1
    : window.history && "pushState" in window.history;
}
function Mv() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function Rv() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function zv(e) {
  return e.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Rf = "popstate",
  zf = "hashchange";
function $f() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function $v(e) {
  e === void 0 && (e = {}), Kp || yn(!1);
  var t = window.history,
    n = Ov(),
    r = !Mv(),
    a = e,
    i = a.forceRefresh,
    l = i === void 0 ? !1 : i,
    o = a.getUserConfirmation,
    u = o === void 0 ? Gp : o,
    c = a.keyLength,
    f = c === void 0 ? 6 : c,
    d = e.basename ? Qp(qr(e.basename)) : "";
  function p(_) {
    var E = _ || {},
      R = E.key,
      O = E.state,
      V = window.location,
      B = V.pathname,
      ye = V.search,
      ce = V.hash,
      we = B + ye + ce;
    return d && (we = Yp(we, d)), Le(we, O, R);
  }
  function g() {
    return Math.random().toString(36).substr(2, f);
  }
  var x = Wu();
  function y(_) {
    Ee(I, _), (I.length = t.length), x.notifyListeners(I.location, I.action);
  }
  function N(_) {
    zv(_) || h(p(_.state));
  }
  function v() {
    h(p($f()));
  }
  var m = !1;
  function h(_) {
    if (m) (m = !1), y();
    else {
      var E = "POP";
      x.confirmTransitionTo(_, E, u, function (R) {
        R ? y({ action: E, location: _ }) : w(_);
      });
    }
  }
  function w(_) {
    var E = I.location,
      R = S.indexOf(E.key);
    R === -1 && (R = 0);
    var O = S.indexOf(_.key);
    O === -1 && (O = 0);
    var V = R - O;
    V && ((m = !0), M(V));
  }
  var b = p($f()),
    S = [b.key];
  function k(_) {
    return d + ze(_);
  }
  function T(_, E) {
    var R = "PUSH",
      O = Le(_, E, g(), I.location);
    x.confirmTransitionTo(O, R, u, function (V) {
      if (V) {
        var B = k(O),
          ye = O.key,
          ce = O.state;
        if (n)
          if ((t.pushState({ key: ye, state: ce }, null, B), l))
            window.location.href = B;
          else {
            var we = S.indexOf(I.location.key),
              wn = S.slice(0, we + 1);
            wn.push(O.key), (S = wn), y({ action: R, location: O });
          }
        else window.location.href = B;
      }
    });
  }
  function $(_, E) {
    var R = "REPLACE",
      O = Le(_, E, g(), I.location);
    x.confirmTransitionTo(O, R, u, function (V) {
      if (V) {
        var B = k(O),
          ye = O.key,
          ce = O.state;
        if (n)
          if ((t.replaceState({ key: ye, state: ce }, null, B), l))
            window.location.replace(B);
          else {
            var we = S.indexOf(I.location.key);
            we !== -1 && (S[we] = O.key), y({ action: R, location: O });
          }
        else window.location.replace(B);
      }
    });
  }
  function M(_) {
    t.go(_);
  }
  function H() {
    M(-1);
  }
  function le() {
    M(1);
  }
  var xe = 0;
  function pe(_) {
    (xe += _),
      xe === 1 && _ === 1
        ? (window.addEventListener(Rf, N), r && window.addEventListener(zf, v))
        : xe === 0 &&
          (window.removeEventListener(Rf, N),
          r && window.removeEventListener(zf, v));
  }
  var oe = !1;
  function et(_) {
    _ === void 0 && (_ = !1);
    var E = x.setPrompt(_);
    return (
      oe || (pe(1), (oe = !0)),
      function () {
        return oe && ((oe = !1), pe(-1)), E();
      }
    );
  }
  function Be(_) {
    var E = x.appendListener(_);
    return (
      pe(1),
      function () {
        pe(-1), E();
      }
    );
  }
  var I = {
    length: t.length,
    action: "POP",
    location: b,
    createHref: k,
    push: T,
    replace: $,
    go: M,
    goBack: H,
    goForward: le,
    block: et,
    listen: Be,
  };
  return I;
}
var Ff = "hashchange",
  Fv = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === "!" ? t : "!/" + Mf(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === "!" ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Mf, decodePath: qr },
    slash: { encodePath: qr, decodePath: qr },
  };
function Xp(e) {
  var t = e.indexOf("#");
  return t === -1 ? e : e.slice(0, t);
}
function Rr() {
  var e = window.location.href,
    t = e.indexOf("#");
  return t === -1 ? "" : e.substring(t + 1);
}
function Dv(e) {
  window.location.hash = e;
}
function wl(e) {
  window.location.replace(Xp(window.location.href) + "#" + e);
}
function Uv(e) {
  e === void 0 && (e = {}), Kp || yn(!1);
  var t = window.history;
  Rv();
  var n = e,
    r = n.getUserConfirmation,
    a = r === void 0 ? Gp : r,
    i = n.hashType,
    l = i === void 0 ? "slash" : i,
    o = e.basename ? Qp(qr(e.basename)) : "",
    u = Fv[l],
    c = u.encodePath,
    f = u.decodePath;
  function d() {
    var E = f(Rr());
    return o && (E = Yp(E, o)), Le(E);
  }
  var p = Wu();
  function g(E) {
    Ee(_, E), (_.length = t.length), p.notifyListeners(_.location, _.action);
  }
  var x = !1,
    y = null;
  function N(E, R) {
    return (
      E.pathname === R.pathname && E.search === R.search && E.hash === R.hash
    );
  }
  function v() {
    var E = Rr(),
      R = c(E);
    if (E !== R) wl(R);
    else {
      var O = d(),
        V = _.location;
      if ((!x && N(V, O)) || y === ze(O)) return;
      (y = null), m(O);
    }
  }
  function m(E) {
    if (x) (x = !1), g();
    else {
      var R = "POP";
      p.confirmTransitionTo(E, R, a, function (O) {
        O ? g({ action: R, location: E }) : h(E);
      });
    }
  }
  function h(E) {
    var R = _.location,
      O = k.lastIndexOf(ze(R));
    O === -1 && (O = 0);
    var V = k.lastIndexOf(ze(E));
    V === -1 && (V = 0);
    var B = O - V;
    B && ((x = !0), H(B));
  }
  var w = Rr(),
    b = c(w);
  w !== b && wl(b);
  var S = d(),
    k = [ze(S)];
  function T(E) {
    var R = document.querySelector("base"),
      O = "";
    return (
      R && R.getAttribute("href") && (O = Xp(window.location.href)),
      O + "#" + c(o + ze(E))
    );
  }
  function $(E, R) {
    var O = "PUSH",
      V = Le(E, void 0, void 0, _.location);
    p.confirmTransitionTo(V, O, a, function (B) {
      if (B) {
        var ye = ze(V),
          ce = c(o + ye),
          we = Rr() !== ce;
        if (we) {
          (y = ye), Dv(ce);
          var wn = k.lastIndexOf(ze(_.location)),
            jc = k.slice(0, wn + 1);
          jc.push(ye), (k = jc), g({ action: O, location: V });
        } else g();
      }
    });
  }
  function M(E, R) {
    var O = "REPLACE",
      V = Le(E, void 0, void 0, _.location);
    p.confirmTransitionTo(V, O, a, function (B) {
      if (B) {
        var ye = ze(V),
          ce = c(o + ye),
          we = Rr() !== ce;
        we && ((y = ye), wl(ce));
        var wn = k.indexOf(ze(_.location));
        wn !== -1 && (k[wn] = ye), g({ action: O, location: V });
      }
    });
  }
  function H(E) {
    t.go(E);
  }
  function le() {
    H(-1);
  }
  function xe() {
    H(1);
  }
  var pe = 0;
  function oe(E) {
    (pe += E),
      pe === 1 && E === 1
        ? window.addEventListener(Ff, v)
        : pe === 0 && window.removeEventListener(Ff, v);
  }
  var et = !1;
  function Be(E) {
    E === void 0 && (E = !1);
    var R = p.setPrompt(E);
    return (
      et || (oe(1), (et = !0)),
      function () {
        return et && ((et = !1), oe(-1)), R();
      }
    );
  }
  function I(E) {
    var R = p.appendListener(E);
    return (
      oe(1),
      function () {
        oe(-1), R();
      }
    );
  }
  var _ = {
    length: t.length,
    action: "POP",
    location: S,
    createHref: T,
    push: $,
    replace: M,
    go: H,
    goBack: le,
    goForward: xe,
    block: Be,
    listen: I,
  };
  return _;
}
function Df(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Hv(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.getUserConfirmation,
    r = t.initialEntries,
    a = r === void 0 ? ["/"] : r,
    i = t.initialIndex,
    l = i === void 0 ? 0 : i,
    o = t.keyLength,
    u = o === void 0 ? 6 : o,
    c = Wu();
  function f(T) {
    Ee(k, T),
      (k.length = k.entries.length),
      c.notifyListeners(k.location, k.action);
  }
  function d() {
    return Math.random().toString(36).substr(2, u);
  }
  var p = Df(l, 0, a.length - 1),
    g = a.map(function (T) {
      return typeof T == "string"
        ? Le(T, void 0, d())
        : Le(T, void 0, T.key || d());
    }),
    x = ze;
  function y(T, $) {
    var M = "PUSH",
      H = Le(T, $, d(), k.location);
    c.confirmTransitionTo(H, M, n, function (le) {
      if (le) {
        var xe = k.index,
          pe = xe + 1,
          oe = k.entries.slice(0);
        oe.length > pe ? oe.splice(pe, oe.length - pe, H) : oe.push(H),
          f({ action: M, location: H, index: pe, entries: oe });
      }
    });
  }
  function N(T, $) {
    var M = "REPLACE",
      H = Le(T, $, d(), k.location);
    c.confirmTransitionTo(H, M, n, function (le) {
      le && ((k.entries[k.index] = H), f({ action: M, location: H }));
    });
  }
  function v(T) {
    var $ = Df(k.index + T, 0, k.entries.length - 1),
      M = "POP",
      H = k.entries[$];
    c.confirmTransitionTo(H, M, n, function (le) {
      le ? f({ action: M, location: H, index: $ }) : f();
    });
  }
  function m() {
    v(-1);
  }
  function h() {
    v(1);
  }
  function w(T) {
    var $ = k.index + T;
    return $ >= 0 && $ < k.entries.length;
  }
  function b(T) {
    return T === void 0 && (T = !1), c.setPrompt(T);
  }
  function S(T) {
    return c.appendListener(T);
  }
  var k = {
    length: g.length,
    action: "POP",
    location: g[p],
    index: p,
    entries: g,
    createHref: x,
    push: y,
    replace: N,
    go: v,
    goBack: m,
    goForward: h,
    canGo: w,
    block: b,
    listen: S,
  };
  return k;
}
var kr = { exports: {} },
  Bv =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    },
  Qi = Bv;
kr.exports = Jp;
kr.exports.parse = Vu;
kr.exports.compile = Vv;
kr.exports.tokensToFunction = qp;
kr.exports.tokensToRegExp = Zp;
var Wv = new RegExp(
  [
    "(\\\\.)",
    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
  ].join("|"),
  "g"
);
function Vu(e, t) {
  for (
    var n = [], r = 0, a = 0, i = "", l = (t && t.delimiter) || "/", o;
    (o = Wv.exec(e)) != null;

  ) {
    var u = o[0],
      c = o[1],
      f = o.index;
    if (((i += e.slice(a, f)), (a = f + u.length), c)) {
      i += c[1];
      continue;
    }
    var d = e[a],
      p = o[2],
      g = o[3],
      x = o[4],
      y = o[5],
      N = o[6],
      v = o[7];
    i && (n.push(i), (i = ""));
    var m = p != null && d != null && d !== p,
      h = N === "+" || N === "*",
      w = N === "?" || N === "*",
      b = o[2] || l,
      S = x || y;
    n.push({
      name: g || r++,
      prefix: p || "",
      delimiter: b,
      optional: w,
      repeat: h,
      partial: m,
      asterisk: !!v,
      pattern: S ? Kv(S) : v ? ".*" : "[^" + wi(b) + "]+?",
    });
  }
  return a < e.length && (i += e.substr(a)), i && n.push(i), n;
}
function Vv(e, t) {
  return qp(Vu(e, t), t);
}
function Yv(e) {
  return encodeURI(e).replace(/[\/?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function Qv(e) {
  return encodeURI(e).replace(/[?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function qp(e, t) {
  for (var n = new Array(e.length), r = 0; r < e.length; r++)
    typeof e[r] == "object" &&
      (n[r] = new RegExp("^(?:" + e[r].pattern + ")$", Qu(t)));
  return function (a, i) {
    for (
      var l = "",
        o = a || {},
        u = i || {},
        c = u.pretty ? Yv : encodeURIComponent,
        f = 0;
      f < e.length;
      f++
    ) {
      var d = e[f];
      if (typeof d == "string") {
        l += d;
        continue;
      }
      var p = o[d.name],
        g;
      if (p == null)
        if (d.optional) {
          d.partial && (l += d.prefix);
          continue;
        } else throw new TypeError('Expected "' + d.name + '" to be defined');
      if (Qi(p)) {
        if (!d.repeat)
          throw new TypeError(
            'Expected "' +
              d.name +
              '" to not repeat, but received `' +
              JSON.stringify(p) +
              "`"
          );
        if (p.length === 0) {
          if (d.optional) continue;
          throw new TypeError('Expected "' + d.name + '" to not be empty');
        }
        for (var x = 0; x < p.length; x++) {
          if (((g = c(p[x])), !n[f].test(g)))
            throw new TypeError(
              'Expected all "' +
                d.name +
                '" to match "' +
                d.pattern +
                '", but received `' +
                JSON.stringify(g) +
                "`"
            );
          l += (x === 0 ? d.prefix : d.delimiter) + g;
        }
        continue;
      }
      if (((g = d.asterisk ? Qv(p) : c(p)), !n[f].test(g)))
        throw new TypeError(
          'Expected "' +
            d.name +
            '" to match "' +
            d.pattern +
            '", but received "' +
            g +
            '"'
        );
      l += d.prefix + g;
    }
    return l;
  };
}
function wi(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function Kv(e) {
  return e.replace(/([=!:$\/()])/g, "\\$1");
}
function Yu(e, t) {
  return (e.keys = t), e;
}
function Qu(e) {
  return e && e.sensitive ? "" : "i";
}
function Gv(e, t) {
  var n = e.source.match(/\((?!\?)/g);
  if (n)
    for (var r = 0; r < n.length; r++)
      t.push({
        name: r,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        asterisk: !1,
        pattern: null,
      });
  return Yu(e, t);
}
function Xv(e, t, n) {
  for (var r = [], a = 0; a < e.length; a++) r.push(Jp(e[a], t, n).source);
  var i = new RegExp("(?:" + r.join("|") + ")", Qu(n));
  return Yu(i, t);
}
function qv(e, t, n) {
  return Zp(Vu(e, n), t, n);
}
function Zp(e, t, n) {
  Qi(t) || ((n = t || n), (t = [])), (n = n || {});
  for (var r = n.strict, a = n.end !== !1, i = "", l = 0; l < e.length; l++) {
    var o = e[l];
    if (typeof o == "string") i += wi(o);
    else {
      var u = wi(o.prefix),
        c = "(?:" + o.pattern + ")";
      t.push(o),
        o.repeat && (c += "(?:" + u + c + ")*"),
        o.optional
          ? o.partial
            ? (c = u + "(" + c + ")?")
            : (c = "(?:" + u + "(" + c + "))?")
          : (c = u + "(" + c + ")"),
        (i += c);
    }
  }
  var f = wi(n.delimiter || "/"),
    d = i.slice(-f.length) === f;
  return (
    r || (i = (d ? i.slice(0, -f.length) : i) + "(?:" + f + "(?=$))?"),
    a ? (i += "$") : (i += r && d ? "" : "(?=" + f + "|$)"),
    Yu(new RegExp("^" + i, Qu(n)), t)
  );
}
function Jp(e, t, n) {
  return (
    Qi(t) || ((n = t || n), (t = [])),
    (n = n || {}),
    e instanceof RegExp ? Gv(e, t) : Qi(e) ? Xv(e, t, n) : qv(e, t, n)
  );
}
var Zv = kr.exports;
const e1 = Go(Zv);
var t1 = { exports: {} },
  Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ge = typeof Symbol == "function" && Symbol.for,
  Ku = ge ? Symbol.for("react.element") : 60103,
  Gu = ge ? Symbol.for("react.portal") : 60106,
  xs = ge ? Symbol.for("react.fragment") : 60107,
  ys = ge ? Symbol.for("react.strict_mode") : 60108,
  ws = ge ? Symbol.for("react.profiler") : 60114,
  bs = ge ? Symbol.for("react.provider") : 60109,
  js = ge ? Symbol.for("react.context") : 60110,
  Xu = ge ? Symbol.for("react.async_mode") : 60111,
  Ns = ge ? Symbol.for("react.concurrent_mode") : 60111,
  ks = ge ? Symbol.for("react.forward_ref") : 60112,
  Ss = ge ? Symbol.for("react.suspense") : 60113,
  Jv = ge ? Symbol.for("react.suspense_list") : 60120,
  Es = ge ? Symbol.for("react.memo") : 60115,
  Cs = ge ? Symbol.for("react.lazy") : 60116,
  eg = ge ? Symbol.for("react.block") : 60121,
  tg = ge ? Symbol.for("react.fundamental") : 60117,
  ng = ge ? Symbol.for("react.responder") : 60118,
  rg = ge ? Symbol.for("react.scope") : 60119;
function Ze(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ku:
        switch (((e = e.type), e)) {
          case Xu:
          case Ns:
          case xs:
          case ws:
          case ys:
          case Ss:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case js:
              case ks:
              case Cs:
              case Es:
              case bs:
                return e;
              default:
                return t;
            }
        }
      case Gu:
        return t;
    }
  }
}
function n1(e) {
  return Ze(e) === Ns;
}
Q.AsyncMode = Xu;
Q.ConcurrentMode = Ns;
Q.ContextConsumer = js;
Q.ContextProvider = bs;
Q.Element = Ku;
Q.ForwardRef = ks;
Q.Fragment = xs;
Q.Lazy = Cs;
Q.Memo = Es;
Q.Portal = Gu;
Q.Profiler = ws;
Q.StrictMode = ys;
Q.Suspense = Ss;
Q.isAsyncMode = function (e) {
  return n1(e) || Ze(e) === Xu;
};
Q.isConcurrentMode = n1;
Q.isContextConsumer = function (e) {
  return Ze(e) === js;
};
Q.isContextProvider = function (e) {
  return Ze(e) === bs;
};
Q.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ku;
};
Q.isForwardRef = function (e) {
  return Ze(e) === ks;
};
Q.isFragment = function (e) {
  return Ze(e) === xs;
};
Q.isLazy = function (e) {
  return Ze(e) === Cs;
};
Q.isMemo = function (e) {
  return Ze(e) === Es;
};
Q.isPortal = function (e) {
  return Ze(e) === Gu;
};
Q.isProfiler = function (e) {
  return Ze(e) === ws;
};
Q.isStrictMode = function (e) {
  return Ze(e) === ys;
};
Q.isSuspense = function (e) {
  return Ze(e) === Ss;
};
Q.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === xs ||
    e === Ns ||
    e === ws ||
    e === ys ||
    e === Ss ||
    e === Jv ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Cs ||
        e.$$typeof === Es ||
        e.$$typeof === bs ||
        e.$$typeof === js ||
        e.$$typeof === ks ||
        e.$$typeof === tg ||
        e.$$typeof === ng ||
        e.$$typeof === rg ||
        e.$$typeof === eg))
  );
};
Q.typeOf = Ze;
t1.exports = Q;
var ag = t1.exports;
function Ps(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    a,
    i;
  for (i = 0; i < r.length; i++)
    (a = r[i]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var r1 = ag,
  ig = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  sg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  a1 = {};
a1[r1.ForwardRef] = ig;
a1[r1.Memo] = sg;
var bl = 1073741823,
  Uf =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {};
function lg() {
  var e = "__global_unique_id__";
  return (Uf[e] = (Uf[e] || 0) + 1);
}
function og(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ug(e) {
  var t = [];
  return {
    on: function (r) {
      t.push(r);
    },
    off: function (r) {
      t = t.filter(function (a) {
        return a !== r;
      });
    },
    get: function () {
      return e;
    },
    set: function (r, a) {
      (e = r),
        t.forEach(function (i) {
          return i(e, a);
        });
    },
  };
}
function cg(e) {
  return Array.isArray(e) ? e[0] : e;
}
function fg(e, t) {
  var n,
    r,
    a = "__create-react-context-" + lg() + "__",
    i = (function (o) {
      Nt(u, o);
      function u() {
        for (var f, d = arguments.length, p = new Array(d), g = 0; g < d; g++)
          p[g] = arguments[g];
        return (
          (f = o.call.apply(o, [this].concat(p)) || this),
          (f.emitter = ug(f.props.value)),
          f
        );
      }
      var c = u.prototype;
      return (
        (c.getChildContext = function () {
          var d;
          return (d = {}), (d[a] = this.emitter), d;
        }),
        (c.componentWillReceiveProps = function (d) {
          if (this.props.value !== d.value) {
            var p = this.props.value,
              g = d.value,
              x;
            og(p, g)
              ? (x = 0)
              : ((x = typeof t == "function" ? t(p, g) : bl),
                (x |= 0),
                x !== 0 && this.emitter.set(d.value, x));
          }
        }),
        (c.render = function () {
          return this.props.children;
        }),
        u
      );
    })(F.Component);
  i.childContextTypes = ((n = {}), (n[a] = D.object.isRequired), n);
  var l = (function (o) {
    Nt(u, o);
    function u() {
      for (var f, d = arguments.length, p = new Array(d), g = 0; g < d; g++)
        p[g] = arguments[g];
      return (
        (f = o.call.apply(o, [this].concat(p)) || this),
        (f.observedBits = void 0),
        (f.state = { value: f.getValue() }),
        (f.onUpdate = function (x, y) {
          var N = f.observedBits | 0;
          N & y && f.setState({ value: f.getValue() });
        }),
        f
      );
    }
    var c = u.prototype;
    return (
      (c.componentWillReceiveProps = function (d) {
        var p = d.observedBits;
        this.observedBits = p ?? bl;
      }),
      (c.componentDidMount = function () {
        this.context[a] && this.context[a].on(this.onUpdate);
        var d = this.props.observedBits;
        this.observedBits = d ?? bl;
      }),
      (c.componentWillUnmount = function () {
        this.context[a] && this.context[a].off(this.onUpdate);
      }),
      (c.getValue = function () {
        return this.context[a] ? this.context[a].get() : e;
      }),
      (c.render = function () {
        return cg(this.props.children)(this.state.value);
      }),
      u
    );
  })(F.Component);
  return (
    (l.contextTypes = ((r = {}), (r[a] = D.object), r)),
    { Provider: i, Consumer: l }
  );
}
var dg = F.createContext || fg,
  i1 = function (t) {
    var n = dg();
    return (n.displayName = t), n;
  },
  s1 = i1("Router-History"),
  dn = i1("Router"),
  Ts = (function (e) {
    Nt(t, e),
      (t.computeRootMatch = function (a) {
        return { path: "/", url: "/", params: {}, isExact: a === "/" };
      });
    function t(r) {
      var a;
      return (
        (a = e.call(this, r) || this),
        (a.state = { location: r.history.location }),
        (a._isMounted = !1),
        (a._pendingLocation = null),
        r.staticContext ||
          (a.unlisten = r.history.listen(function (i) {
            a._pendingLocation = i;
          })),
        a
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        var a = this;
        (this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (i) {
              a._isMounted && a.setState({ location: i });
            })),
          this._pendingLocation &&
            this.setState({ location: this._pendingLocation });
      }),
      (n.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (n.render = function () {
        return F.createElement(
          dn.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          F.createElement(s1.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          })
        );
      }),
      t
    );
  })(F.Component);
F.Component;
var mg = (function (e) {
    Nt(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.props.onMount && this.props.onMount.call(this, this);
      }),
      (n.componentDidUpdate = function (a) {
        this.props.onUpdate && this.props.onUpdate.call(this, this, a);
      }),
      (n.componentWillUnmount = function () {
        this.props.onUnmount && this.props.onUnmount.call(this, this);
      }),
      (n.render = function () {
        return null;
      }),
      t
    );
  })(F.Component),
  jl = {},
  pg = 1e4,
  Hf = 0;
function hg(e) {
  if (jl[e]) return jl[e];
  var t = e1.compile(e);
  return Hf < pg && ((jl[e] = t), Hf++), t;
}
function Bf(e, t) {
  return (
    e === void 0 && (e = "/"),
    t === void 0 && (t = {}),
    e === "/" ? e : hg(e)(t, { pretty: !0 })
  );
}
function vg(e) {
  var t = e.computedMatch,
    n = e.to,
    r = e.push,
    a = r === void 0 ? !1 : r;
  return F.createElement(dn.Consumer, null, function (i) {
    i || yn(!1);
    var l = i.history,
      o = i.staticContext,
      u = a ? l.push : l.replace,
      c = Le(
        t
          ? typeof n == "string"
            ? Bf(n, t.params)
            : Ee({}, n, { pathname: Bf(n.pathname, t.params) })
          : n
      );
    return o
      ? (u(c), null)
      : F.createElement(mg, {
          onMount: function () {
            u(c);
          },
          onUpdate: function (d, p) {
            var g = Le(p.to);
            Lv(g, Ee({}, c, { key: g.key })) || u(c);
          },
          to: n,
        });
  });
}
var Wf = {},
  gg = 1e4,
  Vf = 0;
function xg(e, t) {
  var n = "" + t.end + t.strict + t.sensitive,
    r = Wf[n] || (Wf[n] = {});
  if (r[e]) return r[e];
  var a = [],
    i = e1(e, a, t),
    l = { regexp: i, keys: a };
  return Vf < gg && ((r[e] = l), Vf++), l;
}
function qu(e, t) {
  t === void 0 && (t = {}),
    (typeof t == "string" || Array.isArray(t)) && (t = { path: t });
  var n = t,
    r = n.path,
    a = n.exact,
    i = a === void 0 ? !1 : a,
    l = n.strict,
    o = l === void 0 ? !1 : l,
    u = n.sensitive,
    c = u === void 0 ? !1 : u,
    f = [].concat(r);
  return f.reduce(function (d, p) {
    if (!p && p !== "") return null;
    if (d) return d;
    var g = xg(p, { end: i, strict: o, sensitive: c }),
      x = g.regexp,
      y = g.keys,
      N = x.exec(e);
    if (!N) return null;
    var v = N[0],
      m = N.slice(1),
      h = e === v;
    return i && !h
      ? null
      : {
          path: p,
          url: p === "/" && v === "" ? "/" : v,
          isExact: h,
          params: y.reduce(function (w, b, S) {
            return (w[b.name] = m[S]), w;
          }, {}),
        };
  }, null);
}
function yg(e) {
  return F.Children.count(e) === 0;
}
var kt = (function (e) {
  Nt(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var a = this;
      return F.createElement(dn.Consumer, null, function (i) {
        i || yn(!1);
        var l = a.props.location || i.location,
          o = a.props.computedMatch
            ? a.props.computedMatch
            : a.props.path
            ? qu(l.pathname, a.props)
            : i.match,
          u = Ee({}, i, { location: l, match: o }),
          c = a.props,
          f = c.children,
          d = c.component,
          p = c.render;
        return (
          Array.isArray(f) && yg(f) && (f = null),
          F.createElement(
            dn.Provider,
            { value: u },
            u.match
              ? f
                ? typeof f == "function"
                  ? f(u)
                  : f
                : d
                ? F.createElement(d, u)
                : p
                ? p(u)
                : null
              : typeof f == "function"
              ? f(u)
              : null
          )
        );
      });
    }),
    t
  );
})(F.Component);
function Zu(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function wg(e, t) {
  return e ? Ee({}, t, { pathname: Zu(e) + t.pathname }) : t;
}
function bg(e, t) {
  if (!e) return t;
  var n = Zu(e);
  return t.pathname.indexOf(n) !== 0
    ? t
    : Ee({}, t, { pathname: t.pathname.substr(n.length) });
}
function Yf(e) {
  return typeof e == "string" ? e : ze(e);
}
function Nl(e) {
  return function () {
    yn(!1);
  };
}
function Qf() {}
F.Component;
var jg = (function (e) {
    Nt(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return (
      (n.render = function () {
        var a = this;
        return F.createElement(dn.Consumer, null, function (i) {
          i || yn(!1);
          var l = a.props.location || i.location,
            o,
            u;
          return (
            F.Children.forEach(a.props.children, function (c) {
              if (u == null && F.isValidElement(c)) {
                o = c;
                var f = c.props.path || c.props.from;
                u = f ? qu(l.pathname, Ee({}, c.props, { path: f })) : i.match;
              }
            }),
            u ? F.cloneElement(o, { location: l, computedMatch: u }) : null
          );
        });
      }),
      t
    );
  })(F.Component),
  l1 = F.useContext;
function Ca() {
  return l1(s1);
}
function _s() {
  return l1(dn).location;
}
var Ng = (function (e) {
  Nt(t, e);
  function t() {
    for (var r, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
      i[l] = arguments[l];
    return (
      (r = e.call.apply(e, [this].concat(i)) || this),
      (r.history = $v(r.props)),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      return F.createElement(Ts, {
        history: this.history,
        children: this.props.children,
      });
    }),
    t
  );
})(F.Component);
F.Component;
var To = function (t, n) {
    return typeof t == "function" ? t(n) : t;
  },
  _o = function (t, n) {
    return typeof t == "string" ? Le(t, null, null, n) : t;
  },
  Ju = function (t) {
    return t;
  },
  yr = F.forwardRef;
typeof yr > "u" && (yr = Ju);
function kg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Sg = yr(function (e, t) {
    var n = e.innerRef,
      r = e.navigate,
      a = e.onClick,
      i = Ps(e, ["innerRef", "navigate", "onClick"]),
      l = i.target,
      o = Ee({}, i, {
        onClick: function (c) {
          try {
            a && a(c);
          } catch (f) {
            throw (c.preventDefault(), f);
          }
          !c.defaultPrevented &&
            c.button === 0 &&
            (!l || l === "_self") &&
            !kg(c) &&
            (c.preventDefault(), r());
        },
      });
    return Ju !== yr ? (o.ref = t || n) : (o.ref = n), F.createElement("a", o);
  }),
  Eg = yr(function (e, t) {
    var n = e.component,
      r = n === void 0 ? Sg : n,
      a = e.replace,
      i = e.to,
      l = e.innerRef,
      o = Ps(e, ["component", "replace", "to", "innerRef"]);
    return F.createElement(dn.Consumer, null, function (u) {
      u || yn(!1);
      var c = u.history,
        f = _o(To(i, u.location), u.location),
        d = f ? c.createHref(f) : "",
        p = Ee({}, o, {
          href: d,
          navigate: function () {
            var x = To(i, u.location),
              y = ze(u.location) === ze(_o(x)),
              N = a || y ? c.replace : c.push;
            N(x);
          },
        });
      return (
        Ju !== yr ? (p.ref = t || l) : (p.innerRef = l), F.createElement(r, p)
      );
    });
  }),
  o1 = function (t) {
    return t;
  },
  Ki = F.forwardRef;
typeof Ki > "u" && (Ki = o1);
function Cg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t
    .filter(function (r) {
      return r;
    })
    .join(" ");
}
Ki(function (e, t) {
  var n = e["aria-current"],
    r = n === void 0 ? "page" : n,
    a = e.activeClassName,
    i = a === void 0 ? "active" : a,
    l = e.activeStyle,
    o = e.className,
    u = e.exact,
    c = e.isActive,
    f = e.location,
    d = e.sensitive,
    p = e.strict,
    g = e.style,
    x = e.to,
    y = e.innerRef,
    N = Ps(e, [
      "aria-current",
      "activeClassName",
      "activeStyle",
      "className",
      "exact",
      "isActive",
      "location",
      "sensitive",
      "strict",
      "style",
      "to",
      "innerRef",
    ]);
  return F.createElement(dn.Consumer, null, function (v) {
    v || yn(!1);
    var m = f || v.location,
      h = _o(To(x, m), m),
      w = h.pathname,
      b = w && w.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      S = b
        ? qu(m.pathname, { path: b, exact: u, sensitive: d, strict: p })
        : null,
      k = !!(c ? c(S, m) : S),
      T = typeof o == "function" ? o(k) : o,
      $ = typeof g == "function" ? g(k) : g;
    k && ((T = Cg(T, i)), ($ = Ee({}, $, l)));
    var M = Ee(
      { "aria-current": (k && r) || null, className: T, style: $, to: h },
      N
    );
    return (
      o1 !== Ki ? (M.ref = t || y) : (M.innerRef = y), F.createElement(Eg, M)
    );
  });
});
function Kf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kf(Object(n), !0).forEach(function (r) {
          me(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Kf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Gi(e) {
  "@babel/helpers - typeof";
  return (
    (Gi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Gi(e)
  );
}
function Pg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Tg(e, t, n) {
  return (
    t && Gf(e.prototype, t),
    n && Gf(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function me(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ec(e, t) {
  return Ig(e) || Lg(e, t) || u1(e, t) || Mg();
}
function Pa(e) {
  return _g(e) || Ag(e) || u1(e) || Og();
}
function _g(e) {
  if (Array.isArray(e)) return Io(e);
}
function Ig(e) {
  if (Array.isArray(e)) return e;
}
function Ag(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Lg(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      a = !0,
      i = !1,
      l,
      o;
    try {
      for (
        n = n.call(e);
        !(a = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t));
        a = !0
      );
    } catch (u) {
      (i = !0), (o = u);
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i) throw o;
      }
    }
    return r;
  }
}
function u1(e, t) {
  if (e) {
    if (typeof e == "string") return Io(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Io(e, t);
  }
}
function Io(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Og() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Xf = function () {},
  tc = {},
  c1 = {},
  f1 = null,
  d1 = { mark: Xf, measure: Xf };
try {
  typeof window < "u" && (tc = window),
    typeof document < "u" && (c1 = document),
    typeof MutationObserver < "u" && (f1 = MutationObserver),
    typeof performance < "u" && (d1 = performance);
} catch {}
var Rg = tc.navigator || {},
  qf = Rg.userAgent,
  Zf = qf === void 0 ? "" : qf,
  mn = tc,
  Z = c1,
  Jf = f1,
  Ga = d1;
mn.document;
var Ht =
    !!Z.documentElement &&
    !!Z.head &&
    typeof Z.addEventListener == "function" &&
    typeof Z.createElement == "function",
  m1 = ~Zf.indexOf("MSIE") || ~Zf.indexOf("Trident/"),
  Xa,
  qa,
  Za,
  Ja,
  ei,
  zt = "___FONT_AWESOME___",
  Ao = 16,
  p1 = "fa",
  h1 = "svg-inline--fa",
  zn = "data-fa-i2svg",
  Lo = "data-fa-pseudo-element",
  zg = "data-fa-pseudo-element-pending",
  nc = "data-prefix",
  rc = "data-icon",
  ed = "fontawesome-i2svg",
  $g = "async",
  Fg = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  v1 = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  X = "classic",
  ae = "sharp",
  ac = [X, ae];
function Ta(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[X];
    },
  });
}
var ga = Ta(
    ((Xa = {}),
    me(Xa, X, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      fakd: "kit",
      "fa-kit": "kit",
      "fa-kit-duotone": "kit",
    }),
    me(Xa, ae, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    }),
    Xa)
  ),
  xa = Ta(
    ((qa = {}),
    me(qa, X, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    me(qa, ae, { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }),
    qa)
  ),
  ya = Ta(
    ((Za = {}),
    me(Za, X, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    me(Za, ae, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    }),
    Za)
  ),
  Dg = Ta(
    ((Ja = {}),
    me(Ja, X, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    me(Ja, ae, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    }),
    Ja)
  ),
  Ug = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  g1 = "fa-layers-text",
  Hg =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Bg = Ta(
    ((ei = {}),
    me(ei, X, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    me(ei, ae, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
    ei)
  ),
  x1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Wg = x1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Vg = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Cn = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  wa = new Set();
Object.keys(xa[X]).map(wa.add.bind(wa));
Object.keys(xa[ae]).map(wa.add.bind(wa));
var Yg = []
    .concat(ac, Pa(wa), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      Cn.GROUP,
      Cn.SWAP_OPACITY,
      Cn.PRIMARY,
      Cn.SECONDARY,
    ])
    .concat(
      x1.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      Wg.map(function (e) {
        return "w-".concat(e);
      })
    ),
  Zr = mn.FontAwesomeConfig || {};
function Qg(e) {
  var t = Z.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function Kg(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Z && typeof Z.querySelector == "function") {
  var Gg = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  Gg.forEach(function (e) {
    var t = ec(e, 2),
      n = t[0],
      r = t[1],
      a = Kg(Qg(n));
    a != null && (Zr[r] = a);
  });
}
var y1 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: p1,
  replacementClass: h1,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Zr.familyPrefix && (Zr.cssPrefix = Zr.familyPrefix);
var wr = A(A({}, y1), Zr);
wr.autoReplaceSvg || (wr.observeMutations = !1);
var z = {};
Object.keys(y1).forEach(function (e) {
  Object.defineProperty(z, e, {
    enumerable: !0,
    set: function (n) {
      (wr[e] = n),
        Jr.forEach(function (r) {
          return r(z);
        });
    },
    get: function () {
      return wr[e];
    },
  });
});
Object.defineProperty(z, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (wr.cssPrefix = t),
      Jr.forEach(function (n) {
        return n(z);
      });
  },
  get: function () {
    return wr.cssPrefix;
  },
});
mn.FontAwesomeConfig = z;
var Jr = [];
function Xg(e) {
  return (
    Jr.push(e),
    function () {
      Jr.splice(Jr.indexOf(e), 1);
    }
  );
}
var Wt = Ao,
  wt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function qg(e) {
  if (!(!e || !Ht)) {
    var t = Z.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = Z.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a],
        l = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(l) > -1 && (r = i);
    }
    return Z.head.insertBefore(t, r), e;
  }
}
var Zg = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ba() {
  for (var e = 12, t = ""; e-- > 0; ) t += Zg[(Math.random() * 62) | 0];
  return t;
}
function Sr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function ic(e) {
  return e.classList
    ? Sr(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function w1(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Jg(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(w1(e[n]), '" ');
    }, "")
    .trim();
}
function Is(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function sc(e) {
  return (
    e.size !== wt.size ||
    e.x !== wt.x ||
    e.y !== wt.y ||
    e.rotate !== wt.rotate ||
    e.flipX ||
    e.flipY
  );
}
function ex(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    a = { transform: "translate(".concat(n / 2, " 256)") },
    i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    l = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    o = "rotate(".concat(t.rotate, " 0 0)"),
    u = { transform: "".concat(i, " ").concat(l, " ").concat(o) },
    c = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: a, inner: u, path: c };
}
function tx(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Ao : n,
    a = e.height,
    i = a === void 0 ? Ao : a,
    l = e.startCentered,
    o = l === void 0 ? !1 : l,
    u = "";
  return (
    o && m1
      ? (u += "translate("
          .concat(t.x / Wt - r / 2, "em, ")
          .concat(t.y / Wt - i / 2, "em) "))
      : o
      ? (u += "translate(calc(-50% + "
          .concat(t.x / Wt, "em), calc(-50% + ")
          .concat(t.y / Wt, "em)) "))
      : (u += "translate(".concat(t.x / Wt, "em, ").concat(t.y / Wt, "em) ")),
    (u += "scale("
      .concat((t.size / Wt) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Wt) * (t.flipY ? -1 : 1), ") ")),
    (u += "rotate(".concat(t.rotate, "deg) ")),
    u
  );
}
var nx = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function b1() {
  var e = p1,
    t = h1,
    n = z.cssPrefix,
    r = z.replacementClass,
    a = nx;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"),
      l = new RegExp("\\--".concat(e, "\\-"), "g"),
      o = new RegExp("\\.".concat(t), "g");
    a = a
      .replace(i, ".".concat(n, "-"))
      .replace(l, "--".concat(n, "-"))
      .replace(o, ".".concat(r));
  }
  return a;
}
var td = !1;
function kl() {
  z.autoAddCss && !td && (qg(b1()), (td = !0));
}
var rx = {
    mixout: function () {
      return { dom: { css: b1, insertCss: kl } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          kl();
        },
        beforeI2svg: function () {
          kl();
        },
      };
    },
  },
  $t = mn || {};
$t[zt] || ($t[zt] = {});
$t[zt].styles || ($t[zt].styles = {});
$t[zt].hooks || ($t[zt].hooks = {});
$t[zt].shims || ($t[zt].shims = []);
var dt = $t[zt],
  j1 = [],
  ax = function e() {
    Z.removeEventListener("DOMContentLoaded", e),
      (Xi = 1),
      j1.map(function (t) {
        return t();
      });
  },
  Xi = !1;
Ht &&
  ((Xi = (Z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    Z.readyState
  )),
  Xi || Z.addEventListener("DOMContentLoaded", ax));
function ix(e) {
  Ht && (Xi ? setTimeout(e, 0) : j1.push(e));
}
function _a(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    a = e.children,
    i = a === void 0 ? [] : a;
  return typeof e == "string"
    ? w1(e)
    : "<"
        .concat(t, " ")
        .concat(Jg(r), ">")
        .concat(i.map(_a).join(""), "</")
        .concat(t, ">");
}
function nd(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var sx = function (t, n) {
    return function (r, a, i, l) {
      return t.call(n, r, a, i, l);
    };
  },
  Sl = function (t, n, r, a) {
    var i = Object.keys(t),
      l = i.length,
      o = a !== void 0 ? sx(n, a) : n,
      u,
      c,
      f;
    for (
      r === void 0 ? ((u = 1), (f = t[i[0]])) : ((u = 0), (f = r));
      u < l;
      u++
    )
      (c = i[u]), (f = o(f, t[c], c, t));
    return f;
  };
function lx(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320
        ? t.push(((a & 1023) << 10) + (i & 1023) + 65536)
        : (t.push(a), n--);
    } else t.push(a);
  }
  return t;
}
function Oo(e) {
  var t = lx(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function ox(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    a;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((a = e.charCodeAt(t + 1)), a >= 56320 && a <= 57343)
    ? (r - 55296) * 1024 + a - 56320 + 65536
    : r;
}
function rd(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      a = !!r.icon;
    return a ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Mo(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    a = r === void 0 ? !1 : r,
    i = rd(t);
  typeof dt.hooks.addPack == "function" && !a
    ? dt.hooks.addPack(e, rd(t))
    : (dt.styles[e] = A(A({}, dt.styles[e] || {}), i)),
    e === "fas" && Mo("fa", t);
}
var ti,
  ni,
  ri,
  nr = dt.styles,
  ux = dt.shims,
  cx =
    ((ti = {}),
    me(ti, X, Object.values(ya[X])),
    me(ti, ae, Object.values(ya[ae])),
    ti),
  lc = null,
  N1 = {},
  k1 = {},
  S1 = {},
  E1 = {},
  C1 = {},
  fx =
    ((ni = {}),
    me(ni, X, Object.keys(ga[X])),
    me(ni, ae, Object.keys(ga[ae])),
    ni);
function dx(e) {
  return ~Yg.indexOf(e);
}
function mx(e, t) {
  var n = t.split("-"),
    r = n[0],
    a = n.slice(1).join("-");
  return r === e && a !== "" && !dx(a) ? a : null;
}
var P1 = function () {
  var t = function (i) {
    return Sl(
      nr,
      function (l, o, u) {
        return (l[u] = Sl(o, i, {})), l;
      },
      {}
    );
  };
  (N1 = t(function (a, i, l) {
    if ((i[3] && (a[i[3]] = l), i[2])) {
      var o = i[2].filter(function (u) {
        return typeof u == "number";
      });
      o.forEach(function (u) {
        a[u.toString(16)] = l;
      });
    }
    return a;
  })),
    (k1 = t(function (a, i, l) {
      if (((a[l] = l), i[2])) {
        var o = i[2].filter(function (u) {
          return typeof u == "string";
        });
        o.forEach(function (u) {
          a[u] = l;
        });
      }
      return a;
    })),
    (C1 = t(function (a, i, l) {
      var o = i[2];
      return (
        (a[l] = l),
        o.forEach(function (u) {
          a[u] = l;
        }),
        a
      );
    }));
  var n = "far" in nr || z.autoFetchSvg,
    r = Sl(
      ux,
      function (a, i) {
        var l = i[0],
          o = i[1],
          u = i[2];
        return (
          o === "far" && !n && (o = "fas"),
          typeof l == "string" && (a.names[l] = { prefix: o, iconName: u }),
          typeof l == "number" &&
            (a.unicodes[l.toString(16)] = { prefix: o, iconName: u }),
          a
        );
      },
      { names: {}, unicodes: {} }
    );
  (S1 = r.names),
    (E1 = r.unicodes),
    (lc = As(z.styleDefault, { family: z.familyDefault }));
};
Xg(function (e) {
  lc = As(e.styleDefault, { family: z.familyDefault });
});
P1();
function oc(e, t) {
  return (N1[e] || {})[t];
}
function px(e, t) {
  return (k1[e] || {})[t];
}
function Pn(e, t) {
  return (C1[e] || {})[t];
}
function T1(e) {
  return S1[e] || { prefix: null, iconName: null };
}
function hx(e) {
  var t = E1[e],
    n = oc("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function pn() {
  return lc;
}
var uc = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function As(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? X : n,
    a = ga[r][e],
    i = xa[r][e] || xa[r][a],
    l = e in dt.styles ? e : null;
  return i || l || null;
}
var ad =
  ((ri = {}),
  me(ri, X, Object.keys(ya[X])),
  me(ri, ae, Object.keys(ya[ae])),
  ri);
function Ls(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    a = r === void 0 ? !1 : r,
    i =
      ((t = {}),
      me(t, X, "".concat(z.cssPrefix, "-").concat(X)),
      me(t, ae, "".concat(z.cssPrefix, "-").concat(ae)),
      t),
    l = null,
    o = X;
  (e.includes(i[X]) ||
    e.some(function (c) {
      return ad[X].includes(c);
    })) &&
    (o = X),
    (e.includes(i[ae]) ||
      e.some(function (c) {
        return ad[ae].includes(c);
      })) &&
      (o = ae);
  var u = e.reduce(function (c, f) {
    var d = mx(z.cssPrefix, f);
    if (
      (nr[f]
        ? ((f = cx[o].includes(f) ? Dg[o][f] : f), (l = f), (c.prefix = f))
        : fx[o].indexOf(f) > -1
        ? ((l = f), (c.prefix = As(f, { family: o })))
        : d
        ? (c.iconName = d)
        : f !== z.replacementClass &&
          f !== i[X] &&
          f !== i[ae] &&
          c.rest.push(f),
      !a && c.prefix && c.iconName)
    ) {
      var p = l === "fa" ? T1(c.iconName) : {},
        g = Pn(c.prefix, c.iconName);
      p.prefix && (l = null),
        (c.iconName = p.iconName || g || c.iconName),
        (c.prefix = p.prefix || c.prefix),
        c.prefix === "far" &&
          !nr.far &&
          nr.fas &&
          !z.autoFetchSvg &&
          (c.prefix = "fas");
    }
    return c;
  }, uc());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (u.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (u.prefix = "fad"),
    !u.prefix &&
      o === ae &&
      (nr.fass || z.autoFetchSvg) &&
      ((u.prefix = "fass"),
      (u.iconName = Pn(u.prefix, u.iconName) || u.iconName)),
    (u.prefix === "fa" || l === "fa") && (u.prefix = pn() || "fas"),
    u
  );
}
var vx = (function () {
    function e() {
      Pg(this, e), (this.definitions = {});
    }
    return (
      Tg(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, a = new Array(r), i = 0;
              i < r;
              i++
            )
              a[i] = arguments[i];
            var l = a.reduce(this._pullDefinitions, {});
            Object.keys(l).forEach(function (o) {
              (n.definitions[o] = A(A({}, n.definitions[o] || {}), l[o])),
                Mo(o, l[o]);
              var u = ya[X][o];
              u && Mo(u, l[o]), P1();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var a = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(a).map(function (i) {
                var l = a[i],
                  o = l.prefix,
                  u = l.iconName,
                  c = l.icon,
                  f = c[2];
                n[o] || (n[o] = {}),
                  f.length > 0 &&
                    f.forEach(function (d) {
                      typeof d == "string" && (n[o][d] = c);
                    }),
                  (n[o][u] = c);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  id = [],
  rr = {},
  fr = {},
  gx = Object.keys(fr);
function xx(e, t) {
  var n = t.mixoutsTo;
  return (
    (id = e),
    (rr = {}),
    Object.keys(fr).forEach(function (r) {
      gx.indexOf(r) === -1 && delete fr[r];
    }),
    id.forEach(function (r) {
      var a = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(a).forEach(function (l) {
          typeof a[l] == "function" && (n[l] = a[l]),
            Gi(a[l]) === "object" &&
              Object.keys(a[l]).forEach(function (o) {
                n[l] || (n[l] = {}), (n[l][o] = a[l][o]);
              });
        }),
        r.hooks)
      ) {
        var i = r.hooks();
        Object.keys(i).forEach(function (l) {
          rr[l] || (rr[l] = []), rr[l].push(i[l]);
        });
      }
      r.provides && r.provides(fr);
    }),
    n
  );
}
function Ro(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
    a < n;
    a++
  )
    r[a - 2] = arguments[a];
  var i = rr[e] || [];
  return (
    i.forEach(function (l) {
      t = l.apply(null, [t].concat(r));
    }),
    t
  );
}
function $n(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var a = rr[e] || [];
  a.forEach(function (i) {
    i.apply(null, n);
  });
}
function Ft() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return fr[e] ? fr[e].apply(null, t) : void 0;
}
function zo(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || pn();
  if (t)
    return (t = Pn(n, t) || t), nd(_1.definitions, n, t) || nd(dt.styles, n, t);
}
var _1 = new vx(),
  yx = function () {
    (z.autoReplaceSvg = !1), (z.observeMutations = !1), $n("noAuto");
  },
  wx = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Ht
        ? ($n("beforeI2svg", t), Ft("pseudoElements2svg", t), Ft("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      z.autoReplaceSvg === !1 && (z.autoReplaceSvg = !0),
        (z.observeMutations = !0),
        ix(function () {
          jx({ autoReplaceSvgRoot: n }), $n("watch", t);
        });
    },
  },
  bx = {
    icon: function (t) {
      if (t === null) return null;
      if (Gi(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: Pn(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = As(t[0]);
        return { prefix: r, iconName: Pn(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(z.cssPrefix, "-")) > -1 || t.match(Ug))
      ) {
        var a = Ls(t.split(" "), { skipLookups: !0 });
        return {
          prefix: a.prefix || pn(),
          iconName: Pn(a.prefix, a.iconName) || a.iconName,
        };
      }
      if (typeof t == "string") {
        var i = pn();
        return { prefix: i, iconName: Pn(i, t) || t };
      }
    },
  },
  Je = {
    noAuto: yx,
    config: z,
    dom: wx,
    parse: bx,
    library: _1,
    findIconDefinition: zo,
    toHtml: _a,
  },
  jx = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? Z : n;
    (Object.keys(dt.styles).length > 0 || z.autoFetchSvg) &&
      Ht &&
      z.autoReplaceSvg &&
      Je.dom.i2svg({ node: r });
  };
function Os(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return _a(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (Ht) {
          var r = Z.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function Nx(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    a = e.attributes,
    i = e.styles,
    l = e.transform;
  if (sc(l) && n.found && !r.found) {
    var o = n.width,
      u = n.height,
      c = { x: o / u / 2, y: 0.5 };
    a.style = Is(
      A(
        A({}, i),
        {},
        {
          "transform-origin": ""
            .concat(c.x + l.x / 16, "em ")
            .concat(c.y + l.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: a, children: t }];
}
function kx(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    a = e.attributes,
    i = e.symbol,
    l = i === !0 ? "".concat(t, "-").concat(z.cssPrefix, "-").concat(n) : i;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: A(A({}, a), {}, { id: l }), children: r },
      ],
    },
  ];
}
function cc(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    a = e.prefix,
    i = e.iconName,
    l = e.transform,
    o = e.symbol,
    u = e.title,
    c = e.maskId,
    f = e.titleId,
    d = e.extra,
    p = e.watchable,
    g = p === void 0 ? !1 : p,
    x = r.found ? r : n,
    y = x.width,
    N = x.height,
    v = a === "fak",
    m = [z.replacementClass, i ? "".concat(z.cssPrefix, "-").concat(i) : ""]
      .filter(function ($) {
        return d.classes.indexOf($) === -1;
      })
      .filter(function ($) {
        return $ !== "" || !!$;
      })
      .concat(d.classes)
      .join(" "),
    h = {
      children: [],
      attributes: A(
        A({}, d.attributes),
        {},
        {
          "data-prefix": a,
          "data-icon": i,
          class: m,
          role: d.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(y, " ").concat(N),
        }
      ),
    },
    w =
      v && !~d.classes.indexOf("fa-fw")
        ? { width: "".concat((y / N) * 16 * 0.0625, "em") }
        : {};
  g && (h.attributes[zn] = ""),
    u &&
      (h.children.push({
        tag: "title",
        attributes: {
          id: h.attributes["aria-labelledby"] || "title-".concat(f || ba()),
        },
        children: [u],
      }),
      delete h.attributes.title);
  var b = A(
      A({}, h),
      {},
      {
        prefix: a,
        iconName: i,
        main: n,
        mask: r,
        maskId: c,
        transform: l,
        symbol: o,
        styles: A(A({}, w), d.styles),
      }
    ),
    S =
      r.found && n.found
        ? Ft("generateAbstractMask", b) || { children: [], attributes: {} }
        : Ft("generateAbstractIcon", b) || { children: [], attributes: {} },
    k = S.children,
    T = S.attributes;
  return (b.children = k), (b.attributes = T), o ? kx(b) : Nx(b);
}
function sd(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    a = e.transform,
    i = e.title,
    l = e.extra,
    o = e.watchable,
    u = o === void 0 ? !1 : o,
    c = A(
      A(A({}, l.attributes), i ? { title: i } : {}),
      {},
      { class: l.classes.join(" ") }
    );
  u && (c[zn] = "");
  var f = A({}, l.styles);
  sc(a) &&
    ((f.transform = tx({
      transform: a,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (f["-webkit-transform"] = f.transform));
  var d = Is(f);
  d.length > 0 && (c.style = d);
  var p = [];
  return (
    p.push({ tag: "span", attributes: c, children: [t] }),
    i &&
      p.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }),
    p
  );
}
function Sx(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    a = A(
      A(A({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    i = Is(r.styles);
  i.length > 0 && (a.style = i);
  var l = [];
  return (
    l.push({ tag: "span", attributes: a, children: [t] }),
    n &&
      l.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    l
  );
}
var El = dt.styles;
function $o(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    a = ec(r, 1),
    i = a[0],
    l = null;
  return (
    Array.isArray(i)
      ? (l = {
          tag: "g",
          attributes: { class: "".concat(z.cssPrefix, "-").concat(Cn.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(z.cssPrefix, "-").concat(Cn.SECONDARY),
                fill: "currentColor",
                d: i[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(z.cssPrefix, "-").concat(Cn.PRIMARY),
                fill: "currentColor",
                d: i[1],
              },
            },
          ],
        })
      : (l = { tag: "path", attributes: { fill: "currentColor", d: i } }),
    { found: !0, width: t, height: n, icon: l }
  );
}
var Ex = { found: !1, width: 512, height: 512 };
function Cx(e, t) {
  !v1 &&
    !z.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function Fo(e, t) {
  var n = t;
  return (
    t === "fa" && z.styleDefault !== null && (t = pn()),
    new Promise(function (r, a) {
      if ((Ft("missingIconAbstract"), n === "fa")) {
        var i = T1(e) || {};
        (e = i.iconName || e), (t = i.prefix || t);
      }
      if (e && t && El[t] && El[t][e]) {
        var l = El[t][e];
        return r($o(l));
      }
      Cx(e, t),
        r(
          A(
            A({}, Ex),
            {},
            {
              icon:
                z.showMissingIcons && e ? Ft("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var ld = function () {},
  Do =
    z.measurePerformance && Ga && Ga.mark && Ga.measure
      ? Ga
      : { mark: ld, measure: ld },
  Ur = 'FA "6.5.1"',
  Px = function (t) {
    return (
      Do.mark("".concat(Ur, " ").concat(t, " begins")),
      function () {
        return I1(t);
      }
    );
  },
  I1 = function (t) {
    Do.mark("".concat(Ur, " ").concat(t, " ends")),
      Do.measure(
        "".concat(Ur, " ").concat(t),
        "".concat(Ur, " ").concat(t, " begins"),
        "".concat(Ur, " ").concat(t, " ends")
      );
  },
  fc = { begin: Px, end: I1 },
  bi = function () {};
function od(e) {
  var t = e.getAttribute ? e.getAttribute(zn) : null;
  return typeof t == "string";
}
function Tx(e) {
  var t = e.getAttribute ? e.getAttribute(nc) : null,
    n = e.getAttribute ? e.getAttribute(rc) : null;
  return t && n;
}
function _x(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(z.replacementClass)
  );
}
function Ix() {
  if (z.autoReplaceSvg === !0) return ji.replace;
  var e = ji[z.autoReplaceSvg];
  return e || ji.replace;
}
function Ax(e) {
  return Z.createElementNS("http://www.w3.org/2000/svg", e);
}
function Lx(e) {
  return Z.createElement(e);
}
function A1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? Ax : Lx) : n;
  if (typeof e == "string") return Z.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (l) {
    a.setAttribute(l, e.attributes[l]);
  });
  var i = e.children || [];
  return (
    i.forEach(function (l) {
      a.appendChild(A1(l, { ceFn: r }));
    }),
    a
  );
}
function Ox(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var ji = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (a) {
          n.parentNode.insertBefore(A1(a), n);
        }),
        n.getAttribute(zn) === null && z.keepOriginalSource)
      ) {
        var r = Z.createComment(Ox(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~ic(n).indexOf(z.replacementClass)) return ji.replace(t);
    var a = new RegExp("".concat(z.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var i = r[0].attributes.class.split(" ").reduce(
        function (o, u) {
          return (
            u === z.replacementClass || u.match(a)
              ? o.toSvg.push(u)
              : o.toNode.push(u),
            o
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = i.toSvg.join(" ")),
        i.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", i.toNode.join(" "));
    }
    var l = r.map(function (o) {
      return _a(o);
    }).join(`
`);
    n.setAttribute(zn, ""), (n.innerHTML = l);
  },
};
function ud(e) {
  e();
}
function L1(e, t) {
  var n = typeof t == "function" ? t : bi;
  if (e.length === 0) n();
  else {
    var r = ud;
    z.mutateApproach === $g && (r = mn.requestAnimationFrame || ud),
      r(function () {
        var a = Ix(),
          i = fc.begin("mutate");
        e.map(a), i(), n();
      });
  }
}
var dc = !1;
function O1() {
  dc = !0;
}
function Uo() {
  dc = !1;
}
var qi = null;
function cd(e) {
  if (Jf && z.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? bi : t,
      r = e.nodeCallback,
      a = r === void 0 ? bi : r,
      i = e.pseudoElementsCallback,
      l = i === void 0 ? bi : i,
      o = e.observeMutationsRoot,
      u = o === void 0 ? Z : o;
    (qi = new Jf(function (c) {
      if (!dc) {
        var f = pn();
        Sr(c).forEach(function (d) {
          if (
            (d.type === "childList" &&
              d.addedNodes.length > 0 &&
              !od(d.addedNodes[0]) &&
              (z.searchPseudoElements && l(d.target), n(d.target)),
            d.type === "attributes" &&
              d.target.parentNode &&
              z.searchPseudoElements &&
              l(d.target.parentNode),
            d.type === "attributes" &&
              od(d.target) &&
              ~Vg.indexOf(d.attributeName))
          )
            if (d.attributeName === "class" && Tx(d.target)) {
              var p = Ls(ic(d.target)),
                g = p.prefix,
                x = p.iconName;
              d.target.setAttribute(nc, g || f),
                x && d.target.setAttribute(rc, x);
            } else _x(d.target) && a(d.target);
        });
      }
    })),
      Ht &&
        qi.observe(u, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function Mx() {
  qi && qi.disconnect();
}
function Rx(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, a) {
        var i = a.split(":"),
          l = i[0],
          o = i.slice(1);
        return l && o.length > 0 && (r[l] = o.join(":").trim()), r;
      }, {})),
    n
  );
}
function zx(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    a = Ls(ic(e));
  return (
    a.prefix || (a.prefix = pn()),
    t && n && ((a.prefix = t), (a.iconName = n)),
    (a.iconName && a.prefix) ||
      (a.prefix &&
        r.length > 0 &&
        (a.iconName =
          px(a.prefix, e.innerText) || oc(a.prefix, Oo(e.innerText))),
      !a.iconName &&
        z.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (a.iconName = e.firstChild.data)),
    a
  );
}
function $x(e) {
  var t = Sr(e.attributes).reduce(function (a, i) {
      return (
        a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    z.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(z.replacementClass, "-title-")
            .concat(r || ba()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function Fx() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: wt,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function fd(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = zx(e),
    r = n.iconName,
    a = n.prefix,
    i = n.rest,
    l = $x(e),
    o = Ro("parseNodeAttributes", {}, e),
    u = t.styleParser ? Rx(e) : [];
  return A(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: a,
      transform: wt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: i, styles: u, attributes: l },
    },
    o
  );
}
var Dx = dt.styles;
function M1(e) {
  var t = z.autoReplaceSvg === "nest" ? fd(e, { styleParser: !1 }) : fd(e);
  return ~t.extra.classes.indexOf(g1)
    ? Ft("generateLayersText", e, t)
    : Ft("generateSvgReplacementMutation", e, t);
}
var hn = new Set();
ac.map(function (e) {
  hn.add("fa-".concat(e));
});
Object.keys(ga[X]).map(hn.add.bind(hn));
Object.keys(ga[ae]).map(hn.add.bind(hn));
hn = Pa(hn);
function dd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ht) return Promise.resolve();
  var n = Z.documentElement.classList,
    r = function (d) {
      return n.add("".concat(ed, "-").concat(d));
    },
    a = function (d) {
      return n.remove("".concat(ed, "-").concat(d));
    },
    i = z.autoFetchSvg
      ? hn
      : ac
          .map(function (f) {
            return "fa-".concat(f);
          })
          .concat(Object.keys(Dx));
  i.includes("fa") || i.push("fa");
  var l = [".".concat(g1, ":not([").concat(zn, "])")]
    .concat(
      i.map(function (f) {
        return ".".concat(f, ":not([").concat(zn, "])");
      })
    )
    .join(", ");
  if (l.length === 0) return Promise.resolve();
  var o = [];
  try {
    o = Sr(e.querySelectorAll(l));
  } catch {}
  if (o.length > 0) r("pending"), a("complete");
  else return Promise.resolve();
  var u = fc.begin("onTree"),
    c = o.reduce(function (f, d) {
      try {
        var p = M1(d);
        p && f.push(p);
      } catch (g) {
        v1 || (g.name === "MissingIcon" && console.error(g));
      }
      return f;
    }, []);
  return new Promise(function (f, d) {
    Promise.all(c)
      .then(function (p) {
        L1(p, function () {
          r("active"),
            r("complete"),
            a("pending"),
            typeof t == "function" && t(),
            u(),
            f();
        });
      })
      .catch(function (p) {
        u(), d(p);
      });
  });
}
function Ux(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  M1(e).then(function (n) {
    n && L1([n], t);
  });
}
function Hx(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : zo(t || {}),
      a = n.mask;
    return (
      a && (a = (a || {}).icon ? a : zo(a || {})),
      e(r, A(A({}, n), {}, { mask: a }))
    );
  };
}
var Bx = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      a = r === void 0 ? wt : r,
      i = n.symbol,
      l = i === void 0 ? !1 : i,
      o = n.mask,
      u = o === void 0 ? null : o,
      c = n.maskId,
      f = c === void 0 ? null : c,
      d = n.title,
      p = d === void 0 ? null : d,
      g = n.titleId,
      x = g === void 0 ? null : g,
      y = n.classes,
      N = y === void 0 ? [] : y,
      v = n.attributes,
      m = v === void 0 ? {} : v,
      h = n.styles,
      w = h === void 0 ? {} : h;
    if (t) {
      var b = t.prefix,
        S = t.iconName,
        k = t.icon;
      return Os(A({ type: "icon" }, t), function () {
        return (
          $n("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          z.autoA11y &&
            (p
              ? (m["aria-labelledby"] = ""
                  .concat(z.replacementClass, "-title-")
                  .concat(x || ba()))
              : ((m["aria-hidden"] = "true"), (m.focusable = "false"))),
          cc({
            icons: {
              main: $o(k),
              mask: u
                ? $o(u.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: b,
            iconName: S,
            transform: A(A({}, wt), a),
            symbol: l,
            title: p,
            maskId: f,
            titleId: x,
            extra: { attributes: m, styles: w, classes: N },
          })
        );
      });
    }
  },
  Wx = {
    mixout: function () {
      return { icon: Hx(Bx) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = dd), (n.nodeCallback = Ux), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          a = r === void 0 ? Z : r,
          i = n.callback,
          l = i === void 0 ? function () {} : i;
        return dd(a, l);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var a = r.iconName,
            i = r.title,
            l = r.titleId,
            o = r.prefix,
            u = r.transform,
            c = r.symbol,
            f = r.mask,
            d = r.maskId,
            p = r.extra;
          return new Promise(function (g, x) {
            Promise.all([
              Fo(a, o),
              f.iconName
                ? Fo(f.iconName, f.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (y) {
                var N = ec(y, 2),
                  v = N[0],
                  m = N[1];
                g([
                  n,
                  cc({
                    icons: { main: v, mask: m },
                    prefix: o,
                    iconName: a,
                    transform: u,
                    symbol: c,
                    maskId: d,
                    title: i,
                    titleId: l,
                    extra: p,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(x);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            a = n.attributes,
            i = n.main,
            l = n.transform,
            o = n.styles,
            u = Is(o);
          u.length > 0 && (a.style = u);
          var c;
          return (
            sc(l) &&
              (c = Ft("generateAbstractTransformGrouping", {
                main: i,
                transform: l,
                containerWidth: i.width,
                iconWidth: i.width,
              })),
            r.push(c || i.icon),
            { children: r, attributes: a }
          );
        });
    },
  },
  Vx = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = r.classes,
            i = a === void 0 ? [] : a;
          return Os({ type: "layer" }, function () {
            $n("beforeDOMElementCreation", { assembler: n, params: r });
            var l = [];
            return (
              n(function (o) {
                Array.isArray(o)
                  ? o.map(function (u) {
                      l = l.concat(u.abstract);
                    })
                  : (l = l.concat(o.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(z.cssPrefix, "-layers")]
                      .concat(Pa(i))
                      .join(" "),
                  },
                  children: l,
                },
              ]
            );
          });
        },
      };
    },
  },
  Yx = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = r.title,
            i = a === void 0 ? null : a,
            l = r.classes,
            o = l === void 0 ? [] : l,
            u = r.attributes,
            c = u === void 0 ? {} : u,
            f = r.styles,
            d = f === void 0 ? {} : f;
          return Os({ type: "counter", content: n }, function () {
            return (
              $n("beforeDOMElementCreation", { content: n, params: r }),
              Sx({
                content: n.toString(),
                title: i,
                extra: {
                  attributes: c,
                  styles: d,
                  classes: ["".concat(z.cssPrefix, "-layers-counter")].concat(
                    Pa(o)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  Qx = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = r.transform,
            i = a === void 0 ? wt : a,
            l = r.title,
            o = l === void 0 ? null : l,
            u = r.classes,
            c = u === void 0 ? [] : u,
            f = r.attributes,
            d = f === void 0 ? {} : f,
            p = r.styles,
            g = p === void 0 ? {} : p;
          return Os({ type: "text", content: n }, function () {
            return (
              $n("beforeDOMElementCreation", { content: n, params: r }),
              sd({
                content: n,
                transform: A(A({}, wt), i),
                title: o,
                extra: {
                  attributes: d,
                  styles: g,
                  classes: ["".concat(z.cssPrefix, "-layers-text")].concat(
                    Pa(c)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var a = r.title,
          i = r.transform,
          l = r.extra,
          o = null,
          u = null;
        if (m1) {
          var c = parseInt(getComputedStyle(n).fontSize, 10),
            f = n.getBoundingClientRect();
          (o = f.width / c), (u = f.height / c);
        }
        return (
          z.autoA11y && !a && (l.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            sd({
              content: n.innerHTML,
              width: o,
              height: u,
              transform: i,
              title: a,
              extra: l,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  Kx = new RegExp('"', "ug"),
  md = [1105920, 1112319];
function Gx(e) {
  var t = e.replace(Kx, ""),
    n = ox(t, 0),
    r = n >= md[0] && n <= md[1],
    a = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Oo(a ? t[0] : t), isSecondary: r || a };
}
function pd(e, t) {
  var n = "".concat(zg).concat(t.replace(":", "-"));
  return new Promise(function (r, a) {
    if (e.getAttribute(n) !== null) return r();
    var i = Sr(e.children),
      l = i.filter(function (k) {
        return k.getAttribute(Lo) === t;
      })[0],
      o = mn.getComputedStyle(e, t),
      u = o.getPropertyValue("font-family").match(Hg),
      c = o.getPropertyValue("font-weight"),
      f = o.getPropertyValue("content");
    if (l && !u) return e.removeChild(l), r();
    if (u && f !== "none" && f !== "") {
      var d = o.getPropertyValue("content"),
        p = ~["Sharp"].indexOf(u[2]) ? ae : X,
        g = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(u[2])
          ? xa[p][u[2].toLowerCase()]
          : Bg[p][c],
        x = Gx(d),
        y = x.value,
        N = x.isSecondary,
        v = u[0].startsWith("FontAwesome"),
        m = oc(g, y),
        h = m;
      if (v) {
        var w = hx(y);
        w.iconName && w.prefix && ((m = w.iconName), (g = w.prefix));
      }
      if (
        m &&
        !N &&
        (!l || l.getAttribute(nc) !== g || l.getAttribute(rc) !== h)
      ) {
        e.setAttribute(n, h), l && e.removeChild(l);
        var b = Fx(),
          S = b.extra;
        (S.attributes[Lo] = t),
          Fo(m, g)
            .then(function (k) {
              var T = cc(
                  A(
                    A({}, b),
                    {},
                    {
                      icons: { main: k, mask: uc() },
                      prefix: g,
                      iconName: h,
                      extra: S,
                      watchable: !0,
                    }
                  )
                ),
                $ = Z.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore($, e.firstChild)
                : e.appendChild($),
                ($.outerHTML = T.map(function (M) {
                  return _a(M);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(a);
      } else r();
    } else r();
  });
}
function Xx(e) {
  return Promise.all([pd(e, "::before"), pd(e, "::after")]);
}
function qx(e) {
  return (
    e.parentNode !== document.head &&
    !~Fg.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Lo) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function hd(e) {
  if (Ht)
    return new Promise(function (t, n) {
      var r = Sr(e.querySelectorAll("*")).filter(qx).map(Xx),
        a = fc.begin("searchPseudoElements");
      O1(),
        Promise.all(r)
          .then(function () {
            a(), Uo(), t();
          })
          .catch(function () {
            a(), Uo(), n();
          });
    });
}
var Zx = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = hd), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          a = r === void 0 ? Z : r;
        z.searchPseudoElements && hd(a);
      };
    },
  },
  vd = !1,
  Jx = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            O1(), (vd = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          cd(Ro("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          Mx();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          vd
            ? Uo()
            : cd(Ro("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  gd = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, a) {
        var i = a.toLowerCase().split("-"),
          l = i[0],
          o = i.slice(1).join("-");
        if (l && o === "h") return (r.flipX = !0), r;
        if (l && o === "v") return (r.flipY = !0), r;
        if (((o = parseFloat(o)), isNaN(o))) return r;
        switch (l) {
          case "grow":
            r.size = r.size + o;
            break;
          case "shrink":
            r.size = r.size - o;
            break;
          case "left":
            r.x = r.x - o;
            break;
          case "right":
            r.x = r.x + o;
            break;
          case "up":
            r.y = r.y - o;
            break;
          case "down":
            r.y = r.y + o;
            break;
          case "rotate":
            r.rotate = r.rotate + o;
            break;
        }
        return r;
      }, n);
  },
  e2 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return gd(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var a = r.getAttribute("data-fa-transform");
          return a && (n.transform = gd(a)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          a = n.transform,
          i = n.containerWidth,
          l = n.iconWidth,
          o = { transform: "translate(".concat(i / 2, " 256)") },
          u = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "),
          c = "scale("
            .concat((a.size / 16) * (a.flipX ? -1 : 1), ", ")
            .concat((a.size / 16) * (a.flipY ? -1 : 1), ") "),
          f = "rotate(".concat(a.rotate, " 0 0)"),
          d = { transform: "".concat(u, " ").concat(c, " ").concat(f) },
          p = { transform: "translate(".concat((l / 2) * -1, " -256)") },
          g = { outer: o, inner: d, path: p };
        return {
          tag: "g",
          attributes: A({}, g.outer),
          children: [
            {
              tag: "g",
              attributes: A({}, g.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: A(A({}, r.icon.attributes), g.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  Cl = { x: 0, y: 0, width: "100%", height: "100%" };
function xd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function t2(e) {
  return e.tag === "g" ? e.children : [e];
}
var n2 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var a = r.getAttribute("data-fa-mask"),
            i = a
              ? Ls(
                  a.split(" ").map(function (l) {
                    return l.trim();
                  })
                )
              : uc();
          return (
            i.prefix || (i.prefix = pn()),
            (n.mask = i),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          a = n.attributes,
          i = n.main,
          l = n.mask,
          o = n.maskId,
          u = n.transform,
          c = i.width,
          f = i.icon,
          d = l.width,
          p = l.icon,
          g = ex({ transform: u, containerWidth: d, iconWidth: c }),
          x = { tag: "rect", attributes: A(A({}, Cl), {}, { fill: "white" }) },
          y = f.children ? { children: f.children.map(xd) } : {},
          N = {
            tag: "g",
            attributes: A({}, g.inner),
            children: [
              xd(
                A({ tag: f.tag, attributes: A(A({}, f.attributes), g.path) }, y)
              ),
            ],
          },
          v = { tag: "g", attributes: A({}, g.outer), children: [N] },
          m = "mask-".concat(o || ba()),
          h = "clip-".concat(o || ba()),
          w = {
            tag: "mask",
            attributes: A(
              A({}, Cl),
              {},
              {
                id: m,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [x, v],
          },
          b = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: h }, children: t2(p) },
              w,
            ],
          };
        return (
          r.push(b, {
            tag: "rect",
            attributes: A(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(h, ")"),
                mask: "url(#".concat(m, ")"),
              },
              Cl
            ),
          }),
          { children: r, attributes: a }
        );
      };
    },
  },
  r2 = {
    provides: function (t) {
      var n = !1;
      mn.matchMedia &&
        (n = mn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            a = { fill: "currentColor" },
            i = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: A(
              A({}, a),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var l = A(A({}, i), {}, { attributeName: "opacity" }),
            o = {
              tag: "circle",
              attributes: A(A({}, a), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              o.children.push(
                {
                  tag: "animate",
                  attributes: A(
                    A({}, i),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: A(A({}, l), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(o),
            r.push({
              tag: "path",
              attributes: A(
                A({}, a),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: A(A({}, l), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: A(
                  A({}, a),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: A(A({}, l), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  a2 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var a = r.getAttribute("data-fa-symbol"),
            i = a === null ? !1 : a === "" ? !0 : a;
          return (n.symbol = i), n;
        },
      };
    },
  },
  i2 = [rx, Wx, Vx, Yx, Qx, Zx, Jx, e2, n2, r2, a2];
xx(i2, { mixoutsTo: Je });
Je.noAuto;
Je.config;
Je.library;
Je.dom;
var Ho = Je.parse;
Je.findIconDefinition;
Je.toHtml;
var s2 = Je.icon;
Je.layer;
Je.text;
Je.counter;
function yd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yd(Object(n), !0).forEach(function (r) {
          ar(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : yd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Zi(e) {
  "@babel/helpers - typeof";
  return (
    (Zi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zi(e)
  );
}
function ar(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function l2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    a,
    i;
  for (i = 0; i < r.length; i++)
    (a = r[i]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function o2(e, t) {
  if (e == null) return {};
  var n = l2(e, t),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (r = i[a]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Bo(e) {
  return u2(e) || c2(e) || f2(e) || d2();
}
function u2(e) {
  if (Array.isArray(e)) return Wo(e);
}
function c2(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function f2(e, t) {
  if (e) {
    if (typeof e == "string") return Wo(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Wo(e, t);
  }
}
function Wo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function d2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m2(e) {
  var t,
    n = e.beat,
    r = e.fade,
    a = e.beatFade,
    i = e.bounce,
    l = e.shake,
    o = e.flash,
    u = e.spin,
    c = e.spinPulse,
    f = e.spinReverse,
    d = e.pulse,
    p = e.fixedWidth,
    g = e.inverse,
    x = e.border,
    y = e.listItem,
    N = e.flip,
    v = e.size,
    m = e.rotation,
    h = e.pull,
    w =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": a,
        "fa-bounce": i,
        "fa-shake": l,
        "fa-flash": o,
        "fa-spin": u,
        "fa-spin-reverse": f,
        "fa-spin-pulse": c,
        "fa-pulse": d,
        "fa-fw": p,
        "fa-inverse": g,
        "fa-border": x,
        "fa-li": y,
        "fa-flip": N === !0,
        "fa-flip-horizontal": N === "horizontal" || N === "both",
        "fa-flip-vertical": N === "vertical" || N === "both",
      }),
      ar(t, "fa-".concat(v), typeof v < "u" && v !== null),
      ar(t, "fa-rotate-".concat(m), typeof m < "u" && m !== null && m !== 0),
      ar(t, "fa-pull-".concat(h), typeof h < "u" && h !== null),
      ar(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(w)
    .map(function (b) {
      return w[b] ? b : null;
    })
    .filter(function (b) {
      return b;
    });
}
function p2(e) {
  return (e = e - 0), e === e;
}
function R1(e) {
  return p2(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var h2 = ["style"];
function v2(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function g2(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        a = R1(n.slice(0, r)),
        i = n.slice(r + 1).trim();
      return a.startsWith("webkit") ? (t[v2(a)] = i) : (t[a] = i), t;
    }, {});
}
function z1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (u) {
      return z1(e, u);
    }),
    a = Object.keys(t.attributes || {}).reduce(
      function (u, c) {
        var f = t.attributes[c];
        switch (c) {
          case "class":
            (u.attrs.className = f), delete t.attributes.class;
            break;
          case "style":
            u.attrs.style = g2(f);
            break;
          default:
            c.indexOf("aria-") === 0 || c.indexOf("data-") === 0
              ? (u.attrs[c.toLowerCase()] = f)
              : (u.attrs[R1(c)] = f);
        }
        return u;
      },
      { attrs: {} }
    ),
    i = n.style,
    l = i === void 0 ? {} : i,
    o = o2(n, h2);
  return (
    (a.attrs.style = Zt(Zt({}, a.attrs.style), l)),
    e.apply(void 0, [t.tag, Zt(Zt({}, a.attrs), o)].concat(Bo(r)))
  );
}
var $1 = !1;
try {
  $1 = !0;
} catch {}
function x2() {
  if (!$1 && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function wd(e) {
  if (e && Zi(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Ho.icon) return Ho.icon(e);
  if (e === null) return null;
  if (e && Zi(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function Pl(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? ar({}, e, t)
    : {};
}
var j = F.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    a = e.symbol,
    i = e.className,
    l = e.title,
    o = e.titleId,
    u = e.maskId,
    c = wd(n),
    f = Pl("classes", [].concat(Bo(m2(e)), Bo(i.split(" ")))),
    d = Pl(
      "transform",
      typeof e.transform == "string" ? Ho.transform(e.transform) : e.transform
    ),
    p = Pl("mask", wd(r)),
    g = s2(
      c,
      Zt(
        Zt(Zt(Zt({}, f), d), p),
        {},
        { symbol: a, title: l, titleId: o, maskId: u }
      )
    );
  if (!g) return x2("Could not find icon", c), null;
  var x = g.abstract,
    y = { ref: t };
  return (
    Object.keys(e).forEach(function (N) {
      j.defaultProps.hasOwnProperty(N) || (y[N] = e[N]);
    }),
    y2(x[0], y)
  );
});
j.displayName = "FontAwesomeIcon";
j.propTypes = {
  beat: D.bool,
  border: D.bool,
  beatFade: D.bool,
  bounce: D.bool,
  className: D.string,
  fade: D.bool,
  flash: D.bool,
  mask: D.oneOfType([D.object, D.array, D.string]),
  maskId: D.string,
  fixedWidth: D.bool,
  inverse: D.bool,
  flip: D.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: D.oneOfType([D.object, D.array, D.string]),
  listItem: D.bool,
  pull: D.oneOf(["right", "left"]),
  pulse: D.bool,
  rotation: D.oneOf([0, 90, 180, 270]),
  shake: D.bool,
  size: D.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: D.bool,
  spinPulse: D.bool,
  spinReverse: D.bool,
  symbol: D.oneOfType([D.bool, D.string]),
  title: D.string,
  titleId: D.string,
  transform: D.oneOfType([D.string, D.object]),
  swapOpacity: D.bool,
};
j.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var y2 = z1.bind(null, F.createElement),
  F1 = {
    prefix: "fas",
    iconName: "bars",
    icon: [
      448,
      512,
      ["navicon"],
      "f0c9",
      "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
    ],
  },
  Ne = {
    prefix: "fas",
    iconName: "angle-right",
    icon: [
      320,
      512,
      [8250],
      "f105",
      "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",
    ],
  },
  w2 = {
    prefix: "fas",
    iconName: "user",
    icon: [
      448,
      512,
      [128100, 62144],
      "f007",
      "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z",
    ],
  },
  b2 = {
    prefix: "fas",
    iconName: "chart-area",
    icon: [
      512,
      512,
      ["area-chart"],
      "f1fe",
      "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z",
    ],
  },
  j2 = {
    prefix: "fas",
    iconName: "circle-play",
    icon: [
      512,
      512,
      [61469, "play-circle"],
      "f144",
      "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z",
    ],
  },
  Ie = {
    prefix: "fas",
    iconName: "circle-check",
    icon: [
      512,
      512,
      [61533, "check-circle"],
      "f058",
      "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",
    ],
  },
  N2 = {
    prefix: "fas",
    iconName: "arrow-right",
    icon: [
      448,
      512,
      [8594],
      "f061",
      "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
    ],
  },
  D1 = {
    prefix: "fas",
    iconName: "heart",
    icon: [
      512,
      512,
      [
        128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829,
        10084, 61578,
      ],
      "f004",
      "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",
    ],
  },
  k2 = {
    prefix: "fas",
    iconName: "eye",
    icon: [
      576,
      512,
      [128065],
      "f06e",
      "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",
    ],
  },
  U1 = {
    prefix: "fas",
    iconName: "phone",
    icon: [
      512,
      512,
      [128222, 128379],
      "f095",
      "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z",
    ],
  },
  H1 = {
    prefix: "fas",
    iconName: "envelope",
    icon: [
      512,
      512,
      [128386, 9993, 61443],
      "f0e0",
      "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
    ],
  },
  Ji = {
    prefix: "fas",
    iconName: "cart-shopping",
    icon: [
      576,
      512,
      [128722, "shopping-cart"],
      "f07a",
      "M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z",
    ],
  },
  S2 = {
    prefix: "fas",
    iconName: "clock",
    icon: [
      512,
      512,
      [128339, "clock-four"],
      "f017",
      "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",
    ],
  },
  E2 = {
    prefix: "fas",
    iconName: "location-dot",
    icon: [
      384,
      512,
      ["map-marker-alt"],
      "f3c5",
      "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z",
    ],
  },
  Vo = {
    prefix: "fas",
    iconName: "magnifying-glass",
    icon: [
      512,
      512,
      [128269, "search"],
      "f002",
      "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
    ],
  },
  C2 = {
    prefix: "fas",
    iconName: "list-ul",
    icon: [
      512,
      512,
      ["list-dots"],
      "f0ca",
      "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z",
    ],
  },
  P2 = {
    prefix: "fas",
    iconName: "turn-down",
    icon: [
      384,
      512,
      [10549, "level-down-alt"],
      "f3be",
      "M350 334.5c3.8 8.8 2 19-4.6 26l-136 144c-4.5 4.8-10.8 7.5-17.4 7.5s-12.9-2.7-17.4-7.5l-136-144c-6.6-7-8.4-17.2-4.6-26s12.5-14.5 22-14.5h88l0-192c0-17.7-14.3-32-32-32H32C14.3 96 0 81.7 0 64V32C0 14.3 14.3 0 32 0l80 0c70.7 0 128 57.3 128 128l0 192h88c9.6 0 18.2 5.7 22 14.5z",
    ],
  };
const bd = "/assets/card-cover-6-N4xjc8uZ.png",
  T2 = "/assets/1-fMdnmBsk.png",
  _2 = "/assets/2-lKnwaLsz.png",
  I2 = "/assets/3-9xVX2IEF.png",
  A2 = "/assets/4-YsA89tYo.png",
  L2 = "/assets/5-AtihhkaW.png",
  O2 = "/assets/6-3q5Oa788.png",
  M2 = "/assets/7-vluQio8j.png",
  R2 = "/assets/8-eKWv9Ugj.png",
  z2 = "/assets/blogimg1-1lbOGXPA.png",
  $2 = "/assets/blogimg2-icTpv8kv.png",
  F2 = "/assets/blogimg3-58NreKGG.png",
  D2 = "/assets/1-IZreLxHc.png",
  U2 = "/assets/2-lN4TX_v0.png",
  H2 = "/assets/3-EwKob3M6.png",
  B2 = "/assets/4-_q_PI1I5.png",
  W2 = "/assets/5-YUik5THV.png",
  V2 = "/assets/1-RlcaiYbf.png",
  Y2 = "/assets/2-pIj3d--8.png",
  Q2 = "/assets/3-lo7c_qy4.png",
  K2 = "/assets/4-VZl0nS7E.png",
  G2 = "/assets/5-yoLDN6GL.png",
  X2 = "/assets/6-FUDiGi5A.png",
  q2 = "/assets/7-ZqPBGjEd.png",
  Z2 = "/assets/8-8M-NnJzL.png",
  J2 = "/assets/9-Uc96rUea.png",
  ey = "/assets/10-GcLO4x_g.png",
  ty = "/assets/11-8SQLNxkm.png",
  ny = "/assets/12-OsYAkFZz.png",
  ry = "/assets/2-z12xO6ky.png",
  ay = "/assets/3-aTjKOq5H.png",
  iy = "/assets/4-SwbDdYYC.png",
  sy = "/assets/5-xUMn1ckb.png",
  ly = "/assets/1-JQOxBNba.png",
  oy = "/assets/2-zi4ynnZU.png",
  uy = "/assets/3-3_8p6kKV.png",
  cy = "/assets/4-zoYsrv2x.png",
  fy = "/assets/5-JhY5bFRf.png",
  dy = "/assets/6-v2V2cRqq.png",
  my = "/assets/7-Dfqo9ow7.png",
  py = "/assets/8-QJDJl14E.png",
  hy = "/assets/9-Hu2S1-rG.png",
  vy = "/assets/productImg-gcTDxyFy.jpeg",
  gy = "/assets/productImg2-YmfvaNav.jpeg",
  xy = "/assets/img1-DWnxuL2F.png",
  yy = "/assets/img2-udwXN8-n.png",
  wy = "/assets/img3-oVCblwfE.png",
  by = "/assets/img4-fmJFJM_F.png",
  jy = "/assets/img5-rBKFknlr.png",
  Ny = "/assets/img6-uO2SRTOk.png",
  ky = "/assets/img7-w7bDQiA8.png",
  Sy = "/assets/img8-Q4bv3cv4.png",
  Un = () => ({
    slides: [
      {
        img: bd,
        dateHero: "SUMMER 2020",
        title: "NEW COLLECTION",
        description:
          "We know how large objects will act, but things on a small scale.",
      },
      {
        img: bd,
        dateHero: "SUMMER 2020",
        title: "NEW COLLECTION",
        description:
          "We know how large objects will act, but things on a small scale.",
      },
    ],
    photo: {
      img1: T2,
      img2: _2,
      img3: I2,
      img4: A2,
      img5: L2,
      img6: O2,
      img7: M2,
      img8: R2,
    },
    productText: {
      title: "Graphic Design",
      link: "English Department",
      price1: "$16.48",
      price2: "$6.48",
    },
    blogData: [
      {
        img: z2,
        title: "Loudest à la Madison #1 (L'integral)",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        commentNumber: "10",
      },
      {
        img: $2,
        title: "Loudest à la Madison #1 (L'integral)",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        commentNumber: "10",
      },
      {
        img: F2,
        title: "Loudest à la Madison #1 (L'integral)",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        commentNumber: "10",
      },
    ],
    boxData: [
      { img: D2, title: "CLOTHS", count: 5 },
      { img: U2, title: "CLOTHS", count: 5 },
      { img: H2, title: "CLOTHS", count: 5 },
      { img: B2, title: "CLOTHS", count: 5 },
      { img: W2, title: "CLOTHS", count: 5 },
    ],
    productImgs: [V2, Y2, Q2, K2, G2, X2, q2, Z2, J2, ey, ty, ny],
    boxGroup: [ry, ay, iy, sy],
    member: [
      { img: ly, username: "username", job: "profession" },
      { img: oy, username: "username", job: "profession" },
      { img: uy, username: "username", job: "profession" },
      { img: cy, username: "username", job: "profession" },
      { img: fy, username: "username", job: "profession" },
      { img: dy, username: "username", job: "profession" },
      { img: my, username: "username", job: "profession" },
      { img: py, username: "username", job: "profession" },
      { img: hy, username: "username", job: "profession" },
    ],
    miniSlider: [vy, gy],
    productContainerImgs: [xy, yy, wy, by, jy, Ny, ky, Sy],
  }),
  Ey = () => {
    const { blogData: e } = Un();
    return s.jsxs("div", {
      className:
        "flex flex-col font-Montserrat gap-8 py-28 items-center tracking-[0.2px] sm:px-10 ",
      id: "blog-container",
      children: [
        s.jsxs("section", {
          className: "flex flex-col gap-4 text-center items-center ",
          id: "text-container-1",
          children: [
            s.jsx("h6", {
              className: "text-blue1 text-lg font-bold",
              children: "Practice Advice",
            }),
            s.jsx("h3", {
              className: "text-darkblue1 text-4xl font-bold ",
              children: "Featured Posts",
            }),
            s.jsx("p", {
              id: "paragraph",
              className: "text-gray text-lg w-3/5",
              children:
                "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
            }),
          ],
        }),
        s.jsx("label", {
          className:
            "flex flex-row gap-2 w-4/5 sm:w-full sm:flex-col justify-between items-center",
          htmlFor: "blog",
          id: "blog-content",
          children: e.map((t, n) =>
            s.jsxs(
              "section",
              {
                className:
                  "flex flex-col gap-4 justify-between shadow-md border border-black",
                id: "content-card",
                children: [
                  s.jsxs("span", {
                    className: "relative flex items-start justify-start",
                    id: "img-content",
                    children: [
                      s.jsx("img", {
                        className: "w-full h-auto object-cover",
                        src: t.img,
                        alt: "",
                      }),
                      s.jsx("h5", {
                        className:
                          "absolute border border-gray rounded-md w-16 py-1 mt-8 ml-8  text-center text-base text-white font-bold  bg-[#E74040]",
                        children: "NEW",
                      }),
                    ],
                  }),
                  s.jsxs("span", {
                    id: "content-text-container",
                    className: "px-5 flex flex-col gap-4 ",
                    children: [
                      s.jsxs("span", {
                        className: "flex flex-row gap-2 text-sm",
                        id: "anchor-content",
                        children: [
                          s.jsx("a", {
                            className: "text-blue1",
                            href: "",
                            children: "Google",
                          }),
                          s.jsx("a", {
                            className: "text-gray",
                            href: "",
                            children: "Trending",
                          }),
                          s.jsx("a", {
                            className: "text-gray",
                            href: "",
                            children: "New",
                          }),
                        ],
                      }),
                      s.jsx("span", {
                        className: "text-darkblue1 text-xl font-normal w-3/4",
                        id: "title-content",
                        children: s.jsx("h4", { children: t.title }),
                      }),
                      s.jsx("span", {
                        className:
                          "text-gray text-base font-normal w-3/4 tracking-[0.2px]",
                        id: "paragraph-content",
                        children: s.jsx("p", { children: t.description }),
                      }),
                      s.jsxs("span", {
                        className: "flex flex-row justify-between",
                        id: "frame-content",
                        children: [
                          s.jsxs("p", {
                            className: "flex items-center gap-1",
                            children: [
                              s.jsx(j, { className: "text-blue1", icon: S2 }),
                              t.date,
                            ],
                          }),
                          s.jsxs("p", {
                            className: "flex items-center gap-1",
                            children: [
                              s.jsx(j, { className: "text-green", icon: b2 }),
                              t.commentNumber,
                              " comments",
                            ],
                          }),
                        ],
                      }),
                      s.jsx("span", {
                        className:
                          "flex flex-row text-base font-semibold text-gray pb-8",
                        id: "button-content",
                        children: s.jsxs("button", {
                          className: "flex items-center gap-2",
                          children: [
                            "Learn More",
                            " ",
                            s.jsx(j, {
                              className: "w-[12px] h-[24px] text-blue1",
                              icon: Ne,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              },
              n
            )
          ),
        }),
      ],
    });
  },
  Cy = "/assets/men-BfEv0nRt.png",
  Py = "/assets/accessories-yErZGJo5.png",
  Ty = "/assets/kids-L0mMwJOw.png",
  _y = "/assets/women-JsM46xr3.png",
  Iy = () => {
    const { photo: e, productText: t } = Un();
    return s.jsxs("div", {
      className:
        "flex flex-col justify-center items-center gap-4 font-Montserrat w-full  ",
      id: "shop-container",
      children: [
        s.jsxs("div", {
          className:
            "w-1200 sm:w-full flex flex-col gap-10 py-20  items-center content-center",
          id: "shop-main-container",
          children: [
            s.jsxs("div", {
              className:
                "flex flex-col justify-center items-center text-center gap-2 ",
              id: "shop-text-container",
              children: [
                s.jsx("h2", {
                  className:
                    "text-darkblue1  font-bold text-2xl sm:text-3xl  tracking-tighter ",
                  id: "h2-title",
                  children: "EDITOR'S PICK",
                }),
                s.jsx("p", {
                  className: "text-gray font-bold text-center sm:w-2/3 ",
                  id: "paragraph",
                  children: "Problems trying to resolve the conflict between",
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "flex flex-row flex-wrap gap-3 content-center items-center font-Montserrat font-bold sm:px-10 ",
              id: "shop-img-container",
              children: [
                s.jsxs("span", {
                  className: "relative flex items-end justify-start",
                  id: "first-img-box",
                  children: [
                    s.jsx("img", {
                      className: "w-full h-auto object-cover",
                      id: "men-img",
                      src: Cy,
                      alt: "",
                    }),
                    s.jsx("button", {
                      className:
                        "absolute border border-gray w-40 py-2 mb-8 ml-8  text-center text-base  bg-lightgray",
                      children: "MEN",
                    }),
                  ],
                }),
                s.jsxs("span", {
                  className:
                    "flex flex-row gap-3 items-center sm:flex-col sm:w-full",
                  id: "second-img-box",
                  children: [
                    s.jsxs("span", {
                      id: "second-img-box1",
                      className:
                        "relative flex items-end justify-start sm:items-end  sm:object-fit sm:w-full",
                      children: [
                        s.jsx("img", {
                          className:
                            "w-auto h-auto object-fit sm:h-full sm:w-full ",
                          id: "women-img",
                          src: _y,
                          alt: "",
                        }),
                        s.jsx("button", {
                          className:
                            "absolute border border-gray w-32 py-2 mb-8 ml-8  text-center text-base  bg-lightgray",
                          children: "WOMEN",
                        }),
                      ],
                    }),
                    s.jsxs("span", {
                      className: "flex flex-col gap-3 items-center sm:w-full",
                      id: "second-img-box2",
                      children: [
                        s.jsxs("span", {
                          className:
                            "relative flex items-end justify-start sm:w-full",
                          children: [
                            s.jsx("img", {
                              className: "w-full h-auto object-cover",
                              id: "tiny-img",
                              src: Py,
                              alt: "",
                            }),
                            s.jsx("button", {
                              className:
                                "absolute border border-gray w-36 py-2 mb-8 ml-8  text-center text-base  bg-lightgray",
                              children: "ACCESSORIES",
                            }),
                          ],
                        }),
                        s.jsxs("span", {
                          className:
                            "relative flex items-end justify-start sm:w-full",
                          children: [
                            s.jsx("img", {
                              id: "tiny-img",
                              src: Ty,
                              alt: "",
                              className: "sm:w-full",
                            }),
                            s.jsx("button", {
                              className:
                                "absolute border border-gray w-28 py-2 mb-8 ml-8  text-center text-base  bg-lightgray",
                              children: "KIDS",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className:
            "flex flex-col sm:w-full justify-center items-center w-4/5 ",
          id: "main-content",
          children: [
            s.jsxs("div", {
              className:
                "flex flex-col justify-center items-center text-center gap-4 pb-12",
              id: "shop-text-container",
              children: [
                s.jsx("h2", {
                  className:
                    "text-gray text-center leading-5 font-normal text-xl ",
                  id: "h3-title",
                  children: "Featured Products",
                }),
                s.jsx("p", {
                  className:
                    "text-darkblue1 font-bold  text-2xl md:text-3xl   sm:w-1/2",
                  id: "h2-title",
                  children: "BESTSELLER PRODUCTS",
                }),
                s.jsxs("h3", {
                  className: "text-gray text-center  font-bold sm:w-2/3",
                  id: "paragraph",
                  children: [
                    "Problems trying to resolve the conflict between",
                    " ",
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: "w-1200 sm:w-full flex flex-wrap justify-center gap-8",
              id: "content-img-container",
              children: Object.keys(e).map((n, r) =>
                s.jsxs(
                  "div",
                  {
                    className:
                      "p-3 sm:px-10 sm:w-full sm:items-center  flex flex-col",
                    id: "product-content",
                    children: [
                      s.jsx("span", {
                        id: "product-img-content",
                        className: "sm:w-full",
                        children: s.jsx("img", {
                          src: e[n],
                          alt: "",
                          className: "sm:w-full",
                        }),
                      }),
                      s.jsxs("span", {
                        className: "flex flex-col text-center gap-2 py-8",
                        id: "product-text-content",
                        children: [
                          s.jsx("h4", {
                            className:
                              "text-base font-bold leading-7 tracking-normal",
                            children: t.title,
                          }),
                          s.jsx("h5", {
                            className:
                              "text-sm font-bold leading-7 tracking-wide text-[#737373]",
                            children: t.link,
                          }),
                          s.jsxs("span", {
                            className:
                              "flex flex-row items-center text-center justify-center gap-2 text-normal font-bold",
                            children: [
                              s.jsx("h5", {
                                className: "text-[#737373]",
                                children: t.price1,
                              }),
                              s.jsx("h5", {
                                className: "text-[#23856D]",
                                children: t.price2,
                              }),
                            ],
                          }),
                          s.jsx("span", {
                            id: "colors",
                            children: s.jsxs("div", {
                              className:
                                "flex items-center justify-center space-x-2",
                              children: [
                                s.jsx("div", {
                                  className: "w-4 h-4 rounded-full bg-red",
                                }),
                                s.jsx("div", {
                                  className: "w-4 h-4 rounded-full bg-blue-500",
                                }),
                                s.jsx("div", {
                                  className: "w-4 h-4 rounded-full bg-green",
                                }),
                                s.jsx("div", {
                                  className:
                                    "w-4 h-4 rounded-full bg-yellow-500",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  r
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  jd = "/assets/slider2-MB7x_lzn.png",
  Ay = () =>
    s.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: s.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 19l-7-7 7-7",
      }),
    }),
  Ly = () =>
    s.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: s.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 5l7 7-7 7",
      }),
    });
function Oy({ autoSlide: e = !1, autoSlideInterval: t = 3e3 }) {
  const [n, r] = C.useState(0),
    a = [
      {
        img: jd,
        dateHero: "SUMMER 2020",
        title: "Vita Classic Product",
        description:
          "We know how large objects will act, We know how are objects will act, We know",
        price: "$16.48",
      },
      {
        img: jd,
        dateHero: "SUMMER 2020",
        title: "Vita Classic Product",
        description:
          "We know how large objects will act, We know how are objects will act, We know",
        price: "$16.48",
      },
    ],
    i = () => r((o) => (o === 0 ? a.length - 1 : o - 1)),
    l = () => r((o) => (o === a.length - 1 ? 0 : o + 1));
  return (
    C.useEffect(() => {
      if (!e) return;
      const o = setInterval(l, t);
      return () => clearInterval(o);
    }, []),
    s.jsxs("div", {
      className:
        "overflow-hidden relative sm:flex sm:flex-col bg-[#23856D] font-Montserrat w-full pt-10 sm:pt-0",
      children: [
        s.jsx("div", {
          className: "flex transition-transform ease-out duration-500 w-full ",
          style: { transform: `translateX(-${n * 100}%)` },
          children: a.map((o, u) =>
            s.jsx(
              "div",
              {
                className: "w-full flex-shrink-0 relative sm:flex sm:flex-col",
                children: s.jsxs("span", {
                  id: "slider-container",
                  className:
                    "flex justify-around sm:justify-center flex-row-reverse items-center sm:flex-col-reverse",
                  children: [
                    s.jsx("span", {
                      id: "box-1",
                      className:
                        "px-40 sm:px-0 pb-0 flex items-end min-h-1/2 min-w-1/2 object-contain resize-none",
                      children: s.jsx("img", {
                        src: o.img,
                        alt: `Slide ${u}`,
                        className:
                          "min-w-full min-h-full object-contain resize-none",
                        id: "slider-img",
                      }),
                    }),
                    s.jsx("span", {
                      id: "box-2",
                      className:
                        "flex items-center justify-items-start sm:justify-center sm:py-10",
                      children: s.jsx("div", {
                        className: "sm:w-full",
                        children: s.jsxs("div", {
                          className:
                            "text-white font-Montserrat flex flex-col gap-8 px-40 sm:px-0  sm:text-center sm:items-center",
                          children: [
                            s.jsx("h2", {
                              className: "font-bold text-xl",
                              children: o.dateHero,
                            }),
                            s.jsx("h1", {
                              className: "font-bold text-3xl w-3/4 sm:text-5xl",
                              children: o.title,
                            }),
                            s.jsx("p", {
                              className:
                                "font-normal text-lg w-4/6 sm:font-bold",
                              children: o.description,
                            }),
                            s.jsxs("span", {
                              className:
                                "flex flex-row gap-8 items-center sm:flex-col",
                              children: [
                                s.jsx("p", {
                                  className: "text-2xl font-bold",
                                  children: o.price,
                                }),
                                s.jsx("button", {
                                  className:
                                    "py-[15px] px-[10px] flex border-solid border-[1px] bg-green rounded-md w-40 justify-center text-lg font-bold tracking-normal",
                                  children: "ADD TO CART",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              },
              u
            )
          ),
        }),
        s.jsxs("div", {
          className: "absolute inset-0 flex items-center justify-between p-4",
          children: [
            s.jsx("button", {
              onClick: i,
              className:
                "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",
              children: s.jsx(Ay, {}),
            }),
            s.jsx("button", {
              onClick: l,
              className:
                "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",
              children: s.jsx(Ly, {}),
            }),
          ],
        }),
        s.jsx("div", {
          className: "absolute bottom-4 right-0 left-0 sm:hidden",
          children: s.jsx("div", {
            className: "flex items-center justify-center gap-2",
            children: a.map((o, u) =>
              s.jsx(
                "div",
                {
                  className: `
                transition-all w-20 h-3 bg-white 
                ${n === u ? "p-2" : "bg-opacity-50"}
              `,
                },
                u
              )
            ),
          }),
        }),
      ],
    })
  );
}
const My = "/assets/container-img-01nXFnst.png",
  Ry = () =>
    s.jsxs("div", {
      id: "shop-cards-2-container",
      className: "w-full font-Montserrat items-center  ",
      children: [
        s.jsx("div", { id: "slider-container", children: s.jsx(Oy, {}) }),
        s.jsxs("div", {
          id: "container-fluid",
          className:
            "flex flex-row items-center justify-around sm:flex-col-reverse sm:gap-4 sm:px-10",
          children: [
            s.jsx("span", {
              id: "img-container",
              className: "pl-10 sm:pl-0",
              children: s.jsx("img", { src: My, alt: "" }),
            }),
            s.jsxs("span", {
              id: "text-container",
              className:
                "flex flex-col gap-6 pr-5 sm:pr-0 sm:items-center sm:text-center",
              children: [
                s.jsx("h5", {
                  className: "text-base text-[#BDBDBD] tracking-[0.2px]",
                  children: "SUMMER 2020",
                }),
                s.jsx("h1", {
                  className:
                    "text-4xl font-bold text-[#252B42] tracking-[0.2px] w-3/4 ",
                  children: "Part of the Neural Universe",
                }),
                s.jsx("h4", {
                  className:
                    "text-xl text-[#737373] w-4/5 font-normal tracking-[0.2px]",
                  children:
                    "We know how large objects will act, but things on a small scale.",
                }),
                s.jsxs("span", {
                  className: "flex flex-row gap-2 items-center sm:flex-col",
                  children: [
                    s.jsx("button", {
                      className:
                        "py-[15px] px-[10px] flex border-solid border-[1px] bg-green sm:bg-blue1 rounded-md w-40 justify-center  text-lg text-white font-bold tracking-normal",
                      children: "BUY NOW",
                    }),
                    s.jsx("button", {
                      className:
                        "py-[15px] px-[10px] flex border-solid border-[1px] border-green sm:border-blue1 bg-white rounded-md w-40 justify-center text-lg text-green sm:text-blue1 font-bold tracking-normal",
                      children: "READ MORE",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  zy = () =>
    s.jsxs("div", {
      id: "body",
      children: [s.jsx(Iy, {}), s.jsx(Ry, {}), s.jsx(Ey, {})],
    }),
  $y = () =>
    s.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: s.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 19l-7-7 7-7",
      }),
    }),
  Fy = () =>
    s.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: s.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 5l7 7-7 7",
      }),
    });
function Dy({ autoSlide: e = !1, autoSlideInterval: t = 3e3 }) {
  const [n, r] = C.useState(0),
    { slides: a } = Un(),
    i = Ca(),
    l = () => r((u) => (u === 0 ? a.length - 1 : u - 1)),
    o = () => r((u) => (u === a.length - 1 ? 0 : u + 1));
  return (
    C.useEffect(() => {
      if (!e) return;
      const u = setInterval(o, t);
      return () => clearInterval(u);
    }, []),
    s.jsxs("div", {
      className: "overflow-hidden relative font-Montserrat bg-[#01B6DD]  ",
      children: [
        s.jsx("div", {
          className:
            "flex transition-transform ease-out duration-500 h-[640px]   ",
          style: { transform: `translateX(-${n * 100}%)` },
          children: a.map((u, c) =>
            s.jsxs(
              "div",
              {
                className: "w-full flex justify-center flex-shrink-0 relative ",
                children: [
                  s.jsx("img", {
                    src: u.img,
                    alt: `Slide ${c}`,
                    className: "w-lvh object-fit sm:object-cover sm:w-fit  ",
                  }),
                  s.jsx("div", {
                    className:
                      "absolute top-0 left-0 w-full h-full flex items-center justify-items-start sm:justify-center sm:items-center pl-16 sm:pl-0 ",
                    children: s.jsxs("div", {
                      className:
                        "text-white sm:items-center  flex flex-col gap-8 sm:px-0 px-40",
                      children: [
                        s.jsx("h2", {
                          className: "font-bold text-xl",
                          children: u.dateHero,
                        }),
                        s.jsx("h1", {
                          className: "font-bold sm:text-center text-[58px]",
                          children: u.title,
                        }),
                        s.jsx("p", {
                          className:
                            "font-normal text-[20px] w-3/5 sm:w-4/6 sm:text-center",
                          children: u.description,
                        }),
                        s.jsx("button", {
                          onClick: () => i.push("/shop"),
                          className:
                            "py-[15px] px-[10px] flex border-solid border-[1px] bg-green rounded-md w-40 justify-center text-lg font-bold tracking-normal",
                          children: "SHOP NOW",
                        }),
                      ],
                    }),
                  }),
                ],
              },
              c
            )
          ),
        }),
        s.jsxs("div", {
          className: "absolute inset-0 flex items-center justify-between p-4",
          children: [
            s.jsx("button", {
              onClick: l,
              className:
                "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",
              children: s.jsx($y, {}),
            }),
            s.jsx("button", {
              onClick: o,
              className:
                "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",
              children: s.jsx(Fy, {}),
            }),
          ],
        }),
        s.jsx("div", {
          className: "absolute bottom-4 right-0 left-0 sm:hidden",
          children: s.jsx("div", {
            className: "flex items-center justify-center gap-2",
            children: a.map((u, c) =>
              s.jsx(
                "div",
                {
                  className: `
                transition-all w-20 h-3 bg-white 
                ${n === c ? "p-2" : "bg-opacity-50"}
              `,
                },
                c
              )
            ),
          }),
        }),
      ],
    })
  );
}
const Uy = () =>
    s.jsx(s.Fragment, {
      children: s.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [s.jsx(Dy, {}), s.jsx(zy, {})],
      }),
    }),
  Hy =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABnSURBVHgB7ZKxDYAwDAQdK+yRkpIRYBJmYxIYgRE8B4ls7A5oSBEkF3xh6f+srx6ggYKdfhgTZ1wFIF0Y5Y4n2jd642iuHDg/Hkwpal7DERrIWUlkXoII3Yj6onkN96N/J1+WuNjJCdVxb8cz5Nu9AAAAAElFTkSuQmCC";
var Ms = {
    prefix: "fab",
    iconName: "hooli",
    icon: [
      640,
      512,
      [],
      "f427",
      "M144.5 352l38.3.8c-13.2-4.6-26-10.2-38.3-16.8zm57.7-5.3v5.3l-19.4.8c36.5 12.5 69.9 14.2 94.7 7.2-19.9.2-45.8-2.6-75.3-13.3zm408.9-115.2c15.9 0 28.9-12.9 28.9-28.9s-12.9-24.5-28.9-24.5c-15.9 0-28.9 8.6-28.9 24.5s12.9 28.9 28.9 28.9zm-29 120.5H640V241.5h-57.9zm-73.7 0h57.9V156.7L508.4 184zm-31-119.4c-18.2-18.2-50.4-17.1-50.4-17.1s-32.3-1.1-50.4 17.1c-18.2 18.2-16.8 33.9-16.8 52.6s-1.4 34.3 16.8 52.5 50.4 17.1 50.4 17.1 32.3 1.1 50.4-17.1c18.2-18.2 16.8-33.8 16.8-52.5-.1-18.8 1.3-34.5-16.8-52.6zm-39.8 71.9c0 3.6-1.8 12.5-10.7 12.5s-10.7-8.9-10.7-12.5v-40.4c0-8.7 7.3-10.9 10.7-10.9s10.7 2.1 10.7 10.9zm-106.2-71.9c-18.2-18.2-50.4-17.1-50.4-17.1s-32.2-1.1-50.4 17.1c-1.9 1.9-3.7 3.9-5.3 6-38.2-29.6-72.5-46.5-102.1-61.1v-20.7l-22.5 10.6c-54.4-22.1-89-18.2-97.3.1 0 0-24.9 32.8 61.8 110.8V352h57.9v-28.6c-6.5-4.2-13-8.7-19.4-13.6-14.8-11.2-27.4-21.6-38.4-31.4v-31c13.1 14.7 30.5 31.4 53.4 50.3l4.5 3.6v-29.8c0-6.9 1.7-18.2 10.8-18.2s10.6 6.9 10.6 15V317c18 12.2 37.3 22.1 57.7 29.6v-93.9c0-18.7-13.4-37.4-40.6-37.4-15.8-.1-30.5 8.2-38.5 21.9v-54.3c41.9 20.9 83.9 46.5 99.9 58.3-10.2 14.6-9.3 28.1-9.3 43.7 0 18.7-1.4 34.3 16.8 52.5s50.4 17.1 50.4 17.1 32.3 1.1 50.4-17.1c18.2-18.2 16.7-33.8 16.7-52.5 0-18.5 1.5-34.2-16.7-52.3zM65.2 184v63.3c-48.7-54.5-38.9-76-35.2-79.1 13.5-11.4 37.5-8 64.4 2.1zm226.5 120.5c0 3.6-1.8 12.5-10.7 12.5s-10.7-8.9-10.7-12.5v-40.4c0-8.7 7.3-10.9 10.7-10.9s10.7 2.1 10.7 10.9z",
    ],
  },
  Rs = {
    prefix: "fab",
    iconName: "aws",
    icon: [
      640,
      512,
      [],
      "f375",
      "M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z",
    ],
  },
  zs = {
    prefix: "fab",
    iconName: "lyft",
    icon: [
      512,
      512,
      [],
      "f3c3",
      "M0 81.1h77.8v208.7c0 33.1 15 52.8 27.2 61-12.7 11.1-51.2 20.9-80.2-2.8C7.8 334 0 310.7 0 289V81.1zm485.9 173.5v-22h23.8v-76.8h-26.1c-10.1-46.3-51.2-80.7-100.3-80.7-56.6 0-102.7 46-102.7 102.7V357c16 2.3 35.4-.3 51.7-14 17.1-14 24.8-37.2 24.8-59v-6.7h38.8v-76.8h-38.8v-23.3c0-34.6 52.2-34.6 52.2 0v77.1c0 56.6 46 102.7 102.7 102.7v-76.5c-14.5 0-26.1-11.7-26.1-25.9zm-294.3-99v113c0 15.4-23.8 15.4-23.8 0v-113H91v132.7c0 23.8 8 54 45 63.9 37 9.8 58.2-10.6 58.2-10.6-2.1 13.4-14.5 23.3-34.9 25.3-15.5 1.6-35.2-3.6-45-7.8v70.3c25.1 7.5 51.5 9.8 77.6 4.7 47.1-9.1 76.8-48.4 76.8-100.8V155.1h-77.1v.5z",
    ],
  },
  $s = {
    prefix: "fab",
    iconName: "stripe",
    icon: [
      640,
      512,
      [],
      "f429",
      "M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6.1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4.1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z",
    ],
  },
  Fs = {
    prefix: "fab",
    iconName: "reddit-alien",
    icon: [
      512,
      512,
      [],
      "f281",
      "M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z",
    ],
  },
  mc = {
    prefix: "fab",
    iconName: "linkedin",
    icon: [
      448,
      512,
      [],
      "f08c",
      "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
    ],
  },
  _t = {
    prefix: "fab",
    iconName: "instagram",
    icon: [
      448,
      512,
      [],
      "f16d",
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    ],
  },
  It = {
    prefix: "fab",
    iconName: "facebook",
    icon: [
      512,
      512,
      [62e3],
      "f09a",
      "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z",
    ],
  },
  Ds = {
    prefix: "fab",
    iconName: "pied-piper-hat",
    icon: [
      640,
      512,
      [],
      "f4e5",
      "M640 24.9c-80.8 53.6-89.4 92.5-96.4 104.4-6.7 12.2-11.7 60.3-23.3 83.6-11.7 23.6-54.2 42.2-66.1 50-11.7 7.8-28.3 38.1-41.9 64.2-108.1-4.4-167.4 38.8-259.2 93.6 29.4-9.7 43.3-16.7 43.3-16.7 94.2-36 139.3-68.3 281.1-49.2 1.1 0 1.9.6 2.8.8 3.9 2.2 5.3 6.9 3.1 10.8l-53.9 95.8c-2.5 4.7-7.8 7.2-13.1 6.1-126.8-23.8-226.9 17.3-318.9 18.6C24.1 488 0 453.4 0 451.8c0-1.1.6-1.7 1.7-1.7 0 0 38.3 0 103.1-15.3C178.4 294.5 244 245.4 315.4 245.4c0 0 71.7 0 90.6 61.9 22.8-39.7 28.3-49.2 28.3-49.2 5.3-9.4 35-77.2 86.4-141.4 51.5-64 90.4-79.9 119.3-91.8z",
    ],
  },
  By = {
    prefix: "fab",
    iconName: "youtube",
    icon: [
      576,
      512,
      [61802],
      "f167",
      "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
    ],
  },
  At = {
    prefix: "fab",
    iconName: "twitter",
    icon: [
      512,
      512,
      [],
      "f099",
      "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
    ],
  };
const B1 = () =>
    s.jsx("div", {
      className:
        "flex font-Montserrat font-bold justify-center items-center bg-gray-100",
      children: s.jsx("nav", {
        className: "text-sm sm:text-base",
        children: s.jsxs("ol", {
          className: "flex items-center content-center",
          children: [
            s.jsxs("li", {
              className: "flex items-center",
              children: [
                s.jsx("a", {
                  href: "/home",
                  className:
                    "text-gray-600 hover:text-blue-500 transition-colors duration-300",
                  children: "Home",
                }),
                s.jsx("span", {
                  className: "mx-2 text-gray",
                  children: s.jsx(j, { icon: Ne }),
                }),
              ],
            }),
            s.jsx("li", {
              className: "flex items-center",
              children: s.jsx("a", {
                href: "/shop",
                className:
                  "text-gray hover:text-blue-500 transition-colors duration-300",
                children: "Shop",
              }),
            }),
          ],
        }),
      }),
    }),
  Wy = () =>
    s.jsxs("nav", {
      className: "flex items-center font-Montserrat font-bold -space-x-px",
      children: [
        s.jsx("button", {
          type: "button",
          className:
            "min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none",
          children: s.jsx("span", { className: "", children: "First" }),
        }),
        s.jsx("button", {
          type: "button",
          className:
            "min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none",
          "aria-current": "page",
          children: "1",
        }),
        s.jsx("button", {
          type: "button",
          className:
            "min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none",
          children: "2",
        }),
        s.jsx("button", {
          type: "button",
          className:
            "min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none",
          children: "3",
        }),
        s.jsx("button", {
          type: "button",
          className:
            "min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none",
          children: s.jsx("span", { className: "", children: "Next" }),
        }),
      ],
    }),
  Vy = () => {
    const { boxData: e, productImgs: t } = Un(),
      n = t.map((a, i) => ({
        id: i + 1,
        image: a,
        title: "Graphic Design",
        link: "English Department",
        price1: "$16.48",
        price2: "$6.48",
      })),
      r = n.length;
    return s.jsxs("div", {
      className: "font-Montserrat flex flex-col gap-8 ",
      id: "shop-container",
      children: [
        s.jsxs("section", {
          className:
            "flex flex-col gap-12 bg-lightgray px-40 py-10 sm:py-10 sm:px-10 sm:w-full content-center",
          id: "top-level",
          children: [
            s.jsxs("span", {
              className:
                "flex flex-row justify-between items-center sm:flex-col sm:gap-8",
              children: [
                s.jsx("h2", {
                  className: "text-xl font-bold text-darkblue1",
                  children: "Shop",
                }),
                s.jsx("span", { id: "navbar", children: s.jsx(B1, {}) }),
              ],
            }),
            s.jsx("span", {
              className: "flex flex-row justify-center gap-4 sm:flex-col",
              id: "box-cards",
              children: e.map((a, i) =>
                s.jsxs(
                  "div",
                  {
                    id: "container",
                    className: "relative flex items-center",
                    children: [
                      s.jsx("img", { className: "w-full h-auto", src: a.img }),
                      s.jsxs("button", {
                        id: "center",
                        className:
                          "absolute t-1/2 w-full text-center text-base text-white font-bold",
                        children: [
                          s.jsx("p", { children: a.title }),
                          s.jsxs("p", { children: [a.count, " items"] }),
                        ],
                      }),
                    ],
                  },
                  i
                )
              ),
            }),
          ],
        }),
        s.jsxs("section", {
          className:
            "flex flex-col justify-between items-center gap-12 px-40 sm:px-0",
          id: "shop-section",
          children: [
            s.jsxs("span", {
              className:
                "flex flex-row sm:flex-col sm:gap-4 justify-between items-center w-full font-bold text-sm text-gray",
              id: "filter-container",
              children: [
                s.jsxs("p", { children: ["Showing all ", r, " results"] }),
                s.jsxs("span", {
                  id: "views",
                  className:
                    "flex flex-row gap-2 sm:gap-4 text-gray sm:items-center",
                  children: [
                    s.jsx("p", {
                      className: "flex items-center",
                      children: "Views:",
                    }),
                    s.jsx("button", {
                      className: "border border-gray rounded-lg p-3",
                      id: "1",
                      children: s.jsx("img", {
                        src: Hy,
                        className: "w-[16px] h-[16px]",
                      }),
                    }),
                    s.jsx("button", {
                      className: "border border-gray rounded-lg p-3",
                      id: "2",
                      children: s.jsx(j, {
                        icon: C2,
                        className: "w-[16px] h-[16px]",
                      }),
                    }),
                  ],
                }),
                s.jsxs("span", {
                  className: "flex flex-row gap-2 sm:gap-4",
                  id: "filter-order",
                  children: [
                    s.jsx("label", {
                      className: "flex items-center justify-center",
                      id: "1",
                      children: s.jsxs("select", {
                        id: "dropdown",
                        defaultValue: "Popularity",
                        className:
                          "flex border border-gray rounded-lg py-4 px-4 w-full bg-lightgray",
                        children: [
                          s.jsx("option", { children: "Popularity" }),
                          s.jsx("option", { children: "1" }),
                          s.jsx("option", { children: "2" }),
                          s.jsx("option", { children: "3" }),
                        ],
                      }),
                    }),
                    s.jsx("button", {
                      className:
                        "border border-gray rounded-lg py-3 px-5 bg-blue1 text-white",
                      id: "2",
                      children: "Filter",
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("span", {
              className:
                "flex w-5/6 justify-center flex-row flex-wrap gap-4 px-12 sm:w-full sm:flex-col sm:px-10 sm:gap-16 sm:py-10",
              id: "product-container",
              children: n.map((a, i) =>
                s.jsxs(
                  "div",
                  {
                    id: "product-card",
                    className: "flex flex-col items-center gap-4 py-8 ",
                    children: [
                      s.jsx("img", {
                        src: a.image,
                        alt: a.title,
                        className: "sm:w-full",
                      }),
                      s.jsx("h3", {
                        className: "font-bold text-base text-darkblue1",
                        children: a.title,
                      }),
                      s.jsx("p", {
                        className: "text-sm font-bold text-gray",
                        children: a.link,
                      }),
                      s.jsxs("span", {
                        id: "prices",
                        className: "flex flex-row gap-4",
                        children: [
                          s.jsx("p", {
                            className: "text-sm font-bold text-gray",
                            children: a.price1,
                          }),
                          s.jsx("p", {
                            className: "text-sm font-bold text-green2",
                            children: a.price2,
                          }),
                        ],
                      }),
                      s.jsx("span", {
                        id: "colors",
                        children: s.jsxs("div", {
                          className:
                            "flex items-center justify-center space-x-2",
                          children: [
                            s.jsx("div", {
                              className: "w-4 h-4 rounded-full bg-red",
                            }),
                            s.jsx("div", {
                              className: "w-4 h-4 rounded-full bg-blue-500",
                            }),
                            s.jsx("div", {
                              className: "w-4 h-4 rounded-full bg-green",
                            }),
                            s.jsx("div", {
                              className: "w-4 h-4 rounded-full bg-yellow-500",
                            }),
                          ],
                        }),
                      }),
                      s.jsx("span", {
                        id: "button-span",
                        className: "flex flex-row gap-4",
                        children: s.jsx("button", {
                          className:
                            "py-[4px] px-[4px] flex border-solid border-[1px] text-lightgray bg-darkblue1 rounded-md w-30 justify-center text-sm font-bold  tracking-normal",
                          children: "Add to Cart",
                        }),
                      }),
                    ],
                  },
                  i
                )
              ),
            }),
            s.jsx("span", {
              id: "pagination",
              className: "sm:py-10",
              children: s.jsx(Wy, {}),
            }),
          ],
        }),
        s.jsxs("section", {
          className:
            "px-40 sm:px-10 py-10 bg-lightgray flex flex-row sm:flex-col sm:gap-8 justify-between content-center text-7xl text-gray",
          id: "logo-section",
          children: [
            s.jsx(j, { icon: Ms }),
            s.jsx(j, { icon: zs }),
            s.jsx(j, { icon: Ds }),
            s.jsx(j, { icon: $s }),
            s.jsx(j, { icon: Rs }),
            s.jsx(j, { icon: Fs }),
          ],
        }),
      ],
    });
  },
  Yy = () => s.jsx("div", { children: s.jsx(Vy, {}) }),
  Qy = () =>
    s.jsxs("div", {
      id: "navbar-dark",
      className:
        "flex sm:hidden justify-between font-bold text-sm items-center px-40 py-4 bg-darkblue1 ",
      children: [
        s.jsxs("label", {
          id: "contact",
          htmlFor: "contact",
          className: "flex items-center gap-8",
          children: [
            s.jsx("span", {
              className: "flex ",
              id: "contact-span",
              children: s.jsxs("p", {
                className: "flex text-center items-center gap-2 ",
                id: "contact-logo",
                children: [s.jsx(j, { icon: U1 }), "(225) 555-0118"],
              }),
            }),
            s.jsx("span", {
              className: "flex",
              id: "contact-span",
              children: s.jsxs("a", {
                className: "flex text-center gap-2 items-center ",
                href: "",
                id: "contact-logo",
                children: [
                  s.jsx(j, { icon: H1 }),
                  "michelle.rivera@example.com",
                ],
              }),
            }),
          ],
        }),
        s.jsx("p", { children: "Follow Us and get a chance to win 80% off" }),
        s.jsxs("label", {
          id: "social-media",
          htmlFor: "",
          className: "flex pb-2 items-center gap-4 md:gap-8",
          children: [
            s.jsx("p", { className: "", children: "Follow Us :" }),
            s.jsxs("span", {
              id: "social-media-logos",
              className: "flex gap-4 items-center  ",
              children: [
                s.jsx("a", {
                  href: "https://www.instagram.com/",
                  children: s.jsx(j, { icon: _t }),
                }),
                s.jsx("a", {
                  href: "https://www.youtube.com/",
                  children: s.jsx(j, { icon: By }),
                }),
                s.jsx("a", {
                  href: "https://www.facebook.com/",
                  children: s.jsx(j, { icon: It }),
                }),
                s.jsx("a", {
                  href: "https://www.twitter.com/",
                  children: s.jsx(j, { icon: At }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
var Ky = Object.defineProperty,
  Gy = (e, t, n) =>
    t in e
      ? Ky(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Tl = (e, t, n) => (Gy(e, typeof t != "symbol" ? t + "" : t, n), n);
let Xy = class {
    constructor() {
      Tl(this, "current", this.detect()),
        Tl(this, "handoffState", "pending"),
        Tl(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  In = new Xy(),
  it = (e, t) => {
    In.isServer ? C.useEffect(e, t) : C.useLayoutEffect(e, t);
  };
function un(e) {
  let t = C.useRef(e);
  return (
    it(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ie = function (e) {
  let t = un(e);
  return F.useCallback((...n) => t.current(...n), [t]);
};
function qy(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function Dt() {
  let e = [],
    t = {
      addEventListener(n, r, a, i) {
        return (
          n.addEventListener(r, a, i),
          t.add(() => n.removeEventListener(r, a, i))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          qy(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, a) {
        let i = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: a }),
          this.add(() => {
            Object.assign(n.style, { [r]: i });
          })
        );
      },
      group(n) {
        let r = Dt();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let a of e.splice(r, 1)) a();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function Us() {
  let [e] = C.useState(Dt);
  return C.useEffect(() => () => e.dispose(), [e]), e;
}
function Zy() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Ec
    ? ((t) => t.useSyncExternalStore)(Ec)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function pc() {
  let e = Zy(),
    [t, n] = C.useState(In.isHandoffComplete);
  return (
    t && In.isHandoffComplete === !1 && n(!1),
    C.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    C.useEffect(() => In.handoff(), []),
    e ? !1 : t
  );
}
var Nd;
let hc =
  (Nd = F.useId) != null
    ? Nd
    : function () {
        let e = pc(),
          [t, n] = F.useState(e ? () => In.nextId() : null);
        return (
          it(() => {
            t === null && n(In.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Qe(e, t, ...n) {
  if (e in t) {
    let a = t[e];
    return typeof a == "function" ? a(...n) : a;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((a) => `"${a}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Qe), r);
}
function Hs(e) {
  return In.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let Yo = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var Qo = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Qo || {}),
  Jy = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Jy || {}),
  e4 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(e4 || {});
function W1(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Yo)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var vc = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(vc || {});
function gc(e, t = 0) {
  var n;
  return e === ((n = Hs(e)) == null ? void 0 : n.body)
    ? !1
    : Qe(t, {
        0() {
          return e.matches(Yo);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(Yo)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
function V1(e) {
  let t = Hs(e);
  Dt().nextFrame(() => {
    t && !gc(t.activeElement, 0) && n4(e);
  });
}
var t4 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(t4 || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function n4(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let r4 = ["textarea", "input"].join(",");
function a4(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, r4)) !=
    null
    ? n
    : !1;
}
function Y1(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let a = t(n),
      i = t(r);
    if (a === null || i === null) return 0;
    let l = a.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : l & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function i4(e, t) {
  return s4(W1(), t, { relativeTo: e });
}
function s4(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: a = [] } = {}
) {
  let i = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    l = Array.isArray(e) ? (n ? Y1(e) : e) : W1(e);
  a.length > 0 && l.length > 1 && (l = l.filter((g) => !a.includes(g))),
    (r = r ?? i.activeElement);
  let o = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, l.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, l.indexOf(r)) + 1;
      if (t & 8) return l.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    f = 0,
    d = l.length,
    p;
  do {
    if (f >= d || f + d <= 0) return 0;
    let g = u + f;
    if (t & 16) g = (g + d) % d;
    else {
      if (g < 0) return 3;
      if (g >= d) return 1;
    }
    (p = l[g]), p == null || p.focus(c), (f += o);
  } while (p !== i.activeElement);
  return t & 6 && a4(p) && p.select(), 2;
}
function l4() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function o4() {
  return /Android/gi.test(window.navigator.userAgent);
}
function u4() {
  return l4() || o4();
}
function ai(e, t, n) {
  let r = un(t);
  C.useEffect(() => {
    function a(i) {
      r.current(i);
    }
    return (
      document.addEventListener(e, a, n),
      () => document.removeEventListener(e, a, n)
    );
  }, [e, n]);
}
function c4(e, t, n) {
  let r = un(t);
  C.useEffect(() => {
    function a(i) {
      r.current(i);
    }
    return (
      window.addEventListener(e, a, n),
      () => window.removeEventListener(e, a, n)
    );
  }, [e, n]);
}
function f4(e, t, n = !0) {
  let r = C.useRef(!1);
  C.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function a(l, o) {
    if (!r.current || l.defaultPrevented) return;
    let u = o(l);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = (function f(d) {
      return typeof d == "function"
        ? f(d())
        : Array.isArray(d) || d instanceof Set
        ? d
        : [d];
    })(e);
    for (let f of c) {
      if (f === null) continue;
      let d = f instanceof HTMLElement ? f : f.current;
      if (
        (d != null && d.contains(u)) ||
        (l.composed && l.composedPath().includes(d))
      )
        return;
    }
    return !gc(u, vc.Loose) && u.tabIndex !== -1 && l.preventDefault(), t(l, u);
  }
  let i = C.useRef(null);
  ai(
    "pointerdown",
    (l) => {
      var o, u;
      r.current &&
        (i.current =
          ((u = (o = l.composedPath) == null ? void 0 : o.call(l)) == null
            ? void 0
            : u[0]) || l.target);
    },
    !0
  ),
    ai(
      "mousedown",
      (l) => {
        var o, u;
        r.current &&
          (i.current =
            ((u = (o = l.composedPath) == null ? void 0 : o.call(l)) == null
              ? void 0
              : u[0]) || l.target);
      },
      !0
    ),
    ai(
      "click",
      (l) => {
        u4() || (i.current && (a(l, () => i.current), (i.current = null)));
      },
      !0
    ),
    ai(
      "touchend",
      (l) => a(l, () => (l.target instanceof HTMLElement ? l.target : null)),
      !0
    ),
    c4(
      "blur",
      (l) =>
        a(l, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function d4(...e) {
  return C.useMemo(() => Hs(...e), [...e]);
}
function kd(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function m4(e, t) {
  let [n, r] = C.useState(() => kd(e));
  return (
    it(() => {
      r(kd(e));
    }, [e.type, e.as]),
    it(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
let p4 = Symbol();
function Er(...e) {
  let t = C.useRef(e);
  C.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ie((r) => {
    for (let a of t.current)
      a != null && (typeof a == "function" ? a(r) : (a.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[p4])) ? void 0 : n;
}
function Sd(e) {
  return [e.screenX, e.screenY];
}
function h4() {
  let e = C.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let n = Sd(t);
      return e.current[0] === n[0] && e.current[1] === n[1]
        ? !1
        : ((e.current = n), !0);
    },
    update(t) {
      e.current = Sd(t);
    },
  };
}
function v4({ container: e, accept: t, walk: n, enabled: r = !0 }) {
  let a = C.useRef(t),
    i = C.useRef(n);
  C.useEffect(() => {
    (a.current = t), (i.current = n);
  }, [t, n]),
    it(() => {
      if (!e || !r) return;
      let l = Hs(e);
      if (!l) return;
      let o = a.current,
        u = i.current,
        c = Object.assign((d) => o(d), { acceptNode: o }),
        f = l.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, c, !1);
      for (; f.nextNode(); ) u(f.currentNode);
    }, [e, r, a, i]);
}
function es(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var ts = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(ts || {}),
  Jt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Jt || {});
function Cr({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: a,
  visible: i = !0,
  name: l,
  mergeRefs: o,
}) {
  o = o ?? g4;
  let u = Q1(t, e);
  if (i) return ii(u, n, r, l, o);
  let c = a ?? 0;
  if (c & 2) {
    let { static: f = !1, ...d } = u;
    if (f) return ii(d, n, r, l, o);
  }
  if (c & 1) {
    let { unmount: f = !0, ...d } = u;
    return Qe(f ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return ii({ ...d, hidden: !0, style: { display: "none" } }, n, r, l, o);
      },
    });
  }
  return ii(u, n, r, l, o);
}
function ii(e, t = {}, n, r, a) {
  let {
      as: i = n,
      children: l,
      refName: o = "ref",
      ...u
    } = _l(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [o]: e.ref } : {},
    f = typeof l == "function" ? l(t) : l;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let d = {};
  if (t) {
    let p = !1,
      g = [];
    for (let [x, y] of Object.entries(t))
      typeof y == "boolean" && (p = !0), y === !0 && g.push(x);
    p && (d["data-headlessui-state"] = g.join(" "));
  }
  if (i === C.Fragment && Object.keys(Ed(u)).length > 0) {
    if (!C.isValidElement(f) || (Array.isArray(f) && f.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((y) => `  - ${y}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((y) => `  - ${y}`).join(`
`),
        ].join(`
`)
      );
    let p = f.props,
      g =
        typeof (p == null ? void 0 : p.className) == "function"
          ? (...y) => es(p == null ? void 0 : p.className(...y), u.className)
          : es(p == null ? void 0 : p.className, u.className),
      x = g ? { className: g } : {};
    return C.cloneElement(
      f,
      Object.assign(
        {},
        Q1(f.props, Ed(_l(u, ["ref"]))),
        d,
        c,
        { ref: a(f.ref, c.ref) },
        x
      )
    );
  }
  return C.createElement(
    i,
    Object.assign(
      {},
      _l(u, ["ref"]),
      i !== C.Fragment && c,
      i !== C.Fragment && d
    ),
    f
  );
}
function g4(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function Q1(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let a in r)
      a.startsWith("on") && typeof r[a] == "function"
        ? (n[a] != null || (n[a] = []), n[a].push(r[a]))
        : (t[a] = r[a]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](a, ...i) {
        let l = n[r];
        for (let o of l) {
          if (
            (a instanceof Event ||
              (a == null ? void 0 : a.nativeEvent) instanceof Event) &&
            a.defaultPrevented
          )
            return;
          o(a, ...i);
        }
      },
    });
  return t;
}
function Hn(e) {
  var t;
  return Object.assign(C.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Ed(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function _l(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let xc = C.createContext(null);
xc.displayName = "OpenClosedContext";
var Ve = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Ve || {});
function yc() {
  return C.useContext(xc);
}
function K1({ value: e, children: t }) {
  return F.createElement(xc.Provider, { value: e }, t);
}
function x4(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && y4(n) ? !1 : r;
}
function y4(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function w4(e) {
  throw new Error("Unexpected object: " + e);
}
var mt = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(mt || {});
function b4(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    a = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i)
        if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      for (let i = a - 1; i >= 0; --i)
        if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = a + 1; i < n.length; ++i)
        if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i)
        if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i)
        if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      w4(e);
  }
}
var je = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(je || {});
function wc() {
  let e = C.useRef(!1);
  return (
    it(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
let Cd =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Pd(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "",
    a = e.cloneNode(!0);
  if (!(a instanceof HTMLElement)) return r;
  let i = !1;
  for (let o of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    o.remove(), (i = !0);
  let l = i ? ((n = a.innerText) != null ? n : "") : r;
  return Cd.test(l) && (l = l.replace(Cd, "")), l;
}
function j4(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n
      .split(" ")
      .map((a) => {
        let i = document.getElementById(a);
        if (i) {
          let l = i.getAttribute("aria-label");
          return typeof l == "string" ? l.trim() : Pd(i).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return Pd(e).trim();
}
function N4(e) {
  let t = C.useRef(""),
    n = C.useRef("");
  return ie(() => {
    let r = e.current;
    if (!r) return "";
    let a = r.innerText;
    if (t.current === a) return n.current;
    let i = j4(r).trim().toLowerCase();
    return (t.current = a), (n.current = i), i;
  });
}
var k4 = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(k4 || {}),
  S4 = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(S4 || {}),
  E4 = ((e) => (
    (e[(e.OpenMenu = 0)] = "OpenMenu"),
    (e[(e.CloseMenu = 1)] = "CloseMenu"),
    (e[(e.GoToItem = 2)] = "GoToItem"),
    (e[(e.Search = 3)] = "Search"),
    (e[(e.ClearSearch = 4)] = "ClearSearch"),
    (e[(e.RegisterItem = 5)] = "RegisterItem"),
    (e[(e.UnregisterItem = 6)] = "UnregisterItem"),
    e
  ))(E4 || {});
function Il(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
    r = Y1(t(e.items.slice()), (i) => i.dataRef.current.domRef.current),
    a = n ? r.indexOf(n) : null;
  return a === -1 && (a = null), { items: r, activeItemIndex: a };
}
let C4 = {
    1(e) {
      return e.menuState === 1
        ? e
        : { ...e, activeItemIndex: null, menuState: 1 };
    },
    0(e) {
      return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
    },
    2: (e, t) => {
      var n;
      let r = Il(e),
        a = b4(t, {
          resolveItems: () => r.items,
          resolveActiveIndex: () => r.activeItemIndex,
          resolveId: (i) => i.id,
          resolveDisabled: (i) => i.dataRef.current.disabled,
        });
      return {
        ...e,
        ...r,
        searchQuery: "",
        activeItemIndex: a,
        activationTrigger: (n = t.trigger) != null ? n : 1,
      };
    },
    3: (e, t) => {
      let n = e.searchQuery !== "" ? 0 : 1,
        r = e.searchQuery + t.value.toLowerCase(),
        a = (
          e.activeItemIndex !== null
            ? e.items
                .slice(e.activeItemIndex + n)
                .concat(e.items.slice(0, e.activeItemIndex + n))
            : e.items
        ).find((l) => {
          var o;
          return (
            ((o = l.dataRef.current.textValue) == null
              ? void 0
              : o.startsWith(r)) && !l.dataRef.current.disabled
          );
        }),
        i = a ? e.items.indexOf(a) : -1;
      return i === -1 || i === e.activeItemIndex
        ? { ...e, searchQuery: r }
        : { ...e, searchQuery: r, activeItemIndex: i, activationTrigger: 1 };
    },
    4(e) {
      return e.searchQuery === ""
        ? e
        : { ...e, searchQuery: "", searchActiveItemIndex: null };
    },
    5: (e, t) => {
      let n = Il(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
      return { ...e, ...n };
    },
    6: (e, t) => {
      let n = Il(e, (r) => {
        let a = r.findIndex((i) => i.id === t.id);
        return a !== -1 && r.splice(a, 1), r;
      });
      return { ...e, ...n, activationTrigger: 1 };
    },
  },
  bc = C.createContext(null);
bc.displayName = "MenuContext";
function Bs(e) {
  let t = C.useContext(bc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Bs), n);
  }
  return t;
}
function P4(e, t) {
  return Qe(t.type, C4, e, t);
}
let T4 = C.Fragment;
function _4(e, t) {
  let { __demoMode: n = !1, ...r } = e,
    a = C.useReducer(P4, {
      __demoMode: n,
      menuState: n ? 0 : 1,
      buttonRef: C.createRef(),
      itemsRef: C.createRef(),
      items: [],
      searchQuery: "",
      activeItemIndex: null,
      activationTrigger: 1,
    }),
    [{ menuState: i, itemsRef: l, buttonRef: o }, u] = a,
    c = Er(t);
  f4(
    [o, l],
    (g, x) => {
      var y;
      u({ type: 1 }),
        gc(x, vc.Loose) ||
          (g.preventDefault(), (y = o.current) == null || y.focus());
    },
    i === 0
  );
  let f = ie(() => {
      u({ type: 1 });
    }),
    d = C.useMemo(() => ({ open: i === 0, close: f }), [i, f]),
    p = { ref: c };
  return F.createElement(
    bc.Provider,
    { value: a },
    F.createElement(
      K1,
      { value: Qe(i, { 0: Ve.Open, 1: Ve.Closed }) },
      Cr({ ourProps: p, theirProps: r, slot: d, defaultTag: T4, name: "Menu" })
    )
  );
}
let I4 = "button";
function A4(e, t) {
  var n;
  let r = hc(),
    { id: a = `headlessui-menu-button-${r}`, ...i } = e,
    [l, o] = Bs("Menu.Button"),
    u = Er(l.buttonRef, t),
    c = Us(),
    f = ie((y) => {
      switch (y.key) {
        case je.Space:
        case je.Enter:
        case je.ArrowDown:
          y.preventDefault(),
            y.stopPropagation(),
            o({ type: 0 }),
            c.nextFrame(() => o({ type: 2, focus: mt.First }));
          break;
        case je.ArrowUp:
          y.preventDefault(),
            y.stopPropagation(),
            o({ type: 0 }),
            c.nextFrame(() => o({ type: 2, focus: mt.Last }));
          break;
      }
    }),
    d = ie((y) => {
      switch (y.key) {
        case je.Space:
          y.preventDefault();
          break;
      }
    }),
    p = ie((y) => {
      if (x4(y.currentTarget)) return y.preventDefault();
      e.disabled ||
        (l.menuState === 0
          ? (o({ type: 1 }),
            c.nextFrame(() => {
              var N;
              return (N = l.buttonRef.current) == null
                ? void 0
                : N.focus({ preventScroll: !0 });
            }))
          : (y.preventDefault(), o({ type: 0 })));
    }),
    g = C.useMemo(() => ({ open: l.menuState === 0 }), [l]),
    x = {
      ref: u,
      id: a,
      type: m4(e, l.buttonRef),
      "aria-haspopup": "menu",
      "aria-controls": (n = l.itemsRef.current) == null ? void 0 : n.id,
      "aria-expanded": l.menuState === 0,
      onKeyDown: f,
      onKeyUp: d,
      onClick: p,
    };
  return Cr({
    ourProps: x,
    theirProps: i,
    slot: g,
    defaultTag: I4,
    name: "Menu.Button",
  });
}
let L4 = "div",
  O4 = ts.RenderStrategy | ts.Static;
function M4(e, t) {
  var n, r;
  let a = hc(),
    { id: i = `headlessui-menu-items-${a}`, ...l } = e,
    [o, u] = Bs("Menu.Items"),
    c = Er(o.itemsRef, t),
    f = d4(o.itemsRef),
    d = Us(),
    p = yc(),
    g = p !== null ? (p & Ve.Open) === Ve.Open : o.menuState === 0;
  C.useEffect(() => {
    let m = o.itemsRef.current;
    m &&
      o.menuState === 0 &&
      m !== (f == null ? void 0 : f.activeElement) &&
      m.focus({ preventScroll: !0 });
  }, [o.menuState, o.itemsRef, f]),
    v4({
      container: o.itemsRef.current,
      enabled: o.menuState === 0,
      accept(m) {
        return m.getAttribute("role") === "menuitem"
          ? NodeFilter.FILTER_REJECT
          : m.hasAttribute("role")
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
      walk(m) {
        m.setAttribute("role", "none");
      },
    });
  let x = ie((m) => {
      var h, w;
      switch ((d.dispose(), m.key)) {
        case je.Space:
          if (o.searchQuery !== "")
            return (
              m.preventDefault(),
              m.stopPropagation(),
              u({ type: 3, value: m.key })
            );
        case je.Enter:
          if (
            (m.preventDefault(),
            m.stopPropagation(),
            u({ type: 1 }),
            o.activeItemIndex !== null)
          ) {
            let { dataRef: b } = o.items[o.activeItemIndex];
            (w = (h = b.current) == null ? void 0 : h.domRef.current) == null ||
              w.click();
          }
          V1(o.buttonRef.current);
          break;
        case je.ArrowDown:
          return (
            m.preventDefault(),
            m.stopPropagation(),
            u({ type: 2, focus: mt.Next })
          );
        case je.ArrowUp:
          return (
            m.preventDefault(),
            m.stopPropagation(),
            u({ type: 2, focus: mt.Previous })
          );
        case je.Home:
        case je.PageUp:
          return (
            m.preventDefault(),
            m.stopPropagation(),
            u({ type: 2, focus: mt.First })
          );
        case je.End:
        case je.PageDown:
          return (
            m.preventDefault(),
            m.stopPropagation(),
            u({ type: 2, focus: mt.Last })
          );
        case je.Escape:
          m.preventDefault(),
            m.stopPropagation(),
            u({ type: 1 }),
            Dt().nextFrame(() => {
              var b;
              return (b = o.buttonRef.current) == null
                ? void 0
                : b.focus({ preventScroll: !0 });
            });
          break;
        case je.Tab:
          m.preventDefault(),
            m.stopPropagation(),
            u({ type: 1 }),
            Dt().nextFrame(() => {
              i4(o.buttonRef.current, m.shiftKey ? Qo.Previous : Qo.Next);
            });
          break;
        default:
          m.key.length === 1 &&
            (u({ type: 3, value: m.key }),
            d.setTimeout(() => u({ type: 4 }), 350));
          break;
      }
    }),
    y = ie((m) => {
      switch (m.key) {
        case je.Space:
          m.preventDefault();
          break;
      }
    }),
    N = C.useMemo(() => ({ open: o.menuState === 0 }), [o]),
    v = {
      "aria-activedescendant":
        o.activeItemIndex === null || (n = o.items[o.activeItemIndex]) == null
          ? void 0
          : n.id,
      "aria-labelledby": (r = o.buttonRef.current) == null ? void 0 : r.id,
      id: i,
      onKeyDown: x,
      onKeyUp: y,
      role: "menu",
      tabIndex: 0,
      ref: c,
    };
  return Cr({
    ourProps: v,
    theirProps: l,
    slot: N,
    defaultTag: L4,
    features: O4,
    visible: g,
    name: "Menu.Items",
  });
}
let R4 = C.Fragment;
function z4(e, t) {
  let n = hc(),
    { id: r = `headlessui-menu-item-${n}`, disabled: a = !1, ...i } = e,
    [l, o] = Bs("Menu.Item"),
    u = l.activeItemIndex !== null ? l.items[l.activeItemIndex].id === r : !1,
    c = C.useRef(null),
    f = Er(t, c);
  it(() => {
    if (l.__demoMode || l.menuState !== 0 || !u || l.activationTrigger === 0)
      return;
    let b = Dt();
    return (
      b.requestAnimationFrame(() => {
        var S, k;
        (k = (S = c.current) == null ? void 0 : S.scrollIntoView) == null ||
          k.call(S, { block: "nearest" });
      }),
      b.dispose
    );
  }, [l.__demoMode, c, u, l.menuState, l.activationTrigger, l.activeItemIndex]);
  let d = N4(c),
    p = C.useRef({
      disabled: a,
      domRef: c,
      get textValue() {
        return d();
      },
    });
  it(() => {
    p.current.disabled = a;
  }, [p, a]),
    it(
      () => (o({ type: 5, id: r, dataRef: p }), () => o({ type: 6, id: r })),
      [p, r]
    );
  let g = ie(() => {
      o({ type: 1 });
    }),
    x = ie((b) => {
      if (a) return b.preventDefault();
      o({ type: 1 }), V1(l.buttonRef.current);
    }),
    y = ie(() => {
      if (a) return o({ type: 2, focus: mt.Nothing });
      o({ type: 2, focus: mt.Specific, id: r });
    }),
    N = h4(),
    v = ie((b) => N.update(b)),
    m = ie((b) => {
      N.wasMoved(b) &&
        (a || u || o({ type: 2, focus: mt.Specific, id: r, trigger: 0 }));
    }),
    h = ie((b) => {
      N.wasMoved(b) && (a || (u && o({ type: 2, focus: mt.Nothing })));
    }),
    w = C.useMemo(() => ({ active: u, disabled: a, close: g }), [u, a, g]);
  return Cr({
    ourProps: {
      id: r,
      ref: f,
      role: "menuitem",
      tabIndex: a === !0 ? void 0 : -1,
      "aria-disabled": a === !0 ? !0 : void 0,
      disabled: void 0,
      onClick: x,
      onFocus: y,
      onPointerEnter: v,
      onMouseEnter: v,
      onPointerMove: m,
      onMouseMove: m,
      onPointerLeave: h,
      onMouseLeave: h,
    },
    theirProps: i,
    slot: w,
    defaultTag: R4,
    name: "Menu.Item",
  });
}
let $4 = Hn(_4),
  F4 = Hn(A4),
  D4 = Hn(M4),
  U4 = Hn(z4),
  bn = Object.assign($4, { Button: F4, Items: D4, Item: U4 });
function H4(e = 0) {
  let [t, n] = C.useState(e),
    r = wc(),
    a = C.useCallback(
      (u) => {
        r.current && n((c) => c | u);
      },
      [t, r]
    ),
    i = C.useCallback((u) => !!(t & u), [t]),
    l = C.useCallback(
      (u) => {
        r.current && n((c) => c & ~u);
      },
      [n, r]
    ),
    o = C.useCallback(
      (u) => {
        r.current && n((c) => c ^ u);
      },
      [n]
    );
  return { flags: t, addFlag: a, hasFlag: i, removeFlag: l, toggleFlag: o };
}
function B4(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Al(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ll(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function W4(e, t) {
  let n = Dt();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: a } = getComputedStyle(e),
    [i, l] = [r, a].map((u) => {
      let [c = 0] = u
        .split(",")
        .filter(Boolean)
        .map((f) => (f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3))
        .sort((f, d) => d - f);
      return c;
    }),
    o = i + l;
  if (o !== 0) {
    n.group((c) => {
      c.setTimeout(() => {
        t(), c.dispose();
      }, o),
        c.addEventListener(e, "transitionrun", (f) => {
          f.target === f.currentTarget && c.dispose();
        });
    });
    let u = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), u());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function V4(e, t, n, r) {
  let a = n ? "enter" : "leave",
    i = Dt(),
    l = r !== void 0 ? B4(r) : () => {};
  a === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let o = Qe(a, { enter: () => t.enter, leave: () => t.leave }),
    u = Qe(a, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = Qe(a, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    Ll(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    Al(e, ...t.base, ...o, ...c),
    i.nextFrame(() => {
      Ll(e, ...t.base, ...o, ...c),
        Al(e, ...t.base, ...o, ...u),
        W4(
          e,
          () => (Ll(e, ...t.base, ...o), Al(e, ...t.base, ...t.entered), l())
        );
    }),
    i.dispose
  );
}
function Y4({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: a,
  onStop: i,
}) {
  let l = wc(),
    o = Us(),
    u = un(n);
  it(() => {
    e && (u.current = "enter");
  }, [e]),
    it(() => {
      let c = Dt();
      o.add(c.dispose);
      let f = t.current;
      if (f && u.current !== "idle" && l.current)
        return (
          c.dispose(),
          a.current(u.current),
          c.add(
            V4(f, r.current, u.current === "enter", () => {
              c.dispose(), i.current(u.current);
            })
          ),
          c.dispose
        );
    }, [n]);
}
function Vt(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Ws = C.createContext(null);
Ws.displayName = "TransitionContext";
var Q4 = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Q4 || {});
function K4() {
  let e = C.useContext(Ws);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function G4() {
  let e = C.useContext(Vs);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Vs = C.createContext(null);
Vs.displayName = "NestingContext";
function Ys(e) {
  return "children" in e
    ? Ys(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function G1(e, t) {
  let n = un(e),
    r = C.useRef([]),
    a = wc(),
    i = Us(),
    l = ie((g, x = Jt.Hidden) => {
      let y = r.current.findIndex(({ el: N }) => N === g);
      y !== -1 &&
        (Qe(x, {
          [Jt.Unmount]() {
            r.current.splice(y, 1);
          },
          [Jt.Hidden]() {
            r.current[y].state = "hidden";
          },
        }),
        i.microTask(() => {
          var N;
          !Ys(r) && a.current && ((N = n.current) == null || N.call(n));
        }));
    }),
    o = ie((g) => {
      let x = r.current.find(({ el: y }) => y === g);
      return (
        x
          ? x.state !== "visible" && (x.state = "visible")
          : r.current.push({ el: g, state: "visible" }),
        () => l(g, Jt.Unmount)
      );
    }),
    u = C.useRef([]),
    c = C.useRef(Promise.resolve()),
    f = C.useRef({ enter: [], leave: [], idle: [] }),
    d = ie((g, x, y) => {
      u.current.splice(0),
        t &&
          (t.chains.current[x] = t.chains.current[x].filter(([N]) => N !== g)),
        t == null ||
          t.chains.current[x].push([
            g,
            new Promise((N) => {
              u.current.push(N);
            }),
          ]),
        t == null ||
          t.chains.current[x].push([
            g,
            new Promise((N) => {
              Promise.all(f.current[x].map(([v, m]) => m)).then(() => N());
            }),
          ]),
        x === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => y(x)))
          : y(x);
    }),
    p = ie((g, x, y) => {
      Promise.all(f.current[x].splice(0).map(([N, v]) => v))
        .then(() => {
          var N;
          (N = u.current.shift()) == null || N();
        })
        .then(() => y(x));
    });
  return C.useMemo(
    () => ({
      children: r,
      register: o,
      unregister: l,
      onStart: d,
      onStop: p,
      wait: c,
      chains: f,
    }),
    [o, l, r, d, p, f, c]
  );
}
function X4() {}
let q4 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Td(e) {
  var t;
  let n = {};
  for (let r of q4) n[r] = (t = e[r]) != null ? t : X4;
  return n;
}
function Z4(e) {
  let t = C.useRef(Td(e));
  return (
    C.useEffect(() => {
      t.current = Td(e);
    }, [e]),
    t
  );
}
let J4 = "div",
  X1 = ts.RenderStrategy;
function e3(e, t) {
  var n, r;
  let {
      beforeEnter: a,
      afterEnter: i,
      beforeLeave: l,
      afterLeave: o,
      enter: u,
      enterFrom: c,
      enterTo: f,
      entered: d,
      leave: p,
      leaveFrom: g,
      leaveTo: x,
      ...y
    } = e,
    N = C.useRef(null),
    v = Er(N, t),
    m = (n = y.unmount) == null || n ? Jt.Unmount : Jt.Hidden,
    { show: h, appear: w, initial: b } = K4(),
    [S, k] = C.useState(h ? "visible" : "hidden"),
    T = G4(),
    { register: $, unregister: M } = T;
  C.useEffect(() => $(N), [$, N]),
    C.useEffect(() => {
      if (m === Jt.Hidden && N.current) {
        if (h && S !== "visible") {
          k("visible");
          return;
        }
        return Qe(S, { hidden: () => M(N), visible: () => $(N) });
      }
    }, [S, N, $, M, h, m]);
  let H = un({
      base: Vt(y.className),
      enter: Vt(u),
      enterFrom: Vt(c),
      enterTo: Vt(f),
      entered: Vt(d),
      leave: Vt(p),
      leaveFrom: Vt(g),
      leaveTo: Vt(x),
    }),
    le = Z4({ beforeEnter: a, afterEnter: i, beforeLeave: l, afterLeave: o }),
    xe = pc();
  C.useEffect(() => {
    if (xe && S === "visible" && N.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [N, S, xe]);
  let pe = b && !w,
    oe = w && h && b,
    et = !xe || pe ? "idle" : h ? "enter" : "leave",
    Be = H4(0),
    I = ie((B) =>
      Qe(B, {
        enter: () => {
          Be.addFlag(Ve.Opening), le.current.beforeEnter();
        },
        leave: () => {
          Be.addFlag(Ve.Closing), le.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    _ = ie((B) =>
      Qe(B, {
        enter: () => {
          Be.removeFlag(Ve.Opening), le.current.afterEnter();
        },
        leave: () => {
          Be.removeFlag(Ve.Closing), le.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    E = G1(() => {
      k("hidden"), M(N);
    }, T),
    R = C.useRef(!1);
  Y4({
    immediate: oe,
    container: N,
    classes: H,
    direction: et,
    onStart: un((B) => {
      (R.current = !0), E.onStart(N, B, I);
    }),
    onStop: un((B) => {
      (R.current = !1),
        E.onStop(N, B, _),
        B === "leave" && !Ys(E) && (k("hidden"), M(N));
    }),
  });
  let O = y,
    V = { ref: v };
  return (
    oe
      ? (O = {
          ...O,
          className: es(
            y.className,
            ...H.current.enter,
            ...H.current.enterFrom
          ),
        })
      : R.current &&
        ((O.className = es(
          y.className,
          (r = N.current) == null ? void 0 : r.className
        )),
        O.className === "" && delete O.className),
    F.createElement(
      Vs.Provider,
      { value: E },
      F.createElement(
        K1,
        { value: Qe(S, { visible: Ve.Open, hidden: Ve.Closed }) | Be.flags },
        Cr({
          ourProps: V,
          theirProps: O,
          defaultTag: J4,
          features: X1,
          visible: S === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function t3(e, t) {
  let { show: n, appear: r = !1, unmount: a = !0, ...i } = e,
    l = C.useRef(null),
    o = Er(l, t);
  pc();
  let u = yc();
  if (
    (n === void 0 && u !== null && (n = (u & Ve.Open) === Ve.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [c, f] = C.useState(n ? "visible" : "hidden"),
    d = G1(() => {
      f("hidden");
    }),
    [p, g] = C.useState(!0),
    x = C.useRef([n]);
  it(() => {
    p !== !1 &&
      x.current[x.current.length - 1] !== n &&
      (x.current.push(n), g(!1));
  }, [x, n]);
  let y = C.useMemo(() => ({ show: n, appear: r, initial: p }), [n, r, p]);
  C.useEffect(() => {
    if (n) f("visible");
    else if (!Ys(d)) f("hidden");
    else {
      let h = l.current;
      if (!h) return;
      let w = h.getBoundingClientRect();
      w.x === 0 && w.y === 0 && w.width === 0 && w.height === 0 && f("hidden");
    }
  }, [n, d]);
  let N = { unmount: a },
    v = ie(() => {
      var h;
      p && g(!1), (h = e.beforeEnter) == null || h.call(e);
    }),
    m = ie(() => {
      var h;
      p && g(!1), (h = e.beforeLeave) == null || h.call(e);
    });
  return F.createElement(
    Vs.Provider,
    { value: d },
    F.createElement(
      Ws.Provider,
      { value: y },
      Cr({
        ourProps: {
          ...N,
          as: C.Fragment,
          children: F.createElement(q1, {
            ref: o,
            ...N,
            ...i,
            beforeEnter: v,
            beforeLeave: m,
          }),
        },
        theirProps: {},
        defaultTag: C.Fragment,
        features: X1,
        visible: c === "visible",
        name: "Transition",
      })
    )
  );
}
function n3(e, t) {
  let n = C.useContext(Ws) !== null,
    r = yc() !== null;
  return F.createElement(
    F.Fragment,
    null,
    !n && r
      ? F.createElement(Ko, { ref: t, ...e })
      : F.createElement(q1, { ref: t, ...e })
  );
}
let Ko = Hn(t3),
  q1 = Hn(e3),
  r3 = Hn(n3),
  a3 = Object.assign(Ko, { Child: r3, Root: Ko });
function i3({ title: e, titleId: t, ...n }, r) {
  return C.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? C.createElement("title", { id: t }, e) : null,
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      clipRule: "evenodd",
    })
  );
}
const s3 = C.forwardRef(i3),
  l3 = s3;
function si(...e) {
  return e.filter(Boolean).join(" ");
}
function o3() {
  return s.jsxs(bn, {
    as: "div",
    className: "relative inline-block text-left font-Montserrat",
    children: [
      s.jsx("div", {
        children: s.jsxs(bn.Button, {
          className:
            "inline-flex w-full font-Montserrat justify-center gap-x-1.5  bg-white text-sm sm:text-2xl font-semibold text-gray-900",
          children: [
            "Shop",
            s.jsx(l3, {
              className: "-mr-1 h-5 w-5 text-gray-400",
              "aria-hidden": "true",
            }),
          ],
        }),
      }),
      s.jsx(a3, {
        as: C.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: s.jsx(bn.Items, {
          className:
            "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
          children: s.jsxs("div", {
            className: "py-1",
            children: [
              s.jsx(bn.Item, {
                children: ({ active: e }) =>
                  s.jsx("a", {
                    href: "/shop",
                    className: si(
                      e ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    ),
                    children: "Product List",
                  }),
              }),
              s.jsx(bn.Item, {
                children: ({ active: e }) =>
                  s.jsx("a", {
                    href: "#",
                    className: si(
                      e ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    ),
                    children: "Support",
                  }),
              }),
              s.jsx(bn.Item, {
                children: ({ active: e }) =>
                  s.jsx("a", {
                    href: "#",
                    className: si(
                      e ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    ),
                    children: "License",
                  }),
              }),
              s.jsx("form", {
                method: "POST",
                action: "#",
                children: s.jsx(bn.Item, {
                  children: ({ active: e }) =>
                    s.jsx("button", {
                      type: "submit",
                      className: si(
                        e ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      ),
                      children: "Sign out",
                    }),
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const u3 = () => {
    const e = Ca(),
      { pathname: t } = _s();
    return s.jsxs("div", {
      id: "navbar-light",
      className:
        "flex justify-between items-center bg-white px-40 py-3 gap-10 sm:px-0 sm:pb-12 sm:flex-col",
      children: [
        s.jsxs("span", {
          className:
            "flex sm:flex-col gap-14 sm:justify-between sm:px-10 sm:py-5 sm:w-full",
          children: [
            s.jsxs("span", {
              className: "sm:flex sm:flex-row",
              id: "top-bar",
              children: [
                s.jsx("button", {
                  onClick: () => e.push("/home"),
                  className:
                    "font-bold text-lg sm:text-xl pr-4 md:pr-8 text-[#252b42]",
                  children: "BrandName",
                }),
                s.jsxs("span", {
                  id: "mobile-bar",
                  className:
                    "sm:flex flex-row gap-4 justify-end sm:w-full text-darkblue1",
                  children: [
                    s.jsx("button", {
                      className: "sm:flex text-center gap-1 items-center",
                      id: "navbar-nav-icons",
                      children: s.jsx(j, { icon: Vo }),
                    }),
                    s.jsx("button", {
                      className: "flex text-center gap-1 items-center",
                      id: "navbar-nav-icons",
                      children: s.jsx(j, { icon: Ji }),
                    }),
                    s.jsx("button", {
                      className: "flex text-center gap-1 items-center",
                      id: "navbar-nav-icons",
                      children: s.jsx(j, { icon: F1 }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("label", {
              className:
                "font-bold items-start sm:flex-col sm:items-center sm:text-2xl sm:text-gray  text-sm gap-5 flex leading-6 px-[50px] text-[#252b42]",
              children: [
                s.jsx("button", {
                  onClick: () => e.push("/home"),
                  children: "Home",
                }),
                s.jsx("span", {
                  className: `${
                    t === "/shop" || t === "/product" ? "" : "sm:hidden"
                  }`,
                  children: s.jsx(o3, {}),
                }),
                s.jsx("button", {
                  className: `${
                    t === "/shop" || t === "/product" ? "" : "sm:hidden"
                  }`,
                  onClick: () => e.push("/about"),
                  children: "About",
                }),
                s.jsx("button", {
                  className: `${
                    t === "/shop" || t === "/product" ? "" : "sm:hidden"
                  }`,
                  onClick: () => e.push("/blog"),
                  children: "Blog",
                }),
                s.jsx("button", {
                  onClick: () => e.push("/contact"),
                  children: "Contact",
                }),
                s.jsx("button", {
                  className: `${
                    t === "/shop" || t === "/product" ? "" : "sm:hidden"
                  }`,
                  onClick: () => e.push("/pages"),
                  children: "Pages",
                }),
                s.jsxs("span", {
                  id: "mobile-bar",
                  className: `${
                    t === "/shop" || t === "/product" ? "sm:hidden" : ""
                  } flex flex-col gap-5`,
                  children: [
                    s.jsx("button", {
                      className: "",
                      onClick: () => e.push("/pricing"),
                      children: "Pricing",
                    }),
                    s.jsx("button", {
                      onClick: () => e.push("/product"),
                      children: "Product",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsx("span", {
          className: `${t === "/shop" || t === "/product" ? "" : "sm:hidden"} `,
          children: s.jsxs("label", {
            id: "navbar-nav",
            htmlFor: "",
            className:
              "flex items-center justify-between gap-8 md:gap-8 text-[#23a6f0] sm:flex sm:flex-col sm:text-xl",
            children: [
              s.jsxs("button", {
                id: "navbar-nav-icons",
                onClick: () => e.push("/login"),
                className:
                  "flex  text-sm font-bold sm:text-xl text-center gap-1 items-center ",
                children: [s.jsx(j, { icon: w2 }), "Login/Register"],
              }),
              s.jsx("button", {
                className: "flex text-center gap-1 items-center",
                id: "navbar-nav-icons",
                children: s.jsx(j, { icon: Vo }),
              }),
              s.jsxs("button", {
                className: "flex text-center gap-1 items-center",
                id: "navbar-nav-icons",
                children: [s.jsx(j, { icon: Ji }), "1"],
              }),
              s.jsxs("button", {
                className: "flex text-center gap-1 items-center",
                id: "navbar-nav-icons",
                children: [s.jsx(j, { icon: D1 }), "2"],
              }),
            ],
          }),
        }),
      ],
    });
  },
  c3 = () => {
    const e = Ca();
    return (
      _s(),
      s.jsxs("div", {
        id: "navbar-light",
        className:
          "flex sm:w-full sm:flex-col justify-between items-center bg-white px-40 py-3 sm:px-0 sm:pb-12 gap-10 ",
        children: [
          s.jsxs("span", {
            className:
              "flex sm:flex-col gap-14 sm:justify-between sm:px-10 sm:py-5 sm:w-full",
            children: [
              s.jsxs("span", {
                id: "top-bar",
                className:
                  "flex flex-row justify-between text-darkblue1 sm:w-full",
                children: [
                  s.jsx("button", {
                    onClick: () => e.push("/home"),
                    className:
                      "font-bold text-lg sm:text-xl pr-4 md:pr-8 text-[#252b42]",
                    children: "BrandName",
                  }),
                  s.jsxs("span", {
                    id: "mobile-bar",
                    className: "sm:flex flex-row gap-4 justify-end sm:w-full",
                    children: [
                      s.jsx("button", {
                        className: "flex text-center gap-1 items-center",
                        id: "navbar-nav-icons",
                        children: s.jsx(j, { icon: Vo }),
                      }),
                      s.jsx("button", {
                        className: "flex text-center gap-1 items-center",
                        id: "navbar-nav-icons",
                        children: s.jsx(j, { icon: Ji }),
                      }),
                      s.jsx("button", {
                        className: "flex text-center gap-1 items-center",
                        id: "navbar-nav-icons",
                        children: s.jsx(j, { icon: F1 }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("label", {
                className:
                  "sm:flex-col font-bold items-center sm:text-2xl sm:font-bold  text-sm gap-5 flex leading-6 px-[50px] text-darkblue1 sm:text-gray sm:w-full",
                children: [
                  s.jsx("button", {
                    onClick: () => e.push("/home"),
                    children: "Home",
                  }),
                  s.jsx("button", {
                    onClick: () => e.push("/product"),
                    children: "Product",
                  }),
                  s.jsx("button", {
                    onClick: () => e.push("/pricing"),
                    children: "Pricing",
                  }),
                  s.jsx("button", {
                    onClick: () => e.push("/contact"),
                    children: "Contact",
                  }),
                ],
              }),
            ],
          }),
          s.jsx("span", {
            className: "sm:hidden",
            children: s.jsxs("label", {
              id: "navbar-nav",
              htmlFor: "",
              className:
                "flex items-center justify-between gap-8 md:gap-8 text-[#23a6f0]",
              children: [
                s.jsx("button", {
                  id: "navbar-nav-icons",
                  className:
                    "flex text-sm font-bold text-center gap-1 items-center ",
                  children: "Login",
                }),
                s.jsxs("button", {
                  className:
                    "flex text-sm font-bold text-center gap-3 items-center border rounded-md bg-blue1 text-white p-3",
                  children: ["Become a member ", s.jsx(j, { icon: N2 })],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  f3 = () => {
    const { pathname: e } = _s();
    return s.jsxs("header", {
      className: "w-full  font-Montserrat text-white",
      children: [
        e !== "/about" && e !== "/contact" && e !== "/pricing" && e !== "/team"
          ? s.jsx(Qy, {})
          : "",
        e !== "/about" && e !== "/contact" && e !== "/pricing" && e !== "/team"
          ? s.jsx(u3, {})
          : s.jsx(c3, {}),
        s.jsx("hr", {}),
      ],
    });
  },
  d3 = () =>
    s.jsxs("div", {
      className: "relative flex flex-wrap",
      children: [
        s.jsx("input", {
          type: "email",
          className:
            "relative m-0 -mr-0.5 block w-[1px] px-20 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding py-2 text-base font-xl leading-[1.6] text-black outline-none transition duration-200 ease-in-out ",
          placeholder: "Your Email",
        }),
        s.jsx("button", {
          className:
            "z-[2] inline-block rounded-r bg-blue1 px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
          "data-te-ripple-init": !0,
          type: "button",
          id: "button-addon2",
          children: "Subscribe",
        }),
      ],
    }),
  m3 = () => (
    Ca(),
    _s(),
    s.jsx("div", {
      className: "flex justify-center  w-full font-Montserrat",
      id: "footer-container",
      children: s.jsxs("div", {
        id: "footer-div",
        className: " flex flex-col gap-16 w-full",
        children: [
          s.jsxs("section", {
            className:
              "flex justify-between flex-row bg-white py-12 px-40 sm:px-5 sm:flex-col sm:gap-4 sm:bg-lightgray sm:py-8",
            id: "top-container",
            children: [
              s.jsx("label", {
                className: "text-xl font-bold text-darkblue1",
                id: "brand-name",
                children: s.jsx("h2", { children: "BrandName" }),
              }),
              s.jsxs("label", {
                className: "flex flex-row gap-4 text-lg text-blue1",
                id: "social-media",
                children: [
                  s.jsx("a", {
                    href: "https://www.facebook.com/",
                    children: s.jsx(j, { icon: It }),
                  }),
                  s.jsx("a", {
                    href: "https://www.instagram.com/",
                    children: s.jsx(j, { icon: _t }),
                  }),
                  s.jsx("a", {
                    href: "https://www.twitter.com/",
                    children: s.jsx(j, { icon: At }),
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("section", {
            className:
              "flex flex-row justify-between px-40 sm:px-5 sm:flex-col sm:gap-8",
            id: "middle-container",
            children: [
              s.jsxs("span", {
                className:
                  "flex flex-col gap-4 text-base font-semibold text-gray",
                id: "col-1",
                children: [
                  s.jsx("h5", {
                    className: "text-lg text-darkblue1 font-bold",
                    children: "Company Info",
                  }),
                  s.jsx("a", {
                    className: "",
                    href: "/about",
                    children: "About Us",
                  }),
                  s.jsx("a", { href: "", children: "Carrier" }),
                  s.jsx("a", { href: "/team", children: "We are hiring" }),
                  s.jsx("a", { href: "", children: "Blog" }),
                ],
              }),
              s.jsxs("span", {
                className:
                  "flex flex-col gap-4 text-base font-semibold text-gray",
                id: "col-2",
                children: [
                  s.jsx("h5", {
                    className: "text-lg text-darkblue1 font-bold",
                    children: "Legal",
                  }),
                  s.jsx("a", { href: "", children: "About Us" }),
                  s.jsx("a", { href: "", children: "Carrier" }),
                  s.jsx("a", { href: "/team", children: "We are hiring" }),
                  s.jsx("a", { href: "", children: "Blog" }),
                ],
              }),
              s.jsxs("span", {
                className:
                  "flex flex-col gap-4 text-base font-semibold text-gray",
                id: "col-3",
                children: [
                  s.jsx("h5", {
                    className: "text-lg text-darkblue1 font-bold",
                    children: "Features",
                  }),
                  s.jsx("a", { href: "", children: "Business Marketing" }),
                  s.jsx("a", { href: "", children: "User Analytic" }),
                  s.jsx("a", { href: "", children: "Live Chat" }),
                  s.jsx("a", { href: "", children: "Unlimited Support" }),
                ],
              }),
              s.jsxs("span", {
                className:
                  "flex flex-col gap-4 text-base font-semibold text-gray",
                id: "col-4",
                children: [
                  s.jsx("h5", {
                    className: "text-lg text-darkblue1 font-bold",
                    children: "Resources",
                  }),
                  s.jsx("a", { href: "", children: "IOS & Android" }),
                  s.jsx("a", { href: "", children: "Watch a Demo" }),
                  s.jsx("a", { href: "", children: "Customers" }),
                  s.jsx("a", { href: "", children: "API" }),
                ],
              }),
              s.jsxs("span", {
                className:
                  "flex flex-col gap-4 text-base font-semibold text-gray",
                id: "col-5",
                children: [
                  s.jsx("h5", {
                    className: "text-lg text-darkblue1 font-bold",
                    children: "Get In Touch",
                  }),
                  s.jsx(d3, {}),
                  s.jsx("p", { className: "text-sm", children: "Lorem ipsum" }),
                ],
              }),
            ],
          }),
          s.jsxs("section", {
            className:
              "px-40 py-10 bg-lightgray sm:px-0 sm:text-center sm:items-center font-bold text-sm text-gray",
            id: "bottom-container",
            children: [
              s.jsx("p", { children: "Made With By Burak Altıparmak" }),
              s.jsx("p", {
                children: "All Rights Reserved to Erhan Fırat & Gökhan Özdemir",
              }),
            ],
          }),
        ],
      }),
    })
  ),
  p3 = "/assets/containerImg-UsGyYN_Q.png",
  h3 = "/assets/containerImg2-RVLWBFip.png",
  v3 = "/assets/videoImg-tf29NZQD.png",
  g3 = "/assets/member1-lKI4KH3n.png",
  x3 = "/assets/7-Dfqo9ow7.png",
  y3 = "/assets/member3-uaeakbe8.png",
  w3 = () =>
    s.jsxs("div", {
      id: "about",
      className: "flex flex-col items-center font-Montserrat",
      children: [
        s.jsx("section", {
          id: "about-us",
          className: "w-full flex justify-between px-40 sm:px-10",
          children: s.jsxs("div", {
            id: "container-fluid",
            className:
              "flex flex-row-reverse sm:flex-col-reverse items-center justify-between sm:justify-center  w-full",
            children: [
              s.jsx("span", {
                id: "img-container",
                className: "",
                children: s.jsx("img", { src: p3, alt: "" }),
              }),
              s.jsxs("span", {
                id: "text-container",
                className:
                  "flex flex-col gap-6   sm:items-center sm:text-center",
                children: [
                  s.jsx("h5", {
                    className:
                      "text-base text-darkblue1 font-bold tracking-[0.2px]",
                    children: "ABOUT COMPANY",
                  }),
                  s.jsx("h1", {
                    className:
                      "text-5xl font-bold text-[#252B42] tracking-[0.2px] w-3/4 ",
                    children: "ABOUT US",
                  }),
                  s.jsx("h4", {
                    className:
                      "text-xl text-[#737373] w-3/5 font-normal tracking-[0.2px]",
                    children:
                      "We know how large objects will act, but things on a small scale.",
                  }),
                  s.jsx("span", {
                    className: "flex flex-row gap-2 items-center",
                    children: s.jsx("button", {
                      className:
                        "p-3 flex border-solid border-[1px] bg-blue1 rounded-md w-40 justify-center  text-sm text-white font-bold tracking-normal",
                      children: "Get Quote Now",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsxs("section", {
          id: "problems",
          className:
            "flex flex-col gap-5 px-40 sm:text-center justify-between sm:justify-center w-full py-10 sm:px-10",
          children: [
            s.jsx("span", {
              id: "1",
              className: "flex items-start sm:justify-center",
              children: s.jsx("h5", {
                className: "text-red text-sm font-bold",
                children: "Problems trying",
              }),
            }),
            s.jsxs("span", {
              id: "2",
              className:
                "flex flex-row justify-between items-start sm:items-center sm:flex-col sm:gap-8",
              children: [
                s.jsx("h3", {
                  className:
                    "text-darkblue1 font-bold text-base w-1/5 sm:w-4/5  sm:items-center",
                  children:
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.",
                }),
                s.jsxs("p", {
                  className:
                    "text-gray font-semibold text-sm w-2/5 sm:w-full sm:text-start",
                  children: [
                    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
                    " ",
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          id: "stats",
          className: "section-class flex-row sm:flex-col text-center",
          children: [
            s.jsxs("span", {
              className: "span-styles sm:w-full sm:items-center ",
              children: [
                s.jsx("h2", {
                  className: "h2-styles sm:w-full sm:items-center",
                  children: "15K",
                }),
                s.jsx("p", {
                  className: "p-styles2 sm:w-full",
                  children: "Happy Customers",
                }),
              ],
            }),
            s.jsxs("span", {
              className: "span-styles sm:w-full sm:items-center",
              children: [
                s.jsx("h2", {
                  className: "h2-styles sm:w-full sm:items-center",
                  children: "150K",
                }),
                s.jsx("p", {
                  className: "p-styles2 sm:w-full sm:items-center",
                  children: "Monthly Visitors",
                }),
              ],
            }),
            s.jsxs("span", {
              className: "span-styles sm:w-full sm:items-center",
              children: [
                s.jsx("h2", {
                  className: "h2-styles sm:w-full sm:items-center",
                  children: "15",
                }),
                s.jsx("p", {
                  className: "p-styles2 sm:w-full sm:items-center",
                  children: "Countries Worldwide",
                }),
              ],
            }),
            s.jsxs("span", {
              className: "span-styles sm:w-full sm:items-center",
              children: [
                s.jsx("h2", {
                  className: "h2-styles sm:w-full sm:items-center",
                  children: "100+",
                }),
                s.jsx("p", {
                  className: "p-styles2 sm:w-full sm:items-center",
                  children: "Top Partners",
                }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          id: "video",
          className:
            "relative flex justify-center items-center w-full px-40 sm:px-10 ",
          children: [
            s.jsx("img", { src: v3, className: "w-full h-auto rounded-lg" }),
            s.jsx("button", {
              className: "absolute t-1/2 w-full text-center ",
              children: s.jsx(j, {
                className:
                  "w-[48px] h-[48px] bg-white border border-blue1 rounded-full",
                icon: j2,
                style: { color: "#23A6F0" },
              }),
            }),
          ],
        }),
        s.jsxs("section", {
          id: "team",
          className: "section-class flex-col gap-10",
          children: [
            s.jsxs("span", {
              id: "text-span",
              className: "flex flex-col items-center gap-5",
              children: [
                s.jsx("h2", {
                  className: "h2-styles",
                  children: "Meet Our Team",
                }),
                s.jsxs("p", {
                  className: "p-styles w-3/5 sm:w-full",
                  children: [
                    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
                    " ",
                  ],
                }),
              ],
            }),
            s.jsxs("span", {
              id: "team-span",
              className:
                "flex flex-row sm:flex-col sm:gap-16 justify-between items-center w-full",
              children: [
                s.jsxs("span", {
                  id: "member-1",
                  className: "team-span",
                  children: [
                    s.jsx("img", { src: g3 }),
                    s.jsx("h5", { children: "Username" }),
                    s.jsx("p", {
                      className: "p-styles",
                      children: "Profession",
                    }),
                    s.jsxs("span", {
                      id: "social-media",
                      className: "social-media",
                      children: [
                        s.jsx("a", {
                          href: "https://www.instagram.com/",
                          children: s.jsx(j, { icon: _t }),
                        }),
                        s.jsx("a", {
                          href: "https://www.facebook.com/",
                          children: s.jsx(j, { icon: It }),
                        }),
                        s.jsx("a", {
                          href: "https://www.twitter.com/",
                          children: s.jsx(j, { icon: At }),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("span", {
                  id: "member-2",
                  className: "team-span",
                  children: [
                    s.jsx("img", { src: x3 }),
                    s.jsx("h5", { children: "Username" }),
                    s.jsx("p", {
                      className: "p-styles",
                      children: "Profession",
                    }),
                    s.jsxs("span", {
                      id: "social-media",
                      className: "social-media",
                      children: [
                        s.jsx("a", {
                          href: "https://www.instagram.com/",
                          children: s.jsx(j, { icon: _t }),
                        }),
                        s.jsx("a", {
                          href: "https://www.facebook.com/",
                          children: s.jsx(j, { icon: It }),
                        }),
                        s.jsx("a", {
                          href: "https://www.twitter.com/",
                          children: s.jsx(j, { icon: At }),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("span", {
                  id: "member-3",
                  className: "team-span",
                  children: [
                    s.jsx("img", { src: y3 }),
                    s.jsx("h5", { children: "Username" }),
                    s.jsx("p", {
                      className: "p-styles",
                      children: "Profession",
                    }),
                    s.jsxs("span", {
                      id: "social-media",
                      className: "social-media",
                      children: [
                        s.jsx("a", {
                          href: "https://www.instagram.com/",
                          children: s.jsx(j, { icon: _t }),
                        }),
                        s.jsx("a", {
                          href: "https://www.facebook.com/",
                          children: s.jsx(j, { icon: It }),
                        }),
                        s.jsx("a", {
                          href: "https://www.twitter.com/",
                          children: s.jsx(j, { icon: At }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          id: "companies",
          className: "section-class flex-col bg-lightgray gap-10 sm:pt-40",
          children: [
            s.jsxs("span", {
              id: "companies-text",
              className: "flex flex-col items-center gap-5",
              children: [
                s.jsx("h2", {
                  className: "h2-styles",
                  children: "Big Companies Are Here",
                }),
                s.jsxs("p", {
                  className: "p-styles w-3/5 sm:w-full",
                  children: [
                    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
                    " ",
                  ],
                }),
              ],
            }),
            s.jsxs("span", {
              className:
                "flex sm:flex-col sm:gap-8 items-center text-center justify-between w-full font-bold text-7xl text-gray",
              id: "logo-section",
              children: [
                s.jsx(j, { icon: Ms }),
                s.jsx(j, { icon: zs }),
                s.jsx(j, { icon: Ds }),
                s.jsx(j, { icon: $s }),
                s.jsx(j, { icon: Rs }),
                s.jsx(j, { icon: Fs }),
              ],
            }),
          ],
        }),
        s.jsx("section", {
          id: "work-with-us",
          className: "w-full flex justify-between bg-blue3",
          children: s.jsxs("div", {
            id: "container-fluid",
            className:
              "flex flex-row-reverse sm:flex-col-reverse sm:py-20 items-center justify-between w-full",
            children: [
              s.jsx("span", {
                id: "img-container",
                className: "sm:hidden",
                children: s.jsx("img", { src: h3, alt: "" }),
              }),
              s.jsxs("span", {
                id: "text-container",
                className:
                  "flex flex-col gap-6 px-40 sm:px-10 sm:items-center sm:text-center  text-white",
                children: [
                  s.jsxs("h5", {
                    className: "text-base font-bold tracking-[0.2px]",
                    children: ["WORK WITH US", " "],
                  }),
                  s.jsxs("h1", {
                    className:
                      "text-5xl font-bold  tracking-[0.2px] w-3/4 sm:w-full ",
                    children: ["Now Let’s grow Yours", " "],
                  }),
                  s.jsxs("h4", {
                    className:
                      "text-lg  w-4/6 sm:w-full font-normal tracking-[0.2px]",
                    children: [
                      "The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th",
                      " ",
                    ],
                  }),
                  s.jsx("span", {
                    className: "flex flex-row gap-2 items-center",
                    children: s.jsxs("button", {
                      className:
                        "p-3 flex border-solid border-[1px] bg-blue1 sm:bg-blue3 rounded-md w-40 justify-center  text-sm text-white font-bold tracking-normal",
                      children: ["Button", " "],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  b3 = "/assets/contactimg-yvFiIBKM.png",
  j3 = () =>
    s.jsxs("div", {
      className:
        "flex flex-col text-center  font-Montserrat font-bold px-40 py-0 pb-10 gap-12 sm:px-0 sm:py-10",
      children: [
        s.jsxs("section", {
          id: "contact-us",
          className:
            "flex flex-row sm:flex-col justify-between items-center sm:gap-12 sm:px-10",
          children: [
            s.jsxs("span", {
              id: "text-box",
              className:
                "flex flex-col text-darkblue1 gap-12 items-start sm:items-center",
              children: [
                s.jsx("h3", { className: "h4-styles", children: "CONTACT US" }),
                s.jsx("h1", {
                  className:
                    "text-5xl w-3/4 text-start sm:text-center sm:w-full",
                  children: "Get in touch today!",
                }),
                s.jsx("h3", {
                  className:
                    "h4-styles text-gray w-3/4 text-start sm:text-center sm:w-full",
                  children:
                    "We know how large objects will act, but things on a small scale",
                }),
                s.jsx("h4", {
                  className: "h3-styles text-2xl",
                  children: "Phone ; +451 215 215 ",
                }),
                s.jsx("h4", {
                  className: "h3-styles text-2xl",
                  children: "Fax : +451 215 215",
                }),
                s.jsxs("span", {
                  id: "social-media",
                  className: "social-media text-2xl text-darkblue1 gap-8",
                  children: [
                    s.jsx("a", {
                      href: "https://www.instagram.com/",
                      children: s.jsx(j, { icon: _t }),
                    }),
                    s.jsx("a", {
                      href: "https://www.facebook.com/",
                      children: s.jsx(j, { icon: It }),
                    }),
                    s.jsx("a", {
                      href: "https://www.twitter.com/",
                      children: s.jsx(j, { icon: At }),
                    }),
                    s.jsx("a", {
                      href: "https://www.linkedin.com/",
                      children: s.jsx(j, { icon: mc }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("span", {
              id: "img-box",
              className: "",
              children: s.jsx("img", { src: b3, className: "" }),
            }),
          ],
        }),
        s.jsxs("section", {
          id: "get-support",
          className: "flex flex-col gap-12 items-center w-full sm:px-10",
          children: [
            s.jsxs("span", {
              id: "texts",
              className: "flex flex-col gap-5 w-3/5 sm:w-full ",
              children: [
                s.jsx("h5", {
                  className: "h5-styles text-darkblue1",
                  children: "VISIT OUR OFFICE",
                }),
                s.jsx("h2", {
                  className: "h2-styles items-center sm:text-4xl",
                  children: "We help small businesses with big ideas",
                }),
              ],
            }),
            s.jsxs("span", {
              id: "boxes",
              className:
                "flex flex-row justify-center w-4/5 sm:flex-col sm:w-full",
              children: [
                s.jsxs("span", {
                  id: "box-1",
                  className: "box-style border-none",
                  children: [
                    s.jsx(j, { icon: U1, className: "text-6xl text-blue1" }),
                    s.jsx("p", {
                      className: "p-styles w-full",
                      children: "georgia.young@example.com",
                    }),
                    s.jsx("p", {
                      className: "p-styles w-full",
                      children: "georgia.young@ple.com",
                    }),
                    s.jsx("h5", {
                      className: "h5-styles text-darkblue1",
                      children: "Get Support",
                    }),
                    s.jsx("button", {
                      className:
                        "border border-blue1 rounded-3xl items-center text-center text-blue1 text-sm py-2 px-3",
                      children: "Submit Request",
                    }),
                  ],
                }),
                s.jsxs("span", {
                  id: "box-2",
                  className: "box-style border-none rounded-none bg-darkblue1",
                  children: [
                    s.jsx(j, { icon: E2, className: "text-6xl text-blue1" }),
                    s.jsx("p", {
                      className: "p-styles w-full text-white",
                      children: "georgia.young@example.com",
                    }),
                    s.jsx("p", {
                      className: "p-styles w-full text-white",
                      children: "georgia.young@ple.com",
                    }),
                    s.jsx("h5", {
                      className: "h5-styles text-white",
                      children: "Get Support",
                    }),
                    s.jsx("button", {
                      className:
                        "border border-blue1 rounded-3xl items-center text-center text-blue1 text-sm py-2 px-3",
                      children: "Submit Request",
                    }),
                  ],
                }),
                s.jsxs("span", {
                  id: "box-3",
                  className: "box-style border-none",
                  children: [
                    s.jsx(j, { icon: H1, className: "text-6xl text-blue1" }),
                    s.jsx("p", {
                      className: "p-styles w-full",
                      children: "georgia.young@example.com",
                    }),
                    s.jsx("p", {
                      className: "p-styles w-full",
                      children: "georgia.young@ple.com",
                    }),
                    s.jsx("h5", {
                      className: "h5-styles text-darkblue1",
                      children: "Get Support",
                    }),
                    s.jsx("button", {
                      className:
                        "border border-blue1 rounded-3xl items-center text-center text-blue1 text-sm py-2 px-3",
                      children: "Submit Request",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          id: "lets-talk",
          className:
            "flex flex-col gap-5 justify-center items-center font-bold",
          children: [
            s.jsx(j, { className: "text-blue1 text-8xl", icon: P2 }),
            s.jsx("h5", {
              className: "h5-styles text-darkblue1",
              children: "WE Can't WAIT TO MEET YOU",
            }),
            s.jsx("h3", {
              className: "h3-styles text-darkblue1",
              children: "Let's Talk",
            }),
            s.jsx("button", {
              className:
                "border border-blue1 rounded-md text-center bg-blue1 w-32 px-1 py-2 text-white text-sm",
              children: "Try it free now",
            }),
          ],
        }),
      ],
    }),
  N3 = () =>
    s.jsx("div", {
      className:
        "flex font-Montserrat font-bold justify-center items-center bg-gray-100",
      children: s.jsx("nav", {
        className: "text-sm sm:text-base",
        children: s.jsxs("ol", {
          className: "flex items-center content-center",
          children: [
            s.jsxs("li", {
              className: "flex items-center",
              children: [
                s.jsx("a", {
                  href: "/home",
                  className:
                    "text-gray-600 hover:text-blue-500 transition-colors duration-300",
                  children: "Home",
                }),
                s.jsx("span", {
                  className: "mx-2 text-gray",
                  children: s.jsx(j, { icon: Ne }),
                }),
              ],
            }),
            s.jsx("li", {
              className: "flex items-center",
              children: s.jsx("a", {
                href: "/pricing",
                className:
                  "text-gray hover:text-blue-500 transition-colors duration-300",
                children: "Pricing",
              }),
            }),
          ],
        }),
      }),
    }),
  k3 = () => {
    const [e, t] = C.useState(!1),
      n = () => {
        t(!e);
      };
    return s.jsx(s.Fragment, {
      children: s.jsx("label", {
        className: "flex cursor-pointer select-none items-center",
        children: s.jsxs("div", {
          className: "relative",
          children: [
            s.jsx("input", {
              type: "checkbox",
              checked: e,
              onChange: n,
              className: "sr-only",
            }),
            s.jsx("div", {
              className: "block h-8 w-14 rounded-full bg-[#E5E7EB] ",
            }),
            s.jsx("div", {
              className:
                "dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition",
            }),
          ],
        }),
      }),
    });
  },
  S3 = () =>
    s.jsxs("div", {
      id: "pricing",
      className: "main-class",
      children: [
        s.jsxs("section", {
          id: "title",
          className: "section-class flex-col gap-8 sm:w-full",
          children: [
            s.jsx("h5", { className: "h5-styles", children: "PRICING" }),
            s.jsx("h2", { className: "h2-styles", children: "Simple Pricing" }),
            s.jsx(N3, {}),
          ],
        }),
        s.jsxs("section", {
          id: "pricing-type",
          className: "section-class flex-col gap-16 bg-lightgray",
          children: [
            s.jsxs("span", {
              id: "text-span",
              className:
                "flex flex-col gap-5 items-center text-center sm:gap-8",
              children: [
                s.jsx("h3", { className: "h3-styles", children: "Pricing" }),
                s.jsxs("p", {
                  className: "p-styles w-1/2 sm:w-full",
                  children: [
                    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
                    " ",
                  ],
                }),
                s.jsxs("span", {
                  id: "switch-button",
                  className: "flex flex-row gap-3 text-center items-center",
                  children: [
                    s.jsx("h4", {
                      className: "h4-styles",
                      children: "Monthly",
                    }),
                    s.jsx(k3, {}),
                    s.jsx("h4", { className: "h4-styles", children: "Yearly" }),
                    s.jsx("button", {
                      className:
                        "border border-blue2 bg-blue2 text-blue1 rounded-2xl text-sm py-1 px-2 ",
                      children: "Save 25%",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("span", {
              id: "box-span",
              className:
                "flex flex-row sm:flex-col sm:gap-8 w-full items-end justify-center",
              children: [
                s.jsxs("span", {
                  id: "box-1",
                  className: "box-style",
                  children: [
                    s.jsx("h3", { className: "h3-styles", children: "FREE" }),
                    s.jsx("p", {
                      className: "p-styles w-[35%]",
                      children: "Organize across all apps by hand",
                    }),
                    s.jsxs("span", {
                      className: "flex flex-row text-blue1 gap-2 items-center",
                      children: [
                        s.jsx("h3", { className: "text-3xl", children: "0" }),
                        s.jsxs("span", {
                          className: "flex flex-col items-start gap-2",
                          children: [
                            s.jsx("h5", {
                              className: "text-base",
                              children: "$",
                            }),
                            s.jsx("p", { children: "Per Month" }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("span", {
                      id: "tick-rows",
                      className: "flex flex-col gap-4 text-sm items-start",
                      children: [
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#2DC071" } }),
                            " ",
                            "Unlimited product updates",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#2DC071" } }),
                            " ",
                            "Unlimited product updates",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#2DC071" } }),
                            " ",
                            "Unlimited product updates",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#737373" } }),
                            " ",
                            "1GB Cloud Storage",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#737373" } }),
                            " ",
                            "Email and community support",
                          ],
                        }),
                        s.jsx("button", {
                          className:
                            "w-full border border-darkblue1 rounded-md bg-darkblue1 text-white text-sm py-3",
                          children: "Try for free",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("span", {
                  id: "box-2",
                  className: "box-style bg-darkblue1 text-white py-20",
                  children: [
                    s.jsx("h3", {
                      className: "h3-styles text-white",
                      children: "STANDARD",
                    }),
                    s.jsx("p", {
                      className: "p-styles w-[35%] text-white",
                      children: "Organize across all apps by hand",
                    }),
                    s.jsxs("span", {
                      className: "flex flex-row text-blue1 gap-2 items-center",
                      children: [
                        s.jsx("h3", {
                          className: "text-3xl",
                          children: "9.99",
                        }),
                        s.jsxs("span", {
                          className: "flex flex-col items-start gap-2",
                          children: [
                            s.jsx("h5", {
                              className: "text-base",
                              children: "$",
                            }),
                            s.jsx("p", { children: "Per Month" }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("span", {
                      id: "tick-rows",
                      className: "flex flex-col gap-4 text-sm items-start",
                      children: [
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#2DC071" } }),
                            " ",
                            "Unlimited product updates",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#2DC071" } }),
                            " ",
                            "Unlimited product updates",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#2DC071" } }),
                            " ",
                            "Unlimited product updates",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#737373" } }),
                            " ",
                            "1GB Cloud Storage",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#737373" } }),
                            " ",
                            "Email and community support",
                          ],
                        }),
                        s.jsx("button", {
                          className:
                            "w-full border border-blue1 rounded-md bg-blue1 text-white text-sm py-3",
                          children: "Try for free",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("span", {
                  id: "box-3",
                  className: "box-style",
                  children: [
                    s.jsx("h3", {
                      className: "h3-styles",
                      children: "PREMIUM",
                    }),
                    s.jsx("p", {
                      className: "p-styles w-[35%]",
                      children: "Organize across all apps by hand",
                    }),
                    s.jsxs("span", {
                      className: "flex flex-row text-blue1 gap-2 items-center",
                      children: [
                        s.jsx("h3", {
                          className: "text-3xl",
                          children: "19.99",
                        }),
                        s.jsxs("span", {
                          className: "flex flex-col items-start gap-2",
                          children: [
                            s.jsx("h5", {
                              className: "text-base",
                              children: "$",
                            }),
                            s.jsx("p", { children: "Per Month" }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("span", {
                      id: "tick-rows",
                      className: "flex flex-col gap-4 text-sm items-start",
                      children: [
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#2DC071" } }),
                            " ",
                            "Unlimited product updates",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#2DC071" } }),
                            " ",
                            "Unlimited product updates",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#2DC071" } }),
                            " ",
                            "Unlimited product updates",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#737373" } }),
                            " ",
                            "1GB Cloud Storage",
                          ],
                        }),
                        s.jsxs("p", {
                          children: [
                            s.jsx(j, { icon: Ie, style: { color: "#737373" } }),
                            " ",
                            "Email and community support",
                          ],
                        }),
                        s.jsx("button", {
                          className:
                            "w-full border border-blue1 rounded-md bg-blue1 text-white text-sm py-3",
                          children: "Try for free",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          id: "companies",
          className: "section-class flex-col bg-lightgray gap-10",
          children: [
            s.jsx("span", {
              id: "companies-text",
              className: "flex flex-col items-center gap-5",
              children: s.jsx("p", {
                className: "p-styles w-full text-base",
                children: "Trusted By Over 4000 Big Companies",
              }),
            }),
            s.jsxs("span", {
              className:
                "flex sm:flex-col sm:gap-8 items-center text-center justify-between w-full font-bold text-7xl text-gray",
              id: "logo-section",
              children: [
                s.jsx(j, { icon: Ms }),
                s.jsx(j, { icon: zs }),
                s.jsx(j, { icon: Ds }),
                s.jsx(j, { icon: $s }),
                s.jsx(j, { icon: Rs }),
                s.jsx(j, { icon: Fs }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          id: "FAQ",
          className:
            "flex items-center justify-between w-full flex-col gap-8 px-40 py-10 sm:px-10",
          children: [
            s.jsxs("span", {
              id: "text-faq",
              className: "flex flex-col gap-3 items-center justify-around",
              children: [
                s.jsx("h3", {
                  className: "h3-styles font-bold text-4xl",
                  children: "Pricing FAQs",
                }),
                s.jsx("p", {
                  className: "p-styles w-1/2 sm:w-full",
                  children:
                    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
                }),
              ],
            }),
            s.jsxs("span", {
              id: "questions",
              className:
                "flex flex-row sm:flex-col sm:gap-8 sm:w-full sm:items-start justify-around items-center",
              children: [
                s.jsxs("span", {
                  id: "col-1",
                  className: "col-style gap-12 sm:w-full",
                  children: [
                    s.jsxs("span", {
                      className: "flex flex-col gap-3 text-start",
                      children: [
                        s.jsxs("span", {
                          className: "flex flex-row items-center gap-3",
                          children: [
                            s.jsx(j, { icon: Ne, className: "text-blue1" }),
                            s.jsx("p", {
                              className:
                                "p-styles text-darkblue1 text-base w-full ",
                              children: "the quick fox jumps over the lazy dog",
                            }),
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-sm text-gray font-semibold",
                          children:
                            "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                        }),
                      ],
                    }),
                    s.jsxs("span", {
                      className: "flex flex-col gap-3 text-start",
                      children: [
                        s.jsxs("span", {
                          className: "flex flex-row items-center gap-3",
                          children: [
                            s.jsx(j, { icon: Ne, className: "text-blue1" }),
                            s.jsx("p", {
                              className:
                                "p-styles text-darkblue1 text-base w-full ",
                              children: "the quick fox jumps over the lazy dog",
                            }),
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-sm text-gray font-semibold",
                          children:
                            "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                        }),
                      ],
                    }),
                    s.jsxs("span", {
                      className: "flex flex-col gap-3 text-start",
                      children: [
                        s.jsxs("span", {
                          className: "flex flex-row items-center gap-3",
                          children: [
                            s.jsx(j, { icon: Ne, className: "text-blue1" }),
                            s.jsx("p", {
                              className:
                                "p-styles text-darkblue1 text-base w-full ",
                              children: "the quick fox jumps over the lazy dog",
                            }),
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-sm text-gray font-semibold",
                          children:
                            "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("span", {
                  id: "col-2",
                  className: "col-style gap-12 sm:w-full",
                  children: [
                    s.jsxs("span", {
                      className: "flex flex-col gap-3 text-start",
                      children: [
                        s.jsxs("span", {
                          className: "flex flex-row items-center gap-3",
                          children: [
                            s.jsx(j, { icon: Ne, className: "text-blue1" }),
                            s.jsx("p", {
                              className:
                                "p-styles text-darkblue1 text-base w-full ",
                              children: "the quick fox jumps over the lazy dog",
                            }),
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-sm text-gray font-semibold",
                          children:
                            "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                        }),
                      ],
                    }),
                    s.jsxs("span", {
                      className: "flex flex-col gap-3 text-start",
                      children: [
                        s.jsxs("span", {
                          className: "flex flex-row items-center gap-3",
                          children: [
                            s.jsx(j, { icon: Ne, className: "text-blue1" }),
                            s.jsx("p", {
                              className:
                                "p-styles text-darkblue1 text-base w-full ",
                              children: "the quick fox jumps over the lazy dog",
                            }),
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-sm text-gray font-semibold",
                          children:
                            "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                        }),
                      ],
                    }),
                    s.jsxs("span", {
                      className: "flex flex-col gap-3 text-start",
                      children: [
                        s.jsxs("span", {
                          className: "flex flex-row items-center gap-3",
                          children: [
                            s.jsx(j, { icon: Ne, className: "text-blue1" }),
                            s.jsx("p", {
                              className:
                                "p-styles text-darkblue1 text-base w-full ",
                              children: "the quick fox jumps over the lazy dog",
                            }),
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-sm text-gray font-semibold",
                          children:
                            "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("span", {
              className: "sm:flex sm:items-center sm:justify-center sm:py-10",
              children: s.jsxs("h5", {
                className: "h5-styles sm:font-bold sm:w-full",
                children: [
                  "Haven’t got your answer? ",
                  s.jsx("p", { children: "Contact our support" }),
                ],
              }),
            }),
          ],
        }),
        s.jsxs("section", {
          id: "trial",
          className: "section-class flex-col gap-8",
          children: [
            s.jsx("h3", {
              className: "h3-styles",
              children: "Start your 14 days free trial",
            }),
            s.jsx("p", {
              className: "p-styles w-1/3 sm:w-full",
              children:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.",
            }),
            s.jsx("button", {
              className:
                "text-center border border-blue1 rounded-lg px-5 py-3 bg-blue1 text-white font-bold text-sm",
              children: "Try it free now",
            }),
            s.jsxs("span", {
              id: "social-media",
              className: "social-media text-2xl gap-8",
              children: [
                s.jsx("a", {
                  href: "https://www.instagram.com/",
                  children: s.jsx(j, { icon: _t }),
                }),
                s.jsx("a", {
                  href: "https://www.facebook.com/",
                  children: s.jsx(j, { icon: It }),
                }),
                s.jsx("a", {
                  href: "https://www.twitter.com/",
                  children: s.jsx(j, { icon: At }),
                }),
                s.jsx("a", {
                  href: "https://www.linkedin.com/",
                  children: s.jsx(j, { icon: mc }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  E3 = () =>
    s.jsx("div", {
      className:
        "flex font-Montserrat font-bold justify-center items-center bg-gray-100",
      children: s.jsx("nav", {
        className: "text-sm sm:text-base",
        children: s.jsxs("ol", {
          className: "flex items-center content-center",
          children: [
            s.jsxs("li", {
              className: "flex items-center",
              children: [
                s.jsx("a", {
                  href: "/home",
                  className:
                    "text-gray-600 hover:text-blue-500 transition-colors duration-300",
                  children: "Home",
                }),
                s.jsx("span", {
                  className: "mx-2 text-gray",
                  children: s.jsx(j, { icon: Ne }),
                }),
              ],
            }),
            s.jsx("li", {
              className: "flex items-center",
              children: s.jsx("a", {
                href: "/team",
                className:
                  "text-gray hover:text-blue-500 transition-colors duration-300",
                children: "Team",
              }),
            }),
          ],
        }),
      }),
    }),
  C3 = "/assets/1-Zrgubp9z.png",
  P3 = () => {
    const { member: e, boxGroup: t } = Un();
    return s.jsxs("div", {
      className: "flex justify-center flex-col px-40 sm:px-0",
      children: [
        s.jsxs("section", {
          id: "top-section",
          className: "section-class flex-col gap-8",
          children: [
            s.jsx("h5", { className: "h5-styles", children: "WHAT WE DO" }),
            s.jsx("h2", {
              className:
                "h2-styles sm:w-full sm:flex sm:items-center sm:text-4xl",
              children: "Innovation tailored for you",
            }),
            s.jsx(E3, {}),
          ],
        }),
        s.jsxs("section", {
          id: "box-section",
          className: "flex flex-row sm:flex-col gap-3 sm:gap-1 px-20 sm:px-0",
          children: [
            s.jsx("span", {
              id: "main-box",
              className: "w-full ",
              children: s.jsx("img", {
                className: "w-[730px] h-[530px] object-fit",
                src: C3,
              }),
            }),
            s.jsxs("span", {
              id: "img-box",
              className: "flex flex-row flex-wrap gap-3 sm:gap-1 items-center",
              children: [
                s.jsx("span", {
                  id: "box-1",
                  className: "flex flex-row gap-3 sm:gap-1 ",
                  children: t.slice(0, 2).map((n, r) =>
                    s.jsx(
                      "span",
                      {
                        id: "box-group",
                        className: "",
                        children: s.jsx("img", {
                          src: n,
                          className: "w-[360px] h-[260px]",
                          alt: "",
                        }),
                      },
                      r
                    )
                  ),
                }),
                s.jsx("span", {
                  id: "box-2",
                  className: "flex flex-row gap-3 sm:gap-1",
                  children: t.slice(2).map((n, r) =>
                    s.jsx(
                      "span",
                      {
                        id: "box-group",
                        className: "",
                        children: s.jsx("img", {
                          src: n,
                          className: "w-[360px] h-[260px]",
                          alt: "",
                        }),
                      },
                      r + 2
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          id: "team-section",
          className: "section-class flex-col gap-12",
          children: [
            s.jsx("h3", { className: "h3-styles", children: "Meet Our Team" }),
            s.jsx("span", {
              id: "team",
              className:
                "flex flex-row flex-wrap gap-5 sm:gap-8 justify-center ",
              children: e.map((n, r) =>
                s.jsxs(
                  "span",
                  {
                    id: "member-1",
                    className: "team-span",
                    children: [
                      s.jsx("img", { src: n.img }),
                      s.jsx("h5", { children: n.username }),
                      s.jsx("p", { className: "p-styles", children: n.job }),
                      s.jsxs("span", {
                        id: "social-media",
                        className: "social-media",
                        children: [
                          s.jsx("a", {
                            href: "https://www.instagram.com/",
                            children: s.jsx(j, { icon: _t }),
                          }),
                          s.jsx("a", {
                            href: "https://www.facebook.com/",
                            children: s.jsx(j, { icon: It }),
                          }),
                          s.jsx("a", {
                            href: "https://www.twitter.com/",
                            children: s.jsx(j, { icon: At }),
                          }),
                        ],
                      }),
                    ],
                  },
                  r
                )
              ),
            }),
          ],
        }),
        s.jsxs("section", {
          id: "trial-section",
          className: "section-class flex-col gap-8",
          children: [
            s.jsx("h3", {
              className: "h3-styles sm:w-full",
              children: "Start your 14 days free trial",
            }),
            s.jsx("p", {
              className: "p-styles w-1/3 sm:w-full",
              children:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.",
            }),
            s.jsx("button", {
              className:
                "text-center border border-blue1 rounded-lg px-5 py-3 bg-blue1 text-white font-bold text-sm",
              children: "Try it free now",
            }),
            s.jsxs("span", {
              id: "social-media",
              className: "social-media text-2xl gap-8",
              children: [
                s.jsx("a", {
                  href: "https://www.instagram.com/",
                  children: s.jsx(j, { icon: _t }),
                }),
                s.jsx("a", {
                  href: "https://www.facebook.com/",
                  children: s.jsx(j, { icon: It }),
                }),
                s.jsx("a", {
                  href: "https://www.twitter.com/",
                  children: s.jsx(j, { icon: At }),
                }),
                s.jsx("a", {
                  href: "https://www.linkedin.com/",
                  children: s.jsx(j, { icon: mc }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  T3 = () =>
    s.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: s.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M15 19l-7-7 7-7",
      }),
    }),
  _3 = () =>
    s.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-6 w-6",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: s.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 5l7 7-7 7",
      }),
    });
function I3({ autoSlide: e = !1, autoSlideInterval: t = 3e3 }) {
  const [n, r] = C.useState(0),
    { miniSlider: a } = Un(),
    i = () => r((o) => (o === 0 ? a.length - 1 : o - 1)),
    l = () => r((o) => (o === a.length - 1 ? 0 : o + 1));
  return (
    C.useEffect(() => {
      if (!e) return;
      const o = setInterval(l, t);
      return () => clearInterval(o);
    }, []),
    s.jsxs("div", {
      className: "overflow-hidden relative font-Montserrat   ",
      children: [
        s.jsx("div", {
          className:
            "flex transition-transform ease-out duration-500  h-[450px]   ",
          style: { transform: `translateX(-${n * 100}%)` },
          children: a.map((o, u) =>
            s.jsxs(
              "div",
              {
                className: "w-full flex justify-center flex-shrink-0 relative ",
                children: [
                  s.jsx("img", { src: o, className: "w-full object-fit  " }),
                  s.jsx("div", {
                    className:
                      "absolute top-0 left-0 w-full h-full flex items-center justify-items-start pl-16 ",
                  }),
                ],
              },
              u
            )
          ),
        }),
        s.jsxs("div", {
          className: "absolute inset-0 flex items-center justify-between p-4",
          children: [
            s.jsx("button", {
              onClick: i,
              className:
                "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",
              children: s.jsx(T3, {}),
            }),
            s.jsx("button", {
              onClick: l,
              className:
                "p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",
              children: s.jsx(_3, {}),
            }),
          ],
        }),
        s.jsx("div", {
          className: "absolute bottom-4 right-0 left-0 sm:hidden",
          children: s.jsx("div", {
            className: "flex items-center justify-center gap-2",
            children: a.map((o, u) =>
              s.jsx(
                "div",
                {
                  className: `
                transition-all w-20 h-3 bg-white 
                ${n === u ? "p-2" : "bg-opacity-50"}
              `,
                },
                u
              )
            ),
          }),
        }),
      ],
    })
  );
}
const A3 = () =>
    s.jsxs("div", {
      className: "flex gap-4",
      children: [
        s.jsxs("div", {
          className: "flex",
          children: [
            s.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className:
                "text-yellow-500 w-5 h-auto fill-current hover:text-red-600",
              viewBox: "0 0 16 16",
              children: s.jsx("path", {
                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z",
              }),
            }),
            s.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className:
                "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600",
              viewBox: "0 0 16 16",
              children: s.jsx("path", {
                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z",
              }),
            }),
            s.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className:
                "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600",
              viewBox: "0 0 16 16",
              children: s.jsx("path", {
                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z",
              }),
            }),
            s.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className:
                "text-yellow-500 w-5 h-auto fill-current hover:text-green-600",
              viewBox: "0 0 16 16",
              children: s.jsx("path", {
                d: "M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z",
              }),
            }),
            s.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className:
                "text-yellow-500 w-5 h-auto fill-current hover:text-green-600",
              viewBox: "0 0 16 16",
              children: s.jsx("path", {
                d: "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z",
              }),
            }),
          ],
        }),
        s.jsx("span", {
          className: "text-gray font-Montserrat font-bold text-sm",
          children: "10 Reviews",
        }),
      ],
    }),
  L3 = "/assets/productImg3-LysL8c56.png",
  O3 = () => {
    const { miniSlider: e, productText: t, productContainerImgs: n } = Un();
    return s.jsxs("div", {
      className:
        "px-40 py-10 flex flex-col font-Montserrat font-bold gap-12 sm:px-10 sm:py-5",
      children: [
        s.jsx("section", {
          className: "flex flex-row sm:items-center sm:justify-center",
          children: s.jsx(B1, {}),
        }),
        s.jsxs("section", {
          id: "main-product",
          className: "flex flex-row gap-12 sm:flex-col",
          children: [
            s.jsxs("span", {
              id: "slider",
              className: "flex flex-col gap-4",
              children: [
                s.jsx(I3, {}),
                s.jsx("span", {
                  className: "flex flex-row items-start gap-4",
                  children: e.map((r, a) =>
                    s.jsx(
                      "button",
                      {
                        className: "",
                        children: s.jsx("img", {
                          className: "w-[96px] h-[96px]",
                          src: r,
                          alt: "",
                        }),
                      },
                      a
                    )
                  ),
                }),
              ],
            }),
            s.jsxs("span", {
              id: "explanation",
              className: "flex flex-col gap-8 sm:gap-6 items-start",
              children: [
                s.jsx("h4", {
                  className: "h4-styles",
                  children: "Floating Phone",
                }),
                s.jsx(A3, {}),
                s.jsx("h3", { className: "h3-styles", children: "$1,139.33" }),
                s.jsxs("span", {
                  className: "flex flex-row sm:w-full gap-2 p-styles",
                  children: [
                    s.jsx("p", { children: "Availability :" }),
                    s.jsx("p", { children: "In Stock " }),
                  ],
                }),
                s.jsx("p", {
                  className: "p-styles w-4/5",
                  children:
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                }),
                s.jsx("hr", { className: "w-4/5" }),
                s.jsx("span", {
                  id: "colors",
                  children: s.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      s.jsx("div", {
                        className: "w-8 h-8 rounded-full bg-red",
                      }),
                      s.jsx("div", {
                        className: "w-8 h-8 rounded-full bg-blue-500",
                      }),
                      s.jsx("div", {
                        className: "w-8 h-8 rounded-full bg-green",
                      }),
                      s.jsx("div", {
                        className: "w-8 h-8 rounded-full bg-yellow-500",
                      }),
                    ],
                  }),
                }),
                s.jsxs("span", {
                  id: "buttons",
                  className: "flex flex-row gap-2",
                  children: [
                    s.jsx("button", {
                      className:
                        "border border-blue1 rounded-lg bg-blue1 text-white p-2 text-sm",
                      children: "Select Options",
                    }),
                    s.jsx("button", {
                      className: "round-button",
                      children: s.jsx(j, { icon: D1 }),
                    }),
                    s.jsx("button", {
                      className: "round-button",
                      children: s.jsx(j, { icon: Ji }),
                    }),
                    s.jsx("button", {
                      className: "round-button",
                      children: s.jsx(j, { icon: k2 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          id: "information",
          className:
            "flex flex-col justify-center items-center gap-12 sm:gap:8",
          children: [
            s.jsxs("span", {
              id: "description-bar",
              className:
                "flex flex-row gap-12 sm:gap-4 sm:items-center sm:w-full sm:text-sm",
              children: [
                s.jsx("button", { children: "Description" }),
                s.jsx("button", { children: "Additional Information" }),
                s.jsxs("button", {
                  className: "flex flex-row gap-1",
                  children: ["Reviews ", s.jsx("p", { children: "(0)" })],
                }),
              ],
            }),
            s.jsx("hr", { className: "w-full text-gray sm:hidden" }),
            s.jsxs("span", {
              id: "product-description",
              className: "flex flex-row justify-between sm:flex-col sm:gap-8",
              children: [
                s.jsx("span", {
                  id: "description-img",
                  children: s.jsx("img", { src: L3, alt: "" }),
                }),
                s.jsxs("span", {
                  id: "text-box-1",
                  className: "flex flex-col gap-4 w-1/3 items-start sm:w-full",
                  children: [
                    s.jsx("h4", {
                      className: "h4-styles",
                      children: "the quick fox jumps over ",
                    }),
                    s.jsx("p", {
                      className: "p-styles w-[90%] sm:w-full",
                      children:
                        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                    }),
                    s.jsx("p", {
                      className: "p-styles w-[90%] sm:w-full",
                      children:
                        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                    }),
                    s.jsx("p", {
                      className: "p-styles w-[90%] sm:w-full",
                      children:
                        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                    }),
                  ],
                }),
                s.jsxs("span", {
                  id: "text-box-2",
                  className: "flex flex-col gap-4",
                  children: [
                    s.jsxs("span", {
                      id: "text-1",
                      className: "flex flex-col gap-4",
                      children: [
                        s.jsx("h4", {
                          className: "h4-styles",
                          children: "the quick fox jumps over ",
                        }),
                        s.jsxs("p", {
                          className:
                            "p-styles w-full flex flex-row gap-2 items-center",
                          children: [
                            s.jsx(j, { icon: Ne }),
                            "the quick fox jumps over the lazy dog",
                          ],
                        }),
                        s.jsxs("p", {
                          className:
                            "p-styles w-full flex flex-row gap-2 items-center",
                          children: [
                            s.jsx(j, { icon: Ne }),
                            "the quick fox jumps over the lazy dog",
                          ],
                        }),
                        s.jsxs("p", {
                          className:
                            "p-styles w-full flex flex-row gap-2 items-center",
                          children: [
                            s.jsx(j, { icon: Ne }),
                            "the quick fox jumps over the lazy dog",
                          ],
                        }),
                        s.jsxs("p", {
                          className:
                            "p-styles w-full flex flex-row gap-2 items-center",
                          children: [
                            s.jsx(j, { icon: Ne }),
                            "the quick fox jumps over the lazy dog",
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("span", {
                      id: "text-2",
                      className: "flex flex-col gap-4",
                      children: [
                        s.jsx("h3", { children: "the quick fox jumps over " }),
                        s.jsxs("p", {
                          className:
                            "p-styles w-full flex flex-row gap-2 items-center",
                          children: [
                            s.jsx(j, { icon: Ne }),
                            "the quick fox jumps over the lazy dog",
                          ],
                        }),
                        s.jsxs("p", {
                          className:
                            "p-styles w-full flex flex-row gap-2 items-center",
                          children: [
                            s.jsx(j, { icon: Ne }),
                            "the quick fox jumps over the lazy dog",
                          ],
                        }),
                        s.jsxs("p", {
                          className:
                            "p-styles w-full flex flex-row gap-2 items-center",
                          children: [
                            s.jsx(j, { icon: Ne }),
                            "the quick fox jumps over the lazy dog",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("section", {
          id: "product-list",
          className: "flex flex-col gap-8 pb-12 items-center",
          children: [
            s.jsxs("span", {
              className: "flex flex-col gap-4 w-full",
              children: [
                s.jsx("h4", {
                  className: "h4-styles",
                  children: "BESTSELLER PRODUCTS",
                }),
                s.jsx("hr", { className: "text-gray" }),
              ],
            }),
            s.jsx("span", {
              id: "product-container",
              className:
                "flex flex-row flex-wrap justify-center w-3/4 items-center gap-8",
              children: n.map((r, a) =>
                s.jsxs(
                  "span",
                  {
                    id: "product",
                    className: "flex flex-col gap-4",
                    children: [
                      s.jsx("img", { src: r, alt: "" }),
                      s.jsxs(
                        "span",
                        {
                          className: "flex flex-col gap-2 text-start pl-4",
                          children: [
                            s.jsx("h4", {
                              className: "h4-styles",
                              children: t.title,
                            }),
                            s.jsx("h5", {
                              className: "h5-styles",
                              children: t.link,
                            }),
                            s.jsxs("span", {
                              className: "flex flex-row gap-2 p-styles",
                              children: [
                                s.jsx("p", {
                                  className: "text-gray",
                                  children: t.price1,
                                }),
                                s.jsx("p", {
                                  className: "text-green2",
                                  children: t.price1,
                                }),
                              ],
                            }),
                          ],
                        },
                        a
                      ),
                    ],
                  },
                  a
                )
              ),
            }),
          ],
        }),
        s.jsx("section", {
          id: "companies",
          children: s.jsxs("span", {
            className:
              "flex items-center text-center justify-between w-full font-bold text-7xl text-gray sm:flex-col sm:gap-8",
            id: "logo-section",
            children: [
              s.jsx(j, { icon: Ms }),
              s.jsx(j, { icon: zs }),
              s.jsx(j, { icon: Ds }),
              s.jsx(j, { icon: $s }),
              s.jsx(j, { icon: Rs }),
              s.jsx(j, { icon: Fs }),
            ],
          }),
        }),
      ],
    });
  },
  M3 = () => {
    const e = Ca();
    return s.jsx("div", {
      className: "bg-white dark:bg-gray-900 py-10",
      children: s.jsx("div", {
        className: "flex justify-center ",
        children: s.jsx("div", {
          className: "flex items-center w-full max-w-md px-6 mx-auto sm:w-4/6",
          children: s.jsxs("div", {
            className: "flex-1",
            children: [
              s.jsxs("div", {
                className: "text-center",
                children: [
                  s.jsx("div", {
                    className: "flex justify-center mx-auto",
                    children: s.jsx("h3", {
                      className: "h3-styles font-bold font-Montserrat",
                      children: "Brand Logo",
                    }),
                  }),
                  s.jsx("p", {
                    className: "mt-3 text-gray-500 dark:text-gray-300",
                    children: "Sign in to access your account",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "mt-8",
                children: [
                  s.jsxs("form", {
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            htmlFor: "email",
                            className:
                              "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                            children: "Email Address",
                          }),
                          s.jsx("input", {
                            type: "email",
                            name: "email",
                            id: "email",
                            placeholder: "example@example.com",
                            className:
                              "block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "mt-6",
                        children: [
                          s.jsxs("div", {
                            className: "flex justify-between mb-2",
                            children: [
                              s.jsx("label", {
                                htmlFor: "password",
                                className:
                                  "text-sm text-gray-600 dark:text-gray-200",
                                children: "Password",
                              }),
                              s.jsx("a", {
                                href: "#",
                                className:
                                  "text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline",
                                children: "Forgot password?",
                              }),
                            ],
                          }),
                          s.jsx("input", {
                            type: "password",
                            name: "password",
                            id: "password",
                            placeholder: "Your Password",
                            className:
                              "block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "mt-6",
                        children: s.jsx("button", {
                          className:
                            "w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50",
                          children: "Sign in",
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("p", {
                    className: "mt-6 text-sm text-center text-gray-400",
                    children: [
                      "Don't have an account yet?",
                      " ",
                      s.jsx("button", {
                        onClick: () => e.push("/signup"),
                        className:
                          "text-blue-500 focus:outline-none focus:underline hover:underline",
                        children: "Sign up",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  R3 = () =>
    s.jsx("section", {
      className: "bg-white dark:bg-gray-900 sm:px-10 font-Montserrat font-bold",
      children: s.jsx("div", {
        className: "flex justify-center",
        children: s.jsx("div", {
          className:
            "flex items-center w-full max-w-3xl p-8 mx-auto sm:px-0 sm:w-full  ",
          children: s.jsxs("div", {
            className: "w-full flex flex-col gap-6",
            children: [
              s.jsx("p", {
                className: "text-gray-500 dark:text-gray-400",
                children:
                  "Let’s get you all set up so you can verify your personal account and begin setting up your profile.",
              }),
              s.jsxs("form", {
                className: "gap-6 flex flex-col",
                children: [
                  s.jsxs("div", {
                    className: "",
                    children: [
                      s.jsx("label", {
                        className:
                          "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                        children: "First Name",
                      }),
                      s.jsx("input", {
                        type: "text",
                        placeholder: "John",
                        className:
                          "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        className:
                          "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                        children: "Last name",
                      }),
                      s.jsx("input", {
                        type: "text",
                        placeholder: "Snow",
                        className:
                          "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        className:
                          "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                        children: "Phone number",
                      }),
                      s.jsx("input", {
                        type: "text",
                        placeholder: "XXX-XX-XXXX-XXX",
                        className:
                          "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        className:
                          "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                        children: "Email address",
                      }),
                      s.jsx("input", {
                        type: "email",
                        placeholder: "johnsnow@example.com",
                        className:
                          "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        className:
                          "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                        children: "Password",
                      }),
                      s.jsx("input", {
                        type: "password",
                        placeholder: "Enter your password",
                        className:
                          "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        className:
                          "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                        children: "Confirm password",
                      }),
                      s.jsx("input", {
                        type: "password",
                        placeholder: "Enter your password",
                        className:
                          "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
                      }),
                    ],
                  }),
                  s.jsxs("button", {
                    className:
                      "flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",
                    children: [
                      s.jsx("span", { children: "Sign Up " }),
                      s.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "w-5 h-5 rtl:-scale-x-100",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: s.jsx("path", {
                          fillRule: "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          clipRule: "evenodd",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
function z3() {
  return s.jsxs("div", {
    id: "main",
    className: "w-full",
    children: [
      s.jsx(f3, {}),
      s.jsx(vg, { from: "/", to: "/home", exact: !0 }),
      s.jsxs(jg, {
        children: [
          s.jsx(kt, { exact: !0, path: "/home", children: s.jsx(Uy, {}) }),
          s.jsx(kt, { exact: !0, path: "/shop", children: s.jsx(Yy, {}) }),
          s.jsx(kt, { exact: !0, path: "/about", children: s.jsx(w3, {}) }),
          s.jsx(kt, { exact: !0, path: "/contact", children: s.jsx(j3, {}) }),
          s.jsx(kt, { exact: !0, path: "/pricing", children: s.jsx(S3, {}) }),
          s.jsx(kt, { exact: !0, path: "/team", children: s.jsx(P3, {}) }),
          s.jsx(kt, { exact: !0, path: "/product", children: s.jsx(O3, {}) }),
          s.jsx(kt, { exact: !0, path: "/login", children: s.jsx(M3, {}) }),
          s.jsx(kt, { exact: !0, path: "/signup", children: s.jsx(R3, {}) }),
        ],
      }),
      s.jsx(m3, {}),
    ],
  });
}
Ol.createRoot(document.getElementById("root")).render(
  s.jsx(Ng, { children: s.jsx(z3, {}) })
);
