import { Tank } from "./tank";
import { Bullet } from "./bullet";
import { UnitType } from "./unit-type";
import { Directoin } from "./direction";

export class BulletsFactory {
    private bullets: Bullet[];

    constructor(bullets: Bullet[]) {
        this.bullets = bullets;
    }

    public createBullet(tank: Tank) {
        let x: number = 0;
        let y: number = 0;
        switch (tank.vector) {
            case Directoin.Up:
            this.defineType(tank, tank.x + 1, Math.round(tank.y));
                break;
            case Directoin.Down:
            this.defineType(tank, tank.x + 1, Math.round(tank.y) + 2);
                break;
            case Directoin.Left:
            this.defineType(tank, Math.round(tank.x), tank.y + 1);
                break;
            case Directoin.Right:
            this.defineType(tank, Math.round(tank.x) + 2, tank.y + 1);
                break;
        }
    }

    private defineType(tank: Tank, x: number, y: number) {
        switch(tank.bulletType) {
            case UnitType.FastBullet:
            this.bullets.push(new Bullet(x, y, tank.bulletType, 3, false, false, true, 4, tank.vector, 50, tank));
            break;
            case UnitType.SlowBullet:
            this.bullets.push(new Bullet(x, y, tank.bulletType, 3, false, false, true, 3, tank.vector, 100, tank))
            break;
        }
    }
}