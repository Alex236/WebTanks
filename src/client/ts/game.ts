import { Parameters } from "./parameters"
import { EventType } from "./models/event-type";
import { KeyCode } from "./models/key-code";
import { Grid } from "./view/grid";
import { Arena } from "./models/arena";
import { Event } from "./models/event";
import { Sound } from "./view/sound";
import { Tank } from "./models/tank";
import { Bullet } from "./models/bullet";
import { Block } from "./models/block";
import { Item } from "./models/item";
import { Directoin } from "./models/direction";
import { BulletsFactory } from "./models/bullets-factory";
import { ItemType } from "./models/item-type";

export class Game {
    private tanks: Tank[] = [];
    private allEvents: Event[] = [];
    private filteredEvents: (() => void)[] = [];
    private blocks: Block[] = [];
    private grid: Grid = new Grid();
    private sound: Sound = new Sound();
    private bulletsFactory: BulletsFactory = new BulletsFactory();
    private bullets: Bullet[] = [];

    constructor(tanks: Tank[], arena: Arena) {
        this.blocks = arena.blocks;
        this.tanks = tanks;
        this.sound.run("startGame");
    }

    private calculate() {
        this.deleteUselessEvents();
        this.filteredEvents.forEach(event => event());
        this.filteredEvents.splice(0, this.filteredEvents.length);
        if (this.bullets.length !== 0) {
            this.moveBullet();
        }
    }

    private drawing() {
        this.grid.draw(this.getItems());
    }

    public start() {
        let keys: number[] = [];
        document.onkeydown = (e) => {
            var code = e.which;
            if (keys.indexOf(code) < 0) {
                keys.push(code);
            }
            this.defineEvent(keys);
        };

        document.onkeyup = (e) => {
            keys.splice(keys.indexOf(e.which), 1);
        };

        setInterval(() => {
            this.drawing();
            if (this.allEvents.length !== 0 || this.bullets.length !== 0) {
                this.calculate();
            }
        }, Parameters.timer);
    }

    private defineEvent(keys: number[]) {
        keys.forEach(key => {
            switch (key) {
                case KeyCode.Up:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedUp));
                    break;
                case KeyCode.Down:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedDown));
                    break;
                case KeyCode.Left:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedLeft));
                    break;
                case KeyCode.Right:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedRight));
                    break;
                case KeyCode.Enter:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedSpace));
                    break;
                case KeyCode.W:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedUp));
                    break;
                case KeyCode.S:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedDown));
                    break;
                case KeyCode.A:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedLeft));
                    break;
                case KeyCode.D:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedRight));
                    break;
                case KeyCode.Space:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedSpace));
                    break;
            };
        });
    }

    private deleteUselessEvents() {
        let count = this.allEvents.length;
        let move = new Map();
        for (let i: number = 0; i < count; i++) {
            let temp: number = i;
            switch (this.allEvents[temp].eventType) {
                case EventType.PressedUp:
                    if (move.get(this.allEvents[i].tank) == undefined) {
                        move.set(this.allEvents[i].tank, true);
                        let tempTank: Tank = this.allEvents[i].tank;
                        this.filteredEvents.push(() => this.tankUp(tempTank));
                    }
                    break;
                case EventType.PressedDown:
                    if (move.get(this.allEvents[i].tank) == undefined) {
                        move.set(this.allEvents[i].tank, true);
                        let tempTank: Tank = this.allEvents[i].tank;
                        this.filteredEvents.push(() => this.tankDown(tempTank));
                    }
                    break;
                case EventType.PressedLeft:
                    if (move.get(this.allEvents[i].tank) == undefined) {
                        move.set(this.allEvents[i].tank, true);
                        let tempTank: Tank = this.allEvents[i].tank;
                        this.filteredEvents.push(() => this.tankLeft(tempTank));
                    }
                    break;
                case EventType.PressedRight:
                    if (move.get(this.allEvents[i].tank) == undefined) {
                        move.set(this.allEvents[i].tank, true);
                        let tempTank: Tank = this.allEvents[i].tank;
                        this.filteredEvents.push(() => this.tankRight(tempTank));
                    }
                    break;
                case EventType.PressedSpace:
                    let counter = 0;
                    this.bullets.forEach(bullet => {
                        this.allEvents[i].tank === bullet.owner ? counter++ : {};
                    });
                    counter < this.allEvents[i].tank.avaliableShoots ? this.bullets.push(this.bulletsFactory.createBullet(this.allEvents[i].tank)) : {};
                    break;
                case EventType.BulletFlight:
                    break;
                case EventType.EventFromOtherUser:
                    break;
            }
        }
        this.allEvents.splice(0, count);
    }

    private getItems(): Item[] {
        return (<Item[]>[]).concat(this.blocks, this.tanks, this.bullets);
    }

    private turn(tank: Tank, necessaryDirection: Directoin): boolean {
        if (tank.direction == necessaryDirection) {
            return false;
        }
        switch (tank.direction) {
            case Directoin.Up:
                if (Directoin.Down !== necessaryDirection) {
                    tank.y = Math.round(tank.y);
                }
                break;
            case Directoin.Down:
                if (Directoin.Up !== necessaryDirection) {
                    tank.y = Math.round(tank.y);
                }
                break;
            case Directoin.Left:
                if (Directoin.Right !== necessaryDirection) {
                    tank.x = Math.round(tank.x);
                }
                break;
            case Directoin.Right:
                if (Directoin.Left !== necessaryDirection) {
                    tank.x = Math.round(tank.x);
                }
                break;
        }
        tank.direction = necessaryDirection;
        return true;
    }

    private getAvaliableStep(step: number, avaliableStep: number) {
        return step > avaliableStep ? avaliableStep : step;
    }

    private tankUp(tank: Tank) {
        if (this.turn(tank, Directoin.Up)) {
            return;
        }
        if (tank.y - tank.speed <= 0) {
            tank.y = 0;
            return;
        }
        let step: number = tank.speed;
        this.getItems().forEach(item => {
            step = item.drive ? step : this.getAvaliableStep(step, this.moveUp(item, tank));
        });
        tank.y -= step;
    }

    private moveUp(item: Item, tank: Tank): number {
        let avaliableStep = tank.speed;
        if (item.x === tank.x && item.y === tank.y) {
            return avaliableStep;
        }
        if (tank.y >= item.y + item.size && tank.x < item.x + item.size && tank.x + tank.size > item.x) {
            let distance = tank.y - (item.y + item.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }


    private tankDown(tank: Tank) {
        if (this.turn(tank, Directoin.Down)) {
            return;
        }
        if (tank.y + tank.size + tank.speed >= Parameters.fieldHeight) {
            tank.y = Parameters.fieldHeight - tank.size;
            return;
        }
        let step: number = tank.speed;
        this.getItems().forEach(item => {
            step = item.drive ? step : this.getAvaliableStep(step, this.moveDown(item, tank));
        });
        tank.y += step;
    }

    private moveDown(item: Item, tank: Tank): number {
        let avaliableStep = tank.speed;
        if (item.x === tank.x && item.y === tank.y) {
            return avaliableStep;
        }
        if (tank.y + tank.size <= item.y && tank.x < item.x + item.size && tank.x + tank.size > item.x) {
            let distance = item.y - (tank.y + tank.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }

    private tankLeft(tank: Tank) {
        if (this.turn(tank, Directoin.Left)) {
            return;
        }
        if (tank.x - tank.speed <= 0) {
            tank.x = 0;
            return;
        }
        let step: number = tank.speed;
        this.getItems().forEach(item => {
            step = item.drive ? step : this.getAvaliableStep(step, this.moveLeft(item, tank));
        });
        tank.x -= step;
    }

    private moveLeft(item: Item, tank: Tank): number {
        let avaliableStep = tank.speed;
        if (item.x === tank.x && item.y === tank.y) {
            return avaliableStep;
        }
        if (tank.x >= item.x + item.size && tank.y < item.y + item.size && tank.y + tank.size > item.y) {
            let distance = tank.x - (item.x + item.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }

    private tankRight(tank: Tank) {
        if (this.turn(tank, Directoin.Right)) {
            return;
        }
        if (tank.x + tank.size + tank.speed >= Parameters.fieldWidth) {
            tank.x = Parameters.fieldHeight - tank.size;
            return;
        }
        let step: number = tank.speed;
        this.getItems().forEach(item => {
            step = item.drive ? step : this.getAvaliableStep(step, this.moveRight(item, tank));
        });
        tank.x += step;
    }

    private moveRight(item: Item, tank: Tank): number {
        let avaliableStep = tank.speed;
        if (item.x === tank.x && item.y === tank.y) {
            return avaliableStep;
        }
        if (tank.x + tank.size <= item.x && tank.y < item.y + item.size && tank.y + tank.size > item.y) {
            let distance = item.x - (tank.x + tank.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }

    private moveBullet() {
        this.bullets.forEach((bullet) => {
            this.getItems().sort(this.compareItemsByItemType).forEach(item => {
                if (!((item.x === bullet.x && item.y === bullet.y) || (item.x === bullet.owner.x && item.y === bullet.owner.y))) {
                    switch (bullet.direction) {
                        case Directoin.Up:
                            if(this.bulletUp(bullet, item)) {
                                return;
                            }
                            break;
                        case Directoin.Down:
                            if(this.bulletDown(bullet, item)) {
                                return;
                            }
                            break;
                        case Directoin.Left:
                            if(this.bulletLeft(bullet, item)) {
                                return;
                            }
                            break;
                        case Directoin.Right:
                            if(this.bulletRight(bullet, item)) {
                                return;
                            }
                            break;
                    }
                }
            });
        });
    }

    private compareItemsByItemType(a: Item, b: Item): number {
        return a.itemType > b.itemType ? 1 : (a.itemType === b.itemType ? 0 : -1);
    }

    private damageTank(bullet: Bullet, tank: Tank) {
        tank.health -= bullet.damage;
    }

    private destroyBullet(bullet: Bullet) {
        this.bullets.splice(this.bullets.indexOf(bullet), 1);
    }

    private destroy(bullet: Bullet, item: Item): boolean {
            switch (item.itemType) {
                case ItemType.Tank:
                if (item.x + item.size > bullet.x && bullet.x + bullet.size > item.x && item.y + item.size > bullet.y && bullet.y + bullet.size > item.y) {
                    this.damageTank(bullet, <Tank>item);
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                    return true;
                }
                case ItemType.Bullet:
                if (item.x + item.size >= bullet.x && bullet.x + bullet.size >= item.x && item.y + item.size >= bullet.y && bullet.y + bullet.size >= item.y) {
                    this.destroyBullet(<Bullet>item);
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                    return true;
                }
                case ItemType.Block:
            }
        return false;
    }

    private bulletUp(bullet: Bullet, item: Item): boolean {
        for (let i: number = 0; i < bullet.speed; i++) {
            bullet.y--;
            if (bullet.y < 0) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
                return true;
            }
            if (this.destroy(bullet, item)) {
                return true;
            }
        }
        return false;
    }

    private bulletDown(bullet: Bullet, item: Item): boolean {
        for (let i: number = 0; i < bullet.speed; i++) {
            bullet.y++;
            if (bullet.y > Parameters.fieldHeight - bullet.size) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
                return true;
            }
            if (this.destroy(bullet, item)) {
                return true;
            }
        }
        return false;
    }

    private bulletLeft(bullet: Bullet, item: Item): boolean {
        for (let i: number = 0; i < bullet.speed; i++) {
            bullet.x--;
            if (bullet.x < 0) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
                return true;
            }
            if (this.destroy(bullet, item)) {
                return true;
            }
        }
        return false;
    }

    private bulletRight(bullet: Bullet, item: Item): boolean {
        for (let i: number = 0; i < bullet.speed; i++) {
            bullet.x++;
            if (bullet.x > Parameters.fieldWidth - bullet.size) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
                return true;
            }
            if (this.destroy(bullet, item)) {
                return true;
            }
        }
        return false;
    }

    // private respawn(tank: Tank) {
    //     if (tank.lifes == 0) {
    //         this.sound.run("game_over");
    //         alert("Game Over!");
    //         this.restartGame();
    //     }
    //     else {
    //         tank.lifes--;
    //     }
    //     //tank.x = tank.spawnPointX;
    //     //tank.y = tank.spawnPointY;
    //     //tank.vector = tank.spawnVector;
    // }

    // private restartGame() {
    //     this.tanks.forEach(tank => {
    //         tank.x = tank.spawnPointX;
    //         tank.y = tank.spawnPointY;
    //         tank.vector = tank.spawnVector;
    //         tank.lifes = 5;
    //     });
    // }
}