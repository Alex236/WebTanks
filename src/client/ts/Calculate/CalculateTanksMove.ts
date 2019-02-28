import { Button } from '../EventHandler/enums/Button'
import { Tank } from './Tank';
import { Tanks } from './Tanks';
import { BlockType } from './enums/BlockType';
import { Parameters } from '../Parameters';
import { PressedButtons } from '../EventHandler/PressedButtons'

export class CalculateTanksMove {
    public static doStep(tanks: Tanks, tank: Tank, field: BlockType[][]) {
        if(PressedButtons.getArrowUp()) {
            this.move(Button.up ,tank, field);
        }
        if(PressedButtons.getArrowDown()) {
            this.move(Button.down ,tank, field);
        }
        if(PressedButtons.getArrowLeft()) {
            this.move(Button.left ,tank, field);
        }
        if(PressedButtons.getArrowRight()) {
            this.move(Button.right ,tank, field);
        }
        if(PressedButtons.getSpace()) {
            //shoot
        }
    }

    private static move(pressedButton: Button, tank: Tank, field: BlockType[][]): boolean {
        switch (pressedButton) {
            case Button.up:
                if (tank.getTankCoordinates().getY() > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (field[tank.getTankCoordinates().getY() - 1][tank.getTankCoordinates().getX() + i] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.getTankCoordinates().setY(tank.getTankCoordinates().getY() - 1);
                }
                break;
            case Button.down:
                if (tank.getTankCoordinates().getY() < Parameters.fieldHeight - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (field[tank.getTankCoordinates().getY() + Parameters.tankSize + 1][tank.getTankCoordinates().getX() + i] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.getTankCoordinates().setY(tank.getTankCoordinates().getY() + 1);
                }
                break;
            case Button.left:
                if (tank.getTankCoordinates().getX() > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (field[tank.getTankCoordinates().getY() + i][tank.getTankCoordinates().getX() - 1] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.getTankCoordinates().setX(tank.getTankCoordinates().getX() - 1);
                }
                break;
            case Button.right:
                if (tank.getTankCoordinates().getX() < Parameters.fieldWidth - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (field[tank.getTankCoordinates().getY() + i][tank.getTankCoordinates().getX() + Parameters.tankSize + 1] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.getTankCoordinates().setX(tank.getTankCoordinates().getX() + 1);
                }
                break;
        }
        return true;
    }
}