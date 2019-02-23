import { TankMove } from './enums/TankMove';
import { TankType } from './enums/TankType';

export class Tank {
    private user: string;
    private coordinates: Coordinates;
    private tankType: TankType;
    private tankMove: TankMove;

    constructor(user: string, coordinates: Coordinates, tankType: TankType, tankMove: TankMove) {
        this.user = user;
        this.coordinates = coordinates;
        this.tankType = tankType;
        this.tankMove = tankMove;
    }

    public get move(): TankMove {
        return this.tankMove;
    }

    public get type(): TankType {
        return this.tankType;
    }

    public get tankCoordinates(): Coordinates {
        return this.coordinates;
    }

    public set tankCoordinates(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }

    public set move(tankMove: TankMove) {
        this.tankMove = tankMove;
    }
}
