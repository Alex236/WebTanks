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
  img: HTMLImageElement | any = document.getElementById("img") ;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.canvas.width = this.totalWidth;
    this.canvas.height = this.totalHeight;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };

  drawUnit(x : number, y : number, unit: number, turn: number = 0, type: number = 0){ 
    switch(unit){
      case Units.base : 
        this.ctx.drawImage(this.img, 0, 0, 64, 64, (x * 4 * this.cellSize) + this.totalWidth * 0.05, (y * 4 * this.cellSize) + this.totalHeight * 0.05, this.cellSize * 4, this.cellSize * 4);
        break;
      case Units.brick :
        this.ctx.drawImage(this.img, 0, 1208, 57, 57, x * this.cellSize + this.totalWidth * 0.05, y * this.cellSize + this.totalHeight * 0.05, this.cellSize + 1, this.cellSize + 1);
        break;
      case Units.hardBrick : 
        this.ctx.drawImage(this.img, 0, 1152, 57, 57, x * this.cellSize + this.totalWidth * 0.05, y * this.cellSize + this.totalHeight * 0.05, this.cellSize + 1, this.cellSize + 1);
        break;
      case Units.green :
        this.ctx.drawImage(this.img, 0, 64, 57, 57, x * this.cellSize + this.totalWidth * 0.05, y * this.cellSize + this.totalHeight * 0.05, this.cellSize + 1, this.cellSize + 1);
        break;
      case Units.tank :
        let startPoint = this.setTrueType(type);
        this.ctx.drawImage(this.img, 0, startPoint + 64*turn, 64, 64, x * this.cellSize + this.totalWidth * 0.05, y * this.cellSize + this.totalHeight * 0.05, this.cellSize * 4, this.cellSize * 4);    
        break;
      case Units.bullet :
        let a = this.setTurnBullet(turn);
        this.ctx.drawImage(this.img, 0, 0, a[0], a[1], (x * this.cellSize + this.cellSize/2) + this.totalWidth * 0.05, (y * this.cellSize + this.cellSize/2) + this.totalHeight * 0.05, this.cellSize, this.cellSize);
        break;
    } 
  }

  setTrueType(type?: number) {
    let startPoint = 0;
    switch(type){
      case 0: startPoint = 640;
      break;
      case 1: startPoint = 896;
      break;
    }
    return startPoint;
  }

  setTurnBullet(turn?: number): number[]{
    let a = [0,0]
    switch(turn){
      case 0: 
        a = [0, 1264]
      case 1:
        a = [32, 1264]
        case 2:
        a = [0, 1296]
      case 3:
        a = [32,1296] 
    }
    return a;
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
      this.drawUnit(tank.x, tank.y, Units.tank, tank.vector, tank.getType());
    }
  };
  
  drawAllBullets(allBullet: Bullet[]){
    for(let bullet of allBullet){
      this.drawUnit(bullet.x, bullet.y, Units.bullet, bullet.getMove());
    }
  };
}
