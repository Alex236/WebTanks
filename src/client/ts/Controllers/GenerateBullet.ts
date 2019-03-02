import { Users } from "../Models/Users";
import { Bullets } from "../Models/Bullets";
import { User } from "../Models/User";
import { TankMove } from "../Models/enums/TankMove";

export class GenerateBullet {
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
            case TankMove.down:
            case TankMove.left:
            case TankMove.right:
        }
    }
}