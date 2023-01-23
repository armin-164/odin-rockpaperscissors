let playerScore = 0;
let computerScore = 0;

const resultcontainer = document.querySelector(".resultdiv");
resultcontainer.innerText = "The current score stands at" + "\n" + "Player: " + playerScore + "\n" + "Computer: " + computerScore;


function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomOption = options[Math.floor(Math.random()* options.length)].toUpperCase();
    return randomOption;
}

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {                                           
        console.log( "It's a draw");
    }

    else if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS")||                  
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")||               
        (playerSelection == "PAPER" && computerSelection == "ROCK") )                     
        {
            playerScore++;
            console.log( "Player Wins");
             resultcontainer.innerText = "The current score stands at" + "\n" + "Player: " + playerScore + "\n" + "Computer: " + computerScore;
        }
        
        else {
            computerScore++;
            console.log( "Computer Wins");
             resultcontainer.innerText = "The current score stands at" + "\n" + "Player: " + playerScore + "\n" + "Computer: " + computerScore;
        }
        
        if (playerScore === 5 && playerScore > computerScore) {
            console.log("PLAYER WON");
            return resultcontainer.innerText = `PLAYER WINS with ${playerScore} pts`;
        }
    
        else if (computerScore === 5 && playerScore < computerScore) {
            console.log("COMPUTER WON");
            return resultcontainer.innerText = `COMPUTER WINS with ${computerScore} pts`;
        }
        
}

function game() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => playRound(button.innerText.toUpperCase(), getComputerChoice()));
    });
}
game();