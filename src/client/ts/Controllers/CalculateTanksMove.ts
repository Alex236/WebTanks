import { Button } from '../EventHandler/enums/Button'
import { Tank } from '../Models/Tank';
import { BlockType } from '../Models/enums/BlockType';
import { Parameters } from '../Parameters';
import { TankMove } from '../Models/enums/TankMove';


export class CalculateTanksMove {
    private tanks: Tank[];
    private field: BlockType[][];

    constructor(tanks: Tank[], field: BlockType[][]) {
        this.tanks = tanks;
        this.field = field;
    }

    public doStep() {
        for(let i: number = 0; i < this.tanks.length; i++) {
            this.step(this.tanks[i]);
        }        
    }

    private step(tank: Tank) {
        if(tank.getPressedButtons().getArrowUp()) {
            this.move(Button.up ,tank);
            tank.setMove(TankMove.up);
        }
        if(tank.getPressedButtons().getArrowDown()) {
            this.move(Button.down , tank);
            tank.setMove(TankMove.down);
        }
        if(tank.getPressedButtons().getArrowLeft()) {
            this.move(Button.left , tank);
            tank.setMove(TankMove.left);
        }
        if(tank.getPressedButtons().getArrowRight()) {
            this.move(Button.right , tank);
            tank.setMove(TankMove.right);
        }
    }

    private move(pressedButton: Button, tank: Tank): boolean {
        switch (pressedButton) {
            case Button.up:
                if (tank.y > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.y - 1][tank.x + i] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.y = tank.y - 1;
                }
                break;
            case Button.down:
                if (tank.y < Parameters.fieldHeight - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.y + Parameters.tankSize][tank.x + i] != BlockType.road) {//
                            return false;
                        }
                    }
                    tank.y = tank.y + 1;
                }
                break;
            case Button.left:
                if (tank.x > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.y + i][tank.x - 1] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.x = tank.x - 1;
                }
                break;
            case Button.right:
                if (tank.x < Parameters.fieldWidth - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.y + i][tank.x + Parameters.tankSize] != BlockType.road) {//
                            return false;
                        }
                    }
                    tank.x = tank.x + 1;
                }
                break;
        }
        return true;
    }
}