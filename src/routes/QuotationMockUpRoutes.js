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
			if (req.body.data[0]["Country A"] == "Brazil"){
				output = {"MRC": 4.13,
					"NRC": 0,
					"MRC Cost":3.30,
					"NRC Cost":0,
					"PPM A Fixed": 0.11,
					"PPM A Mobile": 0.36,
					"PPM A Public": 0.11,
					"PPM B Fixed": 0.0130,
					"PPM B Mobile": 0.0130,
					"PPM A Fixed Cost": 0.0831,
					"PPM A Mobile Cost": 0.2769,
					"PPM A Public Cost": 0.0831,
					"PPM B Fixed Cost": 0.0052,
					"PPM B Mobile Cost": 0.0052,
					"Minutes": req.body.data[0].Minutes						
					}
			}
			else if (req.body.data[0]["Country A"] == "Perú"){
				output = {"MRC": 112.07,
					"NRC": 112.07,
					"MRC Cost": 89.65,
					"NRC Cost": 89.65,
					"PPM A Fixed": 0.13,
					"PPM A Mobile": 0.13,
					"PPM A Public": 0.13,
					"PPM B Fixed": 0.0159,
					"PPM B Mobile": 0.0159,
					"PPM A Fixed Cost": 0.0986,
					"PPM A Mobile Cost": 0.0986,
					"PPM A Public Cost": 0.0986,
					"PPM B Fixed Cost": 0.0052,
					"PPM B Mobile Cost": 0.0052,
					"Minutes": req.body.data[0].Minutes						
					}
			}
			else if (req.body.data[0]["Country A"] == "Italy"){
				output = {"MRC": 0,
					"NRC": 1.25,
					"MRC Cost": 0,
					"NRC Cost": 1,
					"PPM A Fixed": 0.01,
					"PPM A Mobile": 0.18,
					"PPM A Public": 0.14,
					"PPM B Fixed": 0.0074,
					"PPM B Mobile": 0.0074,
					"PPM A Fixed Cost": 0.0096,
					"PPM A Mobile Cost": 0.1352,
					"PPM A Public Cost": 0.11,
					"PPM B Fixed Cost": 0.0052,
					"PPM B Mobile Cost": 0.0052,
					"Minutes": req.body.data[0].Minutes						
					}
			};
			res.json(output);	
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

