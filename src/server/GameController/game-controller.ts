export class GameController {
    serverAdres: string = "ws://localhost:5002/ws";
    lobbyId: string;
    client: WebSocket;

    constructor(argv: string[]) {
        this.lobbyId = argv[2];
        this.client = new WebSocket(this.serverAdres);
    }

    public startListening() {

    }
}


// // Вешаем на него обработчик события подключения к серверу
// client.on('connect', handler);

// // Подключаемся к нужному ресурсу
// client.connect('ws://localhost:5002/ws');

// function handler(connection) {
//     connection.on('message', function(message) {
//             // делаем что-нибудь с пришедшим сообщением
//             console.log(message);
//         })
//         // посылаем сообщение серверу
//     connection.sendUTF('Hi, there!');
// }