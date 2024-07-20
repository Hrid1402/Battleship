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
let curDirection = "v";


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
    curPOS: null,
    prevPOS: null,
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
  console.log(ALL_SHIPS_INF[curShipID]);
  if(ALL_SHIPS_INF[curShipID].direction!=null){
    console.log("----");
    curDirection = ALL_SHIPS_INF[curShipID].direction;
  }else{
    curDirection = "v";
  }
  ALL_SHIPS_INF[curShipID].prevPOS = ALL_SHIPS_INF[curShipID].curPOS;
  if(ALL_SHIPS_INF[curShipID].curPOS!=null){
    ship.classList.add("hidden");
  }
  if(ALL_SHIPS_INF[curShipID].prevPOS!=null){
    CELLS[ALL_SHIPS_INF[curShipID].prevPOS].classList.remove("inFront");
  }
  ship.classList.add("dragging");
  const dragginShip = document.querySelector(".dragging");
    setTimeout(() => {
        dragginShip.classList.add('dragging');
        dragginShip.style.pointerEvents = 'none'; // Desactiva los eventos del puntero para el elemento arrastrado
      }, 0);
}
function dragEnding(ship){
  ship.classList.remove("hidden");
  ship.classList.remove("dragging");
  ship.style.pointerEvents = '';
  if(ALL_SHIPS_INF[curShipID].curPOS!=null){
    CELLS[ALL_SHIPS_INF[curShipID].curPOS].classList.add("inFront");
  }
}

//add event listeners to all ships
carrierSVG.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = 'all';
  curShip = carrierSVG;
  curShipLen = 5;
  curShipID = 1;
  startingDrag(carrierSVG);
  
});
//DRAG EVENT
carrierSVG.addEventListener('drag', (event) => {
  if (event.shiftKey) {
    if(curDirection == "v"){
      curDirection = "h";
    }else{
      curDirection = "v";
    }
    removeHighlight();
    console.log(curDirection);
  }
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
//DRAG EVENT
battleshipSVG.addEventListener('drag', (event) => {
  if (event.shiftKey) {
    if(curDirection == "v"){
      curDirection = "h";
    }else{
      curDirection = "v";
    }
    removeHighlight();
    console.log(curDirection);
  }
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
//DRAG EVENT
cruiserSVG.addEventListener('drag', (event) => {
  if (event.shiftKey) {
    if(curDirection == "v"){
      curDirection = "h";
    }else{
      curDirection = "v";
    }
    removeHighlight();
    console.log(curDirection);
  }
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
//DRAG EVENT
submarineSVG.addEventListener('drag', (event) => {
  if (event.shiftKey) {
    if(curDirection == "v"){
      curDirection = "h";
    }else{
      curDirection = "v";
    }
    removeHighlight();
    console.log(curDirection);
  }
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
//DRAG EVENT
destroyerSVG.addEventListener('drag', (event) => {
  if (event.shiftKey) {
    if(curDirection == "v"){
      curDirection = "h";
    }else{
      curDirection = "v";
    }
    removeHighlight();
    console.log(curDirection);
  }
});
destroyerSVG.addEventListener("dragend", () => {
  dragEnding(destroyerSVG);
});


//add event listeners to cells
function checkIfCanDrop(length, pos, direction){
  console.log("CURRENT DIRECTION: " + direction);
  if(direction == "v"){
    let f = pos;
    for (let i = 0; i < length; i++) {
      if(CELLS[f] != null && (myGameboard.board[Math.floor(f/10)][Math.floor(f%10)] == 0 || myGameboard.board[Math.floor(f/10)][Math.floor(f%10)] == curShipID)){
        f+=10;
      }else{
        return false;
      }
    }
    return true;
  }else{
    if(pos.toString()[pos.toString().length-1] == "9"){
      return false;
    }else{
      for(let i = 0; i < length-1; i++){
        pos++;
        if(CELLS[pos] == null || pos.toString()[pos.toString().length-1]=="0" || (myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != 0 && myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != curShipID)){
          return false;
        }
      }
      return true;
    }
  }
  
}
//
let actualCubes = [];
let errorCubes = [];
let canDrop = true;

function highLightCells(length, pos, direction){
  if(direction == "v"){
    let f = pos;
    for (let i = 0; i < length; i++) {
      actualCubes.push(f);
      CELLS[f].classList.add("colorChange");
      f+=10;
    }
  }else{
    for (let i = 0; i < length; i++) {
      actualCubes.push(pos);
      CELLS[pos].classList.add("colorChange");
      pos++;
    }
  }
}
function highErrorCells(pos, direction){
  if(direction == "v"){
    let i=pos;
    while(CELLS[i] != null && myGameboard.board[Math.floor(i/10)][Math.floor(i%10)] == 0){
      errorCubes.push(i);
      CELLS[i].classList.add("outRange");
      i+=10;
    }
  }else{
    let i = pos;
    while(CELLS[i] != null && i.toString()[i.toString().length-1]!="0" && (myGameboard.board[Math.floor(i/10)][Math.floor(i%10)] == 0) || myGameboard.board[Math.floor(i/10)][Math.floor(i%10)] == curShipID){
      errorCubes.push(i);
      CELLS[i].classList.add("outRange");
      i++;
    }
  }
}

for(let i = 0; i < CELLS.length; i++) {
  CELLS[i].addEventListener("dragover", (e) => {
    e.preventDefault();
    canDrop = true;
    let f = i;
    actualCubes = [];
    if(checkIfCanDrop(curShipLen, i, curDirection)){
      highLightCells(curShipLen, i, curDirection);
      canDrop = true;
    }else{
      //Highlight the cells that are out of range
      canDrop = false;
      errorCubes = [];
      highErrorCells(i, curDirection);
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
      myGameboard.addShip(ships[curShipID], row = Math.floor(i/10), column = Math.floor(i%10), curDirection, curShipID);
      CELLS[i].classList.add("inFront");
      if(ALL_SHIPS_INF[curShipID].id != null){
        myGameboard.addShip(ALL_SHIPS_INF[curShipID].ship, ALL_SHIPS_INF[curShipID].row, ALL_SHIPS_INF[curShipID].column, ALL_SHIPS_INF[curShipID].direction, 0);
      }
      ALL_SHIPS_INF[curShipID] = {
        ship: ships[curShipID],
        row: Math.floor(i/10),
        column: Math.floor(i%10),
        direction: curDirection,
        id: curShipID
      }
      ALL_SHIPS_INF[curShipID].curPOS = i;
      CELLS[i].classList.add("inFront");
      if(curDirection=="h"){
        CELLS[i].classList.add("rotate");
      }else{
        CELLS[i].classList.remove("rotate");
      }
      CELLS[i].appendChild(curShip);
      curShip.classList.remove("hidden");
      removeHighlight();
    }else{
      removeErrorHighlight();
    }
  });
}