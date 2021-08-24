const team={
      _players:[{
        firstName: 'Gmagnel', lastName:  'Talang Emmanuel', 
        age : 19
         },
      { 
        firstName :'Salami', lastName :'Sulueiman', age :31
      },
      {
        firstName :'Anah',
        lastName :'Victor',
        age : 23
      }
    ],
      _games:[{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
{
  opponent: 'Lakers',
  teamPoints: 30,
  opponentPoints: 31
},
{
  opponent: 'Golden States',
  teamPoints: 23,
  opponentPoints: 16
}
],
get players(){
  return this._players
},
get games(){
  return this._games
},
addPlayer(firstName,lastName,age){
    let player={
      firstName,
      lastName,
      age
    };
    this.players.push(player);
},
addGame(opponentName,teamPoints,opponentPoints){
  let game={
    opponentName,
    teamPoints,
    opponentPoints
  };
  this.games.push(game);
}
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);

team.addGame('Maveric',59,45);
team.addGame('Spurs',78,86);
team.addGame('Calves',100,97);

//console.log(team.players);
console.log(team.games);