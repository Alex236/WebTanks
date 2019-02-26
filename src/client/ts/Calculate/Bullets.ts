import { Bullet } from './Bullet';

export class Bullets {
    private bullets: Bullet[] = [];

    public getListOfBullets(): Bullet[] {
        return this.bullets;
    }
}