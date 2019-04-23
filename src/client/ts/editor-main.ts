import { Application } from './controllers/application';
import { Grid } from './view-editor/grid';
import { View } from './models-mvc/view';
import { Parameters } from './parameters';
import { Brush } from './view-editor/brush';

let application = new Application();
let editor = new Grid();
        //new View(canvas, startXPercent, startYPercent, widthPercent, heightPercent); startXPercent - стартовая точка отрисовки нового вью по ширине в процентном соотношении от основного канваса (startYPercent - по высоте);
let unitControl = new View(editor.canvas, 80, 0, 100, 100);
    let arenaField = new View(editor.canvas, 0, 0, 75, 75);
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

    unitControl.ctx.strokeStyle = "rgb(255,255,255)";
    unitControl.ctx.strokeRect(0, 0, unitControl.width,  unitControl.height);

    application.registerView(unitControl);
    application.registerView(arenaField);