function getComputerChoice(){
    let number = Math.floor(Math.random() * 3) + 1;
    if(number == 1){
        return "Rock";
    }
    else if(number == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function rpsround(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "Tie Game! Both You and the Computer played " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        return "You Win! Scissors beats Paper";
    }
    else {
        return "You Win! Rock beats Scissors";
    }
}

function game(){
    let playerScore = 0, computerScore = 0;
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        if(playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors"){
            alert("Invalid Input. Click OK to input either Rock, Paper, or Scissors again");
            i--;
            continue;
        }
        let roundresult = rpsround(playerSelection, getComputerChoice());
        console.log(roundresult);
        let determiner = roundresult.substring(0, 9);
        if(determiner == "You Lose!"){
            computerScore++;
        }
        else if(determiner == "You Win! "){
            playerScore++;
        }
        let totalScore = "You: " + playerScore + " Computer: " + computerScore;
        console.log(totalScore);
    }
    if(playerScore > computerScore){
        console.log("You Won the 5 round game! Great Job!");
    }
    else if(playerScore < computerScore){
        console.log("You lost the 5 round game. Play Again to try and win next time!");
    }
    else{
        console.log("Tie Game after 5 rounds. Play Again to try and win next time!");
    }
}
game();