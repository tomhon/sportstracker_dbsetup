var restify = require('restify');
var logResponse = require('./logResponse');

var server = restify.createServer();
server.use(restify.plugins.queryParser());

server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

function logEntryDataStructure() {

    this.raceCodex = 'R9999', //unique identifier for this race
    this.phaseID = 'Final', //heat#1, quarters#1, semi#1, final
    this.sport = 'snowboarding',
    this.event = 'snowboardCross',
    this.indexed = 'Yes', 
    this.temp = '0', //ceclius
    this.precip =  'None', //None, Rain, Light Snow, Heavy Snow
    this.gender =  null,
    this.bibRedStartLane=  null,
    this.bibGreenStartLane=  null,
    this.bibBlueStartLane=  null,
    this.bibBlackStartLane=  null,
    this.bibWhiteStartLane=  null,
    this.bibYellowStartLane=  null,

    this.bibRedHolePosition=  null,
    this.bibGreenHolePosition=  null,
    this.bibBlueHolePosition=  null,
    this.bibBlackHolePosition=  null,
    this.bibWhiteHolePosition=  null,
    this.bibYellowHolePosition=  null,

    this.bibRedSplitPosition=  null,
    this.bibGreenSplitPosition=  null,
    this.bibBlueSplitPosition=  null,
    this.bibBlackSplitPosition=  null,
    this.bibWhiteSplitPosition=  null,
    this.bibYellowSplitPosition=  null,

    this.bibRedFinishPosition=  null,
    this.bibGreenFinishPosition=  null,
    this.bibBlueFinishPosition=  null,
    this.bibBlackFinishPosition=  null,
    this.bibWhiteFinishPosition=  null,
    this.bibYellowFinishPosition=  null
};


function parseQueryToLogEntry(query) {
    var tempLogEntry = new logEntryDataStructure();

    tempLogEntry.raceCodex = query.raceCodex, //unique identifier for this race
    tempLogEntry.phaseID = query.phaseID, //heat#1, quarters#1, semi#1, final
    tempLogEntry.sport = query.sport,
    tempLogEntry.event = query.event,
    tempLogEntry.indexed = query.indexed, 
    tempLogEntry.temp = query.temp, //ceclius
    tempLogEntry.precip =  query.precip, //None, Rain, Light Snow, Heavy Snow
    tempLogEntry.gender =  query.gender,
    tempLogEntry.bibRedStartLane=  query.bibRedStartLane,
    tempLogEntry.bibGreenStartLane=  query.bibGreenStartLane,
    tempLogEntry.bibBlueStartLane=  query.bibBlueStartLane,
    tempLogEntry.bibBlackStartLane=  query.bibBlackStartLane,
    tempLogEntry.bibWhiteStartLane=  query.bibWhiteStartLane,
    tempLogEntry.bibYellowStartLane=  query.bibYellowStartLane,

    tempLogEntry.bibRedHolePosition=  query.bibRedHolePosition,
    tempLogEntry.bibGreenHolePosition=  query.bibGreenHolePosition,
    tempLogEntry.bibBlueHolePosition=  query.bibBlueHolePosition,
    tempLogEntry.bibBlackHolePosition=  query.bibBlackHolePosition,
    tempLogEntry.bibWhiteHolePosition=  query.bibWhiteHolePosition,
    tempLogEntry.bibYellowHolePosition=  query.bibYellowHolePosition,

    tempLogEntry.bibRedSplitPosition=  query.bibRedSplitPosition,
    tempLogEntry.bibGreenSplitPosition=  query.bibGreenSplitPosition,
    tempLogEntry.bibBlueSplitPosition=  query.bibBlueSplitPosition,
    tempLogEntry.bibBlackSplitPosition=  query.bibBlackSplitPosition,
    tempLogEntry.bibWhiteSplitPosition=  query.bibWhiteSplitPosition,
    tempLogEntry.bibYellowSplitPosition=  query.bibYellowSplitPosition,

    tempLogEntry.bibRedFinishPosition=  query.bibRedFinishPosition,
    tempLogEntry.bibGreenFinishPosition=  query.bibGreenFinishPosition,
    tempLogEntry.bibBlueFinishPosition=  query.bibBlueFinishPosition,
    tempLogEntry.bibBlackFinishPosition=  query.bibBlackFinishPosition,
    tempLogEntry.bibWhiteFinishPosition=  query.bibWhiteFinishPosition,
    tempLogEntry.bibYellowFinishPosition=  query.bibYellowFinishPosition
    return tempLogEntry;
};



server.get('/', function (req, res){
    console.log("Inbound Request:" , req.query);
    res.header('Access-Control-Allow-Origin', "*");

    var logEntry = parseQueryToLogEntry(req.query);
    logResponse (logEntry);
    statusUpdateResponse = "Outbound Response: Race " + req.query.raceCodex + ": Entry Logged";
    console.log( statusUpdateResponse);
    res.send(statusUpdateResponse);
    // res.send(session.userData);

});
