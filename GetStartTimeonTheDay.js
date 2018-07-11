var momemt = require('moment');
// Local GMT
var start = moment().startOf('day'); // set to 12:00 am today
var end = moment().endOf('day'); // set to 23:59 pm today

// For UTC
var start = moment.utc().startOf('day');
var end = moment.utc().endOf('day');
