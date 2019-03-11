import { BlockType } from "../../models/block-type";
import { Block } from "../block";

export class Road implements Block {
    public getType = () => BlockType.Brick;
    public getExterminable = () => false;
    public getPassable = () => true;
    public getSweep = () => true;
}