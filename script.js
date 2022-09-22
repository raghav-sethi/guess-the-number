'use strict';

const getSecretNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = enteredScore => {
  document.querySelector('.score').textContent = enteredScore;
};

let secretNumber = getSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // when no guess entered
  if (!guess) {
    displayMessage('⛔ No Number Entered!');
  }
  // Winning Case: number guessed is right
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    if (Number(score) > Number(highscore)) {
      highscore = score;
      document.querySelector('.highscore').textContent = Number(highscore);
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // number guessed is not right
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
  // number guessed is greater than secretNumber
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage('📈 Too high!';
  //     score--;
  //     displayScore( score;
  //   } else {
  //     displayMessage('💥 You lost the game!';
  //     displayScore( 0;
  //   }
  // }
  // number guessed is lesser than secretNumber
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('📉 Too low!';
  //     score--;
  //     displayScore( score;
  //   } else {
  //     displayMessage('💥 You lost the game!';
  //     displayScore( 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = getSecretNumber();
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
