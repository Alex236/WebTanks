import { User } from "../Models/User";
import { Bullet } from "../Models/Bullet";
import { DrawingElements } from "./DrawingElements"
import { Base } from "./DrawingElements/Base";
import { Grid } from "./DrawingElements/Grid";
import { Tanks } from "./DrawingElements/Tanks";
import { Bullets } from "./DrawingElements/Bullets";

export class Draw{
    private drawingElements: DrawingElements = new DrawingElements();
    private base: Base = new Base(6,12);
    private grid: Grid = new Grid();
    private tanks: Tanks = new Tanks();
    private bullets: Bullets = new Bullets();

    public run(map: number[][], allUsers: User[], allBullets: Bullet[]){
        this.grid.draw(map);
        this.base.draw();
        this.tanks.draw(allUsers);
        this.bullets.draw(allBullets);
    }

}
