import { Tank } from "../tanks/tank";
import { Bullet } from "../models/bullet";
import { Units } from "./units"
import { TankType } from "../tanks/tank-type";

export class Grid {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private totalHeight: number = document.getElementById('arena')!.offsetHeight;
  private totalWidth: number = document.getElementById('arena')!.offsetWidth;
  private gameSize: number = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
  private cellSize: number = this.gameSize / 52;
  private img: HTMLImageElement | any = document.getElementById("img");

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.canvas.width = this.gameSize;
    this.canvas.height = this.gameSize;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };

  drawUnit(x : number, y : number, unit: number, turn: number = 0, type: number = 0):void { 
    switch(unit){
      case Units.Base : 
        this.ctx.drawImage(this.img, 0, 0, 64, 64, x * 4 * this.cellSize, y * 4 * this.cellSize, this.cellSize * 4, this.cellSize * 4);
        break;
      case Units.Brick :
        this.ctx.drawImage(this.img, 0, 1208, 57, 57, x * this.cellSize, y * this.cellSize, this.cellSize + 1, this.cellSize + 1);
        break;
      case Units.HardBrick : 
        this.ctx.drawImage(this.img, 0, 1152, 57, 57, x * this.cellSize, y * this.cellSize, this.cellSize + 1, this.cellSize + 1);
        break;
      case Units.Green :
        this.ctx.drawImage(this.img, 0, 64, 57, 57, x * this.cellSize, y * this.cellSize, this.cellSize + 1, this.cellSize + 1);
        break;
      case Units.Tank :
        let startPoint = this.setTrueType(type);
        this.ctx.drawImage(this.img, 0, startPoint + 64*turn, 64, 64, x * this.cellSize, y * this.cellSize, this.cellSize * 4, this.cellSize * 4);    
        break;
      case Units.Bullet :
        let a = turn <= 1 ? 1264 : 1296;
        this.ctx.drawImage(this.img, 32*(turn%2), a, 32, 32,  x * this.cellSize + this.cellSize/2, y * this.cellSize + this.cellSize/2, this.cellSize, this.cellSize);
        break;
    } 
  }

  setTrueType(type?: number):number {
    let startPoint = 0;
    switch(type){
      case 0: startPoint = 640;
      break;
      case 1: startPoint = 896;
      break;
    }
    return startPoint;
  }

  drawBorder():void {
    this.ctx.fillStyle = '#ccc'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawRoad():void {
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.gameSize, this.gameSize)
  };

  draw(map: number[][], tanks: Tank[], bullets: Bullet[]):void {
    this.drawBorder();
    this.drawRoad();
    this.drawUnit(6,12, Units.Base);
    for (var j = 0; j < map.length; j++) {
      for (var i = 0; i < map.length; i++) {
        this.drawUnit(i, j, map[j][i]);  
      }
    };
    this.drawAllTanks(tanks);
    this.drawAllBullets(bullets);
  };

  drawAllTanks(allTanks: Tank[]):void {
    for(let tank of allTanks){
      this.ctx.font = "30pt Arial";
      this.ctx.fillStyle = tank.type == TankType.Heavy ? "rgb(100,0,0)" : "rgb(0,100,0)";
      this.ctx.fillText(String(tank.health), (tank.currentX + 1)  * this.cellSize, tank.currentY * this.cellSize);
      this.drawUnit(tank.currentX, tank.currentY, Units.Tank, tank.vector, tank.type);
    }
  };
  
  drawAllBullets(allBullet: Bullet[]):void {
    for(let bullet of allBullet){
      this.drawUnit(bullet.x, bullet.y, Units.Bullet, bullet.vector);
    }
  };
}
