var er = Object.defineProperty,
  nr = Object.defineProperties;
var tr = Object.getOwnPropertyDescriptors;
var Vi = Object.getOwnPropertySymbols;
var ml = Object.prototype.hasOwnProperty,
  _l = Object.prototype.propertyIsEnumerable;
var Ji = (n, e, t) =>
    e in n
      ? er(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[e] = t),
  cn = (n, e) => {
    for (var t in e || (e = {})) ml.call(e, t) && Ji(n, t, e[t]);
    if (Vi) for (var t of Vi(e)) _l.call(e, t) && Ji(n, t, e[t]);
    return n;
  },
  Pt = (n, e) => nr(n, tr(e));
var Hi = (n, e) => {
  var t = {};
  for (var i in n) ml.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
  if (n != null && Vi)
    for (var i of Vi(n)) e.indexOf(i) < 0 && _l.call(n, i) && (t[i] = n[i]);
  return t;
};
var He = (n, e, t) => (Ji(n, typeof e != "symbol" ? e + "" : e, t), t);
import {
  w as qt,
  g as rt,
  f as ir,
  a as pl,
  b as lr,
  c as or,
  d as rr,
  e as il,
  h as sr,
  i as ar,
  j as ur,
  k as Bo,
  l as fr,
  m as cr,
  n as gr,
  o as dr,
  p as hr,
  q as mr,
  r as _r,
  s as pr,
  t as ji,
  u as jo,
  S as be,
  v as we,
  x as Se,
  F as Dn,
  y as K,
  z as E,
  A as u,
  B as N,
  C as H,
  D as g,
  E as F,
  G as w,
  H as C,
  I as M,
  J as O,
  K as ve,
  L as st,
  M as Nt,
  N as pn,
  O as ce,
  P as ge,
  Q as Bt,
  R as jt,
  T as Gt,
  U as k,
  V as et,
  W as sn,
  X as bn,
  Y as y,
  Z as br,
  _ as ci,
  $ as wr,
  a0 as Ie,
  a1 as tn,
  a2 as In,
  a3 as Ee,
  a4 as Sr,
  a5 as Xi,
  a6 as Z,
  a7 as x,
  a8 as bl,
  a9 as $,
  aa as pt,
  ab as kr,
  ac as Cr,
  ad as vr,
  ae as wl,
  af as Sl,
  ag as Ar,
  ah as qi,
  ai as yr,
  aj as Ir,
  ak as Dr,
  al as Tr,
  am as Mr,
  an as kl,
  ao as Zi,
  ap as Go,
  aq as Hr,
  ar as Er,
  as as Fr,
  at as Or,
  au as Yr,
  av as Xr,
  aw as Ur,
  ax as Oi,
  ay as Vr,
  az as Rr,
} from "./vendor.js";
const Pr = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = t(l);
    fetch(l.href, o);
  }
};
Pr();
const zr = () => {
  const n = {
      heading: 1,
      show: !1,
      street1: "",
      street2: "",
      showCompass: !0,
      showStreets: !0,
      showPointer: !0,
      showDegress: !0,
    },
    { subscribe: e, set: t, update: i } = qt(n);
  return cn(
    { subscribe: e, set: t, update: i },
    {
      receiveCompassMessage(o) {
        i(
          (r) => (
            (r.show = o.show),
            (r.showCompass = o.showCompass),
            (r.street1 = o.street1),
            (r.street2 = o.street2),
            (r.showStreets = o.showStreets),
            (r.showPointer = o.showPointer),
            (r.showDegress = o.showDegress),
            r
          )
        );
      },
      receiveCompassCloseMessage(o) {
        i((r) => ((r.show = o.show), r));
      },
      receiveCompassOpenMessage(o) {
        i((r) => ((r.show = o.show), (r.showCompass = o.showCompass), r));
      },
      receiveHeadingMessage(o) {
        i((r) => ((r.heading = o.value - 90), r));
      },
    }
  );
};
var Ei = zr();
const Lr = () => {
  const n = {
      cash: 0,
      bank: 0,
      amount: 0,
      plus: !1,
      minus: !1,
      showCash: !1,
      showBank: !1,
      showUpdate: !1,
    },
    { subscribe: e, set: t, update: i } = qt(n),
    l = {
      finishShowingUpdate() {
        i((o) => ((o.showUpdate = !1), o));
      },
      finishShowingMoney(o) {
        i((r) => (o == "cash" ? (r.showCash = !1) : (r.showBank = !1), r));
      },
      formatMoney(o) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        }).format(o);
      },
      receiveShowConstantMessage(o) {
        i(
          (r) => (
            (r.showCash = !0),
            (r.showBank = !0),
            (r.cash = o.cash),
            (r.bank = o.bank),
            r
          )
        );
      },
      receiveUpdateMessage(o) {
        i(
          (r) => (
            (r.showUpdate = !0),
            (r.amount = o.amount),
            (r.bank = o.bank),
            (r.cash = o.cash),
            (r.minus = o.minus),
            (r.plus = !o.minus),
            o.type == "cash"
              ? (r.showCash = !0)
              : o.type == "bank" && (r.showBank = !0),
            setTimeout(() => l.finishShowingUpdate(), 3e3),
            setTimeout(() => l.finishShowingMoney(o.type), 4e3),
            r
          )
        );
      },
      receiveShowAccountsMessage(o) {
        i(
          (r) => (
            o.type == "cash" && !r.showCash
              ? ((r.showCash = !0), (r.cash = o.cash))
              : o.type == "bank" &&
                !r.showBank &&
                ((r.showBank = !0), (r.bank = o.bank)),
            setTimeout(() => l.finishShowingMoney(o.type), 3500),
            r
          )
        );
      },
    };
  return cn({ subscribe: e, set: t, update: i }, l);
};
var zi = Lr();
const ll = [
    "voice",
    "health",
    "armor",
    "hunger",
    "thirst",
    "stress",
    "oxygen",
    "armed",
    "parachute",
    "engine",
    "harness",
    "cruise",
    "nitro",
    "dev",
  ],
  qr = [
    "standard",
    "bottom-right-row",
    "center-bottom-row",
    "left-bottom-column",
    "right-bottom-column",
    "top-left-row",
    "top-right-row",
  ],
  Wo = [
    "split-circle",
    "inner-circle",
    "rotated-square",
    "regular-square",
    "circle-fill",
    "square-fill",
    "rotated-square-fill",
    "badge",
    "transparent",
  ];
class Gi {
  constructor(
    e,
    {
      icon: t = null,
      isShowing: i = !1,
      name: l = "",
      progressValue: o = 100,
    } = {}
  ) {
    He(this, "height", 50);
    He(this, "icon", null);
    He(this, "iconScaling", 0.4);
    He(this, "iconTranslateX", 0);
    He(this, "iconTranslateY", 0);
    He(this, "isShowing", !0);
    He(this, "name", "");
    He(this, "progressValue", 100);
    He(this, "shape", "split-circle");
    He(this, "rotateDegree", 0);
    He(this, "translateX", 0);
    He(this, "translateY", 0);
    He(this, "width", 50);
    He(this, "iconRotateDegree", 0);
    switch (e) {
      case "split-circle":
        break;
      case "rotated-square":
        (this.rotateDegree = 45), (this.height = 40), (this.width = 40);
        break;
    }
    (this.shape = e),
      (this.icon = t),
      (this.isShowing = i),
      (this.name = l),
      (this.progressValue = o);
  }
}
class Jo extends Gi {
  constructor(e, t = {}) {
    super(e, t);
    He(this, "displayOutline", !0);
    He(this, "iconRotateDegree", 0);
    He(this, "ringSize", 2.5);
    He(this, "borderGap", 0.85);
    switch (e) {
      case "split-circle":
        (this.iconScaling = 0.45), (this.ringSize = 3.5);
        break;
      case "rotated-square":
        (this.iconScaling = 0.4),
          (this.ringSize = 2.5),
          (this.borderGap = 0.8),
          (this.iconRotateDegree = 315);
        break;
      case "regular-square":
        (this.iconScaling = 0.4), (this.ringSize = 2.5), (this.borderGap = 0.8);
        break;
    }
  }
}
class Nr extends Gi {
  constructor(e, t = {}) {
    super(e, t);
    He(this, "xAxisRound", 5);
    He(this, "yAxisRound", 20);
    He(this, "barHeight", 4);
    switch (e) {
      case "badge":
        (this.height = 55),
          (this.width = 45),
          (this.iconScaling = 0.38),
          (this.xAxisRound = 0),
          (this.yAxisRound = 0),
          (this.barHeight = 4);
        break;
      case "transparent":
        (this.height = 55),
          (this.width = 45),
          (this.iconScaling = 0.38),
          (this.xAxisRound = 0),
          (this.yAxisRound = 0),
          (this.barHeight = 5);
        break;
    }
  }
}
class Br extends Jo {
  constructor(e, t = {}) {
    super(e, t);
    He(this, "dashes", 8);
    He(this, "gap", 4);
    He(this, "borderGap", 0.8);
    switch (e) {
      case "split-circle":
        (this.dashes = 8), (this.gap = 2.5), (this.borderGap = 0.9);
        break;
    }
  }
}
class jr extends Gi {
  constructor(e, t = {}) {
    super(e, t);
    He(this, "borderSize", 4);
    switch (e) {
      case "circle-fill":
        this.borderSize = 3;
        break;
      case "rotated-square-fill":
        (this.height = 50),
          (this.width = 50),
          (this.borderSize = 3.5),
          (this.iconScaling = 0.3);
        break;
    }
  }
}
function Fi(n, e = {}) {
  switch (n) {
    case "inner-circle":
    case "rotated-square":
    case "regular-square":
      return new Jo(n, e);
    case "split-circle":
      return new Br(n, e);
    case "circle-fill":
    case "square-fill":
    case "rotated-square-fill":
      return new jr(n, e);
    case "badge":
    case "transparent":
      return new Nr(n, e);
    default:
      return new Gi(n, e);
  }
}
const Zo = "split-circle";
function Xn(n = "", e = !1, t = null) {
  return Fi(Zo, { isShowing: e, icon: t, name: n });
}
const Gr = (n) => {
  const e = Math.max(0, Math.min(100, n));
  return Math.round((e / 100) * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();
};
function en(n, e, t = "", i = "#FFFFFFFF", l = "#212121FF") {
  return {
    iconColor: i,
    iconContrast: 100,
    iconDropShadowAmount: 0,
    innerColor: l,
    name: n,
    outlineColor: t || e + Gr(40),
    outlineContrast: 100,
    outlineDropShadowAmount: 0,
    progressColor: e,
    progressContrast: 100,
    progressDropShadowAmount: 0,
  };
}
function Un() {
  return Li(Zo);
}
function Li(n) {
  let e = {};
  switch (n) {
    case "split-circle":
    case "inner-circle":
      e.innerColor = !0;
      break;
  }
  return e;
}
const Ki = "PSHudMenu",
  xi = "PSHudPlayerStatus",
  $i = "PSHudLayout",
  el = "PSHudColor",
  Ko = "PSHudProfile";
function Qn(n) {
  return Math.min(n, 100);
}
const Wr = () => {
  let n = localStorage.getItem(el),
    e = {};
  n && (e = JSON.parse(n));
  function t(s, c) {
    return e && e[s] != null ? e[s] : c;
  }
  function i() {
    return {
      globalColorSettings: t("globalColorSettings", {
        editableColors: Un(),
        editSingleIconName: "voice",
        editSingleIconStage: 0,
        iconColor: "",
        iconContrast: 100,
        iconDropShadowAmount: 0,
        innerColor: "",
        outlineColor: "",
        outlineContrast: 100,
        outlineDropShadowAmount: 0,
        progressColor: "",
        progressContrast: 100,
        progressDropShadowAmount: 0,
      }),
      icons: {
        voice: t("voice", {
          currentEffect: 0,
          colorEffects: [
            en("not-talking", "#FFFFFF"),
            en("talking", "#FFFF3E"),
            en("radio-talking", "#D64763"),
          ],
          editableColors: Un(),
        }),
        health: t("health", {
          currentEffect: 0,
          colorEffects: [en("alive", "#06d170"), en("dead", "#ff0000")],
          editableColors: Un(),
        }),
        armor: t("armor", {
          currentEffect: 0,
          colorEffects: [en("armor", "#0764ce"), en("no-armor", "#ff0000")],
          editableColors: Un(),
        }),
        hunger: t("hunger", {
          currentEffect: 0,
          colorEffects: [en("normal", "#ffbb00"), en("starving", "#ff0000")],
          editableColors: Un(),
        }),
        thirst: t("thirst", {
          currentEffect: 0,
          colorEffects: [en("normal", "#00ffc2"), en("thirsty", "#ff0000")],
          editableColors: Un(),
        }),
        stress: t("stress", {
          currentEffect: 0,
          colorEffects: [en("normal", "#f51319")],
          editableColors: Un(),
        }),
        oxygen: t("oxygen", {
          currentEffect: 0,
          colorEffects: [en("normal", "#07c4ce")],
          editableColors: Un(),
        }),
        armed: t("armed", {
          currentEffect: 0,
          colorEffects: [en("normal", "#f563ff")],
          editableColors: Un(),
        }),
        parachute: t("parachute", {
          currentEffect: 0,
          colorEffects: [en("normal", "#d1ff63")],
          editableColors: Un(),
        }),
        engine: t("engine", {
          currentEffect: 0,
          colorEffects: [
            en("no-damage", "#3FA554"),
            en("minor-damage", "#dd6e14"),
            en("major-damage", "#ff0000"),
          ],
          editableColors: Un(),
        }),
        harness: t("harness", {
          currentEffect: 0,
          colorEffects: [en("normal", "#9a00ff")],
          editableColors: Un(),
        }),
        cruise: t("cruise", {
          currentEffect: 0,
          colorEffects: [en("normal", "#f563ff")],
          editableColors: Un(),
        }),
        nitro: t("nitro", {
          currentEffect: 0,
          colorEffects: [
            en("no-nitro", "#ffffff"),
            en("active-nitro", "#D64763"),
          ],
          editableColors: Un(),
        }),
        dev: t("dev", {
          currentEffect: 0,
          colorEffects: [en("normal", "#000000")],
          editableColors: Un(),
        }),
      },
    };
  }
  const l = i(),
    { subscribe: o, set: r, update: f } = qt(l);
  return cn(
    { subscribe: o, set: r, update: f },
    {
      resetColorEffects() {
        (e = {}), localStorage.removeItem(el), r(i());
      },
      receiveUIUpdateMessage(s) {
        if (!s || !Object.keys(s).length) return;
        let c = rt(G);
        f((h) => {
          let m, p;
          for ([m, p] of Object.entries(s))
            h.icons[m] = {
              currentEffect: 0,
              editableColors: Li(c.icons[m].shape),
              colorEffects: p.colorEffects,
            };
          return h;
        });
      },
      updateAllDefaultEffectColorSetting(s, c) {
        f((h) => {
          for (let m of Object.keys(h.icons))
            switch (s) {
              case "progressDropShadowAmount":
              case "iconDropShadowAmount":
              case "outlineDropShadowAmount":
                for (let p of h.icons[m].colorEffects) p[s] = c;
                break;
              default:
                h.icons[m].colorEffects[0][s] = c;
                break;
            }
          return (h.globalColorSettings[s] = c), h;
        });
      },
      updateAllIconShapeEditableColor(s) {
        f((c) => {
          let h = Li(s);
          for (let m in c.icons) c.icons[m].editableColors = h;
          return (c.globalColorSettings.editableColors = h), c;
        });
      },
      updateDefaultEffectColorSetting(s, c, h) {
        f((m) => ((m.icons[s].colorEffects[0][c] = h), m));
      },
      updateIconColorToProgressColor() {
        f((s) => {
          for (const c of Object.values(s.icons))
            for (const h of c.colorEffects) h.iconColor = h.progressColor;
          return s;
        });
      },
      updateIconEffectStage(s, c) {
        f(
          (h) => (
            c < 0 ||
              c > h.icons[s].colorEffects.length - 1 ||
              (h.icons[s].currentEffect = c),
            h
          )
        );
      },
      updateIconShapeEditableColor(s, c) {
        f((h) => ((h.icons[s].editableColors = Li(c)), h));
      },
      updateColorSetting(s, c, h, m) {
        f(
          (p) => (
            c < 0 ||
              c > p.icons[s].colorEffects.length - 1 ||
              (p.icons[s].colorEffects[c][h] = m),
            p
          )
        );
      },
      updateProgressColor(s, c, h) {
        f(
          (m) => (
            c < 0 ||
              c > m.icons[s].colorEffects.length - 1 ||
              (m.icons[s].colorEffects[c].progressColor = h),
            m
          )
        );
      },
    }
  );
};
var ae = Wr();
const Jr = () => {
  let n = localStorage.getItem($i),
    e = {};
  n && (e = JSON.parse(n));
  function t(s, c) {
    return e && e[s] != null ? e[s] : c;
  }
  function i() {
    return {
      layout: t("layout", "standard"),
      iconBetweenSpacing: t("iconBetweenSpacing", 10),
      xAxisSpacing: t("xAxisSpacing", 20),
      yAxisSpacing: t("yAxisSpacing", 2),
    };
  }
  const l = i(),
    { subscribe: o, set: r, update: f } = qt(l);
  return cn(
    { subscribe: o, set: r, update: f },
    {
      resetLayout() {
        (e = {}), localStorage.removeItem($i), r(i());
      },
      receiveUIUpdateMessage(s) {
        f(
          (c) => (
            (c.layout = s.layout),
            (c.iconBetweenSpacing = s.iconBetweenSpacing),
            (c.xAxisSpacing = s.xAxisSpacing),
            (c.yAxisSpacing = s.yAxisSpacing),
            c
          )
        );
      },
      updateLayout(s) {
        f((c) => ((c.layout = s), c));
      },
      updateLayoutSettings(s, c, h, m) {
        f(
          (p) => (
            (p.layout = s),
            (p.xAxisSpacing = c),
            (p.yAxisSpacing = h),
            (p.iconBetweenSpacing = m),
            p
          )
        );
      },
    }
  );
};
var xn = Jr();
const Zr = {
    prefix: "fas",
    iconName: "heartbeat",
    icon: [
      512,
      512,
      [],
      "f043",
      "M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z",
    ],
  },
  Kr = {
    prefix: "fas",
    iconName: "heartbeat",
    icon: [
      512,
      512,
      [],
      "f043",
      "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z",
    ],
  },
  Qr = {
    prefix: "fas",
    iconName: "heartbeat",
    icon: [
      512,
      512,
      [],
      "f043",
      "M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4H336c6.3 0 12.4-.3 18.5-1c11.9-1.2 16.4-15.5 10.8-26c-8.5-15.8-13.3-33.8-13.3-53c0-61.9 50.1-112 112-112c8 0 15.7 .8 23.2 2.4c11.7 2.5 24.1-5.9 22-17.6C494.5 62.5 422.5 0 336 0C238.8 0 160 78.8 160 176v89.2z",
    ],
  },
  xr = {
    prefix: "fas",
    iconName: "heartbeat",
    icon: [
      288,
      512,
      [],
      "f043",
      "M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM61.75 48h164.5l7.17 80H54.58l7.17-80z",
    ],
  },
  $r = {
    prefix: "fas",
    iconName: "heartbeat",
    icon: [
      410,
      512,
      [],
      "f043",
      "M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z",
    ],
  },
  es = {
    prefix: "fas",
    iconName: "heartbeat",
    icon: [
      576,
      512,
      [],
      "f043",
      "M265.2 192c25.4 0 49.8 7.1 70.8 19.9V512H144V337.7L90.4 428.3c-11.2 19-35.8 25.3-54.8 14.1s-25.3-35.8-14.1-54.8L97.7 258.8c24.5-41.4 69-66.8 117.1-66.8h50.4zM160 80a80 80 0 1 1 160 0A80 80 0 1 1 160 80zM448 0c8.8 0 16 7.2 16 16V132.3c9.6 5.5 16 15.9 16 27.7V269.3l16-5.3V208c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v84.5c0 6.9-4.4 13-10.9 15.2L480 325.3V352h48c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H484l23 92.1c2.5 10.1-5.1 19.9-15.5 19.9H432c-8.8 0-16-7.2-16-16V400H400c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32V160c0-11.8 6.4-22.2 16-27.7V32c-8.8 0-16-7.2-16-16s7.2-16 16-16h16 16z",
    ],
  },
  ns = {
    prefix: "fas",
    iconName: "heartbeat",
    icon: [
      640,
      512,
      [],
      "f043",
      "M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z",
    ],
  },
  ol = {
    prefix: "fas",
    iconName: "heartbeat",
    icon: [
      640,
      512,
      [],
      "f043",
      "M352 96c0 17.7-14.3 32-32 32H288v32h80.9c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.4 31.5L451.1 394.3c-12.1 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48V346.7l-67.5-30C11.2 309 0 291.8 0 272.8V208c0-26.5 21.5-48 48-48H96h48 80V128H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H320c17.7 0 32 14.3 32 32zM48 208v64.8l48 21.3V208H48zM592 448c-26.5 0-48-21.5-48-48c0-21 20.6-62.6 34.9-88.8c5.8-10.6 20.5-10.6 26.3 0C619.4 337.4 640 379 640 400c0 32-21.5 48-48 48z",
    ],
  },
  ts = () => {
    let n = localStorage.getItem(xi),
      e = {};
    n && (e = JSON.parse(n));
    function t(s, c) {
      return e && e[s] != null ? e[s] : c;
    }
    function i() {
      return {
        designMode: !1,
        designProgress: 0,
        globalIconSettings: t(
          "globalIconSettings",
          ((b) => {
            var S = b,
              { isShowing: s, name: c, icon: h, progressValue: m } = S,
              p = Hi(S, ["isShowing", "name", "icon", "progressValue"]);
            return p;
          })(Xn())
        ),
        icons: {
          voice: t("voice", Xn("voice", !0, pl)),
          health: t("health", Xn("health", !1, Zr)),
          armor: t("armor", Xn("armor", !1, Kr)),
          hunger: t("hunger", Xn("hunger", !1, Qr)),
          thirst: t("thirst", Xn("thirst", !1, xr)),
          stress: t("stress", Xn("stress", !1, lr)),
          oxygen: t("oxygen", Xn("oxygen", !1, $r)),
          armed: t("armed", Xn("armed", !1, es)),
          parachute: t("parachute", Xn("parachute", !1, or)),
          engine: t("engine", Xn("engine", !1, rr)),
          harness: t("harness", Xn("harness", !1, il)),
          cruise: t("cruise", Xn("cruise", !1, sr)),
          nitro: t("nitro", Xn("nitro", !1, ar)),
          dev: t("dev", Xn("dev", !1, ns)),
        },
        dynamicIcons: t("dynamicIcons", {
          armor: !1,
          engine: !1,
          health: !1,
          hunger: !1,
          nitro: !1,
          oxygen: !1,
          stress: !1,
          thirst: !1,
        }),
        saveUIState: "ready",
        show: !1,
        showingOrder: [
          "voice",
          "health",
          "armor",
          "hunger",
          "thirst",
          "oxygen",
          "stress",
          "armed",
          "parachute",
          "harness",
          "cruise",
          "nitro",
          "dev",
        ],
      };
    }
    const l = i(),
      { subscribe: o, set: r, update: f } = qt(l),
      a = {
        resetPlayerStatusIcons() {
          (e = {}),
            localStorage.removeItem(xi),
            r(Pt(cn({}, i()), { show: !0 }));
        },
        updateAllIconsSettings(s, c) {
          f((h) => {
            for (let m in h.icons) s in h.icons[m] && (h.icons[m][s] = c);
            return h;
          });
        },
        updateAllDisplayOutline(s) {
          a.updateAllIconsSettings("displayOutline", s);
        },
        updateAllHeight(s) {
          a.updateAllIconsSettings("height", s);
        },
        updateAllIconScale(s) {
          a.updateAllIconsSettings("iconScaling", s);
        },
        updateAllRingSize(s) {
          a.updateAllIconsSettings("ringSize", s);
        },
        updateAllRoundXAxis(s) {
          a.updateAllIconsSettings("xAxisRound", s);
        },
        updateAllRoundYAxis(s) {
          a.updateAllIconsSettings("yAxisRound", s);
        },
        updateAllRotateDegree(s) {
          a.updateAllIconsSettings("rotateDegree", s);
        },
        updateAllDashes(s) {
          a.updateAllIconsSettings("dashes", s);
        },
        updateAllDashGaps(s) {
          a.updateAllIconsSettings("gap", s);
        },
        updateAllBorderGap(s) {
          a.updateAllIconsSettings("borderGap", s);
        },
        updateAllIconRotateDegress(s) {
          a.updateAllIconsSettings("iconRotateDegree", s);
        },
        updateAllBorderSize(s) {
          a.updateAllIconsSettings("borderSize", s);
        },
        updateAllShapes(s) {
          (s == "rotated-square" || s == "rotated-square-fill") &&
            xn.updateLayoutSettings("standard", 4, 4, 16),
            f((c) => {
              for (let h in c.icons) {
                let m = Fi(s, {
                  icon: c.icons[h].icon,
                  isShowing: c.icons[h].isShowing,
                  name: c.icons[h].name,
                  progressValue: c.icons[h].progressValue,
                });
                c.icons[h] = m;
              }
              return (
                (c.globalIconSettings = ((v) => {
                  var d = v,
                    { isShowing: h, name: m, icon: p, progressValue: b } = d,
                    S = Hi(d, ["isShowing", "name", "icon", "progressValue"]);
                  return S;
                })(
                  Fi(s, {
                    icon: c.globalIconSettings.icon,
                    isShowing: c.globalIconSettings.isShowing,
                    name: c.globalIconSettings.name,
                  })
                )),
                c
              );
            });
        },
        updateAllTranslateIconX(s) {
          a.updateAllIconsSettings("iconTranslateX", s);
        },
        updateAllTranslateIconY(s) {
          a.updateAllIconsSettings("iconTranslateY", s);
        },
        updateAllTranslateX(s) {
          a.updateAllIconsSettings("translateX", s);
        },
        updateAllTranslateY(s) {
          a.updateAllIconsSettings("translateY", s);
        },
        updateAllWidth(s) {
          a.updateAllIconsSettings("width", s);
        },
        updateIconShape(s, c) {
          f((h) => {
            let m = Fi(c, {
              icon: h.icons[s].icon,
              isShowing: h.icons[s].isShowing,
              name: h.icons[s].name,
              progressValue: h.icons[s].progressValue,
            });
            return (h.icons[s] = m), (h.icons[s].shape = c), h;
          });
        },
        updateIconSetting(s, c, h) {
          f((m) => ((m.icons[s][c] = h), m));
        },
        updateShowingDynamicIcon(s, c) {
          let h = !1;
          return (
            f((m) => {
              switch (s) {
                case "armor":
                  (m.icons.armor.isShowing = a.staticGenericZeroHandleShow(
                    c,
                    m.icons.armor.progressValue
                  )),
                    (h = m.icons.armor.isShowing);
                  break;
                case "engine":
                  (m.icons.engine.isShowing = a.staticEngineHandleShow(
                    c,
                    m.icons.engine.progressValue
                  )),
                    (h = m.icons.engine.isShowing);
                  break;
                case "health":
                  (m.icons.health.isShowing = a.staticGenericHundredHandleShow(
                    c,
                    m.icons.health.progressValue
                  )),
                    (h = m.icons.health.isShowing);
                  break;
                case "hunger":
                  (m.icons.hunger.isShowing = a.staticGenericHundredHandleShow(
                    c,
                    m.icons.hunger.progressValue
                  )),
                    (h = m.icons.hunger.isShowing);
                  break;
                case "nitro":
                  (m.icons.nitro.isShowing = a.staticNitroHandleShow(
                    c,
                    m.icons.nitro.progressValue,
                    m.icons.engine.progressValue
                  )),
                    (h = m.icons.nitro.isShowing);
                  break;
                case "oxygen":
                  (m.icons.oxygen.isShowing = a.staticGenericHundredHandleShow(
                    c,
                    m.icons.oxygen.progressValue
                  )),
                    (h = m.icons.oxygen.isShowing);
                  break;
                case "stress":
                  (m.icons.stress.isShowing = a.staticGenericZeroHandleShow(
                    c,
                    m.icons.stress.progressValue
                  )),
                    (h = m.icons.stress.isShowing);
                  break;
                case "thirst":
                  (m.icons.thirst.isShowing = a.staticGenericHundredHandleShow(
                    c,
                    m.icons.thirst.progressValue
                  )),
                    (h = m.icons.thirst.isShowing);
                  break;
              }
              return m;
            }),
            h
          );
        },
        updateAllShowingDynamicIcons(s) {
          f((c) => {
            for (const h in c.dynamicIcons)
              (c.dynamicIcons[h] = s),
                (c.icons[h].isShowing = a.updateShowingDynamicIcon(h, s));
            return c;
          });
        },
        receiveShowMessage(s) {
          f((c) => ((c.show = s.show), c));
        },
        receiveStatusUpdateMessage(s) {
          f(
            (c) => (
              (c.show = s.show),
              (c.icons.health.progressValue = Qn(s.health)),
              (c.icons.armor.progressValue = Qn(s.armor)),
              (c.icons.thirst.progressValue = Qn(s.thirst)),
              (c.icons.hunger.progressValue = Qn(s.hunger)),
              (c.icons.stress.progressValue = Qn(s.stress)),
              (c.icons.voice.progressValue = Qn(s.voice * 16.6)),
              (c.icons.oxygen.progressValue = Qn(s.oxygen)),
              (c.icons.parachute.progressValue = Qn(s.parachute)),
              (c.icons.engine.progressValue = Qn(s.engine)),
              (c.icons.harness.progressValue = Qn(s.hp * 5)),
              (c.icons.cruise.progressValue = Qn(s.speed)),
              (c.icons.nitro.progressValue = Qn(s.nos || 0)),
              (c.icons.health.isShowing = a.staticGenericHundredHandleShow(
                c.dynamicIcons.health,
                c.icons.health.progressValue
              )),
              s.playerDead
                ? (ae.updateIconEffectStage("health", 1),
                  (c.icons.health.progressValue = 100))
                : ae.updateIconEffectStage("health", 0),
              (c.icons.armor.isShowing = a.staticGenericZeroHandleShow(
                c.dynamicIcons.armor,
                c.icons.armor.progressValue
              )),
              s.armor <= 0
                ? ae.updateIconEffectStage("armor", 1)
                : ae.updateIconEffectStage("armor", 0),
              (c.icons.hunger.isShowing = a.staticGenericHundredHandleShow(
                c.dynamicIcons.hunger,
                c.icons.hunger.progressValue
              )),
              s.hunger <= 30
                ? ae.updateIconEffectStage("hunger", 1)
                : ae.updateIconEffectStage("hunger", 0),
              (c.icons.thirst.isShowing = a.staticGenericHundredHandleShow(
                c.dynamicIcons.thirst,
                c.icons.thirst.progressValue
              )),
              s.thirst <= 30
                ? ae.updateIconEffectStage("thirst", 1)
                : ae.updateIconEffectStage("thirst", 0),
              (c.icons.stress.isShowing = a.staticGenericZeroHandleShow(
                c.dynamicIcons.stress,
                c.icons.stress.progressValue
              )),
              (c.icons.oxygen.isShowing = a.staticGenericHundredHandleShow(
                c.dynamicIcons.oxygen,
                c.icons.oxygen.progressValue
              )),
              (c.icons.engine.isShowing = a.staticEngineHandleShow(
                c.dynamicIcons.engine,
                c.icons.engine.progressValue
              )),
              s.engine <= 25
                ? ae.updateIconEffectStage("engine", 2)
                : s.engine <= 75
                ? ae.updateIconEffectStage("engine", 1)
                : s.engine <= 100 && ae.updateIconEffectStage("engine", 0),
              (c.icons.nitro.isShowing = a.staticNitroHandleShow(
                c.dynamicIcons.nitro,
                c.icons.nitro.progressValue,
                c.icons.engine.progressValue
              )),
              s.nitroActive
                ? ae.updateIconEffectStage("nitro", 1)
                : ae.updateIconEffectStage("nitro", 0),
              s.talking
                ? s.radioTalking
                  ? ae.updateIconEffectStage("voice", 2)
                  : ae.updateIconEffectStage("voice", 1)
                : ae.updateIconEffectStage("voice", 0),
              s.radioChannel && s.radioChannel > 0
                ? (c.icons.voice.icon = ir)
                : (c.icons.voice.icon = pl),
              s.cruise
                ? (c.icons.cruise.isShowing = !0)
                : (c.icons.cruise.isShowing = !1),
              s.harness
                ? (c.icons.harness.isShowing = !0)
                : (c.icons.harness.isShowing = !1),
              s.armed
                ? (c.icons.armed.isShowing = !0)
                : (c.icons.armed.isShowing = !1),
              s.parachute >= 0
                ? (c.icons.parachute.isShowing = !0)
                : (c.icons.parachute.isShowing = !1),
              s.dev
                ? (c.icons.dev.isShowing = !0)
                : (c.icons.dev.isShowing = !1),
              c
            )
          );
        },
        receiveUIUpdateMessage(s) {
          !s ||
            !Object.keys(s).length ||
            f((c) => {
              let h, m;
              for ([h, m] of Object.entries(s))
                c.icons[h] = cn(
                  cn(
                    {},
                    Fi(m.shape, {
                      icon: c.icons[h].icon,
                      isShowing: c.icons[h].isShowing,
                      name: c.icons[h].name,
                      progressValue: c.icons[h].progressValue,
                    })
                  ),
                  m
                );
              return (c.saveUIState = "ready"), c;
            });
        },
        receiveProfileData(s) {
          a.receiveUIUpdateMessage(s.icons),
            f(
              (c) => (
                (c.globalIconSettings = s.globalIconSettings),
                (c.showingOrder = s.showingOrder),
                c
              )
            );
        },
        staticGenericZeroHandleShow(s, c) {
          return s ? !0 : c != 0;
        },
        staticEngineHandleShow(s, c) {
          return s ? !(c < 0) : c >= 95 ? !1 : !(c < 0);
        },
        staticGenericHundredHandleShow(s, c) {
          return s ? !0 : !(c >= 100);
        },
        staticNitroHandleShow(s, c, h) {
          return s ? h > 0 : !(c <= 0);
        },
      };
    return cn({ subscribe: o, set: r, update: f }, a);
  };
var G = ts();
const is = {
  biohazard: fr,
  database: cr,
  dollarsign: gr,
  dumbbell: dr,
  exclamation: Bo,
  lightbulb: hr,
  locationarrow: mr,
  swimming: _r,
  wind: pr,
};
function ls(n) {
  return is[n] || Bo;
}
const os = () => {
  const n = {},
    { subscribe: e, set: t, update: i } = qt(n);
  return cn(
    { subscribe: e, set: t, update: i },
    {
      receiveBuffStatusMessage(o) {
        const r = o.buffName;
        i((f) => {
          if (!f[r]) {
            const s = rt(G).icons.health;
            let c = Pt(cn({}, s), {
                icon: ls(o.iconName),
                isShowing: o.display || !0,
                name: r,
                progressValue: o.progressValue || 0,
              }),
              h = o.progressColor || "#FFD700",
              m = o.outlineColor,
              p = o.iconColor || "#FFFFFF";
            if (!m) {
              let S = ur(h);
              (S.opacity = 0.4), (m = S.formatHex8());
            }
            let b = Pt(cn({}, c), {
              iconColor: p,
              outlineColor: m,
              progressColor: h,
            });
            return (f[r] = b), f;
          }
          return (
            !isNaN(o.progressValue) && o.progressValue >= 0
              ? (f[r].progressValue = o.progressValue)
              : o.display != null && o.display != null && !o.display
              ? (f = delete f[r] && f)
              : console.error("PS-Buffs error: Buff State Message malformed!"),
            f
          );
        });
      },
      receiveEnhancementStatusMessage(o) {
        const r = o.enhancementName;
        if (!r) {
          console.error(
            "PS-Buffs error: Enchancement Message name malformed:",
            o.enhancementName
          );
          return;
        }
        const f = r.replace("super-", "");
        if (!ll.includes(f)) {
          console.error(
            "PS-Buffs error: Enhancement Message name not valid:",
            o.enhancementName
          );
          return;
        }
        i((a) => {
          if (!a[f] && o.display && o.iconColor)
            a[f] = { iconColor: o.iconColor };
          else if (o.display === !1) {
            if (!a[f])
              return (
                console.error(
                  "PS-Buffs error: Enchancement name not found:",
                  o.enhancementName
                ),
                a
              );
            a = delete a[f] && a;
          } else
            console.error("PS-Buffs error: Enhancement Message malformed:", o);
          return a;
        });
      },
    }
  );
};
var nl = os();
const rs = () => {
  const n = {
      fuelColor: "#FFFFFF",
      altitude: 0,
      fuel: 0,
      speed: 0,
      show: !1,
      showAltitude: !1,
      showSeatBelt: !1,
      showSquare: !1,
      showSquareBorder: !1,
      ShowCircle: !1,
      showCircleBorder: !1,
      seatbeltColor: "#e85b14",
    },
    { subscribe: e, set: t, update: i } = qt(n);
  return cn(
    { subscribe: e, set: t, update: i },
    {
      receiveShowMessage(o) {
        i((r) => ((r.show = o.show), (r.showSeatBelt = o.seatbelt), r));
      },
      receiveUpdateMessage(o) {
        i(
          (r) => (
            (r.show = o.show),
            (r.speed = o.speed),
            (r.altitude = o.altitude),
            (r.fuel = Qn(o.fuel)),
            (r.showSeatBelt = o.showSeatbelt),
            (r.showAltitude = o.showAltitude),
            (r.showSquareBorder = o.showSquareB),
            (r.showCircleBorder = o.showCircleB),
            o.seatbelt ? (r.showSeatBelt = !1) : (r.showSeatBelt = !0),
            o.fuel <= 20
              ? (r.fuelColor = "#ff0000")
              : o.fuel <= 30
              ? (r.fuelColor = "#dd6e14")
              : (r.fuelColor = "#FFFFFF"),
            o.isPaused && (r.show = !1),
            r
          )
        );
      },
    }
  );
};
var Ni = rs();
const ss = () => {
  let n = localStorage.getItem(Ko),
    e = {};
  n && (e = JSON.parse(n));
  function t(s, c) {
    return e && e[s] != null ? e[s] : c;
  }
  function i() {
    return t("profiles", []);
  }
  const l = i(),
    { subscribe: o, set: r, update: f } = qt(l);
  return cn(
    { subscribe: o, set: r, update: f },
    {
      addNewProfile() {
        f((s) => {
          let c = s.length + 1,
            h = "Profile#" + c;
          return (s = [...s, { name: h, editingName: !1, savedData: "" }]), s;
        });
      },
      applyProfileToHud(s) {
        f((c) => {
          if (c[s] && c[s].savedData) {
            let h = JSON.parse(c[s].savedData);
            G.receiveProfileData(h.playerStatusIconData),
              ae.receiveUIUpdateMessage(h.colorData.icons),
              xn.receiveUIUpdateMessage(h.layoutData);
          }
          return c;
        });
      },
      deleteProfile(s) {
        f((c) => ((c = [...c.slice(0, s), ...c.slice(s + 1)]), c));
      },
      saveHUDToProfile(s) {
        const c = rt(G),
          h = rt(ae),
          m = rt(xn);
        let p = { playerStatusIconData: c, colorData: h, layoutData: m };
        f((b) => ((b[s].savedData = JSON.stringify(p)), b));
      },
    }
  );
};
var zt = ss();
function as() {
  function n(e) {
    switch (e.data.action) {
      case "baseplate":
        switch (e.data.topic) {
          case "compassupdate":
            Ei.receiveCompassMessage(e.data);
            break;
          case "opencompass":
            Ei.receiveCompassOpenMessage(e.data);
            break;
          case "closecompass":
            Ei.receiveCompassCloseMessage(e.data);
            break;
        }
        break;
      case "car":
        switch (e.data.topic) {
          case "display":
            Ni.receiveShowMessage(e.data);
            break;
          case "status":
            Ni.receiveUpdateMessage(e.data);
            break;
        }
        break;
      case "externalstatus":
        switch (e.data.topic) {
          case "buff":
            nl.receiveBuffStatusMessage(e.data);
            break;
          case "enhancement":
            nl.receiveEnhancementStatusMessage(e.data);
            break;
        }
        break;
      case "hudtick":
        switch (e.data.topic) {
          case "display":
            G.receiveShowMessage(e.data);
            break;
          case "status":
            G.receiveStatusUpdateMessage(e.data);
            break;
          default:
            G.receiveStatusUpdateMessage(e.data);
            break;
        }
        break;
      case "menu":
        switch (e.data.topic) {
          case "adminonly":
            Fe.receiveAdminMessage(e.data);
            break;
          case "restart":
            Fe.receiveRestartMessage();
            break;
        }
        break;
      case "open":
        Fe.receiveMessage();
        break;
      case "show":
        zi.receiveShowAccountsMessage(e.data);
        break;
      case "showconstant":
        zi.receiveShowConstantMessage(e.data);
        break;
      case "update":
        Ei.receiveHeadingMessage(e.data);
        break;
      case "updatemoney":
        zi.receiveUpdateMessage(e.data);
        break;
      case "updateUISettings":
        if (!e.data.icons || !e.data.layout || !e.data.colors) return;
        G.receiveUIUpdateMessage(e.data.icons),
          xn.receiveUIUpdateMessage(e.data.layout),
          ae.receiveUIUpdateMessage(e.data.colors);
        break;
    }
  }
  ji(() => window.addEventListener("message", n)),
    jo(() => window.removeEventListener("message", n));
}
async function Te(n, e = {}) {
  const t = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(e),
    },
    i = "cc-hud";
  try {
    return await (await fetch(`https://${i}/${n}`, t)).json();
  } catch {}
}
function us(n) {
  let e = {};
  for (const [t, i] of Object.entries(n)) {
    let l = ((c) => {
      var h = c,
        { icon: o, isShowing: r, name: f, progressValue: a } = h,
        s = Hi(h, ["icon", "isShowing", "name", "progressValue"]);
      return s;
    })(i);
    e[t] = l;
  }
  return e;
}
function fs(n) {
  let e = {};
  for (const [t, i] of Object.entries(n)) {
    let l = ((a) => {
      var s = a,
        { currentEffect: o, editableColors: r } = s,
        f = Hi(s, ["currentEffect", "editableColors"]);
      return f;
    })(i);
    e[t] = l;
  }
  return e;
}
function cs() {
  const n = rt(G),
    e = rt(ae),
    t = rt(xn),
    i = us(n.icons),
    l = fs(e.icons);
  Te("saveUISettings", { icons: i, layout: t, colors: l });
}
async function gs() {
  const n = rt(G),
    e = rt(ae),
    t = rt(xn),
    i = rt(zt);
  localStorage.setItem(
    el,
    JSON.stringify(
      Pt(cn({}, e.icons), { globalColorSettings: e.globalColorSettings })
    )
  ),
    localStorage.setItem(
      xi,
      JSON.stringify(
        Pt(cn({}, n.icons), {
          globalIconSettings: n.globalIconSettings,
          dynamicIcons: n.dynamicIcons,
        })
      )
    ),
    localStorage.setItem($i, JSON.stringify(t)),
    localStorage.setItem(Ko, JSON.stringify({ profiles: i }));
}
const yn = !1,
  ds = () => {
    let n = localStorage.getItem(Ki),
      e = {};
    n && (e = JSON.parse(n));
    function t(s, c) {
      return e && e[s] != null ? e[s] : c;
    }
    function i() {
      return {
        show: yn,
        isRestarting: !1,
        adminOnly: yn,
        isAdmin: yn,
        isCineamticModeChecked: t("isCineamticModeChecked", !1),
        isCinematicNotifyChecked: t("isCinematicNotifChecked", !0),
        isCompassFollowChecked: t("isCompassFollowChecked", !0),
        isMapEnabledChecked: t("isHideMapChecked", !0),
        isListSoundsChecked: t("isListSoundsChecked", !0),
        isLowFuelAlertChecked: t("isLowFuelChecked", !0),
        isMapNotifyChecked: t("isMapNotifChecked", !0),
        isOpenMenuSoundsChecked: t("isOpenMenuSoundsChecked", !0),
        isOutCompassChecked: t("isOutCompassChecked", !0),
        isOutMapChecked: t("isOutMapChecked", !0),
        isPointerShowChecked: t("isPointerShowChecked", !0),
        isResetSoundsChecked: t("isResetSoundsChecked", !0),
        isShowCompassChecked: t("isShowCompassChecked", !0),
        isShowStreetsChecked: t("isShowStreetsChecked", !0),
        isToggleMapBordersChecked: t("isToggleMapBordersChecked", !0),
        isToggleMapShapeChecked: t("isToggleMapShapeChecked", "circle"),
      };
    }
    const l = i(),
      { subscribe: o, set: r, update: f } = qt(l);
    o((s) => {
      let c = cn({}, s);
      delete c.show,
        delete c.isAdmin,
        delete c.isRestarting,
        localStorage.setItem(Ki, JSON.stringify(c));
    });
    const a = {
      closeMenu() {
        f((s) => ((s.show = !1), s)), Te("closeMenu");
      },
      handleKeyUp(s) {
        s.key == "Escape" && (gs(), a.closeMenu());
      },
      openMenu() {
        f((s) => ((s.show = !0), s));
      },
      receiveMessage() {
        a.openMenu();
      },
      receiveAdminMessage(s) {
        f((c) => ((c.adminOnly = s.adminOnly), (c.isAdmin = s.isAdmin), c));
      },
      receiveRestartMessage() {
        f((s) => ((s.isRestarting = !1), s));
      },
      resetHudMenuSetting() {
        (e = {}),
          localStorage.removeItem(Ki),
          f(
            (s) => (
              (s = Pt(cn({}, i()), {
                show: !0,
                adminOnly: s.adminOnly,
                isAdmin: s.isAdmin,
              })),
              s
            )
          ),
          G.updateAllShowingDynamicIcons(!1);
      },
      sendMenuSettingsToClient() {
        f(
          (s) => (
            Te("updateMenuSettingsToClient", {
              isOutMapChecked: s.isOutMapChecked,
              isOutCompassChecked: s.isOutCompassChecked,
              isCompassFollowChecked: s.isCompassFollowChecked,
              isOpenMenuSoundsChecked: s.isOpenMenuSoundsChecked,
              isResetSoundsChecked: s.isResetSoundsChecked,
              isListSoundsChecked: s.isListSoundsChecked,
              isMapNotifyChecked: s.isMapNotifyChecked,
              isLowFuelAlertChecked: s.isLowFuelAlertChecked,
              isCinematicNotifyChecked: s.isCinematicNotifyChecked,
              isToggleMapShapeChecked: s.isToggleMapShapeChecked,
              isMapEnabledChecked: s.isMapEnabledChecked,
              isToggleMapBordersChecked: s.isToggleMapBordersChecked,
              isShowCompassChecked: s.isShowCompassChecked,
              isShowStreetsChecked: s.isShowStreetsChecked,
              isPointerShowChecked: s.isPointerShowChecked,
              isCineamticModeChecked: s.isCineamticModeChecked,
            }),
            s
          )
        );
      },
    };
    return (
      a.sendMenuSettingsToClient(), cn({ subscribe: o, set: r, update: f }, a)
    );
  };
var Fe = ds();
function hs(n) {
  let e, t, i, l, o, r, f, a, s, c, h, m, p, b, S, v;
  return (
    (m = new Dn({
      props: {
        icon: n[0],
        scale: n[4],
        translateX: n[5],
        translateY: n[6],
        style: "color:" + n[1],
      },
    })),
    {
      c() {
        (e = K("svg")),
          (t = K("g")),
          (i = K("circle")),
          (r = K("circle")),
          (a = K("circle")),
          (h = K("g")),
          E(m.$$.fragment),
          u(i, "fill", n[7]),
          u(i, "r", (l = n[19] + 3)),
          u(i, "cx", n[18]),
          u(i, "cy", n[18]),
          u(i, "transform", (o = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
          u(r, "fill", "transparent"),
          u(r, "stroke", n[8]),
          u(r, "stroke-dasharray", n[22]),
          u(r, "stroke-width", n[14]),
          u(r, "r", n[20]),
          u(r, "cx", n[18]),
          u(r, "cy", n[18]),
          u(r, "transform", (f = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
          N(
            r,
            "filter",
            (n[10] ? "drop-shadow(0px 0px " + n[10] + "px " + n[8] + ")" : "") +
              " " +
              ("contrast(" + n[9] + "%)")
          ),
          u(a, "stroke", n[11]),
          u(a, "fill", "transparent"),
          u(a, "stroke-dasharray", n[21]),
          u(a, "stroke-width", n[14]),
          u(a, "r", n[20]),
          u(a, "cx", n[18]),
          u(a, "cy", n[18]),
          u(a, "transform", (s = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
          N(
            a,
            "filter",
            (n[13]
              ? "drop-shadow(0px 0px " + n[13] + "px " + n[11] + ")"
              : "") +
              " " +
              ("contrast(" + n[12] + "%)")
          ),
          u(
            t,
            "transform",
            (c =
              `
    ` +
              (n[15] > 0
                ? "rotate(" + n[15] + " " + n[18] + " " + n[18] + ")"
                : "") +
              `
    ` +
              ("translate(" + n[16] + " " + n[17] + ")"))
          ),
          N(
            h,
            "filter",
            (n[3] ? "drop-shadow(0px 0px " + n[3] + "px " + n[1] + ")" : "") +
              " " +
              ("contrast(" + n[2] + "%)")
          ),
          u(e, "width", (p = n[18] * 2)),
          u(e, "height", (b = n[18] * 2)),
          u(e, "viewBox", (S = "0 0 " + n[18] * 2 + " " + n[18] * 2)),
          u(e, "overflow", "visible");
      },
      m(d, _) {
        H(d, e, _),
          g(e, t),
          g(t, i),
          g(t, r),
          g(t, a),
          g(e, h),
          F(m, h, null),
          (v = !0);
      },
      p(d, _) {
        (!v || _[0] & 128) && u(i, "fill", d[7]),
          (!v || (_[0] & 524288 && l !== (l = d[19] + 3))) && u(i, "r", l),
          (!v || _[0] & 262144) && u(i, "cx", d[18]),
          (!v || _[0] & 262144) && u(i, "cy", d[18]),
          (!v ||
            (_[0] & 262144 &&
              o !== (o = "rotate(-90, " + d[18] + ", " + d[18] + ")"))) &&
            u(i, "transform", o),
          (!v || _[0] & 256) && u(r, "stroke", d[8]),
          (!v || _[0] & 4194304) && u(r, "stroke-dasharray", d[22]),
          (!v || _[0] & 16384) && u(r, "stroke-width", d[14]),
          (!v || _[0] & 1048576) && u(r, "r", d[20]),
          (!v || _[0] & 262144) && u(r, "cx", d[18]),
          (!v || _[0] & 262144) && u(r, "cy", d[18]),
          (!v ||
            (_[0] & 262144 &&
              f !== (f = "rotate(-90, " + d[18] + ", " + d[18] + ")"))) &&
            u(r, "transform", f),
          (!v || _[0] & 1792) &&
            N(
              r,
              "filter",
              (d[10]
                ? "drop-shadow(0px 0px " + d[10] + "px " + d[8] + ")"
                : "") +
                " " +
                ("contrast(" + d[9] + "%)")
            ),
          (!v || _[0] & 2048) && u(a, "stroke", d[11]),
          (!v || _[0] & 2097152) && u(a, "stroke-dasharray", d[21]),
          (!v || _[0] & 16384) && u(a, "stroke-width", d[14]),
          (!v || _[0] & 1048576) && u(a, "r", d[20]),
          (!v || _[0] & 262144) && u(a, "cx", d[18]),
          (!v || _[0] & 262144) && u(a, "cy", d[18]),
          (!v ||
            (_[0] & 262144 &&
              s !== (s = "rotate(-90, " + d[18] + ", " + d[18] + ")"))) &&
            u(a, "transform", s),
          (!v || _[0] & 14336) &&
            N(
              a,
              "filter",
              (d[13]
                ? "drop-shadow(0px 0px " + d[13] + "px " + d[11] + ")"
                : "") +
                " " +
                ("contrast(" + d[12] + "%)")
            ),
          (!v ||
            (_[0] & 491520 &&
              c !==
                (c =
                  `
    ` +
                  (d[15] > 0
                    ? "rotate(" + d[15] + " " + d[18] + " " + d[18] + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + d[16] + " " + d[17] + ")")))) &&
            u(t, "transform", c);
        const A = {};
        _[0] & 1 && (A.icon = d[0]),
          _[0] & 16 && (A.scale = d[4]),
          _[0] & 32 && (A.translateX = d[5]),
          _[0] & 64 && (A.translateY = d[6]),
          _[0] & 2 && (A.style = "color:" + d[1]),
          m.$set(A),
          (!v || _[0] & 14) &&
            N(
              h,
              "filter",
              (d[3] ? "drop-shadow(0px 0px " + d[3] + "px " + d[1] + ")" : "") +
                " " +
                ("contrast(" + d[2] + "%)")
            ),
          (!v || (_[0] & 262144 && p !== (p = d[18] * 2))) && u(e, "width", p),
          (!v || (_[0] & 262144 && b !== (b = d[18] * 2))) && u(e, "height", b),
          (!v ||
            (_[0] & 262144 &&
              S !== (S = "0 0 " + d[18] * 2 + " " + d[18] * 2))) &&
            u(e, "viewBox", S);
      },
      i(d) {
        v || (w(m.$$.fragment, d), (v = !0));
      },
      o(d) {
        C(m.$$.fragment, d), (v = !1);
      },
      d(d) {
        d && M(e), O(m);
      },
    }
  );
}
function ms(n, e, t) {
  let i,
    { displayOutline: l = !0 } = e,
    { height: o = 50 } = e,
    { icon: r = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: a = 100 } = e,
    { iconDropShadowAmount: s = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: h = 0.45 } = e,
    { iconTranslateX: m = 0 } = e,
    { iconTranslateY: p = 0 } = e,
    { innerColor: b = "#212121" } = e,
    { name: S = "" } = e,
    { outlineColor: v = "red" } = e,
    { outlineContrast: d = 100 } = e,
    { outlineDropShadowAmount: _ = 0 } = e,
    { progressColor: A = "red" } = e,
    { progressContrast: j = 100 } = e,
    { progressDropShadowAmount: le = 0 } = e,
    { progressValue: J = 100 } = e,
    { ringSize: B = 4 } = e,
    { rotateDegree: Q = 0 } = e,
    { translateX: oe = 0 } = e,
    { translateY: z = 0 } = e,
    { width: re = 50 } = e,
    { dashes: W = 8 } = e,
    { gap: L = 4 } = e,
    { borderGap: te = 0.8 } = e,
    I = 25;
  const ue = st(J, { duration: 600, easing: Nt });
  ve(n, ue, (ne) => t(34, (i = ne)));
  let ee = I - B / 2,
    T = ee * 2 * Math.PI,
    fe = ee * te,
    q = T * te,
    Y = "",
    ke = "";
  function me(ne, P, he) {
    let Le = q - ((100 - ne) / 100) * q,
      gn = 0,
      ie = `0 ${Math.floor(he / 2)}`,
      wn = (q - P * he) / P;
    if (Le < he) return `0 ${q}`;
    for (; gn <= Le; ) {
      if (gn + wn >= Le) {
        let ln = Le - gn;
        if (ln < 0.1) break;
        return (ie += ` ${ln} ${q}`), ie;
      }
      (ie += ` ${wn} ${he}`), (gn += wn + he);
    }
    let ye = ie.lastIndexOf(" ");
    return (ie = ie.substring(0, ye)), (ie += " " + q), ie;
  }
  return (
    (n.$$set = (ne) => {
      "displayOutline" in ne && t(24, (l = ne.displayOutline)),
        "height" in ne && t(25, (o = ne.height)),
        "icon" in ne && t(0, (r = ne.icon)),
        "iconColor" in ne && t(1, (f = ne.iconColor)),
        "iconContrast" in ne && t(2, (a = ne.iconContrast)),
        "iconDropShadowAmount" in ne && t(3, (s = ne.iconDropShadowAmount)),
        "iconRotateDegree" in ne && t(26, (c = ne.iconRotateDegree)),
        "iconScaling" in ne && t(4, (h = ne.iconScaling)),
        "iconTranslateX" in ne && t(5, (m = ne.iconTranslateX)),
        "iconTranslateY" in ne && t(6, (p = ne.iconTranslateY)),
        "innerColor" in ne && t(7, (b = ne.innerColor)),
        "name" in ne && t(27, (S = ne.name)),
        "outlineColor" in ne && t(8, (v = ne.outlineColor)),
        "outlineContrast" in ne && t(9, (d = ne.outlineContrast)),
        "outlineDropShadowAmount" in ne &&
          t(10, (_ = ne.outlineDropShadowAmount)),
        "progressColor" in ne && t(11, (A = ne.progressColor)),
        "progressContrast" in ne && t(12, (j = ne.progressContrast)),
        "progressDropShadowAmount" in ne &&
          t(13, (le = ne.progressDropShadowAmount)),
        "progressValue" in ne && t(28, (J = ne.progressValue)),
        "ringSize" in ne && t(14, (B = ne.ringSize)),
        "rotateDegree" in ne && t(15, (Q = ne.rotateDegree)),
        "translateX" in ne && t(16, (oe = ne.translateX)),
        "translateY" in ne && t(17, (z = ne.translateY)),
        "width" in ne && t(29, (re = ne.width)),
        "dashes" in ne && t(30, (W = ne.dashes)),
        "gap" in ne && t(31, (L = ne.gap)),
        "borderGap" in ne && t(32, (te = ne.borderGap));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 268435456 && ue.set(J),
        n.$$.dirty[0] & 570425344 && t(18, (I = o > re ? o / 2 : re / 2)),
        (n.$$.dirty[0] & 1074544640) | (n.$$.dirty[1] & 15) &&
          (t(19, (ee = I - B / 2)),
          t(33, (T = ee * 2 * Math.PI)),
          t(20, (fe = ee * te)),
          (q = T * te),
          t(21, (Y = me(i, W, L))),
          t(22, (ke = me(100, W, L))));
    }),
    [
      r,
      f,
      a,
      s,
      h,
      m,
      p,
      b,
      v,
      d,
      _,
      A,
      j,
      le,
      B,
      Q,
      oe,
      z,
      I,
      ee,
      fe,
      Y,
      ke,
      ue,
      l,
      o,
      c,
      S,
      J,
      re,
      W,
      L,
      te,
      T,
      i,
    ]
  );
}
class _s extends be {
  constructor(e) {
    super();
    we(
      this,
      e,
      ms,
      hs,
      Se,
      {
        displayOutline: 24,
        height: 25,
        icon: 0,
        iconColor: 1,
        iconContrast: 2,
        iconDropShadowAmount: 3,
        iconRotateDegree: 26,
        iconScaling: 4,
        iconTranslateX: 5,
        iconTranslateY: 6,
        innerColor: 7,
        name: 27,
        outlineColor: 8,
        outlineContrast: 9,
        outlineDropShadowAmount: 10,
        progressColor: 11,
        progressContrast: 12,
        progressDropShadowAmount: 13,
        progressValue: 28,
        ringSize: 14,
        rotateDegree: 15,
        translateX: 16,
        translateY: 17,
        width: 29,
        dashes: 30,
        gap: 31,
        borderGap: 32,
      },
      null,
      [-1, -1]
    );
  }
}
function Cl(n) {
  let e, t, i, l;
  return {
    c() {
      (e = K("circle")),
        u(e, "fill", "transparent"),
        u(e, "stroke", n[9]),
        u(e, "stroke-dashoffset", (t = 0)),
        u(e, "stroke-dasharray", (i = n[21] + " " + n[21])),
        u(e, "stroke-width", n[15]),
        u(e, "r", n[23]),
        u(e, "cx", n[19]),
        u(e, "cy", n[19]),
        u(e, "transform", (l = "rotate(-90, " + n[19] + ", " + n[19] + ")")),
        N(
          e,
          "filter",
          (n[11] ? "drop-shadow(0px 0px " + n[11] + "px " + n[9] + ")" : "") +
            " " +
            ("contrast(" + n[10] + "%)")
        );
    },
    m(o, r) {
      H(o, e, r);
    },
    p(o, r) {
      r[0] & 512 && u(e, "stroke", o[9]),
        r[0] & 2097152 &&
          i !== (i = o[21] + " " + o[21]) &&
          u(e, "stroke-dasharray", i),
        r[0] & 32768 && u(e, "stroke-width", o[15]),
        r[0] & 8388608 && u(e, "r", o[23]),
        r[0] & 524288 && u(e, "cx", o[19]),
        r[0] & 524288 && u(e, "cy", o[19]),
        r[0] & 524288 &&
          l !== (l = "rotate(-90, " + o[19] + ", " + o[19] + ")") &&
          u(e, "transform", l),
        r[0] & 3584 &&
          N(
            e,
            "filter",
            (o[11] ? "drop-shadow(0px 0px " + o[11] + "px " + o[9] + ")" : "") +
              " " +
              ("contrast(" + o[10] + "%)")
          );
    },
    d(o) {
      o && M(e);
    },
  };
}
function ps(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h,
    m,
    p,
    b,
    S,
    v = n[0] && Cl(n);
  return (
    (h = new Dn({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = K("svg")),
          (t = K("g")),
          (i = K("circle")),
          v && v.c(),
          (r = K("circle")),
          (c = K("g")),
          E(h.$$.fragment),
          u(i, "fill", n[8]),
          u(i, "r", (l = n[20] + 1)),
          u(i, "cx", n[19]),
          u(i, "cy", n[19]),
          u(i, "transform", (o = "rotate(-90, " + n[19] + ", " + n[19] + ")")),
          u(r, "stroke", n[12]),
          u(r, "fill", "transparent"),
          u(r, "stroke-dashoffset", n[22]),
          u(r, "stroke-dasharray", (f = n[21] + " " + n[21])),
          u(r, "stroke-width", n[15]),
          u(r, "r", n[23]),
          u(r, "cx", n[19]),
          u(r, "cy", n[19]),
          u(r, "transform", (a = "rotate(-90, " + n[19] + ", " + n[19] + ")")),
          N(
            r,
            "filter",
            (n[14]
              ? "drop-shadow(0px 0px " + n[14] + "px " + n[12] + ")"
              : "") +
              " " +
              ("contrast(" + n[13] + "%)")
          ),
          u(
            t,
            "transform",
            (s =
              `
    ` +
              (n[16] > 0
                ? "rotate(" + n[16] + " " + n[19] + " " + n[19] + ")"
                : "") +
              `
    ` +
              ("translate(" + n[17] + " " + n[18] + ")"))
          ),
          N(
            c,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          u(e, "width", (m = n[19] * 2)),
          u(e, "height", (p = n[19] * 2)),
          u(e, "viewBox", (b = "0 0 " + n[19] * 2 + " " + n[19] * 2)),
          u(e, "overflow", "visible");
      },
      m(d, _) {
        H(d, e, _),
          g(e, t),
          g(t, i),
          v && v.m(t, null),
          g(t, r),
          g(e, c),
          F(h, c, null),
          (S = !0);
      },
      p(d, _) {
        (!S || _[0] & 256) && u(i, "fill", d[8]),
          (!S || (_[0] & 1048576 && l !== (l = d[20] + 1))) && u(i, "r", l),
          (!S || _[0] & 524288) && u(i, "cx", d[19]),
          (!S || _[0] & 524288) && u(i, "cy", d[19]),
          (!S ||
            (_[0] & 524288 &&
              o !== (o = "rotate(-90, " + d[19] + ", " + d[19] + ")"))) &&
            u(i, "transform", o),
          d[0]
            ? v
              ? v.p(d, _)
              : ((v = Cl(d)), v.c(), v.m(t, r))
            : v && (v.d(1), (v = null)),
          (!S || _[0] & 4096) && u(r, "stroke", d[12]),
          (!S || _[0] & 4194304) && u(r, "stroke-dashoffset", d[22]),
          (!S || (_[0] & 2097152 && f !== (f = d[21] + " " + d[21]))) &&
            u(r, "stroke-dasharray", f),
          (!S || _[0] & 32768) && u(r, "stroke-width", d[15]),
          (!S || _[0] & 8388608) && u(r, "r", d[23]),
          (!S || _[0] & 524288) && u(r, "cx", d[19]),
          (!S || _[0] & 524288) && u(r, "cy", d[19]),
          (!S ||
            (_[0] & 524288 &&
              a !== (a = "rotate(-90, " + d[19] + ", " + d[19] + ")"))) &&
            u(r, "transform", a),
          (!S || _[0] & 28672) &&
            N(
              r,
              "filter",
              (d[14]
                ? "drop-shadow(0px 0px " + d[14] + "px " + d[12] + ")"
                : "") +
                " " +
                ("contrast(" + d[13] + "%)")
            ),
          (!S ||
            (_[0] & 983040 &&
              s !==
                (s =
                  `
    ` +
                  (d[16] > 0
                    ? "rotate(" + d[16] + " " + d[19] + " " + d[19] + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + d[17] + " " + d[18] + ")")))) &&
            u(t, "transform", s);
        const A = {};
        _[0] & 2 && (A.icon = d[1]),
          _[0] & 32 && (A.scale = d[5]),
          _[0] & 64 && (A.translateX = d[6]),
          _[0] & 128 && (A.translateY = d[7]),
          _[0] & 4 && (A.style = "color:" + d[2]),
          h.$set(A),
          (!S || _[0] & 28) &&
            N(
              c,
              "filter",
              (d[4] ? "drop-shadow(0px 0px " + d[4] + "px " + d[2] + ")" : "") +
                " " +
                ("contrast(" + d[3] + "%)")
            ),
          (!S || (_[0] & 524288 && m !== (m = d[19] * 2))) && u(e, "width", m),
          (!S || (_[0] & 524288 && p !== (p = d[19] * 2))) && u(e, "height", p),
          (!S ||
            (_[0] & 524288 &&
              b !== (b = "0 0 " + d[19] * 2 + " " + d[19] * 2))) &&
            u(e, "viewBox", b);
      },
      i(d) {
        S || (w(h.$$.fragment, d), (S = !0));
      },
      o(d) {
        C(h.$$.fragment, d), (S = !1);
      },
      d(d) {
        d && M(e), v && v.d(), O(h);
      },
    }
  );
}
function bs(n, e, t) {
  let i,
    { displayOutline: l = !0 } = e,
    { height: o = 50 } = e,
    { icon: r = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: a = 100 } = e,
    { iconDropShadowAmount: s = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: h = 0.45 } = e,
    { iconTranslateX: m = 0 } = e,
    { iconTranslateY: p = 0 } = e,
    { innerColor: b = "#212121" } = e,
    { name: S = "" } = e,
    { outlineColor: v = "red" } = e,
    { outlineContrast: d = 100 } = e,
    { outlineDropShadowAmount: _ = 0 } = e,
    { progressColor: A = "red" } = e,
    { progressContrast: j = 100 } = e,
    { progressDropShadowAmount: le = 0 } = e,
    { progressValue: J = 100 } = e,
    { ringSize: B = 4 } = e,
    { rotateDegree: Q = 0 } = e,
    { translateX: oe = 0 } = e,
    { translateY: z = 0 } = e,
    { width: re = 50 } = e,
    { borderGap: W = 0.85 } = e,
    L = 25;
  const te = st(J, { duration: 600, easing: Nt });
  ve(n, te, (q) => t(32, (i = q)));
  let I = L - B / 2,
    ue = I * 2 * Math.PI,
    ee = ue - (i / 100) * ue,
    T = I * W,
    fe = ue * W;
  return (
    (n.$$set = (q) => {
      "displayOutline" in q && t(0, (l = q.displayOutline)),
        "height" in q && t(25, (o = q.height)),
        "icon" in q && t(1, (r = q.icon)),
        "iconColor" in q && t(2, (f = q.iconColor)),
        "iconContrast" in q && t(3, (a = q.iconContrast)),
        "iconDropShadowAmount" in q && t(4, (s = q.iconDropShadowAmount)),
        "iconRotateDegree" in q && t(26, (c = q.iconRotateDegree)),
        "iconScaling" in q && t(5, (h = q.iconScaling)),
        "iconTranslateX" in q && t(6, (m = q.iconTranslateX)),
        "iconTranslateY" in q && t(7, (p = q.iconTranslateY)),
        "innerColor" in q && t(8, (b = q.innerColor)),
        "name" in q && t(27, (S = q.name)),
        "outlineColor" in q && t(9, (v = q.outlineColor)),
        "outlineContrast" in q && t(10, (d = q.outlineContrast)),
        "outlineDropShadowAmount" in q &&
          t(11, (_ = q.outlineDropShadowAmount)),
        "progressColor" in q && t(12, (A = q.progressColor)),
        "progressContrast" in q && t(13, (j = q.progressContrast)),
        "progressDropShadowAmount" in q &&
          t(14, (le = q.progressDropShadowAmount)),
        "progressValue" in q && t(28, (J = q.progressValue)),
        "ringSize" in q && t(15, (B = q.ringSize)),
        "rotateDegree" in q && t(16, (Q = q.rotateDegree)),
        "translateX" in q && t(17, (oe = q.translateX)),
        "translateY" in q && t(18, (z = q.translateY)),
        "width" in q && t(29, (re = q.width)),
        "borderGap" in q && t(30, (W = q.borderGap));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 268435456 && te.set(J),
        n.$$.dirty[0] & 570425344 && t(19, (L = o > re ? o / 2 : re / 2)),
        (n.$$.dirty[0] & 1075347456) | (n.$$.dirty[1] & 1) &&
          (t(20, (I = L - B / 2)),
          t(31, (ue = I * 2 * Math.PI)),
          t(23, (T = I * W)),
          t(21, (fe = ue * W))),
        (n.$$.dirty[0] & 2097152) | (n.$$.dirty[1] & 2) &&
          t(22, (ee = fe - (i / 100) * fe));
    }),
    [
      l,
      r,
      f,
      a,
      s,
      h,
      m,
      p,
      b,
      v,
      d,
      _,
      A,
      j,
      le,
      B,
      Q,
      oe,
      z,
      L,
      I,
      fe,
      ee,
      T,
      te,
      o,
      c,
      S,
      J,
      re,
      W,
      ue,
      i,
    ]
  );
}
class ws extends be {
  constructor(e) {
    super();
    we(
      this,
      e,
      bs,
      ps,
      Se,
      {
        displayOutline: 0,
        height: 25,
        icon: 1,
        iconColor: 2,
        iconContrast: 3,
        iconDropShadowAmount: 4,
        iconRotateDegree: 26,
        iconScaling: 5,
        iconTranslateX: 6,
        iconTranslateY: 7,
        innerColor: 8,
        name: 27,
        outlineColor: 9,
        outlineContrast: 10,
        outlineDropShadowAmount: 11,
        progressColor: 12,
        progressContrast: 13,
        progressDropShadowAmount: 14,
        progressValue: 28,
        ringSize: 15,
        rotateDegree: 16,
        translateX: 17,
        translateY: 18,
        width: 29,
        borderGap: 30,
      },
      null,
      [-1, -1]
    );
  }
}
function Ss(n) {
  let e, t, i, l, o, r, f, a, s, c, h, m, p, b, S, v;
  return (
    (p = new Dn({
      props: {
        icon: n[1],
        scale: n[6],
        translateX: n[7],
        translateY: n[8],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = K("svg")),
          (t = K("g")),
          (i = K("rect")),
          (l = K("rect")),
          (a = K("rect")),
          (m = K("g")),
          E(p.$$.fragment),
          u(i, "fill", n[9]),
          u(i, "stroke", "transparent"),
          u(i, "shape-rendering", "geometricPrecision"),
          u(i, "width", n[20]),
          u(i, "height", n[0]),
          N(
            i,
            "filter",
            (n[12]
              ? "drop-shadow(0px 0px " + n[12] + "px " + n[10] + ")"
              : "") +
              " " +
              ("contrast(" + n[11] + "%)")
          ),
          u(l, "stroke", n[10]),
          u(l, "fill", "transparent"),
          u(l, "x", (o = n[20] * ((1 - n[21]) / 2))),
          u(l, "y", (r = n[0] * ((1 - n[21]) / 2))),
          u(l, "width", n[22]),
          u(l, "height", n[23]),
          u(l, "stroke-width", n[16]),
          u(l, "stroke-dasharray", (f = n[24] + " " + n[24])),
          u(l, "stroke-dashoffset", 0),
          u(l, "shape-rendering", "geometricPrecision"),
          u(a, "stroke", n[13]),
          u(a, "fill", "transparent"),
          u(a, "x", (s = n[20] * ((1 - n[21]) / 2))),
          u(a, "y", (c = n[0] * ((1 - n[21]) / 2))),
          u(a, "width", n[22]),
          u(a, "height", n[23]),
          u(a, "stroke-width", n[16]),
          u(a, "stroke-dasharray", (h = n[24] + " " + n[24])),
          u(a, "stroke-dashoffset", n[25]),
          N(
            a,
            "filter",
            (n[15]
              ? "drop-shadow(0px 0px " + n[15] + "px " + n[13] + ")"
              : "") +
              " " +
              ("contrast(" + n[14] + "%)")
          ),
          N(
            m,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          u(
            m,
            "transform",
            (b =
              n[5] > 0
                ? "rotate(" + n[5] + " " + n[20] / 2 + " " + n[0] / 2 + ")"
                : "")
          ),
          u(e, "width", n[20]),
          u(e, "height", n[0]),
          u(
            e,
            "transform",
            (S =
              `
    ` +
              (n[17] > 0 ? "rotate(" + n[17] + " " + 0 + " " + 0 + ")" : "") +
              `
    ` +
              ("translate(" + n[18] + " " + n[19] + ")"))
          );
      },
      m(d, _) {
        H(d, e, _),
          g(e, t),
          g(t, i),
          g(t, l),
          g(t, a),
          g(e, m),
          F(p, m, null),
          (v = !0);
      },
      p(d, [_]) {
        (!v || _ & 512) && u(i, "fill", d[9]),
          (!v || _ & 1048576) && u(i, "width", d[20]),
          (!v || _ & 1) && u(i, "height", d[0]),
          (!v || _ & 7168) &&
            N(
              i,
              "filter",
              (d[12]
                ? "drop-shadow(0px 0px " + d[12] + "px " + d[10] + ")"
                : "") +
                " " +
                ("contrast(" + d[11] + "%)")
            ),
          (!v || _ & 1024) && u(l, "stroke", d[10]),
          (!v || (_ & 3145728 && o !== (o = d[20] * ((1 - d[21]) / 2)))) &&
            u(l, "x", o),
          (!v || (_ & 2097153 && r !== (r = d[0] * ((1 - d[21]) / 2)))) &&
            u(l, "y", r),
          (!v || _ & 4194304) && u(l, "width", d[22]),
          (!v || _ & 8388608) && u(l, "height", d[23]),
          (!v || _ & 65536) && u(l, "stroke-width", d[16]),
          (!v || (_ & 16777216 && f !== (f = d[24] + " " + d[24]))) &&
            u(l, "stroke-dasharray", f),
          (!v || _ & 8192) && u(a, "stroke", d[13]),
          (!v || (_ & 3145728 && s !== (s = d[20] * ((1 - d[21]) / 2)))) &&
            u(a, "x", s),
          (!v || (_ & 2097153 && c !== (c = d[0] * ((1 - d[21]) / 2)))) &&
            u(a, "y", c),
          (!v || _ & 4194304) && u(a, "width", d[22]),
          (!v || _ & 8388608) && u(a, "height", d[23]),
          (!v || _ & 65536) && u(a, "stroke-width", d[16]),
          (!v || (_ & 16777216 && h !== (h = d[24] + " " + d[24]))) &&
            u(a, "stroke-dasharray", h),
          (!v || _ & 33554432) && u(a, "stroke-dashoffset", d[25]),
          (!v || _ & 57344) &&
            N(
              a,
              "filter",
              (d[15]
                ? "drop-shadow(0px 0px " + d[15] + "px " + d[13] + ")"
                : "") +
                " " +
                ("contrast(" + d[14] + "%)")
            );
        const A = {};
        _ & 2 && (A.icon = d[1]),
          _ & 64 && (A.scale = d[6]),
          _ & 128 && (A.translateX = d[7]),
          _ & 256 && (A.translateY = d[8]),
          _ & 4 && (A.style = "color:" + d[2]),
          p.$set(A),
          (!v || _ & 28) &&
            N(
              m,
              "filter",
              (d[4] ? "drop-shadow(0px 0px " + d[4] + "px " + d[2] + ")" : "") +
                " " +
                ("contrast(" + d[3] + "%)")
            ),
          (!v ||
            (_ & 1048609 &&
              b !==
                (b =
                  d[5] > 0
                    ? "rotate(" + d[5] + " " + d[20] / 2 + " " + d[0] / 2 + ")"
                    : ""))) &&
            u(m, "transform", b),
          (!v || _ & 1048576) && u(e, "width", d[20]),
          (!v || _ & 1) && u(e, "height", d[0]),
          (!v ||
            (_ & 917504 &&
              S !==
                (S =
                  `
    ` +
                  (d[17] > 0
                    ? "rotate(" + d[17] + " " + 0 + " " + 0 + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + d[18] + " " + d[19] + ")")))) &&
            u(e, "transform", S);
      },
      i(d) {
        v || (w(p.$$.fragment, d), (v = !0));
      },
      o(d) {
        C(p.$$.fragment, d), (v = !1);
      },
      d(d) {
        d && M(e), O(p);
      },
    }
  );
}
function ks(n, e, t) {
  let i,
    { displayOutline: l = !0 } = e,
    { height: o = 50 } = e,
    { icon: r = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: a = 100 } = e,
    { iconDropShadowAmount: s = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: h = 0.45 } = e,
    { iconTranslateX: m = 0 } = e,
    { iconTranslateY: p = 0 } = e,
    { innerColor: b = "#212121" } = e,
    { name: S = "" } = e,
    { outlineColor: v = "red" } = e,
    { outlineContrast: d = 100 } = e,
    { outlineDropShadowAmount: _ = 0 } = e,
    { progressColor: A = "red" } = e,
    { progressContrast: j = 100 } = e,
    { progressDropShadowAmount: le = 0 } = e,
    { progressValue: J = 100 } = e,
    { ringSize: B = 4 } = e,
    { rotateDegree: Q = 0 } = e,
    { translateX: oe = 0 } = e,
    { translateY: z = 0 } = e,
    { width: re = 50 } = e,
    { borderGap: W = 0.75 } = e,
    L = 10,
    te = re * W,
    I = o * W,
    ue = (te + I) * 2;
  const ee = st(J, { duration: 600, easing: Nt });
  return (
    ve(n, ee, (T) => t(30, (i = T))),
    (n.$$set = (T) => {
      "displayOutline" in T && t(27, (l = T.displayOutline)),
        "height" in T && t(0, (o = T.height)),
        "icon" in T && t(1, (r = T.icon)),
        "iconColor" in T && t(2, (f = T.iconColor)),
        "iconContrast" in T && t(3, (a = T.iconContrast)),
        "iconDropShadowAmount" in T && t(4, (s = T.iconDropShadowAmount)),
        "iconRotateDegree" in T && t(5, (c = T.iconRotateDegree)),
        "iconScaling" in T && t(6, (h = T.iconScaling)),
        "iconTranslateX" in T && t(7, (m = T.iconTranslateX)),
        "iconTranslateY" in T && t(8, (p = T.iconTranslateY)),
        "innerColor" in T && t(9, (b = T.innerColor)),
        "name" in T && t(28, (S = T.name)),
        "outlineColor" in T && t(10, (v = T.outlineColor)),
        "outlineContrast" in T && t(11, (d = T.outlineContrast)),
        "outlineDropShadowAmount" in T &&
          t(12, (_ = T.outlineDropShadowAmount)),
        "progressColor" in T && t(13, (A = T.progressColor)),
        "progressContrast" in T && t(14, (j = T.progressContrast)),
        "progressDropShadowAmount" in T &&
          t(15, (le = T.progressDropShadowAmount)),
        "progressValue" in T && t(29, (J = T.progressValue)),
        "ringSize" in T && t(16, (B = T.ringSize)),
        "rotateDegree" in T && t(17, (Q = T.rotateDegree)),
        "translateX" in T && t(18, (oe = T.translateX)),
        "translateY" in T && t(19, (z = T.translateY)),
        "width" in T && t(20, (re = T.width)),
        "borderGap" in T && t(21, (W = T.borderGap));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 536870912 && ee.set(J),
        n.$$.dirty & 3145728 && t(22, (te = re * W)),
        n.$$.dirty & 2097153 && t(23, (I = o * W)),
        n.$$.dirty & 12582912 && t(24, (ue = (te + I) * 2)),
        n.$$.dirty & 1090519040 && t(25, (L = ue - (i / 100) * ue));
    }),
    [
      o,
      r,
      f,
      a,
      s,
      c,
      h,
      m,
      p,
      b,
      v,
      d,
      _,
      A,
      j,
      le,
      B,
      Q,
      oe,
      z,
      re,
      W,
      te,
      I,
      ue,
      L,
      ee,
      l,
      S,
      J,
      i,
    ]
  );
}
class Cs extends be {
  constructor(e) {
    super();
    we(this, e, ks, Ss, Se, {
      displayOutline: 27,
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconRotateDegree: 5,
      iconScaling: 6,
      iconTranslateX: 7,
      iconTranslateY: 8,
      innerColor: 9,
      name: 28,
      outlineColor: 10,
      outlineContrast: 11,
      outlineDropShadowAmount: 12,
      progressColor: 13,
      progressContrast: 14,
      progressDropShadowAmount: 15,
      progressValue: 29,
      ringSize: 16,
      rotateDegree: 17,
      translateX: 18,
      translateY: 19,
      width: 20,
      borderGap: 21,
    });
  }
}
function vs(n) {
  let e, t, i, l, o, r, f, a, s, c, h, m, p, b, S, v;
  return (
    (p = new Dn({
      props: {
        icon: n[1],
        scale: n[6],
        translateX: n[7],
        translateY: n[8],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = K("svg")),
          (t = K("g")),
          (i = K("rect")),
          (l = K("rect")),
          (a = K("rect")),
          (m = K("g")),
          E(p.$$.fragment),
          u(i, "fill", n[9]),
          u(i, "stroke", "transparent"),
          u(i, "shape-rendering", "geometricPrecision"),
          u(i, "width", n[20]),
          u(i, "height", n[0]),
          N(
            i,
            "filter",
            (n[12]
              ? "drop-shadow(0px 0px " + n[12] + "px " + n[10] + ")"
              : "") +
              " " +
              ("contrast(" + n[11] + "%)")
          ),
          u(l, "stroke", n[10]),
          u(l, "fill", "transparent"),
          u(l, "x", (o = n[20] * ((1 - n[21]) / 2))),
          u(l, "y", (r = n[0] * ((1 - n[21]) / 2))),
          u(l, "width", n[22]),
          u(l, "height", n[23]),
          u(l, "stroke-width", n[16]),
          u(l, "stroke-dasharray", (f = n[24] + " " + n[24])),
          u(l, "stroke-dashoffset", 0),
          u(l, "shape-rendering", "geometricPrecision"),
          u(a, "stroke", n[13]),
          u(a, "fill", "transparent"),
          u(a, "x", (s = n[20] * ((1 - n[21]) / 2))),
          u(a, "y", (c = n[0] * ((1 - n[21]) / 2))),
          u(a, "width", n[22]),
          u(a, "height", n[23]),
          u(a, "stroke-width", n[16]),
          u(a, "stroke-dasharray", (h = n[24] + " " + n[24])),
          u(a, "stroke-dashoffset", n[25]),
          N(
            a,
            "filter",
            (n[15]
              ? "drop-shadow(0px 0px " + n[15] + "px " + n[13] + ")"
              : "") +
              " " +
              ("contrast(" + n[14] + "%)")
          ),
          N(
            m,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          u(
            m,
            "transform",
            (b =
              n[5] > 0
                ? "rotate(" + n[5] + " " + n[20] / 2 + " " + n[0] / 2 + ")"
                : "")
          ),
          u(e, "width", n[20]),
          u(e, "height", n[0]),
          u(
            e,
            "transform",
            (S =
              `
    ` +
              (n[17] > 0 ? "rotate(" + n[17] + " " + 0 + " " + 0 + ")" : "") +
              `
    ` +
              ("translate(" + n[18] + " " + n[19] + ")"))
          );
      },
      m(d, _) {
        H(d, e, _),
          g(e, t),
          g(t, i),
          g(t, l),
          g(t, a),
          g(e, m),
          F(p, m, null),
          (v = !0);
      },
      p(d, [_]) {
        (!v || _ & 512) && u(i, "fill", d[9]),
          (!v || _ & 1048576) && u(i, "width", d[20]),
          (!v || _ & 1) && u(i, "height", d[0]),
          (!v || _ & 7168) &&
            N(
              i,
              "filter",
              (d[12]
                ? "drop-shadow(0px 0px " + d[12] + "px " + d[10] + ")"
                : "") +
                " " +
                ("contrast(" + d[11] + "%)")
            ),
          (!v || _ & 1024) && u(l, "stroke", d[10]),
          (!v || (_ & 3145728 && o !== (o = d[20] * ((1 - d[21]) / 2)))) &&
            u(l, "x", o),
          (!v || (_ & 2097153 && r !== (r = d[0] * ((1 - d[21]) / 2)))) &&
            u(l, "y", r),
          (!v || _ & 4194304) && u(l, "width", d[22]),
          (!v || _ & 8388608) && u(l, "height", d[23]),
          (!v || _ & 65536) && u(l, "stroke-width", d[16]),
          (!v || (_ & 16777216 && f !== (f = d[24] + " " + d[24]))) &&
            u(l, "stroke-dasharray", f),
          (!v || _ & 8192) && u(a, "stroke", d[13]),
          (!v || (_ & 3145728 && s !== (s = d[20] * ((1 - d[21]) / 2)))) &&
            u(a, "x", s),
          (!v || (_ & 2097153 && c !== (c = d[0] * ((1 - d[21]) / 2)))) &&
            u(a, "y", c),
          (!v || _ & 4194304) && u(a, "width", d[22]),
          (!v || _ & 8388608) && u(a, "height", d[23]),
          (!v || _ & 65536) && u(a, "stroke-width", d[16]),
          (!v || (_ & 16777216 && h !== (h = d[24] + " " + d[24]))) &&
            u(a, "stroke-dasharray", h),
          (!v || _ & 33554432) && u(a, "stroke-dashoffset", d[25]),
          (!v || _ & 57344) &&
            N(
              a,
              "filter",
              (d[15]
                ? "drop-shadow(0px 0px " + d[15] + "px " + d[13] + ")"
                : "") +
                " " +
                ("contrast(" + d[14] + "%)")
            );
        const A = {};
        _ & 2 && (A.icon = d[1]),
          _ & 64 && (A.scale = d[6]),
          _ & 128 && (A.translateX = d[7]),
          _ & 256 && (A.translateY = d[8]),
          _ & 4 && (A.style = "color:" + d[2]),
          p.$set(A),
          (!v || _ & 28) &&
            N(
              m,
              "filter",
              (d[4] ? "drop-shadow(0px 0px " + d[4] + "px " + d[2] + ")" : "") +
                " " +
                ("contrast(" + d[3] + "%)")
            ),
          (!v ||
            (_ & 1048609 &&
              b !==
                (b =
                  d[5] > 0
                    ? "rotate(" + d[5] + " " + d[20] / 2 + " " + d[0] / 2 + ")"
                    : ""))) &&
            u(m, "transform", b),
          (!v || _ & 1048576) && u(e, "width", d[20]),
          (!v || _ & 1) && u(e, "height", d[0]),
          (!v ||
            (_ & 917504 &&
              S !==
                (S =
                  `
    ` +
                  (d[17] > 0
                    ? "rotate(" + d[17] + " " + 0 + " " + 0 + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + d[18] + " " + d[19] + ")")))) &&
            u(e, "transform", S);
      },
      i(d) {
        v || (w(p.$$.fragment, d), (v = !0));
      },
      o(d) {
        C(p.$$.fragment, d), (v = !1);
      },
      d(d) {
        d && M(e), O(p);
      },
    }
  );
}
function As(n, e, t) {
  let i,
    { displayOutline: l = !0 } = e,
    { height: o = 50 } = e,
    { icon: r = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: a = 100 } = e,
    { iconDropShadowAmount: s = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: h = 0.45 } = e,
    { iconTranslateX: m = 0 } = e,
    { iconTranslateY: p = 0 } = e,
    { innerColor: b = "#212121" } = e,
    { name: S = "" } = e,
    { outlineColor: v = "red" } = e,
    { outlineContrast: d = 100 } = e,
    { outlineDropShadowAmount: _ = 0 } = e,
    { progressColor: A = "red" } = e,
    { progressContrast: j = 100 } = e,
    { progressDropShadowAmount: le = 0 } = e,
    { progressValue: J = 100 } = e,
    { ringSize: B = 4 } = e,
    { rotateDegree: Q = 0 } = e,
    { translateX: oe = 0 } = e,
    { translateY: z = 0 } = e,
    { width: re = 50 } = e,
    { borderGap: W = 0.75 } = e,
    L = 10,
    te = re * W,
    I = o * W,
    ue = (te + I) * 2;
  const ee = st(J, { duration: 600, easing: Nt });
  return (
    ve(n, ee, (T) => t(30, (i = T))),
    (n.$$set = (T) => {
      "displayOutline" in T && t(27, (l = T.displayOutline)),
        "height" in T && t(0, (o = T.height)),
        "icon" in T && t(1, (r = T.icon)),
        "iconColor" in T && t(2, (f = T.iconColor)),
        "iconContrast" in T && t(3, (a = T.iconContrast)),
        "iconDropShadowAmount" in T && t(4, (s = T.iconDropShadowAmount)),
        "iconRotateDegree" in T && t(5, (c = T.iconRotateDegree)),
        "iconScaling" in T && t(6, (h = T.iconScaling)),
        "iconTranslateX" in T && t(7, (m = T.iconTranslateX)),
        "iconTranslateY" in T && t(8, (p = T.iconTranslateY)),
        "innerColor" in T && t(9, (b = T.innerColor)),
        "name" in T && t(28, (S = T.name)),
        "outlineColor" in T && t(10, (v = T.outlineColor)),
        "outlineContrast" in T && t(11, (d = T.outlineContrast)),
        "outlineDropShadowAmount" in T &&
          t(12, (_ = T.outlineDropShadowAmount)),
        "progressColor" in T && t(13, (A = T.progressColor)),
        "progressContrast" in T && t(14, (j = T.progressContrast)),
        "progressDropShadowAmount" in T &&
          t(15, (le = T.progressDropShadowAmount)),
        "progressValue" in T && t(29, (J = T.progressValue)),
        "ringSize" in T && t(16, (B = T.ringSize)),
        "rotateDegree" in T && t(17, (Q = T.rotateDegree)),
        "translateX" in T && t(18, (oe = T.translateX)),
        "translateY" in T && t(19, (z = T.translateY)),
        "width" in T && t(20, (re = T.width)),
        "borderGap" in T && t(21, (W = T.borderGap));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 536870912 && ee.set(J),
        n.$$.dirty & 3145728 && t(22, (te = re * W)),
        n.$$.dirty & 2097153 && t(23, (I = o * W)),
        n.$$.dirty & 12582912 && t(24, (ue = (te + I) * 2)),
        n.$$.dirty & 1090519040 && t(25, (L = ue - (i / 100) * ue));
    }),
    [
      o,
      r,
      f,
      a,
      s,
      c,
      h,
      m,
      p,
      b,
      v,
      d,
      _,
      A,
      j,
      le,
      B,
      Q,
      oe,
      z,
      re,
      W,
      te,
      I,
      ue,
      L,
      ee,
      l,
      S,
      J,
      i,
    ]
  );
}
class ys extends be {
  constructor(e) {
    super();
    we(this, e, As, vs, Se, {
      displayOutline: 27,
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconRotateDegree: 5,
      iconScaling: 6,
      iconTranslateX: 7,
      iconTranslateY: 8,
      innerColor: 9,
      name: 28,
      outlineColor: 10,
      outlineContrast: 11,
      outlineDropShadowAmount: 12,
      progressColor: 13,
      progressContrast: 14,
      progressDropShadowAmount: 15,
      progressValue: 29,
      ringSize: 16,
      rotateDegree: 17,
      translateX: 18,
      translateY: 19,
      width: 20,
      borderGap: 21,
    });
  }
}
function Is(n) {
  let e, t, i, l, o, r, f, a, s, c, h, m, p, b, S, v, d;
  return (
    (p = new Dn({
      props: {
        icon: n[0],
        scale: n[4],
        translateX: n[5],
        translateY: n[6],
        style: "color:" + n[1],
      },
    })),
    {
      c() {
        (e = K("svg")),
          (t = K("defs")),
          (i = K("clipPath")),
          (l = K("circle")),
          (r = K("g")),
          (f = K("circle")),
          (s = K("line")),
          (m = K("g")),
          E(p.$$.fragment),
          u(l, "stroke-width", n[16]),
          u(l, "r", n[15]),
          u(l, "cx", n[15]),
          u(l, "cy", n[15]),
          u(i, "id", (o = n[7] + "-cut-out-circle")),
          u(f, "stroke", "black"),
          u(f, "fill", "transparent"),
          u(f, "stroke-width", n[14]),
          u(f, "r", (a = n[18] * 2 + n[14] / 2)),
          u(f, "cx", n[15]),
          u(f, "cy", n[15]),
          u(f, "shape-rendering", "geometricPrecision"),
          u(s, "x1", "50%"),
          u(s, "y1", "100%"),
          u(s, "x2", "50%"),
          u(s, "y2", "0%"),
          u(s, "stroke", n[8]),
          u(s, "stroke-dasharray", n[17]),
          u(s, "stroke-dashoffset", n[19]),
          u(s, "stroke-width", n[17]),
          u(s, "clip-path", (c = "url(#" + (n[7] + "-cut-out-circle") + ")")),
          u(s, "shape-rendering", "geometricPrecision"),
          N(
            s,
            "filter",
            (n[10] ? "drop-shadow(0px 0px " + n[10] + "px " + n[8] + ")" : "") +
              " " +
              ("contrast(" + n[9] + "%)")
          ),
          u(
            r,
            "transform",
            (h =
              `
    ` +
              (n[11] > 0
                ? "rotate(" + n[11] + " " + n[15] + " " + n[15] + ")"
                : "") +
              `
    ` +
              ("translate(" + n[12] + " " + n[13] + ")"))
          ),
          N(
            m,
            "filter",
            (n[3] ? "drop-shadow(0px 0px " + n[3] + "px " + n[1] + ")" : "") +
              " " +
              ("contrast(" + n[2] + "%)")
          ),
          u(e, "width", (b = n[15] * 2)),
          u(e, "height", (S = n[15] * 2)),
          u(e, "viewBox", (v = "0 0 " + n[15] * 2 + " " + n[15] * 2)),
          u(e, "overflow", "visible");
      },
      m(_, A) {
        H(_, e, A),
          g(e, t),
          g(t, i),
          g(i, l),
          g(e, r),
          g(r, f),
          g(r, s),
          g(e, m),
          F(p, m, null),
          (d = !0);
      },
      p(_, [A]) {
        (!d || A & 65536) && u(l, "stroke-width", _[16]),
          (!d || A & 32768) && u(l, "r", _[15]),
          (!d || A & 32768) && u(l, "cx", _[15]),
          (!d || A & 32768) && u(l, "cy", _[15]),
          (!d || (A & 128 && o !== (o = _[7] + "-cut-out-circle"))) &&
            u(i, "id", o),
          (!d || A & 16384) && u(f, "stroke-width", _[14]),
          (!d || (A & 278528 && a !== (a = _[18] * 2 + _[14] / 2))) &&
            u(f, "r", a),
          (!d || A & 32768) && u(f, "cx", _[15]),
          (!d || A & 32768) && u(f, "cy", _[15]),
          (!d || A & 256) && u(s, "stroke", _[8]),
          (!d || A & 131072) && u(s, "stroke-dasharray", _[17]),
          (!d || A & 524288) && u(s, "stroke-dashoffset", _[19]),
          (!d || A & 131072) && u(s, "stroke-width", _[17]),
          (!d ||
            (A & 128 &&
              c !== (c = "url(#" + (_[7] + "-cut-out-circle") + ")"))) &&
            u(s, "clip-path", c),
          (!d || A & 1792) &&
            N(
              s,
              "filter",
              (_[10]
                ? "drop-shadow(0px 0px " + _[10] + "px " + _[8] + ")"
                : "") +
                " " +
                ("contrast(" + _[9] + "%)")
            ),
          (!d ||
            (A & 47104 &&
              h !==
                (h =
                  `
    ` +
                  (_[11] > 0
                    ? "rotate(" + _[11] + " " + _[15] + " " + _[15] + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + _[12] + " " + _[13] + ")")))) &&
            u(r, "transform", h);
        const j = {};
        A & 1 && (j.icon = _[0]),
          A & 16 && (j.scale = _[4]),
          A & 32 && (j.translateX = _[5]),
          A & 64 && (j.translateY = _[6]),
          A & 2 && (j.style = "color:" + _[1]),
          p.$set(j),
          (!d || A & 14) &&
            N(
              m,
              "filter",
              (_[3] ? "drop-shadow(0px 0px " + _[3] + "px " + _[1] + ")" : "") +
                " " +
                ("contrast(" + _[2] + "%)")
            ),
          (!d || (A & 32768 && b !== (b = _[15] * 2))) && u(e, "width", b),
          (!d || (A & 32768 && S !== (S = _[15] * 2))) && u(e, "height", S),
          (!d ||
            (A & 32768 && v !== (v = "0 0 " + _[15] * 2 + " " + _[15] * 2))) &&
            u(e, "viewBox", v);
      },
      i(_) {
        d || (w(p.$$.fragment, _), (d = !0));
      },
      o(_) {
        C(p.$$.fragment, _), (d = !1);
      },
      d(_) {
        _ && M(e), O(p);
      },
    }
  );
}
function Ds(n, e, t) {
  let i,
    { height: l = 50 } = e,
    { icon: o = null } = e,
    { iconColor: r = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconScaling: s = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: h = 0 } = e,
    { name: m = "" } = e,
    { outlineColor: p = "red" } = e,
    { outlineContrast: b = 100 } = e,
    { outlineDropShadowAmount: S = 0 } = e,
    { progressColor: v = "red" } = e,
    { progressContrast: d = 100 } = e,
    { progressDropShadowAmount: _ = 0 } = e,
    { progressValue: A = 100 } = e,
    { rotateDegree: j = 0 } = e,
    { translateX: le = 0 } = e,
    { translateY: J = 0 } = e,
    { width: B = 50 } = e,
    { borderSize: Q = 3 } = e,
    oe = 25,
    z = 25,
    re = l,
    W = oe - z / 2,
    L = 0;
  const te = st(A, { duration: 600, easing: Nt });
  return (
    ve(n, te, (I) => t(27, (i = I))),
    (n.$$set = (I) => {
      "height" in I && t(21, (l = I.height)),
        "icon" in I && t(0, (o = I.icon)),
        "iconColor" in I && t(1, (r = I.iconColor)),
        "iconContrast" in I && t(2, (f = I.iconContrast)),
        "iconDropShadowAmount" in I && t(3, (a = I.iconDropShadowAmount)),
        "iconScaling" in I && t(4, (s = I.iconScaling)),
        "iconTranslateX" in I && t(5, (c = I.iconTranslateX)),
        "iconTranslateY" in I && t(6, (h = I.iconTranslateY)),
        "name" in I && t(7, (m = I.name)),
        "outlineColor" in I && t(22, (p = I.outlineColor)),
        "outlineContrast" in I && t(23, (b = I.outlineContrast)),
        "outlineDropShadowAmount" in I &&
          t(24, (S = I.outlineDropShadowAmount)),
        "progressColor" in I && t(8, (v = I.progressColor)),
        "progressContrast" in I && t(9, (d = I.progressContrast)),
        "progressDropShadowAmount" in I &&
          t(10, (_ = I.progressDropShadowAmount)),
        "progressValue" in I && t(25, (A = I.progressValue)),
        "rotateDegree" in I && t(11, (j = I.rotateDegree)),
        "translateX" in I && t(12, (le = I.translateX)),
        "translateY" in I && t(13, (J = I.translateY)),
        "width" in I && t(26, (B = I.width)),
        "borderSize" in I && t(14, (Q = I.borderSize));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 33554432 && te.set(A),
        n.$$.dirty & 69697536 &&
          (t(17, (re = l > B ? l : B)),
          t(15, (oe = re / 2)),
          t(16, (z = oe)),
          t(18, (W = oe - z / 2))),
        n.$$.dirty & 134348800 && t(19, (L = re - (i / 100) * re));
    }),
    [
      o,
      r,
      f,
      a,
      s,
      c,
      h,
      m,
      v,
      d,
      _,
      j,
      le,
      J,
      Q,
      oe,
      z,
      re,
      W,
      L,
      te,
      l,
      p,
      b,
      S,
      A,
      B,
      i,
    ]
  );
}
class Ts extends be {
  constructor(e) {
    super();
    we(this, e, Ds, Is, Se, {
      height: 21,
      icon: 0,
      iconColor: 1,
      iconContrast: 2,
      iconDropShadowAmount: 3,
      iconScaling: 4,
      iconTranslateX: 5,
      iconTranslateY: 6,
      name: 7,
      outlineColor: 22,
      outlineContrast: 23,
      outlineDropShadowAmount: 24,
      progressColor: 8,
      progressContrast: 9,
      progressDropShadowAmount: 10,
      progressValue: 25,
      rotateDegree: 11,
      translateX: 12,
      translateY: 13,
      width: 26,
      borderSize: 14,
    });
  }
}
function Ms(n) {
  let e, t, i, l, o, r, f, a, s, c, h, m, p;
  return (
    (c = new Dn({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7],
        style: "color:" + n[2] + ";",
      },
    })),
    {
      c() {
        (e = K("svg")),
          (t = K("g")),
          (i = K("path")),
          (o = K("line")),
          (s = K("g")),
          E(c.$$.fragment),
          u(
            i,
            "d",
            (l = `M0 0 h${n[12]} v${n[0]} h-${n[12]}z M${n[12] - n[13]} ${
              n[13]
            } 
      h-${n[12] - n[13] * 2} v${n[0] - n[13] * 2} h${n[12] - n[13] * 2}`)
          ),
          u(o, "stroke", n[8]),
          u(o, "x1", "50%"),
          u(o, "y1", (r = n[0] - n[13])),
          u(o, "x2", "50%"),
          u(o, "y2", n[13]),
          u(o, "stroke-dasharray", (f = n[0] - n[13])),
          u(o, "stroke-dashoffset", n[14]),
          u(o, "stroke-width", (a = n[12] - n[13] * 2)),
          u(
            s,
            "transform",
            (h = "rotate( " + -n[9] + " " + n[0] / 2 + " " + n[12] / 2 + ")")
          ),
          N(
            s,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          u(e, "height", n[0]),
          u(e, "width", n[12]),
          u(e, "overflow", "visible"),
          u(
            e,
            "transform",
            (m =
              `
    ` +
              (n[9] > 0 ? "rotate(" + n[9] + " " + 0 + " " + 0 + ")" : "") +
              `
    ` +
              ("translate(" + n[10] + " " + n[11] + ")"))
          );
      },
      m(b, S) {
        H(b, e, S), g(e, t), g(t, i), g(t, o), g(e, s), F(c, s, null), (p = !0);
      },
      p(b, [S]) {
        (!p ||
          (S & 12289 &&
            l !==
              (l = `M0 0 h${b[12]} v${b[0]} h-${b[12]}z M${b[12] - b[13]} ${
                b[13]
              } 
      h-${b[12] - b[13] * 2} v${b[0] - b[13] * 2} h${b[12] - b[13] * 2}`))) &&
          u(i, "d", l),
          (!p || S & 256) && u(o, "stroke", b[8]),
          (!p || (S & 8193 && r !== (r = b[0] - b[13]))) && u(o, "y1", r),
          (!p || S & 8192) && u(o, "y2", b[13]),
          (!p || (S & 8193 && f !== (f = b[0] - b[13]))) &&
            u(o, "stroke-dasharray", f),
          (!p || S & 16384) && u(o, "stroke-dashoffset", b[14]),
          (!p || (S & 12288 && a !== (a = b[12] - b[13] * 2))) &&
            u(o, "stroke-width", a);
        const v = {};
        S & 2 && (v.icon = b[1]),
          S & 32 && (v.scale = b[5]),
          S & 64 && (v.translateX = b[6]),
          S & 128 && (v.translateY = b[7]),
          S & 4 && (v.style = "color:" + b[2] + ";"),
          c.$set(v),
          (!p ||
            (S & 4609 &&
              h !==
                (h =
                  "rotate( " +
                  -b[9] +
                  " " +
                  b[0] / 2 +
                  " " +
                  b[12] / 2 +
                  ")"))) &&
            u(s, "transform", h),
          (!p || S & 28) &&
            N(
              s,
              "filter",
              (b[4] ? "drop-shadow(0px 0px " + b[4] + "px " + b[2] + ")" : "") +
                " " +
                ("contrast(" + b[3] + "%)")
            ),
          (!p || S & 1) && u(e, "height", b[0]),
          (!p || S & 4096) && u(e, "width", b[12]),
          (!p ||
            (S & 3584 &&
              m !==
                (m =
                  `
    ` +
                  (b[9] > 0 ? "rotate(" + b[9] + " " + 0 + " " + 0 + ")" : "") +
                  `
    ` +
                  ("translate(" + b[10] + " " + b[11] + ")")))) &&
            u(e, "transform", m);
      },
      i(b) {
        p || (w(c.$$.fragment, b), (p = !0));
      },
      o(b) {
        C(c.$$.fragment, b), (p = !1);
      },
      d(b) {
        b && M(e), O(c);
      },
    }
  );
}
function Hs(n, e, t) {
  let i,
    { height: l = 50 } = e,
    { icon: o = null } = e,
    { iconColor: r = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconScaling: s = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: h = 0 } = e,
    { innerColor: m = "#212121" } = e,
    { name: p = "" } = e,
    { outlineColor: b = "red" } = e,
    { outlineContrast: S = 100 } = e,
    { outlineDropShadowAmount: v = 0 } = e,
    { progressColor: d = "red" } = e,
    { progressContrast: _ = 100 } = e,
    { progressDropShadowAmount: A = 0 } = e,
    { progressValue: j = 100 } = e,
    { ringSize: le = 4 } = e,
    { rotateDegree: J = 0 } = e,
    { translateX: B = 0 } = e,
    { translateY: Q = 0 } = e,
    { width: oe = 50 } = e,
    { borderSize: z = 4 } = e,
    re = 10;
  const W = st(j, { duration: 600, easing: Nt });
  return (
    ve(n, W, (L) => t(25, (i = L))),
    (n.$$set = (L) => {
      "height" in L && t(0, (l = L.height)),
        "icon" in L && t(1, (o = L.icon)),
        "iconColor" in L && t(2, (r = L.iconColor)),
        "iconContrast" in L && t(3, (f = L.iconContrast)),
        "iconDropShadowAmount" in L && t(4, (a = L.iconDropShadowAmount)),
        "iconScaling" in L && t(5, (s = L.iconScaling)),
        "iconTranslateX" in L && t(6, (c = L.iconTranslateX)),
        "iconTranslateY" in L && t(7, (h = L.iconTranslateY)),
        "innerColor" in L && t(16, (m = L.innerColor)),
        "name" in L && t(17, (p = L.name)),
        "outlineColor" in L && t(18, (b = L.outlineColor)),
        "outlineContrast" in L && t(19, (S = L.outlineContrast)),
        "outlineDropShadowAmount" in L &&
          t(20, (v = L.outlineDropShadowAmount)),
        "progressColor" in L && t(8, (d = L.progressColor)),
        "progressContrast" in L && t(21, (_ = L.progressContrast)),
        "progressDropShadowAmount" in L &&
          t(22, (A = L.progressDropShadowAmount)),
        "progressValue" in L && t(23, (j = L.progressValue)),
        "ringSize" in L && t(24, (le = L.ringSize)),
        "rotateDegree" in L && t(9, (J = L.rotateDegree)),
        "translateX" in L && t(10, (B = L.translateX)),
        "translateY" in L && t(11, (Q = L.translateY)),
        "width" in L && t(12, (oe = L.width)),
        "borderSize" in L && t(13, (z = L.borderSize));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 8388608 && W.set(j),
        n.$$.dirty & 33562625 && t(14, (re = l - z - (i / 100) * (l - z * 2)));
    }),
    [
      l,
      o,
      r,
      f,
      a,
      s,
      c,
      h,
      d,
      J,
      B,
      Q,
      oe,
      z,
      re,
      W,
      m,
      p,
      b,
      S,
      v,
      _,
      A,
      j,
      le,
      i,
    ]
  );
}
class Es extends be {
  constructor(e) {
    super();
    we(this, e, Hs, Ms, Se, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      innerColor: 16,
      name: 17,
      outlineColor: 18,
      outlineContrast: 19,
      outlineDropShadowAmount: 20,
      progressColor: 8,
      progressContrast: 21,
      progressDropShadowAmount: 22,
      progressValue: 23,
      ringSize: 24,
      rotateDegree: 9,
      translateX: 10,
      translateY: 11,
      width: 12,
      borderSize: 13,
    });
  }
}
function Fs(n) {
  let e, t, i, l, o, r, f, a, s, c, h, m, p, b, S, v, d;
  return (
    (b = new Dn({
      props: {
        icon: n[1],
        scale: n[6],
        translateX: n[7],
        translateY: n[8],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = K("svg")),
          (t = K("defs")),
          (i = K("clipPath")),
          (l = K("path")),
          (f = K("g")),
          (a = K("path")),
          (c = K("rect")),
          (p = K("g")),
          E(b.$$.fragment),
          u(
            l,
            "d",
            (o = `M ${n[14] - n[15]} ${n[0] / 2} L ${n[14] / 2} ${n[15]} L ${
              n[15]
            } ${n[0] / 2} L ${n[14] / 2} ${n[0] - n[15]}z`)
          ),
          u(i, "id", (r = `${n[9]}-clipOut`)),
          u(
            a,
            "d",
            (s = `M ${0} ${n[0] / 2} L ${n[14] / 2} 0 L ${n[14]} ${
              n[0] / 2
            } L ${n[14] / 2} ${n[0]}z
      M ${n[14] - n[15]} ${n[0] / 2} L ${n[14] / 2} ${n[15]} L ${n[15]} ${
              n[0] / 2
            } L ${n[14] / 2} ${n[0] - n[15]}z`)
          ),
          u(c, "transform", (h = `rotate(180 ${n[0] / 2} ${n[14] / 2})`)),
          u(c, "height", n[16]),
          u(c, "fill", n[10]),
          u(c, "width", n[14]),
          u(c, "clip-path", (m = `url(#${n[9]}-clipOut)`)),
          N(
            p,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          u(
            p,
            "transform",
            (S =
              n[5] > 0
                ? "rotate(" + n[5] + " " + n[14] / 2 + " " + n[0] / 2 + ")"
                : "")
          ),
          u(e, "width", n[14]),
          u(e, "height", n[0]),
          u(
            e,
            "transform",
            (v =
              `
    ` +
              (n[11] > 0 ? "rotate(" + n[11] + " " + 0 + " " + 0 + ")" : "") +
              `
    ` +
              ("translate(" + n[12] + " " + n[13] + ")"))
          );
      },
      m(_, A) {
        H(_, e, A),
          g(e, t),
          g(t, i),
          g(i, l),
          g(e, f),
          g(f, a),
          g(f, c),
          g(e, p),
          F(b, p, null),
          (d = !0);
      },
      p(_, [A]) {
        (!d ||
          (A & 49153 &&
            o !==
              (o = `M ${_[14] - _[15]} ${_[0] / 2} L ${_[14] / 2} ${_[15]} L ${
                _[15]
              } ${_[0] / 2} L ${_[14] / 2} ${_[0] - _[15]}z`))) &&
          u(l, "d", o),
          (!d || (A & 512 && r !== (r = `${_[9]}-clipOut`))) && u(i, "id", r),
          (!d ||
            (A & 49153 &&
              s !==
                (s = `M ${0} ${_[0] / 2} L ${_[14] / 2} 0 L ${_[14]} ${
                  _[0] / 2
                } L ${_[14] / 2} ${_[0]}z
      M ${_[14] - _[15]} ${_[0] / 2} L ${_[14] / 2} ${_[15]} L ${_[15]} ${
                  _[0] / 2
                } L ${_[14] / 2} ${_[0] - _[15]}z`))) &&
            u(a, "d", s),
          (!d ||
            (A & 16385 &&
              h !== (h = `rotate(180 ${_[0] / 2} ${_[14] / 2})`))) &&
            u(c, "transform", h),
          (!d || A & 65536) && u(c, "height", _[16]),
          (!d || A & 1024) && u(c, "fill", _[10]),
          (!d || A & 16384) && u(c, "width", _[14]),
          (!d || (A & 512 && m !== (m = `url(#${_[9]}-clipOut)`))) &&
            u(c, "clip-path", m);
        const j = {};
        A & 2 && (j.icon = _[1]),
          A & 64 && (j.scale = _[6]),
          A & 128 && (j.translateX = _[7]),
          A & 256 && (j.translateY = _[8]),
          A & 4 && (j.style = "color:" + _[2]),
          b.$set(j),
          (!d || A & 28) &&
            N(
              p,
              "filter",
              (_[4] ? "drop-shadow(0px 0px " + _[4] + "px " + _[2] + ")" : "") +
                " " +
                ("contrast(" + _[3] + "%)")
            ),
          (!d ||
            (A & 16417 &&
              S !==
                (S =
                  _[5] > 0
                    ? "rotate(" + _[5] + " " + _[14] / 2 + " " + _[0] / 2 + ")"
                    : ""))) &&
            u(p, "transform", S),
          (!d || A & 16384) && u(e, "width", _[14]),
          (!d || A & 1) && u(e, "height", _[0]),
          (!d ||
            (A & 14336 &&
              v !==
                (v =
                  `
    ` +
                  (_[11] > 0
                    ? "rotate(" + _[11] + " " + 0 + " " + 0 + ")"
                    : "") +
                  `
    ` +
                  ("translate(" + _[12] + " " + _[13] + ")")))) &&
            u(e, "transform", v);
      },
      i(_) {
        d || (w(b.$$.fragment, _), (d = !0));
      },
      o(_) {
        C(b.$$.fragment, _), (d = !1);
      },
      d(_) {
        _ && M(e), O(b);
      },
    }
  );
}
function Os(n, e, t) {
  let i,
    { displayOutline: l = !0 } = e,
    { height: o = 50 } = e,
    { icon: r = null } = e,
    { iconColor: f = "red" } = e,
    { iconContrast: a = 100 } = e,
    { iconDropShadowAmount: s = 0 } = e,
    { iconRotateDegree: c = 0 } = e,
    { iconScaling: h = 0.45 } = e,
    { iconTranslateX: m = 0 } = e,
    { iconTranslateY: p = 0 } = e,
    { name: b = "" } = e,
    { progressColor: S = "red" } = e,
    { progressContrast: v = 100 } = e,
    { progressDropShadowAmount: d = 0 } = e,
    { progressValue: _ = 100 } = e,
    { rotateDegree: A = 0 } = e,
    { translateX: j = 0 } = e,
    { translateY: le = 0 } = e,
    { width: J = 50 } = e,
    { borderSize: B = 4 } = e,
    Q = 10;
  const oe = st(_, { duration: 600, easing: Nt });
  return (
    ve(n, oe, (z) => t(22, (i = z))),
    (n.$$set = (z) => {
      "displayOutline" in z && t(18, (l = z.displayOutline)),
        "height" in z && t(0, (o = z.height)),
        "icon" in z && t(1, (r = z.icon)),
        "iconColor" in z && t(2, (f = z.iconColor)),
        "iconContrast" in z && t(3, (a = z.iconContrast)),
        "iconDropShadowAmount" in z && t(4, (s = z.iconDropShadowAmount)),
        "iconRotateDegree" in z && t(5, (c = z.iconRotateDegree)),
        "iconScaling" in z && t(6, (h = z.iconScaling)),
        "iconTranslateX" in z && t(7, (m = z.iconTranslateX)),
        "iconTranslateY" in z && t(8, (p = z.iconTranslateY)),
        "name" in z && t(9, (b = z.name)),
        "progressColor" in z && t(10, (S = z.progressColor)),
        "progressContrast" in z && t(19, (v = z.progressContrast)),
        "progressDropShadowAmount" in z &&
          t(20, (d = z.progressDropShadowAmount)),
        "progressValue" in z && t(21, (_ = z.progressValue)),
        "rotateDegree" in z && t(11, (A = z.rotateDegree)),
        "translateX" in z && t(12, (j = z.translateX)),
        "translateY" in z && t(13, (le = z.translateY)),
        "width" in z && t(14, (J = z.width)),
        "borderSize" in z && t(15, (B = z.borderSize));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 2097152 && oe.set(_),
        n.$$.dirty & 4227073 &&
          t(16, (Q = o - B * 2 - (i / 100) * (o - B * 2) + B));
    }),
    [o, r, f, a, s, c, h, m, p, b, S, A, j, le, J, B, Q, oe, l, v, d, _, i]
  );
}
class Ys extends be {
  constructor(e) {
    super();
    we(this, e, Os, Fs, Se, {
      displayOutline: 18,
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconRotateDegree: 5,
      iconScaling: 6,
      iconTranslateX: 7,
      iconTranslateY: 8,
      name: 9,
      progressColor: 10,
      progressContrast: 19,
      progressDropShadowAmount: 20,
      progressValue: 21,
      rotateDegree: 11,
      translateX: 12,
      translateY: 13,
      width: 14,
      borderSize: 15,
    });
  }
}
function Xs(n) {
  let e, t, i, l, o, r, f, a, s, c, h, m, p;
  return (
    (s = new Dn({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7] - 0.075,
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = K("svg")),
          (t = K("g")),
          (i = K("rect")),
          (r = K("rect")),
          (a = K("g")),
          E(s.$$.fragment),
          u(i, "width", n[17]),
          u(i, "height", (l = n[20] - 0.2)),
          u(i, "fill", n[9]),
          u(i, "y", (o = n[0] - n[20] - 5)),
          u(i, "x", n[21]),
          u(i, "rx", n[18]),
          u(i, "ry", n[19]),
          N(
            i,
            "filter",
            (n[11] ? "drop-shadow(0px 0px " + n[11] + "px " + n[9] + ")" : "") +
              " " +
              ("contrast(" + n[10] + "%)")
          ),
          N(i, "overflow", "visible"),
          u(r, "width", n[22]),
          u(r, "height", n[20]),
          u(r, "fill", n[12]),
          u(r, "y", (f = n[0] - n[20] - 5)),
          u(r, "x", n[21]),
          u(r, "rx", n[18]),
          u(r, "ry", n[19]),
          N(
            r,
            "filter",
            (n[14]
              ? "drop-shadow(0px 0px " + n[14] + "px " + n[12] + ")"
              : "") +
              " " +
              ("contrast(" + n[13] + "%)")
          ),
          N(
            a,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          u(e, "height", n[0]),
          u(e, "width", (c = n[17] + n[21] * 2)),
          u(e, "style", (h = `background-color: ${n[8]}`)),
          u(
            e,
            "transform",
            (m =
              `
  ` + (n[15] | n[16] ? "translate(" + n[15] + " " + n[16] + ")" : ""))
          );
      },
      m(b, S) {
        H(b, e, S), g(e, t), g(t, i), g(t, r), g(e, a), F(s, a, null), (p = !0);
      },
      p(b, [S]) {
        (!p || S & 131072) && u(i, "width", b[17]),
          (!p || (S & 1048576 && l !== (l = b[20] - 0.2))) && u(i, "height", l),
          (!p || S & 512) && u(i, "fill", b[9]),
          (!p || (S & 1048577 && o !== (o = b[0] - b[20] - 5))) && u(i, "y", o),
          (!p || S & 2097152) && u(i, "x", b[21]),
          (!p || S & 262144) && u(i, "rx", b[18]),
          (!p || S & 524288) && u(i, "ry", b[19]),
          (!p || S & 3584) &&
            N(
              i,
              "filter",
              (b[11]
                ? "drop-shadow(0px 0px " + b[11] + "px " + b[9] + ")"
                : "") +
                " " +
                ("contrast(" + b[10] + "%)")
            ),
          (!p || S & 4194304) && u(r, "width", b[22]),
          (!p || S & 1048576) && u(r, "height", b[20]),
          (!p || S & 4096) && u(r, "fill", b[12]),
          (!p || (S & 1048577 && f !== (f = b[0] - b[20] - 5))) && u(r, "y", f),
          (!p || S & 2097152) && u(r, "x", b[21]),
          (!p || S & 262144) && u(r, "rx", b[18]),
          (!p || S & 524288) && u(r, "ry", b[19]),
          (!p || S & 28672) &&
            N(
              r,
              "filter",
              (b[14]
                ? "drop-shadow(0px 0px " + b[14] + "px " + b[12] + ")"
                : "") +
                " " +
                ("contrast(" + b[13] + "%)")
            );
        const v = {};
        S & 2 && (v.icon = b[1]),
          S & 32 && (v.scale = b[5]),
          S & 64 && (v.translateX = b[6]),
          S & 128 && (v.translateY = b[7] - 0.075),
          S & 4 && (v.style = "color:" + b[2]),
          s.$set(v),
          (!p || S & 28) &&
            N(
              a,
              "filter",
              (b[4] ? "drop-shadow(0px 0px " + b[4] + "px " + b[2] + ")" : "") +
                " " +
                ("contrast(" + b[3] + "%)")
            ),
          (!p || S & 1) && u(e, "height", b[0]),
          (!p || (S & 2228224 && c !== (c = b[17] + b[21] * 2))) &&
            u(e, "width", c),
          (!p || (S & 256 && h !== (h = `background-color: ${b[8]}`))) &&
            u(e, "style", h),
          (!p ||
            (S & 98304 &&
              m !==
                (m =
                  `
  ` + (b[15] | b[16] ? "translate(" + b[15] + " " + b[16] + ")" : "")))) &&
            u(e, "transform", m);
      },
      i(b) {
        p || (w(s.$$.fragment, b), (p = !0));
      },
      o(b) {
        C(s.$$.fragment, b), (p = !1);
      },
      d(b) {
        b && M(e), O(s);
      },
    }
  );
}
function Us(n, e, t) {
  let i,
    { height: l = 50 } = e,
    { icon: o = null } = e,
    { iconColor: r = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconScaling: s = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: h = 0 } = e,
    { innerColor: m = "#212121" } = e,
    { outlineColor: p = "red" } = e,
    { outlineContrast: b = 100 } = e,
    { outlineDropShadowAmount: S = 0 } = e,
    { progressColor: v = "red" } = e,
    { progressContrast: d = 100 } = e,
    { progressDropShadowAmount: _ = 0 } = e,
    { progressValue: A = 100 } = e,
    { rotateDegree: j = 0 } = e,
    { translateX: le = 0 } = e,
    { translateY: J = 0 } = e,
    { width: B = 50 } = e,
    { xAxisRound: Q = 5 } = e,
    { yAxisRound: oe = 20 } = e,
    { name: z = "" } = e,
    { barHeight: re = 4 } = e,
    { borderSize: W = 4 } = e,
    L = 0;
  const te = st(A, { duration: 600, easing: Nt });
  return (
    ve(n, te, (I) => t(27, (i = I))),
    (n.$$set = (I) => {
      "height" in I && t(0, (l = I.height)),
        "icon" in I && t(1, (o = I.icon)),
        "iconColor" in I && t(2, (r = I.iconColor)),
        "iconContrast" in I && t(3, (f = I.iconContrast)),
        "iconDropShadowAmount" in I && t(4, (a = I.iconDropShadowAmount)),
        "iconScaling" in I && t(5, (s = I.iconScaling)),
        "iconTranslateX" in I && t(6, (c = I.iconTranslateX)),
        "iconTranslateY" in I && t(7, (h = I.iconTranslateY)),
        "innerColor" in I && t(8, (m = I.innerColor)),
        "outlineColor" in I && t(9, (p = I.outlineColor)),
        "outlineContrast" in I && t(10, (b = I.outlineContrast)),
        "outlineDropShadowAmount" in I &&
          t(11, (S = I.outlineDropShadowAmount)),
        "progressColor" in I && t(12, (v = I.progressColor)),
        "progressContrast" in I && t(13, (d = I.progressContrast)),
        "progressDropShadowAmount" in I &&
          t(14, (_ = I.progressDropShadowAmount)),
        "progressValue" in I && t(24, (A = I.progressValue)),
        "rotateDegree" in I && t(25, (j = I.rotateDegree)),
        "translateX" in I && t(15, (le = I.translateX)),
        "translateY" in I && t(16, (J = I.translateY)),
        "width" in I && t(17, (B = I.width)),
        "xAxisRound" in I && t(18, (Q = I.xAxisRound)),
        "yAxisRound" in I && t(19, (oe = I.yAxisRound)),
        "name" in I && t(26, (z = I.name)),
        "barHeight" in I && t(20, (re = I.barHeight)),
        "borderSize" in I && t(21, (W = I.borderSize));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16777216 && te.set(A),
        n.$$.dirty & 16777216 && te.set(A),
        n.$$.dirty & 134348800 && t(22, (L = (i / 100) * B));
    }),
    [
      l,
      o,
      r,
      f,
      a,
      s,
      c,
      h,
      m,
      p,
      b,
      S,
      v,
      d,
      _,
      le,
      J,
      B,
      Q,
      oe,
      re,
      W,
      L,
      te,
      A,
      j,
      z,
      i,
    ]
  );
}
class Vs extends be {
  constructor(e) {
    super();
    we(this, e, Us, Xs, Se, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      innerColor: 8,
      outlineColor: 9,
      outlineContrast: 10,
      outlineDropShadowAmount: 11,
      progressColor: 12,
      progressContrast: 13,
      progressDropShadowAmount: 14,
      progressValue: 24,
      rotateDegree: 25,
      translateX: 15,
      translateY: 16,
      width: 17,
      xAxisRound: 18,
      yAxisRound: 19,
      name: 26,
      barHeight: 20,
      borderSize: 21,
    });
  }
}
function Rs(n) {
  let e, t, i, l, o, r, f, a, s, c, h, m;
  return (
    (s = new Dn({
      props: {
        icon: n[1],
        scale: n[5],
        translateX: n[6],
        translateY: n[7] - 0.075,
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        (e = K("svg")),
          (t = K("rect")),
          (r = K("rect")),
          (a = K("g")),
          E(s.$$.fragment),
          u(t, "width", (i = n[16] - 0.2)),
          u(t, "height", (l = n[19] - 0.2)),
          u(t, "fill", n[8]),
          u(t, "y", (o = n[0] - n[19] - 5)),
          u(t, "x", n[20]),
          u(t, "rx", n[17]),
          u(t, "ry", n[18]),
          N(
            t,
            "filter",
            (n[10] ? "drop-shadow(0px 0px " + n[10] + "px " + n[8] + ")" : "") +
              " " +
              ("contrast(" + n[9] + "%)")
          ),
          N(t, "overflow", "visible"),
          u(r, "width", n[21]),
          u(r, "height", n[19]),
          u(r, "fill", n[11]),
          u(r, "y", (f = n[0] - n[19] - 5)),
          u(r, "x", n[20]),
          u(r, "rx", n[17]),
          u(r, "ry", n[18]),
          N(
            r,
            "filter",
            (n[13]
              ? "drop-shadow(0px 0px " + n[13] + "px " + n[11] + ")"
              : "") +
              " " +
              ("contrast(" + n[12] + "%)")
          ),
          N(
            a,
            "filter",
            (n[4] ? "drop-shadow(0px 0px " + n[4] + "px " + n[2] + ")" : "") +
              " " +
              ("contrast(" + n[3] + "%)")
          ),
          u(e, "height", n[0]),
          u(e, "width", (c = n[16] + n[20] * 2)),
          u(
            e,
            "transform",
            (h =
              `
  ` + (n[14] | n[15] ? "translate(" + n[14] + " " + n[15] + ")" : ""))
          );
      },
      m(p, b) {
        H(p, e, b), g(e, t), g(e, r), g(e, a), F(s, a, null), (m = !0);
      },
      p(p, [b]) {
        (!m || (b & 65536 && i !== (i = p[16] - 0.2))) && u(t, "width", i),
          (!m || (b & 524288 && l !== (l = p[19] - 0.2))) && u(t, "height", l),
          (!m || b & 256) && u(t, "fill", p[8]),
          (!m || (b & 524289 && o !== (o = p[0] - p[19] - 5))) && u(t, "y", o),
          (!m || b & 1048576) && u(t, "x", p[20]),
          (!m || b & 131072) && u(t, "rx", p[17]),
          (!m || b & 262144) && u(t, "ry", p[18]),
          (!m || b & 1792) &&
            N(
              t,
              "filter",
              (p[10]
                ? "drop-shadow(0px 0px " + p[10] + "px " + p[8] + ")"
                : "") +
                " " +
                ("contrast(" + p[9] + "%)")
            ),
          (!m || b & 2097152) && u(r, "width", p[21]),
          (!m || b & 524288) && u(r, "height", p[19]),
          (!m || b & 2048) && u(r, "fill", p[11]),
          (!m || (b & 524289 && f !== (f = p[0] - p[19] - 5))) && u(r, "y", f),
          (!m || b & 1048576) && u(r, "x", p[20]),
          (!m || b & 131072) && u(r, "rx", p[17]),
          (!m || b & 262144) && u(r, "ry", p[18]),
          (!m || b & 14336) &&
            N(
              r,
              "filter",
              (p[13]
                ? "drop-shadow(0px 0px " + p[13] + "px " + p[11] + ")"
                : "") +
                " " +
                ("contrast(" + p[12] + "%)")
            );
        const S = {};
        b & 2 && (S.icon = p[1]),
          b & 32 && (S.scale = p[5]),
          b & 64 && (S.translateX = p[6]),
          b & 128 && (S.translateY = p[7] - 0.075),
          b & 4 && (S.style = "color:" + p[2]),
          s.$set(S),
          (!m || b & 28) &&
            N(
              a,
              "filter",
              (p[4] ? "drop-shadow(0px 0px " + p[4] + "px " + p[2] + ")" : "") +
                " " +
                ("contrast(" + p[3] + "%)")
            ),
          (!m || b & 1) && u(e, "height", p[0]),
          (!m || (b & 1114112 && c !== (c = p[16] + p[20] * 2))) &&
            u(e, "width", c),
          (!m ||
            (b & 49152 &&
              h !==
                (h =
                  `
  ` + (p[14] | p[15] ? "translate(" + p[14] + " " + p[15] + ")" : "")))) &&
            u(e, "transform", h);
      },
      i(p) {
        m || (w(s.$$.fragment, p), (m = !0));
      },
      o(p) {
        C(s.$$.fragment, p), (m = !1);
      },
      d(p) {
        p && M(e), O(s);
      },
    }
  );
}
function Ps(n, e, t) {
  let i,
    { height: l = 50 } = e,
    { icon: o = null } = e,
    { iconColor: r = "red" } = e,
    { iconContrast: f = 100 } = e,
    { iconDropShadowAmount: a = 0 } = e,
    { iconScaling: s = 0.45 } = e,
    { iconTranslateX: c = 0 } = e,
    { iconTranslateY: h = 0 } = e,
    { innerColor: m = "#212121" } = e,
    { outlineColor: p = "red" } = e,
    { outlineContrast: b = 100 } = e,
    { outlineDropShadowAmount: S = 0 } = e,
    { progressColor: v = "red" } = e,
    { progressContrast: d = 100 } = e,
    { progressDropShadowAmount: _ = 0 } = e,
    { progressValue: A = 100 } = e,
    { rotateDegree: j = 0 } = e,
    { translateX: le = 0 } = e,
    { translateY: J = 0 } = e,
    { width: B = 50 } = e,
    { xAxisRound: Q = 5 } = e,
    { yAxisRound: oe = 20 } = e,
    { name: z = "" } = e,
    { barHeight: re = 4 } = e,
    { borderSize: W = 4 } = e,
    L = 0;
  const te = st(A, { duration: 600, easing: Nt });
  return (
    ve(n, te, (I) => t(27, (i = I))),
    (n.$$set = (I) => {
      "height" in I && t(0, (l = I.height)),
        "icon" in I && t(1, (o = I.icon)),
        "iconColor" in I && t(2, (r = I.iconColor)),
        "iconContrast" in I && t(3, (f = I.iconContrast)),
        "iconDropShadowAmount" in I && t(4, (a = I.iconDropShadowAmount)),
        "iconScaling" in I && t(5, (s = I.iconScaling)),
        "iconTranslateX" in I && t(6, (c = I.iconTranslateX)),
        "iconTranslateY" in I && t(7, (h = I.iconTranslateY)),
        "innerColor" in I && t(23, (m = I.innerColor)),
        "outlineColor" in I && t(8, (p = I.outlineColor)),
        "outlineContrast" in I && t(9, (b = I.outlineContrast)),
        "outlineDropShadowAmount" in I &&
          t(10, (S = I.outlineDropShadowAmount)),
        "progressColor" in I && t(11, (v = I.progressColor)),
        "progressContrast" in I && t(12, (d = I.progressContrast)),
        "progressDropShadowAmount" in I &&
          t(13, (_ = I.progressDropShadowAmount)),
        "progressValue" in I && t(24, (A = I.progressValue)),
        "rotateDegree" in I && t(25, (j = I.rotateDegree)),
        "translateX" in I && t(14, (le = I.translateX)),
        "translateY" in I && t(15, (J = I.translateY)),
        "width" in I && t(16, (B = I.width)),
        "xAxisRound" in I && t(17, (Q = I.xAxisRound)),
        "yAxisRound" in I && t(18, (oe = I.yAxisRound)),
        "name" in I && t(26, (z = I.name)),
        "barHeight" in I && t(19, (re = I.barHeight)),
        "borderSize" in I && t(20, (W = I.borderSize));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16777216 && te.set(A),
        n.$$.dirty & 16777216 && te.set(A),
        n.$$.dirty & 134283264 && t(21, (L = (i / 100) * B));
    }),
    [
      l,
      o,
      r,
      f,
      a,
      s,
      c,
      h,
      p,
      b,
      S,
      v,
      d,
      _,
      le,
      J,
      B,
      Q,
      oe,
      re,
      W,
      L,
      te,
      m,
      A,
      j,
      z,
      i,
    ]
  );
}
class zs extends be {
  constructor(e) {
    super();
    we(this, e, Ps, Rs, Se, {
      height: 0,
      icon: 1,
      iconColor: 2,
      iconContrast: 3,
      iconDropShadowAmount: 4,
      iconScaling: 5,
      iconTranslateX: 6,
      iconTranslateY: 7,
      innerColor: 23,
      outlineColor: 8,
      outlineContrast: 9,
      outlineDropShadowAmount: 10,
      progressColor: 11,
      progressContrast: 12,
      progressDropShadowAmount: 13,
      progressValue: 24,
      rotateDegree: 25,
      translateX: 14,
      translateY: 15,
      width: 16,
      xAxisRound: 17,
      yAxisRound: 18,
      name: 26,
      barHeight: 19,
      borderSize: 20,
    });
  }
}
function Ls(n) {
  let e, t;
  const i = [n[1]];
  let l = {};
  for (let o = 0; o < i.length; o += 1) l = Bt(l, i[o]);
  return (
    (e = new zs({ props: l })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(o, r) {
        F(e, o, r), (t = !0);
      },
      p(o, r) {
        const f = r & 2 ? jt(i, [Gt(o[1])]) : {};
        e.$set(f);
      },
      i(o) {
        t || (w(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        O(e, o);
      },
    }
  );
}
function qs(n) {
  let e, t;
  const i = [n[1]];
  let l = {};
  for (let o = 0; o < i.length; o += 1) l = Bt(l, i[o]);
  return (
    (e = new Vs({ props: l })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(o, r) {
        F(e, o, r), (t = !0);
      },
      p(o, r) {
        const f = r & 2 ? jt(i, [Gt(o[1])]) : {};
        e.$set(f);
      },
      i(o) {
        t || (w(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        O(e, o);
      },
    }
  );
}
function Ns(n) {
  let e, t;
  const i = [n[1]];
  let l = {};
  for (let o = 0; o < i.length; o += 1) l = Bt(l, i[o]);
  return (
    (e = new Ys({ props: l })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(o, r) {
        F(e, o, r), (t = !0);
      },
      p(o, r) {
        const f = r & 2 ? jt(i, [Gt(o[1])]) : {};
        e.$set(f);
      },
      i(o) {
        t || (w(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        O(e, o);
      },
    }
  );
}
function Bs(n) {
  let e, t;
  const i = [n[1]];
  let l = {};
  for (let o = 0; o < i.length; o += 1) l = Bt(l, i[o]);
  return (
    (e = new Es({ props: l })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(o, r) {
        F(e, o, r), (t = !0);
      },
      p(o, r) {
        const f = r & 2 ? jt(i, [Gt(o[1])]) : {};
        e.$set(f);
      },
      i(o) {
        t || (w(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        O(e, o);
      },
    }
  );
}
function js(n) {
  let e, t;
  const i = [n[1]];
  let l = {};
  for (let o = 0; o < i.length; o += 1) l = Bt(l, i[o]);
  return (
    (e = new Ts({ props: l })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(o, r) {
        F(e, o, r), (t = !0);
      },
      p(o, r) {
        const f = r & 2 ? jt(i, [Gt(o[1])]) : {};
        e.$set(f);
      },
      i(o) {
        t || (w(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        O(e, o);
      },
    }
  );
}
function Gs(n) {
  let e, t;
  const i = [n[1]];
  let l = {};
  for (let o = 0; o < i.length; o += 1) l = Bt(l, i[o]);
  return (
    (e = new ys({ props: l })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(o, r) {
        F(e, o, r), (t = !0);
      },
      p(o, r) {
        const f = r & 2 ? jt(i, [Gt(o[1])]) : {};
        e.$set(f);
      },
      i(o) {
        t || (w(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        O(e, o);
      },
    }
  );
}
function Ws(n) {
  let e, t;
  const i = [n[1]];
  let l = {};
  for (let o = 0; o < i.length; o += 1) l = Bt(l, i[o]);
  return (
    (e = new Cs({ props: l })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(o, r) {
        F(e, o, r), (t = !0);
      },
      p(o, r) {
        const f = r & 2 ? jt(i, [Gt(o[1])]) : {};
        e.$set(f);
      },
      i(o) {
        t || (w(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        O(e, o);
      },
    }
  );
}
function Js(n) {
  let e, t;
  const i = [n[1]];
  let l = {};
  for (let o = 0; o < i.length; o += 1) l = Bt(l, i[o]);
  return (
    (e = new ws({ props: l })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(o, r) {
        F(e, o, r), (t = !0);
      },
      p(o, r) {
        const f = r & 2 ? jt(i, [Gt(o[1])]) : {};
        e.$set(f);
      },
      i(o) {
        t || (w(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        O(e, o);
      },
    }
  );
}
function Zs(n) {
  let e, t;
  const i = [n[1]];
  let l = {};
  for (let o = 0; o < i.length; o += 1) l = Bt(l, i[o]);
  return (
    (e = new _s({ props: l })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(o, r) {
        F(e, o, r), (t = !0);
      },
      p(o, r) {
        const f = r & 2 ? jt(i, [Gt(o[1])]) : {};
        e.$set(f);
      },
      i(o) {
        t || (w(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        C(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        O(e, o);
      },
    }
  );
}
function Ks(n) {
  let e, t, i, l;
  const o = [Zs, Js, Ws, Gs, js, Bs, Ns, qs, Ls],
    r = [];
  function f(a, s) {
    return a[0].shape == "split-circle"
      ? 0
      : a[0].shape == "inner-circle"
      ? 1
      : a[0].shape == "rotated-square"
      ? 2
      : a[0].shape == "regular-square"
      ? 3
      : a[0].shape == "circle-fill"
      ? 4
      : a[0].shape == "square-fill"
      ? 5
      : a[0].shape == "rotated-square-fill"
      ? 6
      : a[0].shape == "badge"
      ? 7
      : a[0].shape == "transparent"
      ? 8
      : -1;
  }
  return (
    ~(e = f(n)) && (t = r[e] = o[e](n)),
    {
      c() {
        t && t.c(), (i = pn());
      },
      m(a, s) {
        ~e && r[e].m(a, s), H(a, i, s), (l = !0);
      },
      p(a, [s]) {
        let c = e;
        (e = f(a)),
          e === c
            ? ~e && r[e].p(a, s)
            : (t &&
                (ce(),
                C(r[c], 1, 1, () => {
                  r[c] = null;
                }),
                ge()),
              ~e
                ? ((t = r[e]),
                  t ? t.p(a, s) : ((t = r[e] = o[e](a)), t.c()),
                  w(t, 1),
                  t.m(i.parentNode, i))
                : (t = null));
      },
      i(a) {
        l || (w(t), (l = !0));
      },
      o(a) {
        C(t), (l = !1);
      },
      d(a) {
        ~e && r[e].d(a), a && M(i);
      },
    }
  );
}
function Qs(n, e, t) {
  let { hudIconInfo: i = {} } = e,
    l;
  return (
    (n.$$set = (o) => {
      "hudIconInfo" in o && t(0, (i = o.hudIconInfo));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 1 &&
        t(
          1,
          (l = ((a) => {
            var s = a,
              { shape: o, isShowing: r } = s,
              f = Hi(s, ["shape", "isShowing"]);
            return f;
          })(i))
        );
    }),
    [i, l]
  );
}
class Qo extends be {
  constructor(e) {
    super();
    we(this, e, Qs, Ks, Se, { hudIconInfo: 0 });
  }
}
function vl(n, e, t) {
  const i = n.slice();
  return (i[10] = e[t][0]), (i[11] = e[t][1]), i;
}
function Al(n, e, t) {
  const i = n.slice();
  i[10] = e[t];
  const l = i[2].designMode
    ? i[4] == i[10]
      ? i[3].globalColorSettings.editSingleIconStage
      : 0
    : i[3].icons[i[10]].currentEffect;
  i[14] = l;
  const o = i[3].icons[i[10]].colorEffects[i[14]];
  i[15] = o;
  const r = i[5][i[10]];
  return (i[16] = r), i;
}
function yl(n) {
  let e, t, i, l;
  return (
    (t = new Qo({
      props: {
        hudIconInfo: Pt(cn({}, n[2].icons[n[10]]), {
          progressColor: n[15].progressColor,
          progressContrast: n[15].progressContrast,
          progressDropShadowAmount: n[15].progressDropShadowAmount,
          progressValue: n[2].designMode
            ? n[2].designProgress
            : n[2].icons[n[10]].progressValue,
          iconColor: n[16] ? n[16].iconColor : n[15].iconColor,
          iconContrast: n[15].iconContrast,
          iconDropShadowAmount: n[15].iconDropShadowAmount,
          outlineColor: n[15].outlineColor,
          outlineContrast: n[15].outlineContrast,
          outlineDropShadowAmount: n[15].outlineDropShadowAmount,
          innerColor: n[15].innerColor,
        }),
      },
    })),
    {
      c() {
        (e = k("div")), E(t.$$.fragment), u(e, "class", "my-auto");
      },
      m(o, r) {
        H(o, e, r), F(t, e, null), (l = !0);
      },
      p(o, r) {
        const f = {};
        r & 61 &&
          (f.hudIconInfo = Pt(cn({}, o[2].icons[o[10]]), {
            progressColor: o[15].progressColor,
            progressContrast: o[15].progressContrast,
            progressDropShadowAmount: o[15].progressDropShadowAmount,
            progressValue: o[2].designMode
              ? o[2].designProgress
              : o[2].icons[o[10]].progressValue,
            iconColor: o[16] ? o[16].iconColor : o[15].iconColor,
            iconContrast: o[15].iconContrast,
            iconDropShadowAmount: o[15].iconDropShadowAmount,
            outlineColor: o[15].outlineColor,
            outlineContrast: o[15].outlineContrast,
            outlineDropShadowAmount: o[15].outlineDropShadowAmount,
            innerColor: o[15].innerColor,
          })),
          t.$set(f);
      },
      i(o) {
        l ||
          (w(t.$$.fragment, o),
          o &&
            et(() => {
              i || (i = sn(e, bn, { duration: 1e3 }, !0)), i.run(1);
            }),
          (l = !0));
      },
      o(o) {
        C(t.$$.fragment, o),
          o && (i || (i = sn(e, bn, { duration: 1e3 }, !1)), i.run(0)),
          (l = !1);
      },
      d(o) {
        o && M(e), O(t), o && i && i.end();
      },
    }
  );
}
function Il(n) {
  let e =
      (n[2].icons[n[10]].isShowing && !n[1].includes(n[10])) || n[2].designMode,
    t,
    i,
    l = e && yl(n);
  return {
    c() {
      l && l.c(), (t = pn());
    },
    m(o, r) {
      l && l.m(o, r), H(o, t, r), (i = !0);
    },
    p(o, r) {
      r & 7 &&
        (e =
          (o[2].icons[o[10]].isShowing && !o[1].includes(o[10])) ||
          o[2].designMode),
        e
          ? l
            ? (l.p(o, r), r & 7 && w(l, 1))
            : ((l = yl(o)), l.c(), w(l, 1), l.m(t.parentNode, t))
          : l &&
            (ce(),
            C(l, 1, 1, () => {
              l = null;
            }),
            ge());
    },
    i(o) {
      i || (w(l), (i = !0));
    },
    o(o) {
      C(l), (i = !1);
    },
    d(o) {
      l && l.d(o), o && M(t);
    },
  };
}
function Dl(n) {
  let e,
    t,
    i,
    l,
    o = (n[11].isShowing || n[2].designMode) && Tl(n);
  return {
    c() {
      (e = k("div")), o && o.c(), (t = y()), u(e, "class", "my-auto");
    },
    m(r, f) {
      H(r, e, f), o && o.m(e, null), g(e, t), (l = !0);
    },
    p(r, f) {
      r[11].isShowing || r[2].designMode
        ? o
          ? (o.p(r, f), f & 36 && w(o, 1))
          : ((o = Tl(r)), o.c(), w(o, 1), o.m(e, t))
        : o &&
          (ce(),
          C(o, 1, 1, () => {
            o = null;
          }),
          ge());
    },
    i(r) {
      l ||
        (w(o),
        r &&
          et(() => {
            i || (i = sn(e, bn, { duration: 1e3 }, !0)), i.run(1);
          }),
        (l = !0));
    },
    o(r) {
      C(o),
        r && (i || (i = sn(e, bn, { duration: 1e3 }, !1)), i.run(0)),
        (l = !1);
    },
    d(r) {
      r && M(e), o && o.d(), r && i && i.end();
    },
  };
}
function Tl(n) {
  let e, t;
  return (
    (e = new Qo({ props: { hudIconInfo: n[11] } })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(i, l) {
        F(e, i, l), (t = !0);
      },
      p(i, l) {
        const o = {};
        l & 32 && (o.hudIconInfo = i[11]), e.$set(o);
      },
      i(i) {
        t || (w(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        O(e, i);
      },
    }
  );
}
function Ml(n, e) {
  let t,
    i,
    l,
    o = e[11].name && Dl(e);
  return {
    key: n,
    first: null,
    c() {
      (t = pn()), o && o.c(), (i = pn()), (this.first = t);
    },
    m(r, f) {
      H(r, t, f), o && o.m(r, f), H(r, i, f), (l = !0);
    },
    p(r, f) {
      (e = r),
        e[11].name
          ? o
            ? (o.p(e, f), f & 32 && w(o, 1))
            : ((o = Dl(e)), o.c(), w(o, 1), o.m(i.parentNode, i))
          : o &&
            (ce(),
            C(o, 1, 1, () => {
              o = null;
            }),
            ge());
    },
    i(r) {
      l || (w(o), (l = !0));
    },
    o(r) {
      C(o), (l = !1);
    },
    d(r) {
      r && M(t), o && o.d(r), r && M(i);
    },
  };
}
function xs(n) {
  let e,
    t = [],
    i = new Map(),
    l,
    o,
    r = n[0].length ? n[0] : n[6],
    f = [];
  for (let h = 0; h < r.length; h += 1) f[h] = Il(Al(n, r, h));
  const a = (h) =>
    C(f[h], 1, 1, () => {
      f[h] = null;
    });
  let s = Object.entries(n[5]);
  const c = (h) => h[10];
  for (let h = 0; h < s.length; h += 1) {
    let m = vl(n, s, h),
      p = c(m);
    i.set(p, (t[h] = Ml(p, m)));
  }
  return {
    c() {
      for (let h = 0; h < f.length; h += 1) f[h].c();
      e = y();
      for (let h = 0; h < t.length; h += 1) t[h].c();
      l = pn();
    },
    m(h, m) {
      for (let p = 0; p < f.length; p += 1) f[p].m(h, m);
      H(h, e, m);
      for (let p = 0; p < t.length; p += 1) t[p].m(h, m);
      H(h, l, m), (o = !0);
    },
    p(h, [m]) {
      if (m & 127) {
        r = h[0].length ? h[0] : h[6];
        let p;
        for (p = 0; p < r.length; p += 1) {
          const b = Al(h, r, p);
          f[p]
            ? (f[p].p(b, m), w(f[p], 1))
            : ((f[p] = Il(b)), f[p].c(), w(f[p], 1), f[p].m(e.parentNode, e));
        }
        for (ce(), p = r.length; p < f.length; p += 1) a(p);
        ge();
      }
      m & 36 &&
        ((s = Object.entries(h[5])),
        ce(),
        (t = br(t, m, c, 1, h, s, i, l.parentNode, wr, Ml, l, vl)),
        ge());
    },
    i(h) {
      if (!o) {
        for (let m = 0; m < r.length; m += 1) w(f[m]);
        for (let m = 0; m < s.length; m += 1) w(t[m]);
        o = !0;
      }
    },
    o(h) {
      f = f.filter(Boolean);
      for (let m = 0; m < f.length; m += 1) C(f[m]);
      for (let m = 0; m < t.length; m += 1) C(t[m]);
      o = !1;
    },
    d(h) {
      ci(f, h), h && M(e);
      for (let m = 0; m < t.length; m += 1) t[m].d(h);
      h && M(l);
    },
  };
}
function $s(n, e, t) {
  let i, l, o, r;
  ve(n, G, (p) => t(2, (l = p))),
    ve(n, ae, (p) => t(3, (o = p))),
    ve(n, nl, (p) => t(5, (r = p)));
  let { isReversed: f = !1 } = e,
    { iconsToShow: a = [] } = e,
    { iconsToNotShow: s = [] } = e,
    { options: c = {} } = e,
    { optionsForAll: h = {} } = e,
    m = l.showingOrder;
  return (
    (n.$$set = (p) => {
      "isReversed" in p && t(7, (f = p.isReversed)),
        "iconsToShow" in p && t(0, (a = p.iconsToShow)),
        "iconsToNotShow" in p && t(1, (s = p.iconsToNotShow)),
        "options" in p && t(8, (c = p.options)),
        "optionsForAll" in p && t(9, (h = p.optionsForAll));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 8 && t(4, (i = o.globalColorSettings.editSingleIconName)),
        n.$$.dirty & 132)
      ) {
        let p = l.showingOrder;
        f && (p = p.reverse());
      }
    }),
    [a, s, l, o, i, r, m, f, c, h]
  );
}
class gi extends be {
  constructor(e) {
    super();
    we(this, e, $s, xs, Se, {
      isReversed: 7,
      iconsToShow: 0,
      iconsToNotShow: 1,
      options: 8,
      optionsForAll: 9,
    });
  }
}
function Hl(n) {
  let e, t, i, l;
  const o = [ra, oa, la, ia, ta, na, ea],
    r = [];
  function f(a, s) {
    return a[1] == "center-bottom-row"
      ? 0
      : a[1] == "bottom-right-row"
      ? 1
      : a[1] == "left-bottom-column"
      ? 2
      : a[1] == "right-bottom-column"
      ? 3
      : a[1] == "top-left-row"
      ? 4
      : a[1] == "top-right-row"
      ? 5
      : a[1] == "standard"
      ? 6
      : -1;
  }
  return (
    ~(e = f(n)) && (t = r[e] = o[e](n)),
    {
      c() {
        t && t.c(), (i = pn());
      },
      m(a, s) {
        ~e && r[e].m(a, s), H(a, i, s), (l = !0);
      },
      p(a, s) {
        let c = e;
        (e = f(a)),
          e === c
            ? ~e && r[e].p(a, s)
            : (t &&
                (ce(),
                C(r[c], 1, 1, () => {
                  r[c] = null;
                }),
                ge()),
              ~e
                ? ((t = r[e]),
                  t ? t.p(a, s) : ((t = r[e] = o[e](a)), t.c()),
                  w(t, 1),
                  t.m(i.parentNode, i))
                : (t = null));
      },
      i(a) {
        l || (w(t), (l = !0));
      },
      o(a) {
        C(t), (l = !1);
      },
      d(a) {
        ~e && r[e].d(a), a && M(i);
      },
    }
  );
}
function ea(n) {
  let e, t, i;
  return (
    (t = new gi({})),
    {
      c() {
        (e = k("div")),
          E(t.$$.fragment),
          u(
            e,
            "class",
            "absolute bottom-[0.3vw] left-[0.3vw] flex flex-row standard-layout svelte-1w35tm2"
          ),
          N(e, "gap", n[0].iconBetweenSpacing + "px"),
          N(e, "margin-bottom", n[0].yAxisSpacing + "px"),
          N(e, "margin-left", n[0].xAxisSpacing + "px");
      },
      m(l, o) {
        H(l, e, o), F(t, e, null), (i = !0);
      },
      p(l, o) {
        (!i || o & 1) && N(e, "gap", l[0].iconBetweenSpacing + "px"),
          (!i || o & 1) && N(e, "margin-bottom", l[0].yAxisSpacing + "px"),
          (!i || o & 1) && N(e, "margin-left", l[0].xAxisSpacing + "px");
      },
      i(l) {
        i || (w(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && M(e), O(t);
      },
    }
  );
}
function na(n) {
  let e, t, i;
  return (
    (t = new gi({})),
    {
      c() {
        (e = k("div")),
          E(t.$$.fragment),
          u(e, "class", "absolute top-[0.3vw] right-[0.3vw] flex flex-row"),
          N(e, "gap", n[0].iconBetweenSpacing + "px"),
          N(e, "margin-bottom", n[0].yAxisSpacing + "px"),
          N(e, "margin-left", n[0].xAxisSpacing + "px");
      },
      m(l, o) {
        H(l, e, o), F(t, e, null), (i = !0);
      },
      p(l, o) {
        (!i || o & 1) && N(e, "gap", l[0].iconBetweenSpacing + "px"),
          (!i || o & 1) && N(e, "margin-bottom", l[0].yAxisSpacing + "px"),
          (!i || o & 1) && N(e, "margin-left", l[0].xAxisSpacing + "px");
      },
      i(l) {
        i || (w(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && M(e), O(t);
      },
    }
  );
}
function ta(n) {
  let e, t, i;
  return (
    (t = new gi({})),
    {
      c() {
        (e = k("div")),
          E(t.$$.fragment),
          u(e, "class", "absolute top-[0.3vw] left-[0.3vw] flex flex-row"),
          N(e, "gap", n[0].iconBetweenSpacing + "px"),
          N(e, "margin-bottom", n[0].yAxisSpacing + "px"),
          N(e, "margin-left", n[0].xAxisSpacing + "px");
      },
      m(l, o) {
        H(l, e, o), F(t, e, null), (i = !0);
      },
      p(l, o) {
        (!i || o & 1) && N(e, "gap", l[0].iconBetweenSpacing + "px"),
          (!i || o & 1) && N(e, "margin-bottom", l[0].yAxisSpacing + "px"),
          (!i || o & 1) && N(e, "margin-left", l[0].xAxisSpacing + "px");
      },
      i(l) {
        i || (w(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && M(e), O(t);
      },
    }
  );
}
function ia(n) {
  let e, t, i, l;
  return (
    (i = new gi({})),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          E(i.$$.fragment),
          u(t, "class", "static flex flex-col"),
          N(t, "gap", n[0].iconBetweenSpacing + "px"),
          N(t, "margin-bottom", n[0].yAxisSpacing + "px"),
          N(t, "margin-left", n[0].xAxisSpacing + "px"),
          u(e, "class", "absolute bottom-[0.3vw] right-[1vh]");
      },
      m(o, r) {
        H(o, e, r), g(e, t), F(i, t, null), (l = !0);
      },
      p(o, r) {
        (!l || r & 1) && N(t, "gap", o[0].iconBetweenSpacing + "px"),
          (!l || r & 1) && N(t, "margin-bottom", o[0].yAxisSpacing + "px"),
          (!l || r & 1) && N(t, "margin-left", o[0].xAxisSpacing + "px");
      },
      i(o) {
        l || (w(i.$$.fragment, o), (l = !0));
      },
      o(o) {
        C(i.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && M(e), O(i);
      },
    }
  );
}
function la(n) {
  let e, t, i, l;
  return (
    (i = new gi({})),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          E(i.$$.fragment),
          u(t, "class", "static flex flex-col"),
          N(t, "gap", n[0].iconBetweenSpacing + "px"),
          N(t, "margin-bottom", n[0].yAxisSpacing + "px"),
          N(t, "margin-left", n[0].xAxisSpacing + "px"),
          u(e, "class", "absolute bottom-[0.3vw] left-[1vh]");
      },
      m(o, r) {
        H(o, e, r), g(e, t), F(i, t, null), (l = !0);
      },
      p(o, r) {
        (!l || r & 1) && N(t, "gap", o[0].iconBetweenSpacing + "px"),
          (!l || r & 1) && N(t, "margin-bottom", o[0].yAxisSpacing + "px"),
          (!l || r & 1) && N(t, "margin-left", o[0].xAxisSpacing + "px");
      },
      i(o) {
        l || (w(i.$$.fragment, o), (l = !0));
      },
      o(o) {
        C(i.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && M(e), O(i);
      },
    }
  );
}
function oa(n) {
  let e, t, i;
  return (
    (t = new gi({})),
    {
      c() {
        (e = k("div")),
          E(t.$$.fragment),
          u(e, "class", "absolute bottom-[0.3vw] right-[0.3vw] flex flex-row"),
          N(e, "gap", n[0].iconBetweenSpacing + "px"),
          N(e, "margin-bottom", n[0].yAxisSpacing + "px"),
          N(e, "margin-left", n[0].xAxisSpacing + "px");
      },
      m(l, o) {
        H(l, e, o), F(t, e, null), (i = !0);
      },
      p(l, o) {
        (!i || o & 1) && N(e, "gap", l[0].iconBetweenSpacing + "px"),
          (!i || o & 1) && N(e, "margin-bottom", l[0].yAxisSpacing + "px"),
          (!i || o & 1) && N(e, "margin-left", l[0].xAxisSpacing + "px");
      },
      i(l) {
        i || (w(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && M(e), O(t);
      },
    }
  );
}
function ra(n) {
  let e, t, i, l, o;
  return (
    (l = new gi({})),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (i = k("div")),
          E(l.$$.fragment),
          u(i, "class", "flex flex-row"),
          N(i, "gap", n[0].iconBetweenSpacing + "px"),
          N(i, "margin-bottom", n[0].yAxisSpacing + "px"),
          N(i, "margin-left", n[0].xAxisSpacing + "px"),
          u(t, "class", "static flex flex-row mx-auto"),
          N(t, "width", "max-content"),
          u(e, "class", "absolute bottom-[0.3vw] w-100vw");
      },
      m(r, f) {
        H(r, e, f), g(e, t), g(t, i), F(l, i, null), (o = !0);
      },
      p(r, f) {
        (!o || f & 1) && N(i, "gap", r[0].iconBetweenSpacing + "px"),
          (!o || f & 1) && N(i, "margin-bottom", r[0].yAxisSpacing + "px"),
          (!o || f & 1) && N(i, "margin-left", r[0].xAxisSpacing + "px");
      },
      i(r) {
        o || (w(l.$$.fragment, r), (o = !0));
      },
      o(r) {
        C(l.$$.fragment, r), (o = !1);
      },
      d(r) {
        r && M(e), O(l);
      },
    }
  );
}
function sa(n) {
  let e,
    t,
    i = (n[2].show || yn) && Hl(n);
  return {
    c() {
      i && i.c(), (e = pn());
    },
    m(l, o) {
      i && i.m(l, o), H(l, e, o), (t = !0);
    },
    p(l, [o]) {
      l[2].show || yn
        ? i
          ? (i.p(l, o), o & 4 && w(i, 1))
          : ((i = Hl(l)), i.c(), w(i, 1), i.m(e.parentNode, e))
        : i &&
          (ce(),
          C(i, 1, 1, () => {
            i = null;
          }),
          ge());
    },
    i(l) {
      t || (w(i), (t = !0));
    },
    o(l) {
      C(i), (t = !1);
    },
    d(l) {
      i && i.d(l), l && M(e);
    },
  };
}
function aa(n, e, t) {
  let i, l;
  ve(n, xn, (r) => t(0, (i = r))), ve(n, G, (r) => t(2, (l = r)));
  let o = "standard";
  return (
    (n.$$.update = () => {
      n.$$.dirty & 1 && t(1, (o = i.layout));
    }),
    [i, o, l]
  );
}
class ua extends be {
  constructor(e) {
    super();
    we(this, e, aa, sa, Se, {});
  }
}
function fa(n) {
  let e,
    t,
    i = (n[2] && n[3] ? n[3] : n[0]) + "",
    l,
    o,
    r,
    f;
  return {
    c() {
      (e = k("button")),
        (t = k("span")),
        (l = Ie(i)),
        u(t, "class", "text-black py-3 font-bold"),
        N(e, "backdrop-filter", "drop-shadow(4px 4px 4px gray)"),
        u(
          e,
          "class",
          (o =
            "button bg-[#bd87ee] text-sm text-white py-2 px-4 my-2 w-[150px] uppercase select-none disabled:opacity-25 disabled:cursor-not-allowed " +
            n[1])
        ),
        (e.disabled = n[2]);
    },
    m(a, s) {
      H(a, e, s), g(e, t), g(t, l), r || ((f = tn(e, "click", n[4])), (r = !0));
    },
    p(a, [s]) {
      s & 13 && i !== (i = (a[2] && a[3] ? a[3] : a[0]) + "") && In(l, i),
        s & 2 &&
          o !==
            (o =
              "button bg-[#bd87ee] text-sm text-white py-2 px-4 my-2 w-[150px] uppercase select-none disabled:opacity-25 disabled:cursor-not-allowed " +
              a[1]) &&
          u(e, "class", o),
        s & 4 && (e.disabled = a[2]);
    },
    i: Ee,
    o: Ee,
    d(a) {
      a && M(e), (r = !1), f();
    },
  };
}
function ca(n, e, t) {
  let { name: i = "" } = e,
    { buttonClass: l = "" } = e,
    { disable: o = !1 } = e,
    { disableText: r = "" } = e;
  function f(a) {
    Sr.call(this, n, a);
  }
  return (
    (n.$$set = (a) => {
      "name" in a && t(0, (i = a.name)),
        "buttonClass" in a && t(1, (l = a.buttonClass)),
        "disable" in a && t(2, (o = a.disable)),
        "disableText" in a && t(3, (r = a.disableText));
    }),
    [i, l, o, r, f]
  );
}
class Lt extends be {
  constructor(e) {
    super();
    we(this, e, ca, fa, Se, {
      name: 0,
      buttonClass: 1,
      disable: 2,
      disableText: 3,
    });
  }
}
function ga(n) {
  let e, t;
  return {
    c() {
      (e = k("span")),
        (t = Ie(n[1])),
        u(e, "class", "primary-text svelte-18ttrkn");
    },
    m(i, l) {
      H(i, e, l), g(e, t);
    },
    p(i, l) {
      l & 2 && In(t, i[1]);
    },
    d(i) {
      i && M(e);
    },
  };
}
function da(n) {
  let e, t, i, l, o, r;
  return {
    c() {
      (e = k("div")),
        (t = k("span")),
        (i = Ie(n[1])),
        (l = y()),
        (o = k("span")),
        (r = Ie(n[2])),
        u(t, "class", "primary-text mb-1 svelte-18ttrkn"),
        u(o, "class", "secondary-text svelte-18ttrkn"),
        u(e, "class", "flex flex-col");
    },
    m(f, a) {
      H(f, e, a), g(e, t), g(t, i), g(e, l), g(e, o), g(o, r);
    },
    p(f, a) {
      a & 2 && In(i, f[1]), a & 4 && In(r, f[2]);
    },
    d(f) {
      f && M(e);
    },
  };
}
function ha(n) {
  let e, t, i, l, o, r;
  function f(c, h) {
    return c[2] ? da : ga;
  }
  let a = f(n),
    s = a(n);
  return {
    c() {
      (e = k("label")),
        (t = k("input")),
        (i = y()),
        s.c(),
        u(t, "class", "cursor-pointer svelte-18ttrkn"),
        u(t, "type", "checkbox"),
        u(t, "name", "checkbox"),
        u(
          e,
          "class",
          (l =
            "flex flex-row gap-4 py-3 cursor-pointer select-none " +
            (n[2] ? "items-center" : ""))
        );
    },
    m(c, h) {
      H(c, e, h),
        g(e, t),
        (t.checked = n[0]),
        g(e, i),
        s.m(e, null),
        o || ((r = [tn(t, "change", n[5]), tn(t, "click", n[3])]), (o = !0));
    },
    p(c, [h]) {
      h & 1 && (t.checked = c[0]),
        a === (a = f(c)) && s
          ? s.p(c, h)
          : (s.d(1), (s = a(c)), s && (s.c(), s.m(e, null))),
        h & 4 &&
          l !==
            (l =
              "flex flex-row gap-4 py-3 cursor-pointer select-none " +
              (c[2] ? "items-center" : "")) &&
          u(e, "class", l);
    },
    i: Ee,
    o: Ee,
    d(c) {
      c && M(e), s.d(), (o = !1), Xi(r);
    },
  };
}
function ma(n, e, t) {
  let { primaryText: i = "" } = e,
    { secondaryText: l = "" } = e,
    { checked: o } = e,
    { handleUpdateFunction: r = null } = e;
  function f(s) {
    r && r(s.target.checked);
  }
  function a() {
    (o = this.checked), t(0, o);
  }
  return (
    (n.$$set = (s) => {
      "primaryText" in s && t(1, (i = s.primaryText)),
        "secondaryText" in s && t(2, (l = s.secondaryText)),
        "checked" in s && t(0, (o = s.checked)),
        "handleUpdateFunction" in s && t(4, (r = s.handleUpdateFunction));
    }),
    [o, i, l, f, r, a]
  );
}
class nn extends be {
  constructor(e) {
    super();
    we(this, e, ma, ha, Se, {
      primaryText: 1,
      secondaryText: 2,
      checked: 0,
      handleUpdateFunction: 4,
    });
  }
}
function _a(n) {
  let e, t;
  return {
    c() {
      (e = k("span")),
        (t = Ie(n[3])),
        u(e, "class", "primary-text svelte-c4h5cp");
    },
    m(i, l) {
      H(i, e, l), g(e, t);
    },
    p(i, l) {
      l & 8 && In(t, i[3]);
    },
    d(i) {
      i && M(e);
    },
  };
}
function pa(n) {
  let e;
  function t(o, r) {
    return o[0] ? wa : ba;
  }
  let i = t(n),
    l = i(n);
  return {
    c() {
      l.c(), (e = pn());
    },
    m(o, r) {
      l.m(o, r), H(o, e, r);
    },
    p(o, r) {
      i === (i = t(o)) && l
        ? l.p(o, r)
        : (l.d(1), (l = i(o)), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(o) {
      l.d(o), o && M(e);
    },
  };
}
function ba(n) {
  let e, t;
  return {
    c() {
      (e = k("span")),
        (t = Ie(n[2])),
        u(e, "class", "primary-text svelte-c4h5cp");
    },
    m(i, l) {
      H(i, e, l), g(e, t);
    },
    p(i, l) {
      l & 4 && In(t, i[2]);
    },
    d(i) {
      i && M(e);
    },
  };
}
function wa(n) {
  let e, t;
  return {
    c() {
      (e = k("span")),
        (t = Ie(n[1])),
        u(e, "class", "primary-text svelte-c4h5cp");
    },
    m(i, l) {
      H(i, e, l), g(e, t);
    },
    p(i, l) {
      l & 2 && In(t, i[1]);
    },
    d(i) {
      i && M(e);
    },
  };
}
function Sa(n) {
  let e, t, i, l, o, r;
  function f(c, h) {
    return c[1] && c[2] ? pa : _a;
  }
  let a = f(n),
    s = a(n);
  return {
    c() {
      (e = k("label")),
        (t = k("input")),
        (l = y()),
        s.c(),
        u(t, "class", "cursor-pointer svelte-c4h5cp"),
        u(t, "style", (i = n[4] ? "margin-left:auto; margin-right:auto;" : "")),
        u(t, "type", "checkbox"),
        u(t, "role", "switch"),
        u(
          e,
          "class",
          "switch cursor-pointer flex flex-row pt-2 pb-4 -ml-2 gap-1 select-none svelte-c4h5cp"
        );
    },
    m(c, h) {
      H(c, e, h),
        g(e, t),
        (t.checked = n[0]),
        g(e, l),
        s.m(e, null),
        o || ((r = [tn(t, "change", n[7]), tn(t, "click", n[5])]), (o = !0));
    },
    p(c, [h]) {
      h & 16 &&
        i !== (i = c[4] ? "margin-left:auto; margin-right:auto;" : "") &&
        u(t, "style", i),
        h & 1 && (t.checked = c[0]),
        a === (a = f(c)) && s
          ? s.p(c, h)
          : (s.d(1), (s = a(c)), s && (s.c(), s.m(e, null)));
    },
    i: Ee,
    o: Ee,
    d(c) {
      c && M(e), s.d(), (o = !1), Xi(r);
    },
  };
}
function ka(n, e, t) {
  let { checked: i = !0 } = e,
    { checkedText: l = "" } = e,
    { unCheckedText: o = "" } = e,
    { text: r = "" } = e,
    { center: f = !1 } = e,
    { handleUpdateFunction: a = null } = e;
  function s(h) {
    a && a(h.target.checked);
  }
  function c() {
    (i = this.checked), t(0, i);
  }
  return (
    (n.$$set = (h) => {
      "checked" in h && t(0, (i = h.checked)),
        "checkedText" in h && t(1, (l = h.checkedText)),
        "unCheckedText" in h && t(2, (o = h.unCheckedText)),
        "text" in h && t(3, (r = h.text)),
        "center" in h && t(4, (f = h.center)),
        "handleUpdateFunction" in h && t(6, (a = h.handleUpdateFunction));
    }),
    [i, l, o, r, f, s, a, c]
  );
}
class Wi extends be {
  constructor(e) {
    super();
    we(this, e, ka, Sa, Se, {
      checked: 0,
      checkedText: 1,
      unCheckedText: 2,
      text: 3,
      center: 4,
      handleUpdateFunction: 6,
    });
  }
}
function Ca(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h,
    m,
    p,
    b,
    S,
    v,
    d,
    _,
    A,
    j,
    le,
    J,
    B,
    Q,
    oe,
    z,
    re,
    W,
    L,
    te,
    I,
    ue,
    ee,
    T,
    fe,
    q,
    Y,
    ke,
    me,
    ne,
    P,
    he,
    Le,
    gn,
    ie,
    Me,
    wn,
    ye,
    ln,
    Mn,
    De,
    Sn,
    nt,
    an,
    Hn,
    U,
    on,
    Ye,
    X,
    kn,
    bt,
    En,
    Gn,
    at,
    Fn,
    Cn,
    wt,
    Ce,
    Vn,
    ut,
    vn,
    On,
    ft,
    pe,
    Yn,
    St,
    Rn,
    Pn,
    kt,
    zn,
    Re,
    Wn,
    dn,
    tt,
    Wt,
    un,
    Jn,
    Jt,
    Xe,
    Ct,
    ct,
    hn,
    gt,
    Ln,
    mn,
    It,
    qn,
    it,
    Zt,
    rn,
    vt,
    Nn,
    fn,
    Zn,
    Kt,
    Ue,
    At,
    dt,
    _n,
    ht,
    Bn,
    jn,
    Qt,
    Tn,
    lt,
    yt,
    Oe,
    mt,
    _t;
  (s = new Lt({
    props: {
      name: "Reset Hud",
      buttonClass: "whitespace-nowrap hover:bg-red-600 py-4",
      disable: n[1].isRestarting,
      disableText: "Resetting Hud...",
    },
  })),
    s.$on("click", n[4]),
    (p = new Lt({
      props: {
        name: "Reset Settings",
        buttonClass: "hover:bg-red-600 mt-4 py-4",
      },
    })),
    p.$on("click", n[5]);
  function ot(V) {
    n[7](V);
  }
  let Dt = {
    primaryText: "Show Minimap Only in Vehicle",
    secondaryText:
      "Disabling this will always keep your minimap on your screen",
    handleUpdateFunction: n[6],
  };
  n[1].isOutMapChecked !== void 0 && (Dt.checked = n[1].isOutMapChecked),
    (J = new nn({ props: Dt })),
    Z.push(() => x(J, "checked", ot));
  function ni(V) {
    n[9](V);
  }
  let Kn = {
    primaryText: "Show Compass Only in Vehicle",
    secondaryText:
      "Disabling this will always keep your compass on your screen",
    handleUpdateFunction: n[8],
  };
  n[1].isOutCompassChecked !== void 0 &&
    (Kn.checked = n[1].isOutCompassChecked),
    (oe = new nn({ props: Kn })),
    Z.push(() => x(oe, "checked", ni));
  function xt(V) {
    n[11](V);
  }
  let Pe = {
    primaryText: "Show Compass Follow Cam",
    secondaryText:
      "Disabling this will make it so you can no longer use your mouse to rotate the compass around",
    handleUpdateFunction: n[10],
  };
  n[1].isCompassFollowChecked !== void 0 &&
    (Pe.checked = n[1].isCompassFollowChecked),
    (W = new nn({ props: Pe })),
    Z.push(() => x(W, "checked", xt));
  function Ve(V) {
    n[13](V);
  }
  let di = {
    primaryText: "Menu Sound Effect Enabled",
    handleUpdateFunction: n[12],
  };
  n[1].isOpenMenuSoundsChecked !== void 0 &&
    (di.checked = n[1].isOpenMenuSoundsChecked),
    (q = new nn({ props: di })),
    Z.push(() => x(q, "checked", Ve));
  function ti(V) {
    n[15](V);
  }
  let hi = {
    primaryText: "Reset Hud Sound Effects Enabled",
    handleUpdateFunction: n[14],
  };
  n[1].isResetSoundsChecked !== void 0 &&
    (hi.checked = n[1].isResetSoundsChecked),
    (me = new nn({ props: hi })),
    Z.push(() => x(me, "checked", ti));
  function ii(V) {
    n[17](V);
  }
  let mi = {
    primaryText: "GUI Sound Effects Enabled",
    handleUpdateFunction: n[16],
  };
  n[1].isListSoundsChecked !== void 0 &&
    (mi.checked = n[1].isListSoundsChecked),
    (he = new nn({ props: mi })),
    Z.push(() => x(he, "checked", ii));
  function li(V) {
    n[19](V);
  }
  let qe = {
    primaryText: "Map Notifications Enabled",
    handleUpdateFunction: n[18],
  };
  n[1].isMapNotifyChecked !== void 0 && (qe.checked = n[1].isMapNotifyChecked),
    (ie = new nn({ props: qe })),
    Z.push(() => x(ie, "checked", li));
  function Ne(V) {
    n[21](V);
  }
  let _i = {
    primaryText: "Low Fuel Alert Enabled",
    handleUpdateFunction: n[20],
  };
  n[1].isLowFuelAlertChecked !== void 0 &&
    (_i.checked = n[1].isLowFuelAlertChecked),
    (ye = new nn({ props: _i })),
    Z.push(() => x(ye, "checked", Ne));
  function oi(V) {
    n[23](V);
  }
  let pi = {
    primaryText: "Cinematic Mode Notifications",
    handleUpdateFunction: n[22],
  };
  n[1].isCinematicNotifyChecked !== void 0 &&
    (pi.checked = n[1].isCinematicNotifyChecked),
    (De = new nn({ props: pi })),
    Z.push(() => x(De, "checked", oi));
  function ri(V) {
    n[25](V);
  }
  let Be = { primaryText: "Show Health Always", handleUpdateFunction: n[24] };
  n[2].dynamicIcons.health !== void 0 &&
    (Be.checked = n[2].dynamicIcons.health),
    (X = new nn({ props: Be })),
    Z.push(() => x(X, "checked", ri));
  function je(V) {
    n[27](V);
  }
  let Ge = { primaryText: "Show Armor Always", handleUpdateFunction: n[26] };
  n[2].dynamicIcons.armor !== void 0 && (Ge.checked = n[2].dynamicIcons.armor),
    (En = new nn({ props: Ge })),
    Z.push(() => x(En, "checked", je));
  function We(V) {
    n[29](V);
  }
  let Je = { primaryText: "Show Hunger Always", handleUpdateFunction: n[28] };
  n[2].dynamicIcons.hunger !== void 0 &&
    (Je.checked = n[2].dynamicIcons.hunger),
    (Fn = new nn({ props: Je })),
    Z.push(() => x(Fn, "checked", We));
  function Ze(V) {
    n[31](V);
  }
  let bi = { primaryText: "Show Thirst Always", handleUpdateFunction: n[30] };
  n[2].dynamicIcons.thirst !== void 0 &&
    (bi.checked = n[2].dynamicIcons.thirst),
    (Ce = new nn({ props: bi })),
    Z.push(() => x(Ce, "checked", Ze));
  function si(V) {
    n[33](V);
  }
  let Ke = { primaryText: "Show Stress Always", handleUpdateFunction: n[32] };
  n[2].dynamicIcons.stress !== void 0 &&
    (Ke.checked = n[2].dynamicIcons.stress),
    (vn = new nn({ props: Ke })),
    Z.push(() => x(vn, "checked", si));
  function Qe(V) {
    n[35](V);
  }
  let xe = { primaryText: "Show Oxygen Always", handleUpdateFunction: n[34] };
  n[2].dynamicIcons.oxygen !== void 0 &&
    (xe.checked = n[2].dynamicIcons.oxygen),
    (pe = new nn({ props: xe })),
    Z.push(() => x(pe, "checked", Qe)),
    (Wn = new Wi({
      props: {
        checked: n[1].isToggleMapShapeChecked == "circle",
        checkedText: "Minimap Circle",
        unCheckedText: "Minimap Square",
        handleUpdateFunction: n[36],
      },
    }));
  function wi(V) {
    n[38](V);
  }
  let ai = { primaryText: "Minimap Enabled", handleUpdateFunction: n[37] };
  n[1].isMapEnabledChecked !== void 0 &&
    (ai.checked = n[1].isMapEnabledChecked),
    (un = new nn({ props: ai })),
    Z.push(() => x(un, "checked", wi));
  function Si(V) {
    n[40](V);
  }
  let ui = {
    primaryText: "Minimap Borders Enabled",
    handleUpdateFunction: n[39],
  };
  n[1].isToggleMapBordersChecked !== void 0 &&
    (ui.checked = n[1].isToggleMapBordersChecked),
    (Xe = new nn({ props: ui })),
    Z.push(() => x(Xe, "checked", Si));
  function ki(V) {
    n[42](V);
  }
  let fi = { primaryText: "Show Engine Always", handleUpdateFunction: n[41] };
  n[2].dynamicIcons.engine !== void 0 &&
    (fi.checked = n[2].dynamicIcons.engine),
    (hn = new nn({ props: fi })),
    Z.push(() => x(hn, "checked", ki));
  function Ci(V) {
    n[44](V);
  }
  let ze = { primaryText: "Show Nitro Always", handleUpdateFunction: n[43] };
  n[2].dynamicIcons.nitro !== void 0 && (ze.checked = n[2].dynamicIcons.nitro),
    (mn = new nn({ props: ze })),
    Z.push(() => x(mn, "checked", Ci));
  function R(V) {
    n[46](V);
  }
  let de = {
    primaryText: "Compass Enabled",
    handleUpdateFunction: n[45],
    secondaryText:
      "Disabling this will make it so you can't see the compass navigation",
  };
  n[1].isShowCompassChecked !== void 0 &&
    (de.checked = n[1].isShowCompassChecked),
    (fn = new nn({ props: de })),
    Z.push(() => x(fn, "checked", R));
  function vi(V) {
    n[48](V);
  }
  let $t = {
    primaryText: "Show Street Names Enabled",
    handleUpdateFunction: n[47],
    secondaryText:
      "Disabling this will make it so you can't see the street names / locations",
  };
  n[1].isShowStreetsChecked !== void 0 &&
    ($t.checked = n[1].isShowStreetsChecked),
    (Ue = new nn({ props: $t })),
    Z.push(() => x(Ue, "checked", vi));
  function $e(V) {
    n[50](V);
  }
  let D = {
    primaryText: "Show Compass Pointer Enabled",
    handleUpdateFunction: n[49],
    secondaryText:
      "Disabling this will make it so you can't see your pointer index to pinpoint your exact cardinal directions",
  };
  n[1].isPointerShowChecked !== void 0 &&
    (D.checked = n[1].isPointerShowChecked),
    (_n = new nn({ props: D })),
    Z.push(() => x(_n, "checked", $e));
  function se(V) {
    n[52](V);
  }
  let Tt = {
    primaryText: "Show Cinematic Bars Enabled",
    handleUpdateFunction: n[51],
  };
  return (
    n[1].isCineamticModeChecked !== void 0 &&
      (Tt.checked = n[1].isCineamticModeChecked),
    (Oe = new nn({ props: Tt })),
    Z.push(() => x(Oe, "checked", se)),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (i = k("div")),
          (l = k("img")),
          (r = y()),
          (f = k("div")),
          (f.innerHTML = '<p class="svelte-1uu0ff2">Reset HUD</p>'),
          (a = y()),
          E(s.$$.fragment),
          (c = y()),
          (h = k("p")),
          (h.textContent =
            "Are you having issues with your HUD? Reset it here, or type /resethud"),
          (m = y()),
          E(p.$$.fragment),
          (b = y()),
          (S = k("p")),
          (S.textContent =
            "Wanna revert your settings back to default? Some changes might only change after relogging."),
          (v = y()),
          (d = k("hr")),
          (_ = y()),
          (A = k("div")),
          (A.innerHTML = '<p class="svelte-1uu0ff2">Options</p>'),
          (j = y()),
          (le = k("div")),
          E(J.$$.fragment),
          (Q = y()),
          E(oe.$$.fragment),
          (re = y()),
          E(W.$$.fragment),
          (te = y()),
          (I = k("hr")),
          (ue = y()),
          (ee = k("div")),
          (ee.innerHTML = '<p class="svelte-1uu0ff2">Notifications</p>'),
          (T = y()),
          (fe = k("div")),
          E(q.$$.fragment),
          (ke = y()),
          E(me.$$.fragment),
          (P = y()),
          E(he.$$.fragment),
          (gn = y()),
          E(ie.$$.fragment),
          (wn = y()),
          E(ye.$$.fragment),
          (Mn = y()),
          E(De.$$.fragment),
          (nt = y()),
          (an = k("hr")),
          (Hn = y()),
          (U = k("div")),
          (U.innerHTML = '<p class="svelte-1uu0ff2">Status</p>'),
          (on = y()),
          (Ye = k("div")),
          E(X.$$.fragment),
          (bt = y()),
          E(En.$$.fragment),
          (at = y()),
          E(Fn.$$.fragment),
          (wt = y()),
          E(Ce.$$.fragment),
          (ut = y()),
          E(vn.$$.fragment),
          (ft = y()),
          E(pe.$$.fragment),
          (St = y()),
          (Rn = k("hr")),
          (Pn = y()),
          (kt = k("div")),
          (kt.innerHTML = '<p class="svelte-1uu0ff2">Vehicle</p>'),
          (zn = y()),
          (Re = k("div")),
          E(Wn.$$.fragment),
          (dn = y()),
          (tt = k("p")),
          (tt.textContent =
            "Whether it's square or circle you desire, you have the ability to choose!"),
          (Wt = y()),
          E(un.$$.fragment),
          (Jt = y()),
          E(Xe.$$.fragment),
          (ct = y()),
          E(hn.$$.fragment),
          (Ln = y()),
          E(mn.$$.fragment),
          (qn = y()),
          (it = k("hr")),
          (Zt = y()),
          (rn = k("div")),
          (rn.innerHTML = '<p class="svelte-1uu0ff2">Compass</p>'),
          (vt = y()),
          (Nn = k("div")),
          E(fn.$$.fragment),
          (Kt = y()),
          E(Ue.$$.fragment),
          (dt = y()),
          E(_n.$$.fragment),
          (Bn = y()),
          (jn = k("hr")),
          (Qt = y()),
          (Tn = k("div")),
          (Tn.innerHTML = '<p class="svelte-1uu0ff2">Cinematic Mode</p>'),
          (lt = y()),
          (yt = k("div")),
          E(Oe.$$.fragment),
          bl(l.src, (o = n[0])) || u(l, "src", o),
          u(l, "alt", "logo"),
          u(l, "class", "imgur svelte-1uu0ff2"),
          u(
            i,
            "class",
            "absolute right-10 top-10 w-[15%] select-none pointer-events-none"
          ),
          u(f, "class", "-mx-4 mb-4 text-2xl text-white"),
          u(h, "class", "text-base svelte-1uu0ff2"),
          u(S, "class", "text-base svelte-1uu0ff2"),
          u(t, "class", "relative mx-4 mb-5 mt-3"),
          u(A, "class", "my-3 text-xl text-white"),
          u(le, "class", "mx-4 mb-4 flex flex-col"),
          u(ee, "class", "my-3 text-xl text-white"),
          u(fe, "class", "mx-4 mb-4 flex flex-col"),
          u(U, "class", "my-3 text-xl text-white"),
          u(Ye, "class", "mx-4 mb-4 flex flex-col"),
          u(kt, "class", "my-3 text-xl text-white"),
          u(tt, "class", "font-semibold text-base pb-2 svelte-1uu0ff2"),
          u(Re, "class", "mx-4 mb-4 flex flex-col"),
          u(rn, "class", "my-3 text-xl text-white"),
          u(Nn, "class", "mx-4 mb-4 flex flex-col"),
          u(Tn, "class", "my-3 text-xl text-white"),
          u(yt, "class", "mx-4 mb-4 flex flex-row gap-5"),
          u(e, "class", "text-sm flex flex-col text-[#e8e8e8]");
      },
      m(V, Ae) {
        H(V, e, Ae),
          g(e, t),
          g(t, i),
          g(i, l),
          g(t, r),
          g(t, f),
          g(t, a),
          F(s, t, null),
          g(t, c),
          g(t, h),
          g(t, m),
          F(p, t, null),
          g(t, b),
          g(t, S),
          g(e, v),
          g(e, d),
          g(e, _),
          g(e, A),
          g(e, j),
          g(e, le),
          F(J, le, null),
          g(le, Q),
          F(oe, le, null),
          g(le, re),
          F(W, le, null),
          g(e, te),
          g(e, I),
          g(e, ue),
          g(e, ee),
          g(e, T),
          g(e, fe),
          F(q, fe, null),
          g(fe, ke),
          F(me, fe, null),
          g(fe, P),
          F(he, fe, null),
          g(fe, gn),
          F(ie, fe, null),
          g(fe, wn),
          F(ye, fe, null),
          g(fe, Mn),
          F(De, fe, null),
          g(e, nt),
          g(e, an),
          g(e, Hn),
          g(e, U),
          g(e, on),
          g(e, Ye),
          F(X, Ye, null),
          g(Ye, bt),
          F(En, Ye, null),
          g(Ye, at),
          F(Fn, Ye, null),
          g(Ye, wt),
          F(Ce, Ye, null),
          g(Ye, ut),
          F(vn, Ye, null),
          g(Ye, ft),
          F(pe, Ye, null),
          g(e, St),
          g(e, Rn),
          g(e, Pn),
          g(e, kt),
          g(e, zn),
          g(e, Re),
          F(Wn, Re, null),
          g(Re, dn),
          g(Re, tt),
          g(Re, Wt),
          F(un, Re, null),
          g(Re, Jt),
          F(Xe, Re, null),
          g(Re, ct),
          F(hn, Re, null),
          g(Re, Ln),
          F(mn, Re, null),
          g(e, qn),
          g(e, it),
          g(e, Zt),
          g(e, rn),
          g(e, vt),
          g(e, Nn),
          F(fn, Nn, null),
          g(Nn, Kt),
          F(Ue, Nn, null),
          g(Nn, dt),
          F(_n, Nn, null),
          g(e, Bn),
          g(e, jn),
          g(e, Qt),
          g(e, Tn),
          g(e, lt),
          g(e, yt),
          F(Oe, yt, null),
          (_t = !0);
      },
      p(V, Ae) {
        (!_t || (Ae[0] & 1 && !bl(l.src, (o = V[0])))) && u(l, "src", o);
        const Mt = {};
        Ae[0] & 2 && (Mt.disable = V[1].isRestarting), s.$set(Mt);
        const Ht = {};
        !B &&
          Ae[0] & 2 &&
          ((B = !0), (Ht.checked = V[1].isOutMapChecked), $(() => (B = !1))),
          J.$set(Ht);
        const Et = {};
        !z &&
          Ae[0] & 2 &&
          ((z = !0),
          (Et.checked = V[1].isOutCompassChecked),
          $(() => (z = !1))),
          oe.$set(Et);
        const Ft = {};
        !L &&
          Ae[0] & 2 &&
          ((L = !0),
          (Ft.checked = V[1].isCompassFollowChecked),
          $(() => (L = !1))),
          W.$set(Ft);
        const Ot = {};
        !Y &&
          Ae[0] & 2 &&
          ((Y = !0),
          (Ot.checked = V[1].isOpenMenuSoundsChecked),
          $(() => (Y = !1))),
          q.$set(Ot);
        const Yt = {};
        !ne &&
          Ae[0] & 2 &&
          ((ne = !0),
          (Yt.checked = V[1].isResetSoundsChecked),
          $(() => (ne = !1))),
          me.$set(Yt);
        const Xt = {};
        !Le &&
          Ae[0] & 2 &&
          ((Le = !0),
          (Xt.checked = V[1].isListSoundsChecked),
          $(() => (Le = !1))),
          he.$set(Xt);
        const Ut = {};
        !Me &&
          Ae[0] & 2 &&
          ((Me = !0),
          (Ut.checked = V[1].isMapNotifyChecked),
          $(() => (Me = !1))),
          ie.$set(Ut);
        const Vt = {};
        !ln &&
          Ae[0] & 2 &&
          ((ln = !0),
          (Vt.checked = V[1].isLowFuelAlertChecked),
          $(() => (ln = !1))),
          ye.$set(Vt);
        const Rt = {};
        !Sn &&
          Ae[0] & 2 &&
          ((Sn = !0),
          (Rt.checked = V[1].isCinematicNotifyChecked),
          $(() => (Sn = !1))),
          De.$set(Rt);
        const Ai = {};
        !kn &&
          Ae[0] & 4 &&
          ((kn = !0),
          (Ai.checked = V[2].dynamicIcons.health),
          $(() => (kn = !1))),
          X.$set(Ai);
        const yi = {};
        !Gn &&
          Ae[0] & 4 &&
          ((Gn = !0),
          (yi.checked = V[2].dynamicIcons.armor),
          $(() => (Gn = !1))),
          En.$set(yi);
        const Ii = {};
        !Cn &&
          Ae[0] & 4 &&
          ((Cn = !0),
          (Ii.checked = V[2].dynamicIcons.hunger),
          $(() => (Cn = !1))),
          Fn.$set(Ii);
        const Di = {};
        !Vn &&
          Ae[0] & 4 &&
          ((Vn = !0),
          (Di.checked = V[2].dynamicIcons.thirst),
          $(() => (Vn = !1))),
          Ce.$set(Di);
        const Ti = {};
        !On &&
          Ae[0] & 4 &&
          ((On = !0),
          (Ti.checked = V[2].dynamicIcons.stress),
          $(() => (On = !1))),
          vn.$set(Ti);
        const Mi = {};
        !Yn &&
          Ae[0] & 4 &&
          ((Yn = !0),
          (Mi.checked = V[2].dynamicIcons.oxygen),
          $(() => (Yn = !1))),
          pe.$set(Mi);
        const rl = {};
        Ae[0] & 2 && (rl.checked = V[1].isToggleMapShapeChecked == "circle"),
          Wn.$set(rl);
        const sl = {};
        !Jn &&
          Ae[0] & 2 &&
          ((Jn = !0),
          (sl.checked = V[1].isMapEnabledChecked),
          $(() => (Jn = !1))),
          un.$set(sl);
        const al = {};
        !Ct &&
          Ae[0] & 2 &&
          ((Ct = !0),
          (al.checked = V[1].isToggleMapBordersChecked),
          $(() => (Ct = !1))),
          Xe.$set(al);
        const ul = {};
        !gt &&
          Ae[0] & 4 &&
          ((gt = !0),
          (ul.checked = V[2].dynamicIcons.engine),
          $(() => (gt = !1))),
          hn.$set(ul);
        const fl = {};
        !It &&
          Ae[0] & 4 &&
          ((It = !0),
          (fl.checked = V[2].dynamicIcons.nitro),
          $(() => (It = !1))),
          mn.$set(fl);
        const cl = {};
        !Zn &&
          Ae[0] & 2 &&
          ((Zn = !0),
          (cl.checked = V[1].isShowCompassChecked),
          $(() => (Zn = !1))),
          fn.$set(cl);
        const gl = {};
        !At &&
          Ae[0] & 2 &&
          ((At = !0),
          (gl.checked = V[1].isShowStreetsChecked),
          $(() => (At = !1))),
          Ue.$set(gl);
        const dl = {};
        !ht &&
          Ae[0] & 2 &&
          ((ht = !0),
          (dl.checked = V[1].isPointerShowChecked),
          $(() => (ht = !1))),
          _n.$set(dl);
        const hl = {};
        !mt &&
          Ae[0] & 2 &&
          ((mt = !0),
          (hl.checked = V[1].isCineamticModeChecked),
          $(() => (mt = !1))),
          Oe.$set(hl);
      },
      i(V) {
        _t ||
          (w(s.$$.fragment, V),
          w(p.$$.fragment, V),
          w(J.$$.fragment, V),
          w(oe.$$.fragment, V),
          w(W.$$.fragment, V),
          w(q.$$.fragment, V),
          w(me.$$.fragment, V),
          w(he.$$.fragment, V),
          w(ie.$$.fragment, V),
          w(ye.$$.fragment, V),
          w(De.$$.fragment, V),
          w(X.$$.fragment, V),
          w(En.$$.fragment, V),
          w(Fn.$$.fragment, V),
          w(Ce.$$.fragment, V),
          w(vn.$$.fragment, V),
          w(pe.$$.fragment, V),
          w(Wn.$$.fragment, V),
          w(un.$$.fragment, V),
          w(Xe.$$.fragment, V),
          w(hn.$$.fragment, V),
          w(mn.$$.fragment, V),
          w(fn.$$.fragment, V),
          w(Ue.$$.fragment, V),
          w(_n.$$.fragment, V),
          w(Oe.$$.fragment, V),
          (_t = !0));
      },
      o(V) {
        C(s.$$.fragment, V),
          C(p.$$.fragment, V),
          C(J.$$.fragment, V),
          C(oe.$$.fragment, V),
          C(W.$$.fragment, V),
          C(q.$$.fragment, V),
          C(me.$$.fragment, V),
          C(he.$$.fragment, V),
          C(ie.$$.fragment, V),
          C(ye.$$.fragment, V),
          C(De.$$.fragment, V),
          C(X.$$.fragment, V),
          C(En.$$.fragment, V),
          C(Fn.$$.fragment, V),
          C(Ce.$$.fragment, V),
          C(vn.$$.fragment, V),
          C(pe.$$.fragment, V),
          C(Wn.$$.fragment, V),
          C(un.$$.fragment, V),
          C(Xe.$$.fragment, V),
          C(hn.$$.fragment, V),
          C(mn.$$.fragment, V),
          C(fn.$$.fragment, V),
          C(Ue.$$.fragment, V),
          C(_n.$$.fragment, V),
          C(Oe.$$.fragment, V),
          (_t = !1);
      },
      d(V) {
        V && M(e),
          O(s),
          O(p),
          O(J),
          O(oe),
          O(W),
          O(q),
          O(me),
          O(he),
          O(ie),
          O(ye),
          O(De),
          O(X),
          O(En),
          O(Fn),
          O(Ce),
          O(vn),
          O(pe),
          O(Wn),
          O(un),
          O(Xe),
          O(hn),
          O(mn),
          O(fn),
          O(Ue),
          O(_n),
          O(Oe);
      },
    }
  );
}
function va(n, e, t) {
  let i, l;
  ve(n, Fe, (U) => t(1, (i = U))), ve(n, G, (U) => t(2, (l = U)));
  let o;
  function r(U) {
    let on = U ? "circle" : "square";
    pt(Fe, (i.isToggleMapShapeChecked = on), i),
      Te("ToggleMapShape", { shape: on });
  }
  ji(async () => {
    const U = await Te("GetImage");
    t(0, (o = U.toString()));
  });
  const f = () => {
      Te("restartHud"), pt(Fe, (i.isRestarting = !0), i);
    },
    a = () => {
      Fe.resetHudMenuSetting(), Fe.sendMenuSettingsToClient();
    },
    s = (U) => Te("showOutMap", { checked: U });
  function c(U) {
    n.$$.not_equal(i.isOutMapChecked, U) &&
      ((i.isOutMapChecked = U), Fe.set(i));
  }
  const h = (U) => Te("showOutCompass", { checked: U });
  function m(U) {
    n.$$.not_equal(i.isOutCompassChecked, U) &&
      ((i.isOutCompassChecked = U), Fe.set(i));
  }
  const p = (U) => Te("showFollowCompass", { checked: U });
  function b(U) {
    n.$$.not_equal(i.isCompassFollowChecked, U) &&
      ((i.isCompassFollowChecked = U), Fe.set(i));
  }
  const S = (U) => Te("openMenuSounds", { checked: U });
  function v(U) {
    n.$$.not_equal(i.isOpenMenuSoundsChecked, U) &&
      ((i.isOpenMenuSoundsChecked = U), Fe.set(i));
  }
  const d = (U) => Te("resetHudSounds", { checked: U });
  function _(U) {
    n.$$.not_equal(i.isResetSoundsChecked, U) &&
      ((i.isResetSoundsChecked = U), Fe.set(i));
  }
  const A = (U) => Te("checklistSounds", { checked: U });
  function j(U) {
    n.$$.not_equal(i.isListSoundsChecked, U) &&
      ((i.isListSoundsChecked = U), Fe.set(i));
  }
  const le = (U) => Te("showMapNotif", { checked: U });
  function J(U) {
    n.$$.not_equal(i.isMapNotifyChecked, U) &&
      ((i.isMapNotifyChecked = U), Fe.set(i));
  }
  const B = (U) => Te("showFuelAlert", { checked: U });
  function Q(U) {
    n.$$.not_equal(i.isLowFuelAlertChecked, U) &&
      ((i.isLowFuelAlertChecked = U), Fe.set(i));
  }
  const oe = (U) => Te("showCinematicNotif", { checked: U });
  function z(U) {
    n.$$.not_equal(i.isCinematicNotifyChecked, U) &&
      ((i.isCinematicNotifyChecked = U), Fe.set(i));
  }
  const re = (U) => {
    G.updateShowingDynamicIcon("health", U), Te("dynamicChange");
  };
  function W(U) {
    n.$$.not_equal(l.dynamicIcons.health, U) &&
      ((l.dynamicIcons.health = U), G.set(l));
  }
  const L = (U) => {
    G.updateShowingDynamicIcon("armor", U), Te("dynamicChange");
  };
  function te(U) {
    n.$$.not_equal(l.dynamicIcons.armor, U) &&
      ((l.dynamicIcons.armor = U), G.set(l));
  }
  const I = (U) => {
    G.updateShowingDynamicIcon("hunger", U), Te("dynamicChange");
  };
  function ue(U) {
    n.$$.not_equal(l.dynamicIcons.hunger, U) &&
      ((l.dynamicIcons.hunger = U), G.set(l));
  }
  const ee = (U) => {
    G.updateShowingDynamicIcon("thirst", U), Te("dynamicChange");
  };
  function T(U) {
    n.$$.not_equal(l.dynamicIcons.thirst, U) &&
      ((l.dynamicIcons.thirst = U), G.set(l));
  }
  const fe = (U) => {
    G.updateShowingDynamicIcon("stress", U), Te("dynamicChange");
  };
  function q(U) {
    n.$$.not_equal(l.dynamicIcons.stress, U) &&
      ((l.dynamicIcons.stress = U), G.set(l));
  }
  const Y = (U) => {
    G.updateShowingDynamicIcon("oxygen", U), Te("dynamicChange");
  };
  function ke(U) {
    n.$$.not_equal(l.dynamicIcons.oxygen, U) &&
      ((l.dynamicIcons.oxygen = U), G.set(l));
  }
  const me = (U) => r(U),
    ne = (U) => Te("HideMap", { checked: U });
  function P(U) {
    n.$$.not_equal(i.isMapEnabledChecked, U) &&
      ((i.isMapEnabledChecked = U), Fe.set(i));
  }
  const he = (U) => Te("ToggleMapBorders", { checked: U });
  function Le(U) {
    n.$$.not_equal(i.isToggleMapBordersChecked, U) &&
      ((i.isToggleMapBordersChecked = U), Fe.set(i));
  }
  const gn = (U) => {
    G.updateShowingDynamicIcon("engine", U), Te("dynamicChange");
  };
  function ie(U) {
    n.$$.not_equal(l.dynamicIcons.engine, U) &&
      ((l.dynamicIcons.engine = U), G.set(l));
  }
  const Me = (U) => {
    G.updateShowingDynamicIcon("nitro", U), Te("dynamicChange");
  };
  function wn(U) {
    n.$$.not_equal(l.dynamicIcons.nitro, U) &&
      ((l.dynamicIcons.nitro = U), G.set(l));
  }
  const ye = (U) => Te("showCompassBase", { checked: U });
  function ln(U) {
    n.$$.not_equal(i.isShowCompassChecked, U) &&
      ((i.isShowCompassChecked = U), Fe.set(i));
  }
  const Mn = (U) => Te("showStreetsNames", { checked: U });
  function De(U) {
    n.$$.not_equal(i.isShowStreetsChecked, U) &&
      ((i.isShowStreetsChecked = U), Fe.set(i));
  }
  const Sn = (U) => Te("showPointerIndex", { checked: U });
  function nt(U) {
    n.$$.not_equal(i.isPointerShowChecked, U) &&
      ((i.isPointerShowChecked = U), Fe.set(i));
  }
  const an = (U) => Te("cinematicMode", { checked: U });
  function Hn(U) {
    n.$$.not_equal(i.isCineamticModeChecked, U) &&
      ((i.isCineamticModeChecked = U), Fe.set(i));
  }
  return [
    o,
    i,
    l,
    r,
    f,
    a,
    s,
    c,
    h,
    m,
    p,
    b,
    S,
    v,
    d,
    _,
    A,
    j,
    le,
    J,
    B,
    Q,
    oe,
    z,
    re,
    W,
    L,
    te,
    I,
    ue,
    ee,
    T,
    fe,
    q,
    Y,
    ke,
    me,
    ne,
    P,
    he,
    Le,
    gn,
    ie,
    Me,
    wn,
    ye,
    ln,
    Mn,
    De,
    Sn,
    nt,
    an,
    Hn,
  ];
}
class Aa extends be {
  constructor(e) {
    super();
    we(this, e, va, Ca, Se, {}, null, [-1, -1]);
  }
}
function El(n) {
  let e, t, i;
  const l = n[6].default,
    o = Ar(l, n, n[5], null);
  return {
    c() {
      (e = k("div")), o && o.c(), u(e, "class", "content svelte-1ltnd50");
    },
    m(r, f) {
      H(r, e, f), o && o.m(e, null), (i = !0);
    },
    p(r, f) {
      o &&
        o.p &&
        (!i || f & 32) &&
        kr(o, l, r, r[5], i ? vr(l, r[5], f, null) : Cr(r[5]), null);
    },
    i(r) {
      i ||
        (w(o, r),
        et(() => {
          t || (t = sn(e, wl, {}, !0)), t.run(1);
        }),
        (i = !0));
    },
    o(r) {
      C(o, r), t || (t = sn(e, wl, {}, !1)), t.run(0), (i = !1);
    },
    d(r) {
      r && M(e), o && o.d(r), r && t && t.end();
    },
  };
}
function ya(n) {
  let e, t, i, l, o, r, f, a, s, c, h, m, p;
  l = new Dn({ props: { icon: n[2], scale: 1, color: n[3] } });
  let b = n[4] && El(n);
  return {
    c() {
      (e = k("div")),
        (t = k("button")),
        (i = k("div")),
        E(l.$$.fragment),
        (o = y()),
        (r = k("p")),
        (f = Ie(n[1])),
        (a = y()),
        (s = k("i")),
        (s.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" stroke="white" fill="white"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>'),
        (c = y()),
        b && b.c(),
        u(i, "class", "min-w-8 grid justify-items-center"),
        u(r, "class", "ml-3"),
        u(s, "class", "icon ml-auto svelte-1ltnd50"),
        Sl(s, "active", n[4]),
        u(
          t,
          "class",
          "header text-2xl flex-row items-center text-white font-semibold svelte-1ltnd50"
        );
    },
    m(S, v) {
      H(S, e, v),
        g(e, t),
        g(t, i),
        F(l, i, null),
        g(t, o),
        g(t, r),
        g(r, f),
        g(t, a),
        g(t, s),
        g(e, c),
        b && b.m(e, null),
        (h = !0),
        m || ((p = tn(t, "click", n[7])), (m = !0));
    },
    p(S, [v]) {
      const d = {};
      v & 4 && (d.icon = S[2]),
        v & 8 && (d.color = S[3]),
        l.$set(d),
        (!h || v & 2) && In(f, S[1]),
        v & 16 && Sl(s, "active", S[4]),
        S[4]
          ? b
            ? (b.p(S, v), v & 16 && w(b, 1))
            : ((b = El(S)), b.c(), w(b, 1), b.m(e, null))
          : b &&
            (ce(),
            C(b, 1, 1, () => {
              b = null;
            }),
            ge());
    },
    i(S) {
      h || (w(l.$$.fragment, S), w(b), (h = !0));
    },
    o(S) {
      C(l.$$.fragment, S), C(b), (h = !1);
    },
    d(S) {
      S && M(e), O(l), b && b.d(), (m = !1), p();
    },
  };
}
function Ia(n, e, t) {
  let i,
    { $$slots: l = {}, $$scope: o } = e,
    { name: r = "" } = e,
    { group: f = null } = e,
    { icon: a = null } = e,
    { color: s = "white" } = e;
  const c = () => {
    t(0, (f = f === r ? "" : r));
  };
  return (
    (n.$$set = (h) => {
      "name" in h && t(1, (r = h.name)),
        "group" in h && t(0, (f = h.group)),
        "icon" in h && t(2, (a = h.icon)),
        "color" in h && t(3, (s = h.color)),
        "$$scope" in h && t(5, (o = h.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 3 && t(4, (i = f === r));
    }),
    [f, r, a, s, i, o, l, c]
  );
}
class Ui extends be {
  constructor(e) {
    super();
    we(this, e, Ia, ya, Se, { name: 1, group: 0, icon: 2, color: 3 });
  }
}
function Da(n) {
  let e, t, i;
  return {
    c() {
      (e = k("input")),
        u(e, "type", "text"),
        u(
          e,
          "class",
          "bg-[var(--ps-hud-primary)] block w-full p-1.5 my-2 text-black text-base font-bold placeholder-[black] outline-none"
        ),
        u(e, "placeholder", "Profile"),
        u(e, "pattern", "[A-Za-z1-9]"),
        u(e, "max", n[1]);
    },
    m(l, o) {
      H(l, e, o), qi(e, n[0]), t || ((i = tn(e, "input", n[2])), (t = !0));
    },
    p(l, [o]) {
      o & 2 && u(e, "max", l[1]), o & 1 && e.value !== l[0] && qi(e, l[0]);
    },
    i: Ee,
    o: Ee,
    d(l) {
      l && M(e), (t = !1), i();
    },
  };
}
function Ta(n, e, t) {
  let { maxLengh: i = 10 } = e,
    { value: l = "" } = e;
  function o() {
    (l = this.value), t(0, l);
  }
  return (
    (n.$$set = (r) => {
      "maxLengh" in r && t(1, (i = r.maxLengh)),
        "value" in r && t(0, (l = r.value));
    }),
    [l, i, o]
  );
}
class Ma extends be {
  constructor(e) {
    super();
    we(this, e, Ta, Da, Se, { maxLengh: 1, value: 0 });
  }
}
function Fl(n, e, t) {
  const i = n.slice();
  return (i[10] = e[t]), (i[11] = e), (i[12] = t), i;
}
function Ha(n) {
  let e, t;
  function i() {
    return n[4](n[10], n[11], n[12]);
  }
  return (
    (e = new Ir({
      props: { $$slots: { default: [Fa] }, $$scope: { ctx: n } },
    })),
    e.$on("outclick", i),
    {
      c() {
        E(e.$$.fragment);
      },
      m(l, o) {
        F(e, l, o), (t = !0);
      },
      p(l, o) {
        n = l;
        const r = {};
        o & 8194 && (r.$$scope = { dirty: o, ctx: n }), e.$set(r);
      },
      i(l) {
        t || (w(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        C(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        O(e, l);
      },
    }
  );
}
function Ea(n) {
  let e,
    t = n[10].name + "",
    i,
    l,
    o;
  function r() {
    return n[2](n[10], n[11], n[12]);
  }
  return {
    c() {
      (e = k("p")),
        (i = Ie(t)),
        u(e, "class", "text-xl font-semibold text-center cursor-pointer");
    },
    m(f, a) {
      H(f, e, a), g(e, i), l || ((o = tn(e, "click", r)), (l = !0));
    },
    p(f, a) {
      (n = f), a & 2 && t !== (t = n[10].name + "") && In(i, t);
    },
    i: Ee,
    o: Ee,
    d(f) {
      f && M(e), (l = !1), o();
    },
  };
}
function Fa(n) {
  let e, t, i;
  function l(r) {
    n[3](r, n[10]);
  }
  let o = {};
  return (
    n[10].name !== void 0 && (o.value = n[10].name),
    (e = new Ma({ props: o })),
    Z.push(() => x(e, "value", l)),
    {
      c() {
        E(e.$$.fragment);
      },
      m(r, f) {
        F(e, r, f), (i = !0);
      },
      p(r, f) {
        n = r;
        const a = {};
        !t && f & 2 && ((t = !0), (a.value = n[10].name), $(() => (t = !1))),
          e.$set(a);
      },
      i(r) {
        i || (w(e.$$.fragment, r), (i = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (i = !1);
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Ol(n) {
  let e, t, i, l, o, r, f, a, s, c;
  const h = [Ea, Ha],
    m = [];
  function p(d, _) {
    return d[10].editingName ? 1 : 0;
  }
  (t = p(n)), (i = m[t] = h[t](n));
  function b() {
    return n[5](n[12]);
  }
  (o = new Lt({ props: { name: "Save HUD to Profile" } })), o.$on("click", b);
  function S() {
    return n[6](n[12]);
  }
  (f = new Lt({ props: { name: "Apply Profile to HUD" } })), f.$on("click", S);
  function v() {
    return n[7](n[12]);
  }
  return (
    (s = new Lt({
      props: { name: "Delete Profile", buttonClass: "hover:bg-red-600" },
    })),
    s.$on("click", v),
    {
      c() {
        (e = k("div")),
          i.c(),
          (l = y()),
          E(o.$$.fragment),
          (r = y()),
          E(f.$$.fragment),
          (a = y()),
          E(s.$$.fragment),
          u(
            e,
            "class",
            "flex flex-col justify-end items-center border-2 p-3 border-[#029772] my-3"
          );
      },
      m(d, _) {
        H(d, e, _),
          m[t].m(e, null),
          g(e, l),
          F(o, e, null),
          g(e, r),
          F(f, e, null),
          g(e, a),
          F(s, e, null),
          (c = !0);
      },
      p(d, _) {
        n = d;
        let A = t;
        (t = p(n)),
          t === A
            ? m[t].p(n, _)
            : (ce(),
              C(m[A], 1, 1, () => {
                m[A] = null;
              }),
              ge(),
              (i = m[t]),
              i ? i.p(n, _) : ((i = m[t] = h[t](n)), i.c()),
              w(i, 1),
              i.m(e, l));
      },
      i(d) {
        c ||
          (w(i),
          w(o.$$.fragment, d),
          w(f.$$.fragment, d),
          w(s.$$.fragment, d),
          (c = !0));
      },
      o(d) {
        C(i),
          C(o.$$.fragment, d),
          C(f.$$.fragment, d),
          C(s.$$.fragment, d),
          (c = !1);
      },
      d(d) {
        d && M(e), m[t].d(), O(o), O(f), O(s);
      },
    }
  );
}
function Yl(n) {
  let e, t, i;
  return (
    (t = new Lt({
      props: { name: "Add New Profile", buttonClass: "w-[100px]" },
    })),
    t.$on("click", n[8]),
    {
      c() {
        (e = k("div")), E(t.$$.fragment), u(e, "class", "flex flex-col");
      },
      m(l, o) {
        H(l, e, o), F(t, e, null), (i = !0);
      },
      p: Ee,
      i(l) {
        i || (w(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && M(e), O(t);
      },
    }
  );
}
function Oa(n) {
  let e,
    t,
    i,
    l = n[1],
    o = [];
  for (let a = 0; a < l.length; a += 1) o[a] = Ol(Fl(n, l, a));
  const r = (a) =>
    C(o[a], 1, 1, () => {
      o[a] = null;
    });
  let f = n[1].length < 6 && Yl(n);
  return {
    c() {
      e = k("div");
      for (let a = 0; a < o.length; a += 1) o[a].c();
      (t = y()),
        f && f.c(),
        u(
          e,
          "class",
          "mx-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
        );
    },
    m(a, s) {
      H(a, e, s);
      for (let c = 0; c < o.length; c += 1) o[c].m(e, null);
      g(e, t), f && f.m(e, null), (i = !0);
    },
    p(a, s) {
      if (s & 2) {
        l = a[1];
        let c;
        for (c = 0; c < l.length; c += 1) {
          const h = Fl(a, l, c);
          o[c]
            ? (o[c].p(h, s), w(o[c], 1))
            : ((o[c] = Ol(h)), o[c].c(), w(o[c], 1), o[c].m(e, t));
        }
        for (ce(), c = l.length; c < o.length; c += 1) r(c);
        ge();
      }
      a[1].length < 6
        ? f
          ? (f.p(a, s), s & 2 && w(f, 1))
          : ((f = Yl(a)), f.c(), w(f, 1), f.m(e, null))
        : f &&
          (ce(),
          C(f, 1, 1, () => {
            f = null;
          }),
          ge());
    },
    i(a) {
      if (!i) {
        for (let s = 0; s < l.length; s += 1) w(o[s]);
        w(f), (i = !0);
      }
    },
    o(a) {
      o = o.filter(Boolean);
      for (let s = 0; s < o.length; s += 1) C(o[s]);
      C(f), (i = !1);
    },
    d(a) {
      a && M(e), ci(o, a), f && f.d();
    },
  };
}
function Ya(n) {
  let e, t, i, l, o;
  function r(a) {
    n[9](a);
  }
  let f = {
    name: "Customization Profiles",
    icon: yr,
    color: "white",
    $$slots: { default: [Oa] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Ui({ props: f })),
    Z.push(() => x(e, "group", r)),
    {
      c() {
        E(e.$$.fragment), (i = y()), (l = k("hr"));
      },
      m(a, s) {
        F(e, a, s), H(a, i, s), H(a, l, s), (o = !0);
      },
      p(a, [s]) {
        const c = {};
        s & 8194 && (c.$$scope = { dirty: s, ctx: a }),
          !t && s & 1 && ((t = !0), (c.group = a[0]), $(() => (t = !1))),
          e.$set(c);
      },
      i(a) {
        o || (w(e.$$.fragment, a), (o = !0));
      },
      o(a) {
        C(e.$$.fragment, a), (o = !1);
      },
      d(a) {
        O(e, a), a && M(i), a && M(l);
      },
    }
  );
}
function Xa(n, e, t) {
  let i;
  ve(n, zt, (p) => t(1, (i = p)));
  let { group: l = "" } = e;
  const o = (p, b, S) => pt(zt, (b[S].editingName = !0), i);
  function r(p, b) {
    n.$$.not_equal(b.name, p) && ((b.name = p), zt.set(i));
  }
  const f = (p, b, S) => pt(zt, (b[S].editingName = !1), i),
    a = (p) => zt.saveHUDToProfile(p),
    s = (p) => zt.applyProfileToHud(p),
    c = (p) => zt.deleteProfile(p),
    h = () => zt.addNewProfile();
  function m(p) {
    (l = p), t(0, l);
  }
  return (
    (n.$$set = (p) => {
      "group" in p && t(0, (l = p.group));
    }),
    [l, i, o, r, f, a, s, c, h, m]
  );
}
class Ua extends be {
  constructor(e) {
    super();
    we(this, e, Xa, Ya, Se, { group: 0 });
  }
}
function Va(n) {
  let e, t, i;
  return (
    (t = new Lt({
      props: {
        name: "copy progress colors to icon colors",
        buttonClass: "h-15 w-55",
      },
    })),
    t.$on("click", n[1]),
    {
      c() {
        (e = k("div")), E(t.$$.fragment), u(e, "class", "flex flex-row mx-4");
      },
      m(l, o) {
        H(l, e, o), F(t, e, null), (i = !0);
      },
      p: Ee,
      i(l) {
        i || (w(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && M(e), O(t);
      },
    }
  );
}
function Ra(n) {
  let e, t, i, l, o;
  function r(a) {
    n[2](a);
  }
  let f = {
    name: "Utility Functions",
    icon: Dr,
    color: "white",
    $$slots: { default: [Va] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Ui({ props: f })),
    Z.push(() => x(e, "group", r)),
    {
      c() {
        E(e.$$.fragment), (i = y()), (l = k("hr"));
      },
      m(a, s) {
        F(e, a, s), H(a, i, s), H(a, l, s), (o = !0);
      },
      p(a, [s]) {
        const c = {};
        s & 8 && (c.$$scope = { dirty: s, ctx: a }),
          !t && s & 1 && ((t = !0), (c.group = a[0]), $(() => (t = !1))),
          e.$set(c);
      },
      i(a) {
        o || (w(e.$$.fragment, a), (o = !0));
      },
      o(a) {
        C(e.$$.fragment, a), (o = !1);
      },
      d(a) {
        O(e, a), a && M(i), a && M(l);
      },
    }
  );
}
function Pa(n, e, t) {
  let { group: i = "" } = e;
  const l = () => {
    ae.updateIconColorToProgressColor();
  };
  function o(r) {
    (i = r), t(0, i);
  }
  return (
    (n.$$set = (r) => {
      "group" in r && t(0, (i = r.group));
    }),
    [i, l, o]
  );
}
class za extends be {
  constructor(e) {
    super();
    we(this, e, Pa, Ra, Se, { group: 0 });
  }
}
function La(n) {
  let e, t, i;
  return (
    (t = new Tr({
      props: {
        items: n[0],
        value: n[1],
        isClearable: !1,
        containerClasses: "selectHud",
      },
    })),
    t.$on("select", n[2]),
    {
      c() {
        (e = k("div")),
          E(t.$$.fragment),
          u(e, "class", "themed text-white text-base svelte-6dsxo6");
      },
      m(l, o) {
        H(l, e, o), F(t, e, null), (i = !0);
      },
      p(l, [o]) {
        const r = {};
        o & 1 && (r.items = l[0]), o & 2 && (r.value = l[1]), t.$set(r);
      },
      i(l) {
        i || (w(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && M(e), O(t);
      },
    }
  );
}
function qa(n) {
  var e,
    t = n.split("-");
  for (e = 0; e < t.length; e++)
    t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
  return { value: n, label: t.join(" ") };
}
function Na(n, e, t) {
  let { valuesArray: i = [""] } = e,
    { handleSelectFunction: l = () => null } = e,
    { value: o = null } = e,
    { selectedIndex: r = 0 } = e,
    f,
    a;
  function s(c) {
    c.detail.value !== o && (t(3, (o = c.detail.value)), l(c.detail.value));
  }
  return (
    (n.$$set = (c) => {
      "valuesArray" in c && t(5, (i = c.valuesArray)),
        "handleSelectFunction" in c && t(6, (l = c.handleSelectFunction)),
        "value" in c && t(3, (o = c.value)),
        "selectedIndex" in c && t(4, (r = c.selectedIndex));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 33 && (t(0, (f = i.map(qa))), t(1, (a = f[0]))),
        n.$$.dirty & 9 && o)
      ) {
        let c = f.findIndex((h) => h.value == o);
        c >= 0 && (t(4, (r = c)), t(1, (a = f[c])));
      }
    }),
    [f, a, s, o, r, i, l]
  );
}
class Yi extends be {
  constructor(e) {
    super();
    we(this, e, Na, La, Se, {
      valuesArray: 5,
      handleSelectFunction: 6,
      value: 3,
      selectedIndex: 4,
    });
  }
}
function Ba(n) {
  let e, t, i, l, o, r, f, a;
  return {
    c() {
      (e = k("div")),
        (t = k("button")),
        (t.innerHTML =
          '<span class="mx-auto mt-[10%] text-lg font-bold">-</span>'),
        (i = y()),
        (l = k("input")),
        (o = y()),
        (r = k("button")),
        (r.innerHTML =
          '<span class="mx-auto mt-[10%] text-lg font-bold">+</span>'),
        u(
          t,
          "class",
          "font-semibold border-r bg-[#383838] hover:bg-red-600 text-white border-gray-600 border-1 h-full w-20 flex focus:outline-none cursor-pointer"
        ),
        u(l, "type", "text"),
        u(
          l,
          "class",
          "w-15 p-2 p-1 text-xs appearance-none text-base border-gray-600 border-1 focus:outline-none focus:border-1 focus:border-gray-400 text-center bg-[#383838] text-white"
        ),
        u(
          r,
          "class",
          "font-semibold border-l bg-[#383838] hover:bg-green-600 text-white border-gray-600 border-1 h-full w-20 flex focus:outline-none cursor-pointer"
        ),
        u(
          e,
          "class",
          "flex flex-row mx-auto border h-10 w-30 border-gray-600 relative text-black"
        );
    },
    m(s, c) {
      H(s, e, c),
        g(e, t),
        g(e, i),
        g(e, l),
        qi(l, n[0]),
        g(e, o),
        g(e, r),
        f ||
          ((a = [
            tn(t, "click", n[7]),
            tn(l, "input", n[8]),
            tn(l, "input", n[9]),
            tn(r, "click", n[10]),
          ]),
          (f = !0));
    },
    p(s, [c]) {
      c & 1 && l.value !== s[0] && qi(l, s[0]);
    },
    i: Ee,
    o: Ee,
    d(s) {
      s && M(e), (f = !1), Xi(a);
    },
  };
}
function ja(n, e, t) {
  let { min: i = 0 } = e,
    { max: l = 10 } = e,
    { handleUpdateFunction: o = (S) => {} } = e,
    { value: r = 1 } = e,
    { step: f = 1 } = e;
  function a(S) {
    return S > l && (S = l), S < i && (S = i), Math.round(S * 100) / 100;
  }
  function s(S) {
    S == "increase" ? t(0, (r += f)) : t(0, (r -= f)), t(0, (r = a(r))), o(r);
  }
  function c(S) {
    if (S.target.value.endsWith(".")) return;
    let v = Number(S.target.value);
    isNaN(v) || (t(0, (r = a(v))), o(r));
  }
  const h = () => s("decrease");
  function m() {
    (r = this.value), t(0, r);
  }
  const p = (S) => c(S),
    b = () => s("increase");
  return (
    (n.$$set = (S) => {
      "min" in S && t(3, (i = S.min)),
        "max" in S && t(4, (l = S.max)),
        "handleUpdateFunction" in S && t(5, (o = S.handleUpdateFunction)),
        "value" in S && t(0, (r = S.value)),
        "step" in S && t(6, (f = S.step));
    }),
    [r, s, c, i, l, o, f, h, m, p, b]
  );
}
class _e extends be {
  constructor(e) {
    super();
    we(this, e, ja, Ba, Se, {
      min: 3,
      max: 4,
      handleUpdateFunction: 5,
      value: 0,
      step: 6,
    });
  }
}
function Ga(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h,
    m,
    p,
    b,
    S,
    v,
    d,
    _,
    A,
    j,
    le,
    J,
    B,
    Q,
    oe,
    z;
  r = new Yi({
    props: {
      valuesArray: qr,
      value: n[1].layout,
      handleSelectFunction: xn.updateLayout,
    },
  });
  function re(ee) {
    n[2](ee);
  }
  let W = { min: -100, max: 200 };
  n[1].iconBetweenSpacing !== void 0 && (W.value = n[1].iconBetweenSpacing),
    (m = new _e({ props: W })),
    Z.push(() => x(m, "value", re));
  function L(ee) {
    n[3](ee);
  }
  let te = { min: -100, max: 500 };
  n[1].yAxisSpacing !== void 0 && (te.value = n[1].yAxisSpacing),
    (_ = new _e({ props: te })),
    Z.push(() => x(_, "value", L));
  function I(ee) {
    n[4](ee);
  }
  let ue = { min: -100, max: 500 };
  return (
    n[1].xAxisSpacing !== void 0 && (ue.value = n[1].xAxisSpacing),
    (Q = new _e({ props: ue })),
    Z.push(() => x(Q, "value", I)),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (i = k("div")),
          (l = k("p")),
          (l.textContent = "Icon Layout"),
          (o = y()),
          E(r.$$.fragment),
          (f = y()),
          (a = k("div")),
          (s = k("div")),
          (c = k("p")),
          (c.textContent = "Between Icon Spacing"),
          (h = y()),
          E(m.$$.fragment),
          (b = y()),
          (S = k("div")),
          (v = k("p")),
          (v.textContent = "Y-Axis Spacing"),
          (d = y()),
          E(_.$$.fragment),
          (j = y()),
          (le = k("div")),
          (J = k("p")),
          (J.textContent = "X-Axis Spacing"),
          (B = y()),
          E(Q.$$.fragment),
          u(l, "class", "text-lg text-center mb-2"),
          u(i, "class", "w-55"),
          u(t, "class", "flex justify-center mb-4"),
          u(c, "class", "text-base text-center mb-2"),
          u(v, "class", "text-base text-center mb-2"),
          u(J, "class", "text-base text-center mb-2"),
          u(
            a,
            "class",
            "mx-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-end mb-8"
          ),
          u(e, "class", "text-sm flex flex-col text-[#e8e8e8]");
      },
      m(ee, T) {
        H(ee, e, T),
          g(e, t),
          g(t, i),
          g(i, l),
          g(i, o),
          F(r, i, null),
          g(e, f),
          g(e, a),
          g(a, s),
          g(s, c),
          g(s, h),
          F(m, s, null),
          g(a, b),
          g(a, S),
          g(S, v),
          g(S, d),
          F(_, S, null),
          g(a, j),
          g(a, le),
          g(le, J),
          g(le, B),
          F(Q, le, null),
          (z = !0);
      },
      p(ee, T) {
        const fe = {};
        T & 2 && (fe.value = ee[1].layout), r.$set(fe);
        const q = {};
        !p &&
          T & 2 &&
          ((p = !0), (q.value = ee[1].iconBetweenSpacing), $(() => (p = !1))),
          m.$set(q);
        const Y = {};
        !A &&
          T & 2 &&
          ((A = !0), (Y.value = ee[1].yAxisSpacing), $(() => (A = !1))),
          _.$set(Y);
        const ke = {};
        !oe &&
          T & 2 &&
          ((oe = !0), (ke.value = ee[1].xAxisSpacing), $(() => (oe = !1))),
          Q.$set(ke);
      },
      i(ee) {
        z ||
          (w(r.$$.fragment, ee),
          w(m.$$.fragment, ee),
          w(_.$$.fragment, ee),
          w(Q.$$.fragment, ee),
          (z = !0));
      },
      o(ee) {
        C(r.$$.fragment, ee),
          C(m.$$.fragment, ee),
          C(_.$$.fragment, ee),
          C(Q.$$.fragment, ee),
          (z = !1);
      },
      d(ee) {
        ee && M(e), O(r), O(m), O(_), O(Q);
      },
    }
  );
}
function Wa(n) {
  let e, t, i, l, o;
  function r(a) {
    n[5](a);
  }
  let f = {
    name: "Global Status Icon Layout Settings",
    icon: Mr,
    color: "white",
    $$slots: { default: [Ga] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Ui({ props: f })),
    Z.push(() => x(e, "group", r)),
    {
      c() {
        E(e.$$.fragment), (i = y()), (l = k("hr"));
      },
      m(a, s) {
        F(e, a, s), H(a, i, s), H(a, l, s), (o = !0);
      },
      p(a, [s]) {
        const c = {};
        s & 66 && (c.$$scope = { dirty: s, ctx: a }),
          !t && s & 1 && ((t = !0), (c.group = a[0]), $(() => (t = !1))),
          e.$set(c);
      },
      i(a) {
        o || (w(e.$$.fragment, a), (o = !0));
      },
      o(a) {
        C(e.$$.fragment, a), (o = !1);
      },
      d(a) {
        O(e, a), a && M(i), a && M(l);
      },
    }
  );
}
function Ja(n, e, t) {
  let i;
  ve(n, xn, (s) => t(1, (i = s)));
  let { group: l = "" } = e;
  function o(s) {
    n.$$.not_equal(i.iconBetweenSpacing, s) &&
      ((i.iconBetweenSpacing = s), xn.set(i));
  }
  function r(s) {
    n.$$.not_equal(i.yAxisSpacing, s) && ((i.yAxisSpacing = s), xn.set(i));
  }
  function f(s) {
    n.$$.not_equal(i.xAxisSpacing, s) && ((i.xAxisSpacing = s), xn.set(i));
  }
  function a(s) {
    (l = s), t(0, l);
  }
  return (
    (n.$$set = (s) => {
      "group" in s && t(0, (l = s.group));
    }),
    [l, i, o, r, f, a]
  );
}
class Za extends be {
  constructor(e) {
    super();
    we(this, e, Ja, Wa, Se, { group: 0 });
  }
}
class An {
  constructor(e, t) {
    He(this, "mode");
    He(this, "data");
    (this.mode = e), (this.data = t);
  }
  static rgba(e) {
    return new An("rgb", e);
  }
  static hex(e) {
    return new An("rgb", kl(e));
  }
  static hsl(e) {
    return new An("hsl", e);
  }
  static hcl(e) {
    return new An("hcl", e);
  }
  alter(e, t, i) {
    const l = this.to(e);
    let o = JSON.parse(JSON.stringify(l.data));
    return (
      e === "rgb" && t === "a" ? (o.opacity = i) : (o[t] = i), new An(e, o)
    );
  }
  get(e, t) {
    return e === "rgb" && t === "a"
      ? this.to(e).data.opacity
      : this.to(e).data[t];
  }
  tuple() {
    return this.mode.split("").map((e) => this.data[e]);
  }
  to(e) {
    if (this.mode === e) return this;
    if (this.mode === "rgb") {
      const t = this.tuple(),
        i = kl(...t),
        l = Zi[e](i);
      return new An(e, l);
    } else if (e === "rgb") {
      const t = this.tuple();
      let i = Zi[this.mode](...t).rgb();
      return (
        (i = Object.fromEntries(
          Object.entries(i).map(([l, o]) =>
            o < 0 ? [l, 0] : o > 255 ? [l, 255] : [l, o]
          )
        )),
        new An("rgb", i)
      );
    } else return this.to("rgb").to(e);
  }
  toHex() {
    const e = Object.values(this.data);
    return Zi[this.mode](...e).formatHex8();
  }
  isDark() {
    let e = this.to("rgb").data;
    return e.r * 0.299 + e.g * 0.587 + e.b * 0.114 <= 186;
  }
}
const $n = {
  hsl: {
    h: { extent: [0, 360], scale: 1, title: "hue" },
    s: { extent: [0, 100], scale: 100, title: "saturation" },
    l: { extent: [0, 100], scale: 100, title: "luminance" },
  },
  hcl: {
    h: { extent: [0, 360], scale: 1, title: "hue" },
    c: { extent: [0, 150], scale: 1, title: "chroma" },
    l: { extent: [0, 100], scale: 1, title: "luminance" },
  },
  lab: {
    l: { extent: [0, 100], scale: 1, title: "L" },
    a: { extent: [-160, 160], scale: 1, title: "a" },
    b: { extent: [-160, 160], scale: 1, title: "b" },
  },
  rgb: {
    r: { extent: [0, 255], scale: 1, title: "red" },
    g: { extent: [0, 255], scale: 1, title: "green" },
    b: { extent: [0, 255], scale: 1, title: "blue" },
    a: { extent: [0, 100], scale: 100, title: "opacity" },
  },
};
function Bi(n) {
  let [e, t] = n.split(".", 2);
  return { scale: e, dim: t, data: $n[e][t] };
}
function xo(n) {
  let e = n.clientX,
    t = n.clientY,
    i = n.target.getBoundingClientRect();
  const l = e - i.x,
    o = t - i.y;
  return {
    clientX: e,
    clientY: t,
    offsetX: i.x,
    offsetY: i.y,
    relativeX: l,
    relativeY: o,
  };
}
const Ka = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
};
function Ri(n) {
  let t = n.changedTouches[0],
    i = Ka[n.type];
  if (!i) return;
  let l = new MouseEvent(i, {
    screenX: t.screenX,
    screenY: t.screenY,
    clientX: t.clientX,
    clientY: t.clientY,
    button: 0,
    buttons: 1,
  });
  n.target.dispatchEvent(l), n.preventDefault();
}
function $o(n) {
  n.addEventListener("touchstart", Ri, !0),
    n.addEventListener("touchmove", Ri, !0),
    n.addEventListener("touchend", Ri, !0),
    n.addEventListener("touchcancel", Ri, !0);
}
function Qa(n) {
  let e, t, i, l, o;
  return {
    c() {
      (e = k("div")),
        (t = k("canvas")),
        u(t, "width", n[0]),
        u(t, "height", n[1]),
        u(t, "class", "svelte-1q93mbr"),
        u(e, "class", "scrollbar svelte-1q93mbr"),
        et(() => n[14].call(e));
    },
    m(r, f) {
      H(r, e, f),
        g(e, t),
        n[13](t),
        (i = Go(e, n[14].bind(e))),
        l ||
          ((o = [tn(t, "mousedown", n[5]), tn(t, "mousemove", n[5])]),
          (l = !0));
    },
    p(r, [f]) {
      f & 1 && u(t, "width", r[0]), f & 2 && u(t, "height", r[1]);
    },
    i: Ee,
    o: Ee,
    d(r) {
      r && M(e), n[13](null), i(), (l = !1), Xi(o);
    },
  };
}
function xa(n, e, t) {
  let i,
    l,
    o,
    { color: r = An.hex("#00fff00") } = e,
    { dimension: f = "hsl.h" } = e,
    { detail: a = 100 } = e,
    { width: s = null } = e,
    { height: c = null } = e,
    h,
    m,
    p,
    b;
  ji(() => {
    t(9, (m = h.getContext("2d"))), $o(h);
  });
  function S(_) {
    if (_.buttons === 1) {
      let le =
        (xo(_).relativeX / (p - 2)) * (i.data.extent[1] - i.data.extent[0]) +
        i.data.extent[0];
      le > i.data.extent[1] && (le = i.data.extent[1]),
        le < i.data.extent[0] && (le = i.data.extent[0]),
        t(6, (r = r.alter(i.scale, i.dim, le / i.data.scale)));
    }
  }
  function v(_) {
    Z[_ ? "unshift" : "push"](() => {
      (h = _), t(4, h);
    });
  }
  function d() {
    (p = this.clientWidth), (b = this.clientHeight), t(2, p), t(3, b);
  }
  return (
    (n.$$set = (_) => {
      "color" in _ && t(6, (r = _.color)),
        "dimension" in _ && t(7, (f = _.dimension)),
        "detail" in _ && t(8, (a = _.detail)),
        "width" in _ && t(0, (s = _.width)),
        "height" in _ && t(1, (c = _.height));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 128 && t(10, (i = Bi(f))),
        n.$$.dirty & 1088 && t(12, (l = r.get(i.scale, i.dim) * i.data.scale)),
        n.$$.dirty & 5124 &&
          t(
            11,
            (o =
              ((p - 2) * (l - i.data.extent[0])) /
              (i.data.extent[1] - i.data.extent[0]))
          ),
        n.$$.dirty & 3916 && m)
      ) {
        t(9, (m.imageSmoothingEnabled = !1), m), m.clearRect(0, 0, p, b);
        let _ = Math.min(a, p - 2),
          A = (p - 2) / _,
          j = i.data.extent[1] - i.data.extent[0];
        const le = r.to(i.scale);
        for (let J = 0; J <= _; J++) {
          const B = ((J / _) * j + i.data.extent[0]) / i.data.scale,
            Q = le.alter(i.scale, i.dim, B);
          t(9, (m.fillStyle = Q.toHex()), m),
            m.fillRect(Math.round(J * A), 0, Math.ceil(A), b);
        }
        t(9, (m.fillStyle = "#ffffff"), m),
          m.fillRect(o - 1, 0, 3, b),
          t(9, (m.fillStyle = "#000000"), m),
          m.fillRect(o, 0, 1, b);
      }
    }),
    [s, c, p, b, h, S, r, f, a, m, i, o, l, v, d]
  );
}
class $a extends be {
  constructor(e) {
    super();
    we(this, e, xa, Qa, Se, {
      color: 6,
      dimension: 7,
      detail: 8,
      width: 0,
      height: 1,
    });
  }
}
function eu(n) {
  let e, t, i, l, o;
  return {
    c() {
      (e = k("div")),
        (t = k("canvas")),
        u(t, "width", n[0]),
        u(t, "height", n[1]),
        u(t, "class", "svelte-1vtq5xo"),
        u(e, "class", "matrix svelte-1vtq5xo"),
        et(() => n[19].call(e));
    },
    m(r, f) {
      H(r, e, f),
        g(e, t),
        n[18](t),
        (i = Go(e, n[19].bind(e))),
        l ||
          ((o = [tn(t, "mousedown", n[5]), tn(t, "mousemove", n[5])]),
          (l = !0));
    },
    p(r, [f]) {
      f & 1 && u(t, "width", r[0]), f & 2 && u(t, "height", r[1]);
    },
    i: Ee,
    o: Ee,
    d(r) {
      r && M(e), n[18](null), i(), (l = !1), Xi(o);
    },
  };
}
function nu(n, e, t) {
  let i,
    l,
    o,
    r,
    f,
    a,
    { color: s = An.hex("#00ff00") } = e,
    { dimensionX: c = "hsl.l" } = e,
    { dimensionY: h = "hsl.s" } = e,
    { detailX: m = 100 } = e,
    { detailY: p = 100 } = e,
    { width: b = null } = e,
    { height: S = null } = e,
    v,
    d,
    _,
    A;
  ji(() => {
    t(11, (d = v.getContext("2d"))), $o(v);
  });
  function j(B) {
    if (B.buttons === 1) {
      const Q = xo(B);
      let oe = Q.relativeX,
        z = A - 2 - Q.relativeY,
        re =
          (oe / (_ - 2)) * (i.data.extent[1] - i.data.extent[0]) +
          i.data.extent[0];
      re > i.data.extent[1] && (re = i.data.extent[1]),
        re < i.data.extent[0] && (re = i.data.extent[0]);
      let W =
        (z / (A - 2)) * (l.data.extent[1] - l.data.extent[0]) +
        l.data.extent[0];
      W > l.data.extent[1] && (W = l.data.extent[1]),
        W < l.data.extent[0] && (W = l.data.extent[0]);
      const L = s.alter(l.scale, l.dim, W / l.data.scale);
      t(6, (s = L.alter(i.scale, i.dim, re / i.data.scale)));
    }
  }
  function le(B) {
    Z[B ? "unshift" : "push"](() => {
      (v = B), t(4, v);
    });
  }
  function J() {
    (_ = this.clientWidth), (A = this.clientHeight), t(2, _), t(3, A);
  }
  return (
    (n.$$set = (B) => {
      "color" in B && t(6, (s = B.color)),
        "dimensionX" in B && t(7, (c = B.dimensionX)),
        "dimensionY" in B && t(8, (h = B.dimensionY)),
        "detailX" in B && t(9, (m = B.detailX)),
        "detailY" in B && t(10, (p = B.detailY)),
        "width" in B && t(0, (b = B.width)),
        "height" in B && t(1, (S = B.height));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 128 && t(12, (i = Bi(c))),
        n.$$.dirty & 256 && t(13, (l = Bi(h))),
        n.$$.dirty & 4160 && t(17, (o = s.get(i.scale, i.dim) * i.data.scale)),
        n.$$.dirty & 8256 && t(16, (r = s.get(l.scale, l.dim) * l.data.scale)),
        n.$$.dirty & 135172 &&
          t(
            15,
            (f =
              (_ * (o - i.data.extent[0])) /
              (i.data.extent[1] - i.data.extent[0]))
          ),
        n.$$.dirty & 73736 &&
          t(
            14,
            (a =
              A -
              (A * (r - l.data.extent[0])) /
                (l.data.extent[1] - l.data.extent[0]))
          ),
        n.$$.dirty & 65100 && d)
      ) {
        d.clearRect(0, 0, _, A), t(11, (d.imageSmoothingEnabled = !1), d);
        let B = Math.min(m, _ - 2),
          Q = Math.min(p, A - 2),
          oe = (_ - 2) / B,
          z = (A - 2) / Q,
          re = i.data.extent[1] - i.data.extent[0],
          W = l.data.extent[1] - l.data.extent[0];
        const L = s.to(l.scale);
        for (let te = 0; te <= Q; te++) {
          const I = ((te / p) * W + l.data.extent[0]) / l.data.scale,
            ue = L.alter(l.scale, l.dim, I);
          for (let ee = 0; ee <= B; ee++) {
            const T = ((ee / m) * re + i.data.extent[0]) / i.data.scale,
              fe = ue.alter(i.scale, i.dim, T);
            t(11, (d.fillStyle = fe.toHex()), d),
              d.fillRect(
                Math.round(ee * oe),
                Math.round(A - 2 - te * z),
                Math.ceil(oe),
                Math.ceil(z)
              );
          }
        }
        t(11, (d.fillStyle = "#ffffff"), d),
          d.fillRect(f - 2, a - 2, 5, 5),
          t(11, (d.fillStyle = "#000000"), d),
          d.fillRect(f - 1, a - 1, 3, 3);
      }
    }),
    [b, S, _, A, v, j, s, c, h, m, p, d, i, l, a, f, r, o, le, J]
  );
}
class tu extends be {
  constructor(e) {
    super();
    we(this, e, nu, eu, Se, {
      color: 6,
      dimensionX: 7,
      dimensionY: 8,
      detailX: 9,
      detailY: 10,
      width: 0,
      height: 1,
    });
  }
}
function iu(n) {
  let e, t, i, l, o;
  return {
    c() {
      (e = k("input")),
        u(e, "type", "number"),
        (e.value = n[1]),
        u(e, "min", (t = n[0].data.extent[0])),
        u(e, "max", (i = n[0].data.extent[1])),
        u(e, "class", "svelte-18y412o");
    },
    m(r, f) {
      H(r, e, f), l || ((o = tn(e, "change", n[2])), (l = !0));
    },
    p(r, [f]) {
      f & 2 && e.value !== r[1] && (e.value = r[1]),
        f & 1 && t !== (t = r[0].data.extent[0]) && u(e, "min", t),
        f & 1 && i !== (i = r[0].data.extent[1]) && u(e, "max", i);
    },
    i: Ee,
    o: Ee,
    d(r) {
      r && M(e), (l = !1), o();
    },
  };
}
function lu(n, e, t) {
  let i,
    l,
    o,
    { color: r = An.hex("#00ff00") } = e,
    { dimension: f = "hsl.h" } = e;
  function a(s) {
    let c = +s.target.value;
    t(3, (r = r.alter(i.scale, i.dim, c / i.data.scale)));
  }
  return (
    (n.$$set = (s) => {
      "color" in s && t(3, (r = s.color)),
        "dimension" in s && t(4, (f = s.dimension));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16 && t(0, (i = Bi(f))),
        n.$$.dirty & 9 && t(5, (l = r.get(i.scale, i.dim) * i.data.scale)),
        n.$$.dirty & 32 && t(1, (o = Math.round(l)));
    }),
    [i, o, a, r, f, l]
  );
}
class ou extends be {
  constructor(e) {
    super();
    we(this, e, lu, iu, Se, { color: 3, dimension: 4 });
  }
}
function ru(n) {
  let e, t, i;
  return {
    c() {
      (e = k("input")),
        u(e, "id", n[0]),
        (e.value = n[2]),
        N(e, "width", n[1] + "px"),
        u(e, "class", "svelte-h7kv0z");
    },
    m(l, o) {
      H(l, e, o), t || ((i = tn(e, "change", n[3])), (t = !0));
    },
    p(l, [o]) {
      o & 1 && u(e, "id", l[0]),
        o & 4 && e.value !== l[2] && (e.value = l[2]),
        o & 2 && N(e, "width", l[1] + "px");
    },
    i: Ee,
    o: Ee,
    d(l) {
      l && M(e), (t = !1), i();
    },
  };
}
function su(n, e, t) {
  let i,
    { color: l = An.hex("#00ff00") } = e,
    { id: o = null } = e,
    { width: r = null } = e;
  function f(a) {
    let s = An.hex(a.target.value);
    s.data != null ? t(4, (l = s)) : (a.target.value = i);
  }
  return (
    (n.$$set = (a) => {
      "color" in a && t(4, (l = a.color)),
        "id" in a && t(0, (o = a.id)),
        "width" in a && t(1, (r = a.width));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 16 && t(2, (i = l.toHex()));
    }),
    [o, r, i, f, l]
  );
}
class au extends be {
  constructor(e) {
    super();
    we(this, e, su, ru, Se, { color: 4, id: 0, width: 1 });
  }
}
function Xl(n, e, t) {
  const i = n.slice();
  return (i[34] = e[t]), i;
}
function Ul(n, e, t) {
  const i = n.slice();
  return (i[37] = e[t]), i;
}
function Vl(n, e, t) {
  const i = n.slice();
  return (i[34] = e[t]), i;
}
function Rl(n) {
  let e, t, i;
  return {
    c() {
      (e = k("div")), u(e, "class", "color-picker-background svelte-imelgj");
    },
    m(l, o) {
      H(l, e, o), t || ((i = tn(e, "click", n[23])), (t = !0));
    },
    p: Ee,
    d(l) {
      l && M(e), (t = !1), i();
    },
  };
}
function Pl(n) {
  let e, t, i;
  return {
    c() {
      (e = k("div")),
        u(e, "class", "color-picker-handle svelte-imelgj"),
        N(e, "width", n[7] + "px"),
        N(e, "height", n[8] + "px"),
        N(e, "background", n[0].toHex());
    },
    m(l, o) {
      H(l, e, o), t || ((i = tn(e, "click", n[22])), (t = !0));
    },
    p(l, o) {
      o[0] & 128 && N(e, "width", l[7] + "px"),
        o[0] & 256 && N(e, "height", l[8] + "px"),
        o[0] & 1 && N(e, "background", l[0].toHex());
    },
    d(l) {
      l && M(e), (t = !1), i();
    },
  };
}
function zl(n) {
  let e,
    t,
    i,
    l,
    o = n[9] && Ll(n),
    r = n[3] && ql(n),
    f = n[10] && $l(n);
  return {
    c() {
      (e = k("div")),
        o && o.c(),
        (t = y()),
        r && r.c(),
        (i = y()),
        f && f.c(),
        u(e, "class", "color-picker-controls svelte-imelgj"),
        N(e, "background", n[4]);
    },
    m(a, s) {
      H(a, e, s),
        o && o.m(e, null),
        g(e, t),
        r && r.m(e, null),
        g(e, i),
        f && f.m(e, null),
        (l = !0);
    },
    p(a, s) {
      a[9]
        ? o
          ? (o.p(a, s), s[0] & 512 && w(o, 1))
          : ((o = Ll(a)), o.c(), w(o, 1), o.m(e, t))
        : o &&
          (ce(),
          C(o, 1, 1, () => {
            o = null;
          }),
          ge()),
        a[3]
          ? r
            ? (r.p(a, s), s[0] & 8 && w(r, 1))
            : ((r = ql(a)), r.c(), w(r, 1), r.m(e, i))
          : r &&
            (ce(),
            C(r, 1, 1, () => {
              r = null;
            }),
            ge()),
        a[10]
          ? f
            ? (f.p(a, s), s[0] & 1024 && w(f, 1))
            : ((f = $l(a)), f.c(), w(f, 1), f.m(e, null))
          : f &&
            (ce(),
            C(f, 1, 1, () => {
              f = null;
            }),
            ge()),
        (!l || s[0] & 16) && N(e, "background", a[4]);
    },
    i(a) {
      l || (w(o), w(r), w(f), (l = !0));
    },
    o(a) {
      C(o), C(r), C(f), (l = !1);
    },
    d(a) {
      a && M(e), o && o.d(), r && r.d(), f && f.d();
    },
  };
}
function Ll(n) {
  let e, t, i;
  function l(r) {
    n[26](r);
  }
  let o = { dimensionX: n[18], dimensionY: n[19], width: n[14], height: n[15] };
  return (
    n[0] !== void 0 && (o.color = n[0]),
    (e = new tu({ props: o })),
    Z.push(() => x(e, "color", l)),
    {
      c() {
        E(e.$$.fragment);
      },
      m(r, f) {
        F(e, r, f), (i = !0);
      },
      p(r, f) {
        const a = {};
        f[0] & 262144 && (a.dimensionX = r[18]),
          f[0] & 524288 && (a.dimensionY = r[19]),
          f[0] & 16384 && (a.width = r[14]),
          f[0] & 32768 && (a.height = r[15]),
          !t && f[0] & 1 && ((t = !0), (a.color = r[0]), $(() => (t = !1))),
          e.$set(a);
      },
      i(r) {
        i || (w(e.$$.fragment, r), (i = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (i = !1);
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function ql(n) {
  let e,
    t,
    i,
    l = n[6] && Nl(n),
    o = Object.keys($n),
    r = [];
  for (let a = 0; a < o.length; a += 1) r[a] = xl(Xl(n, o, a));
  const f = (a) =>
    C(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      l && l.c(), (e = y());
      for (let a = 0; a < r.length; a += 1) r[a].c();
      t = pn();
    },
    m(a, s) {
      l && l.m(a, s), H(a, e, s);
      for (let c = 0; c < r.length; c += 1) r[c].m(a, s);
      H(a, t, s), (i = !0);
    },
    p(a, s) {
      if (
        (a[6]
          ? l
            ? l.p(a, s)
            : ((l = Nl(a)), l.c(), l.m(e.parentNode, e))
          : l && (l.d(1), (l = null)),
        s[0] & 2177103)
      ) {
        o = Object.keys($n);
        let c;
        for (c = 0; c < o.length; c += 1) {
          const h = Xl(a, o, c);
          r[c]
            ? (r[c].p(h, s), w(r[c], 1))
            : ((r[c] = xl(h)), r[c].c(), w(r[c], 1), r[c].m(t.parentNode, t));
        }
        for (ce(), c = o.length; c < r.length; c += 1) f(c);
        ge();
      }
    },
    i(a) {
      if (!i) {
        for (let s = 0; s < o.length; s += 1) w(r[s]);
        i = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) C(r[s]);
      i = !1;
    },
    d(a) {
      l && l.d(a), a && M(e), ci(r, a), a && M(t);
    },
  };
}
function Nl(n) {
  let e,
    t = Object.keys($n),
    i = [];
  for (let l = 0; l < t.length; l += 1) i[l] = jl(Vl(n, t, l));
  return {
    c() {
      e = k("div");
      for (let l = 0; l < i.length; l += 1) i[l].c();
      u(e, "class", "tab-bar svelte-imelgj");
    },
    m(l, o) {
      H(l, e, o);
      for (let r = 0; r < i.length; r += 1) i[r].m(e, null);
    },
    p(l, o) {
      if (o[0] & 14) {
        t = Object.keys($n);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const f = Vl(l, t, r);
          i[r] ? i[r].p(f, o) : ((i[r] = jl(f)), i[r].c(), i[r].m(e, null));
        }
        for (; r < i.length; r += 1) i[r].d(1);
        i.length = t.length;
      }
    },
    d(l) {
      l && M(e), ci(i, l);
    },
  };
}
function Bl(n) {
  let e,
    t = n[34] + "",
    i,
    l,
    o,
    r;
  function f() {
    return n[27](n[34]);
  }
  return {
    c() {
      (e = k("div")),
        (i = Ie(t)),
        u(
          e,
          "class",
          (l = "tab " + (n[2] === n[34] ? "active" : "") + " svelte-imelgj")
        );
    },
    m(a, s) {
      H(a, e, s), g(e, i), o || ((r = tn(e, "click", f)), (o = !0));
    },
    p(a, s) {
      (n = a),
        s[0] & 4 &&
          l !==
            (l =
              "tab " + (n[2] === n[34] ? "active" : "") + " svelte-imelgj") &&
          u(e, "class", l);
    },
    d(a) {
      a && M(e), (o = !1), r();
    },
  };
}
function jl(n) {
  let e = Object.keys($n[n[34]]).some(i),
    t;
  function i(...o) {
    return n[25](n[34], ...o);
  }
  let l = e && Bl(n);
  return {
    c() {
      l && l.c(), (t = pn());
    },
    m(o, r) {
      l && l.m(o, r), H(o, t, r);
    },
    p(o, r) {
      (n = o),
        r[0] & 8 && (e = Object.keys($n[n[34]]).some(i)),
        e
          ? l
            ? l.p(n, r)
            : ((l = Bl(n)), l.c(), l.m(t.parentNode, t))
          : l && (l.d(1), (l = null));
    },
    d(o) {
      l && l.d(o), o && M(t);
    },
  };
}
function Gl(n) {
  let e,
    t,
    i,
    l = Object.keys($n[n[34]]),
    o = [];
  for (let f = 0; f < l.length; f += 1) o[f] = Ql(Ul(n, l, f));
  const r = (f) =>
    C(o[f], 1, 1, () => {
      o[f] = null;
    });
  return {
    c() {
      e = k("div");
      for (let f = 0; f < o.length; f += 1) o[f].c();
      (t = y()), u(e, "class", "group svelte-imelgj");
    },
    m(f, a) {
      H(f, e, a);
      for (let s = 0; s < o.length; s += 1) o[s].m(e, null);
      g(e, t), (i = !0);
    },
    p(f, a) {
      if (a[0] & 2177035) {
        l = Object.keys($n[f[34]]);
        let s;
        for (s = 0; s < l.length; s += 1) {
          const c = Ul(f, l, s);
          o[s]
            ? (o[s].p(c, a), w(o[s], 1))
            : ((o[s] = Ql(c)), o[s].c(), w(o[s], 1), o[s].m(e, t));
        }
        for (ce(), s = l.length; s < o.length; s += 1) r(s);
        ge();
      }
    },
    i(f) {
      if (!i) {
        for (let a = 0; a < l.length; a += 1) w(o[a]);
        i = !0;
      }
    },
    o(f) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1) C(o[a]);
      i = !1;
    },
    d(f) {
      f && M(e), ci(o, f);
    },
  };
}
function Wl(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a = n[13] && Jl(n),
    s = n[12] && Zl(n);
  function c(p) {
    n[30](p);
  }
  let h = { width: n[21], height: n[16], dimension: n[34] + "." + n[37] };
  n[0] !== void 0 && (h.color = n[0]),
    (l = new $a({ props: h })),
    Z.push(() => x(l, "color", c));
  let m = n[11] && Kl(n);
  return {
    c() {
      (e = k("div")),
        a && a.c(),
        (t = y()),
        s && s.c(),
        (i = y()),
        E(l.$$.fragment),
        (r = y()),
        m && m.c(),
        u(e, "class", "slider svelte-imelgj");
    },
    m(p, b) {
      H(p, e, b),
        a && a.m(e, null),
        g(e, t),
        s && s.m(e, null),
        g(e, i),
        F(l, e, null),
        g(e, r),
        m && m.m(e, null),
        (f = !0);
    },
    p(p, b) {
      p[13]
        ? a
          ? a.p(p, b)
          : ((a = Jl(p)), a.c(), a.m(e, t))
        : a && (a.d(1), (a = null)),
        p[12]
          ? s
            ? s.p(p, b)
            : ((s = Zl(p)), s.c(), s.m(e, i))
          : s && (s.d(1), (s = null));
      const S = {};
      b[0] & 2097152 && (S.width = p[21]),
        b[0] & 65536 && (S.height = p[16]),
        !o && b[0] & 1 && ((o = !0), (S.color = p[0]), $(() => (o = !1))),
        l.$set(S),
        p[11]
          ? m
            ? (m.p(p, b), b[0] & 2048 && w(m, 1))
            : ((m = Kl(p)), m.c(), w(m, 1), m.m(e, null))
          : m &&
            (ce(),
            C(m, 1, 1, () => {
              m = null;
            }),
            ge());
    },
    i(p) {
      f || (w(l.$$.fragment, p), w(m), (f = !0));
    },
    o(p) {
      C(l.$$.fragment, p), C(m), (f = !1);
    },
    d(p) {
      p && M(e), a && a.d(), s && s.d(), O(l), m && m.d();
    },
  };
}
function Jl(n) {
  let e, t, i;
  return {
    c() {
      (e = k("input")),
        u(e, "type", "radio"),
        (e.__value = n[34] + "." + n[37]),
        (e.value = e.__value),
        u(e, "id", n[34] + "-" + n[37]),
        u(e, "class", "svelte-imelgj"),
        n[29][0].push(e);
    },
    m(l, o) {
      H(l, e, o),
        (e.checked = e.__value === n[1]),
        t || ((i = tn(e, "change", n[28])), (t = !0));
    },
    p(l, o) {
      o[0] & 2 && (e.checked = e.__value === l[1]);
    },
    d(l) {
      l && M(e), n[29][0].splice(n[29][0].indexOf(e), 1), (t = !1), i();
    },
  };
}
function Zl(n) {
  let e,
    t = n[37].toUpperCase() + "",
    i,
    l;
  return {
    c() {
      (e = k("label")),
        (i = Ie(t)),
        u(e, "for", (l = n[34] + "-" + n[37])),
        u(e, "class", "svelte-imelgj");
    },
    m(o, r) {
      H(o, e, r), g(e, i);
    },
    p: Ee,
    d(o) {
      o && M(e);
    },
  };
}
function Kl(n) {
  let e, t, i;
  function l(r) {
    n[31](r);
  }
  let o = { dimension: n[34] + "." + n[37] };
  return (
    n[0] !== void 0 && (o.color = n[0]),
    (e = new ou({ props: o })),
    Z.push(() => x(e, "color", l)),
    {
      c() {
        E(e.$$.fragment);
      },
      m(r, f) {
        F(e, r, f), (i = !0);
      },
      p(r, f) {
        const a = {};
        !t && f[0] & 1 && ((t = !0), (a.color = r[0]), $(() => (t = !1))),
          e.$set(a);
      },
      i(r) {
        i || (w(e.$$.fragment, r), (i = !0));
      },
      o(r) {
        C(e.$$.fragment, r), (i = !1);
      },
      d(r) {
        O(e, r);
      },
    }
  );
}
function Ql(n) {
  let e,
    t,
    i = n[3][`${n[34]}.${n[37]}`] && Wl(n);
  return {
    c() {
      i && i.c(), (e = pn());
    },
    m(l, o) {
      i && i.m(l, o), H(l, e, o), (t = !0);
    },
    p(l, o) {
      l[3][`${l[34]}.${l[37]}`]
        ? i
          ? (i.p(l, o), o[0] & 8 && w(i, 1))
          : ((i = Wl(l)), i.c(), w(i, 1), i.m(e.parentNode, e))
        : i &&
          (ce(),
          C(i, 1, 1, () => {
            i = null;
          }),
          ge());
    },
    i(l) {
      t || (w(i), (t = !0));
    },
    o(l) {
      C(i), (t = !1);
    },
    d(l) {
      i && i.d(l), l && M(e);
    },
  };
}
function xl(n) {
  let e,
    t,
    i = (!n[6] || n[2] === n[34]) && Gl(n);
  return {
    c() {
      i && i.c(), (e = pn());
    },
    m(l, o) {
      i && i.m(l, o), H(l, e, o), (t = !0);
    },
    p(l, o) {
      !l[6] || l[2] === l[34]
        ? i
          ? (i.p(l, o), o[0] & 68 && w(i, 1))
          : ((i = Gl(l)), i.c(), w(i, 1), i.m(e.parentNode, e))
        : i &&
          (ce(),
          C(i, 1, 1, () => {
            i = null;
          }),
          ge());
    },
    i(l) {
      t || (w(i), (t = !0));
    },
    o(l) {
      C(i), (t = !1);
    },
    d(l) {
      i && i.d(l), l && M(e);
    },
  };
}
function $l(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f = n[12] && eo();
  function a(c) {
    n[32](c);
  }
  let s = { width: n[20], id: "hex" };
  return (
    n[0] !== void 0 && (s.color = n[0]),
    (l = new au({ props: s })),
    Z.push(() => x(l, "color", a)),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          f && f.c(),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text svelte-imelgj"),
          u(e, "class", "group svelte-imelgj");
      },
      m(c, h) {
        H(c, e, h),
          g(e, t),
          f && f.m(t, null),
          g(t, i),
          F(l, t, null),
          (r = !0);
      },
      p(c, h) {
        c[12] ? f || ((f = eo()), f.c(), f.m(t, i)) : f && (f.d(1), (f = null));
        const m = {};
        h[0] & 1048576 && (m.width = c[20]),
          !o && h[0] & 1 && ((o = !0), (m.color = c[0]), $(() => (o = !1))),
          l.$set(m);
      },
      i(c) {
        r || (w(l.$$.fragment, c), (r = !0));
      },
      o(c) {
        C(l.$$.fragment, c), (r = !1);
      },
      d(c) {
        c && M(e), f && f.d(), O(l);
      },
    }
  );
}
function eo(n) {
  let e;
  return {
    c() {
      (e = k("label")),
        (e.textContent = "Hex"),
        u(e, "for", "hex"),
        u(e, "class", "svelte-imelgj");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && M(e);
    },
  };
}
function uu(n) {
  let e,
    t,
    i,
    l,
    o,
    r = n[5] && !n[17] && Rl(n),
    f = n[5] && Pl(n),
    a = n[5] && !n[17] && zl(n);
  return {
    c() {
      (e = k("div")),
        r && r.c(),
        (t = y()),
        f && f.c(),
        (i = y()),
        a && a.c(),
        u(
          e,
          "class",
          (l = "color-picker " + (n[5] ? "collapse" : "") + " svelte-imelgj")
        );
    },
    m(s, c) {
      H(s, e, c),
        r && r.m(e, null),
        g(e, t),
        f && f.m(e, null),
        g(e, i),
        a && a.m(e, null),
        (o = !0);
    },
    p(s, c) {
      s[5] && !s[17]
        ? r
          ? r.p(s, c)
          : ((r = Rl(s)), r.c(), r.m(e, t))
        : r && (r.d(1), (r = null)),
        s[5]
          ? f
            ? f.p(s, c)
            : ((f = Pl(s)), f.c(), f.m(e, i))
          : f && (f.d(1), (f = null)),
        s[5] && !s[17]
          ? a
            ? (a.p(s, c), c[0] & 131104 && w(a, 1))
            : ((a = zl(s)), a.c(), w(a, 1), a.m(e, null))
          : a &&
            (ce(),
            C(a, 1, 1, () => {
              a = null;
            }),
            ge()),
        (!o ||
          (c[0] & 32 &&
            l !==
              (l =
                "color-picker " +
                (s[5] ? "collapse" : "") +
                " svelte-imelgj"))) &&
          u(e, "class", l);
    },
    i(s) {
      o || (w(a), (o = !0));
    },
    o(s) {
      C(a), (o = !1);
    },
    d(s) {
      s && M(e), r && r.d(), f && f.d(), a && a.d();
    },
  };
}
function fu(n, e, t) {
  let i,
    l,
    { colorString: o = "#ff9900" } = e,
    { color: r = An.hex(o) } = e;
  const f = Hr();
  let { selectedDimension: a = "hsl.h" } = e,
    { selectedTab: s = "hsl" } = e,
    { background: c = "#fff" } = e,
    { collapse: h = !1 } = e,
    { tabbed: m = !1 } = e,
    { handleWidth: p = 32 } = e,
    { handleHeight: b = 32 } = e,
    { showMatrix: S = !0 } = e,
    { showSliders: v = null } = e;
  if (v == null) {
    v = {};
    for (const Y in $n) for (const ke in $n[Y]) v[`${Y}.${ke}`] = !0;
  }
  let { showHex: d = !0 } = e,
    { showNumeric: _ = !0 } = e,
    { showLabels: A = !0 } = e,
    { selectDimensions: j = !0 } = e,
    { matrixWidth: le = 300 } = e,
    { matrixHeight: J = 200 } = e,
    { scrollbarHeight: B = 20 } = e,
    Q = !0,
    oe = null,
    z = null;
  const re = () => {
      t(17, (Q = !1)), f("pickerExpand", { collapsed: Q, color: r });
    },
    W = () => {
      t(17, (Q = !0)), f("pickerCollapse", { collapsed: Q, color: r });
    },
    L = [[]],
    te = (Y, ke) => v[`${Y}.${ke}`];
  function I(Y) {
    (r = Y), t(0, r);
  }
  const ue = (Y) => {
    t(2, (s = Y)), t(1, (a = `${Y}.${Object.keys($n[Y])[0]}`));
  };
  function ee() {
    (a = this.__value), t(1, a);
  }
  function T(Y) {
    (r = Y), t(0, r);
  }
  function fe(Y) {
    (r = Y), t(0, r);
  }
  function q(Y) {
    (r = Y), t(0, r);
  }
  return (
    (n.$$set = (Y) => {
      "colorString" in Y && t(24, (o = Y.colorString)),
        "color" in Y && t(0, (r = Y.color)),
        "selectedDimension" in Y && t(1, (a = Y.selectedDimension)),
        "selectedTab" in Y && t(2, (s = Y.selectedTab)),
        "background" in Y && t(4, (c = Y.background)),
        "collapse" in Y && t(5, (h = Y.collapse)),
        "tabbed" in Y && t(6, (m = Y.tabbed)),
        "handleWidth" in Y && t(7, (p = Y.handleWidth)),
        "handleHeight" in Y && t(8, (b = Y.handleHeight)),
        "showMatrix" in Y && t(9, (S = Y.showMatrix)),
        "showSliders" in Y && t(3, (v = Y.showSliders)),
        "showHex" in Y && t(10, (d = Y.showHex)),
        "showNumeric" in Y && t(11, (_ = Y.showNumeric)),
        "showLabels" in Y && t(12, (A = Y.showLabels)),
        "selectDimensions" in Y && t(13, (j = Y.selectDimensions)),
        "matrixWidth" in Y && t(14, (le = Y.matrixWidth)),
        "matrixHeight" in Y && t(15, (J = Y.matrixHeight)),
        "scrollbarHeight" in Y && t(16, (B = Y.scrollbarHeight));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty[0] & 1 && typeof r == "string" && t(0, (r = An.hex(r))),
        n.$$.dirty[0] & 2)
      ) {
        let [Y, ke] = a.split(".", 2),
          me = Object.keys($n[Y]);
        me.splice(me.indexOf(ke), 1),
          t(18, (oe = `${Y}.${me[0]}`)),
          t(19, (z = `${Y}.${me[1]}`));
      }
      n.$$.dirty[0] & 30720 &&
        t(21, (i = le - (j ? 25 : 0) - (A ? 25 : 0) - (_ ? 65 : 0))),
        n.$$.dirty[0] & 20480 && t(20, (l = le - (A ? 50 : 0)));
    }),
    [
      r,
      a,
      s,
      v,
      c,
      h,
      m,
      p,
      b,
      S,
      d,
      _,
      A,
      j,
      le,
      J,
      B,
      Q,
      oe,
      z,
      l,
      i,
      re,
      W,
      o,
      te,
      I,
      ue,
      ee,
      L,
      T,
      fe,
      q,
    ]
  );
}
class cu extends be {
  constructor(e) {
    super();
    we(
      this,
      e,
      fu,
      uu,
      Se,
      {
        colorString: 24,
        color: 0,
        selectedDimension: 1,
        selectedTab: 2,
        background: 4,
        collapse: 5,
        tabbed: 6,
        handleWidth: 7,
        handleHeight: 8,
        showMatrix: 9,
        showSliders: 3,
        showHex: 10,
        showNumeric: 11,
        showLabels: 12,
        selectDimensions: 13,
        matrixWidth: 14,
        matrixHeight: 15,
        scrollbarHeight: 16,
      },
      null,
      [-1, -1]
    );
  }
}
function gu(n) {
  let e, t, i, l;
  function o(f) {
    n[4](f);
  }
  let r = {
    colorString: n[0],
    background: du,
    collapse: !0,
    handleWidth: 135,
    handleHeight: 40,
    tabbed: n[2].tabbed,
    selectedTab: n[2].selectedTab,
    selectedDimension: n[2].selectedDimension,
    showMatrix: n[2].showMatrix,
    showSliders: n[2].showSlidersGlobal && n[2].showSliders,
    showHex: n[2].showHex,
    showLabels: n[2].showLabels,
    showNumeric: n[2].showNumeric,
    selectDimensions: n[2].selectDimensions,
    matrixWidth: n[2].matrixWidth,
    matrixHeight: n[2].matrixHeight,
    scrollbarHeight: n[2].scrollbarHeight,
  };
  return (
    n[1] !== void 0 && (r.color = n[1]),
    (t = new cu({ props: r })),
    Z.push(() => x(t, "color", o)),
    {
      c() {
        (e = k("div")),
          E(t.$$.fragment),
          u(
            e,
            "class",
            "text-black flex flex-row mx-auto border-2 border-gray-600"
          );
      },
      m(f, a) {
        H(f, e, a), F(t, e, null), (l = !0);
      },
      p(f, [a]) {
        const s = {};
        a & 1 && (s.colorString = f[0]),
          !i && a & 2 && ((i = !0), (s.color = f[1]), $(() => (i = !1))),
          t.$set(s);
      },
      i(f) {
        l || (w(t.$$.fragment, f), (l = !0));
      },
      o(f) {
        C(t.$$.fragment, f), (l = !1);
      },
      d(f) {
        f && M(e), O(t);
      },
    }
  );
}
const Qi = "#bd87eeff";
let du = "#fff";
function hu(n, e, t) {
  let { colorString: i = Qi } = e,
    { updateFunction: l = null } = e,
    o = An.hex(i),
    r = {
      selectedDimension: "hsl.h",
      tabbed: !0,
      selectedTab: "hsl",
      showMatrix: !0,
      showSlidersGlobal: !0,
      showHex: !0,
      showNumeric: !0,
      showLabels: !0,
      showSliders: {
        "hsl.h": !0,
        "hsl.s": !0,
        "hsl.l": !0,
        "hcl.h": !0,
        "hcl.c": !0,
        "hcl.l": !0,
        "lab.l": !0,
        "lab.a": !0,
        "lab.b": !0,
        "rgb.r": !0,
        "rgb.g": !0,
        "rgb.b": !0,
        "rgb.a": !0,
      },
      selectDimensions: !0,
      matrixWidth: 300,
      matrixHeight: 200,
      scrollbarHeight: 20,
    };
  function f(a) {
    (o = a), t(1, o), t(0, i);
  }
  return (
    (n.$$set = (a) => {
      "colorString" in a && t(0, (i = a.colorString)),
        "updateFunction" in a && t(3, (l = a.updateFunction));
    }),
    (n.$$.update = () => {
      if (
        (n.$$.dirty & 1 && t(1, (o = An.hex(i != "" ? i : Qi))),
        n.$$.dirty & 11 && l && o.toHex)
      ) {
        let a = o.toHex();
        a != i && a != Qi && l(o.toHex());
      }
    }),
    [i, o, r, l, f]
  );
}
class ei extends be {
  constructor(e) {
    super();
    we(this, e, hu, gu, Se, { colorString: 0, updateFunction: 3 });
  }
}
function no(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[18](s);
  }
  let a = { min: 1, max: 25, step: 0.5, handleUpdateFunction: n[17] };
  return (
    n[8].icons[n[1]].ringSize !== void 0 &&
      (a.value = n[8].icons[n[1]].ringSize),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Ring Size"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        c[0] & 2 && (h.handleUpdateFunction = s[17]),
          !o &&
            c[0] & 258 &&
            ((o = !0),
            (h.value = s[8].icons[s[1]].ringSize),
            $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function to(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[20](s);
  }
  let a = { center: !0, handleUpdateFunction: n[19] };
  return (
    n[8].icons[n[1]].displayOutline !== void 0 &&
      (a.checked = n[8].icons[n[1]].displayOutline),
    (l = new Wi({ props: a })),
    Z.push(() => x(l, "checked", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Show Progress Outline"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        c[0] & 2 && (h.handleUpdateFunction = s[19]),
          !o &&
            c[0] & 258 &&
            ((o = !0),
            (h.checked = s[8].icons[s[1]].displayOutline),
            $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function io(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[34](s);
  }
  let a = { min: 0, max: 100, handleUpdateFunction: n[33] };
  return (
    n[8].icons[n[1]].xAxisRound !== void 0 &&
      (a.value = n[8].icons[n[1]].xAxisRound),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "X-axis Curve"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        c[0] & 2 && (h.handleUpdateFunction = s[33]),
          !o &&
            c[0] & 258 &&
            ((o = !0),
            (h.value = s[8].icons[s[1]].xAxisRound),
            $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function lo(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[36](s);
  }
  let a = { min: 0, max: 100, handleUpdateFunction: n[35] };
  return (
    n[8].icons[n[1]].yAxisRound !== void 0 &&
      (a.value = n[8].icons[n[1]].yAxisRound),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Y-axis Curve"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        c[0] & 2 && (h.handleUpdateFunction = s[35]),
          !o &&
            c[0] & 258 &&
            ((o = !0),
            (h.value = s[8].icons[s[1]].yAxisRound),
            $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function oo(n) {
  let e, t, i, l, o, r, f, a;
  function s(m) {
    n[37](m);
  }
  function c(m) {
    n[38](m);
  }
  let h = { valuesArray: n[6] };
  return (
    n[7] !== void 0 && (h.value = n[7]),
    n[2] !== void 0 && (h.selectedIndex = n[2]),
    (o = new Yi({ props: h })),
    Z.push(() => x(o, "value", s)),
    Z.push(() => x(o, "selectedIndex", c)),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (i = k("p")),
          (i.textContent = "Icon State"),
          (l = y()),
          E(o.$$.fragment),
          u(i, "class", "text-lg text-center mb-2"),
          u(t, "class", "w-50"),
          u(e, "class", "flex flex-row justify-center mt-4");
      },
      m(m, p) {
        H(m, e, p), g(e, t), g(t, i), g(t, l), F(o, t, null), (a = !0);
      },
      p(m, p) {
        const b = {};
        p[0] & 64 && (b.valuesArray = m[6]),
          !r && p[0] & 128 && ((r = !0), (b.value = m[7]), $(() => (r = !1))),
          !f &&
            p[0] & 4 &&
            ((f = !0), (b.selectedIndex = m[2]), $(() => (f = !1))),
          o.$set(b);
      },
      i(m) {
        a || (w(o.$$.fragment, m), (a = !0));
      },
      o(m) {
        C(o.$$.fragment, m), (a = !1);
      },
      d(m) {
        m && M(e), O(o);
      },
    }
  );
}
function ro(n) {
  let e, t, i, l, o;
  return (
    (l = new ei({
      props: {
        colorString: n[4].icons[n[1]].colorEffects[n[2]].innerColor,
        updateFunction: n[54],
      },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Inner Color"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2"),
          u(e, "class", "flex flex-col mx-auto");
      },
      m(r, f) {
        H(r, e, f), g(e, t), g(e, i), F(l, e, null), (o = !0);
      },
      p(r, f) {
        const a = {};
        f[0] & 22 &&
          (a.colorString = r[4].icons[r[1]].colorEffects[r[2]].innerColor),
          f[0] & 6 && (a.updateFunction = r[54]),
          l.$set(a);
      },
      i(r) {
        o || (w(l.$$.fragment, r), (o = !0));
      },
      o(r) {
        C(l.$$.fragment, r), (o = !1);
      },
      d(r) {
        r && M(e), O(l);
      },
    }
  );
}
function mu(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h,
    m,
    p,
    b,
    S,
    v,
    d,
    _,
    A,
    j,
    le,
    J,
    B,
    Q,
    oe,
    z,
    re,
    W,
    L,
    te,
    I,
    ue,
    ee,
    T,
    fe,
    q,
    Y,
    ke,
    me,
    ne,
    P,
    he,
    Le,
    gn,
    ie,
    Me,
    wn,
    ye,
    ln,
    Mn,
    De,
    Sn,
    nt,
    an,
    Hn,
    U,
    on,
    Ye,
    X,
    kn,
    bt,
    En,
    Gn,
    at,
    Fn,
    Cn,
    wt,
    Ce,
    Vn,
    ut,
    vn,
    On,
    ft,
    pe,
    Yn,
    St,
    Rn,
    Pn,
    kt,
    zn,
    Re,
    Wn,
    dn,
    tt,
    Wt,
    un,
    Jn,
    Jt,
    Xe,
    Ct,
    ct,
    hn,
    gt,
    Ln,
    mn,
    It,
    qn,
    it,
    Zt,
    rn,
    vt,
    Nn,
    fn,
    Zn,
    Kt,
    Ue,
    At,
    dt,
    _n,
    ht,
    Bn,
    jn,
    Qt,
    Tn,
    lt,
    yt,
    Oe,
    mt,
    _t,
    ot,
    Dt,
    ni,
    Kn,
    xt,
    Pe,
    Ve;
  r = new Yi({
    props: { valuesArray: ll, value: n[1], handleSelectFunction: n[10] },
  });
  function di(D) {
    n[12](D);
  }
  let ti = { valuesArray: Wo, handleSelectFunction: n[11] };
  n[8].icons[n[1]].shape !== void 0 && (ti.value = n[8].icons[n[1]].shape),
    (h = new Yi({ props: ti })),
    Z.push(() => x(h, "value", di));
  function hi(D) {
    n[14](D);
  }
  let ii = { min: 1, max: 200, handleUpdateFunction: n[13] };
  n[8].icons[n[1]].width !== void 0 && (ii.value = n[8].icons[n[1]].width),
    (J = new _e({ props: ii })),
    Z.push(() => x(J, "value", hi));
  function mi(D) {
    n[16](D);
  }
  let li = { min: 1, max: 200, handleUpdateFunction: n[15] };
  n[8].icons[n[1]].height !== void 0 && (li.value = n[8].icons[n[1]].height),
    (W = new _e({ props: li })),
    Z.push(() => x(W, "value", mi));
  let qe = n[8].icons[n[1]].ringSize != null && no(n),
    Ne = n[8].icons[n[1]].displayOutline != null && to(n);
  function _i(D) {
    n[22](D);
  }
  let oi = { min: -20, max: 20, step: 0.25, handleUpdateFunction: n[21] };
  n[8].icons[n[1]].translateX !== void 0 &&
    (oi.value = n[8].icons[n[1]].translateX),
    (q = new _e({ props: oi })),
    Z.push(() => x(q, "value", _i));
  function pi(D) {
    n[24](D);
  }
  let ri = { min: -20, max: 20, step: 0.25, handleUpdateFunction: n[23] };
  n[8].icons[n[1]].translateY !== void 0 &&
    (ri.value = n[8].icons[n[1]].translateY),
    (he = new _e({ props: ri })),
    Z.push(() => x(he, "value", pi));
  function Be(D) {
    n[26](D);
  }
  let je = { min: 0, max: 360, handleUpdateFunction: n[25] };
  n[8].icons[n[1]].rotateDegree !== void 0 &&
    (je.value = n[8].icons[n[1]].rotateDegree),
    (ye = new _e({ props: je })),
    Z.push(() => x(ye, "value", Be));
  function Ge(D) {
    n[28](D);
  }
  let We = { min: -10, max: 10, step: 0.01, handleUpdateFunction: n[27] };
  n[8].icons[n[1]].iconTranslateX !== void 0 &&
    (We.value = n[8].icons[n[1]].iconTranslateX),
    (an = new _e({ props: We })),
    Z.push(() => x(an, "value", Ge));
  function Je(D) {
    n[30](D);
  }
  let Ze = { min: -10, max: 10, step: 0.01, handleUpdateFunction: n[29] };
  n[8].icons[n[1]].iconTranslateY !== void 0 &&
    (Ze.value = n[8].icons[n[1]].iconTranslateY),
    (kn = new _e({ props: Ze })),
    Z.push(() => x(kn, "value", Je));
  function bi(D) {
    n[32](D);
  }
  let si = { min: 0, max: 3, step: 0.01, handleUpdateFunction: n[31] };
  n[8].icons[n[1]].iconScaling !== void 0 &&
    (si.value = n[8].icons[n[1]].iconScaling),
    (Cn = new _e({ props: si })),
    Z.push(() => x(Cn, "value", bi));
  let Ke = n[8].icons[n[1]].xAxisRound != null && io(n),
    Qe = n[8].icons[n[1]].yAxisRound != null && lo(n),
    xe = n[3].length > 1 && oo(n);
  Pn = new ei({
    props: {
      colorString: n[4].icons[n[1]].colorEffects[n[2]].progressColor,
      updateFunction: n[39],
    },
  });
  function wi(D) {
    n[41](D);
  }
  let ai = { min: 0, max: 300, handleUpdateFunction: n[40] };
  n[4].icons[n[1]].colorEffects[n[2]].progressContrast !== void 0 &&
    (ai.value = n[4].icons[n[1]].colorEffects[n[2]].progressContrast),
    (dn = new _e({ props: ai })),
    Z.push(() => x(dn, "value", wi));
  function Si(D) {
    n[43](D);
  }
  let ui = { min: 0, max: 20, handleUpdateFunction: n[42] };
  n[4].icons[n[1]].colorEffects[n[2]].progressDropShadowAmount !== void 0 &&
    (ui.value = n[4].icons[n[1]].colorEffects[n[2]].progressDropShadowAmount),
    (Xe = new _e({ props: ui })),
    Z.push(() => x(Xe, "value", Si)),
    (mn = new ei({
      props: {
        colorString: n[4].icons[n[1]].colorEffects[n[2]].iconColor,
        updateFunction: n[44],
      },
    }));
  function ki(D) {
    n[46](D);
  }
  let fi = { min: 0, max: 300, handleUpdateFunction: n[45] };
  n[4].icons[n[1]].colorEffects[n[2]].iconContrast !== void 0 &&
    (fi.value = n[4].icons[n[1]].colorEffects[n[2]].iconContrast),
    (rn = new _e({ props: fi })),
    Z.push(() => x(rn, "value", ki));
  function Ci(D) {
    n[48](D);
  }
  let ze = { min: 0, max: 20, handleUpdateFunction: n[47] };
  n[4].icons[n[1]].colorEffects[n[2]].iconDropShadowAmount !== void 0 &&
    (ze.value = n[4].icons[n[1]].colorEffects[n[2]].iconDropShadowAmount),
    (Ue = new _e({ props: ze })),
    Z.push(() => x(Ue, "value", Ci)),
    (jn = new ei({
      props: {
        colorString: n[4].icons[n[1]].colorEffects[n[2]].outlineColor,
        updateFunction: n[49],
      },
    }));
  function R(D) {
    n[51](D);
  }
  let de = { min: 0, max: 300, handleUpdateFunction: n[50] };
  n[4].icons[n[1]].colorEffects[n[2]].outlineContrast !== void 0 &&
    (de.value = n[4].icons[n[1]].colorEffects[n[2]].outlineContrast),
    (Oe = new _e({ props: de })),
    Z.push(() => x(Oe, "value", R));
  function vi(D) {
    n[53](D);
  }
  let $t = { min: 0, max: 20, handleUpdateFunction: n[52] };
  n[4].icons[n[1]].colorEffects[n[2]].outlineDropShadowAmount !== void 0 &&
    ($t.value = n[4].icons[n[1]].colorEffects[n[2]].outlineDropShadowAmount),
    (Kn = new _e({ props: $t })),
    Z.push(() => x(Kn, "value", vi));
  let $e = n[4].icons[n[1]].editableColors.innerColor && ro(n);
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (i = k("div")),
        (l = k("p")),
        (l.textContent = "Icon Status To Edit"),
        (o = y()),
        E(r.$$.fragment),
        (f = y()),
        (a = k("div")),
        (s = k("p")),
        (s.textContent = "Icon Shape"),
        (c = y()),
        E(h.$$.fragment),
        (p = y()),
        (b = k("div")),
        (S = y()),
        (v = k("div")),
        (v.innerHTML = `<p class="text-xl font-bold">Single Icon Size &amp; Position Section</p> 
    <hr class="mb-6"/>`),
        (d = y()),
        (_ = k("div")),
        (A = k("div")),
        (j = k("p")),
        (j.textContent = "Width Size"),
        (le = y()),
        E(J.$$.fragment),
        (Q = y()),
        (oe = k("div")),
        (z = k("p")),
        (z.textContent = "Height Size"),
        (re = y()),
        E(W.$$.fragment),
        (te = y()),
        qe && qe.c(),
        (I = y()),
        Ne && Ne.c(),
        (ue = y()),
        (ee = k("div")),
        (T = k("p")),
        (T.textContent = "X-axis Position"),
        (fe = y()),
        E(q.$$.fragment),
        (ke = y()),
        (me = k("div")),
        (ne = k("p")),
        (ne.textContent = "Y-axis Position"),
        (P = y()),
        E(he.$$.fragment),
        (gn = y()),
        (ie = k("div")),
        (Me = k("p")),
        (Me.textContent = "Rotation"),
        (wn = y()),
        E(ye.$$.fragment),
        (Mn = y()),
        (De = k("div")),
        (Sn = k("p")),
        (Sn.textContent = "Icon X-axis Position"),
        (nt = y()),
        E(an.$$.fragment),
        (U = y()),
        (on = k("div")),
        (Ye = k("p")),
        (Ye.textContent = "Icon Y-axis Position"),
        (X = y()),
        E(kn.$$.fragment),
        (En = y()),
        (Gn = k("div")),
        (at = k("p")),
        (at.textContent = "Icon Size"),
        (Fn = y()),
        E(Cn.$$.fragment),
        (Ce = y()),
        Ke && Ke.c(),
        (Vn = y()),
        Qe && Qe.c(),
        (ut = y()),
        (vn = k("div")),
        (vn.innerHTML = `<p class="text-xl font-bold">Single Icon Color Section</p> 
    <hr/>`),
        (On = y()),
        xe && xe.c(),
        (ft = y()),
        (pe = k("div")),
        (Yn = k("div")),
        (St = k("p")),
        (St.textContent = "Progress Color"),
        (Rn = y()),
        E(Pn.$$.fragment),
        (kt = y()),
        (zn = k("div")),
        (Re = k("p")),
        (Re.textContent = "Progress Contrast"),
        (Wn = y()),
        E(dn.$$.fragment),
        (Wt = y()),
        (un = k("div")),
        (Jn = k("p")),
        (Jn.textContent = "Progress Shadow"),
        (Jt = y()),
        E(Xe.$$.fragment),
        (ct = y()),
        (hn = k("div")),
        (gt = k("p")),
        (gt.textContent = "Icon Color"),
        (Ln = y()),
        E(mn.$$.fragment),
        (It = y()),
        (qn = k("div")),
        (it = k("p")),
        (it.textContent = "Icon Contrast"),
        (Zt = y()),
        E(rn.$$.fragment),
        (Nn = y()),
        (fn = k("div")),
        (Zn = k("p")),
        (Zn.textContent = "Icon Shadow"),
        (Kt = y()),
        E(Ue.$$.fragment),
        (dt = y()),
        (_n = k("div")),
        (ht = k("p")),
        (ht.textContent = "Outline Color"),
        (Bn = y()),
        E(jn.$$.fragment),
        (Qt = y()),
        (Tn = k("div")),
        (lt = k("p")),
        (lt.textContent = "Outline Contrast"),
        (yt = y()),
        E(Oe.$$.fragment),
        (_t = y()),
        (ot = k("div")),
        (Dt = k("p")),
        (Dt.textContent = "Outline Shadow"),
        (ni = y()),
        E(Kn.$$.fragment),
        (Pe = y()),
        $e && $e.c(),
        u(l, "class", "text-lg text-center mb-2"),
        u(i, "class", "max-w-50 ml-8"),
        u(t, "class", "flex-1"),
        u(s, "class", "text-lg text-center mb-2"),
        u(a, "class", "w-50"),
        u(b, "class", "flex-1"),
        u(e, "class", "flex flex-row mb-8 mt-4"),
        u(v, "class", "mx-8"),
        u(j, "class", "text-base text-center mb-2"),
        u(z, "class", "text-base text-center mb-2"),
        u(T, "class", "text-base text-center mb-2"),
        u(ne, "class", "text-base text-center mb-2"),
        u(Me, "class", "text-base text-center mb-2"),
        u(Sn, "class", "text-base text-center mb-2"),
        u(Ye, "class", "text-base text-center mb-2"),
        u(at, "class", "text-base text-center mb-2"),
        u(
          _,
          "class",
          "mx-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-end"
        ),
        u(vn, "class", "mx-8 mt-8"),
        u(St, "class", "text-base text-center mb-2"),
        u(Yn, "class", "flex flex-col mx-auto"),
        u(Re, "class", "text-base text-center mb-2"),
        u(Jn, "class", "text-base text-center mb-2"),
        u(gt, "class", "text-base text-center mb-2"),
        u(hn, "class", "flex flex-col mx-auto"),
        u(it, "class", "text-base text-center mb-2"),
        u(Zn, "class", "text-base text-center mb-2"),
        u(ht, "class", "text-base text-center mb-2"),
        u(_n, "class", "flex flex-col mx-auto"),
        u(lt, "class", "text-base text-center mb-2"),
        u(Dt, "class", "text-base text-center mb-2"),
        u(
          pe,
          "class",
          "mx-4 mt-6 mb-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        );
    },
    m(D, se) {
      H(D, e, se),
        g(e, t),
        g(t, i),
        g(i, l),
        g(i, o),
        F(r, i, null),
        g(e, f),
        g(e, a),
        g(a, s),
        g(a, c),
        F(h, a, null),
        g(e, p),
        g(e, b),
        H(D, S, se),
        H(D, v, se),
        H(D, d, se),
        H(D, _, se),
        g(_, A),
        g(A, j),
        g(A, le),
        F(J, A, null),
        g(_, Q),
        g(_, oe),
        g(oe, z),
        g(oe, re),
        F(W, oe, null),
        g(_, te),
        qe && qe.m(_, null),
        g(_, I),
        Ne && Ne.m(_, null),
        g(_, ue),
        g(_, ee),
        g(ee, T),
        g(ee, fe),
        F(q, ee, null),
        g(_, ke),
        g(_, me),
        g(me, ne),
        g(me, P),
        F(he, me, null),
        g(_, gn),
        g(_, ie),
        g(ie, Me),
        g(ie, wn),
        F(ye, ie, null),
        g(_, Mn),
        g(_, De),
        g(De, Sn),
        g(De, nt),
        F(an, De, null),
        g(_, U),
        g(_, on),
        g(on, Ye),
        g(on, X),
        F(kn, on, null),
        g(_, En),
        g(_, Gn),
        g(Gn, at),
        g(Gn, Fn),
        F(Cn, Gn, null),
        g(_, Ce),
        Ke && Ke.m(_, null),
        g(_, Vn),
        Qe && Qe.m(_, null),
        H(D, ut, se),
        H(D, vn, se),
        H(D, On, se),
        xe && xe.m(D, se),
        H(D, ft, se),
        H(D, pe, se),
        g(pe, Yn),
        g(Yn, St),
        g(Yn, Rn),
        F(Pn, Yn, null),
        g(pe, kt),
        g(pe, zn),
        g(zn, Re),
        g(zn, Wn),
        F(dn, zn, null),
        g(pe, Wt),
        g(pe, un),
        g(un, Jn),
        g(un, Jt),
        F(Xe, un, null),
        g(pe, ct),
        g(pe, hn),
        g(hn, gt),
        g(hn, Ln),
        F(mn, hn, null),
        g(pe, It),
        g(pe, qn),
        g(qn, it),
        g(qn, Zt),
        F(rn, qn, null),
        g(pe, Nn),
        g(pe, fn),
        g(fn, Zn),
        g(fn, Kt),
        F(Ue, fn, null),
        g(pe, dt),
        g(pe, _n),
        g(_n, ht),
        g(_n, Bn),
        F(jn, _n, null),
        g(pe, Qt),
        g(pe, Tn),
        g(Tn, lt),
        g(Tn, yt),
        F(Oe, Tn, null),
        g(pe, _t),
        g(pe, ot),
        g(ot, Dt),
        g(ot, ni),
        F(Kn, ot, null),
        g(pe, Pe),
        $e && $e.m(pe, null),
        (Ve = !0);
    },
    p(D, se) {
      const Tt = {};
      se[0] & 2 && (Tt.value = D[1]),
        se[0] & 38 && (Tt.handleSelectFunction = D[10]),
        r.$set(Tt);
      const V = {};
      se[0] & 2 && (V.handleSelectFunction = D[11]),
        !m &&
          se[0] & 258 &&
          ((m = !0), (V.value = D[8].icons[D[1]].shape), $(() => (m = !1))),
        h.$set(V);
      const Ae = {};
      se[0] & 2 && (Ae.handleUpdateFunction = D[13]),
        !B &&
          se[0] & 258 &&
          ((B = !0), (Ae.value = D[8].icons[D[1]].width), $(() => (B = !1))),
        J.$set(Ae);
      const Mt = {};
      se[0] & 2 && (Mt.handleUpdateFunction = D[15]),
        !L &&
          se[0] & 258 &&
          ((L = !0), (Mt.value = D[8].icons[D[1]].height), $(() => (L = !1))),
        W.$set(Mt),
        D[8].icons[D[1]].ringSize != null
          ? qe
            ? (qe.p(D, se), se[0] & 258 && w(qe, 1))
            : ((qe = no(D)), qe.c(), w(qe, 1), qe.m(_, I))
          : qe &&
            (ce(),
            C(qe, 1, 1, () => {
              qe = null;
            }),
            ge()),
        D[8].icons[D[1]].displayOutline != null
          ? Ne
            ? (Ne.p(D, se), se[0] & 258 && w(Ne, 1))
            : ((Ne = to(D)), Ne.c(), w(Ne, 1), Ne.m(_, ue))
          : Ne &&
            (ce(),
            C(Ne, 1, 1, () => {
              Ne = null;
            }),
            ge());
      const Ht = {};
      se[0] & 2 && (Ht.handleUpdateFunction = D[21]),
        !Y &&
          se[0] & 258 &&
          ((Y = !0),
          (Ht.value = D[8].icons[D[1]].translateX),
          $(() => (Y = !1))),
        q.$set(Ht);
      const Et = {};
      se[0] & 2 && (Et.handleUpdateFunction = D[23]),
        !Le &&
          se[0] & 258 &&
          ((Le = !0),
          (Et.value = D[8].icons[D[1]].translateY),
          $(() => (Le = !1))),
        he.$set(Et);
      const Ft = {};
      se[0] & 2 && (Ft.handleUpdateFunction = D[25]),
        !ln &&
          se[0] & 258 &&
          ((ln = !0),
          (Ft.value = D[8].icons[D[1]].rotateDegree),
          $(() => (ln = !1))),
        ye.$set(Ft);
      const Ot = {};
      se[0] & 2 && (Ot.handleUpdateFunction = D[27]),
        !Hn &&
          se[0] & 258 &&
          ((Hn = !0),
          (Ot.value = D[8].icons[D[1]].iconTranslateX),
          $(() => (Hn = !1))),
        an.$set(Ot);
      const Yt = {};
      se[0] & 2 && (Yt.handleUpdateFunction = D[29]),
        !bt &&
          se[0] & 258 &&
          ((bt = !0),
          (Yt.value = D[8].icons[D[1]].iconTranslateY),
          $(() => (bt = !1))),
        kn.$set(Yt);
      const Xt = {};
      se[0] & 2 && (Xt.handleUpdateFunction = D[31]),
        !wt &&
          se[0] & 258 &&
          ((wt = !0),
          (Xt.value = D[8].icons[D[1]].iconScaling),
          $(() => (wt = !1))),
        Cn.$set(Xt),
        D[8].icons[D[1]].xAxisRound != null
          ? Ke
            ? (Ke.p(D, se), se[0] & 258 && w(Ke, 1))
            : ((Ke = io(D)), Ke.c(), w(Ke, 1), Ke.m(_, Vn))
          : Ke &&
            (ce(),
            C(Ke, 1, 1, () => {
              Ke = null;
            }),
            ge()),
        D[8].icons[D[1]].yAxisRound != null
          ? Qe
            ? (Qe.p(D, se), se[0] & 258 && w(Qe, 1))
            : ((Qe = lo(D)), Qe.c(), w(Qe, 1), Qe.m(_, null))
          : Qe &&
            (ce(),
            C(Qe, 1, 1, () => {
              Qe = null;
            }),
            ge()),
        D[3].length > 1
          ? xe
            ? (xe.p(D, se), se[0] & 8 && w(xe, 1))
            : ((xe = oo(D)), xe.c(), w(xe, 1), xe.m(ft.parentNode, ft))
          : xe &&
            (ce(),
            C(xe, 1, 1, () => {
              xe = null;
            }),
            ge());
      const Ut = {};
      se[0] & 22 &&
        (Ut.colorString = D[4].icons[D[1]].colorEffects[D[2]].progressColor),
        se[0] & 6 && (Ut.updateFunction = D[39]),
        Pn.$set(Ut);
      const Vt = {};
      se[0] & 6 && (Vt.handleUpdateFunction = D[40]),
        !tt &&
          se[0] & 22 &&
          ((tt = !0),
          (Vt.value = D[4].icons[D[1]].colorEffects[D[2]].progressContrast),
          $(() => (tt = !1))),
        dn.$set(Vt);
      const Rt = {};
      se[0] & 6 && (Rt.handleUpdateFunction = D[42]),
        !Ct &&
          se[0] & 22 &&
          ((Ct = !0),
          (Rt.value =
            D[4].icons[D[1]].colorEffects[D[2]].progressDropShadowAmount),
          $(() => (Ct = !1))),
        Xe.$set(Rt);
      const Ai = {};
      se[0] & 22 &&
        (Ai.colorString = D[4].icons[D[1]].colorEffects[D[2]].iconColor),
        se[0] & 6 && (Ai.updateFunction = D[44]),
        mn.$set(Ai);
      const yi = {};
      se[0] & 6 && (yi.handleUpdateFunction = D[45]),
        !vt &&
          se[0] & 22 &&
          ((vt = !0),
          (yi.value = D[4].icons[D[1]].colorEffects[D[2]].iconContrast),
          $(() => (vt = !1))),
        rn.$set(yi);
      const Ii = {};
      se[0] & 6 && (Ii.handleUpdateFunction = D[47]),
        !At &&
          se[0] & 22 &&
          ((At = !0),
          (Ii.value = D[4].icons[D[1]].colorEffects[D[2]].iconDropShadowAmount),
          $(() => (At = !1))),
        Ue.$set(Ii);
      const Di = {};
      se[0] & 22 &&
        (Di.colorString = D[4].icons[D[1]].colorEffects[D[2]].outlineColor),
        se[0] & 6 && (Di.updateFunction = D[49]),
        jn.$set(Di);
      const Ti = {};
      se[0] & 6 && (Ti.handleUpdateFunction = D[50]),
        !mt &&
          se[0] & 22 &&
          ((mt = !0),
          (Ti.value = D[4].icons[D[1]].colorEffects[D[2]].outlineContrast),
          $(() => (mt = !1))),
        Oe.$set(Ti);
      const Mi = {};
      se[0] & 6 && (Mi.handleUpdateFunction = D[52]),
        !xt &&
          se[0] & 22 &&
          ((xt = !0),
          (Mi.value =
            D[4].icons[D[1]].colorEffects[D[2]].outlineDropShadowAmount),
          $(() => (xt = !1))),
        Kn.$set(Mi),
        D[4].icons[D[1]].editableColors.innerColor
          ? $e
            ? ($e.p(D, se), se[0] & 18 && w($e, 1))
            : (($e = ro(D)), $e.c(), w($e, 1), $e.m(pe, null))
          : $e &&
            (ce(),
            C($e, 1, 1, () => {
              $e = null;
            }),
            ge());
    },
    i(D) {
      Ve ||
        (w(r.$$.fragment, D),
        w(h.$$.fragment, D),
        w(J.$$.fragment, D),
        w(W.$$.fragment, D),
        w(qe),
        w(Ne),
        w(q.$$.fragment, D),
        w(he.$$.fragment, D),
        w(ye.$$.fragment, D),
        w(an.$$.fragment, D),
        w(kn.$$.fragment, D),
        w(Cn.$$.fragment, D),
        w(Ke),
        w(Qe),
        w(xe),
        w(Pn.$$.fragment, D),
        w(dn.$$.fragment, D),
        w(Xe.$$.fragment, D),
        w(mn.$$.fragment, D),
        w(rn.$$.fragment, D),
        w(Ue.$$.fragment, D),
        w(jn.$$.fragment, D),
        w(Oe.$$.fragment, D),
        w(Kn.$$.fragment, D),
        w($e),
        (Ve = !0));
    },
    o(D) {
      C(r.$$.fragment, D),
        C(h.$$.fragment, D),
        C(J.$$.fragment, D),
        C(W.$$.fragment, D),
        C(qe),
        C(Ne),
        C(q.$$.fragment, D),
        C(he.$$.fragment, D),
        C(ye.$$.fragment, D),
        C(an.$$.fragment, D),
        C(kn.$$.fragment, D),
        C(Cn.$$.fragment, D),
        C(Ke),
        C(Qe),
        C(xe),
        C(Pn.$$.fragment, D),
        C(dn.$$.fragment, D),
        C(Xe.$$.fragment, D),
        C(mn.$$.fragment, D),
        C(rn.$$.fragment, D),
        C(Ue.$$.fragment, D),
        C(jn.$$.fragment, D),
        C(Oe.$$.fragment, D),
        C(Kn.$$.fragment, D),
        C($e),
        (Ve = !1);
    },
    d(D) {
      D && M(e),
        O(r),
        O(h),
        D && M(S),
        D && M(v),
        D && M(d),
        D && M(_),
        O(J),
        O(W),
        qe && qe.d(),
        Ne && Ne.d(),
        O(q),
        O(he),
        O(ye),
        O(an),
        O(kn),
        O(Cn),
        Ke && Ke.d(),
        Qe && Qe.d(),
        D && M(ut),
        D && M(vn),
        D && M(On),
        xe && xe.d(D),
        D && M(ft),
        D && M(pe),
        O(Pn),
        O(dn),
        O(Xe),
        O(mn),
        O(rn),
        O(Ue),
        O(jn),
        O(Oe),
        O(Kn),
        $e && $e.d();
    },
  };
}
function _u(n) {
  let e, t, i, l, o;
  function r(a) {
    n[55](a);
  }
  let f = {
    name: "Single Status Icon Settings",
    icon: n[8].icons[n[1]].icon,
    color: n[9][n[5]],
    $$slots: { default: [mu] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Ui({ props: f })),
    Z.push(() => x(e, "group", r)),
    {
      c() {
        E(e.$$.fragment), (i = y()), (l = k("hr"));
      },
      m(a, s) {
        F(e, a, s), H(a, i, s), H(a, l, s), (o = !0);
      },
      p(a, s) {
        const c = {};
        s[0] & 258 && (c.icon = a[8].icons[a[1]].icon),
          s[0] & 32 && (c.color = a[9][a[5]]),
          (s[0] & 510) | (s[1] & 33554432) &&
            (c.$$scope = { dirty: s, ctx: a }),
          !t && s[0] & 1 && ((t = !0), (c.group = a[0]), $(() => (t = !1))),
          e.$set(c);
      },
      i(a) {
        o || (w(e.$$.fragment, a), (o = !0));
      },
      o(a) {
        C(e.$$.fragment, a), (o = !1);
      },
      d(a) {
        O(e, a), a && M(i), a && M(l);
      },
    }
  );
}
function pu(n, e, t) {
  let i, l;
  ve(n, ae, (X) => t(4, (i = X))), ve(n, G, (X) => t(8, (l = X)));
  let { group: o = "" } = e,
    r = 0,
    f = [
      "#FFFFFF",
      "rgb(33, 171, 97)",
      "#326dbf",
      "#dd6e14",
      "#1a7cad",
      "rgb(220, 6, 6)",
      "rgb(138, 168, 189)",
      "rgb(255, 72, 133)",
      "rgb(185, 255, 40)",
      "#3FA554",
      "rgb(182, 72, 255)",
      "rgb(255, 72, 133)",
      "#D64763",
      "rgb(0, 0, 0)",
    ],
    a = "voice",
    s = 0,
    c = i.icons[a].colorEffects,
    h = c.map((X) => X.name),
    m = h[s];
  const p = (X) => {
      t(1, (a = X)), t(5, (r = ll.findIndex((kn) => kn == X))), t(2, (s = 0));
    },
    b = (X) => {
      G.updateIconShape(a, X), ae.updateIconShapeEditableColor(a, X);
    };
  function S(X) {
    n.$$.not_equal(l.icons[a].shape, X) && ((l.icons[a].shape = X), G.set(l));
  }
  const v = (X) => G.updateIconSetting(a, "width", X);
  function d(X) {
    n.$$.not_equal(l.icons[a].width, X) && ((l.icons[a].width = X), G.set(l));
  }
  const _ = (X) => G.updateIconSetting(a, "height", X);
  function A(X) {
    n.$$.not_equal(l.icons[a].height, X) && ((l.icons[a].height = X), G.set(l));
  }
  const j = (X) => G.updateIconSetting(a, "ringSize", X);
  function le(X) {
    n.$$.not_equal(l.icons[a].ringSize, X) &&
      ((l.icons[a].ringSize = X), G.set(l));
  }
  const J = (X) => G.updateIconSetting(a, "displayOutline", X);
  function B(X) {
    n.$$.not_equal(l.icons[a].displayOutline, X) &&
      ((l.icons[a].displayOutline = X), G.set(l));
  }
  const Q = (X) => G.updateIconSetting(a, "translateX", X);
  function oe(X) {
    n.$$.not_equal(l.icons[a].translateX, X) &&
      ((l.icons[a].translateX = X), G.set(l));
  }
  const z = (X) => G.updateIconSetting(a, "translateY", X);
  function re(X) {
    n.$$.not_equal(l.icons[a].translateY, X) &&
      ((l.icons[a].translateY = X), G.set(l));
  }
  const W = (X) => G.updateIconSetting(a, "rotateDegree", X);
  function L(X) {
    n.$$.not_equal(l.icons[a].rotateDegree, X) &&
      ((l.icons[a].rotateDegree = X), G.set(l));
  }
  const te = (X) => G.updateIconSetting(a, "iconTranslateX", X);
  function I(X) {
    n.$$.not_equal(l.icons[a].iconTranslateX, X) &&
      ((l.icons[a].iconTranslateX = X), G.set(l));
  }
  const ue = (X) => G.updateIconSetting(a, "iconTranslateY", X);
  function ee(X) {
    n.$$.not_equal(l.icons[a].iconTranslateY, X) &&
      ((l.icons[a].iconTranslateY = X), G.set(l));
  }
  const T = (X) => G.updateIconSetting(a, "iconScaling", X);
  function fe(X) {
    n.$$.not_equal(l.icons[a].iconScaling, X) &&
      ((l.icons[a].iconScaling = X), G.set(l));
  }
  const q = (X) => G.updateIconSetting(a, "xAxisRound", X);
  function Y(X) {
    n.$$.not_equal(l.icons[a].xAxisRound, X) &&
      ((l.icons[a].xAxisRound = X), G.set(l));
  }
  const ke = (X) => G.updateIconSetting(a, "yAxisRound", X);
  function me(X) {
    n.$$.not_equal(l.icons[a].yAxisRound, X) &&
      ((l.icons[a].yAxisRound = X), G.set(l));
  }
  function ne(X) {
    (m = X), t(7, m);
  }
  function P(X) {
    (s = X), t(2, s);
  }
  const he = (X) => ae.updateColorSetting(a, s, "progressColor", X),
    Le = (X) => ae.updateColorSetting(a, s, "progressContrast", X);
  function gn(X) {
    n.$$.not_equal(i.icons[a].colorEffects[s].progressContrast, X) &&
      ((i.icons[a].colorEffects[s].progressContrast = X), ae.set(i));
  }
  const ie = (X) => ae.updateColorSetting(a, s, "progressDropShadowAmount", X);
  function Me(X) {
    n.$$.not_equal(i.icons[a].colorEffects[s].progressDropShadowAmount, X) &&
      ((i.icons[a].colorEffects[s].progressDropShadowAmount = X), ae.set(i));
  }
  const wn = (X) => ae.updateColorSetting(a, s, "iconColor", X),
    ye = (X) => ae.updateColorSetting(a, s, "iconContrast", X);
  function ln(X) {
    n.$$.not_equal(i.icons[a].colorEffects[s].iconContrast, X) &&
      ((i.icons[a].colorEffects[s].iconContrast = X), ae.set(i));
  }
  const Mn = (X) => ae.updateColorSetting(a, s, "iconDropShadowAmount", X);
  function De(X) {
    n.$$.not_equal(i.icons[a].colorEffects[s].iconDropShadowAmount, X) &&
      ((i.icons[a].colorEffects[s].iconDropShadowAmount = X), ae.set(i));
  }
  const Sn = (X) => ae.updateColorSetting(a, s, "outlineColor", X),
    nt = (X) => ae.updateColorSetting(a, s, "outlineContrast", X);
  function an(X) {
    n.$$.not_equal(i.icons[a].colorEffects[s].outlineContrast, X) &&
      ((i.icons[a].colorEffects[s].outlineContrast = X), ae.set(i));
  }
  const Hn = (X) => ae.updateColorSetting(a, s, "outlineDropShadowAmount", X);
  function U(X) {
    n.$$.not_equal(i.icons[a].colorEffects[s].outlineDropShadowAmount, X) &&
      ((i.icons[a].colorEffects[s].outlineDropShadowAmount = X), ae.set(i));
  }
  const on = (X) => ae.updateColorSetting(a, s, "innerColor", X);
  function Ye(X) {
    (o = X), t(0, o);
  }
  return (
    (n.$$set = (X) => {
      "group" in X && t(0, (o = X.group));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 4 &&
        pt(ae, (i.globalColorSettings.editSingleIconStage = s), i),
        n.$$.dirty[0] & 2 &&
          pt(ae, (i.globalColorSettings.editSingleIconName = a), i),
        n.$$.dirty[0] & 26 &&
          (t(3, (c = i.icons[a].colorEffects)),
          t(6, (h = c.map((X) => X.name))));
    }),
    [
      o,
      a,
      s,
      c,
      i,
      r,
      h,
      m,
      l,
      f,
      p,
      b,
      S,
      v,
      d,
      _,
      A,
      j,
      le,
      J,
      B,
      Q,
      oe,
      z,
      re,
      W,
      L,
      te,
      I,
      ue,
      ee,
      T,
      fe,
      q,
      Y,
      ke,
      me,
      ne,
      P,
      he,
      Le,
      gn,
      ie,
      Me,
      wn,
      ye,
      ln,
      Mn,
      De,
      Sn,
      nt,
      an,
      Hn,
      U,
      on,
      Ye,
    ]
  );
}
class bu extends be {
  constructor(e) {
    super();
    we(this, e, pu, _u, Se, { group: 0 }, null, [-1, -1]);
  }
}
function so(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[6](s);
  }
  let a = {
    min: 1,
    max: 25,
    step: 0.5,
    handleUpdateFunction: G.updateAllRingSize,
  };
  return (
    n[1].globalIconSettings.ringSize !== void 0 &&
      (a.value = n[1].globalIconSettings.ringSize),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Ring Size"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        !o &&
          c[0] & 2 &&
          ((o = !0),
          (h.value = s[1].globalIconSettings.ringSize),
          $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function ao(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[8](s);
  }
  let a = { center: !0, handleUpdateFunction: n[7] };
  return (
    n[1].globalIconSettings.displayOutline !== void 0 &&
      (a.checked = n[1].globalIconSettings.displayOutline),
    (l = new Wi({ props: a })),
    Z.push(() => x(l, "checked", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Show Progress Outline"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        !o &&
          c[0] & 2 &&
          ((o = !0),
          (h.checked = s[1].globalIconSettings.displayOutline),
          $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function uo(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[15](s);
  }
  let a = { min: 0, max: 100, handleUpdateFunction: G.updateAllRoundXAxis };
  return (
    n[1].globalIconSettings.xAxisRound !== void 0 &&
      (a.value = n[1].globalIconSettings.xAxisRound),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "X-axis Curve"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        !o &&
          c[0] & 2 &&
          ((o = !0),
          (h.value = s[1].globalIconSettings.xAxisRound),
          $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function fo(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[16](s);
  }
  let a = { min: 0, max: 100, handleUpdateFunction: G.updateAllRoundYAxis };
  return (
    n[1].globalIconSettings.yAxisRound !== void 0 &&
      (a.value = n[1].globalIconSettings.yAxisRound),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Y-axis Curve"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        !o &&
          c[0] & 2 &&
          ((o = !0),
          (h.value = s[1].globalIconSettings.yAxisRound),
          $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function co(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[17](s);
  }
  let a = { min: 0, max: 30, handleUpdateFunction: G.updateAllDashes };
  return (
    n[1].globalIconSettings.dashes !== void 0 &&
      (a.value = n[1].globalIconSettings.dashes),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Dashes"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        !o &&
          c[0] & 2 &&
          ((o = !0),
          (h.value = s[1].globalIconSettings.dashes),
          $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function go(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[18](s);
  }
  let a = { min: 0, max: 30, handleUpdateFunction: G.updateAllDashGaps };
  return (
    n[1].globalIconSettings.gap !== void 0 &&
      (a.value = n[1].globalIconSettings.gap),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Dash Gap"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        !o &&
          c[0] & 2 &&
          ((o = !0),
          (h.value = s[1].globalIconSettings.gap),
          $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function ho(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[19](s);
  }
  let a = {
    min: 0,
    max: 1,
    step: 0.01,
    handleUpdateFunction: G.updateAllBorderGap,
  };
  return (
    n[1].globalIconSettings.borderGap !== void 0 &&
      (a.value = n[1].globalIconSettings.borderGap),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Border Gap"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        !o &&
          c[0] & 2 &&
          ((o = !0),
          (h.value = s[1].globalIconSettings.borderGap),
          $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function mo(n) {
  let e, t, i, l, o, r;
  function f(s) {
    n[20](s);
  }
  let a = {
    min: 0,
    max: 20,
    step: 0.5,
    handleUpdateFunction: G.updateAllBorderSize,
  };
  return (
    n[1].globalIconSettings.borderSize !== void 0 &&
      (a.value = n[1].globalIconSettings.borderSize),
    (l = new _e({ props: a })),
    Z.push(() => x(l, "value", f)),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Border Size"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2");
      },
      m(s, c) {
        H(s, e, c), g(e, t), g(e, i), F(l, e, null), (r = !0);
      },
      p(s, c) {
        const h = {};
        !o &&
          c[0] & 2 &&
          ((o = !0),
          (h.value = s[1].globalIconSettings.borderSize),
          $(() => (o = !1))),
          l.$set(h);
      },
      i(s) {
        r || (w(l.$$.fragment, s), (r = !0));
      },
      o(s) {
        C(l.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && M(e), O(l);
      },
    }
  );
}
function _o(n) {
  let e, t, i, l, o;
  return (
    (l = new ei({
      props: {
        colorString: n[2].globalColorSettings.innerColor,
        updateFunction: n[36],
      },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("p")),
          (t.textContent = "Inner Color"),
          (i = y()),
          E(l.$$.fragment),
          u(t, "class", "text-base text-center mb-2"),
          u(e, "class", "flex flex-col mx-auto");
      },
      m(r, f) {
        H(r, e, f), g(e, t), g(e, i), F(l, e, null), (o = !0);
      },
      p(r, f) {
        const a = {};
        f[0] & 4 && (a.colorString = r[2].globalColorSettings.innerColor),
          l.$set(a);
      },
      i(r) {
        o || (w(l.$$.fragment, r), (o = !0));
      },
      o(r) {
        C(l.$$.fragment, r), (o = !1);
      },
      d(r) {
        r && M(e), O(l);
      },
    }
  );
}
function wu(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h,
    m,
    p,
    b,
    S,
    v,
    d,
    _,
    A,
    j,
    le,
    J,
    B,
    Q,
    oe,
    z,
    re,
    W,
    L,
    te,
    I,
    ue,
    ee,
    T,
    fe,
    q,
    Y,
    ke,
    me,
    ne,
    P,
    he,
    Le,
    gn,
    ie,
    Me,
    wn,
    ye,
    ln,
    Mn,
    De,
    Sn,
    nt,
    an,
    Hn,
    U,
    on,
    Ye,
    X,
    kn,
    bt,
    En,
    Gn,
    at,
    Fn,
    Cn,
    wt,
    Ce,
    Vn,
    ut,
    vn,
    On,
    ft,
    pe,
    Yn,
    St,
    Rn,
    Pn,
    kt,
    zn,
    Re,
    Wn,
    dn,
    tt,
    Wt,
    un,
    Jn,
    Jt,
    Xe,
    Ct,
    ct,
    hn,
    gt,
    Ln,
    mn,
    It,
    qn,
    it,
    Zt,
    rn,
    vt,
    Nn,
    fn,
    Zn,
    Kt,
    Ue,
    At,
    dt,
    _n,
    ht,
    Bn,
    jn,
    Qt,
    Tn,
    lt,
    yt,
    Oe,
    mt,
    _t,
    ot;
  o = new Yi({
    props: {
      valuesArray: Wo,
      value: n[1].globalIconSettings.shape,
      handleSelectFunction: n[3],
    },
  });
  function Dt(R) {
    n[4](R);
  }
  let ni = { min: 1, max: 200, handleUpdateFunction: G.updateAllWidth };
  n[1].globalIconSettings.width !== void 0 &&
    (ni.value = n[1].globalIconSettings.width),
    (p = new _e({ props: ni })),
    Z.push(() => x(p, "value", Dt));
  function Kn(R) {
    n[5](R);
  }
  let xt = { min: 1, max: 200, handleUpdateFunction: G.updateAllHeight };
  n[1].globalIconSettings.height !== void 0 &&
    (xt.value = n[1].globalIconSettings.height),
    (A = new _e({ props: xt })),
    Z.push(() => x(A, "value", Kn));
  let Pe = n[1].globalIconSettings.ringSize != null && so(n),
    Ve = n[1].globalIconSettings.displayOutline != null && ao(n);
  function di(R) {
    n[9](R);
  }
  let ti = {
    min: -20,
    max: 20,
    step: 0.25,
    handleUpdateFunction: G.updateAllTranslateX,
  };
  n[1].globalIconSettings.translateX !== void 0 &&
    (ti.value = n[1].globalIconSettings.translateX),
    (re = new _e({ props: ti })),
    Z.push(() => x(re, "value", di));
  function hi(R) {
    n[10](R);
  }
  let ii = {
    min: -20,
    max: 20,
    step: 0.25,
    handleUpdateFunction: G.updateAllTranslateY,
  };
  n[1].globalIconSettings.translateY !== void 0 &&
    (ii.value = n[1].globalIconSettings.translateY),
    (ee = new _e({ props: ii })),
    Z.push(() => x(ee, "value", hi));
  function mi(R) {
    n[11](R);
  }
  let li = { min: 0, max: 360, handleUpdateFunction: G.updateAllRotateDegree };
  n[1].globalIconSettings.rotateDegree !== void 0 &&
    (li.value = n[1].globalIconSettings.rotateDegree),
    (me = new _e({ props: li })),
    Z.push(() => x(me, "value", mi));
  function qe(R) {
    n[12](R);
  }
  let Ne = {
    min: -10,
    max: 10,
    step: 0.01,
    handleUpdateFunction: G.updateAllTranslateIconX,
  };
  n[1].globalIconSettings.iconTranslateX !== void 0 &&
    (Ne.value = n[1].globalIconSettings.iconTranslateX),
    (ie = new _e({ props: Ne })),
    Z.push(() => x(ie, "value", qe));
  function _i(R) {
    n[13](R);
  }
  let oi = {
    min: -10,
    max: 10,
    step: 0.01,
    handleUpdateFunction: G.updateAllTranslateIconY,
  };
  n[1].globalIconSettings.iconTranslateY !== void 0 &&
    (oi.value = n[1].globalIconSettings.iconTranslateY),
    (De = new _e({ props: oi })),
    Z.push(() => x(De, "value", _i));
  function pi(R) {
    n[14](R);
  }
  let ri = {
    min: 0,
    max: 3,
    step: 0.01,
    handleUpdateFunction: G.updateAllIconScale,
  };
  n[1].globalIconSettings.iconScaling !== void 0 &&
    (ri.value = n[1].globalIconSettings.iconScaling),
    (on = new _e({ props: ri })),
    Z.push(() => x(on, "value", pi));
  let Be = n[1].globalIconSettings.xAxisRound != null && uo(n),
    je = n[1].globalIconSettings.yAxisRound != null && fo(n),
    Ge = n[1].globalIconSettings.dashes != null && co(n),
    We = n[1].globalIconSettings.gap != null && go(n),
    Je = n[1].globalIconSettings.borderGap != null && ho(n),
    Ze = n[1].globalIconSettings.borderSize != null && mo(n);
  On = new ei({
    props: {
      colorString: n[2].globalColorSettings.progressColor,
      updateFunction: n[21],
    },
  });
  function bi(R) {
    n[23](R);
  }
  let si = { min: 0, max: 300, handleUpdateFunction: n[22] };
  n[2].globalColorSettings.progressContrast !== void 0 &&
    (si.value = n[2].globalColorSettings.progressContrast),
    (Rn = new _e({ props: si })),
    Z.push(() => x(Rn, "value", bi));
  function Ke(R) {
    n[25](R);
  }
  let Qe = { min: 0, max: 20, handleUpdateFunction: n[24] };
  n[2].globalColorSettings.progressDropShadowAmount !== void 0 &&
    (Qe.value = n[2].globalColorSettings.progressDropShadowAmount),
    (dn = new _e({ props: Qe })),
    Z.push(() => x(dn, "value", Ke)),
    (Xe = new ei({
      props: {
        colorString: n[2].globalColorSettings.iconColor,
        updateFunction: n[26],
      },
    }));
  function xe(R) {
    n[28](R);
  }
  let wi = { min: 0, max: 300, handleUpdateFunction: n[27] };
  n[2].globalColorSettings.iconContrast !== void 0 &&
    (wi.value = n[2].globalColorSettings.iconContrast),
    (Ln = new _e({ props: wi })),
    Z.push(() => x(Ln, "value", xe));
  function ai(R) {
    n[30](R);
  }
  let Si = { min: 0, max: 20, handleUpdateFunction: n[29] };
  n[2].globalColorSettings.iconDropShadowAmount !== void 0 &&
    (Si.value = n[2].globalColorSettings.iconDropShadowAmount),
    (rn = new _e({ props: Si })),
    Z.push(() => x(rn, "value", ai)),
    (Ue = new ei({
      props: {
        colorString: n[2].globalColorSettings.outlineColor,
        updateFunction: n[31],
      },
    }));
  function ui(R) {
    n[33](R);
  }
  let ki = { min: 0, max: 300, handleUpdateFunction: n[32] };
  n[2].globalColorSettings.outlineContrast !== void 0 &&
    (ki.value = n[2].globalColorSettings.outlineContrast),
    (Bn = new _e({ props: ki })),
    Z.push(() => x(Bn, "value", ui));
  function fi(R) {
    n[35](R);
  }
  let Ci = { min: 0, max: 20, handleUpdateFunction: n[34] };
  n[2].globalColorSettings.outlineDropShadowAmount !== void 0 &&
    (Ci.value = n[2].globalColorSettings.outlineDropShadowAmount),
    (Oe = new _e({ props: Ci })),
    Z.push(() => x(Oe, "value", fi));
  let ze = n[2].globalColorSettings.editableColors.innerColor && _o(n);
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (i = k("p")),
        (i.textContent = "Icon Shape"),
        (l = y()),
        E(o.$$.fragment),
        (r = y()),
        (f = k("div")),
        (f.innerHTML = `<p class="text-xl font-bold">Global Size &amp; Position Section</p> 
    <hr class="mb-6"/>`),
        (a = y()),
        (s = k("div")),
        (c = k("div")),
        (h = k("p")),
        (h.textContent = "Width Size"),
        (m = y()),
        E(p.$$.fragment),
        (S = y()),
        (v = k("div")),
        (d = k("p")),
        (d.textContent = "Height Size"),
        (_ = y()),
        E(A.$$.fragment),
        (le = y()),
        Pe && Pe.c(),
        (J = y()),
        Ve && Ve.c(),
        (B = y()),
        (Q = k("div")),
        (oe = k("p")),
        (oe.textContent = "X-axis Position"),
        (z = y()),
        E(re.$$.fragment),
        (L = y()),
        (te = k("div")),
        (I = k("p")),
        (I.textContent = "Y-axis Position"),
        (ue = y()),
        E(ee.$$.fragment),
        (fe = y()),
        (q = k("div")),
        (Y = k("p")),
        (Y.textContent = "Rotation"),
        (ke = y()),
        E(me.$$.fragment),
        (P = y()),
        (he = k("div")),
        (Le = k("p")),
        (Le.textContent = "Icon X-axis Position"),
        (gn = y()),
        E(ie.$$.fragment),
        (wn = y()),
        (ye = k("div")),
        (ln = k("p")),
        (ln.textContent = "Icon Y-axis Position"),
        (Mn = y()),
        E(De.$$.fragment),
        (nt = y()),
        (an = k("div")),
        (Hn = k("p")),
        (Hn.textContent = "Icon Size"),
        (U = y()),
        E(on.$$.fragment),
        (X = y()),
        Be && Be.c(),
        (kn = y()),
        je && je.c(),
        (bt = y()),
        Ge && Ge.c(),
        (En = y()),
        We && We.c(),
        (Gn = y()),
        Je && Je.c(),
        (at = y()),
        Ze && Ze.c(),
        (Fn = y()),
        (Cn = k("div")),
        (Cn.innerHTML = `<p class="text-xl font-bold">Global Color Section</p> 
    <hr/>`),
        (wt = y()),
        (Ce = k("div")),
        (Vn = k("div")),
        (ut = k("p")),
        (ut.textContent = "Progress Color"),
        (vn = y()),
        E(On.$$.fragment),
        (ft = y()),
        (pe = k("div")),
        (Yn = k("p")),
        (Yn.textContent = "Progress Contrast"),
        (St = y()),
        E(Rn.$$.fragment),
        (kt = y()),
        (zn = k("div")),
        (Re = k("p")),
        (Re.textContent = "Progress Shadow"),
        (Wn = y()),
        E(dn.$$.fragment),
        (Wt = y()),
        (un = k("div")),
        (Jn = k("p")),
        (Jn.textContent = "Icon Color"),
        (Jt = y()),
        E(Xe.$$.fragment),
        (Ct = y()),
        (ct = k("div")),
        (hn = k("p")),
        (hn.textContent = "Icon Contrast"),
        (gt = y()),
        E(Ln.$$.fragment),
        (It = y()),
        (qn = k("div")),
        (it = k("p")),
        (it.textContent = "Icon Shadow"),
        (Zt = y()),
        E(rn.$$.fragment),
        (Nn = y()),
        (fn = k("div")),
        (Zn = k("p")),
        (Zn.textContent = "Outline Color"),
        (Kt = y()),
        E(Ue.$$.fragment),
        (At = y()),
        (dt = k("div")),
        (_n = k("p")),
        (_n.textContent = "Outline Contrast"),
        (ht = y()),
        E(Bn.$$.fragment),
        (Qt = y()),
        (Tn = k("div")),
        (lt = k("p")),
        (lt.textContent = "Outline Shadow"),
        (yt = y()),
        E(Oe.$$.fragment),
        (_t = y()),
        ze && ze.c(),
        u(i, "class", "text-lg text-center mb-2"),
        u(t, "class", "w-50"),
        u(e, "class", "flex justify-center mb-8"),
        u(f, "class", "mx-8"),
        u(h, "class", "text-base text-center mb-2"),
        u(d, "class", "text-base text-center mb-2"),
        u(oe, "class", "text-base text-center mb-2"),
        u(I, "class", "text-base text-center mb-2"),
        u(Y, "class", "text-base text-center mb-2"),
        u(Le, "class", "text-base text-center mb-2"),
        u(ln, "class", "text-base text-center mb-2"),
        u(Hn, "class", "text-base text-center mb-2"),
        u(
          s,
          "class",
          "mx-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-end"
        ),
        u(Cn, "class", "mx-8 mt-8"),
        u(ut, "class", "text-base text-center mb-2"),
        u(Vn, "class", "flex flex-col mx-auto"),
        u(Yn, "class", "text-base text-center mb-2"),
        u(Re, "class", "text-base text-center mb-2"),
        u(Jn, "class", "text-base text-center mb-2"),
        u(un, "class", "flex flex-col mx-auto"),
        u(hn, "class", "text-base text-center mb-2"),
        u(it, "class", "text-base text-center mb-2"),
        u(Zn, "class", "text-base text-center mb-2"),
        u(fn, "class", "flex flex-col mx-auto"),
        u(_n, "class", "text-base text-center mb-2"),
        u(lt, "class", "text-base text-center mb-2"),
        u(
          Ce,
          "class",
          "mx-4 mt-6 mb-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        );
    },
    m(R, de) {
      H(R, e, de),
        g(e, t),
        g(t, i),
        g(t, l),
        F(o, t, null),
        H(R, r, de),
        H(R, f, de),
        H(R, a, de),
        H(R, s, de),
        g(s, c),
        g(c, h),
        g(c, m),
        F(p, c, null),
        g(s, S),
        g(s, v),
        g(v, d),
        g(v, _),
        F(A, v, null),
        g(s, le),
        Pe && Pe.m(s, null),
        g(s, J),
        Ve && Ve.m(s, null),
        g(s, B),
        g(s, Q),
        g(Q, oe),
        g(Q, z),
        F(re, Q, null),
        g(s, L),
        g(s, te),
        g(te, I),
        g(te, ue),
        F(ee, te, null),
        g(s, fe),
        g(s, q),
        g(q, Y),
        g(q, ke),
        F(me, q, null),
        g(s, P),
        g(s, he),
        g(he, Le),
        g(he, gn),
        F(ie, he, null),
        g(s, wn),
        g(s, ye),
        g(ye, ln),
        g(ye, Mn),
        F(De, ye, null),
        g(s, nt),
        g(s, an),
        g(an, Hn),
        g(an, U),
        F(on, an, null),
        g(s, X),
        Be && Be.m(s, null),
        g(s, kn),
        je && je.m(s, null),
        g(s, bt),
        Ge && Ge.m(s, null),
        g(s, En),
        We && We.m(s, null),
        g(s, Gn),
        Je && Je.m(s, null),
        g(s, at),
        Ze && Ze.m(s, null),
        H(R, Fn, de),
        H(R, Cn, de),
        H(R, wt, de),
        H(R, Ce, de),
        g(Ce, Vn),
        g(Vn, ut),
        g(Vn, vn),
        F(On, Vn, null),
        g(Ce, ft),
        g(Ce, pe),
        g(pe, Yn),
        g(pe, St),
        F(Rn, pe, null),
        g(Ce, kt),
        g(Ce, zn),
        g(zn, Re),
        g(zn, Wn),
        F(dn, zn, null),
        g(Ce, Wt),
        g(Ce, un),
        g(un, Jn),
        g(un, Jt),
        F(Xe, un, null),
        g(Ce, Ct),
        g(Ce, ct),
        g(ct, hn),
        g(ct, gt),
        F(Ln, ct, null),
        g(Ce, It),
        g(Ce, qn),
        g(qn, it),
        g(qn, Zt),
        F(rn, qn, null),
        g(Ce, Nn),
        g(Ce, fn),
        g(fn, Zn),
        g(fn, Kt),
        F(Ue, fn, null),
        g(Ce, At),
        g(Ce, dt),
        g(dt, _n),
        g(dt, ht),
        F(Bn, dt, null),
        g(Ce, Qt),
        g(Ce, Tn),
        g(Tn, lt),
        g(Tn, yt),
        F(Oe, Tn, null),
        g(Ce, _t),
        ze && ze.m(Ce, null),
        (ot = !0);
    },
    p(R, de) {
      const vi = {};
      de[0] & 2 && (vi.value = R[1].globalIconSettings.shape), o.$set(vi);
      const $t = {};
      !b &&
        de[0] & 2 &&
        ((b = !0),
        ($t.value = R[1].globalIconSettings.width),
        $(() => (b = !1))),
        p.$set($t);
      const $e = {};
      !j &&
        de[0] & 2 &&
        ((j = !0),
        ($e.value = R[1].globalIconSettings.height),
        $(() => (j = !1))),
        A.$set($e),
        R[1].globalIconSettings.ringSize != null
          ? Pe
            ? (Pe.p(R, de), de[0] & 2 && w(Pe, 1))
            : ((Pe = so(R)), Pe.c(), w(Pe, 1), Pe.m(s, J))
          : Pe &&
            (ce(),
            C(Pe, 1, 1, () => {
              Pe = null;
            }),
            ge()),
        R[1].globalIconSettings.displayOutline != null
          ? Ve
            ? (Ve.p(R, de), de[0] & 2 && w(Ve, 1))
            : ((Ve = ao(R)), Ve.c(), w(Ve, 1), Ve.m(s, B))
          : Ve &&
            (ce(),
            C(Ve, 1, 1, () => {
              Ve = null;
            }),
            ge());
      const D = {};
      !W &&
        de[0] & 2 &&
        ((W = !0),
        (D.value = R[1].globalIconSettings.translateX),
        $(() => (W = !1))),
        re.$set(D);
      const se = {};
      !T &&
        de[0] & 2 &&
        ((T = !0),
        (se.value = R[1].globalIconSettings.translateY),
        $(() => (T = !1))),
        ee.$set(se);
      const Tt = {};
      !ne &&
        de[0] & 2 &&
        ((ne = !0),
        (Tt.value = R[1].globalIconSettings.rotateDegree),
        $(() => (ne = !1))),
        me.$set(Tt);
      const V = {};
      !Me &&
        de[0] & 2 &&
        ((Me = !0),
        (V.value = R[1].globalIconSettings.iconTranslateX),
        $(() => (Me = !1))),
        ie.$set(V);
      const Ae = {};
      !Sn &&
        de[0] & 2 &&
        ((Sn = !0),
        (Ae.value = R[1].globalIconSettings.iconTranslateY),
        $(() => (Sn = !1))),
        De.$set(Ae);
      const Mt = {};
      !Ye &&
        de[0] & 2 &&
        ((Ye = !0),
        (Mt.value = R[1].globalIconSettings.iconScaling),
        $(() => (Ye = !1))),
        on.$set(Mt),
        R[1].globalIconSettings.xAxisRound != null
          ? Be
            ? (Be.p(R, de), de[0] & 2 && w(Be, 1))
            : ((Be = uo(R)), Be.c(), w(Be, 1), Be.m(s, kn))
          : Be &&
            (ce(),
            C(Be, 1, 1, () => {
              Be = null;
            }),
            ge()),
        R[1].globalIconSettings.yAxisRound != null
          ? je
            ? (je.p(R, de), de[0] & 2 && w(je, 1))
            : ((je = fo(R)), je.c(), w(je, 1), je.m(s, bt))
          : je &&
            (ce(),
            C(je, 1, 1, () => {
              je = null;
            }),
            ge()),
        R[1].globalIconSettings.dashes != null
          ? Ge
            ? (Ge.p(R, de), de[0] & 2 && w(Ge, 1))
            : ((Ge = co(R)), Ge.c(), w(Ge, 1), Ge.m(s, En))
          : Ge &&
            (ce(),
            C(Ge, 1, 1, () => {
              Ge = null;
            }),
            ge()),
        R[1].globalIconSettings.gap != null
          ? We
            ? (We.p(R, de), de[0] & 2 && w(We, 1))
            : ((We = go(R)), We.c(), w(We, 1), We.m(s, Gn))
          : We &&
            (ce(),
            C(We, 1, 1, () => {
              We = null;
            }),
            ge()),
        R[1].globalIconSettings.borderGap != null
          ? Je
            ? (Je.p(R, de), de[0] & 2 && w(Je, 1))
            : ((Je = ho(R)), Je.c(), w(Je, 1), Je.m(s, at))
          : Je &&
            (ce(),
            C(Je, 1, 1, () => {
              Je = null;
            }),
            ge()),
        R[1].globalIconSettings.borderSize != null
          ? Ze
            ? (Ze.p(R, de), de[0] & 2 && w(Ze, 1))
            : ((Ze = mo(R)), Ze.c(), w(Ze, 1), Ze.m(s, null))
          : Ze &&
            (ce(),
            C(Ze, 1, 1, () => {
              Ze = null;
            }),
            ge());
      const Ht = {};
      de[0] & 4 && (Ht.colorString = R[2].globalColorSettings.progressColor),
        On.$set(Ht);
      const Et = {};
      !Pn &&
        de[0] & 4 &&
        ((Pn = !0),
        (Et.value = R[2].globalColorSettings.progressContrast),
        $(() => (Pn = !1))),
        Rn.$set(Et);
      const Ft = {};
      !tt &&
        de[0] & 4 &&
        ((tt = !0),
        (Ft.value = R[2].globalColorSettings.progressDropShadowAmount),
        $(() => (tt = !1))),
        dn.$set(Ft);
      const Ot = {};
      de[0] & 4 && (Ot.colorString = R[2].globalColorSettings.iconColor),
        Xe.$set(Ot);
      const Yt = {};
      !mn &&
        de[0] & 4 &&
        ((mn = !0),
        (Yt.value = R[2].globalColorSettings.iconContrast),
        $(() => (mn = !1))),
        Ln.$set(Yt);
      const Xt = {};
      !vt &&
        de[0] & 4 &&
        ((vt = !0),
        (Xt.value = R[2].globalColorSettings.iconDropShadowAmount),
        $(() => (vt = !1))),
        rn.$set(Xt);
      const Ut = {};
      de[0] & 4 && (Ut.colorString = R[2].globalColorSettings.outlineColor),
        Ue.$set(Ut);
      const Vt = {};
      !jn &&
        de[0] & 4 &&
        ((jn = !0),
        (Vt.value = R[2].globalColorSettings.outlineContrast),
        $(() => (jn = !1))),
        Bn.$set(Vt);
      const Rt = {};
      !mt &&
        de[0] & 4 &&
        ((mt = !0),
        (Rt.value = R[2].globalColorSettings.outlineDropShadowAmount),
        $(() => (mt = !1))),
        Oe.$set(Rt),
        R[2].globalColorSettings.editableColors.innerColor
          ? ze
            ? (ze.p(R, de), de[0] & 4 && w(ze, 1))
            : ((ze = _o(R)), ze.c(), w(ze, 1), ze.m(Ce, null))
          : ze &&
            (ce(),
            C(ze, 1, 1, () => {
              ze = null;
            }),
            ge());
    },
    i(R) {
      ot ||
        (w(o.$$.fragment, R),
        w(p.$$.fragment, R),
        w(A.$$.fragment, R),
        w(Pe),
        w(Ve),
        w(re.$$.fragment, R),
        w(ee.$$.fragment, R),
        w(me.$$.fragment, R),
        w(ie.$$.fragment, R),
        w(De.$$.fragment, R),
        w(on.$$.fragment, R),
        w(Be),
        w(je),
        w(Ge),
        w(We),
        w(Je),
        w(Ze),
        w(On.$$.fragment, R),
        w(Rn.$$.fragment, R),
        w(dn.$$.fragment, R),
        w(Xe.$$.fragment, R),
        w(Ln.$$.fragment, R),
        w(rn.$$.fragment, R),
        w(Ue.$$.fragment, R),
        w(Bn.$$.fragment, R),
        w(Oe.$$.fragment, R),
        w(ze),
        (ot = !0));
    },
    o(R) {
      C(o.$$.fragment, R),
        C(p.$$.fragment, R),
        C(A.$$.fragment, R),
        C(Pe),
        C(Ve),
        C(re.$$.fragment, R),
        C(ee.$$.fragment, R),
        C(me.$$.fragment, R),
        C(ie.$$.fragment, R),
        C(De.$$.fragment, R),
        C(on.$$.fragment, R),
        C(Be),
        C(je),
        C(Ge),
        C(We),
        C(Je),
        C(Ze),
        C(On.$$.fragment, R),
        C(Rn.$$.fragment, R),
        C(dn.$$.fragment, R),
        C(Xe.$$.fragment, R),
        C(Ln.$$.fragment, R),
        C(rn.$$.fragment, R),
        C(Ue.$$.fragment, R),
        C(Bn.$$.fragment, R),
        C(Oe.$$.fragment, R),
        C(ze),
        (ot = !1);
    },
    d(R) {
      R && M(e),
        O(o),
        R && M(r),
        R && M(f),
        R && M(a),
        R && M(s),
        O(p),
        O(A),
        Pe && Pe.d(),
        Ve && Ve.d(),
        O(re),
        O(ee),
        O(me),
        O(ie),
        O(De),
        O(on),
        Be && Be.d(),
        je && je.d(),
        Ge && Ge.d(),
        We && We.d(),
        Je && Je.d(),
        Ze && Ze.d(),
        R && M(Fn),
        R && M(Cn),
        R && M(wt),
        R && M(Ce),
        O(On),
        O(Rn),
        O(dn),
        O(Xe),
        O(Ln),
        O(rn),
        O(Ue),
        O(Bn),
        O(Oe),
        ze && ze.d();
    },
  };
}
function Su(n) {
  let e, t, i, l, o;
  function r(a) {
    n[37](a);
  }
  let f = {
    name: "Global Status Icons Settings",
    icon: Er,
    color: "white",
    $$slots: { default: [wu] },
    $$scope: { ctx: n },
  };
  return (
    n[0] !== void 0 && (f.group = n[0]),
    (e = new Ui({ props: f })),
    Z.push(() => x(e, "group", r)),
    {
      c() {
        E(e.$$.fragment), (i = y()), (l = k("hr"));
      },
      m(a, s) {
        F(e, a, s), H(a, i, s), H(a, l, s), (o = !0);
      },
      p(a, s) {
        const c = {};
        (s[0] & 6) | (s[1] & 128) && (c.$$scope = { dirty: s, ctx: a }),
          !t && s[0] & 1 && ((t = !0), (c.group = a[0]), $(() => (t = !1))),
          e.$set(c);
      },
      i(a) {
        o || (w(e.$$.fragment, a), (o = !0));
      },
      o(a) {
        C(e.$$.fragment, a), (o = !1);
      },
      d(a) {
        O(e, a), a && M(i), a && M(l);
      },
    }
  );
}
function ku(n, e, t) {
  let i, l;
  ve(n, G, (P) => t(1, (i = P))), ve(n, ae, (P) => t(2, (l = P)));
  let { group: o = "" } = e;
  const r = (P) => {
    G.updateAllShapes(P), ae.updateAllIconShapeEditableColor(P);
  };
  function f(P) {
    n.$$.not_equal(i.globalIconSettings.width, P) &&
      ((i.globalIconSettings.width = P), G.set(i));
  }
  function a(P) {
    n.$$.not_equal(i.globalIconSettings.height, P) &&
      ((i.globalIconSettings.height = P), G.set(i));
  }
  function s(P) {
    n.$$.not_equal(i.globalIconSettings.ringSize, P) &&
      ((i.globalIconSettings.ringSize = P), G.set(i));
  }
  const c = (P) => G.updateAllDisplayOutline(P);
  function h(P) {
    n.$$.not_equal(i.globalIconSettings.displayOutline, P) &&
      ((i.globalIconSettings.displayOutline = P), G.set(i));
  }
  function m(P) {
    n.$$.not_equal(i.globalIconSettings.translateX, P) &&
      ((i.globalIconSettings.translateX = P), G.set(i));
  }
  function p(P) {
    n.$$.not_equal(i.globalIconSettings.translateY, P) &&
      ((i.globalIconSettings.translateY = P), G.set(i));
  }
  function b(P) {
    n.$$.not_equal(i.globalIconSettings.rotateDegree, P) &&
      ((i.globalIconSettings.rotateDegree = P), G.set(i));
  }
  function S(P) {
    n.$$.not_equal(i.globalIconSettings.iconTranslateX, P) &&
      ((i.globalIconSettings.iconTranslateX = P), G.set(i));
  }
  function v(P) {
    n.$$.not_equal(i.globalIconSettings.iconTranslateY, P) &&
      ((i.globalIconSettings.iconTranslateY = P), G.set(i));
  }
  function d(P) {
    n.$$.not_equal(i.globalIconSettings.iconScaling, P) &&
      ((i.globalIconSettings.iconScaling = P), G.set(i));
  }
  function _(P) {
    n.$$.not_equal(i.globalIconSettings.xAxisRound, P) &&
      ((i.globalIconSettings.xAxisRound = P), G.set(i));
  }
  function A(P) {
    n.$$.not_equal(i.globalIconSettings.yAxisRound, P) &&
      ((i.globalIconSettings.yAxisRound = P), G.set(i));
  }
  function j(P) {
    n.$$.not_equal(i.globalIconSettings.dashes, P) &&
      ((i.globalIconSettings.dashes = P), G.set(i));
  }
  function le(P) {
    n.$$.not_equal(i.globalIconSettings.gap, P) &&
      ((i.globalIconSettings.gap = P), G.set(i));
  }
  function J(P) {
    n.$$.not_equal(i.globalIconSettings.borderGap, P) &&
      ((i.globalIconSettings.borderGap = P), G.set(i));
  }
  function B(P) {
    n.$$.not_equal(i.globalIconSettings.borderSize, P) &&
      ((i.globalIconSettings.borderSize = P), G.set(i));
  }
  const Q = (P) => ae.updateAllDefaultEffectColorSetting("progressColor", P),
    oe = (P) => ae.updateAllDefaultEffectColorSetting("progressContrast", P);
  function z(P) {
    n.$$.not_equal(l.globalColorSettings.progressContrast, P) &&
      ((l.globalColorSettings.progressContrast = P), ae.set(l));
  }
  const re = (P) =>
    ae.updateAllDefaultEffectColorSetting("progressDropShadowAmount", P);
  function W(P) {
    n.$$.not_equal(l.globalColorSettings.progressDropShadowAmount, P) &&
      ((l.globalColorSettings.progressDropShadowAmount = P), ae.set(l));
  }
  const L = (P) => ae.updateAllDefaultEffectColorSetting("iconColor", P),
    te = (P) => ae.updateAllDefaultEffectColorSetting("iconContrast", P);
  function I(P) {
    n.$$.not_equal(l.globalColorSettings.iconContrast, P) &&
      ((l.globalColorSettings.iconContrast = P), ae.set(l));
  }
  const ue = (P) =>
    ae.updateAllDefaultEffectColorSetting("iconDropShadowAmount", P);
  function ee(P) {
    n.$$.not_equal(l.globalColorSettings.iconDropShadowAmount, P) &&
      ((l.globalColorSettings.iconDropShadowAmount = P), ae.set(l));
  }
  const T = (P) => ae.updateAllDefaultEffectColorSetting("outlineColor", P),
    fe = (P) => ae.updateAllDefaultEffectColorSetting("outlineContrast", P);
  function q(P) {
    n.$$.not_equal(l.globalColorSettings.outlineContrast, P) &&
      ((l.globalColorSettings.outlineContrast = P), ae.set(l));
  }
  const Y = (P) =>
    ae.updateAllDefaultEffectColorSetting("outlineDropShadowAmount", P);
  function ke(P) {
    n.$$.not_equal(l.globalColorSettings.outlineDropShadowAmount, P) &&
      ((l.globalColorSettings.outlineDropShadowAmount = P), ae.set(l));
  }
  const me = (P) => ae.updateAllDefaultEffectColorSetting("innerColor", P);
  function ne(P) {
    (o = P), t(0, o);
  }
  return (
    (n.$$set = (P) => {
      "group" in P && t(0, (o = P.group));
    }),
    [
      o,
      i,
      l,
      r,
      f,
      a,
      s,
      c,
      h,
      m,
      p,
      b,
      S,
      v,
      d,
      _,
      A,
      j,
      le,
      J,
      B,
      Q,
      oe,
      z,
      re,
      W,
      L,
      te,
      I,
      ue,
      ee,
      T,
      fe,
      q,
      Y,
      ke,
      me,
      ne,
    ]
  );
}
class Cu extends be {
  constructor(e) {
    super();
    we(this, e, ku, Su, Se, { group: 0 }, null, [-1, -1]);
  }
}
function po(n) {
  let e, t;
  return (
    (e = new Lt({
      props: {
        name: "Save Changes To Server",
        buttonClass: "my-auto",
        disable: n[1].saveUIState != "ready",
      },
    })),
    e.$on("click", n[5]),
    {
      c() {
        E(e.$$.fragment);
      },
      m(i, l) {
        F(e, i, l), (t = !0);
      },
      p(i, l) {
        const o = {};
        l & 2 && (o.disable = i[1].saveUIState != "ready"), e.$set(o);
      },
      i(i) {
        t || (w(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        O(e, i);
      },
    }
  );
}
function vu(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h,
    m,
    p,
    b,
    S,
    v,
    d,
    _,
    A,
    j,
    le,
    J,
    B,
    Q,
    oe,
    z,
    re,
    W,
    L,
    te,
    I;
  function ue(ie) {
    n[3](ie);
  }
  let ee = { center: !0 };
  n[1].designMode !== void 0 && (ee.checked = n[1].designMode),
    (a = new Wi({ props: ee })),
    Z.push(() => x(a, "checked", ue)),
    (m = new Lt({
      props: {
        name: "Reset Status Icon Settings",
        buttonClass: "mr-5 hover:bg-red-600",
      },
    })),
    m.$on("click", n[4]);
  let T = n[2].adminOnly && n[2].isAdmin && po(n);
  function fe(ie) {
    n[6](ie);
  }
  let q = {};
  n[0] !== void 0 && (q.group = n[0]),
    (d = new Cu({ props: q })),
    Z.push(() => x(d, "group", fe));
  function Y(ie) {
    n[7](ie);
  }
  let ke = {};
  n[0] !== void 0 && (ke.group = n[0]),
    (j = new bu({ props: ke })),
    Z.push(() => x(j, "group", Y));
  function me(ie) {
    n[8](ie);
  }
  let ne = {};
  n[0] !== void 0 && (ne.group = n[0]),
    (B = new Za({ props: ne })),
    Z.push(() => x(B, "group", me));
  function P(ie) {
    n[9](ie);
  }
  let he = {};
  n[0] !== void 0 && (he.group = n[0]),
    (z = new za({ props: he })),
    Z.push(() => x(z, "group", P));
  function Le(ie) {
    n[10](ie);
  }
  let gn = {};
  return (
    n[0] !== void 0 && (gn.group = n[0]),
    (L = new Ua({ props: gn })),
    Z.push(() => x(L, "group", Le)),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          (i = k("div")),
          (i.innerHTML =
            '<div><div class="flex flex-row items-center"><p class="ml-3 p-0">Status Icons Settings</p></div></div>'),
          (l = y()),
          (o = k("div")),
          (r = k("p")),
          (r.textContent = "Design Mode"),
          (f = y()),
          E(a.$$.fragment),
          (c = y()),
          (h = k("div")),
          E(m.$$.fragment),
          (p = y()),
          T && T.c(),
          (b = y()),
          (S = k("hr")),
          (v = y()),
          E(d.$$.fragment),
          (A = y()),
          E(j.$$.fragment),
          (J = y()),
          E(B.$$.fragment),
          (oe = y()),
          E(z.$$.fragment),
          (W = y()),
          E(L.$$.fragment),
          u(i, "class", "flex-1 flex flex-col justify-center min-w-min"),
          u(o, "class", "text-base"),
          u(h, "class", "flex flex-1 min-w-min justify-end"),
          u(t, "class", "my-3 text-2xl text-white flex flex-row"),
          u(e, "class", "text-sm flex flex-col text-[#e8e8e8] select-none");
      },
      m(ie, Me) {
        H(ie, e, Me),
          g(e, t),
          g(t, i),
          g(t, l),
          g(t, o),
          g(o, r),
          g(o, f),
          F(a, o, null),
          g(t, c),
          g(t, h),
          F(m, h, null),
          g(h, p),
          T && T.m(h, null),
          g(e, b),
          g(e, S),
          g(e, v),
          F(d, e, null),
          g(e, A),
          F(j, e, null),
          g(e, J),
          F(B, e, null),
          g(e, oe),
          F(z, e, null),
          g(e, W),
          F(L, e, null),
          (I = !0);
      },
      p(ie, [Me]) {
        const wn = {};
        !s &&
          Me & 2 &&
          ((s = !0), (wn.checked = ie[1].designMode), $(() => (s = !1))),
          a.$set(wn),
          ie[2].adminOnly && ie[2].isAdmin
            ? T
              ? (T.p(ie, Me), Me & 4 && w(T, 1))
              : ((T = po(ie)), T.c(), w(T, 1), T.m(h, null))
            : T &&
              (ce(),
              C(T, 1, 1, () => {
                T = null;
              }),
              ge());
        const ye = {};
        !_ && Me & 1 && ((_ = !0), (ye.group = ie[0]), $(() => (_ = !1))),
          d.$set(ye);
        const ln = {};
        !le && Me & 1 && ((le = !0), (ln.group = ie[0]), $(() => (le = !1))),
          j.$set(ln);
        const Mn = {};
        !Q && Me & 1 && ((Q = !0), (Mn.group = ie[0]), $(() => (Q = !1))),
          B.$set(Mn);
        const De = {};
        !re && Me & 1 && ((re = !0), (De.group = ie[0]), $(() => (re = !1))),
          z.$set(De);
        const Sn = {};
        !te && Me & 1 && ((te = !0), (Sn.group = ie[0]), $(() => (te = !1))),
          L.$set(Sn);
      },
      i(ie) {
        I ||
          (w(a.$$.fragment, ie),
          w(m.$$.fragment, ie),
          w(T),
          w(d.$$.fragment, ie),
          w(j.$$.fragment, ie),
          w(B.$$.fragment, ie),
          w(z.$$.fragment, ie),
          w(L.$$.fragment, ie),
          (I = !0));
      },
      o(ie) {
        C(a.$$.fragment, ie),
          C(m.$$.fragment, ie),
          C(T),
          C(d.$$.fragment, ie),
          C(j.$$.fragment, ie),
          C(B.$$.fragment, ie),
          C(z.$$.fragment, ie),
          C(L.$$.fragment, ie),
          (I = !1);
      },
      d(ie) {
        ie && M(e), O(a), O(m), T && T.d(), O(d), O(j), O(B), O(z), O(L);
      },
    }
  );
}
function Au(n, e, t) {
  let i, l;
  ve(n, G, (b) => t(1, (i = b))), ve(n, Fe, (b) => t(2, (l = b)));
  let o = "";
  function r(b) {
    n.$$.not_equal(i.designMode, b) && ((i.designMode = b), G.set(i));
  }
  const f = () => {
      G.resetPlayerStatusIcons(), ae.resetColorEffects(), xn.resetLayout();
    },
    a = () => {
      cs(), pt(G, (i.saveUIState = "updating"), i);
    };
  function s(b) {
    (o = b), t(0, o);
  }
  function c(b) {
    (o = b), t(0, o);
  }
  function h(b) {
    (o = b), t(0, o);
  }
  function m(b) {
    (o = b), t(0, o);
  }
  function p(b) {
    (o = b), t(0, o);
  }
  return [o, i, l, r, f, a, s, c, h, m, p];
}
class yu extends be {
  constructor(e) {
    super();
    we(this, e, Au, vu, Se, {});
  }
}
function bo(n, e, t) {
  const i = n.slice();
  return (i[9] = e[t]), i;
}
function wo(n, e, t) {
  const i = n.slice();
  return (i[9] = e[t]), (i[13] = t), i;
}
function So(n) {
  let e,
    t,
    i,
    l,
    o = n[9].name + "",
    r,
    f,
    a,
    s,
    c;
  t = new Dn({ props: { icon: n[9].icon, translateY: 0.27 } });
  function h() {
    return n[8](n[13]);
  }
  return {
    c() {
      (e = k("div")),
        E(t.$$.fragment),
        (i = y()),
        (l = k("span")),
        (r = Ie(o)),
        (f = y()),
        u(
          e,
          "class",
          "bg-[#232833] px-4 py-4 flex flex-row gap-3 cursor-pointer select-none"
        );
    },
    m(m, p) {
      H(m, e, p),
        F(t, e, null),
        g(e, i),
        g(e, l),
        g(l, r),
        g(e, f),
        (a = !0),
        s || ((c = tn(e, "click", h)), (s = !0));
    },
    p(m, p) {
      n = m;
    },
    i(m) {
      a || (w(t.$$.fragment, m), (a = !0));
    },
    o(m) {
      C(t.$$.fragment, m), (a = !1);
    },
    d(m) {
      m && M(e), O(t), (s = !1), c();
    },
  };
}
function ko(n) {
  let e,
    t,
    i =
      (!n[9].adminOnly ||
        !n[2].adminOnly ||
        (n[2].adminOnly && n[2].isAdmin)) &&
      So(n);
  return {
    c() {
      i && i.c(), (e = pn());
    },
    m(l, o) {
      i && i.m(l, o), H(l, e, o), (t = !0);
    },
    p(l, o) {
      !l[9].adminOnly || !l[2].adminOnly || (l[2].adminOnly && l[2].isAdmin)
        ? i
          ? (i.p(l, o), o & 4 && w(i, 1))
          : ((i = So(l)), i.c(), w(i, 1), i.m(e.parentNode, e))
        : i &&
          (ce(),
          C(i, 1, 1, () => {
            i = null;
          }),
          ge());
    },
    i(l) {
      t || (w(i), (t = !0));
    },
    o(l) {
      C(i), (t = !1);
    },
    d(l) {
      i && i.d(l), l && M(e);
    },
  };
}
function Co(n) {
  let e, t, i, l;
  var o = n[9].content;
  function r(f) {
    return {};
  }
  return (
    o && (t = new o(r())),
    {
      c() {
        (e = k("div")),
          t && E(t.$$.fragment),
          (i = y()),
          N(e, "display", n[1].name == n[9].name ? "flex" : "none"),
          u(e, "class", "flex-col w-5/6 px-5 overflow-y-scroll bg-[#232833]");
      },
      m(f, a) {
        H(f, e, a), t && F(t, e, null), g(e, i), (l = !0);
      },
      p(f, a) {
        if (o !== (o = f[9].content)) {
          if (t) {
            ce();
            const s = t;
            C(s.$$.fragment, 1, 0, () => {
              O(s, 1);
            }),
              ge();
          }
          o
            ? ((t = new o(r())),
              E(t.$$.fragment),
              w(t.$$.fragment, 1),
              F(t, e, i))
            : (t = null);
        }
        (!l || a & 2) &&
          N(e, "display", f[1].name == f[9].name ? "flex" : "none");
      },
      i(f) {
        l || (t && w(t.$$.fragment, f), (l = !0));
      },
      o(f) {
        t && C(t.$$.fragment, f), (l = !1);
      },
      d(f) {
        f && M(e), t && O(t);
      },
    }
  );
}
function vo(n) {
  let e,
    t,
    i =
      (!n[9].adminOnly ||
        !n[2].adminOnly ||
        (n[2].adminOnly && n[2].isAdmin)) &&
      Co(n);
  return {
    c() {
      i && i.c(), (e = pn());
    },
    m(l, o) {
      i && i.m(l, o), H(l, e, o), (t = !0);
    },
    p(l, o) {
      !l[9].adminOnly || !l[2].adminOnly || (l[2].adminOnly && l[2].isAdmin)
        ? i
          ? (i.p(l, o), o & 4 && w(i, 1))
          : ((i = Co(l)), i.c(), w(i, 1), i.m(e.parentNode, e))
        : i &&
          (ce(),
          C(i, 1, 1, () => {
            i = null;
          }),
          ge());
    },
    i(l) {
      t || (w(i), (t = !0));
    },
    o(l) {
      C(i), (t = !1);
    },
    d(l) {
      i && i.d(l), l && M(e);
    },
  };
}
function Iu(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h = n[5],
    m = [];
  for (let d = 0; d < h.length; d += 1) m[d] = ko(wo(n, h, d));
  const p = (d) =>
    C(m[d], 1, 1, () => {
      m[d] = null;
    });
  let b = n[5],
    S = [];
  for (let d = 0; d < b.length; d += 1) S[d] = vo(bo(n, b, d));
  const v = (d) =>
    C(S[d], 1, 1, () => {
      S[d] = null;
    });
  return {
    c() {
      (e = k("section")),
        (t = k("div")),
        (t.innerHTML =
          '<svg role="img" aria-label="drag handle" viewBox="0 0 24 24" height="24" width="24" class="mx-auto svelte-u84uy3"><path fill="white" d="M3,15V13H5V15H3M3,11V9H5V11H3M7,15V13H9V15H7M7,11V9H9V11H7M11,15V13H13V15H11M11,11V9H13V11H11M15,15V13H17V15H15M15,11V9H17V11H15M19,15V13H21V15H19M19,11V9H21V11H19Z"></path></svg>'),
        (i = y()),
        (l = k("div")),
        (o = k("div"));
      for (let d = 0; d < m.length; d += 1) m[d].c();
      r = y();
      for (let d = 0; d < S.length; d += 1) S[d].c();
      u(t, "class", "drag-bar bg-[#232833] svelte-u84uy3"),
        u(o, "class", "flex flex-col w-1/6 bg-[#31465e]"),
        u(l, "class", "flex font-semibold"),
        N(l, "height", "calc(100% - 24px)"),
        N(e, "display", n[2].show ? "flex" : "none"),
        u(
          e,
          "class",
          "w-[60vw] h-[60vh] flex-col bg-[#232833] shadow-lg text-white"
        );
    },
    m(d, _) {
      H(d, e, _), g(e, t), n[7](t), g(e, i), g(e, l), g(l, o);
      for (let A = 0; A < m.length; A += 1) m[A].m(o, null);
      g(l, r);
      for (let A = 0; A < S.length; A += 1) S[A].m(l, null);
      (a = !0),
        s ||
          ((c = Fr(
            (f = Or.call(null, e, {
              handle: n[0],
              bounds: "body",
              gpuAcceleration: !1,
              defaultPosition: { x: n[3] / 5, y: n[4] / 5 },
            }))
          )),
          (s = !0));
    },
    p(d, [_]) {
      if (_ & 100) {
        h = d[5];
        let A;
        for (A = 0; A < h.length; A += 1) {
          const j = wo(d, h, A);
          m[A]
            ? (m[A].p(j, _), w(m[A], 1))
            : ((m[A] = ko(j)), m[A].c(), w(m[A], 1), m[A].m(o, null));
        }
        for (ce(), A = h.length; A < m.length; A += 1) p(A);
        ge();
      }
      if (_ & 38) {
        b = d[5];
        let A;
        for (A = 0; A < b.length; A += 1) {
          const j = bo(d, b, A);
          S[A]
            ? (S[A].p(j, _), w(S[A], 1))
            : ((S[A] = vo(j)), S[A].c(), w(S[A], 1), S[A].m(l, null));
        }
        for (ce(), A = b.length; A < S.length; A += 1) v(A);
        ge();
      }
      (!a || _ & 4) && N(e, "display", d[2].show ? "flex" : "none"),
        f &&
          Yr(f.update) &&
          _ & 1 &&
          f.update.call(null, {
            handle: d[0],
            bounds: "body",
            gpuAcceleration: !1,
            defaultPosition: { x: d[3] / 5, y: d[4] / 5 },
          });
    },
    i(d) {
      if (!a) {
        for (let _ = 0; _ < h.length; _ += 1) w(m[_]);
        for (let _ = 0; _ < b.length; _ += 1) w(S[_]);
        a = !0;
      }
    },
    o(d) {
      m = m.filter(Boolean);
      for (let _ = 0; _ < m.length; _ += 1) C(m[_]);
      S = S.filter(Boolean);
      for (let _ = 0; _ < S.length; _ += 1) C(S[_]);
      a = !1;
    },
    d(d) {
      d && M(e), n[7](null), ci(m, d), ci(S, d), (s = !1), c();
    },
  };
}
function Du(n, e, t) {
  let i;
  ve(n, Fe, (m) => t(2, (i = m)));
  let l;
  const o = screen.width,
    r = screen.height;
  let f = [
      { name: "Hud Settings", icon: Xr, content: Aa, adminOnly: !1 },
      { name: "Status Icons", icon: Ur, content: yu, adminOnly: !0 },
    ],
    a = f[0];
  function s(m) {
    t(1, (a = f[m]));
  }
  function c(m) {
    Z[m ? "unshift" : "push"](() => {
      (l = m), t(0, l);
    });
  }
  return [l, a, i, o, r, f, s, c, (m) => s(m)];
}
class Tu extends be {
  constructor(e) {
    super();
    we(this, e, Du, Iu, Se, {});
  }
}
function Ao(n) {
  let e,
    t,
    i = (n[0].showSquareBorder || yn) && yo(),
    l = n[0].showCircleBorder && Io();
  return {
    c() {
      (e = k("div")),
        i && i.c(),
        (t = y()),
        l && l.c(),
        u(e, "class", "mapborder svelte-fe3cn0");
    },
    m(o, r) {
      H(o, e, r), i && i.m(e, null), g(e, t), l && l.m(e, null);
    },
    p(o, r) {
      o[0].showSquareBorder || yn
        ? i || ((i = yo()), i.c(), i.m(e, t))
        : i && (i.d(1), (i = null)),
        o[0].showCircleBorder
          ? l || ((l = Io()), l.c(), l.m(e, null))
          : l && (l.d(1), (l = null));
    },
    d(o) {
      o && M(e), i && i.d(), l && l.d();
    },
  };
}
function yo(n) {
  let e;
  return {
    c() {
      (e = k("div")), u(e, "class", "square svelte-fe3cn0");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && M(e);
    },
  };
}
function Io(n) {
  let e;
  return {
    c() {
      (e = k("div")), u(e, "class", "circle svelte-fe3cn0");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && M(e);
    },
  };
}
function Mu(n) {
  let e,
    t = n[0].show && Ao(n);
  return {
    c() {
      t && t.c(), (e = pn());
    },
    m(i, l) {
      t && t.m(i, l), H(i, e, l);
    },
    p(i, [l]) {
      i[0].show
        ? t
          ? t.p(i, l)
          : ((t = Ao(i)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Ee,
    o: Ee,
    d(i) {
      t && t.d(i), i && M(e);
    },
  };
}
function Hu(n, e, t) {
  let i;
  return ve(n, Ni, (l) => t(0, (i = l))), [i];
}
class Eu extends be {
  constructor(e) {
    super();
    we(this, e, Hu, Mu, Se, {});
  }
}
function Do(n) {
  let e,
    t,
    i,
    l,
    o,
    r = (n[0].showStreets || yn) && To(n),
    f = n[0].showPointer && Mo(),
    a = n[0].showDegress && Ho(),
    s = (n[0].showCompass || yn) && Eo(n);
  return {
    c() {
      (e = k("div")),
        r && r.c(),
        (t = y()),
        (i = k("div")),
        f && f.c(),
        (l = y()),
        a && a.c(),
        (o = y()),
        s && s.c(),
        u(i, "class", "baseplate svelte-9vhma4"),
        u(e, "class", "baseplateConainer svelte-9vhma4");
    },
    m(c, h) {
      H(c, e, h),
        r && r.m(e, null),
        g(e, t),
        g(e, i),
        f && f.m(i, null),
        g(i, l),
        a && a.m(i, null),
        g(i, o),
        s && s.m(i, null);
    },
    p(c, h) {
      c[0].showStreets || yn
        ? r
          ? r.p(c, h)
          : ((r = To(c)), r.c(), r.m(e, t))
        : r && (r.d(1), (r = null)),
        c[0].showPointer
          ? f || ((f = Mo()), f.c(), f.m(i, l))
          : f && (f.d(1), (f = null)),
        c[0].showDegress
          ? a || ((a = Ho()), a.c(), a.m(i, o))
          : a && (a.d(1), (a = null)),
        c[0].showCompass || yn
          ? s
            ? s.p(c, h)
            : ((s = Eo(c)), s.c(), s.m(i, null))
          : s && (s.d(1), (s = null));
    },
    d(c) {
      c && M(e), r && r.d(), f && f.d(), a && a.d(), s && s.d();
    },
  };
}
function To(n) {
  let e,
    t,
    i = n[0].street1 + "",
    l,
    o,
    r,
    f = n[0].street2 + "",
    a;
  return {
    c() {
      (e = k("div")),
        (t = k("div")),
        (l = Ie(i)),
        (o = y()),
        (r = k("div")),
        (a = Ie(f)),
        u(t, "class", "street1 svelte-9vhma4"),
        u(r, "class", "street2 svelte-9vhma4"),
        u(e, "class", "street-container svelte-9vhma4");
    },
    m(s, c) {
      H(s, e, c), g(e, t), g(t, l), g(e, o), g(e, r), g(r, a);
    },
    p(s, c) {
      c & 1 && i !== (i = s[0].street1 + "") && In(l, i),
        c & 1 && f !== (f = s[0].street2 + "") && In(a, f);
    },
    d(s) {
      s && M(e);
    },
  };
}
function Mo(n) {
  let e;
  return {
    c() {
      (e = k("div")),
        (e.textContent = "\u02C5"),
        u(e, "class", "pointer svelte-9vhma4");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && M(e);
    },
  };
}
function Ho(n) {
  let e;
  return {
    c() {
      (e = k("div")), u(e, "class", "degrees svelte-9vhma4");
    },
    m(t, i) {
      H(t, e, i);
    },
    d(t) {
      t && M(e);
    },
  };
}
function Eo(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h,
    m,
    p,
    b,
    S,
    v,
    d,
    _,
    A,
    j,
    le,
    J,
    B,
    Q,
    oe,
    z,
    re,
    W,
    L,
    te,
    I,
    ue,
    ee,
    T,
    fe,
    q,
    Y,
    ke,
    me,
    ne;
  return {
    c() {
      (e = K("svg")),
        (t = K("rect")),
        (i = K("rect")),
        (l = K("rect")),
        (o = K("rect")),
        (r = K("rect")),
        (f = K("rect")),
        (a = K("rect")),
        (s = K("rect")),
        (c = K("rect")),
        (h = K("rect")),
        (m = K("rect")),
        (p = K("rect")),
        (b = K("rect")),
        (v = y()),
        (d = K("svg")),
        (_ = K("text")),
        (A = Ie("N")),
        (j = K("text")),
        (le = Ie("N")),
        (J = K("text")),
        (B = Ie("NW")),
        (Q = K("text")),
        (oe = Ie("NW")),
        (z = K("text")),
        (re = Ie("NE")),
        (W = K("text")),
        (L = Ie("NE")),
        (te = K("text")),
        (I = Ie("E")),
        (ue = K("text")),
        (ee = Ie("SE")),
        (T = K("text")),
        (fe = Ie("S")),
        (q = K("text")),
        (Y = Ie("SW")),
        (ke = K("text")),
        (me = Ie("W")),
        u(t, "width", "3"),
        u(t, "stroke", "black"),
        u(t, "fill", "white"),
        u(t, "stroke-width", "0.5"),
        u(t, "stroke-opacity", "0.6"),
        u(t, "height", "20"),
        u(t, "x", "-90"),
        u(i, "width", "3"),
        u(i, "stroke", "black"),
        u(i, "fill", "white"),
        u(i, "stroke-width", "0.5"),
        u(i, "stroke-opacity", "0.6"),
        u(i, "height", "9"),
        u(i, "x", "-45"),
        u(l, "width", "4.5"),
        u(l, "stroke", "black"),
        u(l, "fill", "white"),
        u(l, "stroke-width", "0.5"),
        u(l, "stroke-opacity", "0.6"),
        u(l, "height", "20"),
        u(l, "x", "0"),
        u(o, "width", "3"),
        u(o, "stroke", "black"),
        u(o, "fill", "white"),
        u(o, "stroke-width", "0.5"),
        u(o, "stroke-opacity", "0.6"),
        u(o, "height", "9"),
        u(o, "x", "45"),
        u(r, "width", "4.5"),
        u(r, "stroke", "black"),
        u(r, "fill", "white"),
        u(r, "stroke-width", "0.5"),
        u(r, "stroke-opacity", "0.6"),
        u(r, "height", "20"),
        u(r, "x", "90"),
        u(f, "width", "3"),
        u(f, "stroke", "black"),
        u(f, "fill", "white"),
        u(f, "stroke-width", "0.5"),
        u(f, "stroke-opacity", "0.6"),
        u(f, "height", "9"),
        u(f, "x", "135"),
        u(a, "width", "4.5"),
        u(a, "stroke", "black"),
        u(a, "fill", "white"),
        u(a, "stroke-width", "0.5"),
        u(a, "stroke-opacity", "0.6"),
        u(a, "height", "20"),
        u(a, "x", "180"),
        u(s, "width", "3"),
        u(s, "stroke", "black"),
        u(s, "fill", "white"),
        u(s, "stroke-width", "0.5"),
        u(s, "stroke-opacity", "0.6"),
        u(s, "height", "9"),
        u(s, "x", "225"),
        u(c, "width", "4.5"),
        u(c, "stroke", "black"),
        u(c, "fill", "white"),
        u(c, "stroke-width", "0.5"),
        u(c, "stroke-opacity", "0.6"),
        u(c, "height", "20"),
        u(c, "x", "270"),
        u(h, "width", "3"),
        u(h, "stroke", "black"),
        u(h, "fill", "white"),
        u(h, "stroke-width", "0.5"),
        u(h, "stroke-opacity", "0.6"),
        u(h, "height", "9"),
        u(h, "x", "315"),
        u(m, "width", "4.5"),
        u(m, "stroke", "black"),
        u(m, "fill", "white"),
        u(m, "stroke-width", "0.5"),
        u(m, "stroke-opacity", "0.6"),
        u(m, "height", "20"),
        u(m, "x", "360"),
        u(p, "width", "3"),
        u(p, "stroke", "black"),
        u(p, "fill", "white"),
        u(p, "stroke-width", "0.5"),
        u(p, "stroke-opacity", "0.6"),
        u(p, "height", "9"),
        u(p, "x", "405"),
        u(b, "width", "3"),
        u(b, "stroke", "black"),
        u(b, "fill", "white"),
        u(b, "stroke-width", "0.5"),
        u(b, "stroke-opacity", "0.6"),
        u(b, "height", "20"),
        u(b, "x", "450"),
        u(e, "class", "bezel svelte-9vhma4"),
        u(e, "viewBox", (S = n[1] + " 0 180 5")),
        u(_, "x", "0"),
        u(_, "y", "1.5"),
        u(_, "dominant-baseline", "middle"),
        u(_, "text-anchor", "middle"),
        u(_, "fill", "yellow"),
        u(j, "x", "360"),
        u(j, "y", "1.5"),
        u(j, "dominant-baseline", "middle"),
        u(j, "text-anchor", "middle"),
        u(j, "fill", "yellow"),
        u(J, "x", "315"),
        u(J, "y", "-11"),
        u(J, "dominant-baseline", "middle"),
        u(J, "text-anchor", "middle"),
        u(J, "fill", "white"),
        u(J, "class", "bearingText svelte-9vhma4"),
        u(Q, "x", "-45"),
        u(Q, "y", "-11"),
        u(Q, "dominant-baseline", "middle"),
        u(Q, "text-anchor", "middle"),
        u(Q, "fill", "white"),
        u(Q, "class", "bearingText svelte-9vhma4"),
        u(z, "x", "45"),
        u(z, "y", "-11"),
        u(z, "dominant-baseline", "middle"),
        u(z, "text-anchor", "middle"),
        u(z, "fill", "white"),
        u(z, "class", "bearingText svelte-9vhma4"),
        u(W, "x", "405"),
        u(W, "y", "-11"),
        u(W, "dominant-baseline", "middle"),
        u(W, "text-anchor", "middle"),
        u(W, "fill", "white"),
        u(W, "class", "bearingText svelte-9vhma4"),
        u(te, "x", "90"),
        u(te, "y", "1.5"),
        u(te, "dominant-baseline", "middle"),
        u(te, "text-anchor", "middle"),
        u(te, "fill", "white"),
        u(ue, "x", "135"),
        u(ue, "y", "-11"),
        u(ue, "dominant-baseline", "middle"),
        u(ue, "text-anchor", "middle"),
        u(ue, "fill", "white"),
        u(ue, "class", "bearingText svelte-9vhma4"),
        u(T, "x", "180"),
        u(T, "y", "1.5"),
        u(T, "dominant-baseline", "middle"),
        u(T, "text-anchor", "middle"),
        u(T, "fill", "white"),
        u(q, "x", "225"),
        u(q, "y", "-11"),
        u(q, "dominant-baseline", "middle"),
        u(q, "text-anchor", "middle"),
        u(q, "fill", "white"),
        u(q, "class", "bearingText svelte-9vhma4"),
        u(ke, "x", "270"),
        u(ke, "y", "1.5"),
        u(ke, "dominant-baseline", "middle"),
        u(ke, "text-anchor", "middle"),
        u(ke, "fill", "white"),
        u(d, "class", "bearing svelte-9vhma4"),
        u(d, "viewBox", (ne = n[1] + " 0 180 1.5"));
    },
    m(P, he) {
      H(P, e, he),
        g(e, t),
        g(e, i),
        g(e, l),
        g(e, o),
        g(e, r),
        g(e, f),
        g(e, a),
        g(e, s),
        g(e, c),
        g(e, h),
        g(e, m),
        g(e, p),
        g(e, b),
        H(P, v, he),
        H(P, d, he),
        g(d, _),
        g(_, A),
        g(d, j),
        g(j, le),
        g(d, J),
        g(J, B),
        g(d, Q),
        g(Q, oe),
        g(d, z),
        g(z, re),
        g(d, W),
        g(W, L),
        g(d, te),
        g(te, I),
        g(d, ue),
        g(ue, ee),
        g(d, T),
        g(T, fe),
        g(d, q),
        g(q, Y),
        g(d, ke),
        g(ke, me);
    },
    p(P, he) {
      he & 2 && S !== (S = P[1] + " 0 180 5") && u(e, "viewBox", S),
        he & 2 && ne !== (ne = P[1] + " 0 180 1.5") && u(d, "viewBox", ne);
    },
    d(P) {
      P && M(e), P && M(v), P && M(d);
    },
  };
}
function Fu(n) {
  let e,
    t = (n[0].show || yn) && Do(n);
  return {
    c() {
      t && t.c(), (e = pn());
    },
    m(i, l) {
      t && t.m(i, l), H(i, e, l);
    },
    p(i, [l]) {
      i[0].show || yn
        ? t
          ? t.p(i, l)
          : ((t = Do(i)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Ee,
    o: Ee,
    d(i) {
      t && t.d(i), i && M(e);
    },
  };
}
function Ou(n, e, t) {
  let i, l;
  ve(n, Ei, (f) => t(0, (i = f)));
  const o = st(0, { duration: 600, easing: Oi });
  ve(n, o, (f) => t(1, (l = f)));
  let r = i.heading;
  return (
    (n.$$.update = () => {
      n.$$.dirty & 9 &&
        ((r > 230 && i.heading < -50) || (r < -50 && i.heading > 230)
          ? o.set(i.heading, { duration: 0, easing: Oi })
          : o.set(i.heading, { duration: 600, easing: Oi }),
        t(3, (r = i.heading)));
    }),
    [i, l, o, r]
  );
}
class Yu extends be {
  constructor(e) {
    super();
    we(this, e, Ou, Fu, Se, {});
  }
}
function Fo(n) {
  let e,
    t,
    i,
    l,
    o = n[0].cash + "",
    r,
    f,
    a;
  return {
    c() {
      (e = k("div")),
        (t = k("p")),
        (i = k("span")),
        (i.textContent = "$\xA0"),
        (l = k("span")),
        (r = Ie(o)),
        u(i, "id", "sign"),
        u(i, "class", "svelte-12ge6tb"),
        u(l, "id", "money"),
        u(l, "class", "svelte-12ge6tb");
    },
    m(s, c) {
      H(s, e, c), g(e, t), g(t, i), g(t, l), g(l, r), (a = !0);
    },
    p(s, c) {
      (!a || c & 1) && o !== (o = s[0].cash + "") && In(r, o);
    },
    i(s) {
      a ||
        (s &&
          et(() => {
            f || (f = sn(e, bn, { duration: 1e3 }, !0)), f.run(1);
          }),
        (a = !0));
    },
    o(s) {
      s && (f || (f = sn(e, bn, { duration: 1e3 }, !1)), f.run(0)), (a = !1);
    },
    d(s) {
      s && M(e), s && f && f.end();
    },
  };
}
function Oo(n) {
  let e,
    t,
    i,
    l,
    o = n[0].bank + "",
    r,
    f,
    a;
  return {
    c() {
      (e = k("div")),
        (t = k("p")),
        (i = k("span")),
        (i.textContent = "$\xA0"),
        (l = k("span")),
        (r = Ie(o)),
        u(i, "id", "sign"),
        u(i, "class", "svelte-12ge6tb"),
        u(l, "id", "bank"),
        u(l, "class", "svelte-12ge6tb");
    },
    m(s, c) {
      H(s, e, c), g(e, t), g(t, i), g(t, l), g(l, r), (a = !0);
    },
    p(s, c) {
      (!a || c & 1) && o !== (o = s[0].bank + "") && In(r, o);
    },
    i(s) {
      a ||
        (s &&
          et(() => {
            f || (f = sn(e, bn, { duration: 1e3 }, !0)), f.run(1);
          }),
        (a = !0));
    },
    o(s) {
      s && (f || (f = sn(e, bn, { duration: 1e3 }, !1)), f.run(0)), (a = !1);
    },
    d(s) {
      s && M(e), s && f && f.end();
    },
  };
}
function Yo(n) {
  let e, t, i;
  function l(f, a) {
    if (f[0].plus) return Uu;
    if (f[0].minus) return Xu;
  }
  let o = l(n),
    r = o && o(n);
  return {
    c() {
      (e = k("div")), r && r.c();
    },
    m(f, a) {
      H(f, e, a), r && r.m(e, null), (i = !0);
    },
    p(f, a) {
      o === (o = l(f)) && r
        ? r.p(f, a)
        : (r && r.d(1), (r = o && o(f)), r && (r.c(), r.m(e, null)));
    },
    i(f) {
      i ||
        (f &&
          et(() => {
            t || (t = sn(e, bn, { duration: 1e3 }, !0)), t.run(1);
          }),
        (i = !0));
    },
    o(f) {
      f && (t || (t = sn(e, bn, { duration: 1e3 }, !1)), t.run(0)), (i = !1);
    },
    d(f) {
      f && M(e), r && r.d(), f && t && t.end();
    },
  };
}
function Xu(n) {
  let e,
    t,
    i,
    l = n[0].amount + "",
    o;
  return {
    c() {
      (e = k("p")),
        (t = k("span")),
        (t.textContent = "-\xA0"),
        (i = k("span")),
        (o = Ie(l)),
        u(t, "id", "minus"),
        u(t, "class", "svelte-12ge6tb"),
        u(i, "id", "money"),
        u(i, "class", "svelte-12ge6tb"),
        u(e, "id", "minus"),
        u(e, "class", "svelte-12ge6tb");
    },
    m(r, f) {
      H(r, e, f), g(e, t), g(e, i), g(i, o);
    },
    p(r, f) {
      f & 1 && l !== (l = r[0].amount + "") && In(o, l);
    },
    d(r) {
      r && M(e);
    },
  };
}
function Uu(n) {
  let e,
    t,
    i,
    l = n[0].amount + "",
    o;
  return {
    c() {
      (e = k("p")),
        (t = k("span")),
        (t.textContent = "+\xA0"),
        (i = k("span")),
        (o = Ie(l)),
        u(t, "id", "plus"),
        u(t, "class", "svelte-12ge6tb"),
        u(i, "id", "money"),
        u(i, "class", "svelte-12ge6tb"),
        u(e, "id", "money"),
        u(e, "class", "svelte-12ge6tb");
    },
    m(r, f) {
      H(r, e, f), g(e, t), g(e, i), g(i, o);
    },
    p(r, f) {
      f & 1 && l !== (l = r[0].amount + "") && In(o, l);
    },
    d(r) {
      r && M(e);
    },
  };
}
function Vu(n) {
  let e,
    t,
    i,
    l = n[0].showCash && Fo(n),
    o = n[0].showBank && Oo(n),
    r = n[0].showUpdate && Yo(n);
  return {
    c() {
      (e = k("div")),
        l && l.c(),
        (t = y()),
        o && o.c(),
        (i = y()),
        r && r.c(),
        u(e, "id", "money-container"),
        u(e, "class", "svelte-12ge6tb");
    },
    m(f, a) {
      H(f, e, a),
        l && l.m(e, null),
        g(e, t),
        o && o.m(e, null),
        g(e, i),
        r && r.m(e, null);
    },
    p(f, [a]) {
      f[0].showCash
        ? l
          ? (l.p(f, a), a & 1 && w(l, 1))
          : ((l = Fo(f)), l.c(), w(l, 1), l.m(e, t))
        : l &&
          (ce(),
          C(l, 1, 1, () => {
            l = null;
          }),
          ge()),
        f[0].showBank
          ? o
            ? (o.p(f, a), a & 1 && w(o, 1))
            : ((o = Oo(f)), o.c(), w(o, 1), o.m(e, i))
          : o &&
            (ce(),
            C(o, 1, 1, () => {
              o = null;
            }),
            ge()),
        f[0].showUpdate
          ? r
            ? (r.p(f, a), a & 1 && w(r, 1))
            : ((r = Yo(f)), r.c(), w(r, 1), r.m(e, null))
          : r &&
            (ce(),
            C(r, 1, 1, () => {
              r = null;
            }),
            ge());
    },
    i(f) {
      w(l), w(o), w(r);
    },
    o(f) {
      C(l), C(o), C(r);
    },
    d(f) {
      f && M(e), l && l.d(), o && o.d(), r && r.d();
    },
  };
}
function Ru(n, e, t) {
  let i;
  return ve(n, zi, (l) => t(0, (i = l))), [i];
}
class Pu extends be {
  constructor(e) {
    super();
    we(this, e, Ru, Vu, Se, {});
  }
}
function Xo(n) {
  let e, t, i, l;
  return {
    c() {
      (e = K("circle")),
        u(e, "opacity", n[9]),
        u(e, "fill", "transparent"),
        u(e, "stroke", n[8]),
        u(e, "stroke-dashoffset", (t = n[20] - (n[15] / 100) * n[20])),
        u(e, "stroke-dasharray", (i = n[20] + " " + n[20])),
        u(e, "stroke-width", n[11]),
        u(e, "r", n[19]),
        u(e, "cx", n[18]),
        u(e, "cy", n[18]),
        u(e, "transform", (l = "rotate(-90, " + n[18] + ", " + n[18] + ")"));
    },
    m(o, r) {
      H(o, e, r);
    },
    p(o, r) {
      r[0] & 512 && u(e, "opacity", o[9]),
        r[0] & 256 && u(e, "stroke", o[8]),
        r[0] & 1081344 &&
          t !== (t = o[20] - (o[15] / 100) * o[20]) &&
          u(e, "stroke-dashoffset", t),
        r[0] & 1048576 &&
          i !== (i = o[20] + " " + o[20]) &&
          u(e, "stroke-dasharray", i),
        r[0] & 2048 && u(e, "stroke-width", o[11]),
        r[0] & 524288 && u(e, "r", o[19]),
        r[0] & 262144 && u(e, "cx", o[18]),
        r[0] & 262144 && u(e, "cy", o[18]),
        r[0] & 262144 &&
          l !== (l = "rotate(-90, " + o[18] + ", " + o[18] + ")") &&
          u(e, "transform", l);
    },
    d(o) {
      o && M(e);
    },
  };
}
function Uo(n) {
  let e, t, i, l, o, r;
  return {
    c() {
      (e = K("circle")),
        u(e, "fill", n[6]),
        u(e, "fill-opacity", n[7]),
        u(e, "stroke", "transparent"),
        u(e, "stroke-dashoffset", (t = 0)),
        u(e, "stroke-dasharray", (i = n[20] + " " + n[20])),
        u(e, "stroke-width", (l = n[11] - 0.6)),
        u(e, "r", (o = n[19] - n[11] / 2 + 0.1)),
        u(e, "cx", n[18]),
        u(e, "cy", n[18]),
        u(e, "transform", (r = "rotate(-90, " + n[18] + ", " + n[18] + ")"));
    },
    m(f, a) {
      H(f, e, a);
    },
    p(f, a) {
      a[0] & 64 && u(e, "fill", f[6]),
        a[0] & 128 && u(e, "fill-opacity", f[7]),
        a[0] & 1048576 &&
          i !== (i = f[20] + " " + f[20]) &&
          u(e, "stroke-dasharray", i),
        a[0] & 2048 && l !== (l = f[11] - 0.6) && u(e, "stroke-width", l),
        a[0] & 526336 && o !== (o = f[19] - f[11] / 2 + 0.1) && u(e, "r", o),
        a[0] & 262144 && u(e, "cx", f[18]),
        a[0] & 262144 && u(e, "cy", f[18]),
        a[0] & 262144 &&
          r !== (r = "rotate(-90, " + f[18] + ", " + f[18] + ")") &&
          u(e, "transform", r);
    },
    d(f) {
      f && M(e);
    },
  };
}
function Vo(n) {
  let e,
    t = Math.floor(n[22]) + "",
    i,
    l,
    o;
  return {
    c() {
      (e = K("text")),
        (i = Ie(t)),
        (l = K("text")),
        (o = Ie(n[17])),
        u(e, "class", "vehicle-number svelte-1goqjlo"),
        u(e, "fill", "white"),
        u(e, "x", "50%"),
        u(e, "y", "45%"),
        u(e, "dominant-baseline", "middle"),
        u(e, "text-anchor", "middle"),
        u(l, "class", "vehicle-text svelte-1goqjlo"),
        u(l, "fill", "white"),
        u(l, "x", "50%"),
        u(l, "y", "70%"),
        u(l, "dominant-baseline", "middle"),
        u(l, "text-anchor", "middle");
    },
    m(r, f) {
      H(r, e, f), g(e, i), H(r, l, f), g(l, o);
    },
    p(r, f) {
      f[0] & 4194304 && t !== (t = Math.floor(r[22]) + "") && In(i, t),
        f[0] & 131072 && In(o, r[17]);
    },
    d(r) {
      r && M(e), r && M(l);
    },
  };
}
function Ro(n) {
  let e, t;
  return (
    (e = new Dn({
      props: {
        icon: n[1],
        scale: n[3],
        translateX: n[4],
        translateY: n[5],
        style: "color:" + n[2],
      },
    })),
    {
      c() {
        E(e.$$.fragment);
      },
      m(i, l) {
        F(e, i, l), (t = !0);
      },
      p(i, l) {
        const o = {};
        l[0] & 2 && (o.icon = i[1]),
          l[0] & 8 && (o.scale = i[3]),
          l[0] & 16 && (o.translateX = i[4]),
          l[0] & 32 && (o.translateY = i[5]),
          l[0] & 4 && (o.style = "color:" + i[2]),
          e.$set(o);
      },
      i(i) {
        t || (w(e.$$.fragment, i), (t = !0));
      },
      o(i) {
        C(e.$$.fragment, i), (t = !1);
      },
      d(i) {
        O(e, i);
      },
    }
  );
}
function zu(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h,
    m,
    p = n[0] && Xo(n),
    b = n[16] && Uo(n),
    S = n[17] && Vo(n),
    v = n[1] && Ro(n);
  return {
    c() {
      (e = K("svg")),
        (t = K("g")),
        p && p.c(),
        (i = pn()),
        b && b.c(),
        (l = K("circle")),
        S && S.c(),
        (a = K("g")),
        v && v.c(),
        u(l, "stroke", n[10]),
        u(l, "fill", "transparent"),
        u(l, "stroke-dashoffset", n[21]),
        u(l, "stroke-dasharray", (o = n[20] + " " + n[20])),
        u(l, "stroke-width", n[11]),
        u(l, "r", n[19]),
        u(l, "cx", n[18]),
        u(l, "cy", n[18]),
        u(l, "transform", (r = "rotate(-90, " + n[18] + ", " + n[18] + ")")),
        u(
          t,
          "transform",
          (f =
            `
    ` +
            (n[12] > 0
              ? "rotate(" + n[12] + " " + n[18] + " " + n[18] + ")"
              : "") +
            `
    ` +
            ("translate(" + n[13] + " " + n[14] + ")"))
        ),
        u(e, "width", (s = n[18] * 2)),
        u(e, "height", (c = n[18] * 2)),
        u(e, "viewBox", (h = "0 0 " + n[18] * 2 + " " + n[18] * 2)),
        u(e, "overflow", "visible");
    },
    m(d, _) {
      H(d, e, _),
        g(e, t),
        p && p.m(t, null),
        g(t, i),
        b && b.m(t, null),
        g(t, l),
        S && S.m(e, null),
        g(e, a),
        v && v.m(a, null),
        (m = !0);
    },
    p(d, _) {
      d[0]
        ? p
          ? p.p(d, _)
          : ((p = Xo(d)), p.c(), p.m(t, i))
        : p && (p.d(1), (p = null)),
        d[16]
          ? b
            ? b.p(d, _)
            : ((b = Uo(d)), b.c(), b.m(t, l))
          : b && (b.d(1), (b = null)),
        (!m || _[0] & 1024) && u(l, "stroke", d[10]),
        (!m || _[0] & 2097152) && u(l, "stroke-dashoffset", d[21]),
        (!m || (_[0] & 1048576 && o !== (o = d[20] + " " + d[20]))) &&
          u(l, "stroke-dasharray", o),
        (!m || _[0] & 2048) && u(l, "stroke-width", d[11]),
        (!m || _[0] & 524288) && u(l, "r", d[19]),
        (!m || _[0] & 262144) && u(l, "cx", d[18]),
        (!m || _[0] & 262144) && u(l, "cy", d[18]),
        (!m ||
          (_[0] & 262144 &&
            r !== (r = "rotate(-90, " + d[18] + ", " + d[18] + ")"))) &&
          u(l, "transform", r),
        (!m ||
          (_[0] & 290816 &&
            f !==
              (f =
                `
    ` +
                (d[12] > 0
                  ? "rotate(" + d[12] + " " + d[18] + " " + d[18] + ")"
                  : "") +
                `
    ` +
                ("translate(" + d[13] + " " + d[14] + ")")))) &&
          u(t, "transform", f),
        d[17]
          ? S
            ? S.p(d, _)
            : ((S = Vo(d)), S.c(), S.m(e, a))
          : S && (S.d(1), (S = null)),
        d[1]
          ? v
            ? (v.p(d, _), _[0] & 2 && w(v, 1))
            : ((v = Ro(d)), v.c(), w(v, 1), v.m(a, null))
          : v &&
            (ce(),
            C(v, 1, 1, () => {
              v = null;
            }),
            ge()),
        (!m || (_[0] & 262144 && s !== (s = d[18] * 2))) && u(e, "width", s),
        (!m || (_[0] & 262144 && c !== (c = d[18] * 2))) && u(e, "height", c),
        (!m ||
          (_[0] & 262144 &&
            h !== (h = "0 0 " + d[18] * 2 + " " + d[18] * 2))) &&
          u(e, "viewBox", h);
    },
    i(d) {
      m || (w(v), (m = !0));
    },
    o(d) {
      C(v), (m = !1);
    },
    d(d) {
      d && M(e), p && p.d(), b && b.d(), S && S.d(), v && v.d();
    },
  };
}
function Lu(n, e, t) {
  let i,
    l,
    { displayOutline: o = !0 } = e,
    { height: r = 50 } = e,
    { icon: f = null } = e,
    { iconColor: a = "red" } = e,
    { iconRotateDegree: s = 0 } = e,
    { iconScaling: c = 0.45 } = e,
    { iconTranslateX: h = 0 } = e,
    { iconTranslateY: m = 0 } = e,
    { innerColor: p = "#212121" } = e,
    { innerColorOpacity: b = 1 } = e,
    { name: S = "" } = e,
    { outlineColor: v = "red" } = e,
    { outlineColorOpacity: d = 0.4 } = e,
    { progressColor: _ = "red" } = e,
    { progressValue: A = 100 } = e,
    { ringSize: j = 4 } = e,
    { rotateDegree: le = 0 } = e,
    { translateX: J = 0 } = e,
    { translateY: B = 0 } = e,
    { width: Q = 50 } = e,
    { maxLengthDisplay: oe = 100 } = e,
    { maxProgressValue: z = 100 } = e,
    { showInnerBG: re = !1 } = e,
    { displayNumber: W = 0 } = e,
    { text: L = "" } = e,
    te = 25,
    I = (A / z) * 100;
  const ue = st(I, { duration: 600, easing: Oi });
  ve(n, ue, (Y) => t(33, (i = Y)));
  const ee = st(W, { duration: 600, easing: Oi });
  ve(n, ee, (Y) => t(22, (l = Y)));
  let T = te - j / 2,
    fe = T * 2 * Math.PI,
    q = fe - (i / 100) * fe;
  return (
    (n.$$set = (Y) => {
      "displayOutline" in Y && t(0, (o = Y.displayOutline)),
        "height" in Y && t(26, (r = Y.height)),
        "icon" in Y && t(1, (f = Y.icon)),
        "iconColor" in Y && t(2, (a = Y.iconColor)),
        "iconRotateDegree" in Y && t(27, (s = Y.iconRotateDegree)),
        "iconScaling" in Y && t(3, (c = Y.iconScaling)),
        "iconTranslateX" in Y && t(4, (h = Y.iconTranslateX)),
        "iconTranslateY" in Y && t(5, (m = Y.iconTranslateY)),
        "innerColor" in Y && t(6, (p = Y.innerColor)),
        "innerColorOpacity" in Y && t(7, (b = Y.innerColorOpacity)),
        "name" in Y && t(28, (S = Y.name)),
        "outlineColor" in Y && t(8, (v = Y.outlineColor)),
        "outlineColorOpacity" in Y && t(9, (d = Y.outlineColorOpacity)),
        "progressColor" in Y && t(10, (_ = Y.progressColor)),
        "progressValue" in Y && t(25, (A = Y.progressValue)),
        "ringSize" in Y && t(11, (j = Y.ringSize)),
        "rotateDegree" in Y && t(12, (le = Y.rotateDegree)),
        "translateX" in Y && t(13, (J = Y.translateX)),
        "translateY" in Y && t(14, (B = Y.translateY)),
        "width" in Y && t(29, (Q = Y.width)),
        "maxLengthDisplay" in Y && t(15, (oe = Y.maxLengthDisplay)),
        "maxProgressValue" in Y && t(30, (z = Y.maxProgressValue)),
        "showInnerBG" in Y && t(16, (re = Y.showInnerBG)),
        "displayNumber" in Y && t(31, (W = Y.displayNumber)),
        "text" in Y && t(17, (L = Y.text));
    }),
    (n.$$.update = () => {
      (n.$$.dirty[0] & 1107296256) | (n.$$.dirty[1] & 2) &&
        (t(25, (A = Math.min(A, z))), t(32, (I = (A / z) * 100)), ue.set(I)),
        n.$$.dirty[1] & 1 && ee.set(W),
        n.$$.dirty[0] & 603979776 && t(18, (te = r > Q ? r / 2 : Q / 2)),
        n.$$.dirty[0] & 788480 &&
          (t(19, (T = te - j / 2)), t(20, (fe = T * 2 * Math.PI))),
        (n.$$.dirty[0] & 1081344) | (n.$$.dirty[1] & 4) &&
          t(21, (q = fe - (i / (100 / oe) / 100) * fe));
    }),
    [
      o,
      f,
      a,
      c,
      h,
      m,
      p,
      b,
      v,
      d,
      _,
      j,
      le,
      J,
      B,
      oe,
      re,
      L,
      te,
      T,
      fe,
      q,
      l,
      ue,
      ee,
      A,
      r,
      s,
      S,
      Q,
      z,
      W,
      I,
      i,
    ]
  );
}
class tl extends be {
  constructor(e) {
    super();
    we(
      this,
      e,
      Lu,
      zu,
      Se,
      {
        displayOutline: 0,
        height: 26,
        icon: 1,
        iconColor: 2,
        iconRotateDegree: 27,
        iconScaling: 3,
        iconTranslateX: 4,
        iconTranslateY: 5,
        innerColor: 6,
        innerColorOpacity: 7,
        name: 28,
        outlineColor: 8,
        outlineColorOpacity: 9,
        progressColor: 10,
        progressValue: 25,
        ringSize: 11,
        rotateDegree: 12,
        translateX: 13,
        translateY: 14,
        width: 29,
        maxLengthDisplay: 15,
        maxProgressValue: 30,
        showInnerBG: 16,
        displayNumber: 31,
        text: 17,
      },
      null,
      [-1, -1]
    );
  }
}
function Po(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c,
    h,
    m = n[0].showSeatBelt && zo(n),
    p = (n[1].icons.engine.progressValue <= 75 || yn) && Lo(n);
  r = new tl({
    props: {
      maxLengthDisplay: 66,
      rotateDegree: 212,
      ringSize: 5.5,
      progressColor: "white",
      outlineColor: "white",
      outlineColorOpacity: 0.6,
      height: 60,
      width: 60,
      progressValue: n[0].speed,
      text: "MPH",
      displayNumber: n[0].speed,
      maxProgressValue: 180,
    },
  });
  let b = n[0].showAltitude && qo(n);
  return (
    (c = new tl({
      props: {
        maxLengthDisplay: 69,
        rotateDegree: 235,
        ringSize: 3.5,
        progressColor: n[0].fuelColor,
        outlineColor: n[0].fuelColor,
        outlineColorOpacity: 0.6,
        height: 36,
        width: 36,
        progressValue: n[0].fuel,
        icon: Vr,
        iconColor: "white",
        iconScaling: 0.38,
      },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          m && m.c(),
          (i = y()),
          p && p.c(),
          (l = y()),
          (o = k("div")),
          E(r.$$.fragment),
          (f = y()),
          b && b.c(),
          (a = y()),
          (s = k("div")),
          E(c.$$.fragment),
          u(o, "class", ""),
          u(s, "class", "absolute left-[45px] bottom-[-10px]"),
          u(t, "class", "relative"),
          u(e, "class", "absolute car-hud-box svelte-ruer6w");
      },
      m(S, v) {
        H(S, e, v),
          g(e, t),
          m && m.m(t, null),
          g(t, i),
          p && p.m(t, null),
          g(t, l),
          g(t, o),
          F(r, o, null),
          g(t, f),
          b && b.m(t, null),
          g(t, a),
          g(t, s),
          F(c, s, null),
          (h = !0);
      },
      p(S, v) {
        S[0].showSeatBelt
          ? m
            ? (m.p(S, v), v & 1 && w(m, 1))
            : ((m = zo(S)), m.c(), w(m, 1), m.m(t, i))
          : m &&
            (ce(),
            C(m, 1, 1, () => {
              m = null;
            }),
            ge()),
          S[1].icons.engine.progressValue <= 75 || yn
            ? p
              ? (p.p(S, v), v & 2 && w(p, 1))
              : ((p = Lo(S)), p.c(), w(p, 1), p.m(t, l))
            : p &&
              (ce(),
              C(p, 1, 1, () => {
                p = null;
              }),
              ge());
        const d = {};
        v & 1 && (d.progressValue = S[0].speed),
          v & 1 && (d.displayNumber = S[0].speed),
          r.$set(d),
          S[0].showAltitude
            ? b
              ? (b.p(S, v), v & 1 && w(b, 1))
              : ((b = qo(S)), b.c(), w(b, 1), b.m(t, a))
            : b &&
              (ce(),
              C(b, 1, 1, () => {
                b = null;
              }),
              ge());
        const _ = {};
        v & 1 && (_.progressColor = S[0].fuelColor),
          v & 1 && (_.outlineColor = S[0].fuelColor),
          v & 1 && (_.progressValue = S[0].fuel),
          c.$set(_);
      },
      i(S) {
        h ||
          (w(m),
          w(p),
          w(r.$$.fragment, S),
          w(b),
          w(c.$$.fragment, S),
          (h = !0));
      },
      o(S) {
        C(m), C(p), C(r.$$.fragment, S), C(b), C(c.$$.fragment, S), (h = !1);
      },
      d(S) {
        S && M(e), m && m.d(), p && p.d(), O(r), b && b.d(), O(c);
      },
    }
  );
}
function zo(n) {
  let e, t, i, l;
  const o = [Nu, qu],
    r = [];
  function f(a, s) {
    return a[0].showAltitude ? 0 : 1;
  }
  return (
    (e = f(n)),
    (t = r[e] = o[e](n)),
    {
      c() {
        t.c(), (i = pn());
      },
      m(a, s) {
        r[e].m(a, s), H(a, i, s), (l = !0);
      },
      p(a, s) {
        let c = e;
        (e = f(a)),
          e === c
            ? r[e].p(a, s)
            : (ce(),
              C(r[c], 1, 1, () => {
                r[c] = null;
              }),
              ge(),
              (t = r[e]),
              t ? t.p(a, s) : ((t = r[e] = o[e](a)), t.c()),
              w(t, 1),
              t.m(i.parentNode, i));
      },
      i(a) {
        l || (w(t), (l = !0));
      },
      o(a) {
        C(t), (l = !1);
      },
      d(a) {
        r[e].d(a), a && M(i);
      },
    }
  );
}
function qu(n) {
  let e, t, i, l;
  return (
    (t = new Dn({
      props: { icon: il, scale: 1.1, style: "color:" + n[0].seatbeltColor },
    })),
    {
      c() {
        (e = k("div")),
          E(t.$$.fragment),
          u(e, "class", "absolute left-[100px] bottom-[0px]");
      },
      m(o, r) {
        H(o, e, r), F(t, e, null), (l = !0);
      },
      p(o, r) {
        const f = {};
        r & 1 && (f.style = "color:" + o[0].seatbeltColor), t.$set(f);
      },
      i(o) {
        l ||
          (w(t.$$.fragment, o),
          o &&
            et(() => {
              i || (i = sn(e, bn, { duration: 500 }, !0)), i.run(1);
            }),
          (l = !0));
      },
      o(o) {
        C(t.$$.fragment, o),
          o && (i || (i = sn(e, bn, { duration: 500 }, !1)), i.run(0)),
          (l = !1);
      },
      d(o) {
        o && M(e), O(t), o && i && i.end();
      },
    }
  );
}
function Nu(n) {
  let e, t, i, l;
  return (
    (t = new Dn({
      props: { icon: il, scale: 1.1, style: "color:" + n[0].seatbeltColor },
    })),
    {
      c() {
        (e = k("div")),
          E(t.$$.fragment),
          u(e, "class", "absolute left-[60px] bottom-[55px]");
      },
      m(o, r) {
        H(o, e, r), F(t, e, null), (l = !0);
      },
      p(o, r) {
        const f = {};
        r & 1 && (f.style = "color:" + o[0].seatbeltColor), t.$set(f);
      },
      i(o) {
        l ||
          (w(t.$$.fragment, o),
          o &&
            et(() => {
              i || (i = sn(e, bn, { duration: 500 }, !0)), i.run(1);
            }),
          (l = !0));
      },
      o(o) {
        C(t.$$.fragment, o),
          o && (i || (i = sn(e, bn, { duration: 500 }, !1)), i.run(0)),
          (l = !1);
      },
      d(o) {
        o && M(e), O(t), o && i && i.end();
      },
    }
  );
}
function Lo(n) {
  let e, t, i, l;
  const o = [Gu, ju, Bu],
    r = [];
  function f(a, s) {
    return a[0].showAltitude ? 0 : a[0].showSeatBelt ? 1 : 2;
  }
  return (
    (e = f(n)),
    (t = r[e] = o[e](n)),
    {
      c() {
        t.c(), (i = pn());
      },
      m(a, s) {
        r[e].m(a, s), H(a, i, s), (l = !0);
      },
      p(a, s) {
        let c = e;
        (e = f(a)),
          e === c
            ? r[e].p(a, s)
            : (ce(),
              C(r[c], 1, 1, () => {
                r[c] = null;
              }),
              ge(),
              (t = r[e]),
              t ? t.p(a, s) : ((t = r[e] = o[e](a)), t.c()),
              w(t, 1),
              t.m(i.parentNode, i));
      },
      i(a) {
        l || (w(t), (l = !0));
      },
      o(a) {
        C(t), (l = !1);
      },
      d(a) {
        r[e].d(a), a && M(i);
      },
    }
  );
}
function Bu(n) {
  let e, t, i, l, o;
  return (
    (i = new Dn({
      props: {
        icon: ol,
        scale: 1.1,
        style:
          "color:" +
          n[2].icons.engine.colorEffects[n[2].icons.engine.currentEffect]
            .progressColor,
      },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          E(i.$$.fragment),
          u(t, "class", "absolute left-[100px] bottom-[0px]");
      },
      m(r, f) {
        H(r, e, f), g(e, t), F(i, t, null), (o = !0);
      },
      p(r, f) {
        const a = {};
        f & 4 &&
          (a.style =
            "color:" +
            r[2].icons.engine.colorEffects[r[2].icons.engine.currentEffect]
              .progressColor),
          i.$set(a);
      },
      i(r) {
        o ||
          (w(i.$$.fragment, r),
          r &&
            et(() => {
              l || (l = sn(e, bn, { duration: 100 }, !0)), l.run(1);
            }),
          (o = !0));
      },
      o(r) {
        C(i.$$.fragment, r),
          r && (l || (l = sn(e, bn, { duration: 100 }, !1)), l.run(0)),
          (o = !1);
      },
      d(r) {
        r && M(e), O(i), r && l && l.end();
      },
    }
  );
}
function ju(n) {
  let e, t, i, l, o;
  return (
    (i = new Dn({
      props: {
        icon: ol,
        scale: 1.1,
        style:
          "color:" +
          n[2].icons.engine.colorEffects[n[2].icons.engine.currentEffect]
            .progressColor,
      },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          E(i.$$.fragment),
          u(t, "class", "absolute left-[138px] bottom-[0px]");
      },
      m(r, f) {
        H(r, e, f), g(e, t), F(i, t, null), (o = !0);
      },
      p(r, f) {
        const a = {};
        f & 4 &&
          (a.style =
            "color:" +
            r[2].icons.engine.colorEffects[r[2].icons.engine.currentEffect]
              .progressColor),
          i.$set(a);
      },
      i(r) {
        o ||
          (w(i.$$.fragment, r),
          r &&
            et(() => {
              l || (l = sn(e, bn, { duration: 100 }, !0)), l.run(1);
            }),
          (o = !0));
      },
      o(r) {
        C(i.$$.fragment, r),
          r && (l || (l = sn(e, bn, { duration: 100 }, !1)), l.run(0)),
          (o = !1);
      },
      d(r) {
        r && M(e), O(i), r && l && l.end();
      },
    }
  );
}
function Gu(n) {
  let e, t, i, l, o;
  return (
    (i = new Dn({
      props: {
        icon: ol,
        scale: 1.1,
        style:
          "color:" +
          n[2].icons.engine.colorEffects[n[2].icons.engine.currentEffect]
            .progressColor,
      },
    })),
    {
      c() {
        (e = k("div")),
          (t = k("div")),
          E(i.$$.fragment),
          u(t, "class", "absolute left-[150px] bottom-[0px]");
      },
      m(r, f) {
        H(r, e, f), g(e, t), F(i, t, null), (o = !0);
      },
      p(r, f) {
        const a = {};
        f & 4 &&
          (a.style =
            "color:" +
            r[2].icons.engine.colorEffects[r[2].icons.engine.currentEffect]
              .progressColor),
          i.$set(a);
      },
      i(r) {
        o ||
          (w(i.$$.fragment, r),
          r &&
            et(() => {
              l || (l = sn(e, bn, { duration: 100 }, !0)), l.run(1);
            }),
          (o = !0));
      },
      o(r) {
        C(i.$$.fragment, r),
          r && (l || (l = sn(e, bn, { duration: 100 }, !1)), l.run(0)),
          (o = !1);
      },
      d(r) {
        r && M(e), O(i), r && l && l.end();
      },
    }
  );
}
function qo(n) {
  let e, t, i;
  return (
    (t = new tl({
      props: {
        maxLengthDisplay: 75,
        rotateDegree: 225,
        ringSize: 5.5,
        progressColor: "white",
        outlineColor: "white",
        outlineColorOpacity: 0.6,
        height: 60,
        width: 60,
        progressValue: n[0].altitude,
        text: "ALT",
        displayNumber: n[0].altitude,
        maxProgressValue: 750,
      },
    })),
    {
      c() {
        (e = k("div")),
          E(t.$$.fragment),
          u(e, "class", "absolute left-[80px] bottom-[0px]");
      },
      m(l, o) {
        H(l, e, o), F(t, e, null), (i = !0);
      },
      p(l, o) {
        const r = {};
        o & 1 && (r.progressValue = l[0].altitude),
          o & 1 && (r.displayNumber = l[0].altitude),
          t.$set(r);
      },
      i(l) {
        i || (w(t.$$.fragment, l), (i = !0));
      },
      o(l) {
        C(t.$$.fragment, l), (i = !1);
      },
      d(l) {
        l && M(e), O(t);
      },
    }
  );
}
function Wu(n) {
  let e,
    t,
    i = (n[0].show || yn) && Po(n);
  return {
    c() {
      i && i.c(), (e = pn());
    },
    m(l, o) {
      i && i.m(l, o), H(l, e, o), (t = !0);
    },
    p(l, [o]) {
      l[0].show || yn
        ? i
          ? (i.p(l, o), o & 1 && w(i, 1))
          : ((i = Po(l)), i.c(), w(i, 1), i.m(e.parentNode, e))
        : i &&
          (ce(),
          C(i, 1, 1, () => {
            i = null;
          }),
          ge());
    },
    i(l) {
      t || (w(i), (t = !0));
    },
    o(l) {
      C(i), (t = !1);
    },
    d(l) {
      i && i.d(l), l && M(e);
    },
  };
}
function Ju(n, e, t) {
  let i, l, o;
  return (
    ve(n, Ni, (r) => t(0, (i = r))),
    ve(n, G, (r) => t(1, (l = r))),
    ve(n, ae, (r) => t(2, (o = r))),
    [i, l, o]
  );
}
class Zu extends be {
  constructor(e) {
    super();
    we(this, e, Ju, Wu, Se, {});
  }
}
const { document: Pi } = Rr;
function No(n) {
  let e, t, i, l, o, r, f, a, s, c;
  return (
    (e = new Yu({})),
    (i = new Pu({})),
    (o = new ua({})),
    (f = new Zu({})),
    (s = new Eu({})),
    {
      c() {
        E(e.$$.fragment),
          (t = y()),
          E(i.$$.fragment),
          (l = y()),
          E(o.$$.fragment),
          (r = y()),
          E(f.$$.fragment),
          (a = y()),
          E(s.$$.fragment);
      },
      m(h, m) {
        F(e, h, m),
          H(h, t, m),
          F(i, h, m),
          H(h, l, m),
          F(o, h, m),
          H(h, r, m),
          F(f, h, m),
          H(h, a, m),
          F(s, h, m),
          (c = !0);
      },
      i(h) {
        c ||
          (w(e.$$.fragment, h),
          w(i.$$.fragment, h),
          w(o.$$.fragment, h),
          w(f.$$.fragment, h),
          w(s.$$.fragment, h),
          (c = !0));
      },
      o(h) {
        C(e.$$.fragment, h),
          C(i.$$.fragment, h),
          C(o.$$.fragment, h),
          C(f.$$.fragment, h),
          C(s.$$.fragment, h),
          (c = !1);
      },
      d(h) {
        O(e, h),
          h && M(t),
          O(i, h),
          h && M(l),
          O(o, h),
          h && M(r),
          O(f, h),
          h && M(a),
          O(s, h);
      },
    }
  );
}
function Ku(n) {
  let e,
    t,
    i,
    l,
    o,
    r,
    f,
    a,
    s,
    c = !n[0].isCineamticModeChecked && No();
  return (
    (a = new Tu({})),
    {
      c() {
        (e = k("link")),
          (t = k("link")),
          (i = k("link")),
          (l = k("link")),
          (o = y()),
          (r = k("main")),
          c && c.c(),
          (f = y()),
          E(a.$$.fragment),
          u(
            e,
            "href",
            "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          ),
          u(e, "rel", "stylesheet"),
          u(t, "href", "https://fonts.cdnfonts.com/css/pricedown"),
          u(t, "rel", "stylesheet"),
          u(
            i,
            "href",
            "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          ),
          u(i, "rel", "stylesheet"),
          u(
            l,
            "href",
            "https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap"
          ),
          u(l, "rel", "stylesheet"),
          u(r, "class", "bg-transparent min-h-screen");
      },
      m(h, m) {
        g(Pi.head, e),
          g(Pi.head, t),
          g(Pi.head, i),
          g(Pi.head, l),
          H(h, o, m),
          H(h, r, m),
          c && c.m(r, null),
          g(r, f),
          F(a, r, null),
          (s = !0);
      },
      p(h, [m]) {
        h[0].isCineamticModeChecked
          ? c &&
            (ce(),
            C(c, 1, 1, () => {
              c = null;
            }),
            ge())
          : c
          ? m & 1 && w(c, 1)
          : ((c = No()), c.c(), w(c, 1), c.m(r, f));
      },
      i(h) {
        s || (w(c), w(a.$$.fragment, h), (s = !0));
      },
      o(h) {
        C(c), C(a.$$.fragment, h), (s = !1);
      },
      d(h) {
        M(e), M(t), M(i), M(l), h && M(o), h && M(r), c && c.d(), O(a);
      },
    }
  );
}
function Qu(n, e, t) {
  let i, l;
  ve(n, G, (f) => t(2, (i = f))), ve(n, Fe, (f) => t(0, (l = f))), as();
  let o;
  return (
    (() => {
      let f = !0;
      o = setInterval(() => {
        f
          ? (pt(G, (i.designProgress += 15), i),
            i.designProgress > 100 &&
              (pt(G, (i.designProgress = 100), i), (f = !f)))
          : (pt(G, (i.designProgress -= 15), i),
            i.designProgress < 0 &&
              (pt(G, (i.designProgress = 0), i), (f = !f)));
      }, 1400);
    })(),
    jo(() => clearInterval(o)),
    (document.onkeyup = Fe.handleKeyUp),
    [l]
  );
}
class xu extends be {
  constructor(e) {
    super();
    we(this, e, Qu, Ku, Se, {});
  }
}
new xu({ target: document.getElementById("app") });
