///<reference path="./enums/BlockType.ts" />
///<reference path="../Parameters.ts" />

class MapToGamingField {
    static convertor(map: BlockType[][]): BlockType[][] {
        let field = new Array();

        for (let i: number = 0; i < MyParameters.mapHeight; i++)
        {
            for (let iField = 0; iField < MyParameters.coeficientOfFfieldForMap; iField++)
            {
                field[i*MyParameters.coeficientOfFfieldForMap+iField] = new Array();
                for (let j: number = 0; j < MyParameters.mapHeight; j++)
                {
                    for (let jField = 0; jField < MyParameters.coeficientOfFfieldForMap; jField++)
                    {
                        field[i * MyParameters.coeficientOfFfieldForMap + iField][j * MyParameters.coeficientOfFfieldForMap + jField]
                        = map[i][j];
                    }
                }
            }
        }

        return field;
    }
}