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

    constructor(view: EditorView){
        super();
        this.view = view;
    }

    changeActiveBrushUnit(unitType: string){
        this.activeBrush[1] = Number(unitType);
    }

    changeActiveBrushSize(brushSize: string){
        this.activeBrush[0] = Number(brushSize);
    }

    clearArena(): void{
        this.arena.blocks = [];
        let arenaControls = this.view.controls.find(x => x.name === "Arena").controls;
        arenaControls.map(control => this.clearCell(control));
    }

    clearCell(control: Control){
        let contrName = control.name.split('/');
        control.name = contrName[0] + '/' + contrName[1] + '/' + String(0);
        control.ctx.strokeRect("rgba(255, 255, 255, 0.3)", control.x, control.y, control.width, control.height);
        control.ctx.fillRect("rgb(0, 0, 0)", control.x, control.y, control.width, control.height);
    }

    fillCell(button: Button): void{
        var buttonName = button.name.split('/');
        let arenaControls = this.view.controls.find(x => x.name === "Arena").controls;
        arenaControls.map(control => this.clickedCells(control, Number(buttonName[0]), Number(buttonName[1])));
        arenaControls.map(control => this.arrayOfFillingCells(control));
    }

    arrayOfFillingCells(x: Control) {
        let isClick = false;
        if (Number(x.name.split('/')[2]) != 0){ isClick = true; }
        return isClick;
    }

    clickedCells(x: Control, a: number, b: number) {
        let isClick = false;
        if (Number(x.name.split('/')[0]) >= Number(a) &&
        Number(x.name.split('/')[0]) < Number(a+this.activeBrush[0]) &&
        Number(x.name.split('/')[1]) >= Number(b) &&
        Number(x.name.split('/')[1]) < Number(b+this.activeBrush[0]))
        {
            x.ctx.strokeRect("rgba(0,0,0)", x.x, x.y, x.width, x.height);
            x.ctx.drawImage("./assets/" + Block[this.activeBrush[1]] + ".svg", x.x, x.y, x.width, x.height);
            x.name = x.name.split('/')[0] + '/' + x.name.split('/')[1] + '/' + this.activeBrush[1];
            isClick = true;
        }
        return isClick;
    }

    isUniq(button: Control): boolean {
        let res = true;
        let buttonName = (<any>button).name.split('/');
        this.arena.blocks.forEach(but => {
            if((<any>but)['x'] == buttonName[0] && (<any>but)['y'] == buttonName[1])
            { res = false; }
        });
        return res;
    }

    myFunc(): void
    {
        console.log("arena: " + this);
    }
}