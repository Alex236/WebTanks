import { LocalContext } from './localContext';

export class Control {

    public ctx: LocalContext;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public name: string;
    public text: string;
    public backgroundImage: string;
    public backgroundColor: string;

    public click: () => void;

    constructor(ctx: LocalContext, x: number, y: number, width: number, height?: number){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(){
    }

}