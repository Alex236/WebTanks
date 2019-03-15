import { Item } from "./item";
import { UnitType } from "./unit-type";
import { ZOrder } from "./z-order";
import { Parameters } from "../parameters";

export class Block extends Item {
    public sweep: boolean;
    public drive: boolean;
    public demolish: boolean;

    constructor(x: number, y: number, type: UnitType, zorder: ZOrder, sweep: boolean, drive: boolean, demolish: boolean) {
        super(x, y, type, zorder, Parameters.blockSize);
        this.sweep = sweep;
        this.drive = drive;
        this.demolish = demolish;
    }
}