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
        console.log(this.activeBrush);
    }

    changeActiveBrushSize(brushSize: string){
        this.activeBrush[0] = Number(brushSize);
        console.log(this.activeBrush);
    }

    clearArena(): void{
        this.arena.blocks = [];
        console.log(this.activeBrush);
        console.log(this.arena);
    }

    fillCell(cellNumber: number, button: Button): void{
        var a = Number(button.name.split('/')[0]);
        var b = Number(button.name.split('/')[1]);

        let ar = this.view.controls.find(x => x.name === "Arena");

        var wasClicked = ar.controls.filter(control => this.trueUnits(control, a, b));
        wasClicked.forEach(unit => {
            this.arena.blocks.push(unit)
        });
        console.log(this.arena.blocks);
    }

    trueUnits(x: Control, a: number, b: number) {
        let isClick = false;
        if (Number(x.name.split('/')[0]) >= Number(a) &&
        Number(x.name.split('/')[0]) < Number(a+this.activeBrush[0]) &&
        Number(x.name.split('/')[1]) >= Number(b) &&
        Number(x.name.split('/')[1]) < Number(b+this.activeBrush[0])){
            x.ctx.fillRect("rgb(255,200,0)", x.x, x.y, x.width, x.height);
            isClick = true;
        }
        return isClick;
    }

    myFunc(): void
    {
        //this.arena.blocks.push({x: EditorController.i++, y: EditorController.i++});
        console.log("arena: " + this);
    }
}