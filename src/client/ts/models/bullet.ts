import { Vector } from "./vector";
import { UnitType } from "./unit-type";
import { Directoin } from "./direction";
import { Tank } from "./tank";
import { ZOrder } from "./z-order";

export class Bullet extends Vector {
    public damage: number;
    public owner: Tank;

    constructor (x: number, y: number, type: UnitType, zorder: ZOrder, speed: number, vector: Directoin, damage: number, owner: Tank) {
        super(x, y, type, zorder, speed, vector);
        this.damage = damage;
        this.owner = owner;
    }
}