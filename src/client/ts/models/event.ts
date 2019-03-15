
import { EventType } from "./event-type";
import { Tank } from "./tank";

export class Event {
    public readonly tank: Tank;
    public readonly eventType: EventType;

    constructor(tank: Tank, eventType: EventType) {
        this.tank = tank;
        this.eventType = eventType;
    }
}