import { Button } from "./enums/Button";

export class PressedButtons
{
    public checkPressedButtons(): Button[]
    {
        console.log("checkPressedButtons");
        let buttons = new Array();
        document.addEventListener('keydown', function(event)
        {
            switch(event.keyCode)
            {
                case Button.up:
                buttons.push(Button.up);
                console.log("stepU push");
                break;
                case Button.down:
                buttons.push(Button.down);
                console.log("stepD push");
                break;
                case Button.left:
                buttons.push(Button.left);
                console.log("stepL push");
                break;
                case Button.right:
                buttons.push(Button.right);
                console.log("stepR push");
                break;
                case Button.space:
                buttons.push(Button.space);
                console.log("shoot push");
                break;
            }
        });
        console.log(buttons.length);
        return buttons;
    }
}