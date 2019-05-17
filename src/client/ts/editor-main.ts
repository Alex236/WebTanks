import { Application } from './framework/ui/application/application';
import { Grid } from './view-editor/grid';
import { EditorController } from './framework/ui/editor/editor-controller';
import { EditorView } from './framework/ui/editor/editor-view';

let application = new Application();
let editor = new Grid();
let editorView = new EditorView(editor.canvas);
let editorContr = new EditorController(editorView);

editorView.run();
application.registerView(editorView, editorContr);