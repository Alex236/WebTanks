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
  private img: HTMLImageElement | any = document.getElementById("img");
  private im = new Image();

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.canvas.width = this.gameSize;
    this.canvas.height = this.gameSize;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };

  getImage(type: UnitType): HTMLImageElement{
    this.im.src = require("../../assets/" + type + ".png");
    return this.im;
  } 

  drawRoad():void {
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.gameSize, this.gameSize)
  };

  drawBlock(block: Block){
    this.ctx.drawImage(this.getImage(block.type), block.currentX, block.currentY,64,64);
  }

  draw(blocks: Block[], tanks: Tank[], bullets: Bullet[]):void {
    this.drawRoad();
    blocks.forEach(block => this.drawBlock(block))
  };

}
