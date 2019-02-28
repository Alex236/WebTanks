import { Button } from '../EventHandler/enums/Button'
import { Tank } from './Tank';
import { Tanks } from './Tanks';
import { BlockType } from './enums/BlockType';
import { Parameters } from '../Parameters';
import { PressedButtons } from '../EventHandler/PressedButtons'

export class CalculateTanksMove {
    public static doStep(tanks: Tanks, tank: Tank, field: BlockType[][]) {
        console.log("loop");

        if(PressedButtons.getArrowUp()) {
            console.log("go up");
            this.move(Button.up ,tank, field);
        }
        if(PressedButtons.getArrowDown()) {
            console.log("go down");
            this.move(Button.down ,tank, field);
        }
        if(PressedButtons.getArrowLeft()) {
            console.log("go left");
            this.move(Button.left ,tank, field);
        }
        if(PressedButtons.getArrowRight()) {
            console.log("go right");
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
                    //console.log("ok");
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        //console.log(i);
                        //console.log(tank.getTankCoordinates().getX() + i);
                        //console.log(tank.getTankCoordinates().getY() - 1);
                        if (field[tank.getTankCoordinates().getY() - 1][tank.getTankCoordinates().getX() + i] != BlockType.road) {
                            return false;
                        }
                    }
                    //console.log("move");
                    tank.getTankCoordinates().setY(tank.getTankCoordinates().getY() - 1);
                }
                break;
            case Button.down:
                if (tank.getTankCoordinates().getY() < Parameters.fieldHeight - 1) {
                    //console.log("ok");
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        //console.log(i);
                        //console.log(tank.getTankCoordinates().getX() + i);
                        //console.log(tank.getTankCoordinates().getY() + 1);
                        if (field[tank.getTankCoordinates().getY() + Parameters.tankSize + 1][tank.getTankCoordinates().getX() + i] != BlockType.road) {
                            return false;
                        }
                    }
                    //console.log("move");
                    tank.getTankCoordinates().setY(tank.getTankCoordinates().getY() + 1);
                }
                break;
            case Button.left:
                if (tank.getTankCoordinates().getX() > 0) {
                    //console.log("ok");
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        //console.log(i);
                        //console.log(tank.getTankCoordinates().getX() - 1);
                        //console.log(tank.getTankCoordinates().getY() + i);
                        if (field[tank.getTankCoordinates().getY() + i][tank.getTankCoordinates().getX() - 1] != BlockType.road) {
                            return false;
                        }
                    }
                    //console.log("move");
                    tank.getTankCoordinates().setX(tank.getTankCoordinates().getX() - 1);
                }
                break;
            case Button.right:
                if (tank.getTankCoordinates().getX() < Parameters.fieldWidth - 1) {
                    //console.log("ok");
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        //console.log(i);
                        //console.log(tank.getTankCoordinates().getX() + 1);
                        //console.log(tank.getTankCoordinates().getY() + i);
                        if (field[tank.getTankCoordinates().getY() + i][tank.getTankCoordinates().getX() + Parameters.tankSize + 1] != BlockType.road) {
                            return false;
                        }
                    }
                    //console.log("move");
                    tank.getTankCoordinates().setX(tank.getTankCoordinates().getX() + 1);
                }
                break;
        }
        return true;
    }
}