'use strict';

const labelMessage = document.querySelector('.message');
const labelScore = document.querySelector('.score');
const labelHighScore = document.querySelector('.highscore');
const labelNumber = document.querySelector('.number');
const screenBody = document.querySelector('body');
const inputNumber = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const btnInstructions = document.querySelector('.instructions');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const displayMessage = function (message) {
  labelMessage.textContent = message;
};

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const playAgain = function () {
  secretNumber = generateRandomNumber();
  score = 20;
  labelScore.textContent = score;
  labelNumber.textContent = '?';
  screenBody.style.backgroundColor = '#222';
  labelNumber.style.width = '15rem';
  inputNumber.value = '';
  displayMessage('Start guessing...');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(inputNumber.value);

  if (!guess) {
    displayMessage('⛔ No number for guess! ⛔');
  } else if (secretNumber === guess) {
    displayMessage('🎉 Congrats! 🎉');
    labelNumber.textContent = secretNumber;
    screenBody.style.backgroundColor = '#60b347';
    labelNumber.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      labelHighScore.textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(
        secretNumber < guess ? '⚠️ Too high! ⚠️' : '⚠️ Too low! ⚠️'
      );
      score--;
      labelScore.textContent = score;
    } else {
      displayMessage('😭 You lost the game 😭');
      score--;
      labelScore.textContent = score;
    }
  }
});

btnAgain.addEventListener('click', playAgain);
btnInstructions.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
