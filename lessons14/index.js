const http = require('http');

var express = require('express');
var bodyParser = require('body-parser');



const port = 3000;
const pathName = '127.0.0.1';
//
// http.createServer((req,res)=>{
//
//     res.end();
// }).listen(port,pathName,()=>{
//     console.log('Start listening');
// });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var products = [
    {
        id: 1,
        name:'apple',
        units: 'kg',
        quantity: 30,
        price: 20
    },
    {
        id: 2,
        name:'orange',
        units: 'kg',
        quantity: 50,
        price: 40
    }
];

app.get("/products",function (req,res) {
    res.send(products)
});

app.get("/products/:id",function (req,res) {
    var myProduct = products.find(function (product) {
        return product.id === +req.params.id;
    });

    res.send(myProduct);
});

app.post("/products",function (req,res) {
    console.clear();
    var product = {
        id: Date.now(),
        name: req.body.name,
        units: req.body.units,
        quantity: req.body.quantity,
        price: req.body.price,
    };

    products.push(product);
    res.send(products);
});

app.listen(port,pathName,function () {
    console.log('Start listening');
});