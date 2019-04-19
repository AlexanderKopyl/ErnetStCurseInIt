// const http = require('http');

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

app.get("/",function (req,res) {
    res.send("Hello User")
});

app.get("/product",function (req,res) {
    console.log(departments);
    res.send(products)
});

app.get("/product/:id",function (req,res) {
    var myProduct = products.find(function (product) {
        return product.id === +req.params.id;
    });

    res.send(myProduct);
});

app.post("/product",function (req,res) {
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

app.put('/product/:id',function (req,res) {

    products.find(function (product) {
        if(product.id === +req.params.id){
            var {name,units,quantity,price} = req.body;

            product.name = name;
            product.units = units;
            product.quantity = quantity;
            product.price = price;

            return true;
        }
    });

    res.send(products);

});


app.delete('/product/:id',function (req,res) {

    products.find(function (product) {

        if(product.id === +req.params.id){
            products.splice(products.indexOf(product),1);
            return true;
        }
    });

    res.send(products);
});


app.listen(port,pathName,function () {
    console.log('Start listening');
});