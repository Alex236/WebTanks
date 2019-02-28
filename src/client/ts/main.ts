import { GameProcessor } from "./Calculate/GameProcessor";
import { MapToGamingField } from "./Calculate/MapToGamingField";
import { Map } from "./Calculate/Map";
import { Events } from "./EventHandler/Events";
import { Tank } from "./Calculate/Tank"
import { Grid } from "./view/GridView";
import { Rounds } from "./view/Rounds";

let rounds = new Rounds();
let rOne = rounds.roundOne;
let tanksCoord = new Array(0,0)
let position = "down"

let gameProcessor = new GameProcessor(rOne);
let tanks: Tank[] = gameProcessor.getTanks();

let myGrid = new Grid();
var iter = 0;
setInterval(() => {
    gameProcessor.calculate();

    //logs
    let y: number = tanks[0].getTankCoordinates().getY();
    let x: number = tanks[0].getTankCoordinates().getX();
    
    myGrid.drawGrid(rOne);
    myGrid.drawBase(6,12);
    myGrid.drawTank(iter,x,y,position);

    iter++;

}, 1000);