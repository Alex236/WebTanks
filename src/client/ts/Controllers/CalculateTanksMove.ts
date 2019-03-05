import { KeyCode } from '../EventHandler/enums/KeyCode'
import { Tank } from '../Models/Tank';
import { BlockType } from '../Models/enums/BlockType';
import { Parameters } from '../Parameters';
import { Vector } from '../Models/enums/Vector';


export class CalculateTanksMove {
    private tanks: Tank[];
    private field: BlockType[][];

    constructor(tanks: Tank[], field: BlockType[][]) {
        this.tanks = tanks;
        this.field = field;
    }

    public doStep() {
        for (let i: number = 0; i < this.tanks.length; i++) {
            this.step(this.tanks[i]);
        }
    }

    private step(tank: Tank) {
        switch (tank.pressedUserButtons[0]) {
            case KeyCode.up:
                if (tank.tankMove != Vector.up) {
                    tank.tankMove = Vector.up;
                }
                else {
                    this.move(KeyCode.up, tank);
                }
                break;
            case KeyCode.down:
                if (tank.tankMove != Vector.down) {
                    tank.tankMove = Vector.down;
                }
                else {
                    this.move(KeyCode.down, tank);
                }
                break;
            case KeyCode.left:
                if (tank.tankMove != Vector.left) {
                    tank.tankMove = Vector.left;
                }
                else {
                    this.move(KeyCode.left, tank);
                }
                break;
            case KeyCode.right:
                if (tank.tankMove != Vector.right) {
                    tank.tankMove = Vector.right;
                }
                else {
                    this.move(KeyCode.right, tank);
                }
                break;
        }
    }

    private move(pressedButton: KeyCode, tank: Tank) {
        switch (pressedButton) {
            case KeyCode.up:
                if (tank.y > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.y - 1][tank.x + i] != BlockType.road) {
                            return;
                        }
                    }
                    tank.y = tank.y - 1;
                }
                break;
            case KeyCode.down:
                if (tank.y < Parameters.fieldHeight - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.y + Parameters.tankSize][tank.x + i] != BlockType.road) {//
                            return;
                        }
                    }
                    tank.y = tank.y + 1;
                }
                break;
            case KeyCode.left:
                if (tank.x > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.y + i][tank.x - 1] != BlockType.road) {
                            return;
                        }
                    }
                    tank.x = tank.x - 1;
                }
                break;
            case KeyCode.right:
                if (tank.x < Parameters.fieldWidth - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.y + i][tank.x + Parameters.tankSize] != BlockType.road) {//
                            return;
                        }
                    }
                    tank.x = tank.x + 1;
                }
                break;
        }
    }
}