// The Odin Project - Rock, Paper, Scissors JS Project

// create a prompt function to collect user/player input/choice
let choice = prompt("Make your choice: rock, paper, or scissors?");
let playerSelection = choice.toLowerCase();

if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
  alert("Good luck!");
} else {
  alert(`Invalid Input. Only "rock" or "paper" or "scissors" accepted.`);
}
// NEED to learn how to send the user back to the prompt until valid input received

console.log(playerSelection)

// create a function titled getComputerChoice
let getComputerChoice = Math.floor((Math.random()*3) + 1);
// include three strings "Rock "Paper" "Scissors"
// above code randoms chooses an integer 1, 2, or 3 
// - need to assign Rock, Paper, & Scissor to these integers
let computerSelection;
if (getComputerChoice === 1){
	computerSelection = "rock";
} else if (getComputerChoice === 2){
  computerSelection = "paper";
} else if (getComputerChoice === 3){
  computerSelection = "scissors";
} else {
   computerSelection = "Invalid Selection";
}
//use console to test
console.log(computerSelection);

// create function that accepts two parameters
// let playerChoice;
// let playerSelection = playerChoice.toLowerCase();
function playRound(playerSelection, computerSelection) { 
// return a string declaring the winner

//THIS IS THE ORIGINAL SINGLE ROUND CODE
/*
if (playerSelection === "rock" && computerSelection === "scissors"){
return "You win! Rock beats Scissors";
} else if (playerSelection === "scissors" && computerSelection === "rock"){
return "You lose! Rock beats Scissors";
} else if (playerSelection === "paper" && computerSelection === "rock"){
return "You win! Paper beats Rock";
} else if (playerSelection === "rock" && computerSelection === "paper"){
return "You Lose! Paper beats Rock";
} else if (playerSelection === "scissors" && computerSelection === "paper"){
return "You win! Scissors beats Paper";
} else if (playerSelection === "paper" && computerSelection === "scissors"){
return "You lose! Scissors beats Paper";
} else {
return "Tie!";
}
}
*/
if (playerSelection === "rock" && computerSelection === "scissors"){
  return playerWin1;
  } else if (playerSelection === "scissors" && computerSelection === "rock"){
  return playerLose1;
  } else if (playerSelection === "paper" && computerSelection === "rock"){
  return playerWin2; 
  } else if (playerSelection === "rock" && computerSelection === "paper"){
  return playerLose2; 
  } else if (playerSelection === "scissors" && computerSelection === "paper"){
  return playerWin3; 
  } else if (playerSelection === "paper" && computerSelection === "scissors"){
  return playerLose3; 
} else if (playerSelection === computerSelection){
  return draw;
  } else {
  return "You failed to enter a valid entry"; 
  }
  }
  let playerWin1 = "You win! Rock beats Scissors";
  let playerWin2 = "You win! Paper beats Rock";
  let playerWin3 = "You win! Scissors beats Paper";
  let playerLose1 = "You lose! Rock beats Scissors";
  let playerLose2 = "You Lose! Paper beats Rock";
  let playerLose3 = "You lose! Scissors beats Paper";
  let draw = "Tie!";


//test in console
  
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

