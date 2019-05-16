import { Control } from './control';
import { LocalContext } from './localContext';

export class Panel extends Control
{
    public click: () => void = () => {};

    constructor(ctx: LocalContext, x: number, y: number, width: number, height?: number){
        super(ctx, x, y, width, height);
        this.x = parent.innerWidth * x * 0.01;
        this.y = parent.innerHeight * y * 0.01;
        this.width = parent.innerWidth * width * 0.01 - this.x;
        this.height = parent.innerHeight * height * 0.01 - this.y;
    }

    registerControlToPanel(control: Control){
        control.x = this.x + control.x;
        control.y = this.y + control.y;
        this.controls.push(control);
    }
/*
construcor View in last
    constructor(canvas: HTMLCanvasElement, startXPercent: number, startYPercent: number, widthPercent: number, heightPercent: number){
        this.canvas = canvas;
        this.startX = this.canvas.width * startXPercent * 0.01;
        this.startY = this.canvas.height * startYPercent * 0.01;
        this.width = this.canvas.width * widthPercent * 0.01 - this.startX;
        this.height = this.canvas.height * heightPercent * 0.01 - this.startY;
        this.ctx = new LocalContext(canvas.getContext("2d"), this.startX, this.startY);
    }
*/

    public draw(){
        console.log("Hello from Panel");
    };

}