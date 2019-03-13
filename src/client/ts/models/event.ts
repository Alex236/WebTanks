import { Tank } from "../tanks/tank";
import { EventType } from "./event-type";

export class Event {
    public readonly tank: Tank;
    public readonly eventType: EventType;

    constructor(tank: Tank, eventType: EventType) {
        this.tank = tank;
        this.eventType = eventType;
    }
}