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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const gameResult = document.querySelector('.gameResult');
        const result = playRound(button.className, getComputerChoice());
        const new_p = document.createElement('p');

        new_p.textContent = result;
        new_p.style.fontSize = '20px';
        if (gameResult.hasChildNodes()) {
            gameResult.removeChild(gameResult.firstChild);
        }

        gameResult.appendChild(new_p);
    });
});

