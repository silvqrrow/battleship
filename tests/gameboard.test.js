import Gameboard from "../src/gameboard";
import Ship from "../src/ship";

test("Horizontal placement of ships", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  gameboard.placeShip(ship, 1, 1, 1, 3);

  // Check that the ship is placed correctly
  expect(gameboard.board[0][0]).toBe(ship);
  expect(gameboard.board[0][1]).toBe(ship);
  expect(gameboard.board[0][2]).toBe(ship);

  // Check that other cells are not affected
  expect(gameboard.board[0][3]).toBe(0);
  expect(gameboard.board[1][0]).toBe(0);
});

test("Vertical Placements of ships", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  gameboard.placeShip(ship, 1, 1, 3, 1);

  // Check that the ship is placed correctly
  expect(gameboard.board[0][0]).toBe(ship);
  expect(gameboard.board[1][0]).toBe(ship);
  expect(gameboard.board[2][0]).toBe(ship);

  // Check that other cells are not affected
  expect(gameboard.board[0][1]).toBe(0);
  expect(gameboard.board[1][1]).toBe(0);
  expect(gameboard.board[3][0]).toBe(0);
});

test("receiveAttack should record a miss", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  gameboard.placeShip(ship, 1, 1, 1, 3);

  // Attack a cell that does not contain a ship
  gameboard.receiveAttack(2, 2);

  // Check that the cell is marked as a miss
  expect(gameboard.board[1][1]).toBe("X");
});
