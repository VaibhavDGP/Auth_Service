const userRepository = require('../repository/user-repository');

class UserService{
    constructor(){
        this.userRepository = new userRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer.")
            throw error;
        }
    }
}

module.exports =   UserService
