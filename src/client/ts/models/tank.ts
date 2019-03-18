import { Vector } from "./vector";
import { UnitType } from "./unit-type";
import { ZOrder } from "./z-order";
import { Parameters } from "../parameters";
import { SpawnPoint } from "./spawn-point";

export class Tank extends Vector {
    public health: number;
    public bulletType: UnitType;
    public avaliableShoots: number;
    public spawnPoint: SpawnPoint;

    constructor (spawnPoint: SpawnPoint, type: UnitType, zorder: ZOrder, sweep: boolean, drive: boolean, demolish: boolean, speed: number, health: number, bulletType: UnitType, avaliableShoots: number) {
        super(spawnPoint.x, spawnPoint.y, type, zorder, Parameters.tankSize, sweep, drive, demolish, speed, spawnPoint.direction);
        this.health = health;
        this.bulletType = bulletType;
        this.avaliableShoots = avaliableShoots;
        this.spawnPoint = spawnPoint;
    }
}