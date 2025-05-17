class Ship {
  constructor(shipLength, hitCount = 0) {
    this.shipLength = shipLength;
    this.hitCount = hitCount;
    this.sunk = false;
  }

  hit() {
    this.hitCount += 1;
  }

  isSunk() {
    if (this.hitCount == this.shipLength) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export default Ship;
