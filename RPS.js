playerChoices = ["rock", "paper", "scissors"]

function getRandomChoice(choices){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choice = playerChoices[randomIndex];
    

}

console.log(getRandomChoice(playerChoices));