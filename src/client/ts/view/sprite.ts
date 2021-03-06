import { UnitType } from '../models/unit-type';
import { Directoin } from '../models/direction';

export class Sprite {

    public all: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();

    constructor(){
        const vals = Object.keys(UnitType).slice(Object.keys(UnitType).length/2, Object.keys(UnitType).length);
        vals.forEach(element => {
            switch(element){
        case "Brick" :
            let img1 = new Image();
            img1.src = require('../../assets/sprites/'+ element +'.svg');
            this.all.set(element, img1);
            break;
        case "HardBrick" :
            let img3 = new Image();
            img3.src = require('../../assets/sprites/'+ element +'.svg');
            this.all.set(element, img3);
            break;
        case "Grass" :
            let img4 = new Image();
            img4.src = require('../../assets/sprites/'+ element +'.svg');
            this.all.set(element, img4);
            break;
        case "Water" :
            let img5 = new Image();
            img5.src = require('../../assets/sprites/'+ element +'.svg');
            this.all.set(element, img5);
            break;
        case "Ice" :
            let img6 = new Image();
            img6.src = require('../../assets/sprites/'+ element +'.svg');
            this.all.set(element, img6);
            break;
        case "Base" :
            let img2 = new Image();
            img2.src = require('../../assets/sprites/'+ element +'.svg');
            this.all.set(element, img2);
            break;
        case "SlowBullet" :
            this.setDirection(element);
            break;
        case "FastBullet" :
            this.setDirection(element);
            break;
        case "LowTank" :
            this.setDirection(element);
            break;
        case "MediumTank" :
            this.setDirection(element);
            break;
        case "HeavyTank" :
            this.setDirection(element);
            break;
            }
        });
    }

    setDirection(element: string){
        const direction = Object.keys(Directoin).slice(Object.keys(Directoin).length/2, Object.keys(Directoin).length);
        direction.forEach(direct => {
            let imgDir = new Image();
            imgDir.src = require('../../assets/sprites/'+ element + direct +'.svg');
            this.all.set(element + direct, imgDir);
        });
    }

}