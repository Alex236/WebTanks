module gridView{
  export class Grid{
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  height: number = window.innerHeight
  width: number = window.innerWidth-200;
  cellSizeWidth: number = this.width/52;
  cellSizeHeight: number = this.height/52;
  
  constructor(){
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = this.canvas.getContext("2d");
  };
  
  drawBase(x:number, y:number){
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550860699/TanksAsserts/flag_ukraine_36335.png";
    this.ctx.drawImage(img,( x*4*this.cellSizeWidth), (y*4*this.cellSizeHeight), this.cellSizeWidth*4, this.cellSizeHeight*4);
  };

drawTank(x:number, y:number){
    let tank = document.createElement("img")
    tank.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550945748/TanksAsserts/tankOneDown.ico";
    //tankTwo.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550945509/TanksAsserts/TankTwoDown.ico";
      this.ctx.drawImage(tank, x*this.cellSizeWidth, y*this.cellSizeHeight, this.cellSizeWidth*4, this.cellSizeHeight*4);
  };
  
  DrawBrick(x: number, y:number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848759/TanksAsserts/crateWood.png";
    this.ctx.drawImage(img,x*this.cellSizeWidth, y*this.cellSizeHeight, this.cellSizeWidth+1, this.cellSizeHeight+1);
  };
  
  DrawHardBrick(x: number, y:number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848848/TanksAsserts/crateMetal.png";
    this.ctx.drawImage(img,x*this.cellSizeWidth, y*this.cellSizeHeight, this.cellSizeWidth+1, this.cellSizeHeight+1);
  };

  DrawGreen(x: number, y:number) {
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550849482/TanksAsserts/favicon-6.ico";
    this.ctx.drawImage(img,x*this.cellSizeWidth, y*this.cellSizeHeight, this.cellSizeWidth+1, this.cellSizeHeight+1);
  };
  
    DrawRoad(x: number, y:number) {   
      let img = document.createElement("img")
      img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550844835/TanksAsserts/Road.png";
      this.ctx.drawImage(img, x*this.cellSizeWidth, y*this.cellSizeHeight, this.cellSizeWidth+1, this.cellSizeHeight+1);
    };
  
    drawGrid(map: number[][]){
      for (var j = 0; j < 52; j++){
        for (var i = 0; i < 52; i++) {  
          switch (map[j][i]) {
            case 0:
              this.DrawRoad(i, j);
              break;
            case 1:
              this.DrawBrick(i, j);
              break;
            case 2:
              this.DrawHardBrick(i, j);
              break;
            case 3:
              this.DrawRoad(i, j);
              this.DrawGreen(i, j);
              break;
          }
        }
      }
    }
  }
} 