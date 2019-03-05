import { Parameters } from "./Parameters"
import { EventType } from "./EventHandler/enums/EventType";
import { KeyCode } from "./EventHandler/enums/KeyCode";
import { BlockType } from "./Models/enums/BlockType";
import { Grid } from "./View/Grid";
import { CalculateTanksMove } from "./Controllers/CalculateTanksMove";
import { Bullet } from "./Models/Bullet";
import { Tank } from "./Models/Tank";


export class Game {
    private tanks: Tank[];
    private allEvents: EventType[] = [];
    private bullets: Bullet[] = [];
    private map: BlockType[][];
    private calculateTanksMove: CalculateTanksMove;
    private grid: Grid = new Grid();

    constructor(tanks: Tank[], map: BlockType[][]) {
        this.tanks = tanks;
        this.map = map;
        this.calculateTanksMove = new CalculateTanksMove(this.tanks, this.map);
    }

    private calculate() {
        this.deleteUselessEvents();
        this.calculateTanksMove.doStep();
        //this.generateBullets.generate();
        //this.calculateBulletMove.doStep();
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
        this.tanks[0].pressedUserButtons = [];
        let move: boolean = false;
        let shoot: boolean = false;
        let count = this.allEvents.length;
        for (let i: number = 0; i < count; i++) {
            switch (this.allEvents[i]) {
                case EventType.pressedUp:
                    if (!move) {
                        move = true;
                        this.tanks[0].pressedUserButtons[0] = KeyCode.up;
                    }
                    break;
                case EventType.pressedDown:
                    if (!move) {
                        move = true;
                        this.tanks[0].pressedUserButtons[0] = KeyCode.down;
                    }
                    break;
                case EventType.pressedLeft:
                    if (!move) {
                        move = true;
                        this.tanks[0].pressedUserButtons[0] = KeyCode.left;
                    }
                    break;
                case EventType.pressedRight:
                    if (!move) {
                        move = true;
                        this.tanks[0].pressedUserButtons[0] = KeyCode.right;
                    }
                    break;
                case EventType.pressedSpace:
                    if (!shoot) {
                        shoot = true;
                        this.tanks[0].pressedUserButtons[1] = KeyCode.space;
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
}