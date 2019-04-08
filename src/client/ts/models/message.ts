import { NetworkCommands } from "./network-commands"

export class Message {
    public NetworkCommand: NetworkCommands;
    public Author: number;
    public Content: string;

    constructor(networkCpmmand: NetworkCommands, author: number, content: string) {
        this.NetworkCommand = networkCpmmand;
        this.Author = author;
        this.Content = content;
    }
}