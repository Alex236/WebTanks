import { Control } from './control';
import { LocalContext } from './localContext';

export class Button extends Control{

    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public name: string;
    public text: string;
    public backgroundImage: string;
    public backgroundColor: string;

    public click: ()=> void;

    constructor(ctx: LocalContext, x: number, y: number, width: number, height?: number, text?: string, backgroundImage?: string, backgroundColor?: string)
    {
        super(ctx, x, y, width, height);
        this.text = text;
        this.backgroundImage = backgroundImage;
        this.backgroundColor = backgroundColor;
    }

    draw(){
        this.ctx.drawImage(this.backgroundImage, this.x, this.y, this.width, this.height);
    }
}