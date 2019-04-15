var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const request = require('request');


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


const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
let currency = {};

request(url,function (req,res,body) {
    currency = JSON.parse(body) ;
});

app.get('/currency',function (req,res) {
    res.render('currency',{
        currency:currency
    });
});


app.get('/products',function (req,res) {
    res.render('producs',{
        my_product: 'APPLE',
        fruits: [{
            id: 1,
            name: 'Apple'
        },
         {
            id: 2,
            name: 'Orange'
         }]
    });
});
app.get('/add/product',function (req,res) {
    res.render('add_product');
});

app.listen(port,pathName,function () {
    console.log('Start listening');
});