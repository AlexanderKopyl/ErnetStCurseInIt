const MongoClient = require('mongodb');
let url = "mongodb://localhost:27017/mydb";


MongoClient.connect("mongodb://localhost:27017/mean-course" , { useNewUrlParser: true }).then(
    (res) => {
        console.log("Connected to Database Successfully.")
    }
).catch(() => {
    console.log("Conntection to database failed.");
});