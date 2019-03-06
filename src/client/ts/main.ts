import { Game } from "./Game";
import { Area } from "./Models/Area";
import { Tank } from "./Models/Tank";
import { TankType } from "./Models/enums/TankType";
import { Vector } from "./Models/enums/Vector";


let game = new Game([new Tank(TankType.user, Vector.up), new Tank(TankType.enemy, Vector.up)], new Area);
game.start();
