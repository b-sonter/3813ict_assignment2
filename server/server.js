///////////////////////////////////////////////////////////////////////////////
// Main server javascript file
//
//
//
//
//
//
///////////////////////////////////////////////////////////////////////////////

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/chatDb';

//for sockets
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

require('./routes.js')(app, path);
require('./socket.js')(app, io);
require('./listen.js')(http);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

const cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//Read from database
app.post('/api/login', (req, res) => {
    MongoClient.connect(url, function(err, db){
      if(err) throw err;

      //search for user in the database based on input to login
      let dbo = db.db('chatDb');
      let query = {"username": req.body.username};
      dbo.collection('user').findOne(query, function(err, data){
        //console.log(data);
        let response = {};
        if(data == null){
          // Username doesn't exist
          console.log("username doesn't eixst");
          response.success = false;
        } else {
          //returns confirmation that user exists and password matches for that user
          //console.log("username exists");
          if(data.password == req.body.password){
            console.log("passwords match");
            response.success = true;
            response.user = data;
          }
          else{
            // returns when the password doesnt match for the user
            //console.log("passwords do not match");
            response.success = false;
          }
        }
        //send user data from database
        res.send(response);

        db.close();
      })
    });
})

//add new user check
app.post('/api/newuser', (req, res) => {
    MongoClient.connect(url, function(err, db){
      if(err) throw err;

      //search for user in the database based on input to login
      let dbo = db.db('chatDb');
      let query = {"username": req.body.username};
      dbo.collection('user').findOne(query, function(err, data){

        let response = {};
        if(data == null){
          // Username doesn't exist
          response.success = true;

        } else {
          //Username already exists
          response.success = false;
        }
        //send user data from database
        res.send(response);

        db.close();
      })
    });
})

//write new user to user collection
app.post('/api/newuserwrite', (req, res) => {
    MongoClient.connect(url, function(err, db){
      let newUser = {
        "username": req.body.username,
        "password": req.body.password,
        "permissions": req.permissions
      }
      let dbo = db.db('chatDb');
      dbo.collection('user').insertOne(newUser, function(err, data){
        if(err) throw err;
        res.send(true)
      })
    });
    console.log("New user: " + req.body.username);
    db.close();
});


//check if user can be deleted
app.post('/api/checkfordelete', (req, res) => {
  MongoClient.connect(url, function(err, db){
    if(err) throw err;

    let dbo = db.db('chatDb');
    let query = {"username": req.body.username};

    dbo.collection('user').findOne(query, function(err, data){
      let response = {};
      if(data == null){
        response.success = false;
        console.log("Null");
      } else {
        response.success = true;
        console.log("Username can be deleted");
      }
      res.send(response);

      db.close();
    })
  })
});

//delete user from database
app.delete('/api/deleteuser', (req, res) => {
  MongoClient.connect(url, function(err, db){
    if(err) throw err;

    let dbo = db.db('chatDb');
    let ObjectID = require('mongodb').ObjectID;

    let query = {_id: ObjectID(id)};
    console.log(query._id)
    dbo.collection('user').deleteOne(query, function(err, data){
      if(err) throw err;
      res.send(true)
    });

    db.close();
  })
  console.log("Deleted user: " + req.body.username);
});


//get group data from database
app.post('/api/groups', (req, res) => {
    MongoClient.connect(url, function(err, db){
      if(err) throw err;

      //search for user in the database based on input to login
      let dbo = db.db('chatDb');
      dbo.collection("groups").find({}).toArray(function(err, result) {
        if(err) throw err;
        res.send(result);
        console.log(result);
        db.close();
      })
    });
})


//lsiten to server
app.listen(3000, () => console.log('Chat server running on port 3000!'));
