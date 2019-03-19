import { Vector } from "./vector";
import { UnitType } from "./unit-type";
import { Parameters } from "../parameters";
import { SpawnPoint } from "./spawn-point";
import { ItemType } from "./item-type";

export class Tank extends Vector {
    public health: number;
    public bulletType: UnitType;
    public avaliableShoots: number;
    public spawnPoint: SpawnPoint;

    constructor (spawnPoint: SpawnPoint, unitType: UnitType, itemType: ItemType, sweep: boolean, drive: boolean, demolish: boolean, speed: number, health: number, bulletType: UnitType, avaliableShoots: number) {
        super(spawnPoint.x, spawnPoint.y, unitType, itemType, Parameters.tankSize, sweep, drive, demolish, speed, spawnPoint.direction);
        this.health = health;
        this.bulletType = bulletType;
        this.avaliableShoots = avaliableShoots;
        this.spawnPoint = spawnPoint;
    }
}