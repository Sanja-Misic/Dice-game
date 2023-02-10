"use strict"
//Enter players element
const enterPlayersElement = document.querySelector(".enter-players-element");
const startBtn = document.querySelector(".start-btn");
let enterPlayerName1 = document.querySelector("#player-1-name")
let enterPlayerName2 = document.querySelector("#player-2-name")

//Timer element
const timerElement = document.querySelector(".timer-element");
const timeImg = document.querySelector(".time-img")

//Game field element 
const gameFieldElement = document.querySelector(".game-field-element");
let player1Container = document.querySelector(".player1");
let player2Container = document.querySelector(".player2");
const rollBtn = document.querySelector(".roll");
const storeBtn = document.querySelector(".store");
const playerIcon = document.querySelector(".player-icon")
let dice1 = document.querySelector(".player1-img");
let dice2 = document.querySelector(".player2-img");
let score1 = document.querySelector(".player1-score-number")
let score2 = document.querySelector(".player2-score-number")
let currentScore1 = document.querySelector(".player1-current-score-number")
let currentScore2 = document.querySelector(".player2-current-score-number")
let playerName1 = document.querySelector(".player1-name");
let playerName2 = document.querySelector(".player2-name");
let playerNamesNotEnter = document.querySelector(".enter-players-element-h2")

//Display winner element
const displayWinnerElement = document.querySelector(".display-winner-element");
const winPlayer = document.querySelector(".winner-name")
const startAgenBtn = document.querySelector(".start-again")

//Colors
const colorPasivePlayerBakground = "#f4c095";
const colorActivePlayerBakground = "#fff";
const colorPlayerNemesNotEntered = "#ee2e31"

//Other variables
let currentPlayer = 0;
let currentScore = 0;
let score1number = 0;
let score2number = 0;

////////////////////////////////

////element displays on start game
timerElement.style.display = "none" 
gameFieldElement.style.display = "none" 
displayWinnerElement.style.display = "none" 

// Start button functionality
const startBtnFunction = () => {
    if(enterPlayerName1.value && enterPlayerName2.value ) {
        playerName1.textContent = enterPlayerName1.value
        playerName2.textContent = enterPlayerName2.value    
        enterPlayersElement.style.display = "none"
        timerElement.style.display = "flex" 
        timerElement.classList.add("active")

        //timer
        if (timerElement.classList.contains("active")) {       
            setTimeout(() => timeImg.src = "./img/3.png");
            setTimeout(() => timeImg.src = "./img/2.png", 1000);
            setTimeout(() => timeImg.src= "./img/1.png", 2000); 
            setTimeout(() => timerElement.style.display = "none" , 3000);
            setTimeout(() => gameFieldElement.style.display = "flex" , 3000);
        }

    } else {
        playerNamesNotEnter.textContent ="You didn't enter players names!"
        playerNamesNotEnter.style.color = colorPlayerNemesNotEntered 
    }

    //clean placeholder
    if (enterPlayerName1.value !=="") {
        enterPlayerName1.value = ""
    }       
    if (enterPlayerName2.value !=="") {
        enterPlayerName2.value = ""
    }
}

////Game Field Element
//Roll button
const rollBtnFunction = () => {
    //Get random dice
    let randomDice = Math.floor(Math.random() * 6 + 1)

    //Display random dice 
    if(currentPlayer === 0) {
        dice1.src = `./img/dice-${randomDice}.png`
    }    
    else if (currentPlayer === 1) {
        dice2.src = `./img/dice-${randomDice}.png`       
    }
    
    //Display curent score
    if(randomDice > 1) {
        currentScore += randomDice

        if(currentPlayer === 0) {
            currentScore1.textContent = currentScore;
        }
        else if (currentPlayer === 1) {
            currentScore2.textContent = currentScore;
        }
        
    } else if (randomDice === 1) {
        currentScore = 0

        if(currentPlayer === 0) {
            currentPlayer = 1
            currentScore1.textContent = 0;
            player2Container.style.backgroundColor = colorActivePlayerBakground
            player1Container.style.backgroundColor = colorPasivePlayerBakground
            playerIcon.style.left = "85%"
        }
        else if (currentPlayer === 1) {
            currentPlayer = 0
            currentScore2.textContent = 0;
            player1Container.style.backgroundColor = colorActivePlayerBakground
            player2Container.style.backgroundColor = colorPasivePlayerBakground
            playerIcon.style.left = "35%"
        }
    }}

// Store score
const storeBtnFunction = () => {
    if(currentPlayer === 0) {  
        score1number += currentScore
        score1.textContent = score1number; 
        currentScore1.textContent = 0;
        currentPlayer = 1;
        currentScore = 0;
        player2Container.style.backgroundColor = colorActivePlayerBakground
        player1Container.style.backgroundColor = colorPasivePlayerBakground
        playerIcon.style.left = "85%"
    }
    
    else if (currentPlayer === 1) {
        score2number += currentScore
        score2.textContent = score2number;
        currentScore2.textContent = 0;       
        currentPlayer = 0;
        currentScore = 0;
        player1Container.style.backgroundColor = colorActivePlayerBakground
        player2Container.style.backgroundColor = colorPasivePlayerBakground
        playerIcon.style.left = "35%"
    }
    
    //displayWinnerElement
    if (score1number >= 50) { 
        gameFieldElement.style.display = "none" 
        displayWinnerElement.style.display = "flex"
        winPlayer.textContent = playerName1.textContent 
    }
    
    if (score2number >= 50) { 
        gameFieldElement.style.display = "none"; 
        displayWinnerElement.style.display = "flex"; 
        winPlayer.textContent = playerName2.textContent;
    }
}

///RESET - start again btn on Display winner element
const startAgainFunction = () =>{
    displayWinnerElement.style.display = "none";
    enterPlayersElement.style.display = "flex";
    currentPlayer = 0;
    currentScore = 0;
    score1number = 0;
    score2number = 0;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    score1.textContent = 0;
    score2.textContent = 0; 

    playerNamesNotEnter.textContent = "Enter players names";
    playerNamesNotEnter.style.color = "initial";
    
    player1Container.style.backgroundColor = colorActivePlayerBakground;
    player2Container.style.backgroundColor = colorPasivePlayerBakground;

    playerIcon.style.left = "35%"
}

//active background color depend on current player
if (currentPlayer === 0) {
    player1Container.style.backgroundColor = colorActivePlayerBakground;
} else if (currentPlayer === 1) {
    player2Container.style.backgroundColor = colorActivePlayerBakground;  
}

startBtn.addEventListener('click', startBtnFunction);
rollBtn.addEventListener('click', rollBtnFunction);
storeBtn.addEventListener('click', storeBtnFunction);
startAgenBtn.addEventListener('click', startAgainFunction);