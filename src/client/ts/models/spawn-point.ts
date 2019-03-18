import { Directoin } from "./direction";

export class SpawnPoint {
    public x: number;
    public y: number;
    public direction: Directoin;

    constructor(x: number, y: number, direction: Directoin) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}