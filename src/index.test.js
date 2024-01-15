import Parse, { AREA, Utils } from "./parse/index.js";

test("广东省东莞寮步镇香市路香缤城市花园", () => {
  const result = Parse.parse("广东省东莞寮步镇香市路香缤城市花园", true);
  expect(result[0]["code"]).toEqual("441928");
});

test("大头儿子 15988888888  重庆市云阳县双林镇桐林小学", () => {
  const result = Parse.parse(
    "大头儿子 15988888888  重庆市云阳县双林镇桐林小学",
    true
  );
  expect(result[0]["code"]).toEqual("500235");
});

test("阿里虚拟号 13500001234-8888  重庆市云阳县双林镇桐林小学", () => {
  const result = Parse.parse(
    "阿里虚拟号 13500001234-8888  重庆市云阳县双林镇桐林小学",
    true
  );
  expect(result[0]["mobile"]).toEqual("13500001234-8888");
});
