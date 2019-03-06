import { Game } from "./Game";
import { Arena } from "./Models/Arena";
require("../assets/startGame.mp3");

let game = new Game(2, new Arena);
game.start();
