var config = require("./config");

//stub this in when online
var logResponse = require("./logResponse");

// function bibData(color) {
//     this.bibColor = color,
//     this.startLane = null,
//     this.splitPosition = null,
//     this.finishPostion = null
// }



// var logEntry =

// {
//     raceCodex: 'N9999',
//     heatID: '1',
//     sport: 'snowboarding',
//     event: 'snowboardCross',
//     indexed: 'Yes', 
//     temp: '0', 
//     precip: 'None', 
//     gender: 'Men',
//     bibRedStartLane: null,
//     bibRedSplitPosition: null,
//     bibRedFinishPosition: null,
//     bibGreenStartLane: null,
//     bibGreenSplitPosition: null,
//     bibGreenFinishPosition: null,
//     bibBlueStartLane: null,
//     bibBlueSplitPosition: null,
//     bibBlueFinishPosition: null,
//     bibBlackStartLane: null,
//     bibBlackSplitPosition: null,
//     bibBlackFinishPosition: null,
//     bibWhiteStartLane: null,
//     bibWhiteSplitPosition: null,
//     bibWhiteFinishPosition: null,
//     bibYellowStartLane: null,
//     bibYellowSplitPosition: null,
//     bibYellowFinishPosition: null

// }


// logResponse(logEntry);

// var logEntry =

// {
//     raceCodex: 'N9999',
//     heatID: '1',
//     sport: 'snowboarding',
//     event: 'snowboardCross',
//     indexed: 'Yes', 
//     temp: '0', 
//     precip: 'None', 
//     gender: 'Men',
//     bibRedStartLane: 1,
//     bibRedSplitPosition: 2,
//     bibRedFinishPosition: 3,
//     bibGreenStartLane: 2,
//     bibGreenSplitPosition: 3,
//     bibGreenFinishPosition: 4,
//     bibBlueStartLane: 3,
//     bibBlueSplitPosition: 4,
//     bibBlueFinishPosition: 5,
//     bibBlackStartLane: 4,
//     bibBlackSplitPosition: 5,
//     bibBlackFinishPosition: 6,
//     bibWhiteStartLane: 5,
//     bibWhiteSplitPosition: 6,
//     bibWhiteFinishPosition: 1,
//     bibYellowStartLane: 6,
//     bibYellowSplitPosition: 1,
//     bibYellowFinishPosition: 2

// }


// logResponse(logEntry);

var logEntry =

{
    raceCodex: 'N9999',
    phaseID: 'Heat2', //heat#1, quarters#1, semi#1, final
    sport: 'snowboarding',
    event: 'snowboardCross',
    indexed: 'Yes', 
    temp: '0', 
    precip: 'None', 
    gender: 'Men',
    bibRedStartLane: 6,
    bibGreenStartLane: 5,
    bibBlueStartLane: 4,
    bibBlackStartLane: 3,
    bibWhiteStartLane: 1,
    bibYellowStartLane: 2,

    bibRedHolePosition: 1,
    bibGreenHolePosition:2,
    bibBlueHolePosition: 5,
    bibBlackHolePosition: 4,
    bibWhiteHolePosition: 3,
    bibYellowHolePosition: 6,

    bibRedSplitPosition: 1,
    bibGreenSplitPosition:4,
    bibBlueSplitPosition: 3,
    bibBlackSplitPosition: 4,
    bibWhiteSplitPosition: 2,
    bibYellowSplitPosition: 6,

    bibRedFinishPosition: 3,
    bibGreenFinishPosition: 1,
    bibBlueFinishPosition: 2,
    bibBlackFinishPosition: 5,
    bibWhiteFinishPosition: 6,
    bibYellowFinishPosition: 4,

}


logResponse(logEntry);