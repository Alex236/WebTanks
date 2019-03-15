import { Block } from "./block";
import { UnitType } from "./unit-type";
import { SpawnPoint } from "./spawn-point";
import { Route } from "./route";

export class Arena {
    public blocks: Block[] = [
        new Block(5, 5, UnitType.Brick, 0, false, false, true)   
    ];

    public spawnPoints: SpawnPoint[] = [
        new SpawnPoint(10, 10, Route.Up)
    ];
}