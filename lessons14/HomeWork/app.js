var express = require('express');
var bodyParser = require('body-parser');
const shop = require('./shop').dep;



const port = 3000;
const pathName = '127.0.0.1';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/api/v1/products",function (req,res) {
    res.send(shop)
});

app.get("/api/v1/products/:id",function (req,res) {


    shop.forEach(function (elements) {

        elements['cases'].forEach(function (elem) {

                elem['products'].forEach(function (window) {

                    let resultProduct = window['titles'].find(function (product) {
                        return product.id === +req.params.id;

                    });
                    res.send(resultProduct);
                });

            }
        )
    })


});

app.post("/api/v1/products/window/add/:id",function (req,res) {
    console.clear();

    var newWindow = {
        id: '',
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

    newWindow.id = myShopWindow['cases'].length + 1;

    myShopWindow['cases'].push(newWindow);


    res.send(myShopWindow);
});
app.post("/api/v1/products/department/add",function (req,res) {
    console.clear();

    var newDeparment = {
        id:shop.length + 1,
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

        id:"" ,
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
        product.id = wndowProduct['titles'].length + 1;
        wndowProduct['titles'].push(product);

    }

    res.send(wndowProduct)

});

// app.put('/api/v1/product/window/:id',function (req,res) {
//
//     products.find(function (product) {
//         if(product.id === +req.params.id){
//             var {name,units,quantity,price} = req.body;
//
//             product.name = name;
//             product.units = units;
//             product.quantity = quantity;
//             product.price = price;
//
//             return true;
//         }
//     });
//
//     res.send(products);
//
// });
//
//
// app.delete('/api/v1/products/:id',function (req,res) {
//
//     products.find(function (product) {
//
//         if(product.id === +req.params.id){
//             products.splice(products.indexOf(product),1);
//             return true;
//         }
//     });
//
//     res.send(products);
// });


app.listen(port,pathName,function () {
    console.log('Start listening');
})