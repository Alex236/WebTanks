import { Tank } from "./models/tank";
import { Bullet } from "./models/bullet";
import { UnitType } from "./models/unit-type";
import { Directoin } from "./models/direction";
import { ItemType } from "./models/item-type";

export class BulletsFactory {
    public createBullet(tank: Tank): Bullet {
        let x: number = 0;
        let y: number = 0;
        switch (tank.direction) {
            case Directoin.Up:
            x = tank.x + 1;
            y = Math.round(tank.y);
                break;
            case Directoin.Down:
            x = tank.x + 1;
            y = Math.round(tank.y) + 2;
                break;
            case Directoin.Left:
            x = Math.round(tank.x);
            y = tank.y + 1;
                break;
            case Directoin.Right:
            x = Math.round(tank.x) + 2
            y = tank.y + 1;
                break;
        }
        let speed: number = 0;
        let damage: number = 0;
        switch (tank.bulletType) {
            case UnitType.FastBullet:
            speed = 2;
            damage = 50;
            break;
            case UnitType.SlowBullet:
            speed = 2;
            damage = 100;
            break;
        }
        return new Bullet(x, y, tank.bulletType, tank.direction, speed, damage, tank);
    }
}