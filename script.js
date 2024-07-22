'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    displayMessage('⛔ No number for guess! ⛔');
  } else if (secretNumber === guess) {
    displayMessage('🎉 Congrats! 🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(
        secretNumber < guess ? '⚠️ Too high! ⚠️' : '⚠️ Too low! ⚠️'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You lost the game 😭');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateRandomNumber();
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
