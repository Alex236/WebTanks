import { Control } from './control';
import { LocalContext } from './localContext';

export class Button extends Control{
    public text: string;
    public backgroundImage: string;
    public backgroundColor: string;
    public borderColor: string;

    public click: ()=> void = () =>{};

    constructor(ctx: LocalContext, name: string, x: number, y: number, width: number, height: number = width, text: string = "default text", backgroundImage: string = "./assets/defaultButton.svg", backgroundColor: string = "noBackground", borderColor: string = "no")
    {
        super(ctx, name, x, y, width, height);
        this.text = text;
        this.backgroundImage = backgroundImage;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
    }

    draw(){
        if(this.backgroundImage && this.backgroundImage !== "noImage")
        {
            this.ctx.drawImage(this.backgroundImage, this.x, this.y, this.width, this.height);
        }
        else if(this.backgroundColor && this.backgroundColor !== "noBackground")
        {
            this.ctx.fillRect(this.backgroundColor, this.x, this.y, this.width, this.height);
        }
        if(this.borderColor != "no"){this.ctx.strokeRect(this.borderColor, this.x, this.y, this.width, this.height)};
    }
}