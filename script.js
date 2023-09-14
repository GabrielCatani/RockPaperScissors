"use strict";

function getComputerChoice() {
    const value = Math.floor(Math.random() * 9);
    let choice;
    if(value <= 2) {
        choice = "rock";
    }
    else if (value > 2 && value <= 5) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    
    return choice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === ' ' || 
        (playerSelection.toLowerCase() !== "rock" &&
            playerSelection.toLowerCase() !== "paper" &&
            playerSelection.toLowerCase() !== "scissors")) {
        return "Invalid input";
    }

    let playerWon = false;
    let computerWon = false;

    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            playerWon = true;
        }
        else if (computerSelection === "paper") {
            computerWon = true;
        } 
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerWon = true;
        }
        else if (computerSelection === "scissors") {
            computerWon = true;
        } 
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            playerWon = true;
        }
        else if (computerSelection === "rock") {
            computerWon = true;
        } 
    }

    if (!playerWon && !computerWon) {
        return "Draw! both played " + computerSelection;
    }
    else if(playerWon) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}



function game(maxRounds) {
    const buttons = document.querySelectorAll('button');
    let roundNbr = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const roundResult = document.querySelector('.roundResult');
            const result = playRound(button.className, getComputerChoice());
            const new_p = document.createElement('p');

            new_p.textContent = result;
            new_p.style.fontSize = '20px';
            if (roundResult.hasChildNodes()) {
                roundResult.removeChild(roundResult.firstChild);
            }

            roundResult.appendChild(new_p);
            roundNbr++;
        
            const rounds = document.getElementsByClassName('nbrRounds')[0];
            rounds.innerHTML = 'Rounds: ' + roundNbr;
            if (roundNbr >= maxRounds) {
                rounds.innerHTML = 'End of Game';
            }
        });
    });
}

game(5);
