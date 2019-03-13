import { Tank } from "../tank";
import { BulletType } from "../../bullets/bullet-type";
import { Vector } from "../../models/vector";
import { TankType } from "../tank-type";

export class Heavy implements Tank {
    public health = 200;
    public speed = 0.5;
    public bulletType = BulletType.Heavy;
    public currentX: number;
    public currentY: number;
    public spawnPointX: number;
    public spawnPointY: number;
    public bulletsAvaliable = 0;
    public bullets = [];
    public vector: Vector;
    public type = TankType.Heavy;

    constructor(spawnPointX: number, spawnPointY: number, vector: Vector) {
        this.currentX = spawnPointX;
        this.currentY = spawnPointY;
        this.spawnPointX = spawnPointX;
        this.spawnPointY = spawnPointY;
        this.vector = vector;
    }
}