const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
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

//Routes
app.route('/api/login').get(function(req,res){
  //create route?
});

app.post('/api/login', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
    });
})

app.post('/api/login', (req, res) => {
  //res.send('Hello World!')

	mongoose.connect(url, function(err){
		if(err) throw err;
		User.find({
			username : req.body.username, password : req.body.password
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					message: 'Login Failed'
				})
			}

		})
	});
})

/*app.post('/api/user/create', (req, res) => {
	mongoose.connect(url, function(err){
		if(err) throw err;
		const user = new User({
			name: req.body.name,
			username: req.body.username,
			password: req.body.password
		})
		user.save((err, res) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: res
			})
		})
	});
})*/

app.listen(4200, () => console.log('Chat server running on port 4200!'))
