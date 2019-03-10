import { Vector } from './vector';
import { TankType } from './tank-type';
import { Item } from './item';
import { Parameters } from '../Parameters';

export class Tank extends Item {
    public readonly type: TankType;
    public vector: Vector;
    public move: boolean = false;
    public shoot: boolean = false;
    public readonly spawnPointX: number;
    public readonly spawnPointY: number;
    public readonly spawnVector: Vector;
    public lifes: number = Parameters.playerLifes;

    constructor(type: TankType, spawnPointX: number, spawnPointY: number, spawnVector: Vector) {
        super();
        this.type = type;
        this.x = spawnPointX;
        this.y = spawnPointY;
        this.vector = spawnVector;
        this.spawnPointX = spawnPointX;
        this.spawnPointY = spawnPointY;
        this.spawnVector = spawnVector;
    }
}
