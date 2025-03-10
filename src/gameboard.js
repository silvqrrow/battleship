import Ship from "../src/ship";

class Gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];
    this.#initializeBoard(this.rows, this.columns);
  }

  #initializeBoard(rows, columns) {
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(0);
      }
      this.board.push(row);
    }
  }

  placeShip(ship, row1, col1, row2, col2) {
    if (row1 == row2) {
      // Horizontal Placement
      const row = row1 - 1;
      // subtract from col1 to repesct 0-indexing
      for (let i = col1 - 1; i < col2; i++) {
        this.board[row][i] = ship;
      }
    } else if (col1 == col2) {
      // Vertical Placement
      const col = col1 - 1;
      // subtract from row to respect 0-indexing
      for (let i = row1 - 1; i < row2; i++) {
        this.board[i][col] = ship;
      }
    }
  }

  receiveAttack(row, col) {
    const target = this.board[row - 1][col - 1];
    if (target instanceof Ship) {
      target.hit();
    } else {
      this.board[row - 1][col - 1] = "X";
    }
  }

  // note for the future; when making random ship placement, use 50/50 for one direction, same value for both
}

export default Gameboard;
