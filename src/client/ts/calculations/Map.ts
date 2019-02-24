import { BlockType } from "./enums/BlockType";

export class Map
{
    private loadedMap: BlockType[][];

    constructor()
    {
        this.loadedMap = [
            [BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.road, BlockType.road, BlockType.road, BlockType.road, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.road, BlockType.road, BlockType.road, BlockType.road, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.road, BlockType.road, BlockType.road, BlockType.road, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.road, BlockType.road, BlockType.road, BlockType.road, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
            [BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick, BlockType.brick],
        ]
    }

    public get map(): BlockType[][]
    {
        return this.loadedMap;
    }
}