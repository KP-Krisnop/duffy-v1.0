const ids = ['#name-1', '#name-2', '#name-3', '#name-4'];
let nameSet = [];
let currentNames = [];
let randomizedCount = 0;

const randomizerBtn = document.querySelector('.randomize-button');
const nameBox = document.querySelector('.name-box');

randomizerBtn.addEventListener('click', () => {
  if (gameState && randomizedCount !== 0) {
    randomizerBtn.disabled = true;
  } else {
    nameSet = [];
    getInput(nameSet);

    // console.log('clicked');

    if (forAllMT(nameSet)) {
      // console.log('all empty');

      if (localStorage.getItem('playerSet') === null) {
        // console.log('no playerSet');

        if (forSomeMT(nameSet)) {
          flashClass('unsign');
        } else {
          randomizePlayer(nameSet);
          setInputValue(nameSet);
          flashClass('randomized');
          // console.log(nameSet);
        }
      } else if (localStorage.getItem('playerSet') !== null) {
        // console.log('has playerSet');

        nameSet = JSON.parse(localStorage.getItem('playerSet'));
        randomizePlayer(nameSet);
        setInputValue(nameSet);
        flashClass('randomized');
      }
    } else if (forSomeMT(nameSet)) {
      flashClass('unsign');
    } else {
      randomizePlayer(nameSet);
      setInputValue(nameSet);
      flashClass('randomized');
      // console.log(nameSet);
    }

    const players = [p1, p2, p3, p4];

    players.forEach((player, index) => {
      player.name = currentNames[index];
    });

    // placeNames();
    game.displayStats();

    console.log('Randomized Count : ', randomizedCount);
  }
});

function getInput(array) {
  ids.forEach((id) => {
    const input = document.querySelector(id);
    array.push(input.value.toLowerCase().replace(/\s/g, ''));
  });
}

function randomizePlayer(array) {
  const dir = Math.random() > 0.5;
  const shiftValue = Math.floor(Math.random() * 4);

  if (dir) {
    array = array.reverse();
  }

  for (let i = 0; i < shiftValue; i++) {
    const firstValue = array.shift();
    array.push(firstValue);
  }

  return array;
}

function setInputValue(array) {
  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    const output = document.querySelector(ids[i]);
    output.value = name;
  }

  randomizedCount++;

  currentNames = array;
  console.log('Current Name Set : ', currentNames);
  localStorage.setItem('playerSet', JSON.stringify(array));
}

function flashClass(text) {
  nameBox.classList.add(text);
  setTimeout(() => {
    nameBox.classList.remove(text);
  }, 200);
}

function mTString(array) {
  array.some(function (element) {
    return element == '';
  });
}

function forSomeMT(array) {
  let status = false;
  array.some(function (element) {
    if (element === '') {
      status = true;
    }
  });
  return status;
}

function forAllMT(array) {
  let status = false;
  array.every((element) => {
    if (element == '') {
      status = true;
    }
  });
  return status;
}

function lockInput() {
  ids.forEach((id) => {
    const input = document.querySelector(id);
    input.disabled = true;
  });
}

function unlockInput() {
  ids.forEach((id) => {
    const input = document.querySelector(id);
    input.disabled = false;
  });
}
