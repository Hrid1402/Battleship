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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__.e(/*! import() */ \"src_style_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./style.css */ \"./src/style.css\"));\r\nconsole.log(\"Working\");\r\nconst carrierSVG = document.querySelector(\".carrierSVG\");\r\nconst CELLS = document.querySelectorAll(\".cell\");\r\n\r\n\r\ncarrierSVG.addEventListener(\"dragstart\", () => {\r\n    carrierSVG.classList.add(\"dragging\");\r\n    const dragginShip = document.querySelector(\".dragging\");\r\n    setTimeout(() => {\r\n        dragginShip.classList.add('dragging');\r\n        dragginShip.style.pointerEvents = 'none'; // Desactiva los eventos del puntero para el elemento arrastrado\r\n      }, 0);\r\n    //carrierSVG.remove();\r\n});\r\ncarrierSVG.addEventListener(\"dragend\", () => {\r\n    carrierSVG.classList.remove(\"dragging\");\r\n    carrierSVG.style.pointerEvents = '';\r\n});\r\nlet canDrop = true;\r\nfor(let i = 0; i < CELLS.length; i++) {\r\n  let actualCubes = [];\r\n  let errorCubes = [];\r\n  CELLS[i].addEventListener(\"dragover\", (e) => {\r\n    e.preventDefault();\r\n    const shipLen = 5;\r\n    const endShip = i + (shipLen*10-10);\r\n    if(CELLS[endShip] == null){\r\n      canDrop = false;\r\n      let f=i;\r\n      errorCubes = [];\r\n      while(CELLS[f] != null){\r\n        errorCubes.push(f);\r\n        CELLS[f].classList.add(\"outRange\");\r\n        f+=10;\r\n      }\r\n    }else{\r\n      canDrop = true;\r\n      let f = i;\r\n      actualCubes = [];\r\n      for(let j = 0; j < shipLen; j++){\r\n        actualCubes.push(f);\r\n        CELLS[f].classList.add(\"colorChange\");\r\n        f+=10;\r\n      }\r\n      CELLS[endShip].classList.add(\"colorChange\");\r\n    }\r\n  });\r\n\r\n  CELLS[i].addEventListener(\"dragleave\", () => {\r\n    for(let i = 0; i < errorCubes.length; i++){\r\n      CELLS[errorCubes[i]].classList.remove(\"outRange\");\r\n    }\r\n    for(let i = 0; i < actualCubes.length; i++){\r\n      CELLS[actualCubes[i]].classList.remove(\"colorChange\");\r\n    }\r\n  });\r\n  \r\n  CELLS[i].addEventListener(\"drop\", () => {\r\n    if(canDrop == true){\r\n      CELLS[i].appendChild(carrierSVG);\r\n      CELLS[i].classList.add(\"inFront\");\r\n    }else{\r\n      for(let i = 0; i < errorCubes.length; i++){\r\n        CELLS[errorCubes[i]].classList.remove(\"outRange\");\r\n      }\r\n    }\r\n  });\r\n\r\n}\r\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.curHits = 0;\r\n    this.sunk = false;\r\n  }\r\n  hit() {\r\n    this.curHits++;\r\n    console.log(\"current Hits +1\");\r\n  }\r\n  isSunk() {\r\n    if (this.curHits == this.length) {\r\n      this.sunk = true;\r\n      console.log(\"SUNK\");\r\n    }\r\n  }\r\n}\r\nclass Gameboard {\r\n  constructor() {\r\n    this.board = [\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n    ];\r\n  }\r\n  receiveAttack(row, column) {\r\n    if (this.board[row][column] == 1) {\r\n      this.board[row][column] = \"x\";\r\n      console.log(\"hit\");\r\n      console.log(ships[1].curHits);\r\n      ships[1].hit();\r\n      ships[1].isSunk();\r\n    } else {\r\n      console.log(\"miss\");\r\n    }\r\n  }\r\n  addShip(ship, row, column, direction) {\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (direction == \"h\") {\r\n        this.board[row][column + i] = 1;\r\n      } else {\r\n        this.board[row + i][column] = 1;\r\n      }\r\n    }\r\n    console.log(this.board);\r\n  }\r\n}\r\nconst myGameboard = new Gameboard();\r\nship1 = new Ship(5); //Carrier\r\nship2 = new Ship(4); //Battleship\r\nship3 = new Ship(3); //Cruiser\r\nship4 = new Ship(3); //Submarine\r\nship5 = new Ship(2); //Destroyer\r\nlet ships = {\r\n    1 : ship1,\r\n    2 : ship2,\r\n    3 : ship3,\r\n    4 : ship4,\r\n    5 : ship5\r\n};\r\nmyGameboard.addShip(ships[1], (row = 4), (column = 0), \"v\");\r\nmyGameboard.addShip(new Ship(4), (row = 0), (column = 0), \"h\");\r\nmyGameboard.receiveAttack(0, 0);\r\n//console.log(myGameboard.board);\r\n\n\n//# sourceURL=webpack://template-1/./src/index.js?");

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