export class Grid {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  height: number = window.innerHeight;
  width: number = window.innerWidth - 250;
  cellSizeWidth: number = this.width / 52;
  cellSizeHeight: number = this.height / 52;
  emptyMap: number[][] = this.getEmptyMap();

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };

  getEmptyMap() {
    var arr = new Array(13)
    for (var i = 0; i < 13; i++) {
      arr[i] = new Array(13)
      for (var j = 0; j < 13; j++) {
        arr[i][j] = 0;
      }
    }
    return arr
  }

  drawBase(x: number, y: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550860699/TanksAsserts/flag_ukraine_36335.png";
    this.ctx.drawImage(img, (x * 4 * this.cellSizeWidth), (y * 4 * this.cellSizeHeight), this.cellSizeWidth * 4, this.cellSizeHeight * 4);
  };

  drawTank(x: number, y: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550838091/TanksAsserts/tank_sand.png";
    this.ctx.drawImage(img, x, y, this.cellSizeWidth * 4, this.cellSizeHeight * 4);
  };

  DrawBrick(x: number, y: number, smallx: number, smally: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848759/TanksAsserts/crateWood.png";
    this.ctx.drawImage(img, (x * this.cellSizeWidth + smallx * this.cellSizeWidth), (y * this.cellSizeHeight + smally * this.cellSizeHeight), this.cellSizeWidth + 1, this.cellSizeHeight + 1);
  };

  DrawHardBrick(x: number, y: number, smallx: number, smally: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848848/TanksAsserts/crateMetal.png";
    this.ctx.drawImage(img, (x * this.cellSizeWidth + smallx * this.cellSizeWidth), (y * this.cellSizeHeight + smally * this.cellSizeHeight), this.cellSizeWidth + 1, this.cellSizeHeight + 1);
  };

  DrawGreen(x: number, y: number, smallx: number, smally: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550849482/TanksAsserts/favicon-6.ico";
    this.ctx.drawImage(img, (x * this.cellSizeWidth + smallx * this.cellSizeWidth), (y * this.cellSizeHeight + smally * this.cellSizeHeight), this.cellSizeWidth, this.cellSizeHeight);
  };

  DrawRoad(x: number, y: number, smallx: number, smally: number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550844835/TanksAsserts/Road.png";
    this.ctx.drawImage(img, (x * this.cellSizeWidth + smallx * this.cellSizeWidth), (y * this.cellSizeHeight + smally * this.cellSizeHeight), this.cellSizeWidth + 1, this.cellSizeHeight + 1);
  };

  drawGrid(map: number[][][][]) {

    for (var j = 0; j < 13; j++) {
      for (var i = 0; i < 13; i++) {

        for (var smallj = 0; smallj < 4; smallj++) {
          for (var smalli = 0; smalli < 4; smalli++) {

            switch (map[j][i][smallj][smalli]) {
              case 0:
                this.DrawRoad(i * 4, j * 4, smalli, smallj);
                break;
              case 1:
                this.DrawBrick(i * 4, j * 4, smalli, smallj);
                break;
              case 2:
                this.DrawHardBrick(i * 4, j * 4, smalli, smallj);
                break;
              case 3:
                this.DrawRoad(i * 4, j * 4, smalli, smallj);
                this.DrawGreen(i * 4, j * 4, smalli, smallj);
                break;
            }
          }
        }
      }
    }
  }
}
