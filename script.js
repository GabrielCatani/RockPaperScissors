"use strict";

function getComputerChoice() {
    const value = Math.floor(Math.random() * 9);
    let choice;
    if(value <= 2) {
        choice = "Rock";
    }
    else if (value > 2 && value <= 5) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    
    return choice;
}

