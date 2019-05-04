var connectionUrl = "ws://localhost:5000/ws";
var socket = new WebSocket(connectionUrl);
socket.onmessage = (event) => {
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.textContent = "Server: " + event.data;
    ul.appendChild(li);

};
var button = document.getElementById("send");
button.onclick = (event) => {
    let text = document.getElementById("input");
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.textContent = "Client: " + text.value;
    ul.appendChild(li);
};