const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

const pathJoin = path.join(__dirname, './topics/Спорт.txt');

const userName = readlineSync.question('Как тебя звать? ');
console.log(`Привет ${userName}!`);

async function myQuiz() {
  const readFile = await fs.readFileSync(pathJoin, 'utf-8');
  console.log(readFile);
  for (let i = 0; i < readFile.length; i++) {}
}
const game = readlineSync.question('Желаешь сыграть в игру? ');
if (game.toLowerCase() === 'да') {
  console.log(`Спасибо за игру ${userName}!`, myQuiz());
} else console.log(`Ну и пошел ты ${userName}!`);
