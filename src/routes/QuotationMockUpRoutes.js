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
		console.log(req.body);
		if(req.body.service=='ITFS StandAlone'){							
				res.json({"escenario": "StandAlone",
					  "data": {
						"MRC": 50,
						"NRC": 20,
						"MRC Cost":30,
						"NRC Cost":10,
						"PPM A Fixed": 0.01,
						"PPM A Mobile": 0.02,
						"PPM A Public": 0.03,
						"PPM B Fixed": 0.04,
						"PPM B Mobile": 0.05,
						"PPM A Fixed Cost": 0.001,
						"PPM A Mobile Cost": 0.002,
						"PPM A Public Cost": 0.003,
						"PPM B Fixed Cost": 0.004,
						"PPM B Mobile Cost": 0.005,
						"Minutes": req.body.Minutes
						}
					 });	
		}
		else if(req.body.service=='Pure Inbound'){							
				res.json({"service":"Pure Inbound",
						"subservice":[
						{"type":"DID",
						"MRC":100,
						"NRC":5
						},
						{"type":"ITFS",
						"MRC":50,
						"NRC":10,
						"PPM_A_Fixed": 0.01,
						"PPM_A_Mobile": 0.02,
						"PPM_A_Payphone": 0.03
						},
						{"type":"Trunk",
						"MRC":200,
						"NRC":50
						}]
						}
					);	
		}
		
		else if(req.body.service=='Trunk'){							
				res.json({
							"MRC": 150,
							"NRC": 120
							}
					);	
		}
		else{	
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

