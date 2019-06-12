const dynamodb =require('../../config/dynamodb');

const params = {
    TableName: 'Users',
    Item: ''
}

class UserModels{

    static list(){
        return dynamodb.scan(params).promise();
    }

    static get(id){
        const key = { userId: id}
        params.Key = key;
        return dynamodb.get(params).promise();
    }

    static post(data){
        params.Item = data;
        return dynamodb.put(params).promise();
    }

    static async put(id, data){
        let updateExpression = "set ";
        const expressionAttributes = {}
        const key = { userId: id}

        if(data.name){
            console.log('entrou');
            updateExpression += "nome = :nome, ";
            expressionAttributes[":nome"] = data.name;
        }   
        if(data.email){
            updateExpression +=  "email = :email";
            expressionAttributes[":email"] = data.email;
        } 
        
        params.Key = key;
        params.ConditionExpression = 'attribute_exists(userId)'
        params.UpdateExpression = updateExpression;
        params.ExpressionAttributeValues = expressionAttributes;
        params.ReturnValues = "UPDATED_NEW"

        return dynamodb.update(params).promise();
    }

    static async delete(id){
        const key = { userId: id }
        params.Key = key;
        params.ConditionExpression = 'attribute_exists(userId)'
        return dynamodb.delete(params).promise();
    }
}

module.exports = UserModels;