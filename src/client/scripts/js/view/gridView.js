var gridView;
(function (gridView) {
    class Grid {
        constructor() {
            this.height = window.innerHeight;
            this.width = window.innerWidth - 250;
            this.cellSizeWidth = this.width / 52;
            this.cellSizeHeight = this.height / 52;
            this.canvas = document.getElementById('canvas');
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.ctx = this.canvas.getContext("2d");
        }
        ;
        drawBase(x, y) {
            let img = document.createElement("img");
            img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550860699/TanksAsserts/flag_ukraine_36335.png";
            this.ctx.drawImage(img, (x * 4 * this.cellSizeWidth), (y * 4 * this.cellSizeHeight), this.cellSizeWidth * 4, this.cellSizeHeight * 4);
        }
        ;
        drawTank(x, y) {
            let img = document.createElement("img");
            img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550838091/TanksAsserts/tank_sand.png";
            this.ctx.drawImage(img, x, y, this.cellSizeWidth * 4, this.cellSizeHeight * 4);
        }
        ;
        DrawBrick(x, y) {
            let img = document.createElement("img");
            img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848759/TanksAsserts/crateWood.png";
            this.ctx.drawImage(img, (x * this.cellSizeWidth + x * 4 * this.cellSizeWidth), (y * this.cellSizeHeight + y * 4 * this.cellSizeHeight), this.cellSizeWidth + 1, this.cellSizeHeight + 1);
        }
        ;
        DrawHardBrick(x, y) {
            let img = document.createElement("img");
            img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550848848/TanksAsserts/crateMetal.png";
            this.ctx.drawImage(img, (x * this.cellSizeWidth + x * 4 * this.cellSizeWidth), (y * this.cellSizeHeight + y * 4 * this.cellSizeHeight), this.cellSizeWidth + 1, this.cellSizeHeight + 1);
        }
        ;
        DrawGreen(x, y) {
            let img = document.createElement("img");
            img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550849482/TanksAsserts/favicon-6.ico";
            this.ctx.drawImage(img, (x * this.cellSizeWidth + x * 4 * this.cellSizeWidth), (y * this.cellSizeHeight + y * 4 * this.cellSizeHeight), this.cellSizeWidth, this.cellSizeHeight);
        }
        ;
        DrawRoad(x, y) {
            let img = document.createElement("img");
            img.src = "https://res.cloudinary.com/phonecasemaggie/image/upload/v1550844835/TanksAsserts/Road.png";
            this.ctx.drawImage(img, (x * this.cellSizeWidth + x * 4 * this.cellSizeWidth), (y * this.cellSizeHeight + y * 4 * this.cellSizeHeight), this.cellSizeWidth + 1, this.cellSizeHeight + 1);
        }
        ;
        drawGrid(map) {
            for (var j = 0; j < 52; j++) {
                for (var i = 0; i < 52; i++) {
                    switch (map[j][i]) {
                        case 0:
                            this.DrawRoad(i, j);
                            break;
                        case 1:
                            this.DrawBrick(i, j);
                            break;
                        case 2:
                            this.DrawHardBrick(i, j);
                            break;
                        case 3:
                            this.DrawRoad(i, j);
                            this.DrawGreen(i, j);
                            break;
                    }
                }
            }
        }
    }
    gridView.Grid = Grid;
})(gridView || (gridView = {}));
