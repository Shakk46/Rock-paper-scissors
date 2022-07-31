function getComputerChoice () {
    let arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}
console.log(getComputerChoice())