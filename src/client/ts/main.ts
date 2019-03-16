import { Game } from "./game";
import { Arena } from "./models/arena";
import { Sprite } from "./view/sprite";

let img = new Image();
img.src = require("../assets/sprites.svg");
let sprites = new Sprite(img);

let game = new Game(2, new Arena);
game.start();


