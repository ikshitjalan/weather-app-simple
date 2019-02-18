const request = require('request');
var getWeather=(lat,long,callback) => {
  request({
  url: `https://api.darksky.net/forecast/e24ede63d60de29659907c847a83a633/${lat},${long}`,
  json: true,
},(error,response,body) =>{
  if(!error && response.statusCode === 200){
    callback(undefined,
      {
        temperature: ((body.currently.temperature - 32) * 5/9).toFixed(2),
        apparentTemperature:(( body.currently.apparentTemperature - 32) * 5/9).toFixed(2),
      }
    );
  }else{
    callback('Unable to fetch weather');
  }

  });
}

module.exports.getWeather = getWeather;
