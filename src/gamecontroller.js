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
      return `${activePlayer.getPlayerType()} wins!`;
    }

    switchPlayerTurn();
    renderAll();
    return "continue";
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
