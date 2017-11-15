var documentClient = require("documentdb").DocumentClient;
var config = require("./config");
var url = require('url');
var client = new documentClient(config.endpoint, { "masterKey": config.primaryKey });

var HttpStatusCodes = { NOTFOUND: 404 };
var databaseUrl = `dbs/${config.database.id}`;
var collectionUrl = `${databaseUrl}/colls/${config.collection.id}`;

module.exports = function logResponse (eventUpdate) {
    var date = new Date();
    eventUpdate.id = date.toISOString();
    console.log('attempting write to docdb');
    getDBDocument(eventUpdate)
        .then(()  =>   console.log('successfully written ', eventUpdate))
        .catch((error) => { console.log(`Completed with error ${JSON.stringify(error)}`) });


}


/**
 * Get the database by ID, or create if it doesn't exist.
 * @param {string} database - The database to get or create
 */
function getDatabase() {
    console.log ('CosmosDB Endpoint:' + config.endpoint);
    console.log ('CosmosDB Password:' + config.primaryKey);
    console.log(`Getting database:\n${config.database.id}\n`);

    return new Promise((resolve, reject) => {
        client.readDatabase(databaseUrl, (err, result) => {
            if (err) {
                if (err.code == HttpStatusCodes.NOTFOUND) {
                    client.createDatabase(config.database, (err, created) => {
                        if (err) reject(err)
                        else resolve(created);
                    });
                } else {
                    reject(err);
                }
            } else {
                resolve(result);
            }
        });
    });
}

/**
 * Get the collection by ID, or create if it doesn't exist.
 */
function getCollection() {
    console.log(`Getting collection:\n${config.collection.id}\n`);

    return new Promise((resolve, reject) => {
        client.readCollection(collectionUrl, (err, result) => {
            if (err) {
                if (err.code == HttpStatusCodes.NOTFOUND) {
                    client.createCollection(databaseUrl, config.collection, { offerThroughput: 400 }, (err, created) => {
                        if (err) reject(err)
                        else resolve(created);
                    });
                } else {
                    reject(err);
                }
            } else {
                resolve(result);
            }
        });
    });
}

/**
 * Get the document by ID, or create if it doesn't exist.
 * @param {function} callback - The callback function on completion
 */
function getDBDocument(document) {
    let documentUrl = `${collectionUrl}/docs/${document.id}`;
    console.log(`Getting document:\n${document.id}\n`);

    return new Promise((resolve, reject) => {
        client.readDocument(documentUrl, (err, result) => {
            if (err) {
                if (err.code == HttpStatusCodes.NOTFOUND) {
                    client.createDocument(collectionUrl, document, (err, created) => {
                        if (err) reject(err)
                        else resolve(created);
                    });
                } else {
                    reject(err);
                }
            } else {
                resolve(result);
            }
        });
    });
};


//initialize database

var initialLogEntry =

{
    raceCodex: 'N9999',
    heatID: '1',
    sport: 'appInitialized',
    event: 'appInitialized',
    indexed: 'Yes', 
    temp: '0', 
    precip: 'None', 
    gender: 'Men',

}
getDatabase()
.then(() => getCollection())
.then(() => {getDBDocument(initialLogEntry)})
.catch((error) => { console.log(`Completed with error ${JSON.stringify(error)}`) });
