import { Grid } from "./GridView";
import { User } from "../Calculate/User";
import { Bullet } from "../Calculate/Bullet";

export class Draw{
    private myGrid: Grid = new Grid();

    public run(map: number[][], allUsers: User[]){
        this.myGrid.drawGrid(map);
        this.myGrid.drawBase(6,12);

        this.myGrid.drawAllTanks(allUsers);
        //myGrid.drawAllBullets(allBullets);
    }

}
