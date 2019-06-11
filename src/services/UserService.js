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
            name: data.name,
            email: data.email
        }
        return await UserModel.post(user);
    }

    
    


}

const data = {
    name: 'joaioja',
    email: 'ijaiojdaiojda'
}

UserService.get('56dac56d-a4ef-4b1a-be2f-14d762be33a3')
    .then(data => console.log(data))
    .catch(e => console.log(e));

module.exports = UserService;