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
            computerScore += 1; 
        } else if (computer == "scissor") {
            playerScore += 1; 
        }
    }
     currentRound += 1; // Increment round
    // Update scores on UI
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    // This should be inside each button's click handler, after updating scores:
if(currentRound >= totalRounds) {
    gameActive = false;
    if (playerScore > computerScore) {
        resultMessage.textContent = "Player wins!"
    } else if (computerScore > playerScore) {
        resultMessage.textContent = "Computer wins!"
       
    } else {
        resultMessage.textContent = "It's a tie!"
    }
}
});
// Player chooses paper
paperButton.addEventListener('click', function() {
    if (gameActive) {
        const computer = getRandomComputer();
        if (computer == "rock") {
            playerScore += 1; 
        } else if (computer == "scissor") {
            computerScore += 1; 
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
        resultMessage.textContent = "Player wins!"
    } else if (computerScore > playerScore) {
        resultMessage.textContent = "Computer wins!"
       
    } else {
        resultMessage.textContent = "It's a tie!"
    }
}
});
// Player chooses scissor
scissorButton.addEventListener('click', function() {
    if (gameActive) {
        const computer = getRandomComputer();
        if (computer == "paper") {
            playerScore += 1; 
        } else if (computer == "rock") {
            computerScore += 1; 
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
        resultMessage.textContent = "Player wins!"
    } else if (computerScore > playerScore) {
        resultMessage.textContent = "Computer wins!"
       
    } else {
        resultMessage.textContent = "It's a tie!"
    }
}
});
restart.addEventListener('click' , function(){
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;
    totalRounds = 0;
    gameActive = false;
    pScore.textContent = "0";
    cScore.textContent = "0";
    resultMessage.textContent = "Choose your weapon!";
})

  
