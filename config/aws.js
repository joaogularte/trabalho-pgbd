const AWS = require('aws-sdk');
const config = require('./default');
AWS.config.update(config.aws);
AWS.config.setPromisesDependency(null);

module.exports =  AWS;