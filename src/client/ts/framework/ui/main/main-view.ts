import { View } from '../../models/view';

export class MainView extends View
{
    constructor(canvas: HTMLCanvasElement){
        super(canvas);
    }

    public run(): void{
        console.log("run main view");
        console.log(this);
    }
}