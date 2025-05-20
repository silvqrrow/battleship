import Player from "../player.js";
import renderBoard from "../render.js";
import randomShip from "../randomship.js";

const player = new Player("player");
const computer = new Player("computer");

const playerGameboard = player.getPlayerGameboard();
const computerGameboard = computer.getPlayerGameboard();

// Place ships randomly for both players
randomShip(playerGameboard);
randomShip(computerGameboard);

// Render both boards
console.log("rendering player gameboard");
renderBoard(player);

console.log("rendering computer gameboard");
renderBoard(computer);
