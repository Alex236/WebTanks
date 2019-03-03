import { BlockType } from "../Models/enums/BlockType";
import { Parameters } from "../Parameters";
import { Users } from "../CollectionsOfModels/Users";
import { Bullets } from "../CollectionsOfModels/Bullets";

export class FieldProcessor {
    private field: BlockType[][];
    private users: Users;
    private bullets: Bullets;

    constructor(field: BlockType[][], users: Users, bullets: Bullets) {
        this.field = field;
        this.users = users;
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
        for(let tanksNumber: number = 0; tanksNumber < this.users.getListOfUsers().length; tanksNumber++) {
            for(let i: number = 0; i < Parameters.tankSize; i++) {
                for(let j: number = 0; j < Parameters.tankSize; j++) {
                    this.field[i + this.users.getListOfUsers()[tanksNumber].getTank().getTankCoordinates().getY()][j + this.users.getListOfUsers()[tanksNumber].getTank().getTankCoordinates().getX()] = BlockType.tank;
                }
            }
        }
    }

    public setBulletsOnMap() {
        for(let bulletsNumber: number = 0; bulletsNumber < this.bullets.getListOfBullets().length; bulletsNumber++) {
            for(let i: number = 0; i < Parameters.bulletSize; i++) {
                for(let j: number = 0; j < Parameters.bulletSize; j++) {
                    this.field[i + this.bullets.getListOfBullets()[bulletsNumber].getCoordinates().getY()][j + this.bullets.getListOfBullets()[bulletsNumber].getCoordinates().getX()] = BlockType.bullet;
                }
            }
        }
    }
}