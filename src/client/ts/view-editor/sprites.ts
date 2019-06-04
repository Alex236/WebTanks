import { Block } from "./block";
export class Sprites {

    public all: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();

    constructor(){
        let blocks = Object.keys(Block).slice(Object.keys(Block).length/2, Object.keys(Block).length);
        blocks.forEach(block => {
            let img = new Image();
            img.src = require("../../assets/sprites/" + block + ".svg");
            this.all.set(block, img);
        });
        let imgRubber = new Image();
        imgRubber.src = require("../../assets/sprites/Rubber.svg");
        this.all.set("Rubber", imgRubber);

        let imgCreateButton = new Image();
        imgCreateButton.src = require("../../assets/sprites/CreateButton.svg");
        this.all.set("CreateButton", imgCreateButton);
    }
}