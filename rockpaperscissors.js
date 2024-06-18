// The Odin Project - Rock, Paper, Scissors JS Project
let computerWins = 0;
let playerWins = 0;
let draw = 0;
let rounds = 0;

let play = prompt(`Want to play? Type "yes" or "no"`);
let playResponse = play.toLowerCase();

if (playResponse === "yes") {
  init();
} else {
  alert("Your loss.");
}

function init() {
  let userChoice = askForChoice();
  let computerSelection = getComputerChoice();

  console.log(`round ${rounds + 1}`);
  console.log(`player: ${userChoice}`);
  console.log(`computer: ${computerSelection}`);

  let winnerSelection = playRound(userChoice, computerSelection);
  alert(winnerSelection);
  console.log(winnerSelection);

  if (rounds === 5) {
    alert("Game Over");
    console.log("Game Over...");
    if (playerWins > computerWins) {
      alert("You WIN!");
      console.log(`You've Won -- ${playerWins} to ${computerWins}`);
    } else if (computerWins > playerWins) {
      alert("Better Luck Next Time... Loser!");
      console.log(`You Lost -- ${playerWins} to ${computerWins}`);
    } else if (playerWins === computerWins) {
      alert("Draw! Rematch?");
      console.log(`Draw -- ${playerWins} to ${computerWins}`);
    } else {
      alert("Error");
    }
  } else {
    init();
  }
}

function askForChoice() {
  let userInput;
  while (true) {
    userInput = prompt("Choose one: Rock, Paper, or Scissors");
    let userSelection = userInput.toLowerCase();

    if (
      userSelection === "rock" ||
      userSelection === "paper" ||
      userSelection === "scissors"
    ) {
      alert("Good luck!");
      return userSelection;
    } else {
      alert("Invalid Input. Only rock, paper, or scissors accepted.");
    }
  }
}

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
