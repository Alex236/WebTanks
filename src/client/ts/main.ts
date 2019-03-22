import { Game } from "./game";
import { Arena } from "./models/arena";
import { TankFactory } from "./tank-factory";


let game = new Game([(new TankFactory).createTanks(), (new TankFactory).createTanks()], new Arena);
game.start();