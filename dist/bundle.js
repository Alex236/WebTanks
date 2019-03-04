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

/***/ "./src/client/ts/CollectionsOfModels/Bullets.ts":
/*!******************************************************!*\
  !*** ./src/client/ts/CollectionsOfModels/Bullets.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Bullets = /** @class */ (function () {\n    function Bullets() {\n        this.bullets = [];\n    }\n    Bullets.prototype.getListOfBullets = function () {\n        return this.bullets;\n    };\n    Bullets.prototype.addBullet = function (bullet) {\n        this.bullets.push(bullet);\n    };\n    Bullets.prototype.deleteBullet = function (bullet) {\n        for (var i = 0; i < this.bullets.length; i++) {\n            if (this.bullets[i].getCoordinates().getX() == bullet.getCoordinates().getX() && this.bullets[i].getCoordinates().getY() == bullet.getCoordinates().getY()) {\n                this.bullets.splice(i, 1);\n                break;\n            }\n        }\n    };\n    return Bullets;\n}());\nexports.Bullets = Bullets;\n\n\n//# sourceURL=webpack:///./src/client/ts/CollectionsOfModels/Bullets.ts?");

/***/ }),

/***/ "./src/client/ts/CollectionsOfModels/Users.ts":
/*!****************************************************!*\
  !*** ./src/client/ts/CollectionsOfModels/Users.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Users = /** @class */ (function () {\n    function Users() {\n        this.users = [];\n    }\n    Users.prototype.addUser = function (user) {\n        this.users.push(user);\n    };\n    Users.prototype.deleteUser = function (user) {\n        for (var i = 0; i < Users.length; i++) {\n            if (this.users[i].getName() == user.getName()) {\n                this.users.splice(i, 1);\n                break;\n            }\n        }\n    };\n    Users.prototype.getListOfUsers = function () {\n        return this.users;\n    };\n    return Users;\n}());\nexports.Users = Users;\n\n\n//# sourceURL=webpack:///./src/client/ts/CollectionsOfModels/Users.ts?");

/***/ }),

/***/ "./src/client/ts/Controllers/CalculateBulletMove.ts":
/*!**********************************************************!*\
  !*** ./src/client/ts/Controllers/CalculateBulletMove.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BulletMove_1 = __webpack_require__(/*! ../Models/enums/BulletMove */ \"./src/client/ts/Models/enums/BulletMove.ts\");\nvar Parameters_1 = __webpack_require__(/*! ../Parameters */ \"./src/client/ts/Parameters.ts\");\nvar CalculateBulletMove = /** @class */ (function () {\n    function CalculateBulletMove(bullets, field) {\n        this.bullets = bullets;\n        this.field = field;\n    }\n    CalculateBulletMove.prototype.doStep = function () {\n        for (var i = 0; i < this.bullets.getListOfBullets().length; i++) {\n            this.step(this.bullets.getListOfBullets()[i]);\n        }\n    };\n    CalculateBulletMove.prototype.step = function (bullet) {\n        switch (bullet.getMove()) {\n            case BulletMove_1.BulletMove.up:\n                if (bullet.getCoordinates().getY() - 1 >= 0) {\n                    bullet.getCoordinates().setY(bullet.getCoordinates().getY() - 1);\n                }\n                else {\n                    this.bullets.deleteBullet(bullet);\n                }\n                break;\n            case BulletMove_1.BulletMove.down:\n                if (bullet.getCoordinates().getY() + 1 < Parameters_1.Parameters.fieldHeight) {\n                    bullet.getCoordinates().setY(bullet.getCoordinates().getY() + 1);\n                }\n                else {\n                    this.bullets.deleteBullet(bullet);\n                }\n                break;\n            case BulletMove_1.BulletMove.left:\n                if (bullet.getCoordinates().getX() - 1 >= 0) {\n                    bullet.getCoordinates().setX(bullet.getCoordinates().getX() - 1);\n                }\n                else {\n                    this.bullets.deleteBullet(bullet);\n                }\n                break;\n            case BulletMove_1.BulletMove.right:\n                if (bullet.getCoordinates().getX() + 1 < Parameters_1.Parameters.fieldWidth) {\n                    bullet.getCoordinates().setX(bullet.getCoordinates().getX() + 1);\n                }\n                else {\n                    this.bullets.deleteBullet(bullet);\n                }\n                break;\n        }\n    };\n    return CalculateBulletMove;\n}());\nexports.CalculateBulletMove = CalculateBulletMove;\n\n\n//# sourceURL=webpack:///./src/client/ts/Controllers/CalculateBulletMove.ts?");

/***/ }),

/***/ "./src/client/ts/Controllers/CalculateTanksMove.ts":
/*!*********************************************************!*\
  !*** ./src/client/ts/Controllers/CalculateTanksMove.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Button_1 = __webpack_require__(/*! ../EventHandler/enums/Button */ \"./src/client/ts/EventHandler/enums/Button.ts\");\nvar BlockType_1 = __webpack_require__(/*! ../Models/enums/BlockType */ \"./src/client/ts/Models/enums/BlockType.ts\");\nvar Parameters_1 = __webpack_require__(/*! ../Parameters */ \"./src/client/ts/Parameters.ts\");\nvar TankMove_1 = __webpack_require__(/*! ../Models/enums/TankMove */ \"./src/client/ts/Models/enums/TankMove.ts\");\nvar CalculateTanksMove = /** @class */ (function () {\n    function CalculateTanksMove(users, field) {\n        this.users = users;\n        this.field = field;\n    }\n    CalculateTanksMove.prototype.doStep = function () {\n        for (var i = 0; i < this.users.getListOfUsers().length; i++) {\n            this.step(this.users.getListOfUsers()[i]);\n        }\n    };\n    CalculateTanksMove.prototype.step = function (user) {\n        if (user.getPressedButtons().getArrowUp()) {\n            this.move(Button_1.Button.up, user.getTank());\n            user.getTank().setMove(TankMove_1.TankMove.up);\n        }\n        if (user.getPressedButtons().getArrowDown()) {\n            this.move(Button_1.Button.down, user.getTank());\n            user.getTank().setMove(TankMove_1.TankMove.down);\n        }\n        if (user.getPressedButtons().getArrowLeft()) {\n            this.move(Button_1.Button.left, user.getTank());\n            user.getTank().setMove(TankMove_1.TankMove.left);\n        }\n        if (user.getPressedButtons().getArrowRight()) {\n            this.move(Button_1.Button.right, user.getTank());\n            user.getTank().setMove(TankMove_1.TankMove.right);\n        }\n    };\n    CalculateTanksMove.prototype.move = function (pressedButton, tank) {\n        switch (pressedButton) {\n            case Button_1.Button.up:\n                if (tank.getTankCoordinates().getY() > 0) {\n                    for (var i = 0; i < Parameters_1.Parameters.tankSize; i++) {\n                        if (this.field[tank.getTankCoordinates().getY() - 1][tank.getTankCoordinates().getX() + i] != BlockType_1.BlockType.road) {\n                            return false;\n                        }\n                    }\n                    tank.getTankCoordinates().setY(tank.getTankCoordinates().getY() - 1);\n                }\n                break;\n            case Button_1.Button.down:\n                if (tank.getTankCoordinates().getY() < Parameters_1.Parameters.fieldHeight - 1) {\n                    for (var i = 0; i < Parameters_1.Parameters.tankSize; i++) {\n                        if (this.field[tank.getTankCoordinates().getY() + Parameters_1.Parameters.tankSize][tank.getTankCoordinates().getX() + i] != BlockType_1.BlockType.road) { //\n                            return false;\n                        }\n                    }\n                    tank.getTankCoordinates().setY(tank.getTankCoordinates().getY() + 1);\n                }\n                break;\n            case Button_1.Button.left:\n                if (tank.getTankCoordinates().getX() > 0) {\n                    for (var i = 0; i < Parameters_1.Parameters.tankSize; i++) {\n                        if (this.field[tank.getTankCoordinates().getY() + i][tank.getTankCoordinates().getX() - 1] != BlockType_1.BlockType.road) {\n                            return false;\n                        }\n                    }\n                    tank.getTankCoordinates().setX(tank.getTankCoordinates().getX() - 1);\n                }\n                break;\n            case Button_1.Button.right:\n                if (tank.getTankCoordinates().getX() < Parameters_1.Parameters.fieldWidth - 1) {\n                    for (var i = 0; i < Parameters_1.Parameters.tankSize; i++) {\n                        if (this.field[tank.getTankCoordinates().getY() + i][tank.getTankCoordinates().getX() + Parameters_1.Parameters.tankSize] != BlockType_1.BlockType.road) { //\n                            return false;\n                        }\n                    }\n                    tank.getTankCoordinates().setX(tank.getTankCoordinates().getX() + 1);\n                }\n                break;\n        }\n        return true;\n    };\n    return CalculateTanksMove;\n}());\nexports.CalculateTanksMove = CalculateTanksMove;\n\n\n//# sourceURL=webpack:///./src/client/ts/Controllers/CalculateTanksMove.ts?");

/***/ }),

/***/ "./src/client/ts/Controllers/FieldProcessor.ts":
/*!*****************************************************!*\
  !*** ./src/client/ts/Controllers/FieldProcessor.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BlockType_1 = __webpack_require__(/*! ../Models/enums/BlockType */ \"./src/client/ts/Models/enums/BlockType.ts\");\nvar Parameters_1 = __webpack_require__(/*! ../Parameters */ \"./src/client/ts/Parameters.ts\");\nvar FieldProcessor = /** @class */ (function () {\n    function FieldProcessor(field, users, bullets) {\n        this.field = field;\n        this.users = users;\n        this.bullets = bullets;\n    }\n    FieldProcessor.prototype.clearMap = function () {\n        for (var i = 0; i < Parameters_1.Parameters.fieldHeight; i++) {\n            for (var j = 0; j < Parameters_1.Parameters.fieldWidth; j++) {\n                if (this.field[i][j] == BlockType_1.BlockType.tank || this.field[i][j] == BlockType_1.BlockType.bullet) {\n                    this.field[i][j] = BlockType_1.BlockType.road;\n                }\n            }\n        }\n    };\n    FieldProcessor.prototype.setTanksOnMap = function () {\n        for (var tanksNumber = 0; tanksNumber < this.users.getListOfUsers().length; tanksNumber++) {\n            for (var i = 0; i < Parameters_1.Parameters.tankSize; i++) {\n                for (var j = 0; j < Parameters_1.Parameters.tankSize; j++) {\n                    this.field[i + this.users.getListOfUsers()[tanksNumber].getTank().getTankCoordinates().getY()][j + this.users.getListOfUsers()[tanksNumber].getTank().getTankCoordinates().getX()] = BlockType_1.BlockType.tank;\n                }\n            }\n        }\n    };\n    FieldProcessor.prototype.setBulletsOnMap = function () {\n        for (var bulletsNumber = 0; bulletsNumber < this.bullets.getListOfBullets().length; bulletsNumber++) {\n            for (var i = 0; i < Parameters_1.Parameters.bulletSize; i++) {\n                for (var j = 0; j < Parameters_1.Parameters.bulletSize; j++) {\n                    this.field[i + this.bullets.getListOfBullets()[bulletsNumber].getCoordinates().getY()][j + this.bullets.getListOfBullets()[bulletsNumber].getCoordinates().getX()] = BlockType_1.BlockType.bullet;\n                }\n            }\n        }\n    };\n    return FieldProcessor;\n}());\nexports.FieldProcessor = FieldProcessor;\n\n\n//# sourceURL=webpack:///./src/client/ts/Controllers/FieldProcessor.ts?");

/***/ }),

/***/ "./src/client/ts/Controllers/GenerateBullets.ts":
/*!******************************************************!*\
  !*** ./src/client/ts/Controllers/GenerateBullets.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TankMove_1 = __webpack_require__(/*! ../Models/enums/TankMove */ \"./src/client/ts/Models/enums/TankMove.ts\");\nvar Bullet_1 = __webpack_require__(/*! ../Models/Bullet */ \"./src/client/ts/Models/Bullet.ts\");\nvar BulletMove_1 = __webpack_require__(/*! ../Models/enums/BulletMove */ \"./src/client/ts/Models/enums/BulletMove.ts\");\nvar Coordinates_1 = __webpack_require__(/*! ../Models/Coordinates */ \"./src/client/ts/Models/Coordinates.ts\");\nvar GenerateBullets = /** @class */ (function () {\n    function GenerateBullets(users, bullets) {\n        this.users = users;\n        this.bullets = bullets;\n    }\n    GenerateBullets.prototype.generate = function () {\n        for (var i = 0; i < this.users.getListOfUsers().length; i++) {\n            if (this.users.getListOfUsers()[i].getPressedButtons().getSpace()) {\n                this.generateBullet(this.users.getListOfUsers()[i]);\n            }\n        }\n    };\n    GenerateBullets.prototype.generateBullet = function (user) {\n        switch (user.getTank().getMove()) {\n            case TankMove_1.TankMove.up:\n                this.bullets.addBullet(new Bullet_1.Bullet(new Coordinates_1.Coordinates(user.getTank().getTankCoordinates().getX() + 1, user.getTank().getTankCoordinates().getY() - 1), BulletMove_1.BulletMove.up));\n                break;\n            case TankMove_1.TankMove.down:\n                this.bullets.addBullet(new Bullet_1.Bullet(new Coordinates_1.Coordinates(user.getTank().getTankCoordinates().getX() + 1, user.getTank().getTankCoordinates().getY() + 3), BulletMove_1.BulletMove.down));\n                break;\n            case TankMove_1.TankMove.left:\n                this.bullets.addBullet(new Bullet_1.Bullet(new Coordinates_1.Coordinates(user.getTank().getTankCoordinates().getX() - 1, user.getTank().getTankCoordinates().getY() + 1), BulletMove_1.BulletMove.left));\n                break;\n            case TankMove_1.TankMove.right:\n                this.bullets.addBullet(new Bullet_1.Bullet(new Coordinates_1.Coordinates(user.getTank().getTankCoordinates().getX() + 3, user.getTank().getTankCoordinates().getY() + 1), BulletMove_1.BulletMove.right));\n                break;\n        }\n    };\n    return GenerateBullets;\n}());\nexports.GenerateBullets = GenerateBullets;\n\n\n//# sourceURL=webpack:///./src/client/ts/Controllers/GenerateBullets.ts?");

/***/ }),

/***/ "./src/client/ts/EventHandler/enums/Button.ts":
/*!****************************************************!*\
  !*** ./src/client/ts/EventHandler/enums/Button.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Button;\n(function (Button) {\n    Button[Button[\"up\"] = 38] = \"up\";\n    Button[Button[\"down\"] = 40] = \"down\";\n    Button[Button[\"left\"] = 37] = \"left\";\n    Button[Button[\"right\"] = 39] = \"right\";\n    Button[Button[\"space\"] = 32] = \"space\";\n})(Button = exports.Button || (exports.Button = {}));\n\n\n//# sourceURL=webpack:///./src/client/ts/EventHandler/enums/Button.ts?");

/***/ }),

/***/ "./src/client/ts/EventHandler/enums/EventType.ts":
/*!*******************************************************!*\
  !*** ./src/client/ts/EventHandler/enums/EventType.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar EventType;\n(function (EventType) {\n    EventType[EventType[\"pressedUp\"] = 0] = \"pressedUp\";\n    EventType[EventType[\"pressedDown\"] = 1] = \"pressedDown\";\n    EventType[EventType[\"pressedLeft\"] = 2] = \"pressedLeft\";\n    EventType[EventType[\"pressedRight\"] = 3] = \"pressedRight\";\n    EventType[EventType[\"pressedSpace\"] = 4] = \"pressedSpace\";\n    EventType[EventType[\"bulletFlight\"] = 5] = \"bulletFlight\";\n    EventType[EventType[\"eventFromOtherUser\"] = 6] = \"eventFromOtherUser\";\n})(EventType = exports.EventType || (exports.EventType = {}));\n\n\n//# sourceURL=webpack:///./src/client/ts/EventHandler/enums/EventType.ts?");

/***/ }),

/***/ "./src/client/ts/Game.ts":
/*!*******************************!*\
  !*** ./src/client/ts/Game.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Users_1 = __webpack_require__(/*! ./CollectionsOfModels/Users */ \"./src/client/ts/CollectionsOfModels/Users.ts\");\nvar Parameters_1 = __webpack_require__(/*! ./Parameters */ \"./src/client/ts/Parameters.ts\");\nvar EventType_1 = __webpack_require__(/*! ./EventHandler/enums/EventType */ \"./src/client/ts/EventHandler/enums/EventType.ts\");\nvar Button_1 = __webpack_require__(/*! ./EventHandler/enums/Button */ \"./src/client/ts/EventHandler/enums/Button.ts\");\nvar Bullets_1 = __webpack_require__(/*! ./CollectionsOfModels/Bullets */ \"./src/client/ts/CollectionsOfModels/Bullets.ts\");\nvar Draw_1 = __webpack_require__(/*! ./View/Draw */ \"./src/client/ts/View/Draw.ts\");\nvar CalculateTanksMove_1 = __webpack_require__(/*! ./Controllers/CalculateTanksMove */ \"./src/client/ts/Controllers/CalculateTanksMove.ts\");\nvar CalculateBulletMove_1 = __webpack_require__(/*! ./Controllers/CalculateBulletMove */ \"./src/client/ts/Controllers/CalculateBulletMove.ts\");\nvar FieldProcessor_1 = __webpack_require__(/*! ./Controllers/FieldProcessor */ \"./src/client/ts/Controllers/FieldProcessor.ts\");\nvar GenerateBullets_1 = __webpack_require__(/*! ./Controllers/GenerateBullets */ \"./src/client/ts/Controllers/GenerateBullets.ts\");\nvar Game = /** @class */ (function () {\n    function Game(user, map) {\n        this.users = new Users_1.Users();\n        this.allEvents = [];\n        this.bullets = new Bullets_1.Bullets();\n        this.cycleCounter = 0;\n        this.draw = new Draw_1.Draw();\n        this.user = user;\n        this.users.addUser(this.user);\n        this.map = map;\n        this.calculateTanksMove = new CalculateTanksMove_1.CalculateTanksMove(this.users, this.map);\n        this.calculateBulletMove = new CalculateBulletMove_1.CalculateBulletMove(this.bullets, this.map);\n        this.generateBullets = new GenerateBullets_1.GenerateBullets(this.users, this.bullets);\n        this.fieldProcessor = new FieldProcessor_1.FieldProcessor(this.map, this.users, this.bullets);\n    }\n    Game.prototype.calculate = function () {\n        if (this.cycleCounter == 0) {\n            this.cycleCounter++;\n            this.deleteUselessEvents();\n            this.calculateTanksMove.doStep();\n            this.fieldProcessor.setTanksOnMap();\n            this.generateBullets.generate();\n            this.calculateBulletMove.doStep();\n            this.fieldProcessor.setBulletsOnMap();\n            this.fieldProcessor.clearMap();\n        }\n        else {\n            this.cycleCounter++;\n            this.fieldProcessor.setTanksOnMap();\n            this.calculateBulletMove.doStep();\n            this.fieldProcessor.setBulletsOnMap();\n            this.fieldProcessor.clearMap();\n            if (this.cycleCounter == Parameters_1.Parameters.bulletSpeed) {\n                this.cycleCounter = 0;\n            }\n        }\n    };\n    Game.prototype.drawing = function () {\n        this.draw.run(this.map, this.users.getListOfUsers(), this.bullets.getListOfBullets());\n    };\n    Game.prototype.gameProcess = function () {\n        var _this = this;\n        addEventListener(\"keydown\", function (event) {\n            _this.defineEvent(event);\n        });\n        setInterval(function () {\n            _this.drawing();\n            if (_this.allEvents.length != 0 || _this.bullets.getListOfBullets().length != 0) {\n                _this.calculate();\n            }\n        }, Parameters_1.Parameters.timer);\n    };\n    Game.prototype.defineEvent = function (event) {\n        switch (event.keyCode) {\n            case Button_1.Button.up:\n                this.addEvent(EventType_1.EventType.pressedUp);\n                break;\n            case Button_1.Button.down:\n                this.addEvent(EventType_1.EventType.pressedDown);\n                break;\n            case Button_1.Button.left:\n                this.addEvent(EventType_1.EventType.pressedLeft);\n                break;\n            case Button_1.Button.right:\n                this.addEvent(EventType_1.EventType.pressedRight);\n                break;\n            case Button_1.Button.space:\n                this.addEvent(EventType_1.EventType.pressedSpace);\n                break;\n        }\n    };\n    Game.prototype.addEvent = function (event) {\n        this.allEvents.push(event);\n    };\n    Game.prototype.deleteCheckedEvents = function (i) {\n        this.allEvents.splice(0, i);\n    };\n    Game.prototype.deleteUselessEvents = function () {\n        this.user.getPressedButtons().cleanButtons();\n        var move = false;\n        var shoot = false;\n        var count = this.allEvents.length;\n        for (var i = 0; i < count; i++) {\n            switch (this.allEvents[i]) {\n                case EventType_1.EventType.pressedUp:\n                    if (!move) {\n                        move = true;\n                        this.user.getPressedButtons().setArrowUp(true);\n                    }\n                    break;\n                case EventType_1.EventType.pressedDown:\n                    if (!move) {\n                        move = true;\n                        this.user.getPressedButtons().setArrowDown(true);\n                    }\n                    break;\n                case EventType_1.EventType.pressedLeft:\n                    if (!move) {\n                        move = true;\n                        this.user.getPressedButtons().setArrowLeft(true);\n                    }\n                    break;\n                case EventType_1.EventType.pressedRight:\n                    if (!move) {\n                        move = true;\n                        this.user.getPressedButtons().setArrowRight(true);\n                    }\n                    break;\n                case EventType_1.EventType.pressedSpace:\n                    if (!shoot) {\n                        shoot = true;\n                        this.user.getPressedButtons().setSpace(true);\n                    }\n                    break;\n                case EventType_1.EventType.bulletFlight:\n                    break;\n                case EventType_1.EventType.eventFromOtherUser:\n                    break;\n            }\n        }\n        this.deleteCheckedEvents(count);\n    };\n    return Game;\n}());\nexports.Game = Game;\n\n\n//# sourceURL=webpack:///./src/client/ts/Game.ts?");

/***/ }),

/***/ "./src/client/ts/Models/Bullet.ts":
/*!****************************************!*\
  !*** ./src/client/ts/Models/Bullet.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Bullet = /** @class */ (function () {\n    function Bullet(coordinates, bulletMove) {\n        this.coordinates = coordinates;\n        this.bulletMove = bulletMove;\n    }\n    Bullet.prototype.getCoordinates = function () {\n        return this.coordinates;\n    };\n    Bullet.prototype.getMove = function () {\n        return this.bulletMove;\n    };\n    Bullet.prototype.setCoordinates = function (coordinates) {\n        this.coordinates = coordinates;\n    };\n    return Bullet;\n}());\nexports.Bullet = Bullet;\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/Bullet.ts?");

/***/ }),

/***/ "./src/client/ts/Models/Coordinates.ts":
/*!*********************************************!*\
  !*** ./src/client/ts/Models/Coordinates.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Coordinates = /** @class */ (function () {\n    function Coordinates(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    Coordinates.prototype.getX = function () {\n        return this.x;\n    };\n    Coordinates.prototype.getY = function () {\n        return this.y;\n    };\n    Coordinates.prototype.setX = function (x) {\n        this.x = x;\n    };\n    Coordinates.prototype.setY = function (y) {\n        this.y = y;\n    };\n    return Coordinates;\n}());\nexports.Coordinates = Coordinates;\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/Coordinates.ts?");

/***/ }),

/***/ "./src/client/ts/Models/Map.ts":
/*!*************************************!*\
  !*** ./src/client/ts/Models/Map.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Map = /** @class */ (function () {\n    function Map() {\n    }\n    Map.getField = function () {\n        return this.loadField;\n    };\n    Map.loadField = [\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3],\n        [3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3],\n        [3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3],\n        [3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3],\n        [3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3],\n        [3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3],\n        [3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3],\n        [3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3],\n        [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],\n        [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],\n        [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],\n        [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],\n        [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],\n        [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],\n        [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],\n        [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],\n        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],\n        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],\n        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]\n    ];\n    return Map;\n}());\nexports.Map = Map;\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/Map.ts?");

/***/ }),

/***/ "./src/client/ts/Models/PressedUserButtons.ts":
/*!****************************************************!*\
  !*** ./src/client/ts/Models/PressedUserButtons.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar PressedUserButtons = /** @class */ (function () {\n    function PressedUserButtons() {\n        this.arrowUp = false;\n        this.arrowDown = false;\n        this.arrowLeft = false;\n        this.arrowRight = false;\n        this.space = false;\n    }\n    PressedUserButtons.prototype.getArrowUp = function () {\n        return this.arrowUp;\n    };\n    PressedUserButtons.prototype.getArrowDown = function () {\n        return this.arrowDown;\n    };\n    PressedUserButtons.prototype.getArrowLeft = function () {\n        return this.arrowLeft;\n    };\n    PressedUserButtons.prototype.getArrowRight = function () {\n        return this.arrowRight;\n    };\n    PressedUserButtons.prototype.getSpace = function () {\n        return this.space;\n    };\n    PressedUserButtons.prototype.setArrowUp = function (state) {\n        this.arrowUp = state;\n    };\n    PressedUserButtons.prototype.setArrowDown = function (state) {\n        this.arrowDown = state;\n    };\n    PressedUserButtons.prototype.setArrowLeft = function (state) {\n        this.arrowLeft = state;\n    };\n    PressedUserButtons.prototype.setArrowRight = function (state) {\n        this.arrowRight = state;\n    };\n    PressedUserButtons.prototype.setSpace = function (state) {\n        this.space = state;\n    };\n    PressedUserButtons.prototype.cleanButtons = function () {\n        this.arrowUp = false;\n        this.arrowDown = false;\n        this.arrowLeft = false;\n        this.arrowRight = false;\n        this.space = false;\n    };\n    return PressedUserButtons;\n}());\nexports.PressedUserButtons = PressedUserButtons;\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/PressedUserButtons.ts?");

/***/ }),

/***/ "./src/client/ts/Models/Tank.ts":
/*!**************************************!*\
  !*** ./src/client/ts/Models/Tank.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Tank = /** @class */ (function () {\n    function Tank(coordinates, tankType, tankMove) {\n        this.coordinates = coordinates;\n        this.tankType = tankType;\n        this.tankMove = tankMove;\n    }\n    Tank.prototype.getMove = function () {\n        return this.tankMove;\n    };\n    Tank.prototype.getType = function () {\n        return this.tankType;\n    };\n    Tank.prototype.getTankCoordinates = function () {\n        return this.coordinates;\n    };\n    Tank.prototype.setTankCoordinates = function (coordinates) {\n        this.coordinates = coordinates;\n    };\n    Tank.prototype.setMove = function (tankMove) {\n        this.tankMove = tankMove;\n    };\n    return Tank;\n}());\nexports.Tank = Tank;\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/Tank.ts?");

/***/ }),

/***/ "./src/client/ts/Models/User.ts":
/*!**************************************!*\
  !*** ./src/client/ts/Models/User.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar PressedUserButtons_1 = __webpack_require__(/*! ./PressedUserButtons */ \"./src/client/ts/Models/PressedUserButtons.ts\");\nvar User = /** @class */ (function () {\n    function User(tank, name) {\n        this.pressedUserButtons = new PressedUserButtons_1.PressedUserButtons();\n        this.tank = tank;\n        this.name = name;\n    }\n    User.prototype.getTank = function () {\n        return this.tank;\n    };\n    User.prototype.getName = function () {\n        return this.name;\n    };\n    User.prototype.getPressedButtons = function () {\n        return this.pressedUserButtons;\n    };\n    User.prototype.setPressedButtons = function (pressedButtons) {\n        this.pressedUserButtons = pressedButtons;\n    };\n    return User;\n}());\nexports.User = User;\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/User.ts?");

/***/ }),

/***/ "./src/client/ts/Models/enums/BlockType.ts":
/*!*************************************************!*\
  !*** ./src/client/ts/Models/enums/BlockType.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BlockType;\n(function (BlockType) {\n    BlockType[BlockType[\"road\"] = 0] = \"road\";\n    BlockType[BlockType[\"brick\"] = 1] = \"brick\";\n    BlockType[BlockType[\"hardBrick\"] = 2] = \"hardBrick\";\n    BlockType[BlockType[\"green\"] = 3] = \"green\";\n    BlockType[BlockType[\"tank\"] = 4] = \"tank\";\n    BlockType[BlockType[\"bullet\"] = 5] = \"bullet\";\n})(BlockType = exports.BlockType || (exports.BlockType = {}));\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/enums/BlockType.ts?");

/***/ }),

/***/ "./src/client/ts/Models/enums/BulletMove.ts":
/*!**************************************************!*\
  !*** ./src/client/ts/Models/enums/BulletMove.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar BulletMove;\n(function (BulletMove) {\n    BulletMove[BulletMove[\"up\"] = 0] = \"up\";\n    BulletMove[BulletMove[\"down\"] = 1] = \"down\";\n    BulletMove[BulletMove[\"left\"] = 2] = \"left\";\n    BulletMove[BulletMove[\"right\"] = 3] = \"right\";\n})(BulletMove = exports.BulletMove || (exports.BulletMove = {}));\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/enums/BulletMove.ts?");

/***/ }),

/***/ "./src/client/ts/Models/enums/TankMove.ts":
/*!************************************************!*\
  !*** ./src/client/ts/Models/enums/TankMove.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TankMove;\n(function (TankMove) {\n    TankMove[TankMove[\"up\"] = 0] = \"up\";\n    TankMove[TankMove[\"down\"] = 1] = \"down\";\n    TankMove[TankMove[\"left\"] = 2] = \"left\";\n    TankMove[TankMove[\"right\"] = 3] = \"right\";\n})(TankMove = exports.TankMove || (exports.TankMove = {}));\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/enums/TankMove.ts?");

/***/ }),

/***/ "./src/client/ts/Models/enums/TankType.ts":
/*!************************************************!*\
  !*** ./src/client/ts/Models/enums/TankType.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TankType;\n(function (TankType) {\n    TankType[TankType[\"user\"] = 0] = \"user\";\n    TankType[TankType[\"enemy\"] = 1] = \"enemy\";\n})(TankType = exports.TankType || (exports.TankType = {}));\n\n\n//# sourceURL=webpack:///./src/client/ts/Models/enums/TankType.ts?");

/***/ }),

/***/ "./src/client/ts/Parameters.ts":
/*!*************************************!*\
  !*** ./src/client/ts/Parameters.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Parameters = /** @class */ (function () {\n    function Parameters() {\n    }\n    Parameters.bulletSpeed = 3;\n    Parameters.userSpeed = 1;\n    Parameters.fieldWidth = 52;\n    Parameters.fieldHeight = 52;\n    Parameters.tankSize = 4;\n    Parameters.bulletSize = 2;\n    Parameters.timer = 25;\n    return Parameters;\n}());\nexports.Parameters = Parameters;\n\n\n//# sourceURL=webpack:///./src/client/ts/Parameters.ts?");

/***/ }),

/***/ "./src/client/ts/View/Draw.ts":
/*!************************************!*\
  !*** ./src/client/ts/View/Draw.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DrawingElements_1 = __webpack_require__(/*! ./DrawingElements */ \"./src/client/ts/View/DrawingElements.ts\");\nvar Base_1 = __webpack_require__(/*! ./DrawingElements/Base */ \"./src/client/ts/View/DrawingElements/Base.ts\");\nvar Grid_1 = __webpack_require__(/*! ./DrawingElements/Grid */ \"./src/client/ts/View/DrawingElements/Grid.ts\");\nvar Tanks_1 = __webpack_require__(/*! ./DrawingElements/Tanks */ \"./src/client/ts/View/DrawingElements/Tanks.ts\");\nvar Bullets_1 = __webpack_require__(/*! ./DrawingElements/Bullets */ \"./src/client/ts/View/DrawingElements/Bullets.ts\");\nvar Draw = /** @class */ (function () {\n    function Draw() {\n        this.drawingElements = new DrawingElements_1.DrawingElements();\n        this.base = new Base_1.Base(6, 12);\n        this.grid = new Grid_1.Grid();\n        this.tanks = new Tanks_1.Tanks();\n        this.bullets = new Bullets_1.Bullets();\n    }\n    Draw.prototype.run = function (map, allUsers, allBullets) {\n        this.grid.draw(map);\n        this.base.draw();\n        this.tanks.draw(allUsers);\n        this.bullets.draw(allBullets);\n    };\n    return Draw;\n}());\nexports.Draw = Draw;\n\n\n//# sourceURL=webpack:///./src/client/ts/View/Draw.ts?");

/***/ }),

/***/ "./src/client/ts/View/DrawingElements.ts":
/*!***********************************************!*\
  !*** ./src/client/ts/View/DrawingElements.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DrawingElements = /** @class */ (function () {\n    function DrawingElements() {\n        this.height = window.innerHeight;\n        this.width = window.innerWidth - 200;\n        this.cellSizeWidth = this.width / 52;\n        this.cellSizeHeight = this.height / 52;\n        this.canvas = document.getElementById('canvas');\n        this.canvas.width = this.width;\n        this.canvas.height = this.height;\n        this.ctx = this.canvas.getContext(\"2d\");\n    }\n    ;\n    return DrawingElements;\n}());\nexports.DrawingElements = DrawingElements;\n\n\n//# sourceURL=webpack:///./src/client/ts/View/DrawingElements.ts?");

/***/ }),

/***/ "./src/client/ts/View/DrawingElements/Base.ts":
/*!****************************************************!*\
  !*** ./src/client/ts/View/DrawingElements/Base.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DrawingElements_1 = __webpack_require__(/*! ../DrawingElements */ \"./src/client/ts/View/DrawingElements.ts\");\nvar Base = /** @class */ (function (_super) {\n    __extends(Base, _super);\n    function Base(xCoord, yCoord) {\n        var _this = _super.call(this) || this;\n        _this.img = document.createElement(\"img\");\n        _this.x = xCoord;\n        _this.y = yCoord;\n        return _this;\n    }\n    Base.prototype.draw = function () {\n        this.img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550860699/TanksAsserts/flag_ukraine_36335.png\";\n        this.ctx.drawImage(this.img, this.x * 4 * this.cellSizeWidth, this.y * 4 * this.cellSizeHeight, this.cellSizeWidth * 4, this.cellSizeHeight * 4);\n    };\n    return Base;\n}(DrawingElements_1.DrawingElements));\nexports.Base = Base;\n\n\n//# sourceURL=webpack:///./src/client/ts/View/DrawingElements/Base.ts?");

/***/ }),

/***/ "./src/client/ts/View/DrawingElements/Bullets.ts":
/*!*******************************************************!*\
  !*** ./src/client/ts/View/DrawingElements/Bullets.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DrawingElements_1 = __webpack_require__(/*! ../DrawingElements */ \"./src/client/ts/View/DrawingElements.ts\");\nvar BulletMove_1 = __webpack_require__(/*! ../../Models/enums/BulletMove */ \"./src/client/ts/Models/enums/BulletMove.ts\");\nvar Bullets = /** @class */ (function (_super) {\n    __extends(Bullets, _super);\n    function Bullets() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.img = document.createElement(\"img\");\n        _this.trueBullet = \"\";\n        return _this;\n    }\n    Bullets.prototype.setRightTurnForBullet = function (turn) {\n        switch (turn) {\n            case BulletMove_1.BulletMove.down:\n                this.trueBullet = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551595473/TanksAsserts/Bullet/bullet.ico\";\n                break;\n            case BulletMove_1.BulletMove.up:\n                this.trueBullet = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551595473/TanksAsserts/Bullet/bullet.ico\";\n                break;\n            case BulletMove_1.BulletMove.right:\n                this.trueBullet = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1551595473/TanksAsserts/Bullet/bullet.ico\";\n                break;\n            case BulletMove_1.BulletMove.left:\n                this.trueBullet = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551595473/TanksAsserts/Bullet/bullet.ico\";\n                break;\n        }\n        return this.trueBullet;\n    };\n    ;\n    Bullets.prototype.drawBullet = function (x, y, turn) {\n        this.ctx.globalCompositeOperation = 'source-over';\n        this.img.src = this.setRightTurnForBullet(turn);\n        this.ctx.drawImage(this.img, x * this.cellSizeWidth + this.cellSizeWidth / 2, y * this.cellSizeHeight + this.cellSizeHeight / 2, this.cellSizeWidth, this.cellSizeHeight);\n    };\n    ;\n    Bullets.prototype.draw = function (allBullet) {\n        for (var i = 0; i < allBullet.length; i++) {\n            var bullet = allBullet[i];\n            this.drawBullet(bullet.getCoordinates().getX(), bullet.getCoordinates().getY(), bullet.getMove());\n        }\n    };\n    ;\n    return Bullets;\n}(DrawingElements_1.DrawingElements));\nexports.Bullets = Bullets;\n\n\n//# sourceURL=webpack:///./src/client/ts/View/DrawingElements/Bullets.ts?");

/***/ }),

/***/ "./src/client/ts/View/DrawingElements/Grid.ts":
/*!****************************************************!*\
  !*** ./src/client/ts/View/DrawingElements/Grid.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DrawingElements_1 = __webpack_require__(/*! ../DrawingElements */ \"./src/client/ts/View/DrawingElements.ts\");\nvar Grid = /** @class */ (function (_super) {\n    __extends(Grid, _super);\n    function Grid() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.img = document.createElement(\"img\");\n        return _this;\n    }\n    Grid.prototype.drawBrick = function (x, y) {\n        this.img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848759/TanksAsserts/crateWood.png\";\n        this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);\n    };\n    ;\n    Grid.prototype.drawHardBrick = function (x, y) {\n        this.img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848848/TanksAsserts/crateMetal.png\";\n        this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);\n    };\n    ;\n    Grid.prototype.drawGreen = function (x, y) {\n        this.img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550849482/TanksAsserts/favicon-6.ico\";\n        this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);\n    };\n    ;\n    Grid.prototype.drawRoad = function (x, y) {\n        this.img.src = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1550844835/TanksAsserts/Road.png\";\n        this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);\n    };\n    ;\n    Grid.prototype.draw = function (map) {\n        for (var j = 0; j < 52; j++) {\n            for (var i = 0; i < 52; i++) {\n                switch (map[j][i]) {\n                    case 0:\n                        this.drawRoad(i, j);\n                        break;\n                    case 1:\n                        this.drawBrick(i, j);\n                        break;\n                    case 2:\n                        this.drawHardBrick(i, j);\n                        break;\n                    case 3:\n                        this.drawRoad(i, j);\n                        this.drawGreen(i, j);\n                        break;\n                }\n            }\n        }\n        ;\n    };\n    ;\n    return Grid;\n}(DrawingElements_1.DrawingElements));\nexports.Grid = Grid;\n\n\n//# sourceURL=webpack:///./src/client/ts/View/DrawingElements/Grid.ts?");

/***/ }),

/***/ "./src/client/ts/View/DrawingElements/Tanks.ts":
/*!*****************************************************!*\
  !*** ./src/client/ts/View/DrawingElements/Tanks.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DrawingElements_1 = __webpack_require__(/*! ../DrawingElements */ \"./src/client/ts/View/DrawingElements.ts\");\nvar TankType_1 = __webpack_require__(/*! ../../Models/enums/TankType */ \"./src/client/ts/Models/enums/TankType.ts\");\nvar TankMove_1 = __webpack_require__(/*! ../../Models/enums/TankMove */ \"./src/client/ts/Models/enums/TankMove.ts\");\nvar Tanks = /** @class */ (function (_super) {\n    __extends(Tanks, _super);\n    function Tanks() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.img = document.createElement(\"img\");\n        _this.trueTank = \"\";\n        return _this;\n    }\n    Tanks.prototype.setRightTurn = function (turn, type) {\n        switch (turn) {\n            case TankMove_1.TankMove.down:\n                this.trueTank = \"https://res.cloudinary.com/phonecasemaggie/image/upload/v1551004169/TanksAsserts/Tank/\" + type + \"/tankOne.ico\";\n                break;\n            case TankMove_1.TankMove.up:\n                this.trueTank = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551004169/TanksAsserts/Tank/\" + type + \"/tankOne.ico\";\n                break;\n            case TankMove_1.TankMove.right:\n                this.trueTank = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551004169/TanksAsserts/Tank/\" + type + \"/tankOne.ico\";\n                break;\n            case TankMove_1.TankMove.left:\n                this.trueTank = \"https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551004169/TanksAsserts/Tank/\" + type + \"/tankOne.ico\";\n                break;\n        }\n        return this.trueTank;\n    };\n    ;\n    Tanks.prototype.drawTank = function (x, y, type, turn) {\n        this.ctx.globalCompositeOperation = 'source-over';\n        switch (type) {\n            case TankType_1.TankType.user:\n                this.img.src = this.setRightTurn(turn, type);\n                break;\n            case TankType_1.TankType.enemy:\n                this.img.src = this.setRightTurn(turn, type);\n                break;\n        }\n        this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth * 4, this.cellSizeHeight * 4);\n    };\n    ;\n    Tanks.prototype.draw = function (allUsers) {\n        for (var i = 0; i < allUsers.length; i++) {\n            var tank = allUsers[i].getTank();\n            this.drawTank(tank.getTankCoordinates().getX(), tank.getTankCoordinates().getY(), tank.getType(), tank.getMove());\n        }\n    };\n    ;\n    return Tanks;\n}(DrawingElements_1.DrawingElements));\nexports.Tanks = Tanks;\n\n\n//# sourceURL=webpack:///./src/client/ts/View/DrawingElements/Tanks.ts?");

/***/ }),

/***/ "./src/client/ts/main.ts":
/*!*******************************!*\
  !*** ./src/client/ts/main.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/client/ts/Game.ts\");\nvar User_1 = __webpack_require__(/*! ./Models/User */ \"./src/client/ts/Models/User.ts\");\nvar Tank_1 = __webpack_require__(/*! ./Models/Tank */ \"./src/client/ts/Models/Tank.ts\");\nvar Coordinates_1 = __webpack_require__(/*! ./Models/Coordinates */ \"./src/client/ts/Models/Coordinates.ts\");\nvar TankType_1 = __webpack_require__(/*! ./Models/enums/TankType */ \"./src/client/ts/Models/enums/TankType.ts\");\nvar TankMove_1 = __webpack_require__(/*! ./Models/enums/TankMove */ \"./src/client/ts/Models/enums/TankMove.ts\");\nvar Map_1 = __webpack_require__(/*! ./Models/Map */ \"./src/client/ts/Models/Map.ts\");\nvar game = new Game_1.Game(new User_1.User(new Tank_1.Tank(new Coordinates_1.Coordinates(26, 26), TankType_1.TankType.user, TankMove_1.TankMove.up), \"name\"), Map_1.Map.getField());\ngame.gameProcess();\n\n\n//# sourceURL=webpack:///./src/client/ts/main.ts?");

/***/ })

/******/ });