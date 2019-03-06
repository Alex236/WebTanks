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


export class Game {
    private tanks: Tank[];
    private allEvents: Event[] = [];
    private filteredEvents: Event[] = [];
    private bullets: Bullet[] = [];
    private arena: Arena;
    private grid: Grid = new Grid();

    constructor(tanks: Tank[], arena: Arena) {
        this.tanks = tanks;
        this.arena = arena;
    }

    private calculate() {
        this.deleteUselessEvents();
        this.filteredEvents.forEach(evnt => this.move(evnt));
        this.filteredEvents.splice(0, this.filteredEvents.length);
    }

    private move(evnt: Event) {
        switch (evnt.eventType) {
            case EventType.pressedUp:
                this.tankUp(evnt.tank);
                break;
            case EventType.pressedDown:
                this.tankDown(evnt.tank);
                break;
            case EventType.pressedLeft:
                this.tankLeft(evnt.tank);
                break;
            case EventType.pressedRight:
                this.tankRight(evnt.tank);
                break;
            case EventType.pressedSpace:
                break;
        }
    }

    private drawing() {
        this.grid.draw(this.arena.field, this.tanks, this.bullets);
    }

    private spawnAllPlayers() {
        for (let i: number = 0; i < this.tanks.length; i++) {
            this.tanks[i].x = this.arena.getSpawnPointByX(i);
            this.tanks[i].y = this.arena.getSpawnPointByY(i);
        }

    }

    public start() {
        this.spawnAllPlayers();

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

    private shoot(tank: Tank) {
        switch (tank.vector) {
            case Vector.up:
                //this.bullets.push(new Bullet());
                break;
            case Vector.down:
                //this.bullets.push(new Bullet());
                break;
            case Vector.left:
                //this.bullets.push(new Bullet());
                break;
            case Vector.right:
                //this.bullets.push(new Bullet());
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
        console.log("tankdwn");
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