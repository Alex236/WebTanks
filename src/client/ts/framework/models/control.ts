export abstract class Control {
    public trans: number[] = [0,0];
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public name: string;
    public text: string;
    public backgroundColor: string;
    public controls : Control[] = [];

    public abstract click: () => void;

    constructor(trans: number[], name: string, x: number, y: number, width: number, height: number = width, text: string = "text"){
        this.trans = trans;
        this.name = name;
        this.x = x + this.trans[0];
        this.y = y + this.trans[1];
        this.width = width;
        this.height = height;
        this.text = text;
    }

    public abstract draw(ctx: CanvasRenderingContext2D): void;
}