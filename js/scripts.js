// Front End//
$(document).ready(function(){
  $("#rollDice").click(function(event) {
    event.preventDefault();
    roll();
  });
});


document.getElementById("rollDice").addEventListener("click", roll);



//Back End//
// var myplayer = new Turn (numberRolled, score)

// function Turn (numberRolled, score) {
//   this.numberRolled = numberRolled,
//   this.score = score
// }

function roll() {console.log (Math.floor(Math.random() *6) + 1)}
