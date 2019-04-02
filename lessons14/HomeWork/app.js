var express = require('express');
var bodyParser = require('body-parser');
const shop = require('./shop').dep;
var last = require('./shop').lastId;



const port = 3000;
const pathName = '127.0.0.1';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/api/v1/products",function (req,res) {
    res.send(shop)
});

app.get("/api/v1/products/:id",function (req,res) {

    let arrProduct = [];
    shop.forEach(function (elements) {

        elements['cases'].forEach(function (elem) {

                elem['products'].forEach(function (window) {

                    let resultProduct = window['titles'].find(function (product) {
                        return product.id === +req.params.id;

                    });
                    arrProduct.push(resultProduct);
                });

            }
        )
    });


    res.send(arrProduct);

});

app.post("/api/v1/products/window/add/:id",function (req,res) {
    console.clear();

    var newWindow = {
        id: last++,
        products: [
            {
                name: req.body.products[0].name,
                titles: [ ]
            }
        ]


    };
    let myShopWindow = shop.find(function (window) {
        return window.id === +req.params.id;
    });

    myShopWindow['cases'].push(newWindow);


    res.send(myShopWindow);
});
app.post("/api/v1/products/department/add",function (req,res) {
    console.clear();

    var newDeparment = {
        id:last++,
        name: req.body.name,
        cases: [
        ]
    };

    shop.push(newDeparment);
    res.send(shop);
});

app.post("/api/v1/products/:dp/products/:id/:product",function (req,res) {
    console.clear();



    var product = {

        id:last++ ,
        name: req.body.name,
        units: req.body.units,
        quantity: req.body.quantity,
        price: req.body.price


    };

    let shopDp =  shop.find(function (window) {
        return window.id === +req.params.dp;
    });
    let window = shopDp['cases'].find(function (products) {
        return products.id === +req.params.id;
    });
    let wndowProduct = window['products'].find(function (product) {
        return product.id === +req.params.product;
    });
    if(wndowProduct){
        wndowProduct['titles'].push(product);
    }

    res.send(wndowProduct)

});

app.put('/api/v1/products/:dp/products/:id/:product/:sip',function (req,res) {

    var {name,units,quantity,price} = req.body;

    let shopDp =  shop.find(function (window) {
        return window.id === +req.params.dp;
    });
    let window = shopDp['cases'].find(function (products) {
        return products.id === +req.params.id;
    });
    let wndowProduct = window['products'].find(function (product) {
        return product.id === +req.params.product;
    });

    let sortProduct = wndowProduct['titles'].find(function (sort) {
       return sort.id === +req.params.sip
    });
        if(sortProduct){
            sortProduct.id = last++;
            sortProduct.units =  units;
            sortProduct.quantity = quantity;
            sortProduct.name = name;
            sortProduct.price = price;
        }


    res.send(wndowProduct);


});


app.delete('/api/v1/products/:dp/products/:id/:product/:sip',function (req,res) {

    let shopDp =  shop.find(function (window) {
        return window.id === +req.params.dp;
    });
    let window = shopDp['cases'].find(function (products) {
        return products.id === +req.params.id;
    });
    let wndowProduct = window['products'].find(function (product) {
        return product.id === +req.params.product;
    });

    wndowProduct['titles'].find(function (sort) {
        let idDelete = wndowProduct['titles'].indexOf(sort);
        if (sort.id === +req.params.sip){
            wndowProduct['titles'].splice(idDelete,1);
            console.log(wndowProduct['titles']);
            return true;
        }
    });

    res.send(wndowProduct);
});


app.listen(port,pathName,function () {
    console.log('Start listening');
});