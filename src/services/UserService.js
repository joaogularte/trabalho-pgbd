const uuid = require('uuid/v4');
const UserModel = require('../models/UserModel');

class UserService {
    
    static async 
    
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

module.exports = UserService;