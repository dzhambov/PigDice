var Player1 = new Player;
var Player2 = new Player;

function Player(totalScore){
  this.totalScore = totalScore;
}
var rollDice = function() {
  $("#roll").onclic(roll);
  return Math.floor((Math.random()*6)+1);
}

// console.log(Player.rollDice);


//UI Logic
$(document).ready(function(){


});
