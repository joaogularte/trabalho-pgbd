const dynamodb =require('../../config/dynamodb');

const params = {
    TableName: 'Users',
    Item: ''
}

class UserModels{

    static post(data){
        params.Item = data;
        return dynamodb.put(params).promise();
    }
}

module.exports = UserModels;