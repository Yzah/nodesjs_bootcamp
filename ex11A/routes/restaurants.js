'use strict';
let express = require('express'),
router =express.Router();

router.get('/', function(req,res){
  res.send("you are in the route/api/restaurants")
})

module.exports = router;
