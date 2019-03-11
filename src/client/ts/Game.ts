import { Parameters } from "./parameters"
import { EventType } from "./models/event-type";
import { KeyCode } from "./models/key-code";
import { BlockType } from "./models/block-type";
import { Grid } from "./view/grid";
import { Bullet } from "./models/bullet";
import { Tank } from "./models/tank";
import { Vector } from "./models/vector"
import { Arena } from "./models/arena";
import { Event } from "./models/event";
import { TankType } from "./models/tank-type";

export class Game {
    private tanks: Tank[] = [];
    private allEvents: Event[] = [];
    private filteredEvents: Event[] = [];
    private bullets: Bullet[] = [];
    private arena: Arena;
    private grid: Grid = new Grid();
    private sound = new Audio();

    constructor(players: number, arena: Arena) {
        this.sound.src = require("../assets/startGame.mp3");
        this.sound.play();
        this.tanks.push(new Tank(TankType.User, <number>arena.spawnPoint.pop(), <number>arena.spawnPoint.pop(), <Vector>arena.spawnVector.pop()));
        this.tanks.push(new Tank(TankType.Enemy, <number>arena.spawnPoint.pop(), <number>arena.spawnPoint.pop(), <Vector>arena.spawnVector.pop()));
        this.arena = arena;
    }

    private calculate() {
        this.deleteUselessEvents();
        if(this.bullets.length != 0) {
            this.moveBullet();
        }
        this.filteredEvents.forEach(event => this.move(event));
        this.filteredEvents.splice(0, this.filteredEvents.length);
    }

    private moveBullet() {
        for(let i: number = 0; i < this.bullets.length; i++) {
            switch(this.bullets[i].vector) {
                case Vector.Up:
                    this.bulletUp(this.bullets[i], i);
                    break;
                case Vector.Down:
                    this.bulletDown(this.bullets[i], i);
                    break;
                case Vector.Left:
                    this.bulletLeft(this.bullets[i], i);
                    break;
                case Vector.Right:
                    this.bulletRight(this.bullets[i], i);
                    break;
            }
        }
    }

    private bulletUp(bullet: Bullet, bulletNumber: number) {
        for(let i: number = 1; i <= Parameters.bulletSpeed; i++) {
            if(bullet.y - i < 0) {
                this.bullets.splice(bulletNumber, 1);
                return;
            }
            if(this.arena.field[bullet.y - i][bullet.x] == BlockType.Road && this.arena.field[bullet.y - i][bullet.x + 1] == BlockType.Road) {
                let breakPoint: boolean = false;
                this.tanks.forEach(element => {
                    if (bullet.x - 3 <= element.x && element.x <= bullet.x + 1 && element.y + i == bullet.y) {
                        this.respawn(element);
                        this.bullets.splice(bulletNumber, 1);
                        breakPoint = true;
                        return;
                    }
                });
                if(breakPoint)
                {
                    return;
                }
            }
            else {
                for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
                    if(this.arena.field[bullet.y - i][bullet.x - 1 + j] == BlockType.Brick) {
                        this.arena.field[bullet.y - i][bullet.x - 1 + j] = BlockType.Road;
                    }
                }
                this.bullets.splice(bulletNumber, 1);
                return;
            }        
        }
        bullet.y -= Parameters.bulletSpeed;
    }

    private bulletDown(bullet: Bullet, bulletNumber: number) {
        for(let i: number = 1; i <= Parameters.bulletSpeed; i++) {
            if(bullet.y + i >= Parameters.fieldHeight - 1) {
                this.bullets.splice(bulletNumber, 1);
                return;
            }
            if(this.arena.field[bullet.y + i + 1][bullet.x] == BlockType.Road && this.arena.field[bullet.y + i + 1][bullet.x + 1] == BlockType.Road) {
                this.tanks.forEach(element => {
                    if (bullet.x - 3 <= element.x && element.x <= bullet.x + 1 && element.y - i - 1 == bullet.y) {//y
                        this.respawn(element);
                        this.bullets.splice(bulletNumber, 1);
                        return;
                    }
                });
            }
            else {
                for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
                    if(this.arena.field[bullet.y + i + 1][bullet.x - 1 + j] == BlockType.Brick) {
                        this.arena.field[bullet.y + i + 1][bullet.x - 1 + j] = BlockType.Road;
                    }
                }
                this.bullets.splice(bulletNumber, 1);
                return;
            }        
        }
        bullet.y += Parameters.bulletSpeed;
    }

    private bulletLeft(bullet: Bullet, bulletNumber: number) {
        for(let i: number = 1; i <= Parameters.bulletSpeed; i++) {
            if(bullet.x - i < 0) {
                this.bullets.splice(bulletNumber, 1);
                return;
            }
            if(this.arena.field[bullet.y][bullet.x - i] == BlockType.Road && this.arena.field[bullet.y + 1][bullet.x - i] == BlockType.Road) {
                let breakPoint: boolean = false;
                this.tanks.forEach(element => {
                    if (bullet.y - 3 <= element.y && element.y <= bullet.y + 1 && element.x + i == bullet.x) {
                        this.respawn(element);
                        this.bullets.splice(bulletNumber, 1);
                        breakPoint = true;
                        return;
                    }
                });
                if(breakPoint) {
                    return;
                }
            }
            else {
                for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
                    if(this.arena.field[bullet.y - 1 + j][bullet.x - i] == BlockType.Brick) {
                        this.arena.field[bullet.y - 1 + j][bullet.x - i] = BlockType.Road;
                    }
                }
                this.bullets.splice(bulletNumber, 1);
                return;
            }        
        }
        bullet.x -= Parameters.bulletSpeed;
    }

    private bulletRight(bullet: Bullet, bulletNumber: number) {
        for(let i: number = 1; i <= Parameters.bulletSpeed; i++) {
            if(bullet.x + i >= Parameters.fieldHeight - 1) {
                this.bullets.splice(bulletNumber, 1);
                return;
            }
            if(this.arena.field[bullet.y][bullet.x + i + 1] == BlockType.Road && this.arena.field[bullet.y + 1][bullet.x + i + 1] == BlockType.Road) {
                this.tanks.forEach(element => {
                    if (bullet.y - 3 <= element.y && element.y <= bullet.y + 1 && element.x - i - 1 == bullet.x) {//y
                        this.respawn(element);
                        this.bullets.splice(bulletNumber, 1);
                        return;
                    }
                });
            }
            else {
                for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
                    if(this.arena.field[bullet.y - 1 + j][bullet.x + i + 1] == BlockType.Brick) {
                        this.arena.field[bullet.y - 1 + j][bullet.x + i + 1] = BlockType.Road;
                    }
                }
                this.bullets.splice(bulletNumber, 1);
                return;
            }        
        }
        bullet.x += Parameters.bulletSpeed;
    }

    private move(event: Event) {
        switch (event.eventType) {
            case EventType.PressedUp:
                this.tankUp(event.tank);
                break;
            case EventType.PressedDown:
                this.tankDown(event.tank);
                break;
            case EventType.PressedLeft:
                this.tankLeft(event.tank);
                break;
            case EventType.PressedRight:
                this.tankRight(event.tank);
                break;
            case EventType.PressedSpace:
                this.shoot(event.tank)
                break;
        }
    }

    private drawing() {
        this.grid.draw(this.arena.field, this.tanks, this.bullets);
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
            }
        });
    }

    private deleteUselessEvents() {
        let count = this.allEvents.length;
        for (let i: number = 0; i < count; i++) {
            let temp: number = i;
            switch (this.allEvents[temp].eventType) {
                case EventType.PressedUp:
                    if (!this.allEvents[temp].tank.move) {
                        this.allEvents[temp].tank.move = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.PressedDown:
                    if (!this.allEvents[temp].tank.move) {
                        this.allEvents[temp].tank.move = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.PressedLeft:
                    if (!this.allEvents[temp].tank.move) {
                        this.allEvents[temp].tank.move = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.PressedRight:
                    if (!this.allEvents[temp].tank.move) {
                        this.allEvents[temp].tank.move = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.PressedSpace:
                    if (!this.allEvents[temp].tank.shoot) {
                        this.allEvents[temp].tank.shoot = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.BulletFlight:
                    break;
                case EventType.EventFromOtherUser:
                    break;
            }
        }
        this.allEvents.splice(0, count);
        this.tanks.forEach((tank) => {
            tank.shoot = false;
            tank.move = false
        });
    }

    private respawn(tank: Tank) {
        this.sound.src = require("../assets/killSomeone.mp3");
        this.sound.play();
        if(tank.lifes == 0) {
            this.sound.src = require("../assets/game_over.mp3");
            this.sound.play();
            alert("Game Over!",);
            this.restartGame();
        }
        else {
            tank.lifes--;
        }
        //tank.x = tank.spawnPointX;
        //tank.y = tank.spawnPointY;
        //tank.vector = tank.spawnVector;
    }

    private restartGame() {
        this.tanks.forEach(tank => {
            tank.x = tank.spawnPointX;
            tank.y = tank.spawnPointY;
            tank.vector = tank.spawnVector;
            tank.lifes = 5;
        });
    }

    private shootUp(tank: Tank) {
        if (tank.y > 0) {
            this.bullets.push(new Bullet(tank.x + 1, tank.y - 1, Vector.Up));
            if (this.arena.field[tank.y - 1][tank.x + 1] == BlockType.Road && this.arena.field[tank.y - 1][tank.x + 2] == BlockType.Road) {
                this.tanks.forEach(element => {
                    if (tank.x - 2 <= element.x && element.x <= tank.x + 2 && element.y + 4 == tank.y) {
                        this.respawn(element);
                        this.bullets.pop();
                    }
                });
            }
            else {
                for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
                    if (this.arena.field[tank.y - 1][tank.x + i] == BlockType.Brick) {
                        this.arena.field[tank.y - 1][tank.x + i] = BlockType.Road;
                    }
                }
                this.bullets.pop();
            }
        }
    }

    private shootDown(tank: Tank) {
        if (tank.y < Parameters.fieldHeight - Parameters.tankSize) {
            this.bullets.push(new Bullet(tank.x + 1, tank.y + 3, Vector.Down));
            if (this.arena.field[tank.y + 4][tank.x + 1] == BlockType.Road && this.arena.field[tank.y + 4][tank.x + 2] == BlockType.Road) {
                this.tanks.forEach(element => {
                    if (tank.x - 2 <= element.x && element.x <= tank.x + 2 && element.y - 4 == tank.y) {
                        this.respawn(element);
                        this.bullets.pop();
                    }
                });
            }
            else {
                for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
                    if (this.arena.field[tank.y + 4][tank.x + i] == BlockType.Brick) {
                        this.arena.field[tank.y + 4][tank.x + i] = BlockType.Road;
                    }
                }
                this.bullets.pop();
            }
        }
    }

    private shootLeft(tank: Tank) {
        if (tank.x > 0) {
            this.bullets.push(new Bullet(tank.x - 1, tank.y + 1, Vector.Left));
            if (this.arena.field[tank.y + 1][tank.x - 1] == BlockType.Road && this.arena.field[tank.y + 2][tank.x - 1] == BlockType.Road) {
                this.tanks.forEach(element => {
                    if (tank.y - 2 <= element.y && element.y <= tank.y + 2 && element.x + 4 == tank.x) {
                        this.respawn(element);
                        this.bullets.pop();
                    }
                });
            }
            else {
                for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
                    if (this.arena.field[tank.y + i][tank.x - 1] == BlockType.Brick) {
                        this.arena.field[tank.y + i][tank.x - 1] = BlockType.Road;
                    }
                }
                this.bullets.pop();
            }
        }
    }

    private shootRight(tank: Tank) {
        if (tank.y < Parameters.fieldWidth - Parameters.tankSize) {
            this.bullets.push(new Bullet(tank.x + 3, tank.y + 1, Vector.Right));
            if (this.arena.field[tank.y + 1][tank.x + 4] == BlockType.Road && this.arena.field[tank.y + 2][tank.x + 4] == BlockType.Road) {
                this.tanks.forEach(element => {
                    if (tank.y - 2 <= element.y && element.y <= tank.y + 2 && element.x - 4 == tank.x) {
                        this.respawn(element);
                        this.bullets.pop();
                    }
                });
            }
            else {
                for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
                    if (this.arena.field[tank.y + i][tank.x + 4] == BlockType.Brick) {
                        this.arena.field[tank.y + i][tank.x + 4] = BlockType.Road;
                    }
                }
                this.bullets.pop();
            }
        }
    }

    private shoot(tank: Tank) {
        switch (tank.vector) {
            case Vector.Up:
                this.shootUp(tank);
                break;
            case Vector.Down:
                this.shootDown(tank);
                break;
            case Vector.Left:
                this.shootLeft(tank);
                break;
            case Vector.Right:
                this.shootRight(tank);
                break;
        }
    }

    private tankUp(tank: Tank) {
        if (tank.vector != Vector.Up) {
            tank.vector = Vector.Up;
        }
        else {
            if (tank.y > 0) {
                if(Math.max(...this.arena.field[tank.y - 1].slice(tank.x, tank.x + Parameters.tankSize)) == 0) {
                    tank.y--;
                }
            }
        }
    }

    private tankDown(tank: Tank) {
        if (tank.vector != Vector.Down) {
            tank.vector = Vector.Down;
        }
        else {
            if (tank.y < Parameters.fieldHeight - Parameters.tankSize) {
                if(Math.max(...this.arena.field[tank.y + Parameters.tankSize].slice(tank.x, tank.x + Parameters.tankSize)) == 0) {
                    tank.y++;
                }
            }
        }
    }

    private tankLeft(tank: Tank) {
        if (tank.vector != Vector.Left) {
            tank.vector = Vector.Left;
        }
        else {
            if (tank.x > 0) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.arena.field[tank.y + i][tank.x - 1] != BlockType.Road) {
                        return;
                    }
                }
                let counter: number = 0;
                this.tanks.forEach((element) => {
                    if (!(element.x == tank.x && element.y == tank.y)) {
                        if (element.x + 4 < tank.x || tank.x + 3 < element.x || element.y + 3 < tank.y || tank.y + 3 < element.y) {
                            counter++;
                        }
                    }
                });
                if (counter == this.tanks.length - 1) {
                    tank.x--;
                }
            }
        }
    }

    private tankRight(tank: Tank) {
        if (tank.vector != Vector.Right) {
            tank.vector = Vector.Right;
        }
        else {
            if (tank.x < Parameters.fieldWidth - Parameters.tankSize) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.arena.field[tank.y + i][tank.x + Parameters.tankSize] != BlockType.Road) {
                        return;
                    }
                }
                let counter: number = 0;
                this.tanks.forEach((element) => {
                    if (!(element.x == tank.x && element.y == tank.y)) {
                        if (element.x + 3 < tank.x || tank.x + 4 < element.x || element.y + 3 < tank.y || tank.y + 3 < element.y) {
                            counter++;
                        }
                    }
                });
                if (counter == this.tanks.length - 1) {
                    tank.x++;
                }
            }
        }
    }
}