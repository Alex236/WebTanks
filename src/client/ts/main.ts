import { GameProcessor } from "./Calculate/GameProcessor";
import { MapToGamingField } from "./Calculate/MapToGamingField";
import { Map } from "./Calculate/Map";

let gameProcessor = new GameProcessor(MapToGamingField.convertor(Map.map));

setInterval(() => {
    gameProcessor.calculate;
    //add view
}, 30);