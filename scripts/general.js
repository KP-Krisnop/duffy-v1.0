const askMessage = document.querySelector('.ask-game');

const keysPressed = new Set();

document.addEventListener('keydown', (event) => {
  keysPressed.add(event.key);
  checkKeyCombination();
});

document.addEventListener('keyup', (event) => {
  keysPressed.delete(event.key);
});

function checkKeyCombination() {
  if (keysPressed.has('Alt') && keysPressed.has('q')) {
    console.log('Alt + Q keys pressed together!');
    continueGame();
    // Your custom logic for the key combination goes here
  }
}

let gameState = false;
let roundCount = 16;

const game = {
  start: () => {
    newGameButton.innerText = 'End Game';
    startGameButton.innerText = 'End';
    askMessage.innerText = 'End Game?';
    console.log('STARTED');
    lockInput();
    game.displayStats();
  },

  end: () => {
    newGameButton.innerText = 'New Game';
    startGameButton.innerText = 'Start';
    askMessage.innerText = 'New Game?';
    console.log('ENDED');
    randomizerBtn.disabled = false;
    unlockInput();
  },

  displayStats: () => {
    const dR = [dR1, dR2, dR3, dR4];
    const pOrder = [p1, p2, p3, p4];
    const playerNames = [player1Name, player2Name, player3Name, player4Name];
    const displayOrder = [p1, p2, p3, p4];
    const properties = ['name', 'score', 'bookingStreek', 'addedScore'];
    const propPrefix = ['', '', '', '+'];

    const rankingScore = [
      [p1, p1.score],
      [p2, p2.score],
      [p3, p3.score],
      [p4, p4.score],
    ];

    rankingScore.sort((a, b) => a[1] - b[1]).reverse();

    for (let i = 0; i < rankingScore.length; i++) {
      const element = rankingScore[i][0];

      displayOrder[i] = element;
    }

    // console.log('Rank Names', displayOrder);

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        dR[i][properties[j]](propPrefix[j] + displayOrder[i][properties[j]]);
      }
    }

    playerNames.forEach((playerName, index) => {
      playerName.innerText = pOrder[index].name.toUpperCase();
    });
  },
};
