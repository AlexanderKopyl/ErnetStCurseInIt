
const socket = io();
const button = document.querySelector('#button-send');
const inputTextArea = document.querySelector('#input-box');

button.addEventListener('click',function () {
    socket.emit('input value',inputTextArea.value); });

socket.on('input value', function (msg) {
    var p = document.createElement('p');
    p.innerHTML = msg;
    document.body.appendChild(p);
});

socket.emit('connection');