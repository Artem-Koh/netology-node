let date = new Date();
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
    .alias('y', 'year')
    .alias('m', 'month')
    .alias('d', 'date')
    .argv;
const arr = argv._;

if(arr.includes('sub')) {
  if(argv.year){
    date.setFullYear(date.getFullYear() - argv.year);
    console.log(date.toLocaleString());
  }
  else if (argv.month) {
    date.setMonth(date.getMonth() - argv.month);
    console.log(date.toLocaleString());
  }
  else if (argv.date) {
    date.setDate(date.getDate() - argv.date);
    console.log(date.toLocaleString());
  }
} else if(arr.includes('add')){
  if(argv.year){
    date.setFullYear(date.getFullYear() - argv.year);
    console.log(date.toLocaleString());
  }
  else if (argv.month) {
    date.setMonth(date.getMonth() - argv.month);
    console.log(date.toLocaleString());
  }
  else if (argv.date) {
    date.setDate(date.getDate() - argv.date);
    console.log(date.toLocaleString());
  }
} else {
  if(argv.year){console.log(date.getFullYear())}
  else if (argv.month) {console.log(date.getMonth() + 1)}
  else if (argv.date) {console.log(date.getDate())}
  else {console.log(date.toLocaleString())}
}
