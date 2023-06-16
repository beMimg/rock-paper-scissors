const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector('.outcome');

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
      const p = document.createElement('p');
      p.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
      outcomeDiv.appendChild(p);
      return false;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {  
      const p = document.createElement('p');
      p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
      outcomeDiv.appendChild(p);
      return true;
    } else if (playerSelection === computerSelection){
      const p = document.createElement('p');
      p.innerText = `It's a draw! You both picked ${playerSelection}`;
      outcomeDiv.appendChild(p);
    }
}

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
})

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
})

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
})



// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for(let round = 1; round <= 5; round++ ) {
//     const playerSelection = prompt("Round" + round + ":Rock, paper or scissors?");
//     const computerSelection = getComputerChoice();
//     const result = playRound(playerSelection, computerSelection);

//     if (result) {
//       playerScore++;
//     } else if (result == false) {
//       computerScore++;
//     }
//     console.log("Round " + round + ": Current Score: " + playerScore + " - " + computerScore  );
//   }

//   console.log("GAME OVER");

//   if (playerScore > computerScore) {
//     alert("YOU WIN THE GAME")
//     console.log("YOU WIN THE GAME");
//   } else if (playerScore < computerScore) {
//     alert("YOU LOST THE GAME")
//     console.log("YOU LOST THE GAME");
//   } else {
//     console.log("its a tie");
//   }
// }

// game();

  


  



  

