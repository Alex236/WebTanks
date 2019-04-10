/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__extends\", function() { return __extends; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__assign\", function() { return __assign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__rest\", function() { return __rest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__decorate\", function() { return __decorate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__param\", function() { return __param; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__metadata\", function() { return __metadata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__awaiter\", function() { return __awaiter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__generator\", function() { return __generator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__exportStar\", function() { return __exportStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__values\", function() { return __values; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__read\", function() { return __read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__spread\", function() { return __spread; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__await\", function() { return __await; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncGenerator\", function() { return __asyncGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncDelegator\", function() { return __asyncDelegator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncValues\", function() { return __asyncValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__makeTemplateObject\", function() { return __makeTemplateObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importStar\", function() { return __importStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importDefault\", function() { return __importDefault; });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\r\n            t[p[i]] = s[p[i]];\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\r\n    if (m) return m.call(o);\r\n    return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./src/client/assets sync recursive ^\\.\\/.*\\.mp3$":
/*!**********************************************!*\
  !*** ./src/client/assets sync ^\.\/.*\.mp3$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./endGame.mp3\": \"./src/client/assets/endGame.mp3\",\n\t\"./fire.mp3\": \"./src/client/assets/fire.mp3\",\n\t\"./game_over.mp3\": \"./src/client/assets/game_over.mp3\",\n\t\"./killSomeone.mp3\": \"./src/client/assets/killSomeone.mp3\",\n\t\"./move.mp3\": \"./src/client/assets/move.mp3\",\n\t\"./sounds/fone1.mp3\": \"./src/client/assets/sounds/fone1.mp3\",\n\t\"./sounds/move.mp3\": \"./src/client/assets/sounds/move.mp3\",\n\t\"./startGame.mp3\": \"./src/client/assets/startGame.mp3\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/client/assets sync recursive ^\\\\.\\\\/.*\\\\.mp3$\";\n\n//# sourceURL=webpack:///./src/client/assets_sync_^\\.\\/.*\\.mp3$?");

/***/ }),

/***/ "./src/client/assets/endGame.mp3":
/*!***************************************!*\
  !*** ./src/client/assets/endGame.mp3 ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/endGame.mp3\";\n\n//# sourceURL=webpack:///./src/client/assets/endGame.mp3?");

/***/ }),

/***/ "./src/client/assets/fire.mp3":
/*!************************************!*\
  !*** ./src/client/assets/fire.mp3 ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/fire.mp3\";\n\n//# sourceURL=webpack:///./src/client/assets/fire.mp3?");

/***/ }),

/***/ "./src/client/assets/game_over.mp3":
/*!*****************************************!*\
  !*** ./src/client/assets/game_over.mp3 ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/game_over.mp3\";\n\n//# sourceURL=webpack:///./src/client/assets/game_over.mp3?");

/***/ }),

/***/ "./src/client/assets/killSomeone.mp3":
/*!*******************************************!*\
  !*** ./src/client/assets/killSomeone.mp3 ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/killSomeone.mp3\";\n\n//# sourceURL=webpack:///./src/client/assets/killSomeone.mp3?");

/***/ }),

/***/ "./src/client/assets/move.mp3":
/*!************************************!*\
  !*** ./src/client/assets/move.mp3 ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/move.mp3\";\n\n//# sourceURL=webpack:///./src/client/assets/move.mp3?");

/***/ }),

/***/ "./src/client/assets/sounds/fone1.mp3":
/*!********************************************!*\
  !*** ./src/client/assets/sounds/fone1.mp3 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/fone1.mp3\";\n\n//# sourceURL=webpack:///./src/client/assets/sounds/fone1.mp3?");

/***/ }),

/***/ "./src/client/assets/sounds/move.mp3":
/*!*******************************************!*\
  !*** ./src/client/assets/sounds/move.mp3 ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/move.mp3\";\n\n//# sourceURL=webpack:///./src/client/assets/sounds/move.mp3?");

/***/ }),

/***/ "./src/client/assets/sprites sync recursive ^\\.\\/.*\\.svg$":
/*!******************************************************!*\
  !*** ./src/client/assets/sprites sync ^\.\/.*\.svg$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./AverageFire.svg\": \"./src/client/assets/sprites/AverageFire.svg\",\n\t\"./AverageTankAnimationSecond.svg\": \"./src/client/assets/sprites/AverageTankAnimationSecond.svg\",\n\t\"./Base.svg\": \"./src/client/assets/sprites/Base.svg\",\n\t\"./BaseKill.svg\": \"./src/client/assets/sprites/BaseKill.svg\",\n\t\"./Brick.svg\": \"./src/client/assets/sprites/Brick.svg\",\n\t\"./CreateButton.svg\": \"./src/client/assets/sprites/CreateButton.svg\",\n\t\"./EasyFire.svg\": \"./src/client/assets/sprites/EasyFire.svg\",\n\t\"./EasyTankAnimationSecond.svg\": \"./src/client/assets/sprites/EasyTankAnimationSecond.svg\",\n\t\"./FastBulletDown.svg\": \"./src/client/assets/sprites/FastBulletDown.svg\",\n\t\"./FastBulletLeft.svg\": \"./src/client/assets/sprites/FastBulletLeft.svg\",\n\t\"./FastBulletRight.svg\": \"./src/client/assets/sprites/FastBulletRight.svg\",\n\t\"./FastBulletUp.svg\": \"./src/client/assets/sprites/FastBulletUp.svg\",\n\t\"./FourCellBrick.svg\": \"./src/client/assets/sprites/FourCellBrick.svg\",\n\t\"./FourCellGrass.svg\": \"./src/client/assets/sprites/FourCellGrass.svg\",\n\t\"./FourCellHardBrick.svg\": \"./src/client/assets/sprites/FourCellHardBrick.svg\",\n\t\"./FourCellIce.svg\": \"./src/client/assets/sprites/FourCellIce.svg\",\n\t\"./FourCellRoad.svg\": \"./src/client/assets/sprites/FourCellRoad.svg\",\n\t\"./FourCellWater.svg\": \"./src/client/assets/sprites/FourCellWater.svg\",\n\t\"./Grass.svg\": \"./src/client/assets/sprites/Grass.svg\",\n\t\"./HardBrick.svg\": \"./src/client/assets/sprites/HardBrick.svg\",\n\t\"./HeavyTankDown.svg\": \"./src/client/assets/sprites/HeavyTankDown.svg\",\n\t\"./HeavyTankLeft.svg\": \"./src/client/assets/sprites/HeavyTankLeft.svg\",\n\t\"./HeavyTankRight.svg\": \"./src/client/assets/sprites/HeavyTankRight.svg\",\n\t\"./HeavyTankUp.svg\": \"./src/client/assets/sprites/HeavyTankUp.svg\",\n\t\"./Ice.svg\": \"./src/client/assets/sprites/Ice.svg\",\n\t\"./LowTankDown.svg\": \"./src/client/assets/sprites/LowTankDown.svg\",\n\t\"./LowTankLeft.svg\": \"./src/client/assets/sprites/LowTankLeft.svg\",\n\t\"./LowTankRight.svg\": \"./src/client/assets/sprites/LowTankRight.svg\",\n\t\"./LowTankUp.svg\": \"./src/client/assets/sprites/LowTankUp.svg\",\n\t\"./MediumTankDown.svg\": \"./src/client/assets/sprites/MediumTankDown.svg\",\n\t\"./MediumTankLeft.svg\": \"./src/client/assets/sprites/MediumTankLeft.svg\",\n\t\"./MediumTankRight.svg\": \"./src/client/assets/sprites/MediumTankRight.svg\",\n\t\"./MediumTankUp.svg\": \"./src/client/assets/sprites/MediumTankUp.svg\",\n\t\"./OneCellBrick.svg\": \"./src/client/assets/sprites/OneCellBrick.svg\",\n\t\"./OneCellGrass.svg\": \"./src/client/assets/sprites/OneCellGrass.svg\",\n\t\"./OneCellHardBrick.svg\": \"./src/client/assets/sprites/OneCellHardBrick.svg\",\n\t\"./OneCellIce.svg\": \"./src/client/assets/sprites/OneCellIce.svg\",\n\t\"./OneCellRoad.svg\": \"./src/client/assets/sprites/OneCellRoad.svg\",\n\t\"./OneCellWater.svg\": \"./src/client/assets/sprites/OneCellWater.svg\",\n\t\"./Road.svg\": \"./src/client/assets/sprites/Road.svg\",\n\t\"./Rubber.svg\": \"./src/client/assets/sprites/Rubber.svg\",\n\t\"./SixteenCellBrick.svg\": \"./src/client/assets/sprites/SixteenCellBrick.svg\",\n\t\"./SixteenCellGrass.svg\": \"./src/client/assets/sprites/SixteenCellGrass.svg\",\n\t\"./SixteenCellHardBrick.svg\": \"./src/client/assets/sprites/SixteenCellHardBrick.svg\",\n\t\"./SixteenCellIce.svg\": \"./src/client/assets/sprites/SixteenCellIce.svg\",\n\t\"./SixteenCellRoad.svg\": \"./src/client/assets/sprites/SixteenCellRoad.svg\",\n\t\"./SixteenCellWater.svg\": \"./src/client/assets/sprites/SixteenCellWater.svg\",\n\t\"./SlowBulletDown.svg\": \"./src/client/assets/sprites/SlowBulletDown.svg\",\n\t\"./SlowBulletLeft.svg\": \"./src/client/assets/sprites/SlowBulletLeft.svg\",\n\t\"./SlowBulletRight.svg\": \"./src/client/assets/sprites/SlowBulletRight.svg\",\n\t\"./SlowBulletUp.svg\": \"./src/client/assets/sprites/SlowBulletUp.svg\",\n\t\"./Water.svg\": \"./src/client/assets/sprites/Water.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites_sync_^\\.\\/.*\\.svg$?");

/***/ }),

/***/ "./src/client/assets/sprites/AverageFire.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/sprites/AverageFire.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/AverageFire.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/AverageFire.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/AverageTankAnimationSecond.svg":
/*!******************************************************************!*\
  !*** ./src/client/assets/sprites/AverageTankAnimationSecond.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/AverageTankAnimationSecond.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/AverageTankAnimationSecond.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/Base.svg":
/*!********************************************!*\
  !*** ./src/client/assets/sprites/Base.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/Base.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/Base.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/BaseKill.svg":
/*!************************************************!*\
  !*** ./src/client/assets/sprites/BaseKill.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/BaseKill.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/BaseKill.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/Brick.svg":
/*!*********************************************!*\
  !*** ./src/client/assets/sprites/Brick.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/Brick.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/Brick.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/CreateButton.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/sprites/CreateButton.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/CreateButton.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/CreateButton.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/EasyFire.svg":
/*!************************************************!*\
  !*** ./src/client/assets/sprites/EasyFire.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/EasyFire.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/EasyFire.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/EasyTankAnimationSecond.svg":
/*!***************************************************************!*\
  !*** ./src/client/assets/sprites/EasyTankAnimationSecond.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/EasyTankAnimationSecond.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/EasyTankAnimationSecond.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FastBulletDown.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/sprites/FastBulletDown.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FastBulletDown.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FastBulletDown.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FastBulletLeft.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/sprites/FastBulletLeft.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FastBulletLeft.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FastBulletLeft.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FastBulletRight.svg":
/*!*******************************************************!*\
  !*** ./src/client/assets/sprites/FastBulletRight.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FastBulletRight.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FastBulletRight.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FastBulletUp.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/sprites/FastBulletUp.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FastBulletUp.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FastBulletUp.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FourCellBrick.svg":
/*!*****************************************************!*\
  !*** ./src/client/assets/sprites/FourCellBrick.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FourCellBrick.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FourCellBrick.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FourCellGrass.svg":
/*!*****************************************************!*\
  !*** ./src/client/assets/sprites/FourCellGrass.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FourCellGrass.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FourCellGrass.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FourCellHardBrick.svg":
/*!*********************************************************!*\
  !*** ./src/client/assets/sprites/FourCellHardBrick.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FourCellHardBrick.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FourCellHardBrick.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FourCellIce.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/sprites/FourCellIce.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FourCellIce.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FourCellIce.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FourCellRoad.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/sprites/FourCellRoad.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FourCellRoad.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FourCellRoad.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/FourCellWater.svg":
/*!*****************************************************!*\
  !*** ./src/client/assets/sprites/FourCellWater.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/FourCellWater.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/FourCellWater.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/Grass.svg":
/*!*********************************************!*\
  !*** ./src/client/assets/sprites/Grass.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/Grass.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/Grass.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/HardBrick.svg":
/*!*************************************************!*\
  !*** ./src/client/assets/sprites/HardBrick.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/HardBrick.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/HardBrick.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/HeavyTankDown.svg":
/*!*****************************************************!*\
  !*** ./src/client/assets/sprites/HeavyTankDown.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/HeavyTankDown.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/HeavyTankDown.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/HeavyTankLeft.svg":
/*!*****************************************************!*\
  !*** ./src/client/assets/sprites/HeavyTankLeft.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/HeavyTankLeft.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/HeavyTankLeft.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/HeavyTankRight.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/sprites/HeavyTankRight.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/HeavyTankRight.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/HeavyTankRight.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/HeavyTankUp.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/sprites/HeavyTankUp.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/HeavyTankUp.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/HeavyTankUp.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/Ice.svg":
/*!*******************************************!*\
  !*** ./src/client/assets/sprites/Ice.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/Ice.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/Ice.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/LowTankDown.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/sprites/LowTankDown.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/LowTankDown.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/LowTankDown.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/LowTankLeft.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/sprites/LowTankLeft.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/LowTankLeft.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/LowTankLeft.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/LowTankRight.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/sprites/LowTankRight.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/LowTankRight.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/LowTankRight.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/LowTankUp.svg":
/*!*************************************************!*\
  !*** ./src/client/assets/sprites/LowTankUp.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/LowTankUp.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/LowTankUp.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/MediumTankDown.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/sprites/MediumTankDown.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/MediumTankDown.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/MediumTankDown.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/MediumTankLeft.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/sprites/MediumTankLeft.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/MediumTankLeft.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/MediumTankLeft.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/MediumTankRight.svg":
/*!*******************************************************!*\
  !*** ./src/client/assets/sprites/MediumTankRight.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/MediumTankRight.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/MediumTankRight.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/MediumTankUp.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/sprites/MediumTankUp.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/MediumTankUp.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/MediumTankUp.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/OneCellBrick.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/sprites/OneCellBrick.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/OneCellBrick.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/OneCellBrick.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/OneCellGrass.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/sprites/OneCellGrass.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/OneCellGrass.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/OneCellGrass.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/OneCellHardBrick.svg":
/*!********************************************************!*\
  !*** ./src/client/assets/sprites/OneCellHardBrick.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/OneCellHardBrick.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/OneCellHardBrick.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/OneCellIce.svg":
/*!**************************************************!*\
  !*** ./src/client/assets/sprites/OneCellIce.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/OneCellIce.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/OneCellIce.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/OneCellRoad.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/sprites/OneCellRoad.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/OneCellRoad.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/OneCellRoad.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/OneCellWater.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/sprites/OneCellWater.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/OneCellWater.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/OneCellWater.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/Road.svg":
/*!********************************************!*\
  !*** ./src/client/assets/sprites/Road.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/Road.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/Road.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/Rubber.svg":
/*!**********************************************!*\
  !*** ./src/client/assets/sprites/Rubber.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/Rubber.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/Rubber.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SixteenCellBrick.svg":
/*!********************************************************!*\
  !*** ./src/client/assets/sprites/SixteenCellBrick.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SixteenCellBrick.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SixteenCellBrick.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SixteenCellGrass.svg":
/*!********************************************************!*\
  !*** ./src/client/assets/sprites/SixteenCellGrass.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SixteenCellGrass.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SixteenCellGrass.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SixteenCellHardBrick.svg":
/*!************************************************************!*\
  !*** ./src/client/assets/sprites/SixteenCellHardBrick.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SixteenCellHardBrick.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SixteenCellHardBrick.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SixteenCellIce.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/sprites/SixteenCellIce.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SixteenCellIce.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SixteenCellIce.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SixteenCellRoad.svg":
/*!*******************************************************!*\
  !*** ./src/client/assets/sprites/SixteenCellRoad.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SixteenCellRoad.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SixteenCellRoad.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SixteenCellWater.svg":
/*!********************************************************!*\
  !*** ./src/client/assets/sprites/SixteenCellWater.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SixteenCellWater.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SixteenCellWater.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SlowBulletDown.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/sprites/SlowBulletDown.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SlowBulletDown.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SlowBulletDown.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SlowBulletLeft.svg":
/*!******************************************************!*\
  !*** ./src/client/assets/sprites/SlowBulletLeft.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SlowBulletLeft.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SlowBulletLeft.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SlowBulletRight.svg":
/*!*******************************************************!*\
  !*** ./src/client/assets/sprites/SlowBulletRight.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SlowBulletRight.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SlowBulletRight.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/SlowBulletUp.svg":
/*!****************************************************!*\
  !*** ./src/client/assets/sprites/SlowBulletUp.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/SlowBulletUp.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/SlowBulletUp.svg?");

/***/ }),

/***/ "./src/client/assets/sprites/Water.svg":
/*!*********************************************!*\
  !*** ./src/client/assets/sprites/Water.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/Water.svg\";\n\n//# sourceURL=webpack:///./src/client/assets/sprites/Water.svg?");

/***/ }),

/***/ "./src/client/assets/startGame.mp3":
/*!*****************************************!*\
  !*** ./src/client/assets/startGame.mp3 ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/startGame.mp3\";\n\n//# sourceURL=webpack:///./src/client/assets/startGame.mp3?");

/***/ }),

/***/ "./src/client/ts/block-factory.ts":
/*!****************************************!*\
  !*** ./src/client/ts/block-factory.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./models/unit-type */ \"./src/client/ts/models/unit-type.ts\"), __webpack_require__(/*! ./models/block */ \"./src/client/ts/models/block.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, unit_type_1, block_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var BlockFactory = /** @class */ (function () {\n        function BlockFactory() {\n        }\n        BlockFactory.prototype.createBlock = function (block, x, y) {\n            switch (block) {\n                case unit_type_1.UnitType.Road:\n                    return new block_1.Block(x, y, block, true, true, false);\n                case unit_type_1.UnitType.Brick:\n                    return new block_1.Block(x, y, block, false, false, true);\n                case unit_type_1.UnitType.HardBrick:\n                    return new block_1.Block(x, y, block, false, false, false);\n                case unit_type_1.UnitType.Water:\n                    return new block_1.Block(x, y, block, true, false, false);\n                case unit_type_1.UnitType.Grass:\n                    return new block_1.Block(x, y, block, true, true, false);\n            }\n        };\n        return BlockFactory;\n    }());\n    exports.BlockFactory = BlockFactory;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/block-factory.ts?");

/***/ }),

/***/ "./src/client/ts/bullets-factory.ts":
/*!******************************************!*\
  !*** ./src/client/ts/bullets-factory.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./models/bullet */ \"./src/client/ts/models/bullet.ts\"), __webpack_require__(/*! ./models/unit-type */ \"./src/client/ts/models/unit-type.ts\"), __webpack_require__(/*! ./models/direction */ \"./src/client/ts/models/direction.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, bullet_1, unit_type_1, direction_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var BulletsFactory = /** @class */ (function () {\n        function BulletsFactory() {\n        }\n        BulletsFactory.prototype.createBullet = function (tank) {\n            var x = 0;\n            var y = 0;\n            switch (tank.direction) {\n                case direction_1.Directoin.Up:\n                    x = tank.x + 1;\n                    y = Math.round(tank.y);\n                    break;\n                case direction_1.Directoin.Down:\n                    x = tank.x + 1;\n                    y = Math.round(tank.y) + 2;\n                    break;\n                case direction_1.Directoin.Left:\n                    x = Math.round(tank.x);\n                    y = tank.y + 1;\n                    break;\n                case direction_1.Directoin.Right:\n                    x = Math.round(tank.x) + 2;\n                    y = tank.y + 1;\n                    break;\n            }\n            var speed = 0;\n            var damage = 0;\n            switch (tank.bulletType) {\n                case unit_type_1.UnitType.FastBullet:\n                    speed = 2;\n                    damage = 50;\n                    break;\n                case unit_type_1.UnitType.SlowBullet:\n                    speed = 2;\n                    damage = 100;\n                    break;\n            }\n            return new bullet_1.Bullet(x, y, tank.bulletType, tank.direction, speed, damage, tank);\n        };\n        return BulletsFactory;\n    }());\n    exports.BulletsFactory = BulletsFactory;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/bullets-factory.ts?");

/***/ }),

/***/ "./src/client/ts/game.ts":
/*!*******************************!*\
  !*** ./src/client/ts/game.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\"), __webpack_require__(/*! ./parameters */ \"./src/client/ts/parameters.ts\"), __webpack_require__(/*! ./models/key-code */ \"./src/client/ts/models/key-code.ts\"), __webpack_require__(/*! ./view/grid */ \"./src/client/ts/view/grid.ts\"), __webpack_require__(/*! ./view/sound */ \"./src/client/ts/view/sound.ts\"), __webpack_require__(/*! ./models/direction */ \"./src/client/ts/models/direction.ts\"), __webpack_require__(/*! ./bullets-factory */ \"./src/client/ts/bullets-factory.ts\"), __webpack_require__(/*! ./models/item-type */ \"./src/client/ts/models/item-type.ts\"), __webpack_require__(/*! ./models/unit-type */ \"./src/client/ts/models/unit-type.ts\"), __webpack_require__(/*! ./block-factory */ \"./src/client/ts/block-factory.ts\"), __webpack_require__(/*! ./models/Message */ \"./src/client/ts/models/Message.ts\"), __webpack_require__(/*! ./models/network-commands */ \"./src/client/ts/models/network-commands.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, parameters_1, key_code_1, grid_1, sound_1, direction_1, bullets_factory_1, item_type_1, unit_type_1, block_factory_1, Message_1, network_commands_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Game = /** @class */ (function () {\n        function Game() {\n            this.tanks = [];\n            this.allEvents = [];\n            this.filteredEvents = [];\n            this.blocks = [];\n            this.grid = new grid_1.Grid();\n            this.sound = new sound_1.Sound();\n            this.bulletsFactory = new bullets_factory_1.BulletsFactory();\n            this.bullets = [];\n            this.blockMap = new Array();\n            this.blockFactory = new block_factory_1.BlockFactory();\n            this.needRedraw = true;\n        }\n        Game.getGame = function () {\n            return this.game;\n        };\n        Game.prototype.initializeMap = function () {\n            for (var i = 0; i < parameters_1.Parameters.fieldHeight; i++) {\n                this.blockMap[i] = new Array();\n            }\n            for (var i = 0; i < parameters_1.Parameters.fieldHeight; i++) {\n                for (var j = 0; j < parameters_1.Parameters.fieldWidth; j++) {\n                    this.blockMap[i][j] = this.blockFactory.createBlock(unit_type_1.UnitType.Road, j, i);\n                }\n            }\n            for (var i = 0; i < this.blocks.length; i++) {\n                this.blockMap[this.blocks[i].y][this.blocks[i].x] = this.blocks[i];\n            }\n        };\n        Game.prototype.calculate = function () {\n            this.filteredEvents.forEach(function (event) { return event(); });\n            this.filteredEvents.splice(0, this.filteredEvents.length);\n            if (this.bullets.length !== 0) {\n                this.moveBullets();\n            }\n            this.getBlocks();\n            this.needRedraw = true;\n        };\n        Game.prototype.start = function (socket, userID, tanks, arena) {\n            var _this = this;\n            this.socket = socket;\n            this.userID = userID;\n            this.blocks = arena.blocks;\n            this.tanks = tanks;\n            this.initializeMap();\n            this.view();\n            this.needRedraw = true;\n            this.gameProcess = setInterval(function () {\n                _this.deleteUselessEvents();\n                if (_this.bullets.length !== 0 || _this.filteredEvents.length !== 0) {\n                    _this.calculate();\n                }\n            }, parameters_1.Parameters.timer);\n        };\n        Game.prototype.addEvent = function (command, author) {\n            var _this = this;\n            switch (command) {\n                case \"up\":\n                    this.filteredEvents.push(function () { return _this.tankUp(_this.tanks[author]); });\n                    break;\n                case \"down\":\n                    this.filteredEvents.push(function () { return _this.tankDown(_this.tanks[author]); });\n                    break;\n                case \"left\":\n                    this.filteredEvents.push(function () { return _this.tankLeft(_this.tanks[author]); });\n                    break;\n                case \"right\":\n                    this.filteredEvents.push(function () { return _this.tankRight(_this.tanks[author]); });\n                    break;\n                case \"space\":\n                    this.bullets.push(this.bulletsFactory.createBullet(this.tanks[author]));\n                    break;\n            }\n        };\n        Game.prototype.endGame = function () {\n            clearInterval(this.gameProcess);\n        };\n        Game.prototype.view = function () {\n            return tslib_1.__awaiter(this, void 0, void 0, function () {\n                var _this = this;\n                return tslib_1.__generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0: return [4 /*yield*/, setInterval(function () {\n                                if (_this.needRedraw) {\n                                    _this.grid.draw(_this.blocks, _this.tanks, _this.bullets);\n                                    _this.needRedraw = false;\n                                }\n                            }, 5)];\n                        case 1:\n                            _a.sent();\n                            return [2 /*return*/];\n                    }\n                });\n            });\n        };\n        Game.prototype.getBlocks = function () {\n            this.blocks = [];\n            for (var i = 0; i < parameters_1.Parameters.fieldHeight; i++) {\n                for (var j = 0; j < parameters_1.Parameters.fieldWidth; j++) {\n                    this.blockMap[i][j].unitType !== unit_type_1.UnitType.Road ? this.blocks.push(this.blockMap[i][j]) : {};\n                }\n            }\n        };\n        Game.prototype.deleteUselessEvents = function () {\n            var _this = this;\n            var count = this.allEvents.length;\n            var move = [];\n            var shoot = [];\n            var _loop_1 = function (i) {\n                var temp = i;\n                switch (this_1.allEvents[temp].key) {\n                    case key_code_1.KeyCode.Up:\n                        if (move.indexOf(this_1.allEvents[i].tank) == -1) {\n                            move.push(this_1.allEvents[i].tank);\n                            this_1.socket.send(JSON.stringify(new Message_1.Message(network_commands_1.NetworkCommands.PressedButton, this_1.userID, \"up\")));\n                        }\n                        break;\n                    case key_code_1.KeyCode.Down:\n                        if (move.indexOf(this_1.allEvents[i].tank) == -1) {\n                            move.push(this_1.allEvents[i].tank);\n                            this_1.socket.send(JSON.stringify(new Message_1.Message(network_commands_1.NetworkCommands.PressedButton, this_1.userID, \"down\")));\n                        }\n                        break;\n                    case key_code_1.KeyCode.Left:\n                        if (move.indexOf(this_1.allEvents[i].tank) == -1) {\n                            move.push(this_1.allEvents[i].tank);\n                            this_1.socket.send(JSON.stringify(new Message_1.Message(network_commands_1.NetworkCommands.PressedButton, this_1.userID, \"left\")));\n                        }\n                        break;\n                    case key_code_1.KeyCode.Right:\n                        if (move.indexOf(this_1.allEvents[i].tank) == -1) {\n                            move.push(this_1.allEvents[i].tank);\n                            this_1.socket.send(JSON.stringify(new Message_1.Message(network_commands_1.NetworkCommands.PressedButton, this_1.userID, \"right\")));\n                        }\n                        break;\n                    case key_code_1.KeyCode.Space:\n                        var counter_1 = 0;\n                        this_1.bullets.forEach(function (bullet) {\n                            _this.allEvents[i].tank === bullet.owner ? counter_1++ : {};\n                        });\n                        if (counter_1 < this_1.allEvents[i].tank.avaliableShoots) {\n                            //this.bullets.push(this.bulletsFactory.createBullet(this.allEvents[i].tank));\n                            shoot.push(this_1.allEvents[i].tank);\n                            this_1.socket.send(JSON.stringify(new Message_1.Message(network_commands_1.NetworkCommands.PressedButton, this_1.userID, \"space\")));\n                        }\n                        this_1.sound.run(\"fire\");\n                        break;\n                }\n            };\n            var this_1 = this;\n            for (var i = 0; i < count; i++) {\n                _loop_1(i);\n            }\n            this.allEvents.splice(0, count);\n        };\n        Game.prototype.turn = function (tank, necessaryDirection) {\n            if (tank.direction == necessaryDirection) {\n                return false;\n            }\n            switch (tank.direction) {\n                case direction_1.Directoin.Up:\n                    direction_1.Directoin.Down !== necessaryDirection ? tank.y = Math.round(tank.y) : {};\n                    break;\n                case direction_1.Directoin.Down:\n                    direction_1.Directoin.Up !== necessaryDirection ? tank.y = Math.round(tank.y) : {};\n                    break;\n                case direction_1.Directoin.Left:\n                    direction_1.Directoin.Right !== necessaryDirection ? tank.x = Math.round(tank.x) : {};\n                    break;\n                case direction_1.Directoin.Right:\n                    direction_1.Directoin.Left !== necessaryDirection ? tank.x = Math.round(tank.x) : {};\n                    break;\n            }\n            tank.direction = necessaryDirection;\n            return true;\n        };\n        Game.prototype.getAvaliableStep = function (step, avaliableStep) {\n            return step > avaliableStep ? avaliableStep : step;\n        };\n        Game.prototype.checkBlocks = function (blocks) {\n            var move = true;\n            blocks.forEach(function (block) {\n                block == null ? {} : block.drive ? {} : move = false;\n            });\n            return move;\n        };\n        Game.prototype.tankUp = function (tank) {\n            var _this = this;\n            if (this.turn(tank, direction_1.Directoin.Up)) {\n                return;\n            }\n            if (tank.y - tank.speed <= 0) {\n                tank.y = 0;\n                return;\n            }\n            var step = tank.speed;\n            this.tanks.forEach(function (item) {\n                step = _this.getAvaliableStep(step, _this.moveUp(item, tank));\n            });\n            this.bullets.forEach(function (item) {\n                step = _this.getAvaliableStep(step, _this.moveUp(item, tank));\n            });\n            if (tank.speed > tank.y - Math.trunc(tank.y)) {\n                if (!this.checkBlocks(this.blockMap[Math.trunc(tank.y) - 1].slice(tank.x, tank.x + tank.size))) {\n                    step = this.getAvaliableStep(step, tank.y - Math.trunc(tank.y));\n                }\n            }\n            tank.y -= step;\n        };\n        Game.prototype.moveUp = function (item, tank, avaliableStep) {\n            if (avaliableStep === void 0) { avaliableStep = tank.speed; }\n            if (item === tank) {\n                return avaliableStep;\n            }\n            if (tank.y >= item.y + item.size && tank.x < item.x + item.size && tank.x + tank.size > item.x) {\n                var distance = tank.y - (item.y + item.size);\n                avaliableStep = avaliableStep <= distance ? avaliableStep : distance;\n            }\n            return avaliableStep;\n        };\n        Game.prototype.tankDown = function (tank) {\n            var _this = this;\n            if (this.turn(tank, direction_1.Directoin.Down)) {\n                return;\n            }\n            if (tank.y + tank.size + tank.speed >= parameters_1.Parameters.fieldHeight) {\n                tank.y = parameters_1.Parameters.fieldHeight - tank.size;\n                return;\n            }\n            var step = tank.speed;\n            this.tanks.forEach(function (item) {\n                step = _this.getAvaliableStep(step, _this.moveDown(item, tank));\n            });\n            this.bullets.forEach(function (item) {\n                step = _this.getAvaliableStep(step, _this.moveDown(item, tank));\n            });\n            if (tank.speed > Math.ceil(tank.y) - tank.y) {\n                if (!this.checkBlocks(this.blockMap[Math.ceil(tank.y) + tank.size].slice(tank.x, tank.x + tank.size))) {\n                    step = this.getAvaliableStep(step, Math.ceil(tank.y) - tank.y);\n                }\n            }\n            tank.y += step;\n        };\n        Game.prototype.moveDown = function (item, tank, avaliableStep) {\n            if (avaliableStep === void 0) { avaliableStep = tank.speed; }\n            if (item === tank) {\n                return avaliableStep;\n            }\n            if (tank.y + tank.size <= item.y && tank.x < item.x + item.size && tank.x + tank.size > item.x) {\n                var distance = item.y - (tank.y + tank.size);\n                avaliableStep = avaliableStep <= distance ? avaliableStep : distance;\n            }\n            return avaliableStep;\n        };\n        Game.prototype.tankLeft = function (tank) {\n            var _this = this;\n            if (this.turn(tank, direction_1.Directoin.Left)) {\n                return;\n            }\n            if (tank.x - tank.speed <= 0) {\n                tank.x = 0;\n                return;\n            }\n            var step = tank.speed;\n            this.tanks.forEach(function (item) {\n                step = _this.getAvaliableStep(step, _this.moveLeft(item, tank));\n            });\n            this.bullets.forEach(function (item) {\n                step = _this.getAvaliableStep(step, _this.moveLeft(item, tank));\n            });\n            if (tank.speed > tank.x - Math.trunc(tank.x)) {\n                var temp = [];\n                for (var i = 0; i < tank.size; i++) {\n                    temp[i] = this.blockMap[tank.y + i][Math.trunc(tank.x) - 1];\n                }\n                if (!this.checkBlocks(temp)) {\n                    step = this.getAvaliableStep(step, tank.x - Math.trunc(tank.x));\n                }\n            }\n            tank.x -= step;\n        };\n        Game.prototype.moveLeft = function (item, tank, avaliableStep) {\n            if (avaliableStep === void 0) { avaliableStep = tank.speed; }\n            if (item === tank) {\n                return avaliableStep;\n            }\n            if (tank.x >= item.x + item.size && tank.y < item.y + item.size && tank.y + tank.size > item.y) {\n                var distance = tank.x - (item.x + item.size);\n                avaliableStep = avaliableStep <= distance ? avaliableStep : distance;\n            }\n            return avaliableStep;\n        };\n        Game.prototype.tankRight = function (tank) {\n            var _this = this;\n            if (this.turn(tank, direction_1.Directoin.Right)) {\n                return;\n            }\n            if (tank.x + tank.size + tank.speed >= parameters_1.Parameters.fieldWidth) {\n                tank.x = parameters_1.Parameters.fieldHeight - tank.size;\n                return;\n            }\n            var step = tank.speed;\n            this.tanks.forEach(function (item) {\n                step = _this.getAvaliableStep(step, _this.moveRight(item, tank));\n            });\n            this.bullets.forEach(function (item) {\n                step = _this.getAvaliableStep(step, _this.moveRight(item, tank));\n            });\n            if (tank.speed > Math.ceil(tank.x) - tank.x) {\n                var temp = [];\n                for (var i = 0; i < tank.size; i++) {\n                    temp[i] = this.blockMap[tank.y + i][Math.ceil(tank.x) + tank.size];\n                }\n                if (!this.checkBlocks(temp)) {\n                    step = this.getAvaliableStep(step, Math.ceil(tank.x) - tank.x);\n                }\n            }\n            tank.x += step;\n        };\n        Game.prototype.moveRight = function (item, tank, avaliableStep) {\n            if (avaliableStep === void 0) { avaliableStep = tank.speed; }\n            if (item === tank) {\n                return avaliableStep;\n            }\n            if (tank.x + tank.size <= item.x && tank.y < item.y + item.size && tank.y + tank.size > item.y) {\n                var distance = item.x - (tank.x + tank.size);\n                avaliableStep = avaliableStep <= distance ? avaliableStep : distance;\n            }\n            return avaliableStep;\n        };\n        Game.prototype.moveBulletOrDelete = function (bullet) {\n            switch (bullet.direction) {\n                case direction_1.Directoin.Up:\n                    bullet.y--;\n                    break;\n                case direction_1.Directoin.Down:\n                    bullet.y++;\n                    break;\n                case direction_1.Directoin.Left:\n                    bullet.x--;\n                    break;\n                case direction_1.Directoin.Right:\n                    bullet.x++;\n                    break;\n            }\n            if (bullet.y < 0 || bullet.y > parameters_1.Parameters.fieldHeight - bullet.size || bullet.x < 0 || bullet.x > parameters_1.Parameters.fieldWidth - bullet.size) {\n                this.bullets.splice(this.bullets.indexOf(bullet), 1);\n                return true;\n            }\n            return false;\n        };\n        Game.prototype.moveBullets = function () {\n            var _this = this;\n            this.bullets.forEach(function (currentBullet) {\n                for (var i = 0; i < currentBullet.speed; i++) {\n                    if (_this.moveBulletOrDelete(currentBullet)) {\n                        continue;\n                    }\n                    _this.tanks.forEach(function (tank) {\n                        if (currentBullet.owner !== tank) {\n                            _this.destroy(currentBullet, tank);\n                            return;\n                        }\n                    });\n                    _this.bullets.forEach(function (bullet) {\n                        if (currentBullet !== bullet) {\n                            _this.destroy(currentBullet, bullet);\n                            return;\n                        }\n                    });\n                    if (_this.destroyWall(currentBullet)) {\n                        continue;\n                    }\n                }\n            });\n        };\n        Game.prototype.damageTank = function (bullet, tank) {\n            this.sound.run(\"killSomeone\");\n            tank.health -= bullet.damage;\n        };\n        Game.prototype.destroy = function (bullet, item) {\n            switch (item.item) {\n                case item_type_1.ItemType.Tank:\n                    if (item.x + item.size > bullet.x && bullet.x + bullet.size > item.x && item.y + item.size > bullet.y && bullet.y + bullet.size > item.y) {\n                        this.damageTank(bullet, item);\n                        this.bullets.splice(this.bullets.indexOf(bullet), 1);\n                        return true;\n                    }\n                    break;\n                case item_type_1.ItemType.Bullet:\n                    if (item.x + item.size >= bullet.x && bullet.x + bullet.size >= item.x && item.y + item.size >= bullet.y && bullet.y + bullet.size >= item.y) {\n                        this.bullets.splice(this.bullets.indexOf(item));\n                        this.bullets.splice(this.bullets.indexOf(bullet), 1);\n                        return true;\n                    }\n                    break;\n            }\n            return false;\n        };\n        Game.prototype.destroyWall = function (bullet) {\n            var destroyBullet = false;\n            switch (bullet.direction) {\n                case direction_1.Directoin.Up:\n                    if (!(this.blockMap[bullet.y][bullet.x].sweep && this.blockMap[bullet.y][bullet.x + 1].sweep)) {\n                        for (var j = 0; j < parameters_1.Parameters.bulletDestroy; j++) {\n                            var tempX = bullet.x - 1 + j;\n                            var tempY = bullet.y;\n                            this.destroyBlock(tempX, tempY);\n                        }\n                        destroyBullet = true;\n                    }\n                    break;\n                case direction_1.Directoin.Down:\n                    if (!(this.blockMap[bullet.y + 1][bullet.x].sweep && this.blockMap[bullet.y + 1][bullet.x + 1].sweep)) {\n                        for (var j = 0; j < parameters_1.Parameters.bulletDestroy; j++) {\n                            var tempX = bullet.x - 1 + j;\n                            var tempY = bullet.y + 1;\n                            this.destroyBlock(tempX, tempY);\n                        }\n                        destroyBullet = true;\n                    }\n                    break;\n                case direction_1.Directoin.Left:\n                    if (!(this.blockMap[bullet.y][bullet.x].sweep && this.blockMap[bullet.y + 1][bullet.x].sweep)) {\n                        for (var j = 0; j < parameters_1.Parameters.bulletDestroy; j++) {\n                            var tempX = bullet.x;\n                            var tempY = bullet.y - 1 + j;\n                            this.destroyBlock(tempX, tempY);\n                        }\n                        destroyBullet = true;\n                    }\n                    break;\n                case direction_1.Directoin.Right:\n                    if (!(this.blockMap[bullet.y][bullet.x + 1].sweep && this.blockMap[bullet.y + 1][bullet.x + 1].sweep)) {\n                        for (var j = 0; j < parameters_1.Parameters.bulletDestroy; j++) {\n                            var tempX = bullet.x + 1;\n                            var tempY = bullet.y - 1 + j;\n                            this.destroyBlock(tempX, tempY);\n                        }\n                        destroyBullet = true;\n                    }\n                    break;\n            }\n            if (destroyBullet) {\n                this.bullets.splice(this.bullets.indexOf(bullet), 1);\n                return true;\n            }\n            return false;\n        };\n        Game.prototype.destroyBlock = function (x, y) {\n            if (this.blockMap[y][x].demolish) {\n                this.blockMap[y][x] = this.blockFactory.createBlock(unit_type_1.UnitType.Road, x, y);\n            }\n        };\n        Game.game = new Game();\n        return Game;\n    }());\n    exports.Game = Game;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/game.ts?");

/***/ }),

/***/ "./src/client/ts/main.ts":
/*!*******************************!*\
  !*** ./src/client/ts/main.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./models/Message */ \"./src/client/ts/models/Message.ts\"), __webpack_require__(/*! ./models/network-commands */ \"./src/client/ts/models/network-commands.ts\"), __webpack_require__(/*! ./tank-factory */ \"./src/client/ts/tank-factory.ts\"), __webpack_require__(/*! ./game */ \"./src/client/ts/game.ts\"), __webpack_require__(/*! ./models/arena */ \"./src/client/ts/models/arena.ts\"), __webpack_require__(/*! ./models/event */ \"./src/client/ts/models/event.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Message_1, network_commands_1, tank_factory_1, game_1, arena_1, event_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var endButton = document.createElement(\"button\");\n    endButton.innerHTML = \"End Game\";\n    endButton.id = \"endButton\";\n    // let startButton = document.createElement(\"button\");\n    // startButton.innerHTML = \"Start Button\";\n    // startButton.id = \"startButton\";\n    var setMap = document.createElement(\"input\");\n    setMap.id = \"setMap\";\n    var acceptSetMap = document.createElement(\"button\");\n    acceptSetMap.innerHTML = \"Set Map\";\n    acceptSetMap.id = \"acceptSetMap\";\n    var scheme = document.location.protocol === \"https:\" ? \"wss\" : \"ws\";\n    var connectionUrl = scheme + \"://\" + document.location.hostname + \":\" + document.location.port + \"/ws\";\n    var socket = new WebSocket(connectionUrl);\n    var author;\n    var game = game_1.Game.getGame();\n    var arena = new arena_1.Arena([]);\n    var keys = [];\n    var tankFactory = new tank_factory_1.TankFactory();\n    var button = document.getElementById(\"confirmName\");\n    button.onclick = function () {\n        var name = document.getElementById(\"name\").value;\n        if (name !== \"\") {\n            socket.send(JSON.stringify(new Message_1.Message(network_commands_1.NetworkCommands.Name, 0, name)));\n        }\n    };\n    document.onkeydown = function (e) {\n        var code = e.which;\n        if (keys.indexOf(code) < 0) {\n            keys.push(code);\n        }\n        game.allEvents.push(new event_1.Event(game.tanks[author], code));\n    };\n    document.onkeyup = function (e) {\n        keys.splice(keys.indexOf(e.which), 1);\n    };\n    socket.onmessage = function (event) {\n        var buffer = event.data;\n        var message = JSON.parse(buffer.substring(0, buffer.indexOf(\"}\") + 1));\n        switch (message.NetworkCommand) {\n            case network_commands_1.NetworkCommands.StartGame:\n                author = message.Author;\n                game.start(socket, author, [tankFactory.createTanks(3, 5), tankFactory.createTanks(3, 10)], arena);\n                document.getElementById(\"setMap\").remove();\n                document.getElementById(\"acceptSetMap\").remove();\n                document.getElementById(\"gameController\").appendChild(endButton);\n                break;\n            case network_commands_1.NetworkCommands.PressedButton:\n                game.addEvent(message.Content, message.Author);\n                break;\n            case network_commands_1.NetworkCommands.EndGame:\n                game.endGame();\n                document.getElementById(\"endButton\").remove();\n                document.getElementById(\"gameController\").appendChild(setMap);\n                document.getElementById(\"gameController\").appendChild(acceptSetMap);\n                break;\n            case network_commands_1.NetworkCommands.Name:\n                document.getElementById(\"name\").remove();\n                document.getElementById(\"confirmName\").remove();\n                document.getElementById(\"gameController\").appendChild(setMap);\n                document.getElementById(\"gameController\").appendChild(acceptSetMap);\n                author = message.Author;\n                break;\n        }\n    };\n    endButton.onclick = function (event) {\n        socket.send(JSON.stringify(new Message_1.Message(network_commands_1.NetworkCommands.EndGame, author, \"\")));\n    };\n    acceptSetMap.onclick = function (event) {\n        socket.send(JSON.stringify(new Message_1.Message(network_commands_1.NetworkCommands.SetMap, 0, setMap.value)));\n    };\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/main.ts?");

/***/ }),

/***/ "./src/client/ts/models/Message.ts":
/*!*****************************************!*\
  !*** ./src/client/ts/models/Message.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Message = /** @class */ (function () {\n        function Message(networkCpmmand, author, content) {\n            this.NetworkCommand = networkCpmmand;\n            this.Author = author;\n            this.Content = content;\n        }\n        return Message;\n    }());\n    exports.Message = Message;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/Message.ts?");

/***/ }),

/***/ "./src/client/ts/models/arena.ts":
/*!***************************************!*\
  !*** ./src/client/ts/models/arena.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./block */ \"./src/client/ts/models/block.ts\"), __webpack_require__(/*! ./spawn-point */ \"./src/client/ts/models/spawn-point.ts\"), __webpack_require__(/*! ./direction */ \"./src/client/ts/models/direction.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, block_1, spawn_point_1, direction_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Arena = /** @class */ (function () {\n        function Arena(blocks) {\n            var _this = this;\n            this.spawnPoints = [\n                new spawn_point_1.SpawnPoint(20, 40, direction_1.Directoin.Up),\n                new spawn_point_1.SpawnPoint(20, 10, direction_1.Directoin.Up)\n            ];\n            this.blocks = new Array();\n            blocks.forEach(function (block) {\n                _this.blocks.push(new block_1.Block(block.x, block.y, block.unitType, block.sweep, block.drive, block.demolish));\n            });\n        }\n        return Arena;\n    }());\n    exports.Arena = Arena;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/arena.ts?");

/***/ }),

/***/ "./src/client/ts/models/block.ts":
/*!***************************************!*\
  !*** ./src/client/ts/models/block.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\"), __webpack_require__(/*! ./item-base */ \"./src/client/ts/models/item-base.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, item_base_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Block = /** @class */ (function (_super) {\n        tslib_1.__extends(Block, _super);\n        function Block(x, y, unitType, sweep, drive, demolish) {\n            var _this = _super.call(this, x, y, 1, unitType) || this;\n            _this.sweep = sweep;\n            _this.drive = drive;\n            _this.demolish = demolish;\n            return _this;\n        }\n        return Block;\n    }(item_base_1.ItemBase));\n    exports.Block = Block;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/block.ts?");

/***/ }),

/***/ "./src/client/ts/models/bullet.ts":
/*!****************************************!*\
  !*** ./src/client/ts/models/bullet.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\"), __webpack_require__(/*! ./running-item */ \"./src/client/ts/models/running-item.ts\"), __webpack_require__(/*! ./item-type */ \"./src/client/ts/models/item-type.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, running_item_1, item_type_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Bullet = /** @class */ (function (_super) {\n        tslib_1.__extends(Bullet, _super);\n        function Bullet(x, y, unitType, direction, speed, damage, owner) {\n            var _this = _super.call(this, x, y, 2, unitType, direction, item_type_1.ItemType.Bullet, speed) || this;\n            _this.damage = damage;\n            _this.owner = owner;\n            return _this;\n        }\n        return Bullet;\n    }(running_item_1.RunningItem));\n    exports.Bullet = Bullet;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/bullet.ts?");

/***/ }),

/***/ "./src/client/ts/models/direction.ts":
/*!*******************************************!*\
  !*** ./src/client/ts/models/direction.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Directoin;\n    (function (Directoin) {\n        Directoin[Directoin[\"Up\"] = 0] = \"Up\";\n        Directoin[Directoin[\"Down\"] = 1] = \"Down\";\n        Directoin[Directoin[\"Left\"] = 2] = \"Left\";\n        Directoin[Directoin[\"Right\"] = 3] = \"Right\";\n    })(Directoin = exports.Directoin || (exports.Directoin = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/direction.ts?");

/***/ }),

/***/ "./src/client/ts/models/event.ts":
/*!***************************************!*\
  !*** ./src/client/ts/models/event.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Event = /** @class */ (function () {\n        function Event(tank, key) {\n            this.tank = tank;\n            this.key = key;\n        }\n        return Event;\n    }());\n    exports.Event = Event;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/event.ts?");

/***/ }),

/***/ "./src/client/ts/models/item-base.ts":
/*!*******************************************!*\
  !*** ./src/client/ts/models/item-base.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var ItemBase = /** @class */ (function () {\n        function ItemBase(x, y, size, unitType) {\n            this.x = x;\n            this.y = y;\n            this.size = size;\n            this.unitType = unitType;\n        }\n        return ItemBase;\n    }());\n    exports.ItemBase = ItemBase;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/item-base.ts?");

/***/ }),

/***/ "./src/client/ts/models/item-type.ts":
/*!*******************************************!*\
  !*** ./src/client/ts/models/item-type.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var ItemType;\n    (function (ItemType) {\n        ItemType[ItemType[\"Tank\"] = 0] = \"Tank\";\n        ItemType[ItemType[\"Bullet\"] = 1] = \"Bullet\";\n        ItemType[ItemType[\"Block\"] = 2] = \"Block\";\n        ItemType[ItemType[\"Base\"] = 3] = \"Base\";\n    })(ItemType = exports.ItemType || (exports.ItemType = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/item-type.ts?");

/***/ }),

/***/ "./src/client/ts/models/key-code.ts":
/*!******************************************!*\
  !*** ./src/client/ts/models/key-code.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var KeyCode;\n    (function (KeyCode) {\n        KeyCode[KeyCode[\"Up\"] = 38] = \"Up\";\n        KeyCode[KeyCode[\"Down\"] = 40] = \"Down\";\n        KeyCode[KeyCode[\"Left\"] = 37] = \"Left\";\n        KeyCode[KeyCode[\"Right\"] = 39] = \"Right\";\n        KeyCode[KeyCode[\"Space\"] = 32] = \"Space\";\n    })(KeyCode = exports.KeyCode || (exports.KeyCode = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/key-code.ts?");

/***/ }),

/***/ "./src/client/ts/models/network-commands.ts":
/*!**************************************************!*\
  !*** ./src/client/ts/models/network-commands.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var NetworkCommands;\n    (function (NetworkCommands) {\n        NetworkCommands[NetworkCommands[\"Name\"] = 0] = \"Name\";\n        NetworkCommands[NetworkCommands[\"StartGame\"] = 1] = \"StartGame\";\n        NetworkCommands[NetworkCommands[\"PressedButton\"] = 2] = \"PressedButton\";\n        NetworkCommands[NetworkCommands[\"EndGame\"] = 3] = \"EndGame\";\n        NetworkCommands[NetworkCommands[\"SetMap\"] = 4] = \"SetMap\";\n    })(NetworkCommands = exports.NetworkCommands || (exports.NetworkCommands = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/network-commands.ts?");

/***/ }),

/***/ "./src/client/ts/models/running-item.ts":
/*!**********************************************!*\
  !*** ./src/client/ts/models/running-item.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\"), __webpack_require__(/*! ./item-base */ \"./src/client/ts/models/item-base.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, item_base_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var RunningItem = /** @class */ (function (_super) {\n        tslib_1.__extends(RunningItem, _super);\n        function RunningItem(x, y, size, unitType, direction, item, speed) {\n            var _this = _super.call(this, x, y, size, unitType) || this;\n            _this.direction = direction;\n            _this.item = item;\n            _this.speed = speed;\n            return _this;\n        }\n        return RunningItem;\n    }(item_base_1.ItemBase));\n    exports.RunningItem = RunningItem;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/running-item.ts?");

/***/ }),

/***/ "./src/client/ts/models/spawn-point.ts":
/*!*********************************************!*\
  !*** ./src/client/ts/models/spawn-point.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var SpawnPoint = /** @class */ (function () {\n        function SpawnPoint(x, y, direction) {\n            this.x = x;\n            this.y = y;\n            this.direction = direction;\n        }\n        return SpawnPoint;\n    }());\n    exports.SpawnPoint = SpawnPoint;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/spawn-point.ts?");

/***/ }),

/***/ "./src/client/ts/models/tank.ts":
/*!**************************************!*\
  !*** ./src/client/ts/models/tank.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\"), __webpack_require__(/*! ./running-item */ \"./src/client/ts/models/running-item.ts\"), __webpack_require__(/*! ./item-type */ \"./src/client/ts/models/item-type.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, running_item_1, item_type_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Tank = /** @class */ (function (_super) {\n        tslib_1.__extends(Tank, _super);\n        function Tank(spawnPoint, unitType, speed, health, bulletType, avaliableShoots) {\n            var _this = _super.call(this, spawnPoint.x, spawnPoint.y, 4, unitType, spawnPoint.direction, item_type_1.ItemType.Tank, speed) || this;\n            _this.spawnPoint = spawnPoint;\n            _this.health = health;\n            _this.bulletType = bulletType;\n            _this.avaliableShoots = avaliableShoots;\n            return _this;\n        }\n        return Tank;\n    }(running_item_1.RunningItem));\n    exports.Tank = Tank;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/tank.ts?");

/***/ }),

/***/ "./src/client/ts/models/unit-type.ts":
/*!*******************************************!*\
  !*** ./src/client/ts/models/unit-type.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var UnitType;\n    (function (UnitType) {\n        UnitType[UnitType[\"Base\"] = 0] = \"Base\";\n        UnitType[UnitType[\"LowTank\"] = 1] = \"LowTank\";\n        UnitType[UnitType[\"MediumTank\"] = 2] = \"MediumTank\";\n        UnitType[UnitType[\"HeavyTank\"] = 3] = \"HeavyTank\";\n        UnitType[UnitType[\"SlowBullet\"] = 4] = \"SlowBullet\";\n        UnitType[UnitType[\"FastBullet\"] = 5] = \"FastBullet\";\n        UnitType[UnitType[\"Road\"] = 6] = \"Road\";\n        UnitType[UnitType[\"Brick\"] = 7] = \"Brick\";\n        UnitType[UnitType[\"HardBrick\"] = 8] = \"HardBrick\";\n        UnitType[UnitType[\"Grass\"] = 9] = \"Grass\";\n        UnitType[UnitType[\"Water\"] = 10] = \"Water\";\n    })(UnitType = exports.UnitType || (exports.UnitType = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/models/unit-type.ts?");

/***/ }),

/***/ "./src/client/ts/parameters.ts":
/*!*************************************!*\
  !*** ./src/client/ts/parameters.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Parameters = /** @class */ (function () {\n        function Parameters() {\n        }\n        Parameters.fieldWidth = 52;\n        Parameters.fieldHeight = 52;\n        Parameters.tankSize = 4;\n        Parameters.bulletDestroy = 4;\n        Parameters.bulletSize = 2;\n        Parameters.blockSize = 1;\n        Parameters.timer = 20;\n        return Parameters;\n    }());\n    exports.Parameters = Parameters;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/parameters.ts?");

/***/ }),

/***/ "./src/client/ts/tank-factory.ts":
/*!***************************************!*\
  !*** ./src/client/ts/tank-factory.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./models/tank */ \"./src/client/ts/models/tank.ts\"), __webpack_require__(/*! ./models/spawn-point */ \"./src/client/ts/models/spawn-point.ts\"), __webpack_require__(/*! ./models/unit-type */ \"./src/client/ts/models/unit-type.ts\"), __webpack_require__(/*! ./models/direction */ \"./src/client/ts/models/direction.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tank_1, spawn_point_1, unit_type_1, direction_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var TankFactory = /** @class */ (function () {\n        function TankFactory() {\n        }\n        TankFactory.prototype.createTanks = function (x, y) {\n            return new tank_1.Tank(new spawn_point_1.SpawnPoint(x, y, direction_1.Directoin.Up), unit_type_1.UnitType.LowTank, 0.4, 100, unit_type_1.UnitType.FastBullet, 1);\n        };\n        return TankFactory;\n    }());\n    exports.TankFactory = TankFactory;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/tank-factory.ts?");

/***/ }),

/***/ "./src/client/ts/view/grid.ts":
/*!************************************!*\
  !*** ./src/client/ts/view/grid.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../models/unit-type */ \"./src/client/ts/models/unit-type.ts\"), __webpack_require__(/*! ./sprite */ \"./src/client/ts/view/sprite.ts\"), __webpack_require__(/*! ../models/direction */ \"./src/client/ts/models/direction.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, unit_type_1, sprite_1, direction_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Grid = /** @class */ (function () {\n        function Grid() {\n            this.totalHeight = document.getElementById('arena').offsetHeight;\n            this.totalWidth = document.getElementById('arena').offsetWidth;\n            this.gameSize = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;\n            this.cellSize = this.gameSize / 52;\n            this.sprite = new sprite_1.Sprite().all;\n            this.canvas = document.getElementById('canvas');\n            this.canvas.width = this.gameSize;\n            this.canvas.height = this.gameSize;\n            this.ctx = this.canvas.getContext(\"2d\");\n        }\n        ;\n        Grid.prototype.drawRoad = function () {\n            this.ctx.fillStyle = '#000';\n            this.ctx.fillRect(0, 0, this.gameSize, this.gameSize);\n        };\n        ;\n        Grid.prototype.drawBlock = function (block) {\n            this.ctx.drawImage(this.sprite.get(unit_type_1.UnitType[block.unitType]), block.x * this.cellSize, block.y * this.cellSize, block.size * this.cellSize, block.size * this.cellSize);\n        };\n        Grid.prototype.drawTanksBulletsBase = function (item) {\n            var direction = item.__proto__.constructor.name == \"Base\" ? \"\" : direction_1.Directoin[item.direction];\n            this.ctx.drawImage(this.sprite.get(unit_type_1.UnitType[item.unitType] + direction), item.x * this.cellSize, item.y * this.cellSize, item.size * this.cellSize, item.size * this.cellSize);\n        };\n        Grid.prototype.draw = function (blocks, tanks, bullets) {\n            var _this = this;\n            this.drawRoad();\n            (tanks.concat(bullets)).forEach(function (item) { return _this.drawTanksBulletsBase(item); });\n            blocks.forEach(function (block) { return _this.drawBlock(block); });\n        };\n        ;\n        return Grid;\n    }());\n    exports.Grid = Grid;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/view/grid.ts?");

/***/ }),

/***/ "./src/client/ts/view/sound.ts":
/*!*************************************!*\
  !*** ./src/client/ts/view/sound.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Sound = /** @class */ (function () {\n        function Sound() {\n            this.audio = new Audio();\n        }\n        Sound.prototype.run = function (name) {\n            this.audio.src = __webpack_require__(\"./src/client/assets sync recursive ^\\\\.\\\\/.*\\\\.mp3$\")(\"./\" + name + \".mp3\");\n            this.audio.play();\n        };\n        return Sound;\n    }());\n    exports.Sound = Sound;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/view/sound.ts?");

/***/ }),

/***/ "./src/client/ts/view/sprite.ts":
/*!**************************************!*\
  !*** ./src/client/ts/view/sprite.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../models/unit-type */ \"./src/client/ts/models/unit-type.ts\"), __webpack_require__(/*! ../models/direction */ \"./src/client/ts/models/direction.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, unit_type_1, direction_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Sprite = /** @class */ (function () {\n        function Sprite() {\n            var _this = this;\n            this.all = new Map();\n            var vals = Object.keys(unit_type_1.UnitType).slice(Object.keys(unit_type_1.UnitType).length / 2, Object.keys(unit_type_1.UnitType).length);\n            vals.forEach(function (element) {\n                switch (element) {\n                    case \"Brick\":\n                        var img1 = new Image();\n                        img1.src = __webpack_require__(\"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\" + element + \".svg\");\n                        _this.all.set(element, img1);\n                        break;\n                    case \"HardBrick\":\n                        var img3 = new Image();\n                        img3.src = __webpack_require__(\"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\" + element + \".svg\");\n                        _this.all.set(element, img3);\n                        break;\n                    case \"Grass\":\n                        var img4 = new Image();\n                        img4.src = __webpack_require__(\"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\" + element + \".svg\");\n                        _this.all.set(element, img4);\n                        break;\n                    case \"Water\":\n                        var img5 = new Image();\n                        img5.src = __webpack_require__(\"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\" + element + \".svg\");\n                        _this.all.set(element, img5);\n                        break;\n                    case \"Ice\":\n                        var img6 = new Image();\n                        img6.src = __webpack_require__(\"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\" + element + \".svg\");\n                        _this.all.set(element, img6);\n                        break;\n                    case \"Base\":\n                        var img2 = new Image();\n                        img2.src = __webpack_require__(\"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\" + element + \".svg\");\n                        _this.all.set(element, img2);\n                        break;\n                    case \"SlowBullet\":\n                        _this.setDirection(element);\n                        break;\n                    case \"FastBullet\":\n                        _this.setDirection(element);\n                        break;\n                    case \"LowTank\":\n                        _this.setDirection(element);\n                        break;\n                    case \"MediumTank\":\n                        _this.setDirection(element);\n                        break;\n                    case \"HeavyTank\":\n                        _this.setDirection(element);\n                        break;\n                }\n            });\n        }\n        Sprite.prototype.setDirection = function (element) {\n            var _this = this;\n            var direction = Object.keys(direction_1.Directoin).slice(Object.keys(direction_1.Directoin).length / 2, Object.keys(direction_1.Directoin).length);\n            direction.forEach(function (direct) {\n                var imgDir = new Image();\n                imgDir.src = __webpack_require__(\"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\" + element + direct + \".svg\");\n                _this.all.set(element + direct, imgDir);\n            });\n        };\n        return Sprite;\n    }());\n    exports.Sprite = Sprite;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/view/sprite.ts?");

/***/ })

/******/ });