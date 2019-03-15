import { Item } from "./item";
import { Directoin } from "./direction";
import { UnitType } from "./unit-type";
import { ZOrder } from "./z-order";

export class Vector extends Item {
    public speed: number;
    public vector: Directoin;

    constructor (x: number, y: number, type: UnitType, zorder: ZOrder, size: number, speed: number, vector: Directoin) {
        super(x, y, type, zorder, size);
        this.speed = speed;
        this.vector = vector;
    }
}