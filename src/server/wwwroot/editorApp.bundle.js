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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/ts/editorApp.ts");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/client/ts/editor.ts":
/*!*********************************!*\
  !*** ./src/client/ts/editor.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./view-editor/grid */ \"./src/client/ts/view-editor/grid.ts\"), __webpack_require__(/*! ./view-editor/units-control */ \"./src/client/ts/view-editor/units-control.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, grid_1, units_control_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Editor = /** @class */ (function () {\n        function Editor() {\n            this.grid = new grid_1.Grid();\n            this.unit = new units_control_1.UnitsControl(this.grid.cellSize);\n            this.actingBrush = [4, 1];\n            this.unitCan = this.unit.canvas;\n            this.canvas = this.grid.canvas;\n        }\n        Editor.prototype.run = function () {\n            this.grid.draw();\n            this.unit.draw();\n        };\n        return Editor;\n    }());\n    exports.Editor = Editor;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/editor.ts?");

/***/ }),

/***/ "./src/client/ts/editorApp.ts":
/*!************************************!*\
  !*** ./src/client/ts/editorApp.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./editor */ \"./src/client/ts/editor.ts\"), __webpack_require__(/*! ./view-editor/brush */ \"./src/client/ts/view-editor/brush.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, editor_1, brush_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var editor = new editor_1.Editor();\n    editor.run();\n    function getMousePosition(canvas, evt) {\n        var rect = canvas.getBoundingClientRect();\n        return {\n            x: evt.clientX - rect.left,\n            y: evt.clientY - rect.top\n        };\n    }\n    editor.unitCan.addEventListener(\"click\", function (evt) {\n        var mousePos = getMousePosition(editor.unitCan, evt);\n        var rubber = Object(editor.unit.rubber);\n        var createButton = Object(editor.unit.createButton);\n        if (createButton.startX <= mousePos.x && createButton.endX >= mousePos.x) {\n            if (createButton.startY <= mousePos.y && mousePos.y <= createButton.endY) {\n                console.log(\"Create new Arena\");\n            }\n        }\n        if (rubber.startX <= mousePos.x && rubber.endX >= mousePos.x) {\n            if (rubber.startY <= mousePos.y && mousePos.y <= rubber.endY + editor.unit.maxBrushSize) {\n                editor.grid.draw();\n            }\n        }\n        editor.unit.brush.map(function (brush) {\n            var brushObject = Object(brush);\n            var cell = brushObject.cell;\n            if (((brush_1.Brush.SixteenCell * cell * 1.5 - brushObject.brush * cell / 2) <= mousePos.x) && ((brush_1.Brush.SixteenCell * cell * 1.5 + brushObject.brush * cell / 2) >= mousePos.x)) {\n                if ((brush_1.Brush.SixteenCell * cell * brushObject.brush <= mousePos.y) && (brush_1.Brush.SixteenCell * cell * brushObject.brush + cell * brushObject.brush >= mousePos.y)) {\n                    editor.actingBrush[0] = Number(brushObject.brush);\n                }\n            }\n        });\n        editor.unit.blocks.map(function (block) {\n            var blockEnum = Object.values(block)[0];\n            var x = Object.values(block)[1];\n            var blockSize = Object.values(block)[3];\n            if ((x < mousePos.x && mousePos.x < x + blockSize))\n                if (blockEnum * blockSize * 2 <= mousePos.y && (blockEnum * blockSize * 2 + blockSize) >= mousePos.y) {\n                    editor.actingBrush[1] = Number(blockEnum);\n                }\n        });\n    }, false);\n    document.addEventListener(\"click\", fillCell, false);\n    function fillCell(e) {\n        editor.grid.fillCell(editor.actingBrush, e.clientX, e.clientY);\n    }\n    ;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/editorApp.ts?");
=======
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\"), __webpack_require__(/*! ./editor */ \"./src/client/ts/editor.ts\"), __webpack_require__(/*! ./view-editor/brush */ \"./src/client/ts/view-editor/brush.ts\"), __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, editor_1, brush_1, $) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    $ = tslib_1.__importStar($);\n    var editor = new editor_1.Editor();\n    editor.run();\n    function getMousePosition(canvas, evt) {\n        var rect = canvas.getBoundingClientRect();\n        return {\n            x: evt.clientX - rect.left,\n            y: evt.clientY - rect.top\n        };\n    }\n    editor.unitCan.addEventListener(\"click\", function (evt) {\n        var mousePos = getMousePosition(editor.unitCan, evt);\n        var rubber = Object(editor.unit.rubber);\n        var createButton = Object(editor.unit.createButton);\n        if (createButton.startX <= mousePos.x && createButton.endX >= mousePos.x) {\n            if (createButton.startY <= mousePos.y && mousePos.y <= createButton.endY) {\n                $.ajax({\n                    type: \"POST\",\n                    url: \"api/createArena\",\n                    contentType: \"application/json; charset=utf-8\",\n                    data: JSON.stringify(editor.grid.arena.blocks),\n                    success: function (result) {\n                        console.log(this.data);\n                        console.log(result);\n                        console.log(\"success\");\n                        window.location.href = \"/\";\n                    },\n                    error: function (xhr, resp, text) {\n                        console.log(xhr, resp, text);\n                        console.log(\"error\");\n                    }\n                });\n            }\n        }\n        if (rubber.startX <= mousePos.x && rubber.endX >= mousePos.x) {\n            if (rubber.startY <= mousePos.y && mousePos.y <= rubber.endY + editor.unit.maxBrushSize) {\n                editor.grid.draw();\n            }\n        }\n        editor.unit.brush.map(function (brush) {\n            var brushObject = Object(brush);\n            var cell = brushObject.cell;\n            if (((brush_1.Brush.SixteenCell * cell * 1.5 - brushObject.brush * cell / 2) <= mousePos.x) && ((brush_1.Brush.SixteenCell * cell * 1.5 + brushObject.brush * cell / 2) >= mousePos.x)) {\n                if ((brush_1.Brush.SixteenCell * cell * brushObject.brush <= mousePos.y) && (brush_1.Brush.SixteenCell * cell * brushObject.brush + cell * brushObject.brush >= mousePos.y)) {\n                    editor.actingBrush[0] = Number(brushObject.brush);\n                }\n            }\n        });\n        editor.unit.blocks.map(function (block) {\n            var blockEnum = Object.values(block)[0];\n            var x = Object.values(block)[1];\n            var blockSize = Object.values(block)[3];\n            if ((x < mousePos.x && mousePos.x < x + blockSize))\n                if (blockEnum * blockSize * 2 <= mousePos.y && (blockEnum * blockSize * 2 + blockSize) >= mousePos.y) {\n                    editor.actingBrush[1] = Number(blockEnum);\n                }\n        });\n    }, false);\n    document.addEventListener(\"click\", fillCell, false);\n    function fillCell(e) {\n        editor.grid.fillCell(editor.actingBrush, e.clientX, e.clientY);\n    }\n    ;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/editorApp.ts?");
>>>>>>> 5957cfa9c89b4dd34cb08e725722399f71a3ed51

/***/ }),

/***/ "./src/client/ts/view-editor/arena.ts":
/*!********************************************!*\
  !*** ./src/client/ts/view-editor/arena.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Arena = /** @class */ (function () {\n        function Arena() {\n            this.size = [52, 52];\n            this.blocks = [];\n        }\n        return Arena;\n    }());\n    exports.Arena = Arena;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/view-editor/arena.ts?");

/***/ }),

/***/ "./src/client/ts/view-editor/block.ts":
/*!********************************************!*\
  !*** ./src/client/ts/view-editor/block.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Block;\n    (function (Block) {\n        Block[Block[\"Road\"] = 0] = \"Road\";\n        Block[Block[\"Brick\"] = 1] = \"Brick\";\n        Block[Block[\"HardBrick\"] = 2] = \"HardBrick\";\n        Block[Block[\"Grass\"] = 3] = \"Grass\";\n        Block[Block[\"Water\"] = 4] = \"Water\";\n        Block[Block[\"Ice\"] = 5] = \"Ice\";\n    })(Block = exports.Block || (exports.Block = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/view-editor/block.ts?");

/***/ }),

/***/ "./src/client/ts/view-editor/brush.ts":
/*!********************************************!*\
  !*** ./src/client/ts/view-editor/brush.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Brush;\n    (function (Brush) {\n        Brush[Brush[\"OneCell\"] = 1] = \"OneCell\";\n        Brush[Brush[\"FourCell\"] = 2] = \"FourCell\";\n        Brush[Brush[\"SixteenCell\"] = 4] = \"SixteenCell\";\n    })(Brush = exports.Brush || (exports.Brush = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/view-editor/brush.ts?");

/***/ }),

/***/ "./src/client/ts/view-editor/grid.ts":
/*!*******************************************!*\
  !*** ./src/client/ts/view-editor/grid.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./arena */ \"./src/client/ts/view-editor/arena.ts\"), __webpack_require__(/*! ./block */ \"./src/client/ts/view-editor/block.ts\"), __webpack_require__(/*! ./brush */ \"./src/client/ts/view-editor/brush.ts\"), __webpack_require__(/*! ./sprites */ \"./src/client/ts/view-editor/sprites.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, arena_1, block_1, brush_1, sprites_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Grid = /** @class */ (function () {\n        function Grid() {\n            this.arena = new arena_1.Arena;\n            this.canvas = document.getElementById(\"grid\");\n            this.ctx = this.canvas.getContext(\"2d\", { alpha: true });\n            this.totalWidth = parent.innerWidth * 0.7;\n            this.totalHeight = parent.innerHeight;\n            this.arenaSize = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;\n            this.cellSize = this.arenaSize / 52;\n            this.sprites = (new sprites_1.Sprites()).all;\n            this.canvas.width = this.totalWidth;\n            this.canvas.height = this.totalHeight;\n        }\n        ;\n        ;\n        Grid.prototype.draw = function () {\n            this.emptyArena(this.arena);\n        };\n        ;\n        Grid.prototype.emptyArena = function (arena) {\n            this.arena.blocks = [];\n            this.ctx.fillStyle = \"rgb(0,0,0)\";\n            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n            for (var i = 0; i < arena.size[0]; i++) {\n                for (var j = 0; j < arena.size[1]; j++) {\n                    if (i % 4 == 0 && j % 4 == 0) {\n                        this.ctx.strokeStyle = \"rgba(255,255,255, 0.6)\";\n                        this.ctx.strokeRect(i * this.cellSize, j * this.cellSize, this.cellSize * 4, this.cellSize * 4);\n                    }\n                    this.ctx.strokeStyle = \"rgba(255,255,255, 0.1)\";\n                    this.ctx.strokeRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);\n                }\n            }\n            ;\n        };\n        ;\n        Grid.prototype.fillCell = function (activeBrush, x, y) {\n            var i = Math.floor(x * (52 / activeBrush[0]) / this.arenaSize);\n            var j = Math.floor(y * (52 / activeBrush[0]) / this.arenaSize);\n            if ((i >= 0 && i < 52 / activeBrush[0]) && (j >= 0 && j < 52 / activeBrush[0])) {\n                this.ctx.strokeStyle = \"rgba(255,255,255, 0.6)\";\n                this.ctx.strokeRect(i * this.cellSize * activeBrush[0], j * this.cellSize * activeBrush[0], this.cellSize * activeBrush[0], this.cellSize * activeBrush[0]);\n                this.ctx.fillRect(i * this.cellSize * activeBrush[0], j * this.cellSize * activeBrush[0], this.cellSize * activeBrush[0], this.cellSize * activeBrush[0]);\n                this.ctx.drawImage(this.sprites.get(\"\" + brush_1.Brush[Number(activeBrush[0])] + block_1.Block[Number(activeBrush[1])]), i * this.cellSize * activeBrush[0], j * this.cellSize * activeBrush[0], this.cellSize * activeBrush[0], this.cellSize * activeBrush[0]);\n                for (var k = 0; k < Number(activeBrush[0]); k++) {\n                    for (var h = 0; h < Number(activeBrush[0]); h++) {\n                        if (activeBrush[1] == 0) {\n                            this.arena.blocks.splice(this.arena.blocks.indexOf({ \"x\": k + i * activeBrush[0], \"y\": h + j * activeBrush[0], \"unitType\": activeBrush[1] + 6 }), 1);\n                        }\n                        else if (this.isUniq({ \"x\": k + i * activeBrush[0], \"y\": h + j * activeBrush[0], \"unitType\": activeBrush[1] + 6 })) {\n                            this.arena.blocks.push({ \"x\": k + i * activeBrush[0], \"y\": h + j * activeBrush[0], \"unitType\": activeBrush[1] + 6 });\n                        }\n                    }\n                }\n            }\n            ;\n        };\n        Grid.prototype.isUniq = function (currentObj) {\n            var res = true;\n            this.arena.blocks.forEach(function (obj) {\n                if (obj['x'] == currentObj['x'] && obj['y'] == currentObj['y']) {\n                    res = false;\n                }\n            });\n            return res;\n        };\n        return Grid;\n    }());\n    exports.Grid = Grid;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/view-editor/grid.ts?");

/***/ }),

/***/ "./src/client/ts/view-editor/sprites.ts":
/*!**********************************************!*\
  !*** ./src/client/ts/view-editor/sprites.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./brush */ \"./src/client/ts/view-editor/brush.ts\"), __webpack_require__(/*! ./block */ \"./src/client/ts/view-editor/block.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, brush_1, block_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Sprites = /** @class */ (function () {\n        function Sprites() {\n            var _this = this;\n            this.all = new Map();\n            var brushes = Object.keys(brush_1.Brush).slice(Object.keys(brush_1.Brush).length / 2, Object.keys(brush_1.Brush).length);\n            var blocks = Object.keys(block_1.Block).slice(Object.keys(block_1.Block).length / 2, Object.keys(block_1.Block).length);\n            brushes.forEach(function (brush) {\n                blocks.forEach(function (block) {\n                    var img = new Image();\n                    img.src = __webpack_require__(\"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\" + brush + block + \".svg\");\n                    _this.all.set(brush + block, img);\n                });\n            });\n        }\n        return Sprites;\n    }());\n    exports.Sprites = Sprites;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/view-editor/sprites.ts?");

/***/ }),

/***/ "./src/client/ts/view-editor/units-control.ts":
/*!****************************************************!*\
  !*** ./src/client/ts/view-editor/units-control.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./block */ \"./src/client/ts/view-editor/block.ts\"), __webpack_require__(/*! ./brush */ \"./src/client/ts/view-editor/brush.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, block_1, brush_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var UnitsControl = /** @class */ (function () {\n        function UnitsControl(cellSize) {\n            this.totalWidth = window.innerWidth * 0.2;\n            this.totalHeight = window.innerHeight;\n            this.blocks = [];\n            this.brush = [];\n            this.rubber = new Object();\n            this.createButton = new Object();\n            this.canvas = document.getElementById(\"units-control\");\n            this.ctx = this.canvas.getContext(\"2d\", { alpha: true });\n            this.canvas.width = this.totalWidth;\n            this.canvas.height = this.totalHeight;\n            this.cellSize = cellSize;\n            this.maxBrushSize = brush_1.Brush.SixteenCell * this.cellSize;\n        }\n        UnitsControl.prototype.draw = function () {\n            this.rubberView();\n            this.brushes();\n            this.units();\n            this.createButtonView();\n        };\n        ;\n        UnitsControl.prototype.rubberView = function () {\n            var _this = this;\n            this.rubber = new Object({ startX: 0, startY: this.maxBrushSize, endX: this.maxBrushSize, endY: this.maxBrushSize });\n            var img = new Image();\n            img.src = __webpack_require__(/*! ../../assets/sprites/Rubber.svg */ \"./src/client/assets/sprites/Rubber.svg\");\n            img.onload = function () {\n                _this.ctx.drawImage(img, 0, _this.maxBrushSize, _this.maxBrushSize, _this.maxBrushSize);\n            };\n        };\n        UnitsControl.prototype.brushes = function () {\n            var _this = this;\n            var vals = Object.keys(brush_1.Brush).slice(0, Object.keys(brush_1.Brush).length / 2);\n            vals.forEach(function (brushSize) {\n                _this.brush.push({ brush: Number(brushSize), startX: _this.maxBrushSize * 1.5 - (Number(brushSize) * _this.cellSize) / 2, startY: Number(brushSize) * _this.maxBrushSize, cell: _this.cellSize });\n                _this.ctx.strokeStyle = \"rgba(255,255,255, 0.9)\";\n                _this.ctx.strokeRect(_this.maxBrushSize * 1.5 - (Number(brushSize) * _this.cellSize) / 2, Number(brushSize) * _this.maxBrushSize, Number(brushSize) * _this.cellSize, Number(brushSize) * _this.cellSize);\n            });\n        };\n        UnitsControl.prototype.units = function () {\n            var _this = this;\n            var blocks = Object.keys(block_1.Block).slice(0, Object.keys(block_1.Block).length / 2);\n            blocks.forEach(function (block) {\n                _this.blocks.push({ block: Number(block), startX: _this.canvas.width - _this.maxBrushSize, startY: Number(block) * _this.maxBrushSize * 2, size: _this.maxBrushSize });\n                var img = new Image();\n                img.src = __webpack_require__(\"./src/client/assets/sprites sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(\"./\" + brush_1.Brush[brush_1.Brush.OneCell] + block_1.Block[Number(block)] + \".svg\");\n                img.onload = function () {\n                    _this.ctx.drawImage(img, _this.canvas.width - _this.maxBrushSize, Number(block) * _this.maxBrushSize * 2, _this.maxBrushSize, _this.maxBrushSize);\n                };\n            });\n        };\n        UnitsControl.prototype.createButtonView = function () {\n            var _this = this;\n            this.createButton = new Object({ startX: 0, startY: this.maxBrushSize * Object.keys(block_1.Block).length, endX: this.canvas.width, endY: this.maxBrushSize + this.maxBrushSize * Object.keys(block_1.Block).length });\n            var img = new Image();\n            img.src = __webpack_require__(/*! ../../assets/sprites/CreateButton.svg */ \"./src/client/assets/sprites/CreateButton.svg\");\n            img.onload = function () {\n                _this.ctx.drawImage(img, 0, _this.maxBrushSize * Object.keys(block_1.Block).length, _this.canvas.width, _this.maxBrushSize);\n            };\n        };\n        return UnitsControl;\n    }());\n    exports.UnitsControl = UnitsControl;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/client/ts/view-editor/units-control.ts?");

/***/ })

/******/ });