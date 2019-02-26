///<reference path="./enums/BlockType.ts" />

class MyMap
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