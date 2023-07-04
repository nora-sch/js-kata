/*
Create a function `winner` which analyses a 3x3 tic-tac-toe grid.
* "X" represents player X
* "0" represents player 0
* " " (space) is an empty cell

grid :
[
  ["X", "O", "O"],
  ["X", "O", "O"],
  ["X", " ", " "],
]

The function should returns the winner :
* "X wins" when X wins
* "O wins" when O wins
* "Cat's game" if it's a draw or if nobody wins
* "{player} is a cheater" where {player} is replaced by the player who cheated.

The function should throw :
* TypeError if the grid is null or not an array.
* RangeError if the grid has not the size expected
* Error with the text "Illegal character" if the grid contains at least one illegal character.

*/

// TODO add your code here

const filterLine = (array) => {
  const countX = array.filter((element) => element === "X").length;
  const countO = array.filter((element) => element === "O").length;
  return [countX, countO];
};
const testWinner = (grid) => {
  let playerX = 0;
  let playerO = 0;
  let lineToVerify = [];
  let lineToVerify2 = [];
  let resultat = "Cat's game";
  grid.forEach((row) => {
    playerX += row.filter((cell) => cell === "X").length;
    playerO += row.filter((cell) => cell === "O").length;
  });
  if (playerX > playerO + 1 || playerX < playerO - 1) {
    return playerX > playerO ? "X is a cheater" : "O is a cheater";
  } else {
    grid.forEach((row) => {
      const [countX, countO] = filterLine(row);
      if (countX === 3) {
        resultat = "X wins";
      } else if (countO === 3) {
        resultat = "O wins";
      }
    });

    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        lineToVerify.push(grid[i][j]);
      }
      const [countX, countO] = filterLine(lineToVerify);
      lineToVerify = [];
      if (countX === 3) {
        resultat = "X wins";
      } else if (countO === 3) {
        resultat = "O wins";
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = i; j < i + 1; j++) {
        lineToVerify.push(grid[i][j]);
        lineToVerify2.push(grid[2 - j][i]);
      }
    }
    const [countX, countO] = filterLine(lineToVerify);
    lineToVerify = [];
    if (countX === 3) {
      resultat = "X wins";
    } else if (countO === 3) {
      resultat = "O wins";
    }
    const [countX2, countO2] = filterLine(lineToVerify2);
    lineToVerify2 = [];
    if (countX2 === 3) {
      resultat = "X wins";
    } else if (countO2 === 3) {
      resultat = "O wins";
    }
  }
  return resultat;
};
const winner = (grid) => {
  const legalCharacter = ["O", "X", " "];

  if (grid !== null && Array.isArray(grid)) {
    if (grid.length === 3) {
      for (let i = 0; i < 3; i++) {
        if (grid[i].length === 3) {
          for (let j = 0; j < 3; j++) {
            if (!legalCharacter.includes(grid[i][j])) {
              throw new Error("Illegal character");
            }
          }
        } else {
          throw new RangeError("Grid has not the column size expected");
        }
      }
    } else {
      throw new RangeError("Grid has not the row size expected");
    }
  } else {
    throw new TypeError("Grid is not an array");
  }
  return testWinner(grid);
};

console.log(
  winner([
    ["X", "O", "X"],
    ["O", "O", "O"],
    [" ", " ", "X"],
  ])
);

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof winner, "function");
assert.strictEqual(winner.length, 1);
assert.strictEqual(
  winner([
    ["X", "O", "O"],
    ["X", "O", "O"],
    ["X", " ", " "],
  ]),
  "X wins"
);
assert.strictEqual(
  winner([
    ["X", "O", "X"],
    ["O", "O", "O"],
    [" ", " ", "X"],
  ]),
  "O wins"
);
assert.strictEqual(
  winner([
    ["X", "X", "O"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ]),
  "X wins"
);
assert.strictEqual(
  winner([
    ["O", "X", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ]),
  "X wins"
);
assert.strictEqual(
  winner([
    ["O", "X", "O"],
    ["X", "X", "O"],
    ["O", "O", "X"],
  ]),
  "Cat's game"
);
assert.strictEqual(
  winner([
    ["O", "X", " "],
    [" ", " ", " "],
    [" ", "O", " "],
  ]),
  "Cat's game"
);
assert.strictEqual(
  winner([
    ["O", "X", "X"],
    ["X", "X", "O"],
    ["X", "O", "X"],
  ]),
  "X is a cheater"
);
assert.throws(() => [winner(null)], TypeError);
assert.throws(() => [winner("OXXOXOXXOX")], TypeError);
assert.throws(() => {
  winner([
    ["O", "X", "X"],
    ["X", "X", "O"],
  ]);
}, RangeError);
assert.throws(() => {
  winner([
    ["O", "X", "X"],
    ["X", "X"],
    ["X", "O", "X"],
  ]);
}, RangeError);
assert.throws(() => {
  winner([
    ["O", "X", "X"],
    ["O", "X", "0"],
    ["X", "O", "X"],
  ]);
}, /^Error: Illegal character$/);

// End of tests
