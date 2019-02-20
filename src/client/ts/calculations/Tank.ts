namespace Calculations
{
    export class Tank
    {
        private user: string;
        private coordinates: Coordinates;
        private tankType: TankType;
        private tankMove: TankMove;

        constructor(user: string, coordinates: Coordinates, tankType: TankType, tankMove: TankMove)
        {
            this.user = user;
            this.coordinates = coordinates;
            this.tankType = tankType;
            this.tankMove = tankMove;
        }

        public getMove(): TankMove
        {
            return this.tankMove;
        }

        public getType(): TankType
        {
            return this.tankType;
        }

        public getCoordinates(): Coordinates
        {
            return this.coordinates;
        }

        public setCoordinates(coordinates: Coordinates): void
        {
            this.coordinates = coordinates;
        }

        public setMove(tankMove: TankMove): void
        {
            this.tankMove = tankMove;
        }
    }
}