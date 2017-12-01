



function findEmptySlot () {
    var insertPoint = Math.floor((Math.random() * 6) + 1);
    if (randomNumberArray[insertPoint] != undefined) {
       insertPoint = findEmptySlot();
    }
    return insertPoint;
}



function checkArray(testArray) {
    var sumTotal = 0;
    var productTotal = 1;
    testArray.forEach(function(item){
        sumTotal += item;
        productTotal *= item;
    })
    return (sumTotal===21 && productTotal===720);
}




var config = require("./config");

//stub this in when online
var logResponse = require("./logResponse");






var logEntry =

{
    raceCodex: 'F5999',
    phaseID: 'Heat#1', //heat#1, quarters#1, semi#1, final
    sport: 'snowboarding',
    event: 'snowboardCross',
    indexed: 'Yes', 
    temp: '0', 
    precip: 'None', 
    gender: 'Men',
    bibRedStartLane: 0,
    bibGreenStartLane: 0,
    bibBlueStartLane: 0,
    bibBlackStartLane: 0,
    bibWhiteStartLane: 0,
    bibYellowStartLane: 0,

    bibRedHolePosition: 0,
    bibGreenHolePosition:0,
    bibBlueHolePosition: 0,
    bibBlackHolePosition: 0,
    bibWhiteHolePosition: 0,
    bibYellowHolePosition: 0,

    bibRedSplitPosition: 0,
    bibGreenSplitPosition:0,
    bibBlueSplitPosition: 0,
    bibBlackSplitPosition: 0,
    bibWhiteSplitPosition: 0,
    bibYellowSplitPosition: 0,

    bibRedFinishPosition: 0,
    bibGreenFinishPosition: 0,
    bibBlueFinishPosition: 0,
    bibBlackFinishPosition: 0,
    bibWhiteFinishPosition: 0,
    bibYellowFinishPosition: 0,

}


var startNumberArray = [];
for (nextNumberToAdd = 1; nextNumberToAdd <=6 ; nextNumberToAdd++) {
    console.log('nextNumberToAdd = ', nextNumberToAdd);
    startNumberArray[findEmptySlot(startNumberArray)]= nextNumberToAdd;
}

console.log(startNumberArray);
console.log('Complete!');

console.log('Correctly assigned = ', checkArray(startNumberArray));
console.log('Complete!')

logEntry.bibRedStartLane = startNumberArray[1];
logEntry.bibGreenStartLane = startNumberArray[2];
logEntry.bibBlueStartLane = startNumberArray[3];
logEntry.bibBlackStartLane = startNumberArray[4];
logEntry.bibWhiteStartLane = startNumberArray[5];
logEntry.bibYellowStartLane = startNumberArray[6];




// logResponse(logEntry);

console.log(logEntry);

