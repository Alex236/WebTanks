import { TankMove } from "../Models/enums/TankMove";
import { Bullet } from "../Models/Bullet";
import { BulletMove } from "../Models/enums/BulletMove";
import { Tank } from "../Models/Tank";

export class GenerateBullets {
    private tanks: Tank[];
    private bullets: Bullet[];

    constructor(tanks: Tank[], bullets: Bullet[]) {
        this.tanks = tanks;
        this.bullets = bullets;
    }

    public generate() {
        for(let i: number = 0; i < this.tanks.length; i++) {
            if(this.tanks[i].getPressedButtons().getSpace()) {
                this.generateBullet(this.tanks[i]);
            }
        }
    }

    private generateBullet(tank: Tank) {
        switch(tank.getMove()) {
            case TankMove.up:
            this.bullets.push(new Bullet(tank.x + 1, tank.y - 1, BulletMove.up));
            break;
            case TankMove.down:
            this.bullets.push(new Bullet(tank.x + 1, tank.y + 3, BulletMove.down));
            break;
            case TankMove.left:
            this.bullets.push(new Bullet(tank.x - 1, tank.y + 1, BulletMove.left));
            break;
            case TankMove.right:
            this.bullets.push(new Bullet(tank.x + 3, tank.y + 1, BulletMove.right));
            break;
        }
    }
}