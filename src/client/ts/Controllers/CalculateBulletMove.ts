import { Bullet } from "../Models/Bullet"
import { BulletMove } from "../Models/enums/BulletMove";
import { BlockType } from "../Models/enums/BlockType";
import { Parameters } from "../Parameters";

export class CalculateBulletMove {
    private bullets: Bullet[];
    private field: BlockType[][];

    constructor(bullets: Bullet[], field: BlockType[][]) {
        this.bullets = bullets;
        this.field = field;
    }

    public doStep() {
        for(let i: number = 0; i < this.bullets.length; i++) {
            this.step(this.bullets[i], i);
        }
    }

    private step(bullet: Bullet, i: number) {
        switch(bullet.getMove()) {
            case BulletMove.up:
                if(bullet.y - 1 >= 0) {
                    bullet.y = bullet.y - 1;
                }
                else {
                    this.bullets.splice(i, 1);
                }
                break;
            case BulletMove.down:
                if(bullet.y + 1 < Parameters.fieldHeight) {
                    bullet.y = bullet.y + 1;
                }
                else {
                    this.bullets.splice(i, 1);
                }
                break;
            case BulletMove.left:
                if(bullet.x - 1 >= 0) {
                    bullet.x = bullet.x - 1;
                }
                else {
                    this.bullets.splice(i, 1);
                }
                break;
            case BulletMove.right:
                if(bullet.x + 1 < Parameters.fieldWidth) {
                    bullet.x = bullet.x + 1;
                }
                else {
                    this.bullets.splice(i, 1);
                }
                break;
        }
    }
}