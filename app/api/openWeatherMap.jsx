var axios = require('axios');

// const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c001c4deb455811db80e2cdf39027700&units=imperial';
const OPEN_WEATHER_MAP_URL = 'http://uinames.com/api/';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}?region=${encodedLocation}`;

  //   return axios.get(requestUrl).then(function (res) {
  //     debugger;
  //     if (res.data.cod && res.data.message){
  //       throw new Error(res.data.message);
  //     }
  //     else{
  //       return res.data.main.temp;
  //     }
  //   }, function(res){
  //       throw new Error(res.data.message);
  //   });
  //
  // }

  return axios.get(requestUrl).then(function (res) {
    debugger;
    return res.data.name;
  }, function(res){
      throw new Error(res.data.message);
  });

  }
}
