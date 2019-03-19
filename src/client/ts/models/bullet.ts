import { Vector } from "./vector";
import { UnitType } from "./unit-type";
import { Directoin } from "./direction";
import { Tank } from "./tank";
import { Parameters } from "../parameters";
import { ItemType } from "./item-type";

export class Bullet extends Vector {
    public damage: number;
    public owner: Tank;

    constructor (x: number, y: number, unitType: UnitType, itemType: ItemType, sweep: boolean, drive: boolean, demolish: boolean, speed: number, direction: Directoin, damage: number, owner: Tank) {
        super(x, y, unitType, itemType, Parameters.bulletSize, sweep, drive, demolish, speed, direction);
        this.damage = damage;
        this.owner = owner;
    }
}