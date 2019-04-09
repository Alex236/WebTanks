import { EventType } from "./event-type";
import { Tank } from "./tank";
import { KeyCode } from './key-code';

export class Event {
    public readonly tank: Tank;
    public readonly key: KeyCode;

    constructor(tank: Tank, key: KeyCode) {
        this.tank = tank;
        this.key = key;
    }
}