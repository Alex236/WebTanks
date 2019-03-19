import { Tank } from "./tank";
import { SpawnPoint } from "./spawn-point";
import { Arena } from "./arena";
import { UnitType } from "./unit-type";
import { ItemType } from "./item-type";

export class TankFactory {
    public createTanks(players: number, arena: Arena): Tank[] {
        let tanks: Tank[] = [];
        for(let i = 0; i < players; i++) {
            tanks.push(new Tank(<SpawnPoint>arena.spawnPoints.pop(), UnitType.LowTank, ItemType.Tank, false, false, true, 0.4, 100, UnitType.FastBullet, 1));
        }
        return tanks;
    }
}