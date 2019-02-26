/// <reference path="./enums/TankType.ts"/>
/// <reference path="./enums/TankMove.ts"/>
/// <reference path="./Tanks.ts"/>
/// <reference path="../EventHandler/PressedButtons.ts"/>
/// <reference path="./Calculate.ts"/>
/// <reference path="./Coordinates.ts"/>
/// <reference path="../EventHandler/enums/Button.ts"/>
/// <reference path="../EventHandler/enums/Button.ts"/>
/// <reference path="../EventHandler/enums/Button.ts"/>


class GameProcessor
{
    public tank: Tank;
    private field: BlockType[][];
    public tanks: Tanks;
    private pressedButtons: PressedButtons;

    constructor(field: BlockType[][])
    {
        this.tank = new Tank("user", new Coordinates(16, 32), TankType.user, TankMove.down);
        this.field = field;
        this.tanks = new Tanks();
        this.tanks.addTank(this.tank);
        this.pressedButtons = new PressedButtons();
    }

    public calculate()
    {
        let buttons: Button[] = new Array();
        buttons = this.pressedButtons.checkPressedButtons();
        Calculate.doStep(buttons, this.tanks, this.tank, this.field);
        //draw
    }
}