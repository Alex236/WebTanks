import { Application } from './framework/ui/application/application';
import { Grid } from './view-editor/grid';
import { View } from './framework/models/view';
import { Parameters } from './parameters';
import { Brush } from './view-editor/brush';
import { Control } from './framework/models/control';
import { Button } from './framework/models/button';
import { EditorController } from './framework/ui/editor/editor-controller';
import { EditorView } from './framework/ui/editor/editor-view';

let application = new Application();
let editor = new Grid();
let unitControl = new EditorView(editor.canvas);
let editorContr = new EditorController();

unitControl.run();

/*let arenaField = new View(editor.canvas, 0, 0, 75, 75);
let cellSize: number = arenaField.width / Parameters.fieldWidth;
    unitControl.createControl("Button", 0, 0, 25, 5, "", "./assets/Rubber.svg");

    for(let i = 0; i < Parameters.fieldWidth; i++){
        for(let j = 0; j < Parameters.fieldWidth; j++){
            if(i%Brush.SixteenCell==0 && j%Brush.SixteenCell==0){
                arenaField.ctx.strokeStyle = "rgba(255,255,255, 0.6)";
                arenaField.ctx.strokeRect(i*cellSize, j*cellSize, cellSize*Brush.SixteenCell, cellSize*Brush.SixteenCell);
            }
            arenaField.ctx.strokeStyle = "rgba(255,255,255, 0.1)";
            arenaField.ctx.strokeRect(i*cellSize, j*cellSize, cellSize, cellSize);
        }
    }
    */
    application.registerView(unitControl, editorContr);


    //application.registerView(arenaField);