import { Bullet } from './Bullet';

export class Bullets {
    private bullets: Bullet[] = [];

    public getListOfBullets(): Bullet[] {
        return this.bullets;
    }

    public addBullet(bullet: Bullet) {
        this.bullets.push(bullet);
    }

    public deleteBullet() {

    }
}