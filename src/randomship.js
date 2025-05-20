import Ship from "./ship.js";

const BOARD_SIZE = 10;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const canPlace = (board, row, col, length, orientation) => {
  for (let segment = 0; segment < length; segment++) {
    // Determine the current cell coordinates based on orientation
    let currentRow;
    let currentCol;
    if (orientation == "v") {
      // Vertical: row increases, column stays the same
      currentRow = row + segment;
      currentCol = col;
    } else {
      // Horizontal: column increases, row stays the same
      currentRow = row;
      currentCol = col + segment;
    }

    // Check the 3x3 area around each ship segment
    for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
      for (let colOffset = -1; colOffset <= 1; colOffset++) {
        let neighborRow = currentRow + rowOffset;
        let neighborCol = currentCol + colOffset;
        if (
          neighborRow >= 0 &&
          neighborRow < BOARD_SIZE &&
          neighborCol >= 0 &&
          neighborCol < BOARD_SIZE &&
          typeof board[neighborRow][neighborCol] === "object"
        ) {
          return false;
        }
      }
    }
  }
  return true;
};

const placeShipRandomly = (gameboard, length) => {
  const board = gameboard.getBoard();
  let placed = false;
  while (!placed) {
    // generate random orientation 50/50 chance
    const orientation = Math.random() < 0.5 ? "h" : "v";
    let maxRow;
    let maxCol;
    if (orientation == "v") {
      maxRow = BOARD_SIZE - length;
      maxCol = BOARD_SIZE - 1;
    } else {
      maxRow = BOARD_SIZE - 1;
      maxCol = BOARD_SIZE - length;
    }
    const row = getRandomInt(0, maxRow);
    const col = getRandomInt(0, maxCol);

    if (canPlace(board, row, col, length, orientation)) {
      const ship = new Ship(length);
      if (orientation == "h") {
        for (let i = 0; i < length; i++) {
          board[row][col + i] = ship;
        }
      } else {
        for (let i = 0; i < length; i++) {
          board[row + i][col] = ship;
        }
      }
      placed = true;
    }
  }
};

const randomShip = (gameboard) => {
  [4, 3, 3, 2, 2, 1, 1, 1, 1].forEach((length) =>
    placeShipRandomly(gameboard, length)
  );
};

export default randomShip;
