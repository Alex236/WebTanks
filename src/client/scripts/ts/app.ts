/// <reference path="view/gridView.ts" />
/// <reference path="view/Rounds.ts"/>
let rounds = new Rounds();
let rOne = rounds.roundOne;
let tanksCoord = new Array(0,0)
let position = "down"

document.addEventListener('keydown', function (event) {
  switch(event.keyCode) {
      case(87):
        tanksCoord[1] = tanksCoord[1] - 1;
        position = "up"
        break;
      case(68):
        tanksCoord[0] = tanksCoord[0] + 1;
        position = "right"
        break;
      case(83):
        tanksCoord[1] = tanksCoord[1] + 1;
        position = "down"
        break;
      case(65):
        tanksCoord[0] = tanksCoord[0] - 1;
        position = "left"
        break;
  }
});

let myGrid = new gridView.Grid();
var x = 0;
setInterval(function(){ 
  myGrid.drawGrid(rOne);
  myGrid.drawBase(6,12);
  myGrid.drawTank(x,tanksCoord[0],tanksCoord[1],position);
  x++;
}, 100);

/*
class Timer {
constructor(public counter = 10000) {
    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;

      let myGrid = new gridView.Grid()
      myGrid.drawGrid(roundOne);
      myGrid.drawBase(6,12);
      myGrid.drawTank(tanksCoord[0],tanksCoord[1]);
          
      if(this.counter === 0) clearInterval(intervalId)
    }, 300)
}
};
  let timer = new Timer();s
*/