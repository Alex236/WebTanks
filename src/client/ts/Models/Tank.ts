import { Vector } from './enums/Vector';
import { TankType } from '../Models/enums/TankType';
import { KeyCode } from "../EventHandler/enums/KeyCode";
import { Item } from './Item';

export class Tank extends Item {
    private tankType: TankType;
    public tankMove: Vector;

    constructor(tankType: TankType, tankMove: Vector) {
        super();
        this.tankType = tankType;
        this.tankMove = tankMove;
        this.x = 26;
        this.y = 26;
    }

    public getType(): TankType {
        return this.tankType;
    }
}
