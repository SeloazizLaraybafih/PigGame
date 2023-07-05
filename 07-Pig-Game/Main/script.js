'use strict';
const btnNext = document.querySelector('.btn--next');
const introDiv = document.querySelector('.intro');
const inputNameDiv = document.querySelector('.inputname');
const p0Name = document.querySelector('.p0Name');
const p1Name = document.querySelector('.p1Name');
const p0Submit = document.querySelector('.submit-p0');
const p1Submit = document.querySelector('.submit-p1');
const main = document.querySelector('.main');
const btnPlay = document.querySelector('.btn--play');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const player0Win = document.querySelector('.player1-win');
const player1Win = document.querySelector('.player2-win');
const scoreEndp0 = document.querySelector('.score-end-p1');
const scoreEndp1 = document.querySelector('.score-end-p2');
const totalScoreP0 = document.getElementById('score--0');
const totalScoreP1 = document.getElementById('score--1');
const p0DisplayName = document.getElementById('name--0');
const p1DisplayName = document.getElementById('name--1');
// const totalScore = document.querySelectorAll(".score");
// const currentAll = document.querySelectorAll(".current-score");

let score = [0, 0];
let currentScore = 0;
let diceRoll = 0;
let activePlayer = 0;

// ____________________________________________________________________________________ //
// KETIKA DICE DIROLL START

btnRoll.addEventListener('click', function () {
  diceRoll = Math.trunc(Math.random() * 6) + 1;

  if (diceRoll === 1) {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
  } else {
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }

  //   GANTI IMAGE DICE
  diceImg.src = `dice-${diceRoll}.png`;
});
// KETIKA DICE DIROLL END
// ____________________________________________________________________________________ //

// ____________________________________________________________________________________ //
// KETIKA DICE DIHOLD START

btnHold.addEventListener('click', function () {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  if (activePlayer === 0) {
    score[0] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent = score[0];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = 1;
  } else if (activePlayer === 1) {
    score[1] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent = score[1];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = 0;
  }
  if (score[0] > score[1] && score[0] >= 150) {
    scoreEndp0.textContent = ` ${score[0]}`;
    player0Win.classList.remove('hidden');
    btnNew.classList.remove('hidden');
  } else if (score[1] > score[0] && score[1] >= 150) {
    scoreEndp1.textContent = ` ${score[1]}`;
    player1Win.classList.remove('hidden');
    btnNew.classList.remove('hidden');
  }
});

btnNew.addEventListener('click', function () {
  btnNew.classList.add('hidden');

  player0Win.classList.add('hidden');
  player1Win.classList.add('hidden');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  activePlayer = 0;

  score = [0, 0];
  currentScore = 0;
  diceRoll = 0;
  totalScoreP0.textContent = 0;
  totalScoreP1.textContent = 0;
});

btnNext.addEventListener('click', function () {
  inputNameDiv.classList.remove('hidden');
  introDiv.classList.add('hidden');
});

btnPlay.addEventListener('click', function () {
  main.classList.remove('hidden');
  inputNameDiv.classList.add('hidden');
});

p0Submit.addEventListener('click', function () {
  console.log('uhuy');
  p0DisplayName.textContent = p0Name.value;
  p0Name.value = '';
});

p1Submit.addEventListener('click', function () {
  p1DisplayName.textContent = p1Name.value;
  p1Name.value = '';
});

// if (diceRoll === 1) {
//   diceImg.src = "dice-1.png";
// } else if (diceRoll === 2) {
//   diceImg.src = "dice-2.png";
// } else if (diceRoll === 3) {
//   diceImg.src = "dice-3.png";
// } else if (diceRoll === 4) {
//   diceImg.src = "dice-4.png";
// } else if (diceRoll === 5) {
//   diceImg.src = "dice-5.png";
// } else if (diceRoll === 6) {
//   diceImg.src = "dice-6.png";
// }

// //   UPDATE SKOR SEMENTARA BUAT PLAYER 1
// if (diceRoll === 1) {
//   currentScore = 0;
//   p0CurrentDisplay.textContent = currentScore;
// } else {
//   currentScore += diceRoll;
//   p0CurrentDisplay.textContent = currentScore;
// }
