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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
  // preparationBoard.textContent = "Preparation Board";

  preparationBoard.appendChild(deploymentPreparation(fleetOne, true));
  preparationBoard.appendChild(deploymentPreparation(fleetTwo));

  const [app] = document.getElementsByClassName("app");
  app.appendChild(preparationBoard);
  // app.appendChild("preparationBoard");

  (0,_dom_module__WEBPACK_IMPORTED_MODULE_0__.dragListenerInit)();
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
/* harmony export */   "addButtonHandler": () => (/* binding */ addButtonHandler),
/* harmony export */   "dragListenerInit": () => (/* binding */ dragListenerInit)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/js_modules/Ship.js");

// import FleetTemplate from "./js_modules/FleetTemplate";

const specialClickHandler = (element, player, x, y, gameBoard, changeTurn) => {
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("drop");
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
      gridElement.dataset.id = `${i}${j}`;
      if (!player.isHuman) {
        // this means the board belongs to human and is computer's target
        gridElement.classList.add("drop-zone");
      }
      specialClickHandler(gridElement, player, i, j, gameBoard, changeTurn);
      parent.appendChild(gridElement);
      const { gridBoard } = gameBoard;
      gridBoard[i][j] = gridElement;
    }
  }
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
      console.log("drag end");
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

  // document.addEventListener(
  //   "drop",
  //   (e) => {
  //     // prevent default action (open as link for some elements)
  //     e.preventDefault();
  //     console.log("drop");
  //     // move dragged elem to the selected drop target
  //     // if (e.target.className === "dropzone") {
  //     e.target.style.background = "";
  //     // dragged.parentNode.removeChild( dragged );
  //     // e.target.appendChild( dragged );
  //     // }
  //   },
  //   false
  // );
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
  // const coordinatesOne = [
  //   [3, 0],
  //   [2, 5],
  //   [4, 3],
  //   [5, 6],
  //   [3, 8],
  // ];
  const coordinatesTwo = [
    [1, 3],
    [2, 5],
    [4, 3],
    [5, 6],
    [3, 2],
  ];

  // let boardOne;
  // let boardTwo;
  let player;
  let computer;

  const init = () => {
    console.log((0,_js_modules_FleetTemplate__WEBPACK_IMPORTED_MODULE_3__.default)());
    const fleetOne = (0,_js_modules_FleetTemplate__WEBPACK_IMPORTED_MODULE_3__.default)();
    const fleetTwo = (0,_js_modules_FleetTemplate__WEBPACK_IMPORTED_MODULE_3__.default)();
    const boardOne = (0,_js_modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__.default)();
    const boardTwo = (0,_js_modules_Gameboard__WEBPACK_IMPORTED_MODULE_2__.default)();
    [player, computer] = [(0,_js_modules_Player__WEBPACK_IMPORTED_MODULE_1__.default)(true, boardTwo), (0,_js_modules_Player__WEBPACK_IMPORTED_MODULE_1__.default)(false, boardOne)];
    player.title = "You";
    computer.title = "Computer";

    // boardOne.deployFleet(coordinatesOne, "vertical");
    boardTwo.deployFleet(fleetTwo, coordinatesTwo, "horizontal");
    const [gridOne, gridTwo] =
      document.getElementsByClassName("grid-container");

    const { changeTurn, resetDisplayWinner } = gameHelper();
    (0,_js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__.generateGrid10)(gridOne, boardOne, computer, () => {
      changeTurn(player, computer);
    });
    (0,_js_modules_dom_module__WEBPACK_IMPORTED_MODULE_4__.generateGrid10)(gridTwo, boardTwo, player, () => {
      changeTurn(player, computer);
    });

    (0,_js_modules_PlayerDeployment__WEBPACK_IMPORTED_MODULE_5__.default)(fleetOne, fleetTwo);
    resetDisplayWinner();
    player.setTurn(true);
  };

  return { init };
})();

document.querySelector(".btn-play").addEventListener("click", gameLoop.init);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanNfbW9kdWxlcy9GbGVldFRlbXBsYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanNfbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qc19tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzX21vZHVsZXMvUGxheWVyRGVwbG95bWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzX21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzX21vZHVsZXMvZG9tX21vZHVsZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsMkJBQTJCLEdBQUcscUJBQXFCLGtCQUFrQiw0QkFBNEIsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcscUJBQXFCLGtCQUFrQiw0Q0FBNEMseUNBQXlDLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHLHdCQUF3QixrQkFBa0IsZ0JBQWdCLDRCQUE0QixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLEdBQUcsdUJBQXVCLGdCQUFnQixpQkFBaUIscUJBQXFCLDJCQUEyQixHQUFHLGVBQWUsMkJBQTJCLEdBQUcsV0FBVywyQkFBMkIs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RCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjs7QUFFb0I7QUFDTTtBQUMvQztBQUN1RDtBQUNFO0FBQ0k7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrRUFBYTtBQUM3QixxQkFBcUIsa0VBQWE7QUFDbEMscUJBQXFCLGtFQUFhO0FBQ2xDLHFCQUFxQiw4REFBUztBQUM5QixxQkFBcUIsOERBQVM7QUFDOUIsMEJBQTBCLDJEQUFNLGtCQUFrQiwyREFBTTtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsaUNBQWlDO0FBQzVDLElBQUksc0VBQWM7QUFDbEI7QUFDQSxLQUFLO0FBQ0wsSUFBSSxzRUFBYztBQUNsQjtBQUNBLEtBQUs7O0FBRUwsSUFBSSxxRUFBZ0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDtcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZsZXgtY29udGFpbmVyID4gZGl2IHtcXG4gIG1hcmdpbjogMmVtIDNlbTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjBweCk7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG59XFxuXFxuLnByZXBhcmF0aW9uLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udXNlci1ib2FyZCB7XFxuICBwYWRkaW5nOiAxMHB4IDUwcHg7XFxufVxcblxcbi5kcmFnZ2VkLXNoaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmRyYWdnZWQtc2hpcCA+IGRpdiB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIG1hcmdpbjogMTBweCAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG5kaXYuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuZGl2LmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ4O1xcbn1cXG5kaXYuZW1wdHktaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOGY7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTQ7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mbGV4LWNvbnRhaW5lciA+IGRpdiB7XFxuICBtYXJnaW46IDJlbSAzZW07XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDIwcHgpO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIgPiBkaXYge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxufVxcblxcbi5wcmVwYXJhdGlvbi1ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnVzZXItYm9hcmQge1xcbiAgcGFkZGluZzogMTBweCA1MHB4O1xcbn1cXG5cXG4uZHJhZ2dlZC1zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5kcmFnZ2VkLXNoaXAgPiBkaXYge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBtYXJnaW46IDEwcHggMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuZGl2LmJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbmRpdi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ODtcXG59XFxuZGl2LmVtcHR5LWhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhmO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuXG5jb25zdCBGbGVldFRlbXBsYXRlID0gKCkgPT4ge1xuICBjb25zdCBmcmlnYXRlID0gU2hpcCgyLCBcImZyaWdhdGVcIik7XG4gIGNvbnN0IGNydWlzZXIgPSBTaGlwKDMsIFwiY3J1aXNlclwiKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzLCBcImRlc3Ryb3llclwiKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoNCwgXCJiYXR0bGVzaGlwXCIpO1xuICBjb25zdCBjYXJyaWVyID0gU2hpcCg1LCBcImNhcnJpZXJcIik7XG5cbiAgY29uc3QgZ2V0RmxlZXQgPSAoKCkgPT4gW2ZyaWdhdGUsIGNydWlzZXIsIGRlc3Ryb3llciwgYmF0dGxlc2hpcCwgY2Fycmllcl0pKCk7XG4gIHJldHVybiBnZXRGbGVldDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsZWV0VGVtcGxhdGU7XG4iLCIvKlxuR0FNRUJPQVJEIE1PRFVMRSBcblxuU2hvb3RpbmcgQm9hcmQgPSB0byByZWNvcmQgdGhlIHNob290aW5nIGNvb3JkaW5hdGVzLCBpdCdzIG5vdCBsZWdhbCB0byBzaG9vdCB0aGUgc2FtZSBjb29yZGluYXRlIHR3aWNlIFxuU2hpcCBCb2FyZCA9IHRvIHJlY29yZCB0aGUgZGVwbG95ZWQgc2hpcCBjb29yZGluYXRlc1xuKi9cblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBmbGVldCA9IFtdO1xuICBjb25zdCBkaW1lbnNpb24gPSAxMDtcbiAgbGV0IHNob290aW5nQm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KGRpbWVuc2lvbiksICgpID0+XG4gICAgbmV3IEFycmF5KGRpbWVuc2lvbikuZmlsbChmYWxzZSlcbiAgKTtcbiAgbGV0IHNoaXBCb2FyZCA9IEFycmF5LmZyb20oQXJyYXkoZGltZW5zaW9uKSwgKCkgPT4gbmV3IEFycmF5KGRpbWVuc2lvbikpO1xuICBjb25zdCBncmlkQm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KGRpbWVuc2lvbiksICgpID0+IG5ldyBBcnJheShkaW1lbnNpb24pKTtcblxuICAvLyBSZXNldCBib2FyZCBmdW5jdGlvbiwgYXNzaWduZWQgZW1wdHkgYm9hcmRcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgc2hvb3RpbmdCb2FyZCA9IEFycmF5LmZyb20oQXJyYXkoZGltZW5zaW9uKSwgKCkgPT5cbiAgICAgIG5ldyBBcnJheShkaW1lbnNpb24pLmZpbGwoZmFsc2UpXG4gICAgKTtcbiAgICBzaGlwQm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KGRpbWVuc2lvbiksICgpID0+IG5ldyBBcnJheShkaW1lbnNpb24pKTtcbiAgfTtcblxuICBjb25zdCBkZXBsb3lTaGlwID0gKHNoaXAsIG9yaWdpbiwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcDtcbiAgICBjb25zdCBbeCwgeV0gPSBvcmlnaW47XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHNoaXBCb2FyZFtpXVt5XSA9IHsgc2hpcCwgcG9zaXRpb246IGkgLSB4IH07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHNoaXBCb2FyZFt4XVtpXSA9IHsgc2hpcCwgcG9zaXRpb246IGkgLSB5IH07XG4gICAgICB9XG4gICAgfVxuICAgIGZsZWV0LnB1c2goc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgZGVwbG95RmxlZXQgPSAoaW5wdXRGbGVldCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgaW5wdXRGbGVldC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGlucHV0RmxlZXQuaW5kZXhPZihzaGlwKTtcbiAgICAgIGRlcGxveVNoaXAoc2hpcCwgY29vcmRpbmF0ZXNbaW5kZXhdLCBvcmllbnRhdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8vIEJvYXJkLXJlY2VpdmUtYXR0YWNrIHZhbGlkYXRvci4gTWFyayBjb29yZGluYXRlIGFzIHRydWUgYW5kIHRoZW4gcmV0dXJuIHRydWUgaWYgc2hvb3RpbmcgY29vcmRpbmF0ZSBpcyB2YWxpZFxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoc2hvb3RpbmdCb2FyZFt4XVt5XSA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xuICAgIHNob290aW5nQm9hcmRbeF1beV0gPSB0cnVlO1xuICAgIGlmIChzaGlwQm9hcmRbeF1beV0pIHtcbiAgICAgIGNvbnN0IHsgc2hpcCwgcG9zaXRpb24gfSA9IHNoaXBCb2FyZFt4XVt5XTtcbiAgICAgIHNoaXAuaGl0KHBvc2l0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgaXNGbGVldFN1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGZsZWV0LmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2hpcEJvYXJkLFxuICAgIHNob290aW5nQm9hcmQsXG4gICAgZ3JpZEJvYXJkLFxuICAgIGRlcGxveVNoaXAsXG4gICAgZGVwbG95RmxlZXQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBpc0ZsZWV0U3VuayxcbiAgICByZXNldCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IChpc0h1bWFuQXJnLCBvcHBvbmVudEJvYXJkKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0geyB0dXJuOiBmYWxzZSB9O1xuICBjb25zdCBpc0h1bWFuID0gaXNIdW1hbkFyZztcblxuICBjb25zdCBnZXRUdXJuID0gKCkgPT4gc3RhdGUudHVybjtcbiAgY29uc3Qgc2V0VHVybiA9ICh2YWwpID0+IHtcbiAgICBzdGF0ZS50dXJuID0gdmFsO1xuICB9O1xuICBjb25zdCB0b2dnbGVUdXJuID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gIXN0YXRlLnR1cm47XG4gICAgc3RhdGUudHVybiA9IG5ld1N0YXRlO1xuICB9O1xuXG4gIGNvbnN0IHBsYXkgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IGlzVmFsaWRIaXQgPSBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgcmV0dXJuIGlzVmFsaWRIaXQ7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJQbGF5ID0gKCkgPT4ge1xuICAgIGxldCBlbGlnaWJsZVNxdWFyZXNDb3VudDtcbiAgICBjb25zdCByYW5kb21IaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCByb3cgPSBbLi4ub3Bwb25lbnRCb2FyZC5zaG9vdGluZ0JvYXJkW3JhbmRvbV0ua2V5cygpXTtcbiAgICAgIGNvbnN0IHJvd0ZpbHRlcmVkID0gcm93LmZpbHRlcigoZWwpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByb3cuaW5kZXhPZihlbCk7XG4gICAgICAgIGNvbnN0IHNob290aW5nU3F1YXJlID0gWy4uLm9wcG9uZW50Qm9hcmQuc2hvb3RpbmdCb2FyZFtyYW5kb21dXVtpbmRleF07XG4gICAgICAgIHJldHVybiBzaG9vdGluZ1NxdWFyZSAhPT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgZWxpZ2libGVTcXVhcmVzQ291bnQgPSByb3dGaWx0ZXJlZC5sZW5ndGg7XG4gICAgICBjb25zdCBjaG9pY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbGlnaWJsZVNxdWFyZXNDb3VudCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyb3dGaWx0ZXJlZCk7XG4gICAgICBjb25zdCBpbmRleCA9IHJvd0ZpbHRlcmVkW2Nob2ljZV07XG4gICAgICByZXR1cm4geyByYW5kb20sIGluZGV4IH07XG4gICAgfTtcbiAgICBsZXQgcmFuZG9tO1xuICAgIGxldCBpbmRleDtcbiAgICBsZXQgbGltaXQgPSAwO1xuICAgIHdoaWxlICghTnVtYmVyLmlzSW50ZWdlcihpbmRleCkgJiYgbGltaXQgPCAxMCkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IHJhbmRvbUhpdCgpO1xuICAgICAgaW5kZXggPSBjb29yZGluYXRlLmluZGV4O1xuICAgICAgcmFuZG9tID0gY29vcmRpbmF0ZS5yYW5kb207XG4gICAgICBsaW1pdCArPSAxO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ3aGlsZSB3YXMgY2FsbGVkLCByb3c6IFwiLCByYW5kb20sIFwiLCBpbmRleDogXCIsIGluZGV4KTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cocmFuZG9tLCBpbmRleCwgTnVtYmVyLmlzSW50ZWdlcihpbmRleCArIDEpKTtcbiAgICAvLyBwbGF5KHJhbmRvbSwgaW5kZXgpO1xuICAgIG9wcG9uZW50Qm9hcmQuZ3JpZEJvYXJkW3JhbmRvbV1baW5kZXhdLmNsaWNrKCk7XG4gICAgLy8gaW5kZXggPSAwO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb3Bwb25lbnRCb2FyZCxcbiAgICBnZXRUdXJuLFxuICAgIHNldFR1cm4sXG4gICAgdG9nZ2xlVHVybixcbiAgICBpc0h1bWFuLFxuICAgIHBsYXksXG4gICAgY29tcHV0ZXJQbGF5LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiaW1wb3J0IHsgZHJhZ0xpc3RlbmVySW5pdCB9IGZyb20gXCIuL2RvbV9tb2R1bGVcIjtcblxuY29uc3QgZGVwbG95bWVudFByZXBhcmF0aW9uID0gKGZsZWV0LCBpc0h1bWFuKSA9PiB7XG4gIGNvbnN0IHVzZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVzZXJCb2FyZC5jbGFzc05hbWUgPSBcInVzZXItYm9hcmRcIjtcbiAgY29uc3QgcmVuZGVyU2hpcCA9IChzaGlwLCBpZCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlcmVkU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVuZGVyZWRTaGlwLmNsYXNzTmFtZSA9IFwiZHJhZ2dlZC1zaGlwXCI7XG4gICAgcmVuZGVyZWRTaGlwLmlkID0gaWQ7XG4gICAgaWYgKGlzSHVtYW4pIHtcbiAgICAgIHJlbmRlcmVkU2hpcC5kcmFnZ2FibGUgPSBcInRydWVcIjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzdWJTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN1YlNoaXAuZGF0YXNldC5pZCA9IGk7XG4gICAgICBzdWJTaGlwLmNsYXNzTmFtZSA9IFwic2hpcC1zcXVhcmVcIjtcbiAgICAgIHJlbmRlcmVkU2hpcC5hcHBlbmRDaGlsZChzdWJTaGlwKTtcbiAgICB9XG4gICAgdXNlckJvYXJkLmFwcGVuZENoaWxkKHJlbmRlcmVkU2hpcCk7XG4gIH07XG4gIGNvbnN0IGlkVGVtcGxhdGUgPSBpc0h1bWFuID8gXCJodW1hblwiIDogXCJjb21wdXRlclwiO1xuICBmbGVldC5mb3JFYWNoKChzaGlwKSA9PiByZW5kZXJTaGlwKHNoaXAsIGAke2lkVGVtcGxhdGV9LSR7c2hpcC5uYW1lfWApKTtcbiAgcmV0dXJuIHVzZXJCb2FyZDtcbn07XG5cbmNvbnN0IFBsYXllckRlcGxveW1lbnQgPSAoZmxlZXRPbmUsIGZsZWV0VHdvKSA9PiB7XG4gIGNvbnN0IHByZXBhcmF0aW9uQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgcHJlcGFyYXRpb25Cb2FyZC5jbGFzc05hbWUgPSBcInByZXBhcmF0aW9uLWJvYXJkXCI7XG4gIC8vIHByZXBhcmF0aW9uQm9hcmQudGV4dENvbnRlbnQgPSBcIlByZXBhcmF0aW9uIEJvYXJkXCI7XG5cbiAgcHJlcGFyYXRpb25Cb2FyZC5hcHBlbmRDaGlsZChkZXBsb3ltZW50UHJlcGFyYXRpb24oZmxlZXRPbmUsIHRydWUpKTtcbiAgcHJlcGFyYXRpb25Cb2FyZC5hcHBlbmRDaGlsZChkZXBsb3ltZW50UHJlcGFyYXRpb24oZmxlZXRUd28pKTtcblxuICBjb25zdCBbYXBwXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhcHBcIik7XG4gIGFwcC5hcHBlbmRDaGlsZChwcmVwYXJhdGlvbkJvYXJkKTtcbiAgLy8gYXBwLmFwcGVuZENoaWxkKFwicHJlcGFyYXRpb25Cb2FyZFwiKTtcblxuICBkcmFnTGlzdGVuZXJJbml0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJEZXBsb3ltZW50O1xuIiwiY29uc3QgU2hpcCA9IChpbnB1dExlbmd0aCwgaW5wdXROYW1lKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIG5hbWU6IGlucHV0TmFtZSxcbiAgICBsZW5ndGg6IGlucHV0TGVuZ3RoLFxuICB9O1xuICBjb25zdCB7IG5hbWUsIGxlbmd0aCB9ID0gc3RhdGU7XG4gIGNvbnN0IGJvZHlIaXQgPSBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpO1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGJvZHlIaXRbcG9zaXRpb25dID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBib2R5SGl0LmV2ZXJ5KChwb3NpdGlvbikgPT4gcG9zaXRpb24gPT09IHRydWUpO1xuXG4gIHJldHVybiB7IGxlbmd0aCwgaGl0LCBpc1N1bmssIG5hbWUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG4vLyBpbXBvcnQgRmxlZXRUZW1wbGF0ZSBmcm9tIFwiLi9qc19tb2R1bGVzL0ZsZWV0VGVtcGxhdGVcIjtcblxuY29uc3Qgc3BlY2lhbENsaWNrSGFuZGxlciA9IChlbGVtZW50LCBwbGF5ZXIsIHgsIHksIGdhbWVCb2FyZCwgY2hhbmdlVHVybikgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiZHJvcFwiKTtcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJcIjtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImRyb3Atem9uZVwiKSB7XG4gICAgICBjb25zdCB7IGlkLCBpbmRleCB9ID0gSlNPTi5wYXJzZShlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XG4gICAgICBjb25zdCBkcmFnZ2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgY29uc3Qgc2hpcE5hbWUgPSBpZC5zcGxpdChcIi1cIikucG9wKCk7XG4gICAgICBjb25zdCBzaGlwTGVuZ3RoID0gZHJhZ2dlZC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgsIHNoaXBOYW1lKTtcblxuICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pZC5zdWJzdHJpbmcoMCwgMSksIDEwKTtcbiAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaWQuc3Vic3RyaW5nKDEsIDIpLCAxMCkgLSBpbmRleDtcbiAgICAgIGdhbWVCb2FyZC5kZXBsb3lTaGlwKHNoaXAsIFtyb3csIGNvbF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBzaGlwLmxlbmd0aCArIGNvbDsgaSArPSAxKSB7XG4gICAgICAgIGdhbWVCb2FyZC5ncmlkQm9hcmRbcm93XVtpXS5jbGFzc0xpc3QuYWRkKFwiYmxhY2tcIik7XG4gICAgICB9XG4gICAgICBkcmFnZ2VkLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZHJhZ2dlZCk7XG4gICAgfVxuICB9KTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgW1wiY2xpY2tcIiwgXCJtb3VzZWVudGVyXCJdLmZvckVhY2goKGV2ZW50KSA9PlxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgY29uc3Qgd2lubmVyRXhpc3QgPSBnYW1lQm9hcmQuaXNGbGVldFN1bmsoKTtcbiAgICAgIGlmIChwbGF5ZXIuZ2V0VHVybigpICYmICF3aW5uZXJFeGlzdCkge1xuICAgICAgICBjb25zdCB2YWxpZCA9IHBsYXllci5wbGF5KHgsIHkpO1xuICAgICAgICBpZiAodmFsaWQpIGNoYW5nZVR1cm4oKTtcbiAgICAgICAgaWYgKGdhbWVCb2FyZC5zaGlwQm9hcmRbeF1beV0pIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJibGFja1wiKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH0gZWxzZSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1oaXRcIik7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlR3JpZDEwID0gKHBhcmVudCwgZ2FtZUJvYXJkLCBwbGF5ZXIsIGNoYW5nZVR1cm4pID0+IHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGdyaWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRFbGVtZW50LmRhdGFzZXQuaWQgPSBgJHtpfSR7an1gO1xuICAgICAgaWYgKCFwbGF5ZXIuaXNIdW1hbikge1xuICAgICAgICAvLyB0aGlzIG1lYW5zIHRoZSBib2FyZCBiZWxvbmdzIHRvIGh1bWFuIGFuZCBpcyBjb21wdXRlcidzIHRhcmdldFxuICAgICAgICBncmlkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJvcC16b25lXCIpO1xuICAgICAgfVxuICAgICAgc3BlY2lhbENsaWNrSGFuZGxlcihncmlkRWxlbWVudCwgcGxheWVyLCBpLCBqLCBnYW1lQm9hcmQsIGNoYW5nZVR1cm4pO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGdyaWRFbGVtZW50KTtcbiAgICAgIGNvbnN0IHsgZ3JpZEJvYXJkIH0gPSBnYW1lQm9hcmQ7XG4gICAgICBncmlkQm9hcmRbaV1bal0gPSBncmlkRWxlbWVudDtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRyYWdMaXN0ZW5lckluaXQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBTcXVhcmVzID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaGlwLXNxdWFyZVwiKV07XG4gIGxldCBncmFiU2hpcEluZGV4O1xuICBzaGlwU3F1YXJlcy5mb3JFYWNoKChzaGlwU3F1YXJlKSA9PiB7XG4gICAgc2hpcFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsICgpID0+IHtcbiAgICAgIGdyYWJTaGlwSW5kZXggPSBwYXJzZUludChzaGlwU3F1YXJlLmRhdGFzZXQuaWQsIDEwKTtcbiAgICB9KTtcbiAgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnXCIsICgpID0+IHt9LCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJkcmFnc3RhcnRcIixcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHsgaWQ6IGUudGFyZ2V0LmlkLCBpbmRleDogZ3JhYlNoaXBJbmRleCB9O1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgZS50YXJnZXQuc3R5bGUub3BhY2l0eSA9IDAuNTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJkcmFnZW5kXCIsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZHJhZyBlbmRcIik7XG4gICAgICBlLnRhcmdldC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJkcmFnZW50ZXJcIixcbiAgICAoZSkgPT4ge1xuICAgICAgLy8gaGlnaGxpZ2h0IHBvdGVudGlhbCBkcm9wIHRhcmdldCB3aGVuIHRoZSBkcmFnZ2FibGUgZWxlbWVudCBlbnRlcnMgaXRcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wLXpvbmVcIikpIHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwicHVycGxlXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJkcmFnbGVhdmVcIixcbiAgICAoZSkgPT4ge1xuICAgICAgLy8gcmVzZXQgYmFja2dyb3VuZCBvZiBwb3RlbnRpYWwgZHJvcCB0YXJnZXQgd2hlbiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgbGVhdmVzIGl0XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcC16b25lXCIpKSB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAvLyAgIFwiZHJvcFwiLFxuICAvLyAgIChlKSA9PiB7XG4gIC8vICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIChvcGVuIGFzIGxpbmsgZm9yIHNvbWUgZWxlbWVudHMpXG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcImRyb3BcIik7XG4gIC8vICAgICAvLyBtb3ZlIGRyYWdnZWQgZWxlbSB0byB0aGUgc2VsZWN0ZWQgZHJvcCB0YXJnZXRcbiAgLy8gICAgIC8vIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZHJvcHpvbmVcIikge1xuICAvLyAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiXCI7XG4gIC8vICAgICAvLyBkcmFnZ2VkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGRyYWdnZWQgKTtcbiAgLy8gICAgIC8vIGUudGFyZ2V0LmFwcGVuZENoaWxkKCBkcmFnZ2VkICk7XG4gIC8vICAgICAvLyB9XG4gIC8vICAgfSxcbiAgLy8gICBmYWxzZVxuICAvLyApO1xufTtcblxuY29uc3QgYWRkQnV0dG9uSGFuZGxlciA9IChlbGVtZW50LCBpbml0KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXQpO1xufTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVHcmlkMTAsIGFkZEJ1dHRvbkhhbmRsZXIsIGRyYWdMaXN0ZW5lckluaXQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL2pzX21vZHVsZXMvUGxheWVyXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2pzX21vZHVsZXMvR2FtZWJvYXJkXCI7XG4vLyBpbXBvcnQgU2hpcCBmcm9tIFwiLi9qc19tb2R1bGVzL1NoaXBcIjtcbmltcG9ydCBGbGVldFRlbXBsYXRlIGZyb20gXCIuL2pzX21vZHVsZXMvRmxlZXRUZW1wbGF0ZVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVHcmlkMTAgfSBmcm9tIFwiLi9qc19tb2R1bGVzL2RvbV9tb2R1bGVcIjtcbmltcG9ydCBQbGF5ZXJEZXBsb3ltZW50IGZyb20gXCIuL2pzX21vZHVsZXMvUGxheWVyRGVwbG95bWVudFwiO1xuXG5jb25zdCBnYW1lSGVscGVyID0gKCkgPT4ge1xuICBjb25zdCBjaGVja1dpbm5lciA9IChwbGF5ZXJPbmUsIHBsYXllclR3bykgPT4ge1xuICAgIGlmIChwbGF5ZXJPbmUub3Bwb25lbnRCb2FyZC5pc0ZsZWV0U3VuaygpKSByZXR1cm4gcGxheWVyT25lO1xuICAgIGlmIChwbGF5ZXJUd28ub3Bwb25lbnRCb2FyZC5pc0ZsZWV0U3VuaygpKSByZXR1cm4gcGxheWVyVHdvO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5V2lubmVyID0gKHdpbm5lcikgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXBsYXlcIikudGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIud2lubmVyLWFubm91bmNlbWVudFwiXG4gICAgKS50ZXh0Q29udGVudCA9IGAke3dpbm5lci50aXRsZX0gV2luYDtcbiAgfTtcblxuICBjb25zdCByZXNldERpc3BsYXlXaW5uZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlVHVybiA9IChwbGF5ZXJPbmUsIHBsYXllclR3bykgPT4ge1xuICAgIGNvbnN0IHdpbm5lciA9IGNoZWNrV2lubmVyKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3aW5uZXIudGl0bGUpO1xuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgIGRpc3BsYXlXaW5uZXIod2lubmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyT25lLnRvZ2dsZVR1cm4oKTtcbiAgICAgIHBsYXllclR3by50b2dnbGVUdXJuKCk7XG4gICAgICBpZiAocGxheWVyVHdvLmdldFR1cm4oKSkge1xuICAgICAgICBwbGF5ZXJUd28uY29tcHV0ZXJQbGF5KCk7XG4gICAgICAgIGlmICh3aW5uZXIpIHtcbiAgICAgICAgICBkaXNwbGF5V2lubmVyKHdpbm5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgY2hlY2tXaW5uZXIsIGRpc3BsYXlXaW5uZXIsIGNoYW5nZVR1cm4sIHJlc2V0RGlzcGxheVdpbm5lciB9O1xufTtcblxuY29uc3QgZ2FtZUxvb3AgPSAoKCkgPT4ge1xuICAvLyBjb25zdCBjb29yZGluYXRlc09uZSA9IFtcbiAgLy8gICBbMywgMF0sXG4gIC8vICAgWzIsIDVdLFxuICAvLyAgIFs0LCAzXSxcbiAgLy8gICBbNSwgNl0sXG4gIC8vICAgWzMsIDhdLFxuICAvLyBdO1xuICBjb25zdCBjb29yZGluYXRlc1R3byA9IFtcbiAgICBbMSwgM10sXG4gICAgWzIsIDVdLFxuICAgIFs0LCAzXSxcbiAgICBbNSwgNl0sXG4gICAgWzMsIDJdLFxuICBdO1xuXG4gIC8vIGxldCBib2FyZE9uZTtcbiAgLy8gbGV0IGJvYXJkVHdvO1xuICBsZXQgcGxheWVyO1xuICBsZXQgY29tcHV0ZXI7XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhGbGVldFRlbXBsYXRlKCkpO1xuICAgIGNvbnN0IGZsZWV0T25lID0gRmxlZXRUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IGZsZWV0VHdvID0gRmxlZXRUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IGJvYXJkT25lID0gR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgYm9hcmRUd28gPSBHYW1lYm9hcmQoKTtcbiAgICBbcGxheWVyLCBjb21wdXRlcl0gPSBbUGxheWVyKHRydWUsIGJvYXJkVHdvKSwgUGxheWVyKGZhbHNlLCBib2FyZE9uZSldO1xuICAgIHBsYXllci50aXRsZSA9IFwiWW91XCI7XG4gICAgY29tcHV0ZXIudGl0bGUgPSBcIkNvbXB1dGVyXCI7XG5cbiAgICAvLyBib2FyZE9uZS5kZXBsb3lGbGVldChjb29yZGluYXRlc09uZSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBib2FyZFR3by5kZXBsb3lGbGVldChmbGVldFR3bywgY29vcmRpbmF0ZXNUd28sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb25zdCBbZ3JpZE9uZSwgZ3JpZFR3b10gPVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdyaWQtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgeyBjaGFuZ2VUdXJuLCByZXNldERpc3BsYXlXaW5uZXIgfSA9IGdhbWVIZWxwZXIoKTtcbiAgICBnZW5lcmF0ZUdyaWQxMChncmlkT25lLCBib2FyZE9uZSwgY29tcHV0ZXIsICgpID0+IHtcbiAgICAgIGNoYW5nZVR1cm4ocGxheWVyLCBjb21wdXRlcik7XG4gICAgfSk7XG4gICAgZ2VuZXJhdGVHcmlkMTAoZ3JpZFR3bywgYm9hcmRUd28sIHBsYXllciwgKCkgPT4ge1xuICAgICAgY2hhbmdlVHVybihwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICB9KTtcblxuICAgIFBsYXllckRlcGxveW1lbnQoZmxlZXRPbmUsIGZsZWV0VHdvKTtcbiAgICByZXNldERpc3BsYXlXaW5uZXIoKTtcbiAgICBwbGF5ZXIuc2V0VHVybih0cnVlKTtcbiAgfTtcblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1wbGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lTG9vcC5pbml0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=