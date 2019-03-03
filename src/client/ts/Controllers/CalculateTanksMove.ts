import { Button } from '../EventHandler/enums/Button'
import { Tank } from '../Models/Tank';
import { BlockType } from '../Models/enums/BlockType';
import { Parameters } from '../Parameters';
import { Users } from '../CollectionsOfModels/Users';
import { User } from '../Models/User';
import { TankMove } from '../Models/enums/TankMove';


export class CalculateTanksMove {
    private users: Users;
    private field: BlockType[][];

    constructor(users: Users, field: BlockType[][]) {
        this.users = users;
        this.field = field;
    }

    public doStep() {
        for(let i: number = 0; i < this.users.getListOfUsers().length; i++) {
            this.step(this.users.getListOfUsers()[i]);
        }        
    }

    private step(user: User) {
        if(user.getPressedButtons().getArrowUp()) {
            this.move(Button.up ,user.getTank());
            user.getTank().setMove(TankMove.up);
        }
        if(user.getPressedButtons().getArrowDown()) {
            this.move(Button.down , user.getTank());
            user.getTank().setMove(TankMove.down);
        }
        if(user.getPressedButtons().getArrowLeft()) {
            this.move(Button.left , user.getTank());
            user.getTank().setMove(TankMove.left);
        }
        if(user.getPressedButtons().getArrowRight()) {
            this.move(Button.right , user.getTank());
            user.getTank().setMove(TankMove.right);
        }
    }

    private move(pressedButton: Button, tank: Tank): boolean {
        switch (pressedButton) {
            case Button.up:
                if (tank.getTankCoordinates().getY() > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.getTankCoordinates().getY() - 1][tank.getTankCoordinates().getX() + i] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.getTankCoordinates().setY(tank.getTankCoordinates().getY() - 1);
                }
                break;
            case Button.down:
                if (tank.getTankCoordinates().getY() < Parameters.fieldHeight - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.getTankCoordinates().getY() + Parameters.tankSize][tank.getTankCoordinates().getX() + i] != BlockType.road) {//
                            return false;
                        }
                    }
                    tank.getTankCoordinates().setY(tank.getTankCoordinates().getY() + 1);
                }
                break;
            case Button.left:
                if (tank.getTankCoordinates().getX() > 0) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.getTankCoordinates().getY() + i][tank.getTankCoordinates().getX() - 1] != BlockType.road) {
                            return false;
                        }
                    }
                    tank.getTankCoordinates().setX(tank.getTankCoordinates().getX() - 1);
                }
                break;
            case Button.right:
                if (tank.getTankCoordinates().getX() < Parameters.fieldWidth - 1) {
                    for (let i: number = 0; i < Parameters.tankSize; i++) {
                        if (this.field[tank.getTankCoordinates().getY() + i][tank.getTankCoordinates().getX() + Parameters.tankSize] != BlockType.road) {//
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