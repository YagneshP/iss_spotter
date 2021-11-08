const {nextISSTimesForMyLocation} = require('./iss_promised');
const printPassTime = require('./printPassTime');

nextISSTimesForMyLocation()
.then(result => printPassTime(result))
.catch(error => console.log(`It didn't work :`, error.message));
