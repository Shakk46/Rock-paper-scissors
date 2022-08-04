function getComputerChoice () {
    let arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

let computerScore = 0;
let playerScore = 0;

function getPlayerChoice() {
    return prompt('What is your choice?')
}

function roundRockPS (computerChoice, playerChoice) {
    if (computerChoice == 'rock') {
            if (playerChoice == 'paper') {
            playerScore++
            return 'rock. You won!!!'
            }
            if (playerChoice == 'rock') {
            return "rock. It's a draw!!!"
            }
            if (playerChoice == 'scissors') {
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

function game () {
    for (let i = 0; i < 5; i++) {
        alert(roundRockPS(getComputerChoice(),getPlayerChoice()))
        alert('Your score: Computer: ' + computerScore + '' + 'You: ' + playerScore)
    }
    if (computerScore > playerScore) {
        alert('You lost!!!')
    }else {
        alert('You won!!!')
    }
}
game();