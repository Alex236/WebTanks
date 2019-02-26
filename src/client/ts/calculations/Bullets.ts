///<reference path="./Bullet.ts"/>

class Bullets {
    private bullets: Bullet[] = [];

    public get ListOfBullets(): Bullet[] {
        return this.bullets;
    }
}