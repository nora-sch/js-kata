/*
Run-length encoding (RLE) is a very simple form of lossless data compression, in which same consecutive elements are stored as a single data value and count.

Create a function `encode` that implements a RLE of a string. If a character is present only once or twice consecutively, you must not compress it.

Example:
* "a" -> "a"
* "aa" -> "aa"
* "aaa" -> "a3"
* "aaaabbccca" -> "a4bbc3a"

If the argument is null, return an empty string.
If the argument is not a string, throw a TypeError.

Add you own tests.

*/

// TODO add your code here
const encode = (string) => {
  let count = 1;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i + 1)) {
      count++;
    } else {
      if (i + 1 !== string.length) {
        count > 2
          ? (result += string.charAt(i) + count)
          : (result += string.charAt(i).repeat(count));
        count = 1;
      } else if (count === 1) {
        result = result + string.charAt(i);
      } else {
        count > 2
          ? (result += string.charAt(i) + count)
          : (result += string.charAt(i).repeat(count));

        count = 1;
      }
    }
  }
  return result;
};

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof encode, "function");
assert.strictEqual(encode.length, 1);
// TODO add your tests:

// End of tests
