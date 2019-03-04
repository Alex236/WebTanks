import { BlockType } from "../Models/enums/BlockType";
import { Parameters } from "../Parameters";
import { Tank } from "../Models/Tank";
import { Bullet } from "../Models/Bullet";

export class FieldProcessor {
    private field: BlockType[][];
    private tanks: Tank[];
    private bullets: Bullet[];

    constructor(field: BlockType[][], tanks: Tank[], bullets: Bullet[]) {
        this.field = field;
        this.tanks = tanks;
        this.bullets = bullets;
    }

    public clearMap() {
        for(let i: number = 0; i < Parameters.fieldHeight; i++) {
            for(let j: number = 0; j < Parameters.fieldWidth; j++) {
                if(this.field[i][j] == BlockType.tank || this.field[i][j] == BlockType.bullet) {
                    this.field[i][j] = BlockType.road;
                }
            }
        }
    }

    public setTanksOnMap() {
        for(let tanksNumber: number = 0; tanksNumber < this.tanks.length; tanksNumber++) {
            for(let i: number = 0; i < Parameters.tankSize; i++) {
                for(let j: number = 0; j < Parameters.tankSize; j++) {
                    this.field[i + this.tanks[tanksNumber].y][j + this.tanks[tanksNumber].x] = BlockType.tank;
                }
            }
        }
    }

    public setBulletsOnMap() {
        for(let bulletsNumber: number = 0; bulletsNumber < this.bullets.length; bulletsNumber++) {
            for(let i: number = 0; i < Parameters.bulletSize; i++) {
                for(let j: number = 0; j < Parameters.bulletSize; j++) {
                    this.field[i + this.bullets[bulletsNumber].y][j + this.bullets[bulletsNumber].x] = BlockType.bullet;
                }
            }
        }
    }
}