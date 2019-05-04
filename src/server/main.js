var connectionUrl = "ws://localhost:5002/ws";
var socket = new WebSocket(connectionUrl);
socket.send("{\"Type\":5,\"Content\":\"{\"Type\":5}\"}");
socket.onmessage = (event) => {
    socket.send(event.data);
};