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
import { UnitType } from "./models/unit-type";
import { SpawnPoint } from "./models/spawn-point";
import { Item } from "./models/item";
import { Directoin } from "./models/direction";
import { BulletsFactory } from "./models/bullets-factory";

export class Game {
    private tanks: Tank[] = [];
    private allEvents: Event[] = [];
    private filteredEvents: (() => void)[] = [];
    private bullets: Bullet[] = [];
    private arena: Arena;
    private blocks: Block[] = [];
    private grid: Grid = new Grid();
    private sound: Sound = new Sound();
    private bulletsFactory: BulletsFactory;

    constructor(players: number, arena: Arena) {
        this.bulletsFactory = new BulletsFactory(this.bullets);
        this.arena = arena;
        this.blocks = arena.blocks.slice();
        let spawn = <SpawnPoint>arena.spawnPoints.pop();
        this.tanks.push(new Tank(spawn.currentX, spawn.currentY, UnitType.LowTank, 1, false, false, true, 0.6, spawn.vector, 100, UnitType.FastBullet, 1));
        spawn = <SpawnPoint>arena.spawnPoints.pop();
        this.tanks.push(new Tank(spawn.currentX, spawn.currentY, UnitType.LowTank, 1, false, false, true, 0.6, spawn.vector, 100, UnitType.FastBullet, 1));
        this.sound.run("startGame");
    }

    private calculate() {
        this.deleteUselessEvents();
        this.filteredEvents.forEach(event => event());
        this.filteredEvents.splice(0, this.filteredEvents.length);
    }

    private drawing() {
        this.grid.draw(this.blocks, this.tanks);
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
            if (this.allEvents.length != 0 || this.bullets.length != 0) {
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
                    if (this.canShoot(this.allEvents[i].tank)) {
                        this.bulletsFactory.createBullet(this.allEvents[i].tank);
                    }
                    break;
                case EventType.BulletFlight:
                    break;
                case EventType.EventFromOtherUser:
                    break;
            }
        }
        this.allEvents.splice(0, count);
    }

    private canShoot(tank: Tank): boolean {
        let counter: number = 0;
        this.bullets.forEach(bullet => bullet.owner === tank ? counter++ : {})
        return counter < tank.avaliableShoots;
    }

    private getItems(): Item[] {
        let items: Item[] = [];
        this.blocks.forEach(item => items.push(item));
        this.tanks.forEach(item => items.push(item));
        this.bullets.forEach(item => items.push(item));
        return items;
    }

    private turn(tank: Tank, necessaryDirection: Directoin): boolean {
        if (tank.vector == necessaryDirection) {
            return false;
        }
        switch (tank.vector) {
            case Directoin.Up:
                if (parseFloat(tank.y.toFixed(2)) - Math.trunc(tank.y) <= 0.5 && Directoin.Down !== necessaryDirection) {
                    tank.y = Math.trunc(tank.y);
                }
                else if (parseFloat(tank.y.toFixed(2)) - Math.trunc(tank.y) > 0.5 && Directoin.Down !== necessaryDirection) {
                    tank.y = Math.trunc(tank.y) + 1;
                }
                break;
            case Directoin.Down:
                if (parseFloat(tank.y.toFixed(2)) - Math.trunc(tank.y) >= 0.5 && Directoin.Up !== necessaryDirection) {
                    tank.y = Math.trunc(tank.y) + 1;
                }
                else if (parseFloat(tank.y.toFixed(2)) - Math.trunc(tank.y) < 0.5 && Directoin.Up !== necessaryDirection) {
                    tank.y = Math.trunc(tank.y);
                }
                break;
            case Directoin.Left:
                if (parseFloat(tank.x.toFixed(2)) - Math.trunc(tank.x) <= 0.5 && Directoin.Right !== necessaryDirection) {
                    tank.x = Math.trunc(tank.x);
                }
                else if (parseFloat(tank.x.toFixed(2)) - Math.trunc(tank.x) > 0.5 && Directoin.Right !== necessaryDirection) {
                    tank.x = Math.trunc(tank.x) + 1;
                }
                break;
            case Directoin.Right:
                if (parseFloat(tank.x.toFixed(2)) - Math.trunc(tank.x) >= 0.5 && Directoin.Left !== necessaryDirection) {
                    tank.x = Math.trunc(tank.x) + 1;
                }
                else if (parseFloat(tank.x.toFixed(2)) - Math.trunc(tank.x) < 0.5 && Directoin.Left !== necessaryDirection) {
                    tank.x = Math.trunc(tank.x);
                }
                break;
        }
        tank.vector = necessaryDirection;
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

    // private moveBullet() {
    //     for(let i: number = 0; i < this.bullets.length; i++) {
    //         switch(this.bullets[i].vector) {
    //             case Vector.Up:
    //                 this.bulletUp(this.bullets[i], i);
    //                 break;
    //             case Vector.Down:
    //                 this.bulletDown(this.bullets[i], i);
    //                 break;
    //             case Vector.Left:
    //                 this.bulletLeft(this.bullets[i], i);
    //                 break;
    //             case Vector.Right:
    //                 this.bulletRight(this.bullets[i], i);
    //                 break;
    //         }
    //     }
    // }

    // private bulletUp(bullet: Bullet, bulletNumber: number) {
    //     for(let i: number = 1; i <= Parameters.bulletSpeed; i++) {
    //         if(bullet.y - i < 0) {
    //             this.bullets.splice(bulletNumber, 1);
    //             return;
    //         }
    //         if(this.arena.field[bullet.y - i][bullet.x] == BlockType.Road && this.arena.field[bullet.y - i][bullet.x + 1] == BlockType.Road) {
    //             let breakPoint: boolean = false;
    //             this.tanks.forEach(element => {
    //                 if (bullet.x - 3 <= element.x && element.x <= bullet.x + 1 && element.y + i == bullet.y) {
    //                     this.respawn(element);
    //                     this.bullets.splice(bulletNumber, 1);
    //                     breakPoint = true;
    //                     return;
    //                 }
    //             });
    //             if(breakPoint)
    //             {
    //                 return;
    //             }
    //         }
    //         else {
    //             for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
    //                 if(this.arena.field[bullet.y - i][bullet.x - 1 + j] == BlockType.Brick) {
    //                     this.arena.field[bullet.y - i][bullet.x - 1 + j] = BlockType.Road;
    //                 }
    //             }
    //             this.bullets.splice(bulletNumber, 1);
    //             return;
    //         }        
    //     }
    //     bullet.y -= Parameters.bulletSpeed;
    // }

    // private bulletDown(bullet: Bullet, bulletNumber: number) {
    //     for(let i: number = 1; i <= Parameters.bulletSpeed; i++) {
    //         if(bullet.y + i >= Parameters.fieldHeight - 1) {
    //             this.bullets.splice(bulletNumber, 1);
    //             return;
    //         }
    //         if(this.arena.field[bullet.y + i + 1][bullet.x] == BlockType.Road && this.arena.field[bullet.y + i + 1][bullet.x + 1] == BlockType.Road) {
    //             this.tanks.forEach(element => {
    //                 if (bullet.x - 3 <= element.x && element.x <= bullet.x + 1 && element.y - i - 1 == bullet.y) {//y
    //                     this.respawn(element);
    //                     this.bullets.splice(bulletNumber, 1);
    //                     return;
    //                 }
    //             });
    //         }
    //         else {
    //             for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
    //                 if(this.arena.field[bullet.y + i + 1][bullet.x - 1 + j] == BlockType.Brick) {
    //                     this.arena.field[bullet.y + i + 1][bullet.x - 1 + j] = BlockType.Road;
    //                 }
    //             }
    //             this.bullets.splice(bulletNumber, 1);
    //             return;
    //         }        
    //     }
    //     bullet.y += Parameters.bulletSpeed;
    // }

    // private bulletLeft(bullet: Bullet, bulletNumber: number) {
    //     for(let i: number = 1; i <= Parameters.bulletSpeed; i++) {
    //         if(bullet.x - i < 0) {
    //             this.bullets.splice(bulletNumber, 1);
    //             return;
    //         }
    //         if(this.arena.field[bullet.y][bullet.x - i] == BlockType.Road && this.arena.field[bullet.y + 1][bullet.x - i] == BlockType.Road) {
    //             let breakPoint: boolean = false;
    //             this.tanks.forEach(element => {
    //                 if (bullet.y - 3 <= element.y && element.y <= bullet.y + 1 && element.x + i == bullet.x) {
    //                     this.respawn(element);
    //                     this.bullets.splice(bulletNumber, 1);
    //                     breakPoint = true;
    //                     return;
    //                 }
    //             });
    //             if(breakPoint) {
    //                 return;
    //             }
    //         }
    //         else {
    //             for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
    //                 if(this.arena.field[bullet.y - 1 + j][bullet.x - i] == BlockType.Brick) {
    //                     this.arena.field[bullet.y - 1 + j][bullet.x - i] = BlockType.Road;
    //                 }
    //             }
    //             this.bullets.splice(bulletNumber, 1);
    //             return;
    //         }        
    //     }
    //     bullet.x -= Parameters.bulletSpeed;
    // }

    // private bulletRight(bullet: Bullet, bulletNumber: number) {
    //     for(let i: number = 1; i <= Parameters.bulletSpeed; i++) {
    //         if(bullet.x + i >= Parameters.fieldHeight - 1) {
    //             this.bullets.splice(bulletNumber, 1);
    //             return;
    //         }
    //         if(this.arena.field[bullet.y][bullet.x + i + 1] == BlockType.Road && this.arena.field[bullet.y + 1][bullet.x + i + 1] == BlockType.Road) {
    //             this.tanks.forEach(element => {
    //                 if (bullet.y - 3 <= element.y && element.y <= bullet.y + 1 && element.x - i - 1 == bullet.x) {//y
    //                     this.respawn(element);
    //                     this.bullets.splice(bulletNumber, 1);
    //                     return;
    //                 }
    //             });
    //         }
    //         else {
    //             for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
    //                 if(this.arena.field[bullet.y - 1 + j][bullet.x + i + 1] == BlockType.Brick) {
    //                     this.arena.field[bullet.y - 1 + j][bullet.x + i + 1] = BlockType.Road;
    //                 }
    //             }
    //             this.bullets.splice(bulletNumber, 1);
    //             return;
    //         }        
    //     }
    //     bullet.x += Parameters.bulletSpeed;
    // }

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