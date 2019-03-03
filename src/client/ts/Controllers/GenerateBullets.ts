import { Users } from "../Models/Users";
import { Bullets } from "../Models/Bullets";
import { User } from "../Models/User";
import { TankMove } from "../Models/enums/TankMove";
import { Bullet } from "../Models/Bullet";
import { BulletMove } from "../Models/enums/BulletMove";
import { Coordinates } from "../Models/Coordinates";

export class GenerateBullets {
    private users: Users;
    private bullets: Bullets;

    constructor(users: Users, bullets: Bullets) {
        this.users = users;
        this.bullets = bullets;
    }

    public generate() {
        for(let i: number = 0; i < this.users.getListOfUsers().length; i++) {
            if(this.users.getListOfUsers()[i].getPressedButtons().getSpace()) {
                this.generateBullet(this.users.getListOfUsers()[i]);
            }
        }
    }

    private generateBullet(user: User) {
        switch(user.getTank().getMove()) {
            case TankMove.up:
            this.bullets.addBullet(new Bullet(new Coordinates(user.getTank().getTankCoordinates().getX() + 1, user.getTank().getTankCoordinates().getY() - 2), BulletMove.up));
            break;
            case TankMove.down:
            this.bullets.addBullet(new Bullet(new Coordinates(user.getTank().getTankCoordinates().getX() + 1, user.getTank().getTankCoordinates().getY() + 4), BulletMove.down));
            break;
            case TankMove.left:
            this.bullets.addBullet(new Bullet(new Coordinates(user.getTank().getTankCoordinates().getX() - 2, user.getTank().getTankCoordinates().getY() + 1), BulletMove.left));
            break;
            case TankMove.right:
            this.bullets.addBullet(new Bullet(new Coordinates(user.getTank().getTankCoordinates().getX() + 4, user.getTank().getTankCoordinates().getY() + 1), BulletMove.right));
            break;
        }
    }
}