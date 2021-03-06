//Function to generate a random number between and including two numbers
var numberGenerator = function(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function to generate a random number the player will try to add up to
var goalRandomNumber = numberGenerator(19, 120);
	console.log(goalRandomNumber);

//Values of crystals are set randomly
var crystal1 = numberGenerator(1, 12);
var crystal2 = numberGenerator(1, 12);
var crystal3 = numberGenerator(1, 12);
var crystal4 = numberGenerator(1, 12);
	console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);

var totalScore = 0;
var wins = 0;
var losses = 0;
var gameStarted = true;

$("#total-score").html(totalScore);
$("#random-number-goal").html(goalRandomNumber);
$("#wins").html(wins);
$("#losses").html(losses);
$("#reset").click(function(event) {
	resetGame();
	//console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);
});

//Resets the game and gives new values to each crystal
var resetGame = function() {
	goalRandomNumber = numberGenerator(19, 120);
	crystal1 = numberGenerator(1, 12);
	crystal2 = numberGenerator(1, 12);
	crystal3 = numberGenerator(1, 12);
	crystal4 = numberGenerator(1, 12);
	totalScore = 0;
	gameStarted = true;
	$("#total-score").html(totalScore);
	$("#random-number-goal").html(goalRandomNumber);
	$("#wins").html(wins);
	$("#losses").html(losses);
	$('#messagebox').html("Click on a crystal to start playing!")
}

//Checks if the score added up by the player equals or is greater than the goal number
var winChecker = function() {
	if (totalScore === goalRandomNumber) {
		$("#messagebox").html("You Win! Click reset to play again");
		wins++;
		$("#wins").html(wins);
		gameStarted = false;
		//console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);
		
	} else if (totalScore > goalRandomNumber) {
		$("#messagebox").html("You Lose! Click reset to play again");
		losses++;
		$("#losses").html(losses);
		gameStarted = false;
		//console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);
	}
}

//Adds value of crystal clicked to total score and checks if the player has won or surpassed the goal number
function crystalClicker(id, crystalNum) {
		$(id).click(function(event) {
		if (gameStarted) {
		totalScore = totalScore + crystalNum;
		$("#total-score").html(totalScore);
		winChecker();
		}
	});
}

crystalClicker("#crystal1", crystal1);

crystalClicker("#crystal2", crystal2);

crystalClicker("#crystal3", crystal3);

crystalClicker("#crystal4", crystal4);