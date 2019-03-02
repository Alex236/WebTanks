import { Grid } from "./GridView";
import { Rounds } from "./Rounds";
import { Users } from "../Calculate/Users";
import { User } from "../Calculate/User";

export class Draw{

    public run(map: number[][], allUsers: User[]){
        let myGrid = new Grid();
        myGrid.drawGrid(map);
        myGrid.drawBase(6,12);

        myGrid.drawAllTanks(allUsers);
    }

}
