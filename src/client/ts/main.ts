import { Game } from "./Game";
import { User } from "./Calculate/User";
import { Tank } from "./Calculate/Tank";
import { Coordinates } from "./Calculate/Coordinates";
import { TankType } from "./Calculate/enums/TankType";
import { TankMove } from "./Calculate/enums/TankMove";
import { Map } from "./Calculate/Map";

let game = new Game(new User(new Tank(new Coordinates(26, 26), TankType.user, TankMove.up), "name"), Map.getField());
game.gameProcess();