import { Bullet } from "./Bullet"
import { Bullets } from "./Bullets"
import { BulletMove } from "./enums/BulletMove";
import { BlockType } from "./enums/BlockType";

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