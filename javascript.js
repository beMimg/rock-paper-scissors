const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector('.outcome');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  console.log(randomChoice);
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase();

  if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      const p = document.createElement('p');
      p.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
      outcomeDiv.appendChild(p);
      computerScore++;
      return false;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {  
      const p = document.createElement('p');
      p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
      outcomeDiv.appendChild(p);
      playerScore++;
      return true;
    } else if (playerSelection === computerSelection){
      const p = document.createElement('p');
      p.innerText = `It's a draw! You both picked ${playerSelection}`;
      outcomeDiv.appendChild(p);
    }
}

const winnerResult = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h3 = document.createElement('h3');
    h3.classList.add('player_won');
    h3.innerText = `You won ${playerScore} to ${computerScore}. Human power!`;
    outcomeDiv.appendChild(h3);
  }

   else if (computerScore === 5) {
    const h3 = document.createElement('h3');
    h3.classList.add('computer_won');
    h3.innerText = `You lost ${playerScore} to ${computerScore}. Computer power!`;
    outcomeDiv.appendChild(h3);
  }
}

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  winnerResult(playerScore, computerScore);
})

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  winnerResult(playerScore, computerScore);
})

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  winnerResult(playerScore, computerScore);
})


  


  



  

