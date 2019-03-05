import { BulletMove } from "./enums/BulletMove";
import { Item } from "./Item";

export class Bullet extends Item {
    private bulletMove: BulletMove;

    constructor(x: number, y: number, bulletMove: BulletMove) {
        super();
        this.x = x;
        this.y = y;
        this.bulletMove = bulletMove;
    }

    public getMove(): BulletMove {
        return this.bulletMove;
    }
}