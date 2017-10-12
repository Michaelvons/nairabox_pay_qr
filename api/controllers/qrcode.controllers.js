//Controller to generate QR code
var qrimage = require ('qr-image');
var fs = require('fs');
var qr = require('qr-image');

module.exports.generateQrcode = function(req, res){
/* 	console.log('GET the qrcode');
    res
      .status(200)
      .json({ "status" : true ,
			"image" : "http://scan.nairabox.com/qrcode/qrcode.png",
			"mid":190278397638
			}); */
	

  console.log('Generating QRcode');

/*   qrimage
  .image("sample qr code", "M", {type:'png',size:150})
  .pipe(fs.createWriteStream("assets/image/qrFile.png")); */
  
	var qrimage = qr.svgObject("test image here", "M", {type:'png',size:20});
	console.log(qrimage);

	res
      .status(200)
      .json({ "status" : true ,
			"image" : qrimage,
			"mid":190278397638
			});
	
};