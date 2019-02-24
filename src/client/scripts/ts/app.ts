/// <reference path="view/gridView.ts" />
/// <reference path="view/Rounds.ts"/>
let rounds = new Rounds();
let rOne = rounds.roundOne;
let tanksCoord = new Array(0,0)

document.addEventListener('keydown', function (event) {
    switch(event.keyCode) {
        case(87):
          tanksCoord[1] = tanksCoord[1] - 1;
          break;
        case(68):
          tanksCoord[0] = tanksCoord[0] + 1;
          break;
        case(83):
          tanksCoord[1] = tanksCoord[1] + 1;
          break;
        case(65):
          tanksCoord[0] = tanksCoord[0] - 1;
          break;
    }
});

let myGrid = new gridView.Grid()
myGrid.drawGrid(rOne);
myGrid.drawBase(6,12);

var x = 0;
setInterval(function(){ 
  myGrid.drawTank(x,tanksCoord[0],tanksCoord[1]);
  x++;
}, 100);
/*
  class Timer {
  constructor(public counter = 10000) {

        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            
  //let myGrid = new gridView.Grid()
//myGrid.drawGrid(roundOne);
          //myGrid.drawBase(6,12);
          //myGrid.drawTank(tanksCoord[0],tanksCoord[1]);
          
            if(this.counter === 0) clearInterval(intervalId)
        }, 300)
    }
}

  let timer = new Timer();s
  */