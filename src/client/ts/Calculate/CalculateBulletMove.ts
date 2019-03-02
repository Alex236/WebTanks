import { Bullet } from "../Models/Bullet"
import { Bullets } from "../Models/Bullets"
import { BulletMove } from "../Models/enums/BulletMove";
import { BlockType } from "../Models/enums/BlockType";

export class CalculateBulletMove {
    private bullets: Bullets;
    private field: BlockType[][];

    constructor(bullets: Bullets, field: BlockType[][]) {
        this.bullets = bullets;
        this.field = field;
    }

    public doStep() {
        for(let i: number = 0; i < this.bullets.getListOfBullets().length; i++) {
            this.step(this.bullets.getListOfBullets()[i]);
        }
    }

    private step(bullet: Bullet) {
        switch(bullet.getMove()) {
            case BulletMove.up:

                break;
            case BulletMove.down:

                break;
            case BulletMove.left:

                break;
            case BulletMove.right:

                break;
        }
    }
}