import { TankMove } from '../Models/enums/TankMove';
import { TankType } from '../Models/enums/TankType';
import { Coordinates } from './Coordinates';

export class Tank {
    private coordinates: Coordinates;
    private tankType: TankType;
    private tankMove: TankMove;

    constructor(coordinates: Coordinates, tankType: TankType, tankMove: TankMove) {
        this.coordinates = coordinates;
        this.tankType = tankType;
        this.tankMove = tankMove;
    }

    public getMove(): TankMove {
        return this.tankMove;
    }

    public getType(): TankType {
        return this.tankType;
    }

    public getTankCoordinates(): Coordinates {
        return this.coordinates;
    }

    public setTankCoordinates(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }

    public setMove(tankMove: TankMove) {
        this.tankMove = tankMove;
    }
}
