import { Block } from "./block";
import { UnitType } from "./unit-type";
import { SpawnPoint } from "./spawn-point";
import { Directoin } from "./direction";

export class Arena {
    public blocks: Block[] = [
        new Block(5, 5, UnitType.Brick, 0, false, false, true),
        
        new Block(5, 5, UnitType.Brick, 0, false, false, true),
        new Block(15, 15, UnitType.Brick, 0, false, false, true),
        new Block(15, 16, UnitType.Brick, 0, false, false, true),
        new Block(15, 17, UnitType.Brick, 0, false, false, true),
        new Block(15, 18, UnitType.Brick, 0, false, false, true),
        new Block(16, 15, UnitType.Brick, 0, false, false, true),
        new Block(16, 16, UnitType.Brick, 0, false, false, true),
        new Block(16, 17, UnitType.Brick, 0, false, false, true),
        new Block(16, 18, UnitType.Brick, 0, false, false, true),
        new Block(17, 15, UnitType.Brick, 0, false, false, true),
        new Block(17, 16, UnitType.Brick, 0, false, false, true),
        new Block(17, 17, UnitType.Brick, 0, false, false, true),
        new Block(17, 18, UnitType.Brick, 0, false, false, true),
        new Block(17, 19, UnitType.Brick, 0, false, false, true),
        new Block(17, 20, UnitType.Brick, 0, false, false, true),
        new Block(18, 20, UnitType.Brick, 0, false, false, true),
        new Block(18, 21, UnitType.Brick, 0, false, false, true),

        new Block(25, 30, UnitType.Brick, 0, false, false, true),
        new Block(25, 31, UnitType.Brick, 0, false, false, true),
        new Block(25, 32, UnitType.Brick, 0, false, false, true),
        new Block(25, 33, UnitType.Brick, 0, false, false, true),
        new Block(25, 34, UnitType.Brick, 0, false, false, true),
        new Block(26, 30, UnitType.Brick, 0, false, false, true),
        new Block(26, 31, UnitType.Brick, 0, false, false, true),
        new Block(26, 32, UnitType.Brick, 0, false, false, true),
        new Block(26, 33, UnitType.Brick, 0, false, false, true),

        new Block(18, 16, UnitType.Water, 0, false, false, true),
        new Block(18, 17, UnitType.Water, 0, false, false, true),
        new Block(18, 18, UnitType.Water, 0, false, false, true),
        new Block(18, 19, UnitType.Water, 0, false, false, true),
        new Block(19, 16, UnitType.Water, 0, false, false, true),
        new Block(19, 17, UnitType.Water, 0, false, false, true),
        new Block(19, 18, UnitType.Water, 0, false, false, true),
        new Block(19, 19, UnitType.Water, 0, false, false, true),

        new Block(20, 15, UnitType.Brick, 0, false, false, true),
        new Block(20, 16, UnitType.Brick, 0, false, false, true),
        new Block(20, 17, UnitType.Brick, 0, false, false, true),
        new Block(20, 18, UnitType.Brick, 0, false, false, true),
        new Block(21, 15, UnitType.Brick, 0, false, false, true),
        new Block(21, 16, UnitType.Brick, 0, false, false, true),
        new Block(21, 17, UnitType.Brick, 0, false, false, true),
        new Block(21, 18, UnitType.Brick, 0, false, false, true),
        new Block(22, 15, UnitType.Brick, 0, false, false, true),
        new Block(22, 16, UnitType.Brick, 0, false, false, true),
        new Block(22, 17, UnitType.Brick, 0, false, false, true),
        new Block(22, 18, UnitType.Brick, 0, false, false, true),
        
        new Block(40, 40, UnitType.Grass, 1, false, false, true),
        new Block(40, 41, UnitType.Grass, 1, false, false, true),
        new Block(41, 40, UnitType.Grass, 1, false, false, true),
        new Block(41, 41, UnitType.Grass, 1, false, false, true),

        new Block(5, 7, UnitType.HardBrick, 0, false, false, true),
        new Block(5, 6, UnitType.HardBrick, 0, false, false, true),
        
    ];

    public spawnPoints: SpawnPoint[] = [
        new SpawnPoint(10, 10, Directoin.Up),
        new SpawnPoint(20, 20, Directoin.Up)
    ];
}