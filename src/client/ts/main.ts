import { Parameters } from './Parameters';
import { Map } from './Calculations/Map';
import { GameProcessor } from './Calculations/GameProcessor';
import { MapToGamingField } from './Calculations/MapToGamingField';

let map = new Map();
let gameProcessor = new GameProcessor(MapToGamingField.convertor(map.map))
setInterval(() => {
    gameProcessor.calculate();
}, Parameters.intervalForCalculations);