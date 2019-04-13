'use strict';

const moment = require('moment')

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Serverless CI/CD demo',
      version: 'v2.1',
      timestamp: moment().unix()
    }),
  };
};
