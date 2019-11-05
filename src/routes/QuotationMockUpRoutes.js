//const QuoteService = require('../models/QuoteServiceModel');
var express_logger = require('express-logger-unique-req-id');
let logger = express_logger.getLogger();
const uuid = require('node-uuid');

module.exports = function (app) {
	
	app.get('/mSIPQuotation', async function(req, res) {
		res.json({
			  "data": [
				{
					    "text": 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
					    "reply": false,
					    "date": new Date()
					  }
				  ]
				});
  	});
	
  app.post('/mSIPQuotation', async function(req, res) {
	try{
		const OrderData = {
		  Service_Name : req.body.service,
		};
		console.log(req.body);
		console.log('....................................');
		console.log(req.body.data[0]);
		//console.log('IP: ' + req.connection.remoteAddress)
		console.log('IPs: ' + req.ip);
		if(req.body.service=='StandAlone'){			
			res.json({
				  "data": [
				    {
				      "subservice": "DDI StandAlone",
				      "salesforceCI": req.body.data[0].salesforceCI,
				      "MRC": 0,
				      "NRC": 0.9333333333333332,
				      "MRC_Cost": 0,
				      "NRC_Cost": 0.7,
				      "PPM_A_Fixed": -1.4285714285714286,
				      "PPM_A_Mobile": -1.4285714285714286,
				      "PPM_A_Public": -1.4285714285714286,
				      "PPM_B": -1.3698320105820108,
				      "PPM_A_Fixed_Cost": -1,
				      "PPM_A_Mobile_Cost": -1,
				      "PPM_A_Public_Cost": -1,
				      "PPM_B_Cost": -1,
				      "Minutes": 1000
				    },
				    {
				      "subservice": "ITFS StandAlone",
				      "salesforceCI": req.body.data[1].salesforceCI,
				      "MRC": 0,
				      "NRC": 1.3333333333333333,
				      "MRC_Cost": 0,
				      "NRC_Cost": 1,
				      "PPM_A_Fixed": 0.013714285714285714,
				      "PPM_A_Mobile": 0.19314285714285714,
				      "PPM_A_Public": 0.15714285714285717,
				      "PPM_B": -1.3699280045351474,
				      "PPM_A_Fixed_Cost": 0.0096,
				      "PPM_A_Mobile_Cost": 0.1352,
				      "PPM_A_Public_Cost": 0.11,
				      "PPM_B_Cost": -1,
				      "Minutes": 2000
				    },
				    {
				      "subservice": "ITFS StandAlone",
				      "salesforceCI": req.body.data[2].salesforceCI,
				      "MRC": 0,
				      "NRC": 0,
				      "MRC_Cost": 0,
				      "NRC_Cost": 0,
				      "PPM_A_Fixed": 0.14085714285714285,
				      "PPM_A_Mobile": 0.14085714285714285,
				      "PPM_A_Public": -1.4285714285714286,
				      "PPM_B": -1.369944003527337,
				      "PPM_A_Fixed_Cost": 0.0986,
				      "PPM_A_Mobile_Cost": 0.0986,
				      "PPM_A_Public_Cost": -1,
				      "PPM_B_Cost": -1,
				      "Minutes": 9000
				    }
				  ]
				});	
		}
		else if(req.body.service=='Pure Inbound'){							
				res.json({
					    "data": [
						{
						    "subservice": "Trunk",
						    "MRC": 98.903333333333336,
						    "NRC": -1.0,
						    "MRC_Cost": 38.74,
						    "NRC_Cost": -1.0,
						    "salesforceCI": "a0a0D000002HPJvQAO",
						    "PPM_A_Fixed": -1.0,
						    "PPM_A_Mobile": -1.0,
						    "PPM_A_Public": -1.0,
						    "PPM_A_Fixed_Cost": -1.0,
						    "PPM_A_Mobile_Cost": -1.0,
						    "PPM_A_Public_Cost": -1.0
						},
						{
						    "subservice": "DID",
						    "MRC": 4.88,
						    "NRC": 0.0,
						    "MRC_Cost": 3.66,
						    "NRC_Cost": 0.0,
						    "salesforceCI": "a0a0D000002HPL5QAO",
						    "PPM_A_Fixed": 0.033571428571428572,
						    "PPM_A_Mobile": 0.033571428571428572,
						    "PPM_A_Public": -1.0,
						    "PPM_A_Fixed_Cost": 0.0235,
						    "PPM_A_Mobile_Cost": 0.0235,
						    "PPM_A_Public_Cost": -1.0
						},
						{
						    "subservice": "DID",
						    "MRC": 4.88,
						    "NRC": 0.0,
						    "MRC_Cost": 3.66,
						    "NRC_Cost": 0.0,
						    "salesforceCI": "a0a0D000002HPL6QAO",
						    "PPM_A_Fixed": 0.1442857142857143,
						    "PPM_A_Mobile": 0.1442857142857143,
						    "PPM_A_Public": -1.0,
						    "PPM_A_Fixed_Cost": 0.101,
						    "PPM_A_Mobile_Cost": 0.101,
						    "PPM_A_Public_Cost": -1.0
						},
						{
						    "subservice": "ITFS",
						    "MRC": 0.0,
						    "NRC": 109.58866666666667,
						    "MRC_Cost": 0.0,
						    "NRC_Cost": 82.1915,
						    "salesforceCI": "a0a0D000002HPL7QAO",
						    "PPM_A_Fixed": 0.12914285714285714,
						    "PPM_A_Mobile": 0.12914285714285714,
						    "PPM_A_Public": -1.0,
						    "PPM_A_Fixed_Cost": 0.0904,
						    "PPM_A_Mobile_Cost": 0.0904,
						    "PPM_A_Public_Cost": -1.0
						},
						{
						    "subservice": "ITFS",
						    "MRC": -1.0,
						    "NRC": -1.0,
						    "MRC_Cost": -1.0,
						    "NRC_Cost": -1.0,
						    "salesforceCI": "a0a0D000002HPL8QAO",
						    "PPM_A_Fixed": 0.02928571428571429,
						    "PPM_A_Mobile": 0.22714285714285717,
						    "PPM_A_Public": -1.0,
						    "PPM_A_Fixed_Cost": 0.0205,
						    "PPM_A_Mobile_Cost": 0.159,
						    "PPM_A_Public_Cost": -1.0
						}
					    ]
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

