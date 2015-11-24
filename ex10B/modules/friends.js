var fs = require('fs'),
_ = require('lodash');
function friends(cb) {
  console.log("test");
  // API PRIVEE
  // init DATA
var friends = null;
fs.readFile('datas/datas.json', function(err, data) {
  if (err) throw err;
  friends = JSON.parse(data.toString('utf8')).friends;
  cb();
});


function getAllFriends()
{
  return (friends);
  }
  function getFriend(id) {
    return(_.find(friends, {'id': id}));
  }

  //API publique
  var that = {};
  that.getFriend = getFriend;
  that.getAllFriends =getAllFriends;
  return that;
}
module.exports = friends;
