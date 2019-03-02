import { Tank } from "./Tank";
import { PressedUserButtons } from "../Calculate/PressedUserButtons";

export class User {
    private tank: Tank;
    private name: string;
    private pressedUserButtons: PressedUserButtons = new PressedUserButtons();
    
    constructor(tank: Tank, name: string) {
        this.tank = tank;
        this.name = name;
    }

    public getTank(): Tank {
        return this.tank;
    }

    public getName(): string {
        return this.name;
    }

    public getPressedButtons(): PressedUserButtons {
        return this.pressedUserButtons;
    }

    public setPressedButtons(pressedButtons: PressedUserButtons) {
        this.pressedUserButtons = pressedButtons;
    }
}