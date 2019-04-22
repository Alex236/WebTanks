import { MessageSetName } from './models/message-models/message-set-name';
import { MessageType } from './models/message-models/message-type';
import { Message } from './models/message-models/message';
import { MessageSetMap } from './models/message-models/message-set-map';
import { MessageStartGame } from './models/message-models/message-start-game';
import { MessagePressedButton } from './models/message-models/message-pressed-button';
import { KeyCode } from './models/key-code';
import { MessageEndGame } from './models/message-models/message-end-game';

export class MessageFactory {
    public createMessageSetName(name: string): string {
        let message = new MessageSetName();
        message.Type = MessageType.SetName;
        message.Name = name;
        let stringMessage = JSON.stringify(message);
        let readyMessage = new Message();
        readyMessage.Type = MessageType.SetName;
        readyMessage.Content = stringMessage;
        return JSON.stringify(readyMessage);
    }

    public createMessageSetMap(map: string, name: string): string {
        let message = new MessageSetMap();
        message.Type = MessageType.SetMap;
        message.Map = map;
        message.Name = name;
        let stringMessage = JSON.stringify(message);
        return this.createMainMessage(stringMessage, message.Type);
    }

    public createMessageStartGame(name: string): string {
        let message = new MessageStartGame();
        message.Type = MessageType.StartGame;
        message.Name = name;
        let stringMessage = JSON.stringify(message);
        let readyMessage = new Message();
        readyMessage.Type = MessageType.StartGame;
        readyMessage.Content = stringMessage;
        return this.createMainMessage(stringMessage, message.Type);
    }

    public createMessagePressedButton(button: KeyCode, name: string): string {
        let message = new MessagePressedButton();
        message.Type = MessageType.PressedButton;
        message.Button = button;
        message.Name = name;
        let stringMessage = JSON.stringify(message);
        let readyMessage = new Message();
        readyMessage.Type = MessageType.PressedButton;
        readyMessage.Content = stringMessage;
        return this.createMainMessage(stringMessage, message.Type);
    }

    public createMessageEndGame(name: string): string {
        let message = new MessageEndGame();
        message.Type = MessageType.EndGame;
        message.Name = name;
        let stringMessage = JSON.stringify(message);
        let readyMessage = new Message();
        readyMessage.Type = MessageType.EndGame;
        readyMessage.Content = stringMessage;
        return this.createMainMessage(stringMessage, message.Type);
    }

    private createMainMessage(message: string, type: MessageType): string {
        let readyMessage = new Message();
        readyMessage.Type = type;
        readyMessage.Content = message;
        return JSON.stringify(readyMessage);
    }
}