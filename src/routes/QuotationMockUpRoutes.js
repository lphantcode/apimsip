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
		if(req.body.service=='StandAlone'){			
			res.json({
			  "data": [
			    {
			      "subservice": "DDI StandAlone",
			      "MRC": 4.41775,
			      "NRC": 4.41775,
			      "MRC_Cost": 3.5342,
			      "NRC_Cost": 3.5342,
			      "salesforceCI": req.body.data[0].salesforceCI,
			      "PPM_A_Fixed": -1,
			      "PPM_A_Mobile": -1,
			      "PPM_A_Public": -1,
			      "PPM_A_Fixed_Cost": -1,
			      "PPM_A_Mobile_Cost": -1,
			      "PPM_A_Public_Cost": -1,
			      "PPM_B": 0.001,
			      "PPM_B_Cost": 0.0001,
			      "Minutes": 1000
			    },
			    {
			      "subservice": "ITFS StandAlone",
			      "MRC": 0.1875,
			      "NRC": 0,
			      "MRC_Cost": 0.15,
			      "NRC_Cost": 0,
			      "salesforceCI": req.body.data[0].salesforceCI,
			      "PPM_A_Fixed": -1,
			      "PPM_A_Mobile": -1,
			      "PPM_A_Public": -1,
			      "PPM_A_Fixed_Cost": -1,
			      "PPM_A_Mobile_Cost": -1,
			      "PPM_A_Public_Cost": -1,
			      "PPM_B": 0.001,
			      "PPM_B_Cost": 0.0001,
			      "Minutes": 1000
			    }
			  ]
			});	
		}
		else if(req.body.service=='Pure Inbound'){							
				res.json({"data": [
					    {
					      "MRC": 1,
					      "NRC": 2,
					      "MRC_Cost": 0.5,
					      "NRC_Cost": 1.5,
					      "salesforceCI": "a0a0D000001uICeQAM"
					    },					    
					    {
					      "MRC": 3,
					      "NRC": 4,
					      "MRC_Cost": 0.6,
					      "NRC_Cost": 1.6,
					      "PPM_A_Fixed": 0.01,
					      "PPM_A_Mobile": 0.18,
					      "PPM_A_Public": 0.14,
					      "PPM_A_Fixed_Cost": 0.0096,
					      "PPM_A_Mobile_Cost": 0.1352,
					      "PPM_A_Public_Cost": 0.11,
					      "salesforceCI": "a0a0D000001uICfQAM"
					    },
					    {
					      "MRC": 5.7,
					      "NRC": 6.7,
					      "MRC_Cost": 0,
					      "NRC_Cost": 1,
					      "salesforceCI": "a0a0D000001uIDpQAM"
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

