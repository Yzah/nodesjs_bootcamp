// Créer un serveur web qui, qd on tape localhost:3000/api/friends, donne la liste des amis et qd on tape/api/friedns/1, on ne reçoit que le 1er nom

var fs = require('fs'),
  http= require ('http');

// Create an HTTP server
var port = process.argv[2] || 3000;
var routes ={
  "/api/friends": "datas/datas.json"
}
var srv = http.createServer(function (req, res) {
  if (routes[req.url]) {
    // si il trouve une valeur ds mon objet, JS renvoie ???
    res.writeHead(200, {
      'Content-Type': 'text/json'
    });
    // renvoit un en-tête avec code 200=tout va bien, avec le contenu en json
    var routeFile = routes[req.url];
    fs.readFile(routeFile, function(err, data) {
      if (err) throw err
        res.end(data);
      })

  } else{
    res.writeHead(404);
    res.end('the url :' +req.url +" don't exist");
  }

}).listen(port, function() {
  console.log("Server now listening at port :" + port);
})
