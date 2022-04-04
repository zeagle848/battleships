export function renderNewGameModal() {
  const rootElement = document.getElementById('body');
  const fragment = document.createDocumentFragment();

  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('new-game-modal-wrapper');
  modalWrapper.classList.add('modal-visible');

  // CREATE MODAL ELEMENTS
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('new-game-modal-container');

  const modalHeader = document.createElement('h2');
  modalHeader.classList.add('modal-header');
  modalHeader.textContent = 'WELCOME COMMANDER';

  modalContainer.append(modalHeader);

  const placementPrompt = document.createElement('h3');
  placementPrompt.classList.add('placement-prompt');
  placementPrompt.textContent = 'Place your ';

  const boatText = document.createElement('span');
  boatText.classList.add('boat-text');
  boatText.textContent = 'CARRIER';

  placementPrompt.append(boatText);

  modalContainer.append(placementPrompt);

  const flipButton = document.createElement('button');
  flipButton.classList.add('flip-button');
  flipButton.textContent = 'Flip Axis';

  modalContainer.append(flipButton);

  const gridContainer = document.createElement('grid-container');
  gridContainer.classList.add('grid-container');

  for (let i = 0; i < 100; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCell.id = `cell ${i}`;
    gridCell.textContent = i;

    gridContainer.append(gridCell);
  }

  modalContainer.append(gridContainer);

  modalWrapper.append(modalContainer);

  fragment.append(modalWrapper);

  rootElement.append(fragment);
}
