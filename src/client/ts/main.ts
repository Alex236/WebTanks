import { Message } from './models/Message';
import { NetworkCommands } from './models/network-commands';
import { TankFactory } from './tank-factory';
import { Game } from './game';
import { Arena } from './models/arena';
console.log("1");

console.log("1");
console.log("1");
console.log("1");
console.log("1");

var scheme = document.location.protocol === "https:" ? "wss" : "ws";
var connectionUrl = scheme + "://" + document.location.hostname + ":" + document.location.port + "/ws";
var socket = new WebSocket(connectionUrl);
let nameEntered: boolean = false;
const button = document.getElementById("confirmName");
button.onclick = () => {
    var name: string = (<HTMLInputElement>document.getElementById("name")).value;
    if (name !== "") {
        socket.send(JSON.stringify(new Message(NetworkCommands.Name, 0, name)));
        nameEntered = true;
    }
}
console.log("2");
socket.onmessage = (event) => {
    if (nameEntered) {
        var message: Message = <Message>JSON.parse(event.data);
        if (message.NetworkCommand === NetworkCommands.StartGame) {
            let game = new Game(message.Author, [(new TankFactory).createTanks(3, 5), (new TankFactory).createTanks(3, 10)], new Arena([]));
            game.start();
        }
    }
};
