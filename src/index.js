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