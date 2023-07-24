const table = document.querySelector('.table');
const player1Name = document.querySelector('.p1-table-name');
const player2Name = document.querySelector('.p2-table-name');
const player3Name = document.querySelector('.p3-table-name');
const player4Name = document.querySelector('.p4-table-name');

function addTable() {
  // Create a new row
  const newRow = document.createElement('div');
  newRow.className = 'row';

  // Create new elements for the cells and assign values
  const cells = setCells();

  // Create new row of number of cards
  const cardNumberDiv = document.createElement('div');
  cardNumberDiv.textContent = numCard;
  cardNumberDiv.className = 'cards';
  newRow.appendChild(cardNumberDiv);

  cells.forEach(({ player, values }) => {
    const playerDiv = document.createElement('div');
    playerDiv.className = player;

    values.forEach((value) => {
      const p = document.createElement('p');
      p.textContent = value;
      playerDiv.appendChild(p);
    });

    newRow.appendChild(playerDiv);
  });

  table.appendChild(newRow);
}

function setCells() {
  const cells = [
    { player: 'player-1', values: [p1.lastGoal, p1.lastAuction, p1.score] },
    { player: 'player-2', values: [p2.lastGoal, p2.lastAuction, p2.score] },
    { player: 'player-3', values: [p3.lastGoal, p3.lastAuction, p3.score] },
    { player: 'player-4', values: [p4.lastGoal, p4.lastAuction, p4.score] },
  ];

  return cells;
}
