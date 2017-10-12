
var qrimage = require ('qr-image');
var fs = require('fs');
var qr = require('qr-image');
var fileDir = "api/assets/image/";
var homeDir = "http://localhost:3000/";


module.exports.generateQrcodeWithID = function (req, res){
	var merchantID = req.params.mid;
    console.log('GET the qrcode with merchant ID ' + merchantID);
    res
      .status(200)
      .json({ "status" : true ,"merchantID" : merchantID});
	
};

//Controller to generate QR code
module.exports.generateQrcode = function(req, res){
/* 	console.log('GET the qrcode');
    res
      .status(200)
      .json({ "status" : true ,
			"image" : "http://scan.nairabox.com/qrcode/qrcode.png",
			"mid":190278397638
			}); */
			
	var timestamp = Date.now();
	
	console.log(timestamp);

	console.log('Generating QRcode');

	qrimage
		.image("sample qr code", "M", {type:'png',size:150})
		.pipe(fs.createWriteStream(fileDir + timestamp +".png"));
		
	var imgPath = homeDir + fileDir + timestamp+".png";
  
/* 	var qrimage = qr.image("test image here", "M", {type:'png',size:20}).pipe(fs.createWriteStream("assets/image/qrFile.png"));
	console.log(qrimage); */

	res
      .status(200)
      .json({ "status" : true,
			"timestamp":timestamp,
			"image" : imgPath,
			"mid":190278397638
			});
	
};