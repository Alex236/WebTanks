import { DrawingElements } from "../DrawingElements";

export class Base extends DrawingElements{
    private x: number;
    private y: number;
    private img: HTMLImageElement = document.createElement("img");
    constructor(xCoord: number, yCoord: number){
        super();
        this.x = xCoord;
        this.y = yCoord;
    }
    draw(){
        this.img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550860699/TanksAsserts/flag_ukraine_36335.png";
        this.ctx.drawImage(this.img, this.x * 4 * this.cellSizeWidth, this.y * 4 * this.cellSizeHeight, this.cellSizeWidth * 4, this.cellSizeHeight * 4);
    }
}