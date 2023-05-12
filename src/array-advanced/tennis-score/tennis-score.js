/*
Create a function `getScore` which returns the string of the current scores of a tennis game, from a number array where each value represents the player that scored.

* [1, 1, 2, 2, 1] : serving player (1) scored twice, then the receiving player (2) scored twice, and finally the serving player (1) scored once.
The expected result is "40-30".

Game rules :

The score on the left represents the serving player (1), the score on the right represents the receiving player (2).

Scores from zero to three points are described as "love", "15", "30", and "40", respectively.

If at least three points have been scored by each player, the score is not called out as "40–40", but rather as "deuce".

If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game can be called "ad in" when the serving player (1) is ahead, and "ad out" when the receiving player (2) is ahead.

Example:
* points : [1, 1, 1], result : "40-love"
* points : [2, 1, 2, 2], result : "15-40"
* points : [1, 2, 1, 2, 1, 2], result : "deuce"
* points : [1, 1, 1, 2, 2, 2, 1], result : "ad in"

If the argument is null or not an array, throw a TypeError.
If a value of the argument is null or not a number, throw a TypeError.
If a value of the argument is not 1 or 2, throw a RangeError.

Add you own tests.

*/

// TODO add your code here

const getScore = (scores) => {
  let serving_score = 0;
  let receiving_score = 0;
  for (let i = 0; i < scores.length; i++) {
    scores[i] === 1 ? serving_score++ : receiving_score++;
    if (serving_score >= 3 && receiving_score >= 3) {
      if (serving_score === 3 && receiving_score === 3 && i === scores.length - 1 ) {
        return "deuce";
      } else if (serving_score > 3) {
        return "ad in";
      } else if (receiving_score > 3) {
        return "ad out";
      }
    }
  }

  return `${
    serving_score === 0 ? "love" : serving_score === 1 ? "15" : serving_score === 2 ? "30" : "40" }-${ receiving_score === 0 ? "love"
      : receiving_score === 1 ? "15" : receiving_score === 2 ? "30" : "40" }`;
};

console.log(getScore([1, 1, 2, 2, 2, 2])); // [1, 1, 1, 2, 2, 2, 1] add in  [1, 1, 1, 2, 2, 2, 2] add out
console.log(getScore([1, 1, 1, 2, 2, 2, 1])); //  add in
console.log(getScore([1, 1, 1, 2, 2, 2, 2])); // add out

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof getScore, "function");
assert.strictEqual(getScore.length, 1);
// TODO add your tests:

// End of tests
