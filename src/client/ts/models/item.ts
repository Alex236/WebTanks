import { UnitType } from "./unit-type";
import { ZOrder } from "./z-order";

export class Item {
    public currentX: number;
    public currentY: number;
    public type: UnitType;
    public zorder: ZOrder;

    constructor(currentX: number, currentY: number, type: UnitType, zorder: ZOrder) {
        this.currentX = currentX;
        this.currentY = currentY;
        this.type = type;
        this.zorder = zorder;
    }
}