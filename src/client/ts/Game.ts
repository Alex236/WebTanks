import { Parameters } from "./Parameters"
import { EventType } from "./EventHandler/enums/EventType";
import { KeyCode } from "./EventHandler/enums/KeyCode";
import { BlockType } from "./Models/enums/BlockType";
import { Grid } from "./View/Grid";
import { Bullet } from "./Models/Bullet";
import { Tank } from "./Models/Tank";
import { Vector } from "./Models/enums/Vector"
import { Arena } from "./Models/Arena";
import { Event } from "./EventHandler/Event";
import { TankType } from "./Models/enums/TankType";

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
        this.tanks.push(new Tank(TankType.user, <number>arena.spawnPoint.pop(), <number>arena.spawnPoint.pop(), <Vector>arena.spawnVector.pop()));
        this.tanks.push(new Tank(TankType.enemy, <number>arena.spawnPoint.pop(), <number>arena.spawnPoint.pop(), <Vector>arena.spawnVector.pop()));
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
                case Vector.up:
                    this.bulletUp(this.bullets[i], i);
                    break;
                case Vector.down:
                    this.bulletDown(this.bullets[i], i);
                    break;
                case Vector.left:
                    this.bulletLeft(this.bullets[i], i);
                    break;
                case Vector.right:
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
            if(this.arena.field[bullet.y - i][bullet.x] == BlockType.road && this.arena.field[bullet.y - i][bullet.x + 1] == BlockType.road) {
                this.tanks.forEach(element => {
                    if (bullet.x - 3 <= element.x && element.x <= bullet.x + 1 && element.y + i == bullet.y) {
                        this.respawn(element);
                        this.bullets.splice(bulletNumber, 1);
                        return;
                    }
                });
            }
            else {
                for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
                    if(this.arena.field[bullet.y - i][bullet.x - 1 + j] == BlockType.brick) {
                        this.arena.field[bullet.y - i][bullet.x - 1 + j] = BlockType.road;
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
            if(this.arena.field[bullet.y + i + 1][bullet.x] == BlockType.road && this.arena.field[bullet.y + i + 1][bullet.x + 1] == BlockType.road) {
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
                    if(this.arena.field[bullet.y + i + 1][bullet.x - 1 + j] == BlockType.brick) {
                        this.arena.field[bullet.y + i + 1][bullet.x - 1 + j] = BlockType.road;
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
            if(this.arena.field[bullet.y][bullet.x - i] == BlockType.road && this.arena.field[bullet.y + 1][bullet.x - i] == BlockType.road) {
                this.tanks.forEach(element => {
                    if (bullet.y - 3 <= element.y && element.y <= bullet.y + 1 && element.x + i == bullet.x) {
                        this.respawn(element);
                        this.bullets.splice(bulletNumber, 1);
                        return;
                    }
                });
            }
            else {
                for(let j: number = 0; j < Parameters.bulletDestroy; j++) {
                    if(this.arena.field[bullet.y - 1 + j][bullet.x - i] == BlockType.brick) {
                        this.arena.field[bullet.y - 1 + j][bullet.x - i] = BlockType.road;
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
            if(this.arena.field[bullet.y][bullet.x + i + 1] == BlockType.road && this.arena.field[bullet.y + 1][bullet.x + i + 1] == BlockType.road) {
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
                    if(this.arena.field[bullet.y - 1 + j][bullet.x + i + 1] == BlockType.brick) {
                        this.arena.field[bullet.y - 1 + j][bullet.x + i + 1] = BlockType.road;
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
            case EventType.pressedUp:
                this.tankUp(event.tank);
                break;
            case EventType.pressedDown:
                this.tankDown(event.tank);
                break;
            case EventType.pressedLeft:
                this.tankLeft(event.tank);
                break;
            case EventType.pressedRight:
                this.tankRight(event.tank);
                break;
            case EventType.pressedSpace:
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
                case KeyCode.up:
                    this.allEvents.push(new Event(this.tanks[0], EventType.pressedUp));
                    break;
                case KeyCode.down:
                    this.allEvents.push(new Event(this.tanks[0], EventType.pressedDown));
                    break;
                case KeyCode.left:
                    this.allEvents.push(new Event(this.tanks[0], EventType.pressedLeft));
                    break;
                case KeyCode.right:
                    this.allEvents.push(new Event(this.tanks[0], EventType.pressedRight));
                    break;
                case KeyCode.enter:
                    this.allEvents.push(new Event(this.tanks[0], EventType.pressedSpace));
                    break;
                case KeyCode.w:
                    this.allEvents.push(new Event(this.tanks[1], EventType.pressedUp));
                    break;
                case KeyCode.s:
                    this.allEvents.push(new Event(this.tanks[1], EventType.pressedDown));
                    break;
                case KeyCode.a:
                    this.allEvents.push(new Event(this.tanks[1], EventType.pressedLeft));
                    break;
                case KeyCode.d:
                    this.allEvents.push(new Event(this.tanks[1], EventType.pressedRight));
                    break;
                case KeyCode.space:
                    this.allEvents.push(new Event(this.tanks[1], EventType.pressedSpace));
                    break;
            }
        });
    }

    private deleteUselessEvents() {
        let count = this.allEvents.length;
        for (let i: number = 0; i < count; i++) {
            let temp: number = i;
            switch (this.allEvents[temp].eventType) {
                case EventType.pressedUp:
                    if (!this.allEvents[temp].tank.move) {
                        this.allEvents[temp].tank.move = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.pressedDown:
                    if (!this.allEvents[temp].tank.move) {
                        this.allEvents[temp].tank.move = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.pressedLeft:
                    if (!this.allEvents[temp].tank.move) {
                        this.allEvents[temp].tank.move = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.pressedRight:
                    if (!this.allEvents[temp].tank.move) {
                        this.allEvents[temp].tank.move = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.pressedSpace:
                    if (!this.allEvents[temp].tank.shoot) {
                        this.allEvents[temp].tank.shoot = true;
                        this.filteredEvents.push(this.allEvents[temp]);
                    }
                    break;
                case EventType.bulletFlight:
                    break;
                case EventType.eventFromOtherUser:
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
            alert("End Game:)");
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

    private shoot(tank: Tank) {
        switch (tank.vector) {
            case Vector.up:
                if (tank.y > 0) {
                    this.bullets.push(new Bullet(tank.x + 1, tank.y - 1, Vector.up));
                    if (this.arena.field[tank.y - 1][tank.x + 1] == BlockType.road && this.arena.field[tank.y - 1][tank.x + 2] == BlockType.road) {
                        this.tanks.forEach(element => {
                            if (tank.x - 2 <= element.x && element.x <= tank.x + 2 && element.y + 4 == tank.y) {
                                this.respawn(element);
                                this.bullets.pop();
                            }
                        });
                    }
                    else {
                        for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
                            if (this.arena.field[tank.y - 1][tank.x + i] == BlockType.brick) {
                                this.arena.field[tank.y - 1][tank.x + i] = BlockType.road;
                            }
                        }
                        this.bullets.pop();
                    }
                }
                break;
            case Vector.down:
                if (tank.y < Parameters.fieldHeight - Parameters.tankSize) {
                    this.bullets.push(new Bullet(tank.x + 1, tank.y + 3, Vector.down));
                    if (this.arena.field[tank.y + 4][tank.x + 1] == BlockType.road && this.arena.field[tank.y + 4][tank.x + 2] == BlockType.road) {
                        this.tanks.forEach(element => {
                            if (tank.x - 2 <= element.x && element.x <= tank.x + 2 && element.y - 4 == tank.y) {
                                this.respawn(element);
                                this.bullets.pop();
                            }
                        });
                    }
                    else {
                        for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
                            if (this.arena.field[tank.y + 4][tank.x + i] == BlockType.brick) {
                                this.arena.field[tank.y + 4][tank.x + i] = BlockType.road;
                            }
                        }
                        this.bullets.pop();
                    }
                }
                break;
            case Vector.left:
                if (tank.x > 0) {
                    this.bullets.push(new Bullet(tank.x - 1, tank.y + 1, Vector.left));
                    if (this.arena.field[tank.y + 1][tank.x - 1] == BlockType.road && this.arena.field[tank.y + 2][tank.x - 1] == BlockType.road) {
                        this.tanks.forEach(element => {
                            if (tank.y - 2 <= element.y && element.y <= tank.y + 2 && element.x + 4 == tank.x) {
                                this.respawn(element);
                                this.bullets.pop();
                            }
                        });
                    }
                    else {
                        for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
                            if (this.arena.field[tank.y + i][tank.x - 1] == BlockType.brick) {
                                this.arena.field[tank.y + i][tank.x - 1] = BlockType.road;
                            }
                        }
                        this.bullets.pop();
                    }
                }
                break;
            case Vector.right:
                if (tank.y < Parameters.fieldWidth - Parameters.tankSize) {
                    this.bullets.push(new Bullet(tank.x + 3, tank.y + 1, Vector.right));
                    if (this.arena.field[tank.y + 1][tank.x + 4] == BlockType.road && this.arena.field[tank.y + 2][tank.x + 4] == BlockType.road) {
                        this.tanks.forEach(element => {
                            if (tank.y - 2 <= element.y && element.y <= tank.y + 2 && element.x - 4 == tank.x) {
                                this.respawn(element);
                                this.bullets.pop();
                            }
                        });
                    }
                    else {
                        for (let i: number = 0; i < Parameters.bulletDestroy; i++) {
                            if (this.arena.field[tank.y + i][tank.x + 4] == BlockType.brick) {
                                this.arena.field[tank.y + i][tank.x + 4] = BlockType.road;
                            }
                        }
                        this.bullets.pop();
                    }
                }
                break;
        }
    }

    private tankUp(tank: Tank) {
        if (tank.vector != Vector.up) {
            tank.vector = Vector.up;
        }
        else {
            if (tank.y > 0) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.arena.field[tank.y - 1][tank.x + i] != BlockType.road) {
                        return;
                    }
                }
                let counter: number = 0;
                this.tanks.forEach((element) => {
                    if (!(element.x == tank.x && element.y == tank.y)) {
                        if (element.x + 3 < tank.x || tank.x + 3 < element.x || element.y + 4 < tank.y || tank.y + 3 < element.y) {
                            counter++;
                        }
                    }
                });
                if (counter == this.tanks.length - 1) {
                    tank.y--;
                }
            }
        }
    }

    private tankDown(tank: Tank) {
        if (tank.vector != Vector.down) {
            tank.vector = Vector.down;
        }
        else {
            if (tank.y < Parameters.fieldHeight - Parameters.tankSize) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.arena.field[tank.y + Parameters.tankSize][tank.x + i] != BlockType.road) {
                        return;
                    }
                }
                let counter: number = 0;
                this.tanks.forEach((element) => {
                    if (!(element.x == tank.x && element.y == tank.y)) {
                        if (element.x + 3 < tank.x || tank.x + 3 < element.x || element.y + 3 < tank.y || tank.y + 4 < element.y) {
                            counter++;
                        }
                    }
                });
                if (counter == this.tanks.length - 1) {
                    tank.y++;
                }
            }
        }
    }

    private tankLeft(tank: Tank) {
        if (tank.vector != Vector.left) {
            tank.vector = Vector.left;
        }
        else {
            if (tank.x > 0) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.arena.field[tank.y + i][tank.x - 1] != BlockType.road) {
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
        if (tank.vector != Vector.right) {
            tank.vector = Vector.right;
        }
        else {
            if (tank.x < Parameters.fieldWidth - Parameters.tankSize) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.arena.field[tank.y + i][tank.x + Parameters.tankSize] != BlockType.road) {
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