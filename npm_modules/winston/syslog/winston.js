var winston = require('winston');

require('winston-syslog');

var options = {
  protocol: 'udp4',
  host:'localhost',
  port: 514
};


winston.add(winston.transports.Syslog, options);


winston.log('info', 'info level message');