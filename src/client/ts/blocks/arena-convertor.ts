import { BlockType } from "../models/block-type";
import { Block } from "./block";
import { Parameters } from "../parameters";
import { Road } from "./types/road";
import { Brick } from "./types/brick";
import { HardBrick } from "./types/hard-brick";
import { Grass } from "./types/grass";
import { Water } from "./types/water";

export class ArenaConvertor {
    public static convert(arena: BlockType[][]): Block[][] {
        let result: Block[][] = new Array();
        for (let i: number = 0; i < Parameters.fieldHeight; i++) {
            result[i] = new Array();
        }
        for (let i: number = 0; i < Parameters.fieldHeight; i++) {
            for (let j: number = 0; j < Parameters.fieldWidth; j++) {
                switch (arena[i][j]) {
                    case BlockType.Road:
                        result[i][j] = new Road();
                        break;
                    case BlockType.Brick:
                        result[i][j] = new Brick()
                        break;
                    case BlockType.HardBrick:
                        result[i][j] = new HardBrick()
                        break;
                    case BlockType.Grass:
                        result[i][j] = new Grass();
                        break;
                    case BlockType.Water:
                        result[i][j] = new Water();
                        break;
                }
            }
        }
        return result;
    }
}