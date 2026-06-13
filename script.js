// 1. Write logic tot the Computer choice
const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 0) {
        return 'rock';
    } else if(randomNum === 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

// 2. Write logic to the Human choice
const getHumanChoice = () => {
    let humanChoice = prompt("Enter your choice: ");
    return humanChoice;
}



