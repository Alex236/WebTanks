import { Message } from './models/Message';
import { NetworkCommands } from './models/network-commands';
import { TankFactory } from './tank-factory';
import { Game } from './game';
import { Arena } from './models/arena';
import { Event } from "./models/event";

import * as $ from 'jquery';
import { LittleGrid } from './view/little-grid';
import { Block } from './models/block';

let endButton = document.createElement("button");
endButton.innerHTML = "End Game";
endButton.id = "endButton";
// let setMap = document.createElement("input");
// setMap.id = "setMap";
// let acceptSetMap = document.createElement("button");
// acceptSetMap.innerHTML = "Set Map";
// acceptSetMap.id = "acceptSetMap";

let name: string;
let scheme = document.location.protocol === "https:" ? "wss" : "ws";
let connectionUrl = scheme + "://" + document.location.hostname + ":" + document.location.port + "/ws";
let socket = new WebSocket(connectionUrl);
let author: number;
let game: Game = Game.getGame();
let arena: Arena = new Arena([]);
let keys: number[] = [];
let tankFactory = new TankFactory();
let maps: [];

const button = document.getElementById("confirmName");
button.onclick = () => {
    name = (<HTMLInputElement>document.getElementById("name")).value;
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
            arena.blocks = [];
            (<Block[]>maps[parseInt(message.Content)]).forEach(block => {
                arena.blocks.push(new Block(block.x, block.y, block.unitType));
            });

            game.start(socket, author, [tankFactory.createTanks(3, 5), tankFactory.createTanks(3, 10)], arena);
            // document.getElementById("setMap").remove();
            // document.getElementById("acceptSetMap").remove();
            document.getElementById("gameController").appendChild(endButton);
            break;
        case NetworkCommands.PressedButton:
            game.addEvent(message.Content, message.Author);
            break;
        case NetworkCommands.EndGame:
            game.endGame();
            try
            {
                document.getElementById("endButton").remove();
            }
            catch(e)
            {
                socket = new WebSocket(connectionUrl);
                socket.send(JSON.stringify(new Message(NetworkCommands.Name, 0, name)));
            }
            // document.getElementById("gameController").appendChild(setMap);
            // document.getElementById("gameController").appendChild(acceptSetMap);
            break;
        case NetworkCommands.Name:
            document.getElementById("name").remove();
            document.getElementById("confirmName").remove();
            var div = document.getElementById("divForRounds");
                var h = document.createElement("h6");
                h.innerHTML = "All Rounds";
                var ul = document.createElement("ul");
                ul.setAttribute('id', 'rounds');
                ul.setAttribute('style', "list-style-type: none; padding-inline-start: 0;");
                div.appendChild(h);
                div.appendChild(ul);

            maps.forEach((arena, index) => {
                var li = document.createElement("li");
                var a = document.createElement("a");
                a.setAttribute('href', 'api/deleteArena/' + index.toString());
                a.setAttribute('type', 'POST');
                a.setAttribute('method', 'POST');
                a.innerHTML = "X";
                li.setAttribute('data', index.toString());
                var canvas = document.createElement("canvas");
                canvas.setAttribute('id', index.toString());
                canvas.setAttribute('width', "90%");
                canvas.setAttribute('height', "100%");
                li.appendChild(a);
                li.appendChild(canvas);
                ul.appendChild(li);
                let littleGrid = new LittleGrid(index.toString());
                littleGrid.draw(<Block[]>(arena));
                canvas.addEventListener("click", (event) => {
                    socket.send(JSON.stringify(new Message(NetworkCommands.SetMap, 0, index.toString())));
                });
            });
            // document.getElementById("gameController").appendChild(setMap);
            // document.getElementById("gameController").appendChild(acceptSetMap);
            author = message.Author;
            break;
    }
};

endButton.onclick = (event) => {
    socket.send(JSON.stringify(new Message(NetworkCommands.EndGame, author, "")));
};

// acceptSetMap.onclick = (event) => {
//     socket.send(JSON.stringify(new Message(NetworkCommands.SetMap, 0, setMap.value)));
// };

$.ajax({
    type: "GET",
    url: "api/allRounds",
    contentType: "text/plain",
    success: function (result: []) {
        maps = result;
    },
    error: function (xhr: any, resp: any, text: any) {
        console.log("error");
    }
});
