const AWS = require('./aws');
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = dynamodb;