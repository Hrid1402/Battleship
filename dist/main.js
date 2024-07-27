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

eval("\r\nlet cpuSHIPS = {\r\n    carrier: null,\r\n    battleship: null,\r\n    cruiser: null,\r\n    submarine: null,\r\n    destroyer: null\r\n}\r\n\r\nlet cpuICONS = {\r\n    1: null,\r\n    2: null,\r\n    3: null,\r\n    4: null,\r\n    5: null   \r\n}\r\n\r\nlet playerICONS={\r\n    1: null,\r\n    2: null,\r\n    3: null,\r\n    4: null,\r\n    5: null   \r\n}\r\n\r\nlet playerCELLS = [];\r\n\r\nfunction addBoards(shipsinf, enemyInfo) {\r\n    console.log('---------------------\\nAdding Boards');\r\n    console.log(shipsinf);\r\n    const boards = document.createElement('div');\r\n    const bodyy = document.querySelector('body');\r\n    boards.classList.add('boards');\r\n    bodyy.append(boards);\r\n    addPlayerBoard(shipsinf, boards);\r\n    addCPUboard(enemyInfo, boards);\r\n    console.log('Boards Added\\n---------------------');\r\n}\r\nfunction addPlayerBoard(shipsinf, boards){\r\n    const P_board = document.createElement('div');\r\n    P_board.classList.add('P_board');\r\n    const P_board_letters = document.createElement('li');\r\n    P_board_letters.classList.add('P_board_letters');\r\n    //letters\r\n    const P_A = document.createElement('p');\r\n    P_A.textContent = 'A';\r\n    const P_B = document.createElement('p');\r\n    P_B.textContent = 'B';\r\n    const P_C = document.createElement('p');\r\n    P_C.textContent = 'C';\r\n    const P_D = document.createElement('p');\r\n    P_D.textContent = 'D';\r\n    const P_E = document.createElement('p');\r\n    P_E.textContent = 'E';\r\n    const P_F = document.createElement('p');\r\n    P_F.textContent = 'F';\r\n    const P_G = document.createElement('p');\r\n    P_G.textContent = 'G';\r\n    const P_H = document.createElement('p');\r\n    P_H.textContent = 'H';\r\n    const P_I = document.createElement('p');\r\n    P_I.textContent = 'I';\r\n    const P_J = document.createElement('p');\r\n    P_J.textContent = 'J';\r\n\r\n    P_board_letters.append(P_A, P_B, P_C, P_D, P_E, P_F, P_G, P_H, P_I, P_J);\r\n    //\r\n    const P_middle = document.createElement('div');\r\n    P_middle.classList.add('P_middle');\r\n    const P_board_numbers = document.createElement('li');\r\n    P_board_numbers.classList.add('P_board_numbers');\r\n    for (let i = 1; i <= 10; i++) {\r\n        const P_number = document.createElement('p');\r\n        P_number.textContent = i;\r\n        P_board_numbers.append(P_number);\r\n    }\r\n    const P_board_grid = document.createElement('div');\r\n    P_board_grid.classList.add('P_board_grid');\r\n\r\n    for (let i = 1; i <= 100; i++) {\r\n        const cell = document.createElement('div');\r\n        cell.classList.add('P_cell');\r\n        playerCELLS.push(cell);\r\n        P_board_grid.append(cell);\r\n    }\r\n    P_middle.append(P_board_numbers);\r\n    P_middle.append(P_board_grid);\r\n    \r\n    const P_bottom = document.createElement('div');\r\n    P_bottom.classList.add('P_bottom');\r\n\r\n    const P_text = document.createElement('h2');\r\n    P_text.textContent = 'You:';\r\n    P_text.classList.add('P_text');\r\n\r\n    P_bottom.append(P_text);\r\n\r\n    const carrierICON = document.createElement('img');\r\n    carrierICON.classList.add('carrierICON');\r\n    carrierICON.src = __webpack_require__(/*! ./imgs/CarrierPixel.svg */ \"./src/imgs/CarrierPixel.svg\");\r\n\r\n    const battleshipICON = document.createElement('img');\r\n    battleshipICON.classList.add('battleshipICON');\r\n    battleshipICON.src = __webpack_require__(/*! ./imgs/battleshipPixel.svg */ \"./src/imgs/battleshipPixel.svg\");\r\n\r\n    const cruiserICON = document.createElement('img');\r\n    cruiserICON.classList.add('cruiserICON');\r\n    cruiserICON.src = __webpack_require__(/*! ./imgs/cruiserPixel.svg */ \"./src/imgs/cruiserPixel.svg\");\r\n\r\n    const submarineICON = document.createElement('img');\r\n    submarineICON.classList.add('submarineICON');\r\n    submarineICON.src = __webpack_require__(/*! ./imgs/submarinePixel.svg */ \"./src/imgs/submarinePixel.svg\");\r\n\r\n    const destroyerICON = document.createElement('img');\r\n    destroyerICON.classList.add('destroyerICON');\r\n    destroyerICON.src = __webpack_require__(/*! ./imgs/destroyerPixel.svg */ \"./src/imgs/destroyerPixel.svg\");\r\n    \r\n    playerICONS={\r\n        1: carrierICON,\r\n        2: battleshipICON,\r\n        3: cruiserICON,\r\n        4: submarineICON,\r\n        5: destroyerICON   \r\n    }\r\n\r\n\r\n    const P_shipsHolder = document.createElement('div');\r\n    P_shipsHolder.classList.add('P_shipsHolder');\r\n    P_shipsHolder.append(carrierICON);\r\n    P_shipsHolder.append(battleshipICON);\r\n    P_shipsHolder.append(cruiserICON);\r\n    P_shipsHolder.append(submarineICON);\r\n    P_shipsHolder.append(destroyerICON);\r\n\r\n    P_bottom.append(P_shipsHolder);\r\n\r\n    P_board.append(P_board_letters);\r\n    P_board.append(P_middle);\r\n    P_board.append(P_bottom);\r\n    \r\n    \r\n    boards.append(P_board);\r\n    addPlayerShips(shipsinf);\r\n}\r\nfunction addPlayerShips(shipsinf){\r\n    const CELLS = document.querySelectorAll('.P_cell');\r\n\r\n    const carrier = document.createElement('img');\r\n    carrier.classList.add('carrierSVG');\r\n    carrier.src = __webpack_require__(/*! ./imgs/CarrierPixel.svg */ \"./src/imgs/CarrierPixel.svg\");\r\n\r\n    const battleship = document.createElement('img');\r\n    battleship.classList.add('battleshipSVG');\r\n    battleship.src = __webpack_require__(/*! ./imgs/battleshipPixel.svg */ \"./src/imgs/battleshipPixel.svg\");\r\n\r\n    \r\n    const cruiser = document.createElement('img');\r\n    cruiser.classList.add('cruiserSVG');\r\n    cruiser.src = __webpack_require__(/*! ./imgs/cruiserPixel.svg */ \"./src/imgs/cruiserPixel.svg\");\r\n\r\n    const submarine = document.createElement('img');\r\n    submarine.classList.add('submarineSVG');\r\n    submarine.src = __webpack_require__(/*! ./imgs/submarinePixel.svg */ \"./src/imgs/submarinePixel.svg\");\r\n\r\n    const destroyer = document.createElement('img');\r\n    destroyer.classList.add('destroyerSVG');\r\n    destroyer.src = __webpack_require__(/*! ./imgs/destroyerPixel.svg */ \"./src/imgs/destroyerPixel.svg\");\r\n\r\n    carrier.classList.add('sunked');\r\n    battleship.classList.add('sunked');\r\n    cruiser.classList.add('sunked');\r\n    submarine.classList.add('sunked');\r\n    destroyer.classList.add('sunked');\r\n\r\n    CELLS[shipsinf[1].curPOS].append(carrier);\r\n    CELLS[shipsinf[1].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[1].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[1].direction == \"h\"){\r\n        CELLS[shipsinf[1].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[shipsinf[2].curPOS].append(battleship);\r\n    CELLS[shipsinf[2].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[2].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[2].direction == \"h\"){\r\n        CELLS[shipsinf[2].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[shipsinf[3].curPOS].append(cruiser);\r\n    CELLS[shipsinf[3].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[3].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[3].direction == \"h\"){\r\n        CELLS[shipsinf[3].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[shipsinf[4].curPOS].append(submarine);\r\n    CELLS[shipsinf[4].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[4].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[4].direction == \"h\"){\r\n        CELLS[shipsinf[4].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[shipsinf[5].curPOS].append(destroyer);\r\n    CELLS[shipsinf[5].curPOS].classList.add(\"inFront\");\r\n    CELLS[shipsinf[5].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(shipsinf[5].direction == \"h\"){\r\n        CELLS[shipsinf[5].curPOS].classList.add(\"rotate\");\r\n    }\r\n    \r\n};\r\nfunction addCPUboard(CPUinf, boards){\r\n    const CPU_board = document.createElement('div');\r\n    CPU_board.classList.add('CPU_board');\r\n    const CPU_board_letters = document.createElement('li');\r\n    CPU_board_letters.classList.add('CPU_board_letters');\r\n    //letters\r\n    const CPU_A = document.createElement('p');\r\n    CPU_A.textContent = 'A';\r\n    const CPU_B = document.createElement('p');\r\n    CPU_B.textContent = 'B';\r\n    const CPU_C = document.createElement('p');\r\n    CPU_C.textContent = 'C';\r\n    const CPU_D = document.createElement('p');\r\n    CPU_D.textContent = 'D';\r\n    const CPU_E = document.createElement('p');\r\n    CPU_E.textContent = 'E';\r\n    const CPU_F = document.createElement('p');\r\n    CPU_F.textContent = 'F';\r\n    const CPU_G = document.createElement('p');\r\n    CPU_G.textContent = 'G';\r\n    const CPU_H = document.createElement('p');\r\n    CPU_H.textContent = 'H';\r\n    const CPU_I = document.createElement('p');\r\n    CPU_I.textContent = 'I';\r\n    const CPU_J = document.createElement('p');\r\n    CPU_J.textContent = 'J';\r\n\r\n    CPU_board_letters.append(CPU_A, CPU_B, CPU_C, CPU_D, CPU_E, CPU_F, CPU_G, CPU_H, CPU_I, CPU_J);\r\n    //\r\n    const CPU_middle = document.createElement('div');\r\n    CPU_middle.classList.add('CPU_middle');\r\n    const CPU_board_numbers = document.createElement('li');\r\n    CPU_board_numbers.classList.add('CPU_board_numbers');\r\n    for (let i = 1; i <= 10; i++) {\r\n        const CPU_number = document.createElement('p');\r\n        CPU_number.textContent = i;\r\n        CPU_board_numbers.append(CPU_number);\r\n    }\r\n    const CPU_board_grid = document.createElement('div');\r\n    CPU_board_grid.classList.add('CPU_board_grid');\r\n\r\n    for (let i = 0; i < 100; i++) {\r\n        const cell = document.createElement('div');\r\n        cell.classList.add('CPU_cell');\r\n        CPU_board_grid.append(cell);\r\n    }\r\n\r\n    CPU_middle.append(CPU_board_numbers);\r\n    CPU_middle.append(CPU_board_grid);\r\n\r\n    //\r\n    const CPU_bottom = document.createElement('div');\r\n    CPU_bottom.classList.add('CPU_bottom');\r\n\r\n    const CPU_text = document.createElement('h2');\r\n    CPU_text.textContent = 'Enemy:';\r\n    CPU_text.classList.add('CPU_text');\r\n\r\n    CPU_bottom.append(CPU_text);\r\n\r\n    const carrierICON = document.createElement('img');\r\n    carrierICON.classList.add('carrierICON');\r\n    carrierICON.src = __webpack_require__(/*! ./imgs/CarrierPixel.svg */ \"./src/imgs/CarrierPixel.svg\");\r\n\r\n    const battleshipICON = document.createElement('img');\r\n    battleshipICON.classList.add('battleshipICON');\r\n    battleshipICON.src = __webpack_require__(/*! ./imgs/battleshipPixel.svg */ \"./src/imgs/battleshipPixel.svg\");\r\n\r\n    const cruiserICON = document.createElement('img');\r\n    cruiserICON.classList.add('cruiserICON');\r\n    cruiserICON.src = __webpack_require__(/*! ./imgs/cruiserPixel.svg */ \"./src/imgs/cruiserPixel.svg\");\r\n\r\n    const submarineICON = document.createElement('img');\r\n    submarineICON.classList.add('submarineICON');\r\n    submarineICON.src = __webpack_require__(/*! ./imgs/submarinePixel.svg */ \"./src/imgs/submarinePixel.svg\");\r\n\r\n    const destroyerICON = document.createElement('img');\r\n    destroyerICON.classList.add('destroyerICON');\r\n    destroyerICON.src = __webpack_require__(/*! ./imgs/destroyerPixel.svg */ \"./src/imgs/destroyerPixel.svg\");\r\n\r\n\r\n    const CPU_shipsHolder = document.createElement('div');\r\n    CPU_shipsHolder.classList.add('CPU_shipsHolder');\r\n    CPU_shipsHolder.append(carrierICON);\r\n    CPU_shipsHolder.append(battleshipICON);\r\n    CPU_shipsHolder.append(cruiserICON);\r\n    CPU_shipsHolder.append(submarineICON);\r\n    CPU_shipsHolder.append(destroyerICON);\r\n\r\n    cpuICONS = {\r\n        1: carrierICON,\r\n        2: battleshipICON,\r\n        3: cruiserICON,\r\n        4: submarineICON,\r\n        5: destroyerICON\r\n    }\r\n    \r\n\r\n    CPU_bottom.append(CPU_shipsHolder);\r\n\r\n    CPU_board.append(CPU_board_letters);\r\n    CPU_board.append(CPU_middle);\r\n    CPU_board.append(CPU_bottom);\r\n\r\n\r\n    boards.append(CPU_board);\r\n    \r\n    addCPUShips(CPUinf);\r\n}\r\nfunction addCPUShips(CPUinf){\r\n    const CELLS = document.querySelectorAll('.CPU_cell');\r\n\r\n    const carrier = document.createElement('img');\r\n    carrier.classList.add('carrierSVG');\r\n    carrier.src = __webpack_require__(/*! ./imgs/CarrierPixel.svg */ \"./src/imgs/CarrierPixel.svg\");\r\n\r\n    const battleship = document.createElement('img');\r\n    battleship.classList.add('battleshipSVG');\r\n    battleship.src = __webpack_require__(/*! ./imgs/battleshipPixel.svg */ \"./src/imgs/battleshipPixel.svg\");\r\n\r\n    \r\n    const cruiser = document.createElement('img');\r\n    cruiser.classList.add('cruiserSVG');\r\n    cruiser.src = __webpack_require__(/*! ./imgs/cruiserPixel.svg */ \"./src/imgs/cruiserPixel.svg\");\r\n\r\n    const submarine = document.createElement('img');\r\n    submarine.classList.add('submarineSVG');\r\n    submarine.src = __webpack_require__(/*! ./imgs/submarinePixel.svg */ \"./src/imgs/submarinePixel.svg\");\r\n\r\n    const destroyer = document.createElement('img');\r\n    destroyer.classList.add('destroyerSVG');\r\n    destroyer.src = __webpack_require__(/*! ./imgs/destroyerPixel.svg */ \"./src/imgs/destroyerPixel.svg\");\r\n\r\n    cpuSHIPS = {\r\n        1: carrier,\r\n        2: battleship,\r\n        3: cruiser,\r\n        4: submarine,\r\n        5: destroyer\r\n    }\r\n    \r\n\r\n    carrier.classList.add('hiddenSHIP');\r\n    battleship.classList.add('hiddenSHIP');\r\n    cruiser.classList.add('hiddenSHIP');\r\n    submarine.classList.add('hiddenSHIP');\r\n    destroyer.classList.add('hiddenSHIP');\r\n\r\n\r\n    CELLS[CPUinf[1].curPOS].append(carrier);\r\n    CELLS[CPUinf[1].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(CPUinf[1].direction == \"h\"){\r\n        CELLS[CPUinf[1].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[CPUinf[2].curPOS].append(battleship);\r\n    CELLS[CPUinf[2].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(CPUinf[2].direction == \"h\"){\r\n        CELLS[CPUinf[2].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[CPUinf[3].curPOS].append(cruiser);\r\n    CELLS[CPUinf[3].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(CPUinf[3].direction == \"h\"){\r\n        CELLS[CPUinf[3].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[CPUinf[4].curPOS].append(submarine);\r\n    CELLS[CPUinf[4].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(CPUinf[4].direction == \"h\"){\r\n        CELLS[CPUinf[4].curPOS].classList.add(\"rotate\");\r\n    }\r\n\r\n    CELLS[CPUinf[5].curPOS].append(destroyer);\r\n    CELLS[CPUinf[5].curPOS].addEventListener('mousedown', event => event.preventDefault());\r\n    if(CPUinf[5].direction == \"h\"){\r\n        CELLS[CPUinf[5].curPOS].classList.add(\"rotate\");\r\n    }\r\n    \r\n};\r\nfunction getCpuCells(){\r\n    const CELLS = document.querySelectorAll('.CPU_cell');\r\n    return CELLS;\r\n}\r\nfunction getCpuSHIPS(){\r\n    return cpuSHIPS;\r\n}\r\nfunction getCpuICONS(){\r\n    return cpuICONS;\r\n}\r\n\r\nfunction getPlayerCELLS(){\r\n    return playerCELLS;\r\n}\r\nfunction getPlayerICONS(){\r\n    return playerICONS;\r\n}\r\nmodule.exports = { addBoards, getCpuCells, getCpuSHIPS, getCpuICONS, getPlayerCELLS, getPlayerICONS};\n\n//# sourceURL=webpack://template-1/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__.e(/*! import() */ \"src_style_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./style.css */ \"./src/style.css\"));\r\n__webpack_require__.e(/*! import() */ \"src_mainboard_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./mainboard.css */ \"./src/mainboard.css\"));\r\nconst { addBoards, getCpuCells, getCpuSHIPS, getCpuICONS, getPlayerCELLS, getPlayerICONS} = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\r\n\r\nconsole.log(\"Working\");\r\nconst carrierSVG = document.querySelector(\".carrierSVG\");\r\nconst battleshipSVG = document.querySelector(\".battleshipSVG\");\r\nconst cruiserSVG = document.querySelector(\".cruiserSVG\");\r\nconst submarineSVG = document.querySelector(\".submarineSVG\");\r\nconst destroyerSVG = document.querySelector(\".destroyerSVG\");\r\n\r\nconst dragShipsMenu = document.querySelector(\"#dragShipsMenu\");\r\nconst resetBTN = document.querySelector(\".reset\");\r\nconst readyBTN = document.querySelector(\".ready\");\r\n\r\nconst dialog = document.querySelector(\"#WINdialog\");\r\n\r\nconst restartBTN = document.querySelector(\"#restartBTN\");\r\nlet victoryText = document.querySelector(\"#victoryText\"); \r\n\r\nrestartBTN.addEventListener(\"click\", () => {\r\n  location.reload();\r\n});\r\n\r\nlet curShip = carrierSVG;\r\nlet curShipID = 1;\r\nlet curShipLen = 5;\r\nlet curDirection = \"v\";\r\nconst TOGGLE_INTERVAL = 340; // Interval in milliseconds\r\n\r\n//TURNS\r\nlet curTurn = \"player\";\r\n\r\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.curHits = 0;\r\n    this.sunk = false;\r\n  }\r\n  hit() {\r\n    this.curHits++;\r\n    console.log(\"current Hits +1\");\r\n  }\r\n  isSunk() {\r\n    if (this.curHits == this.length) {\r\n      this.sunk = true;\r\n      console.log(\"SUNK\");\r\n    }\r\n  }\r\n}\r\nclass Gameboard {\r\n  constructor() {\r\n    this.board = [\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    ];\r\n  }\r\n  addShip(ship, row, column, direction, id) {\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (direction == \"h\") {\r\n        this.board[row][column + i] = id;\r\n      } else {\r\n        this.board[row + i][column] = id;\r\n      }\r\n    }\r\n    console.log(this.board);\r\n  }\r\n}\r\nconst myGameboard = new Gameboard();\r\n\r\n\r\nlet ships = {\r\n  1 : new Ship(5), //Carrier,\r\n  2 : new Ship(4), //Battleship,\r\n  3 : new Ship(3), //Destroyer\r\n  4 : new Ship(3), //Submarine,\r\n  5 : new Ship(2), //Destroyer\r\n};\r\nlet enemy_ships = {\r\n  1 : new Ship(5), //Carrier,\r\n  2 : new Ship(4), //Battleship,\r\n  3 : new Ship(3), //Destroyer\r\n  4 : new Ship(3), //Submarine,\r\n  5 : new Ship(2), //Destroyer\r\n};\r\n\r\nlet ALL_SHIPS_INF = {\r\n  1 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  },\r\n  2 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  },\r\n  3 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  },\r\n  4 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  },\r\n  5 : {\r\n    ship: null,\r\n    row: null,\r\n    column: null,\r\n    direction: null,\r\n    curPOS: null,\r\n    prevPOS: null,\r\n    id: null\r\n  }\r\n}\r\n\r\nconst CELLS = document.querySelectorAll(\".cell\");\r\n//RESET\r\nfunction resetShips(){\r\n  console.log(\"RESET\");\r\n  const shipBlocks = document.querySelectorAll(\".shipBLOCK\");\r\n  shipBlocks[0].appendChild(carrierSVG); \r\n  shipBlocks[1].appendChild(battleshipSVG);\r\n  shipBlocks[2].appendChild(cruiserSVG);\r\n  shipBlocks[3].appendChild(submarineSVG);\r\n  shipBlocks[4].appendChild(destroyerSVG);\r\n  for(let i = 0; i < CELLS.length; i++){\r\n    CELLS[i].classList.remove(\"inFront\");\r\n    CELLS[i].classList.remove(\"rotate\");\r\n    CELLS[i].classList.remove(\"colorChange\");\r\n    CELLS[i].classList.remove(\"outRange\");\r\n    CELLS[i].innerHTML = \"\";\r\n  }\r\n  ALL_SHIPS_INF = {\r\n    1 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    },\r\n    2 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    },\r\n    3 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    },\r\n    4 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    },\r\n    5 : {\r\n      ship: null,\r\n      row: null,\r\n      column: null,\r\n      direction: null,\r\n      curPOS: null,\r\n      prevPOS: null,\r\n      id: null\r\n    }\r\n  }\r\n  myGameboard.board  = [\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n  ];\r\n  console.log(myGameboard.board);\r\n\r\n}\r\nresetBTN.addEventListener(\"click\", resetShips);\r\n\r\nfunction checkShipsOnBoard(){\r\n  for(let i = 1; i < 6; i++){\r\n    if(ALL_SHIPS_INF[i].curPOS == null){\r\n      return false;\r\n    }\r\n  }\r\n  return true;\r\n}\r\n//ENEMYY\r\nfunction getRandomInt(min, max) {\r\n  return Math.floor(Math.random() * (max - min + 1)) + min;\r\n}\r\nfunction canPlaceEnemyShip(board, len, axis, x, y){\r\n  for (let i = 0; i < len; i++) {\r\n    if (axis == 1) {\r\n      //vertical\r\n      if((y+i) > 9 || board[x][y + i] == null || board[x][y + i] != 0){\r\n        return false;\r\n      } \r\n    }else if((x+i) > 9 || board[x + i][y] == null || board[x + i][y] != 0){\r\n      return false;\r\n    }\r\n  }\r\n  return true;\r\n};\r\nfunction addEnemyShip(board, len, axis, x, y, shipID){\r\n  for (let i = 0; i < len; i++) {\r\n    if (axis == 1) {\r\n      //vertical\r\n      board[x][y + i] = shipID;\r\n    } else {\r\n      board[x + i][y] = shipID;\r\n    }\r\n  }\r\n};\r\nfunction addRandomeEnemyShips(board, len, id){\r\n  let x = getRandomInt(0,9);\r\n  let y = getRandomInt(0,9);\r\n  let axis = getRandomInt(0,1); // y=1 x=0\r\n  while(!canPlaceEnemyShip(board, 5, axis, x, y)){\r\n    x = getRandomInt(0,9);\r\n    y = getRandomInt(0,9);\r\n    axis = getRandomInt(0,1);\r\n  }\r\n  enemyInfo[id].curPOS = ((x*10)+y);\r\n  enemyInfo[id].direction = (axis == 1) ? \"h\" : \"v\";\r\n  addEnemyShip(board, len, axis, x, y, id);\r\n}\r\nlet enemyInfo = {\r\n  1 : {\r\n    curPOS : null,\r\n    direction : null\r\n  },\r\n  2 : {\r\n    curPOS : null,\r\n    direction : null\r\n  },\r\n  3 : {\r\n    curPOS : null,\r\n    direction : null\r\n  },\r\n  4 : {\r\n    curPOS : null,\r\n    direction : null\r\n  },\r\n  5 : {\r\n    curPOS : null,\r\n    direction : null\r\n  }\r\n};\r\nfunction placeEnemyShips(){\r\n  let board = [\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n  ];\r\n  addRandomeEnemyShips(board, 5, 1); //adding carrier\r\n  addRandomeEnemyShips(board, 4, 2); //adding battleship\r\n  addRandomeEnemyShips(board, 3, 3); //adding cruiser\r\n  addRandomeEnemyShips(board, 3, 4); //adding submarine\r\n  addRandomeEnemyShips(board, 2, 5); //adding destroyer\r\n  return board;\r\n};\r\n\r\n\r\n\r\n\r\nclass Player {\r\n  constructor(myBoard, ships) {\r\n    this.board = myBoard;\r\n    this.remainingShips = 5;\r\n    this.shipsData = ships;\r\n  }\r\n  receiveAttack(row, column) {\r\n    if (this.board[row][column] != 0 && this.board[row][column] != \"x\") {\r\n      let id = this.board[row][column];\r\n      console.log(this.board[row][column]);\r\n      this.board[row][column] = \"x\";\r\n      console.log(\"hit\");\r\n      console.log(\"id:\" + id);\r\n      console.log(this.shipsData[id].curHits);\r\n      this.shipsData[id].hit();\r\n      this.shipsData[id].isSunk();\r\n      return {hit: true, sunked: this.shipsData[id].sunk, id: id};\r\n    } else {\r\n      console.log(\"miss\");\r\n      return {hit: false, sunked: false, id: null};\r\n    }\r\n  }\r\n}\r\n\r\nfunction getAvaiableCells(row, column){\r\n  let left = column-1;\r\n  let right = column+1;\r\n  let up = row-1;\r\n  let down = row+1;\r\n\r\n  let attacksAvaiables = [];\r\n\r\n  if(left >= 0 && avaiable.includes((row*10)+left)){      //try left\r\n    console.log(\"left able\");\r\n    attacksAvaiables.push({\"x\":row, \"y\":left, \"dir\": \"left\"});  \r\n  }\r\n  if(right <= 9 && avaiable.includes((row*10)+right)){ //try right\r\n    console.log(\"right able\");\r\n    attacksAvaiables.push({\"x\":row, \"y\":right , \"dir\": \"right\"});\r\n  }\r\n  if(up >= 0 && avaiable.includes((up*10)+column)){ //try up\r\n    console.log(\"up able\");\r\n    attacksAvaiables.push({\"x\":up, \"y\":column , \"dir\": \"up\"});\r\n  }  \r\n  if(down <= 9 && avaiable.includes((down*10)+column)){ //try down\r\n    console.log(\"down able\");\r\n    attacksAvaiables.push({\"x\":down, \"y\":column , \"dir\": \"down\"});\r\n  }\r\n  return attacksAvaiables;\r\n}\r\nfunction getRandomAvaibleAttack(){\r\n  const randomIndex = getRandomInt(0, avaiableCells.length-1);\r\n  let randomCell = avaiableCells[randomIndex];\r\n  avaiableCells.splice(randomIndex,1);\r\n  console.log(\"SELECTED: \" + randomCell.x + \" \" + randomCell.y);\r\n  console.log(avaiableCells);\r\n  return randomCell;\r\n}\r\n\r\nconsole.log(\"ENEMY BOARD:\");\r\nlet enemyBoard = placeEnemyShips();\r\nconsole.log(enemyBoard);\r\n\r\nlet realPlayer = new Player(myGameboard.board, ships);\r\n\r\nlet cpuPlayer = new Player(enemyBoard, enemy_ships);\r\nlet avaiable  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];\r\n\r\n\r\n//CPU\r\nlet playerCELLS = getPlayerCELLS();\r\nlet curAttackedShip = null;\r\nlet avaiableCells = [];\r\nlet curAxis = null; // x\r\nlet lastAttack = null; // data\r\n\r\n\r\n\r\nfunction randomAttackCPU(){\r\n  let randomPos = null;\r\n  let row = null;\r\n  let column = null; \r\n  randomPos = getRandomInt(0, avaiable.length-1);\r\n  let randomPosValue = avaiable[randomPos];\r\n  //row = Math.floor(i/10), column = Math.floor(i%10)\r\n  row = Math.floor(randomPosValue / 10);\r\n  column = Math.floor(randomPosValue % 10);\r\n  console.log(\"-------------------------------------------------\")\r\n  const playerAttackData = realPlayer.receiveAttack(row, column);\r\n  \r\n  avaiable.splice(randomPos, 1);\r\n  //CHECK\r\n  if(playerAttackData.hit){\r\n    //HIT\r\n    playerCELLS[((row*10)+column)].classList.add(\"fire\");\r\n    if(curAttackedShip == null){\r\n      curAttackedShip = {row : row, column : column};\r\n    }\r\n    if(playerAttackData.sunked){\r\n      //To read\r\n      curAttackedShip = null;\r\n      let icons = getPlayerICONS();\r\n      console.log(icons);\r\n      icons[playerAttackData.id].classList.add(\"sunkedICON\");\r\n      realPlayer.remainingShips--;\r\n      if(realPlayer.remainingShips == 0){\r\n        console.log(\"ENEMY WINS!\");\r\n        victoryText.textContent = \"Enemy won!\";\r\n        dialog.showModal();\r\n      }\r\n      nextAtack = null;\r\n    }else{\r\n      //-------------------------\r\n      console.log(\"planning...\");\r\n      console.log(\"x: \" + row + \" y: \" + column);\r\n      avaiableCells = getAvaiableCells(curAttackedShip.row, curAttackedShip.column) //get avaiable cells\r\n      \r\n    }\r\n  //NOT HIT\r\n  }else{\r\n    playerCELLS[((row*10)+column)].classList.add(\"clicked\");\r\n    nextAtack = null;\r\n  }\r\n}\r\n\r\n\r\nfunction cpuPlayTurn(){\r\n  console.log(avaiable);\r\n  console.log(avaiable.length);\r\n  if(curAttackedShip == null){\r\n    randomAttackCPU();\r\n  }else{\r\n    if(curAxis == null){\r\n      const attack = getRandomAvaibleAttack();\r\n      const attackData = realPlayer.receiveAttack(attack.x, attack.y);\r\n      avaiable.splice(avaiable.indexOf((attack.x*10)+attack.y), 1);\r\n      if(attackData.hit){\r\n        playerCELLS[((attack.x*10)+attack.y)].classList.add(\"fire\");\r\n        if(attackData.sunked){\r\n          let icons = getPlayerICONS();\r\n          icons[attackData.id].classList.add(\"sunkedICON\");\r\n          realPlayer.remainingShips--;\r\n          if(realPlayer.remainingShips == 0){\r\n            console.log(\"ENEMY WINS!\");\r\n            victoryText.textContent = \"Enemy won!\";\r\n            dialog.showModal();\r\n          }\r\n          curAttackedShip = null;\r\n        }else{ \r\n          if(attack.dir == \"left\" || attack.dir == \"right\"){\r\n            console.log(\"ship is in X axis\");\r\n            curAxis = \"x\";\r\n            lastAttack = {x: attack.x, y: attack.y, dir: attack.dir};\r\n          }else{\r\n            console.log(\"ship is in Y axis\");\r\n            curAxis = \"y\";\r\n            lastAttack = {x: attack.x, y: attack.y, dir: attack.dir};\r\n          }\r\n          \r\n          console.log(\"WORKED\");\r\n        }\r\n      \r\n      }else{\r\n        playerCELLS[((attack.x*10)+attack.y)].classList.add(\"clicked\");\r\n        console.log(\"NOT WORKED\");\r\n      }\r\n      if(avaiableCells.length == 0 && curAxis == null){\r\n        console.log(\"last try\");\r\n        curAttackedShip = null;\r\n      }\r\n    }else{\r\n      console.log(\"LAST ATTACK:\")\r\n      console.log(lastAttack);\r\n      if(curAxis = \"x\"){\r\n        //left\r\n        if(lastAttack.dir == \"left\"){\r\n          console.log(\"TRIYING TO ATTACK LEFT\")\r\n          if(lastAttack.y-1 >= 0 && avaiable.includes((lastAttack.x*10)+lastAttack.y-1)){\r\n            console.log(\"Able to attack left\");\r\n            avaiable.splice(avaiable.indexOf((lastAttack.x*10)+lastAttack.y-1), 1);\r\n            const attackData = realPlayer.receiveAttack(lastAttack.x, lastAttack.y-1);\r\n            if(attackData.hit){\r\n              playerCELLS[((lastAttack.x*10)+lastAttack.y-1)].classList.add(\"fire\");\r\n              if(attackData.sunked){\r\n                let icons = getPlayerICONS();\r\n                icons[attackData.id].classList.add(\"sunkedICON\");\r\n                curAxis = null;\r\n                curAttackedShip = null;\r\n                realPlayer.remainingShips--;\r\n                if(realPlayer.remainingShips == 0){\r\n                  console.log(\"ENEMY WINS!\");\r\n                  victoryText.textContent = \"Enemy won!\";\r\n                  dialog.showModal();\r\n                }\r\n              }else{\r\n                lastAttack = {x: lastAttack.x, y: lastAttack.y-1, dir:lastAttack.dir};\r\n              }\r\n            }else{\r\n              playerCELLS[((lastAttack.x*10)+lastAttack.y-1)].classList.add(\"clicked\");\r\n              curAxis = null;\r\n            }\r\n          }else{\r\n            console.log(\"NOT ABLE TO ATTACK LEFT\");\r\n            curAxis = null;\r\n            curAttackedShip = null;\r\n            randomAttackCPU();\r\n          }\r\n        }\r\n        //right\r\n        if(lastAttack.dir == \"right\"){\r\n          console.log(\"TRIYING TO ATTACK RIGHT\")\r\n          if(lastAttack.y+1 <= 9 && avaiable.includes((lastAttack.x*10)+lastAttack.y+1)){\r\n            console.log(\"Able to attack right\");\r\n            avaiable.splice(avaiable.indexOf((lastAttack.x*10)+lastAttack.y+1), 1);\r\n            const attackData = realPlayer.receiveAttack(lastAttack.x, lastAttack.y+1);\r\n            if(attackData.hit){\r\n              playerCELLS[((lastAttack.x*10)+lastAttack.y+1)].classList.add(\"fire\");\r\n              if(attackData.sunked){\r\n                let icons = getPlayerICONS();\r\n                icons[attackData.id].classList.add(\"sunkedICON\");\r\n                curAxis = null;\r\n                curAttackedShip = null;\r\n                realPlayer.remainingShips--;\r\n                if(realPlayer.remainingShips == 0){\r\n                  console.log(\"ENEMY WINS!\");\r\n                  victoryText.textContent = \"Enemy won!\";\r\n                  dialog.showModal();\r\n                }\r\n              }else{\r\n                lastAttack = {x: lastAttack.x, y: lastAttack.y+1, dir:lastAttack.dir};\r\n              }\r\n            }else{\r\n              playerCELLS[((lastAttack.x*10)+lastAttack.y+1)].classList.add(\"clicked\");\r\n              curAxis = null;\r\n            }\r\n          }else{\r\n            console.log(\"NOT ABLE TO ATTACK RIGHT\");\r\n            curAxis = null;\r\n            curAttackedShip = null;\r\n            randomAttackCPU();\r\n          }\r\n        }\r\n      }\r\n\r\n    }\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n    \r\n    \r\n  }\r\n  curTurn = \"player\";\r\n}\r\n\r\nfunction ready(){\r\n  if(checkShipsOnBoard()){\r\n    console.log(\"READY\");\r\n    console.log(\"FINAL BOARD:\");\r\n    console.log(myGameboard.board);\r\n    console.log(ALL_SHIPS_INF);\r\n    dragShipsMenu.remove();\r\n    addBoards(ALL_SHIPS_INF, enemyInfo);\r\n    let CPU_cells = getCpuCells();\r\n    for(let i = 0; i < CPU_cells.length; i++){\r\n      CPU_cells[i].addEventListener(\"click\", () =>{\r\n        //\r\n        if(curTurn==\"player\"){\r\n          let x = Math.floor(i / 10);\r\n          let y = i % 10;\r\n          const CPUattackData = cpuPlayer.receiveAttack(x, y);\r\n          if(CPUattackData.hit){\r\n            CPU_cells[i].classList.add(\"fire\");\r\n            if(CPUattackData.sunked){\r\n              let cpuSHIPS = getCpuSHIPS();\r\n              let cpuICONS = getCpuICONS();\r\n              cpuSHIPS[CPUattackData.id].classList.remove(\"hiddenSHIP\");\r\n              cpuSHIPS[CPUattackData.id].classList.add(\"sunked\");\r\n              cpuSHIPS[CPUattackData.id].classList.add(\"inFront\");\r\n\r\n              cpuICONS[CPUattackData.id].classList.add(\"sunkedICON\");\r\n              cpuPlayer.remainingShips--;\r\n              if(cpuPlayer.remainingShips == 0){\r\n                console.log(\"YOU WIN\");\r\n                victoryText.textContent = \"You won!\";\r\n                dialog.showModal();\r\n              }\r\n            }\r\n            \r\n          }else{\r\n            CPU_cells[i].classList.add(\"clicked\");\r\n          }\r\n          curTurn = \"cpu\";\r\n          //CPU TURN\r\n          cpuPlayTurn();\r\n        }\r\n        //\r\n      });\r\n    }\r\n  }else{\r\n    console.log(\"NOT READY\");\r\n  }\r\n  \r\n}\r\nreadyBTN.addEventListener(\"click\", ready);\r\n\r\n\r\nfunction startingDrag(ship){\r\n  console.log(ALL_SHIPS_INF[curShipID]);\r\n  if(ALL_SHIPS_INF[curShipID].direction!=null){\r\n    console.log(\"----\");\r\n    curDirection = ALL_SHIPS_INF[curShipID].direction;\r\n  }else{\r\n    curDirection = \"v\";\r\n  }\r\n  ALL_SHIPS_INF[curShipID].prevPOS = ALL_SHIPS_INF[curShipID].curPOS;\r\n  if(ALL_SHIPS_INF[curShipID].curPOS!=null){\r\n    ship.classList.add(\"hidden\");\r\n  }\r\n  if(ALL_SHIPS_INF[curShipID].prevPOS!=null){\r\n    CELLS[ALL_SHIPS_INF[curShipID].prevPOS].classList.remove(\"inFront\");\r\n  }\r\n  ship.classList.add(\"dragging\");\r\n  const dragginShip = document.querySelector(\".dragging\");\r\n    setTimeout(() => {\r\n        dragginShip.classList.add('dragging');\r\n        dragginShip.style.pointerEvents = 'none'; // Desactiva los eventos del puntero para el elemento arrastrado\r\n      }, 0);\r\n}\r\nfunction dragEnding(ship){\r\n  ship.classList.remove(\"hidden\");\r\n  ship.classList.remove(\"dragging\");\r\n  ship.style.pointerEvents = '';\r\n  if(ALL_SHIPS_INF[curShipID].curPOS!=null){\r\n    CELLS[ALL_SHIPS_INF[curShipID].curPOS].classList.add(\"inFront\");\r\n  }\r\n}\r\n\r\n//add event listeners to all ships\r\ncarrierSVG.addEventListener(\"dragstart\", (event) => {\r\n  event.dataTransfer.effectAllowed = 'all';\r\n  curShip = carrierSVG;\r\n  curShipLen = 5;\r\n  curShipID = 1;\r\n  startingDrag(carrierSVG);\r\n  \r\n});\r\n//DRAG EVENT\r\nlet carrierLastToggleTime = 0;\r\ncarrierSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - carrierLastToggleTime > TOGGLE_INTERVAL) {\r\n    carrierLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n  }\r\n});\r\n\r\n\r\ncarrierSVG.addEventListener(\"dragend\", () => {\r\n  dragEnding(carrierSVG);\r\n});\r\n\r\n\r\nbattleshipSVG.addEventListener(\"dragstart\", () => {\r\n  curShip = battleshipSVG;\r\n  curShipLen = 4;\r\n  curShipID = 2;\r\n  startingDrag(battleshipSVG);\r\n});\r\n//DRAG EVENT\r\nlet battleshipLastToggleTime = 0;\r\nbattleshipSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - battleshipLastToggleTime > TOGGLE_INTERVAL) {\r\n    battleshipLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n  }\r\n});\r\n\r\nbattleshipSVG.addEventListener(\"dragend\", () => {\r\n  dragEnding(battleshipSVG);\r\n});\r\n\r\ncruiserSVG.addEventListener(\"dragstart\", () => {\r\n  curShip = cruiserSVG;\r\n  curShipLen = 3;\r\n  curShipID = 3;\r\n  startingDrag(cruiserSVG);\r\n});\r\n//DRAG EVENT\r\nlet cruiserLastToggleTime = 0;\r\ncruiserSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - cruiserLastToggleTime > TOGGLE_INTERVAL) {\r\n    cruiserLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n  }\r\n});\r\ncruiserSVG.addEventListener(\"dragend\", () => {  \r\n  dragEnding(cruiserSVG);\r\n});\r\n\r\n\r\nsubmarineSVG.addEventListener(\"dragstart\", () => {\r\n  curShip = submarineSVG;\r\n  curShipLen = 3;\r\n  curShipID = 4;\r\n  startingDrag(submarineSVG);\r\n});\r\n\r\n//DRAG EVENT\r\nlet SubMarineLastToggleTime = 0;\r\nsubmarineSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - SubMarineLastToggleTime > TOGGLE_INTERVAL) {\r\n    SubMarineLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n  }\r\n});\r\n\r\nsubmarineSVG.addEventListener(\"dragend\", () => {\r\n  dragEnding(submarineSVG);\r\n});\r\n\r\n\r\ndestroyerSVG.addEventListener(\"dragstart\", () => {\r\n  curShip = destroyerSVG;\r\n  curShipLen = 2;\r\n  curShipID = 5;\r\n  startingDrag(destroyerSVG);\r\n});\r\n//DRAG EVENT\r\nlet destroyerLastToggleTime = 0;\r\ndestroyerSVG.addEventListener('drag', (event) => {\r\n  const currentTime = Date.now();\r\n  if (event.shiftKey && currentTime - destroyerLastToggleTime > TOGGLE_INTERVAL) {\r\n    destroyerLastToggleTime = currentTime;\r\n    if (curDirection == \"v\") {\r\n      curDirection = \"h\";\r\n    } else {\r\n      curDirection = \"v\";\r\n    }\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n  }\r\n});\r\ndestroyerSVG.addEventListener(\"dragend\", () => {\r\n  dragEnding(destroyerSVG);\r\n});\r\n\r\n\r\n//add event listeners to cells\r\nfunction checkIfCanDrop(length, pos, direction){\r\n  if(direction == \"v\"){\r\n    let f = pos;\r\n    for (let i = 0; i < length; i++) {\r\n      if(CELLS[f] != null && (myGameboard.board[Math.floor(f/10)][Math.floor(f%10)] == 0 || myGameboard.board[Math.floor(f/10)][Math.floor(f%10)] == curShipID)){\r\n        f+=10;\r\n      }else{\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }else{\r\n    if(pos + length > 100){\r\n      return false;\r\n    }\r\n    if(myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != 0 && myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != curShipID){\r\n      return false;\r\n    }\r\n    if(pos.toString()[pos.toString().length-1] == \"9\"){\r\n      return false;\r\n    }else{\r\n      for(let i = 0; i < length-1; i++){\r\n        pos++;\r\n        if(CELLS[pos] == null || pos.toString()[pos.toString().length-1]==\"0\" || (myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != 0 && myGameboard.board[Math.floor(pos/10)][Math.floor(pos%10)] != curShipID)){\r\n          return false;\r\n        }\r\n      }\r\n      return true;\r\n    }\r\n  }\r\n  \r\n}\r\n//\r\nlet actualCubes = [];\r\nlet errorCubes = [];\r\nlet canDrop = true;\r\n\r\nfunction highLightCells(length, pos, direction){\r\n  if(direction == \"v\"){\r\n    let f = pos;\r\n    for (let i = 0; i < length; i++) {\r\n      actualCubes.push(f);\r\n      CELLS[f].classList.add(\"colorChange\");\r\n      f+=10;\r\n    }\r\n  }else{\r\n    for (let i = 0; i < length; i++) {\r\n      actualCubes.push(pos);\r\n      CELLS[pos].classList.add(\"colorChange\");\r\n      pos++;\r\n    }\r\n  }\r\n}\r\nfunction highErrorCells(pos, direction){\r\n  if(direction == \"v\"){\r\n    let i=pos;\r\n    while(CELLS[i] != null && myGameboard.board[Math.floor(i/10)][Math.floor(i%10)] == 0){\r\n      errorCubes.push(i);\r\n      CELLS[i].classList.add(\"outRange\");\r\n      i+=10;\r\n    }\r\n  }else{\r\n    let i = pos;\r\n    let column = Math.floor(i%10);\r\n    let row = Math.floor(i/10);\r\n    while(CELLS[i] != null && i.toString()[i.toString().length-1]!=\"0\" && (myGameboard.board[row][column] == 0 || myGameboard.board[column][row] == curShipID)){\r\n        errorCubes.push(i);\r\n        CELLS[i].classList.add(\"outRange\");\r\n        i++;\r\n        column = Math.floor(i%10);\r\n        row = Math.floor(i/10);\r\n    }\r\n  }\r\n}\r\n\r\nfor(let i = 0; i < CELLS.length; i++) {\r\n  CELLS[i].addEventListener(\"dragover\", (e) => {\r\n    e.preventDefault();\r\n    canDrop = true;\r\n    let f = i;\r\n    actualCubes = [];\r\n    if(checkIfCanDrop(curShipLen, i, curDirection)){\r\n      highLightCells(curShipLen, i, curDirection);\r\n      canDrop = true;\r\n    }else{\r\n      //Highlight the cells that are out of range\r\n      canDrop = false;\r\n      errorCubes = [];\r\n      highErrorCells(i, curDirection);\r\n    }\r\n  });\r\n\r\n  //Remove the highlight\r\n  function removeHighlight(){\r\n    for(let i = 0; i < actualCubes.length; i++){\r\n      CELLS[actualCubes[i]].classList.remove(\"colorChange\");\r\n    }\r\n  }\r\n\r\n  function removeErrorHighlight(){\r\n    for(let i = 0; i < errorCubes.length; i++){\r\n      CELLS[errorCubes[i]].classList.remove(\"outRange\");\r\n    }\r\n  }\r\n//Remove the highlight when the mouse leaves the cell\r\n  CELLS[i].addEventListener(\"dragleave\", () => {\r\n    removeHighlight();\r\n    removeErrorHighlight();\r\n  });\r\n  \r\n  CELLS[i].addEventListener(\"drop\", () => {\r\n    if(canDrop == true){\r\n      if(ALL_SHIPS_INF[curShipID].id != null){\r\n        myGameboard.addShip(ALL_SHIPS_INF[curShipID].ship, ALL_SHIPS_INF[curShipID].row, ALL_SHIPS_INF[curShipID].column, ALL_SHIPS_INF[curShipID].direction, 0);\r\n      }\r\n      myGameboard.addShip(ships[curShipID], row = Math.floor(i/10), column = Math.floor(i%10), curDirection, curShipID);\r\n      CELLS[i].classList.add(\"inFront\");\r\n      ALL_SHIPS_INF[curShipID] = {\r\n        ship: ships[curShipID],\r\n        row: Math.floor(i/10),\r\n        column: Math.floor(i%10),\r\n        direction: curDirection,\r\n        id: curShipID\r\n      }\r\n      ALL_SHIPS_INF[curShipID].curPOS = i;\r\n      CELLS[i].classList.add(\"inFront\");\r\n      if(curDirection==\"h\"){\r\n        CELLS[i].classList.add(\"rotate\");\r\n      }else{\r\n        CELLS[i].classList.remove(\"rotate\");\r\n      }\r\n      CELLS[i].appendChild(curShip);\r\n      curShip.classList.remove(\"hidden\");\r\n      removeHighlight();\r\n    }else{\r\n      removeErrorHighlight();\r\n    }\r\n  });\r\n}\r\n//\n\n//# sourceURL=webpack://template-1/./src/index.js?");

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