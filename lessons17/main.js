const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { "useNewUrlParser": true },function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    var dbo = db.db("mydb");

    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
