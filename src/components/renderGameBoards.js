const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export function renderGameBoards() {
  const userGameBoard = document.querySelector('.user-game-board');
  const computerGameBoard = document.querySelector('.comp-game-board');

  const userFragment = document.createDocumentFragment();
  const computerFragment = document.createDocumentFragment();

  for (let i = 0; i < 121; i++) {
    const gameBoardCell = document.createElement('div');
    gameBoardCell.classList.add('game-board-tile');

    if (i === 0) {
      gameBoardCell.classList.add('top-left-corner-cell');
    }

    if (i <= 10 && i !== 0) {
      gameBoardCell.classList.add('x-axis-cell');
      gameBoardCell.textContent = i;
    }

    if (i % 11 === 0) {
      gameBoardCell.classList.add('y-axis-cell');
      const yAxisLabelIndex = i / 11 - 1;
      gameBoardCell.textContent = yAxis[yAxisLabelIndex];
    }

    userFragment.append(gameBoardCell);
  }

  for (let i = 0; i < 121; i++) {
    const gameBoardCell = document.createElement('div');
    gameBoardCell.classList.add('game-board-tile');

    if (i === 0) {
      gameBoardCell.classList.add('top-left-corner-cell');
    }

    if (i <= 10 && i !== 0) {
      gameBoardCell.classList.add('x-axis-cell');
      gameBoardCell.textContent = i;
    }

    if (i % 11 === 0) {
      gameBoardCell.classList.add('y-axis-cell');
      const yAxisLabelIndex = i / 11 - 1;
      gameBoardCell.textContent = yAxis[yAxisLabelIndex];
    }

    computerFragment.append(gameBoardCell);
  }

  userGameBoard.append(userFragment);
  computerGameBoard.append(computerFragment);
}
