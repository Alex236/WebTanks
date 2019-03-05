import { TankMove } from '../Models/enums/TankMove';
import { TankType } from '../Models/enums/TankType';
import { KeyCode } from "../EventHandler/enums/KeyCode";

export class Tank {
    public x: number = 25;
    public y: number = 25;
    private tankType: TankType;
    public tankMove: TankMove;
    public pressedUserButtons: KeyCode[] = [];

    constructor(tankType: TankType, tankMove: TankMove) {
        this.tankType = tankType;
        this.tankMove = tankMove;
    }

    public getType(): TankType {
        return this.tankType;
    }
}
