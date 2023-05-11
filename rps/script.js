let computerScore = 0;
let playerScore = 0;
let roundWinner = "";


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const result = document.querySelector('#result');

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "It's a tie";
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Scissor") ||
    (playerSelection === "Scissor" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    roundWinner = "Player wins";
  }
  if (
    (playerSelection === "Scissor" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissor")
  ) {
    computerScore++;
    roundWinner = "Computer wins";
  }
  displayResult();
}

function displayResult() {
  result.textContent = `Player: ${playerScore} | Computer: ${computerScore} - ${roundWinner}.`;
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  roundWinner = "";
  displayResult();
}

rockBtn.addEventListener('click', () => {
  playRound('Rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
  playRound('Paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
  playRound('Scissor', getComputerChoice());
});

