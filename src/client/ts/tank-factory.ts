import { Tank } from "./models/tank";
import { SpawnPoint } from "./models/spawn-point";
import { Arena } from "./models/arena";
import { UnitType } from "./models/unit-type";
import { ItemType } from "./models/item-type";
import { Directoin } from './models/direction';

export class TankFactory {
    public createTanks(): Tank {
        return new Tank(new SpawnPoint(3, 5, Directoin.Up), 4, UnitType.LowTank, ItemType.Tank, 0.4, 100, UnitType.FastBullet, 1);
    }
}