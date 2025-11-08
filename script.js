// Initialize scores and rounds
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
let totalRounds = 0;
let gameActive = false;

// DOM elements
const round5Button = document.getElementById('5-rounds');
const round7Button = document.getElementById('7-rounds');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
let pScore = document.getElementById('player-score');
let cScore = document.getElementById('computer-score');
let resultMessage = document.getElementById('result-message');
const restart = document.getElementById('restart');
// Set total rounds and start game when player selects 5 or 7 rounds
round5Button.addEventListener('click', function() {
    totalRounds = 5;
    gameActive = true;
});

round7Button.addEventListener('click', function() {
    totalRounds = 7;
    gameActive = true;
});
// Generate random choice for computer
function getRandomComputer() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) return "rock";
    if (random === 1) return "paper";
    return "scissor";
}
// Player chooses rock
rockButton.addEventListener('click', function() {
    if (gameActive) {
        const computer = getRandomComputer();
        if (computer == "paper") {
            computerScore += 1; // Computer wins
        } else if (computer == "scissor") {
            playerScore += 1; // Player wins
        }
    }
    // Update scores on UI
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
});
// Player chooses paper
paperButton.addEventListener('click', function() {
    if (gameActive) {
        const computer = getRandomComputer();
        if (computer == "rock") {
            playerScore += 1; // Player wins
        } else if (computer == "scissor") {
            computerScore += 1; // Computer wins
        }
    }

    currentRound += 1; // Increment round
    // Update scores on UI
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;

    // End game if total rounds reached
    if(currentRound >= totalRounds) {
        gameActive = false;
        if (playerScore > computerScore) {
            console.log("Player wins");
        } else {
            console.log("Computer wins");
        }
    }
});
