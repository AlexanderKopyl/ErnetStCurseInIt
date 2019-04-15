
const socket = io();
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click',function () {
    socket.emit('input value',input.value); });

socket.on('input value', function (msg) {
    var p = document.createElement('p');
    p.innerHTML = msg;
    document.body.appendChild(p);
});

socket.emit('connection');