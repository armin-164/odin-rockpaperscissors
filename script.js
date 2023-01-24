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
    
    const draw = playerSelection === computerSelection;
    const playerWinsRound = 
        (playerSelection === "ROCK" && computerSelection === "SCISSORS")||                  
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")||               
        (playerSelection === "PAPER" && computerSelection === "ROCK");
    
    if (draw) {             
        console.log("draw");                              
      resultcontainer.innerText = "The current score stands at" + "\n" + "Player: " + playerScore + "\n" + "Computer: " + computerScore;
    }

    else if (playerWinsRound)  {     
            playerScore++;
            console.log( "Player Wins");
            resultcontainer.innerText = "The current score stands at" + "\n" + "Player: " + playerScore + "\n" + "Computer: " + computerScore;
        }
        
        // Else statement for when computer wins
        else {
            computerScore++;
            console.log( "Computer Wins");
            resultcontainer.innerText = "The current score stands at" + "\n" + "Player: " + playerScore + "\n" + "Computer: " + computerScore;
        }

        const playerHasWon = playerScore === 5 && playerScore > computerScore;
        const computerHasWon = computerScore === 5 && playerScore < computerScore;

        if (playerHasWon) {
            console.log("PLAYER WON");
            return resultcontainer.innerText = `PLAYER WINS with ${playerScore} pts`;
        }
    
        else if (computerHasWon) {
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