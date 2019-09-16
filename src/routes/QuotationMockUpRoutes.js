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
			else if (req.body.data[0]["Country_A"] == "Italy"){
				if (req.body.data[0]["Provider_A"] == "Colt"){
					output = {"MRC":0,
						  "NRC":1.25,
						  "MRC_Cost":0,
						  "NRC_Cost":1,
						  "PPM_A_Fixed":0.01248,
						  "PPM_A_Mobile":0.17576,
						  "PPM_A_Public":0.14300000000000002,
						  "PPM_B":0.0035626184648526083,
						  "PPM_A_Fixed_Cost":0.0096,
						  "PPM_A_Mobile_Cost":0.1352,
						  "PPM_A_Public_Cost":0.11,
						  "PPM_B_Cost":0.0025479,
						  "Minutes":10000}
				}
				else if (req.body.data[0]["Provider_A"] == "Voxbone"){
					output = {"MRC":0.1875,"NRC":3.75,"MRC_Cost":0.15,"NRC_Cost":3,"PPM_A_Fixed":0.03549,"PPM_A_Mobile":0.29016000000000003,"PPM_A_Public":0.21554,"PPM_B":0.0035626184648526083,"PPM_A_Fixed_Cost":0.0273,"PPM_A_Mobile_Cost":0.2232,"PPM_A_Public_Cost":0.1658,"PPM_B_Cost":0.0025479,"Minutes":10000}
				}
			}
			else if (req.body.data[0]["Country_A"] == "Peru"){
				output = {"MRC":0,"NRC":102.73937500000001,"MRC_Cost":0,"NRC_Cost":82.1915,"PPM_A_Fixed":0.11752,"PPM_A_Mobile":0.11752,"PPM_A_Public":-1.3,"PPM_B":0.0028709354726631398,"PPM_A_Fixed_Cost":0.0904,"PPM_A_Mobile_Cost":0.0904,"PPM_A_Public_Cost":-1,"PPM_B_Cost":0.0020547,"Minutes":20000 }
			}
			res.json(output);	
		}
		else if(req.body.service=='Pure Inbound'){							
				res.json({"data": [
					    {
					      "MRC": 1,
					      "NRC": 2,
					      "MRC_Cost": 0,
					      "NRC_Cost": 1,
					      "salesforceCI": "a0a0D000001uICeQAM"
					    },					    
					    {
					      "MRC": 3,
					      "NRC": 4,
					      "MRC_Cost": 0,
					      "NRC_Cost": 1,
					      "PPM_A_Fixed": 0.01,
					      "PPM_A_Mobile": 0.18,
					      "PPM_A_Public": 0.14,
					      "PPM_A_Fixed_Cost": 0.0096,
					      "PPM_A_Mobile_Cost": 0.1352,
					      "PPM_A_Public_Cost": 0.11,
					      "salesforceCI": "a0a0D000001uICfQAM"
					    },
					    {
					      "MRC": 5,
					      "NRC": 6,
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

