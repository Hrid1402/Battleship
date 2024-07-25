/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/imgs/CarrierPixel.svg":
/*!***********************************!*\
  !*** ./src/imgs/CarrierPixel.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/CarrierPixel.5c9cfae4ce9b5a4e2df7.svg\";\n\n//# sourceURL=webpack://template-1/./src/imgs/CarrierPixel.svg?");

/***/ }),

/***/ "./src/imgs/battleshipPixel.svg":
/*!**************************************!*\
  !*** ./src/imgs/battleshipPixel.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/battleshipPixel.cbad4fada5818280549d.svg\";\n\n//# sourceURL=webpack://template-1/./src/imgs/battleshipPixel.svg?");

/***/ }),

/***/ "./src/imgs/cruiserPixel.svg":
/*!***********************************!*\
  !*** ./src/imgs/cruiserPixel.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/cruiserPixel.cbddd03f2a6486c3477c.svg\";\n\n//# sourceURL=webpack://template-1/./src/imgs/cruiserPixel.svg?");

/***/ }),

/***/ "./src/imgs/destroyerPixel.svg":
/*!*************************************!*\
  !*** ./src/imgs/destroyerPixel.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/destroyerPixel.4c0512c33ea245cdb551.svg\";\n\n//# sourceURL=webpack://template-1/./src/imgs/destroyerPixel.svg?");

/***/ }),

/***/ "./src/imgs/submarinePixel.svg":
/*!*************************************!*\
  !*** ./src/imgs/submarinePixel.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imgs/submarinePixel.7bf8d31917b90e1297f0.svg\";\n\n//# sourceURL=webpack://template-1/./src/imgs/submarinePixel.svg?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function addBoards(shipsinf) {\r\n    console.log('---------------------\\nAdding Boards');\r\n    console.log(shipsinf);\r\n    addPlayerBoard(shipsinf);\r\n}\r\nfunction addPlayerBoard(shipsinf){\r\n    const P_board = document.createElement('div');\r\n    P_board.classList.add('P_board');\r\n    const P_board_letters = document.createElement('li');\r\n    P_board_letters.classList.add('P_board_letters');\r\n    //letters\r\n    const P_A = document.createElement('p');\r\n    P_A.textContent = 'A';\r\n    const P_B = document.createElement('p');\r\n    P_B.textContent = 'B';\r\n    const P_C = document.createElement('p');\r\n    P_C.textContent = 'C';\r\n    const P_D = document.createElement('p');\r\n    P_D.textContent = 'D';\r\n    const P_E = document.createElement('p');\r\n    P_E.textContent = 'E';\r\n    const P_F = document.createElement('p');\r\n    P_F.textContent = 'F';\r\n    const P_G = document.createElement('p');\r\n    P_G.textContent = 'G';\r\n    const P_H = document.createElement('p');\r\n    P_H.textContent = 'H';\r\n    const P_I = document.createElement('p');\r\n    P_I.textContent = 'I';\r\n    const P_J = document.createElement('p');\r\n    P_J.textContent = 'J';\r\n\r\n    P_board_letters.append(P_A, P_B, P_C, P_D, P_E, P_F, P_G, P_H, P_I, P_J);\r\n    //\r\n    const P_middle = document.createElement('div');\r\n    P_middle.classList.add('P_middle');\r\n    const P_board_numbers = document.createElement('li');\r\n    P_board_numbers.classList.add('P_board_numbers');\r\n    for (let i = 1; i <= 10; i++) {\r\n        const P_number = document.createElement('p');\r\n        P_number.textContent = i;\r\n        P_board_numbers.append(P_number);\r\n    }\r\n    const P_board_grid = document.createElement('div');\r\n    P_board_grid.classList.add('P_board_grid');\r\n\r\n    for (let i = 1; i <= 100; i++) {\r\n        const cell = document.createElement('div');\r\n        cell.classList.add('P_cell');\r\n        P_board_grid.append(cell);\r\n    }\r\n\r\n    P_middle.append(P_board_numbers);\r\n    P_middle.append(P_board_grid);\r\n\r\n    P_board.append(P_board_letters);\r\n    P_board.append(P_middle);\r\n    \r\n    const body = document.querySelector('body');\r\n    body.append(P_board);\r\n    addPlayerShips(shipsinf);\r\n}\r\nfunction addPlayerShips(shipsinf){\r\n    const CELLS = document.querySelectorAll('.P_cell');\r\n\r\n    const carrier = document.createElement('img');\r\n    carrier.classList.add('carrierSVG');\r\n    carrier.src = __webpack_require__(/*! ./imgs/CarrierPixel.svg */ \"./src/imgs/CarrierPixel.svg\");\r\n\r\n    const battleship = document.createElement('img');\r\n    battleship.classList.add('battleshipSVG');\r\n    battleship.src = __webpack_require__(/*! ./imgs/battleshipPixel.svg */ \"./src/imgs/battleshipPixel.svg\");\r\n\r\n    \r\n    const cruiser = document.createElement('img');\r\n    cruiser.classList.add('cruiserSVG');\r\n    cruiser.src = __webpack_require__(/*! ./imgs/cruiserPixel.svg */ \"./src/imgs/cruiserPixel.svg\");\r\n\r\n    const submarine = document.createElement('img');\r\n    submarine.classList.add('submarineSVG');\r\n    submarine.src = __webpack_require__(/*! ./imgs/submarinePixel.svg */ \"./src/imgs/submarinePixel.svg\");\r\n\r\n    const destroyer = document.createElement('img');\r\n    destroyer.classList.add('destroyerSVG');\r\n    destroyer.src = __webpack_require__(/*! ./imgs/destroyerPixel.svg */ \"./src/imgs/destroyerPixel.svg\");\r\n\r\n    CELLS[shipsinf[1].curPOS].append(carrier);\r\n    CELLS[shipsinf[1].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[1].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[1].direction == \"h\"){\r\n        CELLS[shipsinf[1].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[shipsinf[2].curPOS].append(battleship);\r\n    CELLS[shipsinf[2].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[2].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[2].direction == \"h\"){\r\n        CELLS[shipsinf[2].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[shipsinf[3].curPOS].append(cruiser);\r\n    CELLS[shipsinf[3].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[3].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[3].direction == \"h\"){\r\n        CELLS[shipsinf[3].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[shipsinf[4].curPOS].append(submarine);\r\n    CELLS[shipsinf[4].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[4].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[4].direction == \"h\"){\r\n        CELLS[shipsinf[4].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[shipsinf[5].curPOS].append(destroyer);\r\n    CELLS[shipsinf[5].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[5].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[5].direction == \"h\"){\r\n        CELLS[shipsinf[5].curPOS].classList.add(\"rotate\");\r\n    }\r\n    \r\n};\r\n\r\nmodule.exports = { addBoards };\n\n//# sourceURL=webpack://template-1/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__.e(/*! import() */ \"src_style_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./style.css */ \"./src/style.css\"));\r\n__webpack_require__.e(/*! import() */ \"src_mainboard_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./mainboard.css */ \"./src/mainboard.css\"));\r\nconst { addBoards } = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\r\n\r\nconsole.log(\"Working\");\r\nconst carrierSVG = document.querySelector(\".carrierSVG\");\r\nconst battleshipSVG = document.querySelector(\".battleshipSVG\");\r\nconst cruiserSVG = document.querySelector(\".cruiserSVG\");\r\nconst submarineSVG = document.querySelector(\".submarineSVG\");\r\nconst destroyerSVG = document.querySelector(\".destroyerSVG\");\r\n\r\nconst dragShipsMenu = document.querySelector(\"#dragShipsMenu\");\r\nconst resetBTN = document.querySelector(\".reset\");\r\nconst readyBTN = document.querySelector(\".ready\");\r\n\r\nlet curShip = carrierSVG;\r\nlet curShipID = 1;\r\nlet curShipLen = 5;\r\nlet curDirection = \"v\";\r\nconst TOGGLE_INTERVAL = 340; // Interval in milliseconds\r\n\r\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.curHits = 0;\r\n    this.sunk = false;\r\n  }\r\n  hit() {\r\n    this.curHits++;\r\n    console.log(\"current Hits +1\");\r\n  }\r\n  isSunk() {\r\n    if (this.curHits == this.length) {\r\n      this.sunk = true;\r\n      console.log(\"SUNK\");\r\n    }\r\n  }\r\n}\r\nclass Gameboard {\r\n  constructor() {\r\n    this.board = [\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    ];\r\n  }\r\n  receiveAttack(row, column) {\r\n    if (this.board[row][column] == 1) {\r\n      this.board[row][column] = \"x\";\r\n      console.log(\"hit\");\r\n      console.log(ships[1].curHits);\r\n      ships[1].hit();\r\n      ships[1].isSunk();\r\n    } else {\r\n      console.log(\"miss\");\r\n    }\r\n  }\r\n  addShip(ship, row, column, direction, id) {\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (direction == \"h\") {\r\n        this.board[row][column + i] = id;\r\n      } else {\r\n        this.board[row + i][column] = id;\r\n      }\r\n    }\r\n    console.log(this.board);\r\n  }\r\n}\r\nconst myGameboard = new Gameboard();\r\n\r\n//myGameboard.addShip(ships[1], (row = 4), (column = 0), \"v\");\r\n//myGameboard.addShip(new Ship(4), (row = 0), (column = 0), \"h\");\r\nmyGameboard.receiveAttack(0, 0);\r\n//console.log(myGameboard.board);\r\n\r\n\r\nship1 = new Ship(5); //Carrier\r\nship2 = new Ship(4); //Battleship\r\nship3 = new Ship(3); //Cruiser\r\nship4 = new Ship(3); //Submarine\r\nship5 = new Ship(2); //Destroyer\r\n\r\nlet ships = {\r\n  1 : ship1,\r\n  2 : ship2,\r\n  3 : ship3,\r\n  4 : ship4,\r\n  5 : ship5\r\n};\r\n\r\nlet ALL_SHIPS_INF = {\r\n  1 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  },\r\n  2 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  },\r\n  3 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  },\r\n  4 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  },\r\n  5 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  }\r\n}\r\n\r\nconst CELLS = document.querySelectorAll(\".cell\");\r\n//RESET\r\nfunction resetShips(){\r\n  console.log(\"RESET\");\r\n  const shipBlocks = document.querySelectorAll(\".shipBLOCK\");\r\n  shipBlocks[0].appendChild(carrierSVG); \r\n  shipBlocks[1].appendChild(battleshipSVG);\r\n  shipBlocks[2].appendChild(cruiserSVG);\r\n  shipBlocks[3].appendChild(submarineSVG);\r\n  shipBlocks[4].appendChild(destroyerSVG);\r\n  for(let i = 0; i < CELLS.length; i++){\r\n    CELLS[i].classList.remove(\"inFront\");\r\n    CELLS[i].classList.remove(\"rotate\");\r\n    CELLS[i].classList.remove(\"colorChange\");\r\n    CELLS[i].classList.remove(\"outRange\");\r\n    CELLS[i].innerHTML = \"\";\r\n  }\r\n  ALL_SHIPS_INF = {\r\n    1 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    },\r\n    2 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    },\r\n    3 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    },\r\n    4 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    },\r\n    5 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    }\r\n  }\r\n  myGameboard.board  = [\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n  ];\r\n  console.log(myGameboard.board);\r\n\r\n}\r\nresetBTN.addEventListener(\"click\", resetShips);\r\n\r\nfunction checkShipsOnBoard(){\r\n  for(let i = 1; i < 6; i++){\r\n    if(ALL_SHIPS_INF[i].curPOS == null){\r\n      return false;\r\n    }\r\n  }\r\n  return true;\r\n}\r\nfunction ready(){\r\n  if(checkShipsOnBoard()){\r\n    console.log(\"READY\");\r\n    console.log(\"FINAL BOARD:\");\r\n    console.log(myGameboard.board);\r\n    console.log(ALL_SHIPS_INF);\r\n    dragShipsMenu.remove();\r\n\r\n    addBoards(ALL_SHIPS_INF);\r\n  }else{\r\n    console.log(\"NOT READY\");\r\n  }\r\n  \r\n}\r\nreadyBTN.addEventListener(\"click\", ready);\r\n\r\n\r\nfunction startingDrag(ship){\r\n  console.log(ALL_SHIPS_INF[curShipID]);\r\n  if(ALL_SHIPS_INF[curShipID].direction!=null){\r\n    console.log(\"----\");\r\n    curDirection = ALL_SHIPS_INF[curShipID].direction;\r\n  }else{\r\n    curDirection = \"v\";\r\n  }\r\n  ALL_SHIPS_INF[curShipID].prevPOS = ALL_SHIPS_INF[curShipID].curPOS;\r\n  if(ALL_SHIPS_INF[curShipID].curPOS!=null){\r\n    ship.classList.add(\"hidden\");\r\n  }\r\n  if(ALL_SHIPS_INF[curShipID].prevPOS!=null){\r\n    CELLS[ALL_SHIPS_INF[curShipID].prevPOS].classList.remove(\"inFront\");\r\n  }\r\n  ship.classList.add(\"dragging\");\r\n  const dragginShip = document.querySelector(\".dragging\");\r\n    setTimeout(() => {\r\n        dragginShip.classList.add('dragging');\r\n        dragginShip.style.pointerEvents = 'none'; // Desactiva los eventos del puntero para el elemento arrastrado\r\n      }, 0);\r\n}\r\nfunction dragEnding(ship){\r\n  ship.classList.remove(\"hidden\");\r\n  ship.classList.remove(\"dragging\");\r\n  ship.style.pointerEvents = '';\r\n  if(ALL_SHIPS_INF[curShipID].curPOS!=null){\r\n    CELLS[ALL_SHIPS_INF[curShipID].curPOS].classList.add(\"inFront\");\r\n  }\r\n}\r\n\r\n//add event listeners to all ships\r\ncarrierSVG.addEventListener(\"dragstart\", (event) => {\r\n  event.dataTransfer.effectAllowed = 'all';\r\n  curShip = carrierSVG;\r\n  curShipLen = 5;\r\n  curShipID = 1;\r\n  startingDrag(carrierSVG);\r\n  \r\n});\r\n//DRAG EVENT\r\nlet carrierLastToggleTime = 0;\r\ncarrierSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - carrierLastToggleTime > TOGGLE_INTERVAL) {\r\n    carrierLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n    console.log(curDirection);\r\n  }\r\n});\r\n\r\n\r\ncarrierSVG.addEventListener(\"dragend\", () => {\r\n  dragEnding(carrierSVG);\r\n});\r\n\r\n\r\nbattleshipSVG.addEventListener(\"dragstart\", () => {\r\n  curShip = battleshipSVG;\r\n  curShipLen = 4;\r\n  curShipID = 2;\r\n  startingDrag(battleshipSVG);\r\n});\r\n//DRAG EVENT\r\nlet battleshipLastToggleTime = 0;\r\nbattleshipSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - battleshipLastToggleTime > TOGGLE_INTERVAL) {\r\n    battleshipLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n    console.log(curDirection);\r\n  }\r\n});\r\n\r\nbattleshipSVG.addEventListener(\"dragend\", () => {\r\n  dragEnding(battleshipSVG);\r\n});\r\n\r\n\r\ncruiserSVG.addEventListener(\"dragstart\", () => {\r\n  curShip = cruiserSVG;\r\n  curShipLen = 3;\r\n  curShipID = 3;\r\n  startingDrag(cruiserSVG);\r\n});\r\n//DRAG EVENT\r\nlet cruiserLastToggleTime = 0;\r\ncruiserSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - cruiserLastToggleTime > TOGGLE_INTERVAL) {\r\n    cruiserLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n    console.log(curDirection);\r\n  }\r\n});\r\ncruiserSVG.addEventListener(\"dragend\", () => {  \r\n  dragEnding(cruiserSVG);\r\n});\r\n\r\n\r\nsubmarineSVG.addEventListener(\"dragstart\", () => {\r\n  curShip = submarineSVG;\r\n  curShipLen = 3;\r\n  curShipID = 4;\r\n  startingDrag(submarineSVG);\r\n});\r\n\r\n//DRAG EVENT\r\nlet SubMarineLastToggleTime = 0;\r\nsubmarineSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - SubMarineLastToggleTime > TOGGLE_INTERVAL) {\r\n    SubMarineLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n    console.log(curDirection);\r\n  }\r\n});\r\n\r\nsubmarineSVG.addEventListener(\"dragend\", () => {\r\n  dragEnding(submarineSVG);\r\n});\r\n\r\n\r\ndestroyerSVG.addEventListener(\"dragstart\", () => {\r\n  curShip = destroyerSVG;\r\n  curShipLen = 2;\r\n  curShipID = 5;\r\n  startingDrag(destroyerSVG);\r\n});\r\n//DRAG EVENT\r\nlet destroyerLastToggleTime = 0;\r\ndestroyerSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - destroyerLastToggleTime > TOGGLE_INTERVAL) {\r\n    destroyerLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n    console.log(curDirection);\r\n  }\r\n});\r\ndestroyerSVG.addEventListener(\"dragend\", () => {\r\n  dragEnding(destroyerSVG);\r\n});\r\n\r\n\r\n//add event listeners to cells\r\nfunction checkIfCanDrop(length, pos, direction){\r\n  console.log(\"CURRENT DIRECTION: \" + direction);\r\n  if(direction == \"v\"){\r\n    let f = pos;\r\n    for (let i = 0; i < length; i++) {\r\n      if(CELLS[f] != null && (myGameboard.board[Math.floor(f/10)][Math.floor(f%10)] == 0 || myGameboard.board[Math.floor(f/10)][Math.floor(f%10)] == curShipID)){\r\n        f+=10;\r\n      }else{\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }else{\r\n    console.log(\"pos: \" + pos + \"   length: \" + length);\r\n    if(pos + length > 100){\r\n      console.log(\"FALSE\");\r\n      return false;\r\n    }\r\n    if(myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != 0 && myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != curShipID){\r\n      return false;\r\n    }\r\n    if(pos.toString()[pos.toString().length-1] == \"9\"){\r\n      return false;\r\n    }else{\r\n      for(let i = 0; i < length-1; i++){\r\n        pos++;\r\n        if(CELLS[pos] == null || pos.toString()[pos.toString().length-1]==\"0\" || (myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != 0 && myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != curShipID)){\r\n          return false;\r\n        }\r\n      }\r\n      return true;\r\n    }\r\n  }\r\n  \r\n}\r\n//\r\nlet actualCubes = [];\r\nlet errorCubes = [];\r\nlet canDrop = true;\r\n\r\nfunction highLightCells(length, pos, direction){\r\n  if(direction == \"v\"){\r\n    let f = pos;\r\n    for (let i = 0; i < length; i++) {\r\n      actualCubes.push(f);\r\n      CELLS[f].classList.add(\"colorChange\");\r\n      f+=10;\r\n    }\r\n  }else{\r\n    for (let i = 0; i < length; i++) {\r\n      actualCubes.push(pos);\r\n      CELLS[pos].classList.add(\"colorChange\");\r\n      pos++;\r\n    }\r\n  }\r\n}\r\nfunction highErrorCells(pos, direction){\r\n  console.log(\"CANT PLACE HERE\");\r\n  if(direction == \"v\"){\r\n    let i=pos;\r\n    while(CELLS[i] != null && myGameboard.board[Math.floor(i/10)][Math.floor(i%10)] == 0){\r\n      errorCubes.push(i);\r\n      CELLS[i].classList.add(\"outRange\");\r\n      i+=10;\r\n    }\r\n  }else{\r\n    let i = pos;\r\n    let column = Math.floor(i%10);\r\n    let row = Math.floor(i/10);\r\n    console.log(\"x:\" + column + \" y:\" + row + \" [\" +myGameboard.board[column][row]  + \"]\");\r\n    while(CELLS[i] != null && i.toString()[i.toString().length-1]!=\"0\" && (myGameboard.board[row][column] == 0 || myGameboard.board[column][row] == curShipID)){\r\n        errorCubes.push(i);\r\n        CELLS[i].classList.add(\"outRange\");\r\n        i++;\r\n        console.log(\"x:\" + column + \" y:\" + row + \" [\" +myGameboard.board[column][row]  + \"]\");\r\n        column = Math.floor(i%10);\r\n        row = Math.floor(i/10);\r\n    }\r\n  }\r\n}\r\n\r\nfor(let i = 0; i < CELLS.length; i++) {\r\n  CELLS[i].addEventListener(\"dragover\", (e) => {\r\n    e.preventDefault();\r\n    canDrop = true;\r\n    let f = i;\r\n    actualCubes = [];\r\n    if(checkIfCanDrop(curShipLen, i, curDirection)){\r\n      highLightCells(curShipLen, i, curDirection);\r\n      canDrop = true;\r\n    }else{\r\n      //Highlight the cells that are out of range\r\n      canDrop = false;\r\n      errorCubes = [];\r\n      highErrorCells(i, curDirection);\r\n    }\r\n  });\r\n\r\n  //Remove the highlight\r\n  function removeHighlight(){\r\n    for(let i = 0; i < actualCubes.length; i++){\r\n      CELLS[actualCubes[i]].classList.remove(\"colorChange\");\r\n    }\r\n  }\r\n\r\n  function removeErrorHighlight(){\r\n    console.log(\"ERROR CUBES\", errorCubes);\r\n    for(let i = 0; i < errorCubes.length; i++){\r\n      CELLS[errorCubes[i]].classList.remove(\"outRange\");\r\n    }\r\n  }\r\n//Remove the highlight when the mouse leaves the cell\r\n  CELLS[i].addEventListener(\"dragleave\", () => {\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n  });\r\n  \r\n  CELLS[i].addEventListener(\"drop\", () => {\r\n    if(canDrop == true){\r\n      if(ALL_SHIPS_INF[curShipID].id != null){\r\n        myGameboard.addShip(ALL_SHIPS_INF[curShipID].ship, ALL_SHIPS_INF[curShipID].row, ALL_SHIPS_INF[curShipID].column, ALL_SHIPS_INF[curShipID].direction, 0);\r\n      }\r\n      myGameboard.addShip(ships[curShipID], row = Math.floor(i/10), column = Math.floor(i%10), curDirection, curShipID);\r\n      CELLS[i].classList.add(\"inFront\");\r\n      ALL_SHIPS_INF[curShipID] = {\r\n        ship: ships[curShipID],\r\n        row: Math.floor(i/10),\r\n        column: Math.floor(i%10),\r\n        direction: curDirection,\r\n        id: curShipID\r\n      }\r\n      ALL_SHIPS_INF[curShipID].curPOS = i;\r\n      CELLS[i].classList.add(\"inFront\");\r\n      if(curDirection==\"h\"){\r\n        CELLS[i].classList.add(\"rotate\");\r\n      }else{\r\n        CELLS[i].classList.remove(\"rotate\");\r\n      }\r\n      CELLS[i].appendChild(curShip);\r\n      curShip.classList.remove(\"hidden\");\r\n      removeHighlight();\r\n    }else{\r\n      removeErrorHighlight();\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack://template-1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "template-1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_1"] = self["webpackChunktemplate_1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;