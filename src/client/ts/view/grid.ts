import { Tank } from "../models/tank";
import { Bullet } from "../models/bullet";
import { UnitType } from "../models/unit-type";
import { Parameters } from "../parameters";
import { Block } from "../models/block";

export class Grid {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private totalHeight: number = document.getElementById('arena')!.offsetHeight;
  private totalWidth: number = document.getElementById('arena')!.offsetWidth;
  private gameSize: number = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
  private cellSize: number = this.gameSize / 52;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.canvas.width = this.gameSize;
    this.canvas.height = this.gameSize;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };

  //getImage(type: UnitType): HTMLImageElement{


  //  return sprites
  //} 

  drawRoad():void {
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.gameSize, this.gameSize)
  };

  drawBlock(block: Block){
  //  this.ctx.drawImage(this.getImage(block.type), block.x * this.cellSize, block.y * this.cellSize, block.size * this.cellSize, block.size * this.cellSize);
  }

  draw(blocks: Block[]):void {
    this.drawRoad();
    blocks.forEach(block => this.drawBlock(block))
  };
}
