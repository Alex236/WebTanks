export class Grid {
    public canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("grid");;
    public ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.canvas.getContext("2d", { alpha: true });

    private totalWidth: number = parent.innerWidth;
    private totalHeight: number = parent.innerHeight;
    private arenaSize: number = this.totalHeight <= this.totalWidth ? this.totalHeight : this.totalWidth;
    readonly cellSize: number = this.arenaSize / 52;

    constructor(){
        this.canvas.width = this.totalWidth;
        this.canvas.height = this.totalHeight;
    };
}