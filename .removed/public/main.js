(() => {
	function e(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n;
	}
	var t = document.getElementById("app");
	function r(e) {
		var t = e.title;
		return React.createElement("h1", null, t || "Default title");
	}
	function n() {
		var t,
			n,
			a =
				((t = React.useState(0)),
				(n = 2),
				(function (e) {
					if (Array.isArray(e)) return e;
				})(t) ||
					(function (e, t) {
						var r =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != r) {
							var n,
								a,
								l,
								c,
								o = [],
								u = !0,
								i = !1;
							try {
								if (((l = (r = r.call(e)).next), 0 === t)) {
									if (Object(r) !== r) return;
									u = !1;
								} else
									for (
										;
										!(u = (n = l.call(r)).done) &&
										(o.push(n.value), o.length !== t);
										u = !0
									);
							} catch (e) {
								(i = !0), (a = e);
							} finally {
								try {
									if (
										!u &&
										null != r.return &&
										((c = r.return()), Object(c) !== c)
									)
										return;
								} finally {
									if (i) throw a;
								}
							}
							return o;
						}
					})(t, n) ||
					(function (t, r) {
						if (t) {
							if ("string" == typeof t) return e(t, r);
							var n = Object.prototype.toString.call(t).slice(8, -1);
							return (
								"Object" === n && t.constructor && (n = t.constructor.name),
								"Map" === n || "Set" === n
									? Array.from(t)
									: "Arguments" === n ||
									  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
									? e(t, r)
									: void 0
							);
						}
					})(t, n) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						);
					})()),
			l = a[0],
			c = a[1];
		return React.createElement(
			"div",
			null,
			React.createElement(r, { title: "Develop. Preview. Ship. 🚀" }),
			React.createElement(
				"ul",
				null,
				["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"].map(function (
					e,
				) {
					return React.createElement("li", { key: e }, e);
				}),
			),
			React.createElement(
				"button",
				{
					onClick: function () {
						c(l + 1);
					},
				},
				"Like (",
				l,
				")",
			),
		);
	}
	ReactDOM.render(React.createElement(n, null), t);
})();
