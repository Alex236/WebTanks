import { Block } from "./block";
import { UnitType } from "./unit-type";
import { SpawnPoint } from "./spawn-point";
import { Directoin } from "./direction";

export class Arena {
    public blocks: Block[] = [
        new Block(5, 5, UnitType.Brick, 0, false, false, true),
        new Block(50, 50, UnitType.Water, 2, false, false, true),
        new Block(12, 12, UnitType.Grass, 3, false, false, true),
        new Block(5, 7, UnitType.HardBrick, 4, false, false, true),
        new Block(5, 6, UnitType.HardBrick, 5, false, false, true),
        new Block(25, 30, UnitType.Brick, 6, false, false, true),
    ];

    public spawnPoints: SpawnPoint[] = [
        new SpawnPoint(10, 10, Directoin.Up)
    ];
}