import { Vector } from "./vector";
import { Route } from "./route";
import { UnitType } from "./unit-type";

export class Tank extends Vector {
    public health: number;
    public bulletType: UnitType;
    public avaliableShoots: number;
    public spawnPointX: number;
    public spawnPointY: number;

    constructor (x: number, y: number, type: UnitType, canvasLevel: number, speed: number, vector: Route, health: number, bulletType: UnitType, avaliableShoots: number) {
        super(x, y, type, canvasLevel, speed, vector);
        this.health = health;
        this.bulletType = bulletType;
        this.avaliableShoots = avaliableShoots;
        this.spawnPointX = x;
        this.spawnPointY = y;
    }
}