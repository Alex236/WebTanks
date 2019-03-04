import { Game } from "./Game";
import { Map } from "./Models/Map";
import { Tank } from "./Models/Tank";
import { TankType } from "./Models/enums/TankType";
import { TankMove } from "./Models/enums/TankMove";


let game = new Game([new Tank(TankType.user, TankMove.up)], (new Map).getField());
game.start();
