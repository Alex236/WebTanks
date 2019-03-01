import { GameProcessor } from "./Calculate/GameProcessor";
import { Map } from "./Calculate/Map";
import { Events } from "./EventHandler/Events";
import { Tank } from "./Calculate/Tank";
import { Rounds } from "./view/Rounds";
import { TankMove } from "./Calculate/enums/TankMove"
import { draw } from "./View/draw";

let rounds = new Rounds();
let rOne = rounds.roundOne;
let tanksCoord = new Array(0,0)
let position = "down"

let gameProcessor = new GameProcessor(rOne);
let tanks: Tank[] = gameProcessor.getTanks();

var iter = 0;

//let drawAll = new draw(roundMap, tankCoordinate, position, iterForAnimation);
let drawAll = new draw(rOne, tanksCoord, position, iter);

setInterval(() => {
    gameProcessor.calculate();

    //logs
    let y: number = tanks[0].getTankCoordinates().getY();
    let x: number = tanks[0].getTankCoordinates().getX();
    let move: TankMove = tanks[0].getMove();

    console.log(move);

    drawAll.run(rOne, [x,y], position, iter);

    iter++;
}, 200);
