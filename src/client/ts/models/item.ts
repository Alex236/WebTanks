import { UnitType } from "./unit-type";
import { ZOrder } from "./z-order";

export class Item {
    public x: number;
    public y: number;
    public type: UnitType;
    public zorder: ZOrder;
    public size: number;
    public sweep: boolean;
    public drive: boolean;
    public demolish: boolean;

    constructor(x: number, y: number, type: UnitType, zorder: ZOrder, size: number, sweep: boolean, drive: boolean, demolish: boolean) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.zorder = zorder;
        this.size = size;
        this.sweep = sweep;
        this.drive = drive;
        this.demolish = demolish;
    }
}