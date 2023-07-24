const openModalButton = document.querySelector('#open-new-game-modal');
const closeModalButton = document.querySelector('#close-new-game-modal');
const newGameModal = document.querySelector('#new-game-modal');

const startGameButton = document.querySelector('.start-game-button');
const newGameButton = document.querySelector('.new-game-button');

openModalButton.addEventListener('click', () => {
  newGameModal.showModal();
});

closeModalButton.addEventListener('click', () => {
  newGameModal.close();
});

startGameButton.addEventListener('click', () => {
  if (!gameState) {
    gameState = true;
    newGameModal.close();
    game.start();
  } else {
    gameState = false;
    newGameModal.close();
    game.end();
  }
});
