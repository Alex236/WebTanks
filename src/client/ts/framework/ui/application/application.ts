import { View } from '../../models/view';
import { Subject } from 'rxjs';
import { Controller } from '../../controllers/controller';

export class Application{
    private views: View[] = [];
    private controllers: Controller[] = [];

    private subject: Subject<MouseEvent> = new Subject<MouseEvent>();

    constructor(){
        document.addEventListener("click", (evt)=>{
            this.subject.next(evt);
        });
    }

    registerView(view: View, controller: Controller){
        this.views.push(view);
        this.controllers.push(controller);

        view.setSubject(this.subject);
        view.draw();
    }
}