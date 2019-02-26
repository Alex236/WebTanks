import { BlockType } from "./enums/BlockType";

export class Map
{
    private static loadedMap: BlockType[][] = [
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
    ];

    public static get map(): BlockType[][]
    {
        return this.loadedMap;
    }
}