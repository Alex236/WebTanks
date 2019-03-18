import { UnitType } from "../models/unit-type";

export class Sprite {

    public all: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();

    constructor(img: HTMLImageElement){
        const vals = Object.keys(UnitType).filter(k => Number(UnitType[<any>k])).map(k => UnitType[<any>k]);

        vals.forEach(element => {
            switch(element.toString()){
                case UnitType.Base.toString() :
                    this.all.set(UnitType.Base.toString(), img);
                    break;
                case UnitType.LowTank.toString() :
                    this.all.set(UnitType.LowTank.toString(), img);
                    break;
                case UnitType.MediumTank.toString() :
                    this.all.set(UnitType.MediumTank.toString(), img);
                    break;
                case UnitType.HeavyTank.toString() :
                    this.all.set(UnitType.HeavyTank.toString(), img);
                    break;
                case UnitType.SlowBullet.toString() :
                    this.all.set(UnitType.SlowBullet.toString(), img);
                    break;
                case UnitType.FastBullet.toString() :
                    this.all.set(UnitType.FastBullet.toString(), img);
                    break;
                case UnitType.Brick.toString() :
                    this.all.set(UnitType.Brick.toString(), img);
                    break;
                case UnitType.HardBrick.toString() :
                    this.all.set(UnitType.HardBrick.toString(), img);
                    break;
                case UnitType.Grass.toString() :
                    this.all.set(UnitType.Grass.toString(), img);
                    break;
                case UnitType.Water.toString() :
                    this.all.set(UnitType.Water.toString(), img);
                    break;
            }
        });
    }
}