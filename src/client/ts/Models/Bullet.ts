import { BulletMove } from "./enums/BulletMove";

export class Bullet {
    public x: number;
    public y: number;
    private bulletMove: BulletMove;

    constructor(x: number, y: number, bulletMove: BulletMove) {
        this.x = x;
        this.y = y;
        this.bulletMove = bulletMove;
    }

    public getMove(): BulletMove {
        return this.bulletMove;
    }
}