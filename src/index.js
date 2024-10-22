import("./style.css");
import("./mainboard.css");
const { addBoards, getCpuCells, getCpuSHIPS, getCpuICONS, getPlayerCELLS, getPlayerICONS, getPlayerAndCpuText} = require("./DOM.js");

//sound
const exp1 = require('./imgs/Explotion1.mp3');
const exp2 = require('./imgs/Explotion2.mp3');
const exp3 = require('./imgs/Explotion3.mp3');
const exp4 = require('./imgs/Explotion4.mp3');
let gameover = false;

const explotion1 = new Audio(exp1);
const explotion2 = new Audio(exp2);
const explotion3 = new Audio(exp3);
const explotion4 = new Audio(exp4);

const explosions = [explotion1, explotion2, explotion3, explotion4];

function playRandomExplotion() {
  // Stop all currently playing explosions
  explosions.forEach(explosion => {
    if (!explosion.paused) {
      explosion.pause();
      explosion.currentTime = 0;
    }
  });

  // Play a random explosion
  const random = Math.floor(Math.random() * 4);
  explosions[random].play().catch(e => console.error("Error playing audio:", e));
}

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
      this.board[row][column] = "x";
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
    attacksAvaiables.push({"x":row, "y":left, "dir": "left"});  
  }
  if(right <= 9 && avaiable.includes((row*10)+right)){ //try right
    attacksAvaiables.push({"x":row, "y":right , "dir": "right"});
  }
  if(up >= 0 && avaiable.includes((up*10)+column)){ //try up
    attacksAvaiables.push({"x":up, "y":column , "dir": "up"});
  }  
  if(down <= 9 && avaiable.includes((down*10)+column)){ //try down
    attacksAvaiables.push({"x":down, "y":column , "dir": "down"});
  }
  return attacksAvaiables;
}
function getRandomAvaibleAttack(){
  const randomIndex = getRandomInt(0, avaiableCells.length-1);
  let randomCell = avaiableCells[randomIndex];
  avaiableCells.splice(randomIndex,1);
  return randomCell;
}
//TEXT STUFF
let CommandsText = null;
let UserCommandText = null;
let cpuCommandText = null;


function pickRandomText(textArray){
  const randomIndex = getRandomInt(0, textArray.length-1);
  return textArray[randomIndex];
}

function writeText(textArray, textElement){
  textElement.classList.remove("runWriting");
  textElement.textContent = '';

  // Force a reflow
  void textElement.offsetWidth;

  // Set the new text
  const newText = pickRandomText(textArray);
  textElement.textContent = newText;

  // Add the class to trigger the animation
  textElement.classList.add("runWriting");
}
//PLAYER
const playerHitWater = [
  "OOPS! WE'RE FEEDING THE FISH, CAPTAIN!",
  "JUST A SPLASH, CAPTAIN! TRY AGAIN!",
  "AIM BETTER, CAPTAIN! WE'RE NOT FISHING!",
  "WATER HIT! LET'S FIND THOSE SHIPS, CAPTAIN!",
  "CAPTAIN, WE'RE MAKING WAVES BUT NO HITS!",
  "MISSED, CAPTAIN! ADJUST OUR AIM!",
  "MISS! THE SEA’S GOT A NEW FRIEND!",
  "WET WORK, CAPTAIN! BUT NO SHIP IN SIGHT!",
  "IT'S A WATER PARTY, BUT WHERE'S THE ENEMY?",
  "SPLASHDOWN, CAPTAIN! ADJUST OUR TARGET!",
  "WATER HIT! WE’RE NOT AQUA NAVIGATORS!",
  "CAPTAIN, WE’RE GETTING THE OCEAN WET!",
  "A SPLASH! THE SHIP'S NOT IN THE WATER!",
  "MISS AGAIN! TIME TO DRAIN THE SEA, CAPTAIN!",
  "HIT THE WATER, CAPTAIN! BUT NOT THE ENEMY!",
  "SPLASH! OUR TARGET’S NOT FLOATING!",
  "WATER HIT! EVEN THE FISH ARE SAD!",
  "MISS! OUR AIM IS ON VACATION!",
  "SPLASH! WE'RE JUST MAKING WAVES!",
  "OOPS! THE SEA’S NOT IMPRESSED!",
  "DISAPPOINTING HIT, CAPTAIN!",
  "HIT WATER AGAIN! SAD FACE!",
  "MISS! THE SEA’S SHAKING ITS HEAD!",
  "SPLASHDOWN! TRY AGAIN, CAPTAIN!",
  "OUR AIM’S ALL WET, CAPTAIN!",
  "WATER HIT! THE SEA’S LAUGHING!"
]
const playerHitShip = [
  "EXCELLENT SHOT! LET'S FINISH THEM OFF!",
  "WELL DONE, CAPTAIN! KEEP THE HITS COMING!",
  "HIT! THE ENEMY SHIP IS SHAKING!",
  "NAILED IT! THEY’RE TAKING DAMAGE!",
  "HIT, THE ENEMY’S FEELING THE PAIN!",
  "SPOT ON! THE ENEMY’S IN BIG TROUBLE!",
  "BULLSEYE! DIDN’T SEE THAT COMING?",
  "HIT!, YOUR SHIP’S A EASY TARGET!",
  "HIT! YOUR SHIP’S A FLOATING TARGET PRACTICE!",
  "EASY, DIDN’T EVEN HAVE TO AIM!",
  "OH SORRY, WAS THAT YOUR SHIP?",
  "WHOOPS! DIDN’T KNOW YOUR SHIP WAS THERE!",
  "NICE HIT! KEEP IT UP!",
  "GREAT SHOT! PRESS ON!",
  "WELL DONE! STAY SHARP!",
  "EXCELLENT! KEEP PUSHING!",
  "FANTASTIC! MORE LIKE THIS!",
  "SUPERB HIT! DON’T RELAX!",
  "AMAZING! LET’S KEEP GOING!",
  "BULLSEYE! STAY ON TRACK!",
  "OUTSTANDING! MAINTAIN THE PRESSURE!",
  "BRILLIANT HIT! STAY FOCUSED!"
]
const playerSunkShip = [
  "SHIP SUNK! GREAT JOB, CAPTAIN!",
  "ENEMY DESTROYED! VICTORY IS OURS!",
  "DIRECT HIT! ONE LESS SHIP TO WORRY ABOUT!",
  "SUNK! THE ENEMY’S DOWN FOR THE COUNT!",
  "SHIP GONE! OUTSTANDING WORK, CAPTAIN!",
  "ENEMY VANQUISHED! ON TO THE NEXT!",
  "TOTAL DESTRUCTION! KEEP IT UP!",
  "TARGET DOWN! THE SEA’S OURS!",
  "SHIP ANNIHILATED! AWESOME JOB!",
  "ENEMY SHIP SINKING! CELEBRATE THIS VICTORY!",
  "SUNK! WAS THAT SHIP JUST FOR SHOW?",
  "GONE! HOPE YOU WEREN’T ATTACHED TO IT!",
  "BOOM! YOUR SHIP DIDN’T STAND A CHANCE!",
  "DESTROYED! WAS THAT A DECORATION?",
  "SHIP ANNIHILATED! DIDN’T EVEN BREAK A SWEAT!",
  "OOPS, DID I BREAK YOUR TOY SHIP?",
  "SUNK! HOPE YOU HAVE A GOOD REPAIR PLAN!",
  "TOTAL WRECK! WAS YOUR SHIP MADE OF PAPER?",
  "GONE! DIDN’T REALIZE IT WAS SO EASY!",
  "SINKING! YOUR SHIP WAS A FLOATING TARGET!"
];
const playerVictory = [
  "VICTORY! WELL DONE, CAPTAIN!",
  "WE WON! GREAT JOB!",
  "TRIUMPHANT! VICTORY IS OURS!",
  "SUCCESS! CELEBRATE THIS WIN!",
  "VICTORY ACHIEVED! AWESOME WORK!"
]
const playerEnemymiss = [
  "MISS! WE'RE STILL IN CONTROL!",
  "THEY MISSED! KEEP UP THE PRESSURE!",
  "ENEMY’S OFF TARGET! WE’VE GOT THIS!",
  "MISS! THEY’RE STRUGGLING!",
  "THEY MISSED AGAIN! STAY FOCUSED!",
  "ENEMY MISSED! DID THEY FORGET TO AIM?",
  "MISS! EVEN THE SEA’S LAUGHING!",
  "THEY MISSED! WERE THEY BLINDFOLDING?",
  "OOPS! THEIR AIM’S IN ANOTHER ZIP CODE!",
  "MISS! THEY’RE MORE OFF TARGET THAN EVER!",
  "ENEMY MISSED! DID THEY FORGET THEIR GLASSES?",
  "MISS! THE SEA’S GAINING CONFIDENCE!",
  "THEY’RE MISSING! MAYBE THEY’RE PLAYING DARTS!",
  "MISS! ARE THEY AIMING FOR THE MOON?",
  "ENEMY’S SHOT MISSED! EVEN THE OCEAN’S GIGGLING!",
  "ENEMY MISSED! DID THEY DROP THE GPS?",
  "MISS! MAYBE THEY’RE AIMING FOR A UFO?",
  "THEY MISSED! ARE THEY TRYING TO SHOOT THE SUN?",
  "OOPS! THEY’RE THROWING WATERBALLS NOW!",
  "ENEMY’S SHOT WENT TO THE OCEAN FLOOR!",
  "ENEMY MISSED AGAIN. YAWN, BORING!",
  "MISS! THIS IS GETTING OLD FAST.",
  "THEY MISSED! WE'RE SO BORED OF THIS.",
  "ANOTHER MISS. DO THEY EVER HIT ANYTHING?",
  "ENEMY’S SHOT WENT WIDE. HO-HUM, NEXT!"
];
const playerEnemyHitOurShip = [
  "OUCH! THEY GOT US. LET’S BOUNCE BACK!",
  "HIT! THEY’RE GETTING CLOSER. STAY ALERT!",
  "WE’RE HIT! TIME TO REACT AND STRIKE BACK!",
  "GOT US! BUT WE’LL TURN THIS AROUND!",
  "THEY HIT US! LET’S REGROUP AND PUSH ON!",
  "OUCH! THEY GOT US. WE'LL RECOVER!",
  "HIT! TIME TO RETHINK OUR STRATEGY!",
  "THEY HIT US! LET’S SHAKE IT OFF AND FIGHT!",
  "GOT US GOOD! LET’S SHOW THEM OUR RESILIENCE!",
  "WE’RE HIT! STAY FOCUSED AND STRIKE BACK!",
  "HIT! NO TIME TO PANIC, LET'S COUNTERATTACK!",
  "ENEMY’S SHOT LANDED! TIME TO REGAIN CONTROL!",
  "WE TOOK A HIT! TIME TO TURN THE TIDE!",
  "OUCH! THEY’RE HITTING HARD, LET’S PUSH BACK!",
  "THEY GOT US! STAY STRONG AND FIGHT ON!",
  "HIT! OUR SHIP’S SHAKING, BUT WE’RE STILL IN IT!",
  "THEY GOT US! LET’S MAKE THIS AN EPIC COMEBACK!",
  "HIT! THIS IS GONNA HURT, CAPTAIN.",
  "OUCH! WE'RE TAKING DAMAGE, BUT WE'LL RECOVER.",
  "GOT US GOOD. LET'S TRY TO STAY IN THE FIGHT.",
  "HIT! NOT THE NEWS WE WANTED.",
  "THEY STRUCK US. HOPE WE CAN TURN THIS AROUND.",
  "WE’RE HIT. THIS ISN’T THE BEST DAY.",
  "OUCH! WE’RE TAKING A BEATING HERE.",
  "THEY HIT US. LET'S TRY TO STAY STRONG.",
  "HIT! THIS ISN’T GOING AS PLANNED.",
  "GOT US! WE’RE IN A TOUGH SPOT."
];
const playerShipIsSunk = [
  "OUR SHIP’S GONE! THANKS FOR THE SWIM!",
  "DESTROYED! OUR SHIP’S ON VACATION DEEP DOWN!",
  "GONE! ENEMY TURNED OUR SHIP INTO REEF!",
  "SHIP DOWN! WE’RE FLOATING, ENEMY’S WINNING!",
  "DESTROYED! OUR SHIP’S NOW A SUBMARINE!",
  "OUR SHIP’S GONE! ENEMY’S NOW A DIVING EXPERT!",
  "SHIP ANNIHILATED! WE’RE FLOATING AROUND!",
  "GONE! ENEMY MADE OUR SHIP A DEEP SEA ART!",
  "DESTROYED! OUR SHIP’S A FLOATING MEMORIAL!",
  "SHIP TAKEN OUT! WE’RE ALL ABOUT LIFE RAFTS NOW!",
  "DESTROYED! WE’RE FLOATING NOW!",
  "GONE! WE’LL HAVE TO REBUILD OR START FISHING!",
  "GONE! OUR SHIP’S BEEN TAKEN OUT.",
  "SHIP TAKEN OUT! WE’LL FIGHT ANOTHER DAY.",
  "SHIP ANNIHILATED! LET’S PLAN OUR NEXT MOVE."
];
//ENEMY-------------------------------
const enemyWhenPlayerMiss = [
  "WHOOPS! DID YOU AIM FOR A WATERFALL?",
  "HA HA! NICE SPLASH, DID YOU MISS?",
  "YIKES! WAS THAT A FISHING ATTEMPT?",
  "OOPS! DID YOU JUST CREATE A WATER PARK?",
  "OH NO! YOUR SHOT WENT FOR A SWIM!",
  "GOLLY! WAS THAT A WATER FEATURE?",
  "BOO! DID YOUR SHOT TAKE A DIVE?",
  "WHOOPS! YOUR AIM'S ALL SPLASHY!",
  "YEAH! NICE WATER HOLE, TRY AGAIN!",
  "OH DEAR! IS THAT A WATER PARTY?",
  "OUCH! DID YOU JUST SPLASH THE OCEAN?",
  "HA HA! YOUR SHOT’S A BIG WATER EXPLOSION!",
  "YIKES! WAS THAT A WATER ATTACK?",
  "WHOOPS! NICE SPLASH, DID YOU MISS ME?",
  "OH BOY! YOUR SHOT MADE A WATER FEATURE!",
  "BAM! AND WE HAVE A WATER SHOW!",
  "GOLLY! WAS THAT A FISHING TRIP?",
  "YEAH! YOUR SHOT WENT FOR A SWIM!",
  "OOH! DID YOU JUST CREATE MINI WAVES?",
  "WHOOPS! MY SHIP’S STILL SAFE, NICE SPLASH!",
  "WOW, NICE AIM, DID YOU MISS ON PURPOSE?",
  "IS THAT YOUR BEST SHOT? PATHETIC!",
  "DID YOU JUST TRY TO WET THE OCEAN? EMBARRASSING!",
  "HA! YOUR AIM IS TERRIBLE!",
  "GREAT SHOT—IF YOU WERE AIMING FOR WATER!",
  "SPLASH! IS THAT ALL YOU'VE GOT? SAD!",
  "CAN’T EVEN HIT THE TARGET? LAME!",
  "OH LOOK, A WATER FEATURE—HOW ORIGINAL!",
  "YOUR AIM IS AS BAD AS YOUR STRATEGY!",
  "MISS AGAIN? YOUR SHOTS ARE A JOKE!",
  "WOW, YOUR SHOT’S A WATER FEATURE!",
  "NICE AIM, DID YOU MISS ON PURPOSE?",
  "SPLASH! YOUR SHOT’S A JOKE!",
  "IS THAT A WATER PARK? SAD!",
  "OH, GREAT, MORE WATER SHOWS!",
  "MISS AGAIN? YOUR AIM’S HILARIOUS!",
  "YOUR SHOT’S JUST A BIG SPLASH!",
  "WOW, A WATER ATTACK—HOW CLEVER!",
  "YOUR AIM IS A TRUE DISASTER!",
  "OH BOY, A WATER FEATURE AGAIN?",
  "..."
]
const enemyWhenPlayerHitHim =[
  "LUCKY SHOT! DIDN’T SEE THAT COMING!",
  "OUCH! NICE HIT—BUT LUCKY TOO!",
  "WELL, THAT’S A HIT! LUCKY YOU, HUH?",
  "BANG! A LUCKY STRIKE, WELL DONE!",
  "WHOOPS! DID YOUR AIM FINALLY HIT?",
  "WOW, A HIT! MUST BE A FLUKE!",
  "YIKES! NICE SHOT—MUST BE PURE LUCK!",
  "GOT ME! NICE LUCKY SHOT, CAPTAIN!",
  "NICE HIT! I’LL GIVE YOU THAT, LUCKY ONE!",
  "BAM! DID YOU GET LUCKY WITH THAT HIT?",
  "MY SHIP! HOW DARE YOU HIT IT!",
  "OUCH! MY SHIP IS TAKING DAMAGE!",
  "OH NO! MY POOR SHIP, WHAT HAVE YOU DONE?",
  "MY SHIP! YOU’RE MAKING ME LOSE IT!",
  "EEK! MY SHIP’S BEEN HIT—AGAIN!",
  "OH MY SHIP! THIS IS A DISASTER!",
  "NO! MY SHIP’S GETTING BEAT UP!",
  "MY SHIP! YOU’RE MAKING IT SINK!",
  "AHH! MY SHIP’S TAKING A BEATING!",
  "MY SHIP! HOW COULD YOU HIT IT SO HARD?",
  "YAY! WAIT, THAT WAS MY SHIP?!",
  "WOOHOO! OH NO, MY SHIP’S ON FIRE!",
  "YIPPEE! OH WAIT, THAT’S MY SHIP!",
  "WOW! DID I JUST GET HIT? THAT’S MY SHIP!",
  "HURRAY! WAIT, MY SHIP’S GOING DOWN?!",
  "WOO! DID MY SHIP JUST TAKE A HIT?!",
  "HOO! OH, MY SHIP’S GOT A HOLE!",
  "WELL, THAT’S A NEW MARK ON MY SHIP!",
  "MY SHIP’S GOT A FRESH NEW DENT!",
  "LOOKS LIKE MY SHIP’S GOT A NEW HOLE!",
  "DID MY SHIP JUST GET A NEW SPLASH?",
  "AH, MY SHIP’S GOT A NEW FEATURE!",
  "MY SHIP’S JUST GOT A BIT MORE UNIQUE!",
  "A NEW HOLE FOR MY SHIP, HOW NICE!",
  "MY SHIP’S NOW PART OF YOUR ART!",
  "WELL, THAT’S A NEW ADDITION TO MY SHIP!",
  "MY SHIP’S GOT A NEW AQUATIC DECOR!"
]
const enemyWhenPlayerSunkHim = [
  "AH, THAT WAS MY FAVORITE SHIP!",
  "DAMN, MY BEST SHIP JUST WENT DOWN!",
  "OH NO, MY SHIP’S GONE—IT WAS SPECIAL!",
  "MY FAVORITE SHIP IS NOW A REEF!",
  "SIGH, MY BEST SHIP’S BEEN LOST!",
  "BAM! THAT WAS MY MOST LOVED SHIP!",
  "UGH, MY FAVORITE SHIP IS NO MORE!",
  "SO SAD, MY SHIP’S NOW A SEA MEMORY!",
  "MY SHIP’S GONE—IT WAS MY FAVORITE!",
  "MY BABY!!!",
  "GONE! MY SHIP’S NOW A REEF.",
  "OH NO, MY SHIP’S DOWN!",
  "SO SAD, MY SHIP’S LOST.",
  "MY SHIP’S SUNK—WHAT A SHAME!",
  "MY SHIP’S OUT FOR GOOD.",
  "WELL, MY SHIP’S DONE FOR.",
  "SIGH, MY SHIP’S A GONER.",
  "MY SHIP’S GONE—TOO BAD!",
  "OUCH, MY SHIP’S SINKING!",
  "MY SHIP’S OUT OF THE GAME!",
  "THIS IS PERSONAL NOW.",
  "YOU’VE CROSSED THE LINE.",
  "THIS ISN’T OVER YET.",
  "NOW IT’S WAR.",
  "YOU’VE MADE IT PERSONAL.",
  "THIS IS JUST THE BEGINNING.",
  "NOW YOU’VE REALLY DONE IT.",
  "YOU’VE AWAKENED THE BEAST."
];
const enemyHitWater =[
  "I WAS JUST TESTING YOUR DEFENSES!",
    "A LITTLE OFF, BUT I’LL GET IT NEXT TIME!",
    "MY AIM’S JUST WARMING UP—WATCH OUT!",
    "I’M JUST GIVING YOU A HEAD START!",
    "EVERY GREAT STRATEGY HAS A MISSTEP!",
    "JUST ADJUSTING FOR THE NEXT PERFECT SHOT!",
    "A MINOR MISCALCULATION—NOTHING TO WORRY ABOUT!",
    "SOMETIMES YOU HAVE TO MISS TO MAKE A BIGGER IMPACT!",
    "WARM-UP SHOT—THE REAL STRIKE IS COMING!",
    "NOT EVERY SHOT IS PERFECT—BUT I’LL GET IT RIGHT!",
    "JUST WARMING UP—WATCH ME!",
    "A SMALL MISS, BUT I’LL GET IT!",
    "TEST SHOT—THE REAL ONE’S NEXT!",
    "GIVING YOU A HEAD START!",
    "JUST ADJUSTING MY AIM!",
    "NOT EVERY SHOT IS PERFECT!",
    "MINOR MISCALCULATION—NO WORRIES!",
    "A LITTLE OFF, BUT I’LL HIT IT!",
    "EARLY SHOT—THE BIG ONE’S COMING!",
    "WARM-UP MISS—STAY ALERT!",
    "WHERE THE HECK ARE YOU HIDING?",
    "COME OUT, WHERE ARE YOU?",
    "WHERE ARE YOU? THIS IS TOO EASY!",
    "SHOW YOURSELF—WHERE ARE YOU?",
    "HIDING? WHERE THE HECK ARE YOU?",
    "HELLO? WHERE ARE YOU HIDING?",
    "CAN’T HIT WHAT I CAN’T SEE—WHERE ARE YOU?",
    "ARE YOU PLAYING HIDE AND SEEK? WHERE ARE YOU?",
    "WHERE IN THE SEA ARE YOU HIDING?",
    "COME OUT, WHERE THE HECK ARE YOU?",
    "ARE YOU INVISIBLE? WHERE IN THE OCEAN ARE YOU?",
    "HELLO? HAVE YOU GONE UNDERWATER?",
    "AM I CHASING GHOSTS? WHERE ARE YOU?",
    "HIDING, ARE WE? SHOW YOURSELF!",
    "IS THIS A VANISHING ACT? WHERE HAVE YOU GONE?",
    "WAIT, DID I MISS AGAIN? OOPS!",
    "THINK I HIT? NEVER MIND, WHERE ARE YOU?",
    "DID I JUST HIT WATER? WELL, THAT'S EMBARRASSING!",
    "WHOOPS, DID I JUST SPLASH? THOUGHT I GOT YOU!",
    "DID I JUST AIM FOR THE OCEAN? HILARIOUS!",
    "OH, I WAS AIMING FOR THE WATER ALL ALONG!",
    "MY TARGET? JUST TRYING TO CREATE A SPLASH ZONE!",
    "ACTUALLY, I WAS PRACTICING MY WATER SHOTS!",
    "I'M PERFECTING MY WATER STRATEGY—SEE?",
    "INTENTIONAL MISS! JUST WANTED TO SPLASH SOME WATER!"
]
const enemyHitsShip = [
      "WELL, LOOKS LIKE I’M JUST TOO GOOD!",
      "OOOPS, DID I JUST HIT YOUR SHIP? MY BAD!",
      "WASN’T EXPECTING TO HIT YOU—SURPRISE!",
      "HIT YOUR SHIP? JUST A HAPPY ACCIDENT!",
      "WELL, THAT’S ONE WAY TO GET YOUR ATTENTION!",
      "DID I JUST HIT YOUR SHIP? NICE SURPRISE!",
      "WELL, I’M HITTING TARGETS NOW!",
      "WHOOPS! DID MY SHOT FIND YOUR SHIP?",
      "OH, I WAS AIMING FOR THE SHIP—NAILED IT!",
      "DID I JUST HIT YOU? WHO KNEW I WAS THIS GOOD?",
      "WOW, I ACTUALLY HIT YOUR SHIP—AMAZING!",
      "DID I JUST HIT YOU? I MUST BE A GENIUS!",
      "OH, YOUR SHIP? THAT WAS TOO EASY!",
      "HIT YOUR SHIP? WHO KNEW I WAS THIS ACCURATE!",
      "GOT YOUR SHIP—MUST BE A FLUKE, RIGHT?",
      "SORRY, WAS THAT YOUR SHIP? OOPS!",
      "OH, THAT WAS YOUR SHIP? MY BAD!",
      "DID I JUST HIT YOUR SHIP? SORRY ABOUT THAT!",
      "WHOOPS! DID I DAMAGE YOUR SHIP? MY MISTAKE!",
      "SORRY, DID I JUST HIT YOUR SHIP? HOW EMBARRASSING!",
      "SORRY, DID I HIT YOUR SHIP?",
      "OH, THAT WAS YOUR SHIP? MY BAD!",
      "DID I JUST HIT YOUR SHIP? WHOOPS!",
      "MY MISTAKE, WAS THAT YOUR SHIP?",
      "SORRY, WAS THAT YOUR SHIP I HIT?",
      "WOW, THAT WAS TOO EASY!",
      "HIT YOUR SHIP? THAT WAS A BREEZE!",
      "THIS IS JUST TOO EASY!",
      "WELL, THAT WAS A PIECE OF CAKE!",
      "YOUR SHIP? TOO SIMPLE TO HIT!"
];
const enemySunkPlayerShip = [
  "BOOM! YOUR SHIP’S NOW A REEF!",
  "DOWN SHE GOES—YOUR SHIP’S HISTORY!",
  "SINKING YOUR SHIP WAS TOO EASY!",
  "OUCH! YOUR SHIP JUST BECAME FISH FOOD!",
  "GONE! YOUR SHIP’S OFF TO THE DEEP BLUE!",
  "GG EZ",
  "YOUR SHIP’S OFF TO THE OCEAN FLOOR!",
  "SPLASH! YOUR SHIP’S UNDERWATER NOW!",
  "YOUR SHIP’S GONE—WELCOME TO THE DEEP!",
  "YOUR SHIP’S NOW A NEW FISH HABITAT!",
  "BOOM! YOUR SHIP’S TAKING A DEEP DIVE!",
  "HIPPITY HOPPITY, YOUR SHIP IS NOW WATER’S PROPERTY",
  "SPLASH! YOUR SHIP’S IN THE DEPTHS!",
  "DOWN SHE GOES, TO THE DEEP BELOW!",
  "BOOM! YOUR SHIP’S GONE—ZOOOM!",
  "YOUR SHIP’S OUT—WITH A BANG AND A SHOUT!",
  "SINKING DEEP, YOUR SHIP’S ASLEEP!",
  "EZ"
];



let enemyBoard = placeEnemyShips();

let realPlayer = new Player(myGameboard.board, ships);

let cpuPlayer = new Player(enemyBoard, enemy_ships);
let avaiable  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];


//CPU
let playerCELLS = getPlayerCELLS();
let curAttackedShip = null;
let avaiableCells = [];
let curAxis = null; // x
let lastAttack = null; // data



function randomAttackCPU(){
  let randomPos = null;
  let row = null;
  let column = null; 
  randomPos = getRandomInt(0, avaiable.length-1);
  let randomPosValue = avaiable[randomPos];
  //row = Math.floor(i/10), column = Math.floor(i%10)
  row = Math.floor(randomPosValue / 10);
  column = Math.floor(randomPosValue % 10);
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
      icons[playerAttackData.id].classList.add("sunkedICON");
      realPlayer.remainingShips--;
      if(realPlayer.remainingShips == 0){
        console.log("ENEMY WINS!");
        victoryText.textContent = "Enemy won!";
        dialog.showModal();
      }
      writeText(playerShipIsSunk, UserCommandText);
      writeText(enemySunkPlayerShip, cpuCommandText);
      nextAtack = null;
    }else{
      //-------------------------
      writeText(playerEnemyHitOurShip, UserCommandText);
      writeText(enemyHitsShip, cpuCommandText);
      avaiableCells = getAvaiableCells(curAttackedShip.row, curAttackedShip.column) //get avaiable cells
      
    }
      
  //NOT HIT
  }else{
    playerCELLS[((row*10)+column)].classList.add("clicked");
    playerCELLS[((row*10)+column)].classList.add("explode");
    writeText(playerEnemymiss, UserCommandText);
    writeText(enemyHitWater, cpuCommandText);
    nextAtack = null;
  }
}


async function cpuPlayTurn(){
  playRandomExplotion();
  if(curAttackedShip == null){
    randomAttackCPU();
  }else{
    if(curAxis == null){
      const attack = getRandomAvaibleAttack();
      const attackData = realPlayer.receiveAttack(attack.x, attack.y);
      avaiable.splice(avaiable.indexOf((attack.x*10)+attack.y), 1);
      if(attackData.hit){
        playerCELLS[((attack.x*10)+attack.y)].classList.add("fire");
        if(attackData.sunked){
          let icons = getPlayerICONS();
          icons[attackData.id].classList.add("sunkedICON");
          realPlayer.remainingShips--;
          if(realPlayer.remainingShips == 0){
            console.log("ENEMY WINS!");
            victoryText.textContent = "Enemy won!";
            dialog.showModal();
          }
          curAttackedShip = null;
          writeText(playerShipIsSunk, UserCommandText);
          writeText(enemySunkPlayerShip, cpuCommandText);
        }else{ 
          writeText(playerEnemyHitOurShip, UserCommandText);
          writeText(enemyHitsShip, cpuCommandText);
          if(attack.dir == "left" || attack.dir == "right"){
            curAxis = "x";
            lastAttack = {x: attack.x, y: attack.y, dir: attack.dir};
          }else{
            curAxis = "y";
            lastAttack = {x: attack.x, y: attack.y, dir: attack.dir};
          }
        }
      
      }else{
        playerCELLS[((attack.x*10)+attack.y)].classList.add("clicked");
        playerCELLS[((attack.x*10)+attack.y)].classList.add("explode");
        writeText(playerEnemymiss, UserCommandText);
        writeText(enemyHitWater, cpuCommandText);
      }
      if(avaiableCells.length == 0 && curAxis == null){
        curAttackedShip = null;
      }
    }else{
      if(curAxis == "x"){
        //left
        if(lastAttack.dir == "left"){
          if(lastAttack.y-1 >= 0 && avaiable.includes((lastAttack.x*10)+lastAttack.y-1)){
            avaiable.splice(avaiable.indexOf((lastAttack.x*10)+lastAttack.y-1), 1);
            const attackData = realPlayer.receiveAttack(lastAttack.x, lastAttack.y-1);
            if(attackData.hit){
              playerCELLS[((lastAttack.x*10)+lastAttack.y-1)].classList.add("fire");
              if(attackData.sunked){
                let icons = getPlayerICONS();
                icons[attackData.id].classList.add("sunkedICON");
                curAxis = null;
                curAttackedShip = null;
                realPlayer.remainingShips--;
                if(realPlayer.remainingShips == 0){
                  console.log("ENEMY WINS!");
                  victoryText.textContent = "Enemy won!";
                  dialog.showModal();
                }
                
                writeText(playerShipIsSunk, UserCommandText);
                writeText(enemySunkPlayerShip, cpuCommandText);
              }else{
                writeText(playerEnemyHitOurShip, UserCommandText);
                writeText(enemyHitsShip, cpuCommandText);
                lastAttack = {x: lastAttack.x, y: lastAttack.y-1, dir:lastAttack.dir};
              }
            }else{
              playerCELLS[((lastAttack.x*10)+lastAttack.y-1)].classList.add("clicked");
              playerCELLS[((lastAttack.x*10)+lastAttack.y-1)].classList.add("explode");
              writeText(playerEnemymiss, UserCommandText);
              writeText(enemyHitWater, cpuCommandText);
              curAxis = null;
            }
          }else{
            curAxis = null;
            curAttackedShip = null;
            randomAttackCPU();
          }
        }
        //right
        if(lastAttack.dir == "right"){
          if(lastAttack.y+1 <= 9 && avaiable.includes((lastAttack.x*10)+lastAttack.y+1)){
            avaiable.splice(avaiable.indexOf((lastAttack.x*10)+lastAttack.y+1), 1);
            const attackData = realPlayer.receiveAttack(lastAttack.x, lastAttack.y+1);
            if(attackData.hit){
              playerCELLS[((lastAttack.x*10)+lastAttack.y+1)].classList.add("fire");
              if(attackData.sunked){
                let icons = getPlayerICONS();
                icons[attackData.id].classList.add("sunkedICON");
                curAxis = null;
                curAttackedShip = null;
                realPlayer.remainingShips--;
                if(realPlayer.remainingShips == 0){
                  console.log("ENEMY WINS!");
                  victoryText.textContent = "Enemy won!";
                  dialog.showModal();
                }
                writeText(playerShipIsSunk, UserCommandText);
                writeText(enemySunkPlayerShip, cpuCommandText);
              }else{
                writeText(playerEnemyHitOurShip, UserCommandText);
                writeText(enemyHitsShip, cpuCommandText);
                lastAttack = {x: lastAttack.x, y: lastAttack.y+1, dir:lastAttack.dir};
              }
            }else{
              playerCELLS[((lastAttack.x*10)+lastAttack.y+1)].classList.add("clicked");
              playerCELLS[((lastAttack.x*10)+lastAttack.y+1)].classList.add("explode");
              writeText(playerEnemymiss, UserCommandText);
              writeText(enemyHitWater, cpuCommandText);
              curAxis = null;
            }
          }else{
            curAxis = null;
            curAttackedShip = null;
            randomAttackCPU();
          }
        }
      }else{
        //up
        if(lastAttack.dir == "up"){
          if(lastAttack.x-1 >= 0 && avaiable.includes(((lastAttack.x-1)*10)+lastAttack.y)){
            avaiable.splice(avaiable.indexOf(((lastAttack.x-1)*10)+lastAttack.y), 1);
            const attackData = realPlayer.receiveAttack(lastAttack.x-1, lastAttack.y);
            if(attackData.hit){
              playerCELLS[(((lastAttack.x-1)*10)+lastAttack.y)].classList.add("fire");
              if(attackData.sunked){
                let icons = getPlayerICONS();
                icons[attackData.id].classList.add("sunkedICON");
                curAxis = null;
                curAttackedShip = null;
                realPlayer.remainingShips--;
                if(realPlayer.remainingShips == 0){
                  console.log("ENEMY WINS!");
                  victoryText.textContent = "Enemy won!";
                  dialog.showModal();
                }
                writeText(playerShipIsSunk, UserCommandText);
                writeText(enemySunkPlayerShip, cpuCommandText);
              }else{
                writeText(playerEnemyHitOurShip, UserCommandText);
                writeText(enemyHitsShip, cpuCommandText);
                lastAttack = {x: lastAttack.x-1, y: lastAttack.y, dir:lastAttack.dir};
              }
            }else{
              playerCELLS[(((lastAttack.x-1)*10)+lastAttack.y)].classList.add("clicked");
              playerCELLS[(((lastAttack.x-1)*10)+lastAttack.y)].classList.add("explode");
              writeText(playerEnemymiss, UserCommandText);
              writeText(enemyHitWater, cpuCommandText);
              curAxis = null;
            }
          }else{
            curAxis = null;
            curAttackedShip = null;
            randomAttackCPU();
          }
        }
        //down
        if(lastAttack.dir == "down"){          if(lastAttack.x+1 <= 9 && avaiable.includes(((lastAttack.x+1)*10)+lastAttack.y)){
            avaiable.splice(avaiable.indexOf(((lastAttack.x+1)*10)+lastAttack.y), 1);
            const attackData = realPlayer.receiveAttack(lastAttack.x+1, lastAttack.y);
            if(attackData.hit){
              playerCELLS[(((lastAttack.x+1)*10)+lastAttack.y)].classList.add("fire");
              if(attackData.sunked){
                let icons = getPlayerICONS();
                icons[attackData.id].classList.add("sunkedICON");
                curAxis = null;
                curAttackedShip = null;
                realPlayer.remainingShips--;
                if(realPlayer.remainingShips == 0){
                  console.log("ENEMY WINS!");
                  victoryText.textContent = "Enemy won!";
                  dialog.showModal();
                }
                writeText(playerShipIsSunk, UserCommandText);
                writeText(enemySunkPlayerShip, cpuCommandText);
              }else{
                writeText(playerEnemyHitOurShip, UserCommandText);
                writeText(enemyHitsShip, cpuCommandText);
                lastAttack = {x: lastAttack.x+1, y: lastAttack.y, dir:lastAttack.dir};
              }
            }else{
              playerCELLS[(((lastAttack.x+1)*10)+lastAttack.y)].classList.add("clicked");
              playerCELLS[(((lastAttack.x+1)*10)+lastAttack.y)].classList.add("explode");
              writeText(playerEnemymiss, UserCommandText);
              writeText(enemyHitWater, cpuCommandText);
              curAxis = null;
            }
          }else{
            curAxis = null;
            curAttackedShip = null;
            randomAttackCPU();
          }
        }
      }

    }
    
  }
  await sleep(1500);
  curTurn = "player";
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function playerClick(i, CPU_cells){
  if(curTurn=="player"){
    playRandomExplotion();
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
          writeText(playerVictory, UserCommandText);
          writeText(enemyWhenPlayerSunkHim, cpuCommandText);
          dialog.showModal(); 
          gameover = true;
        }else{
          writeText(playerSunkShip, UserCommandText);
          writeText(enemyWhenPlayerSunkHim, cpuCommandText);
        }
      }else{
        writeText(playerHitShip, UserCommandText);
        writeText(enemyWhenPlayerHitHim, cpuCommandText);
      }
      
    }else{
      CPU_cells[i].classList.add("clicked");
      CPU_cells[i].classList.add("explode");
      writeText(playerHitWater, UserCommandText);
      writeText(enemyWhenPlayerMiss, cpuCommandText);
    }
    curTurn = "cpu";
    //CPU TURN
    if(gameover == false){
      await sleep(3800);
      cpuPlayTurn();
    }
    
  }
}

function ready(){
  if(checkShipsOnBoard()){
    console.log("READY");
    console.log(myGameboard.board);
    dragShipsMenu.remove();
    addBoards(ALL_SHIPS_INF, enemyInfo);
    let CPU_cells = getCpuCells();
    CommandsText = getPlayerAndCpuText();
    UserCommandText = CommandsText.player;
    cpuCommandText = CommandsText.cpu;
    for(let i = 0; i < CPU_cells.length; i++){
      CPU_cells[i].addEventListener("click", ()=>{
      playerClick(i, CPU_cells);
      });
    }
  }else{
    console.log("NOT READY");
    alert("You need to place all ships on the board first");
  }
  
}
readyBTN.addEventListener("click", ready);


function startingDrag(ship){
  if(ALL_SHIPS_INF[curShipID].direction!=null){
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