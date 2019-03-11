import { BlockType } from "../models/block-type";

export interface Block {
    getType(): BlockType;
    getExterminable(): boolean;
    getPassable(): boolean;
    getSweep(): boolean;
}