var express = require('express');
var router = express.Router();
var CtrlQrcode = require('../controllers/qrcode.controllers.js');

router
	.route('/qrcode')
	.get(CtrlQrcode.generateQrcode);
  
  
/*   router
	.route('/qrcode/image/')
	.get(function(req, res) {
    console.log('GET the qrcode');
    res
      .status(200)
      .json({ "status" : true ,"image" : "uri to serve image"});
  }); */
  
    router
	.route('/qrcode/:mid')
	.get(function(req, res) {
		var merchantID = req.params.mid;
    console.log('GET the qrcode with merchant ID ' + merchantID);
    res
      .status(200)
      .json({ "status" : true ,"merchantID" : merchantID});
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