export class PressedButtons {
    private static arrowUp: boolean = false;
    private static arrowDown: boolean = false;
    private static arrowLeft: boolean = false;
    private static arrowRight: boolean = false;
    private static space: boolean = false;

    public static getArrowUp(): boolean {
        return PressedButtons.arrowUp;
    }

    public static getArrowDown(): boolean {
        return PressedButtons.arrowDown;
    }

    public static getArrowLeft(): boolean {
        return PressedButtons.arrowLeft;
    }
    
    public static getArrowRight(): boolean {
        return PressedButtons.arrowRight;
    }
    
    public static getSpace(): boolean {
        return PressedButtons.space;
    }

    public static setArrowUp(state: boolean) {
        PressedButtons.arrowUp = state;
    }

    public static setArrowDown(state: boolean) {
        PressedButtons.arrowDown = state;
    }

    public static setArrowLeft(state: boolean) {
        PressedButtons.arrowLeft = state;
    }

    public static setArrowRight(state: boolean) {
        PressedButtons.arrowRight = state;
    }

    public static setSpace(state: boolean) {
        PressedButtons.space = state;
    }
}