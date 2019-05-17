import { Controller } from '../../controllers/controller';
import { Control } from '../../models/control';
import { View } from '../../models/view';

export class EditorController extends Controller
{
    public view: View;
    private static i: number = 0;

    constructor(view: View){
        super();
        this.view = view;
    }

    public sayHiFromController() {
        EditorController.i++;
        if(EditorController.i < 3){
            console.log("Hi! I am editor controller!");
        }
        else{
            console.log("We-we-we");
        }
        console.log(EditorController.i);
    }

    sayNameOfUnit(){
        console.log("Unit");
    }

    myFunc(): void
    {
        console.log("!!!");
    }
}