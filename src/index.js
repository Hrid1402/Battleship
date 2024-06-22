import("./style.css");
console.log("Working");
const carrierSVG = document.querySelector(".carrierSVG");
const CELLS = document.querySelectorAll(".cell");
console.log(CELLS);
console.log(carrierSVG);

carrierSVG.addEventListener("dragstart", () => {
    carrierSVG.classList.add("dragging");
    const dragginShip = document.querySelector(".dragging");
    setTimeout(() => {
        dragginShip.classList.add('dragging');
        dragginShip.style.pointerEvents = 'none'; // Desactiva los eventos del puntero para el elemento arrastrado
      }, 0);
    //carrierSVG.remove();
});
carrierSVG.addEventListener("dragend", () => {
    carrierSVG.classList.remove("dragging");
    carrierSVG.style.pointerEvents = '';
});
CELLS.forEach((cell) => {
    cell.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragginShip = document.querySelector(".dragging");
        cell.appendChild(dragginShip);
        cell.classList.add("inFront");
    });
    cell.addEventListener("dragleave", () => {
        cell.classList.remove("inFront");
    });
});

class Ship {
  constructor(length) {
    this.length = length;
    this.curHits = 0;
    this.sunk = false;
  }
  hit() {
    this.curHits++;
    console.log("current Hits +1");
  }
  isSunk() {
    if (this.curHits == this.length) {
      this.sunk = true;
      console.log("SUNK");
    }
  }
}
class Gameboard {
  constructor() {
    this.board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }
  receiveAttack(row, column) {
    if (this.board[row][column] == 1) {
      this.board[row][column] = "x";
      console.log("hit");
      console.log(ships[1].curHits);
      ships[1].hit();
      ships[1].isSunk();
    } else {
      console.log("miss");
    }
  }
  addShip(ship, row, column, direction) {
    for (let i = 0; i < ship.length; i++) {
      if (direction == "h") {
        this.board[row][column + i] = 1;
      } else {
        this.board[row + i][column] = 1;
      }
    }
    console.log(this.board);
  }
}
const myGameboard = new Gameboard();
ship1 = new Ship(5); //Carrier
ship2 = new Ship(4); //Battleship
ship3 = new Ship(3); //Cruiser
ship4 = new Ship(3); //Submarine
ship5 = new Ship(2); //Destroyer
let ships = {
    1 : ship1,
    2 : ship2,
    3 : ship3,
    4 : ship4,
    5 : ship5
};
myGameboard.addShip(ships[1], (row = 4), (column = 0), "v");
myGameboard.addShip(new Ship(4), (row = 0), (column = 0), "h");
myGameboard.receiveAttack(0, 0);
//console.log(myGameboard.board);
