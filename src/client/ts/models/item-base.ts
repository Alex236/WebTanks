import { UnitType } from './unit-type';

export abstract class ItemBase {
    public x: number;
    public y: number;
    public size: number;
    public unitType: UnitType;

    constructor(x: number, y: number, size: number, unitType: UnitType) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.unitType = unitType;
    }
}