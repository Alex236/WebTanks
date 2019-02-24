import { Button } from '../EventHandler/enums/Button'
import { Tank } from './Tank';
import { Tanks } from './Tanks';
import { BlockType } from './enums/BlockType';
import { Parameters } from '../Parameters';

export class Calculate {
    public static doStep(buttons: Button[], tanks: Tanks, tank: Tank, field: BlockType[][]) {
        if(buttons == null) return;
        for (let i: number = 0; i < buttons.length; i++) {
            if (buttons[i] == Button.space) {
                //shoot
            }
            else {
                if(!Calculate.move(buttons[i], tank, field))
                {
                    buttons.splice(i,1);
                }
            }
        }
    }

    private static move(pressedButton: Button, tank: Tank, field: BlockType[][]): boolean {
        switch (pressedButton) {
            case Button.up:
                if (tank.tankCoordinates.Y > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (field[tank.tankCoordinates.Y - 1][tank.tankCoordinates.X + i] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.tankCoordinates.Y = tank.tankCoordinates.Y - 1;
                }
                break;
            case Button.down:
                if (tank.tankCoordinates.Y < Parameters.fieldHeight - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (field[tank.tankCoordinates.Y + 1][tank.tankCoordinates.X + i] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.tankCoordinates.Y = tank.tankCoordinates.Y + 1;
                }
                break;
            case Button.left:
                if (tank.tankCoordinates.X > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (field[tank.tankCoordinates.Y + i][tank.tankCoordinates.X - 1] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.tankCoordinates.X = tank.tankCoordinates.X - 1;
                }
                break;
            case Button.right:
                if (tank.tankCoordinates.X < Parameters.fieldWidth - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (field[tank.tankCoordinates.Y + i][tank.tankCoordinates.X - 1] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.tankCoordinates.X = tank.tankCoordinates.X + 1;
                }
                break;
        }
        return true;
    }
}