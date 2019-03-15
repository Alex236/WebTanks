import { Route } from "./route";

export class SpawnPoint {
    public currentX: number;
    public currentY: number;
    public vector: Route;

    constructor(x: number, y: number, vector: Route) {
        this.currentX = x;
        this.currentY = y;
        this.vector = vector;
    }
}