//Controller to generate QR code
module.exports.generateQrcode = function(req, res){
	console.log('GET the qrcode');
    res
      .status(200)
      .json({ "status" : true ,
			"image" : "http://scan.nairabox.com/qrcode/qrcode.png",
			"mid":190278397638
			});
	
};