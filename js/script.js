/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const playGame = function(playerInput){

  clearMessages ();

  const getMoveName = function(moveId){
    if(moveId == 1){
      return 'rock';
    } else if(moveId == 2){
      return 'paper';
    } else if(moveId == 3){
      return 'scissors';
    } else{
      return 'unknown movement';
    }
  };

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('The chosen number is: ' + randomNumber);
  
  const computerMove = getMoveName(randomNumber);

  const playerMove = getMoveName(playerInput);

  printMessage('I played ' + computerMove + ' and you played ' + playerMove + '.');

  const displayResult = function(computerMove, playerMove){
    if(computerMove == playerMove){
      printMessage('Tie!');
    } else if(computerMove == 'rock' && playerMove == 'paper' ||
              computerMove == 'paper' && playerMove == 'scissors' ||
              computerMove == 'scissors' && playerMove == 'rock'){
      printMessage('You won!');
    } else if(computerMove == 'rock' && playerMove == 'scissors' ||
              computerMove == 'paper' && playerMove == 'rock' ||
              computerMove == 'scissors' && playerMove == 'paper'){
      printMessage('You lost!');
    } else{
      printMessage('Choose your move!');
    }
  }; 

  displayResult(computerMove, playerMove);
};

document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
});