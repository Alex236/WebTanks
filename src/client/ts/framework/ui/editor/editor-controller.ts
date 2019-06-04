import { Controller } from '../../controllers/controller';
import { Brush } from '../../../view-editor/brush';
import { Block } from '../../../view-editor/block';
import { EditorView } from './editor-view';
import { View } from '../../models/view';
import { Parameters } from '../../../parameters';

export class EditorController extends Controller
{
    public view: View;
    public activeBrush: number[] = [Number(Brush.SixteenCell), Number(Block.Brick)];
    public spawnPoints: string[] = [];
    public maxGamers: number = Parameters.maxGamers;

    constructor(view: EditorView){
        super();
        this.view = view;
    }

    fillCell(){
        console.log("FILLING BUTTON - " );
    }

    clearArena(){
        console.log("clear Arena");
    }
}