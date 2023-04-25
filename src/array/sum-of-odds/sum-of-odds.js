/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here

function sum(arrayOfNumbers) {
  let sumOdds = 0;
  if (arrayOfNumbers !== null) {
    arrayOfNumbers.forEach((number) => {
      if (number % 2 !== 0) {
        sumOdds += number;
        // console.log(number);
      }
    });
  }
  return sumOdds;
}
// sum([1,2,3]);

module.exports = sum;
