import { BulletMove } from "./enums/BulletMove";
import { Coordinates } from "./Coordinates";

export class Bullet {
    private coordinates: Coordinates;
    private bulletMove: BulletMove;

    constructor(coordinates: Coordinates, bulletMove: BulletMove) {
        this.coordinates = coordinates;
        this.bulletMove = bulletMove;
    }

    public getCoordinates(): Coordinates {
        return this.coordinates;
    }

    public getMove(): BulletMove {
        return this.bulletMove;
    } 
}