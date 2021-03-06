import { Parameters } from "./parameters"
import { KeyCode } from "./models/key-code";
import { Grid } from "./view/grid";
import { Arena } from "./models/arena";
import { Event } from "./models/event";
import { Sound } from "./view/sound";
import { Tank } from "./models/tank";
import { Bullet } from "./models/bullet";
import { Block } from "./models/block";
import { ItemBase } from "./models/item-base";
import { Directoin } from "./models/direction";
import { BulletsFactory } from "./bullets-factory";
import { RunningItem } from './models/running-item';
import { ItemType } from './models/item-type';
import { UnitType } from './models/unit-type';
import { BlockFactory } from './block-factory';
import { MessageFactory } from './message-factory';


export class Game {
    private static game: Game = new Game();
    public tanks: Map<string, Tank>;
    public allEvents: Event[] = [];
    private filteredEvents: (() => void)[] = [];
    private blocks: Block[] = [];
    private grid: Grid = new Grid();
    private sound: Sound = new Sound();
    private bulletsFactory: BulletsFactory = new BulletsFactory();
    private bullets: Bullet[] = [];
    private blockMap: Block[][] = new Array();
    private blockFactory = new BlockFactory();
    private needRedraw: boolean = true;
    private name: string;
    private socket: WebSocket;
    private gameProcess: any;
    private messageFactory: MessageFactory = new MessageFactory();

    private constructor() { }

    public static getGame(): Game {
        return this.game;
    }

    private initializeMap() {
        for (let i: number = 0; i < Parameters.fieldHeight; i++) {
            this.blockMap[i] = new Array();
        }
        for (let i: number = 0; i < Parameters.fieldHeight; i++) {
            for (let j: number = 0; j < Parameters.fieldWidth; j++) {
                this.blockMap[i][j] = new Block(j, i, UnitType.Road);
            }
        }
        for (let i: number = 0; i < this.blocks.length; i++) {
            this.blockMap[this.blocks[i].y][this.blocks[i].x] = this.blocks[i];
        }
    }

    private calculate() {
        this.filteredEvents.forEach(event => event());
        this.filteredEvents.splice(0, this.filteredEvents.length);
        if (this.bullets.length !== 0) {
            this.moveBullets();
        }
        this.getBlocks();
        this.needRedraw = true;
    }

    public start(socket: WebSocket, name: string, tanks: Map<string, Tank>, arena: Arena) {
        this.socket = socket;
        this.name = name;
        this.blocks = arena.blocks;
        this.tanks = tanks;
        this.initializeMap();
        this.view();
        this.needRedraw = true;
        this.gameProcess = setInterval(() => {
            this.deleteUselessEvents();
            if (this.bullets.length !== 0 || this.filteredEvents.length !== 0) {
                this.calculate();
            }
        }, Parameters.timer);
    }

    public addEvent(button: KeyCode, currentUserName: string) {
        switch (button) {
            case KeyCode.Up:
                this.filteredEvents.push(() => this.tankUp(this.tanks.get(currentUserName)));
                break;
            case KeyCode.Down:
                this.filteredEvents.push(() => this.tankDown(this.tanks.get(currentUserName)));
                break;
            case KeyCode.Left:
                this.filteredEvents.push(() => this.tankLeft(this.tanks.get(currentUserName)));
                break;
            case KeyCode.Right:
                this.filteredEvents.push(() => this.tankRight(this.tanks.get(currentUserName)));
                break;
            case KeyCode.Space:
                this.bullets.push(this.bulletsFactory.createBullet(this.tanks.get(currentUserName)));
                break;
        }
    }

    public endGame() {
        clearInterval(this.gameProcess);
    }

    private async view() {
        await setInterval(() => {
            if (this.needRedraw) {
                this.grid.draw(this.blocks, Array.from(this.tanks.values()), this.bullets);
                this.needRedraw = false;
            }
        }, 5);
    }

    private getBlocks() {
        this.blocks = [];
        for (let i: number = 0; i < Parameters.fieldHeight; i++) {
            for (let j: number = 0; j < Parameters.fieldWidth; j++) {
                this.blockMap[i][j].unitType !== UnitType.Road ? this.blocks.push(this.blockMap[i][j]) : {};
            }
        }
    }

    private deleteUselessEvents() {
        let count = this.allEvents.length;
        let move: Tank[] = [];
        let shoot: Tank[] = [];
        for (let i: number = 0; i < count; i++) {
            let temp: number = i;
            switch (this.allEvents[temp].key) {
                case KeyCode.Up:
                    if (move.indexOf(this.allEvents[i].tank) == -1) {
                        move.push(this.allEvents[i].tank);
                        this.socket.send(this.messageFactory.createMessagePressedButton(KeyCode.Up, this.name));
                    }
                    break;
                case KeyCode.Down:
                    if (move.indexOf(this.allEvents[i].tank) == -1) {
                        move.push(this.allEvents[i].tank);
                        this.socket.send(this.messageFactory.createMessagePressedButton(KeyCode.Down, this.name));
                    }
                    break;
                case KeyCode.Left:
                    if (move.indexOf(this.allEvents[i].tank) == -1) {
                        move.push(this.allEvents[i].tank);
                        this.socket.send(this.messageFactory.createMessagePressedButton(KeyCode.Left, this.name));
                    }
                    break;
                case KeyCode.Right:
                    if (move.indexOf(this.allEvents[i].tank) == -1) {
                        move.push(this.allEvents[i].tank);
                        this.socket.send(this.messageFactory.createMessagePressedButton(KeyCode.Right, this.name));
                    }
                    break;
                case KeyCode.Space:
                    let counter = 0;
                    this.bullets.forEach(bullet => {
                        this.allEvents[i].tank === bullet.owner ? counter++ : {};
                    });
                    if (counter < this.allEvents[i].tank.avaliableShoots) {
                        shoot.push(this.allEvents[i].tank)
                        this.socket.send(this.messageFactory.createMessagePressedButton(KeyCode.Space, this.name));
                    }
                    this.sound.run("fire");
                    break;
            }
        }
        this.allEvents.splice(0, count);
    }

    private turn(tank: Tank, necessaryDirection: Directoin): boolean {
        if (tank.direction == necessaryDirection) {
            return false;
        }
        switch (tank.direction) {
            case Directoin.Up:
                Directoin.Down !== necessaryDirection ? tank.y = Math.round(tank.y) : {};
                break;
            case Directoin.Down:
                Directoin.Up !== necessaryDirection ? tank.y = Math.round(tank.y) : {};
                break;
            case Directoin.Left:
                Directoin.Right !== necessaryDirection ? tank.x = Math.round(tank.x) : {};
                break;
            case Directoin.Right:
                Directoin.Left !== necessaryDirection ? tank.x = Math.round(tank.x) : {};
                break;
        }
        tank.direction = necessaryDirection;
        return true;
    }

    private getAvaliableStep(step: number, avaliableStep: number) {
        return step > avaliableStep ? avaliableStep : step;
    }

    private checkBlocks(blocks: Block[]): boolean {
        let move: boolean = true;
        blocks.forEach(block => {
            block == null ? {} : block.drive ? {} : move = false;
        });
        return move;
    }

    private tankUp(tank: Tank) {
        if (this.turn(tank, Directoin.Up)) {
            return;
        }
        if (tank.y - tank.speed <= 0) {
            tank.y = 0;
            return;
        }
        let step: number = tank.speed;
        this.tanks.forEach(item => {
            step = this.getAvaliableStep(step, this.moveUp(item, tank));
        });
        this.bullets.forEach(item => {
            step = this.getAvaliableStep(step, this.moveUp(item, tank));
        });
        if (tank.speed > tank.y - Math.trunc(tank.y)) {
            if (!this.checkBlocks(this.blockMap[Math.trunc(tank.y) - 1].slice(tank.x, tank.x + tank.size))) {
                step = this.getAvaliableStep(step, tank.y - Math.trunc(tank.y));
            }
        }
        tank.y -= step;
    }

    private moveUp(item: ItemBase, tank: Tank, avaliableStep: number = tank.speed): number {
        if (item === tank) {
            return avaliableStep;
        }
        if (tank.y >= item.y + item.size && tank.x < item.x + item.size && tank.x + tank.size > item.x) {
            let distance = tank.y - (item.y + item.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }


    private tankDown(tank: Tank) {
        if (this.turn(tank, Directoin.Down)) {
            return;
        }
        if (tank.y + tank.size + tank.speed >= Parameters.fieldHeight) {
            tank.y = Parameters.fieldHeight - tank.size;
            return;
        }
        let step: number = tank.speed;
        this.tanks.forEach(item => {
            step = this.getAvaliableStep(step, this.moveDown(item, tank));
        });
        this.bullets.forEach(item => {
            step = this.getAvaliableStep(step, this.moveDown(item, tank));
        });
        if (tank.speed > Math.ceil(tank.y) - tank.y) {
            if (!this.checkBlocks(this.blockMap[Math.ceil(tank.y) + tank.size].slice(tank.x, tank.x + tank.size))) {
                step = this.getAvaliableStep(step, Math.ceil(tank.y) - tank.y);
            }
        }
        tank.y += step;
    }

    private moveDown(item: ItemBase, tank: Tank, avaliableStep: number = tank.speed): number {
        if (item === tank) {
            return avaliableStep;
        }
        if (tank.y + tank.size <= item.y && tank.x < item.x + item.size && tank.x + tank.size > item.x) {
            let distance = item.y - (tank.y + tank.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }

    private tankLeft(tank: Tank) {
        if (this.turn(tank, Directoin.Left)) {
            return;
        }
        if (tank.x - tank.speed <= 0) {
            tank.x = 0;
            return;
        }
        let step: number = tank.speed;
        this.tanks.forEach(item => {
            step = this.getAvaliableStep(step, this.moveLeft(item, tank));
        });
        this.bullets.forEach(item => {
            step = this.getAvaliableStep(step, this.moveLeft(item, tank));
        });
        if (tank.speed > tank.x - Math.trunc(tank.x)) {
            let temp: Block[] = [];
            for (let i: number = 0; i < tank.size; i++) {
                temp[i] = this.blockMap[tank.y + i][Math.trunc(tank.x) - 1];
            }
            if (!this.checkBlocks(temp)) {
                step = this.getAvaliableStep(step, tank.x - Math.trunc(tank.x));
            }
        }
        tank.x -= step;
    }

    private moveLeft(item: ItemBase, tank: Tank, avaliableStep: number = tank.speed): number {
        if (item === tank) {
            return avaliableStep;
        }
        if (tank.x >= item.x + item.size && tank.y < item.y + item.size && tank.y + tank.size > item.y) {
            let distance = tank.x - (item.x + item.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }

    private tankRight(tank: Tank) {
        if (this.turn(tank, Directoin.Right)) {
            return;
        }
        if (tank.x + tank.size + tank.speed >= Parameters.fieldWidth) {
            tank.x = Parameters.fieldHeight - tank.size;
            return;
        }
        let step: number = tank.speed;
        this.tanks.forEach(item => {
            step = this.getAvaliableStep(step, this.moveRight(item, tank));
        });
        this.bullets.forEach(item => {
            step = this.getAvaliableStep(step, this.moveRight(item, tank));
        });
        if (tank.speed > Math.ceil(tank.x) - tank.x) {
            let temp: Block[] = [];
            for (let i: number = 0; i < tank.size; i++) {
                temp[i] = this.blockMap[tank.y + i][Math.ceil(tank.x) + tank.size];
            }
            if (!this.checkBlocks(temp)) {
                step = this.getAvaliableStep(step, Math.ceil(tank.x) - tank.x);
            }
        }
        tank.x += step;
    }

    private moveRight(item: ItemBase, tank: Tank, avaliableStep: number = tank.speed): number {
        if (item === tank) {
            return avaliableStep;
        }
        if (tank.x + tank.size <= item.x && tank.y < item.y + item.size && tank.y + tank.size > item.y) {
            let distance = item.x - (tank.x + tank.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }

    private moveBulletOrDelete(bullet: Bullet): boolean {
        switch (bullet.direction) {
            case Directoin.Up:
                bullet.y--;
                break;
            case Directoin.Down:
                bullet.y++;
                break;
            case Directoin.Left:
                bullet.x--;
                break;
            case Directoin.Right:
                bullet.x++;
                break;
        }
        if (bullet.y < 0 || bullet.y > Parameters.fieldHeight - bullet.size || bullet.x < 0 || bullet.x > Parameters.fieldWidth - bullet.size) {
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
            return true;
        }
        return false;
    }

    private moveBullets() {
        this.bullets.forEach((currentBullet) => {
            for (let i: number = 0; i < currentBullet.speed; i++) {
                if (this.moveBulletOrDelete(currentBullet)) {
                    continue;
                }
                this.tanks.forEach(tank => {
                    if (currentBullet.owner !== tank) {
                        this.destroy(currentBullet, tank);
                        return;
                    }
                });
                this.bullets.forEach(bullet => {
                    if (currentBullet !== bullet) {
                        this.destroy(currentBullet, bullet);
                        return;
                    }
                });
                if (this.destroyWall(currentBullet)) {
                    continue;
                }
            }
        });
    }

    private damageTank(bullet: Bullet, tank: Tank) {
        tank.health -= bullet.damage;
        if (tank.health <= 0) {
            this.sound.run("killSomeone");
            this.socket.send(this.messageFactory.createMessageEndGame(this.name));
        }
    }

    private destroy(bullet: Bullet, item: RunningItem): boolean {
        switch (item.item) {
            case ItemType.Tank:
                if (item.x + item.size > bullet.x && bullet.x + bullet.size > item.x && item.y + item.size > bullet.y && bullet.y + bullet.size > item.y) {
                    this.damageTank(bullet, <Tank>item);
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                    return true;
                }
                break;
            case ItemType.Bullet:
                if (item.x + item.size >= bullet.x && bullet.x + bullet.size >= item.x && item.y + item.size >= bullet.y && bullet.y + bullet.size >= item.y) {
                    this.bullets.splice(this.bullets.indexOf(<Bullet>item));
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                    return true;
                }
                break;
        }
        return false;
    }

    private destroyWall(bullet: Bullet) {
        let destroyBullet: boolean = false;
        switch (bullet.direction) {
            case Directoin.Up:
                if (!(this.blockMap[bullet.y][bullet.x].sweep && this.blockMap[bullet.y][bullet.x + 1].sweep)) {
                    for (let j: number = 0; j < Parameters.bulletDestroy; j++) {
                        let tempX: number = bullet.x - 1 + j;
                        let tempY: number = bullet.y;
                        this.destroyBlock(tempX, tempY);
                    }
                    destroyBullet = true;
                }
                break;
            case Directoin.Down:
                if (!(this.blockMap[bullet.y + 1][bullet.x].sweep && this.blockMap[bullet.y + 1][bullet.x + 1].sweep)) {
                    for (let j: number = 0; j < Parameters.bulletDestroy; j++) {
                        let tempX: number = bullet.x - 1 + j;
                        let tempY: number = bullet.y + 1;
                        this.destroyBlock(tempX, tempY);
                    }
                    destroyBullet = true;
                }
                break;
            case Directoin.Left:
                if (!(this.blockMap[bullet.y][bullet.x].sweep && this.blockMap[bullet.y + 1][bullet.x].sweep)) {
                    for (let j: number = 0; j < Parameters.bulletDestroy; j++) {
                        let tempX: number = bullet.x;
                        let tempY: number = bullet.y - 1 + j;
                        this.destroyBlock(tempX, tempY);
                    }
                    destroyBullet = true;
                }
                break;
            case Directoin.Right:
                if (!(this.blockMap[bullet.y][bullet.x + 1].sweep && this.blockMap[bullet.y + 1][bullet.x + 1].sweep)) {
                    for (let j: number = 0; j < Parameters.bulletDestroy; j++) {
                        let tempX: number = bullet.x + 1;
                        let tempY: number = bullet.y - 1 + j;
                        this.destroyBlock(tempX, tempY);
                    }
                    destroyBullet = true;
                }
                break;
        }
        if (destroyBullet) {
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
            return true;
        }
        return false;
    }

    private destroyBlock(x: number, y: number) {
        if (this.blockMap[y][x].demolish) {
            this.blockMap[y][x] = this.blockFactory.createBlock(UnitType.Road, x, y);
        }
    }
}