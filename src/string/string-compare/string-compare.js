/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.

If the two arguments doesn't have the same length or at least one is null, return -1 instead.

Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1

Add you own tests.

*/

// TODO add your code here
const compare = (string1, string2) => {
  let count = 0;
  if (
    string1 !== null && string2 !== null &&
    string1.length === string2.length
  ) {
    string1.split("").forEach((element, i) => {
      string1.charAt(i) === string2.charAt(i) ? count++ : null;
    });
    return count;
  }
  else
    return -1;
};

module.exports = compare;
