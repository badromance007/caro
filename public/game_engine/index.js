! function r(e, t, n) {
    function i(o, f) {
        if (!t[o]) {
            if (!e[o]) {
                var u = "function" == typeof require && require;
                if (!f && u) return u(o, !0);
                if (a) return a(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var s = t[o] = {
                exports: {}
            };
            e[o][0].call(s.exports, function(r) {
                var t = e[o][1][r];
                return i(t ? t : r)
            }, s, s.exports, r, e, t, n)
        }
        return t[o].exports
    }
    for (var a = "function" == typeof require && require, o = 0; o < n.length; o++) i(n[o]);
    return i
}({
    1: [function(r, e, t) {
        e.exports = function() {
            var r = [
                    [1, 1, 1, 1, 1]
                ],
                e = [
                    [0, 1, 1, 1, 1, 0]
                ],
                t = [
                    [0, 1, 1, 1, 0, 0],
                    [0, 0, 1, 1, 1, 0],
                    [0, 1, 0, 1, 1, 0],
                    [0, 1, 1, 0, 1, 0]
                ],
                n = [
                    [0, 0, 1, 1, 0, 0],
                    [0, 1, 0, 1, 0, 0],
                    [0, 0, 1, 0, 1, 0],
                    [0, 1, 1, 0, 0, 0],
                    [0, 0, 0, 1, 1, 0],
                    [0, 1, 0, 0, 1, 0]
                ],
                i = [
                    [-1, 1, 0, 1, 1, 1],
                    [-1, 1, 1, 0, 1, 1],
                    [-1, 1, 1, 1, 0, 1],
                    [-1, 1, 1, 1, 1, 0],
                    [0, 1, 1, 1, 1, -1],
                    [1, 0, 1, 1, 1, -1],
                    [1, 1, 0, 1, 1, -1],
                    [1, 1, 1, 0, 1, -1]
                ],
                a = [
                    [-1, 1, 1, 1, 0, 0],
                    [-1, 1, 1, 0, 1, 0],
                    [-1, 1, 0, 1, 1, 0],
                    [0, 0, 1, 1, 1, -1],
                    [0, 1, 0, 1, 1, -1],
                    [0, 1, 1, 0, 1, -1],
                    [-1, 1, 0, 1, 0, 1, -1],
                    [-1, 0, 1, 1, 1, 0, -1],
                    [-1, 1, 1, 0, 0, 1, -1],
                    [-1, 1, 0, 0, 1, 1, -1]
                ];
            ! function() {
                for (var o = [r, e, t, n, i, a], f = 0; f < o.length; f++) {
                    for (var u = [], l = 0; l < o[f].length; l++) {
                        for (var s = [], h = 0; h < o[f][l].length; h++) s[h] = -o[f][l][h];
                        u.push(s)
                    }
                    for (var v = 0; v < u.length; v++) o[f].push(u[v])
                }
            }();
            var o = function(r, e, t, n, i, a) {
                    if (r > 0) return 1e9;
                    if (n > 0) return 1e8;
                    if (a > 1) return 1e7;
                    if (t > 0 && a > 0) return 1e6;
                    if (t > 1) return 1e5;
                    if (1 == t) return 3 == e ? 4e4 : 2 == e ? 38e3 : 1 == e ? 35e3 : 3450;
                    if (1 == a) return 3 == e ? 4500 : 2 == e ? 4200 : 1 == e ? 4100 : 4050;
                    if (1 == i) {
                        if (3 == e) return 3400;
                        if (2 == e) return 3300;
                        if (1 == e) return 3100
                    }
                    if (2 == i) {
                        if (2 == e) return 3e3;
                        if (1 == e) return 2900
                    }
                    return 3 == i && 1 == e ? 2800 : 4 == e ? 2700 : 3 == e ? 2500 : 2 == e ? 2e3 : 1 == e ? 1e3 : 0
                },
                f = function(r, e) {
                    for (var t, n = r.length, i = e.length, a = 0; n - i >= a; a++) {
                        t = 0;
                        for (var o = 0; i > o && r[a + o] == e[o]; o++) t++;
                        if (t == i) return !0
                    }
                    return !1
                },
                u = function(r, e) {
                    for (var t = 0; t < r.length; t++)
                        if (f(e, r[t])) return !0;
                    return !1
                },
                l = {};
            return l.winValue = 1e9, l.valuePosition = function(f, l, s, h) {
                for (var v = 0, c = 0, d = 0, g = 0, C = 0, w = 0, p = [f, l, s, h], b = 0; b < p.length; b++) u(r, p[b]) ? v++ : u(i, p[b]) ? w++ : u(a, p[b]) ? C++ : u(e, p[b]) ? g++ : u(t, p[b]) ? d++ : u(n, p[b]) && c++;
                return o(v, c, d, g, C, w)
            }, l
        }
    }, {}],
    2: [function(r, e, t) {
        Array.matrix = function(r, e, t) {
            var n, i, a, o = [];
            for (i = 0; r > i; i++) {
                for (n = [], a = 0; e > a; a++) n[a] = t;
                o[i] = n
            }
            return o
        };
        var n = r("./combinations");
        e.exports = function(r) {
            var e = 5,
                t = 1,
                i = !1,
                a = 15,
                o = Array.matrix(15, 15, 0),
                f = r || -1,
                u = n(); - 1 === f && (o[7][7] = 1);
            var l = function() {
                    for (var r = 0; a > r; r++)
                        for (var e = 0; a > e; e++)
                            if (0 != o[r][e]) {
                                var t = u.valuePosition(c(o, o[r][e], r, e, 1, 0), c(o, o[r][e], r, e, 0, 1), c(o, o[r][e], r, e, 1, 1), c(o, o[r][e], r, e, 1, -1));
                                t === u.winValue && (i = !0)
                            }
                },
                s = function C(r, e, t, n) {
                    if (0 == e) return d(r, n);
                    for (var i = Number.MIN_VALUE, a = v(r, t), o = 0; o < a.length; o++) i = Math.max(i, -C(a[o], e - 1, -t, r));
                    return i
                },
                h = function(r, e, t) {
                    for (var n = 0, i = 0; i < r.length; i++)(e != r[i][0] || t != r[i][1]) && n++;
                    return n == r.length
                },
                v = function(r, e) {
                    for (var n = [], i = [], o = 0; a > o; o++)
                        for (var f = 0; a > f; f++)
                            if (0 != r[o][f])
                                for (var u = o - t; o + t >= u; u++)
                                    for (var l = f - t; f + t >= l; l++)
                                        if (u >= 0 && l >= 0 && a > u && a > l && 0 == r[u][l]) {
                                            var s = [u, l],
                                                v = h(i, s[0], s[1]);
                                            v && i.push(s)
                                        } for (var c = 0; c < i.length; c++) {
                        for (var d = Array.matrix(a, a, 0), g = 0; a > g; g++)
                            for (var C = 0; a > C; C++) d[g][C] = r[g][C];
                        d[i[c][0]][i[c][1]] = -e, n.push(d)
                    }
                    return n
                },
                c = function(r, t, n, i, o, f) {
                    for (var u = [t], l = 1; e > l; l++) {
                        var s = n - o * l,
                            h = i - f * l;
                        if (s >= a || h >= a || 0 > s || 0 > h) break;
                        var v = r[s][h];
                        if (r[s][h] == -t) {
                            u.unshift(v);
                            break
                        }
                        u.unshift(v)
                    }
                    for (var c = 1; e > c; c++) {
                        var d = n + o * c,
                            g = i + f * c;
                        if (d >= a || g >= a || 0 > d || 0 > g) break;
                        var C = r[d][g];
                        if (C == -t) {
                            u.push(C);
                            break
                        }
                        u.push(C)
                    }
                    return u
                },
                d = function(r, e) {
                    for (var t = 0; a > t; t++)
                        for (var n = 0; a > n; n++)
                            if (r[t][n] != e[t][n]) {
                                var i = r[t][n],
                                    o = u.valuePosition(c(r, i, t, n, 1, 0), c(r, i, t, n, 0, 1), c(r, i, t, n, 1, 1), c(r, i, t, n, 1, -1));
                                r[t][n] = -i;
                                var f = u.valuePosition(c(r, -i, t, n, 1, 0), c(r, -i, t, n, 0, 1), c(r, -i, t, n, 1, 1), c(r, -i, t, n, 1, -1));
                                return r[t][n] = -i, 2 * o + f
                            } return 0
                },
                g = {};
            return g.winState = "", g.makeAnswer = function(r, e) {
                var t = this;
                if (o[r][e] = f, l(), i) return t.winState = "you win", "";
                for (var n = [-1, -1], u = v(o, f), h = -1, c = Number.MIN_VALUE, d = 0; d < u.length; d++) {
                    var g = s(u[d], 0, -f, o);
                    g > c && (c = g, h = d)
                }
                for (var C = 0; a > C; C++)
                    for (var w = 0; a > w; w++)
                        if (u[h][C][w] != o[C][w]) return n[0] = C, n[1] = w, o[n[0]][n[1]] = -f, l(), i && (t.winState = "you lost"), n;
                return n
            }, g
        }
    }, {
        "./combinations": 1
    }],
    3: [function(r, e, t) {
        $(document).ready(function() {
            function e(r) {
                function e() {
                    return o *= -1, 1 === o ? "boardCellCross" : "boardCellCircle"
                }
                if (f) return "";
                var t = $(this);
                if (t.children().hasClass("boardCellCircle")) return "";
                if (t.children().hasClass("boardCellCross")) return "";
                var n = t.children().attr("id").split("-"),
                    i = a.makeAnswer(n[0], n[1]);
                if ("" !== i) {
                    var u = "#" + i[0] + "-" + i[1];
                    $(u).addClass(e())
                } else o *= -1;
                if (t.children().addClass(e()), "" !== a.winState) {
                    var l = $("#message");
                    l.text(a.winState), f = !0, l.removeClass("looseState"), "you lost" === a.winState && l.addClass("looseState")
                }
            }

            function t(r) {
                var e = 100,
                    t = 300,
                    n = $(this).attr("id").split("-")[1],
                    i = $(".board"),
                    a = $(".controls");
                "Up" === n && (i.width(i.width() + e), i.height(i.height() + e), a.width(a.width() + e), a.height(a.height() + e / 15)), "Down" === n && i.width() > t && (i.width(i.width() - e), i.height(i.height() - e), a.width(a.width() - e), a.height(a.height() - e / 15))
            }

            function n(r) {
                var e = $(this).children().attr("id").split("-")[1];
                $(".boardCell").removeClass("boardCellCross boardCellCircle"), f = !1, $("#message").text(""), "O" === e && (a = i(), $("#7-7").addClass("boardCellCross"), o = -1), "X" === e && (a = i(1), o = 1), $("#check").prop("checked", !1)
            }
            var i = r("./gomoku/logic"),
                a = i();
            $("#7-7").addClass("boardCellCross");
            var o = -1,
                f = !1;
            $("div.boardCol").mousedown(e), $("#scale-Up").click(t), $("#scale-Down").click(t), $("#new-O").parent().click(n), $("#new-X").parent().click(n)
        })
    }, {
        "./gomoku/logic": 2
    }]
}, {}, [3]);