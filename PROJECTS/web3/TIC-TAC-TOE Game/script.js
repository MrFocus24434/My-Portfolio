document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const resultDiv = document.getElementById('result');
  const resetBtn = document.getElementById('resetBtn');
  const cells = [];

  let currentPlayer = 'X';
  let isGameActive = true;

  // Create the grid
  for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('click', () => handleCellClick(i));
      board.appendChild(cell);
      cells.push(cell);
  }

  // Reset the game
  const resetGame = () => {
      currentPlayer = 'X';
      isGameActive = true;
      cells.forEach(cell => {
          cell.textContent = '';
          cell.classList.remove('winner');
      });
      resultDiv.textContent = '';
  };

  // Handle cell click
  const handleCellClick = (index) => {
      const cell = cells[index];

      if (cell.textContent || !isGameActive) return;

      cell.textContent = currentPlayer;
      checkWinner();
      togglePlayer();
  };

  // Check for a winner
  const checkWinner = () => {
      const winningCombos = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
      ];

      for (const combo of winningCombos) {
          const [a, b, c] = combo;
          if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
              cells[a].classList.add('winner');
              cells[b].classList.add('winner');
              cells[c].classList.add('winner');
              isGameActive = false;
              resultDiv.textContent = `${currentPlayer} wins!`;
              return;
          }
      }

      if (![...cells].some(cell => cell.textContent === '')) {
          isGameActive = false;
          resultDiv.textContent = "It's a draw!";
      }
  };

  // Toggle player
  const togglePlayer = () => {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  };

  // Reset button click event
  resetBtn.addEventListener('click', resetGame);

  // Initial game reset
  resetGame();
});
