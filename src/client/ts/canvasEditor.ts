namespace WebTanks {
    export class canvasEditor {
        private canvas: HTMLCanvasElement;
        private context: CanvasRenderingContext2D;
        private height: number = window.innerHeight;
        private width: number = window.innerWidth;

        constructor() {
            this.canvas = <HTMLCanvasElement>document.getElementById("webTanks");
            this.canvas.width = this.width;
		    this.canvas.height = this.height;
            this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
        }
    }
}