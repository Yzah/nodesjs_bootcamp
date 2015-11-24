'use strict';
let express = require('express'),
  fs = require('fs'),
  http = require('http'),
  morgan = require('morgan');


// ROUTES
let restaurants = require(`${__dirname}/routes/restaurants`);

let app = express();

// LOGGER IN PLACE
let accessLogStream = fs.createWriteStream(`${__dirname}/logs/access.log`, {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));
// morgan permet de faire des log, mais il utilse pas du texte mais des stream. Qui sont des parties de data

// USE STATIC ASSETS
app.use(express.static(`${__dirname}/public`));

// SET APP ROUTES AS MIDDLEWARES
app.use('/api/restaurants', restaurants);

http.createServer(app).listen(80, function() {
  console.log("Express started on localhost : 3000 \n Press CTRL+c to terminate")
});
