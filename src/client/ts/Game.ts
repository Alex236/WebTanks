import { Parameters } from "./Parameters"
import { EventType } from "./EventHandler/enums/EventType";
import { KeyCode } from "./EventHandler/enums/KeyCode";
import { BlockType } from "./Models/enums/BlockType";
import { Grid } from "./View/Grid";
import { Bullet } from "./Models/Bullet";
import { Tank } from "./Models/Tank";
import { Vector } from "./Models/enums/Vector"
import { Item } from "./Models/Item";


export class Game {
    private tanks: Tank[];
    private allEvents: EventType[] = [];
    private bullets: Bullet[] = [];
    private map: BlockType[][];
    private grid: Grid = new Grid();
    private actions: any[] = [];

    constructor(tanks: Tank[], map: BlockType[][]) {
        this.tanks = tanks;
        this.map = map;
    }

    private calculate() {
        this.deleteUselessEvents();
        this.actions.forEach(action => action());
        this.actions = [];
    }

    private drawing() {
        this.grid.drawGrid(this.map, this.tanks, this.bullets);
    }

    public start() {
        addEventListener("keydown", (event) => {
            this.defineEvent(event);
        });
        setInterval(() => {
            this.drawing();
            if (this.allEvents.length != 0 || this.bullets.length != 0) {
                this.calculate();
            }
        }, Parameters.timer);
    }

    private defineEvent(event: KeyboardEvent) {
        switch (event.keyCode) {
            case KeyCode.up:
                this.allEvents.push(EventType.pressedUp);
                break;
            case KeyCode.down:
                this.allEvents.push(EventType.pressedDown);
                break;
            case KeyCode.left:
                this.allEvents.push(EventType.pressedLeft);
                break;
            case KeyCode.right:
                this.allEvents.push(EventType.pressedRight);
                break;
            case KeyCode.space:
                this.allEvents.push(EventType.pressedSpace);
                break;
        }
    }

    private deleteUselessEvents() {
        let move: boolean = false;
        let shoot: boolean = false;
        let count = this.allEvents.length;
        for (let i: number = 0; i < count; i++) {
            switch (this.allEvents[i]) {
                case EventType.pressedUp:
                    if (!move) {
                        move = true;
                        this.actions.push(() => { this.up(this.tanks[0]) });
                    }
                    break;
                case EventType.pressedDown:
                    if (!move) {
                        move = true;
                        this.actions.push(() => { this.down(this.tanks[0]) });
                    }
                    break;
                case EventType.pressedLeft:
                    if (!move) {
                        move = true;
                        this.actions.push(() => { this.left(this.tanks[0]) });
                    }
                    break;
                case EventType.pressedRight:
                    if (!move) {
                        move = true;
                        this.actions.push(() => { this.right(this.tanks[0]) });
                    }
                    break;
                case EventType.pressedSpace:
                    if (!shoot) {
                        shoot = true;
                    }
                    break;
                case EventType.bulletFlight:
                    break;
                case EventType.eventFromOtherUser:
                    break;
            }
        }
        this.allEvents.splice(0, count);
    }

    up(tank: Tank) {
        if (tank.tankMove != Vector.up) {
            tank.tankMove = Vector.up;
        }
        else {
            if (tank.y > 0) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.map[tank.y - 1][tank.x + i] != BlockType.road) {
                        return;
                    }
                }
                tank.y = tank.y - 1;
            }
        }
    }

    down(tank: Tank) {
        if (tank.tankMove != Vector.down) {
            tank.tankMove = Vector.down;
        }
        else {
            if (tank.y < Parameters.fieldHeight - 1) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.map[tank.y + Parameters.tankSize][tank.x + i] != BlockType.road) {
                        return;
                    }
                }
                tank.y = tank.y + 1;
            }
        }
    }

    left(tank: Tank) {
        if (tank.tankMove != Vector.left) {
            tank.tankMove = Vector.left;
        }
        else {
            if (tank.x > 0) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.map[tank.y + i][tank.x - 1] != BlockType.road) {
                        return;
                    }
                }
                tank.x = tank.x - 1;
            }
        }
    }

    right (tank: Tank) {
        if (tank.tankMove != Vector.right) {
            tank.tankMove = Vector.right;
        }
        else {
            if (tank.x < Parameters.fieldWidth - 1) {
                for (let i: number = 0; i < Parameters.tankSize; i++) {
                    if (this.map[tank.y + i][tank.x + Parameters.tankSize] != BlockType.road) {
                        return;
                    }
                }
                tank.x = tank.x + 1;
            }
        }
    }
}