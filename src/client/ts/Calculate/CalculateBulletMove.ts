import { Bullet } from "./Bullet"
import { BulletMove } from "./enums/BulletMove";

export class CalculateBulletMove {
    public doStep(bullets: Bullet[]) {
        for(let i: number = 0; i < bullets.length; i++) {
            this.step(bullets[i]);
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