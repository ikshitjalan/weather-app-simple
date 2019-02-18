const yargs = require('yargs');
const geoCode = require('./geoCode/geoCode.js');
const weather = require('./weather/weather.js');

var argv = yargs.options({
  a: {
    demand:true,
    alias: 'address',
    desciption: 'Address to fetch weather:',
    string: true
  },

}).help().alias('help','h').argv;

console.log(argv);

geoCode.geoCodeAddress(argv.a,(errorMessage,results)=>{
  if(errorMessage)
  {
    console.log(errorMessage);
  }else{
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
      if(errorMessage)
      {
        console.log(errorMessage);
      }else{
        console.log( `Its currently ${weatherResults.temperature} and feels like ${weatherResults.apparentTemperature}. `);
      }
    });

  }
});
