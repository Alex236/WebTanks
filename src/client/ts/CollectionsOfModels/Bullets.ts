import { Bullet } from '../Models/Bullet';

export class Bullets {
    private bullets: Bullet[] = [];

    public getListOfBullets(): Bullet[] {
        return this.bullets;
    }

    public addBullet(bullet: Bullet) {
        this.bullets.push(bullet);
    }

    public deleteBullet(bullet: Bullet) {
        for(let i: number = 0; i < this.bullets.length; i++) {
            if(this.bullets[i].getCoordinates().getX() == bullet.getCoordinates().getX() && this.bullets[i].getCoordinates().getY() == bullet.getCoordinates().getY()) {
                this.bullets.splice(i, 1);
                break;
            }
        }
    }
}