var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
// var pug = require('pug');

const port = 3000;
const pathName = '127.0.0.1';

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',function (req,res) {
   res.send('Hello');
});

app.get('/products',function (req,res) {
    res.render('products');
});

app.listen(port,pathName,function () {
    console.log('Start listening');
});