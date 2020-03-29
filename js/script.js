'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const playerRound_1_td = document.getElementById('r1p');
const computerRound_1_td = document.getElementById('r1c');
const playerRound_2_td = document.getElementById('r2p');
const computerRound_2_td = document.getElementById('r2c');
const playerRound_3_td = document.getElementById('r3p');
const computerRound_3_td = document.getElementById('r3c');
const score_td = document.getElementById('score');
const rock_button = document.getElementById('play-rock');
const paper_button = document.getElementById('play-paper');
const scissors_button = document.getElementById('play-scissors');
const roundReset_button = document.getElementById('reset-round');
let round = 0;

const playGame = function(playerInput){

  clearMessages();

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

  //printMessage('I played ' + computerMove + ' and you played ' + playerMove + '.');

  const displayResult = function(computerMove, playerMove){
    if(computerMove == playerMove){
      
      win();
      roundNumber();
    } else if(computerMove == 'rock' && playerMove == 'paper' ||
              computerMove == 'paper' && playerMove == 'scissors' ||
              computerMove == 'scissors' && playerMove == 'rock'){
      win();
      roundNumber();
    } else if(computerMove == 'rock' && playerMove == 'scissors' ||
              computerMove == 'paper' && playerMove == 'rock' ||
              computerMove == 'scissors' && playerMove == 'paper'){
      lose();
      roundNumber();
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

let score = {
  player: 0,
  computer: 0,
};

function win(){
  let playerPoint = 0;
  
  if(round == 0){
    playerPoint++;
    ++score.player;
    playerRound_1_td.innerHTML = playerPoint;
  } else if(round == 1){
    playerPoint++;
    ++score.player;
    playerRound_2_td.innerHTML = playerPoint;
  } else if(round == 2){
    playerPoint++;
    ++score.player;
    playerRound_3_td.innerHTML = playerPoint;
    score_td.innerHTML = score.player + ':' + score.computer;
  } else if(round == 3){
    clearMessages();
    printMessage('Game over! Click on START');
    
  }
}

function lose(){
  let computerPoint = 0;
  
  if(round == 0){
    computerPoint++;
    ++score.computer;
    computerRound_1_td.innerHTML = computerPoint;
  } else if(round == 1){
    computerPoint++;
    ++score.computer;
    computerRound_2_td.innerHTML = computerPoint;
  } else if(round == 2){
    computerPoint++;
    ++score.computer;
    computerRound_3_td.innerHTML = computerPoint;
    score_td.innerHTML = score.player + ':' + score.computer;
  }
}


function roundNumber(){
  
  if (round < 3){
    round++;
  } else {
    clearMessages();
    printMessage('Game over! Click on START');
  }
}

function reset(){
 
  let playerPoint = 0;
  score.player = 0;
  round = 0;
  playerRound_1_td.innerHTML = playerPoint;
  playerRound_2_td.innerHTML = playerPoint,
  playerRound_3_td.innerHTML = playerPoint;
  score_td.innerHTML = '';

  let computerPoint = 0;
  score.computer = 0;
  computerRound_1_td.innerHTML = computerPoint;
  computerRound_2_td.innerHTML = computerPoint;
  computerRound_3_td.innerHTML = computerPoint;
  score_td.innerHTML = '';
  clearMessages();
}

roundReset_button.addEventListener('click', function() {
  reset();
});