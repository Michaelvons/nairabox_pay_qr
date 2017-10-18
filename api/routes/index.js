var express = require('express');
var router = express.Router();
var CtrlQrcode = require('../controllers/qrcode.controllers.js');
	
router
	.route('/qrcode')
	.get(CtrlQrcode.generateQrcodeWithID);
   
 module.exports = router;