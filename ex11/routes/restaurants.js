'use strict';
let express = require('express'),
router = express.Router(),
restaurantModel = require(`${process.cwd()}/models/restaurants`)();
//.cwd = in the current working directory
router.get('/', function(req,res){
  restaurantModel.getAll(function(err,data){
    if(err) throw err;
      res.json(data);
    });
  })

router.get('/:id', function(req,res){
  let id = req.params.id;
  restaurantModel.getById(function(err,data){
      if(err) throw err;
        res.json(data);
      });
    })
// router.get('/', function(req,res){
//   res.send("you are in the route/api/restaurants")
// })

module.exports = router;
