import { Parameters } from "./parameters"
import { EventType } from "./models/event-type";
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

export class Game {
    private tanks: Tank[] = [];
    private allEvents: Event[] = [];
    private filteredEvents: (() => void)[] = [];
    private blocks: Block[] = [];
    private grid: Grid = new Grid();
    private sound: Sound = new Sound();
    private bulletsFactory: BulletsFactory = new BulletsFactory();
    private bullets: Bullet[] = [];
    private blockMap: Block[][] = new Array();
    private blockFactory = new BlockFactory();
    private needRedraw: boolean = true;

    constructor(tanks: Tank[], arena: Arena) {
        this.blocks = arena.blocks;
        this.tanks = tanks;
        this.initializeMap();
        this.sound.run("startGame");
    }

    private initializeMap() {
        for (let i: number = 0; i < Parameters.fieldHeight; i++) {
            this.blockMap[i] = new Array();
        }
        for (let i: number = 0; i < Parameters.fieldHeight; i++) {
            for (let j: number = 0; j < Parameters.fieldWidth; j++) {
                this.blockMap[i][j] = this.blockFactory.createBlock(UnitType.Road, j, i);
            }
        }
        for (let i: number = 0; i < this.blocks.length; i++) {
            this.blockMap[this.blocks[i].y][this.blocks[i].x] = this.blocks[i];
        }
    }

    private calculate() {
        this.deleteUselessEvents();
        this.filteredEvents.forEach(event => event());
        this.filteredEvents.splice(0, this.filteredEvents.length);
        if (this.bullets.length !== 0) {
            this.moveBullet();
        }
        this.needRedraw = true;
    }

    public start() {
        let keys: number[] = [];
        document.onkeydown = (e) => {
            var code = e.which;
            if (keys.indexOf(code) < 0) {
                keys.push(code);
            }
            this.defineEvent(keys);
        };

        document.onkeyup = (e) => {
            keys.splice(keys.indexOf(e.which), 1);
        };
        this.view();
        setInterval(() => {
            if (this.allEvents.length !== 0 || this.bullets.length !== 0) {
                this.calculate();
            }
        }, Parameters.timer);
    }

    private async view() {
        await setInterval(() => {
            if (this.needRedraw) {
                this.grid.draw(this.getItems());
                this.needRedraw = false;
            }
        }, 10);
    }

    private defineEvent(keys: number[]) {
        keys.forEach(key => {
            switch (key) {
                case KeyCode.Up:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedUp));
                    break;
                case KeyCode.Down:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedDown));
                    break;
                case KeyCode.Left:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedLeft));
                    break;
                case KeyCode.Right:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedRight));
                    break;
                case KeyCode.Enter:
                    this.allEvents.push(new Event(this.tanks[0], EventType.PressedSpace));
                    break;
                case KeyCode.W:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedUp));
                    break;
                case KeyCode.S:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedDown));
                    break;
                case KeyCode.A:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedLeft));
                    break;
                case KeyCode.D:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedRight));
                    break;
                case KeyCode.Space:
                    this.allEvents.push(new Event(this.tanks[1], EventType.PressedSpace));
                    break;
            };
        });
    }

    private deleteUselessEvents() {
        let count = this.allEvents.length;
        let move = new Map();
        for (let i: number = 0; i < count; i++) {
            let temp: number = i;
            switch (this.allEvents[temp].eventType) {
                case EventType.PressedUp:
                    if (move.get(this.allEvents[i].tank) == undefined) {
                        move.set(this.allEvents[i].tank, true);
                        let tempTank: Tank = this.allEvents[i].tank;
                        this.filteredEvents.push(() => this.tankUp(tempTank));
                    }
                    break;
                case EventType.PressedDown:
                    if (move.get(this.allEvents[i].tank) == undefined) {
                        move.set(this.allEvents[i].tank, true);
                        let tempTank: Tank = this.allEvents[i].tank;
                        this.filteredEvents.push(() => this.tankDown(tempTank));
                    }
                    break;
                case EventType.PressedLeft:
                    if (move.get(this.allEvents[i].tank) == undefined) {
                        move.set(this.allEvents[i].tank, true);
                        let tempTank: Tank = this.allEvents[i].tank;
                        this.filteredEvents.push(() => this.tankLeft(tempTank));
                    }
                    break;
                case EventType.PressedRight:
                    if (move.get(this.allEvents[i].tank) == undefined) {
                        move.set(this.allEvents[i].tank, true);
                        let tempTank: Tank = this.allEvents[i].tank;
                        this.filteredEvents.push(() => this.tankRight(tempTank));
                    }
                    break;
                case EventType.PressedSpace:
                    let counter = 0;
                    this.bullets.forEach(bullet => {
                        this.allEvents[i].tank === bullet.owner ? counter++ : {};
                    });
                    counter < this.allEvents[i].tank.avaliableShoots ? this.bullets.push(this.bulletsFactory.createBullet(this.allEvents[i].tank)) : {};
                    break;
            }
        }
        this.allEvents.splice(0, count);
    }

    private getItems(): ItemBase[] {
        return (<ItemBase[]>[]).concat(this.blocks, this.tanks, this.bullets);
    }

    private turn(tank: Tank, necessaryDirection: Directoin): boolean {
        if (tank.direction == necessaryDirection) {
            return false;
        }
        switch (tank.direction) {
            case Directoin.Up:
                Directoin.Down !== necessaryDirection ? this.turnFromAxisY(tank, necessaryDirection) : tank.direction = necessaryDirection;
                break;
            case Directoin.Down:
                Directoin.Up !== necessaryDirection ? this.turnFromAxisY(tank, necessaryDirection) : tank.direction = necessaryDirection;
                break;
            case Directoin.Left:
                Directoin.Right !== necessaryDirection ? this.turnFromAxisX(tank, necessaryDirection) : tank.direction = necessaryDirection;
                break;
            case Directoin.Right:
                Directoin.Left !== necessaryDirection ? this.turnFromAxisX(tank, necessaryDirection) : tank.direction = necessaryDirection;
                break;
        }
        return true;
    }

    private turnFromAxisY(currentTank: Tank, direction: Directoin) {
        currentTank.y = Math.round(currentTank.y);
        currentTank.direction = direction;
    }

    private turnFromAxisX(currentTank: Tank, direction: Directoin) {
        currentTank.x = Math.round(currentTank.x);
        currentTank.direction = direction;
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
        if (step === 0) {
            return;
        }
        this.bullets.forEach(item => {
            step = this.getAvaliableStep(step, this.moveUp(item, tank));
        });
        if (step === 0) {
            return;
        }
        if (tank.speed > tank.y - Math.trunc(tank.y)) {
            if (!this.checkBlocks(this.blockMap[Math.trunc(tank.y) - 1].slice(tank.x, tank.x + tank.size))) {
                step = this.getAvaliableStep(step, tank.y - Math.trunc(tank.y));
            }
        }
        tank.y -= step;
    }

    private moveUp(item: ItemBase, tank: Tank, avaliableStep: number = tank.speed): number {
        if (item.x === tank.x && item.y === tank.y) {
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
        if (step === 0) {
            return;
        }
        this.bullets.forEach(item => {
            step = this.getAvaliableStep(step, this.moveDown(item, tank));
        });
        if (step === 0) {
            return;
        }
        if (tank.speed > Math.ceil(tank.y) - tank.y) {
            if (!this.checkBlocks(this.blockMap[Math.ceil(tank.y) + tank.size].slice(tank.x, tank.x + tank.size))) {
                step = this.getAvaliableStep(step, Math.ceil(tank.y) - tank.y);
            }
        }
        tank.y += step;
    }

    private moveDown(item: ItemBase, tank: Tank, avaliableStep: number = tank.speed): number {
        if (item.x === tank.x && item.y === tank.y) {
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
        if (step === 0) {
            return;
        }
        this.bullets.forEach(item => {
            step = this.getAvaliableStep(step, this.moveLeft(item, tank));
        });
        if (step === 0) {
            return;
        }
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
        if (item.x === tank.x && item.y === tank.y) {
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
        if (step === 0) {
            return;
        }
        this.bullets.forEach(item => {
            step = this.getAvaliableStep(step, this.moveRight(item, tank));
        });
        if (step === 0) {
            return;
        }
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
        if (item.x === tank.x && item.y === tank.y) {
            return avaliableStep;
        }
        if (tank.x + tank.size <= item.x && tank.y < item.y + item.size && tank.y + tank.size > item.y) {
            let distance = item.x - (tank.x + tank.size);
            avaliableStep = avaliableStep <= distance ? avaliableStep : distance;
        }
        return avaliableStep;
    }

    private moveBullet() {
        this.bullets.forEach((bullet) => {
            let breakPoint = false;
            this.changeCoordinate(bullet);
            for (let i: number = 0; i < bullet.speed; i++) {
                this.tanks.forEach(item => {
                    if (this.defineBulletDirection(bullet, item)) {
                        breakPoint = true;
                        return;
                    }
                });
                if (breakPoint) {
                    break;
                }
                this.bullets.forEach(item => {
                    if (this.defineBulletDirection(bullet, item)) {
                        breakPoint = true;
                        return;
                    }
                });
                if (breakPoint) {
                    break;
                }
                this.destroyWall(bullet);
            }
        });
    }

    private changeCoordinate(bullet: Bullet) {
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
    }

    private defineBulletDirection(bullet: Bullet, item: RunningItem): boolean {
        if(!(bullet === item || bullet.owner === item)) {
            this.bulletMove(bullet, item);
        }
        return false;
    }

    private damageTank(bullet: Bullet, tank: Tank) {
        tank.health -= bullet.damage;
    }

    private destroyWall(bullet: Bullet) {
        switch (bullet.direction) {
            case Directoin.Up:
                this.destroyWallUp(bullet);
            case Directoin.Down:
                this.destroyWallDown(bullet);
            case Directoin.Left:
                this.destroyWallLeft(bullet);
            case Directoin.Right:
                this.destroyWallRight(bullet);

        }
    }

    private destroy(bullet: Bullet, item: RunningItem): boolean {
        console.log(item);
        console.log(item.item)
        switch (item.item) {
            case ItemType.Tank:
                if (item.x + item.size > bullet.x && bullet.x + bullet.size > item.x && item.y + item.size > bullet.y && bullet.y + bullet.size > item.y) {
                    console.log("tank")
                    this.damageTank(bullet, <Tank>item);
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                    return true;
                }
                break;
            case ItemType.Bullet:
                if (item.x + item.size >= bullet.x && bullet.x + bullet.size >= item.x && item.y + item.size >= bullet.y && bullet.y + bullet.size >= item.y) {
                    console.log("bullet")
                    this.bullets.splice(this.bullets.indexOf(<Bullet>item));
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                    return true;
                }
                break;
        }
        return false;
    }

    private destroyWallUp(bullet: Bullet): boolean {
        if (!this.blockMap[bullet.y][bullet.x].sweep || !this.blockMap[bullet.y][bullet.x + 1].sweep) {
            for (let j: number = 0; j < Parameters.bulletDestroy; j++) {
                let tempX: number = bullet.x - 1 + j;
                let tempY: number = bullet.y;
                this.destroyBlock(tempX, tempY);
            }
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
            return true;
        }
        return false;
    }

    private destroyWallDown(bullet: Bullet): boolean {
        if (!this.blockMap[bullet.y + 1][bullet.x].sweep || !this.blockMap[bullet.y + 1][bullet.x + 1].sweep) {
            for (let j: number = 0; j < Parameters.bulletDestroy; j++) {
                let tempX: number = bullet.x - 1 + j;
                let tempY: number = bullet.y + 1;
                this.destroyBlock(tempX, tempY);
            }
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
            return true;
        }
        return false;
    }

    private destroyWallLeft(bullet: Bullet): boolean {
        if (!this.blockMap[bullet.y][bullet.x].sweep || !this.blockMap[bullet.y + 1][bullet.x].sweep) {
            for (let j: number = 0; j < Parameters.bulletDestroy; j++) {
                let tempX: number = bullet.x;
                let tempY: number = bullet.y - 1 + j;
                this.destroyBlock(tempX, tempY);
            }
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
            return true;
        }
        return false;
    }

    private destroyWallRight(bullet: Bullet): boolean {
        if (!this.blockMap[bullet.y][bullet.x + 1].sweep || !this.blockMap[bullet.y + 1][bullet.x + 1].sweep) {
            for (let j: number = 0; j < Parameters.bulletDestroy; j++) {
                let tempX: number = bullet.x + 1;
                let tempY: number = bullet.y - 1 + j;
                this.destroyBlock(tempX, tempY);
            }
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
            return true;
        }
        return false;
    }

    private destroyBlock(x: number, y: number) {
        if (this.blockMap[y][x].demolish) {
            this.blocks.splice(this.blocks.indexOf(this.blockMap[y][x], 1));
            this.blockMap[y].splice(x, 1, this.blockFactory.createBlock(UnitType.Road, x, y));
        }
    }

    private bulletMove(bullet: Bullet, item: RunningItem) {
        if (bullet.y < 1 || bullet.y > Parameters.fieldHeight - bullet.size - 1 || bullet.x < 1 || bullet.x > Parameters.fieldWidth - bullet.size - 1) {
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
            this.needRedraw = true;
            return true;
        }
        if (this.destroy(bullet, item)) {
            return true;
        }
        return false;
    }
}