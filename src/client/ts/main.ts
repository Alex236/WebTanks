import { Message } from './models/Message';
import { NetworkCommands } from './models/network-commands';
import { TankFactory } from './tank-factory';
import { Game } from './game';
import { Arena } from './models/arena';
import { Event } from "./models/event";

let endButton = document.createElement("button");
endButton.innerHTML = "End Game";
endButton.id = "endButton";
// let startButton = document.createElement("button");
// startButton.innerHTML = "Start Button";
// startButton.id = "startButton";
let setMap = document.createElement("input");
setMap.id = "setMap";
let acceptSetMap = document.createElement("button");
acceptSetMap.innerHTML = "Set Map";
acceptSetMap.id = "acceptSetMap";

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
    let buffer = event.data;
    let message: Message = <Message>JSON.parse(buffer.substring(0, buffer.indexOf("}") + 1));
    switch (message.NetworkCommand) {
        case NetworkCommands.StartGame:
            author = message.Author;
            game.start(socket, author, [tankFactory.createTanks(3, 5), tankFactory.createTanks(3, 10)], arena);
            document.getElementById("setMap").remove();
            document.getElementById("acceptSetMap").remove();
            document.getElementById("gameController").appendChild(endButton);
            break;
        case NetworkCommands.PressedButton:
            game.addEvent(message.Content, message.Author);
            break;
        case NetworkCommands.EndGame:
            game.endGame();
            document.getElementById("endButton").remove();
            document.getElementById("gameController").appendChild(setMap);
            document.getElementById("gameController").appendChild(acceptSetMap);
            break;
        case NetworkCommands.Name:
            document.getElementById("name").remove();
            document.getElementById("confirmName").remove();
            document.getElementById("gameController").appendChild(setMap);
            document.getElementById("gameController").appendChild(acceptSetMap);
            author = message.Author;
            break;
    }
};

endButton.onclick = (event) => {
    socket.send(JSON.stringify(new Message(NetworkCommands.EndGame, author, "")));
};

acceptSetMap.onclick = (event) => {
    socket.send(JSON.stringify(new Message(NetworkCommands.SetMap, 0, setMap.value)));
};
