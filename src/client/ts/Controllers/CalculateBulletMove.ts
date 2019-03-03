import { Bullet } from "../Models/Bullet"
import { Bullets } from "../CollectionsOfModels/Bullets"
import { BulletMove } from "../Models/enums/BulletMove";
import { BlockType } from "../Models/enums/BlockType";
import { Parameters } from "../Parameters";

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
                if(bullet.getCoordinates().getY() - 1 >= 0) {
                    bullet.getCoordinates().setY(bullet.getCoordinates().getY() - 1);
                }
                else {
                    this.bullets.deleteBullet(bullet);
                }
                break;
            case BulletMove.down:
                if(bullet.getCoordinates().getY() + 1 < Parameters.fieldHeight) {
                    bullet.getCoordinates().setY(bullet.getCoordinates().getY() + 1);
                }
                else {
                    this.bullets.deleteBullet(bullet);
                }
                break;
            case BulletMove.left:
                if(bullet.getCoordinates().getX() - 1 >= 0) {
                    bullet.getCoordinates().setX(bullet.getCoordinates().getX() - 1);
                }
                else {
                    this.bullets.deleteBullet(bullet);
                }
                break;
            case BulletMove.right:
                if(bullet.getCoordinates().getX() + 1 < Parameters.fieldWidth) {
                    bullet.getCoordinates().setX(bullet.getCoordinates().getX() + 1);
                }
                else {
                    this.bullets.deleteBullet(bullet);
                }
                break;
        }
    }
}