const countChar = require("./count-letters");

test("countChar function exists", () => {
  expect(typeof countChar).toBe("function");
});

test("countChar as two parameters", () => {
  expect(countChar.length).toBe(2);
});

// TODO add your tests here

// * "" and "a" -> 0
test("string is empty", () => {
  expect(countChar('', 'a')).toBe(0);
});
// * "a" and "a" -> 1
test("countChar is the same", () => {
  expect(countChar('a', 'a')).toBe(1);
});
// * "aaaaabbbaa" and "a" -> 7
test("normal case", () => {
  expect(countChar('aaaaabbbaa', 'a')).toBe(7);
});
// * "bbacbaaa" and "c" -> 1
test("one char found", () => {
  expect(countChar('bbacbaaa', 'c')).toBe(1);
});
// * "bbcc" and "a" -> 0
test("no char found", () => {
  expect(countChar('bbcc', 'a')).toBe(0);
});
// * null and "a" -> -1
test("string is null", () => {
  expect(countChar(null, 'a')).toBe(-1);
});
// * "hello" and "he" -> -1
test("char length other than 1", () => {
  expect(countChar('bbcc', 'aa')).toBe(-1);
});
// * "hello" and "" -> -1
test("no char to find", () => {
  expect(countChar('bbcc', '')).toBe(-1);
});
// * "hello" and null -> -1
test("char is null", () => {
  expect(countChar('bbcc', null)).toBe(-1);
});