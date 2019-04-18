
const socket = io();
const button = document.querySelector('#button-send');
const inputTextArea = document.querySelector('#input-box');
const msgGroup = document.querySelector('.msg-group');
var Name = prompt('Введите ваше имя');



button.addEventListener('click',function () {
    socket.emit('input value', inputTextArea.value,Name);

});

    socket.on('input value', function (msg,name) {
        var divMain = document.createElement('div'),
            div = document.createElement('div'),
            h6 = document.createElement('h6'),
            p = document.createElement('p');
        divMain.classList.add('card');
        div.classList.add("card-body");
        h6.classList.add("card-subtitle");
        h6.classList.add("mb-2");
        h6.classList.add("text-muted");
        h6.classList.add("text-left");
        p.classList.add('card-text');
        p.classList.add('float-left');
        p.innerHTML = msg;
        h6.innerHTML = name;

        div.appendChild(h6);
        div.appendChild(p);
        divMain.appendChild(div);
        msgGroup.appendChild(divMain);
        inputTextArea.value = '';
    });

socket.emit('connection');