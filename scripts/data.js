const createDR = (rank) => ({
  name: (name) => {
    document.querySelector(`.rank${rank}-name`).innerText = name;
  },
  score: (score) => {
    document.querySelector(`.rank${rank}-total-score`).innerText = score;
  },
  bookingStreek: (bookingStreek) => {
    document.querySelector(`.rank${rank}-booking-streek`).innerText =
      bookingStreek;
  },
  addedScore: (addedScore) => {
    document.querySelector(`.rank${rank}-added-score`).innerText = addedScore;
  },
});

const dR1 = createDR(1);
const dR2 = createDR(2);
const dR3 = createDR(3);
const dR4 = createDR(4);

let p1 = {
  name: 'Player 1',
  score: 0,
  bookingStreek: 0,
  addedScore: 0,
  lastGoal: 0,
  lastAuction: 0,
};

let p2 = {
  name: 'Player 2',
  score: 0,
  bookingStreek: 0,
  addedScore: 0,
  lastGoal: 0,
  lastAuction: 0,
};

let p3 = {
  name: 'Player 3',
  score: 0,
  bookingStreek: 0,
  addedScore: 0,
  lastGoal: 0,
  lastAuction: 0,
};

let p4 = {
  name: 'Player 4',
  score: 0,
  bookingStreek: 0,
  addedScore: 0,
  lastGoal: 0,
  lastAuction: 0,
};
