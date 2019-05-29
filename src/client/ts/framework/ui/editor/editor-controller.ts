import { Controller } from '../../controllers/controller';
import { Arena } from "../../../view-editor/arena";
import { Brush } from '../../../view-editor/brush';
import { Block } from '../../../view-editor/block';
import { EditorView } from './editor-view';
import { View } from '../../models/view';
import { Button } from '../../models/button';
import { Control } from '../../models/control';
import { Parameters } from '../../../parameters';

export class EditorController extends Controller
{
    public view: View;
    public activeBrush: number[] = [Number(Brush.SixteenCell), Number(Block.Brick)];
    public spawnPoints: string[] = [];
    private arena: Arena = new Arena();
    private isSpawnPoint: boolean = false;
    public maxGamers: number = Parameters.maxGamers;

    constructor(view: EditorView){
        super();
        this.view = view;
    }

    changeActiveBrushUnit(unitType: string){
        this.activeBrush[1] = Number(unitType);
        this.isSpawnPoint = false;
    }

    changeActiveBrushSize(brushSize: string){
        this.activeBrush[0] = Number(brushSize);
    }

    clearArena(): void{
        this.arena.blocks = [];
        let arenaControls = this.view.controls.find(x => x.name === "Arena").controls;
        arenaControls.map(control => this.clearCell(control));
        this.splitBlocks(arenaControls);
    }

    fillCell(button: Button): void{
        var buttonName = button.name.split('/');
        let arenaControls = this.view.controls.find(x => x.name === "Arena").controls;
        if (this.isSpawnPoint){
            if(!this.spawnPoints.includes(buttonName[0] + '/' + buttonName[1] + '/6')
                && this.maxGamers !== 0
                && !this.isSpawnPointOverOther(Number(buttonName[0]), Number(buttonName[1]))
                && Number(buttonName[0]) < Parameters.fieldWidth-3
                && Number(buttonName[1]) < Parameters.fieldHeight-3){
                button.name = buttonName[0] + '/' + buttonName[1] + '/' + Block.SpawnPoint;
                this.spawnPoints.push(button.name);
                this.maxGamers-=1;
                arenaControls.map(control => this.deleteBlocksForSpawnPoint(control, Number(buttonName[0]), Number(buttonName[1])));
                button.ctx.drawImage("./assets/SpawnPoint.svg", button.x, button.y, button.width*4, button.height*4);
            }
        }
        else {
            arenaControls.map(control => this.clickedCells(control, Number(buttonName[0]), Number(buttonName[1])));
            arenaControls.map(control => this.arrayOfFillingCells(control));
            this.splitBlocks(arenaControls);
        }
        this.drawMaxGamers();
        console.log(this.spawnPoints);
        console.log(arenaControls.filter(x => Number(x.name.split('/')[2]) != 0));
    }

    setSpawnPoint(): void{
        this.isSpawnPoint = true;
    }

    myFunc(): void{
        console.log("arena: " + this);
    }

    private isSpawnPointOverOther(x: number, y: number): boolean{
        let isOver = false;
        for(let i = (x-3); i <= (x+3); i++){
            for(let j = (y-3); j <= (y+3); j ++){
                if(i === x && j === y ){
                }
                else if(this.spawnPoints.includes(i + '/' + j + '/6')){
                    isOver = true;
                }
            }
        }
        return isOver;
    }

    private findSpawnPointUnderBlock(control: Control, firstI: number, firstJ: number){
        let cntrlName = control.name.split('/');
        if(this.spawnPoints.includes(Number(cntrlName[0]) + '/' + Number(cntrlName[1]) + '/6')){
            this.deleteSpawnPointAndRedraw(Number(cntrlName[0]), Number(cntrlName[1]), control);
        }
        else if(firstI == Number(cntrlName[0]) || firstJ == Number(cntrlName[1])){
            for(let i = (Number(cntrlName[0])-3); i <= (Number(cntrlName[0])); i++){
                for(let j = (Number(cntrlName[1])-3); j <= (Number(cntrlName[1])); j++){
                    if(this.spawnPoints.includes(i + '/' + j + '/' + Block.SpawnPoint)){
                        this.deleteSpawnPointAndRedraw(i, j, control);
                    }
                }
            }
        }
    }

    private deleteSpawnPointAndRedraw(i: number, j: number, control: Control){
        this.view.ctx.fillRect("rgb(0,0,0)",i*control.width,j* control.height,control.width*4,control.height*4);
        this.drawSplitingOfBlocks(i, j, control);
        let index = this.spawnPoints.indexOf(i + '/' + j + '/' + Block.SpawnPoint);
        this.spawnPoints.splice(index, 1);
        this.maxGamers+=1;
        this.drawMaxGamers();
    }

    private drawSplitingOfBlocks(i: number, j: number, control: Control){
        for(let k=0; k < 4; k++){
            for(let t=0; t < 4; t++){
                this.view.ctx.strokeRect("rgba(255,255,255,0.1)",(k+i)*control.width, (t+j)*control.height, control.width, control.height);
            }
        }
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

    private drawMaxGamers(){
        let spPointOnToolbar = this.view.controls.find(but => but.name === "spawnPoint");
        this.view.ctx.fillRect("rgb(0,0,0)", spPointOnToolbar.x, spPointOnToolbar.y, spPointOnToolbar.width/3, -(spPointOnToolbar.height/3));
        this.view.ctx.fillText(<any>(this.maxGamers), "rgb(150,0,0)", spPointOnToolbar.x, spPointOnToolbar.y);
    }

    private clearCell(control: Control){
        let contrName = control.name.split('/');
        control.name = contrName[0] + '/' + contrName[1] + '/' + String(0);
        control.ctx.fillRect("rgb(0,0,0)",control.x, control.y, control.width, control.height);
        control.ctx.strokeRect("rgba(255,255,255,0.1)",control.x, control.y, control.width, control.height);
    }

    private splitBlocks(controls: Control[]){
        controls.forEach(control=>{
            let contrName = control.name.split('/');
            if(Number(contrName[0])%4==0 && Number(contrName[1])%4==0){
                control.ctx.strokeRect("rgb(0,0,0)",control.x, control.y, control.width*4, control.height*4);
                control.ctx.strokeRect("rgba(255,255,255,0.3)",control.x, control.y, control.width*4, control.height*4);
            }
        });
    }

    private arrayOfFillingCells(x: Control) {
        let isClick = false;
        if (Number(x.name.split('/')[2]) != 0){ isClick = true; }
        return isClick;
    }

    private clickedCells(x: Control, a: number, b: number) {
        let xName = x.name.split('/');
        if (Number(xName[0]) >= Number(a) &&
            Number(xName[0]) < Number(a+this.activeBrush[0]) &&
            Number(xName[1]) >= Number(b) &&
            Number(xName[1]) < Number(b+this.activeBrush[0])){
            this.findSpawnPointUnderBlock(x, a, b);
            x.ctx.drawImage("./assets/" + Block[this.activeBrush[1]] + ".svg", x.x, x.y, x.width, x.height);
            x.name = xName[0] + '/' + xName[1] + '/' + this.activeBrush[1];
        }
    }
}