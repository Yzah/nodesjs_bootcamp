// VERSION A : créer un serveur web qui affiche "hello world"+ date et heure ds le navigateur
// Rem : pr afficher ds le navigateur   localhost:3000
// res.writeHead(200, {'Content-Type': 'text/html'});
// renvoit un en-tête avec code 200=tout va bien, avec le contenu en html
// var http= require ('http');
//
// // Create an HTTP server
// var srv = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // renvoit un en-tête avec code 200=tout va bien, avec le contenu en html
//   res.end('Hello world it is now '+ new Date());
// });
// srv.listen(3000, function(err){
//   console.log("Server is now listening on port 3000");
// });


// VERSION B : ensuite on génère 2 routes. L'une vers le localhost et l'autre vers la page 2

// var http= require ('http');
// // Create an HTTP server
// var routes ={
//   "/":'Hello home',
//   "/page1":"Hello page 1 ",
//   "/page2":"Hello page 2"
// }
// var srv = http.createServer(function (req, res) {
//   console.log(req.url);
//   if(routes[req.url]){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     // renvoit un en-tête avec code 200=tout va bien, avec le contenu en html
//     res.end(routes[req.url]);
//
//   } else{
//     res.writeHead(404);
//     res.end('the url :'+req.url +" don't exist");
//   }
// });
// srv.listen(3000, function(err){
//   console.log("Server is now listening on port 3000");
// });


// VERSION C : on va créer du contenu ds les pages et les afficher

var http= require ('http');
var fs = require('fs');
// Create an HTTP server
var routes ={
  "/":'templates/index.html',
  "/page1":"templates/pag1.html"
  "/page2":"Hello page 2"
}
var srv = http.createServer(function (req, res) {
  console.log(req.url);
  if(routes[req.url]){
    // si il trouve une valeur ds mon objet, JS renvoie ???
    res.writeHead(200, {'Content-Type': 'text/html'});
    // renvoit un en-tête avec code 200=tout va bien, avec le contenu en html
    var routeFile = routes[req.url];
    fs.readFile(routeFile, function(err,data){
      if (err) throw err
        res.end(data);
      })

  } else{
    res.writeHead(404);
    res.end('the url :'+req.url +" don't exist");
  }
});
srv.listen(3000, function(err){
  console.log("Server is now listening on port 3000");
});
