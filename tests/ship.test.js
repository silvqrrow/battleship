import Ship from "../src/ship";

test("Ship should initialize with correct length and hit count", () => {
  const ship = new Ship(4);
  expect(ship.shipLength).toBe(4);
  expect(ship.hitCount).toBe(0);
  expect(ship.sunk).toBe(false);
});

test("Ship registers hit count", () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.hitCount).toBe(1);
});

test("Ship registers being sunk", () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
