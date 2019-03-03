import { DrawingElements } from "../DrawingElements";
import { User } from "../../Models/User";
import { TankType } from "../../Models/enums/TankType";
import { TankMove } from "../../Models/enums/TankMove";

export class Tanks extends DrawingElements{
  private img: HTMLImageElement = document.createElement("img");
  private trueTank: string = "";

  setRightTurn(turn: TankMove, type: TankType){
    switch(turn){
      case TankMove.down:
        this.trueTank = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1551004169/TanksAsserts/Tank/"+type+"/tankOne.ico";
        break;
      case TankMove.up:
        this.trueTank = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551004169/TanksAsserts/Tank/"+type+"/tankOne.ico";
        break;
      case TankMove.right:
        this.trueTank = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551004169/TanksAsserts/Tank/"+type+"/tankOne.ico";
        break;
      case TankMove.left:
        this.trueTank = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551004169/TanksAsserts/Tank/"+type+"/tankOne.ico";
        break;
    }
    return this.trueTank;
  };

  drawTank(x: number, y: number, type: TankType, turn: TankMove) {
    this.ctx.globalCompositeOperation = 'source-over';
    switch(type){
      case TankType.user :
        this.img.src = this.setRightTurn(turn, type);
        break;
      case TankType.enemy :
        this.img.src = this.setRightTurn(turn, type);
        break;
    }
    this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth * 4, this.cellSizeHeight * 4)
  };

  draw(allUsers: User[]){
    for(let i = 0; i < allUsers.length; i++){
      let tank = allUsers[i].getTank();
      this.drawTank(tank.getTankCoordinates().getX(),tank.getTankCoordinates().getY(), tank.getType(), tank.getMove());
    }
  };
}