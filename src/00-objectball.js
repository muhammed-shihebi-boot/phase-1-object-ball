function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        }
    }
}

function numPointsScored(name) {
    const obj = gameObject();

    const homePlayers = obj.home.players;
    const awayPlayers = obj.away.players;

    const players = { ...homePlayers, ...awayPlayers }

    for (const key in players) {
        if (key === name) {
            return players[key].points;
        }
    }
}

// console.log(numPointsScored("Brendan Haywood"));

function shoeSize(name) {
    const obj = gameObject();

    const homePlayers = obj.home.players;
    const awayPlayers = obj.away.players;

    const players = { ...homePlayers, ...awayPlayers }

    for (const key in players) {
        if (key === name) {
            return players[key].shoe;
        }
    }
}

// console.log(shoeSize("Brendan Haywood"));
// console.log(shoeSize("Mason Plumlee"));

function teamColors(teamName) {
    const obj = gameObject();

    for (const key in obj) {
        if (obj[key].teamName === teamName) {
            return obj[key].colors
        }
    }
}

// console.log(teamColors("Brooklyn Nets"));

function teamNames() {
    const obj = gameObject();
    const teamNames = [];

    for (const key in obj) {
        teamNames.push(obj[key].teamName)
    }
    return teamNames;
}

// console.log(teamNames());

function playerNumbers(teamName) {
    const obj = gameObject();
    for (const key in obj) {
        if (obj[key].teamName === teamName) {
            const teamPlayers = obj[key].players;
            const playerNumbers = Object.values(teamPlayers).map(player => player.number)
            return playerNumbers;
        }
    }
}

// console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
    const obj = gameObject();

    const homePlayers = obj.home.players;
    const awayPlayers = obj.away.players;

    const players = { ...homePlayers, ...awayPlayers }

    for (const key in players) {
        if (key === playerName) {
            return players[key];
        }
    }
}

// console.log(playerStats("Brendan Haywood"));
// console.log(playerStats("Mason Plumlee"));


function bigShoeRebounds() {
    const obj = gameObject();

    const homePlayers = obj.home.players;
    const awayPlayers = obj.away.players;

    const players = { ...homePlayers, ...awayPlayers }

    let maxShoeSize = Number.NEGATIVE_INFINITY;
    let reboundsOfPlayerWithMaxShoe;

    for (const playerName in players) {
        if (players[playerName].shoe > maxShoeSize) {
            maxShoeSize = players[playerName].shoe;
            reboundsOfPlayerWithMaxShoe = players[playerName].rebounds;
        }
    }

    return reboundsOfPlayerWithMaxShoe;
}

// console.log(bigShoeRebounds());

function mostPointsScored() {
    const obj = gameObject();

    const homePlayers = obj.home.players;
    const awayPlayers = obj.away.players;

    const players = { ...homePlayers, ...awayPlayers }

    let maxPoints = Number.NEGATIVE_INFINITY;
    let maxPointsPlayer;

    for (const playerName in players) {
        if (players[playerName].points > maxPoints) {
            maxPoints = players[playerName].points;
            maxPointsPlayer = playerName;
        }
    }
    return maxPointsPlayer;
}

// console.log(mostPointsScored());

function winningTeam() {
    const obj = gameObject();
    const homeTeamName = obj.home.teamName;
    const homePlayers = obj.home.players;
    let homePoints = 0; 

    for (const playerName in homePlayers) {
        homePoints += homePlayers[playerName].points; 
    }

    const awayTeamName = obj.away.teamName;
    const awayPlayers = obj.away.players;
    let awayPoints = 0; 

    for (const playerName in awayPlayers) {
        awayPoints += awayPlayers[playerName].points; 
    }

    if(awayPoints > homePoints){
        return awayTeamName; 
    }else{
        return homeTeamName; 
    }

}

// console.log(winningTeam()); 

function playerWithLongestName(){
    const obj = gameObject();

    const homePlayers = obj.home.players;
    const awayPlayers = obj.away.players;

    const players = { ...homePlayers, ...awayPlayers }

    let maxName = "";
    
    for (const playerName in players) {
        if (playerName.length > maxName.length) {
            maxName = playerName; 
        }
    }
    return maxName; 
}

// console.log(playerWithLongestName()); 

function doesLongNameStealATon(){
    const obj = gameObject();

    const homePlayers = obj.home.players;
    const awayPlayers = obj.away.players;

    const players = { ...homePlayers, ...awayPlayers }

    const maxNamePlaer = playerWithLongestName(); 

    let maxSteals = Number.NEGATIVE_INFINITY;
    let playerNameWithMaxSteals; 
    
    for (const playerName in players) {
        if (players[playerName].steals > maxSteals) {
            maxSteals = players[playerName].steals; 
            playerNameWithMaxSteals = playerName; 
        }
    }

    return playerNameWithMaxSteals === maxNamePlaer; 

}

console.log(doesLongNameStealATon());