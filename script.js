function getComputerChoice () {
    let arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

let computerScore = 0;
let playerScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


rock.addEventListener('click', () => alert(roundRockPS(getComputerChoice(), 'rock')));
paper.addEventListener('click', () => alert(roundRockPS(getComputerChoice(), 'paper')));
scissors.addEventListener('click', () => alert(roundRockPS(getComputerChoice(), 'scissors')));

function roundRockPS (computerChoice, playerChoice) {
    if (computerChoice == 'rock') {
            if (playerChoice == 'paper') {
            playerScore++
            return 'rock. You won!!!'
            }
            else if (playerChoice == 'rock') {
            return "rock. It's a draw!!!"
            }
            else if (playerChoice == 'scissors') {
            computerScore++
            return 'rock. You lost!!!'
            }
    }
    else if (computerChoice == 'paper') {
            if (playerChoice == 'scissors') {
            playerScore++
            return 'paper. You won!!!'
            }
            if (playerChoice == 'paper') {
            return "paper.It's a draw!!!"
            }
            if (playerChoice == 'rock') {
            computerScore++
            return 'paper. You lost!!!'
            }
    }
    else if (computerChoice == 'scissors') {
            if (playerChoice == 'rock') {
            playerScore++
            return 'scissors. You won!!!'
            }
            if (playerChoice == 'scissors') {
            return "scissors. It's a draw!!!"
            }
            if (playerChoice == 'paper') {
            computerScore++
            return 'scissors.You lost!!!'
            }
    }
}