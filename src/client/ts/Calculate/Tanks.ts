import { Tank } from './Tank';

export class Tanks {
    private tanks: Tank[] = [];

    public getListOfTanks(): Tank[] {
        return this.tanks;
    }

    public addTank(tank: Tank) {
        this.tanks.push(tank);
    }

    public deteleTank(tank: Tank) {
        for (let i: number = 0; i < Tanks.length; i++) {
            if (tank.getName() == this.tanks[i].getName()) {
                this.tanks.splice(i, 1);
            }
        }
    }
}