'use strict';
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

function persistData()
{
  var dataOut =JSON.stringify({"friends" : friends});
  fs.writeFile('datas/datas.json',dataOut, function(err){
    if(err) throw err;
  })
}

function getAllFriends()
{
  return (friends);
  }
  function getFriend(id) {
    return(_.find(friends, {'id': id}));
  }

  function deleteFriend(id){
    let index =_.findIndex(friends, { 'id': parseInt(id)})
    if(index !== -1){
        _.pullAt(friends,index)
      } else {
        console.log({"error":"no index was found"});
      }
      persistData();
      return friends;
  }

  function setFriends(ob) {
    if (!ob.id){
      let maxId =_.max(friends, 'id').id;
      let currentId = maxId + 1;
      ob.id = currentId;
      friends.push(ob);
    }else{
    // MANQUE DES CHOSES
    let index = _.findIndex
    }
    persistData();
    return friends;
  }

  //API publique
  var that = {};
  that.getFriend = getFriend;
  that.getAllFriends =getAllFriends;
  that.setFriends =setFriends;
  return that;
}
module.exports = friends;
