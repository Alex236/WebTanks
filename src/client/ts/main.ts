import { Game } from "./game";
import { Arena } from "./models/arena";
import { TankFactory } from "./models/tank-factory";


let game = new Game((new TankFactory).createTanks(2, new Arena), new Arena);
game.start();