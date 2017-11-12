//-------------------------------------//
let somePromise = new Promise((resolve, reject) => {
  // resolve values work when the data received works properly.
  // the reject is sismilar to an error and will return a rejection value
  setTimeout(() => {
    resolve('it worked')
    reject('did not work')
  }, 2500)
});

somePromise.then((message) => {
  console.log('Success:',message);
}, (errorMessage) => {
  console.log('Error:', errorMessage);
})

//-------------------------------------//
let asyncAdd = (a,b) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b)
      }else {
        reject('Arguements must be number')
      }
    }, 1500)
  })
}

asyncAdd(5,10).then((res) =>{
    console.log(res);
    return asyncAdd(res, '30')
  }).then((res) => {
    console.log('Should be 45', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
})


//-------------------------------------//
const request = require('request')

let geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let endcodedAddress = encodeURIComponent(address)

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${endcodedAddress}`,
        json: true
      }, (error, response, body) => {
        // the stringify function will prevent the data object coming back compressed.
        // 1)the data we want to use. 2)the data we want to exclude. 3)how many spaces per indentation.
      // console.log(JSON.stringify(body, undefined, 2))
      if (error) {
        reject(error, 'Unable to connect to servers')
      }else if (body.status === 'ZERO_RESULTS') {  // this error code is specific to google's api call
        reject(error, 'Unable to find that address')
      }else if (body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      }
    })
  })
}

geocodeAddress('00000').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}), (errorMessage) => {
  console.log(errorMessage);
}
