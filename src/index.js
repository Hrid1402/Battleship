import("./style.css");
console.log("Working");
const carrierSVG = document.querySelector(".carrierSVG");
const battleshipSVG = document.querySelector(".battleshipSVG");
const cruiserSVG = document.querySelector(".cruiserSVG");
const submarineSVG = document.querySelector(".submarineSVG");
const destroyerSVG = document.querySelector(".destroyerSVG");
let curShip = carrierSVG;
let curShipID = 1;
let curShipLen = 5;


let curFront = null;
let prevID = null;

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
  addShip(ship, row, column, direction, id) {
    for (let i = 0; i < ship.length; i++) {
      if (direction == "h") {
        this.board[row][column + i] = id;
      } else {
        this.board[row + i][column] = id;
      }
    }
    console.log(this.board);
  }
}
const myGameboard = new Gameboard();

//myGameboard.addShip(ships[1], (row = 4), (column = 0), "v");
//myGameboard.addShip(new Ship(4), (row = 0), (column = 0), "h");
myGameboard.receiveAttack(0, 0);
//console.log(myGameboard.board);


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

let ALL_SHIPS_INF = {
  1 : {
    ship: null,
    row: null,
    column: null,
    direction: null,
    id: null
  },
  2 : {
    ship: null,
    row: null,
    column: null,
    direction: null,
    id: null
  },
  3 : {
    ship: null,
    row: null,
    column: null,
    direction: null,
    id: null
  },
  4 : {
    ship: null,
    row: null,
    column: null,
    direction: null,
    id: null
  },
  5 : {
    ship: null,
    row: null,
    column: null,
    direction: null,
    id: null
  }
}

const CELLS = document.querySelectorAll(".cell");

function startingDrag(ship){
  ship.classList.add("dragging");
  
  if(curFront != null){
    //CELLS[curFront].removeChild(ship);
    
    if(curShipID == prevID){
      CELLS[curFront].classList.remove("inFront");
    }
  }
  const dragginShip = document.querySelector(".dragging");
    setTimeout(() => {
        dragginShip.classList.add('dragging');
        dragginShip.style.pointerEvents = 'none'; // Desactiva los eventos del puntero para el elemento arrastrado
      }, 0);
}
function dragEnding(ship){
  ship.classList.remove("dragging");
  ship.style.pointerEvents = '';
}
//add event listeners to all ships
carrierSVG.addEventListener("dragstart", () => {
  curShip = carrierSVG;
  curShipLen = 5;
  curShipID = 1;
  startingDrag(carrierSVG);
});
carrierSVG.addEventListener("dragend", () => {
  dragEnding(carrierSVG);
});


battleshipSVG.addEventListener("dragstart", () => {
  curShip = battleshipSVG;
  curShipLen = 4;
  curShipID = 2;
  startingDrag(battleshipSVG);
});
battleshipSVG.addEventListener("dragend", () => {
  dragEnding(battleshipSVG);
});


cruiserSVG.addEventListener("dragstart", () => {
  curShip = cruiserSVG;
  curShipLen = 3;
  curShipID = 3;
  startingDrag(cruiserSVG);
});
cruiserSVG.addEventListener("dragend", () => {  
  dragEnding(cruiserSVG);
});


submarineSVG.addEventListener("dragstart", () => {
  curShip = submarineSVG;
  curShipLen = 3;
  curShipID = 4;
  startingDrag(submarineSVG);
});
submarineSVG.addEventListener("dragend", () => {
  dragEnding(submarineSVG);
});


destroyerSVG.addEventListener("dragstart", () => {
  curShip = destroyerSVG;
  curShipLen = 2;
  curShipID = 5;
  startingDrag(destroyerSVG);
});
destroyerSVG.addEventListener("dragend", () => {
  dragEnding(destroyerSVG);
});


//add event listeners to cells
function checkIfCanDrop(length, pos){
  let f = pos;
  for (let i = 0; i < length; i++) {
    if(CELLS[f] != null && myGameboard.board[Math.floor(f/10)][Math.floor(f%10)] == 0){
      f+=10;
    }else{
      return false;
    }
  }
  return true;
}
//
let actualCubes = [];
let errorCubes = [];
let canDrop = true;
function highLightCells(length, pos){
  let f = pos;
  for (let i = 0; i < length; i++) {
    actualCubes.push(f);
    CELLS[f].classList.add("colorChange");
    f+=10;
  }
}
for(let i = 0; i < CELLS.length; i++) {
  CELLS[i].addEventListener("dragover", (e) => {
    e.preventDefault();
    canDrop = true;
    let f = i;
    actualCubes = [];
    console.log(checkIfCanDrop(curShipLen, i));
    if(checkIfCanDrop(curShipLen, i)){
      highLightCells(curShipLen, i);
      canDrop = true;
    }else{
      //Highlight the cells that are out of range
      canDrop = false;
      errorCubes = [];
      let k=i;
      while(CELLS[k] != null && myGameboard.board[Math.floor(k/10)][Math.floor(k%10)] == 0){
        errorCubes.push(k);
        CELLS[k].classList.add("outRange");
        k+=10;
      }

    }
  });

  //Remove the highlight
  function removeHighlight(){
    for(let i = 0; i < actualCubes.length; i++){
      CELLS[actualCubes[i]].classList.remove("colorChange");
    }
  }

  function removeErrorHighlight(){
    for(let i = 0; i < errorCubes.length; i++){
      CELLS[errorCubes[i]].classList.remove("outRange");
    }
  }
//Remove the highlight when the mouse leaves the cell
  CELLS[i].addEventListener("dragleave", () => {
    removeHighlight();
    removeErrorHighlight();
  });
  
  CELLS[i].addEventListener("drop", () => {
    if(canDrop == true){
      myGameboard.addShip(ships[curShipID], row = Math.floor(i/10), column = Math.floor(i%10), "v", curShipID);
      CELLS[i].classList.add("inFront");
      curFront = i;
      if(ALL_SHIPS_INF[curShipID].id != null){
        myGameboard.addShip(ALL_SHIPS_INF[curShipID].ship, ALL_SHIPS_INF[curShipID].row, ALL_SHIPS_INF[curShipID].column, ALL_SHIPS_INF[curShipID].direction, 0);
      }
      ALL_SHIPS_INF[curShipID] = {
        ship: ships[curShipID],
        row: Math.floor(i/10),
        column: Math.floor(i%10),
        direction: "v",
        id: curShipID
      }
      prevID = curShipID;

      CELLS[i].appendChild(curShip);
      removeHighlight();
    }else{
      removeErrorHighlight();
    }
  });
}