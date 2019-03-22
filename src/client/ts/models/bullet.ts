import { RunningItem } from "./running-item";
import { UnitType } from "./unit-type";
import { Directoin } from "./direction";
import { ItemType } from "./item-type";
import { Tank } from './tank';

export class Bullet extends RunningItem {
    public damage: number;
    public owner: Tank;

    constructor (x: number, y: number, size: number, unitType: UnitType, direction: Directoin, speed: number, damage: number, owner: Tank) {
        super(x, y, size, unitType, direction, ItemType.Bullet, speed);
        this.damage = damage;
        this.owner = owner;
    }
}