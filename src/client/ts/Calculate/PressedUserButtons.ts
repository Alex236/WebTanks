export class PressedUserButtons {
    private arrowUp: boolean = false;
    private arrowDown: boolean = false;
    private arrowLeft: boolean = false;
    private arrowRight: boolean = false;
    private space: boolean = false;

    public getArrowUp(): boolean {
        return this.arrowUp;
    }

    public getArrowDown(): boolean {
        return this.arrowDown;
    }

    public getArrowLeft(): boolean {
        return this.arrowLeft;
    }
    
    public getArrowRight(): boolean {
        return this.arrowRight;
    }
    
    public getSpace(): boolean {
        return this.space;
    }

    public setArrowUp(state: boolean) {
        this.arrowUp = state;
    }

    public setArrowDown(state: boolean) {
        this.arrowDown = state;
    }

    public setArrowLeft(state: boolean) {
        this.arrowLeft = state;
    }

    public setArrowRight(state: boolean) {
        this.arrowRight = state;
    }

    public setSpace(state: boolean) {
        this.space = state;
    }
}
