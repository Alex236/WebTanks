import { Vector } from "./enums/Vector";
import { Item } from "./Item";

export class Bullet extends Item {
    public readonly vector: Vector;

    constructor(x: number, y: number, vector: Vector) {
        super();
        this.x = x;
        this.y = y;
        this.vector = vector;
    }
}