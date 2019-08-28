// Front End//
$(document).ready(function(){
  $("#rollDice").click(function() {

    // $(".container p ").text(myplayer.addScore());
    function roll() {
      return Math.floor(Math.random() *6) + 1
    }

    var numberBuffer = roll()
    var player1 = new Player("player1")
    var player2 = new Player("player2")
    var players = [player1, player2];
    var turn = Math.round(Math.random());
    var currentPlayer = players[turn];

    function switchPlayers (players, currentPlayer){
      if(currentPlayer === players[0]) {
        currentPlayer = players[1];
      $("#player2").addClass("playerturn")
      $("#player1").removeClass("playerturn")
      console.log("We're here")
    } else {
      currentPlayer = players[0];
      $("#player1").addClass("playerturn")
      $("#player2").removeClass("playerturn")
    }
    console.log(currentPlayer);
  }

      if (numberBuffer === 1) {
        console.log ("LOSE");
        switchPlayers(players, currentPlayer);
      } else {
        $("#player1").append(myplayer.addScore(roll()));
        $("#player1").empty().append(myplayer.addScore(roll()));
        $("#player2").append(myopponent.addScore(roll()));
        $("#player2").empty().append(myplayer.addScore(roll()));
      }
    });
  });


// document.getElementById("rollDice").addEventListener("click", roll);
//


//Back End//
function Player (player, score){
  this.player = player,
  this.index = [0]
}

function Turn (numberRolled, score) {
  this.numberRolled = numberRolled,
  this.score = 0
 }

 Turn.prototype.addScore = function(numberRolled){
   this.score += numberRolled;
   return this.score;
 }

 var myplayer = new Turn (0, 0)
 var myopponent = new Turn (0, 0)
