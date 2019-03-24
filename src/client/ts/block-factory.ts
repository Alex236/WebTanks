import { UnitType } from './models/unit-type';
import { Block } from './models/block';
import { DrawPriority } from './models/draw-priority';

export class BlockFactory {
    public createBlock(block: UnitType, x: number, y: number): Block {
        switch(block) {
            case UnitType.Road:
            return new Block(x, y, 1, block, true, true, false, DrawPriority.Low);
            case UnitType.Brick:
            return new Block(x, y, 1, block, false, false, true, DrawPriority.Height);
            case UnitType.HardBrick:
            return new Block(x, y, 1, block, false, false, false, DrawPriority.Height);
            case UnitType.Water:
            return new Block(x, y, 1, block, true, false, false, DrawPriority.Low);
            case UnitType.Grass:
            return new Block(x, y, 1, block, true, true, false, DrawPriority.Height);
        }
    }
}