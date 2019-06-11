import { Control } from './control';
import { Subject } from 'rxjs';
import { Controller } from '../controllers/controller';
import { Button } from './button';
import { Panel } from './panel';
import { Sprites } from '../../view-editor/sprites';

export class View{

    public controls: (Button | Control)[] = [];
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public controller: Controller = new Controller(this);
    public width: number = parent.innerWidth;
    public height: number = parent.innerHeight;

    public predecessor: View; //= this;





    public spritesForToolbar: Map<string, HTMLImageElement> = new Sprites().all;

    public menuPanel: Panel = new Panel([0,0], "menuPanel", 0, 0, 100, 5);

    constructor(canvas: HTMLCanvasElement){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    //add layout controls
    public run(){
        this.backButton();
    }

    public draw() {
        this.controls.forEach(control => {
            control.draw(this.ctx);
        });
    }

    registerControl(control: Control): void{
        this.controls.push(control);
    }

    public setSubject(globalEvent: Subject<any>){
        globalEvent.subscribe(event => {
            switch(event.type)
            {
                case 'click' :
                this.controls.forEach(control => {
                    if((control.x) <= event.x &&
                        control.y <= event.y &&
                        (control.x + control.width) >= event.x &&
                        (control.y + control.height) >= event.y){
                        control.click();
                        return;
                    }
                });
            }
        });
    }

    private backButton():void {
        let back = new Button([0, 0], "backButton", this.menuPanel.x, this.menuPanel.y, this.menuPanel.height, this.menuPanel.height, "", this.spritesForToolbar.get("backButton"));
        //???????ТУТ проблема
        back.click = this.controller.goBack.bind(this.controller);
        this.registerControl(back);
    }
}