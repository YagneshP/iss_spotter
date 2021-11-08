const request = require('request-promise-native');
const {APIKEY} = require('./api');
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = function(result){
  let ip = JSON.parse(result)['ip']
  return request(`https://api.freegeoip.app/json/${ip}?apikey=${APIKEY}`)
}

const fetchISSFlyOverTimes = function(result){
  const {latitude, longitude} = JSON.parse(result)
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(result => {
   let body =  JSON.parse(result);
   return body.response
  })   
}
module.exports = {nextISSTimesForMyLocation};