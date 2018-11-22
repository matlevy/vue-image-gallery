export class UserService {
    constructor(){}
    getAll(){
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json());
    }
    getUser(userId) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json());
    }
}

export const userService = new UserService();