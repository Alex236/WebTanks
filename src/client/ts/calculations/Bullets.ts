import { Bullet } from './Bullet';

export class Bullets {
    private bullets: Bullet[] = [];

    public get ListOfBullets(): Bullet[] {
        return this.bullets;
    }
}