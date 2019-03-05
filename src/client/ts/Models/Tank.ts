import { Vector } from './enums/Vector';
import { TankType } from '../Models/enums/TankType';
import { KeyCode } from "../EventHandler/enums/KeyCode";
import { Item } from './Item';

export class Tank extends Item {
    private tankType: TankType;
    public vector: Vector;
    public move: boolean = false;
    public shoot: boolean = false;

    constructor(tankType: TankType, vector: Vector) {
        super();
        this.tankType = tankType;
        this.vector = vector;
    }

    public getType(): TankType {
        return this.tankType;
    }
}
