var fs=require('fs');


fs.readDir('/fichiers', function (err, data) {
  if (err) throw err;
  var fileName=data;
  var fileName = fileName.path.parse('/ex3/fichiers/.*');
  console.log(fileName);

});
