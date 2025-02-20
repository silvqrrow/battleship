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
}
