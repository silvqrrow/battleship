import Player from "../player.js";
import renderBoard from "../render.js";
import randomShip from "../randomship.js";
import GameController from "../gamecontroller.js";

const player = new Player("player");
const computer = new Player("computer");
const playerGameboard = player.getPlayerGameboard();
const computerGameboard = computer.getPlayerGameboard();

randomShip(playerGameboard);
randomShip(computerGameboard);

let game; // Declare game in outer scope

function renderAll() {
  renderBoard(player, game);
  renderBoard(computer, game);
}

game = GameController(
  player,
  computer,
  playerGameboard,
  computerGameboard,
  randomShip,
  renderAll
);

renderAll();

document.querySelector("button").addEventListener("click", () => {
  game.resetGame();
});
