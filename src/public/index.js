import Player from "../player.js";
import renderBoard from "../render.js";
import Ship from "../ship.js";

const player = new Player("player");
const computer = new Player("computer");

const playerGameboard = player.getPlayerGameboard();
const computerGameboard = computer.getPlayerGameboard();

const ship = new Ship(3);
const ship2 = new Ship(4);
const computerShip1 = new Ship(3);
const computerShip2 = new Ship(4);

playerGameboard.placeShip(ship, 1, 1, 1, 3);
playerGameboard.placeShip(ship2, 2, 1, 2, 4);

computerGameboard.placeShip(computerShip1, 1, 1, 1, 3);
computerGameboard.placeShip(computerShip2, 2, 1, 2, 4);

console.log("rendering player gameboard");
renderBoard(player);

console.log("rendering computer gameboard");
renderBoard(computer);
