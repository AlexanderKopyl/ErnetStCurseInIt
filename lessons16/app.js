const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const port = 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');




app.get('/',function (req,res) {
   res.render('index');
});

let user = 0;
io.on('connection',function (socket) {
    user++;
    console.log('client has been connected  ' + user);

    socket.on('input value',function (msg) {
       // console.log(msg);

        // socket.broadcast.emit('input value', msg);
        io.sockets.emit('input value', msg);

    });

    socket.on('disconnect',function () {
        console.log('client has been disconnected')
    })
});

http.listen(port,function (req,res) {
    console.log(`Server listen on port : ${port}`)
});