const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const way = yargs(hideBin(process.argv)).argv._[0];

let data = fs.readFileSync(path.parse(way).base, 'utf8');
let victory = data.split('').reduce((a, i) => a + parseInt(i.match(/\d+/)), 0);
let lose = data.length - victory;
console.log('общее количество партий: ' + data.length);
console.log('количество выигранных партий: ' + victory);
console.log('количество проигранных партий: ' + lose);
console.log('процентное соотношение выигранных партий: ' + Math.round(victory / data.length * 100) + '%');
