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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #ea4;\n}\n\n.flex-container {\n  display: flex;\n  justify-content: center;\n}\n.flex-container > div {\n  margin: 2em 3em;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(10, 20px);\n  grid-template-rows: repeat(10, 20px);\n}\n\n.grid-container > div {\n  border: solid 1px;\n}\n\n.preparation-board {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n\n.user-board {\n  padding: 10px 50px;\n}\n\n.dragged-ship {\n  display: flex;\n}\n.dragged-ship > div {\n  width: 15px;\n  height: 15px;\n  margin: 10px 2px;\n  background-color: #000;\n}\n\ndiv.black {\n  background-color: #000;\n}\ndiv.hit {\n  background-color: #f48;\n}\ndiv.empty-hit {\n  background-color: #38f;\n}\n\n.button-container {\n  text-align: center;\n}\n\n.button-container.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf","sourcesContent":["body {\n  background-color: #ea4;\n}\n\n.flex-container {\n  display: flex;\n  justify-content: center;\n}\n.flex-container > div {\n  margin: 2em 3em;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(10, 20px);\n  grid-template-rows: repeat(10, 20px);\n}\n\n.grid-container > div {\n  border: solid 1px;\n}\n\n.preparation-board {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n\n.user-board {\n  padding: 10px 50px;\n}\n\n.dragged-ship {\n  display: flex;\n}\n.dragged-ship > div {\n  width: 15px;\n  height: 15px;\n  margin: 10px 2px;\n  background-color: #000;\n}\n\ndiv.black {\n  background-color: #000;\n}\ndiv.hit {\n  background-color: #f48;\n}\ndiv.empty-hit {\n  background-color: #38f;\n}\n\n.button-container {\n  text-align: center;\n}\n\n.button-container.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/js_modules/FleetTemplate.js":
/*!*****************************************!*\
  !*** ./src/js_modules/FleetTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/js_modules/Ship.js");


const FleetTemplate = () => {
  const frigate = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.default)(2, "frigate");
  const cruiser = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.default)(3, "cruiser");
  const destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.default)(3, "destroyer");
  const battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.default)(4, "battleship");
  const carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.default)(5, "carrier");

  const getFleet = (() => [frigate, cruiser, destroyer, battleship, carrier])();
  return getFleet;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FleetTemplate);


/***/ }),

/***/ "./src/js_modules/Gameboard.js":
/*!*************************************!*\
  !*** ./src/js_modules/Gameboard.js ***!
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

const Gameboard = () => {
  const fleet = [];
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
    fleet.push(ship);
  };

  const deployFleet = (inputFleet, coordinates, orientation) => {
    inputFleet.forEach((ship) => {
      const index = inputFleet.indexOf(ship);
      deployShip(ship, coordinates[index], orientation);
    });
    return false;
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

/***/ "./src/js_modules/Player.js":
/*!**********************************!*\
  !*** ./src/js_modules/Player.js ***!
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

/***/ "./src/js_modules/PlayerDeployment.js":
/*!********************************************!*\
  !*** ./src/js_modules/PlayerDeployment.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "removePlayerDeployment": () => (/* binding */ removePlayerDeployment)
/* harmony export */ });
/* harmony import */ var _dom_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_module */ "./src/js_modules/dom_module.js");


const deploymentPreparation = (fleet, isHuman) => {
  const userBoard = document.createElement("div");
  userBoard.className = "user-board";
  const renderShip = (ship, id) => {
    const renderedShip = document.createElement("div");
    renderedShip.className = "dragged-ship";
    renderedShip.id = id;
    if (isHuman) {
      renderedShip.draggable = "true";
    }
    for (let i = 0; i < ship.length; i += 1) {
      const subShip = document.createElement("div");
      subShip.dataset.id = i;
      subShip.className = "ship-square";
      renderedShip.appendChild(subShip);
    }
    userBoard.appendChild(renderedShip);
  };
  const idTemplate = isHuman ? "human" : "computer";
  fleet.forEach((ship) => renderShip(ship, `${idTemplate}-${ship.name}`));
  return userBoard;
};

const PlayerDeployment = (fleetOne, fleetTwo) => {
  const preparationBoard = document.createElement("section");
  preparationBoard.className = "preparation-board";

  preparationBoard.appendChild(deploymentPreparation(fleetOne, true));
  preparationBoard.appendChild(deploymentPreparation(fleetTwo));

  const [app] = document.getElementsByClassName("app");
  app.appendChild(preparationBoard);

  (0,_dom_module__WEBPACK_IMPORTED_MODULE_0__.dragListenerInit)();
};

const removePlayerDeployment = () => {
  const deploymentBoards = [
    ...document.getElementsByClassName("preparation-board"),
  ];
  const [app] = document.getElementsByClassName("app");
  deploymentBoards.forEach((board) => {
    app.removeChild(board);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerDeployment);



/***/ }),

/***/ "./src/js_modules/Ship.js":
/*!********************************!*\
  !*** ./src/js_modules/Ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (inputLength, inputName) => {
  const state = {
    name: inputName,
    length: inputLength,
  };
  const { name, length } = state;
  const bodyHit = Array(length).fill(false);

  const hit = (position) => {
    bodyHit[position] = true;
  };

  const isSunk = () => bodyHit.every((position) => position === true);

  return { length, hit, isSunk, name };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/js_modules/dom_module.js":
/*!**************************************!*\
  !*** ./src/js_modules/dom_module.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateGrid10": () => (/* binding */ generateGrid10),
/* harmony export */   "boardAddClickDOM": () => (/* binding */ boardAddClickDOM),
/* harmony export */   "addButtonHandler": () => (/* binding */ addButtonHandler),
/* harmony export */   "dragListenerInit": () => (/* binding */ dragListenerInit)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/js_modules/Ship.js");

// import FleetTemplate from "./js_modules/FleetTemplate";

const dropHandler = (element, gameBoard) => {
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.style.background = "";
    if (e.target.className === "drop-zone") {
      const { id, index } = JSON.parse(e.dataTransfer.getData("text/plain"));
      const dragged = document.getElementById(id);
      const shipName = id.split("-").pop();
      const shipLength = dragged.childNodes.length;
      const ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.default)(shipLength, shipName);

      const row = parseInt(e.target.dataset.id.substring(0, 1), 10);
      const col = parseInt(e.target.dataset.id.substring(1, 2), 10) - index;
      gameBoard.deployShip(ship, [row, col], "horizontal");
      for (let i = col; i < ship.length + col; i += 1) {
        gameBoard.gridBoard[row][i].classList.add("black");
      }
      dragged.parentElement.removeChild(dragged);
    }
  });

  element.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
};

const specialClickHandler = (element, player, x, y, changeTurn) => {
  const gameBoard = player.opponentBoard;
  ["click", "mouseenter"].forEach((event) =>
    element.addEventListener(event, () => {
      console.log(element.dataset.id);
      const winnerExist = gameBoard.isFleetSunk();
      if (player.getTurn() && !winnerExist) {
        const valid = player.play(x, y);
        console.log(valid, x, y);
        if (valid) changeTurn();
        if (gameBoard.shipBoard[x][y]) {
          element.classList.remove("black");
          element.classList.add("hit");
        } else element.classList.add("empty-hit");
      }
    })
  );
};

const generateGrid10 = (container, gameBoard, player) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const gridElement = document.createElement("div");
      gridElement.dataset.id = `${i}${j}`;
      if (!player.isHuman) {
        // this means the board belongs to human and is computer's target
        gridElement.classList.add("drop-zone");
      }
      dropHandler(gridElement, gameBoard);
      container.appendChild(gridElement);
      const { gridBoard } = gameBoard;
      gridBoard[i][j] = gridElement;
    }
  }
};

const boardAddClickDOM = (container, player, changeTurn) => {
  container.childNodes.forEach((node) => {
    const dataset = node.dataset.id;
    const [x, y] = [parseInt(dataset[0], 10), parseInt(dataset[1], 10)];
    specialClickHandler(node, player, x, y, changeTurn);
  });
};

const dragListenerInit = () => {
  const shipSquares = [...document.getElementsByClassName("ship-square")];
  let grabShipIndex;
  shipSquares.forEach((shipSquare) => {
    shipSquare.addEventListener("mousedown", () => {
      grabShipIndex = parseInt(shipSquare.dataset.id, 10);
    });
  });
  document.addEventListener("drag", () => {}, false);
  document.addEventListener(
    "dragstart",
    (e) => {
      const data = { id: e.target.id, index: grabShipIndex };
      e.dataTransfer.setData("text/plain", JSON.stringify(data));
      e.target.style.opacity = 0.5;
    },
    false
  );
  document.addEventListener(
    "dragend",
    (e) => {
      e.target.style.opacity = "";
    },
    false
  );
  document.addEventListener(
    "dragenter",
    (e) => {
      // highlight potential drop target when the draggable element enters it
      if (e.target.classList.contains("drop-zone")) {
        e.target.style.background = "purple";
      }
    },
    false
  );

  document.addEventListener(
    "dragleave",
    (e) => {
      // reset background of potential drop target when the draggable element leaves it
      if (e.target.classList.contains("drop-zone")) {
        e.target.style.background = "";
      }
    },
    false
  );
};

const addButtonHandler = (element, init) => {
  element.addEventListener("click", init);
};




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
/* harmony import */ var _js_modules_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_modules/Player */ "./src/js_modules/Player.js");
/* harmony import */ var _js_modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_modules/Gameboard */ "./src/js_modules/Gameboard.js");
/* harmony import */ var _js_modules_FleetTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_modules/FleetTemplate */ "./src/js_modules/FleetTemplate.js");
/* harmony import */ var _js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js_modules/dom_module */ "./src/js_modules/dom_module.js");
/* harmony import */ var _js_modules_PlayerDeployment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js_modules/PlayerDeployment */ "./src/js_modules/PlayerDeployment.js");




// import Ship from "./js_modules/Ship";




const gameHelper = () => {
  const checkWinner = (playerOne, playerTwo) => {
    if (playerOne.opponentBoard.isFleetSunk()) return playerOne;
    if (playerTwo.opponentBoard.isFleetSunk()) return playerTwo;
    return false;
  };

  const displayWinner = (winner) => {
    document.querySelector(".button-container").classList.remove("hidden");
    document.getElementById("btn-play").textContent = "Play Again";
    document.querySelector(
      ".winner-announcement"
    ).textContent = `${winner.title} Win`;
  };

  const resetDisplayWinner = () => {
    document.querySelector(".button-container").classList.add("hidden");
  };

  const changeTurn = (playerOne, playerTwo) => {
    const winner = checkWinner(playerOne, playerTwo);
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
  const state = { gameState: "" };
  const coordinatesTwo = [
    [1, 3],
    [2, 5],
    [4, 3],
    [5, 6],
    [3, 2],
  ];

  let player;
  let computer;
  const [gridOne, gridTwo] = document.getElementsByClassName("grid-container");
  const { changeTurn, resetDisplayWinner } = gameHelper();

  const deploy = () => {
    const fleetOne = (0,_js_modules_FleetTemplate__WEBPACK_IMPORTED_MODULE_3__.default)();
    const fleetTwo = (0,_js_modules_FleetTemplate__WEBPACK_IMPORTED_MODULE_3__.default)();
    const boardOne = (0,_js_modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__.default)();
    const boardTwo = (0,_js_modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__.default)();
    [player, computer] = [(0,_js_modules_Player__WEBPACK_IMPORTED_MODULE_1__.default)(true, boardTwo), (0,_js_modules_Player__WEBPACK_IMPORTED_MODULE_1__.default)(false, boardOne)];
    player.title = "You";
    computer.title = "Computer";

    // boardOne.deployFleet(coordinatesOne, "vertical");
    boardTwo.deployFleet(fleetTwo, coordinatesTwo, "horizontal");

    (0,_js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__.generateGrid10)(gridOne, boardOne, computer);
    (0,_js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__.generateGrid10)(gridTwo, boardTwo, player, () => {
      changeTurn(player, computer);
    });

    player.setTurn(false);
    computer.setTurn(false);
    (0,_js_modules_PlayerDeployment__WEBPACK_IMPORTED_MODULE_5__.default)(fleetOne, fleetTwo);
  };

  const play = () => {
    player.setTurn(true);
    resetDisplayWinner();
    (0,_js_modules_PlayerDeployment__WEBPACK_IMPORTED_MODULE_5__.removePlayerDeployment)();
    (0,_js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__.boardAddClickDOM)(gridOne, computer, () => {
      changeTurn(player, computer);
    });
    (0,_js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__.boardAddClickDOM)(gridTwo, player, () => {
      changeTurn(player, computer);
    });
  };

  const gameStart = () => {
    const button = document.getElementById("btn-play");
    button.textContent = "Start deployment";
    button.addEventListener("click", () => {
      if (state.gameState === "deployment") {
        state.gameState = "playing";
        button.textContent = "Play Again";
        play();
      } else {
        state.gameState = "deployment";
        button.textContent = "Start playing";
        deploy();
      }
    });
  };

  return { gameStart };
})();

gameLoop.gameStart();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanNfbW9kdWxlcy9GbGVldFRlbXBsYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanNfbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qc19tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzX21vZHVsZXMvUGxheWVyRGVwbG95bWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzX21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzX21vZHVsZXMvZG9tX21vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsMkJBQTJCLEdBQUcscUJBQXFCLGtCQUFrQiw0QkFBNEIsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcscUJBQXFCLGtCQUFrQiw0Q0FBNEMseUNBQXlDLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHLHdCQUF3QixrQkFBa0IsZ0JBQWdCLDRCQUE0QixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLEdBQUcsdUJBQXVCLGdCQUFnQixpQkFBaUIscUJBQXFCLDJCQUEyQixHQUFHLGVBQWUsMkJBQTJCLEdBQUcsV0FBVywyQkFBMkIs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U1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0O1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZmxleC1jb250YWluZXIgPiBkaXYge1xcbiAgbWFyZ2luOiAyZW0gM2VtO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyMHB4KTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyID4gZGl2IHtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbn1cXG5cXG4ucHJlcGFyYXRpb24tYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi51c2VyLWJvYXJkIHtcXG4gIHBhZGRpbmc6IDEwcHggNTBweDtcXG59XFxuXFxuLmRyYWdnZWQtc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZHJhZ2dlZC1zaGlwID4gZGl2IHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbmRpdi5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5kaXYuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDg7XFxufVxcbmRpdi5lbXB0eS1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ZjtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lci5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDtcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZsZXgtY29udGFpbmVyID4gZGl2IHtcXG4gIG1hcmdpbjogMmVtIDNlbTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjBweCk7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG59XFxuXFxuLnByZXBhcmF0aW9uLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udXNlci1ib2FyZCB7XFxuICBwYWRkaW5nOiAxMHB4IDUwcHg7XFxufVxcblxcbi5kcmFnZ2VkLXNoaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmRyYWdnZWQtc2hpcCA+IGRpdiB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIG1hcmdpbjogMTBweCAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG5kaXYuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuZGl2LmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4O1xcbn1cXG5kaXYuZW1wdHktaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGY7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5cbmNvbnN0IEZsZWV0VGVtcGxhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGZyaWdhdGUgPSBTaGlwKDIsIFwiZnJpZ2F0ZVwiKTtcbiAgY29uc3QgY3J1aXNlciA9IFNoaXAoMywgXCJjcnVpc2VyXCIpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKDMsIFwiZGVzdHJveWVyXCIpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0LCBcImJhdHRsZXNoaXBcIik7XG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwKDUsIFwiY2FycmllclwiKTtcblxuICBjb25zdCBnZXRGbGVldCA9ICgoKSA9PiBbZnJpZ2F0ZSwgY3J1aXNlciwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBjYXJyaWVyXSkoKTtcbiAgcmV0dXJuIGdldEZsZWV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxlZXRUZW1wbGF0ZTtcbiIsIi8qXG5HQU1FQk9BUkQgTU9EVUxFIFxuXG5TaG9vdGluZyBCb2FyZCA9IHRvIHJlY29yZCB0aGUgc2hvb3RpbmcgY29vcmRpbmF0ZXMsIGl0J3Mgbm90IGxlZ2FsIHRvIHNob290IHRoZSBzYW1lIGNvb3JkaW5hdGUgdHdpY2UgXG5TaGlwIEJvYXJkID0gdG8gcmVjb3JkIHRoZSBkZXBsb3llZCBzaGlwIGNvb3JkaW5hdGVzXG4qL1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGZsZWV0ID0gW107XG4gIGNvbnN0IGRpbWVuc2lvbiA9IDEwO1xuICBsZXQgc2hvb3RpbmdCb2FyZCA9IEFycmF5LmZyb20oQXJyYXkoZGltZW5zaW9uKSwgKCkgPT5cbiAgICBuZXcgQXJyYXkoZGltZW5zaW9uKS5maWxsKGZhbHNlKVxuICApO1xuICBsZXQgc2hpcEJvYXJkID0gQXJyYXkuZnJvbShBcnJheShkaW1lbnNpb24pLCAoKSA9PiBuZXcgQXJyYXkoZGltZW5zaW9uKSk7XG4gIGNvbnN0IGdyaWRCb2FyZCA9IEFycmF5LmZyb20oQXJyYXkoZGltZW5zaW9uKSwgKCkgPT4gbmV3IEFycmF5KGRpbWVuc2lvbikpO1xuXG4gIC8vIFJlc2V0IGJvYXJkIGZ1bmN0aW9uLCBhc3NpZ25lZCBlbXB0eSBib2FyZFxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBzaG9vdGluZ0JvYXJkID0gQXJyYXkuZnJvbShBcnJheShkaW1lbnNpb24pLCAoKSA9PlxuICAgICAgbmV3IEFycmF5KGRpbWVuc2lvbikuZmlsbChmYWxzZSlcbiAgICApO1xuICAgIHNoaXBCb2FyZCA9IEFycmF5LmZyb20oQXJyYXkoZGltZW5zaW9uKSwgKCkgPT4gbmV3IEFycmF5KGRpbWVuc2lvbikpO1xuICB9O1xuXG4gIGNvbnN0IGRlcGxveVNoaXAgPSAoc2hpcCwgb3JpZ2luLCBvcmllbnRhdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzaGlwO1xuICAgIGNvbnN0IFt4LCB5XSA9IG9yaWdpbjtcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc2hpcEJvYXJkW2ldW3ldID0geyBzaGlwLCBwb3NpdGlvbjogaSAtIHggfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc2hpcEJvYXJkW3hdW2ldID0geyBzaGlwLCBwb3NpdGlvbjogaSAtIHkgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmxlZXQucHVzaChzaGlwKTtcbiAgfTtcblxuICBjb25zdCBkZXBsb3lGbGVldCA9IChpbnB1dEZsZWV0LCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pID0+IHtcbiAgICBpbnB1dEZsZWV0LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5wdXRGbGVldC5pbmRleE9mKHNoaXApO1xuICAgICAgZGVwbG95U2hpcChzaGlwLCBjb29yZGluYXRlc1tpbmRleF0sIG9yaWVudGF0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLy8gQm9hcmQtcmVjZWl2ZS1hdHRhY2sgdmFsaWRhdG9yLiBNYXJrIGNvb3JkaW5hdGUgYXMgdHJ1ZSBhbmQgdGhlbiByZXR1cm4gdHJ1ZSBpZiBzaG9vdGluZyBjb29yZGluYXRlIGlzIHZhbGlkXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChzaG9vdGluZ0JvYXJkW3hdW3ldID09PSB0cnVlKSByZXR1cm4gZmFsc2U7XG4gICAgc2hvb3RpbmdCb2FyZFt4XVt5XSA9IHRydWU7XG4gICAgaWYgKHNoaXBCb2FyZFt4XVt5XSkge1xuICAgICAgY29uc3QgeyBzaGlwLCBwb3NpdGlvbiB9ID0gc2hpcEJvYXJkW3hdW3ldO1xuICAgICAgc2hpcC5oaXQocG9zaXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBpc0ZsZWV0U3VuayA9ICgpID0+IHtcbiAgICBpZiAoZmxlZXQuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzaGlwQm9hcmQsXG4gICAgc2hvb3RpbmdCb2FyZCxcbiAgICBncmlkQm9hcmQsXG4gICAgZGVwbG95U2hpcCxcbiAgICBkZXBsb3lGbGVldCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzRmxlZXRTdW5rLFxuICAgIHJlc2V0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKGlzSHVtYW5BcmcsIG9wcG9uZW50Qm9hcmQpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB7IHR1cm46IGZhbHNlIH07XG4gIGNvbnN0IGlzSHVtYW4gPSBpc0h1bWFuQXJnO1xuXG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiBzdGF0ZS50dXJuO1xuICBjb25zdCBzZXRUdXJuID0gKHZhbCkgPT4ge1xuICAgIHN0YXRlLnR1cm4gPSB2YWw7XG4gIH07XG4gIGNvbnN0IHRvZ2dsZVR1cm4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSAhc3RhdGUudHVybjtcbiAgICBzdGF0ZS50dXJuID0gbmV3U3RhdGU7XG4gIH07XG5cbiAgY29uc3QgcGxheSA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3QgaXNWYWxpZEhpdCA9IG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICByZXR1cm4gaXNWYWxpZEhpdDtcbiAgfTtcblxuICBjb25zdCBjb21wdXRlclBsYXkgPSAoKSA9PiB7XG4gICAgbGV0IGVsaWdpYmxlU3F1YXJlc0NvdW50O1xuICAgIGNvbnN0IHJhbmRvbUhpdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IHJvdyA9IFsuLi5vcHBvbmVudEJvYXJkLnNob290aW5nQm9hcmRbcmFuZG9tXS5rZXlzKCldO1xuICAgICAgY29uc3Qgcm93RmlsdGVyZWQgPSByb3cuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHJvdy5pbmRleE9mKGVsKTtcbiAgICAgICAgY29uc3Qgc2hvb3RpbmdTcXVhcmUgPSBbLi4ub3Bwb25lbnRCb2FyZC5zaG9vdGluZ0JvYXJkW3JhbmRvbV1dW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHNob290aW5nU3F1YXJlICE9PSB0cnVlO1xuICAgICAgfSk7XG4gICAgICBlbGlnaWJsZVNxdWFyZXNDb3VudCA9IHJvd0ZpbHRlcmVkLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVsaWdpYmxlU3F1YXJlc0NvdW50KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJvd0ZpbHRlcmVkKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gcm93RmlsdGVyZWRbY2hvaWNlXTtcbiAgICAgIHJldHVybiB7IHJhbmRvbSwgaW5kZXggfTtcbiAgICB9O1xuICAgIGxldCByYW5kb207XG4gICAgbGV0IGluZGV4O1xuICAgIGxldCBsaW1pdCA9IDA7XG4gICAgd2hpbGUgKCFOdW1iZXIuaXNJbnRlZ2VyKGluZGV4KSAmJiBsaW1pdCA8IDEwKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlID0gcmFuZG9tSGl0KCk7XG4gICAgICBpbmRleCA9IGNvb3JkaW5hdGUuaW5kZXg7XG4gICAgICByYW5kb20gPSBjb29yZGluYXRlLnJhbmRvbTtcbiAgICAgIGxpbWl0ICs9IDE7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIndoaWxlIHdhcyBjYWxsZWQsIHJvdzogXCIsIHJhbmRvbSwgXCIsIGluZGV4OiBcIiwgaW5kZXgpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhyYW5kb20sIGluZGV4LCBOdW1iZXIuaXNJbnRlZ2VyKGluZGV4ICsgMSkpO1xuICAgIC8vIHBsYXkocmFuZG9tLCBpbmRleCk7XG4gICAgb3Bwb25lbnRCb2FyZC5ncmlkQm9hcmRbcmFuZG9tXVtpbmRleF0uY2xpY2soKTtcbiAgICAvLyBpbmRleCA9IDA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvcHBvbmVudEJvYXJkLFxuICAgIGdldFR1cm4sXG4gICAgc2V0VHVybixcbiAgICB0b2dnbGVUdXJuLFxuICAgIGlzSHVtYW4sXG4gICAgcGxheSxcbiAgICBjb21wdXRlclBsYXksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgeyBkcmFnTGlzdGVuZXJJbml0IH0gZnJvbSBcIi4vZG9tX21vZHVsZVwiO1xuXG5jb25zdCBkZXBsb3ltZW50UHJlcGFyYXRpb24gPSAoZmxlZXQsIGlzSHVtYW4pID0+IHtcbiAgY29uc3QgdXNlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXNlckJvYXJkLmNsYXNzTmFtZSA9IFwidXNlci1ib2FyZFwiO1xuICBjb25zdCByZW5kZXJTaGlwID0gKHNoaXAsIGlkKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyZWRTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZW5kZXJlZFNoaXAuY2xhc3NOYW1lID0gXCJkcmFnZ2VkLXNoaXBcIjtcbiAgICByZW5kZXJlZFNoaXAuaWQgPSBpZDtcbiAgICBpZiAoaXNIdW1hbikge1xuICAgICAgcmVuZGVyZWRTaGlwLmRyYWdnYWJsZSA9IFwidHJ1ZVwiO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHN1YlNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3ViU2hpcC5kYXRhc2V0LmlkID0gaTtcbiAgICAgIHN1YlNoaXAuY2xhc3NOYW1lID0gXCJzaGlwLXNxdWFyZVwiO1xuICAgICAgcmVuZGVyZWRTaGlwLmFwcGVuZENoaWxkKHN1YlNoaXApO1xuICAgIH1cbiAgICB1c2VyQm9hcmQuYXBwZW5kQ2hpbGQocmVuZGVyZWRTaGlwKTtcbiAgfTtcbiAgY29uc3QgaWRUZW1wbGF0ZSA9IGlzSHVtYW4gPyBcImh1bWFuXCIgOiBcImNvbXB1dGVyXCI7XG4gIGZsZWV0LmZvckVhY2goKHNoaXApID0+IHJlbmRlclNoaXAoc2hpcCwgYCR7aWRUZW1wbGF0ZX0tJHtzaGlwLm5hbWV9YCkpO1xuICByZXR1cm4gdXNlckJvYXJkO1xufTtcblxuY29uc3QgUGxheWVyRGVwbG95bWVudCA9IChmbGVldE9uZSwgZmxlZXRUd28pID0+IHtcbiAgY29uc3QgcHJlcGFyYXRpb25Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBwcmVwYXJhdGlvbkJvYXJkLmNsYXNzTmFtZSA9IFwicHJlcGFyYXRpb24tYm9hcmRcIjtcblxuICBwcmVwYXJhdGlvbkJvYXJkLmFwcGVuZENoaWxkKGRlcGxveW1lbnRQcmVwYXJhdGlvbihmbGVldE9uZSwgdHJ1ZSkpO1xuICBwcmVwYXJhdGlvbkJvYXJkLmFwcGVuZENoaWxkKGRlcGxveW1lbnRQcmVwYXJhdGlvbihmbGVldFR3bykpO1xuXG4gIGNvbnN0IFthcHBdID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFwcFwiKTtcbiAgYXBwLmFwcGVuZENoaWxkKHByZXBhcmF0aW9uQm9hcmQpO1xuXG4gIGRyYWdMaXN0ZW5lckluaXQoKTtcbn07XG5cbmNvbnN0IHJlbW92ZVBsYXllckRlcGxveW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGRlcGxveW1lbnRCb2FyZHMgPSBbXG4gICAgLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByZXBhcmF0aW9uLWJvYXJkXCIpLFxuICBdO1xuICBjb25zdCBbYXBwXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcHBcIik7XG4gIGRlcGxveW1lbnRCb2FyZHMuZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICBhcHAucmVtb3ZlQ2hpbGQoYm9hcmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckRlcGxveW1lbnQ7XG5leHBvcnQgeyByZW1vdmVQbGF5ZXJEZXBsb3ltZW50IH07XG4iLCJjb25zdCBTaGlwID0gKGlucHV0TGVuZ3RoLCBpbnB1dE5hbWUpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgbmFtZTogaW5wdXROYW1lLFxuICAgIGxlbmd0aDogaW5wdXRMZW5ndGgsXG4gIH07XG4gIGNvbnN0IHsgbmFtZSwgbGVuZ3RoIH0gPSBzdGF0ZTtcbiAgY29uc3QgYm9keUhpdCA9IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgYm9keUhpdFtwb3NpdGlvbl0gPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGJvZHlIaXQuZXZlcnkoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbiA9PT0gdHJ1ZSk7XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXQsIGlzU3VuaywgbmFtZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbi8vIGltcG9ydCBGbGVldFRlbXBsYXRlIGZyb20gXCIuL2pzX21vZHVsZXMvRmxlZXRUZW1wbGF0ZVwiO1xuXG5jb25zdCBkcm9wSGFuZGxlciA9IChlbGVtZW50LCBnYW1lQm9hcmQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJcIjtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImRyb3Atem9uZVwiKSB7XG4gICAgICBjb25zdCB7IGlkLCBpbmRleCB9ID0gSlNPTi5wYXJzZShlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XG4gICAgICBjb25zdCBkcmFnZ2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgY29uc3Qgc2hpcE5hbWUgPSBpZC5zcGxpdChcIi1cIikucG9wKCk7XG4gICAgICBjb25zdCBzaGlwTGVuZ3RoID0gZHJhZ2dlZC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgsIHNoaXBOYW1lKTtcblxuICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZC5zdWJzdHJpbmcoMCwgMSksIDEwKTtcbiAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaWQuc3Vic3RyaW5nKDEsIDIpLCAxMCkgLSBpbmRleDtcbiAgICAgIGdhbWVCb2FyZC5kZXBsb3lTaGlwKHNoaXAsIFtyb3csIGNvbF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBzaGlwLmxlbmd0aCArIGNvbDsgaSArPSAxKSB7XG4gICAgICAgIGdhbWVCb2FyZC5ncmlkQm9hcmRbcm93XVtpXS5jbGFzc0xpc3QuYWRkKFwiYmxhY2tcIik7XG4gICAgICB9XG4gICAgICBkcmFnZ2VkLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZHJhZ2dlZCk7XG4gICAgfVxuICB9KTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzcGVjaWFsQ2xpY2tIYW5kbGVyID0gKGVsZW1lbnQsIHBsYXllciwgeCwgeSwgY2hhbmdlVHVybikgPT4ge1xuICBjb25zdCBnYW1lQm9hcmQgPSBwbGF5ZXIub3Bwb25lbnRCb2FyZDtcbiAgW1wiY2xpY2tcIiwgXCJtb3VzZWVudGVyXCJdLmZvckVhY2goKGV2ZW50KSA9PlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICAgIGNvbnN0IHdpbm5lckV4aXN0ID0gZ2FtZUJvYXJkLmlzRmxlZXRTdW5rKCk7XG4gICAgICBpZiAocGxheWVyLmdldFR1cm4oKSAmJiAhd2lubmVyRXhpc3QpIHtcbiAgICAgICAgY29uc3QgdmFsaWQgPSBwbGF5ZXIucGxheSh4LCB5KTtcbiAgICAgICAgY29uc29sZS5sb2codmFsaWQsIHgsIHkpO1xuICAgICAgICBpZiAodmFsaWQpIGNoYW5nZVR1cm4oKTtcbiAgICAgICAgaWYgKGdhbWVCb2FyZC5zaGlwQm9hcmRbeF1beV0pIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJibGFja1wiKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH0gZWxzZSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1oaXRcIik7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlR3JpZDEwID0gKGNvbnRhaW5lciwgZ2FtZUJvYXJkLCBwbGF5ZXIpID0+IHtcbiAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGdyaWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRFbGVtZW50LmRhdGFzZXQuaWQgPSBgJHtpfSR7an1gO1xuICAgICAgaWYgKCFwbGF5ZXIuaXNIdW1hbikge1xuICAgICAgICAvLyB0aGlzIG1lYW5zIHRoZSBib2FyZCBiZWxvbmdzIHRvIGh1bWFuIGFuZCBpcyBjb21wdXRlcidzIHRhcmdldFxuICAgICAgICBncmlkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJvcC16b25lXCIpO1xuICAgICAgfVxuICAgICAgZHJvcEhhbmRsZXIoZ3JpZEVsZW1lbnQsIGdhbWVCb2FyZCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZEVsZW1lbnQpO1xuICAgICAgY29uc3QgeyBncmlkQm9hcmQgfSA9IGdhbWVCb2FyZDtcbiAgICAgIGdyaWRCb2FyZFtpXVtqXSA9IGdyaWRFbGVtZW50O1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgYm9hcmRBZGRDbGlja0RPTSA9IChjb250YWluZXIsIHBsYXllciwgY2hhbmdlVHVybikgPT4ge1xuICBjb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgY29uc3QgZGF0YXNldCA9IG5vZGUuZGF0YXNldC5pZDtcbiAgICBjb25zdCBbeCwgeV0gPSBbcGFyc2VJbnQoZGF0YXNldFswXSwgMTApLCBwYXJzZUludChkYXRhc2V0WzFdLCAxMCldO1xuICAgIHNwZWNpYWxDbGlja0hhbmRsZXIobm9kZSwgcGxheWVyLCB4LCB5LCBjaGFuZ2VUdXJuKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkcmFnTGlzdGVuZXJJbml0ID0gKCkgPT4ge1xuICBjb25zdCBzaGlwU3F1YXJlcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2hpcC1zcXVhcmVcIildO1xuICBsZXQgZ3JhYlNoaXBJbmRleDtcbiAgc2hpcFNxdWFyZXMuZm9yRWFjaCgoc2hpcFNxdWFyZSkgPT4ge1xuICAgIHNoaXBTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG4gICAgICBncmFiU2hpcEluZGV4ID0gcGFyc2VJbnQoc2hpcFNxdWFyZS5kYXRhc2V0LmlkLCAxMCk7XG4gICAgfSk7XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCAoKSA9PiB7fSwgZmFsc2UpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiZHJhZ3N0YXJ0XCIsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGlkOiBlLnRhcmdldC5pZCwgaW5kZXg6IGdyYWJTaGlwSW5kZXggfTtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiZHJhZ2VuZFwiLFxuICAgIChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJkcmFnZW50ZXJcIixcbiAgICAoZSkgPT4ge1xuICAgICAgLy8gaGlnaGxpZ2h0IHBvdGVudGlhbCBkcm9wIHRhcmdldCB3aGVuIHRoZSBkcmFnZ2FibGUgZWxlbWVudCBlbnRlcnMgaXRcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wLXpvbmVcIikpIHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwicHVycGxlXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJkcmFnbGVhdmVcIixcbiAgICAoZSkgPT4ge1xuICAgICAgLy8gcmVzZXQgYmFja2dyb3VuZCBvZiBwb3RlbnRpYWwgZHJvcCB0YXJnZXQgd2hlbiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgbGVhdmVzIGl0XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcC16b25lXCIpKSB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcbn07XG5cbmNvbnN0IGFkZEJ1dHRvbkhhbmRsZXIgPSAoZWxlbWVudCwgaW5pdCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbml0KTtcbn07XG5cbmV4cG9ydCB7IGdlbmVyYXRlR3JpZDEwLCBib2FyZEFkZENsaWNrRE9NLCBhZGRCdXR0b25IYW5kbGVyLCBkcmFnTGlzdGVuZXJJbml0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9qc19tb2R1bGVzL1BsYXllclwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9qc19tb2R1bGVzL0dhbWVib2FyZFwiO1xuLy8gaW1wb3J0IFNoaXAgZnJvbSBcIi4vanNfbW9kdWxlcy9TaGlwXCI7XG5pbXBvcnQgRmxlZXRUZW1wbGF0ZSBmcm9tIFwiLi9qc19tb2R1bGVzL0ZsZWV0VGVtcGxhdGVcIjtcbmltcG9ydCB7IGdlbmVyYXRlR3JpZDEwLCBib2FyZEFkZENsaWNrRE9NIH0gZnJvbSBcIi4vanNfbW9kdWxlcy9kb21fbW9kdWxlXCI7XG5pbXBvcnQgUGxheWVyRGVwbG95bWVudCwge1xuICByZW1vdmVQbGF5ZXJEZXBsb3ltZW50LFxufSBmcm9tIFwiLi9qc19tb2R1bGVzL1BsYXllckRlcGxveW1lbnRcIjtcblxuY29uc3QgZ2FtZUhlbHBlciA9ICgpID0+IHtcbiAgY29uc3QgY2hlY2tXaW5uZXIgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgICBpZiAocGxheWVyT25lLm9wcG9uZW50Qm9hcmQuaXNGbGVldFN1bmsoKSkgcmV0dXJuIHBsYXllck9uZTtcbiAgICBpZiAocGxheWVyVHdvLm9wcG9uZW50Qm9hcmQuaXNGbGVldFN1bmsoKSkgcmV0dXJuIHBsYXllclR3bztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1wbGF5XCIpLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLndpbm5lci1hbm5vdW5jZW1lbnRcIlxuICAgICkudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIudGl0bGV9IFdpbmA7XG4gIH07XG5cbiAgY29uc3QgcmVzZXREaXNwbGF5V2lubmVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVR1cm4gPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgICBjb25zdCB3aW5uZXIgPSBjaGVja1dpbm5lcihwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgZGlzcGxheVdpbm5lcih3aW5uZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJPbmUudG9nZ2xlVHVybigpO1xuICAgICAgcGxheWVyVHdvLnRvZ2dsZVR1cm4oKTtcbiAgICAgIGlmIChwbGF5ZXJUd28uZ2V0VHVybigpKSB7XG4gICAgICAgIHBsYXllclR3by5jb21wdXRlclBsYXkoKTtcbiAgICAgICAgaWYgKHdpbm5lcikge1xuICAgICAgICAgIGRpc3BsYXlXaW5uZXIod2lubmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBjaGVja1dpbm5lciwgZGlzcGxheVdpbm5lciwgY2hhbmdlVHVybiwgcmVzZXREaXNwbGF5V2lubmVyIH07XG59O1xuXG5jb25zdCBnYW1lTG9vcCA9ICgoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0geyBnYW1lU3RhdGU6IFwiXCIgfTtcbiAgY29uc3QgY29vcmRpbmF0ZXNUd28gPSBbXG4gICAgWzEsIDNdLFxuICAgIFsyLCA1XSxcbiAgICBbNCwgM10sXG4gICAgWzUsIDZdLFxuICAgIFszLCAyXSxcbiAgXTtcblxuICBsZXQgcGxheWVyO1xuICBsZXQgY29tcHV0ZXI7XG4gIGNvbnN0IFtncmlkT25lLCBncmlkVHdvXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJncmlkLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgeyBjaGFuZ2VUdXJuLCByZXNldERpc3BsYXlXaW5uZXIgfSA9IGdhbWVIZWxwZXIoKTtcblxuICBjb25zdCBkZXBsb3kgPSAoKSA9PiB7XG4gICAgY29uc3QgZmxlZXRPbmUgPSBGbGVldFRlbXBsYXRlKCk7XG4gICAgY29uc3QgZmxlZXRUd28gPSBGbGVldFRlbXBsYXRlKCk7XG4gICAgY29uc3QgYm9hcmRPbmUgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBib2FyZFR3byA9IEdhbWVib2FyZCgpO1xuICAgIFtwbGF5ZXIsIGNvbXB1dGVyXSA9IFtQbGF5ZXIodHJ1ZSwgYm9hcmRUd28pLCBQbGF5ZXIoZmFsc2UsIGJvYXJkT25lKV07XG4gICAgcGxheWVyLnRpdGxlID0gXCJZb3VcIjtcbiAgICBjb21wdXRlci50aXRsZSA9IFwiQ29tcHV0ZXJcIjtcblxuICAgIC8vIGJvYXJkT25lLmRlcGxveUZsZWV0KGNvb3JkaW5hdGVzT25lLCBcInZlcnRpY2FsXCIpO1xuICAgIGJvYXJkVHdvLmRlcGxveUZsZWV0KGZsZWV0VHdvLCBjb29yZGluYXRlc1R3bywgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgZ2VuZXJhdGVHcmlkMTAoZ3JpZE9uZSwgYm9hcmRPbmUsIGNvbXB1dGVyKTtcbiAgICBnZW5lcmF0ZUdyaWQxMChncmlkVHdvLCBib2FyZFR3bywgcGxheWVyLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VUdXJuKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIH0pO1xuXG4gICAgcGxheWVyLnNldFR1cm4oZmFsc2UpO1xuICAgIGNvbXB1dGVyLnNldFR1cm4oZmFsc2UpO1xuICAgIFBsYXllckRlcGxveW1lbnQoZmxlZXRPbmUsIGZsZWV0VHdvKTtcbiAgfTtcblxuICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgIHBsYXllci5zZXRUdXJuKHRydWUpO1xuICAgIHJlc2V0RGlzcGxheVdpbm5lcigpO1xuICAgIHJlbW92ZVBsYXllckRlcGxveW1lbnQoKTtcbiAgICBib2FyZEFkZENsaWNrRE9NKGdyaWRPbmUsIGNvbXB1dGVyLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VUdXJuKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIH0pO1xuICAgIGJvYXJkQWRkQ2xpY2tET00oZ3JpZFR3bywgcGxheWVyLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VUdXJuKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVTdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1wbGF5XCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3RhcnQgZGVwbG95bWVudFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmdhbWVTdGF0ZSA9PT0gXCJkZXBsb3ltZW50XCIpIHtcbiAgICAgICAgc3RhdGUuZ2FtZVN0YXRlID0gXCJwbGF5aW5nXCI7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiO1xuICAgICAgICBwbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5nYW1lU3RhdGUgPSBcImRlcGxveW1lbnRcIjtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCBwbGF5aW5nXCI7XG4gICAgICAgIGRlcGxveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGdhbWVTdGFydCB9O1xufSkoKTtcblxuZ2FtZUxvb3AuZ2FtZVN0YXJ0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9