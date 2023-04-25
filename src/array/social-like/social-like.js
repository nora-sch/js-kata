/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here

function getLikes(arrayOfNames) {
  let result;
  switch (arrayOfNames.length) {
    case 0:
      result = "Be the first to like this";
      break;
    case 1:
      result = `${arrayOfNames[0]} likes this`;
      break;
    case 2:
      result = `${arrayOfNames[0]} and ${arrayOfNames[1]} like this`;
      break;
    default:
      result = `${arrayOfNames[0]} and ${arrayOfNames.length - 1} other people like this`;
  }
  return result;
}

module.exports = getLikes;
