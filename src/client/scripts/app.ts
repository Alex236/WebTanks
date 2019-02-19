class Grid{
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  height: number = window.innerHeight
  width: number = window.innerWidth-300;
  cellSizeWidth: number = this.width/136;
  cellSizeHeight: number = this.height/136;
  
  constructor(){
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = this.canvas.getContext("2d");
  };
  
DrawBrick(x: number, y:number, smallx:number, smally:number) {
    this.ctx.fillStyle = '#FFA500';
  this.ctx.fillRect(( x*this.cellSizeWidth + smallx*this.cellSizeWidth), (y*this.cellSizeHeight + smally*this.cellSizeHeight), this.cellSizeWidth, this.cellSizeHeight);
  console.log((x*this.cellSizeWidth + smallx*this.cellSizeWidth) + " x; " + (y*this.cellSizeHeight + smally*this.cellSizeHeight) + " y; " + smallx +" smallx; " + smally + " smally; ");
  };
  
  DrawHardBrick(x: number,y: number) {
    this.ctx.fillStyle = '#9d9d9d';
    this.ctx.fillRect(x, y, this.cellSizeWidth, this.cellSizeHeight);
  };
  
  drawGrid(map: number[][]){

    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, 136 * this.cellSizeWidth, 136 * this.cellSizeHeight)
    
    for (var j = 0; j < 17; j++){
      for (var i = 0; i < 17; i++) {

        for (var smallj = 0; smallj < 8; smallj++){
          for (var smalli = 0; smalli < 8; smalli++) {
            
            switch (map[j][i][smallj][smalli]) {
              case 1:
                  this.DrawBrick(j*8, i*8, smallj, smalli);
                  break;
 
              case 2:
                  this.DrawHardBrick(smallj * this.cellSizeWidth / 2 + this.cellSizeWidth, smalli * this.cellSizeHeight / 2 + this.cellSizeHeight);
                  break;
            }
          }
        }
      }
    }
  }
  
}

enum fieldElement{
        Road = './asserts/blocks/tileSand1.png',
        Wall = './asserts/blocks/crateWood.png',
    }

var blockRoad = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
]

var blockBrick = [
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1]
]

var blockHardBrick = [
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2]
]


var wholeMap = new Array(17);

for(var i: number = 0; i < 17; i++) {
  wholeMap[i] = [];
  for(var j: number = 0; j< 17; j++) {
    wholeMap[i][j] = blockRoad;
  }
}

wholeMap[0][0] = blockBrick;
wholeMap[1][0] = blockBrick;
wholeMap[10][10] = blockBrick;
wholeMap[15][15] = blockBrick;

wholeMap[16][16] = blockBrick;

  let myGrid = new Grid()
  myGrid.drawGrid(wholeMap)
  
/*
class Timer {
  constructor(public counter = 90) {

        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            
          let mapOne = new Map()
          let myGrid = new Grid()
          myGrid.drawGrid(emptyGrid)
          
          
            if(this.counter === 0) clearInterval(intervalId)
        }, 1000)
    }
}

  let timer = new Timer();
  
  */