import { BlockType } from "./enums/BlockType";
import { Parameters } from "../Parameters";
import { Tank } from "./Tank";
import { Bullet } from "./Bullet";

export class FieldProcessor {
    public clearMap(field: BlockType[][]) {
        for(let i: number = 0; i < Parameters.mapHeight; i++) {
            for(let j: number = 0; j < Parameters.mapWidth; j++) {
                if(field[i][j] == BlockType.tank) {
                    field[i][j] = BlockType.road;
                }
            }
        }
    }

    public setTanksOnMap(field: BlockType[][], tanks: Tank[]) {
        for(let tanksNumber: number = 0; tanksNumber < tanks.length; tanksNumber++) {
            for(let i: number = 0; i < Parameters.tankSize; i++) {
                for(let j: number = 0; j < Parameters.tankSize; j++) {
                    field[i + tanks[tanksNumber].getTankCoordinates().getY()][j + tanks[tanksNumber].getTankCoordinates().getX()] = BlockType.tank;
                }
            }
        }
    }

    public setBulletsOnMap(field: BlockType[][], bullets: Bullet[]) {
        for(let bulletsNumber: number = 0; bulletsNumber < bullets.length; bulletsNumber++) {
            for(let i: number = 0; i < Parameters.bulletSize; i++) {
                for(let j: number = 0; j < Parameters.tankSize; j++) {
                    field[i + bullets[bulletsNumber].getCoordinates().getY()][j + bullets[bulletsNumber].getCoordinates().getX()] = BlockType.bullet;
                }
            }
        }
    }
}