
const { fetchISSFlyOverTimes } = require("./iss");


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('99.232.83.17',(error, body) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', body)
// })

fetchISSFlyOverTimes({latitude: 43.8769,longitude: -79.0052}, (error, body) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Return response :', body);
});