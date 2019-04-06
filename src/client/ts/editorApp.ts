import { Editor } from "./editor";
import { Brush } from "./view-editor/brush";

let editor = new Editor();

editor.run();

function getMousePosition(canvas: HTMLCanvasElement, evt: MouseEvent) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

editor.unitCan.addEventListener("click", function (evt) {
    var mousePos = getMousePosition(editor.unitCan, evt);
    var rubber = Object(editor.unit.rubber);
    var createButton = Object(editor.unit.createButton);


    if(createButton.startX <= mousePos.x && createButton.endX >= mousePos.x){
        if(createButton.startY <= mousePos.y && mousePos.y <= createButton.endY){
            console.log("Create new Arena");
        }
    }

    if(rubber.startX <= mousePos.x && rubber.endX >= mousePos.x){
        if(rubber.startY <= mousePos.y && mousePos.y <= rubber.endY + editor.unit.maxBrushSize){
            editor.grid.draw();
        }
    }

    editor.unit.brush.map(brush => {
        var brushObject = Object(brush);
        var cell = brushObject.cell;
        if(((Brush.SixteenCell * cell*1.5 - brushObject.brush*cell/2) <= mousePos.x) && ((Brush.SixteenCell * cell*1.5 + brushObject.brush*cell/2) >= mousePos.x)){
            if((Brush.SixteenCell * cell * brushObject.brush <= mousePos.y) && (Brush.SixteenCell * cell * brushObject.brush + cell * brushObject.brush >= mousePos.y)){
                editor.actingBrush[0] = Number(brushObject.brush);
            }
        }
    });

    editor.unit.blocks.map(block => {
        var blockEnum = Object.values(block)[0];
        var x = Object.values(block)[1];
        var blockSize = Object.values(block)[3];
        if((x < mousePos.x && mousePos.x < x + blockSize))
            if(blockEnum*blockSize*2 <= mousePos.y && (blockEnum*blockSize*2+blockSize) >= mousePos.y){
                editor.actingBrush[1] = Number(blockEnum);
            }
    });
}, false);

document.addEventListener("click", fillCell, false);

function fillCell(e:any) {
    editor.grid.fillCell(editor.actingBrush, e.clientX, e.clientY);
};