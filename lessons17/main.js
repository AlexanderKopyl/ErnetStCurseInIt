const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { "useNewUrlParser": true },function(err, db) {
    if (err) throw err;
    console.log("Database created!");

    const dbo = db.db("mydb");

    let customer = { name: "Alexsander", address: "Highway 37" };

    var myquery = { address: "Canyon 123" };
    var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };

    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
    ];

    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");


        //Find the first document in the customers collection:
        dbo.collection("customers").findOne({address:"Highway 71"}, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });

        //Insert a document in the "customers" collection:
        // dbo.collection("customers").insertOne(customer, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document inserted");
        //     db.close();
        // });

        //Insert multiple documents in the "customers" collection:
        // dbo.collection("customers").insertMany(myobj, function(err, res) {
        //     if (err) throw err;
        //     console.log("Number of documents inserted: " + res.insertedCount);
        //     db.close();
        // });

        //If the query finds more than one record, only the first occurrence is updated.
        //Update the document with the address "Highway 37" to name="Mickey" and address="Canyon 123":

        // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document updated");
        //     db.close();
        // });

        //If the query finds more than one document, only the first occurrence is deleted.
        // dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        //     if (err) throw err;
        //     console.log("1 document deleted");
        //     db.close();
        // });
    });
});
