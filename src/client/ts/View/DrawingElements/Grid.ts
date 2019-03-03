import { DrawingElements } from "../DrawingElements";

export class Grid extends DrawingElements{
  private img: HTMLImageElement = document.createElement("img");

    drawBrick(x: number, y: number) {
        this.img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848759/TanksAsserts/crateWood.png";
        this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
      };
    
      drawHardBrick(x: number, y: number) {
        this.img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848848/TanksAsserts/crateMetal.png";
        this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
      };
    
      drawGreen(x: number, y: number) {
        this.img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550849482/TanksAsserts/favicon-6.ico";
        this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
      };
    
      drawRoad(x: number, y: number) {
        this.img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550844835/TanksAsserts/Road.png";
        this.ctx.drawImage(this.img, x * this.cellSizeWidth, y * this.cellSizeHeight, this.cellSizeWidth + 1, this.cellSizeHeight + 1);
      };
    
      draw(map: number[][]) {
        for (var j = 0; j < 52; j++) {
          for (var i = 0; i < 52; i++) {
            switch (map[j][i]) {
              case 0:
                this.drawRoad(i, j);
                break;
              case 1:
                this.drawBrick(i, j);
                break;
              case 2:
                this.drawHardBrick(i, j);
                break;
              case 3:
                this.drawRoad(i, j);
                this.drawGreen(i, j);
                break;
            }
          }
        };
      };
}
