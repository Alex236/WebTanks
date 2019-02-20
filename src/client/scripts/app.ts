//**********************
//**********************
class Grid{
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  height: number = window.innerHeight
  width: number = window.innerWidth-250;
  cellSizeWidth: number = this.width/52;
  cellSizeHeight: number = this.height/52;
  emptyMap:number[][] = this.getEmptyMap();
  
  constructor(){
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = this.canvas.getContext("2d");
  };
  
  getEmptyMap(){
    var arr = new Array(13)
    for(var i=0;i<13;i++){
      arr[i] = new Array(13)
        for(var j=0;j<13;j++){
          arr[i][j] = 0;
        }
    }
    return arr
  }
  
DrawBrick(x: number, y:number, smallx:number, smally:number) {
  this.ctx.fillStyle = '#FFA500';
  this.ctx.fillRect(( x*this.cellSizeWidth + smallx*this.cellSizeWidth), (y*this.cellSizeHeight + smally*this.cellSizeHeight), this.cellSizeWidth, this.cellSizeHeight);
  console.log((x*this.cellSizeWidth + smallx*this.cellSizeWidth) + " x; " + (y*this.cellSizeHeight + smally*this.cellSizeHeight) + " y; " + smallx +" smallx; " + smally + " smally; ");
  };
  
  DrawHardBrick(x: number, y:number, smallx:number, smally:number) {
    this.ctx.fillStyle = '#9d9d9d';
    this.ctx.fillRect(( x*this.cellSizeWidth + smallx*this.cellSizeWidth), (y*this.cellSizeHeight + smally*this.cellSizeHeight), this.cellSizeWidth, this.cellSizeHeight);
  console.log((x*this.cellSizeWidth + smallx*this.cellSizeWidth) + " x; " + (y*this.cellSizeHeight + smally*this.cellSizeHeight) + " y; " + smallx +" smallx; " + smally + " smally; ");
  };
  
  drawGrid(map: number[][]){
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, 52 * this.cellSizeWidth, 52 * this.cellSizeHeight)
    
    for (var j = 0; j < 13; j++){
      for (var i = 0; i < 13; i++) {

        for (var smallj = 0; smallj < 4; smallj++){
          for (var smalli = 0; smalli < 4; smalli++) {
            
            switch (map[j][i][smallj][smalli]) {
              case 1:
                  this.DrawBrick(i*4, j*4, smalli, smallj);
                  break;
 
              case 2:
                  this.DrawHardBrick(i*4, j*4, smalli, smallj);
                  break;
            }
          }
        }
      }
    }
  } 
}

//**********************
//**********************
class GridElements{
  blockRoad:number[][] = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ]
  blockBrick:number[][] = [
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]
  ]

  blockHardBrick:number[][] = [
    [2,2,2,2],
    [2,2,2,2],
    [2,2,2,2],
    [2,2,2,2]
  ]
}
//**********************
//**********************
class Rounds{
roundOne:number[][] = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,0,1,0,1,1,1,0,1,1,1],
  [1,0,0,0,1,0,1,0,0,0,0,1,0],
  [1,0,0,0,1,0,1,0,0,0,0,1,0],
  [1,1,0,2,1,2,0,1,0,2,0,1,0],
  [1,0,0,0,1,0,0,0,1,0,0,1,0],
  [1,0,0,0,1,0,0,0,1,0,0,1,0],
  [1,0,0,0,1,0,1,1,1,0,0,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,0,0,0,0,0]
]
}
  
  let roundOne = new Rounds().roundOne;
  let elementsOfGrid = new GridElements();

for(var i: number = 0; i < 13; i++) {
  for(var j: number = 0; j< 13; j++) {
    switch(roundOne[i][j]){
      case 0: roundOne[i][j] = elementsOfGrid.blockRoad;
          break;
        case 1: roundOne[i][j] = elementsOfGrid.blockBrick;
          break;
        case 2: roundOne[i][j] = elementsOfGrid.blockHardBrick;
          break;
    }
  }
}


  let myGrid = new Grid()
    myGrid.drawGrid(roundOne)

  console.log(roundOne);

/*
class Timer {
  constructor(public counter = 90) {

        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            
          let myGrid = new Grid()
          myGrid.drawGrid(wholeMap)
          
          wholeMap[0][0] = blockRoad;
          
          
            if(this.counter === 0) clearInterval(intervalId)
        }, 1000)
    }
}

  let timer = new Timer();
 */
 