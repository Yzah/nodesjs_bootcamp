'use strict';
let express = require('express'),
  fs = require('fs'),
  http = require('http'),
  morgan = require('morgan');

//
// mongojs = require('mongojs'),
// let app = express();
// let db = mongojs('restaurants',['restaurants']);
// // ds la base restaurants, va chercher la collection restaurants
//
// // LOGGER IN PLACE
// let accessLogStream = fs.createWriteStream('${__dirname}/logs/access.log',{flags:'a'})
// app.use(morgan('combined',{stream:accessLogStream}));
// // morgan permet de faire des log, mais il utilse pas du texte mais des stream. Qui sont des parties de data
// // USE STATIC ASSETS
// app.use(express.static('${__dirname}/public'));
// app.get('/api/restaurants', function(req,res){
//     db.restaurants.find(function(err, docs){
//       if(err) throw err;
//       res.json(docs);
//     })
// });
// app.get('/api/restaurants/:id', function(req,res){
//     db.restaurants.findOne({_id:mongojs.ObjecId(req.params.id)},function(err, docs){
//       if(err) throw err;
//       console.log(docs);
//       res.json(docs);
//
//
//
//
// http.createServer(app).listen(80,function(){
//   console.log("Express started on localhost : 3000 \n Press CTRL+c to terminate")
// });

// routes
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
