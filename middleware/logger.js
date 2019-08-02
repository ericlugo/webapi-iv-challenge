const moment = require('moment');
const loggerExports = (module.exports = {});

/*
  logger()
    logger logs to the console the following information about each request:
      request method,
      request url,
      and a timestamp
    this middleware runs on every request made to the API
*/

loggerExports.logger = function(request, response, next) {
  console.log(`${request.method} request received for '${request.url}' at ${moment().format('h:mm:ss a')}`);
  next();
};
