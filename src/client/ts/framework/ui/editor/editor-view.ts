import { View } from '../../models/view';
import { EditorController } from './editor-controller';
import { Brush } from '../../../view-editor/brush';
import { Arena } from '../../../view-editor/arena';
import { Parameters } from '../../../parameters';
import { Panel } from '../../models/panel';
import { Button } from '../../models/button';
import { Block } from '../../../view-editor/block';
import { Sprites } from '../../../view-editor/sprites';

export class EditorView extends View
{
    private arenaWidth: number = parent.innerWidth*0.8;
    private arenaHeight: number = parent.innerHeight;
    private arenaSize: number = this.arenaHeight <= this.arenaWidth ? this.arenaHeight : this.arenaWidth;

    readonly cellSize: number = this.arenaSize / Parameters.fieldWidth;

    public arena: Arena = new Arena();
    public maxBrushSize: number = Brush.SixteenCell * this.cellSize;
    public controller: EditorController = new EditorController(this);

    private spritesForToolbar: Map<string, HTMLImageElement> = new Sprites().all;

    //view panels
    public arenaPanel: Panel = new Panel([0,0], "arenaPanel", 0, 0, 80, 100);
    public toolbar: Panel = new Panel([0,0], "Toolbar", 82, 0, 98, 100);

    constructor(canvas: HTMLCanvasElement){
        super(canvas);
        this.registerControl(this.arenaPanel);
        this.registerControl(this.toolbar);
    }

    public run(): void{
        this.emptyArena();
        this.createElementsOfToolbar();
    }

    private emptyArena(){
        for(let i=0; i < Parameters.fieldWidth; i++){
            for(let j=0; j < Parameters.fieldHeight; j++){
                this.ctx.strokeStyle = "rgb(255,255,255, 0.1)";
                this.ctx.strokeRect(i*this.cellSize, j*this.cellSize, this.cellSize, this.cellSize);

                let but = new Button([this.arenaPanel.x, this.arenaPanel.y], String(i) + "/" + String(j) + "/" + String(Block.Road), i*this.cellSize, j*this.cellSize, this.cellSize, this.cellSize, "", null);
                but.click = this.controller.fillCell.bind(this.controller, but);
                this.arenaPanel.controls.push(but);
                this.registerControl(but);
            }
        }

        for(let i=0; i < Parameters.fieldWidth; i++){
            for(let j=0; j < Parameters.fieldHeight; j++){
                if(i%4==0 && j%4==0){
                    this.ctx.strokeStyle = "rgb(255,255,255, 0.3)";
                    this.ctx.strokeRect(i*this.cellSize, j*this.cellSize, this.cellSize*4, this.cellSize*4);
                }
            }
        }
    }

    private createElementsOfToolbar(){
        this.createRubberToToolbar();
        this.createUnitToToolbar();
        this.createBrushToToolbar();
        this.createSpawnPoint();
        this.createCreateButton();
    }

    private createRubberToToolbar(): void{
        let but = new Button([this.toolbar.x, this.toolbar.y], "rubber", 0, 0, this.maxBrushSize, this.maxBrushSize, "", this.spritesForToolbar.get("Rubber"));
        but.click = this.controller.clearArena.bind(this.controller);
        this.registerControl(but);
    }

    private createUnitToToolbar(): void{
        let blocks = Object.keys(Block).slice(0, Object.keys(Block).length/2 - 1);
        blocks.forEach(block => {
            let unitButton = new Button([this.toolbar.x, this.toolbar.y], Block[Number(block)], this.toolbar.width-this.maxBrushSize, Number(block) * this.maxBrushSize * 2, this.maxBrushSize, this.maxBrushSize, "", this.spritesForToolbar.get(Block[Number(block)]));
            unitButton.click = this.controller.changeActiveBrushUnit.bind(this.controller, String(Number(block)))
            this.registerControl(unitButton);
        });
    }

    private createBrushToToolbar(): void{
        const brushes = Object.keys(Brush).slice(0, Object.keys(Brush).length/2);
        brushes.forEach(brushSize => {
            let brushButton = new Button([this.toolbar.x, this.toolbar.y], Brush[Number(brushSize)], this.maxBrushSize/2 - (Number(brushSize) * this.cellSize)/2, Number(brushSize) * this.maxBrushSize + this.maxBrushSize/4, Number(brushSize) * this.cellSize, Number(brushSize) * this.cellSize, "myText", null, "noBackground", "rgb(200,200,200)");
            brushButton.click = this.controller.changeActiveBrushSize.bind(this.controller, brushSize);
            this.registerControl(brushButton);
        });
    }

    private createCreateButton(): void{
        let createButton = new Button([this.toolbar.x, this.toolbar.y], "createButton", 0, this.maxBrushSize*12, this.toolbar.width, this.maxBrushSize, "", this.spritesForToolbar.get("CreateButton"));
        //createButton.click = this.controller.createJsonArena.bind(this.controller);
        this.registerControl(createButton);
    }

    private createSpawnPoint(): void{
        let spawnPoint = new Button([this.toolbar.x, this.toolbar.y], "spawnPoint", 0, this.maxBrushSize*6, this.maxBrushSize, this.maxBrushSize, "", this.spritesForToolbar.get("SpawnPoint"));
        spawnPoint.click = this.controller.setSpawnPoint.bind(this.controller);
        this.registerControl(spawnPoint);
    }
}