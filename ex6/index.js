// var http = require('http');
// http.get("http://www.triptyk.eu", function(res) {
//   console.log("Got response" + res.statusCode);
//   res.setEncoding('utf8');
//   // setEncoding pr transformer le binaire en caractères ??
//   res.on ('data', function(data) {
//     console.log(data);
//     console.log("--------------------------------------------------------------");
//   });
//   res.on('error', function(err){
//     console.log(err);
//   });
// })

//  version où on demande de chercher les liens (a) et de les écrire ds un fichier texte
// avec cheerio, on simule jquery
var http = require('http');
var cheerio = require('cheerio');
http.get("http://www.triptyk.eu", function(res) {
  console.log("Got response" + res.statusCode);
  res.setEncoding('utf8');
  // setEncoding pr transformer le binaire en caractères ??
  res.on ('data', function(data) {
    var $= cheerio.load(data);
    // on charge le module cheerio
    $('a').each(function(i,element){
      console.log(element.attribs.href);
      //  ds la doc de cheerio, on voit que les href sont ds attribs
    });
  });
  res.on('error', function(err){
    console.log(err);
  });
})
