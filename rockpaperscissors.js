

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
function playRPSGame(playerSelection, computerSelection) { 
// return a string declaring the winner
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


//test in console
  
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
console.log(playRPSGame(playerSelection, computerSelection));

