// Front End//
$(document).ready(function(){
  $("#rollDice").click(function(event) {
    event.preventDefault();
    $(".container p ").text(roll());

    var test = roll();
    console.log(myplayer.addScore(test));

  });
});


// document.getElementById("rollDice").addEventListener("click", roll);
//


//Back End//




function Turn (numberRolled, score) {
  this.numberRolled = numberRolled
  this.score = score
 }
var myplayer = new Turn (1, 0)



 function roll() {
   return Math.floor(Math.random() *6) + 1
 }

 Turn.prototype.addScore = function(numberRolled){
   this.score += numberRolled;
   return this.score;
 }

// Turn.prototype.roll  = function() {
//     roll()
//     if (this.numberRolled === 1) {
//      return false;
//    }else{
//      this.score += numberRolled;
//      console.log("we got here");
//    }


// }

// Turn.prototype.addScore = function(){
//   this.score
// }
