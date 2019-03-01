import { Users } from "./Calculate/Users";
import { Parameters } from "./Parameters"
import { EventType } from "./EventHandler/enums/EventType";
import { Button } from "./EventHandler/enums/Button";
import { User } from "./Calculate/User";
import { Bullets } from "./Calculate/Bullets";
import { BlockType } from "./Calculate/enums/BlockType";

export class Game {
    private users: Users = new Users();
    private allEvents: EventType[] = [];
    private bullets: Bullets = new Bullets();
    private map: BlockType[][];

    constructor(user: User, map: BlockType[][]) {
        this.users.addUser(user);
        this.map = map;
    }

    private calculate() {
        this.deleteUselessEvents();
        for (let i: number = 0; i < this.allEvents.length; i++) {
            switch (this.allEvents[i]) {
                case EventType.pressedUp:

                    break;
                case EventType.pressedDown:

                    break;
                case EventType.pressedLeft:

                    break;
                case EventType.pressedRight:

                    break;
                case EventType.pressedSpace:

                    break;
                case EventType.bulletFlight:

                    break;
            }
        }
    }

    private draw() {

    }

    public gameProcess() {
        addEventListener("keydown", (event) => {
            this.defineEvent(event);
        });
        setTimeout(() => {
            this.draw();
            if (this.allEvents.length != 0) {
                this.calculate();
            }
        }, Parameters.timer);
    }

    private defineEvent(event: KeyboardEvent) {
        switch (event.keyCode) {
            case Button.up:
                this.addEvent(EventType.pressedUp);
            case Button.down:
                this.addEvent(EventType.pressedDown);
            case Button.left:
                this.addEvent(EventType.pressedLeft);
            case Button.right:
                this.addEvent(EventType.pressedRight);
            case Button.space:
                this.addEvent(EventType.pressedSpace);
        }
    }

    private addEvent(event: EventType) {
        this.allEvents.push(event);
    }

    private deleteEvent(event: EventType) {
        for (let i: number = 0; i < this.allEvents.length; i++) {
            if (this.allEvents[i] == event) {
                this.allEvents.splice(i, 1);
            }
        }
    }

    private deleteUselessEvents() {

    }
}