const GameController = function (
  playerOne,
  playerTwo,
  playerGameboard,
  computerGameboard,
  randomShip,
  renderAll
) {
  const Players = [playerOne, playerTwo];
  let activePlayer = Players[0];
  let gameOver = false;

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === Players[0] ? Players[1] : Players[0];
  };

  const playRound = (row, column) => {
    if (gameOver) return;

    const opponentBoard =
      activePlayer === playerOne ? computerGameboard : playerGameboard;
    opponentBoard.receiveAttack(row, column);

    if (opponentBoard.allSunk()) {
      gameOver = true;
      console.log(`${activePlayer.getPlayerType()} wins!`);
      renderAll();
      return;
    }

    switchPlayerTurn();
    renderAll();

    if (activePlayer === playerTwo && !gameOver) {
      setTimeout(() => {
        let r, c;
        do {
          r = Math.floor(Math.random() * 10) + 1;
          c = Math.floor(Math.random() * 10) + 1;
        } while (playerGameboard.alreadyAttacked(r, c));

        playRound(r, c);
      }, 200);
    }
  };

  const resetGame = () => {
    playerGameboard.resetBoard();
    computerGameboard.resetBoard();
    randomShip(playerGameboard);
    randomShip(computerGameboard);
    activePlayer = Players[0];
    gameOver = false;
    renderAll();
  };

  return {
    playRound,
    getActivePlayer: () => activePlayer,
    resetGame,
  };
};

export default GameController;
