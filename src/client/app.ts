class Grid{
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  height: number = window.innerHeight
  width: number = window.innerWidth;
  
  constructor(){
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = this.canvas.getContext("2d");
  };
  
  drawPole(){
    this.ctx.fillStyle = "rgb(200,0,0)" 
    //this.ctx.fillRect(10, 10, 55, 50)
    var img = new Image()
    this.ctx.drawImage(img, 0, 0, this.width, this.height)
    img.src = './asserts/bullets/bulletDark1_outline.png'
  }


}

var mapK = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]

  let map = new Map(mapK);
  let myGrid = new Grid();

  myGrid.drawPole();
  
  console.log("after all");




enum fieldElement{
        Road = './asserts/bullets/bulletDark1_outline.png',
        Wall = './asserts/blocks/crateWood.png',
    }

declare class Map{
  public val;
  constructor(val: number[][]);
}
