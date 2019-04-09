import { Message } from './models/Message';
import { NetworkCommands } from './models/network-commands';
import { TankFactory } from './tank-factory';
import { Game } from './game';
import { Arena } from './models/arena';
import { Event } from "./models/event";


let scheme = document.location.protocol === "https:" ? "wss" : "ws";
let connectionUrl = scheme + "://" + document.location.hostname + ":" + document.location.port + "/ws";
let socket = new WebSocket(connectionUrl);
let author: number;
let game: Game = Game.getGame();
let arena: Arena = new Arena([]);
let keys: number[] = [];
let tankFactory = new TankFactory();

const button = document.getElementById("confirmName");
button.onclick = () => {
    var name: string = (<HTMLInputElement>document.getElementById("name")).value;
    if (name !== "") {
        socket.send(JSON.stringify(new Message(NetworkCommands.Name, 0, name)));
        document.getElementById("name").remove();
        document.getElementById("confirmName").remove();
    }
}

document.onkeydown = (e) => {
    var code = e.which;
    if (keys.indexOf(code) < 0) {
        keys.push(code);
    }
    game.allEvents.push(new Event(game.tanks[author], code))
};

document.onkeyup = (e) => {
    keys.splice(keys.indexOf(e.which), 1);
};

socket.onmessage = (event) => {
    console.log(event);
    let buffer = event.data;
    let message: Message = <Message>JSON.parse(buffer.substring(0, buffer.indexOf("}") + 1));
    switch (message.NetworkCommand) {
        case NetworkCommands.StartGame:
            author = message.Author;
            game.start(socket, author, [tankFactory.createTanks(3, 5), tankFactory.createTanks(3, 10)], arena);
            break;
        case NetworkCommands.PressedButton:
            game.addEvent(message.Content, message.Author);
            break;
        case NetworkCommands.EndGame:
            game.endGame();
            break;
        case NetworkCommands.Name:
            author = message.Author;
            break;
    }
};
