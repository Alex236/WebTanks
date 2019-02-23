import { Tank } from './Tank';

export class Tanks {
    private tanks: Tank[] = [];

    public get ListOfTanks(): Tank[] {
        return this.tanks;
    }
}