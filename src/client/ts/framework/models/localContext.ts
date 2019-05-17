export class LocalContext{

    private ctx: CanvasRenderingContext2D;
    public x: number = 0;
    public y: number = 0;

    public fillStyle: string = "rgb(255,255,255)";
    public font: string = "30px Arial";
    public strokeStyle: string = "rgb(255,255,255)";

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }

    fillText(text: string, x: number, y: number){
        this.ctx.font = this.font;
        this.ctx.fillText(text, this.x + x, this.y + y);
    }

    fillRect(color: string, startX: number, startY: number, width: number, height: number){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x + startX, this.y + startY, width, height);
    }

    strokeRect(color: string, x: number, y: number, width: number, height: number){
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(this.x + x, this.y + y, width, height);
    }

    drawImage(image: string, x: number, y: number, width: number, height: number){
        let img = new Image();
        img.src = image;
        img.onload = () => {
            this.ctx.drawImage(img, this.x + x, this.y + y, width, height);
        }
    }

}