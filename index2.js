const {fetchMyIP, fetchCoordsByIP} = require('./iss_promised');

fetchMyIP()
.then(result =>  JSON.parse(result)['ip'])
.then(ip =>  fetchCoordsByIP(ip))
.then(result => {
  const {latitude, longitude} = JSON.parse(result);
  // console.log('long', longitude, 'lat', latitude);
  // return {latitude,longitude}
});
