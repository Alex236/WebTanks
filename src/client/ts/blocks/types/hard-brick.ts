import { BlockType } from "../../models/block-type";
import { Block } from "../block";

export class HardBrick implements Block {
    public getType = () => BlockType.Brick;
    public getExterminable = () => true;
    public getPassable = () => false;
    public getSweep = () => false;
}