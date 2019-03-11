import { BlockType } from "../../models/block-type";
import { Block } from "../block";

export class Grass implements Block {
    public getType = () => BlockType.Grass;
    public getExterminable = () => false;
    public getPassable = () => true;
    public getSweep = () => true;
}