import { GameProcessor } from "./Calculate/GameProcessor";
import { MapToGamingField } from "./Calculate/MapToGamingField";
import { Map } from "./Calculate/Map";
import { Events } from "./EventHandler/Events";

let gameProcessor = new GameProcessor(MapToGamingField.convertor(Map.getMap()));

setInterval(() => {
    gameProcessor.calculate();
    //add view
}, 1000);