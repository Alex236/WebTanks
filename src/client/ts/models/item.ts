import { UnitType } from "./unit-type";
import { ItemType } from "./item-type";

export class Item {
    public x: number;
    public y: number;
    public unitType: UnitType;
    public itemType: ItemType
    public size: number;
    public sweep: boolean;
    public drive: boolean;
    public demolish: boolean;

    constructor(x: number, y: number, unitType: UnitType, itemType: ItemType, size: number, sweep: boolean, drive: boolean, demolish: boolean) {
        this.x = x;
        this.y = y;
        this.unitType = unitType;
        this.itemType = itemType;
        this.size = size;
        this.sweep = sweep;
        this.drive = drive;
        this.demolish = demolish;
    }
}