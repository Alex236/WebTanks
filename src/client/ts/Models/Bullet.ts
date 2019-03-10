import { Vector } from "./vector";
import { Item } from "./item";

export class Bullet extends Item {
    public readonly vector: Vector;

    constructor(x: number, y: number, vector: Vector) {
        var sound = new Audio(require("../../assets/fire.mp3"));
        sound.play();

        super();
        this.x = x;
        this.y = y;
        this.vector = vector;
    }
}