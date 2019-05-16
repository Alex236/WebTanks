import { View } from '../../models/view';
import { EditorController } from './editor-controller';
import { Button } from '../../models/button';
import { Panel } from '../../models/panel';
import { LocalContext } from '../../models/localContext';

export class EditorView extends View
{
    public width: number = parent.innerWidth;
    public height: number = parent.innerHeight;
    public controller: EditorController = new EditorController();

    constructor(canvas: HTMLCanvasElement){
        super(canvas);
    }

    public run(){
        this.ctx.strokeStyle = "rgb(255,255,255)";
        this.ctx.strokeRect(0, 0, this.width,  this.height);

        this.createButtons();
        this.createToolbar();
    }

    createButtons(){
        let but = new Button(this.ctx, 0, 0, 50, 50, "", "./assets/Rubber.svg");
        but.click = this.controller.sayHiFromController;
        
        this.registerControl(but);
    }

    createToolbar(){
        let toolbar = new Panel(this.ctx, 80,0,100,100);

        let but1 = new Button(toolbar.ctx, 50, 50, 50, 50, "", "./assets/Base.svg");
        but1.click = this.controller.myFunc;


        toolbar.registerControlToPanel(but1);


        //toolbar.controls.push(but1);
        this.ctx.strokeStyle = "rgb(255,100,100)";
        this.ctx.strokeRect(toolbar.x, toolbar.y, toolbar.width, toolbar.height);
        this.registerControl(toolbar);
        console.log(toolbar.controls);
    }
}