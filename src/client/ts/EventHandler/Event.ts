import { Tank } from "../Models/Tank";
import { EventType } from "./EventType";

export class Event {
    public readonly tank: Tank;
    public readonly eventType: EventType;

    constructor(tank: Tank, eventType: EventType) {
        this.tank = tank;
        this.eventType = eventType;
    }
}