import { Grid } from "./GridView";
import { User } from "../Models/User"
import { Bullet } from "../Models/Bullet";

export class Draw{
    private myGrid: Grid = new Grid();

    public run(map: number[][], allUsers: User[], allBullets: Bullet[]){
        this.myGrid.drawGrid(map);
        this.myGrid.drawBase(6,12);

        this.myGrid.drawAllTanks(allUsers);
        this.myGrid.drawAllBullets(allBullets);
    }

}
