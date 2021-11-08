const request = require('request');
const {APIKEY} = require('./api');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    callback(null, JSON.parse(body)['ip']);
  });
};
/**
 *  fetchCoordinates 
 */

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

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords['latitude']}&lon=${coords['longitude']}`, (error,res,body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching ISS fly over times for cordinates : {latitude:${coords.latitude}, longitude : ${coords.longitude}}`;
      callback(Error(msg), null);
      return;
    }
    const {response} = JSON.parse(body);
    callback(null, response);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if(error) {
      callback(error, null);
    }
    fetchCoordsByIP(ip, (error, location) => {
      if(error) {
        callback(error, null);
      }
      fetchISSFlyOverTimes(location, (error, respons) => {
        if(error) {
          callback(error, null);
        }
        callback(null, respons);
      });  
    });
  }) ;
};

module.exports = {nextISSTimesForMyLocation};
