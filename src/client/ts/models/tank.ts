<<<<<<< HEAD
import { Vector } from "./vector";
import { Route } from "./route";
import { UnitType } from "./unit-type";
=======
import { Vector } from './vector';
import { Item } from './item';
import { TankType } from '../tanks/tank-type';
>>>>>>> 412ad2a668ffeaf80f9db73f0b586dbc1d2cf355

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