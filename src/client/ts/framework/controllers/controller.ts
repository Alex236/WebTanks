import { View } from '../models/view';

export class Controller{
    public view: View;
    constructor(view: View){
        this.view = view;
    }

    public goBack(): void{
        //???????ТУТ проблема
        console.log("GO BAAAACK");
        console.log(this.view);
        console.log("predecessor");
        console.log(this.view.predecessor);



        //console.log(view);
        
        //view.run();
        //view.draw()
    }
}