import { Control } from './control';
import { Subject } from 'rxjs';
import { LocalContext } from './localContext';
import { Button } from './button';

export class View{
    public controls: Control[] = [];
    public canvas: HTMLCanvasElement;
    public ctx: LocalContext;
    public startX: number;
    public startY: number;
    public width: number;
    public height: number;

    public draw() {
        this.controls.forEach(control => {
            control.draw();
        });
    }

    createControl(controlType: string, x: number, y: number, widthPercent: number, heightPercent?: number, text?: string, backgroundImage?: string, backgroundColor?: string){
        let height = heightPercent ? heightPercent : widthPercent;
        switch (controlType) {
            case 'Button':
                let button = new Button(this.ctx, x, y, this.width * widthPercent * 0.01, this.height * height * 0.01, text, backgroundImage, backgroundColor);
                return this.controls.push(button);
            default:
                throw new Error();
        }
    }

    constructor(canvas: HTMLCanvasElement, startXPercent: number, startYPercent: number, widthPercent: number, heightPercent: number){
        this.canvas = canvas;
        this.startX = this.canvas.width * startXPercent * 0.01;
        this.startY = this.canvas.height * startYPercent * 0.01;
        this.width = this.canvas.width * widthPercent * 0.01 - this.startX;
        this.height = this.canvas.height * heightPercent * 0.01 - this.startY;
        this.ctx = new LocalContext(canvas.getContext("2d"), this.startX, this.startY);
    }

    public setSubject(globalEvent: Subject<any>){
        globalEvent.subscribe(event => {
            //console.log(event);
            switch(event.type)
            {
                case 'click' :
                this.controls.forEach(control => {
                    //console.log("controlX - " + control.x + "controlY - " + control.y );
                    if(control.x <= event.x && control.y <= event.y && (control.x + control.width) >= event.x && (control.y + control.height) >= event.y){
                        control.click;
                        console.log("Click on my RUBBER!!");
                        return;
                    }
                });
            }
        });
    }
}