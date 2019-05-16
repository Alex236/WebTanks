import { Controller } from '../../controllers/controller';

export class EditorController extends Controller
{
    private static i: number = 0;
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

    hell(): void
    {
        console.log("HELLLLLLL!!!!!!");
    }

    myFunc(): void
    {
        console.log("Hello from my func");
    }
}