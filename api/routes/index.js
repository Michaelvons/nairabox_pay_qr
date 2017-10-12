var express = require('express');
var router = express.Router();
var CtrlQrcode = require('../controllers/qrcode.controllers.js');

router
	.route('/qrcode')
	.get(CtrlQrcode.generateQrcode);
  
  
  router
	.route('api/assets/image/:img')
	.get(function(req, res) {
    console.log('GET the qrcode');
    res
      .status(200)
      .json({ "status" : true ,"image" : "uri to serve image"});
  });
/*   router
	.route('/qrcode')
	.get(function(req, res) {
    console.log('GET the qrcode');
    res
      .status(200)
      .json({ "status" : true ,"image" : "http://scan.nairabox.com/qrcode/qrcode.png"});
  }); */
  
  module.exports = router;