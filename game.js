const readline = require('readline');
const input = readline.createInterface(process.stdin, process.stdout);
const quest = function (q) {
  return new Promise((resolve, reject) => {
    input.question(q, (ans) => {
      resolve(ans);
    })
  })
};

const num = Math.round(Math.random() * 100);
console.log('Загадано число в диапазоне от 0 до 100');
(async () => {
  while (true) {
    const ans1 = await quest('введите число: ');
    if (parseInt(ans1.match(/\d+/)) < num){
      console.log('Больше');
    } else if(parseInt(ans1.match(/\d+/)) > num) {
      console.log("Меньше");
    } else {
      console.log("Отгадано число " + num);
      input.close();
      break;
    };
  };
})()
