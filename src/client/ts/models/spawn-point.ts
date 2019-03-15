import { Directoin } from "./direction";

export class SpawnPoint {
    public currentX: number;
    public currentY: number;
    public vector: Directoin;

    constructor(x: number, y: number, vector: Directoin) {
        this.currentX = x;
        this.currentY = y;
        this.vector = vector;
    }
}