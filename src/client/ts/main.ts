import { Game } from "./Game";
import { User } from "./Models/User";
import { Tank } from "./Models/Tank";
import { Coordinates } from "./Models/Coordinates";
import { TankType } from "./Models/enums/TankType";
import { TankMove } from "./Models/enums/TankMove";
import { Map } from "./Models/Map";

let game = new Game(new User(new Tank(new Coordinates(26, 26), TankType.user, TankMove.up), "name"), Map.getField());
game.gameProcess();
