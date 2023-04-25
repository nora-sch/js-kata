/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []
* null -> []

Don't mutate the parameter.

*/

// TODO add your code here

function inverse(numberArray) {
  let inverseArray = [];
  if (numberArray !== null) {
    numberArray.forEach((number) => {
      if (number > 0) {
        inverseArray.push(-number);
      } else if (number < 0) {
        inverseArray.push(Math.abs(number));
      } else {
        inverseArray.push(number);
      }
    });
    return inverseArray;
  } else {
    return [];
  }
}

// const arrayOfNumbers = [];
// console.log(inverse(arrayOfNumbers));

module.exports = inverse;
