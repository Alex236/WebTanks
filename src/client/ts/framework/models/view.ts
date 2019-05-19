import { Control } from './control';
import { Subject } from 'rxjs';
import { LocalContext } from './localContext';
import { Controller } from '../controllers/controller';

export abstract class View{
    public controls: Control[] = [];
    public canvas: HTMLCanvasElement;
    public ctx: LocalContext;
    public controller: Controller;

    constructor(canvas: HTMLCanvasElement){
        this.canvas = canvas;
        this.ctx = new LocalContext(canvas.getContext("2d"), 0, 0);
    }

    public draw() {
        this.controls.forEach(control => {
            control.draw();
        });
    }

    registerControl(control: Control): void{
        if(control.controls.length !== 0)
        {
            control.controls.forEach(i => this.controls.push(i));
        }
        this.controls.push(control);
    }

    public setSubject(globalEvent: Subject<any>){
        globalEvent.subscribe(event => {
            switch(event.type)
            {
                case 'click' :
                this.controls.forEach(control => {
                    if(control.x <= event.x && control.y <= event.y && (control.x + control.width) >= event.x && (control.y + control.height) >= event.y){
                        control.click();
                        return;
                    }
                });
            }
        });
    }
}