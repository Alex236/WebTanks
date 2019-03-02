import { Grid } from "./GridView";
import { Users } from "../Models/Users";
import { User } from "../Models/User";

export class Draw{

    public run(map: number[][], allUsers: User[]){
        let myGrid = new Grid();
        myGrid.drawGrid(map);
        myGrid.drawBase(6,12);

        myGrid.drawAllTanks(allUsers);
    }

}
