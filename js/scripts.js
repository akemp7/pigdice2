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
  $("#rollDiceP2").click(function() {
    var numberBuffer = roll();
    var tempScore = 0;
    if (numberBuffer !== 1) {
      console.log(numberBuffer);
      $("#player1").text(player1.addScore(numberBuffer));
    }
    else if (numberBuffer === 1) {
      alert("Give your opponent a turn")
      return
    }
  });


$("#rollDiceP1").click(function() {
  var numberBuffer = roll();
  var tempScore = 0;
  if (numberBuffer !== 1) {
    console.log(numberBuffer);
    $("#player2").text(player2.addScore(numberBuffer));
  }
  else if (numberBuffer === 1) {
    alert("Give your opponent a turn")
    return
  }
})
});





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
