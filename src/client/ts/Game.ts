import { Parameters } from "./Parameters"
import { EventType } from "./EventHandler/enums/EventType";
import { Button } from "./EventHandler/enums/Button";
import { BlockType } from "./Models/enums/BlockType";
import { Grid } from "./View/Grid";
import { CalculateTanksMove } from "./Controllers/CalculateTanksMove";
import { CalculateBulletMove } from "./Controllers/CalculateBulletMove";
import { FieldProcessor } from "./Controllers/FieldProcessor";
import { GenerateBullets } from "./Controllers/GenerateBullets";
import { Bullet } from "./Models/Bullet";
import { Tank } from "./Models/Tank";
import { Units } from "./View/Units";


export class Game {
    private tanks: Tank[];
    private allEvents: EventType[] = [];
    private bullets: Bullet[] = [];
    private map: BlockType[][];
    private calculateTanksMove: CalculateTanksMove;
    private calculateBulletMove: CalculateBulletMove;
    private generateBullets: GenerateBullets;
    private fieldProcessor: FieldProcessor;
    private cycleCounter: number = 0;
    private grid: Grid = new Grid();

    constructor(tanks: Tank[], map: BlockType[][]) {
        this.tanks = tanks;
        this.map = map;
        this.calculateTanksMove = new CalculateTanksMove(this.tanks, this.map);
        this.calculateBulletMove = new CalculateBulletMove(this.bullets, this.map);
        this.generateBullets = new GenerateBullets(this.tanks, this.bullets);
        this.fieldProcessor = new FieldProcessor(this.map, this.tanks, this.bullets);
    }

    private calculate() {
        if (this.cycleCounter == 0) {
            this.cycleCounter++;
            this.deleteUselessEvents();
            this.calculateTanksMove.doStep();
            this.fieldProcessor.setTanksOnMap();
            this.generateBullets.generate();
            this.calculateBulletMove.doStep();
            this.fieldProcessor.setBulletsOnMap();
            this.fieldProcessor.clearMap();
        }
        else {
            this.cycleCounter++;
            this.fieldProcessor.setTanksOnMap();
            this.calculateBulletMove.doStep();
            this.fieldProcessor.setBulletsOnMap();
            this.fieldProcessor.clearMap();
            if (this.cycleCounter == Parameters.bulletSpeed) {
                this.cycleCounter = 0;
            }
        }
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
            case Button.up:
                this.addEvent(EventType.pressedUp);
                break;
            case Button.down:
                this.addEvent(EventType.pressedDown);
                break;
            case Button.left:
                this.addEvent(EventType.pressedLeft);
                break;
            case Button.right:
                this.addEvent(EventType.pressedRight);
                break;
            case Button.space:
                this.addEvent(EventType.pressedSpace);
                break;
        }
    }

    private addEvent(event: EventType) {
        this.allEvents.push(event);
    }

    private deleteCheckedEvents(i: number) {
        this.allEvents.splice(0, i);
    }

    private deleteUselessEvents() {
        this.tanks[0].getPressedButtons().cleanButtons();
        let move: boolean = false;
        let shoot: boolean = false;
        let count = this.allEvents.length;
        for (let i: number = 0; i < count; i++) {
            switch (this.allEvents[i]) {
                case EventType.pressedUp:
                    if (!move) {
                        move = true;
                        this.tanks[0].getPressedButtons().setArrowUp(true);
                    }
                    break;
                case EventType.pressedDown:
                    if (!move) {
                        move = true;
                        this.tanks[0].getPressedButtons().setArrowDown(true);
                    }
                    break;
                case EventType.pressedLeft:
                    if (!move) {
                        move = true;
                        this.tanks[0].getPressedButtons().setArrowLeft(true);
                    }
                    break;
                case EventType.pressedRight:
                    if (!move) {
                        move = true;
                        this.tanks[0].getPressedButtons().setArrowRight(true);
                    }
                    break;
                case EventType.pressedSpace:
                    if (!shoot) {
                        shoot = true;
                        this.tanks[0].getPressedButtons().setSpace(true);
                    }
                    break;
                case EventType.bulletFlight:
                    break;
                case EventType.eventFromOtherUser:
                    break;
            }
        }
        this.deleteCheckedEvents(count);
    }
}