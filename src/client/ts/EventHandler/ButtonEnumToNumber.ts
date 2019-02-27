import { Button } from "./enums/Button";

export class ButtonEnumToNumber {
    public static EnumToNumber(button: Button): number {
        switch(button) {
            case Button.up:
            return 38;
            case Button.down:
            return 40;
            case Button.left:
            return 37;
            case Button.right:
            return 39;
            case Button.space:
            return 32;
            default:
            return NaN;
        }
    }

    public static NumberToEnum(num: number): Button {
        switch (num) {
            case 38:
            return Button.up;
            case 40:
            return Button.down;
            case 37:
            return Button.left;
            case 39:
            return Button.right;
            case 32:
            return Button.space;
            default:
            return NaN;
        }
    }
}