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

function game() {
    let playerChoice;

    for (let nbrRound = 0; nbrRound <= 5; nbrRound++) {
        playerChoice = prompt("Rock, paper or scissors?");
        console.log(playRound(playerChoice, getComputerChoice()));
    }
    console.log("End of game");
}

game();
