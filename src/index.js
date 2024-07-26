import("./style.css");
import("./mainboard.css");
const { addBoards, getCpuCells, getCpuSHIPS, getCpuICONS, getPlayerCELLS, getPlayerICONS} = require("./DOM.js");

console.log("Working");
const carrierSVG = document.querySelector(".carrierSVG");
const battleshipSVG = document.querySelector(".battleshipSVG");
const cruiserSVG = document.querySelector(".cruiserSVG");
const submarineSVG = document.querySelector(".submarineSVG");
const destroyerSVG = document.querySelector(".destroyerSVG");

const dragShipsMenu = document.querySelector("#dragShipsMenu");
const resetBTN = document.querySelector(".reset");
const readyBTN = document.querySelector(".ready");

const dialog = document.querySelector("#WINdialog");

const restartBTN = document.querySelector("#restartBTN");
let victoryText = document.querySelector("#victoryText"); 

restartBTN.addEventListener("click", () => {
  location.reload();
});

let curShip = carrierSVG;
let curShipID = 1;
let curShipLen = 5;
let curDirection = "v";
const TOGGLE_INTERVAL = 340; // Interval in milliseconds

//TURNS
let curTurn = "player";

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


let ships = {
  1 : new Ship(5), //Carrier,
  2 : new Ship(4), //Battleship,
  3 : new Ship(3), //Destroyer
  4 : new Ship(3), //Submarine,
  5 : new Ship(2), //Destroyer
};
let enemy_ships = {
  1 : new Ship(5), //Carrier,
  2 : new Ship(4), //Battleship,
  3 : new Ship(3), //Destroyer
  4 : new Ship(3), //Submarine,
  5 : new Ship(2), //Destroyer
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
    curPOS: null,
    prevPOS: null,
    id: null
  },
  3 : {
    ship: null,
    row: null,
    column: null,
    direction: null,
    curPOS: null,
    prevPOS: null,
    id: null
  },
  4 : {
    ship: null,
    row: null,
    column: null,
    direction: null,
    curPOS: null,
    prevPOS: null,
    id: null
  },
  5 : {
    ship: null,
    row: null,
    column: null,
    direction: null,
    curPOS: null,
    prevPOS: null,
    id: null
  }
}

const CELLS = document.querySelectorAll(".cell");
//RESET
function resetShips(){
  console.log("RESET");
  const shipBlocks = document.querySelectorAll(".shipBLOCK");
  shipBlocks[0].appendChild(carrierSVG); 
  shipBlocks[1].appendChild(battleshipSVG);
  shipBlocks[2].appendChild(cruiserSVG);
  shipBlocks[3].appendChild(submarineSVG);
  shipBlocks[4].appendChild(destroyerSVG);
  for(let i = 0; i < CELLS.length; i++){
    CELLS[i].classList.remove("inFront");
    CELLS[i].classList.remove("rotate");
    CELLS[i].classList.remove("colorChange");
    CELLS[i].classList.remove("outRange");
    CELLS[i].innerHTML = "";
  }
  ALL_SHIPS_INF = {
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
      curPOS: null,
      prevPOS: null,
      id: null
    },
    3 : {
      ship: null,
      row: null,
      column: null,
      direction: null,
      curPOS: null,
      prevPOS: null,
      id: null
    },
    4 : {
      ship: null,
      row: null,
      column: null,
      direction: null,
      curPOS: null,
      prevPOS: null,
      id: null
    },
    5 : {
      ship: null,
      row: null,
      column: null,
      direction: null,
      curPOS: null,
      prevPOS: null,
      id: null
    }
  }
  myGameboard.board  = [
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
  console.log(myGameboard.board);

}
resetBTN.addEventListener("click", resetShips);

function checkShipsOnBoard(){
  for(let i = 1; i < 6; i++){
    if(ALL_SHIPS_INF[i].curPOS == null){
      return false;
    }
  }
  return true;
}
//ENEMYY
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function canPlaceEnemyShip(board, len, axis, x, y){
  for (let i = 0; i < len; i++) {
    if (axis == 1) {
      //vertical
      if((y+i) > 9 || board[x][y + i] == null || board[x][y + i] != 0){
        return false;
      } 
    }else if((x+i) > 9 || board[x + i][y] == null || board[x + i][y] != 0){
      return false;
    }
  }
  return true;
};
function addEnemyShip(board, len, axis, x, y, shipID){
  for (let i = 0; i < len; i++) {
    if (axis == 1) {
      //vertical
      board[x][y + i] = shipID;
    } else {
      board[x + i][y] = shipID;
    }
  }
};
function addRandomeEnemyShips(board, len, id){
  let x = getRandomInt(0,9);
  let y = getRandomInt(0,9);
  let axis = getRandomInt(0,1); // y=1 x=0
  while(!canPlaceEnemyShip(board, 5, axis, x, y)){
    x = getRandomInt(0,9);
    y = getRandomInt(0,9);
    axis = getRandomInt(0,1);
  }
  enemyInfo[id].curPOS = ((x*10)+y);
  enemyInfo[id].direction = (axis == 1) ? "h" : "v";
  addEnemyShip(board, len, axis, x, y, id);
}
let enemyInfo = {
  1 : {
    curPOS : null,
    direction : null
  },
  2 : {
    curPOS : null,
    direction : null
  },
  3 : {
    curPOS : null,
    direction : null
  },
  4 : {
    curPOS : null,
    direction : null
  },
  5 : {
    curPOS : null,
    direction : null
  }
};
function placeEnemyShips(){
  let board = [
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
  addRandomeEnemyShips(board, 5, 1); //adding carrier
  addRandomeEnemyShips(board, 4, 2); //adding battleship
  addRandomeEnemyShips(board, 3, 3); //adding cruiser
  addRandomeEnemyShips(board, 3, 4); //adding submarine
  addRandomeEnemyShips(board, 2, 5); //adding destroyer
  return board;
};




class Player {
  constructor(myBoard, ships) {
    this.board = myBoard;
    this.remainingShips = 5;
    this.shipsData = ships;
  }
  receiveAttack(row, column) {
    if (this.board[row][column] != 0 && this.board[row][column] != "x") {
      let id = this.board[row][column];
      console.log(this.board[row][column]);
      this.board[row][column] = "x";
      console.log("hit");
      console.log("id:" + id);
      console.log(this.shipsData[id].curHits);
      this.shipsData[id].hit();
      this.shipsData[id].isSunk();
      return {hit: true, sunked: this.shipsData[id].sunk, id: id};
    } else {
      console.log("miss");
      return {hit: false, sunked: false, id: null};
    }
  }
}

function getAvaiableCells(row, column){
  let left = column-1;
  let right = column+1;
  let up = row-1;
  let down = row+1;

  let attacksAvaiables = [];

  if(left >= 0 && avaiable.includes((row*10)+left)){      //try left
    console.log("left able");
    attacksAvaiables.push({"x":row, "y":left, "dir": "left"});  
  }
  if(right <= 9 && avaiable.includes((row*10)+right)){ //try right
    console.log("right able");
    attacksAvaiables.push({"x":row, "y":right , "dir": "right"});
  }
  if(up >= 0 && avaiable.includes((up*10)+column)){ //try up
    console.log("up able");
    attacksAvaiables.push({"x":up, "y":column , "dir": "up"});
  }  
  if(down <= 9 && avaiable.includes((down*10)+column)){ //try down
    console.log("down able");
    attacksAvaiables.push({"x":down, "y":column , "dir": "down"});
  }
  return attacksAvaiables;
}
function getRandomAvaibleAttack(){
  const randomIndex = getRandomInt(0, avaiableCells.length-1);
  let randomCell = avaiableCells[randomIndex];
  avaiableCells.splice(randomIndex,1);
  console.log("SELECTED: " + randomCell.x + " " + randomCell.y);
  console.log(avaiableCells);
  return randomCell;
}

console.log("ENEMY BOARD:");
let enemyBoard = placeEnemyShips();
console.log(enemyBoard);

let realPlayer = new Player(myGameboard.board, ships);

let cpuPlayer = new Player(enemyBoard, enemy_ships);
let avaiable  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

let nextAtack = null;

//CPU
let playerCELLS = getPlayerCELLS();
let curAttackedShip = null;
let avaiableCells = [];

function cpuPlayTurn(){
  let randomPos = null;
  let row = null;
  let column = null;
  
  if(curAttackedShip == null){
    if(nextAtack != null){
      row = nextAtack.x;
      column = nextAtack.y;
      let value = ((row*10)+column);
      randomPos = avaiable.indexOf(value);
    }else{
      randomPos = getRandomInt(0, avaiable.length-1);
      let randomPosValue = avaiable[randomPos];
      //row = Math.floor(i/10), column = Math.floor(i%10)
      row = Math.floor(randomPosValue / 10);
      column = Math.floor(randomPosValue % 10);
    }
    console.log("-------------------------------------------------")
    const playerAttackData = realPlayer.receiveAttack(row, column);
    
    avaiable.splice(randomPos, 1);
    //CHECK
    if(playerAttackData.hit){
      //HIT
      playerCELLS[((row*10)+column)].classList.add("fire");
      if(curAttackedShip == null){
        curAttackedShip = {row : row, column : column};
      }
      if(playerAttackData.sunked){
        //To read
        curAttackedShip = null;
        let icons = getPlayerICONS();
        console.log(icons);
        icons[playerAttackData.id].classList.add("sunkedICON");
        realPlayer.remainingShips--;
        if(realPlayer.remainingShips == 0){
          console.log("ENEMY WINS!");
          victoryText.textContent = "Enemy won!";
          dialog.showModal();
        }
        nextAtack = null;
      }else{
        //-------------------------
        console.log("planning...");
        console.log("x: " + row + " y: " + column);
        avaiableCells = getAvaiableCells(curAttackedShip.row, curAttackedShip.column) //get avaiable cells
        
      }
    //NOT HIT
    }else{
      playerCELLS[((row*10)+column)].classList.add("clicked");
      nextAtack = null;
    }
  }else{

    const attack = getRandomAvaibleAttack();
    const attackData = realPlayer.receiveAttack(attack.x, attack.y);
    if(attackData.hit){
      playerCELLS[((attack.x*10)+attack.y)].classList.add("fire");
      console.log("WORKED");
    }else{
      playerCELLS[((attack.x*10)+attack.y)].classList.add("clicked");
      console.log("NOT WORKED");
    }










    if(avaiableCells.length == 0){
      console.log("last try");
      curAttackedShip = null;
    }
    
    
  }
  curTurn = "player";
}

function ready(){
  if(checkShipsOnBoard()){
    console.log("READY");
    console.log("FINAL BOARD:");
    console.log(myGameboard.board);
    console.log(ALL_SHIPS_INF);
    dragShipsMenu.remove();
    addBoards(ALL_SHIPS_INF, enemyInfo);
    let CPU_cells = getCpuCells();
    for(let i = 0; i < CPU_cells.length; i++){
      CPU_cells[i].addEventListener("click", () =>{
        //
        if(curTurn=="player"){
          let x = Math.floor(i / 10);
          let y = i % 10;
          const CPUattackData = cpuPlayer.receiveAttack(x, y);
          if(CPUattackData.hit){
            CPU_cells[i].classList.add("fire");
            if(CPUattackData.sunked){
              let cpuSHIPS = getCpuSHIPS();
              let cpuICONS = getCpuICONS();
              cpuSHIPS[CPUattackData.id].classList.remove("hiddenSHIP");
              cpuSHIPS[CPUattackData.id].classList.add("sunked");
              cpuSHIPS[CPUattackData.id].classList.add("inFront");

              cpuICONS[CPUattackData.id].classList.add("sunkedICON");
              cpuPlayer.remainingShips--;
              if(cpuPlayer.remainingShips == 0){
                console.log("YOU WIN");
                victoryText.textContent = "You won!";
                dialog.showModal();
              }
            }
            
          }else{
            CPU_cells[i].classList.add("clicked");
          }
          curTurn = "cpu";
          //CPU TURN
          cpuPlayTurn();
        }
        //
      });
    }
  }else{
    console.log("NOT READY");
  }
  
}
readyBTN.addEventListener("click", ready);


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
let carrierLastToggleTime = 0;
carrierSVG.addEventListener('drag', (event) => {
  const currentTime = Date.now();
  if (event.shiftKey && currentTime - carrierLastToggleTime > TOGGLE_INTERVAL) {
    carrierLastToggleTime = currentTime;
    if (curDirection == "v") {
      curDirection = "h";
    } else {
      curDirection = "v";
    }
    removeHighlight();
    removeErrorHighlight();
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
let battleshipLastToggleTime = 0;
battleshipSVG.addEventListener('drag', (event) => {
  const currentTime = Date.now();
  if (event.shiftKey && currentTime - battleshipLastToggleTime > TOGGLE_INTERVAL) {
    battleshipLastToggleTime = currentTime;
    if (curDirection == "v") {
      curDirection = "h";
    } else {
      curDirection = "v";
    }
    removeHighlight();
    removeErrorHighlight();
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
let cruiserLastToggleTime = 0;
cruiserSVG.addEventListener('drag', (event) => {
  const currentTime = Date.now();
  if (event.shiftKey && currentTime - cruiserLastToggleTime > TOGGLE_INTERVAL) {
    cruiserLastToggleTime = currentTime;
    if (curDirection == "v") {
      curDirection = "h";
    } else {
      curDirection = "v";
    }
    removeHighlight();
    removeErrorHighlight();
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
let SubMarineLastToggleTime = 0;
submarineSVG.addEventListener('drag', (event) => {
  const currentTime = Date.now();
  if (event.shiftKey && currentTime - SubMarineLastToggleTime > TOGGLE_INTERVAL) {
    SubMarineLastToggleTime = currentTime;
    if (curDirection == "v") {
      curDirection = "h";
    } else {
      curDirection = "v";
    }
    removeHighlight();
    removeErrorHighlight();
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
let destroyerLastToggleTime = 0;
destroyerSVG.addEventListener('drag', (event) => {
  const currentTime = Date.now();
  if (event.shiftKey && currentTime - destroyerLastToggleTime > TOGGLE_INTERVAL) {
    destroyerLastToggleTime = currentTime;
    if (curDirection == "v") {
      curDirection = "h";
    } else {
      curDirection = "v";
    }
    removeHighlight();
    removeErrorHighlight();
  }
});
destroyerSVG.addEventListener("dragend", () => {
  dragEnding(destroyerSVG);
});


//add event listeners to cells
function checkIfCanDrop(length, pos, direction){
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
    if(pos + length > 100){
      return false;
    }
    if(myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != 0 && myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != curShipID){
      return false;
    }
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
    let column = Math.floor(i%10);
    let row = Math.floor(i/10);
    while(CELLS[i] != null && i.toString()[i.toString().length-1]!="0" && (myGameboard.board[row][column] == 0 || myGameboard.board[column][row] == curShipID)){
        errorCubes.push(i);
        CELLS[i].classList.add("outRange");
        i++;
        column = Math.floor(i%10);
        row = Math.floor(i/10);
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
      if(ALL_SHIPS_INF[curShipID].id != null){
        myGameboard.addShip(ALL_SHIPS_INF[curShipID].ship, ALL_SHIPS_INF[curShipID].row, ALL_SHIPS_INF[curShipID].column, ALL_SHIPS_INF[curShipID].direction, 0);
      }
      myGameboard.addShip(ships[curShipID], row = Math.floor(i/10), column = Math.floor(i%10), curDirection, curShipID);
      CELLS[i].classList.add("inFront");
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
//