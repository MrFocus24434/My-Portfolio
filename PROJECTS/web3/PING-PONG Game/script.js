document.addEventListener('DOMContentLoaded', function() {
  const player = document.getElementById('player');
  const computer = document.getElementById('computer');
  const ball1 = document.getElementById('ball1');
  const ball2 = document.getElementById('ball2');
  const gameArea = document.querySelector('.game-area');
  const playerScoreDisplay = document.getElementById('player-score');
  const computerScoreDisplay = document.getElementById('computer-score');

  let playerPosition = 200;
  let computerPosition = 200;
  let ball1X = 400;
  let ball1Y = 200;
  let ball2X = 400;
  let ball2Y = 200;
  let ballSpeedX1 = -5;
  let ballSpeedY1 = -5;
  let ballSpeedX2 = 5;
  let ballSpeedY2 = 5;
  let playerScore = 0;
  let computerScore = 0;

  function update() {
    // Update ball1 position
    ball1X += ballSpeedX1;
    ball1Y += ballSpeedY1;

    // Ball1 collision with top and bottom walls
    if (ball1Y <= 0 || ball1Y >= 380) {
      ballSpeedY1 = -ballSpeedY1;
    }

    // Ball1 collision with player paddle
    if (ball1X <= 30 && ball1Y >= playerPosition && ball1Y <= playerPosition + 100) {
      ballSpeedX1 = -ballSpeedX1;
      playerScore++;
      updateScoreboard();
    }

    // Ball1 collision with computer paddle
    if (ball1X >= 770 && ball1Y >= computerPosition && ball1Y <= computerPosition + 100) {
      ballSpeedX1 = -ballSpeedX1;
      computerScore++;
      updateScoreboard();
    }

    // Ball1 out of bounds
    if (ball1X <= 0 || ball1X >= 780) {
      ball1X = 400;
      ball1Y = 200;
      ballSpeedX1 = -ballSpeedX1;
    }

    // Update ball2 position
    ball2X += ballSpeedX2;
    ball2Y += ballSpeedY2;

    // Ball2 collision with top and bottom walls
    if (ball2Y <= 0 || ball2Y >= 380) {
      ballSpeedY2 = -ballSpeedY2;
    }

    // Ball2 collision with player paddle
    if (ball2X <= 30 && ball2Y >= playerPosition && ball2Y <= playerPosition + 100) {
      ballSpeedX2 = -ballSpeedX2;
      playerScore++;
      updateScoreboard();
    }

    // Ball2 collision with computer paddle
    if (ball2X >= 770 && ball2Y >= computerPosition && ball2Y <= computerPosition + 100) {
      ballSpeedX2 = -ballSpeedX2;
      computerScore++;
      updateScoreboard();
    }

    // Ball2 out of bounds
    if (ball2X <= 0 || ball2X >= 780) {
      ball2X = 400;
      ball2Y = 200;
      ballSpeedX2 = -ballSpeedX2;
    }

    // Move computer paddle
    const speed = 0.1;
    computerPosition += (ball1Y - (computerPosition + 50)) * speed;

    // Update elements position
    player.style.top = `${playerPosition}px`;
    computer.style.top = `${computerPosition}px`;
    ball1.style.left = `${ball1X}px`;
    ball1.style.top = `${ball1Y}px`;
    ball2.style.left = `${ball2X}px`;
    ball2.style.top = `${ball2Y}px`;

    // Check for win condition
    if (playerScore >= 10) {
      alert("You win!");
      restartGame();
    } else if (computerScore >= 10) {
      alert("Computer wins!");
      restartGame();
    }
  }

  function updateScoreboard() {
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  }

  function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
  }

  function restartGame() {
    playerPosition = 200;
    computerPosition = 200;
    ball1X = 400;
    ball1Y = 200;
    ball2X = 400;
    ball2Y = 200;
    ballSpeedX1 = -5;
    ballSpeedY1 = -5;
    ballSpeedX2 = 5;
    ballSpeedY2 = 5;
    playerScore = 0;
    computerScore = 0;
    updateScoreboard(); // Reset scoreboard on restart
  }

  gameLoop();

  // Keyboard event listeners for player control
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
      playerPosition -= 10;
      if (playerPosition < 0) {
        playerPosition = 0;
      }
    } else if (event.key === 'ArrowDown') {
      playerPosition += 10;
      if (playerPosition > 300) {
        playerPosition = 300;
      }
    }
  });
});
