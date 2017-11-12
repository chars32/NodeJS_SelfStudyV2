const yargs = require('yargs');
const geocode = require('./geocode.js')

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
  .argv

let address = encodeURIComponent(argv.a)
geocode.geocodeAddress(address, (error, results) => {
  if (error) {
    console.log(error);
  }else {
    console.log(JSON.stringify(results, undefined,2));
  }
})


// encodeURIComponent will change the spaces in a string to '%20'
// decodeURIComponent will turn the '%20' code into a space
