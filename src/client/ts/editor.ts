import { Grid } from "./view-editor/grid";
import { UnitsControl } from "./view-editor/units-control";
import { Brush } from './view-editor/brush';
import { Block } from './view-editor/block';

export class Editor{
    public grid: Grid = new Grid();
    public unit: UnitsControl = new UnitsControl(this.grid.cellSize);
    public activeBrush: number[] = [Number(Brush.SixteenCell),Number(Block.Brick)];
    public unitCan = this.unit.canvas;
    public canvas = this.grid.canvas;

    run(){
        this.grid.emptyArena();
        this.unit.draw();
    }
}