function getComputerChoice () {
    let arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

let askPlayer = prompt('Whats your choice?')

function roundRockPS (computerChoice, playerChoice) {
    if (computerChoice == 'rock') {
        if (playerChoice == 'paper') {
            return 'rock. You won!!!'
        }
        if (playerChoice == 'rock') {
            return "rock. It's a draw!!!"
        }
        if (playerChoice == 'scissors') {
            return 'rock. You lost!!!'
        }
    }
    else if (computerChoice == 'paper') {
        if (playerChoice == 'scissors') {
            return 'paper. You won!!!'
        }
        if (playerChoice == 'paper') {
            return "paper.It's a draw!!!"
        }
        if (playerChoice == 'rock') {
            return 'paper. You lost!!!'
        }
    }
    else if (computerChoice == 'scissors') {
        if (playerChoice == 'rock') {
            return 'scissors. You won!!!'
        }
        if (playerChoice == 'scissors') {
            return "scissors. It's a draw!!!"
        }
        if (playerChoice == 'paper') {
            return 'scissors.You lost!!!'
        }
    }
}

alert(roundRockPS(getComputerChoice(),askPlayer));