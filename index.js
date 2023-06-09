const readlineSync = require('readline-sync');

const userName = readlineSync.question('Как тебя звать? ');
console.log('Привет ' + userName + '!');



// const favFood = readlineSync.question('What is your favorite food? ');
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');
