const continueButton = document.querySelector('.round-container');
const cardsNumber = document.querySelector('.cards-number');

let goal = {};
let score = {};
let goalString = [];
let scoreString = [];
let numCard = 13;

continueButton.addEventListener('click', () => {
  continueGame();
});

function continueGame() {
  getGSStrInput();

  if (!gameState) {
    console.log('game is not started');
    alert('Please Start New Game.')
  } else if (
    goalString.some((element) => element === '') ||
    scoreString.some((element) => element === '')
  ) {
    console.log('missing value');
  } else if (randomizedCount <= 0) {
    console.log('no player');
    alert('No Player')
  } else {
    getGSNumInput();

    scoreCalc(p1, goal.p1, score.p1);
    scoreCalc(p2, goal.p2, score.p2);
    scoreCalc(p3, goal.p3, score.p3);
    scoreCalc(p4, goal.p4, score.p4);

    const properties = ['goal', 'score'];

    properties.forEach((element) => {
      for (let i = 1; i <= 4; i++) {
        document.querySelector(`.player${i}-${element}`).value = '';
      }
    });

    if (roundCount > 4) {
      cardsNumber.innerText = roundCount - 4;
      numCard = roundCount - 3;
    } else {
      cardsNumber.innerText = 1;
      numCard = 1;
    }

    addTable();

    roundCount--;
    console.log('Round played', 16 - roundCount);
  }

  game.displayStats();

  if (roundCount === 0) {
    game.end;
  }

  document.querySelector('.player1-goal').focus();
}

function scoreCalc(object, goal, score) {
  const prevScore = object.score;
  let totalScore = 0;
  let bookStreek = object.bookingStreek;

  if (goal === score) {
    totalScore = goal + 5;
    bookStreek++;
  } else {
    totalScore = score;
  }

  object.score = totalScore + prevScore;
  object.bookingStreek = bookStreek;
  object.addedScore = totalScore;
  object.lastGoal = goal;
  object.lastAuction = score;

  return object;
}

function getGSStrInput() {
  goalString = [
    document.querySelector('.player1-goal').value,
    document.querySelector('.player2-goal').value,
    document.querySelector('.player3-goal').value,
    document.querySelector('.player4-goal').value,
  ];

  scoreString = [
    document.querySelector('.player1-score').value,
    document.querySelector('.player2-score').value,
    document.querySelector('.player3-score').value,
    document.querySelector('.player4-score').value,
  ];
}

function getGSNumInput() {
  goal = {
    p1: Number(document.querySelector('.player1-goal').value),
    p2: Number(document.querySelector('.player2-goal').value),
    p3: Number(document.querySelector('.player3-goal').value),
    p4: Number(document.querySelector('.player4-goal').value),
  };
  score = {
    p1: Number(document.querySelector('.player1-score').value),
    p2: Number(document.querySelector('.player2-score').value),
    p3: Number(document.querySelector('.player3-score').value),
    p4: Number(document.querySelector('.player4-score').value),
  };
}
