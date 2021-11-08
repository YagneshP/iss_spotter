const {nextISSTimesForMyLocation} = require('./iss_promised');
const printPassTime = require('./printPassTime');

nextISSTimesForMyLocation()
.then(result => printPassTime(result));
