///<reference path="./enums/Button.ts" />

class PressedButtons
{
    public checkPressedButtons(): Button[]
    {
        let buttons = new Array();
        addEventListener('keydown', function(event)
        {
            switch(event.keyCode)
            {
                case Button.up:
                buttons.push(Button.up);
                break;
                case Button.down:
                buttons.push(Button.down);
                break;
                case Button.left:
                buttons.push(Button.left);
                break;
                case Button.right:
                buttons.push(Button.right);
                break;
            }
            if(event.keyCode == Button.space)
            {
                buttons.push(Button.space);
            }
        });
        return buttons;
    }
}