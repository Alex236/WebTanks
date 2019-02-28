import { BlockType } from "./enums/BlockType";
import { Tank } from "./Tank";
import { Coordinates } from "./Coordinates";
import { TankType } from "./enums/TankType";
import { TankMove } from "./enums/TankMove";
import { Tanks } from "./Tanks";
import { Events } from "../EventHandler/Events";
import { CalculateTanksMove } from "./CalculateTanksMove";
import { FieldProcessor } from "./FieldProcessor";
import { PressedButtons } from "../EventHandler/PressedButtons";

export class GameProcessor {
    private tank: Tank;
    private field: BlockType[][];
    private tanks: Tanks;
    private events: Events;
    private fieldProcessor: FieldProcessor;

    constructor(field: BlockType[][]) {
        this.tank = new Tank("user", new Coordinates(26, 26), TankType.user, TankMove.down);
        this.field = field;
        this.tanks = new Tanks();
        this.tanks.addTank(this.tank);
        this.events = new Events();
        this.fieldProcessor = new FieldProcessor;
    }

    public calculate() {
        this.events.checkPressedButtons();
        CalculateTanksMove.doStep(this.tanks, this.tank, this.field);
        //this.fieldProcessor.setTanksOnMap(this.field, this.getTanks());
        //bullets

        //this.fieldProcessor.clearMap(this.field);
    }

    public getTanks(): Tank[] {
        return this.tanks.getListOfTanks();
    }

    public getField(): BlockType[][] {
        return this.field;
    }
}