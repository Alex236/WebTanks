import { Item } from "./item";
import { UnitType } from "./unit-type";
import { Parameters } from "../parameters";
import { ItemType } from "./item-type";

export class Block extends Item {
    constructor(x: number, y: number, unitType: UnitType, itemType: ItemType, sweep: boolean, drive: boolean, demolish: boolean) {
        super(x, y, unitType, itemType, Parameters.blockSize, sweep, drive, demolish);
    }
}