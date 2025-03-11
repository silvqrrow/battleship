import Gameboard from "../src/gameboard";

class Player {
  constructor(type, gameboard = new Gameboard()) {
    this.type = type;
    this.gameboard = gameboard;
  }

  getPlayerGameboard() {
    return this.gameboard;
  }

  getPlayerType() {
    return this.type;
  }
}

export default Player;
