import { Item } from "./item";
import { Directoin } from "./direction";
import { UnitType } from "./unit-type";
import { ItemType } from "./item-type";

export class Vector extends Item {
    public speed: number;
    public direction: Directoin;

    constructor (x: number, y: number, unitType: UnitType, itemType: ItemType, size: number,  sweep: boolean, drive: boolean, demolish: boolean, speed: number, direction: Directoin) {
        super(x, y, unitType, itemType, size, sweep, drive, demolish);
        this.speed = speed;
        this.direction = direction;
    }
}