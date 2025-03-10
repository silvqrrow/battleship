import Gameboard from "../src/gameboard";

class Player {
  constructor(type, gameboard = new Gameboard()) {
    this.type = type;
    this.gameboard = gameboard;
  }
}

export default Player;
