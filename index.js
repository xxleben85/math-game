$(document).ready(function() {

  var timeLeft = 10;
  var score = 0;

  var randomNum = function(num) {
  	return Math.ceil(Math.random() * num);
  };

  var mathProblem = function() {
  	var problem = {};
  	var num1 = randomNum(10);
  	var num2 = randomNum(10);

  	problem.answer = num1 + num2;
  	problem.equation = String(num1) + '+' + String(num2);

  	return problem;
  };

  var currentEquation = '';

  var newEquation = function() {
    currentEquation = mathProblem();
    $('#calculation').text(currentEquation.equation);
  };

  var updateTimeLeft = function(amount) {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  }

  var checkAnswer = function(userAnswer, answer) {
    if (userAnswer === answer) {
      newEquation();
      $('#user-input').val('');
      updateTimeLeft(+1);
      updateScore(+1);
    }
  };

  $('#user-input').on('keyup', function() {
    startGame();
    checkAnswer(Number($(this).val()), currentEquation.answer)
  });

  var interval;

  var startGame = function() {
    if (!interval) {
      if (timeLeft === 0) {
        updateTimeLeft(10);
        $('#high-score').text(score);
        updateScore(-score);
      }
      interval = setInterval(function() {
        updateTimeLeft(-1);
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
          $('#user-input').val('');
        }
      }, 1000)
    };
  };

  var updateScore = function(amount) {
    score += amount;
    $('#current-score').text(score);
  }

  newEquation();
});
