const uuid = require('uuid/v4');
const UserModel = require('../models/UserModel');

class UserService {
    static async list(){
        return await UserModel.list();
    }

    static async get(id){
        const user = await UserModel.get(id);
        if(user.Item){
            return user.Item;
        }else{
            return null;
        }
    }

    static async post(data){
        const id = uuid();
        const user = {
            userId: id,
            nome: data.name,
            email: data.email
        }
        return await UserModel.post(user);
    }

    static async put(id, data){
        const user = await UserModel.put(id, data);
        if(user.Attributes){
            return user.Attributes
        }else{
            return false
        }
    }

    static async delete(id){
        const user = await UserModel.delete(id);
        if(user.ConditionalCheckFailedException){
            return false;
        } else {
            return true;
        }
    }

}

const data = {
    name: 'joaioja',
    email: 'ijaiojdaiojda'
}

UserService.delete('56dac56d-a4ef-4b1a-be2f-')
    .then(data => console.log(data))
    .catch(e => console.log(e));

module.exports = UserService;