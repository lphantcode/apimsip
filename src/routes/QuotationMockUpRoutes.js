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
			if (req.body.data[0]["Country_A"] == "Brasil"){
				output = {"MRC": 4.13,
					"NRC": 0,
					"MRC Cost":3.30,
					"NRC Cost":0,
					"PPM_A_Fixed": 0.11,
					"PPM_A_Mobile": 0.36,
					"PPM_A_Public": 0.11,
					"PPM_B_Fixed": 0.0130,
					"PPM_B_Mobile": 0.0130,
					"PPM_A_Fixed_Cost": 0.0831,
					"PPM_A_Mobile_Cost": 0.2769,
					"PPM_A_Public_Cost": 0.0831,
					"PPM_B_Fixed_Cost": 0.0052,
					"PPM_B_Mobile_Cost": 0.0052,
					"Minutes": req.body.data[0].Minutes
					}
			}
			else if (req.body.data[0]["Country_A"] == "Peru"){
				output = {"MRC": 112.07,
					"NRC": 112.07,
					"MRC_Cost": 89.65,
					"NRC_Cost": 89.65,
					"PPM_A_Fixed": -1,
					"PPM_A_Mobile": -1,
					"PPM_A_Public": -1,
					"PPM_B_Fixed": -1,
					"PPM_B_Mobile": -1,
					"PPM_A_Fixed_Cost": -1,
					"PPM_A_Mobile_Cost": -1,
					"PPM_A_Public_Cost": -1,
					"PPM_B_Fixed_Cost": -1,
					"PPM_B_Mobile_Cost": -1,
					"Minutes": req.body.data[0].Minutes						
					}
			}
			else if (req.body.data[0]["Country_A"] == "Italy"){
				output = {"MRC": 0,
					"NRC": 1.25,
					"MRC_Cost": 0,
					"NRC_Cost": 1,
					"PPM_A_Fixed": 0.01,
					"PPM_A_Mobile": 0.18,
					"PPM_A_Public": 0.14,
					"PPM_B_Fixed": 0.0074,
					"PPM_B_Mobile": 0.0074,
					"PPM_A_Fixed_Cost": 0.0096,
					"PPM_A_Mobile_Cost": 0.1352,
					"PPM_A_Public_Cost": 0.11,
					"PPM_B_Fixed_Cost": 0.0052,
					"PPM_B_Mobile_Cost": 0.0052,
					"Minutes": req.body.data[0].Minutes,
				 	"request": req.body
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

