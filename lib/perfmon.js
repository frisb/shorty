var util = require('util');

var counter = {send: 0, receive: 0};

var start = process.hrtime();

var pid = process.pid;

function measure() {
  var rec = counter.rec, sen = counter.send;
  counter.send = 0;
  counter.receive = 0;
  var end = process.hrtime(start);
  console.log(util.format('['+pid+'] Execution time (hr): %ds. rec: '+rec+'. sen: '+sen, end[0]));
}

setInterval(measure, 1000);

exports.counter = counter;

