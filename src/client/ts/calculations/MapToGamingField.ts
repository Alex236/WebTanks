import { BlockType } from "./enums/BlockType";
import { Parameters } from "../Parameters";

export class MapToGamingField {
    static convertor(map: BlockType[][]): BlockType[][] {
        let field = new Array();

        for (let i: number = 0; i < Parameters.mapHeight; i++)
        {
            for (let iField = 0; iField < Parameters.coeficientOfFfieldForMap; iField++)
            {
                field[i*Parameters.coeficientOfFfieldForMap+iField] = new Array();
                for (let j: number = 0; j < Parameters.mapHeight; j++)
                {
                    for (let jField = 0; jField < Parameters.coeficientOfFfieldForMap; jField++)
                    {
                        field[i * Parameters.coeficientOfFfieldForMap + iField][j * Parameters.coeficientOfFfieldForMap + jField]
                        = map[i][j];
                    }
                }
            }
        }

        return field;
    }
}