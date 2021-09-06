/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: #ea4;\n    \n}\n\n.flex-container {\n    display: flex;\n    justify-content: center;\n}\n.flex-container > div {\n    margin: 2em 3em;\n}\n\n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(10,20px);\n    grid-template-rows: repeat(10,20px);\n}\n\n.grid-container > div {\n    border: solid 1px;\n}\n\ndiv.black {\n    background-color: #000;\n}\ndiv.hit {\n    background-color: #f48;\n}\ndiv.empty-hit {\n    background-color: #38f;\n}\n\n.button-container {\n    text-align: center;\n}\n\n.button-container.hidden {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;;AAE1B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["body {\n    background-color: #ea4;\n    \n}\n\n.flex-container {\n    display: flex;\n    justify-content: center;\n}\n.flex-container > div {\n    margin: 2em 3em;\n}\n\n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(10,20px);\n    grid-template-rows: repeat(10,20px);\n}\n\n.grid-container > div {\n    border: solid 1px;\n}\n\ndiv.black {\n    background-color: #000;\n}\ndiv.hit {\n    background-color: #f48;\n}\ndiv.empty-hit {\n    background-color: #38f;\n}\n\n.button-container {\n    text-align: center;\n}\n\n.button-container.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js_modules/dom_module.js":
/*!**************************************!*\
  !*** ./src/js_modules/dom_module.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateGrid10": () => (/* binding */ generateGrid10),
/* harmony export */   "addButtonHandler": () => (/* binding */ addButtonHandler)
/* harmony export */ });
const specialClickHandler = (element, player, x, y, gameBoard, changeTurn) => {
  ["click", "mouseenter"].forEach((event) =>
    element.addEventListener(event, () => {
      const winnerExist = gameBoard.isFleetSunk();
      if (player.getTurn() && !winnerExist) {
        const valid = player.play(x, y);
        if (valid) changeTurn();
        if (gameBoard.shipBoard[x][y]) {
          element.classList.remove("black");
          element.classList.add("hit");
        } else element.classList.add("empty-hit");
      }
    })
  );
};

const generateGrid10 = (parent, gameBoard, player, changeTurn) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const gridElement = document.createElement("div");
      if (gameBoard.shipBoard[i][j]) gridElement.classList.add("black");
      specialClickHandler(gridElement, player, i, j, gameBoard, changeTurn);
      parent.appendChild(gridElement);
      const { gridBoard } = gameBoard;
      gridBoard[i][j] = gridElement;
    }
  }
};

const addButtonHandler = (element, init) => {
  element.addEventListener("click", init);
};




/***/ }),

/***/ "./src/js_modules/gameboard.js":
/*!*************************************!*\
  !*** ./src/js_modules/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
GAMEBOARD MODULE 

Shooting Board = to record the shooting coordinates, it's not legal to shoot the same coordinate twice 
Ship Board = to record the deployed ship coordinates
*/

// import Ship from "./ship";

const Gameboard = (fleet) => {
  // const fleet = [];
  const dimension = 10;
  let shootingBoard = Array.from(Array(dimension), () =>
    new Array(dimension).fill(false)
  );
  let shipBoard = Array.from(Array(dimension), () => new Array(dimension));
  const gridBoard = Array.from(Array(dimension), () => new Array(dimension));

  // Reset board function, assigned empty board
  const reset = () => {
    shootingBoard = Array.from(Array(dimension), () =>
      new Array(dimension).fill(false)
    );
    shipBoard = Array.from(Array(dimension), () => new Array(dimension));
  };

  const deployShip = (ship, origin, orientation) => {
    const { length } = ship;
    const [x, y] = origin;
    if (orientation === "vertical") {
      for (let i = x; i < x + length; i += 1) {
        shipBoard[i][y] = { ship, position: i - x };
      }
    } else if (orientation === "horizontal") {
      for (let i = y; i < y + length; i += 1) {
        shipBoard[x][i] = { ship, position: i - y };
      }
    }
    // fleet.push(ship);
  };

  const deployFleet = (coordinates, orientation) => {
    fleet.forEach((ship) => {
      const index = fleet.indexOf(ship);
      deployShip(ship, coordinates[index], orientation);
    });
  };

  // Board-receive-attack validator. Mark coordinate as true and then return true if shooting coordinate is valid
  const receiveAttack = (x, y) => {
    if (shootingBoard[x][y] === true) return false;
    shootingBoard[x][y] = true;
    if (shipBoard[x][y]) {
      const { ship, position } = shipBoard[x][y];
      ship.hit(position);
    }
    return true;
  };

  const isFleetSunk = () => {
    if (fleet.every((ship) => ship.isSunk())) return true;
    return false;
  };

  return {
    shipBoard,
    shootingBoard,
    gridBoard,
    deployShip,
    deployFleet,
    receiveAttack,
    isFleetSunk,
    reset,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/js_modules/player.js":
/*!**********************************!*\
  !*** ./src/js_modules/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Player = (isHumanArg, opponentBoard) => {
  const state = { turn: false };
  const isHuman = isHumanArg;

  const getTurn = () => state.turn;
  const setTurn = (val) => {
    state.turn = val;
  };
  const toggleTurn = () => {
    const newState = !state.turn;
    state.turn = newState;
  };

  const play = (x, y) => {
    const isValidHit = opponentBoard.receiveAttack(x, y);
    return isValidHit;
  };

  const computerPlay = () => {
    let eligibleSquaresCount;
    const randomHit = () => {
      const random = Math.floor(Math.random() * 10);
      const row = [...opponentBoard.shootingBoard[random].keys()];
      const rowFiltered = row.filter((el) => {
        const index = row.indexOf(el);
        const shootingSquare = [...opponentBoard.shootingBoard[random]][index];
        return shootingSquare !== true;
      });
      eligibleSquaresCount = rowFiltered.length;
      const choice = Math.floor(Math.random() * eligibleSquaresCount);
      // console.log(rowFiltered);
      const index = rowFiltered[choice];
      return { random, index };
    };
    let random;
    let index;
    let limit = 0;
    while (!Number.isInteger(index) && limit < 10) {
      const coordinate = randomHit();
      index = coordinate.index;
      random = coordinate.random;
      limit += 1;
      // console.log("while was called, row: ", random, ", index: ", index);
    }
    // console.log(random, index, Number.isInteger(index + 1));
    // play(random, index);
    opponentBoard.gridBoard[random][index].click();
    // index = 0;
  };

  return {
    opponentBoard,
    getTurn,
    setTurn,
    toggleTurn,
    isHuman,
    play,
    computerPlay,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/js_modules/ship.js":
/*!********************************!*\
  !*** ./src/js_modules/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (inputLength) => {
  const length = inputLength;
  const bodyHit = Array(length).fill(false);

  const hit = (position) => {
    bodyHit[position] = true;
  };

  const isSunk = () => bodyHit.every((position) => position === true);

  return {length, hit, isSunk}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);




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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_modules_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_modules/player */ "./src/js_modules/player.js");
/* harmony import */ var _js_modules_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_modules/gameboard */ "./src/js_modules/gameboard.js");
/* harmony import */ var _js_modules_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_modules/ship */ "./src/js_modules/ship.js");
/* harmony import */ var _js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js_modules/dom_module */ "./src/js_modules/dom_module.js");







const gameHelper = () => {
  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne.opponentBoard.isFleetSunk()) return playerOne;
    if (playerTwo.opponentBoard.isFleetSunk()) return playerTwo;
    return false;
  };

  const displayWinner = (winner) => {
    document.querySelector(".button-container").classList.remove("hidden");
    document.querySelector(".btn-play").textContent = "Play Again";
    document.querySelector(
      ".winner-announcement"
    ).textContent = `${winner.title} Win`;
  };

  const resetDisplayWinner = () => {
    document.querySelector(".button-container").classList.add("hidden");
  };

  const changeTurn = (playerOne, playerTwo) => {
    const winner = checkWinner(playerOne, playerTwo);
    // console.log(winner.title);
    if (winner) {
      displayWinner(winner);
    } else {
      playerOne.toggleTurn();
      playerTwo.toggleTurn();
      if (playerTwo.getTurn()) {
        playerTwo.computerPlay();
        if (winner) {
          displayWinner(winner);
        }
      }
    }
  };

  return { checkWinner, displayWinner, changeTurn, resetDisplayWinner };
};

const gameLoop = (() => {
  const coordinatesOne = [
    [3, 0],
    [2, 5],
    [4, 3],
    [5, 6],
    [3, 8],
  ];
  const coordinatesTwo = [
    [1, 3],
    [2, 5],
    [4, 3],
    [5, 6],
    [3, 2],
  ];

  let boardOne;
  let boardTwo;
  let player;
  let computer;

  const init = () => {
    const fleetOne = [(0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(2), (0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(3), (0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(3), (0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(4), (0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(5)];
    const fleetTwo = [(0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(2), (0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(3), (0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(3), (0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(4), (0,_js_modules_ship__WEBPACK_IMPORTED_MODULE_3__.default)(5)];
    boardOne = (0,_js_modules_gameboard__WEBPACK_IMPORTED_MODULE_2__.default)(fleetOne);
    boardTwo = (0,_js_modules_gameboard__WEBPACK_IMPORTED_MODULE_2__.default)(fleetTwo);
    [player, computer] = [(0,_js_modules_player__WEBPACK_IMPORTED_MODULE_1__.default)(true, boardTwo), (0,_js_modules_player__WEBPACK_IMPORTED_MODULE_1__.default)(false, boardOne)];
    player.title = "You";
    computer.title = "Computer";

    boardOne.deployFleet(coordinatesOne, "vertical");
    boardTwo.deployFleet(coordinatesTwo, "horizontal");
    const [gridOne, gridTwo] =
      document.getElementsByClassName("grid-container");

    const { changeTurn, resetDisplayWinner } = gameHelper();
    (0,_js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__.generateGrid10)(gridOne, boardOne, computer, () => {
      changeTurn(player, computer);
    });
    (0,_js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__.generateGrid10)(gridTwo, boardTwo, player, () => {
      changeTurn(player, computer);
    });
    resetDisplayWinner();
    player.setTurn(true);
  };

  return { init };
})();

document.querySelector(".btn-play").addEventListener("click", gameLoop.init);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanNfbW9kdWxlcy9kb21fbW9kdWxlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanNfbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qc19tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzX21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsNkJBQTZCLFNBQVMscUJBQXFCLG9CQUFvQiw4QkFBOEIsR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUcscUJBQXFCLG9CQUFvQiw2Q0FBNkMsMENBQTBDLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLGVBQWUsNkJBQTZCLEdBQUcsV0FBVyw2QkFBNkIsR0FBRyxpQkFBaUIsNkJBQTZCLEdBQUcsdUJBQXVCLHlCQUF5QixHQUFHLDhCQUE4QixvQkFBb0IsR0FBRyxPQUFPLGdGQUFnRixhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFV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QUFrQiwyREFBTTtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsaUNBQWlDO0FBQzVDLElBQUksc0VBQWM7QUFDbEI7QUFDQSxLQUFLO0FBQ0wsSUFBSSxzRUFBYztBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUM7O0FBRUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTQ7XFxuICAgIFxcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZsZXgtY29udGFpbmVyID4gZGl2IHtcXG4gICAgbWFyZ2luOiAyZW0gM2VtO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwyMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMjBweCk7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4O1xcbn1cXG5cXG5kaXYuYmxhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5kaXYuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ODtcXG59XFxuZGl2LmVtcHR5LWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOGY7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lci5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0O1xcbiAgICBcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mbGV4LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIG1hcmdpbjogMmVtIDNlbTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDIwcHgpO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIgPiBkaXYge1xcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXG59XFxuXFxuZGl2LmJsYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuZGl2LmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDg7XFxufVxcbmRpdi5lbXB0eS1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhmO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHNwZWNpYWxDbGlja0hhbmRsZXIgPSAoZWxlbWVudCwgcGxheWVyLCB4LCB5LCBnYW1lQm9hcmQsIGNoYW5nZVR1cm4pID0+IHtcbiAgW1wiY2xpY2tcIiwgXCJtb3VzZWVudGVyXCJdLmZvckVhY2goKGV2ZW50KSA9PlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgY29uc3Qgd2lubmVyRXhpc3QgPSBnYW1lQm9hcmQuaXNGbGVldFN1bmsoKTtcbiAgICAgIGlmIChwbGF5ZXIuZ2V0VHVybigpICYmICF3aW5uZXJFeGlzdCkge1xuICAgICAgICBjb25zdCB2YWxpZCA9IHBsYXllci5wbGF5KHgsIHkpO1xuICAgICAgICBpZiAodmFsaWQpIGNoYW5nZVR1cm4oKTtcbiAgICAgICAgaWYgKGdhbWVCb2FyZC5zaGlwQm9hcmRbeF1beV0pIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJibGFja1wiKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH0gZWxzZSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1oaXRcIik7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlR3JpZDEwID0gKHBhcmVudCwgZ2FtZUJvYXJkLCBwbGF5ZXIsIGNoYW5nZVR1cm4pID0+IHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGdyaWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlmIChnYW1lQm9hcmQuc2hpcEJvYXJkW2ldW2pdKSBncmlkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYmxhY2tcIik7XG4gICAgICBzcGVjaWFsQ2xpY2tIYW5kbGVyKGdyaWRFbGVtZW50LCBwbGF5ZXIsIGksIGosIGdhbWVCb2FyZCwgY2hhbmdlVHVybik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ3JpZEVsZW1lbnQpO1xuICAgICAgY29uc3QgeyBncmlkQm9hcmQgfSA9IGdhbWVCb2FyZDtcbiAgICAgIGdyaWRCb2FyZFtpXVtqXSA9IGdyaWRFbGVtZW50O1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgYWRkQnV0dG9uSGFuZGxlciA9IChlbGVtZW50LCBpbml0KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXQpO1xufTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVHcmlkMTAsIGFkZEJ1dHRvbkhhbmRsZXIgfTtcbiIsIi8qXG5HQU1FQk9BUkQgTU9EVUxFIFxuXG5TaG9vdGluZyBCb2FyZCA9IHRvIHJlY29yZCB0aGUgc2hvb3RpbmcgY29vcmRpbmF0ZXMsIGl0J3Mgbm90IGxlZ2FsIHRvIHNob290IHRoZSBzYW1lIGNvb3JkaW5hdGUgdHdpY2UgXG5TaGlwIEJvYXJkID0gdG8gcmVjb3JkIHRoZSBkZXBsb3llZCBzaGlwIGNvb3JkaW5hdGVzXG4qL1xuXG4vLyBpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IChmbGVldCkgPT4ge1xuICAvLyBjb25zdCBmbGVldCA9IFtdO1xuICBjb25zdCBkaW1lbnNpb24gPSAxMDtcbiAgbGV0IHNob290aW5nQm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KGRpbWVuc2lvbiksICgpID0+XG4gICAgbmV3IEFycmF5KGRpbWVuc2lvbikuZmlsbChmYWxzZSlcbiAgKTtcbiAgbGV0IHNoaXBCb2FyZCA9IEFycmF5LmZyb20oQXJyYXkoZGltZW5zaW9uKSwgKCkgPT4gbmV3IEFycmF5KGRpbWVuc2lvbikpO1xuICBjb25zdCBncmlkQm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KGRpbWVuc2lvbiksICgpID0+IG5ldyBBcnJheShkaW1lbnNpb24pKTtcblxuICAvLyBSZXNldCBib2FyZCBmdW5jdGlvbiwgYXNzaWduZWQgZW1wdHkgYm9hcmRcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgc2hvb3RpbmdCb2FyZCA9IEFycmF5LmZyb20oQXJyYXkoZGltZW5zaW9uKSwgKCkgPT5cbiAgICAgIG5ldyBBcnJheShkaW1lbnNpb24pLmZpbGwoZmFsc2UpXG4gICAgKTtcbiAgICBzaGlwQm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KGRpbWVuc2lvbiksICgpID0+IG5ldyBBcnJheShkaW1lbnNpb24pKTtcbiAgfTtcblxuICBjb25zdCBkZXBsb3lTaGlwID0gKHNoaXAsIG9yaWdpbiwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgICBjb25zdCBbeCwgeV0gPSBvcmlnaW47XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHNoaXBCb2FyZFtpXVt5XSA9IHsgc2hpcCwgcG9zaXRpb246IGkgLSB4IH07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHNoaXBCb2FyZFt4XVtpXSA9IHsgc2hpcCwgcG9zaXRpb246IGkgLSB5IH07XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZsZWV0LnB1c2goc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgZGVwbG95RmxlZXQgPSAoY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgZmxlZXQuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBmbGVldC5pbmRleE9mKHNoaXApO1xuICAgICAgZGVwbG95U2hpcChzaGlwLCBjb29yZGluYXRlc1tpbmRleF0sIG9yaWVudGF0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBCb2FyZC1yZWNlaXZlLWF0dGFjayB2YWxpZGF0b3IuIE1hcmsgY29vcmRpbmF0ZSBhcyB0cnVlIGFuZCB0aGVuIHJldHVybiB0cnVlIGlmIHNob290aW5nIGNvb3JkaW5hdGUgaXMgdmFsaWRcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKHNob290aW5nQm9hcmRbeF1beV0gPT09IHRydWUpIHJldHVybiBmYWxzZTtcbiAgICBzaG9vdGluZ0JvYXJkW3hdW3ldID0gdHJ1ZTtcbiAgICBpZiAoc2hpcEJvYXJkW3hdW3ldKSB7XG4gICAgICBjb25zdCB7IHNoaXAsIHBvc2l0aW9uIH0gPSBzaGlwQm9hcmRbeF1beV07XG4gICAgICBzaGlwLmhpdChwb3NpdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGlzRmxlZXRTdW5rID0gKCkgPT4ge1xuICAgIGlmIChmbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNoaXBCb2FyZCxcbiAgICBzaG9vdGluZ0JvYXJkLFxuICAgIGdyaWRCb2FyZCxcbiAgICBkZXBsb3lTaGlwLFxuICAgIGRlcGxveUZsZWV0LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNGbGVldFN1bmssXG4gICAgcmVzZXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAoaXNIdW1hbkFyZywgb3Bwb25lbnRCb2FyZCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHsgdHVybjogZmFsc2UgfTtcbiAgY29uc3QgaXNIdW1hbiA9IGlzSHVtYW5Bcmc7XG5cbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHN0YXRlLnR1cm47XG4gIGNvbnN0IHNldFR1cm4gPSAodmFsKSA9PiB7XG4gICAgc3RhdGUudHVybiA9IHZhbDtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlVHVybiA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9ICFzdGF0ZS50dXJuO1xuICAgIHN0YXRlLnR1cm4gPSBuZXdTdGF0ZTtcbiAgfTtcblxuICBjb25zdCBwbGF5ID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBpc1ZhbGlkSGl0ID0gb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIHJldHVybiBpc1ZhbGlkSGl0O1xuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyUGxheSA9ICgpID0+IHtcbiAgICBsZXQgZWxpZ2libGVTcXVhcmVzQ291bnQ7XG4gICAgY29uc3QgcmFuZG9tSGl0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3Qgcm93ID0gWy4uLm9wcG9uZW50Qm9hcmQuc2hvb3RpbmdCb2FyZFtyYW5kb21dLmtleXMoKV07XG4gICAgICBjb25zdCByb3dGaWx0ZXJlZCA9IHJvdy5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcm93LmluZGV4T2YoZWwpO1xuICAgICAgICBjb25zdCBzaG9vdGluZ1NxdWFyZSA9IFsuLi5vcHBvbmVudEJvYXJkLnNob290aW5nQm9hcmRbcmFuZG9tXV1baW5kZXhdO1xuICAgICAgICByZXR1cm4gc2hvb3RpbmdTcXVhcmUgIT09IHRydWU7XG4gICAgICB9KTtcbiAgICAgIGVsaWdpYmxlU3F1YXJlc0NvdW50ID0gcm93RmlsdGVyZWQubGVuZ3RoO1xuICAgICAgY29uc3QgY2hvaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWxpZ2libGVTcXVhcmVzQ291bnQpO1xuICAgICAgLy8gY29uc29sZS5sb2cocm93RmlsdGVyZWQpO1xuICAgICAgY29uc3QgaW5kZXggPSByb3dGaWx0ZXJlZFtjaG9pY2VdO1xuICAgICAgcmV0dXJuIHsgcmFuZG9tLCBpbmRleCB9O1xuICAgIH07XG4gICAgbGV0IHJhbmRvbTtcbiAgICBsZXQgaW5kZXg7XG4gICAgbGV0IGxpbWl0ID0gMDtcbiAgICB3aGlsZSAoIU51bWJlci5pc0ludGVnZXIoaW5kZXgpICYmIGxpbWl0IDwgMTApIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSByYW5kb21IaXQoKTtcbiAgICAgIGluZGV4ID0gY29vcmRpbmF0ZS5pbmRleDtcbiAgICAgIHJhbmRvbSA9IGNvb3JkaW5hdGUucmFuZG9tO1xuICAgICAgbGltaXQgKz0gMTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwid2hpbGUgd2FzIGNhbGxlZCwgcm93OiBcIiwgcmFuZG9tLCBcIiwgaW5kZXg6IFwiLCBpbmRleCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHJhbmRvbSwgaW5kZXgsIE51bWJlci5pc0ludGVnZXIoaW5kZXggKyAxKSk7XG4gICAgLy8gcGxheShyYW5kb20sIGluZGV4KTtcbiAgICBvcHBvbmVudEJvYXJkLmdyaWRCb2FyZFtyYW5kb21dW2luZGV4XS5jbGljaygpO1xuICAgIC8vIGluZGV4ID0gMDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9wcG9uZW50Qm9hcmQsXG4gICAgZ2V0VHVybixcbiAgICBzZXRUdXJuLFxuICAgIHRvZ2dsZVR1cm4sXG4gICAgaXNIdW1hbixcbiAgICBwbGF5LFxuICAgIGNvbXB1dGVyUGxheSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAoaW5wdXRMZW5ndGgpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gaW5wdXRMZW5ndGg7XG4gIGNvbnN0IGJvZHlIaXQgPSBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGJvZHlIaXRbcG9zaXRpb25dID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBib2R5SGl0LmV2ZXJ5KChwb3NpdGlvbikgPT4gcG9zaXRpb24gPT09IHRydWUpO1xuXG4gIHJldHVybiB7bGVuZ3RoLCBoaXQsIGlzU3Vua31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vanNfbW9kdWxlcy9wbGF5ZXJcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vanNfbW9kdWxlcy9nYW1lYm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL2pzX21vZHVsZXMvc2hpcFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVHcmlkMTAgfSBmcm9tIFwiLi9qc19tb2R1bGVzL2RvbV9tb2R1bGVcIjtcblxuY29uc3QgZ2FtZUhlbHBlciA9ICgpID0+IHtcbiAgY29uc3QgY2hlY2tXaW5uZXIgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgICBpZiAocGxheWVyT25lLm9wcG9uZW50Qm9hcmQuaXNGbGVldFN1bmsoKSkgcmV0dXJuIHBsYXllck9uZTtcbiAgICBpZiAocGxheWVyVHdvLm9wcG9uZW50Qm9hcmQuaXNGbGVldFN1bmsoKSkgcmV0dXJuIHBsYXllclR3bztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1wbGF5XCIpLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLndpbm5lci1hbm5vdW5jZW1lbnRcIlxuICAgICkudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIudGl0bGV9IFdpbmA7XG4gIH07XG5cbiAgY29uc3QgcmVzZXREaXNwbGF5V2lubmVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVR1cm4gPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgICBjb25zdCB3aW5uZXIgPSBjaGVja1dpbm5lcihwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gICAgLy8gY29uc29sZS5sb2cod2lubmVyLnRpdGxlKTtcbiAgICBpZiAod2lubmVyKSB7XG4gICAgICBkaXNwbGF5V2lubmVyKHdpbm5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllck9uZS50b2dnbGVUdXJuKCk7XG4gICAgICBwbGF5ZXJUd28udG9nZ2xlVHVybigpO1xuICAgICAgaWYgKHBsYXllclR3by5nZXRUdXJuKCkpIHtcbiAgICAgICAgcGxheWVyVHdvLmNvbXB1dGVyUGxheSgpO1xuICAgICAgICBpZiAod2lubmVyKSB7XG4gICAgICAgICAgZGlzcGxheVdpbm5lcih3aW5uZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGNoZWNrV2lubmVyLCBkaXNwbGF5V2lubmVyLCBjaGFuZ2VUdXJuLCByZXNldERpc3BsYXlXaW5uZXIgfTtcbn07XG5cbmNvbnN0IGdhbWVMb29wID0gKCgpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZXNPbmUgPSBbXG4gICAgWzMsIDBdLFxuICAgIFsyLCA1XSxcbiAgICBbNCwgM10sXG4gICAgWzUsIDZdLFxuICAgIFszLCA4XSxcbiAgXTtcbiAgY29uc3QgY29vcmRpbmF0ZXNUd28gPSBbXG4gICAgWzEsIDNdLFxuICAgIFsyLCA1XSxcbiAgICBbNCwgM10sXG4gICAgWzUsIDZdLFxuICAgIFszLCAyXSxcbiAgXTtcblxuICBsZXQgYm9hcmRPbmU7XG4gIGxldCBib2FyZFR3bztcbiAgbGV0IHBsYXllcjtcbiAgbGV0IGNvbXB1dGVyO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZmxlZXRPbmUgPSBbU2hpcCgyKSwgU2hpcCgzKSwgU2hpcCgzKSwgU2hpcCg0KSwgU2hpcCg1KV07XG4gICAgY29uc3QgZmxlZXRUd28gPSBbU2hpcCgyKSwgU2hpcCgzKSwgU2hpcCgzKSwgU2hpcCg0KSwgU2hpcCg1KV07XG4gICAgYm9hcmRPbmUgPSBHYW1lYm9hcmQoZmxlZXRPbmUpO1xuICAgIGJvYXJkVHdvID0gR2FtZWJvYXJkKGZsZWV0VHdvKTtcbiAgICBbcGxheWVyLCBjb21wdXRlcl0gPSBbUGxheWVyKHRydWUsIGJvYXJkVHdvKSwgUGxheWVyKGZhbHNlLCBib2FyZE9uZSldO1xuICAgIHBsYXllci50aXRsZSA9IFwiWW91XCI7XG4gICAgY29tcHV0ZXIudGl0bGUgPSBcIkNvbXB1dGVyXCI7XG5cbiAgICBib2FyZE9uZS5kZXBsb3lGbGVldChjb29yZGluYXRlc09uZSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZFR3by5kZXBsb3lGbGVldChjb29yZGluYXRlc1R3bywgXCJob3Jpem9udGFsXCIpO1xuICAgIGNvbnN0IFtncmlkT25lLCBncmlkVHdvXSA9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JpZC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB7IGNoYW5nZVR1cm4sIHJlc2V0RGlzcGxheVdpbm5lciB9ID0gZ2FtZUhlbHBlcigpO1xuICAgIGdlbmVyYXRlR3JpZDEwKGdyaWRPbmUsIGJvYXJkT25lLCBjb21wdXRlciwgKCkgPT4ge1xuICAgICAgY2hhbmdlVHVybihwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICB9KTtcbiAgICBnZW5lcmF0ZUdyaWQxMChncmlkVHdvLCBib2FyZFR3bywgcGxheWVyLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VUdXJuKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIH0pO1xuICAgIHJlc2V0RGlzcGxheVdpbm5lcigpO1xuICAgIHBsYXllci5zZXRUdXJuKHRydWUpO1xuICB9O1xuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXBsYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVMb29wLmluaXQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==