module.exports = function(MongoClient, url){
  this.MongoClient = MongoClient;
  this.url = url;

  this.addUser = function(user, res){
    this.MongoClient.connect(this.url, function(err, db){
      if(err) throw err;
      let dbo = db.db("chatDb");

      //add new user
      dbo.collection("user").insertOne(user, function(err, result) {
        if(err) throw err;

        console.log("Added new User: " + user.username);
        res.send(true);
        db.close();
      })
    })
  }

  return this;

}
