/*
Create a function `sweep` which takes a grid and two numbers as parameters :
* grid : a minesweeper matrix where 0 are empty cells and 1 are bombs. The width and height of the grid can vary.
* row : the vertical coordinate of the cell to sweep
* column : the horizontal coordinate of the cell to sweep

The function will check the cell using the coordinates and returns :
* "kaboom", if it contains a boom
* the number of adjacent bombs, if it's empty

The function will throw :
* TypeError if grid is null or not an array
* TypeError if at least one value of the grid is not 0 or 1
* TypeError if row or column are null or not a number
* RangeError if grid has a width or height inferior to one
* RangeError if row or column are out of bounds

Example :

grid :[
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 0],
];

row : 1
column : 2

result : 2

*/

// TODO add your code here
const gridArray = [
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 0],
];

const sweep = (grid, row, column) => {
  let isValid = false;
  if (
    typeof row === "number" &&
    row !== null &&
    typeof column === "number" &&
    column !== null
  ) {
    if (grid !== null && Array.isArray(grid)) {
      const rowsCount = grid.length;
      if (rowsCount >= 1 && row >= 0 && row <= rowsCount) {
        for (let i = 0; i < rowsCount; i++) {
          if (grid[i].length >= 1 && column >= 0 && column <= grid[i].length) {
            for (let j = 0; j < grid[i].length; j++) {
              if (grid[i][j] === 0 || grid[i][j] === 1) {
                isValid = true;
              } else {
                throw new TypeError("le numéro n'est pas 0 ou 1");
              }
            }
          } else {
            throw new RangeError("il y a moins que une colonne");
          }
        }
      } else {
        throw new RangeError("il y a moins que une ligne");
      }
    } else {
      throw new TypeError("grid n'est pas un tableau ou il est null");
    }
  } else {
    throw new TypeError("ligne ou colonne n'est pas un numero ou est null");
  }

  // SI VALIDEE
  if (isValid === true) {
    console.log(grid[row][column]);
    if (grid[row][column] === 1) {
      console.log("kaboom");
      return "kaboom";
    } else {
      let countBombs = 0;
      for (let i = 1; i >= -1; i--) {
        for (let j = 1; j >= -1; j--) {
          if (grid[row - i] !== undefined) {
            if (grid[row - i][column - j] !== undefined) {
              if (grid[row - i][column - j] === 1) {
                countBombs++;
              }
            }
          }
        }
      }
      return countBombs;
    }
  }
};

sweep(gridArray, 1, 2);

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sweep, "function");
assert.strictEqual(sweep.length, 3);
const grid = [
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 0],
];
assert.strictEqual(sweep(grid, 1, 1), "kaboom");
assert.strictEqual(sweep(grid, 0, 3), "kaboom");
assert.strictEqual(sweep(grid, 2, 0), "kaboom");
assert.strictEqual(sweep(grid, 0, 0), 1);
assert.strictEqual(sweep(grid, 1, 2), 2);
assert.strictEqual(sweep(grid, 2, 3), 0);
assert.throws(() => {
  sweep(null, 1, 1);
}, TypeError);
assert.throws(() => {
  sweep("a", 1, 1);
}, TypeError);
assert.throws(() => {
  sweep(
    [
      [0, 0, "0", 1],
      [0, 1, 0, 1],
      [1, 0, 0, 0],
    ],
    1,
    1
  );
}, TypeError);
assert.throws(() => {
  sweep(
    [
      [0, 0, 0, 1],
      [0, -1, 0, 1],
      [1, 0, 0, 0],
    ],
    1,
    1
  );
}, TypeError);
assert.throws(() => {
  sweep(
    [
      [0, 0, 0, 1],
      [0, 1, null, 1],
      [1, 0, 0, 0],
    ],
    0,
    1
  );
}, TypeError);
assert.throws(() => {
  sweep(grid, -1, 1);
}, RangeError);
assert.throws(() => {
  sweep(grid, 1, 5);
}, RangeError);

// End of tests
