const app = require('express')();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
const objectId = require("mongodb").ObjectID;
const path = require('path');

const port = 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render('index');
});

app.get("/customers", function (req, res) {

    MongoClient.connect(url, { "useNewUrlParser": true },function (err, db) {
        if (err) {
            throw err;
        }
        const mydb = db.db('mydb');
        mydb.collection('customers').find({}).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send(result);
            db.close();
        });
    });
});
// get by id
app.get("/customers/:id", function (req, res) {

    const id = new objectId(req.params.id);

    MongoClient.connect(url, { "useNewUrlParser": true },function (err, db) {
        if (err) {
            throw err;
        }
        const mydb = db.db('mydb');
        mydb.collection('customers').findOne({ _id: id }, function (err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
            db.close();
        });
    });
});


app.post('/customers', function (req, res) {
    const customer = {
        name: req.body.name,
        address:req.body.address
    };

    MongoClient.connect(url, { "useNewUrlParser": true },function (err, db) {
        if (err) {
            throw err;
        }
        const mydb = db.db('mydb');
        mydb.collection('customers').insertOne(customer, function (err, data) {
            res.send(customer);
            db.close();
        });
    });
});

app.put('/customers', function (req, res) {

    const id = new objectId(req.body.id);

    MongoClient.connect(url,{ "useNewUrlParser": true }, function (err, db) {
        if (err) {
            throw err;
        }
        const mydb = db.db('mydb');
        const myquery = { _id: id };
        const newValues = {
            $set: {
                name: req.body.name,
                address:req.body.address
            }
        };
        mydb.collection('customers').updateOne(myquery, newValues, function(err, result) {
                if (err) throw err;
                console.log("1 document updated");
                res.send(result);
                db.close();
            });
    });
});




// Delete
app.delete("/customers/:id", function (req, res) {
    const id = new objectId(req.params.id);

    MongoClient.connect(url, { "useNewUrlParser": true },function (err, db) {
        if (err) {
            throw err;
        }
        const mydb = db.db('mydb');

        const myquery = { _id: id };
        mydb.collection('customers').deleteOne(myquery, function(err, obj) {
                if (err) throw err;
                console.log("1 document deleted");
                db.close();
            });
    });
});


http.listen(port, () => {
    console.log(`listening on ${port}`);
});