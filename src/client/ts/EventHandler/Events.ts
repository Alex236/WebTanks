import { Button } from "./enums/Button";
import { PressedButtons } from "./PressedButtons";

export class Events {
    public checkPressedButtons() {
        document.addEventListener("keydown", this.keyDownHandler);
        document.addEventListener("keyup", this.keyUpHandler);
    }

    private keyUpHandler(event: KeyboardEvent) {
        switch (event.keyCode) {
            case Button.up:
                PressedButtons.setArrowUp(false);
                break;
            case Button.down:
                PressedButtons.setArrowDown(false);
                break;
            case Button.left:
                PressedButtons.setArrowLeft(false);
                break;
            case Button.right:
                PressedButtons.setArrowRight(false);
                break;
            case Button.space:
                PressedButtons.setSpace(false);
                break;
        }
    }

    private keyDownHandler(event: KeyboardEvent) {
        switch (event.keyCode) {
            case Button.up:
                PressedButtons.setArrowUp(true);
                break;
            case Button.down:
                PressedButtons.setArrowDown(true);
                break;
            case Button.left:
                PressedButtons.setArrowLeft(true);
                break;
            case Button.right:
                PressedButtons.setArrowRight(true);
                break;
            case Button.space:
                PressedButtons.setSpace(true);
                break;
        }
    }
}