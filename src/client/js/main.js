'use strict'

var canvas = document.getElementById('webTanks');
var context = canvas.getContext('2d');

var mapLenght = 136;
var mapLenghtInBlocks = 17;

var map = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],];

var imgMap = new Array();
for(var i = 0; i < mapLenghtInBlocks; i++) {
    imgMap[i] = new Array();
}

var mapEnum = {
    grass1: "./asserts/blocks/tileGrass_roadCrossing.png"
    //add other map`s blocks
}

for(var i = 0; i < mapLenghtInBlocks; i++) {
    for(var j = 0; j < mapLenghtInBlocks; j++) {
        imgMap[i][j] = new Image();
        imgMap[i][j].src = mapEnum.grass1;
    }
}

/* add resizer */

var resizeCoeficient = canvas.height / 136;
var blockSize = resizeCoeficient * 8;

setInterval(drawMain, 30);

function drawMain() {
    drawMap();
}

function drawMap()
{
    var xDraw = 0;
    var yDraw = 0;
    for(var i = 0; i < mapLenghtInBlocks; i++) {
        for(var j = 0; j < mapLenghtInBlocks; j++) {
            context.drawImage(imgMap[i][j], xDraw, yDraw, blockSize, blockSize);
            
            xDraw += blockSize;
        }
        yDraw += blockSize;
        xDraw = 0;
    }
}