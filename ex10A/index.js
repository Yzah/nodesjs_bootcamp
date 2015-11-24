// Même ex que le 8, mais on utilise le framework ecpress.js

var fs = require('fs'),
moment = require('moment'),
// pr éviter de devoir transformer la date avec data to string
express = require('express'),
_ = require('lodash'),
app = express();

app.use(function (req, res, next){
  console.log(moment().format()+'||'+req.url+'||'+req.method+'||'+req.ip);
  next();
})

app.get('/api/friends', function(req,res){
  fs.readFile('datas/datas.json', function(err, data){
    if (err) throw err;
    res.json(JSON.parse(data.toString('utf8')));
    // ça ns donne TOUT le fichier json
  })
});
app.get('/api/friends/:id', function(req,res){
  // :id veut dire que paramètre id est DYNAMIQUE
  var id = parseInt(req.params.id);
  // W3School JavaScript parseInt() Function :The parseInt() function parses a string and returns an integer.
// The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.
// If the radix parameter is omitted, JavaScript assumes the following:
// If the string begins with "0x", the radix is 16 (hexadecimal)
// If the string begins with "0", the radix is 8 (octal). This feature is deprecated
// If the string begins with any other value, the radix is 10 (decimal)
// Note: Only the first number in the string is returned!
// Note: Leading and trailing spaces are allowed.
// Note: If the first character cannot be converted to a number, parseInt() returns NaN.
  fs.readFile('datas/datas.json', function(err, data){
    if (err) throw err;
    var friends = JSON.parse(data.toString('utf8')).friends;
    console.log(friends);
    res.json(_.find(friends, { 'id':id}));
  });
});
app.use(function(req, res){
  res.status(404);
  res.send("The page "+req.url+" don't exist");
});

app.listen(3000,function(){
  console.log("Express started on localhost:3000 \n Press CTRL+c to terminate")
})
