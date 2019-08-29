var player1 = new Player("player1", 0)
var player2 = new Player("player2", 1)

function roll() {
  return Math.ceil(Math.random() * 6)
}

// Front End//
$(document).ready(function() {
  // $("#start").click(function() {
  //   var players = [myplayer, myopponent];
  // });
  $("#rollDice").click(function() {

    var numberBuffer = roll();
    var tempScore = 0;
    var players = [player1, player2];

    // function switchPlayers (players, currentPlayer){
    //     if(numberBuffer===1) {
    //       (currentPlayer === players[0])
    //       currentPlayer = players[1];
    //     $("#player1").addClass("playerturn")
    //     $("#player2").removeClass("playerturn")
    //     console.log(currentPlayer)
    //   } else {
    //     currentPlayer = players[0];
    //     $("#player2").addClass("playerturn")
    //     $("#player1").removeClass("playerturn")
    //   }
    // }
    // $("#player1").append(player1.addScore(roll()));
    // $("#player1").empty().append(player1.addScore(roll()));
    if (numberBuffer !== 1) {
      console.log(numberBuffer);
      $("#player1").text(player1.addScore(numberBuffer));
      // $("#player2").append(player2.addScore(roll(tempScore)));
      // $("#player2").empty().append(player1.addScore(roll(tempScore)));

    } else if (numberBuffer === 1) {

      // return currentPlayer = switchPlayers(currentPlayer, players);
      var players = [player2, player1];
      $("#player2").text(player2.addScore(numberBuffer));
    }
    // }else if (numberBuffer===1) {
    //   var players = [player1, player2];
    //     $("#player1").append(player1.addScore(roll()));
    //     $("#player1").empty().append(player1.addScore(roll()));}


    // $("#player2").append(myplayer.addScore(roll()));
    // $("#player2").empty().append(myplayer.addScore(roll()));
    // };

  });
});
// if (numberBuffer === 1){
//   currentPlayer = switchPlayers ();
//   $("#player2").append(myplayer.addScore(roll()));
//   $("#player2").empty().append(myplayer.addScore(roll()));
// }

// document.getElementById("rollDice").addEventListener("click", roll);
//

//Back End//

function Turn(numberRolled, score, index) {
  this.numberRolled = numberRolled,
    this.score = 0,
    this.index = index

}

//
//  Turn.prototype.addScore = function(tempScore){
//    this.score += tempScore;
//    return this.score;
// }

Player.prototype.addScore = function(tempScore) {
  this.score += tempScore;
  return this.score;
}
//  //

function Player(name, score) {
  this.name = name,
    this.score = 0
}
