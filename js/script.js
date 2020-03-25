/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

let playerResult = 0;
let computerResult = 0;
const playerResult_span = document.getElementById('player-result');
const computerResult_span = document.getElementById('computer-result');
const rock_button = document.getElementById('play-rock');
const paper_button = document.getElementById('play-paper');
const scissors_button = document.getElementById('play-scissors');

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

  const computerMove = getMoveName(randomNumber);

  const playerMove = getMoveName(playerInput);

  printMessage('I played ' + computerMove + ' and you played ' + playerMove + '.');

  const displayResult = function(computerMove, playerMove){
    if(computerMove == playerMove){
      printMessage('Tie!');
    } else if(computerMove == 'rock' && playerMove == 'paper' ||
              computerMove == 'paper' && playerMove == 'scissors' ||
              computerMove == 'scissors' && playerMove == 'rock'){
      win();
        
    } else if(computerMove == 'rock' && playerMove == 'scissors' ||
              computerMove == 'paper' && playerMove == 'rock' ||
              computerMove == 'scissors' && playerMove == 'paper'){
      lose();
    } else{
      printMessage('Choose your move!');
    }
  }; 
 
  displayResult(computerMove, playerMove);
};

function main(){
  rock_button.addEventListener('click', function() {
    playGame(1);
  });

  paper_button.addEventListener('click', function() {
    playGame(2);
  });

  scissors_button.addEventListener('click', function() {
    playGame(3);
  });
}

main();

function win(){
  playerResult++;
  playerResult_span.innerHTML = playerResult;
  printMessage('You won!');
}

function lose(){
  computerResult++;
  computerResult_span.innerHTML = computerResult;
  printMessage('You lost!');
}

