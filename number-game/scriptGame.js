//'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function(message) {
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
	const input = Number(document.querySelector('.input-number').value);
	if(!input){
		displayMessage("No number! Try again");
	} else if (input === randomNumber) {
		displayMessage("Correct number!");
		document.querySelector('.number').textContent = randomNumber;
		if(score > highscore){
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (input !== randomNumber){
		if(score > 1) {
			displayMessage(input > randomNumber ? 'Too high!' : 'Too low!');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('You lost the game!');
			document.querySelector('.score').textContent = 0;
		}
	}
});

document.querySelector('.again').addEventListener('click', function() {
	score = 20;
	randomNumber = Math.trunc(Math.random() * 20) + 1;

	displayMessage('Start guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.input-number').value = '';
});