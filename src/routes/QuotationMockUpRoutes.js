//const QuoteService = require('../models/QuoteServiceModel');
var express_logger = require('express-logger-unique-req-id');
let logger = express_logger.getLogger();
const uuid = require('node-uuid');

module.exports = function (app) {
  app.post('/mSIPQuotation', async function(req, res) {
	try{
		const OrderData = {
		  Service_Name : req.body.service,
		};
		if(req.body.service!=undefined){							
				res.json({
							"MRC": 100,
							"NRC": 200
							}
					);	
		}else{	
			res.json({
				"Error": '201 ERROR'
				});
		}
	}catch (e){
		res.json({
			"Error Catch": '201 ERROR'
			});
	}
  });
}

