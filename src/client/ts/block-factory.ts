import { UnitType } from './models/unit-type';
import { Block } from './models/block';

export class BlockFactory {
    public createBlock(block: UnitType, x: number, y: number): Block {
        switch(block) {
            case UnitType.Road:
            return new Block(x, y, block);
            case UnitType.Brick:
            return new Block(x, y, block);
            case UnitType.HardBrick:
            return new Block(x, y, block);
            case UnitType.Water:
            return new Block(x, y, block);
            case UnitType.Grass:
            return new Block(x, y, block);
        }
    }
}