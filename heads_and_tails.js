const readline = require('readline');
const fs = require('fs');
const input = readline.createInterface(process.stdin, process.stdout);
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const way = yargs(hideBin(process.argv)).argv._[0];

const num = Math.round(Math.random());
console.log("Загадано число 0 или 1?");
input.on('line', (data) => {
  if(data.match(/\d+/) == num){
    console.log("Верно!");
    fs.appendFileSync(way, '1');
  }
  else {
    console.log("Нет");
    fs.appendFileSync(way, '0');
  }
  input.close();
});
