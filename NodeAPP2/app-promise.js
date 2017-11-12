const axios = require('axios');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true //this will cause the user parsed information to always be a string
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeURL).then((res) => {
  if (res.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find the address');
  }
  let longitude = res.data.results[0].geometry.location.lng;
  let latitude = res.data.results[0].geometry.location.lat
  const API = 'b9044052f437390991f2c2bd0f3a9382';
  let weatherURL = `https://api.darksky.net/forecast/${API}/${latitude},${longitude}`
    console.log(res.data.results[0].formatted_address);
    return axios.get(weatherURL)
  }).then((res) => {
    let temperature = res.data.currently.temperature;
    let apparentTemperature = res.data.currently.apparentTemperature;
    console.log(`The temperature is currently ${temperature}. It feels like ${apparentTemperature}`);
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('UNABLE TO CONNECT TO API');
    }else {
      console.log(e.message);
    }
})
