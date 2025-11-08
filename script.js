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
