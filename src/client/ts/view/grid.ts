import { UnitType } from "../models/unit-type";
import { Block } from "../models/block";
import { Sprite } from "./sprite";
import { ItemBase } from '../models/item-base';

export class Grid {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private totalHeight: number = document.getElementById('arena')!.offsetHeight;
  private totalWidth: number = document.getElementById('arena')!.offsetWidth;
  private gameSize: number = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
  private cellSize: number = this.gameSize / 52;
  private sprite: Map<string, HTMLImageElement>;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.canvas.width = this.gameSize;
    this.canvas.height = this.gameSize;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    let img = new Image();
    img.src = require("../../assets/sprites.svg");
    this.sprite = new Sprite(img).all;
  };

  getImage(type: UnitType): HTMLImageElement | any{
    return this.sprite.get(type.toString());
  };

  drawRoad():void {
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.gameSize, this.gameSize)
  };

  drawBlock(block: Block){
    this.ctx.drawImage(this.getImage(block.unitType), block.x * this.cellSize, block.y * this.cellSize, block.size * this.cellSize, block.size * this.cellSize);
  }

  draw(blocks: ItemBase[]):void {
    this.drawRoad();
    blocks.forEach(block => this.drawBlock(<Block>block))
  };
}
