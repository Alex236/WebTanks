import { DrawingElements } from "../DrawingElements";
import { Bullet } from "../../Models/Bullet";
import { BulletMove } from "../../Models/enums/BulletMove";

export class Bullets extends DrawingElements{
  private img: HTMLImageElement = document.createElement("img");
  private trueBullet: string = "";
    setRightTurnForBullet(turn: BulletMove){
        switch(turn){
          case BulletMove.down:
            this.trueBullet = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551595473/TanksAsserts/Bullet/bullet.ico";
            break;
          case BulletMove.up:
            this.trueBullet = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551595473/TanksAsserts/Bullet/bullet.ico";
            break;
          case BulletMove.right:
            this.trueBullet = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1551595473/TanksAsserts/Bullet/bullet.ico";
            break;
          case BulletMove.left:
            this.trueBullet = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551595473/TanksAsserts/Bullet/bullet.ico";
            break;
        }
        return this.trueBullet;
      };
    
      drawBullet(x: number, y: number, turn: BulletMove) {
        this.ctx.globalCompositeOperation = 'source-over';
        this.img.src = this.setRightTurnForBullet(turn);
        this.ctx.drawImage(this.img, x * this.cellSizeWidth + this.cellSizeWidth/2, y * this.cellSizeHeight + this.cellSizeHeight/2, this.cellSizeWidth, this.cellSizeHeight)
      };
    
      draw(allBullet: Bullet[]){
        for(let i = 0; i < allBullet.length; i++){
          let bullet = allBullet[i];
          this.drawBullet(bullet.getCoordinates().getX(),bullet.getCoordinates().getY(), bullet.getMove());
        }
      };
}