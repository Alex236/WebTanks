import { ItemBase } from "./item-base";
import { UnitType } from "./unit-type";
import { DrawPriority } from './draw-priority';

export class Block extends ItemBase {
    public sweep: boolean;
    public drive: boolean;
    public demolish: boolean;
    public drawPriority: DrawPriority

    constructor(x: number, y: number, size: number, unitType: UnitType, sweep: boolean, drive: boolean, demolish: boolean, drawPriority: DrawPriority) {
        super(x, y, size, unitType);
        this.sweep = sweep;
        this.drive = drive;
        this.demolish = demolish;
        this.drawPriority = drawPriority;
    }
}