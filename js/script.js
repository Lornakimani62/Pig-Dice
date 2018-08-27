// business logic
var DiceOne;
var DiceTwo;
var currentTotal1=0;
var currentTotal2=0;
var totalOne=0;
var totalTwo=0;

function refreshPage(){
    window.location.reload();
} 


// user interface
$(document).ready(function() {
  $("#start").click(function() {
    $(".jumbotron").hide();
      $(".row").show();
  });
});

$(document).ready(function() {
  $("#player1Roll").click(function() {

    if ( DiceOne !== 1){
      DiceOne=Math.floor(Math.random()*6)+1;
      $("#die1").text(DiceOne);
      currentTotal1 += DiceOne;
      $("#score1").text(currentTotal1);

} else(  $('#player1Roll').attr('disabled',true))
  });
});

$(document).ready(function() {
  $("#player1Hold").click(function() {
totalOne += currentTotal1;
  $("#total1").text(totalOne);
  });
});

$(document).ready(function() {
  $("#player2Roll").click(function() {
      if ( DiceTwo !== 1){
    DiceTwo=Math.floor(Math.random()*6)+1;
    $("#die2").text(DiceTwo);
    currentTotal2 += DiceTwo;
    $("#score2").text(currentTotal2);
  } else (  $('#player2Roll').attr('disabled',true))

  });
});

$(document).ready(function() {
  $("#player2Hold").click(function() {
totalTwo += currentTotal2;
  $("#total2").text(totalTwo);
  });
});
