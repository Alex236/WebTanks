import { View } from '../../models/view';
import { Subject } from 'rxjs';
import { Controller } from '../../controllers/controller';

export class Application {
    private views: View[] = [];
    private controllers: Controller[] = [];
    public currentView: View = this.views[0];

    private subject: Subject<MouseEvent>;

    constructor(){
        this.subject = new Subject<MouseEvent>();
        document.addEventListener("click", (evt)=>{
            this.subject.next(evt);
        });
    }

    registerView(view: View, controller: Controller){
        this.views.push(view);
        this.controllers.push(controller);
        view.setSubject(this.subject);
    }

    runTrueView(view: View){
        this.views[0].run();
        this.views[0].draw();
        view.predecessor = this.currentView;

        console.log("VIEWWWW!!!!!");
        console.log(view);

        this.currentView = view;
        view.run();
        view.draw();
    }

}