import { Grid } from "./view/GridView";
import { Rounds } from "./view/Rounds";
let rounds = new Rounds();
let rOne = rounds.roundOne;
let tanksCoord = new Array(0,0)
let position = "down"

document.addEventListener('keydown', function (event) {
  switch(event.keyCode) {
      case(38):
        tanksCoord[0] = tanksCoord[0] - 1;
        position = "up"
        break;
      case(39):
        tanksCoord[1] = tanksCoord[1] + 1;
        position = "right"
        break;
      case(40):
        tanksCoord[0] = tanksCoord[0] + 1;
        position = "down"
        break;
      case(37):
        tanksCoord[1] = tanksCoord[1] - 1;
        position = "left"
        break;
  }
});

let myGrid = new Grid();
var x = 0;
setInterval(function(){ 
  myGrid.drawGrid(rOne);
  myGrid.drawBase(6,12);
  myGrid.drawTank(x,tanksCoord[1],tanksCoord[0],position);
  x++;
}, 100);