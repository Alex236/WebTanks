import { GameProcessor } from "./Calculate/GameProcessor";
import { MapToGamingField } from "./Calculate/MapToGamingField";
import { Map } from "./Calculate/Map";
import { Events } from "./EventHandler/Events";
import { Tank } from "./Calculate/Tank"

let gameProcessor = new GameProcessor(MapToGamingField.convertor(Map.getMap()));
let tanks: Tank[] = gameProcessor.getTanks();

setInterval(() => {
    gameProcessor.calculate();

    //logs
    
    let x: number = tanks[0].getTankCoordinates().getX();
    let y: number = tanks[0].getTankCoordinates().getY();
    console.log(x + " " + y);
    //add view
}, 1000);