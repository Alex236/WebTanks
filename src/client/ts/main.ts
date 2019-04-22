import { TankFactory } from './tank-factory';
import { Game } from './game';
import { Arena } from './models/arena';
import { Event } from "./models/event";

import * as $ from 'jquery';
import { LittleGrid } from './view/little-grid';
import { Block } from './models/block';
import { MessageType } from './models/message-models/message-type';
import { Message } from './models/message-models/message';
import { MessageFactory } from './message-factory';
import { MessageSetMap } from './models/message-models/message-set-map';
import { MessageSetName } from './models/message-models/message-set-name';
import { MessagePressedButton } from './models/message-models/message-pressed-button';
import { Tank } from './models/tank';
import { stringify } from 'querystring';
import { GameStatus } from './models/game-status';

let endButton = document.createElement("button");
endButton.innerHTML = "End Game";
endButton.id = "endButton";

let name: string;
let scheme = document.location.protocol === "https:" ? "wss" : "ws";
let connectionUrl = scheme + "://" + document.location.hostname + ":" + document.location.port + "/ws";
let socket = new WebSocket(connectionUrl);
let game: Game = Game.getGame();
let arena: Arena = new Arena([]);
let keys: number[] = [];
let tankFactory = new TankFactory();
let messageFactory = new MessageFactory();
let maps: [];
let status = GameStatus.InLobby;

const button = document.getElementById("confirmName");
button.onclick = () => {
    name = (<HTMLInputElement>document.getElementById("name")).value;
    if (name !== "") {
        socket.send(messageFactory.createMessageSetName(name));
    }
}

document.onkeydown = (e) => {
    var code = e.which;
    if (keys.indexOf(code) < 0) {
        keys.push(code);
    }
    if (status == GameStatus.InGame) {
        game.allEvents.push(new Event(game.tanks.get(name), code))
    }
};

document.onkeyup = (e) => {
    keys.splice(keys.indexOf(e.which), 1);
};

function startGame(content: string) {
    document.getElementById("divForRounds").hidden = true;
    name = (<MessageSetName>JSON.parse(content)).Name;
    status = GameStatus.InGame;
    arena.blocks = [];
    // (<Block[]>maps[parseInt(message.Content)]).forEach(block => {
    //     arena.blocks.push(new Block(block.x, block.y, block.unitType));
    // });

    let createdTanks: Map<string, Tank> = new Map<string, Tank>();
    createdTanks.set("tank1", tankFactory.createTanks(3, 5));
    createdTanks.set("tank2", tankFactory.createTanks(3, 10));

    game.start(socket, name, createdTanks, null);
    document.getElementById("gameController").appendChild(endButton);
}

function setName(content: string) {
    let message = <MessageSetName>JSON.parse(content);
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
            socket.send(messageFactory.createMessageSetMap(index.toString(), name));
        });
    });
    name = message.Name;
}

function pressedButton(content: string) {
    let message = <MessagePressedButton>JSON.parse(content);
    game.addEvent(message.Button, message.Name);
}

function endGame(content: string) {
    game.endGame();
    try {
        document.getElementById("divForRounds").hidden = false;
        document.getElementById("endButton").remove();
    }
    catch (e) {
        socket = new WebSocket(connectionUrl);
        socket.send(messageFactory.createMessageEndGame(name));
    }
    status = GameStatus.InLobby;
}

function clearJsonString(content: string): string {
    let counter = 0;
    for(let i = 0; i < content.length; i++) {
        switch(content[i]) {
            case '{':
            counter++;
            break;
            case '}':
            counter--;
            if(counter === 0)
            return content.substr(0, ++i);
        }
    }
    return null;
}

socket.onmessage = (event) => {
    let buffer = event.data;
    let message: Message = <Message>JSON.parse(clearJsonString(buffer));
    switch (message.Type) {
        case MessageType.StartGame:
            startGame(message.Content);
            break;
        case MessageType.PressedButton:
            pressedButton(message.Content);
            break;
        case MessageType.EndGame:
            endGame(message.Content);
            break;
        case MessageType.SetName:
            setName(message.Content);
            break;
    }
};



endButton.onclick = (event) => {
    socket.send(messageFactory.createMessageEndGame(name));
};

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
