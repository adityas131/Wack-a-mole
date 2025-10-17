let score = 0;
let activeMole = null;
let gameInterval;

const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const winMessage = document.getElementById('win_message');
const restartBtn = document.getElementById('restart');

// Function to randomly choose and activate a mole
function randomMole() {
  moles.forEach(mole => mole.classList.remove('active'));
  const randomIndex = Math.floor(Math.random() * moles.length);
  activeMole = moles[randomIndex];
  activeMole.classList.add('active');
}

// When a mole is clicked
moles.forEach(mole => {
  mole.addEventListener('click', () => {
    if (mole.classList.contains('active')) {
      score++;
      scoreDisplay.textContent = score;
      mole.classList.remove('active');
      randomMole();
      if (score >= 10) {
        winMessage.textContent = "🎉 You win!";
        clearInterval(gameInterval);
      }
    }
  });
});

// Start the game
function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  winMessage.textContent = "";
  randomMole();
  gameInterval = setInterval(randomMole, 1000);
}

// Restart button
restartBtn.addEventListener('click', () => {
  clearInterval(gameInterval);
  startGame();
});

// Start automatically when page loads
startGame();
