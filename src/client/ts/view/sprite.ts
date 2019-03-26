import { UnitType } from '../models/unit-type';

export class Sprite {

    public all: Map<UnitType, HTMLImageElement> = new Map<UnitType, HTMLImageElement>();

    constructor(){
        const vals = Object.keys(UnitType).slice(Object.keys(UnitType).length/2, Object.keys(UnitType).length);
        vals.forEach(element => {
            let img = new Image();
            img.src = require('../../assets/sprites/'+ element +'.svg');
            this.all.set(<UnitType | any>element, img);
        });
    }

}