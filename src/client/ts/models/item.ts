import { UnitType } from "./unit-type";

export class Item {
    public currentX: number;
    public currentY: number;
    public type: UnitType;
    public canvasLevel: number;

    constructor(currentX: number, currentY: number, type: UnitType, canvasLevel: number) {
        this.currentX = currentX;
        this.currentY = currentY;
        this.type = type;
        this.canvasLevel = canvasLevel;
    }
}