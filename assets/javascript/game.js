var won = 0;
var lost = 0;
var guessesLeft = 10;
var userGuesses = document.getElementById("guesses"); 
var winsCount = document.getElementById("won");
var lossesCount = document.getElementById("lost");
var guessesCount = document.getElementById("guessesLeft");
var options = 'abcdefghijklmnopqrstuvwxyz';

document.getElementById('btn').onclick = function(){ 
	console.log('reset')
	guessesLeft = 10;
	guessesCount.innerHTML = guessesLeft;

	userGuesses.innerHTML = '';
	winsCount.innerHTML = '0';
	lossesCount.innerHTML = 0;
	lost = 0;
}

document.onkeyup = function(event) {

	if (guessesLeft==0) {
		return;
	}	
	console.log('guess left::', guessesLeft)
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerGuess = options[Math.floor(Math.random()*options.length)];
	// console.log('user:: ', userGuess, 'computer::', computerGuess);
	userGuesses.innerHTML += userGuess;
	if (userGuess===computerGuess) {
		console.log('YOU WIN');
		won += 1;
		winsCount.innerHTML = won;
	}
	else {
		lost +=1;
		lossesCount.innerHTML = lost;
		guessesLeft--;
		guessesCount.innerHTML =  guessesLeft;
	}
};


