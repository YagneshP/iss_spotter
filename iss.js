const request = require('request');
const {APIKEY} = require('./api');
// const fetchMyIP = function(callback) {
//   // use request to fetch IP address from JSON API
//   request('https://api.ipify.org?format=json', (error, response, body) => {
    
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }
//     callback(null, JSON.parse(body)['ip']);
//   });
// };

const fetchCoordsByIP = function(ip, callback) {
  request(`https://api.freegeoip.app/json/${ip}?apikey=${APIKEY}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const {latitude, longitude} = JSON.parse(body);
    callback(null,{latitude, longitude});
  });
};
// fetchMyIP,
module.exports = {fetchCoordsByIP};