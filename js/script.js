const playGame = function (playerInput) {

  clearMessages ();

  const getMoveName = function (moveId) {
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
};
