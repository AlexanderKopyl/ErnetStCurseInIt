const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const port = 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(express.static('public'));
app.use('/js', express.static('../node_modules/jquery/dist'));
app.use('/js', express.static('../node_modules/bootstrap/dist/js'));
app.use('/css', express.static('../node_modules/bootstrap/dist/css'));


app.get('/',function (req,res) {
   res.render('index');
});

app.get('/chat',function (req,res) {
   res.render('chat');
});



io.on('connection',function (socket) {
    console.log('client has been connected');

    socket.on('input value',function (msg,name) {
       // console.log(msg);

        // socket.broadcast.emit('input value', msg); //Отправка всем кроме самого пользователя
        io.sockets.emit('input value', msg,name); //Отправка всем

    });

    socket.on('disconnect',function () {
        console.log('client has been disconnected')
    })
});

http.listen(port,function (req,res) {
    console.log(`Server listen on port : ${port}`)
});