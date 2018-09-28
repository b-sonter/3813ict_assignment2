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

const User = require('./model/user');

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
        console.log(data);
        let response = {};
        if(data == null){
          // Username doesn't exist
          console.log("username doesn't eixst");
          response.success = false;
        } else {
          //returns confirmation that user exists and password matches for that user
          console.log("username exists");
          if(data.password == req.body.password){
            console.log("passwords match");
            response.success = true;
            response.user = data;
          }
          else{
            // returns when the password doesnt match for the user
            console.log("passwords do not match");
            response.success = false;
          }
        }
        //send user data from database
        res.send(response);

        db.close();
      })
    });
})

//lsiten to server
app.listen(3000, () => console.log('Chat server running on port 3000!'))
