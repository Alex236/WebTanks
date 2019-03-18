import { Vector } from "./vector";
import { UnitType } from "./unit-type";
import { Directoin } from "./direction";
import { Tank } from "./tank";
import { ZOrder } from "./z-order";
import { Parameters } from "../parameters";

export class Bullet extends Vector {
    public damage: number;
    public owner: Tank;

    constructor (x: number, y: number, type: UnitType, zorder: ZOrder, sweep: boolean, drive: boolean, demolish: boolean, speed: number, direction: Directoin, damage: number, owner: Tank) {
        super(x, y, type, zorder, Parameters.bulletSize, sweep, drive, demolish, speed, direction);
        this.damage = damage;
        this.owner = owner;
    }
}