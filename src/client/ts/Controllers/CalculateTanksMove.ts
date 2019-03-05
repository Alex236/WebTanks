import { KeyCode } from '../EventHandler/enums/KeyCode'
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
        for (let i: number = 0; i < this.tanks.length; i++) {
            this.step(this.tanks[i]);
        }
    }

    private step(tank: Tank) {
        switch (tank.pressedUserButtons[0]) {
            case KeyCode.up:
                if (tank.tankMove != TankMove.up) {
                    tank.tankMove = TankMove.up;
                }
                else {
                    this.move(KeyCode.up, tank);
                }
                break;
            case KeyCode.down:
                if (tank.tankMove != TankMove.down) {
                    tank.tankMove = TankMove.down;
                }
                else {
                    this.move(KeyCode.down, tank);
                }
                break;
            case KeyCode.left:
                if (tank.tankMove != TankMove.left) {
                    tank.tankMove = TankMove.left;
                }
                else {
                    this.move(KeyCode.left, tank);
                }
                break;
            case KeyCode.right:
                if (tank.tankMove != TankMove.right) {
                    tank.tankMove = TankMove.right;
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