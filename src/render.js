import Ship from "./ship.js";

const renderBoard = (player, game) => {
  const gameboard = player.getPlayerGameboard();
  const playerType = player.getPlayerType();
  const boardDiv = document.querySelector(`.${playerType}-board`);

  boardDiv.replaceChildren();

  const board = gameboard.getBoard();

  board.forEach((row, r) => {
    row.forEach((cell, c) => {
      const cellDiv = document.createElement("div");

      if (cell == "X") {
        cellDiv.classList.add("hit-cell");
        cellDiv.textContent = "X";
      } else if (cell == ".") {
        cellDiv.classList.add("miss-cell");
        cellDiv.textContent = ".";
      } else if (cell instanceof Ship && playerType === "player") {
        cellDiv.classList.add("ship-cell");
      } else {
        cellDiv.classList.add("cell");

        if (playerType === "computer") {
          cellDiv.addEventListener("click", () => {
            game.playRound(r + 1, c + 1);
          });
        }
      }

      cellDiv.dataset.row = r;
      cellDiv.dataset.col = c;

      boardDiv.appendChild(cellDiv);
    });
  });
};

export default renderBoard;
