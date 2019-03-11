import { BlockType } from "../../models/block-type";
import { Block } from "../block";

export class Water implements Block {
    public getType = () => BlockType.Brick;
    public getExterminable = () => false;
    public getPassable = () => false;
    public getSweep = () => true;
}