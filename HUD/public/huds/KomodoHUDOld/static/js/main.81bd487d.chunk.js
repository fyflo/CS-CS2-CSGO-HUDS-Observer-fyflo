(this["webpackJsonpcsgo-react-radar2"] =
  this["webpackJsonpcsgo-react-radar2"] || []).push([
  [0],
  {
    44: function (e, t, i) {},
    69: function (e, t) {},
    72: function (e, t, i) {},
    73: function (e, t, i) {},
    74: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(0),
        a = i(1),
        r = i.n(a),
        s = i(37),
        o = i.n(s),
        c = (i(44), i(5)),
        p = i(38),
        l = i.n(p),
        u = (i(72), i(2)),
        d = i(23),
        f = i(10),
        m = i(11),
        b = i(14),
        g = i(12),
        h = {
          config: {
            origin: { x: 645.7196725473384, y: 340.2921393569175 },
            pxPerUX: 0.20118507589946494,
            pxPerUY: -0.20138282875746794,
          },
          file: i.p + "static/media/radar.58797a19.png",
        },
        v = {
          config: {
            origin: { x: 361.7243823603619, y: 579.553558767951 },
            pxPerUX: 0.1830927328891829,
            pxPerUY: -0.17650705879909936,
          },
          file: i.p + "static/media/radar.95546d85.png",
        },
        x = {
          config: {
            origin: { x: 563.1339320329055, y: 736.9535330430065 },
            pxPerUX: 0.2278315639654376,
            pxPerUY: -0.22776482548619972,
          },
          file: i.p + "static/media/radar.396736ab.png",
        },
        j = {
          de_mirage: h,
          de_cache: v,
          de_inferno: {
            config: {
              origin: { x: 426.51386123945593, y: 790.7266981544722 },
              pxPerUX: 0.2041685571162696,
              pxPerUY: -0.20465735943851654,
            },
            file: i.p + "/static/media/radar.190d2444.png",
          },
          de_dust2: x,
          de_train: {
            config: {
              origin: { x: 527.365542903922, y: 511.81469648562296 },
              pxPerUX: 0.21532584158170223,
              pxPerUY: -0.21299254526091588,
            },
            file: i.p + "static/media/radar.ebed5584.png",
          },
          de_overpass: {
            config: {
              origin: { x: 927.3988878244819, y: 343.8221009185496 },
              pxPerUX: 0.1923720959212443,
              pxPerUY: -0.19427507725530338,
            },
            file: i.p + "static/media/radar.674afdb6.png",
          },
          de_nuke: {
            configs: [
              {
                id: "high",
                config: {
                  origin: { x: 473.1284773048749, y: 165.7329003801045 },
                  pxPerUX: 0.14376095926926907,
                  pxPerUY: -0.14736670935219626,
                },
                isVisible: function (e) {
                  return e >= -450;
                },
              },
              {
                id: "low",
                config: {
                  origin: { x: 473.66746071612374, y: 638.302101754172 },
                  pxPerUX: 0.1436068746398272,
                  pxPerUY: -0.14533406508526941,
                },
                isVisible: function (e) {
                  return e < -450;
                },
              },
            ],
            file: i.p + "static/media/radar.031ee00e.png",
          },
          de_vertigo: {
            configs: [
              {
                id: "high",
                config: {
                  origin: { x: 784.4793452283254, y: 255.42597837029027 },
                  pxPerUX: 0.19856123172015677,
                  pxPerUY: -0.19820052722907044,
                },
                isVisible: function (e) {
                  return e >= 11700;
                },
              },
              {
                id: "low",
                config: {
                  origin: { x: 780.5145858437052, y: 695.4259783702903 },
                  pxPerUX: 0.1989615567841087,
                  pxPerUY: -0.19820052722907044,
                },
                isVisible: function (e) {
                  return e < 11700;
                },
              },
            ],
            file: i.p + "static/media/radar.0a8f930f.png",
          },
        },
        y = (i(73), { playerSize: 50 }),
        O = (function (e) {
          Object(b.a)(i, e);
          var t = Object(g.a)(i);
          function i(e) {
            var a;
            return (
              Object(f.a)(this, i),
              ((a = t.call(this, e)).renderGrenade = function (e) {
                return "flames" in e
                  ? null
                  : Object(n.jsxs)(
                      "div",
                      {
                        className: "grenade "
                          .concat(e.type, " ")
                          .concat(e.state, " ")
                          .concat(e.visible ? "visible" : "hidden"),
                        style: {
                          transform: "translateX("
                            .concat(e.position[0], "px) translateY(")
                            .concat(e.position[1], "px)"),
                        },
                        children: [
                          Object(n.jsx)("div", { className: "explode-point" }),
                          Object(n.jsx)("div", { className: "background" }),
                        ],
                      },
                      e.id
                    );
              }),
              (a.renderDot = function (e) {
                return Object(n.jsxs)(
                  "div",
                  {
                    className: "player "
                      .concat(e.side, " ")
                      .concat(e.hasBomb ? "hasBomb" : "", " ")
                      .concat(e.isActive ? "active" : "", " ")
                      .concat(e.isAlive ? "" : "dead", " ")
                      .concat(e.visible ? "visible" : "hidden"),
                    style: {
                      transform: "translateX("
                        .concat(e.position[0], "px) translateY(")
                        .concat(e.position[1], "px)"),
                      width: y.playerSize,
                      height: y.playerSize,
                    },
                    children: [
                      Object(n.jsx)("div", {
                        className: "background",
                        style: {
                          transform: "rotate(".concat(
                            45 + e.position[2],
                            "deg)"
                          ),
                        },
                      }),
                      Object(n.jsx)("div", {
                        className: "label",
                        children: e.label,
                      }),
                    ],
                  },
                  e.id
                );
              }),
              (a.renderBomb = function () {
                var e = a.props,
                  t = e.bomb,
                  i = e.mapConfig;
                if (!t) return null;
                if ("carried" === t.state || "planting" === t.state)
                  return null;
                if ("config" in i) {
                  var r = a.props.parsePosition(
                    t.position.split(", ").map(function (e) {
                      return Number(e);
                    }),
                    30,
                    i.config
                  );
                  return r
                    ? Object(n.jsxs)("div", {
                        className: "bomb ".concat(t.state, " visible"),
                        style: {
                          transform: "translateX("
                            .concat(r[0], "px) translateY(")
                            .concat(r[1], "px)"),
                        },
                        children: [
                          Object(n.jsx)("div", { className: "explode-point" }),
                          Object(n.jsx)("div", { className: "background" }),
                        ],
                      })
                    : null;
                }
                return i.configs.map(function (e) {
                  var i = a.props.parsePosition(
                    t.position.split(", ").map(function (e) {
                      return Number(e);
                    }),
                    30,
                    e.config
                  );
                  return i
                    ? Object(n.jsxs)("div", {
                        className: "bomb "
                          .concat(t.state, " ")
                          .concat(
                            e.isVisible(t.position.split(", ").map(Number)[2])
                              ? "visible"
                              : "hidden"
                          ),
                        style: {
                          transform: "translateX("
                            .concat(i[0], "px) translateY(")
                            .concat(i[1], "px)"),
                        },
                        children: [
                          Object(n.jsx)("div", { className: "explode-point" }),
                          Object(n.jsx)("div", { className: "background" }),
                        ],
                      })
                    : null;
                });
              }),
              (a.state = { players: [], grenades: [], bomb: null }),
              a
            );
          }
          return (
            Object(m.a)(i, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.players,
                    i = e.grenades;
                  return Object(n.jsxs)("div", {
                    className: "map",
                    style: {
                      backgroundImage: "url(".concat(
                        j[this.props.mapName].file,
                        ")"
                      ),
                    },
                    children: [
                      t.map(this.renderDot),
                      i.map(this.renderGrenade),
                      this.renderBomb(),
                    ],
                  });
                },
              },
            ]),
            i
          );
        })(r.a.Component),
        P = [],
        N = [],
        U = {},
        k = function (e) {
          if (U[e.steamid] && !e.state.health) return U[e.steamid];
          var t = Object(c.a)(e.forward, 2),
            i = t[0],
            n = t[1],
            a = 0,
            r = [Math.asin(i), Math.acos(n)].map(function (e) {
              return (180 * e) / Math.PI;
            }),
            s = Object(c.a)(r, 2),
            o = s[0],
            p = s[1];
          (a = p < 45 ? Math.abs(o) : p > 135 ? 180 - Math.abs(o) : p),
            o < 0 && (a = -(a -= 360)),
            U[e.steamid] || (U[e.steamid] = a);
          var l = U[e.steamid],
            u = l;
          return (
            (u -= 360 * Math.floor(l / 360)),
            (u = -(u -= a)),
            Math.abs(u) > 180 && (u -= (360 * Math.abs(u)) / u),
            (U[e.steamid] += u),
            U[e.steamid]
          );
        },
        w = (function (e) {
          Object(b.a)(i, e);
          var t = Object(g.a)(i);
          function i() {
            var e;
            Object(f.a)(this, i);
            for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
              a[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(a))).round = function (e) {
                return 0.02 * Math.round(e / 0.02);
              }),
              (e.parsePosition = function (t, i, n) {
                if (!(e.props.mapName in j)) return [0, 0];
                var a = n.origin.x + t[0] * n.pxPerUX - i / 2,
                  r = n.origin.y + t[1] * n.pxPerUY - i / 2;
                return [e.round(a), e.round(r)];
              }),
              (e.parseGrenadePosition = function (t, i) {
                if (!("position" in t)) return null;
                var n = 30;
                return (
                  "smoke" === t.type && (n = 40),
                  e.parsePosition(
                    t.position.split(", ").map(function (e) {
                      return Number(e);
                    }),
                    n,
                    i
                  )
                );
              }),
              (e.getGrenadePosition = function (t, i) {
                var n = N.slice(0, 5)
                  .map(function (e) {
                    return e.filter(function (e) {
                      return e.id === t.id;
                    })[0];
                  })
                  .filter(function (e) {
                    return !!e;
                  });
                if (0 === n.length) return null;
                var a = n
                  .map(function (t) {
                    return e.parseGrenadePosition(t, i);
                  })
                  .filter(function (e) {
                    return null !== e;
                  });
                if (0 === a.length) return null;
                var r,
                  s = a.length,
                  o = 0,
                  c = 0,
                  p = Object(d.a)(a);
                try {
                  for (p.s(); !(r = p.n()).done; ) {
                    var l = r.value;
                    (o += l[0]), (c += l[1]);
                  }
                } catch (u) {
                  p.e(u);
                } finally {
                  p.f();
                }
                return [o / s, c / s];
              }),
              (e.getPosition = function (t, i) {
                var n = P.slice(0, 5)
                  .map(function (e) {
                    return e.filter(function (e) {
                      return e.steamid === t.steamid;
                    })[0];
                  })
                  .filter(function (e) {
                    return !!e;
                  });
                if (0 === n.length) return [0, 0];
                var a,
                  r = n.map(function (t) {
                    return e.parsePosition(t.position, y.playerSize, i);
                  }),
                  s = r.length,
                  o = 0,
                  c = 0,
                  p = Object(d.a)(r);
                try {
                  for (p.s(); !(a = p.n()).done; ) {
                    var l = a.value;
                    (o += l[0]), (c += l[1]);
                  }
                } catch (u) {
                  p.e(u);
                } finally {
                  p.f();
                }
                return [o / s, c / s, k(t)];
              }),
              (e.mapPlayer = function (t) {
                return function (i) {
                  if (!(e.props.mapName in j)) return null;
                  var n = j[e.props.mapName],
                    a = {
                      id: i.steamid,
                      label: void 0 !== i.observer_slot ? i.observer_slot : "",
                      side: i.team.side,
                      position: [],
                      visible: !0,
                      isActive: !!t && t.steamid === i.steamid,
                      forward: 0,
                      steamid: i.steamid,
                      isAlive: i.state.health > 0,
                      hasBomb: !!Object.values(i.weapons).find(function (e) {
                        return "C4" === e.type;
                      }),
                    };
                  if ("config" in n) {
                    var r = e.getPosition(i, n.config);
                    return (a.position = r), a;
                  }
                  return n.configs.map(function (t) {
                    return Object(u.a)(
                      Object(u.a)({}, a),
                      {},
                      {
                        position: e.getPosition(i, t.config),
                        id: "".concat(i.steamid, "_").concat(t.id),
                        visible: t.isVisible(i.position[2]),
                      }
                    );
                  });
                };
              }),
              (e.mapGrenade = function (t) {
                if (!(e.props.mapName in j)) return null;
                var i = j[e.props.mapName];
                if ("inferno" === t.type) {
                  return Object.keys(t.flames)
                    .map(function (n) {
                      return "config" in i
                        ? {
                            position: e.parsePosition(
                              t.flames[n].split(", ").map(function (e) {
                                return Number(e);
                              }),
                              12,
                              i.config
                            ),
                            id: "".concat(n, "_").concat(t.id),
                            visible: !0,
                          }
                        : i.configs.map(function (i) {
                            return {
                              id: ""
                                .concat(n, "_")
                                .concat(t.id, "_")
                                .concat(i.id),
                              visible: i.isVisible(
                                t.flames[n].split(", ").map(Number)[2]
                              ),
                              position: e.parsePosition(
                                t.flames[n].split(", ").map(function (e) {
                                  return Number(e);
                                }),
                                12,
                                i.config
                              ),
                            };
                          });
                    })
                    .flat()
                    .map(function (e) {
                      return Object(u.a)(
                        Object(u.a)({}, e),
                        {},
                        { type: "inferno", state: "landed" }
                      );
                    });
                }
                if ("config" in i) {
                  var n = e.getGrenadePosition(t, i.config);
                  if (!n) return null;
                  var a = {
                    type: t.type,
                    state: "inair",
                    position: n,
                    id: t.id,
                    visible: !0,
                  };
                  return (
                    "smoke" === t.type
                      ? "0.0" !== t.effecttime &&
                        ((a.state = "landed"),
                        Number(t.effecttime) >= 16.5 && (a.state = "exploded"))
                      : ("flashbang" !== t.type && "frag" !== t.type) ||
                        (Number(t.lifetime) >= 1.25 && (a.state = "exploded")),
                    a
                  );
                }
                return i.configs
                  .map(function (i) {
                    var n = e.getGrenadePosition(t, i.config);
                    if (!n) return null;
                    var a = {
                      type: t.type,
                      state: "inair",
                      position: n,
                      id: "".concat(t.id, "_").concat(i.id),
                      visible: i.isVisible(
                        t.position.split(", ").map(Number)[2]
                      ),
                    };
                    return (
                      "smoke" === t.type
                        ? "0.0" !== t.effecttime &&
                          ((a.state = "landed"),
                          Number(t.effecttime) >= 16.5 &&
                            (a.state = "exploded"))
                        : ("flashbang" !== t.type && "frag" !== t.type) ||
                          (Number(t.lifetime) >= 1.25 &&
                            (a.state = "exploded")),
                      a
                    );
                  })
                  .filter(function (e) {
                    return null !== e;
                  });
              }),
              e
            );
          }
          return (
            Object(m.a)(i, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.players
                      .map(this.mapPlayer(this.props.player))
                      .filter(function (e) {
                        return null !== e;
                      })
                      .flat();
                  P.unshift(this.props.players),
                    P.length > 5 && (P = P.slice(0, 5));
                  var i = [],
                    a = Object.keys(this.props.grenades).map(function (t) {
                      return Object(u.a)(
                        Object(u.a)({}, e.props.grenades[t]),
                        {},
                        { id: t }
                      );
                    });
                  a &&
                    ((i = a
                      .map(this.mapGrenade)
                      .filter(function (e) {
                        return null !== e;
                      })
                      .flat()),
                    N.unshift(a)),
                    N.length > 5 && (N = N.slice(0, 5));
                  var r = this.props.size || 300,
                    s = (r - (r * r) / 1024) / 2;
                  return this.props.mapName in j
                    ? Object(n.jsx)("div", {
                        className: "map-container",
                        style: {
                          width: r,
                          height: r,
                          transform: "scale(".concat(r / 1024, ")"),
                          top: -s,
                          left: -s,
                        },
                        children: Object(n.jsx)(O, {
                          players: t,
                          grenades: i,
                          parsePosition: this.parsePosition,
                          bomb: this.props.bomb,
                          mapName: this.props.mapName,
                          mapConfig: j[this.props.mapName],
                        }),
                      })
                    : Object(n.jsx)("div", {
                        className: "map-container",
                        style: {
                          width: r,
                          height: r,
                          transform: "scale(".concat(r / 1024, ")"),
                          top: -s,
                          left: -s,
                        },
                        children: "Unsupported map",
                      });
                },
              },
            ]),
            i
          );
        })(r.a.Component),
        X = l()(
          "http://".concat(window.ip, ":").concat(window.port),
          "update"
        ).GSI;
      var Y = function () {
        var e = Object(a.useState)(null),
          t = Object(c.a)(e, 2),
          i = t[0],
          r = t[1];
        return (
          Object(a.useEffect)(function () {
            X.on("data", function (e) {
              r(e);
            });
          }, []),
          i
            ? Object(n.jsx)("div", {
                className: "custom-radar-external",
                children: Object(n.jsx)(w, {
                  player: i.player,
                  players: i.players,
                  bomb: i.bomb,
                  grenades: i.grenades,
                  size: 350,
                  mapName: i.map.name.substr(i.map.name.lastIndexOf("/") + 1),
                }),
              })
            : null
        );
      };
      o.a.render(
        Object(n.jsx)(r.a.StrictMode, { children: Object(n.jsx)(Y, {}) }),
        document.getElementById("custom-radar-external-container")
      );
    },
  },
  [[74, 1, 2]],
]);
//# sourceMappingURL=main.81bd487d.chunk.js.map
