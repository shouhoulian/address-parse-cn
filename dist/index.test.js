"use strict";

var _index = _interopRequireWildcard(require("./parse/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
test("广东省东莞寮步镇香市路香缤城市花园", () => {
  const result = _index.default.parse("广东省东莞寮步镇香市路香缤城市花园", true);
  expect(result[0]["code"]).toEqual("441928");
});
test("大头儿子 15988888888  重庆市云阳县双林镇桐林小学", () => {
  const result = _index.default.parse("大头儿子 15988888888  重庆市云阳县双林镇桐林小学", true);
  expect(result[0]["code"]).toEqual("500235");
});
test("阿里虚拟号 13500001234-8888  重庆市云阳县双林镇桐林小学", () => {
  const result = _index.default.parse("阿里虚拟号 13500001234-8888  重庆市云阳县双林镇桐林小学", true);
  expect(result[0]["mobile"]).toEqual("13500001234-8888");
});