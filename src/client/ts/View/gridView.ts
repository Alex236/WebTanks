import { Users } from "../CollectionsOfModels/Users";
import { User } from "../Models/User";
import { Tank } from "../Models/Tank";
import { TankType } from "../Models/enums/TankType";
import { TankMove } from "../Models/enums/TankMove";
import { Bullet } from "../Models/Bullet";
import { BulletMove } from "../Models/enums/BulletMove";

export class Grid {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  height: number = window.innerHeight
  width: number = window.innerWidth - 200;
  cellSizeWidth: number = this.width / 52;
  cellSizeHeight: number = this.height / 52;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };

  drawBase(x: number, y: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550860699/TanksAsserts/flag_ukraine_36335.png"
    this.ctx.drawImage(img, (x * 4 * this.cellSizeWidth), (y * 4 * this.cellSizeHeight), this.cellSizeWidth * 4, this.cellSizeHeight * 4)
  };

  drawBrick(x: number, y: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848759/TanksAsserts/crateWood.png";
    this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
  };

  drawHardBrick(x: number, y: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848848/TanksAsserts/crateMetal.png";
    this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
  };

  drawGreen(x: number, y: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550849482/TanksAsserts/favicon-6.ico";
    this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
  };

  drawRoad(x: number, y: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550844835/TanksAsserts/Road.png";
    this.ctx.drawImage(img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
  };

  drawGrid(map: number[][]) {
    for (var j = 0; j < 52; j++) {
      for (var i = 0; i < 52; i++) {
        switch (map[j][i]) {
          case 0:
            this.drawRoad(i, j);
            break;
          case 1:
            this.drawBrick(i, j);
            break;
          case 2:
            this.drawHardBrick(i, j);
            break;
          case 3:
            this.drawRoad(i, j);
            this.drawGreen(i, j);
            break;
        }
      }
    };
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

  drawAllTanks(allUsers: User[]){
    for(let i = 0; i < allUsers.length; i++){
      let tank = allUsers[i].getTank();
      this.drawTank(tank.getTankCoordinates().getX(),tank.getTankCoordinates().getY(), tank.getType(), tank.getMove());
    }
  };
/*
  drawBullet(x: number, y: number) {
    this.ctx.globalCompositeOperation = 'source-over';
    let bullet = document.createElement("img")
    bullet.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1551596458/TanksAsserts/Bullet/circleBullet.ico" ;
    this.ctx.drawImage(bullet, x * this.cellSizeWidth + x/2, y * this.cellSizeHeight + y/4, this.cellSizeWidth, this.cellSizeHeight)
  };

  drawAllBullets(allBullet: Bullet[]){
    for(let i = 0; i < allBullet.length; i++){
      let bullet = allBullet[i];
      this.drawBullet(bullet.getCoordinates().getX(),bullet.getCoordinates().getY());
    }
  };
  */

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
    this.drawBullet(bullet.getCoordinates().getX(),bullet.getCoordinates().getY(), bullet.getMove());
  }
};
}
