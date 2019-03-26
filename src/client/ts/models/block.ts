import { ItemBase } from "./item-base";
import { UnitType } from "./unit-type";

export class Block extends ItemBase {
    public sweep: boolean;
    public drive: boolean;
    public demolish: boolean;

    constructor(x: number, y: number, unitType: UnitType, sweep: boolean, drive: boolean, demolish: boolean) {
        super(x, y, 1, unitType);
        this.sweep = sweep;
        this.drive = drive;
        this.demolish = demolish;
    }
}