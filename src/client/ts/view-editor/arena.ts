import { Parameters } from '../parameters';

export class Arena{
    readonly size: number[] = [Parameters.fieldWidth, Parameters.fieldHeight];
    public blocks: Object[] = [];

    constructor(){}
}