import { Item } from "./item";
import { Route } from "./route";
import { UnitType } from "./unit-type";

export class Vector extends Item {
    public speed: number;
    public vector: Route;

    constructor (x: number, y: number, type: UnitType, canvasLevel: number, speed: number, vector: Route) {
        super(x, y, type, canvasLevel);
        this.speed = speed;
        this.vector = vector;
    }
}