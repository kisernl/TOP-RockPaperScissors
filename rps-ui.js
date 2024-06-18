let computerWins = 0;
let playerWins = 0;
let draw = 0;
let rounds = 0;

let playerSelection = "";

// Rock Button for playerSelection
function rockFunction() {
  let playerSelection = "rock";
  console.log("Player selection is now: ", playerSelection);
  let computerSelection = getComputerChoice();
  console.log("Computer selection is: ", computerSelection);
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("round-result").textContent = result;
  // add result to tally
  document.getElementById(
    "tally"
  ).textContent = `Wins: ${playerWins}, Losses: ${computerWins}`;
  // check for winner
  const winnerMessage = checkForWinner();
  document.getElementById("winner-message").textContent = winnerMessage;
}

const btnRock = document.getElementById("btnRock");
btnRock.addEventListener("click", rockFunction);

//  Paper Button for playerSelection
function paperFunction() {
  let playerSelection = "paper";
  console.log("Player selection is now: ", playerSelection);
  let computerSelection = getComputerChoice();
  console.log("Computer selection is: ", computerSelection);
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("round-result").textContent = result;
  // add result to tally
  document.getElementById(
    "tally"
  ).textContent = `Wins: ${playerWins}, Losses: ${computerWins}`;
  // check for winner
  const winnerMessage = checkForWinner();
  document.getElementById("winner-message").textContent = winnerMessage;
}

const btnPaper = document.getElementById("btnPaper");
btnPaper.addEventListener("click", paperFunction);

//  Scissors Button for playerSelection
function scissorsFunction() {
  let playerSelection = "scissors";
  console.log("Player selection is now: ", playerSelection);
  let computerSelection = getComputerChoice();
  console.log("Computer selection is: ", computerSelection);
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("round-result").textContent = result;
  // add result to tally
  document.getElementById(
    "tally"
  ).textContent = `Wins: ${playerWins}, Losses: ${computerWins}`;
  // check for winner
  const winnerMessage = checkForWinner();
  document.getElementById("winner-message").textContent = winnerMessage;
}

const btnScissors = document.getElementById("btnScissors");
btnScissors.addEventListener("click", scissorsFunction);

// Computer Choice function

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else if (computerChoice === 3) {
    return "scissors";
  } else {
    return "Invalid Selection";
  }
}

// playRound function

function playRound(playerSelection, computerSelection) {
  rounds++;
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWins++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerWins++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWins++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerWins++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWins++;
    return "You win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerWins++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === computerSelection) {
    draw++;
    return "Tie!";
  }
}

function checkForWinner() {
  if (playerWins >= 5) {
    document.getElementById("play-again").style.display = "block";
    return "Congratulations! You won the game with 5 wins.";
  } else if (computerWins >= 5) {
    document.getElementById("play-again").style.display = "block";
    return "Game over! You lost the game with 5 losses.";
  }
  return "..."; // No winner yet
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  document.getElementById("tally").textContent = "[Win/Loss Tally]";
  document.getElementById("round-result").textContent = "[Round Result]";
  document.getElementById("winner-message").textContent = "...";
  document.getElementById("play-again").style.display = "none";
}

document.getElementById("play-again").addEventListener("click", resetGame);
