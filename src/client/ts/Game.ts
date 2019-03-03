import { Users } from "./Models/Users";
import { Parameters } from "./Parameters"
import { EventType } from "./EventHandler/enums/EventType";
import { Button } from "./EventHandler/enums/Button";
import { User } from "./Models/User";
import { Bullets } from "./Models/Bullets";
import { BlockType } from "./Models/enums/BlockType";
import { Draw } from "./View/Draw";
import { CalculateTanksMove } from "./Controllers/CalculateTanksMove";
import { CalculateBulletMove } from "./Controllers/CalculateBulletMove";
import { FieldProcessor } from "./Controllers/FieldProcessor";
import { GenerateBullets } from "./Controllers/GenerateBullets";
import { PressedUserButtons } from "./Models/PressedUserButtons";


export class Game {
    private user: User;
    private users: Users = new Users();
    private allEvents: EventType[] = [];
    private bullets: Bullets = new Bullets();
    private map: BlockType[][];
    private calculateTanksMove: CalculateTanksMove;
    private calculateBulletMove: CalculateBulletMove;
    private generateBullets: GenerateBullets;
    private fieldProcessor: FieldProcessor;
    private draw: Draw = new Draw();

    constructor(user: User, map: BlockType[][]) {
        this.user = user;
        this.users.addUser(this.user);
        this.map = map;
        this.calculateTanksMove = new CalculateTanksMove(this.users, this.map);
        this.calculateBulletMove = new CalculateBulletMove(this.bullets, this.map);
        this.generateBullets = new GenerateBullets(this.users, this.bullets);
        this.fieldProcessor = new FieldProcessor(this.map, this.users, this.bullets);
    }

    private calculate() {
        this.deleteUselessEvents();
        this.calculateTanksMove.doStep();
        this.fieldProcessor.setTanksOnMap();
        this.generateBullets.generate();
        this.calculateBulletMove.doStep();
        this.fieldProcessor.setBulletsOnMap();
        this.fieldProcessor.clearMap()
    }

    private drawing() {
        this.draw.run(this.map, this.users.getListOfUsers());
    }

    public gameProcess() {
        addEventListener("keydown", (event) => {
            this.defineEvent(event);
        });
        setInterval(() => {
            this.drawing();
            if (this.allEvents.length != 0 || this.bullets.getListOfBullets().length != 0) {
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
        this.allEvents.splice(0,i);
    }

    private deleteUselessEvents() {
        this.user.getPressedButtons().cleanButtons();
        let move: boolean = false;
        let shoot: boolean = false;
        let count = this.allEvents.length;
        for (let i: number = 0; i < count; i++) {
            switch (this.allEvents[i]) {
                case EventType.pressedUp:
                    if (!move) {
                        move = true;
                        this.user.getPressedButtons().setArrowUp(true);
                    }
                    break;
                case EventType.pressedDown:
                    if (!move) {
                        move = true;
                        this.user.getPressedButtons().setArrowDown(true);
                    }
                    break;
                case EventType.pressedLeft:
                    if (!move) {
                        move = true;
                        this.user.getPressedButtons().setArrowLeft(true);
                    }
                    break;
                case EventType.pressedRight:
                    if (!move) {
                        move = true;
                        this.user.getPressedButtons().setArrowRight(true);
                    }
                    break;
                case EventType.pressedSpace:
                    if (!shoot) {
                        shoot = true;
                        this.user.getPressedButtons().setSpace(true);
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