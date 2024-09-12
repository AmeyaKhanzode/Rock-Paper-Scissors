let round = 0;
let humanScore = 0;
let computerScore = 0;
const totalRounds = 5;

function play() {
    while (round < totalRounds) {
        round++;
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        
}

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const randomInput = Math.floor(Math.random() * 3);
    return moves[randomInput];
}

function getHumanChoice() {
    const humanInput = prompt("Enter your move: rock, paper, or scissors");
    return humanInput;
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

function game() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
}

game();
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);








let humanScore = 0;
let computerScore = 0;
let round = 0;
const totalRounds = 5;

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const randomInput = Math.floor(Math.random() * 3);
    return moves[randomInput];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

function play(humanChoice) {
    if (round >= totalRounds) return;

    round++;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    
    document.getElementById('result').textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('roundCounter').textContent = `Round: ${round} / ${totalRounds}`;

    if (round === totalRounds) {
        endGame();
    }
}

function endGame() {
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => choice.style.pointerEvents = 'none');

    let finalResult = "It's a tie!";
    if (humanScore > computerScore) {
        finalResult = "Congratulations! You win the game!";
    } else if (humanScore < computerScore) {
        finalResult = "Game over! Computer wins!";
    }

    document.getElementById('finalResult').textContent = `${finalResult} Final Score - You: ${humanScore}, Computer: ${computerScore}`;
    document.getElementById('playAgain').style.display = 'inline-block';
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById('humanScore').textContent = '0';
    document.getElementById('computerScore').textContent = '0';
    document.getElementById('result').textContent = '';
    document.getElementById('finalResult').textContent = '';
    document.getElementById('roundCounter').textContent = 'Round: 1 / 5';
    document.getElementById('playAgain').style.display = 'none';

    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => choice.style.pointerEvents = 'auto');
}
