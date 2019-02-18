var Grid = /** @class */ (function () {
    function Grid() {
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.canvas = document.getElementById('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d");
    }
    ;
    Grid.prototype.drawPole = function () {
        this.ctx.fillStyle = "rgb(200,0,0)";
        //this.ctx.fillRect(10, 10, 55, 50)
        var img = new Image();
        this.ctx.drawImage(img, 0, 0, this.width, this.height);
        img.src = './asserts/bullets/bulletDark1_outline.png';
    };
    return Grid;
}());
var mapK = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var map = new Map(mapK);
var myGrid = new Grid();
myGrid.drawPole();
console.log("after all");
var fieldElement;
(function (fieldElement) {
    fieldElement["Road"] = "./asserts/bullets/bulletDark1_outline.png";
    fieldElement["Wall"] = "./asserts/blocks/crateWood.png";
})(fieldElement || (fieldElement = {}));
