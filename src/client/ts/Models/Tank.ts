import { TankMove } from '../Models/enums/TankMove';
import { TankType } from '../Models/enums/TankType';
import { PressedUserButtons } from './PressedUserButtons';

export class Tank {
    public x: number = 25;
    public y: number = 25;
    private tankType: TankType;
    private tankMove: TankMove;
    private pressedUserButtons: PressedUserButtons = new PressedUserButtons();

    constructor(tankType: TankType, tankMove: TankMove) {
        this.tankType = tankType;
        this.tankMove = tankMove;
    }

    public getMove(): TankMove {
        return this.tankMove;
    }

    public getType(): TankType {
        return this.tankType;
    }

    public setMove(tankMove: TankMove) {
        this.tankMove = tankMove;
    }

    public getPressedButtons(): PressedUserButtons {
        return this.pressedUserButtons;
    }

    public setPressedButtons(pressedButtons: PressedUserButtons) {
        this.pressedUserButtons = pressedButtons;
    }
}
