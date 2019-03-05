import { Game } from "./Game";
import { Map } from "./Models/Map";
import { Tank } from "./Models/Tank";
import { TankType } from "./Models/enums/TankType";
import { Vector } from "./Models/enums/Vector";


let game = new Game([new Tank(TankType.user, Vector.up)], (new Map).getField());
game.start();
