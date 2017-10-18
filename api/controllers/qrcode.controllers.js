const qr = require('qr-image');

//Controller to generate QR code using Merchant ID
module.exports.generateQrcodeWithID = function (req, res){
	let merchantID = req.query.mid;
	let merchantName = req.query.name;
	let size = req.query.size || 10;
	
	if (!merchantID || !merchantName) 
		return res.status(442)
				.json({"status": "failed", "message": "missing merchantID or name parameters"})

	let toEncode = `https://scan.nairabox.com/pay/merchant/${merchantID}/${merchantName}`		
	let qrimage = qr.image(toEncode, "M", {type:'png', size:size});

	qrimage.pipe(res)
};
