import { Item } from "./item";
import { UnitType } from "./unit-type";

export class Block extends Item {
    public sweep: boolean;
    public drive: boolean;
    public demolish: boolean;

    constructor(x: number, y: number, type: UnitType, canvasLevel: number, sweep: boolean, drive: boolean, demolish: boolean) {
        super(x, y, type, canvasLevel);
        this.sweep = sweep;
        this.drive = drive;
        this.demolish = demolish;
    }
}