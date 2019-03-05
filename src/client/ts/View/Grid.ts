import { Tank } from "../Models/Tank";
import { Bullet } from "../Models/Bullet";
import { Units } from "./Units"

export class Grid {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  totalHeight: number = window.innerHeight;
  totalWidth: number = window.innerWidth;
  gameSize: number = this.totalHeight <= this.totalWidth ? (this.totalHeight - this.totalHeight * 0.1) : (this.totalWidth - this.totalWidth * 0.1);
  cellSize: number = this.gameSize / 52;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.canvas.width = this.totalWidth;
    this.canvas.height = this.totalHeight;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };

  drawUnit(x : number, y : number, unit: number, turn?: number, type?:number){
    let img = document.createElement("img");
    switch(unit){
      case Units.base : 
        img.src = require('../../assets/base.png');
        this.ctx.drawImage(img, (x * 4 * this.cellSize) + this.totalWidth * 0.05, (y * 4 * this.cellSize) + this.totalHeight * 0.05, this.cellSize * 4, this.cellSize * 4);
        break;
      case Units.brick :
        img.src = require('../../assets/wood.png');
        this.ctx.drawImage(img, x * this.cellSize + this.totalWidth * 0.05, y * this.cellSize + this.totalHeight * 0.05, this.cellSize + 1, this.cellSize + 1);
        break;
      case Units.hardBrick : 
        img.src = require('../../assets/metal.png');
        this.ctx.drawImage(img, x * this.cellSize + this.totalWidth * 0.05, y * this.cellSize + this.totalHeight * 0.05, this.cellSize + 1, this.cellSize + 1);
        break;
      case Units.green :
        img.src = require('../../assets/green.png');
        this.ctx.drawImage(img, x * this.cellSize + this.totalWidth * 0.05, y * this.cellSize + this.totalHeight * 0.05, this.cellSize + 1, this.cellSize + 1);
        break;
      case Units.tank :
        this.ctx.globalCompositeOperation = 'source-over';
        img.src = require('../../assets/tanks/tank_' + type + '_' + turn +'.png');
        this.ctx.drawImage(img, x * this.cellSize + this.totalWidth * 0.05, y * this.cellSize + this.totalHeight * 0.05, this.cellSize * 4, this.cellSize * 4);
        break;
      case Units.bullet :
        this.ctx.globalCompositeOperation = 'source-over';
        img.src = require('../../assets/bullets/bullet' + turn + '.png');
        this.ctx.drawImage(img, (x * this.cellSize + this.cellSize/2) + this.totalWidth * 0.05, (y * this.cellSize + this.cellSize/2) + this.totalHeight * 0.05, this.cellSize, this.cellSize);
        break;
    }
  }

  drawBorder() {
    this.ctx.fillStyle = '#ccc'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawRoad() {
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(this.totalWidth * 0.05, this.totalHeight * 0.05, this.gameSize, this.gameSize)
  };

  draw(map: number[][], tanks: Tank[], bullets: Bullet[]) {
    this.drawBorder();
    this.drawRoad();
    this.drawUnit(6,12, Units.base);
    for (var j = 0; j < map.length; j++) {
      for (var i = 0; i < map.length; i++) {
        this.drawUnit(i, j, map[j][i]);  
      }
    };
    this.drawAllTanks(tanks);
    this.drawAllBullets(bullets);
  };

  drawAllTanks(allTanks: Tank[]){
    for(let tank of allTanks){
      this.drawUnit(tank.x, tank.y, Units.tank, tank.tankMove, tank.getType());
    }
  };
  
  drawAllBullets(allBullet: Bullet[]){
    for(let bullet of allBullet){
      this.drawUnit(bullet.x, bullet.y, Units.bullet, bullet.getMove());
    }
  };
}
