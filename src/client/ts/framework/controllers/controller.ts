import { View } from '../models/view';

export class Controller{
    public view: View;
    constructor(view: View){
        this.view = view;
    }

    public goBack(): void{
        console.log("GO BAAAACK");
    }
}