import { ItemBase } from "./item-base";
import { UnitType } from "./unit-type";


export class Block extends ItemBase {
    public sweep: boolean;
    public drive: boolean;
    public demolish: boolean;

    constructor(x: number, y: number, unitType: UnitType) {
        super(x, y, 1, unitType);

        switch (unitType) {
            case UnitType.Road:
                this.sweep = true;
                this.drive = true;
                this.demolish = false;
                break;
            case UnitType.Brick:
                this.sweep = false;
                this.drive = false;
                this.demolish = true;
                break;
            case UnitType.HardBrick:
                this.sweep = false;
                this.drive = false;
                this.demolish = false;
                break;
            case UnitType.Water:
                this.sweep = true;
                this.drive = false;
                this.demolish = false;
                break;
            case UnitType.Grass:
                this.sweep = true;
                this.drive = true;
                this.demolish = false;
                break;
        }
    }
}