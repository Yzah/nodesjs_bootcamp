var fs = require("fs");
fs.readdir('../', function(err, files) {
  if (err) throw err;
  fs.writeFile('result.txt',
  createNiceListOfFiles(files), function(err, data)
  {
    if (err) throw err;
    console.log("great");
  });
});
function createNiceListOfFiles(arrFiles){
  return arrFiles.join('\n');
}
// arrFiles est 1 paramètre de fct, donc on le définit à cet endroit-là
// files est un array ds la fct readdir (cf la doc)
// donc arrFiles retourne un array

// join  joint chaque élémt du tableau avec le séparateur demandé ici=enter

// ES6
