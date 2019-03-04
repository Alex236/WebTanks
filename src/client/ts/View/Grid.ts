import { Tank } from "../Models/Tank";
import { TankType } from "../Models/enums/TankType";
import { TankMove } from "../Models/enums/TankMove";
import { Bullet } from "../Models/Bullet";
import { BulletMove } from "../Models/enums/BulletMove";
import { Units } from "./Units"

export class Grid {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  height: number = window.innerHeight
  width: number = window.innerWidth - 200;
  cellSizeWidth: number = this.width / 52;
  cellSizeHeight: number = this.height / 52;
  rootImg: string = "https://res.cloudinary.com/phonecasemaggie/image/upload/";

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };

  drawUnit(x : number, y : number, type: Units){
    let img = document.createElement("img");
    switch(type){
      case Units.base : 
        img.src = this.rootImg + "v1550860699/TanksAsserts/" + type + ".png";
        this.ctx.drawImage(img, (x * 4 * this.cellSizeWidth), (y * 4 * this.cellSizeHeight), this.cellSizeWidth * 4, this.cellSizeHeight * 4);
        break;
      case Units.brick :
        img.src = this.rootImg + "v1550848759/TanksAsserts/" + type + ".png";
        this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
        break;
      case Units.hardBrick : 
        img.src = this.rootImg + "v1550848848/TanksAsserts/" + type + ".png";
        this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
        break;
      case Units.green :
        img.src = this.rootImg + "v1550849482/TanksAsserts/" + type + ".png";
        this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
        break;
    }
  }

  drawRoad() {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(this.cellSizeWidth, this.cellSizeHeight, 13 * this.cellSizeWidth, 13 * this.cellSizeHeight)
  };

  drawGrid(map: number[][], tanks: Tank[], bullets: Bullet[]) {
    this.drawRoad();
    this.drawUnit(6,12, Units.base);
    for (var j = 0; j < map.length; j++) {
      for (var i = 0; i < map.length; i++) {
        switch (map[j][i]) {

          case 1:
            this.drawUnit(i, j, Units.brick);
            break;
          case 2:
            this.drawUnit(i, j, Units.hardBrick);
            break;
          case 3:
            this.drawUnit(i, j, Units.green);
            break;
            
        }
      }
    };
    this.drawAllTanks(tanks);
    this.drawAllBullets(bullets);
  };

  setRightTurn(turn: TankMove, type: TankType){
    let trueTank = "";
    switch(turn){
      case TankMove.down:
        trueTank = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1551004169/TanksAsserts/Tank/"+type+"/tankOne.ico";
        break;
      case TankMove.up:
        trueTank = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551004169/TanksAsserts/Tank/"+type+"/tankOne.ico";
        break;
      case TankMove.right:
        trueTank = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551004169/TanksAsserts/Tank/"+type+"/tankOne.ico";
        break;
      case TankMove.left:
        trueTank = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551004169/TanksAsserts/Tank/"+type+"/tankOne.ico";
        break;
    }
    return trueTank;
  };

  drawTank(x: number, y: number, type: TankType, turn: TankMove) {
    this.ctx.globalCompositeOperation = 'source-over';
    let tank = document.createElement("img")
    switch(type){
      case TankType.user :
        tank.src = this.setRightTurn(turn, type);
        break;
      case TankType.enemy :
        tank.src = this.setRightTurn(turn, type);
        break;
    }
    this.ctx.drawImage(tank, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth * 4, this.cellSizeHeight * 4)
  };

  drawAllTanks(allTanks: Tank[]){
    for(let i = 0; i < allTanks.length; i++){
      let tank = allTanks[i];
      this.drawTank(tank.x,tank.y, tank.getType(), tank.getMove());
    }
  };

  setRightTurnForBullet(turn: BulletMove){
    let trueBullet = "";
    switch(turn){
      case BulletMove.down:
        trueBullet = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551595473/TanksAsserts/Bullet/bullet.ico";
        break;
      case BulletMove.up:
        trueBullet = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551595473/TanksAsserts/Bullet/bullet.ico";
        break;
      case BulletMove.right:
        trueBullet = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1551595473/TanksAsserts/Bullet/bullet.ico";
        break;
      case BulletMove.left:
        trueBullet = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551595473/TanksAsserts/Bullet/bullet.ico";
        break;
    }
    return trueBullet;
  };

  drawBullet(x: number, y: number, turn: BulletMove) {
    this.ctx.globalCompositeOperation = 'source-over';
    let bullet = document.createElement("img")
    bullet.src = this.setRightTurnForBullet(turn);
    this.ctx.drawImage(bullet, x * this.cellSizeWidth + this.cellSizeWidth/2, y * this.cellSizeHeight + this.cellSizeHeight/2, this.cellSizeWidth, this.cellSizeHeight)
  };

  drawAllBullets(allBullet: Bullet[]){
    for(let i = 0; i < allBullet.length; i++){
      let bullet = allBullet[i];
      this.drawBullet(bullet.x,bullet.y, bullet.getMove());
    }
  };
}
