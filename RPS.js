//get random Computer choice

playerChoices = ["rock", "paper", "scissors"]

function getRandomChoice(choices){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choice = playerChoices[randomIndex];
    

}

console.log(getRandomChoice(playerChoices));

//get Player choice

let userInput = prompt("What do you pick?");
playerChoice = userInput.toLowerCase();
console.log(playerChoice);