const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');
const { EOL } = require('os');

const userName = readlineSync.question(`Kak tebya zovut? ${EOL}`);
console.log(`Zdarova ${userName}!`);

let fileName = '';

// console.log('Hello,Elbrus!');

const choose = readlineSync.question(`Eto windows, vyberite temy:
1. Food
2. Shrek
3. Sport
`);

if (choose === '1') {
  fileName = 'food.txt';
} else if (choose === '2') {
  fileName = 'shrek.txt';
} else {
  fileName = 'sport.txt';
}

const filePath = path.join(__dirname, `topics/${fileName}`); // надо менять им файла на выбранную тему

function read() {
  const file = fs.readFileSync(filePath, 'utf-8');
  const subarr = file.split('\r\n'); // получаем из файла массив
  let size = 2; //в подмассив берем 2 строки
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr[i] = subarr.slice(i * size, i * size + size);
  }
  //   console.log(arr);
  return arr;
}

const themeArr = read();

function run() {
  // let question;
  // let answer;
  let counter = 0;
  for (let i = 0; i < themeArr.length; i++) {
    const quest = readlineSync.question(`${themeArr[i][0]}${EOL}`);
    if (quest === themeArr[i][1]) {
      console.log('\x1b[42mУмница!', '\x1b[0m');
      counter += 1;
    } else {
      console.log('\x1b[41mНе умница!', '\x1b[0m');
    }
  }
  console.log(`Твои познания равны ${counter} из 5`);
}
run();

