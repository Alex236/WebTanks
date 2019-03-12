import { Vector } from "./vector";
import { Item } from "./item";
import { Sound } from "../view/sound";

export class Bullet extends Item {
    public readonly vector: Vector;
    private sound: Sound = new Sound();

    constructor(x: number, y: number, vector: Vector) {
        super();
        this.x = x;
        this.y = y;
        this.vector = vector;
        this.sound.run("fire");
    }
}