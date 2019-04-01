import { UnitType } from "../models/unit-type";
import { Sprite } from "./sprite";
import { ItemBase } from '../models/item-base';
import { Tank } from '../models/tank';
import { Block } from '../models/block';
import { Bullet } from '../models/bullet';
import { Directoin } from '../models/direction';

export class Grid {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private totalHeight: number = document.getElementById('arena')!.offsetHeight;
  private totalWidth: number = document.getElementById('arena')!.offsetWidth;
  private gameSize: number = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
  private cellSize: number = this.gameSize / 52;
  private sprite: Map<string, HTMLImageElement> = new Sprite().all;

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

  drawBlock(block: Block){
    this.ctx.drawImage(this.sprite.get(UnitType[block.unitType]), block.x * this.cellSize, block.y * this.cellSize, block.size * this.cellSize, block.size * this.cellSize);
  }

  drawTanksBulletsBase(item: any){
    let direction = item.__proto__.constructor.name ==  "Base" ? "" : Directoin[item.direction];
    this.ctx.drawImage(this.sprite.get(UnitType[item.unitType] + direction), item.x * this.cellSize, item.y * this.cellSize, item.size * this.cellSize, item.size * this.cellSize);
  }

  draw(blocks: Block[], tanks: Tank[], bullets: Bullet[]):void {
    this.drawRoad();
    ((<ItemBase[]>tanks).concat(bullets)).forEach(item => this.drawTanksBulletsBase(<ItemBase>item));
    var time = performance.now();
    blocks.forEach(block => this.drawBlock(block));
    time = performance.now() - time;
    console.log('Время выполнения = ', time);
  };
}