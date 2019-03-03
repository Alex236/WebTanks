import { Bullet } from "../Models/Bullet"
import { Bullets } from "../Models/Bullets"
import { BulletMove } from "../Models/enums/BulletMove";
import { BlockType } from "../Models/enums/BlockType";
import { Coordinates } from "../Models/Coordinates";
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
                if(bullet.getCoordinates().getY() - Parameters.bulletSpeed >= 0) {
                    bullet.getCoordinates().setY(bullet.getCoordinates().getY() - Parameters.bulletSpeed);
                }
                break;
            case BulletMove.down:
                if(bullet.getCoordinates().getY() + Parameters.bulletSpeed < Parameters.fieldHeight) {
                    bullet.getCoordinates().setY(bullet.getCoordinates().getY() + Parameters.bulletSpeed);
                }
                break;
            case BulletMove.left:
                if(bullet.getCoordinates().getX() - Parameters.bulletSpeed >= 0) {
                    bullet.getCoordinates().setX(bullet.getCoordinates().getX() - Parameters.bulletSpeed);
                }
                break;
            case BulletMove.right:
                if(bullet.getCoordinates().getX() + Parameters.bulletSpeed < Parameters.fieldWidth) {
                    bullet.getCoordinates().setX(bullet.getCoordinates().getX() + Parameters.bulletSpeed);
                }
                break;
        }
    }
}