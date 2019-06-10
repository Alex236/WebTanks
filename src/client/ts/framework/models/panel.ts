import { Control } from './control';

export class Panel extends Control
{
    public controls: Control[] = [];
    public click: () => void = () => {};

    // x, y, width, height - in persent from parent
    constructor(trans: number[], name: string, x: number, y: number, width: number, height: number){
        super(trans, name, x, y, width, height);
        this.x = parent.innerWidth * x * 0.01 + trans[0];
        this.y = parent.innerHeight * y * 0.01 + trans[1];
        this.width = parent.innerWidth * width * 0.01 - this.x;
        this.height = parent.innerHeight * height * 0.01 - this.y;
    }

    public draw(ctx: CanvasRenderingContext2D){
    };
}