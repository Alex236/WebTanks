import { BlockType } from "./enums/BlockType";
import { Tank } from "./Tank";
import { Coordinates } from "./Coordinates";
import { TankType } from "./enums/TankType";
import { TankMove } from "./enums/TankMove";
import { Tanks } from "./Tanks";
import { PressedButtons } from "../EventHandler/PressedButtons";
import { Calculate } from "./Calculate";
import { Button } from '../EventHandler/enums/Button'

export class GameProcessor
{
    private tank: Tank;
    private field: BlockType[][];
    private tanks: Tanks;
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