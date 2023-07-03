import Game from './game.js';
import Goblin from './goblin.js';
import Scoreboard from './scoreboard.js';
import Cursor from './cursor.js';

const game = new Game();
const goblin = new Goblin();
const scoreboard = new Scoreboard();
const cursor = new Cursor();

game.setGoblin(goblin);
game.setScoreboard(scoreboard);
game.setCursor(cursor);

goblin.setGame(game);
scoreboard.setGame(game);
cursor.setGame(game);

game.start();

const gameBoard = document.getElementById('game-board');
gameBoard.addEventListener('click', (event) => {
  if (event.target.classList.contains('goblin')) {
    game.handleClick();
  }
});

function moveCharacter() {
  const oldCharacters = document.querySelectorAll('.character');
  oldCharacters.forEach((character) => {
    character.parentElement.removeChild(character);
  });

  const randomIndex = game.getRandomIndex();
  const cell = document.getElementById(`cell-${randomIndex}`);
  const characterElement = document.createElement('img');
  characterElement.src = require('./character.png').default;
  characterElement.classList.add('character');
  cell.appendChild(characterElement);
}

gameBoard.innerHTML = '';

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.id = `cell-${i}`;
  gameBoard.appendChild(cell);
}

moveCharacter();
setInterval(moveCharacter, 2000);
setTimeout(() => {
  moveCharacter();
}, 1000);
