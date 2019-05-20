import { View } from '../../models/view';
import { EditorController } from './editor-controller';
import { Button } from '../../models/button';
import { Panel } from '../../models/panel';
import { Block } from '../../../view-editor/block';
import { Brush } from '../../../view-editor/brush';
import { Arena } from '../../../view-editor/arena';
import { Parameters } from '../../../parameters';

export class EditorView extends View
{
    private arenaWidth: number = parent.innerWidth*0.8;
    private arenaHeight: number = parent.innerHeight;
    private arenaSize: number = this.arenaHeight <= this.arenaWidth ? this.arenaHeight : this.arenaWidth;
    
    readonly cellSize: number = this.arenaSize / Parameters.fieldWidth;

    public arena: Arena = new Arena();
    public maxBrushSize: number = Brush.SixteenCell * this.cellSize;
    public controller: EditorController = new EditorController(this);

    constructor(canvas: HTMLCanvasElement){
        super(canvas);
    }

    public run(): void{
        this.createToolbar();
        this.createArena();
    }

    createArena(){
        let arenaPanel: Panel = new Panel(this.ctx, "Arena", 0, 0, 80, 100);
        this.createEmptyArena(arenaPanel);
        this.registerControl(arenaPanel);
    }

    createEmptyArena(arenaPanel: Panel): void{
        for(var i = 0; i < Parameters.fieldWidth; i++){
            for(var j = 0; j < Parameters.fieldHeight; j++ ){
                let but = new Button(this.ctx, String(i) + "/" + String(j) + "/" + String(Block.Road), i*this.cellSize, j*this.cellSize, this.cellSize, this.cellSize, "", "noImage","rgb(0,0,0)", "rgba(200,200,200, 0.1)");
                but.click = this.controller.fillCell.bind(this.controller, but);
                arenaPanel.registerControlToPanel(but);
                if(i%4==0 && j%4==0){
                    arenaPanel.ctx.strokeRect("rgb(255,255,255)", i*this.cellSize, j*this.cellSize, this.cellSize*4, this.cellSize*4);
                }
            }
        };
    }

    createToolbar(): void{
        let toolbar: Panel = new Panel(this.ctx, "Toolbar", 82,0,98,100);
        this.createRubberToToolbar(toolbar);
        this.createUnitToToolbar(toolbar);
        this.createBrushToToolbar(toolbar);
        this.createSpawnPoint(toolbar);
        this.createButton(toolbar);
        this.registerControl(toolbar);
    }

    createRubberToToolbar(toolbar: Panel): void{
        let but = new Button(this.ctx, "rubber", 0, 0, this.maxBrushSize, this.maxBrushSize, "", "./assets/Rubber.svg");
        but.click = this.controller.clearArena.bind(this.controller);
        toolbar.registerControlToPanel(but);
    }

    createUnitToToolbar(toolbar: Panel): void{
        let blocks = Object.keys(Block).slice(0, Object.keys(Block).length/2);
        blocks.forEach(block => {
            let unitButton = new Button(this.ctx, Block[Number(block)], toolbar.width-this.maxBrushSize, Number(block) * this.maxBrushSize * 2, this.maxBrushSize, this.maxBrushSize, "", "./assets/" + Block[Number(block)] + ".svg");
            unitButton.click = this.controller.changeActiveBrushUnit.bind(this.controller, String(Number(block)))
            toolbar.registerControlToPanel(unitButton);
        });
    }

    createBrushToToolbar(toolbar: Panel): void{
        const brushes = Object.keys(Brush).slice(0, Object.keys(Brush).length/2);
        brushes.forEach(brushSize => {
            let brushButton = new Button(this.ctx, Brush[Number(brushSize)], this.maxBrushSize/2 - (Number(brushSize) * this.cellSize)/2, Number(brushSize) * this.maxBrushSize + this.maxBrushSize/4, Number(brushSize) * this.cellSize, Number(brushSize) * this.cellSize, "myText", "noImage", "noBackground", "rgb(200,200,200)");
            brushButton.click = this.controller.changeActiveBrushSize.bind(this.controller, brushSize);
            toolbar.registerControlToPanel(brushButton);
        });
    }

    createButton(toolbar: Panel): void{
        let createButton = new Button(this.ctx, "createButton", 0, this.maxBrushSize*12, toolbar.width, this.maxBrushSize, "", "./assets/CreateButton.svg");
        toolbar.registerControlToPanel(createButton);
    }

    createSpawnPoint(toolbar: Panel): void{
        let spawnPoint = new Button(this.ctx, "spawnPoint", 0, this.maxBrushSize*6, this.maxBrushSize, this.maxBrushSize, "", "./assets/SpawnPoint.svg");
        spawnPoint.click = this.controller.setSpawnPoint.bind(this.controller);
        toolbar.registerControlToPanel(spawnPoint);
    }
}