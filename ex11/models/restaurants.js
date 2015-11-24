'use strict';
let mongoose = require('mongoose');
function Restaurants() {
  let dbURI = "mongodb://localhost/restaurants";
  mongoose.connect(dbURI);

  let restaurantSchema =mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    address: {
        street: String,
        number: Number,
        city: String,
        zip: String
      },
    phone:{
      type: String,
      required: true
    },

    web: {
      type: String,
      required: true
    },
    types: {
      type: Array,
      required: true
    },
    rating: {
      type: Number,
      required: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });




  let restaurant = mongoose.model('Restaurant', restaurantSchema);
  function getAll (next) {
    restaurant.find(null, function(err, data){
      if (err) throw err;
      next(null,data);
    }).sort([['name', 'ascending']]);
  }

  function getById(id,next){
    restaurant.findByID(id, function(err, data){
      if (err) throw err;
      next(null,data);
    });
  }
  var that = {};
  that.getAll = getAll;
  that.getById = getById;
  return that;
}
module.exports = Restaurants;
