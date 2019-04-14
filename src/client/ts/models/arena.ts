import { Block } from "./block";
import { SpawnPoint } from "./spawn-point";
import { Directoin } from "./direction";

export class Arena {
    public blocks: Block[] = [];

    constructor(blocks: Block[]){
        blocks.forEach(block => {
            this.blocks.push(new Block(block.x, block.y, block.unitType));
        });
    }

    public spawnPoints: SpawnPoint[] = [
        new SpawnPoint(20, 40, Directoin.Up),
        new SpawnPoint(20, 10, Directoin.Up)
    ];
}