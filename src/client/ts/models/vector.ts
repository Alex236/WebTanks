import { Item } from "./item";
import { Directoin } from "./direction";
import { UnitType } from "./unit-type";
import { ZOrder } from "./z-order";

export class Vector extends Item {
    public speed: number;
    public direction: Directoin;

    constructor (x: number, y: number, type: UnitType, zorder: ZOrder, size: number,  sweep: boolean, drive: boolean, demolish: boolean, speed: number, direction: Directoin) {
        super(x, y, type, zorder, size, sweep, drive, demolish);
        this.speed = speed;
        this.direction = direction;
    }
}