import { Grid } from "./view-editor/grid";
import { UnitsControl } from "./view-editor/units-control";

export class Editor{
    public grid: Grid = new Grid();
    public unit: UnitsControl = new UnitsControl(this.grid.cellSize);
    public actingBrush: number[] = [4,1];
    public unitCan = this.unit.canvas;
    public canvas = this.grid.canvas;

    run(){
        this.grid.draw();
        this.unit.draw();
    }
}