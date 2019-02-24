export class Coordinates {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public get X(): number {
        return this.x;
    }

    public get Y(): number {
        return this.y;
    }

    public set X(x: number) {
        this.x = x;
    }

    public set Y(y: number) {
        this.y = y;
    }
}