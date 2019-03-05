import { Vector } from './enums/Vector';
import { TankType } from '../Models/enums/TankType';
import { KeyCode } from "../EventHandler/enums/KeyCode";

export class Tank {
    public x: number = 25;
    public y: number = 25;
    private tankType: TankType;
    public tankMove: Vector;
    public pressedUserButtons: KeyCode[] = [];

    constructor(tankType: TankType, tankMove: Vector) {
        this.tankType = tankType;
        this.tankMove = tankMove;
    }

    public getType(): TankType {
        return this.tankType;
    }
}
