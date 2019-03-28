import { Tank } from "./models/tank";
import { SpawnPoint } from "./models/spawn-point";
import { UnitType } from "./models/unit-type";
import { Directoin } from './models/direction';

export class TankFactory {
    public createTanks(x: number, y: number): Tank {
        return new Tank(new SpawnPoint(x ,y , Directoin.Up), UnitType.LowTank, 0.4, 100, UnitType.FastBullet, 1);
    }
}