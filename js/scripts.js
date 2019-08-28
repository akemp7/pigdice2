// Front End//
$(document).ready(function(){
  $("#rollDice").click(function() {

    // $(".container p ").text(myplayer.addScore());
    function roll() {
      return Math.floor(Math.random() *6) + 1
    }

    var numberBuffer = roll();
    var players = [player1, player2];
    var turn = Math.round(Math.random());
    var currentPlayer = players[turn];

    function switchPlayers (players, currentPlayer){
      if(currentPlayer === players[0]) {
        currentPlayer = players[1];
      $("#player2").addClass("playerturn")
      $("#player1").removeClass("playerturn")
      console.log(currentPlayer)
    } else {
      currentPlayer = players[0];
      $("#player1").addClass("playerturn")
      $("#player2").removeClass("playerturn")
    }
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

Turn.prototype.startGame = function (){
  myplayer =players [0],



  };




}


// document.getElementById("rollDice").addEventListener("click", roll);
//

//Back End//

function Turn (numberRolled, score, index) {
  this.numberRolled = numberRolled,
  this.score = 0,
  this.index = 0

}


 Turn.prototype.addScore = function(numberRolled){
   this.score += numberRolled;
   return this.score;


 //(Click button to start game or pick color or X)
   Turn.prototype.addIndex = function () {
       this.Turn.push(index);
       Turn.index+=  this.index;
       return this;
   };

//  //
 var myplayer = new Turn (0, 0)
 var myopponent = new Turn (0, 0)
