import { Vector } from "./vector";
import { Directoin } from "./direction";
import { UnitType } from "./unit-type";
import { ZOrder } from "./z-order";
import { Parameters } from "../parameters";

export class Tank extends Vector {
    public health: number;
    public bulletType: UnitType;
    public avaliableShoots: number;
    public spawnPointX: number;
    public spawnPointY: number;

    constructor (x: number, y: number, type: UnitType, zorder: ZOrder, speed: number, vector: Directoin, health: number, bulletType: UnitType, avaliableShoots: number) {
        super(x, y, type, zorder, Parameters.tankSize, speed, vector);
        this.health = health;
        this.bulletType = bulletType;
        this.avaliableShoots = avaliableShoots;
        this.spawnPointX = x;
        this.spawnPointY = y;
    }
}