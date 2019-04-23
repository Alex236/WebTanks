import { View } from '../models-mvc/view';
import { Subject } from 'rxjs';
import { Grid } from '../view-editor/grid';
import { Brush } from '../view-editor/brush';
import { Parameters } from '../parameters';

export class Application{
    private views: View[] = [];
    private subject: Subject<MouseEvent> = new Subject<MouseEvent>();

    constructor(){
        document.addEventListener("click", (evt)=>{
            this.subject.next(evt);
        });
    }

    registerView(view: View){
        this.views.push(view);
        view.setSubject(this.subject);
        view.draw();
    }
}