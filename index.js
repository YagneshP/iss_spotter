
const { nextISSTimesForMyLocation } = require("./iss");
const printPassTime = require('./printPassTime');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the dates!
  printPassTime(passTimes);
});