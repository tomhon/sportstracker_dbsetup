module.exports = function userData() {
    var date = new Date();
    this.id = date.toISOString();
    this.status = 'App Initialized';
    // this.user = 'Admin';
    this.gameId = date,
    console.log('New Game Id set >>>>' + this.gameId);
    this.playerName = null;
    this.playerNumber = null;
    this.playerTeam = null;
    this.playerClub = null;
    this.matchState = 'Pre-Game';
    this.playerTeamHomeAway = 'Home'; 
    this.opponentTeam = 'Unknown';
    this.opponentClub = 'Unknown';
    this.gameLocation = 'Unknown';
    this.gameField = 'Unknown';
    this.totalPlayerElapsedTime = 0;
    this.totalGameElapsedTime = 0;
    this.completedPassCount = 0;
    this.attemptedPassCount = 0;
    this.successfulDribbleCount = 0;
    this.attemptedDribbleCount = 0;
    this.successfulTackleCount = 0;
    this.attemptedTackleCount = 0;
    this.shotCount = 0;
    this.shotOnFrameCount = 0;
    this.shotOffFrameCount = 0;
    this.goalCount = 0;
    this.inSpaceCount = 0;
    this.scanningCount = 0;
    this.substitutedInCount = 0;
    this.susbstitutedOutCount = 0;
    this.cornerCount = 0;
    this.freeKickCount = 0;
    this.penaltyKickCount = 0;
    this.penaltyScoredCount = 0;
    this.penaltyMissedCount = 0;
    this.fouledCount = 0;
    this.committedFoulCount = 0;
    this.kickOffCount = 0;
    this.finalWhistleCount = 0;
    this.assistCount = 0;
    console.log('New userData object created');
};

// [{
//     sport: 'snowboarding'
//     event: 'snowboardCross'
//     indexed:
//     raceCodex:
//     heatID:
//     timestamp:
//     temp:
//     precip:
//     gender:
//     lanes: [
//         {
//             ID:
//             bibColor:
//             splitPosition:
//             finalPosition:
//         },
//         ...
//     ]
// }]