const express = require('express');
const app = express();
const http = require('http').Server(app);
const fs = require('fs');
var bodyParser = require('body-parser');
const request = require('request');
// const DB = require('./data/data_in_array');



const port = 3000;
const DBfile = "./data/data_in_file.txt";
let lastId = 1;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/',function (req,res) {
   res.render('index');
});


app.get("/products",function (req,res) {
    // res.send(DB.find());
    fs.readFile(DBfile,function (err,data) {
        res.writeHead(200,{'Content-Type':'text/json'});
        res.write(data);
        res.end();
    });
});

// app.get("/products/:id",function (req,res) {
//     // res.send(DB.findOne(+req.params.id - 1));
// });

app.post("/product/add",function (req,res) {
    console.clear();

    const product = {
        id: lastId++,
        name: req.body.name,
        units: req.body.units,
        quantity: req.body.quantity,
        price: req.body.price,
    };


    fs.appendFile(DBfile,JSON.stringify(product), function (err) {
        if(err) throw err;

        console.log('save');
    });

    res.send();
    // res.send(DB.insert(product));
});

http.listen(port,function (req,res) {
    console.log(`Server listen on port : ${port}`)
});