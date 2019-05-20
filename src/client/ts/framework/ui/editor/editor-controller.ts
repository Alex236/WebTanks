import { Controller } from '../../controllers/controller';
import { Arena } from "../../../view-editor/arena";
import { Brush } from '../../../view-editor/brush';
import { Block } from '../../../view-editor/block';
import { EditorView } from './editor-view';
import { View } from '../../models/view';
import { Button } from '../../models/button';
import { Control } from '../../models/control';

export class EditorController extends Controller
{
    public view: View;
    private arena: Arena = new Arena();
    public activeBrush: number[] = [Number(Brush.SixteenCell), Number(Block.Brick)];
    public spawnPoint: boolean = false;

    constructor(view: EditorView){
        super();
        this.view = view;
    }

    changeActiveBrushUnit(unitType: string){
        this.activeBrush[1] = Number(unitType);
        this.spawnPoint = false;
    }

    changeActiveBrushSize(brushSize: string){
        this.activeBrush[0] = Number(brushSize);
    }

    clearArena(): void{
        this.arena.blocks = [];
        let arenaControls = this.view.controls.find(x => x.name === "Arena").controls;
        arenaControls.map(control => this.clearCell(control));
    }

    fillCell(button: Button): void{
        var buttonName = button.name.split('/');
        let arenaControls = this.view.controls.find(x => x.name === "Arena").controls;
        if (this.spawnPoint){
            arenaControls.map(control => this.deleteBlocksForSpawnPoint(control, Number(buttonName[0]), Number(buttonName[1])));
            button.ctx.drawImage("./assets/SpawnPoint.svg", button.x, button.y, button.width*4, button.height*4);
        }
        else {
            arenaControls.map(control => this.clickedCells(control, Number(buttonName[0]), Number(buttonName[1])));
            arenaControls.map(control => this.arrayOfFillingCells(control));
        }
    }

    setSpawnPoint(): void{
        this.spawnPoint = true;
    }

    private deleteBlocksForSpawnPoint(button: Control, a: number, b: number): void{
        var buttonName = button.name.split('/');
        if (Number(buttonName[0]) >= Number(a) &&
            Number(buttonName[0]) < Number(a+4) &&
            Number(buttonName[1]) >= Number(b) &&
            Number(buttonName[1]) < Number(b+4)){
            this.clearCell(button);
        }
    }

    myFunc(): void{
        console.log("arena: " + this);
    }

    private clearCell(control: Control){
        let contrName = control.name.split('/');
        control.name = contrName[0] + '/' + contrName[1] + '/' + String(0);
        control.ctx.drawImage("./assets/Road.svg", control.x, control.y, control.width, control.height);
    }

    private arrayOfFillingCells(x: Control) {
        let isClick = false;
        if (Number(x.name.split('/')[2]) != 0){ isClick = true; }
        return isClick;
    }

    private clickedCells(x: Control, a: number, b: number) {
        if (Number(x.name.split('/')[0]) >= Number(a) &&
        Number(x.name.split('/')[0]) < Number(a+this.activeBrush[0]) &&
        Number(x.name.split('/')[1]) >= Number(b) &&
        Number(x.name.split('/')[1]) < Number(b+this.activeBrush[0])){
            x.ctx.strokeRect("rgba(0,0,0)", x.x, x.y, x.width, x.height);
            x.ctx.drawImage("./assets/" + Block[this.activeBrush[1]] + ".svg", x.x, x.y, x.width, x.height);
            x.name = x.name.split('/')[0] + '/' + x.name.split('/')[1] + '/' + this.activeBrush[1];
        }
    }

}