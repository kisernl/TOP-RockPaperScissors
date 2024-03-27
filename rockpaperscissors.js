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