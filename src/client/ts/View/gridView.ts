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
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  };
  
  drawBase(x:number, y:number){
    let img = document.createElement("img")
    img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550860699/TanksAsserts/flag_ukraine_36335.png";
    this.ctx.drawImage(img,( x*4*this.cellSizeWidth), (y*4*this.cellSizeHeight), this.cellSizeWidth*4, this.cellSizeHeight*4);
  };
  drawTankImageOne(x:number, y:number, position:string){
    let tank = document.createElement("img")
    switch(position){
      case "down":
      tank.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1551004169/TanksAsserts/tankOne.ico";
      break;
      case "up":
      tank.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551004169/TanksAsserts/tankOne.ico";
      break;
      case "right":
      tank.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551004169/TanksAsserts/tankOne.ico";
      break;
      case "left":
      tank.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551004169/TanksAsserts/tankOne.ico";
      break;

    }
    this.ctx.drawImage(tank, x*this.cellSizeWidth, y*this.cellSizeHeight, this.cellSizeWidth*4, this.cellSizeHeight*4);
  };

  drawTankImageTwo(x:number, y:number, position:string){
    let tank = document.createElement("img")
    switch(position){
      case "down":
      tank.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1551004169/TanksAsserts/tankTwo.ico";
      break;
      case "up":
      tank.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_180/v1551004169/TanksAsserts/tankTwo.ico";
      break;
      case "right":
      tank.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_270/v1551004169/TanksAsserts/tankTwo.ico";
      break;
      case "left":
      tank.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/a_90/v1551004169/TanksAsserts/tankTwo.ico";
      break;

    }
    this.ctx.drawImage(tank, x*this.cellSizeWidth, y*this.cellSizeHeight, this.cellSizeWidth*4, this.cellSizeHeight*4);
  };

  drawTank(i:number, x:number, y:number, position:string){
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.save();

    if(i%2==0){
        this.drawTankImageOne(x,y,position)
    }else if (position){
        this.drawTankImageTwo(x,y,position);
    }
    this.ctx.restore();
    //window.requestAnimationFrame(function(){this.drawTank(i, x, y)});
  }

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