var fs=require('fs');
fs.readFile('/fake.txt', function (err, data) {
  if (err) throw err;
  var inData=data.toString();
  var lineCount = inData.split('\n').length;
  console.log(lineCount);
  // console.log(data.toString().split())'\n').length;
});
