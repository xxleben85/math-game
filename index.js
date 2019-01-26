$(document).ready(function() {
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

  var currentEquation = mathProblem();

  $('#calculation').text(currentEquation.equation);

  var checkAnswer = function(userAnswer, answer) {
    console.log(userAnswer === answer);
  };

  $('#user-input').on('keyup', function() {
    checkAnswer(Number($(this).val()), currentEquation.answer)
  });


});
