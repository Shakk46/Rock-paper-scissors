function getComputerChoice () {
    let arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

let computerScore = 0;
let playerScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScoreIn = document.querySelector('#score__player');
const computerScoreIn = document.querySelector('#score__computer');
const result = document.querySelector('#result');
const span = document.querySelector('#span')


rock.addEventListener('click', () => roundRockPS(getComputerChoice(), 'rock'));
paper.addEventListener('click', () => roundRockPS(getComputerChoice(), 'paper'));
scissors.addEventListener('click', () => roundRockPS(getComputerChoice(), 'scissors'));



function roundRockPS (computerChoice, playerChoice) {
    if (computerChoice == 'rock') {
            if (playerChoice == 'paper') {
                playerScoreIn.textContent = ++playerScore
                result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
                span.textContent = 'WON'
                span.style.color = 'green'
            }
            else if (playerChoice == 'rock') {
                result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
                span.textContent = 'DRAW'
                span.style.color = 'grey'
            }
            else if (playerChoice == 'scissors') {
                computerScoreIn.textContent = ++computerScore
                result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
                span.textContent = 'LOSS'
                span.style.color = 'red'
            }
    }
    else if (computerChoice == 'paper') {
            if (playerChoice == 'scissors') {
                playerScoreIn.textContent = ++playerScore
                result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
                span.textContent = 'WON'
                span.style.color = 'green'
            }
            if (playerChoice == 'paper') {
                result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
                span.textContent = 'DRAW'
                span.style.color = 'grey'
            }
            if (playerChoice == 'rock') {
                computerScoreIn.textContent = ++computerScore
                result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
                span.textContent = 'LOSS'
                span.style.color = 'red'
            }
    }
    else if (computerChoice == 'scissors') {
            if (playerChoice == 'rock') {
                playerScoreIn.textContent = ++playerScore
                result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
                span.textContent = 'WON'
                span.style.color = 'green'
            }
            if (playerChoice == 'scissors') {
                result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
                span.textContent = 'DRAW'
                span.style.color = 'grey'
            }
            if (playerChoice == 'paper') {
                computerScoreIn.textContent = ++computerScore
                result.textContent = `${playerChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
                span.textContent = 'LOSS'
                span.style.color = 'red'
            }
    }
}