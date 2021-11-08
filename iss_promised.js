const request = require('request-promise-native');
const {APIKEY} = require('./api');
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = function(ip){
  return request(`https://api.freegeoip.app/json/${ip}?apikey=${APIKEY}`)
}

module.exports = {fetchMyIP, fetchCoordsByIP};