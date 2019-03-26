import { UnitType } from './models/unit-type';
import { Block } from './models/block';

export class BlockFactory {
    public createBlock(block: UnitType, x: number, y: number): Block {
        switch(block) {
            case UnitType.Road:
            return new Block(x, y, block, true, true, false);
            case UnitType.Brick:
            return new Block(x, y, block, false, false, true);
            case UnitType.HardBrick:
            return new Block(x, y, block, false, false, false);
            case UnitType.Water:
            return new Block(x, y, block, true, false, false);
            case UnitType.Grass:
            return new Block(x, y, block, true, true, false);
        }
    }
}