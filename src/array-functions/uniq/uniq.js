/*
Implement a function `uniq` which takes as input a sequence and returns 
a sequence in which all duplicate elements following each other have been reduced to one instance.

Example:
* ['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']

Don't mutate the parameter.

Bonus : do not use a loop

*/

// TODO add your code here
const uniq = (sequence) => {
  const newSequence = sequence.filter(deleteDouble);
  return newSequence; 
};

function deleteDouble(element, i, sequence) {
  if(sequence.length <= 1){
    return true;
  }
  else if (i < sequence.length) {
    return element !== sequence[i + 1];
  }
  else {
    return true;// si c'est le dernier i - on prend l'element 
  }
}

 console.log(uniq(["a", "a", "b", "b", "c", "a", "b", "c"]));
console.log(uniq([undefined]));
// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof uniq, "function");
assert.strictEqual(uniq.length, 1);
assert.deepStrictEqual(uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"]), [
  "a",
  "b",
  "c",
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq(["a", "a", "a", "b", "b", "b", "c", "c", "c"]), [
  "a",
  "b",
  "c",
]);
assert.deepStrictEqual(uniq([]), []);
assert.deepStrictEqual(uniq(["foo"]), ["foo"]);
assert.deepStrictEqual(uniq(["bar", "bar", "bar", "bar", "bar"]), ["bar"]);
assert.deepStrictEqual(uniq([undefined]), [undefined]);
assert.deepStrictEqual(uniq([undefined, "a", "a"]), [undefined, "a"]);
assert.deepStrictEqual(uniq([""]), [""]);
let test = ["a", "a", "b"];
uniq(test);
assert.deepStrictEqual(test, ["a", "a", "b"], "don't mutate the parameter");

// // End of tests
