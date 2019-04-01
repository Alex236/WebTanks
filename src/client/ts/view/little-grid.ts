import { Sprite } from "./sprite";
import { Block } from '../models/block';

export class LittleGrid {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private totalHeight: number = document.getElementById('first')!.offsetHeight;
    private totalWidth: number = document.getElementById('first')!.offsetWidth;
    private gameSize: number = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
    private cellSize: number = this.gameSize / 52;
    private sprite: Map<string, HTMLImageElement> = new Sprite().all;

    constructor(round: string) {
        this.canvas = <HTMLCanvasElement>document.getElementById(round);
        this.canvas.width = this.gameSize;
        this.canvas.height = this.gameSize;
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    };

    drawRoad():void {
        this.ctx.fillStyle = '#000'
        this.ctx.fillRect(0, 0, this.gameSize, this.gameSize)
    };

    drawBlock(block: Block){
        block.size = 1;
        this.ctx.fillStyle = '#ddd'
        this.ctx.fillRect(block.x * this.cellSize, block.y * this.cellSize, block.size * this.cellSize, block.size * this.cellSize);
    }

    draw(blocks: Block[]){
        this.drawRoad();
        blocks.forEach(block => this.drawBlock(block));
    };
}