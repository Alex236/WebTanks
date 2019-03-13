import { BulletType } from "../bullets/bullet-type";
import { Bullet } from "../bullets/bullet";
import { Vector } from "../models/vector";
import { TankType } from "./tank-type";

export interface Tank {
    currentX: number;
    currentY: number;
    spawnPointX: number;
    spawnPointY: number;
    vector: Vector;
    health: number;
    speed: number;
    bullets: Bullet[];
    bulletsAvaliable: number;
    bulletType: BulletType;
    type: TankType;
}