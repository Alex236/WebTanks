import { Block } from "./block";
import { UnitType } from "./unit-type";
import { SpawnPoint } from "./spawn-point";
import { Directoin } from "./direction";

export class Arena {
    public blocks: Block[];

    constructor(blocks: Block[]){
        this.blocks = new Array();
        blocks.forEach(block => {
            this.blocks.push(new Block(block.x, block.y, block.unitType, block.sweep, block.drive, block.demolish));
        });
    }

    public spawnPoints: SpawnPoint[] = [
        new SpawnPoint(20, 40, Directoin.Up),
        new SpawnPoint(20, 10, Directoin.Up)
    ];
}