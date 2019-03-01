import { Grid } from "./GridView";
import { Rounds } from "./Rounds";

export class draw{
    private _map: number[][];
    private _tankCoordinate: number[];
    private _position: string; 
    private _iterForAnimation: number;

    constructor (map: number[][], tankCoordinate: number[], position: string, iter: number){
        this._map = map;
        this._tankCoordinate = tankCoordinate;
        this._position = position;
        this._iterForAnimation = iter;
    }

    public run(map: number[][], tankCoordinate: number[], position: string, iter: number){
        let myGrid = new Grid();
        myGrid.drawGrid(map);
        myGrid.drawBase(6,12);
        myGrid.drawTank(iter, tankCoordinate[0], tankCoordinate[1], position);
    }

}
