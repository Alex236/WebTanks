import { Control } from './control';
import { Subject } from 'rxjs';
import { Controller } from '../controllers/controller';
import { Button } from './button';

export abstract class View{
    public controls: (Button | Control)[] = [];
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public controller: Controller;
    public width: number = parent.innerWidth;
    public height: number = parent.innerHeight;

    constructor(canvas: HTMLCanvasElement){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
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
}