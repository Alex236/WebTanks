import { Game } from "./Game";
import { Arena } from "./Models/Arena";
import { Tank } from "./Models/Tank";
import { TankType } from "./Models/enums/TankType";
import { Vector } from "./Models/enums/Vector";


let game = new Game([new Tank(TankType.user, Vector.up), new Tank(TankType.enemy, Vector.up)], new Arena);
game.start();
