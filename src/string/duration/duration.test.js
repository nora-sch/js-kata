const convertTime = require("./duration");

test("convertTime function exists", () => {
  expect(typeof convertTime).toBe("function");
});

test("convertTime as one parameter", () => {
  expect(convertTime.length).toBe(1);
});

// TODO add your tests here

// * "02:30" -> 150
test("convertTime normal case", () => {
  expect(convertTime("02:30")).toBe(150);
});
// * "01:45" -> 105
test("convertTime format incorrect 1", () => {
  expect(convertTime("025:30")).toBe(null);
});
// * "01h45m" -> null
test("convertTime format incorrect 2", () => {
  expect(convertTime("01h45m")).toBe(null);
});