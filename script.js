let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomOption = options[Math.floor(Math.random()* options.length)].toUpperCase();
    return randomOption;
}

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        console.log( "It¨s a draw");
    }

    else if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS")||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ) 
        {
            playerScore++;
            console.log( "Player Wins");
        }
        
        else {
            computerScore++;
            console.log( "Computer Wins");
        }
}



function game() {
    for( i = 0; i < 5; i++) {
        let playerSelection = prompt(`Write your move. Player has ${playerScore}pts and computer has ${computerScore}pts`).toUpperCase();
      
        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    }
    
    if (playerScore > computerScore) {
        console.log(`PLAYER WINS WITH ${playerScore}pts`);
    }

    else if (playerScore < computerScore) {
        console.log(`COMPUTER WINS WITH ${computerScore}pts`);
    }

    else {
        console.log("THE GAME CONCLUDES WITH A DRAW");
    }
}
game();