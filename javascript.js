function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  console.log(randomChoice);
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
    
  if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {    
      console.log("You lose! " + computerSelection + " beats " + playerSelection);
      return false;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {  
      console.log( "You win! " + playerSelection + " beats " + computerSelection) ;
      return true;
    } else if (playerSelection === computerSelection){
      console.log( "It's a draw." );
    }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for(let round = 1; round <= 5; round++ ) {
    const playerSelection = prompt("Round" + round + ":Rock, paper or scissors?");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result) {
      playerScore++;
    } else if (result == false) {
      computerScore++;
    }
    console.log("Round " + round + ": Current Score: " + playerScore + " - " + computerScore  );
  }

  console.log("GAME OVER");

  if (playerScore > computerScore) {
    alert("YOU WIN THE GAME")
    console.log("YOU WIN THE GAME");
  } else if (playerScore < computerScore) {
    alert("YOU LOST THE GAME")
    console.log("YOU LOST THE GAME");
  } else {
    console.log("its a tie");
  }
}

game();

  


  



  

