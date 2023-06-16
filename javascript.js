const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector('.outcome');
const playerScoreDiv = document.querySelector('.player_score');
const computerScoreDiv = document.querySelector('.computer_score');
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

  while(outcomeDiv.firstChild) {
    outcomeDiv.removeChild(outcomeDiv.firstChild);
  }

  if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
  ){
      const p = document.createElement('p');
      p.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
      outcomeDiv.appendChild(p);
      computerScore++;
  } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ){  
      const p = document.createElement('p');
      p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
      outcomeDiv.appendChild(p);
      playerScore++;
    } else if (playerSelection === computerSelection){
      const p = document.createElement('p');
      p.innerText = `It's a draw! You both picked ${playerSelection}`;
      outcomeDiv.appendChild(p);
    }
}

const winnerResult = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h1 = document.createElement('h1');
    h1.classList.add('player_won');
    resetGame();
    h1.innerText = `You won ${playerScore} to ${computerScore}. Human power!`;
    outcomeDiv.append(h1);
  }
  else if (computerScore === 5) {
    const h1 = document.createElement('h1');
    h1.classList.add('computer_won');
    resetGame();
    h1.innerText = `You lost ${playerScore} to ${computerScore}. Computer power!`;
    outcomeDiv.append(h1);
  }
}

const updatedScores = (playerScore, computerScore) => {
  playerScoreDiv.innerText = `Player Score: ${playerScore}`;
  computerScoreDiv.innerText = `Computer Score: ${computerScore}`;
}

const resetGame = () => {
  playerScore=0;
  computerScore = 0;

  outcomeDiv.innerText = '';

  updatedScores(playerScore, computerScore);
}

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updatedScores(playerScore, computerScore);
  winnerResult(playerScore, computerScore);
})

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updatedScores(playerScore, computerScore);
  winnerResult(playerScore, computerScore);
})

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updatedScores(playerScore, computerScore);
  winnerResult(playerScore, computerScore);
})