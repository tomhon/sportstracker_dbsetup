var config = {}

config.endpoint = process.env.CosmosDB_Endpoint  ;
config.primaryKey = process.env.CosmosDB_Key  ; 

config.database = {
    "id": "SportTrackingDB"
};

config.collection = {
    "id": "V1 Testing"
};



module.exports = config;