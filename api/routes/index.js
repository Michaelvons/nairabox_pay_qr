var express = require('express');
var router = express.Router();
/* var CtrlQrcode = require(../controllers/qrcode.controllers.js) */

router
	.route('/qrcode')
	.get(function(req, res) {
    console.log('GET the qrcode');
    res
      .status(200)
      .json({ "status" : true ,"image" : "http://genimg.png"});
  });
  
  module.exports = router;