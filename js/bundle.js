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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/ts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/ts sync recursive":
/*!****************************!*\
  !*** ./src/client/ts sync ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/client/ts sync recursive\";\n\n//# sourceURL=webpack:///./src/client/ts_sync?");

/***/ }),

/***/ "./src/client/ts/main.js":
/*!*******************************!*\
  !*** ./src/client/ts/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function () {\n    var defines = {};\n    var entry = [null];\n    function define(name, dependencies, factory) {\n        defines[name] = { dependencies: dependencies, factory: factory };\n        entry[0] = name;\n    }\n    define(\"require\", [\"exports\"], function (exports) {\n        Object.defineProperty(exports, \"__cjsModule\", { value: true });\n        Object.defineProperty(exports, \"default\", { value: function (name) { return resolve(name); } });\n    });\n    var gridView;\n    (function (gridView) {\n        var Grid = /** @class */ (function () {\n            function Grid() {\n                this.height = window.innerHeight;\n                this.width = window.innerWidth - 200;\n                this.cellSizeWidth = this.width / 52;\n                this.cellSizeHeight = this.height / 52;\n                this.canvas = document.getElementById('canvas');\n                this.canvas.width = this.width;\n                this.canvas.height = this.height;\n                this.ctx = this.canvas.getContext(\"2d\");\n            }\n            ;\n            Grid.prototype.drawBase = function (x, y) {\n                var img = document.createElement(\"img\");\n                img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550860699/TanksAsserts/flag_ukraine_36335.png\";\n                this.ctx.drawImage(img, (x * 4 * this.cellSizeWidth), (y * 4 * this.cellSizeHeight), this.cellSizeWidth * 4, this.cellSizeHeight * 4);\n            };\n            ;\n            Grid.prototype.drawTankImageOne = function (x, y, position) {\n                var tank = document.createElement(\"img\");\n                switch (position) {\n                    case \"down\":\n                        tank.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1551004169/TanksAsserts/tankOne.ico\";\n                        break;\n                    case \"up\":\n                        tank.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551004169/TanksAsserts/tankOne.ico\";\n                        break;\n                    case \"right\":\n                        tank.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551004169/TanksAsserts/tankOne.ico\";\n                        break;\n                    case \"left\":\n                        tank.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551004169/TanksAsserts/tankOne.ico\";\n                        break;\n                }\n                this.ctx.drawImage(tank, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth * 4, this.cellSizeHeight * 4);\n            };\n            ;\n            Grid.prototype.drawTankImageTwo = function (x, y, position) {\n                var tank = document.createElement(\"img\");\n                switch (position) {\n                    case \"down\":\n                        tank.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1551004169/TanksAsserts/tankTwo.ico\";\n                        break;\n                    case \"up\":\n                        tank.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551004169/TanksAsserts/tankTwo.ico\";\n                        break;\n                    case \"right\":\n                        tank.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551004169/TanksAsserts/tankTwo.ico\";\n                        break;\n                    case \"left\":\n                        tank.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551004169/TanksAsserts/tankTwo.ico\";\n                        break;\n                }\n                this.ctx.drawImage(tank, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth * 4, this.cellSizeHeight * 4);\n            };\n            ;\n            Grid.prototype.drawTank = function (i, x, y, position) {\n                this.ctx.globalCompositeOperation = 'source-over';\n                this.ctx.save();\n                if (i % 2 == 0) {\n                    this.drawTankImageOne(x, y, position);\n                }\n                else if (position) {\n                    this.drawTankImageTwo(x, y, position);\n                }\n                this.ctx.restore();\n                //window.requestAnimationFrame(function(){this.drawTank(i, x, y)});\n            };\n            Grid.prototype.DrawBrick = function (x, y) {\n                var img = document.createElement(\"img\");\n                img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848759/TanksAsserts/crateWood.png\";\n                this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);\n            };\n            ;\n            Grid.prototype.DrawHardBrick = function (x, y) {\n                var img = document.createElement(\"img\");\n                img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848848/TanksAsserts/crateMetal.png\";\n                this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);\n            };\n            ;\n            Grid.prototype.DrawGreen = function (x, y) {\n                var img = document.createElement(\"img\");\n                img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550849482/TanksAsserts/favicon-6.ico\";\n                this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);\n            };\n            ;\n            Grid.prototype.DrawRoad = function (x, y) {\n                var img = document.createElement(\"img\");\n                img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550844835/TanksAsserts/Road.png\";\n                this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);\n            };\n            ;\n            Grid.prototype.drawGrid = function (map) {\n                for (var j = 0; j < 52; j++) {\n                    for (var i = 0; i < 52; i++) {\n                        switch (map[j][i]) {\n                            case 0:\n                                this.DrawRoad(i, j);\n                                break;\n                            case 1:\n                                this.DrawBrick(i, j);\n                                break;\n                            case 2:\n                                this.DrawHardBrick(i, j);\n                                break;\n                            case 3:\n                                this.DrawRoad(i, j);\n                                this.DrawGreen(i, j);\n                                break;\n                        }\n                    }\n                }\n            };\n            return Grid;\n        }());\n        gridView.Grid = Grid;\n    })(gridView || (gridView = {}));\n    ///<reference path=\"./View/gridView.ts\"/>\n    var MyGrid = new gridView.Grid();\n    MyGrid.drawBase(10, 10);\n    setInterval(function () {\n    }, 30);\n    \n    'marker:entry';\n\n    function get_define(name) {\n        if (defines[name]) {\n            return defines[name];\n        }\n        else if (defines[name + '/index']) {\n            return defines[name + '/index'];\n        }\n        else {\n            var dependencies = ['exports'];\n            var factory = function (exports) {\n                try {\n                    Object.defineProperty(exports, \"__cjsModule\", { value: true });\n                    Object.defineProperty(exports, \"default\", { value: __webpack_require__(\"./src/client/ts sync recursive\")(name) });\n                }\n                catch (_a) {\n                    throw Error(['module ', name, ' not found.'].join(''));\n                }\n            };\n            return { dependencies: dependencies, factory: factory };\n        }\n    }\n    var instances = {};\n    function resolve(name) {\n        if (instances[name]) {\n            return instances[name];\n        }\n        if (name === 'exports') {\n            return {};\n        }\n        var define = get_define(name);\n        instances[name] = {};\n        var dependencies = define.dependencies.map(function (name) { return resolve(name); });\n        define.factory.apply(define, dependencies);\n        var exports = dependencies[define.dependencies.indexOf('exports')];\n        instances[name] = (exports['__cjsModule']) ? exports[\"default\"] : exports;\n        return instances[name];\n    }\n    if (entry[0] !== null) {\n        return resolve(entry[0]);\n    }\n})();\n\n//# sourceURL=webpack:///./src/client/ts/main.js?");

/***/ })

/******/ });