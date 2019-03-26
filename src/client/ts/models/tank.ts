import { RunningItem } from "./running-item";
import { UnitType } from "./unit-type";
import { SpawnPoint } from "./spawn-point";
import { ItemType } from "./item-type";

export class Tank extends RunningItem {
    public health: number;
    public bulletType: UnitType;
    public avaliableShoots: number;

    constructor (spawnPoint: SpawnPoint, size: number, unitType: UnitType, speed: number, health: number, bulletType: UnitType, avaliableShoots: number) {
        super(spawnPoint.x, spawnPoint.y, size, unitType, spawnPoint.direction, ItemType.Tank, speed);
        this.health = health;
        this.bulletType = bulletType;
        this.avaliableShoots = avaliableShoots;
    }
}