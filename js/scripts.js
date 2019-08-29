// Front End//
$(document).ready(function(){
  // $("#start").click(function() {
  //   var players = [myplayer, myopponent];
  // });
    $("#rollDice").click(function() {
      function roll () {
      return Math.floor(Math.random() *6) + 1
    }
      var numberBuffer = roll();

      var player1 = new Player ("player1")
      var player2 = new Player ("player2")
      var players = [player1, player2];
      // var turn = Math.round(Math.random());
      // var currentPlayer = [0];
      var tempScore = 0;

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
      if (numberBuffer!==1) {
        $("#player1").append(player2.addScore(roll()));
        $("#player1").empty().append(player2.addScore(roll()));
      } else if (numberBuffer===1) {

        // return currentPlayer = switchPlayers(currentPlayer, players);
        var players = [player2, player1];
        $("#player2").append(player2.addScore(roll()));
        $("#player2").empty().append(player2.addScore(roll()));
    // $(".container p ").text(myplayer.addScore());


     // $("#player2").append(myplayer.addScore(roll()));
     // $("#player2").empty().append(myplayer.addScore(roll()));
   // };

};
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


function Turn (numberRolled, score, index) {
  this.numberRolled = numberRolled,
  this.score = 0,
  this.index = index

}


 Turn.prototype.addScore = function(numberRolled){
   this.score += numberRolled;
   return this.score;
}

Player.prototype.addScore = function(tempScore){
  this.score += tempScore;
  return this.score;
}
//  //

function Player (name, score) {
  this.name = name,
  this.score = 0
}
 // var myplayer = new Turn (0, 0, 0)
 // var myopponent = new Turn (0, 0,1)
