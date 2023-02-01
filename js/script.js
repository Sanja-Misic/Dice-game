"use strict"
//el1
const el1 = document.querySelector(".element1");
const startbtn = document.querySelector(".start-btn");
let enterPlayerName1 = document.querySelector("#player-1-name")
let enterPlayerName2 = document.querySelector("#player-2-name")

//el3
const el3 = document.querySelector(".element3");

const rollbtn = document.querySelector(".roll");
const storebtn = document.querySelector(".store");
const playerIcon = document.querySelector(".player-icon")

let dice1 = document.querySelector(".player1-img");
let dice2 = document.querySelector(".player2-img");

let score1 = document.querySelector(".player1-score-num")
let score2 = document.querySelector(".player2-score-num")

let curScore1 = document.querySelector(".player1-current-score-num")
let curScore2 = document.querySelector(".player2-current-score-num")

let playerName1 = document.querySelector(".player1-name");
let playerName2 = document.querySelector(".player2-name");

let playerNamesNotEnter = document.querySelector(".element1-h2")

//el4
const el4 = document.querySelector(".element4");
const winPlayer = document.querySelector(".winner-name")
const startAgenBtn = document.querySelector(".start-again")

// el1.style.display = "none"
el3.style.display = "none" 
el4.style.display = "none" 

//// el1

startbtn.addEventListener('click', function() {
    
    if(enterPlayerName1.value && enterPlayerName2.value ) {
        playerName1.textContent = enterPlayerName1.value
        playerName2.textContent = enterPlayerName2.value
        
        el1.style.display = "none"
        el3.style.display = "flex" //treba da bude 2 pa brojac da ga prebaci na 3

    } else
        playerNamesNotEnter.textContent ="You didn't enter players names!"
        playerNamesNotEnter.style.color = "#d84a5d"
        console.log("You didn't enter player name.")    
})





////el2
let curPlayer = 0;
let curScore = 0;
let score1num = 0;
let score2num = 0;

//Roll button
rollbtn.addEventListener('click', function() {
    
    let randomDice = Math.floor(Math.random() * 6 + 1)

    console.log(randomDice)

    //Display dice 
    if(curPlayer === 0) {
        dice1.src = `./img/dice-${randomDice}.png`
    }    
    else if (curPlayer === 1) {
        dice2.src = `./img/dice-${randomDice}.png`       
    }
    
    //display currScore
    if(randomDice > 1) {
        curScore += randomDice

        if(curPlayer === 0) {
            curScore1.textContent = curScore;
        }
        else if (curPlayer === 1) {
            curScore2.textContent = curScore;
        }
        
    } else if (randomDice === 1) {
        curScore = 0

        if(curPlayer === 0) {
            curPlayer = 1
            curScore1.textContent = 0;
        }
        else if (curPlayer === 1) {
            curPlayer = 0
            curScore2.textContent = 0;
        }
    }
})
// Store score
storebtn.addEventListener('click', function() {  
    if(curPlayer === 0) {  
        score1num += curScore
        score1.textContent = score1num; 

        curPlayer = 1;
        curScore = 0;
    
    }
    
    else if (curPlayer === 1) {
        score2num += curScore
        score2.textContent = score2num;     
    
        curPlayer = 0;
        curScore = 0;
    }
    
    //el4
    if (score1num > 10) { //50
        el3.style.display = "none" 
        el4.style.display = "flex"
        winPlayer.textContent = playerName1.textContent 
    }
    
    if (score2num >= 10) { //50
        el3.style.display = "none" 
        el4.style.display = "flex" 
        winPlayer.textContent = playerName2.textContent 
    }
})

///el4
startAgenBtn.addEventListener('click', function() {
    el4.style.display = "none" 
    el1.style.display = "flex"

    curPlayer = 0;
    curScore = 0;
    score1num = 0;
    score2num = 0;
    curScore1.textContent = 0;
    curScore2.textContent = 0;
    score1.textContent = 0;
    score2.textContent = 0; 

    playerNamesNotEnter.textContent = "Enter players names"
    playerNamesNotEnter.style.color = "initial"

})