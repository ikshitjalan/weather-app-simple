const request = require('request');

var geoCodeAddress = (address,callback)=>{
  var encodedAddress = encodeURIComponent(address);

 request({
    url : `http://www.mapquestapi.com/geocoding/v1/address?key=YxNsBGVpLnos6ZWi254Jvv2aJZq7f7h6&location=${encodedAddress}`,
    json : true,
  },(error,response,body)=>{

    if(error){
      callback('Unable to connect to mapquest Servers');
    }else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find your location');
    }else{

    callback(undefined,{
      address : body.results[0].providedLocation.location,
      latitude :body.results[0].locations[0].displayLatLng.lat,
      longitude:body.results[0].locations[0].displayLatLng.lng,

    })
  };


});
};

module.exports.geoCodeAddress=geoCodeAddress;
