import { Controller } from '../../controllers/controller';
import { MainView } from './main-view';
import { View } from '../../models/view';

export class MainController extends Controller{
    constructor(view: MainView){
        super(view);
    }
}