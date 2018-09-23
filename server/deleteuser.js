var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { username: 'admin' };
  dbo.collection("users").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 user deleted");
    db.close();
  });
});
