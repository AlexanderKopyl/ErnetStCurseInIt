var express = require('express');
var bodyParser = require('body-parser');
const shop = require('./shop').dep;


const port = 3000;
const pathName = '127.0.0.1';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/",function (req,res) {
    res.send(shop)
});

app.get("/api/v1/products",function (req,res) {
    res.send(shop)
});

app.get("/api/v1/products/:id",function (req,res) {


    res.send(myProduct);
});

app.post("/api/v1/products",function (req,res) {
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

app.put('/api/v1/products/:id',function (req,res) {

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


app.delete('/api/v1/products/:id',function (req,res) {

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