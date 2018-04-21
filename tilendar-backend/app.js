//Load the dependencies
const express = require('express'),
      bodyPaser = require('body-parser'),
      morgan = require('morgan'),
      mongoose = require('mongoose');

//Load the config
const config = require('./config');
const port = process.env.PORT || 3000;

//Express configuration
const app = express();

// Parse JSON and url-encoded query
app.use(bodyPaser.urlencoded({extended:true}));
app.use(bodyPaser.json());

// State routes
app.use(require('./routes'));

//set the secret key variable for jwt
app.set('jwt-secret', config.secret);

//connecting db
mongoose.connect(config.mongodbUri);
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("db works");
});

// Open server
app.listen(port, () => {
    console.log('server connected');
});
