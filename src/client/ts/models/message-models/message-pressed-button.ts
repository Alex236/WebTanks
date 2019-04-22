import { MessageBase } from './message-base';
import { KeyCode } from '../key-code';

export class MessagePressedButton extends MessageBase {
    public Name: string;
    public Button: KeyCode;
}