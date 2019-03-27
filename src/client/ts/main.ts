import { Game } from "./game";
import { Arena } from "./models/arena";
import { TankFactory } from "./tank-factory";

let arena = require("./arena.json");

let game = new Game([(new TankFactory).createTanks(), (new TankFactory).createTanks()], new Arena(arena.blocks));
game.start();