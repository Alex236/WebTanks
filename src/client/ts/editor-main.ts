import { Application } from './framework/ui/application/application';
import { EditorView } from './framework/ui/editor/editor-view';
import { EditorController } from './framework/ui/editor/editor-controller';
import { Grid } from './view-editor/grid';
import { MainView } from './framework/ui/main/main-view';
import { MainController } from './framework/ui/main/main-controller';
import { View } from './framework/models/view';
import { Controller } from './framework/controllers/controller';

let application = new Application();
let grid = new Grid();

let appView = new View(grid.canvas);
let appContr = new Controller(appView);

let mainView = new MainView(grid.canvas);
let mainContr = new MainController(mainView);

let editorView = new EditorView(grid.canvas);
let editorContr = new EditorController(editorView);

application.registerView(appView, appContr);
application.registerView(mainView, mainContr);
application.registerView(editorView, editorContr);

application.runTrueView(editorView);