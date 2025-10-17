let score = 0;
let activeMole = null;
let gameInterval;

window.addEventListener("DOMContentLoaded", () => {
  const moles = document.querySelectorAll('.mole');
  const scoreDisplay = document.getElementById('score');
  const winMessage = document.getElementById('win_message');
  const restartBtn = document.getElementById('restart');

  // Function to activate a random mole
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

        // 🎯 Win at 5 points
        if (score >= 5) {
          winMessage.textContent = "🎉 You win!";
          clearInterval(gameInterval);

          // ⏳ Reset game automatically after 10 seconds
          setTimeout(() => {
            resetGame();
          }, 10000); // 10000 ms = 10 seconds
        }
      }
    });
  });

  // Start game logic
  function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    winMessage.textContent = "";
    randomMole();
    gameInterval = setInterval(randomMole, 1000);
  }

  // Reset game after winning
  function resetGame() {
    moles.forEach(mole => mole.classList.remove('active'));
    score = 0;
    scoreDisplay.textContent = score;
    winMessage.textContent = "";
    startGame();
  }

  // Restart button manually resets the game anytime
  restartBtn.addEventListener('click', () => {
    clearInterval(gameInterval);
    resetGame();
  });

  // Start the game on page load
  startGame();
});
