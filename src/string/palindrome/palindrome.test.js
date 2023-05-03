const isPalindrome = require("./palindrome");

test("isPalindrome function exists", () => {
  expect(typeof isPalindrome).toBe("function");
});

test("isPalindrome as one parameter", () => {
  expect(isPalindrome.length).toBe(1);
});

// TODO add your tests here
test("isPalindrome is functionnal ", () => {
  expect(isPalindrome('KAyak')).toBe(true);
});

test("isPalindrome is functionnal ", () => {
  expect(isPalindrome('palindrome')).toBe(false);
});

test("isPalindrome is functionnal with empty ", () => {
  expect(isPalindrome('')).toBe(true);
});

test("isPalindrome is functionnal with null ", () => {
  expect(isPalindrome(null)).toBe(true);
});