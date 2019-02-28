import { GameProcessor } from "./Calculate/GameProcessor";
import { Map } from "./Calculate/Map";
import { Events } from "./EventHandler/Events";
import { Tank } from "./Calculate/Tank"

let gameProcessor = new GameProcessor(Map.getField());
let tanks: Tank[] = gameProcessor.getTanks();

setInterval(() => {
    gameProcessor.calculate();

    //logs
    let y: number = tanks[0].getTankCoordinates().getY();
    let x: number = tanks[0].getTankCoordinates().getX();
    console.log(x + " " + y);
    //add view
}, 1000);