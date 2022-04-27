const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const sity = yargs(hideBin(process.argv)).argv._[0];
const http = require("http");
const myAPIkey = process.env.myAPIkey;


const url = `http://api.weatherstack.com/forecast?access_key=${myAPIkey}&query=${sity}`;

http.get(url, (response) => {
  const statusCode = response.statusCode;

  if (statusCode !== 200) {
    console.error(`Status Code: ${statusCode}`);
    return;
  }

  response.setEncoding('utf8');

  let rawData = '';
  response.on('data', (chunk) => rawData += chunk);
  response.on('end', () => {
    let parsedData = JSON.parse(rawData);
    for (var key in parsedData.forecast) {
        console.error(`Прогноз на: ${parsedData.forecast[key].date}`);
        console.error(`Минимальная температура: ${parsedData.forecast[key].mintemp}`);
        console.error(`Максимальная температура: ${parsedData.forecast[key].maxtemp}`);
    }

  })
})
