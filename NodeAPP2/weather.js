const request = require('request');
const API = 'b9044052f437390991f2c2bd0f3a9382';

let weatherAddress = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${API}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }else  {
      callback(error, 'Unable to connect to weather server');
    }
  })
}

module.exports.weatherAddress = weatherAddress
