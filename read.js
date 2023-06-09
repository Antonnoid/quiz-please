const { log } = require('console');
const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

let fileName = '';

console.log('Hello,Elbrus!');

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
    const quest = readlineSync.question(themeArr[i][0], themeArr[i][1]);
    if (quest === themeArr[i][1]) {
      console.log('Умница!');
      counter += 1;
    } else {
      console.log('Не умница!');
    }
  }
  console.log(`Твои познания равны ${counter} из 5`);
}
run();

// function run (arr) {
//     console.log(arr);
// }

// run ()
