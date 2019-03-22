import { ItemBase } from "./item-base";
import { Directoin } from "./direction";
import { ItemType } from './item-type';
import { UnitType } from './unit-type';

export abstract class RunningItem extends ItemBase {
    public direction: Directoin;
    public item: ItemType;
    public speed: number;

    constructor (x: number, y: number, size: number, unitType: UnitType, direction: Directoin, item: ItemType, speed: number) {
        super(x, y, size, unitType);
        this.direction = direction;
        this.item = item;
        this.speed = speed;
    }
}