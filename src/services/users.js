export class UserService {
    constructor(){}
    getAll(){
        return fetch('https://jsonplaceholder.typicode.com/users');
    }
}

export const userService = new UserService();