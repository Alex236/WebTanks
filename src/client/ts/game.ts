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


export class Game {
    private tanks: Tank[] = [];
    private allEvents: Event[] = [];
    private filteredEvents: (() => void)[] = [];
    private bullets: Bullet[] = [];
    private arena: Arena;
    private blocks: Block[] = [];
    private grid: Grid = new Grid();
    private sound: Sound = new Sound();
    private sprites: Map<Block, HTMLImageElement> = new Map();

    constructor(players: number, arena: Arena) {
        this.arena = arena;
        this.blocks = arena.blocks.slice();
        let spawn = <SpawnPoint>arena.spawnPoints.pop();
        this.tanks.push(new Tank(spawn.currentX, spawn.currentY, UnitType.LowTank, 1, 1, spawn.vector, 100, UnitType.FastBullet, 1));
        this.sound.run("startGame");
    }

    private calculate() {
        this.deleteUselessEvents();
        this.filteredEvents.forEach(event => event());
        this.filteredEvents.splice(0, this.filteredEvents.length);
    }

    private drawing() {
        //this.grid.draw(this.arena.field, this.tanks, this.bullets);
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
            console.log("cycle");
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
                    console.log("pressed up");
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedUp));
                    console.log("allEvents: " + this.allEvents.length);
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
                    // if (!this.allEvents[temp].tank.shoot) {
                    //     this.allEvents[temp].tank.shoot = true;
                    //     this.filteredEvents.push(this.allEvents[temp]);
                    // }
                    break;
                case EventType.BulletFlight:
                    break;
                case EventType.EventFromOtherUser:
                    break;
            }
        }
        this.allEvents.splice(0, count);
    }

    private tankUp(tank: Tank) {
        let step: number = tank.speed;
        let avaliableStep: number = tank.speed;
        let items: Item[] = [];
        items.concat(this.blocks, this.bullets, this.tanks).forEach(item => {
            avaliableStep = this.moveUp(item, tank);
            if (step > avaliableStep) {
                step = avaliableStep;
            }
        });
        tank.y -= avaliableStep;
    }

    private moveUp(item: Item, tank: Tank): number {
        let avaliableStep = tank.size;
        if (tank.y > item.y + item.size && item.x + item.size > tank.x && tank.x + tank.size < item.x) {
            let distance = tank.y - (item.y + item.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }


    private tankDown(tank: Tank) {

    }

    private tankLeft(tank: Tank) {

    }

    private tankRight(tank: Tank) {

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




    // private shootUp(tank: Tank) {
    //     if (tank.y > 0) {
    //         this.bullets.push(new Bullet(tank.x + 1, tank.y - 1, Vector.Up));
    //         if (this.arena.field[tank.y - 1][tank.x + 1] == BlockType.Road && this.arena.field[tank.y - 1][tank.x + 2] == BlockType.Road) {
    //             this.tanks.forEach(element => {
    //                 if (tank.x - 2 <= element.x && element.x <= tank.x + 2 && element.y + 4 == tank.y) {
    //                     this.respawn(element);
    //                     this.bullets.pop();
    //                 }
    //             });
    //         }
    //         else {
    //             for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
    //                 if (this.arena.field[tank.y - 1][tank.x + i] == BlockType.Brick) {
    //                     this.arena.field[tank.y - 1][tank.x + i] = BlockType.Road;
    //                 }
    //             }
    //             this.bullets.pop();
    //         }
    //     }
    // }

    // private shootDown(tank: Tank) {
    //     if (tank.y < Parameters.fieldHeight - Parameters.tankSize) {
    //         this.bullets.push(new Bullet(tank.x + 1, tank.y + 3, Vector.Down));
    //         if (this.arena.field[tank.y + 4][tank.x + 1] == BlockType.Road && this.arena.field[tank.y + 4][tank.x + 2] == BlockType.Road) {
    //             this.tanks.forEach(element => {
    //                 if (tank.x - 2 <= element.x && element.x <= tank.x + 2 && element.y - 4 == tank.y) {
    //                     this.respawn(element);
    //                     this.bullets.pop();
    //                 }
    //             });
    //         }
    //         else {
    //             for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
    //                 if (this.arena.field[tank.y + 4][tank.x + i] == BlockType.Brick) {
    //                     this.arena.field[tank.y + 4][tank.x + i] = BlockType.Road;
    //                 }
    //             }
    //             this.bullets.pop();
    //         }
    //     }
    // }

    // private shootLeft(tank: Tank) {
    //     if (tank.x > 0) {
    //         this.bullets.push(new Bullet(tank.x - 1, tank.y + 1, Vector.Left));
    //         if (this.arena.field[tank.y + 1][tank.x - 1] == BlockType.Road && this.arena.field[tank.y + 2][tank.x - 1] == BlockType.Road) {
    //             this.tanks.forEach(element => {
    //                 if (tank.y - 2 <= element.y && element.y <= tank.y + 2 && element.x + 4 == tank.x) {
    //                     this.respawn(element);
    //                     this.bullets.pop();
    //                 }
    //             });
    //         }
    //         else {
    //             for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
    //                 if (this.arena.field[tank.y + i][tank.x - 1] == BlockType.Brick) {
    //                     this.arena.field[tank.y + i][tank.x - 1] = BlockType.Road;
    //                 }
    //             }
    //             this.bullets.pop();
    //         }
    //     }
    // }

    // private shootRight(tank: Tank) {
    //     if (tank.y < Parameters.fieldWidth - Parameters.tankSize) {
    //         this.bullets.push(new Bullet(tank.x + 3, tank.y + 1, Vector.Right));
    //         if (this.arena.field[tank.y + 1][tank.x + 4] == BlockType.Road && this.arena.field[tank.y + 2][tank.x + 4] == BlockType.Road) {
    //             this.tanks.forEach(element => {
    //                 if (tank.y - 2 <= element.y && element.y <= tank.y + 2 && element.x - 4 == tank.x) {
    //                     this.respawn(element);
    //                     this.bullets.pop();
    //                 }
    //             });
    //         }
    //         else {
    //             for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
    //                 if (this.arena.field[tank.y + i][tank.x + 4] == BlockType.Brick) {
    //                     this.arena.field[tank.y + i][tank.x + 4] = BlockType.Road;
    //                 }
    //             }
    //             this.bullets.pop();
    //         }
    //     }
    // }

    // private shoot(tank: Tank) {
    //     switch (tank.vector) {
    //         case Vector.Up:
    //             this.shootUp(tank);
    //             break;
    //         case Vector.Down:
    //             this.shootDown(tank);
    //             break;
    //         case Vector.Left:
    //             this.shootLeft(tank);
    //             break;
    //         case Vector.Right:
    //             this.shootRight(tank);
    //             break;
    //     }
    // }

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

}