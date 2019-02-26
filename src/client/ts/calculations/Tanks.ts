///<reference path="./Tank.ts" />

class Tanks {
    private tanks: Tank[] = [];

    public get ListOfTanks(): Tank[] {
        return this.tanks;
    }

    public addTank(tank: Tank)
    {
        this.tanks.push(tank);
    }

    public deteleTank(tank: Tank)
    {
        for(let i: number = 0; i < Tanks.length; i++)
        {
            if(tank.name == this.tanks[i].name)
            {
                this.tanks.splice(i,1);
            }
        }
    }
}