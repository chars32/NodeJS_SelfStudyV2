const request = require('request'); //using the request npm package to make browser requests

let geocodeAddress = (address, callback) => {
  request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true
    }, (error, response, body) => {
      // the stringify function will prevent the data object coming back compressed.
      // 1)the data we want to use. 2)the data we want to exclude. 3)how many spaces per indentation.
    // console.log(JSON.stringify(body, undefined, 2))
    if (error) {
      callback(error, 'Unable to connect to servers')
    }else if (body.status === 'ZERO_RESULTS') {  // this error code is specific to google's api call
      callback(error, 'Unable to find that address')
    }else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
  })
}

module.exports = {
  geocodeAddress
}
