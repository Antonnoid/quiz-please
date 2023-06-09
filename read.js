const fs = require("fs");
const path = require("path");
const readlineSync = require('readline-sync');

let fileName = '';

const choose =  readlineSync.question(`Eto windows, vyberite temy:
1. Food
2. Shrek
3. Sport
`);


if (choose === '1') {
    fileName = 'food.txt'
} else if(choose === '2') {
    fileName = 'shrek.txt'
} else {
    fileName = 'sport.txt'
}

const filePath = path.join(__dirname, `topics/${fileName}`); // надо менять им файла на выбранную тему

function read() {
  const file = fs.readFileSync(filePath, "utf-8");
  const subarr = file.split("\r\n"); // получаем из файла массив
  let size = 2; //в подмассив берем 2 строки
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr[i] = subarr.slice(i * size, i * size + size);
  }
 return arr
}

read();

function 

