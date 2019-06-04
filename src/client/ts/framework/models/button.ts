import { Control } from './control';

export class Button extends Control{
    public backgroundImage: HTMLImageElement;
    public backgroundColor: string;
    public borderColor: string;

    public click: ()=> void = () =>{};

    constructor(trans: number[], name: string, x: number, y: number, width: number, height: number = width, text: string = "default text", backgroundImage: HTMLImageElement, backgroundColor: string = "noBackground", borderColor: string = "no")
    {
        super(trans, name, x, y, width, height, text);
        this.backgroundImage = backgroundImage;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
    }

    public draw(ctx: CanvasRenderingContext2D){
        if(this.backgroundImage)
        {
            this.backgroundImage.onload = () => {
                ctx.drawImage(this.backgroundImage, this.x, this.y, this.width, this.height);
            };
        }
        else if(this.backgroundColor && this.backgroundColor !== "noBackground")
        {
            ctx.fillStyle = this.backgroundColor;
            ctx.fillRect(this.x, this.x, this.width, this.height);
        }
        if(this.borderColor && this.borderColor !== "no"){
            ctx.strokeStyle = this.borderColor;
            ctx.strokeRect(this.x, this.y, this.width, this.height)
        };
    }
}