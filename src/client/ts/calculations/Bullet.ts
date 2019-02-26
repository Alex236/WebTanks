///<reference path="./enums/BulletMove.ts"/>

class Bullet {
    private coordinates: Coordinates;
    private bulletMove: BulletMove;

    constructor(coordinates: Coordinates, bulletMove: BulletMove) {
        this.coordinates = coordinates;
        this.bulletMove = bulletMove;
    }

    public get bulletCoordinates(): Coordinates {
        return this.coordinates;
    }
}