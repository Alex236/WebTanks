namespace Calculations
{
    export class Bullet
    {
        private coordinates: Coordinates;
        private bulletMove: BulletMove;

        constructor(coordinates: Coordinates, bulletMove: BulletMove)
        {
            this.coordinates = coordinates;
            this.bulletMove = bulletMove;
        }

        public getCoordinates(): Coordinates
        {
            return this.coordinates;
        }
    }
}