let moment = require("moment");

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));
console.log(moment().endOf("day").fromNow());
