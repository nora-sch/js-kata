const compare = require("./string-compare");

test("compare function exists", () => {
  expect(typeof compare).toBe("function");
});

test("compare as two parameters", () => {
  expect(compare.length).toBe(2);
});

// TODO add your tests here
test("is functionnal ?", () => {
  expect(compare('titi','toto')).toBe(2);
});

test("is functionnal with null ?", () => {
  expect(compare('tutu',null)).toBe(-1);
});

test("is functionnal with empties ?", () => {
  expect(compare('','')).toBe(0);
});

test("is functionnal with two different length ?", () => {
  expect(compare('tit','tototo')).toBe(-1);
});