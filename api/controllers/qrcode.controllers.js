var qrimage = require ('qr-image');
var fs = require('fs');
var qr = require('qr-image');

//Controller to generate QR code using Merchant ID
module.exports.generateQrcodeWithID = function (req, res){
	var merchantID = req.params.mid;
	var timestamp = Date.now();		

//the imageSync method returns the binary data of the genearted image	
	var qrimage = qr.imageSync("test image here", "M", {type:'png',size:20});
	
	res
      .status(200)
      .json({ "status" : true,
			"timestamp":timestamp,
			"image" : qrimage,
			"merchantID" : merchantID,		
			});
	
};
