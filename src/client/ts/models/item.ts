import { UnitType } from "./unit-type";
import { ZOrder } from "./z-order";

export class Item {
    public x: number;
    public y: number;
    public type: UnitType;
    public zorder: ZOrder;
    public size: number;

    constructor(x: number, y: number, type: UnitType, zorder: ZOrder, size: number) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.zorder = zorder;
        this.size = size;
    }
}