import { Vector } from "./vector";
import { UnitType } from "./unit-type";
import { Route } from "./route";
import { Tank } from "./tank";

export class Bullet extends Vector {
    public damage: number;
    public owner: Tank;

    constructor (x: number, y: number, type: UnitType, canvasLevel: number, speed: number, vector: Route, damage: number, owner: Tank) {
        super(x, y, type, canvasLevel, speed, vector);
        this.damage = damage;
        this.owner = owner;
    }
}