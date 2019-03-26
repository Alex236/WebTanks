import { UnitType } from "../models/unit-type";
import { Sprite } from "./sprite";
import { ItemBase } from '../models/item-base';

export class Grid {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private totalHeight: number = document.getElementById('arena')!.offsetHeight;
  private totalWidth: number = document.getElementById('arena')!.offsetWidth;
  private gameSize: number = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
  private cellSize: number = this.gameSize / 52;
  private sprite: Map<UnitType | string, HTMLImageElement> = new Sprite().all;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.canvas.width = this.gameSize;
    this.canvas.height = this.gameSize;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };

  drawRoad():void {
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.gameSize, this.gameSize)
  };

  drawBlock(item: ItemBase){
    this.ctx.drawImage(this.sprite.get(UnitType[item.unitType]), item.x * this.cellSize, item.y * this.cellSize, item.size * this.cellSize, item.size * this.cellSize);
  }

  draw(items: ItemBase[]):void {
    this.drawRoad();
    items.forEach(item => this.drawBlock(<ItemBase>item))
  };
}
