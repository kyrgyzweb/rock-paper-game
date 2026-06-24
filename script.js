// 1. Write logic tot the Computer choice
const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 0) {
        return 'rock';
    } else if(randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// 2. Write logic to the Human choice
const getHumanChoice = () => {
    let humanChoice = prompt("Enter your choice: ");
    return humanChoice;
}



let humanScore = 0;
let computerScore = 0;




    // 3. Declare players score variables 


// 4. Write the logic to play a single round
const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        console.log('Game is tie! Try again!');
    }
    
    if(humanChoice === 'rock') {
        if(computerChoice === 'paper') {
            console.log('Computer Won!');
            computerScore += 1;
        } else if(computerChoice === 'scissors') {
            console.log('You won!');
            humanScore += 1;
        }
    }

    if(humanChoice === 'paper') {
        if(computerChoice === 'rock') {
            console.log('You won!');
            humanScore += 1;
        } else if(computerChoice === 'scissors') {
            console.log('Computer won!');
            computerScore += 1;
        }
    }

    if(humanChoice === 'scissors') {
        if(computerChoice === 'rock') {
            console.log('Computer Won!');
            computerScore += 1;
        } else if(computerChoice === 'paper') {
            console.log('You won!');
            humanScore += 1;
        }
    }
}

console.log(`Human: ${humanScore}`);
console.log(`Computer: ${computerScore}`);

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})


const btnResult = document.querySelector("#result");


console.log("=== Final Scores ===");
console.log(`Human: ${humanScore}`);
console.log(`Computer: ${computerScore}`);

if (humanScore > computerScore) {
    btnResult.textContent = "You won the game!";
} else if (computerScore > humanScore) {
    btnResult.textContent = "Computer won the game!";
} else {
    btnResult.textContent = "The game ended in a tie!";
}

// Rock button choice






