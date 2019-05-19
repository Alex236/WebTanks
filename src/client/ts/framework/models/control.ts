import { LocalContext } from './localContext';

export abstract class Control {
    public ctx: LocalContext;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public name: string;
    public text: string;
    public backgroundColor: string;
    public controls : Control[] = [];

    public abstract click: () => void;

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

    constructor(ctx: LocalContext, name: string, x: number, y: number, width: number, height?: number){
        this.ctx = ctx;
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public abstract draw(): void;
}