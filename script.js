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
