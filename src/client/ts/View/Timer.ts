import { Grid } from './Grid';
import { Rounds} from './Rounds';

export class Timer {
  constructor(public counter = 100) {

    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;

      let myGrid = new Grid();
      myGrid.drawGrid(Rounds.roundOne);
      myGrid.drawBase(6, 12);
      //myGrid.drawTank(tanksCoord[0], tanksCoord[1]);


      if (this.counter === 0) clearInterval(intervalId)
    }, 100)
  }
}
